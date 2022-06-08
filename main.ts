#!/usr/bin/env node
// Copyright (c) 2022 System233
// 
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT

import * as espree from 'espree'
import { readFile, writeFile } from 'fs/promises'
import { basename, dirname } from 'path';
import {ProtobufData, SearchModule, ToProtoString} from './index'
import app from './package.json'
const TITLE=`This file is decompiled by depbjs v${app.version}.`;
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
    input:{
        type:'text',
        required:true,
        message:'Target script input path.'
    },
    help:{
        type:'bool',
        message:'Show this message.'
    },
    output:{
        type:'text',
        required:true,
        message:'.proto output path.'
    },
    space:{
        type:'number',
        required:false,
        default:4,
        message:'Number of indent spaces in .proto output.'
    },
    deep:{
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
    notitle:{
        type:'bool',
        default:false,
        message:'Hidden title in output .'
    }
};
const showHelp=()=>{
    console.log(`Protobufjs decompiler v${app.version}`);
    console.log('depbjs -i target.js -o target.proto --space 4');
    console.log('Options:')
    Object.entries(OPTIONS as Record<string,Option>).forEach(([name,value])=>{
        console.log(`\t-${name[0]} --${name}\t${value.message}\t${value.default!=null?`default=${value.default}`:''}`);
    })
}
const getOptions=()=>{
    return Object.fromEntries(Object.entries(OPTIONS as Record<string,Option>).map(([name,opt])=>{
        const paramNames=[`-${name[0]}`,`--${name}`];
        const index=process.argv.findIndex(x=>paramNames.includes(x));
        if(opt.type=='bool'){
            return [name,index!=-1]
        }
        if(index==-1){
            if((opt.required&&!opt.default)){
                console.error(`Error: Required '--${name}' option.`)
                showHelp();
                process.exit(-1);
            }
            return [name,opt.default];
        }
        const value=process.argv[index+1];
        if(opt.type=='text'){
            return [name,value]
        }
        return [name,parseFloat(value)];
    })) as Record<keyof typeof OPTIONS,any>;
}
import {createInterface} from 'readline'
const main=async()=>{
    const options=getOptions();
    if(options.help){
        showHelp();
    }else{
        const title=options.notitle?'':TITLE;
        const read=()=>{
            if(options.input=='-'){
                process.stdin.setEncoding('utf-8');
                return new Promise((resolve)=>{
                    const data:string[]=[];
                    process.stdin.on('readable',()=>data.push(process.stdin.read()))
                    process.stdin.on('end',()=>resolve(data.join('')));
                });
            }else{
                return readFile(options.input,'utf-8')
            }
        }
        const source=await read();
        const module=espree.parse(source,{
            ecmaVersion:options.ecmaVersion,
            sourceType: options.type,
            ecmaFeatures:{
                jsx:options.jsx
            }
        });
        const result=SearchModule(module, options.deep);
        const getHeader=()=>{
            if(options.notitle){
                return '';
            }
            const inputName=options.input=='-'?'stdin':options.input;
            return [
                '',
                TITLE,
                `source: ${inputName}`,
                ''
            ].map(x=>`// ${x}\n`).join('')+'\n'
        }
        const dump=async(name:string,module:Record<string,ProtobufData>,index:number)=>{
            const data=getHeader()+ToProtoString(name,module,options.space);
            if(options.output=='-'){
                console.log(data);
            }else{
                const output=result.length>1?`${dirname(options.output)}/${basename(options.output,'.proto')}.${index}.proto`:options.output;
                console.error(`Writing to ${output}`);
                return writeFile(output,data);
            }
        }
        if(result.length){
            await Promise.all(result.map(([name,data],index)=>dump(name,data,index)));
        }else{
            console.error(`Nothing Found in '${options.input}'.`)
        }
    }

    
}
main();