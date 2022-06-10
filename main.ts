#!/usr/bin/env node
// Copyright (c) 2022 System233
// 
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT

import * as espree from 'espree'
import { readFile, writeFile } from 'fs/promises'
import { basename, dirname } from 'path';
import {ProtobufModule, ProtobufType, SearchModule, ToProtoString} from './index'
import {displayName,version,description} from './package.json'
const TITLE=`This file is decompiled by depbjs v${version}.`;
interface OptionType{
    text:string;
    number:number,
    bool:boolean
};
interface Option{
    type:keyof OptionType,
    required?:boolean,
    message:string,
    default?:any;
}
const OPTIONS={
    // input:{
    //     type:'text',
    //     required:true,
    //     message:'Target script input path.'
    // },
    output:{
        type:'text',
        required:true,
        message:'Output path of result.'
    },
    space:{
        type:'number',
        required:false,
        default:4,
        message:'Number of indent spaces in .proto output.'
    },
    depth:{
        type:'number',
        default:1000,
        message:'Maximum recursion depth.'
    },
    ecmaVersion:{
        type:'text',
        default:'latest',
        message:'ECMA version: 3, 5, 6-12, 2015-2022.'
    },
    type:{
        type:'text',
        default:'script',
        message:'Source type: script, commonjs, module.'
    },
    jsx:{
        type:'bool',
        default:false,
        message:'Enable JSX parsing.'
    },
    format:{
        type:'text',
        default:'proto',
        message:'Output format: json, proto.'
    },
    notitle:{
        type:'bool',
        default:false,
        message:'Do not show title in output.'
    },
    help:{
        type:'bool',
        message:'Show this message.'
    },
};
const showHelp=()=>{
    console.log(`${displayName} v${version}`);
    console.log(`${description}`);
    console.log('Option:')
    Object.entries(OPTIONS as Record<string,Option>).forEach(([name,value])=>{
        console.log(`\t-${name[0]} --${name}\t${value.message}\t${value.default!=null?`default=${value.default}`:''}`);
    })
    console.log('usage: depbjs input1.js input2.js ... (or pipe) -o target.proto');
    console.log(process.env)
}
const getOptions=()=>{
    const set=new Set<number>();
    const error=(msg:string)=>{
        console.error(`Error: ${msg}`)
        showHelp();
        process.exit(-1);
    }
    const options=Object.fromEntries(Object.entries(OPTIONS as Record<string,Option>).map(([name,opt])=>{
        const paramNames=[`-${name[0]}`,`--${name}`];
        const index=process.argv.findIndex(x=>paramNames.includes(x));
        set.add(index);
        if(opt.type=='bool'){
            return [name,index!=-1]
        }
        if(index==-1){
            if((opt.required&&!opt.default)){
                error(`Required '--${name}' option.`);
            }
            return [name,opt.default];
        }
        if(index+1>=process.argv.length){
            error(`Option '${name}' need a params.`);
        }
        set.add(index+1);
        const value=process.argv[index+1];
        if(opt.type=='text'){
            return [name,value];
        }
        return [name,parseFloat(value)];
    })) as Record<keyof typeof OPTIONS,any>;
    const inputs=process.argv.filter((_,i)=>i>=2&&!set.has(i));
    if(!inputs.length){
        error(`No script input.`);
    }
    return {options,inputs};
}

const main=async()=>{
    const {options,inputs}=getOptions();
    if(options.help){
        showHelp();
    }else{
        const read=(path:string)=>{
            if(path=='-'){
                process.stdin.setEncoding('utf-8');
                return new Promise((resolve)=>{
                    const data:string[]=[];
                    process.stdin.on('readable',()=>data.push(process.stdin.read()))
                    process.stdin.on('end',()=>resolve(data.join('')));
                });
            }else{
                return readFile(path,'utf-8')
            }
        }
        const modules=await Promise.all(inputs.map(async path=>{
            const source=await read(path);
            const module=espree.parse(source,{
                ecmaVersion:options.ecmaVersion,
                sourceType: options.type,
                ecmaFeatures:{
                    jsx:options.jsx
                }
            });
            return SearchModule(module, options.depth).map(module=>({source:path,module}));
        })).then(x=>x.flat());
        const getHeader=(path:string)=>{
            if(options.notitle){
                return '';
            }
            const inputName=path=='-'?'stdin':path;
            return [
                '',
                TITLE,
                `source: ${inputName}`,
                ''
            ].map(x=>`// ${x}\n`).join('')+'\n'
        }
        const wirteToFile=(path:string,data:string,index?:number)=>{
            if(path=='-'){
                console.log(data);
                return;
            }
            const output=index!=null&&modules.length>1?`${dirname(path)}/${basename(path,'.'+options.format)}.${index}.${options.format}`:options.output;
            console.error(`Writing to ${output}`);
            return writeFile(output,data);
        }
        const dump=async(source:string,module:ProtobufModule,index:number)=>{
            const data=getHeader(source)+ToProtoString(module,options.space);
            return wirteToFile(options.output,data,index);
        }
        if(modules.length){
            if(options.format=='json'){
                await wirteToFile(options.output,JSON.stringify(modules,null,options.space),null);
            }else if(options.format=='proto'){
                await Promise.all(modules.map((module,index)=>dump(module.source,module.module,index)));
            }else{
                console.error(`Unknown output format '${options.format}'.`)
            }
        }else{
            console.error(`Nothing Found in '${inputs}'.`)
        }
    }
}
main();