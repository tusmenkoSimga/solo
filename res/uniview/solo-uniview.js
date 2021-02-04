/*! Cortona3D Solo Universal Viewer 0.1.8 solo-uniview bundle, Copyright (c) 2015-2018 Paragraphics, Ltd. (http://www.cortona3d.com/) */
define(function () {
  return (function (e) {
    function n(t) {
      if (o[t]) return o[t].exports;
      var i = (o[t] = { i: t, l: !1, exports: {} });
      return e[t].call(i.exports, i, i.exports, n), (i.l = !0), i.exports;
    }
    var o = {};
    return (
      (n.m = e),
      (n.c = o),
      (n.d = function (e, o, t) {
        n.o(e, o) ||
          Object.defineProperty(e, o, {
            configurable: !1,
            enumerable: !0,
            get: t,
          });
      }),
      (n.n = function (e) {
        var o =
          e && e.__esModule
            ? function () {
                return e.default;
              }
            : function () {
                return e;
              };
        return n.d(o, "a", o), o;
      }),
      (n.o = function (e, n) {
        return Object.prototype.hasOwnProperty.call(e, n);
      }),
      (n.p = ""),
      n((n.s = 225))
    );
  })({
    0: function (e, n) {
      function o(e, n) {
        var o = e[1] || "",
          i = e[3];
        if (!i) return o;
        if (n && "function" == typeof btoa) {
          var r = t(i);
          return [o]
            .concat(
              i.sources.map(function (e) {
                return "/*# sourceURL=" + i.sourceRoot + e + " */";
              })
            )
            .concat([r])
            .join("\n");
        }
        return [o].join("\n");
      }
      function t(e) {
        return (
          "/*# sourceMappingURL=data:application/json;charset=utf-8;base64," +
          btoa(unescape(encodeURIComponent(JSON.stringify(e)))) +
          " */"
        );
      }
      e.exports = function (e) {
        var n = [];
        return (
          (n.toString = function () {
            return this.map(function (n) {
              var t = o(n, e);
              return n[2] ? "@media " + n[2] + "{" + t + "}" : t;
            }).join("");
          }),
          (n.i = function (e, o) {
            "string" == typeof e && (e = [[null, e, ""]]);
            for (var t = {}, i = 0; i < this.length; i++) {
              var r = this[i][0];
              "number" == typeof r && (t[r] = !0);
            }
            for (i = 0; i < e.length; i++) {
              var a = e[i];
              ("number" == typeof a[0] && t[a[0]]) ||
                (o && !a[2]
                  ? (a[2] = o)
                  : o && (a[2] = "(" + a[2] + ") and (" + o + ")"),
                n.push(a));
            }
          }),
          n
        );
      };
    },
    1: function (e, n) {
      function o(e, n) {
        for (var o = 0; o < e.length; o++) {
          var t = e[o],
            i = d[t.id];
          if (i) {
            i.refs++;
            for (var r = 0; r < i.parts.length; r++) i.parts[r](t.parts[r]);
            for (; r < t.parts.length; r++) i.parts.push(l(t.parts[r], n));
          } else {
            for (var a = [], r = 0; r < t.parts.length; r++)
              a.push(l(t.parts[r], n));
            d[t.id] = { id: t.id, refs: 1, parts: a };
          }
        }
      }
      function t(e) {
        for (var n = [], o = {}, t = 0; t < e.length; t++) {
          var i = e[t],
            r = i[0],
            a = i[1],
            s = i[2],
            l = i[3],
            c = { css: a, media: s, sourceMap: l };
          o[r] ? o[r].parts.push(c) : n.push((o[r] = { id: r, parts: [c] }));
        }
        return n;
      }
      function i(e, n) {
        var o = v(),
          t = w[w.length - 1];
        if ("top" === e.insertAt)
          t
            ? t.nextSibling
              ? o.insertBefore(n, t.nextSibling)
              : o.appendChild(n)
            : o.insertBefore(n, o.firstChild),
            w.push(n);
        else {
          if ("bottom" !== e.insertAt)
            throw new Error(
              "Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'."
            );
          o.appendChild(n);
        }
      }
      function r(e) {
        e.parentNode.removeChild(e);
        var n = w.indexOf(e);
        n >= 0 && w.splice(n, 1);
      }
      function a(e) {
        var n = document.createElement("style");
        return (n.type = "text/css"), i(e, n), n;
      }
      function s(e) {
        var n = document.createElement("link");
        return (n.rel = "stylesheet"), i(e, n), n;
      }
      function l(e, n) {
        var o, t, i;
        if (n.singleton) {
          var l = g++;
          (o = h || (h = a(n))),
            (t = c.bind(null, o, l, !1)),
            (i = c.bind(null, o, l, !0));
        } else
          e.sourceMap &&
          "function" == typeof URL &&
          "function" == typeof URL.createObjectURL &&
          "function" == typeof URL.revokeObjectURL &&
          "function" == typeof Blob &&
          "function" == typeof btoa
            ? ((o = s(n)),
              (t = p.bind(null, o)),
              (i = function () {
                r(o), o.href && URL.revokeObjectURL(o.href);
              }))
            : ((o = a(n)),
              (t = u.bind(null, o)),
              (i = function () {
                r(o);
              }));
        return (
          t(e),
          function (n) {
            if (n) {
              if (
                n.css === e.css &&
                n.media === e.media &&
                n.sourceMap === e.sourceMap
              )
                return;
              t((e = n));
            } else i();
          }
        );
      }
      function c(e, n, o, t) {
        var i = o ? "" : t.css;
        if (e.styleSheet) e.styleSheet.cssText = y(n, i);
        else {
          var r = document.createTextNode(i),
            a = e.childNodes;
          a[n] && e.removeChild(a[n]),
            a.length ? e.insertBefore(r, a[n]) : e.appendChild(r);
        }
      }
      function u(e, n) {
        var o = n.css,
          t = n.media;
        if ((t && e.setAttribute("media", t), e.styleSheet))
          e.styleSheet.cssText = o;
        else {
          for (; e.firstChild; ) e.removeChild(e.firstChild);
          e.appendChild(document.createTextNode(o));
        }
      }
      function p(e, n) {
        var o = n.css,
          t = n.sourceMap;
        t &&
          (o +=
            "\n/*# sourceMappingURL=data:application/json;base64," +
            btoa(unescape(encodeURIComponent(JSON.stringify(t)))) +
            " */");
        var i = new Blob([o], { type: "text/css" }),
          r = e.href;
        (e.href = URL.createObjectURL(i)), r && URL.revokeObjectURL(r);
      }
      var d = {},
        f = function (e) {
          var n;
          return function () {
            return void 0 === n && (n = e.apply(this, arguments)), n;
          };
        },
        m = f(function () {
          return /msie [6-9]\b/.test(self.navigator.userAgent.toLowerCase());
        }),
        v = f(function () {
          return document.head || document.getElementsByTagName("head")[0];
        }),
        h = null,
        g = 0,
        w = [];
      e.exports = function (e, n) {
        if ("undefined" != typeof DEBUG && DEBUG && "object" != typeof document)
          throw new Error(
            "The style-loader cannot be used in a non-browser environment"
          );
        (n = n || {}),
          void 0 === n.singleton && (n.singleton = m()),
          void 0 === n.insertAt && (n.insertAt = "bottom");
        var i = t(e);
        return (
          o(i, n),
          function (e) {
            for (var r = [], a = 0; a < i.length; a++) {
              var s = i[a],
                l = d[s.id];
              l.refs--, r.push(l);
            }
            if (e) {
              o(t(e), n);
            }
            for (var a = 0; a < r.length; a++) {
              var l = r[a];
              if (0 === l.refs) {
                for (var c = 0; c < l.parts.length; c++) l.parts[c]();
                delete d[l.id];
              }
            }
          }
        );
      };
      var y = (function () {
        var e = [];
        return function (n, o) {
          return (e[n] = o), e.filter(Boolean).join("\n");
        };
      })();
    },
    225: function (e, n, o) {
      var t;
      void 0 !==
        (t = function (e, n, t) {
          o(226), o(228);
          window.addEventListener("contextmenu", function (e) {
            e.preventDefault();
          }),
            window.addEventListener("mousedown", function (e) {
              1 & e.shiftKey && e.preventDefault();
            }),
            (t.exports = function (e, n, t) {
              function i(n, o) {
                e.render(c, {
                  hideDismissButton: !o,
                  title: "Error",
                  content: e.p("", e.create("pre", "", n.message)),
                }).then(function (e) {
                  e.classList.add("error");
                });
              }
              function r() {
                t.core && t.core.didChangeLayout();
              }
              function a(e) {
                if ("ipc" === e.type && 2 == +e.options.IllustrationType) {
                  var o = e.interactivity.json
                    .$("ipc/figure/media")[0]
                    .$attr("src");
                  if (o)
                    return t.app.util
                      .loadResource(n.src, "text/xml")
                      .then(function (i) {
                        var r = new RegExp('src="' + o + '"', ""),
                          a = i.responseText
                            .replace(r, "")
                            .replace(/src="([^"]*)"/g, function (e, o) {
                              return 'src="' + t.app.util.toUrl(o, n.src) + '"';
                            });
                        return (
                          (n.src = URL.createObjectURL(
                            new Blob([a], { type: "text/xml" })
                          )),
                          e
                        );
                      });
                }
                return e;
              }
              var s = n.components || {},
                l = s.uiProgress || o(230),
                c = s.uiModal || o(3),
                u = s.uiLoading || o(233);
              e.element.setAttribute("role", "application"),
                t.on("uniview.error", function (e, n) {
                  i(e, n);
                }),
                window.addEventListener("error", i),
                e.render(l);
              var p,
                d,
                f = e.classList,
                m = {},
                v = e.register(u);
              return (
                v.start(),
                t.on("uniview.toggleMainPanelOnlyMode", function (e) {
                  e
                    ? (f.add("cortona3dsolo-main-only"),
                      f.remove("cortona3dsolo-aux-only"))
                    : f.remove("cortona3dsolo-main-only"),
                    r();
                }),
                t.on("uniview.toggleAuxPanelOnlyMode", function (e) {
                  e
                    ? (f.add("cortona3dsolo-aux-only"),
                      f.remove("cortona3dsolo-main-only"))
                    : f.remove("cortona3dsolo-aux-only"),
                    r();
                }),
                t.on("uniview.showAllPanels", function () {
                  f.remove("cortona3dsolo-aux-only"),
                    f.remove("cortona3dsolo-main-only"),
                    r();
                }),
                Promise.resolve(t.version)
                  .then(function (e) {
                    return !e ||
                      parseFloat(e.split(".").slice(0, 2).join(".")) < 1.5
                      ? Promise.reject(
                          new Error(
                            "Incompatible version of the Cortona3D Solo library. The version must be 1.5.0 and higher."
                          )
                        )
                      : Promise.resolve(n.src);
                  })
                  .then(function (o) {
                    debugger;
                    var i = [t.use("Cortona3DSoloTouch")];
                    return /\.(svg|jpe?g|png|tiff?)/i.test(o)
                      ? (t.emit("uniview.toggleMainPanelOnlyMode", !0),
                        (p = document.createElementNS(
                          "http://www.w3.org/2000/svg",
                          "svg"
                        )),
                        i.push(
                          t.use("drawing", t.expand({}, n, { element: p }))
                        ),
                        i)
                      : (o ? t.app.loadCompanionFile(o) : Promise.reject())
                          .catch(function () {
                            return Promise.resolve({
                              options: { IllustrationType: 0 },
                            });
                          })
                          .then(function (e) {
                            return a(e);
                          })
                          .then(function (o) {
                            switch (
                              ((m = o),
                              ("ipc" === o.type
                                ? 0
                                : +o.options.IllustrationType) || 0)
                            ) {
                              case 0:
                              case 1:
                                o.options.TotalMemory &&
                                  o.options.TotalMemory > n.totalMemory &&
                                  (n.totalMemory = +o.options.TotalMemory),
                                  (p = e.create("canvas")),
                                  i.push(t.use("drawing")),
                                  i.push(
                                    t.use(
                                      "core",
                                      t.expand({}, n, {
                                        element: p,
                                        features:
                                          t.app
                                            .ENABLE_NAVIGATION_FIT_TO_OBJECT |
                                          t.app
                                            .DRAWING_HOTSPOT_HIGHLIGHT_SOLID |
                                          (n.features || 0),
                                      })
                                    )
                                  );
                                break;
                              case 2:
                                if (
                                  (t.emit("uniview.toggleAuxPanelOnlyMode", !0),
                                  (p = document.createElementNS(
                                    "http://www.w3.org/2000/svg",
                                    "svg"
                                  )),
                                  i.push(t.use("drawing", { element: p })),
                                  o.type)
                                ) {
                                  var r = {};
                                  (r[o.type] = {
                                    interactivity: o.interactivity,
                                  }),
                                    t.expand(t.app, r);
                                }
                            }
                            return i;
                          });
                  })
                  .then(function (n) {
                    return (
                      t.core && (t.core.print = console.info.bind(console)),
                      (d = {
                        header: e.create("header.solo-uniview-header"),
                        footer: e.create("footer.solo-uniview-footer"),
                        content: e.create("main.solo-uniview-content"),
                        main: e.div(".main.panel"),
                        aux: e.div(".aux.panel"),
                        view: e.div(".panel-view", p),
                      }),
                      d.main.append(d.view),
                      d.content.append(d.main, d.aux),
                      e.append(d.header, d.content, d.footer),
                      n.push(t.app.initialize()),
                      Promise.all(n)
                    );
                  })
                  .then(function (e) {
                    v.init();
                    var o = t.expand(m, e[e.length - 1]),
                      i = t.app[o.type] && t.app[o.type].interactivity,
                      r = (t.uniview && t.uniview.options) || {},
                      a = (t.uniview && t.uniview.i18n) || {},
                      s = (i && i.getOptions()) || o.options || {},
                      l = (o.specificationName || s.SpecID || "").trim(),
                      c = o.type,
                      u = r.specMap || {},
                      p = ("uniview-" + c).toLowerCase(),
                      d = l ? u[l] || (n.baseUrl || "") + l.toLowerCase() : p,
                      f = (s.SpecLang || "en").toLowerCase();
                    "procedure" === c &&
                      l &&
                      (p = (n.baseUrl || "") + "generic_prc"),
                      (t.uniview = {
                        config: t.expand(
                          { appType: d, altType: p, lang: f, src: "" },
                          n
                        ),
                        i18n: a,
                        with3D: (+s.IllustrationType || 0) < 2,
                        doc: o,
                        options: t.expand(s, r),
                        metadata:
                          (i && i.getProjectMetadata()) || o.metadata || {},
                        ixml: i || o.interactivity,
                        version: "0.1.8",
                        description: "Cortona3D Solo Universal Viewer",
                        customization: {
                          module: d,
                          description: d,
                          version: "",
                        },
                      });
                    var h = t.uniview.config.src.substring(
                      t.uniview.config.src.lastIndexOf("/") + 1
                    );
                    return (
                      (document.title =
                        (t.uniview.metadata.TITLE
                          ? t.uniview.metadata.TITLE
                          : h) +
                        " - " +
                        t.uniview.description),
                      requirejs(
                        [
                          "json!static/i18n/" +
                            t.uniview.config.lang +
                            "/solo-uniview.json",
                        ],
                        function (e) {
                          return Promise.resolve(e);
                        }
                      ).catch(function () {
                        return "en" === t.uniview.config.lang
                          ? Promise.resolve({})
                          : requirejs(
                              ["json!static/i18n/en/solo-uniview.json"],
                              function (e) {
                                return Promise.resolve(e);
                              }
                            ).catch(function () {
                              return Promise.resolve({});
                            });
                      })
                    );
                  })
                  .then(function (e) {
                    return requirejs(
                      [
                        "json!" +
                          t.uniview.customization.module +
                          "-locale-" +
                          t.uniview.config.lang +
                          ".json",
                      ],
                      function (n) {
                        return Promise.resolve(
                          t.expand({}, e, n, t.uniview.i18n)
                        );
                      }
                    ).catch(function () {
                      return "en" === t.uniview.config.lang
                        ? Promise.resolve(t.expand({}, e, t.uniview.i18n))
                        : requirejs(
                            [
                              "json!" +
                                t.uniview.customization.module +
                                "-locale-en.json",
                            ],
                            function (n) {
                              return Promise.resolve(
                                t.expand({}, e, n, t.uniview.i18n)
                              );
                            }
                          ).catch(function () {
                            return Promise.resolve(
                              t.expand({}, e, t.uniview.i18n)
                            );
                          });
                    });
                  })
                  .then(function (o) {
                    t.uniview.i18n = o;
                    var i = "";
                    (i +=
                      ".main.panel { flex-basis: " +
                      (t.uniview.options["3DFrameSize"] || 50) +
                      "%;}"),
                      (i +=
                        ".aux.panel { flex-basis: " +
                        (100 - (t.uniview.options["3DFrameSize"] || 50)) +
                        "%; }"),
                      (document.head.appendChild(
                        document.createElement("style")
                      ).innerHTML = i),
                      "Right" === t.uniview.options["3DFramePosition"] &&
                        e.classList.add("layout-reverse");
                    var r,
                      a = t.expand(
                        {
                          panel: d,
                          singleDisplayMode: !!+t.uniview.options
                            .IllustrationType,
                          helpAction: function () {
                            var e = function (e) {
                                return requirejs.toUrl(
                                  "static/help/" +
                                    t.uniview.doc.type +
                                    "/" +
                                    e +
                                    "/help.html"
                                );
                              },
                              n =
                                t.uniview.options.helpUrl ||
                                e(t.uniview.config.lang);
                            if (r)
                              try {
                                r.close();
                              } catch (e) {}
                            t.app.util
                              .loadResource(n)
                              .then(function () {
                                return n;
                              })
                              .catch(function () {
                                return Promise.resolve(e("en"));
                              })
                              .then(function (e) {
                                r = window.open(
                                  e,
                                  "",
                                  "statusbar=no,resizable=yes,scrollbars=yes,width=750,height=600"
                                );
                              });
                          },
                        },
                        t.uniview.options
                      );
                    return e
                      .use(n.factory || t.uniview.customization.module, a)
                      .catch(function (o) {
                        return !n.disableAlternateSkin &&
                          /loading/i.test(o.message)
                          ? (console.log(
                              'Switching to alternate skin "' +
                                t.uniview.config.altType +
                                '"'
                            ),
                            (t.uniview.customization.module =
                              t.uniview.config.altType),
                            (t.uniview.customization.description =
                              "(alternate)"),
                            e.use(t.uniview.customization.module, a))
                          : Promise.reject(o);
                      });
                  })
                  .then(
                    function () {
                      return (
                        v.success(),
                        r(),
                        t.dispatch("uniview.ready", t.uniview),
                        t.uniview
                      );
                    },
                    function (e) {
                      v.failed();
                      var n =
                        "string" == typeof e
                          ? new Error(e)
                          : e || new Error("Unknown exception");
                      return i(n), Promise.reject(n);
                    }
                  )
              );
            });
        }.call(n, o, n, e)) && (e.exports = t);
    },
    226: function (e, n, o) {
      var t = o(227);
      "string" == typeof t && (t = [[e.i, t, ""]]);
      o(1)(t, {});
      t.locals && (e.exports = t.locals);
    },
    227: function (e, n, o) {
      (n = e.exports = o(0)(!1)),
        n.push([
          e.i,
          "body,html{margin:0;height:100%;font-family:Segoe UI,Tahoma,Geneva,Verdana,sans-serif;font-size:100%}",
          "",
        ]);
    },
    228: function (e, n, o) {
      var t = o(229);
      "string" == typeof t && (t = [[e.i, t, ""]]);
      o(1)(t, {});
      t.locals && (e.exports = t.locals);
    },
    229: function (e, n, o) {
      (n = e.exports = o(0)(!1)),
        n.push([
          e.i,
          "body{overflow:hidden}.skin-holder-app{flex-flow:column;font-size:10pt}.skin-holder-app.layout-reverse .solo-uniview-content{flex-flow:row-reverse}.panel{margin:.5em;flex:1 1 50%;position:relative;border:1px solid gray;box-sizing:border-box}.solo-uniview-content{flex-flow:row;display:flex;flex:1 0}.cortona3dsolo-aux-only .main.panel,.cortona3dsolo-main-only .aux.panel{display:none}.aux.panel{border:none;overflow:auto}.main.panel .panel-view{position:relative;height:100%;flex-grow:1}.loading .panel{display:none}@media (max-width:767px){.panel{margin:.1em}}@media (orientation:portrait){.solo-uniview-content{flex-flow:column!important}.panel{flex-basis:50%!important}}",
          "",
        ]);
    },
    230: function (e, n, o) {
      var t;
      void 0 !==
        (t = function (e, n, t) {
          o(231),
            (t.exports = function (e, n, o) {
              function t(e) {
                (e = e || 0), 100 == e && (e = 0), (i.style.width = e + "%");
              }
              var i = e.create("div.skin-progress-bar");
              return (
                n.color && (i.style.backgroundColor = n.color),
                n.height && (i.style.height = n.height),
                o.on("app.onProgress", function (e, n) {
                  t(Math.floor((100 * e) / n));
                }),
                this.exports(i, { set: t })
              );
            });
        }.call(n, o, n, e)) && (e.exports = t);
    },
    231: function (e, n, o) {
      var t = o(232);
      "string" == typeof t && (t = [[e.i, t, ""]]);
      o(1)(t, {});
      t.locals && (e.exports = t.locals);
    },
    232: function (e, n, o) {
      (n = e.exports = o(0)(!1)),
        n.push([
          e.i,
          ".skin-progress-bar{position:absolute;bottom:0;height:2em;left:0;width:0;background-color:#2f4f4f;z-index:100}",
          "",
        ]);
    },
    233: function (e, n, o) {
      var t;
      void 0 !==
        (t = function (e, n, t) {
          o(234),
            (t.exports = function (e, n, o) {
              var t = e.classList,
                i = n.i18n || {
                  loading: "Loading",
                  initializing: "Initializing",
                  failed: "Failed",
                };
              return (
                (document.head.appendChild(
                  document.createElement("style")
                ).innerHTML =
                  '.loading:before{content:"' +
                  i.loading +
                  '";}.loading.init:before{content:"' +
                  i.initializing +
                  '";}.loading.error:before{content: "' +
                  i.failed +
                  '";}'),
                this.exports(null, {
                  start: function () {
                    t.add("loading");
                  },
                  init: function () {
                    t.add("init");
                  },
                  success: function () {
                    t.remove("loading"), t.remove("init");
                  },
                  failed: function () {
                    t.add("error");
                  },
                })
              );
            });
        }.call(n, o, n, e)) && (e.exports = t);
    },
    234: function (e, n, o) {
      var t = o(235);
      "string" == typeof t && (t = [[e.i, t, ""]]);
      o(1)(t, {});
      t.locals && (e.exports = t.locals);
    },
    235: function (e, n, o) {
      (n = e.exports = o(0)(!1)),
        n.push([
          e.i,
          ".loading:before{position:absolute;top:50%;left:0;right:0;margin-top:-1em;text-align:center;font-family:Verdana,Geneva,Tahoma,sans-serif;font-size:2rem;font-weight:700;color:#a9a9a9}",
          "",
        ]);
    },
    3: function (e, n, o) {
      var t;
      void 0 !==
        (t = function (e, n, t) {
          o(4),
            (t.exports = function (e, n, o) {
              function t() {
                s && (i.remove(), i.emit("close"), (s = null));
              }
              var i = this,
                r = n.i18n || { close: "OK" },
                a =
                  n.hideDismissButton && !n.footerContent
                    ? ""
                    : e.container(
                        ".skin-modal-footer",
                        n.footerContent,
                        n.hideDismissButton
                          ? ""
                          : e.button({ onclick: t }, r.close)
                      ),
                s = e.container(
                  ".skin-modal.cortona3dsolo-popover",
                  e.panel(
                    "",
                    e.container(
                      ".skin-modal-inner",
                      e.container(".skin-modal-title", n.title || ""),
                      e.container(".skin-modal-content", n.content || ""),
                      a
                    )
                  )
                );
              if (!n.disableAutoDismiss && n.hideDismissButton) {
                var l = function (e) {
                  s.removeEventListener("mousedown", l), t();
                };
                s.addEventListener("mousedown", l);
              }
              return e.on("modal.close", t), this.exports(s, { close: t });
            });
        }.call(n, o, n, e)) && (e.exports = t);
    },
    4: function (e, n, o) {
      var t = o(5);
      "string" == typeof t && (t = [[e.i, t, ""]]);
      o(1)(t, {});
      t.locals && (e.exports = t.locals);
    },
    5: function (e, n, o) {
      (n = e.exports = o(0)(!1)),
        n.push([
          e.i,
          ".skin-modal{position:absolute;top:0;left:0;width:100%;height:100%;background-color:rgba(0,0,0,.33);z-index:1000;justify-content:center;align-items:center;display:flex}.skin-modal .skin-panel{position:relative;box-shadow:2px 4px 28px rgba(0,0,0,.25),2px 4px 10px rgba(0,0,0,.22);background-color:#fff;color:#000;min-width:5em;max-width:80%;max-height:90%;padding:0;flex-direction:column}.skin-modal-inner{display:flex;flex-direction:column;align-items:stretch;position:relative;height:100%}.skin-modal-title{font-size:1.2em;font-weight:700;padding:.2em .5em;background-color:#ccc;color:#000;min-height:.5em}.skin-modal.error pre{font-family:inherit;white-space:pre-wrap}.skin-modal.error .skin-modal-title,.skin-modal.warning .skin-modal-title{background-color:#ce3a3a;color:#fff}.skin-modal.caution .skin-modal-title{background-color:#f90}.skin-modal.note .skin-modal-title{background-color:#70a8fd}.skin-modal.caution:before,.skin-modal.error:before,.skin-modal.note:before{display:none}.skin-modal-content.skin-container{display:block;padding:1em 2em;overflow-y:auto}.skin-modal-content .accent{font-weight:700}.skin-modal-footer{display:flex;justify-content:flex-end;padding:.5em;min-height:fit-content}",
          "",
        ]);
    },
  });
});
