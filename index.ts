// Copyright (c) 2022 System233
// 
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT

import { Program, Expression, MemberExpression, Super, Identifier, Statement, Property } from 'estree'

export interface ProtobufStaticModuleInfo {
    Reader: string;
    Writer: string;
    util: string;
    roots: string;
}
export interface ProtobufMessageField {
    type: 'field';
    dtype:string;
    name: string;
    id: number;
}
export interface ProtobufEnumField{
    type: 'efield';
    name: string;
    value:number;
};
export type ProtobufField=ProtobufMessageField|ProtobufEnumField;
export interface ProtobufType {
    name:string;
    type: 'message'|'enum',
    children: Array<ProtobufType|ProtobufField>;
}

export interface ProtobufModule{
    name:string;
    type:'module';
    types:ProtobufType[]
};

export interface ProtobufJSON{
    source:string;
    module:ProtobufModule;
}
export const TopSearch = <T>(module: Program | Expression | Statement | Array<Statement | Expression>, callback: (module: Array<Statement | Expression>) => T, option?: { withArguments: boolean }): T => {
    while (true) {
        if (!Array.isArray(module)) {
            if (module.type == 'Program') {
                if (module.body.length == 1) {
                    module = module.body[0] as Statement;
                } else {
                    module = module.body as Statement[];
                }
            }
            else if (module.type == 'FunctionExpression') {
                module = module.body.body;
            }
            else if (module.type == 'ArrowFunctionExpression' && module.body.type == 'BlockStatement') {
                module = module.body.body;
            }
            else if (module.type == 'ExpressionStatement') {
                module = module.expression;
            }
            else if (module.type == 'SequenceExpression') {
                module = module.expressions;
            }
            else if (module.type == 'CallExpression' && module.callee.type != 'Super') {
                if (option?.withArguments) {
                    module = [module.callee, ...module.arguments.filter(x => x.type != 'SpreadElement') as (Expression | Statement)[]];
                } else {
                    module = module.callee;
                }
            }
            else if (module.type == 'ReturnStatement') {
                module = module.argument;
            }
            else if (module.type == 'BlockStatement') {
                module = module.body;
            }
            else if (module.type == 'FunctionDeclaration') {
                module = module.body;
            }
            else if (module.type == 'VariableDeclaration') {
                module = module.declarations.map(x => x.init).filter(x => x != null);
            }
            else if (module.type == 'ObjectExpression') {
                module = (module.properties.filter(x => x.type == 'Property') as Property[]).map(x => x.value).filter(x => x != null) as Expression[];
            }
            else {
                return callback([module as Expression | Statement]);
            }
            continue;
        }
        return callback(module);
    }
}
export const CheckProtobufStaticModule = (module: Program | Expression | Statement | Array<Statement | Expression>): ProtobufStaticModuleInfo => {
    return TopSearch(module, (module) => {
        const map = {
            Reader: null,
            Writer: null,
            util: null,
            roots: null
        } as ProtobufStaticModuleInfo;
        const features = ['Reader', 'Writer', 'util', 'roots'];
        const findMemberExpression = (node: Expression | Super, callback: (member: MemberExpression) => void) => {
            if (!node) {
                return;
            }
            if (node.type == 'LogicalExpression') {
                findMemberExpression(node.left, callback);
                findMemberExpression(node.right, callback);
            }
            if (node.type == 'MemberExpression') {
                findMemberExpression(node.object, callback);
                callback(node);
            }
        }
        const IdName = (id: Identifier) => id.name;
        module.forEach(node => {
            if (node.type == 'VariableDeclaration') {
                node.declarations.forEach(declarator => {
                    findMemberExpression(declarator.init, (member) => {
                        if (member.property.type == 'Identifier' && features.includes(member.property.name)) {
                            map[member.property.name] = '$';
                            if (declarator.id.type == 'Identifier') {
                                map[member.property.name] = IdName(declarator.id);
                            }
                        }
                    })

                    if (declarator.id.type == 'ObjectPattern') {
                        if (declarator.id.type == 'ObjectPattern') {
                            declarator.id.properties.forEach(property => {
                                if (property.type == 'Property' && property.key.type == 'Identifier' && property.value.type == 'Identifier' && features.includes(property.key.name)) {
                                    map[property.key.name] = property.value.name;
                                }
                            })
                        }
                    }
                })
            }
        });
        return map;
    })
}

