/*eslint-disable block-scoped-var, id-length, no-control-regex, no-magic-numbers, no-prototype-builtins, no-redeclare, no-shadow, no-var, sort-vars*/
"use strict";

var $protobuf = require("protobufjs/minimal");

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
         * @property {Array.<string>|null} [testField] TestMessage testField
         * @property {number|null} [i32] TestMessage i32
         * @property {Array.<number>|null} [i32repeated] TestMessage i32repeated
         * @property {number|null} [i32optional] TestMessage i32optional
         * @property {Array.<testPackage.ISubMsg>|null} [msgRepeated] TestMessage msgRepeated
         * @property {number|Long|null} [i64] TestMessage i64
         * @property {string|null} [str] TestMessage str
         * @property {number|null} [f32] TestMessage f32
         * @property {testPackage.ISubMsg|null} [msg] TestMessage msg
         * @property {number|null} [u32x] TestMessage u32x
         * @property {Uint8Array|null} [byteArray] TestMessage byteArray
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
            this.testField = [];
            this.i32repeated = [];
            this.msgRepeated = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * TestMessage testField.
         * @member {Array.<string>} testField
         * @memberof testPackage.TestMessage
         * @instance
         */
        TestMessage.prototype.testField = $util.emptyArray;

        /**
         * TestMessage i32.
         * @member {number} i32
         * @memberof testPackage.TestMessage
         * @instance
         */
        TestMessage.prototype.i32 = 0;

        /**
         * TestMessage i32repeated.
         * @member {Array.<number>} i32repeated
         * @memberof testPackage.TestMessage
         * @instance
         */
        TestMessage.prototype.i32repeated = $util.emptyArray;

        /**
         * TestMessage i32optional.
         * @member {number|null|undefined} i32optional
         * @memberof testPackage.TestMessage
         * @instance
         */
        TestMessage.prototype.i32optional = null;

        /**
         * TestMessage msgRepeated.
         * @member {Array.<testPackage.ISubMsg>} msgRepeated
         * @memberof testPackage.TestMessage
         * @instance
         */
        TestMessage.prototype.msgRepeated = $util.emptyArray;

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
         * TestMessage byteArray.
         * @member {Uint8Array} byteArray
         * @memberof testPackage.TestMessage
         * @instance
         */
        TestMessage.prototype.byteArray = $util.newBuffer([]);

        // OneOf field names bound to virtual getters and setters
        var $oneOfFields;

        /**
         * TestMessage _i32optional.
         * @member {"i32optional"|undefined} _i32optional
         * @memberof testPackage.TestMessage
         * @instance
         */
        Object.defineProperty(TestMessage.prototype, "_i32optional", {
            get: $util.oneOfGetter($oneOfFields = ["i32optional"]),
            set: $util.oneOfSetter($oneOfFields)
        });

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
            if (message.testField != null && message.testField.length)
                for (var i = 0; i < message.testField.length; ++i)
                    writer.uint32(/* id 1, wireType 2 =*/10).string(message.testField[i]);
            if (message.i64 != null && Object.hasOwnProperty.call(message, "i64"))
                writer.uint32(/* id 2, wireType 0 =*/16).int64(message.i64);
            if (message.str != null && Object.hasOwnProperty.call(message, "str"))
                writer.uint32(/* id 4, wireType 2 =*/34).string(message.str);
            if (message.f32 != null && Object.hasOwnProperty.call(message, "f32"))
                writer.uint32(/* id 5, wireType 5 =*/45).float(message.f32);
            if (message.u32x != null && Object.hasOwnProperty.call(message, "u32x"))
                writer.uint32(/* id 6, wireType 0 =*/48).uint32(message.u32x);
            if (message.msg != null && Object.hasOwnProperty.call(message, "msg"))
                $root.testPackage.SubMsg.encode(message.msg, writer.uint32(/* id 7, wireType 2 =*/58).fork()).ldelim();
            if (message.byteArray != null && Object.hasOwnProperty.call(message, "byteArray"))
                writer.uint32(/* id 10, wireType 2 =*/82).bytes(message.byteArray);
            if (message.i32 != null && Object.hasOwnProperty.call(message, "i32"))
                writer.uint32(/* id 31, wireType 0 =*/248).int32(message.i32);
            if (message.i32repeated != null && message.i32repeated.length) {
                writer.uint32(/* id 32, wireType 2 =*/258).fork();
                for (var i = 0; i < message.i32repeated.length; ++i)
                    writer.int32(message.i32repeated[i]);
                writer.ldelim();
            }
            if (message.i32optional != null && Object.hasOwnProperty.call(message, "i32optional"))
                writer.uint32(/* id 33, wireType 0 =*/264).int32(message.i32optional);
            if (message.msgRepeated != null && message.msgRepeated.length)
                for (var i = 0; i < message.msgRepeated.length; ++i)
                    $root.testPackage.SubMsg.encode(message.msgRepeated[i], writer.uint32(/* id 34, wireType 2 =*/274).fork()).ldelim();
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
                    if (!(message.testField && message.testField.length))
                        message.testField = [];
                    message.testField.push(reader.string());
                    break;
                case 31:
                    message.i32 = reader.int32();
                    break;
                case 32:
                    if (!(message.i32repeated && message.i32repeated.length))
                        message.i32repeated = [];
                    if ((tag & 7) === 2) {
                        var end2 = reader.uint32() + reader.pos;
                        while (reader.pos < end2)
                            message.i32repeated.push(reader.int32());
                    } else
                        message.i32repeated.push(reader.int32());
                    break;
                case 33:
                    message.i32optional = reader.int32();
                    break;
                case 34:
                    if (!(message.msgRepeated && message.msgRepeated.length))
                        message.msgRepeated = [];
                    message.msgRepeated.push($root.testPackage.SubMsg.decode(reader, reader.uint32()));
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
                case 10:
                    message.byteArray = reader.bytes();
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
            var properties = {};
            if (message.testField != null && message.hasOwnProperty("testField")) {
                if (!Array.isArray(message.testField))
                    return "testField: array expected";
                for (var i = 0; i < message.testField.length; ++i)
                    if (!$util.isString(message.testField[i]))
                        return "testField: string[] expected";
            }
            if (message.i32 != null && message.hasOwnProperty("i32"))
                if (!$util.isInteger(message.i32))
                    return "i32: integer expected";
            if (message.i32repeated != null && message.hasOwnProperty("i32repeated")) {
                if (!Array.isArray(message.i32repeated))
                    return "i32repeated: array expected";
                for (var i = 0; i < message.i32repeated.length; ++i)
                    if (!$util.isInteger(message.i32repeated[i]))
                        return "i32repeated: integer[] expected";
            }
            if (message.i32optional != null && message.hasOwnProperty("i32optional")) {
                properties._i32optional = 1;
                if (!$util.isInteger(message.i32optional))
                    return "i32optional: integer expected";
            }
            if (message.msgRepeated != null && message.hasOwnProperty("msgRepeated")) {
                if (!Array.isArray(message.msgRepeated))
                    return "msgRepeated: array expected";
                for (var i = 0; i < message.msgRepeated.length; ++i) {
                    var error = $root.testPackage.SubMsg.verify(message.msgRepeated[i]);
                    if (error)
                        return "msgRepeated." + error;
                }
            }
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
            if (message.byteArray != null && message.hasOwnProperty("byteArray"))
                if (!(message.byteArray && typeof message.byteArray.length === "number" || $util.isString(message.byteArray)))
                    return "byteArray: buffer expected";
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
            if (object.testField) {
                if (!Array.isArray(object.testField))
                    throw TypeError(".testPackage.TestMessage.testField: array expected");
                message.testField = [];
                for (var i = 0; i < object.testField.length; ++i)
                    message.testField[i] = String(object.testField[i]);
            }
            if (object.i32 != null)
                message.i32 = object.i32 | 0;
            if (object.i32repeated) {
                if (!Array.isArray(object.i32repeated))
                    throw TypeError(".testPackage.TestMessage.i32repeated: array expected");
                message.i32repeated = [];
                for (var i = 0; i < object.i32repeated.length; ++i)
                    message.i32repeated[i] = object.i32repeated[i] | 0;
            }
            if (object.i32optional != null)
                message.i32optional = object.i32optional | 0;
            if (object.msgRepeated) {
                if (!Array.isArray(object.msgRepeated))
                    throw TypeError(".testPackage.TestMessage.msgRepeated: array expected");
                message.msgRepeated = [];
                for (var i = 0; i < object.msgRepeated.length; ++i) {
                    if (typeof object.msgRepeated[i] !== "object")
                        throw TypeError(".testPackage.TestMessage.msgRepeated: object expected");
                    message.msgRepeated[i] = $root.testPackage.SubMsg.fromObject(object.msgRepeated[i]);
                }
            }
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
            if (object.byteArray != null)
                if (typeof object.byteArray === "string")
                    $util.base64.decode(object.byteArray, message.byteArray = $util.newBuffer($util.base64.length(object.byteArray)), 0);
                else if (object.byteArray.length)
                    message.byteArray = object.byteArray;
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
            if (options.arrays || options.defaults) {
                object.testField = [];
                object.i32repeated = [];
                object.msgRepeated = [];
            }
            if (options.defaults) {
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.i64 = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.i64 = options.longs === String ? "0" : 0;
                object.str = "";
                object.f32 = 0;
                object.u32x = 0;
                object.msg = null;
                if (options.bytes === String)
                    object.byteArray = "";
                else {
                    object.byteArray = [];
                    if (options.bytes !== Array)
                        object.byteArray = $util.newBuffer(object.byteArray);
                }
                object.i32 = 0;
            }
            if (message.testField && message.testField.length) {
                object.testField = [];
                for (var j = 0; j < message.testField.length; ++j)
                    object.testField[j] = message.testField[j];
            }
            if (message.i64 != null && message.hasOwnProperty("i64"))
                if (typeof message.i64 === "number")
                    object.i64 = options.longs === String ? String(message.i64) : message.i64;
                else
                    object.i64 = options.longs === String ? $util.Long.prototype.toString.call(message.i64) : options.longs === Number ? new $util.LongBits(message.i64.low >>> 0, message.i64.high >>> 0).toNumber() : message.i64;
            if (message.str != null && message.hasOwnProperty("str"))
                object.str = message.str;
            if (message.f32 != null && message.hasOwnProperty("f32"))
                object.f32 = options.json && !isFinite(message.f32) ? String(message.f32) : message.f32;
            if (message.u32x != null && message.hasOwnProperty("u32x"))
                object.u32x = message.u32x;
            if (message.msg != null && message.hasOwnProperty("msg"))
                object.msg = $root.testPackage.SubMsg.toObject(message.msg, options);
            if (message.byteArray != null && message.hasOwnProperty("byteArray"))
                object.byteArray = options.bytes === String ? $util.base64.encode(message.byteArray, 0, message.byteArray.length) : options.bytes === Array ? Array.prototype.slice.call(message.byteArray) : message.byteArray;
            if (message.i32 != null && message.hasOwnProperty("i32"))
                object.i32 = message.i32;
            if (message.i32repeated && message.i32repeated.length) {
                object.i32repeated = [];
                for (var j = 0; j < message.i32repeated.length; ++j)
                    object.i32repeated[j] = message.i32repeated[j];
            }
            if (message.i32optional != null && message.hasOwnProperty("i32optional")) {
                object.i32optional = message.i32optional;
                if (options.oneofs)
                    object._i32optional = "i32optional";
            }
            if (message.msgRepeated && message.msgRepeated.length) {
                object.msgRepeated = [];
                for (var j = 0; j < message.msgRepeated.length; ++j)
                    object.msgRepeated[j] = $root.testPackage.SubMsg.toObject(message.msgRepeated[j], options);
            }
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

