var ur = Object.defineProperty, fr = Object.defineProperties;
var pr = Object.getOwnPropertyDescriptors;
var Et = Object.getOwnPropertySymbols;
var dr = Object.prototype.hasOwnProperty, hr = Object.prototype.propertyIsEnumerable;
var St = (e, t, r) => t in e ? ur(e, t, { enumerable: !0, configurable: !0, writable: !0, value: r }) : e[t] = r, R = (e, t) => {
  for (var r in t || (t = {}))
    dr.call(t, r) && St(e, r, t[r]);
  if (Et)
    for (var r of Et(t))
      hr.call(t, r) && St(e, r, t[r]);
  return e;
}, J = (e, t) => fr(e, pr(t));
var qe = (e, t, r) => {
  if (!t.has(e))
    throw TypeError("Cannot " + r);
};
var N = (e, t, r) => (qe(e, t, "read from private field"), r ? r.call(e) : t.get(e)), G = (e, t, r) => {
  if (t.has(e))
    throw TypeError("Cannot add the same private member more than once");
  t instanceof WeakSet ? t.add(e) : t.set(e, r);
}, K = (e, t, r, o) => (qe(e, t, "write to private field"), o ? o.call(e, r) : t.set(e, r), r);
var Ot = (e, t, r) => (qe(e, t, "access private method"), r);
(() => {
  const e = /* @__PURE__ */ new Date(), t = /* @__PURE__ */ new Date();
  return e.setTime(t.getTime() - 3600 * 1e3 * 24 * 1), t.setTime(t.getTime() - 3600 * 1e3 * 24 * 1), [t, e];
})(), (() => {
  const e = /* @__PURE__ */ new Date(), t = /* @__PURE__ */ new Date();
  var r = t.getDay() || 7;
  return t.setDate(t.getDate() - r + 1), [t, e];
})(), (() => {
  let e = /* @__PURE__ */ new Date(), t = new Date(e.getTime() - 7 * 24 * 3600 * 1e3), r = new Date(e.getTime() - 7 * 24 * 3600 * 1e3), o = t.getDay(), n = t.getDate() - o + (o === 0 ? -6 : 1), i = new Date(t.setDate(n)), a = new Date(r.setDate(n + 6));
  return [i, a];
})(), (() => {
  const e = /* @__PURE__ */ new Date(), t = /* @__PURE__ */ new Date();
  return t.setDate(1), t.setHours(0), t.setSeconds(0), t.setMinutes(0), [t, e];
})(), (() => {
  let e = 864e5, t = /* @__PURE__ */ new Date(), r = new Date(t.getFullYear(), t.getMonth() - 1, 1), o = new Date(t.getFullYear(), t.getMonth(), 1).getTime() - 1 * e, n = new Date(o);
  return [r, n];
})(), (() => {
  const e = /* @__PURE__ */ new Date(), t = /* @__PURE__ */ new Date();
  return t.setTime(t.getTime() - 3600 * 1e3 * 24 * 6), [t, e];
})(), (() => {
  const e = /* @__PURE__ */ new Date(), t = /* @__PURE__ */ new Date();
  return t.setTime(t.getTime() - 3600 * 1e3 * 24 * 30), [t, e];
})();
var ie = {}, br = {
  get exports() {
    return ie;
  },
  set exports(e) {
    ie = e;
  }
}, Ye = {}, wr = {
  get exports() {
    return Ye;
  },
  set exports(e) {
    Ye = e;
  }
};
(function() {
  var e = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", t = {
    // Bit-wise rotation left
    rotl: function(r, o) {
      return r << o | r >>> 32 - o;
    },
    // Bit-wise rotation right
    rotr: function(r, o) {
      return r << 32 - o | r >>> o;
    },
    // Swap big-endian to little-endian and vice versa
    endian: function(r) {
      if (r.constructor == Number)
        return t.rotl(r, 8) & 16711935 | t.rotl(r, 24) & 4278255360;
      for (var o = 0; o < r.length; o++)
        r[o] = t.endian(r[o]);
      return r;
    },
    // Generate an array of any length of random bytes
    randomBytes: function(r) {
      for (var o = []; r > 0; r--)
        o.push(Math.floor(Math.random() * 256));
      return o;
    },
    // Convert a byte array to big-endian 32-bit words
    bytesToWords: function(r) {
      for (var o = [], n = 0, i = 0; n < r.length; n++, i += 8)
        o[i >>> 5] |= r[n] << 24 - i % 32;
      return o;
    },
    // Convert big-endian 32-bit words to a byte array
    wordsToBytes: function(r) {
      for (var o = [], n = 0; n < r.length * 32; n += 8)
        o.push(r[n >>> 5] >>> 24 - n % 32 & 255);
      return o;
    },
    // Convert a byte array to a hex string
    bytesToHex: function(r) {
      for (var o = [], n = 0; n < r.length; n++)
        o.push((r[n] >>> 4).toString(16)), o.push((r[n] & 15).toString(16));
      return o.join("");
    },
    // Convert a hex string to a byte array
    hexToBytes: function(r) {
      for (var o = [], n = 0; n < r.length; n += 2)
        o.push(parseInt(r.substr(n, 2), 16));
      return o;
    },
    // Convert a byte array to a base-64 string
    bytesToBase64: function(r) {
      for (var o = [], n = 0; n < r.length; n += 3)
        for (var i = r[n] << 16 | r[n + 1] << 8 | r[n + 2], a = 0; a < 4; a++)
          n * 8 + a * 6 <= r.length * 8 ? o.push(e.charAt(i >>> 6 * (3 - a) & 63)) : o.push("=");
      return o.join("");
    },
    // Convert a base-64 string to a byte array
    base64ToBytes: function(r) {
      r = r.replace(/[^A-Z0-9+\/]/ig, "");
      for (var o = [], n = 0, i = 0; n < r.length; i = ++n % 4)
        i != 0 && o.push((e.indexOf(r.charAt(n - 1)) & Math.pow(2, -2 * i + 8) - 1) << i * 2 | e.indexOf(r.charAt(n)) >>> 6 - i * 2);
      return o;
    }
  };
  wr.exports = t;
})();
var $e = {
  // UTF-8 encoding
  utf8: {
    // Convert a string to a byte array
    stringToBytes: function(e) {
      return $e.bin.stringToBytes(unescape(encodeURIComponent(e)));
    },
    // Convert a byte array to a string
    bytesToString: function(e) {
      return decodeURIComponent(escape($e.bin.bytesToString(e)));
    }
  },
  // Binary encoding
  bin: {
    // Convert a string to a byte array
    stringToBytes: function(e) {
      for (var t = [], r = 0; r < e.length; r++)
        t.push(e.charCodeAt(r) & 255);
      return t;
    },
    // Convert a byte array to a string
    bytesToString: function(e) {
      for (var t = [], r = 0; r < e.length; r++)
        t.push(String.fromCharCode(e[r]));
      return t.join("");
    }
  }
}, Tt = $e;
/*!
 * Determine if an object is a Buffer
 *
 * @author   Feross Aboukhadijeh <https://feross.org>
 * @license  MIT
 */
