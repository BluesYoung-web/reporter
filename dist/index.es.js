var ir = Object.defineProperty, sr = Object.defineProperties;
var ar = Object.getOwnPropertyDescriptors;
var yt = Object.getOwnPropertySymbols;
var lr = Object.prototype.hasOwnProperty, cr = Object.prototype.propertyIsEnumerable;
var Pe = (e, t, r) => t in e ? ir(e, t, { enumerable: !0, configurable: !0, writable: !0, value: r }) : e[t] = r, R = (e, t) => {
  for (var r in t || (t = {}))
    lr.call(t, r) && Pe(e, r, t[r]);
  if (yt)
    for (var r of yt(t))
      cr.call(t, r) && Pe(e, r, t[r]);
  return e;
}, V = (e, t) => sr(e, ar(t));
var De = (e, t, r) => (Pe(e, typeof t != "symbol" ? t + "" : t, r), r), vt = (e, t, r) => {
  if (!t.has(e))
    throw TypeError("Cannot " + r);
};
var je = (e, t, r) => (vt(e, t, "read from private field"), r ? r.call(e) : t.get(e)), Be = (e, t, r) => {
  if (t.has(e))
    throw TypeError("Cannot add the same private member more than once");
  t instanceof WeakSet ? t.add(e) : t.set(e, r);
}, Ue = (e, t, r, o) => (vt(e, t, "write to private field"), o ? o.call(e, r) : t.set(e, r), r);
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
var me = {}, ur = {
  get exports() {
    return me;
  },
  set exports(e) {
    me = e;
  }
}, Je = {}, fr = {
  get exports() {
    return Je;
  },
  set exports(e) {
    Je = e;
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
  fr.exports = t;
})();
var Ge = {
  // UTF-8 encoding
  utf8: {
    // Convert a string to a byte array
    stringToBytes: function(e) {
      return Ge.bin.stringToBytes(unescape(encodeURIComponent(e)));
    },
    // Convert a byte array to a string
    bytesToString: function(e) {
      return decodeURIComponent(escape(Ge.bin.bytesToString(e)));
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
}, _t = Ge;
/*!
 * Determine if an object is a Buffer
 *
 * @author   Feross Aboukhadijeh <https://feross.org>
 * @license  MIT
 */
var pr = function(e) {
  return e != null && (Dt(e) || dr(e) || !!e._isBuffer);
};
function Dt(e) {
  return !!e.constructor && typeof e.constructor.isBuffer == "function" && e.constructor.isBuffer(e);
}
function dr(e) {
  return typeof e.readFloatLE == "function" && typeof e.slice == "function" && Dt(e.slice(0, 0));
}
(function() {
  var e = Je, t = _t.utf8, r = pr, o = _t.bin, n = function(i, a) {
    i.constructor == String ? a && a.encoding === "binary" ? i = o.stringToBytes(i) : i = t.stringToBytes(i) : r(i) ? i = Array.prototype.slice.call(i, 0) : !Array.isArray(i) && i.constructor !== Uint8Array && (i = i.toString());
    for (var f = e.bytesToWords(i), w = i.length * 8, p = 1732584193, u = -271733879, d = -1732584194, s = 271733878, l = 0; l < f.length; l++)
      f[l] = (f[l] << 8 | f[l] >>> 24) & 16711935 | (f[l] << 24 | f[l] >>> 8) & 4278255360;
    f[w >>> 5] |= 128 << w % 32, f[(w + 64 >>> 9 << 4) + 14] = w;
    for (var c = n._ff, h = n._gg, m = n._hh, S = n._ii, l = 0; l < f.length; l += 16) {
      var M = p, v = u, _ = d, L = s;
      p = c(p, u, d, s, f[l + 0], 7, -680876936), s = c(s, p, u, d, f[l + 1], 12, -389564586), d = c(d, s, p, u, f[l + 2], 17, 606105819), u = c(u, d, s, p, f[l + 3], 22, -1044525330), p = c(p, u, d, s, f[l + 4], 7, -176418897), s = c(s, p, u, d, f[l + 5], 12, 1200080426), d = c(d, s, p, u, f[l + 6], 17, -1473231341), u = c(u, d, s, p, f[l + 7], 22, -45705983), p = c(p, u, d, s, f[l + 8], 7, 1770035416), s = c(s, p, u, d, f[l + 9], 12, -1958414417), d = c(d, s, p, u, f[l + 10], 17, -42063), u = c(u, d, s, p, f[l + 11], 22, -1990404162), p = c(p, u, d, s, f[l + 12], 7, 1804603682), s = c(s, p, u, d, f[l + 13], 12, -40341101), d = c(d, s, p, u, f[l + 14], 17, -1502002290), u = c(u, d, s, p, f[l + 15], 22, 1236535329), p = h(p, u, d, s, f[l + 1], 5, -165796510), s = h(s, p, u, d, f[l + 6], 9, -1069501632), d = h(d, s, p, u, f[l + 11], 14, 643717713), u = h(u, d, s, p, f[l + 0], 20, -373897302), p = h(p, u, d, s, f[l + 5], 5, -701558691), s = h(s, p, u, d, f[l + 10], 9, 38016083), d = h(d, s, p, u, f[l + 15], 14, -660478335), u = h(u, d, s, p, f[l + 4], 20, -405537848), p = h(p, u, d, s, f[l + 9], 5, 568446438), s = h(s, p, u, d, f[l + 14], 9, -1019803690), d = h(d, s, p, u, f[l + 3], 14, -187363961), u = h(u, d, s, p, f[l + 8], 20, 1163531501), p = h(p, u, d, s, f[l + 13], 5, -1444681467), s = h(s, p, u, d, f[l + 2], 9, -51403784), d = h(d, s, p, u, f[l + 7], 14, 1735328473), u = h(u, d, s, p, f[l + 12], 20, -1926607734), p = m(p, u, d, s, f[l + 5], 4, -378558), s = m(s, p, u, d, f[l + 8], 11, -2022574463), d = m(d, s, p, u, f[l + 11], 16, 1839030562), u = m(u, d, s, p, f[l + 14], 23, -35309556), p = m(p, u, d, s, f[l + 1], 4, -1530992060), s = m(s, p, u, d, f[l + 4], 11, 1272893353), d = m(d, s, p, u, f[l + 7], 16, -155497632), u = m(u, d, s, p, f[l + 10], 23, -1094730640), p = m(p, u, d, s, f[l + 13], 4, 681279174), s = m(s, p, u, d, f[l + 0], 11, -358537222), d = m(d, s, p, u, f[l + 3], 16, -722521979), u = m(u, d, s, p, f[l + 6], 23, 76029189), p = m(p, u, d, s, f[l + 9], 4, -640364487), s = m(s, p, u, d, f[l + 12], 11, -421815835), d = m(d, s, p, u, f[l + 15], 16, 530742520), u = m(u, d, s, p, f[l + 2], 23, -995338651), p = S(p, u, d, s, f[l + 0], 6, -198630844), s = S(s, p, u, d, f[l + 7], 10, 1126891415), d = S(d, s, p, u, f[l + 14], 15, -1416354905), u = S(u, d, s, p, f[l + 5], 21, -57434055), p = S(p, u, d, s, f[l + 12], 6, 1700485571), s = S(s, p, u, d, f[l + 3], 10, -1894986606), d = S(d, s, p, u, f[l + 10], 15, -1051523), u = S(u, d, s, p, f[l + 1], 21, -2054922799), p = S(p, u, d, s, f[l + 8], 6, 1873313359), s = S(s, p, u, d, f[l + 15], 10, -30611744), d = S(d, s, p, u, f[l + 6], 15, -1560198380), u = S(u, d, s, p, f[l + 13], 21, 1309151649), p = S(p, u, d, s, f[l + 4], 6, -145523070), s = S(s, p, u, d, f[l + 11], 10, -1120210379), d = S(d, s, p, u, f[l + 2], 15, 718787259), u = S(u, d, s, p, f[l + 9], 21, -343485551), p = p + M >>> 0, u = u + v >>> 0, d = d + _ >>> 0, s = s + L >>> 0;
    }
    return e.endian([p, u, d, s]);
  };
  n._ff = function(i, a, f, w, p, u, d) {
    var s = i + (a & f | ~a & w) + (p >>> 0) + d;
    return (s << u | s >>> 32 - u) + a;
  }, n._gg = function(i, a, f, w, p, u, d) {
    var s = i + (a & w | f & ~w) + (p >>> 0) + d;
    return (s << u | s >>> 32 - u) + a;
  }, n._hh = function(i, a, f, w, p, u, d) {
    var s = i + (a ^ f ^ w) + (p >>> 0) + d;
    return (s << u | s >>> 32 - u) + a;
  }, n._ii = function(i, a, f, w, p, u, d) {
    var s = i + (f ^ (a | ~w)) + (p >>> 0) + d;
    return (s << u | s >>> 32 - u) + a;
  }, n._blocksize = 16, n._digestsize = 16, ur.exports = function(i, a) {
    if (i == null)
      throw new Error("Illegal argument " + i);
    var f = e.wordsToBytes(n(i, a));
    return a && a.asBytes ? f : a && a.asString ? o.bytesToString(f) : e.bytesToHex(f);
  };
})();
function hr() {
  try {
    const e = "bluesyoung_web@163.com <canvas> 1.0", t = document.createElement("canvas");
    t.setAttribute("width", "220"), t.setAttribute("height", "30");
    const r = t.getContext("2d");
    r.textBaseline = "top", r.font = "14px 'Arial'", r.textBaseline = "alphabetic", r.fillStyle = "#f60", r.fillRect(125, 1, 62, 20), r.fillStyle = "#069", r.fillText(e, 2, 15), r.fillStyle = "rgba(102, 204, 0, 0.7)", r.fillText(e, 4, 17);
    const o = t.toDataURL().split(",")[1], n = atob(o);
    let i = "";
    for (let a = 0; a < n.length; a++) {
      const f = n.charCodeAt(a);
      f <= 15 && (i += "0"), i += f.toString(16).toLocaleUpperCase();
    }
    return me(i).toUpperCase();
  } catch (e) {
    throw console.log("🚀 ~ getFingerprint ~ error:", e), new Error("getFingerprint error, your envrionment is not support");
  }
}
function jt(e, t) {
  return function() {
    return e.apply(t, arguments);
  };
}
const { toString: br } = Object.prototype, { getPrototypeOf: tt } = Object, ye = /* @__PURE__ */ ((e) => (t) => {
  const r = br.call(t);
  return e[r] || (e[r] = r.slice(8, -1).toLowerCase());
})(/* @__PURE__ */ Object.create(null)), F = (e) => (e = e.toLowerCase(), (t) => ye(t) === e), ve = (e) => (t) => typeof t === e, { isArray: Y } = Array, ee = ve("undefined");
function mr(e) {
  return e !== null && !ee(e) && e.constructor !== null && !ee(e.constructor) && P(e.constructor.isBuffer) && e.constructor.isBuffer(e);
}
const Bt = F("ArrayBuffer");
function wr(e) {
  let t;
  return typeof ArrayBuffer < "u" && ArrayBuffer.isView ? t = ArrayBuffer.isView(e) : t = e && e.buffer && Bt(e.buffer), t;
}
const gr = ve("string"), P = ve("function"), Ut = ve("number"), _e = (e) => e !== null && typeof e == "object", yr = (e) => e === !0 || e === !1, pe = (e) => {
  if (ye(e) !== "object")
    return !1;
  const t = tt(e);
  return (t === null || t === Object.prototype || Object.getPrototypeOf(t) === null) && !(Symbol.toStringTag in e) && !(Symbol.iterator in e);
}, vr = F("Date"), _r = F("File"), Er = F("Blob"), Sr = F("FileList"), Or = (e) => _e(e) && P(e.pipe), Tr = (e) => {
  let t;
  return e && (typeof FormData == "function" && e instanceof FormData || P(e.append) && ((t = ye(e)) === "formdata" || // detect form-data instance
  t === "object" && P(e.toString) && e.toString() === "[object FormData]"));
}, Ar = F("URLSearchParams"), xr = (e) => e.trim ? e.trim() : e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "");
function te(e, t, { allOwnKeys: r = !1 } = {}) {
  if (e === null || typeof e > "u")
    return;
  let o, n;
  if (typeof e != "object" && (e = [e]), Y(e))
    for (o = 0, n = e.length; o < n; o++)
      t.call(null, e[o], o, e);
  else {
    const i = r ? Object.getOwnPropertyNames(e) : Object.keys(e), a = i.length;
    let f;
    for (o = 0; o < a; o++)
      f = i[o], t.call(null, e[f], f, e);
  }
}
function Ft(e, t) {
  t = t.toLowerCase();
  const r = Object.keys(e);
  let o = r.length, n;
  for (; o-- > 0; )
    if (n = r[o], t === n.toLowerCase())
      return n;
  return null;
}
const Mt = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : global, qt = (e) => !ee(e) && e !== Mt;
function Ke() {
  const { caseless: e } = qt(this) && this || {}, t = {}, r = (o, n) => {
    const i = e && Ft(t, n) || n;
    pe(t[i]) && pe(o) ? t[i] = Ke(t[i], o) : pe(o) ? t[i] = Ke({}, o) : Y(o) ? t[i] = o.slice() : t[i] = o;
  };
  for (let o = 0, n = arguments.length; o < n; o++)
    arguments[o] && te(arguments[o], r);
  return t;
}
const Rr = (e, t, r, { allOwnKeys: o } = {}) => (te(t, (n, i) => {
  r && P(n) ? e[i] = jt(n, r) : e[i] = n;
}, { allOwnKeys: o }), e), kr = (e) => (e.charCodeAt(0) === 65279 && (e = e.slice(1)), e), Cr = (e, t, r, o) => {
  e.prototype = Object.create(t.prototype, o), e.prototype.constructor = e, Object.defineProperty(e, "super", {
    value: t.prototype
  }), r && Object.assign(e.prototype, r);
}, Lr = (e, t, r, o) => {
  let n, i, a;
  const f = {};
  if (t = t || {}, e == null)
    return t;
  do {
    for (n = Object.getOwnPropertyNames(e), i = n.length; i-- > 0; )
      a = n[i], (!o || o(a, e, t)) && !f[a] && (t[a] = e[a], f[a] = !0);
    e = r !== !1 && tt(e);
  } while (e && (!r || r(e, t)) && e !== Object.prototype);
  return t;
}, Nr = (e, t, r) => {
  e = String(e), (r === void 0 || r > e.length) && (r = e.length), r -= t.length;
  const o = e.indexOf(t, r);
  return o !== -1 && o === r;
}, Pr = (e) => {
  if (!e)
    return null;
  if (Y(e))
    return e;
  let t = e.length;
  if (!Ut(t))
    return null;
  const r = new Array(t);
  for (; t-- > 0; )
    r[t] = e[t];
  return r;
}, Dr = /* @__PURE__ */ ((e) => (t) => e && t instanceof e)(typeof Uint8Array < "u" && tt(Uint8Array)), jr = (e, t) => {
  const r = (e && e[Symbol.iterator]).call(e);
  let o;
  for (; (o = r.next()) && !o.done; ) {
    const n = o.value;
    t.call(e, n[0], n[1]);
  }
}, Br = (e, t) => {
  let r;
  const o = [];
  for (; (r = e.exec(t)) !== null; )
    o.push(r);
  return o;
}, Ur = F("HTMLFormElement"), Fr = (e) => e.toLowerCase().replace(
  /[-_\s]([a-z\d])(\w*)/g,
  function(t, r, o) {
    return r.toUpperCase() + o;
  }
), Et = (({ hasOwnProperty: e }) => (t, r) => e.call(t, r))(Object.prototype), Mr = F("RegExp"), It = (e, t) => {
  const r = Object.getOwnPropertyDescriptors(e), o = {};
  te(r, (n, i) => {
    let a;
    (a = t(n, i, e)) !== !1 && (o[i] = a || n);
  }), Object.defineProperties(e, o);
}, qr = (e) => {
  It(e, (t, r) => {
    if (P(e) && ["arguments", "caller", "callee"].indexOf(r) !== -1)
      return !1;
    const o = e[r];
    if (P(o)) {
      if (t.enumerable = !1, "writable" in t) {
        t.writable = !1;
        return;
      }
      t.set || (t.set = () => {
        throw Error("Can not rewrite read-only method '" + r + "'");
      });
    }
  });
}, Ir = (e, t) => {
  const r = {}, o = (n) => {
    n.forEach((i) => {
      r[i] = !0;
    });
  };
  return Y(e) ? o(e) : o(String(e).split(t)), r;
}, zr = () => {
}, Hr = (e, t) => (e = +e, Number.isFinite(e) ? e : t), Fe = "abcdefghijklmnopqrstuvwxyz", St = "0123456789", zt = {
  DIGIT: St,
  ALPHA: Fe,
  ALPHA_DIGIT: Fe + Fe.toUpperCase() + St
}, Vr = (e = 16, t = zt.ALPHA_DIGIT) => {
  let r = "";
  const { length: o } = t;
  for (; e--; )
    r += t[Math.random() * o | 0];
  return r;
};
function Wr(e) {
  return !!(e && P(e.append) && e[Symbol.toStringTag] === "FormData" && e[Symbol.iterator]);
}
const Jr = (e) => {
  const t = new Array(10), r = (o, n) => {
    if (_e(o)) {
      if (t.indexOf(o) >= 0)
        return;
      if (!("toJSON" in o)) {
        t[n] = o;
        const i = Y(o) ? [] : {};
        return te(o, (a, f) => {
          const w = r(a, n + 1);
          !ee(w) && (i[f] = w);
        }), t[n] = void 0, i;
      }
    }
    return o;
  };
  return r(e, 0);
}, Gr = F("AsyncFunction"), Kr = (e) => e && (_e(e) || P(e)) && P(e.then) && P(e.catch), b = {
  isArray: Y,
  isArrayBuffer: Bt,
  isBuffer: mr,
  isFormData: Tr,
  isArrayBufferView: wr,
  isString: gr,
  isNumber: Ut,
  isBoolean: yr,
  isObject: _e,
  isPlainObject: pe,
  isUndefined: ee,
  isDate: vr,
  isFile: _r,
  isBlob: Er,
  isRegExp: Mr,
  isFunction: P,
  isStream: Or,
  isURLSearchParams: Ar,
  isTypedArray: Dr,
  isFileList: Sr,
  forEach: te,
  merge: Ke,
  extend: Rr,
  trim: xr,
  stripBOM: kr,
  inherits: Cr,
  toFlatObject: Lr,
  kindOf: ye,
  kindOfTest: F,
  endsWith: Nr,
  toArray: Pr,
  forEachEntry: jr,
  matchAll: Br,
  isHTMLForm: Ur,
  hasOwnProperty: Et,
  hasOwnProp: Et,
  // an alias to avoid ESLint no-prototype-builtins detection
  reduceDescriptors: It,
  freezeMethods: qr,
  toObjectSet: Ir,
  toCamelCase: Fr,
  noop: zr,
  toFiniteNumber: Hr,
  findKey: Ft,
  global: Mt,
  isContextDefined: qt,
  ALPHABET: zt,
  generateString: Vr,
  isSpecCompliantForm: Wr,
  toJSONObject: Jr,
  isAsyncFn: Gr,
  isThenable: Kr
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
const Ht = O.prototype, Vt = {};
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
  Vt[e] = { value: e };
});
Object.defineProperties(O, Vt);
Object.defineProperty(Ht, "isAxiosError", { value: !0 });
O.from = (e, t, r, o, n, i) => {
  const a = Object.create(Ht);
  return b.toFlatObject(e, a, function(f) {
    return f !== Error.prototype;
  }, (f) => f !== "isAxiosError"), O.call(a, e.message, t, r, o, n), a.cause = e, a.name = e.name, i && Object.assign(a, i), a;
};
const Yr = null;
function Ye(e) {
  return b.isPlainObject(e) || b.isArray(e);
}
function Wt(e) {
  return b.endsWith(e, "[]") ? e.slice(0, -2) : e;
}
function Ot(e, t, r) {
  return e ? e.concat(t).map(function(o, n) {
    return o = Wt(o), !r && n ? "[" + o + "]" : o;
  }).join(r ? "." : "") : t;
}
function $r(e) {
  return b.isArray(e) && !e.some(Ye);
}
const Xr = b.toFlatObject(b, {}, null, function(e) {
  return /^is[A-Z]/.test(e);
});
function Ee(e, t, r) {
  if (!b.isObject(e))
    throw new TypeError("target must be an object");
  t = t || new FormData(), r = b.toFlatObject(r, {
    metaTokens: !0,
    dots: !1,
    indexes: !1
  }, !1, function(l, c) {
    return !b.isUndefined(c[l]);
  });
  const o = r.metaTokens, n = r.visitor || p, i = r.dots, a = r.indexes, f = (r.Blob || typeof Blob < "u" && Blob) && b.isSpecCompliantForm(t);
  if (!b.isFunction(n))
    throw new TypeError("visitor must be a function");
  function w(l) {
    if (l === null)
      return "";
    if (b.isDate(l))
      return l.toISOString();
    if (!f && b.isBlob(l))
      throw new O("Blob is not supported. Use a Buffer instead.");
    return b.isArrayBuffer(l) || b.isTypedArray(l) ? f && typeof Blob == "function" ? new Blob([l]) : Buffer.from(l) : l;
  }
  function p(l, c, h) {
    let m = l;
    if (l && !h && typeof l == "object") {
      if (b.endsWith(c, "{}"))
        c = o ? c : c.slice(0, -2), l = JSON.stringify(l);
      else if (b.isArray(l) && $r(l) || (b.isFileList(l) || b.endsWith(c, "[]")) && (m = b.toArray(l)))
        return c = Wt(c), m.forEach(function(S, M) {
          !(b.isUndefined(S) || S === null) && t.append(
            // eslint-disable-next-line no-nested-ternary
            a === !0 ? Ot([c], M, i) : a === null ? c : c + "[]",
            w(S)
          );
        }), !1;
    }
    return Ye(l) ? !0 : (t.append(Ot(h, c, i), w(l)), !1);
  }
  const u = [], d = Object.assign(Xr, {
    defaultVisitor: p,
    convertValue: w,
    isVisitable: Ye
  });
  function s(l, c) {
    if (!b.isUndefined(l)) {
      if (u.indexOf(l) !== -1)
        throw Error("Circular reference detected in " + c.join("."));
      u.push(l), b.forEach(l, function(h, m) {
        (!(b.isUndefined(h) || h === null) && n.call(
          t,
          h,
          b.isString(m) ? m.trim() : m,
          c,
          d
        )) === !0 && s(h, c ? c.concat(m) : [m]);
      }), u.pop();
    }
  }
  if (!b.isObject(e))
    throw new TypeError("data must be an object");
  return s(e), t;
}
function Tt(e) {
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
function rt(e, t) {
  this._pairs = [], e && Ee(e, this, t);
}
const Jt = rt.prototype;
Jt.append = function(e, t) {
  this._pairs.push([e, t]);
};
Jt.toString = function(e) {
  const t = e ? function(r) {
    return e.call(this, r, Tt);
  } : Tt;
  return this._pairs.map(function(r) {
    return t(r[0]) + "=" + t(r[1]);
  }, "").join("&");
};
function Zr(e) {
  return encodeURIComponent(e).replace(/%3A/gi, ":").replace(/%24/g, "$").replace(/%2C/gi, ",").replace(/%20/g, "+").replace(/%5B/gi, "[").replace(/%5D/gi, "]");
}
function Gt(e, t, r) {
  if (!t)
    return e;
  const o = r && r.encode || Zr, n = r && r.serialize;
  let i;
  if (n ? i = n(t, r) : i = b.isURLSearchParams(t) ? t.toString() : new rt(t, r).toString(o), i) {
    const a = e.indexOf("#");
    a !== -1 && (e = e.slice(0, a)), e += (e.indexOf("?") === -1 ? "?" : "&") + i;
  }
  return e;
}
class Qr {
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
const At = Qr, Kt = {
  silentJSONParsing: !0,
  forcedJSONParsing: !0,
  clarifyTimeoutError: !1
}, eo = typeof URLSearchParams < "u" ? URLSearchParams : rt, to = typeof FormData < "u" ? FormData : null, ro = typeof Blob < "u" ? Blob : null, oo = (() => {
  let e;
  return typeof navigator < "u" && ((e = navigator.product) === "ReactNative" || e === "NativeScript" || e === "NS") ? !1 : typeof window < "u" && typeof document < "u";
})(), no = typeof WorkerGlobalScope < "u" && // eslint-disable-next-line no-undef
self instanceof WorkerGlobalScope && typeof self.importScripts == "function", j = {
  isBrowser: !0,
  classes: {
    URLSearchParams: eo,
    FormData: to,
    Blob: ro
  },
  isStandardBrowserEnv: oo,
  isStandardBrowserWebWorkerEnv: no,
  protocols: ["http", "https", "file", "blob", "url", "data"]
};
function io(e, t) {
  return Ee(e, new j.classes.URLSearchParams(), Object.assign({
    visitor: function(r, o, n, i) {
      return j.isNode && b.isBuffer(r) ? (this.append(o, r.toString("base64")), !1) : i.defaultVisitor.apply(this, arguments);
    }
  }, t));
}
function so(e) {
  return b.matchAll(/\w+|\[(\w*)]/g, e).map((t) => t[0] === "[]" ? "" : t[1] || t[0]);
}
function ao(e) {
  const t = {}, r = Object.keys(e);
  let o;
  const n = r.length;
  let i;
  for (o = 0; o < n; o++)
    i = r[o], t[i] = e[i];
  return t;
}
function Yt(e) {
  function t(r, o, n, i) {
    let a = r[i++];
    const f = Number.isFinite(+a), w = i >= r.length;
    return a = !a && b.isArray(n) ? n.length : a, w ? (b.hasOwnProp(n, a) ? n[a] = [n[a], o] : n[a] = o, !f) : ((!n[a] || !b.isObject(n[a])) && (n[a] = []), t(r, o, n[a], i) && b.isArray(n[a]) && (n[a] = ao(n[a])), !f);
  }
  if (b.isFormData(e) && b.isFunction(e.entries)) {
    const r = {};
    return b.forEachEntry(e, (o, n) => {
      t(so(o), n, r, 0);
    }), r;
  }
  return null;
}
function lo(e, t, r) {
  if (b.isString(e))
    try {
      return (t || JSON.parse)(e), b.trim(e);
    } catch (o) {
      if (o.name !== "SyntaxError")
        throw o;
    }
  return (r || JSON.stringify)(e);
}
const ot = {
  transitional: Kt,
  adapter: j.isNode ? "http" : "xhr",
  transformRequest: [function(e, t) {
    const r = t.getContentType() || "", o = r.indexOf("application/json") > -1, n = b.isObject(e);
    if (n && b.isHTMLForm(e) && (e = new FormData(e)), b.isFormData(e))
      return o && o ? JSON.stringify(Yt(e)) : e;
    if (b.isArrayBuffer(e) || b.isBuffer(e) || b.isStream(e) || b.isFile(e) || b.isBlob(e))
      return e;
    if (b.isArrayBufferView(e))
      return e.buffer;
    if (b.isURLSearchParams(e))
      return t.setContentType("application/x-www-form-urlencoded;charset=utf-8", !1), e.toString();
    let i;
    if (n) {
      if (r.indexOf("application/x-www-form-urlencoded") > -1)
        return io(e, this.formSerializer).toString();
      if ((i = b.isFileList(e)) || r.indexOf("multipart/form-data") > -1) {
        const a = this.env && this.env.FormData;
        return Ee(
          i ? { "files[]": e } : e,
          a && new a(),
          this.formSerializer
        );
      }
    }
    return n || o ? (t.setContentType("application/json", !1), lo(e)) : e;
  }],
  transformResponse: [function(e) {
    const t = this.transitional || ot.transitional, r = t && t.forcedJSONParsing, o = this.responseType === "json";
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
    FormData: j.classes.FormData,
    Blob: j.classes.Blob
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
  ot.headers[e] = {};
});
const nt = ot, co = b.toObjectSet([
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
]), uo = (e) => {
  const t = {};
  let r, o, n;
  return e && e.split(`
`).forEach(function(i) {
    n = i.indexOf(":"), r = i.substring(0, n).trim().toLowerCase(), o = i.substring(n + 1).trim(), !(!r || t[r] && co[r]) && (r === "set-cookie" ? t[r] ? t[r].push(o) : t[r] = [o] : t[r] = t[r] ? t[r] + ", " + o : o);
  }), t;
}, xt = Symbol("internals");
function Q(e) {
  return e && String(e).trim().toLowerCase();
}
function de(e) {
  return e === !1 || e == null ? e : b.isArray(e) ? e.map(de) : String(e);
}
function fo(e) {
  const t = /* @__PURE__ */ Object.create(null), r = /([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;
  let o;
  for (; o = r.exec(e); )
    t[o[1]] = o[2];
  return t;
}
const po = (e) => /^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(e.trim());
function Me(e, t, r, o, n) {
  if (b.isFunction(o))
    return o.call(this, t, r);
  if (n && (t = r), !!b.isString(t)) {
    if (b.isString(o))
      return t.indexOf(o) !== -1;
    if (b.isRegExp(o))
      return o.test(t);
  }
}
function ho(e) {
  return e.trim().toLowerCase().replace(/([a-z\d])(\w*)/g, (t, r, o) => r.toUpperCase() + o);
}
function bo(e, t) {
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
class Se {
  constructor(t) {
    t && this.set(t);
  }
  set(t, r, o) {
    const n = this;
    function i(f, w, p) {
      const u = Q(w);
      if (!u)
        throw new Error("header name must be a non-empty string");
      const d = b.findKey(n, u);
      (!d || n[d] === void 0 || p === !0 || p === void 0 && n[d] !== !1) && (n[d || w] = de(f));
    }
    const a = (f, w) => b.forEach(f, (p, u) => i(p, u, w));
    return b.isPlainObject(t) || t instanceof this.constructor ? a(t, r) : b.isString(t) && (t = t.trim()) && !po(t) ? a(uo(t), r) : t != null && i(r, t, o), this;
  }
  get(t, r) {
    if (t = Q(t), t) {
      const o = b.findKey(this, t);
      if (o) {
        const n = this[o];
        if (!r)
          return n;
        if (r === !0)
          return fo(n);
        if (b.isFunction(r))
          return r.call(this, n, o);
        if (b.isRegExp(r))
          return r.exec(n);
        throw new TypeError("parser must be boolean|regexp|function");
      }
    }
  }
  has(t, r) {
    if (t = Q(t), t) {
      const o = b.findKey(this, t);
      return !!(o && this[o] !== void 0 && (!r || Me(this, this[o], o, r)));
    }
    return !1;
  }
  delete(t, r) {
    const o = this;
    let n = !1;
    function i(a) {
      if (a = Q(a), a) {
        const f = b.findKey(o, a);
        f && (!r || Me(o, o[f], f, r)) && (delete o[f], n = !0);
      }
    }
    return b.isArray(t) ? t.forEach(i) : i(t), n;
  }
  clear(t) {
    const r = Object.keys(this);
    let o = r.length, n = !1;
    for (; o--; ) {
      const i = r[o];
      (!t || Me(this, this[i], i, t, !0)) && (delete this[i], n = !0);
    }
    return n;
  }
  normalize(t) {
    const r = this, o = {};
    return b.forEach(this, (n, i) => {
      const a = b.findKey(o, i);
      if (a) {
        r[a] = de(n), delete r[i];
        return;
      }
      const f = t ? ho(i) : String(i).trim();
      f !== i && delete r[i], r[f] = de(n), o[f] = !0;
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
    const r = (this[xt] = this[xt] = {
      accessors: {}
    }).accessors, o = this.prototype;
    function n(i) {
      const a = Q(i);
      r[a] || (bo(o, i), r[a] = !0);
    }
    return b.isArray(t) ? t.forEach(n) : n(t), this;
  }
}
Se.accessor(["Content-Type", "Content-Length", "Accept", "Accept-Encoding", "User-Agent", "Authorization"]);
b.reduceDescriptors(Se.prototype, ({ value: e }, t) => {
  let r = t[0].toUpperCase() + t.slice(1);
  return {
    get: () => e,
    set(o) {
      this[r] = o;
    }
  };
});
b.freezeMethods(Se);
const q = Se;
function qe(e, t) {
  const r = this || nt, o = t || r, n = q.from(o.headers);
  let i = o.data;
  return b.forEach(e, function(a) {
    i = a.call(r, i, n.normalize(), t ? t.status : void 0);
  }), n.normalize(), i;
}
function $t(e) {
  return !!(e && e.__CANCEL__);
}
function re(e, t, r) {
  O.call(this, e != null ? e : "canceled", O.ERR_CANCELED, t, r), this.name = "CanceledError";
}
b.inherits(re, O, {
  __CANCEL__: !0
});
function mo(e, t, r) {
  const o = r.config.validateStatus;
  !r.status || !o || o(r.status) ? e(r) : t(new O(
    "Request failed with status code " + r.status,
    [O.ERR_BAD_REQUEST, O.ERR_BAD_RESPONSE][Math.floor(r.status / 100) - 4],
    r.config,
    r.request,
    r
  ));
}
const wo = j.isStandardBrowserEnv ? (
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
function go(e) {
  return /^([a-z][a-z\d+\-.]*:)?\/\//i.test(e);
}
function yo(e, t) {
  return t ? e.replace(/\/+$/, "") + "/" + t.replace(/^\/+/, "") : e;
}
function Xt(e, t) {
  return e && !go(t) ? yo(e, t) : t;
}
const vo = j.isStandardBrowserEnv ? (
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
function _o(e) {
  const t = /^([-+\w]{1,25})(:?\/\/|:)/.exec(e);
  return t && t[1] || "";
}
function Eo(e, t) {
  e = e || 10;
  const r = new Array(e), o = new Array(e);
  let n = 0, i = 0, a;
  return t = t !== void 0 ? t : 1e3, function(f) {
    const w = Date.now(), p = o[i];
    a || (a = w), r[n] = f, o[n] = w;
    let u = i, d = 0;
    for (; u !== n; )
      d += r[u++], u = u % e;
    if (n = (n + 1) % e, n === i && (i = (i + 1) % e), w - a < t)
      return;
    const s = p && w - p;
    return s ? Math.round(d * 1e3 / s) : void 0;
  };
}
function Rt(e, t) {
  let r = 0;
  const o = Eo(50, 250);
  return (n) => {
    const i = n.loaded, a = n.lengthComputable ? n.total : void 0, f = i - r, w = o(f), p = i <= a;
    r = i;
    const u = {
      loaded: i,
      total: a,
      progress: a ? i / a : void 0,
      bytes: f,
      rate: w || void 0,
      estimated: w && a && p ? (a - i) / w : void 0,
      event: n
    };
    u[t ? "download" : "upload"] = !0, e(u);
  };
}
const So = typeof XMLHttpRequest < "u", Oo = So && function(e) {
  return new Promise(function(t, r) {
    let o = e.data;
    const n = q.from(e.headers).normalize(), i = e.responseType;
    let a;
    function f() {
      e.cancelToken && e.cancelToken.unsubscribe(a), e.signal && e.signal.removeEventListener("abort", a);
    }
    b.isFormData(o) && (j.isStandardBrowserEnv || j.isStandardBrowserWebWorkerEnv ? n.setContentType(!1) : n.setContentType("multipart/form-data;", !1));
    let w = new XMLHttpRequest();
    if (e.auth) {
      const s = e.auth.username || "", l = e.auth.password ? unescape(encodeURIComponent(e.auth.password)) : "";
      n.set("Authorization", "Basic " + btoa(s + ":" + l));
    }
    const p = Xt(e.baseURL, e.url);
    w.open(e.method.toUpperCase(), Gt(p, e.params, e.paramsSerializer), !0), w.timeout = e.timeout;
    function u() {
      if (!w)
        return;
      const s = q.from(
        "getAllResponseHeaders" in w && w.getAllResponseHeaders()
      ), l = {
        data: !i || i === "text" || i === "json" ? w.responseText : w.response,
        status: w.status,
        statusText: w.statusText,
        headers: s,
        config: e,
        request: w
      };
      mo(function(c) {
        t(c), f();
      }, function(c) {
        r(c), f();
      }, l), w = null;
    }
    if ("onloadend" in w ? w.onloadend = u : w.onreadystatechange = function() {
      !w || w.readyState !== 4 || w.status === 0 && !(w.responseURL && w.responseURL.indexOf("file:") === 0) || setTimeout(u);
    }, w.onabort = function() {
      w && (r(new O("Request aborted", O.ECONNABORTED, e, w)), w = null);
    }, w.onerror = function() {
      r(new O("Network Error", O.ERR_NETWORK, e, w)), w = null;
    }, w.ontimeout = function() {
      let s = e.timeout ? "timeout of " + e.timeout + "ms exceeded" : "timeout exceeded";
      const l = e.transitional || Kt;
      e.timeoutErrorMessage && (s = e.timeoutErrorMessage), r(new O(
        s,
        l.clarifyTimeoutError ? O.ETIMEDOUT : O.ECONNABORTED,
        e,
        w
      )), w = null;
    }, j.isStandardBrowserEnv) {
      const s = (e.withCredentials || vo(p)) && e.xsrfCookieName && wo.read(e.xsrfCookieName);
      s && n.set(e.xsrfHeaderName, s);
    }
    o === void 0 && n.setContentType(null), "setRequestHeader" in w && b.forEach(n.toJSON(), function(s, l) {
      w.setRequestHeader(l, s);
    }), b.isUndefined(e.withCredentials) || (w.withCredentials = !!e.withCredentials), i && i !== "json" && (w.responseType = e.responseType), typeof e.onDownloadProgress == "function" && w.addEventListener("progress", Rt(e.onDownloadProgress, !0)), typeof e.onUploadProgress == "function" && w.upload && w.upload.addEventListener("progress", Rt(e.onUploadProgress)), (e.cancelToken || e.signal) && (a = (s) => {
      w && (r(!s || s.type ? new re(null, e, w) : s), w.abort(), w = null);
    }, e.cancelToken && e.cancelToken.subscribe(a), e.signal && (e.signal.aborted ? a() : e.signal.addEventListener("abort", a)));
    const d = _o(p);
    if (d && j.protocols.indexOf(d) === -1) {
      r(new O("Unsupported protocol " + d + ":", O.ERR_BAD_REQUEST, e));
      return;
    }
    w.send(o || null);
  });
}, he = {
  http: Yr,
  xhr: Oo
};
b.forEach(he, (e, t) => {
  if (e) {
    try {
      Object.defineProperty(e, "name", { value: t });
    } catch (r) {
    }
    Object.defineProperty(e, "adapterName", { value: t });
  }
});
const Zt = {
  getAdapter: (e) => {
    e = b.isArray(e) ? e : [e];
    const { length: t } = e;
    let r, o;
    for (let n = 0; n < t && (r = e[n], !(o = b.isString(r) ? he[r.toLowerCase()] : r)); n++)
      ;
    if (!o)
      throw o === !1 ? new O(
        `Adapter ${r} is not supported by the environment`,
        "ERR_NOT_SUPPORT"
      ) : new Error(
        b.hasOwnProp(he, r) ? `Adapter '${r}' is not available in the build` : `Unknown adapter '${r}'`
      );
    if (!b.isFunction(o))
      throw new TypeError("adapter is not a function");
    return o;
  },
  adapters: he
};
function Ie(e) {
  if (e.cancelToken && e.cancelToken.throwIfRequested(), e.signal && e.signal.aborted)
    throw new re(null, e);
}
function kt(e) {
  return Ie(e), e.headers = q.from(e.headers), e.data = qe.call(
    e,
    e.transformRequest
  ), ["post", "put", "patch"].indexOf(e.method) !== -1 && e.headers.setContentType("application/x-www-form-urlencoded", !1), Zt.getAdapter(e.adapter || nt.adapter)(e).then(function(t) {
    return Ie(e), t.data = qe.call(
      e,
      e.transformResponse,
      t
    ), t.headers = q.from(t.headers), t;
  }, function(t) {
    return $t(t) || (Ie(e), t && t.response && (t.response.data = qe.call(
      e,
      e.transformResponse,
      t.response
    ), t.response.headers = q.from(t.response.headers))), Promise.reject(t);
  });
}
const Ct = (e) => e instanceof q ? e.toJSON() : e;
function K(e, t) {
  t = t || {};
  const r = {};
  function o(p, u, d) {
    return b.isPlainObject(p) && b.isPlainObject(u) ? b.merge.call({ caseless: d }, p, u) : b.isPlainObject(u) ? b.merge({}, u) : b.isArray(u) ? u.slice() : u;
  }
  function n(p, u, d) {
    if (b.isUndefined(u)) {
      if (!b.isUndefined(p))
        return o(void 0, p, d);
    } else
      return o(p, u, d);
  }
  function i(p, u) {
    if (!b.isUndefined(u))
      return o(void 0, u);
  }
  function a(p, u) {
    if (b.isUndefined(u)) {
      if (!b.isUndefined(p))
        return o(void 0, p);
    } else
      return o(void 0, u);
  }
  function f(p, u, d) {
    if (d in t)
      return o(p, u);
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
    validateStatus: f,
    headers: (p, u) => n(Ct(p), Ct(u), !0)
  };
  return b.forEach(Object.keys(Object.assign({}, e, t)), function(p) {
    const u = w[p] || n, d = u(e[p], t[p], p);
    b.isUndefined(d) && u !== f || (r[p] = d);
  }), r;
}
const Qt = "1.5.0", it = {};
["object", "boolean", "number", "function", "string", "symbol"].forEach((e, t) => {
  it[e] = function(r) {
    return typeof r === e || "a" + (t < 1 ? "n " : " ") + e;
  };
});
const Lt = {};
it.transitional = function(e, t, r) {
  function o(n, i) {
    return "[Axios v" + Qt + "] Transitional option '" + n + "'" + i + (r ? ". " + r : "");
  }
  return (n, i, a) => {
    if (e === !1)
      throw new O(
        o(i, " has been removed" + (t ? " in " + t : "")),
        O.ERR_DEPRECATED
      );
    return t && !Lt[i] && (Lt[i] = !0, console.warn(
      o(
        i,
        " has been deprecated since v" + t + " and will be removed in the near future"
      )
    )), e ? e(n, i, a) : !0;
  };
};
function To(e, t, r) {
  if (typeof e != "object")
    throw new O("options must be an object", O.ERR_BAD_OPTION_VALUE);
  const o = Object.keys(e);
  let n = o.length;
  for (; n-- > 0; ) {
    const i = o[n], a = t[i];
    if (a) {
      const f = e[i], w = f === void 0 || a(f, i, e);
      if (w !== !0)
        throw new O("option " + i + " must be " + w, O.ERR_BAD_OPTION_VALUE);
      continue;
    }
    if (r !== !0)
      throw new O("Unknown option " + i, O.ERR_BAD_OPTION);
  }
}
const $e = {
  assertOptions: To,
  validators: it
}, z = $e.validators;
class we {
  constructor(t) {
    this.defaults = t, this.interceptors = {
      request: new At(),
      response: new At()
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
    typeof t == "string" ? (r = r || {}, r.url = t) : r = t || {}, r = K(this.defaults, r);
    const { transitional: o, paramsSerializer: n, headers: i } = r;
    o !== void 0 && $e.assertOptions(o, {
      silentJSONParsing: z.transitional(z.boolean),
      forcedJSONParsing: z.transitional(z.boolean),
      clarifyTimeoutError: z.transitional(z.boolean)
    }, !1), n != null && (b.isFunction(n) ? r.paramsSerializer = {
      serialize: n
    } : $e.assertOptions(n, {
      encode: z.function,
      serialize: z.function
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
    ), r.headers = q.concat(a, i);
    const f = [];
    let w = !0;
    this.interceptors.request.forEach(function(c) {
      typeof c.runWhen == "function" && c.runWhen(r) === !1 || (w = w && c.synchronous, f.unshift(c.fulfilled, c.rejected));
    });
    const p = [];
    this.interceptors.response.forEach(function(c) {
      p.push(c.fulfilled, c.rejected);
    });
    let u, d = 0, s;
    if (!w) {
      const c = [kt.bind(this), void 0];
      for (c.unshift.apply(c, f), c.push.apply(c, p), s = c.length, u = Promise.resolve(r); d < s; )
        u = u.then(c[d++], c[d++]);
      return u;
    }
    s = f.length;
    let l = r;
    for (d = 0; d < s; ) {
      const c = f[d++], h = f[d++];
      try {
        l = c(l);
      } catch (m) {
        h.call(this, m);
        break;
      }
    }
    try {
      u = kt.call(this, l);
    } catch (c) {
      return Promise.reject(c);
    }
    for (d = 0, s = p.length; d < s; )
      u = u.then(p[d++], p[d++]);
    return u;
  }
  getUri(t) {
    t = K(this.defaults, t);
    const r = Xt(t.baseURL, t.url);
    return Gt(r, t.params, t.paramsSerializer);
  }
}
b.forEach(["delete", "get", "head", "options"], function(e) {
  we.prototype[e] = function(t, r) {
    return this.request(K(r || {}, {
      method: e,
      url: t,
      data: (r || {}).data
    }));
  };
});
b.forEach(["post", "put", "patch"], function(e) {
  function t(r) {
    return function(o, n, i) {
      return this.request(K(i || {}, {
        method: e,
        headers: r ? {
          "Content-Type": "multipart/form-data"
        } : {},
        url: o,
        data: n
      }));
    };
  }
  we.prototype[e] = t(), we.prototype[e + "Form"] = t(!0);
});
const be = we;
class st {
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
      const a = new Promise((f) => {
        o.subscribe(f), i = f;
      }).then(n);
      return a.cancel = function() {
        o.unsubscribe(i);
      }, a;
    }, t(function(n, i, a) {
      o.reason || (o.reason = new re(n, i, a), r(o.reason));
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
      token: new st(function(r) {
        t = r;
      }),
      cancel: t
    };
  }
}
const Ao = st;
function xo(e) {
  return function(t) {
    return e.apply(null, t);
  };
}
function Ro(e) {
  return b.isObject(e) && e.isAxiosError === !0;
}
const Xe = {
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
Object.entries(Xe).forEach(([e, t]) => {
  Xe[t] = e;
});
const ko = Xe;
function er(e) {
  const t = new be(e), r = jt(be.prototype.request, t);
  return b.extend(r, be.prototype, t, { allOwnKeys: !0 }), b.extend(r, t, null, { allOwnKeys: !0 }), r.create = function(o) {
    return er(K(e, o));
  }, r;
}
const k = er(nt);
k.Axios = be;
k.CanceledError = re;
k.CancelToken = Ao;
k.isCancel = $t;
k.VERSION = Qt;
k.toFormData = Ee;
k.AxiosError = O;
k.Cancel = k.CanceledError;
k.all = function(e) {
  return Promise.all(e);
};
k.spread = xo;
k.isAxiosError = Ro;
k.mergeConfig = K;
k.AxiosHeaders = q;
k.formToJSON = (e) => Yt(b.isHTMLForm(e) ? new FormData(e) : e);
k.getAdapter = Zt.getAdapter;
k.HttpStatusCode = ko;
k.default = k;
const Co = k;
function ze(e) {
  return e !== null && typeof e == "object";
}
function Ze(e, t, r = ".", o) {
  if (!ze(t))
    return Ze(e, {}, r, o);
  const n = Object.assign({}, t);
  for (const i in e) {
    if (i === "__proto__" || i === "constructor")
      continue;
    const a = e[i];
    a != null && (o && o(n, i, a, r) || (Array.isArray(a) && Array.isArray(n[i]) ? n[i] = [...a, ...n[i]] : ze(a) && ze(n[i]) ? n[i] = Ze(
      a,
      n[i],
      (r ? `${r}.` : "") + i.toString(),
      o
    ) : n[i] = a));
  }
  return n;
}
function Lo(e) {
  return (...t) => (
    // eslint-disable-next-line unicorn/no-array-reduce
    t.reduce((r, o) => Ze(r, o, "", e), {})
  );
}
const No = Lo(), Po = {
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
}, Do = (e = {}) => {
  const t = No(e, Po), { baseURL: r, lazyBaseURL: o, method: n, timeout: i, headers: a, checkFn: f, loading: w, fail: p } = t, u = Co.create({
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
  return u.interceptors.request.use(
    (c) => {
      var h;
      return !c.notLoading && s(), c.baseURL || (c.baseURL = (h = o == null ? void 0 : o()) != null ? h : r), c;
    },
    (c) => (p(c, c), Promise.reject(c))
  ), u.interceptors.response.use(
    (c) => {
      !c.config.notLoading && l();
      const h = c.data;
      try {
        return f(h);
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
    __instance__: u,
    __mixin__(c) {
      for (const h in c)
        if (Object.prototype.hasOwnProperty.call(c, h)) {
          const m = this[h] || {}, S = c[h];
          this[h] = R(R({}, m), S);
        }
      return this;
    },
    freeReq: (c) => u.request(V(R({}, c), {
      headers: R(R({}, a.getCommonHeaders(c)), c == null ? void 0 : c.headers)
    })),
    authReq: (c) => u.request(V(R({}, c), {
      headers: R(R(R({}, a.getCommonHeaders(c)), a.getAuthHeaders(c)), c == null ? void 0 : c.headers)
    }))
  };
};
var jo = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function Bo(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var Qe = { exports: {} };
(function(e, t) {
  (function(r, o) {
    var n = "1.0.37", i = "", a = "?", f = "function", w = "undefined", p = "object", u = "string", d = "major", s = "model", l = "name", c = "type", h = "vendor", m = "version", S = "architecture", M = "console", v = "mobile", _ = "tablet", L = "smarttv", W = "wearable", Oe = "embedded", Te = 500, oe = "Amazon", $ = "Apple", at = "ASUS", lt = "BlackBerry", H = "Browser", ne = "Chrome", tr = "Edge", ie = "Firefox", se = "Google", ct = "Huawei", Ae = "LG", xe = "Microsoft", ut = "Motorola", ae = "Opera", le = "Samsung", ft = "Sharp", ce = "Sony", Re = "Xiaomi", ke = "Zebra", pt = "Facebook", dt = "Chromium OS", ht = "Mac OS", rr = function(E, A) {
      var y = {};
      for (var x in E)
        A[x] && A[x].length % 2 === 0 ? y[x] = A[x].concat(E[x]) : y[x] = E[x];
      return y;
    }, ue = function(E) {
      for (var A = {}, y = 0; y < E.length; y++)
        A[E[y].toUpperCase()] = E[y];
      return A;
    }, bt = function(E, A) {
      return typeof E === u ? X(A).indexOf(X(E)) !== -1 : !1;
    }, X = function(E) {
      return E.toLowerCase();
    }, or = function(E) {
      return typeof E === u ? E.replace(/[^\d\.]/g, i).split(".")[0] : o;
    }, Ce = function(E, A) {
      if (typeof E === u)
        return E = E.replace(/^\s\s*/, i), typeof A === w ? E : E.substring(0, Te);
    }, Z = function(E, A) {
      for (var y = 0, x, I, B, T, g, U; y < A.length && !g; ) {
        var Ne = A[y], gt = A[y + 1];
        for (x = I = 0; x < Ne.length && !g && Ne[x]; )
          if (g = Ne[x++].exec(E), g)
            for (B = 0; B < gt.length; B++)
              U = g[++I], T = gt[B], typeof T === p && T.length > 0 ? T.length === 2 ? typeof T[1] == f ? this[T[0]] = T[1].call(this, U) : this[T[0]] = T[1] : T.length === 3 ? typeof T[1] === f && !(T[1].exec && T[1].test) ? this[T[0]] = U ? T[1].call(this, U, T[2]) : o : this[T[0]] = U ? U.replace(T[1], T[2]) : o : T.length === 4 && (this[T[0]] = U ? T[3].call(this, U.replace(T[1], T[2])) : o) : this[T] = U || o;
        y += 2;
      }
    }, Le = function(E, A) {
      for (var y in A)
        if (typeof A[y] === p && A[y].length > 0) {
          for (var x = 0; x < A[y].length; x++)
            if (bt(A[y][x], E))
              return y === a ? o : y;
        } else if (bt(A[y], E))
          return y === a ? o : y;
      return E;
    }, nr = {
      "1.0": "/8",
      "1.2": "/1",
      "1.3": "/3",
      "2.0": "/412",
      "2.0.2": "/416",
      "2.0.3": "/417",
      "2.0.4": "/419",
      "?": "/"
    }, mt = {
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
    }, wt = {
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
        [m, [l, ae + " Mini"]],
        [
          /\bopr\/([\w\.]+)/i
          // Opera Webkit
        ],
        [m, [l, ae]],
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
        [m, [l, "UC" + H]],
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
        [m, [l, "Smart Lenovo " + H]],
        [
          /(avast|avg)\/([\w\.]+)/i
          // Avast/AVG Secure Browser
        ],
        [[l, /(.+)/, "$1 Secure " + H], m],
        [
          /\bfocus\/([\w\.]+)/i
          // Firefox Focus
        ],
        [m, [l, ie + " Focus"]],
        [
          /\bopt\/([\w\.]+)/i
          // Opera Touch
        ],
        [m, [l, ae + " Touch"]],
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
        [m, [l, ae + " Coast"]],
        [
          /miuibrowser\/([\w\.]+)/i
          // MIUI Browser
        ],
        [m, [l, "MIUI " + H]],
        [
          /fxios\/([-\w\.]+)/i
          // Firefox for iOS
        ],
        [m, [l, ie]],
        [
          /\bqihu|(qi?ho?o?|360)browser/i
          // 360
        ],
        [[l, "360 " + H]],
        [
          /(oculus|sailfish|huawei|vivo)browser\/([\w\.]+)/i
        ],
        [[l, /(.+)/, "$1 " + H], m],
        [
          // Oculus/Sailfish/HuaweiBrowser/VivoBrowser
          /samsungbrowser\/([\w\.]+)/i
          // Samsung Internet
        ],
        [m, [l, le + " Internet"]],
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
        [[l, pt], m],
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
        [m, [l, ne + " Headless"]],
        [
          / wv\).+(chrome)\/([\w\.]+)/i
          // Chrome WebView
        ],
        [[l, ne + " WebView"], m],
        [
          /droid.+ version\/([\w\.]+)\b.+(?:mobile safari|safari)/i
          // Android Browser
        ],
        [m, [l, "Android " + H]],
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
        [l, [m, Le, nr]],
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
        [m, [l, ie + " Reality"]],
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
        [[S, X]],
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
        [[S, /ower/, i, X]],
        [
          /(sun4\w)[;\)]/i
          // SPARC
        ],
        [[S, "sparc"]],
        [
          /((?:avr32|ia64(?=;))|68k(?=\))|\barm(?=v(?:[1-7]|[5-7]1)l?|;|eabi)|(?=atmel )avr|(?:irix|mips|sparc)(?:64)?\b|pa-risc)/i
          // IA64, 68K, ARM/64, AVR/32, IRIX/64, MIPS/64, SPARC/64, PA-RISC
        ],
        [[S, X]]
      ],
      device: [
        [
          //////////////////////////
          // MOBILES & TABLETS
          /////////////////////////
          // Samsung
          /\b(sch-i[89]0\d|shw-m380s|sm-[ptx]\w{2,4}|gt-[pn]\d{2,4}|sgh-t8[56]9|nexus 10)/i
        ],
        [s, [h, le], [c, _]],
        [
          /\b((?:s[cgp]h|gt|sm)-\w+|sc[g-]?[\d]+a?|galaxy nexus)/i,
          /samsung[- ]([-\w]+)/i,
          /sec-(sgh\w+)/i
        ],
        [s, [h, le], [c, v]],
        [
          // Apple
          /(?:\/|\()(ip(?:hone|od)[\w, ]*)(?:\/|;)/i
          // iPod/iPhone
        ],
        [s, [h, $], [c, v]],
        [
          /\((ipad);[-\w\),; ]+apple/i,
          // iPad
          /applecoremedia\/[\w\.]+ \((ipad)/i,
          /\b(ipad)\d\d?,\d\d?[;\]].+ios/i
        ],
        [s, [h, $], [c, _]],
        [
          /(macintosh);/i
        ],
        [s, [h, $]],
        [
          // Sharp
          /\b(sh-?[altvz]?\d\d[a-ekm]?)/i
        ],
        [s, [h, ft], [c, v]],
        [
          // Huawei
          /\b((?:ag[rs][23]?|bah2?|sht?|btv)-a?[lw]\d{2})\b(?!.+d\/s)/i
        ],
        [s, [h, ct], [c, _]],
        [
          /(?:huawei|honor)([-\w ]+)[;\)]/i,
          /\b(nexus 6p|\w{2,4}e?-[atu]?[ln][\dx][012359c][adn]?)\b(?!.+d\/s)/i
        ],
        [s, [h, ct], [c, v]],
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
        [[s, /_/g, " "], [h, Re], [c, v]],
        [
          /oid[^\)]+; (2\d{4}(283|rpbf)[cgl])( bui|\))/i,
          // Redmi Pad
          /\b(mi[-_ ]?(?:pad)(?:[\w_ ]+))(?: bui|\))/i
          // Mi Pad tablets
        ],
        [[s, /_/g, " "], [h, Re], [c, _]],
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
        [s, [h, ut], [c, v]],
        [
          /\b(mz60\d|xoom[2 ]{0,2}) build\//i
        ],
        [s, [h, ut], [c, _]],
        [
          // LG
          /((?=lg)?[vl]k\-?\d{3}) bui| 3\.[-\w; ]{10}lg?-([06cv9]{3,4})/i
        ],
        [s, [h, Ae], [c, _]],
        [
          /(lm(?:-?f100[nv]?|-[\w\.]+)(?= bui|\))|nexus [45])/i,
          /\blg[-e;\/ ]+((?!browser|netcast|android tv)\w+)/i,
          /\blg-?([\d\w]+) bui/i
        ],
        [s, [h, Ae], [c, v]],
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
        [s, [h, se], [c, _]],
        [
          /droid.+; (pixel[\daxl ]{0,6})(?: bui|\))/i
          // Google Pixel
        ],
        [s, [h, se], [c, v]],
        [
          // Sony
          /droid.+ (a?\d[0-2]{2}so|[c-g]\d{4}|so[-gl]\w+|xq-a\w[4-7][12])(?= bui|\).+chrome\/(?![1-6]{0,1}\d\.))/i
        ],
        [s, [h, ce], [c, v]],
        [
          /sony tablet [ps]/i,
          /\b(?:sony)?sgp\w+(?: bui|\))/i
        ],
        [[s, "Xperia Tablet"], [h, ce], [c, _]],
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
        [s, [h, oe], [c, _]],
        [
          /((?:sd|kf)[0349hijorstuw]+)( bui|\)).+silk\//i
          // Fire Phone
        ],
        [[s, /(.+)/g, "Fire Phone $1"], [h, oe], [c, v]],
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
        [s, [h, lt], [c, v]],
        [
          // Asus
          /(?:\b|asus_)(transfo[prime ]{4,10} \w+|eeepc|slider \w+|nexus 7|padfone|p00[cj])/i
        ],
        [s, [h, at], [c, _]],
        [
          / (z[bes]6[027][012][km][ls]|zenfone \d\w?)\b/i
        ],
        [s, [h, at], [c, v]],
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
        [s, [h, xe], [c, _]],
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
        [[s, /\./g, " "], [h, xe], [c, v]],
        [
          /droid.+; (cc6666?|et5[16]|mc[239][23]x?|vc8[03]x?)\)/i
          // Zebra
        ],
        [s, [h, ke], [c, _]],
        [
          /droid.+; (ec30|ps20|tc[2-8]\d[kx])\)/i
        ],
        [s, [h, ke], [c, v]],
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
        [[s, /^/, "SmartTV"], [h, le], [c, L]],
        [
          /(nux; netcast.+smarttv|lg (netcast\.tv-201\d|android tv))/i
          // LG SmartTV
        ],
        [[h, Ae], [c, L]],
        [
          /(apple) ?tv/i
          // Apple TV
        ],
        [h, [s, $ + " TV"], [c, L]],
        [
          /crkey/i
          // Google Chromecast
        ],
        [[s, ne + "cast"], [h, se], [c, L]],
        [
          /droid.+aft(\w+)( bui|\))/i
          // Fire TV
        ],
        [s, [h, oe], [c, L]],
        [
          /\(dtv[\);].+(aquos)/i,
          /(aquos-tv[\w ]+)\)/i
          // Sharp
        ],
        [s, [h, ft], [c, L]],
        [
          /(bravia[\w ]+)( bui|\))/i
          // Sony
        ],
        [s, [h, ce], [c, L]],
        [
          /(mitv-\w{5}) bui/i
          // Xiaomi
        ],
        [s, [h, Re], [c, L]],
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
        [[h, Ce], [s, Ce], [c, L]],
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
        [h, s, [c, M]],
        [
          /droid.+; (shield) bui/i
          // Nvidia
        ],
        [s, [h, "Nvidia"], [c, M]],
        [
          /(playstation [345portablevi]+)/i
          // Playstation
        ],
        [s, [h, ce], [c, M]],
        [
          /\b(xbox(?: one)?(?!; xbox))[\); ]/i
          // Microsoft Xbox
        ],
        [s, [h, xe], [c, M]],
        [
          ///////////////////
          // WEARABLES
          ///////////////////
          /((pebble))app/i
          // Pebble
        ],
        [h, s, [c, W]],
        [
          /(watch)(?: ?os[,\/]|\d,\d\/)[\d\.]+/i
          // Apple Watch
        ],
        [s, [h, $], [c, W]],
        [
          /droid.+; (glass) \d/i
          // Google Glass
        ],
        [s, [h, se], [c, W]],
        [
          /droid.+; (wt63?0{2,3})\)/i
        ],
        [s, [h, ke], [c, W]],
        [
          /(quest( 2| pro)?)/i
          // Oculus Quest
        ],
        [s, [h, pt], [c, W]],
        [
          ///////////////////
          // EMBEDDED
          ///////////////////
          /(tesla)(?: qtcarbrowser|\/[-\w\.]+)/i
          // Tesla
        ],
        [h, [c, Oe]],
        [
          /(aeobc)\b/i
          // Echo Dot
        ],
        [s, [h, oe], [c, Oe]],
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
        [m, [l, tr + "HTML"]],
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
        [l, [m, Le, mt]],
        [
          /windows nt 6\.2; (arm)/i,
          // Windows RT
          /windows[\/ ]?([ntce\d\. ]+\w)(?!.+xbox)/i,
          /(?:win(?=3|9|n)|win 9x )([nt\d\.]+)/i
        ],
        [[m, Le, mt], [l, "Windows"]],
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
        [[l, ht], [m, /_/g, "."]],
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
        [m, [l, lt]],
        [
          /(?:symbian ?os|symbos|s60(?=;)|series60)[-\/ ]?([\w\.]*)/i
          // Symbian
        ],
        [m, [l, "Symbian"]],
        [
          /mozilla\/[\d\.]+ \((?:mobile|tablet|tv|mobile; [\w ]+); rv:.+ gecko\/([\w\.]+)/i
          // Firefox OS
        ],
        [m, [l, ie + " OS"]],
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
        [m, [l, ne + "cast"]],
        [
          /(cros) [\w]+(?:\)| ([\w\.]+)\b)/i
          // Chromium OS
        ],
        [[l, dt], m],
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
    }, D = function(E, A) {
      if (typeof E === p && (A = E, E = o), !(this instanceof D))
        return new D(E, A).getResult();
      var y = typeof r !== w && r.navigator ? r.navigator : o, x = E || (y && y.userAgent ? y.userAgent : i), I = y && y.userAgentData ? y.userAgentData : o, B = A ? rr(wt, A) : wt, T = y && y.userAgent == x;
      return this.getBrowser = function() {
        var g = {};
        return g[l] = o, g[m] = o, Z.call(g, x, B.browser), g[d] = or(g[m]), T && y && y.brave && typeof y.brave.isBrave == f && (g[l] = "Brave"), g;
      }, this.getCPU = function() {
        var g = {};
        return g[S] = o, Z.call(g, x, B.cpu), g;
      }, this.getDevice = function() {
        var g = {};
        return g[h] = o, g[s] = o, g[c] = o, Z.call(g, x, B.device), T && !g[c] && I && I.mobile && (g[c] = v), T && g[s] == "Macintosh" && y && typeof y.standalone !== w && y.maxTouchPoints && y.maxTouchPoints > 2 && (g[s] = "iPad", g[c] = _), g;
      }, this.getEngine = function() {
        var g = {};
        return g[l] = o, g[m] = o, Z.call(g, x, B.engine), g;
      }, this.getOS = function() {
        var g = {};
        return g[l] = o, g[m] = o, Z.call(g, x, B.os), T && !g[l] && I && I.platform != "Unknown" && (g[l] = I.platform.replace(/chrome os/i, dt).replace(/macos/i, ht)), g;
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
        return x = typeof g === u && g.length > Te ? Ce(g, Te) : g, this;
      }, this.setUA(x), this;
    };
    D.VERSION = n, D.BROWSER = ue([l, m, d]), D.CPU = ue([S]), D.DEVICE = ue([s, h, c, M, v, L, _, W, Oe]), D.ENGINE = D.OS = ue([l, m]), e.exports && (t = e.exports = D), t.UAParser = D;
    var J = typeof r !== w && (r.jQuery || r.Zepto);
    if (J && !J.ua) {
      var fe = new D();
      J.ua = fe.getResult(), J.ua.get = function() {
        return fe.getUA();
      }, J.ua.set = function(E) {
        fe.setUA(E);
        var A = fe.getResult();
        for (var y in A)
          J.ua[y] = A[y];
      };
    }
  })(typeof window == "object" ? window : jo);
})(Qe, Qe.exports);
var Uo = Qe.exports;
const Fo = /* @__PURE__ */ Bo(Uo), N = {
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
}, Nt = {
  // Silent
  silent: {
    level: -1
  },
  // Level 0
  fatal: {
    level: N.fatal
  },
  error: {
    level: N.error
  },
  // Level 1
  warn: {
    level: N.warn
  },
  // Level 2
  log: {
    level: N.log
  },
  // Level 3
  info: {
    level: N.info
  },
  success: {
    level: N.success
  },
  fail: {
    level: N.fail
  },
  ready: {
    level: N.info
  },
  start: {
    level: N.info
  },
  box: {
    level: N.info
  },
  // Level 4
  debug: {
    level: N.debug
  },
  // Level 5
  trace: {
    level: N.trace
  },
  // Verbose
  verbose: {
    level: N.verbose
  }
};
function He(e) {
  return e !== null && typeof e == "object";
}
function et(e, t, r = ".", o) {
  if (!He(t))
    return et(e, {}, r, o);
  const n = Object.assign({}, t);
  for (const i in e) {
    if (i === "__proto__" || i === "constructor")
      continue;
    const a = e[i];
    a != null && (o && o(n, i, a, r) || (Array.isArray(a) && Array.isArray(n[i]) ? n[i] = [...a, ...n[i]] : He(a) && He(n[i]) ? n[i] = et(
      a,
      n[i],
      (r ? `${r}.` : "") + i.toString(),
      o
    ) : n[i] = a));
  }
  return n;
}
function Mo(e) {
  return (...t) => (
    // eslint-disable-next-line unicorn/no-array-reduce
    t.reduce((r, o) => et(r, o, "", e), {})
  );
}
const qo = Mo();
function Io(e) {
  return Object.prototype.toString.call(e) === "[object Object]";
}
function zo(e) {
  return !(!Io(e) || !e.message && !e.args || e.stack);
}
let Ve = !1;
const Pt = [];
class C {
  constructor(t = {}) {
    const r = t.types || Nt;
    this.options = qo(
      V(R({}, t), {
        defaults: R({}, t.defaults),
        level: We(t.level, r),
        reporters: [...t.reporters || []]
      }),
      {
        types: Nt,
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
    this.options.level = We(
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
    return this.create(V(R({}, this.options), {
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
    Ve = !0;
  }
  resumeLogs() {
    Ve = !1;
    const t = Pt.splice(0);
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
      if (Ve) {
        Pt.push([this, t, o, r]);
        return;
      }
      return this._logFn(t, o, r);
    };
  }
  _logFn(t, r, o) {
    if ((t.level || 0) > this.level)
      return !1;
    const n = V(R({
      date: /* @__PURE__ */ new Date(),
      args: []
    }, t), {
      level: We(t.level, this.options.types)
    });
    !o && r.length === 1 && zo(r[0]) ? Object.assign(n, r[0]) : n.args = [...r], n.message && (n.args.unshift(n.message), delete n.message), n.additional && (Array.isArray(n.additional) || (n.additional = n.additional.split(`
`)), n.args.push(`
` + n.additional.join(`
`)), delete n.additional), n.type = typeof n.type == "string" ? n.type.toLowerCase() : "log", n.tag = typeof n.tag == "string" ? n.tag : "";
    const i = (f = !1) => {
      const w = (this._lastLog.count || 0) - this.options.throttleMin;
      if (this._lastLog.object && w > 0) {
        const p = [...this._lastLog.object.args];
        w > 1 && p.push(`(repeated ${w} times)`), this._log(V(R({}, this._lastLog.object), { args: p })), this._lastLog.count = 1;
      }
      f && (this._lastLog.object = n, this._log(n));
    };
    clearTimeout(this._lastLog.timeout);
    const a = this._lastLog.time && n.date ? n.date.getTime() - this._lastLog.time.getTime() : 0;
    if (this._lastLog.time = n.date, a < this.options.throttle)
      try {
        const f = JSON.stringify([
          n.type,
          n.tag,
          n.args
        ]), w = this._lastLog.serialized === f;
        if (this._lastLog.serialized = f, w && (this._lastLog.count = (this._lastLog.count || 0) + 1, this._lastLog.count > this.options.throttleMin)) {
          this._lastLog.timeout = setTimeout(
            i,
            this.options.throttle
          );
          return;
        }
      } catch (f) {
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
function We(e, t = {}, r = 3) {
  return e === void 0 ? r : typeof e == "number" ? e : t[e] && t[e].level !== void 0 ? t[e].level : r;
}
C.prototype.add = C.prototype.addReporter;
C.prototype.remove = C.prototype.removeReporter;
C.prototype.clear = C.prototype.removeReporter;
C.prototype.withScope = C.prototype.withTag;
C.prototype.mock = C.prototype.mockTypes;
C.prototype.pause = C.prototype.pauseLogs;
C.prototype.resume = C.prototype.resumeLogs;
function Ho(e = {}) {
  return new C(e);
}
class Vo {
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
    `, f = `%c${[n, o].filter(Boolean).join(":")}`;
    typeof t.args[0] == "string" ? r(
      `${f}%c ${t.args[0]}`,
      a,
      // Empty string as style resets to default console style
      "",
      ...t.args.slice(1)
    ) : r(f, a, ...t.args);
  }
}
function Wo(e = {}) {
  return Ho(R({
    reporters: e.reporters || [new Vo({})],
    prompt(r, o = {}) {
      return o.type === "confirm" ? Promise.resolve(confirm(r)) : Promise.resolve(prompt(r));
    }
  }, e));
}
const Jo = Wo();
var ge, G;
class Ko {
  constructor(t) {
    Be(this, ge, hr());
    Be(this, G, "");
    De(this, "logger");
    De(this, "http");
    const {
      serverUrl: r,
      appname: o,
      appsecret: n,
      debug: i = !1
    } = t;
    this.logger = Jo.create({
      level: i ? void 0 : -1
    }).withTag("YoungReporter"), this.logger.info("init", t), this.http = Do({
      baseURL: r,
      timeout: -1,
      loading: {
        start: () => this.logger.info("...start req..."),
        end: () => this.logger.info("...end req...")
      },
      checkFn: (a) => (this.logger.success("response: ", a), a),
      fail: (a) => {
        this.logger.error("request error: ", a);
      },
      headers: {
        getCommonHeaders: () => {
          const a = Math.floor(Date.now() / 1e3).toString();
          return {
            t: a,
            sign: me(`${n}${a}`).toLowerCase(),
            appname: o
          };
        }
      }
    });
  }
  mergeProps(t, r = "track") {
    const o = navigator.userAgent;
    return {
      "#type": r,
      "#device_id": je(this, ge),
      "#account_id": je(this, G),
      "#flush_time": Date.now(),
      "#ua": Fo(o),
      "#sdk_version": "0.0.3",
      properties: t
    };
  }
  login(t) {
    Ue(this, G, t);
  }
  loginout() {
    Ue(this, G, "");
  }
  track(t, r) {
    const o = this.mergeProps(r, "track");
    this.logger.info("event_id: ", t, "track: ", o), this.http.authReq({
      url: "/api/report",
      data: R({
        event_id: t
      }, o)
    });
  }
}
ge = new WeakMap(), G = new WeakMap();
export {
  Ko as default
};