$root.testPackage2 = (function() {

    /**
     * Namespace testPackage2.
     * @exports testPackage2
     * @namespace
     */
    var testPackage2 = {};

    testPackage2.Test2Msg = (function() {

        /**
         * Properties of a Test2Msg.
         * @memberof testPackage2
         * @interface ITest2Msg
         * @property {number|null} [fix32] Test2Msg fix32
         * @property {number|Long|null} [fix64] Test2Msg fix64
         * @property {number|null} [f64] Test2Msg f64
         * @property {number|null} [si32] Test2Msg si32
         * @property {number|Long|null} [si64] Test2Msg si64
         * @property {number|null} [sf32] Test2Msg sf32
         * @property {number|Long|null} [sf64] Test2Msg sf64
         */

        /**
         * Constructs a new Test2Msg.
         * @memberof testPackage2
         * @classdesc Represents a Test2Msg.
         * @implements ITest2Msg
         * @constructor
         * @param {testPackage2.ITest2Msg=} [properties] Properties to set
         */
        function Test2Msg(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Test2Msg fix32.
         * @member {number} fix32
         * @memberof testPackage2.Test2Msg
         * @instance
         */
        Test2Msg.prototype.fix32 = 0;

        /**
         * Test2Msg fix64.
         * @member {number|Long} fix64
         * @memberof testPackage2.Test2Msg
         * @instance
         */
        Test2Msg.prototype.fix64 = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * Test2Msg f64.
         * @member {number} f64
         * @memberof testPackage2.Test2Msg
         * @instance
         */
        Test2Msg.prototype.f64 = 0;

        /**
         * Test2Msg si32.
         * @member {number} si32
         * @memberof testPackage2.Test2Msg
         * @instance
         */
        Test2Msg.prototype.si32 = 0;

        /**
         * Test2Msg si64.
         * @member {number|Long} si64
         * @memberof testPackage2.Test2Msg
         * @instance
         */
        Test2Msg.prototype.si64 = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * Test2Msg sf32.
         * @member {number} sf32
         * @memberof testPackage2.Test2Msg
         * @instance
         */
        Test2Msg.prototype.sf32 = 0;

        /**
         * Test2Msg sf64.
         * @member {number|Long} sf64
         * @memberof testPackage2.Test2Msg
         * @instance
         */
        Test2Msg.prototype.sf64 = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * Creates a new Test2Msg instance using the specified properties.
         * @function create
         * @memberof testPackage2.Test2Msg
         * @static
         * @param {testPackage2.ITest2Msg=} [properties] Properties to set
         * @returns {testPackage2.Test2Msg} Test2Msg instance
         */
        Test2Msg.create = function create(properties) {
            return new Test2Msg(properties);
        };

        /**
         * Encodes the specified Test2Msg message. Does not implicitly {@link testPackage2.Test2Msg.verify|verify} messages.
         * @function encode
         * @memberof testPackage2.Test2Msg
         * @static
         * @param {testPackage2.ITest2Msg} message Test2Msg message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Test2Msg.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.fix32 != null && Object.hasOwnProperty.call(message, "fix32"))
                writer.uint32(/* id 1, wireType 5 =*/13).fixed32(message.fix32);
            if (message.fix64 != null && Object.hasOwnProperty.call(message, "fix64"))
                writer.uint32(/* id 2, wireType 1 =*/17).fixed64(message.fix64);
            if (message.f64 != null && Object.hasOwnProperty.call(message, "f64"))
                writer.uint32(/* id 3, wireType 1 =*/25).double(message.f64);
            if (message.sf32 != null && Object.hasOwnProperty.call(message, "sf32"))
                writer.uint32(/* id 16, wireType 5 =*/133).sfixed32(message.sf32);
            if (message.sf64 != null && Object.hasOwnProperty.call(message, "sf64"))
                writer.uint32(/* id 17, wireType 1 =*/137).sfixed64(message.sf64);
            if (message.si32 != null && Object.hasOwnProperty.call(message, "si32"))
                writer.uint32(/* id 32, wireType 0 =*/256).sint32(message.si32);
            if (message.si64 != null && Object.hasOwnProperty.call(message, "si64"))
                writer.uint32(/* id 64, wireType 0 =*/512).sint64(message.si64);
            return writer;
        };

        /**
         * Encodes the specified Test2Msg message, length delimited. Does not implicitly {@link testPackage2.Test2Msg.verify|verify} messages.
         * @function encodeDelimited
         * @memberof testPackage2.Test2Msg
         * @static
         * @param {testPackage2.ITest2Msg} message Test2Msg message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Test2Msg.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a Test2Msg message from the specified reader or buffer.
         * @function decode
         * @memberof testPackage2.Test2Msg
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {testPackage2.Test2Msg} Test2Msg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Test2Msg.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.testPackage2.Test2Msg();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.fix32 = reader.fixed32();
                    break;
                case 2:
                    message.fix64 = reader.fixed64();
                    break;
                case 3:
                    message.f64 = reader.double();
                    break;
                case 32:
                    message.si32 = reader.sint32();
                    break;
                case 64:
                    message.si64 = reader.sint64();
                    break;
                case 16:
                    message.sf32 = reader.sfixed32();
                    break;
                case 17:
                    message.sf64 = reader.sfixed64();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a Test2Msg message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof testPackage2.Test2Msg
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {testPackage2.Test2Msg} Test2Msg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Test2Msg.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a Test2Msg message.
         * @function verify
         * @memberof testPackage2.Test2Msg
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        Test2Msg.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.fix32 != null && message.hasOwnProperty("fix32"))
                if (!$util.isInteger(message.fix32))
                    return "fix32: integer expected";
            if (message.fix64 != null && message.hasOwnProperty("fix64"))
                if (!$util.isInteger(message.fix64) && !(message.fix64 && $util.isInteger(message.fix64.low) && $util.isInteger(message.fix64.high)))
                    return "fix64: integer|Long expected";
            if (message.f64 != null && message.hasOwnProperty("f64"))
                if (typeof message.f64 !== "number")
                    return "f64: number expected";
            if (message.si32 != null && message.hasOwnProperty("si32"))
                if (!$util.isInteger(message.si32))
                    return "si32: integer expected";
            if (message.si64 != null && message.hasOwnProperty("si64"))
                if (!$util.isInteger(message.si64) && !(message.si64 && $util.isInteger(message.si64.low) && $util.isInteger(message.si64.high)))
                    return "si64: integer|Long expected";
            if (message.sf32 != null && message.hasOwnProperty("sf32"))
                if (!$util.isInteger(message.sf32))
                    return "sf32: integer expected";
            if (message.sf64 != null && message.hasOwnProperty("sf64"))
                if (!$util.isInteger(message.sf64) && !(message.sf64 && $util.isInteger(message.sf64.low) && $util.isInteger(message.sf64.high)))
                    return "sf64: integer|Long expected";
            return null;
        };

        /**
         * Creates a Test2Msg message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof testPackage2.Test2Msg
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {testPackage2.Test2Msg} Test2Msg
         */
        Test2Msg.fromObject = function fromObject(object) {
            if (object instanceof $root.testPackage2.Test2Msg)
                return object;
            var message = new $root.testPackage2.Test2Msg();
            if (object.fix32 != null)
                message.fix32 = object.fix32 >>> 0;
            if (object.fix64 != null)
                if ($util.Long)
                    (message.fix64 = $util.Long.fromValue(object.fix64)).unsigned = false;
                else if (typeof object.fix64 === "string")
                    message.fix64 = parseInt(object.fix64, 10);
                else if (typeof object.fix64 === "number")
                    message.fix64 = object.fix64;
                else if (typeof object.fix64 === "object")
                    message.fix64 = new $util.LongBits(object.fix64.low >>> 0, object.fix64.high >>> 0).toNumber();
            if (object.f64 != null)
                message.f64 = Number(object.f64);
            if (object.si32 != null)
                message.si32 = object.si32 | 0;
            if (object.si64 != null)
                if ($util.Long)
                    (message.si64 = $util.Long.fromValue(object.si64)).unsigned = false;
                else if (typeof object.si64 === "string")
                    message.si64 = parseInt(object.si64, 10);
                else if (typeof object.si64 === "number")
                    message.si64 = object.si64;
                else if (typeof object.si64 === "object")
                    message.si64 = new $util.LongBits(object.si64.low >>> 0, object.si64.high >>> 0).toNumber();
            if (object.sf32 != null)
                message.sf32 = object.sf32 | 0;
            if (object.sf64 != null)
                if ($util.Long)
                    (message.sf64 = $util.Long.fromValue(object.sf64)).unsigned = false;
                else if (typeof object.sf64 === "string")
                    message.sf64 = parseInt(object.sf64, 10);
                else if (typeof object.sf64 === "number")
                    message.sf64 = object.sf64;
                else if (typeof object.sf64 === "object")
                    message.sf64 = new $util.LongBits(object.sf64.low >>> 0, object.sf64.high >>> 0).toNumber();
            return message;
        };

        /**
         * Creates a plain object from a Test2Msg message. Also converts values to other types if specified.
         * @function toObject
         * @memberof testPackage2.Test2Msg
         * @static
         * @param {testPackage2.Test2Msg} message Test2Msg
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        Test2Msg.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.fix32 = 0;
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.fix64 = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.fix64 = options.longs === String ? "0" : 0;
                object.f64 = 0;
                object.sf32 = 0;
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.sf64 = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.sf64 = options.longs === String ? "0" : 0;
                object.si32 = 0;
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.si64 = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.si64 = options.longs === String ? "0" : 0;
            }
            if (message.fix32 != null && message.hasOwnProperty("fix32"))
                object.fix32 = message.fix32;
            if (message.fix64 != null && message.hasOwnProperty("fix64"))
                if (typeof message.fix64 === "number")
                    object.fix64 = options.longs === String ? String(message.fix64) : message.fix64;
                else
                    object.fix64 = options.longs === String ? $util.Long.prototype.toString.call(message.fix64) : options.longs === Number ? new $util.LongBits(message.fix64.low >>> 0, message.fix64.high >>> 0).toNumber() : message.fix64;
            if (message.f64 != null && message.hasOwnProperty("f64"))
                object.f64 = options.json && !isFinite(message.f64) ? String(message.f64) : message.f64;
            if (message.sf32 != null && message.hasOwnProperty("sf32"))
                object.sf32 = message.sf32;
            if (message.sf64 != null && message.hasOwnProperty("sf64"))
                if (typeof message.sf64 === "number")
                    object.sf64 = options.longs === String ? String(message.sf64) : message.sf64;
                else
                    object.sf64 = options.longs === String ? $util.Long.prototype.toString.call(message.sf64) : options.longs === Number ? new $util.LongBits(message.sf64.low >>> 0, message.sf64.high >>> 0).toNumber() : message.sf64;
            if (message.si32 != null && message.hasOwnProperty("si32"))
                object.si32 = message.si32;
            if (message.si64 != null && message.hasOwnProperty("si64"))
                if (typeof message.si64 === "number")
                    object.si64 = options.longs === String ? String(message.si64) : message.si64;
                else
                    object.si64 = options.longs === String ? $util.Long.prototype.toString.call(message.si64) : options.longs === Number ? new $util.LongBits(message.si64.low >>> 0, message.si64.high >>> 0).toNumber() : message.si64;
            return object;
        };

        /**
         * Converts this Test2Msg to JSON.
         * @function toJSON
         * @memberof testPackage2.Test2Msg
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        Test2Msg.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return Test2Msg;
    })();

    /**
     * Test2Enum enum.
     * @name testPackage2.Test2Enum
     * @enum {number}
     * @property {number} test=1 test value
     * @property {number} e2=2 e2 value
     * @property {number} e3=3 e3 value
     */
    testPackage2.Test2Enum = (function() {
        var valuesById = {}, values = Object.create(valuesById);
        values[valuesById[1] = "test"] = 1;
        values[valuesById[2] = "e2"] = 2;
        values[valuesById[3] = "e3"] = 3;
        return values;
    })();

    testPackage2.Test2Nested = (function() {

        /**
         * Properties of a Test2Nested.
         * @memberof testPackage2
         * @interface ITest2Nested
         * @property {testPackage2.ITest2Msg|null} [msg] Test2Nested msg
         * @property {testPackage2.Test2Enum|null} [enm] Test2Nested enm
         * @property {testPackage2.Test2Nested.NestedEnum|null} [ie] Test2Nested ie
         * @property {testPackage2.Test2Nested.INestedMsg|null} [im] Test2Nested im
         * @property {testPackage2.Test2Nested.Iverify|null} [testV] Test2Nested testV
         */

        /**
         * Constructs a new Test2Nested.
         * @memberof testPackage2
         * @classdesc Represents a Test2Nested.
         * @implements ITest2Nested
         * @constructor
         * @param {testPackage2.ITest2Nested=} [properties] Properties to set
         */
        function Test2Nested(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Test2Nested msg.
         * @member {testPackage2.ITest2Msg|null|undefined} msg
         * @memberof testPackage2.Test2Nested
         * @instance
         */
        Test2Nested.prototype.msg = null;

        /**
         * Test2Nested enm.
         * @member {testPackage2.Test2Enum} enm
         * @memberof testPackage2.Test2Nested
         * @instance
         */
        Test2Nested.prototype.enm = 1;

        /**
         * Test2Nested ie.
         * @member {testPackage2.Test2Nested.NestedEnum} ie
         * @memberof testPackage2.Test2Nested
         * @instance
         */
        Test2Nested.prototype.ie = 1;

        /**
         * Test2Nested im.
         * @member {testPackage2.Test2Nested.INestedMsg|null|undefined} im
         * @memberof testPackage2.Test2Nested
         * @instance
         */
        Test2Nested.prototype.im = null;

        /**
         * Test2Nested testV.
         * @member {testPackage2.Test2Nested.Iverify|null|undefined} testV
         * @memberof testPackage2.Test2Nested
         * @instance
         */
        Test2Nested.prototype.testV = null;

        /**
         * Creates a new Test2Nested instance using the specified properties.
         * @function create
         * @memberof testPackage2.Test2Nested
         * @static
         * @param {testPackage2.ITest2Nested=} [properties] Properties to set
         * @returns {testPackage2.Test2Nested} Test2Nested instance
         */
        Test2Nested.create = function create(properties) {
            return new Test2Nested(properties);
        };

        /**
         * Encodes the specified Test2Nested message. Does not implicitly {@link testPackage2.Test2Nested.verify|verify} messages.
         * @function encode
         * @memberof testPackage2.Test2Nested
         * @static
         * @param {testPackage2.ITest2Nested} message Test2Nested message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Test2Nested.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.msg != null && Object.hasOwnProperty.call(message, "msg"))
                $root.testPackage2.Test2Msg.encode(message.msg, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            if (message.enm != null && Object.hasOwnProperty.call(message, "enm"))
                writer.uint32(/* id 2, wireType 0 =*/16).int32(message.enm);
            if (message.ie != null && Object.hasOwnProperty.call(message, "ie"))
                writer.uint32(/* id 3, wireType 0 =*/24).int32(message.ie);
            if (message.im != null && Object.hasOwnProperty.call(message, "im"))
                $root.testPackage2.Test2Nested.NestedMsg.encode(message.im, writer.uint32(/* id 4, wireType 2 =*/34).fork()).ldelim();
            if (message.testV != null && Object.hasOwnProperty.call(message, "testV"))
                $root.testPackage2.Test2Nested.verify.encode(message.testV, writer.uint32(/* id 5, wireType 2 =*/42).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified Test2Nested message, length delimited. Does not implicitly {@link testPackage2.Test2Nested.verify|verify} messages.
         * @function encodeDelimited
         * @memberof testPackage2.Test2Nested
         * @static
         * @param {testPackage2.ITest2Nested} message Test2Nested message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Test2Nested.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a Test2Nested message from the specified reader or buffer.
         * @function decode
         * @memberof testPackage2.Test2Nested
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {testPackage2.Test2Nested} Test2Nested
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Test2Nested.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.testPackage2.Test2Nested();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.msg = $root.testPackage2.Test2Msg.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.enm = reader.int32();
                    break;
                case 3:
                    message.ie = reader.int32();
                    break;
                case 4:
                    message.im = $root.testPackage2.Test2Nested.NestedMsg.decode(reader, reader.uint32());
                    break;
                case 5:
                    message.testV = $root.testPackage2.Test2Nested.verify.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a Test2Nested message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof testPackage2.Test2Nested
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {testPackage2.Test2Nested} Test2Nested
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Test2Nested.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a Test2Nested message.
         * @function verify
         * @memberof testPackage2.Test2Nested
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        Test2Nested.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.msg != null && message.hasOwnProperty("msg")) {
                var error = $root.testPackage2.Test2Msg.verify(message.msg);
                if (error)
                    return "msg." + error;
            }
            if (message.enm != null && message.hasOwnProperty("enm"))
                switch (message.enm) {
                default:
                    return "enm: enum value expected";
                case 1:
                case 2:
                case 3:
                    break;
                }
            if (message.ie != null && message.hasOwnProperty("ie"))
                switch (message.ie) {
                default:
                    return "ie: enum value expected";
                case 1:
                case 2:
                    break;
                }
            if (message.im != null && message.hasOwnProperty("im")) {
                var error = $root.testPackage2.Test2Nested.NestedMsg.verify(message.im);
                if (error)
                    return "im." + error;
            }
            if (message.testV != null && message.hasOwnProperty("testV")) {
                var error = $root.testPackage2.Test2Nested.verify.verify(message.testV);
                if (error)
                    return "testV." + error;
            }
            return null;
        };

        /**
         * Creates a Test2Nested message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof testPackage2.Test2Nested
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {testPackage2.Test2Nested} Test2Nested
         */
        Test2Nested.fromObject = function fromObject(object) {
            if (object instanceof $root.testPackage2.Test2Nested)
                return object;
            var message = new $root.testPackage2.Test2Nested();
            if (object.msg != null) {
                if (typeof object.msg !== "object")
                    throw TypeError(".testPackage2.Test2Nested.msg: object expected");
                message.msg = $root.testPackage2.Test2Msg.fromObject(object.msg);
            }
            switch (object.enm) {
            case "test":
            case 1:
                message.enm = 1;
                break;
            case "e2":
            case 2:
                message.enm = 2;
                break;
            case "e3":
            case 3:
                message.enm = 3;
                break;
            }
            switch (object.ie) {
            case "ie1":
            case 1:
                message.ie = 1;
                break;
            case "ie2":
            case 2:
                message.ie = 2;
                break;
            }
            if (object.im != null) {
                if (typeof object.im !== "object")
                    throw TypeError(".testPackage2.Test2Nested.im: object expected");
                message.im = $root.testPackage2.Test2Nested.NestedMsg.fromObject(object.im);
            }
            if (object.testV != null) {
                if (typeof object.testV !== "object")
                    throw TypeError(".testPackage2.Test2Nested.testV: object expected");
                message.testV = $root.testPackage2.Test2Nested.verify.fromObject(object.testV);
            }
            return message;
        };

        /**
         * Creates a plain object from a Test2Nested message. Also converts values to other types if specified.
         * @function toObject
         * @memberof testPackage2.Test2Nested
         * @static
         * @param {testPackage2.Test2Nested} message Test2Nested
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        Test2Nested.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.msg = null;
                object.enm = options.enums === String ? "test" : 1;
                object.ie = options.enums === String ? "ie1" : 1;
                object.im = null;
                object.testV = null;
            }
            if (message.msg != null && message.hasOwnProperty("msg"))
                object.msg = $root.testPackage2.Test2Msg.toObject(message.msg, options);
            if (message.enm != null && message.hasOwnProperty("enm"))
                object.enm = options.enums === String ? $root.testPackage2.Test2Enum[message.enm] : message.enm;
            if (message.ie != null && message.hasOwnProperty("ie"))
                object.ie = options.enums === String ? $root.testPackage2.Test2Nested.NestedEnum[message.ie] : message.ie;
            if (message.im != null && message.hasOwnProperty("im"))
                object.im = $root.testPackage2.Test2Nested.NestedMsg.toObject(message.im, options);
            if (message.testV != null && message.hasOwnProperty("testV"))
                object.testV = $root.testPackage2.Test2Nested.verify.toObject(message.testV, options);
            return object;
        };

        /**
         * Converts this Test2Nested to JSON.
         * @function toJSON
         * @memberof testPackage2.Test2Nested
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        Test2Nested.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * NestedEnum enum.
         * @name testPackage2.Test2Nested.NestedEnum
         * @enum {number}
         * @property {number} ie1=1 ie1 value
         * @property {number} ie2=2 ie2 value
         */
        Test2Nested.NestedEnum = (function() {
            var valuesById = {}, values = Object.create(valuesById);
            values[valuesById[1] = "ie1"] = 1;
            values[valuesById[2] = "ie2"] = 2;
            return values;
        })();

        Test2Nested.NestedMsg = (function() {

            /**
             * Properties of a NestedMsg.
             * @memberof testPackage2.Test2Nested
             * @interface INestedMsg
             * @property {number|null} [i32] NestedMsg i32
             * @property {number|Long|null} [i64] NestedMsg i64
             */

            /**
             * Constructs a new NestedMsg.
             * @memberof testPackage2.Test2Nested
             * @classdesc Represents a NestedMsg.
             * @implements INestedMsg
             * @constructor
             * @param {testPackage2.Test2Nested.INestedMsg=} [properties] Properties to set
             */
            function NestedMsg(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * NestedMsg i32.
             * @member {number} i32
             * @memberof testPackage2.Test2Nested.NestedMsg
             * @instance
             */
            NestedMsg.prototype.i32 = 0;

            /**
             * NestedMsg i64.
             * @member {number|Long} i64
             * @memberof testPackage2.Test2Nested.NestedMsg
             * @instance
             */
            NestedMsg.prototype.i64 = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

            /**
             * Creates a new NestedMsg instance using the specified properties.
             * @function create
             * @memberof testPackage2.Test2Nested.NestedMsg
             * @static
             * @param {testPackage2.Test2Nested.INestedMsg=} [properties] Properties to set
             * @returns {testPackage2.Test2Nested.NestedMsg} NestedMsg instance
             */
            NestedMsg.create = function create(properties) {
                return new NestedMsg(properties);
            };

            /**
             * Encodes the specified NestedMsg message. Does not implicitly {@link testPackage2.Test2Nested.NestedMsg.verify|verify} messages.
             * @function encode
             * @memberof testPackage2.Test2Nested.NestedMsg
             * @static
             * @param {testPackage2.Test2Nested.INestedMsg} message NestedMsg message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            NestedMsg.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.i32 != null && Object.hasOwnProperty.call(message, "i32"))
                    writer.uint32(/* id 1, wireType 0 =*/8).int32(message.i32);
                if (message.i64 != null && Object.hasOwnProperty.call(message, "i64"))
                    writer.uint32(/* id 2, wireType 0 =*/16).int64(message.i64);
                return writer;
            };

            /**
             * Encodes the specified NestedMsg message, length delimited. Does not implicitly {@link testPackage2.Test2Nested.NestedMsg.verify|verify} messages.
             * @function encodeDelimited
             * @memberof testPackage2.Test2Nested.NestedMsg
             * @static
             * @param {testPackage2.Test2Nested.INestedMsg} message NestedMsg message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            NestedMsg.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a NestedMsg message from the specified reader or buffer.
             * @function decode
             * @memberof testPackage2.Test2Nested.NestedMsg
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {testPackage2.Test2Nested.NestedMsg} NestedMsg
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            NestedMsg.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.testPackage2.Test2Nested.NestedMsg();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.i32 = reader.int32();
                        break;
                    case 2:
                        message.i64 = reader.int64();
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Decodes a NestedMsg message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof testPackage2.Test2Nested.NestedMsg
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {testPackage2.Test2Nested.NestedMsg} NestedMsg
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            NestedMsg.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a NestedMsg message.
             * @function verify
             * @memberof testPackage2.Test2Nested.NestedMsg
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            NestedMsg.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.i32 != null && message.hasOwnProperty("i32"))
                    if (!$util.isInteger(message.i32))
                        return "i32: integer expected";
                if (message.i64 != null && message.hasOwnProperty("i64"))
                    if (!$util.isInteger(message.i64) && !(message.i64 && $util.isInteger(message.i64.low) && $util.isInteger(message.i64.high)))
                        return "i64: integer|Long expected";
                return null;
            };

            /**
             * Creates a NestedMsg message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof testPackage2.Test2Nested.NestedMsg
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {testPackage2.Test2Nested.NestedMsg} NestedMsg
             */
            NestedMsg.fromObject = function fromObject(object) {
                if (object instanceof $root.testPackage2.Test2Nested.NestedMsg)
                    return object;
                var message = new $root.testPackage2.Test2Nested.NestedMsg();
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
                return message;
            };

            /**
             * Creates a plain object from a NestedMsg message. Also converts values to other types if specified.
             * @function toObject
             * @memberof testPackage2.Test2Nested.NestedMsg
             * @static
             * @param {testPackage2.Test2Nested.NestedMsg} message NestedMsg
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            NestedMsg.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.defaults) {
                    object.i32 = 0;
                    if ($util.Long) {
                        var long = new $util.Long(0, 0, false);
                        object.i64 = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                    } else
                        object.i64 = options.longs === String ? "0" : 0;
                }
                if (message.i32 != null && message.hasOwnProperty("i32"))
                    object.i32 = message.i32;
                if (message.i64 != null && message.hasOwnProperty("i64"))
                    if (typeof message.i64 === "number")
                        object.i64 = options.longs === String ? String(message.i64) : message.i64;
                    else
                        object.i64 = options.longs === String ? $util.Long.prototype.toString.call(message.i64) : options.longs === Number ? new $util.LongBits(message.i64.low >>> 0, message.i64.high >>> 0).toNumber() : message.i64;
                return object;
            };

            /**
             * Converts this NestedMsg to JSON.
             * @function toJSON
             * @memberof testPackage2.Test2Nested.NestedMsg
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            NestedMsg.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            return NestedMsg;
        })();

        Test2Nested.verify = (function() {

            /**
             * Properties of a verify.
             * @memberof testPackage2.Test2Nested
             * @interface Iverify
             * @property {number|null} [testverify] verify testverify
             */

            /**
             * Constructs a new verify.
             * @memberof testPackage2.Test2Nested
             * @classdesc Represents a verify.
             * @implements Iverify
             * @constructor
             * @param {testPackage2.Test2Nested.Iverify=} [properties] Properties to set
             */
            function verify(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * verify testverify.
             * @member {number} testverify
             * @memberof testPackage2.Test2Nested.verify
             * @instance
             */
            verify.prototype.testverify = 0;

            /**
             * Creates a new verify instance using the specified properties.
             * @function create
             * @memberof testPackage2.Test2Nested.verify
             * @static
             * @param {testPackage2.Test2Nested.Iverify=} [properties] Properties to set
             * @returns {testPackage2.Test2Nested.verify} verify instance
             */
            verify.create = function create(properties) {
                return new verify(properties);
            };

            /**
             * Encodes the specified verify message. Does not implicitly {@link testPackage2.Test2Nested.verify.verify|verify} messages.
             * @function encode
             * @memberof testPackage2.Test2Nested.verify
             * @static
             * @param {testPackage2.Test2Nested.Iverify} message verify message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            verify.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.testverify != null && Object.hasOwnProperty.call(message, "testverify"))
                    writer.uint32(/* id 1, wireType 0 =*/8).int32(message.testverify);
                return writer;
            };

            /**
             * Encodes the specified verify message, length delimited. Does not implicitly {@link testPackage2.Test2Nested.verify.verify|verify} messages.
             * @function encodeDelimited
             * @memberof testPackage2.Test2Nested.verify
             * @static
             * @param {testPackage2.Test2Nested.Iverify} message verify message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            verify.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a verify message from the specified reader or buffer.
             * @function decode
             * @memberof testPackage2.Test2Nested.verify
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {testPackage2.Test2Nested.verify} verify
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            verify.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.testPackage2.Test2Nested.verify();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.testverify = reader.int32();
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Decodes a verify message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof testPackage2.Test2Nested.verify
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {testPackage2.Test2Nested.verify} verify
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            verify.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a verify message.
             * @function verify
             * @memberof testPackage2.Test2Nested.verify
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.testverify != null && message.hasOwnProperty("testverify"))
                    if (!$util.isInteger(message.testverify))
                        return "testverify: integer expected";
                return null;
            }

            /**
             * Creates a verify message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof testPackage2.Test2Nested.verify
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {testPackage2.Test2Nested.verify} verify
             */
            verify.fromObject = function fromObject(object) {
                if (object instanceof $root.testPackage2.Test2Nested.verify)
                    return object;
                var message = new $root.testPackage2.Test2Nested.verify();
                if (object.testverify != null)
                    message.testverify = object.testverify | 0;
                return message;
            };

            /**
             * Creates a plain object from a verify message. Also converts values to other types if specified.
             * @function toObject
             * @memberof testPackage2.Test2Nested.verify
             * @static
             * @param {testPackage2.Test2Nested.verify} message verify
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            verify.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.defaults)
                    object.testverify = 0;
                if (message.testverify != null && message.hasOwnProperty("testverify"))
                    object.testverify = message.testverify;
                return object;
            };

            /**
             * Converts this verify to JSON.
             * @function toJSON
             * @memberof testPackage2.Test2Nested.verify
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            verify.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            return verify;
        })();

        return Test2Nested;
    })();

    return testPackage2;
})();

$root.test = (function() {

    /**
     * Namespace test.
     * @exports test
     * @namespace
     */
    var test = {};

    test.Msg = (function() {

        /**
         * Properties of a Msg.
         * @memberof test
         * @interface IMsg
         * @property {test.Msg.verify|null} [v1] Msg v1
         * @property {test.Msg.Iencode|null} [e1] Msg e1
         */

        /**
         * Constructs a new Msg.
         * @memberof test
         * @classdesc Represents a Msg.
         * @implements IMsg
         * @constructor
         * @param {test.IMsg=} [properties] Properties to set
         */
        function Msg(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Msg v1.
         * @member {test.Msg.verify} v1
         * @memberof test.Msg
         * @instance
         */
        Msg.prototype.v1 = 1;

        /**
         * Msg e1.
         * @member {test.Msg.Iencode|null|undefined} e1
         * @memberof test.Msg
         * @instance
         */
        Msg.prototype.e1 = null;

        /**
         * Creates a new Msg instance using the specified properties.
         * @function create
         * @memberof test.Msg
         * @static
         * @param {test.IMsg=} [properties] Properties to set
         * @returns {test.Msg} Msg instance
         */
        Msg.create = function create(properties) {
            return new Msg(properties);
        };

        /**
         * Encodes the specified Msg message. Does not implicitly {@link test.Msg.verify|verify} messages.
         * @function encode
         * @memberof test.Msg
         * @static
         * @param {test.IMsg} message Msg message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Msg.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.v1 != null && Object.hasOwnProperty.call(message, "v1"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.v1);
            if (message.e1 != null && Object.hasOwnProperty.call(message, "e1"))
                $root.test.Msg.encode.encode(message.e1, writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified Msg message, length delimited. Does not implicitly {@link test.Msg.verify|verify} messages.
         * @function encodeDelimited
         * @memberof test.Msg
         * @static
         * @param {test.IMsg} message Msg message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Msg.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a Msg message from the specified reader or buffer.
         * @function decode
         * @memberof test.Msg
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {test.Msg} Msg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Msg.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.test.Msg();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.v1 = reader.int32();
                    break;
                case 2:
                    message.e1 = $root.test.Msg.encode.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a Msg message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof test.Msg
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {test.Msg} Msg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Msg.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a Msg message.
         * @function verify
         * @memberof test.Msg
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        Msg.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.v1 != null && message.hasOwnProperty("v1"))
                switch (message.v1) {
                default:
                    return "v1: enum value expected";
                case 1:
                    break;
                }
            if (message.e1 != null && message.hasOwnProperty("e1")) {
                var error = $root.test.Msg.encode.verify(message.e1);
                if (error)
                    return "e1." + error;
            }
            return null;
        };

        /**
         * Creates a Msg message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof test.Msg
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {test.Msg} Msg
         */
        Msg.fromObject = function fromObject(object) {
            if (object instanceof $root.test.Msg)
                return object;
            var message = new $root.test.Msg();
            switch (object.v1) {
            case "verify":
            case 1:
                message.v1 = 1;
                break;
            }
            if (object.e1 != null) {
                if (typeof object.e1 !== "object")
                    throw TypeError(".test.Msg.e1: object expected");
                message.e1 = $root.test.Msg.encode.fromObject(object.e1);
            }
            return message;
        };

        /**
         * Creates a plain object from a Msg message. Also converts values to other types if specified.
         * @function toObject
         * @memberof test.Msg
         * @static
         * @param {test.Msg} message Msg
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        Msg.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.v1 = options.enums === String ? "verify" : 1;
                object.e1 = null;
            }
            if (message.v1 != null && message.hasOwnProperty("v1"))
                object.v1 = options.enums === String ? $root.test.Msg.verify[message.v1] : message.v1;
            if (message.e1 != null && message.hasOwnProperty("e1"))
                object.e1 = $root.test.Msg.encode.toObject(message.e1, options);
            return object;
        };

        /**
         * Converts this Msg to JSON.
         * @function toJSON
         * @memberof test.Msg
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        Msg.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * verify enum.
         * @name test.Msg.verify
         * @enum {number}
         * @property {number} verify=1 verify value
         */
        Msg.verify = (function() {
            var valuesById = {}, values = Object.create(valuesById);
            values[valuesById[1] = "verify"] = 1;
            return values;
        })();

        Msg.encode = (function() {

            /**
             * Properties of an encode.
             * @memberof test.Msg
             * @interface Iencode
             * @property {number|null} [encode] encode encode
             */

            /**
             * Constructs a new encode.
             * @memberof test.Msg
             * @classdesc Represents an encode.
             * @implements Iencode
             * @constructor
             * @param {test.Msg.Iencode=} [properties] Properties to set
             */
            function encode(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * encode encode.
             * @member {number} encode
             * @memberof test.Msg.encode
             * @instance
             */
            encode.prototype.encode = 0;

            /**
             * Creates a new encode instance using the specified properties.
             * @function create
             * @memberof test.Msg.encode
             * @static
             * @param {test.Msg.Iencode=} [properties] Properties to set
             * @returns {test.Msg.encode} encode instance
             */
            encode.create = function create(properties) {
                return new encode(properties);
            };

            /**
             * Encodes the specified encode message. Does not implicitly {@link test.Msg.encode.verify|verify} messages.
             * @function encode
             * @memberof test.Msg.encode
             * @static
             * @param {test.Msg.Iencode} message encode message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.encode != null && Object.hasOwnProperty.call(message, "encode"))
                    writer.uint32(/* id 1, wireType 0 =*/8).int32(message.encode);
                return writer;
            }

            /**
             * Encodes the specified encode message, length delimited. Does not implicitly {@link test.Msg.encode.verify|verify} messages.
             * @function encodeDelimited
             * @memberof test.Msg.encode
             * @static
             * @param {test.Msg.Iencode} message encode message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            encode.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes an encode message from the specified reader or buffer.
             * @function decode
             * @memberof test.Msg.encode
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {test.Msg.encode} encode
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            encode.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.test.Msg.encode();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.encode = reader.int32();
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Decodes an encode message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof test.Msg.encode
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {test.Msg.encode} encode
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            encode.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies an encode message.
             * @function verify
             * @memberof test.Msg.encode
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            encode.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.encode != null && message.hasOwnProperty("encode"))
                    if (!$util.isInteger(message.encode))
                        return "encode: integer expected";
                return null;
            };

            /**
             * Creates an encode message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof test.Msg.encode
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {test.Msg.encode} encode
             */
            encode.fromObject = function fromObject(object) {
                if (object instanceof $root.test.Msg.encode)
                    return object;
                var message = new $root.test.Msg.encode();
                if (object.encode != null)
                    message.encode = object.encode | 0;
                return message;
            };

            /**
             * Creates a plain object from an encode message. Also converts values to other types if specified.
             * @function toObject
             * @memberof test.Msg.encode
             * @static
             * @param {test.Msg.encode} message encode
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            encode.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.defaults)
                    object.encode = 0;
                if (message.encode != null && message.hasOwnProperty("encode"))
                    object.encode = message.encode;
                return object;
            };

            /**
             * Converts this encode to JSON.
             * @function toJSON
             * @memberof test.Msg.encode
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            encode.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            return encode;
        })();

        return Msg;
    })();

    /**
     * Enum enum.
     * @name test.Enum
     * @enum {number}
     * @property {number} E1=1 E1 value
     */
    test.Enum = (function() {
        var valuesById = {}, values = Object.create(valuesById);
        values[valuesById[1] = "E1"] = 1;
        return values;
    })();

    return test;
})();

module.exports = $root;
