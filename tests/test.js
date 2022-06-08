/*eslint-disable block-scoped-var, id-length, no-control-regex, no-magic-numbers, no-prototype-builtins, no-redeclare, no-shadow, no-var, sort-vars*/
(function(global, factory) { /* global define, require, module */

    /* AMD */ if (typeof define === 'function' && define.amd)
        define(["protobufjs/minimal"], factory);

    /* CommonJS */ else if (typeof require === 'function' && typeof module === 'object' && module && module.exports)
        module.exports = factory(require("protobufjs/minimal"));

})(this, function($protobuf) {
    "use strict";

    // Common aliases
    var $Reader = $protobuf.Reader, $Writer = $protobuf.Writer, $util = $protobuf.util;
    
    // Exported root namespace
    var $root = $protobuf.roots["default"] || ($protobuf.roots["default"] = {});
    
    $root.testPackage = (function() {
    
        /**
         * Namespace testPackage.
         * @exports testPackage
         * @namespace
         */
        var testPackage = {};
    
        testPackage.SubMsg = (function() {
    
            /**
             * Properties of a SubMsg.
             * @memberof testPackage
             * @interface ISubMsg
             * @property {number|null} [testSubmsg] SubMsg testSubmsg
             */
    
            /**
             * Constructs a new SubMsg.
             * @memberof testPackage
             * @classdesc Represents a SubMsg.
             * @implements ISubMsg
             * @constructor
             * @param {testPackage.ISubMsg=} [properties] Properties to set
             */
            function SubMsg(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }
    
            /**
             * SubMsg testSubmsg.
             * @member {number} testSubmsg
             * @memberof testPackage.SubMsg
             * @instance
             */
            SubMsg.prototype.testSubmsg = 0;
    
            /**
             * Creates a new SubMsg instance using the specified properties.
             * @function create
             * @memberof testPackage.SubMsg
             * @static
             * @param {testPackage.ISubMsg=} [properties] Properties to set
             * @returns {testPackage.SubMsg} SubMsg instance
             */
            SubMsg.create = function create(properties) {
                return new SubMsg(properties);
            };
    
            /**
             * Encodes the specified SubMsg message. Does not implicitly {@link testPackage.SubMsg.verify|verify} messages.
             * @function encode
             * @memberof testPackage.SubMsg
             * @static
             * @param {testPackage.ISubMsg} message SubMsg message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            SubMsg.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.testSubmsg != null && Object.hasOwnProperty.call(message, "testSubmsg"))
                    writer.uint32(/* id 1, wireType 0 =*/8).int32(message.testSubmsg);
                return writer;
            };
    
            /**
             * Encodes the specified SubMsg message, length delimited. Does not implicitly {@link testPackage.SubMsg.verify|verify} messages.
             * @function encodeDelimited
             * @memberof testPackage.SubMsg
             * @static
             * @param {testPackage.ISubMsg} message SubMsg message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            SubMsg.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };
    
            /**
             * Decodes a SubMsg message from the specified reader or buffer.
             * @function decode
             * @memberof testPackage.SubMsg
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {testPackage.SubMsg} SubMsg
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            SubMsg.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.testPackage.SubMsg();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.testSubmsg = reader.int32();
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };
    
            /**
             * Decodes a SubMsg message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof testPackage.SubMsg
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {testPackage.SubMsg} SubMsg
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            SubMsg.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };
    
            /**
             * Verifies a SubMsg message.
             * @function verify
             * @memberof testPackage.SubMsg
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            SubMsg.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.testSubmsg != null && message.hasOwnProperty("testSubmsg"))
                    if (!$util.isInteger(message.testSubmsg))
                        return "testSubmsg: integer expected";
                return null;
            };
    
            /**
             * Creates a SubMsg message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof testPackage.SubMsg
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {testPackage.SubMsg} SubMsg
             */
            SubMsg.fromObject = function fromObject(object) {
                if (object instanceof $root.testPackage.SubMsg)
                    return object;
                var message = new $root.testPackage.SubMsg();
                if (object.testSubmsg != null)
                    message.testSubmsg = object.testSubmsg | 0;
                return message;
            };
    
            /**
             * Creates a plain object from a SubMsg message. Also converts values to other types if specified.
             * @function toObject
             * @memberof testPackage.SubMsg
             * @static
             * @param {testPackage.SubMsg} message SubMsg
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            SubMsg.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.defaults)
                    object.testSubmsg = 0;
                if (message.testSubmsg != null && message.hasOwnProperty("testSubmsg"))
                    object.testSubmsg = message.testSubmsg;
                return object;
            };
    
            /**
             * Converts this SubMsg to JSON.
             * @function toJSON
             * @memberof testPackage.SubMsg
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            SubMsg.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };
    
            return SubMsg;
        })();
    
        testPackage.TestMessage = (function() {
    
            /**
             * Properties of a TestMessage.
             * @memberof testPackage
             * @interface ITestMessage
             * @property {string|null} [testField] TestMessage testField
             * @property {number|null} [i32] TestMessage i32
             * @property {number|Long|null} [i64] TestMessage i64
             * @property {string|null} [str] TestMessage str
             * @property {number|null} [f32] TestMessage f32
             * @property {testPackage.ISubMsg|null} [msg] TestMessage msg
             * @property {number|null} [u32x] TestMessage u32x
             */
    
            /**
             * Constructs a new TestMessage.
             * @memberof testPackage
             * @classdesc Represents a TestMessage.
             * @implements ITestMessage
             * @constructor
             * @param {testPackage.ITestMessage=} [properties] Properties to set
             */
            function TestMessage(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }
    
            /**
             * TestMessage testField.
             * @member {string} testField
             * @memberof testPackage.TestMessage
             * @instance
             */
            TestMessage.prototype.testField = "";
    
            /**
             * TestMessage i32.
             * @member {number} i32
             * @memberof testPackage.TestMessage
             * @instance
             */
            TestMessage.prototype.i32 = 0;
    
            /**
             * TestMessage i64.
             * @member {number|Long} i64
             * @memberof testPackage.TestMessage
             * @instance
             */
            TestMessage.prototype.i64 = $util.Long ? $util.Long.fromBits(0,0,false) : 0;
    
            /**
             * TestMessage str.
             * @member {string} str
             * @memberof testPackage.TestMessage
             * @instance
             */
            TestMessage.prototype.str = "";
    
            /**
             * TestMessage f32.
             * @member {number} f32
             * @memberof testPackage.TestMessage
             * @instance
             */
            TestMessage.prototype.f32 = 0;
    
            /**
             * TestMessage msg.
             * @member {testPackage.ISubMsg|null|undefined} msg
             * @memberof testPackage.TestMessage
             * @instance
             */
            TestMessage.prototype.msg = null;
    
            /**
             * TestMessage u32x.
             * @member {number} u32x
             * @memberof testPackage.TestMessage
             * @instance
             */
            TestMessage.prototype.u32x = 0;
    
            /**
             * Creates a new TestMessage instance using the specified properties.
             * @function create
             * @memberof testPackage.TestMessage
             * @static
             * @param {testPackage.ITestMessage=} [properties] Properties to set
             * @returns {testPackage.TestMessage} TestMessage instance
             */
            TestMessage.create = function create(properties) {
                return new TestMessage(properties);
            };
    
            /**
             * Encodes the specified TestMessage message. Does not implicitly {@link testPackage.TestMessage.verify|verify} messages.
             * @function encode
             * @memberof testPackage.TestMessage
             * @static
             * @param {testPackage.ITestMessage} message TestMessage message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            TestMessage.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.testField != null && Object.hasOwnProperty.call(message, "testField"))
                    writer.uint32(/* id 1, wireType 2 =*/10).string(message.testField);
                if (message.i64 != null && Object.hasOwnProperty.call(message, "i64"))
                    writer.uint32(/* id 2, wireType 0 =*/16).int64(message.i64);
                if (message.i32 != null && Object.hasOwnProperty.call(message, "i32"))
                    writer.uint32(/* id 3, wireType 0 =*/24).int32(message.i32);
                if (message.str != null && Object.hasOwnProperty.call(message, "str"))
                    writer.uint32(/* id 4, wireType 2 =*/34).string(message.str);
                if (message.f32 != null && Object.hasOwnProperty.call(message, "f32"))
                    writer.uint32(/* id 5, wireType 5 =*/45).float(message.f32);
                if (message.u32x != null && Object.hasOwnProperty.call(message, "u32x"))
                    writer.uint32(/* id 6, wireType 0 =*/48).uint32(message.u32x);
                if (message.msg != null && Object.hasOwnProperty.call(message, "msg"))
                    $root.testPackage.SubMsg.encode(message.msg, writer.uint32(/* id 7, wireType 2 =*/58).fork()).ldelim();
                return writer;
            };
    
            /**
             * Encodes the specified TestMessage message, length delimited. Does not implicitly {@link testPackage.TestMessage.verify|verify} messages.
             * @function encodeDelimited
             * @memberof testPackage.TestMessage
             * @static
             * @param {testPackage.ITestMessage} message TestMessage message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            TestMessage.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };
    
            /**
             * Decodes a TestMessage message from the specified reader or buffer.
             * @function decode
             * @memberof testPackage.TestMessage
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {testPackage.TestMessage} TestMessage
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            TestMessage.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.testPackage.TestMessage();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.testField = reader.string();
                        break;
                    case 3:
                        message.i32 = reader.int32();
                        break;
                    case 2:
                        message.i64 = reader.int64();
                        break;
                    case 4:
                        message.str = reader.string();
                        break;
                    case 5:
                        message.f32 = reader.float();
                        break;
                    case 7:
                        message.msg = $root.testPackage.SubMsg.decode(reader, reader.uint32());
                        break;
                    case 6:
                        message.u32x = reader.uint32();
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };
    
            /**
             * Decodes a TestMessage message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof testPackage.TestMessage
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {testPackage.TestMessage} TestMessage
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            TestMessage.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };
    
            /**
             * Verifies a TestMessage message.
             * @function verify
             * @memberof testPackage.TestMessage
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            TestMessage.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.testField != null && message.hasOwnProperty("testField"))
                    if (!$util.isString(message.testField))
                        return "testField: string expected";
                if (message.i32 != null && message.hasOwnProperty("i32"))
                    if (!$util.isInteger(message.i32))
                        return "i32: integer expected";
                if (message.i64 != null && message.hasOwnProperty("i64"))
                    if (!$util.isInteger(message.i64) && !(message.i64 && $util.isInteger(message.i64.low) && $util.isInteger(message.i64.high)))
                        return "i64: integer|Long expected";
                if (message.str != null && message.hasOwnProperty("str"))
                    if (!$util.isString(message.str))
                        return "str: string expected";
                if (message.f32 != null && message.hasOwnProperty("f32"))
                    if (typeof message.f32 !== "number")
                        return "f32: number expected";
                if (message.msg != null && message.hasOwnProperty("msg")) {
                    var error = $root.testPackage.SubMsg.verify(message.msg);
                    if (error)
                        return "msg." + error;
                }
                if (message.u32x != null && message.hasOwnProperty("u32x"))
                    if (!$util.isInteger(message.u32x))
                        return "u32x: integer expected";
                return null;
            };
    
            /**
             * Creates a TestMessage message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof testPackage.TestMessage
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {testPackage.TestMessage} TestMessage
             */
            TestMessage.fromObject = function fromObject(object) {
                if (object instanceof $root.testPackage.TestMessage)
                    return object;
                var message = new $root.testPackage.TestMessage();
                if (object.testField != null)
                    message.testField = String(object.testField);
                if (object.i32 != null)
                    message.i32 = object.i32 | 0;
                if (object.i64 != null)
                    if ($util.Long)
                        (message.i64 = $util.Long.fromValue(object.i64)).unsigned = false;
                    else if (typeof object.i64 === "string")
                        message.i64 = parseInt(object.i64, 10);
                    else if (typeof object.i64 === "number")
                        message.i64 = object.i64;
                    else if (typeof object.i64 === "object")
                        message.i64 = new $util.LongBits(object.i64.low >>> 0, object.i64.high >>> 0).toNumber();
                if (object.str != null)
                    message.str = String(object.str);
                if (object.f32 != null)
                    message.f32 = Number(object.f32);
                if (object.msg != null) {
                    if (typeof object.msg !== "object")
                        throw TypeError(".testPackage.TestMessage.msg: object expected");
                    message.msg = $root.testPackage.SubMsg.fromObject(object.msg);
                }
                if (object.u32x != null)
                    message.u32x = object.u32x >>> 0;
                return message;
            };
    
            /**
             * Creates a plain object from a TestMessage message. Also converts values to other types if specified.
             * @function toObject
             * @memberof testPackage.TestMessage
             * @static
             * @param {testPackage.TestMessage} message TestMessage
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            TestMessage.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.defaults) {
                    object.testField = "";
                    if ($util.Long) {
                        var long = new $util.Long(0, 0, false);
                        object.i64 = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                    } else
                        object.i64 = options.longs === String ? "0" : 0;
                    object.i32 = 0;
                    object.str = "";
                    object.f32 = 0;
                    object.u32x = 0;
                    object.msg = null;
                }
                if (message.testField != null && message.hasOwnProperty("testField"))
                    object.testField = message.testField;
                if (message.i64 != null && message.hasOwnProperty("i64"))
                    if (typeof message.i64 === "number")
                        object.i64 = options.longs === String ? String(message.i64) : message.i64;
                    else
                        object.i64 = options.longs === String ? $util.Long.prototype.toString.call(message.i64) : options.longs === Number ? new $util.LongBits(message.i64.low >>> 0, message.i64.high >>> 0).toNumber() : message.i64;
                if (message.i32 != null && message.hasOwnProperty("i32"))
                    object.i32 = message.i32;
                if (message.str != null && message.hasOwnProperty("str"))
                    object.str = message.str;
                if (message.f32 != null && message.hasOwnProperty("f32"))
                    object.f32 = options.json && !isFinite(message.f32) ? String(message.f32) : message.f32;
                if (message.u32x != null && message.hasOwnProperty("u32x"))
                    object.u32x = message.u32x;
                if (message.msg != null && message.hasOwnProperty("msg"))
                    object.msg = $root.testPackage.SubMsg.toObject(message.msg, options);
                return object;
            };
    
            /**
             * Converts this TestMessage to JSON.
             * @function toJSON
             * @memberof testPackage.TestMessage
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            TestMessage.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };
    
            return TestMessage;
        })();
    
        /**
         * TestEnum enum.
         * @name testPackage.TestEnum
         * @enum {number}
         * @property {number} Key=1 Key value
         * @property {number} E2=20 E2 value
         * @property {number} XX=3 XX value
         */
        testPackage.TestEnum = (function() {
            var valuesById = {}, values = Object.create(valuesById);
            values[valuesById[1] = "Key"] = 1;
            values[valuesById[20] = "E2"] = 20;
            values[valuesById[3] = "XX"] = 3;
            return values;
        })();
    
        return testPackage;
    })();

    return $root;
});
