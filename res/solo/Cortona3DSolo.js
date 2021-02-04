/*! Cortona3D Solo 1.5.6, Copyright (c) 2015-2018 Paragraphics, Ltd. */
!(function (e, t) {
  "object" == typeof exports && "object" == typeof module
    ? (module.exports = t())
    : "function" == typeof define && define.amd
    ? define([], t)
    : "object" == typeof exports
    ? (exports.Cortona3DSolo = t())
    : (e.Cortona3DSolo = t());
})(this, function () {
  return (function (e) {
    function t(r) {
      if (n[r]) return n[r].exports;
      var i = (n[r] = { i: r, l: !1, exports: {} });
      return e[r].call(i.exports, i, i.exports, t), (i.l = !0), i.exports;
    }
    var n = {};
    return (
      (t.m = e),
      (t.c = n),
      (t.i = function (e) {
        return e;
      }),
      (t.d = function (e, n, r) {
        t.o(e, n) ||
          Object.defineProperty(e, n, {
            configurable: !1,
            enumerable: !0,
            get: r,
          });
      }),
      (t.n = function (e) {
        var n =
          e && e.__esModule
            ? function () {
                return e.default;
              }
            : function () {
                return e;
              };
        return t.d(n, "a", n), n;
      }),
      (t.o = function (e, t) {
        return Object.prototype.hasOwnProperty.call(e, t);
      }),
      (t.p = ""),
      t((t.s = 48))
    );
  })([
    function (e, t, n) {
      var r = n(2),
        i = r.expand,
        o = n(9),
        a = 0,
        s = { addons: {} },
        u = !1,
        c = {
          configureInstance: function (e, t) {
            if (
              ("number" == typeof e && (a |= e),
              "number" == typeof t && (a &= ~t),
              s.core)
            ) {
              var r = n(1).Module;
              r.ccall &&
                r.ccall(
                  "tiramisu_configure",
                  "number",
                  ["number", "number"],
                  [32767 & e, 32767 & t]
                );
            }
            if (s.drawing) {
              var i = s.drawing.config.features || 0;
              "number" == typeof e && (i |= e),
                "number" == typeof t && (i &= ~t),
                (s.drawing.config.features = i);
            }
            return a;
          },
          initialize: function (e, t) {
            function r() {
              u = !0;
            }
            var i = t,
              o = n(3);
            if (
              ("string" == typeof e
                ? ((i = e),
                  s.drawing || s.core || o.use("core", { src: i, features: a }))
                : e &&
                  t &&
                  (s.core && e && (o.core.canvas = e),
                  o.use("core", { canvas: e, src: t, features: a })),
              o.once("app.didFinishLoadDocument", r),
              o.once("app.didFailLoadDocument", r),
              s.drawing && (n(8).attach(o.core && o.core.canvas), !s.core))
            )
              return (
                (i = i || s.drawing.config.src),
                i
                  ? (o.app.drawing.show(!0),
                    new Promise(function (e, t) {
                      o.once("app.didFinishLoadDocument", e),
                        o.app.drawing.load(i).catch(t);
                    }))
                  : Promise.resolve({})
              );
            if (s.core) {
              o.core.canvas &&
                (o.core.canvas.setAttribute("touch-action", "none"),
                (o.core.canvas.style.touchAction = "none"));
              var c = n(1).Arguments;
              return (
                (i = i || c.document),
                i && (c.document = o.app.util.toUrl(i)),
                (c.features = 32767 & a),
                (c.contentScaleFactor = window.devicePixelRatio || 1),
                c.toModule(),
                new Promise(function (e, t) {
                  o.once("core.onError", t),
                    o.once("app.didFinishLoadDocument", e),
                    o.once("app.didFailLoadDocument", t);
                })
              );
            }
            return Promise.reject(new Error("Solo initialize: nothing to do"));
          },
          version: function () {
            return "1.5.6";
          },
          isDocumentLoaded: function () {
            return u;
          },
          loadCompanionFile: function (e) {
            debugger;
            return r.loadResource(e, "text/xml").then(function (t) {
              var a, s;
              return t.responseXML
                ? ((s = o(t.responseXML)),
                  (a = {
                    baseURL: r.getBaseURL(e),
                    options: n(10)(s),
                    interactivity: { json: s },
                  }),
                  (a.specificationName = a.options.SpecID),
                  s.ipc
                    ? i(
                        a,
                        {
                          type: "ipc",
                          metadata: n(6)(s.$("ipc/figure/metadata/value")),
                        },
                        n(45)(a.interactivity, a.baseURL)
                      )
                    : s.SimulationInteractivity &&
                      i(
                        a,
                        {
                          type: "procedure",
                          metadata: n(6)(
                            s.$(
                              "SimulationInteractivity/SimulationInformation/metadata/value"
                            )
                          ),
                        },
                        n(46)(a.interactivity, a.baseURL)
                      ),
                  Promise.resolve(a))
                : Promise.reject(new Error(e + " empty content"));
            });
          },
        };
      Object.defineProperty(c, "DISABLE_DOCUMENT_INTERACTIVITY", {
        value: 1,
        writable: !1,
      }),
        Object.defineProperty(c, "DISABLE_PROCEDURE_TEXT_EMISSION", {
          value: 2,
          writable: !1,
        }),
        Object.defineProperty(c, "DISABLE_AUDIO", { value: 4, writable: !1 }),
        Object.defineProperty(c, "DISABLE_VERTEX_ARRAY_OBJECT_OES", {
          value: 8,
          writable: !1,
        }),
        Object.defineProperty(c, "DISABLE_DISCARDABLE_GEOMETRY_DATA", {
          value: 16,
          writable: !1,
        }),
        Object.defineProperty(c, "DISABLE_PROPERTY_VALUE_ANIMATIONS", {
          value: 32,
          writable: !1,
        }),
        Object.defineProperty(c, "ENABLE_GLES3", { value: 64, writable: !1 }),
        Object.defineProperty(c, "DISABLE_ANTIALIASING_GLES3", {
          value: 128,
          writable: !1,
        }),
        Object.defineProperty(c, "TRANSPARENT_BACKGROUND", {
          value: 256,
          writable: !1,
        }),
        Object.defineProperty(c, "ENABLE_NAVIGATION_FIT_TO_OBJECT", {
          value: 32768,
          writable: !1,
        }),
        Object.defineProperty(c, "DISABLE_INTERACTIVITY_XML_EMISSION", {
          value: 65536,
          writable: !1,
        }),
        Object.defineProperty(c, "DRAWING_HOTSPOT_HIGHLIGHT_SOLID", {
          value: 131072,
          writable: !1,
        }),
        Object.defineProperty(c, "ENABLE_AUTO_SWITCHING_DISPLAY_MODE", {
          value: 262144,
          writable: !1,
        }),
        (e.exports = {
          app: c,
          checkConfigureOptions: function (e) {
            return !!(a & e);
          },
          getInstanceConfigurationFlags: function () {
            return a;
          },
          getDocumentURL: function () {
            var e = "";
            if (s.core) {
              var t = n(1).Module.arguments;
              if (t) {
                var r = t.indexOf("document");
                r >= 0 && (e = t[r + 1]);
              }
            }
            return e;
          },
          usedModules: s,
        });
    },
    function (e, t, n) {
      function r(e) {
        (this.name = "TiramisuLoadingError"), (this.message = e || "");
      }
      function i() {
        try {
          var t = new window.XMLHttpRequest();
          t.overrideMimeType && t.overrideMimeType("text/javascript");
          var n = "Cortona3DSoloCore.js";
          "function" == typeof s.locateFile
            ? (n = s.locateFile(n))
            : s.memoryInitializerPrefixURL
            ? (n = s.memoryInitializerPrefixURL + n)
            : console.log("No memory initializer prefix URL!"),
            t.open("GET", n, !0),
            (t.onerror = function (e) {
              s.onprogress &&
                s.onprogress({ loaded: 0, total: -1, type: e.type }),
                o.emit("core.onError", new Error(n + " " + t.statusText));
            }),
            (t.onprogress = function (e) {
              s.onprogress && s.onprogress(e);
            }),
            (t.onload = function (r) {
              if (
                (s.onprogress &&
                  s.onprogress({ loaded: 0, total: -1, type: r.type }),
                (window.__Cortona3DSolo_Core__ = e.exports),
                200 === t.status || 0 === t.status)
              ) {
                var i = new Blob([
                    "(function (Module, Tiramisu) {Module.getValue=getValue;Module.setValue=setValue;" +
                      t.response +
                      "})(__Cortona3DSolo_Core__.Module, __Cortona3DSolo_Core__.Tiramisu);",
                  ]),
                  a = document.createElement("script"),
                  u = window.URL || window.webkitURL || window,
                  c = u.createObjectURL(i);
                (a.onload = function () {
                  u.revokeObjectURL(c),
                    delete window.__Cortona3DSolo_Core__,
                    o.emit("core.onLoad"),
                    window.addEventListener("error", function (e, t, n, r, i) {
                      (t != c && e.filename != c) ||
                        o.emit("core.onError", i || e);
                    });
                }),
                  (a.onerror = function (e) {
                    u.revokeObjectURL(c),
                      delete window.__Cortona3DSolo_Core__,
                      o.emit("core.onError", new Error(n + " " + e));
                  }),
                  (a.src = c),
                  document.body.appendChild(a);
              } else o.emit("core.onError", new Error(n + " " + t.statusText));
            }),
            t.send(null);
        } catch (e) {
          throw new r(e.message || e);
        }
      }
      var o = n(3),
        a = (n(2).expand, {}),
        s = o.core || {},
        u = {
          toModule: function () {
            s.arguments = [];
            for (var e in this)
              this.hasOwnProperty(e) &&
                "function" != typeof this[e] &&
                (s.arguments.push(e), s.arguments.push(String(this[e])));
          },
          features: 0,
        };
      (r.prototype = Object.create(Error.prototype)),
        (r.prototype.constructor = r),
        (e.exports = { Tiramisu: a, Module: s, Arguments: u, load: i });
    },
    function (e, t) {
      function n(e) {
        function t() {}
        return (t.prototype = e.prototype || e), new t();
      }
      function r(e, t, n) {
        function r() {}
        if (
          (e &&
            ((r.prototype = e.prototype),
            (t.prototype = new r()),
            (t.prototype.constructor = t),
            (t.superClass = e)),
          n)
        )
          for (var i in n) n.hasOwnProperty(i) && (t.prototype[i] = n[i]);
        return t;
      }
      function i(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = arguments[t];
          if (d(n))
            for (var r in n)
              n.hasOwnProperty(r) &&
                (r in e
                  ? "function" == typeof e[r] && "function" == typeof n[r]
                    ? (e[r] = n[r])
                    : e[r] instanceof Object &&
                      n[r] instanceof Object &&
                      n[r] !== {}
                    ? i(e[r], n[r])
                    : (e[r] = n[r])
                  : (e[r] = n[r]));
        }
        return e;
      }
      function o(e, t, n) {
        return e + 256 * t + 65536 * n;
      }
      function a(e) {
        return "number" == typeof e
          ? e
          : "string" == typeof e && e.match(/^#?([0-9A-F]{6})$/i)
          ? parseInt(
              RegExp.$1.substr(4, 2) +
                RegExp.$1.substr(2, 2) +
                RegExp.$1.substr(0, 2),
              16
            )
          : 0;
      }
      function s(e, t, n, r) {
        var i = document.createElement("script");
        return (
          (i.type = "text/javascript"),
          (i.src = e),
          void 0 !== t && (i.async = !!t),
          (i.onload = n),
          (i.onerror = r),
          document.getElementsByTagName("head")[0].appendChild(i),
          i
        );
      }
      function u(e, t, n) {
        var r = document.createElement("link");
        return (
          (r.href = e),
          (r.rel = "stylesheet"),
          (r.type = "text/css"),
          (r.onload = t),
          (r.onerror = n),
          document.getElementsByTagName("head")[0].appendChild(r),
          r
        );
      }
      function c(e) {
        return "function" == typeof e;
      }
      function l(e) {
        return "number" == typeof e;
      }
      function p(e) {
        return "string" == typeof e;
      }
      function d(e) {
        return "object" == typeof e && null !== e;
      }
      function f(e) {
        return void 0 === e;
      }
      function h() {
        return c(window.requirejs) && c(window.define) && window.define.amd;
      }
      function m(e) {
        function t(e) {
          if (e >= 0) return e;
        }
        return /^blob:/i.test(e)
          ? ""
          : ((e = e || document.location.href),
            (e = e.substring(0, t(e.indexOf("#")))),
            (e = e.substring(0, t(e.indexOf("?")))),
            e.substring(0, e.lastIndexOf("/") + 1));
      }
      function v(e, t, n) {
        debugger;
        return new Promise(function (r, i) {
          var o = window.URL || window.webkitURL || window,
            a = new XMLHttpRequest();
            // a.setRequestHeader('X-Requested-With', 'XMLHttpRequest'); 
            a.setRequestHeader('Access-Control-Allow-Origin', '*');
            debugger;
          t && a.overrideMimeType && a.overrideMimeType(t),
            a.open("GET", e, !0),
            n && (a.responseType = n),
            (a.onprogress = function (e) {
              var t = e.loaded,
                n =
                  e.lengthComputable || void 0 === e.lengthComputable
                    ? e.total
                    : 0;
              window.Cortona3DSolo &&
                window.Cortona3DSolo.dispatch("app.onProgress", t, n);
            }),
            (a.onreadystatechange = function (t) {
              if (a.readyState === XMLHttpRequest.DONE) {
                /^blob:/i.test(e) && o.revokeObjectURL(e),
                  window.Cortona3DSolo &&
                    window.Cortona3DSolo.dispatch("app.onProgress", 0, -1);
                200 === a.status || 0 === a.status
                  ? r(a)
                  : i(new Error(e + " " + a.status + " " + a.statusText));
              }
            });
          try {
            debugger;
            a.send(null);
          } catch (e) {
            debugger;
            console.log(e);
            i(e);
          }
        });
      }
      e.exports = {
        extend: n,
        defineClass: r,
        expand: i,
        RGB: o,
        fromHTMLColor: a,
        loadScript: s,
        loadStyleSheet: u,
        isFunction: c,
        isNumber: l,
        isString: p,
        isObject: d,
        isUndefined: f,
        detectAMDLoader: h,
        getBaseURL: m,
        loadResource: v,
      };
    },
    function (e, t, n) {
      var r = n(2).expand,
        i = n(11).EventEmitter;
      e.exports = r(new i(), window.Cortona3DSolo || {});
    },
    function (e, t) {
      function n(e, t) {
        var n = e[1] || "",
          i = e[3];
        if (!i) return n;
        if (t && "function" == typeof btoa) {
          var o = r(i);
          return [n]
            .concat(
              i.sources.map(function (e) {
                return "/*# sourceURL=" + i.sourceRoot + e + " */";
              })
            )
            .concat([o])
            .join("\n");
        }
        return [n].join("\n");
      }
      function r(e) {
        return (
          "/*# sourceMappingURL=data:application/json;charset=utf-8;base64," +
          btoa(unescape(encodeURIComponent(JSON.stringify(e)))) +
          " */"
        );
      }
      e.exports = function (e) {
        var t = [];
        return (
          (t.toString = function () {
            return this.map(function (t) {
              var r = n(t, e);
              return t[2] ? "@media " + t[2] + "{" + r + "}" : r;
            }).join("");
          }),
          (t.i = function (e, n) {
            "string" == typeof e && (e = [[null, e, ""]]);
            for (var r = {}, i = 0; i < this.length; i++) {
              var o = this[i][0];
              "number" == typeof o && (r[o] = !0);
            }
            for (i = 0; i < e.length; i++) {
              var a = e[i];
              ("number" == typeof a[0] && r[a[0]]) ||
                (n && !a[2]
                  ? (a[2] = n)
                  : n && (a[2] = "(" + a[2] + ") and (" + n + ")"),
                t.push(a));
            }
          }),
          t
        );
      };
    },
    function (e, t) {
      function n(e, t) {
        for (var n = 0; n < e.length; n++) {
          var r = e[n],
            i = d[r.id];
          if (i) {
            i.refs++;
            for (var o = 0; o < i.parts.length; o++) i.parts[o](r.parts[o]);
            for (; o < r.parts.length; o++) i.parts.push(u(r.parts[o], t));
          } else {
            for (var a = [], o = 0; o < r.parts.length; o++)
              a.push(u(r.parts[o], t));
            d[r.id] = { id: r.id, refs: 1, parts: a };
          }
        }
      }
      function r(e) {
        for (var t = [], n = {}, r = 0; r < e.length; r++) {
          var i = e[r],
            o = i[0],
            a = i[1],
            s = i[2],
            u = i[3],
            c = { css: a, media: s, sourceMap: u };
          n[o] ? n[o].parts.push(c) : t.push((n[o] = { id: o, parts: [c] }));
        }
        return t;
      }
      function i(e, t) {
        var n = m(),
          r = b[b.length - 1];
        if ("top" === e.insertAt)
          r
            ? r.nextSibling
              ? n.insertBefore(t, r.nextSibling)
              : n.appendChild(t)
            : n.insertBefore(t, n.firstChild),
            b.push(t);
        else {
          if ("bottom" !== e.insertAt)
            throw new Error(
              "Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'."
            );
          n.appendChild(t);
        }
      }
      function o(e) {
        e.parentNode.removeChild(e);
        var t = b.indexOf(e);
        t >= 0 && b.splice(t, 1);
      }
      function a(e) {
        var t = document.createElement("style");
        return (t.type = "text/css"), i(e, t), t;
      }
      function s(e) {
        var t = document.createElement("link");
        return (t.rel = "stylesheet"), i(e, t), t;
      }
      function u(e, t) {
        var n, r, i;
        if (t.singleton) {
          var u = g++;
          (n = v || (v = a(t))),
            (r = c.bind(null, n, u, !1)),
            (i = c.bind(null, n, u, !0));
        } else
          e.sourceMap &&
          "function" == typeof URL &&
          "function" == typeof URL.createObjectURL &&
          "function" == typeof URL.revokeObjectURL &&
          "function" == typeof Blob &&
          "function" == typeof btoa
            ? ((n = s(t)),
              (r = p.bind(null, n)),
              (i = function () {
                o(n), n.href && URL.revokeObjectURL(n.href);
              }))
            : ((n = a(t)),
              (r = l.bind(null, n)),
              (i = function () {
                o(n);
              }));
        return (
          r(e),
          function (t) {
            if (t) {
              if (
                t.css === e.css &&
                t.media === e.media &&
                t.sourceMap === e.sourceMap
              )
                return;
              r((e = t));
            } else i();
          }
        );
      }
      function c(e, t, n, r) {
        var i = n ? "" : r.css;
        if (e.styleSheet) e.styleSheet.cssText = y(t, i);
        else {
          var o = document.createTextNode(i),
            a = e.childNodes;
          a[t] && e.removeChild(a[t]),
            a.length ? e.insertBefore(o, a[t]) : e.appendChild(o);
        }
      }
      function l(e, t) {
        var n = t.css,
          r = t.media;
        if ((r && e.setAttribute("media", r), e.styleSheet))
          e.styleSheet.cssText = n;
        else {
          for (; e.firstChild; ) e.removeChild(e.firstChild);
          e.appendChild(document.createTextNode(n));
        }
      }
      function p(e, t) {
        var n = t.css,
          r = t.sourceMap;
        r &&
          (n +=
            "\n/*# sourceMappingURL=data:application/json;base64," +
            btoa(unescape(encodeURIComponent(JSON.stringify(r)))) +
            " */");
        var i = new Blob([n], { type: "text/css" }),
          o = e.href;
        (e.href = URL.createObjectURL(i)), o && URL.revokeObjectURL(o);
      }
      var d = {},
        f = function (e) {
          var t;
          return function () {
            return void 0 === t && (t = e.apply(this, arguments)), t;
          };
        },
        h = f(function () {
          return /msie [6-9]\b/.test(self.navigator.userAgent.toLowerCase());
        }),
        m = f(function () {
          return document.head || document.getElementsByTagName("head")[0];
        }),
        v = null,
        g = 0,
        b = [];
      e.exports = function (e, t) {
        if ("undefined" != typeof DEBUG && DEBUG && "object" != typeof document)
          throw new Error(
            "The style-loader cannot be used in a non-browser environment"
          );
        (t = t || {}),
          void 0 === t.singleton && (t.singleton = h()),
          void 0 === t.insertAt && (t.insertAt = "bottom");
        var i = r(e);
        return (
          n(i, t),
          function (e) {
            for (var o = [], a = 0; a < i.length; a++) {
              var s = i[a],
                u = d[s.id];
              u.refs--, o.push(u);
            }
            if (e) {
              n(r(e), t);
            }
            for (var a = 0; a < o.length; a++) {
              var u = o[a];
              if (0 === u.refs) {
                for (var c = 0; c < u.parts.length; c++) u.parts[c]();
                delete d[u.id];
              }
            }
          }
        );
      };
      var y = (function () {
        var e = [];
        return function (t, n) {
          return (e[t] = n), e.filter(Boolean).join("\n");
        };
      })();
    },
    function (e, t) {
      e.exports = function (e) {
        var t = {};
        return (
          e.forEach(function (e) {
            var n = e.$text();
            /^(Yes|No)$/.test(n) && (n = "Yes" == n),
              (t[e.$attr("decl-id")] = n);
          }),
          t
        );
      };
    },
    function (e, t, n) {
      var r = n(2).getBaseURL;
      e.exports = {
        getBaseURL: r,
        getDocumentBaseURL: function () {
          return r(n(0).getDocumentURL());
        },
      };
    },
    function (e, t, n) {
      function r(e) {
        if (!u.getSVGElement()) {
          var t =
            c.drawing.config.element ||
            c.drawing.config.svg ||
            (function () {
              var t,
                r = document.createElementNS(
                  "http://www.w3.org/2000/svg",
                  "svg"
                ),
                i = e;
              return (
                e
                  ? (t = e.parentNode)
                  : (n(13),
                    (i = document.body.firstChild),
                    (t = document.body)),
                t.insertBefore(r, i),
                r
              );
            })();
          if (((t.parentNode.style.overflow = "hidden"), t.classList))
            t.classList.add("cortona3dsolo-svg");
          else {
            var r = t.getAttribute("class") || "";
            t.setAttribute("class", (r ? " " : "") + "cortona3dsolo-svg");
          }
          u.initialize(t);
        }
      }
      var i = n(3),
        o = n(0).app,
        a = (n(0).checkConfigureOptions, n(2).expand);
      n(37);
      var s,
        u = n(47),
        c = n(0).usedModules,
        l = !1,
        p = "",
        d = "#FF0000",
        f = "#FF0000";
      a(u, {
        delegate: {
          onProgress: function (e, t) {
            i.dispatch("app.onProgress", e, t);
          },
          didClickHotspot: function (e, t) {
            i.dispatch("app.drawing.didSelectHotspot", e, t);
          },
          didEnterHotspot: function (e) {
            var t =
              (c.drawing.config.features || 0) &
              o.DRAWING_HOTSPOT_HIGHLIGHT_SOLID;
            u.highlight(e, d, t),
              i.dispatch("app.drawing.didEnterHotspot", e),
              i.dispatch("app.drawing.didHoverHotspot", e, !0);
          },
          didLeaveHotspot: function (e) {
            var t =
              (c.drawing.config.features || 0) &
              o.DRAWING_HOTSPOT_HIGHLIGHT_SOLID;
            u.unhighlight(e, t),
              i.dispatch("app.drawing.didLeaveHotspot", e),
              i.dispatch("app.drawing.didHoverHotspot", e, !1);
          },
          didCallContextMenu: function (e, t, n, r) {
            i.dispatch("app.drawing.didCallContextMenu", e, t, n, r);
          },
          onZoomChange: function (e) {
            i.dispatch("app.drawing.didChangeScale", e);
          },
        },
      });
      var h = n(7).getDocumentBaseURL,
        m = {
          drawing: {
            load: function (e) {
              if (
                (i.dispatch("app.drawing.didStartLoadDrawing", e),
                o.drawing.willStartLoadDrawing)
              ) {
                var t = o.drawing.willStartLoadDrawing.call(o, e);
                "string" == typeof t && (e = t);
              }
              if (e == p)
                return (
                  i.dispatch("app.drawing.didFinishLoadDrawing", e),
                  Promise.resolve()
                );
              var r;
              return (
                o.util &&
                  o.util.createResourceURL &&
                  (r = o.util.createResourceURL(e)),
                r || ((r = e), /^[^\/]+:/.test(r) || (r = h() + r)),
                new Promise(function (t, a) {
                  (u.delegate.didCompleteLoad = function (r) {
                    if (
                      (o.util &&
                        o.util.revokeResourceURL &&
                        o.util.revokeResourceURL(r),
                      (p = e),
                      (s = null),
                      i.dispatch("app.drawing.didFinishLoadDrawing", e),
                      !c.core)
                    ) {
                      var a = { type: "drawing", baseURL: n(7).getBaseURL(e) };
                      i.dispatch("app.didFinishLoadDocument", a);
                    }
                    t();
                  }),
                    (u.delegate.failedLoadingDocument = function (t, n) {
                      o.util &&
                        o.util.revokeResourceURL &&
                        o.util.revokeResourceURL(t),
                        (p = e),
                        (s = null),
                        u.unload(),
                        i.dispatch("app.drawing.didFailLoadDrawing", e, n),
                        c.core || i.dispatch("app.didFailLoadDocument", n),
                        a(new Error("Image loading failed: status " + n));
                    }),
                    u.load(r, /\.(png|jpe?g|jpe|gif)$/i.test(e));
                })
              );
            },
            show: function (e) {
              (e = void 0 === e || !!e), u[e ? "show" : "hide"](), (l = !!e);
            },
            isVisible: function () {
              return l;
            },
            selectHotspot: function (e, t) {
              var n =
                (c.drawing.config.features || 0) &
                o.DRAWING_HOTSPOT_HIGHLIGHT_SOLID;
              (t = void 0 === t ? f : t),
                "" === t ? u.unselect(e, n) : u.select(e, t, n);
            },
            highlightHotspot: function (e, t) {
              var n =
                (c.drawing.config.features || 0) &
                o.DRAWING_HOTSPOT_HIGHLIGHT_SOLID;
              (t = void 0 === t ? d : t),
                "" === t ? u.unhighlight(e, n) : u.highlight(e, t, n);
            },
            hoverHotspot: function (e) {
              var t =
                (c.drawing.config.features || 0) &
                o.DRAWING_HOTSPOT_HIGHLIGHT_SOLID;
              s && u.unhighlight(s, t), e && u.highlight(e, d, t), (s = e);
            },
            reset: function () {
              u.reset();
            },
            scaleBy: function (e) {
              u.scaleBy(e);
            },
            hotspotExists: function (e) {
              return Array.prototype.slice
                .call(u.getSVGElement().getElementsByTagName("a"))
                .some(function (t) {
                  return t.getAttribute("name") === e;
                });
            },
          },
        };
      Object.defineProperties(m.drawing, {
        svg: {
          get: function () {
            return u.getSVGElement();
          },
          enumerable: !0,
        },
        hoverColor: {
          get: function () {
            return d;
          },
          set: function (e) {
            d = e;
          },
          enumerable: !0,
        },
        selectionColor: {
          get: function () {
            return f;
          },
          set: function (e) {
            f = e;
          },
          enumerable: !0,
        },
      }),
        (e.exports = {
          configure: function (e) {
            return (
              (e = e || {}),
              (d = e.hotspotHoverColor || e.hotspotHighlightColor || "#FF0000"),
              (f = e.hotspotSelectionColor || "#FF0000"),
              m
            );
          },
          attach: r,
          getSVGViewer: function () {
            return u;
          },
        });
    },
    function (e, t, n) {
      function r(e) {
        var t = new i();
        if (
          1 == e.nodeType &&
          ((t["@name"] = e.nodeName), e.attributes.length > 0)
        ) {
          t["@attributes"] = {};
          for (var n = 0; n < e.attributes.length; n++) {
            var o = e.attributes.item(n);
            t["@attributes"][o.nodeName] = o.nodeValue;
          }
        }
        var a = !1,
          s = !1,
          u = !1,
          c = !1;
        if (e.hasChildNodes()) {
          t["@children"] = [];
          for (var l = 0; l < e.childNodes.length; l++) {
            var p = e.childNodes.item(l),
              d = p.nodeName,
              f = 1 === p.nodeType,
              h = 3 === p.nodeType,
              m = r(p);
            if (
              ((a = a || h),
              (u = u || !h),
              (c = c || 4 === p.nodeType),
              void 0 === t[d])
            )
              t[d] = m;
            else {
              if (void 0 === t[d].push) {
                s = s || h;
                var v = t[d];
                (t[d] = []), t[d].push(v);
              }
              t[d].push(m);
            }
            (f || (h && m)) && t["@children"].push(m);
          }
          s && (t["#text"] = t["#text"].join("").replace(/^[\s\r\n]*$/, "")),
            a && u && delete t["#text"],
            c &&
              ((t["#text"] = t["#cdata-section"]), delete t["#cdata-section"]);
        } else
          "string" == typeof e.nodeValue &&
            (t = e.nodeValue.replace(/^[\s\r\n]*$/, ""));
        return t;
      }
      var i = n(43);
      e.exports = r;
    },
    function (e, t) {
      e.exports = function (e) {
        function t(e) {
          var t = e.$text();
          /^(Yes|No)$/.test(t) && (t = "Yes" == t), (n[e.$attr("name")] = t);
        }
        var n = {};
        if (e.ipc)
          e.$("ipc/figure/media")
            .filter(function (e) {
              return 1 == e.$attr("id");
            })[0]
            .$("value")
            .forEach(t);
        else if (e.SimulationInteractivity) {
          e.$(
            "SimulationInteractivity/SimulationInformation/Options/Value"
          ).forEach(t);
          var r = e.SimulationInteractivity.SimulationInformation;
          (n.PublisherVersion = r.$text("ExporterVersionNumber")),
            (n.SpecID = r.$text("SpecID")),
            (n.SpecVersion = r.$text("SpecVersion")),
            (n.SpecLang = r.$text("SpecLang")),
            (n.ModificationDate = r.$text("ModificationDate")),
            (n.DocumentFile = r.$text("DocumentFile"));
        }
        return n;
      };
    },
    function (e, t) {
      function n() {
        (this._events = this._events || {}),
          (this._maxListeners = this._maxListeners || void 0);
      }
      function r(e) {
        return "function" == typeof e;
      }
      function i(e) {
        return "number" == typeof e;
      }
      function o(e) {
        return "object" == typeof e && null !== e;
      }
      function a(e) {
        return void 0 === e;
      }
      (e.exports = n),
        (n.EventEmitter = n),
        (n.prototype._events = void 0),
        (n.prototype._maxListeners = void 0),
        (n.defaultMaxListeners = 10),
        (n.prototype.setMaxListeners = function (e) {
          if (!i(e) || e < 0 || isNaN(e))
            throw TypeError("n must be a positive number");
          return (this._maxListeners = e), this;
        }),
        (n.prototype.emit = function (e) {
          var t, n, i, s, u, c;
          if (
            (this._events || (this._events = {}),
            "error" === e &&
              (!this._events.error ||
                (o(this._events.error) && !this._events.error.length)))
          ) {
            if ((t = arguments[1]) instanceof Error) throw t;
            var l = new Error(
              'Uncaught, unspecified "error" event. (' + t + ")"
            );
            throw ((l.context = t), l);
          }
          if (((n = this._events[e]), a(n))) return !1;
          if (r(n))
            switch (arguments.length) {
              case 1:
                n.call(this);
                break;
              case 2:
                n.call(this, arguments[1]);
                break;
              case 3:
                n.call(this, arguments[1], arguments[2]);
                break;
              default:
                (s = Array.prototype.slice.call(arguments, 1)),
                  n.apply(this, s);
            }
          else if (o(n))
            for (
              s = Array.prototype.slice.call(arguments, 1),
                c = n.slice(),
                i = c.length,
                u = 0;
              u < i;
              u++
            )
              c[u].apply(this, s);
          return !0;
        }),
        (n.prototype.addListener = function (e, t) {
          var i;
          if (!r(t)) throw TypeError("listener must be a function");
          return (
            this._events || (this._events = {}),
            this._events.newListener &&
              this.emit("newListener", e, r(t.listener) ? t.listener : t),
            this._events[e]
              ? o(this._events[e])
                ? this._events[e].push(t)
                : (this._events[e] = [this._events[e], t])
              : (this._events[e] = t),
            o(this._events[e]) &&
              !this._events[e].warned &&
              (i = a(this._maxListeners)
                ? n.defaultMaxListeners
                : this._maxListeners) &&
              i > 0 &&
              this._events[e].length > i &&
              ((this._events[e].warned = !0),
              console.error(
                "(node) warning: possible EventEmitter memory leak detected. %d listeners added. Use emitter.setMaxListeners() to increase limit.",
                this._events[e].length
              ),
              "function" == typeof console.trace && console.trace()),
            this
          );
        }),
        (n.prototype.on = n.prototype.addListener),
        (n.prototype.once = function (e, t) {
          function n() {
            this.removeListener(e, n),
              i || ((i = !0), t.apply(this, arguments));
          }
          if (!r(t)) throw TypeError("listener must be a function");
          var i = !1;
          return (n.listener = t), this.on(e, n), this;
        }),
        (n.prototype.removeListener = function (e, t) {
          var n, i, a, s;
          if (!r(t)) throw TypeError("listener must be a function");
          if (!this._events || !this._events[e]) return this;
          if (
            ((n = this._events[e]),
            (a = n.length),
            (i = -1),
            n === t || (r(n.listener) && n.listener === t))
          )
            delete this._events[e],
              this._events.removeListener && this.emit("removeListener", e, t);
          else if (o(n)) {
            for (s = a; s-- > 0; )
              if (n[s] === t || (n[s].listener && n[s].listener === t)) {
                i = s;
                break;
              }
            if (i < 0) return this;
            1 === n.length
              ? ((n.length = 0), delete this._events[e])
              : n.splice(i, 1),
              this._events.removeListener && this.emit("removeListener", e, t);
          }
          return this;
        }),
        (n.prototype.removeAllListeners = function (e) {
          var t, n;
          if (!this._events) return this;
          if (!this._events.removeListener)
            return (
              0 === arguments.length
                ? (this._events = {})
                : this._events[e] && delete this._events[e],
              this
            );
          if (0 === arguments.length) {
            for (t in this._events)
              "removeListener" !== t && this.removeAllListeners(t);
            return (
              this.removeAllListeners("removeListener"),
              (this._events = {}),
              this
            );
          }
          if (((n = this._events[e]), r(n))) this.removeListener(e, n);
          else if (n)
            for (; n.length; ) this.removeListener(e, n[n.length - 1]);
          return delete this._events[e], this;
        }),
        (n.prototype.listeners = function (e) {
          return this._events && this._events[e]
            ? r(this._events[e])
              ? [this._events[e]]
              : this._events[e].slice()
            : [];
        }),
        (n.prototype.listenerCount = function (e) {
          if (this._events) {
            var t = this._events[e];
            if (r(t)) return 1;
            if (t) return t.length;
          }
          return 0;
        }),
        (n.listenerCount = function (e, t) {
          return e.listenerCount(t);
        });
    },
    function (e, t, n) {
      var r;
      /*! Hammer.JS - v2.0.7 - 2016-04-22
       * http://hammerjs.github.io/
       *
       * Copyright (c) 2016 Jorik Tangelder;
       * Licensed under the MIT license */
      !(function (i, o, a, s) {
        "use strict";
        function u(e, t, n) {
          return setTimeout(f(e, n), t);
        }
        function c(e, t, n) {
          return !!Array.isArray(e) && (l(e, n[t], n), !0);
        }
        function l(e, t, n) {
          var r;
          if (e)
            if (e.forEach) e.forEach(t, n);
            else if (e.length !== s)
              for (r = 0; r < e.length; ) t.call(n, e[r], r, e), r++;
            else for (r in e) e.hasOwnProperty(r) && t.call(n, e[r], r, e);
        }
        function p(e, t, n) {
          var r = "DEPRECATED METHOD: " + t + "\n" + n + " AT \n";
          return function () {
            var t = new Error("get-stack-trace"),
              n =
                t && t.stack
                  ? t.stack
                      .replace(/^[^\(]+?[\n$]/gm, "")
                      .replace(/^\s+at\s+/gm, "")
                      .replace(/^Object.<anonymous>\s*\(/gm, "{anonymous}()@")
                  : "Unknown Stack Trace",
              o = i.console && (i.console.warn || i.console.log);
            return o && o.call(i.console, r, n), e.apply(this, arguments);
          };
        }
        function d(e, t, n) {
          var r,
            i = t.prototype;
          (r = e.prototype = Object.create(i)),
            (r.constructor = e),
            (r._super = i),
            n && he(r, n);
        }
        function f(e, t) {
          return function () {
            return e.apply(t, arguments);
          };
        }
        function h(e, t) {
          return typeof e == ge ? e.apply(t ? t[0] || s : s, t) : e;
        }
        function m(e, t) {
          return e === s ? t : e;
        }
        function v(e, t, n) {
          l(w(t), function (t) {
            e.addEventListener(t, n, !1);
          });
        }
        function g(e, t, n) {
          l(w(t), function (t) {
            e.removeEventListener(t, n, !1);
          });
        }
        function b(e, t) {
          for (; e; ) {
            if (e == t) return !0;
            e = e.parentNode;
          }
          return !1;
        }
        function y(e, t) {
          return e.indexOf(t) > -1;
        }
        function w(e) {
          return e.trim().split(/\s+/g);
        }
        function E(e, t, n) {
          if (e.indexOf && !n) return e.indexOf(t);
          for (var r = 0; r < e.length; ) {
            if ((n && e[r][n] == t) || (!n && e[r] === t)) return r;
            r++;
          }
          return -1;
        }
        function T(e) {
          return Array.prototype.slice.call(e, 0);
        }
        function _(e, t, n) {
          for (var r = [], i = [], o = 0; o < e.length; ) {
            var a = t ? e[o][t] : e[o];
            E(i, a) < 0 && r.push(e[o]), (i[o] = a), o++;
          }
          return (
            n &&
              (r = t
                ? r.sort(function (e, n) {
                    return e[t] > n[t];
                  })
                : r.sort()),
            r
          );
        }
        function S(e, t) {
          for (
            var n, r, i = t[0].toUpperCase() + t.slice(1), o = 0;
            o < me.length;

          ) {
            if (((n = me[o]), (r = n ? n + i : t) in e)) return r;
            o++;
          }
          return s;
        }
        function O() {
          return _e++;
        }
        function I(e) {
          var t = e.ownerDocument || e;
          return t.defaultView || t.parentWindow || i;
        }
        function x(e, t) {
          var n = this;
          (this.manager = e),
            (this.callback = t),
            (this.element = e.element),
            (this.target = e.options.inputTarget),
            (this.domHandler = function (t) {
              h(e.options.enable, [e]) && n.handler(t);
            }),
            this.init();
        }
        function P(e) {
          var t = e.options.inputClass;
          return new (t || (Ie ? $ : xe ? H : Oe ? X : F))(e, C);
        }
        function C(e, t, n) {
          var r = n.pointers.length,
            i = n.changedPointers.length,
            o = t & Ce && r - i == 0,
            a = t & (Le | Ae) && r - i == 0;
          (n.isFirst = !!o),
            (n.isFinal = !!a),
            o && (e.session = {}),
            (n.eventType = t),
            R(e, n),
            e.emit("hammer.input", n),
            e.recognize(n),
            (e.session.prevInput = n);
        }
        function R(e, t) {
          var n = e.session,
            r = t.pointers,
            i = r.length;
          n.firstInput || (n.firstInput = M(t)),
            i > 1 && !n.firstMultiple
              ? (n.firstMultiple = M(t))
              : 1 === i && (n.firstMultiple = !1);
          var o = n.firstInput,
            a = n.firstMultiple,
            s = a ? a.center : o.center,
            u = (t.center = j(r));
          (t.timeStamp = we()),
            (t.deltaTime = t.timeStamp - o.timeStamp),
            (t.angle = U(s, u)),
            (t.distance = k(s, u)),
            L(n, t),
            (t.offsetDirection = N(t.deltaX, t.deltaY));
          var c = D(t.deltaTime, t.deltaX, t.deltaY);
          (t.overallVelocityX = c.x),
            (t.overallVelocityY = c.y),
            (t.overallVelocity = ye(c.x) > ye(c.y) ? c.x : c.y),
            (t.scale = a ? V(a.pointers, r) : 1),
            (t.rotation = a ? B(a.pointers, r) : 0),
            (t.maxPointers = n.prevInput
              ? t.pointers.length > n.prevInput.maxPointers
                ? t.pointers.length
                : n.prevInput.maxPointers
              : t.pointers.length),
            A(n, t);
          var l = e.element;
          b(t.srcEvent.target, l) && (l = t.srcEvent.target), (t.target = l);
        }
        function L(e, t) {
          var n = t.center,
            r = e.offsetDelta || {},
            i = e.prevDelta || {},
            o = e.prevInput || {};
          (t.eventType !== Ce && o.eventType !== Le) ||
            ((i = e.prevDelta = { x: o.deltaX || 0, y: o.deltaY || 0 }),
            (r = e.offsetDelta = { x: n.x, y: n.y })),
            (t.deltaX = i.x + (n.x - r.x)),
            (t.deltaY = i.y + (n.y - r.y));
        }
        function A(e, t) {
          var n,
            r,
            i,
            o,
            a = e.lastInterval || t,
            u = t.timeStamp - a.timeStamp;
          if (t.eventType != Ae && (u > Pe || a.velocity === s)) {
            var c = t.deltaX - a.deltaX,
              l = t.deltaY - a.deltaY,
              p = D(u, c, l);
            (r = p.x),
              (i = p.y),
              (n = ye(p.x) > ye(p.y) ? p.x : p.y),
              (o = N(c, l)),
              (e.lastInterval = t);
          } else
            (n = a.velocity),
              (r = a.velocityX),
              (i = a.velocityY),
              (o = a.direction);
          (t.velocity = n),
            (t.velocityX = r),
            (t.velocityY = i),
            (t.direction = o);
        }
        function M(e) {
          for (var t = [], n = 0; n < e.pointers.length; )
            (t[n] = {
              clientX: be(e.pointers[n].clientX),
              clientY: be(e.pointers[n].clientY),
            }),
              n++;
          return {
            timeStamp: we(),
            pointers: t,
            center: j(t),
            deltaX: e.deltaX,
            deltaY: e.deltaY,
          };
        }
        function j(e) {
          var t = e.length;
          if (1 === t) return { x: be(e[0].clientX), y: be(e[0].clientY) };
          for (var n = 0, r = 0, i = 0; i < t; )
            (n += e[i].clientX), (r += e[i].clientY), i++;
          return { x: be(n / t), y: be(r / t) };
        }
        function D(e, t, n) {
          return { x: t / e || 0, y: n / e || 0 };
        }
        function N(e, t) {
          return e === t
            ? Me
            : ye(e) >= ye(t)
            ? e < 0
              ? je
              : De
            : t < 0
            ? Ne
            : ke;
        }
        function k(e, t, n) {
          n || (n = Fe);
          var r = t[n[0]] - e[n[0]],
            i = t[n[1]] - e[n[1]];
          return Math.sqrt(r * r + i * i);
        }
        function U(e, t, n) {
          n || (n = Fe);
          var r = t[n[0]] - e[n[0]],
            i = t[n[1]] - e[n[1]];
          return (180 * Math.atan2(i, r)) / Math.PI;
        }
        function B(e, t) {
          return U(t[1], t[0], $e) + U(e[1], e[0], $e);
        }
        function V(e, t) {
          return k(t[0], t[1], $e) / k(e[0], e[1], $e);
        }
        function F() {
          (this.evEl = ze),
            (this.evWin = He),
            (this.pressed = !1),
            x.apply(this, arguments);
        }
        function $() {
          (this.evEl = We),
            (this.evWin = qe),
            x.apply(this, arguments),
            (this.store = this.manager.session.pointerEvents = []);
        }
        function Y() {
          (this.evTarget = Je),
            (this.evWin = Ze),
            (this.started = !1),
            x.apply(this, arguments);
        }
        function z(e, t) {
          var n = T(e.touches),
            r = T(e.changedTouches);
          return (
            t & (Le | Ae) && (n = _(n.concat(r), "identifier", !0)), [n, r]
          );
        }
        function H() {
          (this.evTarget = et), (this.targetIds = {}), x.apply(this, arguments);
        }
        function G(e, t) {
          var n = T(e.touches),
            r = this.targetIds;
          if (t & (Ce | Re) && 1 === n.length)
            return (r[n[0].identifier] = !0), [n, n];
          var i,
            o,
            a = T(e.changedTouches),
            s = [],
            u = this.target;
          if (
            ((o = n.filter(function (e) {
              return b(e.target, u);
            })),
            t === Ce)
          )
            for (i = 0; i < o.length; ) (r[o[i].identifier] = !0), i++;
          for (i = 0; i < a.length; )
            r[a[i].identifier] && s.push(a[i]),
              t & (Le | Ae) && delete r[a[i].identifier],
              i++;
          return s.length ? [_(o.concat(s), "identifier", !0), s] : void 0;
        }
        function X() {
          x.apply(this, arguments);
          var e = f(this.handler, this);
          (this.touch = new H(this.manager, e)),
            (this.mouse = new F(this.manager, e)),
            (this.primaryTouch = null),
            (this.lastTouches = []);
        }
        function W(e, t) {
          e & Ce
            ? ((this.primaryTouch = t.changedPointers[0].identifier),
              q.call(this, t))
            : e & (Le | Ae) && q.call(this, t);
        }
        function q(e) {
          var t = e.changedPointers[0];
          if (t.identifier === this.primaryTouch) {
            var n = { x: t.clientX, y: t.clientY };
            this.lastTouches.push(n);
            var r = this.lastTouches,
              i = function () {
                var e = r.indexOf(n);
                e > -1 && r.splice(e, 1);
              };
            setTimeout(i, tt);
          }
        }
        function K(e) {
          for (
            var t = e.srcEvent.clientX, n = e.srcEvent.clientY, r = 0;
            r < this.lastTouches.length;
            r++
          ) {
            var i = this.lastTouches[r],
              o = Math.abs(t - i.x),
              a = Math.abs(n - i.y);
            if (o <= nt && a <= nt) return !0;
          }
          return !1;
        }
        function J(e, t) {
          (this.manager = e), this.set(t);
        }
        function Z(e) {
          if (y(e, st)) return st;
          var t = y(e, ut),
            n = y(e, ct);
          return t && n ? st : t || n ? (t ? ut : ct) : y(e, at) ? at : ot;
        }
        function Q(e) {
          (this.options = he({}, this.defaults, e || {})),
            (this.id = O()),
            (this.manager = null),
            (this.options.enable = m(this.options.enable, !0)),
            (this.state = pt),
            (this.simultaneous = {}),
            (this.requireFail = []);
        }
        function ee(e) {
          return e & vt
            ? "cancel"
            : e & ht
            ? "end"
            : e & ft
            ? "move"
            : e & dt
            ? "start"
            : "";
        }
        function te(e) {
          return e == ke
            ? "down"
            : e == Ne
            ? "up"
            : e == je
            ? "left"
            : e == De
            ? "right"
            : "";
        }
        function ne(e, t) {
          var n = t.manager;
          return n ? n.get(e) : e;
        }
        function re() {
          Q.apply(this, arguments);
        }
        function ie() {
          re.apply(this, arguments), (this.pX = null), (this.pY = null);
        }
        function oe() {
          re.apply(this, arguments);
        }
        function ae() {
          Q.apply(this, arguments), (this._timer = null), (this._input = null);
        }
        function se() {
          re.apply(this, arguments);
        }
        function ue() {
          re.apply(this, arguments);
        }
        function ce() {
          Q.apply(this, arguments),
            (this.pTime = !1),
            (this.pCenter = !1),
            (this._timer = null),
            (this._input = null),
            (this.count = 0);
        }
        function le(e, t) {
          return (
            (t = t || {}),
            (t.recognizers = m(t.recognizers, le.defaults.preset)),
            new pe(e, t)
          );
        }
        function pe(e, t) {
          (this.options = he({}, le.defaults, t || {})),
            (this.options.inputTarget = this.options.inputTarget || e),
            (this.handlers = {}),
            (this.session = {}),
            (this.recognizers = []),
            (this.oldCssProps = {}),
            (this.element = e),
            (this.input = P(this)),
            (this.touchAction = new J(this, this.options.touchAction)),
            de(this, !0),
            l(
              this.options.recognizers,
              function (e) {
                var t = this.add(new e[0](e[1]));
                e[2] && t.recognizeWith(e[2]), e[3] && t.requireFailure(e[3]);
              },
              this
            );
        }
        function de(e, t) {
          var n = e.element;
          if (n.style) {
            var r;
            l(e.options.cssProps, function (i, o) {
              (r = S(n.style, o)),
                t
                  ? ((e.oldCssProps[r] = n.style[r]), (n.style[r] = i))
                  : (n.style[r] = e.oldCssProps[r] || "");
            }),
              t || (e.oldCssProps = {});
          }
        }
        function fe(e, t) {
          var n = o.createEvent("Event");
          n.initEvent(e, !0, !0), (n.gesture = t), t.target.dispatchEvent(n);
        }
        var he,
          me = ["", "webkit", "Moz", "MS", "ms", "o"],
          ve = o.createElement("div"),
          ge = "function",
          be = Math.round,
          ye = Math.abs,
          we = Date.now;
        he =
          "function" != typeof Object.assign
            ? function (e) {
                if (e === s || null === e)
                  throw new TypeError(
                    "Cannot convert undefined or null to object"
                  );
                for (var t = Object(e), n = 1; n < arguments.length; n++) {
                  var r = arguments[n];
                  if (r !== s && null !== r)
                    for (var i in r) r.hasOwnProperty(i) && (t[i] = r[i]);
                }
                return t;
              }
            : Object.assign;
        var Ee = p(
            function (e, t, n) {
              for (var r = Object.keys(t), i = 0; i < r.length; )
                (!n || (n && e[r[i]] === s)) && (e[r[i]] = t[r[i]]), i++;
              return e;
            },
            "extend",
            "Use `assign`."
          ),
          Te = p(
            function (e, t) {
              return Ee(e, t, !0);
            },
            "merge",
            "Use `assign`."
          ),
          _e = 1,
          Se = /mobile|tablet|ip(ad|hone|od)|android/i,
          Oe = "ontouchstart" in i,
          Ie = S(i, "PointerEvent") !== s,
          xe = Oe && Se.test(navigator.userAgent),
          Pe = 25,
          Ce = 1,
          Re = 2,
          Le = 4,
          Ae = 8,
          Me = 1,
          je = 2,
          De = 4,
          Ne = 8,
          ke = 16,
          Ue = je | De,
          Be = Ne | ke,
          Ve = Ue | Be,
          Fe = ["x", "y"],
          $e = ["clientX", "clientY"];
        x.prototype = {
          handler: function () {},
          init: function () {
            this.evEl && v(this.element, this.evEl, this.domHandler),
              this.evTarget && v(this.target, this.evTarget, this.domHandler),
              this.evWin && v(I(this.element), this.evWin, this.domHandler);
          },
          destroy: function () {
            this.evEl && g(this.element, this.evEl, this.domHandler),
              this.evTarget && g(this.target, this.evTarget, this.domHandler),
              this.evWin && g(I(this.element), this.evWin, this.domHandler);
          },
        };
        var Ye = { mousedown: Ce, mousemove: Re, mouseup: Le },
          ze = "mousedown",
          He = "mousemove mouseup";
        d(F, x, {
          handler: function (e) {
            var t = Ye[e.type];
            t & Ce && 0 === e.button && (this.pressed = !0),
              t & Re && 1 !== e.which && (t = Le),
              this.pressed &&
                (t & Le && (this.pressed = !1),
                this.callback(this.manager, t, {
                  pointers: [e],
                  changedPointers: [e],
                  pointerType: "mouse",
                  srcEvent: e,
                }));
          },
        });
        var Ge = {
            pointerdown: Ce,
            pointermove: Re,
            pointerup: Le,
            pointercancel: Ae,
            pointerout: Ae,
          },
          Xe = { 2: "touch", 3: "pen", 4: "mouse", 5: "kinect" },
          We = "pointerdown",
          qe = "pointermove pointerup pointercancel";
        i.MSPointerEvent &&
          !i.PointerEvent &&
          ((We = "MSPointerDown"),
          (qe = "MSPointerMove MSPointerUp MSPointerCancel")),
          d($, x, {
            handler: function (e) {
              var t = this.store,
                n = !1,
                r = e.type.toLowerCase().replace("ms", ""),
                i = Ge[r],
                o = Xe[e.pointerType] || e.pointerType,
                a = "touch" == o,
                s = E(t, e.pointerId, "pointerId");
              i & Ce && (0 === e.button || a)
                ? s < 0 && (t.push(e), (s = t.length - 1))
                : i & (Le | Ae) && (n = !0),
                s < 0 ||
                  ((t[s] = e),
                  this.callback(this.manager, i, {
                    pointers: t,
                    changedPointers: [e],
                    pointerType: o,
                    srcEvent: e,
                  }),
                  n && t.splice(s, 1));
            },
          });
        var Ke = {
            touchstart: Ce,
            touchmove: Re,
            touchend: Le,
            touchcancel: Ae,
          },
          Je = "touchstart",
          Ze = "touchstart touchmove touchend touchcancel";
        d(Y, x, {
          handler: function (e) {
            var t = Ke[e.type];
            if ((t === Ce && (this.started = !0), this.started)) {
              var n = z.call(this, e, t);
              t & (Le | Ae) &&
                n[0].length - n[1].length == 0 &&
                (this.started = !1),
                this.callback(this.manager, t, {
                  pointers: n[0],
                  changedPointers: n[1],
                  pointerType: "touch",
                  srcEvent: e,
                });
            }
          },
        });
        var Qe = {
            touchstart: Ce,
            touchmove: Re,
            touchend: Le,
            touchcancel: Ae,
          },
          et = "touchstart touchmove touchend touchcancel";
        d(H, x, {
          handler: function (e) {
            var t = Qe[e.type],
              n = G.call(this, e, t);
            n &&
              this.callback(this.manager, t, {
                pointers: n[0],
                changedPointers: n[1],
                pointerType: "touch",
                srcEvent: e,
              });
          },
        });
        var tt = 2500,
          nt = 25;
        d(X, x, {
          handler: function (e, t, n) {
            var r = "touch" == n.pointerType,
              i = "mouse" == n.pointerType;
            if (
              !(
                i &&
                n.sourceCapabilities &&
                n.sourceCapabilities.firesTouchEvents
              )
            ) {
              if (r) W.call(this, t, n);
              else if (i && K.call(this, n)) return;
              this.callback(e, t, n);
            }
          },
          destroy: function () {
            this.touch.destroy(), this.mouse.destroy();
          },
        });
        var rt = S(ve.style, "touchAction"),
          it = rt !== s,
          ot = "auto",
          at = "manipulation",
          st = "none",
          ut = "pan-x",
          ct = "pan-y",
          lt = (function () {
            if (!it) return !1;
            var e = {},
              t = i.CSS && i.CSS.supports;
            return (
              [
                "auto",
                "manipulation",
                "pan-y",
                "pan-x",
                "pan-x pan-y",
                "none",
              ].forEach(function (n) {
                e[n] = !t || i.CSS.supports("touch-action", n);
              }),
              e
            );
          })();
        J.prototype = {
          set: function (e) {
            "compute" == e && (e = this.compute()),
              it &&
                this.manager.element.style &&
                lt[e] &&
                (this.manager.element.style[rt] = e),
              (this.actions = e.toLowerCase().trim());
          },
          update: function () {
            this.set(this.manager.options.touchAction);
          },
          compute: function () {
            var e = [];
            return (
              l(this.manager.recognizers, function (t) {
                h(t.options.enable, [t]) && (e = e.concat(t.getTouchAction()));
              }),
              Z(e.join(" "))
            );
          },
          preventDefaults: function (e) {
            var t = e.srcEvent,
              n = e.offsetDirection;
            if (this.manager.session.prevented) return void t.preventDefault();
            var r = this.actions,
              i = y(r, st) && !lt[st],
              o = y(r, ct) && !lt[ct],
              a = y(r, ut) && !lt[ut];
            if (i) {
              var s = 1 === e.pointers.length,
                u = e.distance < 2,
                c = e.deltaTime < 250;
              if (s && u && c) return;
            }
            return a && o
              ? void 0
              : i || (o && n & Ue) || (a && n & Be)
              ? this.preventSrc(t)
              : void 0;
          },
          preventSrc: function (e) {
            (this.manager.session.prevented = !0), e.preventDefault();
          },
        };
        var pt = 1,
          dt = 2,
          ft = 4,
          ht = 8,
          mt = ht,
          vt = 16;
        (Q.prototype = {
          defaults: {},
          set: function (e) {
            return (
              he(this.options, e),
              this.manager && this.manager.touchAction.update(),
              this
            );
          },
          recognizeWith: function (e) {
            if (c(e, "recognizeWith", this)) return this;
            var t = this.simultaneous;
            return (
              (e = ne(e, this)),
              t[e.id] || ((t[e.id] = e), e.recognizeWith(this)),
              this
            );
          },
          dropRecognizeWith: function (e) {
            return c(e, "dropRecognizeWith", this)
              ? this
              : ((e = ne(e, this)), delete this.simultaneous[e.id], this);
          },
          requireFailure: function (e) {
            if (c(e, "requireFailure", this)) return this;
            var t = this.requireFail;
            return (
              (e = ne(e, this)),
              -1 === E(t, e) && (t.push(e), e.requireFailure(this)),
              this
            );
          },
          dropRequireFailure: function (e) {
            if (c(e, "dropRequireFailure", this)) return this;
            e = ne(e, this);
            var t = E(this.requireFail, e);
            return t > -1 && this.requireFail.splice(t, 1), this;
          },
          hasRequireFailures: function () {
            return this.requireFail.length > 0;
          },
          canRecognizeWith: function (e) {
            return !!this.simultaneous[e.id];
          },
          emit: function (e) {
            function t(t) {
              n.manager.emit(t, e);
            }
            var n = this,
              r = this.state;
            r < ht && t(n.options.event + ee(r)),
              t(n.options.event),
              e.additionalEvent && t(e.additionalEvent),
              r >= ht && t(n.options.event + ee(r));
          },
          tryEmit: function (e) {
            if (this.canEmit()) return this.emit(e);
            this.state = 32;
          },
          canEmit: function () {
            for (var e = 0; e < this.requireFail.length; ) {
              if (!(this.requireFail[e].state & (32 | pt))) return !1;
              e++;
            }
            return !0;
          },
          recognize: function (e) {
            var t = he({}, e);
            if (!h(this.options.enable, [this, t]))
              return this.reset(), void (this.state = 32);
            this.state & (mt | vt | 32) && (this.state = pt),
              (this.state = this.process(t)),
              this.state & (dt | ft | ht | vt) && this.tryEmit(t);
          },
          process: function (e) {},
          getTouchAction: function () {},
          reset: function () {},
        }),
          d(re, Q, {
            defaults: { pointers: 1 },
            attrTest: function (e) {
              var t = this.options.pointers;
              return 0 === t || e.pointers.length === t;
            },
            process: function (e) {
              var t = this.state,
                n = e.eventType,
                r = t & (dt | ft),
                i = this.attrTest(e);
              return r && (n & Ae || !i)
                ? t | vt
                : r || i
                ? n & Le
                  ? t | ht
                  : t & dt
                  ? t | ft
                  : dt
                : 32;
            },
          }),
          d(ie, re, {
            defaults: {
              event: "pan",
              threshold: 10,
              pointers: 1,
              direction: Ve,
            },
            getTouchAction: function () {
              var e = this.options.direction,
                t = [];
              return e & Ue && t.push(ct), e & Be && t.push(ut), t;
            },
            directionTest: function (e) {
              var t = this.options,
                n = !0,
                r = e.distance,
                i = e.direction,
                o = e.deltaX,
                a = e.deltaY;
              return (
                i & t.direction ||
                  (t.direction & Ue
                    ? ((i = 0 === o ? Me : o < 0 ? je : De),
                      (n = o != this.pX),
                      (r = Math.abs(e.deltaX)))
                    : ((i = 0 === a ? Me : a < 0 ? Ne : ke),
                      (n = a != this.pY),
                      (r = Math.abs(e.deltaY)))),
                (e.direction = i),
                n && r > t.threshold && i & t.direction
              );
            },
            attrTest: function (e) {
              return (
                re.prototype.attrTest.call(this, e) &&
                (this.state & dt ||
                  (!(this.state & dt) && this.directionTest(e)))
              );
            },
            emit: function (e) {
              (this.pX = e.deltaX), (this.pY = e.deltaY);
              var t = te(e.direction);
              t && (e.additionalEvent = this.options.event + t),
                this._super.emit.call(this, e);
            },
          }),
          d(oe, re, {
            defaults: { event: "pinch", threshold: 0, pointers: 2 },
            getTouchAction: function () {
              return [st];
            },
            attrTest: function (e) {
              return (
                this._super.attrTest.call(this, e) &&
                (Math.abs(e.scale - 1) > this.options.threshold ||
                  this.state & dt)
              );
            },
            emit: function (e) {
              if (1 !== e.scale) {
                var t = e.scale < 1 ? "in" : "out";
                e.additionalEvent = this.options.event + t;
              }
              this._super.emit.call(this, e);
            },
          }),
          d(ae, Q, {
            defaults: { event: "press", pointers: 1, time: 251, threshold: 9 },
            getTouchAction: function () {
              return [ot];
            },
            process: function (e) {
              var t = this.options,
                n = e.pointers.length === t.pointers,
                r = e.distance < t.threshold,
                i = e.deltaTime > t.time;
              if (
                ((this._input = e), !r || !n || (e.eventType & (Le | Ae) && !i))
              )
                this.reset();
              else if (e.eventType & Ce)
                this.reset(),
                  (this._timer = u(
                    function () {
                      (this.state = mt), this.tryEmit();
                    },
                    t.time,
                    this
                  ));
              else if (e.eventType & Le) return mt;
              return 32;
            },
            reset: function () {
              clearTimeout(this._timer);
            },
            emit: function (e) {
              this.state === mt &&
                (e && e.eventType & Le
                  ? this.manager.emit(this.options.event + "up", e)
                  : ((this._input.timeStamp = we()),
                    this.manager.emit(this.options.event, this._input)));
            },
          }),
          d(se, re, {
            defaults: { event: "rotate", threshold: 0, pointers: 2 },
            getTouchAction: function () {
              return [st];
            },
            attrTest: function (e) {
              return (
                this._super.attrTest.call(this, e) &&
                (Math.abs(e.rotation) > this.options.threshold ||
                  this.state & dt)
              );
            },
          }),
          d(ue, re, {
            defaults: {
              event: "swipe",
              threshold: 10,
              velocity: 0.3,
              direction: Ue | Be,
              pointers: 1,
            },
            getTouchAction: function () {
              return ie.prototype.getTouchAction.call(this);
            },
            attrTest: function (e) {
              var t,
                n = this.options.direction;
              return (
                n & (Ue | Be)
                  ? (t = e.overallVelocity)
                  : n & Ue
                  ? (t = e.overallVelocityX)
                  : n & Be && (t = e.overallVelocityY),
                this._super.attrTest.call(this, e) &&
                  n & e.offsetDirection &&
                  e.distance > this.options.threshold &&
                  e.maxPointers == this.options.pointers &&
                  ye(t) > this.options.velocity &&
                  e.eventType & Le
              );
            },
            emit: function (e) {
              var t = te(e.offsetDirection);
              t && this.manager.emit(this.options.event + t, e),
                this.manager.emit(this.options.event, e);
            },
          }),
          d(ce, Q, {
            defaults: {
              event: "tap",
              pointers: 1,
              taps: 1,
              interval: 300,
              time: 250,
              threshold: 9,
              posThreshold: 10,
            },
            getTouchAction: function () {
              return [at];
            },
            process: function (e) {
              var t = this.options,
                n = e.pointers.length === t.pointers,
                r = e.distance < t.threshold,
                i = e.deltaTime < t.time;
              if ((this.reset(), e.eventType & Ce && 0 === this.count))
                return this.failTimeout();
              if (r && i && n) {
                if (e.eventType != Le) return this.failTimeout();
                var o = !this.pTime || e.timeStamp - this.pTime < t.interval,
                  a =
                    !this.pCenter || k(this.pCenter, e.center) < t.posThreshold;
                (this.pTime = e.timeStamp),
                  (this.pCenter = e.center),
                  a && o ? (this.count += 1) : (this.count = 1),
                  (this._input = e);
                if (0 === this.count % t.taps)
                  return this.hasRequireFailures()
                    ? ((this._timer = u(
                        function () {
                          (this.state = mt), this.tryEmit();
                        },
                        t.interval,
                        this
                      )),
                      dt)
                    : mt;
              }
              return 32;
            },
            failTimeout: function () {
              return (
                (this._timer = u(
                  function () {
                    this.state = 32;
                  },
                  this.options.interval,
                  this
                )),
                32
              );
            },
            reset: function () {
              clearTimeout(this._timer);
            },
            emit: function () {
              this.state == mt &&
                ((this._input.tapCount = this.count),
                this.manager.emit(this.options.event, this._input));
            },
          }),
          (le.VERSION = "2.0.7"),
          (le.defaults = {
            domEvents: !1,
            touchAction: "compute",
            enable: !0,
            inputTarget: null,
            inputClass: null,
            preset: [
              [se, { enable: !1 }],
              [oe, { enable: !1 }, ["rotate"]],
              [ue, { direction: Ue }],
              [ie, { direction: Ue }, ["swipe"]],
              [ce],
              [ce, { event: "doubletap", taps: 2 }, ["tap"]],
              [ae],
            ],
            cssProps: {
              userSelect: "none",
              touchSelect: "none",
              touchCallout: "none",
              contentZooming: "none",
              userDrag: "none",
              tapHighlightColor: "rgba(0,0,0,0)",
            },
          });
        (pe.prototype = {
          set: function (e) {
            return (
              he(this.options, e),
              e.touchAction && this.touchAction.update(),
              e.inputTarget &&
                (this.input.destroy(),
                (this.input.target = e.inputTarget),
                this.input.init()),
              this
            );
          },
          stop: function (e) {
            this.session.stopped = e ? 2 : 1;
          },
          recognize: function (e) {
            var t = this.session;
            if (!t.stopped) {
              this.touchAction.preventDefaults(e);
              var n,
                r = this.recognizers,
                i = t.curRecognizer;
              (!i || (i && i.state & mt)) && (i = t.curRecognizer = null);
              for (var o = 0; o < r.length; )
                (n = r[o]),
                  2 === t.stopped || (i && n != i && !n.canRecognizeWith(i))
                    ? n.reset()
                    : n.recognize(e),
                  !i && n.state & (dt | ft | ht) && (i = t.curRecognizer = n),
                  o++;
            }
          },
          get: function (e) {
            if (e instanceof Q) return e;
            for (var t = this.recognizers, n = 0; n < t.length; n++)
              if (t[n].options.event == e) return t[n];
            return null;
          },
          add: function (e) {
            if (c(e, "add", this)) return this;
            var t = this.get(e.options.event);
            return (
              t && this.remove(t),
              this.recognizers.push(e),
              (e.manager = this),
              this.touchAction.update(),
              e
            );
          },
          remove: function (e) {
            if (c(e, "remove", this)) return this;
            if ((e = this.get(e))) {
              var t = this.recognizers,
                n = E(t, e);
              -1 !== n && (t.splice(n, 1), this.touchAction.update());
            }
            return this;
          },
          on: function (e, t) {
            if (e !== s && t !== s) {
              var n = this.handlers;
              return (
                l(w(e), function (e) {
                  (n[e] = n[e] || []), n[e].push(t);
                }),
                this
              );
            }
          },
          off: function (e, t) {
            if (e !== s) {
              var n = this.handlers;
              return (
                l(w(e), function (e) {
                  t ? n[e] && n[e].splice(E(n[e], t), 1) : delete n[e];
                }),
                this
              );
            }
          },
          emit: function (e, t) {
            this.options.domEvents && fe(e, t);
            var n = this.handlers[e] && this.handlers[e].slice();
            if (n && n.length) {
              (t.type = e),
                (t.preventDefault = function () {
                  t.srcEvent.preventDefault();
                });
              for (var r = 0; r < n.length; ) n[r](t), r++;
            }
          },
          destroy: function () {
            this.element && de(this, !1),
              (this.handlers = {}),
              (this.session = {}),
              this.input.destroy(),
              (this.element = null);
          },
        }),
          he(le, {
            INPUT_START: Ce,
            INPUT_MOVE: Re,
            INPUT_END: Le,
            INPUT_CANCEL: Ae,
            STATE_POSSIBLE: pt,
            STATE_BEGAN: dt,
            STATE_CHANGED: ft,
            STATE_ENDED: ht,
            STATE_RECOGNIZED: mt,
            STATE_CANCELLED: vt,
            STATE_FAILED: 32,
            DIRECTION_NONE: Me,
            DIRECTION_LEFT: je,
            DIRECTION_RIGHT: De,
            DIRECTION_UP: Ne,
            DIRECTION_DOWN: ke,
            DIRECTION_HORIZONTAL: Ue,
            DIRECTION_VERTICAL: Be,
            DIRECTION_ALL: Ve,
            Manager: pe,
            Input: x,
            TouchAction: J,
            TouchInput: H,
            MouseInput: F,
            PointerEventInput: $,
            TouchMouseInput: X,
            SingleTouchInput: Y,
            Recognizer: Q,
            AttrRecognizer: re,
            Tap: ce,
            Pan: ie,
            Swipe: ue,
            Pinch: oe,
            Rotate: se,
            Press: ae,
            on: v,
            off: g,
            each: l,
            merge: Te,
            extend: Ee,
            assign: he,
            inherit: d,
            bindFn: f,
            prefixed: S,
          }),
          ((void 0 !== i
            ? i
            : "undefined" != typeof self
            ? self
            : {}
          ).Hammer = le),
          (r = function () {
            return le;
          }.call(t, n, t, e)) !== s && (e.exports = r);
      })(window, document);
    },
    function (e, t, n) {
      var r = n(30);
      "string" == typeof r && (r = [[e.i, r, ""]]);
      n(5)(r, {});
      r.locals && (e.exports = r.locals);
    },
    function (e, t) {
      function n() {
        3 == arguments.length && "number" == typeof arguments[0]
          ? ((this.x = arguments[0]),
            (this.y = arguments[1]),
            (this.z = arguments[2]))
          : 1 == arguments.length &&
            "object" == typeof arguments[0] &&
            null !== arguments[0] &&
            3 == arguments[0].length
          ? ((this.x = arguments[0][0]),
            (this.y = arguments[0][1]),
            (this.z = arguments[0][2]))
          : ((this.x = 0), (this.y = 0), (this.z = 0));
      }
      (n.prototype.toArray = function () {
        return [this.x, this.y, this.z];
      }),
        (n.prototype.toString = function () {
          return this.toArray().join(" ");
        }),
        (n.prototype.add = function (e) {
          return new n(e.x + this.x, e.y + this.y, e.z + this.z);
        }),
        (n.prototype.subtract = function (e) {
          return new n(this.x - e.x, this.y - e.y, this.z - e.z);
        }),
        (n.prototype.dot = function (e) {
          return e.x * this.x + e.y * this.y + e.z * this.z;
        }),
        (n.prototype.cross = function (e) {
          return new n(
            this.y * e.z - e.y * this.z,
            this.z * e.x - e.z * this.x,
            this.x * e.y - e.x * this.y
          );
        }),
        (n.prototype.divide = function (e) {
          return new n(this.x / e, this.y / e, this.z / e);
        }),
        (n.prototype.multiply = function (e) {
          return new n(this.x * e, this.y * e, this.z * e);
        }),
        (n.prototype.length = function () {
          return Math.sqrt(this.x * this.x + this.y * this.y + this.z * this.z);
        }),
        (n.prototype.normalize = function () {
          var e = Math.sqrt(
            this.x * this.x + this.y * this.y + this.z * this.z
          );
          return 0 === e ? this : this.divide(e);
        }),
        (n.prototype.negate = function () {
          return new n(-this.x, -this.y, -this.z);
        }),
        (e.exports = n);
    },
    function (e, t, n) {
      "use strict";
      e.exports = n(34).polyfill();
    },
    function (e, t) {
      function n(e, t, n) {
        return new Promise(function (r, o) {
          try {
            var a = URL.createObjectURL(
                new Blob(
                  [
                    "onmessage = function (e) { var byteCharacters = e.data[0]; var sliceSize = e.data[1]; var byteArrays = []; for (var offset = 0; offset < byteCharacters.length; offset += sliceSize) { var slice = byteCharacters.slice(offset, offset + sliceSize); var byteNumbers = new Array(slice.length); for (var i = 0; i < slice.length; i++) { byteNumbers[i] = slice.charCodeAt(i); } var byteArray = new Uint8Array(byteNumbers); byteArrays.push(byteArray); } postMessage(byteArrays); };",
                  ],
                  { type: "application/javascript" }
                )
              ),
              s = new Worker(a);
            (s.onmessage = function (e) {
              URL.revokeObjectURL(a), r(new Blob(e.data, { type: t || "" }));
            }),
              s.postMessage([atob(e), n || i]);
          } catch (e) {
            o();
          }
        });
      }
      var r = !!window.MSInputMethodContext && !!document.documentMode,
        i = r ? 1048576 : 512;
      e.exports = n;
    },
    function (e, t, n) {
      function r() {
        var e = d.PanelService.didDrawScene;
        (d.PanelService.didDrawScene = function () {
          p.dispatch("core.didDrawAnimationFrame"), e();
        }),
          h.ui.showCanvas(!0),
          p.dispatch("core.didChangeLayout"),
          h.ui.setBannerImage(h.util.fetchBannerImage());
      }
      function i(e) {
        var t = e.companionFile,
          n = !m(h.DISABLE_INTERACTIVITY_XML_EMISSION);
        if (
          ((n = n && !!t),
          (n = n && ("ipc" == e.type || "procedure" == e.type)))
        ) {
          var r = h.util.createResourceURL(t) || t;
          if (r)
            return h.loadCompanionFile(r).then(function (e) {
              if (e && e.type) {
                var t = {};
                (t[e.type] = { interactivity: e.interactivity }), g(h, t);
              }
            });
        }
        return Promise.resolve();
      }
      function o(e) {
        var t = e.match(/^#([0-9a-f]{6})$/i);
        return t
          ? ((t = t[1]),
            (parseInt(t.substr(0, 2), 16) << 16) |
              (parseInt(t.substr(2, 2), 16) << 8) |
              parseInt(t.substr(4, 2), 16))
          : ((t = e.match(/^#([0-9a-f]{3})$/i)),
            t
              ? ((t = t[1]),
                ((17 * parseInt(t.charAt(0), 16)) << 16) |
                  ((17 * parseInt(t.charAt(1), 16)) << 8) |
                  (17 * parseInt(t.charAt(2), 16)))
              : -1);
      }
      function a(e) {
        return "#" + (16777215 & e).toString(16).toUpperCase();
      }
      function s(e, t, n) {
        var r = 0,
          i = 0;
        if (t) {
          "number" == typeof t && (t = [t]),
            (i = d.allocate(4 * t.length, "i32", d.ALLOC_STACK)),
            (r = t.length);
          for (var o = 0; o < r; ++o) d.setValue(i + 4 * o, t[o], "i32");
        }
        var a = [i, r].concat(
            Array.prototype.slice.call(arguments, 2).filter(function (e) {
              return void 0 !== e;
            })
          ),
          s = new Array(a.length).map(function () {
            return "number";
          });
        d.ccall(e, "null", s, a);
      }
      function u() {
        function e(e) {
          e.stopPropagation();
        }
        function t(e) {
          if (!S) {
            var t = e.target,
              n = t.getBoundingClientRect(),
              r = e.clientX - n.left,
              i = e.clientY - n.top;
            p.dispatch("app.didCallContextMenu", r, i, t),
              e.preventDefault && e.preventDefault(),
              e.stopPropagation && e.stopPropagation();
          }
        }
        function n(e) {
          "mouse" !== e.pointerType && t(e);
        }
        function r(e) {
          var t = e.target,
            n = t.getBoundingClientRect(),
            r = e.clientX - n.left,
            i = e.clientY - n.top;
          (obj = h.pickObject(r, i)),
            clearTimeout(P),
            obj ? h.fitObjectsInView([obj.handle], !0) : h.fitSceneInView(!0),
            e.preventDefault && e.preventDefault(),
            e.stopPropagation && e.stopPropagation();
        }
        Array.prototype.slice
          .call(document.getElementsByClassName("cortona3dsolo-popover"))
          .forEach(function (t) {
            t.addEventListener(
              "contextmenu",
              function (e) {
                e.preventDefault();
              },
              !1
            ),
              t.addEventListener("pointerdown", e, !1),
              t.addEventListener("pointerup", e, !1);
          });
        var i = c();
        if (
          (d.canvas.addEventListener("contextmenu", t),
          m(h.ENABLE_NAVIGATION_FIT_TO_OBJECT))
        ) {
          d.canvas.addEventListener(
            "click",
            function (e) {
              if (
                4 ==
                (+(e.shiftKey && 1) | +(e.ctrlKey && 2) | +(e.altKey && 4))
              ) {
                var t = e.target || e.srcElement,
                  n = t.getBoundingClientRect(),
                  r = e.clientX - n.left,
                  i = e.clientY - n.top,
                  o = h.pickObject(r, i);
                o &&
                  (clearTimeout(P),
                  (P = setTimeout(function () {
                    h.setRotationCenterToObjects([o.handle], !0);
                  }, 100)));
              }
            },
            !1
          );
          var o = 0,
            a = {},
            s = function (e, t) {
              return Math.sqrt(
                (e.x - t.x) * (e.x - t.x) + (e.y - t.y) * (e.y - t.y)
              );
            };
          if (i)
            d.canvas.addEventListener("dblclick", r),
              d.canvas.addEventListener("MSGestureTap", function (e) {
                e.detail === e.MSGESTURE_FLAG_BEGIN + e.MSGESTURE_FLAG_END &&
                  (o
                    ? new Date().valueOf() - o <= _
                      ? ((o = 0),
                        s(a, { x: e.screenX, y: e.screenY }) < 100 && r(e))
                      : (o = 0)
                    : ((o = new Date().valueOf()),
                      (a.x = e.screenX),
                      (a.y = e.screenY)));
              }),
              d.canvas.addEventListener("MSGestureHold", function (e) {
                e.detail & e.MSGESTURE_FLAG_BEGIN
                  ? (n(e), (S = !0))
                  : e.detail & e.MSGESTURE_FLAG_END &&
                    setTimeout(function () {
                      S = !1;
                    }, 250);
              });
          else {
            var u = {};
            !1 === navigator.pointerEnabled &&
              (u.inputClass = w
                ? E.TouchInput
                : y
                ? E.TouchMouseInput
                : E.MouseInput);
            var l = new E.Manager(d.canvas, u),
              f = new E.Press({ time: T }),
              v = new E.Tap({
                event: "doubletap",
                taps: 2,
                threshold: 5,
                posThreshold: 100,
                interval: _,
              });
            v.recognizeWith(f),
              f.requireFailure(v),
              l.add(f),
              l.add(v),
              l.set({ touchAction: "none" }),
              l.on("press", function (e) {
                n({
                  target: e.target,
                  clientX: e.center.x,
                  clientY: e.center.y,
                }),
                  (S = !0);
              }),
              l.on("pressup", function () {
                setTimeout(function () {
                  S = !1;
                }, 250);
              }),
              l.on("doubletap", function (e) {
                r({
                  target: e.target,
                  clientX: e.center.x,
                  clientY: e.center.y,
                });
              });
          }
        }
      }
      function c() {
        function e(e) {
          t(e.translationX, e.translationY, e.scale, e.rotation, e.detail);
        }
        function t(e, t, n, r, i) {
          d.ccall(
            "tiramisu_microsoftGesture",
            "null",
            ["number", "number", "number", "number", "number"],
            arguments
          );
        }
        function n(e, t, n) {
          return d.ccall(
            "tiramisu_microsoftPointerUp",
            "number",
            ["number"],
            arguments
          );
        }
        function r(e, t, n) {
          return d.ccall(
            "tiramisu_microsoftPointerDown",
            "number",
            ["number", "number", "number"],
            arguments
          );
        }
        if ("function" != typeof window.MSGesture) return !1;
        console.log("Adapting to survive in Microsoft's neighbourhood.");
        var i = d.canvas,
          o = new MSGesture();
        return (
          (o.target = i),
          i.addEventListener(
            "MSHoldVisual",
            function (e) {
              e.preventDefault();
            },
            !1
          ),
          i.addEventListener("MSGestureStart", e, !1),
          i.addEventListener("MSGestureEnd", e, !1),
          i.addEventListener("MSGestureChange", e, !1),
          i.addEventListener("MSInertiaStart", e, !1),
          i.addEventListener("MSGestureTap", e, !1),
          i.addEventListener("MSGestureHold", e, !1),
          i.addEventListener(
            "pointerdown",
            function (e) {
              if ("mouse" == e.pointerType)
                return void i.setPointerCapture(e.pointerId);
              r(e.pointerId, e.offsetX, e.offsetY) &&
                (i.setPointerCapture(e.pointerId),
                o.target || (o.target = i),
                o.addPointer(e.pointerId));
            },
            !1
          ),
          i.addEventListener(
            "pointerup",
            function (e) {
              "mouse" != e.pointerType &&
                (e.stopPropagation(), n(e.pointerId, e.offsetX, e.offsetY));
            },
            !1
          ),
          window.addEventListener(
            "pointerup",
            function (e) {
              if ("mouse" != e.pointerType) {
                var t = i.getBoundingClientRect(),
                  r = t.left + window.pageXOffset - document.body.clientLeft,
                  o = t.top + window.pageYOffset - document.body.clientTop;
                n(e.pointerId, e.pageX - r, e.pageY - o);
              }
            },
            !1
          ),
          !0
        );
      }
      var l,
        p = n(3),
        d = n(1).Module,
        f = n(1).Tiramisu,
        h = n(0).app,
        m = n(0).checkConfigureOptions,
        v = n(2),
        g = v.expand,
        b = (n(9), n(7).getBaseURL),
        y = "ontouchstart" in window,
        w =
          y &&
          /mobile|tablet|ip(ad|hone|od)|android/i.test(navigator.userAgent),
        E = n(12),
        T = 750,
        _ = 250,
        S = !1,
        O = !1,
        I = !1,
        x = {};
      g(f, {
        didFinishLoadDocument: function (e) {
          (l = e),
            u(),
            (e.baseURL = ""),
            e.bundleURL ||
              (e.baseURL = b(e.companionFile || n(0).getDocumentURL())),
            i(e)
              .then(function () {
                e.type;
                (O = !0),
                  p.dispatch("app.didFinishLoadDocument", e),
                  p.dispatch("app.didAttachDocument", e),
                  I &&
                    (r(),
                    setTimeout(function () {
                      p.dispatch("app.firstFrameDidArrive");
                    }, 0));
              })
              .catch(function (e) {
                p.dispatch("app.didFailLoadDocument", e), console.error(e);
              });
        },
        firstFrameDidArrive: function (e) {
          (I = !0), O && (r(), p.dispatch("app.firstFrameDidArrive", e));
        },
        didFailLoadDocument: function (e) {
          p.dispatch("app.didFailLoadDocument", e);
        },
        didClickHyperlink: function (e) {
          p.dispatch("app.didClickHyperlink", e);
        },
        willStartNavigateInScene: function () {
          p.dispatch("app.willStartNavigateInScene");
        },
      }),
        g(f, {
          util: {
            wrapStringArray: function (e, t) {
              for (var n = new Array(t), r = 0; r < t; ++r)
                n[r] = d.Pointer_stringify(d.getValue(e + 4 * r, "i32"));
              return n;
            },
            wrapSheetArray: function (e, t) {
              if (!t) return [];
              for (var n = new Array(t), r = 0; r < t; ++r, e += 12)
                n[r] = {
                  id: d.Pointer_stringify(d.getValue(e, "i32")),
                  description: d.Pointer_stringify(d.getValue(e + 4, "i32")),
                  indentationLevel: d.getValue(e + 8, "i32"),
                };
              return n;
            },
            unmarshalObjectArray: function (e) {
              if (!e) return [];
              var t,
                n,
                r = [];
              for (t = 0; (n = d.getValue(e + 4 * t, "i32")); ++t) r[t] = n;
              return r;
            },
          },
        });
      var P,
        C = {
          version: function () {
            var e = f.VERSION >> 24,
              t = (f.VERSION >> 16) & 255,
              n = 65535 & f.VERSION;
            new Date(1e3 * f.BUILD_TIME);
            return "1.5.6 (core: " + [e, t, n].join(".") + ")";
          },
          resize: function (e, t) {
            d.ccall("tiramisu_resize", "null", ["number", "number"], arguments);
          },
          getObjectName: function (e) {
            return d.ccall(
              "tiramisu_getObjectName",
              "string",
              ["number"],
              arguments
            );
          },
          getObjectTypeName: function (e) {
            return d.ccall(
              "tiramisu_getObjectTypeName",
              "string",
              ["number"],
              arguments
            );
          },
          getObjectWithName: function (e) {
            return d.ccall(
              "tiramisu_getObjectWithName",
              "number",
              ["string"],
              arguments
            );
          },
          isObjectIgnorableByPicker: function (e) {
            return (
              0 !==
              d.ccall(
                "tiramisu_isObjectIgnorableByPicker",
                "number",
                ["number"],
                arguments
              )
            );
          },
          setObjectIgnorableByPicker: function (e, t) {
            d.ccall(
              "tiramisu_setObjectIgnorableByPicker",
              "null",
              ["number", "number"],
              arguments
            );
          },
          pickObject: function (e, t, n) {
            var r = void 0 === n ? 0 : n ? 2 : 1;
            return (
              (node = d.ccall(
                "tiramisu_pickObject",
                "number",
                ["number", "number", "number"],
                [e, t, r]
              )),
              node
                ? {
                    handle: node,
                    name: d.ccall(
                      "tiramisu_getObjectName",
                      "string",
                      ["number"],
                      [node]
                    ),
                  }
                : null
            );
          },
          pickObjectChain: function (e, t) {
            function n(e) {
              return [
                d.getValue(e, "float"),
                d.getValue(e + 4, "float"),
                d.getValue(e + 8, "float"),
              ];
            }
            var r = d._tiramisu_pickObjectChain(e, t),
              i = null;
            return (
              r &&
                ((i = {
                  coord: n(r),
                  normal: n(r + 12),
                  sceneCoord: n(r + 24),
                  sceneNormal: n(r + 36),
                  chain: f.util.unmarshalObjectArray(r + 48),
                }),
                d._free(r)),
              i
            );
          },
          getPickerTransparencyThreshold: function () {
            return d.ccall("tiramisu_getPickerTransparencyThreshold", "number");
          },
          setPickerTransparencyThreshold: function (e) {
            return d.ccall(
              "tiramisu_setPickerTransparencyThreshold",
              "null",
              ["number"],
              arguments
            );
          },
          addSelectedObjects: function (e, t) {
            s("tiramisu_addSelectedObjects", e, t);
          },
          setSelectedObjects: function (e, t) {
            s("tiramisu_setSelectedObjects", e, t);
          },
          getSelectedObjects: function () {
            var e = d.ccall("tiramisu_getSelectedObjects", "number"),
              t = f.util.unmarshalObjectArray(e);
            return d._free(e), t;
          },
          setDefaultBackgroundColors: function (e) {
            var t,
              n = 0,
              r = 0,
              i = d.Runtime.stackSave();
            if (e)
              for (
                "string" == typeof e && (e = [e]),
                  n = e.length,
                  r = d.allocate(4 * n, "i32", d.ALLOC_STACK),
                  t = 0;
                t < n;
                ++t
              )
                d.setValue(r + 4 * t, o(e[t]), "i32");
            d.ccall(
              "tiramisu_setDefaultBackgroundColors",
              "null",
              ["number", "number"],
              [r, n]
            ),
              d.Runtime.stackRestore(i);
          },
          setMouseDragMode: function (e) {
            d.ccall("tiramisu_setMouseDragMode", "null", ["number"], arguments);
          },
          setObjectPropertyf: function (e, t, n, r, i, o, a) {
            if (t === h.PROPERTY_VISIBILITY && "generic" === l.type) {
              var s = 0 !== d._tiramisu_isObjectVisibile(e),
                u = !!r;
              return (
                e in x || (x[e] = s),
                s !== u && (d._tiramisu_setObjectVisibility(e, u), !0)
              );
            }
            return (
              0 !==
              d.ccall(
                "tiramisu_setObjectPropertyf",
                "number",
                [
                  "number",
                  "number",
                  "number",
                  "number",
                  "number",
                  "number",
                  "number",
                ],
                arguments
              )
            );
          },
          restoreObjectProperty: function (e, t, n) {
            if (t === h.PROPERTY_VISIBILITY && "generic" === l.type) {
              if (e) {
                if (e in x) {
                  var r = 0 !== d._tiramisu_isObjectVisibile(e),
                    i = x[e];
                  if ((delete x[e], r !== i))
                    return d._tiramisu_setObjectVisibility(e, i), !0;
                }
                return !1;
              }
              for (var o in x) d._tiramisu_setObjectVisibility(o, x[o]);
              x = {};
            }
            return (
              0 !==
              d.ccall(
                "tiramisu_restoreObjectProperty",
                "number",
                ["number", "number", "number"],
                [e || 0, t, n]
              )
            );
          },
          getObjectsWithDirtyProperty: function (e) {
            if (e === h.PROPERTY_VISIBILITY && "generic" === l.type) {
              var t = [];
              for (var n in x) t.push(n);
              return t;
            }
            var r = d.ccall(
                "tiramisu_getObjectsWithDirtyProperty",
                "number",
                ["number"],
                arguments
              ),
              i = f.util.unmarshalObjectArray(r);
            return d._free(r), i;
          },
          isRotationCenterVisible: function () {
            return 0 !== d.ccall("tiramisu_isRotationCenterVisible", "number");
          },
          setRotationCenterVisibility: function (e) {
            d.ccall(
              "tiramisu_setRotationCenterVisibility",
              "null",
              ["number"],
              arguments
            );
          },
          setDefaultView: function (e) {
            d.ccall("tiramisu_setDefaultView", "null", ["number"], arguments);
          },
          jumpToStandardView: function (e, t, n) {
            d.ccall(
              "tiramisu_jumpToStandardView",
              "null",
              ["string", "number", "number"],
              [e, t, n || 0]
            );
          },
          fitSceneInView: function (e, t) {
            d.ccall(
              "tiramisu_fitObjectsInView",
              "null",
              ["number", "number", "number", "number"],
              [0, -1, e, t || 0]
            );
          },
          fitSelectedObjectsInView: function (e, t) {
            d.ccall(
              "tiramisu_fitObjectsInView",
              "null",
              ["number", "number", "number", "number"],
              [0, -2, e, t || 0]
            );
          },
          fitObjectsInView: function (e, t, n) {
            s("tiramisu_fitObjectsInView", e, t, n);
          },
          setRotationCenterToScene: function () {
            d.ccall(
              "tiramisu_setRotationCenterToObjects",
              "null",
              ["number", "number", "number"],
              [0, -1, 0]
            );
          },
          setRotationCenterToSelectedObjects: function () {
            d.ccall(
              "tiramisu_setRotationCenterToObjects",
              "null",
              ["number", "number", "number"],
              [0, -2, 0]
            );
          },
          setRotationCenterToObjects: function (e, t) {
            s("tiramisu_setRotationCenterToObjects", e, t),
              t &&
                d.ccall(
                  "tiramisu_centerRotationCenterInView",
                  "null",
                  ["number"],
                  [t]
                );
          },
          centerRotationCenterInView: function (e) {
            d.ccall(
              "tiramisu_centerRotationCenterInView",
              "null",
              ["number"],
              arguments
            );
          },
          resetRotationCenter: function () {
            d.ccall("tiramisu_resetRotationCenter", "null");
          },
          getDocumentInfo: function () {
            return l && g({}, l);
          },
          getOptions: function () {
            var e,
              t,
              n = d.ccall("tiramisu_getOptions", "number"),
              r = 0;
            if (n) {
              for (e = {}, r = 0; (t = d.getValue(n + r, "i32")); r += 8)
                e[d.Pointer_stringify(t)] = d.Pointer_stringify(
                  d.getValue(n + r + 4, "i32")
                );
              return d._free(n), e;
            }
          },
          getOption: function (e) {
            var t = d.ccall("tiramisu_getOption", "number", ["string"], [e]);
            if (t) return d.Pointer_stringify(t);
          },
          setObjectName: function (e, t) {
            d.ccall(
              "tiramisu_setObjectName",
              "null",
              ["number", "string"],
              arguments
            );
          },
          getHoverColor: function () {
            return a(d._tiramisu_getHoverColor());
          },
          setHoverColor: function (e) {
            return d._tiramisu_setHoverColor(o(e));
          },
          getSelectionColor: function () {
            return a(d._tiramisu_getSelectionColor());
          },
          setSelectionColor: function (e) {
            return d._tiramisu_setSelectionColor(o(e));
          },
          getViewpoints: function () {
            var e,
              t,
              n = d._tiramisu_getViewpoints(),
              r = [];
            if (n) {
              for (t = 0; (e = d.getValue(n + t, "i32")); t += 12)
                r.push({
                  handle: e,
                  name: d.Pointer_stringify(d.getValue(n + t + 4, "i32")),
                  description: d.Pointer_stringify(
                    d.getValue(n + t + 8, "i32")
                  ),
                });
              d._free(n);
            }
            return r;
          },
          getActiveViewpoint: function () {
            return d._tiramisu_getActiveViewpoint();
          },
          setActiveViewpoint: function (e) {
            d._tiramisu_setActiveViewpoint(e);
          },
          addObjects: function (e, t) {
            (v.isObject(e) && e.forEach) || (e = [e]),
              e.forEach(function (e) {
                d.ccall(
                  "tiramisu_addObject",
                  "null",
                  ["number", "number"],
                  [e, t]
                );
              });
          },
          removeObjects: function (e, t) {
            (v.isObject(e) && e.forEach) || (e = [e]),
              e.forEach(function (e) {
                d.ccall(
                  "tiramisu_removeObject",
                  "null",
                  ["number", "number"],
                  [e, t]
                );
              });
          },
          removeAllObjects: function (e) {
            d.ccall("tiramisu_removeAllObjects", "null", ["number"], arguments);
          },
          getChildObjects: function (e) {
            var t = d._tiramisu_getChildObjects(e),
              n = f.util.unmarshalObjectArray(t);
            return d._free(t), n;
          },
          setChildObjects: function (e, t) {
            var n = 0;
            if (e) {
              "number" == typeof e && (e = [e]),
                (objectArray = d.allocate(4 * e.length, "i32", d.ALLOC_STACK)),
                (n = e.length);
              for (var r = 0; r < n; ++r)
                d.setValue(objectArray + 4 * r, e[r], "i32");
            }
            return 0 !== d._tiramisu_setChildObjects(t, objectArray, n);
          },
          getParentObject: function (e) {
            return d._tiramisu_getParentObject(e);
          },
          getObjectVisibility: function (e, t) {
            return d._tiramisu_getObjectVisibility(e, t);
          },
          getObjectFlags: function (e) {
            return d._tiramisu_getObjectFlags(e);
          },
          createObjectsFromString: function (e, t) {
            var n = d.ccall(
                "tiramisu_createObjects",
                "number",
                ["string", "number", "string"],
                [e, 0, t || null]
              ),
              r = f.util.unmarshalObjectArray(n);
            return (
              n
                ? d._free(n)
                : d.printErr('createObjectsFromString() failed: "' + e + '"'),
              r
            );
          },
          createObjectsFromURL: function (e) {
            return v.loadResource(e, "", "arraybuffer").then(function (t) {
              var n,
                r,
                i,
                o = t.response;
              return o &&
                ((n = new Uint8Array(o)),
                (r = d._malloc(n.byteLength)),
                d.writeArrayToMemory(n, r),
                (i = d.ccall(
                  "tiramisu_createObjects",
                  "number",
                  ["number", "number", "string"],
                  [r, n.byteLength, e]
                )),
                (handles = f.util.unmarshalObjectArray(i)),
                d._free(r),
                i)
                ? (d._free(i), Promise.resolve(handles))
                : Promise.reject(
                    new Error('createObjectsFromURL() failed: "' + e + '"')
                  );
            });
          },
          createObjectsFromDocumentBundle: function (e) {
            var t = d.ccall(
                "tiramisu_createObjectsFromBundleItem",
                "number",
                ["string"],
                [e]
              ),
              n = f.util.unmarshalObjectArray(t);
            return (
              t
                ? d._free(t)
                : d.printErr(
                    'createObjectsFromDocumentBundle() failed: "' + e + '"'
                  ),
              n
            );
          },
          setCameraPosition: function (e, t, n, r, i) {
            var o = d.Runtime.stackSave(),
              a = d.allocate(3, "float", d.ALLOC_STACK),
              s = d.allocate(4, "float", d.ALLOC_STACK),
              u = r ? d.allocate(3, "float", d.ALLOC_STACK) : 0;
            d.setValue(a, e[0], "float"),
              d.setValue(a + 4, e[1], "float"),
              d.setValue(a + 8, e[2], "float"),
              d.setValue(s, t[0], "float"),
              d.setValue(s + 4, t[1], "float"),
              d.setValue(s + 8, t[2], "float"),
              d.setValue(s + 12, t[3], "float"),
              r &&
                (d.setValue(u, r[0], "float"),
                d.setValue(u + 4, r[1], "float"),
                d.setValue(u + 8, r[2], "float")),
              d._tiramisu_setCameraPosition(a, s, n, u, i),
              d.Runtime.stackRestore(o);
          },
        };
      Object.defineProperties(h, {
        ambientOcclusionEnabled: {
          get: function () {
            return !!d._tiramisu_isAmbientOcclusionEnabled();
          },
          set: function (e) {
            d._tiramisu_enableAmbientOcclusion(e);
          },
          enumerable: !0,
        },
        ambientOcclusionSupported: {
          get: function () {
            return !!d._tiramisu_isAmbientOcclusionSupported();
          },
          enumerable: !0,
        },
        hoverColor: {
          get: function () {
            return a(d._tiramisu_getHoverColor());
          },
          set: function (e) {
            d._tiramisu_setHoverColor(o(e));
          },
          enumerable: !0,
        },
        selectionColor: {
          get: function () {
            return a(d._tiramisu_getSelectionColor());
          },
          set: function (e) {
            d._tiramisu_setSelectionColor(o(e));
          },
          enumerable: !0,
        },
        pickerTransparencyThreshold: {
          get: function () {
            return d.ccall("tiramisu_getPickerTransparencyThreshold", "number");
          },
          set: function (e) {
            d.ccall(
              "tiramisu_setPickerTransparencyThreshold",
              "null",
              ["number"],
              arguments
            );
          },
          enumerable: !0,
        },
        modelInfo: {
          get: function () {
            return l && g({}, l);
          },
          enumerable: !0,
        },
        activeViewpoint: {
          get: function () {
            return d._tiramisu_getActiveViewpoint();
          },
          set: function (e) {
            d._tiramisu_setActiveViewpoint(e);
          },
          enumerable: !0,
        },
      }),
        Object.defineProperty(h, "MOUSE_DRAG_MODE_SPIN", {
          value: 0,
          writable: !1,
        }),
        Object.defineProperty(h, "MOUSE_DRAG_MODE_PAN", {
          value: 1,
          writable: !1,
        }),
        Object.defineProperty(h, "MOUSE_DRAG_MODE_ZOOM", {
          value: 2,
          writable: !1,
        }),
        Object.defineProperty(h, "MOUSE_DRAG_MODE_DEFAULT", {
          value: 0,
          writable: !1,
        }),
        Object.defineProperty(h, "PROPERTY_DIFFUSE_COLOR", {
          value: 0,
          writable: !1,
        }),
        Object.defineProperty(h, "PROPERTY_EMISSIVE_COLOR", {
          value: 1,
          writable: !1,
        }),
        Object.defineProperty(h, "PROPERTY_TRANSPARENCY", {
          value: 2,
          writable: !1,
        }),
        Object.defineProperty(h, "PROPERTY_VISIBILITY", {
          value: 3,
          writable: !1,
        }),
        Object.defineProperty(h, "PROPERTY_TRANSLATION", {
          value: 4,
          writable: !1,
        }),
        Object.defineProperty(h, "PROPERTY_ROTATION", {
          value: 5,
          writable: !1,
        }),
        Object.defineProperty(h, "PROPERTY_SCALE", { value: 6, writable: !1 }),
        Object.defineProperty(h, "MR_PARTNUMBER", { value: 1, writable: !1 }),
        Object.defineProperty(h, "MR_PARTDESC", { value: 2, writable: !1 }),
        Object.defineProperty(h, "MR_ITEM", { value: 3, writable: !1 }),
        Object.defineProperty(h, "MR_ITEMVAR", { value: 4, writable: !1 }),
        Object.defineProperty(h, "MR_INDENT", { value: 5, writable: !1 }),
        Object.defineProperty(h, "MR_UPA", { value: 6, writable: !1 }),
        Object.defineProperty(h, "MR_TOTALQTY", { value: 7, writable: !1 }),
        Object.defineProperty(h, "OBJECT_VISIBILITY_VISIBLE", {
          value: 0,
          writable: !1,
        }),
        Object.defineProperty(h, "OBJECT_VISIBILITY_HIDDEN", {
          value: 1,
          writable: !1,
        }),
        Object.defineProperty(h, "OBJECT_VISIBILITY_TRANSPARENT", {
          value: 2,
          writable: !1,
        }),
        Object.defineProperty(h, "OBJECT_VISIBILITY_IMPLICITLY_HIDDEN", {
          value: 3,
          writable: !1,
        }),
        (e.exports = { app: C });
    },
    function (e, t, n) {
      function r(e) {
        var t,
          n = o.getValue(e, "i32"),
          r = new Array(n);
        for (t = 1; t <= n; ++t) r[t - 1] = o.getValue(e + 4 * t, "i32");
        return r;
      }
      var i = n(3),
        o = n(1).Module,
        a = n(1).Tiramisu,
        s = n(0).app,
        u = n(2).expand,
        c = n(0).checkConfigureOptions,
        l = n(0).usedModules,
        p = {},
        d = [];
      i.once("app.didAttachDocument", function (e) {
        "ipc" == e.type &&
          ((d = e.sheets),
          (p = u({}, e.sheet)),
          delete p.drawing,
          i.once("app.firstFrameDidArrive", function () {
            a.ipc.didSelectSheet(p);
          }),
          l.core.config.ipcHoverColor &&
            s.setHoverColor(l.core.config.ipcHoverColor),
          l.core.config.ipcSelectionColor &&
            s.setSelectionColor(l.core.config.ipcSelectionColor));
      }),
        u(a, {
          ipc: {
            didSelectSheet: function (e) {
              s.ipc.interactivity &&
                (e.drawing = s.ipc.interactivity.getDrawingForIPCView(e.id)),
                s.drawing &&
                  s.drawing.load(e.drawing).catch(function () {
                    c(s.ENABLE_AUTO_SWITCHING_DISPLAY_MODE) &&
                      s.ui.isDrawingDisplayMode() &&
                      s.ipc.toggleDrawingDisplayMode();
                  }),
                (p = e),
                i.dispatch("app.ipc.didSelectSheet", e);
            },
            didHoverItem: function (e, t) {
              i.dispatch("app.ipc.didHoverItem", e, r(t));
            },
            didSelectItem: function (e, t) {
              i.dispatch("app.ipc.didSelectItem", e, r(t));
            },
            didChangeItemVisibility: function (e, t, n) {
              var r,
                a = new Array(n);
              for (r = 0; r < n; ++r) a[r] = o.getValue(t + 4 * r, "i32");
              i.dispatch("app.ipc.didChangeItemVisibility", e, a);
            },
          },
        });
      var f = {
        ipc: {
          setCurrentSheet: function (e, t) {
            o.ccall(
              "ipc_setCurrentSheet",
              "null",
              ["string", "number"],
              [e, !s.ui.isDrawingDisplayMode() && t]
            );
          },
          toggleItemVisibility: function (e) {
            o.ccall("ipc_toggleItemVisibility", "null", ["number"], arguments);
          },
          selectItem: function (e, t) {
            return r(
              o.ccall(
                "ipc_selectItem",
                "number",
                ["number"],
                [e, void 0 === t || t]
              )
            );
          },
          hoverItem: function (e, t) {
            return r(
              o.ccall(
                "ipc_hoverItem",
                "null",
                ["number"],
                [e, void 0 === t || t]
              )
            );
          },
          resetCurrentSheet: function (e) {
            s.drawing && n(8).getSVGViewer().reset(e),
              o.ccall("ipc_resetCurrentSheet", "null", ["number"], arguments);
          },
          getItemWithHotspot: function (e) {
            return o.ccall(
              "ipc_getItemWithHotspot",
              "number",
              ["string"],
              arguments
            );
          },
          getCurrentSheet: function () {
            return p;
          },
          toggleDrawingDisplayMode: function (e) {
            return (
              !!s.drawing &&
              ((e = void 0 === e ? !s.drawing.isVisible() : e),
              s.drawing.show(e),
              s.ui.showCanvas(!e),
              i.dispatch("app.ipc.didDrawingDisplayMode", e),
              e)
            );
          },
        },
      };
      Object.defineProperty(f.ipc, "currentSheetInfo", {
        get: function () {
          return p;
        },
        enumerable: !0,
      }),
        (f.ipc.dpl = n(44)),
        (e.exports = { app: f });
    },
    function (e, t, n) {
      var r = n(3),
        i = n(1).Module,
        o = n(1).Tiramisu,
        a = n(0).app;
      (0, n(2).expand)(o, {
        procedure: {
          didFireEvent: function (e, t, n, i) {
            r.dispatch("app.procedure.didFireEvent", e, t, n, i);
          },
          didChangePlayerState: function (e, t) {
            r.dispatch("app.procedure.didChangePlayerState", e, t);
          },
          didEnterSubstep: function (e) {
            r.dispatch("app.procedure.didEnterSubstep", e);
          },
          didEnterSubstepWithName: function (e) {
            r.dispatch("app.procedure.didEnterSubstepWithName", e);
          },
        },
      });
      var s = {
        procedure: {
          seekToSubstep: function (e, t) {
            i.ccall(
              "procedure_seekToSubstep",
              "null",
              ["string", "number"],
              [e, "number" == typeof t ? t : -1]
            );
          },
          setPlaybackSpeed: function (e) {
            i.ccall(
              "procedure_setPlaybackSpeed",
              "null",
              ["number"],
              arguments
            );
          },
          freezeCamera: function (e) {
            i.ccall("procedure_freezeCamera", "null", ["number"], arguments);
          },
          setPlayPosition: function (e, t) {
            i.ccall(
              "procedure_setPlayPosition",
              "null",
              ["number", "number"],
              arguments
            );
          },
          backward: function (e) {
            i.ccall(
              "procedure_backward",
              "null",
              ["number"],
              ["number" == typeof e ? e : -1]
            );
          },
          forward: function (e) {
            i.ccall(
              "procedure_forward",
              "null",
              ["number"],
              ["number" == typeof e ? e : -1]
            );
          },
          stop: function () {
            i.ccall("procedure_stop", "null");
          },
          play: function (e) {
            i.ccall("procedure_play", "null", ["number"], arguments);
          },
          pause: function () {
            i.ccall("procedure_pause", "null");
          },
          setPlayRange: function (e, t, n) {
            i.ccall(
              "procedure_setPlayRange",
              "null",
              ["string", "string", "number"],
              [e, t || e, n || 0]
            );
          },
          getPlayableRangeStartTime: function () {
            return i.ccall("procedure_getPlayableRangeStartTime", "number");
          },
          getPlayableRangeStopTime: function () {
            return i.ccall("procedure_getPlayableRangeStopTime", "number");
          },
          requestPlayerState: function () {
            i.ccall("procedure_requestPlayerState", "null");
          },
          getOptions: function () {
            return a.getOptions();
          },
          getOption: function (e) {
            return a.getOption(e);
          },
          setPlayableItemList: function (e) {
            var t,
              n,
              r = e ? e.length : 0,
              o = 0,
              a = i.Runtime.stackSave();
            if (r)
              for (o = i.allocate(4 * r, "*", i.ALLOC_STACK), t = 0; t < r; ++t)
                i.setValue(
                  o + 4 * t,
                  i.allocate(i.intArrayFromString(e[t]), "i8", i.ALLOC_STACK),
                  "*"
                );
            return (
              (n = i._procedure_setPlayableItemList(o, r)),
              i.Runtime.stackRestore(a),
              0 !== n
            );
          },
        },
      };
      Object.defineProperty(s.procedure, "defaultSeekMode", {
        get: function () {
          return i._procedure_getDefaultSeekMode();
        },
        set: function (e) {
          i._procedure_setDefaultSeekMode(e);
        },
        enumerable: !0,
        configurable: !0,
      }),
        Object.defineProperty(s.procedure, "duration", {
          get: function () {
            return i._procedure_getDuration();
          },
          enumerable: !0,
          configurable: !0,
        }),
        Object.defineProperty(s.procedure, "RANGE_FLAGS_SEEK_TO_START", {
          value: 1,
          writable: !1,
        }),
        Object.defineProperty(s.procedure, "RANGE_FLAGS_SEEK_TO_END", {
          value: 2,
          writable: !1,
        }),
        Object.defineProperty(s.procedure, "RANGE_FLAGS_REQUEST_NOTIFICATION", {
          value: 4,
          writable: !1,
        }),
        Object.defineProperty(
          s.procedure,
          "RANGE_FLAGS_DO_NOT_RECALCULATE_POSITION",
          { value: 8, writable: !1 }
        ),
        Object.defineProperty(s.procedure, "SEEK_DEFAULT", {
          value: -1,
          writable: !1,
        }),
        Object.defineProperty(s.procedure, "SEEK_TO_BEGIN", {
          value: 0,
          writable: !1,
        }),
        Object.defineProperty(s.procedure, "SEEK_TO_CUE_POINT", {
          value: 1,
          writable: !1,
        }),
        Object.defineProperty(s.procedure, "SEEK_TO_END", {
          value: 2,
          writable: !1,
        }),
        Object.defineProperty(s.procedure, "RANGE_VALUE_CURRENT_STEP", {
          value: "%%CURRENT_STEP%%",
          writable: !1,
        }),
        Object.defineProperty(s.procedure, "RANGE_VALUE_CURRENT_SUBSTEP", {
          value: "%%CURRENT_SUBSTEP%%",
          writable: !1,
        }),
        (e.exports = { app: s });
    },
    function (e, t, n) {
      var r = null,
        i = n(1).Module,
        o = n(0).app,
        a = !1,
        s = {
          ui: {
            setBannerImage: function (e) {
              i.PanelService && e && i.PanelService.setBannerImage(e);
            },
            showCanvas: function (e) {
              i.canvas &&
                ((e = void 0 === e || !!e),
                (i.canvas.style.display = e ? "block" : "none"),
                o.ui.showPanels(e),
                (a = e),
                e && Cortona3DSolo.dispatch("core.didChangeLayout"));
            },
            showPanels: function (e) {
              i.PanelService &&
                ((e = void 0 === e || !!e), i.PanelService.showPanels(e));
            },
            isDrawingDisplayMode: function () {
              var e = !1;
              return o.drawing && (e = o.drawing.isVisible() && !a), e;
            },
            isCanvasVisible: function () {
              return a;
            },
            toggleSpeakerIcon: function (e) {
              if (i.PanelService) {
                var t;
                if ((e = void 0 === e ? !r : e)) {
                  if (r) return;
                  (t = document.createElement("div")),
                    (t.className = "tiramisu-speaker"),
                    t.appendChild(document.createElement("div")),
                    t.appendChild(document.createElement("span")),
                    t.appendChild(document.createElement("span")),
                    t.appendChild(document.createElement("span")),
                    i.PanelService.appendChild(t),
                    (r = t),
                    window.setTimeout(function () {
                      t.style.opacity = 1;
                    }, 300);
                } else
                  (t = r),
                    t &&
                      ((t.style.opacity = 0),
                      window.setTimeout(function () {
                        t.parentNode.removeChild(t);
                      }, 300)),
                    (r = null);
              }
            },
          },
        };
      e.exports = { app: s };
    },
    function (e, t, n) {
      function r(e, t, n) {
        function r() {
          n
            ? setTimeout(function () {
                try {
                  s.revokeObjectURL(u);
                } catch (e) {}
              }, n)
            : s.revokeObjectURL(u),
            t.removeEventListener("load", r, !1),
            t.removeEventListener("error", r, !1);
        }
        if (0 !== e) {
          void 0 === n && (n = t ? 0 : -1);
          var o = i.getValue(e, "i32"),
            a = i.HEAPU8.subarray(e + 4, e + o + 4),
            s = window.URL || window.webkitURL || window,
            u = s.createObjectURL(new Blob([a]));
          return (
            i._free(e),
            t || (t = new Image()),
            n >= 0 &&
              (t.addEventListener("load", r, !1),
              t.addEventListener("error", r, !1)),
            (t.src = u),
            t
          );
        }
      }
      var i = n(1).Module,
        o = (n(1).Tiramisu, n(7).getBaseURL()),
        a = {
          util: {
            createResourceURL: function (e) {
              if (i.ccall) {
                var t = i.ccall(
                  "tiramisu_copyResourceFromBundle",
                  "number",
                  ["string"],
                  arguments
                );
                if (0 !== t) {
                  var n = i.getValue(t, "i32"),
                    r = i.HEAPU8.subarray(t + 4, t + n + 4),
                    o = window.URL || window.webkitURL || window,
                    a = /\.svg$/i.test(e) ? { type: "image/svg+xml" } : {},
                    s = o.createObjectURL(new Blob([r], a));
                  return i._free(t), s;
                }
              }
            },
            revokeResourceURL: function (e) {
              if (e && /^blob:/i.test(e)) {
                (window.URL || window.webkitURL || window).revokeObjectURL(e);
              }
            },
            fetchImageFromDocumentBundle: function (e, t) {
              var n, a;
              return (
                "string" == typeof e
                  ? ((n = new Image()), (a = e))
                  : ((n = e),
                    (a = n.getAttribute("src")),
                    0 === a.lastIndexOf(o, 0) && (a = a.slice(o.length))),
                r(
                  i.ccall(
                    "tiramisu_copyResourceFromBundle",
                    "number",
                    ["string"],
                    [unescape(a)]
                  ),
                  n,
                  t
                )
              );
            },
            fetchBannerImage: function () {
              var e,
                t = i.Runtime.stackSave(),
                n = i.allocate(8, "i32", i.ALLOC_STACK),
                o = r(
                  i.ccall("tiramisu_copyBannerImage", "number", ["number"], [n])
                );
              return (
                o &&
                  (e = {
                    image: o,
                    frameCount: i.getValue(n, "i32"),
                    frameDuration: i.getValue(n + 4, "i32") / 1e3,
                  }),
                i.Runtime.stackRestore(t),
                e
              );
            },
            Vec3f: n(14),
            Rotation: n(42),
          },
        };
      e.exports = { app: a };
    },
    function (e, t, n) {
      function r(e) {
        (e = e || {}), (e.features = e.features || 0);
        var t,
          n,
          r = window.URL || window.webkitURL || window,
          o = e.src;
        if (!o)
          if (
            (n = document.querySelector("script[type^='application/solo']"))
          ) {
            if (
              ((e.totalMemory =
                e.totalMemory || +n.getAttribute("data-total-memory") || l),
              (e.features = e.features | +n.getAttribute("data-features")),
              !(o = n.getAttribute("src")))
            )
              return s(n.textContent, "application/zip").then(function (t) {
                return (
                  (e.src = r.createObjectURL(t)), n.parentNode.removeChild(n), e
                );
              });
            (e.src = o), n.parentNode.removeChild(n);
          } else
            (n = document.querySelector("script[type='model/vrml']")) &&
              ((o = n.getAttribute("src")),
              o
                ? (e.src = o)
                : ((t = n.textContent),
                  (e.isRAContent = /PROTO\s+ObjectVM/.test(t)),
                  (e.isVPInScene = /Viewpoint\s*{/.test(t)),
                  (e.src = r.createObjectURL(
                    new Blob([t], { type: "model/vrml" })
                  ))),
              (e.totalMemory =
                e.totalMemory || +n.getAttribute("data-total-memory") || l),
              (e.features = e.features | +n.getAttribute("data-features")),
              e.isRAContent ||
                (e.features |= i.app.DISABLE_DISCARDABLE_GEOMETRY_DATA),
              n.parentNode.removeChild(n));
        return Promise.resolve(e);
      }
      var i = n(3),
        o = n(0).app,
        a = n(2).expand,
        s = i.app.util.b64toBlob;
      n(39), n(38);
      var u = !1;
      i.core = a(i.core || {}, i.config || {});
      var c = (i.core = a(
        {
          printErr: function (e) {
            (e = Array.prototype.slice.call(arguments).join(" ")),
              console.error(e),
              (i.core.lastErrorText = e);
          },
          print: function () {},
          setStatus: function (e) {},
          didChangeLayout: function () {
            if (u) {
              var e = i.core.canvas,
                t = e.clientWidth,
                n = e.clientHeight;
              i.app.resize(t, n);
            }
          },
        },
        i.core
      ));
      a(i.core, {
        onprogress: function (e) {
          var t =
              e.lengthComputable || void 0 === e.lengthComputable ? e.total : 0,
            n = e.loaded;
          i.dispatch("app.onProgress", n, t);
        },
        isRuntimeReady: function () {
          return u;
        },
        onRuntimeInitialized: function () {
          setTimeout(function () {
            var e = n(1).Tiramisu,
              t = e.VERSION >> 24,
              r = (e.VERSION >> 16) & 255,
              i = 65535 & e.VERSION,
              o = new Date(1e3 * e.BUILD_TIME);
            console.log(
              "Cortona3D Solo core v" +
                t +
                "." +
                r +
                " (" +
                i +
                "), " +
                o.toString()
            );
          }, 10),
            (u = !0),
            "function" == typeof c.didChangeLayout &&
              (window.addEventListener(
                "resize",
                function () {
                  i.dispatch("core.didChangeLayout");
                },
                !1
              ),
              c.didChangeLayout(),
              i.dispatch("core.didChangeLayout")),
            o.ui && o.ui.showCanvas(!1),
            i.emit("core.onRuntimeInitialized"),
            i.dispatch("app.onReady");
        },
      });
      var l = 64;
      e.exports = {
        configure: function (e) {
          e = e || {};
          var t,
            s = {};
          i.baseURL &&
            ((s.memoryInitializerPrefixURL = i.baseURL),
            (s.filePackagePrefixURL = i.baseURL)),
            (t =
              e.element ||
              e.canvas ||
              (function () {
                var e = document.createElement("canvas");
                return (
                  n(13),
                  document.body.insertBefore(e, document.body.firstChild),
                  e
                );
              })()),
            t.classList.add("cortona3dsolo-canvas");
          var c = n(1),
            l = c.Module,
            p = c.Arguments;
          return (
            Object.defineProperty(l, "canvas", { value: t, enumerable: !0 }),
            Object.defineProperty(l, "runtimeReady", {
              get: function () {
                return u;
              },
              enumerable: !0,
            }),
            r(e).then(function (e) {
              e.prefixURL &&
                ((s.memoryInitializerPrefixURL = e.prefixURL),
                (s.filePackagePrefixURL = e.prefixURL)),
                "number" == typeof e.totalMemory &&
                  (s.TOTAL_MEMORY = 1024 * e.totalMemory * 1024),
                e.features && o.configureInstance(e.features),
                a(i.core, s),
                e.src && (p.document = e.src),
                e.features && (p.features = 32767 & e.features),
                p.toModule(),
                c.load();
            }),
            l
          );
        },
      };
    },
    function (e, t, n) {
      function r(e, t) {
        return t.split(".").reduce(function (e, t) {
          return e && e[t];
        }, e);
      }
      function i() {
        var e = {};
        return (
          (e.promise = new Promise(function (t, n) {
            (e.resolve = t), (e.reject = n);
          })),
          e
        );
      }
      function o(e, t) {
        function n() {
          f = null;
        }
        d = d
          .then(function () {
            return (f = e), t();
          })
          .then(n, n);
      }
      function a(e, t) {
        for (
          var n, r = e, i = /^\.+\//, o = t.slice(0, t.length - 1);
          o.length && i.test(r);

        )
          (n = o.pop()),
            (n = n.substr(n.indexOf("!") + 1)),
            (r = n.substr(0, n.lastIndexOf("/") + 1) + r);
        return r;
      }
      function s(e, t) {
        function n(t, n) {
          if (E.shim[t]) return u(t, n);
          var r = i();
          return (
            (r.name = t),
            (r.path = n),
            (r.context = e),
            o(r, function () {
              return d(a(t, n)).catch(function () {
                r.reject(new Error('Error while loading module "' + t + '"'));
              });
            }),
            r.promise
          );
        }
        function u(e, t) {
          var n = E.shim[e];
          return v(
            n.deps || [],
            function () {
              return d(a(e, t)).then(
                n.exportsFn ||
                  function () {
                    return (n.init && n.init()) || r(window, n.exports);
                  }
              );
            },
            null,
            t
          );
        }
        function d(e) {
          return new Promise(function (t, n) {
            var r = g.load(null, e, b(e, !0));
            (r.onerror = n), (r.onload = t);
          });
        }
        function h(e, t) {
          var n = e.indexOf("!"),
            r = e.substr(0, n),
            i = s(null).getContext();
          return (
            (e = e.substr(n + 1)),
            i._require(
              [r],
              function (n) {
                return new Promise(function (r, i) {
                  function o() {
                    if (!s) return g.apply(null, arguments);
                  }
                  Object.keys(g).forEach(function (e) {
                    o[e] = g[e];
                  });
                  var s = !1;
                  (r.error = i),
                    (r.fromText = function (e, n) {
                      n || (n = e);
                      var o = f;
                      (f = { name: e, resolve: r, reject: i, path: t }),
                        new Function(n)(),
                        (f = o),
                        (s = !0);
                    }),
                    n.load(a(e, t), o, r, E);
                });
              },
              null,
              t
            )
          );
        }
        function m(e, t) {
          var n = [];
          return (
            t
              .toString()
              .replace(T, "")
              .replace(_, function (e, t) {
                n.push(t);
              }),
            {
              deps: n,
              factory: function () {
                var r = arguments,
                  i = n.reduce(function (e, t, n) {
                    return (e[t] = r[n]), e;
                  }, {});
                return t(
                  function (e) {
                    if (!i[e])
                      throw new Error(
                        'Module "' + n + '" has not been loaded yet'
                      );
                    return i[e];
                  },
                  S.exports(e),
                  S.module(e)
                );
              },
            }
          );
        }
        function v(e, t, i, o) {
          var a = o.slice(-1)[0];
          return new Promise(function (t, r) {
            Promise.all(
              e.map(function (e) {
                if (o.indexOf(e) > -1)
                  return Promise.reject(
                    new Error(
                      "Circular dependency: " + o.concat(e).join(" -> ")
                    )
                  );
                var t = o.concat(e);
                return S[e]
                  ? S[e](a)
                  : (e.indexOf("!") > -1 && (y[e] = h(e, t)),
                    w[e]
                      ? (y[e] = Promise.resolve().then(function () {
                          return v.apply(null, w[e].concat([t]));
                        }))
                      : y[e] || (y[e] = n(e, t)),
                    y[e]);
              })
            ).then(t, r);
          }).then(
            function (e) {
              if (l(t)) {
                var n = t.apply(null, e);
                return (a && r(y[a], "module.exports")) || n;
              }
              return t;
            },
            function (e) {
              return l(i) && i(e), g.onError(e), Promise.reject(e);
            }
          );
        }
        function g(e, t, n) {
          return v(e, t, n, []);
        }
        function b(e, t) {
          var n = Object.keys(E.bundles).filter(function (t) {
            return E.bundles[t].indexOf(e) > -1;
          })[0];
          return n
            ? g.toUrl(n)
            : (E.paths[e] && (e = E.paths[e]),
              /^([\w\+\.\-]+:)?\//.test(e) || (e = E.baseUrl + e),
              t && (e += ".js"),
              E.urlArgs && (e += "?" + E.urlArgs),
              e);
        }
        if (((t = t || {}), !p[e])) {
          var y,
            w,
            E,
            T = /(\/\*([\s\S]*?)\*\/|([^:]|^)\/\/(.*)$)/gm,
            _ = /[^.]\s*require\s*\(\s*["']([^!'"\s][^'"\s]*)["']\s*\)/g,
            S = {
              require: function (e) {
                return g;
              },
              module: function (e) {
                var t = y[e];
                if (!t)
                  throw new Error(
                    'Module "module" should be required only by modules'
                  );
                return (t.module = t.module || {
                  id: e,
                  config: function () {
                    return E.config[e] || {};
                  },
                });
              },
              exports: function (e) {
                return (S.module(e).exports = {});
              },
            };
          (g.resetContext = function () {
            (E = {
              urlArgs: "",
              baseUrl: "./",
              paths: {},
              shim: {},
              bundles: {},
              config: {},
            }),
              (y = {}),
              (w = {});
          }),
            (g.config = function (e) {
              if (e.context) return s(e.context, e);
              E = c(E, e);
            }),
            (g.load = function (e, t, n) {
              var r = document.createElement("script");
              return (
                (r.src = n),
                (r.async = !0),
                document.getElementsByTagName("body")[0].appendChild(r),
                r
              );
            }),
            (g.toUrl = function (e) {
              return b(e, !1);
            }),
            (g.specified = function (e) {
              return y.hasOwnProperty(e);
            }),
            (g.onError = function (e) {
              console.error(e);
            }),
            g.resetContext(),
            (g.getContext = function () {
              return {
                config: E,
                modules: y,
                predefines: w,
                wrapCommonJS: m,
                _require: v,
              };
            }),
            (p[e] = g);
        }
        var O = c({}, t);
        return delete O.context, p[e].config(O), p[e];
      }
      function u(e, t, n) {
        "string" != typeof e && ((n = t), (t = e), (e = null)),
          Array.isArray(t) || ((n = t), (t = []));
        var r = f,
          i = s(e ? null : r && r.context).getContext();
        if (null === e && !r) throw new Error("Unexpected define!");
        if (0 === t.length && n.length > 0) {
          var o = i.wrapCommonJS(e || r.name, n);
          (t = o.deps), (n = o.factory);
        }
        if (null === e || (r && r.name === e)) {
          var a = i._require(t, n, r.reject, r.path);
          r.resolve(a);
        } else i.predefines[e] = [t, n, null];
      }
      var c = n(41),
        l = n(2).isFunction,
        p = {},
        d = Promise.resolve(),
        f = null;
      u.amd = {};
      var h = s(null);
      e.exports = { define: u, require: h, requirejs: h };
    },
    function (e, t) {
      define("css", function () {
        return {
          load: function (e, t, n, r) {
            var i = document.createElement("link");
            (i.href = t.toUrl(e)),
              (i.rel = "stylesheet"),
              (i.type = "text/css"),
              (i.onload = n),
              (i.onerror = n.error),
              document.getElementsByTagName("head")[0].appendChild(i);
          },
        };
      });
    },
    function (e, t) {
      define("file", function () {
        return {
          load: function (e, t, n, r) {
            n(t.toUrl(e));
          },
        };
      });
    },
    function (e, t) {
      define("json", function () {
        return {
          load: function (e, t, n, r) {
            Cortona3DSolo.app.util
              .loadResource(t.toUrl(e), "application/json", "json")
              .then(function (t) {
                if (null === t.response)
                  throw new Error('Failed parsing JSON file "' + e + '"');
                if ("string" == typeof t.response) {
                  var r = JSON.parse(t.response);
                  if (!r)
                    throw new Error('Failed parsing JSON file "' + e + '"');
                  n(r);
                } else n(t.response);
              })
              .catch(n.error);
          },
        };
      });
    },
    function (e, t) {
      define("res", function () {
        return {
          load: function (e, t, n, r) {
            n(t.toUrl(e));
          },
        };
      });
    },
    function (e, t) {
      define("xml", function () {
        return {
          load: function (e, t, n, r) {
            Cortona3DSolo.app.util
              .loadResource(t.toUrl(e), "text/xml")
              .then(function (e) {
                if (!e.responseXML) throw new Error(url + " empty content");
                n(Cortona3DSolo.app.util.xmlToJSON(e.responseXML));
              })
              .catch(n.error);
          },
        };
      });
    },
    function (e, t, n) {
      function r() {
        if (u.core && u.core.runtimeReady && u.core.canvas) {
          var e = u.core.canvas;
          for (S in _) e.addEventListener(S, _[S], !1);
        } else u.on("app.firstFrameDidArrive", r);
      }
      function i(e, t) {
        var n,
          r = [];
        for (n = u.app.pickObject(e, t, !1); n; )
          r.push(n.handle),
            u.app.setObjectIgnorableByPicker(n.handle, !0),
            (n = u.app.pickObject(e, t, !1));
        return (
          r.forEach(function (e) {
            u.app.setObjectIgnorableByPicker(e, !1);
          }),
          r
        );
      }
      function o(e, t, n) {
        var r,
          i = [],
          o = u.app.pickObject(e, t, !!n);
        if (o) for (r = o.handle; r; r = u.app.getParentObject(r)) i.push(r);
        return { x: e, y: t, picked: o, chain: i };
      }
      n(35);
      var a,
        s,
        u = n(3),
        c = n(2),
        l = { MOUSE_CLICK_THRESHOLD: 3, FEATURE_PICK_TOPMOST: !0 },
        p = {},
        d = [0, 1, 4, 2],
        f = [1, 4, 2, 8, 16],
        h = function (e, t) {
          var n,
            r = +(e.shiftKey && 1) | +(e.ctrlKey && 2) | +(e.altKey && 4);
          n =
            t && void 0 !== e.buttons
              ? e.buttons
              : void 0 !== e.which
              ? d[e.which]
              : f[e.button];
          var i = e.target || e.srcElement,
            o = i.getBoundingClientRect();
          return [e.clientX - o.left, e.clientY - o.top, n, r, e];
        },
        m = function (e, t) {
          var n = e[0] - t[0],
            r = e[1] - t[1];
          return Math.sqrt(n * n + r * r);
        },
        v = function (e, t) {
          return !(!e || !t) && m(e, t) > l.MOUSE_CLICK_THRESHOLD;
        },
        g = null,
        b = null,
        y = null,
        w = null,
        E = navigator.userAgent.lastIndexOf("Firefox") > 0,
        T = function () {
          E &&
            ((w = document.createElement("div")),
            (w.style.position = "absolute"),
            (w.style.top = "0"),
            (w.style.bottom = "0"),
            (w.style.left = "0"),
            (w.style.right = "0"),
            (w.style.zIndex = 1e4),
            (w.onmousemove = function (e) {
              return (
                (e = e || window.event),
                document.body.removeChild(e.target),
                (w = null),
                e.preventDefault(),
                e.stopPropagation(),
                !1
              );
            }),
            setTimeout(function () {
              w && (document.body.removeChild(w), (w = null));
            }, 100),
            document.body.appendChild(w));
        },
        _ = {
          pointermove: function (e) {
            var t = e.target || e.srcElement,
              n = t.getBoundingClientRect(),
              r = e.clientX - n.left,
              i = e.clientY - n.top,
              c = h(e, !0),
              p = g ? g.handle : null;
            if (!y || v(y, c)) {
              if (((y = c), c[2]))
                g &&
                  (T(),
                  u.dispatch("touch.didObjectOut", p, g.name),
                  (g = null));
              else {
                s = o(r, i, l.FEATURE_PICK_TOPMOST);
                var d = s.picked;
                d && u.dispatch("touch.didObjectMove", d.handle, d.name);
                var f = d ? d.handle : null;
                p !== f &&
                  (g && (T(), u.dispatch("touch.didObjectOut", p, g.name)),
                  d && u.dispatch("touch.didObjectEnter", f, d.name)),
                  (g = d);
              }
              (a = ["touch.didPointerMove"].concat(c)), u.dispatch.apply(u, a);
            }
          },
          pointerenter: function (e) {
            w || (u.dispatch("touch.didPointerEnter"), (y = null));
          },
          pointerout: function (e) {
            w ||
              (g &&
                (u.dispatch("touch.didObjectOut", g.handle, g.name),
                (g = null),
                T()),
              u.dispatch("touch.didPointerOut"),
              (y = null));
          },
          pointerdown: function (e) {
            (b = h(e)),
              (a = ["touch.didPointerDown"].concat(b)),
              u.dispatch.apply(u, a);
          },
          pointerup: function (e) {
            var t = e.target || e.srcElement,
              n = t.getBoundingClientRect(),
              r = e.clientX - n.left,
              i = e.clientY - n.top,
              c = h(e);
            s = o(r, i, l.FEATURE_PICK_TOPMOST);
            var d = s.picked;
            v(b, c) ||
              (d || (d = { handle: 0, name: "" }),
              p[d.name]
                ? (clearTimeout(p[d.name]), delete p[d.name])
                : (p[d.name] = setTimeout(function () {
                    delete p[d.name],
                      (a = ["touch.didObjectClick", d.handle, d.name].concat(
                        c
                      )),
                      u.dispatch.apply(u, a);
                  }, 250)));
            var f = g ? g.handle : null,
              m = d ? d.handle : null;
            f !== m &&
              (g && (T(), u.dispatch("touch.didObjectOut", f, g.name)),
              d && u.dispatch("touch.didObjectEnter", m, d.name)),
              (g = d),
              (a = ["touch.didPointerUp"].concat(c)),
              u.dispatch.apply(u, a),
              (b = null);
          },
        };
      if (!1 === navigator.pointerEnabled)
        for (var S in _)
          0 === S.indexOf("pointer") &&
            ((_[S.replace(/^pointer/, "mouse")] = _[S]), delete _[S]);
      r();
      var O = { options: l, pickObjectsRightThrough: i, pickObjectChain: o };
      Object.defineProperty(O, "lastPickInfo", {
        get: function () {
          return s;
        },
        enumerable: !0,
      }),
        (e.exports = {
          configure: function (e) {
            return c.expand(O.options, e), { touch: O };
          },
        });
    },
    function (e, t, n) {
      (t = e.exports = n(4)(!1)),
        t.push([e.i, "body,html{margin:0;height:100%}", ""]);
    },
    function (e, t, n) {
      (t = e.exports = n(4)(!1)),
        t.push([
          e.i,
          ".cortona3dsolo-svg{width:100%;height:100%;display:block;position:absolute}.cortona3dsolo-svg a:hover{cursor:pointer;text-decoration:none}",
          "",
        ]);
    },
    function (e, t, n) {
      (t = e.exports = n(4)(!1)),
        t.push([
          e.i,
          ".cortona3dsolo-canvas{position:absolute;width:100%;height:100%;display:block}.cortona3dsolo-popover{touch-action:none;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.tiramisu-speaker{display:inline-block;box-sizing:content-box;-moz-box-sizing:content-box;-webkit-box-sizing:content-box}.tiramisu-panel{white-space:normal;word-wrap:break-word}.dpl-table{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;width:100%;padding:0;border-spacing:0;border-collapse:collapse;cursor:default;border:1px solid grey}.dpl-table td{padding:4px;vertical-align:top;border-right:1px solid grey}.dpl-table thead{font-size:10pt}.dpl-table tbody{margin:0;padding:0;font-size:10pt}.dpl-table thead td{border-bottom:1px solid grey;background:linear-gradient(180deg,#fff 0,#f8f8f8)}.dpl-table tbody tr.selected{background:linear-gradient(180deg,#abd3ee 0,#89c3eb)}.dpl-table tbody td.hover{background-color:#c8e8ff}.dpl-table tbody tr.hidden{display:none}.dpl-table thead pre{font-family:sans;padding:0;margin:0}.dpl-table td.strut{padding:0 4px}.dpl-table td.strut div{height:1px;overflow:hidden;white-space:nowrap}.dpl-table tr{transition:all .3s}.dpl-table tr.hover,.dpl-table tr:hover{background-color:#c8e8ff}.dpl-table td:last-of-type{border-right:0}.dpl-table tr:last-child td{border-bottom:1px solid grey}.dpl-table pre,pre.dpl-table-measure{margin-top:0;margin-bottom:0}.dpl-checkbox{padding:0;margin:0 .4em 0 0;display:inline}.dpl-checkbox:hover{color:#367ebd}.tiramisu-proc-title{font-weight:700}.tiramisu-proc-item,.tiramisu-proc-title{display:block;padding:4px;margin-bottom:2px;cursor:default}.tiramisu-proc-item{border-radius:10px;border:1px solid transparent;-webkit-transition:background-color .3s ease-out,border-color .3s ease-out}.tiramisu-proc-item.highlighted{background-color:#e5f4ff;border:1px solid #c8e8ff}.tiramisu-proc-item.selected{background-color:#c8e8ff;border:1px solid #80a2bc}.tiramisu-proc-item:hover{background-color:#e5f4ff;border:1px solid #c8e8ff}.tiramisu-proc-item.selected:hover{background-color:#a3daff;border:1px solid #80a2bc}.tiramisu-proc-item-number{display:table-cell;width:24px;padding-right:6pt;cursor:default}.tiramisu-proc-item-content{display:table-cell;width:100%;cursor:default}.thumbnail{max-width:100%;max-height:100%;margin-top:3pt}",
          "",
        ]);
    },
    function (e, t, n) {
      (t = e.exports = n(4)(!1)),
        t.push([
          e.i,
          ".tiramisu-panel-group{position:absolute;left:0;top:0;width:100%;height:100%;overflow:hidden;visibility:hidden}.tiramisu-panel{position:absolute;box-sizing:border-box;overflow:hidden;pointer-events:none;font-family:serif;font-size:10pt;padding:0;margin:0;border-style:solid;transform-style:preserve-3d}.tiramisu-panel>div{position:relative;top:50%;transform:translateY(-50%)}.tiramisu-panel>div>img{height:auto;transform:translateY(-50%)}.tiramisu-panel>div>canvas,.tiramisu-panel>div>img{display:block;max-height:100%;max-width:100%;margin:auto;position:relative;top:50%}.tiramisu-panel>div>canvas{transform:translateY(-50%) scaleY(-1)}.tiramisu-panel p{margin:0;padding:0}.tiramisu-panel-measure{position:absolute;font-family:serif;font-size:10pt;visibility:hidden;padding:0;margin:0;left:0;top:0}.tiramisu-banner{right:8px;overflow:hidden;padding:0;margin:0;z-index:10}.tiramisu-banner,.tiramisu-speaker{position:absolute;bottom:8px;visibility:visible;pointer-events:none}.tiramisu-speaker{display:block-inline;z-index:100;background-color:hsla(0,0%,94%,.5);border-radius:50%;padding:6px;left:8px;width:26px;height:26px;opacity:0;transition:opacity .3s ease-in-out}.tiramisu-speaker div{width:0;height:0;border:6px solid transparent;border-right-color:inherit;border-left:none;box-shadow:inset 10px 0;display:inline-block;padding:5px 3px;margin:2px}.tiramisu-speaker span{position:absolute;display:inline-block;border:1px solid transparent;border-right:1px solid #444;border-radius:50%;margin:auto;top:0;bottom:0;right:0;animation:tiramisu-wave-animation 1s linear 0s infinite alternate}.tiramisu-speaker span:nth-child(2){width:13px;height:13px;left:1px}.tiramisu-speaker span:nth-child(3){width:19px;height:19px;left:1px;animation-delay:.3s}.tiramisu-speaker span:last-child{width:25px;height:25px;left:0;animation-delay:.6s}@keyframes tiramisu-wave-animation{0%{opacity:1}to{opacity:.1}}",
          "",
        ]);
    },
    function (e, t, n) {
      (function (t, n) {
        /*!
         * @overview es6-promise - a tiny implementation of Promises/A+.
         * @copyright Copyright (c) 2014 Yehuda Katz, Tom Dale, Stefan Penner and contributors (Conversion to ES6 API by Jake Archibald)
         * @license   Licensed under MIT license
         *            See https://raw.githubusercontent.com/stefanpenner/es6-promise/master/LICENSE
         * @version   v4.2.4+314e4831
         */
        !(function (t, n) {
          e.exports = n();
        })(0, function () {
          "use strict";
          function e(e) {
            var t = typeof e;
            return null !== e && ("object" === t || "function" === t);
          }
          function r(e) {
            return "function" == typeof e;
          }
          function i(e) {
            F = e;
          }
          function o(e) {
            $ = e;
          }
          function a() {
            return void 0 !== V
              ? function () {
                  V(u);
                }
              : s();
          }
          function s() {
            var e = setTimeout;
            return function () {
              return e(u, 1);
            };
          }
          function u() {
            for (var e = 0; e < B; e += 2) {
              (0, W[e])(W[e + 1]), (W[e] = void 0), (W[e + 1] = void 0);
            }
            B = 0;
          }
          function c(e, t) {
            var n = this,
              r = new this.constructor(p);
            void 0 === r[K] && C(r);
            var i = n._state;
            if (i) {
              var o = arguments[i - 1];
              $(function () {
                return I(i, r, o, n._result);
              });
            } else _(n, r, e, t);
            return r;
          }
          function l(e) {
            var t = this;
            if (e && "object" == typeof e && e.constructor === t) return e;
            var n = new t(p);
            return y(n, e), n;
          }
          function p() {}
          function d() {
            return new TypeError("You cannot resolve a promise with itself");
          }
          function f() {
            return new TypeError(
              "A promises callback cannot return that same promise."
            );
          }
          function h(e) {
            try {
              return e.then;
            } catch (e) {
              return (ee.error = e), ee;
            }
          }
          function m(e, t, n, r) {
            try {
              e.call(t, n, r);
            } catch (e) {
              return e;
            }
          }
          function v(e, t, n) {
            $(function (e) {
              var r = !1,
                i = m(
                  n,
                  t,
                  function (n) {
                    r || ((r = !0), t !== n ? y(e, n) : E(e, n));
                  },
                  function (t) {
                    r || ((r = !0), T(e, t));
                  },
                  "Settle: " + (e._label || " unknown promise")
                );
              !r && i && ((r = !0), T(e, i));
            }, e);
          }
          function g(e, t) {
            t._state === Z
              ? E(e, t._result)
              : t._state === Q
              ? T(e, t._result)
              : _(
                  t,
                  void 0,
                  function (t) {
                    return y(e, t);
                  },
                  function (t) {
                    return T(e, t);
                  }
                );
          }
          function b(e, t, n) {
            t.constructor === e.constructor &&
            n === c &&
            t.constructor.resolve === l
              ? g(e, t)
              : n === ee
              ? (T(e, ee.error), (ee.error = null))
              : void 0 === n
              ? E(e, t)
              : r(n)
              ? v(e, t, n)
              : E(e, t);
          }
          function y(t, n) {
            t === n ? T(t, d()) : e(n) ? b(t, n, h(n)) : E(t, n);
          }
          function w(e) {
            e._onerror && e._onerror(e._result), S(e);
          }
          function E(e, t) {
            e._state === J &&
              ((e._result = t),
              (e._state = Z),
              0 !== e._subscribers.length && $(S, e));
          }
          function T(e, t) {
            e._state === J && ((e._state = Q), (e._result = t), $(w, e));
          }
          function _(e, t, n, r) {
            var i = e._subscribers,
              o = i.length;
            (e._onerror = null),
              (i[o] = t),
              (i[o + Z] = n),
              (i[o + Q] = r),
              0 === o && e._state && $(S, e);
          }
          function S(e) {
            var t = e._subscribers,
              n = e._state;
            if (0 !== t.length) {
              for (
                var r = void 0, i = void 0, o = e._result, a = 0;
                a < t.length;
                a += 3
              )
                (r = t[a]), (i = t[a + n]), r ? I(n, r, i, o) : i(o);
              e._subscribers.length = 0;
            }
          }
          function O(e, t) {
            try {
              return e(t);
            } catch (e) {
              return (ee.error = e), ee;
            }
          }
          function I(e, t, n, i) {
            var o = r(n),
              a = void 0,
              s = void 0,
              u = void 0,
              c = void 0;
            if (o) {
              if (
                ((a = O(n, i)),
                a === ee
                  ? ((c = !0), (s = a.error), (a.error = null))
                  : (u = !0),
                t === a)
              )
                return void T(t, f());
            } else (a = i), (u = !0);
            t._state !== J ||
              (o && u
                ? y(t, a)
                : c
                ? T(t, s)
                : e === Z
                ? E(t, a)
                : e === Q && T(t, a));
          }
          function x(e, t) {
            try {
              t(
                function (t) {
                  y(e, t);
                },
                function (t) {
                  T(e, t);
                }
              );
            } catch (t) {
              T(e, t);
            }
          }
          function P() {
            return te++;
          }
          function C(e) {
            (e[K] = te++),
              (e._state = void 0),
              (e._result = void 0),
              (e._subscribers = []);
          }
          function R() {
            return new Error("Array Methods must be provided an Array");
          }
          function L(e) {
            return new ne(this, e).promise;
          }
          function A(e) {
            var t = this;
            return new t(
              U(e)
                ? function (n, r) {
                    for (var i = e.length, o = 0; o < i; o++)
                      t.resolve(e[o]).then(n, r);
                  }
                : function (e, t) {
                    return t(new TypeError("You must pass an array to race."));
                  }
            );
          }
          function M(e) {
            var t = this,
              n = new t(p);
            return T(n, e), n;
          }
          function j() {
            throw new TypeError(
              "You must pass a resolver function as the first argument to the promise constructor"
            );
          }
          function D() {
            throw new TypeError(
              "Failed to construct 'Promise': Please use the 'new' operator, this object constructor cannot be called as a function."
            );
          }
          function N() {
            var e = void 0;
            if (void 0 !== n) e = n;
            else if ("undefined" != typeof self) e = self;
            else
              try {
                e = Function("return this")();
              } catch (e) {
                throw new Error(
                  "polyfill failed because global object is unavailable in this environment"
                );
              }
            var t = e.Promise;
            if (t) {
              var r = null;
              try {
                r = Object.prototype.toString.call(t.resolve());
              } catch (e) {}
              if ("[object Promise]" === r && !t.cast) return;
            }
            e.Promise = re;
          }
          var k = void 0;
          k = Array.isArray
            ? Array.isArray
            : function (e) {
                return "[object Array]" === Object.prototype.toString.call(e);
              };
          var U = k,
            B = 0,
            V = void 0,
            F = void 0,
            $ = function (e, t) {
              (W[B] = e), (W[B + 1] = t), 2 === (B += 2) && (F ? F(u) : q());
            },
            Y = "undefined" != typeof window ? window : void 0,
            z = Y || {},
            H = z.MutationObserver || z.WebKitMutationObserver,
            G =
              "undefined" == typeof self &&
              void 0 !== t &&
              "[object process]" === {}.toString.call(t),
            X =
              "undefined" != typeof Uint8ClampedArray &&
              "undefined" != typeof importScripts &&
              "undefined" != typeof MessageChannel,
            W = new Array(1e3),
            q = void 0;
          q = G
            ? (function () {
                return function () {
                  return t.nextTick(u);
                };
              })()
            : H
            ? (function () {
                var e = 0,
                  t = new H(u),
                  n = document.createTextNode("");
                return (
                  t.observe(n, { characterData: !0 }),
                  function () {
                    n.data = e = ++e % 2;
                  }
                );
              })()
            : X
            ? (function () {
                var e = new MessageChannel();
                return (
                  (e.port1.onmessage = u),
                  function () {
                    return e.port2.postMessage(0);
                  }
                );
              })()
            : void 0 === Y
            ? (function () {
                try {
                  var e = Function("return this")().require("vertx");
                  return (V = e.runOnLoop || e.runOnContext), a();
                } catch (e) {
                  return s();
                }
              })()
            : s();
          var K = Math.random().toString(36).substring(2),
            J = void 0,
            Z = 1,
            Q = 2,
            ee = { error: null },
            te = 0,
            ne = (function () {
              function e(e, t) {
                (this._instanceConstructor = e),
                  (this.promise = new e(p)),
                  this.promise[K] || C(this.promise),
                  U(t)
                    ? ((this.length = t.length),
                      (this._remaining = t.length),
                      (this._result = new Array(this.length)),
                      0 === this.length
                        ? E(this.promise, this._result)
                        : ((this.length = this.length || 0),
                          this._enumerate(t),
                          0 === this._remaining &&
                            E(this.promise, this._result)))
                    : T(this.promise, R());
              }
              return (
                (e.prototype._enumerate = function (e) {
                  for (var t = 0; this._state === J && t < e.length; t++)
                    this._eachEntry(e[t], t);
                }),
                (e.prototype._eachEntry = function (e, t) {
                  var n = this._instanceConstructor,
                    r = n.resolve;
                  if (r === l) {
                    var i = h(e);
                    if (i === c && e._state !== J)
                      this._settledAt(e._state, t, e._result);
                    else if ("function" != typeof i)
                      this._remaining--, (this._result[t] = e);
                    else if (n === re) {
                      var o = new n(p);
                      b(o, e, i), this._willSettleAt(o, t);
                    } else
                      this._willSettleAt(
                        new n(function (t) {
                          return t(e);
                        }),
                        t
                      );
                  } else this._willSettleAt(r(e), t);
                }),
                (e.prototype._settledAt = function (e, t, n) {
                  var r = this.promise;
                  r._state === J &&
                    (this._remaining--,
                    e === Q ? T(r, n) : (this._result[t] = n)),
                    0 === this._remaining && E(r, this._result);
                }),
                (e.prototype._willSettleAt = function (e, t) {
                  var n = this;
                  _(
                    e,
                    void 0,
                    function (e) {
                      return n._settledAt(Z, t, e);
                    },
                    function (e) {
                      return n._settledAt(Q, t, e);
                    }
                  );
                }),
                e
              );
            })(),
            re = (function () {
              function e(t) {
                (this[K] = P()),
                  (this._result = this._state = void 0),
                  (this._subscribers = []),
                  p !== t &&
                    ("function" != typeof t && j(),
                    this instanceof e ? x(this, t) : D());
              }
              return (
                (e.prototype.catch = function (e) {
                  return this.then(null, e);
                }),
                (e.prototype.finally = function (e) {
                  var t = this,
                    n = t.constructor;
                  return t.then(
                    function (t) {
                      return n.resolve(e()).then(function () {
                        return t;
                      });
                    },
                    function (t) {
                      return n.resolve(e()).then(function () {
                        throw t;
                      });
                    }
                  );
                }),
                e
              );
            })();
          return (
            (re.prototype.then = c),
            (re.all = L),
            (re.race = A),
            (re.resolve = l),
            (re.reject = M),
            (re._setScheduler = i),
            (re._setAsap = o),
            (re._asap = $),
            (re.polyfill = N),
            (re.Promise = re),
            re
          );
        });
      }.call(t, n(36), n(40)));
    },
    function (e, t, n) {
      /*!
       * PEP v0.4.3 | https://github.com/jquery/PEP
       * Copyright jQuery Foundation and other contributors | http://jquery.org/license
       */
      !(function (t, n) {
        e.exports = n();
      })(0, function () {
        "use strict";
        function e(e, t) {
          t = t || Object.create(null);
          var n = document.createEvent("Event");
          n.initEvent(e, t.bubbles || !1, t.cancelable || !1);
          for (var r, i = 2; i < c.length; i++)
            (r = c[i]), (n[r] = t[r] || l[i]);
          n.buttons = t.buttons || 0;
          var o = 0;
          return (
            (o = t.pressure && n.buttons ? t.pressure : n.buttons ? 0.5 : 0),
            (n.x = n.clientX),
            (n.y = n.clientY),
            (n.pointerId = t.pointerId || 0),
            (n.width = t.width || 0),
            (n.height = t.height || 0),
            (n.pressure = o),
            (n.tiltX = t.tiltX || 0),
            (n.tiltY = t.tiltY || 0),
            (n.twist = t.twist || 0),
            (n.tangentialPressure = t.tangentialPressure || 0),
            (n.pointerType = t.pointerType || ""),
            (n.hwTimestamp = t.hwTimestamp || 0),
            (n.isPrimary = t.isPrimary || !1),
            n
          );
        }
        function t() {
          (this.array = []), (this.size = 0);
        }
        function n(e, t, n, r) {
          (this.addCallback = e.bind(r)),
            (this.removeCallback = t.bind(r)),
            (this.changedCallback = n.bind(r)),
            _ && (this.observer = new _(this.mutationWatcher.bind(this)));
        }
        function r(e) {
          return "body /shadow-deep/ " + i(e);
        }
        function i(e) {
          return '[touch-action="' + e + '"]';
        }
        function o(e) {
          return "{ -ms-touch-action: " + e + "; touch-action: " + e + "; }";
        }
        function a(e) {
          if (!g.pointermap.has(e)) {
            var t = new Error("InvalidPointerId");
            throw ((t.name = "InvalidPointerId"), t);
          }
        }
        function s(e) {
          for (var t = e.parentNode; t && t !== e.ownerDocument; )
            t = t.parentNode;
          if (!t) {
            var n = new Error("InvalidStateError");
            throw ((n.name = "InvalidStateError"), n);
          }
        }
        function u(e) {
          return 0 !== g.pointermap.get(e).buttons;
        }
        var c = [
            "bubbles",
            "cancelable",
            "view",
            "detail",
            "screenX",
            "screenY",
            "clientX",
            "clientY",
            "ctrlKey",
            "altKey",
            "shiftKey",
            "metaKey",
            "button",
            "relatedTarget",
            "pageX",
            "pageY",
          ],
          l = [!1, !1, null, null, 0, 0, 0, 0, !1, !1, !1, !1, 0, null, 0, 0],
          p = window.Map && window.Map.prototype.forEach,
          d = p ? Map : t;
        t.prototype = {
          set: function (e, t) {
            if (void 0 === t) return this.delete(e);
            this.has(e) || this.size++, (this.array[e] = t);
          },
          has: function (e) {
            return void 0 !== this.array[e];
          },
          delete: function (e) {
            this.has(e) && (delete this.array[e], this.size--);
          },
          get: function (e) {
            return this.array[e];
          },
          clear: function () {
            (this.array.length = 0), (this.size = 0);
          },
          forEach: function (e, t) {
            return this.array.forEach(function (n, r) {
              e.call(t, n, r, this);
            }, this);
          },
        };
        var f = [
            "bubbles",
            "cancelable",
            "view",
            "detail",
            "screenX",
            "screenY",
            "clientX",
            "clientY",
            "ctrlKey",
            "altKey",
            "shiftKey",
            "metaKey",
            "button",
            "relatedTarget",
            "buttons",
            "pointerId",
            "width",
            "height",
            "pressure",
            "tiltX",
            "tiltY",
            "pointerType",
            "hwTimestamp",
            "isPrimary",
            "type",
            "target",
            "currentTarget",
            "which",
            "pageX",
            "pageY",
            "timeStamp",
          ],
          h = [
            !1,
            !1,
            null,
            null,
            0,
            0,
            0,
            0,
            !1,
            !1,
            !1,
            !1,
            0,
            null,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            "",
            0,
            !1,
            "",
            null,
            null,
            0,
            0,
            0,
            0,
          ],
          m = {
            pointerover: 1,
            pointerout: 1,
            pointerenter: 1,
            pointerleave: 1,
          },
          v = "undefined" != typeof SVGElementInstance,
          g = {
            pointermap: new d(),
            eventMap: Object.create(null),
            captureInfo: Object.create(null),
            eventSources: Object.create(null),
            eventSourceList: [],
            registerSource: function (e, t) {
              var n = t,
                r = n.events;
              r &&
                (r.forEach(function (e) {
                  n[e] && (this.eventMap[e] = n[e].bind(n));
                }, this),
                (this.eventSources[e] = n),
                this.eventSourceList.push(n));
            },
            register: function (e) {
              for (
                var t, n = this.eventSourceList.length, r = 0;
                r < n && (t = this.eventSourceList[r]);
                r++
              )
                t.register.call(t, e);
            },
            unregister: function (e) {
              for (
                var t, n = this.eventSourceList.length, r = 0;
                r < n && (t = this.eventSourceList[r]);
                r++
              )
                t.unregister.call(t, e);
            },
            contains: function (e, t) {
              try {
                return e.contains(t);
              } catch (e) {
                return !1;
              }
            },
            down: function (e) {
              (e.bubbles = !0), this.fireEvent("pointerdown", e);
            },
            move: function (e) {
              (e.bubbles = !0), this.fireEvent("pointermove", e);
            },
            up: function (e) {
              (e.bubbles = !0), this.fireEvent("pointerup", e);
            },
            enter: function (e) {
              (e.bubbles = !1), this.fireEvent("pointerenter", e);
            },
            leave: function (e) {
              (e.bubbles = !1), this.fireEvent("pointerleave", e);
            },
            over: function (e) {
              (e.bubbles = !0), this.fireEvent("pointerover", e);
            },
            out: function (e) {
              (e.bubbles = !0), this.fireEvent("pointerout", e);
            },
            cancel: function (e) {
              (e.bubbles = !0), this.fireEvent("pointercancel", e);
            },
            leaveOut: function (e) {
              this.out(e), this.propagate(e, this.leave, !1);
            },
            enterOver: function (e) {
              this.over(e), this.propagate(e, this.enter, !0);
            },
            eventHandler: function (e) {
              if (!e._handledByPE) {
                var t = e.type,
                  n = this.eventMap && this.eventMap[t];
                n && n(e), (e._handledByPE = !0);
              }
            },
            listen: function (e, t) {
              t.forEach(function (t) {
                this.addEvent(e, t);
              }, this);
            },
            unlisten: function (e, t) {
              t.forEach(function (t) {
                this.removeEvent(e, t);
              }, this);
            },
            addEvent: function (e, t) {
              e.addEventListener(t, this.boundHandler);
            },
            removeEvent: function (e, t) {
              e.removeEventListener(t, this.boundHandler);
            },
            makeEvent: function (t, n) {
              this.captureInfo[n.pointerId] && (n.relatedTarget = null);
              var r = new e(t, n);
              return (
                n.preventDefault && (r.preventDefault = n.preventDefault),
                (r._target = r._target || n.target),
                r
              );
            },
            fireEvent: function (e, t) {
              var n = this.makeEvent(e, t);
              return this.dispatchEvent(n);
            },
            cloneEvent: function (e) {
              for (var t, n = Object.create(null), r = 0; r < f.length; r++)
                (t = f[r]),
                  (n[t] = e[t] || h[r]),
                  !v ||
                    ("target" !== t && "relatedTarget" !== t) ||
                    (n[t] instanceof SVGElementInstance &&
                      (n[t] = n[t].correspondingUseElement));
              return (
                e.preventDefault &&
                  (n.preventDefault = function () {
                    e.preventDefault();
                  }),
                n
              );
            },
            getTarget: function (e) {
              var t = this.captureInfo[e.pointerId];
              return t
                ? e._target !== t && e.type in m
                  ? void 0
                  : t
                : e._target;
            },
            propagate: function (e, t, n) {
              for (
                var r = e.target, i = [];
                r !== document && !r.contains(e.relatedTarget);

              )
                if ((i.push(r), !(r = r.parentNode))) return;
              n && i.reverse(),
                i.forEach(function (n) {
                  (e.target = n), t.call(this, e);
                }, this);
            },
            setCapture: function (t, n, r) {
              this.captureInfo[t] && this.releaseCapture(t, r),
                (this.captureInfo[t] = n),
                (this.implicitRelease = this.releaseCapture.bind(this, t, r)),
                document.addEventListener("pointerup", this.implicitRelease),
                document.addEventListener(
                  "pointercancel",
                  this.implicitRelease
                );
              var i = new e("gotpointercapture");
              (i.pointerId = t),
                (i._target = n),
                r || this.asyncDispatchEvent(i);
            },
            releaseCapture: function (t, n) {
              var r = this.captureInfo[t];
              if (r) {
                (this.captureInfo[t] = void 0),
                  document.removeEventListener(
                    "pointerup",
                    this.implicitRelease
                  ),
                  document.removeEventListener(
                    "pointercancel",
                    this.implicitRelease
                  );
                var i = new e("lostpointercapture");
                (i.pointerId = t),
                  (i._target = r),
                  n || this.asyncDispatchEvent(i);
              }
            },
            dispatchEvent: function (e) {
              var t = this.getTarget(e);
              if (t) return t.dispatchEvent(e);
            },
            asyncDispatchEvent: function (e) {
              requestAnimationFrame(this.dispatchEvent.bind(this, e));
            },
          };
        g.boundHandler = g.eventHandler.bind(g);
        var b = {
            shadow: function (e) {
              if (e) return e.shadowRoot || e.webkitShadowRoot;
            },
            canTarget: function (e) {
              return e && Boolean(e.elementFromPoint);
            },
            targetingShadow: function (e) {
              var t = this.shadow(e);
              if (this.canTarget(t)) return t;
            },
            olderShadow: function (e) {
              var t = e.olderShadowRoot;
              if (!t) {
                var n = e.querySelector("shadow");
                n && (t = n.olderShadowRoot);
              }
              return t;
            },
            allShadows: function (e) {
              for (var t = [], n = this.shadow(e); n; )
                t.push(n), (n = this.olderShadow(n));
              return t;
            },
            searchRoot: function (e, t, n) {
              if (e) {
                var r,
                  i,
                  o = e.elementFromPoint(t, n);
                for (i = this.targetingShadow(o); i; ) {
                  if ((r = i.elementFromPoint(t, n))) {
                    var a = this.targetingShadow(r);
                    return this.searchRoot(a, t, n) || r;
                  }
                  i = this.olderShadow(i);
                }
                return o;
              }
            },
            owner: function (e) {
              for (var t = e; t.parentNode; ) t = t.parentNode;
              return (
                t.nodeType !== Node.DOCUMENT_NODE &&
                  t.nodeType !== Node.DOCUMENT_FRAGMENT_NODE &&
                  (t = document),
                t
              );
            },
            findTarget: function (e) {
              var t = e.clientX,
                n = e.clientY,
                r = this.owner(e.target);
              return (
                r.elementFromPoint(t, n) || (r = document),
                this.searchRoot(r, t, n)
              );
            },
          },
          y = Array.prototype.forEach.call.bind(Array.prototype.forEach),
          w = Array.prototype.map.call.bind(Array.prototype.map),
          E = Array.prototype.slice.call.bind(Array.prototype.slice),
          T = Array.prototype.filter.call.bind(Array.prototype.filter),
          _ = window.MutationObserver || window.WebKitMutationObserver,
          S = {
            subtree: !0,
            childList: !0,
            attributes: !0,
            attributeOldValue: !0,
            attributeFilter: ["touch-action"],
          };
        n.prototype = {
          watchSubtree: function (e) {
            this.observer && b.canTarget(e) && this.observer.observe(e, S);
          },
          enableOnSubtree: function (e) {
            this.watchSubtree(e),
              e === document && "complete" !== document.readyState
                ? this.installOnLoad()
                : this.installNewSubtree(e);
          },
          installNewSubtree: function (e) {
            y(this.findElements(e), this.addElement, this);
          },
          findElements: function (e) {
            return e.querySelectorAll
              ? e.querySelectorAll("[touch-action]")
              : [];
          },
          removeElement: function (e) {
            this.removeCallback(e);
          },
          addElement: function (e) {
            this.addCallback(e);
          },
          elementChanged: function (e, t) {
            this.changedCallback(e, t);
          },
          concatLists: function (e, t) {
            return e.concat(E(t));
          },
          installOnLoad: function () {
            document.addEventListener(
              "readystatechange",
              function () {
                "complete" === document.readyState &&
                  this.installNewSubtree(document);
              }.bind(this)
            );
          },
          isElement: function (e) {
            return e.nodeType === Node.ELEMENT_NODE;
          },
          flattenMutationTree: function (e) {
            var t = w(e, this.findElements, this);
            return t.push(T(e, this.isElement)), t.reduce(this.concatLists, []);
          },
          mutationWatcher: function (e) {
            e.forEach(this.mutationHandler, this);
          },
          mutationHandler: function (e) {
            if ("childList" === e.type) {
              this.flattenMutationTree(e.addedNodes).forEach(
                this.addElement,
                this
              );
              this.flattenMutationTree(e.removedNodes).forEach(
                this.removeElement,
                this
              );
            } else
              "attributes" === e.type &&
                this.elementChanged(e.target, e.oldValue);
          },
        };
        var O = [
            "none",
            "auto",
            "pan-x",
            "pan-y",
            { rule: "pan-x pan-y", selectors: ["pan-x pan-y", "pan-y pan-x"] },
          ],
          I = "",
          x = window.PointerEvent || window.MSPointerEvent,
          P = !window.ShadowDOMPolyfill && document.head.createShadowRoot,
          C = g.pointermap,
          R = [1, 4, 2, 8, 16],
          L = !1;
        try {
          L = 1 === new MouseEvent("test", { buttons: 1 }).buttons;
        } catch (e) {}
        var A,
          M = {
            POINTER_ID: 1,
            POINTER_TYPE: "mouse",
            events: [
              "mousedown",
              "mousemove",
              "mouseup",
              "mouseover",
              "mouseout",
            ],
            register: function (e) {
              g.listen(e, this.events);
            },
            unregister: function (e) {
              g.unlisten(e, this.events);
            },
            lastTouches: [],
            isEventSimulatedFromTouch: function (e) {
              for (
                var t,
                  n = this.lastTouches,
                  r = e.clientX,
                  i = e.clientY,
                  o = 0,
                  a = n.length;
                o < a && (t = n[o]);
                o++
              ) {
                var s = Math.abs(r - t.x),
                  u = Math.abs(i - t.y);
                if (s <= 25 && u <= 25) return !0;
              }
            },
            prepareEvent: function (e) {
              var t = g.cloneEvent(e),
                n = t.preventDefault;
              return (
                (t.preventDefault = function () {
                  e.preventDefault(), n();
                }),
                (t.pointerId = this.POINTER_ID),
                (t.isPrimary = !0),
                (t.pointerType = this.POINTER_TYPE),
                t
              );
            },
            prepareButtonsForMove: function (e, t) {
              var n = C.get(this.POINTER_ID);
              0 !== t.which && n ? (e.buttons = n.buttons) : (e.buttons = 0),
                (t.buttons = e.buttons);
            },
            mousedown: function (e) {
              if (!this.isEventSimulatedFromTouch(e)) {
                var t = C.get(this.POINTER_ID),
                  n = this.prepareEvent(e);
                L ||
                  ((n.buttons = R[n.button]),
                  t && (n.buttons |= t.buttons),
                  (e.buttons = n.buttons)),
                  C.set(this.POINTER_ID, e),
                  t && 0 !== t.buttons ? g.move(n) : g.down(n);
              }
            },
            mousemove: function (e) {
              if (!this.isEventSimulatedFromTouch(e)) {
                var t = this.prepareEvent(e);
                L || this.prepareButtonsForMove(t, e),
                  (t.button = -1),
                  C.set(this.POINTER_ID, e),
                  g.move(t);
              }
            },
            mouseup: function (e) {
              if (!this.isEventSimulatedFromTouch(e)) {
                var t = C.get(this.POINTER_ID),
                  n = this.prepareEvent(e);
                if (!L) {
                  var r = R[n.button];
                  (n.buttons = t ? t.buttons & ~r : 0), (e.buttons = n.buttons);
                }
                C.set(this.POINTER_ID, e),
                  (n.buttons &= ~R[n.button]),
                  0 === n.buttons ? g.up(n) : g.move(n);
              }
            },
            mouseover: function (e) {
              if (!this.isEventSimulatedFromTouch(e)) {
                var t = this.prepareEvent(e);
                L || this.prepareButtonsForMove(t, e),
                  (t.button = -1),
                  C.set(this.POINTER_ID, e),
                  g.enterOver(t);
              }
            },
            mouseout: function (e) {
              if (!this.isEventSimulatedFromTouch(e)) {
                var t = this.prepareEvent(e);
                L || this.prepareButtonsForMove(t, e),
                  (t.button = -1),
                  g.leaveOut(t);
              }
            },
            cancel: function (e) {
              var t = this.prepareEvent(e);
              g.cancel(t), this.deactivateMouse();
            },
            deactivateMouse: function () {
              C.delete(this.POINTER_ID);
            },
          },
          j = g.captureInfo,
          D = b.findTarget.bind(b),
          N = b.allShadows.bind(b),
          k = g.pointermap,
          U = {
            events: ["touchstart", "touchmove", "touchend", "touchcancel"],
            register: function (e) {
              A.enableOnSubtree(e);
            },
            unregister: function () {},
            elementAdded: function (e) {
              var t = e.getAttribute("touch-action"),
                n = this.touchActionToScrollType(t);
              n &&
                ((e._scrollType = n),
                g.listen(e, this.events),
                N(e).forEach(function (e) {
                  (e._scrollType = n), g.listen(e, this.events);
                }, this));
            },
            elementRemoved: function (e) {
              (e._scrollType = void 0),
                g.unlisten(e, this.events),
                N(e).forEach(function (e) {
                  (e._scrollType = void 0), g.unlisten(e, this.events);
                }, this);
            },
            elementChanged: function (e, t) {
              var n = e.getAttribute("touch-action"),
                r = this.touchActionToScrollType(n),
                i = this.touchActionToScrollType(t);
              r && i
                ? ((e._scrollType = r),
                  N(e).forEach(function (e) {
                    e._scrollType = r;
                  }, this))
                : i
                ? this.elementRemoved(e)
                : r && this.elementAdded(e);
            },
            scrollTypes: {
              EMITTER: "none",
              XSCROLLER: "pan-x",
              YSCROLLER: "pan-y",
              SCROLLER: /^(?:pan-x pan-y)|(?:pan-y pan-x)|auto$/,
            },
            touchActionToScrollType: function (e) {
              var t = e,
                n = this.scrollTypes;
              return "none" === t
                ? "none"
                : t === n.XSCROLLER
                ? "X"
                : t === n.YSCROLLER
                ? "Y"
                : n.SCROLLER.exec(t)
                ? "XY"
                : void 0;
            },
            POINTER_TYPE: "touch",
            firstTouch: null,
            isPrimaryTouch: function (e) {
              return this.firstTouch === e.identifier;
            },
            setPrimaryTouch: function (e) {
              (0 === k.size || (1 === k.size && k.has(1))) &&
                ((this.firstTouch = e.identifier),
                (this.firstXY = { X: e.clientX, Y: e.clientY }),
                (this.scrolling = !1),
                this.cancelResetClickCount());
            },
            removePrimaryPointer: function (e) {
              e.isPrimary &&
                ((this.firstTouch = null),
                (this.firstXY = null),
                this.resetClickCount());
            },
            clickCount: 0,
            resetId: null,
            resetClickCount: function () {
              var e = function () {
                (this.clickCount = 0), (this.resetId = null);
              }.bind(this);
              this.resetId = setTimeout(e, 200);
            },
            cancelResetClickCount: function () {
              this.resetId && clearTimeout(this.resetId);
            },
            typeToButtons: function (e) {
              var t = 0;
              return ("touchstart" !== e && "touchmove" !== e) || (t = 1), t;
            },
            touchToPointer: function (e) {
              var t = this.currentTouchEvent,
                n = g.cloneEvent(e),
                r = (n.pointerId = e.identifier + 2);
              (n.target = j[r] || D(n)),
                (n.bubbles = !0),
                (n.cancelable = !0),
                (n.detail = this.clickCount),
                (n.button = 0),
                (n.buttons = this.typeToButtons(t.type)),
                (n.width = 2 * (e.radiusX || e.webkitRadiusX || 0)),
                (n.height = 2 * (e.radiusY || e.webkitRadiusY || 0)),
                (n.pressure = e.force || e.webkitForce || 0.5),
                (n.isPrimary = this.isPrimaryTouch(e)),
                (n.pointerType = this.POINTER_TYPE),
                (n.altKey = t.altKey),
                (n.ctrlKey = t.ctrlKey),
                (n.metaKey = t.metaKey),
                (n.shiftKey = t.shiftKey);
              var i = this;
              return (
                (n.preventDefault = function () {
                  (i.scrolling = !1), (i.firstXY = null), t.preventDefault();
                }),
                n
              );
            },
            processTouches: function (e, t) {
              var n = e.changedTouches;
              this.currentTouchEvent = e;
              for (var r, i = 0; i < n.length; i++)
                (r = n[i]), t.call(this, this.touchToPointer(r));
            },
            shouldScroll: function (e) {
              if (this.firstXY) {
                var t,
                  n = e.currentTarget._scrollType;
                if ("none" === n) t = !1;
                else if ("XY" === n) t = !0;
                else {
                  var r = e.changedTouches[0],
                    i = n,
                    o = "Y" === n ? "X" : "Y",
                    a = Math.abs(r["client" + i] - this.firstXY[i]),
                    s = Math.abs(r["client" + o] - this.firstXY[o]);
                  t = a >= s;
                }
                return (this.firstXY = null), t;
              }
            },
            findTouch: function (e, t) {
              for (var n, r = 0, i = e.length; r < i && (n = e[r]); r++)
                if (n.identifier === t) return !0;
            },
            vacuumTouches: function (e) {
              var t = e.touches;
              if (k.size >= t.length) {
                var n = [];
                k.forEach(function (e, r) {
                  if (1 !== r && !this.findTouch(t, r - 2)) {
                    var i = e.out;
                    n.push(i);
                  }
                }, this),
                  n.forEach(this.cancelOut, this);
              }
            },
            touchstart: function (e) {
              this.vacuumTouches(e),
                this.setPrimaryTouch(e.changedTouches[0]),
                this.dedupSynthMouse(e),
                this.scrolling ||
                  (this.clickCount++, this.processTouches(e, this.overDown));
            },
            overDown: function (e) {
              k.set(e.pointerId, {
                target: e.target,
                out: e,
                outTarget: e.target,
              }),
                g.enterOver(e),
                g.down(e);
            },
            touchmove: function (e) {
              this.scrolling ||
                (this.shouldScroll(e)
                  ? ((this.scrolling = !0), this.touchcancel(e))
                  : (e.preventDefault(),
                    this.processTouches(e, this.moveOverOut)));
            },
            moveOverOut: function (e) {
              var t = e,
                n = k.get(t.pointerId);
              if (n) {
                var r = n.out,
                  i = n.outTarget;
                g.move(t),
                  r &&
                    i !== t.target &&
                    ((r.relatedTarget = t.target),
                    (t.relatedTarget = i),
                    (r.target = i),
                    t.target
                      ? (g.leaveOut(r), g.enterOver(t))
                      : ((t.target = i),
                        (t.relatedTarget = null),
                        this.cancelOut(t))),
                  (n.out = t),
                  (n.outTarget = t.target);
              }
            },
            touchend: function (e) {
              this.dedupSynthMouse(e), this.processTouches(e, this.upOut);
            },
            upOut: function (e) {
              this.scrolling || (g.up(e), g.leaveOut(e)),
                this.cleanUpPointer(e);
            },
            touchcancel: function (e) {
              this.processTouches(e, this.cancelOut);
            },
            cancelOut: function (e) {
              g.cancel(e), g.leaveOut(e), this.cleanUpPointer(e);
            },
            cleanUpPointer: function (e) {
              k.delete(e.pointerId), this.removePrimaryPointer(e);
            },
            dedupSynthMouse: function (e) {
              var t = M.lastTouches,
                n = e.changedTouches[0];
              if (this.isPrimaryTouch(n)) {
                var r = { x: n.clientX, y: n.clientY };
                t.push(r);
                var i = function (e, t) {
                  var n = e.indexOf(t);
                  n > -1 && e.splice(n, 1);
                }.bind(null, t, r);
                setTimeout(i, 2500);
              }
            },
          };
        A = new n(U.elementAdded, U.elementRemoved, U.elementChanged, U);
        var B,
          V,
          F,
          $ = g.pointermap,
          Y =
            window.MSPointerEvent &&
            "number" == typeof window.MSPointerEvent.MSPOINTER_TYPE_MOUSE,
          z = {
            events: [
              "MSPointerDown",
              "MSPointerMove",
              "MSPointerUp",
              "MSPointerOut",
              "MSPointerOver",
              "MSPointerCancel",
              "MSGotPointerCapture",
              "MSLostPointerCapture",
            ],
            register: function (e) {
              g.listen(e, this.events);
            },
            unregister: function (e) {
              g.unlisten(e, this.events);
            },
            POINTER_TYPES: ["", "unavailable", "touch", "pen", "mouse"],
            prepareEvent: function (e) {
              var t = e;
              return (
                Y &&
                  ((t = g.cloneEvent(e)),
                  (t.pointerType = this.POINTER_TYPES[e.pointerType])),
                t
              );
            },
            cleanup: function (e) {
              $.delete(e);
            },
            MSPointerDown: function (e) {
              $.set(e.pointerId, e);
              var t = this.prepareEvent(e);
              g.down(t);
            },
            MSPointerMove: function (e) {
              var t = this.prepareEvent(e);
              g.move(t);
            },
            MSPointerUp: function (e) {
              var t = this.prepareEvent(e);
              g.up(t), this.cleanup(e.pointerId);
            },
            MSPointerOut: function (e) {
              var t = this.prepareEvent(e);
              g.leaveOut(t);
            },
            MSPointerOver: function (e) {
              var t = this.prepareEvent(e);
              g.enterOver(t);
            },
            MSPointerCancel: function (e) {
              var t = this.prepareEvent(e);
              g.cancel(t), this.cleanup(e.pointerId);
            },
            MSLostPointerCapture: function (e) {
              var t = g.makeEvent("lostpointercapture", e);
              g.dispatchEvent(t);
            },
            MSGotPointerCapture: function (e) {
              var t = g.makeEvent("gotpointercapture", e);
              g.dispatchEvent(t);
            },
          },
          H = window.navigator;
        return (
          H.msPointerEnabled
            ? ((B = function (e) {
                a(e),
                  s(this),
                  u(e) &&
                    (g.setCapture(e, this, !0), this.msSetPointerCapture(e));
              }),
              (V = function (e) {
                a(e), g.releaseCapture(e, !0), this.msReleasePointerCapture(e);
              }))
            : ((B = function (e) {
                a(e), s(this), u(e) && g.setCapture(e, this);
              }),
              (V = function (e) {
                a(e), g.releaseCapture(e);
              })),
          (F = function (e) {
            return !!g.captureInfo[e];
          }),
          (function () {
            if (x) {
              O.forEach(function (e) {
                String(e) === e
                  ? ((I += i(e) + o(e) + "\n"), P && (I += r(e) + o(e) + "\n"))
                  : ((I += e.selectors.map(i) + o(e.rule) + "\n"),
                    P && (I += e.selectors.map(r) + o(e.rule) + "\n"));
              });
              var e = document.createElement("style");
              (e.textContent = I), document.head.appendChild(e);
            }
          })(),
          (function () {
            if (!window.PointerEvent) {
              if (
                ((window.PointerEvent = e), window.navigator.msPointerEnabled)
              ) {
                var t = window.navigator.msMaxTouchPoints;
                Object.defineProperty(window.navigator, "maxTouchPoints", {
                  value: t,
                  enumerable: !0,
                }),
                  g.registerSource("ms", z);
              } else
                Object.defineProperty(window.navigator, "maxTouchPoints", {
                  value: 0,
                  enumerable: !0,
                }),
                  g.registerSource("mouse", M),
                  void 0 !== window.ontouchstart &&
                    g.registerSource("touch", U);
              g.register(document);
            }
          })(),
          (function () {
            window.Element &&
              !Element.prototype.setPointerCapture &&
              Object.defineProperties(Element.prototype, {
                setPointerCapture: { value: B },
                releasePointerCapture: { value: V },
                hasPointerCapture: { value: F },
              });
          })(),
          {
            dispatcher: g,
            Installer: n,
            PointerEvent: e,
            PointerMap: d,
            targetFinding: b,
          }
        );
      });
    },
    function (e, t) {
      function n() {
        throw new Error("setTimeout has not been defined");
      }
      function r() {
        throw new Error("clearTimeout has not been defined");
      }
      function i(e) {
        if (l === setTimeout) return setTimeout(e, 0);
        if ((l === n || !l) && setTimeout)
          return (l = setTimeout), setTimeout(e, 0);
        try {
          return l(e, 0);
        } catch (t) {
          try {
            return l.call(null, e, 0);
          } catch (t) {
            return l.call(this, e, 0);
          }
        }
      }
      function o(e) {
        if (p === clearTimeout) return clearTimeout(e);
        if ((p === r || !p) && clearTimeout)
          return (p = clearTimeout), clearTimeout(e);
        try {
          return p(e);
        } catch (t) {
          try {
            return p.call(null, e);
          } catch (t) {
            return p.call(this, e);
          }
        }
      }
      function a() {
        m &&
          f &&
          ((m = !1), f.length ? (h = f.concat(h)) : (v = -1), h.length && s());
      }
      function s() {
        if (!m) {
          var e = i(a);
          m = !0;
          for (var t = h.length; t; ) {
            for (f = h, h = []; ++v < t; ) f && f[v].run();
            (v = -1), (t = h.length);
          }
          (f = null), (m = !1), o(e);
        }
      }
      function u(e, t) {
        (this.fun = e), (this.array = t);
      }
      function c() {}
      var l,
        p,
        d = (e.exports = {});
      !(function () {
        try {
          l = "function" == typeof setTimeout ? setTimeout : n;
        } catch (e) {
          l = n;
        }
        try {
          p = "function" == typeof clearTimeout ? clearTimeout : r;
        } catch (e) {
          p = r;
        }
      })();
      var f,
        h = [],
        m = !1,
        v = -1;
      (d.nextTick = function (e) {
        var t = new Array(arguments.length - 1);
        if (arguments.length > 1)
          for (var n = 1; n < arguments.length; n++) t[n - 1] = arguments[n];
        h.push(new u(e, t)), 1 !== h.length || m || i(s);
      }),
        (u.prototype.run = function () {
          this.fun.apply(null, this.array);
        }),
        (d.title = "browser"),
        (d.browser = !0),
        (d.env = {}),
        (d.argv = []),
        (d.version = ""),
        (d.versions = {}),
        (d.on = c),
        (d.addListener = c),
        (d.once = c),
        (d.off = c),
        (d.removeListener = c),
        (d.removeAllListeners = c),
        (d.emit = c),
        (d.prependListener = c),
        (d.prependOnceListener = c),
        (d.listeners = function (e) {
          return [];
        }),
        (d.binding = function (e) {
          throw new Error("process.binding is not supported");
        }),
        (d.cwd = function () {
          return "/";
        }),
        (d.chdir = function (e) {
          throw new Error("process.chdir is not supported");
        }),
        (d.umask = function () {
          return 0;
        });
    },
    function (e, t, n) {
      var r = n(31);
      "string" == typeof r && (r = [[e.i, r, ""]]);
      n(5)(r, {});
      r.locals && (e.exports = r.locals);
    },
    function (e, t, n) {
      var r = n(32);
      "string" == typeof r && (r = [[e.i, r, ""]]);
      n(5)(r, {});
      r.locals && (e.exports = r.locals);
    },
    function (e, t, n) {
      var r = n(33);
      "string" == typeof r && (r = [[e.i, r, ""]]);
      n(5)(r, {});
      r.locals && (e.exports = r.locals);
    },
    function (e, t) {
      var n;
      n = (function () {
        return this;
      })();
      try {
        n = n || Function("return this")() || (0, eval)("this");
      } catch (e) {
        "object" == typeof window && (n = window);
      }
      e.exports = n;
    },
    function (e, t) {
      function n(e, t) {
        var r = Array.isArray(t),
          i = (r && []) || {};
        return (
          r
            ? ((e = e || []),
              (i = i.concat(e)),
              t.forEach(function (t, r) {
                void 0 === i[r]
                  ? (i[r] = t)
                  : "object" == typeof t
                  ? (i[r] = n(e[r], t))
                  : -1 === e.indexOf(t) && i.push(t);
              }))
            : (e &&
                "object" == typeof e &&
                Object.keys(e).forEach(function (t) {
                  i[t] = e[t];
                }),
              Object.keys(t).forEach(function (r) {
                "object" == typeof t[r] && t[r] && e[r]
                  ? (i[r] = n(e[r], t[r]))
                  : (i[r] = t[r]);
              })),
          i
        );
      }
      e.exports = n;
    },
    function (e, t, n) {
      function r() {
        if (4 == arguments.length)
          (this.x = arguments[0]),
            (this.y = arguments[1]),
            (this.z = arguments[2]),
            (this.angle = arguments[3]);
        else if (2 == arguments.length)
          if ("number" == typeof arguments[1])
            this.setAxis(arguments[0]), (this.angle = arguments[1]);
          else {
            var e = arguments[0].normalize(),
              t = arguments[1].normalize(),
              n = e.cross(t),
              r = n.length();
            r <= 1.192092896e-7
              ? e.dot(t) < 0
                ? ((n = e.cross(new i(1, 0, 0))),
                  (this.angle = Math.PI),
                  (r = n.length()),
                  r <= 1.192092896e-7 && (n = e.cross(new i(0, 1, 0))),
                  (n = n.normalize()))
                : ((n = new i(0, 1, 0)), (this.angle = 0))
              : ((this.angle = Math.atan2(r, e.dot(t))), (n = n.normalize())),
              this.setAxis(n);
          }
        else
          1 == arguments.length &&
          "object" == typeof arguments[0] &&
          null !== arguments[0] &&
          4 === arguments[0].length
            ? ((this.x = arguments[0][0]),
              (this.y = arguments[0][1]),
              (this.z = arguments[0][2]),
              (this.angle = arguments[0][3]))
            : ((this.x = 0), (this.y = 1), (this.z = 0), (this.angle = 0));
      }
      var i = n(14);
      (r.prototype.toArray = function () {
        return [this.x, this.y, this.z, this.angle];
      }),
        (r.prototype.multVec = function (e) {
          var t = -this.angle,
            n = Math.sin(t),
            r = Math.cos(t),
            o = this.x,
            a = this.y,
            s = this.z,
            u = e.x,
            c = e.y,
            l = e.z,
            p = (o * u + a * c + s * l) * (1 - r);
          return new i(
            o * p + r * u + n * (s * c - a * l),
            a * p + r * c + n * (o * l - s * u),
            s * p + r * l + n * (a * u - o * c)
          );
        }),
        (r.prototype.inverse = function () {
          return new r(this.x, this.y, this.z, -this.angle);
        }),
        (r.prototype.multiply = function (e) {
          var t = e.angle,
            n = Math.sin(t / 2),
            i = Math.cos(t / 2),
            o = e.getAxis().multiply(n),
            a = Math.sin(this.angle / 2),
            s = Math.cos(this.angle / 2),
            u = this.getAxis().multiply(a),
            c = i * s - o.dot(u),
            l = o.multiply(s).add(u.multiply(i)).add(u.cross(o)),
            p = l.x * l.x + l.y * l.y + l.z * l.z,
            d = new r(0, 0, 1, 0);
          if (0 !== p) {
            var f = Math.sqrt(p);
            d.setAxis(l.divide(f)), (d.angle = 2 * Math.atan2(f, c));
          }
          return d;
        }),
        (r.prototype.setAxis = function (e) {
          (this.x = e.x), (this.y = e.y), (this.z = e.z);
        }),
        (r.prototype.getAxis = function () {
          return new i(this.x, this.y, this.z);
        }),
        (r.prototype.toString = function () {
          return this.toArray().join(" ");
        }),
        (e.exports = r);
    },
    function (e, t) {
      function n() {}
      (n.prototype.$ = function (e, t) {
        var n = e || this;
        if ("string" == typeof e && e)
          if ("*" === e)
            (n = (this["@children"] || []).filter(function (e) {
              return "string" != typeof e;
            })),
              t &&
                (n = n.reduce(function (n, r) {
                  return n.concat(r, r.$(e, t));
                }, []));
          else {
            var r = e.indexOf("/"),
              i = e.substring(0, r),
              o = e.substring(r + 1),
              a = o.indexOf("/");
            r >= 0 && 0 === a
              ? ((o = o.substring(1)),
                (n = this.$(i, t).reduce(function (e, t) {
                  return e.concat(t.$(o, !0));
                }, [])))
              : (n = t
                  ? this.$("*").reduce(function (t, n) {
                      return t.concat(n.$(e, !0));
                    }, this.$(e))
                  : r < 0
                  ? this[e]
                  : this.$(i).reduce(function (e, t) {
                      return e.concat(t.$(o));
                    }, []));
          }
        return n ? (n.map ? n : [n]) : [];
      }),
        (n.prototype.$text = function (e) {
          return e
            ? this.$(e).reduce(function (e, t) {
                return e + t.$text();
              }, "")
            : this["#text"] ||
                (this["@children"] || []).reduce(function (e, t) {
                  return "string" == typeof t ? e + t : e + t.$text();
                }, "");
        }),
        (n.prototype.$attr = function (e) {
          return this["@attributes"] ? this["@attributes"][e] : null;
        }),
        (e.exports = n);
    },
    function (e, t, n) {
      var r = n(3),
        i = (n(0).app, -1),
        o = {
          dpl: {
            setupTable: function (e) {
              if ((r.dispatch("app.ipc.dpl.willSetupTable", e), e)) {
                i = -1;
                var t, n;
                Array.prototype.slice.call(e.rows).forEach(function (i) {
                  if (i.id) {
                    var o = +i.id.substring(3);
                    i.setAttribute("data-index", o),
                      (i.onmouseover = function (e) {
                        clearTimeout(t);
                        var i = +this.getAttribute("data-index");
                        n !== i &&
                          ((n = null),
                          r.dispatch("app.ipc.dpl.didHoverRow", i));
                      }),
                      (i.onmouseout = function (e) {
                        (n = +this.getAttribute("data-index")),
                          clearTimeout(t),
                          (t = setTimeout(function () {
                            r.dispatch("app.ipc.dpl.didHoverRow", -1),
                              (n = null);
                          }, 10));
                      }),
                      (i.onclick = function (e) {
                        var t = +this.getAttribute("data-index"),
                          n =
                            +(e.shiftKey && 1) |
                            +(e.ctrlKey && 2) |
                            +(e.altKey && 4),
                          i = this;
                        this.__debounceTimeout
                          ? (clearTimeout(this.__debounceTimeout),
                            delete this.__debounceTimeout)
                          : (this.__debounceTimeout = setTimeout(function () {
                              delete i.__debounceTimeout,
                                r.dispatch("app.ipc.dpl.didSelectRow", t, n);
                            }, 250));
                      }),
                      (i.oncontextmenu = function (t) {
                        var n = +this.getAttribute("data-index"),
                          i = e,
                          o = i.getBoundingClientRect(),
                          a = t.clientX - o.left,
                          s = t.clientY - o.top;
                        r.dispatch(
                          "app.ipc.dpl.didCallContextMenu",
                          n,
                          a,
                          s,
                          i
                        ),
                          t.preventDefault && t.preventDefault(),
                          t.stopPropagation && t.stopPropagation();
                      }),
                      r.dispatch("app.ipc.dpl.didSetupRow", i, o);
                  }
                });
              }
              r.dispatch("app.ipc.dpl.didSetupTable", e);
            },
            hoverRow: function (e) {
              var t;
              i >= 0 &&
                (t = document.getElementById("row" + i)) &&
                t.classList.remove("hover"),
                e >= 0 &&
                  (t = document.getElementById("row" + e)) &&
                  t.classList.add("hover"),
                (i = e);
            },
            highlightRow: function (e, t) {
              t = void 0 === t || t;
              var n = document.getElementById("row" + e);
              n && n.classList.toggle("hover", t);
            },
            selectRow: function (e, t) {
              t = void 0 === t || t;
              var n = document.getElementById("row" + e);
              n && n.classList.toggle("selected", t);
            },
            toggleRow: function (e, t) {
              var n = document.getElementById("row" + e);
              n &&
                ((t = void 0 === t ? n.classList.contains("hidden") : t),
                n.classList.toggle("hidden", !t));
            },
          },
        };
      e.exports = o.dpl;
    },
    function (e, t, n) {
      var r = n(0).app,
        i = n(2).expand;
      e.exports = function (e, t) {
        function o(e) {
          l.dpl ||
            (l.dpl = u.$("ipc/figure/dplist/item").map(function (t, n) {
              var r;
              return (
                e.willGetCSNString
                  ? (r = e.willGetCSNString(v[n], n))
                  : ((r = v[n].roles[3] || ""), (r += v[n].roles[4] || "")),
                r
              );
            }));
        }
        function a(e, t) {
          return e
            .$("metadata/value")
            .filter(function (e) {
              return e.$attr("decl-id") == t;
            })
            .reduce(function (e, t) {
              return e + t.$text();
            }, "");
        }
        function s(e) {
          var t = e.$("metadata/value").filter(function (e) {
            return 5 == e.$attr("role");
          });
          return t.length > 0 && (t = +t[0].$text() || 0), t;
        }
        var u = e.json,
          c = n(6),
          l = {
            dpl: [],
            def: [],
            prefferedViews: [],
            sheets: {},
            options: {},
            metadata: {},
            info: [],
          },
          p = u.$("ipc/figure/dplist/item").map(function (e) {
            return e.$attr("id");
          }),
          d = {};
        (r.modelInfo || { sheets: [] }).sheets.forEach(function (e) {
          var n = u.$("ipc/figure/views/view").filter(function (t) {
              return t.$attr("id") === e.id;
            })[0],
            r = i(e, {
              items: n
                .$("refItem")
                .map(function (e) {
                  return p.indexOf(e.$attr("ref"));
                })
                .sort(function (e, t) {
                  return e - t;
                }),
            }),
            o = n.$("refmedia").filter(function (e) {
              return 1 != e.$attr("ref");
            });
          if (o.length > 0) {
            var a = o[0].$attr("ref"),
              s = u
                .$("ipc/figure/media")
                .filter(function (e) {
                  return e.$attr("id") == a;
                })[0]
                .$attr("src");
            r.drawing = t + s;
          }
          d[e.id] = r;
        });
        var f = n(10)(u),
          h = c(u.$("ipc/figure/metadata/value")),
          m = u.$("ipc/figure/dplist/item").map(function (e, t, n) {
            for (var r = s(e) - 1, i = -1, o = t - 1; o >= 0; o--) {
              var u = +a(n[o], "ASP") || 0,
                c = +a(n[o], "_301F121F8EF84EC0B9979C8D10D19A79") || 0;
              if (1 !== u && 0 === c && s(n[o]) === r) break;
            }
            for (; o >= 0; o--)
              if (s(n[o]) === r && !+a(n[o], "NIL")) {
                i = o;
                break;
              }
            return i;
          }),
          v = u.$("ipc/figure/dplist/item").map(function (e, t) {
            var n = { row: t },
              r = e.$("metadata/value");
            (n.id = e.$attr("id")),
              (n.metadata = c(r)),
              (n.part = {}),
              (n.part.id = e.$attr("refPart"));
            var i = u.$("ipc/parts/part").reduce(function (e, t) {
                return t.$attr("id") == n.part.id ? t : e;
              }),
              o = i.$("metadata/value");
            return (
              (n.part.metadata = c(o)),
              (n.roles = new Array(8)),
              r.concat(o).forEach(function (e) {
                var t = +e.$attr("role");
                t && (n.roles[t] = e.$text());
              }),
              (n.sheetId = e.refview ? e.refview.$attr("ref") : ""),
              (n.screentip = e.tooltip ? e.$text("tooltip") : ""),
              (n.objectNames = e
                .$("refmedia")
                .filter(function (e) {
                  return 1 == e.$attr("ref");
                })
                .map(function (e) {
                  return e.$text();
                })),
              (n.commands = e.$("commands/command").map(function (e) {
                var t = {};
                return (
                  e.$("value").forEach(function (e) {
                    t[e.$attr("name")] = e.$text();
                  }),
                  {
                    id: e.$attr("id"),
                    type: e.$attr("type"),
                    args: e.$("value").map(function (e) {
                      return e.$text();
                    }),
                    values: t,
                  }
                );
              })),
              n
            );
          });
        return (
          (l = {
            info: v,
            def: u.$("ipc/figure/dplist/item").map(function (e, t) {
              return v[t].objectNames;
            }),
            prefferedViews: u.$("ipc/figure/dplist/item").map(function (e, t) {
              return v[t].sheetId;
            }),
            sheets: d,
            options: f,
            metadata: h,
            parent: m,
            children: m.map(function (e, t, n) {
              return n.reduce(function (e, n, r, i) {
                return n === t ? e.concat(r) : e;
              }, []);
            }),
          }),
          {
            ipc: {
              interactivity: {
                getRowByIndex: function (e) {
                  var t = r.ipc.getCurrentSheet().id;
                  return l.sheets[t].items[e];
                },
                getIndexByRow: function (e) {
                  var t = r.ipc.getCurrentSheet().id;
                  return l.sheets[t].items.indexOf(e);
                },
                getRowByItem: function (e) {
                  return o(this), l.dpl.indexOf(e);
                },
                getItemByRow: function (e) {
                  return o(this), l.dpl[e];
                },
                getIndexByItem: function (e) {
                  return this.getIndexByRow(this.getRowByItem(e));
                },
                getItemByIndex: function (e) {
                  return this.getItemByRow(this.getRowByIndex(e));
                },
                getRowByObjectName: function (e) {
                  var t,
                    n = l.def;
                  for (t = 0; t < n.length; t++)
                    if (n[t].indexOf(e) >= 0) return t;
                  return -1;
                },
                getObjectsNamesByRow: function (e) {
                  return l.def[e];
                },
                getDrawingForIPCView: function (e) {
                  e = e || r.ipc.currentSheetInfo.id;
                  var t = l.sheets[e];
                  return (t && t.drawing) || "";
                },
                getSheetInfo: function (e) {
                  return (e = e || r.ipc.currentSheetInfo.id), l.sheets[e];
                },
                getOptions: function () {
                  return l.options;
                },
                getProjectMetadata: function () {
                  return l.metadata;
                },
                getScreenTip: function (e) {
                  var t = this.getRowByIndex(e);
                  return this.getItemInfo(t).screentip;
                },
                getPrefferedSheetId: function (e) {
                  var t = this.getRowByIndex(e);
                  return this.getItemInfo(t).sheetId;
                },
                getItemInfo: function (e) {
                  return l.info[e];
                },
                getParent: function (e) {
                  return l.parent[e];
                },
                getChildren: function (e, t) {
                  var n = [],
                    r = l.children[e],
                    i = this;
                  return (
                    t
                      ? r.forEach(function (e) {
                          n.push(e), (n = n.concat(i.getChildren(e, t)));
                        })
                      : (n = r),
                    n
                  );
                },
              },
            },
          }.ipc
        );
      };
    },
    function (e, t, n) {
      n(0).app;
      e.exports = function (e, t) {
        function r(e, t) {
          t = t || a.SimulationInteractivity.Simulation;
          var n,
            i = "";
          if (t.$attr("id") != e) {
            if (t.Step)
              for (n = 0; n < t.Step.length && !i; n++) i = r(e, t.Step[n]);
            else if (t.Substep)
              for (n = 0; n < t.Substep.length && !i; n++)
                i = r(e, t.Substep[n]);
          } else i = t.$text("Description");
          return i;
        }
        function i(e, t) {
          var n = e.$attr("id");
          u.procedureItems[n] = {
            id: n,
            type: "event",
            description: e.$text("Description"),
            eventType: e.$text("Type").toUpperCase(),
            parent: t,
          };
        }
        function o(e, t) {
          var n,
            s = e.$attr("id"),
            c = {
              id: s,
              comment: e.$text("Comment"),
              description: r(s),
              children: e.$("Item").map(function (e) {
                return e.$attr("id");
              }),
              actions: e.$("Action").map(function (e) {
                return e.$attr("id");
              }),
              metadata: e.$("metadata/value").reduce(function (e, t) {
                return (e[t.$attr("decl-id")] = t.$text()), e;
              }, {}),
              raw: e,
            };
          if (
            ((c.type =
              c.children.length + c.actions.length > 0 ? "step" : "action"),
            t && (c.parent = t),
            "action" == c.type)
          ) {
            delete c.children, delete c.actions;
            var l = a.$("SimulationInteractivity/Simulation/Step");
            for (n = 0; n < l.length; n++) {
              var p = l[n],
                d = p.$("Substep").filter(function (e) {
                  return e.$attr("id") == s;
                });
              if (d.length > 0) {
                (c.parentStep = p.$attr("id")),
                  (c.events = d[0].$("Event").map(function (e) {
                    return i(e, s), e.$attr("id");
                  }));
                break;
              }
            }
          }
          (u.procedureItems[s] = c),
            e.$("Action").forEach(function (e) {
              o(e, s);
            }),
            e.$("Item").forEach(function (e) {
              o(e, s);
            });
        }
        var a = e.json,
          s = n(6),
          u = {
            defs: {},
            docitems: {},
            procedureItems: {},
            options: {},
            metadata: {},
          };
        return (
          a.$("SimulationInteractivity/DocItems/DocItem").forEach(function (e) {
            var t = e.$attr("id"),
              n = {},
              r = {};
            e.$("metadata/value").forEach(function (e) {
              var t = e.$text();
              (n[e.$attr("name")] = t),
                (n["{" + e.$attr("decl-id") + "}"] = t),
                (r[e.$attr("decl-id")] = t);
            }),
              (u.defs[t] = n);
            var i = n["{DocID}"];
            u.docitems[i] ||
              (u.docitems[i] = {
                id: i,
                objectNames: [],
                metadata: r,
                screentip: e.$text("tooltip"),
              }),
              u.docitems[i].objectNames.push(t);
          }),
          (u.pictures = a
            .$("SimulationInteractivity/Resources/Picture")
            .map(function (e) {
              return {
                description: e.$attr("descr"),
                drawing: t + e.$text(),
                flags: e.$attr("flags") || 0,
              };
            })),
          (u.options = n(10)(a)),
          (u.metadata = s(
            a.$("SimulationInteractivity/SimulationInformation/metadata/value")
          )),
          (u.procedureId = a.SimulationInteractivity.Simulation.$attr("id")),
          o(a.SimulationInteractivity.Procedure),
          (u.procedureItems[u.procedureId].type = "procedure"),
          (u.procedureItems[u.procedureId].comment = a.$text(
            "SimulationInteractivity/Simulation/Comment"
          )),
          {
            procedure: {
              interactivity: {
                getProcedureId: function () {
                  return u.procedureId;
                },
                getDrawings: function () {
                  return u.pictures;
                },
                getDocIdByObjectName: function (e) {
                  var t = u.defs[e];
                  return t ? t["{DocID}"] : null;
                },
                getObjectNamesByDocId: function (e) {
                  var t = u.docitems[e];
                  return t ? t.objectNames : [];
                },
                getDocItemInfo: function (e) {
                  return u.docitems[e];
                },
                getDocItemMetadata: function (e) {
                  return u.defs[e];
                },
                getDocItems: function () {
                  var e = [];
                  for (var t in u.docitems) e.push(t);
                  return e;
                },
                getProcedureItemInfo: function (e) {
                  return u.procedureItems[e];
                },
                getOptions: function () {
                  return u.options;
                },
                getProjectMetadata: function () {
                  return u.metadata;
                },
              },
            },
          }.procedure
        );
      };
    },
    function (e, t, n) {
      function r(e) {
        for (var t = e.firstChild; t && !t.tagName; ) t = t.nextSibling;
        return t;
      }
      function i(e) {
        var t = [],
          n = r(e);
        return (
          n && "path" === n.tagName
            ? t.push(n)
            : (t = t.concat(
                Array.prototype.slice.call(e.getElementsByTagName("path")),
                Array.prototype.slice.call(e.getElementsByTagName("text"))
              )),
          t
        );
      }
      function o(e) {
        for (var t = e; t && "a" != t.nodeName.toLowerCase(); )
          t = t.parentNode;
        return t;
      }
      function a() {
        1 === H && (C = I.getBBox());
        var e = C,
          t = x.clientWidth,
          n = x.clientHeight,
          r = e.width,
          i = e.height,
          o = t / n,
          a = r / i;
        return (
          o > a
            ? ((i = n), (r = i * a))
            : o < a
            ? ((r = t), (i = r / a))
            : ((i = n), (r = t)),
          { h: i, w: r, scale: e.width / r }
        );
      }
      function s(e, t) {
        var n = a();
        u(G + e * n.scale, X + t * n.scale);
      }
      function u(e, t) {
        var n = x.clientWidth,
          r = x.clientHeight,
          i = a(),
          o = i.w,
          s = i.h,
          u = i.scale,
          c = o * H,
          l = s * H,
          p = -Math.abs(n - o) / 2,
          d = -Math.abs(r - s) / 2;
        (G =
          c <= n
            ? Math.max(Math.min(e, (p + n - c) * u), p * u)
            : Math.max(Math.min(e, p * u), (p + n - c) * u)),
          (X =
            l <= r
              ? Math.max(Math.min(t, (d + r - l) * u), d * u)
              : Math.max(Math.min(t, d * u), (d + r - l) * u));
      }
      function c(e, t, n) {
        (G = e), (X = t), (H = n), ie.dispatch("onZoomChange", H), l();
      }
      function l() {
        P &&
          (clearTimeout(M),
          (M = setTimeout(function () {
            var e = P.transform.baseVal;
            (isNaN(G) || isNaN(X) || isNaN(H)) && ((G = 0), (X = 0), (H = 1)),
              e.getItem(0).setTranslate(G, X),
              e.getItem(1).setScale(H, H);
          }, 0)));
      }
      function p() {
        var e = document.createElement("div");
        return (
          e.appendChild(I.cloneNode(!0)),
          e.firstChild.removeAttribute("id"),
          e.firstChild.removeAttribute("style"),
          e.innerHTML
        );
      }
      function d() {
        return I;
      }
      function f() {
        var e,
          t,
          n,
          r = {},
          i = I.getElementsByTagName("a");
        if (Z && !Y.length) {
          for (
            !1 === navigator.pointerEnabled &&
              (r.inputClass = B
                ? V.TouchInput
                : U
                ? V.TouchMouseInput
                : V.MouseInput),
              n = 0;
            n < i.length;
            n++
          )
            !(function (n) {
              var i = n.getAttribute("name");
              if (
                (i ||
                  (console.log(
                    'WARNING: Element "' +
                      n.tagName +
                      '" has no "name" attribute. It uses text content instead'
                  ),
                  (i = n.textContent.trim()) && n.setAttribute("name", i)),
                i)
              ) {
                (t = new V.Manager(n, j({ recognizers: [[V.Tap]] }, r))),
                  t.on("tap", function (e) {
                    var t = e.srcEvent || e,
                      n =
                        +(t.shiftKey && 1) |
                        +(t.ctrlKey && 2) |
                        +(t.altKey && 4);
                    z[i]
                      ? (clearTimeout(z[i]), delete z[i])
                      : (z[i] = setTimeout(function () {
                          delete z[i], ie.dispatch("didClickHotspot", i, n);
                        }, $));
                  }),
                  Y.push(t);
                for (e in ne) n.addEventListener(e, ne[e], !1);
              }
            })(i[n]);
          t = new V.Manager(x, r);
          var o = new V.Press({ time: F }),
            p = new V.Tap({
              event: "doubletap",
              taps: 2,
              threshold: 5,
              posThreshold: 100,
              interval: $,
            }),
            d = new V.Pinch({ enable: !0 }),
            f = new V.Pan({ pointers: 0, threshold: 1 });
          d.recognizeWith(f),
            t.add(o),
            t.on("press", function (e) {
              "mouse" !== e.pointerType &&
                (re.contextmenu(e.srcEvent), (K = !0));
            }),
            t.on("pressup", function (e) {
              "mouse" !== e.pointerType &&
                setTimeout(function () {
                  K = !1;
                }, 250);
            }),
            t.add(p),
            t.add(d),
            t.add(f),
            t.set({ touchAction: "none" }),
            t.on("doubletap", function (e) {
              if (H > 1) E();
              else {
                var t = x.clientWidth,
                  n = x.clientHeight,
                  r = a(),
                  i = r.w,
                  o = r.h,
                  s = x.getBoundingClientRect(),
                  u = e.srcEvent.clientX - s.left,
                  l = e.srcEvent.clientY - s.top,
                  p = ((u - (t - i) / 2 - G / r.scale) / H) * r.scale,
                  d = ((l - (n - o) / 2 - X / r.scale) / H) * r.scale;
                c(G + -3 * p * H, X + -3 * d * H, 4 * H);
              }
            }),
            t.on("pinchstart", function (e) {
              A = 1;
            }),
            t.on("pinch", function (e) {
              var t = x.clientWidth,
                n = x.clientHeight,
                r = a(),
                i = r.w,
                o = r.h,
                s = Math.max(q, Math.min(W, (1 - (A - e.scale)) * H)) / H,
                p = x.getBoundingClientRect(),
                d = e.center.x,
                f = e.center.y,
                h = d - p.left,
                m = f - p.top,
                v = ((h - (t - i) / 2 - G / r.scale) / H) * r.scale,
                g = ((m - (n - o) / 2 - X / r.scale) / H) * r.scale,
                b = G + v * (1 - s) * H,
                y = X + g * (1 - s) * H;
              s > 1
                ? c(b, y, H * s)
                : ((H *= s), ie.dispatch("onZoomChange", H), u(b, y), l()),
                (A = e.scale);
            }),
            t.on("panstart", function (e) {
              (x.style.cursor = "move"), (R = 0), (L = 0);
            }),
            t.on("panend", function (e) {
              x.style.cursor = "default";
            }),
            t.on("pan", function (e) {
              s(e.deltaX - R, e.deltaY - L),
                (R = e.deltaX),
                (L = e.deltaY),
                l();
            }),
            Y.push(t);
          for (e in re) x.addEventListener(e, re[e], !1);
        }
      }
      function h() {
        var e,
          t,
          n,
          r,
          i = I.getElementsByTagName("a");
        for (r = 0; r < i.length; r++) {
          (n = i[r]), n.__mc && n.__mc.destroy(), delete n.__mc;
          for (e in ne) n.removeEventListener(e, ne[e], !1);
        }
        for (e in re) x.removeEventListener(e, re[e], !1);
        Y.forEach(function (e) {
          e.destroy();
        }),
          (Y.length = 0);
        for (t in z) clearTimeout(z[t]);
        (z = {}), (H = 1), (G = 0), (X = 0);
      }
      function m(e, t) {
        if (e != Q)
          if (
            (te && (te.abort(), (te = null)),
            ee && ((ee.onload = null), (ee = null)),
            t || /\.(png|jpe?g|jpe|gif)$/i.test(e))
          ) {
            var n = new Image();
            (n.onload = function () {
              v();
              var t = document.createElementNS(N, "image");
              t.setAttribute("image-rendering", "optimizeQuality"),
                t.setAttribute("width", n.width),
                t.setAttribute("height", n.height),
                I.setAttribute("viewBox", "0 0 " + n.width + " " + n.height),
                t.setAttributeNS(k, "href", n.src),
                (P = document.createElementNS(N, "g"));
              var r = P.transform.baseVal;
              r.initialize(I.createSVGTransform()),
                r.appendItem(I.createSVGTransform()),
                P.appendChild(t),
                I.appendChild(P),
                (Z = !0),
                ie.dispatch("didCompleteLoad", n.src),
                J || f(),
                (Q = e);
            }),
              (n.src = e),
              (ee = n);
          } else {
            var r = new window.XMLHttpRequest();
            r.overrideMimeType && r.overrideMimeType("image/svg+xml");
            try {
              r.open("GET", e, !0),
                (r.onerror = function () {
                  ie.dispatch("onProgress", 0, -1),
                    ie.dispatch("failedLoadingDocument", e, r.status);
                }),
                (r.onprogress = function (e) {
                  var t = e.loaded,
                    n =
                      e.lengthComputable || void 0 === e.lengthComputable
                        ? e.total
                        : 0;
                  ie.dispatch("onProgress", t, n);
                }),
                (r.onload = function () {
                  ie.dispatch("onProgress", 0, -1);
                  var t;
                  if (r.responseXML) {
                    var n = document.createElement("div");
                    if (
                      ((n.innerHTML = r.response), (t = n.querySelector("svg")))
                    ) {
                      h();
                      var i = I.style.cssText,
                        o = I.getAttribute("class");
                      I.parentNode.replaceChild(t, I),
                        (I = t),
                        I.setAttribute("touch-action", "none"),
                        (I.style.touchAction = "none");
                      var a = t.getElementsByTagName("title")[0];
                      a && t.removeChild(a);
                      var s = Array.prototype.slice
                        .call(t.childNodes || t.children)
                        .filter(function (e) {
                          var t = e.nodeName;
                          return (
                            "#text" !== t &&
                            "title" !== t &&
                            "defs" !== t &&
                            "desc" != t
                          );
                        });
                      P = document.createElementNS(N, "g");
                      var u = P.transform.baseVal;
                      u.initialize(t.createSVGTransform()),
                        u.appendItem(t.createSVGTransform()),
                        s.forEach(function (e) {
                          P.appendChild(e);
                        }),
                        t.appendChild(P),
                        t.getAttribute("viewBox") ||
                          t.setAttribute(
                            "viewBox",
                            "0 0 " +
                              t.getAttribute("width") +
                              " " +
                              t.getAttribute("height")
                          ),
                        (t.style.cssText = i),
                        t.setAttribute("class", o),
                        (Z = !0),
                        ie.dispatch("didCompleteLoad", e),
                        J || f(),
                        (Q = e);
                    }
                  }
                  t ||
                    (ie.dispatch("failedLoadingDocument", e, r.status),
                    (Q = ""));
                }),
                r.send(null),
                (te = r);
            } catch (t) {
              ie.dispatch("failedLoadingDocument", e, t.message), (Q = "");
            }
          }
      }
      function v() {
        for (h(); I.firstChild; ) I.removeChild(I.firstChild);
        Z = !1;
      }
      function g(e, t, n) {
        Array.prototype.slice
          .call(I.getElementsByTagName("a"))
          .forEach(function (r) {
            r.getAttribute("name") === e &&
              i(r).forEach(function (e) {
                n
                  ? ((e.style.fill = t), (e.style.fillOpacity = 1))
                  : ((e.style.stroke = t),
                    (e.style.strokeWidth =
                      "text" === e.tagName ? ".1em" : ".5px"),
                    (e.style.strokeOpacity = 1));
              });
          });
      }
      function b(e, t) {
        Array.prototype.slice
          .call(I.getElementsByTagName("a"))
          .forEach(function (n) {
            n.getAttribute("name") === e &&
              i(n).forEach(function (e) {
                t
                  ? ((e.style.fill = e.style.stroke),
                    (e.style.fillOpacity = e.style.strokeOpacity))
                  : ((e.style.stroke = ""),
                    (e.style.strokeWidth = ""),
                    (e.style.strokeOpacity = ""));
              });
          });
      }
      function y(e, t, n) {
        Array.prototype.slice
          .call(I.getElementsByTagName("a"))
          .forEach(function (r) {
            r.getAttribute("name") === e &&
              i(r).forEach(function (e) {
                n &&
                  ((e.style.stroke = t),
                  (e.style.strokeWidth =
                    "text" === e.tagName ? ".1em" : ".5px"),
                  (e.style.strokeOpacity = 1)),
                  (e.style.fill = t),
                  (e.style.fillOpacity = 1);
              });
          });
      }
      function w(e, t) {
        Array.prototype.slice
          .call(I.getElementsByTagName("a"))
          .forEach(function (n) {
            n.getAttribute("name") === e &&
              i(n).forEach(function (e) {
                t &&
                  ((e.style.stroke = ""),
                  (e.style.strokeWidth = ""),
                  (e.style.strokeOpacity = "")),
                  (e.style.fill = ""),
                  (e.style.fillOpacity = "");
              });
          });
      }
      function E() {
        c(0, 0, 1);
      }
      function T(e) {
        1 === H && (C = I.getBBox());
        var t = C,
          n = x.clientWidth,
          r = x.clientHeight,
          i = t.width,
          o = t.height,
          a = n / r,
          u = i / o;
        a > u
          ? ((o = r * H), (i = o * u))
          : a < u
          ? ((i = n * H), (o = i / u))
          : ((o = r * H), (i = n * H));
        var c = Math.max(q, Math.min(W, H + e)),
          p = (H - c) / 2;
        (H = c), s(i * p, o * p), l();
      }
      function _() {
        h(), (I.style.visibility = "hidden"), (J = !0);
      }
      function S() {
        f(), (I.style.visibility = "visible"), (J = !1);
      }
      function O(e, t) {
        e.setAttribute("touch-action", "none"),
          (e.style.touchAction = "none"),
          (I = e),
          (x = e.parentNode),
          _();
      }
      var I,
        x,
        P,
        C,
        R,
        L,
        A,
        M,
        j = n(2).expand,
        D = n(11).EventEmitter,
        N = "http://www.w3.org/2000/svg",
        k = "http://www.w3.org/1999/xlink",
        U = "ontouchstart" in window,
        B =
          U &&
          /mobile|tablet|ip(ad|hone|od)|android/i.test(navigator.userAgent),
        V = n(12),
        F = 750,
        $ = 250,
        Y = [],
        z = {},
        H = 1,
        G = 0,
        X = 0,
        W = 10,
        q = 1,
        K = !1,
        J = !0,
        Z = !1,
        Q = "",
        ee = null,
        te = null,
        ne = {
          mouseover: function (e) {
            e = e || window.event;
            var t = o(e.target || e.srcElement),
              n = t ? t.getAttribute("name") : "";
            ie.dispatch("didEnterHotspot", n), e.preventDefault();
          },
          mouseout: function (e) {
            e = e || window.event;
            var t = o(e.target || e.srcElement),
              n = t ? t.getAttribute("name") : "";
            ie.dispatch("didLeaveHotspot", n), e.preventDefault();
          },
        },
        re = {
          contextmenu: function (e) {
            if (!K) {
              e = e || window.event;
              var t = e.target || e.srcElement,
                n = o(t),
                r = n ? n.getAttribute("name") : "",
                i = x.getBoundingClientRect(),
                a = e.clientX - i.left,
                s = e.clientY - i.top;
              ie.dispatch("didCallContextMenu", r, a, s, x),
                e.preventDefault(),
                e.stopPropagation();
            }
          },
          wheel: function (e) {
            e = e || window.event;
            var t = e.deltaY < 0 ? -10 : 10,
              n = x.clientWidth,
              r = x.clientHeight,
              i = a(),
              o = i.w,
              s = i.h,
              p = Math.max(q, Math.min(W, (1 - t / 100) * H)) / H,
              d = x.getBoundingClientRect(),
              f = e.clientX - d.left,
              h = e.clientY - d.top,
              m = ((f - (n - o) / 2 - G / i.scale) / H) * i.scale,
              v = ((h - (r - s) / 2 - X / i.scale) / H) * i.scale,
              g = G + m * (1 - p) * H,
              b = X + v * (1 - p) * H;
            return (
              p > 1
                ? c(g, b, H * p)
                : ((H *= p), ie.dispatch("onZoomChange", H), u(g, b), l()),
              e.preventDefault(),
              !1
            );
          },
          dblclick: function (e) {
            return e.preventDefault(), !1;
          },
        },
        ie = j(new D(), {
          dispatch: function (e) {
            ie.emit.apply(ie, arguments),
              "function" == typeof ie.delegate[e] &&
                ie.delegate[e].apply(
                  ie,
                  Array.prototype.slice.call(arguments, 1)
                );
          },
          initialize: O,
          hide: _,
          show: S,
          reset: E,
          scaleBy: T,
          select: y,
          unselect: w,
          highlight: g,
          unhighlight: b,
          load: m,
          unload: v,
          attach: f,
          detach: h,
          getSVGSource: p,
          getSVGElement: d,
          checkComplete: function () {
            return Z;
          },
          checkShown: function () {
            return !J;
          },
          delegate: {},
          HOTSPOT_HIGHLIGHT_SOLID: 1,
        });
      e.exports = ie;
    },
    function (e, t, n) {
      n(15);
      var r = n(3);
      r.setMaxListeners(0),
        r.baseURL ||
          (r.baseURL =
            document.currentScript &&
            document.currentScript.src.replace(/[^\\\/]+$/, ""));
      var i = n(2),
        o = i.expand,
        a = n(16),
        s = n(0).usedModules;
      console.log(
        "Cortona3D Solo v1.5.6, " + new Date(1533046173e3).toString()
      ),
        (e.exports = o(r, {
          use: function (e, t) {
            var a = s[e],
              u = s.addons[e];
            switch (e) {
              case "core":
                return a
                  ? Promise.resolve(a)
                  : new Promise(function (i, u) {
                      (s[e] = a = { config: o({}, t) }),
                        (r.core = n(22).configure(t)),
                        o(r.app, n(17).app),
                        o(r.app, n(19).app),
                        o(r.app, n(18).app),
                        o(r.app, n(20).app),
                        o(r.app, n(21).app),
                        r.once("core.onRuntimeInitialized", function () {
                          i(a);
                        }),
                        r.once("core.onError", u);
                    });
              case "drawing":
                return (
                  a ||
                    ((s[e] = a = { config: o({}, t) }),
                    o(r.app, n(8).configure(t))),
                  Promise.resolve(a)
                );
              case "Cortona3DSoloTouch":
              case "touch":
                return (
                  a ||
                    ((s[e] = a = { config: o({}, t) }),
                    o(r, n(29).configure(t))),
                  Promise.resolve(a)
                );
              case "require":
                if (!a)
                  return i.detectAMDLoader()
                    ? Promise.reject(
                        new Error("The AMD loader is already on the page.")
                      )
                    : ((s[e] = a = { config: o({}, t) }),
                      o(window, n(23)),
                      (window.require.onError = function () {}),
                      window.require.config(a.config),
                      n(27),
                      n(25),
                      n(24),
                      n(26),
                      n(28),
                      Promise.resolve(a));
                break;
              default:
                if (u) return Promise.resolve(u);
                if (i.detectAMDLoader()) {
                  var c = o({}, t),
                    l = (s.require && s.require.config) || {},
                    p = c.prefixURL || r.baseURL;
                  if (((s.addons[e] = u = { config: c }), !p && s.core)) {
                    var d = n(1).Module;
                    "function" == typeof d.locateFile
                      ? (p = d.locateFile(""))
                      : d.memoryInitializerPrefixURL &&
                        (p = d.memoryInitializerPrefixURL);
                  }
                  (l = o(l, {
                    context: "Cortona3DSolo",
                    baseUrl: p,
                    config: {},
                  })),
                    (l.config[e] = c);
                  var f = window.requirejs.config(l);
                  return new Promise(function (t, n) {
                    f([e], function (e) {
                      return (u.exports = e), t(u);
                    }).catch(n);
                  });
                }
                return Promise.reject(new Error("No AMD loader detected."));
            }
          },
          app: o(n(0).app, {
            util: {
              xmlToJSON: n(9),
              loadResource: i.loadResource,
              toUrl: function (e, t) {
                var n = /^[^\/]+:/,
                  r = e || "";
                return /^data:/i.test(e)
                  ? e
                  : (n.test(r) ||
                      ((r = i.getBaseURL(t) + r),
                      n.test(r) || (r = i.getBaseURL() + r)),
                    r
                      .replace(/(\/\.\/|\/[^\/]+\/\.\.\/)/g, "/")
                      .replace(/([^:])\/{2,}/g, "$1/"));
              },
              b64toBlob: a,
            },
          }),
          expand: o,
          dispatch: function (e, t) {
            r.emit.apply(r, arguments);
            for (var n = e.split("."), i = n.pop(), o = r; n.length && o; )
              o = o[n.shift()];
            if (o && "function" == typeof o[i])
              switch (arguments.length) {
                case 1:
                  o[i].call(r);
                  break;
                case 2:
                  o[i].call(r, arguments[1]);
                  break;
                case 3:
                  o[i].call(r, arguments[1], arguments[2]);
                  break;
                case 4:
                  o[i].call(r, arguments[1], arguments[2], arguments[3]);
                  break;
                case 5:
                  o[i].call(
                    r,
                    arguments[1],
                    arguments[2],
                    arguments[3],
                    arguments[3]
                  );
                  break;
                default:
                  o[i].apply(r, Array.prototype.slice.call(arguments, 1));
              }
          },
        })),
        Object.defineProperty(r, "version", {
          get: function () {
            return "1.5.6";
          },
          enumerable: !0,
        });
    },
  ]);
});
