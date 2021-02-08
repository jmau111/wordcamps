var t =
  "undefined" != typeof globalThis
    ? globalThis
    : "undefined" != typeof window
    ? window
    : "undefined" != typeof global
    ? global
    : "undefined" != typeof self
    ? self
    : {}
function e(t, e, n) {
  return (
    t(
      (n = {
        path: e,
        exports: {},
        require: function (t, e) {
          return (function () {
            throw new Error(
              "Dynamic requires are not currently supported by @rollup/plugin-commonjs"
            )
          })(null == e && n.path)
        },
      }),
      n.exports
    ),
    n.exports
  )
}
var n = function (t) {
    return t && t.Math == Math && t
  },
  r =
    n("object" == typeof globalThis && globalThis) ||
    n("object" == typeof window && window) ||
    n("object" == typeof self && self) ||
    n("object" == typeof t && t) ||
    Function("return this")(),
  i = function (t) {
    try {
      return !!t()
    } catch (t) {
      return !0
    }
  },
  a = !i(function () {
    return (
      7 !=
      Object.defineProperty({}, 1, {
        get: function () {
          return 7
        },
      })[1]
    )
  }),
  o = {}.propertyIsEnumerable,
  l = Object.getOwnPropertyDescriptor,
  s = {
    f:
      l && !o.call({ 1: 2 }, 1)
        ? function (t) {
            var e = l(this, t)
            return !!e && e.enumerable
          }
        : o,
  },
  c = function (t, e) {
    return {
      enumerable: !(1 & t),
      configurable: !(2 & t),
      writable: !(4 & t),
      value: e,
    }
  },
  u = {}.toString,
  p = function (t) {
    return u.call(t).slice(8, -1)
  },
  d = "".split,
  f = i(function () {
    return !Object("z").propertyIsEnumerable(0)
  })
    ? function (t) {
        return "String" == p(t) ? d.call(t, "") : Object(t)
      }
    : Object,
  h = function (t) {
    if (null == t) throw TypeError("Can't call method on " + t)
    return t
  },
  g = function (t) {
    return f(h(t))
  },
  m = function (t) {
    return "object" == typeof t ? null !== t : "function" == typeof t
  },
  v = function (t, e) {
    if (!m(t)) return t
    var n, r
    if (e && "function" == typeof (n = t.toString) && !m((r = n.call(t))))
      return r
    if ("function" == typeof (n = t.valueOf) && !m((r = n.call(t)))) return r
    if (!e && "function" == typeof (n = t.toString) && !m((r = n.call(t))))
      return r
    throw TypeError("Can't convert object to primitive value")
  },
  y = {}.hasOwnProperty,
  k = function (t, e) {
    return y.call(t, e)
  },
  b = r.document,
  w = m(b) && m(b.createElement),
  x =
    !a &&
    !i(function () {
      return (
        7 !=
        Object.defineProperty(((t = "div"), w ? b.createElement(t) : {}), "a", {
          get: function () {
            return 7
          },
        }).a
      )
      var t
    }),
  S = Object.getOwnPropertyDescriptor,
  E = {
    f: a
      ? S
      : function (t, e) {
          if (((t = g(t)), (e = v(e, !0)), x))
            try {
              return S(t, e)
            } catch (t) {}
          if (k(t, e)) return c(!s.f.call(t, e), t[e])
        },
  },
  T = function (t) {
    if (!m(t)) throw TypeError(String(t) + " is not an object")
    return t
  },
  _ = Object.defineProperty,
  A = {
    f: a
      ? _
      : function (t, e, n) {
          if ((T(t), (e = v(e, !0)), T(n), x))
            try {
              return _(t, e, n)
            } catch (t) {}
          if ("get" in n || "set" in n)
            throw TypeError("Accessors not supported")
          return "value" in n && (t[e] = n.value), t
        },
  },
  z = a
    ? function (t, e, n) {
        return A.f(t, e, c(1, n))
      }
    : function (t, e, n) {
        return (t[e] = n), t
      },
  R = function (t, e) {
    try {
      z(r, t, e)
    } catch (n) {
      r[t] = e
    }
    return e
  },
  O = r["__core-js_shared__"] || R("__core-js_shared__", {}),
  I = Function.toString
"function" != typeof O.inspectSource &&
  (O.inspectSource = function (t) {
    return I.call(t)
  })
var $,
  C,
  L,
  P,
  M = O.inspectSource,
  j = r.WeakMap,
  N = "function" == typeof j && /native code/.test(M(j)),
  q = e(function (t) {
    ;(t.exports = function (t, e) {
      return O[t] || (O[t] = void 0 !== e ? e : {})
    })("versions", []).push({
      version: "3.6.5",
      mode: "global",
      copyright: "© 2020 Denis Pushkarev (zloirock.ru)",
    })
  }),
  U = 0,
  D = Math.random(),
  Z = function (t) {
    return (
      "Symbol(" + String(void 0 === t ? "" : t) + ")_" + (++U + D).toString(36)
    )
  },
  W = q("keys"),
  K = {},
  J = r.WeakMap
if (N) {
  var F = new J(),
    H = F.get,
    B = F.has,
    Y = F.set
  ;($ = function (t, e) {
    return Y.call(F, t, e), e
  }),
    (C = function (t) {
      return H.call(F, t) || {}
    }),
    (L = function (t) {
      return B.call(F, t)
    })
} else {
  var V = W[(P = "state")] || (W[P] = Z(P))
  ;(K[V] = !0),
    ($ = function (t, e) {
      return z(t, V, e), e
    }),
    (C = function (t) {
      return k(t, V) ? t[V] : {}
    }),
    (L = function (t) {
      return k(t, V)
    })
}
var G = {
    set: $,
    get: C,
    has: L,
    enforce: function (t) {
      return L(t) ? C(t) : $(t, {})
    },
    getterFor: function (t) {
      return function (e) {
        var n
        if (!m(e) || (n = C(e)).type !== t)
          throw TypeError("Incompatible receiver, " + t + " required")
        return n
      }
    },
  },
  X = e(function (t) {
    var e = G.get,
      n = G.enforce,
      i = String(String).split("String")
    ;(t.exports = function (t, e, a, o) {
      var l = !!o && !!o.unsafe,
        s = !!o && !!o.enumerable,
        c = !!o && !!o.noTargetGet
      "function" == typeof a &&
        ("string" != typeof e || k(a, "name") || z(a, "name", e),
        (n(a).source = i.join("string" == typeof e ? e : ""))),
        t !== r
          ? (l ? !c && t[e] && (s = !0) : delete t[e],
            s ? (t[e] = a) : z(t, e, a))
          : s
          ? (t[e] = a)
          : R(e, a)
    })(Function.prototype, "toString", function () {
      return ("function" == typeof this && e(this).source) || M(this)
    })
  }),
  Q = r,
  tt = function (t) {
    return "function" == typeof t ? t : void 0
  },
  et = function (t, e) {
    return arguments.length < 2
      ? tt(Q[t]) || tt(r[t])
      : (Q[t] && Q[t][e]) || (r[t] && r[t][e])
  },
  nt = Math.ceil,
  rt = Math.floor,
  it = function (t) {
    return isNaN((t = +t)) ? 0 : (t > 0 ? rt : nt)(t)
  },
  at = Math.min,
  ot = function (t) {
    return t > 0 ? at(it(t), 9007199254740991) : 0
  },
  lt = Math.max,
  st = Math.min,
  ct = function (t, e) {
    var n = it(t)
    return n < 0 ? lt(n + e, 0) : st(n, e)
  },
  ut = function (t) {
    return function (e, n, r) {
      var i,
        a = g(e),
        o = ot(a.length),
        l = ct(r, o)
      if (t && n != n) {
        for (; o > l; ) if ((i = a[l++]) != i) return !0
      } else
        for (; o > l; l++) if ((t || l in a) && a[l] === n) return t || l || 0
      return !t && -1
    }
  },
  pt = { includes: ut(!0), indexOf: ut(!1) },
  dt = pt.indexOf,
  ft = [
    "constructor",
    "hasOwnProperty",
    "isPrototypeOf",
    "propertyIsEnumerable",
    "toLocaleString",
    "toString",
    "valueOf",
  ].concat("length", "prototype"),
  ht = {
    f:
      Object.getOwnPropertyNames ||
      function (t) {
        return (function (t, e) {
          var n,
            r = g(t),
            i = 0,
            a = []
          for (n in r) !k(K, n) && k(r, n) && a.push(n)
          for (; e.length > i; ) k(r, (n = e[i++])) && (~dt(a, n) || a.push(n))
          return a
        })(t, ft)
      },
  },
  gt = { f: Object.getOwnPropertySymbols },
  mt =
    et("Reflect", "ownKeys") ||
    function (t) {
      var e = ht.f(T(t)),
        n = gt.f
      return n ? e.concat(n(t)) : e
    },
  vt = function (t, e) {
    for (var n = mt(e), r = A.f, i = E.f, a = 0; a < n.length; a++) {
      var o = n[a]
      k(t, o) || r(t, o, i(e, o))
    }
  },
  yt = /#|\.prototype\./,
  kt = function (t, e) {
    var n = wt[bt(t)]
    return n == St || (n != xt && ("function" == typeof e ? i(e) : !!e))
  },
  bt = (kt.normalize = function (t) {
    return String(t).replace(yt, ".").toLowerCase()
  }),
  wt = (kt.data = {}),
  xt = (kt.NATIVE = "N"),
  St = (kt.POLYFILL = "P"),
  Et = kt,
  Tt = E.f,
  _t = function (t, e) {
    var n,
      i,
      a,
      o,
      l,
      s = t.target,
      c = t.global,
      u = t.stat
    if ((n = c ? r : u ? r[s] || R(s, {}) : (r[s] || {}).prototype))
      for (i in e) {
        if (
          ((o = e[i]),
          (a = t.noTargetGet ? (l = Tt(n, i)) && l.value : n[i]),
          !Et(c ? i : s + (u ? "." : "#") + i, t.forced) && void 0 !== a)
        ) {
          if (typeof o == typeof a) continue
          vt(o, a)
        }
        ;(t.sham || (a && a.sham)) && z(o, "sham", !0), X(n, i, o, t)
      }
  },
  At = function () {
    var t = T(this),
      e = ""
    return (
      t.global && (e += "g"),
      t.ignoreCase && (e += "i"),
      t.multiline && (e += "m"),
      t.dotAll && (e += "s"),
      t.unicode && (e += "u"),
      t.sticky && (e += "y"),
      e
    )
  }
function zt(t, e) {
  return RegExp(t, e)
}
var Rt = {
    UNSUPPORTED_Y: i(function () {
      var t = zt("a", "y")
      return (t.lastIndex = 2), null != t.exec("abcd")
    }),
    BROKEN_CARET: i(function () {
      var t = zt("^r", "gy")
      return (t.lastIndex = 2), null != t.exec("str")
    }),
  },
  Ot = RegExp.prototype.exec,
  It = String.prototype.replace,
  $t = Ot,
  Ct = (function () {
    var t = /a/,
      e = /b*/g
    return (
      Ot.call(t, "a"), Ot.call(e, "a"), 0 !== t.lastIndex || 0 !== e.lastIndex
    )
  })(),
  Lt = Rt.UNSUPPORTED_Y || Rt.BROKEN_CARET,
  Pt = void 0 !== /()??/.exec("")[1]
;(Ct || Pt || Lt) &&
  ($t = function (t) {
    var e,
      n,
      r,
      i,
      a = this,
      o = Lt && a.sticky,
      l = At.call(a),
      s = a.source,
      c = 0,
      u = t
    return (
      o &&
        (-1 === (l = l.replace("y", "")).indexOf("g") && (l += "g"),
        (u = String(t).slice(a.lastIndex)),
        a.lastIndex > 0 &&
          (!a.multiline || (a.multiline && "\n" !== t[a.lastIndex - 1])) &&
          ((s = "(?: " + s + ")"), (u = " " + u), c++),
        (n = new RegExp("^(?:" + s + ")", l))),
      Pt && (n = new RegExp("^" + s + "$(?!\\s)", l)),
      Ct && (e = a.lastIndex),
      (r = Ot.call(o ? n : a, u)),
      o
        ? r
          ? ((r.input = r.input.slice(c)),
            (r[0] = r[0].slice(c)),
            (r.index = a.lastIndex),
            (a.lastIndex += r[0].length))
          : (a.lastIndex = 0)
        : Ct && r && (a.lastIndex = a.global ? r.index + r[0].length : e),
      Pt &&
        r &&
        r.length > 1 &&
        It.call(r[0], n, function () {
          for (i = 1; i < arguments.length - 2; i++)
            void 0 === arguments[i] && (r[i] = void 0)
        }),
      r
    )
  })
var Mt = $t
_t({ target: "RegExp", proto: !0, forced: /./.exec !== Mt }, { exec: Mt })
var jt =
    !!Object.getOwnPropertySymbols &&
    !i(function () {
      return !String(Symbol())
    }),
  Nt = jt && !Symbol.sham && "symbol" == typeof Symbol.iterator,
  qt = q("wks"),
  Ut = r.Symbol,
  Dt = Nt ? Ut : (Ut && Ut.withoutSetter) || Z,
  Zt = function (t) {
    return (
      k(qt, t) ||
        (jt && k(Ut, t) ? (qt[t] = Ut[t]) : (qt[t] = Dt("Symbol." + t))),
      qt[t]
    )
  },
  Wt = Zt("species"),
  Kt = !i(function () {
    var t = /./
    return (
      (t.exec = function () {
        var t = []
        return (t.groups = { a: "7" }), t
      }),
      "7" !== "".replace(t, "$<a>")
    )
  }),
  Jt = "$0" === "a".replace(/./, "$0"),
  Ft = Zt("replace"),
  Ht = !!/./[Ft] && "" === /./[Ft]("a", "$0"),
  Bt = !i(function () {
    var t = /(?:)/,
      e = t.exec
    t.exec = function () {
      return e.apply(this, arguments)
    }
    var n = "ab".split(t)
    return 2 !== n.length || "a" !== n[0] || "b" !== n[1]
  }),
  Yt = function (t, e, n, r) {
    var a = Zt(t),
      o = !i(function () {
        var e = {}
        return (
          (e[a] = function () {
            return 7
          }),
          7 != ""[t](e)
        )
      }),
      l =
        o &&
        !i(function () {
          var e = !1,
            n = /a/
          return (
            "split" === t &&
              (((n = {}).constructor = {}),
              (n.constructor[Wt] = function () {
                return n
              }),
              (n.flags = ""),
              (n[a] = /./[a])),
            (n.exec = function () {
              return (e = !0), null
            }),
            n[a](""),
            !e
          )
        })
    if (
      !o ||
      !l ||
      ("replace" === t && (!Kt || !Jt || Ht)) ||
      ("split" === t && !Bt)
    ) {
      var s = /./[a],
        c = n(
          a,
          ""[t],
          function (t, e, n, r, i) {
            return e.exec === Mt
              ? o && !i
                ? { done: !0, value: s.call(e, n, r) }
                : { done: !0, value: t.call(n, e, r) }
              : { done: !1 }
          },
          {
            REPLACE_KEEPS_$0: Jt,
            REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE: Ht,
          }
        ),
        u = c[0],
        p = c[1]
      X(String.prototype, t, u),
        X(
          RegExp.prototype,
          a,
          2 == e
            ? function (t, e) {
                return p.call(t, this, e)
              }
            : function (t) {
                return p.call(t, this)
              }
        )
    }
    r && z(RegExp.prototype[a], "sham", !0)
  },
  Vt = function (t) {
    return function (e, n) {
      var r,
        i,
        a = String(h(e)),
        o = it(n),
        l = a.length
      return o < 0 || o >= l
        ? t
          ? ""
          : void 0
        : (r = a.charCodeAt(o)) < 55296 ||
          r > 56319 ||
          o + 1 === l ||
          (i = a.charCodeAt(o + 1)) < 56320 ||
          i > 57343
        ? t
          ? a.charAt(o)
          : r
        : t
        ? a.slice(o, o + 2)
        : i - 56320 + ((r - 55296) << 10) + 65536
    }
  },
  Gt = { codeAt: Vt(!1), charAt: Vt(!0) }.charAt,
  Xt = function (t, e, n) {
    return e + (n ? Gt(t, e).length : 1)
  },
  Qt = function (t, e) {
    var n = t.exec
    if ("function" == typeof n) {
      var r = n.call(t, e)
      if ("object" != typeof r)
        throw TypeError(
          "RegExp exec method returned something other than an Object or null"
        )
      return r
    }
    if ("RegExp" !== p(t))
      throw TypeError("RegExp#exec called on incompatible receiver")
    return Mt.call(t, e)
  }
Yt("match", 1, function (t, e, n) {
  return [
    function (e) {
      var n = h(this),
        r = null == e ? void 0 : e[t]
      return void 0 !== r ? r.call(e, n) : new RegExp(e)[t](String(n))
    },
    function (t) {
      var r = n(e, t, this)
      if (r.done) return r.value
      var i = T(t),
        a = String(this)
      if (!i.global) return Qt(i, a)
      var o = i.unicode
      i.lastIndex = 0
      for (var l, s = [], c = 0; null !== (l = Qt(i, a)); ) {
        var u = String(l[0])
        ;(s[c] = u), "" === u && (i.lastIndex = Xt(a, ot(i.lastIndex), o)), c++
      }
      return 0 === c ? null : s
    },
  ]
})
var te =
  Object.is ||
  function (t, e) {
    return t === e ? 0 !== t || 1 / t == 1 / e : t != t && e != e
  }
