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
export interface ProtobufField {
    type: string;
    name: string;
    id: number;
}
export interface ProtobufMessage {
    type: 'message',
    fields: Array<ProtobufField>
}
export interface ProtobufEnum {
    type: 'enum',
    map: Record<string, number>;
}
export type ProtobufData = ProtobufMessage | ProtobufEnum;
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

export const LoadProtobufStaticModuleMessageDecode = (module: Program | Expression | Statement | Array<Statement | Expression>): ProtobufData => {

    const loader = (module: Array<Statement | Expression>, id: number) => {
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
                            type: node.right.callee.object.property.name,
                            name: node.left.property.name,
                            id
                        }
                    }
                    return {
                        type: node.right.callee.property.name,
                        name: node.left.property.name,
                        id
                    }
                }
            }
        }
        return null;
    }
    return TopSearch(module, (module) => {
        const fields: { name: string, type: string, id: number }[] = [];
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
        return {
            type: 'message',
            fields
        }
    })
}
export const LoadProtobufStaticModuleMessageData = (module: Program | Expression | Statement | Array<Statement | Expression>): ProtobufData => {
    return TopSearch(module, (module) => {
        const enumMap: Record<string, number> = {};
        for (const node of module) {
            if (node.type == 'ReturnStatement') {
                const data = LoadProtobufStaticModuleMessageData(node.argument);
                if (data) {
                    if(data.type=='message'){
                        return data;
                    }else{
                        Object.assign(enumMap,data.map);
                    }
                }
            }
            if (node.type == 'ExpressionStatement') {
                const data = LoadProtobufStaticModuleMessageData(node.expression);
                if (data) {
                    if(data.type=='message'){
                        return data;
                    }else{
                        Object.assign(enumMap,data.map);
                    }
                }
            }
            if (node.type == 'AssignmentExpression' && node.left.type == 'MemberExpression' && node.left.property.type == 'Identifier' && node.left.property.name == 'decode') {
                return LoadProtobufStaticModuleMessageDecode(node.right);
            }
            if (node.type == 'AssignmentExpression'
                && node.right.type == 'Literal'
                && typeof node.right.value == 'number'
                && node.left.type == 'MemberExpression'
                && node.left.property.type == 'AssignmentExpression'
                && node.left.property.right.type == 'Literal'
                && typeof node.left.property.right.value == 'string') {
                enumMap[node.left.property.right.value] = node.right.value;
            }
        }
        if (Object.keys(enumMap).length) {
            return {
                type: 'enum',
                map: enumMap
            }
        }
        return null;
    })
}
export const LoadProtobufStaticModuleMessage = (module: Program | Expression | Statement | Array<Statement | Expression>) => {
    return TopSearch(module, (module) => {
        const result: [string, ProtobufData][] = [];
        for (const node of module) {
            if (node.type == 'ExpressionStatement') {
                const data = LoadProtobufStaticModuleMessage(node.expression);
                result.push(...data);
            }
            if (node.type == 'AssignmentExpression' && node.left.type == 'MemberExpression' && node.left.property.type == 'Identifier') {
                result.push([node.left.property.name, LoadProtobufStaticModuleMessageData(node.right)]);
            }
        }
        return result;
    });
}
export const LoadProtobufStaticModule = (module: Program | Expression | Statement | Array<Statement | Expression>, info: ProtobufStaticModuleInfo): [string, Record<string, ProtobufData>] => {
    return TopSearch(module, (module) => {
        for (const node of module) {
            if (node.type == 'ExpressionStatement') {
                const result = LoadProtobufStaticModule(node.expression, info);
                if (result != null) {
                    return result;
                }
            }
            if (node.type == 'AssignmentExpression' && node.left.type == 'MemberExpression' && node.left.object.type == 'Identifier' && node.left.object.name == info.roots && node.left.property.type == 'Identifier') {
                return [node.left.property.name, Object.fromEntries(LoadProtobufStaticModuleMessage(node.right))];
            }
        }
        return null;
    })
}
export const SearchModule = (module: Program | Expression | Statement, deep: number): [string, Record<string, ProtobufData>][] => {
    if (deep <= 0) {
        return [];
    }
    const info = CheckProtobufStaticModule(module);
    const data = LoadProtobufStaticModule(module, info);
    if (data) {
        return [data];
    }
    return TopSearch(module, (module) => module.map(node => SearchModule(node, deep - 1) as [string, Record<string, ProtobufData>][]).flat(), { withArguments: true });
}
export const ToProtoString = (packageName: string, module: Record<string, ProtobufData>, space?: number) => {
    const newline = space ? '\n' : '';
    const indent = newline + Array.from({ length: space }, () => ' ').join('');
    return [
        `syntax = "proto3";\npackage ${packageName};`,
        Object.entries(module).map(([name, data]) => {
            if (data.type == 'message') {
                return `message ${name} {${indent}${data.fields.map(field => `${field.type} ${field.name} = ${field.id};`).join(indent)
                    }${newline}};`;
            } else if (data.type == 'enum') {
                return `enum ${name} {${indent}${Object.entries(data.map).map(([name, id]) => `${name} = ${id};`).join(indent)
                    }${newline}};`;
            }
        })
    ].flat().join(newline + newline);
}

