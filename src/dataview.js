// Copyright 2013 the V8 project authors. All rights reserved.
// Redistribution and use in source and binary forms, with or without
// modification, are permitted provided that the following conditions are
// met:
//
//     * Redistributions of source code must retain the above copyright
//       notice, this list of conditions and the following disclaimer.
//     * Redistributions in binary form must reproduce the above
//       copyright notice, this list of conditions and the following
//       disclaimer in the documentation and/or other materials provided
//       with the distribution.
//     * Neither the name of Google Inc. nor the names of its
//       contributors may be used to endorse or promote products derived
//       from this software without specific prior written permission.
//
// THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS
// "AS IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT
// LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR
// A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT
// OWNER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL,
// SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT
// LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE,
// DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY
// THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT
// (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE
// OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.

"use strict";

// This file relies on the fact that the following declaration has been made
// in runtime.js:
// var $Array = global.Array;

var $DataView = global.DataView;


function DataViewConstructor(buffer, byteOffset, byteLength) {
  if (%_IsConstructCall()) {
    if (!IS_ARRAYBUFFER(buffer)) {
      throw MakeTypeError("not_array_buffer");
    }
    var bufferByteLength = %ArrayBufferGetByteLength(buffer);
    var offset = IS_UNDEFINED(byteOffset) ? 0 : TO_POSITIVE_INTEGER(byteOffset);
    if (offset > bufferByteLength) {
      throw MakeRangeError("invalid_data_view_offset");
    }
    var length;
    if (IS_UNDEFINED(byteLength)) {
      length = bufferByteLength - offset;
    } else {
      length = TO_POSITIVE_INTEGER(byteLength);
    }
    if (offset + length > bufferByteLength) {
      throw MakeRangeError("invalid_data_view_length");
    }
    %DataViewInitialize(this, buffer, offset, length);
  } else {
    return new $DataView(buffer, byteOffset, byteLength);
  }
}


function DataViewGetBuffer() {
  return %DataViewGetBuffer(this);
}


function DataViewGetByteLength() {
  return %DataViewGetByteLength(this);
}


function DataViewGetByteOffset() {
  return %DataViewGetByteOffset(this);
}


function DataViewGetInt8(byteOffset) {
  if (%_ArgumentsLength() < 1) {
    throw MakeTypeError("missing_data_view_argument");
  }
  var buffer = %DataViewGetBuffer(this);
  var offset = TO_INT32(byteOffset);
  if (offset < 0 || offset + 1 > %ArrayBufferGetByteLength(buffer)) {
    throw MakeRangeError("invalid_data_view_offset");
  }
  return %DataViewGetInt8(this, offset);
}


function DataViewGetUint8(byteOffset) {
  if (%_ArgumentsLength() < 1) {
    throw MakeTypeError("missing_data_view_argument");
  }
  var buffer = %DataViewGetBuffer(this);
  var offset = TO_INT32(byteOffset);
  if (offset < 0 || offset + 1 > %ArrayBufferGetByteLength(buffer)) {
    throw MakeRangeError("invalid_data_view_offset");
  }
  return %DataViewGetUint8(this, offset);
}


function DataViewGetInt16(byteOffset, littleEndian) {
  if (%_ArgumentsLength() < 1) {
    throw MakeTypeError("missing_data_view_argument");
  }
  var buffer = %DataViewGetBuffer(this);
  var offset = TO_INT32(byteOffset);
  if (offset < 0 || offset + 2 > %ArrayBufferGetByteLength(buffer)) {
    throw MakeRangeError("invalid_data_view_offset");
  }
  return %DataViewGetInt16(this, offset, ToBoolean(littleEndian));
}


function DataViewGetUint16(byteOffset, littleEndian) {
  if (%_ArgumentsLength() < 1) {
    throw MakeTypeError("missing_data_view_argument");
  }
  var buffer = %DataViewGetBuffer(this);
  var offset = TO_INT32(byteOffset);
  if (offset < 0 || offset + 2 > %ArrayBufferGetByteLength(buffer)) {
    throw MakeRangeError("invalid_data_view_offset");
  }
  return %DataViewGetUint16(this, offset, ToBoolean(littleEndian));
}