Yt("search", 1, function (t, e, n) {
  return [
    function (e) {
      var n = h(this),
        r = null == e ? void 0 : e[t]
      return void 0 !== r ? r.call(e, n) : new RegExp(e)[t](String(n))
    },
    function (t) {
      var r = n(e, t, this)
      if (r.done) return r.value
      var i = T(t),
        a = String(this),
        o = i.lastIndex
      te(o, 0) || (i.lastIndex = 0)
      var l = Qt(i, a)
      return te(i.lastIndex, o) || (i.lastIndex = o), null === l ? -1 : l.index
    },
  ]
})
var ee = {}
ee[Zt("toStringTag")] = "z"
var ne = "[object z]" === String(ee),
  re = Zt("toStringTag"),
  ie =
    "Arguments" ==
    p(
      (function () {
        return arguments
      })()
    ),
  ae = ne
    ? p
    : function (t) {
        var e, n, r
        return void 0 === t
          ? "Undefined"
          : null === t
          ? "Null"
          : "string" ==
            typeof (n = (function (t, e) {
              try {
                return t[e]
              } catch (t) {}
            })((e = Object(t)), re))
          ? n
          : ie
          ? p(e)
          : "Object" == (r = p(e)) && "function" == typeof e.callee
          ? "Arguments"
          : r
      },
  oe = ne
    ? {}.toString
    : function () {
        return "[object " + ae(this) + "]"
      }
ne || X(Object.prototype, "toString", oe, { unsafe: !0 })
var le = RegExp.prototype,
  se = le.toString,
  ce = i(function () {
    return "/a/b" != se.call({ source: "a", flags: "b" })
  }),
  ue = "toString" != se.name
function pe(t, e) {
  if (!(t instanceof e))
    throw new TypeError("Cannot call a class as a function")
}
function de(t, e) {
  for (var n = 0; n < e.length; n++) {
    var r = e[n]
    ;(r.enumerable = r.enumerable || !1),
      (r.configurable = !0),
      "value" in r && (r.writable = !0),
      Object.defineProperty(t, r.key, r)
  }
}
function fe(t, e, n) {
  return e && de(t.prototype, e), n && de(t, n), t
}
function he(t, e) {
  return (
    (function (t) {
      if (Array.isArray(t)) return t
    })(t) ||
    (function (t, e) {
      if ("undefined" == typeof Symbol || !(Symbol.iterator in Object(t)))
        return
      var n = [],
        r = !0,
        i = !1,
        a = void 0
      try {
        for (
          var o, l = t[Symbol.iterator]();
          !(r = (o = l.next()).done) && (n.push(o.value), !e || n.length !== e);
          r = !0
        );
      } catch (t) {
        ;(i = !0), (a = t)
      } finally {
        try {
          r || null == l.return || l.return()
        } finally {
          if (i) throw a
        }
      }
      return n
    })(t, e) ||
    ge(t, e) ||
    (function () {
      throw new TypeError(
        "Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
      )
    })()
  )
}
function ge(t, e) {
  if (t) {
    if ("string" == typeof t) return me(t, e)
    var n = Object.prototype.toString.call(t).slice(8, -1)
    return (
      "Object" === n && t.constructor && (n = t.constructor.name),
      "Map" === n || "Set" === n
        ? Array.from(t)
        : "Arguments" === n ||
          /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
        ? me(t, e)
        : void 0
    )
  }
}
function me(t, e) {
  ;(null == e || e > t.length) && (e = t.length)
  for (var n = 0, r = new Array(e); n < e; n++) r[n] = t[n]
  return r
}
function ve(t) {
  if ("undefined" == typeof Symbol || null == t[Symbol.iterator]) {
    if (Array.isArray(t) || (t = ge(t))) {
      var e = 0,
        n = function () {}
      return {
        s: n,
        n: function () {
          return e >= t.length ? { done: !0 } : { done: !1, value: t[e++] }
        },
        e: function (t) {
          throw t
        },
        f: n,
      }
    }
    throw new TypeError(
      "Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
    )
  }
  var r,
    i,
    a = !0,
    o = !1
  return {
    s: function () {
      r = t[Symbol.iterator]()
    },
    n: function () {
      var t = r.next()
      return (a = t.done), t
    },
    e: function (t) {
      ;(o = !0), (i = t)
    },
    f: function () {
      try {
        a || null == r.return || r.return()
      } finally {
        if (o) throw i
      }
    },
  }
}
;(ce || ue) &&
  X(
    RegExp.prototype,
    "toString",
    function () {
      var t = T(this),
        e = String(t.source),
        n = t.flags
      return (
        "/" +
        e +
        "/" +
        String(
          void 0 === n && t instanceof RegExp && !("flags" in le)
            ? At.call(t)
            : n
        )
      )
    },
    { unsafe: !0 }
  )
