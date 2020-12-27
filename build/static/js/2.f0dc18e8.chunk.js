/*! For license information please see 2.f0dc18e8.chunk.js.LICENSE.txt */
(this.webpackJsonpclient = this.webpackJsonpclient || []).push([
  [2],
  [
    function (e, t, n) {
      "use strict";
      e.exports = n(65);
    },
    function (e, t, n) {
      "use strict";
      e.exports = n(64);
    },
    function (e, t, n) {
      "use strict";
      n.d(t, "a", function () {
        return c;
      }),
        n.d(t, "b", function () {
          return m;
        }),
        n.d(t, "c", function () {
          return x;
        });
      var r = n(0),
        a = n.n(r),
        i = (n(39), a.a.createContext(null));
      var o = function (e) {
          e();
        },
        l = { notify: function () {} };
      function s() {
        var e = o,
          t = null,
          n = null;
        return {
          clear: function () {
            (t = null), (n = null);
          },
          notify: function () {
            e(function () {
              for (var e = t; e; ) e.callback(), (e = e.next);
            });
          },
          get: function () {
            for (var e = [], n = t; n; ) e.push(n), (n = n.next);
            return e;
          },
          subscribe: function (e) {
            var r = !0,
              a = (n = { callback: e, next: null, prev: n });
            return (
              a.prev ? (a.prev.next = a) : (t = a),
              function () {
                r &&
                  null !== t &&
                  ((r = !1),
                  a.next ? (a.next.prev = a.prev) : (n = a.prev),
                  a.prev ? (a.prev.next = a.next) : (t = a.next));
              }
            );
          },
        };
      }
      var u = (function () {
        function e(e, t) {
          (this.store = e),
            (this.parentSub = t),
            (this.unsubscribe = null),
            (this.listeners = l),
            (this.handleChangeWrapper = this.handleChangeWrapper.bind(this));
        }
        var t = e.prototype;
        return (
          (t.addNestedSub = function (e) {
            return this.trySubscribe(), this.listeners.subscribe(e);
          }),
          (t.notifyNestedSubs = function () {
            this.listeners.notify();
          }),
          (t.handleChangeWrapper = function () {
            this.onStateChange && this.onStateChange();
          }),
          (t.isSubscribed = function () {
            return Boolean(this.unsubscribe);
          }),
          (t.trySubscribe = function () {
            this.unsubscribe ||
              ((this.unsubscribe = this.parentSub
                ? this.parentSub.addNestedSub(this.handleChangeWrapper)
                : this.store.subscribe(this.handleChangeWrapper)),
              (this.listeners = s()));
          }),
          (t.tryUnsubscribe = function () {
            this.unsubscribe &&
              (this.unsubscribe(),
              (this.unsubscribe = null),
              this.listeners.clear(),
              (this.listeners = l));
          }),
          e
        );
      })();
      var c = function (e) {
        var t = e.store,
          n = e.context,
          o = e.children,
          l = Object(r.useMemo)(
            function () {
              var e = new u(t);
              return (
                (e.onStateChange = e.notifyNestedSubs),
                { store: t, subscription: e }
              );
            },
            [t]
          ),
          s = Object(r.useMemo)(
            function () {
              return t.getState();
            },
            [t]
          );
        Object(r.useEffect)(
          function () {
            var e = l.subscription;
            return (
              e.trySubscribe(),
              s !== t.getState() && e.notifyNestedSubs(),
              function () {
                e.tryUnsubscribe(), (e.onStateChange = null);
              }
            );
          },
          [l, s]
        );
        var c = n || i;
        return a.a.createElement(c.Provider, { value: l }, o);
      };
      n(11), n(8);
      var f =
        "undefined" !== typeof window &&
        "undefined" !== typeof window.document &&
        "undefined" !== typeof window.document.createElement
          ? r.useLayoutEffect
          : r.useEffect;
      n(12);
      function d() {
        return Object(r.useContext)(i);
      }
      function h(e) {
        void 0 === e && (e = i);
        var t =
          e === i
            ? d
            : function () {
                return Object(r.useContext)(e);
              };
        return function () {
          return t().store;
        };
      }
      var p = h();
      function g(e) {
        void 0 === e && (e = i);
        var t = e === i ? p : h(e);
        return function () {
          return t().dispatch;
        };
      }
      var m = g(),
        v = function (e, t) {
          return e === t;
        };
      function y(e) {
        void 0 === e && (e = i);
        var t =
          e === i
            ? d
            : function () {
                return Object(r.useContext)(e);
              };
        return function (e, n) {
          void 0 === n && (n = v);
          var a = t(),
            i = (function (e, t, n, a) {
              var i,
                o = Object(r.useReducer)(function (e) {
                  return e + 1;
                }, 0)[1],
                l = Object(r.useMemo)(
                  function () {
                    return new u(n, a);
                  },
                  [n, a]
                ),
                s = Object(r.useRef)(),
                c = Object(r.useRef)(),
                d = Object(r.useRef)(),
                h = Object(r.useRef)(),
                p = n.getState();
              try {
                i =
                  e !== c.current || p !== d.current || s.current
                    ? e(p)
                    : h.current;
              } catch (g) {
                throw (
                  (s.current &&
                    (g.message +=
                      "\nThe error may be correlated with this previous error:\n" +
                      s.current.stack +
                      "\n\n"),
                  g)
                );
              }
              return (
                f(function () {
                  (c.current = e),
                    (d.current = p),
                    (h.current = i),
                    (s.current = void 0);
                }),
                f(
                  function () {
                    function e() {
                      try {
                        var e = c.current(n.getState());
                        if (t(e, h.current)) return;
                        h.current = e;
                      } catch (g) {
                        s.current = g;
                      }
                      o();
                    }
                    return (
                      (l.onStateChange = e),
                      l.trySubscribe(),
                      e(),
                      function () {
                        return l.tryUnsubscribe();
                      }
                    );
                  },
                  [n, l]
                ),
                i
              );
            })(e, n, a.store, a.subscription);
          return Object(r.useDebugValue)(i), i;
        };
      }
      var b,
        x = y(),
        _ = n(22);
      (b = _.unstable_batchedUpdates), (o = b);
    },
    function (e, t, n) {
      "use strict";
      function r(e, t) {
        return (
          t || (t = e.slice(0)),
          Object.freeze(
            Object.defineProperties(e, { raw: { value: Object.freeze(t) } })
          )
        );
      }
      n.d(t, "a", function () {
        return r;
      });
    },
    function (e, t, n) {
      "use strict";
      (function (e) {
        var r = n(8),
          a = n(0),
          i = n.n(a),
          o = n(58),
          l = n.n(o),
          s = n(59),
          u = n(60),
          c = n(38),
          f = n(11),
          d = n.n(f);
        function h() {
          return (h =
            Object.assign ||
            function (e) {
              for (var t = 1; t < arguments.length; t++) {
                var n = arguments[t];
                for (var r in n)
                  Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
              }
              return e;
            }).apply(this, arguments);
        }
        var p = function (e, t) {
            for (var n = [e[0]], r = 0, a = t.length; r < a; r += 1)
              n.push(t[r], e[r + 1]);
            return n;
          },
          g = function (e) {
            return (
              null !== e &&
              "object" == typeof e &&
              "[object Object]" ===
                (e.toString
                  ? e.toString()
                  : Object.prototype.toString.call(e)) &&
              !Object(r.typeOf)(e)
            );
          },
          m = Object.freeze([]),
          v = Object.freeze({});
        function y(e) {
          return "function" == typeof e;
        }
        function b(e) {
          return e.displayName || e.name || "Component";
        }
        function x(e) {
          return e && "string" == typeof e.styledComponentId;
        }
        var _ =
            ("undefined" != typeof e &&
              (Object({
                NODE_ENV: "production",
                PUBLIC_URL: "",
                WDS_SOCKET_HOST: void 0,
                WDS_SOCKET_PATH: void 0,
                WDS_SOCKET_PORT: void 0,
                FAST_REFRESH: !0,
              }).REACT_APP_SC_ATTR ||
                Object({
                  NODE_ENV: "production",
                  PUBLIC_URL: "",
                  WDS_SOCKET_HOST: void 0,
                  WDS_SOCKET_PATH: void 0,
                  WDS_SOCKET_PORT: void 0,
                  FAST_REFRESH: !0,
                }).SC_ATTR)) ||
            "data-styled",
          w = "undefined" != typeof window && "HTMLElement" in window,
          k = Boolean(
            "boolean" == typeof SC_DISABLE_SPEEDY
              ? SC_DISABLE_SPEEDY
              : "undefined" != typeof e &&
                void 0 !==
                  Object({
                    NODE_ENV: "production",
                    PUBLIC_URL: "",
                    WDS_SOCKET_HOST: void 0,
                    WDS_SOCKET_PATH: void 0,
                    WDS_SOCKET_PORT: void 0,
                    FAST_REFRESH: !0,
                  }).REACT_APP_SC_DISABLE_SPEEDY &&
                "" !==
                  Object({
                    NODE_ENV: "production",
                    PUBLIC_URL: "",
                    WDS_SOCKET_HOST: void 0,
                    WDS_SOCKET_PATH: void 0,
                    WDS_SOCKET_PORT: void 0,
                    FAST_REFRESH: !0,
                  }).REACT_APP_SC_DISABLE_SPEEDY
              ? "false" !==
                  Object({
                    NODE_ENV: "production",
                    PUBLIC_URL: "",
                    WDS_SOCKET_HOST: void 0,
                    WDS_SOCKET_PATH: void 0,
                    WDS_SOCKET_PORT: void 0,
                    FAST_REFRESH: !0,
                  }).REACT_APP_SC_DISABLE_SPEEDY &&
                Object({
                  NODE_ENV: "production",
                  PUBLIC_URL: "",
                  WDS_SOCKET_HOST: void 0,
                  WDS_SOCKET_PATH: void 0,
                  WDS_SOCKET_PORT: void 0,
                  FAST_REFRESH: !0,
                }).REACT_APP_SC_DISABLE_SPEEDY
              : "undefined" != typeof e &&
                void 0 !==
                  Object({
                    NODE_ENV: "production",
                    PUBLIC_URL: "",
                    WDS_SOCKET_HOST: void 0,
                    WDS_SOCKET_PATH: void 0,
                    WDS_SOCKET_PORT: void 0,
                    FAST_REFRESH: !0,
                  }).SC_DISABLE_SPEEDY &&
                "" !==
                  Object({
                    NODE_ENV: "production",
                    PUBLIC_URL: "",
                    WDS_SOCKET_HOST: void 0,
                    WDS_SOCKET_PATH: void 0,
                    WDS_SOCKET_PORT: void 0,
                    FAST_REFRESH: !0,
                  }).SC_DISABLE_SPEEDY &&
                "false" !==
                  Object({
                    NODE_ENV: "production",
                    PUBLIC_URL: "",
                    WDS_SOCKET_HOST: void 0,
                    WDS_SOCKET_PATH: void 0,
                    WDS_SOCKET_PORT: void 0,
                    FAST_REFRESH: !0,
                  }).SC_DISABLE_SPEEDY &&
                Object({
                  NODE_ENV: "production",
                  PUBLIC_URL: "",
                  WDS_SOCKET_HOST: void 0,
                  WDS_SOCKET_PATH: void 0,
                  WDS_SOCKET_PORT: void 0,
                  FAST_REFRESH: !0,
                }).SC_DISABLE_SPEEDY
          );
        function S(e) {
          for (
            var t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), r = 1;
            r < t;
            r++
          )
            n[r - 1] = arguments[r];
          throw new Error(
            "An error occurred. See https://git.io/JUIaE#" +
              e +
              " for more information." +
              (n.length > 0 ? " Args: " + n.join(", ") : "")
          );
        }
        var C = (function () {
            function e(e) {
              (this.groupSizes = new Uint32Array(512)),
                (this.length = 512),
                (this.tag = e);
            }
            var t = e.prototype;
            return (
              (t.indexOfGroup = function (e) {
                for (var t = 0, n = 0; n < e; n++) t += this.groupSizes[n];
                return t;
              }),
              (t.insertRules = function (e, t) {
                if (e >= this.groupSizes.length) {
                  for (var n = this.groupSizes, r = n.length, a = r; e >= a; )
                    (a <<= 1) < 0 && S(16, "" + e);
                  (this.groupSizes = new Uint32Array(a)),
                    this.groupSizes.set(n),
                    (this.length = a);
                  for (var i = r; i < a; i++) this.groupSizes[i] = 0;
                }
                for (
                  var o = this.indexOfGroup(e + 1), l = 0, s = t.length;
                  l < s;
                  l++
                )
                  this.tag.insertRule(o, t[l]) && (this.groupSizes[e]++, o++);
              }),
              (t.clearGroup = function (e) {
                if (e < this.length) {
                  var t = this.groupSizes[e],
                    n = this.indexOfGroup(e),
                    r = n + t;
                  this.groupSizes[e] = 0;
                  for (var a = n; a < r; a++) this.tag.deleteRule(n);
                }
              }),
              (t.getGroup = function (e) {
                var t = "";
                if (e >= this.length || 0 === this.groupSizes[e]) return t;
                for (
                  var n = this.groupSizes[e],
                    r = this.indexOfGroup(e),
                    a = r + n,
                    i = r;
                  i < a;
                  i++
                )
                  t += this.tag.getRule(i) + "/*!sc*/\n";
                return t;
              }),
              e
            );
          })(),
          M = new Map(),
          O = new Map(),
          P = 1,
          E = function (e) {
            if (M.has(e)) return M.get(e);
            for (; O.has(P); ) P++;
            var t = P++;
            return M.set(e, t), O.set(t, e), t;
          },
          D = function (e) {
            return O.get(e);
          },
          T = function (e, t) {
            M.set(e, t), O.set(t, e);
          },
          A = "style[" + _ + '][data-styled-version="5.2.1"]',
          N = new RegExp(
            "^" + _ + '\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)'
          ),
          I = function (e, t, n) {
            for (var r, a = n.split(","), i = 0, o = a.length; i < o; i++)
              (r = a[i]) && e.registerName(t, r);
          },
          R = function (e, t) {
            for (
              var n = t.innerHTML.split("/*!sc*/\n"),
                r = [],
                a = 0,
                i = n.length;
              a < i;
              a++
            ) {
              var o = n[a].trim();
              if (o) {
                var l = o.match(N);
                if (l) {
                  var s = 0 | parseInt(l[1], 10),
                    u = l[2];
                  0 !== s &&
                    (T(u, s), I(e, u, l[3]), e.getTag().insertRules(s, r)),
                    (r.length = 0);
                } else r.push(o);
              }
            }
          },
          L = function () {
            return n.nc;
          },
          F = function (e) {
            var t = document.head,
              n = e || t,
              r = document.createElement("style"),
              a = (function (e) {
                for (var t = e.childNodes, n = t.length; n >= 0; n--) {
                  var r = t[n];
                  if (r && 1 === r.nodeType && r.hasAttribute(_)) return r;
                }
              })(n),
              i = void 0 !== a ? a.nextSibling : null;
            r.setAttribute(_, "active"),
              r.setAttribute("data-styled-version", "5.2.1");
            var o = L();
            return o && r.setAttribute("nonce", o), n.insertBefore(r, i), r;
          },
          j = (function () {
            function e(e) {
              var t = (this.element = F(e));
              t.appendChild(document.createTextNode("")),
                (this.sheet = (function (e) {
                  if (e.sheet) return e.sheet;
                  for (
                    var t = document.styleSheets, n = 0, r = t.length;
                    n < r;
                    n++
                  ) {
                    var a = t[n];
                    if (a.ownerNode === e) return a;
                  }
                  S(17);
                })(t)),
                (this.length = 0);
            }
            var t = e.prototype;
            return (
              (t.insertRule = function (e, t) {
                try {
                  return this.sheet.insertRule(t, e), this.length++, !0;
                } catch (e) {
                  return !1;
                }
              }),
              (t.deleteRule = function (e) {
                this.sheet.deleteRule(e), this.length--;
              }),
              (t.getRule = function (e) {
                var t = this.sheet.cssRules[e];
                return void 0 !== t && "string" == typeof t.cssText
                  ? t.cssText
                  : "";
              }),
              e
            );
          })(),
          z = (function () {
            function e(e) {
              var t = (this.element = F(e));
              (this.nodes = t.childNodes), (this.length = 0);
            }
            var t = e.prototype;
            return (
              (t.insertRule = function (e, t) {
                if (e <= this.length && e >= 0) {
                  var n = document.createTextNode(t),
                    r = this.nodes[e];
                  return (
                    this.element.insertBefore(n, r || null), this.length++, !0
                  );
                }
                return !1;
              }),
              (t.deleteRule = function (e) {
                this.element.removeChild(this.nodes[e]), this.length--;
              }),
              (t.getRule = function (e) {
                return e < this.length ? this.nodes[e].textContent : "";
              }),
              e
            );
          })(),
          W = (function () {
            function e(e) {
              (this.rules = []), (this.length = 0);
            }
            var t = e.prototype;
            return (
              (t.insertRule = function (e, t) {
                return (
                  e <= this.length &&
                  (this.rules.splice(e, 0, t), this.length++, !0)
                );
              }),
              (t.deleteRule = function (e) {
                this.rules.splice(e, 1), this.length--;
              }),
              (t.getRule = function (e) {
                return e < this.length ? this.rules[e] : "";
              }),
              e
            );
          })(),
          V = w,
          Y = { isServer: !w, useCSSOMInjection: !k },
          B = (function () {
            function e(e, t, n) {
              void 0 === e && (e = v),
                void 0 === t && (t = {}),
                (this.options = h({}, Y, {}, e)),
                (this.gs = t),
                (this.names = new Map(n)),
                !this.options.isServer &&
                  w &&
                  V &&
                  ((V = !1),
                  (function (e) {
                    for (
                      var t = document.querySelectorAll(A), n = 0, r = t.length;
                      n < r;
                      n++
                    ) {
                      var a = t[n];
                      a &&
                        "active" !== a.getAttribute(_) &&
                        (R(e, a), a.parentNode && a.parentNode.removeChild(a));
                    }
                  })(this));
            }
            e.registerId = function (e) {
              return E(e);
            };
            var t = e.prototype;
            return (
              (t.reconstructWithOptions = function (t, n) {
                return (
                  void 0 === n && (n = !0),
                  new e(
                    h({}, this.options, {}, t),
                    this.gs,
                    (n && this.names) || void 0
                  )
                );
              }),
              (t.allocateGSInstance = function (e) {
                return (this.gs[e] = (this.gs[e] || 0) + 1);
              }),
              (t.getTag = function () {
                return (
                  this.tag ||
                  (this.tag =
                    ((n = (t = this.options).isServer),
                    (r = t.useCSSOMInjection),
                    (a = t.target),
                    (e = n ? new W(a) : r ? new j(a) : new z(a)),
                    new C(e)))
                );
                var e, t, n, r, a;
              }),
              (t.hasNameForId = function (e, t) {
                return this.names.has(e) && this.names.get(e).has(t);
              }),
              (t.registerName = function (e, t) {
                if ((E(e), this.names.has(e))) this.names.get(e).add(t);
                else {
                  var n = new Set();
                  n.add(t), this.names.set(e, n);
                }
              }),
              (t.insertRules = function (e, t, n) {
                this.registerName(e, t), this.getTag().insertRules(E(e), n);
              }),
              (t.clearNames = function (e) {
                this.names.has(e) && this.names.get(e).clear();
              }),
              (t.clearRules = function (e) {
                this.getTag().clearGroup(E(e)), this.clearNames(e);
              }),
              (t.clearTag = function () {
                this.tag = void 0;
              }),
              (t.toString = function () {
                return (function (e) {
                  for (
                    var t = e.getTag(), n = t.length, r = "", a = 0;
                    a < n;
                    a++
                  ) {
                    var i = D(a);
                    if (void 0 !== i) {
                      var o = e.names.get(i),
                        l = t.getGroup(a);
                      if (void 0 !== o && 0 !== l.length) {
                        var s = _ + ".g" + a + '[id="' + i + '"]',
                          u = "";
                        void 0 !== o &&
                          o.forEach(function (e) {
                            e.length > 0 && (u += e + ",");
                          }),
                          (r += "" + l + s + '{content:"' + u + '"}/*!sc*/\n');
                      }
                    }
                  }
                  return r;
                })(this);
              }),
              e
            );
          })(),
          H = /(a)(d)/gi,
          U = function (e) {
            return String.fromCharCode(e + (e > 25 ? 39 : 97));
          };
        function $(e) {
          var t,
            n = "";
          for (t = Math.abs(e); t > 52; t = (t / 52) | 0) n = U(t % 52) + n;
          return (U(t % 52) + n).replace(H, "$1-$2");
        }
        var G = function (e, t) {
            for (var n = t.length; n; ) e = (33 * e) ^ t.charCodeAt(--n);
            return e;
          },
          q = function (e) {
            return G(5381, e);
          };
        function K(e) {
          for (var t = 0; t < e.length; t += 1) {
            var n = e[t];
            if (y(n) && !x(n)) return !1;
          }
          return !0;
        }
        var Q = q("5.2.1"),
          Z = (function () {
            function e(e, t, n) {
              (this.rules = e),
                (this.staticRulesId = ""),
                (this.isStatic = (void 0 === n || n.isStatic) && K(e)),
                (this.componentId = t),
                (this.baseHash = G(Q, t)),
                (this.baseStyle = n),
                B.registerId(t);
            }
            return (
              (e.prototype.generateAndInjectStyles = function (e, t, n) {
                var r = this.componentId,
                  a = [];
                if (
                  (this.baseStyle &&
                    a.push(this.baseStyle.generateAndInjectStyles(e, t, n)),
                  this.isStatic && !n.hash)
                )
                  if (
                    this.staticRulesId &&
                    t.hasNameForId(r, this.staticRulesId)
                  )
                    a.push(this.staticRulesId);
                  else {
                    var i = ge(this.rules, e, t, n).join(""),
                      o = $(G(this.baseHash, i.length) >>> 0);
                    if (!t.hasNameForId(r, o)) {
                      var l = n(i, "." + o, void 0, r);
                      t.insertRules(r, o, l);
                    }
                    a.push(o), (this.staticRulesId = o);
                  }
                else {
                  for (
                    var s = this.rules.length,
                      u = G(this.baseHash, n.hash),
                      c = "",
                      f = 0;
                    f < s;
                    f++
                  ) {
                    var d = this.rules[f];
                    if ("string" == typeof d) c += d;
                    else if (d) {
                      var h = ge(d, e, t, n),
                        p = Array.isArray(h) ? h.join("") : h;
                      (u = G(u, p + f)), (c += p);
                    }
                  }
                  if (c) {
                    var g = $(u >>> 0);
                    if (!t.hasNameForId(r, g)) {
                      var m = n(c, "." + g, void 0, r);
                      t.insertRules(r, g, m);
                    }
                    a.push(g);
                  }
                }
                return a.join(" ");
              }),
              e
            );
          })(),
          X = /^\s*\/\/.*$/gm,
          J = [":", "[", ".", "#"];
        function ee(e) {
          var t,
            n,
            r,
            a,
            i = void 0 === e ? v : e,
            o = i.options,
            l = void 0 === o ? v : o,
            u = i.plugins,
            c = void 0 === u ? m : u,
            f = new s.a(l),
            d = [],
            h = (function (e) {
              function t(t) {
                if (t)
                  try {
                    e(t + "}");
                  } catch (e) {}
              }
              return function (n, r, a, i, o, l, s, u, c, f) {
                switch (n) {
                  case 1:
                    if (0 === c && 64 === r.charCodeAt(0))
                      return e(r + ";"), "";
                    break;
                  case 2:
                    if (0 === u) return r + "/*|*/";
                    break;
                  case 3:
                    switch (u) {
                      case 102:
                      case 112:
                        return e(a[0] + r), "";
                      default:
                        return r + (0 === f ? "/*|*/" : "");
                    }
                  case -2:
                    r.split("/*|*/}").forEach(t);
                }
              };
            })(function (e) {
              d.push(e);
            }),
            p = function (e, r, i) {
              return (0 === r && J.includes(i[n.length])) || i.match(a)
                ? e
                : "." + t;
            };
          function g(e, i, o, l) {
            void 0 === l && (l = "&");
            var s = e.replace(X, ""),
              u = i && o ? o + " " + i + " { " + s + " }" : s;
            return (
              (t = l),
              (n = i),
              (r = new RegExp("\\" + n + "\\b", "g")),
              (a = new RegExp("(\\" + n + "\\b){2,}")),
              f(o || !i ? "" : i, u)
            );
          }
          return (
            f.use(
              [].concat(c, [
                function (e, t, a) {
                  2 === e &&
                    a.length &&
                    a[0].lastIndexOf(n) > 0 &&
                    (a[0] = a[0].replace(r, p));
                },
                h,
                function (e) {
                  if (-2 === e) {
                    var t = d;
                    return (d = []), t;
                  }
                },
              ])
            ),
            (g.hash = c.length
              ? c
                  .reduce(function (e, t) {
                    return t.name || S(15), G(e, t.name);
                  }, 5381)
                  .toString()
              : ""),
            g
          );
        }
        var te = i.a.createContext(),
          ne = (te.Consumer, i.a.createContext()),
          re = (ne.Consumer, new B()),
          ae = ee();
        function ie() {
          return Object(a.useContext)(te) || re;
        }
        function oe() {
          return Object(a.useContext)(ne) || ae;
        }
        function le(e) {
          var t = Object(a.useState)(e.stylisPlugins),
            n = t[0],
            r = t[1],
            o = ie(),
            s = Object(a.useMemo)(
              function () {
                var t = o;
                return (
                  e.sheet
                    ? (t = e.sheet)
                    : e.target &&
                      (t = t.reconstructWithOptions({ target: e.target }, !1)),
                  e.disableCSSOMInjection &&
                    (t = t.reconstructWithOptions({ useCSSOMInjection: !1 })),
                  t
                );
              },
              [e.disableCSSOMInjection, e.sheet, e.target]
            ),
            u = Object(a.useMemo)(
              function () {
                return ee({
                  options: { prefix: !e.disableVendorPrefixes },
                  plugins: n,
                });
              },
              [e.disableVendorPrefixes, n]
            );
          return (
            Object(a.useEffect)(
              function () {
                l()(n, e.stylisPlugins) || r(e.stylisPlugins);
              },
              [e.stylisPlugins]
            ),
            i.a.createElement(
              te.Provider,
              { value: s },
              i.a.createElement(ne.Provider, { value: u }, e.children)
            )
          );
        }
        var se = (function () {
            function e(e, t) {
              var n = this;
              (this.inject = function (e, t) {
                void 0 === t && (t = ae);
                var r = n.name + t.hash;
                e.hasNameForId(n.id, r) ||
                  e.insertRules(n.id, r, t(n.rules, r, "@keyframes"));
              }),
                (this.toString = function () {
                  return S(12, String(n.name));
                }),
                (this.name = e),
                (this.id = "sc-keyframes-" + e),
                (this.rules = t);
            }
            return (
              (e.prototype.getName = function (e) {
                return void 0 === e && (e = ae), this.name + e.hash;
              }),
              e
            );
          })(),
          ue = /([A-Z])/,
          ce = /([A-Z])/g,
          fe = /^ms-/,
          de = function (e) {
            return "-" + e.toLowerCase();
          };
        function he(e) {
          return ue.test(e) ? e.replace(ce, de).replace(fe, "-ms-") : e;
        }
        var pe = function (e) {
          return null == e || !1 === e || "" === e;
        };
        function ge(e, t, n, r) {
          if (Array.isArray(e)) {
            for (var a, i = [], o = 0, l = e.length; o < l; o += 1)
              "" !== (a = ge(e[o], t, n, r)) &&
                (Array.isArray(a) ? i.push.apply(i, a) : i.push(a));
            return i;
          }
          return pe(e)
            ? ""
            : x(e)
            ? "." + e.styledComponentId
            : y(e)
            ? "function" != typeof (s = e) ||
              (s.prototype && s.prototype.isReactComponent) ||
              !t
              ? e
              : ge(e(t), t, n, r)
            : e instanceof se
            ? n
              ? (e.inject(n, r), e.getName(r))
              : e
            : g(e)
            ? (function e(t, n) {
                var r,
                  a,
                  i = [];
                for (var o in t)
                  t.hasOwnProperty(o) &&
                    !pe(t[o]) &&
                    (g(t[o])
                      ? i.push.apply(i, e(t[o], o))
                      : y(t[o])
                      ? i.push(he(o) + ":", t[o], ";")
                      : i.push(
                          he(o) +
                            ": " +
                            ((r = o),
                            (null == (a = t[o]) ||
                            "boolean" == typeof a ||
                            "" === a
                              ? ""
                              : "number" != typeof a || 0 === a || r in u.a
                              ? String(a).trim()
                              : a + "px") + ";")
                        ));
                return n ? [n + " {"].concat(i, ["}"]) : i;
              })(e)
            : e.toString();
          var s;
        }
        function me(e) {
          for (
            var t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), r = 1;
            r < t;
            r++
          )
            n[r - 1] = arguments[r];
          return y(e) || g(e)
            ? ge(p(m, [e].concat(n)))
            : 0 === n.length && 1 === e.length && "string" == typeof e[0]
            ? e
            : ge(p(e, n));
        }
        new Set();
        var ve = function (e, t, n) {
            return (
              void 0 === n && (n = v),
              (e.theme !== n.theme && e.theme) || t || n.theme
            );
          },
          ye = /[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,
          be = /(^-|-$)/g;
        function xe(e) {
          return e.replace(ye, "-").replace(be, "");
        }
        var _e = function (e) {
          return $(q(e) >>> 0);
        };
        function we(e) {
          return "string" == typeof e && !0;
        }
        var ke = function (e) {
            return (
              "function" == typeof e ||
              ("object" == typeof e && null !== e && !Array.isArray(e))
            );
          },
          Se = function (e) {
            return (
              "__proto__" !== e && "constructor" !== e && "prototype" !== e
            );
          };
        function Ce(e, t, n) {
          var r = e[n];
          ke(t) && ke(r) ? Me(r, t) : (e[n] = t);
        }
        function Me(e) {
          for (
            var t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), r = 1;
            r < t;
            r++
          )
            n[r - 1] = arguments[r];
          for (var a = 0, i = n; a < i.length; a++) {
            var o = i[a];
            if (ke(o)) for (var l in o) Se(l) && Ce(e, o[l], l);
          }
          return e;
        }
        var Oe = i.a.createContext();
        Oe.Consumer;
        var Pe = {};
        function Ee(e, t, n) {
          var r = x(e),
            o = !we(e),
            l = t.attrs,
            s = void 0 === l ? m : l,
            u = t.componentId,
            f =
              void 0 === u
                ? (function (e, t) {
                    var n = "string" != typeof e ? "sc" : xe(e);
                    Pe[n] = (Pe[n] || 0) + 1;
                    var r = n + "-" + _e("5.2.1" + n + Pe[n]);
                    return t ? t + "-" + r : r;
                  })(t.displayName, t.parentComponentId)
                : u,
            p = t.displayName,
            g =
              void 0 === p
                ? (function (e) {
                    return we(e) ? "styled." + e : "Styled(" + b(e) + ")";
                  })(e)
                : p,
            _ =
              t.displayName && t.componentId
                ? xe(t.displayName) + "-" + t.componentId
                : t.componentId || f,
            w =
              r && e.attrs
                ? Array.prototype.concat(e.attrs, s).filter(Boolean)
                : s,
            k = t.shouldForwardProp;
          r &&
            e.shouldForwardProp &&
            (k = t.shouldForwardProp
              ? function (n, r) {
                  return e.shouldForwardProp(n, r) && t.shouldForwardProp(n, r);
                }
              : e.shouldForwardProp);
          var S,
            C = new Z(n, _, r ? e.componentStyle : void 0),
            M = C.isStatic && 0 === s.length,
            O = function (e, t) {
              return (function (e, t, n, r) {
                var i = e.attrs,
                  o = e.componentStyle,
                  l = e.defaultProps,
                  s = e.foldedComponentIds,
                  u = e.shouldForwardProp,
                  f = e.styledComponentId,
                  d = e.target,
                  p = (function (e, t, n) {
                    void 0 === e && (e = v);
                    var r = h({}, t, { theme: e }),
                      a = {};
                    return (
                      n.forEach(function (e) {
                        var t,
                          n,
                          i,
                          o = e;
                        for (t in (y(o) && (o = o(r)), o))
                          r[t] = a[t] =
                            "className" === t
                              ? ((n = a[t]),
                                (i = o[t]),
                                n && i ? n + " " + i : n || i)
                              : o[t];
                      }),
                      [r, a]
                    );
                  })(ve(t, Object(a.useContext)(Oe), l) || v, t, i),
                  g = p[0],
                  m = p[1],
                  b = (function (e, t, n, r) {
                    var a = ie(),
                      i = oe();
                    return t
                      ? e.generateAndInjectStyles(v, a, i)
                      : e.generateAndInjectStyles(n, a, i);
                  })(o, r, g),
                  x = n,
                  _ = m.$as || t.$as || m.as || t.as || d,
                  w = we(_),
                  k = m !== t ? h({}, t, {}, m) : t,
                  S = {};
                for (var C in k)
                  "$" !== C[0] &&
                    "as" !== C &&
                    ("forwardedAs" === C
                      ? (S.as = k[C])
                      : (u ? u(C, c.a) : !w || Object(c.a)(C)) &&
                        (S[C] = k[C]));
                return (
                  t.style &&
                    m.style !== t.style &&
                    (S.style = h({}, t.style, {}, m.style)),
                  (S.className = Array.prototype
                    .concat(s, f, b !== f ? b : null, t.className, m.className)
                    .filter(Boolean)
                    .join(" ")),
                  (S.ref = x),
                  Object(a.createElement)(_, S)
                );
              })(S, e, t, M);
            };
          return (
            (O.displayName = g),
            ((S = i.a.forwardRef(O)).attrs = w),
            (S.componentStyle = C),
            (S.displayName = g),
            (S.shouldForwardProp = k),
            (S.foldedComponentIds = r
              ? Array.prototype.concat(
                  e.foldedComponentIds,
                  e.styledComponentId
                )
              : m),
            (S.styledComponentId = _),
            (S.target = r ? e.target : e),
            (S.withComponent = function (e) {
              var r = t.componentId,
                a = (function (e, t) {
                  if (null == e) return {};
                  var n,
                    r,
                    a = {},
                    i = Object.keys(e);
                  for (r = 0; r < i.length; r++)
                    (n = i[r]), t.indexOf(n) >= 0 || (a[n] = e[n]);
                  return a;
                })(t, ["componentId"]),
                i = r && r + "-" + (we(e) ? e : xe(b(e)));
              return Ee(e, h({}, a, { attrs: w, componentId: i }), n);
            }),
            Object.defineProperty(S, "defaultProps", {
              get: function () {
                return this._foldedDefaultProps;
              },
              set: function (t) {
                this._foldedDefaultProps = r ? Me({}, e.defaultProps, t) : t;
              },
            }),
            (S.toString = function () {
              return "." + S.styledComponentId;
            }),
            o &&
              d()(S, e, {
                attrs: !0,
                componentStyle: !0,
                displayName: !0,
                foldedComponentIds: !0,
                shouldForwardProp: !0,
                styledComponentId: !0,
                target: !0,
                withComponent: !0,
              }),
            S
          );
        }
        var De = function (e) {
          return (function e(t, n, a) {
            if ((void 0 === a && (a = v), !Object(r.isValidElementType)(n)))
              return S(1, String(n));
            var i = function () {
              return t(n, a, me.apply(void 0, arguments));
            };
            return (
              (i.withConfig = function (r) {
                return e(t, n, h({}, a, {}, r));
              }),
              (i.attrs = function (r) {
                return e(
                  t,
                  n,
                  h({}, a, {
                    attrs: Array.prototype.concat(a.attrs, r).filter(Boolean),
                  })
                );
              }),
              i
            );
          })(Ee, e);
        };
        [
          "a",
          "abbr",
          "address",
          "area",
          "article",
          "aside",
          "audio",
          "b",
          "base",
          "bdi",
          "bdo",
          "big",
          "blockquote",
          "body",
          "br",
          "button",
          "canvas",
          "caption",
          "cite",
          "code",
          "col",
          "colgroup",
          "data",
          "datalist",
          "dd",
          "del",
          "details",
          "dfn",
          "dialog",
          "div",
          "dl",
          "dt",
          "em",
          "embed",
          "fieldset",
          "figcaption",
          "figure",
          "footer",
          "form",
          "h1",
          "h2",
          "h3",
          "h4",
          "h5",
          "h6",
          "head",
          "header",
          "hgroup",
          "hr",
          "html",
          "i",
          "iframe",
          "img",
          "input",
          "ins",
          "kbd",
          "keygen",
          "label",
          "legend",
          "li",
          "link",
          "main",
          "map",
          "mark",
          "marquee",
          "menu",
          "menuitem",
          "meta",
          "meter",
          "nav",
          "noscript",
          "object",
          "ol",
          "optgroup",
          "option",
          "output",
          "p",
          "param",
          "picture",
          "pre",
          "progress",
          "q",
          "rp",
          "rt",
          "ruby",
          "s",
          "samp",
          "script",
          "section",
          "select",
          "small",
          "source",
          "span",
          "strong",
          "style",
          "sub",
          "summary",
          "sup",
          "table",
          "tbody",
          "td",
          "textarea",
          "tfoot",
          "th",
          "thead",
          "time",
          "title",
          "tr",
          "track",
          "u",
          "ul",
          "var",
          "video",
          "wbr",
          "circle",
          "clipPath",
          "defs",
          "ellipse",
          "foreignObject",
          "g",
          "image",
          "line",
          "linearGradient",
          "marker",
          "mask",
          "path",
          "pattern",
          "polygon",
          "polyline",
          "radialGradient",
          "rect",
          "stop",
          "svg",
          "text",
          "tspan",
        ].forEach(function (e) {
          De[e] = De(e);
        });
        !(function () {
          function e(e, t) {
            (this.rules = e),
              (this.componentId = t),
              (this.isStatic = K(e)),
              B.registerId(this.componentId + 1);
          }
          var t = e.prototype;
          (t.createStyles = function (e, t, n, r) {
            var a = r(ge(this.rules, t, n, r).join(""), ""),
              i = this.componentId + e;
            n.insertRules(i, i, a);
          }),
            (t.removeStyles = function (e, t) {
              t.clearRules(this.componentId + e);
            }),
            (t.renderStyles = function (e, t, n, r) {
              e > 2 && B.registerId(this.componentId + e),
                this.removeStyles(e, n),
                this.createStyles(e, t, n, r);
            });
        })();
        !(function () {
          function e() {
            var e = this;
            (this._emitSheetCSS = function () {
              var t = e.instance.toString(),
                n = L();
              return (
                "<style " +
                [
                  n && 'nonce="' + n + '"',
                  _ + '="true"',
                  'data-styled-version="5.2.1"',
                ]
                  .filter(Boolean)
                  .join(" ") +
                ">" +
                t +
                "</style>"
              );
            }),
              (this.getStyleTags = function () {
                return e.sealed ? S(2) : e._emitSheetCSS();
              }),
              (this.getStyleElement = function () {
                var t;
                if (e.sealed) return S(2);
                var n =
                    (((t = {})[_] = ""),
                    (t["data-styled-version"] = "5.2.1"),
                    (t.dangerouslySetInnerHTML = {
                      __html: e.instance.toString(),
                    }),
                    t),
                  r = L();
                return (
                  r && (n.nonce = r),
                  [i.a.createElement("style", h({}, n, { key: "sc-0-0" }))]
                );
              }),
              (this.seal = function () {
                e.sealed = !0;
              }),
              (this.instance = new B({ isServer: !0 })),
              (this.sealed = !1);
          }
          var t = e.prototype;
          (t.collectStyles = function (e) {
            return this.sealed
              ? S(2)
              : i.a.createElement(le, { sheet: this.instance }, e);
          }),
            (t.interleaveWithNodeStream = function (e) {
              return S(3);
            });
        })();
        t.a = De;
      }.call(this, n(40)));
    },
    function (e, t, n) {
      var r = n(44),
        a = "object" == typeof self && self && self.Object === Object && self,
        i = r || a || Function("return this")();
      e.exports = i;
    },
    function (e, t) {
      var n = Array.isArray;
      e.exports = n;
    },
    function (e, t, n) {
      var r = n(89),
        a = n(94);
      e.exports = function (e, t) {
        var n = a(e, t);
        return r(n) ? n : void 0;
      };
    },
    function (e, t, n) {
      "use strict";
      e.exports = n(73);
    },
    function (e, t, n) {
      "use strict";
      (function (e) {
        Object.defineProperty(t, "__esModule", { value: !0 }),
          Object.defineProperty(t, "Chart", {
            enumerable: !0,
            get: function () {
              return i.default;
            },
          }),
          (t.defaults = t.Scatter = t.Bubble = t.Polar = t.Radar = t.HorizontalBar = t.Bar = t.Line = t.Pie = t.Doughnut = t.default = void 0);
        var r = s(n(0)),
          a = s(n(39)),
          i = s(n(75)),
          o = s(n(77)),
          l = s(n(139));
        function s(e) {
          return e && e.__esModule ? e : { default: e };
        }
        function u() {
          return (u =
            Object.assign ||
            function (e) {
              for (var t = 1; t < arguments.length; t++) {
                var n = arguments[t];
                for (var r in n)
                  Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
              }
              return e;
            }).apply(this, arguments);
        }
        function c(e) {
          return (c =
            "function" === typeof Symbol && "symbol" === typeof Symbol.iterator
              ? function (e) {
                  return typeof e;
                }
              : function (e) {
                  return e &&
                    "function" === typeof Symbol &&
                    e.constructor === Symbol &&
                    e !== Symbol.prototype
                    ? "symbol"
                    : typeof e;
                })(e);
        }
        function f(e, t) {
          if (null == e) return {};
          var n,
            r,
            a = (function (e, t) {
              if (null == e) return {};
              var n,
                r,
                a = {},
                i = Object.keys(e);
              for (r = 0; r < i.length; r++)
                (n = i[r]), t.indexOf(n) >= 0 || (a[n] = e[n]);
              return a;
            })(e, t);
          if (Object.getOwnPropertySymbols) {
            var i = Object.getOwnPropertySymbols(e);
            for (r = 0; r < i.length; r++)
              (n = i[r]),
                t.indexOf(n) >= 0 ||
                  (Object.prototype.propertyIsEnumerable.call(e, n) &&
                    (a[n] = e[n]));
          }
          return a;
        }
        function d(e, t) {
          var n = Object.keys(e);
          if (Object.getOwnPropertySymbols) {
            var r = Object.getOwnPropertySymbols(e);
            t &&
              (r = r.filter(function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable;
              })),
              n.push.apply(n, r);
          }
          return n;
        }
        function h(e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = null != arguments[t] ? arguments[t] : {};
            t % 2
              ? d(Object(n), !0).forEach(function (t) {
                  k(e, t, n[t]);
                })
              : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
              : d(Object(n)).forEach(function (t) {
                  Object.defineProperty(
                    e,
                    t,
                    Object.getOwnPropertyDescriptor(n, t)
                  );
                });
          }
          return e;
        }
        function p(e, t) {
          if (!(e instanceof t))
            throw new TypeError("Cannot call a class as a function");
        }
        function g(e, t) {
          for (var n = 0; n < t.length; n++) {
            var r = t[n];
            (r.enumerable = r.enumerable || !1),
              (r.configurable = !0),
              "value" in r && (r.writable = !0),
              Object.defineProperty(e, r.key, r);
          }
        }
        function m(e, t, n) {
          return t && g(e.prototype, t), n && g(e, n), e;
        }
        function v(e, t) {
          if ("function" !== typeof t && null !== t)
            throw new TypeError(
              "Super expression must either be null or a function"
            );
          (e.prototype = Object.create(t && t.prototype, {
            constructor: { value: e, writable: !0, configurable: !0 },
          })),
            t && y(e, t);
        }
        function y(e, t) {
          return (y =
            Object.setPrototypeOf ||
            function (e, t) {
              return (e.__proto__ = t), e;
            })(e, t);
        }
        function b(e) {
          var t = (function () {
            if ("undefined" === typeof Reflect || !Reflect.construct) return !1;
            if (Reflect.construct.sham) return !1;
            if ("function" === typeof Proxy) return !0;
            try {
              return (
                Date.prototype.toString.call(
                  Reflect.construct(Date, [], function () {})
                ),
                !0
              );
            } catch (e) {
              return !1;
            }
          })();
          return function () {
            var n,
              r = w(e);
            if (t) {
              var a = w(this).constructor;
              n = Reflect.construct(r, arguments, a);
            } else n = r.apply(this, arguments);
            return x(this, n);
          };
        }
        function x(e, t) {
          return !t || ("object" !== c(t) && "function" !== typeof t)
            ? _(e)
            : t;
        }
        function _(e) {
          if (void 0 === e)
            throw new ReferenceError(
              "this hasn't been initialised - super() hasn't been called"
            );
          return e;
        }
        function w(e) {
          return (w = Object.setPrototypeOf
            ? Object.getPrototypeOf
            : function (e) {
                return e.__proto__ || Object.getPrototypeOf(e);
              })(e);
        }
        function k(e, t, n) {
          return (
            t in e
              ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
                })
              : (e[t] = n),
            e
          );
        }
        var S =
            "undefined" !== typeof e &&
            Object({
              NODE_ENV: "production",
              PUBLIC_URL: "",
              WDS_SOCKET_HOST: void 0,
              WDS_SOCKET_PATH: void 0,
              WDS_SOCKET_PORT: void 0,
              FAST_REFRESH: !0,
            }) &&
            "production",
          C = (function (e) {
            v(n, e);
            var t = b(n);
            function n() {
              var e;
              return (
                p(this, n),
                k(_((e = t.call(this))), "handleOnClick", function (t) {
                  var n = e.chartInstance,
                    r = e.props,
                    a = r.getDatasetAtEvent,
                    i = r.getElementAtEvent,
                    o = r.getElementsAtEvent,
                    l = r.onElementsClick;
                  a && a(n.getDatasetAtEvent(t), t),
                    i && i(n.getElementAtEvent(t), t),
                    o && o(n.getElementsAtEvent(t), t),
                    l && l(n.getElementsAtEvent(t), t);
                }),
                k(_(e), "ref", function (t) {
                  e.element = t;
                }),
                (e.chartInstance = void 0),
                e
              );
            }
            return (
              m(n, [
                {
                  key: "componentDidMount",
                  value: function () {
                    this.renderChart();
                  },
                },
                {
                  key: "componentDidUpdate",
                  value: function () {
                    if (this.props.redraw)
                      return this.destroyChart(), void this.renderChart();
                    this.updateChart();
                  },
                },
                {
                  key: "shouldComponentUpdate",
                  value: function (e) {
                    var t = this.props,
                      n = (t.redraw, t.type),
                      r = t.options,
                      a = t.plugins,
                      i = t.legend,
                      l = t.height,
                      s = t.width;
                    if (!0 === e.redraw) return !0;
                    if (l !== e.height || s !== e.width) return !0;
                    if (n !== e.type) return !0;
                    if (!(0, o.default)(i, e.legend)) return !0;
                    if (!(0, o.default)(r, e.options)) return !0;
                    var u = this.transformDataProp(e);
                    return (
                      !(0, o.default)(this.shadowDataProp, u) ||
                      !(0, o.default)(a, e.plugins)
                    );
                  },
                },
                {
                  key: "componentWillUnmount",
                  value: function () {
                    this.destroyChart();
                  },
                },
                {
                  key: "transformDataProp",
                  value: function (e) {
                    var t = e.data;
                    return "function" == typeof t ? t(this.element) : t;
                  },
                },
                {
                  key: "memoizeDataProps",
                  value: function () {
                    if (this.props.data) {
                      var e = this.transformDataProp(this.props);
                      return (
                        (this.shadowDataProp = h(
                          h({}, e),
                          {},
                          {
                            datasets:
                              e.datasets &&
                              e.datasets.map(function (e) {
                                return h({}, e);
                              }),
                          }
                        )),
                        this.saveCurrentDatasets(),
                        e
                      );
                    }
                  },
                },
                {
                  key: "checkDatasets",
                  value: function (e) {
                    var t = "production" !== S && "prod" !== S,
                      r = this.props.datasetKeyProvider !== n.getLabelAsKey,
                      a = e.length > 1;
                    if (t && a && !r) {
                      var i = !1;
                      e.forEach(function (e) {
                        e.label || (i = !0);
                      }),
                        i &&
                          console.error(
                            '[react-chartjs-2] Warning: Each dataset needs a unique key. By default, the "label" property on each dataset is used. Alternatively, you may provide a "datasetKeyProvider" as a prop that returns a unique key.'
                          );
                    }
                  },
                },
                {
                  key: "getCurrentDatasets",
                  value: function () {
                    return (
                      (this.chartInstance &&
                        this.chartInstance.config.data &&
                        this.chartInstance.config.data.datasets) ||
                      []
                    );
                  },
                },
                {
                  key: "saveCurrentDatasets",
                  value: function () {
                    var e = this;
                    (this.datasets = this.datasets || {}),
                      this.getCurrentDatasets().forEach(function (t) {
                        e.datasets[e.props.datasetKeyProvider(t)] = t;
                      });
                  },
                },
                {
                  key: "updateChart",
                  value: function () {
                    var e = this,
                      t = this.props.options,
                      n = this.memoizeDataProps(this.props);
                    if (this.chartInstance) {
                      t &&
                        (this.chartInstance.options = i.default.helpers.configMerge(
                          this.chartInstance.options,
                          t
                        ));
                      var r = this.getCurrentDatasets(),
                        a = n.datasets || [];
                      this.checkDatasets(r);
                      var o = (0, l.default)(r, this.props.datasetKeyProvider);
                      this.chartInstance.config.data.datasets = a.map(function (
                        t
                      ) {
                        var n = o[e.props.datasetKeyProvider(t)];
                        if (n && n.type === t.type && t.data) {
                          n.data.splice(t.data.length),
                            t.data.forEach(function (e, r) {
                              n.data[r] = t.data[r];
                            });
                          t.data;
                          var r = f(t, ["data"]);
                          return h(h({}, n), r);
                        }
                        return t;
                      });
                      n.datasets;
                      var s = f(n, ["datasets"]);
                      (this.chartInstance.config.data = h(
                        h({}, this.chartInstance.config.data),
                        s
                      )),
                        this.chartInstance.update();
                    }
                  },
                },
                {
                  key: "renderChart",
                  value: function () {
                    var e = this.props,
                      t = e.options,
                      r = e.legend,
                      a = e.type,
                      l = e.plugins,
                      s = this.element,
                      u = this.memoizeDataProps();
                    "undefined" === typeof r ||
                      (0, o.default)(n.defaultProps.legend, r) ||
                      (t.legend = r),
                      (this.chartInstance = new i.default(s, {
                        type: a,
                        data: u,
                        options: t,
                        plugins: l,
                      }));
                  },
                },
                {
                  key: "destroyChart",
                  value: function () {
                    if (this.chartInstance) {
                      this.saveCurrentDatasets();
                      var e = Object.values(this.datasets);
                      (this.chartInstance.config.data.datasets = e),
                        this.chartInstance.destroy();
                    }
                  },
                },
                {
                  key: "render",
                  value: function () {
                    var e = this.props,
                      t = e.height,
                      n = e.width,
                      a = e.id;
                    return r.default.createElement("canvas", {
                      ref: this.ref,
                      height: t,
                      width: n,
                      id: a,
                      onClick: this.handleOnClick,
                    });
                  },
                },
              ]),
              n
            );
          })(r.default.Component);
        k(C, "getLabelAsKey", function (e) {
          return e.label;
        }),
          k(C, "propTypes", {
            data: a.default.oneOfType([a.default.object, a.default.func])
              .isRequired,
            getDatasetAtEvent: a.default.func,
            getElementAtEvent: a.default.func,
            getElementsAtEvent: a.default.func,
            height: a.default.number,
            legend: a.default.object,
            onElementsClick: a.default.func,
            options: a.default.object,
            plugins: a.default.arrayOf(a.default.object),
            redraw: a.default.bool,
            type: function (e, t, n) {
              if (!i.default.controllers[e[t]])
                return new Error(
                  "Invalid chart type `" + e[t] + "` supplied to `" + n + "`."
                );
            },
            width: a.default.number,
            datasetKeyProvider: a.default.func,
          }),
          k(C, "defaultProps", {
            legend: { display: !0, position: "bottom" },
            type: "doughnut",
            height: 150,
            width: 300,
            redraw: !1,
            options: {},
            datasetKeyProvider: C.getLabelAsKey,
          });
        var M = C;
        t.default = M;
        var O = (function (e) {
          v(n, e);
          var t = b(n);
          function n() {
            return p(this, n), t.apply(this, arguments);
          }
          return (
            m(n, [
              {
                key: "render",
                value: function () {
                  var e = this;
                  return r.default.createElement(
                    C,
                    u({}, this.props, {
                      ref: function (t) {
                        return (e.chartInstance = t && t.chartInstance);
                      },
                      type: "doughnut",
                    })
                  );
                },
              },
            ]),
            n
          );
        })(r.default.Component);
        t.Doughnut = O;
        var P = (function (e) {
          v(n, e);
          var t = b(n);
          function n() {
            return p(this, n), t.apply(this, arguments);
          }
          return (
            m(n, [
              {
                key: "render",
                value: function () {
                  var e = this;
                  return r.default.createElement(
                    C,
                    u({}, this.props, {
                      ref: function (t) {
                        return (e.chartInstance = t && t.chartInstance);
                      },
                      type: "pie",
                    })
                  );
                },
              },
            ]),
            n
          );
        })(r.default.Component);
        t.Pie = P;
        var E = (function (e) {
          v(n, e);
          var t = b(n);
          function n() {
            return p(this, n), t.apply(this, arguments);
          }
          return (
            m(n, [
              {
                key: "render",
                value: function () {
                  var e = this;
                  return r.default.createElement(
                    C,
                    u({}, this.props, {
                      ref: function (t) {
                        return (e.chartInstance = t && t.chartInstance);
                      },
                      type: "line",
                    })
                  );
                },
              },
            ]),
            n
          );
        })(r.default.Component);
        t.Line = E;
        var D = (function (e) {
          v(n, e);
          var t = b(n);
          function n() {
            return p(this, n), t.apply(this, arguments);
          }
          return (
            m(n, [
              {
                key: "render",
                value: function () {
                  var e = this;
                  return r.default.createElement(
                    C,
                    u({}, this.props, {
                      ref: function (t) {
                        return (e.chartInstance = t && t.chartInstance);
                      },
                      type: "bar",
                    })
                  );
                },
              },
            ]),
            n
          );
        })(r.default.Component);
        t.Bar = D;
        var T = (function (e) {
          v(n, e);
          var t = b(n);
          function n() {
            return p(this, n), t.apply(this, arguments);
          }
          return (
            m(n, [
              {
                key: "render",
                value: function () {
                  var e = this;
                  return r.default.createElement(
                    C,
                    u({}, this.props, {
                      ref: function (t) {
                        return (e.chartInstance = t && t.chartInstance);
                      },
                      type: "horizontalBar",
                    })
                  );
                },
              },
            ]),
            n
          );
        })(r.default.Component);
        t.HorizontalBar = T;
        var A = (function (e) {
          v(n, e);
          var t = b(n);
          function n() {
            return p(this, n), t.apply(this, arguments);
          }
          return (
            m(n, [
              {
                key: "render",
                value: function () {
                  var e = this;
                  return r.default.createElement(
                    C,
                    u({}, this.props, {
                      ref: function (t) {
                        return (e.chartInstance = t && t.chartInstance);
                      },
                      type: "radar",
                    })
                  );
                },
              },
            ]),
            n
          );
        })(r.default.Component);
        t.Radar = A;
        var N = (function (e) {
          v(n, e);
          var t = b(n);
          function n() {
            return p(this, n), t.apply(this, arguments);
          }
          return (
            m(n, [
              {
                key: "render",
                value: function () {
                  var e = this;
                  return r.default.createElement(
                    C,
                    u({}, this.props, {
                      ref: function (t) {
                        return (e.chartInstance = t && t.chartInstance);
                      },
                      type: "polarArea",
                    })
                  );
                },
              },
            ]),
            n
          );
        })(r.default.Component);
        t.Polar = N;
        var I = (function (e) {
          v(n, e);
          var t = b(n);
          function n() {
            return p(this, n), t.apply(this, arguments);
          }
          return (
            m(n, [
              {
                key: "render",
                value: function () {
                  var e = this;
                  return r.default.createElement(
                    C,
                    u({}, this.props, {
                      ref: function (t) {
                        return (e.chartInstance = t && t.chartInstance);
                      },
                      type: "bubble",
                    })
                  );
                },
              },
            ]),
            n
          );
        })(r.default.Component);
        t.Bubble = I;
        var R = (function (e) {
          v(n, e);
          var t = b(n);
          function n() {
            return p(this, n), t.apply(this, arguments);
          }
          return (
            m(n, [
              {
                key: "render",
                value: function () {
                  var e = this;
                  return r.default.createElement(
                    C,
                    u({}, this.props, {
                      ref: function (t) {
                        return (e.chartInstance = t && t.chartInstance);
                      },
                      type: "scatter",
                    })
                  );
                },
              },
            ]),
            n
          );
        })(r.default.Component);
        t.Scatter = R;
        var L = i.default.defaults;
        t.defaults = L;
      }.call(this, n(40)));
    },
    function (e, t, n) {
      "use strict";
      n.d(t, "a", function () {
        return a;
      });
      var r = n(23);
      function a(e, t) {
        return (
          (function (e) {
            if (Array.isArray(e)) return e;
          })(e) ||
          (function (e, t) {
            if ("undefined" !== typeof Symbol && Symbol.iterator in Object(e)) {
              var n = [],
                r = !0,
                a = !1,
                i = void 0;
              try {
                for (
                  var o, l = e[Symbol.iterator]();
                  !(r = (o = l.next()).done) &&
                  (n.push(o.value), !t || n.length !== t);
                  r = !0
                );
              } catch (s) {
                (a = !0), (i = s);
              } finally {
                try {
                  r || null == l.return || l.return();
                } finally {
                  if (a) throw i;
                }
              }
              return n;
            }
          })(e, t) ||
          Object(r.a)(e, t) ||
          (function () {
            throw new TypeError(
              "Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
            );
          })()
        );
      }
    },
    function (e, t, n) {
      "use strict";
      var r = n(8),
        a = {
          childContextTypes: !0,
          contextType: !0,
          contextTypes: !0,
          defaultProps: !0,
          displayName: !0,
          getDefaultProps: !0,
          getDerivedStateFromError: !0,
          getDerivedStateFromProps: !0,
          mixins: !0,
          propTypes: !0,
          type: !0,
        },
        i = {
          name: !0,
          length: !0,
          prototype: !0,
          caller: !0,
          callee: !0,
          arguments: !0,
          arity: !0,
        },
        o = {
          $$typeof: !0,
          compare: !0,
          defaultProps: !0,
          displayName: !0,
          propTypes: !0,
          type: !0,
        },
        l = {};
      function s(e) {
        return r.isMemo(e) ? o : l[e.$$typeof] || a;
      }
      (l[r.ForwardRef] = {
        $$typeof: !0,
        render: !0,
        defaultProps: !0,
        displayName: !0,
        propTypes: !0,
      }),
        (l[r.Memo] = o);
      var u = Object.defineProperty,
        c = Object.getOwnPropertyNames,
        f = Object.getOwnPropertySymbols,
        d = Object.getOwnPropertyDescriptor,
        h = Object.getPrototypeOf,
        p = Object.prototype;
      e.exports = function e(t, n, r) {
        if ("string" !== typeof n) {
          if (p) {
            var a = h(n);
            a && a !== p && e(t, a, r);
          }
          var o = c(n);
          f && (o = o.concat(f(n)));
          for (var l = s(t), g = s(n), m = 0; m < o.length; ++m) {
            var v = o[m];
            if (!i[v] && (!r || !r[v]) && (!g || !g[v]) && (!l || !l[v])) {
              var y = d(n, v);
              try {
                u(t, v, y);
              } catch (b) {}
            }
          }
        }
        return t;
      };
    },
    function (e, t, n) {
      "use strict";
      n.d(t, "a", function () {
        return p;
      }),
        n.d(t, "b", function () {
          return u;
        }),
        n.d(t, "c", function () {
          return h;
        }),
        n.d(t, "d", function () {
          return l;
        });
      var r = n(36),
        a = function () {
          return Math.random().toString(36).substring(7).split("").join(".");
        },
        i = {
          INIT: "@@redux/INIT" + a(),
          REPLACE: "@@redux/REPLACE" + a(),
          PROBE_UNKNOWN_ACTION: function () {
            return "@@redux/PROBE_UNKNOWN_ACTION" + a();
          },
        };
      function o(e) {
        if ("object" !== typeof e || null === e) return !1;
        for (var t = e; null !== Object.getPrototypeOf(t); )
          t = Object.getPrototypeOf(t);
        return Object.getPrototypeOf(e) === t;
      }
      function l(e, t, n) {
        var a;
        if (
          ("function" === typeof t && "function" === typeof n) ||
          ("function" === typeof n && "function" === typeof arguments[3])
        )
          throw new Error(
            "It looks like you are passing several store enhancers to createStore(). This is not supported. Instead, compose them together to a single function."
          );
        if (
          ("function" === typeof t &&
            "undefined" === typeof n &&
            ((n = t), (t = void 0)),
          "undefined" !== typeof n)
        ) {
          if ("function" !== typeof n)
            throw new Error("Expected the enhancer to be a function.");
          return n(l)(e, t);
        }
        if ("function" !== typeof e)
          throw new Error("Expected the reducer to be a function.");
        var s = e,
          u = t,
          c = [],
          f = c,
          d = !1;
        function h() {
          f === c && (f = c.slice());
        }
        function p() {
          if (d)
            throw new Error(
              "You may not call store.getState() while the reducer is executing. The reducer has already received the state as an argument. Pass it down from the top reducer instead of reading it from the store."
            );
          return u;
        }
        function g(e) {
          if ("function" !== typeof e)
            throw new Error("Expected the listener to be a function.");
          if (d)
            throw new Error(
              "You may not call store.subscribe() while the reducer is executing. If you would like to be notified after the store has been updated, subscribe from a component and invoke store.getState() in the callback to access the latest state. See https://redux.js.org/api-reference/store#subscribelistener for more details."
            );
          var t = !0;
          return (
            h(),
            f.push(e),
            function () {
              if (t) {
                if (d)
                  throw new Error(
                    "You may not unsubscribe from a store listener while the reducer is executing. See https://redux.js.org/api-reference/store#subscribelistener for more details."
                  );
                (t = !1), h();
                var n = f.indexOf(e);
                f.splice(n, 1), (c = null);
              }
            }
          );
        }
        function m(e) {
          if (!o(e))
            throw new Error(
              "Actions must be plain objects. Use custom middleware for async actions."
            );
          if ("undefined" === typeof e.type)
            throw new Error(
              'Actions may not have an undefined "type" property. Have you misspelled a constant?'
            );
          if (d) throw new Error("Reducers may not dispatch actions.");
          try {
            (d = !0), (u = s(u, e));
          } finally {
            d = !1;
          }
          for (var t = (c = f), n = 0; n < t.length; n++) {
            (0, t[n])();
          }
          return e;
        }
        function v(e) {
          if ("function" !== typeof e)
            throw new Error("Expected the nextReducer to be a function.");
          (s = e), m({ type: i.REPLACE });
        }
        function y() {
          var e,
            t = g;
          return (
            ((e = {
              subscribe: function (e) {
                if ("object" !== typeof e || null === e)
                  throw new TypeError("Expected the observer to be an object.");
                function n() {
                  e.next && e.next(p());
                }
                return n(), { unsubscribe: t(n) };
              },
            })[r.a] = function () {
              return this;
            }),
            e
          );
        }
        return (
          m({ type: i.INIT }),
          ((a = { dispatch: m, subscribe: g, getState: p, replaceReducer: v })[
            r.a
          ] = y),
          a
        );
      }
      function s(e, t) {
        return function () {
          return t(e.apply(this, arguments));
        };
      }
      function u(e, t) {
        if ("function" === typeof e) return s(e, t);
        if ("object" !== typeof e || null === e)
          throw new Error(
            "bindActionCreators expected an object or a function, instead received " +
              (null === e ? "null" : typeof e) +
              '. Did you write "import ActionCreators from" instead of "import * as ActionCreators from"?'
          );
        var n = {};
        for (var r in e) {
          var a = e[r];
          "function" === typeof a && (n[r] = s(a, t));
        }
        return n;
      }
      function c(e, t, n) {
        return (
          t in e
            ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (e[t] = n),
          e
        );
      }
      function f(e, t) {
        var n = Object.keys(e);
        return (
          Object.getOwnPropertySymbols &&
            n.push.apply(n, Object.getOwnPropertySymbols(e)),
          t &&
            (n = n.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
          n
        );
      }
      function d(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? f(n, !0).forEach(function (t) {
                c(e, t, n[t]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : f(n).forEach(function (t) {
                Object.defineProperty(
                  e,
                  t,
                  Object.getOwnPropertyDescriptor(n, t)
                );
              });
        }
        return e;
      }
      function h() {
        for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
          t[n] = arguments[n];
        return 0 === t.length
          ? function (e) {
              return e;
            }
          : 1 === t.length
          ? t[0]
          : t.reduce(function (e, t) {
              return function () {
                return e(t.apply(void 0, arguments));
              };
            });
      }
      function p() {
        for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
          t[n] = arguments[n];
        return function (e) {
          return function () {
            var n = e.apply(void 0, arguments),
              r = function () {
                throw new Error(
                  "Dispatching while constructing your middleware is not allowed. Other middleware would not be applied to this dispatch."
                );
              },
              a = {
                getState: n.getState,
                dispatch: function () {
                  return r.apply(void 0, arguments);
                },
              },
              i = t.map(function (e) {
                return e(a);
              });
            return d({}, n, { dispatch: (r = h.apply(void 0, i)(n.dispatch)) });
          };
        };
      }
    },
    function (e, t, n) {
      var r = n(18),
        a = n(90),
        i = n(91),
        o = r ? r.toStringTag : void 0;
      e.exports = function (e) {
        return null == e
          ? void 0 === e
            ? "[object Undefined]"
            : "[object Null]"
          : o && o in Object(e)
          ? a(e)
          : i(e);
      };
    },
    function (e, t) {
      e.exports = function (e) {
        return null != e && "object" == typeof e;
      };
    },
    function (e, t, n) {
      "use strict";
      function r(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
        return r;
      }
      n.d(t, "a", function () {
        return r;
      });
    },
    function (e, t, n) {
      var r = n(79),
        a = n(80),
        i = n(81),
        o = n(82),
        l = n(83);
      function s(e) {
        var t = -1,
          n = null == e ? 0 : e.length;
        for (this.clear(); ++t < n; ) {
          var r = e[t];
          this.set(r[0], r[1]);
        }
      }
      (s.prototype.clear = r),
        (s.prototype.delete = a),
        (s.prototype.get = i),
        (s.prototype.has = o),
        (s.prototype.set = l),
        (e.exports = s);
    },
    function (e, t, n) {
      var r = n(42);
      e.exports = function (e, t) {
        for (var n = e.length; n--; ) if (r(e[n][0], t)) return n;
        return -1;
      };
    },
    function (e, t, n) {
      var r = n(5).Symbol;
      e.exports = r;
    },
    function (e, t, n) {
      var r = n(7)(Object, "create");
      e.exports = r;
    },
    function (e, t, n) {
      var r = n(103);
      e.exports = function (e, t) {
        var n = e.__data__;
        return r(t) ? n["string" == typeof t ? "string" : "hash"] : n.map;
      };
    },
    function (e, t, n) {
      var r = n(34);
      e.exports = function (e) {
        if ("string" == typeof e || r(e)) return e;
        var t = e + "";
        return "0" == t && 1 / e == -Infinity ? "-0" : t;
      };
    },
    function (e, t, n) {
      "use strict";
      !(function e() {
        if (
          "undefined" !== typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ &&
          "function" === typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE
        )
          try {
            __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(e);
          } catch (t) {
            console.error(t);
          }
      })(),
        (e.exports = n(66));
    },
    function (e, t, n) {
      "use strict";
      n.d(t, "a", function () {
        return a;
      });
      var r = n(15);
      function a(e, t) {
        if (e) {
          if ("string" === typeof e) return Object(r.a)(e, t);
          var n = Object.prototype.toString.call(e).slice(8, -1);
          return (
            "Object" === n && e.constructor && (n = e.constructor.name),
            "Map" === n || "Set" === n
              ? Array.from(e)
              : "Arguments" === n ||
                /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
              ? Object(r.a)(e, t)
              : void 0
          );
        }
      }
    },
    function (e, t, n) {
      "use strict";
      var r = Object.getOwnPropertySymbols,
        a = Object.prototype.hasOwnProperty,
        i = Object.prototype.propertyIsEnumerable;
      function o(e) {
        if (null === e || void 0 === e)
          throw new TypeError(
            "Object.assign cannot be called with null or undefined"
          );
        return Object(e);
      }
      e.exports = (function () {
        try {
          if (!Object.assign) return !1;
          var e = new String("abc");
          if (((e[5] = "de"), "5" === Object.getOwnPropertyNames(e)[0]))
            return !1;
          for (var t = {}, n = 0; n < 10; n++)
            t["_" + String.fromCharCode(n)] = n;
          if (
            "0123456789" !==
            Object.getOwnPropertyNames(t)
              .map(function (e) {
                return t[e];
              })
              .join("")
          )
            return !1;
          var r = {};
          return (
            "abcdefghijklmnopqrst".split("").forEach(function (e) {
              r[e] = e;
            }),
            "abcdefghijklmnopqrst" ===
              Object.keys(Object.assign({}, r)).join("")
          );
        } catch (a) {
          return !1;
        }
      })()
        ? Object.assign
        : function (e, t) {
            for (var n, l, s = o(e), u = 1; u < arguments.length; u++) {
              for (var c in (n = Object(arguments[u])))
                a.call(n, c) && (s[c] = n[c]);
              if (r) {
                l = r(n);
                for (var f = 0; f < l.length; f++)
                  i.call(n, l[f]) && (s[l[f]] = n[l[f]]);
              }
            }
            return s;
          };
    },
    function (e, t) {
      var n;
      n = (function () {
        return this;
      })();
      try {
        n = n || new Function("return this")();
      } catch (r) {
        "object" === typeof window && (n = window);
      }
      e.exports = n;
    },
    function (e, t) {
      e.exports = function (e) {
        return (
          e.webpackPolyfill ||
            ((e.deprecate = function () {}),
            (e.paths = []),
            e.children || (e.children = []),
            Object.defineProperty(e, "loaded", {
              enumerable: !0,
              get: function () {
                return e.l;
              },
            }),
            Object.defineProperty(e, "id", {
              enumerable: !0,
              get: function () {
                return e.i;
              },
            }),
            (e.webpackPolyfill = 1)),
          e
        );
      };
    },
    function (e, t, n) {
      var r = n(78),
        a = n(14);
      e.exports = function e(t, n, i, o, l) {
        return (
          t === n ||
          (null == t || null == n || (!a(t) && !a(n))
            ? t !== t && n !== n
            : r(t, n, i, o, e, l))
        );
      };
    },
    function (e, t, n) {
      var r = n(7)(n(5), "Map");
      e.exports = r;
    },
    function (e, t) {
      e.exports = function (e) {
        var t = typeof e;
        return null != e && ("object" == t || "function" == t);
      };
    },
    function (e, t, n) {
      var r = n(95),
        a = n(102),
        i = n(104),
        o = n(105),
        l = n(106);
      function s(e) {
        var t = -1,
          n = null == e ? 0 : e.length;
        for (this.clear(); ++t < n; ) {
          var r = e[t];
          this.set(r[0], r[1]);
        }
      }
      (s.prototype.clear = r),
        (s.prototype.delete = a),
        (s.prototype.get = i),
        (s.prototype.has = o),
        (s.prototype.set = l),
        (e.exports = s);
    },
    function (e, t, n) {
      var r = n(123),
        a = n(130),
        i = n(51);
      e.exports = function (e) {
        return i(e) ? r(e) : a(e);
      };
    },
    function (e, t) {
      e.exports = function (e) {
        return (
          "number" == typeof e && e > -1 && e % 1 == 0 && e <= 9007199254740991
        );
      };
    },
    function (e, t, n) {
      var r = n(6),
        a = n(34),
        i = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,
        o = /^\w*$/;
      e.exports = function (e, t) {
        if (r(e)) return !1;
        var n = typeof e;
        return (
          !(
            "number" != n &&
            "symbol" != n &&
            "boolean" != n &&
            null != e &&
            !a(e)
          ) ||
          o.test(e) ||
          !i.test(e) ||
          (null != t && e in Object(t))
        );
      };
    },
    function (e, t, n) {
      var r = n(13),
        a = n(14);
      e.exports = function (e) {
        return "symbol" == typeof e || (a(e) && "[object Symbol]" == r(e));
      };
    },
    function (e, t, n) {
      e.exports = n(70);
    },
    function (e, t, n) {
      "use strict";
      (function (e, r) {
        var a,
          i = n(57);
        a =
          "undefined" !== typeof self
            ? self
            : "undefined" !== typeof window
            ? window
            : "undefined" !== typeof e
            ? e
            : r;
        var o = Object(i.a)(a);
        t.a = o;
      }.call(this, n(25), n(74)(e)));
    },
    function (e, t, n) {
      "use strict";
      function r(e, t, n) {
        return (
          t in e
            ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (e[t] = n),
          e
        );
      }
      function a(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e);
          t &&
            (r = r.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
        }
        return n;
      }
      function i(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? a(Object(n), !0).forEach(function (t) {
                r(e, t, n[t]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : a(Object(n)).forEach(function (t) {
                Object.defineProperty(
                  e,
                  t,
                  Object.getOwnPropertyDescriptor(n, t)
                );
              });
        }
        return e;
      }
      n.d(t, "a", function () {
        return i;
      });
    },
    function (e, t, n) {
      "use strict";
      var r = /^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|download|draggable|encType|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|inert|itemProp|itemScope|itemType|itemID|itemRef|on|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/,
        a = (function (e) {
          var t = {};
          return function (n) {
            return void 0 === t[n] && (t[n] = e(n)), t[n];
          };
        })(function (e) {
          return (
            r.test(e) ||
            (111 === e.charCodeAt(0) &&
              110 === e.charCodeAt(1) &&
              e.charCodeAt(2) < 91)
          );
        });
      t.a = a;
    },
    function (e, t, n) {
      e.exports = n(71)();
    },
    function (e, t) {
      var n,
        r,
        a = (e.exports = {});
      function i() {
        throw new Error("setTimeout has not been defined");
      }
      function o() {
        throw new Error("clearTimeout has not been defined");
      }
      function l(e) {
        if (n === setTimeout) return setTimeout(e, 0);
        if ((n === i || !n) && setTimeout)
          return (n = setTimeout), setTimeout(e, 0);
        try {
          return n(e, 0);
        } catch (t) {
          try {
            return n.call(null, e, 0);
          } catch (t) {
            return n.call(this, e, 0);
          }
        }
      }
      !(function () {
        try {
          n = "function" === typeof setTimeout ? setTimeout : i;
        } catch (e) {
          n = i;
        }
        try {
          r = "function" === typeof clearTimeout ? clearTimeout : o;
        } catch (e) {
          r = o;
        }
      })();
      var s,
        u = [],
        c = !1,
        f = -1;
      function d() {
        c &&
          s &&
          ((c = !1), s.length ? (u = s.concat(u)) : (f = -1), u.length && h());
      }
      function h() {
        if (!c) {
          var e = l(d);
          c = !0;
          for (var t = u.length; t; ) {
            for (s = u, u = []; ++f < t; ) s && s[f].run();
            (f = -1), (t = u.length);
          }
          (s = null),
            (c = !1),
            (function (e) {
              if (r === clearTimeout) return clearTimeout(e);
              if ((r === o || !r) && clearTimeout)
                return (r = clearTimeout), clearTimeout(e);
              try {
                r(e);
              } catch (t) {
                try {
                  return r.call(null, e);
                } catch (t) {
                  return r.call(this, e);
                }
              }
            })(e);
        }
      }
      function p(e, t) {
        (this.fun = e), (this.array = t);
      }
      function g() {}
      (a.nextTick = function (e) {
        var t = new Array(arguments.length - 1);
        if (arguments.length > 1)
          for (var n = 1; n < arguments.length; n++) t[n - 1] = arguments[n];
        u.push(new p(e, t)), 1 !== u.length || c || l(h);
      }),
        (p.prototype.run = function () {
          this.fun.apply(null, this.array);
        }),
        (a.title = "browser"),
        (a.browser = !0),
        (a.env = {}),
        (a.argv = []),
        (a.version = ""),
        (a.versions = {}),
        (a.on = g),
        (a.addListener = g),
        (a.once = g),
        (a.off = g),
        (a.removeListener = g),
        (a.removeAllListeners = g),
        (a.emit = g),
        (a.prependListener = g),
        (a.prependOnceListener = g),
        (a.listeners = function (e) {
          return [];
        }),
        (a.binding = function (e) {
          throw new Error("process.binding is not supported");
        }),
        (a.cwd = function () {
          return "/";
        }),
        (a.chdir = function (e) {
          throw new Error("process.chdir is not supported");
        }),
        (a.umask = function () {
          return 0;
        });
    },
    function (e, t, n) {
      var r = n(16),
        a = n(84),
        i = n(85),
        o = n(86),
        l = n(87),
        s = n(88);
      function u(e) {
        var t = (this.__data__ = new r(e));
        this.size = t.size;
      }
      (u.prototype.clear = a),
        (u.prototype.delete = i),
        (u.prototype.get = o),
        (u.prototype.has = l),
        (u.prototype.set = s),
        (e.exports = u);
    },
    function (e, t) {
      e.exports = function (e, t) {
        return e === t || (e !== e && t !== t);
      };
    },
    function (e, t, n) {
      var r = n(13),
        a = n(29);
      e.exports = function (e) {
        if (!a(e)) return !1;
        var t = r(e);
        return (
          "[object Function]" == t ||
          "[object GeneratorFunction]" == t ||
          "[object AsyncFunction]" == t ||
          "[object Proxy]" == t
        );
      };
    },
    function (e, t, n) {
      (function (t) {
        var n = "object" == typeof t && t && t.Object === Object && t;
        e.exports = n;
      }.call(this, n(25)));
    },
    function (e, t) {
      var n = Function.prototype.toString;
      e.exports = function (e) {
        if (null != e) {
          try {
            return n.call(e);
          } catch (t) {}
          try {
            return e + "";
          } catch (t) {}
        }
        return "";
      };
    },
    function (e, t, n) {
      var r = n(107),
        a = n(110),
        i = n(111);
      e.exports = function (e, t, n, o, l, s) {
        var u = 1 & n,
          c = e.length,
          f = t.length;
        if (c != f && !(u && f > c)) return !1;
        var d = s.get(e),
          h = s.get(t);
        if (d && h) return d == t && h == e;
        var p = -1,
          g = !0,
          m = 2 & n ? new r() : void 0;
        for (s.set(e, t), s.set(t, e); ++p < c; ) {
          var v = e[p],
            y = t[p];
          if (o) var b = u ? o(y, v, p, t, e, s) : o(v, y, p, e, t, s);
          if (void 0 !== b) {
            if (b) continue;
            g = !1;
            break;
          }
          if (m) {
            if (
              !a(t, function (e, t) {
                if (!i(m, t) && (v === e || l(v, e, n, o, s))) return m.push(t);
              })
            ) {
              g = !1;
              break;
            }
          } else if (v !== y && !l(v, y, n, o, s)) {
            g = !1;
            break;
          }
        }
        return s.delete(e), s.delete(t), g;
      };
    },
    function (e, t, n) {
      var r = n(125),
        a = n(14),
        i = Object.prototype,
        o = i.hasOwnProperty,
        l = i.propertyIsEnumerable,
        s = r(
          (function () {
            return arguments;
          })()
        )
          ? r
          : function (e) {
              return a(e) && o.call(e, "callee") && !l.call(e, "callee");
            };
      e.exports = s;
    },
    function (e, t, n) {
      (function (e) {
        var r = n(5),
          a = n(126),
          i = t && !t.nodeType && t,
          o = i && "object" == typeof e && e && !e.nodeType && e,
          l = o && o.exports === i ? r.Buffer : void 0,
          s = (l ? l.isBuffer : void 0) || a;
        e.exports = s;
      }.call(this, n(26)(e)));
    },
    function (e, t) {
      var n = /^(?:0|[1-9]\d*)$/;
      e.exports = function (e, t) {
        var r = typeof e;
        return (
          !!(t = null == t ? 9007199254740991 : t) &&
          ("number" == r || ("symbol" != r && n.test(e))) &&
          e > -1 &&
          e % 1 == 0 &&
          e < t
        );
      };
    },
    function (e, t, n) {
      var r = n(127),
        a = n(128),
        i = n(129),
        o = i && i.isTypedArray,
        l = o ? a(o) : r;
      e.exports = l;
    },
    function (e, t, n) {
      var r = n(43),
        a = n(32);
      e.exports = function (e) {
        return null != e && a(e.length) && !r(e);
      };
    },
    function (e, t, n) {
      var r = n(29);
      e.exports = function (e) {
        return e === e && !r(e);
      };
    },
    function (e, t) {
      e.exports = function (e, t) {
        return function (n) {
          return null != n && n[e] === t && (void 0 !== t || e in Object(n));
        };
      };
    },
    function (e, t, n) {
      var r = n(55),
        a = n(21);
      e.exports = function (e, t) {
        for (var n = 0, i = (t = r(t, e)).length; null != e && n < i; )
          e = e[a(t[n++])];
        return n && n == i ? e : void 0;
      };
    },
    function (e, t, n) {
      var r = n(6),
        a = n(33),
        i = n(156),
        o = n(159);
      e.exports = function (e, t) {
        return r(e) ? e : a(e, t) ? [e] : i(o(e));
      };
    },
    function (e, t, n) {
      "use strict";
      function r(e, t, n, r, a, i, o) {
        try {
          var l = e[i](o),
            s = l.value;
        } catch (u) {
          return void n(u);
        }
        l.done ? t(s) : Promise.resolve(s).then(r, a);
      }
      function a(e) {
        return function () {
          var t = this,
            n = arguments;
          return new Promise(function (a, i) {
            var o = e.apply(t, n);
            function l(e) {
              r(o, a, i, l, s, "next", e);
            }
            function s(e) {
              r(o, a, i, l, s, "throw", e);
            }
            l(void 0);
          });
        };
      }
      n.d(t, "a", function () {
        return a;
      });
    },
    function (e, t, n) {
      "use strict";
      function r(e) {
        var t,
          n = e.Symbol;
        return (
          "function" === typeof n
            ? n.observable
              ? (t = n.observable)
              : ((t = n("observable")), (n.observable = t))
            : (t = "@@observable"),
          t
        );
      }
      n.d(t, "a", function () {
        return r;
      });
    },
    function (e, t) {
      e.exports = function (e, t, n, r) {
        var a = n ? n.call(r, e, t) : void 0;
        if (void 0 !== a) return !!a;
        if (e === t) return !0;
        if ("object" !== typeof e || !e || "object" !== typeof t || !t)
          return !1;
        var i = Object.keys(e),
          o = Object.keys(t);
        if (i.length !== o.length) return !1;
        for (
          var l = Object.prototype.hasOwnProperty.bind(t), s = 0;
          s < i.length;
          s++
        ) {
          var u = i[s];
          if (!l(u)) return !1;
          var c = e[u],
            f = t[u];
          if (
            !1 === (a = n ? n.call(r, c, f, u) : void 0) ||
            (void 0 === a && c !== f)
          )
            return !1;
        }
        return !0;
      };
    },
    function (e, t, n) {
      "use strict";
      t.a = function (e) {
        function t(e, r, s, u, d) {
          for (
            var h,
              p,
              g,
              m,
              x,
              w = 0,
              k = 0,
              S = 0,
              C = 0,
              M = 0,
              A = 0,
              I = (g = h = 0),
              L = 0,
              F = 0,
              j = 0,
              z = 0,
              W = s.length,
              V = W - 1,
              Y = "",
              B = "",
              H = "",
              U = "";
            L < W;

          ) {
            if (
              ((p = s.charCodeAt(L)),
              L === V &&
                0 !== k + C + S + w &&
                (0 !== k && (p = 47 === k ? 10 : 47),
                (C = S = w = 0),
                W++,
                V++),
              0 === k + C + S + w)
            ) {
              if (
                L === V &&
                (0 < F && (Y = Y.replace(f, "")), 0 < Y.trim().length)
              ) {
                switch (p) {
                  case 32:
                  case 9:
                  case 59:
                  case 13:
                  case 10:
                    break;
                  default:
                    Y += s.charAt(L);
                }
                p = 59;
              }
              switch (p) {
                case 123:
                  for (
                    h = (Y = Y.trim()).charCodeAt(0), g = 1, z = ++L;
                    L < W;

                  ) {
                    switch ((p = s.charCodeAt(L))) {
                      case 123:
                        g++;
                        break;
                      case 125:
                        g--;
                        break;
                      case 47:
                        switch ((p = s.charCodeAt(L + 1))) {
                          case 42:
                          case 47:
                            e: {
                              for (I = L + 1; I < V; ++I)
                                switch (s.charCodeAt(I)) {
                                  case 47:
                                    if (
                                      42 === p &&
                                      42 === s.charCodeAt(I - 1) &&
                                      L + 2 !== I
                                    ) {
                                      L = I + 1;
                                      break e;
                                    }
                                    break;
                                  case 10:
                                    if (47 === p) {
                                      L = I + 1;
                                      break e;
                                    }
                                }
                              L = I;
                            }
                        }
                        break;
                      case 91:
                        p++;
                      case 40:
                        p++;
                      case 34:
                      case 39:
                        for (; L++ < V && s.charCodeAt(L) !== p; );
                    }
                    if (0 === g) break;
                    L++;
                  }
                  switch (
                    ((g = s.substring(z, L)),
                    0 === h &&
                      (h = (Y = Y.replace(c, "").trim()).charCodeAt(0)),
                    h)
                  ) {
                    case 64:
                      switch (
                        (0 < F && (Y = Y.replace(f, "")), (p = Y.charCodeAt(1)))
                      ) {
                        case 100:
                        case 109:
                        case 115:
                        case 45:
                          F = r;
                          break;
                        default:
                          F = T;
                      }
                      if (
                        ((z = (g = t(r, F, g, p, d + 1)).length),
                        0 < N &&
                          ((x = l(3, g, (F = n(T, Y, j)), r, P, O, z, p, d, u)),
                          (Y = F.join("")),
                          void 0 !== x &&
                            0 === (z = (g = x.trim()).length) &&
                            ((p = 0), (g = ""))),
                        0 < z)
                      )
                        switch (p) {
                          case 115:
                            Y = Y.replace(_, o);
                          case 100:
                          case 109:
                          case 45:
                            g = Y + "{" + g + "}";
                            break;
                          case 107:
                            (g = (Y = Y.replace(v, "$1 $2")) + "{" + g + "}"),
                              (g =
                                1 === D || (2 === D && i("@" + g, 3))
                                  ? "@-webkit-" + g + "@" + g
                                  : "@" + g);
                            break;
                          default:
                            (g = Y + g), 112 === u && ((B += g), (g = ""));
                        }
                      else g = "";
                      break;
                    default:
                      g = t(r, n(r, Y, j), g, u, d + 1);
                  }
                  (H += g),
                    (g = j = F = I = h = 0),
                    (Y = ""),
                    (p = s.charCodeAt(++L));
                  break;
                case 125:
                case 59:
                  if (
                    1 < (z = (Y = (0 < F ? Y.replace(f, "") : Y).trim()).length)
                  )
                    switch (
                      (0 === I &&
                        ((h = Y.charCodeAt(0)),
                        45 === h || (96 < h && 123 > h)) &&
                        (z = (Y = Y.replace(" ", ":")).length),
                      0 < N &&
                        void 0 !==
                          (x = l(1, Y, r, e, P, O, B.length, u, d, u)) &&
                        0 === (z = (Y = x.trim()).length) &&
                        (Y = "\0\0"),
                      (h = Y.charCodeAt(0)),
                      (p = Y.charCodeAt(1)),
                      h)
                    ) {
                      case 0:
                        break;
                      case 64:
                        if (105 === p || 99 === p) {
                          U += Y + s.charAt(L);
                          break;
                        }
                      default:
                        58 !== Y.charCodeAt(z - 1) &&
                          (B += a(Y, h, p, Y.charCodeAt(2)));
                    }
                  (j = F = I = h = 0), (Y = ""), (p = s.charCodeAt(++L));
              }
            }
            switch (p) {
              case 13:
              case 10:
                47 === k
                  ? (k = 0)
                  : 0 === 1 + h &&
                    107 !== u &&
                    0 < Y.length &&
                    ((F = 1), (Y += "\0")),
                  0 < N * R && l(0, Y, r, e, P, O, B.length, u, d, u),
                  (O = 1),
                  P++;
                break;
              case 59:
              case 125:
                if (0 === k + C + S + w) {
                  O++;
                  break;
                }
              default:
                switch ((O++, (m = s.charAt(L)), p)) {
                  case 9:
                  case 32:
                    if (0 === C + w + k)
                      switch (M) {
                        case 44:
                        case 58:
                        case 9:
                        case 32:
                          m = "";
                          break;
                        default:
                          32 !== p && (m = " ");
                      }
                    break;
                  case 0:
                    m = "\\0";
                    break;
                  case 12:
                    m = "\\f";
                    break;
                  case 11:
                    m = "\\v";
                    break;
                  case 38:
                    0 === C + k + w && ((F = j = 1), (m = "\f" + m));
                    break;
                  case 108:
                    if (0 === C + k + w + E && 0 < I)
                      switch (L - I) {
                        case 2:
                          112 === M && 58 === s.charCodeAt(L - 3) && (E = M);
                        case 8:
                          111 === A && (E = A);
                      }
                    break;
                  case 58:
                    0 === C + k + w && (I = L);
                    break;
                  case 44:
                    0 === k + S + C + w && ((F = 1), (m += "\r"));
                    break;
                  case 34:
                  case 39:
                    0 === k && (C = C === p ? 0 : 0 === C ? p : C);
                    break;
                  case 91:
                    0 === C + k + S && w++;
                    break;
                  case 93:
                    0 === C + k + S && w--;
                    break;
                  case 41:
                    0 === C + k + w && S--;
                    break;
                  case 40:
                    if (0 === C + k + w) {
                      if (0 === h)
                        switch (2 * M + 3 * A) {
                          case 533:
                            break;
                          default:
                            h = 1;
                        }
                      S++;
                    }
                    break;
                  case 64:
                    0 === k + S + C + w + I + g && (g = 1);
                    break;
                  case 42:
                  case 47:
                    if (!(0 < C + w + S))
                      switch (k) {
                        case 0:
                          switch (2 * p + 3 * s.charCodeAt(L + 1)) {
                            case 235:
                              k = 47;
                              break;
                            case 220:
                              (z = L), (k = 42);
                          }
                          break;
                        case 42:
                          47 === p &&
                            42 === M &&
                            z + 2 !== L &&
                            (33 === s.charCodeAt(z + 2) &&
                              (B += s.substring(z, L + 1)),
                            (m = ""),
                            (k = 0));
                      }
                }
                0 === k && (Y += m);
            }
            (A = M), (M = p), L++;
          }
          if (0 < (z = B.length)) {
            if (
              ((F = r),
              0 < N &&
                void 0 !== (x = l(2, B, F, e, P, O, z, u, d, u)) &&
                0 === (B = x).length)
            )
              return U + B + H;
            if (((B = F.join(",") + "{" + B + "}"), 0 !== D * E)) {
              switch ((2 !== D || i(B, 2) || (E = 0), E)) {
                case 111:
                  B = B.replace(b, ":-moz-$1") + B;
                  break;
                case 112:
                  B =
                    B.replace(y, "::-webkit-input-$1") +
                    B.replace(y, "::-moz-$1") +
                    B.replace(y, ":-ms-input-$1") +
                    B;
              }
              E = 0;
            }
          }
          return U + B + H;
        }
        function n(e, t, n) {
          var a = t.trim().split(g);
          t = a;
          var i = a.length,
            o = e.length;
          switch (o) {
            case 0:
            case 1:
              var l = 0;
              for (e = 0 === o ? "" : e[0] + " "; l < i; ++l)
                t[l] = r(e, t[l], n).trim();
              break;
            default:
              var s = (l = 0);
              for (t = []; l < i; ++l)
                for (var u = 0; u < o; ++u)
                  t[s++] = r(e[u] + " ", a[l], n).trim();
          }
          return t;
        }
        function r(e, t, n) {
          var r = t.charCodeAt(0);
          switch ((33 > r && (r = (t = t.trim()).charCodeAt(0)), r)) {
            case 38:
              return t.replace(m, "$1" + e.trim());
            case 58:
              return e.trim() + t.replace(m, "$1" + e.trim());
            default:
              if (0 < 1 * n && 0 < t.indexOf("\f"))
                return t.replace(
                  m,
                  (58 === e.charCodeAt(0) ? "" : "$1") + e.trim()
                );
          }
          return e + t;
        }
        function a(e, t, n, r) {
          var o = e + ";",
            l = 2 * t + 3 * n + 4 * r;
          if (944 === l) {
            e = o.indexOf(":", 9) + 1;
            var s = o.substring(e, o.length - 1).trim();
            return (
              (s = o.substring(0, e).trim() + s + ";"),
              1 === D || (2 === D && i(s, 1)) ? "-webkit-" + s + s : s
            );
          }
          if (0 === D || (2 === D && !i(o, 1))) return o;
          switch (l) {
            case 1015:
              return 97 === o.charCodeAt(10) ? "-webkit-" + o + o : o;
            case 951:
              return 116 === o.charCodeAt(3) ? "-webkit-" + o + o : o;
            case 963:
              return 110 === o.charCodeAt(5) ? "-webkit-" + o + o : o;
            case 1009:
              if (100 !== o.charCodeAt(4)) break;
            case 969:
            case 942:
              return "-webkit-" + o + o;
            case 978:
              return "-webkit-" + o + "-moz-" + o + o;
            case 1019:
            case 983:
              return "-webkit-" + o + "-moz-" + o + "-ms-" + o + o;
            case 883:
              if (45 === o.charCodeAt(8)) return "-webkit-" + o + o;
              if (0 < o.indexOf("image-set(", 11))
                return o.replace(M, "$1-webkit-$2") + o;
              break;
            case 932:
              if (45 === o.charCodeAt(4))
                switch (o.charCodeAt(5)) {
                  case 103:
                    return (
                      "-webkit-box-" +
                      o.replace("-grow", "") +
                      "-webkit-" +
                      o +
                      "-ms-" +
                      o.replace("grow", "positive") +
                      o
                    );
                  case 115:
                    return (
                      "-webkit-" +
                      o +
                      "-ms-" +
                      o.replace("shrink", "negative") +
                      o
                    );
                  case 98:
                    return (
                      "-webkit-" +
                      o +
                      "-ms-" +
                      o.replace("basis", "preferred-size") +
                      o
                    );
                }
              return "-webkit-" + o + "-ms-" + o + o;
            case 964:
              return "-webkit-" + o + "-ms-flex-" + o + o;
            case 1023:
              if (99 !== o.charCodeAt(8)) break;
              return (
                "-webkit-box-pack" +
                (s = o
                  .substring(o.indexOf(":", 15))
                  .replace("flex-", "")
                  .replace("space-between", "justify")) +
                "-webkit-" +
                o +
                "-ms-flex-pack" +
                s +
                o
              );
            case 1005:
              return h.test(o)
                ? o.replace(d, ":-webkit-") + o.replace(d, ":-moz-") + o
                : o;
            case 1e3:
              switch (
                ((t = (s = o.substring(13).trim()).indexOf("-") + 1),
                s.charCodeAt(0) + s.charCodeAt(t))
              ) {
                case 226:
                  s = o.replace(x, "tb");
                  break;
                case 232:
                  s = o.replace(x, "tb-rl");
                  break;
                case 220:
                  s = o.replace(x, "lr");
                  break;
                default:
                  return o;
              }
              return "-webkit-" + o + "-ms-" + s + o;
            case 1017:
              if (-1 === o.indexOf("sticky", 9)) break;
            case 975:
              switch (
                ((t = (o = e).length - 10),
                (l =
                  (s = (33 === o.charCodeAt(t) ? o.substring(0, t) : o)
                    .substring(e.indexOf(":", 7) + 1)
                    .trim()).charCodeAt(0) +
                  (0 | s.charCodeAt(7))))
              ) {
                case 203:
                  if (111 > s.charCodeAt(8)) break;
                case 115:
                  o = o.replace(s, "-webkit-" + s) + ";" + o;
                  break;
                case 207:
                case 102:
                  o =
                    o.replace(
                      s,
                      "-webkit-" + (102 < l ? "inline-" : "") + "box"
                    ) +
                    ";" +
                    o.replace(s, "-webkit-" + s) +
                    ";" +
                    o.replace(s, "-ms-" + s + "box") +
                    ";" +
                    o;
              }
              return o + ";";
            case 938:
              if (45 === o.charCodeAt(5))
                switch (o.charCodeAt(6)) {
                  case 105:
                    return (
                      (s = o.replace("-items", "")),
                      "-webkit-" + o + "-webkit-box-" + s + "-ms-flex-" + s + o
                    );
                  case 115:
                    return (
                      "-webkit-" + o + "-ms-flex-item-" + o.replace(k, "") + o
                    );
                  default:
                    return (
                      "-webkit-" +
                      o +
                      "-ms-flex-line-pack" +
                      o.replace("align-content", "").replace(k, "") +
                      o
                    );
                }
              break;
            case 973:
            case 989:
              if (45 !== o.charCodeAt(3) || 122 === o.charCodeAt(4)) break;
            case 931:
            case 953:
              if (!0 === C.test(e))
                return 115 ===
                  (s = e.substring(e.indexOf(":") + 1)).charCodeAt(0)
                  ? a(e.replace("stretch", "fill-available"), t, n, r).replace(
                      ":fill-available",
                      ":stretch"
                    )
                  : o.replace(s, "-webkit-" + s) +
                      o.replace(s, "-moz-" + s.replace("fill-", "")) +
                      o;
              break;
            case 962:
              if (
                ((o =
                  "-webkit-" +
                  o +
                  (102 === o.charCodeAt(5) ? "-ms-" + o : "") +
                  o),
                211 === n + r &&
                  105 === o.charCodeAt(13) &&
                  0 < o.indexOf("transform", 10))
              )
                return (
                  o
                    .substring(0, o.indexOf(";", 27) + 1)
                    .replace(p, "$1-webkit-$2") + o
                );
          }
          return o;
        }
        function i(e, t) {
          var n = e.indexOf(1 === t ? ":" : "{"),
            r = e.substring(0, 3 !== t ? n : 10);
          return (
            (n = e.substring(n + 1, e.length - 1)),
            I(2 !== t ? r : r.replace(S, "$1"), n, t)
          );
        }
        function o(e, t) {
          var n = a(t, t.charCodeAt(0), t.charCodeAt(1), t.charCodeAt(2));
          return n !== t + ";"
            ? n.replace(w, " or ($1)").substring(4)
            : "(" + t + ")";
        }
        function l(e, t, n, r, a, i, o, l, s, c) {
          for (var f, d = 0, h = t; d < N; ++d)
            switch ((f = A[d].call(u, e, h, n, r, a, i, o, l, s, c))) {
              case void 0:
              case !1:
              case !0:
              case null:
                break;
              default:
                h = f;
            }
          if (h !== t) return h;
        }
        function s(e) {
          return (
            void 0 !== (e = e.prefix) &&
              ((I = null),
              e
                ? "function" !== typeof e
                  ? (D = 1)
                  : ((D = 2), (I = e))
                : (D = 0)),
            s
          );
        }
        function u(e, n) {
          var r = e;
          if ((33 > r.charCodeAt(0) && (r = r.trim()), (r = [r]), 0 < N)) {
            var a = l(-1, n, r, r, P, O, 0, 0, 0, 0);
            void 0 !== a && "string" === typeof a && (n = a);
          }
          var i = t(T, r, n, 0, 0);
          return (
            0 < N &&
              void 0 !== (a = l(-2, i, r, r, P, O, i.length, 0, 0, 0)) &&
              (i = a),
            "",
            (E = 0),
            (O = P = 1),
            i
          );
        }
        var c = /^\0+/g,
          f = /[\0\r\f]/g,
          d = /: */g,
          h = /zoo|gra/,
          p = /([,: ])(transform)/g,
          g = /,\r+?/g,
          m = /([\t\r\n ])*\f?&/g,
          v = /@(k\w+)\s*(\S*)\s*/,
          y = /::(place)/g,
          b = /:(read-only)/g,
          x = /[svh]\w+-[tblr]{2}/,
          _ = /\(\s*(.*)\s*\)/g,
          w = /([\s\S]*?);/g,
          k = /-self|flex-/g,
          S = /[^]*?(:[rp][el]a[\w-]+)[^]*/,
          C = /stretch|:\s*\w+\-(?:conte|avail)/,
          M = /([^-])(image-set\()/,
          O = 1,
          P = 1,
          E = 0,
          D = 1,
          T = [],
          A = [],
          N = 0,
          I = null,
          R = 0;
        return (
          (u.use = function e(t) {
            switch (t) {
              case void 0:
              case null:
                N = A.length = 0;
                break;
              default:
                if ("function" === typeof t) A[N++] = t;
                else if ("object" === typeof t)
                  for (var n = 0, r = t.length; n < r; ++n) e(t[n]);
                else R = 0 | !!t;
            }
            return e;
          }),
          (u.set = s),
          void 0 !== e && s(e),
          u
        );
      };
    },
    function (e, t, n) {
      "use strict";
      t.a = {
        animationIterationCount: 1,
        borderImageOutset: 1,
        borderImageSlice: 1,
        borderImageWidth: 1,
        boxFlex: 1,
        boxFlexGroup: 1,
        boxOrdinalGroup: 1,
        columnCount: 1,
        columns: 1,
        flex: 1,
        flexGrow: 1,
        flexPositive: 1,
        flexShrink: 1,
        flexNegative: 1,
        flexOrder: 1,
        gridRow: 1,
        gridRowEnd: 1,
        gridRowSpan: 1,
        gridRowStart: 1,
        gridColumn: 1,
        gridColumnEnd: 1,
        gridColumnSpan: 1,
        gridColumnStart: 1,
        msGridRow: 1,
        msGridRowSpan: 1,
        msGridColumn: 1,
        msGridColumnSpan: 1,
        fontWeight: 1,
        lineHeight: 1,
        opacity: 1,
        order: 1,
        orphans: 1,
        tabSize: 1,
        widows: 1,
        zIndex: 1,
        zoom: 1,
        WebkitLineClamp: 1,
        fillOpacity: 1,
        floodOpacity: 1,
        stopOpacity: 1,
        strokeDasharray: 1,
        strokeDashoffset: 1,
        strokeMiterlimit: 1,
        strokeOpacity: 1,
        strokeWidth: 1,
      };
    },
    function (e, t, n) {
      (function (e) {
        !(function (t) {
          "use strict";
          function n(e, t) {
            (e.super_ = t),
              (e.prototype = Object.create(t.prototype, {
                constructor: {
                  value: e,
                  enumerable: !1,
                  writable: !0,
                  configurable: !0,
                },
              }));
          }
          function r(e, t) {
            Object.defineProperty(this, "kind", { value: e, enumerable: !0 }),
              t &&
                t.length &&
                Object.defineProperty(this, "path", {
                  value: t,
                  enumerable: !0,
                });
          }
          function a(e, t, n) {
            a.super_.call(this, "E", e),
              Object.defineProperty(this, "lhs", { value: t, enumerable: !0 }),
              Object.defineProperty(this, "rhs", { value: n, enumerable: !0 });
          }
          function i(e, t) {
            i.super_.call(this, "N", e),
              Object.defineProperty(this, "rhs", { value: t, enumerable: !0 });
          }
          function o(e, t) {
            o.super_.call(this, "D", e),
              Object.defineProperty(this, "lhs", { value: t, enumerable: !0 });
          }
          function l(e, t, n) {
            l.super_.call(this, "A", e),
              Object.defineProperty(this, "index", {
                value: t,
                enumerable: !0,
              }),
              Object.defineProperty(this, "item", { value: n, enumerable: !0 });
          }
          function s(e, t, n) {
            var r = e.slice((n || t) + 1 || e.length);
            return (e.length = t < 0 ? e.length + t : t), e.push.apply(e, r), e;
          }
          function u(e) {
            var t = "undefined" == typeof e ? "undefined" : D(e);
            return "object" !== t
              ? t
              : e === Math
              ? "math"
              : null === e
              ? "null"
              : Array.isArray(e)
              ? "array"
              : "[object Date]" === Object.prototype.toString.call(e)
              ? "date"
              : "function" == typeof e.toString && /^\/.*\//.test(e.toString())
              ? "regexp"
              : "object";
          }
          function c(e, t, n, r, f, d, h) {
            h = h || [];
            var p = (f = f || []).slice(0);
            if ("undefined" != typeof d) {
              if (r) {
                if ("function" == typeof r && r(p, d)) return;
                if (
                  "object" === ("undefined" == typeof r ? "undefined" : D(r))
                ) {
                  if (r.prefilter && r.prefilter(p, d)) return;
                  if (r.normalize) {
                    var g = r.normalize(p, d, e, t);
                    g && ((e = g[0]), (t = g[1]));
                  }
                }
              }
              p.push(d);
            }
            "regexp" === u(e) &&
              "regexp" === u(t) &&
              ((e = e.toString()), (t = t.toString()));
            var m = "undefined" == typeof e ? "undefined" : D(e),
              v = "undefined" == typeof t ? "undefined" : D(t),
              y =
                "undefined" !== m ||
                (h &&
                  h[h.length - 1].lhs &&
                  h[h.length - 1].lhs.hasOwnProperty(d)),
              b =
                "undefined" !== v ||
                (h &&
                  h[h.length - 1].rhs &&
                  h[h.length - 1].rhs.hasOwnProperty(d));
            if (!y && b) n(new i(p, t));
            else if (!b && y) n(new o(p, e));
            else if (u(e) !== u(t)) n(new a(p, e, t));
            else if ("date" === u(e) && e - t !== 0) n(new a(p, e, t));
            else if ("object" === m && null !== e && null !== t)
              if (
                h.filter(function (t) {
                  return t.lhs === e;
                }).length
              )
                e !== t && n(new a(p, e, t));
              else {
                if ((h.push({ lhs: e, rhs: t }), Array.isArray(e))) {
                  var x;
                  for (e.length, x = 0; x < e.length; x++)
                    x >= t.length
                      ? n(new l(p, x, new o(void 0, e[x])))
                      : c(e[x], t[x], n, r, p, x, h);
                  for (; x < t.length; ) n(new l(p, x, new i(void 0, t[x++])));
                } else {
                  var _ = Object.keys(e),
                    w = Object.keys(t);
                  _.forEach(function (a, i) {
                    var o = w.indexOf(a);
                    o >= 0
                      ? (c(e[a], t[a], n, r, p, a, h), (w = s(w, o)))
                      : c(e[a], void 0, n, r, p, a, h);
                  }),
                    w.forEach(function (e) {
                      c(void 0, t[e], n, r, p, e, h);
                    });
                }
                h.length = h.length - 1;
              }
            else
              e !== t &&
                (("number" === m && isNaN(e) && isNaN(t)) || n(new a(p, e, t)));
          }
          function f(e, t, n, r) {
            return (
              (r = r || []),
              c(
                e,
                t,
                function (e) {
                  e && r.push(e);
                },
                n
              ),
              r.length ? r : void 0
            );
          }
          function d(e, t, n) {
            if (n.path && n.path.length) {
              var r,
                a = e[t],
                i = n.path.length - 1;
              for (r = 0; r < i; r++) a = a[n.path[r]];
              switch (n.kind) {
                case "A":
                  d(a[n.path[r]], n.index, n.item);
                  break;
                case "D":
                  delete a[n.path[r]];
                  break;
                case "E":
                case "N":
                  a[n.path[r]] = n.rhs;
              }
            } else
              switch (n.kind) {
                case "A":
                  d(e[t], n.index, n.item);
                  break;
                case "D":
                  e = s(e, t);
                  break;
                case "E":
                case "N":
                  e[t] = n.rhs;
              }
            return e;
          }
          function h(e, t, n) {
            if (e && t && n && n.kind) {
              for (
                var r = e, a = -1, i = n.path ? n.path.length - 1 : 0;
                ++a < i;

              )
                "undefined" == typeof r[n.path[a]] &&
                  (r[n.path[a]] = "number" == typeof n.path[a] ? [] : {}),
                  (r = r[n.path[a]]);
              switch (n.kind) {
                case "A":
                  d(n.path ? r[n.path[a]] : r, n.index, n.item);
                  break;
                case "D":
                  delete r[n.path[a]];
                  break;
                case "E":
                case "N":
                  r[n.path[a]] = n.rhs;
              }
            }
          }
          function p(e, t, n) {
            if (n.path && n.path.length) {
              var r,
                a = e[t],
                i = n.path.length - 1;
              for (r = 0; r < i; r++) a = a[n.path[r]];
              switch (n.kind) {
                case "A":
                  p(a[n.path[r]], n.index, n.item);
                  break;
                case "D":
                case "E":
                  a[n.path[r]] = n.lhs;
                  break;
                case "N":
                  delete a[n.path[r]];
              }
            } else
              switch (n.kind) {
                case "A":
                  p(e[t], n.index, n.item);
                  break;
                case "D":
                case "E":
                  e[t] = n.lhs;
                  break;
                case "N":
                  e = s(e, t);
              }
            return e;
          }
          function g(e, t, n) {
            if (e && t && n && n.kind) {
              var r,
                a,
                i = e;
              for (a = n.path.length - 1, r = 0; r < a; r++)
                "undefined" == typeof i[n.path[r]] && (i[n.path[r]] = {}),
                  (i = i[n.path[r]]);
              switch (n.kind) {
                case "A":
                  p(i[n.path[r]], n.index, n.item);
                  break;
                case "D":
                case "E":
                  i[n.path[r]] = n.lhs;
                  break;
                case "N":
                  delete i[n.path[r]];
              }
            }
          }
          function m(e, t, n) {
            e &&
              t &&
              c(e, t, function (r) {
                (n && !n(e, t, r)) || h(e, t, r);
              });
          }
          function v(e) {
            return "color: " + N[e].color + "; font-weight: bold";
          }
          function y(e) {
            var t = e.kind,
              n = e.path,
              r = e.lhs,
              a = e.rhs,
              i = e.index,
              o = e.item;
            switch (t) {
              case "E":
                return [n.join("."), r, "\u2192", a];
              case "N":
                return [n.join("."), a];
              case "D":
                return [n.join(".")];
              case "A":
                return [n.join(".") + "[" + i + "]", o];
              default:
                return [];
            }
          }
          function b(e, t, n, r) {
            var a = f(e, t);
            try {
              r ? n.groupCollapsed("diff") : n.group("diff");
            } catch (e) {
              n.log("diff");
            }
            a
              ? a.forEach(function (e) {
                  var t = e.kind,
                    r = y(e);
                  n.log.apply(n, ["%c " + N[t].text, v(t)].concat(T(r)));
                })
              : n.log("\u2014\u2014 no diff \u2014\u2014");
            try {
              n.groupEnd();
            } catch (e) {
              n.log("\u2014\u2014 diff end \u2014\u2014 ");
            }
          }
          function x(e, t, n, r) {
            switch ("undefined" == typeof e ? "undefined" : D(e)) {
              case "object":
                return "function" == typeof e[r] ? e[r].apply(e, T(n)) : e[r];
              case "function":
                return e(t);
              default:
                return e;
            }
          }
          function _(e) {
            var t = e.timestamp,
              n = e.duration;
            return function (e, r, a) {
              var i = ["action"];
              return (
                i.push("%c" + String(e.type)),
                t && i.push("%c@ " + r),
                n && i.push("%c(in " + a.toFixed(2) + " ms)"),
                i.join(" ")
              );
            };
          }
          function w(e, t) {
            var n = t.logger,
              r = t.actionTransformer,
              a = t.titleFormatter,
              i = void 0 === a ? _(t) : a,
              o = t.collapsed,
              l = t.colors,
              s = t.level,
              u = t.diff,
              c = "undefined" == typeof t.titleFormatter;
            e.forEach(function (a, f) {
              var d = a.started,
                h = a.startedTime,
                p = a.action,
                g = a.prevState,
                m = a.error,
                v = a.took,
                y = a.nextState,
                _ = e[f + 1];
              _ && ((y = _.prevState), (v = _.started - d));
              var w = r(p),
                k =
                  "function" == typeof o
                    ? o(
                        function () {
                          return y;
                        },
                        p,
                        a
                      )
                    : o,
                S = P(h),
                C = l.title ? "color: " + l.title(w) + ";" : "",
                M = ["color: gray; font-weight: lighter;"];
              M.push(C),
                t.timestamp && M.push("color: gray; font-weight: lighter;"),
                t.duration && M.push("color: gray; font-weight: lighter;");
              var O = i(w, S, v);
              try {
                k
                  ? l.title && c
                    ? n.groupCollapsed.apply(n, ["%c " + O].concat(M))
                    : n.groupCollapsed(O)
                  : l.title && c
                  ? n.group.apply(n, ["%c " + O].concat(M))
                  : n.group(O);
              } catch (e) {
                n.log(O);
              }
              var E = x(s, w, [g], "prevState"),
                D = x(s, w, [w], "action"),
                T = x(s, w, [m, g], "error"),
                A = x(s, w, [y], "nextState");
              if (E)
                if (l.prevState) {
                  var N = "color: " + l.prevState(g) + "; font-weight: bold";
                  n[E]("%c prev state", N, g);
                } else n[E]("prev state", g);
              if (D)
                if (l.action) {
                  var I = "color: " + l.action(w) + "; font-weight: bold";
                  n[D]("%c action    ", I, w);
                } else n[D]("action    ", w);
              if (m && T)
                if (l.error) {
                  var R = "color: " + l.error(m, g) + "; font-weight: bold;";
                  n[T]("%c error     ", R, m);
                } else n[T]("error     ", m);
              if (A)
                if (l.nextState) {
                  var L = "color: " + l.nextState(y) + "; font-weight: bold";
                  n[A]("%c next state", L, y);
                } else n[A]("next state", y);
              u && b(g, y, n, k);
              try {
                n.groupEnd();
              } catch (e) {
                n.log("\u2014\u2014 log end \u2014\u2014");
              }
            });
          }
          function k() {
            var e =
                arguments.length > 0 && void 0 !== arguments[0]
                  ? arguments[0]
                  : {},
              t = Object.assign({}, I, e),
              n = t.logger,
              r = t.stateTransformer,
              a = t.errorTransformer,
              i = t.predicate,
              o = t.logErrors,
              l = t.diffPredicate;
            if ("undefined" == typeof n)
              return function () {
                return function (e) {
                  return function (t) {
                    return e(t);
                  };
                };
              };
            if (e.getState && e.dispatch)
              return (
                console.error(
                  "[redux-logger] redux-logger not installed. Make sure to pass logger instance as middleware:\n// Logger with default options\nimport { logger } from 'redux-logger'\nconst store = createStore(\n  reducer,\n  applyMiddleware(logger)\n)\n// Or you can create your own logger with custom options http://bit.ly/redux-logger-options\nimport createLogger from 'redux-logger'\nconst logger = createLogger({\n  // ...options\n});\nconst store = createStore(\n  reducer,\n  applyMiddleware(logger)\n)\n"
                ),
                function () {
                  return function (e) {
                    return function (t) {
                      return e(t);
                    };
                  };
                }
              );
            var s = [];
            return function (e) {
              var n = e.getState;
              return function (e) {
                return function (u) {
                  if ("function" == typeof i && !i(n, u)) return e(u);
                  var c = {};
                  s.push(c),
                    (c.started = E.now()),
                    (c.startedTime = new Date()),
                    (c.prevState = r(n())),
                    (c.action = u);
                  var f = void 0;
                  if (o)
                    try {
                      f = e(u);
                    } catch (e) {
                      c.error = a(e);
                    }
                  else f = e(u);
                  (c.took = E.now() - c.started), (c.nextState = r(n()));
                  var d = t.diff && "function" == typeof l ? l(n, u) : t.diff;
                  if (
                    (w(s, Object.assign({}, t, { diff: d })),
                    (s.length = 0),
                    c.error)
                  )
                    throw c.error;
                  return f;
                };
              };
            };
          }
          var S,
            C,
            M = function (e, t) {
              return new Array(t + 1).join(e);
            },
            O = function (e, t) {
              return M("0", t - e.toString().length) + e;
            },
            P = function (e) {
              return (
                O(e.getHours(), 2) +
                ":" +
                O(e.getMinutes(), 2) +
                ":" +
                O(e.getSeconds(), 2) +
                "." +
                O(e.getMilliseconds(), 3)
              );
            },
            E =
              "undefined" != typeof performance &&
              null !== performance &&
              "function" == typeof performance.now
                ? performance
                : Date,
            D =
              "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
                ? function (e) {
                    return typeof e;
                  }
                : function (e) {
                    return e &&
                      "function" == typeof Symbol &&
                      e.constructor === Symbol &&
                      e !== Symbol.prototype
                      ? "symbol"
                      : typeof e;
                  },
            T = function (e) {
              if (Array.isArray(e)) {
                for (var t = 0, n = Array(e.length); t < e.length; t++)
                  n[t] = e[t];
                return n;
              }
              return Array.from(e);
            },
            A = [];
          (S =
            "object" === ("undefined" == typeof e ? "undefined" : D(e)) && e
              ? e
              : "undefined" != typeof window
              ? window
              : {}),
            (C = S.DeepDiff) &&
              A.push(function () {
                "undefined" != typeof C &&
                  S.DeepDiff === f &&
                  ((S.DeepDiff = C), (C = void 0));
              }),
            n(a, r),
            n(i, r),
            n(o, r),
            n(l, r),
            Object.defineProperties(f, {
              diff: { value: f, enumerable: !0 },
              observableDiff: { value: c, enumerable: !0 },
              applyDiff: { value: m, enumerable: !0 },
              applyChange: { value: h, enumerable: !0 },
              revertChange: { value: g, enumerable: !0 },
              isConflict: {
                value: function () {
                  return "undefined" != typeof C;
                },
                enumerable: !0,
              },
              noConflict: {
                value: function () {
                  return (
                    A &&
                      (A.forEach(function (e) {
                        e();
                      }),
                      (A = null)),
                    f
                  );
                },
                enumerable: !0,
              },
            });
          var N = {
              E: { color: "#2196F3", text: "CHANGED:" },
              N: { color: "#4CAF50", text: "ADDED:" },
              D: { color: "#F44336", text: "DELETED:" },
              A: { color: "#2196F3", text: "ARRAY:" },
            },
            I = {
              level: "log",
              logger: console,
              logErrors: !0,
              collapsed: void 0,
              predicate: void 0,
              duration: !1,
              timestamp: !0,
              stateTransformer: function (e) {
                return e;
              },
              actionTransformer: function (e) {
                return e;
              },
              errorTransformer: function (e) {
                return e;
              },
              colors: {
                title: function () {
                  return "inherit";
                },
                prevState: function () {
                  return "#9E9E9E";
                },
                action: function () {
                  return "#03A9F4";
                },
                nextState: function () {
                  return "#4CAF50";
                },
                error: function () {
                  return "#F20404";
                },
              },
              diff: !1,
              diffPredicate: void 0,
              transformer: void 0,
            },
            R = function () {
              var e =
                  arguments.length > 0 && void 0 !== arguments[0]
                    ? arguments[0]
                    : {},
                t = e.dispatch,
                n = e.getState;
              return "function" == typeof t || "function" == typeof n
                ? k()({ dispatch: t, getState: n })
                : void console.error(
                    "\n[redux-logger v3] BREAKING CHANGE\n[redux-logger v3] Since 3.0.0 redux-logger exports by default logger with default settings.\n[redux-logger v3] Change\n[redux-logger v3] import createLogger from 'redux-logger'\n[redux-logger v3] to\n[redux-logger v3] import { createLogger } from 'redux-logger'\n"
                  );
            };
          (t.defaults = I),
            (t.createLogger = k),
            (t.logger = R),
            (t.default = R),
            Object.defineProperty(t, "__esModule", { value: !0 });
        })(t);
      }.call(this, n(25)));
    },
    function (e, t, n) {
      "use strict";
      function r(e) {
        return function (t) {
          var n = t.dispatch,
            r = t.getState;
          return function (t) {
            return function (a) {
              return "function" === typeof a ? a(n, r, e) : t(a);
            };
          };
        };
      }
      var a = r();
      (a.withExtraArgument = r), (t.a = a);
    },
    function (e, t, n) {
      "use strict";
      n.d(t, "a", function () {
        return i;
      });
      var r = n(15);
      var a = n(23);
      function i(e) {
        return (
          (function (e) {
            if (Array.isArray(e)) return Object(r.a)(e);
          })(e) ||
          (function (e) {
            if ("undefined" !== typeof Symbol && Symbol.iterator in Object(e))
              return Array.from(e);
          })(e) ||
          Object(a.a)(e) ||
          (function () {
            throw new TypeError(
              "Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
            );
          })()
        );
      }
    },
    function (e, t, n) {
      "use strict";
      n(24);
      var r = n(0),
        a = 60103;
      if (((t.Fragment = 60107), "function" === typeof Symbol && Symbol.for)) {
        var i = Symbol.for;
        (a = i("react.element")), (t.Fragment = i("react.fragment"));
      }
      var o =
          r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED
            .ReactCurrentOwner,
        l = Object.prototype.hasOwnProperty,
        s = { key: !0, ref: !0, __self: !0, __source: !0 };
      function u(e, t, n) {
        var r,
          i = {},
          u = null,
          c = null;
        for (r in (void 0 !== n && (u = "" + n),
        void 0 !== t.key && (u = "" + t.key),
        void 0 !== t.ref && (c = t.ref),
        t))
          l.call(t, r) && !s.hasOwnProperty(r) && (i[r] = t[r]);
        if (e && e.defaultProps)
          for (r in (t = e.defaultProps)) void 0 === i[r] && (i[r] = t[r]);
        return {
          $$typeof: a,
          type: e,
          key: u,
          ref: c,
          props: i,
          _owner: o.current,
        };
      }
      (t.jsx = u), (t.jsxs = u);
    },
    function (e, t, n) {
      "use strict";
      var r = n(24),
        a = 60103,
        i = 60106;
      (t.Fragment = 60107), (t.StrictMode = 60108), (t.Profiler = 60114);
      var o = 60109,
        l = 60110,
        s = 60112;
      t.Suspense = 60113;
      var u = 60115,
        c = 60116;
      if ("function" === typeof Symbol && Symbol.for) {
        var f = Symbol.for;
        (a = f("react.element")),
          (i = f("react.portal")),
          (t.Fragment = f("react.fragment")),
          (t.StrictMode = f("react.strict_mode")),
          (t.Profiler = f("react.profiler")),
          (o = f("react.provider")),
          (l = f("react.context")),
          (s = f("react.forward_ref")),
          (t.Suspense = f("react.suspense")),
          (u = f("react.memo")),
          (c = f("react.lazy"));
      }
      var d = "function" === typeof Symbol && Symbol.iterator;
      function h(e) {
        for (
          var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e,
            n = 1;
          n < arguments.length;
          n++
        )
          t += "&args[]=" + encodeURIComponent(arguments[n]);
        return (
          "Minified React error #" +
          e +
          "; visit " +
          t +
          " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
        );
      }
      var p = {
          isMounted: function () {
            return !1;
          },
          enqueueForceUpdate: function () {},
          enqueueReplaceState: function () {},
          enqueueSetState: function () {},
        },
        g = {};
      function m(e, t, n) {
        (this.props = e),
          (this.context = t),
          (this.refs = g),
          (this.updater = n || p);
      }
      function v() {}
      function y(e, t, n) {
        (this.props = e),
          (this.context = t),
          (this.refs = g),
          (this.updater = n || p);
      }
      (m.prototype.isReactComponent = {}),
        (m.prototype.setState = function (e, t) {
          if ("object" !== typeof e && "function" !== typeof e && null != e)
            throw Error(h(85));
          this.updater.enqueueSetState(this, e, t, "setState");
        }),
        (m.prototype.forceUpdate = function (e) {
          this.updater.enqueueForceUpdate(this, e, "forceUpdate");
        }),
        (v.prototype = m.prototype);
      var b = (y.prototype = new v());
      (b.constructor = y), r(b, m.prototype), (b.isPureReactComponent = !0);
      var x = { current: null },
        _ = Object.prototype.hasOwnProperty,
        w = { key: !0, ref: !0, __self: !0, __source: !0 };
      function k(e, t, n) {
        var r,
          i = {},
          o = null,
          l = null;
        if (null != t)
          for (r in (void 0 !== t.ref && (l = t.ref),
          void 0 !== t.key && (o = "" + t.key),
          t))
            _.call(t, r) && !w.hasOwnProperty(r) && (i[r] = t[r]);
        var s = arguments.length - 2;
        if (1 === s) i.children = n;
        else if (1 < s) {
          for (var u = Array(s), c = 0; c < s; c++) u[c] = arguments[c + 2];
          i.children = u;
        }
        if (e && e.defaultProps)
          for (r in (s = e.defaultProps)) void 0 === i[r] && (i[r] = s[r]);
        return {
          $$typeof: a,
          type: e,
          key: o,
          ref: l,
          props: i,
          _owner: x.current,
        };
      }
      function S(e) {
        return "object" === typeof e && null !== e && e.$$typeof === a;
      }
      var C = /\/+/g;
      function M(e, t) {
        return "object" === typeof e && null !== e && null != e.key
          ? (function (e) {
              var t = { "=": "=0", ":": "=2" };
              return (
                "$" +
                e.replace(/[=:]/g, function (e) {
                  return t[e];
                })
              );
            })("" + e.key)
          : t.toString(36);
      }
      function O(e, t, n, r, o) {
        var l = typeof e;
        ("undefined" !== l && "boolean" !== l) || (e = null);
        var s = !1;
        if (null === e) s = !0;
        else
          switch (l) {
            case "string":
            case "number":
              s = !0;
              break;
            case "object":
              switch (e.$$typeof) {
                case a:
                case i:
                  s = !0;
              }
          }
        if (s)
          return (
            (o = o((s = e))),
            (e = "" === r ? "." + M(s, 0) : r),
            Array.isArray(o)
              ? ((n = ""),
                null != e && (n = e.replace(C, "$&/") + "/"),
                O(o, t, n, "", function (e) {
                  return e;
                }))
              : null != o &&
                (S(o) &&
                  (o = (function (e, t) {
                    return {
                      $$typeof: a,
                      type: e.type,
                      key: t,
                      ref: e.ref,
                      props: e.props,
                      _owner: e._owner,
                    };
                  })(
                    o,
                    n +
                      (!o.key || (s && s.key === o.key)
                        ? ""
                        : ("" + o.key).replace(C, "$&/") + "/") +
                      e
                  )),
                t.push(o)),
            1
          );
        if (((s = 0), (r = "" === r ? "." : r + ":"), Array.isArray(e)))
          for (var u = 0; u < e.length; u++) {
            var c = r + M((l = e[u]), u);
            s += O(l, t, n, c, o);
          }
        else if (
          "function" ===
          typeof (c = (function (e) {
            return null === e || "object" !== typeof e
              ? null
              : "function" === typeof (e = (d && e[d]) || e["@@iterator"])
              ? e
              : null;
          })(e))
        )
          for (e = c.call(e), u = 0; !(l = e.next()).done; )
            s += O((l = l.value), t, n, (c = r + M(l, u++)), o);
        else if ("object" === l)
          throw (
            ((t = "" + e),
            Error(
              h(
                31,
                "[object Object]" === t
                  ? "object with keys {" + Object.keys(e).join(", ") + "}"
                  : t
              )
            ))
          );
        return s;
      }
      function P(e, t, n) {
        if (null == e) return e;
        var r = [],
          a = 0;
        return (
          O(e, r, "", "", function (e) {
            return t.call(n, e, a++);
          }),
          r
        );
      }
      function E(e) {
        if (-1 === e._status) {
          var t = e._result;
          (t = t()),
            (e._status = 0),
            (e._result = t),
            t.then(
              function (t) {
                0 === e._status &&
                  ((t = t.default), (e._status = 1), (e._result = t));
              },
              function (t) {
                0 === e._status && ((e._status = 2), (e._result = t));
              }
            );
        }
        if (1 === e._status) return e._result;
        throw e._result;
      }
      var D = { current: null };
      function T() {
        var e = D.current;
        if (null === e) throw Error(h(321));
        return e;
      }
      var A = {
        ReactCurrentDispatcher: D,
        ReactCurrentBatchConfig: { transition: 0 },
        ReactCurrentOwner: x,
        IsSomeRendererActing: { current: !1 },
        assign: r,
      };
      (t.Children = {
        map: P,
        forEach: function (e, t, n) {
          P(
            e,
            function () {
              t.apply(this, arguments);
            },
            n
          );
        },
        count: function (e) {
          var t = 0;
          return (
            P(e, function () {
              t++;
            }),
            t
          );
        },
        toArray: function (e) {
          return (
            P(e, function (e) {
              return e;
            }) || []
          );
        },
        only: function (e) {
          if (!S(e)) throw Error(h(143));
          return e;
        },
      }),
        (t.Component = m),
        (t.PureComponent = y),
        (t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = A),
        (t.cloneElement = function (e, t, n) {
          if (null === e || void 0 === e) throw Error(h(267, e));
          var i = r({}, e.props),
            o = e.key,
            l = e.ref,
            s = e._owner;
          if (null != t) {
            if (
              (void 0 !== t.ref && ((l = t.ref), (s = x.current)),
              void 0 !== t.key && (o = "" + t.key),
              e.type && e.type.defaultProps)
            )
              var u = e.type.defaultProps;
            for (c in t)
              _.call(t, c) &&
                !w.hasOwnProperty(c) &&
                (i[c] = void 0 === t[c] && void 0 !== u ? u[c] : t[c]);
          }
          var c = arguments.length - 2;
          if (1 === c) i.children = n;
          else if (1 < c) {
            u = Array(c);
            for (var f = 0; f < c; f++) u[f] = arguments[f + 2];
            i.children = u;
          }
          return {
            $$typeof: a,
            type: e.type,
            key: o,
            ref: l,
            props: i,
            _owner: s,
          };
        }),
        (t.createContext = function (e, t) {
          return (
            void 0 === t && (t = null),
            ((e = {
              $$typeof: l,
              _calculateChangedBits: t,
              _currentValue: e,
              _currentValue2: e,
              _threadCount: 0,
              Provider: null,
              Consumer: null,
            }).Provider = { $$typeof: o, _context: e }),
            (e.Consumer = e)
          );
        }),
        (t.createElement = k),
        (t.createFactory = function (e) {
          var t = k.bind(null, e);
          return (t.type = e), t;
        }),
        (t.createRef = function () {
          return { current: null };
        }),
        (t.forwardRef = function (e) {
          return { $$typeof: s, render: e };
        }),
        (t.isValidElement = S),
        (t.lazy = function (e) {
          return {
            $$typeof: c,
            _payload: { _status: -1, _result: e },
            _init: E,
          };
        }),
        (t.memo = function (e, t) {
          return { $$typeof: u, type: e, compare: void 0 === t ? null : t };
        }),
        (t.useCallback = function (e, t) {
          return T().useCallback(e, t);
        }),
        (t.useContext = function (e, t) {
          return T().useContext(e, t);
        }),
        (t.useDebugValue = function () {}),
        (t.useEffect = function (e, t) {
          return T().useEffect(e, t);
        }),
        (t.useImperativeHandle = function (e, t, n) {
          return T().useImperativeHandle(e, t, n);
        }),
        (t.useLayoutEffect = function (e, t) {
          return T().useLayoutEffect(e, t);
        }),
        (t.useMemo = function (e, t) {
          return T().useMemo(e, t);
        }),
        (t.useReducer = function (e, t, n) {
          return T().useReducer(e, t, n);
        }),
        (t.useRef = function (e) {
          return T().useRef(e);
        }),
        (t.useState = function (e) {
          return T().useState(e);
        }),
        (t.version = "17.0.1");
    },
    function (e, t, n) {
      "use strict";
      var r = n(0),
        a = n(24),
        i = n(67);
      function o(e) {
        for (
          var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e,
            n = 1;
          n < arguments.length;
          n++
        )
          t += "&args[]=" + encodeURIComponent(arguments[n]);
        return (
          "Minified React error #" +
          e +
          "; visit " +
          t +
          " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
        );
      }
      if (!r) throw Error(o(227));
      var l = new Set(),
        s = {};
      function u(e, t) {
        c(e, t), c(e + "Capture", t);
      }
      function c(e, t) {
        for (s[e] = t, e = 0; e < t.length; e++) l.add(t[e]);
      }
      var f = !(
          "undefined" === typeof window ||
          "undefined" === typeof window.document ||
          "undefined" === typeof window.document.createElement
        ),
        d = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
        h = Object.prototype.hasOwnProperty,
        p = {},
        g = {};
      function m(e, t, n, r, a, i, o) {
        (this.acceptsBooleans = 2 === t || 3 === t || 4 === t),
          (this.attributeName = r),
          (this.attributeNamespace = a),
          (this.mustUseProperty = n),
          (this.propertyName = e),
          (this.type = t),
          (this.sanitizeURL = i),
          (this.removeEmptyString = o);
      }
      var v = {};
      "children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style"
        .split(" ")
        .forEach(function (e) {
          v[e] = new m(e, 0, !1, e, null, !1, !1);
        }),
        [
          ["acceptCharset", "accept-charset"],
          ["className", "class"],
          ["htmlFor", "for"],
          ["httpEquiv", "http-equiv"],
        ].forEach(function (e) {
          var t = e[0];
          v[t] = new m(t, 1, !1, e[1], null, !1, !1);
        }),
        ["contentEditable", "draggable", "spellCheck", "value"].forEach(
          function (e) {
            v[e] = new m(e, 2, !1, e.toLowerCase(), null, !1, !1);
          }
        ),
        [
          "autoReverse",
          "externalResourcesRequired",
          "focusable",
          "preserveAlpha",
        ].forEach(function (e) {
          v[e] = new m(e, 2, !1, e, null, !1, !1);
        }),
        "allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope"
          .split(" ")
          .forEach(function (e) {
            v[e] = new m(e, 3, !1, e.toLowerCase(), null, !1, !1);
          }),
        ["checked", "multiple", "muted", "selected"].forEach(function (e) {
          v[e] = new m(e, 3, !0, e, null, !1, !1);
        }),
        ["capture", "download"].forEach(function (e) {
          v[e] = new m(e, 4, !1, e, null, !1, !1);
        }),
        ["cols", "rows", "size", "span"].forEach(function (e) {
          v[e] = new m(e, 6, !1, e, null, !1, !1);
        }),
        ["rowSpan", "start"].forEach(function (e) {
          v[e] = new m(e, 5, !1, e.toLowerCase(), null, !1, !1);
        });
      var y = /[\-:]([a-z])/g;
      function b(e) {
        return e[1].toUpperCase();
      }
      function x(e, t, n, r) {
        var a = v.hasOwnProperty(t) ? v[t] : null;
        (null !== a
          ? 0 === a.type
          : !r &&
            2 < t.length &&
            ("o" === t[0] || "O" === t[0]) &&
            ("n" === t[1] || "N" === t[1])) ||
          ((function (e, t, n, r) {
            if (
              null === t ||
              "undefined" === typeof t ||
              (function (e, t, n, r) {
                if (null !== n && 0 === n.type) return !1;
                switch (typeof t) {
                  case "function":
                  case "symbol":
                    return !0;
                  case "boolean":
                    return (
                      !r &&
                      (null !== n
                        ? !n.acceptsBooleans
                        : "data-" !== (e = e.toLowerCase().slice(0, 5)) &&
                          "aria-" !== e)
                    );
                  default:
                    return !1;
                }
              })(e, t, n, r)
            )
              return !0;
            if (r) return !1;
            if (null !== n)
              switch (n.type) {
                case 3:
                  return !t;
                case 4:
                  return !1 === t;
                case 5:
                  return isNaN(t);
                case 6:
                  return isNaN(t) || 1 > t;
              }
            return !1;
          })(t, n, a, r) && (n = null),
          r || null === a
            ? (function (e) {
                return (
                  !!h.call(g, e) ||
                  (!h.call(p, e) &&
                    (d.test(e) ? (g[e] = !0) : ((p[e] = !0), !1)))
                );
              })(t) &&
              (null === n ? e.removeAttribute(t) : e.setAttribute(t, "" + n))
            : a.mustUseProperty
            ? (e[a.propertyName] = null === n ? 3 !== a.type && "" : n)
            : ((t = a.attributeName),
              (r = a.attributeNamespace),
              null === n
                ? e.removeAttribute(t)
                : ((n =
                    3 === (a = a.type) || (4 === a && !0 === n) ? "" : "" + n),
                  r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n))));
      }
      "accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height"
        .split(" ")
        .forEach(function (e) {
          var t = e.replace(y, b);
          v[t] = new m(t, 1, !1, e, null, !1, !1);
        }),
        "xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type"
          .split(" ")
          .forEach(function (e) {
            var t = e.replace(y, b);
            v[t] = new m(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1);
          }),
        ["xml:base", "xml:lang", "xml:space"].forEach(function (e) {
          var t = e.replace(y, b);
          v[t] = new m(
            t,
            1,
            !1,
            e,
            "http://www.w3.org/XML/1998/namespace",
            !1,
            !1
          );
        }),
        ["tabIndex", "crossOrigin"].forEach(function (e) {
          v[e] = new m(e, 1, !1, e.toLowerCase(), null, !1, !1);
        }),
        (v.xlinkHref = new m(
          "xlinkHref",
          1,
          !1,
          "xlink:href",
          "http://www.w3.org/1999/xlink",
          !0,
          !1
        )),
        ["src", "href", "action", "formAction"].forEach(function (e) {
          v[e] = new m(e, 1, !1, e.toLowerCase(), null, !0, !0);
        });
      var _ = r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
        w = 60103,
        k = 60106,
        S = 60107,
        C = 60108,
        M = 60114,
        O = 60109,
        P = 60110,
        E = 60112,
        D = 60113,
        T = 60120,
        A = 60115,
        N = 60116,
        I = 60121,
        R = 60128,
        L = 60129,
        F = 60130,
        j = 60131;
      if ("function" === typeof Symbol && Symbol.for) {
        var z = Symbol.for;
        (w = z("react.element")),
          (k = z("react.portal")),
          (S = z("react.fragment")),
          (C = z("react.strict_mode")),
          (M = z("react.profiler")),
          (O = z("react.provider")),
          (P = z("react.context")),
          (E = z("react.forward_ref")),
          (D = z("react.suspense")),
          (T = z("react.suspense_list")),
          (A = z("react.memo")),
          (N = z("react.lazy")),
          (I = z("react.block")),
          z("react.scope"),
          (R = z("react.opaque.id")),
          (L = z("react.debug_trace_mode")),
          (F = z("react.offscreen")),
          (j = z("react.legacy_hidden"));
      }
      var W,
        V = "function" === typeof Symbol && Symbol.iterator;
      function Y(e) {
        return null === e || "object" !== typeof e
          ? null
          : "function" === typeof (e = (V && e[V]) || e["@@iterator"])
          ? e
          : null;
      }
      function B(e) {
        if (void 0 === W)
          try {
            throw Error();
          } catch (n) {
            var t = n.stack.trim().match(/\n( *(at )?)/);
            W = (t && t[1]) || "";
          }
        return "\n" + W + e;
      }
      var H = !1;
      function U(e, t) {
        if (!e || H) return "";
        H = !0;
        var n = Error.prepareStackTrace;
        Error.prepareStackTrace = void 0;
        try {
          if (t)
            if (
              ((t = function () {
                throw Error();
              }),
              Object.defineProperty(t.prototype, "props", {
                set: function () {
                  throw Error();
                },
              }),
              "object" === typeof Reflect && Reflect.construct)
            ) {
              try {
                Reflect.construct(t, []);
              } catch (s) {
                var r = s;
              }
              Reflect.construct(e, [], t);
            } else {
              try {
                t.call();
              } catch (s) {
                r = s;
              }
              e.call(t.prototype);
            }
          else {
            try {
              throw Error();
            } catch (s) {
              r = s;
            }
            e();
          }
        } catch (s) {
          if (s && r && "string" === typeof s.stack) {
            for (
              var a = s.stack.split("\n"),
                i = r.stack.split("\n"),
                o = a.length - 1,
                l = i.length - 1;
              1 <= o && 0 <= l && a[o] !== i[l];

            )
              l--;
            for (; 1 <= o && 0 <= l; o--, l--)
              if (a[o] !== i[l]) {
                if (1 !== o || 1 !== l)
                  do {
                    if ((o--, 0 > --l || a[o] !== i[l]))
                      return "\n" + a[o].replace(" at new ", " at ");
                  } while (1 <= o && 0 <= l);
                break;
              }
          }
        } finally {
          (H = !1), (Error.prepareStackTrace = n);
        }
        return (e = e ? e.displayName || e.name : "") ? B(e) : "";
      }
      function $(e) {
        switch (e.tag) {
          case 5:
            return B(e.type);
          case 16:
            return B("Lazy");
          case 13:
            return B("Suspense");
          case 19:
            return B("SuspenseList");
          case 0:
          case 2:
          case 15:
            return (e = U(e.type, !1));
          case 11:
            return (e = U(e.type.render, !1));
          case 22:
            return (e = U(e.type._render, !1));
          case 1:
            return (e = U(e.type, !0));
          default:
            return "";
        }
      }
      function G(e) {
        if (null == e) return null;
        if ("function" === typeof e) return e.displayName || e.name || null;
        if ("string" === typeof e) return e;
        switch (e) {
          case S:
            return "Fragment";
          case k:
            return "Portal";
          case M:
            return "Profiler";
          case C:
            return "StrictMode";
          case D:
            return "Suspense";
          case T:
            return "SuspenseList";
        }
        if ("object" === typeof e)
          switch (e.$$typeof) {
            case P:
              return (e.displayName || "Context") + ".Consumer";
            case O:
              return (e._context.displayName || "Context") + ".Provider";
            case E:
              var t = e.render;
              return (
                (t = t.displayName || t.name || ""),
                e.displayName ||
                  ("" !== t ? "ForwardRef(" + t + ")" : "ForwardRef")
              );
            case A:
              return G(e.type);
            case I:
              return G(e._render);
            case N:
              (t = e._payload), (e = e._init);
              try {
                return G(e(t));
              } catch (n) {}
          }
        return null;
      }
      function q(e) {
        switch (typeof e) {
          case "boolean":
          case "number":
          case "object":
          case "string":
          case "undefined":
            return e;
          default:
            return "";
        }
      }
      function K(e) {
        var t = e.type;
        return (
          (e = e.nodeName) &&
          "input" === e.toLowerCase() &&
          ("checkbox" === t || "radio" === t)
        );
      }
      function Q(e) {
        e._valueTracker ||
          (e._valueTracker = (function (e) {
            var t = K(e) ? "checked" : "value",
              n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t),
              r = "" + e[t];
            if (
              !e.hasOwnProperty(t) &&
              "undefined" !== typeof n &&
              "function" === typeof n.get &&
              "function" === typeof n.set
            ) {
              var a = n.get,
                i = n.set;
              return (
                Object.defineProperty(e, t, {
                  configurable: !0,
                  get: function () {
                    return a.call(this);
                  },
                  set: function (e) {
                    (r = "" + e), i.call(this, e);
                  },
                }),
                Object.defineProperty(e, t, { enumerable: n.enumerable }),
                {
                  getValue: function () {
                    return r;
                  },
                  setValue: function (e) {
                    r = "" + e;
                  },
                  stopTracking: function () {
                    (e._valueTracker = null), delete e[t];
                  },
                }
              );
            }
          })(e));
      }
      function Z(e) {
        if (!e) return !1;
        var t = e._valueTracker;
        if (!t) return !0;
        var n = t.getValue(),
          r = "";
        return (
          e && (r = K(e) ? (e.checked ? "true" : "false") : e.value),
          (e = r) !== n && (t.setValue(e), !0)
        );
      }
      function X(e) {
        if (
          "undefined" ===
          typeof (e =
            e || ("undefined" !== typeof document ? document : void 0))
        )
          return null;
        try {
          return e.activeElement || e.body;
        } catch (t) {
          return e.body;
        }
      }
      function J(e, t) {
        var n = t.checked;
        return a({}, t, {
          defaultChecked: void 0,
          defaultValue: void 0,
          value: void 0,
          checked: null != n ? n : e._wrapperState.initialChecked,
        });
      }
      function ee(e, t) {
        var n = null == t.defaultValue ? "" : t.defaultValue,
          r = null != t.checked ? t.checked : t.defaultChecked;
        (n = q(null != t.value ? t.value : n)),
          (e._wrapperState = {
            initialChecked: r,
            initialValue: n,
            controlled:
              "checkbox" === t.type || "radio" === t.type
                ? null != t.checked
                : null != t.value,
          });
      }
      function te(e, t) {
        null != (t = t.checked) && x(e, "checked", t, !1);
      }
      function ne(e, t) {
        te(e, t);
        var n = q(t.value),
          r = t.type;
        if (null != n)
          "number" === r
            ? ((0 === n && "" === e.value) || e.value != n) &&
              (e.value = "" + n)
            : e.value !== "" + n && (e.value = "" + n);
        else if ("submit" === r || "reset" === r)
          return void e.removeAttribute("value");
        t.hasOwnProperty("value")
          ? ae(e, t.type, n)
          : t.hasOwnProperty("defaultValue") &&
            ae(e, t.type, q(t.defaultValue)),
          null == t.checked &&
            null != t.defaultChecked &&
            (e.defaultChecked = !!t.defaultChecked);
      }
      function re(e, t, n) {
        if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
          var r = t.type;
          if (
            !(
              ("submit" !== r && "reset" !== r) ||
              (void 0 !== t.value && null !== t.value)
            )
          )
            return;
          (t = "" + e._wrapperState.initialValue),
            n || t === e.value || (e.value = t),
            (e.defaultValue = t);
        }
        "" !== (n = e.name) && (e.name = ""),
          (e.defaultChecked = !!e._wrapperState.initialChecked),
          "" !== n && (e.name = n);
      }
      function ae(e, t, n) {
        ("number" === t && X(e.ownerDocument) === e) ||
          (null == n
            ? (e.defaultValue = "" + e._wrapperState.initialValue)
            : e.defaultValue !== "" + n && (e.defaultValue = "" + n));
      }
      function ie(e, t) {
        return (
          (e = a({ children: void 0 }, t)),
          (t = (function (e) {
            var t = "";
            return (
              r.Children.forEach(e, function (e) {
                null != e && (t += e);
              }),
              t
            );
          })(t.children)) && (e.children = t),
          e
        );
      }
      function oe(e, t, n, r) {
        if (((e = e.options), t)) {
          t = {};
          for (var a = 0; a < n.length; a++) t["$" + n[a]] = !0;
          for (n = 0; n < e.length; n++)
            (a = t.hasOwnProperty("$" + e[n].value)),
              e[n].selected !== a && (e[n].selected = a),
              a && r && (e[n].defaultSelected = !0);
        } else {
          for (n = "" + q(n), t = null, a = 0; a < e.length; a++) {
            if (e[a].value === n)
              return (
                (e[a].selected = !0), void (r && (e[a].defaultSelected = !0))
              );
            null !== t || e[a].disabled || (t = e[a]);
          }
          null !== t && (t.selected = !0);
        }
      }
      function le(e, t) {
        if (null != t.dangerouslySetInnerHTML) throw Error(o(91));
        return a({}, t, {
          value: void 0,
          defaultValue: void 0,
          children: "" + e._wrapperState.initialValue,
        });
      }
      function se(e, t) {
        var n = t.value;
        if (null == n) {
          if (((n = t.children), (t = t.defaultValue), null != n)) {
            if (null != t) throw Error(o(92));
            if (Array.isArray(n)) {
              if (!(1 >= n.length)) throw Error(o(93));
              n = n[0];
            }
            t = n;
          }
          null == t && (t = ""), (n = t);
        }
        e._wrapperState = { initialValue: q(n) };
      }
      function ue(e, t) {
        var n = q(t.value),
          r = q(t.defaultValue);
        null != n &&
          ((n = "" + n) !== e.value && (e.value = n),
          null == t.defaultValue &&
            e.defaultValue !== n &&
            (e.defaultValue = n)),
          null != r && (e.defaultValue = "" + r);
      }
      function ce(e) {
        var t = e.textContent;
        t === e._wrapperState.initialValue &&
          "" !== t &&
          null !== t &&
          (e.value = t);
      }
      var fe = "http://www.w3.org/1999/xhtml",
        de = "http://www.w3.org/2000/svg";
      function he(e) {
        switch (e) {
          case "svg":
            return "http://www.w3.org/2000/svg";
          case "math":
            return "http://www.w3.org/1998/Math/MathML";
          default:
            return "http://www.w3.org/1999/xhtml";
        }
      }
      function pe(e, t) {
        return null == e || "http://www.w3.org/1999/xhtml" === e
          ? he(t)
          : "http://www.w3.org/2000/svg" === e && "foreignObject" === t
          ? "http://www.w3.org/1999/xhtml"
          : e;
      }
      var ge,
        me,
        ve =
          ((me = function (e, t) {
            if (e.namespaceURI !== de || "innerHTML" in e) e.innerHTML = t;
            else {
              for (
                (ge = ge || document.createElement("div")).innerHTML =
                  "<svg>" + t.valueOf().toString() + "</svg>",
                  t = ge.firstChild;
                e.firstChild;

              )
                e.removeChild(e.firstChild);
              for (; t.firstChild; ) e.appendChild(t.firstChild);
            }
          }),
          "undefined" !== typeof MSApp && MSApp.execUnsafeLocalFunction
            ? function (e, t, n, r) {
                MSApp.execUnsafeLocalFunction(function () {
                  return me(e, t);
                });
              }
            : me);
      function ye(e, t) {
        if (t) {
          var n = e.firstChild;
          if (n && n === e.lastChild && 3 === n.nodeType)
            return void (n.nodeValue = t);
        }
        e.textContent = t;
      }
      var be = {
          animationIterationCount: !0,
          borderImageOutset: !0,
          borderImageSlice: !0,
          borderImageWidth: !0,
          boxFlex: !0,
          boxFlexGroup: !0,
          boxOrdinalGroup: !0,
          columnCount: !0,
          columns: !0,
          flex: !0,
          flexGrow: !0,
          flexPositive: !0,
          flexShrink: !0,
          flexNegative: !0,
          flexOrder: !0,
          gridArea: !0,
          gridRow: !0,
          gridRowEnd: !0,
          gridRowSpan: !0,
          gridRowStart: !0,
          gridColumn: !0,
          gridColumnEnd: !0,
          gridColumnSpan: !0,
          gridColumnStart: !0,
          fontWeight: !0,
          lineClamp: !0,
          lineHeight: !0,
          opacity: !0,
          order: !0,
          orphans: !0,
          tabSize: !0,
          widows: !0,
          zIndex: !0,
          zoom: !0,
          fillOpacity: !0,
          floodOpacity: !0,
          stopOpacity: !0,
          strokeDasharray: !0,
          strokeDashoffset: !0,
          strokeMiterlimit: !0,
          strokeOpacity: !0,
          strokeWidth: !0,
        },
        xe = ["Webkit", "ms", "Moz", "O"];
      function _e(e, t, n) {
        return null == t || "boolean" === typeof t || "" === t
          ? ""
          : n ||
            "number" !== typeof t ||
            0 === t ||
            (be.hasOwnProperty(e) && be[e])
          ? ("" + t).trim()
          : t + "px";
      }
      function we(e, t) {
        for (var n in ((e = e.style), t))
          if (t.hasOwnProperty(n)) {
            var r = 0 === n.indexOf("--"),
              a = _e(n, t[n], r);
            "float" === n && (n = "cssFloat"),
              r ? e.setProperty(n, a) : (e[n] = a);
          }
      }
      Object.keys(be).forEach(function (e) {
        xe.forEach(function (t) {
          (t = t + e.charAt(0).toUpperCase() + e.substring(1)), (be[t] = be[e]);
        });
      });
      var ke = a(
        { menuitem: !0 },
        {
          area: !0,
          base: !0,
          br: !0,
          col: !0,
          embed: !0,
          hr: !0,
          img: !0,
          input: !0,
          keygen: !0,
          link: !0,
          meta: !0,
          param: !0,
          source: !0,
          track: !0,
          wbr: !0,
        }
      );
      function Se(e, t) {
        if (t) {
          if (
            ke[e] &&
            (null != t.children || null != t.dangerouslySetInnerHTML)
          )
            throw Error(o(137, e));
          if (null != t.dangerouslySetInnerHTML) {
            if (null != t.children) throw Error(o(60));
            if (
              "object" !== typeof t.dangerouslySetInnerHTML ||
              !("__html" in t.dangerouslySetInnerHTML)
            )
              throw Error(o(61));
          }
          if (null != t.style && "object" !== typeof t.style)
            throw Error(o(62));
        }
      }
      function Ce(e, t) {
        if (-1 === e.indexOf("-")) return "string" === typeof t.is;
        switch (e) {
          case "annotation-xml":
          case "color-profile":
          case "font-face":
          case "font-face-src":
          case "font-face-uri":
          case "font-face-format":
          case "font-face-name":
          case "missing-glyph":
            return !1;
          default:
            return !0;
        }
      }
      function Me(e) {
        return (
          (e = e.target || e.srcElement || window).correspondingUseElement &&
            (e = e.correspondingUseElement),
          3 === e.nodeType ? e.parentNode : e
        );
      }
      var Oe = null,
        Pe = null,
        Ee = null;
      function De(e) {
        if ((e = ea(e))) {
          if ("function" !== typeof Oe) throw Error(o(280));
          var t = e.stateNode;
          t && ((t = na(t)), Oe(e.stateNode, e.type, t));
        }
      }
      function Te(e) {
        Pe ? (Ee ? Ee.push(e) : (Ee = [e])) : (Pe = e);
      }
      function Ae() {
        if (Pe) {
          var e = Pe,
            t = Ee;
          if (((Ee = Pe = null), De(e), t))
            for (e = 0; e < t.length; e++) De(t[e]);
        }
      }
      function Ne(e, t) {
        return e(t);
      }
      function Ie(e, t, n, r, a) {
        return e(t, n, r, a);
      }
      function Re() {}
      var Le = Ne,
        Fe = !1,
        je = !1;
      function ze() {
        (null === Pe && null === Ee) || (Re(), Ae());
      }
      function We(e, t) {
        var n = e.stateNode;
        if (null === n) return null;
        var r = na(n);
        if (null === r) return null;
        n = r[t];
        e: switch (t) {
          case "onClick":
          case "onClickCapture":
          case "onDoubleClick":
          case "onDoubleClickCapture":
          case "onMouseDown":
          case "onMouseDownCapture":
          case "onMouseMove":
          case "onMouseMoveCapture":
          case "onMouseUp":
          case "onMouseUpCapture":
          case "onMouseEnter":
            (r = !r.disabled) ||
              (r = !(
                "button" === (e = e.type) ||
                "input" === e ||
                "select" === e ||
                "textarea" === e
              )),
              (e = !r);
            break e;
          default:
            e = !1;
        }
        if (e) return null;
        if (n && "function" !== typeof n) throw Error(o(231, t, typeof n));
        return n;
      }
      var Ve = !1;
      if (f)
        try {
          var Ye = {};
          Object.defineProperty(Ye, "passive", {
            get: function () {
              Ve = !0;
            },
          }),
            window.addEventListener("test", Ye, Ye),
            window.removeEventListener("test", Ye, Ye);
        } catch (me) {
          Ve = !1;
        }
      function Be(e, t, n, r, a, i, o, l, s) {
        var u = Array.prototype.slice.call(arguments, 3);
        try {
          t.apply(n, u);
        } catch (c) {
          this.onError(c);
        }
      }
      var He = !1,
        Ue = null,
        $e = !1,
        Ge = null,
        qe = {
          onError: function (e) {
            (He = !0), (Ue = e);
          },
        };
      function Ke(e, t, n, r, a, i, o, l, s) {
        (He = !1), (Ue = null), Be.apply(qe, arguments);
      }
      function Qe(e) {
        var t = e,
          n = e;
        if (e.alternate) for (; t.return; ) t = t.return;
        else {
          e = t;
          do {
            0 !== (1026 & (t = e).flags) && (n = t.return), (e = t.return);
          } while (e);
        }
        return 3 === t.tag ? n : null;
      }
      function Ze(e) {
        if (13 === e.tag) {
          var t = e.memoizedState;
          if (
            (null === t && null !== (e = e.alternate) && (t = e.memoizedState),
            null !== t)
          )
            return t.dehydrated;
        }
        return null;
      }
      function Xe(e) {
        if (Qe(e) !== e) throw Error(o(188));
      }
      function Je(e) {
        if (
          !(e = (function (e) {
            var t = e.alternate;
            if (!t) {
              if (null === (t = Qe(e))) throw Error(o(188));
              return t !== e ? null : e;
            }
            for (var n = e, r = t; ; ) {
              var a = n.return;
              if (null === a) break;
              var i = a.alternate;
              if (null === i) {
                if (null !== (r = a.return)) {
                  n = r;
                  continue;
                }
                break;
              }
              if (a.child === i.child) {
                for (i = a.child; i; ) {
                  if (i === n) return Xe(a), e;
                  if (i === r) return Xe(a), t;
                  i = i.sibling;
                }
                throw Error(o(188));
              }
              if (n.return !== r.return) (n = a), (r = i);
              else {
                for (var l = !1, s = a.child; s; ) {
                  if (s === n) {
                    (l = !0), (n = a), (r = i);
                    break;
                  }
                  if (s === r) {
                    (l = !0), (r = a), (n = i);
                    break;
                  }
                  s = s.sibling;
                }
                if (!l) {
                  for (s = i.child; s; ) {
                    if (s === n) {
                      (l = !0), (n = i), (r = a);
                      break;
                    }
                    if (s === r) {
                      (l = !0), (r = i), (n = a);
                      break;
                    }
                    s = s.sibling;
                  }
                  if (!l) throw Error(o(189));
                }
              }
              if (n.alternate !== r) throw Error(o(190));
            }
            if (3 !== n.tag) throw Error(o(188));
            return n.stateNode.current === n ? e : t;
          })(e))
        )
          return null;
        for (var t = e; ; ) {
          if (5 === t.tag || 6 === t.tag) return t;
          if (t.child) (t.child.return = t), (t = t.child);
          else {
            if (t === e) break;
            for (; !t.sibling; ) {
              if (!t.return || t.return === e) return null;
              t = t.return;
            }
            (t.sibling.return = t.return), (t = t.sibling);
          }
        }
        return null;
      }
      function et(e, t) {
        for (var n = e.alternate; null !== t; ) {
          if (t === e || t === n) return !0;
          t = t.return;
        }
        return !1;
      }
      var tt,
        nt,
        rt,
        at,
        it = !1,
        ot = [],
        lt = null,
        st = null,
        ut = null,
        ct = new Map(),
        ft = new Map(),
        dt = [],
        ht = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(
          " "
        );
      function pt(e, t, n, r, a) {
        return {
          blockedOn: e,
          domEventName: t,
          eventSystemFlags: 16 | n,
          nativeEvent: a,
          targetContainers: [r],
        };
      }
      function gt(e, t) {
        switch (e) {
          case "focusin":
          case "focusout":
            lt = null;
            break;
          case "dragenter":
          case "dragleave":
            st = null;
            break;
          case "mouseover":
          case "mouseout":
            ut = null;
            break;
          case "pointerover":
          case "pointerout":
            ct.delete(t.pointerId);
            break;
          case "gotpointercapture":
          case "lostpointercapture":
            ft.delete(t.pointerId);
        }
      }
      function mt(e, t, n, r, a, i) {
        return null === e || e.nativeEvent !== i
          ? ((e = pt(t, n, r, a, i)),
            null !== t && null !== (t = ea(t)) && nt(t),
            e)
          : ((e.eventSystemFlags |= r),
            (t = e.targetContainers),
            null !== a && -1 === t.indexOf(a) && t.push(a),
            e);
      }
      function vt(e) {
        var t = Jr(e.target);
        if (null !== t) {
          var n = Qe(t);
          if (null !== n)
            if (13 === (t = n.tag)) {
              if (null !== (t = Ze(n)))
                return (
                  (e.blockedOn = t),
                  void at(e.lanePriority, function () {
                    i.unstable_runWithPriority(e.priority, function () {
                      rt(n);
                    });
                  })
                );
            } else if (3 === t && n.stateNode.hydrate)
              return void (e.blockedOn =
                3 === n.tag ? n.stateNode.containerInfo : null);
        }
        e.blockedOn = null;
      }
      function yt(e) {
        if (null !== e.blockedOn) return !1;
        for (var t = e.targetContainers; 0 < t.length; ) {
          var n = Jt(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
          if (null !== n)
            return null !== (t = ea(n)) && nt(t), (e.blockedOn = n), !1;
          t.shift();
        }
        return !0;
      }
      function bt(e, t, n) {
        yt(e) && n.delete(t);
      }
      function xt() {
        for (it = !1; 0 < ot.length; ) {
          var e = ot[0];
          if (null !== e.blockedOn) {
            null !== (e = ea(e.blockedOn)) && tt(e);
            break;
          }
          for (var t = e.targetContainers; 0 < t.length; ) {
            var n = Jt(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
            if (null !== n) {
              e.blockedOn = n;
              break;
            }
            t.shift();
          }
          null === e.blockedOn && ot.shift();
        }
        null !== lt && yt(lt) && (lt = null),
          null !== st && yt(st) && (st = null),
          null !== ut && yt(ut) && (ut = null),
          ct.forEach(bt),
          ft.forEach(bt);
      }
      function _t(e, t) {
        e.blockedOn === t &&
          ((e.blockedOn = null),
          it ||
            ((it = !0),
            i.unstable_scheduleCallback(i.unstable_NormalPriority, xt)));
      }
      function wt(e) {
        function t(t) {
          return _t(t, e);
        }
        if (0 < ot.length) {
          _t(ot[0], e);
          for (var n = 1; n < ot.length; n++) {
            var r = ot[n];
            r.blockedOn === e && (r.blockedOn = null);
          }
        }
        for (
          null !== lt && _t(lt, e),
            null !== st && _t(st, e),
            null !== ut && _t(ut, e),
            ct.forEach(t),
            ft.forEach(t),
            n = 0;
          n < dt.length;
          n++
        )
          (r = dt[n]).blockedOn === e && (r.blockedOn = null);
        for (; 0 < dt.length && null === (n = dt[0]).blockedOn; )
          vt(n), null === n.blockedOn && dt.shift();
      }
      function kt(e, t) {
        var n = {};
        return (
          (n[e.toLowerCase()] = t.toLowerCase()),
          (n["Webkit" + e] = "webkit" + t),
          (n["Moz" + e] = "moz" + t),
          n
        );
      }
      var St = {
          animationend: kt("Animation", "AnimationEnd"),
          animationiteration: kt("Animation", "AnimationIteration"),
          animationstart: kt("Animation", "AnimationStart"),
          transitionend: kt("Transition", "TransitionEnd"),
        },
        Ct = {},
        Mt = {};
      function Ot(e) {
        if (Ct[e]) return Ct[e];
        if (!St[e]) return e;
        var t,
          n = St[e];
        for (t in n) if (n.hasOwnProperty(t) && t in Mt) return (Ct[e] = n[t]);
        return e;
      }
      f &&
        ((Mt = document.createElement("div").style),
        "AnimationEvent" in window ||
          (delete St.animationend.animation,
          delete St.animationiteration.animation,
          delete St.animationstart.animation),
        "TransitionEvent" in window || delete St.transitionend.transition);
      var Pt = Ot("animationend"),
        Et = Ot("animationiteration"),
        Dt = Ot("animationstart"),
        Tt = Ot("transitionend"),
        At = new Map(),
        Nt = new Map(),
        It = [
          "abort",
          "abort",
          Pt,
          "animationEnd",
          Et,
          "animationIteration",
          Dt,
          "animationStart",
          "canplay",
          "canPlay",
          "canplaythrough",
          "canPlayThrough",
          "durationchange",
          "durationChange",
          "emptied",
          "emptied",
          "encrypted",
          "encrypted",
          "ended",
          "ended",
          "error",
          "error",
          "gotpointercapture",
          "gotPointerCapture",
          "load",
          "load",
          "loadeddata",
          "loadedData",
          "loadedmetadata",
          "loadedMetadata",
          "loadstart",
          "loadStart",
          "lostpointercapture",
          "lostPointerCapture",
          "playing",
          "playing",
          "progress",
          "progress",
          "seeking",
          "seeking",
          "stalled",
          "stalled",
          "suspend",
          "suspend",
          "timeupdate",
          "timeUpdate",
          Tt,
          "transitionEnd",
          "waiting",
          "waiting",
        ];
      function Rt(e, t) {
        for (var n = 0; n < e.length; n += 2) {
          var r = e[n],
            a = e[n + 1];
          (a = "on" + (a[0].toUpperCase() + a.slice(1))),
            Nt.set(r, t),
            At.set(r, a),
            u(a, [r]);
        }
      }
      (0, i.unstable_now)();
      var Lt = 8;
      function Ft(e) {
        if (0 !== (1 & e)) return (Lt = 15), 1;
        if (0 !== (2 & e)) return (Lt = 14), 2;
        if (0 !== (4 & e)) return (Lt = 13), 4;
        var t = 24 & e;
        return 0 !== t
          ? ((Lt = 12), t)
          : 0 !== (32 & e)
          ? ((Lt = 11), 32)
          : 0 !== (t = 192 & e)
          ? ((Lt = 10), t)
          : 0 !== (256 & e)
          ? ((Lt = 9), 256)
          : 0 !== (t = 3584 & e)
          ? ((Lt = 8), t)
          : 0 !== (4096 & e)
          ? ((Lt = 7), 4096)
          : 0 !== (t = 4186112 & e)
          ? ((Lt = 6), t)
          : 0 !== (t = 62914560 & e)
          ? ((Lt = 5), t)
          : 67108864 & e
          ? ((Lt = 4), 67108864)
          : 0 !== (134217728 & e)
          ? ((Lt = 3), 134217728)
          : 0 !== (t = 805306368 & e)
          ? ((Lt = 2), t)
          : 0 !== (1073741824 & e)
          ? ((Lt = 1), 1073741824)
          : ((Lt = 8), e);
      }
      function jt(e, t) {
        var n = e.pendingLanes;
        if (0 === n) return (Lt = 0);
        var r = 0,
          a = 0,
          i = e.expiredLanes,
          o = e.suspendedLanes,
          l = e.pingedLanes;
        if (0 !== i) (r = i), (a = Lt = 15);
        else if (0 !== (i = 134217727 & n)) {
          var s = i & ~o;
          0 !== s
            ? ((r = Ft(s)), (a = Lt))
            : 0 !== (l &= i) && ((r = Ft(l)), (a = Lt));
        } else
          0 !== (i = n & ~o)
            ? ((r = Ft(i)), (a = Lt))
            : 0 !== l && ((r = Ft(l)), (a = Lt));
        if (0 === r) return 0;
        if (
          ((r = n & (((0 > (r = 31 - Ht(r)) ? 0 : 1 << r) << 1) - 1)),
          0 !== t && t !== r && 0 === (t & o))
        ) {
          if ((Ft(t), a <= Lt)) return t;
          Lt = a;
        }
        if (0 !== (t = e.entangledLanes))
          for (e = e.entanglements, t &= r; 0 < t; )
            (a = 1 << (n = 31 - Ht(t))), (r |= e[n]), (t &= ~a);
        return r;
      }
      function zt(e) {
        return 0 !== (e = -1073741825 & e.pendingLanes)
          ? e
          : 1073741824 & e
          ? 1073741824
          : 0;
      }
      function Wt(e, t) {
        switch (e) {
          case 15:
            return 1;
          case 14:
            return 2;
          case 12:
            return 0 === (e = Vt(24 & ~t)) ? Wt(10, t) : e;
          case 10:
            return 0 === (e = Vt(192 & ~t)) ? Wt(8, t) : e;
          case 8:
            return (
              0 === (e = Vt(3584 & ~t)) &&
                0 === (e = Vt(4186112 & ~t)) &&
                (e = 512),
              e
            );
          case 2:
            return 0 === (t = Vt(805306368 & ~t)) && (t = 268435456), t;
        }
        throw Error(o(358, e));
      }
      function Vt(e) {
        return e & -e;
      }
      function Yt(e) {
        for (var t = [], n = 0; 31 > n; n++) t.push(e);
        return t;
      }
      function Bt(e, t, n) {
        e.pendingLanes |= t;
        var r = t - 1;
        (e.suspendedLanes &= r),
          (e.pingedLanes &= r),
          ((e = e.eventTimes)[(t = 31 - Ht(t))] = n);
      }
      var Ht = Math.clz32
          ? Math.clz32
          : function (e) {
              return 0 === e ? 32 : (31 - ((Ut(e) / $t) | 0)) | 0;
            },
        Ut = Math.log,
        $t = Math.LN2;
      var Gt = i.unstable_UserBlockingPriority,
        qt = i.unstable_runWithPriority,
        Kt = !0;
      function Qt(e, t, n, r) {
        Fe || Re();
        var a = Xt,
          i = Fe;
        Fe = !0;
        try {
          Ie(a, e, t, n, r);
        } finally {
          (Fe = i) || ze();
        }
      }
      function Zt(e, t, n, r) {
        qt(Gt, Xt.bind(null, e, t, n, r));
      }
      function Xt(e, t, n, r) {
        var a;
        if (Kt)
          if ((a = 0 === (4 & t)) && 0 < ot.length && -1 < ht.indexOf(e))
            (e = pt(null, e, t, n, r)), ot.push(e);
          else {
            var i = Jt(e, t, n, r);
            if (null === i) a && gt(e, r);
            else {
              if (a) {
                if (-1 < ht.indexOf(e))
                  return (e = pt(i, e, t, n, r)), void ot.push(e);
                if (
                  (function (e, t, n, r, a) {
                    switch (t) {
                      case "focusin":
                        return (lt = mt(lt, e, t, n, r, a)), !0;
                      case "dragenter":
                        return (st = mt(st, e, t, n, r, a)), !0;
                      case "mouseover":
                        return (ut = mt(ut, e, t, n, r, a)), !0;
                      case "pointerover":
                        var i = a.pointerId;
                        return (
                          ct.set(i, mt(ct.get(i) || null, e, t, n, r, a)), !0
                        );
                      case "gotpointercapture":
                        return (
                          (i = a.pointerId),
                          ft.set(i, mt(ft.get(i) || null, e, t, n, r, a)),
                          !0
                        );
                    }
                    return !1;
                  })(i, e, t, n, r)
                )
                  return;
                gt(e, r);
              }
              Ar(e, t, r, null, n);
            }
          }
      }
      function Jt(e, t, n, r) {
        var a = Me(r);
        if (null !== (a = Jr(a))) {
          var i = Qe(a);
          if (null === i) a = null;
          else {
            var o = i.tag;
            if (13 === o) {
              if (null !== (a = Ze(i))) return a;
              a = null;
            } else if (3 === o) {
              if (i.stateNode.hydrate)
                return 3 === i.tag ? i.stateNode.containerInfo : null;
              a = null;
            } else i !== a && (a = null);
          }
        }
        return Ar(e, t, r, a, n), null;
      }
      var en = null,
        tn = null,
        nn = null;
      function rn() {
        if (nn) return nn;
        var e,
          t,
          n = tn,
          r = n.length,
          a = "value" in en ? en.value : en.textContent,
          i = a.length;
        for (e = 0; e < r && n[e] === a[e]; e++);
        var o = r - e;
        for (t = 1; t <= o && n[r - t] === a[i - t]; t++);
        return (nn = a.slice(e, 1 < t ? 1 - t : void 0));
      }
      function an(e) {
        var t = e.keyCode;
        return (
          "charCode" in e
            ? 0 === (e = e.charCode) && 13 === t && (e = 13)
            : (e = t),
          10 === e && (e = 13),
          32 <= e || 13 === e ? e : 0
        );
      }
      function on() {
        return !0;
      }
      function ln() {
        return !1;
      }
      function sn(e) {
        function t(t, n, r, a, i) {
          for (var o in ((this._reactName = t),
          (this._targetInst = r),
          (this.type = n),
          (this.nativeEvent = a),
          (this.target = i),
          (this.currentTarget = null),
          e))
            e.hasOwnProperty(o) && ((t = e[o]), (this[o] = t ? t(a) : a[o]));
          return (
            (this.isDefaultPrevented = (
              null != a.defaultPrevented
                ? a.defaultPrevented
                : !1 === a.returnValue
            )
              ? on
              : ln),
            (this.isPropagationStopped = ln),
            this
          );
        }
        return (
          a(t.prototype, {
            preventDefault: function () {
              this.defaultPrevented = !0;
              var e = this.nativeEvent;
              e &&
                (e.preventDefault
                  ? e.preventDefault()
                  : "unknown" !== typeof e.returnValue && (e.returnValue = !1),
                (this.isDefaultPrevented = on));
            },
            stopPropagation: function () {
              var e = this.nativeEvent;
              e &&
                (e.stopPropagation
                  ? e.stopPropagation()
                  : "unknown" !== typeof e.cancelBubble &&
                    (e.cancelBubble = !0),
                (this.isPropagationStopped = on));
            },
            persist: function () {},
            isPersistent: on,
          }),
          t
        );
      }
      var un,
        cn,
        fn,
        dn = {
          eventPhase: 0,
          bubbles: 0,
          cancelable: 0,
          timeStamp: function (e) {
            return e.timeStamp || Date.now();
          },
          defaultPrevented: 0,
          isTrusted: 0,
        },
        hn = sn(dn),
        pn = a({}, dn, { view: 0, detail: 0 }),
        gn = sn(pn),
        mn = a({}, pn, {
          screenX: 0,
          screenY: 0,
          clientX: 0,
          clientY: 0,
          pageX: 0,
          pageY: 0,
          ctrlKey: 0,
          shiftKey: 0,
          altKey: 0,
          metaKey: 0,
          getModifierState: On,
          button: 0,
          buttons: 0,
          relatedTarget: function (e) {
            return void 0 === e.relatedTarget
              ? e.fromElement === e.srcElement
                ? e.toElement
                : e.fromElement
              : e.relatedTarget;
          },
          movementX: function (e) {
            return "movementX" in e
              ? e.movementX
              : (e !== fn &&
                  (fn && "mousemove" === e.type
                    ? ((un = e.screenX - fn.screenX),
                      (cn = e.screenY - fn.screenY))
                    : (cn = un = 0),
                  (fn = e)),
                un);
          },
          movementY: function (e) {
            return "movementY" in e ? e.movementY : cn;
          },
        }),
        vn = sn(mn),
        yn = sn(a({}, mn, { dataTransfer: 0 })),
        bn = sn(a({}, pn, { relatedTarget: 0 })),
        xn = sn(
          a({}, dn, { animationName: 0, elapsedTime: 0, pseudoElement: 0 })
        ),
        _n = sn(
          a({}, dn, {
            clipboardData: function (e) {
              return "clipboardData" in e
                ? e.clipboardData
                : window.clipboardData;
            },
          })
        ),
        wn = sn(a({}, dn, { data: 0 })),
        kn = {
          Esc: "Escape",
          Spacebar: " ",
          Left: "ArrowLeft",
          Up: "ArrowUp",
          Right: "ArrowRight",
          Down: "ArrowDown",
          Del: "Delete",
          Win: "OS",
          Menu: "ContextMenu",
          Apps: "ContextMenu",
          Scroll: "ScrollLock",
          MozPrintableKey: "Unidentified",
        },
        Sn = {
          8: "Backspace",
          9: "Tab",
          12: "Clear",
          13: "Enter",
          16: "Shift",
          17: "Control",
          18: "Alt",
          19: "Pause",
          20: "CapsLock",
          27: "Escape",
          32: " ",
          33: "PageUp",
          34: "PageDown",
          35: "End",
          36: "Home",
          37: "ArrowLeft",
          38: "ArrowUp",
          39: "ArrowRight",
          40: "ArrowDown",
          45: "Insert",
          46: "Delete",
          112: "F1",
          113: "F2",
          114: "F3",
          115: "F4",
          116: "F5",
          117: "F6",
          118: "F7",
          119: "F8",
          120: "F9",
          121: "F10",
          122: "F11",
          123: "F12",
          144: "NumLock",
          145: "ScrollLock",
          224: "Meta",
        },
        Cn = {
          Alt: "altKey",
          Control: "ctrlKey",
          Meta: "metaKey",
          Shift: "shiftKey",
        };
      function Mn(e) {
        var t = this.nativeEvent;
        return t.getModifierState
          ? t.getModifierState(e)
          : !!(e = Cn[e]) && !!t[e];
      }
      function On() {
        return Mn;
      }
      var Pn = sn(
          a({}, pn, {
            key: function (e) {
              if (e.key) {
                var t = kn[e.key] || e.key;
                if ("Unidentified" !== t) return t;
              }
              return "keypress" === e.type
                ? 13 === (e = an(e))
                  ? "Enter"
                  : String.fromCharCode(e)
                : "keydown" === e.type || "keyup" === e.type
                ? Sn[e.keyCode] || "Unidentified"
                : "";
            },
            code: 0,
            location: 0,
            ctrlKey: 0,
            shiftKey: 0,
            altKey: 0,
            metaKey: 0,
            repeat: 0,
            locale: 0,
            getModifierState: On,
            charCode: function (e) {
              return "keypress" === e.type ? an(e) : 0;
            },
            keyCode: function (e) {
              return "keydown" === e.type || "keyup" === e.type ? e.keyCode : 0;
            },
            which: function (e) {
              return "keypress" === e.type
                ? an(e)
                : "keydown" === e.type || "keyup" === e.type
                ? e.keyCode
                : 0;
            },
          })
        ),
        En = sn(
          a({}, mn, {
            pointerId: 0,
            width: 0,
            height: 0,
            pressure: 0,
            tangentialPressure: 0,
            tiltX: 0,
            tiltY: 0,
            twist: 0,
            pointerType: 0,
            isPrimary: 0,
          })
        ),
        Dn = sn(
          a({}, pn, {
            touches: 0,
            targetTouches: 0,
            changedTouches: 0,
            altKey: 0,
            metaKey: 0,
            ctrlKey: 0,
            shiftKey: 0,
            getModifierState: On,
          })
        ),
        Tn = sn(
          a({}, dn, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 })
        ),
        An = sn(
          a({}, mn, {
            deltaX: function (e) {
              return "deltaX" in e
                ? e.deltaX
                : "wheelDeltaX" in e
                ? -e.wheelDeltaX
                : 0;
            },
            deltaY: function (e) {
              return "deltaY" in e
                ? e.deltaY
                : "wheelDeltaY" in e
                ? -e.wheelDeltaY
                : "wheelDelta" in e
                ? -e.wheelDelta
                : 0;
            },
            deltaZ: 0,
            deltaMode: 0,
          })
        ),
        Nn = [9, 13, 27, 32],
        In = f && "CompositionEvent" in window,
        Rn = null;
      f && "documentMode" in document && (Rn = document.documentMode);
      var Ln = f && "TextEvent" in window && !Rn,
        Fn = f && (!In || (Rn && 8 < Rn && 11 >= Rn)),
        jn = String.fromCharCode(32),
        zn = !1;
      function Wn(e, t) {
        switch (e) {
          case "keyup":
            return -1 !== Nn.indexOf(t.keyCode);
          case "keydown":
            return 229 !== t.keyCode;
          case "keypress":
          case "mousedown":
          case "focusout":
            return !0;
          default:
            return !1;
        }
      }
      function Vn(e) {
        return "object" === typeof (e = e.detail) && "data" in e
          ? e.data
          : null;
      }
      var Yn = !1;
      var Bn = {
        color: !0,
        date: !0,
        datetime: !0,
        "datetime-local": !0,
        email: !0,
        month: !0,
        number: !0,
        password: !0,
        range: !0,
        search: !0,
        tel: !0,
        text: !0,
        time: !0,
        url: !0,
        week: !0,
      };
      function Hn(e) {
        var t = e && e.nodeName && e.nodeName.toLowerCase();
        return "input" === t ? !!Bn[e.type] : "textarea" === t;
      }
      function Un(e, t, n, r) {
        Te(r),
          0 < (t = Ir(t, "onChange")).length &&
            ((n = new hn("onChange", "change", null, n, r)),
            e.push({ event: n, listeners: t }));
      }
      var $n = null,
        Gn = null;
      function qn(e) {
        Mr(e, 0);
      }
      function Kn(e) {
        if (Z(ta(e))) return e;
      }
      function Qn(e, t) {
        if ("change" === e) return t;
      }
      var Zn = !1;
      if (f) {
        var Xn;
        if (f) {
          var Jn = "oninput" in document;
          if (!Jn) {
            var er = document.createElement("div");
            er.setAttribute("oninput", "return;"),
              (Jn = "function" === typeof er.oninput);
          }
          Xn = Jn;
        } else Xn = !1;
        Zn = Xn && (!document.documentMode || 9 < document.documentMode);
      }
      function tr() {
        $n && ($n.detachEvent("onpropertychange", nr), (Gn = $n = null));
      }
      function nr(e) {
        if ("value" === e.propertyName && Kn(Gn)) {
          var t = [];
          if ((Un(t, Gn, e, Me(e)), (e = qn), Fe)) e(t);
          else {
            Fe = !0;
            try {
              Ne(e, t);
            } finally {
              (Fe = !1), ze();
            }
          }
        }
      }
      function rr(e, t, n) {
        "focusin" === e
          ? (tr(), (Gn = n), ($n = t).attachEvent("onpropertychange", nr))
          : "focusout" === e && tr();
      }
      function ar(e) {
        if ("selectionchange" === e || "keyup" === e || "keydown" === e)
          return Kn(Gn);
      }
      function ir(e, t) {
        if ("click" === e) return Kn(t);
      }
      function or(e, t) {
        if ("input" === e || "change" === e) return Kn(t);
      }
      var lr =
          "function" === typeof Object.is
            ? Object.is
            : function (e, t) {
                return (
                  (e === t && (0 !== e || 1 / e === 1 / t)) ||
                  (e !== e && t !== t)
                );
              },
        sr = Object.prototype.hasOwnProperty;
      function ur(e, t) {
        if (lr(e, t)) return !0;
        if (
          "object" !== typeof e ||
          null === e ||
          "object" !== typeof t ||
          null === t
        )
          return !1;
        var n = Object.keys(e),
          r = Object.keys(t);
        if (n.length !== r.length) return !1;
        for (r = 0; r < n.length; r++)
          if (!sr.call(t, n[r]) || !lr(e[n[r]], t[n[r]])) return !1;
        return !0;
      }
      function cr(e) {
        for (; e && e.firstChild; ) e = e.firstChild;
        return e;
      }
      function fr(e, t) {
        var n,
          r = cr(e);
        for (e = 0; r; ) {
          if (3 === r.nodeType) {
            if (((n = e + r.textContent.length), e <= t && n >= t))
              return { node: r, offset: t - e };
            e = n;
          }
          e: {
            for (; r; ) {
              if (r.nextSibling) {
                r = r.nextSibling;
                break e;
              }
              r = r.parentNode;
            }
            r = void 0;
          }
          r = cr(r);
        }
      }
      function dr(e, t) {
        return (
          !(!e || !t) &&
          (e === t ||
            ((!e || 3 !== e.nodeType) &&
              (t && 3 === t.nodeType
                ? dr(e, t.parentNode)
                : "contains" in e
                ? e.contains(t)
                : !!e.compareDocumentPosition &&
                  !!(16 & e.compareDocumentPosition(t)))))
        );
      }
      function hr() {
        for (var e = window, t = X(); t instanceof e.HTMLIFrameElement; ) {
          try {
            var n = "string" === typeof t.contentWindow.location.href;
          } catch (r) {
            n = !1;
          }
          if (!n) break;
          t = X((e = t.contentWindow).document);
        }
        return t;
      }
      function pr(e) {
        var t = e && e.nodeName && e.nodeName.toLowerCase();
        return (
          t &&
          (("input" === t &&
            ("text" === e.type ||
              "search" === e.type ||
              "tel" === e.type ||
              "url" === e.type ||
              "password" === e.type)) ||
            "textarea" === t ||
            "true" === e.contentEditable)
        );
      }
      var gr = f && "documentMode" in document && 11 >= document.documentMode,
        mr = null,
        vr = null,
        yr = null,
        br = !1;
      function xr(e, t, n) {
        var r =
          n.window === n ? n.document : 9 === n.nodeType ? n : n.ownerDocument;
        br ||
          null == mr ||
          mr !== X(r) ||
          ("selectionStart" in (r = mr) && pr(r)
            ? (r = { start: r.selectionStart, end: r.selectionEnd })
            : (r = {
                anchorNode: (r = (
                  (r.ownerDocument && r.ownerDocument.defaultView) ||
                  window
                ).getSelection()).anchorNode,
                anchorOffset: r.anchorOffset,
                focusNode: r.focusNode,
                focusOffset: r.focusOffset,
              }),
          (yr && ur(yr, r)) ||
            ((yr = r),
            0 < (r = Ir(vr, "onSelect")).length &&
              ((t = new hn("onSelect", "select", null, t, n)),
              e.push({ event: t, listeners: r }),
              (t.target = mr))));
      }
      Rt(
        "cancel cancel click click close close contextmenu contextMenu copy copy cut cut auxclick auxClick dblclick doubleClick dragend dragEnd dragstart dragStart drop drop focusin focus focusout blur input input invalid invalid keydown keyDown keypress keyPress keyup keyUp mousedown mouseDown mouseup mouseUp paste paste pause pause play play pointercancel pointerCancel pointerdown pointerDown pointerup pointerUp ratechange rateChange reset reset seeked seeked submit submit touchcancel touchCancel touchend touchEnd touchstart touchStart volumechange volumeChange".split(
          " "
        ),
        0
      ),
        Rt(
          "drag drag dragenter dragEnter dragexit dragExit dragleave dragLeave dragover dragOver mousemove mouseMove mouseout mouseOut mouseover mouseOver pointermove pointerMove pointerout pointerOut pointerover pointerOver scroll scroll toggle toggle touchmove touchMove wheel wheel".split(
            " "
          ),
          1
        ),
        Rt(It, 2);
      for (
        var _r = "change selectionchange textInput compositionstart compositionend compositionupdate".split(
            " "
          ),
          wr = 0;
        wr < _r.length;
        wr++
      )
        Nt.set(_r[wr], 0);
      c("onMouseEnter", ["mouseout", "mouseover"]),
        c("onMouseLeave", ["mouseout", "mouseover"]),
        c("onPointerEnter", ["pointerout", "pointerover"]),
        c("onPointerLeave", ["pointerout", "pointerover"]),
        u(
          "onChange",
          "change click focusin focusout input keydown keyup selectionchange".split(
            " "
          )
        ),
        u(
          "onSelect",
          "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
            " "
          )
        ),
        u("onBeforeInput", [
          "compositionend",
          "keypress",
          "textInput",
          "paste",
        ]),
        u(
          "onCompositionEnd",
          "compositionend focusout keydown keypress keyup mousedown".split(" ")
        ),
        u(
          "onCompositionStart",
          "compositionstart focusout keydown keypress keyup mousedown".split(
            " "
          )
        ),
        u(
          "onCompositionUpdate",
          "compositionupdate focusout keydown keypress keyup mousedown".split(
            " "
          )
        );
      var kr = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange seeked seeking stalled suspend timeupdate volumechange waiting".split(
          " "
        ),
        Sr = new Set(
          "cancel close invalid load scroll toggle".split(" ").concat(kr)
        );
      function Cr(e, t, n) {
        var r = e.type || "unknown-event";
        (e.currentTarget = n),
          (function (e, t, n, r, a, i, l, s, u) {
            if ((Ke.apply(this, arguments), He)) {
              if (!He) throw Error(o(198));
              var c = Ue;
              (He = !1), (Ue = null), $e || (($e = !0), (Ge = c));
            }
          })(r, t, void 0, e),
          (e.currentTarget = null);
      }
      function Mr(e, t) {
        t = 0 !== (4 & t);
        for (var n = 0; n < e.length; n++) {
          var r = e[n],
            a = r.event;
          r = r.listeners;
          e: {
            var i = void 0;
            if (t)
              for (var o = r.length - 1; 0 <= o; o--) {
                var l = r[o],
                  s = l.instance,
                  u = l.currentTarget;
                if (((l = l.listener), s !== i && a.isPropagationStopped()))
                  break e;
                Cr(a, l, u), (i = s);
              }
            else
              for (o = 0; o < r.length; o++) {
                if (
                  ((s = (l = r[o]).instance),
                  (u = l.currentTarget),
                  (l = l.listener),
                  s !== i && a.isPropagationStopped())
                )
                  break e;
                Cr(a, l, u), (i = s);
              }
          }
        }
        if ($e) throw ((e = Ge), ($e = !1), (Ge = null), e);
      }
      function Or(e, t) {
        var n = ra(t),
          r = e + "__bubble";
        n.has(r) || (Tr(t, e, 2, !1), n.add(r));
      }
      var Pr = "_reactListening" + Math.random().toString(36).slice(2);
      function Er(e) {
        e[Pr] ||
          ((e[Pr] = !0),
          l.forEach(function (t) {
            Sr.has(t) || Dr(t, !1, e, null), Dr(t, !0, e, null);
          }));
      }
      function Dr(e, t, n, r) {
        var a =
            4 < arguments.length && void 0 !== arguments[4] ? arguments[4] : 0,
          i = n;
        if (
          ("selectionchange" === e && 9 !== n.nodeType && (i = n.ownerDocument),
          null !== r && !t && Sr.has(e))
        ) {
          if ("scroll" !== e) return;
          (a |= 2), (i = r);
        }
        var o = ra(i),
          l = e + "__" + (t ? "capture" : "bubble");
        o.has(l) || (t && (a |= 4), Tr(i, e, a, t), o.add(l));
      }
      function Tr(e, t, n, r) {
        var a = Nt.get(t);
        switch (void 0 === a ? 2 : a) {
          case 0:
            a = Qt;
            break;
          case 1:
            a = Zt;
            break;
          default:
            a = Xt;
        }
        (n = a.bind(null, t, n, e)),
          (a = void 0),
          !Ve ||
            ("touchstart" !== t && "touchmove" !== t && "wheel" !== t) ||
            (a = !0),
          r
            ? void 0 !== a
              ? e.addEventListener(t, n, { capture: !0, passive: a })
              : e.addEventListener(t, n, !0)
            : void 0 !== a
            ? e.addEventListener(t, n, { passive: a })
            : e.addEventListener(t, n, !1);
      }
      function Ar(e, t, n, r, a) {
        var i = r;
        if (0 === (1 & t) && 0 === (2 & t) && null !== r)
          e: for (;;) {
            if (null === r) return;
            var o = r.tag;
            if (3 === o || 4 === o) {
              var l = r.stateNode.containerInfo;
              if (l === a || (8 === l.nodeType && l.parentNode === a)) break;
              if (4 === o)
                for (o = r.return; null !== o; ) {
                  var s = o.tag;
                  if (
                    (3 === s || 4 === s) &&
                    ((s = o.stateNode.containerInfo) === a ||
                      (8 === s.nodeType && s.parentNode === a))
                  )
                    return;
                  o = o.return;
                }
              for (; null !== l; ) {
                if (null === (o = Jr(l))) return;
                if (5 === (s = o.tag) || 6 === s) {
                  r = i = o;
                  continue e;
                }
                l = l.parentNode;
              }
            }
            r = r.return;
          }
        !(function (e, t, n) {
          if (je) return e(t, n);
          je = !0;
          try {
            Le(e, t, n);
          } finally {
            (je = !1), ze();
          }
        })(function () {
          var r = i,
            a = Me(n),
            o = [];
          e: {
            var l = At.get(e);
            if (void 0 !== l) {
              var s = hn,
                u = e;
              switch (e) {
                case "keypress":
                  if (0 === an(n)) break e;
                case "keydown":
                case "keyup":
                  s = Pn;
                  break;
                case "focusin":
                  (u = "focus"), (s = bn);
                  break;
                case "focusout":
                  (u = "blur"), (s = bn);
                  break;
                case "beforeblur":
                case "afterblur":
                  s = bn;
                  break;
                case "click":
                  if (2 === n.button) break e;
                case "auxclick":
                case "dblclick":
                case "mousedown":
                case "mousemove":
                case "mouseup":
                case "mouseout":
                case "mouseover":
                case "contextmenu":
                  s = vn;
                  break;
                case "drag":
                case "dragend":
                case "dragenter":
                case "dragexit":
                case "dragleave":
                case "dragover":
                case "dragstart":
                case "drop":
                  s = yn;
                  break;
                case "touchcancel":
                case "touchend":
                case "touchmove":
                case "touchstart":
                  s = Dn;
                  break;
                case Pt:
                case Et:
                case Dt:
                  s = xn;
                  break;
                case Tt:
                  s = Tn;
                  break;
                case "scroll":
                  s = gn;
                  break;
                case "wheel":
                  s = An;
                  break;
                case "copy":
                case "cut":
                case "paste":
                  s = _n;
                  break;
                case "gotpointercapture":
                case "lostpointercapture":
                case "pointercancel":
                case "pointerdown":
                case "pointermove":
                case "pointerout":
                case "pointerover":
                case "pointerup":
                  s = En;
              }
              var c = 0 !== (4 & t),
                f = !c && "scroll" === e,
                d = c ? (null !== l ? l + "Capture" : null) : l;
              c = [];
              for (var h, p = r; null !== p; ) {
                var g = (h = p).stateNode;
                if (
                  (5 === h.tag &&
                    null !== g &&
                    ((h = g),
                    null !== d &&
                      null != (g = We(p, d)) &&
                      c.push(Nr(p, g, h))),
                  f)
                )
                  break;
                p = p.return;
              }
              0 < c.length &&
                ((l = new s(l, u, null, n, a)),
                o.push({ event: l, listeners: c }));
            }
          }
          if (0 === (7 & t)) {
            if (
              ((s = "mouseout" === e || "pointerout" === e),
              (!(l = "mouseover" === e || "pointerover" === e) ||
                0 !== (16 & t) ||
                !(u = n.relatedTarget || n.fromElement) ||
                (!Jr(u) && !u[Zr])) &&
                (s || l) &&
                ((l =
                  a.window === a
                    ? a
                    : (l = a.ownerDocument)
                    ? l.defaultView || l.parentWindow
                    : window),
                s
                  ? ((s = r),
                    null !==
                      (u = (u = n.relatedTarget || n.toElement)
                        ? Jr(u)
                        : null) &&
                      (u !== (f = Qe(u)) || (5 !== u.tag && 6 !== u.tag)) &&
                      (u = null))
                  : ((s = null), (u = r)),
                s !== u))
            ) {
              if (
                ((c = vn),
                (g = "onMouseLeave"),
                (d = "onMouseEnter"),
                (p = "mouse"),
                ("pointerout" !== e && "pointerover" !== e) ||
                  ((c = En),
                  (g = "onPointerLeave"),
                  (d = "onPointerEnter"),
                  (p = "pointer")),
                (f = null == s ? l : ta(s)),
                (h = null == u ? l : ta(u)),
                ((l = new c(g, p + "leave", s, n, a)).target = f),
                (l.relatedTarget = h),
                (g = null),
                Jr(a) === r &&
                  (((c = new c(d, p + "enter", u, n, a)).target = h),
                  (c.relatedTarget = f),
                  (g = c)),
                (f = g),
                s && u)
              )
                e: {
                  for (d = u, p = 0, h = c = s; h; h = Rr(h)) p++;
                  for (h = 0, g = d; g; g = Rr(g)) h++;
                  for (; 0 < p - h; ) (c = Rr(c)), p--;
                  for (; 0 < h - p; ) (d = Rr(d)), h--;
                  for (; p--; ) {
                    if (c === d || (null !== d && c === d.alternate)) break e;
                    (c = Rr(c)), (d = Rr(d));
                  }
                  c = null;
                }
              else c = null;
              null !== s && Lr(o, l, s, c, !1),
                null !== u && null !== f && Lr(o, f, u, c, !0);
            }
            if (
              "select" ===
                (s =
                  (l = r ? ta(r) : window).nodeName &&
                  l.nodeName.toLowerCase()) ||
              ("input" === s && "file" === l.type)
            )
              var m = Qn;
            else if (Hn(l))
              if (Zn) m = or;
              else {
                m = ar;
                var v = rr;
              }
            else
              (s = l.nodeName) &&
                "input" === s.toLowerCase() &&
                ("checkbox" === l.type || "radio" === l.type) &&
                (m = ir);
            switch (
              (m && (m = m(e, r))
                ? Un(o, m, n, a)
                : (v && v(e, l, r),
                  "focusout" === e &&
                    (v = l._wrapperState) &&
                    v.controlled &&
                    "number" === l.type &&
                    ae(l, "number", l.value)),
              (v = r ? ta(r) : window),
              e)
            ) {
              case "focusin":
                (Hn(v) || "true" === v.contentEditable) &&
                  ((mr = v), (vr = r), (yr = null));
                break;
              case "focusout":
                yr = vr = mr = null;
                break;
              case "mousedown":
                br = !0;
                break;
              case "contextmenu":
              case "mouseup":
              case "dragend":
                (br = !1), xr(o, n, a);
                break;
              case "selectionchange":
                if (gr) break;
              case "keydown":
              case "keyup":
                xr(o, n, a);
            }
            var y;
            if (In)
              e: {
                switch (e) {
                  case "compositionstart":
                    var b = "onCompositionStart";
                    break e;
                  case "compositionend":
                    b = "onCompositionEnd";
                    break e;
                  case "compositionupdate":
                    b = "onCompositionUpdate";
                    break e;
                }
                b = void 0;
              }
            else
              Yn
                ? Wn(e, n) && (b = "onCompositionEnd")
                : "keydown" === e &&
                  229 === n.keyCode &&
                  (b = "onCompositionStart");
            b &&
              (Fn &&
                "ko" !== n.locale &&
                (Yn || "onCompositionStart" !== b
                  ? "onCompositionEnd" === b && Yn && (y = rn())
                  : ((tn = "value" in (en = a) ? en.value : en.textContent),
                    (Yn = !0))),
              0 < (v = Ir(r, b)).length &&
                ((b = new wn(b, e, null, n, a)),
                o.push({ event: b, listeners: v }),
                y ? (b.data = y) : null !== (y = Vn(n)) && (b.data = y))),
              (y = Ln
                ? (function (e, t) {
                    switch (e) {
                      case "compositionend":
                        return Vn(t);
                      case "keypress":
                        return 32 !== t.which ? null : ((zn = !0), jn);
                      case "textInput":
                        return (e = t.data) === jn && zn ? null : e;
                      default:
                        return null;
                    }
                  })(e, n)
                : (function (e, t) {
                    if (Yn)
                      return "compositionend" === e || (!In && Wn(e, t))
                        ? ((e = rn()), (nn = tn = en = null), (Yn = !1), e)
                        : null;
                    switch (e) {
                      case "paste":
                        return null;
                      case "keypress":
                        if (
                          !(t.ctrlKey || t.altKey || t.metaKey) ||
                          (t.ctrlKey && t.altKey)
                        ) {
                          if (t.char && 1 < t.char.length) return t.char;
                          if (t.which) return String.fromCharCode(t.which);
                        }
                        return null;
                      case "compositionend":
                        return Fn && "ko" !== t.locale ? null : t.data;
                      default:
                        return null;
                    }
                  })(e, n)) &&
                0 < (r = Ir(r, "onBeforeInput")).length &&
                ((a = new wn("onBeforeInput", "beforeinput", null, n, a)),
                o.push({ event: a, listeners: r }),
                (a.data = y));
          }
          Mr(o, t);
        });
      }
      function Nr(e, t, n) {
        return { instance: e, listener: t, currentTarget: n };
      }
      function Ir(e, t) {
        for (var n = t + "Capture", r = []; null !== e; ) {
          var a = e,
            i = a.stateNode;
          5 === a.tag &&
            null !== i &&
            ((a = i),
            null != (i = We(e, n)) && r.unshift(Nr(e, i, a)),
            null != (i = We(e, t)) && r.push(Nr(e, i, a))),
            (e = e.return);
        }
        return r;
      }
      function Rr(e) {
        if (null === e) return null;
        do {
          e = e.return;
        } while (e && 5 !== e.tag);
        return e || null;
      }
      function Lr(e, t, n, r, a) {
        for (var i = t._reactName, o = []; null !== n && n !== r; ) {
          var l = n,
            s = l.alternate,
            u = l.stateNode;
          if (null !== s && s === r) break;
          5 === l.tag &&
            null !== u &&
            ((l = u),
            a
              ? null != (s = We(n, i)) && o.unshift(Nr(n, s, l))
              : a || (null != (s = We(n, i)) && o.push(Nr(n, s, l)))),
            (n = n.return);
        }
        0 !== o.length && e.push({ event: t, listeners: o });
      }
      function Fr() {}
      var jr = null,
        zr = null;
      function Wr(e, t) {
        switch (e) {
          case "button":
          case "input":
          case "select":
          case "textarea":
            return !!t.autoFocus;
        }
        return !1;
      }
      function Vr(e, t) {
        return (
          "textarea" === e ||
          "option" === e ||
          "noscript" === e ||
          "string" === typeof t.children ||
          "number" === typeof t.children ||
          ("object" === typeof t.dangerouslySetInnerHTML &&
            null !== t.dangerouslySetInnerHTML &&
            null != t.dangerouslySetInnerHTML.__html)
        );
      }
      var Yr = "function" === typeof setTimeout ? setTimeout : void 0,
        Br = "function" === typeof clearTimeout ? clearTimeout : void 0;
      function Hr(e) {
        1 === e.nodeType
          ? (e.textContent = "")
          : 9 === e.nodeType && null != (e = e.body) && (e.textContent = "");
      }
      function Ur(e) {
        for (; null != e; e = e.nextSibling) {
          var t = e.nodeType;
          if (1 === t || 3 === t) break;
        }
        return e;
      }
      function $r(e) {
        e = e.previousSibling;
        for (var t = 0; e; ) {
          if (8 === e.nodeType) {
            var n = e.data;
            if ("$" === n || "$!" === n || "$?" === n) {
              if (0 === t) return e;
              t--;
            } else "/$" === n && t++;
          }
          e = e.previousSibling;
        }
        return null;
      }
      var Gr = 0;
      var qr = Math.random().toString(36).slice(2),
        Kr = "__reactFiber$" + qr,
        Qr = "__reactProps$" + qr,
        Zr = "__reactContainer$" + qr,
        Xr = "__reactEvents$" + qr;
      function Jr(e) {
        var t = e[Kr];
        if (t) return t;
        for (var n = e.parentNode; n; ) {
          if ((t = n[Zr] || n[Kr])) {
            if (
              ((n = t.alternate),
              null !== t.child || (null !== n && null !== n.child))
            )
              for (e = $r(e); null !== e; ) {
                if ((n = e[Kr])) return n;
                e = $r(e);
              }
            return t;
          }
          n = (e = n).parentNode;
        }
        return null;
      }
      function ea(e) {
        return !(e = e[Kr] || e[Zr]) ||
          (5 !== e.tag && 6 !== e.tag && 13 !== e.tag && 3 !== e.tag)
          ? null
          : e;
      }
      function ta(e) {
        if (5 === e.tag || 6 === e.tag) return e.stateNode;
        throw Error(o(33));
      }
      function na(e) {
        return e[Qr] || null;
      }
      function ra(e) {
        var t = e[Xr];
        return void 0 === t && (t = e[Xr] = new Set()), t;
      }
      var aa = [],
        ia = -1;
      function oa(e) {
        return { current: e };
      }
      function la(e) {
        0 > ia || ((e.current = aa[ia]), (aa[ia] = null), ia--);
      }
      function sa(e, t) {
        ia++, (aa[ia] = e.current), (e.current = t);
      }
      var ua = {},
        ca = oa(ua),
        fa = oa(!1),
        da = ua;
      function ha(e, t) {
        var n = e.type.contextTypes;
        if (!n) return ua;
        var r = e.stateNode;
        if (r && r.__reactInternalMemoizedUnmaskedChildContext === t)
          return r.__reactInternalMemoizedMaskedChildContext;
        var a,
          i = {};
        for (a in n) i[a] = t[a];
        return (
          r &&
            (((e =
              e.stateNode).__reactInternalMemoizedUnmaskedChildContext = t),
            (e.__reactInternalMemoizedMaskedChildContext = i)),
          i
        );
      }
      function pa(e) {
        return null !== (e = e.childContextTypes) && void 0 !== e;
      }
      function ga() {
        la(fa), la(ca);
      }
      function ma(e, t, n) {
        if (ca.current !== ua) throw Error(o(168));
        sa(ca, t), sa(fa, n);
      }
      function va(e, t, n) {
        var r = e.stateNode;
        if (
          ((e = t.childContextTypes), "function" !== typeof r.getChildContext)
        )
          return n;
        for (var i in (r = r.getChildContext()))
          if (!(i in e)) throw Error(o(108, G(t) || "Unknown", i));
        return a({}, n, r);
      }
      function ya(e) {
        return (
          (e =
            ((e = e.stateNode) &&
              e.__reactInternalMemoizedMergedChildContext) ||
            ua),
          (da = ca.current),
          sa(ca, e),
          sa(fa, fa.current),
          !0
        );
      }
      function ba(e, t, n) {
        var r = e.stateNode;
        if (!r) throw Error(o(169));
        n
          ? ((e = va(e, t, da)),
            (r.__reactInternalMemoizedMergedChildContext = e),
            la(fa),
            la(ca),
            sa(ca, e))
          : la(fa),
          sa(fa, n);
      }
      var xa = null,
        _a = null,
        wa = i.unstable_runWithPriority,
        ka = i.unstable_scheduleCallback,
        Sa = i.unstable_cancelCallback,
        Ca = i.unstable_shouldYield,
        Ma = i.unstable_requestPaint,
        Oa = i.unstable_now,
        Pa = i.unstable_getCurrentPriorityLevel,
        Ea = i.unstable_ImmediatePriority,
        Da = i.unstable_UserBlockingPriority,
        Ta = i.unstable_NormalPriority,
        Aa = i.unstable_LowPriority,
        Na = i.unstable_IdlePriority,
        Ia = {},
        Ra = void 0 !== Ma ? Ma : function () {},
        La = null,
        Fa = null,
        ja = !1,
        za = Oa(),
        Wa =
          1e4 > za
            ? Oa
            : function () {
                return Oa() - za;
              };
      function Va() {
        switch (Pa()) {
          case Ea:
            return 99;
          case Da:
            return 98;
          case Ta:
            return 97;
          case Aa:
            return 96;
          case Na:
            return 95;
          default:
            throw Error(o(332));
        }
      }
      function Ya(e) {
        switch (e) {
          case 99:
            return Ea;
          case 98:
            return Da;
          case 97:
            return Ta;
          case 96:
            return Aa;
          case 95:
            return Na;
          default:
            throw Error(o(332));
        }
      }
      function Ba(e, t) {
        return (e = Ya(e)), wa(e, t);
      }
      function Ha(e, t, n) {
        return (e = Ya(e)), ka(e, t, n);
      }
      function Ua() {
        if (null !== Fa) {
          var e = Fa;
          (Fa = null), Sa(e);
        }
        $a();
      }
      function $a() {
        if (!ja && null !== La) {
          ja = !0;
          var e = 0;
          try {
            var t = La;
            Ba(99, function () {
              for (; e < t.length; e++) {
                var n = t[e];
                do {
                  n = n(!0);
                } while (null !== n);
              }
            }),
              (La = null);
          } catch (n) {
            throw (null !== La && (La = La.slice(e + 1)), ka(Ea, Ua), n);
          } finally {
            ja = !1;
          }
        }
      }
      var Ga = _.ReactCurrentBatchConfig;
      function qa(e, t) {
        if (e && e.defaultProps) {
          for (var n in ((t = a({}, t)), (e = e.defaultProps)))
            void 0 === t[n] && (t[n] = e[n]);
          return t;
        }
        return t;
      }
      var Ka = oa(null),
        Qa = null,
        Za = null,
        Xa = null;
      function Ja() {
        Xa = Za = Qa = null;
      }
      function ei(e) {
        var t = Ka.current;
        la(Ka), (e.type._context._currentValue = t);
      }
      function ti(e, t) {
        for (; null !== e; ) {
          var n = e.alternate;
          if ((e.childLanes & t) === t) {
            if (null === n || (n.childLanes & t) === t) break;
            n.childLanes |= t;
          } else (e.childLanes |= t), null !== n && (n.childLanes |= t);
          e = e.return;
        }
      }
      function ni(e, t) {
        (Qa = e),
          (Xa = Za = null),
          null !== (e = e.dependencies) &&
            null !== e.firstContext &&
            (0 !== (e.lanes & t) && (Io = !0), (e.firstContext = null));
      }
      function ri(e, t) {
        if (Xa !== e && !1 !== t && 0 !== t)
          if (
            (("number" === typeof t && 1073741823 !== t) ||
              ((Xa = e), (t = 1073741823)),
            (t = { context: e, observedBits: t, next: null }),
            null === Za)
          ) {
            if (null === Qa) throw Error(o(308));
            (Za = t),
              (Qa.dependencies = {
                lanes: 0,
                firstContext: t,
                responders: null,
              });
          } else Za = Za.next = t;
        return e._currentValue;
      }
      var ai = !1;
      function ii(e) {
        e.updateQueue = {
          baseState: e.memoizedState,
          firstBaseUpdate: null,
          lastBaseUpdate: null,
          shared: { pending: null },
          effects: null,
        };
      }
      function oi(e, t) {
        (e = e.updateQueue),
          t.updateQueue === e &&
            (t.updateQueue = {
              baseState: e.baseState,
              firstBaseUpdate: e.firstBaseUpdate,
              lastBaseUpdate: e.lastBaseUpdate,
              shared: e.shared,
              effects: e.effects,
            });
      }
      function li(e, t) {
        return {
          eventTime: e,
          lane: t,
          tag: 0,
          payload: null,
          callback: null,
          next: null,
        };
      }
      function si(e, t) {
        if (null !== (e = e.updateQueue)) {
          var n = (e = e.shared).pending;
          null === n ? (t.next = t) : ((t.next = n.next), (n.next = t)),
            (e.pending = t);
        }
      }
      function ui(e, t) {
        var n = e.updateQueue,
          r = e.alternate;
        if (null !== r && n === (r = r.updateQueue)) {
          var a = null,
            i = null;
          if (null !== (n = n.firstBaseUpdate)) {
            do {
              var o = {
                eventTime: n.eventTime,
                lane: n.lane,
                tag: n.tag,
                payload: n.payload,
                callback: n.callback,
                next: null,
              };
              null === i ? (a = i = o) : (i = i.next = o), (n = n.next);
            } while (null !== n);
            null === i ? (a = i = t) : (i = i.next = t);
          } else a = i = t;
          return (
            (n = {
              baseState: r.baseState,
              firstBaseUpdate: a,
              lastBaseUpdate: i,
              shared: r.shared,
              effects: r.effects,
            }),
            void (e.updateQueue = n)
          );
        }
        null === (e = n.lastBaseUpdate)
          ? (n.firstBaseUpdate = t)
          : (e.next = t),
          (n.lastBaseUpdate = t);
      }
      function ci(e, t, n, r) {
        var i = e.updateQueue;
        ai = !1;
        var o = i.firstBaseUpdate,
          l = i.lastBaseUpdate,
          s = i.shared.pending;
        if (null !== s) {
          i.shared.pending = null;
          var u = s,
            c = u.next;
          (u.next = null), null === l ? (o = c) : (l.next = c), (l = u);
          var f = e.alternate;
          if (null !== f) {
            var d = (f = f.updateQueue).lastBaseUpdate;
            d !== l &&
              (null === d ? (f.firstBaseUpdate = c) : (d.next = c),
              (f.lastBaseUpdate = u));
          }
        }
        if (null !== o) {
          for (d = i.baseState, l = 0, f = c = u = null; ; ) {
            s = o.lane;
            var h = o.eventTime;
            if ((r & s) === s) {
              null !== f &&
                (f = f.next = {
                  eventTime: h,
                  lane: 0,
                  tag: o.tag,
                  payload: o.payload,
                  callback: o.callback,
                  next: null,
                });
              e: {
                var p = e,
                  g = o;
                switch (((s = t), (h = n), g.tag)) {
                  case 1:
                    if ("function" === typeof (p = g.payload)) {
                      d = p.call(h, d, s);
                      break e;
                    }
                    d = p;
                    break e;
                  case 3:
                    p.flags = (-4097 & p.flags) | 64;
                  case 0:
                    if (
                      null ===
                        (s =
                          "function" === typeof (p = g.payload)
                            ? p.call(h, d, s)
                            : p) ||
                      void 0 === s
                    )
                      break e;
                    d = a({}, d, s);
                    break e;
                  case 2:
                    ai = !0;
                }
              }
              null !== o.callback &&
                ((e.flags |= 32),
                null === (s = i.effects) ? (i.effects = [o]) : s.push(o));
            } else
              (h = {
                eventTime: h,
                lane: s,
                tag: o.tag,
                payload: o.payload,
                callback: o.callback,
                next: null,
              }),
                null === f ? ((c = f = h), (u = d)) : (f = f.next = h),
                (l |= s);
            if (null === (o = o.next)) {
              if (null === (s = i.shared.pending)) break;
              (o = s.next),
                (s.next = null),
                (i.lastBaseUpdate = s),
                (i.shared.pending = null);
            }
          }
          null === f && (u = d),
            (i.baseState = u),
            (i.firstBaseUpdate = c),
            (i.lastBaseUpdate = f),
            (jl |= l),
            (e.lanes = l),
            (e.memoizedState = d);
        }
      }
      function fi(e, t, n) {
        if (((e = t.effects), (t.effects = null), null !== e))
          for (t = 0; t < e.length; t++) {
            var r = e[t],
              a = r.callback;
            if (null !== a) {
              if (((r.callback = null), (r = n), "function" !== typeof a))
                throw Error(o(191, a));
              a.call(r);
            }
          }
      }
      var di = new r.Component().refs;
      function hi(e, t, n, r) {
        (n =
          null === (n = n(r, (t = e.memoizedState))) || void 0 === n
            ? t
            : a({}, t, n)),
          (e.memoizedState = n),
          0 === e.lanes && (e.updateQueue.baseState = n);
      }
      var pi = {
        isMounted: function (e) {
          return !!(e = e._reactInternals) && Qe(e) === e;
        },
        enqueueSetState: function (e, t, n) {
          e = e._reactInternals;
          var r = us(),
            a = cs(e),
            i = li(r, a);
          (i.payload = t),
            void 0 !== n && null !== n && (i.callback = n),
            si(e, i),
            fs(e, a, r);
        },
        enqueueReplaceState: function (e, t, n) {
          e = e._reactInternals;
          var r = us(),
            a = cs(e),
            i = li(r, a);
          (i.tag = 1),
            (i.payload = t),
            void 0 !== n && null !== n && (i.callback = n),
            si(e, i),
            fs(e, a, r);
        },
        enqueueForceUpdate: function (e, t) {
          e = e._reactInternals;
          var n = us(),
            r = cs(e),
            a = li(n, r);
          (a.tag = 2),
            void 0 !== t && null !== t && (a.callback = t),
            si(e, a),
            fs(e, r, n);
        },
      };
      function gi(e, t, n, r, a, i, o) {
        return "function" === typeof (e = e.stateNode).shouldComponentUpdate
          ? e.shouldComponentUpdate(r, i, o)
          : !t.prototype ||
              !t.prototype.isPureReactComponent ||
              !ur(n, r) ||
              !ur(a, i);
      }
      function mi(e, t, n) {
        var r = !1,
          a = ua,
          i = t.contextType;
        return (
          "object" === typeof i && null !== i
            ? (i = ri(i))
            : ((a = pa(t) ? da : ca.current),
              (i = (r = null !== (r = t.contextTypes) && void 0 !== r)
                ? ha(e, a)
                : ua)),
          (t = new t(n, i)),
          (e.memoizedState =
            null !== t.state && void 0 !== t.state ? t.state : null),
          (t.updater = pi),
          (e.stateNode = t),
          (t._reactInternals = e),
          r &&
            (((e =
              e.stateNode).__reactInternalMemoizedUnmaskedChildContext = a),
            (e.__reactInternalMemoizedMaskedChildContext = i)),
          t
        );
      }
      function vi(e, t, n, r) {
        (e = t.state),
          "function" === typeof t.componentWillReceiveProps &&
            t.componentWillReceiveProps(n, r),
          "function" === typeof t.UNSAFE_componentWillReceiveProps &&
            t.UNSAFE_componentWillReceiveProps(n, r),
          t.state !== e && pi.enqueueReplaceState(t, t.state, null);
      }
      function yi(e, t, n, r) {
        var a = e.stateNode;
        (a.props = n), (a.state = e.memoizedState), (a.refs = di), ii(e);
        var i = t.contextType;
        "object" === typeof i && null !== i
          ? (a.context = ri(i))
          : ((i = pa(t) ? da : ca.current), (a.context = ha(e, i))),
          ci(e, n, a, r),
          (a.state = e.memoizedState),
          "function" === typeof (i = t.getDerivedStateFromProps) &&
            (hi(e, t, i, n), (a.state = e.memoizedState)),
          "function" === typeof t.getDerivedStateFromProps ||
            "function" === typeof a.getSnapshotBeforeUpdate ||
            ("function" !== typeof a.UNSAFE_componentWillMount &&
              "function" !== typeof a.componentWillMount) ||
            ((t = a.state),
            "function" === typeof a.componentWillMount &&
              a.componentWillMount(),
            "function" === typeof a.UNSAFE_componentWillMount &&
              a.UNSAFE_componentWillMount(),
            t !== a.state && pi.enqueueReplaceState(a, a.state, null),
            ci(e, n, a, r),
            (a.state = e.memoizedState)),
          "function" === typeof a.componentDidMount && (e.flags |= 4);
      }
      var bi = Array.isArray;
      function xi(e, t, n) {
        if (
          null !== (e = n.ref) &&
          "function" !== typeof e &&
          "object" !== typeof e
        ) {
          if (n._owner) {
            if ((n = n._owner)) {
              if (1 !== n.tag) throw Error(o(309));
              var r = n.stateNode;
            }
            if (!r) throw Error(o(147, e));
            var a = "" + e;
            return null !== t &&
              null !== t.ref &&
              "function" === typeof t.ref &&
              t.ref._stringRef === a
              ? t.ref
              : (((t = function (e) {
                  var t = r.refs;
                  t === di && (t = r.refs = {}),
                    null === e ? delete t[a] : (t[a] = e);
                })._stringRef = a),
                t);
          }
          if ("string" !== typeof e) throw Error(o(284));
          if (!n._owner) throw Error(o(290, e));
        }
        return e;
      }
      function _i(e, t) {
        if ("textarea" !== e.type)
          throw Error(
            o(
              31,
              "[object Object]" === Object.prototype.toString.call(t)
                ? "object with keys {" + Object.keys(t).join(", ") + "}"
                : t
            )
          );
      }
      function wi(e) {
        function t(t, n) {
          if (e) {
            var r = t.lastEffect;
            null !== r
              ? ((r.nextEffect = n), (t.lastEffect = n))
              : (t.firstEffect = t.lastEffect = n),
              (n.nextEffect = null),
              (n.flags = 8);
          }
        }
        function n(n, r) {
          if (!e) return null;
          for (; null !== r; ) t(n, r), (r = r.sibling);
          return null;
        }
        function r(e, t) {
          for (e = new Map(); null !== t; )
            null !== t.key ? e.set(t.key, t) : e.set(t.index, t),
              (t = t.sibling);
          return e;
        }
        function a(e, t) {
          return ((e = Bs(e, t)).index = 0), (e.sibling = null), e;
        }
        function i(t, n, r) {
          return (
            (t.index = r),
            e
              ? null !== (r = t.alternate)
                ? (r = r.index) < n
                  ? ((t.flags = 2), n)
                  : r
                : ((t.flags = 2), n)
              : n
          );
        }
        function l(t) {
          return e && null === t.alternate && (t.flags = 2), t;
        }
        function s(e, t, n, r) {
          return null === t || 6 !== t.tag
            ? (((t = Gs(n, e.mode, r)).return = e), t)
            : (((t = a(t, n)).return = e), t);
        }
        function u(e, t, n, r) {
          return null !== t && t.elementType === n.type
            ? (((r = a(t, n.props)).ref = xi(e, t, n)), (r.return = e), r)
            : (((r = Hs(n.type, n.key, n.props, null, e.mode, r)).ref = xi(
                e,
                t,
                n
              )),
              (r.return = e),
              r);
        }
        function c(e, t, n, r) {
          return null === t ||
            4 !== t.tag ||
            t.stateNode.containerInfo !== n.containerInfo ||
            t.stateNode.implementation !== n.implementation
            ? (((t = qs(n, e.mode, r)).return = e), t)
            : (((t = a(t, n.children || [])).return = e), t);
        }
        function f(e, t, n, r, i) {
          return null === t || 7 !== t.tag
            ? (((t = Us(n, e.mode, r, i)).return = e), t)
            : (((t = a(t, n)).return = e), t);
        }
        function d(e, t, n) {
          if ("string" === typeof t || "number" === typeof t)
            return ((t = Gs("" + t, e.mode, n)).return = e), t;
          if ("object" === typeof t && null !== t) {
            switch (t.$$typeof) {
              case w:
                return (
                  ((n = Hs(t.type, t.key, t.props, null, e.mode, n)).ref = xi(
                    e,
                    null,
                    t
                  )),
                  (n.return = e),
                  n
                );
              case k:
                return ((t = qs(t, e.mode, n)).return = e), t;
            }
            if (bi(t) || Y(t))
              return ((t = Us(t, e.mode, n, null)).return = e), t;
            _i(e, t);
          }
          return null;
        }
        function h(e, t, n, r) {
          var a = null !== t ? t.key : null;
          if ("string" === typeof n || "number" === typeof n)
            return null !== a ? null : s(e, t, "" + n, r);
          if ("object" === typeof n && null !== n) {
            switch (n.$$typeof) {
              case w:
                return n.key === a
                  ? n.type === S
                    ? f(e, t, n.props.children, r, a)
                    : u(e, t, n, r)
                  : null;
              case k:
                return n.key === a ? c(e, t, n, r) : null;
            }
            if (bi(n) || Y(n)) return null !== a ? null : f(e, t, n, r, null);
            _i(e, n);
          }
          return null;
        }
        function p(e, t, n, r, a) {
          if ("string" === typeof r || "number" === typeof r)
            return s(t, (e = e.get(n) || null), "" + r, a);
          if ("object" === typeof r && null !== r) {
            switch (r.$$typeof) {
              case w:
                return (
                  (e = e.get(null === r.key ? n : r.key) || null),
                  r.type === S
                    ? f(t, e, r.props.children, a, r.key)
                    : u(t, e, r, a)
                );
              case k:
                return c(
                  t,
                  (e = e.get(null === r.key ? n : r.key) || null),
                  r,
                  a
                );
            }
            if (bi(r) || Y(r)) return f(t, (e = e.get(n) || null), r, a, null);
            _i(t, r);
          }
          return null;
        }
        function g(a, o, l, s) {
          for (
            var u = null, c = null, f = o, g = (o = 0), m = null;
            null !== f && g < l.length;
            g++
          ) {
            f.index > g ? ((m = f), (f = null)) : (m = f.sibling);
            var v = h(a, f, l[g], s);
            if (null === v) {
              null === f && (f = m);
              break;
            }
            e && f && null === v.alternate && t(a, f),
              (o = i(v, o, g)),
              null === c ? (u = v) : (c.sibling = v),
              (c = v),
              (f = m);
          }
          if (g === l.length) return n(a, f), u;
          if (null === f) {
            for (; g < l.length; g++)
              null !== (f = d(a, l[g], s)) &&
                ((o = i(f, o, g)),
                null === c ? (u = f) : (c.sibling = f),
                (c = f));
            return u;
          }
          for (f = r(a, f); g < l.length; g++)
            null !== (m = p(f, a, g, l[g], s)) &&
              (e &&
                null !== m.alternate &&
                f.delete(null === m.key ? g : m.key),
              (o = i(m, o, g)),
              null === c ? (u = m) : (c.sibling = m),
              (c = m));
          return (
            e &&
              f.forEach(function (e) {
                return t(a, e);
              }),
            u
          );
        }
        function m(a, l, s, u) {
          var c = Y(s);
          if ("function" !== typeof c) throw Error(o(150));
          if (null == (s = c.call(s))) throw Error(o(151));
          for (
            var f = (c = null), g = l, m = (l = 0), v = null, y = s.next();
            null !== g && !y.done;
            m++, y = s.next()
          ) {
            g.index > m ? ((v = g), (g = null)) : (v = g.sibling);
            var b = h(a, g, y.value, u);
            if (null === b) {
              null === g && (g = v);
              break;
            }
            e && g && null === b.alternate && t(a, g),
              (l = i(b, l, m)),
              null === f ? (c = b) : (f.sibling = b),
              (f = b),
              (g = v);
          }
          if (y.done) return n(a, g), c;
          if (null === g) {
            for (; !y.done; m++, y = s.next())
              null !== (y = d(a, y.value, u)) &&
                ((l = i(y, l, m)),
                null === f ? (c = y) : (f.sibling = y),
                (f = y));
            return c;
          }
          for (g = r(a, g); !y.done; m++, y = s.next())
            null !== (y = p(g, a, m, y.value, u)) &&
              (e &&
                null !== y.alternate &&
                g.delete(null === y.key ? m : y.key),
              (l = i(y, l, m)),
              null === f ? (c = y) : (f.sibling = y),
              (f = y));
          return (
            e &&
              g.forEach(function (e) {
                return t(a, e);
              }),
            c
          );
        }
        return function (e, r, i, s) {
          var u =
            "object" === typeof i &&
            null !== i &&
            i.type === S &&
            null === i.key;
          u && (i = i.props.children);
          var c = "object" === typeof i && null !== i;
          if (c)
            switch (i.$$typeof) {
              case w:
                e: {
                  for (c = i.key, u = r; null !== u; ) {
                    if (u.key === c) {
                      switch (u.tag) {
                        case 7:
                          if (i.type === S) {
                            n(e, u.sibling),
                              ((r = a(u, i.props.children)).return = e),
                              (e = r);
                            break e;
                          }
                          break;
                        default:
                          if (u.elementType === i.type) {
                            n(e, u.sibling),
                              ((r = a(u, i.props)).ref = xi(e, u, i)),
                              (r.return = e),
                              (e = r);
                            break e;
                          }
                      }
                      n(e, u);
                      break;
                    }
                    t(e, u), (u = u.sibling);
                  }
                  i.type === S
                    ? (((r = Us(
                        i.props.children,
                        e.mode,
                        s,
                        i.key
                      )).return = e),
                      (e = r))
                    : (((s = Hs(
                        i.type,
                        i.key,
                        i.props,
                        null,
                        e.mode,
                        s
                      )).ref = xi(e, r, i)),
                      (s.return = e),
                      (e = s));
                }
                return l(e);
              case k:
                e: {
                  for (u = i.key; null !== r; ) {
                    if (r.key === u) {
                      if (
                        4 === r.tag &&
                        r.stateNode.containerInfo === i.containerInfo &&
                        r.stateNode.implementation === i.implementation
                      ) {
                        n(e, r.sibling),
                          ((r = a(r, i.children || [])).return = e),
                          (e = r);
                        break e;
                      }
                      n(e, r);
                      break;
                    }
                    t(e, r), (r = r.sibling);
                  }
                  ((r = qs(i, e.mode, s)).return = e), (e = r);
                }
                return l(e);
            }
          if ("string" === typeof i || "number" === typeof i)
            return (
              (i = "" + i),
              null !== r && 6 === r.tag
                ? (n(e, r.sibling), ((r = a(r, i)).return = e), (e = r))
                : (n(e, r), ((r = Gs(i, e.mode, s)).return = e), (e = r)),
              l(e)
            );
          if (bi(i)) return g(e, r, i, s);
          if (Y(i)) return m(e, r, i, s);
          if ((c && _i(e, i), "undefined" === typeof i && !u))
            switch (e.tag) {
              case 1:
              case 22:
              case 0:
              case 11:
              case 15:
                throw Error(o(152, G(e.type) || "Component"));
            }
          return n(e, r);
        };
      }
      var ki = wi(!0),
        Si = wi(!1),
        Ci = {},
        Mi = oa(Ci),
        Oi = oa(Ci),
        Pi = oa(Ci);
      function Ei(e) {
        if (e === Ci) throw Error(o(174));
        return e;
      }
      function Di(e, t) {
        switch ((sa(Pi, t), sa(Oi, e), sa(Mi, Ci), (e = t.nodeType))) {
          case 9:
          case 11:
            t = (t = t.documentElement) ? t.namespaceURI : pe(null, "");
            break;
          default:
            t = pe(
              (t = (e = 8 === e ? t.parentNode : t).namespaceURI || null),
              (e = e.tagName)
            );
        }
        la(Mi), sa(Mi, t);
      }
      function Ti() {
        la(Mi), la(Oi), la(Pi);
      }
      function Ai(e) {
        Ei(Pi.current);
        var t = Ei(Mi.current),
          n = pe(t, e.type);
        t !== n && (sa(Oi, e), sa(Mi, n));
      }
      function Ni(e) {
        Oi.current === e && (la(Mi), la(Oi));
      }
      var Ii = oa(0);
      function Ri(e) {
        for (var t = e; null !== t; ) {
          if (13 === t.tag) {
            var n = t.memoizedState;
            if (
              null !== n &&
              (null === (n = n.dehydrated) ||
                "$?" === n.data ||
                "$!" === n.data)
            )
              return t;
          } else if (19 === t.tag && void 0 !== t.memoizedProps.revealOrder) {
            if (0 !== (64 & t.flags)) return t;
          } else if (null !== t.child) {
            (t.child.return = t), (t = t.child);
            continue;
          }
          if (t === e) break;
          for (; null === t.sibling; ) {
            if (null === t.return || t.return === e) return null;
            t = t.return;
          }
          (t.sibling.return = t.return), (t = t.sibling);
        }
        return null;
      }
      var Li = null,
        Fi = null,
        ji = !1;
      function zi(e, t) {
        var n = Vs(5, null, null, 0);
        (n.elementType = "DELETED"),
          (n.type = "DELETED"),
          (n.stateNode = t),
          (n.return = e),
          (n.flags = 8),
          null !== e.lastEffect
            ? ((e.lastEffect.nextEffect = n), (e.lastEffect = n))
            : (e.firstEffect = e.lastEffect = n);
      }
      function Wi(e, t) {
        switch (e.tag) {
          case 5:
            var n = e.type;
            return (
              null !==
                (t =
                  1 !== t.nodeType ||
                  n.toLowerCase() !== t.nodeName.toLowerCase()
                    ? null
                    : t) && ((e.stateNode = t), !0)
            );
          case 6:
            return (
              null !==
                (t = "" === e.pendingProps || 3 !== t.nodeType ? null : t) &&
              ((e.stateNode = t), !0)
            );
          case 13:
          default:
            return !1;
        }
      }
      function Vi(e) {
        if (ji) {
          var t = Fi;
          if (t) {
            var n = t;
            if (!Wi(e, t)) {
              if (!(t = Ur(n.nextSibling)) || !Wi(e, t))
                return (
                  (e.flags = (-1025 & e.flags) | 2), (ji = !1), void (Li = e)
                );
              zi(Li, n);
            }
            (Li = e), (Fi = Ur(t.firstChild));
          } else (e.flags = (-1025 & e.flags) | 2), (ji = !1), (Li = e);
        }
      }
      function Yi(e) {
        for (
          e = e.return;
          null !== e && 5 !== e.tag && 3 !== e.tag && 13 !== e.tag;

        )
          e = e.return;
        Li = e;
      }
      function Bi(e) {
        if (e !== Li) return !1;
        if (!ji) return Yi(e), (ji = !0), !1;
        var t = e.type;
        if (
          5 !== e.tag ||
          ("head" !== t && "body" !== t && !Vr(t, e.memoizedProps))
        )
          for (t = Fi; t; ) zi(e, t), (t = Ur(t.nextSibling));
        if ((Yi(e), 13 === e.tag)) {
          if (!(e = null !== (e = e.memoizedState) ? e.dehydrated : null))
            throw Error(o(317));
          e: {
            for (e = e.nextSibling, t = 0; e; ) {
              if (8 === e.nodeType) {
                var n = e.data;
                if ("/$" === n) {
                  if (0 === t) {
                    Fi = Ur(e.nextSibling);
                    break e;
                  }
                  t--;
                } else ("$" !== n && "$!" !== n && "$?" !== n) || t++;
              }
              e = e.nextSibling;
            }
            Fi = null;
          }
        } else Fi = Li ? Ur(e.stateNode.nextSibling) : null;
        return !0;
      }
      function Hi() {
        (Fi = Li = null), (ji = !1);
      }
      var Ui = [];
      function $i() {
        for (var e = 0; e < Ui.length; e++)
          Ui[e]._workInProgressVersionPrimary = null;
        Ui.length = 0;
      }
      var Gi = _.ReactCurrentDispatcher,
        qi = _.ReactCurrentBatchConfig,
        Ki = 0,
        Qi = null,
        Zi = null,
        Xi = null,
        Ji = !1,
        eo = !1;
      function to() {
        throw Error(o(321));
      }
      function no(e, t) {
        if (null === t) return !1;
        for (var n = 0; n < t.length && n < e.length; n++)
          if (!lr(e[n], t[n])) return !1;
        return !0;
      }
      function ro(e, t, n, r, a, i) {
        if (
          ((Ki = i),
          (Qi = t),
          (t.memoizedState = null),
          (t.updateQueue = null),
          (t.lanes = 0),
          (Gi.current = null === e || null === e.memoizedState ? Do : To),
          (e = n(r, a)),
          eo)
        ) {
          i = 0;
          do {
            if (((eo = !1), !(25 > i))) throw Error(o(301));
            (i += 1),
              (Xi = Zi = null),
              (t.updateQueue = null),
              (Gi.current = Ao),
              (e = n(r, a));
          } while (eo);
        }
        if (
          ((Gi.current = Eo),
          (t = null !== Zi && null !== Zi.next),
          (Ki = 0),
          (Xi = Zi = Qi = null),
          (Ji = !1),
          t)
        )
          throw Error(o(300));
        return e;
      }
      function ao() {
        var e = {
          memoizedState: null,
          baseState: null,
          baseQueue: null,
          queue: null,
          next: null,
        };
        return (
          null === Xi ? (Qi.memoizedState = Xi = e) : (Xi = Xi.next = e), Xi
        );
      }
      function io() {
        if (null === Zi) {
          var e = Qi.alternate;
          e = null !== e ? e.memoizedState : null;
        } else e = Zi.next;
        var t = null === Xi ? Qi.memoizedState : Xi.next;
        if (null !== t) (Xi = t), (Zi = e);
        else {
          if (null === e) throw Error(o(310));
          (e = {
            memoizedState: (Zi = e).memoizedState,
            baseState: Zi.baseState,
            baseQueue: Zi.baseQueue,
            queue: Zi.queue,
            next: null,
          }),
            null === Xi ? (Qi.memoizedState = Xi = e) : (Xi = Xi.next = e);
        }
        return Xi;
      }
      function oo(e, t) {
        return "function" === typeof t ? t(e) : t;
      }
      function lo(e) {
        var t = io(),
          n = t.queue;
        if (null === n) throw Error(o(311));
        n.lastRenderedReducer = e;
        var r = Zi,
          a = r.baseQueue,
          i = n.pending;
        if (null !== i) {
          if (null !== a) {
            var l = a.next;
            (a.next = i.next), (i.next = l);
          }
          (r.baseQueue = a = i), (n.pending = null);
        }
        if (null !== a) {
          (a = a.next), (r = r.baseState);
          var s = (l = i = null),
            u = a;
          do {
            var c = u.lane;
            if ((Ki & c) === c)
              null !== s &&
                (s = s.next = {
                  lane: 0,
                  action: u.action,
                  eagerReducer: u.eagerReducer,
                  eagerState: u.eagerState,
                  next: null,
                }),
                (r = u.eagerReducer === e ? u.eagerState : e(r, u.action));
            else {
              var f = {
                lane: c,
                action: u.action,
                eagerReducer: u.eagerReducer,
                eagerState: u.eagerState,
                next: null,
              };
              null === s ? ((l = s = f), (i = r)) : (s = s.next = f),
                (Qi.lanes |= c),
                (jl |= c);
            }
            u = u.next;
          } while (null !== u && u !== a);
          null === s ? (i = r) : (s.next = l),
            lr(r, t.memoizedState) || (Io = !0),
            (t.memoizedState = r),
            (t.baseState = i),
            (t.baseQueue = s),
            (n.lastRenderedState = r);
        }
        return [t.memoizedState, n.dispatch];
      }
      function so(e) {
        var t = io(),
          n = t.queue;
        if (null === n) throw Error(o(311));
        n.lastRenderedReducer = e;
        var r = n.dispatch,
          a = n.pending,
          i = t.memoizedState;
        if (null !== a) {
          n.pending = null;
          var l = (a = a.next);
          do {
            (i = e(i, l.action)), (l = l.next);
          } while (l !== a);
          lr(i, t.memoizedState) || (Io = !0),
            (t.memoizedState = i),
            null === t.baseQueue && (t.baseState = i),
            (n.lastRenderedState = i);
        }
        return [i, r];
      }
      function uo(e, t, n) {
        var r = t._getVersion;
        r = r(t._source);
        var a = t._workInProgressVersionPrimary;
        if (
          (null !== a
            ? (e = a === r)
            : ((e = e.mutableReadLanes),
              (e = (Ki & e) === e) &&
                ((t._workInProgressVersionPrimary = r), Ui.push(t))),
          e)
        )
          return n(t._source);
        throw (Ui.push(t), Error(o(350)));
      }
      function co(e, t, n, r) {
        var a = Dl;
        if (null === a) throw Error(o(349));
        var i = t._getVersion,
          l = i(t._source),
          s = Gi.current,
          u = s.useState(function () {
            return uo(a, t, n);
          }),
          c = u[1],
          f = u[0];
        u = Xi;
        var d = e.memoizedState,
          h = d.refs,
          p = h.getSnapshot,
          g = d.source;
        d = d.subscribe;
        var m = Qi;
        return (
          (e.memoizedState = { refs: h, source: t, subscribe: r }),
          s.useEffect(
            function () {
              (h.getSnapshot = n), (h.setSnapshot = c);
              var e = i(t._source);
              if (!lr(l, e)) {
                (e = n(t._source)),
                  lr(f, e) ||
                    (c(e),
                    (e = cs(m)),
                    (a.mutableReadLanes |= e & a.pendingLanes)),
                  (e = a.mutableReadLanes),
                  (a.entangledLanes |= e);
                for (var r = a.entanglements, o = e; 0 < o; ) {
                  var s = 31 - Ht(o),
                    u = 1 << s;
                  (r[s] |= e), (o &= ~u);
                }
              }
            },
            [n, t, r]
          ),
          s.useEffect(
            function () {
              return r(t._source, function () {
                var e = h.getSnapshot,
                  n = h.setSnapshot;
                try {
                  n(e(t._source));
                  var r = cs(m);
                  a.mutableReadLanes |= r & a.pendingLanes;
                } catch (i) {
                  n(function () {
                    throw i;
                  });
                }
              });
            },
            [t, r]
          ),
          (lr(p, n) && lr(g, t) && lr(d, r)) ||
            (((e = {
              pending: null,
              dispatch: null,
              lastRenderedReducer: oo,
              lastRenderedState: f,
            }).dispatch = c = Po.bind(null, Qi, e)),
            (u.queue = e),
            (u.baseQueue = null),
            (f = uo(a, t, n)),
            (u.memoizedState = u.baseState = f)),
          f
        );
      }
      function fo(e, t, n) {
        return co(io(), e, t, n);
      }
      function ho(e) {
        var t = ao();
        return (
          "function" === typeof e && (e = e()),
          (t.memoizedState = t.baseState = e),
          (e = (e = t.queue = {
            pending: null,
            dispatch: null,
            lastRenderedReducer: oo,
            lastRenderedState: e,
          }).dispatch = Po.bind(null, Qi, e)),
          [t.memoizedState, e]
        );
      }
      function po(e, t, n, r) {
        return (
          (e = { tag: e, create: t, destroy: n, deps: r, next: null }),
          null === (t = Qi.updateQueue)
            ? ((t = { lastEffect: null }),
              (Qi.updateQueue = t),
              (t.lastEffect = e.next = e))
            : null === (n = t.lastEffect)
            ? (t.lastEffect = e.next = e)
            : ((r = n.next), (n.next = e), (e.next = r), (t.lastEffect = e)),
          e
        );
      }
      function go(e) {
        return (e = { current: e }), (ao().memoizedState = e);
      }
      function mo() {
        return io().memoizedState;
      }
      function vo(e, t, n, r) {
        var a = ao();
        (Qi.flags |= e),
          (a.memoizedState = po(1 | t, n, void 0, void 0 === r ? null : r));
      }
      function yo(e, t, n, r) {
        var a = io();
        r = void 0 === r ? null : r;
        var i = void 0;
        if (null !== Zi) {
          var o = Zi.memoizedState;
          if (((i = o.destroy), null !== r && no(r, o.deps)))
            return void po(t, n, i, r);
        }
        (Qi.flags |= e), (a.memoizedState = po(1 | t, n, i, r));
      }
      function bo(e, t) {
        return vo(516, 4, e, t);
      }
      function xo(e, t) {
        return yo(516, 4, e, t);
      }
      function _o(e, t) {
        return yo(4, 2, e, t);
      }
      function wo(e, t) {
        return "function" === typeof t
          ? ((e = e()),
            t(e),
            function () {
              t(null);
            })
          : null !== t && void 0 !== t
          ? ((e = e()),
            (t.current = e),
            function () {
              t.current = null;
            })
          : void 0;
      }
      function ko(e, t, n) {
        return (
          (n = null !== n && void 0 !== n ? n.concat([e]) : null),
          yo(4, 2, wo.bind(null, t, e), n)
        );
      }
      function So() {}
      function Co(e, t) {
        var n = io();
        t = void 0 === t ? null : t;
        var r = n.memoizedState;
        return null !== r && null !== t && no(t, r[1])
          ? r[0]
          : ((n.memoizedState = [e, t]), e);
      }
      function Mo(e, t) {
        var n = io();
        t = void 0 === t ? null : t;
        var r = n.memoizedState;
        return null !== r && null !== t && no(t, r[1])
          ? r[0]
          : ((e = e()), (n.memoizedState = [e, t]), e);
      }
      function Oo(e, t) {
        var n = Va();
        Ba(98 > n ? 98 : n, function () {
          e(!0);
        }),
          Ba(97 < n ? 97 : n, function () {
            var n = qi.transition;
            qi.transition = 1;
            try {
              e(!1), t();
            } finally {
              qi.transition = n;
            }
          });
      }
      function Po(e, t, n) {
        var r = us(),
          a = cs(e),
          i = {
            lane: a,
            action: n,
            eagerReducer: null,
            eagerState: null,
            next: null,
          },
          o = t.pending;
        if (
          (null === o ? (i.next = i) : ((i.next = o.next), (o.next = i)),
          (t.pending = i),
          (o = e.alternate),
          e === Qi || (null !== o && o === Qi))
        )
          eo = Ji = !0;
        else {
          if (
            0 === e.lanes &&
            (null === o || 0 === o.lanes) &&
            null !== (o = t.lastRenderedReducer)
          )
            try {
              var l = t.lastRenderedState,
                s = o(l, n);
              if (((i.eagerReducer = o), (i.eagerState = s), lr(s, l))) return;
            } catch (u) {}
          fs(e, a, r);
        }
      }
      var Eo = {
          readContext: ri,
          useCallback: to,
          useContext: to,
          useEffect: to,
          useImperativeHandle: to,
          useLayoutEffect: to,
          useMemo: to,
          useReducer: to,
          useRef: to,
          useState: to,
          useDebugValue: to,
          useDeferredValue: to,
          useTransition: to,
          useMutableSource: to,
          useOpaqueIdentifier: to,
          unstable_isNewReconciler: !1,
        },
        Do = {
          readContext: ri,
          useCallback: function (e, t) {
            return (ao().memoizedState = [e, void 0 === t ? null : t]), e;
          },
          useContext: ri,
          useEffect: bo,
          useImperativeHandle: function (e, t, n) {
            return (
              (n = null !== n && void 0 !== n ? n.concat([e]) : null),
              vo(4, 2, wo.bind(null, t, e), n)
            );
          },
          useLayoutEffect: function (e, t) {
            return vo(4, 2, e, t);
          },
          useMemo: function (e, t) {
            var n = ao();
            return (
              (t = void 0 === t ? null : t),
              (e = e()),
              (n.memoizedState = [e, t]),
              e
            );
          },
          useReducer: function (e, t, n) {
            var r = ao();
            return (
              (t = void 0 !== n ? n(t) : t),
              (r.memoizedState = r.baseState = t),
              (e = (e = r.queue = {
                pending: null,
                dispatch: null,
                lastRenderedReducer: e,
                lastRenderedState: t,
              }).dispatch = Po.bind(null, Qi, e)),
              [r.memoizedState, e]
            );
          },
          useRef: go,
          useState: ho,
          useDebugValue: So,
          useDeferredValue: function (e) {
            var t = ho(e),
              n = t[0],
              r = t[1];
            return (
              bo(
                function () {
                  var t = qi.transition;
                  qi.transition = 1;
                  try {
                    r(e);
                  } finally {
                    qi.transition = t;
                  }
                },
                [e]
              ),
              n
            );
          },
          useTransition: function () {
            var e = ho(!1),
              t = e[0];
            return go((e = Oo.bind(null, e[1]))), [e, t];
          },
          useMutableSource: function (e, t, n) {
            var r = ao();
            return (
              (r.memoizedState = {
                refs: { getSnapshot: t, setSnapshot: null },
                source: e,
                subscribe: n,
              }),
              co(r, e, t, n)
            );
          },
          useOpaqueIdentifier: function () {
            if (ji) {
              var e = !1,
                t = (function (e) {
                  return { $$typeof: R, toString: e, valueOf: e };
                })(function () {
                  throw (
                    (e || ((e = !0), n("r:" + (Gr++).toString(36))),
                    Error(o(355)))
                  );
                }),
                n = ho(t)[1];
              return (
                0 === (2 & Qi.mode) &&
                  ((Qi.flags |= 516),
                  po(
                    5,
                    function () {
                      n("r:" + (Gr++).toString(36));
                    },
                    void 0,
                    null
                  )),
                t
              );
            }
            return ho((t = "r:" + (Gr++).toString(36))), t;
          },
          unstable_isNewReconciler: !1,
        },
        To = {
          readContext: ri,
          useCallback: Co,
          useContext: ri,
          useEffect: xo,
          useImperativeHandle: ko,
          useLayoutEffect: _o,
          useMemo: Mo,
          useReducer: lo,
          useRef: mo,
          useState: function () {
            return lo(oo);
          },
          useDebugValue: So,
          useDeferredValue: function (e) {
            var t = lo(oo),
              n = t[0],
              r = t[1];
            return (
              xo(
                function () {
                  var t = qi.transition;
                  qi.transition = 1;
                  try {
                    r(e);
                  } finally {
                    qi.transition = t;
                  }
                },
                [e]
              ),
              n
            );
          },
          useTransition: function () {
            var e = lo(oo)[0];
            return [mo().current, e];
          },
          useMutableSource: fo,
          useOpaqueIdentifier: function () {
            return lo(oo)[0];
          },
          unstable_isNewReconciler: !1,
        },
        Ao = {
          readContext: ri,
          useCallback: Co,
          useContext: ri,
          useEffect: xo,
          useImperativeHandle: ko,
          useLayoutEffect: _o,
          useMemo: Mo,
          useReducer: so,
          useRef: mo,
          useState: function () {
            return so(oo);
          },
          useDebugValue: So,
          useDeferredValue: function (e) {
            var t = so(oo),
              n = t[0],
              r = t[1];
            return (
              xo(
                function () {
                  var t = qi.transition;
                  qi.transition = 1;
                  try {
                    r(e);
                  } finally {
                    qi.transition = t;
                  }
                },
                [e]
              ),
              n
            );
          },
          useTransition: function () {
            var e = so(oo)[0];
            return [mo().current, e];
          },
          useMutableSource: fo,
          useOpaqueIdentifier: function () {
            return so(oo)[0];
          },
          unstable_isNewReconciler: !1,
        },
        No = _.ReactCurrentOwner,
        Io = !1;
      function Ro(e, t, n, r) {
        t.child = null === e ? Si(t, null, n, r) : ki(t, e.child, n, r);
      }
      function Lo(e, t, n, r, a) {
        n = n.render;
        var i = t.ref;
        return (
          ni(t, a),
          (r = ro(e, t, n, r, i, a)),
          null === e || Io
            ? ((t.flags |= 1), Ro(e, t, r, a), t.child)
            : ((t.updateQueue = e.updateQueue),
              (t.flags &= -517),
              (e.lanes &= ~a),
              nl(e, t, a))
        );
      }
      function Fo(e, t, n, r, a, i) {
        if (null === e) {
          var o = n.type;
          return "function" !== typeof o ||
            Ys(o) ||
            void 0 !== o.defaultProps ||
            null !== n.compare ||
            void 0 !== n.defaultProps
            ? (((e = Hs(n.type, null, r, t, t.mode, i)).ref = t.ref),
              (e.return = t),
              (t.child = e))
            : ((t.tag = 15), (t.type = o), jo(e, t, o, r, a, i));
        }
        return (
          (o = e.child),
          0 === (a & i) &&
          ((a = o.memoizedProps),
          (n = null !== (n = n.compare) ? n : ur)(a, r) && e.ref === t.ref)
            ? nl(e, t, i)
            : ((t.flags |= 1),
              ((e = Bs(o, r)).ref = t.ref),
              (e.return = t),
              (t.child = e))
        );
      }
      function jo(e, t, n, r, a, i) {
        if (null !== e && ur(e.memoizedProps, r) && e.ref === t.ref) {
          if (((Io = !1), 0 === (i & a)))
            return (t.lanes = e.lanes), nl(e, t, i);
          0 !== (16384 & e.flags) && (Io = !0);
        }
        return Vo(e, t, n, r, i);
      }
      function zo(e, t, n) {
        var r = t.pendingProps,
          a = r.children,
          i = null !== e ? e.memoizedState : null;
        if ("hidden" === r.mode || "unstable-defer-without-hiding" === r.mode)
          if (0 === (4 & t.mode))
            (t.memoizedState = { baseLanes: 0 }), bs(t, n);
          else {
            if (0 === (1073741824 & n))
              return (
                (e = null !== i ? i.baseLanes | n : n),
                (t.lanes = t.childLanes = 1073741824),
                (t.memoizedState = { baseLanes: e }),
                bs(t, e),
                null
              );
            (t.memoizedState = { baseLanes: 0 }),
              bs(t, null !== i ? i.baseLanes : n);
          }
        else
          null !== i
            ? ((r = i.baseLanes | n), (t.memoizedState = null))
            : (r = n),
            bs(t, r);
        return Ro(e, t, a, n), t.child;
      }
      function Wo(e, t) {
        var n = t.ref;
        ((null === e && null !== n) || (null !== e && e.ref !== n)) &&
          (t.flags |= 128);
      }
      function Vo(e, t, n, r, a) {
        var i = pa(n) ? da : ca.current;
        return (
          (i = ha(t, i)),
          ni(t, a),
          (n = ro(e, t, n, r, i, a)),
          null === e || Io
            ? ((t.flags |= 1), Ro(e, t, n, a), t.child)
            : ((t.updateQueue = e.updateQueue),
              (t.flags &= -517),
              (e.lanes &= ~a),
              nl(e, t, a))
        );
      }
      function Yo(e, t, n, r, a) {
        if (pa(n)) {
          var i = !0;
          ya(t);
        } else i = !1;
        if ((ni(t, a), null === t.stateNode))
          null !== e &&
            ((e.alternate = null), (t.alternate = null), (t.flags |= 2)),
            mi(t, n, r),
            yi(t, n, r, a),
            (r = !0);
        else if (null === e) {
          var o = t.stateNode,
            l = t.memoizedProps;
          o.props = l;
          var s = o.context,
            u = n.contextType;
          "object" === typeof u && null !== u
            ? (u = ri(u))
            : (u = ha(t, (u = pa(n) ? da : ca.current)));
          var c = n.getDerivedStateFromProps,
            f =
              "function" === typeof c ||
              "function" === typeof o.getSnapshotBeforeUpdate;
          f ||
            ("function" !== typeof o.UNSAFE_componentWillReceiveProps &&
              "function" !== typeof o.componentWillReceiveProps) ||
            ((l !== r || s !== u) && vi(t, o, r, u)),
            (ai = !1);
          var d = t.memoizedState;
          (o.state = d),
            ci(t, r, o, a),
            (s = t.memoizedState),
            l !== r || d !== s || fa.current || ai
              ? ("function" === typeof c &&
                  (hi(t, n, c, r), (s = t.memoizedState)),
                (l = ai || gi(t, n, l, r, d, s, u))
                  ? (f ||
                      ("function" !== typeof o.UNSAFE_componentWillMount &&
                        "function" !== typeof o.componentWillMount) ||
                      ("function" === typeof o.componentWillMount &&
                        o.componentWillMount(),
                      "function" === typeof o.UNSAFE_componentWillMount &&
                        o.UNSAFE_componentWillMount()),
                    "function" === typeof o.componentDidMount && (t.flags |= 4))
                  : ("function" === typeof o.componentDidMount &&
                      (t.flags |= 4),
                    (t.memoizedProps = r),
                    (t.memoizedState = s)),
                (o.props = r),
                (o.state = s),
                (o.context = u),
                (r = l))
              : ("function" === typeof o.componentDidMount && (t.flags |= 4),
                (r = !1));
        } else {
          (o = t.stateNode),
            oi(e, t),
            (l = t.memoizedProps),
            (u = t.type === t.elementType ? l : qa(t.type, l)),
            (o.props = u),
            (f = t.pendingProps),
            (d = o.context),
            "object" === typeof (s = n.contextType) && null !== s
              ? (s = ri(s))
              : (s = ha(t, (s = pa(n) ? da : ca.current)));
          var h = n.getDerivedStateFromProps;
          (c =
            "function" === typeof h ||
            "function" === typeof o.getSnapshotBeforeUpdate) ||
            ("function" !== typeof o.UNSAFE_componentWillReceiveProps &&
              "function" !== typeof o.componentWillReceiveProps) ||
            ((l !== f || d !== s) && vi(t, o, r, s)),
            (ai = !1),
            (d = t.memoizedState),
            (o.state = d),
            ci(t, r, o, a);
          var p = t.memoizedState;
          l !== f || d !== p || fa.current || ai
            ? ("function" === typeof h &&
                (hi(t, n, h, r), (p = t.memoizedState)),
              (u = ai || gi(t, n, u, r, d, p, s))
                ? (c ||
                    ("function" !== typeof o.UNSAFE_componentWillUpdate &&
                      "function" !== typeof o.componentWillUpdate) ||
                    ("function" === typeof o.componentWillUpdate &&
                      o.componentWillUpdate(r, p, s),
                    "function" === typeof o.UNSAFE_componentWillUpdate &&
                      o.UNSAFE_componentWillUpdate(r, p, s)),
                  "function" === typeof o.componentDidUpdate && (t.flags |= 4),
                  "function" === typeof o.getSnapshotBeforeUpdate &&
                    (t.flags |= 256))
                : ("function" !== typeof o.componentDidUpdate ||
                    (l === e.memoizedProps && d === e.memoizedState) ||
                    (t.flags |= 4),
                  "function" !== typeof o.getSnapshotBeforeUpdate ||
                    (l === e.memoizedProps && d === e.memoizedState) ||
                    (t.flags |= 256),
                  (t.memoizedProps = r),
                  (t.memoizedState = p)),
              (o.props = r),
              (o.state = p),
              (o.context = s),
              (r = u))
            : ("function" !== typeof o.componentDidUpdate ||
                (l === e.memoizedProps && d === e.memoizedState) ||
                (t.flags |= 4),
              "function" !== typeof o.getSnapshotBeforeUpdate ||
                (l === e.memoizedProps && d === e.memoizedState) ||
                (t.flags |= 256),
              (r = !1));
        }
        return Bo(e, t, n, r, i, a);
      }
      function Bo(e, t, n, r, a, i) {
        Wo(e, t);
        var o = 0 !== (64 & t.flags);
        if (!r && !o) return a && ba(t, n, !1), nl(e, t, i);
        (r = t.stateNode), (No.current = t);
        var l =
          o && "function" !== typeof n.getDerivedStateFromError
            ? null
            : r.render();
        return (
          (t.flags |= 1),
          null !== e && o
            ? ((t.child = ki(t, e.child, null, i)),
              (t.child = ki(t, null, l, i)))
            : Ro(e, t, l, i),
          (t.memoizedState = r.state),
          a && ba(t, n, !0),
          t.child
        );
      }
      function Ho(e) {
        var t = e.stateNode;
        t.pendingContext
          ? ma(0, t.pendingContext, t.pendingContext !== t.context)
          : t.context && ma(0, t.context, !1),
          Di(e, t.containerInfo);
      }
      var Uo,
        $o,
        Go,
        qo = { dehydrated: null, retryLane: 0 };
      function Ko(e, t, n) {
        var r,
          a = t.pendingProps,
          i = Ii.current,
          o = !1;
        return (
          (r = 0 !== (64 & t.flags)) ||
            (r = (null === e || null !== e.memoizedState) && 0 !== (2 & i)),
          r
            ? ((o = !0), (t.flags &= -65))
            : (null !== e && null === e.memoizedState) ||
              void 0 === a.fallback ||
              !0 === a.unstable_avoidThisFallback ||
              (i |= 1),
          sa(Ii, 1 & i),
          null === e
            ? (void 0 !== a.fallback && Vi(t),
              (e = a.children),
              (i = a.fallback),
              o
                ? ((e = Qo(t, e, i, n)),
                  (t.child.memoizedState = { baseLanes: n }),
                  (t.memoizedState = qo),
                  e)
                : "number" === typeof a.unstable_expectedLoadTime
                ? ((e = Qo(t, e, i, n)),
                  (t.child.memoizedState = { baseLanes: n }),
                  (t.memoizedState = qo),
                  (t.lanes = 33554432),
                  e)
                : (((n = $s(
                    { mode: "visible", children: e },
                    t.mode,
                    n,
                    null
                  )).return = t),
                  (t.child = n)))
            : (e.memoizedState,
              o
                ? ((a = Xo(e, t, a.children, a.fallback, n)),
                  (o = t.child),
                  (i = e.child.memoizedState),
                  (o.memoizedState =
                    null === i
                      ? { baseLanes: n }
                      : { baseLanes: i.baseLanes | n }),
                  (o.childLanes = e.childLanes & ~n),
                  (t.memoizedState = qo),
                  a)
                : ((n = Zo(e, t, a.children, n)), (t.memoizedState = null), n))
        );
      }
      function Qo(e, t, n, r) {
        var a = e.mode,
          i = e.child;
        return (
          (t = { mode: "hidden", children: t }),
          0 === (2 & a) && null !== i
            ? ((i.childLanes = 0), (i.pendingProps = t))
            : (i = $s(t, a, 0, null)),
          (n = Us(n, a, r, null)),
          (i.return = e),
          (n.return = e),
          (i.sibling = n),
          (e.child = i),
          n
        );
      }
      function Zo(e, t, n, r) {
        var a = e.child;
        return (
          (e = a.sibling),
          (n = Bs(a, { mode: "visible", children: n })),
          0 === (2 & t.mode) && (n.lanes = r),
          (n.return = t),
          (n.sibling = null),
          null !== e &&
            ((e.nextEffect = null),
            (e.flags = 8),
            (t.firstEffect = t.lastEffect = e)),
          (t.child = n)
        );
      }
      function Xo(e, t, n, r, a) {
        var i = t.mode,
          o = e.child;
        e = o.sibling;
        var l = { mode: "hidden", children: n };
        return (
          0 === (2 & i) && t.child !== o
            ? (((n = t.child).childLanes = 0),
              (n.pendingProps = l),
              null !== (o = n.lastEffect)
                ? ((t.firstEffect = n.firstEffect),
                  (t.lastEffect = o),
                  (o.nextEffect = null))
                : (t.firstEffect = t.lastEffect = null))
            : (n = Bs(o, l)),
          null !== e ? (r = Bs(e, r)) : ((r = Us(r, i, a, null)).flags |= 2),
          (r.return = t),
          (n.return = t),
          (n.sibling = r),
          (t.child = n),
          r
        );
      }
      function Jo(e, t) {
        e.lanes |= t;
        var n = e.alternate;
        null !== n && (n.lanes |= t), ti(e.return, t);
      }
      function el(e, t, n, r, a, i) {
        var o = e.memoizedState;
        null === o
          ? (e.memoizedState = {
              isBackwards: t,
              rendering: null,
              renderingStartTime: 0,
              last: r,
              tail: n,
              tailMode: a,
              lastEffect: i,
            })
          : ((o.isBackwards = t),
            (o.rendering = null),
            (o.renderingStartTime = 0),
            (o.last = r),
            (o.tail = n),
            (o.tailMode = a),
            (o.lastEffect = i));
      }
      function tl(e, t, n) {
        var r = t.pendingProps,
          a = r.revealOrder,
          i = r.tail;
        if ((Ro(e, t, r.children, n), 0 !== (2 & (r = Ii.current))))
          (r = (1 & r) | 2), (t.flags |= 64);
        else {
          if (null !== e && 0 !== (64 & e.flags))
            e: for (e = t.child; null !== e; ) {
              if (13 === e.tag) null !== e.memoizedState && Jo(e, n);
              else if (19 === e.tag) Jo(e, n);
              else if (null !== e.child) {
                (e.child.return = e), (e = e.child);
                continue;
              }
              if (e === t) break e;
              for (; null === e.sibling; ) {
                if (null === e.return || e.return === t) break e;
                e = e.return;
              }
              (e.sibling.return = e.return), (e = e.sibling);
            }
          r &= 1;
        }
        if ((sa(Ii, r), 0 === (2 & t.mode))) t.memoizedState = null;
        else
          switch (a) {
            case "forwards":
              for (n = t.child, a = null; null !== n; )
                null !== (e = n.alternate) && null === Ri(e) && (a = n),
                  (n = n.sibling);
              null === (n = a)
                ? ((a = t.child), (t.child = null))
                : ((a = n.sibling), (n.sibling = null)),
                el(t, !1, a, n, i, t.lastEffect);
              break;
            case "backwards":
              for (n = null, a = t.child, t.child = null; null !== a; ) {
                if (null !== (e = a.alternate) && null === Ri(e)) {
                  t.child = a;
                  break;
                }
                (e = a.sibling), (a.sibling = n), (n = a), (a = e);
              }
              el(t, !0, n, null, i, t.lastEffect);
              break;
            case "together":
              el(t, !1, null, null, void 0, t.lastEffect);
              break;
            default:
              t.memoizedState = null;
          }
        return t.child;
      }
      function nl(e, t, n) {
        if (
          (null !== e && (t.dependencies = e.dependencies),
          (jl |= t.lanes),
          0 !== (n & t.childLanes))
        ) {
          if (null !== e && t.child !== e.child) throw Error(o(153));
          if (null !== t.child) {
            for (
              n = Bs((e = t.child), e.pendingProps), t.child = n, n.return = t;
              null !== e.sibling;

            )
              (e = e.sibling),
                ((n = n.sibling = Bs(e, e.pendingProps)).return = t);
            n.sibling = null;
          }
          return t.child;
        }
        return null;
      }
      function rl(e, t) {
        if (!ji)
          switch (e.tailMode) {
            case "hidden":
              t = e.tail;
              for (var n = null; null !== t; )
                null !== t.alternate && (n = t), (t = t.sibling);
              null === n ? (e.tail = null) : (n.sibling = null);
              break;
            case "collapsed":
              n = e.tail;
              for (var r = null; null !== n; )
                null !== n.alternate && (r = n), (n = n.sibling);
              null === r
                ? t || null === e.tail
                  ? (e.tail = null)
                  : (e.tail.sibling = null)
                : (r.sibling = null);
          }
      }
      function al(e, t, n) {
        var r = t.pendingProps;
        switch (t.tag) {
          case 2:
          case 16:
          case 15:
          case 0:
          case 11:
          case 7:
          case 8:
          case 12:
          case 9:
          case 14:
            return null;
          case 1:
            return pa(t.type) && ga(), null;
          case 3:
            return (
              Ti(),
              la(fa),
              la(ca),
              $i(),
              (r = t.stateNode).pendingContext &&
                ((r.context = r.pendingContext), (r.pendingContext = null)),
              (null !== e && null !== e.child) ||
                (Bi(t) ? (t.flags |= 4) : r.hydrate || (t.flags |= 256)),
              null
            );
          case 5:
            Ni(t);
            var i = Ei(Pi.current);
            if (((n = t.type), null !== e && null != t.stateNode))
              $o(e, t, n, r), e.ref !== t.ref && (t.flags |= 128);
            else {
              if (!r) {
                if (null === t.stateNode) throw Error(o(166));
                return null;
              }
              if (((e = Ei(Mi.current)), Bi(t))) {
                (r = t.stateNode), (n = t.type);
                var l = t.memoizedProps;
                switch (((r[Kr] = t), (r[Qr] = l), n)) {
                  case "dialog":
                    Or("cancel", r), Or("close", r);
                    break;
                  case "iframe":
                  case "object":
                  case "embed":
                    Or("load", r);
                    break;
                  case "video":
                  case "audio":
                    for (e = 0; e < kr.length; e++) Or(kr[e], r);
                    break;
                  case "source":
                    Or("error", r);
                    break;
                  case "img":
                  case "image":
                  case "link":
                    Or("error", r), Or("load", r);
                    break;
                  case "details":
                    Or("toggle", r);
                    break;
                  case "input":
                    ee(r, l), Or("invalid", r);
                    break;
                  case "select":
                    (r._wrapperState = { wasMultiple: !!l.multiple }),
                      Or("invalid", r);
                    break;
                  case "textarea":
                    se(r, l), Or("invalid", r);
                }
                for (var u in (Se(n, l), (e = null), l))
                  l.hasOwnProperty(u) &&
                    ((i = l[u]),
                    "children" === u
                      ? "string" === typeof i
                        ? r.textContent !== i && (e = ["children", i])
                        : "number" === typeof i &&
                          r.textContent !== "" + i &&
                          (e = ["children", "" + i])
                      : s.hasOwnProperty(u) &&
                        null != i &&
                        "onScroll" === u &&
                        Or("scroll", r));
                switch (n) {
                  case "input":
                    Q(r), re(r, l, !0);
                    break;
                  case "textarea":
                    Q(r), ce(r);
                    break;
                  case "select":
                  case "option":
                    break;
                  default:
                    "function" === typeof l.onClick && (r.onclick = Fr);
                }
                (r = e), (t.updateQueue = r), null !== r && (t.flags |= 4);
              } else {
                switch (
                  ((u = 9 === i.nodeType ? i : i.ownerDocument),
                  e === fe && (e = he(n)),
                  e === fe
                    ? "script" === n
                      ? (((e = u.createElement("div")).innerHTML =
                          "<script></script>"),
                        (e = e.removeChild(e.firstChild)))
                      : "string" === typeof r.is
                      ? (e = u.createElement(n, { is: r.is }))
                      : ((e = u.createElement(n)),
                        "select" === n &&
                          ((u = e),
                          r.multiple
                            ? (u.multiple = !0)
                            : r.size && (u.size = r.size)))
                    : (e = u.createElementNS(e, n)),
                  (e[Kr] = t),
                  (e[Qr] = r),
                  Uo(e, t),
                  (t.stateNode = e),
                  (u = Ce(n, r)),
                  n)
                ) {
                  case "dialog":
                    Or("cancel", e), Or("close", e), (i = r);
                    break;
                  case "iframe":
                  case "object":
                  case "embed":
                    Or("load", e), (i = r);
                    break;
                  case "video":
                  case "audio":
                    for (i = 0; i < kr.length; i++) Or(kr[i], e);
                    i = r;
                    break;
                  case "source":
                    Or("error", e), (i = r);
                    break;
                  case "img":
                  case "image":
                  case "link":
                    Or("error", e), Or("load", e), (i = r);
                    break;
                  case "details":
                    Or("toggle", e), (i = r);
                    break;
                  case "input":
                    ee(e, r), (i = J(e, r)), Or("invalid", e);
                    break;
                  case "option":
                    i = ie(e, r);
                    break;
                  case "select":
                    (e._wrapperState = { wasMultiple: !!r.multiple }),
                      (i = a({}, r, { value: void 0 })),
                      Or("invalid", e);
                    break;
                  case "textarea":
                    se(e, r), (i = le(e, r)), Or("invalid", e);
                    break;
                  default:
                    i = r;
                }
                Se(n, i);
                var c = i;
                for (l in c)
                  if (c.hasOwnProperty(l)) {
                    var f = c[l];
                    "style" === l
                      ? we(e, f)
                      : "dangerouslySetInnerHTML" === l
                      ? null != (f = f ? f.__html : void 0) && ve(e, f)
                      : "children" === l
                      ? "string" === typeof f
                        ? ("textarea" !== n || "" !== f) && ye(e, f)
                        : "number" === typeof f && ye(e, "" + f)
                      : "suppressContentEditableWarning" !== l &&
                        "suppressHydrationWarning" !== l &&
                        "autoFocus" !== l &&
                        (s.hasOwnProperty(l)
                          ? null != f && "onScroll" === l && Or("scroll", e)
                          : null != f && x(e, l, f, u));
                  }
                switch (n) {
                  case "input":
                    Q(e), re(e, r, !1);
                    break;
                  case "textarea":
                    Q(e), ce(e);
                    break;
                  case "option":
                    null != r.value && e.setAttribute("value", "" + q(r.value));
                    break;
                  case "select":
                    (e.multiple = !!r.multiple),
                      null != (l = r.value)
                        ? oe(e, !!r.multiple, l, !1)
                        : null != r.defaultValue &&
                          oe(e, !!r.multiple, r.defaultValue, !0);
                    break;
                  default:
                    "function" === typeof i.onClick && (e.onclick = Fr);
                }
                Wr(n, r) && (t.flags |= 4);
              }
              null !== t.ref && (t.flags |= 128);
            }
            return null;
          case 6:
            if (e && null != t.stateNode) Go(0, t, e.memoizedProps, r);
            else {
              if ("string" !== typeof r && null === t.stateNode)
                throw Error(o(166));
              (n = Ei(Pi.current)),
                Ei(Mi.current),
                Bi(t)
                  ? ((r = t.stateNode),
                    (n = t.memoizedProps),
                    (r[Kr] = t),
                    r.nodeValue !== n && (t.flags |= 4))
                  : (((r = (9 === n.nodeType
                      ? n
                      : n.ownerDocument
                    ).createTextNode(r))[Kr] = t),
                    (t.stateNode = r));
            }
            return null;
          case 13:
            return (
              la(Ii),
              (r = t.memoizedState),
              0 !== (64 & t.flags)
                ? ((t.lanes = n), t)
                : ((r = null !== r),
                  (n = !1),
                  null === e
                    ? void 0 !== t.memoizedProps.fallback && Bi(t)
                    : (n = null !== e.memoizedState),
                  r &&
                    !n &&
                    0 !== (2 & t.mode) &&
                    ((null === e &&
                      !0 !== t.memoizedProps.unstable_avoidThisFallback) ||
                    0 !== (1 & Ii.current)
                      ? 0 === Rl && (Rl = 3)
                      : ((0 !== Rl && 3 !== Rl) || (Rl = 4),
                        null === Dl ||
                          (0 === (134217727 & jl) && 0 === (134217727 & zl)) ||
                          gs(Dl, Al))),
                  (r || n) && (t.flags |= 4),
                  null)
            );
          case 4:
            return Ti(), null === e && Er(t.stateNode.containerInfo), null;
          case 10:
            return ei(t), null;
          case 17:
            return pa(t.type) && ga(), null;
          case 19:
            if ((la(Ii), null === (r = t.memoizedState))) return null;
            if (((l = 0 !== (64 & t.flags)), null === (u = r.rendering)))
              if (l) rl(r, !1);
              else {
                if (0 !== Rl || (null !== e && 0 !== (64 & e.flags)))
                  for (e = t.child; null !== e; ) {
                    if (null !== (u = Ri(e))) {
                      for (
                        t.flags |= 64,
                          rl(r, !1),
                          null !== (l = u.updateQueue) &&
                            ((t.updateQueue = l), (t.flags |= 4)),
                          null === r.lastEffect && (t.firstEffect = null),
                          t.lastEffect = r.lastEffect,
                          r = n,
                          n = t.child;
                        null !== n;

                      )
                        (e = r),
                          ((l = n).flags &= 2),
                          (l.nextEffect = null),
                          (l.firstEffect = null),
                          (l.lastEffect = null),
                          null === (u = l.alternate)
                            ? ((l.childLanes = 0),
                              (l.lanes = e),
                              (l.child = null),
                              (l.memoizedProps = null),
                              (l.memoizedState = null),
                              (l.updateQueue = null),
                              (l.dependencies = null),
                              (l.stateNode = null))
                            : ((l.childLanes = u.childLanes),
                              (l.lanes = u.lanes),
                              (l.child = u.child),
                              (l.memoizedProps = u.memoizedProps),
                              (l.memoizedState = u.memoizedState),
                              (l.updateQueue = u.updateQueue),
                              (l.type = u.type),
                              (e = u.dependencies),
                              (l.dependencies =
                                null === e
                                  ? null
                                  : {
                                      lanes: e.lanes,
                                      firstContext: e.firstContext,
                                    })),
                          (n = n.sibling);
                      return sa(Ii, (1 & Ii.current) | 2), t.child;
                    }
                    e = e.sibling;
                  }
                null !== r.tail &&
                  Wa() > Bl &&
                  ((t.flags |= 64), (l = !0), rl(r, !1), (t.lanes = 33554432));
              }
            else {
              if (!l)
                if (null !== (e = Ri(u))) {
                  if (
                    ((t.flags |= 64),
                    (l = !0),
                    null !== (n = e.updateQueue) &&
                      ((t.updateQueue = n), (t.flags |= 4)),
                    rl(r, !0),
                    null === r.tail &&
                      "hidden" === r.tailMode &&
                      !u.alternate &&
                      !ji)
                  )
                    return (
                      null !== (t = t.lastEffect = r.lastEffect) &&
                        (t.nextEffect = null),
                      null
                    );
                } else
                  2 * Wa() - r.renderingStartTime > Bl &&
                    1073741824 !== n &&
                    ((t.flags |= 64),
                    (l = !0),
                    rl(r, !1),
                    (t.lanes = 33554432));
              r.isBackwards
                ? ((u.sibling = t.child), (t.child = u))
                : (null !== (n = r.last) ? (n.sibling = u) : (t.child = u),
                  (r.last = u));
            }
            return null !== r.tail
              ? ((n = r.tail),
                (r.rendering = n),
                (r.tail = n.sibling),
                (r.lastEffect = t.lastEffect),
                (r.renderingStartTime = Wa()),
                (n.sibling = null),
                (t = Ii.current),
                sa(Ii, l ? (1 & t) | 2 : 1 & t),
                n)
              : null;
          case 23:
          case 24:
            return (
              xs(),
              null !== e &&
                (null !== e.memoizedState) !== (null !== t.memoizedState) &&
                "unstable-defer-without-hiding" !== r.mode &&
                (t.flags |= 4),
              null
            );
        }
        throw Error(o(156, t.tag));
      }
      function il(e) {
        switch (e.tag) {
          case 1:
            pa(e.type) && ga();
            var t = e.flags;
            return 4096 & t ? ((e.flags = (-4097 & t) | 64), e) : null;
          case 3:
            if ((Ti(), la(fa), la(ca), $i(), 0 !== (64 & (t = e.flags))))
              throw Error(o(285));
            return (e.flags = (-4097 & t) | 64), e;
          case 5:
            return Ni(e), null;
          case 13:
            return (
              la(Ii),
              4096 & (t = e.flags) ? ((e.flags = (-4097 & t) | 64), e) : null
            );
          case 19:
            return la(Ii), null;
          case 4:
            return Ti(), null;
          case 10:
            return ei(e), null;
          case 23:
          case 24:
            return xs(), null;
          default:
            return null;
        }
      }
      function ol(e, t) {
        try {
          var n = "",
            r = t;
          do {
            (n += $(r)), (r = r.return);
          } while (r);
          var a = n;
        } catch (i) {
          a = "\nError generating stack: " + i.message + "\n" + i.stack;
        }
        return { value: e, source: t, stack: a };
      }
      function ll(e, t) {
        try {
          console.error(t.value);
        } catch (n) {
          setTimeout(function () {
            throw n;
          });
        }
      }
      (Uo = function (e, t) {
        for (var n = t.child; null !== n; ) {
          if (5 === n.tag || 6 === n.tag) e.appendChild(n.stateNode);
          else if (4 !== n.tag && null !== n.child) {
            (n.child.return = n), (n = n.child);
            continue;
          }
          if (n === t) break;
          for (; null === n.sibling; ) {
            if (null === n.return || n.return === t) return;
            n = n.return;
          }
          (n.sibling.return = n.return), (n = n.sibling);
        }
      }),
        ($o = function (e, t, n, r) {
          var i = e.memoizedProps;
          if (i !== r) {
            (e = t.stateNode), Ei(Mi.current);
            var o,
              l = null;
            switch (n) {
              case "input":
                (i = J(e, i)), (r = J(e, r)), (l = []);
                break;
              case "option":
                (i = ie(e, i)), (r = ie(e, r)), (l = []);
                break;
              case "select":
                (i = a({}, i, { value: void 0 })),
                  (r = a({}, r, { value: void 0 })),
                  (l = []);
                break;
              case "textarea":
                (i = le(e, i)), (r = le(e, r)), (l = []);
                break;
              default:
                "function" !== typeof i.onClick &&
                  "function" === typeof r.onClick &&
                  (e.onclick = Fr);
            }
            for (f in (Se(n, r), (n = null), i))
              if (!r.hasOwnProperty(f) && i.hasOwnProperty(f) && null != i[f])
                if ("style" === f) {
                  var u = i[f];
                  for (o in u)
                    u.hasOwnProperty(o) && (n || (n = {}), (n[o] = ""));
                } else
                  "dangerouslySetInnerHTML" !== f &&
                    "children" !== f &&
                    "suppressContentEditableWarning" !== f &&
                    "suppressHydrationWarning" !== f &&
                    "autoFocus" !== f &&
                    (s.hasOwnProperty(f)
                      ? l || (l = [])
                      : (l = l || []).push(f, null));
            for (f in r) {
              var c = r[f];
              if (
                ((u = null != i ? i[f] : void 0),
                r.hasOwnProperty(f) && c !== u && (null != c || null != u))
              )
                if ("style" === f)
                  if (u) {
                    for (o in u)
                      !u.hasOwnProperty(o) ||
                        (c && c.hasOwnProperty(o)) ||
                        (n || (n = {}), (n[o] = ""));
                    for (o in c)
                      c.hasOwnProperty(o) &&
                        u[o] !== c[o] &&
                        (n || (n = {}), (n[o] = c[o]));
                  } else n || (l || (l = []), l.push(f, n)), (n = c);
                else
                  "dangerouslySetInnerHTML" === f
                    ? ((c = c ? c.__html : void 0),
                      (u = u ? u.__html : void 0),
                      null != c && u !== c && (l = l || []).push(f, c))
                    : "children" === f
                    ? ("string" !== typeof c && "number" !== typeof c) ||
                      (l = l || []).push(f, "" + c)
                    : "suppressContentEditableWarning" !== f &&
                      "suppressHydrationWarning" !== f &&
                      (s.hasOwnProperty(f)
                        ? (null != c && "onScroll" === f && Or("scroll", e),
                          l || u === c || (l = []))
                        : "object" === typeof c &&
                          null !== c &&
                          c.$$typeof === R
                        ? c.toString()
                        : (l = l || []).push(f, c));
            }
            n && (l = l || []).push("style", n);
            var f = l;
            (t.updateQueue = f) && (t.flags |= 4);
          }
        }),
        (Go = function (e, t, n, r) {
          n !== r && (t.flags |= 4);
        });
      var sl = "function" === typeof WeakMap ? WeakMap : Map;
      function ul(e, t, n) {
        ((n = li(-1, n)).tag = 3), (n.payload = { element: null });
        var r = t.value;
        return (
          (n.callback = function () {
            Gl || ((Gl = !0), (ql = r)), ll(0, t);
          }),
          n
        );
      }
      function cl(e, t, n) {
        (n = li(-1, n)).tag = 3;
        var r = e.type.getDerivedStateFromError;
        if ("function" === typeof r) {
          var a = t.value;
          n.payload = function () {
            return ll(0, t), r(a);
          };
        }
        var i = e.stateNode;
        return (
          null !== i &&
            "function" === typeof i.componentDidCatch &&
            (n.callback = function () {
              "function" !== typeof r &&
                (null === Kl ? (Kl = new Set([this])) : Kl.add(this), ll(0, t));
              var e = t.stack;
              this.componentDidCatch(t.value, {
                componentStack: null !== e ? e : "",
              });
            }),
          n
        );
      }
      var fl = "function" === typeof WeakSet ? WeakSet : Set;
      function dl(e) {
        var t = e.ref;
        if (null !== t)
          if ("function" === typeof t)
            try {
              t(null);
            } catch (n) {
              Fs(e, n);
            }
          else t.current = null;
      }
      function hl(e, t) {
        switch (t.tag) {
          case 0:
          case 11:
          case 15:
          case 22:
            return;
          case 1:
            if (256 & t.flags && null !== e) {
              var n = e.memoizedProps,
                r = e.memoizedState;
              (t = (e = t.stateNode).getSnapshotBeforeUpdate(
                t.elementType === t.type ? n : qa(t.type, n),
                r
              )),
                (e.__reactInternalSnapshotBeforeUpdate = t);
            }
            return;
          case 3:
            return void (256 & t.flags && Hr(t.stateNode.containerInfo));
          case 5:
          case 6:
          case 4:
          case 17:
            return;
        }
        throw Error(o(163));
      }
      function pl(e, t, n) {
        switch (n.tag) {
          case 0:
          case 11:
          case 15:
          case 22:
            if (
              null !== (t = null !== (t = n.updateQueue) ? t.lastEffect : null)
            ) {
              e = t = t.next;
              do {
                if (3 === (3 & e.tag)) {
                  var r = e.create;
                  e.destroy = r();
                }
                e = e.next;
              } while (e !== t);
            }
            if (
              null !== (t = null !== (t = n.updateQueue) ? t.lastEffect : null)
            ) {
              e = t = t.next;
              do {
                var a = e;
                (r = a.next),
                  0 !== (4 & (a = a.tag)) &&
                    0 !== (1 & a) &&
                    (Is(n, e), Ns(n, e)),
                  (e = r);
              } while (e !== t);
            }
            return;
          case 1:
            return (
              (e = n.stateNode),
              4 & n.flags &&
                (null === t
                  ? e.componentDidMount()
                  : ((r =
                      n.elementType === n.type
                        ? t.memoizedProps
                        : qa(n.type, t.memoizedProps)),
                    e.componentDidUpdate(
                      r,
                      t.memoizedState,
                      e.__reactInternalSnapshotBeforeUpdate
                    ))),
              void (null !== (t = n.updateQueue) && fi(n, t, e))
            );
          case 3:
            if (null !== (t = n.updateQueue)) {
              if (((e = null), null !== n.child))
                switch (n.child.tag) {
                  case 5:
                    e = n.child.stateNode;
                    break;
                  case 1:
                    e = n.child.stateNode;
                }
              fi(n, t, e);
            }
            return;
          case 5:
            return (
              (e = n.stateNode),
              void (
                null === t &&
                4 & n.flags &&
                Wr(n.type, n.memoizedProps) &&
                e.focus()
              )
            );
          case 6:
          case 4:
          case 12:
            return;
          case 13:
            return void (
              null === n.memoizedState &&
              ((n = n.alternate),
              null !== n &&
                ((n = n.memoizedState),
                null !== n && ((n = n.dehydrated), null !== n && wt(n))))
            );
          case 19:
          case 17:
          case 20:
          case 21:
          case 23:
          case 24:
            return;
        }
        throw Error(o(163));
      }
      function gl(e, t) {
        for (var n = e; ; ) {
          if (5 === n.tag) {
            var r = n.stateNode;
            if (t)
              "function" === typeof (r = r.style).setProperty
                ? r.setProperty("display", "none", "important")
                : (r.display = "none");
            else {
              r = n.stateNode;
              var a = n.memoizedProps.style;
              (a =
                void 0 !== a && null !== a && a.hasOwnProperty("display")
                  ? a.display
                  : null),
                (r.style.display = _e("display", a));
            }
          } else if (6 === n.tag)
            n.stateNode.nodeValue = t ? "" : n.memoizedProps;
          else if (
            ((23 !== n.tag && 24 !== n.tag) ||
              null === n.memoizedState ||
              n === e) &&
            null !== n.child
          ) {
            (n.child.return = n), (n = n.child);
            continue;
          }
          if (n === e) break;
          for (; null === n.sibling; ) {
            if (null === n.return || n.return === e) return;
            n = n.return;
          }
          (n.sibling.return = n.return), (n = n.sibling);
        }
      }
      function ml(e, t) {
        if (_a && "function" === typeof _a.onCommitFiberUnmount)
          try {
            _a.onCommitFiberUnmount(xa, t);
          } catch (i) {}
        switch (t.tag) {
          case 0:
          case 11:
          case 14:
          case 15:
          case 22:
            if (null !== (e = t.updateQueue) && null !== (e = e.lastEffect)) {
              var n = (e = e.next);
              do {
                var r = n,
                  a = r.destroy;
                if (((r = r.tag), void 0 !== a))
                  if (0 !== (4 & r)) Is(t, n);
                  else {
                    r = t;
                    try {
                      a();
                    } catch (i) {
                      Fs(r, i);
                    }
                  }
                n = n.next;
              } while (n !== e);
            }
            break;
          case 1:
            if (
              (dl(t),
              "function" === typeof (e = t.stateNode).componentWillUnmount)
            )
              try {
                (e.props = t.memoizedProps),
                  (e.state = t.memoizedState),
                  e.componentWillUnmount();
              } catch (i) {
                Fs(t, i);
              }
            break;
          case 5:
            dl(t);
            break;
          case 4:
            wl(e, t);
        }
      }
      function vl(e) {
        (e.alternate = null),
          (e.child = null),
          (e.dependencies = null),
          (e.firstEffect = null),
          (e.lastEffect = null),
          (e.memoizedProps = null),
          (e.memoizedState = null),
          (e.pendingProps = null),
          (e.return = null),
          (e.updateQueue = null);
      }
      function yl(e) {
        return 5 === e.tag || 3 === e.tag || 4 === e.tag;
      }
      function bl(e) {
        e: {
          for (var t = e.return; null !== t; ) {
            if (yl(t)) break e;
            t = t.return;
          }
          throw Error(o(160));
        }
        var n = t;
        switch (((t = n.stateNode), n.tag)) {
          case 5:
            var r = !1;
            break;
          case 3:
          case 4:
            (t = t.containerInfo), (r = !0);
            break;
          default:
            throw Error(o(161));
        }
        16 & n.flags && (ye(t, ""), (n.flags &= -17));
        e: t: for (n = e; ; ) {
          for (; null === n.sibling; ) {
            if (null === n.return || yl(n.return)) {
              n = null;
              break e;
            }
            n = n.return;
          }
          for (
            n.sibling.return = n.return, n = n.sibling;
            5 !== n.tag && 6 !== n.tag && 18 !== n.tag;

          ) {
            if (2 & n.flags) continue t;
            if (null === n.child || 4 === n.tag) continue t;
            (n.child.return = n), (n = n.child);
          }
          if (!(2 & n.flags)) {
            n = n.stateNode;
            break e;
          }
        }
        r ? xl(e, n, t) : _l(e, n, t);
      }
      function xl(e, t, n) {
        var r = e.tag,
          a = 5 === r || 6 === r;
        if (a)
          (e = a ? e.stateNode : e.stateNode.instance),
            t
              ? 8 === n.nodeType
                ? n.parentNode.insertBefore(e, t)
                : n.insertBefore(e, t)
              : (8 === n.nodeType
                  ? (t = n.parentNode).insertBefore(e, n)
                  : (t = n).appendChild(e),
                (null !== (n = n._reactRootContainer) && void 0 !== n) ||
                  null !== t.onclick ||
                  (t.onclick = Fr));
        else if (4 !== r && null !== (e = e.child))
          for (xl(e, t, n), e = e.sibling; null !== e; )
            xl(e, t, n), (e = e.sibling);
      }
      function _l(e, t, n) {
        var r = e.tag,
          a = 5 === r || 6 === r;
        if (a)
          (e = a ? e.stateNode : e.stateNode.instance),
            t ? n.insertBefore(e, t) : n.appendChild(e);
        else if (4 !== r && null !== (e = e.child))
          for (_l(e, t, n), e = e.sibling; null !== e; )
            _l(e, t, n), (e = e.sibling);
      }
      function wl(e, t) {
        for (var n, r, a = t, i = !1; ; ) {
          if (!i) {
            i = a.return;
            e: for (;;) {
              if (null === i) throw Error(o(160));
              switch (((n = i.stateNode), i.tag)) {
                case 5:
                  r = !1;
                  break e;
                case 3:
                case 4:
                  (n = n.containerInfo), (r = !0);
                  break e;
              }
              i = i.return;
            }
            i = !0;
          }
          if (5 === a.tag || 6 === a.tag) {
            e: for (var l = e, s = a, u = s; ; )
              if ((ml(l, u), null !== u.child && 4 !== u.tag))
                (u.child.return = u), (u = u.child);
              else {
                if (u === s) break e;
                for (; null === u.sibling; ) {
                  if (null === u.return || u.return === s) break e;
                  u = u.return;
                }
                (u.sibling.return = u.return), (u = u.sibling);
              }
            r
              ? ((l = n),
                (s = a.stateNode),
                8 === l.nodeType
                  ? l.parentNode.removeChild(s)
                  : l.removeChild(s))
              : n.removeChild(a.stateNode);
          } else if (4 === a.tag) {
            if (null !== a.child) {
              (n = a.stateNode.containerInfo),
                (r = !0),
                (a.child.return = a),
                (a = a.child);
              continue;
            }
          } else if ((ml(e, a), null !== a.child)) {
            (a.child.return = a), (a = a.child);
            continue;
          }
          if (a === t) break;
          for (; null === a.sibling; ) {
            if (null === a.return || a.return === t) return;
            4 === (a = a.return).tag && (i = !1);
          }
          (a.sibling.return = a.return), (a = a.sibling);
        }
      }
      function kl(e, t) {
        switch (t.tag) {
          case 0:
          case 11:
          case 14:
          case 15:
          case 22:
            var n = t.updateQueue;
            if (null !== (n = null !== n ? n.lastEffect : null)) {
              var r = (n = n.next);
              do {
                3 === (3 & r.tag) &&
                  ((e = r.destroy), (r.destroy = void 0), void 0 !== e && e()),
                  (r = r.next);
              } while (r !== n);
            }
            return;
          case 1:
            return;
          case 5:
            if (null != (n = t.stateNode)) {
              r = t.memoizedProps;
              var a = null !== e ? e.memoizedProps : r;
              e = t.type;
              var i = t.updateQueue;
              if (((t.updateQueue = null), null !== i)) {
                for (
                  n[Qr] = r,
                    "input" === e &&
                      "radio" === r.type &&
                      null != r.name &&
                      te(n, r),
                    Ce(e, a),
                    t = Ce(e, r),
                    a = 0;
                  a < i.length;
                  a += 2
                ) {
                  var l = i[a],
                    s = i[a + 1];
                  "style" === l
                    ? we(n, s)
                    : "dangerouslySetInnerHTML" === l
                    ? ve(n, s)
                    : "children" === l
                    ? ye(n, s)
                    : x(n, l, s, t);
                }
                switch (e) {
                  case "input":
                    ne(n, r);
                    break;
                  case "textarea":
                    ue(n, r);
                    break;
                  case "select":
                    (e = n._wrapperState.wasMultiple),
                      (n._wrapperState.wasMultiple = !!r.multiple),
                      null != (i = r.value)
                        ? oe(n, !!r.multiple, i, !1)
                        : e !== !!r.multiple &&
                          (null != r.defaultValue
                            ? oe(n, !!r.multiple, r.defaultValue, !0)
                            : oe(n, !!r.multiple, r.multiple ? [] : "", !1));
                }
              }
            }
            return;
          case 6:
            if (null === t.stateNode) throw Error(o(162));
            return void (t.stateNode.nodeValue = t.memoizedProps);
          case 3:
            return void (
              (n = t.stateNode).hydrate &&
              ((n.hydrate = !1), wt(n.containerInfo))
            );
          case 12:
            return;
          case 13:
            return (
              null !== t.memoizedState && ((Yl = Wa()), gl(t.child, !0)),
              void Sl(t)
            );
          case 19:
            return void Sl(t);
          case 17:
            return;
          case 23:
          case 24:
            return void gl(t, null !== t.memoizedState);
        }
        throw Error(o(163));
      }
      function Sl(e) {
        var t = e.updateQueue;
        if (null !== t) {
          e.updateQueue = null;
          var n = e.stateNode;
          null === n && (n = e.stateNode = new fl()),
            t.forEach(function (t) {
              var r = zs.bind(null, e, t);
              n.has(t) || (n.add(t), t.then(r, r));
            });
        }
      }
      function Cl(e, t) {
        return (
          null !== e &&
          (null === (e = e.memoizedState) || null !== e.dehydrated) &&
          null !== (t = t.memoizedState) &&
          null === t.dehydrated
        );
      }
      var Ml = Math.ceil,
        Ol = _.ReactCurrentDispatcher,
        Pl = _.ReactCurrentOwner,
        El = 0,
        Dl = null,
        Tl = null,
        Al = 0,
        Nl = 0,
        Il = oa(0),
        Rl = 0,
        Ll = null,
        Fl = 0,
        jl = 0,
        zl = 0,
        Wl = 0,
        Vl = null,
        Yl = 0,
        Bl = 1 / 0;
      function Hl() {
        Bl = Wa() + 500;
      }
      var Ul,
        $l = null,
        Gl = !1,
        ql = null,
        Kl = null,
        Ql = !1,
        Zl = null,
        Xl = 90,
        Jl = [],
        es = [],
        ts = null,
        ns = 0,
        rs = null,
        as = -1,
        is = 0,
        os = 0,
        ls = null,
        ss = !1;
      function us() {
        return 0 !== (48 & El) ? Wa() : -1 !== as ? as : (as = Wa());
      }
      function cs(e) {
        if (0 === (2 & (e = e.mode))) return 1;
        if (0 === (4 & e)) return 99 === Va() ? 1 : 2;
        if ((0 === is && (is = Fl), 0 !== Ga.transition)) {
          0 !== os && (os = null !== Vl ? Vl.pendingLanes : 0), (e = is);
          var t = 4186112 & ~os;
          return (
            0 === (t &= -t) &&
              0 === (t = (e = 4186112 & ~e) & -e) &&
              (t = 8192),
            t
          );
        }
        return (
          (e = Va()),
          0 !== (4 & El) && 98 === e
            ? (e = Wt(12, is))
            : (e = Wt(
                (e = (function (e) {
                  switch (e) {
                    case 99:
                      return 15;
                    case 98:
                      return 10;
                    case 97:
                    case 96:
                      return 8;
                    case 95:
                      return 2;
                    default:
                      return 0;
                  }
                })(e)),
                is
              )),
          e
        );
      }
      function fs(e, t, n) {
        if (50 < ns) throw ((ns = 0), (rs = null), Error(o(185)));
        if (null === (e = ds(e, t))) return null;
        Bt(e, t, n), e === Dl && ((zl |= t), 4 === Rl && gs(e, Al));
        var r = Va();
        1 === t
          ? 0 !== (8 & El) && 0 === (48 & El)
            ? ms(e)
            : (hs(e, n), 0 === El && (Hl(), Ua()))
          : (0 === (4 & El) ||
              (98 !== r && 99 !== r) ||
              (null === ts ? (ts = new Set([e])) : ts.add(e)),
            hs(e, n)),
          (Vl = e);
      }
      function ds(e, t) {
        e.lanes |= t;
        var n = e.alternate;
        for (null !== n && (n.lanes |= t), n = e, e = e.return; null !== e; )
          (e.childLanes |= t),
            null !== (n = e.alternate) && (n.childLanes |= t),
            (n = e),
            (e = e.return);
        return 3 === n.tag ? n.stateNode : null;
      }
      function hs(e, t) {
        for (
          var n = e.callbackNode,
            r = e.suspendedLanes,
            a = e.pingedLanes,
            i = e.expirationTimes,
            l = e.pendingLanes;
          0 < l;

        ) {
          var s = 31 - Ht(l),
            u = 1 << s,
            c = i[s];
          if (-1 === c) {
            if (0 === (u & r) || 0 !== (u & a)) {
              (c = t), Ft(u);
              var f = Lt;
              i[s] = 10 <= f ? c + 250 : 6 <= f ? c + 5e3 : -1;
            }
          } else c <= t && (e.expiredLanes |= u);
          l &= ~u;
        }
        if (((r = jt(e, e === Dl ? Al : 0)), (t = Lt), 0 === r))
          null !== n &&
            (n !== Ia && Sa(n),
            (e.callbackNode = null),
            (e.callbackPriority = 0));
        else {
          if (null !== n) {
            if (e.callbackPriority === t) return;
            n !== Ia && Sa(n);
          }
          15 === t
            ? ((n = ms.bind(null, e)),
              null === La ? ((La = [n]), (Fa = ka(Ea, $a))) : La.push(n),
              (n = Ia))
            : 14 === t
            ? (n = Ha(99, ms.bind(null, e)))
            : (n = Ha(
                (n = (function (e) {
                  switch (e) {
                    case 15:
                    case 14:
                      return 99;
                    case 13:
                    case 12:
                    case 11:
                    case 10:
                      return 98;
                    case 9:
                    case 8:
                    case 7:
                    case 6:
                    case 4:
                    case 5:
                      return 97;
                    case 3:
                    case 2:
                    case 1:
                      return 95;
                    case 0:
                      return 90;
                    default:
                      throw Error(o(358, e));
                  }
                })(t)),
                ps.bind(null, e)
              )),
            (e.callbackPriority = t),
            (e.callbackNode = n);
        }
      }
      function ps(e) {
        if (((as = -1), (os = is = 0), 0 !== (48 & El))) throw Error(o(327));
        var t = e.callbackNode;
        if (As() && e.callbackNode !== t) return null;
        var n = jt(e, e === Dl ? Al : 0);
        if (0 === n) return null;
        var r = n,
          a = El;
        El |= 16;
        var i = ks();
        for ((Dl === e && Al === r) || (Hl(), _s(e, r)); ; )
          try {
            Ms();
            break;
          } catch (s) {
            ws(e, s);
          }
        if (
          (Ja(),
          (Ol.current = i),
          (El = a),
          null !== Tl ? (r = 0) : ((Dl = null), (Al = 0), (r = Rl)),
          0 !== (Fl & zl))
        )
          _s(e, 0);
        else if (0 !== r) {
          if (
            (2 === r &&
              ((El |= 64),
              e.hydrate && ((e.hydrate = !1), Hr(e.containerInfo)),
              0 !== (n = zt(e)) && (r = Ss(e, n))),
            1 === r)
          )
            throw ((t = Ll), _s(e, 0), gs(e, n), hs(e, Wa()), t);
          switch (
            ((e.finishedWork = e.current.alternate), (e.finishedLanes = n), r)
          ) {
            case 0:
            case 1:
              throw Error(o(345));
            case 2:
              Es(e);
              break;
            case 3:
              if (
                (gs(e, n), (62914560 & n) === n && 10 < (r = Yl + 500 - Wa()))
              ) {
                if (0 !== jt(e, 0)) break;
                if (((a = e.suspendedLanes) & n) !== n) {
                  us(), (e.pingedLanes |= e.suspendedLanes & a);
                  break;
                }
                e.timeoutHandle = Yr(Es.bind(null, e), r);
                break;
              }
              Es(e);
              break;
            case 4:
              if ((gs(e, n), (4186112 & n) === n)) break;
              for (r = e.eventTimes, a = -1; 0 < n; ) {
                var l = 31 - Ht(n);
                (i = 1 << l), (l = r[l]) > a && (a = l), (n &= ~i);
              }
              if (
                ((n = a),
                10 <
                  (n =
                    (120 > (n = Wa() - n)
                      ? 120
                      : 480 > n
                      ? 480
                      : 1080 > n
                      ? 1080
                      : 1920 > n
                      ? 1920
                      : 3e3 > n
                      ? 3e3
                      : 4320 > n
                      ? 4320
                      : 1960 * Ml(n / 1960)) - n))
              ) {
                e.timeoutHandle = Yr(Es.bind(null, e), n);
                break;
              }
              Es(e);
              break;
            case 5:
              Es(e);
              break;
            default:
              throw Error(o(329));
          }
        }
        return hs(e, Wa()), e.callbackNode === t ? ps.bind(null, e) : null;
      }
      function gs(e, t) {
        for (
          t &= ~Wl,
            t &= ~zl,
            e.suspendedLanes |= t,
            e.pingedLanes &= ~t,
            e = e.expirationTimes;
          0 < t;

        ) {
          var n = 31 - Ht(t),
            r = 1 << n;
          (e[n] = -1), (t &= ~r);
        }
      }
      function ms(e) {
        if (0 !== (48 & El)) throw Error(o(327));
        if ((As(), e === Dl && 0 !== (e.expiredLanes & Al))) {
          var t = Al,
            n = Ss(e, t);
          0 !== (Fl & zl) && (n = Ss(e, (t = jt(e, t))));
        } else n = Ss(e, (t = jt(e, 0)));
        if (
          (0 !== e.tag &&
            2 === n &&
            ((El |= 64),
            e.hydrate && ((e.hydrate = !1), Hr(e.containerInfo)),
            0 !== (t = zt(e)) && (n = Ss(e, t))),
          1 === n)
        )
          throw ((n = Ll), _s(e, 0), gs(e, t), hs(e, Wa()), n);
        return (
          (e.finishedWork = e.current.alternate),
          (e.finishedLanes = t),
          Es(e),
          hs(e, Wa()),
          null
        );
      }
      function vs(e, t) {
        var n = El;
        El |= 1;
        try {
          return e(t);
        } finally {
          0 === (El = n) && (Hl(), Ua());
        }
      }
      function ys(e, t) {
        var n = El;
        (El &= -2), (El |= 8);
        try {
          return e(t);
        } finally {
          0 === (El = n) && (Hl(), Ua());
        }
      }
      function bs(e, t) {
        sa(Il, Nl), (Nl |= t), (Fl |= t);
      }
      function xs() {
        (Nl = Il.current), la(Il);
      }
      function _s(e, t) {
        (e.finishedWork = null), (e.finishedLanes = 0);
        var n = e.timeoutHandle;
        if ((-1 !== n && ((e.timeoutHandle = -1), Br(n)), null !== Tl))
          for (n = Tl.return; null !== n; ) {
            var r = n;
            switch (r.tag) {
              case 1:
                null !== (r = r.type.childContextTypes) && void 0 !== r && ga();
                break;
              case 3:
                Ti(), la(fa), la(ca), $i();
                break;
              case 5:
                Ni(r);
                break;
              case 4:
                Ti();
                break;
              case 13:
              case 19:
                la(Ii);
                break;
              case 10:
                ei(r);
                break;
              case 23:
              case 24:
                xs();
            }
            n = n.return;
          }
        (Dl = e),
          (Tl = Bs(e.current, null)),
          (Al = Nl = Fl = t),
          (Rl = 0),
          (Ll = null),
          (Wl = zl = jl = 0);
      }
      function ws(e, t) {
        for (;;) {
          var n = Tl;
          try {
            if ((Ja(), (Gi.current = Eo), Ji)) {
              for (var r = Qi.memoizedState; null !== r; ) {
                var a = r.queue;
                null !== a && (a.pending = null), (r = r.next);
              }
              Ji = !1;
            }
            if (
              ((Ki = 0),
              (Xi = Zi = Qi = null),
              (eo = !1),
              (Pl.current = null),
              null === n || null === n.return)
            ) {
              (Rl = 1), (Ll = t), (Tl = null);
              break;
            }
            e: {
              var i = e,
                o = n.return,
                l = n,
                s = t;
              if (
                ((t = Al),
                (l.flags |= 2048),
                (l.firstEffect = l.lastEffect = null),
                null !== s &&
                  "object" === typeof s &&
                  "function" === typeof s.then)
              ) {
                var u = s;
                if (0 === (2 & l.mode)) {
                  var c = l.alternate;
                  c
                    ? ((l.updateQueue = c.updateQueue),
                      (l.memoizedState = c.memoizedState),
                      (l.lanes = c.lanes))
                    : ((l.updateQueue = null), (l.memoizedState = null));
                }
                var f = 0 !== (1 & Ii.current),
                  d = o;
                do {
                  var h;
                  if ((h = 13 === d.tag)) {
                    var p = d.memoizedState;
                    if (null !== p) h = null !== p.dehydrated;
                    else {
                      var g = d.memoizedProps;
                      h =
                        void 0 !== g.fallback &&
                        (!0 !== g.unstable_avoidThisFallback || !f);
                    }
                  }
                  if (h) {
                    var m = d.updateQueue;
                    if (null === m) {
                      var v = new Set();
                      v.add(u), (d.updateQueue = v);
                    } else m.add(u);
                    if (0 === (2 & d.mode)) {
                      if (
                        ((d.flags |= 64),
                        (l.flags |= 16384),
                        (l.flags &= -2981),
                        1 === l.tag)
                      )
                        if (null === l.alternate) l.tag = 17;
                        else {
                          var y = li(-1, 1);
                          (y.tag = 2), si(l, y);
                        }
                      l.lanes |= 1;
                      break e;
                    }
                    (s = void 0), (l = t);
                    var b = i.pingCache;
                    if (
                      (null === b
                        ? ((b = i.pingCache = new sl()),
                          (s = new Set()),
                          b.set(u, s))
                        : void 0 === (s = b.get(u)) &&
                          ((s = new Set()), b.set(u, s)),
                      !s.has(l))
                    ) {
                      s.add(l);
                      var x = js.bind(null, i, u, l);
                      u.then(x, x);
                    }
                    (d.flags |= 4096), (d.lanes = t);
                    break e;
                  }
                  d = d.return;
                } while (null !== d);
                s = Error(
                  (G(l.type) || "A React component") +
                    " suspended while rendering, but no fallback UI was specified.\n\nAdd a <Suspense fallback=...> component higher in the tree to provide a loading indicator or placeholder to display."
                );
              }
              5 !== Rl && (Rl = 2), (s = ol(s, l)), (d = o);
              do {
                switch (d.tag) {
                  case 3:
                    (i = s),
                      (d.flags |= 4096),
                      (t &= -t),
                      (d.lanes |= t),
                      ui(d, ul(0, i, t));
                    break e;
                  case 1:
                    i = s;
                    var _ = d.type,
                      w = d.stateNode;
                    if (
                      0 === (64 & d.flags) &&
                      ("function" === typeof _.getDerivedStateFromError ||
                        (null !== w &&
                          "function" === typeof w.componentDidCatch &&
                          (null === Kl || !Kl.has(w))))
                    ) {
                      (d.flags |= 4096),
                        (t &= -t),
                        (d.lanes |= t),
                        ui(d, cl(d, i, t));
                      break e;
                    }
                }
                d = d.return;
              } while (null !== d);
            }
            Ps(n);
          } catch (k) {
            (t = k), Tl === n && null !== n && (Tl = n = n.return);
            continue;
          }
          break;
        }
      }
      function ks() {
        var e = Ol.current;
        return (Ol.current = Eo), null === e ? Eo : e;
      }
      function Ss(e, t) {
        var n = El;
        El |= 16;
        var r = ks();
        for ((Dl === e && Al === t) || _s(e, t); ; )
          try {
            Cs();
            break;
          } catch (a) {
            ws(e, a);
          }
        if ((Ja(), (El = n), (Ol.current = r), null !== Tl))
          throw Error(o(261));
        return (Dl = null), (Al = 0), Rl;
      }
      function Cs() {
        for (; null !== Tl; ) Os(Tl);
      }
      function Ms() {
        for (; null !== Tl && !Ca(); ) Os(Tl);
      }
      function Os(e) {
        var t = Ul(e.alternate, e, Nl);
        (e.memoizedProps = e.pendingProps),
          null === t ? Ps(e) : (Tl = t),
          (Pl.current = null);
      }
      function Ps(e) {
        var t = e;
        do {
          var n = t.alternate;
          if (((e = t.return), 0 === (2048 & t.flags))) {
            if (null !== (n = al(n, t, Nl))) return void (Tl = n);
            if (
              (24 !== (n = t).tag && 23 !== n.tag) ||
              null === n.memoizedState ||
              0 !== (1073741824 & Nl) ||
              0 === (4 & n.mode)
            ) {
              for (var r = 0, a = n.child; null !== a; )
                (r |= a.lanes | a.childLanes), (a = a.sibling);
              n.childLanes = r;
            }
            null !== e &&
              0 === (2048 & e.flags) &&
              (null === e.firstEffect && (e.firstEffect = t.firstEffect),
              null !== t.lastEffect &&
                (null !== e.lastEffect &&
                  (e.lastEffect.nextEffect = t.firstEffect),
                (e.lastEffect = t.lastEffect)),
              1 < t.flags &&
                (null !== e.lastEffect
                  ? (e.lastEffect.nextEffect = t)
                  : (e.firstEffect = t),
                (e.lastEffect = t)));
          } else {
            if (null !== (n = il(t))) return (n.flags &= 2047), void (Tl = n);
            null !== e &&
              ((e.firstEffect = e.lastEffect = null), (e.flags |= 2048));
          }
          if (null !== (t = t.sibling)) return void (Tl = t);
          Tl = t = e;
        } while (null !== t);
        0 === Rl && (Rl = 5);
      }
      function Es(e) {
        var t = Va();
        return Ba(99, Ds.bind(null, e, t)), null;
      }
      function Ds(e, t) {
        do {
          As();
        } while (null !== Zl);
        if (0 !== (48 & El)) throw Error(o(327));
        var n = e.finishedWork;
        if (null === n) return null;
        if (((e.finishedWork = null), (e.finishedLanes = 0), n === e.current))
          throw Error(o(177));
        e.callbackNode = null;
        var r = n.lanes | n.childLanes,
          a = r,
          i = e.pendingLanes & ~a;
        (e.pendingLanes = a),
          (e.suspendedLanes = 0),
          (e.pingedLanes = 0),
          (e.expiredLanes &= a),
          (e.mutableReadLanes &= a),
          (e.entangledLanes &= a),
          (a = e.entanglements);
        for (var l = e.eventTimes, s = e.expirationTimes; 0 < i; ) {
          var u = 31 - Ht(i),
            c = 1 << u;
          (a[u] = 0), (l[u] = -1), (s[u] = -1), (i &= ~c);
        }
        if (
          (null !== ts && 0 === (24 & r) && ts.has(e) && ts.delete(e),
          e === Dl && ((Tl = Dl = null), (Al = 0)),
          1 < n.flags
            ? null !== n.lastEffect
              ? ((n.lastEffect.nextEffect = n), (r = n.firstEffect))
              : (r = n)
            : (r = n.firstEffect),
          null !== r)
        ) {
          if (
            ((a = El),
            (El |= 32),
            (Pl.current = null),
            (jr = Kt),
            pr((l = hr())))
          ) {
            if ("selectionStart" in l)
              s = { start: l.selectionStart, end: l.selectionEnd };
            else
              e: if (
                ((s = ((s = l.ownerDocument) && s.defaultView) || window),
                (c = s.getSelection && s.getSelection()) && 0 !== c.rangeCount)
              ) {
                (s = c.anchorNode),
                  (i = c.anchorOffset),
                  (u = c.focusNode),
                  (c = c.focusOffset);
                try {
                  s.nodeType, u.nodeType;
                } catch (M) {
                  s = null;
                  break e;
                }
                var f = 0,
                  d = -1,
                  h = -1,
                  p = 0,
                  g = 0,
                  m = l,
                  v = null;
                t: for (;;) {
                  for (
                    var y;
                    m !== s || (0 !== i && 3 !== m.nodeType) || (d = f + i),
                      m !== u || (0 !== c && 3 !== m.nodeType) || (h = f + c),
                      3 === m.nodeType && (f += m.nodeValue.length),
                      null !== (y = m.firstChild);

                  )
                    (v = m), (m = y);
                  for (;;) {
                    if (m === l) break t;
                    if (
                      (v === s && ++p === i && (d = f),
                      v === u && ++g === c && (h = f),
                      null !== (y = m.nextSibling))
                    )
                      break;
                    v = (m = v).parentNode;
                  }
                  m = y;
                }
                s = -1 === d || -1 === h ? null : { start: d, end: h };
              } else s = null;
            s = s || { start: 0, end: 0 };
          } else s = null;
          (zr = { focusedElem: l, selectionRange: s }),
            (Kt = !1),
            (ls = null),
            (ss = !1),
            ($l = r);
          do {
            try {
              Ts();
            } catch (M) {
              if (null === $l) throw Error(o(330));
              Fs($l, M), ($l = $l.nextEffect);
            }
          } while (null !== $l);
          (ls = null), ($l = r);
          do {
            try {
              for (l = e; null !== $l; ) {
                var b = $l.flags;
                if ((16 & b && ye($l.stateNode, ""), 128 & b)) {
                  var x = $l.alternate;
                  if (null !== x) {
                    var _ = x.ref;
                    null !== _ &&
                      ("function" === typeof _ ? _(null) : (_.current = null));
                  }
                }
                switch (1038 & b) {
                  case 2:
                    bl($l), ($l.flags &= -3);
                    break;
                  case 6:
                    bl($l), ($l.flags &= -3), kl($l.alternate, $l);
                    break;
                  case 1024:
                    $l.flags &= -1025;
                    break;
                  case 1028:
                    ($l.flags &= -1025), kl($l.alternate, $l);
                    break;
                  case 4:
                    kl($l.alternate, $l);
                    break;
                  case 8:
                    wl(l, (s = $l));
                    var w = s.alternate;
                    vl(s), null !== w && vl(w);
                }
                $l = $l.nextEffect;
              }
            } catch (M) {
              if (null === $l) throw Error(o(330));
              Fs($l, M), ($l = $l.nextEffect);
            }
          } while (null !== $l);
          if (
            ((_ = zr),
            (x = hr()),
            (b = _.focusedElem),
            (l = _.selectionRange),
            x !== b &&
              b &&
              b.ownerDocument &&
              dr(b.ownerDocument.documentElement, b))
          ) {
            null !== l &&
              pr(b) &&
              ((x = l.start),
              void 0 === (_ = l.end) && (_ = x),
              "selectionStart" in b
                ? ((b.selectionStart = x),
                  (b.selectionEnd = Math.min(_, b.value.length)))
                : (_ =
                    ((x = b.ownerDocument || document) && x.defaultView) ||
                    window).getSelection &&
                  ((_ = _.getSelection()),
                  (s = b.textContent.length),
                  (w = Math.min(l.start, s)),
                  (l = void 0 === l.end ? w : Math.min(l.end, s)),
                  !_.extend && w > l && ((s = l), (l = w), (w = s)),
                  (s = fr(b, w)),
                  (i = fr(b, l)),
                  s &&
                    i &&
                    (1 !== _.rangeCount ||
                      _.anchorNode !== s.node ||
                      _.anchorOffset !== s.offset ||
                      _.focusNode !== i.node ||
                      _.focusOffset !== i.offset) &&
                    ((x = x.createRange()).setStart(s.node, s.offset),
                    _.removeAllRanges(),
                    w > l
                      ? (_.addRange(x), _.extend(i.node, i.offset))
                      : (x.setEnd(i.node, i.offset), _.addRange(x))))),
              (x = []);
            for (_ = b; (_ = _.parentNode); )
              1 === _.nodeType &&
                x.push({ element: _, left: _.scrollLeft, top: _.scrollTop });
            for (
              "function" === typeof b.focus && b.focus(), b = 0;
              b < x.length;
              b++
            )
              ((_ = x[b]).element.scrollLeft = _.left),
                (_.element.scrollTop = _.top);
          }
          (Kt = !!jr), (zr = jr = null), (e.current = n), ($l = r);
          do {
            try {
              for (b = e; null !== $l; ) {
                var k = $l.flags;
                if ((36 & k && pl(b, $l.alternate, $l), 128 & k)) {
                  x = void 0;
                  var S = $l.ref;
                  if (null !== S) {
                    var C = $l.stateNode;
                    switch ($l.tag) {
                      case 5:
                        x = C;
                        break;
                      default:
                        x = C;
                    }
                    "function" === typeof S ? S(x) : (S.current = x);
                  }
                }
                $l = $l.nextEffect;
              }
            } catch (M) {
              if (null === $l) throw Error(o(330));
              Fs($l, M), ($l = $l.nextEffect);
            }
          } while (null !== $l);
          ($l = null), Ra(), (El = a);
        } else e.current = n;
        if (Ql) (Ql = !1), (Zl = e), (Xl = t);
        else
          for ($l = r; null !== $l; )
            (t = $l.nextEffect),
              ($l.nextEffect = null),
              8 & $l.flags && (((k = $l).sibling = null), (k.stateNode = null)),
              ($l = t);
        if (
          (0 === (r = e.pendingLanes) && (Kl = null),
          1 === r ? (e === rs ? ns++ : ((ns = 0), (rs = e))) : (ns = 0),
          (n = n.stateNode),
          _a && "function" === typeof _a.onCommitFiberRoot)
        )
          try {
            _a.onCommitFiberRoot(xa, n, void 0, 64 === (64 & n.current.flags));
          } catch (M) {}
        if ((hs(e, Wa()), Gl)) throw ((Gl = !1), (e = ql), (ql = null), e);
        return 0 !== (8 & El) || Ua(), null;
      }
      function Ts() {
        for (; null !== $l; ) {
          var e = $l.alternate;
          ss ||
            null === ls ||
            (0 !== (8 & $l.flags)
              ? et($l, ls) && (ss = !0)
              : 13 === $l.tag && Cl(e, $l) && et($l, ls) && (ss = !0));
          var t = $l.flags;
          0 !== (256 & t) && hl(e, $l),
            0 === (512 & t) ||
              Ql ||
              ((Ql = !0),
              Ha(97, function () {
                return As(), null;
              })),
            ($l = $l.nextEffect);
        }
      }
      function As() {
        if (90 !== Xl) {
          var e = 97 < Xl ? 97 : Xl;
          return (Xl = 90), Ba(e, Rs);
        }
        return !1;
      }
      function Ns(e, t) {
        Jl.push(t, e),
          Ql ||
            ((Ql = !0),
            Ha(97, function () {
              return As(), null;
            }));
      }
      function Is(e, t) {
        es.push(t, e),
          Ql ||
            ((Ql = !0),
            Ha(97, function () {
              return As(), null;
            }));
      }
      function Rs() {
        if (null === Zl) return !1;
        var e = Zl;
        if (((Zl = null), 0 !== (48 & El))) throw Error(o(331));
        var t = El;
        El |= 32;
        var n = es;
        es = [];
        for (var r = 0; r < n.length; r += 2) {
          var a = n[r],
            i = n[r + 1],
            l = a.destroy;
          if (((a.destroy = void 0), "function" === typeof l))
            try {
              l();
            } catch (u) {
              if (null === i) throw Error(o(330));
              Fs(i, u);
            }
        }
        for (n = Jl, Jl = [], r = 0; r < n.length; r += 2) {
          (a = n[r]), (i = n[r + 1]);
          try {
            var s = a.create;
            a.destroy = s();
          } catch (u) {
            if (null === i) throw Error(o(330));
            Fs(i, u);
          }
        }
        for (s = e.current.firstEffect; null !== s; )
          (e = s.nextEffect),
            (s.nextEffect = null),
            8 & s.flags && ((s.sibling = null), (s.stateNode = null)),
            (s = e);
        return (El = t), Ua(), !0;
      }
      function Ls(e, t, n) {
        si(e, (t = ul(0, (t = ol(n, t)), 1))),
          (t = us()),
          null !== (e = ds(e, 1)) && (Bt(e, 1, t), hs(e, t));
      }
      function Fs(e, t) {
        if (3 === e.tag) Ls(e, e, t);
        else
          for (var n = e.return; null !== n; ) {
            if (3 === n.tag) {
              Ls(n, e, t);
              break;
            }
            if (1 === n.tag) {
              var r = n.stateNode;
              if (
                "function" === typeof n.type.getDerivedStateFromError ||
                ("function" === typeof r.componentDidCatch &&
                  (null === Kl || !Kl.has(r)))
              ) {
                var a = cl(n, (e = ol(t, e)), 1);
                if ((si(n, a), (a = us()), null !== (n = ds(n, 1))))
                  Bt(n, 1, a), hs(n, a);
                else if (
                  "function" === typeof r.componentDidCatch &&
                  (null === Kl || !Kl.has(r))
                )
                  try {
                    r.componentDidCatch(t, e);
                  } catch (i) {}
                break;
              }
            }
            n = n.return;
          }
      }
      function js(e, t, n) {
        var r = e.pingCache;
        null !== r && r.delete(t),
          (t = us()),
          (e.pingedLanes |= e.suspendedLanes & n),
          Dl === e &&
            (Al & n) === n &&
            (4 === Rl || (3 === Rl && (62914560 & Al) === Al && 500 > Wa() - Yl)
              ? _s(e, 0)
              : (Wl |= n)),
          hs(e, t);
      }
      function zs(e, t) {
        var n = e.stateNode;
        null !== n && n.delete(t),
          0 === (t = 0) &&
            (0 === (2 & (t = e.mode))
              ? (t = 1)
              : 0 === (4 & t)
              ? (t = 99 === Va() ? 1 : 2)
              : (0 === is && (is = Fl),
                0 === (t = Vt(62914560 & ~is)) && (t = 4194304))),
          (n = us()),
          null !== (e = ds(e, t)) && (Bt(e, t, n), hs(e, n));
      }
      function Ws(e, t, n, r) {
        (this.tag = e),
          (this.key = n),
          (this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null),
          (this.index = 0),
          (this.ref = null),
          (this.pendingProps = t),
          (this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null),
          (this.mode = r),
          (this.flags = 0),
          (this.lastEffect = this.firstEffect = this.nextEffect = null),
          (this.childLanes = this.lanes = 0),
          (this.alternate = null);
      }
      function Vs(e, t, n, r) {
        return new Ws(e, t, n, r);
      }
      function Ys(e) {
        return !(!(e = e.prototype) || !e.isReactComponent);
      }
      function Bs(e, t) {
        var n = e.alternate;
        return (
          null === n
            ? (((n = Vs(e.tag, t, e.key, e.mode)).elementType = e.elementType),
              (n.type = e.type),
              (n.stateNode = e.stateNode),
              (n.alternate = e),
              (e.alternate = n))
            : ((n.pendingProps = t),
              (n.type = e.type),
              (n.flags = 0),
              (n.nextEffect = null),
              (n.firstEffect = null),
              (n.lastEffect = null)),
          (n.childLanes = e.childLanes),
          (n.lanes = e.lanes),
          (n.child = e.child),
          (n.memoizedProps = e.memoizedProps),
          (n.memoizedState = e.memoizedState),
          (n.updateQueue = e.updateQueue),
          (t = e.dependencies),
          (n.dependencies =
            null === t
              ? null
              : { lanes: t.lanes, firstContext: t.firstContext }),
          (n.sibling = e.sibling),
          (n.index = e.index),
          (n.ref = e.ref),
          n
        );
      }
      function Hs(e, t, n, r, a, i) {
        var l = 2;
        if (((r = e), "function" === typeof e)) Ys(e) && (l = 1);
        else if ("string" === typeof e) l = 5;
        else
          e: switch (e) {
            case S:
              return Us(n.children, a, i, t);
            case L:
              (l = 8), (a |= 16);
              break;
            case C:
              (l = 8), (a |= 1);
              break;
            case M:
              return (
                ((e = Vs(12, n, t, 8 | a)).elementType = M),
                (e.type = M),
                (e.lanes = i),
                e
              );
            case D:
              return (
                ((e = Vs(13, n, t, a)).type = D),
                (e.elementType = D),
                (e.lanes = i),
                e
              );
            case T:
              return ((e = Vs(19, n, t, a)).elementType = T), (e.lanes = i), e;
            case F:
              return $s(n, a, i, t);
            case j:
              return ((e = Vs(24, n, t, a)).elementType = j), (e.lanes = i), e;
            default:
              if ("object" === typeof e && null !== e)
                switch (e.$$typeof) {
                  case O:
                    l = 10;
                    break e;
                  case P:
                    l = 9;
                    break e;
                  case E:
                    l = 11;
                    break e;
                  case A:
                    l = 14;
                    break e;
                  case N:
                    (l = 16), (r = null);
                    break e;
                  case I:
                    l = 22;
                    break e;
                }
              throw Error(o(130, null == e ? e : typeof e, ""));
          }
        return (
          ((t = Vs(l, n, t, a)).elementType = e), (t.type = r), (t.lanes = i), t
        );
      }
      function Us(e, t, n, r) {
        return ((e = Vs(7, e, r, t)).lanes = n), e;
      }
      function $s(e, t, n, r) {
        return ((e = Vs(23, e, r, t)).elementType = F), (e.lanes = n), e;
      }
      function Gs(e, t, n) {
        return ((e = Vs(6, e, null, t)).lanes = n), e;
      }
      function qs(e, t, n) {
        return (
          ((t = Vs(
            4,
            null !== e.children ? e.children : [],
            e.key,
            t
          )).lanes = n),
          (t.stateNode = {
            containerInfo: e.containerInfo,
            pendingChildren: null,
            implementation: e.implementation,
          }),
          t
        );
      }
      function Ks(e, t, n) {
        (this.tag = t),
          (this.containerInfo = e),
          (this.finishedWork = this.pingCache = this.current = this.pendingChildren = null),
          (this.timeoutHandle = -1),
          (this.pendingContext = this.context = null),
          (this.hydrate = n),
          (this.callbackNode = null),
          (this.callbackPriority = 0),
          (this.eventTimes = Yt(0)),
          (this.expirationTimes = Yt(-1)),
          (this.entangledLanes = this.finishedLanes = this.mutableReadLanes = this.expiredLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0),
          (this.entanglements = Yt(0)),
          (this.mutableSourceEagerHydrationData = null);
      }
      function Qs(e, t, n) {
        var r =
          3 < arguments.length && void 0 !== arguments[3] ? arguments[3] : null;
        return {
          $$typeof: k,
          key: null == r ? null : "" + r,
          children: e,
          containerInfo: t,
          implementation: n,
        };
      }
      function Zs(e, t, n, r) {
        var a = t.current,
          i = us(),
          l = cs(a);
        e: if (n) {
          t: {
            if (Qe((n = n._reactInternals)) !== n || 1 !== n.tag)
              throw Error(o(170));
            var s = n;
            do {
              switch (s.tag) {
                case 3:
                  s = s.stateNode.context;
                  break t;
                case 1:
                  if (pa(s.type)) {
                    s = s.stateNode.__reactInternalMemoizedMergedChildContext;
                    break t;
                  }
              }
              s = s.return;
            } while (null !== s);
            throw Error(o(171));
          }
          if (1 === n.tag) {
            var u = n.type;
            if (pa(u)) {
              n = va(n, u, s);
              break e;
            }
          }
          n = s;
        } else n = ua;
        return (
          null === t.context ? (t.context = n) : (t.pendingContext = n),
          ((t = li(i, l)).payload = { element: e }),
          null !== (r = void 0 === r ? null : r) && (t.callback = r),
          si(a, t),
          fs(a, l, i),
          l
        );
      }
      function Xs(e) {
        if (!(e = e.current).child) return null;
        switch (e.child.tag) {
          case 5:
          default:
            return e.child.stateNode;
        }
      }
      function Js(e, t) {
        if (null !== (e = e.memoizedState) && null !== e.dehydrated) {
          var n = e.retryLane;
          e.retryLane = 0 !== n && n < t ? n : t;
        }
      }
      function eu(e, t) {
        Js(e, t), (e = e.alternate) && Js(e, t);
      }
      function tu(e, t, n) {
        var r =
          (null != n &&
            null != n.hydrationOptions &&
            n.hydrationOptions.mutableSources) ||
          null;
        if (
          ((n = new Ks(e, t, null != n && !0 === n.hydrate)),
          (t = Vs(3, null, null, 2 === t ? 7 : 1 === t ? 3 : 0)),
          (n.current = t),
          (t.stateNode = n),
          ii(t),
          (e[Zr] = n.current),
          Er(8 === e.nodeType ? e.parentNode : e),
          r)
        )
          for (e = 0; e < r.length; e++) {
            var a = (t = r[e])._getVersion;
            (a = a(t._source)),
              null == n.mutableSourceEagerHydrationData
                ? (n.mutableSourceEagerHydrationData = [t, a])
                : n.mutableSourceEagerHydrationData.push(t, a);
          }
        this._internalRoot = n;
      }
      function nu(e) {
        return !(
          !e ||
          (1 !== e.nodeType &&
            9 !== e.nodeType &&
            11 !== e.nodeType &&
            (8 !== e.nodeType ||
              " react-mount-point-unstable " !== e.nodeValue))
        );
      }
      function ru(e, t, n, r, a) {
        var i = n._reactRootContainer;
        if (i) {
          var o = i._internalRoot;
          if ("function" === typeof a) {
            var l = a;
            a = function () {
              var e = Xs(o);
              l.call(e);
            };
          }
          Zs(t, o, e, a);
        } else {
          if (
            ((i = n._reactRootContainer = (function (e, t) {
              if (
                (t ||
                  (t = !(
                    !(t = e
                      ? 9 === e.nodeType
                        ? e.documentElement
                        : e.firstChild
                      : null) ||
                    1 !== t.nodeType ||
                    !t.hasAttribute("data-reactroot")
                  )),
                !t)
              )
                for (var n; (n = e.lastChild); ) e.removeChild(n);
              return new tu(e, 0, t ? { hydrate: !0 } : void 0);
            })(n, r)),
            (o = i._internalRoot),
            "function" === typeof a)
          ) {
            var s = a;
            a = function () {
              var e = Xs(o);
              s.call(e);
            };
          }
          ys(function () {
            Zs(t, o, e, a);
          });
        }
        return Xs(o);
      }
      function au(e, t) {
        var n =
          2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : null;
        if (!nu(t)) throw Error(o(200));
        return Qs(e, t, null, n);
      }
      (Ul = function (e, t, n) {
        var r = t.lanes;
        if (null !== e)
          if (e.memoizedProps !== t.pendingProps || fa.current) Io = !0;
          else {
            if (0 === (n & r)) {
              switch (((Io = !1), t.tag)) {
                case 3:
                  Ho(t), Hi();
                  break;
                case 5:
                  Ai(t);
                  break;
                case 1:
                  pa(t.type) && ya(t);
                  break;
                case 4:
                  Di(t, t.stateNode.containerInfo);
                  break;
                case 10:
                  r = t.memoizedProps.value;
                  var a = t.type._context;
                  sa(Ka, a._currentValue), (a._currentValue = r);
                  break;
                case 13:
                  if (null !== t.memoizedState)
                    return 0 !== (n & t.child.childLanes)
                      ? Ko(e, t, n)
                      : (sa(Ii, 1 & Ii.current),
                        null !== (t = nl(e, t, n)) ? t.sibling : null);
                  sa(Ii, 1 & Ii.current);
                  break;
                case 19:
                  if (((r = 0 !== (n & t.childLanes)), 0 !== (64 & e.flags))) {
                    if (r) return tl(e, t, n);
                    t.flags |= 64;
                  }
                  if (
                    (null !== (a = t.memoizedState) &&
                      ((a.rendering = null),
                      (a.tail = null),
                      (a.lastEffect = null)),
                    sa(Ii, Ii.current),
                    r)
                  )
                    break;
                  return null;
                case 23:
                case 24:
                  return (t.lanes = 0), zo(e, t, n);
              }
              return nl(e, t, n);
            }
            Io = 0 !== (16384 & e.flags);
          }
        else Io = !1;
        switch (((t.lanes = 0), t.tag)) {
          case 2:
            if (
              ((r = t.type),
              null !== e &&
                ((e.alternate = null), (t.alternate = null), (t.flags |= 2)),
              (e = t.pendingProps),
              (a = ha(t, ca.current)),
              ni(t, n),
              (a = ro(null, t, r, e, a, n)),
              (t.flags |= 1),
              "object" === typeof a &&
                null !== a &&
                "function" === typeof a.render &&
                void 0 === a.$$typeof)
            ) {
              if (
                ((t.tag = 1),
                (t.memoizedState = null),
                (t.updateQueue = null),
                pa(r))
              ) {
                var i = !0;
                ya(t);
              } else i = !1;
              (t.memoizedState =
                null !== a.state && void 0 !== a.state ? a.state : null),
                ii(t);
              var l = r.getDerivedStateFromProps;
              "function" === typeof l && hi(t, r, l, e),
                (a.updater = pi),
                (t.stateNode = a),
                (a._reactInternals = t),
                yi(t, r, e, n),
                (t = Bo(null, t, r, !0, i, n));
            } else (t.tag = 0), Ro(null, t, a, n), (t = t.child);
            return t;
          case 16:
            a = t.elementType;
            e: {
              switch (
                (null !== e &&
                  ((e.alternate = null), (t.alternate = null), (t.flags |= 2)),
                (e = t.pendingProps),
                (a = (i = a._init)(a._payload)),
                (t.type = a),
                (i = t.tag = (function (e) {
                  if ("function" === typeof e) return Ys(e) ? 1 : 0;
                  if (void 0 !== e && null !== e) {
                    if ((e = e.$$typeof) === E) return 11;
                    if (e === A) return 14;
                  }
                  return 2;
                })(a)),
                (e = qa(a, e)),
                i)
              ) {
                case 0:
                  t = Vo(null, t, a, e, n);
                  break e;
                case 1:
                  t = Yo(null, t, a, e, n);
                  break e;
                case 11:
                  t = Lo(null, t, a, e, n);
                  break e;
                case 14:
                  t = Fo(null, t, a, qa(a.type, e), r, n);
                  break e;
              }
              throw Error(o(306, a, ""));
            }
            return t;
          case 0:
            return (
              (r = t.type),
              (a = t.pendingProps),
              Vo(e, t, r, (a = t.elementType === r ? a : qa(r, a)), n)
            );
          case 1:
            return (
              (r = t.type),
              (a = t.pendingProps),
              Yo(e, t, r, (a = t.elementType === r ? a : qa(r, a)), n)
            );
          case 3:
            if ((Ho(t), (r = t.updateQueue), null === e || null === r))
              throw Error(o(282));
            if (
              ((r = t.pendingProps),
              (a = null !== (a = t.memoizedState) ? a.element : null),
              oi(e, t),
              ci(t, r, null, n),
              (r = t.memoizedState.element) === a)
            )
              Hi(), (t = nl(e, t, n));
            else {
              if (
                ((i = (a = t.stateNode).hydrate) &&
                  ((Fi = Ur(t.stateNode.containerInfo.firstChild)),
                  (Li = t),
                  (i = ji = !0)),
                i)
              ) {
                if (null != (e = a.mutableSourceEagerHydrationData))
                  for (a = 0; a < e.length; a += 2)
                    ((i = e[a])._workInProgressVersionPrimary = e[a + 1]),
                      Ui.push(i);
                for (n = Si(t, null, r, n), t.child = n; n; )
                  (n.flags = (-3 & n.flags) | 1024), (n = n.sibling);
              } else Ro(e, t, r, n), Hi();
              t = t.child;
            }
            return t;
          case 5:
            return (
              Ai(t),
              null === e && Vi(t),
              (r = t.type),
              (a = t.pendingProps),
              (i = null !== e ? e.memoizedProps : null),
              (l = a.children),
              Vr(r, a) ? (l = null) : null !== i && Vr(r, i) && (t.flags |= 16),
              Wo(e, t),
              Ro(e, t, l, n),
              t.child
            );
          case 6:
            return null === e && Vi(t), null;
          case 13:
            return Ko(e, t, n);
          case 4:
            return (
              Di(t, t.stateNode.containerInfo),
              (r = t.pendingProps),
              null === e ? (t.child = ki(t, null, r, n)) : Ro(e, t, r, n),
              t.child
            );
          case 11:
            return (
              (r = t.type),
              (a = t.pendingProps),
              Lo(e, t, r, (a = t.elementType === r ? a : qa(r, a)), n)
            );
          case 7:
            return Ro(e, t, t.pendingProps, n), t.child;
          case 8:
          case 12:
            return Ro(e, t, t.pendingProps.children, n), t.child;
          case 10:
            e: {
              (r = t.type._context),
                (a = t.pendingProps),
                (l = t.memoizedProps),
                (i = a.value);
              var s = t.type._context;
              if ((sa(Ka, s._currentValue), (s._currentValue = i), null !== l))
                if (
                  ((s = l.value),
                  0 ===
                    (i = lr(s, i)
                      ? 0
                      : 0 |
                        ("function" === typeof r._calculateChangedBits
                          ? r._calculateChangedBits(s, i)
                          : 1073741823)))
                ) {
                  if (l.children === a.children && !fa.current) {
                    t = nl(e, t, n);
                    break e;
                  }
                } else
                  for (null !== (s = t.child) && (s.return = t); null !== s; ) {
                    var u = s.dependencies;
                    if (null !== u) {
                      l = s.child;
                      for (var c = u.firstContext; null !== c; ) {
                        if (c.context === r && 0 !== (c.observedBits & i)) {
                          1 === s.tag &&
                            (((c = li(-1, n & -n)).tag = 2), si(s, c)),
                            (s.lanes |= n),
                            null !== (c = s.alternate) && (c.lanes |= n),
                            ti(s.return, n),
                            (u.lanes |= n);
                          break;
                        }
                        c = c.next;
                      }
                    } else
                      l = 10 === s.tag && s.type === t.type ? null : s.child;
                    if (null !== l) l.return = s;
                    else
                      for (l = s; null !== l; ) {
                        if (l === t) {
                          l = null;
                          break;
                        }
                        if (null !== (s = l.sibling)) {
                          (s.return = l.return), (l = s);
                          break;
                        }
                        l = l.return;
                      }
                    s = l;
                  }
              Ro(e, t, a.children, n), (t = t.child);
            }
            return t;
          case 9:
            return (
              (a = t.type),
              (r = (i = t.pendingProps).children),
              ni(t, n),
              (r = r((a = ri(a, i.unstable_observedBits)))),
              (t.flags |= 1),
              Ro(e, t, r, n),
              t.child
            );
          case 14:
            return (
              (i = qa((a = t.type), t.pendingProps)),
              Fo(e, t, a, (i = qa(a.type, i)), r, n)
            );
          case 15:
            return jo(e, t, t.type, t.pendingProps, r, n);
          case 17:
            return (
              (r = t.type),
              (a = t.pendingProps),
              (a = t.elementType === r ? a : qa(r, a)),
              null !== e &&
                ((e.alternate = null), (t.alternate = null), (t.flags |= 2)),
              (t.tag = 1),
              pa(r) ? ((e = !0), ya(t)) : (e = !1),
              ni(t, n),
              mi(t, r, a),
              yi(t, r, a, n),
              Bo(null, t, r, !0, e, n)
            );
          case 19:
            return tl(e, t, n);
          case 23:
          case 24:
            return zo(e, t, n);
        }
        throw Error(o(156, t.tag));
      }),
        (tu.prototype.render = function (e) {
          Zs(e, this._internalRoot, null, null);
        }),
        (tu.prototype.unmount = function () {
          var e = this._internalRoot,
            t = e.containerInfo;
          Zs(null, e, null, function () {
            t[Zr] = null;
          });
        }),
        (tt = function (e) {
          13 === e.tag && (fs(e, 4, us()), eu(e, 4));
        }),
        (nt = function (e) {
          13 === e.tag && (fs(e, 67108864, us()), eu(e, 67108864));
        }),
        (rt = function (e) {
          if (13 === e.tag) {
            var t = us(),
              n = cs(e);
            fs(e, n, t), eu(e, n);
          }
        }),
        (at = function (e, t) {
          return t();
        }),
        (Oe = function (e, t, n) {
          switch (t) {
            case "input":
              if ((ne(e, n), (t = n.name), "radio" === n.type && null != t)) {
                for (n = e; n.parentNode; ) n = n.parentNode;
                for (
                  n = n.querySelectorAll(
                    "input[name=" + JSON.stringify("" + t) + '][type="radio"]'
                  ),
                    t = 0;
                  t < n.length;
                  t++
                ) {
                  var r = n[t];
                  if (r !== e && r.form === e.form) {
                    var a = na(r);
                    if (!a) throw Error(o(90));
                    Z(r), ne(r, a);
                  }
                }
              }
              break;
            case "textarea":
              ue(e, n);
              break;
            case "select":
              null != (t = n.value) && oe(e, !!n.multiple, t, !1);
          }
        }),
        (Ne = vs),
        (Ie = function (e, t, n, r, a) {
          var i = El;
          El |= 4;
          try {
            return Ba(98, e.bind(null, t, n, r, a));
          } finally {
            0 === (El = i) && (Hl(), Ua());
          }
        }),
        (Re = function () {
          0 === (49 & El) &&
            ((function () {
              if (null !== ts) {
                var e = ts;
                (ts = null),
                  e.forEach(function (e) {
                    (e.expiredLanes |= 24 & e.pendingLanes), hs(e, Wa());
                  });
              }
              Ua();
            })(),
            As());
        }),
        (Le = function (e, t) {
          var n = El;
          El |= 2;
          try {
            return e(t);
          } finally {
            0 === (El = n) && (Hl(), Ua());
          }
        });
      var iu = { Events: [ea, ta, na, Te, Ae, As, { current: !1 }] },
        ou = {
          findFiberByHostInstance: Jr,
          bundleType: 0,
          version: "17.0.1",
          rendererPackageName: "react-dom",
        },
        lu = {
          bundleType: ou.bundleType,
          version: ou.version,
          rendererPackageName: ou.rendererPackageName,
          rendererConfig: ou.rendererConfig,
          overrideHookState: null,
          overrideHookStateDeletePath: null,
          overrideHookStateRenamePath: null,
          overrideProps: null,
          overridePropsDeletePath: null,
          overridePropsRenamePath: null,
          setSuspenseHandler: null,
          scheduleUpdate: null,
          currentDispatcherRef: _.ReactCurrentDispatcher,
          findHostInstanceByFiber: function (e) {
            return null === (e = Je(e)) ? null : e.stateNode;
          },
          findFiberByHostInstance:
            ou.findFiberByHostInstance ||
            function () {
              return null;
            },
          findHostInstancesForRefresh: null,
          scheduleRefresh: null,
          scheduleRoot: null,
          setRefreshHandler: null,
          getCurrentFiber: null,
        };
      if ("undefined" !== typeof __REACT_DEVTOOLS_GLOBAL_HOOK__) {
        var su = __REACT_DEVTOOLS_GLOBAL_HOOK__;
        if (!su.isDisabled && su.supportsFiber)
          try {
            (xa = su.inject(lu)), (_a = su);
          } catch (me) {}
      }
      (t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = iu),
        (t.createPortal = au),
        (t.findDOMNode = function (e) {
          if (null == e) return null;
          if (1 === e.nodeType) return e;
          var t = e._reactInternals;
          if (void 0 === t) {
            if ("function" === typeof e.render) throw Error(o(188));
            throw Error(o(268, Object.keys(e)));
          }
          return (e = null === (e = Je(t)) ? null : e.stateNode);
        }),
        (t.flushSync = function (e, t) {
          var n = El;
          if (0 !== (48 & n)) return e(t);
          El |= 1;
          try {
            if (e) return Ba(99, e.bind(null, t));
          } finally {
            (El = n), Ua();
          }
        }),
        (t.hydrate = function (e, t, n) {
          if (!nu(t)) throw Error(o(200));
          return ru(null, e, t, !0, n);
        }),
        (t.render = function (e, t, n) {
          if (!nu(t)) throw Error(o(200));
          return ru(null, e, t, !1, n);
        }),
        (t.unmountComponentAtNode = function (e) {
          if (!nu(e)) throw Error(o(40));
          return (
            !!e._reactRootContainer &&
            (ys(function () {
              ru(null, null, e, !1, function () {
                (e._reactRootContainer = null), (e[Zr] = null);
              });
            }),
            !0)
          );
        }),
        (t.unstable_batchedUpdates = vs),
        (t.unstable_createPortal = function (e, t) {
          return au(
            e,
            t,
            2 < arguments.length && void 0 !== arguments[2]
              ? arguments[2]
              : null
          );
        }),
        (t.unstable_renderSubtreeIntoContainer = function (e, t, n, r) {
          if (!nu(n)) throw Error(o(200));
          if (null == e || void 0 === e._reactInternals) throw Error(o(38));
          return ru(e, t, n, !1, r);
        }),
        (t.version = "17.0.1");
    },
    function (e, t, n) {
      "use strict";
      e.exports = n(68);
    },
    function (e, t, n) {
      "use strict";
      var r, a, i, o;
      if (
        "object" === typeof performance &&
        "function" === typeof performance.now
      ) {
        var l = performance;
        t.unstable_now = function () {
          return l.now();
        };
      } else {
        var s = Date,
          u = s.now();
        t.unstable_now = function () {
          return s.now() - u;
        };
      }
      if (
        "undefined" === typeof window ||
        "function" !== typeof MessageChannel
      ) {
        var c = null,
          f = null,
          d = function e() {
            if (null !== c)
              try {
                var n = t.unstable_now();
                c(!0, n), (c = null);
              } catch (r) {
                throw (setTimeout(e, 0), r);
              }
          };
        (r = function (e) {
          null !== c ? setTimeout(r, 0, e) : ((c = e), setTimeout(d, 0));
        }),
          (a = function (e, t) {
            f = setTimeout(e, t);
          }),
          (i = function () {
            clearTimeout(f);
          }),
          (t.unstable_shouldYield = function () {
            return !1;
          }),
          (o = t.unstable_forceFrameRate = function () {});
      } else {
        var h = window.setTimeout,
          p = window.clearTimeout;
        if ("undefined" !== typeof console) {
          var g = window.cancelAnimationFrame;
          "function" !== typeof window.requestAnimationFrame &&
            console.error(
              "This browser doesn't support requestAnimationFrame. Make sure that you load a polyfill in older browsers. https://reactjs.org/link/react-polyfills"
            ),
            "function" !== typeof g &&
              console.error(
                "This browser doesn't support cancelAnimationFrame. Make sure that you load a polyfill in older browsers. https://reactjs.org/link/react-polyfills"
              );
        }
        var m = !1,
          v = null,
          y = -1,
          b = 5,
          x = 0;
        (t.unstable_shouldYield = function () {
          return t.unstable_now() >= x;
        }),
          (o = function () {}),
          (t.unstable_forceFrameRate = function (e) {
            0 > e || 125 < e
              ? console.error(
                  "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"
                )
              : (b = 0 < e ? Math.floor(1e3 / e) : 5);
          });
        var _ = new MessageChannel(),
          w = _.port2;
        (_.port1.onmessage = function () {
          if (null !== v) {
            var e = t.unstable_now();
            x = e + b;
            try {
              v(!0, e) ? w.postMessage(null) : ((m = !1), (v = null));
            } catch (n) {
              throw (w.postMessage(null), n);
            }
          } else m = !1;
        }),
          (r = function (e) {
            (v = e), m || ((m = !0), w.postMessage(null));
          }),
          (a = function (e, n) {
            y = h(function () {
              e(t.unstable_now());
            }, n);
          }),
          (i = function () {
            p(y), (y = -1);
          });
      }
      function k(e, t) {
        var n = e.length;
        e.push(t);
        e: for (;;) {
          var r = (n - 1) >>> 1,
            a = e[r];
          if (!(void 0 !== a && 0 < M(a, t))) break e;
          (e[r] = t), (e[n] = a), (n = r);
        }
      }
      function S(e) {
        return void 0 === (e = e[0]) ? null : e;
      }
      function C(e) {
        var t = e[0];
        if (void 0 !== t) {
          var n = e.pop();
          if (n !== t) {
            e[0] = n;
            e: for (var r = 0, a = e.length; r < a; ) {
              var i = 2 * (r + 1) - 1,
                o = e[i],
                l = i + 1,
                s = e[l];
              if (void 0 !== o && 0 > M(o, n))
                void 0 !== s && 0 > M(s, o)
                  ? ((e[r] = s), (e[l] = n), (r = l))
                  : ((e[r] = o), (e[i] = n), (r = i));
              else {
                if (!(void 0 !== s && 0 > M(s, n))) break e;
                (e[r] = s), (e[l] = n), (r = l);
              }
            }
          }
          return t;
        }
        return null;
      }
      function M(e, t) {
        var n = e.sortIndex - t.sortIndex;
        return 0 !== n ? n : e.id - t.id;
      }
      var O = [],
        P = [],
        E = 1,
        D = null,
        T = 3,
        A = !1,
        N = !1,
        I = !1;
      function R(e) {
        for (var t = S(P); null !== t; ) {
          if (null === t.callback) C(P);
          else {
            if (!(t.startTime <= e)) break;
            C(P), (t.sortIndex = t.expirationTime), k(O, t);
          }
          t = S(P);
        }
      }
      function L(e) {
        if (((I = !1), R(e), !N))
          if (null !== S(O)) (N = !0), r(F);
          else {
            var t = S(P);
            null !== t && a(L, t.startTime - e);
          }
      }
      function F(e, n) {
        (N = !1), I && ((I = !1), i()), (A = !0);
        var r = T;
        try {
          for (
            R(n), D = S(O);
            null !== D &&
            (!(D.expirationTime > n) || (e && !t.unstable_shouldYield()));

          ) {
            var o = D.callback;
            if ("function" === typeof o) {
              (D.callback = null), (T = D.priorityLevel);
              var l = o(D.expirationTime <= n);
              (n = t.unstable_now()),
                "function" === typeof l ? (D.callback = l) : D === S(O) && C(O),
                R(n);
            } else C(O);
            D = S(O);
          }
          if (null !== D) var s = !0;
          else {
            var u = S(P);
            null !== u && a(L, u.startTime - n), (s = !1);
          }
          return s;
        } finally {
          (D = null), (T = r), (A = !1);
        }
      }
      var j = o;
      (t.unstable_IdlePriority = 5),
        (t.unstable_ImmediatePriority = 1),
        (t.unstable_LowPriority = 4),
        (t.unstable_NormalPriority = 3),
        (t.unstable_Profiling = null),
        (t.unstable_UserBlockingPriority = 2),
        (t.unstable_cancelCallback = function (e) {
          e.callback = null;
        }),
        (t.unstable_continueExecution = function () {
          N || A || ((N = !0), r(F));
        }),
        (t.unstable_getCurrentPriorityLevel = function () {
          return T;
        }),
        (t.unstable_getFirstCallbackNode = function () {
          return S(O);
        }),
        (t.unstable_next = function (e) {
          switch (T) {
            case 1:
            case 2:
            case 3:
              var t = 3;
              break;
            default:
              t = T;
          }
          var n = T;
          T = t;
          try {
            return e();
          } finally {
            T = n;
          }
        }),
        (t.unstable_pauseExecution = function () {}),
        (t.unstable_requestPaint = j),
        (t.unstable_runWithPriority = function (e, t) {
          switch (e) {
            case 1:
            case 2:
            case 3:
            case 4:
            case 5:
              break;
            default:
              e = 3;
          }
          var n = T;
          T = e;
          try {
            return t();
          } finally {
            T = n;
          }
        }),
        (t.unstable_scheduleCallback = function (e, n, o) {
          var l = t.unstable_now();
          switch (
            ("object" === typeof o && null !== o
              ? (o = "number" === typeof (o = o.delay) && 0 < o ? l + o : l)
              : (o = l),
            e)
          ) {
            case 1:
              var s = -1;
              break;
            case 2:
              s = 250;
              break;
            case 5:
              s = 1073741823;
              break;
            case 4:
              s = 1e4;
              break;
            default:
              s = 5e3;
          }
          return (
            (e = {
              id: E++,
              callback: n,
              priorityLevel: e,
              startTime: o,
              expirationTime: (s = o + s),
              sortIndex: -1,
            }),
            o > l
              ? ((e.sortIndex = o),
                k(P, e),
                null === S(O) &&
                  e === S(P) &&
                  (I ? i() : (I = !0), a(L, o - l)))
              : ((e.sortIndex = s), k(O, e), N || A || ((N = !0), r(F))),
            e
          );
        }),
        (t.unstable_wrapCallback = function (e) {
          var t = T;
          return function () {
            var n = T;
            T = t;
            try {
              return e.apply(this, arguments);
            } finally {
              T = n;
            }
          };
        });
    },
    ,
    function (e, t, n) {
      var r = (function (e) {
        "use strict";
        var t,
          n = Object.prototype,
          r = n.hasOwnProperty,
          a = "function" === typeof Symbol ? Symbol : {},
          i = a.iterator || "@@iterator",
          o = a.asyncIterator || "@@asyncIterator",
          l = a.toStringTag || "@@toStringTag";
        function s(e, t, n) {
          return (
            Object.defineProperty(e, t, {
              value: n,
              enumerable: !0,
              configurable: !0,
              writable: !0,
            }),
            e[t]
          );
        }
        try {
          s({}, "");
        } catch (T) {
          s = function (e, t, n) {
            return (e[t] = n);
          };
        }
        function u(e, t, n, r) {
          var a = t && t.prototype instanceof m ? t : m,
            i = Object.create(a.prototype),
            o = new P(r || []);
          return (
            (i._invoke = (function (e, t, n) {
              var r = f;
              return function (a, i) {
                if (r === h) throw new Error("Generator is already running");
                if (r === p) {
                  if ("throw" === a) throw i;
                  return D();
                }
                for (n.method = a, n.arg = i; ; ) {
                  var o = n.delegate;
                  if (o) {
                    var l = C(o, n);
                    if (l) {
                      if (l === g) continue;
                      return l;
                    }
                  }
                  if ("next" === n.method) n.sent = n._sent = n.arg;
                  else if ("throw" === n.method) {
                    if (r === f) throw ((r = p), n.arg);
                    n.dispatchException(n.arg);
                  } else "return" === n.method && n.abrupt("return", n.arg);
                  r = h;
                  var s = c(e, t, n);
                  if ("normal" === s.type) {
                    if (((r = n.done ? p : d), s.arg === g)) continue;
                    return { value: s.arg, done: n.done };
                  }
                  "throw" === s.type &&
                    ((r = p), (n.method = "throw"), (n.arg = s.arg));
                }
              };
            })(e, n, o)),
            i
          );
        }
        function c(e, t, n) {
          try {
            return { type: "normal", arg: e.call(t, n) };
          } catch (T) {
            return { type: "throw", arg: T };
          }
        }
        e.wrap = u;
        var f = "suspendedStart",
          d = "suspendedYield",
          h = "executing",
          p = "completed",
          g = {};
        function m() {}
        function v() {}
        function y() {}
        var b = {};
        b[i] = function () {
          return this;
        };
        var x = Object.getPrototypeOf,
          _ = x && x(x(E([])));
        _ && _ !== n && r.call(_, i) && (b = _);
        var w = (y.prototype = m.prototype = Object.create(b));
        function k(e) {
          ["next", "throw", "return"].forEach(function (t) {
            s(e, t, function (e) {
              return this._invoke(t, e);
            });
          });
        }
        function S(e, t) {
          function n(a, i, o, l) {
            var s = c(e[a], e, i);
            if ("throw" !== s.type) {
              var u = s.arg,
                f = u.value;
              return f && "object" === typeof f && r.call(f, "__await")
                ? t.resolve(f.__await).then(
                    function (e) {
                      n("next", e, o, l);
                    },
                    function (e) {
                      n("throw", e, o, l);
                    }
                  )
                : t.resolve(f).then(
                    function (e) {
                      (u.value = e), o(u);
                    },
                    function (e) {
                      return n("throw", e, o, l);
                    }
                  );
            }
            l(s.arg);
          }
          var a;
          this._invoke = function (e, r) {
            function i() {
              return new t(function (t, a) {
                n(e, r, t, a);
              });
            }
            return (a = a ? a.then(i, i) : i());
          };
        }
        function C(e, n) {
          var r = e.iterator[n.method];
          if (r === t) {
            if (((n.delegate = null), "throw" === n.method)) {
              if (
                e.iterator.return &&
                ((n.method = "return"),
                (n.arg = t),
                C(e, n),
                "throw" === n.method)
              )
                return g;
              (n.method = "throw"),
                (n.arg = new TypeError(
                  "The iterator does not provide a 'throw' method"
                ));
            }
            return g;
          }
          var a = c(r, e.iterator, n.arg);
          if ("throw" === a.type)
            return (
              (n.method = "throw"), (n.arg = a.arg), (n.delegate = null), g
            );
          var i = a.arg;
          return i
            ? i.done
              ? ((n[e.resultName] = i.value),
                (n.next = e.nextLoc),
                "return" !== n.method && ((n.method = "next"), (n.arg = t)),
                (n.delegate = null),
                g)
              : i
            : ((n.method = "throw"),
              (n.arg = new TypeError("iterator result is not an object")),
              (n.delegate = null),
              g);
        }
        function M(e) {
          var t = { tryLoc: e[0] };
          1 in e && (t.catchLoc = e[1]),
            2 in e && ((t.finallyLoc = e[2]), (t.afterLoc = e[3])),
            this.tryEntries.push(t);
        }
        function O(e) {
          var t = e.completion || {};
          (t.type = "normal"), delete t.arg, (e.completion = t);
        }
        function P(e) {
          (this.tryEntries = [{ tryLoc: "root" }]),
            e.forEach(M, this),
            this.reset(!0);
        }
        function E(e) {
          if (e) {
            var n = e[i];
            if (n) return n.call(e);
            if ("function" === typeof e.next) return e;
            if (!isNaN(e.length)) {
              var a = -1,
                o = function n() {
                  for (; ++a < e.length; )
                    if (r.call(e, a)) return (n.value = e[a]), (n.done = !1), n;
                  return (n.value = t), (n.done = !0), n;
                };
              return (o.next = o);
            }
          }
          return { next: D };
        }
        function D() {
          return { value: t, done: !0 };
        }
        return (
          (v.prototype = w.constructor = y),
          (y.constructor = v),
          (v.displayName = s(y, l, "GeneratorFunction")),
          (e.isGeneratorFunction = function (e) {
            var t = "function" === typeof e && e.constructor;
            return (
              !!t &&
              (t === v || "GeneratorFunction" === (t.displayName || t.name))
            );
          }),
          (e.mark = function (e) {
            return (
              Object.setPrototypeOf
                ? Object.setPrototypeOf(e, y)
                : ((e.__proto__ = y), s(e, l, "GeneratorFunction")),
              (e.prototype = Object.create(w)),
              e
            );
          }),
          (e.awrap = function (e) {
            return { __await: e };
          }),
          k(S.prototype),
          (S.prototype[o] = function () {
            return this;
          }),
          (e.AsyncIterator = S),
          (e.async = function (t, n, r, a, i) {
            void 0 === i && (i = Promise);
            var o = new S(u(t, n, r, a), i);
            return e.isGeneratorFunction(n)
              ? o
              : o.next().then(function (e) {
                  return e.done ? e.value : o.next();
                });
          }),
          k(w),
          s(w, l, "Generator"),
          (w[i] = function () {
            return this;
          }),
          (w.toString = function () {
            return "[object Generator]";
          }),
          (e.keys = function (e) {
            var t = [];
            for (var n in e) t.push(n);
            return (
              t.reverse(),
              function n() {
                for (; t.length; ) {
                  var r = t.pop();
                  if (r in e) return (n.value = r), (n.done = !1), n;
                }
                return (n.done = !0), n;
              }
            );
          }),
          (e.values = E),
          (P.prototype = {
            constructor: P,
            reset: function (e) {
              if (
                ((this.prev = 0),
                (this.next = 0),
                (this.sent = this._sent = t),
                (this.done = !1),
                (this.delegate = null),
                (this.method = "next"),
                (this.arg = t),
                this.tryEntries.forEach(O),
                !e)
              )
                for (var n in this)
                  "t" === n.charAt(0) &&
                    r.call(this, n) &&
                    !isNaN(+n.slice(1)) &&
                    (this[n] = t);
            },
            stop: function () {
              this.done = !0;
              var e = this.tryEntries[0].completion;
              if ("throw" === e.type) throw e.arg;
              return this.rval;
            },
            dispatchException: function (e) {
              if (this.done) throw e;
              var n = this;
              function a(r, a) {
                return (
                  (l.type = "throw"),
                  (l.arg = e),
                  (n.next = r),
                  a && ((n.method = "next"), (n.arg = t)),
                  !!a
                );
              }
              for (var i = this.tryEntries.length - 1; i >= 0; --i) {
                var o = this.tryEntries[i],
                  l = o.completion;
                if ("root" === o.tryLoc) return a("end");
                if (o.tryLoc <= this.prev) {
                  var s = r.call(o, "catchLoc"),
                    u = r.call(o, "finallyLoc");
                  if (s && u) {
                    if (this.prev < o.catchLoc) return a(o.catchLoc, !0);
                    if (this.prev < o.finallyLoc) return a(o.finallyLoc);
                  } else if (s) {
                    if (this.prev < o.catchLoc) return a(o.catchLoc, !0);
                  } else {
                    if (!u)
                      throw new Error("try statement without catch or finally");
                    if (this.prev < o.finallyLoc) return a(o.finallyLoc);
                  }
                }
              }
            },
            abrupt: function (e, t) {
              for (var n = this.tryEntries.length - 1; n >= 0; --n) {
                var a = this.tryEntries[n];
                if (
                  a.tryLoc <= this.prev &&
                  r.call(a, "finallyLoc") &&
                  this.prev < a.finallyLoc
                ) {
                  var i = a;
                  break;
                }
              }
              i &&
                ("break" === e || "continue" === e) &&
                i.tryLoc <= t &&
                t <= i.finallyLoc &&
                (i = null);
              var o = i ? i.completion : {};
              return (
                (o.type = e),
                (o.arg = t),
                i
                  ? ((this.method = "next"), (this.next = i.finallyLoc), g)
                  : this.complete(o)
              );
            },
            complete: function (e, t) {
              if ("throw" === e.type) throw e.arg;
              return (
                "break" === e.type || "continue" === e.type
                  ? (this.next = e.arg)
                  : "return" === e.type
                  ? ((this.rval = this.arg = e.arg),
                    (this.method = "return"),
                    (this.next = "end"))
                  : "normal" === e.type && t && (this.next = t),
                g
              );
            },
            finish: function (e) {
              for (var t = this.tryEntries.length - 1; t >= 0; --t) {
                var n = this.tryEntries[t];
                if (n.finallyLoc === e)
                  return this.complete(n.completion, n.afterLoc), O(n), g;
              }
            },
            catch: function (e) {
              for (var t = this.tryEntries.length - 1; t >= 0; --t) {
                var n = this.tryEntries[t];
                if (n.tryLoc === e) {
                  var r = n.completion;
                  if ("throw" === r.type) {
                    var a = r.arg;
                    O(n);
                  }
                  return a;
                }
              }
              throw new Error("illegal catch attempt");
            },
            delegateYield: function (e, n, r) {
              return (
                (this.delegate = { iterator: E(e), resultName: n, nextLoc: r }),
                "next" === this.method && (this.arg = t),
                g
              );
            },
          }),
          e
        );
      })(e.exports);
      try {
        regeneratorRuntime = r;
      } catch (a) {
        Function("r", "regeneratorRuntime = r")(r);
      }
    },
    function (e, t, n) {
      "use strict";
      var r = n(72);
      function a() {}
      function i() {}
      (i.resetWarningCache = a),
        (e.exports = function () {
          function e(e, t, n, a, i, o) {
            if (o !== r) {
              var l = new Error(
                "Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types"
              );
              throw ((l.name = "Invariant Violation"), l);
            }
          }
          function t() {
            return e;
          }
          e.isRequired = e;
          var n = {
            array: e,
            bool: e,
            func: e,
            number: e,
            object: e,
            string: e,
            symbol: e,
            any: e,
            arrayOf: t,
            element: e,
            elementType: e,
            instanceOf: t,
            node: e,
            objectOf: t,
            oneOf: t,
            oneOfType: t,
            shape: t,
            exact: t,
            checkPropTypes: i,
            resetWarningCache: a,
          };
          return (n.PropTypes = n), n;
        });
    },
    function (e, t, n) {
      "use strict";
      e.exports = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";
    },
    function (e, t, n) {
      "use strict";
      var r = "function" === typeof Symbol && Symbol.for,
        a = r ? Symbol.for("react.element") : 60103,
        i = r ? Symbol.for("react.portal") : 60106,
        o = r ? Symbol.for("react.fragment") : 60107,
        l = r ? Symbol.for("react.strict_mode") : 60108,
        s = r ? Symbol.for("react.profiler") : 60114,
        u = r ? Symbol.for("react.provider") : 60109,
        c = r ? Symbol.for("react.context") : 60110,
        f = r ? Symbol.for("react.async_mode") : 60111,
        d = r ? Symbol.for("react.concurrent_mode") : 60111,
        h = r ? Symbol.for("react.forward_ref") : 60112,
        p = r ? Symbol.for("react.suspense") : 60113,
        g = r ? Symbol.for("react.suspense_list") : 60120,
        m = r ? Symbol.for("react.memo") : 60115,
        v = r ? Symbol.for("react.lazy") : 60116,
        y = r ? Symbol.for("react.block") : 60121,
        b = r ? Symbol.for("react.fundamental") : 60117,
        x = r ? Symbol.for("react.responder") : 60118,
        _ = r ? Symbol.for("react.scope") : 60119;
      function w(e) {
        if ("object" === typeof e && null !== e) {
          var t = e.$$typeof;
          switch (t) {
            case a:
              switch ((e = e.type)) {
                case f:
                case d:
                case o:
                case s:
                case l:
                case p:
                  return e;
                default:
                  switch ((e = e && e.$$typeof)) {
                    case c:
                    case h:
                    case v:
                    case m:
                    case u:
                      return e;
                    default:
                      return t;
                  }
              }
            case i:
              return t;
          }
        }
      }
      function k(e) {
        return w(e) === d;
      }
      (t.AsyncMode = f),
        (t.ConcurrentMode = d),
        (t.ContextConsumer = c),
        (t.ContextProvider = u),
        (t.Element = a),
        (t.ForwardRef = h),
        (t.Fragment = o),
        (t.Lazy = v),
        (t.Memo = m),
        (t.Portal = i),
        (t.Profiler = s),
        (t.StrictMode = l),
        (t.Suspense = p),
        (t.isAsyncMode = function (e) {
          return k(e) || w(e) === f;
        }),
        (t.isConcurrentMode = k),
        (t.isContextConsumer = function (e) {
          return w(e) === c;
        }),
        (t.isContextProvider = function (e) {
          return w(e) === u;
        }),
        (t.isElement = function (e) {
          return "object" === typeof e && null !== e && e.$$typeof === a;
        }),
        (t.isForwardRef = function (e) {
          return w(e) === h;
        }),
        (t.isFragment = function (e) {
          return w(e) === o;
        }),
        (t.isLazy = function (e) {
          return w(e) === v;
        }),
        (t.isMemo = function (e) {
          return w(e) === m;
        }),
        (t.isPortal = function (e) {
          return w(e) === i;
        }),
        (t.isProfiler = function (e) {
          return w(e) === s;
        }),
        (t.isStrictMode = function (e) {
          return w(e) === l;
        }),
        (t.isSuspense = function (e) {
          return w(e) === p;
        }),
        (t.isValidElementType = function (e) {
          return (
            "string" === typeof e ||
            "function" === typeof e ||
            e === o ||
            e === d ||
            e === s ||
            e === l ||
            e === p ||
            e === g ||
            ("object" === typeof e &&
              null !== e &&
              (e.$$typeof === v ||
                e.$$typeof === m ||
                e.$$typeof === u ||
                e.$$typeof === c ||
                e.$$typeof === h ||
                e.$$typeof === b ||
                e.$$typeof === x ||
                e.$$typeof === _ ||
                e.$$typeof === y))
          );
        }),
        (t.typeOf = w);
    },
    function (e, t) {
      e.exports = function (e) {
        if (!e.webpackPolyfill) {
          var t = Object.create(e);
          t.children || (t.children = []),
            Object.defineProperty(t, "loaded", {
              enumerable: !0,
              get: function () {
                return t.l;
              },
            }),
            Object.defineProperty(t, "id", {
              enumerable: !0,
              get: function () {
                return t.i;
              },
            }),
            Object.defineProperty(t, "exports", { enumerable: !0 }),
            (t.webpackPolyfill = 1);
        }
        return t;
      };
    },
    function (e, t, n) {
      e.exports = (function (e) {
        "use strict";
        function t(e, t) {
          return e((t = { exports: {} }), t.exports), t.exports;
        }
        function n(e) {
          return (e && e.default) || e;
        }
        e = e && e.hasOwnProperty("default") ? e.default : e;
        var r = {
            aliceblue: [240, 248, 255],
            antiquewhite: [250, 235, 215],
            aqua: [0, 255, 255],
            aquamarine: [127, 255, 212],
            azure: [240, 255, 255],
            beige: [245, 245, 220],
            bisque: [255, 228, 196],
            black: [0, 0, 0],
            blanchedalmond: [255, 235, 205],
            blue: [0, 0, 255],
            blueviolet: [138, 43, 226],
            brown: [165, 42, 42],
            burlywood: [222, 184, 135],
            cadetblue: [95, 158, 160],
            chartreuse: [127, 255, 0],
            chocolate: [210, 105, 30],
            coral: [255, 127, 80],
            cornflowerblue: [100, 149, 237],
            cornsilk: [255, 248, 220],
            crimson: [220, 20, 60],
            cyan: [0, 255, 255],
            darkblue: [0, 0, 139],
            darkcyan: [0, 139, 139],
            darkgoldenrod: [184, 134, 11],
            darkgray: [169, 169, 169],
            darkgreen: [0, 100, 0],
            darkgrey: [169, 169, 169],
            darkkhaki: [189, 183, 107],
            darkmagenta: [139, 0, 139],
            darkolivegreen: [85, 107, 47],
            darkorange: [255, 140, 0],
            darkorchid: [153, 50, 204],
            darkred: [139, 0, 0],
            darksalmon: [233, 150, 122],
            darkseagreen: [143, 188, 143],
            darkslateblue: [72, 61, 139],
            darkslategray: [47, 79, 79],
            darkslategrey: [47, 79, 79],
            darkturquoise: [0, 206, 209],
            darkviolet: [148, 0, 211],
            deeppink: [255, 20, 147],
            deepskyblue: [0, 191, 255],
            dimgray: [105, 105, 105],
            dimgrey: [105, 105, 105],
            dodgerblue: [30, 144, 255],
            firebrick: [178, 34, 34],
            floralwhite: [255, 250, 240],
            forestgreen: [34, 139, 34],
            fuchsia: [255, 0, 255],
            gainsboro: [220, 220, 220],
            ghostwhite: [248, 248, 255],
            gold: [255, 215, 0],
            goldenrod: [218, 165, 32],
            gray: [128, 128, 128],
            green: [0, 128, 0],
            greenyellow: [173, 255, 47],
            grey: [128, 128, 128],
            honeydew: [240, 255, 240],
            hotpink: [255, 105, 180],
            indianred: [205, 92, 92],
            indigo: [75, 0, 130],
            ivory: [255, 255, 240],
            khaki: [240, 230, 140],
            lavender: [230, 230, 250],
            lavenderblush: [255, 240, 245],
            lawngreen: [124, 252, 0],
            lemonchiffon: [255, 250, 205],
            lightblue: [173, 216, 230],
            lightcoral: [240, 128, 128],
            lightcyan: [224, 255, 255],
            lightgoldenrodyellow: [250, 250, 210],
            lightgray: [211, 211, 211],
            lightgreen: [144, 238, 144],
            lightgrey: [211, 211, 211],
            lightpink: [255, 182, 193],
            lightsalmon: [255, 160, 122],
            lightseagreen: [32, 178, 170],
            lightskyblue: [135, 206, 250],
            lightslategray: [119, 136, 153],
            lightslategrey: [119, 136, 153],
            lightsteelblue: [176, 196, 222],
            lightyellow: [255, 255, 224],
            lime: [0, 255, 0],
            limegreen: [50, 205, 50],
            linen: [250, 240, 230],
            magenta: [255, 0, 255],
            maroon: [128, 0, 0],
            mediumaquamarine: [102, 205, 170],
            mediumblue: [0, 0, 205],
            mediumorchid: [186, 85, 211],
            mediumpurple: [147, 112, 219],
            mediumseagreen: [60, 179, 113],
            mediumslateblue: [123, 104, 238],
            mediumspringgreen: [0, 250, 154],
            mediumturquoise: [72, 209, 204],
            mediumvioletred: [199, 21, 133],
            midnightblue: [25, 25, 112],
            mintcream: [245, 255, 250],
            mistyrose: [255, 228, 225],
            moccasin: [255, 228, 181],
            navajowhite: [255, 222, 173],
            navy: [0, 0, 128],
            oldlace: [253, 245, 230],
            olive: [128, 128, 0],
            olivedrab: [107, 142, 35],
            orange: [255, 165, 0],
            orangered: [255, 69, 0],
            orchid: [218, 112, 214],
            palegoldenrod: [238, 232, 170],
            palegreen: [152, 251, 152],
            paleturquoise: [175, 238, 238],
            palevioletred: [219, 112, 147],
            papayawhip: [255, 239, 213],
            peachpuff: [255, 218, 185],
            peru: [205, 133, 63],
            pink: [255, 192, 203],
            plum: [221, 160, 221],
            powderblue: [176, 224, 230],
            purple: [128, 0, 128],
            rebeccapurple: [102, 51, 153],
            red: [255, 0, 0],
            rosybrown: [188, 143, 143],
            royalblue: [65, 105, 225],
            saddlebrown: [139, 69, 19],
            salmon: [250, 128, 114],
            sandybrown: [244, 164, 96],
            seagreen: [46, 139, 87],
            seashell: [255, 245, 238],
            sienna: [160, 82, 45],
            silver: [192, 192, 192],
            skyblue: [135, 206, 235],
            slateblue: [106, 90, 205],
            slategray: [112, 128, 144],
            slategrey: [112, 128, 144],
            snow: [255, 250, 250],
            springgreen: [0, 255, 127],
            steelblue: [70, 130, 180],
            tan: [210, 180, 140],
            teal: [0, 128, 128],
            thistle: [216, 191, 216],
            tomato: [255, 99, 71],
            turquoise: [64, 224, 208],
            violet: [238, 130, 238],
            wheat: [245, 222, 179],
            white: [255, 255, 255],
            whitesmoke: [245, 245, 245],
            yellow: [255, 255, 0],
            yellowgreen: [154, 205, 50],
          },
          a = t(function (e) {
            var t = {};
            for (var n in r) r.hasOwnProperty(n) && (t[r[n]] = n);
            var a = (e.exports = {
              rgb: { channels: 3, labels: "rgb" },
              hsl: { channels: 3, labels: "hsl" },
              hsv: { channels: 3, labels: "hsv" },
              hwb: { channels: 3, labels: "hwb" },
              cmyk: { channels: 4, labels: "cmyk" },
              xyz: { channels: 3, labels: "xyz" },
              lab: { channels: 3, labels: "lab" },
              lch: { channels: 3, labels: "lch" },
              hex: { channels: 1, labels: ["hex"] },
              keyword: { channels: 1, labels: ["keyword"] },
              ansi16: { channels: 1, labels: ["ansi16"] },
              ansi256: { channels: 1, labels: ["ansi256"] },
              hcg: { channels: 3, labels: ["h", "c", "g"] },
              apple: { channels: 3, labels: ["r16", "g16", "b16"] },
              gray: { channels: 1, labels: ["gray"] },
            });
            for (var i in a)
              if (a.hasOwnProperty(i)) {
                if (!("channels" in a[i]))
                  throw new Error("missing channels property: " + i);
                if (!("labels" in a[i]))
                  throw new Error("missing channel labels property: " + i);
                if (a[i].labels.length !== a[i].channels)
                  throw new Error("channel and label counts mismatch: " + i);
                var o = a[i].channels,
                  l = a[i].labels;
                delete a[i].channels,
                  delete a[i].labels,
                  Object.defineProperty(a[i], "channels", { value: o }),
                  Object.defineProperty(a[i], "labels", { value: l });
              }
            function s(e, t) {
              return (
                Math.pow(e[0] - t[0], 2) +
                Math.pow(e[1] - t[1], 2) +
                Math.pow(e[2] - t[2], 2)
              );
            }
            (a.rgb.hsl = function (e) {
              var t,
                n,
                r = e[0] / 255,
                a = e[1] / 255,
                i = e[2] / 255,
                o = Math.min(r, a, i),
                l = Math.max(r, a, i),
                s = l - o;
              return (
                l === o
                  ? (t = 0)
                  : r === l
                  ? (t = (a - i) / s)
                  : a === l
                  ? (t = 2 + (i - r) / s)
                  : i === l && (t = 4 + (r - a) / s),
                (t = Math.min(60 * t, 360)) < 0 && (t += 360),
                (n = (o + l) / 2),
                [
                  t,
                  100 *
                    (l === o ? 0 : n <= 0.5 ? s / (l + o) : s / (2 - l - o)),
                  100 * n,
                ]
              );
            }),
              (a.rgb.hsv = function (e) {
                var t,
                  n,
                  r,
                  a,
                  i,
                  o = e[0] / 255,
                  l = e[1] / 255,
                  s = e[2] / 255,
                  u = Math.max(o, l, s),
                  c = u - Math.min(o, l, s),
                  f = function (e) {
                    return (u - e) / 6 / c + 0.5;
                  };
                return (
                  0 === c
                    ? (a = i = 0)
                    : ((i = c / u),
                      (t = f(o)),
                      (n = f(l)),
                      (r = f(s)),
                      o === u
                        ? (a = r - n)
                        : l === u
                        ? (a = 1 / 3 + t - r)
                        : s === u && (a = 2 / 3 + n - t),
                      a < 0 ? (a += 1) : a > 1 && (a -= 1)),
                  [360 * a, 100 * i, 100 * u]
                );
              }),
              (a.rgb.hwb = function (e) {
                var t = e[0],
                  n = e[1],
                  r = e[2];
                return [
                  a.rgb.hsl(e)[0],
                  (1 / 255) * Math.min(t, Math.min(n, r)) * 100,
                  100 * (r = 1 - (1 / 255) * Math.max(t, Math.max(n, r))),
                ];
              }),
              (a.rgb.cmyk = function (e) {
                var t,
                  n = e[0] / 255,
                  r = e[1] / 255,
                  a = e[2] / 255;
                return [
                  100 *
                    ((1 - n - (t = Math.min(1 - n, 1 - r, 1 - a))) / (1 - t) ||
                      0),
                  100 * ((1 - r - t) / (1 - t) || 0),
                  100 * ((1 - a - t) / (1 - t) || 0),
                  100 * t,
                ];
              }),
              (a.rgb.keyword = function (e) {
                var n = t[e];
                if (n) return n;
                var a,
                  i = 1 / 0;
                for (var o in r)
                  if (r.hasOwnProperty(o)) {
                    var l = s(e, r[o]);
                    l < i && ((i = l), (a = o));
                  }
                return a;
              }),
              (a.keyword.rgb = function (e) {
                return r[e];
              }),
              (a.rgb.xyz = function (e) {
                var t = e[0] / 255,
                  n = e[1] / 255,
                  r = e[2] / 255;
                return [
                  100 *
                    (0.4124 *
                      (t =
                        t > 0.04045
                          ? Math.pow((t + 0.055) / 1.055, 2.4)
                          : t / 12.92) +
                      0.3576 *
                        (n =
                          n > 0.04045
                            ? Math.pow((n + 0.055) / 1.055, 2.4)
                            : n / 12.92) +
                      0.1805 *
                        (r =
                          r > 0.04045
                            ? Math.pow((r + 0.055) / 1.055, 2.4)
                            : r / 12.92)),
                  100 * (0.2126 * t + 0.7152 * n + 0.0722 * r),
                  100 * (0.0193 * t + 0.1192 * n + 0.9505 * r),
                ];
              }),
              (a.rgb.lab = function (e) {
                var t = a.rgb.xyz(e),
                  n = t[0],
                  r = t[1],
                  i = t[2];
                return (
                  (r /= 100),
                  (i /= 108.883),
                  (n =
                    (n /= 95.047) > 0.008856
                      ? Math.pow(n, 1 / 3)
                      : 7.787 * n + 16 / 116),
                  [
                    116 *
                      (r =
                        r > 0.008856
                          ? Math.pow(r, 1 / 3)
                          : 7.787 * r + 16 / 116) -
                      16,
                    500 * (n - r),
                    200 *
                      (r -
                        (i =
                          i > 0.008856
                            ? Math.pow(i, 1 / 3)
                            : 7.787 * i + 16 / 116)),
                  ]
                );
              }),
              (a.hsl.rgb = function (e) {
                var t,
                  n,
                  r,
                  a,
                  i,
                  o = e[0] / 360,
                  l = e[1] / 100,
                  s = e[2] / 100;
                if (0 === l) return [(i = 255 * s), i, i];
                (t = 2 * s - (n = s < 0.5 ? s * (1 + l) : s + l - s * l)),
                  (a = [0, 0, 0]);
                for (var u = 0; u < 3; u++)
                  (r = o + (1 / 3) * -(u - 1)) < 0 && r++,
                    r > 1 && r--,
                    (i =
                      6 * r < 1
                        ? t + 6 * (n - t) * r
                        : 2 * r < 1
                        ? n
                        : 3 * r < 2
                        ? t + (n - t) * (2 / 3 - r) * 6
                        : t),
                    (a[u] = 255 * i);
                return a;
              }),
              (a.hsl.hsv = function (e) {
                var t = e[0],
                  n = e[1] / 100,
                  r = e[2] / 100,
                  a = n,
                  i = Math.max(r, 0.01);
                return (
                  (n *= (r *= 2) <= 1 ? r : 2 - r),
                  (a *= i <= 1 ? i : 2 - i),
                  [
                    t,
                    100 * (0 === r ? (2 * a) / (i + a) : (2 * n) / (r + n)),
                    ((r + n) / 2) * 100,
                  ]
                );
              }),
              (a.hsv.rgb = function (e) {
                var t = e[0] / 60,
                  n = e[1] / 100,
                  r = e[2] / 100,
                  a = Math.floor(t) % 6,
                  i = t - Math.floor(t),
                  o = 255 * r * (1 - n),
                  l = 255 * r * (1 - n * i),
                  s = 255 * r * (1 - n * (1 - i));
                switch (((r *= 255), a)) {
                  case 0:
                    return [r, s, o];
                  case 1:
                    return [l, r, o];
                  case 2:
                    return [o, r, s];
                  case 3:
                    return [o, l, r];
                  case 4:
                    return [s, o, r];
                  case 5:
                    return [r, o, l];
                }
              }),
              (a.hsv.hsl = function (e) {
                var t,
                  n,
                  r,
                  a = e[0],
                  i = e[1] / 100,
                  o = e[2] / 100,
                  l = Math.max(o, 0.01);
                return (
                  (r = (2 - i) * o),
                  (n = i * l),
                  [
                    a,
                    100 * (n = (n /= (t = (2 - i) * l) <= 1 ? t : 2 - t) || 0),
                    100 * (r /= 2),
                  ]
                );
              }),
              (a.hwb.rgb = function (e) {
                var t,
                  n,
                  r,
                  a,
                  i,
                  o,
                  l,
                  s = e[0] / 360,
                  u = e[1] / 100,
                  c = e[2] / 100,
                  f = u + c;
                switch (
                  (f > 1 && ((u /= f), (c /= f)),
                  (r = 6 * s - (t = Math.floor(6 * s))),
                  0 !== (1 & t) && (r = 1 - r),
                  (a = u + r * ((n = 1 - c) - u)),
                  t)
                ) {
                  default:
                  case 6:
                  case 0:
                    (i = n), (o = a), (l = u);
                    break;
                  case 1:
                    (i = a), (o = n), (l = u);
                    break;
                  case 2:
                    (i = u), (o = n), (l = a);
                    break;
                  case 3:
                    (i = u), (o = a), (l = n);
                    break;
                  case 4:
                    (i = a), (o = u), (l = n);
                    break;
                  case 5:
                    (i = n), (o = u), (l = a);
                }
                return [255 * i, 255 * o, 255 * l];
              }),
              (a.cmyk.rgb = function (e) {
                var t = e[0] / 100,
                  n = e[1] / 100,
                  r = e[2] / 100,
                  a = e[3] / 100;
                return [
                  255 * (1 - Math.min(1, t * (1 - a) + a)),
                  255 * (1 - Math.min(1, n * (1 - a) + a)),
                  255 * (1 - Math.min(1, r * (1 - a) + a)),
                ];
              }),
              (a.xyz.rgb = function (e) {
                var t,
                  n,
                  r,
                  a = e[0] / 100,
                  i = e[1] / 100,
                  o = e[2] / 100;
                return (
                  (n = -0.9689 * a + 1.8758 * i + 0.0415 * o),
                  (r = 0.0557 * a + -0.204 * i + 1.057 * o),
                  (t =
                    (t = 3.2406 * a + -1.5372 * i + -0.4986 * o) > 0.0031308
                      ? 1.055 * Math.pow(t, 1 / 2.4) - 0.055
                      : 12.92 * t),
                  (n =
                    n > 0.0031308
                      ? 1.055 * Math.pow(n, 1 / 2.4) - 0.055
                      : 12.92 * n),
                  (r =
                    r > 0.0031308
                      ? 1.055 * Math.pow(r, 1 / 2.4) - 0.055
                      : 12.92 * r),
                  [
                    255 * (t = Math.min(Math.max(0, t), 1)),
                    255 * (n = Math.min(Math.max(0, n), 1)),
                    255 * (r = Math.min(Math.max(0, r), 1)),
                  ]
                );
              }),
              (a.xyz.lab = function (e) {
                var t = e[0],
                  n = e[1],
                  r = e[2];
                return (
                  (n /= 100),
                  (r /= 108.883),
                  (t =
                    (t /= 95.047) > 0.008856
                      ? Math.pow(t, 1 / 3)
                      : 7.787 * t + 16 / 116),
                  [
                    116 *
                      (n =
                        n > 0.008856
                          ? Math.pow(n, 1 / 3)
                          : 7.787 * n + 16 / 116) -
                      16,
                    500 * (t - n),
                    200 *
                      (n -
                        (r =
                          r > 0.008856
                            ? Math.pow(r, 1 / 3)
                            : 7.787 * r + 16 / 116)),
                  ]
                );
              }),
              (a.lab.xyz = function (e) {
                var t,
                  n,
                  r,
                  a = e[0];
                (t = e[1] / 500 + (n = (a + 16) / 116)), (r = n - e[2] / 200);
                var i = Math.pow(n, 3),
                  o = Math.pow(t, 3),
                  l = Math.pow(r, 3);
                return (
                  (n = i > 0.008856 ? i : (n - 16 / 116) / 7.787),
                  (t = o > 0.008856 ? o : (t - 16 / 116) / 7.787),
                  (r = l > 0.008856 ? l : (r - 16 / 116) / 7.787),
                  [(t *= 95.047), (n *= 100), (r *= 108.883)]
                );
              }),
              (a.lab.lch = function (e) {
                var t,
                  n = e[0],
                  r = e[1],
                  a = e[2];
                return (
                  (t = (360 * Math.atan2(a, r)) / 2 / Math.PI) < 0 &&
                    (t += 360),
                  [n, Math.sqrt(r * r + a * a), t]
                );
              }),
              (a.lch.lab = function (e) {
                var t,
                  n = e[0],
                  r = e[1];
                return (
                  (t = (e[2] / 360) * 2 * Math.PI),
                  [n, r * Math.cos(t), r * Math.sin(t)]
                );
              }),
              (a.rgb.ansi16 = function (e) {
                var t = e[0],
                  n = e[1],
                  r = e[2],
                  i = 1 in arguments ? arguments[1] : a.rgb.hsv(e)[2];
                if (0 === (i = Math.round(i / 50))) return 30;
                var o =
                  30 +
                  ((Math.round(r / 255) << 2) |
                    (Math.round(n / 255) << 1) |
                    Math.round(t / 255));
                return 2 === i && (o += 60), o;
              }),
              (a.hsv.ansi16 = function (e) {
                return a.rgb.ansi16(a.hsv.rgb(e), e[2]);
              }),
              (a.rgb.ansi256 = function (e) {
                var t = e[0],
                  n = e[1],
                  r = e[2];
                return t === n && n === r
                  ? t < 8
                    ? 16
                    : t > 248
                    ? 231
                    : Math.round(((t - 8) / 247) * 24) + 232
                  : 16 +
                      36 * Math.round((t / 255) * 5) +
                      6 * Math.round((n / 255) * 5) +
                      Math.round((r / 255) * 5);
              }),
              (a.ansi16.rgb = function (e) {
                var t = e % 10;
                if (0 === t || 7 === t)
                  return e > 50 && (t += 3.5), [(t = (t / 10.5) * 255), t, t];
                var n = 0.5 * (1 + ~~(e > 50));
                return [
                  (1 & t) * n * 255,
                  ((t >> 1) & 1) * n * 255,
                  ((t >> 2) & 1) * n * 255,
                ];
              }),
              (a.ansi256.rgb = function (e) {
                if (e >= 232) {
                  var t = 10 * (e - 232) + 8;
                  return [t, t, t];
                }
                var n;
                return (
                  (e -= 16),
                  [
                    (Math.floor(e / 36) / 5) * 255,
                    (Math.floor((n = e % 36) / 6) / 5) * 255,
                    ((n % 6) / 5) * 255,
                  ]
                );
              }),
              (a.rgb.hex = function (e) {
                var t = (
                  ((255 & Math.round(e[0])) << 16) +
                  ((255 & Math.round(e[1])) << 8) +
                  (255 & Math.round(e[2]))
                )
                  .toString(16)
                  .toUpperCase();
                return "000000".substring(t.length) + t;
              }),
              (a.hex.rgb = function (e) {
                var t = e.toString(16).match(/[a-f0-9]{6}|[a-f0-9]{3}/i);
                if (!t) return [0, 0, 0];
                var n = t[0];
                3 === t[0].length &&
                  (n = n
                    .split("")
                    .map(function (e) {
                      return e + e;
                    })
                    .join(""));
                var r = parseInt(n, 16);
                return [(r >> 16) & 255, (r >> 8) & 255, 255 & r];
              }),
              (a.rgb.hcg = function (e) {
                var t,
                  n = e[0] / 255,
                  r = e[1] / 255,
                  a = e[2] / 255,
                  i = Math.max(Math.max(n, r), a),
                  o = Math.min(Math.min(n, r), a),
                  l = i - o;
                return (
                  (t =
                    l <= 0
                      ? 0
                      : i === n
                      ? ((r - a) / l) % 6
                      : i === r
                      ? 2 + (a - n) / l
                      : 4 + (n - r) / l + 4),
                  (t /= 6),
                  [360 * (t %= 1), 100 * l, 100 * (l < 1 ? o / (1 - l) : 0)]
                );
              }),
              (a.hsl.hcg = function (e) {
                var t = e[1] / 100,
                  n = e[2] / 100,
                  r = 1,
                  a = 0;
                return (
                  (r = n < 0.5 ? 2 * t * n : 2 * t * (1 - n)) < 1 &&
                    (a = (n - 0.5 * r) / (1 - r)),
                  [e[0], 100 * r, 100 * a]
                );
              }),
              (a.hsv.hcg = function (e) {
                var t = e[1] / 100,
                  n = e[2] / 100,
                  r = t * n,
                  a = 0;
                return (
                  r < 1 && (a = (n - r) / (1 - r)), [e[0], 100 * r, 100 * a]
                );
              }),
              (a.hcg.rgb = function (e) {
                var t = e[0] / 360,
                  n = e[1] / 100,
                  r = e[2] / 100;
                if (0 === n) return [255 * r, 255 * r, 255 * r];
                var a = [0, 0, 0],
                  i = (t % 1) * 6,
                  o = i % 1,
                  l = 1 - o,
                  s = 0;
                switch (Math.floor(i)) {
                  case 0:
                    (a[0] = 1), (a[1] = o), (a[2] = 0);
                    break;
                  case 1:
                    (a[0] = l), (a[1] = 1), (a[2] = 0);
                    break;
                  case 2:
                    (a[0] = 0), (a[1] = 1), (a[2] = o);
                    break;
                  case 3:
                    (a[0] = 0), (a[1] = l), (a[2] = 1);
                    break;
                  case 4:
                    (a[0] = o), (a[1] = 0), (a[2] = 1);
                    break;
                  default:
                    (a[0] = 1), (a[1] = 0), (a[2] = l);
                }
                return (
                  (s = (1 - n) * r),
                  [
                    255 * (n * a[0] + s),
                    255 * (n * a[1] + s),
                    255 * (n * a[2] + s),
                  ]
                );
              }),
              (a.hcg.hsv = function (e) {
                var t = e[1] / 100,
                  n = t + (e[2] / 100) * (1 - t),
                  r = 0;
                return n > 0 && (r = t / n), [e[0], 100 * r, 100 * n];
              }),
              (a.hcg.hsl = function (e) {
                var t = e[1] / 100,
                  n = (e[2] / 100) * (1 - t) + 0.5 * t,
                  r = 0;
                return (
                  n > 0 && n < 0.5
                    ? (r = t / (2 * n))
                    : n >= 0.5 && n < 1 && (r = t / (2 * (1 - n))),
                  [e[0], 100 * r, 100 * n]
                );
              }),
              (a.hcg.hwb = function (e) {
                var t = e[1] / 100,
                  n = t + (e[2] / 100) * (1 - t);
                return [e[0], 100 * (n - t), 100 * (1 - n)];
              }),
              (a.hwb.hcg = function (e) {
                var t = e[1] / 100,
                  n = 1 - e[2] / 100,
                  r = n - t,
                  a = 0;
                return (
                  r < 1 && (a = (n - r) / (1 - r)), [e[0], 100 * r, 100 * a]
                );
              }),
              (a.apple.rgb = function (e) {
                return [
                  (e[0] / 65535) * 255,
                  (e[1] / 65535) * 255,
                  (e[2] / 65535) * 255,
                ];
              }),
              (a.rgb.apple = function (e) {
                return [
                  (e[0] / 255) * 65535,
                  (e[1] / 255) * 65535,
                  (e[2] / 255) * 65535,
                ];
              }),
              (a.gray.rgb = function (e) {
                return [
                  (e[0] / 100) * 255,
                  (e[0] / 100) * 255,
                  (e[0] / 100) * 255,
                ];
              }),
              (a.gray.hsl = a.gray.hsv = function (e) {
                return [0, 0, e[0]];
              }),
              (a.gray.hwb = function (e) {
                return [0, 100, e[0]];
              }),
              (a.gray.cmyk = function (e) {
                return [0, 0, 0, e[0]];
              }),
              (a.gray.lab = function (e) {
                return [e[0], 0, 0];
              }),
              (a.gray.hex = function (e) {
                var t = 255 & Math.round((e[0] / 100) * 255),
                  n = ((t << 16) + (t << 8) + t).toString(16).toUpperCase();
                return "000000".substring(n.length) + n;
              }),
              (a.rgb.gray = function (e) {
                return [((e[0] + e[1] + e[2]) / 3 / 255) * 100];
              });
          });
        function i() {
          for (var e = {}, t = Object.keys(a), n = t.length, r = 0; r < n; r++)
            e[t[r]] = { distance: -1, parent: null };
          return e;
        }
        function o(e) {
          var t = i(),
            n = [e];
          for (t[e].distance = 0; n.length; )
            for (
              var r = n.pop(), o = Object.keys(a[r]), l = o.length, s = 0;
              s < l;
              s++
            ) {
              var u = o[s],
                c = t[u];
              -1 === c.distance &&
                ((c.distance = t[r].distance + 1),
                (c.parent = r),
                n.unshift(u));
            }
          return t;
        }
        function l(e, t) {
          return function (n) {
            return t(e(n));
          };
        }
        function s(e, t) {
          for (
            var n = [t[e].parent, e], r = a[t[e].parent][e], i = t[e].parent;
            t[i].parent;

          )
            n.unshift(t[i].parent),
              (r = l(a[t[i].parent][i], r)),
              (i = t[i].parent);
          return (r.conversion = n), r;
        }
        a.rgb,
          a.hsl,
          a.hsv,
          a.hwb,
          a.cmyk,
          a.xyz,
          a.lab,
          a.lch,
          a.hex,
          a.keyword,
          a.ansi16,
          a.ansi256,
          a.hcg,
          a.apple,
          a.gray;
        var u = function (e) {
            for (
              var t = o(e), n = {}, r = Object.keys(t), a = r.length, i = 0;
              i < a;
              i++
            ) {
              var l = r[i];
              null !== t[l].parent && (n[l] = s(l, t));
            }
            return n;
          },
          c = {};
        function f(e) {
          var t = function (t) {
            return void 0 === t || null === t
              ? t
              : (arguments.length > 1 &&
                  (t = Array.prototype.slice.call(arguments)),
                e(t));
          };
          return "conversion" in e && (t.conversion = e.conversion), t;
        }
        function d(e) {
          var t = function (t) {
            if (void 0 === t || null === t) return t;
            arguments.length > 1 && (t = Array.prototype.slice.call(arguments));
            var n = e(t);
            if ("object" === typeof n)
              for (var r = n.length, a = 0; a < r; a++) n[a] = Math.round(n[a]);
            return n;
          };
          return "conversion" in e && (t.conversion = e.conversion), t;
        }
        Object.keys(a).forEach(function (e) {
          (c[e] = {}),
            Object.defineProperty(c[e], "channels", { value: a[e].channels }),
            Object.defineProperty(c[e], "labels", { value: a[e].labels });
          var t = u(e);
          Object.keys(t).forEach(function (n) {
            var r = t[n];
            (c[e][n] = d(r)), (c[e][n].raw = f(r));
          });
        });
        var h = c,
          p = {
            aliceblue: [240, 248, 255],
            antiquewhite: [250, 235, 215],
            aqua: [0, 255, 255],
            aquamarine: [127, 255, 212],
            azure: [240, 255, 255],
            beige: [245, 245, 220],
            bisque: [255, 228, 196],
            black: [0, 0, 0],
            blanchedalmond: [255, 235, 205],
            blue: [0, 0, 255],
            blueviolet: [138, 43, 226],
            brown: [165, 42, 42],
            burlywood: [222, 184, 135],
            cadetblue: [95, 158, 160],
            chartreuse: [127, 255, 0],
            chocolate: [210, 105, 30],
            coral: [255, 127, 80],
            cornflowerblue: [100, 149, 237],
            cornsilk: [255, 248, 220],
            crimson: [220, 20, 60],
            cyan: [0, 255, 255],
            darkblue: [0, 0, 139],
            darkcyan: [0, 139, 139],
            darkgoldenrod: [184, 134, 11],
            darkgray: [169, 169, 169],
            darkgreen: [0, 100, 0],
            darkgrey: [169, 169, 169],
            darkkhaki: [189, 183, 107],
            darkmagenta: [139, 0, 139],
            darkolivegreen: [85, 107, 47],
            darkorange: [255, 140, 0],
            darkorchid: [153, 50, 204],
            darkred: [139, 0, 0],
            darksalmon: [233, 150, 122],
            darkseagreen: [143, 188, 143],
            darkslateblue: [72, 61, 139],
            darkslategray: [47, 79, 79],
            darkslategrey: [47, 79, 79],
            darkturquoise: [0, 206, 209],
            darkviolet: [148, 0, 211],
            deeppink: [255, 20, 147],
            deepskyblue: [0, 191, 255],
            dimgray: [105, 105, 105],
            dimgrey: [105, 105, 105],
            dodgerblue: [30, 144, 255],
            firebrick: [178, 34, 34],
            floralwhite: [255, 250, 240],
            forestgreen: [34, 139, 34],
            fuchsia: [255, 0, 255],
            gainsboro: [220, 220, 220],
            ghostwhite: [248, 248, 255],
            gold: [255, 215, 0],
            goldenrod: [218, 165, 32],
            gray: [128, 128, 128],
            green: [0, 128, 0],
            greenyellow: [173, 255, 47],
            grey: [128, 128, 128],
            honeydew: [240, 255, 240],
            hotpink: [255, 105, 180],
            indianred: [205, 92, 92],
            indigo: [75, 0, 130],
            ivory: [255, 255, 240],
            khaki: [240, 230, 140],
            lavender: [230, 230, 250],
            lavenderblush: [255, 240, 245],
            lawngreen: [124, 252, 0],
            lemonchiffon: [255, 250, 205],
            lightblue: [173, 216, 230],
            lightcoral: [240, 128, 128],
            lightcyan: [224, 255, 255],
            lightgoldenrodyellow: [250, 250, 210],
            lightgray: [211, 211, 211],
            lightgreen: [144, 238, 144],
            lightgrey: [211, 211, 211],
            lightpink: [255, 182, 193],
            lightsalmon: [255, 160, 122],
            lightseagreen: [32, 178, 170],
            lightskyblue: [135, 206, 250],
            lightslategray: [119, 136, 153],
            lightslategrey: [119, 136, 153],
            lightsteelblue: [176, 196, 222],
            lightyellow: [255, 255, 224],
            lime: [0, 255, 0],
            limegreen: [50, 205, 50],
            linen: [250, 240, 230],
            magenta: [255, 0, 255],
            maroon: [128, 0, 0],
            mediumaquamarine: [102, 205, 170],
            mediumblue: [0, 0, 205],
            mediumorchid: [186, 85, 211],
            mediumpurple: [147, 112, 219],
            mediumseagreen: [60, 179, 113],
            mediumslateblue: [123, 104, 238],
            mediumspringgreen: [0, 250, 154],
            mediumturquoise: [72, 209, 204],
            mediumvioletred: [199, 21, 133],
            midnightblue: [25, 25, 112],
            mintcream: [245, 255, 250],
            mistyrose: [255, 228, 225],
            moccasin: [255, 228, 181],
            navajowhite: [255, 222, 173],
            navy: [0, 0, 128],
            oldlace: [253, 245, 230],
            olive: [128, 128, 0],
            olivedrab: [107, 142, 35],
            orange: [255, 165, 0],
            orangered: [255, 69, 0],
            orchid: [218, 112, 214],
            palegoldenrod: [238, 232, 170],
            palegreen: [152, 251, 152],
            paleturquoise: [175, 238, 238],
            palevioletred: [219, 112, 147],
            papayawhip: [255, 239, 213],
            peachpuff: [255, 218, 185],
            peru: [205, 133, 63],
            pink: [255, 192, 203],
            plum: [221, 160, 221],
            powderblue: [176, 224, 230],
            purple: [128, 0, 128],
            rebeccapurple: [102, 51, 153],
            red: [255, 0, 0],
            rosybrown: [188, 143, 143],
            royalblue: [65, 105, 225],
            saddlebrown: [139, 69, 19],
            salmon: [250, 128, 114],
            sandybrown: [244, 164, 96],
            seagreen: [46, 139, 87],
            seashell: [255, 245, 238],
            sienna: [160, 82, 45],
            silver: [192, 192, 192],
            skyblue: [135, 206, 235],
            slateblue: [106, 90, 205],
            slategray: [112, 128, 144],
            slategrey: [112, 128, 144],
            snow: [255, 250, 250],
            springgreen: [0, 255, 127],
            steelblue: [70, 130, 180],
            tan: [210, 180, 140],
            teal: [0, 128, 128],
            thistle: [216, 191, 216],
            tomato: [255, 99, 71],
            turquoise: [64, 224, 208],
            violet: [238, 130, 238],
            wheat: [245, 222, 179],
            white: [255, 255, 255],
            whitesmoke: [245, 245, 245],
            yellow: [255, 255, 0],
            yellowgreen: [154, 205, 50],
          },
          g = {
            getRgba: m,
            getHsla: v,
            getRgb: b,
            getHsl: x,
            getHwb: y,
            getAlpha: _,
            hexString: w,
            rgbString: k,
            rgbaString: S,
            percentString: C,
            percentaString: M,
            hslString: O,
            hslaString: P,
            hwbString: E,
            keyword: D,
          };
        function m(e) {
          if (e) {
            var t = /^#([a-fA-F0-9]{3,4})$/i,
              n = /^#([a-fA-F0-9]{6}([a-fA-F0-9]{2})?)$/i,
              r = /^rgba?\(\s*([+-]?\d+)\s*,\s*([+-]?\d+)\s*,\s*([+-]?\d+)\s*(?:,\s*([+-]?[\d\.]+)\s*)?\)$/i,
              a = /^rgba?\(\s*([+-]?[\d\.]+)\%\s*,\s*([+-]?[\d\.]+)\%\s*,\s*([+-]?[\d\.]+)\%\s*(?:,\s*([+-]?[\d\.]+)\s*)?\)$/i,
              i = /(\w+)/,
              o = [0, 0, 0],
              l = 1,
              s = e.match(t),
              u = "";
            if (s) {
              u = (s = s[1])[3];
              for (var c = 0; c < o.length; c++)
                o[c] = parseInt(s[c] + s[c], 16);
              u && (l = Math.round((parseInt(u + u, 16) / 255) * 100) / 100);
            } else if ((s = e.match(n))) {
              for (u = s[2], s = s[1], c = 0; c < o.length; c++)
                o[c] = parseInt(s.slice(2 * c, 2 * c + 2), 16);
              u && (l = Math.round((parseInt(u, 16) / 255) * 100) / 100);
            } else if ((s = e.match(r))) {
              for (c = 0; c < o.length; c++) o[c] = parseInt(s[c + 1]);
              l = parseFloat(s[4]);
            } else if ((s = e.match(a))) {
              for (c = 0; c < o.length; c++)
                o[c] = Math.round(2.55 * parseFloat(s[c + 1]));
              l = parseFloat(s[4]);
            } else if ((s = e.match(i))) {
              if ("transparent" == s[1]) return [0, 0, 0, 0];
              if (!(o = p[s[1]])) return;
            }
            for (c = 0; c < o.length; c++) o[c] = T(o[c], 0, 255);
            return (l = l || 0 == l ? T(l, 0, 1) : 1), (o[3] = l), o;
          }
        }
        function v(e) {
          if (e) {
            var t = /^hsla?\(\s*([+-]?\d+)(?:deg)?\s*,\s*([+-]?[\d\.]+)%\s*,\s*([+-]?[\d\.]+)%\s*(?:,\s*([+-]?[\d\.]+)\s*)?\)/,
              n = e.match(t);
            if (n) {
              var r = parseFloat(n[4]);
              return [
                T(parseInt(n[1]), 0, 360),
                T(parseFloat(n[2]), 0, 100),
                T(parseFloat(n[3]), 0, 100),
                T(isNaN(r) ? 1 : r, 0, 1),
              ];
            }
          }
        }
        function y(e) {
          if (e) {
            var t = /^hwb\(\s*([+-]?\d+)(?:deg)?\s*,\s*([+-]?[\d\.]+)%\s*,\s*([+-]?[\d\.]+)%\s*(?:,\s*([+-]?[\d\.]+)\s*)?\)/,
              n = e.match(t);
            if (n) {
              var r = parseFloat(n[4]);
              return [
                T(parseInt(n[1]), 0, 360),
                T(parseFloat(n[2]), 0, 100),
                T(parseFloat(n[3]), 0, 100),
                T(isNaN(r) ? 1 : r, 0, 1),
              ];
            }
          }
        }
        function b(e) {
          var t = m(e);
          return t && t.slice(0, 3);
        }
        function x(e) {
          var t = v(e);
          return t && t.slice(0, 3);
        }
        function _(e) {
          var t = m(e);
          return t || (t = v(e)) || (t = y(e)) ? t[3] : void 0;
        }
        function w(e, t) {
          return (
            (t = void 0 !== t && 3 === e.length ? t : e[3]),
            "#" +
              A(e[0]) +
              A(e[1]) +
              A(e[2]) +
              (t >= 0 && t < 1 ? A(Math.round(255 * t)) : "")
          );
        }
        function k(e, t) {
          return t < 1 || (e[3] && e[3] < 1)
            ? S(e, t)
            : "rgb(" + e[0] + ", " + e[1] + ", " + e[2] + ")";
        }
        function S(e, t) {
          return (
            void 0 === t && (t = void 0 !== e[3] ? e[3] : 1),
            "rgba(" + e[0] + ", " + e[1] + ", " + e[2] + ", " + t + ")"
          );
        }
        function C(e, t) {
          return t < 1 || (e[3] && e[3] < 1)
            ? M(e, t)
            : "rgb(" +
                Math.round((e[0] / 255) * 100) +
                "%, " +
                Math.round((e[1] / 255) * 100) +
                "%, " +
                Math.round((e[2] / 255) * 100) +
                "%)";
        }
        function M(e, t) {
          return (
            "rgba(" +
            Math.round((e[0] / 255) * 100) +
            "%, " +
            Math.round((e[1] / 255) * 100) +
            "%, " +
            Math.round((e[2] / 255) * 100) +
            "%, " +
            (t || e[3] || 1) +
            ")"
          );
        }
        function O(e, t) {
          return t < 1 || (e[3] && e[3] < 1)
            ? P(e, t)
            : "hsl(" + e[0] + ", " + e[1] + "%, " + e[2] + "%)";
        }
        function P(e, t) {
          return (
            void 0 === t && (t = void 0 !== e[3] ? e[3] : 1),
            "hsla(" + e[0] + ", " + e[1] + "%, " + e[2] + "%, " + t + ")"
          );
        }
        function E(e, t) {
          return (
            void 0 === t && (t = void 0 !== e[3] ? e[3] : 1),
            "hwb(" +
              e[0] +
              ", " +
              e[1] +
              "%, " +
              e[2] +
              "%" +
              (void 0 !== t && 1 !== t ? ", " + t : "") +
              ")"
          );
        }
        function D(e) {
          return N[e.slice(0, 3)];
        }
        function T(e, t, n) {
          return Math.min(Math.max(t, e), n);
        }
        function A(e) {
          var t = e.toString(16).toUpperCase();
          return t.length < 2 ? "0" + t : t;
        }
        var N = {};
        for (var I in p) N[p[I]] = I;
        var R = function e(t) {
          return t instanceof e
            ? t
            : this instanceof e
            ? ((this.valid = !1),
              (this.values = {
                rgb: [0, 0, 0],
                hsl: [0, 0, 0],
                hsv: [0, 0, 0],
                hwb: [0, 0, 0],
                cmyk: [0, 0, 0, 0],
                alpha: 1,
              }),
              void ("string" === typeof t
                ? (n = g.getRgba(t))
                  ? this.setValues("rgb", n)
                  : (n = g.getHsla(t))
                  ? this.setValues("hsl", n)
                  : (n = g.getHwb(t)) && this.setValues("hwb", n)
                : "object" === typeof t &&
                  (void 0 !== (n = t).r || void 0 !== n.red
                    ? this.setValues("rgb", n)
                    : void 0 !== n.l || void 0 !== n.lightness
                    ? this.setValues("hsl", n)
                    : void 0 !== n.v || void 0 !== n.value
                    ? this.setValues("hsv", n)
                    : void 0 !== n.w || void 0 !== n.whiteness
                    ? this.setValues("hwb", n)
                    : (void 0 === n.c && void 0 === n.cyan) ||
                      this.setValues("cmyk", n))))
            : new e(t);
          var n;
        };
        (R.prototype = {
          isValid: function () {
            return this.valid;
          },
          rgb: function () {
            return this.setSpace("rgb", arguments);
          },
          hsl: function () {
            return this.setSpace("hsl", arguments);
          },
          hsv: function () {
            return this.setSpace("hsv", arguments);
          },
          hwb: function () {
            return this.setSpace("hwb", arguments);
          },
          cmyk: function () {
            return this.setSpace("cmyk", arguments);
          },
          rgbArray: function () {
            return this.values.rgb;
          },
          hslArray: function () {
            return this.values.hsl;
          },
          hsvArray: function () {
            return this.values.hsv;
          },
          hwbArray: function () {
            var e = this.values;
            return 1 !== e.alpha ? e.hwb.concat([e.alpha]) : e.hwb;
          },
          cmykArray: function () {
            return this.values.cmyk;
          },
          rgbaArray: function () {
            var e = this.values;
            return e.rgb.concat([e.alpha]);
          },
          hslaArray: function () {
            var e = this.values;
            return e.hsl.concat([e.alpha]);
          },
          alpha: function (e) {
            return void 0 === e
              ? this.values.alpha
              : (this.setValues("alpha", e), this);
          },
          red: function (e) {
            return this.setChannel("rgb", 0, e);
          },
          green: function (e) {
            return this.setChannel("rgb", 1, e);
          },
          blue: function (e) {
            return this.setChannel("rgb", 2, e);
          },
          hue: function (e) {
            return (
              e && (e = (e %= 360) < 0 ? 360 + e : e),
              this.setChannel("hsl", 0, e)
            );
          },
          saturation: function (e) {
            return this.setChannel("hsl", 1, e);
          },
          lightness: function (e) {
            return this.setChannel("hsl", 2, e);
          },
          saturationv: function (e) {
            return this.setChannel("hsv", 1, e);
          },
          whiteness: function (e) {
            return this.setChannel("hwb", 1, e);
          },
          blackness: function (e) {
            return this.setChannel("hwb", 2, e);
          },
          value: function (e) {
            return this.setChannel("hsv", 2, e);
          },
          cyan: function (e) {
            return this.setChannel("cmyk", 0, e);
          },
          magenta: function (e) {
            return this.setChannel("cmyk", 1, e);
          },
          yellow: function (e) {
            return this.setChannel("cmyk", 2, e);
          },
          black: function (e) {
            return this.setChannel("cmyk", 3, e);
          },
          hexString: function () {
            return g.hexString(this.values.rgb);
          },
          rgbString: function () {
            return g.rgbString(this.values.rgb, this.values.alpha);
          },
          rgbaString: function () {
            return g.rgbaString(this.values.rgb, this.values.alpha);
          },
          percentString: function () {
            return g.percentString(this.values.rgb, this.values.alpha);
          },
          hslString: function () {
            return g.hslString(this.values.hsl, this.values.alpha);
          },
          hslaString: function () {
            return g.hslaString(this.values.hsl, this.values.alpha);
          },
          hwbString: function () {
            return g.hwbString(this.values.hwb, this.values.alpha);
          },
          keyword: function () {
            return g.keyword(this.values.rgb, this.values.alpha);
          },
          rgbNumber: function () {
            var e = this.values.rgb;
            return (e[0] << 16) | (e[1] << 8) | e[2];
          },
          luminosity: function () {
            for (var e = this.values.rgb, t = [], n = 0; n < e.length; n++) {
              var r = e[n] / 255;
              t[n] =
                r <= 0.03928 ? r / 12.92 : Math.pow((r + 0.055) / 1.055, 2.4);
            }
            return 0.2126 * t[0] + 0.7152 * t[1] + 0.0722 * t[2];
          },
          contrast: function (e) {
            var t = this.luminosity(),
              n = e.luminosity();
            return t > n ? (t + 0.05) / (n + 0.05) : (n + 0.05) / (t + 0.05);
          },
          level: function (e) {
            var t = this.contrast(e);
            return t >= 7.1 ? "AAA" : t >= 4.5 ? "AA" : "";
          },
          dark: function () {
            var e = this.values.rgb;
            return (299 * e[0] + 587 * e[1] + 114 * e[2]) / 1e3 < 128;
          },
          light: function () {
            return !this.dark();
          },
          negate: function () {
            for (var e = [], t = 0; t < 3; t++) e[t] = 255 - this.values.rgb[t];
            return this.setValues("rgb", e), this;
          },
          lighten: function (e) {
            var t = this.values.hsl;
            return (t[2] += t[2] * e), this.setValues("hsl", t), this;
          },
          darken: function (e) {
            var t = this.values.hsl;
            return (t[2] -= t[2] * e), this.setValues("hsl", t), this;
          },
          saturate: function (e) {
            var t = this.values.hsl;
            return (t[1] += t[1] * e), this.setValues("hsl", t), this;
          },
          desaturate: function (e) {
            var t = this.values.hsl;
            return (t[1] -= t[1] * e), this.setValues("hsl", t), this;
          },
          whiten: function (e) {
            var t = this.values.hwb;
            return (t[1] += t[1] * e), this.setValues("hwb", t), this;
          },
          blacken: function (e) {
            var t = this.values.hwb;
            return (t[2] += t[2] * e), this.setValues("hwb", t), this;
          },
          greyscale: function () {
            var e = this.values.rgb,
              t = 0.3 * e[0] + 0.59 * e[1] + 0.11 * e[2];
            return this.setValues("rgb", [t, t, t]), this;
          },
          clearer: function (e) {
            var t = this.values.alpha;
            return this.setValues("alpha", t - t * e), this;
          },
          opaquer: function (e) {
            var t = this.values.alpha;
            return this.setValues("alpha", t + t * e), this;
          },
          rotate: function (e) {
            var t = this.values.hsl,
              n = (t[0] + e) % 360;
            return (t[0] = n < 0 ? 360 + n : n), this.setValues("hsl", t), this;
          },
          mix: function (e, t) {
            var n = this,
              r = e,
              a = void 0 === t ? 0.5 : t,
              i = 2 * a - 1,
              o = n.alpha() - r.alpha(),
              l = ((i * o === -1 ? i : (i + o) / (1 + i * o)) + 1) / 2,
              s = 1 - l;
            return this.rgb(
              l * n.red() + s * r.red(),
              l * n.green() + s * r.green(),
              l * n.blue() + s * r.blue()
            ).alpha(n.alpha() * a + r.alpha() * (1 - a));
          },
          toJSON: function () {
            return this.rgb();
          },
          clone: function () {
            var e,
              t,
              n = new R(),
              r = this.values,
              a = n.values;
            for (var i in r)
              r.hasOwnProperty(i) &&
                ((e = r[i]),
                "[object Array]" === (t = {}.toString.call(e))
                  ? (a[i] = e.slice(0))
                  : "[object Number]" === t
                  ? (a[i] = e)
                  : console.error("unexpected color value:", e));
            return n;
          },
        }),
          (R.prototype.spaces = {
            rgb: ["red", "green", "blue"],
            hsl: ["hue", "saturation", "lightness"],
            hsv: ["hue", "saturation", "value"],
            hwb: ["hue", "whiteness", "blackness"],
            cmyk: ["cyan", "magenta", "yellow", "black"],
          }),
          (R.prototype.maxes = {
            rgb: [255, 255, 255],
            hsl: [360, 100, 100],
            hsv: [360, 100, 100],
            hwb: [360, 100, 100],
            cmyk: [100, 100, 100, 100],
          }),
          (R.prototype.getValues = function (e) {
            for (var t = this.values, n = {}, r = 0; r < e.length; r++)
              n[e.charAt(r)] = t[e][r];
            return 1 !== t.alpha && (n.a = t.alpha), n;
          }),
          (R.prototype.setValues = function (e, t) {
            var n,
              r,
              a = this.values,
              i = this.spaces,
              o = this.maxes,
              l = 1;
            if (((this.valid = !0), "alpha" === e)) l = t;
            else if (t.length) (a[e] = t.slice(0, e.length)), (l = t[e.length]);
            else if (void 0 !== t[e.charAt(0)]) {
              for (n = 0; n < e.length; n++) a[e][n] = t[e.charAt(n)];
              l = t.a;
            } else if (void 0 !== t[i[e][0]]) {
              var s = i[e];
              for (n = 0; n < e.length; n++) a[e][n] = t[s[n]];
              l = t.alpha;
            }
            if (
              ((a.alpha = Math.max(0, Math.min(1, void 0 === l ? a.alpha : l))),
              "alpha" === e)
            )
              return !1;
            for (n = 0; n < e.length; n++)
              (r = Math.max(0, Math.min(o[e][n], a[e][n]))),
                (a[e][n] = Math.round(r));
            for (var u in i) u !== e && (a[u] = h[e][u](a[e]));
            return !0;
          }),
          (R.prototype.setSpace = function (e, t) {
            var n = t[0];
            return void 0 === n
              ? this.getValues(e)
              : ("number" === typeof n && (n = Array.prototype.slice.call(t)),
                this.setValues(e, n),
                this);
          }),
          (R.prototype.setChannel = function (e, t, n) {
            var r = this.values[e];
            return void 0 === n
              ? r[t]
              : (n === r[t] || ((r[t] = n), this.setValues(e, r)), this);
          }),
          "undefined" !== typeof window && (window.Color = R);
        var L = R;
        function F(e) {
          return -1 === ["__proto__", "prototype", "constructor"].indexOf(e);
        }
        var j = {
            noop: function () {},
            uid: (function () {
              var e = 0;
              return function () {
                return e++;
              };
            })(),
            isNullOrUndef: function (e) {
              return null === e || "undefined" === typeof e;
            },
            isArray: function (e) {
              if (Array.isArray && Array.isArray(e)) return !0;
              var t = Object.prototype.toString.call(e);
              return "[object" === t.substr(0, 7) && "Array]" === t.substr(-6);
            },
            isObject: function (e) {
              return (
                null !== e &&
                "[object Object]" === Object.prototype.toString.call(e)
              );
            },
            isFinite: (function (e) {
              function t(t) {
                return e.apply(this, arguments);
              }
              return (
                (t.toString = function () {
                  return e.toString();
                }),
                t
              );
            })(function (e) {
              return (
                ("number" === typeof e || e instanceof Number) && isFinite(e)
              );
            }),
            valueOrDefault: function (e, t) {
              return "undefined" === typeof e ? t : e;
            },
            valueAtIndexOrDefault: function (e, t, n) {
              return j.valueOrDefault(j.isArray(e) ? e[t] : e, n);
            },
            callback: function (e, t, n) {
              if (e && "function" === typeof e.call) return e.apply(n, t);
            },
            each: function (e, t, n, r) {
              var a, i, o;
              if (j.isArray(e))
                if (((i = e.length), r))
                  for (a = i - 1; a >= 0; a--) t.call(n, e[a], a);
                else for (a = 0; a < i; a++) t.call(n, e[a], a);
              else if (j.isObject(e))
                for (i = (o = Object.keys(e)).length, a = 0; a < i; a++)
                  t.call(n, e[o[a]], o[a]);
            },
            arrayEquals: function (e, t) {
              var n, r, a, i;
              if (!e || !t || e.length !== t.length) return !1;
              for (n = 0, r = e.length; n < r; ++n)
                if (
                  ((a = e[n]),
                  (i = t[n]),
                  a instanceof Array && i instanceof Array)
                ) {
                  if (!j.arrayEquals(a, i)) return !1;
                } else if (a !== i) return !1;
              return !0;
            },
            clone: function (e) {
              if (j.isArray(e)) return e.map(j.clone);
              if (j.isObject(e)) {
                for (
                  var t = Object.create(e),
                    n = Object.keys(e),
                    r = n.length,
                    a = 0;
                  a < r;
                  ++a
                )
                  t[n[a]] = j.clone(e[n[a]]);
                return t;
              }
              return e;
            },
            _merger: function (e, t, n, r) {
              if (F(e)) {
                var a = t[e],
                  i = n[e];
                j.isObject(a) && j.isObject(i)
                  ? j.merge(a, i, r)
                  : (t[e] = j.clone(i));
              }
            },
            _mergerIf: function (e, t, n) {
              if (F(e)) {
                var r = t[e],
                  a = n[e];
                j.isObject(r) && j.isObject(a)
                  ? j.mergeIf(r, a)
                  : t.hasOwnProperty(e) || (t[e] = j.clone(a));
              }
            },
            merge: function (e, t, n) {
              var r,
                a,
                i,
                o,
                l,
                s = j.isArray(t) ? t : [t],
                u = s.length;
              if (!j.isObject(e)) return e;
              for (r = (n = n || {}).merger || j._merger, a = 0; a < u; ++a)
                if (((t = s[a]), j.isObject(t)))
                  for (l = 0, o = (i = Object.keys(t)).length; l < o; ++l)
                    r(i[l], e, t, n);
              return e;
            },
            mergeIf: function (e, t) {
              return j.merge(e, t, { merger: j._mergerIf });
            },
            extend:
              Object.assign ||
              function (e) {
                return j.merge(e, [].slice.call(arguments, 1), {
                  merger: function (e, t, n) {
                    t[e] = n[e];
                  },
                });
              },
            inherits: function (e) {
              var t = this,
                n =
                  e && e.hasOwnProperty("constructor")
                    ? e.constructor
                    : function () {
                        return t.apply(this, arguments);
                      },
                r = function () {
                  this.constructor = n;
                };
              return (
                (r.prototype = t.prototype),
                (n.prototype = new r()),
                (n.extend = j.inherits),
                e && j.extend(n.prototype, e),
                (n.__super__ = t.prototype),
                n
              );
            },
            _deprecated: function (e, t, n, r) {
              void 0 !== t &&
                console.warn(
                  e +
                    ': "' +
                    n +
                    '" is deprecated. Please use "' +
                    r +
                    '" instead'
                );
            },
          },
          z = j;
        (j.callCallback = j.callback),
          (j.indexOf = function (e, t, n) {
            return Array.prototype.indexOf.call(e, t, n);
          }),
          (j.getValueOrDefault = j.valueOrDefault),
          (j.getValueAtIndexOrDefault = j.valueAtIndexOrDefault);
        var W = {
            linear: function (e) {
              return e;
            },
            easeInQuad: function (e) {
              return e * e;
            },
            easeOutQuad: function (e) {
              return -e * (e - 2);
            },
            easeInOutQuad: function (e) {
              return (e /= 0.5) < 1 ? 0.5 * e * e : -0.5 * (--e * (e - 2) - 1);
            },
            easeInCubic: function (e) {
              return e * e * e;
            },
            easeOutCubic: function (e) {
              return (e -= 1) * e * e + 1;
            },
            easeInOutCubic: function (e) {
              return (e /= 0.5) < 1
                ? 0.5 * e * e * e
                : 0.5 * ((e -= 2) * e * e + 2);
            },
            easeInQuart: function (e) {
              return e * e * e * e;
            },
            easeOutQuart: function (e) {
              return -((e -= 1) * e * e * e - 1);
            },
            easeInOutQuart: function (e) {
              return (e /= 0.5) < 1
                ? 0.5 * e * e * e * e
                : -0.5 * ((e -= 2) * e * e * e - 2);
            },
            easeInQuint: function (e) {
              return e * e * e * e * e;
            },
            easeOutQuint: function (e) {
              return (e -= 1) * e * e * e * e + 1;
            },
            easeInOutQuint: function (e) {
              return (e /= 0.5) < 1
                ? 0.5 * e * e * e * e * e
                : 0.5 * ((e -= 2) * e * e * e * e + 2);
            },
            easeInSine: function (e) {
              return 1 - Math.cos(e * (Math.PI / 2));
            },
            easeOutSine: function (e) {
              return Math.sin(e * (Math.PI / 2));
            },
            easeInOutSine: function (e) {
              return -0.5 * (Math.cos(Math.PI * e) - 1);
            },
            easeInExpo: function (e) {
              return 0 === e ? 0 : Math.pow(2, 10 * (e - 1));
            },
            easeOutExpo: function (e) {
              return 1 === e ? 1 : 1 - Math.pow(2, -10 * e);
            },
            easeInOutExpo: function (e) {
              return 0 === e
                ? 0
                : 1 === e
                ? 1
                : (e /= 0.5) < 1
                ? 0.5 * Math.pow(2, 10 * (e - 1))
                : 0.5 * (2 - Math.pow(2, -10 * --e));
            },
            easeInCirc: function (e) {
              return e >= 1 ? e : -(Math.sqrt(1 - e * e) - 1);
            },
            easeOutCirc: function (e) {
              return Math.sqrt(1 - (e -= 1) * e);
            },
            easeInOutCirc: function (e) {
              return (e /= 0.5) < 1
                ? -0.5 * (Math.sqrt(1 - e * e) - 1)
                : 0.5 * (Math.sqrt(1 - (e -= 2) * e) + 1);
            },
            easeInElastic: function (e) {
              var t = 1.70158,
                n = 0,
                r = 1;
              return 0 === e
                ? 0
                : 1 === e
                ? 1
                : (n || (n = 0.3),
                  r < 1
                    ? ((r = 1), (t = n / 4))
                    : (t = (n / (2 * Math.PI)) * Math.asin(1 / r)),
                  -r *
                    Math.pow(2, 10 * (e -= 1)) *
                    Math.sin(((e - t) * (2 * Math.PI)) / n));
            },
            easeOutElastic: function (e) {
              var t = 1.70158,
                n = 0,
                r = 1;
              return 0 === e
                ? 0
                : 1 === e
                ? 1
                : (n || (n = 0.3),
                  r < 1
                    ? ((r = 1), (t = n / 4))
                    : (t = (n / (2 * Math.PI)) * Math.asin(1 / r)),
                  r *
                    Math.pow(2, -10 * e) *
                    Math.sin(((e - t) * (2 * Math.PI)) / n) +
                    1);
            },
            easeInOutElastic: function (e) {
              var t = 1.70158,
                n = 0,
                r = 1;
              return 0 === e
                ? 0
                : 2 === (e /= 0.5)
                ? 1
                : (n || (n = 0.45),
                  r < 1
                    ? ((r = 1), (t = n / 4))
                    : (t = (n / (2 * Math.PI)) * Math.asin(1 / r)),
                  e < 1
                    ? r *
                      Math.pow(2, 10 * (e -= 1)) *
                      Math.sin(((e - t) * (2 * Math.PI)) / n) *
                      -0.5
                    : r *
                        Math.pow(2, -10 * (e -= 1)) *
                        Math.sin(((e - t) * (2 * Math.PI)) / n) *
                        0.5 +
                      1);
            },
            easeInBack: function (e) {
              var t = 1.70158;
              return e * e * ((t + 1) * e - t);
            },
            easeOutBack: function (e) {
              var t = 1.70158;
              return (e -= 1) * e * ((t + 1) * e + t) + 1;
            },
            easeInOutBack: function (e) {
              var t = 1.70158;
              return (e /= 0.5) < 1
                ? e * e * ((1 + (t *= 1.525)) * e - t) * 0.5
                : 0.5 * ((e -= 2) * e * ((1 + (t *= 1.525)) * e + t) + 2);
            },
            easeInBounce: function (e) {
              return 1 - W.easeOutBounce(1 - e);
            },
            easeOutBounce: function (e) {
              return e < 1 / 2.75
                ? 7.5625 * e * e
                : e < 2 / 2.75
                ? 7.5625 * (e -= 1.5 / 2.75) * e + 0.75
                : e < 2.5 / 2.75
                ? 7.5625 * (e -= 2.25 / 2.75) * e + 0.9375
                : 7.5625 * (e -= 2.625 / 2.75) * e + 0.984375;
            },
            easeInOutBounce: function (e) {
              return e < 0.5
                ? 0.5 * W.easeInBounce(2 * e)
                : 0.5 * W.easeOutBounce(2 * e - 1) + 0.5;
            },
          },
          V = { effects: W };
        z.easingEffects = W;
        var Y = Math.PI,
          B = Y / 180,
          H = 2 * Y,
          U = Y / 2,
          $ = Y / 4,
          G = (2 * Y) / 3,
          q = {
            clear: function (e) {
              e.ctx.clearRect(0, 0, e.width, e.height);
            },
            roundedRect: function (e, t, n, r, a, i) {
              if (i) {
                var o = Math.min(i, a / 2, r / 2),
                  l = t + o,
                  s = n + o,
                  u = t + r - o,
                  c = n + a - o;
                e.moveTo(t, s),
                  l < u && s < c
                    ? (e.arc(l, s, o, -Y, -U),
                      e.arc(u, s, o, -U, 0),
                      e.arc(u, c, o, 0, U),
                      e.arc(l, c, o, U, Y))
                    : l < u
                    ? (e.moveTo(l, n),
                      e.arc(u, s, o, -U, U),
                      e.arc(l, s, o, U, Y + U))
                    : s < c
                    ? (e.arc(l, s, o, -Y, 0), e.arc(l, c, o, 0, Y))
                    : e.arc(l, s, o, -Y, Y),
                  e.closePath(),
                  e.moveTo(t, n);
              } else e.rect(t, n, r, a);
            },
            drawPoint: function (e, t, n, r, a, i) {
              var o,
                l,
                s,
                u,
                c,
                f = (i || 0) * B;
              if (
                t &&
                "object" === typeof t &&
                ("[object HTMLImageElement]" === (o = t.toString()) ||
                  "[object HTMLCanvasElement]" === o)
              )
                return (
                  e.save(),
                  e.translate(r, a),
                  e.rotate(f),
                  e.drawImage(
                    t,
                    -t.width / 2,
                    -t.height / 2,
                    t.width,
                    t.height
                  ),
                  void e.restore()
                );
              if (!(isNaN(n) || n <= 0)) {
                switch ((e.beginPath(), t)) {
                  default:
                    e.arc(r, a, n, 0, H), e.closePath();
                    break;
                  case "triangle":
                    e.moveTo(r + Math.sin(f) * n, a - Math.cos(f) * n),
                      (f += G),
                      e.lineTo(r + Math.sin(f) * n, a - Math.cos(f) * n),
                      (f += G),
                      e.lineTo(r + Math.sin(f) * n, a - Math.cos(f) * n),
                      e.closePath();
                    break;
                  case "rectRounded":
                    (u = n - (c = 0.516 * n)),
                      (l = Math.cos(f + $) * u),
                      (s = Math.sin(f + $) * u),
                      e.arc(r - l, a - s, c, f - Y, f - U),
                      e.arc(r + s, a - l, c, f - U, f),
                      e.arc(r + l, a + s, c, f, f + U),
                      e.arc(r - s, a + l, c, f + U, f + Y),
                      e.closePath();
                    break;
                  case "rect":
                    if (!i) {
                      (u = Math.SQRT1_2 * n),
                        e.rect(r - u, a - u, 2 * u, 2 * u);
                      break;
                    }
                    f += $;
                  case "rectRot":
                    (l = Math.cos(f) * n),
                      (s = Math.sin(f) * n),
                      e.moveTo(r - l, a - s),
                      e.lineTo(r + s, a - l),
                      e.lineTo(r + l, a + s),
                      e.lineTo(r - s, a + l),
                      e.closePath();
                    break;
                  case "crossRot":
                    f += $;
                  case "cross":
                    (l = Math.cos(f) * n),
                      (s = Math.sin(f) * n),
                      e.moveTo(r - l, a - s),
                      e.lineTo(r + l, a + s),
                      e.moveTo(r + s, a - l),
                      e.lineTo(r - s, a + l);
                    break;
                  case "star":
                    (l = Math.cos(f) * n),
                      (s = Math.sin(f) * n),
                      e.moveTo(r - l, a - s),
                      e.lineTo(r + l, a + s),
                      e.moveTo(r + s, a - l),
                      e.lineTo(r - s, a + l),
                      (f += $),
                      (l = Math.cos(f) * n),
                      (s = Math.sin(f) * n),
                      e.moveTo(r - l, a - s),
                      e.lineTo(r + l, a + s),
                      e.moveTo(r + s, a - l),
                      e.lineTo(r - s, a + l);
                    break;
                  case "line":
                    (l = Math.cos(f) * n),
                      (s = Math.sin(f) * n),
                      e.moveTo(r - l, a - s),
                      e.lineTo(r + l, a + s);
                    break;
                  case "dash":
                    e.moveTo(r, a),
                      e.lineTo(r + Math.cos(f) * n, a + Math.sin(f) * n);
                }
                e.fill(), e.stroke();
              }
            },
            _isPointInArea: function (e, t) {
              var n = 1e-6;
              return (
                e.x > t.left - n &&
                e.x < t.right + n &&
                e.y > t.top - n &&
                e.y < t.bottom + n
              );
            },
            clipArea: function (e, t) {
              e.save(),
                e.beginPath(),
                e.rect(t.left, t.top, t.right - t.left, t.bottom - t.top),
                e.clip();
            },
            unclipArea: function (e) {
              e.restore();
            },
            lineTo: function (e, t, n, r) {
              var a = n.steppedLine;
              if (a) {
                if ("middle" === a) {
                  var i = (t.x + n.x) / 2;
                  e.lineTo(i, r ? n.y : t.y), e.lineTo(i, r ? t.y : n.y);
                } else
                  ("after" === a && !r) || ("after" !== a && r)
                    ? e.lineTo(t.x, n.y)
                    : e.lineTo(n.x, t.y);
                e.lineTo(n.x, n.y);
              } else
                n.tension
                  ? e.bezierCurveTo(
                      r ? t.controlPointPreviousX : t.controlPointNextX,
                      r ? t.controlPointPreviousY : t.controlPointNextY,
                      r ? n.controlPointNextX : n.controlPointPreviousX,
                      r ? n.controlPointNextY : n.controlPointPreviousY,
                      n.x,
                      n.y
                    )
                  : e.lineTo(n.x, n.y);
            },
          },
          K = q;
        (z.clear = q.clear),
          (z.drawRoundedRectangle = function (e) {
            e.beginPath(), q.roundedRect.apply(q, arguments);
          });
        var Q = {
          _set: function (e, t) {
            return z.merge(this[e] || (this[e] = {}), t);
          },
        };
        Q._set("global", {
          defaultColor: "rgba(0,0,0,0.1)",
          defaultFontColor: "#666",
          defaultFontFamily:
            "'Helvetica Neue', 'Helvetica', 'Arial', sans-serif",
          defaultFontSize: 12,
          defaultFontStyle: "normal",
          defaultLineHeight: 1.2,
          showLines: !0,
        });
        var Z = Q,
          X = z.valueOrDefault;
        function J(e) {
          return !e || z.isNullOrUndef(e.size) || z.isNullOrUndef(e.family)
            ? null
            : (e.style ? e.style + " " : "") +
                (e.weight ? e.weight + " " : "") +
                e.size +
                "px " +
                e.family;
        }
        var ee = {
            toLineHeight: function (e, t) {
              var n = ("" + e).match(/^(normal|(\d+(?:\.\d+)?)(px|em|%)?)$/);
              if (!n || "normal" === n[1]) return 1.2 * t;
              switch (((e = +n[2]), n[3])) {
                case "px":
                  return e;
                case "%":
                  e /= 100;
              }
              return t * e;
            },
            toPadding: function (e) {
              var t, n, r, a;
              return (
                z.isObject(e)
                  ? ((t = +e.top || 0),
                    (n = +e.right || 0),
                    (r = +e.bottom || 0),
                    (a = +e.left || 0))
                  : (t = n = r = a = +e || 0),
                {
                  top: t,
                  right: n,
                  bottom: r,
                  left: a,
                  height: t + r,
                  width: a + n,
                }
              );
            },
            _parseFont: function (e) {
              var t = Z.global,
                n = X(e.fontSize, t.defaultFontSize),
                r = {
                  family: X(e.fontFamily, t.defaultFontFamily),
                  lineHeight: z.options.toLineHeight(
                    X(e.lineHeight, t.defaultLineHeight),
                    n
                  ),
                  size: n,
                  style: X(e.fontStyle, t.defaultFontStyle),
                  weight: null,
                  string: "",
                };
              return (r.string = J(r)), r;
            },
            resolve: function (e, t, n, r) {
              var a,
                i,
                o,
                l = !0;
              for (a = 0, i = e.length; a < i; ++a)
                if (
                  void 0 !== (o = e[a]) &&
                  (void 0 !== t &&
                    "function" === typeof o &&
                    ((o = o(t)), (l = !1)),
                  void 0 !== n && z.isArray(o) && ((o = o[n]), (l = !1)),
                  void 0 !== o)
                )
                  return r && !l && (r.cacheable = !1), o;
            },
          },
          te = {
            _factorize: function (e) {
              var t,
                n = [],
                r = Math.sqrt(e);
              for (t = 1; t < r; t++) e % t === 0 && (n.push(t), n.push(e / t));
              return (
                r === (0 | r) && n.push(r),
                n
                  .sort(function (e, t) {
                    return e - t;
                  })
                  .pop(),
                n
              );
            },
            log10:
              Math.log10 ||
              function (e) {
                var t = Math.log(e) * Math.LOG10E,
                  n = Math.round(t);
                return e === Math.pow(10, n) ? n : t;
              },
          },
          ne = te;
        z.log10 = te.log10;
        var re = function (e, t) {
            return {
              x: function (n) {
                return e + e + t - n;
              },
              setWidth: function (e) {
                t = e;
              },
              textAlign: function (e) {
                return "center" === e ? e : "right" === e ? "left" : "right";
              },
              xPlus: function (e, t) {
                return e - t;
              },
              leftForLtr: function (e, t) {
                return e - t;
              },
            };
          },
          ae = function () {
            return {
              x: function (e) {
                return e;
              },
              setWidth: function (e) {},
              textAlign: function (e) {
                return e;
              },
              xPlus: function (e, t) {
                return e + t;
              },
              leftForLtr: function (e, t) {
                return e;
              },
            };
          },
          ie = z,
          oe = V,
          le = K,
          se = ee,
          ue = ne,
          ce = {
            getRtlAdapter: function (e, t, n) {
              return e ? re(t, n) : ae();
            },
            overrideTextDirection: function (e, t) {
              var n, r;
              ("ltr" !== t && "rtl" !== t) ||
                ((r = [
                  (n = e.canvas.style).getPropertyValue("direction"),
                  n.getPropertyPriority("direction"),
                ]),
                n.setProperty("direction", t, "important"),
                (e.prevTextDirection = r));
            },
            restoreTextDirection: function (e) {
              var t = e.prevTextDirection;
              void 0 !== t &&
                (delete e.prevTextDirection,
                e.canvas.style.setProperty("direction", t[0], t[1]));
            },
          };
        function fe(e, t, n, r) {
          var a,
            i,
            o,
            l,
            s,
            u,
            c,
            f,
            d,
            h = Object.keys(n);
          for (a = 0, i = h.length; a < i; ++a)
            if (
              ((u = n[(o = h[a])]),
              t.hasOwnProperty(o) || (t[o] = u),
              (l = t[o]) !== u && "_" !== o[0])
            ) {
              if (
                (e.hasOwnProperty(o) || (e[o] = l),
                (c = typeof u) === typeof (s = e[o]))
              )
                if ("string" === c) {
                  if ((f = L(s)).valid && (d = L(u)).valid) {
                    t[o] = d.mix(f, r).rgbString();
                    continue;
                  }
                } else if (ie.isFinite(s) && ie.isFinite(u)) {
                  t[o] = s + (u - s) * r;
                  continue;
                }
              t[o] = u;
            }
        }
        (ie.easing = oe),
          (ie.canvas = le),
          (ie.options = se),
          (ie.math = ue),
          (ie.rtl = ce);
        var de = function (e) {
          ie.extend(this, e), this.initialize.apply(this, arguments);
        };
        ie.extend(de.prototype, {
          _type: void 0,
          initialize: function () {
            this.hidden = !1;
          },
          pivot: function () {
            var e = this;
            return (
              e._view || (e._view = ie.extend({}, e._model)), (e._start = {}), e
            );
          },
          transition: function (e) {
            var t = this,
              n = t._model,
              r = t._start,
              a = t._view;
            return n && 1 !== e
              ? (a || (a = t._view = {}),
                r || (r = t._start = {}),
                fe(r, a, n, e),
                t)
              : ((t._view = ie.extend({}, n)), (t._start = null), t);
          },
          tooltipPosition: function () {
            return { x: this._model.x, y: this._model.y };
          },
          hasValue: function () {
            return ie.isNumber(this._model.x) && ie.isNumber(this._model.y);
          },
        }),
          (de.extend = ie.inherits);
        var he = de,
          pe = he.extend({
            chart: null,
            currentStep: 0,
            numSteps: 60,
            easing: "",
            render: null,
            onAnimationProgress: null,
            onAnimationComplete: null,
          }),
          ge = pe;
        Object.defineProperty(pe.prototype, "animationObject", {
          get: function () {
            return this;
          },
        }),
          Object.defineProperty(pe.prototype, "chartInstance", {
            get: function () {
              return this.chart;
            },
            set: function (e) {
              this.chart = e;
            },
          }),
          Z._set("global", {
            animation: {
              duration: 1e3,
              easing: "easeOutQuart",
              onProgress: ie.noop,
              onComplete: ie.noop,
            },
          });
        var me = {
            animations: [],
            request: null,
            addAnimation: function (e, t, n, r) {
              var a,
                i,
                o = this.animations;
              for (
                t.chart = e,
                  t.startTime = Date.now(),
                  t.duration = n,
                  r || (e.animating = !0),
                  a = 0,
                  i = o.length;
                a < i;
                ++a
              )
                if (o[a].chart === e) return void (o[a] = t);
              o.push(t), 1 === o.length && this.requestAnimationFrame();
            },
            cancelAnimation: function (e) {
              var t = ie.findIndex(this.animations, function (t) {
                return t.chart === e;
              });
              -1 !== t && (this.animations.splice(t, 1), (e.animating = !1));
            },
            requestAnimationFrame: function () {
              var e = this;
              null === e.request &&
                (e.request = ie.requestAnimFrame.call(window, function () {
                  (e.request = null), e.startDigest();
                }));
            },
            startDigest: function () {
              var e = this;
              e.advance(), e.animations.length > 0 && e.requestAnimationFrame();
            },
            advance: function () {
              for (var e, t, n, r, a = this.animations, i = 0; i < a.length; )
                (t = (e = a[i]).chart),
                  (n = e.numSteps),
                  (r =
                    Math.floor(((Date.now() - e.startTime) / e.duration) * n) +
                    1),
                  (e.currentStep = Math.min(r, n)),
                  ie.callback(e.render, [t, e], t),
                  ie.callback(e.onAnimationProgress, [e], t),
                  e.currentStep >= n
                    ? (ie.callback(e.onAnimationComplete, [e], t),
                      (t.animating = !1),
                      a.splice(i, 1))
                    : ++i;
            },
          },
          ve = ie.options.resolve,
          ye = ["push", "pop", "shift", "splice", "unshift"];
        function be(e, t) {
          e._chartjs
            ? e._chartjs.listeners.push(t)
            : (Object.defineProperty(e, "_chartjs", {
                configurable: !0,
                enumerable: !1,
                value: { listeners: [t] },
              }),
              ye.forEach(function (t) {
                var n = "onData" + t.charAt(0).toUpperCase() + t.slice(1),
                  r = e[t];
                Object.defineProperty(e, t, {
                  configurable: !0,
                  enumerable: !1,
                  value: function () {
                    var t = Array.prototype.slice.call(arguments),
                      a = r.apply(this, t);
                    return (
                      ie.each(e._chartjs.listeners, function (e) {
                        "function" === typeof e[n] && e[n].apply(e, t);
                      }),
                      a
                    );
                  },
                });
              }));
        }
        function xe(e, t) {
          var n = e._chartjs;
          if (n) {
            var r = n.listeners,
              a = r.indexOf(t);
            -1 !== a && r.splice(a, 1),
              r.length > 0 ||
                (ye.forEach(function (t) {
                  delete e[t];
                }),
                delete e._chartjs);
          }
        }
        var _e = function (e, t) {
          this.initialize(e, t);
        };
        ie.extend(_e.prototype, {
          datasetElementType: null,
          dataElementType: null,
          _datasetElementOptions: [
            "backgroundColor",
            "borderCapStyle",
            "borderColor",
            "borderDash",
            "borderDashOffset",
            "borderJoinStyle",
            "borderWidth",
          ],
          _dataElementOptions: [
            "backgroundColor",
            "borderColor",
            "borderWidth",
            "pointStyle",
          ],
          initialize: function (e, t) {
            var n = this;
            (n.chart = e),
              (n.index = t),
              n.linkScales(),
              n.addElements(),
              (n._type = n.getMeta().type);
          },
          updateIndex: function (e) {
            this.index = e;
          },
          linkScales: function () {
            var e = this,
              t = e.getMeta(),
              n = e.chart,
              r = n.scales,
              a = e.getDataset(),
              i = n.options.scales;
            (null !== t.xAxisID && t.xAxisID in r && !a.xAxisID) ||
              (t.xAxisID = a.xAxisID || i.xAxes[0].id),
              (null !== t.yAxisID && t.yAxisID in r && !a.yAxisID) ||
                (t.yAxisID = a.yAxisID || i.yAxes[0].id);
          },
          getDataset: function () {
            return this.chart.data.datasets[this.index];
          },
          getMeta: function () {
            return this.chart.getDatasetMeta(this.index);
          },
          getScaleForId: function (e) {
            return this.chart.scales[e];
          },
          _getValueScaleId: function () {
            return this.getMeta().yAxisID;
          },
          _getIndexScaleId: function () {
            return this.getMeta().xAxisID;
          },
          _getValueScale: function () {
            return this.getScaleForId(this._getValueScaleId());
          },
          _getIndexScale: function () {
            return this.getScaleForId(this._getIndexScaleId());
          },
          reset: function () {
            this._update(!0);
          },
          destroy: function () {
            this._data && xe(this._data, this);
          },
          createMetaDataset: function () {
            var e = this,
              t = e.datasetElementType;
            return t && new t({ _chart: e.chart, _datasetIndex: e.index });
          },
          createMetaData: function (e) {
            var t = this,
              n = t.dataElementType;
            return (
              n && new n({ _chart: t.chart, _datasetIndex: t.index, _index: e })
            );
          },
          addElements: function () {
            var e,
              t,
              n = this,
              r = n.getMeta(),
              a = n.getDataset().data || [],
              i = r.data;
            for (e = 0, t = a.length; e < t; ++e)
              i[e] = i[e] || n.createMetaData(e);
            r.dataset = r.dataset || n.createMetaDataset();
          },
          addElementAndReset: function (e) {
            var t = this.createMetaData(e);
            this.getMeta().data.splice(e, 0, t), this.updateElement(t, e, !0);
          },
          buildOrUpdateElements: function () {
            var e = this,
              t = e.getDataset(),
              n = t.data || (t.data = []);
            e._data !== n &&
              (e._data && xe(e._data, e),
              n && Object.isExtensible(n) && be(n, e),
              (e._data = n)),
              e.resyncElements();
          },
          _configure: function () {
            var e = this;
            e._config = ie.merge(
              Object.create(null),
              [e.chart.options.datasets[e._type], e.getDataset()],
              {
                merger: function (e, t, n) {
                  "_meta" !== e && "data" !== e && ie._merger(e, t, n);
                },
              }
            );
          },
          _update: function (e) {
            var t = this;
            t._configure(), (t._cachedDataOpts = null), t.update(e);
          },
          update: ie.noop,
          transition: function (e) {
            for (
              var t = this.getMeta(), n = t.data || [], r = n.length, a = 0;
              a < r;
              ++a
            )
              n[a].transition(e);
            t.dataset && t.dataset.transition(e);
          },
          draw: function () {
            var e = this.getMeta(),
              t = e.data || [],
              n = t.length,
              r = 0;
            for (e.dataset && e.dataset.draw(); r < n; ++r) t[r].draw();
          },
          getStyle: function (e) {
            var t,
              n = this,
              r = n.getMeta(),
              a = r.dataset;
            return (
              n._configure(),
              a && void 0 === e
                ? (t = n._resolveDatasetElementOptions(a || {}))
                : ((e = e || 0),
                  (t = n._resolveDataElementOptions(r.data[e] || {}, e))),
              (!1 !== t.fill && null !== t.fill) ||
                (t.backgroundColor = t.borderColor),
              t
            );
          },
          _resolveDatasetElementOptions: function (e, t) {
            var n,
              r,
              a,
              i,
              o = this,
              l = o.chart,
              s = o._config,
              u = e.custom || {},
              c =
                l.options.elements[o.datasetElementType.prototype._type] || {},
              f = o._datasetElementOptions,
              d = {},
              h = {
                chart: l,
                dataset: o.getDataset(),
                datasetIndex: o.index,
                hover: t,
              };
            for (n = 0, r = f.length; n < r; ++n)
              (a = f[n]),
                (i = t ? "hover" + a.charAt(0).toUpperCase() + a.slice(1) : a),
                (d[a] = ve([u[i], s[i], c[i]], h));
            return d;
          },
          _resolveDataElementOptions: function (e, t) {
            var n = this,
              r = e && e.custom,
              a = n._cachedDataOpts;
            if (a && !r) return a;
            var i,
              o,
              l,
              s,
              u = n.chart,
              c = n._config,
              f = u.options.elements[n.dataElementType.prototype._type] || {},
              d = n._dataElementOptions,
              h = {},
              p = {
                chart: u,
                dataIndex: t,
                dataset: n.getDataset(),
                datasetIndex: n.index,
              },
              g = { cacheable: !r };
            if (((r = r || {}), ie.isArray(d)))
              for (o = 0, l = d.length; o < l; ++o)
                h[(s = d[o])] = ve([r[s], c[s], f[s]], p, t, g);
            else
              for (o = 0, l = (i = Object.keys(d)).length; o < l; ++o)
                h[(s = i[o])] = ve([r[s], c[d[s]], c[s], f[s]], p, t, g);
            return g.cacheable && (n._cachedDataOpts = Object.freeze(h)), h;
          },
          removeHoverStyle: function (e) {
            ie.merge(e._model, e.$previousStyle || {}), delete e.$previousStyle;
          },
          setHoverStyle: function (e) {
            var t = this.chart.data.datasets[e._datasetIndex],
              n = e._index,
              r = e.custom || {},
              a = e._model,
              i = ie.getHoverColor;
            (e.$previousStyle = {
              backgroundColor: a.backgroundColor,
              borderColor: a.borderColor,
              borderWidth: a.borderWidth,
            }),
              (a.backgroundColor = ve(
                [
                  r.hoverBackgroundColor,
                  t.hoverBackgroundColor,
                  i(a.backgroundColor),
                ],
                void 0,
                n
              )),
              (a.borderColor = ve(
                [r.hoverBorderColor, t.hoverBorderColor, i(a.borderColor)],
                void 0,
                n
              )),
              (a.borderWidth = ve(
                [r.hoverBorderWidth, t.hoverBorderWidth, a.borderWidth],
                void 0,
                n
              ));
          },
          _removeDatasetHoverStyle: function () {
            var e = this.getMeta().dataset;
            e && this.removeHoverStyle(e);
          },
          _setDatasetHoverStyle: function () {
            var e,
              t,
              n,
              r,
              a,
              i,
              o = this.getMeta().dataset,
              l = {};
            if (o) {
              for (
                i = o._model,
                  a = this._resolveDatasetElementOptions(o, !0),
                  e = 0,
                  t = (r = Object.keys(a)).length;
                e < t;
                ++e
              )
                (l[(n = r[e])] = i[n]), (i[n] = a[n]);
              o.$previousStyle = l;
            }
          },
          resyncElements: function () {
            var e = this,
              t = e.getMeta(),
              n = e.getDataset().data,
              r = t.data.length,
              a = n.length;
            a < r
              ? t.data.splice(a, r - a)
              : a > r && e.insertElements(r, a - r);
          },
          insertElements: function (e, t) {
            for (var n = 0; n < t; ++n) this.addElementAndReset(e + n);
          },
          onDataPush: function () {
            var e = arguments.length;
            this.insertElements(this.getDataset().data.length - e, e);
          },
          onDataPop: function () {
            this.getMeta().data.pop();
          },
          onDataShift: function () {
            this.getMeta().data.shift();
          },
          onDataSplice: function (e, t) {
            this.getMeta().data.splice(e, t),
              this.insertElements(e, arguments.length - 2);
          },
          onDataUnshift: function () {
            this.insertElements(0, arguments.length);
          },
        }),
          (_e.extend = ie.inherits);
        var we = _e,
          ke = 2 * Math.PI;
        function Se(e, t) {
          var n = t.startAngle,
            r = t.endAngle,
            a = t.pixelMargin,
            i = a / t.outerRadius,
            o = t.x,
            l = t.y;
          e.beginPath(),
            e.arc(o, l, t.outerRadius, n - i, r + i),
            t.innerRadius > a
              ? ((i = a / t.innerRadius),
                e.arc(o, l, t.innerRadius - a, r + i, n - i, !0))
              : e.arc(o, l, a, r + Math.PI / 2, n - Math.PI / 2),
            e.closePath(),
            e.clip();
        }
        function Ce(e, t, n, r) {
          var a,
            i = n.endAngle;
          for (
            r &&
              ((n.endAngle = n.startAngle + ke),
              Se(e, n),
              (n.endAngle = i),
              n.endAngle === n.startAngle &&
                n.fullCircles &&
                ((n.endAngle += ke), n.fullCircles--)),
              e.beginPath(),
              e.arc(
                n.x,
                n.y,
                n.innerRadius,
                n.startAngle + ke,
                n.startAngle,
                !0
              ),
              a = 0;
            a < n.fullCircles;
            ++a
          )
            e.stroke();
          for (
            e.beginPath(),
              e.arc(n.x, n.y, t.outerRadius, n.startAngle, n.startAngle + ke),
              a = 0;
            a < n.fullCircles;
            ++a
          )
            e.stroke();
        }
        function Me(e, t, n) {
          var r = "inner" === t.borderAlign;
          r
            ? ((e.lineWidth = 2 * t.borderWidth), (e.lineJoin = "round"))
            : ((e.lineWidth = t.borderWidth), (e.lineJoin = "bevel")),
            n.fullCircles && Ce(e, t, n, r),
            r && Se(e, n),
            e.beginPath(),
            e.arc(n.x, n.y, t.outerRadius, n.startAngle, n.endAngle),
            e.arc(n.x, n.y, n.innerRadius, n.endAngle, n.startAngle, !0),
            e.closePath(),
            e.stroke();
        }
        Z._set("global", {
          elements: {
            arc: {
              backgroundColor: Z.global.defaultColor,
              borderColor: "#fff",
              borderWidth: 2,
              borderAlign: "center",
            },
          },
        });
        var Oe = he.extend({
            _type: "arc",
            inLabelRange: function (e) {
              var t = this._view;
              return (
                !!t &&
                Math.pow(e - t.x, 2) < Math.pow(t.radius + t.hoverRadius, 2)
              );
            },
            inRange: function (e, t) {
              var n = this._view;
              if (n) {
                for (
                  var r = ie.getAngleFromPoint(n, { x: e, y: t }),
                    a = r.angle,
                    i = r.distance,
                    o = n.startAngle,
                    l = n.endAngle;
                  l < o;

                )
                  l += ke;
                for (; a > l; ) a -= ke;
                for (; a < o; ) a += ke;
                var s = a >= o && a <= l,
                  u = i >= n.innerRadius && i <= n.outerRadius;
                return s && u;
              }
              return !1;
            },
            getCenterPoint: function () {
              var e = this._view,
                t = (e.startAngle + e.endAngle) / 2,
                n = (e.innerRadius + e.outerRadius) / 2;
              return { x: e.x + Math.cos(t) * n, y: e.y + Math.sin(t) * n };
            },
            getArea: function () {
              var e = this._view;
              return (
                Math.PI *
                ((e.endAngle - e.startAngle) / (2 * Math.PI)) *
                (Math.pow(e.outerRadius, 2) - Math.pow(e.innerRadius, 2))
              );
            },
            tooltipPosition: function () {
              var e = this._view,
                t = e.startAngle + (e.endAngle - e.startAngle) / 2,
                n = (e.outerRadius - e.innerRadius) / 2 + e.innerRadius;
              return { x: e.x + Math.cos(t) * n, y: e.y + Math.sin(t) * n };
            },
            draw: function () {
              var e,
                t = this._chart.ctx,
                n = this._view,
                r = "inner" === n.borderAlign ? 0.33 : 0,
                a = {
                  x: n.x,
                  y: n.y,
                  innerRadius: n.innerRadius,
                  outerRadius: Math.max(n.outerRadius - r, 0),
                  pixelMargin: r,
                  startAngle: n.startAngle,
                  endAngle: n.endAngle,
                  fullCircles: Math.floor(n.circumference / ke),
                };
              if (
                (t.save(),
                (t.fillStyle = n.backgroundColor),
                (t.strokeStyle = n.borderColor),
                a.fullCircles)
              ) {
                for (
                  a.endAngle = a.startAngle + ke,
                    t.beginPath(),
                    t.arc(a.x, a.y, a.outerRadius, a.startAngle, a.endAngle),
                    t.arc(
                      a.x,
                      a.y,
                      a.innerRadius,
                      a.endAngle,
                      a.startAngle,
                      !0
                    ),
                    t.closePath(),
                    e = 0;
                  e < a.fullCircles;
                  ++e
                )
                  t.fill();
                a.endAngle = a.startAngle + (n.circumference % ke);
              }
              t.beginPath(),
                t.arc(a.x, a.y, a.outerRadius, a.startAngle, a.endAngle),
                t.arc(a.x, a.y, a.innerRadius, a.endAngle, a.startAngle, !0),
                t.closePath(),
                t.fill(),
                n.borderWidth && Me(t, n, a),
                t.restore();
            },
          }),
          Pe = ie.valueOrDefault,
          Ee = Z.global.defaultColor;
        Z._set("global", {
          elements: {
            line: {
              tension: 0.4,
              backgroundColor: Ee,
              borderWidth: 3,
              borderColor: Ee,
              borderCapStyle: "butt",
              borderDash: [],
              borderDashOffset: 0,
              borderJoinStyle: "miter",
              capBezierPoints: !0,
              fill: !0,
            },
          },
        });
        var De = he.extend({
            _type: "line",
            draw: function () {
              var e,
                t,
                n,
                r = this,
                a = r._view,
                i = r._chart.ctx,
                o = a.spanGaps,
                l = r._children.slice(),
                s = Z.global,
                u = s.elements.line,
                c = -1,
                f = r._loop;
              if (l.length) {
                if (r._loop) {
                  for (e = 0; e < l.length; ++e)
                    if (
                      ((t = ie.previousItem(l, e)),
                      !l[e]._view.skip && t._view.skip)
                    ) {
                      (l = l.slice(e).concat(l.slice(0, e))), (f = o);
                      break;
                    }
                  f && l.push(l[0]);
                }
                for (
                  i.save(),
                    i.lineCap = a.borderCapStyle || u.borderCapStyle,
                    i.setLineDash &&
                      i.setLineDash(a.borderDash || u.borderDash),
                    i.lineDashOffset = Pe(
                      a.borderDashOffset,
                      u.borderDashOffset
                    ),
                    i.lineJoin = a.borderJoinStyle || u.borderJoinStyle,
                    i.lineWidth = Pe(a.borderWidth, u.borderWidth),
                    i.strokeStyle = a.borderColor || s.defaultColor,
                    i.beginPath(),
                    (n = l[0]._view).skip || (i.moveTo(n.x, n.y), (c = 0)),
                    e = 1;
                  e < l.length;
                  ++e
                )
                  (n = l[e]._view),
                    (t = -1 === c ? ie.previousItem(l, e) : l[c]),
                    n.skip ||
                      ((c !== e - 1 && !o) || -1 === c
                        ? i.moveTo(n.x, n.y)
                        : ie.canvas.lineTo(i, t._view, n),
                      (c = e));
                f && i.closePath(), i.stroke(), i.restore();
              }
            },
          }),
          Te = ie.valueOrDefault,
          Ae = Z.global.defaultColor;
        function Ne(e) {
          var t = this._view;
          return !!t && Math.abs(e - t.x) < t.radius + t.hitRadius;
        }
        function Ie(e) {
          var t = this._view;
          return !!t && Math.abs(e - t.y) < t.radius + t.hitRadius;
        }
        Z._set("global", {
          elements: {
            point: {
              radius: 3,
              pointStyle: "circle",
              backgroundColor: Ae,
              borderColor: Ae,
              borderWidth: 1,
              hitRadius: 1,
              hoverRadius: 4,
              hoverBorderWidth: 1,
            },
          },
        });
        var Re = he.extend({
            _type: "point",
            inRange: function (e, t) {
              var n = this._view;
              return (
                !!n &&
                Math.pow(e - n.x, 2) + Math.pow(t - n.y, 2) <
                  Math.pow(n.hitRadius + n.radius, 2)
              );
            },
            inLabelRange: Ne,
            inXRange: Ne,
            inYRange: Ie,
            getCenterPoint: function () {
              var e = this._view;
              return { x: e.x, y: e.y };
            },
            getArea: function () {
              return Math.PI * Math.pow(this._view.radius, 2);
            },
            tooltipPosition: function () {
              var e = this._view;
              return { x: e.x, y: e.y, padding: e.radius + e.borderWidth };
            },
            draw: function (e) {
              var t = this._view,
                n = this._chart.ctx,
                r = t.pointStyle,
                a = t.rotation,
                i = t.radius,
                o = t.x,
                l = t.y,
                s = Z.global,
                u = s.defaultColor;
              t.skip ||
                ((void 0 === e || ie.canvas._isPointInArea(t, e)) &&
                  ((n.strokeStyle = t.borderColor || u),
                  (n.lineWidth = Te(
                    t.borderWidth,
                    s.elements.point.borderWidth
                  )),
                  (n.fillStyle = t.backgroundColor || u),
                  ie.canvas.drawPoint(n, r, i, o, l, a)));
            },
          }),
          Le = Z.global.defaultColor;
        function Fe(e) {
          return e && void 0 !== e.width;
        }
        function je(e) {
          var t, n, r, a, i;
          return (
            Fe(e)
              ? ((i = e.width / 2),
                (t = e.x - i),
                (n = e.x + i),
                (r = Math.min(e.y, e.base)),
                (a = Math.max(e.y, e.base)))
              : ((i = e.height / 2),
                (t = Math.min(e.x, e.base)),
                (n = Math.max(e.x, e.base)),
                (r = e.y - i),
                (a = e.y + i)),
            { left: t, top: r, right: n, bottom: a }
          );
        }
        function ze(e, t, n) {
          return e === t ? n : e === n ? t : e;
        }
        function We(e) {
          var t = e.borderSkipped,
            n = {};
          return t
            ? (e.horizontal
                ? e.base > e.x && (t = ze(t, "left", "right"))
                : e.base < e.y && (t = ze(t, "bottom", "top")),
              (n[t] = !0),
              n)
            : n;
        }
        function Ve(e, t, n) {
          var r,
            a,
            i,
            o,
            l = e.borderWidth,
            s = We(e);
          return (
            ie.isObject(l)
              ? ((r = +l.top || 0),
                (a = +l.right || 0),
                (i = +l.bottom || 0),
                (o = +l.left || 0))
              : (r = a = i = o = +l || 0),
            {
              t: s.top || r < 0 ? 0 : r > n ? n : r,
              r: s.right || a < 0 ? 0 : a > t ? t : a,
              b: s.bottom || i < 0 ? 0 : i > n ? n : i,
              l: s.left || o < 0 ? 0 : o > t ? t : o,
            }
          );
        }
        function Ye(e) {
          var t = je(e),
            n = t.right - t.left,
            r = t.bottom - t.top,
            a = Ve(e, n / 2, r / 2);
          return {
            outer: { x: t.left, y: t.top, w: n, h: r },
            inner: {
              x: t.left + a.l,
              y: t.top + a.t,
              w: n - a.l - a.r,
              h: r - a.t - a.b,
            },
          };
        }
        function Be(e, t, n) {
          var r = null === t,
            a = null === n,
            i = !(!e || (r && a)) && je(e);
          return (
            i &&
            (r || (t >= i.left && t <= i.right)) &&
            (a || (n >= i.top && n <= i.bottom))
          );
        }
        Z._set("global", {
          elements: {
            rectangle: {
              backgroundColor: Le,
              borderColor: Le,
              borderSkipped: "bottom",
              borderWidth: 0,
            },
          },
        });
        var He = he.extend({
            _type: "rectangle",
            draw: function () {
              var e = this._chart.ctx,
                t = this._view,
                n = Ye(t),
                r = n.outer,
                a = n.inner;
              (e.fillStyle = t.backgroundColor),
                e.fillRect(r.x, r.y, r.w, r.h),
                (r.w === a.w && r.h === a.h) ||
                  (e.save(),
                  e.beginPath(),
                  e.rect(r.x, r.y, r.w, r.h),
                  e.clip(),
                  (e.fillStyle = t.borderColor),
                  e.rect(a.x, a.y, a.w, a.h),
                  e.fill("evenodd"),
                  e.restore());
            },
            height: function () {
              var e = this._view;
              return e.base - e.y;
            },
            inRange: function (e, t) {
              return Be(this._view, e, t);
            },
            inLabelRange: function (e, t) {
              var n = this._view;
              return Fe(n) ? Be(n, e, null) : Be(n, null, t);
            },
            inXRange: function (e) {
              return Be(this._view, e, null);
            },
            inYRange: function (e) {
              return Be(this._view, null, e);
            },
            getCenterPoint: function () {
              var e,
                t,
                n = this._view;
              return (
                Fe(n)
                  ? ((e = n.x), (t = (n.y + n.base) / 2))
                  : ((e = (n.x + n.base) / 2), (t = n.y)),
                { x: e, y: t }
              );
            },
            getArea: function () {
              var e = this._view;
              return Fe(e)
                ? e.width * Math.abs(e.y - e.base)
                : e.height * Math.abs(e.x - e.base);
            },
            tooltipPosition: function () {
              var e = this._view;
              return { x: e.x, y: e.y };
            },
          }),
          Ue = {},
          $e = Oe,
          Ge = De,
          qe = Re,
          Ke = He;
        (Ue.Arc = $e), (Ue.Line = Ge), (Ue.Point = qe), (Ue.Rectangle = Ke);
        var Qe = ie._deprecated,
          Ze = ie.valueOrDefault;
        function Xe(e, t) {
          var n,
            r,
            a,
            i,
            o = e._length;
          for (a = 1, i = t.length; a < i; ++a)
            o = Math.min(o, Math.abs(t[a] - t[a - 1]));
          for (a = 0, i = e.getTicks().length; a < i; ++a)
            (r = e.getPixelForTick(a)),
              (o = a > 0 ? Math.min(o, Math.abs(r - n)) : o),
              (n = r);
          return o;
        }
        function Je(e, t, n) {
          var r,
            a,
            i = n.barThickness,
            o = t.stackCount,
            l = t.pixels[e],
            s = ie.isNullOrUndef(i) ? Xe(t.scale, t.pixels) : -1;
          return (
            ie.isNullOrUndef(i)
              ? ((r = s * n.categoryPercentage), (a = n.barPercentage))
              : ((r = i * o), (a = 1)),
            { chunk: r / o, ratio: a, start: l - r / 2 }
          );
        }
        function et(e, t, n) {
          var r,
            a = t.pixels,
            i = a[e],
            o = e > 0 ? a[e - 1] : null,
            l = e < a.length - 1 ? a[e + 1] : null,
            s = n.categoryPercentage;
          return (
            null === o && (o = i - (null === l ? t.end - t.start : l - i)),
            null === l && (l = i + i - o),
            (r = i - ((i - Math.min(o, l)) / 2) * s),
            {
              chunk: ((Math.abs(l - o) / 2) * s) / t.stackCount,
              ratio: n.barPercentage,
              start: r,
            }
          );
        }
        Z._set("bar", {
          hover: { mode: "label" },
          scales: {
            xAxes: [
              {
                type: "category",
                offset: !0,
                gridLines: { offsetGridLines: !0 },
              },
            ],
            yAxes: [{ type: "linear" }],
          },
        }),
          Z._set("global", {
            datasets: { bar: { categoryPercentage: 0.8, barPercentage: 0.9 } },
          });
        var tt = we.extend({
            dataElementType: Ue.Rectangle,
            _dataElementOptions: [
              "backgroundColor",
              "borderColor",
              "borderSkipped",
              "borderWidth",
              "barPercentage",
              "barThickness",
              "categoryPercentage",
              "maxBarThickness",
              "minBarLength",
            ],
            initialize: function () {
              var e,
                t,
                n = this;
              we.prototype.initialize.apply(n, arguments),
                ((e = n.getMeta()).stack = n.getDataset().stack),
                (e.bar = !0),
                (t = n._getIndexScale().options),
                Qe(
                  "bar chart",
                  t.barPercentage,
                  "scales.[x/y]Axes.barPercentage",
                  "dataset.barPercentage"
                ),
                Qe(
                  "bar chart",
                  t.barThickness,
                  "scales.[x/y]Axes.barThickness",
                  "dataset.barThickness"
                ),
                Qe(
                  "bar chart",
                  t.categoryPercentage,
                  "scales.[x/y]Axes.categoryPercentage",
                  "dataset.categoryPercentage"
                ),
                Qe(
                  "bar chart",
                  n._getValueScale().options.minBarLength,
                  "scales.[x/y]Axes.minBarLength",
                  "dataset.minBarLength"
                ),
                Qe(
                  "bar chart",
                  t.maxBarThickness,
                  "scales.[x/y]Axes.maxBarThickness",
                  "dataset.maxBarThickness"
                );
            },
            update: function (e) {
              var t,
                n,
                r = this,
                a = r.getMeta().data;
              for (r._ruler = r.getRuler(), t = 0, n = a.length; t < n; ++t)
                r.updateElement(a[t], t, e);
            },
            updateElement: function (e, t, n) {
              var r = this,
                a = r.getMeta(),
                i = r.getDataset(),
                o = r._resolveDataElementOptions(e, t);
              (e._xScale = r.getScaleForId(a.xAxisID)),
                (e._yScale = r.getScaleForId(a.yAxisID)),
                (e._datasetIndex = r.index),
                (e._index = t),
                (e._model = {
                  backgroundColor: o.backgroundColor,
                  borderColor: o.borderColor,
                  borderSkipped: o.borderSkipped,
                  borderWidth: o.borderWidth,
                  datasetLabel: i.label,
                  label: r.chart.data.labels[t],
                }),
                ie.isArray(i.data[t]) && (e._model.borderSkipped = null),
                r._updateElementGeometry(e, t, n, o),
                e.pivot();
            },
            _updateElementGeometry: function (e, t, n, r) {
              var a = this,
                i = e._model,
                o = a._getValueScale(),
                l = o.getBasePixel(),
                s = o.isHorizontal(),
                u = a._ruler || a.getRuler(),
                c = a.calculateBarValuePixels(a.index, t, r),
                f = a.calculateBarIndexPixels(a.index, t, u, r);
              (i.horizontal = s),
                (i.base = n ? l : c.base),
                (i.x = s ? (n ? l : c.head) : f.center),
                (i.y = s ? f.center : n ? l : c.head),
                (i.height = s ? f.size : void 0),
                (i.width = s ? void 0 : f.size);
            },
            _getStacks: function (e) {
              var t,
                n,
                r = this,
                a = r._getIndexScale(),
                i = a._getMatchingVisibleMetas(r._type),
                o = a.options.stacked,
                l = i.length,
                s = [];
              for (
                t = 0;
                t < l &&
                ((n = i[t]),
                (!1 === o ||
                  -1 === s.indexOf(n.stack) ||
                  (void 0 === o && void 0 === n.stack)) &&
                  s.push(n.stack),
                n.index !== e);
                ++t
              );
              return s;
            },
            getStackCount: function () {
              return this._getStacks().length;
            },
            getStackIndex: function (e, t) {
              var n = this._getStacks(e),
                r = void 0 !== t ? n.indexOf(t) : -1;
              return -1 === r ? n.length - 1 : r;
            },
            getRuler: function () {
              var e,
                t,
                n = this,
                r = n._getIndexScale(),
                a = [];
              for (e = 0, t = n.getMeta().data.length; e < t; ++e)
                a.push(r.getPixelForValue(null, e, n.index));
              return {
                pixels: a,
                start: r._startPixel,
                end: r._endPixel,
                stackCount: n.getStackCount(),
                scale: r,
              };
            },
            calculateBarValuePixels: function (e, t, n) {
              var r,
                a,
                i,
                o,
                l,
                s,
                u,
                c = this,
                f = c.chart,
                d = c._getValueScale(),
                h = d.isHorizontal(),
                p = f.data.datasets,
                g = d._getMatchingVisibleMetas(c._type),
                m = d._parseValue(p[e].data[t]),
                v = n.minBarLength,
                y = d.options.stacked,
                b = c.getMeta().stack,
                x =
                  void 0 === m.start
                    ? 0
                    : m.max >= 0 && m.min >= 0
                    ? m.min
                    : m.max,
                _ =
                  void 0 === m.start
                    ? m.end
                    : m.max >= 0 && m.min >= 0
                    ? m.max - m.min
                    : m.min - m.max,
                w = g.length;
              if (y || (void 0 === y && void 0 !== b))
                for (r = 0; r < w && (a = g[r]).index !== e; ++r)
                  a.stack === b &&
                    ((i =
                      void 0 === (u = d._parseValue(p[a.index].data[t])).start
                        ? u.end
                        : u.min >= 0 && u.max >= 0
                        ? u.max
                        : u.min),
                    ((m.min < 0 && i < 0) || (m.max >= 0 && i > 0)) &&
                      (x += i));
              return (
                (o = d.getPixelForValue(x)),
                (s = (l = d.getPixelForValue(x + _)) - o),
                void 0 !== v &&
                  Math.abs(s) < v &&
                  ((s = v),
                  (l = (_ >= 0 && !h) || (_ < 0 && h) ? o - v : o + v)),
                { size: s, base: o, head: l, center: l + s / 2 }
              );
            },
            calculateBarIndexPixels: function (e, t, n, r) {
              var a = this,
                i = "flex" === r.barThickness ? et(t, n, r) : Je(t, n, r),
                o = a.getStackIndex(e, a.getMeta().stack),
                l = i.start + i.chunk * o + i.chunk / 2,
                s = Math.min(Ze(r.maxBarThickness, 1 / 0), i.chunk * i.ratio);
              return { base: l - s / 2, head: l + s / 2, center: l, size: s };
            },
            draw: function () {
              var e = this,
                t = e.chart,
                n = e._getValueScale(),
                r = e.getMeta().data,
                a = e.getDataset(),
                i = r.length,
                o = 0;
              for (ie.canvas.clipArea(t.ctx, t.chartArea); o < i; ++o) {
                var l = n._parseValue(a.data[o]);
                isNaN(l.min) || isNaN(l.max) || r[o].draw();
              }
              ie.canvas.unclipArea(t.ctx);
            },
            _resolveDataElementOptions: function () {
              var e = this,
                t = ie.extend(
                  {},
                  we.prototype._resolveDataElementOptions.apply(e, arguments)
                ),
                n = e._getIndexScale().options,
                r = e._getValueScale().options;
              return (
                (t.barPercentage = Ze(n.barPercentage, t.barPercentage)),
                (t.barThickness = Ze(n.barThickness, t.barThickness)),
                (t.categoryPercentage = Ze(
                  n.categoryPercentage,
                  t.categoryPercentage
                )),
                (t.maxBarThickness = Ze(n.maxBarThickness, t.maxBarThickness)),
                (t.minBarLength = Ze(r.minBarLength, t.minBarLength)),
                t
              );
            },
          }),
          nt = ie.valueOrDefault,
          rt = ie.options.resolve;
        Z._set("bubble", {
          hover: { mode: "single" },
          scales: {
            xAxes: [{ type: "linear", position: "bottom", id: "x-axis-0" }],
            yAxes: [{ type: "linear", position: "left", id: "y-axis-0" }],
          },
          tooltips: {
            callbacks: {
              title: function () {
                return "";
              },
              label: function (e, t) {
                var n = t.datasets[e.datasetIndex].label || "",
                  r = t.datasets[e.datasetIndex].data[e.index];
                return (
                  n + ": (" + e.xLabel + ", " + e.yLabel + ", " + r.r + ")"
                );
              },
            },
          },
        });
        var at = we.extend({
            dataElementType: Ue.Point,
            _dataElementOptions: [
              "backgroundColor",
              "borderColor",
              "borderWidth",
              "hoverBackgroundColor",
              "hoverBorderColor",
              "hoverBorderWidth",
              "hoverRadius",
              "hitRadius",
              "pointStyle",
              "rotation",
            ],
            update: function (e) {
              var t = this,
                n = t.getMeta().data;
              ie.each(n, function (n, r) {
                t.updateElement(n, r, e);
              });
            },
            updateElement: function (e, t, n) {
              var r = this,
                a = r.getMeta(),
                i = e.custom || {},
                o = r.getScaleForId(a.xAxisID),
                l = r.getScaleForId(a.yAxisID),
                s = r._resolveDataElementOptions(e, t),
                u = r.getDataset().data[t],
                c = r.index,
                f = n
                  ? o.getPixelForDecimal(0.5)
                  : o.getPixelForValue("object" === typeof u ? u : NaN, t, c),
                d = n ? l.getBasePixel() : l.getPixelForValue(u, t, c);
              (e._xScale = o),
                (e._yScale = l),
                (e._options = s),
                (e._datasetIndex = c),
                (e._index = t),
                (e._model = {
                  backgroundColor: s.backgroundColor,
                  borderColor: s.borderColor,
                  borderWidth: s.borderWidth,
                  hitRadius: s.hitRadius,
                  pointStyle: s.pointStyle,
                  rotation: s.rotation,
                  radius: n ? 0 : s.radius,
                  skip: i.skip || isNaN(f) || isNaN(d),
                  x: f,
                  y: d,
                }),
                e.pivot();
            },
            setHoverStyle: function (e) {
              var t = e._model,
                n = e._options,
                r = ie.getHoverColor;
              (e.$previousStyle = {
                backgroundColor: t.backgroundColor,
                borderColor: t.borderColor,
                borderWidth: t.borderWidth,
                radius: t.radius,
              }),
                (t.backgroundColor = nt(
                  n.hoverBackgroundColor,
                  r(n.backgroundColor)
                )),
                (t.borderColor = nt(n.hoverBorderColor, r(n.borderColor))),
                (t.borderWidth = nt(n.hoverBorderWidth, n.borderWidth)),
                (t.radius = n.radius + n.hoverRadius);
            },
            _resolveDataElementOptions: function (e, t) {
              var n = this,
                r = n.chart,
                a = n.getDataset(),
                i = e.custom || {},
                o = a.data[t] || {},
                l = we.prototype._resolveDataElementOptions.apply(n, arguments),
                s = {
                  chart: r,
                  dataIndex: t,
                  dataset: a,
                  datasetIndex: n.index,
                };
              return (
                n._cachedDataOpts === l && (l = ie.extend({}, l)),
                (l.radius = rt(
                  [
                    i.radius,
                    o.r,
                    n._config.radius,
                    r.options.elements.point.radius,
                  ],
                  s,
                  t
                )),
                l
              );
            },
          }),
          it = ie.valueOrDefault,
          ot = Math.PI,
          lt = 2 * ot,
          st = ot / 2;
        Z._set("doughnut", {
          animation: { animateRotate: !0, animateScale: !1 },
          hover: { mode: "single" },
          legendCallback: function (e) {
            var t,
              n,
              r,
              a = document.createElement("ul"),
              i = e.data,
              o = i.datasets,
              l = i.labels;
            if ((a.setAttribute("class", e.id + "-legend"), o.length))
              for (t = 0, n = o[0].data.length; t < n; ++t)
                ((r = a.appendChild(document.createElement("li"))).appendChild(
                  document.createElement("span")
                ).style.backgroundColor = o[0].backgroundColor[t]),
                  l[t] && r.appendChild(document.createTextNode(l[t]));
            return a.outerHTML;
          },
          legend: {
            labels: {
              generateLabels: function (e) {
                var t = e.data;
                return t.labels.length && t.datasets.length
                  ? t.labels.map(function (n, r) {
                      var a = e.getDatasetMeta(0),
                        i = a.controller.getStyle(r);
                      return {
                        text: n,
                        fillStyle: i.backgroundColor,
                        strokeStyle: i.borderColor,
                        lineWidth: i.borderWidth,
                        hidden:
                          isNaN(t.datasets[0].data[r]) || a.data[r].hidden,
                        index: r,
                      };
                    })
                  : [];
              },
            },
            onClick: function (e, t) {
              var n,
                r,
                a,
                i = t.index,
                o = this.chart;
              for (n = 0, r = (o.data.datasets || []).length; n < r; ++n)
                (a = o.getDatasetMeta(n)).data[i] &&
                  (a.data[i].hidden = !a.data[i].hidden);
              o.update();
            },
          },
          cutoutPercentage: 50,
          rotation: -st,
          circumference: lt,
          tooltips: {
            callbacks: {
              title: function () {
                return "";
              },
              label: function (e, t) {
                var n = t.labels[e.index],
                  r = ": " + t.datasets[e.datasetIndex].data[e.index];
                return ie.isArray(n) ? ((n = n.slice())[0] += r) : (n += r), n;
              },
            },
          },
        });
        var ut = we.extend({
          dataElementType: Ue.Arc,
          linkScales: ie.noop,
          _dataElementOptions: [
            "backgroundColor",
            "borderColor",
            "borderWidth",
            "borderAlign",
            "hoverBackgroundColor",
            "hoverBorderColor",
            "hoverBorderWidth",
          ],
          getRingIndex: function (e) {
            for (var t = 0, n = 0; n < e; ++n)
              this.chart.isDatasetVisible(n) && ++t;
            return t;
          },
          update: function (e) {
            var t,
              n,
              r,
              a,
              i = this,
              o = i.chart,
              l = o.chartArea,
              s = o.options,
              u = 1,
              c = 1,
              f = 0,
              d = 0,
              h = i.getMeta(),
              p = h.data,
              g = s.cutoutPercentage / 100 || 0,
              m = s.circumference,
              v = i._getRingWeight(i.index);
            if (m < lt) {
              var y = s.rotation % lt,
                b = (y += y >= ot ? -lt : y < -ot ? lt : 0) + m,
                x = Math.cos(y),
                _ = Math.sin(y),
                w = Math.cos(b),
                k = Math.sin(b),
                S = (y <= 0 && b >= 0) || b >= lt,
                C = (y <= st && b >= st) || b >= lt + st,
                M = (y <= -st && b >= -st) || b >= ot + st,
                O = y === -ot || b >= ot ? -1 : Math.min(x, x * g, w, w * g),
                P = M ? -1 : Math.min(_, _ * g, k, k * g),
                E = S ? 1 : Math.max(x, x * g, w, w * g),
                D = C ? 1 : Math.max(_, _ * g, k, k * g);
              (u = (E - O) / 2),
                (c = (D - P) / 2),
                (f = -(E + O) / 2),
                (d = -(D + P) / 2);
            }
            for (r = 0, a = p.length; r < a; ++r)
              p[r]._options = i._resolveDataElementOptions(p[r], r);
            for (
              o.borderWidth = i.getMaxBorderWidth(),
                t = (l.right - l.left - o.borderWidth) / u,
                n = (l.bottom - l.top - o.borderWidth) / c,
                o.outerRadius = Math.max(Math.min(t, n) / 2, 0),
                o.innerRadius = Math.max(o.outerRadius * g, 0),
                o.radiusLength =
                  (o.outerRadius - o.innerRadius) /
                  (i._getVisibleDatasetWeightTotal() || 1),
                o.offsetX = f * o.outerRadius,
                o.offsetY = d * o.outerRadius,
                h.total = i.calculateTotal(),
                i.outerRadius =
                  o.outerRadius -
                  o.radiusLength * i._getRingWeightOffset(i.index),
                i.innerRadius = Math.max(i.outerRadius - o.radiusLength * v, 0),
                r = 0,
                a = p.length;
              r < a;
              ++r
            )
              i.updateElement(p[r], r, e);
          },
          updateElement: function (e, t, n) {
            var r = this,
              a = r.chart,
              i = a.chartArea,
              o = a.options,
              l = o.animation,
              s = (i.left + i.right) / 2,
              u = (i.top + i.bottom) / 2,
              c = o.rotation,
              f = o.rotation,
              d = r.getDataset(),
              h =
                (n && l.animateRotate) || e.hidden
                  ? 0
                  : r.calculateCircumference(d.data[t]) *
                    (o.circumference / lt),
              p = n && l.animateScale ? 0 : r.innerRadius,
              g = n && l.animateScale ? 0 : r.outerRadius,
              m = e._options || {};
            ie.extend(e, {
              _datasetIndex: r.index,
              _index: t,
              _model: {
                backgroundColor: m.backgroundColor,
                borderColor: m.borderColor,
                borderWidth: m.borderWidth,
                borderAlign: m.borderAlign,
                x: s + a.offsetX,
                y: u + a.offsetY,
                startAngle: c,
                endAngle: f,
                circumference: h,
                outerRadius: g,
                innerRadius: p,
                label: ie.valueAtIndexOrDefault(d.label, t, a.data.labels[t]),
              },
            });
            var v = e._model;
            (n && l.animateRotate) ||
              ((v.startAngle =
                0 === t ? o.rotation : r.getMeta().data[t - 1]._model.endAngle),
              (v.endAngle = v.startAngle + v.circumference)),
              e.pivot();
          },
          calculateTotal: function () {
            var e,
              t = this.getDataset(),
              n = this.getMeta(),
              r = 0;
            return (
              ie.each(n.data, function (n, a) {
                (e = t.data[a]), isNaN(e) || n.hidden || (r += Math.abs(e));
              }),
              r
            );
          },
          calculateCircumference: function (e) {
            var t = this.getMeta().total;
            return t > 0 && !isNaN(e) ? lt * (Math.abs(e) / t) : 0;
          },
          getMaxBorderWidth: function (e) {
            var t,
              n,
              r,
              a,
              i,
              o,
              l,
              s,
              u = this,
              c = 0,
              f = u.chart;
            if (!e)
              for (t = 0, n = f.data.datasets.length; t < n; ++t)
                if (f.isDatasetVisible(t)) {
                  (e = (r = f.getDatasetMeta(t)).data),
                    t !== u.index && (i = r.controller);
                  break;
                }
            if (!e) return 0;
            for (t = 0, n = e.length; t < n; ++t)
              (a = e[t]),
                i
                  ? (i._configure(), (o = i._resolveDataElementOptions(a, t)))
                  : (o = a._options),
                "inner" !== o.borderAlign &&
                  ((l = o.borderWidth),
                  (c = (s = o.hoverBorderWidth) > (c = l > c ? l : c) ? s : c));
            return c;
          },
          setHoverStyle: function (e) {
            var t = e._model,
              n = e._options,
              r = ie.getHoverColor;
            (e.$previousStyle = {
              backgroundColor: t.backgroundColor,
              borderColor: t.borderColor,
              borderWidth: t.borderWidth,
            }),
              (t.backgroundColor = it(
                n.hoverBackgroundColor,
                r(n.backgroundColor)
              )),
              (t.borderColor = it(n.hoverBorderColor, r(n.borderColor))),
              (t.borderWidth = it(n.hoverBorderWidth, n.borderWidth));
          },
          _getRingWeightOffset: function (e) {
            for (var t = 0, n = 0; n < e; ++n)
              this.chart.isDatasetVisible(n) && (t += this._getRingWeight(n));
            return t;
          },
          _getRingWeight: function (e) {
            return Math.max(it(this.chart.data.datasets[e].weight, 1), 0);
          },
          _getVisibleDatasetWeightTotal: function () {
            return this._getRingWeightOffset(this.chart.data.datasets.length);
          },
        });
        Z._set("horizontalBar", {
          hover: { mode: "index", axis: "y" },
          scales: {
            xAxes: [{ type: "linear", position: "bottom" }],
            yAxes: [
              {
                type: "category",
                position: "left",
                offset: !0,
                gridLines: { offsetGridLines: !0 },
              },
            ],
          },
          elements: { rectangle: { borderSkipped: "left" } },
          tooltips: { mode: "index", axis: "y" },
        }),
          Z._set("global", {
            datasets: {
              horizontalBar: { categoryPercentage: 0.8, barPercentage: 0.9 },
            },
          });
        var ct = tt.extend({
            _getValueScaleId: function () {
              return this.getMeta().xAxisID;
            },
            _getIndexScaleId: function () {
              return this.getMeta().yAxisID;
            },
          }),
          ft = ie.valueOrDefault,
          dt = ie.options.resolve,
          ht = ie.canvas._isPointInArea;
        function pt(e, t) {
          var n = (e && e.options.ticks) || {},
            r = n.reverse,
            a = void 0 === n.min ? t : 0,
            i = void 0 === n.max ? t : 0;
          return { start: r ? i : a, end: r ? a : i };
        }
        function gt(e, t, n) {
          var r = n / 2,
            a = pt(e, r),
            i = pt(t, r);
          return { top: i.end, right: a.end, bottom: i.start, left: a.start };
        }
        function mt(e) {
          var t, n, r, a;
          return (
            ie.isObject(e)
              ? ((t = e.top), (n = e.right), (r = e.bottom), (a = e.left))
              : (t = n = r = a = e),
            { top: t, right: n, bottom: r, left: a }
          );
        }
        Z._set("line", {
          showLines: !0,
          spanGaps: !1,
          hover: { mode: "label" },
          scales: {
            xAxes: [{ type: "category", id: "x-axis-0" }],
            yAxes: [{ type: "linear", id: "y-axis-0" }],
          },
        });
        var vt = we.extend({
            datasetElementType: Ue.Line,
            dataElementType: Ue.Point,
            _datasetElementOptions: [
              "backgroundColor",
              "borderCapStyle",
              "borderColor",
              "borderDash",
              "borderDashOffset",
              "borderJoinStyle",
              "borderWidth",
              "cubicInterpolationMode",
              "fill",
            ],
            _dataElementOptions: {
              backgroundColor: "pointBackgroundColor",
              borderColor: "pointBorderColor",
              borderWidth: "pointBorderWidth",
              hitRadius: "pointHitRadius",
              hoverBackgroundColor: "pointHoverBackgroundColor",
              hoverBorderColor: "pointHoverBorderColor",
              hoverBorderWidth: "pointHoverBorderWidth",
              hoverRadius: "pointHoverRadius",
              pointStyle: "pointStyle",
              radius: "pointRadius",
              rotation: "pointRotation",
            },
            update: function (e) {
              var t,
                n,
                r = this,
                a = r.getMeta(),
                i = a.dataset,
                o = a.data || [],
                l = r.chart.options,
                s = r._config,
                u = (r._showLine = ft(s.showLine, l.showLines));
              for (
                r._xScale = r.getScaleForId(a.xAxisID),
                  r._yScale = r.getScaleForId(a.yAxisID),
                  u &&
                    (void 0 !== s.tension &&
                      void 0 === s.lineTension &&
                      (s.lineTension = s.tension),
                    (i._scale = r._yScale),
                    (i._datasetIndex = r.index),
                    (i._children = o),
                    (i._model = r._resolveDatasetElementOptions(i)),
                    i.pivot()),
                  t = 0,
                  n = o.length;
                t < n;
                ++t
              )
                r.updateElement(o[t], t, e);
              for (
                u && 0 !== i._model.tension && r.updateBezierControlPoints(),
                  t = 0,
                  n = o.length;
                t < n;
                ++t
              )
                o[t].pivot();
            },
            updateElement: function (e, t, n) {
              var r,
                a,
                i = this,
                o = i.getMeta(),
                l = e.custom || {},
                s = i.getDataset(),
                u = i.index,
                c = s.data[t],
                f = i._xScale,
                d = i._yScale,
                h = o.dataset._model,
                p = i._resolveDataElementOptions(e, t);
              (r = f.getPixelForValue("object" === typeof c ? c : NaN, t, u)),
                (a = n ? d.getBasePixel() : i.calculatePointY(c, t, u)),
                (e._xScale = f),
                (e._yScale = d),
                (e._options = p),
                (e._datasetIndex = u),
                (e._index = t),
                (e._model = {
                  x: r,
                  y: a,
                  skip: l.skip || isNaN(r) || isNaN(a),
                  radius: p.radius,
                  pointStyle: p.pointStyle,
                  rotation: p.rotation,
                  backgroundColor: p.backgroundColor,
                  borderColor: p.borderColor,
                  borderWidth: p.borderWidth,
                  tension: ft(l.tension, h ? h.tension : 0),
                  steppedLine: !!h && h.steppedLine,
                  hitRadius: p.hitRadius,
                });
            },
            _resolveDatasetElementOptions: function (e) {
              var t = this,
                n = t._config,
                r = e.custom || {},
                a = t.chart.options,
                i = a.elements.line,
                o = we.prototype._resolveDatasetElementOptions.apply(
                  t,
                  arguments
                );
              return (
                (o.spanGaps = ft(n.spanGaps, a.spanGaps)),
                (o.tension = ft(n.lineTension, i.tension)),
                (o.steppedLine = dt([r.steppedLine, n.steppedLine, i.stepped])),
                (o.clip = mt(
                  ft(n.clip, gt(t._xScale, t._yScale, o.borderWidth))
                )),
                o
              );
            },
            calculatePointY: function (e, t, n) {
              var r,
                a,
                i,
                o,
                l,
                s,
                u,
                c = this,
                f = c.chart,
                d = c._yScale,
                h = 0,
                p = 0;
              if (d.options.stacked) {
                for (
                  l = +d.getRightValue(e),
                    u = (s = f._getSortedVisibleDatasetMetas()).length,
                    r = 0;
                  r < u && (i = s[r]).index !== n;
                  ++r
                )
                  (a = f.data.datasets[i.index]),
                    "line" === i.type &&
                      i.yAxisID === d.id &&
                      ((o = +d.getRightValue(a.data[t])) < 0
                        ? (p += o || 0)
                        : (h += o || 0));
                return l < 0
                  ? d.getPixelForValue(p + l)
                  : d.getPixelForValue(h + l);
              }
              return d.getPixelForValue(e);
            },
            updateBezierControlPoints: function () {
              var e,
                t,
                n,
                r,
                a = this,
                i = a.chart,
                o = a.getMeta(),
                l = o.dataset._model,
                s = i.chartArea,
                u = o.data || [];
              function c(e, t, n) {
                return Math.max(Math.min(e, n), t);
              }
              if (
                (l.spanGaps &&
                  (u = u.filter(function (e) {
                    return !e._model.skip;
                  })),
                "monotone" === l.cubicInterpolationMode)
              )
                ie.splineCurveMonotone(u);
              else
                for (e = 0, t = u.length; e < t; ++e)
                  (n = u[e]._model),
                    (r = ie.splineCurve(
                      ie.previousItem(u, e)._model,
                      n,
                      ie.nextItem(u, e)._model,
                      l.tension
                    )),
                    (n.controlPointPreviousX = r.previous.x),
                    (n.controlPointPreviousY = r.previous.y),
                    (n.controlPointNextX = r.next.x),
                    (n.controlPointNextY = r.next.y);
              if (i.options.elements.line.capBezierPoints)
                for (e = 0, t = u.length; e < t; ++e)
                  (n = u[e]._model),
                    ht(n, s) &&
                      (e > 0 &&
                        ht(u[e - 1]._model, s) &&
                        ((n.controlPointPreviousX = c(
                          n.controlPointPreviousX,
                          s.left,
                          s.right
                        )),
                        (n.controlPointPreviousY = c(
                          n.controlPointPreviousY,
                          s.top,
                          s.bottom
                        ))),
                      e < u.length - 1 &&
                        ht(u[e + 1]._model, s) &&
                        ((n.controlPointNextX = c(
                          n.controlPointNextX,
                          s.left,
                          s.right
                        )),
                        (n.controlPointNextY = c(
                          n.controlPointNextY,
                          s.top,
                          s.bottom
                        ))));
            },
            draw: function () {
              var e,
                t = this,
                n = t.chart,
                r = t.getMeta(),
                a = r.data || [],
                i = n.chartArea,
                o = n.canvas,
                l = 0,
                s = a.length;
              for (
                t._showLine &&
                ((e = r.dataset._model.clip),
                ie.canvas.clipArea(n.ctx, {
                  left: !1 === e.left ? 0 : i.left - e.left,
                  right: !1 === e.right ? o.width : i.right + e.right,
                  top: !1 === e.top ? 0 : i.top - e.top,
                  bottom: !1 === e.bottom ? o.height : i.bottom + e.bottom,
                }),
                r.dataset.draw(),
                ie.canvas.unclipArea(n.ctx));
                l < s;
                ++l
              )
                a[l].draw(i);
            },
            setHoverStyle: function (e) {
              var t = e._model,
                n = e._options,
                r = ie.getHoverColor;
              (e.$previousStyle = {
                backgroundColor: t.backgroundColor,
                borderColor: t.borderColor,
                borderWidth: t.borderWidth,
                radius: t.radius,
              }),
                (t.backgroundColor = ft(
                  n.hoverBackgroundColor,
                  r(n.backgroundColor)
                )),
                (t.borderColor = ft(n.hoverBorderColor, r(n.borderColor))),
                (t.borderWidth = ft(n.hoverBorderWidth, n.borderWidth)),
                (t.radius = ft(n.hoverRadius, n.radius));
            },
          }),
          yt = ie.options.resolve;
        Z._set("polarArea", {
          scale: {
            type: "radialLinear",
            angleLines: { display: !1 },
            gridLines: { circular: !0 },
            pointLabels: { display: !1 },
            ticks: { beginAtZero: !0 },
          },
          animation: { animateRotate: !0, animateScale: !0 },
          startAngle: -0.5 * Math.PI,
          legendCallback: function (e) {
            var t,
              n,
              r,
              a = document.createElement("ul"),
              i = e.data,
              o = i.datasets,
              l = i.labels;
            if ((a.setAttribute("class", e.id + "-legend"), o.length))
              for (t = 0, n = o[0].data.length; t < n; ++t)
                ((r = a.appendChild(document.createElement("li"))).appendChild(
                  document.createElement("span")
                ).style.backgroundColor = o[0].backgroundColor[t]),
                  l[t] && r.appendChild(document.createTextNode(l[t]));
            return a.outerHTML;
          },
          legend: {
            labels: {
              generateLabels: function (e) {
                var t = e.data;
                return t.labels.length && t.datasets.length
                  ? t.labels.map(function (n, r) {
                      var a = e.getDatasetMeta(0),
                        i = a.controller.getStyle(r);
                      return {
                        text: n,
                        fillStyle: i.backgroundColor,
                        strokeStyle: i.borderColor,
                        lineWidth: i.borderWidth,
                        hidden:
                          isNaN(t.datasets[0].data[r]) || a.data[r].hidden,
                        index: r,
                      };
                    })
                  : [];
              },
            },
            onClick: function (e, t) {
              var n,
                r,
                a,
                i = t.index,
                o = this.chart;
              for (n = 0, r = (o.data.datasets || []).length; n < r; ++n)
                (a = o.getDatasetMeta(n)).data[i].hidden = !a.data[i].hidden;
              o.update();
            },
          },
          tooltips: {
            callbacks: {
              title: function () {
                return "";
              },
              label: function (e, t) {
                return t.labels[e.index] + ": " + e.yLabel;
              },
            },
          },
        });
        var bt = we.extend({
          dataElementType: Ue.Arc,
          linkScales: ie.noop,
          _dataElementOptions: [
            "backgroundColor",
            "borderColor",
            "borderWidth",
            "borderAlign",
            "hoverBackgroundColor",
            "hoverBorderColor",
            "hoverBorderWidth",
          ],
          _getIndexScaleId: function () {
            return this.chart.scale.id;
          },
          _getValueScaleId: function () {
            return this.chart.scale.id;
          },
          update: function (e) {
            var t,
              n,
              r,
              a = this,
              i = a.getDataset(),
              o = a.getMeta(),
              l = a.chart.options.startAngle || 0,
              s = (a._starts = []),
              u = (a._angles = []),
              c = o.data;
            for (
              a._updateRadius(),
                o.count = a.countVisibleElements(),
                t = 0,
                n = i.data.length;
              t < n;
              t++
            )
              (s[t] = l), (r = a._computeAngle(t)), (u[t] = r), (l += r);
            for (t = 0, n = c.length; t < n; ++t)
              (c[t]._options = a._resolveDataElementOptions(c[t], t)),
                a.updateElement(c[t], t, e);
          },
          _updateRadius: function () {
            var e = this,
              t = e.chart,
              n = t.chartArea,
              r = t.options,
              a = Math.min(n.right - n.left, n.bottom - n.top);
            (t.outerRadius = Math.max(a / 2, 0)),
              (t.innerRadius = Math.max(
                r.cutoutPercentage
                  ? (t.outerRadius / 100) * r.cutoutPercentage
                  : 1,
                0
              )),
              (t.radiusLength =
                (t.outerRadius - t.innerRadius) / t.getVisibleDatasetCount()),
              (e.outerRadius = t.outerRadius - t.radiusLength * e.index),
              (e.innerRadius = e.outerRadius - t.radiusLength);
          },
          updateElement: function (e, t, n) {
            var r = this,
              a = r.chart,
              i = r.getDataset(),
              o = a.options,
              l = o.animation,
              s = a.scale,
              u = a.data.labels,
              c = s.xCenter,
              f = s.yCenter,
              d = o.startAngle,
              h = e.hidden ? 0 : s.getDistanceFromCenterForValue(i.data[t]),
              p = r._starts[t],
              g = p + (e.hidden ? 0 : r._angles[t]),
              m = l.animateScale
                ? 0
                : s.getDistanceFromCenterForValue(i.data[t]),
              v = e._options || {};
            ie.extend(e, {
              _datasetIndex: r.index,
              _index: t,
              _scale: s,
              _model: {
                backgroundColor: v.backgroundColor,
                borderColor: v.borderColor,
                borderWidth: v.borderWidth,
                borderAlign: v.borderAlign,
                x: c,
                y: f,
                innerRadius: 0,
                outerRadius: n ? m : h,
                startAngle: n && l.animateRotate ? d : p,
                endAngle: n && l.animateRotate ? d : g,
                label: ie.valueAtIndexOrDefault(u, t, u[t]),
              },
            }),
              e.pivot();
          },
          countVisibleElements: function () {
            var e = this.getDataset(),
              t = this.getMeta(),
              n = 0;
            return (
              ie.each(t.data, function (t, r) {
                isNaN(e.data[r]) || t.hidden || n++;
              }),
              n
            );
          },
          setHoverStyle: function (e) {
            var t = e._model,
              n = e._options,
              r = ie.getHoverColor,
              a = ie.valueOrDefault;
            (e.$previousStyle = {
              backgroundColor: t.backgroundColor,
              borderColor: t.borderColor,
              borderWidth: t.borderWidth,
            }),
              (t.backgroundColor = a(
                n.hoverBackgroundColor,
                r(n.backgroundColor)
              )),
              (t.borderColor = a(n.hoverBorderColor, r(n.borderColor))),
              (t.borderWidth = a(n.hoverBorderWidth, n.borderWidth));
          },
          _computeAngle: function (e) {
            var t = this,
              n = this.getMeta().count,
              r = t.getDataset(),
              a = t.getMeta();
            if (isNaN(r.data[e]) || a.data[e].hidden) return 0;
            var i = {
              chart: t.chart,
              dataIndex: e,
              dataset: r,
              datasetIndex: t.index,
            };
            return yt(
              [t.chart.options.elements.arc.angle, (2 * Math.PI) / n],
              i,
              e
            );
          },
        });
        Z._set("pie", ie.clone(Z.doughnut)),
          Z._set("pie", { cutoutPercentage: 0 });
        var xt = ut,
          _t = ie.valueOrDefault;
        Z._set("radar", {
          spanGaps: !1,
          scale: { type: "radialLinear" },
          elements: { line: { fill: "start", tension: 0 } },
        });
        var wt = we.extend({
          datasetElementType: Ue.Line,
          dataElementType: Ue.Point,
          linkScales: ie.noop,
          _datasetElementOptions: [
            "backgroundColor",
            "borderWidth",
            "borderColor",
            "borderCapStyle",
            "borderDash",
            "borderDashOffset",
            "borderJoinStyle",
            "fill",
          ],
          _dataElementOptions: {
            backgroundColor: "pointBackgroundColor",
            borderColor: "pointBorderColor",
            borderWidth: "pointBorderWidth",
            hitRadius: "pointHitRadius",
            hoverBackgroundColor: "pointHoverBackgroundColor",
            hoverBorderColor: "pointHoverBorderColor",
            hoverBorderWidth: "pointHoverBorderWidth",
            hoverRadius: "pointHoverRadius",
            pointStyle: "pointStyle",
            radius: "pointRadius",
            rotation: "pointRotation",
          },
          _getIndexScaleId: function () {
            return this.chart.scale.id;
          },
          _getValueScaleId: function () {
            return this.chart.scale.id;
          },
          update: function (e) {
            var t,
              n,
              r = this,
              a = r.getMeta(),
              i = a.dataset,
              o = a.data || [],
              l = r.chart.scale,
              s = r._config;
            for (
              void 0 !== s.tension &&
                void 0 === s.lineTension &&
                (s.lineTension = s.tension),
                i._scale = l,
                i._datasetIndex = r.index,
                i._children = o,
                i._loop = !0,
                i._model = r._resolveDatasetElementOptions(i),
                i.pivot(),
                t = 0,
                n = o.length;
              t < n;
              ++t
            )
              r.updateElement(o[t], t, e);
            for (r.updateBezierControlPoints(), t = 0, n = o.length; t < n; ++t)
              o[t].pivot();
          },
          updateElement: function (e, t, n) {
            var r = this,
              a = e.custom || {},
              i = r.getDataset(),
              o = r.chart.scale,
              l = o.getPointPositionForValue(t, i.data[t]),
              s = r._resolveDataElementOptions(e, t),
              u = r.getMeta().dataset._model,
              c = n ? o.xCenter : l.x,
              f = n ? o.yCenter : l.y;
            (e._scale = o),
              (e._options = s),
              (e._datasetIndex = r.index),
              (e._index = t),
              (e._model = {
                x: c,
                y: f,
                skip: a.skip || isNaN(c) || isNaN(f),
                radius: s.radius,
                pointStyle: s.pointStyle,
                rotation: s.rotation,
                backgroundColor: s.backgroundColor,
                borderColor: s.borderColor,
                borderWidth: s.borderWidth,
                tension: _t(a.tension, u ? u.tension : 0),
                hitRadius: s.hitRadius,
              });
          },
          _resolveDatasetElementOptions: function () {
            var e = this,
              t = e._config,
              n = e.chart.options,
              r = we.prototype._resolveDatasetElementOptions.apply(
                e,
                arguments
              );
            return (
              (r.spanGaps = _t(t.spanGaps, n.spanGaps)),
              (r.tension = _t(t.lineTension, n.elements.line.tension)),
              r
            );
          },
          updateBezierControlPoints: function () {
            var e,
              t,
              n,
              r,
              a = this,
              i = a.getMeta(),
              o = a.chart.chartArea,
              l = i.data || [];
            function s(e, t, n) {
              return Math.max(Math.min(e, n), t);
            }
            for (
              i.dataset._model.spanGaps &&
                (l = l.filter(function (e) {
                  return !e._model.skip;
                })),
                e = 0,
                t = l.length;
              e < t;
              ++e
            )
              (n = l[e]._model),
                (r = ie.splineCurve(
                  ie.previousItem(l, e, !0)._model,
                  n,
                  ie.nextItem(l, e, !0)._model,
                  n.tension
                )),
                (n.controlPointPreviousX = s(r.previous.x, o.left, o.right)),
                (n.controlPointPreviousY = s(r.previous.y, o.top, o.bottom)),
                (n.controlPointNextX = s(r.next.x, o.left, o.right)),
                (n.controlPointNextY = s(r.next.y, o.top, o.bottom));
          },
          setHoverStyle: function (e) {
            var t = e._model,
              n = e._options,
              r = ie.getHoverColor;
            (e.$previousStyle = {
              backgroundColor: t.backgroundColor,
              borderColor: t.borderColor,
              borderWidth: t.borderWidth,
              radius: t.radius,
            }),
              (t.backgroundColor = _t(
                n.hoverBackgroundColor,
                r(n.backgroundColor)
              )),
              (t.borderColor = _t(n.hoverBorderColor, r(n.borderColor))),
              (t.borderWidth = _t(n.hoverBorderWidth, n.borderWidth)),
              (t.radius = _t(n.hoverRadius, n.radius));
          },
        });
        Z._set("scatter", {
          hover: { mode: "single" },
          scales: {
            xAxes: [{ id: "x-axis-1", type: "linear", position: "bottom" }],
            yAxes: [{ id: "y-axis-1", type: "linear", position: "left" }],
          },
          tooltips: {
            callbacks: {
              title: function () {
                return "";
              },
              label: function (e) {
                return "(" + e.xLabel + ", " + e.yLabel + ")";
              },
            },
          },
        }),
          Z._set("global", { datasets: { scatter: { showLine: !1 } } });
        var kt = {
          bar: tt,
          bubble: at,
          doughnut: ut,
          horizontalBar: ct,
          line: vt,
          polarArea: bt,
          pie: xt,
          radar: wt,
          scatter: vt,
        };
        function St(e, t) {
          return e.native ? { x: e.x, y: e.y } : ie.getRelativePosition(e, t);
        }
        function Ct(e, t) {
          var n,
            r,
            a,
            i,
            o,
            l,
            s = e._getSortedVisibleDatasetMetas();
          for (r = 0, i = s.length; r < i; ++r)
            for (a = 0, o = (n = s[r].data).length; a < o; ++a)
              (l = n[a])._view.skip || t(l);
        }
        function Mt(e, t) {
          var n = [];
          return (
            Ct(e, function (e) {
              e.inRange(t.x, t.y) && n.push(e);
            }),
            n
          );
        }
        function Ot(e, t, n, r) {
          var a = Number.POSITIVE_INFINITY,
            i = [];
          return (
            Ct(e, function (e) {
              if (!n || e.inRange(t.x, t.y)) {
                var o = e.getCenterPoint(),
                  l = r(t, o);
                l < a ? ((i = [e]), (a = l)) : l === a && i.push(e);
              }
            }),
            i
          );
        }
        function Pt(e) {
          var t = -1 !== e.indexOf("x"),
            n = -1 !== e.indexOf("y");
          return function (e, r) {
            var a = t ? Math.abs(e.x - r.x) : 0,
              i = n ? Math.abs(e.y - r.y) : 0;
            return Math.sqrt(Math.pow(a, 2) + Math.pow(i, 2));
          };
        }
        function Et(e, t, n) {
          var r = St(t, e);
          n.axis = n.axis || "x";
          var a = Pt(n.axis),
            i = n.intersect ? Mt(e, r) : Ot(e, r, !1, a),
            o = [];
          return i.length
            ? (e._getSortedVisibleDatasetMetas().forEach(function (e) {
                var t = e.data[i[0]._index];
                t && !t._view.skip && o.push(t);
              }),
              o)
            : [];
        }
        var Dt = {
            modes: {
              single: function (e, t) {
                var n = St(t, e),
                  r = [];
                return (
                  Ct(e, function (e) {
                    if (e.inRange(n.x, n.y)) return r.push(e), r;
                  }),
                  r.slice(0, 1)
                );
              },
              label: Et,
              index: Et,
              dataset: function (e, t, n) {
                var r = St(t, e);
                n.axis = n.axis || "xy";
                var a = Pt(n.axis),
                  i = n.intersect ? Mt(e, r) : Ot(e, r, !1, a);
                return (
                  i.length > 0 &&
                    (i = e.getDatasetMeta(i[0]._datasetIndex).data),
                  i
                );
              },
              "x-axis": function (e, t) {
                return Et(e, t, { intersect: !1 });
              },
              point: function (e, t) {
                return Mt(e, St(t, e));
              },
              nearest: function (e, t, n) {
                var r = St(t, e);
                n.axis = n.axis || "xy";
                var a = Pt(n.axis);
                return Ot(e, r, n.intersect, a);
              },
              x: function (e, t, n) {
                var r = St(t, e),
                  a = [],
                  i = !1;
                return (
                  Ct(e, function (e) {
                    e.inXRange(r.x) && a.push(e),
                      e.inRange(r.x, r.y) && (i = !0);
                  }),
                  n.intersect && !i && (a = []),
                  a
                );
              },
              y: function (e, t, n) {
                var r = St(t, e),
                  a = [],
                  i = !1;
                return (
                  Ct(e, function (e) {
                    e.inYRange(r.y) && a.push(e),
                      e.inRange(r.x, r.y) && (i = !0);
                  }),
                  n.intersect && !i && (a = []),
                  a
                );
              },
            },
          },
          Tt = ie.extend;
        function At(e, t) {
          return ie.where(e, function (e) {
            return e.pos === t;
          });
        }
        function Nt(e, t) {
          return e.sort(function (e, n) {
            var r = t ? n : e,
              a = t ? e : n;
            return r.weight === a.weight
              ? r.index - a.index
              : r.weight - a.weight;
          });
        }
        function It(e) {
          var t,
            n,
            r,
            a = [];
          for (t = 0, n = (e || []).length; t < n; ++t)
            (r = e[t]),
              a.push({
                index: t,
                box: r,
                pos: r.position,
                horizontal: r.isHorizontal(),
                weight: r.weight,
              });
          return a;
        }
        function Rt(e, t) {
          var n, r, a;
          for (n = 0, r = e.length; n < r; ++n)
            ((a = e[n]).width = a.horizontal
              ? a.box.fullWidth && t.availableWidth
              : t.vBoxMaxWidth),
              (a.height = a.horizontal && t.hBoxMaxHeight);
        }
        function Lt(e) {
          var t = It(e),
            n = Nt(At(t, "left"), !0),
            r = Nt(At(t, "right")),
            a = Nt(At(t, "top"), !0),
            i = Nt(At(t, "bottom"));
          return {
            leftAndTop: n.concat(a),
            rightAndBottom: r.concat(i),
            chartArea: At(t, "chartArea"),
            vertical: n.concat(r),
            horizontal: a.concat(i),
          };
        }
        function Ft(e, t, n, r) {
          return Math.max(e[n], t[n]) + Math.max(e[r], t[r]);
        }
        function jt(e, t, n) {
          var r,
            a,
            i = n.box,
            o = e.maxPadding;
          if (
            (n.size && (e[n.pos] -= n.size),
            (n.size = n.horizontal ? i.height : i.width),
            (e[n.pos] += n.size),
            i.getPadding)
          ) {
            var l = i.getPadding();
            (o.top = Math.max(o.top, l.top)),
              (o.left = Math.max(o.left, l.left)),
              (o.bottom = Math.max(o.bottom, l.bottom)),
              (o.right = Math.max(o.right, l.right));
          }
          if (
            ((r = t.outerWidth - Ft(o, e, "left", "right")),
            (a = t.outerHeight - Ft(o, e, "top", "bottom")),
            r !== e.w || a !== e.h)
          ) {
            (e.w = r), (e.h = a);
            var s = n.horizontal ? [r, e.w] : [a, e.h];
            return s[0] !== s[1] && (!isNaN(s[0]) || !isNaN(s[1]));
          }
        }
        function zt(e) {
          var t = e.maxPadding;
          function n(n) {
            var r = Math.max(t[n] - e[n], 0);
            return (e[n] += r), r;
          }
          (e.y += n("top")), (e.x += n("left")), n("right"), n("bottom");
        }
        function Wt(e, t) {
          var n = t.maxPadding;
          function r(e) {
            var r = { left: 0, top: 0, right: 0, bottom: 0 };
            return (
              e.forEach(function (e) {
                r[e] = Math.max(t[e], n[e]);
              }),
              r
            );
          }
          return r(e ? ["left", "right"] : ["top", "bottom"]);
        }
        function Vt(e, t, n) {
          var r,
            a,
            i,
            o,
            l,
            s,
            u = [];
          for (r = 0, a = e.length; r < a; ++r)
            (o = (i = e[r]).box).update(
              i.width || t.w,
              i.height || t.h,
              Wt(i.horizontal, t)
            ),
              jt(t, n, i) && ((s = !0), u.length && (l = !0)),
              o.fullWidth || u.push(i);
          return (l && Vt(u, t, n)) || s;
        }
        function Yt(e, t, n) {
          var r,
            a,
            i,
            o,
            l = n.padding,
            s = t.x,
            u = t.y;
          for (r = 0, a = e.length; r < a; ++r)
            (o = (i = e[r]).box),
              i.horizontal
                ? ((o.left = o.fullWidth ? l.left : t.left),
                  (o.right = o.fullWidth
                    ? n.outerWidth - l.right
                    : t.left + t.w),
                  (o.top = u),
                  (o.bottom = u + o.height),
                  (o.width = o.right - o.left),
                  (u = o.bottom))
                : ((o.left = s),
                  (o.right = s + o.width),
                  (o.top = t.top),
                  (o.bottom = t.top + t.h),
                  (o.height = o.bottom - o.top),
                  (s = o.right));
          (t.x = s), (t.y = u);
        }
        Z._set("global", {
          layout: { padding: { top: 0, right: 0, bottom: 0, left: 0 } },
        });
        var Bt = {
            defaults: {},
            addBox: function (e, t) {
              e.boxes || (e.boxes = []),
                (t.fullWidth = t.fullWidth || !1),
                (t.position = t.position || "top"),
                (t.weight = t.weight || 0),
                (t._layers =
                  t._layers ||
                  function () {
                    return [
                      {
                        z: 0,
                        draw: function () {
                          t.draw.apply(t, arguments);
                        },
                      },
                    ];
                  }),
                e.boxes.push(t);
            },
            removeBox: function (e, t) {
              var n = e.boxes ? e.boxes.indexOf(t) : -1;
              -1 !== n && e.boxes.splice(n, 1);
            },
            configure: function (e, t, n) {
              for (
                var r,
                  a = ["fullWidth", "position", "weight"],
                  i = a.length,
                  o = 0;
                o < i;
                ++o
              )
                (r = a[o]), n.hasOwnProperty(r) && (t[r] = n[r]);
            },
            update: function (e, t, n) {
              if (e) {
                var r = e.options.layout || {},
                  a = ie.options.toPadding(r.padding),
                  i = t - a.width,
                  o = n - a.height,
                  l = Lt(e.boxes),
                  s = l.vertical,
                  u = l.horizontal,
                  c = Object.freeze({
                    outerWidth: t,
                    outerHeight: n,
                    padding: a,
                    availableWidth: i,
                    vBoxMaxWidth: i / 2 / s.length,
                    hBoxMaxHeight: o / 2,
                  }),
                  f = Tt(
                    { maxPadding: Tt({}, a), w: i, h: o, x: a.left, y: a.top },
                    a
                  );
                Rt(s.concat(u), c),
                  Vt(s, f, c),
                  Vt(u, f, c) && Vt(s, f, c),
                  zt(f),
                  Yt(l.leftAndTop, f, c),
                  (f.x += f.w),
                  (f.y += f.h),
                  Yt(l.rightAndBottom, f, c),
                  (e.chartArea = {
                    left: f.left,
                    top: f.top,
                    right: f.left + f.w,
                    bottom: f.top + f.h,
                  }),
                  ie.each(l.chartArea, function (t) {
                    var n = t.box;
                    Tt(n, e.chartArea), n.update(f.w, f.h);
                  });
              }
            },
          },
          Ht = {
            acquireContext: function (e) {
              return (
                e && e.canvas && (e = e.canvas),
                (e && e.getContext("2d")) || null
              );
            },
          },
          Ut =
            "/*\r\n * DOM element rendering detection\r\n * https://davidwalsh.name/detect-node-insertion\r\n */\r\n@keyframes chartjs-render-animation {\r\n\tfrom { opacity: 0.99; }\r\n\tto { opacity: 1; }\r\n}\r\n\r\n.chartjs-render-monitor {\r\n\tanimation: chartjs-render-animation 0.001s;\r\n}\r\n\r\n/*\r\n * DOM element resizing detection\r\n * https://github.com/marcj/css-element-queries\r\n */\r\n.chartjs-size-monitor,\r\n.chartjs-size-monitor-expand,\r\n.chartjs-size-monitor-shrink {\r\n\tposition: absolute;\r\n\tdirection: ltr;\r\n\tleft: 0;\r\n\ttop: 0;\r\n\tright: 0;\r\n\tbottom: 0;\r\n\toverflow: hidden;\r\n\tpointer-events: none;\r\n\tvisibility: hidden;\r\n\tz-index: -1;\r\n}\r\n\r\n.chartjs-size-monitor-expand > div {\r\n\tposition: absolute;\r\n\twidth: 1000000px;\r\n\theight: 1000000px;\r\n\tleft: 0;\r\n\ttop: 0;\r\n}\r\n\r\n.chartjs-size-monitor-shrink > div {\r\n\tposition: absolute;\r\n\twidth: 200%;\r\n\theight: 200%;\r\n\tleft: 0;\r\n\ttop: 0;\r\n}\r\n",
          $t = n(Object.freeze({ __proto__: null, default: Ut })),
          Gt = "$chartjs",
          qt = "chartjs-",
          Kt = qt + "size-monitor",
          Qt = qt + "render-monitor",
          Zt = qt + "render-animation",
          Xt = ["animationstart", "webkitAnimationStart"],
          Jt = {
            touchstart: "mousedown",
            touchmove: "mousemove",
            touchend: "mouseup",
            pointerenter: "mouseenter",
            pointerdown: "mousedown",
            pointermove: "mousemove",
            pointerup: "mouseup",
            pointerleave: "mouseout",
            pointerout: "mouseout",
          };
        function en(e, t) {
          var n = ie.getStyle(e, t),
            r = n && n.match(/^(\d+)(\.\d+)?px$/);
          return r ? Number(r[1]) : void 0;
        }
        function tn(e, t) {
          var n = e.style,
            r = e.getAttribute("height"),
            a = e.getAttribute("width");
          if (
            ((e[Gt] = {
              initial: {
                height: r,
                width: a,
                style: { display: n.display, height: n.height, width: n.width },
              },
            }),
            (n.display = n.display || "block"),
            null === a || "" === a)
          ) {
            var i = en(e, "width");
            void 0 !== i && (e.width = i);
          }
          if (null === r || "" === r)
            if ("" === e.style.height)
              e.height = e.width / (t.options.aspectRatio || 2);
            else {
              var o = en(e, "height");
              void 0 !== i && (e.height = o);
            }
          return e;
        }
        var nn = !!(function () {
          var e = !1;
          try {
            var t = Object.defineProperty({}, "passive", {
              get: function () {
                e = !0;
              },
            });
            window.addEventListener("e", null, t);
          } catch (n) {}
          return e;
        })() && { passive: !0 };
        function rn(e, t, n) {
          e.addEventListener(t, n, nn);
        }
        function an(e, t, n) {
          e.removeEventListener(t, n, nn);
        }
        function on(e, t, n, r, a) {
          return {
            type: e,
            chart: t,
            native: a || null,
            x: void 0 !== n ? n : null,
            y: void 0 !== r ? r : null,
          };
        }
        function ln(e, t) {
          var n = Jt[e.type] || e.type,
            r = ie.getRelativePosition(e, t);
          return on(n, t, r.x, r.y, e);
        }
        function sn(e, t) {
          var n = !1,
            r = [];
          return function () {
            (r = Array.prototype.slice.call(arguments)),
              (t = t || this),
              n ||
                ((n = !0),
                ie.requestAnimFrame.call(window, function () {
                  (n = !1), e.apply(t, r);
                }));
          };
        }
        function un(e) {
          var t = document.createElement("div");
          return (t.className = e || ""), t;
        }
        function cn(e) {
          var t = 1e6,
            n = un(Kt),
            r = un(Kt + "-expand"),
            a = un(Kt + "-shrink");
          r.appendChild(un()),
            a.appendChild(un()),
            n.appendChild(r),
            n.appendChild(a),
            (n._reset = function () {
              (r.scrollLeft = t),
                (r.scrollTop = t),
                (a.scrollLeft = t),
                (a.scrollTop = t);
            });
          var i = function () {
            n._reset(), e();
          };
          return (
            rn(r, "scroll", i.bind(r, "expand")),
            rn(a, "scroll", i.bind(a, "shrink")),
            n
          );
        }
        function fn(e, t) {
          var n = e[Gt] || (e[Gt] = {}),
            r = (n.renderProxy = function (e) {
              e.animationName === Zt && t();
            });
          ie.each(Xt, function (t) {
            rn(e, t, r);
          }),
            (n.reflow = !!e.offsetParent),
            e.classList.add(Qt);
        }
        function dn(e) {
          var t = e[Gt] || {},
            n = t.renderProxy;
          n &&
            (ie.each(Xt, function (t) {
              an(e, t, n);
            }),
            delete t.renderProxy),
            e.classList.remove(Qt);
        }
        function hn(e, t, n) {
          var r = e[Gt] || (e[Gt] = {}),
            a = (r.resizer = cn(
              sn(function () {
                if (r.resizer) {
                  var a = n.options.maintainAspectRatio && e.parentNode,
                    i = a ? a.clientWidth : 0;
                  t(on("resize", n)),
                    a && a.clientWidth < i && n.canvas && t(on("resize", n));
                }
              })
            ));
          fn(e, function () {
            if (r.resizer) {
              var t = e.parentNode;
              t && t !== a.parentNode && t.insertBefore(a, t.firstChild),
                a._reset();
            }
          });
        }
        function pn(e) {
          var t = e[Gt] || {},
            n = t.resizer;
          delete t.resizer,
            dn(e),
            n && n.parentNode && n.parentNode.removeChild(n);
        }
        function gn(e, t) {
          var n = e[Gt] || (e[Gt] = {});
          if (!n.containsStyles) {
            (n.containsStyles = !0), (t = "/* Chart.js */\n" + t);
            var r = document.createElement("style");
            r.setAttribute("type", "text/css"),
              r.appendChild(document.createTextNode(t)),
              e.appendChild(r);
          }
        }
        var mn = {
          disableCSSInjection: !1,
          _enabled:
            "undefined" !== typeof window && "undefined" !== typeof document,
          _ensureLoaded: function (e) {
            if (!this.disableCSSInjection) {
              var t = e.getRootNode ? e.getRootNode() : document;
              gn(t.host ? t : document.head, $t);
            }
          },
          acquireContext: function (e, t) {
            "string" === typeof e
              ? (e = document.getElementById(e))
              : e.length && (e = e[0]),
              e && e.canvas && (e = e.canvas);
            var n = e && e.getContext && e.getContext("2d");
            return n && n.canvas === e
              ? (this._ensureLoaded(e), tn(e, t), n)
              : null;
          },
          releaseContext: function (e) {
            var t = e.canvas;
            if (t[Gt]) {
              var n = t[Gt].initial;
              ["height", "width"].forEach(function (e) {
                var r = n[e];
                ie.isNullOrUndef(r)
                  ? t.removeAttribute(e)
                  : t.setAttribute(e, r);
              }),
                ie.each(n.style || {}, function (e, n) {
                  t.style[n] = e;
                }),
                (t.width = t.width),
                delete t[Gt];
            }
          },
          addEventListener: function (e, t, n) {
            var r = e.canvas;
            if ("resize" !== t) {
              var a = n[Gt] || (n[Gt] = {});
              rn(
                r,
                t,
                ((a.proxies || (a.proxies = {}))[e.id + "_" + t] = function (
                  t
                ) {
                  n(ln(t, e));
                })
              );
            } else hn(r, n, e);
          },
          removeEventListener: function (e, t, n) {
            var r = e.canvas;
            if ("resize" !== t) {
              var a = ((n[Gt] || {}).proxies || {})[e.id + "_" + t];
              a && an(r, t, a);
            } else pn(r);
          },
        };
        (ie.addEvent = rn), (ie.removeEvent = an);
        var vn = mn._enabled ? mn : Ht,
          yn = ie.extend(
            {
              initialize: function () {},
              acquireContext: function () {},
              releaseContext: function () {},
              addEventListener: function () {},
              removeEventListener: function () {},
            },
            vn
          );
        Z._set("global", { plugins: {} });
        var bn = {
            _plugins: [],
            _cacheId: 0,
            register: function (e) {
              var t = this._plugins;
              [].concat(e).forEach(function (e) {
                -1 === t.indexOf(e) && t.push(e);
              }),
                this._cacheId++;
            },
            unregister: function (e) {
              var t = this._plugins;
              [].concat(e).forEach(function (e) {
                var n = t.indexOf(e);
                -1 !== n && t.splice(n, 1);
              }),
                this._cacheId++;
            },
            clear: function () {
              (this._plugins = []), this._cacheId++;
            },
            count: function () {
              return this._plugins.length;
            },
            getAll: function () {
              return this._plugins;
            },
            notify: function (e, t, n) {
              var r,
                a,
                i,
                o,
                l,
                s = this.descriptors(e),
                u = s.length;
              for (r = 0; r < u; ++r)
                if (
                  "function" === typeof (l = (i = (a = s[r]).plugin)[t]) &&
                  ((o = [e].concat(n || [])).push(a.options),
                  !1 === l.apply(i, o))
                )
                  return !1;
              return !0;
            },
            descriptors: function (e) {
              var t = e.$plugins || (e.$plugins = {});
              if (t.id === this._cacheId) return t.descriptors;
              var n = [],
                r = [],
                a = (e && e.config) || {},
                i = (a.options && a.options.plugins) || {};
              return (
                this._plugins.concat(a.plugins || []).forEach(function (e) {
                  if (-1 === n.indexOf(e)) {
                    var t = e.id,
                      a = i[t];
                    !1 !== a &&
                      (!0 === a && (a = ie.clone(Z.global.plugins[t])),
                      n.push(e),
                      r.push({ plugin: e, options: a || {} }));
                  }
                }),
                (t.descriptors = r),
                (t.id = this._cacheId),
                r
              );
            },
            _invalidate: function (e) {
              delete e.$plugins;
            },
          },
          xn = {
            constructors: {},
            defaults: {},
            registerScaleType: function (e, t, n) {
              (this.constructors[e] = t), (this.defaults[e] = ie.clone(n));
            },
            getScaleConstructor: function (e) {
              return this.constructors.hasOwnProperty(e)
                ? this.constructors[e]
                : void 0;
            },
            getScaleDefaults: function (e) {
              return this.defaults.hasOwnProperty(e)
                ? ie.merge(Object.create(null), [Z.scale, this.defaults[e]])
                : {};
            },
            updateScaleDefaults: function (e, t) {
              var n = this;
              n.defaults.hasOwnProperty(e) &&
                (n.defaults[e] = ie.extend(n.defaults[e], t));
            },
            addScalesToLayout: function (e) {
              ie.each(e.scales, function (t) {
                (t.fullWidth = t.options.fullWidth),
                  (t.position = t.options.position),
                  (t.weight = t.options.weight),
                  Bt.addBox(e, t);
              });
            },
          },
          _n = ie.valueOrDefault,
          wn = ie.rtl.getRtlAdapter;
        Z._set("global", {
          tooltips: {
            enabled: !0,
            custom: null,
            mode: "nearest",
            position: "average",
            intersect: !0,
            backgroundColor: "rgba(0,0,0,0.8)",
            titleFontStyle: "bold",
            titleSpacing: 2,
            titleMarginBottom: 6,
            titleFontColor: "#fff",
            titleAlign: "left",
            bodySpacing: 2,
            bodyFontColor: "#fff",
            bodyAlign: "left",
            footerFontStyle: "bold",
            footerSpacing: 2,
            footerMarginTop: 6,
            footerFontColor: "#fff",
            footerAlign: "left",
            yPadding: 6,
            xPadding: 6,
            caretPadding: 2,
            caretSize: 5,
            cornerRadius: 6,
            multiKeyBackground: "#fff",
            displayColors: !0,
            borderColor: "rgba(0,0,0,0)",
            borderWidth: 0,
            callbacks: {
              beforeTitle: ie.noop,
              title: function (e, t) {
                var n = "",
                  r = t.labels,
                  a = r ? r.length : 0;
                if (e.length > 0) {
                  var i = e[0];
                  i.label
                    ? (n = i.label)
                    : i.xLabel
                    ? (n = i.xLabel)
                    : a > 0 && i.index < a && (n = r[i.index]);
                }
                return n;
              },
              afterTitle: ie.noop,
              beforeBody: ie.noop,
              beforeLabel: ie.noop,
              label: function (e, t) {
                var n = t.datasets[e.datasetIndex].label || "";
                return (
                  n && (n += ": "),
                  ie.isNullOrUndef(e.value) ? (n += e.yLabel) : (n += e.value),
                  n
                );
              },
              labelColor: function (e, t) {
                var n = t.getDatasetMeta(e.datasetIndex).data[e.index]._view;
                return {
                  borderColor: n.borderColor,
                  backgroundColor: n.backgroundColor,
                };
              },
              labelTextColor: function () {
                return this._options.bodyFontColor;
              },
              afterLabel: ie.noop,
              afterBody: ie.noop,
              beforeFooter: ie.noop,
              footer: ie.noop,
              afterFooter: ie.noop,
            },
          },
        });
        var kn = {
          average: function (e) {
            if (!e.length) return !1;
            var t,
              n,
              r = 0,
              a = 0,
              i = 0;
            for (t = 0, n = e.length; t < n; ++t) {
              var o = e[t];
              if (o && o.hasValue()) {
                var l = o.tooltipPosition();
                (r += l.x), (a += l.y), ++i;
              }
            }
            return { x: r / i, y: a / i };
          },
          nearest: function (e, t) {
            var n,
              r,
              a,
              i = t.x,
              o = t.y,
              l = Number.POSITIVE_INFINITY;
            for (n = 0, r = e.length; n < r; ++n) {
              var s = e[n];
              if (s && s.hasValue()) {
                var u = s.getCenterPoint(),
                  c = ie.distanceBetweenPoints(t, u);
                c < l && ((l = c), (a = s));
              }
            }
            if (a) {
              var f = a.tooltipPosition();
              (i = f.x), (o = f.y);
            }
            return { x: i, y: o };
          },
        };
        function Sn(e, t) {
          return (
            t && (ie.isArray(t) ? Array.prototype.push.apply(e, t) : e.push(t)),
            e
          );
        }
        function Cn(e) {
          return ("string" === typeof e || e instanceof String) &&
            e.indexOf("\n") > -1
            ? e.split("\n")
            : e;
        }
        function Mn(e) {
          var t = e._xScale,
            n = e._yScale || e._scale,
            r = e._index,
            a = e._datasetIndex,
            i = e._chart.getDatasetMeta(a).controller,
            o = i._getIndexScale(),
            l = i._getValueScale();
          return {
            xLabel: t ? t.getLabelForIndex(r, a) : "",
            yLabel: n ? n.getLabelForIndex(r, a) : "",
            label: o ? "" + o.getLabelForIndex(r, a) : "",
            value: l ? "" + l.getLabelForIndex(r, a) : "",
            index: r,
            datasetIndex: a,
            x: e._model.x,
            y: e._model.y,
          };
        }
        function On(e) {
          var t = Z.global;
          return {
            xPadding: e.xPadding,
            yPadding: e.yPadding,
            xAlign: e.xAlign,
            yAlign: e.yAlign,
            rtl: e.rtl,
            textDirection: e.textDirection,
            bodyFontColor: e.bodyFontColor,
            _bodyFontFamily: _n(e.bodyFontFamily, t.defaultFontFamily),
            _bodyFontStyle: _n(e.bodyFontStyle, t.defaultFontStyle),
            _bodyAlign: e.bodyAlign,
            bodyFontSize: _n(e.bodyFontSize, t.defaultFontSize),
            bodySpacing: e.bodySpacing,
            titleFontColor: e.titleFontColor,
            _titleFontFamily: _n(e.titleFontFamily, t.defaultFontFamily),
            _titleFontStyle: _n(e.titleFontStyle, t.defaultFontStyle),
            titleFontSize: _n(e.titleFontSize, t.defaultFontSize),
            _titleAlign: e.titleAlign,
            titleSpacing: e.titleSpacing,
            titleMarginBottom: e.titleMarginBottom,
            footerFontColor: e.footerFontColor,
            _footerFontFamily: _n(e.footerFontFamily, t.defaultFontFamily),
            _footerFontStyle: _n(e.footerFontStyle, t.defaultFontStyle),
            footerFontSize: _n(e.footerFontSize, t.defaultFontSize),
            _footerAlign: e.footerAlign,
            footerSpacing: e.footerSpacing,
            footerMarginTop: e.footerMarginTop,
            caretSize: e.caretSize,
            cornerRadius: e.cornerRadius,
            backgroundColor: e.backgroundColor,
            opacity: 0,
            legendColorBackground: e.multiKeyBackground,
            displayColors: e.displayColors,
            borderColor: e.borderColor,
            borderWidth: e.borderWidth,
          };
        }
        function Pn(e, t) {
          var n = e._chart.ctx,
            r = 2 * t.yPadding,
            a = 0,
            i = t.body,
            o = i.reduce(function (e, t) {
              return e + t.before.length + t.lines.length + t.after.length;
            }, 0);
          o += t.beforeBody.length + t.afterBody.length;
          var l = t.title.length,
            s = t.footer.length,
            u = t.titleFontSize,
            c = t.bodyFontSize,
            f = t.footerFontSize;
          (r += l * u),
            (r += l ? (l - 1) * t.titleSpacing : 0),
            (r += l ? t.titleMarginBottom : 0),
            (r += o * c),
            (r += o ? (o - 1) * t.bodySpacing : 0),
            (r += s ? t.footerMarginTop : 0),
            (r += s * f),
            (r += s ? (s - 1) * t.footerSpacing : 0);
          var d = 0,
            h = function (e) {
              a = Math.max(a, n.measureText(e).width + d);
            };
          return (
            (n.font = ie.fontString(u, t._titleFontStyle, t._titleFontFamily)),
            ie.each(t.title, h),
            (n.font = ie.fontString(c, t._bodyFontStyle, t._bodyFontFamily)),
            ie.each(t.beforeBody.concat(t.afterBody), h),
            (d = t.displayColors ? c + 2 : 0),
            ie.each(i, function (e) {
              ie.each(e.before, h), ie.each(e.lines, h), ie.each(e.after, h);
            }),
            (d = 0),
            (n.font = ie.fontString(
              f,
              t._footerFontStyle,
              t._footerFontFamily
            )),
            ie.each(t.footer, h),
            { width: (a += 2 * t.xPadding), height: r }
          );
        }
        function En(e, t) {
          var n,
            r,
            a,
            i,
            o,
            l = e._model,
            s = e._chart,
            u = e._chart.chartArea,
            c = "center",
            f = "center";
          l.y < t.height
            ? (f = "top")
            : l.y > s.height - t.height && (f = "bottom");
          var d = (u.left + u.right) / 2,
            h = (u.top + u.bottom) / 2;
          "center" === f
            ? ((n = function (e) {
                return e <= d;
              }),
              (r = function (e) {
                return e > d;
              }))
            : ((n = function (e) {
                return e <= t.width / 2;
              }),
              (r = function (e) {
                return e >= s.width - t.width / 2;
              })),
            (a = function (e) {
              return e + t.width + l.caretSize + l.caretPadding > s.width;
            }),
            (i = function (e) {
              return e - t.width - l.caretSize - l.caretPadding < 0;
            }),
            (o = function (e) {
              return e <= h ? "top" : "bottom";
            }),
            n(l.x)
              ? ((c = "left"), a(l.x) && ((c = "center"), (f = o(l.y))))
              : r(l.x) &&
                ((c = "right"), i(l.x) && ((c = "center"), (f = o(l.y))));
          var p = e._options;
          return {
            xAlign: p.xAlign ? p.xAlign : c,
            yAlign: p.yAlign ? p.yAlign : f,
          };
        }
        function Dn(e, t, n, r) {
          var a = e.x,
            i = e.y,
            o = e.caretSize,
            l = e.caretPadding,
            s = e.cornerRadius,
            u = n.xAlign,
            c = n.yAlign,
            f = o + l,
            d = s + l;
          return (
            "right" === u
              ? (a -= t.width)
              : "center" === u &&
                ((a -= t.width / 2) + t.width > r.width &&
                  (a = r.width - t.width),
                a < 0 && (a = 0)),
            "top" === c
              ? (i += f)
              : (i -= "bottom" === c ? t.height + f : t.height / 2),
            "center" === c
              ? "left" === u
                ? (a += f)
                : "right" === u && (a -= f)
              : "left" === u
              ? (a -= d)
              : "right" === u && (a += d),
            { x: a, y: i }
          );
        }
        function Tn(e, t) {
          return "center" === t
            ? e.x + e.width / 2
            : "right" === t
            ? e.x + e.width - e.xPadding
            : e.x + e.xPadding;
        }
        function An(e) {
          return Sn([], Cn(e));
        }
        var Nn = he.extend({
            initialize: function () {
              (this._model = On(this._options)), (this._lastActive = []);
            },
            getTitle: function () {
              var e = this,
                t = e._options.callbacks,
                n = t.beforeTitle.apply(e, arguments),
                r = t.title.apply(e, arguments),
                a = t.afterTitle.apply(e, arguments),
                i = [];
              return (i = Sn(i, Cn(n))), (i = Sn(i, Cn(r))), (i = Sn(i, Cn(a)));
            },
            getBeforeBody: function () {
              return An(
                this._options.callbacks.beforeBody.apply(this, arguments)
              );
            },
            getBody: function (e, t) {
              var n = this,
                r = n._options.callbacks,
                a = [];
              return (
                ie.each(e, function (e) {
                  var i = { before: [], lines: [], after: [] };
                  Sn(i.before, Cn(r.beforeLabel.call(n, e, t))),
                    Sn(i.lines, r.label.call(n, e, t)),
                    Sn(i.after, Cn(r.afterLabel.call(n, e, t))),
                    a.push(i);
                }),
                a
              );
            },
            getAfterBody: function () {
              return An(
                this._options.callbacks.afterBody.apply(this, arguments)
              );
            },
            getFooter: function () {
              var e = this,
                t = e._options.callbacks,
                n = t.beforeFooter.apply(e, arguments),
                r = t.footer.apply(e, arguments),
                a = t.afterFooter.apply(e, arguments),
                i = [];
              return (i = Sn(i, Cn(n))), (i = Sn(i, Cn(r))), (i = Sn(i, Cn(a)));
            },
            update: function (e) {
              var t,
                n,
                r = this,
                a = r._options,
                i = r._model,
                o = (r._model = On(a)),
                l = r._active,
                s = r._data,
                u = { xAlign: i.xAlign, yAlign: i.yAlign },
                c = { x: i.x, y: i.y },
                f = { width: i.width, height: i.height },
                d = { x: i.caretX, y: i.caretY };
              if (l.length) {
                o.opacity = 1;
                var h = [],
                  p = [];
                d = kn[a.position].call(r, l, r._eventPosition);
                var g = [];
                for (t = 0, n = l.length; t < n; ++t) g.push(Mn(l[t]));
                a.filter &&
                  (g = g.filter(function (e) {
                    return a.filter(e, s);
                  })),
                  a.itemSort &&
                    (g = g.sort(function (e, t) {
                      return a.itemSort(e, t, s);
                    })),
                  ie.each(g, function (e) {
                    h.push(a.callbacks.labelColor.call(r, e, r._chart)),
                      p.push(a.callbacks.labelTextColor.call(r, e, r._chart));
                  }),
                  (o.title = r.getTitle(g, s)),
                  (o.beforeBody = r.getBeforeBody(g, s)),
                  (o.body = r.getBody(g, s)),
                  (o.afterBody = r.getAfterBody(g, s)),
                  (o.footer = r.getFooter(g, s)),
                  (o.x = d.x),
                  (o.y = d.y),
                  (o.caretPadding = a.caretPadding),
                  (o.labelColors = h),
                  (o.labelTextColors = p),
                  (o.dataPoints = g),
                  (c = Dn(o, (f = Pn(this, o)), (u = En(this, f)), r._chart));
              } else o.opacity = 0;
              return (
                (o.xAlign = u.xAlign),
                (o.yAlign = u.yAlign),
                (o.x = c.x),
                (o.y = c.y),
                (o.width = f.width),
                (o.height = f.height),
                (o.caretX = d.x),
                (o.caretY = d.y),
                (r._model = o),
                e && a.custom && a.custom.call(r, o),
                r
              );
            },
            drawCaret: function (e, t) {
              var n = this._chart.ctx,
                r = this._view,
                a = this.getCaretPosition(e, t, r);
              n.lineTo(a.x1, a.y1), n.lineTo(a.x2, a.y2), n.lineTo(a.x3, a.y3);
            },
            getCaretPosition: function (e, t, n) {
              var r,
                a,
                i,
                o,
                l,
                s,
                u = n.caretSize,
                c = n.cornerRadius,
                f = n.xAlign,
                d = n.yAlign,
                h = e.x,
                p = e.y,
                g = t.width,
                m = t.height;
              if ("center" === d)
                (l = p + m / 2),
                  "left" === f
                    ? ((a = (r = h) - u), (i = r), (o = l + u), (s = l - u))
                    : ((a = (r = h + g) + u),
                      (i = r),
                      (o = l - u),
                      (s = l + u));
              else if (
                ("left" === f
                  ? ((r = (a = h + c + u) - u), (i = a + u))
                  : "right" === f
                  ? ((r = (a = h + g - c - u) - u), (i = a + u))
                  : ((r = (a = n.caretX) - u), (i = a + u)),
                "top" === d)
              )
                (l = (o = p) - u), (s = o);
              else {
                (l = (o = p + m) + u), (s = o);
                var v = i;
                (i = r), (r = v);
              }
              return { x1: r, x2: a, x3: i, y1: o, y2: l, y3: s };
            },
            drawTitle: function (e, t, n) {
              var r,
                a,
                i,
                o = t.title,
                l = o.length;
              if (l) {
                var s = wn(t.rtl, t.x, t.width);
                for (
                  e.x = Tn(t, t._titleAlign),
                    n.textAlign = s.textAlign(t._titleAlign),
                    n.textBaseline = "middle",
                    r = t.titleFontSize,
                    a = t.titleSpacing,
                    n.fillStyle = t.titleFontColor,
                    n.font = ie.fontString(
                      r,
                      t._titleFontStyle,
                      t._titleFontFamily
                    ),
                    i = 0;
                  i < l;
                  ++i
                )
                  n.fillText(o[i], s.x(e.x), e.y + r / 2),
                    (e.y += r + a),
                    i + 1 === l && (e.y += t.titleMarginBottom - a);
              }
            },
            drawBody: function (e, t, n) {
              var r,
                a,
                i,
                o,
                l,
                s,
                u,
                c,
                f = t.bodyFontSize,
                d = t.bodySpacing,
                h = t._bodyAlign,
                p = t.body,
                g = t.displayColors,
                m = 0,
                v = g ? Tn(t, "left") : 0,
                y = wn(t.rtl, t.x, t.width),
                b = function (t) {
                  n.fillText(t, y.x(e.x + m), e.y + f / 2), (e.y += f + d);
                },
                x = y.textAlign(h);
              for (
                n.textAlign = h,
                  n.textBaseline = "middle",
                  n.font = ie.fontString(
                    f,
                    t._bodyFontStyle,
                    t._bodyFontFamily
                  ),
                  e.x = Tn(t, x),
                  n.fillStyle = t.bodyFontColor,
                  ie.each(t.beforeBody, b),
                  m =
                    g && "right" !== x
                      ? "center" === h
                        ? f / 2 + 1
                        : f + 2
                      : 0,
                  l = 0,
                  u = p.length;
                l < u;
                ++l
              ) {
                for (
                  r = p[l],
                    a = t.labelTextColors[l],
                    i = t.labelColors[l],
                    n.fillStyle = a,
                    ie.each(r.before, b),
                    s = 0,
                    c = (o = r.lines).length;
                  s < c;
                  ++s
                ) {
                  if (g) {
                    var _ = y.x(v);
                    (n.fillStyle = t.legendColorBackground),
                      n.fillRect(y.leftForLtr(_, f), e.y, f, f),
                      (n.lineWidth = 1),
                      (n.strokeStyle = i.borderColor),
                      n.strokeRect(y.leftForLtr(_, f), e.y, f, f),
                      (n.fillStyle = i.backgroundColor),
                      n.fillRect(
                        y.leftForLtr(y.xPlus(_, 1), f - 2),
                        e.y + 1,
                        f - 2,
                        f - 2
                      ),
                      (n.fillStyle = a);
                  }
                  b(o[s]);
                }
                ie.each(r.after, b);
              }
              (m = 0), ie.each(t.afterBody, b), (e.y -= d);
            },
            drawFooter: function (e, t, n) {
              var r,
                a,
                i = t.footer,
                o = i.length;
              if (o) {
                var l = wn(t.rtl, t.x, t.width);
                for (
                  e.x = Tn(t, t._footerAlign),
                    e.y += t.footerMarginTop,
                    n.textAlign = l.textAlign(t._footerAlign),
                    n.textBaseline = "middle",
                    r = t.footerFontSize,
                    n.fillStyle = t.footerFontColor,
                    n.font = ie.fontString(
                      r,
                      t._footerFontStyle,
                      t._footerFontFamily
                    ),
                    a = 0;
                  a < o;
                  ++a
                )
                  n.fillText(i[a], l.x(e.x), e.y + r / 2),
                    (e.y += r + t.footerSpacing);
              }
            },
            drawBackground: function (e, t, n, r) {
              (n.fillStyle = t.backgroundColor),
                (n.strokeStyle = t.borderColor),
                (n.lineWidth = t.borderWidth);
              var a = t.xAlign,
                i = t.yAlign,
                o = e.x,
                l = e.y,
                s = r.width,
                u = r.height,
                c = t.cornerRadius;
              n.beginPath(),
                n.moveTo(o + c, l),
                "top" === i && this.drawCaret(e, r),
                n.lineTo(o + s - c, l),
                n.quadraticCurveTo(o + s, l, o + s, l + c),
                "center" === i && "right" === a && this.drawCaret(e, r),
                n.lineTo(o + s, l + u - c),
                n.quadraticCurveTo(o + s, l + u, o + s - c, l + u),
                "bottom" === i && this.drawCaret(e, r),
                n.lineTo(o + c, l + u),
                n.quadraticCurveTo(o, l + u, o, l + u - c),
                "center" === i && "left" === a && this.drawCaret(e, r),
                n.lineTo(o, l + c),
                n.quadraticCurveTo(o, l, o + c, l),
                n.closePath(),
                n.fill(),
                t.borderWidth > 0 && n.stroke();
            },
            draw: function () {
              var e = this._chart.ctx,
                t = this._view;
              if (0 !== t.opacity) {
                var n = { width: t.width, height: t.height },
                  r = { x: t.x, y: t.y },
                  a = Math.abs(t.opacity < 0.001) ? 0 : t.opacity,
                  i =
                    t.title.length ||
                    t.beforeBody.length ||
                    t.body.length ||
                    t.afterBody.length ||
                    t.footer.length;
                this._options.enabled &&
                  i &&
                  (e.save(),
                  (e.globalAlpha = a),
                  this.drawBackground(r, t, e, n),
                  (r.y += t.yPadding),
                  ie.rtl.overrideTextDirection(e, t.textDirection),
                  this.drawTitle(r, t, e),
                  this.drawBody(r, t, e),
                  this.drawFooter(r, t, e),
                  ie.rtl.restoreTextDirection(e, t.textDirection),
                  e.restore());
              }
            },
            handleEvent: function (e) {
              var t = this,
                n = t._options,
                r = !1;
              return (
                (t._lastActive = t._lastActive || []),
                "mouseout" === e.type
                  ? (t._active = [])
                  : ((t._active = t._chart.getElementsAtEventForMode(
                      e,
                      n.mode,
                      n
                    )),
                    n.reverse && t._active.reverse()),
                (r = !ie.arrayEquals(t._active, t._lastActive)) &&
                  ((t._lastActive = t._active),
                  (n.enabled || n.custom) &&
                    ((t._eventPosition = { x: e.x, y: e.y }),
                    t.update(!0),
                    t.pivot())),
                r
              );
            },
          }),
          In = kn,
          Rn = Nn;
        Rn.positioners = In;
        var Ln = ie.valueOrDefault;
        function Fn() {
          return ie.merge(Object.create(null), [].slice.call(arguments), {
            merger: function (e, t, n, r) {
              if ("xAxes" === e || "yAxes" === e) {
                var a,
                  i,
                  o,
                  l = n[e].length;
                for (t[e] || (t[e] = []), a = 0; a < l; ++a)
                  (o = n[e][a]),
                    (i = Ln(o.type, "xAxes" === e ? "category" : "linear")),
                    a >= t[e].length && t[e].push({}),
                    !t[e][a].type || (o.type && o.type !== t[e][a].type)
                      ? ie.merge(t[e][a], [xn.getScaleDefaults(i), o])
                      : ie.merge(t[e][a], o);
              } else ie._merger(e, t, n, r);
            },
          });
        }
        function jn() {
          return ie.merge(Object.create(null), [].slice.call(arguments), {
            merger: function (e, t, n, r) {
              var a = t[e] || Object.create(null),
                i = n[e];
              "scales" === e
                ? (t[e] = Fn(a, i))
                : "scale" === e
                ? (t[e] = ie.merge(a, [xn.getScaleDefaults(i.type), i]))
                : ie._merger(e, t, n, r);
            },
          });
        }
        function zn(e) {
          var t = ((e = e || Object.create(null)).data = e.data || {});
          return (
            (t.datasets = t.datasets || []),
            (t.labels = t.labels || []),
            (e.options = jn(Z.global, Z[e.type], e.options || {})),
            e
          );
        }
        function Wn(e) {
          var t = e.options;
          ie.each(e.scales, function (t) {
            Bt.removeBox(e, t);
          }),
            (t = jn(Z.global, Z[e.config.type], t)),
            (e.options = e.config.options = t),
            e.ensureScalesHaveIDs(),
            e.buildOrUpdateScales(),
            (e.tooltip._options = t.tooltips),
            e.tooltip.initialize();
        }
        function Vn(e, t, n) {
          var r,
            a = function (e) {
              return e.id === r;
            };
          do {
            r = t + n++;
          } while (ie.findIndex(e, a) >= 0);
          return r;
        }
        function Yn(e) {
          return "top" === e || "bottom" === e;
        }
        function Bn(e, t) {
          return function (n, r) {
            return n[e] === r[e] ? n[t] - r[t] : n[e] - r[e];
          };
        }
        Z._set("global", {
          elements: {},
          events: ["mousemove", "mouseout", "click", "touchstart", "touchmove"],
          hover: {
            onHover: null,
            mode: "nearest",
            intersect: !0,
            animationDuration: 400,
          },
          onClick: null,
          maintainAspectRatio: !0,
          responsive: !0,
          responsiveAnimationDuration: 0,
        });
        var Hn = function (e, t) {
          return this.construct(e, t), this;
        };
        ie.extend(Hn.prototype, {
          construct: function (e, t) {
            var n = this;
            t = zn(t);
            var r = yn.acquireContext(e, t),
              a = r && r.canvas,
              i = a && a.height,
              o = a && a.width;
            (n.id = ie.uid()),
              (n.ctx = r),
              (n.canvas = a),
              (n.config = t),
              (n.width = o),
              (n.height = i),
              (n.aspectRatio = i ? o / i : null),
              (n.options = t.options),
              (n._bufferedRender = !1),
              (n._layers = []),
              (n.chart = n),
              (n.controller = n),
              (Hn.instances[n.id] = n),
              Object.defineProperty(n, "data", {
                get: function () {
                  return n.config.data;
                },
                set: function (e) {
                  n.config.data = e;
                },
              }),
              r && a
                ? (n.initialize(), n.update())
                : console.error(
                    "Failed to create chart: can't acquire context from the given item"
                  );
          },
          initialize: function () {
            var e = this;
            return (
              bn.notify(e, "beforeInit"),
              ie.retinaScale(e, e.options.devicePixelRatio),
              e.bindEvents(),
              e.options.responsive && e.resize(!0),
              e.initToolTip(),
              bn.notify(e, "afterInit"),
              e
            );
          },
          clear: function () {
            return ie.canvas.clear(this), this;
          },
          stop: function () {
            return me.cancelAnimation(this), this;
          },
          resize: function (e) {
            var t = this,
              n = t.options,
              r = t.canvas,
              a = (n.maintainAspectRatio && t.aspectRatio) || null,
              i = Math.max(0, Math.floor(ie.getMaximumWidth(r))),
              o = Math.max(0, Math.floor(a ? i / a : ie.getMaximumHeight(r)));
            if (
              (t.width !== i || t.height !== o) &&
              ((r.width = t.width = i),
              (r.height = t.height = o),
              (r.style.width = i + "px"),
              (r.style.height = o + "px"),
              ie.retinaScale(t, n.devicePixelRatio),
              !e)
            ) {
              var l = { width: i, height: o };
              bn.notify(t, "resize", [l]),
                n.onResize && n.onResize(t, l),
                t.stop(),
                t.update({ duration: n.responsiveAnimationDuration });
            }
          },
          ensureScalesHaveIDs: function () {
            var e = this.options,
              t = e.scales || {},
              n = e.scale;
            ie.each(t.xAxes, function (e, n) {
              e.id || (e.id = Vn(t.xAxes, "x-axis-", n));
            }),
              ie.each(t.yAxes, function (e, n) {
                e.id || (e.id = Vn(t.yAxes, "y-axis-", n));
              }),
              n && (n.id = n.id || "scale");
          },
          buildOrUpdateScales: function () {
            var e = this,
              t = e.options,
              n = e.scales || {},
              r = [],
              a = Object.keys(n).reduce(function (e, t) {
                return (e[t] = !1), e;
              }, {});
            t.scales &&
              (r = r.concat(
                (t.scales.xAxes || []).map(function (e) {
                  return { options: e, dtype: "category", dposition: "bottom" };
                }),
                (t.scales.yAxes || []).map(function (e) {
                  return { options: e, dtype: "linear", dposition: "left" };
                })
              )),
              t.scale &&
                r.push({
                  options: t.scale,
                  dtype: "radialLinear",
                  isDefault: !0,
                  dposition: "chartArea",
                }),
              ie.each(r, function (t) {
                var r = t.options,
                  i = r.id,
                  o = Ln(r.type, t.dtype);
                Yn(r.position) !== Yn(t.dposition) &&
                  (r.position = t.dposition),
                  (a[i] = !0);
                var l = null;
                if (i in n && n[i].type === o)
                  ((l = n[i]).options = r), (l.ctx = e.ctx), (l.chart = e);
                else {
                  var s = xn.getScaleConstructor(o);
                  if (!s) return;
                  (l = new s({
                    id: i,
                    type: o,
                    options: r,
                    ctx: e.ctx,
                    chart: e,
                  })),
                    (n[l.id] = l);
                }
                l.mergeTicksOptions(), t.isDefault && (e.scale = l);
              }),
              ie.each(a, function (e, t) {
                e || delete n[t];
              }),
              (e.scales = n),
              xn.addScalesToLayout(this);
          },
          buildOrUpdateControllers: function () {
            var e,
              t,
              n = this,
              r = [],
              a = n.data.datasets;
            for (e = 0, t = a.length; e < t; e++) {
              var i = a[e],
                o = n.getDatasetMeta(e),
                l = i.type || n.config.type;
              if (
                (o.type &&
                  o.type !== l &&
                  (n.destroyDatasetMeta(e), (o = n.getDatasetMeta(e))),
                (o.type = l),
                (o.order = i.order || 0),
                (o.index = e),
                o.controller)
              )
                o.controller.updateIndex(e), o.controller.linkScales();
              else {
                var s = kt[o.type];
                if (void 0 === s)
                  throw new Error('"' + o.type + '" is not a chart type.');
                (o.controller = new s(n, e)), r.push(o.controller);
              }
            }
            return r;
          },
          resetElements: function () {
            var e = this;
            ie.each(
              e.data.datasets,
              function (t, n) {
                e.getDatasetMeta(n).controller.reset();
              },
              e
            );
          },
          reset: function () {
            this.resetElements(), this.tooltip.initialize();
          },
          update: function (e) {
            var t,
              n,
              r = this;
            if (
              ((e && "object" === typeof e) ||
                (e = { duration: e, lazy: arguments[1] }),
              Wn(r),
              bn._invalidate(r),
              !1 !== bn.notify(r, "beforeUpdate"))
            ) {
              r.tooltip._data = r.data;
              var a = r.buildOrUpdateControllers();
              for (t = 0, n = r.data.datasets.length; t < n; t++)
                r.getDatasetMeta(t).controller.buildOrUpdateElements();
              r.updateLayout(),
                r.options.animation &&
                  r.options.animation.duration &&
                  ie.each(a, function (e) {
                    e.reset();
                  }),
                r.updateDatasets(),
                r.tooltip.initialize(),
                (r.lastActive = []),
                bn.notify(r, "afterUpdate"),
                r._layers.sort(Bn("z", "_idx")),
                r._bufferedRender
                  ? (r._bufferedRequest = {
                      duration: e.duration,
                      easing: e.easing,
                      lazy: e.lazy,
                    })
                  : r.render(e);
            }
          },
          updateLayout: function () {
            var e = this;
            !1 !== bn.notify(e, "beforeLayout") &&
              (Bt.update(this, this.width, this.height),
              (e._layers = []),
              ie.each(
                e.boxes,
                function (t) {
                  t._configure && t._configure(),
                    e._layers.push.apply(e._layers, t._layers());
                },
                e
              ),
              e._layers.forEach(function (e, t) {
                e._idx = t;
              }),
              bn.notify(e, "afterScaleUpdate"),
              bn.notify(e, "afterLayout"));
          },
          updateDatasets: function () {
            var e = this;
            if (!1 !== bn.notify(e, "beforeDatasetsUpdate")) {
              for (var t = 0, n = e.data.datasets.length; t < n; ++t)
                e.updateDataset(t);
              bn.notify(e, "afterDatasetsUpdate");
            }
          },
          updateDataset: function (e) {
            var t = this,
              n = t.getDatasetMeta(e),
              r = { meta: n, index: e };
            !1 !== bn.notify(t, "beforeDatasetUpdate", [r]) &&
              (n.controller._update(), bn.notify(t, "afterDatasetUpdate", [r]));
          },
          render: function (e) {
            var t = this;
            (e && "object" === typeof e) ||
              (e = { duration: e, lazy: arguments[1] });
            var n = t.options.animation,
              r = Ln(e.duration, n && n.duration),
              a = e.lazy;
            if (!1 !== bn.notify(t, "beforeRender")) {
              var i = function (e) {
                bn.notify(t, "afterRender"),
                  ie.callback(n && n.onComplete, [e], t);
              };
              if (n && r) {
                var o = new ge({
                  numSteps: r / 16.66,
                  easing: e.easing || n.easing,
                  render: function (e, t) {
                    var n = ie.easing.effects[t.easing],
                      r = t.currentStep,
                      a = r / t.numSteps;
                    e.draw(n(a), a, r);
                  },
                  onAnimationProgress: n.onProgress,
                  onAnimationComplete: i,
                });
                me.addAnimation(t, o, r, a);
              } else t.draw(), i(new ge({ numSteps: 0, chart: t }));
              return t;
            }
          },
          draw: function (e) {
            var t,
              n,
              r = this;
            if (
              (r.clear(),
              ie.isNullOrUndef(e) && (e = 1),
              r.transition(e),
              !(r.width <= 0 || r.height <= 0) &&
                !1 !== bn.notify(r, "beforeDraw", [e]))
            ) {
              for (n = r._layers, t = 0; t < n.length && n[t].z <= 0; ++t)
                n[t].draw(r.chartArea);
              for (r.drawDatasets(e); t < n.length; ++t) n[t].draw(r.chartArea);
              r._drawTooltip(e), bn.notify(r, "afterDraw", [e]);
            }
          },
          transition: function (e) {
            for (
              var t = this, n = 0, r = (t.data.datasets || []).length;
              n < r;
              ++n
            )
              t.isDatasetVisible(n) &&
                t.getDatasetMeta(n).controller.transition(e);
            t.tooltip.transition(e);
          },
          _getSortedDatasetMetas: function (e) {
            var t,
              n,
              r = this,
              a = [];
            for (t = 0, n = (r.data.datasets || []).length; t < n; ++t)
              (e && !r.isDatasetVisible(t)) || a.push(r.getDatasetMeta(t));
            return a.sort(Bn("order", "index")), a;
          },
          _getSortedVisibleDatasetMetas: function () {
            return this._getSortedDatasetMetas(!0);
          },
          drawDatasets: function (e) {
            var t,
              n,
              r = this;
            if (!1 !== bn.notify(r, "beforeDatasetsDraw", [e])) {
              for (
                n = (t = r._getSortedVisibleDatasetMetas()).length - 1;
                n >= 0;
                --n
              )
                r.drawDataset(t[n], e);
              bn.notify(r, "afterDatasetsDraw", [e]);
            }
          },
          drawDataset: function (e, t) {
            var n = this,
              r = { meta: e, index: e.index, easingValue: t };
            !1 !== bn.notify(n, "beforeDatasetDraw", [r]) &&
              (e.controller.draw(t), bn.notify(n, "afterDatasetDraw", [r]));
          },
          _drawTooltip: function (e) {
            var t = this,
              n = t.tooltip,
              r = { tooltip: n, easingValue: e };
            !1 !== bn.notify(t, "beforeTooltipDraw", [r]) &&
              (n.draw(), bn.notify(t, "afterTooltipDraw", [r]));
          },
          getElementAtEvent: function (e) {
            return Dt.modes.single(this, e);
          },
          getElementsAtEvent: function (e) {
            return Dt.modes.label(this, e, { intersect: !0 });
          },
          getElementsAtXAxis: function (e) {
            return Dt.modes["x-axis"](this, e, { intersect: !0 });
          },
          getElementsAtEventForMode: function (e, t, n) {
            var r = Dt.modes[t];
            return "function" === typeof r ? r(this, e, n) : [];
          },
          getDatasetAtEvent: function (e) {
            return Dt.modes.dataset(this, e, { intersect: !0 });
          },
          getDatasetMeta: function (e) {
            var t = this,
              n = t.data.datasets[e];
            n._meta || (n._meta = {});
            var r = n._meta[t.id];
            return (
              r ||
                (r = n._meta[t.id] = {
                  type: null,
                  data: [],
                  dataset: null,
                  controller: null,
                  hidden: null,
                  xAxisID: null,
                  yAxisID: null,
                  order: n.order || 0,
                  index: e,
                }),
              r
            );
          },
          getVisibleDatasetCount: function () {
            for (var e = 0, t = 0, n = this.data.datasets.length; t < n; ++t)
              this.isDatasetVisible(t) && e++;
            return e;
          },
          isDatasetVisible: function (e) {
            var t = this.getDatasetMeta(e);
            return "boolean" === typeof t.hidden
              ? !t.hidden
              : !this.data.datasets[e].hidden;
          },
          generateLegend: function () {
            return this.options.legendCallback(this);
          },
          destroyDatasetMeta: function (e) {
            var t = this.id,
              n = this.data.datasets[e],
              r = n._meta && n._meta[t];
            r && (r.controller.destroy(), delete n._meta[t]);
          },
          destroy: function () {
            var e,
              t,
              n = this,
              r = n.canvas;
            for (n.stop(), e = 0, t = n.data.datasets.length; e < t; ++e)
              n.destroyDatasetMeta(e);
            r &&
              (n.unbindEvents(),
              ie.canvas.clear(n),
              yn.releaseContext(n.ctx),
              (n.canvas = null),
              (n.ctx = null)),
              bn.notify(n, "destroy"),
              delete Hn.instances[n.id];
          },
          toBase64Image: function () {
            return this.canvas.toDataURL.apply(this.canvas, arguments);
          },
          initToolTip: function () {
            var e = this;
            e.tooltip = new Rn(
              {
                _chart: e,
                _chartInstance: e,
                _data: e.data,
                _options: e.options.tooltips,
              },
              e
            );
          },
          bindEvents: function () {
            var e = this,
              t = (e._listeners = {}),
              n = function () {
                e.eventHandler.apply(e, arguments);
              };
            ie.each(e.options.events, function (r) {
              yn.addEventListener(e, r, n), (t[r] = n);
            }),
              e.options.responsive &&
                ((n = function () {
                  e.resize();
                }),
                yn.addEventListener(e, "resize", n),
                (t.resize = n));
          },
          unbindEvents: function () {
            var e = this,
              t = e._listeners;
            t &&
              (delete e._listeners,
              ie.each(t, function (t, n) {
                yn.removeEventListener(e, n, t);
              }));
          },
          updateHoverStyle: function (e, t, n) {
            var r,
              a,
              i,
              o = n ? "set" : "remove";
            for (a = 0, i = e.length; a < i; ++a)
              (r = e[a]) &&
                this.getDatasetMeta(r._datasetIndex).controller[
                  o + "HoverStyle"
                ](r);
            "dataset" === t &&
              this.getDatasetMeta(e[0]._datasetIndex).controller[
                "_" + o + "DatasetHoverStyle"
              ]();
          },
          eventHandler: function (e) {
            var t = this,
              n = t.tooltip;
            if (!1 !== bn.notify(t, "beforeEvent", [e])) {
              (t._bufferedRender = !0), (t._bufferedRequest = null);
              var r = t.handleEvent(e);
              n && (r = n._start ? n.handleEvent(e) : r | n.handleEvent(e)),
                bn.notify(t, "afterEvent", [e]);
              var a = t._bufferedRequest;
              return (
                a
                  ? t.render(a)
                  : r &&
                    !t.animating &&
                    (t.stop(),
                    t.render({
                      duration: t.options.hover.animationDuration,
                      lazy: !0,
                    })),
                (t._bufferedRender = !1),
                (t._bufferedRequest = null),
                t
              );
            }
          },
          handleEvent: function (e) {
            var t = this,
              n = t.options || {},
              r = n.hover,
              a = !1;
            return (
              (t.lastActive = t.lastActive || []),
              "mouseout" === e.type
                ? (t.active = [])
                : (t.active = t.getElementsAtEventForMode(e, r.mode, r)),
              ie.callback(
                n.onHover || n.hover.onHover,
                [e.native, t.active],
                t
              ),
              ("mouseup" !== e.type && "click" !== e.type) ||
                (n.onClick && n.onClick.call(t, e.native, t.active)),
              t.lastActive.length &&
                t.updateHoverStyle(t.lastActive, r.mode, !1),
              t.active.length &&
                r.mode &&
                t.updateHoverStyle(t.active, r.mode, !0),
              (a = !ie.arrayEquals(t.active, t.lastActive)),
              (t.lastActive = t.active),
              a
            );
          },
        }),
          (Hn.instances = {});
        var Un = Hn;
        (Hn.Controller = Hn),
          (Hn.types = {}),
          (ie.configMerge = jn),
          (ie.scaleMerge = Fn);
        var $n = function () {
          function e(e, t, n) {
            var r;
            return (
              "string" === typeof e
                ? ((r = parseInt(e, 10)),
                  -1 !== e.indexOf("%") && (r = (r / 100) * t.parentNode[n]))
                : (r = e),
              r
            );
          }
          function t(e) {
            return void 0 !== e && null !== e && "none" !== e;
          }
          function n(n, r, a) {
            var i = document.defaultView,
              o = ie._getParentNode(n),
              l = i.getComputedStyle(n)[r],
              s = i.getComputedStyle(o)[r],
              u = t(l),
              c = t(s),
              f = Number.POSITIVE_INFINITY;
            return u || c
              ? Math.min(u ? e(l, n, a) : f, c ? e(s, o, a) : f)
              : "none";
          }
          (ie.where = function (e, t) {
            if (ie.isArray(e) && Array.prototype.filter) return e.filter(t);
            var n = [];
            return (
              ie.each(e, function (e) {
                t(e) && n.push(e);
              }),
              n
            );
          }),
            (ie.findIndex = Array.prototype.findIndex
              ? function (e, t, n) {
                  return e.findIndex(t, n);
                }
              : function (e, t, n) {
                  n = void 0 === n ? e : n;
                  for (var r = 0, a = e.length; r < a; ++r)
                    if (t.call(n, e[r], r, e)) return r;
                  return -1;
                }),
            (ie.findNextWhere = function (e, t, n) {
              ie.isNullOrUndef(n) && (n = -1);
              for (var r = n + 1; r < e.length; r++) {
                var a = e[r];
                if (t(a)) return a;
              }
            }),
            (ie.findPreviousWhere = function (e, t, n) {
              ie.isNullOrUndef(n) && (n = e.length);
              for (var r = n - 1; r >= 0; r--) {
                var a = e[r];
                if (t(a)) return a;
              }
            }),
            (ie.isNumber = function (e) {
              return !isNaN(parseFloat(e)) && isFinite(e);
            }),
            (ie.almostEquals = function (e, t, n) {
              return Math.abs(e - t) < n;
            }),
            (ie.almostWhole = function (e, t) {
              var n = Math.round(e);
              return n - t <= e && n + t >= e;
            }),
            (ie.max = function (e) {
              return e.reduce(function (e, t) {
                return isNaN(t) ? e : Math.max(e, t);
              }, Number.NEGATIVE_INFINITY);
            }),
            (ie.min = function (e) {
              return e.reduce(function (e, t) {
                return isNaN(t) ? e : Math.min(e, t);
              }, Number.POSITIVE_INFINITY);
            }),
            (ie.sign = Math.sign
              ? function (e) {
                  return Math.sign(e);
                }
              : function (e) {
                  return 0 === (e = +e) || isNaN(e) ? e : e > 0 ? 1 : -1;
                }),
            (ie.toRadians = function (e) {
              return e * (Math.PI / 180);
            }),
            (ie.toDegrees = function (e) {
              return e * (180 / Math.PI);
            }),
            (ie._decimalPlaces = function (e) {
              if (ie.isFinite(e)) {
                for (var t = 1, n = 0; Math.round(e * t) / t !== e; )
                  (t *= 10), n++;
                return n;
              }
            }),
            (ie.getAngleFromPoint = function (e, t) {
              var n = t.x - e.x,
                r = t.y - e.y,
                a = Math.sqrt(n * n + r * r),
                i = Math.atan2(r, n);
              return (
                i < -0.5 * Math.PI && (i += 2 * Math.PI),
                { angle: i, distance: a }
              );
            }),
            (ie.distanceBetweenPoints = function (e, t) {
              return Math.sqrt(Math.pow(t.x - e.x, 2) + Math.pow(t.y - e.y, 2));
            }),
            (ie.aliasPixel = function (e) {
              return e % 2 === 0 ? 0 : 0.5;
            }),
            (ie._alignPixel = function (e, t, n) {
              var r = e.currentDevicePixelRatio,
                a = n / 2;
              return Math.round((t - a) * r) / r + a;
            }),
            (ie.splineCurve = function (e, t, n, r) {
              var a = e.skip ? t : e,
                i = t,
                o = n.skip ? t : n,
                l = Math.sqrt(Math.pow(i.x - a.x, 2) + Math.pow(i.y - a.y, 2)),
                s = Math.sqrt(Math.pow(o.x - i.x, 2) + Math.pow(o.y - i.y, 2)),
                u = l / (l + s),
                c = s / (l + s),
                f = r * (u = isNaN(u) ? 0 : u),
                d = r * (c = isNaN(c) ? 0 : c);
              return {
                previous: {
                  x: i.x - f * (o.x - a.x),
                  y: i.y - f * (o.y - a.y),
                },
                next: { x: i.x + d * (o.x - a.x), y: i.y + d * (o.y - a.y) },
              };
            }),
            (ie.EPSILON = Number.EPSILON || 1e-14),
            (ie.splineCurveMonotone = function (e) {
              var t,
                n,
                r,
                a,
                i,
                o,
                l,
                s,
                u,
                c = (e || []).map(function (e) {
                  return { model: e._model, deltaK: 0, mK: 0 };
                }),
                f = c.length;
              for (t = 0; t < f; ++t)
                if (!(r = c[t]).model.skip) {
                  if (
                    ((n = t > 0 ? c[t - 1] : null),
                    (a = t < f - 1 ? c[t + 1] : null) && !a.model.skip)
                  ) {
                    var d = a.model.x - r.model.x;
                    r.deltaK = 0 !== d ? (a.model.y - r.model.y) / d : 0;
                  }
                  !n || n.model.skip
                    ? (r.mK = r.deltaK)
                    : !a || a.model.skip
                    ? (r.mK = n.deltaK)
                    : this.sign(n.deltaK) !== this.sign(r.deltaK)
                    ? (r.mK = 0)
                    : (r.mK = (n.deltaK + r.deltaK) / 2);
                }
              for (t = 0; t < f - 1; ++t)
                (r = c[t]),
                  (a = c[t + 1]),
                  r.model.skip ||
                    a.model.skip ||
                    (ie.almostEquals(r.deltaK, 0, this.EPSILON)
                      ? (r.mK = a.mK = 0)
                      : ((i = r.mK / r.deltaK),
                        (o = a.mK / r.deltaK),
                        (s = Math.pow(i, 2) + Math.pow(o, 2)) <= 9 ||
                          ((l = 3 / Math.sqrt(s)),
                          (r.mK = i * l * r.deltaK),
                          (a.mK = o * l * r.deltaK))));
              for (t = 0; t < f; ++t)
                (r = c[t]).model.skip ||
                  ((n = t > 0 ? c[t - 1] : null),
                  (a = t < f - 1 ? c[t + 1] : null),
                  n &&
                    !n.model.skip &&
                    ((u = (r.model.x - n.model.x) / 3),
                    (r.model.controlPointPreviousX = r.model.x - u),
                    (r.model.controlPointPreviousY = r.model.y - u * r.mK)),
                  a &&
                    !a.model.skip &&
                    ((u = (a.model.x - r.model.x) / 3),
                    (r.model.controlPointNextX = r.model.x + u),
                    (r.model.controlPointNextY = r.model.y + u * r.mK)));
            }),
            (ie.nextItem = function (e, t, n) {
              return n
                ? t >= e.length - 1
                  ? e[0]
                  : e[t + 1]
                : t >= e.length - 1
                ? e[e.length - 1]
                : e[t + 1];
            }),
            (ie.previousItem = function (e, t, n) {
              return n
                ? t <= 0
                  ? e[e.length - 1]
                  : e[t - 1]
                : t <= 0
                ? e[0]
                : e[t - 1];
            }),
            (ie.niceNum = function (e, t) {
              var n = Math.floor(ie.log10(e)),
                r = e / Math.pow(10, n);
              return (
                (t
                  ? r < 1.5
                    ? 1
                    : r < 3
                    ? 2
                    : r < 7
                    ? 5
                    : 10
                  : r <= 1
                  ? 1
                  : r <= 2
                  ? 2
                  : r <= 5
                  ? 5
                  : 10) * Math.pow(10, n)
              );
            }),
            (ie.requestAnimFrame =
              "undefined" === typeof window
                ? function (e) {
                    e();
                  }
                : window.requestAnimationFrame ||
                  window.webkitRequestAnimationFrame ||
                  window.mozRequestAnimationFrame ||
                  window.oRequestAnimationFrame ||
                  window.msRequestAnimationFrame ||
                  function (e) {
                    return window.setTimeout(e, 1e3 / 60);
                  }),
            (ie.getRelativePosition = function (e, t) {
              var n,
                r,
                a = e.originalEvent || e,
                i = e.target || e.srcElement,
                o = i.getBoundingClientRect(),
                l = a.touches;
              l && l.length > 0
                ? ((n = l[0].clientX), (r = l[0].clientY))
                : ((n = a.clientX), (r = a.clientY));
              var s = parseFloat(ie.getStyle(i, "padding-left")),
                u = parseFloat(ie.getStyle(i, "padding-top")),
                c = parseFloat(ie.getStyle(i, "padding-right")),
                f = parseFloat(ie.getStyle(i, "padding-bottom")),
                d = o.right - o.left - s - c,
                h = o.bottom - o.top - u - f;
              return {
                x: (n = Math.round(
                  (((n - o.left - s) / d) * i.width) / t.currentDevicePixelRatio
                )),
                y: (r = Math.round(
                  (((r - o.top - u) / h) * i.height) / t.currentDevicePixelRatio
                )),
              };
            }),
            (ie.getConstraintWidth = function (e) {
              return n(e, "max-width", "clientWidth");
            }),
            (ie.getConstraintHeight = function (e) {
              return n(e, "max-height", "clientHeight");
            }),
            (ie._calculatePadding = function (e, t, n) {
              return (t = ie.getStyle(e, t)).indexOf("%") > -1
                ? (n * parseInt(t, 10)) / 100
                : parseInt(t, 10);
            }),
            (ie._getParentNode = function (e) {
              var t = e.parentNode;
              return (
                t && "[object ShadowRoot]" === t.toString() && (t = t.host), t
              );
            }),
            (ie.getMaximumWidth = function (e) {
              var t = ie._getParentNode(e);
              if (!t) return e.clientWidth;
              var n = t.clientWidth,
                r =
                  n -
                  ie._calculatePadding(t, "padding-left", n) -
                  ie._calculatePadding(t, "padding-right", n),
                a = ie.getConstraintWidth(e);
              return isNaN(a) ? r : Math.min(r, a);
            }),
            (ie.getMaximumHeight = function (e) {
              var t = ie._getParentNode(e);
              if (!t) return e.clientHeight;
              var n = t.clientHeight,
                r =
                  n -
                  ie._calculatePadding(t, "padding-top", n) -
                  ie._calculatePadding(t, "padding-bottom", n),
                a = ie.getConstraintHeight(e);
              return isNaN(a) ? r : Math.min(r, a);
            }),
            (ie.getStyle = function (e, t) {
              return e.currentStyle
                ? e.currentStyle[t]
                : document.defaultView
                    .getComputedStyle(e, null)
                    .getPropertyValue(t);
            }),
            (ie.retinaScale = function (e, t) {
              var n = (e.currentDevicePixelRatio =
                t ||
                ("undefined" !== typeof window && window.devicePixelRatio) ||
                1);
              if (1 !== n) {
                var r = e.canvas,
                  a = e.height,
                  i = e.width;
                (r.height = a * n),
                  (r.width = i * n),
                  e.ctx.scale(n, n),
                  r.style.height ||
                    r.style.width ||
                    ((r.style.height = a + "px"), (r.style.width = i + "px"));
              }
            }),
            (ie.fontString = function (e, t, n) {
              return t + " " + e + "px " + n;
            }),
            (ie.longestText = function (e, t, n, r) {
              var a = ((r = r || {}).data = r.data || {}),
                i = (r.garbageCollect = r.garbageCollect || []);
              r.font !== t &&
                ((a = r.data = {}), (i = r.garbageCollect = []), (r.font = t)),
                (e.font = t);
              var o,
                l,
                s,
                u,
                c,
                f = 0,
                d = n.length;
              for (o = 0; o < d; o++)
                if (void 0 !== (u = n[o]) && null !== u && !0 !== ie.isArray(u))
                  f = ie.measureText(e, a, i, f, u);
                else if (ie.isArray(u))
                  for (l = 0, s = u.length; l < s; l++)
                    void 0 === (c = u[l]) ||
                      null === c ||
                      ie.isArray(c) ||
                      (f = ie.measureText(e, a, i, f, c));
              var h = i.length / 2;
              if (h > n.length) {
                for (o = 0; o < h; o++) delete a[i[o]];
                i.splice(0, h);
              }
              return f;
            }),
            (ie.measureText = function (e, t, n, r, a) {
              var i = t[a];
              return (
                i || ((i = t[a] = e.measureText(a).width), n.push(a)),
                i > r && (r = i),
                r
              );
            }),
            (ie.numberOfLabelLines = function (e) {
              var t = 1;
              return (
                ie.each(e, function (e) {
                  ie.isArray(e) && e.length > t && (t = e.length);
                }),
                t
              );
            }),
            (ie.color = L
              ? function (e) {
                  return (
                    e instanceof CanvasGradient && (e = Z.global.defaultColor),
                    L(e)
                  );
                }
              : function (e) {
                  return console.error("Color.js not found!"), e;
                }),
            (ie.getHoverColor = function (e) {
              return e instanceof CanvasPattern || e instanceof CanvasGradient
                ? e
                : ie.color(e).saturate(0.5).darken(0.1).rgbString();
            });
        };
        function Gn() {
          throw new Error(
            "This method is not implemented: either no adapter can be found or an incomplete integration was provided."
          );
        }
        function qn(e) {
          this.options = e || {};
        }
        ie.extend(qn.prototype, {
          formats: Gn,
          parse: Gn,
          format: Gn,
          add: Gn,
          diff: Gn,
          startOf: Gn,
          endOf: Gn,
          _create: function (e) {
            return e;
          },
        }),
          (qn.override = function (e) {
            ie.extend(qn.prototype, e);
          });
        var Kn = { _date: qn },
          Qn = {
            formatters: {
              values: function (e) {
                return ie.isArray(e) ? e : "" + e;
              },
              linear: function (e, t, n) {
                var r = n.length > 3 ? n[2] - n[1] : n[1] - n[0];
                Math.abs(r) > 1 &&
                  e !== Math.floor(e) &&
                  (r = e - Math.floor(e));
                var a = ie.log10(Math.abs(r)),
                  i = "";
                if (0 !== e)
                  if (
                    Math.max(Math.abs(n[0]), Math.abs(n[n.length - 1])) < 1e-4
                  ) {
                    var o = ie.log10(Math.abs(e)),
                      l = Math.floor(o) - Math.floor(a);
                    (l = Math.max(Math.min(l, 20), 0)),
                      (i = e.toExponential(l));
                  } else {
                    var s = -1 * Math.floor(a);
                    (s = Math.max(Math.min(s, 20), 0)), (i = e.toFixed(s));
                  }
                else i = "0";
                return i;
              },
              logarithmic: function (e, t, n) {
                var r = e / Math.pow(10, Math.floor(ie.log10(e)));
                return 0 === e
                  ? "0"
                  : 1 === r ||
                    2 === r ||
                    5 === r ||
                    0 === t ||
                    t === n.length - 1
                  ? e.toExponential()
                  : "";
              },
            },
          },
          Zn = ie.isArray,
          Xn = ie.isNullOrUndef,
          Jn = ie.valueOrDefault,
          er = ie.valueAtIndexOrDefault;
        function tr(e, t) {
          for (var n = [], r = e.length / t, a = 0, i = e.length; a < i; a += r)
            n.push(e[Math.floor(a)]);
          return n;
        }
        function nr(e, t, n) {
          var r,
            a = e.getTicks().length,
            i = Math.min(t, a - 1),
            o = e.getPixelForTick(i),
            l = e._startPixel,
            s = e._endPixel,
            u = 1e-6;
          if (
            !(
              n &&
              ((r =
                1 === a
                  ? Math.max(o - l, s - o)
                  : 0 === t
                  ? (e.getPixelForTick(1) - o) / 2
                  : (o - e.getPixelForTick(i - 1)) / 2),
              (o += i < t ? r : -r) < l - u || o > s + u)
            )
          )
            return o;
        }
        function rr(e, t) {
          ie.each(e, function (e) {
            var n,
              r = e.gc,
              a = r.length / 2;
            if (a > t) {
              for (n = 0; n < a; ++n) delete e.data[r[n]];
              r.splice(0, a);
            }
          });
        }
        function ar(e, t, n, r) {
          var a,
            i,
            o,
            l,
            s,
            u,
            c,
            f,
            d,
            h,
            p,
            g,
            m,
            v = n.length,
            y = [],
            b = [],
            x = [],
            _ = 0,
            w = 0;
          for (a = 0; a < v; ++a) {
            if (
              ((l = n[a].label),
              (s = n[a].major ? t.major : t.minor),
              (e.font = u = s.string),
              (c = r[u] = r[u] || { data: {}, gc: [] }),
              (f = s.lineHeight),
              (d = h = 0),
              Xn(l) || Zn(l))
            ) {
              if (Zn(l))
                for (i = 0, o = l.length; i < o; ++i)
                  (p = l[i]),
                    Xn(p) ||
                      Zn(p) ||
                      ((d = ie.measureText(e, c.data, c.gc, d, p)), (h += f));
            } else (d = ie.measureText(e, c.data, c.gc, d, l)), (h = f);
            y.push(d),
              b.push(h),
              x.push(f / 2),
              (_ = Math.max(d, _)),
              (w = Math.max(h, w));
          }
          function k(e) {
            return { width: y[e] || 0, height: b[e] || 0, offset: x[e] || 0 };
          }
          return (
            rr(r, v),
            (g = y.indexOf(_)),
            (m = b.indexOf(w)),
            { first: k(0), last: k(v - 1), widest: k(g), highest: k(m) }
          );
        }
        function ir(e) {
          return e.drawTicks ? e.tickMarkLength : 0;
        }
        function or(e) {
          var t, n;
          return e.display
            ? ((t = ie.options._parseFont(e)),
              (n = ie.options.toPadding(e.padding)),
              t.lineHeight + n.height)
            : 0;
        }
        function lr(e, t) {
          return ie.extend(
            ie.options._parseFont({
              fontFamily: Jn(t.fontFamily, e.fontFamily),
              fontSize: Jn(t.fontSize, e.fontSize),
              fontStyle: Jn(t.fontStyle, e.fontStyle),
              lineHeight: Jn(t.lineHeight, e.lineHeight),
            }),
            {
              color: ie.options.resolve([
                t.fontColor,
                e.fontColor,
                Z.global.defaultFontColor,
              ]),
            }
          );
        }
        function sr(e) {
          var t = lr(e, e.minor);
          return { minor: t, major: e.major.enabled ? lr(e, e.major) : t };
        }
        function ur(e) {
          var t,
            n,
            r,
            a = [];
          for (n = 0, r = e.length; n < r; ++n)
            "undefined" !== typeof (t = e[n])._index && a.push(t);
          return a;
        }
        function cr(e) {
          var t,
            n,
            r = e.length;
          if (r < 2) return !1;
          for (n = e[0], t = 1; t < r; ++t)
            if (e[t] - e[t - 1] !== n) return !1;
          return n;
        }
        function fr(e, t, n, r) {
          var a,
            i,
            o,
            l,
            s = cr(e),
            u = (t.length - 1) / r;
          if (!s) return Math.max(u, 1);
          for (o = 0, l = (a = ie.math._factorize(s)).length - 1; o < l; o++)
            if ((i = a[o]) > u) return i;
          return Math.max(u, 1);
        }
        function dr(e) {
          var t,
            n,
            r = [];
          for (t = 0, n = e.length; t < n; t++) e[t].major && r.push(t);
          return r;
        }
        function hr(e, t, n) {
          var r,
            a,
            i = 0,
            o = t[0];
          for (n = Math.ceil(n), r = 0; r < e.length; r++)
            (a = e[r]),
              r === o ? ((a._index = r), (o = t[++i * n])) : delete a.label;
        }
        function pr(e, t, n, r) {
          var a,
            i,
            o,
            l,
            s = Jn(n, 0),
            u = Math.min(Jn(r, e.length), e.length),
            c = 0;
          for (
            t = Math.ceil(t), r && (t = (a = r - n) / Math.floor(a / t)), l = s;
            l < 0;

          )
            c++, (l = Math.round(s + c * t));
          for (i = Math.max(s, 0); i < u; i++)
            (o = e[i]),
              i === l
                ? ((o._index = i), c++, (l = Math.round(s + c * t)))
                : delete o.label;
        }
        Z._set("scale", {
          display: !0,
          position: "left",
          offset: !1,
          gridLines: {
            display: !0,
            color: "rgba(0,0,0,0.1)",
            lineWidth: 1,
            drawBorder: !0,
            drawOnChartArea: !0,
            drawTicks: !0,
            tickMarkLength: 10,
            zeroLineWidth: 1,
            zeroLineColor: "rgba(0,0,0,0.25)",
            zeroLineBorderDash: [],
            zeroLineBorderDashOffset: 0,
            offsetGridLines: !1,
            borderDash: [],
            borderDashOffset: 0,
          },
          scaleLabel: {
            display: !1,
            labelString: "",
            padding: { top: 4, bottom: 4 },
          },
          ticks: {
            beginAtZero: !1,
            minRotation: 0,
            maxRotation: 50,
            mirror: !1,
            padding: 0,
            reverse: !1,
            display: !0,
            autoSkip: !0,
            autoSkipPadding: 0,
            labelOffset: 0,
            callback: Qn.formatters.values,
            minor: {},
            major: {},
          },
        });
        var gr = he.extend({
          zeroLineIndex: 0,
          getPadding: function () {
            var e = this;
            return {
              left: e.paddingLeft || 0,
              top: e.paddingTop || 0,
              right: e.paddingRight || 0,
              bottom: e.paddingBottom || 0,
            };
          },
          getTicks: function () {
            return this._ticks;
          },
          _getLabels: function () {
            var e = this.chart.data;
            return (
              this.options.labels ||
              (this.isHorizontal() ? e.xLabels : e.yLabels) ||
              e.labels ||
              []
            );
          },
          mergeTicksOptions: function () {},
          beforeUpdate: function () {
            ie.callback(this.options.beforeUpdate, [this]);
          },
          update: function (e, t, n) {
            var r,
              a,
              i,
              o,
              l,
              s = this,
              u = s.options.ticks,
              c = u.sampleSize;
            if (
              (s.beforeUpdate(),
              (s.maxWidth = e),
              (s.maxHeight = t),
              (s.margins = ie.extend(
                { left: 0, right: 0, top: 0, bottom: 0 },
                n
              )),
              (s._ticks = null),
              (s.ticks = null),
              (s._labelSizes = null),
              (s._maxLabelLines = 0),
              (s.longestLabelWidth = 0),
              (s.longestTextCache = s.longestTextCache || {}),
              (s._gridLineItems = null),
              (s._labelItems = null),
              s.beforeSetDimensions(),
              s.setDimensions(),
              s.afterSetDimensions(),
              s.beforeDataLimits(),
              s.determineDataLimits(),
              s.afterDataLimits(),
              s.beforeBuildTicks(),
              (o = s.buildTicks() || []),
              (!(o = s.afterBuildTicks(o) || o) || !o.length) && s.ticks)
            )
              for (o = [], r = 0, a = s.ticks.length; r < a; ++r)
                o.push({ value: s.ticks[r], major: !1 });
            return (
              (s._ticks = o),
              (l = c < o.length),
              (i = s._convertTicksToLabels(l ? tr(o, c) : o)),
              s._configure(),
              s.beforeCalculateTickRotation(),
              s.calculateTickRotation(),
              s.afterCalculateTickRotation(),
              s.beforeFit(),
              s.fit(),
              s.afterFit(),
              (s._ticksToDraw =
                u.display && (u.autoSkip || "auto" === u.source)
                  ? s._autoSkip(o)
                  : o),
              l && (i = s._convertTicksToLabels(s._ticksToDraw)),
              (s.ticks = i),
              s.afterUpdate(),
              s.minSize
            );
          },
          _configure: function () {
            var e,
              t,
              n = this,
              r = n.options.ticks.reverse;
            n.isHorizontal()
              ? ((e = n.left), (t = n.right))
              : ((e = n.top), (t = n.bottom), (r = !r)),
              (n._startPixel = e),
              (n._endPixel = t),
              (n._reversePixels = r),
              (n._length = t - e);
          },
          afterUpdate: function () {
            ie.callback(this.options.afterUpdate, [this]);
          },
          beforeSetDimensions: function () {
            ie.callback(this.options.beforeSetDimensions, [this]);
          },
          setDimensions: function () {
            var e = this;
            e.isHorizontal()
              ? ((e.width = e.maxWidth), (e.left = 0), (e.right = e.width))
              : ((e.height = e.maxHeight), (e.top = 0), (e.bottom = e.height)),
              (e.paddingLeft = 0),
              (e.paddingTop = 0),
              (e.paddingRight = 0),
              (e.paddingBottom = 0);
          },
          afterSetDimensions: function () {
            ie.callback(this.options.afterSetDimensions, [this]);
          },
          beforeDataLimits: function () {
            ie.callback(this.options.beforeDataLimits, [this]);
          },
          determineDataLimits: ie.noop,
          afterDataLimits: function () {
            ie.callback(this.options.afterDataLimits, [this]);
          },
          beforeBuildTicks: function () {
            ie.callback(this.options.beforeBuildTicks, [this]);
          },
          buildTicks: ie.noop,
          afterBuildTicks: function (e) {
            var t = this;
            return Zn(e) && e.length
              ? ie.callback(t.options.afterBuildTicks, [t, e])
              : ((t.ticks =
                  ie.callback(t.options.afterBuildTicks, [t, t.ticks]) ||
                  t.ticks),
                e);
          },
          beforeTickToLabelConversion: function () {
            ie.callback(this.options.beforeTickToLabelConversion, [this]);
          },
          convertTicksToLabels: function () {
            var e = this,
              t = e.options.ticks;
            e.ticks = e.ticks.map(t.userCallback || t.callback, this);
          },
          afterTickToLabelConversion: function () {
            ie.callback(this.options.afterTickToLabelConversion, [this]);
          },
          beforeCalculateTickRotation: function () {
            ie.callback(this.options.beforeCalculateTickRotation, [this]);
          },
          calculateTickRotation: function () {
            var e,
              t,
              n,
              r,
              a,
              i,
              o,
              l = this,
              s = l.options,
              u = s.ticks,
              c = l.getTicks().length,
              f = u.minRotation || 0,
              d = u.maxRotation,
              h = f;
            !l._isVisible() ||
            !u.display ||
            f >= d ||
            c <= 1 ||
            !l.isHorizontal()
              ? (l.labelRotation = f)
              : ((t = (e = l._getLabelSizes()).widest.width),
                (n = e.highest.height - e.highest.offset),
                (r = Math.min(l.maxWidth, l.chart.width - t)),
                t + 6 > (a = s.offset ? l.maxWidth / c : r / (c - 1)) &&
                  ((a = r / (c - (s.offset ? 0.5 : 1))),
                  (i =
                    l.maxHeight -
                    ir(s.gridLines) -
                    u.padding -
                    or(s.scaleLabel)),
                  (o = Math.sqrt(t * t + n * n)),
                  (h = ie.toDegrees(
                    Math.min(
                      Math.asin(Math.min((e.highest.height + 6) / a, 1)),
                      Math.asin(Math.min(i / o, 1)) - Math.asin(n / o)
                    )
                  )),
                  (h = Math.max(f, Math.min(d, h)))),
                (l.labelRotation = h));
          },
          afterCalculateTickRotation: function () {
            ie.callback(this.options.afterCalculateTickRotation, [this]);
          },
          beforeFit: function () {
            ie.callback(this.options.beforeFit, [this]);
          },
          fit: function () {
            var e = this,
              t = (e.minSize = { width: 0, height: 0 }),
              n = e.chart,
              r = e.options,
              a = r.ticks,
              i = r.scaleLabel,
              o = r.gridLines,
              l = e._isVisible(),
              s = "bottom" === r.position,
              u = e.isHorizontal();
            if (
              (u ? (t.width = e.maxWidth) : l && (t.width = ir(o) + or(i)),
              u ? l && (t.height = ir(o) + or(i)) : (t.height = e.maxHeight),
              a.display && l)
            ) {
              var c = sr(a),
                f = e._getLabelSizes(),
                d = f.first,
                h = f.last,
                p = f.widest,
                g = f.highest,
                m = 0.4 * c.minor.lineHeight,
                v = a.padding;
              if (u) {
                var y = 0 !== e.labelRotation,
                  b = ie.toRadians(e.labelRotation),
                  x = Math.cos(b),
                  _ = Math.sin(b),
                  w =
                    _ * p.width +
                    x * (g.height - (y ? g.offset : 0)) +
                    (y ? 0 : m);
                t.height = Math.min(e.maxHeight, t.height + w + v);
                var k,
                  S,
                  C = e.getPixelForTick(0) - e.left,
                  M = e.right - e.getPixelForTick(e.getTicks().length - 1);
                y
                  ? ((k = s
                      ? x * d.width + _ * d.offset
                      : _ * (d.height - d.offset)),
                    (S = s
                      ? _ * (h.height - h.offset)
                      : x * h.width + _ * h.offset))
                  : ((k = d.width / 2), (S = h.width / 2)),
                  (e.paddingLeft =
                    Math.max(((k - C) * e.width) / (e.width - C), 0) + 3),
                  (e.paddingRight =
                    Math.max(((S - M) * e.width) / (e.width - M), 0) + 3);
              } else {
                var O = a.mirror ? 0 : p.width + v + m;
                (t.width = Math.min(e.maxWidth, t.width + O)),
                  (e.paddingTop = d.height / 2),
                  (e.paddingBottom = h.height / 2);
              }
            }
            e.handleMargins(),
              u
                ? ((e.width = e._length =
                    n.width - e.margins.left - e.margins.right),
                  (e.height = t.height))
                : ((e.width = t.width),
                  (e.height = e._length =
                    n.height - e.margins.top - e.margins.bottom));
          },
          handleMargins: function () {
            var e = this;
            e.margins &&
              ((e.margins.left = Math.max(e.paddingLeft, e.margins.left)),
              (e.margins.top = Math.max(e.paddingTop, e.margins.top)),
              (e.margins.right = Math.max(e.paddingRight, e.margins.right)),
              (e.margins.bottom = Math.max(e.paddingBottom, e.margins.bottom)));
          },
          afterFit: function () {
            ie.callback(this.options.afterFit, [this]);
          },
          isHorizontal: function () {
            var e = this.options.position;
            return "top" === e || "bottom" === e;
          },
          isFullWidth: function () {
            return this.options.fullWidth;
          },
          getRightValue: function (e) {
            if (Xn(e)) return NaN;
            if (("number" === typeof e || e instanceof Number) && !isFinite(e))
              return NaN;
            if (e)
              if (this.isHorizontal()) {
                if (void 0 !== e.x) return this.getRightValue(e.x);
              } else if (void 0 !== e.y) return this.getRightValue(e.y);
            return e;
          },
          _convertTicksToLabels: function (e) {
            var t,
              n,
              r,
              a = this;
            for (
              a.ticks = e.map(function (e) {
                return e.value;
              }),
                a.beforeTickToLabelConversion(),
                t = a.convertTicksToLabels(e) || a.ticks,
                a.afterTickToLabelConversion(),
                n = 0,
                r = e.length;
              n < r;
              ++n
            )
              e[n].label = t[n];
            return t;
          },
          _getLabelSizes: function () {
            var e = this,
              t = e._labelSizes;
            return (
              t ||
                ((e._labelSizes = t = ar(
                  e.ctx,
                  sr(e.options.ticks),
                  e.getTicks(),
                  e.longestTextCache
                )),
                (e.longestLabelWidth = t.widest.width)),
              t
            );
          },
          _parseValue: function (e) {
            var t, n, r, a;
            return (
              Zn(e)
                ? ((t = +this.getRightValue(e[0])),
                  (n = +this.getRightValue(e[1])),
                  (r = Math.min(t, n)),
                  (a = Math.max(t, n)))
                : ((t = void 0),
                  (n = e = +this.getRightValue(e)),
                  (r = e),
                  (a = e)),
              { min: r, max: a, start: t, end: n }
            );
          },
          _getScaleLabel: function (e) {
            var t = this._parseValue(e);
            return void 0 !== t.start
              ? "[" + t.start + ", " + t.end + "]"
              : +this.getRightValue(e);
          },
          getLabelForIndex: ie.noop,
          getPixelForValue: ie.noop,
          getValueForPixel: ie.noop,
          getPixelForTick: function (e) {
            var t = this,
              n = t.options.offset,
              r = t._ticks.length,
              a = 1 / Math.max(r - (n ? 0 : 1), 1);
            return e < 0 || e > r - 1
              ? null
              : t.getPixelForDecimal(e * a + (n ? a / 2 : 0));
          },
          getPixelForDecimal: function (e) {
            var t = this;
            return (
              t._reversePixels && (e = 1 - e), t._startPixel + e * t._length
            );
          },
          getDecimalForPixel: function (e) {
            var t = (e - this._startPixel) / this._length;
            return this._reversePixels ? 1 - t : t;
          },
          getBasePixel: function () {
            return this.getPixelForValue(this.getBaseValue());
          },
          getBaseValue: function () {
            var e = this,
              t = e.min,
              n = e.max;
            return e.beginAtZero
              ? 0
              : t < 0 && n < 0
              ? n
              : t > 0 && n > 0
              ? t
              : 0;
          },
          _autoSkip: function (e) {
            var t,
              n,
              r,
              a,
              i = this,
              o = i.options.ticks,
              l = i._length,
              s = o.maxTicksLimit || l / i._tickSize() + 1,
              u = o.major.enabled ? dr(e) : [],
              c = u.length,
              f = u[0],
              d = u[c - 1];
            if (c > s) return hr(e, u, c / s), ur(e);
            if (((r = fr(u, e, l, s)), c > 0)) {
              for (t = 0, n = c - 1; t < n; t++) pr(e, r, u[t], u[t + 1]);
              return (
                (a = c > 1 ? (d - f) / (c - 1) : null),
                pr(e, r, ie.isNullOrUndef(a) ? 0 : f - a, f),
                pr(e, r, d, ie.isNullOrUndef(a) ? e.length : d + a),
                ur(e)
              );
            }
            return pr(e, r), ur(e);
          },
          _tickSize: function () {
            var e = this,
              t = e.options.ticks,
              n = ie.toRadians(e.labelRotation),
              r = Math.abs(Math.cos(n)),
              a = Math.abs(Math.sin(n)),
              i = e._getLabelSizes(),
              o = t.autoSkipPadding || 0,
              l = i ? i.widest.width + o : 0,
              s = i ? i.highest.height + o : 0;
            return e.isHorizontal()
              ? s * r > l * a
                ? l / r
                : s / a
              : s * a < l * r
              ? s / r
              : l / a;
          },
          _isVisible: function () {
            var e,
              t,
              n,
              r = this,
              a = r.chart,
              i = r.options.display;
            if ("auto" !== i) return !!i;
            for (e = 0, t = a.data.datasets.length; e < t; ++e)
              if (
                a.isDatasetVisible(e) &&
                ((n = a.getDatasetMeta(e)).xAxisID === r.id ||
                  n.yAxisID === r.id)
              )
                return !0;
            return !1;
          },
          _computeGridLineItems: function (e) {
            var t,
              n,
              r,
              a,
              i,
              o,
              l,
              s,
              u,
              c,
              f,
              d,
              h,
              p,
              g,
              m,
              v,
              y = this,
              b = y.chart,
              x = y.options,
              _ = x.gridLines,
              w = x.position,
              k = _.offsetGridLines,
              S = y.isHorizontal(),
              C = y._ticksToDraw,
              M = C.length + (k ? 1 : 0),
              O = ir(_),
              P = [],
              E = _.drawBorder ? er(_.lineWidth, 0, 0) : 0,
              D = E / 2,
              T = ie._alignPixel,
              A = function (e) {
                return T(b, e, E);
              };
            for (
              "top" === w
                ? ((t = A(y.bottom)),
                  (l = y.bottom - O),
                  (u = t - D),
                  (f = A(e.top) + D),
                  (h = e.bottom))
                : "bottom" === w
                ? ((t = A(y.top)),
                  (f = e.top),
                  (h = A(e.bottom) - D),
                  (l = t + D),
                  (u = y.top + O))
                : "left" === w
                ? ((t = A(y.right)),
                  (o = y.right - O),
                  (s = t - D),
                  (c = A(e.left) + D),
                  (d = e.right))
                : ((t = A(y.left)),
                  (c = e.left),
                  (d = A(e.right) - D),
                  (o = t + D),
                  (s = y.left + O)),
                n = 0;
              n < M;
              ++n
            )
              (r = C[n] || {}),
                (Xn(r.label) && n < C.length) ||
                  (n === y.zeroLineIndex && x.offset === k
                    ? ((p = _.zeroLineWidth),
                      (g = _.zeroLineColor),
                      (m = _.zeroLineBorderDash || []),
                      (v = _.zeroLineBorderDashOffset || 0))
                    : ((p = er(_.lineWidth, n, 1)),
                      (g = er(_.color, n, "rgba(0,0,0,0.1)")),
                      (m = _.borderDash || []),
                      (v = _.borderDashOffset || 0)),
                  void 0 !== (a = nr(y, r._index || n, k)) &&
                    ((i = T(b, a, p)),
                    S ? (o = s = c = d = i) : (l = u = f = h = i),
                    P.push({
                      tx1: o,
                      ty1: l,
                      tx2: s,
                      ty2: u,
                      x1: c,
                      y1: f,
                      x2: d,
                      y2: h,
                      width: p,
                      color: g,
                      borderDash: m,
                      borderDashOffset: v,
                    })));
            return (P.ticksLength = M), (P.borderValue = t), P;
          },
          _computeLabelItems: function () {
            var e,
              t,
              n,
              r,
              a,
              i,
              o,
              l,
              s,
              u,
              c,
              f,
              d = this,
              h = d.options,
              p = h.ticks,
              g = h.position,
              m = p.mirror,
              v = d.isHorizontal(),
              y = d._ticksToDraw,
              b = sr(p),
              x = p.padding,
              _ = ir(h.gridLines),
              w = -ie.toRadians(d.labelRotation),
              k = [];
            for (
              "top" === g
                ? ((i = d.bottom - _ - x), (o = w ? "left" : "center"))
                : "bottom" === g
                ? ((i = d.top + _ + x), (o = w ? "right" : "center"))
                : "left" === g
                ? ((a = d.right - (m ? 0 : _) - x), (o = m ? "left" : "right"))
                : ((a = d.left + (m ? 0 : _) + x), (o = m ? "right" : "left")),
                e = 0,
                t = y.length;
              e < t;
              ++e
            )
              (r = (n = y[e]).label),
                Xn(r) ||
                  ((l = d.getPixelForTick(n._index || e) + p.labelOffset),
                  (u = (s = n.major ? b.major : b.minor).lineHeight),
                  (c = Zn(r) ? r.length : 1),
                  v
                    ? ((a = l),
                      (f =
                        "top" === g
                          ? ((w ? 1 : 0.5) - c) * u
                          : (w ? 0 : 0.5) * u))
                    : ((i = l), (f = ((1 - c) * u) / 2)),
                  k.push({
                    x: a,
                    y: i,
                    rotation: w,
                    label: r,
                    font: s,
                    textOffset: f,
                    textAlign: o,
                  }));
            return k;
          },
          _drawGrid: function (e) {
            var t = this,
              n = t.options.gridLines;
            if (n.display) {
              var r,
                a,
                i,
                o,
                l,
                s = t.ctx,
                u = t.chart,
                c = ie._alignPixel,
                f = n.drawBorder ? er(n.lineWidth, 0, 0) : 0,
                d =
                  t._gridLineItems ||
                  (t._gridLineItems = t._computeGridLineItems(e));
              for (i = 0, o = d.length; i < o; ++i)
                (r = (l = d[i]).width),
                  (a = l.color),
                  r &&
                    a &&
                    (s.save(),
                    (s.lineWidth = r),
                    (s.strokeStyle = a),
                    s.setLineDash &&
                      (s.setLineDash(l.borderDash),
                      (s.lineDashOffset = l.borderDashOffset)),
                    s.beginPath(),
                    n.drawTicks &&
                      (s.moveTo(l.tx1, l.ty1), s.lineTo(l.tx2, l.ty2)),
                    n.drawOnChartArea &&
                      (s.moveTo(l.x1, l.y1), s.lineTo(l.x2, l.y2)),
                    s.stroke(),
                    s.restore());
              if (f) {
                var h,
                  p,
                  g,
                  m,
                  v = f,
                  y = er(n.lineWidth, d.ticksLength - 1, 1),
                  b = d.borderValue;
                t.isHorizontal()
                  ? ((h = c(u, t.left, v) - v / 2),
                    (p = c(u, t.right, y) + y / 2),
                    (g = m = b))
                  : ((g = c(u, t.top, v) - v / 2),
                    (m = c(u, t.bottom, y) + y / 2),
                    (h = p = b)),
                  (s.lineWidth = f),
                  (s.strokeStyle = er(n.color, 0)),
                  s.beginPath(),
                  s.moveTo(h, g),
                  s.lineTo(p, m),
                  s.stroke();
              }
            }
          },
          _drawLabels: function () {
            var e = this;
            if (e.options.ticks.display) {
              var t,
                n,
                r,
                a,
                i,
                o,
                l,
                s,
                u = e.ctx,
                c = e._labelItems || (e._labelItems = e._computeLabelItems());
              for (t = 0, r = c.length; t < r; ++t) {
                if (
                  ((o = (i = c[t]).font),
                  u.save(),
                  u.translate(i.x, i.y),
                  u.rotate(i.rotation),
                  (u.font = o.string),
                  (u.fillStyle = o.color),
                  (u.textBaseline = "middle"),
                  (u.textAlign = i.textAlign),
                  (l = i.label),
                  (s = i.textOffset),
                  Zn(l))
                )
                  for (n = 0, a = l.length; n < a; ++n)
                    u.fillText("" + l[n], 0, s), (s += o.lineHeight);
                else u.fillText(l, 0, s);
                u.restore();
              }
            }
          },
          _drawTitle: function () {
            var e = this,
              t = e.ctx,
              n = e.options,
              r = n.scaleLabel;
            if (r.display) {
              var a,
                i,
                o = Jn(r.fontColor, Z.global.defaultFontColor),
                l = ie.options._parseFont(r),
                s = ie.options.toPadding(r.padding),
                u = l.lineHeight / 2,
                c = n.position,
                f = 0;
              if (e.isHorizontal())
                (a = e.left + e.width / 2),
                  (i =
                    "bottom" === c
                      ? e.bottom - u - s.bottom
                      : e.top + u + s.top);
              else {
                var d = "left" === c;
                (a = d ? e.left + u + s.top : e.right - u - s.top),
                  (i = e.top + e.height / 2),
                  (f = d ? -0.5 * Math.PI : 0.5 * Math.PI);
              }
              t.save(),
                t.translate(a, i),
                t.rotate(f),
                (t.textAlign = "center"),
                (t.textBaseline = "middle"),
                (t.fillStyle = o),
                (t.font = l.string),
                t.fillText(r.labelString, 0, 0),
                t.restore();
            }
          },
          draw: function (e) {
            var t = this;
            t._isVisible() && (t._drawGrid(e), t._drawTitle(), t._drawLabels());
          },
          _layers: function () {
            var e = this,
              t = e.options,
              n = (t.ticks && t.ticks.z) || 0,
              r = (t.gridLines && t.gridLines.z) || 0;
            return e._isVisible() && n !== r && e.draw === e._draw
              ? [
                  {
                    z: r,
                    draw: function () {
                      e._drawGrid.apply(e, arguments),
                        e._drawTitle.apply(e, arguments);
                    },
                  },
                  {
                    z: n,
                    draw: function () {
                      e._drawLabels.apply(e, arguments);
                    },
                  },
                ]
              : [
                  {
                    z: n,
                    draw: function () {
                      e.draw.apply(e, arguments);
                    },
                  },
                ];
          },
          _getMatchingVisibleMetas: function (e) {
            var t = this,
              n = t.isHorizontal();
            return t.chart._getSortedVisibleDatasetMetas().filter(function (r) {
              return (
                (!e || r.type === e) &&
                (n ? r.xAxisID === t.id : r.yAxisID === t.id)
              );
            });
          },
        });
        gr.prototype._draw = gr.prototype.draw;
        var mr = gr,
          vr = ie.isNullOrUndef,
          yr = { position: "bottom" },
          br = mr.extend({
            determineDataLimits: function () {
              var e,
                t = this,
                n = t._getLabels(),
                r = t.options.ticks,
                a = r.min,
                i = r.max,
                o = 0,
                l = n.length - 1;
              void 0 !== a && (e = n.indexOf(a)) >= 0 && (o = e),
                void 0 !== i && (e = n.indexOf(i)) >= 0 && (l = e),
                (t.minIndex = o),
                (t.maxIndex = l),
                (t.min = n[o]),
                (t.max = n[l]);
            },
            buildTicks: function () {
              var e = this,
                t = e._getLabels(),
                n = e.minIndex,
                r = e.maxIndex;
              e.ticks = 0 === n && r === t.length - 1 ? t : t.slice(n, r + 1);
            },
            getLabelForIndex: function (e, t) {
              var n = this,
                r = n.chart;
              return r.getDatasetMeta(t).controller._getValueScaleId() === n.id
                ? n.getRightValue(r.data.datasets[t].data[e])
                : n._getLabels()[e];
            },
            _configure: function () {
              var e = this,
                t = e.options.offset,
                n = e.ticks;
              mr.prototype._configure.call(e),
                e.isHorizontal() || (e._reversePixels = !e._reversePixels),
                n &&
                  ((e._startValue = e.minIndex - (t ? 0.5 : 0)),
                  (e._valueRange = Math.max(n.length - (t ? 0 : 1), 1)));
            },
            getPixelForValue: function (e, t, n) {
              var r,
                a,
                i,
                o = this;
              return (
                vr(t) || vr(n) || (e = o.chart.data.datasets[n].data[t]),
                vr(e) || (r = o.isHorizontal() ? e.x : e.y),
                (void 0 !== r || (void 0 !== e && isNaN(t))) &&
                  ((a = o._getLabels()),
                  (e = ie.valueOrDefault(r, e)),
                  (t = -1 !== (i = a.indexOf(e)) ? i : t),
                  isNaN(t) && (t = e)),
                o.getPixelForDecimal((t - o._startValue) / o._valueRange)
              );
            },
            getPixelForTick: function (e) {
              var t = this.ticks;
              return e < 0 || e > t.length - 1
                ? null
                : this.getPixelForValue(t[e], e + this.minIndex);
            },
            getValueForPixel: function (e) {
              var t = this,
                n = Math.round(
                  t._startValue + t.getDecimalForPixel(e) * t._valueRange
                );
              return Math.min(Math.max(n, 0), t.ticks.length - 1);
            },
            getBasePixel: function () {
              return this.bottom;
            },
          }),
          xr = yr;
        br._defaults = xr;
        var _r = ie.noop,
          wr = ie.isNullOrUndef;
        function kr(e, t) {
          var n,
            r,
            a,
            i,
            o = [],
            l = 1e-14,
            s = e.stepSize,
            u = s || 1,
            c = e.maxTicks - 1,
            f = e.min,
            d = e.max,
            h = e.precision,
            p = t.min,
            g = t.max,
            m = ie.niceNum((g - p) / c / u) * u;
          if (m < l && wr(f) && wr(d)) return [p, g];
          (i = Math.ceil(g / m) - Math.floor(p / m)) > c &&
            (m = ie.niceNum((i * m) / c / u) * u),
            s || wr(h)
              ? (n = Math.pow(10, ie._decimalPlaces(m)))
              : ((n = Math.pow(10, h)), (m = Math.ceil(m * n) / n)),
            (r = Math.floor(p / m) * m),
            (a = Math.ceil(g / m) * m),
            s &&
              (!wr(f) && ie.almostWhole(f / m, m / 1e3) && (r = f),
              !wr(d) && ie.almostWhole(d / m, m / 1e3) && (a = d)),
            (i = (a - r) / m),
            (i = ie.almostEquals(i, Math.round(i), m / 1e3)
              ? Math.round(i)
              : Math.ceil(i)),
            (r = Math.round(r * n) / n),
            (a = Math.round(a * n) / n),
            o.push(wr(f) ? r : f);
          for (var v = 1; v < i; ++v) o.push(Math.round((r + v * m) * n) / n);
          return o.push(wr(d) ? a : d), o;
        }
        var Sr = mr.extend({
            getRightValue: function (e) {
              return "string" === typeof e
                ? +e
                : mr.prototype.getRightValue.call(this, e);
            },
            handleTickRangeOptions: function () {
              var e = this,
                t = e.options.ticks;
              if (t.beginAtZero) {
                var n = ie.sign(e.min),
                  r = ie.sign(e.max);
                n < 0 && r < 0 ? (e.max = 0) : n > 0 && r > 0 && (e.min = 0);
              }
              var a = void 0 !== t.min || void 0 !== t.suggestedMin,
                i = void 0 !== t.max || void 0 !== t.suggestedMax;
              void 0 !== t.min
                ? (e.min = t.min)
                : void 0 !== t.suggestedMin &&
                  (null === e.min
                    ? (e.min = t.suggestedMin)
                    : (e.min = Math.min(e.min, t.suggestedMin))),
                void 0 !== t.max
                  ? (e.max = t.max)
                  : void 0 !== t.suggestedMax &&
                    (null === e.max
                      ? (e.max = t.suggestedMax)
                      : (e.max = Math.max(e.max, t.suggestedMax))),
                a !== i &&
                  e.min >= e.max &&
                  (a ? (e.max = e.min + 1) : (e.min = e.max - 1)),
                e.min === e.max && (e.max++, t.beginAtZero || e.min--);
            },
            getTickLimit: function () {
              var e,
                t = this,
                n = t.options.ticks,
                r = n.stepSize,
                a = n.maxTicksLimit;
              return (
                r
                  ? (e = Math.ceil(t.max / r) - Math.floor(t.min / r) + 1)
                  : ((e = t._computeTickLimit()), (a = a || 11)),
                a && (e = Math.min(a, e)),
                e
              );
            },
            _computeTickLimit: function () {
              return Number.POSITIVE_INFINITY;
            },
            handleDirectionalChanges: _r,
            buildTicks: function () {
              var e = this,
                t = e.options.ticks,
                n = e.getTickLimit(),
                r = {
                  maxTicks: (n = Math.max(2, n)),
                  min: t.min,
                  max: t.max,
                  precision: t.precision,
                  stepSize: ie.valueOrDefault(t.fixedStepSize, t.stepSize),
                },
                a = (e.ticks = kr(r, e));
              e.handleDirectionalChanges(),
                (e.max = ie.max(a)),
                (e.min = ie.min(a)),
                t.reverse
                  ? (a.reverse(), (e.start = e.max), (e.end = e.min))
                  : ((e.start = e.min), (e.end = e.max));
            },
            convertTicksToLabels: function () {
              var e = this;
              (e.ticksAsNumbers = e.ticks.slice()),
                (e.zeroLineIndex = e.ticks.indexOf(0)),
                mr.prototype.convertTicksToLabels.call(e);
            },
            _configure: function () {
              var e,
                t = this,
                n = t.getTicks(),
                r = t.min,
                a = t.max;
              mr.prototype._configure.call(t),
                t.options.offset &&
                  n.length &&
                  ((r -= e = (a - r) / Math.max(n.length - 1, 1) / 2),
                  (a += e)),
                (t._startValue = r),
                (t._endValue = a),
                (t._valueRange = a - r);
            },
          }),
          Cr = { position: "left", ticks: { callback: Qn.formatters.linear } },
          Mr = 0,
          Or = 1;
        function Pr(e, t, n) {
          var r = [
            n.type,
            void 0 === t && void 0 === n.stack ? n.index : "",
            n.stack,
          ].join(".");
          return void 0 === e[r] && (e[r] = { pos: [], neg: [] }), e[r];
        }
        function Er(e, t, n, r) {
          var a,
            i,
            o = e.options,
            l = Pr(t, o.stacked, n),
            s = l.pos,
            u = l.neg,
            c = r.length;
          for (a = 0; a < c; ++a)
            (i = e._parseValue(r[a])),
              isNaN(i.min) ||
                isNaN(i.max) ||
                n.data[a].hidden ||
                ((s[a] = s[a] || 0),
                (u[a] = u[a] || 0),
                o.relativePoints
                  ? (s[a] = 100)
                  : i.min < 0 || i.max < 0
                  ? (u[a] += i.min)
                  : (s[a] += i.max));
        }
        function Dr(e, t, n) {
          var r,
            a,
            i = n.length;
          for (r = 0; r < i; ++r)
            (a = e._parseValue(n[r])),
              isNaN(a.min) ||
                isNaN(a.max) ||
                t.data[r].hidden ||
                ((e.min = Math.min(e.min, a.min)),
                (e.max = Math.max(e.max, a.max)));
        }
        var Tr = Sr.extend({
            determineDataLimits: function () {
              var e,
                t,
                n,
                r,
                a = this,
                i = a.options,
                o = a.chart.data.datasets,
                l = a._getMatchingVisibleMetas(),
                s = i.stacked,
                u = {},
                c = l.length;
              if (
                ((a.min = Number.POSITIVE_INFINITY),
                (a.max = Number.NEGATIVE_INFINITY),
                void 0 === s)
              )
                for (e = 0; !s && e < c; ++e) s = void 0 !== (t = l[e]).stack;
              for (e = 0; e < c; ++e)
                (n = o[(t = l[e]).index].data),
                  s ? Er(a, u, t, n) : Dr(a, t, n);
              ie.each(u, function (e) {
                (r = e.pos.concat(e.neg)),
                  (a.min = Math.min(a.min, ie.min(r))),
                  (a.max = Math.max(a.max, ie.max(r)));
              }),
                (a.min = ie.isFinite(a.min) && !isNaN(a.min) ? a.min : Mr),
                (a.max = ie.isFinite(a.max) && !isNaN(a.max) ? a.max : Or),
                a.handleTickRangeOptions();
            },
            _computeTickLimit: function () {
              var e,
                t = this;
              return t.isHorizontal()
                ? Math.ceil(t.width / 40)
                : ((e = ie.options._parseFont(t.options.ticks)),
                  Math.ceil(t.height / e.lineHeight));
            },
            handleDirectionalChanges: function () {
              this.isHorizontal() || this.ticks.reverse();
            },
            getLabelForIndex: function (e, t) {
              return this._getScaleLabel(this.chart.data.datasets[t].data[e]);
            },
            getPixelForValue: function (e) {
              var t = this;
              return t.getPixelForDecimal(
                (+t.getRightValue(e) - t._startValue) / t._valueRange
              );
            },
            getValueForPixel: function (e) {
              return (
                this._startValue + this.getDecimalForPixel(e) * this._valueRange
              );
            },
            getPixelForTick: function (e) {
              var t = this.ticksAsNumbers;
              return e < 0 || e > t.length - 1
                ? null
                : this.getPixelForValue(t[e]);
            },
          }),
          Ar = Cr;
        Tr._defaults = Ar;
        var Nr = ie.valueOrDefault,
          Ir = ie.math.log10;
        function Rr(e, t) {
          var n,
            r,
            a = [],
            i = Nr(e.min, Math.pow(10, Math.floor(Ir(t.min)))),
            o = Math.floor(Ir(t.max)),
            l = Math.ceil(t.max / Math.pow(10, o));
          0 === i
            ? ((n = Math.floor(Ir(t.minNotZero))),
              (r = Math.floor(t.minNotZero / Math.pow(10, n))),
              a.push(i),
              (i = r * Math.pow(10, n)))
            : ((n = Math.floor(Ir(i))), (r = Math.floor(i / Math.pow(10, n))));
          var s = n < 0 ? Math.pow(10, Math.abs(n)) : 1;
          do {
            a.push(i),
              10 === ++r && ((r = 1), (s = ++n >= 0 ? 1 : s)),
              (i = Math.round(r * Math.pow(10, n) * s) / s);
          } while (n < o || (n === o && r < l));
          var u = Nr(e.max, i);
          return a.push(u), a;
        }
        var Lr = {
          position: "left",
          ticks: { callback: Qn.formatters.logarithmic },
        };
        function Fr(e, t) {
          return ie.isFinite(e) && e >= 0 ? e : t;
        }
        var jr = mr.extend({
            determineDataLimits: function () {
              var e,
                t,
                n,
                r,
                a,
                i,
                o = this,
                l = o.options,
                s = o.chart,
                u = s.data.datasets,
                c = o.isHorizontal();
              function f(e) {
                return c ? e.xAxisID === o.id : e.yAxisID === o.id;
              }
              (o.min = Number.POSITIVE_INFINITY),
                (o.max = Number.NEGATIVE_INFINITY),
                (o.minNotZero = Number.POSITIVE_INFINITY);
              var d = l.stacked;
              if (void 0 === d)
                for (e = 0; e < u.length; e++)
                  if (
                    ((t = s.getDatasetMeta(e)),
                    s.isDatasetVisible(e) && f(t) && void 0 !== t.stack)
                  ) {
                    d = !0;
                    break;
                  }
              if (l.stacked || d) {
                var h = {};
                for (e = 0; e < u.length; e++) {
                  var p = [
                    (t = s.getDatasetMeta(e)).type,
                    void 0 === l.stacked && void 0 === t.stack ? e : "",
                    t.stack,
                  ].join(".");
                  if (s.isDatasetVisible(e) && f(t))
                    for (
                      void 0 === h[p] && (h[p] = []),
                        a = 0,
                        i = (r = u[e].data).length;
                      a < i;
                      a++
                    ) {
                      var g = h[p];
                      (n = o._parseValue(r[a])),
                        isNaN(n.min) ||
                          isNaN(n.max) ||
                          t.data[a].hidden ||
                          n.min < 0 ||
                          n.max < 0 ||
                          ((g[a] = g[a] || 0), (g[a] += n.max));
                    }
                }
                ie.each(h, function (e) {
                  if (e.length > 0) {
                    var t = ie.min(e),
                      n = ie.max(e);
                    (o.min = Math.min(o.min, t)), (o.max = Math.max(o.max, n));
                  }
                });
              } else
                for (e = 0; e < u.length; e++)
                  if (
                    ((t = s.getDatasetMeta(e)), s.isDatasetVisible(e) && f(t))
                  )
                    for (a = 0, i = (r = u[e].data).length; a < i; a++)
                      (n = o._parseValue(r[a])),
                        isNaN(n.min) ||
                          isNaN(n.max) ||
                          t.data[a].hidden ||
                          n.min < 0 ||
                          n.max < 0 ||
                          ((o.min = Math.min(n.min, o.min)),
                          (o.max = Math.max(n.max, o.max)),
                          0 !== n.min &&
                            (o.minNotZero = Math.min(n.min, o.minNotZero)));
              (o.min = ie.isFinite(o.min) ? o.min : null),
                (o.max = ie.isFinite(o.max) ? o.max : null),
                (o.minNotZero = ie.isFinite(o.minNotZero)
                  ? o.minNotZero
                  : null),
                this.handleTickRangeOptions();
            },
            handleTickRangeOptions: function () {
              var e = this,
                t = e.options.ticks,
                n = 1,
                r = 10;
              (e.min = Fr(t.min, e.min)),
                (e.max = Fr(t.max, e.max)),
                e.min === e.max &&
                  (0 !== e.min && null !== e.min
                    ? ((e.min = Math.pow(10, Math.floor(Ir(e.min)) - 1)),
                      (e.max = Math.pow(10, Math.floor(Ir(e.max)) + 1)))
                    : ((e.min = n), (e.max = r))),
                null === e.min &&
                  (e.min = Math.pow(10, Math.floor(Ir(e.max)) - 1)),
                null === e.max &&
                  (e.max =
                    0 !== e.min ? Math.pow(10, Math.floor(Ir(e.min)) + 1) : r),
                null === e.minNotZero &&
                  (e.min > 0
                    ? (e.minNotZero = e.min)
                    : e.max < 1
                    ? (e.minNotZero = Math.pow(10, Math.floor(Ir(e.max))))
                    : (e.minNotZero = n));
            },
            buildTicks: function () {
              var e = this,
                t = e.options.ticks,
                n = !e.isHorizontal(),
                r = { min: Fr(t.min), max: Fr(t.max) },
                a = (e.ticks = Rr(r, e));
              (e.max = ie.max(a)),
                (e.min = ie.min(a)),
                t.reverse
                  ? ((n = !n), (e.start = e.max), (e.end = e.min))
                  : ((e.start = e.min), (e.end = e.max)),
                n && a.reverse();
            },
            convertTicksToLabels: function () {
              (this.tickValues = this.ticks.slice()),
                mr.prototype.convertTicksToLabels.call(this);
            },
            getLabelForIndex: function (e, t) {
              return this._getScaleLabel(this.chart.data.datasets[t].data[e]);
            },
            getPixelForTick: function (e) {
              var t = this.tickValues;
              return e < 0 || e > t.length - 1
                ? null
                : this.getPixelForValue(t[e]);
            },
            _getFirstTickValue: function (e) {
              var t = Math.floor(Ir(e));
              return Math.floor(e / Math.pow(10, t)) * Math.pow(10, t);
            },
            _configure: function () {
              var e = this,
                t = e.min,
                n = 0;
              mr.prototype._configure.call(e),
                0 === t &&
                  ((t = e._getFirstTickValue(e.minNotZero)),
                  (n =
                    Nr(e.options.ticks.fontSize, Z.global.defaultFontSize) /
                    e._length)),
                (e._startValue = Ir(t)),
                (e._valueOffset = n),
                (e._valueRange = (Ir(e.max) - Ir(t)) / (1 - n));
            },
            getPixelForValue: function (e) {
              var t = this,
                n = 0;
              return (
                (e = +t.getRightValue(e)) > t.min &&
                  e > 0 &&
                  (n =
                    (Ir(e) - t._startValue) / t._valueRange + t._valueOffset),
                t.getPixelForDecimal(n)
              );
            },
            getValueForPixel: function (e) {
              var t = this,
                n = t.getDecimalForPixel(e);
              return 0 === n && 0 === t.min
                ? 0
                : Math.pow(
                    10,
                    t._startValue + (n - t._valueOffset) * t._valueRange
                  );
            },
          }),
          zr = Lr;
        jr._defaults = zr;
        var Wr = ie.valueOrDefault,
          Vr = ie.valueAtIndexOrDefault,
          Yr = ie.options.resolve,
          Br = {
            display: !0,
            animate: !0,
            position: "chartArea",
            angleLines: {
              display: !0,
              color: "rgba(0,0,0,0.1)",
              lineWidth: 1,
              borderDash: [],
              borderDashOffset: 0,
            },
            gridLines: { circular: !1 },
            ticks: {
              showLabelBackdrop: !0,
              backdropColor: "rgba(255,255,255,0.75)",
              backdropPaddingY: 2,
              backdropPaddingX: 2,
              callback: Qn.formatters.linear,
            },
            pointLabels: {
              display: !0,
              fontSize: 10,
              callback: function (e) {
                return e;
              },
            },
          };
        function Hr(e) {
          var t = e.ticks;
          return t.display && e.display
            ? Wr(t.fontSize, Z.global.defaultFontSize) + 2 * t.backdropPaddingY
            : 0;
        }
        function Ur(e, t, n) {
          return ie.isArray(n)
            ? { w: ie.longestText(e, e.font, n), h: n.length * t }
            : { w: e.measureText(n).width, h: t };
        }
        function $r(e, t, n, r, a) {
          return e === r || e === a
            ? { start: t - n / 2, end: t + n / 2 }
            : e < r || e > a
            ? { start: t - n, end: t }
            : { start: t, end: t + n };
        }
        function Gr(e) {
          var t,
            n,
            r,
            a = ie.options._parseFont(e.options.pointLabels),
            i = { l: 0, r: e.width, t: 0, b: e.height - e.paddingTop },
            o = {};
          (e.ctx.font = a.string), (e._pointLabelSizes = []);
          var l = e.chart.data.labels.length;
          for (t = 0; t < l; t++) {
            (r = e.getPointPosition(t, e.drawingArea + 5)),
              (n = Ur(e.ctx, a.lineHeight, e.pointLabels[t])),
              (e._pointLabelSizes[t] = n);
            var s = e.getIndexAngle(t),
              u = ie.toDegrees(s) % 360,
              c = $r(u, r.x, n.w, 0, 180),
              f = $r(u, r.y, n.h, 90, 270);
            c.start < i.l && ((i.l = c.start), (o.l = s)),
              c.end > i.r && ((i.r = c.end), (o.r = s)),
              f.start < i.t && ((i.t = f.start), (o.t = s)),
              f.end > i.b && ((i.b = f.end), (o.b = s));
          }
          e.setReductions(e.drawingArea, i, o);
        }
        function qr(e) {
          return 0 === e || 180 === e ? "center" : e < 180 ? "left" : "right";
        }
        function Kr(e, t, n, r) {
          var a,
            i,
            o = n.y + r / 2;
          if (ie.isArray(t))
            for (a = 0, i = t.length; a < i; ++a)
              e.fillText(t[a], n.x, o), (o += r);
          else e.fillText(t, n.x, o);
        }
        function Qr(e, t, n) {
          90 === e || 270 === e
            ? (n.y -= t.h / 2)
            : (e > 270 || e < 90) && (n.y -= t.h);
        }
        function Zr(e) {
          var t = e.ctx,
            n = e.options,
            r = n.pointLabels,
            a = Hr(n),
            i = e.getDistanceFromCenterForValue(
              n.ticks.reverse ? e.min : e.max
            ),
            o = ie.options._parseFont(r);
          t.save(), (t.font = o.string), (t.textBaseline = "middle");
          for (var l = e.chart.data.labels.length - 1; l >= 0; l--) {
            var s = 0 === l ? a / 2 : 0,
              u = e.getPointPosition(l, i + s + 5),
              c = Vr(r.fontColor, l, Z.global.defaultFontColor);
            t.fillStyle = c;
            var f = e.getIndexAngle(l),
              d = ie.toDegrees(f);
            (t.textAlign = qr(d)),
              Qr(d, e._pointLabelSizes[l], u),
              Kr(t, e.pointLabels[l], u, o.lineHeight);
          }
          t.restore();
        }
        function Xr(e, t, n, r) {
          var a,
            i = e.ctx,
            o = t.circular,
            l = e.chart.data.labels.length,
            s = Vr(t.color, r - 1),
            u = Vr(t.lineWidth, r - 1);
          if ((o || l) && s && u) {
            if (
              (i.save(),
              (i.strokeStyle = s),
              (i.lineWidth = u),
              i.setLineDash &&
                (i.setLineDash(t.borderDash || []),
                (i.lineDashOffset = t.borderDashOffset || 0)),
              i.beginPath(),
              o)
            )
              i.arc(e.xCenter, e.yCenter, n, 0, 2 * Math.PI);
            else {
              (a = e.getPointPosition(0, n)), i.moveTo(a.x, a.y);
              for (var c = 1; c < l; c++)
                (a = e.getPointPosition(c, n)), i.lineTo(a.x, a.y);
            }
            i.closePath(), i.stroke(), i.restore();
          }
        }
        function Jr(e) {
          return ie.isNumber(e) ? e : 0;
        }
        var ea = Sr.extend({
            setDimensions: function () {
              var e = this;
              (e.width = e.maxWidth),
                (e.height = e.maxHeight),
                (e.paddingTop = Hr(e.options) / 2),
                (e.xCenter = Math.floor(e.width / 2)),
                (e.yCenter = Math.floor((e.height - e.paddingTop) / 2)),
                (e.drawingArea =
                  Math.min(e.height - e.paddingTop, e.width) / 2);
            },
            determineDataLimits: function () {
              var e = this,
                t = e.chart,
                n = Number.POSITIVE_INFINITY,
                r = Number.NEGATIVE_INFINITY;
              ie.each(t.data.datasets, function (a, i) {
                if (t.isDatasetVisible(i)) {
                  var o = t.getDatasetMeta(i);
                  ie.each(a.data, function (t, a) {
                    var i = +e.getRightValue(t);
                    isNaN(i) ||
                      o.data[a].hidden ||
                      ((n = Math.min(i, n)), (r = Math.max(i, r)));
                  });
                }
              }),
                (e.min = n === Number.POSITIVE_INFINITY ? 0 : n),
                (e.max = r === Number.NEGATIVE_INFINITY ? 0 : r),
                e.handleTickRangeOptions();
            },
            _computeTickLimit: function () {
              return Math.ceil(this.drawingArea / Hr(this.options));
            },
            convertTicksToLabels: function () {
              var e = this;
              Sr.prototype.convertTicksToLabels.call(e),
                (e.pointLabels = e.chart.data.labels.map(function () {
                  var t = ie.callback(
                    e.options.pointLabels.callback,
                    arguments,
                    e
                  );
                  return t || 0 === t ? t : "";
                }));
            },
            getLabelForIndex: function (e, t) {
              return +this.getRightValue(this.chart.data.datasets[t].data[e]);
            },
            fit: function () {
              var e = this,
                t = e.options;
              t.display && t.pointLabels.display
                ? Gr(e)
                : e.setCenterPoint(0, 0, 0, 0);
            },
            setReductions: function (e, t, n) {
              var r = this,
                a = t.l / Math.sin(n.l),
                i = Math.max(t.r - r.width, 0) / Math.sin(n.r),
                o = -t.t / Math.cos(n.t),
                l =
                  -Math.max(t.b - (r.height - r.paddingTop), 0) / Math.cos(n.b);
              (a = Jr(a)),
                (i = Jr(i)),
                (o = Jr(o)),
                (l = Jr(l)),
                (r.drawingArea = Math.min(
                  Math.floor(e - (a + i) / 2),
                  Math.floor(e - (o + l) / 2)
                )),
                r.setCenterPoint(a, i, o, l);
            },
            setCenterPoint: function (e, t, n, r) {
              var a = this,
                i = a.width - t - a.drawingArea,
                o = e + a.drawingArea,
                l = n + a.drawingArea,
                s = a.height - a.paddingTop - r - a.drawingArea;
              (a.xCenter = Math.floor((o + i) / 2 + a.left)),
                (a.yCenter = Math.floor((l + s) / 2 + a.top + a.paddingTop));
            },
            getIndexAngle: function (e) {
              var t = this.chart,
                n =
                  (e * (360 / t.data.labels.length) +
                    ((t.options || {}).startAngle || 0)) %
                  360;
              return ((n < 0 ? n + 360 : n) * Math.PI * 2) / 360;
            },
            getDistanceFromCenterForValue: function (e) {
              var t = this;
              if (ie.isNullOrUndef(e)) return NaN;
              var n = t.drawingArea / (t.max - t.min);
              return t.options.ticks.reverse
                ? (t.max - e) * n
                : (e - t.min) * n;
            },
            getPointPosition: function (e, t) {
              var n = this,
                r = n.getIndexAngle(e) - Math.PI / 2;
              return {
                x: Math.cos(r) * t + n.xCenter,
                y: Math.sin(r) * t + n.yCenter,
              };
            },
            getPointPositionForValue: function (e, t) {
              return this.getPointPosition(
                e,
                this.getDistanceFromCenterForValue(t)
              );
            },
            getBasePosition: function (e) {
              var t = this,
                n = t.min,
                r = t.max;
              return t.getPointPositionForValue(
                e || 0,
                t.beginAtZero ? 0 : n < 0 && r < 0 ? r : n > 0 && r > 0 ? n : 0
              );
            },
            _drawGrid: function () {
              var e,
                t,
                n,
                r = this,
                a = r.ctx,
                i = r.options,
                o = i.gridLines,
                l = i.angleLines,
                s = Wr(l.lineWidth, o.lineWidth),
                u = Wr(l.color, o.color);
              if (
                (i.pointLabels.display && Zr(r),
                o.display &&
                  ie.each(r.ticks, function (e, n) {
                    0 !== n &&
                      ((t = r.getDistanceFromCenterForValue(
                        r.ticksAsNumbers[n]
                      )),
                      Xr(r, o, t, n));
                  }),
                l.display && s && u)
              ) {
                for (
                  a.save(),
                    a.lineWidth = s,
                    a.strokeStyle = u,
                    a.setLineDash &&
                      (a.setLineDash(Yr([l.borderDash, o.borderDash, []])),
                      (a.lineDashOffset = Yr([
                        l.borderDashOffset,
                        o.borderDashOffset,
                        0,
                      ]))),
                    e = r.chart.data.labels.length - 1;
                  e >= 0;
                  e--
                )
                  (t = r.getDistanceFromCenterForValue(
                    i.ticks.reverse ? r.min : r.max
                  )),
                    (n = r.getPointPosition(e, t)),
                    a.beginPath(),
                    a.moveTo(r.xCenter, r.yCenter),
                    a.lineTo(n.x, n.y),
                    a.stroke();
                a.restore();
              }
            },
            _drawLabels: function () {
              var e = this,
                t = e.ctx,
                n = e.options.ticks;
              if (n.display) {
                var r,
                  a,
                  i = e.getIndexAngle(0),
                  o = ie.options._parseFont(n),
                  l = Wr(n.fontColor, Z.global.defaultFontColor);
                t.save(),
                  (t.font = o.string),
                  t.translate(e.xCenter, e.yCenter),
                  t.rotate(i),
                  (t.textAlign = "center"),
                  (t.textBaseline = "middle"),
                  ie.each(e.ticks, function (i, s) {
                    (0 !== s || n.reverse) &&
                      ((r = e.getDistanceFromCenterForValue(
                        e.ticksAsNumbers[s]
                      )),
                      n.showLabelBackdrop &&
                        ((a = t.measureText(i).width),
                        (t.fillStyle = n.backdropColor),
                        t.fillRect(
                          -a / 2 - n.backdropPaddingX,
                          -r - o.size / 2 - n.backdropPaddingY,
                          a + 2 * n.backdropPaddingX,
                          o.size + 2 * n.backdropPaddingY
                        )),
                      (t.fillStyle = l),
                      t.fillText(i, 0, -r));
                  }),
                  t.restore();
              }
            },
            _drawTitle: ie.noop,
          }),
          ta = Br;
        ea._defaults = ta;
        var na = ie._deprecated,
          ra = ie.options.resolve,
          aa = ie.valueOrDefault,
          ia = Number.MIN_SAFE_INTEGER || -9007199254740991,
          oa = Number.MAX_SAFE_INTEGER || 9007199254740991,
          la = {
            millisecond: { common: !0, size: 1, steps: 1e3 },
            second: { common: !0, size: 1e3, steps: 60 },
            minute: { common: !0, size: 6e4, steps: 60 },
            hour: { common: !0, size: 36e5, steps: 24 },
            day: { common: !0, size: 864e5, steps: 30 },
            week: { common: !1, size: 6048e5, steps: 4 },
            month: { common: !0, size: 2628e6, steps: 12 },
            quarter: { common: !1, size: 7884e6, steps: 4 },
            year: { common: !0, size: 3154e7 },
          },
          sa = Object.keys(la);
        function ua(e, t) {
          return e - t;
        }
        function ca(e) {
          var t,
            n,
            r,
            a = {},
            i = [];
          for (t = 0, n = e.length; t < n; ++t)
            a[(r = e[t])] || ((a[r] = !0), i.push(r));
          return i;
        }
        function fa(e) {
          return ie.valueOrDefault(e.time.min, e.ticks.min);
        }
        function da(e) {
          return ie.valueOrDefault(e.time.max, e.ticks.max);
        }
        function ha(e, t, n, r) {
          if ("linear" === r || !e.length)
            return [
              { time: t, pos: 0 },
              { time: n, pos: 1 },
            ];
          var a,
            i,
            o,
            l,
            s,
            u = [],
            c = [t];
          for (a = 0, i = e.length; a < i; ++a)
            (l = e[a]) > t && l < n && c.push(l);
          for (c.push(n), a = 0, i = c.length; a < i; ++a)
            (s = c[a + 1]),
              (o = c[a - 1]),
              (l = c[a]),
              (void 0 !== o && void 0 !== s && Math.round((s + o) / 2) === l) ||
                u.push({ time: l, pos: a / (i - 1) });
          return u;
        }
        function pa(e, t, n) {
          for (var r, a, i, o = 0, l = e.length - 1; o >= 0 && o <= l; ) {
            if (((a = e[(r = (o + l) >> 1) - 1] || null), (i = e[r]), !a))
              return { lo: null, hi: i };
            if (i[t] < n) o = r + 1;
            else {
              if (!(a[t] > n)) return { lo: a, hi: i };
              l = r - 1;
            }
          }
          return { lo: i, hi: null };
        }
        function ga(e, t, n, r) {
          var a = pa(e, t, n),
            i = a.lo ? (a.hi ? a.lo : e[e.length - 2]) : e[0],
            o = a.lo ? (a.hi ? a.hi : e[e.length - 1]) : e[1],
            l = o[t] - i[t],
            s = l ? (n - i[t]) / l : 0,
            u = (o[r] - i[r]) * s;
          return i[r] + u;
        }
        function ma(e, t) {
          var n = e._adapter,
            r = e.options.time,
            a = r.parser,
            i = a || r.format,
            o = t;
          return (
            "function" === typeof a && (o = a(o)),
            ie.isFinite(o) ||
              (o = "string" === typeof i ? n.parse(o, i) : n.parse(o)),
            null !== o
              ? +o
              : (a ||
                  "function" !== typeof i ||
                  ((o = i(t)), ie.isFinite(o) || (o = n.parse(o))),
                o)
          );
        }
        function va(e, t) {
          if (ie.isNullOrUndef(t)) return null;
          var n = e.options.time,
            r = ma(e, e.getRightValue(t));
          return (
            null === r || (n.round && (r = +e._adapter.startOf(r, n.round))), r
          );
        }
        function ya(e, t, n, r) {
          var a,
            i,
            o,
            l = sa.length;
          for (a = sa.indexOf(e); a < l - 1; ++a)
            if (
              ((o = (i = la[sa[a]]).steps ? i.steps : oa),
              i.common && Math.ceil((n - t) / (o * i.size)) <= r)
            )
              return sa[a];
          return sa[l - 1];
        }
        function ba(e, t, n, r, a) {
          var i, o;
          for (i = sa.length - 1; i >= sa.indexOf(n); i--)
            if (
              ((o = sa[i]), la[o].common && e._adapter.diff(a, r, o) >= t - 1)
            )
              return o;
          return sa[n ? sa.indexOf(n) : 0];
        }
        function xa(e) {
          for (var t = sa.indexOf(e) + 1, n = sa.length; t < n; ++t)
            if (la[sa[t]].common) return sa[t];
        }
        function _a(e, t, n, r) {
          var a,
            i = e._adapter,
            o = e.options,
            l = o.time,
            s = l.unit || ya(l.minUnit, t, n, r),
            u = ra([l.stepSize, l.unitStepSize, 1]),
            c = "week" === s && l.isoWeekday,
            f = t,
            d = [];
          if (
            (c && (f = +i.startOf(f, "isoWeek", c)),
            (f = +i.startOf(f, c ? "day" : s)),
            i.diff(n, t, s) > 1e5 * u)
          )
            throw (
              t +
              " and " +
              n +
              " are too far apart with stepSize of " +
              u +
              " " +
              s
            );
          for (a = f; a < n; a = +i.add(a, u, s)) d.push(a);
          return (a !== n && "ticks" !== o.bounds) || d.push(a), d;
        }
        function wa(e, t, n, r, a) {
          var i,
            o,
            l = 0,
            s = 0;
          return (
            a.offset &&
              t.length &&
              ((i = ga(e, "time", t[0], "pos")),
              (l =
                1 === t.length ? 1 - i : (ga(e, "time", t[1], "pos") - i) / 2),
              (o = ga(e, "time", t[t.length - 1], "pos")),
              (s =
                1 === t.length
                  ? o
                  : (o - ga(e, "time", t[t.length - 2], "pos")) / 2)),
            { start: l, end: s, factor: 1 / (l + 1 + s) }
          );
        }
        function ka(e, t, n, r) {
          var a,
            i,
            o = e._adapter,
            l = +o.startOf(t[0].value, r),
            s = t[t.length - 1].value;
          for (a = l; a <= s; a = +o.add(a, 1, r))
            (i = n[a]) >= 0 && (t[i].major = !0);
          return t;
        }
        function Sa(e, t, n) {
          var r,
            a,
            i = [],
            o = {},
            l = t.length;
          for (r = 0; r < l; ++r)
            (o[(a = t[r])] = r), i.push({ value: a, major: !1 });
          return 0 !== l && n ? ka(e, i, o, n) : i;
        }
        var Ca = {
            position: "bottom",
            distribution: "linear",
            bounds: "data",
            adapters: {},
            time: {
              parser: !1,
              unit: !1,
              round: !1,
              displayFormat: !1,
              isoWeekday: !1,
              minUnit: "millisecond",
              displayFormats: {},
            },
            ticks: { autoSkip: !1, source: "auto", major: { enabled: !1 } },
          },
          Ma = mr.extend({
            initialize: function () {
              this.mergeTicksOptions(), mr.prototype.initialize.call(this);
            },
            update: function () {
              var e = this,
                t = e.options,
                n = t.time || (t.time = {}),
                r = (e._adapter = new Kn._date(t.adapters.date));
              return (
                na("time scale", n.format, "time.format", "time.parser"),
                na("time scale", n.min, "time.min", "ticks.min"),
                na("time scale", n.max, "time.max", "ticks.max"),
                ie.mergeIf(n.displayFormats, r.formats()),
                mr.prototype.update.apply(e, arguments)
              );
            },
            getRightValue: function (e) {
              return (
                e && void 0 !== e.t && (e = e.t),
                mr.prototype.getRightValue.call(this, e)
              );
            },
            determineDataLimits: function () {
              var e,
                t,
                n,
                r,
                a,
                i,
                o,
                l = this,
                s = l.chart,
                u = l._adapter,
                c = l.options,
                f = c.time.unit || "day",
                d = oa,
                h = ia,
                p = [],
                g = [],
                m = [],
                v = l._getLabels();
              for (e = 0, n = v.length; e < n; ++e) m.push(va(l, v[e]));
              for (e = 0, n = (s.data.datasets || []).length; e < n; ++e)
                if (s.isDatasetVisible(e))
                  if (((a = s.data.datasets[e].data), ie.isObject(a[0])))
                    for (g[e] = [], t = 0, r = a.length; t < r; ++t)
                      (i = va(l, a[t])), p.push(i), (g[e][t] = i);
                  else (g[e] = m.slice(0)), o || ((p = p.concat(m)), (o = !0));
                else g[e] = [];
              m.length &&
                ((d = Math.min(d, m[0])), (h = Math.max(h, m[m.length - 1]))),
                p.length &&
                  ((p = n > 1 ? ca(p).sort(ua) : p.sort(ua)),
                  (d = Math.min(d, p[0])),
                  (h = Math.max(h, p[p.length - 1]))),
                (d = va(l, fa(c)) || d),
                (h = va(l, da(c)) || h),
                (d = d === oa ? +u.startOf(Date.now(), f) : d),
                (h = h === ia ? +u.endOf(Date.now(), f) + 1 : h),
                (l.min = Math.min(d, h)),
                (l.max = Math.max(d + 1, h)),
                (l._table = []),
                (l._timestamps = { data: p, datasets: g, labels: m });
            },
            buildTicks: function () {
              var e,
                t,
                n,
                r = this,
                a = r.min,
                i = r.max,
                o = r.options,
                l = o.ticks,
                s = o.time,
                u = r._timestamps,
                c = [],
                f = r.getLabelCapacity(a),
                d = l.source,
                h = o.distribution;
              for (
                u =
                  "data" === d || ("auto" === d && "series" === h)
                    ? u.data
                    : "labels" === d
                    ? u.labels
                    : _a(r, a, i, f),
                  "ticks" === o.bounds &&
                    u.length &&
                    ((a = u[0]), (i = u[u.length - 1])),
                  a = va(r, fa(o)) || a,
                  i = va(r, da(o)) || i,
                  e = 0,
                  t = u.length;
                e < t;
                ++e
              )
                (n = u[e]) >= a && n <= i && c.push(n);
              return (
                (r.min = a),
                (r.max = i),
                (r._unit =
                  s.unit ||
                  (l.autoSkip
                    ? ya(s.minUnit, r.min, r.max, f)
                    : ba(r, c.length, s.minUnit, r.min, r.max))),
                (r._majorUnit =
                  l.major.enabled && "year" !== r._unit ? xa(r._unit) : void 0),
                (r._table = ha(r._timestamps.data, a, i, h)),
                (r._offsets = wa(r._table, c, a, i, o)),
                l.reverse && c.reverse(),
                Sa(r, c, r._majorUnit)
              );
            },
            getLabelForIndex: function (e, t) {
              var n = this,
                r = n._adapter,
                a = n.chart.data,
                i = n.options.time,
                o = a.labels && e < a.labels.length ? a.labels[e] : "",
                l = a.datasets[t].data[e];
              return (
                ie.isObject(l) && (o = n.getRightValue(l)),
                i.tooltipFormat
                  ? r.format(ma(n, o), i.tooltipFormat)
                  : "string" === typeof o
                  ? o
                  : r.format(ma(n, o), i.displayFormats.datetime)
              );
            },
            tickFormatFunction: function (e, t, n, r) {
              var a = this,
                i = a._adapter,
                o = a.options,
                l = o.time.displayFormats,
                s = l[a._unit],
                u = a._majorUnit,
                c = l[u],
                f = n[t],
                d = o.ticks,
                h = u && c && f && f.major,
                p = i.format(e, r || (h ? c : s)),
                g = h ? d.major : d.minor,
                m = ra([
                  g.callback,
                  g.userCallback,
                  d.callback,
                  d.userCallback,
                ]);
              return m ? m(p, t, n) : p;
            },
            convertTicksToLabels: function (e) {
              var t,
                n,
                r = [];
              for (t = 0, n = e.length; t < n; ++t)
                r.push(this.tickFormatFunction(e[t].value, t, e));
              return r;
            },
            getPixelForOffset: function (e) {
              var t = this,
                n = t._offsets,
                r = ga(t._table, "time", e, "pos");
              return t.getPixelForDecimal((n.start + r) * n.factor);
            },
            getPixelForValue: function (e, t, n) {
              var r = this,
                a = null;
              if (
                (void 0 !== t &&
                  void 0 !== n &&
                  (a = r._timestamps.datasets[n][t]),
                null === a && (a = va(r, e)),
                null !== a)
              )
                return r.getPixelForOffset(a);
            },
            getPixelForTick: function (e) {
              var t = this.getTicks();
              return e >= 0 && e < t.length
                ? this.getPixelForOffset(t[e].value)
                : null;
            },
            getValueForPixel: function (e) {
              var t = this,
                n = t._offsets,
                r = t.getDecimalForPixel(e) / n.factor - n.end,
                a = ga(t._table, "pos", r, "time");
              return t._adapter._create(a);
            },
            _getLabelSize: function (e) {
              var t = this,
                n = t.options.ticks,
                r = t.ctx.measureText(e).width,
                a = ie.toRadians(
                  t.isHorizontal() ? n.maxRotation : n.minRotation
                ),
                i = Math.cos(a),
                o = Math.sin(a),
                l = aa(n.fontSize, Z.global.defaultFontSize);
              return { w: r * i + l * o, h: r * o + l * i };
            },
            getLabelWidth: function (e) {
              return this._getLabelSize(e).w;
            },
            getLabelCapacity: function (e) {
              var t = this,
                n = t.options.time,
                r = n.displayFormats,
                a = r[n.unit] || r.millisecond,
                i = t.tickFormatFunction(e, 0, Sa(t, [e], t._majorUnit), a),
                o = t._getLabelSize(i),
                l = Math.floor(
                  t.isHorizontal() ? t.width / o.w : t.height / o.h
                );
              return t.options.offset && l--, l > 0 ? l : 1;
            },
          }),
          Oa = Ca;
        Ma._defaults = Oa;
        var Pa = {
            category: br,
            linear: Tr,
            logarithmic: jr,
            radialLinear: ea,
            time: Ma,
          },
          Ea = {
            datetime: "MMM D, YYYY, h:mm:ss a",
            millisecond: "h:mm:ss.SSS a",
            second: "h:mm:ss a",
            minute: "h:mm a",
            hour: "hA",
            day: "MMM D",
            week: "ll",
            month: "MMM YYYY",
            quarter: "[Q]Q - YYYY",
            year: "YYYY",
          };
        Kn._date.override(
          "function" === typeof e
            ? {
                _id: "moment",
                formats: function () {
                  return Ea;
                },
                parse: function (t, n) {
                  return (
                    "string" === typeof t && "string" === typeof n
                      ? (t = e(t, n))
                      : t instanceof e || (t = e(t)),
                    t.isValid() ? t.valueOf() : null
                  );
                },
                format: function (t, n) {
                  return e(t).format(n);
                },
                add: function (t, n, r) {
                  return e(t).add(n, r).valueOf();
                },
                diff: function (t, n, r) {
                  return e(t).diff(e(n), r);
                },
                startOf: function (t, n, r) {
                  return (
                    (t = e(t)),
                    "isoWeek" === n
                      ? t.isoWeekday(r).valueOf()
                      : t.startOf(n).valueOf()
                  );
                },
                endOf: function (t, n) {
                  return e(t).endOf(n).valueOf();
                },
                _create: function (t) {
                  return e(t);
                },
              }
            : {}
        ),
          Z._set("global", { plugins: { filler: { propagate: !0 } } });
        var Da = {
          dataset: function (e) {
            var t = e.fill,
              n = e.chart,
              r = n.getDatasetMeta(t),
              a = (r && n.isDatasetVisible(t) && r.dataset._children) || [],
              i = a.length || 0;
            return i
              ? function (e, t) {
                  return (t < i && a[t]._view) || null;
                }
              : null;
          },
          boundary: function (e) {
            var t = e.boundary,
              n = t ? t.x : null,
              r = t ? t.y : null;
            return ie.isArray(t)
              ? function (e, n) {
                  return t[n];
                }
              : function (e) {
                  return { x: null === n ? e.x : n, y: null === r ? e.y : r };
                };
          },
        };
        function Ta(e, t, n) {
          var r,
            a = e._model || {},
            i = a.fill;
          if (
            (void 0 === i && (i = !!a.backgroundColor), !1 === i || null === i)
          )
            return !1;
          if (!0 === i) return "origin";
          if (((r = parseFloat(i, 10)), isFinite(r) && Math.floor(r) === r))
            return (
              ("-" !== i[0] && "+" !== i[0]) || (r = t + r),
              !(r === t || r < 0 || r >= n) && r
            );
          switch (i) {
            case "bottom":
              return "start";
            case "top":
              return "end";
            case "zero":
              return "origin";
            case "origin":
            case "start":
            case "end":
              return i;
            default:
              return !1;
          }
        }
        function Aa(e) {
          var t,
            n = e.el._model || {},
            r = e.el._scale || {},
            a = e.fill,
            i = null;
          if (isFinite(a)) return null;
          if (
            ("start" === a
              ? (i = void 0 === n.scaleBottom ? r.bottom : n.scaleBottom)
              : "end" === a
              ? (i = void 0 === n.scaleTop ? r.top : n.scaleTop)
              : void 0 !== n.scaleZero
              ? (i = n.scaleZero)
              : r.getBasePixel && (i = r.getBasePixel()),
            void 0 !== i && null !== i)
          ) {
            if (void 0 !== i.x && void 0 !== i.y) return i;
            if (ie.isFinite(i))
              return { x: (t = r.isHorizontal()) ? i : null, y: t ? null : i };
          }
          return null;
        }
        function Na(e) {
          var t,
            n,
            r,
            a,
            i,
            o = e.el._scale,
            l = o.options,
            s = o.chart.data.labels.length,
            u = e.fill,
            c = [];
          if (!s) return null;
          for (
            t = l.ticks.reverse ? o.max : o.min,
              n = l.ticks.reverse ? o.min : o.max,
              r = o.getPointPositionForValue(0, t),
              a = 0;
            a < s;
            ++a
          )
            (i =
              "start" === u || "end" === u
                ? o.getPointPositionForValue(a, "start" === u ? t : n)
                : o.getBasePosition(a)),
              l.gridLines.circular &&
                ((i.cx = r.x),
                (i.cy = r.y),
                (i.angle = o.getIndexAngle(a) - Math.PI / 2)),
              c.push(i);
          return c;
        }
        function Ia(e) {
          return (e.el._scale || {}).getPointPositionForValue ? Na(e) : Aa(e);
        }
        function Ra(e, t, n) {
          var r,
            a = e[t].fill,
            i = [t];
          if (!n) return a;
          for (; !1 !== a && -1 === i.indexOf(a); ) {
            if (!isFinite(a)) return a;
            if (!(r = e[a])) return !1;
            if (r.visible) return a;
            i.push(a), (a = r.fill);
          }
          return !1;
        }
        function La(e) {
          var t = e.fill,
            n = "dataset";
          return !1 === t ? null : (isFinite(t) || (n = "boundary"), Da[n](e));
        }
        function Fa(e) {
          return e && !e.skip;
        }
        function ja(e, t, n, r, a) {
          var i, o, l, s;
          if (r && a) {
            for (e.moveTo(t[0].x, t[0].y), i = 1; i < r; ++i)
              ie.canvas.lineTo(e, t[i - 1], t[i]);
            if (void 0 === n[0].angle)
              for (e.lineTo(n[a - 1].x, n[a - 1].y), i = a - 1; i > 0; --i)
                ie.canvas.lineTo(e, n[i], n[i - 1], !0);
            else
              for (
                o = n[0].cx,
                  l = n[0].cy,
                  s = Math.sqrt(
                    Math.pow(n[0].x - o, 2) + Math.pow(n[0].y - l, 2)
                  ),
                  i = a - 1;
                i > 0;
                --i
              )
                e.arc(o, l, s, n[i].angle, n[i - 1].angle, !0);
          }
        }
        function za(e, t, n, r, a, i) {
          var o,
            l,
            s,
            u,
            c,
            f,
            d,
            h,
            p = t.length,
            g = r.spanGaps,
            m = [],
            v = [],
            y = 0,
            b = 0;
          for (e.beginPath(), o = 0, l = p; o < l; ++o)
            (c = n((u = t[(s = o % p)]._view), s, r)),
              (f = Fa(u)),
              (d = Fa(c)),
              i && void 0 === h && f && (l = p + (h = o + 1)),
              f && d
                ? ((y = m.push(u)), (b = v.push(c)))
                : y &&
                  b &&
                  (g
                    ? (f && m.push(u), d && v.push(c))
                    : (ja(e, m, v, y, b), (y = b = 0), (m = []), (v = [])));
          ja(e, m, v, y, b), e.closePath(), (e.fillStyle = a), e.fill();
        }
        var Wa = {
            id: "filler",
            afterDatasetsUpdate: function (e, t) {
              var n,
                r,
                a,
                i,
                o = (e.data.datasets || []).length,
                l = t.propagate,
                s = [];
              for (r = 0; r < o; ++r)
                (i = null),
                  (a = (n = e.getDatasetMeta(r)).dataset) &&
                    a._model &&
                    a instanceof Ue.Line &&
                    (i = {
                      visible: e.isDatasetVisible(r),
                      fill: Ta(a, r, o),
                      chart: e,
                      el: a,
                    }),
                  (n.$filler = i),
                  s.push(i);
              for (r = 0; r < o; ++r)
                (i = s[r]) &&
                  ((i.fill = Ra(s, r, l)),
                  (i.boundary = Ia(i)),
                  (i.mapper = La(i)));
            },
            beforeDatasetsDraw: function (e) {
              var t,
                n,
                r,
                a,
                i,
                o,
                l,
                s = e._getSortedVisibleDatasetMetas(),
                u = e.ctx;
              for (n = s.length - 1; n >= 0; --n)
                (t = s[n].$filler) &&
                  t.visible &&
                  ((a = (r = t.el)._view),
                  (i = r._children || []),
                  (o = t.mapper),
                  (l = a.backgroundColor || Z.global.defaultColor),
                  o &&
                    l &&
                    i.length &&
                    (ie.canvas.clipArea(u, e.chartArea),
                    za(u, i, o, a, l, r._loop),
                    ie.canvas.unclipArea(u)));
            },
          },
          Va = ie.rtl.getRtlAdapter,
          Ya = ie.noop,
          Ba = ie.valueOrDefault;
        function Ha(e, t) {
          return e.usePointStyle && e.boxWidth > t ? t : e.boxWidth;
        }
        Z._set("global", {
          legend: {
            display: !0,
            position: "top",
            align: "center",
            fullWidth: !0,
            reverse: !1,
            weight: 1e3,
            onClick: function (e, t) {
              var n = t.datasetIndex,
                r = this.chart,
                a = r.getDatasetMeta(n);
              (a.hidden =
                null === a.hidden ? !r.data.datasets[n].hidden : null),
                r.update();
            },
            onHover: null,
            onLeave: null,
            labels: {
              boxWidth: 40,
              padding: 10,
              generateLabels: function (e) {
                var t = e.data.datasets,
                  n = e.options.legend || {},
                  r = n.labels && n.labels.usePointStyle;
                return e._getSortedDatasetMetas().map(function (n) {
                  var a = n.controller.getStyle(r ? 0 : void 0);
                  return {
                    text: t[n.index].label,
                    fillStyle: a.backgroundColor,
                    hidden: !e.isDatasetVisible(n.index),
                    lineCap: a.borderCapStyle,
                    lineDash: a.borderDash,
                    lineDashOffset: a.borderDashOffset,
                    lineJoin: a.borderJoinStyle,
                    lineWidth: a.borderWidth,
                    strokeStyle: a.borderColor,
                    pointStyle: a.pointStyle,
                    rotation: a.rotation,
                    datasetIndex: n.index,
                  };
                }, this);
              },
            },
          },
          legendCallback: function (e) {
            var t,
              n,
              r,
              a = document.createElement("ul"),
              i = e.data.datasets;
            for (
              a.setAttribute("class", e.id + "-legend"), t = 0, n = i.length;
              t < n;
              t++
            )
              ((r = a.appendChild(document.createElement("li"))).appendChild(
                document.createElement("span")
              ).style.backgroundColor = i[t].backgroundColor),
                i[t].label &&
                  r.appendChild(document.createTextNode(i[t].label));
            return a.outerHTML;
          },
        });
        var Ua = he.extend({
          initialize: function (e) {
            var t = this;
            ie.extend(t, e),
              (t.legendHitBoxes = []),
              (t._hoveredItem = null),
              (t.doughnutMode = !1);
          },
          beforeUpdate: Ya,
          update: function (e, t, n) {
            var r = this;
            return (
              r.beforeUpdate(),
              (r.maxWidth = e),
              (r.maxHeight = t),
              (r.margins = n),
              r.beforeSetDimensions(),
              r.setDimensions(),
              r.afterSetDimensions(),
              r.beforeBuildLabels(),
              r.buildLabels(),
              r.afterBuildLabels(),
              r.beforeFit(),
              r.fit(),
              r.afterFit(),
              r.afterUpdate(),
              r.minSize
            );
          },
          afterUpdate: Ya,
          beforeSetDimensions: Ya,
          setDimensions: function () {
            var e = this;
            e.isHorizontal()
              ? ((e.width = e.maxWidth), (e.left = 0), (e.right = e.width))
              : ((e.height = e.maxHeight), (e.top = 0), (e.bottom = e.height)),
              (e.paddingLeft = 0),
              (e.paddingTop = 0),
              (e.paddingRight = 0),
              (e.paddingBottom = 0),
              (e.minSize = { width: 0, height: 0 });
          },
          afterSetDimensions: Ya,
          beforeBuildLabels: Ya,
          buildLabels: function () {
            var e = this,
              t = e.options.labels || {},
              n = ie.callback(t.generateLabels, [e.chart], e) || [];
            t.filter &&
              (n = n.filter(function (n) {
                return t.filter(n, e.chart.data);
              })),
              e.options.reverse && n.reverse(),
              (e.legendItems = n);
          },
          afterBuildLabels: Ya,
          beforeFit: Ya,
          fit: function () {
            var e = this,
              t = e.options,
              n = t.labels,
              r = t.display,
              a = e.ctx,
              i = ie.options._parseFont(n),
              o = i.size,
              l = (e.legendHitBoxes = []),
              s = e.minSize,
              u = e.isHorizontal();
            if (
              (u
                ? ((s.width = e.maxWidth), (s.height = r ? 10 : 0))
                : ((s.width = r ? 10 : 0), (s.height = e.maxHeight)),
              r)
            ) {
              if (((a.font = i.string), u)) {
                var c = (e.lineWidths = [0]),
                  f = 0;
                (a.textAlign = "left"),
                  (a.textBaseline = "middle"),
                  ie.each(e.legendItems, function (e, t) {
                    var r = Ha(n, o) + o / 2 + a.measureText(e.text).width;
                    (0 === t ||
                      c[c.length - 1] + r + 2 * n.padding > s.width) &&
                      ((f += o + n.padding),
                      (c[c.length - (t > 0 ? 0 : 1)] = 0)),
                      (l[t] = { left: 0, top: 0, width: r, height: o }),
                      (c[c.length - 1] += r + n.padding);
                  }),
                  (s.height += f);
              } else {
                var d = n.padding,
                  h = (e.columnWidths = []),
                  p = (e.columnHeights = []),
                  g = n.padding,
                  m = 0,
                  v = 0;
                ie.each(e.legendItems, function (e, t) {
                  var r = Ha(n, o) + o / 2 + a.measureText(e.text).width;
                  t > 0 &&
                    v + o + 2 * d > s.height &&
                    ((g += m + n.padding),
                    h.push(m),
                    p.push(v),
                    (m = 0),
                    (v = 0)),
                    (m = Math.max(m, r)),
                    (v += o + d),
                    (l[t] = { left: 0, top: 0, width: r, height: o });
                }),
                  (g += m),
                  h.push(m),
                  p.push(v),
                  (s.width += g);
              }
              (e.width = s.width), (e.height = s.height);
            } else e.width = s.width = e.height = s.height = 0;
          },
          afterFit: Ya,
          isHorizontal: function () {
            return (
              "top" === this.options.position ||
              "bottom" === this.options.position
            );
          },
          draw: function () {
            var e = this,
              t = e.options,
              n = t.labels,
              r = Z.global,
              a = r.defaultColor,
              i = r.elements.line,
              o = e.height,
              l = e.columnHeights,
              s = e.width,
              u = e.lineWidths;
            if (t.display) {
              var c,
                f = Va(t.rtl, e.left, e.minSize.width),
                d = e.ctx,
                h = Ba(n.fontColor, r.defaultFontColor),
                p = ie.options._parseFont(n),
                g = p.size;
              (d.textAlign = f.textAlign("left")),
                (d.textBaseline = "middle"),
                (d.lineWidth = 0.5),
                (d.strokeStyle = h),
                (d.fillStyle = h),
                (d.font = p.string);
              var m = Ha(n, g),
                v = e.legendHitBoxes,
                y = function (e, t, r) {
                  if (!(isNaN(m) || m <= 0)) {
                    d.save();
                    var o = Ba(r.lineWidth, i.borderWidth);
                    if (
                      ((d.fillStyle = Ba(r.fillStyle, a)),
                      (d.lineCap = Ba(r.lineCap, i.borderCapStyle)),
                      (d.lineDashOffset = Ba(
                        r.lineDashOffset,
                        i.borderDashOffset
                      )),
                      (d.lineJoin = Ba(r.lineJoin, i.borderJoinStyle)),
                      (d.lineWidth = o),
                      (d.strokeStyle = Ba(r.strokeStyle, a)),
                      d.setLineDash &&
                        d.setLineDash(Ba(r.lineDash, i.borderDash)),
                      n && n.usePointStyle)
                    ) {
                      var l = (m * Math.SQRT2) / 2,
                        s = f.xPlus(e, m / 2),
                        u = t + g / 2;
                      ie.canvas.drawPoint(d, r.pointStyle, l, s, u, r.rotation);
                    } else
                      d.fillRect(f.leftForLtr(e, m), t, m, g),
                        0 !== o && d.strokeRect(f.leftForLtr(e, m), t, m, g);
                    d.restore();
                  }
                },
                b = function (e, t, n, r) {
                  var a = g / 2,
                    i = f.xPlus(e, m + a),
                    o = t + a;
                  d.fillText(n.text, i, o),
                    n.hidden &&
                      (d.beginPath(),
                      (d.lineWidth = 2),
                      d.moveTo(i, o),
                      d.lineTo(f.xPlus(i, r), o),
                      d.stroke());
                },
                x = function (e, r) {
                  switch (t.align) {
                    case "start":
                      return n.padding;
                    case "end":
                      return e - r;
                    default:
                      return (e - r + n.padding) / 2;
                  }
                },
                _ = e.isHorizontal();
              (c = _
                ? { x: e.left + x(s, u[0]), y: e.top + n.padding, line: 0 }
                : { x: e.left + n.padding, y: e.top + x(o, l[0]), line: 0 }),
                ie.rtl.overrideTextDirection(e.ctx, t.textDirection);
              var w = g + n.padding;
              ie.each(e.legendItems, function (t, r) {
                var a = d.measureText(t.text).width,
                  i = m + g / 2 + a,
                  h = c.x,
                  p = c.y;
                f.setWidth(e.minSize.width),
                  _
                    ? r > 0 &&
                      h + i + n.padding > e.left + e.minSize.width &&
                      ((p = c.y += w),
                      c.line++,
                      (h = c.x = e.left + x(s, u[c.line])))
                    : r > 0 &&
                      p + w > e.top + e.minSize.height &&
                      ((h = c.x = h + e.columnWidths[c.line] + n.padding),
                      c.line++,
                      (p = c.y = e.top + x(o, l[c.line])));
                var k = f.x(h);
                y(k, p, t),
                  (v[r].left = f.leftForLtr(k, v[r].width)),
                  (v[r].top = p),
                  b(k, p, t, a),
                  _ ? (c.x += i + n.padding) : (c.y += w);
              }),
                ie.rtl.restoreTextDirection(e.ctx, t.textDirection);
            }
          },
          _getLegendItemAt: function (e, t) {
            var n,
              r,
              a,
              i = this;
            if (e >= i.left && e <= i.right && t >= i.top && t <= i.bottom)
              for (a = i.legendHitBoxes, n = 0; n < a.length; ++n)
                if (
                  e >= (r = a[n]).left &&
                  e <= r.left + r.width &&
                  t >= r.top &&
                  t <= r.top + r.height
                )
                  return i.legendItems[n];
            return null;
          },
          handleEvent: function (e) {
            var t,
              n = this,
              r = n.options,
              a = "mouseup" === e.type ? "click" : e.type;
            if ("mousemove" === a) {
              if (!r.onHover && !r.onLeave) return;
            } else {
              if ("click" !== a) return;
              if (!r.onClick) return;
            }
            (t = n._getLegendItemAt(e.x, e.y)),
              "click" === a
                ? t && r.onClick && r.onClick.call(n, e.native, t)
                : (r.onLeave &&
                    t !== n._hoveredItem &&
                    (n._hoveredItem &&
                      r.onLeave.call(n, e.native, n._hoveredItem),
                    (n._hoveredItem = t)),
                  r.onHover && t && r.onHover.call(n, e.native, t));
          },
        });
        function $a(e, t) {
          var n = new Ua({ ctx: e.ctx, options: t, chart: e });
          Bt.configure(e, n, t), Bt.addBox(e, n), (e.legend = n);
        }
        var Ga = {
            id: "legend",
            _element: Ua,
            beforeInit: function (e) {
              var t = e.options.legend;
              t && $a(e, t);
            },
            beforeUpdate: function (e) {
              var t = e.options.legend,
                n = e.legend;
              t
                ? (ie.mergeIf(t, Z.global.legend),
                  n ? (Bt.configure(e, n, t), (n.options = t)) : $a(e, t))
                : n && (Bt.removeBox(e, n), delete e.legend);
            },
            afterEvent: function (e, t) {
              var n = e.legend;
              n && n.handleEvent(t);
            },
          },
          qa = ie.noop;
        Z._set("global", {
          title: {
            display: !1,
            fontStyle: "bold",
            fullWidth: !0,
            padding: 10,
            position: "top",
            text: "",
            weight: 2e3,
          },
        });
        var Ka = he.extend({
          initialize: function (e) {
            var t = this;
            ie.extend(t, e), (t.legendHitBoxes = []);
          },
          beforeUpdate: qa,
          update: function (e, t, n) {
            var r = this;
            return (
              r.beforeUpdate(),
              (r.maxWidth = e),
              (r.maxHeight = t),
              (r.margins = n),
              r.beforeSetDimensions(),
              r.setDimensions(),
              r.afterSetDimensions(),
              r.beforeBuildLabels(),
              r.buildLabels(),
              r.afterBuildLabels(),
              r.beforeFit(),
              r.fit(),
              r.afterFit(),
              r.afterUpdate(),
              r.minSize
            );
          },
          afterUpdate: qa,
          beforeSetDimensions: qa,
          setDimensions: function () {
            var e = this;
            e.isHorizontal()
              ? ((e.width = e.maxWidth), (e.left = 0), (e.right = e.width))
              : ((e.height = e.maxHeight), (e.top = 0), (e.bottom = e.height)),
              (e.paddingLeft = 0),
              (e.paddingTop = 0),
              (e.paddingRight = 0),
              (e.paddingBottom = 0),
              (e.minSize = { width: 0, height: 0 });
          },
          afterSetDimensions: qa,
          beforeBuildLabels: qa,
          buildLabels: qa,
          afterBuildLabels: qa,
          beforeFit: qa,
          fit: function () {
            var e,
              t = this,
              n = t.options,
              r = (t.minSize = {}),
              a = t.isHorizontal();
            n.display
              ? ((e =
                  (ie.isArray(n.text) ? n.text.length : 1) *
                    ie.options._parseFont(n).lineHeight +
                  2 * n.padding),
                (t.width = r.width = a ? t.maxWidth : e),
                (t.height = r.height = a ? e : t.maxHeight))
              : (t.width = r.width = t.height = r.height = 0);
          },
          afterFit: qa,
          isHorizontal: function () {
            var e = this.options.position;
            return "top" === e || "bottom" === e;
          },
          draw: function () {
            var e = this,
              t = e.ctx,
              n = e.options;
            if (n.display) {
              var r,
                a,
                i,
                o = ie.options._parseFont(n),
                l = o.lineHeight,
                s = l / 2 + n.padding,
                u = 0,
                c = e.top,
                f = e.left,
                d = e.bottom,
                h = e.right;
              (t.fillStyle = ie.valueOrDefault(
                n.fontColor,
                Z.global.defaultFontColor
              )),
                (t.font = o.string),
                e.isHorizontal()
                  ? ((a = f + (h - f) / 2), (i = c + s), (r = h - f))
                  : ((a = "left" === n.position ? f + s : h - s),
                    (i = c + (d - c) / 2),
                    (r = d - c),
                    (u = Math.PI * ("left" === n.position ? -0.5 : 0.5))),
                t.save(),
                t.translate(a, i),
                t.rotate(u),
                (t.textAlign = "center"),
                (t.textBaseline = "middle");
              var p = n.text;
              if (ie.isArray(p))
                for (var g = 0, m = 0; m < p.length; ++m)
                  t.fillText(p[m], 0, g, r), (g += l);
              else t.fillText(p, 0, 0, r);
              t.restore();
            }
          },
        });
        function Qa(e, t) {
          var n = new Ka({ ctx: e.ctx, options: t, chart: e });
          Bt.configure(e, n, t), Bt.addBox(e, n), (e.titleBlock = n);
        }
        var Za = {},
          Xa = Wa,
          Ja = Ga,
          ei = {
            id: "title",
            _element: Ka,
            beforeInit: function (e) {
              var t = e.options.title;
              t && Qa(e, t);
            },
            beforeUpdate: function (e) {
              var t = e.options.title,
                n = e.titleBlock;
              t
                ? (ie.mergeIf(t, Z.global.title),
                  n ? (Bt.configure(e, n, t), (n.options = t)) : Qa(e, t))
                : n && (Bt.removeBox(e, n), delete e.titleBlock);
            },
          };
        for (var ti in ((Za.filler = Xa),
        (Za.legend = Ja),
        (Za.title = ei),
        (Un.helpers = ie),
        $n(),
        (Un._adapters = Kn),
        (Un.Animation = ge),
        (Un.animationService = me),
        (Un.controllers = kt),
        (Un.DatasetController = we),
        (Un.defaults = Z),
        (Un.Element = he),
        (Un.elements = Ue),
        (Un.Interaction = Dt),
        (Un.layouts = Bt),
        (Un.platform = yn),
        (Un.plugins = bn),
        (Un.Scale = mr),
        (Un.scaleService = xn),
        (Un.Ticks = Qn),
        (Un.Tooltip = Rn),
        Un.helpers.each(Pa, function (e, t) {
          Un.scaleService.registerScaleType(t, e, e._defaults);
        }),
        Za))
          Za.hasOwnProperty(ti) && Un.plugins.register(Za[ti]);
        Un.platform.initialize();
        var ni = Un;
        return (
          "undefined" !== typeof window && (window.Chart = Un),
          (Un.Chart = Un),
          (Un.Legend = Za.legend._element),
          (Un.Title = Za.title._element),
          (Un.pluginService = Un.plugins),
          (Un.PluginBase = Un.Element.extend({})),
          (Un.canvasHelpers = Un.helpers.canvas),
          (Un.layoutService = Un.layouts),
          (Un.LinearScaleBase = Sr),
          Un.helpers.each(
            [
              "Bar",
              "Bubble",
              "Doughnut",
              "Line",
              "PolarArea",
              "Radar",
              "Scatter",
            ],
            function (e) {
              Un[e] = function (t, n) {
                return new Un(
                  t,
                  Un.helpers.merge(n || {}, {
                    type: e.charAt(0).toLowerCase() + e.slice(1),
                  })
                );
              };
            }
          ),
          ni
        );
      })(
        (function () {
          try {
            return n(76);
          } catch (e) {}
        })()
      );
    },
    function (e, t, n) {
      (function (e) {
        e.exports = (function () {
          "use strict";
          var t, n;
          function r() {
            return t.apply(null, arguments);
          }
          function a(e) {
            t = e;
          }
          function i(e) {
            return (
              e instanceof Array ||
              "[object Array]" === Object.prototype.toString.call(e)
            );
          }
          function o(e) {
            return (
              null != e &&
              "[object Object]" === Object.prototype.toString.call(e)
            );
          }
          function l(e, t) {
            return Object.prototype.hasOwnProperty.call(e, t);
          }
          function s(e) {
            if (Object.getOwnPropertyNames)
              return 0 === Object.getOwnPropertyNames(e).length;
            var t;
            for (t in e) if (l(e, t)) return !1;
            return !0;
          }
          function u(e) {
            return void 0 === e;
          }
          function c(e) {
            return (
              "number" === typeof e ||
              "[object Number]" === Object.prototype.toString.call(e)
            );
          }
          function f(e) {
            return (
              e instanceof Date ||
              "[object Date]" === Object.prototype.toString.call(e)
            );
          }
          function d(e, t) {
            var n,
              r = [];
            for (n = 0; n < e.length; ++n) r.push(t(e[n], n));
            return r;
          }
          function h(e, t) {
            for (var n in t) l(t, n) && (e[n] = t[n]);
            return (
              l(t, "toString") && (e.toString = t.toString),
              l(t, "valueOf") && (e.valueOf = t.valueOf),
              e
            );
          }
          function p(e, t, n, r) {
            return Gn(e, t, n, r, !0).utc();
          }
          function g() {
            return {
              empty: !1,
              unusedTokens: [],
              unusedInput: [],
              overflow: -2,
              charsLeftOver: 0,
              nullInput: !1,
              invalidEra: null,
              invalidMonth: null,
              invalidFormat: !1,
              userInvalidated: !1,
              iso: !1,
              parsedDateParts: [],
              era: null,
              meridiem: null,
              rfc2822: !1,
              weekdayMismatch: !1,
            };
          }
          function m(e) {
            return null == e._pf && (e._pf = g()), e._pf;
          }
          function v(e) {
            if (null == e._isValid) {
              var t = m(e),
                r = n.call(t.parsedDateParts, function (e) {
                  return null != e;
                }),
                a =
                  !isNaN(e._d.getTime()) &&
                  t.overflow < 0 &&
                  !t.empty &&
                  !t.invalidEra &&
                  !t.invalidMonth &&
                  !t.invalidWeekday &&
                  !t.weekdayMismatch &&
                  !t.nullInput &&
                  !t.invalidFormat &&
                  !t.userInvalidated &&
                  (!t.meridiem || (t.meridiem && r));
              if (
                (e._strict &&
                  (a =
                    a &&
                    0 === t.charsLeftOver &&
                    0 === t.unusedTokens.length &&
                    void 0 === t.bigHour),
                null != Object.isFrozen && Object.isFrozen(e))
              )
                return a;
              e._isValid = a;
            }
            return e._isValid;
          }
          function y(e) {
            var t = p(NaN);
            return null != e ? h(m(t), e) : (m(t).userInvalidated = !0), t;
          }
          n = Array.prototype.some
            ? Array.prototype.some
            : function (e) {
                var t,
                  n = Object(this),
                  r = n.length >>> 0;
                for (t = 0; t < r; t++)
                  if (t in n && e.call(this, n[t], t, n)) return !0;
                return !1;
              };
          var b = (r.momentProperties = []),
            x = !1;
          function _(e, t) {
            var n, r, a;
            if (
              (u(t._isAMomentObject) ||
                (e._isAMomentObject = t._isAMomentObject),
              u(t._i) || (e._i = t._i),
              u(t._f) || (e._f = t._f),
              u(t._l) || (e._l = t._l),
              u(t._strict) || (e._strict = t._strict),
              u(t._tzm) || (e._tzm = t._tzm),
              u(t._isUTC) || (e._isUTC = t._isUTC),
              u(t._offset) || (e._offset = t._offset),
              u(t._pf) || (e._pf = m(t)),
              u(t._locale) || (e._locale = t._locale),
              b.length > 0)
            )
              for (n = 0; n < b.length; n++)
                u((a = t[(r = b[n])])) || (e[r] = a);
            return e;
          }
          function w(e) {
            _(this, e),
              (this._d = new Date(null != e._d ? e._d.getTime() : NaN)),
              this.isValid() || (this._d = new Date(NaN)),
              !1 === x && ((x = !0), r.updateOffset(this), (x = !1));
          }
          function k(e) {
            return e instanceof w || (null != e && null != e._isAMomentObject);
          }
          function S(e) {
            !1 === r.suppressDeprecationWarnings &&
              "undefined" !== typeof console &&
              console.warn &&
              console.warn("Deprecation warning: " + e);
          }
          function C(e, t) {
            var n = !0;
            return h(function () {
              if (
                (null != r.deprecationHandler && r.deprecationHandler(null, e),
                n)
              ) {
                var a,
                  i,
                  o,
                  s = [];
                for (i = 0; i < arguments.length; i++) {
                  if (((a = ""), "object" === typeof arguments[i])) {
                    for (o in ((a += "\n[" + i + "] "), arguments[0]))
                      l(arguments[0], o) &&
                        (a += o + ": " + arguments[0][o] + ", ");
                    a = a.slice(0, -2);
                  } else a = arguments[i];
                  s.push(a);
                }
                S(
                  e +
                    "\nArguments: " +
                    Array.prototype.slice.call(s).join("") +
                    "\n" +
                    new Error().stack
                ),
                  (n = !1);
              }
              return t.apply(this, arguments);
            }, t);
          }
          var M,
            O = {};
          function P(e, t) {
            null != r.deprecationHandler && r.deprecationHandler(e, t),
              O[e] || (S(t), (O[e] = !0));
          }
          function E(e) {
            return (
              ("undefined" !== typeof Function && e instanceof Function) ||
              "[object Function]" === Object.prototype.toString.call(e)
            );
          }
          function D(e) {
            var t, n;
            for (n in e)
              l(e, n) && (E((t = e[n])) ? (this[n] = t) : (this["_" + n] = t));
            (this._config = e),
              (this._dayOfMonthOrdinalParseLenient = new RegExp(
                (this._dayOfMonthOrdinalParse.source ||
                  this._ordinalParse.source) +
                  "|" +
                  /\d{1,2}/.source
              ));
          }
          function T(e, t) {
            var n,
              r = h({}, e);
            for (n in t)
              l(t, n) &&
                (o(e[n]) && o(t[n])
                  ? ((r[n] = {}), h(r[n], e[n]), h(r[n], t[n]))
                  : null != t[n]
                  ? (r[n] = t[n])
                  : delete r[n]);
            for (n in e) l(e, n) && !l(t, n) && o(e[n]) && (r[n] = h({}, r[n]));
            return r;
          }
          function A(e) {
            null != e && this.set(e);
          }
          (r.suppressDeprecationWarnings = !1),
            (r.deprecationHandler = null),
            (M = Object.keys
              ? Object.keys
              : function (e) {
                  var t,
                    n = [];
                  for (t in e) l(e, t) && n.push(t);
                  return n;
                });
          var N = {
            sameDay: "[Today at] LT",
            nextDay: "[Tomorrow at] LT",
            nextWeek: "dddd [at] LT",
            lastDay: "[Yesterday at] LT",
            lastWeek: "[Last] dddd [at] LT",
            sameElse: "L",
          };
          function I(e, t, n) {
            var r = this._calendar[e] || this._calendar.sameElse;
            return E(r) ? r.call(t, n) : r;
          }
          function R(e, t, n) {
            var r = "" + Math.abs(e),
              a = t - r.length;
            return (
              (e >= 0 ? (n ? "+" : "") : "-") +
              Math.pow(10, Math.max(0, a)).toString().substr(1) +
              r
            );
          }
          var L = /(\[[^\[]*\])|(\\)?([Hh]mm(ss)?|Mo|MM?M?M?|Do|DDDo|DD?D?D?|ddd?d?|do?|w[o|w]?|W[o|W]?|Qo?|N{1,5}|YYYYYY|YYYYY|YYYY|YY|y{2,4}|yo?|gg(ggg?)?|GG(GGG?)?|e|E|a|A|hh?|HH?|kk?|mm?|ss?|S{1,9}|x|X|zz?|ZZ?|.)/g,
            F = /(\[[^\[]*\])|(\\)?(LTS|LT|LL?L?L?|l{1,4})/g,
            j = {},
            z = {};
          function W(e, t, n, r) {
            var a = r;
            "string" === typeof r &&
              (a = function () {
                return this[r]();
              }),
              e && (z[e] = a),
              t &&
                (z[t[0]] = function () {
                  return R(a.apply(this, arguments), t[1], t[2]);
                }),
              n &&
                (z[n] = function () {
                  return this.localeData().ordinal(a.apply(this, arguments), e);
                });
          }
          function V(e) {
            return e.match(/\[[\s\S]/)
              ? e.replace(/^\[|\]$/g, "")
              : e.replace(/\\/g, "");
          }
          function Y(e) {
            var t,
              n,
              r = e.match(L);
            for (t = 0, n = r.length; t < n; t++)
              z[r[t]] ? (r[t] = z[r[t]]) : (r[t] = V(r[t]));
            return function (t) {
              var a,
                i = "";
              for (a = 0; a < n; a++) i += E(r[a]) ? r[a].call(t, e) : r[a];
              return i;
            };
          }
          function B(e, t) {
            return e.isValid()
              ? ((t = H(t, e.localeData())), (j[t] = j[t] || Y(t)), j[t](e))
              : e.localeData().invalidDate();
          }
          function H(e, t) {
            var n = 5;
            function r(e) {
              return t.longDateFormat(e) || e;
            }
            for (F.lastIndex = 0; n >= 0 && F.test(e); )
              (e = e.replace(F, r)), (F.lastIndex = 0), (n -= 1);
            return e;
          }
          var U = {
            LTS: "h:mm:ss A",
            LT: "h:mm A",
            L: "MM/DD/YYYY",
            LL: "MMMM D, YYYY",
            LLL: "MMMM D, YYYY h:mm A",
            LLLL: "dddd, MMMM D, YYYY h:mm A",
          };
          function $(e) {
            var t = this._longDateFormat[e],
              n = this._longDateFormat[e.toUpperCase()];
            return t || !n
              ? t
              : ((this._longDateFormat[e] = n
                  .match(L)
                  .map(function (e) {
                    return "MMMM" === e ||
                      "MM" === e ||
                      "DD" === e ||
                      "dddd" === e
                      ? e.slice(1)
                      : e;
                  })
                  .join("")),
                this._longDateFormat[e]);
          }
          var G = "Invalid date";
          function q() {
            return this._invalidDate;
          }
          var K = "%d",
            Q = /\d{1,2}/;
          function Z(e) {
            return this._ordinal.replace("%d", e);
          }
          var X = {
            future: "in %s",
            past: "%s ago",
            s: "a few seconds",
            ss: "%d seconds",
            m: "a minute",
            mm: "%d minutes",
            h: "an hour",
            hh: "%d hours",
            d: "a day",
            dd: "%d days",
            w: "a week",
            ww: "%d weeks",
            M: "a month",
            MM: "%d months",
            y: "a year",
            yy: "%d years",
          };
          function J(e, t, n, r) {
            var a = this._relativeTime[n];
            return E(a) ? a(e, t, n, r) : a.replace(/%d/i, e);
          }
          function ee(e, t) {
            var n = this._relativeTime[e > 0 ? "future" : "past"];
            return E(n) ? n(t) : n.replace(/%s/i, t);
          }
          var te = {};
          function ne(e, t) {
            var n = e.toLowerCase();
            te[n] = te[n + "s"] = te[t] = e;
          }
          function re(e) {
            return "string" === typeof e
              ? te[e] || te[e.toLowerCase()]
              : void 0;
          }
          function ae(e) {
            var t,
              n,
              r = {};
            for (n in e) l(e, n) && (t = re(n)) && (r[t] = e[n]);
            return r;
          }
          var ie = {};
          function oe(e, t) {
            ie[e] = t;
          }
          function le(e) {
            var t,
              n = [];
            for (t in e) l(e, t) && n.push({ unit: t, priority: ie[t] });
            return (
              n.sort(function (e, t) {
                return e.priority - t.priority;
              }),
              n
            );
          }
          function se(e) {
            return (e % 4 === 0 && e % 100 !== 0) || e % 400 === 0;
          }
          function ue(e) {
            return e < 0 ? Math.ceil(e) || 0 : Math.floor(e);
          }
          function ce(e) {
            var t = +e,
              n = 0;
            return 0 !== t && isFinite(t) && (n = ue(t)), n;
          }
          function fe(e, t) {
            return function (n) {
              return null != n
                ? (he(this, e, n), r.updateOffset(this, t), this)
                : de(this, e);
            };
          }
          function de(e, t) {
            return e.isValid()
              ? e._d["get" + (e._isUTC ? "UTC" : "") + t]()
              : NaN;
          }
          function he(e, t, n) {
            e.isValid() &&
              !isNaN(n) &&
              ("FullYear" === t &&
              se(e.year()) &&
              1 === e.month() &&
              29 === e.date()
                ? ((n = ce(n)),
                  e._d["set" + (e._isUTC ? "UTC" : "") + t](
                    n,
                    e.month(),
                    Je(n, e.month())
                  ))
                : e._d["set" + (e._isUTC ? "UTC" : "") + t](n));
          }
          function pe(e) {
            return E(this[(e = re(e))]) ? this[e]() : this;
          }
          function ge(e, t) {
            if ("object" === typeof e) {
              var n,
                r = le((e = ae(e)));
              for (n = 0; n < r.length; n++) this[r[n].unit](e[r[n].unit]);
            } else if (E(this[(e = re(e))])) return this[e](t);
            return this;
          }
          var me,
            ve = /\d/,
            ye = /\d\d/,
            be = /\d{3}/,
            xe = /\d{4}/,
            _e = /[+-]?\d{6}/,
            we = /\d\d?/,
            ke = /\d\d\d\d?/,
            Se = /\d\d\d\d\d\d?/,
            Ce = /\d{1,3}/,
            Me = /\d{1,4}/,
            Oe = /[+-]?\d{1,6}/,
            Pe = /\d+/,
            Ee = /[+-]?\d+/,
            De = /Z|[+-]\d\d:?\d\d/gi,
            Te = /Z|[+-]\d\d(?::?\d\d)?/gi,
            Ae = /[+-]?\d+(\.\d{1,3})?/,
            Ne = /[0-9]{0,256}['a-z\u00A0-\u05FF\u0700-\uD7FF\uF900-\uFDCF\uFDF0-\uFF07\uFF10-\uFFEF]{1,256}|[\u0600-\u06FF\/]{1,256}(\s*?[\u0600-\u06FF]{1,256}){1,2}/i;
          function Ie(e, t, n) {
            me[e] = E(t)
              ? t
              : function (e, r) {
                  return e && n ? n : t;
                };
          }
          function Re(e, t) {
            return l(me, e) ? me[e](t._strict, t._locale) : new RegExp(Le(e));
          }
          function Le(e) {
            return Fe(
              e
                .replace("\\", "")
                .replace(
                  /\\(\[)|\\(\])|\[([^\]\[]*)\]|\\(.)/g,
                  function (e, t, n, r, a) {
                    return t || n || r || a;
                  }
                )
            );
          }
          function Fe(e) {
            return e.replace(/[-\/\\^$*+?.()|[\]{}]/g, "\\$&");
          }
          me = {};
          var je = {};
          function ze(e, t) {
            var n,
              r = t;
            for (
              "string" === typeof e && (e = [e]),
                c(t) &&
                  (r = function (e, n) {
                    n[t] = ce(e);
                  }),
                n = 0;
              n < e.length;
              n++
            )
              je[e[n]] = r;
          }
          function We(e, t) {
            ze(e, function (e, n, r, a) {
              (r._w = r._w || {}), t(e, r._w, r, a);
            });
          }
          function Ve(e, t, n) {
            null != t && l(je, e) && je[e](t, n._a, n, e);
          }
          var Ye,
            Be = 0,
            He = 1,
            Ue = 2,
            $e = 3,
            Ge = 4,
            qe = 5,
            Ke = 6,
            Qe = 7,
            Ze = 8;
          function Xe(e, t) {
            return ((e % t) + t) % t;
          }
          function Je(e, t) {
            if (isNaN(e) || isNaN(t)) return NaN;
            var n = Xe(t, 12);
            return (
              (e += (t - n) / 12),
              1 === n ? (se(e) ? 29 : 28) : 31 - ((n % 7) % 2)
            );
          }
          (Ye = Array.prototype.indexOf
            ? Array.prototype.indexOf
            : function (e) {
                var t;
                for (t = 0; t < this.length; ++t) if (this[t] === e) return t;
                return -1;
              }),
            W("M", ["MM", 2], "Mo", function () {
              return this.month() + 1;
            }),
            W("MMM", 0, 0, function (e) {
              return this.localeData().monthsShort(this, e);
            }),
            W("MMMM", 0, 0, function (e) {
              return this.localeData().months(this, e);
            }),
            ne("month", "M"),
            oe("month", 8),
            Ie("M", we),
            Ie("MM", we, ye),
            Ie("MMM", function (e, t) {
              return t.monthsShortRegex(e);
            }),
            Ie("MMMM", function (e, t) {
              return t.monthsRegex(e);
            }),
            ze(["M", "MM"], function (e, t) {
              t[He] = ce(e) - 1;
            }),
            ze(["MMM", "MMMM"], function (e, t, n, r) {
              var a = n._locale.monthsParse(e, r, n._strict);
              null != a ? (t[He] = a) : (m(n).invalidMonth = e);
            });
          var et = "January_February_March_April_May_June_July_August_September_October_November_December".split(
              "_"
            ),
            tt = "Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"),
            nt = /D[oD]?(\[[^\[\]]*\]|\s)+MMMM?/,
            rt = Ne,
            at = Ne;
          function it(e, t) {
            return e
              ? i(this._months)
                ? this._months[e.month()]
                : this._months[
                    (this._months.isFormat || nt).test(t)
                      ? "format"
                      : "standalone"
                  ][e.month()]
              : i(this._months)
              ? this._months
              : this._months.standalone;
          }
          function ot(e, t) {
            return e
              ? i(this._monthsShort)
                ? this._monthsShort[e.month()]
                : this._monthsShort[nt.test(t) ? "format" : "standalone"][
                    e.month()
                  ]
              : i(this._monthsShort)
              ? this._monthsShort
              : this._monthsShort.standalone;
          }
          function lt(e, t, n) {
            var r,
              a,
              i,
              o = e.toLocaleLowerCase();
            if (!this._monthsParse)
              for (
                this._monthsParse = [],
                  this._longMonthsParse = [],
                  this._shortMonthsParse = [],
                  r = 0;
                r < 12;
                ++r
              )
                (i = p([2e3, r])),
                  (this._shortMonthsParse[r] = this.monthsShort(
                    i,
                    ""
                  ).toLocaleLowerCase()),
                  (this._longMonthsParse[r] = this.months(
                    i,
                    ""
                  ).toLocaleLowerCase());
            return n
              ? "MMM" === t
                ? -1 !== (a = Ye.call(this._shortMonthsParse, o))
                  ? a
                  : null
                : -1 !== (a = Ye.call(this._longMonthsParse, o))
                ? a
                : null
              : "MMM" === t
              ? -1 !== (a = Ye.call(this._shortMonthsParse, o)) ||
                -1 !== (a = Ye.call(this._longMonthsParse, o))
                ? a
                : null
              : -1 !== (a = Ye.call(this._longMonthsParse, o)) ||
                -1 !== (a = Ye.call(this._shortMonthsParse, o))
              ? a
              : null;
          }
          function st(e, t, n) {
            var r, a, i;
            if (this._monthsParseExact) return lt.call(this, e, t, n);
            for (
              this._monthsParse ||
                ((this._monthsParse = []),
                (this._longMonthsParse = []),
                (this._shortMonthsParse = [])),
                r = 0;
              r < 12;
              r++
            ) {
              if (
                ((a = p([2e3, r])),
                n &&
                  !this._longMonthsParse[r] &&
                  ((this._longMonthsParse[r] = new RegExp(
                    "^" + this.months(a, "").replace(".", "") + "$",
                    "i"
                  )),
                  (this._shortMonthsParse[r] = new RegExp(
                    "^" + this.monthsShort(a, "").replace(".", "") + "$",
                    "i"
                  ))),
                n ||
                  this._monthsParse[r] ||
                  ((i =
                    "^" + this.months(a, "") + "|^" + this.monthsShort(a, "")),
                  (this._monthsParse[r] = new RegExp(i.replace(".", ""), "i"))),
                n && "MMMM" === t && this._longMonthsParse[r].test(e))
              )
                return r;
              if (n && "MMM" === t && this._shortMonthsParse[r].test(e))
                return r;
              if (!n && this._monthsParse[r].test(e)) return r;
            }
          }
          function ut(e, t) {
            var n;
            if (!e.isValid()) return e;
            if ("string" === typeof t)
              if (/^\d+$/.test(t)) t = ce(t);
              else if (!c((t = e.localeData().monthsParse(t)))) return e;
            return (
              (n = Math.min(e.date(), Je(e.year(), t))),
              e._d["set" + (e._isUTC ? "UTC" : "") + "Month"](t, n),
              e
            );
          }
          function ct(e) {
            return null != e
              ? (ut(this, e), r.updateOffset(this, !0), this)
              : de(this, "Month");
          }
          function ft() {
            return Je(this.year(), this.month());
          }
          function dt(e) {
            return this._monthsParseExact
              ? (l(this, "_monthsRegex") || pt.call(this),
                e ? this._monthsShortStrictRegex : this._monthsShortRegex)
              : (l(this, "_monthsShortRegex") || (this._monthsShortRegex = rt),
                this._monthsShortStrictRegex && e
                  ? this._monthsShortStrictRegex
                  : this._monthsShortRegex);
          }
          function ht(e) {
            return this._monthsParseExact
              ? (l(this, "_monthsRegex") || pt.call(this),
                e ? this._monthsStrictRegex : this._monthsRegex)
              : (l(this, "_monthsRegex") || (this._monthsRegex = at),
                this._monthsStrictRegex && e
                  ? this._monthsStrictRegex
                  : this._monthsRegex);
          }
          function pt() {
            function e(e, t) {
              return t.length - e.length;
            }
            var t,
              n,
              r = [],
              a = [],
              i = [];
            for (t = 0; t < 12; t++)
              (n = p([2e3, t])),
                r.push(this.monthsShort(n, "")),
                a.push(this.months(n, "")),
                i.push(this.months(n, "")),
                i.push(this.monthsShort(n, ""));
            for (r.sort(e), a.sort(e), i.sort(e), t = 0; t < 12; t++)
              (r[t] = Fe(r[t])), (a[t] = Fe(a[t]));
            for (t = 0; t < 24; t++) i[t] = Fe(i[t]);
            (this._monthsRegex = new RegExp("^(" + i.join("|") + ")", "i")),
              (this._monthsShortRegex = this._monthsRegex),
              (this._monthsStrictRegex = new RegExp(
                "^(" + a.join("|") + ")",
                "i"
              )),
              (this._monthsShortStrictRegex = new RegExp(
                "^(" + r.join("|") + ")",
                "i"
              ));
          }
          function gt(e) {
            return se(e) ? 366 : 365;
          }
          W("Y", 0, 0, function () {
            var e = this.year();
            return e <= 9999 ? R(e, 4) : "+" + e;
          }),
            W(0, ["YY", 2], 0, function () {
              return this.year() % 100;
            }),
            W(0, ["YYYY", 4], 0, "year"),
            W(0, ["YYYYY", 5], 0, "year"),
            W(0, ["YYYYYY", 6, !0], 0, "year"),
            ne("year", "y"),
            oe("year", 1),
            Ie("Y", Ee),
            Ie("YY", we, ye),
            Ie("YYYY", Me, xe),
            Ie("YYYYY", Oe, _e),
            Ie("YYYYYY", Oe, _e),
            ze(["YYYYY", "YYYYYY"], Be),
            ze("YYYY", function (e, t) {
              t[Be] = 2 === e.length ? r.parseTwoDigitYear(e) : ce(e);
            }),
            ze("YY", function (e, t) {
              t[Be] = r.parseTwoDigitYear(e);
            }),
            ze("Y", function (e, t) {
              t[Be] = parseInt(e, 10);
            }),
            (r.parseTwoDigitYear = function (e) {
              return ce(e) + (ce(e) > 68 ? 1900 : 2e3);
            });
          var mt = fe("FullYear", !0);
          function vt() {
            return se(this.year());
          }
          function yt(e, t, n, r, a, i, o) {
            var l;
            return (
              e < 100 && e >= 0
                ? ((l = new Date(e + 400, t, n, r, a, i, o)),
                  isFinite(l.getFullYear()) && l.setFullYear(e))
                : (l = new Date(e, t, n, r, a, i, o)),
              l
            );
          }
          function bt(e) {
            var t, n;
            return (
              e < 100 && e >= 0
                ? (((n = Array.prototype.slice.call(arguments))[0] = e + 400),
                  (t = new Date(Date.UTC.apply(null, n))),
                  isFinite(t.getUTCFullYear()) && t.setUTCFullYear(e))
                : (t = new Date(Date.UTC.apply(null, arguments))),
              t
            );
          }
          function xt(e, t, n) {
            var r = 7 + t - n;
            return (-(7 + bt(e, 0, r).getUTCDay() - t) % 7) + r - 1;
          }
          function _t(e, t, n, r, a) {
            var i,
              o,
              l = 1 + 7 * (t - 1) + ((7 + n - r) % 7) + xt(e, r, a);
            return (
              l <= 0
                ? (o = gt((i = e - 1)) + l)
                : l > gt(e)
                ? ((i = e + 1), (o = l - gt(e)))
                : ((i = e), (o = l)),
              { year: i, dayOfYear: o }
            );
          }
          function wt(e, t, n) {
            var r,
              a,
              i = xt(e.year(), t, n),
              o = Math.floor((e.dayOfYear() - i - 1) / 7) + 1;
            return (
              o < 1
                ? (r = o + kt((a = e.year() - 1), t, n))
                : o > kt(e.year(), t, n)
                ? ((r = o - kt(e.year(), t, n)), (a = e.year() + 1))
                : ((a = e.year()), (r = o)),
              { week: r, year: a }
            );
          }
          function kt(e, t, n) {
            var r = xt(e, t, n),
              a = xt(e + 1, t, n);
            return (gt(e) - r + a) / 7;
          }
          function St(e) {
            return wt(e, this._week.dow, this._week.doy).week;
          }
          W("w", ["ww", 2], "wo", "week"),
            W("W", ["WW", 2], "Wo", "isoWeek"),
            ne("week", "w"),
            ne("isoWeek", "W"),
            oe("week", 5),
            oe("isoWeek", 5),
            Ie("w", we),
            Ie("ww", we, ye),
            Ie("W", we),
            Ie("WW", we, ye),
            We(["w", "ww", "W", "WW"], function (e, t, n, r) {
              t[r.substr(0, 1)] = ce(e);
            });
          var Ct = { dow: 0, doy: 6 };
          function Mt() {
            return this._week.dow;
          }
          function Ot() {
            return this._week.doy;
          }
          function Pt(e) {
            var t = this.localeData().week(this);
            return null == e ? t : this.add(7 * (e - t), "d");
          }
          function Et(e) {
            var t = wt(this, 1, 4).week;
            return null == e ? t : this.add(7 * (e - t), "d");
          }
          function Dt(e, t) {
            return "string" !== typeof e
              ? e
              : isNaN(e)
              ? "number" === typeof (e = t.weekdaysParse(e))
                ? e
                : null
              : parseInt(e, 10);
          }
          function Tt(e, t) {
            return "string" === typeof e
              ? t.weekdaysParse(e) % 7 || 7
              : isNaN(e)
              ? null
              : e;
          }
          function At(e, t) {
            return e.slice(t, 7).concat(e.slice(0, t));
          }
          W("d", 0, "do", "day"),
            W("dd", 0, 0, function (e) {
              return this.localeData().weekdaysMin(this, e);
            }),
            W("ddd", 0, 0, function (e) {
              return this.localeData().weekdaysShort(this, e);
            }),
            W("dddd", 0, 0, function (e) {
              return this.localeData().weekdays(this, e);
            }),
            W("e", 0, 0, "weekday"),
            W("E", 0, 0, "isoWeekday"),
            ne("day", "d"),
            ne("weekday", "e"),
            ne("isoWeekday", "E"),
            oe("day", 11),
            oe("weekday", 11),
            oe("isoWeekday", 11),
            Ie("d", we),
            Ie("e", we),
            Ie("E", we),
            Ie("dd", function (e, t) {
              return t.weekdaysMinRegex(e);
            }),
            Ie("ddd", function (e, t) {
              return t.weekdaysShortRegex(e);
            }),
            Ie("dddd", function (e, t) {
              return t.weekdaysRegex(e);
            }),
            We(["dd", "ddd", "dddd"], function (e, t, n, r) {
              var a = n._locale.weekdaysParse(e, r, n._strict);
              null != a ? (t.d = a) : (m(n).invalidWeekday = e);
            }),
            We(["d", "e", "E"], function (e, t, n, r) {
              t[r] = ce(e);
            });
          var Nt = "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split(
              "_"
            ),
            It = "Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"),
            Rt = "Su_Mo_Tu_We_Th_Fr_Sa".split("_"),
            Lt = Ne,
            Ft = Ne,
            jt = Ne;
          function zt(e, t) {
            var n = i(this._weekdays)
              ? this._weekdays
              : this._weekdays[
                  e && !0 !== e && this._weekdays.isFormat.test(t)
                    ? "format"
                    : "standalone"
                ];
            return !0 === e ? At(n, this._week.dow) : e ? n[e.day()] : n;
          }
          function Wt(e) {
            return !0 === e
              ? At(this._weekdaysShort, this._week.dow)
              : e
              ? this._weekdaysShort[e.day()]
              : this._weekdaysShort;
          }
          function Vt(e) {
            return !0 === e
              ? At(this._weekdaysMin, this._week.dow)
              : e
              ? this._weekdaysMin[e.day()]
              : this._weekdaysMin;
          }
          function Yt(e, t, n) {
            var r,
              a,
              i,
              o = e.toLocaleLowerCase();
            if (!this._weekdaysParse)
              for (
                this._weekdaysParse = [],
                  this._shortWeekdaysParse = [],
                  this._minWeekdaysParse = [],
                  r = 0;
                r < 7;
                ++r
              )
                (i = p([2e3, 1]).day(r)),
                  (this._minWeekdaysParse[r] = this.weekdaysMin(
                    i,
                    ""
                  ).toLocaleLowerCase()),
                  (this._shortWeekdaysParse[r] = this.weekdaysShort(
                    i,
                    ""
                  ).toLocaleLowerCase()),
                  (this._weekdaysParse[r] = this.weekdays(
                    i,
                    ""
                  ).toLocaleLowerCase());
            return n
              ? "dddd" === t
                ? -1 !== (a = Ye.call(this._weekdaysParse, o))
                  ? a
                  : null
                : "ddd" === t
                ? -1 !== (a = Ye.call(this._shortWeekdaysParse, o))
                  ? a
                  : null
                : -1 !== (a = Ye.call(this._minWeekdaysParse, o))
                ? a
                : null
              : "dddd" === t
              ? -1 !== (a = Ye.call(this._weekdaysParse, o)) ||
                -1 !== (a = Ye.call(this._shortWeekdaysParse, o)) ||
                -1 !== (a = Ye.call(this._minWeekdaysParse, o))
                ? a
                : null
              : "ddd" === t
              ? -1 !== (a = Ye.call(this._shortWeekdaysParse, o)) ||
                -1 !== (a = Ye.call(this._weekdaysParse, o)) ||
                -1 !== (a = Ye.call(this._minWeekdaysParse, o))
                ? a
                : null
              : -1 !== (a = Ye.call(this._minWeekdaysParse, o)) ||
                -1 !== (a = Ye.call(this._weekdaysParse, o)) ||
                -1 !== (a = Ye.call(this._shortWeekdaysParse, o))
              ? a
              : null;
          }
          function Bt(e, t, n) {
            var r, a, i;
            if (this._weekdaysParseExact) return Yt.call(this, e, t, n);
            for (
              this._weekdaysParse ||
                ((this._weekdaysParse = []),
                (this._minWeekdaysParse = []),
                (this._shortWeekdaysParse = []),
                (this._fullWeekdaysParse = [])),
                r = 0;
              r < 7;
              r++
            ) {
              if (
                ((a = p([2e3, 1]).day(r)),
                n &&
                  !this._fullWeekdaysParse[r] &&
                  ((this._fullWeekdaysParse[r] = new RegExp(
                    "^" + this.weekdays(a, "").replace(".", "\\.?") + "$",
                    "i"
                  )),
                  (this._shortWeekdaysParse[r] = new RegExp(
                    "^" + this.weekdaysShort(a, "").replace(".", "\\.?") + "$",
                    "i"
                  )),
                  (this._minWeekdaysParse[r] = new RegExp(
                    "^" + this.weekdaysMin(a, "").replace(".", "\\.?") + "$",
                    "i"
                  ))),
                this._weekdaysParse[r] ||
                  ((i =
                    "^" +
                    this.weekdays(a, "") +
                    "|^" +
                    this.weekdaysShort(a, "") +
                    "|^" +
                    this.weekdaysMin(a, "")),
                  (this._weekdaysParse[r] = new RegExp(
                    i.replace(".", ""),
                    "i"
                  ))),
                n && "dddd" === t && this._fullWeekdaysParse[r].test(e))
              )
                return r;
              if (n && "ddd" === t && this._shortWeekdaysParse[r].test(e))
                return r;
              if (n && "dd" === t && this._minWeekdaysParse[r].test(e))
                return r;
              if (!n && this._weekdaysParse[r].test(e)) return r;
            }
          }
          function Ht(e) {
            if (!this.isValid()) return null != e ? this : NaN;
            var t = this._isUTC ? this._d.getUTCDay() : this._d.getDay();
            return null != e
              ? ((e = Dt(e, this.localeData())), this.add(e - t, "d"))
              : t;
          }
          function Ut(e) {
            if (!this.isValid()) return null != e ? this : NaN;
            var t = (this.day() + 7 - this.localeData()._week.dow) % 7;
            return null == e ? t : this.add(e - t, "d");
          }
          function $t(e) {
            if (!this.isValid()) return null != e ? this : NaN;
            if (null != e) {
              var t = Tt(e, this.localeData());
              return this.day(this.day() % 7 ? t : t - 7);
            }
            return this.day() || 7;
          }
          function Gt(e) {
            return this._weekdaysParseExact
              ? (l(this, "_weekdaysRegex") || Qt.call(this),
                e ? this._weekdaysStrictRegex : this._weekdaysRegex)
              : (l(this, "_weekdaysRegex") || (this._weekdaysRegex = Lt),
                this._weekdaysStrictRegex && e
                  ? this._weekdaysStrictRegex
                  : this._weekdaysRegex);
          }
          function qt(e) {
            return this._weekdaysParseExact
              ? (l(this, "_weekdaysRegex") || Qt.call(this),
                e ? this._weekdaysShortStrictRegex : this._weekdaysShortRegex)
              : (l(this, "_weekdaysShortRegex") ||
                  (this._weekdaysShortRegex = Ft),
                this._weekdaysShortStrictRegex && e
                  ? this._weekdaysShortStrictRegex
                  : this._weekdaysShortRegex);
          }
          function Kt(e) {
            return this._weekdaysParseExact
              ? (l(this, "_weekdaysRegex") || Qt.call(this),
                e ? this._weekdaysMinStrictRegex : this._weekdaysMinRegex)
              : (l(this, "_weekdaysMinRegex") || (this._weekdaysMinRegex = jt),
                this._weekdaysMinStrictRegex && e
                  ? this._weekdaysMinStrictRegex
                  : this._weekdaysMinRegex);
          }
          function Qt() {
            function e(e, t) {
              return t.length - e.length;
            }
            var t,
              n,
              r,
              a,
              i,
              o = [],
              l = [],
              s = [],
              u = [];
            for (t = 0; t < 7; t++)
              (n = p([2e3, 1]).day(t)),
                (r = Fe(this.weekdaysMin(n, ""))),
                (a = Fe(this.weekdaysShort(n, ""))),
                (i = Fe(this.weekdays(n, ""))),
                o.push(r),
                l.push(a),
                s.push(i),
                u.push(r),
                u.push(a),
                u.push(i);
            o.sort(e),
              l.sort(e),
              s.sort(e),
              u.sort(e),
              (this._weekdaysRegex = new RegExp("^(" + u.join("|") + ")", "i")),
              (this._weekdaysShortRegex = this._weekdaysRegex),
              (this._weekdaysMinRegex = this._weekdaysRegex),
              (this._weekdaysStrictRegex = new RegExp(
                "^(" + s.join("|") + ")",
                "i"
              )),
              (this._weekdaysShortStrictRegex = new RegExp(
                "^(" + l.join("|") + ")",
                "i"
              )),
              (this._weekdaysMinStrictRegex = new RegExp(
                "^(" + o.join("|") + ")",
                "i"
              ));
          }
          function Zt() {
            return this.hours() % 12 || 12;
          }
          function Xt() {
            return this.hours() || 24;
          }
          function Jt(e, t) {
            W(e, 0, 0, function () {
              return this.localeData().meridiem(
                this.hours(),
                this.minutes(),
                t
              );
            });
          }
          function en(e, t) {
            return t._meridiemParse;
          }
          function tn(e) {
            return "p" === (e + "").toLowerCase().charAt(0);
          }
          W("H", ["HH", 2], 0, "hour"),
            W("h", ["hh", 2], 0, Zt),
            W("k", ["kk", 2], 0, Xt),
            W("hmm", 0, 0, function () {
              return "" + Zt.apply(this) + R(this.minutes(), 2);
            }),
            W("hmmss", 0, 0, function () {
              return (
                "" +
                Zt.apply(this) +
                R(this.minutes(), 2) +
                R(this.seconds(), 2)
              );
            }),
            W("Hmm", 0, 0, function () {
              return "" + this.hours() + R(this.minutes(), 2);
            }),
            W("Hmmss", 0, 0, function () {
              return (
                "" + this.hours() + R(this.minutes(), 2) + R(this.seconds(), 2)
              );
            }),
            Jt("a", !0),
            Jt("A", !1),
            ne("hour", "h"),
            oe("hour", 13),
            Ie("a", en),
            Ie("A", en),
            Ie("H", we),
            Ie("h", we),
            Ie("k", we),
            Ie("HH", we, ye),
            Ie("hh", we, ye),
            Ie("kk", we, ye),
            Ie("hmm", ke),
            Ie("hmmss", Se),
            Ie("Hmm", ke),
            Ie("Hmmss", Se),
            ze(["H", "HH"], $e),
            ze(["k", "kk"], function (e, t, n) {
              var r = ce(e);
              t[$e] = 24 === r ? 0 : r;
            }),
            ze(["a", "A"], function (e, t, n) {
              (n._isPm = n._locale.isPM(e)), (n._meridiem = e);
            }),
            ze(["h", "hh"], function (e, t, n) {
              (t[$e] = ce(e)), (m(n).bigHour = !0);
            }),
            ze("hmm", function (e, t, n) {
              var r = e.length - 2;
              (t[$e] = ce(e.substr(0, r))),
                (t[Ge] = ce(e.substr(r))),
                (m(n).bigHour = !0);
            }),
            ze("hmmss", function (e, t, n) {
              var r = e.length - 4,
                a = e.length - 2;
              (t[$e] = ce(e.substr(0, r))),
                (t[Ge] = ce(e.substr(r, 2))),
                (t[qe] = ce(e.substr(a))),
                (m(n).bigHour = !0);
            }),
            ze("Hmm", function (e, t, n) {
              var r = e.length - 2;
              (t[$e] = ce(e.substr(0, r))), (t[Ge] = ce(e.substr(r)));
            }),
            ze("Hmmss", function (e, t, n) {
              var r = e.length - 4,
                a = e.length - 2;
              (t[$e] = ce(e.substr(0, r))),
                (t[Ge] = ce(e.substr(r, 2))),
                (t[qe] = ce(e.substr(a)));
            });
          var nn = /[ap]\.?m?\.?/i,
            rn = fe("Hours", !0);
          function an(e, t, n) {
            return e > 11 ? (n ? "pm" : "PM") : n ? "am" : "AM";
          }
          var on,
            ln = {
              calendar: N,
              longDateFormat: U,
              invalidDate: G,
              ordinal: K,
              dayOfMonthOrdinalParse: Q,
              relativeTime: X,
              months: et,
              monthsShort: tt,
              week: Ct,
              weekdays: Nt,
              weekdaysMin: Rt,
              weekdaysShort: It,
              meridiemParse: nn,
            },
            sn = {},
            un = {};
          function cn(e, t) {
            var n,
              r = Math.min(e.length, t.length);
            for (n = 0; n < r; n += 1) if (e[n] !== t[n]) return n;
            return r;
          }
          function fn(e) {
            return e ? e.toLowerCase().replace("_", "-") : e;
          }
          function dn(e) {
            for (var t, n, r, a, i = 0; i < e.length; ) {
              for (
                t = (a = fn(e[i]).split("-")).length,
                  n = (n = fn(e[i + 1])) ? n.split("-") : null;
                t > 0;

              ) {
                if ((r = hn(a.slice(0, t).join("-")))) return r;
                if (n && n.length >= t && cn(a, n) >= t - 1) break;
                t--;
              }
              i++;
            }
            return on;
          }
          function hn(t) {
            var n = null;
            if (void 0 === sn[t] && "undefined" !== typeof e && e && e.exports)
              try {
                (n = on._abbr),
                  (function () {
                    var e = new Error("Cannot find module 'undefined'");
                    throw ((e.code = "MODULE_NOT_FOUND"), e);
                  })(),
                  pn(n);
              } catch (r) {
                sn[t] = null;
              }
            return sn[t];
          }
          function pn(e, t) {
            var n;
            return (
              e &&
                ((n = u(t) ? vn(e) : gn(e, t))
                  ? (on = n)
                  : "undefined" !== typeof console &&
                    console.warn &&
                    console.warn(
                      "Locale " + e + " not found. Did you forget to load it?"
                    )),
              on._abbr
            );
          }
          function gn(e, t) {
            if (null !== t) {
              var n,
                r = ln;
              if (((t.abbr = e), null != sn[e]))
                P(
                  "defineLocaleOverride",
                  "use moment.updateLocale(localeName, config) to change an existing locale. moment.defineLocale(localeName, config) should only be used for creating a new locale See http://momentjs.com/guides/#/warnings/define-locale/ for more info."
                ),
                  (r = sn[e]._config);
              else if (null != t.parentLocale)
                if (null != sn[t.parentLocale]) r = sn[t.parentLocale]._config;
                else {
                  if (null == (n = hn(t.parentLocale)))
                    return (
                      un[t.parentLocale] || (un[t.parentLocale] = []),
                      un[t.parentLocale].push({ name: e, config: t }),
                      null
                    );
                  r = n._config;
                }
              return (
                (sn[e] = new A(T(r, t))),
                un[e] &&
                  un[e].forEach(function (e) {
                    gn(e.name, e.config);
                  }),
                pn(e),
                sn[e]
              );
            }
            return delete sn[e], null;
          }
          function mn(e, t) {
            if (null != t) {
              var n,
                r,
                a = ln;
              null != sn[e] && null != sn[e].parentLocale
                ? sn[e].set(T(sn[e]._config, t))
                : (null != (r = hn(e)) && (a = r._config),
                  (t = T(a, t)),
                  null == r && (t.abbr = e),
                  ((n = new A(t)).parentLocale = sn[e]),
                  (sn[e] = n)),
                pn(e);
            } else
              null != sn[e] &&
                (null != sn[e].parentLocale
                  ? ((sn[e] = sn[e].parentLocale), e === pn() && pn(e))
                  : null != sn[e] && delete sn[e]);
            return sn[e];
          }
          function vn(e) {
            var t;
            if (
              (e && e._locale && e._locale._abbr && (e = e._locale._abbr), !e)
            )
              return on;
            if (!i(e)) {
              if ((t = hn(e))) return t;
              e = [e];
            }
            return dn(e);
          }
          function yn() {
            return M(sn);
          }
          function bn(e) {
            var t,
              n = e._a;
            return (
              n &&
                -2 === m(e).overflow &&
                ((t =
                  n[He] < 0 || n[He] > 11
                    ? He
                    : n[Ue] < 1 || n[Ue] > Je(n[Be], n[He])
                    ? Ue
                    : n[$e] < 0 ||
                      n[$e] > 24 ||
                      (24 === n[$e] &&
                        (0 !== n[Ge] || 0 !== n[qe] || 0 !== n[Ke]))
                    ? $e
                    : n[Ge] < 0 || n[Ge] > 59
                    ? Ge
                    : n[qe] < 0 || n[qe] > 59
                    ? qe
                    : n[Ke] < 0 || n[Ke] > 999
                    ? Ke
                    : -1),
                m(e)._overflowDayOfYear && (t < Be || t > Ue) && (t = Ue),
                m(e)._overflowWeeks && -1 === t && (t = Qe),
                m(e)._overflowWeekday && -1 === t && (t = Ze),
                (m(e).overflow = t)),
              e
            );
          }
          var xn = /^\s*((?:[+-]\d{6}|\d{4})-(?:\d\d-\d\d|W\d\d-\d|W\d\d|\d\d\d|\d\d))(?:(T| )(\d\d(?::\d\d(?::\d\d(?:[.,]\d+)?)?)?)([+-]\d\d(?::?\d\d)?|\s*Z)?)?$/,
            _n = /^\s*((?:[+-]\d{6}|\d{4})(?:\d\d\d\d|W\d\d\d|W\d\d|\d\d\d|\d\d|))(?:(T| )(\d\d(?:\d\d(?:\d\d(?:[.,]\d+)?)?)?)([+-]\d\d(?::?\d\d)?|\s*Z)?)?$/,
            wn = /Z|[+-]\d\d(?::?\d\d)?/,
            kn = [
              ["YYYYYY-MM-DD", /[+-]\d{6}-\d\d-\d\d/],
              ["YYYY-MM-DD", /\d{4}-\d\d-\d\d/],
              ["GGGG-[W]WW-E", /\d{4}-W\d\d-\d/],
              ["GGGG-[W]WW", /\d{4}-W\d\d/, !1],
              ["YYYY-DDD", /\d{4}-\d{3}/],
              ["YYYY-MM", /\d{4}-\d\d/, !1],
              ["YYYYYYMMDD", /[+-]\d{10}/],
              ["YYYYMMDD", /\d{8}/],
              ["GGGG[W]WWE", /\d{4}W\d{3}/],
              ["GGGG[W]WW", /\d{4}W\d{2}/, !1],
              ["YYYYDDD", /\d{7}/],
              ["YYYYMM", /\d{6}/, !1],
              ["YYYY", /\d{4}/, !1],
            ],
            Sn = [
              ["HH:mm:ss.SSSS", /\d\d:\d\d:\d\d\.\d+/],
              ["HH:mm:ss,SSSS", /\d\d:\d\d:\d\d,\d+/],
              ["HH:mm:ss", /\d\d:\d\d:\d\d/],
              ["HH:mm", /\d\d:\d\d/],
              ["HHmmss.SSSS", /\d\d\d\d\d\d\.\d+/],
              ["HHmmss,SSSS", /\d\d\d\d\d\d,\d+/],
              ["HHmmss", /\d\d\d\d\d\d/],
              ["HHmm", /\d\d\d\d/],
              ["HH", /\d\d/],
            ],
            Cn = /^\/?Date\((-?\d+)/i,
            Mn = /^(?:(Mon|Tue|Wed|Thu|Fri|Sat|Sun),?\s)?(\d{1,2})\s(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)\s(\d{2,4})\s(\d\d):(\d\d)(?::(\d\d))?\s(?:(UT|GMT|[ECMP][SD]T)|([Zz])|([+-]\d{4}))$/,
            On = {
              UT: 0,
              GMT: 0,
              EDT: -240,
              EST: -300,
              CDT: -300,
              CST: -360,
              MDT: -360,
              MST: -420,
              PDT: -420,
              PST: -480,
            };
          function Pn(e) {
            var t,
              n,
              r,
              a,
              i,
              o,
              l = e._i,
              s = xn.exec(l) || _n.exec(l);
            if (s) {
              for (m(e).iso = !0, t = 0, n = kn.length; t < n; t++)
                if (kn[t][1].exec(s[1])) {
                  (a = kn[t][0]), (r = !1 !== kn[t][2]);
                  break;
                }
              if (null == a) return void (e._isValid = !1);
              if (s[3]) {
                for (t = 0, n = Sn.length; t < n; t++)
                  if (Sn[t][1].exec(s[3])) {
                    i = (s[2] || " ") + Sn[t][0];
                    break;
                  }
                if (null == i) return void (e._isValid = !1);
              }
              if (!r && null != i) return void (e._isValid = !1);
              if (s[4]) {
                if (!wn.exec(s[4])) return void (e._isValid = !1);
                o = "Z";
              }
              (e._f = a + (i || "") + (o || "")), Wn(e);
            } else e._isValid = !1;
          }
          function En(e, t, n, r, a, i) {
            var o = [
              Dn(e),
              tt.indexOf(t),
              parseInt(n, 10),
              parseInt(r, 10),
              parseInt(a, 10),
            ];
            return i && o.push(parseInt(i, 10)), o;
          }
          function Dn(e) {
            var t = parseInt(e, 10);
            return t <= 49 ? 2e3 + t : t <= 999 ? 1900 + t : t;
          }
          function Tn(e) {
            return e
              .replace(/\([^)]*\)|[\n\t]/g, " ")
              .replace(/(\s\s+)/g, " ")
              .replace(/^\s\s*/, "")
              .replace(/\s\s*$/, "");
          }
          function An(e, t, n) {
            return (
              !e ||
              It.indexOf(e) === new Date(t[0], t[1], t[2]).getDay() ||
              ((m(n).weekdayMismatch = !0), (n._isValid = !1), !1)
            );
          }
          function Nn(e, t, n) {
            if (e) return On[e];
            if (t) return 0;
            var r = parseInt(n, 10),
              a = r % 100;
            return ((r - a) / 100) * 60 + a;
          }
          function In(e) {
            var t,
              n = Mn.exec(Tn(e._i));
            if (n) {
              if (
                ((t = En(n[4], n[3], n[2], n[5], n[6], n[7])), !An(n[1], t, e))
              )
                return;
              (e._a = t),
                (e._tzm = Nn(n[8], n[9], n[10])),
                (e._d = bt.apply(null, e._a)),
                e._d.setUTCMinutes(e._d.getUTCMinutes() - e._tzm),
                (m(e).rfc2822 = !0);
            } else e._isValid = !1;
          }
          function Rn(e) {
            var t = Cn.exec(e._i);
            null === t
              ? (Pn(e),
                !1 === e._isValid &&
                  (delete e._isValid,
                  In(e),
                  !1 === e._isValid &&
                    (delete e._isValid,
                    e._strict
                      ? (e._isValid = !1)
                      : r.createFromInputFallback(e))))
              : (e._d = new Date(+t[1]));
          }
          function Ln(e, t, n) {
            return null != e ? e : null != t ? t : n;
          }
          function Fn(e) {
            var t = new Date(r.now());
            return e._useUTC
              ? [t.getUTCFullYear(), t.getUTCMonth(), t.getUTCDate()]
              : [t.getFullYear(), t.getMonth(), t.getDate()];
          }
          function jn(e) {
            var t,
              n,
              r,
              a,
              i,
              o = [];
            if (!e._d) {
              for (
                r = Fn(e),
                  e._w && null == e._a[Ue] && null == e._a[He] && zn(e),
                  null != e._dayOfYear &&
                    ((i = Ln(e._a[Be], r[Be])),
                    (e._dayOfYear > gt(i) || 0 === e._dayOfYear) &&
                      (m(e)._overflowDayOfYear = !0),
                    (n = bt(i, 0, e._dayOfYear)),
                    (e._a[He] = n.getUTCMonth()),
                    (e._a[Ue] = n.getUTCDate())),
                  t = 0;
                t < 3 && null == e._a[t];
                ++t
              )
                e._a[t] = o[t] = r[t];
              for (; t < 7; t++)
                e._a[t] = o[t] = null == e._a[t] ? (2 === t ? 1 : 0) : e._a[t];
              24 === e._a[$e] &&
                0 === e._a[Ge] &&
                0 === e._a[qe] &&
                0 === e._a[Ke] &&
                ((e._nextDay = !0), (e._a[$e] = 0)),
                (e._d = (e._useUTC ? bt : yt).apply(null, o)),
                (a = e._useUTC ? e._d.getUTCDay() : e._d.getDay()),
                null != e._tzm &&
                  e._d.setUTCMinutes(e._d.getUTCMinutes() - e._tzm),
                e._nextDay && (e._a[$e] = 24),
                e._w &&
                  "undefined" !== typeof e._w.d &&
                  e._w.d !== a &&
                  (m(e).weekdayMismatch = !0);
            }
          }
          function zn(e) {
            var t, n, r, a, i, o, l, s, u;
            null != (t = e._w).GG || null != t.W || null != t.E
              ? ((i = 1),
                (o = 4),
                (n = Ln(t.GG, e._a[Be], wt(qn(), 1, 4).year)),
                (r = Ln(t.W, 1)),
                ((a = Ln(t.E, 1)) < 1 || a > 7) && (s = !0))
              : ((i = e._locale._week.dow),
                (o = e._locale._week.doy),
                (u = wt(qn(), i, o)),
                (n = Ln(t.gg, e._a[Be], u.year)),
                (r = Ln(t.w, u.week)),
                null != t.d
                  ? ((a = t.d) < 0 || a > 6) && (s = !0)
                  : null != t.e
                  ? ((a = t.e + i), (t.e < 0 || t.e > 6) && (s = !0))
                  : (a = i)),
              r < 1 || r > kt(n, i, o)
                ? (m(e)._overflowWeeks = !0)
                : null != s
                ? (m(e)._overflowWeekday = !0)
                : ((l = _t(n, r, a, i, o)),
                  (e._a[Be] = l.year),
                  (e._dayOfYear = l.dayOfYear));
          }
          function Wn(e) {
            if (e._f !== r.ISO_8601)
              if (e._f !== r.RFC_2822) {
                (e._a = []), (m(e).empty = !0);
                var t,
                  n,
                  a,
                  i,
                  o,
                  l,
                  s = "" + e._i,
                  u = s.length,
                  c = 0;
                for (
                  a = H(e._f, e._locale).match(L) || [], t = 0;
                  t < a.length;
                  t++
                )
                  (i = a[t]),
                    (n = (s.match(Re(i, e)) || [])[0]) &&
                      ((o = s.substr(0, s.indexOf(n))).length > 0 &&
                        m(e).unusedInput.push(o),
                      (s = s.slice(s.indexOf(n) + n.length)),
                      (c += n.length)),
                    z[i]
                      ? (n ? (m(e).empty = !1) : m(e).unusedTokens.push(i),
                        Ve(i, n, e))
                      : e._strict && !n && m(e).unusedTokens.push(i);
                (m(e).charsLeftOver = u - c),
                  s.length > 0 && m(e).unusedInput.push(s),
                  e._a[$e] <= 12 &&
                    !0 === m(e).bigHour &&
                    e._a[$e] > 0 &&
                    (m(e).bigHour = void 0),
                  (m(e).parsedDateParts = e._a.slice(0)),
                  (m(e).meridiem = e._meridiem),
                  (e._a[$e] = Vn(e._locale, e._a[$e], e._meridiem)),
                  null !== (l = m(e).era) &&
                    (e._a[Be] = e._locale.erasConvertYear(l, e._a[Be])),
                  jn(e),
                  bn(e);
              } else In(e);
            else Pn(e);
          }
          function Vn(e, t, n) {
            var r;
            return null == n
              ? t
              : null != e.meridiemHour
              ? e.meridiemHour(t, n)
              : null != e.isPM
              ? ((r = e.isPM(n)) && t < 12 && (t += 12),
                r || 12 !== t || (t = 0),
                t)
              : t;
          }
          function Yn(e) {
            var t,
              n,
              r,
              a,
              i,
              o,
              l = !1;
            if (0 === e._f.length)
              return (m(e).invalidFormat = !0), void (e._d = new Date(NaN));
            for (a = 0; a < e._f.length; a++)
              (i = 0),
                (o = !1),
                (t = _({}, e)),
                null != e._useUTC && (t._useUTC = e._useUTC),
                (t._f = e._f[a]),
                Wn(t),
                v(t) && (o = !0),
                (i += m(t).charsLeftOver),
                (i += 10 * m(t).unusedTokens.length),
                (m(t).score = i),
                l
                  ? i < r && ((r = i), (n = t))
                  : (null == r || i < r || o) &&
                    ((r = i), (n = t), o && (l = !0));
            h(e, n || t);
          }
          function Bn(e) {
            if (!e._d) {
              var t = ae(e._i),
                n = void 0 === t.day ? t.date : t.day;
              (e._a = d(
                [t.year, t.month, n, t.hour, t.minute, t.second, t.millisecond],
                function (e) {
                  return e && parseInt(e, 10);
                }
              )),
                jn(e);
            }
          }
          function Hn(e) {
            var t = new w(bn(Un(e)));
            return t._nextDay && (t.add(1, "d"), (t._nextDay = void 0)), t;
          }
          function Un(e) {
            var t = e._i,
              n = e._f;
            return (
              (e._locale = e._locale || vn(e._l)),
              null === t || (void 0 === n && "" === t)
                ? y({ nullInput: !0 })
                : ("string" === typeof t && (e._i = t = e._locale.preparse(t)),
                  k(t)
                    ? new w(bn(t))
                    : (f(t) ? (e._d = t) : i(n) ? Yn(e) : n ? Wn(e) : $n(e),
                      v(e) || (e._d = null),
                      e))
            );
          }
          function $n(e) {
            var t = e._i;
            u(t)
              ? (e._d = new Date(r.now()))
              : f(t)
              ? (e._d = new Date(t.valueOf()))
              : "string" === typeof t
              ? Rn(e)
              : i(t)
              ? ((e._a = d(t.slice(0), function (e) {
                  return parseInt(e, 10);
                })),
                jn(e))
              : o(t)
              ? Bn(e)
              : c(t)
              ? (e._d = new Date(t))
              : r.createFromInputFallback(e);
          }
          function Gn(e, t, n, r, a) {
            var l = {};
            return (
              (!0 !== t && !1 !== t) || ((r = t), (t = void 0)),
              (!0 !== n && !1 !== n) || ((r = n), (n = void 0)),
              ((o(e) && s(e)) || (i(e) && 0 === e.length)) && (e = void 0),
              (l._isAMomentObject = !0),
              (l._useUTC = l._isUTC = a),
              (l._l = n),
              (l._i = e),
              (l._f = t),
              (l._strict = r),
              Hn(l)
            );
          }
          function qn(e, t, n, r) {
            return Gn(e, t, n, r, !1);
          }
          (r.createFromInputFallback = C(
            "value provided is not in a recognized RFC2822 or ISO format. moment construction falls back to js Date(), which is not reliable across all browsers and versions. Non RFC2822/ISO date formats are discouraged. Please refer to http://momentjs.com/guides/#/warnings/js-date/ for more info.",
            function (e) {
              e._d = new Date(e._i + (e._useUTC ? " UTC" : ""));
            }
          )),
            (r.ISO_8601 = function () {}),
            (r.RFC_2822 = function () {});
          var Kn = C(
              "moment().min is deprecated, use moment.max instead. http://momentjs.com/guides/#/warnings/min-max/",
              function () {
                var e = qn.apply(null, arguments);
                return this.isValid() && e.isValid()
                  ? e < this
                    ? this
                    : e
                  : y();
              }
            ),
            Qn = C(
              "moment().max is deprecated, use moment.min instead. http://momentjs.com/guides/#/warnings/min-max/",
              function () {
                var e = qn.apply(null, arguments);
                return this.isValid() && e.isValid()
                  ? e > this
                    ? this
                    : e
                  : y();
              }
            );
          function Zn(e, t) {
            var n, r;
            if ((1 === t.length && i(t[0]) && (t = t[0]), !t.length))
              return qn();
            for (n = t[0], r = 1; r < t.length; ++r)
              (t[r].isValid() && !t[r][e](n)) || (n = t[r]);
            return n;
          }
          function Xn() {
            return Zn("isBefore", [].slice.call(arguments, 0));
          }
          function Jn() {
            return Zn("isAfter", [].slice.call(arguments, 0));
          }
          var er = function () {
              return Date.now ? Date.now() : +new Date();
            },
            tr = [
              "year",
              "quarter",
              "month",
              "week",
              "day",
              "hour",
              "minute",
              "second",
              "millisecond",
            ];
          function nr(e) {
            var t,
              n,
              r = !1;
            for (t in e)
              if (
                l(e, t) &&
                (-1 === Ye.call(tr, t) || (null != e[t] && isNaN(e[t])))
              )
                return !1;
            for (n = 0; n < tr.length; ++n)
              if (e[tr[n]]) {
                if (r) return !1;
                parseFloat(e[tr[n]]) !== ce(e[tr[n]]) && (r = !0);
              }
            return !0;
          }
          function rr() {
            return this._isValid;
          }
          function ar() {
            return Or(NaN);
          }
          function ir(e) {
            var t = ae(e),
              n = t.year || 0,
              r = t.quarter || 0,
              a = t.month || 0,
              i = t.week || t.isoWeek || 0,
              o = t.day || 0,
              l = t.hour || 0,
              s = t.minute || 0,
              u = t.second || 0,
              c = t.millisecond || 0;
            (this._isValid = nr(t)),
              (this._milliseconds = +c + 1e3 * u + 6e4 * s + 1e3 * l * 60 * 60),
              (this._days = +o + 7 * i),
              (this._months = +a + 3 * r + 12 * n),
              (this._data = {}),
              (this._locale = vn()),
              this._bubble();
          }
          function or(e) {
            return e instanceof ir;
          }
          function lr(e) {
            return e < 0 ? -1 * Math.round(-1 * e) : Math.round(e);
          }
          function sr(e, t, n) {
            var r,
              a = Math.min(e.length, t.length),
              i = Math.abs(e.length - t.length),
              o = 0;
            for (r = 0; r < a; r++)
              ((n && e[r] !== t[r]) || (!n && ce(e[r]) !== ce(t[r]))) && o++;
            return o + i;
          }
          function ur(e, t) {
            W(e, 0, 0, function () {
              var e = this.utcOffset(),
                n = "+";
              return (
                e < 0 && ((e = -e), (n = "-")),
                n + R(~~(e / 60), 2) + t + R(~~e % 60, 2)
              );
            });
          }
          ur("Z", ":"),
            ur("ZZ", ""),
            Ie("Z", Te),
            Ie("ZZ", Te),
            ze(["Z", "ZZ"], function (e, t, n) {
              (n._useUTC = !0), (n._tzm = fr(Te, e));
            });
          var cr = /([\+\-]|\d\d)/gi;
          function fr(e, t) {
            var n,
              r,
              a = (t || "").match(e);
            return null === a
              ? null
              : 0 ===
                (r =
                  60 *
                    (n = ((a[a.length - 1] || []) + "").match(cr) || [
                      "-",
                      0,
                      0,
                    ])[1] +
                  ce(n[2]))
              ? 0
              : "+" === n[0]
              ? r
              : -r;
          }
          function dr(e, t) {
            var n, a;
            return t._isUTC
              ? ((n = t.clone()),
                (a =
                  (k(e) || f(e) ? e.valueOf() : qn(e).valueOf()) - n.valueOf()),
                n._d.setTime(n._d.valueOf() + a),
                r.updateOffset(n, !1),
                n)
              : qn(e).local();
          }
          function hr(e) {
            return -Math.round(e._d.getTimezoneOffset());
          }
          function pr(e, t, n) {
            var a,
              i = this._offset || 0;
            if (!this.isValid()) return null != e ? this : NaN;
            if (null != e) {
              if ("string" === typeof e) {
                if (null === (e = fr(Te, e))) return this;
              } else Math.abs(e) < 16 && !n && (e *= 60);
              return (
                !this._isUTC && t && (a = hr(this)),
                (this._offset = e),
                (this._isUTC = !0),
                null != a && this.add(a, "m"),
                i !== e &&
                  (!t || this._changeInProgress
                    ? Ar(this, Or(e - i, "m"), 1, !1)
                    : this._changeInProgress ||
                      ((this._changeInProgress = !0),
                      r.updateOffset(this, !0),
                      (this._changeInProgress = null))),
                this
              );
            }
            return this._isUTC ? i : hr(this);
          }
          function gr(e, t) {
            return null != e
              ? ("string" !== typeof e && (e = -e), this.utcOffset(e, t), this)
              : -this.utcOffset();
          }
          function mr(e) {
            return this.utcOffset(0, e);
          }
          function vr(e) {
            return (
              this._isUTC &&
                (this.utcOffset(0, e),
                (this._isUTC = !1),
                e && this.subtract(hr(this), "m")),
              this
            );
          }
          function yr() {
            if (null != this._tzm) this.utcOffset(this._tzm, !1, !0);
            else if ("string" === typeof this._i) {
              var e = fr(De, this._i);
              null != e ? this.utcOffset(e) : this.utcOffset(0, !0);
            }
            return this;
          }
          function br(e) {
            return (
              !!this.isValid() &&
              ((e = e ? qn(e).utcOffset() : 0),
              (this.utcOffset() - e) % 60 === 0)
            );
          }
          function xr() {
            return (
              this.utcOffset() > this.clone().month(0).utcOffset() ||
              this.utcOffset() > this.clone().month(5).utcOffset()
            );
          }
          function _r() {
            if (!u(this._isDSTShifted)) return this._isDSTShifted;
            var e,
              t = {};
            return (
              _(t, this),
              (t = Un(t))._a
                ? ((e = t._isUTC ? p(t._a) : qn(t._a)),
                  (this._isDSTShifted =
                    this.isValid() && sr(t._a, e.toArray()) > 0))
                : (this._isDSTShifted = !1),
              this._isDSTShifted
            );
          }
          function wr() {
            return !!this.isValid() && !this._isUTC;
          }
          function kr() {
            return !!this.isValid() && this._isUTC;
          }
          function Sr() {
            return !!this.isValid() && this._isUTC && 0 === this._offset;
          }
          r.updateOffset = function () {};
          var Cr = /^(-|\+)?(?:(\d*)[. ])?(\d+):(\d+)(?::(\d+)(\.\d*)?)?$/,
            Mr = /^(-|\+)?P(?:([-+]?[0-9,.]*)Y)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)W)?(?:([-+]?[0-9,.]*)D)?(?:T(?:([-+]?[0-9,.]*)H)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)S)?)?$/;
          function Or(e, t) {
            var n,
              r,
              a,
              i = e,
              o = null;
            return (
              or(e)
                ? (i = { ms: e._milliseconds, d: e._days, M: e._months })
                : c(e) || !isNaN(+e)
                ? ((i = {}), t ? (i[t] = +e) : (i.milliseconds = +e))
                : (o = Cr.exec(e))
                ? ((n = "-" === o[1] ? -1 : 1),
                  (i = {
                    y: 0,
                    d: ce(o[Ue]) * n,
                    h: ce(o[$e]) * n,
                    m: ce(o[Ge]) * n,
                    s: ce(o[qe]) * n,
                    ms: ce(lr(1e3 * o[Ke])) * n,
                  }))
                : (o = Mr.exec(e))
                ? ((n = "-" === o[1] ? -1 : 1),
                  (i = {
                    y: Pr(o[2], n),
                    M: Pr(o[3], n),
                    w: Pr(o[4], n),
                    d: Pr(o[5], n),
                    h: Pr(o[6], n),
                    m: Pr(o[7], n),
                    s: Pr(o[8], n),
                  }))
                : null == i
                ? (i = {})
                : "object" === typeof i &&
                  ("from" in i || "to" in i) &&
                  ((a = Dr(qn(i.from), qn(i.to))),
                  ((i = {}).ms = a.milliseconds),
                  (i.M = a.months)),
              (r = new ir(i)),
              or(e) && l(e, "_locale") && (r._locale = e._locale),
              or(e) && l(e, "_isValid") && (r._isValid = e._isValid),
              r
            );
          }
          function Pr(e, t) {
            var n = e && parseFloat(e.replace(",", "."));
            return (isNaN(n) ? 0 : n) * t;
          }
          function Er(e, t) {
            var n = {};
            return (
              (n.months = t.month() - e.month() + 12 * (t.year() - e.year())),
              e.clone().add(n.months, "M").isAfter(t) && --n.months,
              (n.milliseconds = +t - +e.clone().add(n.months, "M")),
              n
            );
          }
          function Dr(e, t) {
            var n;
            return e.isValid() && t.isValid()
              ? ((t = dr(t, e)),
                e.isBefore(t)
                  ? (n = Er(e, t))
                  : (((n = Er(t, e)).milliseconds = -n.milliseconds),
                    (n.months = -n.months)),
                n)
              : { milliseconds: 0, months: 0 };
          }
          function Tr(e, t) {
            return function (n, r) {
              var a;
              return (
                null === r ||
                  isNaN(+r) ||
                  (P(
                    t,
                    "moment()." +
                      t +
                      "(period, number) is deprecated. Please use moment()." +
                      t +
                      "(number, period). See http://momentjs.com/guides/#/warnings/add-inverted-param/ for more info."
                  ),
                  (a = n),
                  (n = r),
                  (r = a)),
                Ar(this, Or(n, r), e),
                this
              );
            };
          }
          function Ar(e, t, n, a) {
            var i = t._milliseconds,
              o = lr(t._days),
              l = lr(t._months);
            e.isValid() &&
              ((a = null == a || a),
              l && ut(e, de(e, "Month") + l * n),
              o && he(e, "Date", de(e, "Date") + o * n),
              i && e._d.setTime(e._d.valueOf() + i * n),
              a && r.updateOffset(e, o || l));
          }
          (Or.fn = ir.prototype), (Or.invalid = ar);
          var Nr = Tr(1, "add"),
            Ir = Tr(-1, "subtract");
          function Rr(e) {
            return "string" === typeof e || e instanceof String;
          }
          function Lr(e) {
            return (
              k(e) ||
              f(e) ||
              Rr(e) ||
              c(e) ||
              jr(e) ||
              Fr(e) ||
              null === e ||
              void 0 === e
            );
          }
          function Fr(e) {
            var t,
              n,
              r = o(e) && !s(e),
              a = !1,
              i = [
                "years",
                "year",
                "y",
                "months",
                "month",
                "M",
                "days",
                "day",
                "d",
                "dates",
                "date",
                "D",
                "hours",
                "hour",
                "h",
                "minutes",
                "minute",
                "m",
                "seconds",
                "second",
                "s",
                "milliseconds",
                "millisecond",
                "ms",
              ];
            for (t = 0; t < i.length; t += 1) (n = i[t]), (a = a || l(e, n));
            return r && a;
          }
          function jr(e) {
            var t = i(e),
              n = !1;
            return (
              t &&
                (n =
                  0 ===
                  e.filter(function (t) {
                    return !c(t) && Rr(e);
                  }).length),
              t && n
            );
          }
          function zr(e) {
            var t,
              n,
              r = o(e) && !s(e),
              a = !1,
              i = [
                "sameDay",
                "nextDay",
                "lastDay",
                "nextWeek",
                "lastWeek",
                "sameElse",
              ];
            for (t = 0; t < i.length; t += 1) (n = i[t]), (a = a || l(e, n));
            return r && a;
          }
          function Wr(e, t) {
            var n = e.diff(t, "days", !0);
            return n < -6
              ? "sameElse"
              : n < -1
              ? "lastWeek"
              : n < 0
              ? "lastDay"
              : n < 1
              ? "sameDay"
              : n < 2
              ? "nextDay"
              : n < 7
              ? "nextWeek"
              : "sameElse";
          }
          function Vr(e, t) {
            1 === arguments.length &&
              (arguments[0]
                ? Lr(arguments[0])
                  ? ((e = arguments[0]), (t = void 0))
                  : zr(arguments[0]) && ((t = arguments[0]), (e = void 0))
                : ((e = void 0), (t = void 0)));
            var n = e || qn(),
              a = dr(n, this).startOf("day"),
              i = r.calendarFormat(this, a) || "sameElse",
              o = t && (E(t[i]) ? t[i].call(this, n) : t[i]);
            return this.format(o || this.localeData().calendar(i, this, qn(n)));
          }
          function Yr() {
            return new w(this);
          }
          function Br(e, t) {
            var n = k(e) ? e : qn(e);
            return (
              !(!this.isValid() || !n.isValid()) &&
              ("millisecond" === (t = re(t) || "millisecond")
                ? this.valueOf() > n.valueOf()
                : n.valueOf() < this.clone().startOf(t).valueOf())
            );
          }
          function Hr(e, t) {
            var n = k(e) ? e : qn(e);
            return (
              !(!this.isValid() || !n.isValid()) &&
              ("millisecond" === (t = re(t) || "millisecond")
                ? this.valueOf() < n.valueOf()
                : this.clone().endOf(t).valueOf() < n.valueOf())
            );
          }
          function Ur(e, t, n, r) {
            var a = k(e) ? e : qn(e),
              i = k(t) ? t : qn(t);
            return (
              !!(this.isValid() && a.isValid() && i.isValid()) &&
              ("(" === (r = r || "()")[0]
                ? this.isAfter(a, n)
                : !this.isBefore(a, n)) &&
              (")" === r[1] ? this.isBefore(i, n) : !this.isAfter(i, n))
            );
          }
          function $r(e, t) {
            var n,
              r = k(e) ? e : qn(e);
            return (
              !(!this.isValid() || !r.isValid()) &&
              ("millisecond" === (t = re(t) || "millisecond")
                ? this.valueOf() === r.valueOf()
                : ((n = r.valueOf()),
                  this.clone().startOf(t).valueOf() <= n &&
                    n <= this.clone().endOf(t).valueOf()))
            );
          }
          function Gr(e, t) {
            return this.isSame(e, t) || this.isAfter(e, t);
          }
          function qr(e, t) {
            return this.isSame(e, t) || this.isBefore(e, t);
          }
          function Kr(e, t, n) {
            var r, a, i;
            if (!this.isValid()) return NaN;
            if (!(r = dr(e, this)).isValid()) return NaN;
            switch (
              ((a = 6e4 * (r.utcOffset() - this.utcOffset())), (t = re(t)))
            ) {
              case "year":
                i = Qr(this, r) / 12;
                break;
              case "month":
                i = Qr(this, r);
                break;
              case "quarter":
                i = Qr(this, r) / 3;
                break;
              case "second":
                i = (this - r) / 1e3;
                break;
              case "minute":
                i = (this - r) / 6e4;
                break;
              case "hour":
                i = (this - r) / 36e5;
                break;
              case "day":
                i = (this - r - a) / 864e5;
                break;
              case "week":
                i = (this - r - a) / 6048e5;
                break;
              default:
                i = this - r;
            }
            return n ? i : ue(i);
          }
          function Qr(e, t) {
            if (e.date() < t.date()) return -Qr(t, e);
            var n = 12 * (t.year() - e.year()) + (t.month() - e.month()),
              r = e.clone().add(n, "months");
            return (
              -(
                n +
                (t - r < 0
                  ? (t - r) / (r - e.clone().add(n - 1, "months"))
                  : (t - r) / (e.clone().add(n + 1, "months") - r))
              ) || 0
            );
          }
          function Zr() {
            return this.clone()
              .locale("en")
              .format("ddd MMM DD YYYY HH:mm:ss [GMT]ZZ");
          }
          function Xr(e) {
            if (!this.isValid()) return null;
            var t = !0 !== e,
              n = t ? this.clone().utc() : this;
            return n.year() < 0 || n.year() > 9999
              ? B(
                  n,
                  t
                    ? "YYYYYY-MM-DD[T]HH:mm:ss.SSS[Z]"
                    : "YYYYYY-MM-DD[T]HH:mm:ss.SSSZ"
                )
              : E(Date.prototype.toISOString)
              ? t
                ? this.toDate().toISOString()
                : new Date(this.valueOf() + 60 * this.utcOffset() * 1e3)
                    .toISOString()
                    .replace("Z", B(n, "Z"))
              : B(
                  n,
                  t
                    ? "YYYY-MM-DD[T]HH:mm:ss.SSS[Z]"
                    : "YYYY-MM-DD[T]HH:mm:ss.SSSZ"
                );
          }
          function Jr() {
            if (!this.isValid()) return "moment.invalid(/* " + this._i + " */)";
            var e,
              t,
              n,
              r,
              a = "moment",
              i = "";
            return (
              this.isLocal() ||
                ((a =
                  0 === this.utcOffset() ? "moment.utc" : "moment.parseZone"),
                (i = "Z")),
              (e = "[" + a + '("]'),
              (t = 0 <= this.year() && this.year() <= 9999 ? "YYYY" : "YYYYYY"),
              (n = "-MM-DD[T]HH:mm:ss.SSS"),
              (r = i + '[")]'),
              this.format(e + t + n + r)
            );
          }
          function ea(e) {
            e || (e = this.isUtc() ? r.defaultFormatUtc : r.defaultFormat);
            var t = B(this, e);
            return this.localeData().postformat(t);
          }
          function ta(e, t) {
            return this.isValid() && ((k(e) && e.isValid()) || qn(e).isValid())
              ? Or({ to: this, from: e }).locale(this.locale()).humanize(!t)
              : this.localeData().invalidDate();
          }
          function na(e) {
            return this.from(qn(), e);
          }
          function ra(e, t) {
            return this.isValid() && ((k(e) && e.isValid()) || qn(e).isValid())
              ? Or({ from: this, to: e }).locale(this.locale()).humanize(!t)
              : this.localeData().invalidDate();
          }
          function aa(e) {
            return this.to(qn(), e);
          }
          function ia(e) {
            var t;
            return void 0 === e
              ? this._locale._abbr
              : (null != (t = vn(e)) && (this._locale = t), this);
          }
          (r.defaultFormat = "YYYY-MM-DDTHH:mm:ssZ"),
            (r.defaultFormatUtc = "YYYY-MM-DDTHH:mm:ss[Z]");
          var oa = C(
            "moment().lang() is deprecated. Instead, use moment().localeData() to get the language configuration. Use moment().locale() to change languages.",
            function (e) {
              return void 0 === e ? this.localeData() : this.locale(e);
            }
          );
          function la() {
            return this._locale;
          }
          var sa = 1e3,
            ua = 60 * sa,
            ca = 60 * ua,
            fa = 3506328 * ca;
          function da(e, t) {
            return ((e % t) + t) % t;
          }
          function ha(e, t, n) {
            return e < 100 && e >= 0
              ? new Date(e + 400, t, n) - fa
              : new Date(e, t, n).valueOf();
          }
          function pa(e, t, n) {
            return e < 100 && e >= 0
              ? Date.UTC(e + 400, t, n) - fa
              : Date.UTC(e, t, n);
          }
          function ga(e) {
            var t, n;
            if (
              void 0 === (e = re(e)) ||
              "millisecond" === e ||
              !this.isValid()
            )
              return this;
            switch (((n = this._isUTC ? pa : ha), e)) {
              case "year":
                t = n(this.year(), 0, 1);
                break;
              case "quarter":
                t = n(this.year(), this.month() - (this.month() % 3), 1);
                break;
              case "month":
                t = n(this.year(), this.month(), 1);
                break;
              case "week":
                t = n(this.year(), this.month(), this.date() - this.weekday());
                break;
              case "isoWeek":
                t = n(
                  this.year(),
                  this.month(),
                  this.date() - (this.isoWeekday() - 1)
                );
                break;
              case "day":
              case "date":
                t = n(this.year(), this.month(), this.date());
                break;
              case "hour":
                (t = this._d.valueOf()),
                  (t -= da(t + (this._isUTC ? 0 : this.utcOffset() * ua), ca));
                break;
              case "minute":
                (t = this._d.valueOf()), (t -= da(t, ua));
                break;
              case "second":
                (t = this._d.valueOf()), (t -= da(t, sa));
            }
            return this._d.setTime(t), r.updateOffset(this, !0), this;
          }
          function ma(e) {
            var t, n;
            if (
              void 0 === (e = re(e)) ||
              "millisecond" === e ||
              !this.isValid()
            )
              return this;
            switch (((n = this._isUTC ? pa : ha), e)) {
              case "year":
                t = n(this.year() + 1, 0, 1) - 1;
                break;
              case "quarter":
                t =
                  n(this.year(), this.month() - (this.month() % 3) + 3, 1) - 1;
                break;
              case "month":
                t = n(this.year(), this.month() + 1, 1) - 1;
                break;
              case "week":
                t =
                  n(
                    this.year(),
                    this.month(),
                    this.date() - this.weekday() + 7
                  ) - 1;
                break;
              case "isoWeek":
                t =
                  n(
                    this.year(),
                    this.month(),
                    this.date() - (this.isoWeekday() - 1) + 7
                  ) - 1;
                break;
              case "day":
              case "date":
                t = n(this.year(), this.month(), this.date() + 1) - 1;
                break;
              case "hour":
                (t = this._d.valueOf()),
                  (t +=
                    ca -
                    da(t + (this._isUTC ? 0 : this.utcOffset() * ua), ca) -
                    1);
                break;
              case "minute":
                (t = this._d.valueOf()), (t += ua - da(t, ua) - 1);
                break;
              case "second":
                (t = this._d.valueOf()), (t += sa - da(t, sa) - 1);
            }
            return this._d.setTime(t), r.updateOffset(this, !0), this;
          }
          function va() {
            return this._d.valueOf() - 6e4 * (this._offset || 0);
          }
          function ya() {
            return Math.floor(this.valueOf() / 1e3);
          }
          function ba() {
            return new Date(this.valueOf());
          }
          function xa() {
            var e = this;
            return [
              e.year(),
              e.month(),
              e.date(),
              e.hour(),
              e.minute(),
              e.second(),
              e.millisecond(),
            ];
          }
          function _a() {
            var e = this;
            return {
              years: e.year(),
              months: e.month(),
              date: e.date(),
              hours: e.hours(),
              minutes: e.minutes(),
              seconds: e.seconds(),
              milliseconds: e.milliseconds(),
            };
          }
          function wa() {
            return this.isValid() ? this.toISOString() : null;
          }
          function ka() {
            return v(this);
          }
          function Sa() {
            return h({}, m(this));
          }
          function Ca() {
            return m(this).overflow;
          }
          function Ma() {
            return {
              input: this._i,
              format: this._f,
              locale: this._locale,
              isUTC: this._isUTC,
              strict: this._strict,
            };
          }
          function Oa(e, t) {
            var n,
              a,
              i,
              o = this._eras || vn("en")._eras;
            for (n = 0, a = o.length; n < a; ++n) {
              switch (typeof o[n].since) {
                case "string":
                  (i = r(o[n].since).startOf("day")),
                    (o[n].since = i.valueOf());
              }
              switch (typeof o[n].until) {
                case "undefined":
                  o[n].until = 1 / 0;
                  break;
                case "string":
                  (i = r(o[n].until).startOf("day").valueOf()),
                    (o[n].until = i.valueOf());
              }
            }
            return o;
          }
          function Pa(e, t, n) {
            var r,
              a,
              i,
              o,
              l,
              s = this.eras();
            for (e = e.toUpperCase(), r = 0, a = s.length; r < a; ++r)
              if (
                ((i = s[r].name.toUpperCase()),
                (o = s[r].abbr.toUpperCase()),
                (l = s[r].narrow.toUpperCase()),
                n)
              )
                switch (t) {
                  case "N":
                  case "NN":
                  case "NNN":
                    if (o === e) return s[r];
                    break;
                  case "NNNN":
                    if (i === e) return s[r];
                    break;
                  case "NNNNN":
                    if (l === e) return s[r];
                }
              else if ([i, o, l].indexOf(e) >= 0) return s[r];
          }
          function Ea(e, t) {
            var n = e.since <= e.until ? 1 : -1;
            return void 0 === t
              ? r(e.since).year()
              : r(e.since).year() + (t - e.offset) * n;
          }
          function Da() {
            var e,
              t,
              n,
              r = this.localeData().eras();
            for (e = 0, t = r.length; e < t; ++e) {
              if (
                ((n = this.clone().startOf("day").valueOf()),
                r[e].since <= n && n <= r[e].until)
              )
                return r[e].name;
              if (r[e].until <= n && n <= r[e].since) return r[e].name;
            }
            return "";
          }
          function Ta() {
            var e,
              t,
              n,
              r = this.localeData().eras();
            for (e = 0, t = r.length; e < t; ++e) {
              if (
                ((n = this.clone().startOf("day").valueOf()),
                r[e].since <= n && n <= r[e].until)
              )
                return r[e].narrow;
              if (r[e].until <= n && n <= r[e].since) return r[e].narrow;
            }
            return "";
          }
          function Aa() {
            var e,
              t,
              n,
              r = this.localeData().eras();
            for (e = 0, t = r.length; e < t; ++e) {
              if (
                ((n = this.clone().startOf("day").valueOf()),
                r[e].since <= n && n <= r[e].until)
              )
                return r[e].abbr;
              if (r[e].until <= n && n <= r[e].since) return r[e].abbr;
            }
            return "";
          }
          function Na() {
            var e,
              t,
              n,
              a,
              i = this.localeData().eras();
            for (e = 0, t = i.length; e < t; ++e)
              if (
                ((n = i[e].since <= i[e].until ? 1 : -1),
                (a = this.clone().startOf("day").valueOf()),
                (i[e].since <= a && a <= i[e].until) ||
                  (i[e].until <= a && a <= i[e].since))
              )
                return (this.year() - r(i[e].since).year()) * n + i[e].offset;
            return this.year();
          }
          function Ia(e) {
            return (
              l(this, "_erasNameRegex") || Va.call(this),
              e ? this._erasNameRegex : this._erasRegex
            );
          }
          function Ra(e) {
            return (
              l(this, "_erasAbbrRegex") || Va.call(this),
              e ? this._erasAbbrRegex : this._erasRegex
            );
          }
          function La(e) {
            return (
              l(this, "_erasNarrowRegex") || Va.call(this),
              e ? this._erasNarrowRegex : this._erasRegex
            );
          }
          function Fa(e, t) {
            return t.erasAbbrRegex(e);
          }
          function ja(e, t) {
            return t.erasNameRegex(e);
          }
          function za(e, t) {
            return t.erasNarrowRegex(e);
          }
          function Wa(e, t) {
            return t._eraYearOrdinalRegex || Pe;
          }
          function Va() {
            var e,
              t,
              n = [],
              r = [],
              a = [],
              i = [],
              o = this.eras();
            for (e = 0, t = o.length; e < t; ++e)
              r.push(Fe(o[e].name)),
                n.push(Fe(o[e].abbr)),
                a.push(Fe(o[e].narrow)),
                i.push(Fe(o[e].name)),
                i.push(Fe(o[e].abbr)),
                i.push(Fe(o[e].narrow));
            (this._erasRegex = new RegExp("^(" + i.join("|") + ")", "i")),
              (this._erasNameRegex = new RegExp("^(" + r.join("|") + ")", "i")),
              (this._erasAbbrRegex = new RegExp("^(" + n.join("|") + ")", "i")),
              (this._erasNarrowRegex = new RegExp(
                "^(" + a.join("|") + ")",
                "i"
              ));
          }
          function Ya(e, t) {
            W(0, [e, e.length], 0, t);
          }
          function Ba(e) {
            return Ka.call(
              this,
              e,
              this.week(),
              this.weekday(),
              this.localeData()._week.dow,
              this.localeData()._week.doy
            );
          }
          function Ha(e) {
            return Ka.call(this, e, this.isoWeek(), this.isoWeekday(), 1, 4);
          }
          function Ua() {
            return kt(this.year(), 1, 4);
          }
          function $a() {
            return kt(this.isoWeekYear(), 1, 4);
          }
          function Ga() {
            var e = this.localeData()._week;
            return kt(this.year(), e.dow, e.doy);
          }
          function qa() {
            var e = this.localeData()._week;
            return kt(this.weekYear(), e.dow, e.doy);
          }
          function Ka(e, t, n, r, a) {
            var i;
            return null == e
              ? wt(this, r, a).year
              : (t > (i = kt(e, r, a)) && (t = i),
                Qa.call(this, e, t, n, r, a));
          }
          function Qa(e, t, n, r, a) {
            var i = _t(e, t, n, r, a),
              o = bt(i.year, 0, i.dayOfYear);
            return (
              this.year(o.getUTCFullYear()),
              this.month(o.getUTCMonth()),
              this.date(o.getUTCDate()),
              this
            );
          }
          function Za(e) {
            return null == e
              ? Math.ceil((this.month() + 1) / 3)
              : this.month(3 * (e - 1) + (this.month() % 3));
          }
          W("N", 0, 0, "eraAbbr"),
            W("NN", 0, 0, "eraAbbr"),
            W("NNN", 0, 0, "eraAbbr"),
            W("NNNN", 0, 0, "eraName"),
            W("NNNNN", 0, 0, "eraNarrow"),
            W("y", ["y", 1], "yo", "eraYear"),
            W("y", ["yy", 2], 0, "eraYear"),
            W("y", ["yyy", 3], 0, "eraYear"),
            W("y", ["yyyy", 4], 0, "eraYear"),
            Ie("N", Fa),
            Ie("NN", Fa),
            Ie("NNN", Fa),
            Ie("NNNN", ja),
            Ie("NNNNN", za),
            ze(["N", "NN", "NNN", "NNNN", "NNNNN"], function (e, t, n, r) {
              var a = n._locale.erasParse(e, r, n._strict);
              a ? (m(n).era = a) : (m(n).invalidEra = e);
            }),
            Ie("y", Pe),
            Ie("yy", Pe),
            Ie("yyy", Pe),
            Ie("yyyy", Pe),
            Ie("yo", Wa),
            ze(["y", "yy", "yyy", "yyyy"], Be),
            ze(["yo"], function (e, t, n, r) {
              var a;
              n._locale._eraYearOrdinalRegex &&
                (a = e.match(n._locale._eraYearOrdinalRegex)),
                n._locale.eraYearOrdinalParse
                  ? (t[Be] = n._locale.eraYearOrdinalParse(e, a))
                  : (t[Be] = parseInt(e, 10));
            }),
            W(0, ["gg", 2], 0, function () {
              return this.weekYear() % 100;
            }),
            W(0, ["GG", 2], 0, function () {
              return this.isoWeekYear() % 100;
            }),
            Ya("gggg", "weekYear"),
            Ya("ggggg", "weekYear"),
            Ya("GGGG", "isoWeekYear"),
            Ya("GGGGG", "isoWeekYear"),
            ne("weekYear", "gg"),
            ne("isoWeekYear", "GG"),
            oe("weekYear", 1),
            oe("isoWeekYear", 1),
            Ie("G", Ee),
            Ie("g", Ee),
            Ie("GG", we, ye),
            Ie("gg", we, ye),
            Ie("GGGG", Me, xe),
            Ie("gggg", Me, xe),
            Ie("GGGGG", Oe, _e),
            Ie("ggggg", Oe, _e),
            We(["gggg", "ggggg", "GGGG", "GGGGG"], function (e, t, n, r) {
              t[r.substr(0, 2)] = ce(e);
            }),
            We(["gg", "GG"], function (e, t, n, a) {
              t[a] = r.parseTwoDigitYear(e);
            }),
            W("Q", 0, "Qo", "quarter"),
            ne("quarter", "Q"),
            oe("quarter", 7),
            Ie("Q", ve),
            ze("Q", function (e, t) {
              t[He] = 3 * (ce(e) - 1);
            }),
            W("D", ["DD", 2], "Do", "date"),
            ne("date", "D"),
            oe("date", 9),
            Ie("D", we),
            Ie("DD", we, ye),
            Ie("Do", function (e, t) {
              return e
                ? t._dayOfMonthOrdinalParse || t._ordinalParse
                : t._dayOfMonthOrdinalParseLenient;
            }),
            ze(["D", "DD"], Ue),
            ze("Do", function (e, t) {
              t[Ue] = ce(e.match(we)[0]);
            });
          var Xa = fe("Date", !0);
          function Ja(e) {
            var t =
              Math.round(
                (this.clone().startOf("day") - this.clone().startOf("year")) /
                  864e5
              ) + 1;
            return null == e ? t : this.add(e - t, "d");
          }
          W("DDD", ["DDDD", 3], "DDDo", "dayOfYear"),
            ne("dayOfYear", "DDD"),
            oe("dayOfYear", 4),
            Ie("DDD", Ce),
            Ie("DDDD", be),
            ze(["DDD", "DDDD"], function (e, t, n) {
              n._dayOfYear = ce(e);
            }),
            W("m", ["mm", 2], 0, "minute"),
            ne("minute", "m"),
            oe("minute", 14),
            Ie("m", we),
            Ie("mm", we, ye),
            ze(["m", "mm"], Ge);
          var ei = fe("Minutes", !1);
          W("s", ["ss", 2], 0, "second"),
            ne("second", "s"),
            oe("second", 15),
            Ie("s", we),
            Ie("ss", we, ye),
            ze(["s", "ss"], qe);
          var ti,
            ni,
            ri = fe("Seconds", !1);
          for (
            W("S", 0, 0, function () {
              return ~~(this.millisecond() / 100);
            }),
              W(0, ["SS", 2], 0, function () {
                return ~~(this.millisecond() / 10);
              }),
              W(0, ["SSS", 3], 0, "millisecond"),
              W(0, ["SSSS", 4], 0, function () {
                return 10 * this.millisecond();
              }),
              W(0, ["SSSSS", 5], 0, function () {
                return 100 * this.millisecond();
              }),
              W(0, ["SSSSSS", 6], 0, function () {
                return 1e3 * this.millisecond();
              }),
              W(0, ["SSSSSSS", 7], 0, function () {
                return 1e4 * this.millisecond();
              }),
              W(0, ["SSSSSSSS", 8], 0, function () {
                return 1e5 * this.millisecond();
              }),
              W(0, ["SSSSSSSSS", 9], 0, function () {
                return 1e6 * this.millisecond();
              }),
              ne("millisecond", "ms"),
              oe("millisecond", 16),
              Ie("S", Ce, ve),
              Ie("SS", Ce, ye),
              Ie("SSS", Ce, be),
              ti = "SSSS";
            ti.length <= 9;
            ti += "S"
          )
            Ie(ti, Pe);
          function ai(e, t) {
            t[Ke] = ce(1e3 * ("0." + e));
          }
          for (ti = "S"; ti.length <= 9; ti += "S") ze(ti, ai);
          function ii() {
            return this._isUTC ? "UTC" : "";
          }
          function oi() {
            return this._isUTC ? "Coordinated Universal Time" : "";
          }
          (ni = fe("Milliseconds", !1)),
            W("z", 0, 0, "zoneAbbr"),
            W("zz", 0, 0, "zoneName");
          var li = w.prototype;
          function si(e) {
            return qn(1e3 * e);
          }
          function ui() {
            return qn.apply(null, arguments).parseZone();
          }
          function ci(e) {
            return e;
          }
          (li.add = Nr),
            (li.calendar = Vr),
            (li.clone = Yr),
            (li.diff = Kr),
            (li.endOf = ma),
            (li.format = ea),
            (li.from = ta),
            (li.fromNow = na),
            (li.to = ra),
            (li.toNow = aa),
            (li.get = pe),
            (li.invalidAt = Ca),
            (li.isAfter = Br),
            (li.isBefore = Hr),
            (li.isBetween = Ur),
            (li.isSame = $r),
            (li.isSameOrAfter = Gr),
            (li.isSameOrBefore = qr),
            (li.isValid = ka),
            (li.lang = oa),
            (li.locale = ia),
            (li.localeData = la),
            (li.max = Qn),
            (li.min = Kn),
            (li.parsingFlags = Sa),
            (li.set = ge),
            (li.startOf = ga),
            (li.subtract = Ir),
            (li.toArray = xa),
            (li.toObject = _a),
            (li.toDate = ba),
            (li.toISOString = Xr),
            (li.inspect = Jr),
            "undefined" !== typeof Symbol &&
              null != Symbol.for &&
              (li[Symbol.for("nodejs.util.inspect.custom")] = function () {
                return "Moment<" + this.format() + ">";
              }),
            (li.toJSON = wa),
            (li.toString = Zr),
            (li.unix = ya),
            (li.valueOf = va),
            (li.creationData = Ma),
            (li.eraName = Da),
            (li.eraNarrow = Ta),
            (li.eraAbbr = Aa),
            (li.eraYear = Na),
            (li.year = mt),
            (li.isLeapYear = vt),
            (li.weekYear = Ba),
            (li.isoWeekYear = Ha),
            (li.quarter = li.quarters = Za),
            (li.month = ct),
            (li.daysInMonth = ft),
            (li.week = li.weeks = Pt),
            (li.isoWeek = li.isoWeeks = Et),
            (li.weeksInYear = Ga),
            (li.weeksInWeekYear = qa),
            (li.isoWeeksInYear = Ua),
            (li.isoWeeksInISOWeekYear = $a),
            (li.date = Xa),
            (li.day = li.days = Ht),
            (li.weekday = Ut),
            (li.isoWeekday = $t),
            (li.dayOfYear = Ja),
            (li.hour = li.hours = rn),
            (li.minute = li.minutes = ei),
            (li.second = li.seconds = ri),
            (li.millisecond = li.milliseconds = ni),
            (li.utcOffset = pr),
            (li.utc = mr),
            (li.local = vr),
            (li.parseZone = yr),
            (li.hasAlignedHourOffset = br),
            (li.isDST = xr),
            (li.isLocal = wr),
            (li.isUtcOffset = kr),
            (li.isUtc = Sr),
            (li.isUTC = Sr),
            (li.zoneAbbr = ii),
            (li.zoneName = oi),
            (li.dates = C(
              "dates accessor is deprecated. Use date instead.",
              Xa
            )),
            (li.months = C(
              "months accessor is deprecated. Use month instead",
              ct
            )),
            (li.years = C(
              "years accessor is deprecated. Use year instead",
              mt
            )),
            (li.zone = C(
              "moment().zone is deprecated, use moment().utcOffset instead. http://momentjs.com/guides/#/warnings/zone/",
              gr
            )),
            (li.isDSTShifted = C(
              "isDSTShifted is deprecated. See http://momentjs.com/guides/#/warnings/dst-shifted/ for more information",
              _r
            ));
          var fi = A.prototype;
          function di(e, t, n, r) {
            var a = vn(),
              i = p().set(r, t);
            return a[n](i, e);
          }
          function hi(e, t, n) {
            if ((c(e) && ((t = e), (e = void 0)), (e = e || ""), null != t))
              return di(e, t, n, "month");
            var r,
              a = [];
            for (r = 0; r < 12; r++) a[r] = di(e, r, n, "month");
            return a;
          }
          function pi(e, t, n, r) {
            "boolean" === typeof e
              ? (c(t) && ((n = t), (t = void 0)), (t = t || ""))
              : ((n = t = e),
                (e = !1),
                c(t) && ((n = t), (t = void 0)),
                (t = t || ""));
            var a,
              i = vn(),
              o = e ? i._week.dow : 0,
              l = [];
            if (null != n) return di(t, (n + o) % 7, r, "day");
            for (a = 0; a < 7; a++) l[a] = di(t, (a + o) % 7, r, "day");
            return l;
          }
          function gi(e, t) {
            return hi(e, t, "months");
          }
          function mi(e, t) {
            return hi(e, t, "monthsShort");
          }
          function vi(e, t, n) {
            return pi(e, t, n, "weekdays");
          }
          function yi(e, t, n) {
            return pi(e, t, n, "weekdaysShort");
          }
          function bi(e, t, n) {
            return pi(e, t, n, "weekdaysMin");
          }
          (fi.calendar = I),
            (fi.longDateFormat = $),
            (fi.invalidDate = q),
            (fi.ordinal = Z),
            (fi.preparse = ci),
            (fi.postformat = ci),
            (fi.relativeTime = J),
            (fi.pastFuture = ee),
            (fi.set = D),
            (fi.eras = Oa),
            (fi.erasParse = Pa),
            (fi.erasConvertYear = Ea),
            (fi.erasAbbrRegex = Ra),
            (fi.erasNameRegex = Ia),
            (fi.erasNarrowRegex = La),
            (fi.months = it),
            (fi.monthsShort = ot),
            (fi.monthsParse = st),
            (fi.monthsRegex = ht),
            (fi.monthsShortRegex = dt),
            (fi.week = St),
            (fi.firstDayOfYear = Ot),
            (fi.firstDayOfWeek = Mt),
            (fi.weekdays = zt),
            (fi.weekdaysMin = Vt),
            (fi.weekdaysShort = Wt),
            (fi.weekdaysParse = Bt),
            (fi.weekdaysRegex = Gt),
            (fi.weekdaysShortRegex = qt),
            (fi.weekdaysMinRegex = Kt),
            (fi.isPM = tn),
            (fi.meridiem = an),
            pn("en", {
              eras: [
                {
                  since: "0001-01-01",
                  until: 1 / 0,
                  offset: 1,
                  name: "Anno Domini",
                  narrow: "AD",
                  abbr: "AD",
                },
                {
                  since: "0000-12-31",
                  until: -1 / 0,
                  offset: 1,
                  name: "Before Christ",
                  narrow: "BC",
                  abbr: "BC",
                },
              ],
              dayOfMonthOrdinalParse: /\d{1,2}(th|st|nd|rd)/,
              ordinal: function (e) {
                var t = e % 10;
                return (
                  e +
                  (1 === ce((e % 100) / 10)
                    ? "th"
                    : 1 === t
                    ? "st"
                    : 2 === t
                    ? "nd"
                    : 3 === t
                    ? "rd"
                    : "th")
                );
              },
            }),
            (r.lang = C(
              "moment.lang is deprecated. Use moment.locale instead.",
              pn
            )),
            (r.langData = C(
              "moment.langData is deprecated. Use moment.localeData instead.",
              vn
            ));
          var xi = Math.abs;
          function _i() {
            var e = this._data;
            return (
              (this._milliseconds = xi(this._milliseconds)),
              (this._days = xi(this._days)),
              (this._months = xi(this._months)),
              (e.milliseconds = xi(e.milliseconds)),
              (e.seconds = xi(e.seconds)),
              (e.minutes = xi(e.minutes)),
              (e.hours = xi(e.hours)),
              (e.months = xi(e.months)),
              (e.years = xi(e.years)),
              this
            );
          }
          function wi(e, t, n, r) {
            var a = Or(t, n);
            return (
              (e._milliseconds += r * a._milliseconds),
              (e._days += r * a._days),
              (e._months += r * a._months),
              e._bubble()
            );
          }
          function ki(e, t) {
            return wi(this, e, t, 1);
          }
          function Si(e, t) {
            return wi(this, e, t, -1);
          }
          function Ci(e) {
            return e < 0 ? Math.floor(e) : Math.ceil(e);
          }
          function Mi() {
            var e,
              t,
              n,
              r,
              a,
              i = this._milliseconds,
              o = this._days,
              l = this._months,
              s = this._data;
            return (
              (i >= 0 && o >= 0 && l >= 0) ||
                (i <= 0 && o <= 0 && l <= 0) ||
                ((i += 864e5 * Ci(Pi(l) + o)), (o = 0), (l = 0)),
              (s.milliseconds = i % 1e3),
              (e = ue(i / 1e3)),
              (s.seconds = e % 60),
              (t = ue(e / 60)),
              (s.minutes = t % 60),
              (n = ue(t / 60)),
              (s.hours = n % 24),
              (o += ue(n / 24)),
              (l += a = ue(Oi(o))),
              (o -= Ci(Pi(a))),
              (r = ue(l / 12)),
              (l %= 12),
              (s.days = o),
              (s.months = l),
              (s.years = r),
              this
            );
          }
          function Oi(e) {
            return (4800 * e) / 146097;
          }
          function Pi(e) {
            return (146097 * e) / 4800;
          }
          function Ei(e) {
            if (!this.isValid()) return NaN;
            var t,
              n,
              r = this._milliseconds;
            if ("month" === (e = re(e)) || "quarter" === e || "year" === e)
              switch (
                ((t = this._days + r / 864e5), (n = this._months + Oi(t)), e)
              ) {
                case "month":
                  return n;
                case "quarter":
                  return n / 3;
                case "year":
                  return n / 12;
              }
            else
              switch (((t = this._days + Math.round(Pi(this._months))), e)) {
                case "week":
                  return t / 7 + r / 6048e5;
                case "day":
                  return t + r / 864e5;
                case "hour":
                  return 24 * t + r / 36e5;
                case "minute":
                  return 1440 * t + r / 6e4;
                case "second":
                  return 86400 * t + r / 1e3;
                case "millisecond":
                  return Math.floor(864e5 * t) + r;
                default:
                  throw new Error("Unknown unit " + e);
              }
          }
          function Di() {
            return this.isValid()
              ? this._milliseconds +
                  864e5 * this._days +
                  (this._months % 12) * 2592e6 +
                  31536e6 * ce(this._months / 12)
              : NaN;
          }
          function Ti(e) {
            return function () {
              return this.as(e);
            };
          }
          var Ai = Ti("ms"),
            Ni = Ti("s"),
            Ii = Ti("m"),
            Ri = Ti("h"),
            Li = Ti("d"),
            Fi = Ti("w"),
            ji = Ti("M"),
            zi = Ti("Q"),
            Wi = Ti("y");
          function Vi() {
            return Or(this);
          }
          function Yi(e) {
            return (e = re(e)), this.isValid() ? this[e + "s"]() : NaN;
          }
          function Bi(e) {
            return function () {
              return this.isValid() ? this._data[e] : NaN;
            };
          }
          var Hi = Bi("milliseconds"),
            Ui = Bi("seconds"),
            $i = Bi("minutes"),
            Gi = Bi("hours"),
            qi = Bi("days"),
            Ki = Bi("months"),
            Qi = Bi("years");
          function Zi() {
            return ue(this.days() / 7);
          }
          var Xi = Math.round,
            Ji = { ss: 44, s: 45, m: 45, h: 22, d: 26, w: null, M: 11 };
          function eo(e, t, n, r, a) {
            return a.relativeTime(t || 1, !!n, e, r);
          }
          function to(e, t, n, r) {
            var a = Or(e).abs(),
              i = Xi(a.as("s")),
              o = Xi(a.as("m")),
              l = Xi(a.as("h")),
              s = Xi(a.as("d")),
              u = Xi(a.as("M")),
              c = Xi(a.as("w")),
              f = Xi(a.as("y")),
              d =
                (i <= n.ss && ["s", i]) ||
                (i < n.s && ["ss", i]) ||
                (o <= 1 && ["m"]) ||
                (o < n.m && ["mm", o]) ||
                (l <= 1 && ["h"]) ||
                (l < n.h && ["hh", l]) ||
                (s <= 1 && ["d"]) ||
                (s < n.d && ["dd", s]);
            return (
              null != n.w &&
                (d = d || (c <= 1 && ["w"]) || (c < n.w && ["ww", c])),
              ((d = d ||
                (u <= 1 && ["M"]) ||
                (u < n.M && ["MM", u]) ||
                (f <= 1 && ["y"]) || ["yy", f])[2] = t),
              (d[3] = +e > 0),
              (d[4] = r),
              eo.apply(null, d)
            );
          }
          function no(e) {
            return void 0 === e
              ? Xi
              : "function" === typeof e && ((Xi = e), !0);
          }
          function ro(e, t) {
            return (
              void 0 !== Ji[e] &&
              (void 0 === t
                ? Ji[e]
                : ((Ji[e] = t), "s" === e && (Ji.ss = t - 1), !0))
            );
          }
          function ao(e, t) {
            if (!this.isValid()) return this.localeData().invalidDate();
            var n,
              r,
              a = !1,
              i = Ji;
            return (
              "object" === typeof e && ((t = e), (e = !1)),
              "boolean" === typeof e && (a = e),
              "object" === typeof t &&
                ((i = Object.assign({}, Ji, t)),
                null != t.s && null == t.ss && (i.ss = t.s - 1)),
              (r = to(this, !a, i, (n = this.localeData()))),
              a && (r = n.pastFuture(+this, r)),
              n.postformat(r)
            );
          }
          var io = Math.abs;
          function oo(e) {
            return (e > 0) - (e < 0) || +e;
          }
          function lo() {
            if (!this.isValid()) return this.localeData().invalidDate();
            var e,
              t,
              n,
              r,
              a,
              i,
              o,
              l,
              s = io(this._milliseconds) / 1e3,
              u = io(this._days),
              c = io(this._months),
              f = this.asSeconds();
            return f
              ? ((e = ue(s / 60)),
                (t = ue(e / 60)),
                (s %= 60),
                (e %= 60),
                (n = ue(c / 12)),
                (c %= 12),
                (r = s ? s.toFixed(3).replace(/\.?0+$/, "") : ""),
                (a = f < 0 ? "-" : ""),
                (i = oo(this._months) !== oo(f) ? "-" : ""),
                (o = oo(this._days) !== oo(f) ? "-" : ""),
                (l = oo(this._milliseconds) !== oo(f) ? "-" : ""),
                a +
                  "P" +
                  (n ? i + n + "Y" : "") +
                  (c ? i + c + "M" : "") +
                  (u ? o + u + "D" : "") +
                  (t || e || s ? "T" : "") +
                  (t ? l + t + "H" : "") +
                  (e ? l + e + "M" : "") +
                  (s ? l + r + "S" : ""))
              : "P0D";
          }
          var so = ir.prototype;
          return (
            (so.isValid = rr),
            (so.abs = _i),
            (so.add = ki),
            (so.subtract = Si),
            (so.as = Ei),
            (so.asMilliseconds = Ai),
            (so.asSeconds = Ni),
            (so.asMinutes = Ii),
            (so.asHours = Ri),
            (so.asDays = Li),
            (so.asWeeks = Fi),
            (so.asMonths = ji),
            (so.asQuarters = zi),
            (so.asYears = Wi),
            (so.valueOf = Di),
            (so._bubble = Mi),
            (so.clone = Vi),
            (so.get = Yi),
            (so.milliseconds = Hi),
            (so.seconds = Ui),
            (so.minutes = $i),
            (so.hours = Gi),
            (so.days = qi),
            (so.weeks = Zi),
            (so.months = Ki),
            (so.years = Qi),
            (so.humanize = ao),
            (so.toISOString = lo),
            (so.toString = lo),
            (so.toJSON = lo),
            (so.locale = ia),
            (so.localeData = la),
            (so.toIsoString = C(
              "toIsoString() is deprecated. Please use toISOString() instead (notice the capitals)",
              lo
            )),
            (so.lang = oa),
            W("X", 0, 0, "unix"),
            W("x", 0, 0, "valueOf"),
            Ie("x", Ee),
            Ie("X", Ae),
            ze("X", function (e, t, n) {
              n._d = new Date(1e3 * parseFloat(e));
            }),
            ze("x", function (e, t, n) {
              n._d = new Date(ce(e));
            }),
            (r.version = "2.29.1"),
            a(qn),
            (r.fn = li),
            (r.min = Xn),
            (r.max = Jn),
            (r.now = er),
            (r.utc = p),
            (r.unix = si),
            (r.months = gi),
            (r.isDate = f),
            (r.locale = pn),
            (r.invalid = y),
            (r.duration = Or),
            (r.isMoment = k),
            (r.weekdays = vi),
            (r.parseZone = ui),
            (r.localeData = vn),
            (r.isDuration = or),
            (r.monthsShort = mi),
            (r.weekdaysMin = bi),
            (r.defineLocale = gn),
            (r.updateLocale = mn),
            (r.locales = yn),
            (r.weekdaysShort = yi),
            (r.normalizeUnits = re),
            (r.relativeTimeRounding = no),
            (r.relativeTimeThreshold = ro),
            (r.calendarFormat = Wr),
            (r.prototype = li),
            (r.HTML5_FMT = {
              DATETIME_LOCAL: "YYYY-MM-DDTHH:mm",
              DATETIME_LOCAL_SECONDS: "YYYY-MM-DDTHH:mm:ss",
              DATETIME_LOCAL_MS: "YYYY-MM-DDTHH:mm:ss.SSS",
              DATE: "YYYY-MM-DD",
              TIME: "HH:mm",
              TIME_SECONDS: "HH:mm:ss",
              TIME_MS: "HH:mm:ss.SSS",
              WEEK: "GGGG-[W]WW",
              MONTH: "YYYY-MM",
            }),
            r
          );
        })();
      }.call(this, n(26)(e)));
    },
    function (e, t, n) {
      var r = n(27);
      e.exports = function (e, t) {
        return r(e, t);
      };
    },
    function (e, t, n) {
      var r = n(41),
        a = n(46),
        i = n(112),
        o = n(116),
        l = n(134),
        s = n(6),
        u = n(48),
        c = n(50),
        f = "[object Arguments]",
        d = "[object Array]",
        h = "[object Object]",
        p = Object.prototype.hasOwnProperty;
      e.exports = function (e, t, n, g, m, v) {
        var y = s(e),
          b = s(t),
          x = y ? d : l(e),
          _ = b ? d : l(t),
          w = (x = x == f ? h : x) == h,
          k = (_ = _ == f ? h : _) == h,
          S = x == _;
        if (S && u(e)) {
          if (!u(t)) return !1;
          (y = !0), (w = !1);
        }
        if (S && !w)
          return (
            v || (v = new r()),
            y || c(e) ? a(e, t, n, g, m, v) : i(e, t, x, n, g, m, v)
          );
        if (!(1 & n)) {
          var C = w && p.call(e, "__wrapped__"),
            M = k && p.call(t, "__wrapped__");
          if (C || M) {
            var O = C ? e.value() : e,
              P = M ? t.value() : t;
            return v || (v = new r()), m(O, P, n, g, v);
          }
        }
        return !!S && (v || (v = new r()), o(e, t, n, g, m, v));
      };
    },
    function (e, t) {
      e.exports = function () {
        (this.__data__ = []), (this.size = 0);
      };
    },
    function (e, t, n) {
      var r = n(17),
        a = Array.prototype.splice;
      e.exports = function (e) {
        var t = this.__data__,
          n = r(t, e);
        return (
          !(n < 0) &&
          (n == t.length - 1 ? t.pop() : a.call(t, n, 1), --this.size, !0)
        );
      };
    },
    function (e, t, n) {
      var r = n(17);
      e.exports = function (e) {
        var t = this.__data__,
          n = r(t, e);
        return n < 0 ? void 0 : t[n][1];
      };
    },
    function (e, t, n) {
      var r = n(17);
      e.exports = function (e) {
        return r(this.__data__, e) > -1;
      };
    },
    function (e, t, n) {
      var r = n(17);
      e.exports = function (e, t) {
        var n = this.__data__,
          a = r(n, e);
        return a < 0 ? (++this.size, n.push([e, t])) : (n[a][1] = t), this;
      };
    },
    function (e, t, n) {
      var r = n(16);
      e.exports = function () {
        (this.__data__ = new r()), (this.size = 0);
      };
    },
    function (e, t) {
      e.exports = function (e) {
        var t = this.__data__,
          n = t.delete(e);
        return (this.size = t.size), n;
      };
    },
    function (e, t) {
      e.exports = function (e) {
        return this.__data__.get(e);
      };
    },
    function (e, t) {
      e.exports = function (e) {
        return this.__data__.has(e);
      };
    },
    function (e, t, n) {
      var r = n(16),
        a = n(28),
        i = n(30);
      e.exports = function (e, t) {
        var n = this.__data__;
        if (n instanceof r) {
          var o = n.__data__;
          if (!a || o.length < 199)
            return o.push([e, t]), (this.size = ++n.size), this;
          n = this.__data__ = new i(o);
        }
        return n.set(e, t), (this.size = n.size), this;
      };
    },
    function (e, t, n) {
      var r = n(43),
        a = n(92),
        i = n(29),
        o = n(45),
        l = /^\[object .+?Constructor\]$/,
        s = Function.prototype,
        u = Object.prototype,
        c = s.toString,
        f = u.hasOwnProperty,
        d = RegExp(
          "^" +
            c
              .call(f)
              .replace(/[\\^$.*+?()[\]{}|]/g, "\\$&")
              .replace(
                /hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,
                "$1.*?"
              ) +
            "$"
        );
      e.exports = function (e) {
        return !(!i(e) || a(e)) && (r(e) ? d : l).test(o(e));
      };
    },
    function (e, t, n) {
      var r = n(18),
        a = Object.prototype,
        i = a.hasOwnProperty,
        o = a.toString,
        l = r ? r.toStringTag : void 0;
      e.exports = function (e) {
        var t = i.call(e, l),
          n = e[l];
        try {
          e[l] = void 0;
          var r = !0;
        } catch (s) {}
        var a = o.call(e);
        return r && (t ? (e[l] = n) : delete e[l]), a;
      };
    },
    function (e, t) {
      var n = Object.prototype.toString;
      e.exports = function (e) {
        return n.call(e);
      };
    },
    function (e, t, n) {
      var r = n(93),
        a = (function () {
          var e = /[^.]+$/.exec((r && r.keys && r.keys.IE_PROTO) || "");
          return e ? "Symbol(src)_1." + e : "";
        })();
      e.exports = function (e) {
        return !!a && a in e;
      };
    },
    function (e, t, n) {
      var r = n(5)["__core-js_shared__"];
      e.exports = r;
    },
    function (e, t) {
      e.exports = function (e, t) {
        return null == e ? void 0 : e[t];
      };
    },
    function (e, t, n) {
      var r = n(96),
        a = n(16),
        i = n(28);
      e.exports = function () {
        (this.size = 0),
          (this.__data__ = {
            hash: new r(),
            map: new (i || a)(),
            string: new r(),
          });
      };
    },
    function (e, t, n) {
      var r = n(97),
        a = n(98),
        i = n(99),
        o = n(100),
        l = n(101);
      function s(e) {
        var t = -1,
          n = null == e ? 0 : e.length;
        for (this.clear(); ++t < n; ) {
          var r = e[t];
          this.set(r[0], r[1]);
        }
      }
      (s.prototype.clear = r),
        (s.prototype.delete = a),
        (s.prototype.get = i),
        (s.prototype.has = o),
        (s.prototype.set = l),
        (e.exports = s);
    },
    function (e, t, n) {
      var r = n(19);
      e.exports = function () {
        (this.__data__ = r ? r(null) : {}), (this.size = 0);
      };
    },
    function (e, t) {
      e.exports = function (e) {
        var t = this.has(e) && delete this.__data__[e];
        return (this.size -= t ? 1 : 0), t;
      };
    },
    function (e, t, n) {
      var r = n(19),
        a = Object.prototype.hasOwnProperty;
      e.exports = function (e) {
        var t = this.__data__;
        if (r) {
          var n = t[e];
          return "__lodash_hash_undefined__" === n ? void 0 : n;
        }
        return a.call(t, e) ? t[e] : void 0;
      };
    },
    function (e, t, n) {
      var r = n(19),
        a = Object.prototype.hasOwnProperty;
      e.exports = function (e) {
        var t = this.__data__;
        return r ? void 0 !== t[e] : a.call(t, e);
      };
    },
    function (e, t, n) {
      var r = n(19);
      e.exports = function (e, t) {
        var n = this.__data__;
        return (
          (this.size += this.has(e) ? 0 : 1),
          (n[e] = r && void 0 === t ? "__lodash_hash_undefined__" : t),
          this
        );
      };
    },
    function (e, t, n) {
      var r = n(20);
      e.exports = function (e) {
        var t = r(this, e).delete(e);
        return (this.size -= t ? 1 : 0), t;
      };
    },
    function (e, t) {
      e.exports = function (e) {
        var t = typeof e;
        return "string" == t || "number" == t || "symbol" == t || "boolean" == t
          ? "__proto__" !== e
          : null === e;
      };
    },
    function (e, t, n) {
      var r = n(20);
      e.exports = function (e) {
        return r(this, e).get(e);
      };
    },
    function (e, t, n) {
      var r = n(20);
      e.exports = function (e) {
        return r(this, e).has(e);
      };
    },
    function (e, t, n) {
      var r = n(20);
      e.exports = function (e, t) {
        var n = r(this, e),
          a = n.size;
        return n.set(e, t), (this.size += n.size == a ? 0 : 1), this;
      };
    },
    function (e, t, n) {
      var r = n(30),
        a = n(108),
        i = n(109);
      function o(e) {
        var t = -1,
          n = null == e ? 0 : e.length;
        for (this.__data__ = new r(); ++t < n; ) this.add(e[t]);
      }
      (o.prototype.add = o.prototype.push = a),
        (o.prototype.has = i),
        (e.exports = o);
    },
    function (e, t) {
      e.exports = function (e) {
        return this.__data__.set(e, "__lodash_hash_undefined__"), this;
      };
    },
    function (e, t) {
      e.exports = function (e) {
        return this.__data__.has(e);
      };
    },
    function (e, t) {
      e.exports = function (e, t) {
        for (var n = -1, r = null == e ? 0 : e.length; ++n < r; )
          if (t(e[n], n, e)) return !0;
        return !1;
      };
    },
    function (e, t) {
      e.exports = function (e, t) {
        return e.has(t);
      };
    },
    function (e, t, n) {
      var r = n(18),
        a = n(113),
        i = n(42),
        o = n(46),
        l = n(114),
        s = n(115),
        u = r ? r.prototype : void 0,
        c = u ? u.valueOf : void 0;
      e.exports = function (e, t, n, r, u, f, d) {
        switch (n) {
          case "[object DataView]":
            if (e.byteLength != t.byteLength || e.byteOffset != t.byteOffset)
              return !1;
            (e = e.buffer), (t = t.buffer);
          case "[object ArrayBuffer]":
            return !(e.byteLength != t.byteLength || !f(new a(e), new a(t)));
          case "[object Boolean]":
          case "[object Date]":
          case "[object Number]":
            return i(+e, +t);
          case "[object Error]":
            return e.name == t.name && e.message == t.message;
          case "[object RegExp]":
          case "[object String]":
            return e == t + "";
          case "[object Map]":
            var h = l;
          case "[object Set]":
            var p = 1 & r;
            if ((h || (h = s), e.size != t.size && !p)) return !1;
            var g = d.get(e);
            if (g) return g == t;
            (r |= 2), d.set(e, t);
            var m = o(h(e), h(t), r, u, f, d);
            return d.delete(e), m;
          case "[object Symbol]":
            if (c) return c.call(e) == c.call(t);
        }
        return !1;
      };
    },
    function (e, t, n) {
      var r = n(5).Uint8Array;
      e.exports = r;
    },
    function (e, t) {
      e.exports = function (e) {
        var t = -1,
          n = Array(e.size);
        return (
          e.forEach(function (e, r) {
            n[++t] = [r, e];
          }),
          n
        );
      };
    },
    function (e, t) {
      e.exports = function (e) {
        var t = -1,
          n = Array(e.size);
        return (
          e.forEach(function (e) {
            n[++t] = e;
          }),
          n
        );
      };
    },
    function (e, t, n) {
      var r = n(117),
        a = Object.prototype.hasOwnProperty;
      e.exports = function (e, t, n, i, o, l) {
        var s = 1 & n,
          u = r(e),
          c = u.length;
        if (c != r(t).length && !s) return !1;
        for (var f = c; f--; ) {
          var d = u[f];
          if (!(s ? d in t : a.call(t, d))) return !1;
        }
        var h = l.get(e),
          p = l.get(t);
        if (h && p) return h == t && p == e;
        var g = !0;
        l.set(e, t), l.set(t, e);
        for (var m = s; ++f < c; ) {
          var v = e[(d = u[f])],
            y = t[d];
          if (i) var b = s ? i(y, v, d, t, e, l) : i(v, y, d, e, t, l);
          if (!(void 0 === b ? v === y || o(v, y, n, i, l) : b)) {
            g = !1;
            break;
          }
          m || (m = "constructor" == d);
        }
        if (g && !m) {
          var x = e.constructor,
            _ = t.constructor;
          x == _ ||
            !("constructor" in e) ||
            !("constructor" in t) ||
            ("function" == typeof x &&
              x instanceof x &&
              "function" == typeof _ &&
              _ instanceof _) ||
            (g = !1);
        }
        return l.delete(e), l.delete(t), g;
      };
    },
    function (e, t, n) {
      var r = n(118),
        a = n(120),
        i = n(31);
      e.exports = function (e) {
        return r(e, i, a);
      };
    },
    function (e, t, n) {
      var r = n(119),
        a = n(6);
      e.exports = function (e, t, n) {
        var i = t(e);
        return a(e) ? i : r(i, n(e));
      };
    },
    function (e, t) {
      e.exports = function (e, t) {
        for (var n = -1, r = t.length, a = e.length; ++n < r; ) e[a + n] = t[n];
        return e;
      };
    },
    function (e, t, n) {
      var r = n(121),
        a = n(122),
        i = Object.prototype.propertyIsEnumerable,
        o = Object.getOwnPropertySymbols,
        l = o
          ? function (e) {
              return null == e
                ? []
                : ((e = Object(e)),
                  r(o(e), function (t) {
                    return i.call(e, t);
                  }));
            }
          : a;
      e.exports = l;
    },
    function (e, t) {
      e.exports = function (e, t) {
        for (
          var n = -1, r = null == e ? 0 : e.length, a = 0, i = [];
          ++n < r;

        ) {
          var o = e[n];
          t(o, n, e) && (i[a++] = o);
        }
        return i;
      };
    },
    function (e, t) {
      e.exports = function () {
        return [];
      };
    },
    function (e, t, n) {
      var r = n(124),
        a = n(47),
        i = n(6),
        o = n(48),
        l = n(49),
        s = n(50),
        u = Object.prototype.hasOwnProperty;
      e.exports = function (e, t) {
        var n = i(e),
          c = !n && a(e),
          f = !n && !c && o(e),
          d = !n && !c && !f && s(e),
          h = n || c || f || d,
          p = h ? r(e.length, String) : [],
          g = p.length;
        for (var m in e)
          (!t && !u.call(e, m)) ||
            (h &&
              ("length" == m ||
                (f && ("offset" == m || "parent" == m)) ||
                (d &&
                  ("buffer" == m || "byteLength" == m || "byteOffset" == m)) ||
                l(m, g))) ||
            p.push(m);
        return p;
      };
    },
    function (e, t) {
      e.exports = function (e, t) {
        for (var n = -1, r = Array(e); ++n < e; ) r[n] = t(n);
        return r;
      };
    },
    function (e, t, n) {
      var r = n(13),
        a = n(14);
      e.exports = function (e) {
        return a(e) && "[object Arguments]" == r(e);
      };
    },
    function (e, t) {
      e.exports = function () {
        return !1;
      };
    },
    function (e, t, n) {
      var r = n(13),
        a = n(32),
        i = n(14),
        o = {};
      (o["[object Float32Array]"] = o["[object Float64Array]"] = o[
        "[object Int8Array]"
      ] = o["[object Int16Array]"] = o["[object Int32Array]"] = o[
        "[object Uint8Array]"
      ] = o["[object Uint8ClampedArray]"] = o["[object Uint16Array]"] = o[
        "[object Uint32Array]"
      ] = !0),
        (o["[object Arguments]"] = o["[object Array]"] = o[
          "[object ArrayBuffer]"
        ] = o["[object Boolean]"] = o["[object DataView]"] = o[
          "[object Date]"
        ] = o["[object Error]"] = o["[object Function]"] = o[
          "[object Map]"
        ] = o["[object Number]"] = o["[object Object]"] = o[
          "[object RegExp]"
        ] = o["[object Set]"] = o["[object String]"] = o[
          "[object WeakMap]"
        ] = !1),
        (e.exports = function (e) {
          return i(e) && a(e.length) && !!o[r(e)];
        });
    },
    function (e, t) {
      e.exports = function (e) {
        return function (t) {
          return e(t);
        };
      };
    },
    function (e, t, n) {
      (function (e) {
        var r = n(44),
          a = t && !t.nodeType && t,
          i = a && "object" == typeof e && e && !e.nodeType && e,
          o = i && i.exports === a && r.process,
          l = (function () {
            try {
              var e = i && i.require && i.require("util").types;
              return e || (o && o.binding && o.binding("util"));
            } catch (t) {}
          })();
        e.exports = l;
      }.call(this, n(26)(e)));
    },
    function (e, t, n) {
      var r = n(131),
        a = n(132),
        i = Object.prototype.hasOwnProperty;
      e.exports = function (e) {
        if (!r(e)) return a(e);
        var t = [];
        for (var n in Object(e))
          i.call(e, n) && "constructor" != n && t.push(n);
        return t;
      };
    },
    function (e, t) {
      var n = Object.prototype;
      e.exports = function (e) {
        var t = e && e.constructor;
        return e === (("function" == typeof t && t.prototype) || n);
      };
    },
    function (e, t, n) {
      var r = n(133)(Object.keys, Object);
      e.exports = r;
    },
    function (e, t) {
      e.exports = function (e, t) {
        return function (n) {
          return e(t(n));
        };
      };
    },
    function (e, t, n) {
      var r = n(135),
        a = n(28),
        i = n(136),
        o = n(137),
        l = n(138),
        s = n(13),
        u = n(45),
        c = "[object Map]",
        f = "[object Promise]",
        d = "[object Set]",
        h = "[object WeakMap]",
        p = "[object DataView]",
        g = u(r),
        m = u(a),
        v = u(i),
        y = u(o),
        b = u(l),
        x = s;
      ((r && x(new r(new ArrayBuffer(1))) != p) ||
        (a && x(new a()) != c) ||
        (i && x(i.resolve()) != f) ||
        (o && x(new o()) != d) ||
        (l && x(new l()) != h)) &&
        (x = function (e) {
          var t = s(e),
            n = "[object Object]" == t ? e.constructor : void 0,
            r = n ? u(n) : "";
          if (r)
            switch (r) {
              case g:
                return p;
              case m:
                return c;
              case v:
                return f;
              case y:
                return d;
              case b:
                return h;
            }
          return t;
        }),
        (e.exports = x);
    },
    function (e, t, n) {
      var r = n(7)(n(5), "DataView");
      e.exports = r;
    },
    function (e, t, n) {
      var r = n(7)(n(5), "Promise");
      e.exports = r;
    },
    function (e, t, n) {
      var r = n(7)(n(5), "Set");
      e.exports = r;
    },
    function (e, t, n) {
      var r = n(7)(n(5), "WeakMap");
      e.exports = r;
    },
    function (e, t, n) {
      var r = n(140),
        a = n(142)(function (e, t, n) {
          r(e, n, t);
        });
      e.exports = a;
    },
    function (e, t, n) {
      var r = n(141);
      e.exports = function (e, t, n) {
        "__proto__" == t && r
          ? r(e, t, {
              configurable: !0,
              enumerable: !0,
              value: n,
              writable: !0,
            })
          : (e[t] = n);
      };
    },
    function (e, t, n) {
      var r = n(7),
        a = (function () {
          try {
            var e = r(Object, "defineProperty");
            return e({}, "", {}), e;
          } catch (t) {}
        })();
      e.exports = a;
    },
    function (e, t, n) {
      var r = n(143),
        a = n(144),
        i = n(150),
        o = n(6);
      e.exports = function (e, t) {
        return function (n, l) {
          var s = o(n) ? r : a,
            u = t ? t() : {};
          return s(n, e, i(l, 2), u);
        };
      };
    },
    function (e, t) {
      e.exports = function (e, t, n, r) {
        for (var a = -1, i = null == e ? 0 : e.length; ++a < i; ) {
          var o = e[a];
          t(r, o, n(o), e);
        }
        return r;
      };
    },
    function (e, t, n) {
      var r = n(145);
      e.exports = function (e, t, n, a) {
        return (
          r(e, function (e, r, i) {
            t(a, e, n(e), i);
          }),
          a
        );
      };
    },
    function (e, t, n) {
      var r = n(146),
        a = n(149)(r);
      e.exports = a;
    },
    function (e, t, n) {
      var r = n(147),
        a = n(31);
      e.exports = function (e, t) {
        return e && r(e, t, a);
      };
    },
    function (e, t, n) {
      var r = n(148)();
      e.exports = r;
    },
    function (e, t) {
      e.exports = function (e) {
        return function (t, n, r) {
          for (var a = -1, i = Object(t), o = r(t), l = o.length; l--; ) {
            var s = o[e ? l : ++a];
            if (!1 === n(i[s], s, i)) break;
          }
          return t;
        };
      };
    },
    function (e, t, n) {
      var r = n(51);
      e.exports = function (e, t) {
        return function (n, a) {
          if (null == n) return n;
          if (!r(n)) return e(n, a);
          for (
            var i = n.length, o = t ? i : -1, l = Object(n);
            (t ? o-- : ++o < i) && !1 !== a(l[o], o, l);

          );
          return n;
        };
      };
    },
    function (e, t, n) {
      var r = n(151),
        a = n(154),
        i = n(165),
        o = n(6),
        l = n(166);
      e.exports = function (e) {
        return "function" == typeof e
          ? e
          : null == e
          ? i
          : "object" == typeof e
          ? o(e)
            ? a(e[0], e[1])
            : r(e)
          : l(e);
      };
    },
    function (e, t, n) {
      var r = n(152),
        a = n(153),
        i = n(53);
      e.exports = function (e) {
        var t = a(e);
        return 1 == t.length && t[0][2]
          ? i(t[0][0], t[0][1])
          : function (n) {
              return n === e || r(n, e, t);
            };
      };
    },
    function (e, t, n) {
      var r = n(41),
        a = n(27);
      e.exports = function (e, t, n, i) {
        var o = n.length,
          l = o,
          s = !i;
        if (null == e) return !l;
        for (e = Object(e); o--; ) {
          var u = n[o];
          if (s && u[2] ? u[1] !== e[u[0]] : !(u[0] in e)) return !1;
        }
        for (; ++o < l; ) {
          var c = (u = n[o])[0],
            f = e[c],
            d = u[1];
          if (s && u[2]) {
            if (void 0 === f && !(c in e)) return !1;
          } else {
            var h = new r();
            if (i) var p = i(f, d, c, e, t, h);
            if (!(void 0 === p ? a(d, f, 3, i, h) : p)) return !1;
          }
        }
        return !0;
      };
    },
    function (e, t, n) {
      var r = n(52),
        a = n(31);
      e.exports = function (e) {
        for (var t = a(e), n = t.length; n--; ) {
          var i = t[n],
            o = e[i];
          t[n] = [i, o, r(o)];
        }
        return t;
      };
    },
    function (e, t, n) {
      var r = n(27),
        a = n(155),
        i = n(162),
        o = n(33),
        l = n(52),
        s = n(53),
        u = n(21);
      e.exports = function (e, t) {
        return o(e) && l(t)
          ? s(u(e), t)
          : function (n) {
              var o = a(n, e);
              return void 0 === o && o === t ? i(n, e) : r(t, o, 3);
            };
      };
    },
    function (e, t, n) {
      var r = n(54);
      e.exports = function (e, t, n) {
        var a = null == e ? void 0 : r(e, t);
        return void 0 === a ? n : a;
      };
    },
    function (e, t, n) {
      var r = n(157),
        a = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,
        i = /\\(\\)?/g,
        o = r(function (e) {
          var t = [];
          return (
            46 === e.charCodeAt(0) && t.push(""),
            e.replace(a, function (e, n, r, a) {
              t.push(r ? a.replace(i, "$1") : n || e);
            }),
            t
          );
        });
      e.exports = o;
    },
    function (e, t, n) {
      var r = n(158);
      e.exports = function (e) {
        var t = r(e, function (e) {
            return 500 === n.size && n.clear(), e;
          }),
          n = t.cache;
        return t;
      };
    },
    function (e, t, n) {
      var r = n(30);
      function a(e, t) {
        if ("function" != typeof e || (null != t && "function" != typeof t))
          throw new TypeError("Expected a function");
        var n = function n() {
          var r = arguments,
            a = t ? t.apply(this, r) : r[0],
            i = n.cache;
          if (i.has(a)) return i.get(a);
          var o = e.apply(this, r);
          return (n.cache = i.set(a, o) || i), o;
        };
        return (n.cache = new (a.Cache || r)()), n;
      }
      (a.Cache = r), (e.exports = a);
    },
    function (e, t, n) {
      var r = n(160);
      e.exports = function (e) {
        return null == e ? "" : r(e);
      };
    },
    function (e, t, n) {
      var r = n(18),
        a = n(161),
        i = n(6),
        o = n(34),
        l = r ? r.prototype : void 0,
        s = l ? l.toString : void 0;
      e.exports = function e(t) {
        if ("string" == typeof t) return t;
        if (i(t)) return a(t, e) + "";
        if (o(t)) return s ? s.call(t) : "";
        var n = t + "";
        return "0" == n && 1 / t == -Infinity ? "-0" : n;
      };
    },
    function (e, t) {
      e.exports = function (e, t) {
        for (var n = -1, r = null == e ? 0 : e.length, a = Array(r); ++n < r; )
          a[n] = t(e[n], n, e);
        return a;
      };
    },
    function (e, t, n) {
      var r = n(163),
        a = n(164);
      e.exports = function (e, t) {
        return null != e && a(e, t, r);
      };
    },
    function (e, t) {
      e.exports = function (e, t) {
        return null != e && t in Object(e);
      };
    },
    function (e, t, n) {
      var r = n(55),
        a = n(47),
        i = n(6),
        o = n(49),
        l = n(32),
        s = n(21);
      e.exports = function (e, t, n) {
        for (var u = -1, c = (t = r(t, e)).length, f = !1; ++u < c; ) {
          var d = s(t[u]);
          if (!(f = null != e && n(e, d))) break;
          e = e[d];
        }
        return f || ++u != c
          ? f
          : !!(c = null == e ? 0 : e.length) &&
              l(c) &&
              o(d, c) &&
              (i(e) || a(e));
      };
    },
    function (e, t) {
      e.exports = function (e) {
        return e;
      };
    },
    function (e, t, n) {
      var r = n(167),
        a = n(168),
        i = n(33),
        o = n(21);
      e.exports = function (e) {
        return i(e) ? r(o(e)) : a(e);
      };
    },
    function (e, t) {
      e.exports = function (e) {
        return function (t) {
          return null == t ? void 0 : t[e];
        };
      };
    },
    function (e, t, n) {
      var r = n(54);
      e.exports = function (e) {
        return function (t) {
          return r(t, e);
        };
      };
    },
  ],
]);
//# sourceMappingURL=2.f0dc18e8.chunk.js.map