function DataViewGetInt32(byteOffset, littleEndian) {
  if (%_ArgumentsLength() < 1) {
    throw MakeTypeError("missing_data_view_argument");
  }
  var buffer = %DataViewGetBuffer(this);
  var offset = TO_INT32(byteOffset);
  if (offset < 0 || offset + 4 > %ArrayBufferGetByteLength(buffer)) {
    throw MakeRangeError("invalid_data_view_offset");
  }
  return %DataViewGetInt32(this, offset, ToBoolean(littleEndian));
}


function DataViewGetUint32(byteOffset, littleEndian) {
  if (%_ArgumentsLength() < 1) {
    throw MakeTypeError("missing_data_view_argument");
  }
  var buffer = %DataViewGetBuffer(this);
  var offset = TO_INT32(byteOffset);
  if (offset < 0 || offset + 4 > %ArrayBufferGetByteLength(buffer)) {
    throw MakeRangeError("invalid_data_view_offset");
  }
  return %DataViewGetUint32(this, offset, ToBoolean(littleEndian));
}


function DataViewGetFloat32(byteOffset, littleEndian) {
  if (%_ArgumentsLength() < 1) {
    throw MakeTypeError("missing_data_view_argument");
  }
  var buffer = %DataViewGetBuffer(this);
  var offset = TO_INT32(byteOffset);
  if (offset < 0 || offset + 4 > %ArrayBufferGetByteLength(buffer)) {
    throw MakeRangeError("invalid_data_view_offset");
  }
  return %DataViewGetFloat32(this, offset, ToBoolean(littleEndian));
}


function DataViewGetFloat64(byteOffset, littleEndian) {
  if (%_ArgumentsLength() < 1) {
    throw MakeTypeError("missing_data_view_argument");
  }
  var buffer = %DataViewGetBuffer(this);
  var offset = TO_INT32(byteOffset);
  if (offset < 0 || offset + 8 > %ArrayBufferGetByteLength(buffer)) {
    throw MakeRangeError("invalid_data_view_offset");
  }
  return %DataViewGetFloat64(this, offset, ToBoolean(littleEndian));
}


function DataViewSetInt8(byteOffset, value) {
  if (%_ArgumentsLength() < 2) {
    throw MakeTypeError("missing_data_view_argument");
  }
  var buffer = %DataViewGetBuffer(this);
  var offset = TO_INT32(byteOffset);
  if (offset < 0 || offset + 1 > %ArrayBufferGetByteLength(buffer)) {
    throw MakeRangeError("invalid_data_view_offset");
  }
  return %DataViewSetInt8(this, offset, TO_INT32(value));
}


function DataViewSetUint8(byteOffset, value) {
  if (%_ArgumentsLength() < 2) {
    throw MakeTypeError("missing_data_view_argument");
  }
  var buffer = %DataViewGetBuffer(this);
  var offset = TO_INT32(byteOffset);
  if (offset < 0 || offset + 1 > %ArrayBufferGetByteLength(buffer)) {
    throw MakeRangeError("invalid_data_view_offset");
  }
  return %DataViewSetUint8(this, offset, TO_UINT32(value));
}


function DataViewSetInt16(byteOffset, value, littleEndian) {
  if (%_ArgumentsLength() < 2) {
    throw MakeTypeError("missing_data_view_argument");
  }
  var buffer = %DataViewGetBuffer(this);
  var offset = TO_INT32(byteOffset);
  if (offset < 0 || offset + 2 > %ArrayBufferGetByteLength(buffer)) {
    throw MakeRangeError("invalid_data_view_offset");
  }
  var le = !IS_UNDEFINED(littleEndian) && ToBoolean(littleEndian);
  return %DataViewSetInt16(this, offset, TO_INT32(value), le);
}


function DataViewSetUint16(byteOffset, value, littleEndian) {
  if (%_ArgumentsLength() < 2) {
    throw MakeTypeError("missing_data_view_argument");
  }
  var buffer = %DataViewGetBuffer(this);
  var offset = TO_INT32(byteOffset);
  if (offset < 0 || offset + 2 > %ArrayBufferGetByteLength(buffer)) {
    throw MakeRangeError("invalid_data_view_offset");
  }
  var le = !IS_UNDEFINED(littleEndian) && ToBoolean(littleEndian);
  return %DataViewSetUint16(this, offset, TO_UINT32(value), le);
}