var ye = function (t) {
    return Object(h(t))
  },
  ke = Math.max,
  be = Math.min,
  we = Math.floor,
  xe = /\$([$&'`]|\d\d?|<[^>]*>)/g,
  Se = /\$([$&'`]|\d\d?)/g
Yt("replace", 2, function (t, e, n, r) {
  var i = r.REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE,
    a = r.REPLACE_KEEPS_$0,
    o = i ? "$" : "$0"
  return [
    function (n, r) {
      var i = h(this),
        a = null == n ? void 0 : n[t]
      return void 0 !== a ? a.call(n, i, r) : e.call(String(i), n, r)
    },
    function (t, r) {
      if ((!i && a) || ("string" == typeof r && -1 === r.indexOf(o))) {
        var s = n(e, t, this, r)
        if (s.done) return s.value
      }
      var c = T(t),
        u = String(this),
        p = "function" == typeof r
      p || (r = String(r))
      var d = c.global
      if (d) {
        var f = c.unicode
        c.lastIndex = 0
      }
      for (var h = []; ; ) {
        var g = Qt(c, u)
        if (null === g) break
        if ((h.push(g), !d)) break
        "" === String(g[0]) && (c.lastIndex = Xt(u, ot(c.lastIndex), f))
      }
      for (var m, v = "", y = 0, k = 0; k < h.length; k++) {
        g = h[k]
        for (
          var b = String(g[0]),
            w = ke(be(it(g.index), u.length), 0),
            x = [],
            S = 1;
          S < g.length;
          S++
        )
          x.push(void 0 === (m = g[S]) ? m : String(m))
        var E = g.groups
        if (p) {
          var _ = [b].concat(x, w, u)
          void 0 !== E && _.push(E)
          var A = String(r.apply(void 0, _))
        } else A = l(b, u, w, x, E, r)
        w >= y && ((v += u.slice(y, w) + A), (y = w + b.length))
      }
      return v + u.slice(y)
    },
  ]
  function l(t, n, r, i, a, o) {
    var l = r + t.length,
      s = i.length,
      c = Se
    return (
      void 0 !== a && ((a = ye(a)), (c = xe)),
      e.call(o, c, function (e, o) {
        var c
        switch (o.charAt(0)) {
          case "$":
            return "$"
          case "&":
            return t
          case "`":
            return n.slice(0, r)
          case "'":
            return n.slice(l)
          case "<":
            c = a[o.slice(1, -1)]
            break
          default:
            var u = +o
            if (0 === u) return e
            if (u > s) {
              var p = we(u / 10)
              return 0 === p
                ? e
                : p <= s
                ? void 0 === i[p - 1]
                  ? o.charAt(1)
                  : i[p - 1] + o.charAt(1)
                : e
            }
            c = i[u - 1]
        }
        return void 0 === c ? "" : c
      })
    )
  }
})
var Ee,
  Te = /"/g
_t(
  {
    target: "String",
    proto: !0,
    forced:
      ((Ee = "link"),
      i(function () {
        var t = ""[Ee]('"')
        return t !== t.toLowerCase() || t.split('"').length > 3
      })),
  },
  {
    link: function (t) {
      return (
        (e = "a"),
        (n = "href"),
        (r = t),
        (i = String(h(this))),
        (a = "<" + e),
        "" !== n &&
          (a += " " + n + '="' + String(r).replace(Te, "&quot;") + '"'),
        a + ">" + i + "</" + e + ">"
      )
      var e, n, r, i, a
    },
  }
)
var _e = function (t, e) {
    var n = [][t]
    return (
      !!n &&
      i(function () {
        n.call(
          null,
          e ||
            function () {
              throw 1
            },
          1
        )
      })
    )
  },
  Ae = Object.defineProperty,
  ze = {},
  Re = function (t) {
    throw t
  },
  Oe = function (t, e) {
    if (k(ze, t)) return ze[t]
    e || (e = {})
    var n = [][t],
      r = !!k(e, "ACCESSORS") && e.ACCESSORS,
      o = k(e, 0) ? e[0] : Re,
      l = k(e, 1) ? e[1] : void 0
    return (ze[t] =
      !!n &&
      !i(function () {
        if (r && !a) return !0
        var t = { length: -1 }
        r ? Ae(t, 1, { enumerable: !0, get: Re }) : (t[1] = 1), n.call(t, o, l)
      }))
  },
  Ie = pt.indexOf,
  $e = [].indexOf,
  Ce = !!$e && 1 / [1].indexOf(1, -0) < 0,
  Le = _e("indexOf"),
  Pe = Oe("indexOf", { ACCESSORS: !0, 1: 0 })
_t(
  { target: "Array", proto: !0, forced: Ce || !Le || !Pe },
  {
    indexOf: function (t) {
      return Ce
        ? $e.apply(this, arguments) || 0
        : Ie(this, t, arguments.length > 1 ? arguments[1] : void 0)
    },
  }
)
var Me = [].join,
  je = f != Object,
  Ne = _e("join", ",")
_t(
  { target: "Array", proto: !0, forced: je || !Ne },
  {
    join: function (t) {
      return Me.call(g(this), void 0 === t ? "," : t)
    },
  }
)
var qe,
  Ue,
  De = function (t) {
    if ("function" != typeof t)
      throw TypeError(String(t) + " is not a function")
    return t
  },
  Ze =
    Array.isArray ||
    function (t) {
      return "Array" == p(t)
    },
  We = Zt("species"),
  Ke = function (t, e) {
    var n
    return (
      Ze(t) &&
        ("function" != typeof (n = t.constructor) ||
        (n !== Array && !Ze(n.prototype))
          ? m(n) && null === (n = n[We]) && (n = void 0)
          : (n = void 0)),
      new (void 0 === n ? Array : n)(0 === e ? 0 : e)
    )
  },
  Je = [].push,
  Fe = function (t) {
    var e = 1 == t,
      n = 2 == t,
      r = 3 == t,
      i = 4 == t,
      a = 6 == t,
      o = 5 == t || a
    return function (l, s, c, u) {
      for (
        var p,
          d,
          h = ye(l),
          g = f(h),
          m = (function (t, e, n) {
            if ((De(t), void 0 === e)) return t
            switch (n) {
              case 0:
                return function () {
                  return t.call(e)
                }
              case 1:
                return function (n) {
                  return t.call(e, n)
                }
              case 2:
                return function (n, r) {
                  return t.call(e, n, r)
                }
              case 3:
                return function (n, r, i) {
                  return t.call(e, n, r, i)
                }
            }
            return function () {
              return t.apply(e, arguments)
            }
          })(s, c, 3),
          v = ot(g.length),
          y = 0,
          k = u || Ke,
          b = e ? k(l, v) : n ? k(l, 0) : void 0;
        v > y;
        y++
      )
        if ((o || y in g) && ((d = m((p = g[y]), y, h)), t))
          if (e) b[y] = d
          else if (d)
            switch (t) {
              case 3:
                return !0
              case 5:
                return p
              case 6:
                return y
              case 2:
                Je.call(b, p)
            }
          else if (i) return !1
      return a ? -1 : r || i ? i : b
    }
  },
  He = {
    forEach: Fe(0),
    map: Fe(1),
    filter: Fe(2),
    some: Fe(3),
    every: Fe(4),
    find: Fe(5),
    findIndex: Fe(6),
  },
  Be = et("navigator", "userAgent") || "",
  Ye = r.process,
  Ve = Ye && Ye.versions,
  Ge = Ve && Ve.v8
Ge
  ? (Ue = (qe = Ge.split("."))[0] + qe[1])
  : Be &&
    (!(qe = Be.match(/Edge\/(\d+)/)) || qe[1] >= 74) &&
    (qe = Be.match(/Chrome\/(\d+)/)) &&
    (Ue = qe[1])
var Xe = Ue && +Ue,
  Qe = Zt("species"),
  tn = function (t) {
    return (
      Xe >= 51 ||
      !i(function () {
        var e = []
        return (
          ((e.constructor = {})[Qe] = function () {
            return { foo: 1 }
          }),
          1 !== e[t](Boolean).foo
        )
      })
    )
  },
  en = He.map,
  nn = tn("map"),
  rn = Oe("map")
_t(
  { target: "Array", proto: !0, forced: !nn || !rn },
  {
    map: function (t) {
      return en(this, t, arguments.length > 1 ? arguments[1] : void 0)
    },
  }
)
var an = function (t, e, n) {
    var r = v(e)
    r in t ? A.f(t, r, c(0, n)) : (t[r] = n)
  },
  on = tn("slice"),
  ln = Oe("slice", { ACCESSORS: !0, 0: 0, 1: 2 }),
  sn = Zt("species"),
  cn = [].slice,
  un = Math.max
_t(
  { target: "Array", proto: !0, forced: !on || !ln },
  {
    slice: function (t, e) {
      var n,
        r,
        i,
        a = g(this),
        o = ot(a.length),
        l = ct(t, o),
        s = ct(void 0 === e ? o : e, o)
      if (
        Ze(a) &&
        ("function" != typeof (n = a.constructor) ||
        (n !== Array && !Ze(n.prototype))
          ? m(n) && null === (n = n[sn]) && (n = void 0)
          : (n = void 0),
        n === Array || void 0 === n)
      )
        return cn.call(a, l, s)
      for (
        r = new (void 0 === n ? Array : n)(un(s - l, 0)), i = 0;
        l < s;
        l++, i++
      )
        l in a && an(r, i, a[l])
      return (r.length = i), r
    },
  }
)
var pn =
    Object.setPrototypeOf ||
    ("__proto__" in {}
      ? (function () {
          var t,
            e = !1,
            n = {}
          try {
            ;(t = Object.getOwnPropertyDescriptor(Object.prototype, "__proto__")
              .set).call(n, []),
              (e = n instanceof Array)
          } catch (t) {}
          return function (n, r) {
            return (
              T(n),
              (function (t) {
                if (!m(t) && null !== t)
                  throw TypeError("Can't set " + String(t) + " as a prototype")
              })(r),
              e ? t.call(n, r) : (n.__proto__ = r),
              n
            )
          }
        })()
      : void 0),
  dn = Zt("match"),
  fn = function (t) {
    var e
    return m(t) && (void 0 !== (e = t[dn]) ? !!e : "RegExp" == p(t))
  },
  hn = Zt("species"),
  gn = A.f,
  mn = ht.f,
  vn = G.set,
  yn = Zt("match"),
  kn = r.RegExp,
  bn = kn.prototype,
  wn = /a/g,
  xn = /a/g,
  Sn = new kn(wn) !== wn,
  En = Rt.UNSUPPORTED_Y
if (
  a &&
  Et(
    "RegExp",
    !Sn ||
      En ||
      i(function () {
        return (
          (xn[yn] = !1), kn(wn) != wn || kn(xn) == xn || "/a/i" != kn(wn, "i")
        )
      })
  )
) {
  for (
    var Tn = function (t, e) {
        var n,
          r = this instanceof Tn,
          i = fn(t),
          a = void 0 === e
        if (!r && i && t.constructor === Tn && a) return t
        Sn
          ? i && !a && (t = t.source)
          : t instanceof Tn && (a && (e = At.call(t)), (t = t.source)),
          En && (n = !!e && e.indexOf("y") > -1) && (e = e.replace(/y/g, ""))
        var o,
          l,
          s,
          c,
          u,
          p =
            ((o = Sn ? new kn(t, e) : kn(t, e)),
            (l = r ? this : bn),
            (s = Tn),
            pn &&
              "function" == typeof (c = l.constructor) &&
              c !== s &&
              m((u = c.prototype)) &&
              u !== s.prototype &&
              pn(o, u),
            o)
        return En && n && vn(p, { sticky: n }), p
      },
      _n = function (t) {
        ;(t in Tn) ||
          gn(Tn, t, {
            configurable: !0,
            get: function () {
              return kn[t]
            },
            set: function (e) {
              kn[t] = e
            },
          })
      },
      An = mn(kn),
      zn = 0;
    An.length > zn;

  )
    _n(An[zn++])
  ;(bn.constructor = Tn), (Tn.prototype = bn), X(r, "RegExp", Tn)
}
!(function (t) {
  var e = et(t),
    n = A.f
  a &&
    e &&
    !e[hn] &&
    n(e, hn, {
      configurable: !0,
      get: function () {
        return this
      },
    })
})("RegExp")
var Rn,
  On = function (t) {
    if (fn(t)) throw TypeError("The method doesn't accept regular expressions")
    return t
  },
  In = Zt("match"),
  $n = function (t) {
    var e = /./
    try {
      "/./"[t](e)
    } catch (n) {
      try {
        return (e[In] = !1), "/./"[t](e)
      } catch (t) {}
    }
    return !1
  },
  Cn = E.f,
  Ln = "".endsWith,
  Pn = Math.min,
  Mn = $n("endsWith")
_t(
  {
    target: "String",
    proto: !0,
    forced:
      !!(Mn || ((Rn = Cn(String.prototype, "endsWith")), !Rn || Rn.writable)) &&
      !Mn,
  },
  {
    endsWith: function (t) {
      var e = String(h(this))
      On(t)
      var n = arguments.length > 1 ? arguments[1] : void 0,
        r = ot(e.length),
        i = void 0 === n ? r : Pn(ot(n), r),
        a = String(t)
      return Ln ? Ln.call(e, a, i) : e.slice(i - a.length, i) === a
    },
  }
)
var jn = Zt("species"),
  Nn = [].push,
  qn = Math.min,
  Un = !i(function () {
    return !RegExp(4294967295, "y")
  })
Yt(
  "split",
  2,
  function (t, e, n) {
    var r
    return (
      (r =
        "c" == "abbc".split(/(b)*/)[1] ||
        4 != "test".split(/(?:)/, -1).length ||
        2 != "ab".split(/(?:ab)*/).length ||
        4 != ".".split(/(.?)(.?)/).length ||
        ".".split(/()()/).length > 1 ||
        "".split(/.?/).length
          ? function (t, n) {
              var r = String(h(this)),
                i = void 0 === n ? 4294967295 : n >>> 0
              if (0 === i) return []
              if (void 0 === t) return [r]
              if (!fn(t)) return e.call(r, t, i)
              for (
                var a,
                  o,
                  l,
                  s = [],
                  c =
                    (t.ignoreCase ? "i" : "") +
                    (t.multiline ? "m" : "") +
                    (t.unicode ? "u" : "") +
                    (t.sticky ? "y" : ""),
                  u = 0,
                  p = new RegExp(t.source, c + "g");
                (a = Mt.call(p, r)) &&
                !(
                  (o = p.lastIndex) > u &&
                  (s.push(r.slice(u, a.index)),
                  a.length > 1 && a.index < r.length && Nn.apply(s, a.slice(1)),
                  (l = a[0].length),
                  (u = o),
                  s.length >= i)
                );

              )
                p.lastIndex === a.index && p.lastIndex++
              return (
                u === r.length
                  ? (!l && p.test("")) || s.push("")
                  : s.push(r.slice(u)),
                s.length > i ? s.slice(0, i) : s
              )
            }
          : "0".split(void 0, 0).length
          ? function (t, n) {
              return void 0 === t && 0 === n ? [] : e.call(this, t, n)
            }
          : e),
      [
        function (e, n) {
          var i = h(this),
            a = null == e ? void 0 : e[t]
          return void 0 !== a ? a.call(e, i, n) : r.call(String(i), e, n)
        },
        function (t, i) {
          var a = n(r, t, this, i, r !== e)
          if (a.done) return a.value
          var o = T(t),
            l = String(this),
            s = (function (t, e) {
              var n,
                r = T(t).constructor
              return void 0 === r || null == (n = T(r)[jn]) ? e : De(n)
            })(o, RegExp),
            c = o.unicode,
            u =
              (o.ignoreCase ? "i" : "") +
              (o.multiline ? "m" : "") +
              (o.unicode ? "u" : "") +
              (Un ? "y" : "g"),
            p = new s(Un ? o : "^(?:" + o.source + ")", u),
            d = void 0 === i ? 4294967295 : i >>> 0
          if (0 === d) return []
          if (0 === l.length) return null === Qt(p, l) ? [l] : []
          for (var f = 0, h = 0, g = []; h < l.length; ) {
            p.lastIndex = Un ? h : 0
            var m,
              v = Qt(p, Un ? l : l.slice(h))
            if (
              null === v ||
              (m = qn(ot(p.lastIndex + (Un ? 0 : h)), l.length)) === f
            )
              h = Xt(l, h, c)
            else {
              if ((g.push(l.slice(f, h)), g.length === d)) return g
              for (var y = 1; y <= v.length - 1; y++)
                if ((g.push(v[y]), g.length === d)) return g
              h = f = m
            }
          }
          return g.push(l.slice(f)), g
        },
      ]
    )
  },
  !Un
)
var Dn = E.f,
  Zn = "".startsWith,
  Wn = Math.min,
  Kn = $n("startsWith")
_t(
  {
    target: "String",
    proto: !0,
    forced:
      !(
        !Kn &&
        !!(function () {
          var t = Dn(String.prototype, "startsWith")
          return t && !t.writable
        })()
      ) && !Kn,
  },
  {
    startsWith: function (t) {
      var e = String(h(this))
      On(t)
      var n = ot(Wn(arguments.length > 1 ? arguments[1] : void 0, e.length)),
        r = String(t)
      return Zn ? Zn.call(e, r, n) : e.slice(n, n + r.length) === r
    },
  }
)
var Jn = "\t\n\v\f\r                　\u2028\u2029\ufeff",
  Fn = "[" + Jn + "]",
  Hn = RegExp("^" + Fn + Fn + "*"),
  Bn = RegExp(Fn + Fn + "*$"),
  Yn = function (t) {
    return function (e) {
      var n = String(h(e))
      return (
        1 & t && (n = n.replace(Hn, "")), 2 & t && (n = n.replace(Bn, "")), n
      )
    }
  },
  Vn = { start: Yn(1), end: Yn(2), trim: Yn(3) },
  Gn = function (t) {
    return i(function () {
      return !!Jn[t]() || "​᠎" != "​᠎"[t]() || Jn[t].name !== t
    })
  },
  Xn = Vn.trim
_t(
  { target: "String", proto: !0, forced: Gn("trim") },
  {
    trim: function () {
      return Xn(this)
    },
  }
)
var Qn = Vn.end,
  tr = Gn("trimEnd"),
  er = tr
    ? function () {
        return Qn(this)
      }
    : "".trimEnd
_t({ target: "String", proto: !0, forced: tr }, { trimEnd: er, trimRight: er })
var nr = e(function (t) {
    function e() {
      return {
        baseUrl: null,
        breaks: !1,
        gfm: !0,
        headerIds: !0,
        headerPrefix: "",
        highlight: null,
        langPrefix: "language-",
        mangle: !0,
        pedantic: !1,
        renderer: null,
        sanitize: !1,
        sanitizer: null,
        silent: !1,
        smartLists: !1,
        smartypants: !1,
        tokenizer: null,
        walkTokens: null,
        xhtml: !1,
      }
    }
    t.exports = {
      defaults: {
        baseUrl: null,
        breaks: !1,
        gfm: !0,
        headerIds: !0,
        headerPrefix: "",
        highlight: null,
        langPrefix: "language-",
        mangle: !0,
        pedantic: !1,
        renderer: null,
        sanitize: !1,
        sanitizer: null,
        silent: !1,
        smartLists: !1,
        smartypants: !1,
        tokenizer: null,
        walkTokens: null,
        xhtml: !1,
      },
      getDefaults: e,
      changeDefaults: function (e) {
        t.exports.defaults = e
      },
    }
  }),
  rr = tn("splice"),
  ir = Oe("splice", { ACCESSORS: !0, 0: 0, 1: 2 }),
  ar = Math.max,
  or = Math.min
_t(
  { target: "Array", proto: !0, forced: !rr || !ir },
  {
    splice: function (t, e) {
      var n,
        r,
        i,
        a,
        o,
        l,
        s = ye(this),
        c = ot(s.length),
        u = ct(t, c),
        p = arguments.length
      if (
        (0 === p
          ? (n = r = 0)
          : 1 === p
          ? ((n = 0), (r = c - u))
          : ((n = p - 2), (r = or(ar(it(e), 0), c - u))),
        c + n - r > 9007199254740991)
      )
        throw TypeError("Maximum allowed length exceeded")
      for (i = Ke(s, r), a = 0; a < r; a++) (o = u + a) in s && an(i, a, s[o])
      if (((i.length = r), n < r)) {
        for (a = u; a < c - r; a++)
          (l = a + n), (o = a + r) in s ? (s[l] = s[o]) : delete s[l]
        for (a = c; a > c - r + n; a--) delete s[a - 1]
      } else if (n > r)
        for (a = c - r; a > u; a--)
          (l = a + n - 1), (o = a + r - 1) in s ? (s[l] = s[o]) : delete s[l]
      for (a = 0; a < n; a++) s[a + u] = arguments[a + 2]
      return (s.length = c - r + n), i
    },
  }
)
var lr = /[&<>"']/,
  sr = /[&<>"']/g,
  cr = /[<>"']|&(?!#?\w+;)/,
  ur = /[<>"']|&(?!#?\w+;)/g,
  pr = { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" },
  dr = function (t) {
    return pr[t]
  }
var fr = /&(#(?:\d+)|(?:#x[0-9A-Fa-f]+)|(?:\w+));?/gi
function hr(t) {
  return t.replace(fr, function (t, e) {
    return "colon" === (e = e.toLowerCase())
      ? ":"
      : "#" === e.charAt(0)
      ? "x" === e.charAt(1)
        ? String.fromCharCode(parseInt(e.substring(2), 16))
        : String.fromCharCode(+e.substring(1))
      : ""
  })
}
var gr = /(^|[^\[])\^/g
var mr = /[^\w:]/g,
  vr = /^$|^[a-z][a-z0-9+.-]*:|^[?#]/i
var yr = {},
  kr = /^[^:]+:\/*[^/]*$/,
  br = /^([^:]+:)[\s\S]*$/,
  wr = /^([^:]+:\/*[^/]*)[\s\S]*$/
function xr(t, e) {
  yr[" " + t] ||
    (kr.test(t) ? (yr[" " + t] = t + "/") : (yr[" " + t] = Sr(t, "/", !0)))
  var n = -1 === (t = yr[" " + t]).indexOf(":")
  return "//" === e.substring(0, 2)
    ? n
      ? e
      : t.replace(br, "$1") + e
    : "/" === e.charAt(0)
    ? n
      ? e
      : t.replace(wr, "$1") + e
    : t + e
}
function Sr(t, e, n) {
  var r = t.length
  if (0 === r) return ""
  for (var i = 0; i < r; ) {
    var a = t.charAt(r - i - 1)
    if (a !== e || n) {
      if (a === e || !n) break
      i++
    } else i++
  }
  return t.substr(0, r - i)
}
var Er = function (t, e) {
    if (e) {
      if (lr.test(t)) return t.replace(sr, dr)
    } else if (cr.test(t)) return t.replace(ur, dr)
    return t
  },
  Tr = hr,
  _r = function (t, e) {
    ;(t = t.source || t), (e = e || "")
    var n = {
      replace: function (e, r) {
        return (
          (r = (r = r.source || r).replace(gr, "$1")), (t = t.replace(e, r)), n
        )
      },
      getRegex: function () {
        return new RegExp(t, e)
      },
    }
    return n
  },
  Ar = function (t, e, n) {
    if (t) {
      var r
      try {
        r = decodeURIComponent(hr(n)).replace(mr, "").toLowerCase()
      } catch (t) {
        return null
      }
      if (
        0 === r.indexOf("javascript:") ||
        0 === r.indexOf("vbscript:") ||
        0 === r.indexOf("data:")
      )
        return null
    }
    e && !vr.test(n) && (n = xr(e, n))
    try {
      n = encodeURI(n).replace(/%25/g, "%")
    } catch (t) {
      return null
    }
    return n
  },
  zr = { exec: function () {} },
  Rr = function (t) {
    for (var e, n, r = 1; r < arguments.length; r++)
      for (n in (e = arguments[r]))
        Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n])
    return t
  },
  Or = function (t, e) {
    var n = t
        .replace(/\|/g, function (t, e, n) {
          for (var r = !1, i = e; --i >= 0 && "\\" === n[i]; ) r = !r
          return r ? "|" : " |"
        })
        .split(/ \|/),
      r = 0
    if (n.length > e) n.splice(e)
    else for (; n.length < e; ) n.push("")
    for (; r < n.length; r++) n[r] = n[r].trim().replace(/\\\|/g, "|")
    return n
  },
  Ir = Sr,
  $r = function (t, e) {
    if (-1 === t.indexOf(e[1])) return -1
    for (var n = t.length, r = 0, i = 0; i < n; i++)
      if ("\\" === t[i]) i++
      else if (t[i] === e[0]) r++
      else if (t[i] === e[1] && --r < 0) return i
    return -1
  },
  Cr = function (t) {
    t &&
      t.sanitize &&
      !t.silent &&
      console.warn(
        "marked(): sanitize and sanitizer parameters are deprecated since version 0.7.0, should not be used and will be removed in the future. Read more here: https://marked.js.org/#/USING_ADVANCED.md#options"
      )
  },
  Lr = nr.defaults,
  Pr = Ir,
  Mr = Or,
  jr = Er,
  Nr = $r
function qr(t, e, n) {
  var r = e.href,
    i = e.title ? jr(e.title) : null
  return "!" !== t[0].charAt(0)
    ? { type: "link", raw: n, href: r, title: i, text: t[1] }
    : { type: "image", raw: n, text: jr(t[1]), href: r, title: i }
}
var Ur = (function () {
    function t(e) {
      pe(this, t), (this.options = e || Lr)
    }
    return (
      fe(t, [
        {
          key: "space",
          value: function (t) {
            var e = this.rules.block.newline.exec(t)
            if (e)
              return e[0].length > 1
                ? { type: "space", raw: e[0] }
                : { raw: "\n" }
          },
        },
        {
          key: "code",
          value: function (t, e) {
            var n = this.rules.block.code.exec(t)
            if (n) {
              var r = e[e.length - 1]
              if (r && "paragraph" === r.type)
                return { raw: n[0], text: n[0].trimRight() }
              var i = n[0].replace(/^ {4}/gm, "")
              return {
                type: "code",
                raw: n[0],
                codeBlockStyle: "indented",
                text: this.options.pedantic ? i : Pr(i, "\n"),
              }
            }
          },
        },
        {
          key: "fences",
          value: function (t) {
            var e = this.rules.block.fences.exec(t)
            if (e) {
              var n = e[0],
                r = (function (t, e) {
                  var n = t.match(/^(\s+)(?:```)/)
                  if (null === n) return e
                  var r = n[1]
                  return e
                    .split("\n")
                    .map(function (t) {
                      var e = t.match(/^\s+/)
                      return null === e
                        ? t
                        : he(e, 1)[0].length >= r.length
                        ? t.slice(r.length)
                        : t
                    })
                    .join("\n")
                })(n, e[3] || "")
              return {
                type: "code",
                raw: n,
                lang: e[2] ? e[2].trim() : e[2],
                text: r,
              }
            }
          },
        },
        {
          key: "heading",
          value: function (t) {
            var e = this.rules.block.heading.exec(t)
            if (e)
              return {
                type: "heading",
                raw: e[0],
                depth: e[1].length,
                text: e[2],
              }
          },
        },
        {
          key: "nptable",
          value: function (t) {
            var e = this.rules.block.nptable.exec(t)
            if (e) {
              var n = {
                type: "table",
                header: Mr(e[1].replace(/^ *| *\| *$/g, "")),
                align: e[2].replace(/^ *|\| *$/g, "").split(/ *\| */),
                cells: e[3] ? e[3].replace(/\n$/, "").split("\n") : [],
                raw: e[0],
              }
              if (n.header.length === n.align.length) {
                var r,
                  i = n.align.length
                for (r = 0; r < i; r++)
                  /^ *-+: *$/.test(n.align[r])
                    ? (n.align[r] = "right")
                    : /^ *:-+: *$/.test(n.align[r])
                    ? (n.align[r] = "center")
                    : /^ *:-+ *$/.test(n.align[r])
                    ? (n.align[r] = "left")
                    : (n.align[r] = null)
                for (i = n.cells.length, r = 0; r < i; r++)
                  n.cells[r] = Mr(n.cells[r], n.header.length)
                return n
              }
            }
          },
        },
        {
          key: "hr",
          value: function (t) {
            var e = this.rules.block.hr.exec(t)
            if (e) return { type: "hr", raw: e[0] }
          },
        },
        {
          key: "blockquote",
          value: function (t) {
            var e = this.rules.block.blockquote.exec(t)
            if (e) {
              var n = e[0].replace(/^ *> ?/gm, "")
              return { type: "blockquote", raw: e[0], text: n }
            }
          },
        },
        {
          key: "list",
          value: function (t) {
            var e = this.rules.block.list.exec(t)
            if (e) {
              for (
                var n,
                  r,
                  i,
                  a,
                  o,
                  l,
                  s,
                  c = e[0],
                  u = e[2],
                  p = u.length > 1,
                  d = {
                    type: "list",
                    raw: c,
                    ordered: p,
                    start: p ? +u : "",
                    loose: !1,
                    items: [],
                  },
                  f = e[0].match(this.rules.block.item),
                  h = !1,
                  g = f.length,
                  m = 0;
                m < g;
                m++
              )
                (c = n = f[m]),
                  (r = n.length),
                  ~(n = n.replace(/^ *([*+-]|\d+\.) */, "")).indexOf("\n ") &&
                    ((r -= n.length),
                    (n = this.options.pedantic
                      ? n.replace(/^ {1,4}/gm, "")
                      : n.replace(new RegExp("^ {1," + r + "}", "gm"), ""))),
                  m !== g - 1 &&
                    ((i = this.rules.block.bullet.exec(f[m + 1])[0]),
                    (u.length > 1
                      ? 1 === i.length
                      : i.length > 1 || (this.options.smartLists && i !== u)) &&
                      ((a = f.slice(m + 1).join("\n")),
                      (d.raw = d.raw.substring(0, d.raw.length - a.length)),
                      (m = g - 1))),
                  (o = h || /\n\n(?!\s*$)/.test(n)),
                  m !== g - 1 &&
                    ((h = "\n" === n.charAt(n.length - 1)), o || (o = h)),
                  o && (d.loose = !0),
                  (s = void 0),
                  (l = /^\[[ xX]\] /.test(n)) &&
                    ((s = " " !== n[1]), (n = n.replace(/^\[[ xX]\] +/, ""))),
                  d.items.push({
                    type: "list_item",
                    raw: c,
                    task: l,
                    checked: s,
                    loose: o,
                    text: n,
                  })
              return d
            }
          },
        },
        {
          key: "html",
          value: function (t) {
            var e = this.rules.block.html.exec(t)
            if (e)
              return {
                type: this.options.sanitize ? "paragraph" : "html",
                raw: e[0],
                pre:
                  !this.options.sanitizer &&
                  ("pre" === e[1] || "script" === e[1] || "style" === e[1]),
                text: this.options.sanitize
                  ? this.options.sanitizer
                    ? this.options.sanitizer(e[0])
                    : jr(e[0])
                  : e[0],
              }
          },
        },
        {
          key: "def",
          value: function (t) {
            var e = this.rules.block.def.exec(t)
            if (e)
              return (
                e[3] && (e[3] = e[3].substring(1, e[3].length - 1)),
                {
                  tag: e[1].toLowerCase().replace(/\s+/g, " "),
                  raw: e[0],
                  href: e[2],
                  title: e[3],
                }
              )
          },
        },
        {
          key: "table",
          value: function (t) {
            var e = this.rules.block.table.exec(t)
            if (e) {
              var n = {
                type: "table",
                header: Mr(e[1].replace(/^ *| *\| *$/g, "")),
                align: e[2].replace(/^ *|\| *$/g, "").split(/ *\| */),
                cells: e[3] ? e[3].replace(/\n$/, "").split("\n") : [],
              }
              if (n.header.length === n.align.length) {
                n.raw = e[0]
                var r,
                  i = n.align.length
                for (r = 0; r < i; r++)
                  /^ *-+: *$/.test(n.align[r])
                    ? (n.align[r] = "right")
                    : /^ *:-+: *$/.test(n.align[r])
                    ? (n.align[r] = "center")
                    : /^ *:-+ *$/.test(n.align[r])
                    ? (n.align[r] = "left")
                    : (n.align[r] = null)
                for (i = n.cells.length, r = 0; r < i; r++)
                  n.cells[r] = Mr(
                    n.cells[r].replace(/^ *\| *| *\| *$/g, ""),
                    n.header.length
                  )
                return n
              }
            }
          },
        },
        {
          key: "lheading",
          value: function (t) {
            var e = this.rules.block.lheading.exec(t)
            if (e)
              return {
                type: "heading",
                raw: e[0],
                depth: "=" === e[2].charAt(0) ? 1 : 2,
                text: e[1],
              }
          },
        },
        {
          key: "paragraph",
          value: function (t) {
            var e = this.rules.block.paragraph.exec(t)
            if (e)
              return {
                type: "paragraph",
                raw: e[0],
                text:
                  "\n" === e[1].charAt(e[1].length - 1)
                    ? e[1].slice(0, -1)
                    : e[1],
              }
          },
        },
        {
          key: "text",
          value: function (t, e) {
            var n = this.rules.block.text.exec(t)
            if (n) {
              var r = e[e.length - 1]
              return r && "text" === r.type
                ? { raw: n[0], text: n[0] }
                : { type: "text", raw: n[0], text: n[0] }
            }
          },
        },
        {
          key: "escape",
          value: function (t) {
            var e = this.rules.inline.escape.exec(t)
            if (e) return { type: "escape", raw: e[0], text: jr(e[1]) }
          },
        },
        {
          key: "tag",
          value: function (t, e, n) {
            var r = this.rules.inline.tag.exec(t)
            if (r)
              return (
                !e && /^<a /i.test(r[0])
                  ? (e = !0)
                  : e && /^<\/a>/i.test(r[0]) && (e = !1),
                !n && /^<(pre|code|kbd|script)(\s|>)/i.test(r[0])
                  ? (n = !0)
                  : n &&
                    /^<\/(pre|code|kbd|script)(\s|>)/i.test(r[0]) &&
                    (n = !1),
                {
                  type: this.options.sanitize ? "text" : "html",
                  raw: r[0],
                  inLink: e,
                  inRawBlock: n,
                  text: this.options.sanitize
                    ? this.options.sanitizer
                      ? this.options.sanitizer(r[0])
                      : jr(r[0])
                    : r[0],
                }
              )
          },
        },
        {
          key: "link",
          value: function (t) {
            var e = this.rules.inline.link.exec(t)
            if (e) {
              var n = Nr(e[2], "()")
              if (n > -1) {
                var r = (0 === e[0].indexOf("!") ? 5 : 4) + e[1].length + n
                ;(e[2] = e[2].substring(0, n)),
                  (e[0] = e[0].substring(0, r).trim()),
                  (e[3] = "")
              }
              var i = e[2],
                a = ""
              if (this.options.pedantic) {
                var o = /^([^'"]*[^\s])\s+(['"])(.*)\2/.exec(i)
                o ? ((i = o[1]), (a = o[3])) : (a = "")
              } else a = e[3] ? e[3].slice(1, -1) : ""
              return qr(
                e,
                {
                  href: (i = i.trim().replace(/^<([\s\S]*)>$/, "$1"))
                    ? i.replace(this.rules.inline._escapes, "$1")
                    : i,
                  title: a ? a.replace(this.rules.inline._escapes, "$1") : a,
                },
                e[0]
              )
            }
          },
        },
        {
          key: "reflink",
          value: function (t, e) {
            var n
            if (
              (n = this.rules.inline.reflink.exec(t)) ||
              (n = this.rules.inline.nolink.exec(t))
            ) {
              var r = (n[2] || n[1]).replace(/\s+/g, " ")
              if (!(r = e[r.toLowerCase()]) || !r.href) {
                var i = n[0].charAt(0)
                return { type: "text", raw: i, text: i }
              }
              return qr(n, r, n[0])
            }
          },
        },
        {
          key: "strong",
          value: function (t) {
            var e = this.rules.inline.strong.exec(t)
            if (e)
              return {
                type: "strong",
                raw: e[0],
                text: e[4] || e[3] || e[2] || e[1],
              }
          },
        },
        {
          key: "em",
          value: function (t) {
            var e = this.rules.inline.em.exec(t)
            if (e)
              return {
                type: "em",
                raw: e[0],
                text: e[6] || e[5] || e[4] || e[3] || e[2] || e[1],
              }
          },
        },
        {
          key: "codespan",
          value: function (t) {
            var e = this.rules.inline.code.exec(t)
            if (e) {
              var n = e[2].replace(/\n/g, " "),
                r = /[^ ]/.test(n),
                i = n.startsWith(" ") && n.endsWith(" ")
              return (
                r && i && (n = n.substring(1, n.length - 1)),
                (n = jr(n, !0)),
                { type: "codespan", raw: e[0], text: n }
              )
            }
          },
        },
        {
          key: "br",
          value: function (t) {
            var e = this.rules.inline.br.exec(t)
            if (e) return { type: "br", raw: e[0] }
          },
        },
        {
          key: "del",
          value: function (t) {
            var e = this.rules.inline.del.exec(t)
            if (e) return { type: "del", raw: e[0], text: e[1] }
          },
        },
        {
          key: "autolink",
          value: function (t, e) {
            var n,
              r,
              i = this.rules.inline.autolink.exec(t)
            if (i)
              return (
                (r =
                  "@" === i[2]
                    ? "mailto:" + (n = jr(this.options.mangle ? e(i[1]) : i[1]))
                    : (n = jr(i[1]))),
                {
                  type: "link",
                  raw: i[0],
                  text: n,
                  href: r,
                  tokens: [{ type: "text", raw: n, text: n }],
                }
              )
          },
        },
        {
          key: "url",
          value: function (t, e) {
            var n
            if ((n = this.rules.inline.url.exec(t))) {
              var r, i
              if ("@" === n[2])
                i = "mailto:" + (r = jr(this.options.mangle ? e(n[0]) : n[0]))
              else {
                var a
                do {
                  ;(a = n[0]),
                    (n[0] = this.rules.inline._backpedal.exec(n[0])[0])
                } while (a !== n[0])
                ;(r = jr(n[0])), (i = "www." === n[1] ? "http://" + r : r)
              }
              return {
                type: "link",
                raw: n[0],
                text: r,
                href: i,
                tokens: [{ type: "text", raw: r, text: r }],
              }
            }
          },
        },
        {
          key: "inlineText",
          value: function (t, e, n) {
            var r,
              i = this.rules.inline.text.exec(t)
            if (i)
              return (
                (r = e
                  ? this.options.sanitize
                    ? this.options.sanitizer
                      ? this.options.sanitizer(i[0])
                      : jr(i[0])
                    : i[0]
                  : jr(this.options.smartypants ? n(i[0]) : i[0])),
                { type: "text", raw: i[0], text: r }
              )
          },
        },
      ]),
      t
    )
  })(),
  Dr = zr,
  Zr = _r,
  Wr = Rr,
  Kr = {
    newline: /^\n+/,
    code: /^( {4}[^\n]+\n*)+/,
    fences: /^ {0,3}(`{3,}(?=[^`\n]*\n)|~{3,})([^\n]*)\n(?:|([\s\S]*?)\n)(?: {0,3}\1[~`]* *(?:\n+|$)|$)/,
    hr: /^ {0,3}((?:- *){3,}|(?:_ *){3,}|(?:\* *){3,})(?:\n+|$)/,
    heading: /^ {0,3}(#{1,6}) +([^\n]*?)(?: +#+)? *(?:\n+|$)/,
    blockquote: /^( {0,3}> ?(paragraph|[^\n]*)(?:\n|$))+/,
    list: /^( {0,3})(bull) [\s\S]+?(?:hr|def|\n{2,}(?! )(?!\1bull )\n*|\s*$)/,
    html:
      "^ {0,3}(?:<(script|pre|style)[\\s>][\\s\\S]*?(?:</\\1>[^\\n]*\\n+|$)|comment[^\\n]*(\\n+|$)|<\\?[\\s\\S]*?\\?>\\n*|<![A-Z][\\s\\S]*?>\\n*|<!\\[CDATA\\[[\\s\\S]*?\\]\\]>\\n*|</?(tag)(?: +|\\n|/?>)[\\s\\S]*?(?:\\n{2,}|$)|<(?!script|pre|style)([a-z][\\w-]*)(?:attribute)*? */?>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:\\n{2,}|$)|</(?!script|pre|style)[a-z][\\w-]*\\s*>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:\\n{2,}|$))",
    def: /^ {0,3}\[(label)\]: *\n? *<?([^\s>]+)>?(?:(?: +\n? *| *\n *)(title))? *(?:\n+|$)/,
    nptable: Dr,
    table: Dr,
    lheading: /^([^\n]+)\n {0,3}(=+|-+) *(?:\n+|$)/,
    _paragraph: /^([^\n]+(?:\n(?!hr|heading|lheading|blockquote|fences|list|html)[^\n]+)*)/,
    text: /^[^\n]+/,
    _label: /(?!\s*\])(?:\\[\[\]]|[^\[\]])+/,
    _title: /(?:"(?:\\"?|[^"\\])*"|'[^'\n]*(?:\n[^'\n]+)*\n?'|\([^()]*\))/,
  }
;(Kr.def = Zr(Kr.def)
  .replace("label", Kr._label)
  .replace("title", Kr._title)
  .getRegex()),
  (Kr.bullet = /(?:[*+-]|\d{1,9}\.)/),
  (Kr.item = /^( *)(bull) ?[^\n]*(?:\n(?!\1bull ?)[^\n]*)*/),
  (Kr.item = Zr(Kr.item, "gm").replace(/bull/g, Kr.bullet).getRegex()),
  (Kr.list = Zr(Kr.list)
    .replace(/bull/g, Kr.bullet)
    .replace(
      "hr",
      "\\n+(?=\\1?(?:(?:- *){3,}|(?:_ *){3,}|(?:\\* *){3,})(?:\\n+|$))"
    )
    .replace("def", "\\n+(?=" + Kr.def.source + ")")
    .getRegex()),
  (Kr._tag =
    "address|article|aside|base|basefont|blockquote|body|caption|center|col|colgroup|dd|details|dialog|dir|div|dl|dt|fieldset|figcaption|figure|footer|form|frame|frameset|h[1-6]|head|header|hr|html|iframe|legend|li|link|main|menu|menuitem|meta|nav|noframes|ol|optgroup|option|p|param|section|source|summary|table|tbody|td|tfoot|th|thead|title|tr|track|ul"),
  (Kr._comment = /<!--(?!-?>)[\s\S]*?-->/),
  (Kr.html = Zr(Kr.html, "i")
    .replace("comment", Kr._comment)
    .replace("tag", Kr._tag)
    .replace(
      "attribute",
      / +[a-zA-Z:_][\w.:-]*(?: *= *"[^"\n]*"| *= *'[^'\n]*'| *= *[^\s"'=<>`]+)?/
    )
    .getRegex()),
  (Kr.paragraph = Zr(Kr._paragraph)
    .replace("hr", Kr.hr)
    .replace("heading", " {0,3}#{1,6} ")
    .replace("|lheading", "")
    .replace("blockquote", " {0,3}>")
    .replace("fences", " {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n")
    .replace("list", " {0,3}(?:[*+-]|1[.)]) ")
    .replace("html", "</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|!--)")
    .replace("tag", Kr._tag)
    .getRegex()),
  (Kr.blockquote = Zr(Kr.blockquote)
    .replace("paragraph", Kr.paragraph)
    .getRegex()),
  (Kr.normal = Wr({}, Kr)),
  (Kr.gfm = Wr({}, Kr.normal, {
    nptable:
      "^ *([^|\\n ].*\\|.*)\\n *([-:]+ *\\|[-| :]*)(?:\\n((?:(?!\\n|hr|heading|blockquote|code|fences|list|html).*(?:\\n|$))*)\\n*|$)",
    table:
      "^ *\\|(.+)\\n *\\|?( *[-:]+[-| :]*)(?:\\n *((?:(?!\\n|hr|heading|blockquote|code|fences|list|html).*(?:\\n|$))*)\\n*|$)",
  })),
  (Kr.gfm.nptable = Zr(Kr.gfm.nptable)
    .replace("hr", Kr.hr)
    .replace("heading", " {0,3}#{1,6} ")
    .replace("blockquote", " {0,3}>")
    .replace("code", " {4}[^\\n]")
    .replace("fences", " {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n")
    .replace("list", " {0,3}(?:[*+-]|1[.)]) ")
    .replace("html", "</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|!--)")
    .replace("tag", Kr._tag)
    .getRegex()),
  (Kr.gfm.table = Zr(Kr.gfm.table)
    .replace("hr", Kr.hr)
    .replace("heading", " {0,3}#{1,6} ")
    .replace("blockquote", " {0,3}>")
    .replace("code", " {4}[^\\n]")
    .replace("fences", " {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n")
    .replace("list", " {0,3}(?:[*+-]|1[.)]) ")
    .replace("html", "</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|!--)")
    .replace("tag", Kr._tag)
    .getRegex()),
  (Kr.pedantic = Wr({}, Kr.normal, {
    html: Zr(
      "^ *(?:comment *(?:\\n|\\s*$)|<(tag)[\\s\\S]+?</\\1> *(?:\\n{2,}|\\s*$)|<tag(?:\"[^\"]*\"|'[^']*'|\\s[^'\"/>\\s]*)*?/?> *(?:\\n{2,}|\\s*$))"
    )
      .replace("comment", Kr._comment)
      .replace(
        /tag/g,
        "(?!(?:a|em|strong|small|s|cite|q|dfn|abbr|data|time|code|var|samp|kbd|sub|sup|i|b|u|mark|ruby|rt|rp|bdi|bdo|span|br|wbr|ins|del|img)\\b)\\w+(?!:|[^\\w\\s@]*@)\\b"
      )
      .getRegex(),
    def: /^ *\[([^\]]+)\]: *<?([^\s>]+)>?(?: +(["(][^\n]+[")]))? *(?:\n+|$)/,
    heading: /^ *(#{1,6}) *([^\n]+?) *(?:#+ *)?(?:\n+|$)/,
    fences: Dr,
    paragraph: Zr(Kr.normal._paragraph)
      .replace("hr", Kr.hr)
      .replace("heading", " *#{1,6} *[^\n]")
      .replace("lheading", Kr.lheading)
      .replace("blockquote", " {0,3}>")
      .replace("|fences", "")
      .replace("|list", "")
      .replace("|html", "")
      .getRegex(),
  }))
