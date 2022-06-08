<!--
 Copyright (c) 2022 System233
 
 This software is released under the MIT License.
 https://opensource.org/licenses/MIT
-->

# Protobufjs Decompiler

A Simple Decompiler for Protobufjs.

## Install
```shell
npm install -g depbjs
```

## Usage

```
depbjs -i target.js -o target.proto
```

## Example
```shell
pbjs -t commonjs tests/test.proto -o tests/test.js
depbjs -i tests/test.js -o tests/output.proto
```

test.proto
```protobuf
// test.proto
package testPackage;
syntax = "proto3";
message SubMsg{
    int32 testSubmsg=1;
};
message TestMessage {
  string test_field = 1;
  int32 i32 = 3;
  int64 i64 = 2;
  string str = 4;
  float f32 = 5;
  SubMsg msg=7;
  uint32 u32x = 6;
}

enum TestEnum{
  Key=1;
  E2=20;
  XX=3;
}
```

output.proto
```protobuf
// 
// This file is decompiled by depbjs v0.0.1.
// source: ./tests/test.js
// 

package testPackage;

message SubMsg {
    int32 testSubmsg = 1;
};

message TestMessage {
    string testField = 1;
    int32 i32 = 3;
    int64 i64 = 2;
    string str = 4;
    float f32 = 5;
    SubMsg msg = 7;
    uint32 u32x = 6;
};

enum TestEnum {
    Key = 1;
    E2 = 20;
    XX = 3;
};
```

## License

[MIT](LICENSE) License.
