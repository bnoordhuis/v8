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

// Flags: --allow-natives-syntax --harmony-typed-arrays

assertThrows("DataView()", TypeError);
assertThrows("DataView({})", TypeError);

var view = DataView(ArrayBuffer(8));
assertEquals(0, view.getInt8(7));
assertEquals(0, view.getUint8(7));
assertEquals(0, view.getInt16(6));
assertEquals(0, view.getUint16(6));
assertEquals(0, view.getInt32(4));
assertEquals(0, view.getUint32(4));
assertEquals(0, view.getFloat32(4));
assertEquals(0, view.getFloat64(0));

assertThrows("view.getInt8()", TypeError);
assertThrows("view.getUint8()", TypeError);
assertThrows("view.getInt16()", TypeError);
assertThrows("view.getUint16()", TypeError);
assertThrows("view.getInt32()", TypeError);
assertThrows("view.getUint32()", TypeError);
assertThrows("view.getFloat32()", TypeError);
assertThrows("view.getFloat64()", TypeError);

assertThrows("view.getInt8(-1)", RangeError);
assertThrows("view.getUint8(-1)", RangeError);
assertThrows("view.getInt16(-1)", RangeError);
assertThrows("view.getUint16(-1)", RangeError);
assertThrows("view.getInt32(-1)", RangeError);
assertThrows("view.getUint32(-1)", RangeError);
assertThrows("view.getFloat32(-1)", RangeError);
assertThrows("view.getFloat64(-1)", RangeError);

assertThrows("view.getInt8(8)", RangeError);
assertThrows("view.getUint8(8)", RangeError);
assertThrows("view.getInt16(7)", RangeError);
assertThrows("view.getUint16(7)", RangeError);
assertThrows("view.getInt32(5)", RangeError);
assertThrows("view.getUint32(5)", RangeError);
assertThrows("view.getFloat32(5)", RangeError);
assertThrows("view.getFloat64(1)", RangeError);

view.setInt8(7, 0x12);
view.setUint8(7, 0x12);
view.setInt16(6, 0x1234);
view.setUint8(6, 0x1234);
view.setInt32(4, 0x12345678);
view.setUint32(4, 0x12345678);
view.setFloat32(4, 0x12345678);
view.setFloat64(0, 0x1234567890abcdef);
assertEquals(view.getFloat64(0), 0x1234567890abcdef);

assertThrows("view.setInt8()", TypeError);
assertThrows("view.setUint8()", TypeError);
assertThrows("view.setInt16()", TypeError);
assertThrows("view.setUint16()", TypeError);
assertThrows("view.setInt32()", TypeError);
assertThrows("view.setUint32()", TypeError);
assertThrows("view.setFloat32()", TypeError);
assertThrows("view.setFloat64()", TypeError);

assertThrows("view.setInt8(-1)", TypeError);
assertThrows("view.setUint8(-1)", TypeError);
assertThrows("view.setInt16(-1)", TypeError);
assertThrows("view.setUint16(-1)", TypeError);
assertThrows("view.setInt32(-1)", TypeError);
assertThrows("view.setUint32(-1)", TypeError);
assertThrows("view.setFloat32(-1)", TypeError);
assertThrows("view.setFloat64(-1)", TypeError);

assertThrows("view.setInt8(-1, 0)", RangeError);
assertThrows("view.setUint8(-1, 0)", RangeError);
assertThrows("view.setInt16(-1, 0)", RangeError);
assertThrows("view.setUint16(-1, 0)", RangeError);
assertThrows("view.setInt32(-1, 0)", RangeError);
assertThrows("view.setUint32(-1, 0)", RangeError);
assertThrows("view.setFloat32(-1, 0)", RangeError);
assertThrows("view.setFloat64(-1, 0)", RangeError);

assertThrows("view.setInt8(8, 0)", RangeError);
assertThrows("view.setUint8(8, 0)", RangeError);
assertThrows("view.setInt16(7, 0)", RangeError);
assertThrows("view.setUint16(7, 0)", RangeError);
assertThrows("view.setInt32(5, 0)", RangeError);
assertThrows("view.setUint32(5, 0)", RangeError);
assertThrows("view.setFloat32(5, 0)", RangeError);
assertThrows("view.setFloat64(1, 0)", RangeError);

view.setInt32(0, 0x12345678);
view.setInt32(4, 0x90abcdef);

assertEquals(0x12, view.getUint8(0));
assertEquals(0x34, view.getUint8(1));
assertEquals(0x56, view.getUint8(2));
assertEquals(0x78, view.getUint8(3));
assertEquals(0x1234, view.getUint16(0));
assertEquals(0x5678, view.getUint16(2));
assertEquals(0x12345678, view.getUint32(0));

view.setFloat32(0, NaN);
assertTrue(isNaN(view.getFloat32(0)));
view.setFloat64(0, NaN);
assertTrue(isNaN(view.getFloat64(0)));

view.setFloat32(0, "bad");
assertTrue(isNaN(view.getFloat32(0)));
view.setFloat64(0, "bad");
assertTrue(isNaN(view.getFloat64(0)));

for (var i = 0; i < view.byteLength; ++i) view.setUint8(i, i);
assertEquals(0, view.getUint8(+Infinity));
assertEquals(0, view.getUint8(-Infinity));
assertEquals(0, view.getUint8(NaN));
assertEquals(0, view.getUint8(0.0));
assertEquals(0, view.getUint8(0.1));
assertEquals(0, view.getUint8(0.9));
assertEquals(1, view.getUint8(1.0));