var Jr = {
  escape: /^\\([!"#$%&'()*+,\-./:;<=>?@\[\]\\^_`{|}~])/,
  autolink: /^<(scheme:[^\s\x00-\x1f<>]*|email)>/,
  url: Dr,
  tag:
    "^comment|^</[a-zA-Z][\\w:-]*\\s*>|^<[a-zA-Z][\\w-]*(?:attribute)*?\\s*/?>|^<\\?[\\s\\S]*?\\?>|^<![a-zA-Z]+\\s[\\s\\S]*?>|^<!\\[CDATA\\[[\\s\\S]*?\\]\\]>",
  link: /^!?\[(label)\]\(\s*(href)(?:\s+(title))?\s*\)/,
  reflink: /^!?\[(label)\]\[(?!\s*\])((?:\\[\[\]]?|[^\[\]\\])+)\]/,
  nolink: /^!?\[(?!\s*\])((?:\[[^\[\]]*\]|\\[\[\]]|[^\[\]])*)\](?:\[\])?/,
  strong: /^__([^\s_])__(?!_)|^\*\*([^\s*])\*\*(?!\*)|^__([^\s][\s\S]*?[^\s])__(?!_)|^\*\*([^\s][\s\S]*?[^\s])\*\*(?!\*)/,
  em: /^_([^\s_])_(?!_)|^_([^\s_<][\s\S]*?[^\s_])_(?!_|[^\s,punctuation])|^_([^\s_<][\s\S]*?[^\s])_(?!_|[^\s,punctuation])|^\*([^\s*<\[])\*(?!\*)|^\*([^\s<"][\s\S]*?[^\s\[\*])\*(?![\]`punctuation])|^\*([^\s*"<\[][\s\S]*[^\s])\*(?!\*)/,
  code: /^(`+)([^`]|[^`][\s\S]*?[^`])\1(?!`)/,
  br: /^( {2,}|\\)\n(?!\s*$)/,
  del: Dr,
  text: /^(`+|[^`])(?:[\s\S]*?(?:(?=[\\<!\[`*]|\b_|$)|[^ ](?= {2,}\n))|(?= {2,}\n))/,
  _punctuation: "!\"#$%&'()*+\\-./:;<=>?@\\[^_{|}~",
}
;(Jr.em = Zr(Jr.em)
  .replace(/punctuation/g, Jr._punctuation)
  .getRegex()),
  (Jr._escapes = /\\([!"#$%&'()*+,\-./:;<=>?@\[\]\\^_`{|}~])/g),
  (Jr._scheme = /[a-zA-Z][a-zA-Z0-9+.-]{1,31}/),
  (Jr._email = /[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+(@)[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+(?![-_])/),
  (Jr.autolink = Zr(Jr.autolink)
    .replace("scheme", Jr._scheme)
    .replace("email", Jr._email)
    .getRegex()),
  (Jr._attribute = /\s+[a-zA-Z:_][\w.:-]*(?:\s*=\s*"[^"]*"|\s*=\s*'[^']*'|\s*=\s*[^\s"'=<>`]+)?/),
  (Jr.tag = Zr(Jr.tag)
    .replace("comment", Kr._comment)
    .replace("attribute", Jr._attribute)
    .getRegex()),
  (Jr._label = /(?:\[[^\[\]]*\]|\\.|`[^`]*`|[^\[\]\\`])*?/),
  (Jr._href = /<(?:\\[<>]?|[^\s<>\\])*>|[^\s\x00-\x1f]*/),
  (Jr._title = /"(?:\\"?|[^"\\])*"|'(?:\\'?|[^'\\])*'|\((?:\\\)?|[^)\\])*\)/),
  (Jr.link = Zr(Jr.link)
    .replace("label", Jr._label)
    .replace("href", Jr._href)
    .replace("title", Jr._title)
    .getRegex()),
  (Jr.reflink = Zr(Jr.reflink).replace("label", Jr._label).getRegex()),
  (Jr.normal = Wr({}, Jr)),
  (Jr.pedantic = Wr({}, Jr.normal, {
    strong: /^__(?=\S)([\s\S]*?\S)__(?!_)|^\*\*(?=\S)([\s\S]*?\S)\*\*(?!\*)/,
    em: /^_(?=\S)([\s\S]*?\S)_(?!_)|^\*(?=\S)([\s\S]*?\S)\*(?!\*)/,
    link: Zr(/^!?\[(label)\]\((.*?)\)/)
      .replace("label", Jr._label)
      .getRegex(),
    reflink: Zr(/^!?\[(label)\]\s*\[([^\]]*)\]/)
      .replace("label", Jr._label)
      .getRegex(),
  })),
  (Jr.gfm = Wr({}, Jr.normal, {
    escape: Zr(Jr.escape).replace("])", "~|])").getRegex(),
    _extended_email: /[A-Za-z0-9._+-]+(@)[a-zA-Z0-9-_]+(?:\.[a-zA-Z0-9-_]*[a-zA-Z0-9])+(?![-_])/,
    url: /^((?:ftp|https?):\/\/|www\.)(?:[a-zA-Z0-9\-]+\.?)+[^\s<]*|^email/,
    _backpedal: /(?:[^?!.,:;*_~()&]+|\([^)]*\)|&(?![a-zA-Z0-9]+;$)|[?!.,:;*_~)]+(?!$))+/,
    del: /^~+(?=\S)([\s\S]*?\S)~+/,
    text: /^(`+|[^`])(?:[\s\S]*?(?:(?=[\\<!\[`*~]|\b_|https?:\/\/|ftp:\/\/|www\.|$)|[^ ](?= {2,}\n)|[^a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-](?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@))|(?= {2,}\n|[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@))/,
  })),
  (Jr.gfm.url = Zr(Jr.gfm.url, "i")
    .replace("email", Jr.gfm._extended_email)
    .getRegex()),
  (Jr.breaks = Wr({}, Jr.gfm, {
    br: Zr(Jr.br).replace("{2,}", "*").getRegex(),
    text: Zr(Jr.gfm.text)
      .replace("\\b_", "\\b_| {2,}\\n")
      .replace(/\{2,\}/g, "*")
      .getRegex(),
  }))
var Fr = { block: Kr, inline: Jr },
  Hr = nr.defaults,
  Br = Fr.block,
  Yr = Fr.inline
function Vr(t) {
  return t
    .replace(/---/g, "—")
    .replace(/--/g, "–")
    .replace(/(^|[-\u2014/(\[{"\s])'/g, "$1‘")
    .replace(/'/g, "’")
    .replace(/(^|[-\u2014/(\[{\u2018\s])"/g, "$1“")
    .replace(/"/g, "”")
    .replace(/\.{3}/g, "…")
}
function Gr(t) {
  var e,
    n,
    r = "",
    i = t.length
  for (e = 0; e < i; e++)
    (n = t.charCodeAt(e)),
      Math.random() > 0.5 && (n = "x" + n.toString(16)),
      (r += "&#" + n + ";")
  return r
}
var Xr = (function () {
    function t(e) {
      pe(this, t),
        (this.tokens = []),
        (this.tokens.links = Object.create(null)),
        (this.options = e || Hr),
        (this.options.tokenizer = this.options.tokenizer || new Ur()),
        (this.tokenizer = this.options.tokenizer),
        (this.tokenizer.options = this.options)
      var n = { block: Br.normal, inline: Yr.normal }
      this.options.pedantic
        ? ((n.block = Br.pedantic), (n.inline = Yr.pedantic))
        : this.options.gfm &&
          ((n.block = Br.gfm),
          this.options.breaks ? (n.inline = Yr.breaks) : (n.inline = Yr.gfm)),
        (this.tokenizer.rules = n)
    }
    return (
      fe(
        t,
        [
          {
            key: "lex",
            value: function (t) {
              return (
                (t = t.replace(/\r\n|\r/g, "\n").replace(/\t/g, "    ")),
                this.blockTokens(t, this.tokens, !0),
                this.inline(this.tokens),
                this.tokens
              )
            },
          },
          {
            key: "blockTokens",
            value: function (t) {
              var e,
                n,
                r,
                i,
                a =
                  arguments.length > 1 && void 0 !== arguments[1]
                    ? arguments[1]
                    : [],
                o =
                  !(arguments.length > 2 && void 0 !== arguments[2]) ||
                  arguments[2]
              for (t = t.replace(/^ +$/gm, ""); t; )
                if ((e = this.tokenizer.space(t)))
                  (t = t.substring(e.raw.length)), e.type && a.push(e)
                else if ((e = this.tokenizer.code(t, a)))
                  (t = t.substring(e.raw.length)),
                    e.type
                      ? a.push(e)
                      : (((i = a[a.length - 1]).raw += "\n" + e.raw),
                        (i.text += "\n" + e.text))
                else if ((e = this.tokenizer.fences(t)))
                  (t = t.substring(e.raw.length)), a.push(e)
                else if ((e = this.tokenizer.heading(t)))
                  (t = t.substring(e.raw.length)), a.push(e)
                else if ((e = this.tokenizer.nptable(t)))
                  (t = t.substring(e.raw.length)), a.push(e)
                else if ((e = this.tokenizer.hr(t)))
                  (t = t.substring(e.raw.length)), a.push(e)
                else if ((e = this.tokenizer.blockquote(t)))
                  (t = t.substring(e.raw.length)),
                    (e.tokens = this.blockTokens(e.text, [], o)),
                    a.push(e)
                else if ((e = this.tokenizer.list(t))) {
                  for (
                    t = t.substring(e.raw.length), r = e.items.length, n = 0;
                    n < r;
                    n++
                  )
                    e.items[n].tokens = this.blockTokens(
                      e.items[n].text,
                      [],
                      !1
                    )
                  a.push(e)
                } else if ((e = this.tokenizer.html(t)))
                  (t = t.substring(e.raw.length)), a.push(e)
                else if (o && (e = this.tokenizer.def(t)))
                  (t = t.substring(e.raw.length)),
                    this.tokens.links[e.tag] ||
                      (this.tokens.links[e.tag] = {
                        href: e.href,
                        title: e.title,
                      })
                else if ((e = this.tokenizer.table(t)))
                  (t = t.substring(e.raw.length)), a.push(e)
                else if ((e = this.tokenizer.lheading(t)))
                  (t = t.substring(e.raw.length)), a.push(e)
                else if (o && (e = this.tokenizer.paragraph(t)))
                  (t = t.substring(e.raw.length)), a.push(e)
                else if ((e = this.tokenizer.text(t, a)))
                  (t = t.substring(e.raw.length)),
                    e.type
                      ? a.push(e)
                      : (((i = a[a.length - 1]).raw += "\n" + e.raw),
                        (i.text += "\n" + e.text))
                else if (t) {
                  var l = "Infinite loop on byte: " + t.charCodeAt(0)
                  if (this.options.silent) {
                    console.error(l)
                    break
                  }
                  throw new Error(l)
                }
              return a
            },
          },
          {
            key: "inline",
            value: function (t) {
              var e,
                n,
                r,
                i,
                a,
                o,
                l = t.length
              for (e = 0; e < l; e++)
                switch ((o = t[e]).type) {
                  case "paragraph":
                  case "text":
                  case "heading":
                    ;(o.tokens = []), this.inlineTokens(o.text, o.tokens)
                    break
                  case "table":
                    for (
                      o.tokens = { header: [], cells: [] },
                        i = o.header.length,
                        n = 0;
                      n < i;
                      n++
                    )
                      (o.tokens.header[n] = []),
                        this.inlineTokens(o.header[n], o.tokens.header[n])
                    for (i = o.cells.length, n = 0; n < i; n++)
                      for (
                        a = o.cells[n], o.tokens.cells[n] = [], r = 0;
                        r < a.length;
                        r++
                      )
                        (o.tokens.cells[n][r] = []),
                          this.inlineTokens(a[r], o.tokens.cells[n][r])
                    break
                  case "blockquote":
                    this.inline(o.tokens)
                    break
                  case "list":
                    for (i = o.items.length, n = 0; n < i; n++)
                      this.inline(o.items[n].tokens)
                }
              return t
            },
          },
          {
            key: "inlineTokens",
            value: function (t) {
              for (
                var e,
                  n =
                    arguments.length > 1 && void 0 !== arguments[1]
                      ? arguments[1]
                      : [],
                  r =
                    arguments.length > 2 &&
                    void 0 !== arguments[2] &&
                    arguments[2],
                  i =
                    arguments.length > 3 &&
                    void 0 !== arguments[3] &&
                    arguments[3];
                t;

              )
                if ((e = this.tokenizer.escape(t)))
                  (t = t.substring(e.raw.length)), n.push(e)
                else if ((e = this.tokenizer.tag(t, r, i)))
                  (t = t.substring(e.raw.length)),
                    (r = e.inLink),
                    (i = e.inRawBlock),
                    n.push(e)
                else if ((e = this.tokenizer.link(t)))
                  (t = t.substring(e.raw.length)),
                    "link" === e.type &&
                      (e.tokens = this.inlineTokens(e.text, [], !0, i)),
                    n.push(e)
                else if ((e = this.tokenizer.reflink(t, this.tokens.links)))
                  (t = t.substring(e.raw.length)),
                    "link" === e.type &&
                      (e.tokens = this.inlineTokens(e.text, [], !0, i)),
                    n.push(e)
                else if ((e = this.tokenizer.strong(t)))
                  (t = t.substring(e.raw.length)),
                    (e.tokens = this.inlineTokens(e.text, [], r, i)),
                    n.push(e)
                else if ((e = this.tokenizer.em(t)))
                  (t = t.substring(e.raw.length)),
                    (e.tokens = this.inlineTokens(e.text, [], r, i)),
                    n.push(e)
                else if ((e = this.tokenizer.codespan(t)))
                  (t = t.substring(e.raw.length)), n.push(e)
                else if ((e = this.tokenizer.br(t)))
                  (t = t.substring(e.raw.length)), n.push(e)
                else if ((e = this.tokenizer.del(t)))
                  (t = t.substring(e.raw.length)),
                    (e.tokens = this.inlineTokens(e.text, [], r, i)),
                    n.push(e)
                else if ((e = this.tokenizer.autolink(t, Gr)))
                  (t = t.substring(e.raw.length)), n.push(e)
                else if (r || !(e = this.tokenizer.url(t, Gr))) {
                  if ((e = this.tokenizer.inlineText(t, i, Vr)))
                    (t = t.substring(e.raw.length)), n.push(e)
                  else if (t) {
                    var a = "Infinite loop on byte: " + t.charCodeAt(0)
                    if (this.options.silent) {
                      console.error(a)
                      break
                    }
                    throw new Error(a)
                  }
                } else (t = t.substring(e.raw.length)), n.push(e)
              return n
            },
          },
        ],
        [
          {
            key: "lex",
            value: function (e, n) {
              return new t(n).lex(e)
            },
          },
          {
            key: "rules",
            get: function () {
              return { block: Br, inline: Yr }
            },
          },
        ]
      ),
      t
    )
  })(),
  Qr = nr.defaults,
  ti = Ar,
  ei = Er,
  ni = (function () {
    function t(e) {
      pe(this, t), (this.options = e || Qr)
    }
    return (
      fe(t, [
        {
          key: "code",
          value: function (t, e, n) {
            var r = (e || "").match(/\S*/)[0]
            if (this.options.highlight) {
              var i = this.options.highlight(t, r)
              null != i && i !== t && ((n = !0), (t = i))
            }
            return r
              ? '<pre><code class="' +
                  this.options.langPrefix +
                  ei(r, !0) +
                  '">' +
                  (n ? t : ei(t, !0)) +
                  "</code></pre>\n"
              : "<pre><code>" + (n ? t : ei(t, !0)) + "</code></pre>\n"
          },
        },
        {
          key: "blockquote",
          value: function (t) {
            return "<blockquote>\n" + t + "</blockquote>\n"
          },
        },
        {
          key: "html",
          value: function (t) {
            return t
          },
        },
        {
          key: "heading",
          value: function (t, e, n, r) {
            return this.options.headerIds
              ? "<h" +
                  e +
                  ' id="' +
                  this.options.headerPrefix +
                  r.slug(n) +
                  '">' +
                  t +
                  "</h" +
                  e +
                  ">\n"
              : "<h" + e + ">" + t + "</h" + e + ">\n"
          },
        },
        {
          key: "hr",
          value: function () {
            return this.options.xhtml ? "<hr/>\n" : "<hr>\n"
          },
        },
        {
          key: "list",
          value: function (t, e, n) {
            var r = e ? "ol" : "ul"
            return (
              "<" +
              r +
              (e && 1 !== n ? ' start="' + n + '"' : "") +
              ">\n" +
              t +
              "</" +
              r +
              ">\n"
            )
          },
        },
        {
          key: "listitem",
          value: function (t) {
            return "<li>" + t + "</li>\n"
          },
        },
        {
          key: "checkbox",
          value: function (t) {
            return (
              "<input " +
              (t ? 'checked="" ' : "") +
              'disabled="" type="checkbox"' +
              (this.options.xhtml ? " /" : "") +
              "> "
            )
          },
        },
        {
          key: "paragraph",
          value: function (t) {
            return "<p>" + t + "</p>\n"
          },
        },
        {
          key: "table",
          value: function (t, e) {
            return (
              e && (e = "<tbody>" + e + "</tbody>"),
              "<table>\n<thead>\n" + t + "</thead>\n" + e + "</table>\n"
            )
          },
        },
        {
          key: "tablerow",
          value: function (t) {
            return "<tr>\n" + t + "</tr>\n"
          },
        },
        {
          key: "tablecell",
          value: function (t, e) {
            var n = e.header ? "th" : "td"
            return (
              (e.align
                ? "<" + n + ' align="' + e.align + '">'
                : "<" + n + ">") +
              t +
              "</" +
              n +
              ">\n"
            )
          },
        },
        {
          key: "strong",
          value: function (t) {
            return "<strong>" + t + "</strong>"
          },
        },
        {
          key: "em",
          value: function (t) {
            return "<em>" + t + "</em>"
          },
        },
        {
          key: "codespan",
          value: function (t) {
            return "<code>" + t + "</code>"
          },
        },
        {
          key: "br",
          value: function () {
            return this.options.xhtml ? "<br/>" : "<br>"
          },
        },
        {
          key: "del",
          value: function (t) {
            return "<del>" + t + "</del>"
          },
        },
        {
          key: "link",
          value: function (t, e, n) {
            if (
              null === (t = ti(this.options.sanitize, this.options.baseUrl, t))
            )
              return n
            var r = '<a href="' + ei(t) + '"'
            return e && (r += ' title="' + e + '"'), (r += ">" + n + "</a>")
          },
        },
        {
          key: "image",
          value: function (t, e, n) {
            if (
              null === (t = ti(this.options.sanitize, this.options.baseUrl, t))
            )
              return n
            var r = '<img src="' + t + '" alt="' + n + '"'
            return (
              e && (r += ' title="' + e + '"'),
              (r += this.options.xhtml ? "/>" : ">")
            )
          },
        },
        {
          key: "text",
          value: function (t) {
            return t
          },
        },
      ]),
      t
    )
  })(),
  ri = (function () {
    function t() {
      pe(this, t)
    }
    return (
      fe(t, [
        {
          key: "strong",
          value: function (t) {
            return t
          },
        },
        {
          key: "em",
          value: function (t) {
            return t
          },
        },
        {
          key: "codespan",
          value: function (t) {
            return t
          },
        },
        {
          key: "del",
          value: function (t) {
            return t
          },
        },
        {
          key: "html",
          value: function (t) {
            return t
          },
        },
        {
          key: "text",
          value: function (t) {
            return t
          },
        },
        {
          key: "link",
          value: function (t, e, n) {
            return "" + n
          },
        },
        {
          key: "image",
          value: function (t, e, n) {
            return "" + n
          },
        },
        {
          key: "br",
          value: function () {
            return ""
          },
        },
      ]),
      t
    )
  })(),
  ii = (function () {
    function t() {
      pe(this, t), (this.seen = {})
    }
    return (
      fe(t, [
        {
          key: "slug",
          value: function (t) {
            var e = t
              .toLowerCase()
              .trim()
              .replace(/<[!\/a-z].*?>/gi, "")
              .replace(
                /[\u2000-\u206F\u2E00-\u2E7F\\'!"#$%&()*+,./:;<=>?@[\]^`{|}~]/g,
                ""
              )
              .replace(/\s/g, "-")
            if (this.seen.hasOwnProperty(e)) {
              var n = e
              do {
                this.seen[n]++, (e = n + "-" + this.seen[n])
              } while (this.seen.hasOwnProperty(e))
            }
            return (this.seen[e] = 0), e
          },
        },
      ]),
      t
    )
  })(),
  ai = nr.defaults,
  oi = Tr,
  li = (function () {
    function t(e) {
      pe(this, t),
        (this.options = e || ai),
        (this.options.renderer = this.options.renderer || new ni()),
        (this.renderer = this.options.renderer),
        (this.renderer.options = this.options),
        (this.textRenderer = new ri()),
        (this.slugger = new ii())
    }
    return (
      fe(
        t,
        [
          {
            key: "parse",
            value: function (t) {
              var e,
                n,
                r,
                i,
                a,
                o,
                l,
                s,
                c,
                u,
                p,
                d,
                f,
                h,
                g,
                m,
                v,
                y,
                k =
                  !(arguments.length > 1 && void 0 !== arguments[1]) ||
                  arguments[1],
                b = "",
                w = t.length
              for (e = 0; e < w; e++)
                switch ((u = t[e]).type) {
                  case "space":
                    continue
                  case "hr":
                    b += this.renderer.hr()
                    continue
                  case "heading":
                    b += this.renderer.heading(
                      this.parseInline(u.tokens),
                      u.depth,
                      oi(this.parseInline(u.tokens, this.textRenderer)),
                      this.slugger
                    )
                    continue
                  case "code":
                    b += this.renderer.code(u.text, u.lang, u.escaped)
                    continue
                  case "table":
                    for (s = "", l = "", i = u.header.length, n = 0; n < i; n++)
                      l += this.renderer.tablecell(
                        this.parseInline(u.tokens.header[n]),
                        { header: !0, align: u.align[n] }
                      )
                    for (
                      s += this.renderer.tablerow(l),
                        c = "",
                        i = u.cells.length,
                        n = 0;
                      n < i;
                      n++
                    ) {
                      for (
                        l = "", a = (o = u.tokens.cells[n]).length, r = 0;
                        r < a;
                        r++
                      )
                        l += this.renderer.tablecell(this.parseInline(o[r]), {
                          header: !1,
                          align: u.align[r],
                        })
                      c += this.renderer.tablerow(l)
                    }
                    b += this.renderer.table(s, c)
                    continue
                  case "blockquote":
                    ;(c = this.parse(u.tokens)),
                      (b += this.renderer.blockquote(c))
                    continue
                  case "list":
                    for (
                      p = u.ordered,
                        d = u.start,
                        f = u.loose,
                        i = u.items.length,
                        c = "",
                        n = 0;
                      n < i;
                      n++
                    )
                      (m = (g = u.items[n]).checked),
                        (v = g.task),
                        (h = ""),
                        g.task &&
                          ((y = this.renderer.checkbox(m)),
                          f
                            ? g.tokens.length > 0 && "text" === g.tokens[0].type
                              ? ((g.tokens[0].text =
                                  y + " " + g.tokens[0].text),
                                g.tokens[0].tokens &&
                                  g.tokens[0].tokens.length > 0 &&
                                  "text" === g.tokens[0].tokens[0].type &&
                                  (g.tokens[0].tokens[0].text =
                                    y + " " + g.tokens[0].tokens[0].text))
                              : g.tokens.unshift({ type: "text", text: y })
                            : (h += y)),
                        (h += this.parse(g.tokens, f)),
                        (c += this.renderer.listitem(h, v, m))
                    b += this.renderer.list(c, p, d)
                    continue
                  case "html":
                    b += this.renderer.html(u.text)
                    continue
                  case "paragraph":
                    b += this.renderer.paragraph(this.parseInline(u.tokens))
                    continue
                  case "text":
                    for (
                      c = u.tokens ? this.parseInline(u.tokens) : u.text;
                      e + 1 < w && "text" === t[e + 1].type;

                    )
                      c +=
                        "\n" +
                        ((u = t[++e]).tokens
                          ? this.parseInline(u.tokens)
                          : u.text)
                    b += k ? this.renderer.paragraph(c) : c
                    continue
                  default:
                    var x = 'Token with "' + u.type + '" type was not found.'
                    if (this.options.silent) return void console.error(x)
                    throw new Error(x)
                }
              return b
            },
          },
          {
            key: "parseInline",
            value: function (t, e) {
              e = e || this.renderer
              var n,
                r,
                i = "",
                a = t.length
              for (n = 0; n < a; n++)
                switch ((r = t[n]).type) {
                  case "escape":
                    i += e.text(r.text)
                    break
                  case "html":
                    i += e.html(r.text)
                    break
                  case "link":
                    i += e.link(r.href, r.title, this.parseInline(r.tokens, e))
                    break
                  case "image":
                    i += e.image(r.href, r.title, r.text)
                    break
                  case "strong":
                    i += e.strong(this.parseInline(r.tokens, e))
                    break
                  case "em":
                    i += e.em(this.parseInline(r.tokens, e))
                    break
                  case "codespan":
                    i += e.codespan(r.text)
                    break
                  case "br":
                    i += e.br()
                    break
                  case "del":
                    i += e.del(this.parseInline(r.tokens, e))
                    break
                  case "text":
                    i += e.text(r.text)
                    break
                  default:
                    var o = 'Token with "' + r.type + '" type was not found.'
                    if (this.options.silent) return void console.error(o)
                    throw new Error(o)
                }
              return i
            },
          },
        ],
        [
          {
            key: "parse",
            value: function (e, n) {
              return new t(n).parse(e)
            },
          },
        ]
      ),
      t
    )
  })(),
  si = Rr,
  ci = Cr,
  ui = Er,
  pi = nr.getDefaults,
  di = nr.changeDefaults,
  fi = nr.defaults