var mr = function(e) {
  return e != null && (Ut(e) || gr(e) || !!e._isBuffer);
};
function Ut(e) {
  return !!e.constructor && typeof e.constructor.isBuffer == "function" && e.constructor.isBuffer(e);
}
function gr(e) {
  return typeof e.readFloatLE == "function" && typeof e.slice == "function" && Ut(e.slice(0, 0));
}
(function() {
  var e = Ye, t = Tt.utf8, r = mr, o = Tt.bin, n = function(i, a) {
    i.constructor == String ? a && a.encoding === "binary" ? i = o.stringToBytes(i) : i = t.stringToBytes(i) : r(i) ? i = Array.prototype.slice.call(i, 0) : !Array.isArray(i) && i.constructor !== Uint8Array && (i = i.toString());
    for (var u = e.bytesToWords(i), w = i.length * 8, p = 1732584193, f = -271733879, d = -1732584194, s = 271733878, l = 0; l < u.length; l++)
      u[l] = (u[l] << 8 | u[l] >>> 24) & 16711935 | (u[l] << 24 | u[l] >>> 8) & 4278255360;
    u[w >>> 5] |= 128 << w % 32, u[(w + 64 >>> 9 << 4) + 14] = w;
    for (var c = n._ff, h = n._gg, m = n._hh, S = n._ii, l = 0; l < u.length; l += 16) {
      var I = p, v = f, _ = d, L = s;
      p = c(p, f, d, s, u[l + 0], 7, -680876936), s = c(s, p, f, d, u[l + 1], 12, -389564586), d = c(d, s, p, f, u[l + 2], 17, 606105819), f = c(f, d, s, p, u[l + 3], 22, -1044525330), p = c(p, f, d, s, u[l + 4], 7, -176418897), s = c(s, p, f, d, u[l + 5], 12, 1200080426), d = c(d, s, p, f, u[l + 6], 17, -1473231341), f = c(f, d, s, p, u[l + 7], 22, -45705983), p = c(p, f, d, s, u[l + 8], 7, 1770035416), s = c(s, p, f, d, u[l + 9], 12, -1958414417), d = c(d, s, p, f, u[l + 10], 17, -42063), f = c(f, d, s, p, u[l + 11], 22, -1990404162), p = c(p, f, d, s, u[l + 12], 7, 1804603682), s = c(s, p, f, d, u[l + 13], 12, -40341101), d = c(d, s, p, f, u[l + 14], 17, -1502002290), f = c(f, d, s, p, u[l + 15], 22, 1236535329), p = h(p, f, d, s, u[l + 1], 5, -165796510), s = h(s, p, f, d, u[l + 6], 9, -1069501632), d = h(d, s, p, f, u[l + 11], 14, 643717713), f = h(f, d, s, p, u[l + 0], 20, -373897302), p = h(p, f, d, s, u[l + 5], 5, -701558691), s = h(s, p, f, d, u[l + 10], 9, 38016083), d = h(d, s, p, f, u[l + 15], 14, -660478335), f = h(f, d, s, p, u[l + 4], 20, -405537848), p = h(p, f, d, s, u[l + 9], 5, 568446438), s = h(s, p, f, d, u[l + 14], 9, -1019803690), d = h(d, s, p, f, u[l + 3], 14, -187363961), f = h(f, d, s, p, u[l + 8], 20, 1163531501), p = h(p, f, d, s, u[l + 13], 5, -1444681467), s = h(s, p, f, d, u[l + 2], 9, -51403784), d = h(d, s, p, f, u[l + 7], 14, 1735328473), f = h(f, d, s, p, u[l + 12], 20, -1926607734), p = m(p, f, d, s, u[l + 5], 4, -378558), s = m(s, p, f, d, u[l + 8], 11, -2022574463), d = m(d, s, p, f, u[l + 11], 16, 1839030562), f = m(f, d, s, p, u[l + 14], 23, -35309556), p = m(p, f, d, s, u[l + 1], 4, -1530992060), s = m(s, p, f, d, u[l + 4], 11, 1272893353), d = m(d, s, p, f, u[l + 7], 16, -155497632), f = m(f, d, s, p, u[l + 10], 23, -1094730640), p = m(p, f, d, s, u[l + 13], 4, 681279174), s = m(s, p, f, d, u[l + 0], 11, -358537222), d = m(d, s, p, f, u[l + 3], 16, -722521979), f = m(f, d, s, p, u[l + 6], 23, 76029189), p = m(p, f, d, s, u[l + 9], 4, -640364487), s = m(s, p, f, d, u[l + 12], 11, -421815835), d = m(d, s, p, f, u[l + 15], 16, 530742520), f = m(f, d, s, p, u[l + 2], 23, -995338651), p = S(p, f, d, s, u[l + 0], 6, -198630844), s = S(s, p, f, d, u[l + 7], 10, 1126891415), d = S(d, s, p, f, u[l + 14], 15, -1416354905), f = S(f, d, s, p, u[l + 5], 21, -57434055), p = S(p, f, d, s, u[l + 12], 6, 1700485571), s = S(s, p, f, d, u[l + 3], 10, -1894986606), d = S(d, s, p, f, u[l + 10], 15, -1051523), f = S(f, d, s, p, u[l + 1], 21, -2054922799), p = S(p, f, d, s, u[l + 8], 6, 1873313359), s = S(s, p, f, d, u[l + 15], 10, -30611744), d = S(d, s, p, f, u[l + 6], 15, -1560198380), f = S(f, d, s, p, u[l + 13], 21, 1309151649), p = S(p, f, d, s, u[l + 4], 6, -145523070), s = S(s, p, f, d, u[l + 11], 10, -1120210379), d = S(d, s, p, f, u[l + 2], 15, 718787259), f = S(f, d, s, p, u[l + 9], 21, -343485551), p = p + I >>> 0, f = f + v >>> 0, d = d + _ >>> 0, s = s + L >>> 0;
    }
    return e.endian([p, f, d, s]);
  };
  n._ff = function(i, a, u, w, p, f, d) {
    var s = i + (a & u | ~a & w) + (p >>> 0) + d;
    return (s << f | s >>> 32 - f) + a;
  }, n._gg = function(i, a, u, w, p, f, d) {
    var s = i + (a & w | u & ~w) + (p >>> 0) + d;
    return (s << f | s >>> 32 - f) + a;
  }, n._hh = function(i, a, u, w, p, f, d) {
    var s = i + (a ^ u ^ w) + (p >>> 0) + d;
    return (s << f | s >>> 32 - f) + a;
  }, n._ii = function(i, a, u, w, p, f, d) {
    var s = i + (u ^ (a | ~w)) + (p >>> 0) + d;
    return (s << f | s >>> 32 - f) + a;
  }, n._blocksize = 16, n._digestsize = 16, br.exports = function(i, a) {
    if (i == null)
      throw new Error("Illegal argument " + i);
    var u = e.wordsToBytes(n(i, a));
    return a && a.asBytes ? u : a && a.asString ? o.bytesToString(u) : e.bytesToHex(u);
  };
})();
function yr() {
  try {
    const e = "bluesyoung_web@163.com <canvas> 1.0", t = document.createElement("canvas");
    t.setAttribute("width", "220"), t.setAttribute("height", "30");
    const r = t.getContext("2d");
    r.textBaseline = "top", r.font = "14px 'Arial'", r.textBaseline = "alphabetic", r.fillStyle = "#f60", r.fillRect(125, 1, 62, 20), r.fillStyle = "#069", r.fillText(e, 2, 15), r.fillStyle = "rgba(102, 204, 0, 0.7)", r.fillText(e, 4, 17);
    const o = t.toDataURL().split(",")[1], n = atob(o);
    let i = "";
    for (let a = 0; a < n.length; a++) {
      const u = n.charCodeAt(a);
      u <= 15 && (i += "0"), i += u.toString(16).toLocaleUpperCase();
    }
    return ie(i).toUpperCase();
  } catch (e) {
    throw console.log("🚀 ~ getFingerprint ~ error:", e), new Error("getFingerprint error, your envrionment is not support");
  }
}
function Mt(e, t) {
  return function() {
    return e.apply(t, arguments);
  };
}
const { toString: vr } = Object.prototype, { getPrototypeOf: nt } = Object, Ae = /* @__PURE__ */ ((e) => (t) => {
  const r = vr.call(t);
  return e[r] || (e[r] = r.slice(8, -1).toLowerCase());
})(/* @__PURE__ */ Object.create(null)), q = (e) => (e = e.toLowerCase(), (t) => Ae(t) === e), xe = (e) => (t) => typeof t === e, { isArray: ee } = Array, se = xe("undefined");
function _r(e) {
  return e !== null && !se(e) && e.constructor !== null && !se(e.constructor) && j(e.constructor.isBuffer) && e.constructor.isBuffer(e);
}
const qt = q("ArrayBuffer");
function Er(e) {
  let t;
  return typeof ArrayBuffer < "u" && ArrayBuffer.isView ? t = ArrayBuffer.isView(e) : t = e && e.buffer && qt(e.buffer), t;
}
const Sr = xe("string"), j = xe("function"), It = xe("number"), Re = (e) => e !== null && typeof e == "object", Or = (e) => e === !0 || e === !1, ve = (e) => {
  if (Ae(e) !== "object")
    return !1;
  const t = nt(e);
  return (t === null || t === Object.prototype || Object.getPrototypeOf(t) === null) && !(Symbol.toStringTag in e) && !(Symbol.iterator in e);
}, Tr = q("Date"), Ar = q("File"), xr = q("Blob"), Rr = q("FileList"), kr = (e) => Re(e) && j(e.pipe), Cr = (e) => {
  let t;
  return e && (typeof FormData == "function" && e instanceof FormData || j(e.append) && ((t = Ae(e)) === "formdata" || // detect form-data instance
  t === "object" && j(e.toString) && e.toString() === "[object FormData]"));
}, Lr = q("URLSearchParams"), Nr = (e) => e.trim ? e.trim() : e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "");
function ce(e, t, { allOwnKeys: r = !1 } = {}) {
  if (e === null || typeof e > "u")
    return;
  let o, n;
  if (typeof e != "object" && (e = [e]), ee(e))
    for (o = 0, n = e.length; o < n; o++)
      t.call(null, e[o], o, e);
  else {
    const i = r ? Object.getOwnPropertyNames(e) : Object.keys(e), a = i.length;
    let u;
    for (o = 0; o < a; o++)
      u = i[o], t.call(null, e[u], u, e);
  }
}
function zt(e, t) {
  t = t.toLowerCase();
  const r = Object.keys(e);
  let o = r.length, n;
  for (; o-- > 0; )
    if (n = r[o], t === n.toLowerCase())
      return n;
  return null;
}
const Ht = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : global, Vt = (e) => !se(e) && e !== Ht;
function Xe() {
  const { caseless: e } = Vt(this) && this || {}, t = {}, r = (o, n) => {
    const i = e && zt(t, n) || n;
    ve(t[i]) && ve(o) ? t[i] = Xe(t[i], o) : ve(o) ? t[i] = Xe({}, o) : ee(o) ? t[i] = o.slice() : t[i] = o;
  };
  for (let o = 0, n = arguments.length; o < n; o++)
    arguments[o] && ce(arguments[o], r);
  return t;
}
const Dr = (e, t, r, { allOwnKeys: o } = {}) => (ce(t, (n, i) => {
  r && j(n) ? e[i] = Mt(n, r) : e[i] = n;
}, { allOwnKeys: o }), e), Pr = (e) => (e.charCodeAt(0) === 65279 && (e = e.slice(1)), e), jr = (e, t, r, o) => {
  e.prototype = Object.create(t.prototype, o), e.prototype.constructor = e, Object.defineProperty(e, "super", {
    value: t.prototype
  }), r && Object.assign(e.prototype, r);
}, Br = (e, t, r, o) => {
  let n, i, a;
  const u = {};
  if (t = t || {}, e == null)
    return t;
  do {
    for (n = Object.getOwnPropertyNames(e), i = n.length; i-- > 0; )
      a = n[i], (!o || o(a, e, t)) && !u[a] && (t[a] = e[a], u[a] = !0);
    e = r !== !1 && nt(e);
  } while (e && (!r || r(e, t)) && e !== Object.prototype);
  return t;
}, Fr = (e, t, r) => {
  e = String(e), (r === void 0 || r > e.length) && (r = e.length), r -= t.length;
  const o = e.indexOf(t, r);
  return o !== -1 && o === r;
}, Ur = (e) => {
  if (!e)
    return null;
  if (ee(e))
    return e;
  let t = e.length;
  if (!It(t))
    return null;
  const r = new Array(t);
  for (; t-- > 0; )
    r[t] = e[t];
  return r;
}, Mr = /* @__PURE__ */ ((e) => (t) => e && t instanceof e)(typeof Uint8Array < "u" && nt(Uint8Array)), qr = (e, t) => {
  const r = (e && e[Symbol.iterator]).call(e);
  let o;
  for (; (o = r.next()) && !o.done; ) {
    const n = o.value;
    t.call(e, n[0], n[1]);
  }
}, Ir = (e, t) => {
  let r;
  const o = [];
  for (; (r = e.exec(t)) !== null; )
    o.push(r);
  return o;
}, zr = q("HTMLFormElement"), Hr = (e) => e.toLowerCase().replace(
  /[-_\s]([a-z\d])(\w*)/g,
  function(t, r, o) {
    return r.toUpperCase() + o;
  }
), At = (({ hasOwnProperty: e }) => (t, r) => e.call(t, r))(Object.prototype), Vr = q("RegExp"), Wt = (e, t) => {
  const r = Object.getOwnPropertyDescriptors(e), o = {};
  ce(r, (n, i) => {
    let a;
    (a = t(n, i, e)) !== !1 && (o[i] = a || n);
  }), Object.defineProperties(e, o);
}, Wr = (e) => {
  Wt(e, (t, r) => {
    if (j(e) && ["arguments", "caller", "callee"].indexOf(r) !== -1)
      return !1;
    const o = e[r];
    if (j(o)) {
      if (t.enumerable = !1, "writable" in t) {
        t.writable = !1;
        return;
      }
      t.set || (t.set = () => {
        throw Error("Can not rewrite read-only method '" + r + "'");
      });
    }
  });
}, Jr = (e, t) => {
  const r = {}, o = (n) => {
    n.forEach((i) => {
      r[i] = !0;
    });
  };
  return ee(e) ? o(e) : o(String(e).split(t)), r;
}, Gr = () => {
}, Kr = (e, t) => (e = +e, Number.isFinite(e) ? e : t), Ie = "abcdefghijklmnopqrstuvwxyz", xt = "0123456789", Jt = {
  DIGIT: xt,
  ALPHA: Ie,
  ALPHA_DIGIT: Ie + Ie.toUpperCase() + xt
}, Yr = (e = 16, t = Jt.ALPHA_DIGIT) => {
  let r = "";
  const { length: o } = t;
  for (; e--; )
    r += t[Math.random() * o | 0];
  return r;
};
function $r(e) {
  return !!(e && j(e.append) && e[Symbol.toStringTag] === "FormData" && e[Symbol.iterator]);
}
const Xr = (e) => {
  const t = new Array(10), r = (o, n) => {
    if (Re(o)) {
      if (t.indexOf(o) >= 0)
        return;
      if (!("toJSON" in o)) {
        t[n] = o;
        const i = ee(o) ? [] : {};
        return ce(o, (a, u) => {
          const w = r(a, n + 1);
          !se(w) && (i[u] = w);
        }), t[n] = void 0, i;
      }
    }
    return o;
  };
  return r(e, 0);
}, Zr = q("AsyncFunction"), Qr = (e) => e && (Re(e) || j(e)) && j(e.then) && j(e.catch), b = {
  isArray: ee,
  isArrayBuffer: qt,
  isBuffer: _r,
  isFormData: Cr,
  isArrayBufferView: Er,
  isString: Sr,
  isNumber: It,
  isBoolean: Or,
  isObject: Re,
  isPlainObject: ve,
  isUndefined: se,
  isDate: Tr,
  isFile: Ar,
  isBlob: xr,
  isRegExp: Vr,
  isFunction: j,
  isStream: kr,
  isURLSearchParams: Lr,
  isTypedArray: Mr,
  isFileList: Rr,
  forEach: ce,
  merge: Xe,
  extend: Dr,
  trim: Nr,
  stripBOM: Pr,
  inherits: jr,
  toFlatObject: Br,
  kindOf: Ae,
  kindOfTest: q,
  endsWith: Fr,
  toArray: Ur,
  forEachEntry: qr,
  matchAll: Ir,
  isHTMLForm: zr,
  hasOwnProperty: At,
  hasOwnProp: At,
  // an alias to avoid ESLint no-prototype-builtins detection
  reduceDescriptors: Wt,
  freezeMethods: Wr,
  toObjectSet: Jr,
  toCamelCase: Hr,
  noop: Gr,
  toFiniteNumber: Kr,
  findKey: zt,
  global: Ht,
  isContextDefined: Vt,
  ALPHABET: Jt,
  generateString: Yr,
  isSpecCompliantForm: $r,
  toJSONObject: Xr,
  isAsyncFn: Zr,
  isThenable: Qr
};
function O(e, t, r, o, n) {
  Error.call(this), Error.captureStackTrace ? Error.captureStackTrace(this, this.constructor) : this.stack = new Error().stack, this.message = e, this.name = "AxiosError", t && (this.code = t), r && (this.config = r), o && (this.request = o), n && (this.response = n);
}
b.inherits(O, Error, {
  toJSON: function() {
    return {
      // Standard
      message: this.message,
      name: this.name,
      // Microsoft
      description: this.description,
      number: this.number,
      // Mozilla
      fileName: this.fileName,
      lineNumber: this.lineNumber,
      columnNumber: this.columnNumber,
      stack: this.stack,
      // Axios
      config: b.toJSONObject(this.config),
      code: this.code,
      status: this.response && this.response.status ? this.response.status : null
    };
  }
});
const Gt = O.prototype, Kt = {};
[
  "ERR_BAD_OPTION_VALUE",
  "ERR_BAD_OPTION",
  "ECONNABORTED",
  "ETIMEDOUT",
  "ERR_NETWORK",
  "ERR_FR_TOO_MANY_REDIRECTS",
  "ERR_DEPRECATED",
  "ERR_BAD_RESPONSE",
  "ERR_BAD_REQUEST",
  "ERR_CANCELED",
  "ERR_NOT_SUPPORT",
  "ERR_INVALID_URL"
  // eslint-disable-next-line func-names
].forEach((e) => {
  Kt[e] = { value: e };
});
Object.defineProperties(O, Kt);
Object.defineProperty(Gt, "isAxiosError", { value: !0 });
O.from = (e, t, r, o, n, i) => {
  const a = Object.create(Gt);
  return b.toFlatObject(e, a, function(u) {
    return u !== Error.prototype;
  }, (u) => u !== "isAxiosError"), O.call(a, e.message, t, r, o, n), a.cause = e, a.name = e.name, i && Object.assign(a, i), a;
};
const eo = null;
function Ze(e) {
  return b.isPlainObject(e) || b.isArray(e);
}
function Yt(e) {
  return b.endsWith(e, "[]") ? e.slice(0, -2) : e;
}
function Rt(e, t, r) {
  return e ? e.concat(t).map(function(o, n) {
    return o = Yt(o), !r && n ? "[" + o + "]" : o;
  }).join(r ? "." : "") : t;
}
function to(e) {
  return b.isArray(e) && !e.some(Ze);
}
const ro = b.toFlatObject(b, {}, null, function(e) {
  return /^is[A-Z]/.test(e);
});
function ke(e, t, r) {
  if (!b.isObject(e))
    throw new TypeError("target must be an object");
  t = t || new FormData(), r = b.toFlatObject(r, {
    metaTokens: !0,
    dots: !1,
    indexes: !1
  }, !1, function(l, c) {
    return !b.isUndefined(c[l]);
  });
  const o = r.metaTokens, n = r.visitor || p, i = r.dots, a = r.indexes, u = (r.Blob || typeof Blob < "u" && Blob) && b.isSpecCompliantForm(t);
  if (!b.isFunction(n))
    throw new TypeError("visitor must be a function");
  function w(l) {
    if (l === null)
      return "";
    if (b.isDate(l))
      return l.toISOString();
    if (!u && b.isBlob(l))
      throw new O("Blob is not supported. Use a Buffer instead.");
    return b.isArrayBuffer(l) || b.isTypedArray(l) ? u && typeof Blob == "function" ? new Blob([l]) : Buffer.from(l) : l;
  }
  function p(l, c, h) {
    let m = l;
    if (l && !h && typeof l == "object") {
      if (b.endsWith(c, "{}"))
        c = o ? c : c.slice(0, -2), l = JSON.stringify(l);
      else if (b.isArray(l) && to(l) || (b.isFileList(l) || b.endsWith(c, "[]")) && (m = b.toArray(l)))
        return c = Yt(c), m.forEach(function(S, I) {
          !(b.isUndefined(S) || S === null) && t.append(
            // eslint-disable-next-line no-nested-ternary
            a === !0 ? Rt([c], I, i) : a === null ? c : c + "[]",
            w(S)
          );
        }), !1;
    }
    return Ze(l) ? !0 : (t.append(Rt(h, c, i), w(l)), !1);
  }
  const f = [], d = Object.assign(ro, {
    defaultVisitor: p,
    convertValue: w,
    isVisitable: Ze
  });
  function s(l, c) {
    if (!b.isUndefined(l)) {
      if (f.indexOf(l) !== -1)
        throw Error("Circular reference detected in " + c.join("."));
      f.push(l), b.forEach(l, function(h, m) {
        (!(b.isUndefined(h) || h === null) && n.call(
          t,
          h,
          b.isString(m) ? m.trim() : m,
          c,
          d
        )) === !0 && s(h, c ? c.concat(m) : [m]);
      }), f.pop();
    }
  }
  if (!b.isObject(e))
    throw new TypeError("data must be an object");
  return s(e), t;
}
function kt(e) {
  const t = {
    "!": "%21",
    "'": "%27",
    "(": "%28",
    ")": "%29",
    "~": "%7E",
    "%20": "+",
    "%00": "\0"
  };
  return encodeURIComponent(e).replace(/[!'()~]|%20|%00/g, function(r) {
    return t[r];
  });
}
function it(e, t) {
  this._pairs = [], e && ke(e, this, t);
}
const $t = it.prototype;
$t.append = function(e, t) {
  this._pairs.push([e, t]);
};
$t.toString = function(e) {
  const t = e ? function(r) {
    return e.call(this, r, kt);
  } : kt;
  return this._pairs.map(function(r) {
    return t(r[0]) + "=" + t(r[1]);
  }, "").join("&");
};
function oo(e) {
  return encodeURIComponent(e).replace(/%3A/gi, ":").replace(/%24/g, "$").replace(/%2C/gi, ",").replace(/%20/g, "+").replace(/%5B/gi, "[").replace(/%5D/gi, "]");
}
function Xt(e, t, r) {
  if (!t)
    return e;
  const o = r && r.encode || oo, n = r && r.serialize;
  let i;
  if (n ? i = n(t, r) : i = b.isURLSearchParams(t) ? t.toString() : new it(t, r).toString(o), i) {
    const a = e.indexOf("#");
    a !== -1 && (e = e.slice(0, a)), e += (e.indexOf("?") === -1 ? "?" : "&") + i;
  }
  return e;
}
class no {
  constructor() {
    this.handlers = [];
  }
  /**
   * Add a new interceptor to the stack
   *
   * @param {Function} fulfilled The function to handle `then` for a `Promise`
   * @param {Function} rejected The function to handle `reject` for a `Promise`
   *
   * @return {Number} An ID used to remove interceptor later
   */
  use(t, r, o) {
    return this.handlers.push({
      fulfilled: t,
      rejected: r,
      synchronous: o ? o.synchronous : !1,
      runWhen: o ? o.runWhen : null
    }), this.handlers.length - 1;
  }
  /**
   * Remove an interceptor from the stack
   *
   * @param {Number} id The ID that was returned by `use`
   *
   * @returns {Boolean} `true` if the interceptor was removed, `false` otherwise
   */
  eject(t) {
    this.handlers[t] && (this.handlers[t] = null);
  }
  /**
   * Clear all interceptors from the stack
   *
   * @returns {void}
   */
  clear() {
    this.handlers && (this.handlers = []);
  }
  /**
   * Iterate over all the registered interceptors
   *
   * This method is particularly useful for skipping over any
   * interceptors that may have become `null` calling `eject`.
   *
   * @param {Function} fn The function to call for each interceptor
   *
   * @returns {void}
   */
  forEach(t) {
    b.forEach(this.handlers, function(r) {
      r !== null && t(r);
    });
  }
}
const Ct = no, Zt = {
  silentJSONParsing: !0,
  forcedJSONParsing: !0,
  clarifyTimeoutError: !1
}, io = typeof URLSearchParams < "u" ? URLSearchParams : it, so = typeof FormData < "u" ? FormData : null, ao = typeof Blob < "u" ? Blob : null, lo = (() => {
  let e;
  return typeof navigator < "u" && ((e = navigator.product) === "ReactNative" || e === "NativeScript" || e === "NS") ? !1 : typeof window < "u" && typeof document < "u";
})(), co = typeof WorkerGlobalScope < "u" && // eslint-disable-next-line no-undef
self instanceof WorkerGlobalScope && typeof self.importScripts == "function", F = {
  isBrowser: !0,
  classes: {
    URLSearchParams: io,
    FormData: so,
    Blob: ao
  },
  isStandardBrowserEnv: lo,
  isStandardBrowserWebWorkerEnv: co,
  protocols: ["http", "https", "file", "blob", "url", "data"]
};
function uo(e, t) {
  return ke(e, new F.classes.URLSearchParams(), Object.assign({
    visitor: function(r, o, n, i) {
      return F.isNode && b.isBuffer(r) ? (this.append(o, r.toString("base64")), !1) : i.defaultVisitor.apply(this, arguments);
    }
  }, t));
}
function fo(e) {
  return b.matchAll(/\w+|\[(\w*)]/g, e).map((t) => t[0] === "[]" ? "" : t[1] || t[0]);
}
function po(e) {
  const t = {}, r = Object.keys(e);
  let o;
  const n = r.length;
  let i;
  for (o = 0; o < n; o++)
    i = r[o], t[i] = e[i];
  return t;
}
function Qt(e) {
  function t(r, o, n, i) {
    let a = r[i++];
    const u = Number.isFinite(+a), w = i >= r.length;
    return a = !a && b.isArray(n) ? n.length : a, w ? (b.hasOwnProp(n, a) ? n[a] = [n[a], o] : n[a] = o, !u) : ((!n[a] || !b.isObject(n[a])) && (n[a] = []), t(r, o, n[a], i) && b.isArray(n[a]) && (n[a] = po(n[a])), !u);
  }
  if (b.isFormData(e) && b.isFunction(e.entries)) {
    const r = {};
    return b.forEachEntry(e, (o, n) => {
      t(fo(o), n, r, 0);
    }), r;
  }
  return null;
}
function ho(e, t, r) {
  if (b.isString(e))
    try {
      return (t || JSON.parse)(e), b.trim(e);
    } catch (o) {
      if (o.name !== "SyntaxError")
        throw o;
    }
  return (r || JSON.stringify)(e);
}
const st = {
  transitional: Zt,
  adapter: F.isNode ? "http" : "xhr",
  transformRequest: [function(e, t) {
    const r = t.getContentType() || "", o = r.indexOf("application/json") > -1, n = b.isObject(e);
    if (n && b.isHTMLForm(e) && (e = new FormData(e)), b.isFormData(e))
      return o && o ? JSON.stringify(Qt(e)) : e;
    if (b.isArrayBuffer(e) || b.isBuffer(e) || b.isStream(e) || b.isFile(e) || b.isBlob(e))
      return e;
    if (b.isArrayBufferView(e))
      return e.buffer;
    if (b.isURLSearchParams(e))
      return t.setContentType("application/x-www-form-urlencoded;charset=utf-8", !1), e.toString();
    let i;
    if (n) {
      if (r.indexOf("application/x-www-form-urlencoded") > -1)
        return uo(e, this.formSerializer).toString();
      if ((i = b.isFileList(e)) || r.indexOf("multipart/form-data") > -1) {
        const a = this.env && this.env.FormData;
        return ke(
          i ? { "files[]": e } : e,
          a && new a(),
          this.formSerializer
        );
      }
    }
    return n || o ? (t.setContentType("application/json", !1), ho(e)) : e;
  }],
  transformResponse: [function(e) {
    const t = this.transitional || st.transitional, r = t && t.forcedJSONParsing, o = this.responseType === "json";
    if (e && b.isString(e) && (r && !this.responseType || o)) {
      const n = !(t && t.silentJSONParsing) && o;
      try {
        return JSON.parse(e);
      } catch (i) {
        if (n)
          throw i.name === "SyntaxError" ? O.from(i, O.ERR_BAD_RESPONSE, this, null, this.response) : i;
      }
    }
    return e;
  }],
  /**
   * A timeout in milliseconds to abort a request. If set to 0 (default) a
   * timeout is not created.
   */
  timeout: 0,
  xsrfCookieName: "XSRF-TOKEN",
  xsrfHeaderName: "X-XSRF-TOKEN",
  maxContentLength: -1,
  maxBodyLength: -1,
  env: {
    FormData: F.classes.FormData,
    Blob: F.classes.Blob
  },
  validateStatus: function(e) {
    return e >= 200 && e < 300;
  },
  headers: {
    common: {
      Accept: "application/json, text/plain, */*",
      "Content-Type": void 0
    }
  }
};
b.forEach(["delete", "get", "head", "post", "put", "patch"], (e) => {
  st.headers[e] = {};
});
const at = st, bo = b.toObjectSet([
  "age",
  "authorization",
  "content-length",
  "content-type",
  "etag",
  "expires",
  "from",
  "host",
  "if-modified-since",
  "if-unmodified-since",
  "last-modified",
  "location",
  "max-forwards",
  "proxy-authorization",
  "referer",
  "retry-after",
  "user-agent"
]), wo = (e) => {
  const t = {};
  let r, o, n;
  return e && e.split(`
`).forEach(function(i) {
    n = i.indexOf(":"), r = i.substring(0, n).trim().toLowerCase(), o = i.substring(n + 1).trim(), !(!r || t[r] && bo[r]) && (r === "set-cookie" ? t[r] ? t[r].push(o) : t[r] = [o] : t[r] = t[r] ? t[r] + ", " + o : o);
  }), t;
}, Lt = Symbol("internals");
function ne(e) {
  return e && String(e).trim().toLowerCase();
}
function _e(e) {
  return e === !1 || e == null ? e : b.isArray(e) ? e.map(_e) : String(e);
}
function mo(e) {
  const t = /* @__PURE__ */ Object.create(null), r = /([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;
  let o;
  for (; o = r.exec(e); )
    t[o[1]] = o[2];
  return t;
}
const go = (e) => /^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(e.trim());
function ze(e, t, r, o, n) {
  if (b.isFunction(o))
    return o.call(this, t, r);
  if (n && (t = r), !!b.isString(t)) {
    if (b.isString(o))
      return t.indexOf(o) !== -1;
    if (b.isRegExp(o))
      return o.test(t);
  }
}
function yo(e) {
  return e.trim().toLowerCase().replace(/([a-z\d])(\w*)/g, (t, r, o) => r.toUpperCase() + o);
}
function vo(e, t) {
  const r = b.toCamelCase(" " + t);
  ["get", "set", "has"].forEach((o) => {
    Object.defineProperty(e, o + r, {
      value: function(n, i, a) {
        return this[o].call(this, t, n, i, a);
      },
      configurable: !0
    });
  });
}
class Ce {
  constructor(t) {
    t && this.set(t);
  }
  set(t, r, o) {
    const n = this;
    function i(u, w, p) {
      const f = ne(w);
      if (!f)
        throw new Error("header name must be a non-empty string");
      const d = b.findKey(n, f);
      (!d || n[d] === void 0 || p === !0 || p === void 0 && n[d] !== !1) && (n[d || w] = _e(u));
    }
    const a = (u, w) => b.forEach(u, (p, f) => i(p, f, w));
    return b.isPlainObject(t) || t instanceof this.constructor ? a(t, r) : b.isString(t) && (t = t.trim()) && !go(t) ? a(wo(t), r) : t != null && i(r, t, o), this;
  }
  get(t, r) {
    if (t = ne(t), t) {
      const o = b.findKey(this, t);
      if (o) {
        const n = this[o];
        if (!r)
          return n;
        if (r === !0)
          return mo(n);
        if (b.isFunction(r))
          return r.call(this, n, o);
        if (b.isRegExp(r))
          return r.exec(n);
        throw new TypeError("parser must be boolean|regexp|function");
      }
    }
  }
  has(t, r) {
    if (t = ne(t), t) {
      const o = b.findKey(this, t);
      return !!(o && this[o] !== void 0 && (!r || ze(this, this[o], o, r)));
    }
    return !1;
  }
  delete(t, r) {
    const o = this;
    let n = !1;
    function i(a) {
      if (a = ne(a), a) {
        const u = b.findKey(o, a);
        u && (!r || ze(o, o[u], u, r)) && (delete o[u], n = !0);
      }
    }
    return b.isArray(t) ? t.forEach(i) : i(t), n;
  }
  clear(t) {
    const r = Object.keys(this);
    let o = r.length, n = !1;
    for (; o--; ) {
      const i = r[o];
      (!t || ze(this, this[i], i, t, !0)) && (delete this[i], n = !0);
    }
    return n;
  }
  normalize(t) {
    const r = this, o = {};
    return b.forEach(this, (n, i) => {
      const a = b.findKey(o, i);
      if (a) {
        r[a] = _e(n), delete r[i];
        return;
      }
      const u = t ? yo(i) : String(i).trim();
      u !== i && delete r[i], r[u] = _e(n), o[u] = !0;
    }), this;
  }
  concat(...t) {
    return this.constructor.concat(this, ...t);
  }
  toJSON(t) {
    const r = /* @__PURE__ */ Object.create(null);
    return b.forEach(this, (o, n) => {
      o != null && o !== !1 && (r[n] = t && b.isArray(o) ? o.join(", ") : o);
    }), r;
  }
  [Symbol.iterator]() {
    return Object.entries(this.toJSON())[Symbol.iterator]();
  }
  toString() {
    return Object.entries(this.toJSON()).map(([t, r]) => t + ": " + r).join(`
`);
  }
  get [Symbol.toStringTag]() {
    return "AxiosHeaders";
  }
  static from(t) {
    return t instanceof this ? t : new this(t);
  }
  static concat(t, ...r) {
    const o = new this(t);
    return r.forEach((n) => o.set(n)), o;
  }
  static accessor(t) {
    const r = (this[Lt] = this[Lt] = {
      accessors: {}
    }).accessors, o = this.prototype;
    function n(i) {
      const a = ne(i);
      r[a] || (vo(o, i), r[a] = !0);
    }
    return b.isArray(t) ? t.forEach(n) : n(t), this;
  }
}
Ce.accessor(["Content-Type", "Content-Length", "Accept", "Accept-Encoding", "User-Agent", "Authorization"]);
b.reduceDescriptors(Ce.prototype, ({ value: e }, t) => {
  let r = t[0].toUpperCase() + t.slice(1);
  return {
    get: () => e,
    set(o) {
      this[r] = o;
    }
  };
});
b.freezeMethods(Ce);
const z = Ce;
function He(e, t) {
  const r = this || at, o = t || r, n = z.from(o.headers);
  let i = o.data;
  return b.forEach(e, function(a) {
    i = a.call(r, i, n.normalize(), t ? t.status : void 0);
  }), n.normalize(), i;
}
function er(e) {
  return !!(e && e.__CANCEL__);
}
function ue(e, t, r) {
  O.call(this, e != null ? e : "canceled", O.ERR_CANCELED, t, r), this.name = "CanceledError";
}
b.inherits(ue, O, {
  __CANCEL__: !0
});
function _o(e, t, r) {
  const o = r.config.validateStatus;
  !r.status || !o || o(r.status) ? e(r) : t(new O(
    "Request failed with status code " + r.status,
    [O.ERR_BAD_REQUEST, O.ERR_BAD_RESPONSE][Math.floor(r.status / 100) - 4],
    r.config,
    r.request,
    r
  ));
}
const Eo = F.isStandardBrowserEnv ? (
  // Standard browser envs support document.cookie
  /* @__PURE__ */ function() {
    return {
      write: function(e, t, r, o, n, i) {
        const a = [];
        a.push(e + "=" + encodeURIComponent(t)), b.isNumber(r) && a.push("expires=" + new Date(r).toGMTString()), b.isString(o) && a.push("path=" + o), b.isString(n) && a.push("domain=" + n), i === !0 && a.push("secure"), document.cookie = a.join("; ");
      },
      read: function(e) {
        const t = document.cookie.match(new RegExp("(^|;\\s*)(" + e + ")=([^;]*)"));
        return t ? decodeURIComponent(t[3]) : null;
      },
      remove: function(e) {
        this.write(e, "", Date.now() - 864e5);
      }
    };
  }()
) : (
  // Non standard browser env (web workers, react-native) lack needed support.
  /* @__PURE__ */ function() {
    return {
      write: function() {
      },
      read: function() {
        return null;
      },
      remove: function() {
      }
    };
  }()
);
function So(e) {
  return /^([a-z][a-z\d+\-.]*:)?\/\//i.test(e);
}
function Oo(e, t) {
  return t ? e.replace(/\/+$/, "") + "/" + t.replace(/^\/+/, "") : e;
}
function tr(e, t) {
  return e && !So(t) ? Oo(e, t) : t;
}
const To = F.isStandardBrowserEnv ? (
  // Standard browser envs have full support of the APIs needed to test
  // whether the request URL is of the same origin as current location.
  function() {
    const e = /(msie|trident)/i.test(navigator.userAgent), t = document.createElement("a");
    let r;
    function o(n) {
      let i = n;
      return e && (t.setAttribute("href", i), i = t.href), t.setAttribute("href", i), {
        href: t.href,
        protocol: t.protocol ? t.protocol.replace(/:$/, "") : "",
        host: t.host,
        search: t.search ? t.search.replace(/^\?/, "") : "",
        hash: t.hash ? t.hash.replace(/^#/, "") : "",
        hostname: t.hostname,
        port: t.port,
        pathname: t.pathname.charAt(0) === "/" ? t.pathname : "/" + t.pathname
      };
    }
    return r = o(window.location.href), function(n) {
      const i = b.isString(n) ? o(n) : n;
      return i.protocol === r.protocol && i.host === r.host;
    };
  }()
) : (
  // Non standard browser envs (web workers, react-native) lack needed support.
  /* @__PURE__ */ function() {
    return function() {
      return !0;
    };
  }()
);
function Ao(e) {
  const t = /^([-+\w]{1,25})(:?\/\/|:)/.exec(e);
  return t && t[1] || "";
}
function xo(e, t) {
  e = e || 10;
  const r = new Array(e), o = new Array(e);
  let n = 0, i = 0, a;
  return t = t !== void 0 ? t : 1e3, function(u) {
    const w = Date.now(), p = o[i];
    a || (a = w), r[n] = u, o[n] = w;
    let f = i, d = 0;
    for (; f !== n; )
      d += r[f++], f = f % e;
    if (n = (n + 1) % e, n === i && (i = (i + 1) % e), w - a < t)
      return;
    const s = p && w - p;
    return s ? Math.round(d * 1e3 / s) : void 0;
  };
}
function Nt(e, t) {
  let r = 0;
  const o = xo(50, 250);
  return (n) => {
    const i = n.loaded, a = n.lengthComputable ? n.total : void 0, u = i - r, w = o(u), p = i <= a;
    r = i;
    const f = {
      loaded: i,
      total: a,
      progress: a ? i / a : void 0,
      bytes: u,
      rate: w || void 0,
      estimated: w && a && p ? (a - i) / w : void 0,
      event: n
    };
    f[t ? "download" : "upload"] = !0, e(f);
  };
}
const Ro = typeof XMLHttpRequest < "u", ko = Ro && function(e) {
  return new Promise(function(t, r) {
    let o = e.data;
    const n = z.from(e.headers).normalize(), i = e.responseType;
    let a;
    function u() {
      e.cancelToken && e.cancelToken.unsubscribe(a), e.signal && e.signal.removeEventListener("abort", a);
    }
    b.isFormData(o) && (F.isStandardBrowserEnv || F.isStandardBrowserWebWorkerEnv ? n.setContentType(!1) : n.setContentType("multipart/form-data;", !1));
    let w = new XMLHttpRequest();
    if (e.auth) {
      const s = e.auth.username || "", l = e.auth.password ? unescape(encodeURIComponent(e.auth.password)) : "";
      n.set("Authorization", "Basic " + btoa(s + ":" + l));
    }
    const p = tr(e.baseURL, e.url);
    w.open(e.method.toUpperCase(), Xt(p, e.params, e.paramsSerializer), !0), w.timeout = e.timeout;
    function f() {
      if (!w)
        return;
      const s = z.from(
        "getAllResponseHeaders" in w && w.getAllResponseHeaders()
      ), l = {
        data: !i || i === "text" || i === "json" ? w.responseText : w.response,
        status: w.status,
        statusText: w.statusText,
        headers: s,
        config: e,
        request: w
      };
      _o(function(c) {
        t(c), u();
      }, function(c) {
        r(c), u();
      }, l), w = null;
    }
    if ("onloadend" in w ? w.onloadend = f : w.onreadystatechange = function() {
      !w || w.readyState !== 4 || w.status === 0 && !(w.responseURL && w.responseURL.indexOf("file:") === 0) || setTimeout(f);
    }, w.onabort = function() {
      w && (r(new O("Request aborted", O.ECONNABORTED, e, w)), w = null);
    }, w.onerror = function() {
      r(new O("Network Error", O.ERR_NETWORK, e, w)), w = null;
    }, w.ontimeout = function() {
      let s = e.timeout ? "timeout of " + e.timeout + "ms exceeded" : "timeout exceeded";
      const l = e.transitional || Zt;
      e.timeoutErrorMessage && (s = e.timeoutErrorMessage), r(new O(
        s,
        l.clarifyTimeoutError ? O.ETIMEDOUT : O.ECONNABORTED,
        e,
        w
      )), w = null;
    }, F.isStandardBrowserEnv) {
      const s = (e.withCredentials || To(p)) && e.xsrfCookieName && Eo.read(e.xsrfCookieName);
      s && n.set(e.xsrfHeaderName, s);
    }
    o === void 0 && n.setContentType(null), "setRequestHeader" in w && b.forEach(n.toJSON(), function(s, l) {
      w.setRequestHeader(l, s);
    }), b.isUndefined(e.withCredentials) || (w.withCredentials = !!e.withCredentials), i && i !== "json" && (w.responseType = e.responseType), typeof e.onDownloadProgress == "function" && w.addEventListener("progress", Nt(e.onDownloadProgress, !0)), typeof e.onUploadProgress == "function" && w.upload && w.upload.addEventListener("progress", Nt(e.onUploadProgress)), (e.cancelToken || e.signal) && (a = (s) => {
      w && (r(!s || s.type ? new ue(null, e, w) : s), w.abort(), w = null);
    }, e.cancelToken && e.cancelToken.subscribe(a), e.signal && (e.signal.aborted ? a() : e.signal.addEventListener("abort", a)));
    const d = Ao(p);
    if (d && F.protocols.indexOf(d) === -1) {
      r(new O("Unsupported protocol " + d + ":", O.ERR_BAD_REQUEST, e));
      return;
    }
    w.send(o || null);
  });
}, Ee = {
  http: eo,
  xhr: ko
};
b.forEach(Ee, (e, t) => {
  if (e) {
    try {
      Object.defineProperty(e, "name", { value: t });
    } catch (r) {
    }
    Object.defineProperty(e, "adapterName", { value: t });
  }
});
const rr = {
  getAdapter: (e) => {
    e = b.isArray(e) ? e : [e];
    const { length: t } = e;
    let r, o;
    for (let n = 0; n < t && (r = e[n], !(o = b.isString(r) ? Ee[r.toLowerCase()] : r)); n++)
      ;
    if (!o)
      throw o === !1 ? new O(
        `Adapter ${r} is not supported by the environment`,
        "ERR_NOT_SUPPORT"
      ) : new Error(
        b.hasOwnProp(Ee, r) ? `Adapter '${r}' is not available in the build` : `Unknown adapter '${r}'`
      );
    if (!b.isFunction(o))
      throw new TypeError("adapter is not a function");
    return o;
  },
  adapters: Ee
};
function Ve(e) {
  if (e.cancelToken && e.cancelToken.throwIfRequested(), e.signal && e.signal.aborted)
    throw new ue(null, e);
}
function Dt(e) {
  return Ve(e), e.headers = z.from(e.headers), e.data = He.call(
    e,
    e.transformRequest
  ), ["post", "put", "patch"].indexOf(e.method) !== -1 && e.headers.setContentType("application/x-www-form-urlencoded", !1), rr.getAdapter(e.adapter || at.adapter)(e).then(function(t) {
    return Ve(e), t.data = He.call(
      e,
      e.transformResponse,
      t
    ), t.headers = z.from(t.headers), t;
  }, function(t) {
    return er(t) || (Ve(e), t && t.response && (t.response.data = He.call(
      e,
      e.transformResponse,
      t.response
    ), t.response.headers = z.from(t.response.headers))), Promise.reject(t);
  });
}
const Pt = (e) => e instanceof z ? e.toJSON() : e;
function Q(e, t) {
  t = t || {};
  const r = {};
  function o(p, f, d) {
    return b.isPlainObject(p) && b.isPlainObject(f) ? b.merge.call({ caseless: d }, p, f) : b.isPlainObject(f) ? b.merge({}, f) : b.isArray(f) ? f.slice() : f;
  }
  function n(p, f, d) {
    if (b.isUndefined(f)) {
      if (!b.isUndefined(p))
        return o(void 0, p, d);
    } else
      return o(p, f, d);
  }
  function i(p, f) {
    if (!b.isUndefined(f))
      return o(void 0, f);
  }
  function a(p, f) {
    if (b.isUndefined(f)) {
      if (!b.isUndefined(p))
        return o(void 0, p);
    } else
      return o(void 0, f);
  }
  function u(p, f, d) {
    if (d in t)
      return o(p, f);
    if (d in e)
      return o(void 0, p);
  }
  const w = {
    url: i,
    method: i,
    data: i,
    baseURL: a,
    transformRequest: a,
    transformResponse: a,
    paramsSerializer: a,
    timeout: a,
    timeoutMessage: a,
    withCredentials: a,
    adapter: a,
    responseType: a,
    xsrfCookieName: a,
    xsrfHeaderName: a,
    onUploadProgress: a,
    onDownloadProgress: a,
    decompress: a,
    maxContentLength: a,
    maxBodyLength: a,
    beforeRedirect: a,
    transport: a,
    httpAgent: a,
    httpsAgent: a,
    cancelToken: a,
    socketPath: a,
    responseEncoding: a,
    validateStatus: u,
    headers: (p, f) => n(Pt(p), Pt(f), !0)
  };
  return b.forEach(Object.keys(Object.assign({}, e, t)), function(p) {
    const f = w[p] || n, d = f(e[p], t[p], p);
    b.isUndefined(d) && f !== u || (r[p] = d);
  }), r;
}
const or = "1.5.0", lt = {};
["object", "boolean", "number", "function", "string", "symbol"].forEach((e, t) => {
  lt[e] = function(r) {
    return typeof r === e || "a" + (t < 1 ? "n " : " ") + e;
  };
});
const jt = {};
lt.transitional = function(e, t, r) {
  function o(n, i) {
    return "[Axios v" + or + "] Transitional option '" + n + "'" + i + (r ? ". " + r : "");
  }
  return (n, i, a) => {
    if (e === !1)
      throw new O(
        o(i, " has been removed" + (t ? " in " + t : "")),
        O.ERR_DEPRECATED
      );
    return t && !jt[i] && (jt[i] = !0, console.warn(
      o(
        i,
        " has been deprecated since v" + t + " and will be removed in the near future"
      )
    )), e ? e(n, i, a) : !0;
  };
};
function Co(e, t, r) {
  if (typeof e != "object")
    throw new O("options must be an object", O.ERR_BAD_OPTION_VALUE);
  const o = Object.keys(e);
  let n = o.length;
  for (; n-- > 0; ) {
    const i = o[n], a = t[i];
    if (a) {
      const u = e[i], w = u === void 0 || a(u, i, e);
      if (w !== !0)
        throw new O("option " + i + " must be " + w, O.ERR_BAD_OPTION_VALUE);
      continue;
    }
    if (r !== !0)
      throw new O("Unknown option " + i, O.ERR_BAD_OPTION);
  }
}
const Qe = {
  assertOptions: Co,
  validators: lt
}, V = Qe.validators;
class Oe {
  constructor(t) {
    this.defaults = t, this.interceptors = {
      request: new Ct(),
      response: new Ct()
    };
  }
  /**
   * Dispatch a request
   *
   * @param {String|Object} configOrUrl The config specific for this request (merged with this.defaults)
   * @param {?Object} config
   *
   * @returns {Promise} The Promise to be fulfilled
   */
  request(t, r) {
    typeof t == "string" ? (r = r || {}, r.url = t) : r = t || {}, r = Q(this.defaults, r);
    const { transitional: o, paramsSerializer: n, headers: i } = r;
    o !== void 0 && Qe.assertOptions(o, {
      silentJSONParsing: V.transitional(V.boolean),
      forcedJSONParsing: V.transitional(V.boolean),
      clarifyTimeoutError: V.transitional(V.boolean)
    }, !1), n != null && (b.isFunction(n) ? r.paramsSerializer = {
      serialize: n
    } : Qe.assertOptions(n, {
      encode: V.function,
      serialize: V.function
    }, !0)), r.method = (r.method || this.defaults.method || "get").toLowerCase();
    let a = i && b.merge(
      i.common,
      i[r.method]
    );
    i && b.forEach(
      ["delete", "get", "head", "post", "put", "patch", "common"],
      (c) => {
        delete i[c];
      }
    ), r.headers = z.concat(a, i);
    const u = [];
    let w = !0;
    this.interceptors.request.forEach(function(c) {
      typeof c.runWhen == "function" && c.runWhen(r) === !1 || (w = w && c.synchronous, u.unshift(c.fulfilled, c.rejected));
    });
    const p = [];
    this.interceptors.response.forEach(function(c) {
      p.push(c.fulfilled, c.rejected);
    });
    let f, d = 0, s;
    if (!w) {
      const c = [Dt.bind(this), void 0];
      for (c.unshift.apply(c, u), c.push.apply(c, p), s = c.length, f = Promise.resolve(r); d < s; )
        f = f.then(c[d++], c[d++]);
      return f;
    }
    s = u.length;
    let l = r;
    for (d = 0; d < s; ) {
      const c = u[d++], h = u[d++];
      try {
        l = c(l);
      } catch (m) {
        h.call(this, m);
        break;
      }
    }
    try {
      f = Dt.call(this, l);
    } catch (c) {
      return Promise.reject(c);
    }
    for (d = 0, s = p.length; d < s; )
      f = f.then(p[d++], p[d++]);
    return f;
  }
  getUri(t) {
    t = Q(this.defaults, t);
    const r = tr(t.baseURL, t.url);
    return Xt(r, t.params, t.paramsSerializer);
  }
}
b.forEach(["delete", "get", "head", "options"], function(e) {
  Oe.prototype[e] = function(t, r) {
    return this.request(Q(r || {}, {
      method: e,
      url: t,
      data: (r || {}).data
    }));
  };
});
b.forEach(["post", "put", "patch"], function(e) {
  function t(r) {
    return function(o, n, i) {
      return this.request(Q(i || {}, {
        method: e,
        headers: r ? {
          "Content-Type": "multipart/form-data"
        } : {},
        url: o,
        data: n
      }));
    };
  }
  Oe.prototype[e] = t(), Oe.prototype[e + "Form"] = t(!0);
});
const Se = Oe;
class ct {
  constructor(t) {
    if (typeof t != "function")
      throw new TypeError("executor must be a function.");
    let r;
    this.promise = new Promise(function(n) {
      r = n;
    });
    const o = this;
    this.promise.then((n) => {
      if (!o._listeners)
        return;
      let i = o._listeners.length;
      for (; i-- > 0; )
        o._listeners[i](n);
      o._listeners = null;
    }), this.promise.then = (n) => {
      let i;
      const a = new Promise((u) => {
        o.subscribe(u), i = u;
      }).then(n);
      return a.cancel = function() {
        o.unsubscribe(i);
      }, a;
    }, t(function(n, i, a) {
      o.reason || (o.reason = new ue(n, i, a), r(o.reason));
    });
  }
  /**
   * Throws a `CanceledError` if cancellation has been requested.
   */
  throwIfRequested() {
    if (this.reason)
      throw this.reason;
  }
  /**
   * Subscribe to the cancel signal
   */
  subscribe(t) {
    if (this.reason) {
      t(this.reason);
      return;
    }
    this._listeners ? this._listeners.push(t) : this._listeners = [t];
  }
  /**
   * Unsubscribe from the cancel signal
   */
  unsubscribe(t) {
    if (!this._listeners)
      return;
    const r = this._listeners.indexOf(t);
    r !== -1 && this._listeners.splice(r, 1);
  }
  /**
   * Returns an object that contains a new `CancelToken` and a function that, when called,
   * cancels the `CancelToken`.
   */
  static source() {
    let t;
    return {
      token: new ct(function(r) {
        t = r;
      }),
      cancel: t
    };
  }
}
const Lo = ct;
function No(e) {
  return function(t) {
    return e.apply(null, t);
  };
}
function Do(e) {
  return b.isObject(e) && e.isAxiosError === !0;
}
const et = {
  Continue: 100,
  SwitchingProtocols: 101,
  Processing: 102,
  EarlyHints: 103,
  Ok: 200,
  Created: 201,
  Accepted: 202,
  NonAuthoritativeInformation: 203,
  NoContent: 204,
  ResetContent: 205,
  PartialContent: 206,
  MultiStatus: 207,
  AlreadyReported: 208,
  ImUsed: 226,
  MultipleChoices: 300,
  MovedPermanently: 301,
  Found: 302,
  SeeOther: 303,
  NotModified: 304,
  UseProxy: 305,
  Unused: 306,
  TemporaryRedirect: 307,
  PermanentRedirect: 308,
  BadRequest: 400,
  Unauthorized: 401,
  PaymentRequired: 402,
  Forbidden: 403,
  NotFound: 404,
  MethodNotAllowed: 405,
  NotAcceptable: 406,
  ProxyAuthenticationRequired: 407,
  RequestTimeout: 408,
  Conflict: 409,
  Gone: 410,
  LengthRequired: 411,
  PreconditionFailed: 412,
  PayloadTooLarge: 413,
  UriTooLong: 414,
  UnsupportedMediaType: 415,
  RangeNotSatisfiable: 416,
  ExpectationFailed: 417,
  ImATeapot: 418,
  MisdirectedRequest: 421,
  UnprocessableEntity: 422,
  Locked: 423,
  FailedDependency: 424,
  TooEarly: 425,
  UpgradeRequired: 426,
  PreconditionRequired: 428,
  TooManyRequests: 429,
  RequestHeaderFieldsTooLarge: 431,
  UnavailableForLegalReasons: 451,
  InternalServerError: 500,
  NotImplemented: 501,
  BadGateway: 502,
  ServiceUnavailable: 503,
  GatewayTimeout: 504,
  HttpVersionNotSupported: 505,
  VariantAlsoNegotiates: 506,
  InsufficientStorage: 507,
  LoopDetected: 508,
  NotExtended: 510,
  NetworkAuthenticationRequired: 511
};
Object.entries(et).forEach(([e, t]) => {
  et[t] = e;
});
const Po = et;
function nr(e) {
  const t = new Se(e), r = Mt(Se.prototype.request, t);
  return b.extend(r, Se.prototype, t, { allOwnKeys: !0 }), b.extend(r, t, null, { allOwnKeys: !0 }), r.create = function(o) {
    return nr(Q(e, o));
  }, r;
}
const k = nr(at);
k.Axios = Se;
k.CanceledError = ue;
k.CancelToken = Lo;
k.isCancel = er;
k.VERSION = or;
k.toFormData = ke;
k.AxiosError = O;
k.Cancel = k.CanceledError;
k.all = function(e) {
  return Promise.all(e);
};
k.spread = No;
k.isAxiosError = Do;
k.mergeConfig = Q;
k.AxiosHeaders = z;
k.formToJSON = (e) => Qt(b.isHTMLForm(e) ? new FormData(e) : e);
k.getAdapter = rr.getAdapter;
k.HttpStatusCode = Po;
k.default = k;
const jo = k;
function We(e) {
  return e !== null && typeof e == "object";
}
function tt(e, t, r = ".", o) {
  if (!We(t))
    return tt(e, {}, r, o);
  const n = Object.assign({}, t);
  for (const i in e) {
    if (i === "__proto__" || i === "constructor")
      continue;
    const a = e[i];
    a != null && (o && o(n, i, a, r) || (Array.isArray(a) && Array.isArray(n[i]) ? n[i] = [...a, ...n[i]] : We(a) && We(n[i]) ? n[i] = tt(
      a,
      n[i],
      (r ? `${r}.` : "") + i.toString(),
      o
    ) : n[i] = a));
  }
  return n;
}
function Bo(e) {
  return (...t) => (
    // eslint-disable-next-line unicorn/no-array-reduce
    t.reduce((r, o) => tt(r, o, "", e), {})
  );
}
const Fo = Bo(), Uo = {
  baseURL: "/api",
  method: "post",
  timeout: 5e3,
  loading: {
    start: console.log.bind(null, "🚀 ~ http loading start"),
    end: console.log.bind(null, "🚀 ~ http loading end")
  },
  fail: console.error.bind(null, "🚀 ~ http loading error"),
  checkFn: (e) => e,
  headers: {
    getCommonHeaders: () => ({}),
    getAuthHeaders: () => ({})
  }
}, Mo = (e = {}) => {
  const t = Fo(e, Uo), { baseURL: r, lazyBaseURL: o, method: n, timeout: i, headers: a, checkFn: u, loading: w, fail: p } = t, f = jo.create({
    method: n,
    timeout: i
  });
  let d = 0;
  function s() {
    d++, w.start();
  }
  function l() {
    --d === 0 && w.end();
  }
  return f.interceptors.request.use(
    (c) => {
      var h;
      return !c.notLoading && s(), c.baseURL || (c.baseURL = (h = o == null ? void 0 : o()) != null ? h : r), c;
    },
    (c) => (p(c, c), Promise.reject(c))
  ), f.interceptors.response.use(
    (c) => {
      !c.config.notLoading && l();
      const h = c.data;
      try {
        return u(h);
      } catch (m) {
        p(m, c);
      }
    },
    (c) => {
      c && c.config && !c.config.notLoading && l(), p(c, c);
    }
  ), {
    get: void 0,
    post: void 0,
    delete: void 0,
    put: void 0,
    patch: void 0,
    head: void 0,
    purge: void 0,
    options: void 0,
    link: void 0,
    unlink: void 0,
    __instance__: f,
    __mixin__(c) {
      for (const h in c)
        if (Object.prototype.hasOwnProperty.call(c, h)) {
          const m = this[h] || {}, S = c[h];
          this[h] = R(R({}, m), S);
        }
      return this;
    },
    freeReq: (c) => f.request(J(R({}, c), {
      headers: R(R({}, a.getCommonHeaders(c)), c == null ? void 0 : c.headers)
    })),
    authReq: (c) => f.request(J(R({}, c), {
      headers: R(R(R({}, a.getCommonHeaders(c)), a.getAuthHeaders(c)), c == null ? void 0 : c.headers)
    }))
  };
};
var qo = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function Io(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var rt = { exports: {} };
(function(e, t) {
  (function(r, o) {
    var n = "1.0.37", i = "", a = "?", u = "function", w = "undefined", p = "object", f = "string", d = "major", s = "model", l = "name", c = "type", h = "vendor", m = "version", S = "architecture", I = "console", v = "mobile", _ = "tablet", L = "smarttv", Y = "wearable", Le = "embedded", Ne = 500, fe = "Amazon", te = "Apple", ut = "ASUS", ft = "BlackBerry", W = "Browser", pe = "Chrome", sr = "Edge", de = "Firefox", he = "Google", pt = "Huawei", De = "LG", Pe = "Microsoft", dt = "Motorola", be = "Opera", we = "Samsung", ht = "Sharp", me = "Sony", je = "Xiaomi", Be = "Zebra", bt = "Facebook", wt = "Chromium OS", mt = "Mac OS", ar = function(E, A) {
      var y = {};
      for (var x in E)
        A[x] && A[x].length % 2 === 0 ? y[x] = A[x].concat(E[x]) : y[x] = E[x];
      return y;
    }, ge = function(E) {
      for (var A = {}, y = 0; y < E.length; y++)
        A[E[y].toUpperCase()] = E[y];
      return A;
    }, gt = function(E, A) {
      return typeof E === f ? re(A).indexOf(re(E)) !== -1 : !1;
    }, re = function(E) {
      return E.toLowerCase();
    }, lr = function(E) {
      return typeof E === f ? E.replace(/[^\d\.]/g, i).split(".")[0] : o;
    }, Fe = function(E, A) {
      if (typeof E === f)
        return E = E.replace(/^\s\s*/, i), typeof A === w ? E : E.substring(0, Ne);
    }, oe = function(E, A) {
      for (var y = 0, x, H, U, T, g, M; y < A.length && !g; ) {
        var Me = A[y], _t = A[y + 1];
        for (x = H = 0; x < Me.length && !g && Me[x]; )
          if (g = Me[x++].exec(E), g)
            for (U = 0; U < _t.length; U++)
              M = g[++H], T = _t[U], typeof T === p && T.length > 0 ? T.length === 2 ? typeof T[1] == u ? this[T[0]] = T[1].call(this, M) : this[T[0]] = T[1] : T.length === 3 ? typeof T[1] === u && !(T[1].exec && T[1].test) ? this[T[0]] = M ? T[1].call(this, M, T[2]) : o : this[T[0]] = M ? M.replace(T[1], T[2]) : o : T.length === 4 && (this[T[0]] = M ? T[3].call(this, M.replace(T[1], T[2])) : o) : this[T] = M || o;
        y += 2;
      }
    }, Ue = function(E, A) {
      for (var y in A)
        if (typeof A[y] === p && A[y].length > 0) {
          for (var x = 0; x < A[y].length; x++)
            if (gt(A[y][x], E))
              return y === a ? o : y;
        } else if (gt(A[y], E))
          return y === a ? o : y;
      return E;
    }, cr = {
      "1.0": "/8",
      "1.2": "/1",
      "1.3": "/3",
      "2.0": "/412",
      "2.0.2": "/416",
      "2.0.3": "/417",
      "2.0.4": "/419",
      "?": "/"
    }, yt = {
      ME: "4.90",
      "NT 3.11": "NT3.51",
      "NT 4.0": "NT4.0",
      2e3: "NT 5.0",
      XP: ["NT 5.1", "NT 5.2"],
      Vista: "NT 6.0",
      7: "NT 6.1",
      8: "NT 6.2",
      "8.1": "NT 6.3",
      10: ["NT 6.4", "NT 10.0"],
      RT: "ARM"
    }, vt = {
      browser: [
        [
          /\b(?:crmo|crios)\/([\w\.]+)/i
          // Chrome for Android/iOS
        ],
        [m, [l, "Chrome"]],
        [
          /edg(?:e|ios|a)?\/([\w\.]+)/i
          // Microsoft Edge
        ],
        [m, [l, "Edge"]],
        [
          // Presto based
          /(opera mini)\/([-\w\.]+)/i,
          // Opera Mini
          /(opera [mobiletab]{3,6})\b.+version\/([-\w\.]+)/i,
          // Opera Mobi/Tablet
          /(opera)(?:.+version\/|[\/ ]+)([\w\.]+)/i
          // Opera
        ],
        [l, m],
        [
          /opios[\/ ]+([\w\.]+)/i
          // Opera mini on iphone >= 8.0
        ],
        [m, [l, be + " Mini"]],
        [
          /\bopr\/([\w\.]+)/i
          // Opera Webkit
        ],
        [m, [l, be]],
        [
          // Mixed
          /\bb[ai]*d(?:uhd|[ub]*[aekoprswx]{5,6})[\/ ]?([\w\.]+)/i
          // Baidu
        ],
        [m, [l, "Baidu"]],
        [
          /(kindle)\/([\w\.]+)/i,
          // Kindle
          /(lunascape|maxthon|netfront|jasmine|blazer)[\/ ]?([\w\.]*)/i,
          // Lunascape/Maxthon/Netfront/Jasmine/Blazer
          // Trident based
          /(avant|iemobile|slim)\s?(?:browser)?[\/ ]?([\w\.]*)/i,
          // Avant/IEMobile/SlimBrowser
          /(?:ms|\()(ie) ([\w\.]+)/i,
          // Internet Explorer
          // Webkit/KHTML based                                               // Flock/RockMelt/Midori/Epiphany/Silk/Skyfire/Bolt/Iron/Iridium/PhantomJS/Bowser/QupZilla/Falkon
          /(flock|rockmelt|midori|epiphany|silk|skyfire|bolt|iron|vivaldi|iridium|phantomjs|bowser|quark|qupzilla|falkon|rekonq|puffin|brave|whale(?!.+naver)|qqbrowserlite|qq|duckduckgo)\/([-\w\.]+)/i,
          // Rekonq/Puffin/Brave/Whale/QQBrowserLite/QQ, aka ShouQ
          /(heytap|ovi)browser\/([\d\.]+)/i,
          // Heytap/Ovi
          /(weibo)__([\d\.]+)/i
          // Weibo
        ],
        [l, m],
        [
          /(?:\buc? ?browser|(?:juc.+)ucweb)[\/ ]?([\w\.]+)/i
          // UCBrowser
        ],
        [m, [l, "UC" + W]],
        [
          /microm.+\bqbcore\/([\w\.]+)/i,
          // WeChat Desktop for Windows Built-in Browser
          /\bqbcore\/([\w\.]+).+microm/i,
          /micromessenger\/([\w\.]+)/i
          // WeChat
        ],
        [m, [l, "WeChat"]],
        [
          /konqueror\/([\w\.]+)/i
          // Konqueror
        ],
        [m, [l, "Konqueror"]],
        [
          /trident.+rv[: ]([\w\.]{1,9})\b.+like gecko/i
          // IE11
        ],
        [m, [l, "IE"]],
        [
          /ya(?:search)?browser\/([\w\.]+)/i
          // Yandex
        ],
        [m, [l, "Yandex"]],
        [
          /slbrowser\/([\w\.]+)/i
          // Smart Lenovo Browser
        ],
        [m, [l, "Smart Lenovo " + W]],
        [
          /(avast|avg)\/([\w\.]+)/i
          // Avast/AVG Secure Browser
        ],
        [[l, /(.+)/, "$1 Secure " + W], m],
        [
          /\bfocus\/([\w\.]+)/i
          // Firefox Focus
        ],
        [m, [l, de + " Focus"]],
        [
          /\bopt\/([\w\.]+)/i
          // Opera Touch
        ],
        [m, [l, be + " Touch"]],
        [
          /coc_coc\w+\/([\w\.]+)/i
          // Coc Coc Browser
        ],
        [m, [l, "Coc Coc"]],
        [
          /dolfin\/([\w\.]+)/i
          // Dolphin
        ],
        [m, [l, "Dolphin"]],
        [
          /coast\/([\w\.]+)/i
          // Opera Coast
        ],
        [m, [l, be + " Coast"]],
        [
          /miuibrowser\/([\w\.]+)/i
          // MIUI Browser
        ],
        [m, [l, "MIUI " + W]],
        [
          /fxios\/([-\w\.]+)/i
          // Firefox for iOS
        ],
        [m, [l, de]],
        [
          /\bqihu|(qi?ho?o?|360)browser/i
          // 360
        ],
        [[l, "360 " + W]],
        [
          /(oculus|sailfish|huawei|vivo)browser\/([\w\.]+)/i
        ],
        [[l, /(.+)/, "$1 " + W], m],
        [
          // Oculus/Sailfish/HuaweiBrowser/VivoBrowser
          /samsungbrowser\/([\w\.]+)/i
          // Samsung Internet
        ],
        [m, [l, we + " Internet"]],
        [
          /(comodo_dragon)\/([\w\.]+)/i
          // Comodo Dragon
        ],
        [[l, /_/g, " "], m],
        [
          /metasr[\/ ]?([\d\.]+)/i
          // Sogou Explorer
        ],
        [m, [l, "Sogou Explorer"]],
        [
          /(sogou)mo\w+\/([\d\.]+)/i
          // Sogou Mobile
        ],
        [[l, "Sogou Mobile"], m],
        [
          /(electron)\/([\w\.]+) safari/i,
          // Electron-based App
          /(tesla)(?: qtcarbrowser|\/(20\d\d\.[-\w\.]+))/i,
          // Tesla
          /m?(qqbrowser|2345Explorer)[\/ ]?([\w\.]+)/i
          // QQBrowser/2345 Browser
        ],
        [l, m],
        [
          /(lbbrowser)/i,
          // LieBao Browser
          /\[(linkedin)app\]/i
          // LinkedIn App for iOS & Android
        ],
        [l],
        [
          // WebView
          /((?:fban\/fbios|fb_iab\/fb4a)(?!.+fbav)|;fbav\/([\w\.]+);)/i
          // Facebook App for iOS & Android
        ],
        [[l, bt], m],
        [
          /(Klarna)\/([\w\.]+)/i,
          // Klarna Shopping Browser for iOS & Android
          /(kakao(?:talk|story))[\/ ]([\w\.]+)/i,
          // Kakao App
          /(naver)\(.*?(\d+\.[\w\.]+).*\)/i,
          // Naver InApp
          /safari (line)\/([\w\.]+)/i,
          // Line App for iOS
          /\b(line)\/([\w\.]+)\/iab/i,
          // Line App for Android
          /(alipay)client\/([\w\.]+)/i,
          // Alipay
          /(chromium|instagram|snapchat)[\/ ]([-\w\.]+)/i
          // Chromium/Instagram/Snapchat
        ],
        [l, m],
        [
          /\bgsa\/([\w\.]+) .*safari\//i
          // Google Search Appliance on iOS
        ],
        [m, [l, "GSA"]],
        [
          /musical_ly(?:.+app_?version\/|_)([\w\.]+)/i
          // TikTok
        ],
        [m, [l, "TikTok"]],
        [
          /headlesschrome(?:\/([\w\.]+)| )/i
          // Chrome Headless
        ],
        [m, [l, pe + " Headless"]],
        [
          / wv\).+(chrome)\/([\w\.]+)/i
          // Chrome WebView
        ],
        [[l, pe + " WebView"], m],
        [
          /droid.+ version\/([\w\.]+)\b.+(?:mobile safari|safari)/i
          // Android Browser
        ],
        [m, [l, "Android " + W]],
        [
          /(chrome|omniweb|arora|[tizenoka]{5} ?browser)\/v?([\w\.]+)/i
          // Chrome/OmniWeb/Arora/Tizen/Nokia
        ],
        [l, m],
        [
          /version\/([\w\.\,]+) .*mobile\/\w+ (safari)/i
          // Mobile Safari
        ],
        [m, [l, "Mobile Safari"]],
        [
          /version\/([\w(\.|\,)]+) .*(mobile ?safari|safari)/i
          // Safari & Safari Mobile
        ],
        [m, l],
        [
          /webkit.+?(mobile ?safari|safari)(\/[\w\.]+)/i
          // Safari < 3.0
        ],
        [l, [m, Ue, cr]],
        [
          /(webkit|khtml)\/([\w\.]+)/i
        ],
        [l, m],
        [
          // Gecko based
          /(navigator|netscape\d?)\/([-\w\.]+)/i
          // Netscape
        ],
        [[l, "Netscape"], m],
        [
          /mobile vr; rv:([\w\.]+)\).+firefox/i
          // Firefox Reality
        ],
        [m, [l, de + " Reality"]],
        [
          /ekiohf.+(flow)\/([\w\.]+)/i,
          // Flow
          /(swiftfox)/i,
          // Swiftfox
          /(icedragon|iceweasel|camino|chimera|fennec|maemo browser|minimo|conkeror|klar)[\/ ]?([\w\.\+]+)/i,
          // IceDragon/Iceweasel/Camino/Chimera/Fennec/Maemo/Minimo/Conkeror/Klar
          /(seamonkey|k-meleon|icecat|iceape|firebird|phoenix|palemoon|basilisk|waterfox)\/([-\w\.]+)$/i,
          // Firefox/SeaMonkey/K-Meleon/IceCat/IceApe/Firebird/Phoenix
          /(firefox)\/([\w\.]+)/i,
          // Other Firefox-based
          /(mozilla)\/([\w\.]+) .+rv\:.+gecko\/\d+/i,
          // Mozilla
          // Other
          /(polaris|lynx|dillo|icab|doris|amaya|w3m|netsurf|sleipnir|obigo|mosaic|(?:go|ice|up)[\. ]?browser)[-\/ ]?v?([\w\.]+)/i,
          // Polaris/Lynx/Dillo/iCab/Doris/Amaya/w3m/NetSurf/Sleipnir/Obigo/Mosaic/Go/ICE/UP.Browser
          /(links) \(([\w\.]+)/i,
          // Links
          /panasonic;(viera)/i
          // Panasonic Viera
        ],
        [l, m],
        [
          /(cobalt)\/([\w\.]+)/i
          // Cobalt
        ],
        [l, [m, /master.|lts./, ""]]
      ],
      cpu: [
        [
          /(?:(amd|x(?:(?:86|64)[-_])?|wow|win)64)[;\)]/i
          // AMD64 (x64)
        ],
        [[S, "amd64"]],
        [
          /(ia32(?=;))/i
          // IA32 (quicktime)
        ],
        [[S, re]],
        [
          /((?:i[346]|x)86)[;\)]/i
          // IA32 (x86)
        ],
        [[S, "ia32"]],
        [
          /\b(aarch64|arm(v?8e?l?|_?64))\b/i
          // ARM64
        ],
        [[S, "arm64"]],
        [
          /\b(arm(?:v[67])?ht?n?[fl]p?)\b/i
          // ARMHF
        ],
        [[S, "armhf"]],
        [
          // PocketPC mistakenly identified as PowerPC
          /windows (ce|mobile); ppc;/i
        ],
        [[S, "arm"]],
        [
          /((?:ppc|powerpc)(?:64)?)(?: mac|;|\))/i
          // PowerPC
        ],
        [[S, /ower/, i, re]],
        [
          /(sun4\w)[;\)]/i
          // SPARC
        ],
        [[S, "sparc"]],
        [
          /((?:avr32|ia64(?=;))|68k(?=\))|\barm(?=v(?:[1-7]|[5-7]1)l?|;|eabi)|(?=atmel )avr|(?:irix|mips|sparc)(?:64)?\b|pa-risc)/i
          // IA64, 68K, ARM/64, AVR/32, IRIX/64, MIPS/64, SPARC/64, PA-RISC
        ],
        [[S, re]]
      ],
      device: [
        [
          //////////////////////////
          // MOBILES & TABLETS
          /////////////////////////
          // Samsung
          /\b(sch-i[89]0\d|shw-m380s|sm-[ptx]\w{2,4}|gt-[pn]\d{2,4}|sgh-t8[56]9|nexus 10)/i
        ],
        [s, [h, we], [c, _]],
        [
          /\b((?:s[cgp]h|gt|sm)-\w+|sc[g-]?[\d]+a?|galaxy nexus)/i,
          /samsung[- ]([-\w]+)/i,
          /sec-(sgh\w+)/i
        ],
        [s, [h, we], [c, v]],
        [
          // Apple
          /(?:\/|\()(ip(?:hone|od)[\w, ]*)(?:\/|;)/i
          // iPod/iPhone
        ],
        [s, [h, te], [c, v]],
        [
          /\((ipad);[-\w\),; ]+apple/i,
          // iPad
          /applecoremedia\/[\w\.]+ \((ipad)/i,
          /\b(ipad)\d\d?,\d\d?[;\]].+ios/i
        ],
        [s, [h, te], [c, _]],
        [
          /(macintosh);/i
        ],
        [s, [h, te]],
        [
          // Sharp
          /\b(sh-?[altvz]?\d\d[a-ekm]?)/i
        ],
        [s, [h, ht], [c, v]],
        [
          // Huawei
          /\b((?:ag[rs][23]?|bah2?|sht?|btv)-a?[lw]\d{2})\b(?!.+d\/s)/i
        ],
        [s, [h, pt], [c, _]],
        [
          /(?:huawei|honor)([-\w ]+)[;\)]/i,
          /\b(nexus 6p|\w{2,4}e?-[atu]?[ln][\dx][012359c][adn]?)\b(?!.+d\/s)/i
        ],
        [s, [h, pt], [c, v]],
        [
          // Xiaomi
          /\b(poco[\w ]+|m2\d{3}j\d\d[a-z]{2})(?: bui|\))/i,
          // Xiaomi POCO
          /\b; (\w+) build\/hm\1/i,
          // Xiaomi Hongmi 'numeric' models
          /\b(hm[-_ ]?note?[_ ]?(?:\d\w)?) bui/i,
          // Xiaomi Hongmi
          /\b(redmi[\-_ ]?(?:note|k)?[\w_ ]+)(?: bui|\))/i,
          // Xiaomi Redmi
          /oid[^\)]+; (m?[12][0-389][01]\w{3,6}[c-y])( bui|; wv|\))/i,
          // Xiaomi Redmi 'numeric' models
          /\b(mi[-_ ]?(?:a\d|one|one[_ ]plus|note lte|max|cc)?[_ ]?(?:\d?\w?)[_ ]?(?:plus|se|lite)?)(?: bui|\))/i
          // Xiaomi Mi
        ],
        [[s, /_/g, " "], [h, je], [c, v]],
        [
          /oid[^\)]+; (2\d{4}(283|rpbf)[cgl])( bui|\))/i,
          // Redmi Pad
          /\b(mi[-_ ]?(?:pad)(?:[\w_ ]+))(?: bui|\))/i
          // Mi Pad tablets
        ],
        [[s, /_/g, " "], [h, je], [c, _]],
        [
          // OPPO
          /; (\w+) bui.+ oppo/i,
          /\b(cph[12]\d{3}|p(?:af|c[al]|d\w|e[ar])[mt]\d0|x9007|a101op)\b/i
        ],
        [s, [h, "OPPO"], [c, v]],
        [
          // Vivo
          /vivo (\w+)(?: bui|\))/i,
          /\b(v[12]\d{3}\w?[at])(?: bui|;)/i
        ],
        [s, [h, "Vivo"], [c, v]],
        [
          // Realme
          /\b(rmx[1-3]\d{3})(?: bui|;|\))/i
        ],
        [s, [h, "Realme"], [c, v]],
        [
          // Motorola
          /\b(milestone|droid(?:[2-4x]| (?:bionic|x2|pro|razr))?:?( 4g)?)\b[\w ]+build\//i,
          /\bmot(?:orola)?[- ](\w*)/i,
          /((?:moto[\w\(\) ]+|xt\d{3,4}|nexus 6)(?= bui|\)))/i
        ],
        [s, [h, dt], [c, v]],
        [
          /\b(mz60\d|xoom[2 ]{0,2}) build\//i
        ],
        [s, [h, dt], [c, _]],
        [
          // LG
          /((?=lg)?[vl]k\-?\d{3}) bui| 3\.[-\w; ]{10}lg?-([06cv9]{3,4})/i
        ],
        [s, [h, De], [c, _]],
        [
          /(lm(?:-?f100[nv]?|-[\w\.]+)(?= bui|\))|nexus [45])/i,
          /\blg[-e;\/ ]+((?!browser|netcast|android tv)\w+)/i,
          /\blg-?([\d\w]+) bui/i
        ],
        [s, [h, De], [c, v]],
        [
          // Lenovo
          /(ideatab[-\w ]+)/i,
          /lenovo ?(s[56]000[-\w]+|tab(?:[\w ]+)|yt[-\d\w]{6}|tb[-\d\w]{6})/i
        ],
        [s, [h, "Lenovo"], [c, _]],
        [
          // Nokia
          /(?:maemo|nokia).*(n900|lumia \d+)/i,
          /nokia[-_ ]?([-\w\.]*)/i
        ],
        [[s, /_/g, " "], [h, "Nokia"], [c, v]],
        [
          // Google
          /(pixel c)\b/i
          // Google Pixel C
        ],
        [s, [h, he], [c, _]],
        [
          /droid.+; (pixel[\daxl ]{0,6})(?: bui|\))/i
          // Google Pixel
        ],
        [s, [h, he], [c, v]],
        [
          // Sony
          /droid.+ (a?\d[0-2]{2}so|[c-g]\d{4}|so[-gl]\w+|xq-a\w[4-7][12])(?= bui|\).+chrome\/(?![1-6]{0,1}\d\.))/i
        ],
        [s, [h, me], [c, v]],
        [
          /sony tablet [ps]/i,
          /\b(?:sony)?sgp\w+(?: bui|\))/i
        ],
        [[s, "Xperia Tablet"], [h, me], [c, _]],
        [
          // OnePlus
          / (kb2005|in20[12]5|be20[12][59])\b/i,
          /(?:one)?(?:plus)? (a\d0\d\d)(?: b|\))/i
        ],
        [s, [h, "OnePlus"], [c, v]],
        [
          // Amazon
          /(alexa)webm/i,
          /(kf[a-z]{2}wi|aeo[c-r]{2})( bui|\))/i,
          // Kindle Fire without Silk / Echo Show
          /(kf[a-z]+)( bui|\)).+silk\//i
          // Kindle Fire HD
        ],
        [s, [h, fe], [c, _]],
        [
          /((?:sd|kf)[0349hijorstuw]+)( bui|\)).+silk\//i
          // Fire Phone
        ],
        [[s, /(.+)/g, "Fire Phone $1"], [h, fe], [c, v]],
        [
          // BlackBerry
          /(playbook);[-\w\),; ]+(rim)/i
          // BlackBerry PlayBook
        ],
        [s, h, [c, _]],
        [
          /\b((?:bb[a-f]|st[hv])100-\d)/i,
          /\(bb10; (\w+)/i
          // BlackBerry 10
        ],
        [s, [h, ft], [c, v]],
        [
          // Asus
          /(?:\b|asus_)(transfo[prime ]{4,10} \w+|eeepc|slider \w+|nexus 7|padfone|p00[cj])/i
        ],
        [s, [h, ut], [c, _]],
        [
          / (z[bes]6[027][012][km][ls]|zenfone \d\w?)\b/i
        ],
        [s, [h, ut], [c, v]],
        [
          // HTC
          /(nexus 9)/i
          // HTC Nexus 9
        ],
        [s, [h, "HTC"], [c, _]],
        [
          /(htc)[-;_ ]{1,2}([\w ]+(?=\)| bui)|\w+)/i,
          // HTC
          // ZTE
          /(zte)[- ]([\w ]+?)(?: bui|\/|\))/i,
          /(alcatel|geeksphone|nexian|panasonic(?!(?:;|\.))|sony(?!-bra))[-_ ]?([-\w]*)/i
          // Alcatel/GeeksPhone/Nexian/Panasonic/Sony
        ],
        [h, [s, /_/g, " "], [c, v]],
        [
          // Acer
          /droid.+; ([ab][1-7]-?[0178a]\d\d?)/i
        ],
        [s, [h, "Acer"], [c, _]],
        [
          // Meizu
          /droid.+; (m[1-5] note) bui/i,
          /\bmz-([-\w]{2,})/i
        ],
        [s, [h, "Meizu"], [c, v]],
        [
          // Ulefone
          /; ((?:power )?armor(?:[\w ]{0,8}))(?: bui|\))/i
        ],
        [s, [h, "Ulefone"], [c, v]],
        [
          // MIXED
          /(blackberry|benq|palm(?=\-)|sonyericsson|acer|asus|dell|meizu|motorola|polytron|infinix|tecno)[-_ ]?([-\w]*)/i,
          // BlackBerry/BenQ/Palm/Sony-Ericsson/Acer/Asus/Dell/Meizu/Motorola/Polytron
          /(hp) ([\w ]+\w)/i,
          // HP iPAQ
          /(asus)-?(\w+)/i,
          // Asus
          /(microsoft); (lumia[\w ]+)/i,
          // Microsoft Lumia
          /(lenovo)[-_ ]?([-\w]+)/i,
          // Lenovo
          /(jolla)/i,
          // Jolla
          /(oppo) ?([\w ]+) bui/i
          // OPPO
        ],
        [h, s, [c, v]],
        [
          /(kobo)\s(ereader|touch)/i,
          // Kobo
          /(archos) (gamepad2?)/i,
          // Archos
          /(hp).+(touchpad(?!.+tablet)|tablet)/i,
          // HP TouchPad
          /(kindle)\/([\w\.]+)/i,
          // Kindle
          /(nook)[\w ]+build\/(\w+)/i,
          // Nook
          /(dell) (strea[kpr\d ]*[\dko])/i,
          // Dell Streak
          /(le[- ]+pan)[- ]+(\w{1,9}) bui/i,
          // Le Pan Tablets
          /(trinity)[- ]*(t\d{3}) bui/i,
          // Trinity Tablets
          /(gigaset)[- ]+(q\w{1,9}) bui/i,
          // Gigaset Tablets
          /(vodafone) ([\w ]+)(?:\)| bui)/i
          // Vodafone
        ],
        [h, s, [c, _]],
        [
          /(surface duo)/i
          // Surface Duo
        ],
        [s, [h, Pe], [c, _]],
        [
          /droid [\d\.]+; (fp\du?)(?: b|\))/i
          // Fairphone
        ],
        [s, [h, "Fairphone"], [c, v]],
        [
          /(u304aa)/i
          // AT&T
        ],
        [s, [h, "AT&T"], [c, v]],
        [
          /\bsie-(\w*)/i
          // Siemens
        ],
        [s, [h, "Siemens"], [c, v]],
        [
          /\b(rct\w+) b/i
          // RCA Tablets
        ],
        [s, [h, "RCA"], [c, _]],
        [
          /\b(venue[\d ]{2,7}) b/i
          // Dell Venue Tablets
        ],
        [s, [h, "Dell"], [c, _]],
        [
          /\b(q(?:mv|ta)\w+) b/i
          // Verizon Tablet
        ],
        [s, [h, "Verizon"], [c, _]],
        [
          /\b(?:barnes[& ]+noble |bn[rt])([\w\+ ]*) b/i
          // Barnes & Noble Tablet
        ],
        [s, [h, "Barnes & Noble"], [c, _]],
        [
          /\b(tm\d{3}\w+) b/i
        ],
        [s, [h, "NuVision"], [c, _]],
        [
          /\b(k88) b/i
          // ZTE K Series Tablet
        ],
        [s, [h, "ZTE"], [c, _]],
        [
          /\b(nx\d{3}j) b/i
          // ZTE Nubia
        ],
        [s, [h, "ZTE"], [c, v]],
        [
          /\b(gen\d{3}) b.+49h/i
          // Swiss GEN Mobile
        ],
        [s, [h, "Swiss"], [c, v]],
        [
          /\b(zur\d{3}) b/i
          // Swiss ZUR Tablet
        ],
        [s, [h, "Swiss"], [c, _]],
        [
          /\b((zeki)?tb.*\b) b/i
          // Zeki Tablets
        ],
        [s, [h, "Zeki"], [c, _]],
        [
          /\b([yr]\d{2}) b/i,
          /\b(dragon[- ]+touch |dt)(\w{5}) b/i
          // Dragon Touch Tablet
        ],
        [[h, "Dragon Touch"], s, [c, _]],
        [
          /\b(ns-?\w{0,9}) b/i
          // Insignia Tablets
        ],
        [s, [h, "Insignia"], [c, _]],
        [
          /\b((nxa|next)-?\w{0,9}) b/i
          // NextBook Tablets
        ],
        [s, [h, "NextBook"], [c, _]],
        [
          /\b(xtreme\_)?(v(1[045]|2[015]|[3469]0|7[05])) b/i
          // Voice Xtreme Phones
        ],
        [[h, "Voice"], s, [c, v]],
        [
          /\b(lvtel\-)?(v1[12]) b/i
          // LvTel Phones
        ],
        [[h, "LvTel"], s, [c, v]],
        [
          /\b(ph-1) /i
          // Essential PH-1
        ],
        [s, [h, "Essential"], [c, v]],
        [
          /\b(v(100md|700na|7011|917g).*\b) b/i
          // Envizen Tablets
        ],
        [s, [h, "Envizen"], [c, _]],
        [
          /\b(trio[-\w\. ]+) b/i
          // MachSpeed Tablets
        ],
        [s, [h, "MachSpeed"], [c, _]],
        [
          /\btu_(1491) b/i
          // Rotor Tablets
        ],
        [s, [h, "Rotor"], [c, _]],
        [
          /(shield[\w ]+) b/i
          // Nvidia Shield Tablets
        ],
        [s, [h, "Nvidia"], [c, _]],
        [
          /(sprint) (\w+)/i
          // Sprint Phones
        ],
        [h, s, [c, v]],
        [
          /(kin\.[onetw]{3})/i
          // Microsoft Kin
        ],
        [[s, /\./g, " "], [h, Pe], [c, v]],
        [
          /droid.+; (cc6666?|et5[16]|mc[239][23]x?|vc8[03]x?)\)/i
          // Zebra
        ],
        [s, [h, Be], [c, _]],
        [
          /droid.+; (ec30|ps20|tc[2-8]\d[kx])\)/i
        ],
        [s, [h, Be], [c, v]],
        [
          ///////////////////
          // SMARTTVS
          ///////////////////
          /smart-tv.+(samsung)/i
          // Samsung
        ],
        [h, [c, L]],
        [
          /hbbtv.+maple;(\d+)/i
        ],
        [[s, /^/, "SmartTV"], [h, we], [c, L]],
        [
          /(nux; netcast.+smarttv|lg (netcast\.tv-201\d|android tv))/i
          // LG SmartTV
        ],
        [[h, De], [c, L]],
        [
          /(apple) ?tv/i
          // Apple TV
        ],
        [h, [s, te + " TV"], [c, L]],
        [
          /crkey/i
          // Google Chromecast
        ],
        [[s, pe + "cast"], [h, he], [c, L]],
        [
          /droid.+aft(\w+)( bui|\))/i
          // Fire TV
        ],
        [s, [h, fe], [c, L]],
        [
          /\(dtv[\);].+(aquos)/i,
          /(aquos-tv[\w ]+)\)/i
          // Sharp
        ],
        [s, [h, ht], [c, L]],
        [
          /(bravia[\w ]+)( bui|\))/i
          // Sony
        ],
        [s, [h, me], [c, L]],
        [
          /(mitv-\w{5}) bui/i
          // Xiaomi
        ],
        [s, [h, je], [c, L]],
        [
          /Hbbtv.*(technisat) (.*);/i
          // TechniSAT
        ],
        [h, s, [c, L]],
        [
          /\b(roku)[\dx]*[\)\/]((?:dvp-)?[\d\.]*)/i,
          // Roku
          /hbbtv\/\d+\.\d+\.\d+ +\([\w\+ ]*; *([\w\d][^;]*);([^;]*)/i
          // HbbTV devices
        ],
        [[h, Fe], [s, Fe], [c, L]],
        [
          /\b(android tv|smart[- ]?tv|opera tv|tv; rv:)\b/i
          // SmartTV from Unidentified Vendors
        ],
        [[c, L]],
        [
          ///////////////////
          // CONSOLES
          ///////////////////
          /(ouya)/i,
          // Ouya
          /(nintendo) ([wids3utch]+)/i
          // Nintendo
        ],
        [h, s, [c, I]],
        [
          /droid.+; (shield) bui/i
          // Nvidia
        ],
        [s, [h, "Nvidia"], [c, I]],
        [
          /(playstation [345portablevi]+)/i
          // Playstation
        ],
        [s, [h, me], [c, I]],
        [
          /\b(xbox(?: one)?(?!; xbox))[\); ]/i
          // Microsoft Xbox
        ],
        [s, [h, Pe], [c, I]],
        [
          ///////////////////
          // WEARABLES
          ///////////////////
          /((pebble))app/i
          // Pebble
        ],
        [h, s, [c, Y]],
        [
          /(watch)(?: ?os[,\/]|\d,\d\/)[\d\.]+/i
          // Apple Watch
        ],
        [s, [h, te], [c, Y]],
        [
          /droid.+; (glass) \d/i
          // Google Glass
        ],
        [s, [h, he], [c, Y]],
        [
          /droid.+; (wt63?0{2,3})\)/i
        ],
        [s, [h, Be], [c, Y]],
        [
          /(quest( 2| pro)?)/i
          // Oculus Quest
        ],
        [s, [h, bt], [c, Y]],
        [
          ///////////////////
          // EMBEDDED
          ///////////////////
          /(tesla)(?: qtcarbrowser|\/[-\w\.]+)/i
          // Tesla
        ],
        [h, [c, Le]],
        [
          /(aeobc)\b/i
          // Echo Dot
        ],
        [s, [h, fe], [c, Le]],
        [
          ////////////////////
          // MIXED (GENERIC)
          ///////////////////
          /droid .+?; ([^;]+?)(?: bui|; wv\)|\) applew).+? mobile safari/i
          // Android Phones from Unidentified Vendors
        ],
        [s, [c, v]],
        [
          /droid .+?; ([^;]+?)(?: bui|\) applew).+?(?! mobile) safari/i
          // Android Tablets from Unidentified Vendors
        ],
        [s, [c, _]],
        [
          /\b((tablet|tab)[;\/]|focus\/\d(?!.+mobile))/i
          // Unidentifiable Tablet
        ],
        [[c, _]],
        [
          /(phone|mobile(?:[;\/]| [ \w\/\.]*safari)|pda(?=.+windows ce))/i
          // Unidentifiable Mobile
        ],
        [[c, v]],
        [
          /(android[-\w\. ]{0,9});.+buil/i
          // Generic Android Device
        ],
        [s, [h, "Generic"]]
      ],
      engine: [
        [
          /windows.+ edge\/([\w\.]+)/i
          // EdgeHTML
        ],
        [m, [l, sr + "HTML"]],
        [
          /webkit\/537\.36.+chrome\/(?!27)([\w\.]+)/i
          // Blink
        ],
        [m, [l, "Blink"]],
        [
          /(presto)\/([\w\.]+)/i,
          // Presto
          /(webkit|trident|netfront|netsurf|amaya|lynx|w3m|goanna)\/([\w\.]+)/i,
          // WebKit/Trident/NetFront/NetSurf/Amaya/Lynx/w3m/Goanna
          /ekioh(flow)\/([\w\.]+)/i,
          // Flow
          /(khtml|tasman|links)[\/ ]\(?([\w\.]+)/i,
          // KHTML/Tasman/Links
          /(icab)[\/ ]([23]\.[\d\.]+)/i,
          // iCab
          /\b(libweb)/i
        ],
        [l, m],
        [
          /rv\:([\w\.]{1,9})\b.+(gecko)/i
          // Gecko
        ],
        [m, l]
      ],
      os: [
        [
          // Windows
          /microsoft (windows) (vista|xp)/i
          // Windows (iTunes)
        ],
        [l, m],
        [
          /(windows (?:phone(?: os)?|mobile))[\/ ]?([\d\.\w ]*)/i
          // Windows Phone
        ],
        [l, [m, Ue, yt]],
        [
          /windows nt 6\.2; (arm)/i,
          // Windows RT
          /windows[\/ ]?([ntce\d\. ]+\w)(?!.+xbox)/i,
          /(?:win(?=3|9|n)|win 9x )([nt\d\.]+)/i
        ],
        [[m, Ue, yt], [l, "Windows"]],
        [
          // iOS/macOS
          /ip[honead]{2,4}\b(?:.*os ([\w]+) like mac|; opera)/i,
          // iOS
          /(?:ios;fbsv\/|iphone.+ios[\/ ])([\d\.]+)/i,
          /cfnetwork\/.+darwin/i
        ],
        [[m, /_/g, "."], [l, "iOS"]],
        [
          /(mac os x) ?([\w\. ]*)/i,
          /(macintosh|mac_powerpc\b)(?!.+haiku)/i
          // Mac OS
        ],
        [[l, mt], [m, /_/g, "."]],
        [
          // Mobile OSes
          /droid ([\w\.]+)\b.+(android[- ]x86|harmonyos)/i
          // Android-x86/HarmonyOS
        ],
        [m, l],
        [
          // Android/WebOS/QNX/Bada/RIM/Maemo/MeeGo/Sailfish OS
          /(android|webos|qnx|bada|rim tablet os|maemo|meego|sailfish)[-\/ ]?([\w\.]*)/i,
          /(blackberry)\w*\/([\w\.]*)/i,
          // Blackberry
          /(tizen|kaios)[\/ ]([\w\.]+)/i,
          // Tizen/KaiOS
          /\((series40);/i
          // Series 40
        ],
        [l, m],
        [
          /\(bb(10);/i
          // BlackBerry 10
        ],
        [m, [l, ft]],
        [
          /(?:symbian ?os|symbos|s60(?=;)|series60)[-\/ ]?([\w\.]*)/i
          // Symbian
        ],
        [m, [l, "Symbian"]],
        [
          /mozilla\/[\d\.]+ \((?:mobile|tablet|tv|mobile; [\w ]+); rv:.+ gecko\/([\w\.]+)/i
          // Firefox OS
        ],
        [m, [l, de + " OS"]],
        [
          /web0s;.+rt(tv)/i,
          /\b(?:hp)?wos(?:browser)?\/([\w\.]+)/i
          // WebOS
        ],
        [m, [l, "webOS"]],
        [
          /watch(?: ?os[,\/]|\d,\d\/)([\d\.]+)/i
          // watchOS
        ],
        [m, [l, "watchOS"]],
        [
          // Google Chromecast
          /crkey\/([\d\.]+)/i
          // Google Chromecast
        ],
        [m, [l, pe + "cast"]],
        [
          /(cros) [\w]+(?:\)| ([\w\.]+)\b)/i
          // Chromium OS
        ],
        [[l, wt], m],
        [
          // Smart TVs
          /panasonic;(viera)/i,
          // Panasonic Viera
          /(netrange)mmh/i,
          // Netrange
          /(nettv)\/(\d+\.[\w\.]+)/i,
          // NetTV
          // Console
          /(nintendo|playstation) ([wids345portablevuch]+)/i,
          // Nintendo/Playstation
          /(xbox); +xbox ([^\);]+)/i,
          // Microsoft Xbox (360, One, X, S, Series X, Series S)
          // Other
          /\b(joli|palm)\b ?(?:os)?\/?([\w\.]*)/i,
          // Joli/Palm
          /(mint)[\/\(\) ]?(\w*)/i,
          // Mint
          /(mageia|vectorlinux)[; ]/i,
          // Mageia/VectorLinux
          /([kxln]?ubuntu|debian|suse|opensuse|gentoo|arch(?= linux)|slackware|fedora|mandriva|centos|pclinuxos|red ?hat|zenwalk|linpus|raspbian|plan 9|minix|risc os|contiki|deepin|manjaro|elementary os|sabayon|linspire)(?: gnu\/linux)?(?: enterprise)?(?:[- ]linux)?(?:-gnu)?[-\/ ]?(?!chrom|package)([-\w\.]*)/i,
          // Ubuntu/Debian/SUSE/Gentoo/Arch/Slackware/Fedora/Mandriva/CentOS/PCLinuxOS/RedHat/Zenwalk/Linpus/Raspbian/Plan9/Minix/RISCOS/Contiki/Deepin/Manjaro/elementary/Sabayon/Linspire
          /(hurd|linux) ?([\w\.]*)/i,
          // Hurd/Linux
          /(gnu) ?([\w\.]*)/i,
          // GNU
          /\b([-frentopcghs]{0,5}bsd|dragonfly)[\/ ]?(?!amd|[ix346]{1,2}86)([\w\.]*)/i,
          // FreeBSD/NetBSD/OpenBSD/PC-BSD/GhostBSD/DragonFly
          /(haiku) (\w+)/i
          // Haiku
        ],
        [l, m],
        [
          /(sunos) ?([\w\.\d]*)/i
          // Solaris
        ],
        [[l, "Solaris"], m],
        [
          /((?:open)?solaris)[-\/ ]?([\w\.]*)/i,
          // Solaris
          /(aix) ((\d)(?=\.|\)| )[\w\.])*/i,
          // AIX
          /\b(beos|os\/2|amigaos|morphos|openvms|fuchsia|hp-ux|serenityos)/i,
          // BeOS/OS2/AmigaOS/MorphOS/OpenVMS/Fuchsia/HP-UX/SerenityOS
          /(unix) ?([\w\.]*)/i
          // UNIX
        ],
        [l, m]
      ]
    }, B = function(E, A) {
      if (typeof E === p && (A = E, E = o), !(this instanceof B))
        return new B(E, A).getResult();
      var y = typeof r !== w && r.navigator ? r.navigator : o, x = E || (y && y.userAgent ? y.userAgent : i), H = y && y.userAgentData ? y.userAgentData : o, U = A ? ar(vt, A) : vt, T = y && y.userAgent == x;
      return this.getBrowser = function() {
        var g = {};
        return g[l] = o, g[m] = o, oe.call(g, x, U.browser), g[d] = lr(g[m]), T && y && y.brave && typeof y.brave.isBrave == u && (g[l] = "Brave"), g;
      }, this.getCPU = function() {
        var g = {};
        return g[S] = o, oe.call(g, x, U.cpu), g;
      }, this.getDevice = function() {
        var g = {};
        return g[h] = o, g[s] = o, g[c] = o, oe.call(g, x, U.device), T && !g[c] && H && H.mobile && (g[c] = v), T && g[s] == "Macintosh" && y && typeof y.standalone !== w && y.maxTouchPoints && y.maxTouchPoints > 2 && (g[s] = "iPad", g[c] = _), g;
      }, this.getEngine = function() {
        var g = {};
        return g[l] = o, g[m] = o, oe.call(g, x, U.engine), g;
      }, this.getOS = function() {
        var g = {};
        return g[l] = o, g[m] = o, oe.call(g, x, U.os), T && !g[l] && H && H.platform != "Unknown" && (g[l] = H.platform.replace(/chrome os/i, wt).replace(/macos/i, mt)), g;
      }, this.getResult = function() {
        return {
          ua: this.getUA(),
          browser: this.getBrowser(),
          engine: this.getEngine(),
          os: this.getOS(),
          device: this.getDevice(),
          cpu: this.getCPU()
        };
      }, this.getUA = function() {
        return x;
      }, this.setUA = function(g) {
        return x = typeof g === f && g.length > Ne ? Fe(g, Ne) : g, this;
      }, this.setUA(x), this;
    };
    B.VERSION = n, B.BROWSER = ge([l, m, d]), B.CPU = ge([S]), B.DEVICE = ge([s, h, c, I, v, L, _, Y, Le]), B.ENGINE = B.OS = ge([l, m]), e.exports && (t = e.exports = B), t.UAParser = B;
    var $ = typeof r !== w && (r.jQuery || r.Zepto);
    if ($ && !$.ua) {
      var ye = new B();
      $.ua = ye.getResult(), $.ua.get = function() {
        return ye.getUA();
      }, $.ua.set = function(E) {
        ye.setUA(E);
        var A = ye.getResult();
        for (var y in A)
          $.ua[y] = A[y];
      };
    }
  })(typeof window == "object" ? window : qo);
})(rt, rt.exports);
var zo = rt.exports;
const Ho = /* @__PURE__ */ Io(zo), D = {
  silent: Number.NEGATIVE_INFINITY,
  fatal: 0,
  error: 0,
  warn: 1,
  log: 2,
  info: 3,
  success: 3,
  fail: 3,
  ready: 3,
  start: 3,
  box: 3,
  debug: 4,
  trace: 5,
  verbose: Number.POSITIVE_INFINITY
}, Bt = {
  // Silent
  silent: {
    level: -1
  },
  // Level 0
  fatal: {
    level: D.fatal
  },
  error: {
    level: D.error
  },
  // Level 1
  warn: {
    level: D.warn
  },
  // Level 2
  log: {
    level: D.log
  },
  // Level 3
  info: {
    level: D.info
  },
  success: {
    level: D.success
  },
  fail: {
    level: D.fail
  },
  ready: {
    level: D.info
  },
  start: {
    level: D.info
  },
  box: {
    level: D.info
  },
  // Level 4
  debug: {
    level: D.debug
  },
  // Level 5
  trace: {
    level: D.trace
  },
  // Verbose
  verbose: {
    level: D.verbose
  }
};
function Je(e) {
  return e !== null && typeof e == "object";
}
function ot(e, t, r = ".", o) {
  if (!Je(t))
    return ot(e, {}, r, o);
  const n = Object.assign({}, t);
  for (const i in e) {
    if (i === "__proto__" || i === "constructor")
      continue;
    const a = e[i];
    a != null && (o && o(n, i, a, r) || (Array.isArray(a) && Array.isArray(n[i]) ? n[i] = [...a, ...n[i]] : Je(a) && Je(n[i]) ? n[i] = ot(
      a,
      n[i],
      (r ? `${r}.` : "") + i.toString(),
      o
    ) : n[i] = a));
  }
  return n;
}
function Vo(e) {
  return (...t) => (
    // eslint-disable-next-line unicorn/no-array-reduce
    t.reduce((r, o) => ot(r, o, "", e), {})
  );
}
const Wo = Vo();
function Jo(e) {
  return Object.prototype.toString.call(e) === "[object Object]";
}
function Go(e) {
  return !(!Jo(e) || !e.message && !e.args || e.stack);
}
let Ge = !1;
const Ft = [];
class C {
  constructor(t = {}) {
    const r = t.types || Bt;
    this.options = Wo(
      J(R({}, t), {
        defaults: R({}, t.defaults),
        level: Ke(t.level, r),
        reporters: [...t.reporters || []]
      }),
      {
        types: Bt,
        throttle: 1e3,
        throttleMin: 5,
        formatOptions: {
          date: !0,
          colors: !1,
          compact: !0
        }
      }
    );
    for (const o in r) {
      const n = R(R({
        type: o
      }, this.options.defaults), r[o]);
      this[o] = this._wrapLogFn(n), this[o].raw = this._wrapLogFn(
        n,
        !0
      );
    }
    this.options.mockFn && this.mockTypes(), this._lastLog = {};
  }
  get level() {
    return this.options.level;
  }
  set level(t) {
    this.options.level = Ke(
      t,
      this.options.types,
      this.options.level
    );
  }
  prompt(t, r) {
    if (!this.options.prompt)
      throw new Error("prompt is not supported!");
    return this.options.prompt(t, r);
  }
  create(t) {
    const r = new C(R(R({}, this.options), t));
    return this._mockFn && r.mockTypes(this._mockFn), r;
  }
  withDefaults(t) {
    return this.create(J(R({}, this.options), {
      defaults: R(R({}, this.options.defaults), t)
    }));
  }
  withTag(t) {
    return this.withDefaults({
      tag: this.options.defaults.tag ? this.options.defaults.tag + ":" + t : t
    });
  }
  addReporter(t) {
    return this.options.reporters.push(t), this;
  }
  removeReporter(t) {
    if (t) {
      const r = this.options.reporters.indexOf(t);
      if (r >= 0)
        return this.options.reporters.splice(r, 1);
    } else
      this.options.reporters.splice(0);
    return this;
  }
  setReporters(t) {
    return this.options.reporters = Array.isArray(t) ? t : [t], this;
  }
  wrapAll() {
    this.wrapConsole(), this.wrapStd();
  }
  restoreAll() {
    this.restoreConsole(), this.restoreStd();
  }
  wrapConsole() {
    for (const t in this.options.types)
      console["__" + t] || (console["__" + t] = console[t]), console[t] = this[t].raw;
  }
  restoreConsole() {
    for (const t in this.options.types)
      console["__" + t] && (console[t] = console["__" + t], delete console["__" + t]);
  }
  wrapStd() {
    this._wrapStream(this.options.stdout, "log"), this._wrapStream(this.options.stderr, "log");
  }
  _wrapStream(t, r) {
    t && (t.__write || (t.__write = t.write), t.write = (o) => {
      this[r].raw(String(o).trim());
    });
  }
  restoreStd() {
    this._restoreStream(this.options.stdout), this._restoreStream(this.options.stderr);
  }
  _restoreStream(t) {
    t && t.__write && (t.write = t.__write, delete t.__write);
  }
  pauseLogs() {
    Ge = !0;
  }
  resumeLogs() {
    Ge = !1;
    const t = Ft.splice(0);
    for (const r of t)
      r[0]._logFn(r[1], r[2]);
  }
  mockTypes(t) {
    const r = t || this.options.mockFn;
    if (this._mockFn = r, typeof r == "function")
      for (const o in this.options.types)
        this[o] = r(o, this.options.types[o]) || this[o], this[o].raw = this[o];
  }
  _wrapLogFn(t, r) {
    return (...o) => {
      if (Ge) {
        Ft.push([this, t, o, r]);
        return;
      }
      return this._logFn(t, o, r);
    };
  }
  _logFn(t, r, o) {
    if ((t.level || 0) > this.level)
      return !1;
    const n = J(R({
      date: /* @__PURE__ */ new Date(),
      args: []
    }, t), {
      level: Ke(t.level, this.options.types)
    });
    !o && r.length === 1 && Go(r[0]) ? Object.assign(n, r[0]) : n.args = [...r], n.message && (n.args.unshift(n.message), delete n.message), n.additional && (Array.isArray(n.additional) || (n.additional = n.additional.split(`
`)), n.args.push(`
` + n.additional.join(`
`)), delete n.additional), n.type = typeof n.type == "string" ? n.type.toLowerCase() : "log", n.tag = typeof n.tag == "string" ? n.tag : "";
    const i = (u = !1) => {
      const w = (this._lastLog.count || 0) - this.options.throttleMin;
      if (this._lastLog.object && w > 0) {
        const p = [...this._lastLog.object.args];
        w > 1 && p.push(`(repeated ${w} times)`), this._log(J(R({}, this._lastLog.object), { args: p })), this._lastLog.count = 1;
      }
      u && (this._lastLog.object = n, this._log(n));
    };
    clearTimeout(this._lastLog.timeout);
    const a = this._lastLog.time && n.date ? n.date.getTime() - this._lastLog.time.getTime() : 0;
    if (this._lastLog.time = n.date, a < this.options.throttle)
      try {
        const u = JSON.stringify([
          n.type,
          n.tag,
          n.args
        ]), w = this._lastLog.serialized === u;
        if (this._lastLog.serialized = u, w && (this._lastLog.count = (this._lastLog.count || 0) + 1, this._lastLog.count > this.options.throttleMin)) {
          this._lastLog.timeout = setTimeout(
            i,
            this.options.throttle
          );
          return;
        }
      } catch (u) {
      }
    i(!0);
  }
  _log(t) {
    for (const r of this.options.reporters)
      r.log(t, {
        options: this.options
      });
  }
}
function Ke(e, t = {}, r = 3) {
  return e === void 0 ? r : typeof e == "number" ? e : t[e] && t[e].level !== void 0 ? t[e].level : r;
}
C.prototype.add = C.prototype.addReporter;
C.prototype.remove = C.prototype.removeReporter;
C.prototype.clear = C.prototype.removeReporter;
C.prototype.withScope = C.prototype.withTag;
C.prototype.mock = C.prototype.mockTypes;
C.prototype.pause = C.prototype.pauseLogs;
C.prototype.resume = C.prototype.resumeLogs;
function Ko(e = {}) {
  return new C(e);
}
class Yo {
  constructor(t) {
    this.options = R({}, t), this.defaultColor = "#7f8c8d", this.levelColorMap = {
      0: "#c0392b",
      // Red
      1: "#f39c12",
      // Yellow
      3: "#00BCD4"
      // Cyan
    }, this.typeColorMap = {
      success: "#2ecc71"
      // Green
    };
  }
  _getLogFn(t) {
    return t < 1 ? console.__error || console.error : t === 1 ? console.__warn || console.warn : console.__log || console.log;
  }
  log(t) {
    const r = this._getLogFn(t.level), o = t.type === "log" ? "" : t.type, n = t.tag || "", a = `
      background: ${this.typeColorMap[t.type] || this.levelColorMap[t.level] || this.defaultColor};
      border-radius: 0.5em;
      color: white;
      font-weight: bold;
      padding: 2px 0.5em;
    `, u = `%c${[n, o].filter(Boolean).join(":")}`;
    typeof t.args[0] == "string" ? r(
      `${u}%c ${t.args[0]}`,
      a,
      // Empty string as style resets to default console style
      "",
      ...t.args.slice(1)
    ) : r(u, a, ...t.args);
  }
}
function $o(e = {}) {
  return Ko(R({
    reporters: e.reporters || [new Yo({})],
    prompt(r, o = {}) {
      return o.type === "confirm" ? Promise.resolve(confirm(r)) : Promise.resolve(prompt(r));
    }
  }, e));
}
const Xo = $o();
var ae, X, P, le, Z, Te, ir;
class Qo {
  constructor(t) {
    G(this, Te);
    G(this, ae, "");
    G(this, X, "");
    G(this, P, void 0);
    G(this, le, void 0);
    G(this, Z, void 0);
    const {
      serverUrl: r,
      appname: o,
      appsecret: n,
      debug: i = !1,
      initDeviceId: a = !0
    } = t;
    K(this, P, Xo.create({
      level: i ? void 0 : -1
    }).withTag("YoungReporter")), a && this.setDeviceId(), N(this, P).info("init", t), K(this, le, Mo({
      lazyBaseURL: () => r,
      timeout: -1,
      loading: {
        start: () => N(this, P).info("...start req..."),
        end: () => N(this, P).info("...end req...")
      },
      checkFn: (u) => (N(this, P).success("response: ", u), u),
      fail: (u) => {
        N(this, P).error("request error: ", u);
      },
      headers: {
        getCommonHeaders: () => {
          const u = Math.floor(Date.now() / 1e3).toString(), w = ie(`${n}${u}`).toLowerCase();
          return N(this, P).log("t: ", u, "sign: ", w, "appname: ", o), {
            t: u,
            sign: ie(`${n}${u}`).toLowerCase(),
            appname: o
          };
        }
      }
    }));
  }
  /**
   * 配置设备标识
   * @param id 不传则默认使用 canvas 生成浏览器指纹，非浏览器环境中会报错
   */
  setDeviceId(t) {
    K(this, ae, t || yr());
  }
  /**
   * 设置用户标识
   * @param id 用户标识
   */
  login(t) {
    K(this, X, t);
  }
  /**
   * 清除用户标识
   */
  logout() {
    K(this, X, "");
  }
  /**
   * 单次上报
   * @param event_id 事件 id
   * @param args 其他参数对象
   */
  track(t, r = {}) {
    const o = Ot(this, Te, ir).call(this, r, "track");
    N(this, P).info("event_id: ", t, "track: ", o), N(this, le).authReq({
      url: "/api/report",
      data: R({
        event_id: t
      }, o)
    });
  }
  /**
   * 定时上报（单位 s）
   * @param fn 获取/设置上次上报时间
   * @param fn.get 获取
   * @param fn.set 设置
   * @param cbk 上报回调函数
   * @param timeGap 上报间隔时间
   */
  flush(t, r, o = 60) {
    N(this, Z) && clearInterval(N(this, Z));
    const n = () => {
      const i = t.get(), a = Math.floor(Date.now() / 1e3);
      i && a - i < o ? N(this, P).warn("flush report fail, time to short, real-gap: %ss, need-gap: %ss", a - i, o) : (t.set(a), r(), N(this, P).log("flush report", a));
    };
    n(), K(this, Z, setInterval(n, o / 6 * 1e3));
  }
}
ae = new WeakMap(), X = new WeakMap(), P = new WeakMap(), le = new WeakMap(), Z = new WeakMap(), Te = new WeakSet(), ir = function(t, r = "track") {
  const o = navigator.userAgent;
  return {
    "#type": r,
    "#device_id": N(this, ae),
    "#account_id": N(this, X),
    "#flush_time": Date.now(),
    "#ua": Ho(o),
    "#sdk_version": "0.2.0",
    properties: t
  };
};
export {
  Qo as default
};
