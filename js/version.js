//
// Version information
// Copyright (C) 2012-2021 Ake Hedman, the VSCP Project
// <akje@vscp.org>
// Copyright © 2015-2021 Andreas Merkle
// <vscp@blue-andi.de>
//
// Licence:
// The MIT License (MIT)
// [OSI Approved License]
//
// The MIT License (MIT)
//
// Copyright © 2012-2021 Ake Hedman, the VSCP Project
//
// Permission is hereby granted, free of charge, to any person obtaining a copy
// of this software and associated documentation files (the "Software"), to deal
// in the Software without restriction, including without limitation the rights
// to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
// copies of the Software, and to permit persons to whom the Software is
// furnished to do so, subject to the following conditions:
//
// The above copyright notice and this permission notice shall be included in
// all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
// IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
// FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
// AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
// LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
// OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
// THE SOFTWARE.
//
// Alternative licenses for VSCP & Friends may be arranged by contacting
// the VSCP Project at info@grodansparadis.com, https://www.grodansparadis.com
//

/** Get VSCP UX version.
 * @return {object} VSCP UX version object
 */
var vscp_ux = {
	version: {
        major: 15,
        minor: 0,
        build: 0,
        full: "15.0.0",
        copyright: "Copyright © 2012-2021 Ake Hedman, the VSCP Project)"
    },
    jslibversion: {
        major: vscp.version.major,
        minor: vscp.version.minor,
        build: vscp.version.patch,
        full: ""+vscp.version.major+"."+vscp.version.minor+"."+vscp.version.patch,
    }
};