function hi(t, e, n) {
  if (null == t)
    throw new Error("marked(): input parameter is undefined or null")
  if ("string" != typeof t)
    throw new Error(
      "marked(): input parameter is of type " +
        Object.prototype.toString.call(t) +
        ", string expected"
    )
  if (
    ("function" == typeof e && ((n = e), (e = null)),
    (e = si({}, hi.defaults, e || {})),
    ci(e),
    n)
  ) {
    var r,
      i = e.highlight
    try {
      r = Xr.lex(t, e)
    } catch (t) {
      return n(t)
    }
    var a = function (t) {
      var a
      if (!t)
        try {
          a = li.parse(r, e)
        } catch (e) {
          t = e
        }
      return (e.highlight = i), t ? n(t) : n(null, a)
    }
    if (!i || i.length < 3) return a()
    if ((delete e.highlight, !r.length)) return a()
    var o = 0
    return (
      hi.walkTokens(r, function (t) {
        "code" === t.type &&
          (o++,
          i(t.text, t.lang, function (e, n) {
            if (e) return a(e)
            null != n && n !== t.text && ((t.text = n), (t.escaped = !0)),
              0 === --o && a()
          }))
      }),
      void (0 === o && a())
    )
  }
  try {
    var l = Xr.lex(t, e)
    return e.walkTokens && hi.walkTokens(l, e.walkTokens), li.parse(l, e)
  } catch (t) {
    if (
      ((t.message +=
        "\nPlease report this to https://github.com/markedjs/marked."),
      e.silent)
    )
      return (
        "<p>An error occurred:</p><pre>" + ui(t.message + "", !0) + "</pre>"
      )
    throw t
  }
}
;(hi.options = hi.setOptions = function (t) {
  return si(hi.defaults, t), di(hi.defaults), hi
}),
  (hi.getDefaults = pi),
  (hi.defaults = fi),
  (hi.use = function (t) {
    var e = si({}, t)
    if (
      (t.renderer &&
        (function () {
          var n = hi.defaults.renderer || new ni(),
            r = function (e) {
              var r = n[e]
              n[e] = function () {
                for (
                  var i = arguments.length, a = new Array(i), o = 0;
                  o < i;
                  o++
                )
                  a[o] = arguments[o]
                var l = t.renderer[e].apply(n, a)
                return !1 === l && (l = r.apply(n, a)), l
              }
            }
          for (var i in t.renderer) r(i)
          e.renderer = n
        })(),
      t.tokenizer &&
        (function () {
          var n = hi.defaults.tokenizer || new Ur(),
            r = function (e) {
              var r = n[e]
              n[e] = function () {
                for (
                  var i = arguments.length, a = new Array(i), o = 0;
                  o < i;
                  o++
                )
                  a[o] = arguments[o]
                var l = t.tokenizer[e].apply(n, a)
                return !1 === l && (l = r.apply(n, a)), l
              }
            }
          for (var i in t.tokenizer) r(i)
          e.tokenizer = n
        })(),
      t.walkTokens)
    ) {
      var n = hi.defaults.walkTokens
      e.walkTokens = function (e) {
        t.walkTokens(e), n && n(e)
      }
    }
    hi.setOptions(e)
  }),
  (hi.walkTokens = function (t, e) {
    var n,
      r = ve(t)
    try {
      for (r.s(); !(n = r.n()).done; ) {
        var i = n.value
        switch ((e(i), i.type)) {
          case "table":
            var a,
              o = ve(i.tokens.header)
            try {
              for (o.s(); !(a = o.n()).done; ) {
                var l = a.value
                hi.walkTokens(l, e)
              }
            } catch (t) {
              o.e(t)
            } finally {
              o.f()
            }
            var s,
              c = ve(i.tokens.cells)
            try {
              for (c.s(); !(s = c.n()).done; ) {
                var u,
                  p = ve(s.value)
                try {
                  for (p.s(); !(u = p.n()).done; ) {
                    var d = u.value
                    hi.walkTokens(d, e)
                  }
                } catch (t) {
                  p.e(t)
                } finally {
                  p.f()
                }
              }
            } catch (t) {
              c.e(t)
            } finally {
              c.f()
            }
            break
          case "list":
            hi.walkTokens(i.items, e)
            break
          default:
            i.tokens && hi.walkTokens(i.tokens, e)
        }
      }
    } catch (t) {
      r.e(t)
    } finally {
      r.f()
    }
  }),
  (hi.Parser = li),
  (hi.parser = li.parse),
  (hi.Renderer = ni),
  (hi.TextRenderer = ri),
  (hi.Lexer = Xr),
  (hi.lexer = Xr.lex),
  (hi.Tokenizer = Ur),
  (hi.Slugger = ii),
  (hi.parse = hi)
