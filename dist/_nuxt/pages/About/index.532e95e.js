(window.webpackJsonp = window.webpackJsonp || []).push([
  [2],
  {
    161: function (e, t, n) {
      var content = n(164);
      "string" == typeof content && (content = [[e.i, content, ""]]),
        content.locals && (e.exports = content.locals);
      (0, n(44).default)("f808a1a4", content, !0, { sourceMap: !1 });
    },
    162: function (e, t, n) {
      var content = n(174);
      "string" == typeof content && (content = [[e.i, content, ""]]),
        content.locals && (e.exports = content.locals);
      (0, n(44).default)("093d62e4", content, !0, { sourceMap: !1 });
    },
    163: function (e, t, n) {
      "use strict";
      var o = n(161);
      n.n(o).a;
    },
    164: function (e, t, n) {
      (t = n(43)(!1)).push([
        e.i,
        "svg[data-v-02ccd04c]{position:fixed;z-index:3;bottom:10px;width:50px;height:50px;border-radius:25px;border:1px solid grey;cursor:pointer;transition:right var(--transition-duration)}",
        "",
      ]),
        (e.exports = t);
    },
    171: function (e, t, n) {
      "use strict";
      n.r(t);
      var o = n(9),
        r = {
          props: { buttonMapOnShow: Boolean },
          data: function () {
            return { store: o.a };
          },
          computed: {
            rightPosition: function () {
              return this.buttonMapOnShow ? "64px" : "7px";
            },
          },
        },
        l = (n(163), n(15)),
        component = Object(l.a)(
          r,
          function () {
            var e = this,
              t = e.$createElement,
              o = e._self._c || t;
            return o(
              "svg",
              {
                style: { right: e.rightPosition },
                attrs: {
                  tabindex: "0",
                  xmlns: "http://www.w3.org/2000/svg",
                  "xmlns:xlink": "http://www.w3.org/1999/xlink",
                  viewBox: "-70 -70 140 140",
                  version: "1.1",
                },
                on: {
                  click: function (t) {
                    t.preventDefault(),
                      (e.store.menu.onShow = !e.store.menu.onShow),
                      (e.store.menu.initialLoad = !0);
                  },
                  keyup: [
                    function (t) {
                      if (
                        !t.type.indexOf("key") &&
                        e._k(t.keyCode, "space", 32, t.key, [" ", "Spacebar"])
                      )
                        return null;
                      (e.store.menu.onShow = !e.store.menu.onShow),
                        (e.store.menu.initialLoad = !0);
                    },
                    function (t) {
                      if (
                        !t.type.indexOf("key") &&
                        e._k(t.keyCode, "enter", 13, t.key, "Enter")
                      )
                        return null;
                      (e.store.menu.onShow = !0),
                        (e.store.menu.initialLoad = !0);
                    },
                    function (t) {
                      if (
                        !t.type.indexOf("key") &&
                        e._k(t.keyCode, "esc", 27, t.key, ["Esc", "Escape"])
                      )
                        return null;
                      e.store.menu.onShow = !1;
                    },
                  ],
                },
              },
              [
                o("g", { attrs: { fill: "none", "stroke-width": ".1" } }, [
                  o("circle", {
                    attrs: {
                      r: "70",
                      fill: "hsla(44,100%,88%,70%)",
                      stroke: "#000",
                      "stroke-width": ".1",
                    },
                  }),
                ]),
                e._v(" "),
                o("image", {
                  attrs: {
                    "xlink:href": n(80),
                    x: "-50",
                    y: "-50",
                    width: "40%",
                    height: "40%",
                  },
                }),
                e._v(" "),
                o(
                  "g",
                  {
                    attrs: {
                      fill: "none",
                      stroke: "#000",
                      "stroke-width": "6",
                      transform: "translate(30,-30)",
                    },
                  },
                  [
                    o("circle", { attrs: { r: "12" } }),
                    e._v(" "),
                    o("path", {
                      attrs: { d: "m10 10 15 15", "stroke-linecap": "round" },
                    }),
                  ]
                ),
                e._v(" "),
                o(
                  "text",
                  {
                    attrs: {
                      x: "0",
                      y: "40",
                      fill: "#000",
                      "font-family": "serif",
                      "font-size": "40px",
                      "text-anchor": "middle",
                      textLength: "75%",
                    },
                  },
                  [e._v("About")]
                ),
              ]
            );
          },
          [],
          !1,
          null,
          "02ccd04c",
          null
        );
      t.default = component.exports;
    },
    173: function (e, t, n) {
      "use strict";
      var o = n(162);
      n.n(o).a;
    },
    174: function (e, t, n) {
      (t = n(43)(!1)).push([
        e.i,
        'body[data-v-03ebddfb]{margin:0}.root[data-v-03ebddfb]{display:flex;justify-content:center;background-color:#ffefc2;padding:10px;font-family:"DejaVu Serif",serif;line-height:1.4}main[data-v-03ebddfb]{margin-top:2em;width:min(900px,70%);margin-bottom:60vh}summary[data-v-03ebddfb]{font-size:1.5em;font-weight:700;margin:10px;padding:5px;outline:none}summary[data-v-03ebddfb]::-webkit-details-marker{display:none}summary[data-v-03ebddfb]:hover{background-color:hsla(61,73%,30%,70%);box-shadow:0 0 2px 2px hsla(61,73%,30%,70%);border-radius:5px}section[data-v-03ebddfb]{padding:10px 10px 2em;text-align:justify}form[data-v-03ebddfb]{padding:2em}.aspect-ratio[data-v-03ebddfb]{width:calc(100% - 20px);height:calc(min(900px, 70vw)*3/5)}@media (max-width:640px){main[data-v-03ebddfb]{width:100%}.aspect-ratio[data-v-03ebddfb]{height:60vw}}',
        "",
      ]),
        (e.exports = t);
    },
    197: function (e, t, n) {
      "use strict";
      n.r(t);
      var o =
          "Disqus shortname is required. (To resolve this, go to: https://ktquez.github.io/vue-disqus/setup.html#installation)",
        r = [
          "api_key",
          "author_s3",
          "category_id",
          "identifier",
          "integration",
          "language",
          "remote_auth_s3",
          "slug",
          "title",
          "url",
        ],
        l = ["name", "button", "icon", "url", "logout", "width", "height"],
        i = [
          "afterRender",
          "onInit",
          "onIdentify",
          "beforeComment",
          "onNewComment",
          "onPaginate",
          "onReady",
          "preData",
          "preInit",
          "preReset",
        ],
        s = function (e) {
          return requestAnimationFrame(function () {
            return requestAnimationFrame(e);
          });
        };
      function h(e, t, n, i, s, o, r, a, u, l) {
        "boolean" != typeof r && ((u = a), (a = r), (r = !1));
        var h,
          d = "function" == typeof n ? n.options : n;
        if (
          (e &&
            e.render &&
            ((d.render = e.render),
            (d.staticRenderFns = e.staticRenderFns),
            (d._compiled = !0),
            s && (d.functional = !0)),
          i && (d._scopeId = i),
          o
            ? ((h = function (e) {
                (e =
                  e ||
                  (this.$vnode && this.$vnode.ssrContext) ||
                  (this.parent &&
                    this.parent.$vnode &&
                    this.parent.$vnode.ssrContext)) ||
                  "undefined" == typeof __VUE_SSR_CONTEXT__ ||
                  (e = __VUE_SSR_CONTEXT__),
                  t && t.call(this, u(e)),
                  e &&
                    e._registeredComponents &&
                    e._registeredComponents.add(o);
              }),
              (d._ssrRegister = h))
            : t &&
              (h = r
                ? function (e) {
                    t.call(this, l(e, this.$root.$options.shadowRoot));
                  }
                : function (e) {
                    t.call(this, a(e));
                  }),
          h)
        )
          if (d.functional) {
            var c = d.render;
            d.render = function (e, t) {
              return h.call(t), c(e, t);
            };
          } else {
            var f = d.beforeCreate;
            d.beforeCreate = f ? [].concat(f, h) : [h];
          }
        return n;
      }
      var d = h(
          {
            render: function () {
              var e = this.$createElement;
              return (this._self._c || e)("div", {
                staticStyle: { "min-height": "200px" },
                attrs: { id: "disqus_thread" },
              });
            },
            staticRenderFns: [],
          },
          void 0,
          {
            name: "Disqus",
            props: {
              shortname: String,
              pageConfig: {
                type: Object,
                validator: function (e) {
                  return Object.keys(e).every(function (e) {
                    return r.includes(e);
                  });
                },
              },
              ssoConfig: {
                type: Object,
                validator: function (e) {
                  return Object.keys(e).every(function (e) {
                    return l.includes(e);
                  });
                },
              },
              lang: { type: String, default: "en" },
              lazy: { type: Boolean, default: !0 },
              lazyConfig: {
                type: Object,
                default: function () {
                  return { root: null, rootMargin: "300px", threshold: 0.5 };
                },
              },
            },
            data: function () {
              return { observer: null };
            },
            computed: {
              getShortname: function () {
                var e = this.shortname
                  ? this.shortname
                  : this.$disqus
                  ? this.$disqus.shortname
                  : null;
                if (!e) throw new Error(o);
                return e;
              },
            },
            watch: {
              lang: function () {
                this.reset();
              },
            },
            mounted: function () {
              if (this.lazy) return this.observerDisqus();
              this.init();
            },
            methods: {
              init: function () {
                var e = this;
                if (
                  (this.$disqus && (this.$disqus.reset = this.reset),
                  window.DISQUS)
                )
                  return this.reset();
                var t = this.setBaseConfig;
                (window.disqus_config = function () {
                  t(this);
                }),
                  this.loadEmbedScript(),
                  this.$route &&
                    this.$watch("$route.path", function () {
                      return e.reset();
                    });
              },
              reset: function (e) {
                void 0 === e && (e = window.DISQUS);
                var t = this.setBaseConfig;
                e.reset({
                  reload: !0,
                  config: function () {
                    t(this);
                  },
                });
              },
              observerDisqus: function () {
                if ("IntersectionObserver" in window)
                  return (
                    (this.observer = new IntersectionObserver(
                      this.handleObserver,
                      this.lazyConfig
                    )),
                    this.observer.observe(this.$el)
                  );
                this.init();
              },
              handleObserver: function (e) {
                var t = this;
                e.forEach(function (e) {
                  e.isIntersecting && (t.observer.disconnect(), t.init());
                });
              },
              loadEmbedScript: function () {
                var e = document,
                  t = e.createElement("script");
                t.setAttribute("id", "embed-disqus"),
                  t.setAttribute("data-timestamp", +new Date()),
                  (t.type = "text/javascript"),
                  (t.async = !0),
                  (t.src = "//" + this.getShortname + ".disqus.com/embed.js"),
                  (e.head || e.body).appendChild(t);
              },
              setBaseConfig: function (e) {
                this.setPageConfig(e),
                  this.cbDisqus(e),
                  this.ssoConfig &&
                    Object.keys(this.ssoConfig).length &&
                    Object.assign(e.sso, this.ssoConfig),
                  (e.language = this.lang);
              },
              setPageConfig: function (e) {
                var t = {
                  url: document.baseURI,
                  identifier: this.$route
                    ? this.$route.path
                    : window.location.pathname,
                };
                Object.assign(e.page, t),
                  this.pageConfig &&
                    Object.keys(this.pageConfig).length &&
                    Object.assign(e.page, this.pageConfig);
              },
              cbDisqus: function (e) {
                var t = this;
                i.forEach(function (n) {
                  e.callbacks[n] = [
                    function (e) {
                      t.$emit(
                        n
                          .replace(/([a-z0-9])([A-Z])/g, "$1-$2")
                          .toLowerCase()
                          .replace("on-", ""),
                        e
                      );
                    },
                  ];
                });
              },
            },
          },
          void 0,
          !1,
          void 0,
          !1,
          void 0,
          void 0,
          void 0
        ),
        a = h(
          {
            render: function () {
              var e = this.$createElement;
              return (this._self._c || e)(this.tag, {
                tag: "component",
                staticClass: "disqus-comment-count",
                attrs: {
                  href: this.getHref,
                  "data-disqus-url": this.getUrl,
                  "data-disqus-identifier": this.identifier,
                },
              });
            },
            staticRenderFns: [],
          },
          void 0,
          {
            name: "DisqusCount",
            inheritAttrs: !1,
            props: {
              url: String,
              shortname: String,
              identifier: { type: String, required: !0 },
              tag: { type: String, default: "span" },
            },
            mounted: function () {
              this.init();
            },
            computed: {
              getHref: function () {
                return "a" === this.tag ? this.url + "#disqus_thread" : null;
              },
              getUrl: function () {
                return "span" === this.tag ? this.url : null;
              },
              getShortname: function () {
                var e = this.shortname
                  ? this.shortname
                  : this.$disqus
                  ? this.$disqus.shortname
                  : null;
                if (!e) throw new Error(o);
                return e;
              },
            },
            methods: {
              init: function () {
                var e = this;
                if ("DISQUSWIDGETS" in window)
                  return s(function () {
                    return e.reset();
                  });
                this.loadCountScript(),
                  this.$route &&
                    this.$watch("$route.path", function () {
                      return s(function () {
                        return e.reset();
                      });
                    });
              },
              reset: function (e) {
                void 0 === e && (e = window.DISQUSWIDGETS),
                  e.getCount({ reset: !0 });
              },
              loadCountScript: function () {
                if (!document.getElementById("dsq-count-scr")) {
                  var e = document,
                    t = e.createElement("script");
                  (t.async = !0),
                    (t.id = "dsq-count-scr"),
                    (t.src = "//" + this.getShortname + ".disqus.com/count.js"),
                    (e.head || e.body).appendChild(t);
                }
              },
            },
          },
          void 0,
          !1,
          void 0,
          !1,
          void 0,
          void 0,
          void 0
        );
      function u(e, t) {
        void 0 === t && (t = {}),
          e.component("Disqus", d),
          e.component("DisqusCount", a),
          (e.prototype.$disqus = {
            shortname: t.shortname || null,
            reset: null,
          });
      }
      "undefined" != typeof window &&
        void 0 !== window.Vue &&
        window.Vue.use(u);
      var c = { components: { Disqus: d } },
        f = (n(173), n(15)),
        component = Object(f.a)(
          c,
          function () {
            var e = this,
              t = e.$createElement,
              n = e._self._c || t;
            return n(
              "div",
              { staticClass: "root" },
              [
                n("main", [
                  e._m(0),
                  e._v(" "),
                  e._m(1),
                  e._v(" "),
                  n("details", [
                    n("summary", [e._v("Connection")]),
                    e._v(" "),
                    n("section", [
                      n("p", [
                        e._v(
                          "\n            Chronological order can be made in more than one way. \n            Merging verses of the same event from multiple \n            authors in a way that they provide completeness and a smooth \n            reading experience at the same time, is also not straightforward. \n            Locations and reference week ranges are not always obvious either. \n            Main titles, subtitles are also subjective.\n            We can make the content of this site really good together only.\n          "
                        ),
                      ]),
                      e._v(" "),
                      n("p", [
                        e._v(
                          "\n            Should you want to discuss your observations or thoughts, \n            please feel free to start or join a topic in this forum.\n          "
                        ),
                      ]),
                      e._v(" "),
                      n(
                        "p",
                        [
                          n("Disqus", {
                            attrs: { shortname: "harmony-of-gospels" },
                          }),
                        ],
                        1
                      ),
                      e._v(" "),
                      e._m(2),
                    ]),
                  ]),
                  e._v(" "),
                  e._m(3),
                  e._v(" "),
                  e._m(4),
                ]),
                e._v(" "),
                n("ButtonMenu"),
              ],
              1
            );
          },
          [
            function () {
              var e = this.$createElement,
                t = this._self._c || e;
              return t("details", [
                t("summary", [this._v("Movie")]),
                this._v(" "),
                t("section", { staticClass: "aspect-ratio" }, [
                  t("iframe", {
                    attrs: {
                      title: "Jesus Of Nazareth (1977) - full movie",
                      type: "text/html",
                      width: "100%",
                      height: "100%",
                      border: "none",
                      frameborder: "0",
                      allowfullscreen: "true",
                      src:
                        "https://www.youtube.com/embed/50IiF1rTTGQ?controls=1",
                    },
                  }),
                ]),
              ]);
            },
            function () {
              var e = this,
                t = e.$createElement,
                n = e._self._c || t;
              return n("details", [
                n("summary", [e._v("About")]),
                e._v(" "),
                n("section", [
                  n("p", [
                    e._v(
                      "\n            The goal of this project is to present the four Gospels (Jesus \n            words and acts) in an attractive and easy to understand way.\n          "
                    ),
                  ]),
                  e._v(" "),
                  n("p", [
                    e._v(
                      "\n            The building blocks are events. Thus if an event is described \n            by multiple authors then all of those descriptions are grouped and \n            available in parallel. This grouping is called synoptic Gospels.\n          "
                    ),
                  ]),
                  e._v(" "),
                  n("p", [
                    e._v(
                      "\n            On top of this well-known synoptic grouping, the events are listed \n            in chronological order mainly based on the thoughts shared on the \n            website \n            "
                    ),
                    n(
                      "a",
                      {
                        attrs: {
                          target: "_blank",
                          rel: "noopener noreferrer",
                          href: "http://4gospels.info/",
                        },
                      },
                      [
                        e._v("\n              4gospels.info"),
                        n(
                          "span",
                          {
                            staticStyle: {
                              display: "inline-block",
                              transform: "scale(-1,1)",
                            },
                          },
                          [e._v("⇱")]
                        ),
                      ]
                    ),
                    e._v(
                      ". \n            There are many alterations regarding the timeline, \n            however, the basic principle that organising the events based on feasts, \n            has been greatly utilised. Time is referenced in weeks and clearly \n            displayed throughout the document.\n          "
                    ),
                  ]),
                  e._v(" "),
                  n("p", [
                    e._v(
                      '\n            An interactive map helps in visualising the events in space. The location \n            of the event visited for the last time is being highlighted on the map. \n            Nothing proves more clearly the need of a map than that the events of \n            "Jesus Helps A Non-Jewish Woman" (week 18-31) and "The Ten Lepers" (week 33) \n            are both positioned elsewhere in the timeline in line with common sense \n            and human capacities.\n          '
                    ),
                  ]),
                  e._v(" "),
                  n("p", [
                    e._v(
                      "\n            There are both overlappings and conflicts between parallel Gospels. For a \n            smooth reading experience, wherever multiple author's descriptions are \n            available, the most complete and logically sound writing has been ordered \n            into the first position. These authors are displayed in [brackets]. Where \n            completeness and logic could only be guaranteed by multiple authors, then \n            an extra description has been created by merging verses together from these\n            authors. The merge is strictly full-verse based. No verses have been partially \n            picked ever. These merged descriptions are named [Default]. The merging is \n            the reason for displaying verses with full reference (author, chapter, verse) \n            instead of verse numbers only.\n          "
                    ),
                  ]),
                ]),
              ]);
            },
            function () {
              var e = this.$createElement,
                t = this._self._c || e;
              return t("p", [
                this._v(
                  "\n            In case the nature of your say is private, you can get in contact via \n            "
                ),
                t(
                  "a",
                  {
                    attrs: {
                      href: "mailto:gospelsharmony@gmail.com",
                      target: "_blank",
                      rel: "noopener noreferrer",
                    },
                  },
                  [
                    this._v(
                      "\n              gospelsharmony@gmail.com\n            "
                    ),
                  ]
                ),
              ]);
            },
            function () {
              var e = this,
                t = e.$createElement,
                n = e._self._c || t;
              return n("details", [
                n("summary", [e._v("Copyrights")]),
                e._v(" "),
                n("section", [
                  n("p", [
                    e._v(
                      "\n            The chronological order is mainly based on thoughts shared on \n            "
                    ),
                    n(
                      "a",
                      {
                        attrs: {
                          href: "http://4gospels.info/",
                          target: "_blank",
                          rel: "noopener noreferrer",
                        },
                      },
                      [
                        e._v("\n              4gospels.info"),
                        n(
                          "span",
                          {
                            staticStyle: {
                              display: "inline-block",
                              transform: "scale(-1,1)",
                            },
                          },
                          [e._v("⇱")]
                        ),
                      ]
                    ),
                    e._v(
                      "\n            which was inspired by Michael Rood's observations. \n            However, no direct knowledge of Michael Rood's \n            works influenced the content of this site.\n          "
                    ),
                  ]),
                  e._v(" "),
                  n("p", [
                    e._v(
                      "\n            The English version is the New Century Version® (NCV). \n            Copyright © 2005 by Thomas Nelson, Inc.\n            "
                    ),
                    n("br"),
                    e._v(
                      "\n            Except chapter 'The Family History Of Jesus', which uses the \n            Contemporary English Version (CEV) for brevity. Copyright © \n            1995 by American Bible Society.\n          "
                    ),
                  ]),
                  e._v(" "),
                  n("p", [
                    e._v(
                      "\n            The Hungarian version uses the Easy-to-Read Version (ERV-HU). \n            Copyright © 2003, 2012 by World Bible Translation Center. \n            With the following alterations:\n            "
                    ),
                    n("ul", [
                      n("li", [
                        n("p", [
                          e._v(
                            '\n                  Wherever word "spirit" is used in positive meaning, \n                the "szellem" has been replaced by "lélek" in line with the \n                Hungarian common sense. E.g.: szellemidézés, szelleműzés, \n                szellemváros, but(!) \n                lélekgondozás, lelkiismeret, lélekmentő, lélekvándorlás,\n                a lelkére beszél,...\n                '
                          ),
                        ]),
                      ]),
                      e._v(" "),
                      n("li", [
                        n("p", [
                          e._v(
                            '\n                  The family name of Maria Magdalene can be translated to Hungarian \n                in two ways: someone from the village of Magdala or as a first name: \n                "Magdolna". Wherever "from Magdala" is used it has been replaced \n                by "Magdolna".\n                '
                          ),
                        ]),
                      ]),
                      e._v(" "),
                      n("li", [
                        n("p", [
                          e._v(
                            "\n                  In ERV-HU, some verses are merged with dashed verse references \n                (e.g. 12-13) in line with common  sense and/or for better \n                understanding. However, due to the operation of the web site \n                builder program, the verses must be standalone. The separation \n                has required some translation which uses either the same words \n                as the original or if this was not possible then the words of \n                the Hungarian New Translation (NT-HU), Copyright © 1975, 1990 \n                Hungarian Bible Society.\n                "
                          ),
                        ]),
                      ]),
                    ]),
                  ]),
                  e._v(" "),
                  n("p", [
                    e._v(
                      "\n            This project employs an Attribution - Non-Commercial - Share Alike \n            4.0 International Creative Common License, which allows adaptations \n            of content to be shared as long as others share alike, but does not \n            allow commercial uses of its content.\n          "
                    ),
                  ]),
                  e._v(" "),
                  n("p", [
                    n(
                      "a",
                      {
                        attrs: {
                          href:
                            "https://github.com/RichBernhardt/harmony-of-gospels",
                          target: "_blank",
                          rel: "noopener noreferrer",
                        },
                      },
                      [
                        e._v("\n              Source code\n              "),
                        n(
                          "span",
                          {
                            staticStyle: {
                              display: "inline-block",
                              transform: "scale(-1,1)",
                            },
                          },
                          [e._v("⇱")]
                        ),
                      ]
                    ),
                  ]),
                ]),
              ]);
            },
            function () {
              var e = this,
                t = e.$createElement,
                n = e._self._c || t;
              return n("details", [
                n("summary", [e._v("Giving")]),
                e._v(" "),
                n("section", [
                  n("p", [
                    e._v(
                      "\n            Should the content of this site be valuable enough to you, \n            that you feel the urge to express your gratitude in an Earthly manner too, \n            then a monetary opportunity has been provided as follows.\n          "
                    ),
                  ]),
                  e._v(" "),
                  n(
                    "form",
                    {
                      attrs: {
                        action: "https://www.paypal.com/cgi-bin/webscr",
                        method: "post",
                        target: "_top",
                      },
                    },
                    [
                      n("input", {
                        attrs: {
                          type: "hidden",
                          name: "cmd",
                          value: "_s-xclick",
                        },
                      }),
                      e._v(" "),
                      n("input", {
                        attrs: {
                          type: "hidden",
                          name: "hosted_button_id",
                          value: "9E49B7XKJ347S",
                        },
                      }),
                      e._v(" "),
                      n("input", {
                        attrs: {
                          type: "image",
                          src:
                            "https://www.paypalobjects.com/en_US/GB/i/btn/btn_donateCC_LG.gif",
                          border: "0",
                          name: "submit",
                          title:
                            "PayPal - The safer, easier way to pay online!",
                          alt: "Donate with PayPal button",
                        },
                      }),
                      e._v(" "),
                      n("img", {
                        attrs: {
                          alt: "",
                          border: "0",
                          src: "https://www.paypal.com/en_GB/i/scr/pixel.gif",
                          width: "1",
                          height: "1",
                        },
                      }),
                    ]
                  ),
                  e._v(" "),
                  n("p", [e._v("\n              Thank you!\n            ")]),
                ]),
              ]);
            },
          ],
          !1,
          null,
          "03ebddfb",
          null
        );
      t.default = component.exports;
      installComponents(component, { ButtonMenu: n(171).default });
    },
  },
]);