function DataViewSetInt32(byteOffset, value, littleEndian) {
  if (%_ArgumentsLength() < 2) {
    throw MakeTypeError("missing_data_view_argument");
  }
  var buffer = %DataViewGetBuffer(this);
  var offset = TO_INT32(byteOffset);
  if (offset < 0 || offset + 4 > %ArrayBufferGetByteLength(buffer)) {
    throw MakeRangeError("invalid_data_view_offset");
  }
  var le = !IS_UNDEFINED(littleEndian) && ToBoolean(littleEndian);
  return %DataViewSetInt32(this, offset, TO_INT32(value), le);
}


function DataViewSetUint32(byteOffset, value, littleEndian) {
  if (%_ArgumentsLength() < 2) {
    throw MakeTypeError("missing_data_view_argument");
  }
  var buffer = %DataViewGetBuffer(this);
  var offset = TO_INT32(byteOffset);
  if (offset < 0 || offset + 4 > %ArrayBufferGetByteLength(buffer)) {
    throw MakeRangeError("invalid_data_view_offset");
  }
  var le = !IS_UNDEFINED(littleEndian) && ToBoolean(littleEndian);
  return %DataViewSetUint32(this, offset, TO_UINT32(value), le);
}


function DataViewSetFloat32(byteOffset, value, littleEndian) {
  if (%_ArgumentsLength() < 2) {
    throw MakeTypeError("missing_data_view_argument");
  }
  var buffer = %DataViewGetBuffer(this);
  var offset = TO_INT32(byteOffset);
  if (offset < 0 || offset + 4 > %ArrayBufferGetByteLength(buffer)) {
    throw MakeRangeError("invalid_data_view_offset");
  }
  var le = !IS_UNDEFINED(littleEndian) && ToBoolean(littleEndian);
  return %DataViewSetFloat32(this, offset, TO_NUMBER_INLINE(value), le);
}


function DataViewSetFloat64(byteOffset, value, littleEndian) {
  if (%_ArgumentsLength() < 2) {
    throw MakeTypeError("missing_data_view_argument");
  }
  var buffer = %DataViewGetBuffer(this);
  var offset = TO_INT32(byteOffset);
  if (offset < 0 || offset + 8 > %ArrayBufferGetByteLength(buffer)) {
    throw MakeRangeError("invalid_data_view_offset");
  }
  var le = !IS_UNDEFINED(littleEndian) && ToBoolean(littleEndian);
  return %DataViewSetFloat64(this, offset, TO_NUMBER_INLINE(value), le);
}


function SetUpDataView() {
  %CheckIsBootstrapping();
  %SetCode($DataView, DataViewConstructor);
  %FunctionSetPrototype($DataView, new $Object());
  %SetProperty($DataView.prototype, "constructor", $DataView, DONT_ENUM);
  InstallGetter($DataView.prototype, "buffer", DataViewGetBuffer);
  InstallGetter($DataView.prototype, "byteOffset", DataViewGetByteOffset);
  InstallGetter($DataView.prototype, "byteLength", DataViewGetByteLength);
  InstallFunctions($DataView.prototype, DONT_ENUM, $Array(
        "getInt8", DataViewGetInt8,
        "getUint8", DataViewGetUint8,
        "getInt16", DataViewGetInt16,
        "getUint16", DataViewGetUint16,
        "getInt32", DataViewGetInt32,
        "getUint32", DataViewGetUint32,
        "getFloat32", DataViewGetFloat32,
        "getFloat64", DataViewGetFloat64,
        "setInt8", DataViewSetInt8,
        "setUint8", DataViewSetUint8,
        "setInt16", DataViewSetInt16,
        "setUint16", DataViewSetUint16,
        "setInt32", DataViewSetInt32,
        "setUint32", DataViewSetUint32,
        "setFloat32", DataViewSetFloat32,
        "setFloat64", DataViewSetFloat64
  ));
}

SetUpDataView();