var gi = hi
export default function () {
  var t,
    e = null
  function n() {
    var n
    !e || e.closed
      ? (((e = window.open(
          "about:blank",
          "reveal.js - Notes",
          "width=1100,height=700"
        )).marked = gi),
        e.document.write(
          "<html lang=\"en\">\n\t<head>\n\t\t<meta charset=\"utf-8\">\n\n\t\t<title>reveal.js - Speaker View</title>\n\n\t\t<style>\n\t\t\tbody {\n\t\t\t\tfont-family: Helvetica;\n\t\t\t\tfont-size: 18px;\n\t\t\t}\n\n\t\t\t#current-slide,\n\t\t\t#upcoming-slide,\n\t\t\t#speaker-controls {\n\t\t\t\tpadding: 6px;\n\t\t\t\tbox-sizing: border-box;\n\t\t\t\t-moz-box-sizing: border-box;\n\t\t\t}\n\n\t\t\t#current-slide iframe,\n\t\t\t#upcoming-slide iframe {\n\t\t\t\twidth: 100%;\n\t\t\t\theight: 100%;\n\t\t\t\tborder: 1px solid #ddd;\n\t\t\t}\n\n\t\t\t#current-slide .label,\n\t\t\t#upcoming-slide .label {\n\t\t\t\tposition: absolute;\n\t\t\t\ttop: 10px;\n\t\t\t\tleft: 10px;\n\t\t\t\tz-index: 2;\n\t\t\t}\n\n\t\t\t#connection-status {\n\t\t\t\tposition: absolute;\n\t\t\t\ttop: 0;\n\t\t\t\tleft: 0;\n\t\t\t\twidth: 100%;\n\t\t\t\theight: 100%;\n\t\t\t\tz-index: 20;\n\t\t\t\tpadding: 30% 20% 20% 20%;\n\t\t\t\tfont-size: 18px;\n\t\t\t\tcolor: #222;\n\t\t\t\tbackground: #fff;\n\t\t\t\ttext-align: center;\n\t\t\t\tbox-sizing: border-box;\n\t\t\t\tline-height: 1.4;\n\t\t\t}\n\n\t\t\t.overlay-element {\n\t\t\t\theight: 34px;\n\t\t\t\tline-height: 34px;\n\t\t\t\tpadding: 0 10px;\n\t\t\t\ttext-shadow: none;\n\t\t\t\tbackground: rgba( 220, 220, 220, 0.8 );\n\t\t\t\tcolor: #222;\n\t\t\t\tfont-size: 14px;\n\t\t\t}\n\n\t\t\t.overlay-element.interactive:hover {\n\t\t\t\tbackground: rgba( 220, 220, 220, 1 );\n\t\t\t}\n\n\t\t\t#current-slide {\n\t\t\t\tposition: absolute;\n\t\t\t\twidth: 60%;\n\t\t\t\theight: 100%;\n\t\t\t\ttop: 0;\n\t\t\t\tleft: 0;\n\t\t\t\tpadding-right: 0;\n\t\t\t}\n\n\t\t\t#upcoming-slide {\n\t\t\t\tposition: absolute;\n\t\t\t\twidth: 40%;\n\t\t\t\theight: 40%;\n\t\t\t\tright: 0;\n\t\t\t\ttop: 0;\n\t\t\t}\n\n\t\t\t/* Speaker controls */\n\t\t\t#speaker-controls {\n\t\t\t\tposition: absolute;\n\t\t\t\ttop: 40%;\n\t\t\t\tright: 0;\n\t\t\t\twidth: 40%;\n\t\t\t\theight: 60%;\n\t\t\t\toverflow: auto;\n\t\t\t\tfont-size: 18px;\n\t\t\t}\n\n\t\t\t\t.speaker-controls-time.hidden,\n\t\t\t\t.speaker-controls-notes.hidden {\n\t\t\t\t\tdisplay: none;\n\t\t\t\t}\n\n\t\t\t\t.speaker-controls-time .label,\n\t\t\t\t.speaker-controls-pace .label,\n\t\t\t\t.speaker-controls-notes .label {\n\t\t\t\t\ttext-transform: uppercase;\n\t\t\t\t\tfont-weight: normal;\n\t\t\t\t\tfont-size: 0.66em;\n\t\t\t\t\tcolor: #666;\n\t\t\t\t\tmargin: 0;\n\t\t\t\t}\n\n\t\t\t\t.speaker-controls-time, .speaker-controls-pace {\n\t\t\t\t\tborder-bottom: 1px solid rgba( 200, 200, 200, 0.5 );\n\t\t\t\t\tmargin-bottom: 10px;\n\t\t\t\t\tpadding: 10px 16px;\n\t\t\t\t\tpadding-bottom: 20px;\n\t\t\t\t\tcursor: pointer;\n\t\t\t\t}\n\n\t\t\t\t.speaker-controls-time .reset-button {\n\t\t\t\t\topacity: 0;\n\t\t\t\t\tfloat: right;\n\t\t\t\t\tcolor: #666;\n\t\t\t\t\ttext-decoration: none;\n\t\t\t\t}\n\t\t\t\t.speaker-controls-time:hover .reset-button {\n\t\t\t\t\topacity: 1;\n\t\t\t\t}\n\n\t\t\t\t.speaker-controls-time .timer,\n\t\t\t\t.speaker-controls-time .clock {\n\t\t\t\t\twidth: 50%;\n\t\t\t\t}\n\n\t\t\t\t.speaker-controls-time .timer,\n\t\t\t\t.speaker-controls-time .clock,\n\t\t\t\t.speaker-controls-time .pacing .hours-value,\n\t\t\t\t.speaker-controls-time .pacing .minutes-value,\n\t\t\t\t.speaker-controls-time .pacing .seconds-value {\n\t\t\t\t\tfont-size: 1.9em;\n\t\t\t\t}\n\n\t\t\t\t.speaker-controls-time .timer {\n\t\t\t\t\tfloat: left;\n\t\t\t\t}\n\n\t\t\t\t.speaker-controls-time .clock {\n\t\t\t\t\tfloat: right;\n\t\t\t\t\ttext-align: right;\n\t\t\t\t}\n\n\t\t\t\t.speaker-controls-time span.mute {\n\t\t\t\t\topacity: 0.3;\n\t\t\t\t}\n\n\t\t\t\t.speaker-controls-time .pacing-title {\n\t\t\t\t\tmargin-top: 5px;\n\t\t\t\t}\n\n\t\t\t\t.speaker-controls-time .pacing.ahead {\n\t\t\t\t\tcolor: blue;\n\t\t\t\t}\n\n\t\t\t\t.speaker-controls-time .pacing.on-track {\n\t\t\t\t\tcolor: green;\n\t\t\t\t}\n\n\t\t\t\t.speaker-controls-time .pacing.behind {\n\t\t\t\t\tcolor: red;\n\t\t\t\t}\n\n\t\t\t\t.speaker-controls-notes {\n\t\t\t\t\tpadding: 10px 16px;\n\t\t\t\t}\n\n\t\t\t\t.speaker-controls-notes .value {\n\t\t\t\t\tmargin-top: 5px;\n\t\t\t\t\tline-height: 1.4;\n\t\t\t\t\tfont-size: 1.2em;\n\t\t\t\t}\n\n\t\t\t/* Layout selector */\n\t\t\t#speaker-layout {\n\t\t\t\tposition: absolute;\n\t\t\t\ttop: 10px;\n\t\t\t\tright: 10px;\n\t\t\t\tcolor: #222;\n\t\t\t\tz-index: 10;\n\t\t\t}\n\t\t\t\t#speaker-layout select {\n\t\t\t\t\tposition: absolute;\n\t\t\t\t\twidth: 100%;\n\t\t\t\t\theight: 100%;\n\t\t\t\t\ttop: 0;\n\t\t\t\t\tleft: 0;\n\t\t\t\t\tborder: 0;\n\t\t\t\t\tbox-shadow: 0;\n\t\t\t\t\tcursor: pointer;\n\t\t\t\t\topacity: 0;\n\n\t\t\t\t\tfont-size: 1em;\n\t\t\t\t\tbackground-color: transparent;\n\n\t\t\t\t\t-moz-appearance: none;\n\t\t\t\t\t-webkit-appearance: none;\n\t\t\t\t\t-webkit-tap-highlight-color: rgba(0, 0, 0, 0);\n\t\t\t\t}\n\n\t\t\t\t#speaker-layout select:focus {\n\t\t\t\t\toutline: none;\n\t\t\t\t\tbox-shadow: none;\n\t\t\t\t}\n\n\t\t\t.clear {\n\t\t\t\tclear: both;\n\t\t\t}\n\n\t\t\t/* Speaker layout: Wide */\n\t\t\tbody[data-speaker-layout=\"wide\"] #current-slide,\n\t\t\tbody[data-speaker-layout=\"wide\"] #upcoming-slide {\n\t\t\t\twidth: 50%;\n\t\t\t\theight: 45%;\n\t\t\t\tpadding: 6px;\n\t\t\t}\n\n\t\t\tbody[data-speaker-layout=\"wide\"] #current-slide {\n\t\t\t\ttop: 0;\n\t\t\t\tleft: 0;\n\t\t\t}\n\n\t\t\tbody[data-speaker-layout=\"wide\"] #upcoming-slide {\n\t\t\t\ttop: 0;\n\t\t\t\tleft: 50%;\n\t\t\t}\n\n\t\t\tbody[data-speaker-layout=\"wide\"] #speaker-controls {\n\t\t\t\ttop: 45%;\n\t\t\t\tleft: 0;\n\t\t\t\twidth: 100%;\n\t\t\t\theight: 50%;\n\t\t\t\tfont-size: 1.25em;\n\t\t\t}\n\n\t\t\t/* Speaker layout: Tall */\n\t\t\tbody[data-speaker-layout=\"tall\"] #current-slide,\n\t\t\tbody[data-speaker-layout=\"tall\"] #upcoming-slide {\n\t\t\t\twidth: 45%;\n\t\t\t\theight: 50%;\n\t\t\t\tpadding: 6px;\n\t\t\t}\n\n\t\t\tbody[data-speaker-layout=\"tall\"] #current-slide {\n\t\t\t\ttop: 0;\n\t\t\t\tleft: 0;\n\t\t\t}\n\n\t\t\tbody[data-speaker-layout=\"tall\"] #upcoming-slide {\n\t\t\t\ttop: 50%;\n\t\t\t\tleft: 0;\n\t\t\t}\n\n\t\t\tbody[data-speaker-layout=\"tall\"] #speaker-controls {\n\t\t\t\tpadding-top: 40px;\n\t\t\t\ttop: 0;\n\t\t\t\tleft: 45%;\n\t\t\t\twidth: 55%;\n\t\t\t\theight: 100%;\n\t\t\t\tfont-size: 1.25em;\n\t\t\t}\n\n\t\t\t/* Speaker layout: Notes only */\n\t\t\tbody[data-speaker-layout=\"notes-only\"] #current-slide,\n\t\t\tbody[data-speaker-layout=\"notes-only\"] #upcoming-slide {\n\t\t\t\tdisplay: none;\n\t\t\t}\n\n\t\t\tbody[data-speaker-layout=\"notes-only\"] #speaker-controls {\n\t\t\t\tpadding-top: 40px;\n\t\t\t\ttop: 0;\n\t\t\t\tleft: 0;\n\t\t\t\twidth: 100%;\n\t\t\t\theight: 100%;\n\t\t\t\tfont-size: 1.25em;\n\t\t\t}\n\n\t\t\t@media screen and (max-width: 1080px) {\n\t\t\t\tbody[data-speaker-layout=\"default\"] #speaker-controls {\n\t\t\t\t\tfont-size: 16px;\n\t\t\t\t}\n\t\t\t}\n\n\t\t\t@media screen and (max-width: 900px) {\n\t\t\t\tbody[data-speaker-layout=\"default\"] #speaker-controls {\n\t\t\t\t\tfont-size: 14px;\n\t\t\t\t}\n\t\t\t}\n\n\t\t\t@media screen and (max-width: 800px) {\n\t\t\t\tbody[data-speaker-layout=\"default\"] #speaker-controls {\n\t\t\t\t\tfont-size: 12px;\n\t\t\t\t}\n\t\t\t}\n\n\t\t</style>\n\t</head>\n\n\t<body>\n\n\t\t<div id=\"connection-status\">Loading speaker view...</div>\n\n\t\t<div id=\"current-slide\"></div>\n\t\t<div id=\"upcoming-slide\"><span class=\"overlay-element label\">Upcoming</span></div>\n\t\t<div id=\"speaker-controls\">\n\t\t\t<div class=\"speaker-controls-time\">\n\t\t\t\t<h4 class=\"label\">Time <span class=\"reset-button\">Click to Reset</span></h4>\n\t\t\t\t<div class=\"clock\">\n\t\t\t\t\t<span class=\"clock-value\">0:00 AM</span>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"timer\">\n\t\t\t\t\t<span class=\"hours-value\">00</span><span class=\"minutes-value\">:00</span><span class=\"seconds-value\">:00</span>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"clear\"></div>\n\n\t\t\t\t<h4 class=\"label pacing-title\" style=\"display: none\">Pacing – Time to finish current slide</h4>\n\t\t\t\t<div class=\"pacing\" style=\"display: none\">\n\t\t\t\t\t<span class=\"hours-value\">00</span><span class=\"minutes-value\">:00</span><span class=\"seconds-value\">:00</span>\n\t\t\t\t</div>\n\t\t\t</div>\n\n\t\t\t<div class=\"speaker-controls-notes hidden\">\n\t\t\t\t<h4 class=\"label\">Notes</h4>\n\t\t\t\t<div class=\"value\"></div>\n\t\t\t</div>\n\t\t</div>\n\t\t<div id=\"speaker-layout\" class=\"overlay-element interactive\">\n\t\t\t<span class=\"speaker-layout-label\"></span>\n\t\t\t<select class=\"speaker-layout-dropdown\"></select>\n\t\t</div>\n\n\t\t<script>\n\n\t\t\t(function() {\n\n\t\t\t\tvar notes,\n\t\t\t\t\tnotesValue,\n\t\t\t\t\tcurrentState,\n\t\t\t\t\tcurrentSlide,\n\t\t\t\t\tupcomingSlide,\n\t\t\t\t\tlayoutLabel,\n\t\t\t\t\tlayoutDropdown,\n\t\t\t\t\tpendingCalls = {},\n\t\t\t\t\tlastRevealApiCallId = 0,\n\t\t\t\t\tconnected = false;\n\n\t\t\t\tvar SPEAKER_LAYOUTS = {\n\t\t\t\t\t'default': 'Default',\n\t\t\t\t\t'wide': 'Wide',\n\t\t\t\t\t'tall': 'Tall',\n\t\t\t\t\t'notes-only': 'Notes only'\n\t\t\t\t};\n\n\t\t\t\tsetupLayout();\n\n\t\t\t\tvar connectionStatus = document.querySelector( '#connection-status' );\n\t\t\t\tvar connectionTimeout = setTimeout( function() {\n\t\t\t\t\tconnectionStatus.innerHTML = 'Error connecting to main window.<br>Please try closing and reopening the speaker view.';\n\t\t\t\t}, 5000 );\n\n\t\t\t\twindow.addEventListener( 'message', function( event ) {\n\n\t\t\t\t\tclearTimeout( connectionTimeout );\n\t\t\t\t\tconnectionStatus.style.display = 'none';\n\n\t\t\t\t\tvar data = JSON.parse( event.data );\n\n\t\t\t\t\t// The overview mode is only useful to the reveal.js instance\n\t\t\t\t\t// where navigation occurs so we don't sync it\n\t\t\t\t\tif( data.state ) delete data.state.overview;\n\n\t\t\t\t\t// Messages sent by the notes plugin inside of the main window\n\t\t\t\t\tif( data && data.namespace === 'reveal-notes' ) {\n\t\t\t\t\t\tif( data.type === 'connect' ) {\n\t\t\t\t\t\t\thandleConnectMessage( data );\n\t\t\t\t\t\t}\n\t\t\t\t\t\telse if( data.type === 'state' ) {\n\t\t\t\t\t\t\thandleStateMessage( data );\n\t\t\t\t\t\t}\n\t\t\t\t\t\telse if( data.type === 'return' ) {\n\t\t\t\t\t\t\tpendingCalls[data.callId](data.result);\n\t\t\t\t\t\t\tdelete pendingCalls[data.callId];\n\t\t\t\t\t\t}\n\t\t\t\t\t}\n\t\t\t\t\t// Messages sent by the reveal.js inside of the current slide preview\n\t\t\t\t\telse if( data && data.namespace === 'reveal' ) {\n\t\t\t\t\t\tif( /ready/.test( data.eventName ) ) {\n\t\t\t\t\t\t\t// Send a message back to notify that the handshake is complete\n\t\t\t\t\t\t\twindow.opener.postMessage( JSON.stringify({ namespace: 'reveal-notes', type: 'connected'} ), '*' );\n\t\t\t\t\t\t}\n\t\t\t\t\t\telse if( /slidechanged|fragmentshown|fragmenthidden|paused|resumed/.test( data.eventName ) && currentState !== JSON.stringify( data.state ) ) {\n\n\t\t\t\t\t\t\twindow.opener.postMessage( JSON.stringify({ method: 'setState', args: [ data.state ]} ), '*' );\n\n\t\t\t\t\t\t}\n\t\t\t\t\t}\n\n\t\t\t\t} );\n\n\t\t\t\t/**\n\t\t\t\t * Asynchronously calls the Reveal.js API of the main frame.\n\t\t\t\t */\n\t\t\t\tfunction callRevealApi( methodName, methodArguments, callback ) {\n\n\t\t\t\t\tvar callId = ++lastRevealApiCallId;\n\t\t\t\t\tpendingCalls[callId] = callback;\n\t\t\t\t\twindow.opener.postMessage( JSON.stringify( {\n\t\t\t\t\t\tnamespace: 'reveal-notes',\n\t\t\t\t\t\ttype: 'call',\n\t\t\t\t\t\tcallId: callId,\n\t\t\t\t\t\tmethodName: methodName,\n\t\t\t\t\t\targuments: methodArguments\n\t\t\t\t\t} ), '*' );\n\n\t\t\t\t}\n\n\t\t\t\t/**\n\t\t\t\t * Called when the main window is trying to establish a\n\t\t\t\t * connection.\n\t\t\t\t */\n\t\t\t\tfunction handleConnectMessage( data ) {\n\n\t\t\t\t\tif( connected === false ) {\n\t\t\t\t\t\tconnected = true;\n\n\t\t\t\t\t\tsetupIframes( data );\n\t\t\t\t\t\tsetupKeyboard();\n\t\t\t\t\t\tsetupNotes();\n\t\t\t\t\t\tsetupTimer();\n\t\t\t\t\t}\n\n\t\t\t\t}\n\n\t\t\t\t/**\n\t\t\t\t * Called when the main window sends an updated state.\n\t\t\t\t */\n\t\t\t\tfunction handleStateMessage( data ) {\n\n\t\t\t\t\t// Store the most recently set state to avoid circular loops\n\t\t\t\t\t// applying the same state\n\t\t\t\t\tcurrentState = JSON.stringify( data.state );\n\n\t\t\t\t\t// No need for updating the notes in case of fragment changes\n\t\t\t\t\tif ( data.notes ) {\n\t\t\t\t\t\tnotes.classList.remove( 'hidden' );\n\t\t\t\t\t\tnotesValue.style.whiteSpace = data.whitespace;\n\t\t\t\t\t\tif( data.markdown ) {\n\t\t\t\t\t\t\tnotesValue.innerHTML = marked( data.notes );\n\t\t\t\t\t\t}\n\t\t\t\t\t\telse {\n\t\t\t\t\t\t\tnotesValue.innerHTML = data.notes;\n\t\t\t\t\t\t}\n\t\t\t\t\t}\n\t\t\t\t\telse {\n\t\t\t\t\t\tnotes.classList.add( 'hidden' );\n\t\t\t\t\t}\n\n\t\t\t\t\t// Update the note slides\n\t\t\t\t\tcurrentSlide.contentWindow.postMessage( JSON.stringify({ method: 'setState', args: [ data.state ] }), '*' );\n\t\t\t\t\tupcomingSlide.contentWindow.postMessage( JSON.stringify({ method: 'setState', args: [ data.state ] }), '*' );\n\t\t\t\t\tupcomingSlide.contentWindow.postMessage( JSON.stringify({ method: 'next' }), '*' );\n\n\t\t\t\t}\n\n\t\t\t\t// Limit to max one state update per X ms\n\t\t\t\thandleStateMessage = debounce( handleStateMessage, 200 );\n\n\t\t\t\t/**\n\t\t\t\t * Forward keyboard events to the current slide window.\n\t\t\t\t * This enables keyboard events to work even if focus\n\t\t\t\t * isn't set on the current slide iframe.\n\t\t\t\t *\n\t\t\t\t * Block F5 default handling, it reloads and disconnects\n\t\t\t\t * the speaker notes window.\n\t\t\t\t */\n\t\t\t\tfunction setupKeyboard() {\n\n\t\t\t\t\tdocument.addEventListener( 'keydown', function( event ) {\n\t\t\t\t\t\tif( event.keyCode === 116 || ( event.metaKey && event.keyCode === 82 ) ) {\n\t\t\t\t\t\t\tevent.preventDefault();\n\t\t\t\t\t\t\treturn false;\n\t\t\t\t\t\t}\n\t\t\t\t\t\tcurrentSlide.contentWindow.postMessage( JSON.stringify({ method: 'triggerKey', args: [ event.keyCode ] }), '*' );\n\t\t\t\t\t} );\n\n\t\t\t\t}\n\n\t\t\t\t/**\n\t\t\t\t * Creates the preview iframes.\n\t\t\t\t */\n\t\t\t\tfunction setupIframes( data ) {\n\n\t\t\t\t\tvar params = [\n\t\t\t\t\t\t'receiver',\n\t\t\t\t\t\t'progress=false',\n\t\t\t\t\t\t'history=false',\n\t\t\t\t\t\t'transition=none',\n\t\t\t\t\t\t'autoSlide=0',\n\t\t\t\t\t\t'backgroundTransition=none'\n\t\t\t\t\t].join( '&' );\n\n\t\t\t\t\tvar urlSeparator = /\\?/.test(data.url) ? '&' : '?';\n\t\t\t\t\tvar hash = '#/' + data.state.indexh + '/' + data.state.indexv;\n\t\t\t\t\tvar currentURL = data.url + urlSeparator + params + '&postMessageEvents=true' + hash;\n\t\t\t\t\tvar upcomingURL = data.url + urlSeparator + params + '&controls=false' + hash;\n\n\t\t\t\t\tcurrentSlide = document.createElement( 'iframe' );\n\t\t\t\t\tcurrentSlide.setAttribute( 'width', 1280 );\n\t\t\t\t\tcurrentSlide.setAttribute( 'height', 1024 );\n\t\t\t\t\tcurrentSlide.setAttribute( 'src', currentURL );\n\t\t\t\t\tdocument.querySelector( '#current-slide' ).appendChild( currentSlide );\n\n\t\t\t\t\tupcomingSlide = document.createElement( 'iframe' );\n\t\t\t\t\tupcomingSlide.setAttribute( 'width', 640 );\n\t\t\t\t\tupcomingSlide.setAttribute( 'height', 512 );\n\t\t\t\t\tupcomingSlide.setAttribute( 'src', upcomingURL );\n\t\t\t\t\tdocument.querySelector( '#upcoming-slide' ).appendChild( upcomingSlide );\n\n\t\t\t\t}\n\n\t\t\t\t/**\n\t\t\t\t * Setup the notes UI.\n\t\t\t\t */\n\t\t\t\tfunction setupNotes() {\n\n\t\t\t\t\tnotes = document.querySelector( '.speaker-controls-notes' );\n\t\t\t\t\tnotesValue = document.querySelector( '.speaker-controls-notes .value' );\n\n\t\t\t\t}\n\n\t\t\t\tfunction getTimings( callback ) {\n\n\t\t\t\t\tcallRevealApi( 'getSlidesAttributes', [], function ( slideAttributes ) {\n\t\t\t\t\t\tcallRevealApi( 'getConfig', [], function ( config ) {\n\t\t\t\t\t\t\tvar totalTime = config.totalTime;\n\t\t\t\t\t\t\tvar minTimePerSlide = config.minimumTimePerSlide || 0;\n\t\t\t\t\t\t\tvar defaultTiming = config.defaultTiming;\n\t\t\t\t\t\t\tif ((defaultTiming == null) && (totalTime == null)) {\n\t\t\t\t\t\t\t\tcallback(null);\n\t\t\t\t\t\t\t\treturn;\n\t\t\t\t\t\t\t}\n\t\t\t\t\t\t\t// Setting totalTime overrides defaultTiming\n\t\t\t\t\t\t\tif (totalTime) {\n\t\t\t\t\t\t\t\tdefaultTiming = 0;\n\t\t\t\t\t\t\t}\n\t\t\t\t\t\t\tvar timings = [];\n\t\t\t\t\t\t\tfor ( var i in slideAttributes ) {\n\t\t\t\t\t\t\t\tvar slide = slideAttributes[ i ];\n\t\t\t\t\t\t\t\tvar timing = defaultTiming;\n\t\t\t\t\t\t\t\tif( slide.hasOwnProperty( 'data-timing' )) {\n\t\t\t\t\t\t\t\t\tvar t = slide[ 'data-timing' ];\n\t\t\t\t\t\t\t\t\ttiming = parseInt(t);\n\t\t\t\t\t\t\t\t\tif( isNaN(timing) ) {\n\t\t\t\t\t\t\t\t\t\tconsole.warn(\"Could not parse timing '\" + t + \"' of slide \" + i + \"; using default of \" + defaultTiming);\n\t\t\t\t\t\t\t\t\t\ttiming = defaultTiming;\n\t\t\t\t\t\t\t\t\t}\n\t\t\t\t\t\t\t\t}\n\t\t\t\t\t\t\t\ttimings.push(timing);\n\t\t\t\t\t\t\t}\n\t\t\t\t\t\t\tif ( totalTime ) {\n\t\t\t\t\t\t\t\t// After we've allocated time to individual slides, we summarize it and\n\t\t\t\t\t\t\t\t// subtract it from the total time\n\t\t\t\t\t\t\t\tvar remainingTime = totalTime - timings.reduce( function(a, b) { return a + b; }, 0 );\n\t\t\t\t\t\t\t\t// The remaining time is divided by the number of slides that have 0 seconds\n\t\t\t\t\t\t\t\t// allocated at the moment, giving the average time-per-slide on the remaining slides\n\t\t\t\t\t\t\t\tvar remainingSlides = (timings.filter( function(x) { return x == 0 }) ).length\n\t\t\t\t\t\t\t\tvar timePerSlide = Math.round( remainingTime / remainingSlides, 0 )\n\t\t\t\t\t\t\t\t// And now we replace every zero-value timing with that average\n\t\t\t\t\t\t\t\ttimings = timings.map( function(x) { return (x==0 ? timePerSlide : x) } );\n\t\t\t\t\t\t\t}\n\t\t\t\t\t\t\tvar slidesUnderMinimum = timings.filter( function(x) { return (x < minTimePerSlide) } ).length\n\t\t\t\t\t\t\tif ( slidesUnderMinimum ) {\n\t\t\t\t\t\t\t\tmessage = \"The pacing time for \" + slidesUnderMinimum + \" slide(s) is under the configured minimum of \" + minTimePerSlide + \" seconds. Check the data-timing attribute on individual slides, or consider increasing the totalTime or minimumTimePerSlide configuration options (or removing some slides).\";\n\t\t\t\t\t\t\t\talert(message);\n\t\t\t\t\t\t\t}\n\t\t\t\t\t\t\tcallback( timings );\n\t\t\t\t\t\t} );\n\t\t\t\t\t} );\n\n\t\t\t\t}\n\n\t\t\t\t/**\n\t\t\t\t * Return the number of seconds allocated for presenting\n\t\t\t\t * all slides up to and including this one.\n\t\t\t\t */\n\t\t\t\tfunction getTimeAllocated( timings, callback ) {\n\n\t\t\t\t\tcallRevealApi( 'getSlidePastCount', [], function ( currentSlide ) {\n\t\t\t\t\t\tvar allocated = 0;\n\t\t\t\t\t\tfor (var i in timings.slice(0, currentSlide + 1)) {\n\t\t\t\t\t\t\tallocated += timings[i];\n\t\t\t\t\t\t}\n\t\t\t\t\t\tcallback( allocated );\n\t\t\t\t\t} );\n\n\t\t\t\t}\n\n\t\t\t\t/**\n\t\t\t\t * Create the timer and clock and start updating them\n\t\t\t\t * at an interval.\n\t\t\t\t */\n\t\t\t\tfunction setupTimer() {\n\n\t\t\t\t\tvar start = new Date(),\n\t\t\t\t\ttimeEl = document.querySelector( '.speaker-controls-time' ),\n\t\t\t\t\tclockEl = timeEl.querySelector( '.clock-value' ),\n\t\t\t\t\thoursEl = timeEl.querySelector( '.hours-value' ),\n\t\t\t\t\tminutesEl = timeEl.querySelector( '.minutes-value' ),\n\t\t\t\t\tsecondsEl = timeEl.querySelector( '.seconds-value' ),\n\t\t\t\t\tpacingTitleEl = timeEl.querySelector( '.pacing-title' ),\n\t\t\t\t\tpacingEl = timeEl.querySelector( '.pacing' ),\n\t\t\t\t\tpacingHoursEl = pacingEl.querySelector( '.hours-value' ),\n\t\t\t\t\tpacingMinutesEl = pacingEl.querySelector( '.minutes-value' ),\n\t\t\t\t\tpacingSecondsEl = pacingEl.querySelector( '.seconds-value' );\n\n\t\t\t\t\tvar timings = null;\n\t\t\t\t\tgetTimings( function ( _timings ) {\n\n\t\t\t\t\t\ttimings = _timings;\n\t\t\t\t\t\tif (_timings !== null) {\n\t\t\t\t\t\t\tpacingTitleEl.style.removeProperty('display');\n\t\t\t\t\t\t\tpacingEl.style.removeProperty('display');\n\t\t\t\t\t\t}\n\n\t\t\t\t\t\t// Update once directly\n\t\t\t\t\t\t_updateTimer();\n\n\t\t\t\t\t\t// Then update every second\n\t\t\t\t\t\tsetInterval( _updateTimer, 1000 );\n\n\t\t\t\t\t} );\n\n\n\t\t\t\t\tfunction _resetTimer() {\n\n\t\t\t\t\t\tif (timings == null) {\n\t\t\t\t\t\t\tstart = new Date();\n\t\t\t\t\t\t\t_updateTimer();\n\t\t\t\t\t\t}\n\t\t\t\t\t\telse {\n\t\t\t\t\t\t\t// Reset timer to beginning of current slide\n\t\t\t\t\t\t\tgetTimeAllocated( timings, function ( slideEndTimingSeconds ) {\n\t\t\t\t\t\t\t\tvar slideEndTiming = slideEndTimingSeconds * 1000;\n\t\t\t\t\t\t\t\tcallRevealApi( 'getSlidePastCount', [], function ( currentSlide ) {\n\t\t\t\t\t\t\t\t\tvar currentSlideTiming = timings[currentSlide] * 1000;\n\t\t\t\t\t\t\t\t\tvar previousSlidesTiming = slideEndTiming - currentSlideTiming;\n\t\t\t\t\t\t\t\t\tvar now = new Date();\n\t\t\t\t\t\t\t\t\tstart = new Date(now.getTime() - previousSlidesTiming);\n\t\t\t\t\t\t\t\t\t_updateTimer();\n\t\t\t\t\t\t\t\t} );\n\t\t\t\t\t\t\t} );\n\t\t\t\t\t\t}\n\n\t\t\t\t\t}\n\n\t\t\t\t\ttimeEl.addEventListener( 'click', function() {\n\t\t\t\t\t\t_resetTimer();\n\t\t\t\t\t\treturn false;\n\t\t\t\t\t} );\n\n\t\t\t\t\tfunction _displayTime( hrEl, minEl, secEl, time) {\n\n\t\t\t\t\t\tvar sign = Math.sign(time) == -1 ? \"-\" : \"\";\n\t\t\t\t\t\ttime = Math.abs(Math.round(time / 1000));\n\t\t\t\t\t\tvar seconds = time % 60;\n\t\t\t\t\t\tvar minutes = Math.floor( time / 60 ) % 60 ;\n\t\t\t\t\t\tvar hours = Math.floor( time / ( 60 * 60 )) ;\n\t\t\t\t\t\thrEl.innerHTML = sign + zeroPadInteger( hours );\n\t\t\t\t\t\tif (hours == 0) {\n\t\t\t\t\t\t\thrEl.classList.add( 'mute' );\n\t\t\t\t\t\t}\n\t\t\t\t\t\telse {\n\t\t\t\t\t\t\thrEl.classList.remove( 'mute' );\n\t\t\t\t\t\t}\n\t\t\t\t\t\tminEl.innerHTML = ':' + zeroPadInteger( minutes );\n\t\t\t\t\t\tif (hours == 0 && minutes == 0) {\n\t\t\t\t\t\t\tminEl.classList.add( 'mute' );\n\t\t\t\t\t\t}\n\t\t\t\t\t\telse {\n\t\t\t\t\t\t\tminEl.classList.remove( 'mute' );\n\t\t\t\t\t\t}\n\t\t\t\t\t\tsecEl.innerHTML = ':' + zeroPadInteger( seconds );\n\t\t\t\t\t}\n\n\t\t\t\t\tfunction _updateTimer() {\n\n\t\t\t\t\t\tvar diff, hours, minutes, seconds,\n\t\t\t\t\t\tnow = new Date();\n\n\t\t\t\t\t\tdiff = now.getTime() - start.getTime();\n\n\t\t\t\t\t\tclockEl.innerHTML = now.toLocaleTimeString( 'en-US', { hour12: true, hour: '2-digit', minute:'2-digit' } );\n\t\t\t\t\t\t_displayTime( hoursEl, minutesEl, secondsEl, diff );\n\t\t\t\t\t\tif (timings !== null) {\n\t\t\t\t\t\t\t_updatePacing(diff);\n\t\t\t\t\t\t}\n\n\t\t\t\t\t}\n\n\t\t\t\t\tfunction _updatePacing(diff) {\n\n\t\t\t\t\t\tgetTimeAllocated( timings, function ( slideEndTimingSeconds ) {\n\t\t\t\t\t\t\tvar slideEndTiming = slideEndTimingSeconds * 1000;\n\n\t\t\t\t\t\t\tcallRevealApi( 'getSlidePastCount', [], function ( currentSlide ) {\n\t\t\t\t\t\t\t\tvar currentSlideTiming = timings[currentSlide] * 1000;\n\t\t\t\t\t\t\t\tvar timeLeftCurrentSlide = slideEndTiming - diff;\n\t\t\t\t\t\t\t\tif (timeLeftCurrentSlide < 0) {\n\t\t\t\t\t\t\t\t\tpacingEl.className = 'pacing behind';\n\t\t\t\t\t\t\t\t}\n\t\t\t\t\t\t\t\telse if (timeLeftCurrentSlide < currentSlideTiming) {\n\t\t\t\t\t\t\t\t\tpacingEl.className = 'pacing on-track';\n\t\t\t\t\t\t\t\t}\n\t\t\t\t\t\t\t\telse {\n\t\t\t\t\t\t\t\t\tpacingEl.className = 'pacing ahead';\n\t\t\t\t\t\t\t\t}\n\t\t\t\t\t\t\t\t_displayTime( pacingHoursEl, pacingMinutesEl, pacingSecondsEl, timeLeftCurrentSlide );\n\t\t\t\t\t\t\t} );\n\t\t\t\t\t\t} );\n\t\t\t\t\t}\n\n\t\t\t\t}\n\n\t\t\t\t/**\n\t\t\t\t * Sets up the speaker view layout and layout selector.\n\t\t\t\t */\n\t\t\t\tfunction setupLayout() {\n\n\t\t\t\t\tlayoutDropdown = document.querySelector( '.speaker-layout-dropdown' );\n\t\t\t\t\tlayoutLabel = document.querySelector( '.speaker-layout-label' );\n\n\t\t\t\t\t// Render the list of available layouts\n\t\t\t\t\tfor( var id in SPEAKER_LAYOUTS ) {\n\t\t\t\t\t\tvar option = document.createElement( 'option' );\n\t\t\t\t\t\toption.setAttribute( 'value', id );\n\t\t\t\t\t\toption.textContent = SPEAKER_LAYOUTS[ id ];\n\t\t\t\t\t\tlayoutDropdown.appendChild( option );\n\t\t\t\t\t}\n\n\t\t\t\t\t// Monitor the dropdown for changes\n\t\t\t\t\tlayoutDropdown.addEventListener( 'change', function( event ) {\n\n\t\t\t\t\t\tsetLayout( layoutDropdown.value );\n\n\t\t\t\t\t}, false );\n\n\t\t\t\t\t// Restore any currently persisted layout\n\t\t\t\t\tsetLayout( getLayout() );\n\n\t\t\t\t}\n\n\t\t\t\t/**\n\t\t\t\t * Sets a new speaker view layout. The layout is persisted\n\t\t\t\t * in local storage.\n\t\t\t\t */\n\t\t\t\tfunction setLayout( value ) {\n\n\t\t\t\t\tvar title = SPEAKER_LAYOUTS[ value ];\n\n\t\t\t\t\tlayoutLabel.innerHTML = 'Layout' + ( title ? ( ': ' + title ) : '' );\n\t\t\t\t\tlayoutDropdown.value = value;\n\n\t\t\t\t\tdocument.body.setAttribute( 'data-speaker-layout', value );\n\n\t\t\t\t\t// Persist locally\n\t\t\t\t\tif( supportsLocalStorage() ) {\n\t\t\t\t\t\twindow.localStorage.setItem( 'reveal-speaker-layout', value );\n\t\t\t\t\t}\n\n\t\t\t\t}\n\n\t\t\t\t/**\n\t\t\t\t * Returns the ID of the most recently set speaker layout\n\t\t\t\t * or our default layout if none has been set.\n\t\t\t\t */\n\t\t\t\tfunction getLayout() {\n\n\t\t\t\t\tif( supportsLocalStorage() ) {\n\t\t\t\t\t\tvar layout = window.localStorage.getItem( 'reveal-speaker-layout' );\n\t\t\t\t\t\tif( layout ) {\n\t\t\t\t\t\t\treturn layout;\n\t\t\t\t\t\t}\n\t\t\t\t\t}\n\n\t\t\t\t\t// Default to the first record in the layouts hash\n\t\t\t\t\tfor( var id in SPEAKER_LAYOUTS ) {\n\t\t\t\t\t\treturn id;\n\t\t\t\t\t}\n\n\t\t\t\t}\n\n\t\t\t\tfunction supportsLocalStorage() {\n\n\t\t\t\t\ttry {\n\t\t\t\t\t\tlocalStorage.setItem('test', 'test');\n\t\t\t\t\t\tlocalStorage.removeItem('test');\n\t\t\t\t\t\treturn true;\n\t\t\t\t\t}\n\t\t\t\t\tcatch( e ) {\n\t\t\t\t\t\treturn false;\n\t\t\t\t\t}\n\n\t\t\t\t}\n\n\t\t\t\tfunction zeroPadInteger( num ) {\n\n\t\t\t\t\tvar str = '00' + parseInt( num );\n\t\t\t\t\treturn str.substring( str.length - 2 );\n\n\t\t\t\t}\n\n\t\t\t\t/**\n\t\t\t\t * Limits the frequency at which a function can be called.\n\t\t\t\t */\n\t\t\t\tfunction debounce( fn, ms ) {\n\n\t\t\t\t\tvar lastTime = 0,\n\t\t\t\t\t\ttimeout;\n\n\t\t\t\t\treturn function() {\n\n\t\t\t\t\t\tvar args = arguments;\n\t\t\t\t\t\tvar context = this;\n\n\t\t\t\t\t\tclearTimeout( timeout );\n\n\t\t\t\t\t\tvar timeSinceLastCall = Date.now() - lastTime;\n\t\t\t\t\t\tif( timeSinceLastCall > ms ) {\n\t\t\t\t\t\t\tfn.apply( context, args );\n\t\t\t\t\t\t\tlastTime = Date.now();\n\t\t\t\t\t\t}\n\t\t\t\t\t\telse {\n\t\t\t\t\t\t\ttimeout = setTimeout( function() {\n\t\t\t\t\t\t\t\tfn.apply( context, args );\n\t\t\t\t\t\t\t\tlastTime = Date.now();\n\t\t\t\t\t\t\t}, ms - timeSinceLastCall );\n\t\t\t\t\t\t}\n\n\t\t\t\t\t}\n\n\t\t\t\t}\n\n\t\t\t})();\n\n\t\t</script>\n\t</body>\n</html>"
        ),
        e
          ? ((n = setInterval(function () {
              e.postMessage(
                JSON.stringify({
                  namespace: "reveal-notes",
                  type: "connect",
                  url:
                    window.location.protocol +
                    "//" +
                    window.location.host +
                    window.location.pathname +
                    window.location.search,
                  state: t.getState(),
                }),
                "*"
              )
            }, 500)),
            window.addEventListener("message", function (i) {
              var a,
                o,
                l,
                s,
                c = JSON.parse(i.data)
              c &&
                "reveal-notes" === c.namespace &&
                "connected" === c.type &&
                (clearInterval(n),
                t.on("slidechanged", r),
                t.on("fragmentshown", r),
                t.on("fragmenthidden", r),
                t.on("overviewhidden", r),
                t.on("overviewshown", r),
                t.on("paused", r),
                t.on("resumed", r),
                r()),
                c &&
                  "reveal-notes" === c.namespace &&
                  "call" === c.type &&
                  ((a = c.methodName),
                  (o = c.arguments),
                  (l = c.callId),
                  (s = t[a].apply(t, o)),
                  e.postMessage(
                    JSON.stringify({
                      namespace: "reveal-notes",
                      type: "return",
                      result: s,
                      callId: l,
                    }),
                    "*"
                  ))
            }))
          : alert(
              "Speaker view popup failed to open. Please make sure popups are allowed and reopen the speaker view."
            ))
      : e.focus()
    function r(n) {
      var r = t.getCurrentSlide(),
        i = r.querySelector("aside.notes"),
        a = r.querySelector(".current-fragment"),
        o = {
          namespace: "reveal-notes",
          type: "state",
          notes: "",
          markdown: !1,
          whitespace: "normal",
          state: t.getState(),
        }
      if (
        (r.hasAttribute("data-notes") &&
          ((o.notes = r.getAttribute("data-notes")),
          (o.whitespace = "pre-wrap")),
        a)
      ) {
        var l = a.querySelector("aside.notes")
        l
          ? (i = l)
          : a.hasAttribute("data-notes") &&
            ((o.notes = a.getAttribute("data-notes")),
            (o.whitespace = "pre-wrap"),
            (i = null))
      }
      i &&
        ((o.notes = i.innerHTML),
        (o.markdown = "string" == typeof i.getAttribute("data-markdown"))),
        e.postMessage(JSON.stringify(o), "*")
    }
  }
  return {
    id: "notes",
    init: function (e) {
      ;(t = e),
        /receiver/i.test(window.location.search) ||
          (null !== window.location.search.match(/(\?|\&)notes/gi) && n(),
          t.addKeyBinding(
            { keyCode: 83, key: "S", description: "Speaker notes view" },
            function () {
              n()
            }
          ))
    },
    open: n,
  }
}