export const LoadProtobufStaticModuleMessageDecode = (module: Program | Expression | Statement | Array<Statement | Expression>): ProtobufMessageField[] => {

    const loader = (module: Array<Statement | Expression>, id: number):ProtobufMessageField => {
        for (const node of module) {
            if (node.type == 'ExpressionStatement') {
                const data = TopSearch(node.expression, x => loader(x, id));
                if (data) {
                    return data;
                }
            }
            //x.field=reader.type()
            if (node.type == 'AssignmentExpression') {
                if (node.left.type == 'MemberExpression'
                    && node.left.property.type == 'Identifier'
                    && node.right.type == 'CallExpression'
                    && node.right.callee.type == 'MemberExpression'
                    && node.right.callee.property.type == 'Identifier') {

                    //x.field=root.type.decode(reader)
                    if (node.right.callee.property.name == 'decode'
                        && node.right.callee.object.type == 'MemberExpression'
                        && node.right.callee.object.property.type == 'Identifier') {
                        return {
                            type:'field',
                            dtype: node.right.callee.object.property.name,
                            name: node.left.property.name,
                            id
                        }
                    }
                    return {
                        type:'field',
                        dtype: node.right.callee.property.name,
                        name: node.left.property.name,
                        id
                    }
                }
            }
        }
        return null;
    }
    return TopSearch(module, (module) => {
        const fields: ProtobufMessageField[] = [];
        for (const node of module) {
            if (node.type == 'WhileStatement' || node.type == 'ForStatement') {
                return LoadProtobufStaticModuleMessageDecode(node.body);
            }

            if (node.type == 'SwitchStatement') {
                for (const field of node.cases) {

                    //case number:x.field=reader.type()
                    if (field.test && field.test.type == 'Literal' && typeof field.test.value == 'number') {
                        const id = field.test.value;
                        const data = loader(field.consequent, id);
                        if (data) {
                            fields.push(data);
                        }
                    }
                }
            }
            if (node.type == 'ExpressionStatement') {
                if (node.expression.type == 'ConditionalExpression') {
                    const cond = node.expression;
                    //reader>>>3==number?():skip;
                    if (cond.test.type == 'BinaryExpression'
                        && cond.test.right.type == 'Literal'
                        && typeof cond.test.right.value == 'number'
                        && cond.test.left.type == 'BinaryExpression'
                        && cond.test.left.operator == '>>>'
                        && cond.test.left.right.type == 'Literal'
                        && cond.test.left.right.value == 3) {
                        const id = cond.test.right.value;
                        const data = loader([cond.consequent], id);
                        if (data) {
                            fields.push(data);
                        }
                    }
                }
            }
        }
        return fields;
    })
}
export const LoadProtobufStaticModuleTypeData = (module: Program | Expression | Statement | Array<Statement | Expression>,name:string): ProtobufType => {
    return TopSearch(module, (module) => {
        const type:ProtobufType={
            name,
            type:'message',
            children:[]
        };
        const merge=(data:ProtobufType)=>{
            if(data.children.length){
                type.type=data.type;
                type.children.push(...data.children);
            }
        }
        for (const node of module) {
            if (node.type == 'ReturnStatement') {
                merge(LoadProtobufStaticModuleTypeData(node.argument,name));
            }
            if (node.type == 'ExpressionStatement') {
                merge(LoadProtobufStaticModuleTypeData(node.expression,name));
            }
            //type.decode=function(){};
            if (node.type == 'AssignmentExpression' && node.left.type == 'MemberExpression' && node.left.property.type == 'Identifier') {
                //type.nestedType=(function(){})();
                if(node.right.type=='CallExpression'){
                    type.children.push(LoadProtobufStaticModuleTypeData(node.right,node.left.property.name))
                } else if(node.left.property.name == 'decode'){
                    type.children.push(...LoadProtobufStaticModuleMessageDecode(node.right));
                }
            }
            if (node.type == 'AssignmentExpression'
                && node.right.type == 'Literal'
                && typeof node.right.value == 'number'
                && node.left.type == 'MemberExpression'
                && node.left.property.type == 'AssignmentExpression'
                && node.left.property.right.type == 'Literal'
                && typeof node.left.property.right.value == 'string') {
                    type.type='enum',
                    type.children.push({
                        type:'efield',
                        name:node.left.property.right.value,
                        value:node.right.value
                    });
            }
        }
        return type;
    })
}
export const LoadProtobufStaticModuleType = (module: Program | Expression | Statement | Array<Statement | Expression>) => {
    return TopSearch(module, (module) => {
        const result: ProtobufType[] = [];
        for (const node of module) {
            if (node.type == 'ExpressionStatement') {
                const data = LoadProtobufStaticModuleType(node.expression);
                result.push(...data);
            }
            //package.type=(function{})();
            if (node.type == 'AssignmentExpression' && node.left.type == 'MemberExpression' && node.left.property.type == 'Identifier') {
                result.push(LoadProtobufStaticModuleTypeData(node.right,node.left.property.name));
            }
        }
        return result;
    });
}
export const LoadProtobufStaticModule = (module: Program | Expression | Statement | Array<Statement | Expression>, info: ProtobufStaticModuleInfo): ProtobufModule[] => {
    
    return TopSearch(module, (module) => {
        const modules:ProtobufModule[]=[];
        for (const node of module) {
            if (node.type == 'ExpressionStatement') {
                modules.push(...LoadProtobufStaticModule(node.expression, info));
            }
            //$roots.package=(function(){})();
            if (node.type == 'AssignmentExpression' && node.left.type == 'MemberExpression' && node.left.object.type == 'Identifier' && node.left.object.name == info.roots && node.left.property.type == 'Identifier') {
                modules.push({
                    name:node.left.property.name,
                    type:'module',
                    types:LoadProtobufStaticModuleType(node.right)
                })
            }
        }
        return modules;
    })
}
export const SearchModule = (module: Program | Expression | Statement, depth: number): ProtobufModule[] => {
    if (depth <= 0) {
        return [];
    }
    const info = CheckProtobufStaticModule(module);
    const data = LoadProtobufStaticModule(module, info);
    if (data.length) {
        return data;
    }
    return TopSearch(module, (module) => module.map(node => SearchModule(node, depth - 1)).flat(), { withArguments: true });
}
export const ToProtoString = (module: ProtobufModule, space?: number) => {
    const newline = space ? '\n' : '';
    const step = Array.from({ length: space }, () => ' ').join('');
    const dumpField=(type:ProtobufType|ProtobufField,indent:string)=>{
        if(type.type=='field'){
            return `${indent}${type.dtype} ${type.name} = ${type.id};`;
        }
        else if(type.type=='efield'){
            return `${indent}${type.name} = ${type.value};`;
        }
        return dumpType(type,indent);
    }
    const dumpType=(type:ProtobufType,indent:string=newline)=>{
        if(type.type=='message'||type.type=='enum'){
            return `${indent}${type.type} ${type.name} {${type.children.map(field => dumpField(field,indent+step)).join('')}${indent}};`;
        }
        return `${indent}// error type: ${(type as any)?.type}`;
    }
    return [
        `syntax = "proto3";\npackage ${module.name};`,
        module.types.map(x=>dumpType(x)),
    ].flat().join(newline + newline);
}

