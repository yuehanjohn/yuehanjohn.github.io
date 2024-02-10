/*!
 * Webflow: Front-end site library
 * @license MIT
 * Inline scripts may access the api using an async handler:
 *   var Webflow = Webflow || [];
 *   Webflow.push(readyFunction);
 */

(() => {
    var z_ = Object.create;
    var an = Object.defineProperty;
    var K_ = Object.getOwnPropertyDescriptor;
    var Y_ = Object.getOwnPropertyNames;
    var $_ = Object.getPrototypeOf,
        Q_ = Object.prototype.hasOwnProperty;
    var ge = (e, t) => () => (e && (t = e(e = 0)), t);
    var c = (e, t) => () => (t || e((t = {
            exports: {}
        }).exports, t), t.exports),
        Fe = (e, t) => {
            for (var r in t) an(e, r, {
                get: t[r],
                enumerable: !0
            })
        },
        Rs = (e, t, r, n) => {
            if (t && typeof t == "object" || typeof t == "function")
                for (let i of Y_(t)) !Q_.call(e, i) && i !== r && an(e, i, {
                    get: () => t[i],
                    enumerable: !(n = K_(t, i)) || n.enumerable
                });
            return e
        };
    var le = (e, t, r) => (r = e != null ? z_($_(e)) : {}, Rs(t || !e || !e.__esModule ? an(r, "default", {
            value: e,
            enumerable: !0
        }) : r, e)),
        rt = e => Rs(an({}, "__esModule", {
            value: !0
        }), e);
    var Ni = c(() => {
        "use strict";
        window.tram = function(e) {
            function t(l, I) {
                var x = new _.Bare;
                return x.init(l, I)
            }

            function r(l) {
                return l.replace(/[A-Z]/g, function(I) {
                    return "-" + I.toLowerCase()
                })
            }

            function n(l) {
                var I = parseInt(l.slice(1), 16),
                    x = I >> 16 & 255,
                    C = I >> 8 & 255,
                    w = 255 & I;
                return [x, C, w]
            }

            function i(l, I, x) {
                return "#" + (1 << 24 | l << 16 | I << 8 | x).toString(16).slice(1)
            }

            function o() {}

            function a(l, I) {
                f("Type warning: Expected: [" + l + "] Got: [" + typeof I + "] " + I)
            }

            function s(l, I, x) {
                f("Units do not match [" + l + "]: " + I + ", " + x)
            }

            function u(l, I, x) {
                if (I !== void 0 && (x = I), l === void 0) return x;
                var C = x;
                return Me.test(l) || !Xe.test(l) ? C = parseInt(l, 10) : Xe.test(l) && (C = 1e3 * parseFloat(l)), 0 > C && (C = 0), C === C ? C : x
            }

            function f(l) {
                oe.debug && window && window.console.warn(l)
            }

            function g(l) {
                for (var I = -1, x = l ? l.length : 0, C = []; ++I < x;) {
                    var w = l[I];
                    w && C.push(w)
                }
                return C
            }
            var p = function(l, I, x) {
                    function C(ie) {
                        return typeof ie == "object"
                    }

                    function w(ie) {
                        return typeof ie == "function"
                    }

                    function N() {}

                    function ee(ie, ve) {
                        function z() {
                            var Re = new ae;
                            return w(Re.init) && Re.init.apply(Re, arguments), Re
                        }

                        function ae() {}
                        ve === x && (ve = ie, ie = Object), z.Bare = ae;
                        var se, be = N[l] = ie[l],
                            tt = ae[l] = z[l] = new N;
                        return tt.constructor = z, z.mixin = function(Re) {
                            return ae[l] = z[l] = ee(z, Re)[l], z
                        }, z.open = function(Re) {
                            if (se = {}, w(Re) ? se = Re.call(z, tt, be, z, ie) : C(Re) && (se = Re), C(se))
                                for (var Er in se) I.call(se, Er) && (tt[Er] = se[Er]);
                            return w(tt.init) || (tt.init = ie), z
                        }, z.open(ve)
                    }
                    return ee
                }("prototype", {}.hasOwnProperty),
                m = {
                    ease: ["ease", function(l, I, x, C) {
                        var w = (l /= C) * l,
                            N = w * l;
                        return I + x * (-2.75 * N * w + 11 * w * w + -15.5 * N + 8 * w + .25 * l)
                    }],
                    "ease-in": ["ease-in", function(l, I, x, C) {
                        var w = (l /= C) * l,
                            N = w * l;
                        return I + x * (-1 * N * w + 3 * w * w + -3 * N + 2 * w)
                    }],
                    "ease-out": ["ease-out", function(l, I, x, C) {
                        var w = (l /= C) * l,
                            N = w * l;
                        return I + x * (.3 * N * w + -1.6 * w * w + 2.2 * N + -1.8 * w + 1.9 * l)
                    }],
                    "ease-in-out": ["ease-in-out", function(l, I, x, C) {
                        var w = (l /= C) * l,
                            N = w * l;
                        return I + x * (2 * N * w + -5 * w * w + 2 * N + 2 * w)
                    }],
                    linear: ["linear", function(l, I, x, C) {
                        return x * l / C + I
                    }],
                    "ease-in-quad": ["cubic-bezier(0.550, 0.085, 0.680, 0.530)", function(l, I, x, C) {
                        return x * (l /= C) * l + I
                    }],
                    "ease-out-quad": ["cubic-bezier(0.250, 0.460, 0.450, 0.940)", function(l, I, x, C) {
                        return -x * (l /= C) * (l - 2) + I
                    }],
                    "ease-in-out-quad": ["cubic-bezier(0.455, 0.030, 0.515, 0.955)", function(l, I, x, C) {
                        return (l /= C / 2) < 1 ? x / 2 * l * l + I : -x / 2 * (--l * (l - 2) - 1) + I
                    }],
                    "ease-in-cubic": ["cubic-bezier(0.550, 0.055, 0.675, 0.190)", function(l, I, x, C) {
                        return x * (l /= C) * l * l + I
                    }],
                    "ease-out-cubic": ["cubic-bezier(0.215, 0.610, 0.355, 1)", function(l, I, x, C) {
                        return x * ((l = l / C - 1) * l * l + 1) + I
                    }],
                    "ease-in-out-cubic": ["cubic-bezier(0.645, 0.045, 0.355, 1)", function(l, I, x, C) {
                        return (l /= C / 2) < 1 ? x / 2 * l * l * l + I : x / 2 * ((l -= 2) * l * l + 2) + I
                    }],
                    "ease-in-quart": ["cubic-bezier(0.895, 0.030, 0.685, 0.220)", function(l, I, x, C) {
                        return x * (l /= C) * l * l * l + I
                    }],
                    "ease-out-quart": ["cubic-bezier(0.165, 0.840, 0.440, 1)", function(l, I, x, C) {
                        return -x * ((l = l / C - 1) * l * l * l - 1) + I
                    }],
                    "ease-in-out-quart": ["cubic-bezier(0.770, 0, 0.175, 1)", function(l, I, x, C) {
                        return (l /= C / 2) < 1 ? x / 2 * l * l * l * l + I : -x / 2 * ((l -= 2) * l * l * l - 2) + I
                    }],
                    "ease-in-quint": ["cubic-bezier(0.755, 0.050, 0.855, 0.060)", function(l, I, x, C) {
                        return x * (l /= C) * l * l * l * l + I
                    }],
                    "ease-out-quint": ["cubic-bezier(0.230, 1, 0.320, 1)", function(l, I, x, C) {
                        return x * ((l = l / C - 1) * l * l * l * l + 1) + I
                    }],
                    "ease-in-out-quint": ["cubic-bezier(0.860, 0, 0.070, 1)", function(l, I, x, C) {
                        return (l /= C / 2) < 1 ? x / 2 * l * l * l * l * l + I : x / 2 * ((l -= 2) * l * l * l * l + 2) + I
                    }],
                    "ease-in-sine": ["cubic-bezier(0.470, 0, 0.745, 0.715)", function(l, I, x, C) {
                        return -x * Math.cos(l / C * (Math.PI / 2)) + x + I
                    }],
                    "ease-out-sine": ["cubic-bezier(0.390, 0.575, 0.565, 1)", function(l, I, x, C) {
                        return x * Math.sin(l / C * (Math.PI / 2)) + I
                    }],
                    "ease-in-out-sine": ["cubic-bezier(0.445, 0.050, 0.550, 0.950)", function(l, I, x, C) {
                        return -x / 2 * (Math.cos(Math.PI * l / C) - 1) + I
                    }],
                    "ease-in-expo": ["cubic-bezier(0.950, 0.050, 0.795, 0.035)", function(l, I, x, C) {
                        return l === 0 ? I : x * Math.pow(2, 10 * (l / C - 1)) + I
                    }],
                    "ease-out-expo": ["cubic-bezier(0.190, 1, 0.220, 1)", function(l, I, x, C) {
                        return l === C ? I + x : x * (-Math.pow(2, -10 * l / C) + 1) + I
                    }],
                    "ease-in-out-expo": ["cubic-bezier(1, 0, 0, 1)", function(l, I, x, C) {
                        return l === 0 ? I : l === C ? I + x : (l /= C / 2) < 1 ? x / 2 * Math.pow(2, 10 * (l - 1)) + I : x / 2 * (-Math.pow(2, -10 * --l) + 2) + I
                    }],
                    "ease-in-circ": ["cubic-bezier(0.600, 0.040, 0.980, 0.335)", function(l, I, x, C) {
                        return -x * (Math.sqrt(1 - (l /= C) * l) - 1) + I
                    }],
                    "ease-out-circ": ["cubic-bezier(0.075, 0.820, 0.165, 1)", function(l, I, x, C) {
                        return x * Math.sqrt(1 - (l = l / C - 1) * l) + I
                    }],
                    "ease-in-out-circ": ["cubic-bezier(0.785, 0.135, 0.150, 0.860)", function(l, I, x, C) {
                        return (l /= C / 2) < 1 ? -x / 2 * (Math.sqrt(1 - l * l) - 1) + I : x / 2 * (Math.sqrt(1 - (l -= 2) * l) + 1) + I
                    }],
                    "ease-in-back": ["cubic-bezier(0.600, -0.280, 0.735, 0.045)", function(l, I, x, C, w) {
                        return w === void 0 && (w = 1.70158), x * (l /= C) * l * ((w + 1) * l - w) + I
                    }],
                    "ease-out-back": ["cubic-bezier(0.175, 0.885, 0.320, 1.275)", function(l, I, x, C, w) {
                        return w === void 0 && (w = 1.70158), x * ((l = l / C - 1) * l * ((w + 1) * l + w) + 1) + I
                    }],
                    "ease-in-out-back": ["cubic-bezier(0.680, -0.550, 0.265, 1.550)", function(l, I, x, C, w) {
                        return w === void 0 && (w = 1.70158), (l /= C / 2) < 1 ? x / 2 * l * l * (((w *= 1.525) + 1) * l - w) + I : x / 2 * ((l -= 2) * l * (((w *= 1.525) + 1) * l + w) + 2) + I
                    }]
                },
                E = {
                    "ease-in-back": "cubic-bezier(0.600, 0, 0.735, 0.045)",
                    "ease-out-back": "cubic-bezier(0.175, 0.885, 0.320, 1)",
                    "ease-in-out-back": "cubic-bezier(0.680, 0, 0.265, 1)"
                },
                T = document,
                O = window,
                F = "bkwld-tram",
                S = /[\-\.0-9]/g,
                P = /[A-Z]/,
                A = "number",
                M = /^(rgb|#)/,
                D = /(em|cm|mm|in|pt|pc|px)$/,
                q = /(em|cm|mm|in|pt|pc|px|%)$/,
                B = /(deg|rad|turn)$/,
                K = "unitless",
                Y = /(all|none) 0s ease 0s/,
                te = /^(width|height)$/,
                V = " ",
                R = T.createElement("a"),
                y = ["Webkit", "Moz", "O", "ms"],
                L = ["-webkit-", "-moz-", "-o-", "-ms-"],
                G = function(l) {
                    if (l in R.style) return {
                        dom: l,
                        css: l
                    };
                    var I, x, C = "",
                        w = l.split("-");
                    for (I = 0; I < w.length; I++) C += w[I].charAt(0).toUpperCase() + w[I].slice(1);
                    for (I = 0; I < y.length; I++)
                        if (x = y[I] + C, x in R.style) return {
                            dom: x,
                            css: L[I] + l
                        }
                },
                U = t.support = {
                    bind: Function.prototype.bind,
                    transform: G("transform"),
                    transition: G("transition"),
                    backface: G("backface-visibility"),
                    timing: G("transition-timing-function")
                };
            if (U.transition) {
                var Z = U.timing.dom;
                if (R.style[Z] = m["ease-in-back"][0], !R.style[Z])
                    for (var re in E) m[re][0] = E[re]
            }
            var k = t.frame = function() {
                    var l = O.requestAnimationFrame || O.webkitRequestAnimationFrame || O.mozRequestAnimationFrame || O.oRequestAnimationFrame || O.msRequestAnimationFrame;
                    return l && U.bind ? l.bind(O) : function(I) {
                        O.setTimeout(I, 16)
                    }
                }(),
                H = t.now = function() {
                    var l = O.performance,
                        I = l && (l.now || l.webkitNow || l.msNow || l.mozNow);
                    return I && U.bind ? I.bind(l) : Date.now || function() {
                        return +new Date
                    }
                }(),
                d = p(function(l) {
                    function I(ne, ce) {
                        var me = g(("" + ne).split(V)),
                            de = me[0];
                        ce = ce || {};
                        var Le = j[de];
                        if (!Le) return f("Unsupported property: " + de);
                        if (!ce.weak || !this.props[de]) {
                            var je = Le[0],
                                De = this.props[de];
                            return De || (De = this.props[de] = new je.Bare), De.init(this.$el, me, Le, ce), De
                        }
                    }

                    function x(ne, ce, me) {
                        if (ne) {
                            var de = typeof ne;
                            if (ce || (this.timer && this.timer.destroy(), this.queue = [], this.active = !1), de == "number" && ce) return this.timer = new ue({
                                duration: ne,
                                context: this,
                                complete: N
                            }), void(this.active = !0);
                            if (de == "string" && ce) {
                                switch (ne) {
                                    case "hide":
                                        z.call(this);
                                        break;
                                    case "stop":
                                        ee.call(this);
                                        break;
                                    case "redraw":
                                        ae.call(this);
                                        break;
                                    default:
                                        I.call(this, ne, me && me[1])
                                }
                                return N.call(this)
                            }
                            if (de == "function") return void ne.call(this, this);
                            if (de == "object") {
                                var Le = 0;
                                tt.call(this, ne, function(Te, j_) {
                                    Te.span > Le && (Le = Te.span), Te.stop(), Te.animate(j_)
                                }, function(Te) {
                                    "wait" in Te && (Le = u(Te.wait, 0))
                                }), be.call(this), Le > 0 && (this.timer = new ue({
                                    duration: Le,
                                    context: this
                                }), this.active = !0, ce && (this.timer.complete = N));
                                var je = this,
                                    De = !1,
                                    on = {};
                                k(function() {
                                    tt.call(je, ne, function(Te) {
                                        Te.active && (De = !0, on[Te.name] = Te.nextStyle)
                                    }), De && je.$el.css(on)
                                })
                            }
                        }
                    }

                    function C(ne) {
                        ne = u(ne, 0), this.active ? this.queue.push({
                            options: ne
                        }) : (this.timer = new ue({
                            duration: ne,
                            context: this,
                            complete: N
                        }), this.active = !0)
                    }

                    function w(ne) {
                        return this.active ? (this.queue.push({
                            options: ne,
                            args: arguments
                        }), void(this.timer.complete = N)) : f("No active transition timer. Use start() or wait() before then().")
                    }

                    function N() {
                        if (this.timer && this.timer.destroy(), this.active = !1, this.queue.length) {
                            var ne = this.queue.shift();
                            x.call(this, ne.options, !0, ne.args)
                        }
                    }

                    function ee(ne) {
                        this.timer && this.timer.destroy(), this.queue = [], this.active = !1;
                        var ce;
                        typeof ne == "string" ? (ce = {}, ce[ne] = 1) : ce = typeof ne == "object" && ne != null ? ne : this.props, tt.call(this, ce, Re), be.call(this)
                    }

                    function ie(ne) {
                        ee.call(this, ne), tt.call(this, ne, Er, X_)
                    }

                    function ve(ne) {
                        typeof ne != "string" && (ne = "block"), this.el.style.display = ne
                    }

                    function z() {
                        ee.call(this), this.el.style.display = "none"
                    }

                    function ae() {
                        this.el.offsetHeight
                    }

                    function se() {
                        ee.call(this), e.removeData(this.el, F), this.$el = this.el = null
                    }

                    function be() {
                        var ne, ce, me = [];
                        this.upstream && me.push(this.upstream);
                        for (ne in this.props) ce = this.props[ne], ce.active && me.push(ce.string);
                        me = me.join(","), this.style !== me && (this.style = me, this.el.style[U.transition.dom] = me)
                    }

                    function tt(ne, ce, me) {
                        var de, Le, je, De, on = ce !== Re,
                            Te = {};
                        for (de in ne) je = ne[de], de in fe ? (Te.transform || (Te.transform = {}), Te.transform[de] = je) : (P.test(de) && (de = r(de)), de in j ? Te[de] = je : (De || (De = {}), De[de] = je));
                        for (de in Te) {
                            if (je = Te[de], Le = this.props[de], !Le) {
                                if (!on) continue;
                                Le = I.call(this, de)
                            }
                            ce.call(this, Le, je)
                        }
                        me && De && me.call(this, De)
                    }

                    function Re(ne) {
                        ne.stop()
                    }

                    function Er(ne, ce) {
                        ne.set(ce)
                    }

                    function X_(ne) {
                        this.$el.css(ne)
                    }

                    function Be(ne, ce) {
                        l[ne] = function() {
                            return this.children ? B_.call(this, ce, arguments) : (this.el && ce.apply(this, arguments), this)
                        }
                    }

                    function B_(ne, ce) {
                        var me, de = this.children.length;
                        for (me = 0; de > me; me++) ne.apply(this.children[me], ce);
                        return this
                    }
                    l.init = function(ne) {
                        if (this.$el = e(ne), this.el = this.$el[0], this.props = {}, this.queue = [], this.style = "", this.active = !1, oe.keepInherited && !oe.fallback) {
                            var ce = W(this.el, "transition");
                            ce && !Y.test(ce) && (this.upstream = ce)
                        }
                        U.backface && oe.hideBackface && h(this.el, U.backface.css, "hidden")
                    }, Be("add", I), Be("start", x), Be("wait", C), Be("then", w), Be("next", N), Be("stop", ee), Be("set", ie), Be("show", ve), Be("hide", z), Be("redraw", ae), Be("destroy", se)
                }),
                _ = p(d, function(l) {
                    function I(x, C) {
                        var w = e.data(x, F) || e.data(x, F, new d.Bare);
                        return w.el || w.init(x), C ? w.start(C) : w
                    }
                    l.init = function(x, C) {
                        var w = e(x);
                        if (!w.length) return this;
                        if (w.length === 1) return I(w[0], C);
                        var N = [];
                        return w.each(function(ee, ie) {
                            N.push(I(ie, C))
                        }), this.children = N, this
                    }
                }),
                b = p(function(l) {
                    function I() {
                        var N = this.get();
                        this.update("auto");
                        var ee = this.get();
                        return this.update(N), ee
                    }

                    function x(N, ee, ie) {
                        return ee !== void 0 && (ie = ee), N in m ? N : ie
                    }

                    function C(N) {
                        var ee = /rgba?\((\d+),\s*(\d+),\s*(\d+)/.exec(N);
                        return (ee ? i(ee[1], ee[2], ee[3]) : N).replace(/#(\w)(\w)(\w)$/, "#$1$1$2$2$3$3")
                    }
                    var w = {
                        duration: 500,
                        ease: "ease",
                        delay: 0
                    };
                    l.init = function(N, ee, ie, ve) {
                        this.$el = N, this.el = N[0];
                        var z = ee[0];
                        ie[2] && (z = ie[2]), Q[z] && (z = Q[z]), this.name = z, this.type = ie[1], this.duration = u(ee[1], this.duration, w.duration), this.ease = x(ee[2], this.ease, w.ease), this.delay = u(ee[3], this.delay, w.delay), this.span = this.duration + this.delay, this.active = !1, this.nextStyle = null, this.auto = te.test(this.name), this.unit = ve.unit || this.unit || oe.defaultUnit, this.angle = ve.angle || this.angle || oe.defaultAngle, oe.fallback || ve.fallback ? this.animate = this.fallback : (this.animate = this.transition, this.string = this.name + V + this.duration + "ms" + (this.ease != "ease" ? V + m[this.ease][0] : "") + (this.delay ? V + this.delay + "ms" : ""))
                    }, l.set = function(N) {
                        N = this.convert(N, this.type), this.update(N), this.redraw()
                    }, l.transition = function(N) {
                        this.active = !0, N = this.convert(N, this.type), this.auto && (this.el.style[this.name] == "auto" && (this.update(this.get()), this.redraw()), N == "auto" && (N = I.call(this))), this.nextStyle = N
                    }, l.fallback = function(N) {
                        var ee = this.el.style[this.name] || this.convert(this.get(), this.type);
                        N = this.convert(N, this.type), this.auto && (ee == "auto" && (ee = this.convert(this.get(), this.type)), N == "auto" && (N = I.call(this))), this.tween = new J({
                            from: ee,
                            to: N,
                            duration: this.duration,
                            delay: this.delay,
                            ease: this.ease,
                            update: this.update,
                            context: this
                        })
                    }, l.get = function() {
                        return W(this.el, this.name)
                    }, l.update = function(N) {
                        h(this.el, this.name, N)
                    }, l.stop = function() {
                        (this.active || this.nextStyle) && (this.active = !1, this.nextStyle = null, h(this.el, this.name, this.get()));
                        var N = this.tween;
                        N && N.context && N.destroy()
                    }, l.convert = function(N, ee) {
                        if (N == "auto" && this.auto) return N;
                        var ie, ve = typeof N == "number",
                            z = typeof N == "string";
                        switch (ee) {
                            case A:
                                if (ve) return N;
                                if (z && N.replace(S, "") === "") return +N;
                                ie = "number(unitless)";
                                break;
                            case M:
                                if (z) {
                                    if (N === "" && this.original) return this.original;
                                    if (ee.test(N)) return N.charAt(0) == "#" && N.length == 7 ? N : C(N)
                                }
                                ie = "hex or rgb string";
                                break;
                            case D:
                                if (ve) return N + this.unit;
                                if (z && ee.test(N)) return N;
                                ie = "number(px) or string(unit)";
                                break;
                            case q:
                                if (ve) return N + this.unit;
                                if (z && ee.test(N)) return N;
                                ie = "number(px) or string(unit or %)";
                                break;
                            case B:
                                if (ve) return N + this.angle;
                                if (z && ee.test(N)) return N;
                                ie = "number(deg) or string(angle)";
                                break;
                            case K:
                                if (ve || z && q.test(N)) return N;
                                ie = "number(unitless) or string(unit or %)"
                        }
                        return a(ie, N), N
                    }, l.redraw = function() {
                        this.el.offsetHeight
                    }
                }),
                v = p(b, function(l, I) {
                    l.init = function() {
                        I.init.apply(this, arguments), this.original || (this.original = this.convert(this.get(), M))
                    }
                }),
                X = p(b, function(l, I) {
                    l.init = function() {
                        I.init.apply(this, arguments), this.animate = this.fallback
                    }, l.get = function() {
                        return this.$el[this.name]()
                    }, l.update = function(x) {
                        this.$el[this.name](x)
                    }
                }),
                $ = p(b, function(l, I) {
                    function x(C, w) {
                        var N, ee, ie, ve, z;
                        for (N in C) ve = fe[N], ie = ve[0], ee = ve[1] || N, z = this.convert(C[N], ie), w.call(this, ee, z, ie)
                    }
                    l.init = function() {
                        I.init.apply(this, arguments), this.current || (this.current = {}, fe.perspective && oe.perspective && (this.current.perspective = oe.perspective, h(this.el, this.name, this.style(this.current)), this.redraw()))
                    }, l.set = function(C) {
                        x.call(this, C, function(w, N) {
                            this.current[w] = N
                        }), h(this.el, this.name, this.style(this.current)), this.redraw()
                    }, l.transition = function(C) {
                        var w = this.values(C);
                        this.tween = new _e({
                            current: this.current,
                            values: w,
                            duration: this.duration,
                            delay: this.delay,
                            ease: this.ease
                        });
                        var N, ee = {};
                        for (N in this.current) ee[N] = N in w ? w[N] : this.current[N];
                        this.active = !0, this.nextStyle = this.style(ee)
                    }, l.fallback = function(C) {
                        var w = this.values(C);
                        this.tween = new _e({
                            current: this.current,
                            values: w,
                            duration: this.duration,
                            delay: this.delay,
                            ease: this.ease,
                            update: this.update,
                            context: this
                        })
                    }, l.update = function() {
                        h(this.el, this.name, this.style(this.current))
                    }, l.style = function(C) {
                        var w, N = "";
                        for (w in C) N += w + "(" + C[w] + ") ";
                        return N
                    }, l.values = function(C) {
                        var w, N = {};
                        return x.call(this, C, function(ee, ie, ve) {
                            N[ee] = ie, this.current[ee] === void 0 && (w = 0, ~ee.indexOf("scale") && (w = 1), this.current[ee] = this.convert(w, ve))
                        }), N
                    }
                }),
                J = p(function(l) {
                    function I(z) {
                        ie.push(z) === 1 && k(x)
                    }

                    function x() {
                        var z, ae, se, be = ie.length;
                        if (be)
                            for (k(x), ae = H(), z = be; z--;) se = ie[z], se && se.render(ae)
                    }

                    function C(z) {
                        var ae, se = e.inArray(z, ie);
                        se >= 0 && (ae = ie.slice(se + 1), ie.length = se, ae.length && (ie = ie.concat(ae)))
                    }

                    function w(z) {
                        return Math.round(z * ve) / ve
                    }

                    function N(z, ae, se) {
                        return i(z[0] + se * (ae[0] - z[0]), z[1] + se * (ae[1] - z[1]), z[2] + se * (ae[2] - z[2]))
                    }
                    var ee = {
                        ease: m.ease[1],
                        from: 0,
                        to: 1
                    };
                    l.init = function(z) {
                        this.duration = z.duration || 0, this.delay = z.delay || 0;
                        var ae = z.ease || ee.ease;
                        m[ae] && (ae = m[ae][1]), typeof ae != "function" && (ae = ee.ease), this.ease = ae, this.update = z.update || o, this.complete = z.complete || o, this.context = z.context || this, this.name = z.name;
                        var se = z.from,
                            be = z.to;
                        se === void 0 && (se = ee.from), be === void 0 && (be = ee.to), this.unit = z.unit || "", typeof se == "number" && typeof be == "number" ? (this.begin = se, this.change = be - se) : this.format(be, se), this.value = this.begin + this.unit, this.start = H(), z.autoplay !== !1 && this.play()
                    }, l.play = function() {
                        this.active || (this.start || (this.start = H()), this.active = !0, I(this))
                    }, l.stop = function() {
                        this.active && (this.active = !1, C(this))
                    }, l.render = function(z) {
                        var ae, se = z - this.start;
                        if (this.delay) {
                            if (se <= this.delay) return;
                            se -= this.delay
                        }
                        if (se < this.duration) {
                            var be = this.ease(se, 0, 1, this.duration);
                            return ae = this.startRGB ? N(this.startRGB, this.endRGB, be) : w(this.begin + be * this.change), this.value = ae + this.unit, void this.update.call(this.context, this.value)
                        }
                        ae = this.endHex || this.begin + this.change, this.value = ae + this.unit, this.update.call(this.context, this.value), this.complete.call(this.context), this.destroy()
                    }, l.format = function(z, ae) {
                        if (ae += "", z += "", z.charAt(0) == "#") return this.startRGB = n(ae), this.endRGB = n(z), this.endHex = z, this.begin = 0, void(this.change = 1);
                        if (!this.unit) {
                            var se = ae.replace(S, ""),
                                be = z.replace(S, "");
                            se !== be && s("tween", ae, z), this.unit = se
                        }
                        ae = parseFloat(ae), z = parseFloat(z), this.begin = this.value = ae, this.change = z - ae
                    }, l.destroy = function() {
                        this.stop(), this.context = null, this.ease = this.update = this.complete = o
                    };
                    var ie = [],
                        ve = 1e3
                }),
                ue = p(J, function(l) {
                    l.init = function(I) {
                        this.duration = I.duration || 0, this.complete = I.complete || o, this.context = I.context, this.play()
                    }, l.render = function(I) {
                        var x = I - this.start;
                        x < this.duration || (this.complete.call(this.context), this.destroy())
                    }
                }),
                _e = p(J, function(l, I) {
                    l.init = function(x) {
                        this.context = x.context, this.update = x.update, this.tweens = [], this.current = x.current;
                        var C, w;
                        for (C in x.values) w = x.values[C], this.current[C] !== w && this.tweens.push(new J({
                            name: C,
                            from: this.current[C],
                            to: w,
                            duration: x.duration,
                            delay: x.delay,
                            ease: x.ease,
                            autoplay: !1
                        }));
                        this.play()
                    }, l.render = function(x) {
                        var C, w, N = this.tweens.length,
                            ee = !1;
                        for (C = N; C--;) w = this.tweens[C], w.context && (w.render(x), this.current[w.name] = w.value, ee = !0);
                        return ee ? void(this.update && this.update.call(this.context)) : this.destroy()
                    }, l.destroy = function() {
                        if (I.destroy.call(this), this.tweens) {
                            var x, C = this.tweens.length;
                            for (x = C; x--;) this.tweens[x].destroy();
                            this.tweens = null, this.current = null
                        }
                    }
                }),
                oe = t.config = {
                    debug: !1,
                    defaultUnit: "px",
                    defaultAngle: "deg",
                    keepInherited: !1,
                    hideBackface: !1,
                    perspective: "",
                    fallback: !U.transition,
                    agentTests: []
                };
            t.fallback = function(l) {
                if (!U.transition) return oe.fallback = !0;
                oe.agentTests.push("(" + l + ")");
                var I = new RegExp(oe.agentTests.join("|"), "i");
                oe.fallback = I.test(navigator.userAgent)
            }, t.fallback("6.0.[2-5] Safari"), t.tween = function(l) {
                return new J(l)
            }, t.delay = function(l, I, x) {
                return new ue({
                    complete: I,
                    duration: l,
                    context: x
                })
            }, e.fn.tram = function(l) {
                return t.call(null, this, l)
            };
            var h = e.style,
                W = e.css,
                Q = {
                    transform: U.transform && U.transform.css
                },
                j = {
                    color: [v, M],
                    background: [v, M, "background-color"],
                    "outline-color": [v, M],
                    "border-color": [v, M],
                    "border-top-color": [v, M],
                    "border-right-color": [v, M],
                    "border-bottom-color": [v, M],
                    "border-left-color": [v, M],
                    "border-width": [b, D],
                    "border-top-width": [b, D],
                    "border-right-width": [b, D],
                    "border-bottom-width": [b, D],
                    "border-left-width": [b, D],
                    "border-spacing": [b, D],
                    "letter-spacing": [b, D],
                    margin: [b, D],
                    "margin-top": [b, D],
                    "margin-right": [b, D],
                    "margin-bottom": [b, D],
                    "margin-left": [b, D],
                    padding: [b, D],
                    "padding-top": [b, D],
                    "padding-right": [b, D],
                    "padding-bottom": [b, D],
                    "padding-left": [b, D],
                    "outline-width": [b, D],
                    opacity: [b, A],
                    top: [b, q],
                    right: [b, q],
                    bottom: [b, q],
                    left: [b, q],
                    "font-size": [b, q],
                    "text-indent": [b, q],
                    "word-spacing": [b, q],
                    width: [b, q],
                    "min-width": [b, q],
                    "max-width": [b, q],
                    height: [b, q],
                    "min-height": [b, q],
                    "max-height": [b, q],
                    "line-height": [b, K],
                    "scroll-top": [X, A, "scrollTop"],
                    "scroll-left": [X, A, "scrollLeft"]
                },
                fe = {};
            U.transform && (j.transform = [$], fe = {
                x: [q, "translateX"],
                y: [q, "translateY"],
                rotate: [B],
                rotateX: [B],
                rotateY: [B],
                scale: [A],
                scaleX: [A],
                scaleY: [A],
                skew: [B],
                skewX: [B],
                skewY: [B]
            }), U.transform && U.backface && (fe.z = [q, "translateZ"], fe.rotateZ = [B], fe.scaleZ = [A], fe.perspective = [D]);
            var Me = /ms/,
                Xe = /s|\./;
            return e.tram = t
        }(window.jQuery)
    });
    var Ns = c((GV, Ls) => {
        "use strict";
        var Z_ = window.$,
            J_ = Ni() && Z_.tram;
        Ls.exports = function() {
            var e = {};
            e.VERSION = "1.6.0-Webflow";
            var t = {},
                r = Array.prototype,
                n = Object.prototype,
                i = Function.prototype,
                o = r.push,
                a = r.slice,
                s = r.concat,
                u = n.toString,
                f = n.hasOwnProperty,
                g = r.forEach,
                p = r.map,
                m = r.reduce,
                E = r.reduceRight,
                T = r.filter,
                O = r.every,
                F = r.some,
                S = r.indexOf,
                P = r.lastIndexOf,
                A = Array.isArray,
                M = Object.keys,
                D = i.bind,
                q = e.each = e.forEach = function(y, L, G) {
                    if (y == null) return y;
                    if (g && y.forEach === g) y.forEach(L, G);
                    else if (y.length === +y.length) {
                        for (var U = 0, Z = y.length; U < Z; U++)
                            if (L.call(G, y[U], U, y) === t) return
                    } else
                        for (var re = e.keys(y), U = 0, Z = re.length; U < Z; U++)
                            if (L.call(G, y[re[U]], re[U], y) === t) return;
                    return y
                };
            e.map = e.collect = function(y, L, G) {
                var U = [];
                return y == null ? U : p && y.map === p ? y.map(L, G) : (q(y, function(Z, re, k) {
                    U.push(L.call(G, Z, re, k))
                }), U)
            }, e.find = e.detect = function(y, L, G) {
                var U;
                return B(y, function(Z, re, k) {
                    if (L.call(G, Z, re, k)) return U = Z, !0
                }), U
            }, e.filter = e.select = function(y, L, G) {
                var U = [];
                return y == null ? U : T && y.filter === T ? y.filter(L, G) : (q(y, function(Z, re, k) {
                    L.call(G, Z, re, k) && U.push(Z)
                }), U)
            };
            var B = e.some = e.any = function(y, L, G) {
                L || (L = e.identity);
                var U = !1;
                return y == null ? U : F && y.some === F ? y.some(L, G) : (q(y, function(Z, re, k) {
                    if (U || (U = L.call(G, Z, re, k))) return t
                }), !!U)
            };
            e.contains = e.include = function(y, L) {
                return y == null ? !1 : S && y.indexOf === S ? y.indexOf(L) != -1 : B(y, function(G) {
                    return G === L
                })
            }, e.delay = function(y, L) {
                var G = a.call(arguments, 2);
                return setTimeout(function() {
                    return y.apply(null, G)
                }, L)
            }, e.defer = function(y) {
                return e.delay.apply(e, [y, 1].concat(a.call(arguments, 1)))
            }, e.throttle = function(y) {
                var L, G, U;
                return function() {
                    L || (L = !0, G = arguments, U = this, J_.frame(function() {
                        L = !1, y.apply(U, G)
                    }))
                }
            }, e.debounce = function(y, L, G) {
                var U, Z, re, k, H, d = function() {
                    var _ = e.now() - k;
                    _ < L ? U = setTimeout(d, L - _) : (U = null, G || (H = y.apply(re, Z), re = Z = null))
                };
                return function() {
                    re = this, Z = arguments, k = e.now();
                    var _ = G && !U;
                    return U || (U = setTimeout(d, L)), _ && (H = y.apply(re, Z), re = Z = null), H
                }
            }, e.defaults = function(y) {
                if (!e.isObject(y)) return y;
                for (var L = 1, G = arguments.length; L < G; L++) {
                    var U = arguments[L];
                    for (var Z in U) y[Z] === void 0 && (y[Z] = U[Z])
                }
                return y
            }, e.keys = function(y) {
                if (!e.isObject(y)) return [];
                if (M) return M(y);
                var L = [];
                for (var G in y) e.has(y, G) && L.push(G);
                return L
            }, e.has = function(y, L) {
                return f.call(y, L)
            }, e.isObject = function(y) {
                return y === Object(y)
            }, e.now = Date.now || function() {
                return new Date().getTime()
            }, e.templateSettings = {
                evaluate: /<%([\s\S]+?)%>/g,
                interpolate: /<%=([\s\S]+?)%>/g,
                escape: /<%-([\s\S]+?)%>/g
            };
            var K = /(.)^/,
                Y = {
                    "'": "'",
                    "\\": "\\",
                    "\r": "r",
                    "\n": "n",
                    "\u2028": "u2028",
                    "\u2029": "u2029"
                },
                te = /\\|'|\r|\n|\u2028|\u2029/g,
                V = function(y) {
                    return "\\" + Y[y]
                },
                R = /^\s*(\w|\$)+\s*$/;
            return e.template = function(y, L, G) {
                !L && G && (L = G), L = e.defaults({}, L, e.templateSettings);
                var U = RegExp([(L.escape || K).source, (L.interpolate || K).source, (L.evaluate || K).source].join("|") + "|$", "g"),
                    Z = 0,
                    re = "__p+='";
                y.replace(U, function(_, b, v, X, $) {
                    return re += y.slice(Z, $).replace(te, V), Z = $ + _.length, b ? re += `'+
((__t=(` + b + `))==null?'':_.escape(__t))+
'` : v ? re += `'+
((__t=(` + v + `))==null?'':__t)+
'` : X && (re += `';
` + X + `
__p+='`), _
                }), re += `';
`;
                var k = L.variable;
                if (k) {
                    if (!R.test(k)) throw new Error("variable is not a bare identifier: " + k)
                } else re = `with(obj||{}){
` + re + `}
`, k = "obj";
                re = `var __t,__p='',__j=Array.prototype.join,print=function(){__p+=__j.call(arguments,'');};
` + re + `return __p;
`;
                var H;
                try {
                    H = new Function(L.variable || "obj", "_", re)
                } catch (_) {
                    throw _.source = re, _
                }
                var d = function(_) {
                    return H.call(this, _, e)
                };
                return d.source = "function(" + k + `){
` + re + "}", d
            }, e
        }()
    });
    var Ge = c((kV, Us) => {
        "use strict";
        var pe = {},
            Vt = {},
            Wt = [],
            qi = window.Webflow || [],
            Et = window.jQuery,
            Ke = Et(window),
            eb = Et(document),
            nt = Et.isFunction,
            ze = pe._ = Ns(),
            qs = pe.tram = Ni() && Et.tram,
            un = !1,
            Mi = !1;
        qs.config.hideBackface = !1;
        qs.config.keepInherited = !0;
        pe.define = function(e, t, r) {
            Vt[e] && Ds(Vt[e]);
            var n = Vt[e] = t(Et, ze, r) || {};
            return Ms(n), n
        };
        pe.require = function(e) {
            return Vt[e]
        };

        function Ms(e) {
            pe.env() && (nt(e.design) && Ke.on("__wf_design", e.design), nt(e.preview) && Ke.on("__wf_preview", e.preview)), nt(e.destroy) && Ke.on("__wf_destroy", e.destroy), e.ready && nt(e.ready) && tb(e)
        }

        function tb(e) {
            if (un) {
                e.ready();
                return
            }
            ze.contains(Wt, e.ready) || Wt.push(e.ready)
        }

        function Ds(e) {
            nt(e.design) && Ke.off("__wf_design", e.design), nt(e.preview) && Ke.off("__wf_preview", e.preview), nt(e.destroy) && Ke.off("__wf_destroy", e.destroy), e.ready && nt(e.ready) && rb(e)
        }

        function rb(e) {
            Wt = ze.filter(Wt, function(t) {
                return t !== e.ready
            })
        }
        pe.push = function(e) {
            if (un) {
                nt(e) && e();
                return
            }
            qi.push(e)
        };
        pe.env = function(e) {
            var t = window.__wf_design,
                r = typeof t < "u";
            if (!e) return r;
            if (e === "design") return r && t;
            if (e === "preview") return r && !t;
            if (e === "slug") return r && window.__wf_slug;
            if (e === "editor") return window.WebflowEditor;
            if (e === "test") return window.__wf_test;
            if (e === "frame") return window !== window.top
        };
        var sn = navigator.userAgent.toLowerCase(),
            Fs = pe.env.touch = "ontouchstart" in window || window.DocumentTouch && document instanceof window.DocumentTouch,
            nb = pe.env.chrome = /chrome/.test(sn) && /Google/.test(navigator.vendor) && parseInt(sn.match(/chrome\/(\d+)\./)[1], 10),
            ib = pe.env.ios = /(ipod|iphone|ipad)/.test(sn);
        pe.env.safari = /safari/.test(sn) && !nb && !ib;
        var Pi;
        Fs && eb.on("touchstart mousedown", function(e) {
            Pi = e.target
        });
        pe.validClick = Fs ? function(e) {
            return e === Pi || Et.contains(e, Pi)
        } : function() {
            return !0
        };
        var Gs = "resize.webflow orientationchange.webflow load.webflow",
            ob = "scroll.webflow " + Gs;
        pe.resize = Di(Ke, Gs);
        pe.scroll = Di(Ke, ob);
        pe.redraw = Di();

        function Di(e, t) {
            var r = [],
                n = {};
            return n.up = ze.throttle(function(i) {
                ze.each(r, function(o) {
                    o(i)
                })
            }), e && t && e.on(t, n.up), n.on = function(i) {
                typeof i == "function" && (ze.contains(r, i) || r.push(i))
            }, n.off = function(i) {
                if (!arguments.length) {
                    r = [];
                    return
                }
                r = ze.filter(r, function(o) {
                    return o !== i
                })
            }, n
        }
        pe.location = function(e) {
            window.location = e
        };
        pe.env() && (pe.location = function() {});
        pe.ready = function() {
            un = !0, Mi ? ab() : ze.each(Wt, Ps), ze.each(qi, Ps), pe.resize.up()
        };

        function Ps(e) {
            nt(e) && e()
        }

        function ab() {
            Mi = !1, ze.each(Vt, Ms)
        }
        var Rt;
        pe.load = function(e) {
            Rt.then(e)
        };

        function ks() {
            Rt && (Rt.reject(), Ke.off("load", Rt.resolve)), Rt = new Et.Deferred, Ke.on("load", Rt.resolve)
        }
        pe.destroy = function(e) {
            e = e || {}, Mi = !0, Ke.triggerHandler("__wf_destroy"), e.domready != null && (un = e.domready), ze.each(Vt, Ds), pe.resize.off(), pe.scroll.off(), pe.redraw.off(), Wt = [], qi = [], Rt.state() === "pending" && ks()
        };
        Et(pe.ready);
        ks();
        Us.exports = window.Webflow = pe
    });
    var Hs = c((UV, Ws) => {
        "use strict";
        var Vs = Ge();
        Vs.define("brand", Ws.exports = function(e) {
            var t = {},
                r = document,
                n = e("html"),
                i = e("body"),
                o = ".w-webflow-badge",
                a = window.location,
                s = /PhantomJS/i.test(navigator.userAgent),
                u = "fullscreenchange webkitfullscreenchange mozfullscreenchange msfullscreenchange",
                f;
            t.ready = function() {
                var E = n.attr("data-wf-status"),
                    T = n.attr("data-wf-domain") || "";
                /\.webflow\.io$/i.test(T) && a.hostname !== T && (E = !0), E && !s && (f = f || p(), m(), setTimeout(m, 500), e(r).off(u, g).on(u, g))
            };

            function g() {
                var E = r.fullScreen || r.mozFullScreen || r.webkitIsFullScreen || r.msFullscreenElement || !!r.webkitFullscreenElement;
                e(f).attr("style", E ? "display: none !important;" : "")
            }

            function p() {
                var E = e('<a class="w-webflow-badge"></a>').attr("href", "https://webflow.com?utm_campaign=brandjs"),
                    T = e("<img>").attr("src", "https://d3e54v103j8qbb.cloudfront.net/img/webflow-badge-icon-d2.89e12c322e.svg").attr("alt", "").css({
                        marginRight: "4px",
                        width: "26px"
                    }),
                    O = e("<img>").attr("src", "https://d3e54v103j8qbb.cloudfront.net/img/webflow-badge-text-d2.c82cec3b78.svg").attr("alt", "Made in Webflow");
                return E.append(T, O), E[0]
            }

            function m() {
                var E = i.children(o),
                    T = E.length && E.get(0) === f,
                    O = Vs.env("editor");
                if (T) {
                    O && E.remove();
                    return
                }
                E.length && E.remove(), O || i.append(f)
            }
            return t
        })
    });
    var Bs = c((VV, Xs) => {
        "use strict";
        var Fi = Ge();
        Fi.define("edit", Xs.exports = function(e, t, r) {
            if (r = r || {}, (Fi.env("test") || Fi.env("frame")) && !r.fixture && !sb()) return {
                exit: 1
            };
            var n = {},
                i = e(window),
                o = e(document.documentElement),
                a = document.location,
                s = "hashchange",
                u, f = r.load || m,
                g = !1;
            try {
                g = localStorage && localStorage.getItem && localStorage.getItem("WebflowEditor")
            } catch {}
            g ? f() : a.search ? (/[?&](edit)(?:[=&?]|$)/.test(a.search) || /\?edit$/.test(a.href)) && f() : i.on(s, p).triggerHandler(s);

            function p() {
                u || /\?edit/.test(a.hash) && f()
            }

            function m() {
                u = !0, window.WebflowEditor = !0, i.off(s, p), P(function(M) {
                    e.ajax({
                        url: S("https://editor-api.webflow.com/api/editor/view"),
                        data: {
                            siteId: o.attr("data-wf-site")
                        },
                        xhrFields: {
                            withCredentials: !0
                        },
                        dataType: "json",
                        crossDomain: !0,
                        success: E(M)
                    })
                })
            }

            function E(M) {
                return function(D) {
                    if (!D) {
                        console.error("Could not load editor data");
                        return
                    }
                    D.thirdPartyCookiesSupported = M, T(F(D.bugReporterScriptPath), function() {
                        T(F(D.scriptPath), function() {
                            window.WebflowEditor(D)
                        })
                    })
                }
            }

            function T(M, D) {
                e.ajax({
                    type: "GET",
                    url: M,
                    dataType: "script",
                    cache: !0
                }).then(D, O)
            }

            function O(M, D, q) {
                throw console.error("Could not load editor script: " + D), q
            }

            function F(M) {
                return M.indexOf("//") >= 0 ? M : S("https://editor-api.webflow.com" + M)
            }

            function S(M) {
                return M.replace(/([^:])\/\//g, "$1/")
            }

            function P(M) {
                var D = window.document.createElement("iframe");
                D.src = "https://webflow.com/site/third-party-cookie-check.html", D.style.display = "none", D.sandbox = "allow-scripts allow-same-origin";
                var q = function(B) {
                    B.data === "WF_third_party_cookies_unsupported" ? (A(D, q), M(!1)) : B.data === "WF_third_party_cookies_supported" && (A(D, q), M(!0))
                };
                D.onerror = function() {
                    A(D, q), M(!1)
                }, window.addEventListener("message", q, !1), window.document.body.appendChild(D)
            }

            function A(M, D) {
                window.removeEventListener("message", D, !1), M.remove()
            }
            return n
        });

        function sb() {
            try {
                return window.top.__Cypress__
            } catch {
                return !1
            }
        }
    });
    var zs = c((WV, js) => {
        "use strict";
        var ub = Ge();
        ub.define("focus-visible", js.exports = function() {
            function e(r) {
                var n = !0,
                    i = !1,
                    o = null,
                    a = {
                        text: !0,
                        search: !0,
                        url: !0,
                        tel: !0,
                        email: !0,
                        password: !0,
                        number: !0,
                        date: !0,
                        month: !0,
                        week: !0,
                        time: !0,
                        datetime: !0,
                        "datetime-local": !0
                    };

                function s(A) {
                    return !!(A && A !== document && A.nodeName !== "HTML" && A.nodeName !== "BODY" && "classList" in A && "contains" in A.classList)
                }

                function u(A) {
                    var M = A.type,
                        D = A.tagName;
                    return !!(D === "INPUT" && a[M] && !A.readOnly || D === "TEXTAREA" && !A.readOnly || A.isContentEditable)
                }

                function f(A) {
                    A.getAttribute("data-wf-focus-visible") || A.setAttribute("data-wf-focus-visible", "true")
                }

                function g(A) {
                    A.getAttribute("data-wf-focus-visible") && A.removeAttribute("data-wf-focus-visible")
                }

                function p(A) {
                    A.metaKey || A.altKey || A.ctrlKey || (s(r.activeElement) && f(r.activeElement), n = !0)
                }

                function m() {
                    n = !1
                }

                function E(A) {
                    s(A.target) && (n || u(A.target)) && f(A.target)
                }

                function T(A) {
                    s(A.target) && A.target.hasAttribute("data-wf-focus-visible") && (i = !0, window.clearTimeout(o), o = window.setTimeout(function() {
                        i = !1
                    }, 100), g(A.target))
                }

                function O() {
                    document.visibilityState === "hidden" && (i && (n = !0), F())
                }

                function F() {
                    document.addEventListener("mousemove", P), document.addEventListener("mousedown", P), document.addEventListener("mouseup", P), document.addEventListener("pointermove", P), document.addEventListener("pointerdown", P), document.addEventListener("pointerup", P), document.addEventListener("touchmove", P), document.addEventListener("touchstart", P), document.addEventListener("touchend", P)
                }

                function S() {
                    document.removeEventListener("mousemove", P), document.removeEventListener("mousedown", P), document.removeEventListener("mouseup", P), document.removeEventListener("pointermove", P), document.removeEventListener("pointerdown", P), document.removeEventListener("pointerup", P), document.removeEventListener("touchmove", P), document.removeEventListener("touchstart", P), document.removeEventListener("touchend", P)
                }

                function P(A) {
                    A.target.nodeName && A.target.nodeName.toLowerCase() === "html" || (n = !1, S())
                }
                document.addEventListener("keydown", p, !0), document.addEventListener("mousedown", m, !0), document.addEventListener("pointerdown", m, !0), document.addEventListener("touchstart", m, !0), document.addEventListener("visibilitychange", O, !0), F(), r.addEventListener("focus", E, !0), r.addEventListener("blur", T, !0)
            }

            function t() {
                if (typeof document < "u") try {
                    document.querySelector(":focus-visible")
                } catch {
                    e(document)
                }
            }
            return {
                ready: t
            }
        })
    });
    var $s = c((HV, Ys) => {
        "use strict";
        var Ks = Ge();
        Ks.define("focus", Ys.exports = function() {
            var e = [],
                t = !1;

            function r(a) {
                t && (a.preventDefault(), a.stopPropagation(), a.stopImmediatePropagation(), e.unshift(a))
            }

            function n(a) {
                var s = a.target,
                    u = s.tagName;
                return /^a$/i.test(u) && s.href != null || /^(button|textarea)$/i.test(u) && s.disabled !== !0 || /^input$/i.test(u) && /^(button|reset|submit|radio|checkbox)$/i.test(s.type) && !s.disabled || !/^(button|input|textarea|select|a)$/i.test(u) && !Number.isNaN(Number.parseFloat(s.tabIndex)) || /^audio$/i.test(u) || /^video$/i.test(u) && s.controls === !0
            }

            function i(a) {
                n(a) && (t = !0, setTimeout(() => {
                    for (t = !1, a.target.focus(); e.length > 0;) {
                        var s = e.pop();
                        s.target.dispatchEvent(new MouseEvent(s.type, s))
                    }
                }, 0))
            }

            function o() {
                typeof document < "u" && document.body.hasAttribute("data-wf-focus-within") && Ks.env.safari && (document.addEventListener("mousedown", i, !0), document.addEventListener("mouseup", r, !0), document.addEventListener("click", r, !0))
            }
            return {
                ready: o
            }
        })
    });
    var Js = c((XV, Zs) => {
        "use strict";
        var Gi = window.jQuery,
            it = {},
            cn = [],
            Qs = ".w-ix",
            ln = {
                reset: function(e, t) {
                    t.__wf_intro = null
                },
                intro: function(e, t) {
                    t.__wf_intro || (t.__wf_intro = !0, Gi(t).triggerHandler(it.types.INTRO))
                },
                outro: function(e, t) {
                    t.__wf_intro && (t.__wf_intro = null, Gi(t).triggerHandler(it.types.OUTRO))
                }
            };
        it.triggers = {};
        it.types = {
            INTRO: "w-ix-intro" + Qs,
            OUTRO: "w-ix-outro" + Qs
        };
        it.init = function() {
            for (var e = cn.length, t = 0; t < e; t++) {
                var r = cn[t];
                r[0](0, r[1])
            }
            cn = [], Gi.extend(it.triggers, ln)
        };
        it.async = function() {
            for (var e in ln) {
                var t = ln[e];
                ln.hasOwnProperty(e) && (it.triggers[e] = function(r, n) {
                    cn.push([t, n])
                })
            }
        };
        it.async();
        Zs.exports = it
    });
    var _r = c((BV, ru) => {
        "use strict";
        var ki = Js();

        function eu(e, t) {
            var r = document.createEvent("CustomEvent");
            r.initCustomEvent(t, !0, !0, null), e.dispatchEvent(r)
        }
        var cb = window.jQuery,
            fn = {},
            tu = ".w-ix",
            lb = {
                reset: function(e, t) {
                    ki.triggers.reset(e, t)
                },
                intro: function(e, t) {
                    ki.triggers.intro(e, t), eu(t, "COMPONENT_ACTIVE")
                },
                outro: function(e, t) {
                    ki.triggers.outro(e, t), eu(t, "COMPONENT_INACTIVE")
                }
            };
        fn.triggers = {};
        fn.types = {
            INTRO: "w-ix-intro" + tu,
            OUTRO: "w-ix-outro" + tu
        };
        cb.extend(fn.triggers, lb);
        ru.exports = fn
    });
    var nu = c((jV, dt) => {
        function Ui(e) {
            return dt.exports = Ui = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
                return typeof t
            } : function(t) {
                return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
            }, dt.exports.__esModule = !0, dt.exports.default = dt.exports, Ui(e)
        }
        dt.exports = Ui, dt.exports.__esModule = !0, dt.exports.default = dt.exports
    });
    var dn = c((zV, br) => {
        var fb = nu().default;

        function iu(e) {
            if (typeof WeakMap != "function") return null;
            var t = new WeakMap,
                r = new WeakMap;
            return (iu = function(i) {
                return i ? r : t
            })(e)
        }

        function db(e, t) {
            if (!t && e && e.__esModule) return e;
            if (e === null || fb(e) !== "object" && typeof e != "function") return {
                default: e
            };
            var r = iu(t);
            if (r && r.has(e)) return r.get(e);
            var n = {},
                i = Object.defineProperty && Object.getOwnPropertyDescriptor;
            for (var o in e)
                if (o !== "default" && Object.prototype.hasOwnProperty.call(e, o)) {
                    var a = i ? Object.getOwnPropertyDescriptor(e, o) : null;
                    a && (a.get || a.set) ? Object.defineProperty(n, o, a) : n[o] = e[o]
                }
            return n.default = e, r && r.set(e, n), n
        }
        br.exports = db, br.exports.__esModule = !0, br.exports.default = br.exports
    });
    var ou = c((KV, Tr) => {
        function pb(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }
        Tr.exports = pb, Tr.exports.__esModule = !0, Tr.exports.default = Tr.exports
    });
    var ye = c((YV, au) => {
        var pn = function(e) {
            return e && e.Math == Math && e
        };
        au.exports = pn(typeof globalThis == "object" && globalThis) || pn(typeof window == "object" && window) || pn(typeof self == "object" && self) || pn(typeof global == "object" && global) || function() {
            return this
        }() || Function("return this")()
    });
    var Ht = c(($V, su) => {
        su.exports = function(e) {
            try {
                return !!e()
            } catch {
                return !0
            }
        }
    });
    var Lt = c((QV, uu) => {
        var vb = Ht();
        uu.exports = !vb(function() {
            return Object.defineProperty({}, 1, {
                get: function() {
                    return 7
                }
            })[1] != 7
        })
    });
    var vn = c((ZV, cu) => {
        var Ir = Function.prototype.call;
        cu.exports = Ir.bind ? Ir.bind(Ir) : function() {
            return Ir.apply(Ir, arguments)
        }
    });
    var pu = c(du => {
        "use strict";
        var lu = {}.propertyIsEnumerable,
            fu = Object.getOwnPropertyDescriptor,
            hb = fu && !lu.call({
                1: 2
            }, 1);
        du.f = hb ? function(t) {
            var r = fu(this, t);
            return !!r && r.enumerable
        } : lu
    });
    var Vi = c((eW, vu) => {
        vu.exports = function(e, t) {
            return {
                enumerable: !(e & 1),
                configurable: !(e & 2),
                writable: !(e & 4),
                value: t
            }
        }
    });
    var Ye = c((tW, gu) => {
        var hu = Function.prototype,
            Wi = hu.bind,
            Hi = hu.call,
            gb = Wi && Wi.bind(Hi);
        gu.exports = Wi ? function(e) {
            return e && gb(Hi, e)
        } : function(e) {
            return e && function() {
                return Hi.apply(e, arguments)
            }
        }
    });
    var Eu = c((rW, mu) => {
        var yu = Ye(),
            yb = yu({}.toString),
            mb = yu("".slice);
        mu.exports = function(e) {
            return mb(yb(e), 8, -1)
        }
    });
    var bu = c((nW, _u) => {
        var Eb = ye(),
            _b = Ye(),
            bb = Ht(),
            Tb = Eu(),
            Xi = Eb.Object,
            Ib = _b("".split);
        _u.exports = bb(function() {
            return !Xi("z").propertyIsEnumerable(0)
        }) ? function(e) {
            return Tb(e) == "String" ? Ib(e, "") : Xi(e)
        } : Xi
    });
    var Bi = c((iW, Tu) => {
        var Ob = ye(),
            wb = Ob.TypeError;
        Tu.exports = function(e) {
            if (e == null) throw wb("Can't call method on " + e);
            return e
        }
    });
    var Or = c((oW, Iu) => {
        var xb = bu(),
            Ab = Bi();
        Iu.exports = function(e) {
            return xb(Ab(e))
        }
    });
    var ot = c((aW, Ou) => {
        Ou.exports = function(e) {
            return typeof e == "function"
        }
    });
    var Xt = c((sW, wu) => {
        var Sb = ot();
        wu.exports = function(e) {
            return typeof e == "object" ? e !== null : Sb(e)
        }
    });
    var wr = c((uW, xu) => {
        var ji = ye(),
            Cb = ot(),
            Rb = function(e) {
                return Cb(e) ? e : void 0
            };
        xu.exports = function(e, t) {
            return arguments.length < 2 ? Rb(ji[e]) : ji[e] && ji[e][t]
        }
    });
    var Su = c((cW, Au) => {
        var Lb = Ye();
        Au.exports = Lb({}.isPrototypeOf)
    });
    var Ru = c((lW, Cu) => {
        var Nb = wr();
        Cu.exports = Nb("navigator", "userAgent") || ""
    });
    var Fu = c((fW, Du) => {
        var Mu = ye(),
            zi = Ru(),
            Lu = Mu.process,
            Nu = Mu.Deno,
            Pu = Lu && Lu.versions || Nu && Nu.version,
            qu = Pu && Pu.v8,
            $e, hn;
        qu && ($e = qu.split("."), hn = $e[0] > 0 && $e[0] < 4 ? 1 : +($e[0] + $e[1]));
        !hn && zi && ($e = zi.match(/Edge\/(\d+)/), (!$e || $e[1] >= 74) && ($e = zi.match(/Chrome\/(\d+)/), $e && (hn = +$e[1])));
        Du.exports = hn
    });
    var Ki = c((dW, ku) => {
        var Gu = Fu(),
            Pb = Ht();
        ku.exports = !!Object.getOwnPropertySymbols && !Pb(function() {
            var e = Symbol();
            return !String(e) || !(Object(e) instanceof Symbol) || !Symbol.sham && Gu && Gu < 41
        })
    });
    var Yi = c((pW, Uu) => {
        var qb = Ki();
        Uu.exports = qb && !Symbol.sham && typeof Symbol.iterator == "symbol"
    });
    var $i = c((vW, Vu) => {
        var Mb = ye(),
            Db = wr(),
            Fb = ot(),
            Gb = Su(),
            kb = Yi(),
            Ub = Mb.Object;
        Vu.exports = kb ? function(e) {
            return typeof e == "symbol"
        } : function(e) {
            var t = Db("Symbol");
            return Fb(t) && Gb(t.prototype, Ub(e))
        }
    });
    var Hu = c((hW, Wu) => {
        var Vb = ye(),
            Wb = Vb.String;
        Wu.exports = function(e) {
            try {
                return Wb(e)
            } catch {
                return "Object"
            }
        }
    });
    var Bu = c((gW, Xu) => {
        var Hb = ye(),
            Xb = ot(),
            Bb = Hu(),
            jb = Hb.TypeError;
        Xu.exports = function(e) {
            if (Xb(e)) return e;
            throw jb(Bb(e) + " is not a function")
        }
    });
    var zu = c((yW, ju) => {
        var zb = Bu();
        ju.exports = function(e, t) {
            var r = e[t];
            return r == null ? void 0 : zb(r)
        }
    });
    var Yu = c((mW, Ku) => {
        var Kb = ye(),
            Qi = vn(),
            Zi = ot(),
            Ji = Xt(),
            Yb = Kb.TypeError;
        Ku.exports = function(e, t) {
            var r, n;
            if (t === "string" && Zi(r = e.toString) && !Ji(n = Qi(r, e)) || Zi(r = e.valueOf) && !Ji(n = Qi(r, e)) || t !== "string" && Zi(r = e.toString) && !Ji(n = Qi(r, e))) return n;
            throw Yb("Can't convert object to primitive value")
        }
    });
    var Qu = c((EW, $u) => {
        $u.exports = !1
    });
    var gn = c((_W, Ju) => {
        var Zu = ye(),
            $b = Object.defineProperty;
        Ju.exports = function(e, t) {
            try {
                $b(Zu, e, {
                    value: t,
                    configurable: !0,
                    writable: !0
                })
            } catch {
                Zu[e] = t
            }
            return t
        }
    });
    var yn = c((bW, tc) => {
        var Qb = ye(),
            Zb = gn(),
            ec = "__core-js_shared__",
            Jb = Qb[ec] || Zb(ec, {});
        tc.exports = Jb
    });
    var eo = c((TW, nc) => {
        var eT = Qu(),
            rc = yn();
        (nc.exports = function(e, t) {
            return rc[e] || (rc[e] = t !== void 0 ? t : {})
        })("versions", []).push({
            version: "3.19.0",
            mode: eT ? "pure" : "global",
            copyright: "\xA9 2021 Denis Pushkarev (zloirock.ru)"
        })
    });
    var oc = c((IW, ic) => {
        var tT = ye(),
            rT = Bi(),
            nT = tT.Object;
        ic.exports = function(e) {
            return nT(rT(e))
        }
    });
    var _t = c((OW, ac) => {
        var iT = Ye(),
            oT = oc(),
            aT = iT({}.hasOwnProperty);
        ac.exports = Object.hasOwn || function(t, r) {
            return aT(oT(t), r)
        }
    });
    var to = c((wW, sc) => {
        var sT = Ye(),
            uT = 0,
            cT = Math.random(),
            lT = sT(1.toString);
        sc.exports = function(e) {
            return "Symbol(" + (e === void 0 ? "" : e) + ")_" + lT(++uT + cT, 36)
        }
    });
    var ro = c((xW, dc) => {
        var fT = ye(),
            dT = eo(),
            uc = _t(),
            pT = to(),
            cc = Ki(),
            fc = Yi(),
            Bt = dT("wks"),
            Nt = fT.Symbol,
            lc = Nt && Nt.for,
            vT = fc ? Nt : Nt && Nt.withoutSetter || pT;
        dc.exports = function(e) {
            if (!uc(Bt, e) || !(cc || typeof Bt[e] == "string")) {
                var t = "Symbol." + e;
                cc && uc(Nt, e) ? Bt[e] = Nt[e] : fc && lc ? Bt[e] = lc(t) : Bt[e] = vT(t)
            }
            return Bt[e]
        }
    });
    var gc = c((AW, hc) => {
        var hT = ye(),
            gT = vn(),
            pc = Xt(),
            vc = $i(),
            yT = zu(),
            mT = Yu(),
            ET = ro(),
            _T = hT.TypeError,
            bT = ET("toPrimitive");
        hc.exports = function(e, t) {
            if (!pc(e) || vc(e)) return e;
            var r = yT(e, bT),
                n;
            if (r) {
                if (t === void 0 && (t = "default"), n = gT(r, e, t), !pc(n) || vc(n)) return n;
                throw _T("Can't convert object to primitive value")
            }
            return t === void 0 && (t = "number"), mT(e, t)
        }
    });
    var no = c((SW, yc) => {
        var TT = gc(),
            IT = $i();
        yc.exports = function(e) {
            var t = TT(e, "string");
            return IT(t) ? t : t + ""
        }
    });
    var oo = c((CW, Ec) => {
        var OT = ye(),
            mc = Xt(),
            io = OT.document,
            wT = mc(io) && mc(io.createElement);
        Ec.exports = function(e) {
            return wT ? io.createElement(e) : {}
        }
    });
    var ao = c((RW, _c) => {
        var xT = Lt(),
            AT = Ht(),
            ST = oo();
        _c.exports = !xT && !AT(function() {
            return Object.defineProperty(ST("div"), "a", {
                get: function() {
                    return 7
                }
            }).a != 7
        })
    });
    var so = c(Tc => {
        var CT = Lt(),
            RT = vn(),
            LT = pu(),
            NT = Vi(),
            PT = Or(),
            qT = no(),
            MT = _t(),
            DT = ao(),
            bc = Object.getOwnPropertyDescriptor;
        Tc.f = CT ? bc : function(t, r) {
            if (t = PT(t), r = qT(r), DT) try {
                return bc(t, r)
            } catch {}
            if (MT(t, r)) return NT(!RT(LT.f, t, r), t[r])
        }
    });
    var xr = c((NW, Oc) => {
        var Ic = ye(),
            FT = Xt(),
            GT = Ic.String,
            kT = Ic.TypeError;
        Oc.exports = function(e) {
            if (FT(e)) return e;
            throw kT(GT(e) + " is not an object")
        }
    });
    var Ar = c(Ac => {
        var UT = ye(),
            VT = Lt(),
            WT = ao(),
            wc = xr(),
            HT = no(),
            XT = UT.TypeError,
            xc = Object.defineProperty;
        Ac.f = VT ? xc : function(t, r, n) {
            if (wc(t), r = HT(r), wc(n), WT) try {
                return xc(t, r, n)
            } catch {}
            if ("get" in n || "set" in n) throw XT("Accessors not supported");
            return "value" in n && (t[r] = n.value), t
        }
    });
    var mn = c((qW, Sc) => {
        var BT = Lt(),
            jT = Ar(),
            zT = Vi();
        Sc.exports = BT ? function(e, t, r) {
            return jT.f(e, t, zT(1, r))
        } : function(e, t, r) {
            return e[t] = r, e
        }
    });
    var co = c((MW, Cc) => {
        var KT = Ye(),
            YT = ot(),
            uo = yn(),
            $T = KT(Function.toString);
        YT(uo.inspectSource) || (uo.inspectSource = function(e) {
            return $T(e)
        });
        Cc.exports = uo.inspectSource
    });
    var Nc = c((DW, Lc) => {
        var QT = ye(),
            ZT = ot(),
            JT = co(),
            Rc = QT.WeakMap;
        Lc.exports = ZT(Rc) && /native code/.test(JT(Rc))
    });
    var lo = c((FW, qc) => {
        var eI = eo(),
            tI = to(),
            Pc = eI("keys");
        qc.exports = function(e) {
            return Pc[e] || (Pc[e] = tI(e))
        }
    });
    var En = c((GW, Mc) => {
        Mc.exports = {}
    });
    var Vc = c((kW, Uc) => {
        var rI = Nc(),
            kc = ye(),
            fo = Ye(),
            nI = Xt(),
            iI = mn(),
            po = _t(),
            vo = yn(),
            oI = lo(),
            aI = En(),
            Dc = "Object already initialized",
            go = kc.TypeError,
            sI = kc.WeakMap,
            _n, Sr, bn, uI = function(e) {
                return bn(e) ? Sr(e) : _n(e, {})
            },
            cI = function(e) {
                return function(t) {
                    var r;
                    if (!nI(t) || (r = Sr(t)).type !== e) throw go("Incompatible receiver, " + e + " required");
                    return r
                }
            };
        rI || vo.state ? (bt = vo.state || (vo.state = new sI), Fc = fo(bt.get), ho = fo(bt.has), Gc = fo(bt.set), _n = function(e, t) {
            if (ho(bt, e)) throw new go(Dc);
            return t.facade = e, Gc(bt, e, t), t
        }, Sr = function(e) {
            return Fc(bt, e) || {}
        }, bn = function(e) {
            return ho(bt, e)
        }) : (Pt = oI("state"), aI[Pt] = !0, _n = function(e, t) {
            if (po(e, Pt)) throw new go(Dc);
            return t.facade = e, iI(e, Pt, t), t
        }, Sr = function(e) {
            return po(e, Pt) ? e[Pt] : {}
        }, bn = function(e) {
            return po(e, Pt)
        });
        var bt, Fc, ho, Gc, Pt;
        Uc.exports = {
            set: _n,
            get: Sr,
            has: bn,
            enforce: uI,
            getterFor: cI
        }
    });
    var Xc = c((UW, Hc) => {
        var yo = Lt(),
            lI = _t(),
            Wc = Function.prototype,
            fI = yo && Object.getOwnPropertyDescriptor,
            mo = lI(Wc, "name"),
            dI = mo && function() {}.name === "something",
            pI = mo && (!yo || yo && fI(Wc, "name").configurable);
        Hc.exports = {
            EXISTS: mo,
            PROPER: dI,
            CONFIGURABLE: pI
        }
    });
    var Yc = c((VW, Kc) => {
        var vI = ye(),
            Bc = ot(),
            hI = _t(),
            jc = mn(),
            gI = gn(),
            yI = co(),
            zc = Vc(),
            mI = Xc().CONFIGURABLE,
            EI = zc.get,
            _I = zc.enforce,
            bI = String(String).split("String");
        (Kc.exports = function(e, t, r, n) {
            var i = n ? !!n.unsafe : !1,
                o = n ? !!n.enumerable : !1,
                a = n ? !!n.noTargetGet : !1,
                s = n && n.name !== void 0 ? n.name : t,
                u;
            if (Bc(r) && (String(s).slice(0, 7) === "Symbol(" && (s = "[" + String(s).replace(/^Symbol\(([^)]*)\)/, "$1") + "]"), (!hI(r, "name") || mI && r.name !== s) && jc(r, "name", s), u = _I(r), u.source || (u.source = bI.join(typeof s == "string" ? s : ""))), e === vI) {
                o ? e[t] = r : gI(t, r);
                return
            } else i ? !a && e[t] && (o = !0) : delete e[t];
            o ? e[t] = r : jc(e, t, r)
        })(Function.prototype, "toString", function() {
            return Bc(this) && EI(this).source || yI(this)
        })
    });
    var Eo = c((WW, $c) => {
        var TI = Math.ceil,
            II = Math.floor;
        $c.exports = function(e) {
            var t = +e;
            return t !== t || t === 0 ? 0 : (t > 0 ? II : TI)(t)
        }
    });
    var Zc = c((HW, Qc) => {
        var OI = Eo(),
            wI = Math.max,
            xI = Math.min;
        Qc.exports = function(e, t) {
            var r = OI(e);
            return r < 0 ? wI(r + t, 0) : xI(r, t)
        }
    });
    var el = c((XW, Jc) => {
        var AI = Eo(),
            SI = Math.min;
        Jc.exports = function(e) {
            return e > 0 ? SI(AI(e), 9007199254740991) : 0
        }
    });
    var rl = c((BW, tl) => {
        var CI = el();
        tl.exports = function(e) {
            return CI(e.length)
        }
    });
    var _o = c((jW, il) => {
        var RI = Or(),
            LI = Zc(),
            NI = rl(),
            nl = function(e) {
                return function(t, r, n) {
                    var i = RI(t),
                        o = NI(i),
                        a = LI(n, o),
                        s;
                    if (e && r != r) {
                        for (; o > a;)
                            if (s = i[a++], s != s) return !0
                    } else
                        for (; o > a; a++)
                            if ((e || a in i) && i[a] === r) return e || a || 0;
                    return !e && -1
                }
            };
        il.exports = {
            includes: nl(!0),
            indexOf: nl(!1)
        }
    });
    var To = c((zW, al) => {
        var PI = Ye(),
            bo = _t(),
            qI = Or(),
            MI = _o().indexOf,
            DI = En(),
            ol = PI([].push);
        al.exports = function(e, t) {
            var r = qI(e),
                n = 0,
                i = [],
                o;
            for (o in r) !bo(DI, o) && bo(r, o) && ol(i, o);
            for (; t.length > n;) bo(r, o = t[n++]) && (~MI(i, o) || ol(i, o));
            return i
        }
    });
    var Tn = c((KW, sl) => {
        sl.exports = ["constructor", "hasOwnProperty", "isPrototypeOf", "propertyIsEnumerable", "toLocaleString", "toString", "valueOf"]
    });
    var cl = c(ul => {
        var FI = To(),
            GI = Tn(),
            kI = GI.concat("length", "prototype");
        ul.f = Object.getOwnPropertyNames || function(t) {
            return FI(t, kI)
        }
    });
    var fl = c(ll => {
        ll.f = Object.getOwnPropertySymbols
    });
    var pl = c((QW, dl) => {
        var UI = wr(),
            VI = Ye(),
            WI = cl(),
            HI = fl(),
            XI = xr(),
            BI = VI([].concat);
        dl.exports = UI("Reflect", "ownKeys") || function(t) {
            var r = WI.f(XI(t)),
                n = HI.f;
            return n ? BI(r, n(t)) : r
        }
    });
    var hl = c((ZW, vl) => {
        var jI = _t(),
            zI = pl(),
            KI = so(),
            YI = Ar();
        vl.exports = function(e, t) {
            for (var r = zI(t), n = YI.f, i = KI.f, o = 0; o < r.length; o++) {
                var a = r[o];
                jI(e, a) || n(e, a, i(t, a))
            }
        }
    });
    var yl = c((JW, gl) => {
        var $I = Ht(),
            QI = ot(),
            ZI = /#|\.prototype\./,
            Cr = function(e, t) {
                var r = eO[JI(e)];
                return r == rO ? !0 : r == tO ? !1 : QI(t) ? $I(t) : !!t
            },
            JI = Cr.normalize = function(e) {
                return String(e).replace(ZI, ".").toLowerCase()
            },
            eO = Cr.data = {},
            tO = Cr.NATIVE = "N",
            rO = Cr.POLYFILL = "P";
        gl.exports = Cr
    });
    var El = c((eH, ml) => {
        var Io = ye(),
            nO = so().f,
            iO = mn(),
            oO = Yc(),
            aO = gn(),
            sO = hl(),
            uO = yl();
        ml.exports = function(e, t) {
            var r = e.target,
                n = e.global,
                i = e.stat,
                o, a, s, u, f, g;
            if (n ? a = Io : i ? a = Io[r] || aO(r, {}) : a = (Io[r] || {}).prototype, a)
                for (s in t) {
                    if (f = t[s], e.noTargetGet ? (g = nO(a, s), u = g && g.value) : u = a[s], o = uO(n ? s : r + (i ? "." : "#") + s, e.forced), !o && u !== void 0) {
                        if (typeof f == typeof u) continue;
                        sO(f, u)
                    }(e.sham || u && u.sham) && iO(f, "sham", !0), oO(a, s, f, e)
                }
        }
    });
    var bl = c((tH, _l) => {
        var cO = To(),
            lO = Tn();
        _l.exports = Object.keys || function(t) {
            return cO(t, lO)
        }
    });
    var Il = c((rH, Tl) => {
        var fO = Lt(),
            dO = Ar(),
            pO = xr(),
            vO = Or(),
            hO = bl();
        Tl.exports = fO ? Object.defineProperties : function(t, r) {
            pO(t);
            for (var n = vO(r), i = hO(r), o = i.length, a = 0, s; o > a;) dO.f(t, s = i[a++], n[s]);
            return t
        }
    });
    var wl = c((nH, Ol) => {
        var gO = wr();
        Ol.exports = gO("document", "documentElement")
    });
    var Pl = c((iH, Nl) => {
        var yO = xr(),
            mO = Il(),
            xl = Tn(),
            EO = En(),
            _O = wl(),
            bO = oo(),
            TO = lo(),
            Al = ">",
            Sl = "<",
            wo = "prototype",
            xo = "script",
            Rl = TO("IE_PROTO"),
            Oo = function() {},
            Ll = function(e) {
                return Sl + xo + Al + e + Sl + "/" + xo + Al
            },
            Cl = function(e) {
                e.write(Ll("")), e.close();
                var t = e.parentWindow.Object;
                return e = null, t
            },
            IO = function() {
                var e = bO("iframe"),
                    t = "java" + xo + ":",
                    r;
                return e.style.display = "none", _O.appendChild(e), e.src = String(t), r = e.contentWindow.document, r.open(), r.write(Ll("document.F=Object")), r.close(), r.F
            },
            In, On = function() {
                try {
                    In = new ActiveXObject("htmlfile")
                } catch {}
                On = typeof document < "u" ? document.domain && In ? Cl(In) : IO() : Cl(In);
                for (var e = xl.length; e--;) delete On[wo][xl[e]];
                return On()
            };
        EO[Rl] = !0;
        Nl.exports = Object.create || function(t, r) {
            var n;
            return t !== null ? (Oo[wo] = yO(t), n = new Oo, Oo[wo] = null, n[Rl] = t) : n = On(), r === void 0 ? n : mO(n, r)
        }
    });
    var Ml = c((oH, ql) => {
        var OO = ro(),
            wO = Pl(),
            xO = Ar(),
            Ao = OO("unscopables"),
            So = Array.prototype;
        So[Ao] == null && xO.f(So, Ao, {
            configurable: !0,
            value: wO(null)
        });
        ql.exports = function(e) {
            So[Ao][e] = !0
        }
    });
    var Dl = c(() => {
        "use strict";
        var AO = El(),
            SO = _o().includes,
            CO = Ml();
        AO({
            target: "Array",
            proto: !0
        }, {
            includes: function(t) {
                return SO(this, t, arguments.length > 1 ? arguments[1] : void 0)
            }
        });
        CO("includes")
    });
    var Gl = c((uH, Fl) => {
        var RO = ye(),
            LO = Ye();
        Fl.exports = function(e, t) {
            return LO(RO[e].prototype[t])
        }
    });
    var Ul = c((cH, kl) => {
        Dl();
        var NO = Gl();
        kl.exports = NO("Array", "includes")
    });
    var Wl = c((lH, Vl) => {
        var PO = Ul();
        Vl.exports = PO
    });
    var Xl = c((fH, Hl) => {
        var qO = Wl();
        Hl.exports = qO
    });
    var Co = c((dH, Bl) => {
        var MO = typeof global == "object" && global && global.Object === Object && global;
        Bl.exports = MO
    });
    var Qe = c((pH, jl) => {
        var DO = Co(),
            FO = typeof self == "object" && self && self.Object === Object && self,
            GO = DO || FO || Function("return this")();
        jl.exports = GO
    });
    var jt = c((vH, zl) => {
        var kO = Qe(),
            UO = kO.Symbol;
        zl.exports = UO
    });
    var Ql = c((hH, $l) => {
        var Kl = jt(),
            Yl = Object.prototype,
            VO = Yl.hasOwnProperty,
            WO = Yl.toString,
            Rr = Kl ? Kl.toStringTag : void 0;

        function HO(e) {
            var t = VO.call(e, Rr),
                r = e[Rr];
            try {
                e[Rr] = void 0;
                var n = !0
            } catch {}
            var i = WO.call(e);
            return n && (t ? e[Rr] = r : delete e[Rr]), i
        }
        $l.exports = HO
    });
    var Jl = c((gH, Zl) => {
        var XO = Object.prototype,
            BO = XO.toString;

        function jO(e) {
            return BO.call(e)
        }
        Zl.exports = jO
    });
    var Tt = c((yH, rf) => {
        var ef = jt(),
            zO = Ql(),
            KO = Jl(),
            YO = "[object Null]",
            $O = "[object Undefined]",
            tf = ef ? ef.toStringTag : void 0;

        function QO(e) {
            return e == null ? e === void 0 ? $O : YO : tf && tf in Object(e) ? zO(e) : KO(e)
        }
        rf.exports = QO
    });
    var Ro = c((mH, nf) => {
        function ZO(e, t) {
            return function(r) {
                return e(t(r))
            }
        }
        nf.exports = ZO
    });
    var Lo = c((EH, of ) => {
        var JO = Ro(),
            ew = JO(Object.getPrototypeOf, Object); of .exports = ew
    });
    var pt = c((_H, af) => {
        function tw(e) {
            return e != null && typeof e == "object"
        }
        af.exports = tw
    });
    var No = c((bH, uf) => {
        var rw = Tt(),
            nw = Lo(),
            iw = pt(),
            ow = "[object Object]",
            aw = Function.prototype,
            sw = Object.prototype,
            sf = aw.toString,
            uw = sw.hasOwnProperty,
            cw = sf.call(Object);

        function lw(e) {
            if (!iw(e) || rw(e) != ow) return !1;
            var t = nw(e);
            if (t === null) return !0;
            var r = uw.call(t, "constructor") && t.constructor;
            return typeof r == "function" && r instanceof r && sf.call(r) == cw
        }
        uf.exports = lw
    });
    var cf = c(Po => {
        "use strict";
        Object.defineProperty(Po, "__esModule", {
            value: !0
        });
        Po.default = fw;

        function fw(e) {
            var t, r = e.Symbol;
            return typeof r == "function" ? r.observable ? t = r.observable : (t = r("observable"), r.observable = t) : t = "@@observable", t
        }
    });
    var lf = c((Mo, qo) => {
        "use strict";
        Object.defineProperty(Mo, "__esModule", {
            value: !0
        });
        var dw = cf(),
            pw = vw(dw);

        function vw(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }
        var zt;
        typeof self < "u" ? zt = self : typeof window < "u" ? zt = window : typeof global < "u" ? zt = global : typeof qo < "u" ? zt = qo : zt = Function("return this")();
        var hw = (0, pw.default)(zt);
        Mo.default = hw
    });
    var Do = c(Lr => {
        "use strict";
        Lr.__esModule = !0;
        Lr.ActionTypes = void 0;
        Lr.default = vf;
        var gw = No(),
            yw = pf(gw),
            mw = lf(),
            ff = pf(mw);

        function pf(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }
        var df = Lr.ActionTypes = {
            INIT: "@@redux/INIT"
        };

        function vf(e, t, r) {
            var n;
            if (typeof t == "function" && typeof r > "u" && (r = t, t = void 0), typeof r < "u") {
                if (typeof r != "function") throw new Error("Expected the enhancer to be a function.");
                return r(vf)(e, t)
            }
            if (typeof e != "function") throw new Error("Expected the reducer to be a function.");
            var i = e,
                o = t,
                a = [],
                s = a,
                u = !1;

            function f() {
                s === a && (s = a.slice())
            }

            function g() {
                return o
            }

            function p(O) {
                if (typeof O != "function") throw new Error("Expected listener to be a function.");
                var F = !0;
                return f(), s.push(O),
                    function() {
                        if (F) {
                            F = !1, f();
                            var P = s.indexOf(O);
                            s.splice(P, 1)
                        }
                    }
            }

            function m(O) {
                if (!(0, yw.default)(O)) throw new Error("Actions must be plain objects. Use custom middleware for async actions.");
                if (typeof O.type > "u") throw new Error('Actions may not have an undefined "type" property. Have you misspelled a constant?');
                if (u) throw new Error("Reducers may not dispatch actions.");
                try {
                    u = !0, o = i(o, O)
                } finally {
                    u = !1
                }
                for (var F = a = s, S = 0; S < F.length; S++) F[S]();
                return O
            }

            function E(O) {
                if (typeof O != "function") throw new Error("Expected the nextReducer to be a function.");
                i = O, m({
                    type: df.INIT
                })
            }

            function T() {
                var O, F = p;
                return O = {
                    subscribe: function(P) {
                        if (typeof P != "object") throw new TypeError("Expected the observer to be an object.");

                        function A() {
                            P.next && P.next(g())
                        }
                        A();
                        var M = F(A);
                        return {
                            unsubscribe: M
                        }
                    }
                }, O[ff.default] = function() {
                    return this
                }, O
            }
            return m({
                type: df.INIT
            }), n = {
                dispatch: m,
                subscribe: p,
                getState: g,
                replaceReducer: E
            }, n[ff.default] = T, n
        }
    });
    var Go = c(Fo => {
        "use strict";
        Fo.__esModule = !0;
        Fo.default = Ew;

        function Ew(e) {
            typeof console < "u" && typeof console.error == "function" && console.error(e);
            try {
                throw new Error(e)
            } catch {}
        }
    });
    var yf = c(ko => {
        "use strict";
        ko.__esModule = !0;
        ko.default = Ow;
        var hf = Do(),
            _w = No(),
            wH = gf(_w),
            bw = Go(),
            xH = gf(bw);

        function gf(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }

        function Tw(e, t) {
            var r = t && t.type,
                n = r && '"' + r.toString() + '"' || "an action";
            return "Given action " + n + ', reducer "' + e + '" returned undefined. To ignore an action, you must explicitly return the previous state.'
        }

        function Iw(e) {
            Object.keys(e).forEach(function(t) {
                var r = e[t],
                    n = r(void 0, {
                        type: hf.ActionTypes.INIT
                    });
                if (typeof n > "u") throw new Error('Reducer "' + t + '" returned undefined during initialization. If the state passed to the reducer is undefined, you must explicitly return the initial state. The initial state may not be undefined.');
                var i = "@@redux/PROBE_UNKNOWN_ACTION_" + Math.random().toString(36).substring(7).split("").join(".");
                if (typeof r(void 0, {
                        type: i
                    }) > "u") throw new Error('Reducer "' + t + '" returned undefined when probed with a random type. ' + ("Don't try to handle " + hf.ActionTypes.INIT + ' or other actions in "redux/*" ') + "namespace. They are considered private. Instead, you must return the current state for any unknown actions, unless it is undefined, in which case you must return the initial state, regardless of the action type. The initial state may not be undefined.")
            })
        }

        function Ow(e) {
            for (var t = Object.keys(e), r = {}, n = 0; n < t.length; n++) {
                var i = t[n];
                typeof e[i] == "function" && (r[i] = e[i])
            }
            var o = Object.keys(r);
            if (!1) var a;
            var s;
            try {
                Iw(r)
            } catch (u) {
                s = u
            }
            return function() {
                var f = arguments.length <= 0 || arguments[0] === void 0 ? {} : arguments[0],
                    g = arguments[1];
                if (s) throw s;
                if (!1) var p;
                for (var m = !1, E = {}, T = 0; T < o.length; T++) {
                    var O = o[T],
                        F = r[O],
                        S = f[O],
                        P = F(S, g);
                    if (typeof P > "u") {
                        var A = Tw(O, g);
                        throw new Error(A)
                    }
                    E[O] = P, m = m || P !== S
                }
                return m ? E : f
            }
        }
    });
    var Ef = c(Uo => {
        "use strict";
        Uo.__esModule = !0;
        Uo.default = ww;

        function mf(e, t) {
            return function() {
                return t(e.apply(void 0, arguments))
            }
        }

        function ww(e, t) {
            if (typeof e == "function") return mf(e, t);
            if (typeof e != "object" || e === null) throw new Error("bindActionCreators expected an object or a function, instead received " + (e === null ? "null" : typeof e) + '. Did you write "import ActionCreators from" instead of "import * as ActionCreators from"?');
            for (var r = Object.keys(e), n = {}, i = 0; i < r.length; i++) {
                var o = r[i],
                    a = e[o];
                typeof a == "function" && (n[o] = mf(a, t))
            }
            return n
        }
    });
    var Wo = c(Vo => {
        "use strict";
        Vo.__esModule = !0;
        Vo.default = xw;

        function xw() {
            for (var e = arguments.length, t = Array(e), r = 0; r < e; r++) t[r] = arguments[r];
            if (t.length === 0) return function(o) {
                return o
            };
            if (t.length === 1) return t[0];
            var n = t[t.length - 1],
                i = t.slice(0, -1);
            return function() {
                return i.reduceRight(function(o, a) {
                    return a(o)
                }, n.apply(void 0, arguments))
            }
        }
    });
    var _f = c(Ho => {
        "use strict";
        Ho.__esModule = !0;
        var Aw = Object.assign || function(e) {
            for (var t = 1; t < arguments.length; t++) {
                var r = arguments[t];
                for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n])
            }
            return e
        };
        Ho.default = Lw;
        var Sw = Wo(),
            Cw = Rw(Sw);

        function Rw(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }

        function Lw() {
            for (var e = arguments.length, t = Array(e), r = 0; r < e; r++) t[r] = arguments[r];
            return function(n) {
                return function(i, o, a) {
                    var s = n(i, o, a),
                        u = s.dispatch,
                        f = [],
                        g = {
                            getState: s.getState,
                            dispatch: function(m) {
                                return u(m)
                            }
                        };
                    return f = t.map(function(p) {
                        return p(g)
                    }), u = Cw.default.apply(void 0, f)(s.dispatch), Aw({}, s, {
                        dispatch: u
                    })
                }
            }
        }
    });
    var Xo = c(He => {
        "use strict";
        He.__esModule = !0;
        He.compose = He.applyMiddleware = He.bindActionCreators = He.combineReducers = He.createStore = void 0;
        var Nw = Do(),
            Pw = Kt(Nw),
            qw = yf(),
            Mw = Kt(qw),
            Dw = Ef(),
            Fw = Kt(Dw),
            Gw = _f(),
            kw = Kt(Gw),
            Uw = Wo(),
            Vw = Kt(Uw),
            Ww = Go(),
            LH = Kt(Ww);

        function Kt(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }
        He.createStore = Pw.default;
        He.combineReducers = Mw.default;
        He.bindActionCreators = Fw.default;
        He.applyMiddleware = kw.default;
        He.compose = Vw.default
    });
    var Ze, Bo, at, Hw, Xw, wn, Bw, jo = ge(() => {
        "use strict";
        Ze = {
            NAVBAR_OPEN: "NAVBAR_OPEN",
            NAVBAR_CLOSE: "NAVBAR_CLOSE",
            TAB_ACTIVE: "TAB_ACTIVE",
            TAB_INACTIVE: "TAB_INACTIVE",
            SLIDER_ACTIVE: "SLIDER_ACTIVE",
            SLIDER_INACTIVE: "SLIDER_INACTIVE",
            DROPDOWN_OPEN: "DROPDOWN_OPEN",
            DROPDOWN_CLOSE: "DROPDOWN_CLOSE",
            MOUSE_CLICK: "MOUSE_CLICK",
            MOUSE_SECOND_CLICK: "MOUSE_SECOND_CLICK",
            MOUSE_DOWN: "MOUSE_DOWN",
            MOUSE_UP: "MOUSE_UP",
            MOUSE_OVER: "MOUSE_OVER",
            MOUSE_OUT: "MOUSE_OUT",
            MOUSE_MOVE: "MOUSE_MOVE",
            MOUSE_MOVE_IN_VIEWPORT: "MOUSE_MOVE_IN_VIEWPORT",
            SCROLL_INTO_VIEW: "SCROLL_INTO_VIEW",
            SCROLL_OUT_OF_VIEW: "SCROLL_OUT_OF_VIEW",
            SCROLLING_IN_VIEW: "SCROLLING_IN_VIEW",
            ECOMMERCE_CART_OPEN: "ECOMMERCE_CART_OPEN",
            ECOMMERCE_CART_CLOSE: "ECOMMERCE_CART_CLOSE",
            PAGE_START: "PAGE_START",
            PAGE_FINISH: "PAGE_FINISH",
            PAGE_SCROLL_UP: "PAGE_SCROLL_UP",
            PAGE_SCROLL_DOWN: "PAGE_SCROLL_DOWN",
            PAGE_SCROLL: "PAGE_SCROLL"
        }, Bo = {
            ELEMENT: "ELEMENT",
            CLASS: "CLASS",
            PAGE: "PAGE"
        }, at = {
            ELEMENT: "ELEMENT",
            VIEWPORT: "VIEWPORT"
        }, Hw = {
            X_AXIS: "X_AXIS",
            Y_AXIS: "Y_AXIS"
        }, Xw = {
            CHILDREN: "CHILDREN",
            SIBLINGS: "SIBLINGS",
            IMMEDIATE_CHILDREN: "IMMEDIATE_CHILDREN"
        }, wn = {
            FADE_EFFECT: "FADE_EFFECT",
            SLIDE_EFFECT: "SLIDE_EFFECT",
            GROW_EFFECT: "GROW_EFFECT",
            SHRINK_EFFECT: "SHRINK_EFFECT",
            SPIN_EFFECT: "SPIN_EFFECT",
            FLY_EFFECT: "FLY_EFFECT",
            POP_EFFECT: "POP_EFFECT",
            FLIP_EFFECT: "FLIP_EFFECT",
            JIGGLE_EFFECT: "JIGGLE_EFFECT",
            PULSE_EFFECT: "PULSE_EFFECT",
            DROP_EFFECT: "DROP_EFFECT",
            BLINK_EFFECT: "BLINK_EFFECT",
            BOUNCE_EFFECT: "BOUNCE_EFFECT",
            FLIP_LEFT_TO_RIGHT_EFFECT: "FLIP_LEFT_TO_RIGHT_EFFECT",
            FLIP_RIGHT_TO_LEFT_EFFECT: "FLIP_RIGHT_TO_LEFT_EFFECT",
            RUBBER_BAND_EFFECT: "RUBBER_BAND_EFFECT",
            JELLO_EFFECT: "JELLO_EFFECT",
            GROW_BIG_EFFECT: "GROW_BIG_EFFECT",
            SHRINK_BIG_EFFECT: "SHRINK_BIG_EFFECT",
            PLUGIN_LOTTIE_EFFECT: "PLUGIN_LOTTIE_EFFECT"
        }, Bw = {
            LEFT: "LEFT",
            RIGHT: "RIGHT",
            BOTTOM: "BOTTOM",
            TOP: "TOP",
            BOTTOM_LEFT: "BOTTOM_LEFT",
            BOTTOM_RIGHT: "BOTTOM_RIGHT",
            TOP_RIGHT: "TOP_RIGHT",
            TOP_LEFT: "TOP_LEFT",
            CLOCKWISE: "CLOCKWISE",
            COUNTER_CLOCKWISE: "COUNTER_CLOCKWISE"
        }
    });
    var ke, jw, xn = ge(() => {
        "use strict";
        ke = {
            TRANSFORM_MOVE: "TRANSFORM_MOVE",
            TRANSFORM_SCALE: "TRANSFORM_SCALE",
            TRANSFORM_ROTATE: "TRANSFORM_ROTATE",
            TRANSFORM_SKEW: "TRANSFORM_SKEW",
            STYLE_OPACITY: "STYLE_OPACITY",
            STYLE_SIZE: "STYLE_SIZE",
            STYLE_FILTER: "STYLE_FILTER",
            STYLE_FONT_VARIATION: "STYLE_FONT_VARIATION",
            STYLE_BACKGROUND_COLOR: "STYLE_BACKGROUND_COLOR",
            STYLE_BORDER: "STYLE_BORDER",
            STYLE_TEXT_COLOR: "STYLE_TEXT_COLOR",
            OBJECT_VALUE: "OBJECT_VALUE",
            PLUGIN_LOTTIE: "PLUGIN_LOTTIE",
            PLUGIN_SPLINE: "PLUGIN_SPLINE",
            PLUGIN_VARIABLE: "PLUGIN_VARIABLE",
            GENERAL_DISPLAY: "GENERAL_DISPLAY",
            GENERAL_START_ACTION: "GENERAL_START_ACTION",
            GENERAL_CONTINUOUS_ACTION: "GENERAL_CONTINUOUS_ACTION",
            GENERAL_COMBO_CLASS: "GENERAL_COMBO_CLASS",
            GENERAL_STOP_ACTION: "GENERAL_STOP_ACTION",
            GENERAL_LOOP: "GENERAL_LOOP",
            STYLE_BOX_SHADOW: "STYLE_BOX_SHADOW"
        }, jw = {
            ELEMENT: "ELEMENT",
            ELEMENT_CLASS: "ELEMENT_CLASS",
            TRIGGER_ELEMENT: "TRIGGER_ELEMENT"
        }
    });
    var zw, bf = ge(() => {
        "use strict";
        zw = {
            MOUSE_CLICK_INTERACTION: "MOUSE_CLICK_INTERACTION",
            MOUSE_HOVER_INTERACTION: "MOUSE_HOVER_INTERACTION",
            MOUSE_MOVE_INTERACTION: "MOUSE_MOVE_INTERACTION",
            SCROLL_INTO_VIEW_INTERACTION: "SCROLL_INTO_VIEW_INTERACTION",
            SCROLLING_IN_VIEW_INTERACTION: "SCROLLING_IN_VIEW_INTERACTION",
            MOUSE_MOVE_IN_VIEWPORT_INTERACTION: "MOUSE_MOVE_IN_VIEWPORT_INTERACTION",
            PAGE_IS_SCROLLING_INTERACTION: "PAGE_IS_SCROLLING_INTERACTION",
            PAGE_LOAD_INTERACTION: "PAGE_LOAD_INTERACTION",
            PAGE_SCROLLED_INTERACTION: "PAGE_SCROLLED_INTERACTION",
            NAVBAR_INTERACTION: "NAVBAR_INTERACTION",
            DROPDOWN_INTERACTION: "DROPDOWN_INTERACTION",
            ECOMMERCE_CART_INTERACTION: "ECOMMERCE_CART_INTERACTION",
            TAB_INTERACTION: "TAB_INTERACTION",
            SLIDER_INTERACTION: "SLIDER_INTERACTION"
        }
    });
    var Kw, Yw, $w, Qw, Zw, Jw, ex, zo, Tf = ge(() => {
        "use strict";
        xn();
        ({
            TRANSFORM_MOVE: Kw,
            TRANSFORM_SCALE: Yw,
            TRANSFORM_ROTATE: $w,
            TRANSFORM_SKEW: Qw,
            STYLE_SIZE: Zw,
            STYLE_FILTER: Jw,
            STYLE_FONT_VARIATION: ex
        } = ke), zo = {
            [Kw]: !0,
            [Yw]: !0,
            [$w]: !0,
            [Qw]: !0,
            [Zw]: !0,
            [Jw]: !0,
            [ex]: !0
        }
    });
    var Ie = {};
    Fe(Ie, {
        IX2_ACTION_LIST_PLAYBACK_CHANGED: () => yx,
        IX2_ANIMATION_FRAME_CHANGED: () => fx,
        IX2_CLEAR_REQUESTED: () => ux,
        IX2_ELEMENT_STATE_CHANGED: () => gx,
        IX2_EVENT_LISTENER_ADDED: () => cx,
        IX2_EVENT_STATE_CHANGED: () => lx,
        IX2_INSTANCE_ADDED: () => px,
        IX2_INSTANCE_REMOVED: () => hx,
        IX2_INSTANCE_STARTED: () => vx,
        IX2_MEDIA_QUERIES_DEFINED: () => Ex,
        IX2_PARAMETER_CHANGED: () => dx,
        IX2_PLAYBACK_REQUESTED: () => ax,
        IX2_PREVIEW_REQUESTED: () => ox,
        IX2_RAW_DATA_IMPORTED: () => tx,
        IX2_SESSION_INITIALIZED: () => rx,
        IX2_SESSION_STARTED: () => nx,
        IX2_SESSION_STOPPED: () => ix,
        IX2_STOP_REQUESTED: () => sx,
        IX2_TEST_FRAME_RENDERED: () => _x,
        IX2_VIEWPORT_WIDTH_CHANGED: () => mx
    });
    var tx, rx, nx, ix, ox, ax, sx, ux, cx, lx, fx, dx, px, vx, hx, gx, yx, mx, Ex, _x, If = ge(() => {
        "use strict";
        tx = "IX2_RAW_DATA_IMPORTED", rx = "IX2_SESSION_INITIALIZED", nx = "IX2_SESSION_STARTED", ix = "IX2_SESSION_STOPPED", ox = "IX2_PREVIEW_REQUESTED", ax = "IX2_PLAYBACK_REQUESTED", sx = "IX2_STOP_REQUESTED", ux = "IX2_CLEAR_REQUESTED", cx = "IX2_EVENT_LISTENER_ADDED", lx = "IX2_EVENT_STATE_CHANGED", fx = "IX2_ANIMATION_FRAME_CHANGED", dx = "IX2_PARAMETER_CHANGED", px = "IX2_INSTANCE_ADDED", vx = "IX2_INSTANCE_STARTED", hx = "IX2_INSTANCE_REMOVED", gx = "IX2_ELEMENT_STATE_CHANGED", yx = "IX2_ACTION_LIST_PLAYBACK_CHANGED", mx = "IX2_VIEWPORT_WIDTH_CHANGED", Ex = "IX2_MEDIA_QUERIES_DEFINED", _x = "IX2_TEST_FRAME_RENDERED"
    });
    var Ce = {};
    Fe(Ce, {
        ABSTRACT_NODE: () => mA,
        AUTO: () => sA,
        BACKGROUND: () => tA,
        BACKGROUND_COLOR: () => eA,
        BAR_DELIMITER: () => lA,
        BORDER_COLOR: () => rA,
        BOUNDARY_SELECTOR: () => wx,
        CHILDREN: () => fA,
        COLON_DELIMITER: () => cA,
        COLOR: () => nA,
        COMMA_DELIMITER: () => uA,
        CONFIG_UNIT: () => Px,
        CONFIG_VALUE: () => Cx,
        CONFIG_X_UNIT: () => Rx,
        CONFIG_X_VALUE: () => xx,
        CONFIG_Y_UNIT: () => Lx,
        CONFIG_Y_VALUE: () => Ax,
        CONFIG_Z_UNIT: () => Nx,
        CONFIG_Z_VALUE: () => Sx,
        DISPLAY: () => iA,
        FILTER: () => $x,
        FLEX: () => oA,
        FONT_VARIATION_SETTINGS: () => Qx,
        HEIGHT: () => Jx,
        HTML_ELEMENT: () => gA,
        IMMEDIATE_CHILDREN: () => dA,
        IX2_ID_DELIMITER: () => bx,
        OPACITY: () => Yx,
        PARENT: () => vA,
        PLAIN_OBJECT: () => yA,
        PRESERVE_3D: () => hA,
        RENDER_GENERAL: () => _A,
        RENDER_PLUGIN: () => TA,
        RENDER_STYLE: () => bA,
        RENDER_TRANSFORM: () => EA,
        ROTATE_X: () => Hx,
        ROTATE_Y: () => Xx,
        ROTATE_Z: () => Bx,
        SCALE_3D: () => Wx,
        SCALE_X: () => kx,
        SCALE_Y: () => Ux,
        SCALE_Z: () => Vx,
        SIBLINGS: () => pA,
        SKEW: () => jx,
        SKEW_X: () => zx,
        SKEW_Y: () => Kx,
        TRANSFORM: () => qx,
        TRANSLATE_3D: () => Gx,
        TRANSLATE_X: () => Mx,
        TRANSLATE_Y: () => Dx,
        TRANSLATE_Z: () => Fx,
        WF_PAGE: () => Tx,
        WIDTH: () => Zx,
        WILL_CHANGE: () => aA,
        W_MOD_IX: () => Ox,
        W_MOD_JS: () => Ix
    });
    var bx, Tx, Ix, Ox, wx, xx, Ax, Sx, Cx, Rx, Lx, Nx, Px, qx, Mx, Dx, Fx, Gx, kx, Ux, Vx, Wx, Hx, Xx, Bx, jx, zx, Kx, Yx, $x, Qx, Zx, Jx, eA, tA, rA, nA, iA, oA, aA, sA, uA, cA, lA, fA, dA, pA, vA, hA, gA, yA, mA, EA, _A, bA, TA, Of = ge(() => {
        "use strict";
        bx = "|", Tx = "data-wf-page", Ix = "w-mod-js", Ox = "w-mod-ix", wx = ".w-dyn-item", xx = "xValue", Ax = "yValue", Sx = "zValue", Cx = "value", Rx = "xUnit", Lx = "yUnit", Nx = "zUnit", Px = "unit", qx = "transform", Mx = "translateX", Dx = "translateY", Fx = "translateZ", Gx = "translate3d", kx = "scaleX", Ux = "scaleY", Vx = "scaleZ", Wx = "scale3d", Hx = "rotateX", Xx = "rotateY", Bx = "rotateZ", jx = "skew", zx = "skewX", Kx = "skewY", Yx = "opacity", $x = "filter", Qx = "font-variation-settings", Zx = "width", Jx = "height", eA = "backgroundColor", tA = "background", rA = "borderColor", nA = "color", iA = "display", oA = "flex", aA = "willChange", sA = "AUTO", uA = ",", cA = ":", lA = "|", fA = "CHILDREN", dA = "IMMEDIATE_CHILDREN", pA = "SIBLINGS", vA = "PARENT", hA = "preserve-3d", gA = "HTML_ELEMENT", yA = "PLAIN_OBJECT", mA = "ABSTRACT_NODE", EA = "RENDER_TRANSFORM", _A = "RENDER_GENERAL", bA = "RENDER_STYLE", TA = "RENDER_PLUGIN"
    });
    var wf = {};
    Fe(wf, {
        ActionAppliesTo: () => jw,
        ActionTypeConsts: () => ke,
        EventAppliesTo: () => Bo,
        EventBasedOn: () => at,
        EventContinuousMouseAxes: () => Hw,
        EventLimitAffectedElements: () => Xw,
        EventTypeConsts: () => Ze,
        IX2EngineActionTypes: () => Ie,
        IX2EngineConstants: () => Ce,
        InteractionTypeConsts: () => zw,
        QuickEffectDirectionConsts: () => Bw,
        QuickEffectIds: () => wn,
        ReducedMotionTypes: () => zo
    });
    var Ue = ge(() => {
        "use strict";
        jo();
        xn();
        bf();
        Tf();
        If();
        Of();
        xn();
        jo()
    });
    var IA, xf, Af = ge(() => {
        "use strict";
        Ue();
        ({
            IX2_RAW_DATA_IMPORTED: IA
        } = Ie), xf = (e = Object.freeze({}), t) => {
            switch (t.type) {
                case IA:
                    return t.payload.ixData || Object.freeze({});
                default:
                    return e
            }
        }
    });
    var Yt = c(Ee => {
        "use strict";
        Object.defineProperty(Ee, "__esModule", {
            value: !0
        });
        var OA = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(e) {
            return typeof e
        } : function(e) {
            return e && typeof Symbol == "function" && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
        };
        Ee.clone = Sn;
        Ee.addLast = Rf;
        Ee.addFirst = Lf;
        Ee.removeLast = Nf;
        Ee.removeFirst = Pf;
        Ee.insert = qf;
        Ee.removeAt = Mf;
        Ee.replaceAt = Df;
        Ee.getIn = Cn;
        Ee.set = Rn;
        Ee.setIn = Ln;
        Ee.update = Gf;
        Ee.updateIn = kf;
        Ee.merge = Uf;
        Ee.mergeDeep = Vf;
        Ee.mergeIn = Wf;
        Ee.omit = Hf;
        Ee.addDefaults = Xf;
        var Sf = "INVALID_ARGS";

        function Cf(e) {
            throw new Error(e)
        }

        function Ko(e) {
            var t = Object.keys(e);
            return Object.getOwnPropertySymbols ? t.concat(Object.getOwnPropertySymbols(e)) : t
        }
        var wA = {}.hasOwnProperty;

        function Sn(e) {
            if (Array.isArray(e)) return e.slice();
            for (var t = Ko(e), r = {}, n = 0; n < t.length; n++) {
                var i = t[n];
                r[i] = e[i]
            }
            return r
        }

        function Ve(e, t, r) {
            var n = r;
            n == null && Cf(Sf);
            for (var i = !1, o = arguments.length, a = Array(o > 3 ? o - 3 : 0), s = 3; s < o; s++) a[s - 3] = arguments[s];
            for (var u = 0; u < a.length; u++) {
                var f = a[u];
                if (f != null) {
                    var g = Ko(f);
                    if (g.length)
                        for (var p = 0; p <= g.length; p++) {
                            var m = g[p];
                            if (!(e && n[m] !== void 0)) {
                                var E = f[m];
                                t && An(n[m]) && An(E) && (E = Ve(e, t, n[m], E)), !(E === void 0 || E === n[m]) && (i || (i = !0, n = Sn(n)), n[m] = E)
                            }
                        }
                }
            }
            return n
        }

        function An(e) {
            var t = typeof e > "u" ? "undefined" : OA(e);
            return e != null && (t === "object" || t === "function")
        }

        function Rf(e, t) {
            return Array.isArray(t) ? e.concat(t) : e.concat([t])
        }

        function Lf(e, t) {
            return Array.isArray(t) ? t.concat(e) : [t].concat(e)
        }

        function Nf(e) {
            return e.length ? e.slice(0, e.length - 1) : e
        }

        function Pf(e) {
            return e.length ? e.slice(1) : e
        }

        function qf(e, t, r) {
            return e.slice(0, t).concat(Array.isArray(r) ? r : [r]).concat(e.slice(t))
        }

        function Mf(e, t) {
            return t >= e.length || t < 0 ? e : e.slice(0, t).concat(e.slice(t + 1))
        }

        function Df(e, t, r) {
            if (e[t] === r) return e;
            for (var n = e.length, i = Array(n), o = 0; o < n; o++) i[o] = e[o];
            return i[t] = r, i
        }

        function Cn(e, t) {
            if (!Array.isArray(t) && Cf(Sf), e != null) {
                for (var r = e, n = 0; n < t.length; n++) {
                    var i = t[n];
                    if (r = r ? .[i], r === void 0) return r
                }
                return r
            }
        }

        function Rn(e, t, r) {
            var n = typeof t == "number" ? [] : {},
                i = e ? ? n;
            if (i[t] === r) return i;
            var o = Sn(i);
            return o[t] = r, o
        }

        function Ff(e, t, r, n) {
            var i = void 0,
                o = t[n];
            if (n === t.length - 1) i = r;
            else {
                var a = An(e) && An(e[o]) ? e[o] : typeof t[n + 1] == "number" ? [] : {};
                i = Ff(a, t, r, n + 1)
            }
            return Rn(e, o, i)
        }

        function Ln(e, t, r) {
            return t.length ? Ff(e, t, r, 0) : r
        }

        function Gf(e, t, r) {
            var n = e ? .[t],
                i = r(n);
            return Rn(e, t, i)
        }

        function kf(e, t, r) {
            var n = Cn(e, t),
                i = r(n);
            return Ln(e, t, i)
        }

        function Uf(e, t, r, n, i, o) {
            for (var a = arguments.length, s = Array(a > 6 ? a - 6 : 0), u = 6; u < a; u++) s[u - 6] = arguments[u];
            return s.length ? Ve.call.apply(Ve, [null, !1, !1, e, t, r, n, i, o].concat(s)) : Ve(!1, !1, e, t, r, n, i, o)
        }

        function Vf(e, t, r, n, i, o) {
            for (var a = arguments.length, s = Array(a > 6 ? a - 6 : 0), u = 6; u < a; u++) s[u - 6] = arguments[u];
            return s.length ? Ve.call.apply(Ve, [null, !1, !0, e, t, r, n, i, o].concat(s)) : Ve(!1, !0, e, t, r, n, i, o)
        }

        function Wf(e, t, r, n, i, o, a) {
            var s = Cn(e, t);
            s == null && (s = {});
            for (var u = void 0, f = arguments.length, g = Array(f > 7 ? f - 7 : 0), p = 7; p < f; p++) g[p - 7] = arguments[p];
            return g.length ? u = Ve.call.apply(Ve, [null, !1, !1, s, r, n, i, o, a].concat(g)) : u = Ve(!1, !1, s, r, n, i, o, a), Ln(e, t, u)
        }

        function Hf(e, t) {
            for (var r = Array.isArray(t) ? t : [t], n = !1, i = 0; i < r.length; i++)
                if (wA.call(e, r[i])) {
                    n = !0;
                    break
                }
            if (!n) return e;
            for (var o = {}, a = Ko(e), s = 0; s < a.length; s++) {
                var u = a[s];
                r.indexOf(u) >= 0 || (o[u] = e[u])
            }
            return o
        }

        function Xf(e, t, r, n, i, o) {
            for (var a = arguments.length, s = Array(a > 6 ? a - 6 : 0), u = 6; u < a; u++) s[u - 6] = arguments[u];
            return s.length ? Ve.call.apply(Ve, [null, !0, !1, e, t, r, n, i, o].concat(s)) : Ve(!0, !1, e, t, r, n, i, o)
        }
        var xA = {
            clone: Sn,
            addLast: Rf,
            addFirst: Lf,
            removeLast: Nf,
            removeFirst: Pf,
            insert: qf,
            removeAt: Mf,
            replaceAt: Df,
            getIn: Cn,
            set: Rn,
            setIn: Ln,
            update: Gf,
            updateIn: kf,
            merge: Uf,
            mergeDeep: Vf,
            mergeIn: Wf,
            omit: Hf,
            addDefaults: Xf
        };
        Ee.default = xA
    });
    var jf, AA, SA, CA, RA, LA, Bf, zf, Kf = ge(() => {
        "use strict";
        Ue();
        jf = le(Yt()), {
            IX2_PREVIEW_REQUESTED: AA,
            IX2_PLAYBACK_REQUESTED: SA,
            IX2_STOP_REQUESTED: CA,
            IX2_CLEAR_REQUESTED: RA
        } = Ie, LA = {
            preview: {},
            playback: {},
            stop: {},
            clear: {}
        }, Bf = Object.create(null, {
            [AA]: {
                value: "preview"
            },
            [SA]: {
                value: "playback"
            },
            [CA]: {
                value: "stop"
            },
            [RA]: {
                value: "clear"
            }
        }), zf = (e = LA, t) => {
            if (t.type in Bf) {
                let r = [Bf[t.type]];
                return (0, jf.setIn)(e, [r], { ...t.payload
                })
            }
            return e
        }
    });
    var Ne, NA, PA, qA, MA, DA, FA, GA, kA, UA, VA, Yf, WA, $f, Qf = ge(() => {
        "use strict";
        Ue();
        Ne = le(Yt()), {
            IX2_SESSION_INITIALIZED: NA,
            IX2_SESSION_STARTED: PA,
            IX2_TEST_FRAME_RENDERED: qA,
            IX2_SESSION_STOPPED: MA,
            IX2_EVENT_LISTENER_ADDED: DA,
            IX2_EVENT_STATE_CHANGED: FA,
            IX2_ANIMATION_FRAME_CHANGED: GA,
            IX2_ACTION_LIST_PLAYBACK_CHANGED: kA,
            IX2_VIEWPORT_WIDTH_CHANGED: UA,
            IX2_MEDIA_QUERIES_DEFINED: VA
        } = Ie, Yf = {
            active: !1,
            tick: 0,
            eventListeners: [],
            eventState: {},
            playbackState: {},
            viewportWidth: 0,
            mediaQueryKey: null,
            hasBoundaryNodes: !1,
            hasDefinedMediaQueries: !1,
            reducedMotion: !1
        }, WA = 20, $f = (e = Yf, t) => {
            switch (t.type) {
                case NA:
                    {
                        let {
                            hasBoundaryNodes: r,
                            reducedMotion: n
                        } = t.payload;
                        return (0, Ne.merge)(e, {
                            hasBoundaryNodes: r,
                            reducedMotion: n
                        })
                    }
                case PA:
                    return (0, Ne.set)(e, "active", !0);
                case qA:
                    {
                        let {
                            payload: {
                                step: r = WA
                            }
                        } = t;
                        return (0, Ne.set)(e, "tick", e.tick + r)
                    }
                case MA:
                    return Yf;
                case GA:
                    {
                        let {
                            payload: {
                                now: r
                            }
                        } = t;
                        return (0, Ne.set)(e, "tick", r)
                    }
                case DA:
                    {
                        let r = (0, Ne.addLast)(e.eventListeners, t.payload);
                        return (0, Ne.set)(e, "eventListeners", r)
                    }
                case FA:
                    {
                        let {
                            stateKey: r,
                            newState: n
                        } = t.payload;
                        return (0, Ne.setIn)(e, ["eventState", r], n)
                    }
                case kA:
                    {
                        let {
                            actionListId: r,
                            isPlaying: n
                        } = t.payload;
                        return (0, Ne.setIn)(e, ["playbackState", r], n)
                    }
                case UA:
                    {
                        let {
                            width: r,
                            mediaQueries: n
                        } = t.payload,
                        i = n.length,
                        o = null;
                        for (let a = 0; a < i; a++) {
                            let {
                                key: s,
                                min: u,
                                max: f
                            } = n[a];
                            if (r >= u && r <= f) {
                                o = s;
                                break
                            }
                        }
                        return (0, Ne.merge)(e, {
                            viewportWidth: r,
                            mediaQueryKey: o
                        })
                    }
                case VA:
                    return (0, Ne.set)(e, "hasDefinedMediaQueries", !0);
                default:
                    return e
            }
        }
    });
    var Jf = c((QH, Zf) => {
        function HA() {
            this.__data__ = [], this.size = 0
        }
        Zf.exports = HA
    });
    var Nn = c((ZH, ed) => {
        function XA(e, t) {
            return e === t || e !== e && t !== t
        }
        ed.exports = XA
    });
    var Nr = c((JH, td) => {
        var BA = Nn();

        function jA(e, t) {
            for (var r = e.length; r--;)
                if (BA(e[r][0], t)) return r;
            return -1
        }
        td.exports = jA
    });
    var nd = c((eX, rd) => {
        var zA = Nr(),
            KA = Array.prototype,
            YA = KA.splice;

        function $A(e) {
            var t = this.__data__,
                r = zA(t, e);
            if (r < 0) return !1;
            var n = t.length - 1;
            return r == n ? t.pop() : YA.call(t, r, 1), --this.size, !0
        }
        rd.exports = $A
    });
    var od = c((tX, id) => {
        var QA = Nr();

        function ZA(e) {
            var t = this.__data__,
                r = QA(t, e);
            return r < 0 ? void 0 : t[r][1]
        }
        id.exports = ZA
    });
    var sd = c((rX, ad) => {
        var JA = Nr();

        function eS(e) {
            return JA(this.__data__, e) > -1
        }
        ad.exports = eS
    });
    var cd = c((nX, ud) => {
        var tS = Nr();

        function rS(e, t) {
            var r = this.__data__,
                n = tS(r, e);
            return n < 0 ? (++this.size, r.push([e, t])) : r[n][1] = t, this
        }
        ud.exports = rS
    });
    var Pr = c((iX, ld) => {
        var nS = Jf(),
            iS = nd(),
            oS = od(),
            aS = sd(),
            sS = cd();

        function $t(e) {
            var t = -1,
                r = e == null ? 0 : e.length;
            for (this.clear(); ++t < r;) {
                var n = e[t];
                this.set(n[0], n[1])
            }
        }
        $t.prototype.clear = nS;
        $t.prototype.delete = iS;
        $t.prototype.get = oS;
        $t.prototype.has = aS;
        $t.prototype.set = sS;
        ld.exports = $t
    });
    var dd = c((oX, fd) => {
        var uS = Pr();

        function cS() {
            this.__data__ = new uS, this.size = 0
        }
        fd.exports = cS
    });
    var vd = c((aX, pd) => {
        function lS(e) {
            var t = this.__data__,
                r = t.delete(e);
            return this.size = t.size, r
        }
        pd.exports = lS
    });
    var gd = c((sX, hd) => {
        function fS(e) {
            return this.__data__.get(e)
        }
        hd.exports = fS
    });
    var md = c((uX, yd) => {
        function dS(e) {
            return this.__data__.has(e)
        }
        yd.exports = dS
    });
    var st = c((cX, Ed) => {
        function pS(e) {
            var t = typeof e;
            return e != null && (t == "object" || t == "function")
        }
        Ed.exports = pS
    });
    var Yo = c((lX, _d) => {
        var vS = Tt(),
            hS = st(),
            gS = "[object AsyncFunction]",
            yS = "[object Function]",
            mS = "[object GeneratorFunction]",
            ES = "[object Proxy]";

        function _S(e) {
            if (!hS(e)) return !1;
            var t = vS(e);
            return t == yS || t == mS || t == gS || t == ES
        }
        _d.exports = _S
    });
    var Td = c((fX, bd) => {
        var bS = Qe(),
            TS = bS["__core-js_shared__"];
        bd.exports = TS
    });
    var wd = c((dX, Od) => {
        var $o = Td(),
            Id = function() {
                var e = /[^.]+$/.exec($o && $o.keys && $o.keys.IE_PROTO || "");
                return e ? "Symbol(src)_1." + e : ""
            }();

        function IS(e) {
            return !!Id && Id in e
        }
        Od.exports = IS
    });
    var Qo = c((pX, xd) => {
        var OS = Function.prototype,
            wS = OS.toString;

        function xS(e) {
            if (e != null) {
                try {
                    return wS.call(e)
                } catch {}
                try {
                    return e + ""
                } catch {}
            }
            return ""
        }
        xd.exports = xS
    });
    var Sd = c((vX, Ad) => {
        var AS = Yo(),
            SS = wd(),
            CS = st(),
            RS = Qo(),
            LS = /[\\^$.*+?()[\]{}|]/g,
            NS = /^\[object .+?Constructor\]$/,
            PS = Function.prototype,
            qS = Object.prototype,
            MS = PS.toString,
            DS = qS.hasOwnProperty,
            FS = RegExp("^" + MS.call(DS).replace(LS, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$");

        function GS(e) {
            if (!CS(e) || SS(e)) return !1;
            var t = AS(e) ? FS : NS;
            return t.test(RS(e))
        }
        Ad.exports = GS
    });
    var Rd = c((hX, Cd) => {
        function kS(e, t) {
            return e ? .[t]
        }
        Cd.exports = kS
    });
    var It = c((gX, Ld) => {
        var US = Sd(),
            VS = Rd();

        function WS(e, t) {
            var r = VS(e, t);
            return US(r) ? r : void 0
        }
        Ld.exports = WS
    });
    var Pn = c((yX, Nd) => {
        var HS = It(),
            XS = Qe(),
            BS = HS(XS, "Map");
        Nd.exports = BS
    });
    var qr = c((mX, Pd) => {
        var jS = It(),
            zS = jS(Object, "create");
        Pd.exports = zS
    });
    var Dd = c((EX, Md) => {
        var qd = qr();

        function KS() {
            this.__data__ = qd ? qd(null) : {}, this.size = 0
        }
        Md.exports = KS
    });
    var Gd = c((_X, Fd) => {
        function YS(e) {
            var t = this.has(e) && delete this.__data__[e];
            return this.size -= t ? 1 : 0, t
        }
        Fd.exports = YS
    });
    var Ud = c((bX, kd) => {
        var $S = qr(),
            QS = "__lodash_hash_undefined__",
            ZS = Object.prototype,
            JS = ZS.hasOwnProperty;

        function e0(e) {
            var t = this.__data__;
            if ($S) {
                var r = t[e];
                return r === QS ? void 0 : r
            }
            return JS.call(t, e) ? t[e] : void 0
        }
        kd.exports = e0
    });
    var Wd = c((TX, Vd) => {
        var t0 = qr(),
            r0 = Object.prototype,
            n0 = r0.hasOwnProperty;

        function i0(e) {
            var t = this.__data__;
            return t0 ? t[e] !== void 0 : n0.call(t, e)
        }
        Vd.exports = i0
    });
    var Xd = c((IX, Hd) => {
        var o0 = qr(),
            a0 = "__lodash_hash_undefined__";

        function s0(e, t) {
            var r = this.__data__;
            return this.size += this.has(e) ? 0 : 1, r[e] = o0 && t === void 0 ? a0 : t, this
        }
        Hd.exports = s0
    });
    var jd = c((OX, Bd) => {
        var u0 = Dd(),
            c0 = Gd(),
            l0 = Ud(),
            f0 = Wd(),
            d0 = Xd();

        function Qt(e) {
            var t = -1,
                r = e == null ? 0 : e.length;
            for (this.clear(); ++t < r;) {
                var n = e[t];
                this.set(n[0], n[1])
            }
        }
        Qt.prototype.clear = u0;
        Qt.prototype.delete = c0;
        Qt.prototype.get = l0;
        Qt.prototype.has = f0;
        Qt.prototype.set = d0;
        Bd.exports = Qt
    });
    var Yd = c((wX, Kd) => {
        var zd = jd(),
            p0 = Pr(),
            v0 = Pn();

        function h0() {
            this.size = 0, this.__data__ = {
                hash: new zd,
                map: new(v0 || p0),
                string: new zd
            }
        }
        Kd.exports = h0
    });
    var Qd = c((xX, $d) => {
        function g0(e) {
            var t = typeof e;
            return t == "string" || t == "number" || t == "symbol" || t == "boolean" ? e !== "__proto__" : e === null
        }
        $d.exports = g0
    });
    var Mr = c((AX, Zd) => {
        var y0 = Qd();

        function m0(e, t) {
            var r = e.__data__;
            return y0(t) ? r[typeof t == "string" ? "string" : "hash"] : r.map
        }
        Zd.exports = m0
    });
    var ep = c((SX, Jd) => {
        var E0 = Mr();

        function _0(e) {
            var t = E0(this, e).delete(e);
            return this.size -= t ? 1 : 0, t
        }
        Jd.exports = _0
    });
    var rp = c((CX, tp) => {
        var b0 = Mr();

        function T0(e) {
            return b0(this, e).get(e)
        }
        tp.exports = T0
    });
    var ip = c((RX, np) => {
        var I0 = Mr();

        function O0(e) {
            return I0(this, e).has(e)
        }
        np.exports = O0
    });
    var ap = c((LX, op) => {
        var w0 = Mr();

        function x0(e, t) {
            var r = w0(this, e),
                n = r.size;
            return r.set(e, t), this.size += r.size == n ? 0 : 1, this
        }
        op.exports = x0
    });
    var qn = c((NX, sp) => {
        var A0 = Yd(),
            S0 = ep(),
            C0 = rp(),
            R0 = ip(),
            L0 = ap();

        function Zt(e) {
            var t = -1,
                r = e == null ? 0 : e.length;
            for (this.clear(); ++t < r;) {
                var n = e[t];
                this.set(n[0], n[1])
            }
        }
        Zt.prototype.clear = A0;
        Zt.prototype.delete = S0;
        Zt.prototype.get = C0;
        Zt.prototype.has = R0;
        Zt.prototype.set = L0;
        sp.exports = Zt
    });
    var cp = c((PX, up) => {
        var N0 = Pr(),
            P0 = Pn(),
            q0 = qn(),
            M0 = 200;

        function D0(e, t) {
            var r = this.__data__;
            if (r instanceof N0) {
                var n = r.__data__;
                if (!P0 || n.length < M0 - 1) return n.push([e, t]), this.size = ++r.size, this;
                r = this.__data__ = new q0(n)
            }
            return r.set(e, t), this.size = r.size, this
        }
        up.exports = D0
    });
    var Zo = c((qX, lp) => {
        var F0 = Pr(),
            G0 = dd(),
            k0 = vd(),
            U0 = gd(),
            V0 = md(),
            W0 = cp();

        function Jt(e) {
            var t = this.__data__ = new F0(e);
            this.size = t.size
        }
        Jt.prototype.clear = G0;
        Jt.prototype.delete = k0;
        Jt.prototype.get = U0;
        Jt.prototype.has = V0;
        Jt.prototype.set = W0;
        lp.exports = Jt
    });
    var dp = c((MX, fp) => {
        var H0 = "__lodash_hash_undefined__";

        function X0(e) {
            return this.__data__.set(e, H0), this
        }
        fp.exports = X0
    });
    var vp = c((DX, pp) => {
        function B0(e) {
            return this.__data__.has(e)
        }
        pp.exports = B0
    });
    var gp = c((FX, hp) => {
        var j0 = qn(),
            z0 = dp(),
            K0 = vp();

        function Mn(e) {
            var t = -1,
                r = e == null ? 0 : e.length;
            for (this.__data__ = new j0; ++t < r;) this.add(e[t])
        }
        Mn.prototype.add = Mn.prototype.push = z0;
        Mn.prototype.has = K0;
        hp.exports = Mn
    });
    var mp = c((GX, yp) => {
        function Y0(e, t) {
            for (var r = -1, n = e == null ? 0 : e.length; ++r < n;)
                if (t(e[r], r, e)) return !0;
            return !1
        }
        yp.exports = Y0
    });
    var _p = c((kX, Ep) => {
        function $0(e, t) {
            return e.has(t)
        }
        Ep.exports = $0
    });
    var Jo = c((UX, bp) => {
        var Q0 = gp(),
            Z0 = mp(),
            J0 = _p(),
            eC = 1,
            tC = 2;

        function rC(e, t, r, n, i, o) {
            var a = r & eC,
                s = e.length,
                u = t.length;
            if (s != u && !(a && u > s)) return !1;
            var f = o.get(e),
                g = o.get(t);
            if (f && g) return f == t && g == e;
            var p = -1,
                m = !0,
                E = r & tC ? new Q0 : void 0;
            for (o.set(e, t), o.set(t, e); ++p < s;) {
                var T = e[p],
                    O = t[p];
                if (n) var F = a ? n(O, T, p, t, e, o) : n(T, O, p, e, t, o);
                if (F !== void 0) {
                    if (F) continue;
                    m = !1;
                    break
                }
                if (E) {
                    if (!Z0(t, function(S, P) {
                            if (!J0(E, P) && (T === S || i(T, S, r, n, o))) return E.push(P)
                        })) {
                        m = !1;
                        break
                    }
                } else if (!(T === O || i(T, O, r, n, o))) {
                    m = !1;
                    break
                }
            }
            return o.delete(e), o.delete(t), m
        }
        bp.exports = rC
    });
    var Ip = c((VX, Tp) => {
        var nC = Qe(),
            iC = nC.Uint8Array;
        Tp.exports = iC
    });
    var wp = c((WX, Op) => {
        function oC(e) {
            var t = -1,
                r = Array(e.size);
            return e.forEach(function(n, i) {
                r[++t] = [i, n]
            }), r
        }
        Op.exports = oC
    });
    var Ap = c((HX, xp) => {
        function aC(e) {
            var t = -1,
                r = Array(e.size);
            return e.forEach(function(n) {
                r[++t] = n
            }), r
        }
        xp.exports = aC
    });
    var Np = c((XX, Lp) => {
        var Sp = jt(),
            Cp = Ip(),
            sC = Nn(),
            uC = Jo(),
            cC = wp(),
            lC = Ap(),
            fC = 1,
            dC = 2,
            pC = "[object Boolean]",
            vC = "[object Date]",
            hC = "[object Error]",
            gC = "[object Map]",
            yC = "[object Number]",
            mC = "[object RegExp]",
            EC = "[object Set]",
            _C = "[object String]",
            bC = "[object Symbol]",
            TC = "[object ArrayBuffer]",
            IC = "[object DataView]",
            Rp = Sp ? Sp.prototype : void 0,
            ea = Rp ? Rp.valueOf : void 0;

        function OC(e, t, r, n, i, o, a) {
            switch (r) {
                case IC:
                    if (e.byteLength != t.byteLength || e.byteOffset != t.byteOffset) return !1;
                    e = e.buffer, t = t.buffer;
                case TC:
                    return !(e.byteLength != t.byteLength || !o(new Cp(e), new Cp(t)));
                case pC:
                case vC:
                case yC:
                    return sC(+e, +t);
                case hC:
                    return e.name == t.name && e.message == t.message;
                case mC:
                case _C:
                    return e == t + "";
                case gC:
                    var s = cC;
                case EC:
                    var u = n & fC;
                    if (s || (s = lC), e.size != t.size && !u) return !1;
                    var f = a.get(e);
                    if (f) return f == t;
                    n |= dC, a.set(e, t);
                    var g = uC(s(e), s(t), n, i, o, a);
                    return a.delete(e), g;
                case bC:
                    if (ea) return ea.call(e) == ea.call(t)
            }
            return !1
        }
        Lp.exports = OC
    });
    var Dn = c((BX, Pp) => {
        function wC(e, t) {
            for (var r = -1, n = t.length, i = e.length; ++r < n;) e[i + r] = t[r];
            return e
        }
        Pp.exports = wC
    });
    var we = c((jX, qp) => {
        var xC = Array.isArray;
        qp.exports = xC
    });
    var ta = c((zX, Mp) => {
        var AC = Dn(),
            SC = we();

        function CC(e, t, r) {
            var n = t(e);
            return SC(e) ? n : AC(n, r(e))
        }
        Mp.exports = CC
    });
    var Fp = c((KX, Dp) => {
        function RC(e, t) {
            for (var r = -1, n = e == null ? 0 : e.length, i = 0, o = []; ++r < n;) {
                var a = e[r];
                t(a, r, e) && (o[i++] = a)
            }
            return o
        }
        Dp.exports = RC
    });
    var ra = c((YX, Gp) => {
        function LC() {
            return []
        }
        Gp.exports = LC
    });
    var na = c(($X, Up) => {
        var NC = Fp(),
            PC = ra(),
            qC = Object.prototype,
            MC = qC.propertyIsEnumerable,
            kp = Object.getOwnPropertySymbols,
            DC = kp ? function(e) {
                return e == null ? [] : (e = Object(e), NC(kp(e), function(t) {
                    return MC.call(e, t)
                }))
            } : PC;
        Up.exports = DC
    });
    var Wp = c((QX, Vp) => {
        function FC(e, t) {
            for (var r = -1, n = Array(e); ++r < e;) n[r] = t(r);
            return n
        }
        Vp.exports = FC
    });
    var Xp = c((ZX, Hp) => {
        var GC = Tt(),
            kC = pt(),
            UC = "[object Arguments]";

        function VC(e) {
            return kC(e) && GC(e) == UC
        }
        Hp.exports = VC
    });
    var Dr = c((JX, zp) => {
        var Bp = Xp(),
            WC = pt(),
            jp = Object.prototype,
            HC = jp.hasOwnProperty,
            XC = jp.propertyIsEnumerable,
            BC = Bp(function() {
                return arguments
            }()) ? Bp : function(e) {
                return WC(e) && HC.call(e, "callee") && !XC.call(e, "callee")
            };
        zp.exports = BC
    });
    var Yp = c((e5, Kp) => {
        function jC() {
            return !1
        }
        Kp.exports = jC
    });
    var Fn = c((Fr, er) => {
        var zC = Qe(),
            KC = Yp(),
            Zp = typeof Fr == "object" && Fr && !Fr.nodeType && Fr,
            $p = Zp && typeof er == "object" && er && !er.nodeType && er,
            YC = $p && $p.exports === Zp,
            Qp = YC ? zC.Buffer : void 0,
            $C = Qp ? Qp.isBuffer : void 0,
            QC = $C || KC;
        er.exports = QC
    });
    var Gn = c((t5, Jp) => {
        var ZC = 9007199254740991,
            JC = /^(?:0|[1-9]\d*)$/;

        function eR(e, t) {
            var r = typeof e;
            return t = t ? ? ZC, !!t && (r == "number" || r != "symbol" && JC.test(e)) && e > -1 && e % 1 == 0 && e < t
        }
        Jp.exports = eR
    });
    var kn = c((r5, ev) => {
        var tR = 9007199254740991;

        function rR(e) {
            return typeof e == "number" && e > -1 && e % 1 == 0 && e <= tR
        }
        ev.exports = rR
    });
    var rv = c((n5, tv) => {
        var nR = Tt(),
            iR = kn(),
            oR = pt(),
            aR = "[object Arguments]",
            sR = "[object Array]",
            uR = "[object Boolean]",
            cR = "[object Date]",
            lR = "[object Error]",
            fR = "[object Function]",
            dR = "[object Map]",
            pR = "[object Number]",
            vR = "[object Object]",
            hR = "[object RegExp]",
            gR = "[object Set]",
            yR = "[object String]",
            mR = "[object WeakMap]",
            ER = "[object ArrayBuffer]",
            _R = "[object DataView]",
            bR = "[object Float32Array]",
            TR = "[object Float64Array]",
            IR = "[object Int8Array]",
            OR = "[object Int16Array]",
            wR = "[object Int32Array]",
            xR = "[object Uint8Array]",
            AR = "[object Uint8ClampedArray]",
            SR = "[object Uint16Array]",
            CR = "[object Uint32Array]",
            he = {};
        he[bR] = he[TR] = he[IR] = he[OR] = he[wR] = he[xR] = he[AR] = he[SR] = he[CR] = !0;
        he[aR] = he[sR] = he[ER] = he[uR] = he[_R] = he[cR] = he[lR] = he[fR] = he[dR] = he[pR] = he[vR] = he[hR] = he[gR] = he[yR] = he[mR] = !1;

        function RR(e) {
            return oR(e) && iR(e.length) && !!he[nR(e)]
        }
        tv.exports = RR
    });
    var iv = c((i5, nv) => {
        function LR(e) {
            return function(t) {
                return e(t)
            }
        }
        nv.exports = LR
    });
    var av = c((Gr, tr) => {
        var NR = Co(),
            ov = typeof Gr == "object" && Gr && !Gr.nodeType && Gr,
            kr = ov && typeof tr == "object" && tr && !tr.nodeType && tr,
            PR = kr && kr.exports === ov,
            ia = PR && NR.process,
            qR = function() {
                try {
                    var e = kr && kr.require && kr.require("util").types;
                    return e || ia && ia.binding && ia.binding("util")
                } catch {}
            }();
        tr.exports = qR
    });
    var Un = c((o5, cv) => {
        var MR = rv(),
            DR = iv(),
            sv = av(),
            uv = sv && sv.isTypedArray,
            FR = uv ? DR(uv) : MR;
        cv.exports = FR
    });
    var oa = c((a5, lv) => {
        var GR = Wp(),
            kR = Dr(),
            UR = we(),
            VR = Fn(),
            WR = Gn(),
            HR = Un(),
            XR = Object.prototype,
            BR = XR.hasOwnProperty;

        function jR(e, t) {
            var r = UR(e),
                n = !r && kR(e),
                i = !r && !n && VR(e),
                o = !r && !n && !i && HR(e),
                a = r || n || i || o,
                s = a ? GR(e.length, String) : [],
                u = s.length;
            for (var f in e)(t || BR.call(e, f)) && !(a && (f == "length" || i && (f == "offset" || f == "parent") || o && (f == "buffer" || f == "byteLength" || f == "byteOffset") || WR(f, u))) && s.push(f);
            return s
        }
        lv.exports = jR
    });
    var Vn = c((s5, fv) => {
        var zR = Object.prototype;

        function KR(e) {
            var t = e && e.constructor,
                r = typeof t == "function" && t.prototype || zR;
            return e === r
        }
        fv.exports = KR
    });
    var pv = c((u5, dv) => {
        var YR = Ro(),
            $R = YR(Object.keys, Object);
        dv.exports = $R
    });
    var Wn = c((c5, vv) => {
        var QR = Vn(),
            ZR = pv(),
            JR = Object.prototype,
            eL = JR.hasOwnProperty;

        function tL(e) {
            if (!QR(e)) return ZR(e);
            var t = [];
            for (var r in Object(e)) eL.call(e, r) && r != "constructor" && t.push(r);
            return t
        }
        vv.exports = tL
    });
    var qt = c((l5, hv) => {
        var rL = Yo(),
            nL = kn();

        function iL(e) {
            return e != null && nL(e.length) && !rL(e)
        }
        hv.exports = iL
    });
    var Ur = c((f5, gv) => {
        var oL = oa(),
            aL = Wn(),
            sL = qt();

        function uL(e) {
            return sL(e) ? oL(e) : aL(e)
        }
        gv.exports = uL
    });
    var mv = c((d5, yv) => {
        var cL = ta(),
            lL = na(),
            fL = Ur();

        function dL(e) {
            return cL(e, fL, lL)
        }
        yv.exports = dL
    });
    var bv = c((p5, _v) => {
        var Ev = mv(),
            pL = 1,
            vL = Object.prototype,
            hL = vL.hasOwnProperty;

        function gL(e, t, r, n, i, o) {
            var a = r & pL,
                s = Ev(e),
                u = s.length,
                f = Ev(t),
                g = f.length;
            if (u != g && !a) return !1;
            for (var p = u; p--;) {
                var m = s[p];
                if (!(a ? m in t : hL.call(t, m))) return !1
            }
            var E = o.get(e),
                T = o.get(t);
            if (E && T) return E == t && T == e;
            var O = !0;
            o.set(e, t), o.set(t, e);
            for (var F = a; ++p < u;) {
                m = s[p];
                var S = e[m],
                    P = t[m];
                if (n) var A = a ? n(P, S, m, t, e, o) : n(S, P, m, e, t, o);
                if (!(A === void 0 ? S === P || i(S, P, r, n, o) : A)) {
                    O = !1;
                    break
                }
                F || (F = m == "constructor")
            }
            if (O && !F) {
                var M = e.constructor,
                    D = t.constructor;
                M != D && "constructor" in e && "constructor" in t && !(typeof M == "function" && M instanceof M && typeof D == "function" && D instanceof D) && (O = !1)
            }
            return o.delete(e), o.delete(t), O
        }
        _v.exports = gL
    });
    var Iv = c((v5, Tv) => {
        var yL = It(),
            mL = Qe(),
            EL = yL(mL, "DataView");
        Tv.exports = EL
    });
    var wv = c((h5, Ov) => {
        var _L = It(),
            bL = Qe(),
            TL = _L(bL, "Promise");
        Ov.exports = TL
    });
    var Av = c((g5, xv) => {
        var IL = It(),
            OL = Qe(),
            wL = IL(OL, "Set");
        xv.exports = wL
    });
    var aa = c((y5, Sv) => {
        var xL = It(),
            AL = Qe(),
            SL = xL(AL, "WeakMap");
        Sv.exports = SL
    });
    var Hn = c((m5, Mv) => {
        var sa = Iv(),
            ua = Pn(),
            ca = wv(),
            la = Av(),
            fa = aa(),
            qv = Tt(),
            rr = Qo(),
            Cv = "[object Map]",
            CL = "[object Object]",
            Rv = "[object Promise]",
            Lv = "[object Set]",
            Nv = "[object WeakMap]",
            Pv = "[object DataView]",
            RL = rr(sa),
            LL = rr(ua),
            NL = rr(ca),
            PL = rr(la),
            qL = rr(fa),
            Mt = qv;
        (sa && Mt(new sa(new ArrayBuffer(1))) != Pv || ua && Mt(new ua) != Cv || ca && Mt(ca.resolve()) != Rv || la && Mt(new la) != Lv || fa && Mt(new fa) != Nv) && (Mt = function(e) {
            var t = qv(e),
                r = t == CL ? e.constructor : void 0,
                n = r ? rr(r) : "";
            if (n) switch (n) {
                case RL:
                    return Pv;
                case LL:
                    return Cv;
                case NL:
                    return Rv;
                case PL:
                    return Lv;
                case qL:
                    return Nv
            }
            return t
        });
        Mv.exports = Mt
    });
    var Hv = c((E5, Wv) => {
        var da = Zo(),
            ML = Jo(),
            DL = Np(),
            FL = bv(),
            Dv = Hn(),
            Fv = we(),
            Gv = Fn(),
            GL = Un(),
            kL = 1,
            kv = "[object Arguments]",
            Uv = "[object Array]",
            Xn = "[object Object]",
            UL = Object.prototype,
            Vv = UL.hasOwnProperty;

        function VL(e, t, r, n, i, o) {
            var a = Fv(e),
                s = Fv(t),
                u = a ? Uv : Dv(e),
                f = s ? Uv : Dv(t);
            u = u == kv ? Xn : u, f = f == kv ? Xn : f;
            var g = u == Xn,
                p = f == Xn,
                m = u == f;
            if (m && Gv(e)) {
                if (!Gv(t)) return !1;
                a = !0, g = !1
            }
            if (m && !g) return o || (o = new da), a || GL(e) ? ML(e, t, r, n, i, o) : DL(e, t, u, r, n, i, o);
            if (!(r & kL)) {
                var E = g && Vv.call(e, "__wrapped__"),
                    T = p && Vv.call(t, "__wrapped__");
                if (E || T) {
                    var O = E ? e.value() : e,
                        F = T ? t.value() : t;
                    return o || (o = new da), i(O, F, r, n, o)
                }
            }
            return m ? (o || (o = new da), FL(e, t, r, n, i, o)) : !1
        }
        Wv.exports = VL
    });
    var pa = c((_5, jv) => {
        var WL = Hv(),
            Xv = pt();

        function Bv(e, t, r, n, i) {
            return e === t ? !0 : e == null || t == null || !Xv(e) && !Xv(t) ? e !== e && t !== t : WL(e, t, r, n, Bv, i)
        }
        jv.exports = Bv
    });
    var Kv = c((b5, zv) => {
        var HL = Zo(),
            XL = pa(),
            BL = 1,
            jL = 2;

        function zL(e, t, r, n) {
            var i = r.length,
                o = i,
                a = !n;
            if (e == null) return !o;
            for (e = Object(e); i--;) {
                var s = r[i];
                if (a && s[2] ? s[1] !== e[s[0]] : !(s[0] in e)) return !1
            }
            for (; ++i < o;) {
                s = r[i];
                var u = s[0],
                    f = e[u],
                    g = s[1];
                if (a && s[2]) {
                    if (f === void 0 && !(u in e)) return !1
                } else {
                    var p = new HL;
                    if (n) var m = n(f, g, u, e, t, p);
                    if (!(m === void 0 ? XL(g, f, BL | jL, n, p) : m)) return !1
                }
            }
            return !0
        }
        zv.exports = zL
    });
    var va = c((T5, Yv) => {
        var KL = st();

        function YL(e) {
            return e === e && !KL(e)
        }
        Yv.exports = YL
    });
    var Qv = c((I5, $v) => {
        var $L = va(),
            QL = Ur();

        function ZL(e) {
            for (var t = QL(e), r = t.length; r--;) {
                var n = t[r],
                    i = e[n];
                t[r] = [n, i, $L(i)]
            }
            return t
        }
        $v.exports = ZL
    });
    var ha = c((O5, Zv) => {
        function JL(e, t) {
            return function(r) {
                return r == null ? !1 : r[e] === t && (t !== void 0 || e in Object(r))
            }
        }
        Zv.exports = JL
    });
    var eh = c((w5, Jv) => {
        var eN = Kv(),
            tN = Qv(),
            rN = ha();

        function nN(e) {
            var t = tN(e);
            return t.length == 1 && t[0][2] ? rN(t[0][0], t[0][1]) : function(r) {
                return r === e || eN(r, e, t)
            }
        }
        Jv.exports = nN
    });
    var Vr = c((x5, th) => {
        var iN = Tt(),
            oN = pt(),
            aN = "[object Symbol]";

        function sN(e) {
            return typeof e == "symbol" || oN(e) && iN(e) == aN
        }
        th.exports = sN
    });
    var Bn = c((A5, rh) => {
        var uN = we(),
            cN = Vr(),
            lN = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,
            fN = /^\w*$/;

        function dN(e, t) {
            if (uN(e)) return !1;
            var r = typeof e;
            return r == "number" || r == "symbol" || r == "boolean" || e == null || cN(e) ? !0 : fN.test(e) || !lN.test(e) || t != null && e in Object(t)
        }
        rh.exports = dN
    });
    var oh = c((S5, ih) => {
        var nh = qn(),
            pN = "Expected a function";

        function ga(e, t) {
            if (typeof e != "function" || t != null && typeof t != "function") throw new TypeError(pN);
            var r = function() {
                var n = arguments,
                    i = t ? t.apply(this, n) : n[0],
                    o = r.cache;
                if (o.has(i)) return o.get(i);
                var a = e.apply(this, n);
                return r.cache = o.set(i, a) || o, a
            };
            return r.cache = new(ga.Cache || nh), r
        }
        ga.Cache = nh;
        ih.exports = ga
    });
    var sh = c((C5, ah) => {
        var vN = oh(),
            hN = 500;

        function gN(e) {
            var t = vN(e, function(n) {
                    return r.size === hN && r.clear(), n
                }),
                r = t.cache;
            return t
        }
        ah.exports = gN
    });
    var ch = c((R5, uh) => {
        var yN = sh(),
            mN = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,
            EN = /\\(\\)?/g,
            _N = yN(function(e) {
                var t = [];
                return e.charCodeAt(0) === 46 && t.push(""), e.replace(mN, function(r, n, i, o) {
                    t.push(i ? o.replace(EN, "$1") : n || r)
                }), t
            });
        uh.exports = _N
    });
    var ya = c((L5, lh) => {
        function bN(e, t) {
            for (var r = -1, n = e == null ? 0 : e.length, i = Array(n); ++r < n;) i[r] = t(e[r], r, e);
            return i
        }
        lh.exports = bN
    });
    var gh = c((N5, hh) => {
        var fh = jt(),
            TN = ya(),
            IN = we(),
            ON = Vr(),
            wN = 1 / 0,
            dh = fh ? fh.prototype : void 0,
            ph = dh ? dh.toString : void 0;

        function vh(e) {
            if (typeof e == "string") return e;
            if (IN(e)) return TN(e, vh) + "";
            if (ON(e)) return ph ? ph.call(e) : "";
            var t = e + "";
            return t == "0" && 1 / e == -wN ? "-0" : t
        }
        hh.exports = vh
    });
    var mh = c((P5, yh) => {
        var xN = gh();

        function AN(e) {
            return e == null ? "" : xN(e)
        }
        yh.exports = AN
    });
    var Wr = c((q5, Eh) => {
        var SN = we(),
            CN = Bn(),
            RN = ch(),
            LN = mh();

        function NN(e, t) {
            return SN(e) ? e : CN(e, t) ? [e] : RN(LN(e))
        }
        Eh.exports = NN
    });
    var nr = c((M5, _h) => {
        var PN = Vr(),
            qN = 1 / 0;

        function MN(e) {
            if (typeof e == "string" || PN(e)) return e;
            var t = e + "";
            return t == "0" && 1 / e == -qN ? "-0" : t
        }
        _h.exports = MN
    });
    var jn = c((D5, bh) => {
        var DN = Wr(),
            FN = nr();

        function GN(e, t) {
            t = DN(t, e);
            for (var r = 0, n = t.length; e != null && r < n;) e = e[FN(t[r++])];
            return r && r == n ? e : void 0
        }
        bh.exports = GN
    });
    var zn = c((F5, Th) => {
        var kN = jn();

        function UN(e, t, r) {
            var n = e == null ? void 0 : kN(e, t);
            return n === void 0 ? r : n
        }
        Th.exports = UN
    });
    var Oh = c((G5, Ih) => {
        function VN(e, t) {
            return e != null && t in Object(e)
        }
        Ih.exports = VN
    });
    var xh = c((k5, wh) => {
        var WN = Wr(),
            HN = Dr(),
            XN = we(),
            BN = Gn(),
            jN = kn(),
            zN = nr();

        function KN(e, t, r) {
            t = WN(t, e);
            for (var n = -1, i = t.length, o = !1; ++n < i;) {
                var a = zN(t[n]);
                if (!(o = e != null && r(e, a))) break;
                e = e[a]
            }
            return o || ++n != i ? o : (i = e == null ? 0 : e.length, !!i && jN(i) && BN(a, i) && (XN(e) || HN(e)))
        }
        wh.exports = KN
    });
    var Sh = c((U5, Ah) => {
        var YN = Oh(),
            $N = xh();

        function QN(e, t) {
            return e != null && $N(e, t, YN)
        }
        Ah.exports = QN
    });
    var Rh = c((V5, Ch) => {
        var ZN = pa(),
            JN = zn(),
            eP = Sh(),
            tP = Bn(),
            rP = va(),
            nP = ha(),
            iP = nr(),
            oP = 1,
            aP = 2;

        function sP(e, t) {
            return tP(e) && rP(t) ? nP(iP(e), t) : function(r) {
                var n = JN(r, e);
                return n === void 0 && n === t ? eP(r, e) : ZN(t, n, oP | aP)
            }
        }
        Ch.exports = sP
    });
    var Kn = c((W5, Lh) => {
        function uP(e) {
            return e
        }
        Lh.exports = uP
    });
    var ma = c((H5, Nh) => {
        function cP(e) {
            return function(t) {
                return t ? .[e]
            }
        }
        Nh.exports = cP
    });
    var qh = c((X5, Ph) => {
        var lP = jn();

        function fP(e) {
            return function(t) {
                return lP(t, e)
            }
        }
        Ph.exports = fP
    });
    var Dh = c((B5, Mh) => {
        var dP = ma(),
            pP = qh(),
            vP = Bn(),
            hP = nr();

        function gP(e) {
            return vP(e) ? dP(hP(e)) : pP(e)
        }
        Mh.exports = gP
    });
    var Ot = c((j5, Fh) => {
        var yP = eh(),
            mP = Rh(),
            EP = Kn(),
            _P = we(),
            bP = Dh();

        function TP(e) {
            return typeof e == "function" ? e : e == null ? EP : typeof e == "object" ? _P(e) ? mP(e[0], e[1]) : yP(e) : bP(e)
        }
        Fh.exports = TP
    });
    var Ea = c((z5, Gh) => {
        var IP = Ot(),
            OP = qt(),
            wP = Ur();

        function xP(e) {
            return function(t, r, n) {
                var i = Object(t);
                if (!OP(t)) {
                    var o = IP(r, 3);
                    t = wP(t), r = function(s) {
                        return o(i[s], s, i)
                    }
                }
                var a = e(t, r, n);
                return a > -1 ? i[o ? t[a] : a] : void 0
            }
        }
        Gh.exports = xP
    });
    var _a = c((K5, kh) => {
        function AP(e, t, r, n) {
            for (var i = e.length, o = r + (n ? 1 : -1); n ? o-- : ++o < i;)
                if (t(e[o], o, e)) return o;
            return -1
        }
        kh.exports = AP
    });
    var Vh = c((Y5, Uh) => {
        var SP = /\s/;

        function CP(e) {
            for (var t = e.length; t-- && SP.test(e.charAt(t)););
            return t
        }
        Uh.exports = CP
    });
    var Hh = c(($5, Wh) => {
        var RP = Vh(),
            LP = /^\s+/;

        function NP(e) {
            return e && e.slice(0, RP(e) + 1).replace(LP, "")
        }
        Wh.exports = NP
    });
    var Yn = c((Q5, jh) => {
        var PP = Hh(),
            Xh = st(),
            qP = Vr(),
            Bh = 0 / 0,
            MP = /^[-+]0x[0-9a-f]+$/i,
            DP = /^0b[01]+$/i,
            FP = /^0o[0-7]+$/i,
            GP = parseInt;

        function kP(e) {
            if (typeof e == "number") return e;
            if (qP(e)) return Bh;
            if (Xh(e)) {
                var t = typeof e.valueOf == "function" ? e.valueOf() : e;
                e = Xh(t) ? t + "" : t
            }
            if (typeof e != "string") return e === 0 ? e : +e;
            e = PP(e);
            var r = DP.test(e);
            return r || FP.test(e) ? GP(e.slice(2), r ? 2 : 8) : MP.test(e) ? Bh : +e
        }
        jh.exports = kP
    });
    var Yh = c((Z5, Kh) => {
        var UP = Yn(),
            zh = 1 / 0,
            VP = 17976931348623157e292;

        function WP(e) {
            if (!e) return e === 0 ? e : 0;
            if (e = UP(e), e === zh || e === -zh) {
                var t = e < 0 ? -1 : 1;
                return t * VP
            }
            return e === e ? e : 0
        }
        Kh.exports = WP
    });
    var ba = c((J5, $h) => {
        var HP = Yh();

        function XP(e) {
            var t = HP(e),
                r = t % 1;
            return t === t ? r ? t - r : t : 0
        }
        $h.exports = XP
    });
    var Zh = c((eB, Qh) => {
        var BP = _a(),
            jP = Ot(),
            zP = ba(),
            KP = Math.max;

        function YP(e, t, r) {
            var n = e == null ? 0 : e.length;
            if (!n) return -1;
            var i = r == null ? 0 : zP(r);
            return i < 0 && (i = KP(n + i, 0)), BP(e, jP(t, 3), i)
        }
        Qh.exports = YP
    });
    var Ta = c((tB, Jh) => {
        var $P = Ea(),
            QP = Zh(),
            ZP = $P(QP);
        Jh.exports = ZP
    });
    var rg = {};
    Fe(rg, {
        ELEMENT_MATCHES: () => JP,
        FLEX_PREFIXED: () => Ia,
        IS_BROWSER_ENV: () => Je,
        TRANSFORM_PREFIXED: () => wt,
        TRANSFORM_STYLE_PREFIXED: () => Qn,
        withBrowser: () => $n
    });
    var tg, Je, $n, JP, Ia, wt, eg, Qn, Zn = ge(() => {
        "use strict";
        tg = le(Ta()), Je = typeof window < "u", $n = (e, t) => Je ? e() : t, JP = $n(() => (0, tg.default)(["matches", "matchesSelector", "mozMatchesSelector", "msMatchesSelector", "oMatchesSelector", "webkitMatchesSelector"], e => e in Element.prototype)), Ia = $n(() => {
            let e = document.createElement("i"),
                t = ["flex", "-webkit-flex", "-ms-flexbox", "-moz-box", "-webkit-box"],
                r = "";
            try {
                let {
                    length: n
                } = t;
                for (let i = 0; i < n; i++) {
                    let o = t[i];
                    if (e.style.display = o, e.style.display === o) return o
                }
                return r
            } catch {
                return r
            }
        }, "flex"), wt = $n(() => {
            let e = document.createElement("i");
            if (e.style.transform == null) {
                let t = ["Webkit", "Moz", "ms"],
                    r = "Transform",
                    {
                        length: n
                    } = t;
                for (let i = 0; i < n; i++) {
                    let o = t[i] + r;
                    if (e.style[o] !== void 0) return o
                }
            }
            return "transform"
        }, "transform"), eg = wt.split("transform")[0], Qn = eg ? eg + "TransformStyle" : "transformStyle"
    });
    var Oa = c((rB, sg) => {
        var eq = 4,
            tq = .001,
            rq = 1e-7,
            nq = 10,
            Hr = 11,
            Jn = 1 / (Hr - 1),
            iq = typeof Float32Array == "function";

        function ng(e, t) {
            return 1 - 3 * t + 3 * e
        }

        function ig(e, t) {
            return 3 * t - 6 * e
        }

        function og(e) {
            return 3 * e
        }

        function ei(e, t, r) {
            return ((ng(t, r) * e + ig(t, r)) * e + og(t)) * e
        }

        function ag(e, t, r) {
            return 3 * ng(t, r) * e * e + 2 * ig(t, r) * e + og(t)
        }

        function oq(e, t, r, n, i) {
            var o, a, s = 0;
            do a = t + (r - t) / 2, o = ei(a, n, i) - e, o > 0 ? r = a : t = a; while (Math.abs(o) > rq && ++s < nq);
            return a
        }

        function aq(e, t, r, n) {
            for (var i = 0; i < eq; ++i) {
                var o = ag(t, r, n);
                if (o === 0) return t;
                var a = ei(t, r, n) - e;
                t -= a / o
            }
            return t
        }
        sg.exports = function(t, r, n, i) {
            if (!(0 <= t && t <= 1 && 0 <= n && n <= 1)) throw new Error("bezier x values must be in [0, 1] range");
            var o = iq ? new Float32Array(Hr) : new Array(Hr);
            if (t !== r || n !== i)
                for (var a = 0; a < Hr; ++a) o[a] = ei(a * Jn, t, n);

            function s(u) {
                for (var f = 0, g = 1, p = Hr - 1; g !== p && o[g] <= u; ++g) f += Jn;
                --g;
                var m = (u - o[g]) / (o[g + 1] - o[g]),
                    E = f + m * Jn,
                    T = ag(E, t, n);
                return T >= tq ? aq(u, E, t, n) : T === 0 ? E : oq(u, f, f + Jn, t, n)
            }
            return function(f) {
                return t === r && n === i ? f : f === 0 ? 0 : f === 1 ? 1 : ei(s(f), r, i)
            }
        }
    });
    var Br = {};
    Fe(Br, {
        bounce: () => Wq,
        bouncePast: () => Hq,
        ease: () => sq,
        easeIn: () => uq,
        easeInOut: () => lq,
        easeOut: () => cq,
        inBack: () => Pq,
        inCirc: () => Cq,
        inCubic: () => vq,
        inElastic: () => Dq,
        inExpo: () => xq,
        inOutBack: () => Mq,
        inOutCirc: () => Lq,
        inOutCubic: () => gq,
        inOutElastic: () => Gq,
        inOutExpo: () => Sq,
        inOutQuad: () => pq,
        inOutQuart: () => Eq,
        inOutQuint: () => Tq,
        inOutSine: () => wq,
        inQuad: () => fq,
        inQuart: () => yq,
        inQuint: () => _q,
        inSine: () => Iq,
        outBack: () => qq,
        outBounce: () => Nq,
        outCirc: () => Rq,
        outCubic: () => hq,
        outElastic: () => Fq,
        outExpo: () => Aq,
        outQuad: () => dq,
        outQuart: () => mq,
        outQuint: () => bq,
        outSine: () => Oq,
        swingFrom: () => Uq,
        swingFromTo: () => kq,
        swingTo: () => Vq
    });

    function fq(e) {
        return Math.pow(e, 2)
    }

    function dq(e) {
        return -(Math.pow(e - 1, 2) - 1)
    }

    function pq(e) {
        return (e /= .5) < 1 ? .5 * Math.pow(e, 2) : -.5 * ((e -= 2) * e - 2)
    }

    function vq(e) {
        return Math.pow(e, 3)
    }

    function hq(e) {
        return Math.pow(e - 1, 3) + 1
    }

    function gq(e) {
        return (e /= .5) < 1 ? .5 * Math.pow(e, 3) : .5 * (Math.pow(e - 2, 3) + 2)
    }

    function yq(e) {
        return Math.pow(e, 4)
    }

    function mq(e) {
        return -(Math.pow(e - 1, 4) - 1)
    }

    function Eq(e) {
        return (e /= .5) < 1 ? .5 * Math.pow(e, 4) : -.5 * ((e -= 2) * Math.pow(e, 3) - 2)
    }

    function _q(e) {
        return Math.pow(e, 5)
    }

    function bq(e) {
        return Math.pow(e - 1, 5) + 1
    }

    function Tq(e) {
        return (e /= .5) < 1 ? .5 * Math.pow(e, 5) : .5 * (Math.pow(e - 2, 5) + 2)
    }

    function Iq(e) {
        return -Math.cos(e * (Math.PI / 2)) + 1
    }

    function Oq(e) {
        return Math.sin(e * (Math.PI / 2))
    }

    function wq(e) {
        return -.5 * (Math.cos(Math.PI * e) - 1)
    }

    function xq(e) {
        return e === 0 ? 0 : Math.pow(2, 10 * (e - 1))
    }

    function Aq(e) {
        return e === 1 ? 1 : -Math.pow(2, -10 * e) + 1
    }

    function Sq(e) {
        return e === 0 ? 0 : e === 1 ? 1 : (e /= .5) < 1 ? .5 * Math.pow(2, 10 * (e - 1)) : .5 * (-Math.pow(2, -10 * --e) + 2)
    }

    function Cq(e) {
        return -(Math.sqrt(1 - e * e) - 1)
    }

    function Rq(e) {
        return Math.sqrt(1 - Math.pow(e - 1, 2))
    }

    function Lq(e) {
        return (e /= .5) < 1 ? -.5 * (Math.sqrt(1 - e * e) - 1) : .5 * (Math.sqrt(1 - (e -= 2) * e) + 1)
    }

    function Nq(e) {
        return e < 1 / 2.75 ? 7.5625 * e * e : e < 2 / 2.75 ? 7.5625 * (e -= 1.5 / 2.75) * e + .75 : e < 2.5 / 2.75 ? 7.5625 * (e -= 2.25 / 2.75) * e + .9375 : 7.5625 * (e -= 2.625 / 2.75) * e + .984375
    }

    function Pq(e) {
        let t = vt;
        return e * e * ((t + 1) * e - t)
    }

    function qq(e) {
        let t = vt;
        return (e -= 1) * e * ((t + 1) * e + t) + 1
    }

    function Mq(e) {
        let t = vt;
        return (e /= .5) < 1 ? .5 * (e * e * (((t *= 1.525) + 1) * e - t)) : .5 * ((e -= 2) * e * (((t *= 1.525) + 1) * e + t) + 2)
    }

    function Dq(e) {
        let t = vt,
            r = 0,
            n = 1;
        return e === 0 ? 0 : e === 1 ? 1 : (r || (r = .3), n < 1 ? (n = 1, t = r / 4) : t = r / (2 * Math.PI) * Math.asin(1 / n), -(n * Math.pow(2, 10 * (e -= 1)) * Math.sin((e - t) * (2 * Math.PI) / r)))
    }

    function Fq(e) {
        let t = vt,
            r = 0,
            n = 1;
        return e === 0 ? 0 : e === 1 ? 1 : (r || (r = .3), n < 1 ? (n = 1, t = r / 4) : t = r / (2 * Math.PI) * Math.asin(1 / n), n * Math.pow(2, -10 * e) * Math.sin((e - t) * (2 * Math.PI) / r) + 1)
    }

    function Gq(e) {
        let t = vt,
            r = 0,
            n = 1;
        return e === 0 ? 0 : (e /= 1 / 2) === 2 ? 1 : (r || (r = .3 * 1.5), n < 1 ? (n = 1, t = r / 4) : t = r / (2 * Math.PI) * Math.asin(1 / n), e < 1 ? -.5 * (n * Math.pow(2, 10 * (e -= 1)) * Math.sin((e - t) * (2 * Math.PI) / r)) : n * Math.pow(2, -10 * (e -= 1)) * Math.sin((e - t) * (2 * Math.PI) / r) * .5 + 1)
    }

    function kq(e) {
        let t = vt;
        return (e /= .5) < 1 ? .5 * (e * e * (((t *= 1.525) + 1) * e - t)) : .5 * ((e -= 2) * e * (((t *= 1.525) + 1) * e + t) + 2)
    }

    function Uq(e) {
        let t = vt;
        return e * e * ((t + 1) * e - t)
    }

    function Vq(e) {
        let t = vt;
        return (e -= 1) * e * ((t + 1) * e + t) + 1
    }

    function Wq(e) {
        return e < 1 / 2.75 ? 7.5625 * e * e : e < 2 / 2.75 ? 7.5625 * (e -= 1.5 / 2.75) * e + .75 : e < 2.5 / 2.75 ? 7.5625 * (e -= 2.25 / 2.75) * e + .9375 : 7.5625 * (e -= 2.625 / 2.75) * e + .984375
    }

    function Hq(e) {
        return e < 1 / 2.75 ? 7.5625 * e * e : e < 2 / 2.75 ? 2 - (7.5625 * (e -= 1.5 / 2.75) * e + .75) : e < 2.5 / 2.75 ? 2 - (7.5625 * (e -= 2.25 / 2.75) * e + .9375) : 2 - (7.5625 * (e -= 2.625 / 2.75) * e + .984375)
    }
    var Xr, vt, sq, uq, cq, lq, wa = ge(() => {
        "use strict";
        Xr = le(Oa()), vt = 1.70158, sq = (0, Xr.default)(.25, .1, .25, 1), uq = (0, Xr.default)(.42, 0, 1, 1), cq = (0, Xr.default)(0, 0, .58, 1), lq = (0, Xr.default)(.42, 0, .58, 1)
    });
    var cg = {};
    Fe(cg, {
        applyEasing: () => Bq,
        createBezierEasing: () => Xq,
        optimizeFloat: () => jr
    });

    function jr(e, t = 5, r = 10) {
        let n = Math.pow(r, t),
            i = Number(Math.round(e * n) / n);
        return Math.abs(i) > 1e-4 ? i : 0
    }

    function Xq(e) {
        return (0, ug.default)(...e)
    }

    function Bq(e, t, r) {
        return t === 0 ? 0 : t === 1 ? 1 : jr(r ? t > 0 ? r(t) : t : t > 0 && e && Br[e] ? Br[e](t) : t)
    }
    var ug, xa = ge(() => {
        "use strict";
        wa();
        ug = le(Oa())
    });
    var dg = {};
    Fe(dg, {
        createElementState: () => fg,
        ixElements: () => oM,
        mergeActionState: () => Aa
    });

    function fg(e, t, r, n, i) {
        let o = r === jq ? (0, ir.getIn)(i, ["config", "target", "objectId"]) : null;
        return (0, ir.mergeIn)(e, [n], {
            id: n,
            ref: t,
            refId: o,
            refType: r
        })
    }

    function Aa(e, t, r, n, i) {
        let o = sM(i);
        return (0, ir.mergeIn)(e, [t, iM, r], n, o)
    }

    function sM(e) {
        let {
            config: t
        } = e;
        return aM.reduce((r, n) => {
            let i = n[0],
                o = n[1],
                a = t[i],
                s = t[o];
            return a != null && s != null && (r[o] = s), r
        }, {})
    }
    var ir, iB, jq, oB, zq, Kq, Yq, $q, Qq, Zq, Jq, eM, tM, rM, nM, lg, iM, oM, aM, pg = ge(() => {
        "use strict";
        ir = le(Yt());
        Ue();
        ({
            HTML_ELEMENT: iB,
            PLAIN_OBJECT: jq,
            ABSTRACT_NODE: oB,
            CONFIG_X_VALUE: zq,
            CONFIG_Y_VALUE: Kq,
            CONFIG_Z_VALUE: Yq,
            CONFIG_VALUE: $q,
            CONFIG_X_UNIT: Qq,
            CONFIG_Y_UNIT: Zq,
            CONFIG_Z_UNIT: Jq,
            CONFIG_UNIT: eM
        } = Ce), {
            IX2_SESSION_STOPPED: tM,
            IX2_INSTANCE_ADDED: rM,
            IX2_ELEMENT_STATE_CHANGED: nM
        } = Ie, lg = {}, iM = "refState", oM = (e = lg, t = {}) => {
            switch (t.type) {
                case tM:
                    return lg;
                case rM:
                    {
                        let {
                            elementId: r,
                            element: n,
                            origin: i,
                            actionItem: o,
                            refType: a
                        } = t.payload,
                        {
                            actionTypeId: s
                        } = o,
                        u = e;
                        return (0, ir.getIn)(u, [r, n]) !== n && (u = fg(u, n, a, r, o)),
                        Aa(u, r, s, i, o)
                    }
                case nM:
                    {
                        let {
                            elementId: r,
                            actionTypeId: n,
                            current: i,
                            actionItem: o
                        } = t.payload;
                        return Aa(e, r, n, i, o)
                    }
                default:
                    return e
            }
        };
        aM = [
            [zq, Qq],
            [Kq, Zq],
            [Yq, Jq],
            [$q, eM]
        ]
    });
    var vg = c(xe => {
        "use strict";
        Object.defineProperty(xe, "__esModule", {
            value: !0
        });
        xe.renderPlugin = xe.getPluginOrigin = xe.getPluginDuration = xe.getPluginDestination = xe.getPluginConfig = xe.createPluginInstance = xe.clearPlugin = void 0;
        var uM = e => e.value;
        xe.getPluginConfig = uM;
        var cM = (e, t) => {
            if (t.config.duration !== "auto") return null;
            let r = parseFloat(e.getAttribute("data-duration"));
            return r > 0 ? r * 1e3 : parseFloat(e.getAttribute("data-default-duration")) * 1e3
        };
        xe.getPluginDuration = cM;
        var lM = e => e || {
            value: 0
        };
        xe.getPluginOrigin = lM;
        var fM = e => ({
            value: e.value
        });
        xe.getPluginDestination = fM;
        var dM = e => {
            let t = window.Webflow.require("lottie").createInstance(e);
            return t.stop(), t.setSubframe(!0), t
        };
        xe.createPluginInstance = dM;
        var pM = (e, t, r) => {
            if (!e) return;
            let n = t[r.actionTypeId].value / 100;
            e.goToFrame(e.frames * n)
        };
        xe.renderPlugin = pM;
        var vM = e => {
            window.Webflow.require("lottie").createInstance(e).stop()
        };
        xe.clearPlugin = vM
    });
    var gg = c(Ae => {
        "use strict";
        Object.defineProperty(Ae, "__esModule", {
            value: !0
        });
        Ae.renderPlugin = Ae.getPluginOrigin = Ae.getPluginDuration = Ae.getPluginDestination = Ae.getPluginConfig = Ae.createPluginInstance = Ae.clearPlugin = void 0;
        var hM = e => document.querySelector(`[data-w-id="${e}"]`),
            gM = () => window.Webflow.require("spline"),
            yM = (e, t) => e.filter(r => !t.includes(r)),
            mM = (e, t) => e.value[t];
        Ae.getPluginConfig = mM;
        var EM = () => null;
        Ae.getPluginDuration = EM;
        var hg = Object.freeze({
                positionX: 0,
                positionY: 0,
                positionZ: 0,
                rotationX: 0,
                rotationY: 0,
                rotationZ: 0,
                scaleX: 1,
                scaleY: 1,
                scaleZ: 1
            }),
            _M = (e, t) => {
                let r = t.config.value,
                    n = Object.keys(r);
                if (e) {
                    let o = Object.keys(e),
                        a = yM(n, o);
                    return a.length ? a.reduce((u, f) => (u[f] = hg[f], u), e) : e
                }
                return n.reduce((o, a) => (o[a] = hg[a], o), {})
            };
        Ae.getPluginOrigin = _M;
        var bM = e => e.value;
        Ae.getPluginDestination = bM;
        var TM = (e, t) => {
            var r, n;
            let i = t == null || (r = t.config) === null || r === void 0 || (n = r.target) === null || n === void 0 ? void 0 : n.pluginElement;
            return i ? hM(i) : null
        };
        Ae.createPluginInstance = TM;
        var IM = (e, t, r) => {
            let n = gM(),
                i = n.getInstance(e),
                o = r.config.target.objectId,
                a = s => {
                    if (!s) throw new Error("Invalid spline app passed to renderSpline");
                    let u = o && s.findObjectById(o);
                    if (!u) return;
                    let {
                        PLUGIN_SPLINE: f
                    } = t;
                    f.positionX != null && (u.position.x = f.positionX), f.positionY != null && (u.position.y = f.positionY), f.positionZ != null && (u.position.z = f.positionZ), f.rotationX != null && (u.rotation.x = f.rotationX), f.rotationY != null && (u.rotation.y = f.rotationY), f.rotationZ != null && (u.rotation.z = f.rotationZ), f.scaleX != null && (u.scale.x = f.scaleX), f.scaleY != null && (u.scale.y = f.scaleY), f.scaleZ != null && (u.scale.z = f.scaleZ)
                };
            i ? a(i.spline) : n.setLoadHandler(e, a)
        };
        Ae.renderPlugin = IM;
        var OM = () => null;
        Ae.clearPlugin = OM
    });
    var mg = c(Oe => {
        "use strict";
        Object.defineProperty(Oe, "__esModule", {
            value: !0
        });
        Oe.getPluginOrigin = Oe.getPluginDuration = Oe.getPluginDestination = Oe.getPluginConfig = Oe.createPluginInstance = Oe.clearPlugin = void 0;
        Oe.normalizeColor = yg;
        Oe.renderPlugin = void 0;

        function yg(e) {
            let t, r, n, i = 1,
                o = e.replace(/\s/g, "").toLowerCase();
            if (o.startsWith("#")) {
                let a = o.substring(1);
                a.length === 3 ? (t = parseInt(a[0] + a[0], 16), r = parseInt(a[1] + a[1], 16), n = parseInt(a[2] + a[2], 16)) : a.length === 6 && (t = parseInt(a.substring(0, 2), 16), r = parseInt(a.substring(2, 4), 16), n = parseInt(a.substring(4, 6), 16))
            } else if (o.startsWith("rgba")) {
                let a = o.match(/rgba\(([^)]+)\)/)[1].split(",");
                t = parseInt(a[0], 10), r = parseInt(a[1], 10), n = parseInt(a[2], 10), i = parseFloat(a[3])
            } else if (o.startsWith("rgb")) {
                let a = o.match(/rgb\(([^)]+)\)/)[1].split(",");
                t = parseInt(a[0], 10), r = parseInt(a[1], 10), n = parseInt(a[2], 10)
            } else if (o.startsWith("hsla")) {
                let a = o.match(/hsla\(([^)]+)\)/)[1].split(","),
                    s = parseFloat(a[0]),
                    u = parseFloat(a[1].replace("%", "")) / 100,
                    f = parseFloat(a[2].replace("%", "")) / 100;
                i = parseFloat(a[3]);
                let g = (1 - Math.abs(2 * f - 1)) * u,
                    p = g * (1 - Math.abs(s / 60 % 2 - 1)),
                    m = f - g / 2,
                    E, T, O;
                s >= 0 && s < 60 ? (E = g, T = p, O = 0) : s >= 60 && s < 120 ? (E = p, T = g, O = 0) : s >= 120 && s < 180 ? (E = 0, T = g, O = p) : s >= 180 && s < 240 ? (E = 0, T = p, O = g) : s >= 240 && s < 300 ? (E = p, T = 0, O = g) : (E = g, T = 0, O = p), t = Math.round((E + m) * 255), r = Math.round((T + m) * 255), n = Math.round((O + m) * 255)
            } else if (o.startsWith("hsl")) {
                let a = o.match(/hsl\(([^)]+)\)/)[1].split(","),
                    s = parseFloat(a[0]),
                    u = parseFloat(a[1].replace("%", "")) / 100,
                    f = parseFloat(a[2].replace("%", "")) / 100,
                    g = (1 - Math.abs(2 * f - 1)) * u,
                    p = g * (1 - Math.abs(s / 60 % 2 - 1)),
                    m = f - g / 2,
                    E, T, O;
                s >= 0 && s < 60 ? (E = g, T = p, O = 0) : s >= 60 && s < 120 ? (E = p, T = g, O = 0) : s >= 120 && s < 180 ? (E = 0, T = g, O = p) : s >= 180 && s < 240 ? (E = 0, T = p, O = g) : s >= 240 && s < 300 ? (E = p, T = 0, O = g) : (E = g, T = 0, O = p), t = Math.round((E + m) * 255), r = Math.round((T + m) * 255), n = Math.round((O + m) * 255)
            }
            return (Number.isNaN(t) || Number.isNaN(r) || Number.isNaN(n)) && `${e}`, {
                red: t,
                green: r,
                blue: n,
                alpha: i
            }
        }
        var wM = (e, t) => e.value[t];
        Oe.getPluginConfig = wM;
        var xM = () => null;
        Oe.getPluginDuration = xM;
        var AM = (e, t) => {
            if (e) return e;
            let r = t.config.value,
                n = t.config.target.objectId,
                i = getComputedStyle(document.documentElement).getPropertyValue(n);
            if (r.size != null) return {
                size: parseInt(i, 10)
            };
            if (r.red != null && r.green != null && r.blue != null) return yg(i)
        };
        Oe.getPluginOrigin = AM;
        var SM = e => e.value;
        Oe.getPluginDestination = SM;
        var CM = () => null;
        Oe.createPluginInstance = CM;
        var RM = (e, t, r) => {
            let n = r.config.target.objectId,
                i = r.config.value.unit,
                {
                    PLUGIN_VARIABLE: o
                } = t,
                {
                    size: a,
                    red: s,
                    green: u,
                    blue: f,
                    alpha: g
                } = o,
                p;
            a != null && (p = a + i), s != null && f != null && u != null && g != null && (p = `rgba(${s}, ${u}, ${f}, ${g})`), p != null && document.documentElement.style.setProperty(n, p)
        };
        Oe.renderPlugin = RM;
        var LM = (e, t) => {
            let r = t.config.target.objectId;
            document.documentElement.style.removeProperty(r)
        };
        Oe.clearPlugin = LM
    });
    var Eg = c(ti => {
        "use strict";
        var Ca = dn().default;
        Object.defineProperty(ti, "__esModule", {
            value: !0
        });
        ti.pluginMethodMap = void 0;
        var Sa = (Ue(), rt(wf)),
            NM = Ca(vg()),
            PM = Ca(gg()),
            qM = Ca(mg()),
            cB = ti.pluginMethodMap = new Map([
                [Sa.ActionTypeConsts.PLUGIN_LOTTIE, { ...NM
                }],
                [Sa.ActionTypeConsts.PLUGIN_SPLINE, { ...PM
                }],
                [Sa.ActionTypeConsts.PLUGIN_VARIABLE, { ...qM
                }]
            ])
    });
    var _g = {};
    Fe(_g, {
        clearPlugin: () => Ma,
        createPluginInstance: () => DM,
        getPluginConfig: () => La,
        getPluginDestination: () => Pa,
        getPluginDuration: () => MM,
        getPluginOrigin: () => Na,
        isPluginType: () => Dt,
        renderPlugin: () => qa
    });

    function Dt(e) {
        return Ra.pluginMethodMap.has(e)
    }
    var Ra, Ft, La, Na, MM, Pa, DM, qa, Ma, Da = ge(() => {
        "use strict";
        Zn();
        Ra = le(Eg());
        Ft = e => t => {
            if (!Je) return () => null;
            let r = Ra.pluginMethodMap.get(t);
            if (!r) throw new Error(`IX2 no plugin configured for: ${t}`);
            let n = r[e];
            if (!n) throw new Error(`IX2 invalid plugin method: ${e}`);
            return n
        }, La = Ft("getPluginConfig"), Na = Ft("getPluginOrigin"), MM = Ft("getPluginDuration"), Pa = Ft("getPluginDestination"), DM = Ft("createPluginInstance"), qa = Ft("renderPlugin"), Ma = Ft("clearPlugin")
    });
    var Tg = c((dB, bg) => {
        function FM(e, t) {
            return e == null || e !== e ? t : e
        }
        bg.exports = FM
    });
    var Og = c((pB, Ig) => {
        function GM(e, t, r, n) {
            var i = -1,
                o = e == null ? 0 : e.length;
            for (n && o && (r = e[++i]); ++i < o;) r = t(r, e[i], i, e);
            return r
        }
        Ig.exports = GM
    });
    var xg = c((vB, wg) => {
        function kM(e) {
            return function(t, r, n) {
                for (var i = -1, o = Object(t), a = n(t), s = a.length; s--;) {
                    var u = a[e ? s : ++i];
                    if (r(o[u], u, o) === !1) break
                }
                return t
            }
        }
        wg.exports = kM
    });
    var Sg = c((hB, Ag) => {
        var UM = xg(),
            VM = UM();
        Ag.exports = VM
    });
    var Fa = c((gB, Cg) => {
        var WM = Sg(),
            HM = Ur();

        function XM(e, t) {
            return e && WM(e, t, HM)
        }
        Cg.exports = XM
    });
    var Lg = c((yB, Rg) => {
        var BM = qt();

        function jM(e, t) {
            return function(r, n) {
                if (r == null) return r;
                if (!BM(r)) return e(r, n);
                for (var i = r.length, o = t ? i : -1, a = Object(r);
                    (t ? o-- : ++o < i) && n(a[o], o, a) !== !1;);
                return r
            }
        }
        Rg.exports = jM
    });
    var Ga = c((mB, Ng) => {
        var zM = Fa(),
            KM = Lg(),
            YM = KM(zM);
        Ng.exports = YM
    });
    var qg = c((EB, Pg) => {
        function $M(e, t, r, n, i) {
            return i(e, function(o, a, s) {
                r = n ? (n = !1, o) : t(r, o, a, s)
            }), r
        }
        Pg.exports = $M
    });
    var Dg = c((_B, Mg) => {
        var QM = Og(),
            ZM = Ga(),
            JM = Ot(),
            e1 = qg(),
            t1 = we();

        function r1(e, t, r) {
            var n = t1(e) ? QM : e1,
                i = arguments.length < 3;
            return n(e, JM(t, 4), r, i, ZM)
        }
        Mg.exports = r1
    });
    var Gg = c((bB, Fg) => {
        var n1 = _a(),
            i1 = Ot(),
            o1 = ba(),
            a1 = Math.max,
            s1 = Math.min;

        function u1(e, t, r) {
            var n = e == null ? 0 : e.length;
            if (!n) return -1;
            var i = n - 1;
            return r !== void 0 && (i = o1(r), i = r < 0 ? a1(n + i, 0) : s1(i, n - 1)), n1(e, i1(t, 3), i, !0)
        }
        Fg.exports = u1
    });
    var Ug = c((TB, kg) => {
        var c1 = Ea(),
            l1 = Gg(),
            f1 = c1(l1);
        kg.exports = f1
    });

    function Vg(e, t) {
        return e === t ? e !== 0 || t !== 0 || 1 / e === 1 / t : e !== e && t !== t
    }

    function p1(e, t) {
        if (Vg(e, t)) return !0;
        if (typeof e != "object" || e === null || typeof t != "object" || t === null) return !1;
        let r = Object.keys(e),
            n = Object.keys(t);
        if (r.length !== n.length) return !1;
        for (let i = 0; i < r.length; i++)
            if (!d1.call(t, r[i]) || !Vg(e[r[i]], t[r[i]])) return !1;
        return !0
    }
    var d1, ka, Wg = ge(() => {
        "use strict";
        d1 = Object.prototype.hasOwnProperty;
        ka = p1
    });
    var oy = {};
    Fe(oy, {
        cleanupHTMLElement: () => lD,
        clearAllStyles: () => cD,
        clearObjectCache: () => R1,
        getActionListProgress: () => dD,
        getAffectedElements: () => Xa,
        getComputedStyle: () => G1,
        getDestinationValues: () => B1,
        getElementId: () => q1,
        getInstanceId: () => N1,
        getInstanceOrigin: () => V1,
        getItemConfigByKey: () => X1,
        getMaxDurationItemIndex: () => iy,
        getNamespacedParameterId: () => hD,
        getRenderType: () => ty,
        getStyleProp: () => j1,
        mediaQueriesEqual: () => yD,
        observeStore: () => F1,
        reduceListToGroup: () => pD,
        reifyState: () => M1,
        renderHTMLElement: () => z1,
        shallowEqual: () => ka,
        shouldAllowMediaQuery: () => gD,
        shouldNamespaceEventParameter: () => vD,
        stringifyTarget: () => mD
    });

    function R1() {
        ri.clear()
    }

    function N1() {
        return "i" + L1++
    }

    function q1(e, t) {
        for (let r in e) {
            let n = e[r];
            if (n && n.ref === t) return n.id
        }
        return "e" + P1++
    }

    function M1({
        events: e,
        actionLists: t,
        site: r
    } = {}) {
        let n = (0, ai.default)(e, (a, s) => {
                let {
                    eventTypeId: u
                } = s;
                return a[u] || (a[u] = {}), a[u][s.id] = s, a
            }, {}),
            i = r && r.mediaQueries,
            o = [];
        return i ? o = i.map(a => a.key) : (i = [], console.warn("IX2 missing mediaQueries in site data")), {
            ixData: {
                events: e,
                actionLists: t,
                eventTypeMap: n,
                mediaQueries: i,
                mediaQueryKeys: o
            }
        }
    }

    function F1({
        store: e,
        select: t,
        onChange: r,
        comparator: n = D1
    }) {
        let {
            getState: i,
            subscribe: o
        } = e, a = o(u), s = t(i());

        function u() {
            let f = t(i());
            if (f == null) {
                a();
                return
            }
            n(f, s) || (s = f, r(s, e))
        }
        return a
    }

    function Bg(e) {
        let t = typeof e;
        if (t === "string") return {
            id: e
        };
        if (e != null && t === "object") {
            let {
                id: r,
                objectId: n,
                selector: i,
                selectorGuids: o,
                appliesTo: a,
                useEventTarget: s
            } = e;
            return {
                id: r,
                objectId: n,
                selector: i,
                selectorGuids: o,
                appliesTo: a,
                useEventTarget: s
            }
        }
        return {}
    }

    function Xa({
        config: e,
        event: t,
        eventTarget: r,
        elementRoot: n,
        elementApi: i
    }) {
        if (!i) throw new Error("IX2 missing elementApi");
        let {
            targets: o
        } = e;
        if (Array.isArray(o) && o.length > 0) return o.reduce((R, y) => R.concat(Xa({
            config: {
                target: y
            },
            event: t,
            eventTarget: r,
            elementRoot: n,
            elementApi: i
        })), []);
        let {
            getValidDocument: a,
            getQuerySelector: s,
            queryDocument: u,
            getChildElements: f,
            getSiblingElements: g,
            matchSelector: p,
            elementContains: m,
            isSiblingNode: E
        } = i, {
            target: T
        } = e;
        if (!T) return [];
        let {
            id: O,
            objectId: F,
            selector: S,
            selectorGuids: P,
            appliesTo: A,
            useEventTarget: M
        } = Bg(T);
        if (F) return [ri.has(F) ? ri.get(F) : ri.set(F, {}).get(F)];
        if (A === Bo.PAGE) {
            let R = a(O);
            return R ? [R] : []
        }
        let q = (t ? .action ? .config ? .affectedElements ? ? {})[O || S] || {},
            B = !!(q.id || q.selector),
            K, Y, te, V = t && s(Bg(t.target));
        if (B ? (K = q.limitAffectedElements, Y = V, te = s(q)) : Y = te = s({
                id: O,
                selector: S,
                selectorGuids: P
            }), t && M) {
            let R = r && (te || M === !0) ? [r] : u(V);
            if (te) {
                if (M === A1) return u(te).filter(y => R.some(L => m(y, L)));
                if (M === Hg) return u(te).filter(y => R.some(L => m(L, y)));
                if (M === Xg) return u(te).filter(y => R.some(L => E(L, y)))
            }
            return R
        }
        return Y == null || te == null ? [] : Je && n ? u(te).filter(R => n.contains(R)) : K === Hg ? u(Y, te) : K === x1 ? f(u(Y)).filter(p(te)) : K === Xg ? g(u(Y)).filter(p(te)) : u(te)
    }

    function G1({
        element: e,
        actionItem: t
    }) {
        if (!Je) return {};
        let {
            actionTypeId: r
        } = t;
        switch (r) {
            case cr:
            case lr:
            case fr:
            case dr:
            case ui:
                return window.getComputedStyle(e);
            default:
                return {}
        }
    }

    function V1(e, t = {}, r = {}, n, i) {
        let {
            getStyle: o
        } = i, {
            actionTypeId: a
        } = n;
        if (Dt(a)) return Na(a)(t[a], n);
        switch (n.actionTypeId) {
            case ar:
            case sr:
            case ur:
            case $r:
                return t[n.actionTypeId] || Ba[n.actionTypeId];
            case Qr:
                return k1(t[n.actionTypeId], n.config.filters);
            case Zr:
                return U1(t[n.actionTypeId], n.config.fontVariations);
            case Zg:
                return {
                    value: (0, ht.default)(parseFloat(o(e, ii)), 1)
                };
            case cr:
                {
                    let s = o(e, ut),
                        u = o(e, ct),
                        f, g;
                    return n.config.widthUnit === xt ? f = jg.test(s) ? parseFloat(s) : parseFloat(r.width) : f = (0, ht.default)(parseFloat(s), parseFloat(r.width)),
                    n.config.heightUnit === xt ? g = jg.test(u) ? parseFloat(u) : parseFloat(r.height) : g = (0, ht.default)(parseFloat(u), parseFloat(r.height)),
                    {
                        widthValue: f,
                        heightValue: g
                    }
                }
            case lr:
            case fr:
            case dr:
                return aD({
                    element: e,
                    actionTypeId: n.actionTypeId,
                    computedStyle: r,
                    getStyle: o
                });
            case ui:
                return {
                    value: (0, ht.default)(o(e, oi), r.display)
                };
            case C1:
                return t[n.actionTypeId] || {
                    value: 0
                };
            default:
                return
        }
    }

    function B1({
        element: e,
        actionItem: t,
        elementApi: r
    }) {
        if (Dt(t.actionTypeId)) return Pa(t.actionTypeId)(t.config);
        switch (t.actionTypeId) {
            case ar:
            case sr:
            case ur:
            case $r:
                {
                    let {
                        xValue: n,
                        yValue: i,
                        zValue: o
                    } = t.config;
                    return {
                        xValue: n,
                        yValue: i,
                        zValue: o
                    }
                }
            case cr:
                {
                    let {
                        getStyle: n,
                        setStyle: i,
                        getProperty: o
                    } = r,
                    {
                        widthUnit: a,
                        heightUnit: s
                    } = t.config,
                    {
                        widthValue: u,
                        heightValue: f
                    } = t.config;
                    if (!Je) return {
                        widthValue: u,
                        heightValue: f
                    };
                    if (a === xt) {
                        let g = n(e, ut);
                        i(e, ut, ""), u = o(e, "offsetWidth"), i(e, ut, g)
                    }
                    if (s === xt) {
                        let g = n(e, ct);
                        i(e, ct, ""), f = o(e, "offsetHeight"), i(e, ct, g)
                    }
                    return {
                        widthValue: u,
                        heightValue: f
                    }
                }
            case lr:
            case fr:
            case dr:
                {
                    let {
                        rValue: n,
                        gValue: i,
                        bValue: o,
                        aValue: a
                    } = t.config;
                    return {
                        rValue: n,
                        gValue: i,
                        bValue: o,
                        aValue: a
                    }
                }
            case Qr:
                return t.config.filters.reduce(W1, {});
            case Zr:
                return t.config.fontVariations.reduce(H1, {});
            default:
                {
                    let {
                        value: n
                    } = t.config;
                    return {
                        value: n
                    }
                }
        }
    }

    function ty(e) {
        if (/^TRANSFORM_/.test(e)) return $g;
        if (/^STYLE_/.test(e)) return Wa;
        if (/^GENERAL_/.test(e)) return Va;
        if (/^PLUGIN_/.test(e)) return Qg
    }

    function j1(e, t) {
        return e === Wa ? t.replace("STYLE_", "").toLowerCase() : null
    }

    function z1(e, t, r, n, i, o, a, s, u) {
        switch (s) {
            case $g:
                return Z1(e, t, r, i, a);
            case Wa:
                return sD(e, t, r, i, o, a);
            case Va:
                return uD(e, i, a);
            case Qg:
                {
                    let {
                        actionTypeId: f
                    } = i;
                    if (Dt(f)) return qa(f)(u, t, i)
                }
        }
    }

    function Z1(e, t, r, n, i) {
        let o = Q1.map(s => {
                let u = Ba[s],
                    {
                        xValue: f = u.xValue,
                        yValue: g = u.yValue,
                        zValue: p = u.zValue,
                        xUnit: m = "",
                        yUnit: E = "",
                        zUnit: T = ""
                    } = t[s] || {};
                switch (s) {
                    case ar:
                        return `${g1}(${f}${m}, ${g}${E}, ${p}${T})`;
                    case sr:
                        return `${y1}(${f}${m}, ${g}${E}, ${p}${T})`;
                    case ur:
                        return `${m1}(${f}${m}) ${E1}(${g}${E}) ${_1}(${p}${T})`;
                    case $r:
                        return `${b1}(${f}${m}, ${g}${E})`;
                    default:
                        return ""
                }
            }).join(" "),
            {
                setStyle: a
            } = i;
        Gt(e, wt, i), a(e, wt, o), tD(n, r) && a(e, Qn, T1)
    }

    function J1(e, t, r, n) {
        let i = (0, ai.default)(t, (a, s, u) => `${a} ${u}(${s}${$1(u,r)})`, ""),
            {
                setStyle: o
            } = n;
        Gt(e, zr, n), o(e, zr, i)
    }

    function eD(e, t, r, n) {
        let i = (0, ai.default)(t, (a, s, u) => (a.push(`"${u}" ${s}`), a), []).join(", "),
            {
                setStyle: o
            } = n;
        Gt(e, Kr, n), o(e, Kr, i)
    }

    function tD({
        actionTypeId: e
    }, {
        xValue: t,
        yValue: r,
        zValue: n
    }) {
        return e === ar && n !== void 0 || e === sr && n !== void 0 || e === ur && (t !== void 0 || r !== void 0)
    }

    function oD(e, t) {
        let r = e.exec(t);
        return r ? r[1] : ""
    }

    function aD({
        element: e,
        actionTypeId: t,
        computedStyle: r,
        getStyle: n
    }) {
        let i = Ha[t],
            o = n(e, i),
            a = nD.test(o) ? o : r[i],
            s = oD(iD, a).split(Yr);
        return {
            rValue: (0, ht.default)(parseInt(s[0], 10), 255),
            gValue: (0, ht.default)(parseInt(s[1], 10), 255),
            bValue: (0, ht.default)(parseInt(s[2], 10), 255),
            aValue: (0, ht.default)(parseFloat(s[3]), 1)
        }
    }

    function sD(e, t, r, n, i, o) {
        let {
            setStyle: a
        } = o;
        switch (n.actionTypeId) {
            case cr:
                {
                    let {
                        widthUnit: s = "",
                        heightUnit: u = ""
                    } = n.config,
                    {
                        widthValue: f,
                        heightValue: g
                    } = r;f !== void 0 && (s === xt && (s = "px"), Gt(e, ut, o), a(e, ut, f + s)),
                    g !== void 0 && (u === xt && (u = "px"), Gt(e, ct, o), a(e, ct, g + u));
                    break
                }
            case Qr:
                {
                    J1(e, r, n.config, o);
                    break
                }
            case Zr:
                {
                    eD(e, r, n.config, o);
                    break
                }
            case lr:
            case fr:
            case dr:
                {
                    let s = Ha[n.actionTypeId],
                        u = Math.round(r.rValue),
                        f = Math.round(r.gValue),
                        g = Math.round(r.bValue),
                        p = r.aValue;Gt(e, s, o),
                    a(e, s, p >= 1 ? `rgb(${u},${f},${g})` : `rgba(${u},${f},${g},${p})`);
                    break
                }
            default:
                {
                    let {
                        unit: s = ""
                    } = n.config;Gt(e, i, o),
                    a(e, i, r.value + s);
                    break
                }
        }
    }

    function uD(e, t, r) {
        let {
            setStyle: n
        } = r;
        switch (t.actionTypeId) {
            case ui:
                {
                    let {
                        value: i
                    } = t.config;i === I1 && Je ? n(e, oi, Ia) : n(e, oi, i);
                    return
                }
        }
    }

    function Gt(e, t, r) {
        if (!Je) return;
        let n = ey[t];
        if (!n) return;
        let {
            getStyle: i,
            setStyle: o
        } = r, a = i(e, or);
        if (!a) {
            o(e, or, n);
            return
        }
        let s = a.split(Yr).map(Jg);
        s.indexOf(n) === -1 && o(e, or, s.concat(n).join(Yr))
    }

    function ry(e, t, r) {
        if (!Je) return;
        let n = ey[t];
        if (!n) return;
        let {
            getStyle: i,
            setStyle: o
        } = r, a = i(e, or);
        !a || a.indexOf(n) === -1 || o(e, or, a.split(Yr).map(Jg).filter(s => s !== n).join(Yr))
    }

    function cD({
        store: e,
        elementApi: t
    }) {
        let {
            ixData: r
        } = e.getState(), {
            events: n = {},
            actionLists: i = {}
        } = r;
        Object.keys(n).forEach(o => {
            let a = n[o],
                {
                    config: s
                } = a.action,
                {
                    actionListId: u
                } = s,
                f = i[u];
            f && zg({
                actionList: f,
                event: a,
                elementApi: t
            })
        }), Object.keys(i).forEach(o => {
            zg({
                actionList: i[o],
                elementApi: t
            })
        })
    }

    function zg({
        actionList: e = {},
        event: t,
        elementApi: r
    }) {
        let {
            actionItemGroups: n,
            continuousParameterGroups: i
        } = e;
        n && n.forEach(o => {
            Kg({
                actionGroup: o,
                event: t,
                elementApi: r
            })
        }), i && i.forEach(o => {
            let {
                continuousActionGroups: a
            } = o;
            a.forEach(s => {
                Kg({
                    actionGroup: s,
                    event: t,
                    elementApi: r
                })
            })
        })
    }

    function Kg({
        actionGroup: e,
        event: t,
        elementApi: r
    }) {
        let {
            actionItems: n
        } = e;
        n.forEach(i => {
            let {
                actionTypeId: o,
                config: a
            } = i, s;
            Dt(o) ? s = u => Ma(o)(u, i) : s = ny({
                effect: fD,
                actionTypeId: o,
                elementApi: r
            }), Xa({
                config: a,
                event: t,
                elementApi: r
            }).forEach(s)
        })
    }

    function lD(e, t, r) {
        let {
            setStyle: n,
            getStyle: i
        } = r, {
            actionTypeId: o
        } = t;
        if (o === cr) {
            let {
                config: a
            } = t;
            a.widthUnit === xt && n(e, ut, ""), a.heightUnit === xt && n(e, ct, "")
        }
        i(e, or) && ny({
            effect: ry,
            actionTypeId: o,
            elementApi: r
        })(e)
    }

    function fD(e, t, r) {
        let {
            setStyle: n
        } = r;
        ry(e, t, r), n(e, t, ""), t === wt && n(e, Qn, "")
    }

    function iy(e) {
        let t = 0,
            r = 0;
        return e.forEach((n, i) => {
            let {
                config: o
            } = n, a = o.delay + o.duration;
            a >= t && (t = a, r = i)
        }), r
    }

    function dD(e, t) {
        let {
            actionItemGroups: r,
            useFirstGroupAsInitialState: n
        } = e, {
            actionItem: i,
            verboseTimeElapsed: o = 0
        } = t, a = 0, s = 0;
        return r.forEach((u, f) => {
            if (n && f === 0) return;
            let {
                actionItems: g
            } = u, p = g[iy(g)], {
                config: m,
                actionTypeId: E
            } = p;
            i.id === p.id && (s = a + o);
            let T = ty(E) === Va ? 0 : m.duration;
            a += m.delay + T
        }), a > 0 ? jr(s / a) : 0
    }

    function pD({
        actionList: e,
        actionItemId: t,
        rawData: r
    }) {
        let {
            actionItemGroups: n,
            continuousParameterGroups: i
        } = e, o = [], a = s => (o.push((0, si.mergeIn)(s, ["config"], {
            delay: 0,
            duration: 0
        })), s.id === t);
        return n && n.some(({
            actionItems: s
        }) => s.some(a)), i && i.some(s => {
            let {
                continuousActionGroups: u
            } = s;
            return u.some(({
                actionItems: f
            }) => f.some(a))
        }), (0, si.setIn)(r, ["actionLists"], {
            [e.id]: {
                id: e.id,
                actionItemGroups: [{
                    actionItems: o
                }]
            }
        })
    }

    function vD(e, {
        basedOn: t
    }) {
        return e === Ze.SCROLLING_IN_VIEW && (t === at.ELEMENT || t == null) || e === Ze.MOUSE_MOVE && t === at.ELEMENT
    }

    function hD(e, t) {
        return e + S1 + t
    }

    function gD(e, t) {
        return t == null ? !0 : e.indexOf(t) !== -1
    }

    function yD(e, t) {
        return ka(e && e.sort(), t && t.sort())
    }

    function mD(e) {
        if (typeof e == "string") return e;
        if (e.pluginElement && e.objectId) return e.pluginElement + Ua + e.objectId;
        if (e.objectId) return e.objectId;
        let {
            id: t = "",
            selector: r = "",
            useEventTarget: n = ""
        } = e;
        return t + Ua + r + Ua + n
    }
    var ht, ai, ni, si, v1, h1, g1, y1, m1, E1, _1, b1, T1, I1, ii, zr, Kr, ut, ct, Yg, O1, w1, Hg, x1, Xg, A1, oi, or, xt, Yr, S1, Ua, $g, Va, Wa, Qg, ar, sr, ur, $r, Zg, Qr, Zr, cr, lr, fr, dr, ui, C1, Jg, Ha, ey, ri, L1, P1, D1, jg, k1, U1, W1, H1, X1, Ba, K1, Y1, $1, Q1, rD, nD, iD, ny, ay = ge(() => {
        "use strict";
        ht = le(Tg()), ai = le(Dg()), ni = le(Ug()), si = le(Yt());
        Ue();
        Wg();
        xa();
        Da();
        Zn();
        ({
            BACKGROUND: v1,
            TRANSFORM: h1,
            TRANSLATE_3D: g1,
            SCALE_3D: y1,
            ROTATE_X: m1,
            ROTATE_Y: E1,
            ROTATE_Z: _1,
            SKEW: b1,
            PRESERVE_3D: T1,
            FLEX: I1,
            OPACITY: ii,
            FILTER: zr,
            FONT_VARIATION_SETTINGS: Kr,
            WIDTH: ut,
            HEIGHT: ct,
            BACKGROUND_COLOR: Yg,
            BORDER_COLOR: O1,
            COLOR: w1,
            CHILDREN: Hg,
            IMMEDIATE_CHILDREN: x1,
            SIBLINGS: Xg,
            PARENT: A1,
            DISPLAY: oi,
            WILL_CHANGE: or,
            AUTO: xt,
            COMMA_DELIMITER: Yr,
            COLON_DELIMITER: S1,
            BAR_DELIMITER: Ua,
            RENDER_TRANSFORM: $g,
            RENDER_GENERAL: Va,
            RENDER_STYLE: Wa,
            RENDER_PLUGIN: Qg
        } = Ce), {
            TRANSFORM_MOVE: ar,
            TRANSFORM_SCALE: sr,
            TRANSFORM_ROTATE: ur,
            TRANSFORM_SKEW: $r,
            STYLE_OPACITY: Zg,
            STYLE_FILTER: Qr,
            STYLE_FONT_VARIATION: Zr,
            STYLE_SIZE: cr,
            STYLE_BACKGROUND_COLOR: lr,
            STYLE_BORDER: fr,
            STYLE_TEXT_COLOR: dr,
            GENERAL_DISPLAY: ui,
            OBJECT_VALUE: C1
        } = ke, Jg = e => e.trim(), Ha = Object.freeze({
            [lr]: Yg,
            [fr]: O1,
            [dr]: w1
        }), ey = Object.freeze({
            [wt]: h1,
            [Yg]: v1,
            [ii]: ii,
            [zr]: zr,
            [ut]: ut,
            [ct]: ct,
            [Kr]: Kr
        }), ri = new Map;
        L1 = 1;
        P1 = 1;
        D1 = (e, t) => e === t;
        jg = /px/, k1 = (e, t) => t.reduce((r, n) => (r[n.type] == null && (r[n.type] = K1[n.type]), r), e || {}), U1 = (e, t) => t.reduce((r, n) => (r[n.type] == null && (r[n.type] = Y1[n.type] || n.defaultValue || 0), r), e || {});
        W1 = (e, t) => (t && (e[t.type] = t.value || 0), e), H1 = (e, t) => (t && (e[t.type] = t.value || 0), e), X1 = (e, t, r) => {
            if (Dt(e)) return La(e)(r, t);
            switch (e) {
                case Qr:
                    {
                        let n = (0, ni.default)(r.filters, ({
                            type: i
                        }) => i === t);
                        return n ? n.value : 0
                    }
                case Zr:
                    {
                        let n = (0, ni.default)(r.fontVariations, ({
                            type: i
                        }) => i === t);
                        return n ? n.value : 0
                    }
                default:
                    return r[t]
            }
        };
        Ba = {
            [ar]: Object.freeze({
                xValue: 0,
                yValue: 0,
                zValue: 0
            }),
            [sr]: Object.freeze({
                xValue: 1,
                yValue: 1,
                zValue: 1
            }),
            [ur]: Object.freeze({
                xValue: 0,
                yValue: 0,
                zValue: 0
            }),
            [$r]: Object.freeze({
                xValue: 0,
                yValue: 0
            })
        }, K1 = Object.freeze({
            blur: 0,
            "hue-rotate": 0,
            invert: 0,
            grayscale: 0,
            saturate: 100,
            sepia: 0,
            contrast: 100,
            brightness: 100
        }), Y1 = Object.freeze({
            wght: 0,
            opsz: 0,
            wdth: 0,
            slnt: 0
        }), $1 = (e, t) => {
            let r = (0, ni.default)(t.filters, ({
                type: n
            }) => n === e);
            if (r && r.unit) return r.unit;
            switch (e) {
                case "blur":
                    return "px";
                case "hue-rotate":
                    return "deg";
                default:
                    return "%"
            }
        }, Q1 = Object.keys(Ba);
        rD = "\\(([^)]+)\\)", nD = /^rgb/, iD = RegExp(`rgba?${rD}`);
        ny = ({
            effect: e,
            actionTypeId: t,
            elementApi: r
        }) => n => {
            switch (t) {
                case ar:
                case sr:
                case ur:
                case $r:
                    e(n, wt, r);
                    break;
                case Qr:
                    e(n, zr, r);
                    break;
                case Zr:
                    e(n, Kr, r);
                    break;
                case Zg:
                    e(n, ii, r);
                    break;
                case cr:
                    e(n, ut, r), e(n, ct, r);
                    break;
                case lr:
                case fr:
                case dr:
                    e(n, Ha[t], r);
                    break;
                case ui:
                    e(n, oi, r);
                    break
            }
        }
    });
    var kt = c(Pe => {
        "use strict";
        var pr = dn().default;
        Object.defineProperty(Pe, "__esModule", {
            value: !0
        });
        Pe.IX2VanillaUtils = Pe.IX2VanillaPlugins = Pe.IX2ElementsReducer = Pe.IX2Easings = Pe.IX2EasingUtils = Pe.IX2BrowserSupport = void 0;
        var ED = pr((Zn(), rt(rg)));
        Pe.IX2BrowserSupport = ED;
        var _D = pr((wa(), rt(Br)));
        Pe.IX2Easings = _D;
        var bD = pr((xa(), rt(cg)));
        Pe.IX2EasingUtils = bD;
        var TD = pr((pg(), rt(dg)));
        Pe.IX2ElementsReducer = TD;
        var ID = pr((Da(), rt(_g)));
        Pe.IX2VanillaPlugins = ID;
        var OD = pr((ay(), rt(oy)));
        Pe.IX2VanillaUtils = OD
    });
    var li, gt, wD, xD, AD, SD, CD, RD, ci, sy, LD, ND, ja, PD, qD, MD, DD, uy, cy = ge(() => {
        "use strict";
        Ue();
        li = le(kt()), gt = le(Yt()), {
            IX2_RAW_DATA_IMPORTED: wD,
            IX2_SESSION_STOPPED: xD,
            IX2_INSTANCE_ADDED: AD,
            IX2_INSTANCE_STARTED: SD,
            IX2_INSTANCE_REMOVED: CD,
            IX2_ANIMATION_FRAME_CHANGED: RD
        } = Ie, {
            optimizeFloat: ci,
            applyEasing: sy,
            createBezierEasing: LD
        } = li.IX2EasingUtils, {
            RENDER_GENERAL: ND
        } = Ce, {
            getItemConfigByKey: ja,
            getRenderType: PD,
            getStyleProp: qD
        } = li.IX2VanillaUtils, MD = (e, t) => {
            let {
                position: r,
                parameterId: n,
                actionGroups: i,
                destinationKeys: o,
                smoothing: a,
                restingValue: s,
                actionTypeId: u,
                customEasingFn: f,
                skipMotion: g,
                skipToValue: p
            } = e, {
                parameters: m
            } = t.payload, E = Math.max(1 - a, .01), T = m[n];
            T == null && (E = 1, T = s);
            let O = Math.max(T, 0) || 0,
                F = ci(O - r),
                S = g ? p : ci(r + F * E),
                P = S * 100;
            if (S === r && e.current) return e;
            let A, M, D, q;
            for (let K = 0, {
                    length: Y
                } = i; K < Y; K++) {
                let {
                    keyframe: te,
                    actionItems: V
                } = i[K];
                if (K === 0 && (A = V[0]), P >= te) {
                    A = V[0];
                    let R = i[K + 1],
                        y = R && P !== te;
                    M = y ? R.actionItems[0] : null, y && (D = te / 100, q = (R.keyframe - te) / 100)
                }
            }
            let B = {};
            if (A && !M)
                for (let K = 0, {
                        length: Y
                    } = o; K < Y; K++) {
                    let te = o[K];
                    B[te] = ja(u, te, A.config)
                } else if (A && M && D !== void 0 && q !== void 0) {
                    let K = (S - D) / q,
                        Y = A.config.easing,
                        te = sy(Y, K, f);
                    for (let V = 0, {
                            length: R
                        } = o; V < R; V++) {
                        let y = o[V],
                            L = ja(u, y, A.config),
                            Z = (ja(u, y, M.config) - L) * te + L;
                        B[y] = Z
                    }
                }
            return (0, gt.merge)(e, {
                position: S,
                current: B
            })
        }, DD = (e, t) => {
            let {
                active: r,
                origin: n,
                start: i,
                immediate: o,
                renderType: a,
                verbose: s,
                actionItem: u,
                destination: f,
                destinationKeys: g,
                pluginDuration: p,
                instanceDelay: m,
                customEasingFn: E,
                skipMotion: T
            } = e, O = u.config.easing, {
                duration: F,
                delay: S
            } = u.config;
            p != null && (F = p), S = m ? ? S, a === ND ? F = 0 : (o || T) && (F = S = 0);
            let {
                now: P
            } = t.payload;
            if (r && n) {
                let A = P - (i + S);
                if (s) {
                    let K = P - i,
                        Y = F + S,
                        te = ci(Math.min(Math.max(0, K / Y), 1));
                    e = (0, gt.set)(e, "verboseTimeElapsed", Y * te)
                }
                if (A < 0) return e;
                let M = ci(Math.min(Math.max(0, A / F), 1)),
                    D = sy(O, M, E),
                    q = {},
                    B = null;
                return g.length && (B = g.reduce((K, Y) => {
                    let te = f[Y],
                        V = parseFloat(n[Y]) || 0,
                        y = (parseFloat(te) - V) * D + V;
                    return K[Y] = y, K
                }, {})), q.current = B, q.position = M, M === 1 && (q.active = !1, q.complete = !0), (0, gt.merge)(e, q)
            }
            return e
        }, uy = (e = Object.freeze({}), t) => {
            switch (t.type) {
                case wD:
                    return t.payload.ixInstances || Object.freeze({});
                case xD:
                    return Object.freeze({});
                case AD:
                    {
                        let {
                            instanceId: r,
                            elementId: n,
                            actionItem: i,
                            eventId: o,
                            eventTarget: a,
                            eventStateKey: s,
                            actionListId: u,
                            groupIndex: f,
                            isCarrier: g,
                            origin: p,
                            destination: m,
                            immediate: E,
                            verbose: T,
                            continuous: O,
                            parameterId: F,
                            actionGroups: S,
                            smoothing: P,
                            restingValue: A,
                            pluginInstance: M,
                            pluginDuration: D,
                            instanceDelay: q,
                            skipMotion: B,
                            skipToValue: K
                        } = t.payload,
                        {
                            actionTypeId: Y
                        } = i,
                        te = PD(Y),
                        V = qD(te, Y),
                        R = Object.keys(m).filter(L => m[L] != null && typeof m[L] != "string"),
                        {
                            easing: y
                        } = i.config;
                        return (0, gt.set)(e, r, {
                            id: r,
                            elementId: n,
                            active: !1,
                            position: 0,
                            start: 0,
                            origin: p,
                            destination: m,
                            destinationKeys: R,
                            immediate: E,
                            verbose: T,
                            current: null,
                            actionItem: i,
                            actionTypeId: Y,
                            eventId: o,
                            eventTarget: a,
                            eventStateKey: s,
                            actionListId: u,
                            groupIndex: f,
                            renderType: te,
                            isCarrier: g,
                            styleProp: V,
                            continuous: O,
                            parameterId: F,
                            actionGroups: S,
                            smoothing: P,
                            restingValue: A,
                            pluginInstance: M,
                            pluginDuration: D,
                            instanceDelay: q,
                            skipMotion: B,
                            skipToValue: K,
                            customEasingFn: Array.isArray(y) && y.length === 4 ? LD(y) : void 0
                        })
                    }
                case SD:
                    {
                        let {
                            instanceId: r,
                            time: n
                        } = t.payload;
                        return (0, gt.mergeIn)(e, [r], {
                            active: !0,
                            complete: !1,
                            start: n
                        })
                    }
                case CD:
                    {
                        let {
                            instanceId: r
                        } = t.payload;
                        if (!e[r]) return e;
                        let n = {},
                            i = Object.keys(e),
                            {
                                length: o
                            } = i;
                        for (let a = 0; a < o; a++) {
                            let s = i[a];
                            s !== r && (n[s] = e[s])
                        }
                        return n
                    }
                case RD:
                    {
                        let r = e,
                            n = Object.keys(e),
                            {
                                length: i
                            } = n;
                        for (let o = 0; o < i; o++) {
                            let a = n[o],
                                s = e[a],
                                u = s.continuous ? MD : DD;
                            r = (0, gt.set)(r, a, u(s, t))
                        }
                        return r
                    }
                default:
                    return e
            }
        }
    });
    var FD, GD, kD, ly, fy = ge(() => {
        "use strict";
        Ue();
        ({
            IX2_RAW_DATA_IMPORTED: FD,
            IX2_SESSION_STOPPED: GD,
            IX2_PARAMETER_CHANGED: kD
        } = Ie), ly = (e = {}, t) => {
            switch (t.type) {
                case FD:
                    return t.payload.ixParameters || {};
                case GD:
                    return {};
                case kD:
                    {
                        let {
                            key: r,
                            value: n
                        } = t.payload;
                        return e[r] = n,
                        e
                    }
                default:
                    return e
            }
        }
    });
    var vy = {};
    Fe(vy, {
        default: () => VD
    });
    var dy, py, UD, VD, hy = ge(() => {
        "use strict";
        dy = le(Xo());
        Af();
        Kf();
        Qf();
        py = le(kt());
        cy();
        fy();
        ({
            ixElements: UD
        } = py.IX2ElementsReducer), VD = (0, dy.combineReducers)({
            ixData: xf,
            ixRequest: zf,
            ixSession: $f,
            ixElements: UD,
            ixInstances: uy,
            ixParameters: ly
        })
    });
    var yy = c((kB, gy) => {
        var WD = Tt(),
            HD = we(),
            XD = pt(),
            BD = "[object String]";

        function jD(e) {
            return typeof e == "string" || !HD(e) && XD(e) && WD(e) == BD
        }
        gy.exports = jD
    });
    var Ey = c((UB, my) => {
        var zD = ma(),
            KD = zD("length");
        my.exports = KD
    });
    var by = c((VB, _y) => {
        var YD = "\\ud800-\\udfff",
            $D = "\\u0300-\\u036f",
            QD = "\\ufe20-\\ufe2f",
            ZD = "\\u20d0-\\u20ff",
            JD = $D + QD + ZD,
            eF = "\\ufe0e\\ufe0f",
            tF = "\\u200d",
            rF = RegExp("[" + tF + YD + JD + eF + "]");

        function nF(e) {
            return rF.test(e)
        }
        _y.exports = nF
    });
    var Ry = c((WB, Cy) => {
        var Iy = "\\ud800-\\udfff",
            iF = "\\u0300-\\u036f",
            oF = "\\ufe20-\\ufe2f",
            aF = "\\u20d0-\\u20ff",
            sF = iF + oF + aF,
            uF = "\\ufe0e\\ufe0f",
            cF = "[" + Iy + "]",
            za = "[" + sF + "]",
            Ka = "\\ud83c[\\udffb-\\udfff]",
            lF = "(?:" + za + "|" + Ka + ")",
            Oy = "[^" + Iy + "]",
            wy = "(?:\\ud83c[\\udde6-\\uddff]){2}",
            xy = "[\\ud800-\\udbff][\\udc00-\\udfff]",
            fF = "\\u200d",
            Ay = lF + "?",
            Sy = "[" + uF + "]?",
            dF = "(?:" + fF + "(?:" + [Oy, wy, xy].join("|") + ")" + Sy + Ay + ")*",
            pF = Sy + Ay + dF,
            vF = "(?:" + [Oy + za + "?", za, wy, xy, cF].join("|") + ")",
            Ty = RegExp(Ka + "(?=" + Ka + ")|" + vF + pF, "g");

        function hF(e) {
            for (var t = Ty.lastIndex = 0; Ty.test(e);) ++t;
            return t
        }
        Cy.exports = hF
    });
    var Ny = c((HB, Ly) => {
        var gF = Ey(),
            yF = by(),
            mF = Ry();

        function EF(e) {
            return yF(e) ? mF(e) : gF(e)
        }
        Ly.exports = EF
    });
    var qy = c((XB, Py) => {
        var _F = Wn(),
            bF = Hn(),
            TF = qt(),
            IF = yy(),
            OF = Ny(),
            wF = "[object Map]",
            xF = "[object Set]";

        function AF(e) {
            if (e == null) return 0;
            if (TF(e)) return IF(e) ? OF(e) : e.length;
            var t = bF(e);
            return t == wF || t == xF ? e.size : _F(e).length
        }
        Py.exports = AF
    });
    var Dy = c((BB, My) => {
        var SF = "Expected a function";

        function CF(e) {
            if (typeof e != "function") throw new TypeError(SF);
            return function() {
                var t = arguments;
                switch (t.length) {
                    case 0:
                        return !e.call(this);
                    case 1:
                        return !e.call(this, t[0]);
                    case 2:
                        return !e.call(this, t[0], t[1]);
                    case 3:
                        return !e.call(this, t[0], t[1], t[2])
                }
                return !e.apply(this, t)
            }
        }
        My.exports = CF
    });
    var Ya = c((jB, Fy) => {
        var RF = It(),
            LF = function() {
                try {
                    var e = RF(Object, "defineProperty");
                    return e({}, "", {}), e
                } catch {}
            }();
        Fy.exports = LF
    });
    var $a = c((zB, ky) => {
        var Gy = Ya();

        function NF(e, t, r) {
            t == "__proto__" && Gy ? Gy(e, t, {
                configurable: !0,
                enumerable: !0,
                value: r,
                writable: !0
            }) : e[t] = r
        }
        ky.exports = NF
    });
    var Vy = c((KB, Uy) => {
        var PF = $a(),
            qF = Nn(),
            MF = Object.prototype,
            DF = MF.hasOwnProperty;

        function FF(e, t, r) {
            var n = e[t];
            (!(DF.call(e, t) && qF(n, r)) || r === void 0 && !(t in e)) && PF(e, t, r)
        }
        Uy.exports = FF
    });
    var Xy = c((YB, Hy) => {
        var GF = Vy(),
            kF = Wr(),
            UF = Gn(),
            Wy = st(),
            VF = nr();

        function WF(e, t, r, n) {
            if (!Wy(e)) return e;
            t = kF(t, e);
            for (var i = -1, o = t.length, a = o - 1, s = e; s != null && ++i < o;) {
                var u = VF(t[i]),
                    f = r;
                if (u === "__proto__" || u === "constructor" || u === "prototype") return e;
                if (i != a) {
                    var g = s[u];
                    f = n ? n(g, u, s) : void 0, f === void 0 && (f = Wy(g) ? g : UF(t[i + 1]) ? [] : {})
                }
                GF(s, u, f), s = s[u]
            }
            return e
        }
        Hy.exports = WF
    });
    var jy = c(($B, By) => {
        var HF = jn(),
            XF = Xy(),
            BF = Wr();

        function jF(e, t, r) {
            for (var n = -1, i = t.length, o = {}; ++n < i;) {
                var a = t[n],
                    s = HF(e, a);
                r(s, a) && XF(o, BF(a, e), s)
            }
            return o
        }
        By.exports = jF
    });
    var Ky = c((QB, zy) => {
        var zF = Dn(),
            KF = Lo(),
            YF = na(),
            $F = ra(),
            QF = Object.getOwnPropertySymbols,
            ZF = QF ? function(e) {
                for (var t = []; e;) zF(t, YF(e)), e = KF(e);
                return t
            } : $F;
        zy.exports = ZF
    });
    var $y = c((ZB, Yy) => {
        function JF(e) {
            var t = [];
            if (e != null)
                for (var r in Object(e)) t.push(r);
            return t
        }
        Yy.exports = JF
    });
    var Zy = c((JB, Qy) => {
        var e2 = st(),
            t2 = Vn(),
            r2 = $y(),
            n2 = Object.prototype,
            i2 = n2.hasOwnProperty;

        function o2(e) {
            if (!e2(e)) return r2(e);
            var t = t2(e),
                r = [];
            for (var n in e) n == "constructor" && (t || !i2.call(e, n)) || r.push(n);
            return r
        }
        Qy.exports = o2
    });
    var em = c((ej, Jy) => {
        var a2 = oa(),
            s2 = Zy(),
            u2 = qt();

        function c2(e) {
            return u2(e) ? a2(e, !0) : s2(e)
        }
        Jy.exports = c2
    });
    var rm = c((tj, tm) => {
        var l2 = ta(),
            f2 = Ky(),
            d2 = em();

        function p2(e) {
            return l2(e, d2, f2)
        }
        tm.exports = p2
    });
    var im = c((rj, nm) => {
        var v2 = ya(),
            h2 = Ot(),
            g2 = jy(),
            y2 = rm();

        function m2(e, t) {
            if (e == null) return {};
            var r = v2(y2(e), function(n) {
                return [n]
            });
            return t = h2(t), g2(e, r, function(n, i) {
                return t(n, i[0])
            })
        }
        nm.exports = m2
    });
    var am = c((nj, om) => {
        var E2 = Ot(),
            _2 = Dy(),
            b2 = im();

        function T2(e, t) {
            return b2(e, _2(E2(t)))
        }
        om.exports = T2
    });
    var um = c((ij, sm) => {
        var I2 = Wn(),
            O2 = Hn(),
            w2 = Dr(),
            x2 = we(),
            A2 = qt(),
            S2 = Fn(),
            C2 = Vn(),
            R2 = Un(),
            L2 = "[object Map]",
            N2 = "[object Set]",
            P2 = Object.prototype,
            q2 = P2.hasOwnProperty;

        function M2(e) {
            if (e == null) return !0;
            if (A2(e) && (x2(e) || typeof e == "string" || typeof e.splice == "function" || S2(e) || R2(e) || w2(e))) return !e.length;
            var t = O2(e);
            if (t == L2 || t == N2) return !e.size;
            if (C2(e)) return !I2(e).length;
            for (var r in e)
                if (q2.call(e, r)) return !1;
            return !0
        }
        sm.exports = M2
    });
    var lm = c((oj, cm) => {
        var D2 = $a(),
            F2 = Fa(),
            G2 = Ot();

        function k2(e, t) {
            var r = {};
            return t = G2(t, 3), F2(e, function(n, i, o) {
                D2(r, i, t(n, i, o))
            }), r
        }
        cm.exports = k2
    });
    var dm = c((aj, fm) => {
        function U2(e, t) {
            for (var r = -1, n = e == null ? 0 : e.length; ++r < n && t(e[r], r, e) !== !1;);
            return e
        }
        fm.exports = U2
    });
    var vm = c((sj, pm) => {
        var V2 = Kn();

        function W2(e) {
            return typeof e == "function" ? e : V2
        }
        pm.exports = W2
    });
    var gm = c((uj, hm) => {
        var H2 = dm(),
            X2 = Ga(),
            B2 = vm(),
            j2 = we();

        function z2(e, t) {
            var r = j2(e) ? H2 : X2;
            return r(e, B2(t))
        }
        hm.exports = z2
    });
    var mm = c((cj, ym) => {
        var K2 = Qe(),
            Y2 = function() {
                return K2.Date.now()
            };
        ym.exports = Y2
    });
    var bm = c((lj, _m) => {
        var $2 = st(),
            Qa = mm(),
            Em = Yn(),
            Q2 = "Expected a function",
            Z2 = Math.max,
            J2 = Math.min;

        function eG(e, t, r) {
            var n, i, o, a, s, u, f = 0,
                g = !1,
                p = !1,
                m = !0;
            if (typeof e != "function") throw new TypeError(Q2);
            t = Em(t) || 0, $2(r) && (g = !!r.leading, p = "maxWait" in r, o = p ? Z2(Em(r.maxWait) || 0, t) : o, m = "trailing" in r ? !!r.trailing : m);

            function E(q) {
                var B = n,
                    K = i;
                return n = i = void 0, f = q, a = e.apply(K, B), a
            }

            function T(q) {
                return f = q, s = setTimeout(S, t), g ? E(q) : a
            }

            function O(q) {
                var B = q - u,
                    K = q - f,
                    Y = t - B;
                return p ? J2(Y, o - K) : Y
            }

            function F(q) {
                var B = q - u,
                    K = q - f;
                return u === void 0 || B >= t || B < 0 || p && K >= o
            }

            function S() {
                var q = Qa();
                if (F(q)) return P(q);
                s = setTimeout(S, O(q))
            }

            function P(q) {
                return s = void 0, m && n ? E(q) : (n = i = void 0, a)
            }

            function A() {
                s !== void 0 && clearTimeout(s), f = 0, n = u = i = s = void 0
            }

            function M() {
                return s === void 0 ? a : P(Qa())
            }

            function D() {
                var q = Qa(),
                    B = F(q);
                if (n = arguments, i = this, u = q, B) {
                    if (s === void 0) return T(u);
                    if (p) return clearTimeout(s), s = setTimeout(S, t), E(u)
                }
                return s === void 0 && (s = setTimeout(S, t)), a
            }
            return D.cancel = A, D.flush = M, D
        }
        _m.exports = eG
    });
    var Im = c((fj, Tm) => {
        var tG = bm(),
            rG = st(),
            nG = "Expected a function";

        function iG(e, t, r) {
            var n = !0,
                i = !0;
            if (typeof e != "function") throw new TypeError(nG);
            return rG(r) && (n = "leading" in r ? !!r.leading : n, i = "trailing" in r ? !!r.trailing : i), tG(e, t, {
                leading: n,
                maxWait: t,
                trailing: i
            })
        }
        Tm.exports = iG
    });
    var wm = {};
    Fe(wm, {
        actionListPlaybackChanged: () => hr,
        animationFrameChanged: () => di,
        clearRequested: () => CG,
        elementStateChanged: () => os,
        eventListenerAdded: () => fi,
        eventStateChanged: () => rs,
        instanceAdded: () => ns,
        instanceRemoved: () => is,
        instanceStarted: () => pi,
        mediaQueriesDefined: () => ss,
        parameterChanged: () => vr,
        playbackRequested: () => AG,
        previewRequested: () => xG,
        rawDataImported: () => Za,
        sessionInitialized: () => Ja,
        sessionStarted: () => es,
        sessionStopped: () => ts,
        stopRequested: () => SG,
        testFrameRendered: () => RG,
        viewportWidthChanged: () => as
    });
    var Om, oG, aG, sG, uG, cG, lG, fG, dG, pG, vG, hG, gG, yG, mG, EG, _G, bG, TG, IG, OG, wG, Za, Ja, es, ts, xG, AG, SG, CG, fi, RG, rs, di, vr, ns, pi, is, os, hr, as, ss, vi = ge(() => {
        "use strict";
        Ue();
        Om = le(kt()), {
            IX2_RAW_DATA_IMPORTED: oG,
            IX2_SESSION_INITIALIZED: aG,
            IX2_SESSION_STARTED: sG,
            IX2_SESSION_STOPPED: uG,
            IX2_PREVIEW_REQUESTED: cG,
            IX2_PLAYBACK_REQUESTED: lG,
            IX2_STOP_REQUESTED: fG,
            IX2_CLEAR_REQUESTED: dG,
            IX2_EVENT_LISTENER_ADDED: pG,
            IX2_TEST_FRAME_RENDERED: vG,
            IX2_EVENT_STATE_CHANGED: hG,
            IX2_ANIMATION_FRAME_CHANGED: gG,
            IX2_PARAMETER_CHANGED: yG,
            IX2_INSTANCE_ADDED: mG,
            IX2_INSTANCE_STARTED: EG,
            IX2_INSTANCE_REMOVED: _G,
            IX2_ELEMENT_STATE_CHANGED: bG,
            IX2_ACTION_LIST_PLAYBACK_CHANGED: TG,
            IX2_VIEWPORT_WIDTH_CHANGED: IG,
            IX2_MEDIA_QUERIES_DEFINED: OG
        } = Ie, {
            reifyState: wG
        } = Om.IX2VanillaUtils, Za = e => ({
            type: oG,
            payload: { ...wG(e)
            }
        }), Ja = ({
            hasBoundaryNodes: e,
            reducedMotion: t
        }) => ({
            type: aG,
            payload: {
                hasBoundaryNodes: e,
                reducedMotion: t
            }
        }), es = () => ({
            type: sG
        }), ts = () => ({
            type: uG
        }), xG = ({
            rawData: e,
            defer: t
        }) => ({
            type: cG,
            payload: {
                defer: t,
                rawData: e
            }
        }), AG = ({
            actionTypeId: e = ke.GENERAL_START_ACTION,
            actionListId: t,
            actionItemId: r,
            eventId: n,
            allowEvents: i,
            immediate: o,
            testManual: a,
            verbose: s,
            rawData: u
        }) => ({
            type: lG,
            payload: {
                actionTypeId: e,
                actionListId: t,
                actionItemId: r,
                testManual: a,
                eventId: n,
                allowEvents: i,
                immediate: o,
                verbose: s,
                rawData: u
            }
        }), SG = e => ({
            type: fG,
            payload: {
                actionListId: e
            }
        }), CG = () => ({
            type: dG
        }), fi = (e, t) => ({
            type: pG,
            payload: {
                target: e,
                listenerParams: t
            }
        }), RG = (e = 1) => ({
            type: vG,
            payload: {
                step: e
            }
        }), rs = (e, t) => ({
            type: hG,
            payload: {
                stateKey: e,
                newState: t
            }
        }), di = (e, t) => ({
            type: gG,
            payload: {
                now: e,
                parameters: t
            }
        }), vr = (e, t) => ({
            type: yG,
            payload: {
                key: e,
                value: t
            }
        }), ns = e => ({
            type: mG,
            payload: { ...e
            }
        }), pi = (e, t) => ({
            type: EG,
            payload: {
                instanceId: e,
                time: t
            }
        }), is = e => ({
            type: _G,
            payload: {
                instanceId: e
            }
        }), os = (e, t, r, n) => ({
            type: bG,
            payload: {
                elementId: e,
                actionTypeId: t,
                current: r,
                actionItem: n
            }
        }), hr = ({
            actionListId: e,
            isPlaying: t
        }) => ({
            type: TG,
            payload: {
                actionListId: e,
                isPlaying: t
            }
        }), as = ({
            width: e,
            mediaQueries: t
        }) => ({
            type: IG,
            payload: {
                width: e,
                mediaQueries: t
            }
        }), ss = () => ({
            type: OG
        })
    });
    var qe = {};
    Fe(qe, {
        elementContains: () => ls,
        getChildElements: () => UG,
        getClosestElement: () => Jr,
        getProperty: () => MG,
        getQuerySelector: () => cs,
        getRefType: () => fs,
        getSiblingElements: () => VG,
        getStyle: () => qG,
        getValidDocument: () => FG,
        isSiblingNode: () => kG,
        matchSelector: () => DG,
        queryDocument: () => GG,
        setStyle: () => PG
    });

    function PG(e, t, r) {
        e.style[t] = r
    }

    function qG(e, t) {
        return e.style[t]
    }

    function MG(e, t) {
        return e[t]
    }

    function DG(e) {
        return t => t[us](e)
    }

    function cs({
        id: e,
        selector: t
    }) {
        if (e) {
            let r = e;
            if (e.indexOf(xm) !== -1) {
                let n = e.split(xm),
                    i = n[0];
                if (r = n[1], i !== document.documentElement.getAttribute(Sm)) return null
            }
            return `[data-w-id="${r}"], [data-w-id^="${r}_instance"]`
        }
        return t
    }

    function FG(e) {
        return e == null || e === document.documentElement.getAttribute(Sm) ? document : null
    }

    function GG(e, t) {
        return Array.prototype.slice.call(document.querySelectorAll(t ? e + " " + t : e))
    }

    function ls(e, t) {
        return e.contains(t)
    }

    function kG(e, t) {
        return e !== t && e.parentNode === t.parentNode
    }

    function UG(e) {
        let t = [];
        for (let r = 0, {
                length: n
            } = e || []; r < n; r++) {
            let {
                children: i
            } = e[r], {
                length: o
            } = i;
            if (o)
                for (let a = 0; a < o; a++) t.push(i[a])
        }
        return t
    }

    function VG(e = []) {
        let t = [],
            r = [];
        for (let n = 0, {
                length: i
            } = e; n < i; n++) {
            let {
                parentNode: o
            } = e[n];
            if (!o || !o.children || !o.children.length || r.indexOf(o) !== -1) continue;
            r.push(o);
            let a = o.firstElementChild;
            for (; a != null;) e.indexOf(a) === -1 && t.push(a), a = a.nextElementSibling
        }
        return t
    }

    function fs(e) {
        return e != null && typeof e == "object" ? e instanceof Element ? LG : NG : null
    }
    var Am, us, xm, LG, NG, Sm, Jr, Cm = ge(() => {
        "use strict";
        Am = le(kt());
        Ue();
        ({
            ELEMENT_MATCHES: us
        } = Am.IX2BrowserSupport), {
            IX2_ID_DELIMITER: xm,
            HTML_ELEMENT: LG,
            PLAIN_OBJECT: NG,
            WF_PAGE: Sm
        } = Ce;
        Jr = Element.prototype.closest ? (e, t) => document.documentElement.contains(e) ? e.closest(t) : null : (e, t) => {
            if (!document.documentElement.contains(e)) return null;
            let r = e;
            do {
                if (r[us] && r[us](t)) return r;
                r = r.parentNode
            } while (r != null);
            return null
        }
    });
    var ds = c((vj, Lm) => {
        var WG = st(),
            Rm = Object.create,
            HG = function() {
                function e() {}
                return function(t) {
                    if (!WG(t)) return {};
                    if (Rm) return Rm(t);
                    e.prototype = t;
                    var r = new e;
                    return e.prototype = void 0, r
                }
            }();
        Lm.exports = HG
    });
    var hi = c((hj, Nm) => {
        function XG() {}
        Nm.exports = XG
    });
    var yi = c((gj, Pm) => {
        var BG = ds(),
            jG = hi();

        function gi(e, t) {
            this.__wrapped__ = e, this.__actions__ = [], this.__chain__ = !!t, this.__index__ = 0, this.__values__ = void 0
        }
        gi.prototype = BG(jG.prototype);
        gi.prototype.constructor = gi;
        Pm.exports = gi
    });
    var Fm = c((yj, Dm) => {
        var qm = jt(),
            zG = Dr(),
            KG = we(),
            Mm = qm ? qm.isConcatSpreadable : void 0;

        function YG(e) {
            return KG(e) || zG(e) || !!(Mm && e && e[Mm])
        }
        Dm.exports = YG
    });
    var Um = c((mj, km) => {
        var $G = Dn(),
            QG = Fm();

        function Gm(e, t, r, n, i) {
            var o = -1,
                a = e.length;
            for (r || (r = QG), i || (i = []); ++o < a;) {
                var s = e[o];
                t > 0 && r(s) ? t > 1 ? Gm(s, t - 1, r, n, i) : $G(i, s) : n || (i[i.length] = s)
            }
            return i
        }
        km.exports = Gm
    });
    var Wm = c((Ej, Vm) => {
        var ZG = Um();

        function JG(e) {
            var t = e == null ? 0 : e.length;
            return t ? ZG(e, 1) : []
        }
        Vm.exports = JG
    });
    var Xm = c((_j, Hm) => {
        function ek(e, t, r) {
            switch (r.length) {
                case 0:
                    return e.call(t);
                case 1:
                    return e.call(t, r[0]);
                case 2:
                    return e.call(t, r[0], r[1]);
                case 3:
                    return e.call(t, r[0], r[1], r[2])
            }
            return e.apply(t, r)
        }
        Hm.exports = ek
    });
    var zm = c((bj, jm) => {
        var tk = Xm(),
            Bm = Math.max;

        function rk(e, t, r) {
            return t = Bm(t === void 0 ? e.length - 1 : t, 0),
                function() {
                    for (var n = arguments, i = -1, o = Bm(n.length - t, 0), a = Array(o); ++i < o;) a[i] = n[t + i];
                    i = -1;
                    for (var s = Array(t + 1); ++i < t;) s[i] = n[i];
                    return s[t] = r(a), tk(e, this, s)
                }
        }
        jm.exports = rk
    });
    var Ym = c((Tj, Km) => {
        function nk(e) {
            return function() {
                return e
            }
        }
        Km.exports = nk
    });
    var Zm = c((Ij, Qm) => {
        var ik = Ym(),
            $m = Ya(),
            ok = Kn(),
            ak = $m ? function(e, t) {
                return $m(e, "toString", {
                    configurable: !0,
                    enumerable: !1,
                    value: ik(t),
                    writable: !0
                })
            } : ok;
        Qm.exports = ak
    });
    var eE = c((Oj, Jm) => {
        var sk = 800,
            uk = 16,
            ck = Date.now;

        function lk(e) {
            var t = 0,
                r = 0;
            return function() {
                var n = ck(),
                    i = uk - (n - r);
                if (r = n, i > 0) {
                    if (++t >= sk) return arguments[0]
                } else t = 0;
                return e.apply(void 0, arguments)
            }
        }
        Jm.exports = lk
    });
    var rE = c((wj, tE) => {
        var fk = Zm(),
            dk = eE(),
            pk = dk(fk);
        tE.exports = pk
    });
    var iE = c((xj, nE) => {
        var vk = Wm(),
            hk = zm(),
            gk = rE();

        function yk(e) {
            return gk(hk(e, void 0, vk), e + "")
        }
        nE.exports = yk
    });
    var sE = c((Aj, aE) => {
        var oE = aa(),
            mk = oE && new oE;
        aE.exports = mk
    });
    var cE = c((Sj, uE) => {
        function Ek() {}
        uE.exports = Ek
    });
    var ps = c((Cj, fE) => {
        var lE = sE(),
            _k = cE(),
            bk = lE ? function(e) {
                return lE.get(e)
            } : _k;
        fE.exports = bk
    });
    var pE = c((Rj, dE) => {
        var Tk = {};
        dE.exports = Tk
    });
    var vs = c((Lj, hE) => {
        var vE = pE(),
            Ik = Object.prototype,
            Ok = Ik.hasOwnProperty;

        function wk(e) {
            for (var t = e.name + "", r = vE[t], n = Ok.call(vE, t) ? r.length : 0; n--;) {
                var i = r[n],
                    o = i.func;
                if (o == null || o == e) return i.name
            }
            return t
        }
        hE.exports = wk
    });
    var Ei = c((Nj, gE) => {
        var xk = ds(),
            Ak = hi(),
            Sk = 4294967295;

        function mi(e) {
            this.__wrapped__ = e, this.__actions__ = [], this.__dir__ = 1, this.__filtered__ = !1, this.__iteratees__ = [], this.__takeCount__ = Sk, this.__views__ = []
        }
        mi.prototype = xk(Ak.prototype);
        mi.prototype.constructor = mi;
        gE.exports = mi
    });
    var mE = c((Pj, yE) => {
        function Ck(e, t) {
            var r = -1,
                n = e.length;
            for (t || (t = Array(n)); ++r < n;) t[r] = e[r];
            return t
        }
        yE.exports = Ck
    });
    var _E = c((qj, EE) => {
        var Rk = Ei(),
            Lk = yi(),
            Nk = mE();

        function Pk(e) {
            if (e instanceof Rk) return e.clone();
            var t = new Lk(e.__wrapped__, e.__chain__);
            return t.__actions__ = Nk(e.__actions__), t.__index__ = e.__index__, t.__values__ = e.__values__, t
        }
        EE.exports = Pk
    });
    var IE = c((Mj, TE) => {
        var qk = Ei(),
            bE = yi(),
            Mk = hi(),
            Dk = we(),
            Fk = pt(),
            Gk = _E(),
            kk = Object.prototype,
            Uk = kk.hasOwnProperty;

        function _i(e) {
            if (Fk(e) && !Dk(e) && !(e instanceof qk)) {
                if (e instanceof bE) return e;
                if (Uk.call(e, "__wrapped__")) return Gk(e)
            }
            return new bE(e)
        }
        _i.prototype = Mk.prototype;
        _i.prototype.constructor = _i;
        TE.exports = _i
    });
    var wE = c((Dj, OE) => {
        var Vk = Ei(),
            Wk = ps(),
            Hk = vs(),
            Xk = IE();

        function Bk(e) {
            var t = Hk(e),
                r = Xk[t];
            if (typeof r != "function" || !(t in Vk.prototype)) return !1;
            if (e === r) return !0;
            var n = Wk(r);
            return !!n && e === n[0]
        }
        OE.exports = Bk
    });
    var CE = c((Fj, SE) => {
        var xE = yi(),
            jk = iE(),
            zk = ps(),
            hs = vs(),
            Kk = we(),
            AE = wE(),
            Yk = "Expected a function",
            $k = 8,
            Qk = 32,
            Zk = 128,
            Jk = 256;

        function eU(e) {
            return jk(function(t) {
                var r = t.length,
                    n = r,
                    i = xE.prototype.thru;
                for (e && t.reverse(); n--;) {
                    var o = t[n];
                    if (typeof o != "function") throw new TypeError(Yk);
                    if (i && !a && hs(o) == "wrapper") var a = new xE([], !0)
                }
                for (n = a ? n : r; ++n < r;) {
                    o = t[n];
                    var s = hs(o),
                        u = s == "wrapper" ? zk(o) : void 0;
                    u && AE(u[0]) && u[1] == (Zk | $k | Qk | Jk) && !u[4].length && u[9] == 1 ? a = a[hs(u[0])].apply(a, u[3]) : a = o.length == 1 && AE(o) ? a[s]() : a.thru(o)
                }
                return function() {
                    var f = arguments,
                        g = f[0];
                    if (a && f.length == 1 && Kk(g)) return a.plant(g).value();
                    for (var p = 0, m = r ? t[p].apply(this, f) : g; ++p < r;) m = t[p].call(this, m);
                    return m
                }
            })
        }
        SE.exports = eU
    });
    var LE = c((Gj, RE) => {
        var tU = CE(),
            rU = tU();
        RE.exports = rU
    });
    var PE = c((kj, NE) => {
        function nU(e, t, r) {
            return e === e && (r !== void 0 && (e = e <= r ? e : r), t !== void 0 && (e = e >= t ? e : t)), e
        }
        NE.exports = nU
    });
    var ME = c((Uj, qE) => {
        var iU = PE(),
            gs = Yn();

        function oU(e, t, r) {
            return r === void 0 && (r = t, t = void 0), r !== void 0 && (r = gs(r), r = r === r ? r : 0), t !== void 0 && (t = gs(t), t = t === t ? t : 0), iU(gs(e), t, r)
        }
        qE.exports = oU
    });
    var XE, BE, jE, zE, aU, sU, uU, cU, lU, fU, dU, pU, vU, hU, gU, yU, mU, EU, _U, KE, YE, bU, TU, IU, $E, OU, wU, QE, xU, ys, ZE, DE, FE, JE, tn, AU, lt, e_, SU, We, et, rn, t_, ms, GE, Es, CU, en, RU, LU, NU, r_, kE, PU, UE, qU, MU, DU, VE, bi, Ti, WE, HE, n_, i_ = ge(() => {
        "use strict";
        XE = le(LE()), BE = le(zn()), jE = le(ME());
        Ue();
        _s();
        vi();
        zE = le(kt()), {
            MOUSE_CLICK: aU,
            MOUSE_SECOND_CLICK: sU,
            MOUSE_DOWN: uU,
            MOUSE_UP: cU,
            MOUSE_OVER: lU,
            MOUSE_OUT: fU,
            DROPDOWN_CLOSE: dU,
            DROPDOWN_OPEN: pU,
            SLIDER_ACTIVE: vU,
            SLIDER_INACTIVE: hU,
            TAB_ACTIVE: gU,
            TAB_INACTIVE: yU,
            NAVBAR_CLOSE: mU,
            NAVBAR_OPEN: EU,
            MOUSE_MOVE: _U,
            PAGE_SCROLL_DOWN: KE,
            SCROLL_INTO_VIEW: YE,
            SCROLL_OUT_OF_VIEW: bU,
            PAGE_SCROLL_UP: TU,
            SCROLLING_IN_VIEW: IU,
            PAGE_FINISH: $E,
            ECOMMERCE_CART_CLOSE: OU,
            ECOMMERCE_CART_OPEN: wU,
            PAGE_START: QE,
            PAGE_SCROLL: xU
        } = Ze, ys = "COMPONENT_ACTIVE", ZE = "COMPONENT_INACTIVE", {
            COLON_DELIMITER: DE
        } = Ce, {
            getNamespacedParameterId: FE
        } = zE.IX2VanillaUtils, JE = e => t => typeof t == "object" && e(t) ? !0 : t, tn = JE(({
            element: e,
            nativeEvent: t
        }) => e === t.target), AU = JE(({
            element: e,
            nativeEvent: t
        }) => e.contains(t.target)), lt = (0, XE.default)([tn, AU]), e_ = (e, t) => {
            if (t) {
                let {
                    ixData: r
                } = e.getState(), {
                    events: n
                } = r, i = n[t];
                if (i && !CU[i.eventTypeId]) return i
            }
            return null
        }, SU = ({
            store: e,
            event: t
        }) => {
            let {
                action: r
            } = t, {
                autoStopEventId: n
            } = r.config;
            return !!e_(e, n)
        }, We = ({
            store: e,
            event: t,
            element: r,
            eventStateKey: n
        }, i) => {
            let {
                action: o,
                id: a
            } = t, {
                actionListId: s,
                autoStopEventId: u
            } = o.config, f = e_(e, u);
            return f && gr({
                store: e,
                eventId: u,
                eventTarget: r,
                eventStateKey: u + DE + n.split(DE)[1],
                actionListId: (0, BE.default)(f, "action.config.actionListId")
            }), gr({
                store: e,
                eventId: a,
                eventTarget: r,
                eventStateKey: n,
                actionListId: s
            }), nn({
                store: e,
                eventId: a,
                eventTarget: r,
                eventStateKey: n,
                actionListId: s
            }), i
        }, et = (e, t) => (r, n) => e(r, n) === !0 ? t(r, n) : n, rn = {
            handler: et(lt, We)
        }, t_ = { ...rn,
            types: [ys, ZE].join(" ")
        }, ms = [{
            target: window,
            types: "resize orientationchange",
            throttle: !0
        }, {
            target: document,
            types: "scroll wheel readystatechange IX2_PAGE_UPDATE",
            throttle: !0
        }], GE = "mouseover mouseout", Es = {
            types: ms
        }, CU = {
            PAGE_START: QE,
            PAGE_FINISH: $E
        }, en = (() => {
            let e = window.pageXOffset !== void 0,
                r = document.compatMode === "CSS1Compat" ? document.documentElement : document.body;
            return () => ({
                scrollLeft: e ? window.pageXOffset : r.scrollLeft,
                scrollTop: e ? window.pageYOffset : r.scrollTop,
                stiffScrollTop: (0, jE.default)(e ? window.pageYOffset : r.scrollTop, 0, r.scrollHeight - window.innerHeight),
                scrollWidth: r.scrollWidth,
                scrollHeight: r.scrollHeight,
                clientWidth: r.clientWidth,
                clientHeight: r.clientHeight,
                innerWidth: window.innerWidth,
                innerHeight: window.innerHeight
            })
        })(), RU = (e, t) => !(e.left > t.right || e.right < t.left || e.top > t.bottom || e.bottom < t.top), LU = ({
            element: e,
            nativeEvent: t
        }) => {
            let {
                type: r,
                target: n,
                relatedTarget: i
            } = t, o = e.contains(n);
            if (r === "mouseover" && o) return !0;
            let a = e.contains(i);
            return !!(r === "mouseout" && o && a)
        }, NU = e => {
            let {
                element: t,
                event: {
                    config: r
                }
            } = e, {
                clientWidth: n,
                clientHeight: i
            } = en(), o = r.scrollOffsetValue, u = r.scrollOffsetUnit === "PX" ? o : i * (o || 0) / 100;
            return RU(t.getBoundingClientRect(), {
                left: 0,
                top: u,
                right: n,
                bottom: i - u
            })
        }, r_ = e => (t, r) => {
            let {
                type: n
            } = t.nativeEvent, i = [ys, ZE].indexOf(n) !== -1 ? n === ys : r.isActive, o = { ...r,
                isActive: i
            };
            return (!r || o.isActive !== r.isActive) && e(t, o) || o
        }, kE = e => (t, r) => {
            let n = {
                elementHovered: LU(t)
            };
            return (r ? n.elementHovered !== r.elementHovered : n.elementHovered) && e(t, n) || n
        }, PU = e => (t, r) => {
            let n = { ...r,
                elementVisible: NU(t)
            };
            return (r ? n.elementVisible !== r.elementVisible : n.elementVisible) && e(t, n) || n
        }, UE = e => (t, r = {}) => {
            let {
                stiffScrollTop: n,
                scrollHeight: i,
                innerHeight: o
            } = en(), {
                event: {
                    config: a,
                    eventTypeId: s
                }
            } = t, {
                scrollOffsetValue: u,
                scrollOffsetUnit: f
            } = a, g = f === "PX", p = i - o, m = Number((n / p).toFixed(2));
            if (r && r.percentTop === m) return r;
            let E = (g ? u : o * (u || 0) / 100) / p,
                T, O, F = 0;
            r && (T = m > r.percentTop, O = r.scrollingDown !== T, F = O ? m : r.anchorTop);
            let S = s === KE ? m >= F + E : m <= F - E,
                P = { ...r,
                    percentTop: m,
                    inBounds: S,
                    anchorTop: F,
                    scrollingDown: T
                };
            return r && S && (O || P.inBounds !== r.inBounds) && e(t, P) || P
        }, qU = (e, t) => e.left > t.left && e.left < t.right && e.top > t.top && e.top < t.bottom, MU = e => (t, r) => {
            let n = {
                finished: document.readyState === "complete"
            };
            return n.finished && !(r && r.finshed) && e(t), n
        }, DU = e => (t, r) => {
            let n = {
                started: !0
            };
            return r || e(t), n
        }, VE = e => (t, r = {
            clickCount: 0
        }) => {
            let n = {
                clickCount: r.clickCount % 2 + 1
            };
            return n.clickCount !== r.clickCount && e(t, n) || n
        }, bi = (e = !0) => ({ ...t_,
            handler: et(e ? lt : tn, r_((t, r) => r.isActive ? rn.handler(t, r) : r))
        }), Ti = (e = !0) => ({ ...t_,
            handler: et(e ? lt : tn, r_((t, r) => r.isActive ? r : rn.handler(t, r)))
        }), WE = { ...Es,
            handler: PU((e, t) => {
                let {
                    elementVisible: r
                } = t, {
                    event: n,
                    store: i
                } = e, {
                    ixData: o
                } = i.getState(), {
                    events: a
                } = o;
                return !a[n.action.config.autoStopEventId] && t.triggered ? t : n.eventTypeId === YE === r ? (We(e), { ...t,
                    triggered: !0
                }) : t
            })
        }, HE = .05, n_ = {
            [vU]: bi(),
            [hU]: Ti(),
            [pU]: bi(),
            [dU]: Ti(),
            [EU]: bi(!1),
            [mU]: Ti(!1),
            [gU]: bi(),
            [yU]: Ti(),
            [wU]: {
                types: "ecommerce-cart-open",
                handler: et(lt, We)
            },
            [OU]: {
                types: "ecommerce-cart-close",
                handler: et(lt, We)
            },
            [aU]: {
                types: "click",
                handler: et(lt, VE((e, {
                    clickCount: t
                }) => {
                    SU(e) ? t === 1 && We(e) : We(e)
                }))
            },
            [sU]: {
                types: "click",
                handler: et(lt, VE((e, {
                    clickCount: t
                }) => {
                    t === 2 && We(e)
                }))
            },
            [uU]: { ...rn,
                types: "mousedown"
            },
            [cU]: { ...rn,
                types: "mouseup"
            },
            [lU]: {
                types: GE,
                handler: et(lt, kE((e, t) => {
                    t.elementHovered && We(e)
                }))
            },
            [fU]: {
                types: GE,
                handler: et(lt, kE((e, t) => {
                    t.elementHovered || We(e)
                }))
            },
            [_U]: {
                types: "mousemove mouseout scroll",
                handler: ({
                    store: e,
                    element: t,
                    eventConfig: r,
                    nativeEvent: n,
                    eventStateKey: i
                }, o = {
                    clientX: 0,
                    clientY: 0,
                    pageX: 0,
                    pageY: 0
                }) => {
                    let {
                        basedOn: a,
                        selectedAxis: s,
                        continuousParameterGroupId: u,
                        reverse: f,
                        restingState: g = 0
                    } = r, {
                        clientX: p = o.clientX,
                        clientY: m = o.clientY,
                        pageX: E = o.pageX,
                        pageY: T = o.pageY
                    } = n, O = s === "X_AXIS", F = n.type === "mouseout", S = g / 100, P = u, A = !1;
                    switch (a) {
                        case at.VIEWPORT:
                            {
                                S = O ? Math.min(p, window.innerWidth) / window.innerWidth : Math.min(m, window.innerHeight) / window.innerHeight;
                                break
                            }
                        case at.PAGE:
                            {
                                let {
                                    scrollLeft: M,
                                    scrollTop: D,
                                    scrollWidth: q,
                                    scrollHeight: B
                                } = en();S = O ? Math.min(M + E, q) / q : Math.min(D + T, B) / B;
                                break
                            }
                        case at.ELEMENT:
                        default:
                            {
                                P = FE(i, u);
                                let M = n.type.indexOf("mouse") === 0;
                                if (M && lt({
                                        element: t,
                                        nativeEvent: n
                                    }) !== !0) break;
                                let D = t.getBoundingClientRect(),
                                    {
                                        left: q,
                                        top: B,
                                        width: K,
                                        height: Y
                                    } = D;
                                if (!M && !qU({
                                        left: p,
                                        top: m
                                    }, D)) break;A = !0,
                                S = O ? (p - q) / K : (m - B) / Y;
                                break
                            }
                    }
                    return F && (S > 1 - HE || S < HE) && (S = Math.round(S)), (a !== at.ELEMENT || A || A !== o.elementHovered) && (S = f ? 1 - S : S, e.dispatch(vr(P, S))), {
                        elementHovered: A,
                        clientX: p,
                        clientY: m,
                        pageX: E,
                        pageY: T
                    }
                }
            },
            [xU]: {
                types: ms,
                handler: ({
                    store: e,
                    eventConfig: t
                }) => {
                    let {
                        continuousParameterGroupId: r,
                        reverse: n
                    } = t, {
                        scrollTop: i,
                        scrollHeight: o,
                        clientHeight: a
                    } = en(), s = i / (o - a);
                    s = n ? 1 - s : s, e.dispatch(vr(r, s))
                }
            },
            [IU]: {
                types: ms,
                handler: ({
                    element: e,
                    store: t,
                    eventConfig: r,
                    eventStateKey: n
                }, i = {
                    scrollPercent: 0
                }) => {
                    let {
                        scrollLeft: o,
                        scrollTop: a,
                        scrollWidth: s,
                        scrollHeight: u,
                        clientHeight: f
                    } = en(), {
                        basedOn: g,
                        selectedAxis: p,
                        continuousParameterGroupId: m,
                        startsEntering: E,
                        startsExiting: T,
                        addEndOffset: O,
                        addStartOffset: F,
                        addOffsetValue: S = 0,
                        endOffsetValue: P = 0
                    } = r, A = p === "X_AXIS";
                    if (g === at.VIEWPORT) {
                        let M = A ? o / s : a / u;
                        return M !== i.scrollPercent && t.dispatch(vr(m, M)), {
                            scrollPercent: M
                        }
                    } else {
                        let M = FE(n, m),
                            D = e.getBoundingClientRect(),
                            q = (F ? S : 0) / 100,
                            B = (O ? P : 0) / 100;
                        q = E ? q : 1 - q, B = T ? B : 1 - B;
                        let K = D.top + Math.min(D.height * q, f),
                            te = D.top + D.height * B - K,
                            V = Math.min(f + te, u),
                            y = Math.min(Math.max(0, f - K), V) / V;
                        return y !== i.scrollPercent && t.dispatch(vr(M, y)), {
                            scrollPercent: y
                        }
                    }
                }
            },
            [YE]: WE,
            [bU]: WE,
            [KE]: { ...Es,
                handler: UE((e, t) => {
                    t.scrollingDown && We(e)
                })
            },
            [TU]: { ...Es,
                handler: UE((e, t) => {
                    t.scrollingDown || We(e)
                })
            },
            [$E]: {
                types: "readystatechange IX2_PAGE_UPDATE",
                handler: et(tn, MU(We))
            },
            [QE]: {
                types: "readystatechange IX2_PAGE_UPDATE",
                handler: et(tn, DU(We))
            }
        }
    });
    var b_ = {};
    Fe(b_, {
        observeRequests: () => rV,
        startActionGroup: () => nn,
        startEngine: () => Si,
        stopActionGroup: () => gr,
        stopAllActionGroups: () => m_,
        stopEngine: () => Ci
    });

    function rV(e) {
        Ut({
            store: e,
            select: ({
                ixRequest: t
            }) => t.preview,
            onChange: oV
        }), Ut({
            store: e,
            select: ({
                ixRequest: t
            }) => t.playback,
            onChange: aV
        }), Ut({
            store: e,
            select: ({
                ixRequest: t
            }) => t.stop,
            onChange: sV
        }), Ut({
            store: e,
            select: ({
                ixRequest: t
            }) => t.clear,
            onChange: uV
        })
    }

    function nV(e) {
        Ut({
            store: e,
            select: ({
                ixSession: t
            }) => t.mediaQueryKey,
            onChange: () => {
                Ci(e), v_({
                    store: e,
                    elementApi: qe
                }), Si({
                    store: e,
                    allowEvents: !0
                }), h_()
            }
        })
    }

    function iV(e, t) {
        let r = Ut({
            store: e,
            select: ({
                ixSession: n
            }) => n.tick,
            onChange: n => {
                t(n), r()
            }
        })
    }

    function oV({
        rawData: e,
        defer: t
    }, r) {
        let n = () => {
            Si({
                store: r,
                rawData: e,
                allowEvents: !0
            }), h_()
        };
        t ? setTimeout(n, 0) : n()
    }

    function h_() {
        document.dispatchEvent(new CustomEvent("IX2_PAGE_UPDATE"))
    }

    function aV(e, t) {
        let {
            actionTypeId: r,
            actionListId: n,
            actionItemId: i,
            eventId: o,
            allowEvents: a,
            immediate: s,
            testManual: u,
            verbose: f = !0
        } = e, {
            rawData: g
        } = e;
        if (n && i && g && s) {
            let p = g.actionLists[n];
            p && (g = BU({
                actionList: p,
                actionItemId: i,
                rawData: g
            }))
        }
        if (Si({
                store: t,
                rawData: g,
                allowEvents: a,
                testManual: u
            }), n && r === ke.GENERAL_START_ACTION || bs(r)) {
            gr({
                store: t,
                actionListId: n
            }), y_({
                store: t,
                actionListId: n,
                eventId: o
            });
            let p = nn({
                store: t,
                eventId: o,
                actionListId: n,
                immediate: s,
                verbose: f
            });
            f && p && t.dispatch(hr({
                actionListId: n,
                isPlaying: !s
            }))
        }
    }

    function sV({
        actionListId: e
    }, t) {
        e ? gr({
            store: t,
            actionListId: e
        }) : m_({
            store: t
        }), Ci(t)
    }

    function uV(e, t) {
        Ci(t), v_({
            store: t,
            elementApi: qe
        })
    }

    function Si({
        store: e,
        rawData: t,
        allowEvents: r,
        testManual: n
    }) {
        let {
            ixSession: i
        } = e.getState();
        t && e.dispatch(Za(t)), i.active || (e.dispatch(Ja({
            hasBoundaryNodes: !!document.querySelector(Oi),
            reducedMotion: document.body.hasAttribute("data-wf-ix-vacation") && window.matchMedia("(prefers-reduced-motion)").matches
        })), r && (vV(e), cV(), e.getState().ixSession.hasDefinedMediaQueries && nV(e)), e.dispatch(es()), lV(e, n))
    }

    function cV() {
        let {
            documentElement: e
        } = document;
        e.className.indexOf(o_) === -1 && (e.className += ` ${o_}`)
    }

    function lV(e, t) {
        let r = n => {
            let {
                ixSession: i,
                ixParameters: o
            } = e.getState();
            i.active && (e.dispatch(di(n, o)), t ? iV(e, r) : requestAnimationFrame(r))
        };
        r(window.performance.now())
    }

    function Ci(e) {
        let {
            ixSession: t
        } = e.getState();
        if (t.active) {
            let {
                eventListeners: r
            } = t;
            r.forEach(fV), YU(), e.dispatch(ts())
        }
    }

    function fV({
        target: e,
        listenerParams: t
    }) {
        e.removeEventListener.apply(e, t)
    }

    function dV({
        store: e,
        eventStateKey: t,
        eventTarget: r,
        eventId: n,
        eventConfig: i,
        actionListId: o,
        parameterGroup: a,
        smoothing: s,
        restingValue: u
    }) {
        let {
            ixData: f,
            ixSession: g
        } = e.getState(), {
            events: p
        } = f, m = p[n], {
            eventTypeId: E
        } = m, T = {}, O = {}, F = [], {
            continuousActionGroups: S
        } = a, {
            id: P
        } = a;
        jU(E, i) && (P = zU(t, P));
        let A = g.hasBoundaryNodes && r ? Jr(r, Oi) : null;
        S.forEach(M => {
            let {
                keyframe: D,
                actionItems: q
            } = M;
            q.forEach(B => {
                let {
                    actionTypeId: K
                } = B, {
                    target: Y
                } = B.config;
                if (!Y) return;
                let te = Y.boundaryMode ? A : null,
                    V = $U(Y) + Ts + K;
                if (O[V] = pV(O[V], D, B), !T[V]) {
                    T[V] = !0;
                    let {
                        config: R
                    } = B;
                    wi({
                        config: R,
                        event: m,
                        eventTarget: r,
                        elementRoot: te,
                        elementApi: qe
                    }).forEach(y => {
                        F.push({
                            element: y,
                            key: V
                        })
                    })
                }
            })
        }), F.forEach(({
            element: M,
            key: D
        }) => {
            let q = O[D],
                B = (0, yt.default)(q, "[0].actionItems[0]", {}),
                {
                    actionTypeId: K
                } = B,
                Y = Ai(K) ? Os(K)(M, B) : null,
                te = Is({
                    element: M,
                    actionItem: B,
                    elementApi: qe
                }, Y);
            ws({
                store: e,
                element: M,
                eventId: n,
                actionListId: o,
                actionItem: B,
                destination: te,
                continuous: !0,
                parameterId: P,
                actionGroups: q,
                smoothing: s,
                restingValue: u,
                pluginInstance: Y
            })
        })
    }

    function pV(e = [], t, r) {
        let n = [...e],
            i;
        return n.some((o, a) => o.keyframe === t ? (i = a, !0) : !1), i == null && (i = n.length, n.push({
            keyframe: t,
            actionItems: []
        })), n[i].actionItems.push(r), n
    }

    function vV(e) {
        let {
            ixData: t
        } = e.getState(), {
            eventTypeMap: r
        } = t;
        g_(e), (0, yr.default)(r, (i, o) => {
            let a = n_[o];
            if (!a) {
                console.warn(`IX2 event type not configured: ${o}`);
                return
            }
            _V({
                logic: a,
                store: e,
                events: i
            })
        });
        let {
            ixSession: n
        } = e.getState();
        n.eventListeners.length && gV(e)
    }

    function gV(e) {
        let t = () => {
            g_(e)
        };
        hV.forEach(r => {
            window.addEventListener(r, t), e.dispatch(fi(window, [r, t]))
        }), t()
    }

    function g_(e) {
        let {
            ixSession: t,
            ixData: r
        } = e.getState(), n = window.innerWidth;
        if (n !== t.viewportWidth) {
            let {
                mediaQueries: i
            } = r;
            e.dispatch(as({
                width: n,
                mediaQueries: i
            }))
        }
    }

    function _V({
        logic: e,
        store: t,
        events: r
    }) {
        bV(r);
        let {
            types: n,
            handler: i
        } = e, {
            ixData: o
        } = t.getState(), {
            actionLists: a
        } = o, s = yV(r, EV);
        if (!(0, u_.default)(s)) return;
        (0, yr.default)(s, (p, m) => {
            let E = r[m],
                {
                    action: T,
                    id: O,
                    mediaQueries: F = o.mediaQueryKeys
                } = E,
                {
                    actionListId: S
                } = T.config;
            QU(F, o.mediaQueryKeys) || t.dispatch(ss()), T.actionTypeId === ke.GENERAL_CONTINUOUS_ACTION && (Array.isArray(E.config) ? E.config : [E.config]).forEach(A => {
                let {
                    continuousParameterGroupId: M
                } = A, D = (0, yt.default)(a, `${S}.continuousParameterGroups`, []), q = (0, s_.default)(D, ({
                    id: Y
                }) => Y === M), B = (A.smoothing || 0) / 100, K = (A.restingState || 0) / 100;
                q && p.forEach((Y, te) => {
                    let V = O + Ts + te;
                    dV({
                        store: t,
                        eventStateKey: V,
                        eventTarget: Y,
                        eventId: O,
                        eventConfig: A,
                        actionListId: S,
                        parameterGroup: q,
                        smoothing: B,
                        restingValue: K
                    })
                })
            }), (T.actionTypeId === ke.GENERAL_START_ACTION || bs(T.actionTypeId)) && y_({
                store: t,
                actionListId: S,
                eventId: O
            })
        });
        let u = p => {
                let {
                    ixSession: m
                } = t.getState();
                mV(s, (E, T, O) => {
                    let F = r[T],
                        S = m.eventState[O],
                        {
                            action: P,
                            mediaQueries: A = o.mediaQueryKeys
                        } = F;
                    if (!xi(A, m.mediaQueryKey)) return;
                    let M = (D = {}) => {
                        let q = i({
                            store: t,
                            element: E,
                            event: F,
                            eventConfig: D,
                            nativeEvent: p,
                            eventStateKey: O
                        }, S);
                        ZU(q, S) || t.dispatch(rs(O, q))
                    };
                    P.actionTypeId === ke.GENERAL_CONTINUOUS_ACTION ? (Array.isArray(F.config) ? F.config : [F.config]).forEach(M) : M()
                })
            },
            f = (0, d_.default)(u, tV),
            g = ({
                target: p = document,
                types: m,
                throttle: E
            }) => {
                m.split(" ").filter(Boolean).forEach(T => {
                    let O = E ? f : u;
                    p.addEventListener(T, O), t.dispatch(fi(p, [T, O]))
                })
            };
        Array.isArray(n) ? n.forEach(g) : typeof n == "string" && g(e)
    }

    function bV(e) {
        if (!eV) return;
        let t = {},
            r = "";
        for (let n in e) {
            let {
                eventTypeId: i,
                target: o
            } = e[n], a = cs(o);
            t[a] || (i === Ze.MOUSE_CLICK || i === Ze.MOUSE_SECOND_CLICK) && (t[a] = !0, r += a + "{cursor: pointer;touch-action: manipulation;}")
        }
        if (r) {
            let n = document.createElement("style");
            n.textContent = r, document.body.appendChild(n)
        }
    }

    function y_({
        store: e,
        actionListId: t,
        eventId: r
    }) {
        let {
            ixData: n,
            ixSession: i
        } = e.getState(), {
            actionLists: o,
            events: a
        } = n, s = a[r], u = o[t];
        if (u && u.useFirstGroupAsInitialState) {
            let f = (0, yt.default)(u, "actionItemGroups[0].actionItems", []),
                g = (0, yt.default)(s, "mediaQueries", n.mediaQueryKeys);
            if (!xi(g, i.mediaQueryKey)) return;
            f.forEach(p => {
                let {
                    config: m,
                    actionTypeId: E
                } = p, T = m ? .target ? .useEventTarget === !0 && m ? .target ? .objectId == null ? {
                    target: s.target,
                    targets: s.targets
                } : m, O = wi({
                    config: T,
                    event: s,
                    elementApi: qe
                }), F = Ai(E);
                O.forEach(S => {
                    let P = F ? Os(E)(S, p) : null;
                    ws({
                        destination: Is({
                            element: S,
                            actionItem: p,
                            elementApi: qe
                        }, P),
                        immediate: !0,
                        store: e,
                        element: S,
                        eventId: r,
                        actionItem: p,
                        actionListId: t,
                        pluginInstance: P
                    })
                })
            })
        }
    }

    function m_({
        store: e
    }) {
        let {
            ixInstances: t
        } = e.getState();
        (0, yr.default)(t, r => {
            if (!r.continuous) {
                let {
                    actionListId: n,
                    verbose: i
                } = r;
                xs(r, e), i && e.dispatch(hr({
                    actionListId: n,
                    isPlaying: !1
                }))
            }
        })
    }

    function gr({
        store: e,
        eventId: t,
        eventTarget: r,
        eventStateKey: n,
        actionListId: i
    }) {
        let {
            ixInstances: o,
            ixSession: a
        } = e.getState(), s = a.hasBoundaryNodes && r ? Jr(r, Oi) : null;
        (0, yr.default)(o, u => {
            let f = (0, yt.default)(u, "actionItem.config.target.boundaryMode"),
                g = n ? u.eventStateKey === n : !0;
            if (u.actionListId === i && u.eventId === t && g) {
                if (s && f && !ls(s, u.element)) return;
                xs(u, e), u.verbose && e.dispatch(hr({
                    actionListId: i,
                    isPlaying: !1
                }))
            }
        })
    }

    function nn({
        store: e,
        eventId: t,
        eventTarget: r,
        eventStateKey: n,
        actionListId: i,
        groupIndex: o = 0,
        immediate: a,
        verbose: s
    }) {
        let {
            ixData: u,
            ixSession: f
        } = e.getState(), {
            events: g
        } = u, p = g[t] || {}, {
            mediaQueries: m = u.mediaQueryKeys
        } = p, E = (0, yt.default)(u, `actionLists.${i}`, {}), {
            actionItemGroups: T,
            useFirstGroupAsInitialState: O
        } = E;
        if (!T || !T.length) return !1;
        o >= T.length && (0, yt.default)(p, "config.loop") && (o = 0), o === 0 && O && o++;
        let S = (o === 0 || o === 1 && O) && bs(p.action ? .actionTypeId) ? p.config.delay : void 0,
            P = (0, yt.default)(T, [o, "actionItems"], []);
        if (!P.length || !xi(m, f.mediaQueryKey)) return !1;
        let A = f.hasBoundaryNodes && r ? Jr(r, Oi) : null,
            M = WU(P),
            D = !1;
        return P.forEach((q, B) => {
            let {
                config: K,
                actionTypeId: Y
            } = q, te = Ai(Y), {
                target: V
            } = K;
            if (!V) return;
            let R = V.boundaryMode ? A : null;
            wi({
                config: K,
                event: p,
                eventTarget: r,
                elementRoot: R,
                elementApi: qe
            }).forEach((L, G) => {
                let U = te ? Os(Y)(L, q) : null,
                    Z = te ? JU(Y)(L, q) : null;
                D = !0;
                let re = M === B && G === 0,
                    k = HU({
                        element: L,
                        actionItem: q
                    }),
                    H = Is({
                        element: L,
                        actionItem: q,
                        elementApi: qe
                    }, U);
                ws({
                    store: e,
                    element: L,
                    actionItem: q,
                    eventId: t,
                    eventTarget: r,
                    eventStateKey: n,
                    actionListId: i,
                    groupIndex: o,
                    isCarrier: re,
                    computedStyle: k,
                    destination: H,
                    immediate: a,
                    verbose: s,
                    pluginInstance: U,
                    pluginDuration: Z,
                    instanceDelay: S
                })
            })
        }), D
    }

    function ws(e) {
        let {
            store: t,
            computedStyle: r,
            ...n
        } = e, {
            element: i,
            actionItem: o,
            immediate: a,
            pluginInstance: s,
            continuous: u,
            restingValue: f,
            eventId: g
        } = n, p = !u, m = UU(), {
            ixElements: E,
            ixSession: T,
            ixData: O
        } = t.getState(), F = kU(E, i), {
            refState: S
        } = E[F] || {}, P = fs(i), A = T.reducedMotion && zo[o.actionTypeId], M;
        if (A && u) switch (O.events[g] ? .eventTypeId) {
            case Ze.MOUSE_MOVE:
            case Ze.MOUSE_MOVE_IN_VIEWPORT:
                M = f;
                break;
            default:
                M = .5;
                break
        }
        let D = XU(i, S, r, o, qe, s);
        if (t.dispatch(ns({
                instanceId: m,
                elementId: F,
                origin: D,
                refType: P,
                skipMotion: A,
                skipToValue: M,
                ...n
            })), E_(document.body, "ix2-animation-started", m), a) {
            TV(t, m);
            return
        }
        Ut({
            store: t,
            select: ({
                ixInstances: q
            }) => q[m],
            onChange: __
        }), p && t.dispatch(pi(m, T.tick))
    }

    function xs(e, t) {
        E_(document.body, "ix2-animation-stopping", {
            instanceId: e.id,
            state: t.getState()
        });
        let {
            elementId: r,
            actionItem: n
        } = e, {
            ixElements: i
        } = t.getState(), {
            ref: o,
            refType: a
        } = i[r] || {};
        a === p_ && KU(o, n, qe), t.dispatch(is(e.id))
    }

    function E_(e, t, r) {
        let n = document.createEvent("CustomEvent");
        n.initCustomEvent(t, !0, !0, r), e.dispatchEvent(n)
    }

    function TV(e, t) {
        let {
            ixParameters: r
        } = e.getState();
        e.dispatch(pi(t, 0)), e.dispatch(di(performance.now(), r));
        let {
            ixInstances: n
        } = e.getState();
        __(n[t], e)
    }

    function __(e, t) {
        let {
            active: r,
            continuous: n,
            complete: i,
            elementId: o,
            actionItem: a,
            actionTypeId: s,
            renderType: u,
            current: f,
            groupIndex: g,
            eventId: p,
            eventTarget: m,
            eventStateKey: E,
            actionListId: T,
            isCarrier: O,
            styleProp: F,
            verbose: S,
            pluginInstance: P
        } = e, {
            ixData: A,
            ixSession: M
        } = t.getState(), {
            events: D
        } = A, q = D[p] || {}, {
            mediaQueries: B = A.mediaQueryKeys
        } = q;
        if (xi(B, M.mediaQueryKey) && (n || r || i)) {
            if (f || u === GU && i) {
                t.dispatch(os(o, s, f, a));
                let {
                    ixElements: K
                } = t.getState(), {
                    ref: Y,
                    refType: te,
                    refState: V
                } = K[o] || {}, R = V && V[s];
                (te === p_ || Ai(s)) && VU(Y, V, R, p, a, F, qe, u, P)
            }
            if (i) {
                if (O) {
                    let K = nn({
                        store: t,
                        eventId: p,
                        eventTarget: m,
                        eventStateKey: E,
                        actionListId: T,
                        groupIndex: g + 1,
                        verbose: S
                    });
                    S && !K && t.dispatch(hr({
                        actionListId: T,
                        isPlaying: !1
                    }))
                }
                xs(e, t)
            }
        }
    }
    var s_, yt, u_, c_, l_, f_, yr, d_, Ii, FU, bs, Ts, Oi, p_, GU, o_, wi, kU, Is, Ut, UU, VU, v_, WU, HU, XU, BU, jU, zU, xi, KU, YU, $U, QU, ZU, Ai, Os, JU, a_, eV, tV, hV, yV, mV, EV, _s = ge(() => {
        "use strict";
        s_ = le(Ta()), yt = le(zn()), u_ = le(qy()), c_ = le(am()), l_ = le(um()), f_ = le(lm()), yr = le(gm()), d_ = le(Im());
        Ue();
        Ii = le(kt());
        vi();
        Cm();
        i_();
        FU = Object.keys(wn), bs = e => FU.includes(e), {
            COLON_DELIMITER: Ts,
            BOUNDARY_SELECTOR: Oi,
            HTML_ELEMENT: p_,
            RENDER_GENERAL: GU,
            W_MOD_IX: o_
        } = Ce, {
            getAffectedElements: wi,
            getElementId: kU,
            getDestinationValues: Is,
            observeStore: Ut,
            getInstanceId: UU,
            renderHTMLElement: VU,
            clearAllStyles: v_,
            getMaxDurationItemIndex: WU,
            getComputedStyle: HU,
            getInstanceOrigin: XU,
            reduceListToGroup: BU,
            shouldNamespaceEventParameter: jU,
            getNamespacedParameterId: zU,
            shouldAllowMediaQuery: xi,
            cleanupHTMLElement: KU,
            clearObjectCache: YU,
            stringifyTarget: $U,
            mediaQueriesEqual: QU,
            shallowEqual: ZU
        } = Ii.IX2VanillaUtils, {
            isPluginType: Ai,
            createPluginInstance: Os,
            getPluginDuration: JU
        } = Ii.IX2VanillaPlugins, a_ = navigator.userAgent, eV = a_.match(/iPad/i) || a_.match(/iPhone/), tV = 12;
        hV = ["resize", "orientationchange"];
        yV = (e, t) => (0, c_.default)((0, f_.default)(e, t), l_.default), mV = (e, t) => {
            (0, yr.default)(e, (r, n) => {
                r.forEach((i, o) => {
                    let a = n + Ts + o;
                    t(i, n, a)
                })
            })
        }, EV = e => {
            let t = {
                target: e.target,
                targets: e.targets
            };
            return wi({
                config: t,
                elementApi: qe
            })
        }
    });
    var I_ = c(mt => {
        "use strict";
        var IV = dn().default,
            OV = ou().default;
        Object.defineProperty(mt, "__esModule", {
            value: !0
        });
        mt.actions = void 0;
        mt.destroy = T_;
        mt.init = CV;
        mt.setEnv = SV;
        mt.store = void 0;
        Xl();
        var wV = Xo(),
            xV = OV((hy(), rt(vy))),
            As = (_s(), rt(b_)),
            AV = IV((vi(), rt(wm)));
        mt.actions = AV;
        var Ss = mt.store = (0, wV.createStore)(xV.default);

        function SV(e) {
            e() && (0, As.observeRequests)(Ss)
        }

        function CV(e) {
            T_(), (0, As.startEngine)({
                store: Ss,
                rawData: e,
                allowEvents: !0
            })
        }

        function T_() {
            (0, As.stopEngine)(Ss)
        }
    });
    var A_ = c((Yj, x_) => {
        "use strict";
        var O_ = Ge(),
            w_ = I_();
        w_.setEnv(O_.env);
        O_.define("ix2", x_.exports = function() {
            return w_
        })
    });
    var C_ = c(($j, S_) => {
        "use strict";
        var mr = Ge();
        mr.define("links", S_.exports = function(e, t) {
            var r = {},
                n = e(window),
                i, o = mr.env(),
                a = window.location,
                s = document.createElement("a"),
                u = "w--current",
                f = /index\.(html|php)$/,
                g = /\/$/,
                p, m;
            r.ready = r.design = r.preview = E;

            function E() {
                i = o && mr.env("design"), m = mr.env("slug") || a.pathname || "", mr.scroll.off(O), p = [];
                for (var S = document.links, P = 0; P < S.length; ++P) T(S[P]);
                p.length && (mr.scroll.on(O), O())
            }

            function T(S) {
                if (!S.getAttribute("hreflang")) {
                    var P = i && S.getAttribute("href-disabled") || S.getAttribute("href");
                    if (s.href = P, !(P.indexOf(":") >= 0)) {
                        var A = e(S);
                        if (s.hash.length > 1 && s.host + s.pathname === a.host + a.pathname) {
                            if (!/^#[a-zA-Z0-9\-\_]+$/.test(s.hash)) return;
                            var M = e(s.hash);
                            M.length && p.push({
                                link: A,
                                sec: M,
                                active: !1
                            });
                            return
                        }
                        if (!(P === "#" || P === "")) {
                            var D = s.href === a.href || P === m || f.test(P) && g.test(m);
                            F(A, u, D)
                        }
                    }
                }
            }

            function O() {
                var S = n.scrollTop(),
                    P = n.height();
                t.each(p, function(A) {
                    if (!A.link.attr("hreflang")) {
                        var M = A.link,
                            D = A.sec,
                            q = D.offset().top,
                            B = D.outerHeight(),
                            K = P * .5,
                            Y = D.is(":visible") && q + B - K >= S && q + K <= S + P;
                        A.active !== Y && (A.active = Y, F(M, u, Y))
                    }
                })
            }

            function F(S, P, A) {
                var M = S.hasClass(P);
                A && M || !A && !M || (A ? S.addClass(P) : S.removeClass(P))
            }
            return r
        })
    });
    var L_ = c((Qj, R_) => {
        "use strict";
        var Ri = Ge();
        Ri.define("scroll", R_.exports = function(e) {
            var t = {
                    WF_CLICK_EMPTY: "click.wf-empty-link",
                    WF_CLICK_SCROLL: "click.wf-scroll"
                },
                r = window.location,
                n = T() ? null : window.history,
                i = e(window),
                o = e(document),
                a = e(document.body),
                s = window.requestAnimationFrame || window.mozRequestAnimationFrame || window.webkitRequestAnimationFrame || function(R) {
                    window.setTimeout(R, 15)
                },
                u = Ri.env("editor") ? ".w-editor-body" : "body",
                f = "header, " + u + " > .header, " + u + " > .w-nav:not([data-no-scroll])",
                g = 'a[href="#"]',
                p = 'a[href*="#"]:not(.w-tab-link):not(' + g + ")",
                m = '.wf-force-outline-none[tabindex="-1"]:focus{outline:none;}',
                E = document.createElement("style");
            E.appendChild(document.createTextNode(m));

            function T() {
                try {
                    return !!window.frameElement
                } catch {
                    return !0
                }
            }
            var O = /^#[a-zA-Z0-9][\w:.-]*$/;

            function F(R) {
                return O.test(R.hash) && R.host + R.pathname === r.host + r.pathname
            }
            let S = typeof window.matchMedia == "function" && window.matchMedia("(prefers-reduced-motion: reduce)");

            function P() {
                return document.body.getAttribute("data-wf-scroll-motion") === "none" || S.matches
            }

            function A(R, y) {
                var L;
                switch (y) {
                    case "add":
                        L = R.attr("tabindex"), L ? R.attr("data-wf-tabindex-swap", L) : R.attr("tabindex", "-1");
                        break;
                    case "remove":
                        L = R.attr("data-wf-tabindex-swap"), L ? (R.attr("tabindex", L), R.removeAttr("data-wf-tabindex-swap")) : R.removeAttr("tabindex");
                        break
                }
                R.toggleClass("wf-force-outline-none", y === "add")
            }

            function M(R) {
                var y = R.currentTarget;
                if (!(Ri.env("design") || window.$.mobile && /(?:^|\s)ui-link(?:$|\s)/.test(y.className))) {
                    var L = F(y) ? y.hash : "";
                    if (L !== "") {
                        var G = e(L);
                        G.length && (R && (R.preventDefault(), R.stopPropagation()), D(L, R), window.setTimeout(function() {
                            q(G, function() {
                                A(G, "add"), G.get(0).focus({
                                    preventScroll: !0
                                }), A(G, "remove")
                            })
                        }, R ? 0 : 300))
                    }
                }
            }

            function D(R) {
                if (r.hash !== R && n && n.pushState && !(Ri.env.chrome && r.protocol === "file:")) {
                    var y = n.state && n.state.hash;
                    y !== R && n.pushState({
                        hash: R
                    }, "", R)
                }
            }

            function q(R, y) {
                var L = i.scrollTop(),
                    G = B(R);
                if (L !== G) {
                    var U = K(R, L, G),
                        Z = Date.now(),
                        re = function() {
                            var k = Date.now() - Z;
                            window.scroll(0, Y(L, G, k, U)), k <= U ? s(re) : typeof y == "function" && y()
                        };
                    s(re)
                }
            }

            function B(R) {
                var y = e(f),
                    L = y.css("position") === "fixed" ? y.outerHeight() : 0,
                    G = R.offset().top - L;
                if (R.data("scroll") === "mid") {
                    var U = i.height() - L,
                        Z = R.outerHeight();
                    Z < U && (G -= Math.round((U - Z) / 2))
                }
                return G
            }

            function K(R, y, L) {
                if (P()) return 0;
                var G = 1;
                return a.add(R).each(function(U, Z) {
                    var re = parseFloat(Z.getAttribute("data-scroll-time"));
                    !isNaN(re) && re >= 0 && (G = re)
                }), (472.143 * Math.log(Math.abs(y - L) + 125) - 2e3) * G
            }

            function Y(R, y, L, G) {
                return L > G ? y : R + (y - R) * te(L / G)
            }

            function te(R) {
                return R < .5 ? 4 * R * R * R : (R - 1) * (2 * R - 2) * (2 * R - 2) + 1
            }

            function V() {
                var {
                    WF_CLICK_EMPTY: R,
                    WF_CLICK_SCROLL: y
                } = t;
                o.on(y, p, M), o.on(R, g, function(L) {
                    L.preventDefault()
                }), document.head.insertBefore(E, document.head.firstChild)
            }
            return {
                ready: V
            }
        })
    });
    var P_ = c((Zj, N_) => {
        "use strict";
        var RV = Ge();
        RV.define("touch", N_.exports = function(e) {
            var t = {},
                r = window.getSelection;
            e.event.special.tap = {
                bindType: "click",
                delegateType: "click"
            }, t.init = function(o) {
                return o = typeof o == "string" ? e(o).get(0) : o, o ? new n(o) : null
            };

            function n(o) {
                var a = !1,
                    s = !1,
                    u = Math.min(Math.round(window.innerWidth * .04), 40),
                    f, g;
                o.addEventListener("touchstart", p, !1), o.addEventListener("touchmove", m, !1), o.addEventListener("touchend", E, !1), o.addEventListener("touchcancel", T, !1), o.addEventListener("mousedown", p, !1), o.addEventListener("mousemove", m, !1), o.addEventListener("mouseup", E, !1), o.addEventListener("mouseout", T, !1);

                function p(F) {
                    var S = F.touches;
                    S && S.length > 1 || (a = !0, S ? (s = !0, f = S[0].clientX) : f = F.clientX, g = f)
                }

                function m(F) {
                    if (a) {
                        if (s && F.type === "mousemove") {
                            F.preventDefault(), F.stopPropagation();
                            return
                        }
                        var S = F.touches,
                            P = S ? S[0].clientX : F.clientX,
                            A = P - g;
                        g = P, Math.abs(A) > u && r && String(r()) === "" && (i("swipe", F, {
                            direction: A > 0 ? "right" : "left"
                        }), T())
                    }
                }

                function E(F) {
                    if (a && (a = !1, s && F.type === "mouseup")) {
                        F.preventDefault(), F.stopPropagation(), s = !1;
                        return
                    }
                }

                function T() {
                    a = !1
                }

                function O() {
                    o.removeEventListener("touchstart", p, !1), o.removeEventListener("touchmove", m, !1), o.removeEventListener("touchend", E, !1), o.removeEventListener("touchcancel", T, !1), o.removeEventListener("mousedown", p, !1), o.removeEventListener("mousemove", m, !1), o.removeEventListener("mouseup", E, !1), o.removeEventListener("mouseout", T, !1), o = null
                }
                this.destroy = O
            }

            function i(o, a, s) {
                var u = e.Event(o, {
                    originalEvent: a
                });
                e(a.target).trigger(u, s)
            }
            return t.instance = t.init(document), t
        })
    });
    var q_ = c(Cs => {
        "use strict";
        Object.defineProperty(Cs, "__esModule", {
            value: !0
        });
        Cs.default = LV;

        function LV(e, t, r, n, i, o, a, s, u, f, g, p, m) {
            return function(E) {
                e(E);
                var T = E.form,
                    O = {
                        name: T.attr("data-name") || T.attr("name") || "Untitled Form",
                        pageId: T.attr("data-wf-page-id") || "",
                        elementId: T.attr("data-wf-element-id") || "",
                        source: t.href,
                        test: r.env(),
                        fields: {},
                        fileUploads: {},
                        dolphin: /pass[\s-_]?(word|code)|secret|login|credentials/i.test(T.html()),
                        trackingCookies: n()
                    };
                let F = T.attr("data-wf-flow");
                F && (O.wfFlow = F), i(E);
                var S = o(T, O.fields);
                if (S) return a(S);
                if (O.fileUploads = s(T), u(E), !f) {
                    g(E);
                    return
                }
                p.ajax({
                    url: m,
                    type: "POST",
                    data: O,
                    dataType: "json",
                    crossDomain: !0
                }).done(function(P) {
                    P && P.code === 200 && (E.success = !0), g(E)
                }).fail(function() {
                    g(E)
                })
            }
        }
    });
    var D_ = c((ez, M_) => {
        "use strict";
        var Li = Ge();
        Li.define("forms", M_.exports = function(e, t) {
            var r = {},
                n = e(document),
                i, o = window.location,
                a = window.XDomainRequest && !window.atob,
                s = ".w-form",
                u, f = /e(-)?mail/i,
                g = /^\S+@\S+$/,
                p = window.alert,
                m = Li.env(),
                E, T, O, F = /list-manage[1-9]?.com/i,
                S = t.debounce(function() {
                    p("Oops! This page has improperly configured forms. Please contact your website administrator to fix this issue.")
                }, 100);
            r.ready = r.design = r.preview = function() {
                P(), !m && !E && M()
            };

            function P() {
                u = e("html").attr("data-wf-site"), T = "https://webflow.com/api/v1/form/" + u, a && T.indexOf("https://webflow.com") >= 0 && (T = T.replace("https://webflow.com", "https://formdata.webflow.com")), O = `${T}/signFile`, i = e(s + " form"), i.length && i.each(A)
            }

            function A(k, H) {
                var d = e(H),
                    _ = e.data(H, s);
                _ || (_ = e.data(H, s, {
                    form: d
                })), D(_);
                var b = d.closest("div.w-form");
                _.done = b.find("> .w-form-done"), _.fail = b.find("> .w-form-fail"), _.fileUploads = b.find(".w-file-upload"), _.fileUploads.each(function($) {
                    U($, _)
                });
                var v = _.form.attr("aria-label") || _.form.attr("data-name") || "Form";
                _.done.attr("aria-label") || _.form.attr("aria-label", v), _.done.attr("tabindex", "-1"), _.done.attr("role", "region"), _.done.attr("aria-label") || _.done.attr("aria-label", v + " success"), _.fail.attr("tabindex", "-1"), _.fail.attr("role", "region"), _.fail.attr("aria-label") || _.fail.attr("aria-label", v + " failure");
                var X = _.action = d.attr("action");
                if (_.handler = null, _.redirect = d.attr("data-redirect"), F.test(X)) {
                    _.handler = y;
                    return
                }
                if (!X) {
                    if (u) {
                        _.handler = (() => {
                            let $ = q_().default;
                            return $(D, o, Li, te, G, B, p, K, q, u, L, e, T)
                        })();
                        return
                    }
                    S()
                }
            }

            function M() {
                E = !0, n.on("submit", s + " form", function($) {
                    var J = e.data(this, s);
                    J.handler && (J.evt = $, J.handler(J))
                });
                let k = ".w-checkbox-input",
                    H = ".w-radio-input",
                    d = "w--redirected-checked",
                    _ = "w--redirected-focus",
                    b = "w--redirected-focus-visible",
                    v = ":focus-visible, [data-wf-focus-visible]",
                    X = [
                        ["checkbox", k],
                        ["radio", H]
                    ];
                n.on("change", s + ' form input[type="checkbox"]:not(' + k + ")", $ => {
                    e($.target).siblings(k).toggleClass(d)
                }), n.on("change", s + ' form input[type="radio"]', $ => {
                    e(`input[name="${$.target.name}"]:not(${k})`).map((ue, _e) => e(_e).siblings(H).removeClass(d));
                    let J = e($.target);
                    J.hasClass("w-radio-input") || J.siblings(H).addClass(d)
                }), X.forEach(([$, J]) => {
                    n.on("focus", s + ` form input[type="${$}"]:not(` + J + ")", ue => {
                        e(ue.target).siblings(J).addClass(_), e(ue.target).filter(v).siblings(J).addClass(b)
                    }), n.on("blur", s + ` form input[type="${$}"]:not(` + J + ")", ue => {
                        e(ue.target).siblings(J).removeClass(`${_} ${b}`)
                    })
                })
            }

            function D(k) {
                var H = k.btn = k.form.find(':input[type="submit"]');
                k.wait = k.btn.attr("data-wait") || null, k.success = !1, H.prop("disabled", !1), k.label && H.val(k.label)
            }

            function q(k) {
                var H = k.btn,
                    d = k.wait;
                H.prop("disabled", !0), d && (k.label = H.val(), H.val(d))
            }

            function B(k, H) {
                var d = null;
                return H = H || {}, k.find(':input:not([type="submit"]):not([type="file"])').each(function(_, b) {
                    var v = e(b),
                        X = v.attr("type"),
                        $ = v.attr("data-name") || v.attr("name") || "Field " + (_ + 1),
                        J = v.val();
                    if (X === "checkbox") J = v.is(":checked");
                    else if (X === "radio") {
                        if (H[$] === null || typeof H[$] == "string") return;
                        J = k.find('input[name="' + v.attr("name") + '"]:checked').val() || null
                    }
                    typeof J == "string" && (J = e.trim(J)), H[$] = J, d = d || V(v, X, $, J)
                }), d
            }

            function K(k) {
                var H = {};
                return k.find(':input[type="file"]').each(function(d, _) {
                    var b = e(_),
                        v = b.attr("data-name") || b.attr("name") || "File " + (d + 1),
                        X = b.attr("data-value");
                    typeof X == "string" && (X = e.trim(X)), H[v] = X
                }), H
            }
            let Y = {
                _mkto_trk: "marketo"
            };

            function te() {
                return document.cookie.split("; ").reduce(function(H, d) {
                    let _ = d.split("="),
                        b = _[0];
                    if (b in Y) {
                        let v = Y[b],
                            X = _.slice(1).join("=");
                        H[v] = X
                    }
                    return H
                }, {})
            }

            function V(k, H, d, _) {
                var b = null;
                return H === "password" ? b = "Passwords cannot be submitted." : k.attr("required") ? _ ? f.test(k.attr("type")) && (g.test(_) || (b = "Please enter a valid email address for: " + d)) : b = "Please fill out the required field: " + d : d === "g-recaptcha-response" && !_ && (b = "Please confirm you\u2019re not a robot."), b
            }

            function R(k) {
                G(k), L(k)
            }

            function y(k) {
                D(k);
                var H = k.form,
                    d = {};
                if (/^https/.test(o.href) && !/^https/.test(k.action)) {
                    H.attr("method", "post");
                    return
                }
                G(k);
                var _ = B(H, d);
                if (_) return p(_);
                q(k);
                var b;
                t.each(d, function(J, ue) {
                    f.test(ue) && (d.EMAIL = J), /^((full[ _-]?)?name)$/i.test(ue) && (b = J), /^(first[ _-]?name)$/i.test(ue) && (d.FNAME = J), /^(last[ _-]?name)$/i.test(ue) && (d.LNAME = J)
                }), b && !d.FNAME && (b = b.split(" "), d.FNAME = b[0], d.LNAME = d.LNAME || b[1]);
                var v = k.action.replace("/post?", "/post-json?") + "&c=?",
                    X = v.indexOf("u=") + 2;
                X = v.substring(X, v.indexOf("&", X));
                var $ = v.indexOf("id=") + 3;
                $ = v.substring($, v.indexOf("&", $)), d["b_" + X + "_" + $] = "", e.ajax({
                    url: v,
                    data: d,
                    dataType: "jsonp"
                }).done(function(J) {
                    k.success = J.result === "success" || /already/.test(J.msg), k.success || console.info("MailChimp error: " + J.msg), L(k)
                }).fail(function() {
                    L(k)
                })
            }

            function L(k) {
                var H = k.form,
                    d = k.redirect,
                    _ = k.success;
                if (_ && d) {
                    Li.location(d);
                    return
                }
                k.done.toggle(_), k.fail.toggle(!_), _ ? k.done.focus() : k.fail.focus(), H.toggle(!_), D(k)
            }

            function G(k) {
                k.evt && k.evt.preventDefault(), k.evt = null
            }

            function U(k, H) {
                if (!H.fileUploads || !H.fileUploads[k]) return;
                var d, _ = e(H.fileUploads[k]),
                    b = _.find("> .w-file-upload-default"),
                    v = _.find("> .w-file-upload-uploading"),
                    X = _.find("> .w-file-upload-success"),
                    $ = _.find("> .w-file-upload-error"),
                    J = b.find(".w-file-upload-input"),
                    ue = b.find(".w-file-upload-label"),
                    _e = ue.children(),
                    oe = $.find(".w-file-upload-error-msg"),
                    h = X.find(".w-file-upload-file"),
                    W = X.find(".w-file-remove-link"),
                    Q = h.find(".w-file-upload-file-name"),
                    j = oe.attr("data-w-size-error"),
                    fe = oe.attr("data-w-type-error"),
                    Me = oe.attr("data-w-generic-error");
                if (m || ue.on("click keydown", function(w) {
                        w.type === "keydown" && w.which !== 13 && w.which !== 32 || (w.preventDefault(), J.click())
                    }), ue.find(".w-icon-file-upload-icon").attr("aria-hidden", "true"), W.find(".w-icon-file-upload-remove").attr("aria-hidden", "true"), m) J.on("click", function(w) {
                    w.preventDefault()
                }), ue.on("click", function(w) {
                    w.preventDefault()
                }), _e.on("click", function(w) {
                    w.preventDefault()
                });
                else {
                    W.on("click keydown", function(w) {
                        if (w.type === "keydown") {
                            if (w.which !== 13 && w.which !== 32) return;
                            w.preventDefault()
                        }
                        J.removeAttr("data-value"), J.val(""), Q.html(""), b.toggle(!0), X.toggle(!1), ue.focus()
                    }), J.on("change", function(w) {
                        d = w.target && w.target.files && w.target.files[0], d && (b.toggle(!1), $.toggle(!1), v.toggle(!0), v.focus(), Q.text(d.name), C() || q(H), H.fileUploads[k].uploading = !0, Z(d, I))
                    });
                    var Xe = ue.outerHeight();
                    J.height(Xe), J.width(1)
                }

                function l(w) {
                    var N = w.responseJSON && w.responseJSON.msg,
                        ee = Me;
                    typeof N == "string" && N.indexOf("InvalidFileTypeError") === 0 ? ee = fe : typeof N == "string" && N.indexOf("MaxFileSizeError") === 0 && (ee = j), oe.text(ee), J.removeAttr("data-value"), J.val(""), v.toggle(!1), b.toggle(!0), $.toggle(!0), $.focus(), H.fileUploads[k].uploading = !1, C() || D(H)
                }

                function I(w, N) {
                    if (w) return l(w);
                    var ee = N.fileName,
                        ie = N.postData,
                        ve = N.fileId,
                        z = N.s3Url;
                    J.attr("data-value", ve), re(z, ie, d, ee, x)
                }

                function x(w) {
                    if (w) return l(w);
                    v.toggle(!1), X.css("display", "inline-block"), X.focus(), H.fileUploads[k].uploading = !1, C() || D(H)
                }

                function C() {
                    var w = H.fileUploads && H.fileUploads.toArray() || [];
                    return w.some(function(N) {
                        return N.uploading
                    })
                }
            }

            function Z(k, H) {
                var d = new URLSearchParams({
                    name: k.name,
                    size: k.size
                });
                e.ajax({
                    type: "GET",
                    url: `${O}?${d}`,
                    crossDomain: !0
                }).done(function(_) {
                    H(null, _)
                }).fail(function(_) {
                    H(_)
                })
            }

            function re(k, H, d, _, b) {
                var v = new FormData;
                for (var X in H) v.append(X, H[X]);
                v.append("file", d, _), e.ajax({
                    type: "POST",
                    url: k,
                    data: v,
                    processData: !1,
                    contentType: !1
                }).done(function() {
                    b(null)
                }).fail(function($) {
                    b($)
                })
            }
            return r
        })
    });
    var G_ = c((tz, F_) => {
        "use strict";
        var At = Ge(),
            NV = _r(),
            Se = {
                ARROW_LEFT: 37,
                ARROW_UP: 38,
                ARROW_RIGHT: 39,
                ARROW_DOWN: 40,
                ESCAPE: 27,
                SPACE: 32,
                ENTER: 13,
                HOME: 36,
                END: 35
            };
        At.define("navbar", F_.exports = function(e, t) {
            var r = {},
                n = e.tram,
                i = e(window),
                o = e(document),
                a = t.debounce,
                s, u, f, g, p = At.env(),
                m = '<div class="w-nav-overlay" data-wf-ignore />',
                E = ".w-nav",
                T = "w--open",
                O = "w--nav-dropdown-open",
                F = "w--nav-dropdown-toggle-open",
                S = "w--nav-dropdown-list-open",
                P = "w--nav-link-open",
                A = NV.triggers,
                M = e();
            r.ready = r.design = r.preview = D, r.destroy = function() {
                M = e(), q(), u && u.length && u.each(te)
            };

            function D() {
                f = p && At.env("design"), g = At.env("editor"), s = e(document.body), u = o.find(E), u.length && (u.each(Y), q(), B())
            }

            function q() {
                At.resize.off(K)
            }

            function B() {
                At.resize.on(K)
            }

            function K() {
                u.each(b)
            }

            function Y(h, W) {
                var Q = e(W),
                    j = e.data(W, E);
                j || (j = e.data(W, E, {
                    open: !1,
                    el: Q,
                    config: {},
                    selectedIdx: -1
                })), j.menu = Q.find(".w-nav-menu"), j.links = j.menu.find(".w-nav-link"), j.dropdowns = j.menu.find(".w-dropdown"), j.dropdownToggle = j.menu.find(".w-dropdown-toggle"), j.dropdownList = j.menu.find(".w-dropdown-list"), j.button = Q.find(".w-nav-button"), j.container = Q.find(".w-container"), j.overlayContainerId = "w-nav-overlay-" + h, j.outside = d(j);
                var fe = Q.find(".w-nav-brand");
                fe && fe.attr("href") === "/" && fe.attr("aria-label") == null && fe.attr("aria-label", "home"), j.button.attr("style", "-webkit-user-select: text;"), j.button.attr("aria-label") == null && j.button.attr("aria-label", "menu"), j.button.attr("role", "button"), j.button.attr("tabindex", "0"), j.button.attr("aria-controls", j.overlayContainerId), j.button.attr("aria-haspopup", "menu"), j.button.attr("aria-expanded", "false"), j.el.off(E), j.button.off(E), j.menu.off(E), y(j), f ? (V(j), j.el.on("setting" + E, L(j))) : (R(j), j.button.on("click" + E, k(j)), j.menu.on("click" + E, "a", H(j)), j.button.on("keydown" + E, G(j)), j.el.on("keydown" + E, U(j))), b(h, W)
            }

            function te(h, W) {
                var Q = e.data(W, E);
                Q && (V(Q), e.removeData(W, E))
            }

            function V(h) {
                h.overlay && (oe(h, !0), h.overlay.remove(), h.overlay = null)
            }

            function R(h) {
                h.overlay || (h.overlay = e(m).appendTo(h.el), h.overlay.attr("id", h.overlayContainerId), h.parent = h.menu.parent(), oe(h, !0))
            }

            function y(h) {
                var W = {},
                    Q = h.config || {},
                    j = W.animation = h.el.attr("data-animation") || "default";
                W.animOver = /^over/.test(j), W.animDirect = /left$/.test(j) ? -1 : 1, Q.animation !== j && h.open && t.defer(re, h), W.easing = h.el.attr("data-easing") || "ease", W.easing2 = h.el.attr("data-easing2") || "ease";
                var fe = h.el.attr("data-duration");
                W.duration = fe != null ? Number(fe) : 400, W.docHeight = h.el.attr("data-doc-height"), h.config = W
            }

            function L(h) {
                return function(W, Q) {
                    Q = Q || {};
                    var j = i.width();
                    y(h), Q.open === !0 && ue(h, !0), Q.open === !1 && oe(h, !0), h.open && t.defer(function() {
                        j !== i.width() && re(h)
                    })
                }
            }

            function G(h) {
                return function(W) {
                    switch (W.keyCode) {
                        case Se.SPACE:
                        case Se.ENTER:
                            return k(h)(), W.preventDefault(), W.stopPropagation();
                        case Se.ESCAPE:
                            return oe(h), W.preventDefault(), W.stopPropagation();
                        case Se.ARROW_RIGHT:
                        case Se.ARROW_DOWN:
                        case Se.HOME:
                        case Se.END:
                            return h.open ? (W.keyCode === Se.END ? h.selectedIdx = h.links.length - 1 : h.selectedIdx = 0, Z(h), W.preventDefault(), W.stopPropagation()) : (W.preventDefault(), W.stopPropagation())
                    }
                }
            }

            function U(h) {
                return function(W) {
                    if (h.open) switch (h.selectedIdx = h.links.index(document.activeElement), W.keyCode) {
                        case Se.HOME:
                        case Se.END:
                            return W.keyCode === Se.END ? h.selectedIdx = h.links.length - 1 : h.selectedIdx = 0, Z(h), W.preventDefault(), W.stopPropagation();
                        case Se.ESCAPE:
                            return oe(h), h.button.focus(), W.preventDefault(), W.stopPropagation();
                        case Se.ARROW_LEFT:
                        case Se.ARROW_UP:
                            return h.selectedIdx = Math.max(-1, h.selectedIdx - 1), Z(h), W.preventDefault(), W.stopPropagation();
                        case Se.ARROW_RIGHT:
                        case Se.ARROW_DOWN:
                            return h.selectedIdx = Math.min(h.links.length - 1, h.selectedIdx + 1), Z(h), W.preventDefault(), W.stopPropagation()
                    }
                }
            }

            function Z(h) {
                if (h.links[h.selectedIdx]) {
                    var W = h.links[h.selectedIdx];
                    W.focus(), H(W)
                }
            }

            function re(h) {
                h.open && (oe(h, !0), ue(h, !0))
            }

            function k(h) {
                return a(function() {
                    h.open ? oe(h) : ue(h)
                })
            }

            function H(h) {
                return function(W) {
                    var Q = e(this),
                        j = Q.attr("href");
                    if (!At.validClick(W.currentTarget)) {
                        W.preventDefault();
                        return
                    }
                    j && j.indexOf("#") === 0 && h.open && oe(h)
                }
            }

            function d(h) {
                return h.outside && o.off("click" + E, h.outside),
                    function(W) {
                        var Q = e(W.target);
                        g && Q.closest(".w-editor-bem-EditorOverlay").length || _(h, Q)
                    }
            }
            var _ = a(function(h, W) {
                if (h.open) {
                    var Q = W.closest(".w-nav-menu");
                    h.menu.is(Q) || oe(h)
                }
            });

            function b(h, W) {
                var Q = e.data(W, E),
                    j = Q.collapsed = Q.button.css("display") !== "none";
                if (Q.open && !j && !f && oe(Q, !0), Q.container.length) {
                    var fe = X(Q);
                    Q.links.each(fe), Q.dropdowns.each(fe)
                }
                Q.open && _e(Q)
            }
            var v = "max-width";

            function X(h) {
                var W = h.container.css(v);
                return W === "none" && (W = ""),
                    function(Q, j) {
                        j = e(j), j.css(v, ""), j.css(v) === "none" && j.css(v, W)
                    }
            }

            function $(h, W) {
                W.setAttribute("data-nav-menu-open", "")
            }

            function J(h, W) {
                W.removeAttribute("data-nav-menu-open")
            }

            function ue(h, W) {
                if (h.open) return;
                h.open = !0, h.menu.each($), h.links.addClass(P), h.dropdowns.addClass(O), h.dropdownToggle.addClass(F), h.dropdownList.addClass(S), h.button.addClass(T);
                var Q = h.config,
                    j = Q.animation;
                (j === "none" || !n.support.transform || Q.duration <= 0) && (W = !0);
                var fe = _e(h),
                    Me = h.menu.outerHeight(!0),
                    Xe = h.menu.outerWidth(!0),
                    l = h.el.height(),
                    I = h.el[0];
                if (b(0, I), A.intro(0, I), At.redraw.up(), f || o.on("click" + E, h.outside), W) {
                    w();
                    return
                }
                var x = "transform " + Q.duration + "ms " + Q.easing;
                if (h.overlay && (M = h.menu.prev(), h.overlay.show().append(h.menu)), Q.animOver) {
                    n(h.menu).add(x).set({
                        x: Q.animDirect * Xe,
                        height: fe
                    }).start({
                        x: 0
                    }).then(w), h.overlay && h.overlay.width(Xe);
                    return
                }
                var C = l + Me;
                n(h.menu).add(x).set({
                    y: -C
                }).start({
                    y: 0
                }).then(w);

                function w() {
                    h.button.attr("aria-expanded", "true")
                }
            }

            function _e(h) {
                var W = h.config,
                    Q = W.docHeight ? o.height() : s.height();
                return W.animOver ? h.menu.height(Q) : h.el.css("position") !== "fixed" && (Q -= h.el.outerHeight(!0)), h.overlay && h.overlay.height(Q), Q
            }

            function oe(h, W) {
                if (!h.open) return;
                h.open = !1, h.button.removeClass(T);
                var Q = h.config;
                if ((Q.animation === "none" || !n.support.transform || Q.duration <= 0) && (W = !0), A.outro(0, h.el[0]), o.off("click" + E, h.outside), W) {
                    n(h.menu).stop(), I();
                    return
                }
                var j = "transform " + Q.duration + "ms " + Q.easing2,
                    fe = h.menu.outerHeight(!0),
                    Me = h.menu.outerWidth(!0),
                    Xe = h.el.height();
                if (Q.animOver) {
                    n(h.menu).add(j).start({
                        x: Me * Q.animDirect
                    }).then(I);
                    return
                }
                var l = Xe + fe;
                n(h.menu).add(j).start({
                    y: -l
                }).then(I);

                function I() {
                    h.menu.height(""), n(h.menu).set({
                        x: 0,
                        y: 0
                    }), h.menu.each(J), h.links.removeClass(P), h.dropdowns.removeClass(O), h.dropdownToggle.removeClass(F), h.dropdownList.removeClass(S), h.overlay && h.overlay.children().length && (M.length ? h.menu.insertAfter(M) : h.menu.prependTo(h.parent), h.overlay.attr("style", "").hide()), h.el.triggerHandler("w-close"), h.button.attr("aria-expanded", "false")
                }
            }
            return r
        })
    });
    var V_ = c((rz, U_) => {
        "use strict";
        var St = Ge(),
            PV = _r(),
            ft = {
                ARROW_LEFT: 37,
                ARROW_UP: 38,
                ARROW_RIGHT: 39,
                ARROW_DOWN: 40,
                SPACE: 32,
                ENTER: 13,
                HOME: 36,
                END: 35
            },
            k_ = 'a[href], area[href], [role="button"], input, select, textarea, button, iframe, object, embed, *[tabindex], *[contenteditable]';
        St.define("slider", U_.exports = function(e, t) {
            var r = {},
                n = e.tram,
                i = e(document),
                o, a, s = St.env(),
                u = ".w-slider",
                f = '<div class="w-slider-dot" data-wf-ignore />',
                g = '<div aria-live="off" aria-atomic="true" class="w-slider-aria-label" data-wf-ignore />',
                p = "w-slider-force-show",
                m = PV.triggers,
                E, T = !1;
            r.ready = function() {
                a = St.env("design"), O()
            }, r.design = function() {
                a = !0, setTimeout(O, 1e3)
            }, r.preview = function() {
                a = !1, O()
            }, r.redraw = function() {
                T = !0, O(), T = !1
            }, r.destroy = F;

            function O() {
                o = i.find(u), o.length && (o.each(A), !E && (F(), S()))
            }

            function F() {
                St.resize.off(P), St.redraw.off(r.redraw)
            }

            function S() {
                St.resize.on(P), St.redraw.on(r.redraw)
            }

            function P() {
                o.filter(":visible").each(U)
            }

            function A(d, _) {
                var b = e(_),
                    v = e.data(_, u);
                v || (v = e.data(_, u, {
                    index: 0,
                    depth: 1,
                    hasFocus: {
                        keyboard: !1,
                        mouse: !1
                    },
                    el: b,
                    config: {}
                })), v.mask = b.children(".w-slider-mask"), v.left = b.children(".w-slider-arrow-left"), v.right = b.children(".w-slider-arrow-right"), v.nav = b.children(".w-slider-nav"), v.slides = v.mask.children(".w-slide"), v.slides.each(m.reset), T && (v.maskWidth = 0), b.attr("role") === void 0 && b.attr("role", "region"), b.attr("aria-label") === void 0 && b.attr("aria-label", "carousel");
                var X = v.mask.attr("id");
                if (X || (X = "w-slider-mask-" + d, v.mask.attr("id", X)), !a && !v.ariaLiveLabel && (v.ariaLiveLabel = e(g).appendTo(v.mask)), v.left.attr("role", "button"), v.left.attr("tabindex", "0"), v.left.attr("aria-controls", X), v.left.attr("aria-label") === void 0 && v.left.attr("aria-label", "previous slide"), v.right.attr("role", "button"), v.right.attr("tabindex", "0"), v.right.attr("aria-controls", X), v.right.attr("aria-label") === void 0 && v.right.attr("aria-label", "next slide"), !n.support.transform) {
                    v.left.hide(), v.right.hide(), v.nav.hide(), E = !0;
                    return
                }
                v.el.off(u), v.left.off(u), v.right.off(u), v.nav.off(u), M(v), a ? (v.el.on("setting" + u, y(v)), R(v), v.hasTimer = !1) : (v.el.on("swipe" + u, y(v)), v.left.on("click" + u, K(v)), v.right.on("click" + u, Y(v)), v.left.on("keydown" + u, B(v, K)), v.right.on("keydown" + u, B(v, Y)), v.nav.on("keydown" + u, "> div", y(v)), v.config.autoplay && !v.hasTimer && (v.hasTimer = !0, v.timerCount = 1, V(v)), v.el.on("mouseenter" + u, q(v, !0, "mouse")), v.el.on("focusin" + u, q(v, !0, "keyboard")), v.el.on("mouseleave" + u, q(v, !1, "mouse")), v.el.on("focusout" + u, q(v, !1, "keyboard"))), v.nav.on("click" + u, "> div", y(v)), s || v.mask.contents().filter(function() {
                    return this.nodeType === 3
                }).remove();
                var $ = b.filter(":hidden");
                $.addClass(p);
                var J = b.parents(":hidden");
                J.addClass(p), T || U(d, _), $.removeClass(p), J.removeClass(p)
            }

            function M(d) {
                var _ = {};
                _.crossOver = 0, _.animation = d.el.attr("data-animation") || "slide", _.animation === "outin" && (_.animation = "cross", _.crossOver = .5), _.easing = d.el.attr("data-easing") || "ease";
                var b = d.el.attr("data-duration");
                if (_.duration = b != null ? parseInt(b, 10) : 500, D(d.el.attr("data-infinite")) && (_.infinite = !0), D(d.el.attr("data-disable-swipe")) && (_.disableSwipe = !0), D(d.el.attr("data-hide-arrows")) ? _.hideArrows = !0 : d.config.hideArrows && (d.left.show(), d.right.show()), D(d.el.attr("data-autoplay"))) {
                    _.autoplay = !0, _.delay = parseInt(d.el.attr("data-delay"), 10) || 2e3, _.timerMax = parseInt(d.el.attr("data-autoplay-limit"), 10);
                    var v = "mousedown" + u + " touchstart" + u;
                    a || d.el.off(v).one(v, function() {
                        R(d)
                    })
                }
                var X = d.right.width();
                _.edge = X ? X + 40 : 100, d.config = _
            }

            function D(d) {
                return d === "1" || d === "true"
            }

            function q(d, _, b) {
                return function(v) {
                    if (_) d.hasFocus[b] = _;
                    else if (e.contains(d.el.get(0), v.relatedTarget) || (d.hasFocus[b] = _, d.hasFocus.mouse && b === "keyboard" || d.hasFocus.keyboard && b === "mouse")) return;
                    _ ? (d.ariaLiveLabel.attr("aria-live", "polite"), d.hasTimer && R(d)) : (d.ariaLiveLabel.attr("aria-live", "off"), d.hasTimer && V(d))
                }
            }

            function B(d, _) {
                return function(b) {
                    switch (b.keyCode) {
                        case ft.SPACE:
                        case ft.ENTER:
                            return _(d)(), b.preventDefault(), b.stopPropagation()
                    }
                }
            }

            function K(d) {
                return function() {
                    G(d, {
                        index: d.index - 1,
                        vector: -1
                    })
                }
            }

            function Y(d) {
                return function() {
                    G(d, {
                        index: d.index + 1,
                        vector: 1
                    })
                }
            }

            function te(d, _) {
                var b = null;
                _ === d.slides.length && (O(), Z(d)), t.each(d.anchors, function(v, X) {
                    e(v.els).each(function($, J) {
                        e(J).index() === _ && (b = X)
                    })
                }), b != null && G(d, {
                    index: b,
                    immediate: !0
                })
            }

            function V(d) {
                R(d);
                var _ = d.config,
                    b = _.timerMax;
                b && d.timerCount++ > b || (d.timerId = window.setTimeout(function() {
                    d.timerId == null || a || (Y(d)(), V(d))
                }, _.delay))
            }

            function R(d) {
                window.clearTimeout(d.timerId), d.timerId = null
            }

            function y(d) {
                return function(_, b) {
                    b = b || {};
                    var v = d.config;
                    if (a && _.type === "setting") {
                        if (b.select === "prev") return K(d)();
                        if (b.select === "next") return Y(d)();
                        if (M(d), Z(d), b.select == null) return;
                        te(d, b.select);
                        return
                    }
                    if (_.type === "swipe") return v.disableSwipe || St.env("editor") ? void 0 : b.direction === "left" ? Y(d)() : b.direction === "right" ? K(d)() : void 0;
                    if (d.nav.has(_.target).length) {
                        var X = e(_.target).index();
                        if (_.type === "click" && G(d, {
                                index: X
                            }), _.type === "keydown") switch (_.keyCode) {
                            case ft.ENTER:
                            case ft.SPACE:
                                {
                                    G(d, {
                                        index: X
                                    }),
                                    _.preventDefault();
                                    break
                                }
                            case ft.ARROW_LEFT:
                            case ft.ARROW_UP:
                                {
                                    L(d.nav, Math.max(X - 1, 0)),
                                    _.preventDefault();
                                    break
                                }
                            case ft.ARROW_RIGHT:
                            case ft.ARROW_DOWN:
                                {
                                    L(d.nav, Math.min(X + 1, d.pages)),
                                    _.preventDefault();
                                    break
                                }
                            case ft.HOME:
                                {
                                    L(d.nav, 0),
                                    _.preventDefault();
                                    break
                                }
                            case ft.END:
                                {
                                    L(d.nav, d.pages),
                                    _.preventDefault();
                                    break
                                }
                            default:
                                return
                        }
                    }
                }
            }

            function L(d, _) {
                var b = d.children().eq(_).focus();
                d.children().not(b)
            }

            function G(d, _) {
                _ = _ || {};
                var b = d.config,
                    v = d.anchors;
                d.previous = d.index;
                var X = _.index,
                    $ = {};
                X < 0 ? (X = v.length - 1, b.infinite && ($.x = -d.endX, $.from = 0, $.to = v[0].width)) : X >= v.length && (X = 0, b.infinite && ($.x = v[v.length - 1].width, $.from = -v[v.length - 1].x, $.to = $.from - $.x)), d.index = X;
                var J = d.nav.children().eq(X).addClass("w-active").attr("aria-pressed", "true").attr("tabindex", "0");
                d.nav.children().not(J).removeClass("w-active").attr("aria-pressed", "false").attr("tabindex", "-1"), b.hideArrows && (d.index === v.length - 1 ? d.right.hide() : d.right.show(), d.index === 0 ? d.left.hide() : d.left.show());
                var ue = d.offsetX || 0,
                    _e = d.offsetX = -v[d.index].x,
                    oe = {
                        x: _e,
                        opacity: 1,
                        visibility: ""
                    },
                    h = e(v[d.index].els),
                    W = e(v[d.previous] && v[d.previous].els),
                    Q = d.slides.not(h),
                    j = b.animation,
                    fe = b.easing,
                    Me = Math.round(b.duration),
                    Xe = _.vector || (d.index > d.previous ? 1 : -1),
                    l = "opacity " + Me + "ms " + fe,
                    I = "transform " + Me + "ms " + fe;
                if (h.find(k_).removeAttr("tabindex"), h.removeAttr("aria-hidden"), h.find("*").removeAttr("aria-hidden"), Q.find(k_).attr("tabindex", "-1"), Q.attr("aria-hidden", "true"), Q.find("*").attr("aria-hidden", "true"), a || (h.each(m.intro), Q.each(m.outro)), _.immediate && !T) {
                    n(h).set(oe), w();
                    return
                }
                if (d.index === d.previous) return;
                if (a || d.ariaLiveLabel.text(`Slide ${X+1} of ${v.length}.`), j === "cross") {
                    var x = Math.round(Me - Me * b.crossOver),
                        C = Math.round(Me - x);
                    l = "opacity " + x + "ms " + fe, n(W).set({
                        visibility: ""
                    }).add(l).start({
                        opacity: 0
                    }), n(h).set({
                        visibility: "",
                        x: _e,
                        opacity: 0,
                        zIndex: d.depth++
                    }).add(l).wait(C).then({
                        opacity: 1
                    }).then(w);
                    return
                }
                if (j === "fade") {
                    n(W).set({
                        visibility: ""
                    }).stop(), n(h).set({
                        visibility: "",
                        x: _e,
                        opacity: 0,
                        zIndex: d.depth++
                    }).add(l).start({
                        opacity: 1
                    }).then(w);
                    return
                }
                if (j === "over") {
                    oe = {
                        x: d.endX
                    }, n(W).set({
                        visibility: ""
                    }).stop(), n(h).set({
                        visibility: "",
                        zIndex: d.depth++,
                        x: _e + v[d.index].width * Xe
                    }).add(I).start({
                        x: _e
                    }).then(w);
                    return
                }
                b.infinite && $.x ? (n(d.slides.not(W)).set({
                    visibility: "",
                    x: $.x
                }).add(I).start({
                    x: _e
                }), n(W).set({
                    visibility: "",
                    x: $.from
                }).add(I).start({
                    x: $.to
                }), d.shifted = W) : (b.infinite && d.shifted && (n(d.shifted).set({
                    visibility: "",
                    x: ue
                }), d.shifted = null), n(d.slides).set({
                    visibility: ""
                }).add(I).start({
                    x: _e
                }));

                function w() {
                    h = e(v[d.index].els), Q = d.slides.not(h), j !== "slide" && (oe.visibility = "hidden"), n(Q).set(oe)
                }
            }

            function U(d, _) {
                var b = e.data(_, u);
                if (b) {
                    if (k(b)) return Z(b);
                    a && H(b) && Z(b)
                }
            }

            function Z(d) {
                var _ = 1,
                    b = 0,
                    v = 0,
                    X = 0,
                    $ = d.maskWidth,
                    J = $ - d.config.edge;
                J < 0 && (J = 0), d.anchors = [{
                    els: [],
                    x: 0,
                    width: 0
                }], d.slides.each(function(_e, oe) {
                    v - b > J && (_++, b += $, d.anchors[_ - 1] = {
                        els: [],
                        x: v,
                        width: 0
                    }), X = e(oe).outerWidth(!0), v += X, d.anchors[_ - 1].width += X, d.anchors[_ - 1].els.push(oe);
                    var h = _e + 1 + " of " + d.slides.length;
                    e(oe).attr("aria-label", h), e(oe).attr("role", "group")
                }), d.endX = v, a && (d.pages = null), d.nav.length && d.pages !== _ && (d.pages = _, re(d));
                var ue = d.index;
                ue >= _ && (ue = _ - 1), G(d, {
                    immediate: !0,
                    index: ue
                })
            }

            function re(d) {
                var _ = [],
                    b, v = d.el.attr("data-nav-spacing");
                v && (v = parseFloat(v) + "px");
                for (var X = 0, $ = d.pages; X < $; X++) b = e(f), b.attr("aria-label", "Show slide " + (X + 1) + " of " + $).attr("aria-pressed", "false").attr("role", "button").attr("tabindex", "-1"), d.nav.hasClass("w-num") && b.text(X + 1), v != null && b.css({
                    "margin-left": v,
                    "margin-right": v
                }), _.push(b);
                d.nav.empty().append(_)
            }

            function k(d) {
                var _ = d.mask.width();
                return d.maskWidth !== _ ? (d.maskWidth = _, !0) : !1
            }

            function H(d) {
                var _ = 0;
                return d.slides.each(function(b, v) {
                    _ += e(v).outerWidth(!0)
                }), d.slidesWidth !== _ ? (d.slidesWidth = _, !0) : !1
            }
            return r
        })
    });
    var H_ = c((nz, W_) => {
        "use strict";
        var Ct = Ge(),
            qV = _r();
        Ct.define("tabs", W_.exports = function(e) {
            var t = {},
                r = e.tram,
                n = e(document),
                i, o, a = Ct.env,
                s = a.safari,
                u = a(),
                f = "data-w-tab",
                g = "data-w-pane",
                p = ".w-tabs",
                m = "w--current",
                E = "w--tab-active",
                T = qV.triggers,
                O = !1;
            t.ready = t.design = t.preview = F, t.redraw = function() {
                O = !0, F(), O = !1
            }, t.destroy = function() {
                i = n.find(p), i.length && (i.each(A), S())
            };

            function F() {
                o = u && Ct.env("design"), i = n.find(p), i.length && (i.each(M), Ct.env("preview") && !O && i.each(A), S(), P())
            }

            function S() {
                Ct.redraw.off(t.redraw)
            }

            function P() {
                Ct.redraw.on(t.redraw)
            }

            function A(V, R) {
                var y = e.data(R, p);
                y && (y.links && y.links.each(T.reset), y.panes && y.panes.each(T.reset))
            }

            function M(V, R) {
                var y = p.substr(1) + "-" + V,
                    L = e(R),
                    G = e.data(R, p);
                if (G || (G = e.data(R, p, {
                        el: L,
                        config: {}
                    })), G.current = null, G.tabIdentifier = y + "-" + f, G.paneIdentifier = y + "-" + g, G.menu = L.children(".w-tab-menu"), G.links = G.menu.children(".w-tab-link"), G.content = L.children(".w-tab-content"), G.panes = G.content.children(".w-tab-pane"), G.el.off(p), G.links.off(p), G.menu.attr("role", "tablist"), G.links.attr("tabindex", "-1"), D(G), !o) {
                    G.links.on("click" + p, B(G)), G.links.on("keydown" + p, K(G));
                    var U = G.links.filter("." + m),
                        Z = U.attr(f);
                    Z && Y(G, {
                        tab: Z,
                        immediate: !0
                    })
                }
            }

            function D(V) {
                var R = {};
                R.easing = V.el.attr("data-easing") || "ease";
                var y = parseInt(V.el.attr("data-duration-in"), 10);
                y = R.intro = y === y ? y : 0;
                var L = parseInt(V.el.attr("data-duration-out"), 10);
                L = R.outro = L === L ? L : 0, R.immediate = !y && !L, V.config = R
            }

            function q(V) {
                var R = V.current;
                return Array.prototype.findIndex.call(V.links, y => y.getAttribute(f) === R, null)
            }

            function B(V) {
                return function(R) {
                    R.preventDefault();
                    var y = R.currentTarget.getAttribute(f);
                    y && Y(V, {
                        tab: y
                    })
                }
            }

            function K(V) {
                return function(R) {
                    var y = q(V),
                        L = R.key,
                        G = {
                            ArrowLeft: y - 1,
                            ArrowUp: y - 1,
                            ArrowRight: y + 1,
                            ArrowDown: y + 1,
                            End: V.links.length - 1,
                            Home: 0
                        };
                    if (L in G) {
                        R.preventDefault();
                        var U = G[L];
                        U === -1 && (U = V.links.length - 1), U === V.links.length && (U = 0);
                        var Z = V.links[U],
                            re = Z.getAttribute(f);
                        re && Y(V, {
                            tab: re
                        })
                    }
                }
            }

            function Y(V, R) {
                R = R || {};
                var y = V.config,
                    L = y.easing,
                    G = R.tab;
                if (G !== V.current) {
                    V.current = G;
                    var U;
                    V.links.each(function(b, v) {
                        var X = e(v);
                        if (R.immediate || y.immediate) {
                            var $ = V.panes[b];
                            v.id || (v.id = V.tabIdentifier + "-" + b), $.id || ($.id = V.paneIdentifier + "-" + b), v.href = "#" + $.id, v.setAttribute("role", "tab"), v.setAttribute("aria-controls", $.id), v.setAttribute("aria-selected", "false"), $.setAttribute("role", "tabpanel"), $.setAttribute("aria-labelledby", v.id)
                        }
                        v.getAttribute(f) === G ? (U = v, X.addClass(m).removeAttr("tabindex").attr({
                            "aria-selected": "true"
                        }).each(T.intro)) : X.hasClass(m) && X.removeClass(m).attr({
                            tabindex: "-1",
                            "aria-selected": "false"
                        }).each(T.outro)
                    });
                    var Z = [],
                        re = [];
                    V.panes.each(function(b, v) {
                        var X = e(v);
                        v.getAttribute(f) === G ? Z.push(v) : X.hasClass(E) && re.push(v)
                    });
                    var k = e(Z),
                        H = e(re);
                    if (R.immediate || y.immediate) {
                        k.addClass(E).each(T.intro), H.removeClass(E), O || Ct.redraw.up();
                        return
                    } else {
                        var d = window.scrollX,
                            _ = window.scrollY;
                        U.focus(), window.scrollTo(d, _)
                    }
                    H.length && y.outro ? (H.each(T.outro), r(H).add("opacity " + y.outro + "ms " + L, {
                        fallback: s
                    }).start({
                        opacity: 0
                    }).then(() => te(y, H, k))) : te(y, H, k)
                }
            }

            function te(V, R, y) {
                if (R.removeClass(E).css({
                        opacity: "",
                        transition: "",
                        transform: "",
                        width: "",
                        height: ""
                    }), y.addClass(E).each(T.intro), Ct.redraw.up(), !V.intro) return r(y).set({
                    opacity: 1
                });
                r(y).set({
                    opacity: 0
                }).redraw().add("opacity " + V.intro + "ms " + V.easing, {
                    fallback: s
                }).start({
                    opacity: 1
                })
            }
            return t
        })
    });
    Hs();
    Bs();
    zs();
    $s();
    _r();
    A_();
    C_();
    L_();
    P_();
    D_();
    G_();
    V_();
    H_();
})();
/*!
 * tram.js v0.8.2-global
 * Cross-browser CSS3 transitions in JavaScript
 * https://github.com/bkwld/tram
 * MIT License
 */
/*!
 * Webflow._ (aka) Underscore.js 1.6.0 (custom build)
 *
 * http://underscorejs.org
 * (c) 2009-2013 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 * Underscore may be freely distributed under the MIT license.
 * @license MIT
 */
/*! Bundled license information:

timm/lib/timm.js:
  (*!
   * Timm
   *
   * Immutability helpers with fast reads and acceptable writes.
   *
   * @copyright Guillermo Grau Panea 2016
   * @license MIT
   *)
*/
/**
 * ----------------------------------------------------------------------
 * Webflow: Interactions 2.0: Init
 */
Webflow.require('ix2').init({
    "events": {
        "e": {
            "id": "e",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-2"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "656c23e118a42479510d6625|5cb2fbf1-823e-576d-c380-8517ec657811",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "656c23e118a42479510d6625|5cb2fbf1-823e-576d-c380-8517ec657811",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 0,
                "scrollOffsetUnit": "%",
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1692152100456
        },
        "e-3": {
            "id": "e-3",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-4"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "selector": ".style-guide-line",
                "originalId": "656c23e118a42479510d6625|33b534e5-99b7-4781-3c6e-6602da86d124",
                "appliesTo": "CLASS"
            },
            "targets": [{
                "selector": ".style-guide-line",
                "originalId": "656c23e118a42479510d6625|33b534e5-99b7-4781-3c6e-6602da86d124",
                "appliesTo": "CLASS"
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 0,
                "scrollOffsetUnit": "%",
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1692152406060
        },
        "e-5": {
            "id": "e-5",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "MOUSE_OVER",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-2",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-6"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "e89375c6-3772-ae01-188a-4ffa6b0df487",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "e89375c6-3772-ae01-188a-4ffa6b0df487",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1701599389578
        },
        "e-6": {
            "id": "e-6",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "MOUSE_OUT",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-17",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-5"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "e89375c6-3772-ae01-188a-4ffa6b0df487",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "e89375c6-3772-ae01-188a-4ffa6b0df487",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1701599389578
        },
        "e-7": {
            "id": "e-7",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "MOUSE_OVER",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-4",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-8"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "0e86676e-731e-c053-e9c2-05912aa2bdb0",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "0e86676e-731e-c053-e9c2-05912aa2bdb0",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1701654039782
        },
        "e-8": {
            "id": "e-8",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "MOUSE_OUT",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-5",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-7"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "0e86676e-731e-c053-e9c2-05912aa2bdb0",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "0e86676e-731e-c053-e9c2-05912aa2bdb0",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1701654039783
        },
        "e-11": {
            "id": "e-11",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "MOUSE_OVER",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-6",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-12"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "36f0c2ec-0961-4b76-8360-77f88c93069b",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "36f0c2ec-0961-4b76-8360-77f88c93069b",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1701668062547
        },
        "e-12": {
            "id": "e-12",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "MOUSE_OUT",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-7",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-11"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "36f0c2ec-0961-4b76-8360-77f88c93069b",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "36f0c2ec-0961-4b76-8360-77f88c93069b",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1701668062548
        },
        "e-13": {
            "id": "e-13",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "PAGE_START",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-8",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-14"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "656c23e118a42479510d6625",
                "appliesTo": "PAGE",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "656c23e118a42479510d6625",
                "appliesTo": "PAGE",
                "styleBlockIds": []
            }],
            "config": {
                "loop": true,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1701673945116
        },
        "e-15": {
            "id": "e-15",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "MOUSE_OVER",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-9",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-16"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "f71868ac-920d-9d3c-0139-5cac550c5c68",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "f71868ac-920d-9d3c-0139-5cac550c5c68",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1701679571538
        },
        "e-16": {
            "id": "e-16",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "MOUSE_OUT",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-43",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-15"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "f71868ac-920d-9d3c-0139-5cac550c5c68",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "f71868ac-920d-9d3c-0139-5cac550c5c68",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1701679571622
        },
        "e-17": {
            "id": "e-17",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "MOUSE_MOVE",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_CONTINUOUS_ACTION",
                "config": {
                    "actionListId": "a-11",
                    "affectedElements": {},
                    "duration": 0
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "f71868ac-920d-9d3c-0139-5cac550c5c68",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "f71868ac-920d-9d3c-0139-5cac550c5c68",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": [{
                "continuousParameterGroupId": "a-11-p",
                "selectedAxis": "X_AXIS",
                "basedOn": "ELEMENT",
                "reverse": false,
                "smoothing": 80,
                "restingState": 50
            }, {
                "continuousParameterGroupId": "a-11-p-2",
                "selectedAxis": "Y_AXIS",
                "basedOn": "ELEMENT",
                "reverse": false,
                "smoothing": 50,
                "restingState": 50
            }],
            "createdOn": 1701679602993
        },
        "e-30": {
            "id": "e-30",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "MOUSE_OVER",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-4",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-31"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "1d03aa72-2262-611d-c8bb-c5fd7b444324",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "1d03aa72-2262-611d-c8bb-c5fd7b444324",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1701827629507
        },
        "e-31": {
            "id": "e-31",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "MOUSE_OUT",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-5",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-30"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "1d03aa72-2262-611d-c8bb-c5fd7b444324",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "1d03aa72-2262-611d-c8bb-c5fd7b444324",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1701827629508
        },
        "e-32": {
            "id": "e-32",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "PAGE_START",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-18",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-33"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "656c23e118a42479510d6622",
                "appliesTo": "PAGE",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "656c23e118a42479510d6622",
                "appliesTo": "PAGE",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1701849274991
        },
        "e-34": {
            "id": "e-34",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "PAGE_START",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-8",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-35"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "656c23e118a42479510d6622",
                "appliesTo": "PAGE",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "656c23e118a42479510d6622",
                "appliesTo": "PAGE",
                "styleBlockIds": []
            }],
            "config": {
                "loop": true,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1701851910067
        },
        "e-42": {
            "id": "e-42",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "MOUSE_OVER",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-21",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-43"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "87ad0436-b7ed-6bff-c08b-47514904a807",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "87ad0436-b7ed-6bff-c08b-47514904a807",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1701949844915
        },
        "e-43": {
            "id": "e-43",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "MOUSE_OUT",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-22",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-42"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "87ad0436-b7ed-6bff-c08b-47514904a807",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "87ad0436-b7ed-6bff-c08b-47514904a807",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1701949844915
        },
        "e-44": {
            "id": "e-44",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "MOUSE_MOVE",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_CONTINUOUS_ACTION",
                "config": {
                    "actionListId": "a-23",
                    "affectedElements": {},
                    "duration": 0
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "87ad0436-b7ed-6bff-c08b-47514904a807",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "87ad0436-b7ed-6bff-c08b-47514904a807",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": [{
                "continuousParameterGroupId": "a-23-p",
                "selectedAxis": "X_AXIS",
                "basedOn": "ELEMENT",
                "reverse": false,
                "smoothing": 50,
                "restingState": 50
            }, {
                "continuousParameterGroupId": "a-23-p-2",
                "selectedAxis": "Y_AXIS",
                "basedOn": "ELEMENT",
                "reverse": false,
                "smoothing": 50,
                "restingState": 50
            }],
            "createdOn": 1701950107996
        },
        "e-49": {
            "id": "e-49",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "MOUSE_CLICK",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-27",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-50"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "656c23e118a42479510d6622|e9080c7b-642b-93de-40fe-4df74d32de80",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "656c23e118a42479510d6622|e9080c7b-642b-93de-40fe-4df74d32de80",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1702016345967
        },
        "e-50": {
            "id": "e-50",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "MOUSE_SECOND_CLICK",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-28",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-49"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "656c23e118a42479510d6622|e9080c7b-642b-93de-40fe-4df74d32de80",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "656c23e118a42479510d6622|e9080c7b-642b-93de-40fe-4df74d32de80",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1702016345968
        },
        "e-55": {
            "id": "e-55",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "MOUSE_OVER",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-25",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-56"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "67b6b94c-fca5-a263-17be-e190952df1c1",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "67b6b94c-fca5-a263-17be-e190952df1c1",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1702072179236
        },
        "e-56": {
            "id": "e-56",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "MOUSE_OUT",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-26",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-55"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "67b6b94c-fca5-a263-17be-e190952df1c1",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "67b6b94c-fca5-a263-17be-e190952df1c1",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1702072179237
        },
        "e-57": {
            "id": "e-57",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "MOUSE_OVER",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-25",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-58"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "96875ef3-cafb-5b74-4f71-5e1200312943",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "96875ef3-cafb-5b74-4f71-5e1200312943",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1702072382684
        },
        "e-58": {
            "id": "e-58",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "MOUSE_OUT",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-26",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-57"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "96875ef3-cafb-5b74-4f71-5e1200312943",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "96875ef3-cafb-5b74-4f71-5e1200312943",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1702072382684
        },
        "e-59": {
            "id": "e-59",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "MOUSE_OVER",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-25",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-60"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "d8c3e9b5-6f9d-6cf9-1c38-c66b0a6da6c7",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "d8c3e9b5-6f9d-6cf9-1c38-c66b0a6da6c7",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1702072383604
        },
        "e-60": {
            "id": "e-60",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "MOUSE_OUT",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-26",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-59"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "d8c3e9b5-6f9d-6cf9-1c38-c66b0a6da6c7",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "d8c3e9b5-6f9d-6cf9-1c38-c66b0a6da6c7",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1702072383604
        },
        "e-61": {
            "id": "e-61",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "MOUSE_OVER",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-25",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-62"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "458d3658-9c73-0601-b604-525decccdfe2",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "458d3658-9c73-0601-b604-525decccdfe2",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1702072384147
        },
        "e-62": {
            "id": "e-62",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "MOUSE_OUT",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-26",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-61"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "458d3658-9c73-0601-b604-525decccdfe2",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "458d3658-9c73-0601-b604-525decccdfe2",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1702072384147
        },
        "e-63": {
            "id": "e-63",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "MOUSE_OVER",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-25",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-64"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "433424e9-9365-fad0-e1c3-323e63f609d7",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "433424e9-9365-fad0-e1c3-323e63f609d7",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1702072457911
        },
        "e-64": {
            "id": "e-64",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "MOUSE_OUT",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-26",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-63"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "433424e9-9365-fad0-e1c3-323e63f609d7",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "433424e9-9365-fad0-e1c3-323e63f609d7",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1702072457911
        },
        "e-65": {
            "id": "e-65",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "MOUSE_OVER",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-25",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-66"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "433424e9-9365-fad0-e1c3-323e63f609db",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "433424e9-9365-fad0-e1c3-323e63f609db",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1702072457911
        },
        "e-66": {
            "id": "e-66",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "MOUSE_OUT",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-26",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-65"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "433424e9-9365-fad0-e1c3-323e63f609db",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "433424e9-9365-fad0-e1c3-323e63f609db",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1702072457911
        },
        "e-67": {
            "id": "e-67",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "MOUSE_OVER",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-25",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-68"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "433424e9-9365-fad0-e1c3-323e63f609df",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "433424e9-9365-fad0-e1c3-323e63f609df",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1702072457911
        },
        "e-68": {
            "id": "e-68",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "MOUSE_OUT",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-26",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-67"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "433424e9-9365-fad0-e1c3-323e63f609df",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "433424e9-9365-fad0-e1c3-323e63f609df",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1702072457911
        },
        "e-69": {
            "id": "e-69",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "MOUSE_OVER",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-25",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-70"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "48276af8-5630-d4a9-0af5-a05a046fee60",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "48276af8-5630-d4a9-0af5-a05a046fee60",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1702072490738
        },
        "e-70": {
            "id": "e-70",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "MOUSE_OUT",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-26",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-69"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "48276af8-5630-d4a9-0af5-a05a046fee60",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "48276af8-5630-d4a9-0af5-a05a046fee60",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1702072490738
        },
        "e-71": {
            "id": "e-71",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "MOUSE_OVER",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-25",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-72"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "48276af8-5630-d4a9-0af5-a05a046fee64",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "48276af8-5630-d4a9-0af5-a05a046fee64",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1702072490738
        },
        "e-72": {
            "id": "e-72",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "MOUSE_OUT",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-26",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-71"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "48276af8-5630-d4a9-0af5-a05a046fee64",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "48276af8-5630-d4a9-0af5-a05a046fee64",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1702072490738
        },
        "e-73": {
            "id": "e-73",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "MOUSE_OVER",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-25",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-74"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "48276af8-5630-d4a9-0af5-a05a046fee68",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "48276af8-5630-d4a9-0af5-a05a046fee68",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1702072490738
        },
        "e-74": {
            "id": "e-74",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "MOUSE_OUT",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-26",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-73"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "48276af8-5630-d4a9-0af5-a05a046fee68",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "48276af8-5630-d4a9-0af5-a05a046fee68",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1702072490738
        },
        "e-75": {
            "id": "e-75",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "MOUSE_OVER",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-25",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-76"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "2cbb3c15-dbab-d391-0d6d-2fa0799d68ab",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "2cbb3c15-dbab-d391-0d6d-2fa0799d68ab",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1702072503492
        },
        "e-76": {
            "id": "e-76",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "MOUSE_OUT",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-26",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-75"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "2cbb3c15-dbab-d391-0d6d-2fa0799d68ab",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "2cbb3c15-dbab-d391-0d6d-2fa0799d68ab",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1702072503492
        },
        "e-91": {
            "id": "e-91",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "PAGE_START",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-8",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-92"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "6578065f8c7edcefb0ff00da",
                "appliesTo": "PAGE",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "6578065f8c7edcefb0ff00da",
                "appliesTo": "PAGE",
                "styleBlockIds": []
            }],
            "config": {
                "loop": true,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1702376176776
        },
        "e-95": {
            "id": "e-95",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "MOUSE_MOVE",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_CONTINUOUS_ACTION",
                "config": {
                    "actionListId": "a-23",
                    "affectedElements": {},
                    "duration": 0
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "6571870a2873932f1a35088d|13d3236d-aec9-bf8b-f051-fa3a1e40a7ca",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "6571870a2873932f1a35088d|13d3236d-aec9-bf8b-f051-fa3a1e40a7ca",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": [{
                "continuousParameterGroupId": "a-23-p",
                "selectedAxis": "X_AXIS",
                "basedOn": "ELEMENT",
                "reverse": false,
                "smoothing": 50,
                "restingState": 50
            }, {
                "continuousParameterGroupId": "a-23-p-2",
                "selectedAxis": "Y_AXIS",
                "basedOn": "ELEMENT",
                "reverse": false,
                "smoothing": 50,
                "restingState": 50
            }],
            "createdOn": 1702453430624
        },
        "e-96": {
            "id": "e-96",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "MOUSE_OVER",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-21",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-97"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "6571870a2873932f1a35088d|13d3236d-aec9-bf8b-f051-fa3a1e40a7ca",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "6571870a2873932f1a35088d|13d3236d-aec9-bf8b-f051-fa3a1e40a7ca",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1702453430624
        },
        "e-97": {
            "id": "e-97",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "MOUSE_OUT",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-22",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-96"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "6571870a2873932f1a35088d|13d3236d-aec9-bf8b-f051-fa3a1e40a7ca",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "6571870a2873932f1a35088d|13d3236d-aec9-bf8b-f051-fa3a1e40a7ca",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1702453430624
        },
        "e-98": {
            "id": "e-98",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "MOUSE_OVER",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-29",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-99"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "6578065f8c7edcefb0ff00da|752f3328-f2a4-3d3d-82a6-f3cee4ae1785",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "6578065f8c7edcefb0ff00da|752f3328-f2a4-3d3d-82a6-f3cee4ae1785",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1702543595625
        },
        "e-99": {
            "id": "e-99",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "MOUSE_OUT",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-30",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-98"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "6578065f8c7edcefb0ff00da|752f3328-f2a4-3d3d-82a6-f3cee4ae1785",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "6578065f8c7edcefb0ff00da|752f3328-f2a4-3d3d-82a6-f3cee4ae1785",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1702543595628
        },
        "e-100": {
            "id": "e-100",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "MOUSE_OVER",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-29",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-101"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "6578065f8c7edcefb0ff00da|a87a068a-3970-2aae-180a-842d2aeafb74",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "6578065f8c7edcefb0ff00da|a87a068a-3970-2aae-180a-842d2aeafb74",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1702544677611
        },
        "e-101": {
            "id": "e-101",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "MOUSE_OUT",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-30",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-100"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "6578065f8c7edcefb0ff00da|a87a068a-3970-2aae-180a-842d2aeafb74",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "6578065f8c7edcefb0ff00da|a87a068a-3970-2aae-180a-842d2aeafb74",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1702544677611
        },
        "e-102": {
            "id": "e-102",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "MOUSE_OVER",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-29",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-103"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "6578065f8c7edcefb0ff00da|02381044-5e99-caee-9f36-47901591dfcf",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "6578065f8c7edcefb0ff00da|02381044-5e99-caee-9f36-47901591dfcf",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1702545326868
        },
        "e-103": {
            "id": "e-103",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "MOUSE_OUT",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-30",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-102"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "6578065f8c7edcefb0ff00da|02381044-5e99-caee-9f36-47901591dfcf",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "6578065f8c7edcefb0ff00da|02381044-5e99-caee-9f36-47901591dfcf",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1702545326868
        },
        "e-104": {
            "id": "e-104",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "MOUSE_OVER",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-29",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-105"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "6578065f8c7edcefb0ff00da|f1dab461-22aa-299d-13a0-02dc601adfc7",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "6578065f8c7edcefb0ff00da|f1dab461-22aa-299d-13a0-02dc601adfc7",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1702545340565
        },
        "e-105": {
            "id": "e-105",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "MOUSE_OUT",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-30",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-104"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "6578065f8c7edcefb0ff00da|f1dab461-22aa-299d-13a0-02dc601adfc7",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "6578065f8c7edcefb0ff00da|f1dab461-22aa-299d-13a0-02dc601adfc7",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1702545340565
        },
        "e-106": {
            "id": "e-106",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "MOUSE_OVER",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-29",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-107"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "6578065f8c7edcefb0ff00da|f1c98c1b-c9da-4d0a-d830-dd345f01b1fe",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "6578065f8c7edcefb0ff00da|f1c98c1b-c9da-4d0a-d830-dd345f01b1fe",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1702548526635
        },
        "e-107": {
            "id": "e-107",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "MOUSE_OUT",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-30",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-106"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "6578065f8c7edcefb0ff00da|f1c98c1b-c9da-4d0a-d830-dd345f01b1fe",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "6578065f8c7edcefb0ff00da|f1c98c1b-c9da-4d0a-d830-dd345f01b1fe",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1702548526635
        },
        "e-108": {
            "id": "e-108",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "MOUSE_OVER",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-29",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-109"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "6578065f8c7edcefb0ff00da|4657fb6e-4552-7c50-aa00-d6556e95fd0a",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "6578065f8c7edcefb0ff00da|4657fb6e-4552-7c50-aa00-d6556e95fd0a",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1702548579020
        },
        "e-109": {
            "id": "e-109",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "MOUSE_OUT",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-30",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-108"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "6578065f8c7edcefb0ff00da|4657fb6e-4552-7c50-aa00-d6556e95fd0a",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "6578065f8c7edcefb0ff00da|4657fb6e-4552-7c50-aa00-d6556e95fd0a",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1702548579020
        },
        "e-110": {
            "id": "e-110",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "MOUSE_OVER",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-29",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-111"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "6578065f8c7edcefb0ff00da|ba3b6cce-8fe0-3130-7d17-47827b397b3a",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "6578065f8c7edcefb0ff00da|ba3b6cce-8fe0-3130-7d17-47827b397b3a",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1702548770156
        },
        "e-111": {
            "id": "e-111",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "MOUSE_OUT",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-30",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-110"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "6578065f8c7edcefb0ff00da|ba3b6cce-8fe0-3130-7d17-47827b397b3a",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "6578065f8c7edcefb0ff00da|ba3b6cce-8fe0-3130-7d17-47827b397b3a",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1702548770156
        },
        "e-112": {
            "id": "e-112",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "MOUSE_OVER",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-29",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-113"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "6578065f8c7edcefb0ff00da|95bb63d5-18a6-8eab-fc1d-667b1687436c",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "6578065f8c7edcefb0ff00da|95bb63d5-18a6-8eab-fc1d-667b1687436c",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1702548796768
        },
        "e-113": {
            "id": "e-113",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "MOUSE_OUT",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-30",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-112"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "6578065f8c7edcefb0ff00da|95bb63d5-18a6-8eab-fc1d-667b1687436c",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "6578065f8c7edcefb0ff00da|95bb63d5-18a6-8eab-fc1d-667b1687436c",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1702548796768
        },
        "e-114": {
            "id": "e-114",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "MOUSE_OVER",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-29",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-115"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "6572c422ce00c4580368af87|3909123a-2c27-f9e9-18dc-4c0083539df6",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "6572c422ce00c4580368af87|3909123a-2c27-f9e9-18dc-4c0083539df6",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1702549308882
        },
        "e-115": {
            "id": "e-115",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "MOUSE_OUT",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-30",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-114"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "6572c422ce00c4580368af87|3909123a-2c27-f9e9-18dc-4c0083539df6",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "6572c422ce00c4580368af87|3909123a-2c27-f9e9-18dc-4c0083539df6",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1702549308882
        },
        "e-116": {
            "id": "e-116",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "MOUSE_OVER",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-29",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-117"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "656c23e118a42479510d6622|37301518-6bcb-07e4-e9d1-c31259435e10",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "656c23e118a42479510d6622|37301518-6bcb-07e4-e9d1-c31259435e10",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1702612401307
        },
        "e-117": {
            "id": "e-117",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "MOUSE_OUT",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-30",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-116"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "656c23e118a42479510d6622|37301518-6bcb-07e4-e9d1-c31259435e10",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "656c23e118a42479510d6622|37301518-6bcb-07e4-e9d1-c31259435e10",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1702612401307
        },
        "e-118": {
            "id": "e-118",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "SCROLLING_IN_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_CONTINUOUS_ACTION",
                "config": {
                    "actionListId": "a-31",
                    "affectedElements": {},
                    "duration": 0
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "656c23e118a42479510d6622|ca9efeff-0e61-18ee-3e00-25e315c993d5",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "656c23e118a42479510d6622|ca9efeff-0e61-18ee-3e00-25e315c993d5",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": [{
                "continuousParameterGroupId": "a-31-p",
                "smoothing": 50,
                "startsEntering": true,
                "addStartOffset": false,
                "addOffsetValue": 50,
                "startsExiting": false,
                "addEndOffset": false,
                "endOffsetValue": 4
            }],
            "createdOn": 1702624783895
        },
        "e-128": {
            "id": "e-128",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "SLIDE_EFFECT",
                "instant": false,
                "config": {
                    "actionListId": "slideInBottom",
                    "autoStopEventId": "e-129"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "6576a80f86030ee5138ee988|63639704-a683-a8fc-b5da-b21c3f9ed771",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "6576a80f86030ee5138ee988|63639704-a683-a8fc-b5da-b21c3f9ed771",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 0,
                "scrollOffsetUnit": "%",
                "delay": 0,
                "direction": "BOTTOM",
                "effectIn": true
            },
            "createdOn": 1702976505592
        },
        "e-130": {
            "id": "e-130",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "SLIDE_EFFECT",
                "instant": false,
                "config": {
                    "actionListId": "slideInBottom",
                    "autoStopEventId": "e-131"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "4b1769d6-bad5-160e-47d1-525ad6ca79cc",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "4b1769d6-bad5-160e-47d1-525ad6ca79cc",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 0,
                "scrollOffsetUnit": "%",
                "delay": 100,
                "direction": "BOTTOM",
                "effectIn": true
            },
            "createdOn": 1702976527185
        },
        "e-132": {
            "id": "e-132",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "SLIDE_EFFECT",
                "instant": false,
                "config": {
                    "actionListId": "slideInBottom",
                    "autoStopEventId": "e-133"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "4b1769d6-bad5-160e-47d1-525ad6ca79d0",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "4b1769d6-bad5-160e-47d1-525ad6ca79d0",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 0,
                "scrollOffsetUnit": "%",
                "delay": 200,
                "direction": "BOTTOM",
                "effectIn": true
            },
            "createdOn": 1702976538624
        },
        "e-134": {
            "id": "e-134",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "SLIDE_EFFECT",
                "instant": false,
                "config": {
                    "actionListId": "slideInBottom",
                    "autoStopEventId": "e-135"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "4b1769d6-bad5-160e-47d1-525ad6ca79d4",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "4b1769d6-bad5-160e-47d1-525ad6ca79d4",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 0,
                "scrollOffsetUnit": "%",
                "delay": 300,
                "direction": "BOTTOM",
                "effectIn": true
            },
            "createdOn": 1702976546781
        },
        "e-136": {
            "id": "e-136",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "SLIDE_EFFECT",
                "instant": false,
                "config": {
                    "actionListId": "slideInBottom",
                    "autoStopEventId": "e-137"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "6576a80f86030ee5138ee988|e2699428-e89b-8e2c-7a29-dc22117a6225",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "6576a80f86030ee5138ee988|e2699428-e89b-8e2c-7a29-dc22117a6225",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 0,
                "scrollOffsetUnit": "%",
                "delay": 300,
                "direction": "BOTTOM",
                "effectIn": true
            },
            "createdOn": 1702976570246
        },
        "e-138": {
            "id": "e-138",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "GROW_EFFECT",
                "instant": false,
                "config": {
                    "actionListId": "growIn",
                    "autoStopEventId": "e-139"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "6576a80f86030ee5138ee988|e6d1d1cb-5d50-2a54-df88-93b614ebddbd",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "6576a80f86030ee5138ee988|e6d1d1cb-5d50-2a54-df88-93b614ebddbd",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 0,
                "scrollOffsetUnit": "%",
                "delay": 300,
                "direction": null,
                "effectIn": true
            },
            "createdOn": 1702976596315
        },
        "e-142": {
            "id": "e-142",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "SLIDE_EFFECT",
                "instant": false,
                "config": {
                    "actionListId": "slideInBottom",
                    "autoStopEventId": "e-143"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "6576a80f86030ee5138ee988|3350c8f8-90b5-b7be-5282-66271a95a9a9",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "6576a80f86030ee5138ee988|3350c8f8-90b5-b7be-5282-66271a95a9a9",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 0,
                "scrollOffsetUnit": "%",
                "delay": 200,
                "direction": "BOTTOM",
                "effectIn": true
            },
            "createdOn": 1702977251552
        },
        "e-144": {
            "id": "e-144",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "SLIDE_EFFECT",
                "instant": false,
                "config": {
                    "actionListId": "slideInLeft",
                    "autoStopEventId": "e-145"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "6576a80f86030ee5138ee988|6779078a-9242-7266-df0f-ebb3a008476e",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "6576a80f86030ee5138ee988|6779078a-9242-7266-df0f-ebb3a008476e",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 0,
                "scrollOffsetUnit": "%",
                "delay": 100,
                "direction": "LEFT",
                "effectIn": true
            },
            "createdOn": 1702977290045
        },
        "e-146": {
            "id": "e-146",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "SLIDE_EFFECT",
                "instant": false,
                "config": {
                    "actionListId": "slideInLeft",
                    "autoStopEventId": "e-147"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "6576a80f86030ee5138ee988|3c87eca1-7829-43c6-d72f-91a2cc212579",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "6576a80f86030ee5138ee988|3c87eca1-7829-43c6-d72f-91a2cc212579",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 0,
                "scrollOffsetUnit": "%",
                "delay": 100,
                "direction": "LEFT",
                "effectIn": true
            },
            "createdOn": 1702977305012
        },
        "e-148": {
            "id": "e-148",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "SLIDE_EFFECT",
                "instant": false,
                "config": {
                    "actionListId": "slideInLeft",
                    "autoStopEventId": "e-149"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "6576a80f86030ee5138ee988|2ca99ae1-a8e4-d92e-2c91-25f3abf16181",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "6576a80f86030ee5138ee988|2ca99ae1-a8e4-d92e-2c91-25f3abf16181",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 0,
                "scrollOffsetUnit": "%",
                "delay": 100,
                "direction": "LEFT",
                "effectIn": true
            },
            "createdOn": 1702977311372
        },
        "e-150": {
            "id": "e-150",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "SLIDE_EFFECT",
                "instant": false,
                "config": {
                    "actionListId": "slideInRight",
                    "autoStopEventId": "e-151"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "6576a80f86030ee5138ee988|37b27a0c-4ecf-d8dc-d3c1-fdbf009c3945",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "6576a80f86030ee5138ee988|37b27a0c-4ecf-d8dc-d3c1-fdbf009c3945",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 0,
                "scrollOffsetUnit": "%",
                "delay": 200,
                "direction": "RIGHT",
                "effectIn": true
            },
            "createdOn": 1702977318170
        },
        "e-152": {
            "id": "e-152",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "SLIDE_EFFECT",
                "instant": false,
                "config": {
                    "actionListId": "slideInRight",
                    "autoStopEventId": "e-153"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "6576a80f86030ee5138ee988|3c87eca1-7829-43c6-d72f-91a2cc21257c",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "6576a80f86030ee5138ee988|3c87eca1-7829-43c6-d72f-91a2cc21257c",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 0,
                "scrollOffsetUnit": "%",
                "delay": 200,
                "direction": "RIGHT",
                "effectIn": true
            },
            "createdOn": 1702977328858
        },
        "e-154": {
            "id": "e-154",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "SLIDE_EFFECT",
                "instant": false,
                "config": {
                    "actionListId": "slideInRight",
                    "autoStopEventId": "e-155"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "6576a80f86030ee5138ee988|2ca99ae1-a8e4-d92e-2c91-25f3abf16184",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "6576a80f86030ee5138ee988|2ca99ae1-a8e4-d92e-2c91-25f3abf16184",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 0,
                "scrollOffsetUnit": "%",
                "delay": 200,
                "direction": "RIGHT",
                "effectIn": true
            },
            "createdOn": 1702977335519
        },
        "e-156": {
            "id": "e-156",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-35",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-157"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "6576a80f86030ee5138ee988|8555c006-b386-6bba-5fd1-6c94fa0fe2b8",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "6576a80f86030ee5138ee988|8555c006-b386-6bba-5fd1-6c94fa0fe2b8",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 0,
                "scrollOffsetUnit": "%",
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1702983034193
        },
        "e-158": {
            "id": "e-158",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-35",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-159"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "6576a80f86030ee5138ee988|3da3f1fb-e97d-9ad1-1a4f-fe73db33f738",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "6576a80f86030ee5138ee988|3da3f1fb-e97d-9ad1-1a4f-fe73db33f738",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 0,
                "scrollOffsetUnit": "%",
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1702983358672
        },
        "e-160": {
            "id": "e-160",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "SLIDE_EFFECT",
                "instant": false,
                "config": {
                    "actionListId": "slideInBottom",
                    "autoStopEventId": "e-161"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "6576a80f86030ee5138ee988|98a59fa4-50ca-9893-2e94-a6d124020319",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "6576a80f86030ee5138ee988|98a59fa4-50ca-9893-2e94-a6d124020319",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 0,
                "scrollOffsetUnit": "%",
                "delay": 0,
                "direction": "BOTTOM",
                "effectIn": true
            },
            "createdOn": 1702987200609
        },
        "e-162": {
            "id": "e-162",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "SLIDE_EFFECT",
                "instant": false,
                "config": {
                    "actionListId": "slideInBottom",
                    "autoStopEventId": "e-163"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "6576a80f86030ee5138ee988|4d4d8311-4696-e826-4b40-097343b9ecaa",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "6576a80f86030ee5138ee988|4d4d8311-4696-e826-4b40-097343b9ecaa",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 0,
                "scrollOffsetUnit": "%",
                "delay": 100,
                "direction": "BOTTOM",
                "effectIn": true
            },
            "createdOn": 1702987229071
        },
        "e-164": {
            "id": "e-164",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "SLIDE_EFFECT",
                "instant": false,
                "config": {
                    "actionListId": "slideInBottom",
                    "autoStopEventId": "e-165"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "6576a80f86030ee5138ee988|ac98a171-2996-2277-58b7-a10921cc5391",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "6576a80f86030ee5138ee988|ac98a171-2996-2277-58b7-a10921cc5391",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 0,
                "scrollOffsetUnit": "%",
                "delay": 200,
                "direction": "BOTTOM",
                "effectIn": true
            },
            "createdOn": 1702987240403
        },
        "e-166": {
            "id": "e-166",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "SLIDE_EFFECT",
                "instant": false,
                "config": {
                    "actionListId": "slideInBottom",
                    "autoStopEventId": "e-167"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "2fc91300-3c28-44f5-3b9f-ef2c907ee614",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "2fc91300-3c28-44f5-3b9f-ef2c907ee614",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 0,
                "scrollOffsetUnit": "%",
                "delay": 0,
                "direction": "BOTTOM",
                "effectIn": true
            },
            "createdOn": 1702987348003
        },
        "e-168": {
            "id": "e-168",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "SLIDE_EFFECT",
                "instant": false,
                "config": {
                    "actionListId": "slideInBottom",
                    "autoStopEventId": "e-169"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "2fc91300-3c28-44f5-3b9f-ef2c907ee617",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "2fc91300-3c28-44f5-3b9f-ef2c907ee617",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 0,
                "scrollOffsetUnit": "%",
                "delay": 200,
                "direction": "BOTTOM",
                "effectIn": true
            },
            "createdOn": 1702987368742
        },
        "e-170": {
            "id": "e-170",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "SLIDE_EFFECT",
                "instant": false,
                "config": {
                    "actionListId": "slideInBottom",
                    "autoStopEventId": "e-171"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "2fc91300-3c28-44f5-3b9f-ef2c907ee61a",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "2fc91300-3c28-44f5-3b9f-ef2c907ee61a",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 0,
                "scrollOffsetUnit": "%",
                "delay": 300,
                "direction": "BOTTOM",
                "effectIn": true
            },
            "createdOn": 1702987379507
        },
        "e-172": {
            "id": "e-172",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "SLIDE_EFFECT",
                "instant": false,
                "config": {
                    "actionListId": "slideInBottom",
                    "autoStopEventId": "e-173"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "2fc91300-3c28-44f5-3b9f-ef2c907ee61d",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "2fc91300-3c28-44f5-3b9f-ef2c907ee61d",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 0,
                "scrollOffsetUnit": "%",
                "delay": 300,
                "direction": "BOTTOM",
                "effectIn": true
            },
            "createdOn": 1702987427407
        },
        "e-174": {
            "id": "e-174",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-36",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-175"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "2fc91300-3c28-44f5-3b9f-ef2c907ee61f",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "2fc91300-3c28-44f5-3b9f-ef2c907ee61f",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": true,
                "playInReverse": false,
                "scrollOffsetValue": 0,
                "scrollOffsetUnit": "%",
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1702987913076
        },
        "e-176": {
            "id": "e-176",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "PAGE_START",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-8",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-177"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "6576a80f86030ee5138ee988",
                "appliesTo": "PAGE",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "6576a80f86030ee5138ee988",
                "appliesTo": "PAGE",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1702990133901
        },
        "e-178": {
            "id": "e-178",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "SLIDE_EFFECT",
                "instant": false,
                "config": {
                    "actionListId": "slideInBottom",
                    "autoStopEventId": "e-179"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "656c23e118a42479510d6622|34f611e2-bb22-5a78-af3c-e9f39ba1f344",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "656c23e118a42479510d6622|34f611e2-bb22-5a78-af3c-e9f39ba1f344",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 10,
                "scrollOffsetUnit": "%",
                "delay": 0,
                "direction": "BOTTOM",
                "effectIn": true
            },
            "createdOn": 1702992270875
        },
        "e-180": {
            "id": "e-180",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "SLIDE_EFFECT",
                "instant": false,
                "config": {
                    "actionListId": "slideInBottom",
                    "autoStopEventId": "e-181"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "656c23e118a42479510d6622|c9bc2156-f860-415e-a405-2bb2d1eb347e",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "656c23e118a42479510d6622|c9bc2156-f860-415e-a405-2bb2d1eb347e",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 10,
                "scrollOffsetUnit": "%",
                "delay": 100,
                "direction": "BOTTOM",
                "effectIn": true
            },
            "createdOn": 1702992284718
        },
        "e-182": {
            "id": "e-182",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-37",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-183"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "656c23e118a42479510d6622|e7f2f64f-fe46-8fd0-990e-76036378dd76",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "656c23e118a42479510d6622|e7f2f64f-fe46-8fd0-990e-76036378dd76",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 0,
                "scrollOffsetUnit": "%",
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1702992412150
        },
        "e-184": {
            "id": "e-184",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-37",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-185"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "656c23e118a42479510d6622|75b8a4d8-5143-2367-8b64-2386b43b638b",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "656c23e118a42479510d6622|75b8a4d8-5143-2367-8b64-2386b43b638b",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 0,
                "scrollOffsetUnit": "%",
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1702992501563
        },
        "e-186": {
            "id": "e-186",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-37",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-187"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "656c23e118a42479510d6622|aaf5982f-dc24-5d14-d0b6-1b05e4f7968b",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "656c23e118a42479510d6622|aaf5982f-dc24-5d14-d0b6-1b05e4f7968b",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 0,
                "scrollOffsetUnit": "%",
                "delay": 0,
                "direction": "LEFT",
                "effectIn": true
            },
            "createdOn": 1702992511837
        },
        "e-188": {
            "id": "e-188",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-37",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-189"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "656c23e118a42479510d6622|22b4f390-c4c9-2303-b43d-4e6a0a4cce9e",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "656c23e118a42479510d6622|22b4f390-c4c9-2303-b43d-4e6a0a4cce9e",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 0,
                "scrollOffsetUnit": "%",
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1702996108097
        },
        "e-190": {
            "id": "e-190",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-37",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-191"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "656c23e118a42479510d6622|70e24d84-c57b-39a4-0215-5eaef344d23f",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "656c23e118a42479510d6622|70e24d84-c57b-39a4-0215-5eaef344d23f",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 0,
                "scrollOffsetUnit": "%",
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1702996109905
        },
        "e-192": {
            "id": "e-192",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "SLIDE_EFFECT",
                "instant": false,
                "config": {
                    "actionListId": "slideInBottom",
                    "autoStopEventId": "e-193"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "656c23e118a42479510d6622|07d22867-3820-f7d0-b9ba-5700b280ab28",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "656c23e118a42479510d6622|07d22867-3820-f7d0-b9ba-5700b280ab28",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 0,
                "scrollOffsetUnit": "%",
                "delay": 0,
                "direction": "BOTTOM",
                "effectIn": true
            },
            "createdOn": 1702996248670
        },
        "e-194": {
            "id": "e-194",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "SLIDE_EFFECT",
                "instant": false,
                "config": {
                    "actionListId": "slideInBottom",
                    "autoStopEventId": "e-195"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "656c23e118a42479510d6622|07d22867-3820-f7d0-b9ba-5700b280ab2b",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "656c23e118a42479510d6622|07d22867-3820-f7d0-b9ba-5700b280ab2b",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 0,
                "scrollOffsetUnit": "%",
                "delay": 100,
                "direction": "BOTTOM",
                "effectIn": true
            },
            "createdOn": 1702996259930
        },
        "e-196": {
            "id": "e-196",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "SLIDE_EFFECT",
                "instant": false,
                "config": {
                    "actionListId": "slideInBottom",
                    "autoStopEventId": "e-197"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "656c23e118a42479510d6622|39118c1a-18f3-e671-97af-42963092178e",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "656c23e118a42479510d6622|39118c1a-18f3-e671-97af-42963092178e",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 0,
                "scrollOffsetUnit": "%",
                "delay": 300,
                "direction": "BOTTOM",
                "effectIn": true
            },
            "createdOn": 1702996271230
        },
        "e-198": {
            "id": "e-198",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "SLIDE_EFFECT",
                "instant": false,
                "config": {
                    "actionListId": "slideInBottom",
                    "autoStopEventId": "e-199"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "1d03aa72-2262-611d-c8bb-c5fd7b444324",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "1d03aa72-2262-611d-c8bb-c5fd7b444324",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 0,
                "scrollOffsetUnit": "%",
                "delay": 200,
                "direction": "BOTTOM",
                "effectIn": true
            },
            "createdOn": 1702996304614
        },
        "e-200": {
            "id": "e-200",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "SLIDE_EFFECT",
                "instant": false,
                "config": {
                    "actionListId": "slideInTop",
                    "autoStopEventId": "e-201"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "71eb9efb-15c7-677b-dd8e-0148df990535",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "71eb9efb-15c7-677b-dd8e-0148df990535",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 0,
                "scrollOffsetUnit": "%",
                "delay": 0,
                "direction": "TOP",
                "effectIn": true
            },
            "createdOn": 1702996337946
        },
        "e-202": {
            "id": "e-202",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "SLIDE_EFFECT",
                "instant": false,
                "config": {
                    "actionListId": "slideInBottom",
                    "autoStopEventId": "e-203"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "87ad0436-b7ed-6bff-c08b-47514904a7e8",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "87ad0436-b7ed-6bff-c08b-47514904a7e8",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 0,
                "scrollOffsetUnit": "%",
                "delay": 0,
                "direction": "BOTTOM",
                "effectIn": true
            },
            "createdOn": 1702996502410
        },
        "e-204": {
            "id": "e-204",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "SLIDE_EFFECT",
                "instant": false,
                "config": {
                    "actionListId": "slideInBottom",
                    "autoStopEventId": "e-205"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "87ad0436-b7ed-6bff-c08b-47514904a7eb",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "87ad0436-b7ed-6bff-c08b-47514904a7eb",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 0,
                "scrollOffsetUnit": "%",
                "delay": 100,
                "direction": "BOTTOM",
                "effectIn": true
            },
            "createdOn": 1702996513579
        },
        "e-206": {
            "id": "e-206",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-38",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-207"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "87ad0436-b7ed-6bff-c08b-47514904a7ef",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "87ad0436-b7ed-6bff-c08b-47514904a7ef",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 0,
                "scrollOffsetUnit": "%",
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1702996546857
        },
        "e-208": {
            "id": "e-208",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "SLIDE_EFFECT",
                "instant": false,
                "config": {
                    "actionListId": "slideInBottom",
                    "autoStopEventId": "e-209"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "656c23e118a42479510d6622|fc65954b-377f-aa4f-240c-c69cf02d994c",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "656c23e118a42479510d6622|fc65954b-377f-aa4f-240c-c69cf02d994c",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 0,
                "scrollOffsetUnit": "%",
                "delay": 0,
                "direction": "BOTTOM",
                "effectIn": true
            },
            "createdOn": 1702996890356
        },
        "e-210": {
            "id": "e-210",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "SLIDE_EFFECT",
                "instant": false,
                "config": {
                    "actionListId": "slideInBottom",
                    "autoStopEventId": "e-211"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "656c23e118a42479510d6622|fc65954b-377f-aa4f-240c-c69cf02d994f",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "656c23e118a42479510d6622|fc65954b-377f-aa4f-240c-c69cf02d994f",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 0,
                "scrollOffsetUnit": "%",
                "delay": 100,
                "direction": "BOTTOM",
                "effectIn": true
            },
            "createdOn": 1702996900667
        },
        "e-212": {
            "id": "e-212",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "SLIDE_EFFECT",
                "instant": false,
                "config": {
                    "actionListId": "slideInBottom",
                    "autoStopEventId": "e-213"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "18b7aac3-bd30-619f-e4e0-ba880e01e61b",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "18b7aac3-bd30-619f-e4e0-ba880e01e61b",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 0,
                "scrollOffsetUnit": "%",
                "delay": 0,
                "direction": "BOTTOM",
                "effectIn": true
            },
            "createdOn": 1702997225174
        },
        "e-214": {
            "id": "e-214",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "SLIDE_EFFECT",
                "instant": false,
                "config": {
                    "actionListId": "slideInBottom",
                    "autoStopEventId": "e-215"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "18b7aac3-bd30-619f-e4e0-ba880e01e61e",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "18b7aac3-bd30-619f-e4e0-ba880e01e61e",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 0,
                "scrollOffsetUnit": "%",
                "delay": 100,
                "direction": "BOTTOM",
                "effectIn": true
            },
            "createdOn": 1702997236618
        },
        "e-216": {
            "id": "e-216",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "SLIDE_EFFECT",
                "instant": false,
                "config": {
                    "actionListId": "slideInBottom",
                    "autoStopEventId": "e-217"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "18b7aac3-bd30-619f-e4e0-ba880e01e623",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "18b7aac3-bd30-619f-e4e0-ba880e01e623",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 0,
                "scrollOffsetUnit": "%",
                "delay": 200,
                "direction": "BOTTOM",
                "effectIn": true
            },
            "createdOn": 1702997252062
        },
        "e-218": {
            "id": "e-218",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "SLIDE_EFFECT",
                "instant": false,
                "config": {
                    "actionListId": "slideInBottom",
                    "autoStopEventId": "e-219"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "18b7aac3-bd30-619f-e4e0-ba880e01e62b",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "18b7aac3-bd30-619f-e4e0-ba880e01e62b",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 0,
                "scrollOffsetUnit": "%",
                "delay": 100,
                "direction": "BOTTOM",
                "effectIn": true
            },
            "createdOn": 1702997280103
        },
        "e-220": {
            "id": "e-220",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "SLIDE_EFFECT",
                "instant": false,
                "config": {
                    "actionListId": "slideInBottom",
                    "autoStopEventId": "e-221"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "18b7aac3-bd30-619f-e4e0-ba880e01e632",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "18b7aac3-bd30-619f-e4e0-ba880e01e632",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 0,
                "scrollOffsetUnit": "%",
                "delay": 200,
                "direction": "BOTTOM",
                "effectIn": true
            },
            "createdOn": 1702997291526
        },
        "e-222": {
            "id": "e-222",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "SLIDE_EFFECT",
                "instant": false,
                "config": {
                    "actionListId": "slideInBottom",
                    "autoStopEventId": "e-223"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "18b7aac3-bd30-619f-e4e0-ba880e01e636",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "18b7aac3-bd30-619f-e4e0-ba880e01e636",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 0,
                "scrollOffsetUnit": "%",
                "delay": 100,
                "direction": "BOTTOM",
                "effectIn": true
            },
            "createdOn": 1702997303821
        },
        "e-224": {
            "id": "e-224",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "SLIDE_EFFECT",
                "instant": false,
                "config": {
                    "actionListId": "slideInBottom",
                    "autoStopEventId": "e-225"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "18b7aac3-bd30-619f-e4e0-ba880e01e63d",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "18b7aac3-bd30-619f-e4e0-ba880e01e63d",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 0,
                "scrollOffsetUnit": "%",
                "delay": 200,
                "direction": "BOTTOM",
                "effectIn": true
            },
            "createdOn": 1702997318824
        },
        "e-226": {
            "id": "e-226",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "SLIDE_EFFECT",
                "instant": false,
                "config": {
                    "actionListId": "slideInBottom",
                    "autoStopEventId": "e-227"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "656c23e118a42479510d6622|f732c4fa-dd67-5c31-3ebd-a24a6dfda5ab",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "656c23e118a42479510d6622|f732c4fa-dd67-5c31-3ebd-a24a6dfda5ab",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 0,
                "scrollOffsetUnit": "%",
                "delay": 0,
                "direction": "BOTTOM",
                "effectIn": true
            },
            "createdOn": 1702997363220
        },
        "e-228": {
            "id": "e-228",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "SLIDE_EFFECT",
                "instant": false,
                "config": {
                    "actionListId": "slideInBottom",
                    "autoStopEventId": "e-229"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "656c23e118a42479510d6622|37301518-6bcb-07e4-e9d1-c31259435e10",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "656c23e118a42479510d6622|37301518-6bcb-07e4-e9d1-c31259435e10",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 0,
                "scrollOffsetUnit": "%",
                "delay": 400,
                "direction": "BOTTOM",
                "effectIn": true
            },
            "createdOn": 1702997403048
        },
        "e-230": {
            "id": "e-230",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "SLIDE_EFFECT",
                "instant": false,
                "config": {
                    "actionListId": "slideInBottom",
                    "autoStopEventId": "e-231"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "0e86676e-731e-c053-e9c2-05912aa2bdb0",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "0e86676e-731e-c053-e9c2-05912aa2bdb0",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 0,
                "scrollOffsetUnit": "%",
                "delay": 300,
                "direction": "BOTTOM",
                "effectIn": true
            },
            "createdOn": 1703040087129
        },
        "e-232": {
            "id": "e-232",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "SLIDE_EFFECT",
                "instant": false,
                "config": {
                    "actionListId": "slideInTop",
                    "autoStopEventId": "e-233"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "841439dd-6eb2-3616-23ba-4ba9ea7d15ba",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "841439dd-6eb2-3616-23ba-4ba9ea7d15ba",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 0,
                "scrollOffsetUnit": "%",
                "delay": 0,
                "direction": "TOP",
                "effectIn": true
            },
            "createdOn": 1703040103565
        },
        "e-234": {
            "id": "e-234",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "SLIDE_EFFECT",
                "instant": false,
                "config": {
                    "actionListId": "slideInLeft",
                    "autoStopEventId": "e-235"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "87ad0436-b7ed-6bff-c08b-47514904a7f2",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "87ad0436-b7ed-6bff-c08b-47514904a7f2",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 0,
                "scrollOffsetUnit": "%",
                "delay": 0,
                "direction": "LEFT",
                "effectIn": true
            },
            "createdOn": 1703040537637
        },
        "e-236": {
            "id": "e-236",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "SLIDE_EFFECT",
                "instant": false,
                "config": {
                    "actionListId": "slideInLeft",
                    "autoStopEventId": "e-237"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "87ad0436-b7ed-6bff-c08b-47514904a7f7",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "87ad0436-b7ed-6bff-c08b-47514904a7f7",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 0,
                "scrollOffsetUnit": "%",
                "delay": 0,
                "direction": "LEFT",
                "effectIn": true
            },
            "createdOn": 1703040548760
        },
        "e-238": {
            "id": "e-238",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "SLIDE_EFFECT",
                "instant": false,
                "config": {
                    "actionListId": "slideInLeft",
                    "autoStopEventId": "e-239"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "87ad0436-b7ed-6bff-c08b-47514904a7fc",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "87ad0436-b7ed-6bff-c08b-47514904a7fc",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 0,
                "scrollOffsetUnit": "%",
                "delay": 0,
                "direction": "LEFT",
                "effectIn": true
            },
            "createdOn": 1703040554964
        },
        "e-240": {
            "id": "e-240",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "SLIDE_EFFECT",
                "instant": false,
                "config": {
                    "actionListId": "slideInLeft",
                    "autoStopEventId": "e-241"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "87ad0436-b7ed-6bff-c08b-47514904a7f9",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "87ad0436-b7ed-6bff-c08b-47514904a7f9",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 0,
                "scrollOffsetUnit": "%",
                "delay": 100,
                "direction": "LEFT",
                "effectIn": true
            },
            "createdOn": 1703040560156
        },
        "e-242": {
            "id": "e-242",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "SLIDE_EFFECT",
                "instant": false,
                "config": {
                    "actionListId": "slideInLeft",
                    "autoStopEventId": "e-243"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "87ad0436-b7ed-6bff-c08b-47514904a7ff",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "87ad0436-b7ed-6bff-c08b-47514904a7ff",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 0,
                "scrollOffsetUnit": "%",
                "delay": 100,
                "direction": "LEFT",
                "effectIn": true
            },
            "createdOn": 1703040568738
        },
        "e-244": {
            "id": "e-244",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "SLIDE_EFFECT",
                "instant": false,
                "config": {
                    "actionListId": "slideInLeft",
                    "autoStopEventId": "e-245"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "87ad0436-b7ed-6bff-c08b-47514904a802",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "87ad0436-b7ed-6bff-c08b-47514904a802",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 0,
                "scrollOffsetUnit": "%",
                "delay": 200,
                "direction": "LEFT",
                "effectIn": true
            },
            "createdOn": 1703040582003
        },
        "e-248": {
            "id": "e-248",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "SLIDE_EFFECT",
                "instant": false,
                "config": {
                    "actionListId": "slideInLeft",
                    "autoStopEventId": "e-249"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "34ea65b6-6cf4-1158-6162-aa761899e567",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "34ea65b6-6cf4-1158-6162-aa761899e567",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 0,
                "scrollOffsetUnit": "%",
                "delay": 200,
                "direction": "LEFT",
                "effectIn": true
            },
            "createdOn": 1703040609805
        },
        "e-250": {
            "id": "e-250",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "SLIDE_EFFECT",
                "instant": false,
                "config": {
                    "actionListId": "slideInLeft",
                    "autoStopEventId": "e-251"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "416d70f7-378a-5758-97e6-199e4c33fa9b",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "416d70f7-378a-5758-97e6-199e4c33fa9b",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 0,
                "scrollOffsetUnit": "%",
                "delay": 200,
                "direction": "LEFT",
                "effectIn": true
            },
            "createdOn": 1703040610574
        },
        "e-252": {
            "id": "e-252",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "SLIDE_EFFECT",
                "instant": false,
                "config": {
                    "actionListId": "slideInBottom",
                    "autoStopEventId": "e-253"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "18d9f26b-542c-2181-5c02-17497efd4943",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "18d9f26b-542c-2181-5c02-17497efd4943",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 0,
                "scrollOffsetUnit": "%",
                "delay": 100,
                "direction": "BOTTOM",
                "effectIn": true
            },
            "createdOn": 1703040736910
        },
        "e-254": {
            "id": "e-254",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-37",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-255"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "87ad0436-b7ed-6bff-c08b-47514904a807",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "87ad0436-b7ed-6bff-c08b-47514904a807",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 0,
                "scrollOffsetUnit": "%",
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1703041316302
        },
        "e-256": {
            "id": "e-256",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "SLIDE_EFFECT",
                "instant": false,
                "config": {
                    "actionListId": "slideInBottom",
                    "autoStopEventId": "e-257"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "656c23e118a42479510d6622|e9080c7b-642b-93de-40fe-4df74d32de80",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "656c23e118a42479510d6622|e9080c7b-642b-93de-40fe-4df74d32de80",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 0,
                "scrollOffsetUnit": "%",
                "delay": 200,
                "direction": "BOTTOM",
                "effectIn": true
            },
            "createdOn": 1703042111497
        },
        "e-258": {
            "id": "e-258",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "SLIDE_EFFECT",
                "instant": false,
                "config": {
                    "actionListId": "slideInBottom",
                    "autoStopEventId": "e-259"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "656c23e118a42479510d6622|fb1a8507-d2dc-e5ab-d063-75e8ae44298d",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "656c23e118a42479510d6622|fb1a8507-d2dc-e5ab-d063-75e8ae44298d",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 0,
                "scrollOffsetUnit": "%",
                "delay": 300,
                "direction": "BOTTOM",
                "effectIn": true
            },
            "createdOn": 1703042127417
        },
        "e-260": {
            "id": "e-260",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "MOUSE_OVER",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-39",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-261"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "656c23e118a42479510d6622|8c22023c-c2e7-f24e-757b-f626aed5db31",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "656c23e118a42479510d6622|8c22023c-c2e7-f24e-757b-f626aed5db31",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1703042741940
        },
        "e-261": {
            "id": "e-261",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "MOUSE_OUT",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-40",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-260"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "656c23e118a42479510d6622|8c22023c-c2e7-f24e-757b-f626aed5db31",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "656c23e118a42479510d6622|8c22023c-c2e7-f24e-757b-f626aed5db31",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1703042741947
        },
        "e-262": {
            "id": "e-262",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "MOUSE_OVER",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-39",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-263"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "656c23e118a42479510d6622|aa8aa1f8-a053-2180-fbb8-7f9b4eb34b94",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "656c23e118a42479510d6622|aa8aa1f8-a053-2180-fbb8-7f9b4eb34b94",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1703042924119
        },
        "e-263": {
            "id": "e-263",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "MOUSE_OUT",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-40",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-262"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "656c23e118a42479510d6622|aa8aa1f8-a053-2180-fbb8-7f9b4eb34b94",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "656c23e118a42479510d6622|aa8aa1f8-a053-2180-fbb8-7f9b4eb34b94",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1703042924119
        },
        "e-264": {
            "id": "e-264",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "MOUSE_OVER",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-39",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-265"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "656c23e118a42479510d6622|111c672a-1501-dc45-a81d-4d427b783743",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "656c23e118a42479510d6622|111c672a-1501-dc45-a81d-4d427b783743",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1703042928773
        },
        "e-265": {
            "id": "e-265",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "MOUSE_OUT",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-40",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-264"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "656c23e118a42479510d6622|111c672a-1501-dc45-a81d-4d427b783743",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "656c23e118a42479510d6622|111c672a-1501-dc45-a81d-4d427b783743",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1703042928773
        },
        "e-266": {
            "id": "e-266",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "MOUSE_OVER",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-39",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-267"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "656c23e118a42479510d6622|5edf18dc-2b46-8d5a-381d-0f7bc44f0bec",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "656c23e118a42479510d6622|5edf18dc-2b46-8d5a-381d-0f7bc44f0bec",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1703042996015
        },
        "e-267": {
            "id": "e-267",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "MOUSE_OUT",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-40",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-266"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "656c23e118a42479510d6622|5edf18dc-2b46-8d5a-381d-0f7bc44f0bec",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "656c23e118a42479510d6622|5edf18dc-2b46-8d5a-381d-0f7bc44f0bec",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1703042996015
        },
        "e-268": {
            "id": "e-268",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "MOUSE_OVER",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-39",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-269"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "656c23e118a42479510d6622|7a5eaf4c-4e08-3c94-4d5b-39a838f5f9e0",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "656c23e118a42479510d6622|7a5eaf4c-4e08-3c94-4d5b-39a838f5f9e0",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1703043004036
        },
        "e-269": {
            "id": "e-269",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "MOUSE_OUT",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-40",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-268"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "656c23e118a42479510d6622|7a5eaf4c-4e08-3c94-4d5b-39a838f5f9e0",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "656c23e118a42479510d6622|7a5eaf4c-4e08-3c94-4d5b-39a838f5f9e0",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1703043004036
        },
        "e-270": {
            "id": "e-270",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "MOUSE_OVER",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-39",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-271"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "656c23e118a42479510d6622|a97cc1c5-cb4d-0e4a-5b33-c6ad547092fa",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "656c23e118a42479510d6622|a97cc1c5-cb4d-0e4a-5b33-c6ad547092fa",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1703043020015
        },
        "e-271": {
            "id": "e-271",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "MOUSE_OUT",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-40",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-270"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "656c23e118a42479510d6622|a97cc1c5-cb4d-0e4a-5b33-c6ad547092fa",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "656c23e118a42479510d6622|a97cc1c5-cb4d-0e4a-5b33-c6ad547092fa",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1703043020015
        },
        "e-272": {
            "id": "e-272",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "SLIDE_EFFECT",
                "instant": false,
                "config": {
                    "actionListId": "slideInBottom",
                    "autoStopEventId": "e-273"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "dd194c60-e362-5640-7fe6-f245b911fe7d",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "dd194c60-e362-5640-7fe6-f245b911fe7d",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 0,
                "scrollOffsetUnit": "%",
                "delay": 0,
                "direction": "BOTTOM",
                "effectIn": true
            },
            "createdOn": 1703043401010
        },
        "e-274": {
            "id": "e-274",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "SLIDE_EFFECT",
                "instant": false,
                "config": {
                    "actionListId": "slideInBottom",
                    "autoStopEventId": "e-275"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "dd194c60-e362-5640-7fe6-f245b911fe80",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "dd194c60-e362-5640-7fe6-f245b911fe80",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 0,
                "scrollOffsetUnit": "%",
                "delay": 100,
                "direction": "BOTTOM",
                "effectIn": true
            },
            "createdOn": 1703043413304
        },
        "e-276": {
            "id": "e-276",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "SLIDE_EFFECT",
                "instant": false,
                "config": {
                    "actionListId": "slideInBottom",
                    "autoStopEventId": "e-277"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "6577c717104d506b0af71ab4|11f54b77-10ea-4c48-4af4-bba43c80f3db",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "6577c717104d506b0af71ab4|11f54b77-10ea-4c48-4af4-bba43c80f3db",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 0,
                "scrollOffsetUnit": "%",
                "delay": 0,
                "direction": "BOTTOM",
                "effectIn": true
            },
            "createdOn": 1703044342928
        },
        "e-278": {
            "id": "e-278",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "SLIDE_EFFECT",
                "instant": false,
                "config": {
                    "actionListId": "slideInBottom",
                    "autoStopEventId": "e-279"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "6577c717104d506b0af71ab4|11f54b77-10ea-4c48-4af4-bba43c80f3de",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "6577c717104d506b0af71ab4|11f54b77-10ea-4c48-4af4-bba43c80f3de",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 0,
                "scrollOffsetUnit": "%",
                "delay": 100,
                "direction": "BOTTOM",
                "effectIn": true
            },
            "createdOn": 1703044355127
        },
        "e-282": {
            "id": "e-282",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "GROW_EFFECT",
                "instant": false,
                "config": {
                    "actionListId": "growIn",
                    "autoStopEventId": "e-283"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "6577c717104d506b0af71ab4|11f54b77-10ea-4c48-4af4-bba43c80f3ee",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "6577c717104d506b0af71ab4|11f54b77-10ea-4c48-4af4-bba43c80f3ee",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 30,
                "scrollOffsetUnit": "%",
                "delay": 300,
                "direction": null,
                "effectIn": true
            },
            "createdOn": 1703044389050
        },
        "e-284": {
            "id": "e-284",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "SLIDE_EFFECT",
                "instant": false,
                "config": {
                    "actionListId": "slideInRight",
                    "autoStopEventId": "e-285"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "6577c717104d506b0af71ab4|a9025247-d486-c27d-e73f-6b107ac32a28",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "6577c717104d506b0af71ab4|a9025247-d486-c27d-e73f-6b107ac32a28",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 0,
                "scrollOffsetUnit": "%",
                "delay": 100,
                "direction": "RIGHT",
                "effectIn": true
            },
            "createdOn": 1703044428576
        },
        "e-286": {
            "id": "e-286",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "SLIDE_EFFECT",
                "instant": false,
                "config": {
                    "actionListId": "slideInRight",
                    "autoStopEventId": "e-287"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "6577c717104d506b0af71ab4|c31ef36b-05c3-7164-8dcd-528e57028c41",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "6577c717104d506b0af71ab4|c31ef36b-05c3-7164-8dcd-528e57028c41",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 0,
                "scrollOffsetUnit": "%",
                "delay": 200,
                "direction": "RIGHT",
                "effectIn": true
            },
            "createdOn": 1703044438105
        },
        "e-288": {
            "id": "e-288",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "SLIDE_EFFECT",
                "instant": false,
                "config": {
                    "actionListId": "slideInBottom",
                    "autoStopEventId": "e-289"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "6577c717104d506b0af71ab4|506fa57e-e488-5f94-3434-ff282a8ef9b3",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "6577c717104d506b0af71ab4|506fa57e-e488-5f94-3434-ff282a8ef9b3",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 0,
                "scrollOffsetUnit": "%",
                "delay": 100,
                "direction": "BOTTOM",
                "effectIn": true
            },
            "createdOn": 1703044460662
        },
        "e-290": {
            "id": "e-290",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "SLIDE_EFFECT",
                "instant": false,
                "config": {
                    "actionListId": "slideInBottom",
                    "autoStopEventId": "e-291"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "6577c717104d506b0af71ab4|506fa57e-e488-5f94-3434-ff282a8ef9b6",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "6577c717104d506b0af71ab4|506fa57e-e488-5f94-3434-ff282a8ef9b6",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 0,
                "scrollOffsetUnit": "%",
                "delay": 200,
                "direction": "BOTTOM",
                "effectIn": true
            },
            "createdOn": 1703044474840
        },
        "e-292": {
            "id": "e-292",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "SLIDE_EFFECT",
                "instant": false,
                "config": {
                    "actionListId": "slideInBottom",
                    "autoStopEventId": "e-293"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "6577c717104d506b0af71ab4|2c51beb3-9aee-4765-1363-715fde91d048",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "6577c717104d506b0af71ab4|2c51beb3-9aee-4765-1363-715fde91d048",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 0,
                "scrollOffsetUnit": "%",
                "delay": 0,
                "direction": "BOTTOM",
                "effectIn": true
            },
            "createdOn": 1703050238286
        },
        "e-294": {
            "id": "e-294",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "SLIDE_EFFECT",
                "instant": false,
                "config": {
                    "actionListId": "slideInBottom",
                    "autoStopEventId": "e-295"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "6577c717104d506b0af71ab4|2c51beb3-9aee-4765-1363-715fde91d04b",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "6577c717104d506b0af71ab4|2c51beb3-9aee-4765-1363-715fde91d04b",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 0,
                "scrollOffsetUnit": "%",
                "delay": 100,
                "direction": "BOTTOM",
                "effectIn": true
            },
            "createdOn": 1703050257293
        },
        "e-296": {
            "id": "e-296",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-35",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-297"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "6577c717104d506b0af71ab4|df23b8b0-5420-fd9a-51b6-a6156c8bdedf",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "6577c717104d506b0af71ab4|df23b8b0-5420-fd9a-51b6-a6156c8bdedf",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 0,
                "scrollOffsetUnit": "%",
                "delay": 0,
                "direction": "LEFT",
                "effectIn": true
            },
            "createdOn": 1703050364513
        },
        "e-298": {
            "id": "e-298",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "MOUSE_OVER",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-41",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-299"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "6577c717104d506b0af71ab4|5c627037-e3b1-14e9-6605-3ca76f5ab101",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "6577c717104d506b0af71ab4|5c627037-e3b1-14e9-6605-3ca76f5ab101",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": 0,
                "direction": "LEFT",
                "effectIn": true
            },
            "createdOn": 1703051398880
        },
        "e-299": {
            "id": "e-299",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "MOUSE_OUT",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-42",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-298"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "6577c717104d506b0af71ab4|5c627037-e3b1-14e9-6605-3ca76f5ab101",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "6577c717104d506b0af71ab4|5c627037-e3b1-14e9-6605-3ca76f5ab101",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1703051398922
        },
        "e-300": {
            "id": "e-300",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "SLIDE_EFFECT",
                "instant": false,
                "config": {
                    "actionListId": "slideInRight",
                    "autoStopEventId": "e-301"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "6577c717104d506b0af71ab4|4ba6bf2b-2c3f-8ff2-452b-2fc07b616822",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "6577c717104d506b0af71ab4|4ba6bf2b-2c3f-8ff2-452b-2fc07b616822",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 0,
                "scrollOffsetUnit": "%",
                "delay": 0,
                "direction": "RIGHT",
                "effectIn": true
            },
            "createdOn": 1703051529440
        },
        "e-302": {
            "id": "e-302",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "SLIDE_EFFECT",
                "instant": false,
                "config": {
                    "actionListId": "slideInLeft",
                    "autoStopEventId": "e-303"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "6577c717104d506b0af71ab4|4ba6bf2b-2c3f-8ff2-452b-2fc07b616824",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "6577c717104d506b0af71ab4|4ba6bf2b-2c3f-8ff2-452b-2fc07b616824",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 0,
                "scrollOffsetUnit": "%",
                "delay": 100,
                "direction": "LEFT",
                "effectIn": true
            },
            "createdOn": 1703051543508
        },
        "e-304": {
            "id": "e-304",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "SLIDE_EFFECT",
                "instant": false,
                "config": {
                    "actionListId": "slideInLeft",
                    "autoStopEventId": "e-305"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "6577c717104d506b0af71ab4|4ba6bf2b-2c3f-8ff2-452b-2fc07b616828",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "6577c717104d506b0af71ab4|4ba6bf2b-2c3f-8ff2-452b-2fc07b616828",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 0,
                "scrollOffsetUnit": "%",
                "delay": 0,
                "direction": "LEFT",
                "effectIn": true
            },
            "createdOn": 1703051551565
        },
        "e-306": {
            "id": "e-306",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "SLIDE_EFFECT",
                "instant": false,
                "config": {
                    "actionListId": "slideInRight",
                    "autoStopEventId": "e-307"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "6577c717104d506b0af71ab4|4ba6bf2b-2c3f-8ff2-452b-2fc07b61682b",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "6577c717104d506b0af71ab4|4ba6bf2b-2c3f-8ff2-452b-2fc07b61682b",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 0,
                "scrollOffsetUnit": "%",
                "delay": 100,
                "direction": "RIGHT",
                "effectIn": true
            },
            "createdOn": 1703051574463
        },
        "e-308": {
            "id": "e-308",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "SLIDE_EFFECT",
                "instant": false,
                "config": {
                    "actionListId": "slideInRight",
                    "autoStopEventId": "e-309"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "6577c717104d506b0af71ab4|4ba6bf2b-2c3f-8ff2-452b-2fc07b61682f",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "6577c717104d506b0af71ab4|4ba6bf2b-2c3f-8ff2-452b-2fc07b61682f",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 0,
                "scrollOffsetUnit": "%",
                "delay": 200,
                "direction": "RIGHT",
                "effectIn": true
            },
            "createdOn": 1703051583991
        },
        "e-310": {
            "id": "e-310",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "SLIDE_EFFECT",
                "instant": false,
                "config": {
                    "actionListId": "slideInRight",
                    "autoStopEventId": "e-311"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "6577c717104d506b0af71ab4|4ba6bf2b-2c3f-8ff2-452b-2fc07b616833",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "6577c717104d506b0af71ab4|4ba6bf2b-2c3f-8ff2-452b-2fc07b616833",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 0,
                "scrollOffsetUnit": "%",
                "delay": 300,
                "direction": "RIGHT",
                "effectIn": true
            },
            "createdOn": 1703051594126
        },
        "e-312": {
            "id": "e-312",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "SLIDE_EFFECT",
                "instant": false,
                "config": {
                    "actionListId": "slideInRight",
                    "autoStopEventId": "e-313"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "6577c717104d506b0af71ab4|4ba6bf2b-2c3f-8ff2-452b-2fc07b616837",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "6577c717104d506b0af71ab4|4ba6bf2b-2c3f-8ff2-452b-2fc07b616837",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 0,
                "scrollOffsetUnit": "%",
                "delay": 400,
                "direction": "RIGHT",
                "effectIn": true
            },
            "createdOn": 1703051602688
        },
        "e-314": {
            "id": "e-314",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "SLIDE_EFFECT",
                "instant": false,
                "config": {
                    "actionListId": "slideInRight",
                    "autoStopEventId": "e-315"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "6577c717104d506b0af71ab4|f4c0c8de-edff-7cc1-3a2e-f346a425a235",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "6577c717104d506b0af71ab4|f4c0c8de-edff-7cc1-3a2e-f346a425a235",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 0,
                "scrollOffsetUnit": "%",
                "delay": 500,
                "direction": "RIGHT",
                "effectIn": true
            },
            "createdOn": 1703051655180
        },
        "e-316": {
            "id": "e-316",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "SLIDE_EFFECT",
                "instant": false,
                "config": {
                    "actionListId": "slideInBottom",
                    "autoStopEventId": "e-317"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "6577f7afd7a548f5cf7b0507|fa8b7c70-9811-7732-90d5-e73a191563f4",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "6577f7afd7a548f5cf7b0507|fa8b7c70-9811-7732-90d5-e73a191563f4",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 0,
                "scrollOffsetUnit": "%",
                "delay": 0,
                "direction": "BOTTOM",
                "effectIn": true
            },
            "createdOn": 1703052276171
        },
        "e-318": {
            "id": "e-318",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "SLIDE_EFFECT",
                "instant": false,
                "config": {
                    "actionListId": "slideInBottom",
                    "autoStopEventId": "e-319"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "6577f7afd7a548f5cf7b0507|fa8b7c70-9811-7732-90d5-e73a191563f7",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "6577f7afd7a548f5cf7b0507|fa8b7c70-9811-7732-90d5-e73a191563f7",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 0,
                "scrollOffsetUnit": "%",
                "delay": 100,
                "direction": "BOTTOM",
                "effectIn": true
            },
            "createdOn": 1703052284336
        },
        "e-320": {
            "id": "e-320",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "SLIDE_EFFECT",
                "instant": false,
                "config": {
                    "actionListId": "slideInBottom",
                    "autoStopEventId": "e-321"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "6578065f8c7edcefb0ff00da|20c7ca00-5caf-d83c-bec6-092c34643616",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "6578065f8c7edcefb0ff00da|20c7ca00-5caf-d83c-bec6-092c34643616",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 0,
                "scrollOffsetUnit": "%",
                "delay": 0,
                "direction": "BOTTOM",
                "effectIn": true
            },
            "createdOn": 1703052446260
        },
        "e-322": {
            "id": "e-322",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "SLIDE_EFFECT",
                "instant": false,
                "config": {
                    "actionListId": "slideInBottom",
                    "autoStopEventId": "e-323"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "6578065f8c7edcefb0ff00da|a6b99d0e-c785-674b-b399-155f2aa91476",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "6578065f8c7edcefb0ff00da|a6b99d0e-c785-674b-b399-155f2aa91476",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 0,
                "scrollOffsetUnit": "%",
                "delay": 100,
                "direction": "BOTTOM",
                "effectIn": true
            },
            "createdOn": 1703052504665
        },
        "e-324": {
            "id": "e-324",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "SLIDE_EFFECT",
                "instant": false,
                "config": {
                    "actionListId": "slideInBottom",
                    "autoStopEventId": "e-325"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "6578065f8c7edcefb0ff00da|79ced643-e2e3-488f-62fe-2e37d924412c",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "6578065f8c7edcefb0ff00da|79ced643-e2e3-488f-62fe-2e37d924412c",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 0,
                "scrollOffsetUnit": "%",
                "delay": 300,
                "direction": "BOTTOM",
                "effectIn": true
            },
            "createdOn": 1703052516204
        },
        "e-326": {
            "id": "e-326",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "SLIDE_EFFECT",
                "instant": false,
                "config": {
                    "actionListId": "slideInBottom",
                    "autoStopEventId": "e-327"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "6578065f8c7edcefb0ff00da|23088714-ef23-d939-d188-9ac2c54e20d3",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "6578065f8c7edcefb0ff00da|23088714-ef23-d939-d188-9ac2c54e20d3",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 0,
                "scrollOffsetUnit": "%",
                "delay": 400,
                "direction": "BOTTOM",
                "effectIn": true
            },
            "createdOn": 1703052526393
        },
        "e-328": {
            "id": "e-328",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "SLIDE_EFFECT",
                "instant": false,
                "config": {
                    "actionListId": "slideInLeft",
                    "autoStopEventId": "e-329"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "65783495b9c3563f9e8ee9ed|d9e024b9-5de1-e9bb-251d-c860ff0d7330",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "65783495b9c3563f9e8ee9ed|d9e024b9-5de1-e9bb-251d-c860ff0d7330",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 0,
                "scrollOffsetUnit": "%",
                "delay": 0,
                "direction": "LEFT",
                "effectIn": true
            },
            "createdOn": 1703053222336
        },
        "e-330": {
            "id": "e-330",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "SLIDE_EFFECT",
                "instant": false,
                "config": {
                    "actionListId": "slideInBottom",
                    "autoStopEventId": "e-331"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "65783495b9c3563f9e8ee9ed|b85c3e56-a90a-ffd2-08f4-378d0a276c9e",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "65783495b9c3563f9e8ee9ed|b85c3e56-a90a-ffd2-08f4-378d0a276c9e",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 0,
                "scrollOffsetUnit": "%",
                "delay": 100,
                "direction": "BOTTOM",
                "effectIn": true
            },
            "createdOn": 1703053253533
        },
        "e-332": {
            "id": "e-332",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "SLIDE_EFFECT",
                "instant": false,
                "config": {
                    "actionListId": "slideInBottom",
                    "autoStopEventId": "e-333"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "65783495b9c3563f9e8ee9ed|0b8217b4-1e5c-03cf-473a-749e449df080",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "65783495b9c3563f9e8ee9ed|0b8217b4-1e5c-03cf-473a-749e449df080",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 0,
                "scrollOffsetUnit": "%",
                "delay": 200,
                "direction": "BOTTOM",
                "effectIn": true
            },
            "createdOn": 1703053266027
        },
        "e-336": {
            "id": "e-336",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "SLIDE_EFFECT",
                "instant": false,
                "config": {
                    "actionListId": "slideInTop",
                    "autoStopEventId": "e-337"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "65783495b9c3563f9e8ee9ed|b85c3e56-a90a-ffd2-08f4-378d0a276c9c",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "65783495b9c3563f9e8ee9ed|b85c3e56-a90a-ffd2-08f4-378d0a276c9c",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 0,
                "scrollOffsetUnit": "%",
                "delay": 0,
                "direction": "TOP",
                "effectIn": true
            },
            "createdOn": 1703053351601
        },
        "e-338": {
            "id": "e-338",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "SLIDE_EFFECT",
                "instant": false,
                "config": {
                    "actionListId": "slideInTop",
                    "autoStopEventId": "e-339"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "65783495b9c3563f9e8ee9ed|b85c3e56-a90a-ffd2-08f4-378d0a276ca1",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "65783495b9c3563f9e8ee9ed|b85c3e56-a90a-ffd2-08f4-378d0a276ca1",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 0,
                "scrollOffsetUnit": "%",
                "delay": 0,
                "direction": "TOP",
                "effectIn": true
            },
            "createdOn": 1703053361038
        },
        "e-340": {
            "id": "e-340",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "SLIDE_EFFECT",
                "instant": false,
                "config": {
                    "actionListId": "slideInTop",
                    "autoStopEventId": "e-341"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "65783495b9c3563f9e8ee9ed|b85c3e56-a90a-ffd2-08f4-378d0a276cae",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "65783495b9c3563f9e8ee9ed|b85c3e56-a90a-ffd2-08f4-378d0a276cae",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 0,
                "scrollOffsetUnit": "%",
                "delay": 0,
                "direction": "TOP",
                "effectIn": true
            },
            "createdOn": 1703053369316
        },
        "e-342": {
            "id": "e-342",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "GROW_EFFECT",
                "instant": false,
                "config": {
                    "actionListId": "growIn",
                    "autoStopEventId": "e-343"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "65783495b9c3563f9e8ee9ed|da2f2454-7234-2d82-92f3-9f0a9441d602",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "65783495b9c3563f9e8ee9ed|da2f2454-7234-2d82-92f3-9f0a9441d602",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 0,
                "scrollOffsetUnit": "%",
                "delay": 0,
                "direction": null,
                "effectIn": true
            },
            "createdOn": 1703053446666
        },
        "e-344": {
            "id": "e-344",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "PAGE_START",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-32",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-345"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "656c23e118a42479510d6622",
                "appliesTo": "PAGE",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "656c23e118a42479510d6622",
                "appliesTo": "PAGE",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1703053905142
        },
        "e-348": {
            "id": "e-348",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "SLIDE_EFFECT",
                "instant": false,
                "config": {
                    "actionListId": "slideInBottom",
                    "autoStopEventId": "e-349"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "6572c792407e300b1831aaf7|1bc1be4d-f3c3-d350-308b-a84d99d952a6",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "6572c792407e300b1831aaf7|1bc1be4d-f3c3-d350-308b-a84d99d952a6",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 0,
                "scrollOffsetUnit": "%",
                "delay": 0,
                "direction": "BOTTOM",
                "effectIn": true
            },
            "createdOn": 1703055310637
        },
        "e-350": {
            "id": "e-350",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "SLIDE_EFFECT",
                "instant": false,
                "config": {
                    "actionListId": "slideInBottom",
                    "autoStopEventId": "e-351"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "6572c792407e300b1831aaf7|1bc1be4d-f3c3-d350-308b-a84d99d952a9",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "6572c792407e300b1831aaf7|1bc1be4d-f3c3-d350-308b-a84d99d952a9",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 0,
                "scrollOffsetUnit": "%",
                "delay": 100,
                "direction": "BOTTOM",
                "effectIn": true
            },
            "createdOn": 1703055310637
        },
        "e-352": {
            "id": "e-352",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "SLIDE_EFFECT",
                "instant": false,
                "config": {
                    "actionListId": "slideInBottom",
                    "autoStopEventId": "e-353"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "6572c792407e300b1831aaf7|1bc1be4d-f3c3-d350-308b-a84d99d952ac",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "6572c792407e300b1831aaf7|1bc1be4d-f3c3-d350-308b-a84d99d952ac",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 0,
                "scrollOffsetUnit": "%",
                "delay": 300,
                "direction": "BOTTOM",
                "effectIn": true
            },
            "createdOn": 1703055310637
        },
        "e-364": {
            "id": "e-364",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "MOUSE_OVER",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-29",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-365"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "6572c792407e300b1831aaf7|1bc1be4d-f3c3-d350-308b-a84d99d95313",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "6572c792407e300b1831aaf7|1bc1be4d-f3c3-d350-308b-a84d99d95313",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1703055310637
        },
        "e-365": {
            "id": "e-365",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "MOUSE_OUT",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-30",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-364"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "6572c792407e300b1831aaf7|1bc1be4d-f3c3-d350-308b-a84d99d95313",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "6572c792407e300b1831aaf7|1bc1be4d-f3c3-d350-308b-a84d99d95313",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1703055310637
        },
        "e-366": {
            "id": "e-366",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "PAGE_START",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-8",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-367"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "6572c422ce00c4580368af87",
                "appliesTo": "PAGE",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "6572c422ce00c4580368af87",
                "appliesTo": "PAGE",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1703055677722
        },
        "e-368": {
            "id": "e-368",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "PAGE_START",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-8",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-369"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "6571899990ba78602dd8bf87",
                "appliesTo": "PAGE",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "6571899990ba78602dd8bf87",
                "appliesTo": "PAGE",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1703056300514
        },
        "e-370": {
            "id": "e-370",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "PAGE_START",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-8",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-371"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "6571870a2873932f1a35088d",
                "appliesTo": "PAGE",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "6571870a2873932f1a35088d",
                "appliesTo": "PAGE",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1703056320455
        },
        "e-372": {
            "id": "e-372",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "PAGE_START",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-8",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-373"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "6572c792407e300b1831aaf7",
                "appliesTo": "PAGE",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "6572c792407e300b1831aaf7",
                "appliesTo": "PAGE",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1703056346418
        },
        "e-374": {
            "id": "e-374",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "PAGE_START",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-8",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-375"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "657acf13d21bc1249af2f248",
                "appliesTo": "PAGE",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "657acf13d21bc1249af2f248",
                "appliesTo": "PAGE",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1703056400455
        },
        "e-376": {
            "id": "e-376",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "PAGE_START",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-8",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-377"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "656c23e118a42479510d6624",
                "appliesTo": "PAGE",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "656c23e118a42479510d6624",
                "appliesTo": "PAGE",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1703056427008
        },
        "e-378": {
            "id": "e-378",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "PAGE_START",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-8",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-379"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "656c23e118a42479510d6623",
                "appliesTo": "PAGE",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "656c23e118a42479510d6623",
                "appliesTo": "PAGE",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1703056450268
        },
        "e-380": {
            "id": "e-380",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "PAGE_START",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-8",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-381"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "65783495b9c3563f9e8ee9ed",
                "appliesTo": "PAGE",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "65783495b9c3563f9e8ee9ed",
                "appliesTo": "PAGE",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1703056462650
        },
        "e-382": {
            "id": "e-382",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "SLIDE_EFFECT",
                "instant": false,
                "config": {
                    "actionListId": "slideInBottom",
                    "autoStopEventId": "e-383"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "6578065f8c7edcefb0ff00da|95bb63d5-18a6-8eab-fc1d-667b1687436c",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "6578065f8c7edcefb0ff00da|95bb63d5-18a6-8eab-fc1d-667b1687436c",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 0,
                "scrollOffsetUnit": "%",
                "delay": 400,
                "direction": "BOTTOM",
                "effectIn": true
            },
            "createdOn": 1703056522922
        },
        "e-384": {
            "id": "e-384",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "MOUSE_OVER",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-25",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-385"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "657acf13d21bc1249af2f248|ad884f6b-915e-dfe0-25bf-fe1f2812f968",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "657acf13d21bc1249af2f248|ad884f6b-915e-dfe0-25bf-fe1f2812f968",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1703058272036
        },
        "e-385": {
            "id": "e-385",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "MOUSE_OUT",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-26",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-384"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "657acf13d21bc1249af2f248|ad884f6b-915e-dfe0-25bf-fe1f2812f968",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "657acf13d21bc1249af2f248|ad884f6b-915e-dfe0-25bf-fe1f2812f968",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1703058272036
        },
        "e-386": {
            "id": "e-386",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "MOUSE_OVER",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-25",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-387"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "657acf13d21bc1249af2f248|ad884f6b-915e-dfe0-25bf-fe1f2812f96c",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "657acf13d21bc1249af2f248|ad884f6b-915e-dfe0-25bf-fe1f2812f96c",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1703058272036
        },
        "e-387": {
            "id": "e-387",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "MOUSE_OUT",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-26",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-386"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "657acf13d21bc1249af2f248|ad884f6b-915e-dfe0-25bf-fe1f2812f96c",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "657acf13d21bc1249af2f248|ad884f6b-915e-dfe0-25bf-fe1f2812f96c",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1703058272036
        },
        "e-388": {
            "id": "e-388",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "MOUSE_OVER",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-25",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-389"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "657acf13d21bc1249af2f248|ad884f6b-915e-dfe0-25bf-fe1f2812f970",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "657acf13d21bc1249af2f248|ad884f6b-915e-dfe0-25bf-fe1f2812f970",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1703058272036
        },
        "e-389": {
            "id": "e-389",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "MOUSE_OUT",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-26",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-388"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "657acf13d21bc1249af2f248|ad884f6b-915e-dfe0-25bf-fe1f2812f970",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "657acf13d21bc1249af2f248|ad884f6b-915e-dfe0-25bf-fe1f2812f970",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1703058272036
        },
        "e-390": {
            "id": "e-390",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "MOUSE_OVER",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-25",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-391"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "657acf13d21bc1249af2f248|ad884f6b-915e-dfe0-25bf-fe1f2812f974",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "657acf13d21bc1249af2f248|ad884f6b-915e-dfe0-25bf-fe1f2812f974",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1703058272036
        },
        "e-391": {
            "id": "e-391",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "MOUSE_OUT",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-26",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-390"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "657acf13d21bc1249af2f248|ad884f6b-915e-dfe0-25bf-fe1f2812f974",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "657acf13d21bc1249af2f248|ad884f6b-915e-dfe0-25bf-fe1f2812f974",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1703058272036
        },
        "e-392": {
            "id": "e-392",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "SLIDE_EFFECT",
                "instant": false,
                "config": {
                    "actionListId": "slideInBottom",
                    "autoStopEventId": "e-393"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "657acf13d21bc1249af2f248|d0235994-ca49-3452-eb4d-613dc11085a6",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "657acf13d21bc1249af2f248|d0235994-ca49-3452-eb4d-613dc11085a6",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 0,
                "scrollOffsetUnit": "%",
                "delay": 100,
                "direction": "BOTTOM",
                "effectIn": true
            },
            "createdOn": 1703058704919
        },
        "e-394": {
            "id": "e-394",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "SLIDE_EFFECT",
                "instant": false,
                "config": {
                    "actionListId": "slideInBottom",
                    "autoStopEventId": "e-395"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "657acf13d21bc1249af2f248|d0235994-ca49-3452-eb4d-613dc11085a7",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "657acf13d21bc1249af2f248|d0235994-ca49-3452-eb4d-613dc11085a7",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 0,
                "scrollOffsetUnit": "%",
                "delay": 200,
                "direction": "BOTTOM",
                "effectIn": true
            },
            "createdOn": 1703058704919
        },
        "e-396": {
            "id": "e-396",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "SLIDE_EFFECT",
                "instant": false,
                "config": {
                    "actionListId": "slideInBottom",
                    "autoStopEventId": "e-397"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "657acf13d21bc1249af2f248|2de925bd-8883-85e4-8b5c-b2c2398a6eaf",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "657acf13d21bc1249af2f248|2de925bd-8883-85e4-8b5c-b2c2398a6eaf",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 0,
                "scrollOffsetUnit": "%",
                "delay": 0,
                "direction": "BOTTOM",
                "effectIn": true
            },
            "createdOn": 1703058866551
        },
        "e-400": {
            "id": "e-400",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "MOUSE_OVER",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-13",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-401"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "1d18c955-1001-fd82-f798-46cac43eadd0",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "1d18c955-1001-fd82-f798-46cac43eadd0",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1703131514895
        },
        "e-401": {
            "id": "e-401",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "MOUSE_OUT",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-44",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-400"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "1d18c955-1001-fd82-f798-46cac43eadd0",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "1d18c955-1001-fd82-f798-46cac43eadd0",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1703131514895
        },
        "e-402": {
            "id": "e-402",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "MOUSE_OVER",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-13",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-403"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "1d18c955-1001-fd82-f798-46cac43eadd6",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "1d18c955-1001-fd82-f798-46cac43eadd6",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1703131514895
        },
        "e-403": {
            "id": "e-403",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "MOUSE_OUT",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-44",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-402"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "1d18c955-1001-fd82-f798-46cac43eadd6",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "1d18c955-1001-fd82-f798-46cac43eadd6",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1703131514895
        },
        "e-404": {
            "id": "e-404",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "MOUSE_OVER",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-13",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-405"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "1d18c955-1001-fd82-f798-46cac43eaddc",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "1d18c955-1001-fd82-f798-46cac43eaddc",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1703131514895
        },
        "e-405": {
            "id": "e-405",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "MOUSE_OUT",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-44",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-404"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "1d18c955-1001-fd82-f798-46cac43eaddc",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "1d18c955-1001-fd82-f798-46cac43eaddc",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1703131514895
        },
        "e-406": {
            "id": "e-406",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "MOUSE_OVER",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-13",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-407"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "1d18c955-1001-fd82-f798-46cac43eade2",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "1d18c955-1001-fd82-f798-46cac43eade2",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1703131514895
        },
        "e-407": {
            "id": "e-407",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "MOUSE_OUT",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-44",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-406"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "1d18c955-1001-fd82-f798-46cac43eade2",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "1d18c955-1001-fd82-f798-46cac43eade2",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1703131514895
        },
        "e-408": {
            "id": "e-408",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "MOUSE_OVER",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-13",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-409"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "1d18c955-1001-fd82-f798-46cac43eade8",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "1d18c955-1001-fd82-f798-46cac43eade8",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1703131514895
        },
        "e-409": {
            "id": "e-409",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "MOUSE_OUT",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-44",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-408"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "1d18c955-1001-fd82-f798-46cac43eade8",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "1d18c955-1001-fd82-f798-46cac43eade8",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1703131514895
        },
        "e-412": {
            "id": "e-412",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "NAVBAR_OPEN",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-15",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-413"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "1d18c955-1001-fd82-f798-46cac43eadc8",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "1d18c955-1001-fd82-f798-46cac43eadc8",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1703131592553
        },
        "e-413": {
            "id": "e-413",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "NAVBAR_CLOSE",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-16",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-412"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "1d18c955-1001-fd82-f798-46cac43eadc8",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "1d18c955-1001-fd82-f798-46cac43eadc8",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1703131592558
        },
        "e-414": {
            "id": "e-414",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "SCROLLING_IN_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_CONTINUOUS_ACTION",
                "config": {
                    "actionListId": "a-31",
                    "affectedElements": {},
                    "duration": 0
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "656c23e118a42479510d6622|fa583618-1257-aa85-3d01-5986212940a3",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "656c23e118a42479510d6622|fa583618-1257-aa85-3d01-5986212940a3",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": [{
                "continuousParameterGroupId": "a-31-p",
                "smoothing": 50,
                "startsEntering": true,
                "addStartOffset": false,
                "addOffsetValue": 50,
                "startsExiting": false,
                "addEndOffset": false,
                "endOffsetValue": 50
            }],
            "createdOn": 1703159056026
        },
        "e-415": {
            "id": "e-415",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "SLIDE_EFFECT",
                "instant": false,
                "config": {
                    "actionListId": "slideInLeft",
                    "autoStopEventId": "e-416"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "ed5cd8e1-803f-cefd-e250-cb170dfe96d1",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "ed5cd8e1-803f-cefd-e250-cb170dfe96d1",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 0,
                "scrollOffsetUnit": "%",
                "delay": 200,
                "direction": "LEFT",
                "effectIn": true
            },
            "createdOn": 1703196557018
        },
        "e-417": {
            "id": "e-417",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "SCROLLING_IN_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_CONTINUOUS_ACTION",
                "config": {
                    "actionListId": "a-45",
                    "affectedElements": {},
                    "duration": 0
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "6576a80f86030ee5138ee988|00026862-5f9b-a568-24e2-2872af9bce82",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "6576a80f86030ee5138ee988|00026862-5f9b-a568-24e2-2872af9bce82",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": [{
                "continuousParameterGroupId": "a-45-p",
                "smoothing": 50,
                "startsEntering": true,
                "addStartOffset": false,
                "addOffsetValue": 50,
                "startsExiting": false,
                "addEndOffset": false,
                "endOffsetValue": 50
            }],
            "createdOn": 1703196746387
        },
        "e-418": {
            "id": "e-418",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "SCROLLING_IN_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_CONTINUOUS_ACTION",
                "config": {
                    "actionListId": "a-45",
                    "affectedElements": {},
                    "duration": 0
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "6577c717104d506b0af71ab4|11f54b77-10ea-4c48-4af4-bba43c80f3ed",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "6577c717104d506b0af71ab4|11f54b77-10ea-4c48-4af4-bba43c80f3ed",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": [{
                "continuousParameterGroupId": "a-45-p",
                "smoothing": 50,
                "startsEntering": true,
                "addStartOffset": false,
                "addOffsetValue": 50,
                "startsExiting": false,
                "addEndOffset": false,
                "endOffsetValue": 50
            }],
            "createdOn": 1703197437970
        },
        "e-419": {
            "id": "e-419",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "PAGE_START",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-8",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-420"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "6577c717104d506b0af71ab4",
                "appliesTo": "PAGE",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "6577c717104d506b0af71ab4",
                "appliesTo": "PAGE",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1703198267137
        },
        "e-421": {
            "id": "e-421",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "PAGE_START",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-8",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-422"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "6577f7afd7a548f5cf7b0507",
                "appliesTo": "PAGE",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "6577f7afd7a548f5cf7b0507",
                "appliesTo": "PAGE",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1703198281314
        },
        "e-423": {
            "id": "e-423",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "SCROLLING_IN_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_CONTINUOUS_ACTION",
                "config": {
                    "actionListId": "a-45",
                    "affectedElements": {},
                    "duration": 0
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "6572c422ce00c4580368af87|8f647d9c-ab7c-5718-8d8b-1141429d39d3",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "6572c422ce00c4580368af87|8f647d9c-ab7c-5718-8d8b-1141429d39d3",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": [{
                "continuousParameterGroupId": "a-45-p",
                "smoothing": 50,
                "startsEntering": true,
                "addStartOffset": false,
                "addOffsetValue": 50,
                "startsExiting": false,
                "addEndOffset": false,
                "endOffsetValue": 50
            }],
            "createdOn": 1703198932995
        },
        "e-426": {
            "id": "e-426",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "SLIDE_EFFECT",
                "instant": false,
                "config": {
                    "actionListId": "slideInBottom",
                    "autoStopEventId": "e-427"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "6571899990ba78602dd8bf87|9a168713-e6fe-865d-d469-d062ac68e299",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "6571899990ba78602dd8bf87|9a168713-e6fe-865d-d469-d062ac68e299",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 0,
                "scrollOffsetUnit": "%",
                "delay": 0,
                "direction": "BOTTOM",
                "effectIn": true
            },
            "createdOn": 1703228530191
        },
        "e-428": {
            "id": "e-428",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "SLIDE_EFFECT",
                "instant": false,
                "config": {
                    "actionListId": "slideInBottom",
                    "autoStopEventId": "e-429"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "6571899990ba78602dd8bf87|9a168713-e6fe-865d-d469-d062ac68e29c",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "6571899990ba78602dd8bf87|9a168713-e6fe-865d-d469-d062ac68e29c",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 0,
                "scrollOffsetUnit": "%",
                "delay": 100,
                "direction": "BOTTOM",
                "effectIn": true
            },
            "createdOn": 1703228530191
        },
        "e-430": {
            "id": "e-430",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-35",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-431"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "6571899990ba78602dd8bf87|9a168713-e6fe-865d-d469-d062ac68e29f",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "6571899990ba78602dd8bf87|9a168713-e6fe-865d-d469-d062ac68e29f",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 0,
                "scrollOffsetUnit": "%",
                "delay": 0,
                "direction": "LEFT",
                "effectIn": true
            },
            "createdOn": 1703228530191
        },
        "e-432": {
            "id": "e-432",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "MOUSE_OVER",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-41",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-433"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "6571899990ba78602dd8bf87|9a168713-e6fe-865d-d469-d062ac68e2a2",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "6571899990ba78602dd8bf87|9a168713-e6fe-865d-d469-d062ac68e2a2",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": 0,
                "direction": "LEFT",
                "effectIn": true
            },
            "createdOn": 1703228530191
        },
        "e-433": {
            "id": "e-433",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "MOUSE_OUT",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-42",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-432"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "6571899990ba78602dd8bf87|9a168713-e6fe-865d-d469-d062ac68e2a2",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "6571899990ba78602dd8bf87|9a168713-e6fe-865d-d469-d062ac68e2a2",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1703228530191
        },
        "e-434": {
            "id": "e-434",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "SLIDE_EFFECT",
                "instant": false,
                "config": {
                    "actionListId": "slideInRight",
                    "autoStopEventId": "e-435"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "6571899990ba78602dd8bf87|9a168713-e6fe-865d-d469-d062ac68e2aa",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "6571899990ba78602dd8bf87|9a168713-e6fe-865d-d469-d062ac68e2aa",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 0,
                "scrollOffsetUnit": "%",
                "delay": 0,
                "direction": "RIGHT",
                "effectIn": true
            },
            "createdOn": 1703228530191
        },
        "e-436": {
            "id": "e-436",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "SLIDE_EFFECT",
                "instant": false,
                "config": {
                    "actionListId": "slideInLeft",
                    "autoStopEventId": "e-437"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "6571899990ba78602dd8bf87|9a168713-e6fe-865d-d469-d062ac68e2ab",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "6571899990ba78602dd8bf87|9a168713-e6fe-865d-d469-d062ac68e2ab",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 0,
                "scrollOffsetUnit": "%",
                "delay": 100,
                "direction": "LEFT",
                "effectIn": true
            },
            "createdOn": 1703228530191
        },
        "e-438": {
            "id": "e-438",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "SLIDE_EFFECT",
                "instant": false,
                "config": {
                    "actionListId": "slideInLeft",
                    "autoStopEventId": "e-439"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "6571899990ba78602dd8bf87|9a168713-e6fe-865d-d469-d062ac68e2ae",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "6571899990ba78602dd8bf87|9a168713-e6fe-865d-d469-d062ac68e2ae",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 0,
                "scrollOffsetUnit": "%",
                "delay": 0,
                "direction": "LEFT",
                "effectIn": true
            },
            "createdOn": 1703228530191
        },
        "e-440": {
            "id": "e-440",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "SLIDE_EFFECT",
                "instant": false,
                "config": {
                    "actionListId": "slideInRight",
                    "autoStopEventId": "e-441"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "6571899990ba78602dd8bf87|9a168713-e6fe-865d-d469-d062ac68e2b1",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "6571899990ba78602dd8bf87|9a168713-e6fe-865d-d469-d062ac68e2b1",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 0,
                "scrollOffsetUnit": "%",
                "delay": 100,
                "direction": "RIGHT",
                "effectIn": true
            },
            "createdOn": 1703228530191
        },
        "e-442": {
            "id": "e-442",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "SLIDE_EFFECT",
                "instant": false,
                "config": {
                    "actionListId": "slideInRight",
                    "autoStopEventId": "e-443"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "6571899990ba78602dd8bf87|9a168713-e6fe-865d-d469-d062ac68e2b4",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "6571899990ba78602dd8bf87|9a168713-e6fe-865d-d469-d062ac68e2b4",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 0,
                "scrollOffsetUnit": "%",
                "delay": 200,
                "direction": "RIGHT",
                "effectIn": true
            },
            "createdOn": 1703228530191
        },
        "e-444": {
            "id": "e-444",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "SLIDE_EFFECT",
                "instant": false,
                "config": {
                    "actionListId": "slideInRight",
                    "autoStopEventId": "e-445"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "6571899990ba78602dd8bf87|9a168713-e6fe-865d-d469-d062ac68e2b7",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "6571899990ba78602dd8bf87|9a168713-e6fe-865d-d469-d062ac68e2b7",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 0,
                "scrollOffsetUnit": "%",
                "delay": 300,
                "direction": "RIGHT",
                "effectIn": true
            },
            "createdOn": 1703228530191
        },
        "e-446": {
            "id": "e-446",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "SLIDE_EFFECT",
                "instant": false,
                "config": {
                    "actionListId": "slideInRight",
                    "autoStopEventId": "e-447"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "6571899990ba78602dd8bf87|9a168713-e6fe-865d-d469-d062ac68e2ba",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "6571899990ba78602dd8bf87|9a168713-e6fe-865d-d469-d062ac68e2ba",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 0,
                "scrollOffsetUnit": "%",
                "delay": 400,
                "direction": "RIGHT",
                "effectIn": true
            },
            "createdOn": 1703228530191
        },
        "e-448": {
            "id": "e-448",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "SLIDE_EFFECT",
                "instant": false,
                "config": {
                    "actionListId": "slideInRight",
                    "autoStopEventId": "e-449"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "6571899990ba78602dd8bf87|9a168713-e6fe-865d-d469-d062ac68e2bd",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "6571899990ba78602dd8bf87|9a168713-e6fe-865d-d469-d062ac68e2bd",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 0,
                "scrollOffsetUnit": "%",
                "delay": 500,
                "direction": "RIGHT",
                "effectIn": true
            },
            "createdOn": 1703228530191
        },
        "e-450": {
            "id": "e-450",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "SLIDE_EFFECT",
                "instant": false,
                "config": {
                    "actionListId": "slideInLeft",
                    "autoStopEventId": "e-451"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "656c23e118a42479510d6622|f7b5c17d-d343-9881-38b9-fdac8f1173b3",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "656c23e118a42479510d6622|f7b5c17d-d343-9881-38b9-fdac8f1173b3",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 0,
                "scrollOffsetUnit": "%",
                "delay": 0,
                "direction": "LEFT",
                "effectIn": true
            },
            "createdOn": 1703668207864
        },
        "e-452": {
            "id": "e-452",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "SLIDE_EFFECT",
                "instant": false,
                "config": {
                    "actionListId": "slideInBottom",
                    "autoStopEventId": "e-453"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "6577c717104d506b0af71ab4|11f54b77-10ea-4c48-4af4-bba43c80f3e3",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "6577c717104d506b0af71ab4|11f54b77-10ea-4c48-4af4-bba43c80f3e3",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 0,
                "scrollOffsetUnit": "%",
                "delay": 200,
                "direction": "BOTTOM",
                "effectIn": true
            },
            "createdOn": 1703670897456
        }
    },
    "actionLists": {
        "a": {
            "id": "a",
            "title": "Style Guide Line Scroll Into View",
            "actionItemGroups": [{
                "actionItems": [{
                    "id": "a-n",
                    "actionTypeId": "STYLE_SIZE",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "useEventTarget": "SIBLINGS",
                            "selector": ".style-guide-line",
                            "selectorGuids": ["934f275e-995e-8621-e28a-3619c76ac873"]
                        },
                        "widthValue": 0,
                        "widthUnit": "%",
                        "heightUnit": "PX",
                        "locked": false
                    }
                }]
            }, {
                "actionItems": [{
                    "id": "a-n-2",
                    "actionTypeId": "STYLE_SIZE",
                    "config": {
                        "delay": 0,
                        "easing": "inOutCubic",
                        "duration": 1000,
                        "target": {
                            "useEventTarget": "SIBLINGS",
                            "selector": ".style-guide-line",
                            "selectorGuids": ["934f275e-995e-8621-e28a-3619c76ac873"]
                        },
                        "widthValue": 100,
                        "widthUnit": "%",
                        "heightUnit": "PX",
                        "locked": false
                    }
                }]
            }],
            "useFirstGroupAsInitialState": true,
            "createdOn": 1692152106580
        },
        "a-2": {
            "id": "a-2",
            "title": "Primary Button Hover IN",
            "actionItemGroups": [{
                "actionItems": [{
                    "id": "a-2-n-10",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".button-icon",
                            "selectorGuids": ["418f5f6e-b2fa-c169-1218-a21b3d72782f"]
                        },
                        "xValue": 0,
                        "yValue": 0,
                        "xUnit": "px",
                        "yUnit": "px",
                        "zUnit": "PX"
                    }
                }, {
                    "id": "a-2-n-17",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".hover-button-overlay",
                            "selectorGuids": ["26b55fb5-7494-c245-1045-38fa381ef39c"]
                        },
                        "yValue": 0,
                        "xUnit": "PX",
                        "yUnit": "px",
                        "zUnit": "PX"
                    }
                }, {
                    "id": "a-2-n-19",
                    "actionTypeId": "STYLE_BORDER",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {},
                        "globalSwatchId": "",
                        "rValue": 255,
                        "bValue": 255,
                        "gValue": 255,
                        "aValue": 1
                    }
                }, {
                    "id": "a-2-n-22",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".button-text",
                            "selectorGuids": ["c49851da-46c8-1cd1-d85e-64b4ab61ca64"]
                        },
                        "yValue": 0,
                        "xUnit": "PX",
                        "yUnit": "%",
                        "zUnit": "PX"
                    }
                }, {
                    "id": "a-2-n-26",
                    "actionTypeId": "STYLE_BORDER",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "useEventTarget": true,
                            "id": "e89375c6-3772-ae01-188a-4ffa6b0df487"
                        },
                        "globalSwatchId": "",
                        "rValue": 28,
                        "bValue": 28,
                        "gValue": 28,
                        "aValue": 1
                    }
                }]
            }, {
                "actionItems": [{
                    "id": "a-2-n-11",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 0,
                        "easing": "outQuart",
                        "duration": 600,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".button-icon",
                            "selectorGuids": ["418f5f6e-b2fa-c169-1218-a21b3d72782f"]
                        },
                        "xValue": 20,
                        "yValue": -20,
                        "xUnit": "px",
                        "yUnit": "px",
                        "zUnit": "PX"
                    }
                }, {
                    "id": "a-2-n-12",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 0,
                        "easing": "outQuart",
                        "duration": 600,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".button-icon.absolute",
                            "selectorGuids": ["418f5f6e-b2fa-c169-1218-a21b3d72782f", "d898ee28-200a-9a22-142b-f82fa0bf0164"]
                        },
                        "xValue": 20,
                        "xUnit": "px",
                        "yUnit": "PX",
                        "zUnit": "PX"
                    }
                }, {
                    "id": "a-2-n-18",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 0,
                        "easing": "outQuart",
                        "duration": 600,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".hover-button-overlay",
                            "selectorGuids": ["26b55fb5-7494-c245-1045-38fa381ef39c"]
                        },
                        "yValue": -50,
                        "xUnit": "PX",
                        "yUnit": "px",
                        "zUnit": "PX"
                    }
                }, {
                    "id": "a-2-n-20",
                    "actionTypeId": "STYLE_BORDER",
                    "config": {
                        "delay": 0,
                        "easing": "outQuart",
                        "duration": 600,
                        "target": {},
                        "globalSwatchId": "",
                        "rValue": 0,
                        "bValue": 0,
                        "gValue": 0,
                        "aValue": 1
                    }
                }, {
                    "id": "a-2-n-23",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 0,
                        "easing": "outQuart",
                        "duration": 600,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".button-text",
                            "selectorGuids": ["c49851da-46c8-1cd1-d85e-64b4ab61ca64"]
                        },
                        "yValue": -100,
                        "xUnit": "PX",
                        "yUnit": "%",
                        "zUnit": "PX"
                    }
                }, {
                    "id": "a-2-n-24",
                    "actionTypeId": "STYLE_FILTER",
                    "config": {
                        "delay": 0,
                        "easing": "outQuart",
                        "duration": 600,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".button-text",
                            "selectorGuids": ["c49851da-46c8-1cd1-d85e-64b4ab61ca64"]
                        },
                        "filters": [{
                            "type": "invert",
                            "filterId": "215a",
                            "value": 100,
                            "unit": "%"
                        }]
                    }
                }, {
                    "id": "a-2-n-25",
                    "actionTypeId": "STYLE_FILTER",
                    "config": {
                        "delay": 0,
                        "easing": "outQuart",
                        "duration": 600,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".button-icon.absolute",
                            "selectorGuids": ["418f5f6e-b2fa-c169-1218-a21b3d72782f", "d898ee28-200a-9a22-142b-f82fa0bf0164"]
                        },
                        "filters": [{
                            "type": "invert",
                            "filterId": "ba7e",
                            "value": 100,
                            "unit": "%"
                        }]
                    }
                }, {
                    "id": "a-2-n-27",
                    "actionTypeId": "STYLE_BORDER",
                    "config": {
                        "delay": 0,
                        "easing": "outQuart",
                        "duration": 600,
                        "target": {
                            "useEventTarget": true,
                            "id": "e89375c6-3772-ae01-188a-4ffa6b0df487"
                        },
                        "globalSwatchId": "",
                        "rValue": 83,
                        "bValue": 92,
                        "gValue": 83,
                        "aValue": 1
                    }
                }]
            }],
            "useFirstGroupAsInitialState": true,
            "createdOn": 1701599395482
        },
        "a-17": {
            "id": "a-17",
            "title": "Primary Button Hover OUT",
            "actionItemGroups": [{
                "actionItems": [{
                    "id": "a-17-n-5",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 0,
                        "easing": "outQuart",
                        "duration": 600,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".button-icon",
                            "selectorGuids": ["418f5f6e-b2fa-c169-1218-a21b3d72782f"]
                        },
                        "xValue": 0,
                        "yValue": 0,
                        "xUnit": "px",
                        "yUnit": "px",
                        "zUnit": "PX"
                    }
                }, {
                    "id": "a-17-n-6",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 0,
                        "easing": "outQuart",
                        "duration": 600,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".button-icon.absolute",
                            "selectorGuids": ["418f5f6e-b2fa-c169-1218-a21b3d72782f", "d898ee28-200a-9a22-142b-f82fa0bf0164"]
                        },
                        "xValue": 0,
                        "yValue": -1,
                        "xUnit": "px",
                        "yUnit": "px",
                        "zUnit": "PX"
                    }
                }, {
                    "id": "a-17-n-7",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 0,
                        "easing": "outQuart",
                        "duration": 600,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".hover-button-overlay",
                            "selectorGuids": ["26b55fb5-7494-c245-1045-38fa381ef39c"]
                        },
                        "yValue": 0,
                        "xUnit": "PX",
                        "yUnit": "px",
                        "zUnit": "PX"
                    }
                }, {
                    "id": "a-17-n-8",
                    "actionTypeId": "STYLE_BORDER",
                    "config": {
                        "delay": 0,
                        "easing": "outQuart",
                        "duration": 600,
                        "target": {},
                        "globalSwatchId": "",
                        "rValue": 0,
                        "bValue": 0,
                        "gValue": 0,
                        "aValue": 1
                    }
                }, {
                    "id": "a-17-n-9",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 0,
                        "easing": "outQuart",
                        "duration": 600,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".button-text",
                            "selectorGuids": ["c49851da-46c8-1cd1-d85e-64b4ab61ca64"]
                        },
                        "yValue": 0,
                        "xUnit": "PX",
                        "yUnit": "%",
                        "zUnit": "PX"
                    }
                }, {
                    "id": "a-17-n-10",
                    "actionTypeId": "STYLE_FILTER",
                    "config": {
                        "delay": 0,
                        "easing": "outQuart",
                        "duration": 600,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".button-text",
                            "selectorGuids": ["c49851da-46c8-1cd1-d85e-64b4ab61ca64"]
                        },
                        "filters": [{
                            "type": "invert",
                            "filterId": "215a",
                            "value": 0,
                            "unit": "%"
                        }]
                    }
                }, {
                    "id": "a-17-n-11",
                    "actionTypeId": "STYLE_FILTER",
                    "config": {
                        "delay": 0,
                        "easing": "outQuart",
                        "duration": 600,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".button-icon.absolute",
                            "selectorGuids": ["418f5f6e-b2fa-c169-1218-a21b3d72782f", "d898ee28-200a-9a22-142b-f82fa0bf0164"]
                        },
                        "filters": [{
                            "type": "invert",
                            "filterId": "ba7e",
                            "value": 0,
                            "unit": "%"
                        }]
                    }
                }, {
                    "id": "a-17-n-12",
                    "actionTypeId": "STYLE_BORDER",
                    "config": {
                        "delay": 0,
                        "easing": "outQuart",
                        "duration": 600,
                        "target": {
                            "useEventTarget": true,
                            "id": "e89375c6-3772-ae01-188a-4ffa6b0df487"
                        },
                        "globalSwatchId": "",
                        "rValue": 28,
                        "bValue": 28,
                        "gValue": 28,
                        "aValue": 1
                    }
                }]
            }],
            "useFirstGroupAsInitialState": false,
            "createdOn": 1701599395482
        },
        "a-4": {
            "id": "a-4",
            "title": "Button Underline Hover IN",
            "actionItemGroups": [{
                "actionItems": [{
                    "id": "a-4-n",
                    "actionTypeId": "STYLE_SIZE",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".button-line",
                            "selectorGuids": ["5f269d39-df85-b96c-d28d-769c7fee89ea"]
                        },
                        "widthValue": 0,
                        "widthUnit": "%",
                        "heightUnit": "PX",
                        "locked": false
                    }
                }, {
                    "id": "a-4-n-2",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".button-icon",
                            "selectorGuids": ["418f5f6e-b2fa-c169-1218-a21b3d72782f"]
                        },
                        "xValue": 0,
                        "yValue": 0,
                        "xUnit": "px",
                        "yUnit": "px",
                        "zUnit": "PX"
                    }
                }, {
                    "id": "a-4-n-3",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".button-icon.absolute",
                            "selectorGuids": ["418f5f6e-b2fa-c169-1218-a21b3d72782f", "d898ee28-200a-9a22-142b-f82fa0bf0164"]
                        },
                        "xValue": 0,
                        "yValue": 0,
                        "xUnit": "px",
                        "yUnit": "px",
                        "zUnit": "PX"
                    }
                }, {
                    "id": "a-4-n-7",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".button-text",
                            "selectorGuids": ["c49851da-46c8-1cd1-d85e-64b4ab61ca64"]
                        },
                        "yValue": 0,
                        "xUnit": "PX",
                        "yUnit": "%",
                        "zUnit": "PX"
                    }
                }, {
                    "id": "a-4-n-9",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".button-text",
                            "selectorGuids": ["c49851da-46c8-1cd1-d85e-64b4ab61ca64"]
                        },
                        "yValue": 0,
                        "xUnit": "PX",
                        "yUnit": "%",
                        "zUnit": "PX"
                    }
                }]
            }, {
                "actionItems": [{
                    "id": "a-4-n-4",
                    "actionTypeId": "STYLE_SIZE",
                    "config": {
                        "delay": 0,
                        "easing": "outQuint",
                        "duration": 500,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".button-line",
                            "selectorGuids": ["5f269d39-df85-b96c-d28d-769c7fee89ea"]
                        },
                        "widthValue": 100,
                        "widthUnit": "%",
                        "heightUnit": "PX",
                        "locked": false
                    }
                }, {
                    "id": "a-4-n-6",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 0,
                        "easing": "outQuint",
                        "duration": 500,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".button-icon.absolute",
                            "selectorGuids": ["418f5f6e-b2fa-c169-1218-a21b3d72782f", "d898ee28-200a-9a22-142b-f82fa0bf0164"]
                        },
                        "xValue": 0,
                        "yValue": 0,
                        "xUnit": "px",
                        "yUnit": "px",
                        "zUnit": "PX"
                    }
                }, {
                    "id": "a-4-n-5",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 0,
                        "easing": "outQuint",
                        "duration": 500,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".button-icon",
                            "selectorGuids": ["418f5f6e-b2fa-c169-1218-a21b3d72782f"]
                        },
                        "xValue": 20,
                        "yValue": -20,
                        "xUnit": "px",
                        "yUnit": "px",
                        "zUnit": "PX"
                    }
                }, {
                    "id": "a-4-n-8",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 0,
                        "easing": "outQuint",
                        "duration": 500,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".button-text",
                            "selectorGuids": ["c49851da-46c8-1cd1-d85e-64b4ab61ca64"]
                        },
                        "yValue": -100,
                        "xUnit": "PX",
                        "yUnit": "%",
                        "zUnit": "PX"
                    }
                }, {
                    "id": "a-4-n-10",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 0,
                        "easing": "outQuint",
                        "duration": 500,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".button-text",
                            "selectorGuids": ["c49851da-46c8-1cd1-d85e-64b4ab61ca64"]
                        },
                        "yValue": -100,
                        "xUnit": "PX",
                        "yUnit": "%",
                        "zUnit": "PX"
                    }
                }]
            }],
            "useFirstGroupAsInitialState": true,
            "createdOn": 1701654053347
        },
        "a-5": {
            "id": "a-5",
            "title": "Button Underline Hover OUT",
            "actionItemGroups": [{
                "actionItems": [{
                    "id": "a-5-n-6",
                    "actionTypeId": "STYLE_SIZE",
                    "config": {
                        "delay": 0,
                        "easing": "outQuint",
                        "duration": 500,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".button-line",
                            "selectorGuids": ["5f269d39-df85-b96c-d28d-769c7fee89ea"]
                        },
                        "widthValue": 0,
                        "widthUnit": "%",
                        "heightUnit": "PX",
                        "locked": false
                    }
                }, {
                    "id": "a-5-n-7",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 0,
                        "easing": "outQuint",
                        "duration": 500,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".button-icon.absolute",
                            "selectorGuids": ["418f5f6e-b2fa-c169-1218-a21b3d72782f", "d898ee28-200a-9a22-142b-f82fa0bf0164"]
                        },
                        "xValue": 0,
                        "yValue": 0,
                        "xUnit": "px",
                        "yUnit": "px",
                        "zUnit": "PX"
                    }
                }, {
                    "id": "a-5-n-8",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 0,
                        "easing": "outQuint",
                        "duration": 500,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".button-icon",
                            "selectorGuids": ["418f5f6e-b2fa-c169-1218-a21b3d72782f"]
                        },
                        "xValue": 0,
                        "yValue": 0,
                        "xUnit": "px",
                        "yUnit": "px",
                        "zUnit": "PX"
                    }
                }, {
                    "id": "a-5-n-9",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 0,
                        "easing": "outQuint",
                        "duration": 500,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".button-text",
                            "selectorGuids": ["c49851da-46c8-1cd1-d85e-64b4ab61ca64"]
                        },
                        "yValue": 0,
                        "xUnit": "PX",
                        "yUnit": "%",
                        "zUnit": "PX"
                    }
                }, {
                    "id": "a-5-n-10",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 0,
                        "easing": "outQuint",
                        "duration": 500,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".button-text",
                            "selectorGuids": ["c49851da-46c8-1cd1-d85e-64b4ab61ca64"]
                        },
                        "yValue": 0,
                        "xUnit": "PX",
                        "yUnit": "%",
                        "zUnit": "PX"
                    }
                }]
            }],
            "useFirstGroupAsInitialState": false,
            "createdOn": 1701654053347
        },
        "a-6": {
            "id": "a-6",
            "title": "Link Text Hover IN",
            "actionItemGroups": [{
                "actionItems": [{
                    "id": "a-6-n",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".social-media-text",
                            "selectorGuids": ["af9813b8-915a-0f83-418c-46e8f99a0136"]
                        },
                        "yValue": 0,
                        "xUnit": "PX",
                        "yUnit": "%",
                        "zUnit": "PX"
                    }
                }, {
                    "id": "a-6-n-4",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".social-media-hover-text",
                            "selectorGuids": ["484e661b-d5b8-0e4c-2344-c7e4b32252c3"]
                        },
                        "yValue": 0,
                        "xUnit": "PX",
                        "yUnit": "%",
                        "zUnit": "PX"
                    }
                }]
            }, {
                "actionItems": [{
                    "id": "a-6-n-3",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 0,
                        "easing": "outQuart",
                        "duration": 300,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".social-media-text",
                            "selectorGuids": ["af9813b8-915a-0f83-418c-46e8f99a0136"]
                        },
                        "yValue": -100,
                        "xUnit": "PX",
                        "yUnit": "%",
                        "zUnit": "PX"
                    }
                }, {
                    "id": "a-6-n-5",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 0,
                        "easing": "outQuart",
                        "duration": 300,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".social-media-hover-text",
                            "selectorGuids": ["484e661b-d5b8-0e4c-2344-c7e4b32252c3"]
                        },
                        "yValue": -100,
                        "xUnit": "PX",
                        "yUnit": "%",
                        "zUnit": "PX"
                    }
                }]
            }],
            "useFirstGroupAsInitialState": true,
            "createdOn": 1701667820843
        },
        "a-7": {
            "id": "a-7",
            "title": "Link Text Hover OUT",
            "actionItemGroups": [{
                "actionItems": [{
                    "id": "a-7-n-3",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 0,
                        "easing": "outQuint",
                        "duration": 300,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".social-media-text",
                            "selectorGuids": ["af9813b8-915a-0f83-418c-46e8f99a0136"]
                        },
                        "yValue": 0,
                        "xUnit": "PX",
                        "yUnit": "%",
                        "zUnit": "PX"
                    }
                }, {
                    "id": "a-7-n-4",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 0,
                        "easing": "outQuint",
                        "duration": 300,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".social-media-hover-text",
                            "selectorGuids": ["484e661b-d5b8-0e4c-2344-c7e4b32252c3"]
                        },
                        "yValue": 0,
                        "xUnit": "PX",
                        "yUnit": "%",
                        "zUnit": "PX"
                    }
                }]
            }],
            "useFirstGroupAsInitialState": false,
            "createdOn": 1701667820843
        },
        "a-8": {
            "id": "a-8",
            "title": "Footer Marquee",
            "actionItemGroups": [{
                "actionItems": [{
                    "id": "a-8-n",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 0,
                        "target": {
                            "selector": ".marquee-container",
                            "selectorGuids": ["afda6c38-df77-efef-a444-3a10b6da67b2"]
                        },
                        "xValue": -100,
                        "xUnit": "%",
                        "yUnit": "PX",
                        "zUnit": "PX"
                    }
                }]
            }, {
                "actionItems": [{
                    "id": "a-8-n-2",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 100000,
                        "target": {
                            "selector": ".marquee-container",
                            "selectorGuids": ["afda6c38-df77-efef-a444-3a10b6da67b2"]
                        },
                        "xValue": 0,
                        "xUnit": "%",
                        "yUnit": "PX",
                        "zUnit": "PX"
                    }
                }]
            }],
            "useFirstGroupAsInitialState": false,
            "createdOn": 1701673955523
        },
        "a-9": {
            "id": "a-9",
            "title": "Footer Mouse-over Element IN",
            "actionItemGroups": [{
                "actionItems": [{
                    "id": "a-9-n",
                    "actionTypeId": "TRANSFORM_SCALE",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".marquee-mouseover-element",
                            "selectorGuids": ["f6f7cdf4-d5b8-2543-e6cf-aee1b46a19a8"]
                        },
                        "xValue": 0,
                        "yValue": 0,
                        "locked": true
                    }
                }, {
                    "id": "a-9-n-2",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".marquee-mouseover-element",
                            "selectorGuids": ["f6f7cdf4-d5b8-2543-e6cf-aee1b46a19a8"]
                        },
                        "value": 0,
                        "unit": ""
                    }
                }, {
                    "id": "a-9-n-5",
                    "actionTypeId": "STYLE_FILTER",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".marquee-container",
                            "selectorGuids": ["afda6c38-df77-efef-a444-3a10b6da67b2"]
                        },
                        "filters": [{
                            "type": "grayscale",
                            "filterId": "f611",
                            "value": 0,
                            "unit": "%"
                        }]
                    }
                }]
            }, {
                "actionItems": [{
                    "id": "a-9-n-3",
                    "actionTypeId": "TRANSFORM_SCALE",
                    "config": {
                        "delay": 0,
                        "easing": "outExpo",
                        "duration": 500,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".marquee-mouseover-element",
                            "selectorGuids": ["f6f7cdf4-d5b8-2543-e6cf-aee1b46a19a8"]
                        },
                        "xValue": 1,
                        "yValue": 1,
                        "locked": true
                    }
                }, {
                    "id": "a-9-n-4",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "easing": "outExpo",
                        "duration": 500,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".marquee-mouseover-element",
                            "selectorGuids": ["f6f7cdf4-d5b8-2543-e6cf-aee1b46a19a8"]
                        },
                        "value": 1,
                        "unit": ""
                    }
                }, {
                    "id": "a-9-n-6",
                    "actionTypeId": "STYLE_FILTER",
                    "config": {
                        "delay": 0,
                        "easing": "outExpo",
                        "duration": 500,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".marquee-container",
                            "selectorGuids": ["afda6c38-df77-efef-a444-3a10b6da67b2"]
                        },
                        "filters": [{
                            "type": "grayscale",
                            "filterId": "f611",
                            "value": 100,
                            "unit": "%"
                        }]
                    }
                }]
            }],
            "useFirstGroupAsInitialState": true,
            "createdOn": 1701676351745
        },
        "a-43": {
            "id": "a-43",
            "title": "Footer Mouse-over Element OUT",
            "actionItemGroups": [{
                "actionItems": [{
                    "id": "a-43-n-4",
                    "actionTypeId": "TRANSFORM_SCALE",
                    "config": {
                        "delay": 0,
                        "easing": "outExpo",
                        "duration": 500,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".marquee-mouseover-element",
                            "selectorGuids": ["f6f7cdf4-d5b8-2543-e6cf-aee1b46a19a8"]
                        },
                        "xValue": 0,
                        "yValue": 0,
                        "locked": true
                    }
                }, {
                    "id": "a-43-n-5",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "easing": "outExpo",
                        "duration": 500,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".marquee-mouseover-element",
                            "selectorGuids": ["f6f7cdf4-d5b8-2543-e6cf-aee1b46a19a8"]
                        },
                        "value": 0,
                        "unit": ""
                    }
                }, {
                    "id": "a-43-n-6",
                    "actionTypeId": "STYLE_FILTER",
                    "config": {
                        "delay": 0,
                        "easing": "outExpo",
                        "duration": 500,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".marquee-container",
                            "selectorGuids": ["afda6c38-df77-efef-a444-3a10b6da67b2"]
                        },
                        "filters": [{
                            "type": "grayscale",
                            "filterId": "f611",
                            "value": 0,
                            "unit": "%"
                        }]
                    }
                }]
            }],
            "useFirstGroupAsInitialState": false,
            "createdOn": 1701676351745
        },
        "a-11": {
            "id": "a-11",
            "title": "Marquee Mouseover",
            "continuousParameterGroups": [{
                "id": "a-11-p",
                "type": "MOUSE_X",
                "parameterLabel": "Mouse X",
                "continuousActionGroups": [{
                    "keyframe": 0,
                    "actionItems": [{
                        "id": "a-11-n",
                        "actionTypeId": "TRANSFORM_MOVE",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "useEventTarget": "CHILDREN",
                                "selector": ".marquee-mouseover-element",
                                "selectorGuids": ["f6f7cdf4-d5b8-2543-e6cf-aee1b46a19a8"]
                            },
                            "xValue": -46,
                            "xUnit": "vw",
                            "yUnit": "PX",
                            "zUnit": "PX"
                        }
                    }]
                }, {
                    "keyframe": 100,
                    "actionItems": [{
                        "id": "a-11-n-2",
                        "actionTypeId": "TRANSFORM_MOVE",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "useEventTarget": "CHILDREN",
                                "selector": ".marquee-mouseover-element",
                                "selectorGuids": ["f6f7cdf4-d5b8-2543-e6cf-aee1b46a19a8"]
                            },
                            "xValue": 46,
                            "xUnit": "vw",
                            "yUnit": "PX",
                            "zUnit": "PX"
                        }
                    }]
                }]
            }, {
                "id": "a-11-p-2",
                "type": "MOUSE_Y",
                "parameterLabel": "Mouse Y",
                "continuousActionGroups": [{
                    "keyframe": 0,
                    "actionItems": [{
                        "id": "a-11-n-3",
                        "actionTypeId": "TRANSFORM_MOVE",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "useEventTarget": "CHILDREN",
                                "selector": ".marquee-mouseover-element",
                                "selectorGuids": ["f6f7cdf4-d5b8-2543-e6cf-aee1b46a19a8"]
                            },
                            "yValue": -2,
                            "xUnit": "PX",
                            "yUnit": "vh",
                            "zUnit": "PX"
                        }
                    }]
                }, {
                    "keyframe": 100,
                    "actionItems": [{
                        "id": "a-11-n-4",
                        "actionTypeId": "TRANSFORM_MOVE",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "useEventTarget": "CHILDREN",
                                "selector": ".marquee-mouseover-element",
                                "selectorGuids": ["f6f7cdf4-d5b8-2543-e6cf-aee1b46a19a8"]
                            },
                            "yValue": 2,
                            "xUnit": "PX",
                            "yUnit": "vh",
                            "zUnit": "PX"
                        }
                    }]
                }]
            }],
            "createdOn": 1701676677302
        },
        "a-18": {
            "id": "a-18",
            "title": "Hero Animation IN",
            "actionItemGroups": [{
                "actionItems": [{
                    "id": "a-18-n",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "id": "656c23e118a42479510d6622|a56448ac-fb3d-9c17-a9cb-6ac09669d15c"
                        },
                        "yValue": 148,
                        "xUnit": "PX",
                        "yUnit": "px",
                        "zUnit": "PX"
                    }
                }, {
                    "id": "a-18-n-14",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "id": "656c23e118a42479510d6622|fa583618-1257-aa85-3d01-5986212940a3"
                        },
                        "value": 0,
                        "unit": ""
                    }
                }, {
                    "id": "a-18-n-13",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "id": "656c23e118a42479510d6622|fa583618-1257-aa85-3d01-5986212940a3"
                        },
                        "yValue": 200,
                        "xUnit": "PX",
                        "yUnit": "px",
                        "zUnit": "PX"
                    }
                }, {
                    "id": "a-18-n-3",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "id": "656c23e118a42479510d6622|b49b2229-46cc-8a3e-f2bf-f65e2edb9412"
                        },
                        "yValue": 148,
                        "xUnit": "PX",
                        "yUnit": "px",
                        "zUnit": "PX"
                    }
                }, {
                    "id": "a-18-n-2",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "id": "656c23e118a42479510d6622|c20073cb-378b-157a-9b33-0bff724fc40e"
                        },
                        "yValue": 148,
                        "xUnit": "PX",
                        "yUnit": "px",
                        "zUnit": "PX"
                    }
                }, {
                    "id": "a-18-n-4",
                    "actionTypeId": "TRANSFORM_SKEW",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "id": "656c23e118a42479510d6622|a56448ac-fb3d-9c17-a9cb-6ac09669d15c"
                        },
                        "yValue": 8,
                        "xUnit": "DEG",
                        "yUnit": "deg",
                        "zUnit": "DEG"
                    }
                }, {
                    "id": "a-18-n-5",
                    "actionTypeId": "TRANSFORM_SKEW",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "id": "656c23e118a42479510d6622|b49b2229-46cc-8a3e-f2bf-f65e2edb9412"
                        },
                        "yValue": 8,
                        "xUnit": "DEG",
                        "yUnit": "deg",
                        "zUnit": "DEG"
                    }
                }, {
                    "id": "a-18-n-6",
                    "actionTypeId": "TRANSFORM_SKEW",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "id": "656c23e118a42479510d6622|c20073cb-378b-157a-9b33-0bff724fc40e"
                        },
                        "yValue": 8,
                        "xUnit": "DEG",
                        "yUnit": "deg",
                        "zUnit": "DEG"
                    }
                }]
            }, {
                "actionItems": [{
                    "id": "a-18-n-7",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 2100,
                        "easing": "outQuart",
                        "duration": 800,
                        "target": {
                            "id": "656c23e118a42479510d6622|a56448ac-fb3d-9c17-a9cb-6ac09669d15c"
                        },
                        "yValue": 4,
                        "xUnit": "PX",
                        "yUnit": "px",
                        "zUnit": "PX"
                    }
                }, {
                    "id": "a-18-n-10",
                    "actionTypeId": "TRANSFORM_SKEW",
                    "config": {
                        "delay": 2100,
                        "easing": "outQuart",
                        "duration": 800,
                        "target": {
                            "id": "656c23e118a42479510d6622|a56448ac-fb3d-9c17-a9cb-6ac09669d15c"
                        },
                        "yValue": 0,
                        "xUnit": "DEG",
                        "yUnit": "deg",
                        "zUnit": "DEG"
                    }
                }, {
                    "id": "a-18-n-9",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 2200,
                        "easing": "outQuart",
                        "duration": 1200,
                        "target": {
                            "id": "656c23e118a42479510d6622|c20073cb-378b-157a-9b33-0bff724fc40e"
                        },
                        "yValue": 4,
                        "xUnit": "PX",
                        "yUnit": "px",
                        "zUnit": "PX"
                    }
                }, {
                    "id": "a-18-n-11",
                    "actionTypeId": "TRANSFORM_SKEW",
                    "config": {
                        "delay": 2200,
                        "easing": "outQuart",
                        "duration": 1600,
                        "target": {
                            "id": "656c23e118a42479510d6622|c20073cb-378b-157a-9b33-0bff724fc40e"
                        },
                        "yValue": 0,
                        "xUnit": "DEG",
                        "yUnit": "deg",
                        "zUnit": "DEG"
                    }
                }, {
                    "id": "a-18-n-8",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 2300,
                        "easing": "outQuart",
                        "duration": 1600,
                        "target": {
                            "id": "656c23e118a42479510d6622|b49b2229-46cc-8a3e-f2bf-f65e2edb9412"
                        },
                        "yValue": 4,
                        "xUnit": "PX",
                        "yUnit": "px",
                        "zUnit": "PX"
                    }
                }, {
                    "id": "a-18-n-12",
                    "actionTypeId": "TRANSFORM_SKEW",
                    "config": {
                        "delay": 2300,
                        "easing": "outQuart",
                        "duration": 1200,
                        "target": {
                            "id": "656c23e118a42479510d6622|b49b2229-46cc-8a3e-f2bf-f65e2edb9412"
                        },
                        "yValue": 0,
                        "xUnit": "DEG",
                        "yUnit": "deg",
                        "zUnit": "DEG"
                    }
                }, {
                    "id": "a-18-n-16",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 2500,
                        "easing": "outQuart",
                        "duration": 800,
                        "target": {
                            "id": "656c23e118a42479510d6622|fa583618-1257-aa85-3d01-5986212940a3"
                        },
                        "yValue": 0,
                        "xUnit": "PX",
                        "yUnit": "px",
                        "zUnit": "PX"
                    }
                }, {
                    "id": "a-18-n-15",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 2500,
                        "easing": "outQuart",
                        "duration": 500,
                        "target": {
                            "id": "656c23e118a42479510d6622|fa583618-1257-aa85-3d01-5986212940a3"
                        },
                        "value": 1,
                        "unit": ""
                    }
                }]
            }],
            "useFirstGroupAsInitialState": true,
            "createdOn": 1701849280362
        },
        "a-21": {
            "id": "a-21",
            "title": "Project Image Hover IN",
            "actionItemGroups": [{
                "actionItems": [{
                    "id": "a-21-n",
                    "actionTypeId": "GENERAL_DISPLAY",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 0,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".cursor-button",
                            "selectorGuids": ["d6df76ef-88d1-bf7e-46cf-8c170eb0fb5e"]
                        },
                        "value": "none"
                    }
                }, {
                    "id": "a-21-n-7",
                    "actionTypeId": "STYLE_FILTER",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".image-cover",
                            "selectorGuids": ["b8384446-2abb-1af5-e406-e6042d9cd55b"]
                        },
                        "filters": [{
                            "type": "blur",
                            "filterId": "738f",
                            "value": 0,
                            "unit": "px"
                        }]
                    }
                }, {
                    "id": "a-21-n-3",
                    "actionTypeId": "TRANSFORM_SCALE",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".cursor-button",
                            "selectorGuids": ["d6df76ef-88d1-bf7e-46cf-8c170eb0fb5e"]
                        },
                        "xValue": 0,
                        "yValue": 0,
                        "locked": true
                    }
                }, {
                    "id": "a-21-n-2",
                    "actionTypeId": "TRANSFORM_SCALE",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".image-cover",
                            "selectorGuids": ["b8384446-2abb-1af5-e406-e6042d9cd55b"]
                        },
                        "xValue": 1.1,
                        "yValue": 1.1,
                        "locked": true
                    }
                }]
            }, {
                "actionItems": [{
                    "id": "a-21-n-4",
                    "actionTypeId": "GENERAL_DISPLAY",
                    "config": {
                        "delay": 0,
                        "easing": "outQuart",
                        "duration": 0,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".cursor-button",
                            "selectorGuids": ["d6df76ef-88d1-bf7e-46cf-8c170eb0fb5e"]
                        },
                        "value": "block"
                    }
                }, {
                    "id": "a-21-n-6",
                    "actionTypeId": "TRANSFORM_SCALE",
                    "config": {
                        "delay": 0,
                        "easing": "ease",
                        "duration": 800,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".image-cover",
                            "selectorGuids": ["b8384446-2abb-1af5-e406-e6042d9cd55b"]
                        },
                        "xValue": 1,
                        "yValue": 1,
                        "locked": true
                    }
                }, {
                    "id": "a-21-n-5",
                    "actionTypeId": "TRANSFORM_SCALE",
                    "config": {
                        "delay": 0,
                        "easing": "outQuart",
                        "duration": 500,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".cursor-button",
                            "selectorGuids": ["d6df76ef-88d1-bf7e-46cf-8c170eb0fb5e"]
                        },
                        "xValue": 1,
                        "yValue": 1,
                        "locked": true
                    }
                }, {
                    "id": "a-21-n-8",
                    "actionTypeId": "STYLE_FILTER",
                    "config": {
                        "delay": 0,
                        "easing": "outQuart",
                        "duration": 500,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".image-cover",
                            "selectorGuids": ["b8384446-2abb-1af5-e406-e6042d9cd55b"]
                        },
                        "filters": [{
                            "type": "blur",
                            "filterId": "738f",
                            "value": 2,
                            "unit": "px"
                        }]
                    }
                }]
            }],
            "useFirstGroupAsInitialState": true,
            "createdOn": 1701949860148
        },
        "a-22": {
            "id": "a-22",
            "title": "Project Image Hover OUT",
            "actionItemGroups": [{
                "actionItems": [{
                    "id": "a-22-n-4",
                    "actionTypeId": "GENERAL_DISPLAY",
                    "config": {
                        "delay": 0,
                        "easing": "outQuart",
                        "duration": 0,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".cursor-button",
                            "selectorGuids": ["d6df76ef-88d1-bf7e-46cf-8c170eb0fb5e"]
                        },
                        "value": "none"
                    }
                }, {
                    "id": "a-22-n-7",
                    "actionTypeId": "STYLE_FILTER",
                    "config": {
                        "delay": 0,
                        "easing": "outQuart",
                        "duration": 500,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".image-cover",
                            "selectorGuids": ["b8384446-2abb-1af5-e406-e6042d9cd55b"]
                        },
                        "filters": [{
                            "type": "blur",
                            "filterId": "225f",
                            "value": 0,
                            "unit": "px"
                        }]
                    }
                }, {
                    "id": "a-22-n-5",
                    "actionTypeId": "TRANSFORM_SCALE",
                    "config": {
                        "delay": 0,
                        "easing": "ease",
                        "duration": 800,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".image-cover",
                            "selectorGuids": ["b8384446-2abb-1af5-e406-e6042d9cd55b"]
                        },
                        "xValue": 1.1,
                        "yValue": 1.1,
                        "locked": true
                    }
                }, {
                    "id": "a-22-n-6",
                    "actionTypeId": "TRANSFORM_SCALE",
                    "config": {
                        "delay": 0,
                        "easing": "outQuart",
                        "duration": 500,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".cursor-button",
                            "selectorGuids": ["d6df76ef-88d1-bf7e-46cf-8c170eb0fb5e"]
                        },
                        "xValue": 0,
                        "yValue": 0,
                        "locked": true
                    }
                }]
            }],
            "useFirstGroupAsInitialState": false,
            "createdOn": 1701949860148
        },
        "a-23": {
            "id": "a-23",
            "title": "Project Mouseover",
            "continuousParameterGroups": [{
                "id": "a-23-p",
                "type": "MOUSE_X",
                "parameterLabel": "Mouse X",
                "continuousActionGroups": [{
                    "keyframe": 0,
                    "actionItems": [{
                        "id": "a-23-n",
                        "actionTypeId": "TRANSFORM_MOVE",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "useEventTarget": "CHILDREN",
                                "selector": ".cursor-button",
                                "selectorGuids": ["d6df76ef-88d1-bf7e-46cf-8c170eb0fb5e"]
                            },
                            "xValue": -30,
                            "yValue": null,
                            "xUnit": "vw",
                            "yUnit": "vw",
                            "zUnit": "PX"
                        }
                    }]
                }, {
                    "keyframe": 100,
                    "actionItems": [{
                        "id": "a-23-n-2",
                        "actionTypeId": "TRANSFORM_MOVE",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "useEventTarget": "CHILDREN",
                                "selector": ".cursor-button",
                                "selectorGuids": ["d6df76ef-88d1-bf7e-46cf-8c170eb0fb5e"]
                            },
                            "xValue": 30,
                            "yValue": null,
                            "xUnit": "vw",
                            "yUnit": "vw",
                            "zUnit": "PX"
                        }
                    }]
                }]
            }, {
                "id": "a-23-p-2",
                "type": "MOUSE_Y",
                "parameterLabel": "Mouse Y",
                "continuousActionGroups": [{
                    "keyframe": 0,
                    "actionItems": [{
                        "id": "a-23-n-3",
                        "actionTypeId": "TRANSFORM_MOVE",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "useEventTarget": "CHILDREN",
                                "selector": ".cursor-button",
                                "selectorGuids": ["d6df76ef-88d1-bf7e-46cf-8c170eb0fb5e"]
                            },
                            "xValue": null,
                            "yValue": -30,
                            "xUnit": "vh",
                            "yUnit": "vh",
                            "zUnit": "PX"
                        }
                    }]
                }, {
                    "keyframe": 100,
                    "actionItems": [{
                        "id": "a-23-n-4",
                        "actionTypeId": "TRANSFORM_MOVE",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "useEventTarget": "CHILDREN",
                                "selector": ".cursor-button",
                                "selectorGuids": ["d6df76ef-88d1-bf7e-46cf-8c170eb0fb5e"]
                            },
                            "xValue": null,
                            "yValue": 30,
                            "xUnit": "vh",
                            "yUnit": "vh",
                            "zUnit": "PX"
                        }
                    }]
                }]
            }],
            "createdOn": 1701950114764
        },
        "a-27": {
            "id": "a-27",
            "title": "Toggle Pricing - Monthly",
            "actionItemGroups": [{
                "actionItems": [{
                    "id": "a-27-n",
                    "actionTypeId": "STYLE_TEXT_COLOR",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "id": "656c23e118a42479510d6622|62f5222d-7f05-cd13-641f-a4e58366146d"
                        },
                        "globalSwatchId": "",
                        "rValue": 255,
                        "bValue": 255,
                        "gValue": 255,
                        "aValue": 1
                    }
                }, {
                    "id": "a-27-n-3",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "id": "656c23e118a42479510d6622|76afeba8-f4a9-31c4-a1ff-13dbb6c49e49"
                        },
                        "xValue": 0,
                        "xUnit": "%",
                        "yUnit": "PX",
                        "zUnit": "PX"
                    }
                }, {
                    "id": "a-27-n-2",
                    "actionTypeId": "STYLE_TEXT_COLOR",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "id": "656c23e118a42479510d6622|13808513-c3f9-ba9b-748b-9f2efbedab9a"
                        },
                        "globalSwatchId": "",
                        "rValue": 28,
                        "bValue": 28,
                        "gValue": 28,
                        "aValue": 1
                    }
                }, {
                    "id": "a-27-n-7",
                    "actionTypeId": "GENERAL_DISPLAY",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 0,
                        "target": {
                            "selector": ".pricing-tab-component.monthly",
                            "selectorGuids": ["397c79f3-a6b5-d689-940b-ff62eb7987c9", "7cf3b28e-aabb-9f63-c460-6a052b7a36d1"]
                        },
                        "value": "none"
                    }
                }, {
                    "id": "a-27-n-16",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "selector": ".pricing-tab-component.monthly",
                            "selectorGuids": ["397c79f3-a6b5-d689-940b-ff62eb7987c9", "7cf3b28e-aabb-9f63-c460-6a052b7a36d1"]
                        },
                        "yValue": 30,
                        "xUnit": "PX",
                        "yUnit": "px",
                        "zUnit": "PX"
                    }
                }, {
                    "id": "a-27-n-8",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "selector": ".pricing-tab-component.monthly",
                            "selectorGuids": ["397c79f3-a6b5-d689-940b-ff62eb7987c9", "7cf3b28e-aabb-9f63-c460-6a052b7a36d1"]
                        },
                        "value": 0,
                        "unit": ""
                    }
                }, {
                    "id": "a-27-n-9",
                    "actionTypeId": "GENERAL_DISPLAY",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 0,
                        "target": {
                            "selector": ".pricing-tab-component.annual",
                            "selectorGuids": ["397c79f3-a6b5-d689-940b-ff62eb7987c9", "a6566086-fa47-883b-d340-f47d791305f5"]
                        },
                        "value": "grid"
                    }
                }, {
                    "id": "a-27-n-10",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "selector": ".pricing-tab-component.annual",
                            "selectorGuids": ["397c79f3-a6b5-d689-940b-ff62eb7987c9", "a6566086-fa47-883b-d340-f47d791305f5"]
                        },
                        "value": 1,
                        "unit": ""
                    }
                }]
            }, {
                "actionItems": [{
                    "id": "a-27-n-5",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 0,
                        "easing": "outQuart",
                        "duration": 300,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "id": "656c23e118a42479510d6622|76afeba8-f4a9-31c4-a1ff-13dbb6c49e49"
                        },
                        "xValue": 100,
                        "xUnit": "%",
                        "yUnit": "PX",
                        "zUnit": "PX"
                    }
                }, {
                    "id": "a-27-n-4",
                    "actionTypeId": "STYLE_TEXT_COLOR",
                    "config": {
                        "delay": 0,
                        "easing": "outQuart",
                        "duration": 300,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "id": "656c23e118a42479510d6622|62f5222d-7f05-cd13-641f-a4e58366146d"
                        },
                        "globalSwatchId": "",
                        "rValue": 0,
                        "bValue": 0,
                        "gValue": 0,
                        "aValue": 1
                    }
                }, {
                    "id": "a-27-n-6",
                    "actionTypeId": "STYLE_TEXT_COLOR",
                    "config": {
                        "delay": 0,
                        "easing": "outQuart",
                        "duration": 300,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "id": "656c23e118a42479510d6622|13808513-c3f9-ba9b-748b-9f2efbedab9a"
                        },
                        "globalSwatchId": "",
                        "rValue": 255,
                        "bValue": 255,
                        "gValue": 255,
                        "aValue": 1
                    }
                }, {
                    "id": "a-27-n-11",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "easing": "outQuart",
                        "duration": 300,
                        "target": {
                            "selector": ".pricing-tab-component.annual",
                            "selectorGuids": ["397c79f3-a6b5-d689-940b-ff62eb7987c9", "a6566086-fa47-883b-d340-f47d791305f5"]
                        },
                        "value": 0,
                        "unit": ""
                    }
                }]
            }, {
                "actionItems": [{
                    "id": "a-27-n-12",
                    "actionTypeId": "GENERAL_DISPLAY",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 0,
                        "target": {
                            "selector": ".pricing-tab-component.monthly",
                            "selectorGuids": ["397c79f3-a6b5-d689-940b-ff62eb7987c9", "7cf3b28e-aabb-9f63-c460-6a052b7a36d1"]
                        },
                        "value": "grid"
                    }
                }, {
                    "id": "a-27-n-13",
                    "actionTypeId": "GENERAL_DISPLAY",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 0,
                        "target": {
                            "selector": ".pricing-tab-component.annual",
                            "selectorGuids": ["397c79f3-a6b5-d689-940b-ff62eb7987c9", "a6566086-fa47-883b-d340-f47d791305f5"]
                        },
                        "value": "none"
                    }
                }]
            }, {
                "actionItems": [{
                    "id": "a-27-n-15",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "easing": "outQuint",
                        "duration": 300,
                        "target": {
                            "selector": ".pricing-tab-component.monthly",
                            "selectorGuids": ["397c79f3-a6b5-d689-940b-ff62eb7987c9", "7cf3b28e-aabb-9f63-c460-6a052b7a36d1"]
                        },
                        "value": 1,
                        "unit": ""
                    }
                }, {
                    "id": "a-27-n-17",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 0,
                        "easing": "outQuint",
                        "duration": 300,
                        "target": {
                            "selector": ".pricing-tab-component.monthly",
                            "selectorGuids": ["397c79f3-a6b5-d689-940b-ff62eb7987c9", "7cf3b28e-aabb-9f63-c460-6a052b7a36d1"]
                        },
                        "yValue": 0,
                        "xUnit": "PX",
                        "yUnit": "px",
                        "zUnit": "PX"
                    }
                }]
            }],
            "useFirstGroupAsInitialState": true,
            "createdOn": 1702263545032
        },
        "a-28": {
            "id": "a-28",
            "title": "Toggle Pricing - Annualy",
            "actionItemGroups": [{
                "actionItems": [{
                    "id": "a-28-n-15",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "selector": ".pricing-tab-component.monthly",
                            "selectorGuids": ["397c79f3-a6b5-d689-940b-ff62eb7987c9", "7cf3b28e-aabb-9f63-c460-6a052b7a36d1"]
                        },
                        "yValue": 30,
                        "xUnit": "PX",
                        "yUnit": "px",
                        "zUnit": "PX"
                    }
                }]
            }, {
                "actionItems": [{
                    "id": "a-28-n-8",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 0,
                        "easing": "outQuart",
                        "duration": 300,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "id": "656c23e118a42479510d6622|76afeba8-f4a9-31c4-a1ff-13dbb6c49e49"
                        },
                        "xValue": 0,
                        "xUnit": "%",
                        "yUnit": "PX",
                        "zUnit": "PX"
                    }
                }, {
                    "id": "a-28-n-9",
                    "actionTypeId": "STYLE_TEXT_COLOR",
                    "config": {
                        "delay": 0,
                        "easing": "outQuart",
                        "duration": 300,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "id": "656c23e118a42479510d6622|62f5222d-7f05-cd13-641f-a4e58366146d"
                        },
                        "globalSwatchId": "",
                        "rValue": 255,
                        "bValue": 255,
                        "gValue": 255,
                        "aValue": 1
                    }
                }, {
                    "id": "a-28-n-10",
                    "actionTypeId": "STYLE_TEXT_COLOR",
                    "config": {
                        "delay": 0,
                        "easing": "outQuart",
                        "duration": 300,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "id": "656c23e118a42479510d6622|13808513-c3f9-ba9b-748b-9f2efbedab9a"
                        },
                        "globalSwatchId": "",
                        "rValue": 0,
                        "bValue": 0,
                        "gValue": 0,
                        "aValue": 1
                    }
                }]
            }, {
                "actionItems": [{
                    "id": "a-28-n-14",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "easing": "outQuint",
                        "duration": 300,
                        "target": {
                            "selector": ".pricing-tab-component.monthly",
                            "selectorGuids": ["397c79f3-a6b5-d689-940b-ff62eb7987c9", "7cf3b28e-aabb-9f63-c460-6a052b7a36d1"]
                        },
                        "value": 0,
                        "unit": ""
                    }
                }]
            }, {
                "actionItems": [{
                    "id": "a-28-n-12",
                    "actionTypeId": "GENERAL_DISPLAY",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 0,
                        "target": {
                            "selector": ".pricing-tab-component.monthly",
                            "selectorGuids": ["397c79f3-a6b5-d689-940b-ff62eb7987c9", "7cf3b28e-aabb-9f63-c460-6a052b7a36d1"]
                        },
                        "value": "none"
                    }
                }, {
                    "id": "a-28-n-13",
                    "actionTypeId": "GENERAL_DISPLAY",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 0,
                        "target": {
                            "selector": ".pricing-tab-component.annual",
                            "selectorGuids": ["397c79f3-a6b5-d689-940b-ff62eb7987c9", "a6566086-fa47-883b-d340-f47d791305f5"]
                        },
                        "value": "grid"
                    }
                }]
            }, {
                "actionItems": [{
                    "id": "a-28-n-11",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "easing": "outQuart",
                        "duration": 300,
                        "target": {
                            "selector": ".pricing-tab-component.annual",
                            "selectorGuids": ["397c79f3-a6b5-d689-940b-ff62eb7987c9", "a6566086-fa47-883b-d340-f47d791305f5"]
                        },
                        "value": 1,
                        "unit": ""
                    }
                }, {
                    "id": "a-28-n-16",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 0,
                        "easing": "outQuart",
                        "duration": 300,
                        "target": {
                            "selector": ".pricing-tab-component.monthly",
                            "selectorGuids": ["397c79f3-a6b5-d689-940b-ff62eb7987c9", "7cf3b28e-aabb-9f63-c460-6a052b7a36d1"]
                        },
                        "yValue": 0,
                        "xUnit": "PX",
                        "yUnit": "px",
                        "zUnit": "PX"
                    }
                }]
            }],
            "useFirstGroupAsInitialState": true,
            "createdOn": 1702263545032
        },
        "a-25": {
            "id": "a-25",
            "title": "Footer Link Hover IN",
            "actionItemGroups": [{
                "actionItems": [{
                    "id": "a-25-n",
                    "actionTypeId": "STYLE_SIZE",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".footer-item-line",
                            "selectorGuids": ["267ca744-ca49-aca4-33a9-caef80b65050"]
                        },
                        "widthValue": 0,
                        "widthUnit": "%",
                        "heightUnit": "PX",
                        "locked": false
                    }
                }, {
                    "id": "a-25-n-3",
                    "actionTypeId": "STYLE_TEXT_COLOR",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".footer-text-menu",
                            "selectorGuids": ["853d1883-2b8f-f488-d23a-e477a11dfe44"]
                        },
                        "globalSwatchId": "",
                        "rValue": 162,
                        "bValue": 171,
                        "gValue": 162,
                        "aValue": 1
                    }
                }]
            }, {
                "actionItems": [{
                    "id": "a-25-n-2",
                    "actionTypeId": "STYLE_SIZE",
                    "config": {
                        "delay": 0,
                        "easing": "outQuart",
                        "duration": 500,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".footer-item-line",
                            "selectorGuids": ["267ca744-ca49-aca4-33a9-caef80b65050"]
                        },
                        "widthValue": 100,
                        "widthUnit": "%",
                        "heightUnit": "PX",
                        "locked": false
                    }
                }, {
                    "id": "a-25-n-4",
                    "actionTypeId": "STYLE_TEXT_COLOR",
                    "config": {
                        "delay": 0,
                        "easing": "outQuart",
                        "duration": 500,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".footer-text-menu",
                            "selectorGuids": ["853d1883-2b8f-f488-d23a-e477a11dfe44"]
                        },
                        "globalSwatchId": "",
                        "rValue": 255,
                        "bValue": 255,
                        "gValue": 255,
                        "aValue": 1
                    }
                }]
            }],
            "useFirstGroupAsInitialState": true,
            "createdOn": 1702072184926
        },
        "a-26": {
            "id": "a-26",
            "title": "Footer Link Hover OUT",
            "actionItemGroups": [{
                "actionItems": [{
                    "id": "a-26-n-2",
                    "actionTypeId": "STYLE_SIZE",
                    "config": {
                        "delay": 0,
                        "easing": "outCubic",
                        "duration": 500,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".footer-item-line",
                            "selectorGuids": ["267ca744-ca49-aca4-33a9-caef80b65050"]
                        },
                        "widthValue": 0,
                        "widthUnit": "%",
                        "heightUnit": "PX",
                        "locked": false
                    }
                }, {
                    "id": "a-26-n-3",
                    "actionTypeId": "STYLE_TEXT_COLOR",
                    "config": {
                        "delay": 0,
                        "easing": "outQuart",
                        "duration": 500,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".footer-text-menu",
                            "selectorGuids": ["853d1883-2b8f-f488-d23a-e477a11dfe44"]
                        },
                        "globalSwatchId": "",
                        "rValue": 162,
                        "bValue": 171,
                        "gValue": 162,
                        "aValue": 1
                    }
                }]
            }],
            "useFirstGroupAsInitialState": false,
            "createdOn": 1702072184926
        },
        "a-29": {
            "id": "a-29",
            "title": "Insight Hover IN",
            "actionItemGroups": [{
                "actionItems": [{
                    "id": "a-29-n",
                    "actionTypeId": "TRANSFORM_SCALE",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".insight-thumbnail-image",
                            "selectorGuids": ["0bfc3a77-99a8-2c4c-f544-7665ef02a783"]
                        },
                        "xValue": 1,
                        "yValue": 1,
                        "locked": true
                    }
                }, {
                    "id": "a-29-n-5",
                    "actionTypeId": "STYLE_FILTER",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".insight-thumbnail-image",
                            "selectorGuids": ["0bfc3a77-99a8-2c4c-f544-7665ef02a783"]
                        },
                        "filters": [{
                            "type": "grayscale",
                            "filterId": "aba7",
                            "value": 0,
                            "unit": "%"
                        }]
                    }
                }, {
                    "id": "a-29-n-2",
                    "actionTypeId": "TRANSFORM_SCALE",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".cursor-button",
                            "selectorGuids": ["d6df76ef-88d1-bf7e-46cf-8c170eb0fb5e"]
                        },
                        "xValue": 0,
                        "yValue": 0,
                        "locked": true
                    }
                }]
            }, {
                "actionItems": [{
                    "id": "a-29-n-3",
                    "actionTypeId": "TRANSFORM_SCALE",
                    "config": {
                        "delay": 0,
                        "easing": "outQuart",
                        "duration": 500,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".insight-thumbnail-image",
                            "selectorGuids": ["0bfc3a77-99a8-2c4c-f544-7665ef02a783"]
                        },
                        "xValue": 1.1,
                        "yValue": 1.1,
                        "locked": true
                    }
                }, {
                    "id": "a-29-n-4",
                    "actionTypeId": "TRANSFORM_SCALE",
                    "config": {
                        "delay": 0,
                        "easing": "outQuart",
                        "duration": 500,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".cursor-button",
                            "selectorGuids": ["d6df76ef-88d1-bf7e-46cf-8c170eb0fb5e"]
                        },
                        "xValue": 1,
                        "yValue": 1,
                        "locked": true
                    }
                }, {
                    "id": "a-29-n-6",
                    "actionTypeId": "STYLE_FILTER",
                    "config": {
                        "delay": 0,
                        "easing": "outQuart",
                        "duration": 500,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".insight-thumbnail-image",
                            "selectorGuids": ["0bfc3a77-99a8-2c4c-f544-7665ef02a783"]
                        },
                        "filters": [{
                            "type": "grayscale",
                            "filterId": "aba7",
                            "value": 50,
                            "unit": "%"
                        }]
                    }
                }]
            }],
            "useFirstGroupAsInitialState": true,
            "createdOn": 1702543599657
        },
        "a-30": {
            "id": "a-30",
            "title": "Insight Hover OUT",
            "actionItemGroups": [{
                "actionItems": [{
                    "id": "a-30-n-3",
                    "actionTypeId": "TRANSFORM_SCALE",
                    "config": {
                        "delay": 0,
                        "easing": "outQuart",
                        "duration": 500,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".insight-thumbnail-image",
                            "selectorGuids": ["0bfc3a77-99a8-2c4c-f544-7665ef02a783"]
                        },
                        "xValue": 1,
                        "yValue": 1,
                        "locked": true
                    }
                }, {
                    "id": "a-30-n-5",
                    "actionTypeId": "STYLE_FILTER",
                    "config": {
                        "delay": 0,
                        "easing": "outQuart",
                        "duration": 500,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".insight-thumbnail-image",
                            "selectorGuids": ["0bfc3a77-99a8-2c4c-f544-7665ef02a783"]
                        },
                        "filters": [{
                            "type": "grayscale",
                            "filterId": "9311",
                            "value": 0,
                            "unit": "%"
                        }]
                    }
                }, {
                    "id": "a-30-n-4",
                    "actionTypeId": "TRANSFORM_SCALE",
                    "config": {
                        "delay": 0,
                        "easing": "outQuart",
                        "duration": 500,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".cursor-button",
                            "selectorGuids": ["d6df76ef-88d1-bf7e-46cf-8c170eb0fb5e"]
                        },
                        "xValue": 0,
                        "yValue": 0,
                        "locked": true
                    }
                }]
            }],
            "useFirstGroupAsInitialState": false,
            "createdOn": 1702543599657
        },
        "a-31": {
            "id": "a-31",
            "title": "Hero Image Sticky",
            "continuousParameterGroups": [{
                "id": "a-31-p",
                "type": "SCROLL_PROGRESS",
                "parameterLabel": "Scroll",
                "continuousActionGroups": [{
                    "keyframe": 32,
                    "actionItems": [{
                        "id": "a-31-n",
                        "actionTypeId": "TRANSFORM_SCALE",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "useEventTarget": "CHILDREN",
                                "selector": ".hero-image.is-image-01",
                                "selectorGuids": ["2b2431bb-477e-07f5-f944-9d6969558ca4", "e01033a3-bd24-5402-cf8f-0e5e0e195092"]
                            },
                            "xValue": 1,
                            "yValue": 1,
                            "locked": true
                        }
                    }, {
                        "id": "a-31-n-5",
                        "actionTypeId": "STYLE_FILTER",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "useEventTarget": "CHILDREN",
                                "selector": ".hero-image.is-image-01",
                                "selectorGuids": ["2b2431bb-477e-07f5-f944-9d6969558ca4", "e01033a3-bd24-5402-cf8f-0e5e0e195092"]
                            },
                            "filters": [{
                                "type": "blur",
                                "filterId": "2ccc",
                                "value": 0,
                                "unit": "px"
                            }]
                        }
                    }]
                }, {
                    "keyframe": 48,
                    "actionItems": [{
                        "id": "a-31-n-2",
                        "actionTypeId": "TRANSFORM_SCALE",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "useEventTarget": "CHILDREN",
                                "selector": ".hero-image.is-image-01",
                                "selectorGuids": ["2b2431bb-477e-07f5-f944-9d6969558ca4", "e01033a3-bd24-5402-cf8f-0e5e0e195092"]
                            },
                            "xValue": 0.8,
                            "yValue": 0.8,
                            "locked": true
                        }
                    }, {
                        "id": "a-31-n-6",
                        "actionTypeId": "STYLE_FILTER",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "useEventTarget": "CHILDREN",
                                "selector": ".hero-image.is-image-01",
                                "selectorGuids": ["2b2431bb-477e-07f5-f944-9d6969558ca4", "e01033a3-bd24-5402-cf8f-0e5e0e195092"]
                            },
                            "filters": [{
                                "type": "blur",
                                "filterId": "2ccc",
                                "value": 5,
                                "unit": "px"
                            }]
                        }
                    }]
                }, {
                    "keyframe": 52,
                    "actionItems": [{
                        "id": "a-31-n-3",
                        "actionTypeId": "TRANSFORM_SCALE",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "useEventTarget": "CHILDREN",
                                "selector": ".hero-image.is-image-02",
                                "selectorGuids": ["2b2431bb-477e-07f5-f944-9d6969558ca4", "80300ea9-d037-cd05-9e76-ad7fb9b4eb12"]
                            },
                            "xValue": 1,
                            "yValue": 1,
                            "locked": true
                        }
                    }, {
                        "id": "a-31-n-7",
                        "actionTypeId": "STYLE_FILTER",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "useEventTarget": "CHILDREN",
                                "selector": ".hero-image.is-image-02",
                                "selectorGuids": ["2b2431bb-477e-07f5-f944-9d6969558ca4", "80300ea9-d037-cd05-9e76-ad7fb9b4eb12"]
                            },
                            "filters": [{
                                "type": "blur",
                                "filterId": "2ccc",
                                "value": 0,
                                "unit": "px"
                            }]
                        }
                    }]
                }, {
                    "keyframe": 68,
                    "actionItems": [{
                        "id": "a-31-n-4",
                        "actionTypeId": "TRANSFORM_SCALE",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "useEventTarget": "CHILDREN",
                                "selector": ".hero-image.is-image-02",
                                "selectorGuids": ["2b2431bb-477e-07f5-f944-9d6969558ca4", "80300ea9-d037-cd05-9e76-ad7fb9b4eb12"]
                            },
                            "xValue": 0.9,
                            "yValue": 0.9,
                            "locked": true
                        }
                    }, {
                        "id": "a-31-n-8",
                        "actionTypeId": "STYLE_FILTER",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "useEventTarget": "CHILDREN",
                                "selector": ".hero-image.is-image-02",
                                "selectorGuids": ["2b2431bb-477e-07f5-f944-9d6969558ca4", "80300ea9-d037-cd05-9e76-ad7fb9b4eb12"]
                            },
                            "filters": [{
                                "type": "blur",
                                "filterId": "2ccc",
                                "value": 5,
                                "unit": "px"
                            }]
                        }
                    }]
                }]
            }],
            "createdOn": 1702624789588
        },
        "a-35": {
            "id": "a-35",
            "title": "Image Reveal on Scroll",
            "actionItemGroups": [{
                "actionItems": [{
                    "id": "a-35-n",
                    "actionTypeId": "GENERAL_DISPLAY",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 0,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".image-bg-overlay",
                            "selectorGuids": ["ef9e1e80-a078-ef59-415b-b16b0b68fcad"]
                        },
                        "value": "block"
                    }
                }, {
                    "id": "a-35-n-3",
                    "actionTypeId": "TRANSFORM_SCALE",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".image-cover",
                            "selectorGuids": ["b8384446-2abb-1af5-e406-e6042d9cd55b"]
                        },
                        "xValue": 1.1,
                        "yValue": 1.1,
                        "locked": true
                    }
                }]
            }, {
                "actionItems": [{
                    "id": "a-35-n-2",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 400,
                        "easing": "outCubic",
                        "duration": 800,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".image-bg-overlay",
                            "selectorGuids": ["ef9e1e80-a078-ef59-415b-b16b0b68fcad"]
                        },
                        "xValue": 100,
                        "xUnit": "%",
                        "yUnit": "PX",
                        "zUnit": "PX"
                    }
                }, {
                    "id": "a-35-n-4",
                    "actionTypeId": "TRANSFORM_SCALE",
                    "config": {
                        "delay": 400,
                        "easing": "ease",
                        "duration": 1000,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".image-cover",
                            "selectorGuids": ["b8384446-2abb-1af5-e406-e6042d9cd55b"]
                        },
                        "xValue": 1,
                        "yValue": 1,
                        "locked": true
                    }
                }]
            }],
            "useFirstGroupAsInitialState": true,
            "createdOn": 1702983045732
        },
        "a-36": {
            "id": "a-36",
            "title": "Company Logo Appear",
            "actionItemGroups": [{
                "actionItems": [{
                    "id": "a-36-n",
                    "actionTypeId": "TRANSFORM_SCALE",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "id": "2fc91300-3c28-44f5-3b9f-ef2c907ee621"
                        },
                        "xValue": 0,
                        "yValue": 0,
                        "locked": true
                    }
                }, {
                    "id": "a-36-n-2",
                    "actionTypeId": "TRANSFORM_SCALE",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "id": "2fc91300-3c28-44f5-3b9f-ef2c907ee623"
                        },
                        "xValue": 0,
                        "yValue": 0,
                        "locked": true
                    }
                }, {
                    "id": "a-36-n-3",
                    "actionTypeId": "TRANSFORM_SCALE",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "id": "2fc91300-3c28-44f5-3b9f-ef2c907ee625"
                        },
                        "xValue": 0,
                        "yValue": 0,
                        "locked": true
                    }
                }, {
                    "id": "a-36-n-4",
                    "actionTypeId": "TRANSFORM_SCALE",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "id": "2fc91300-3c28-44f5-3b9f-ef2c907ee627"
                        },
                        "xValue": 0,
                        "yValue": 0,
                        "locked": true
                    }
                }, {
                    "id": "a-36-n-5",
                    "actionTypeId": "TRANSFORM_SCALE",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "id": "2fc91300-3c28-44f5-3b9f-ef2c907ee629"
                        },
                        "xValue": 0,
                        "yValue": 0,
                        "locked": true
                    }
                }, {
                    "id": "a-36-n-6",
                    "actionTypeId": "TRANSFORM_SCALE",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "id": "2fc91300-3c28-44f5-3b9f-ef2c907ee62b"
                        },
                        "xValue": 0,
                        "yValue": 0,
                        "locked": true
                    }
                }, {
                    "id": "a-36-n-7",
                    "actionTypeId": "TRANSFORM_SCALE",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "id": "2fc91300-3c28-44f5-3b9f-ef2c907ee62d"
                        },
                        "xValue": 0,
                        "yValue": 0,
                        "locked": true
                    }
                }, {
                    "id": "a-36-n-8",
                    "actionTypeId": "TRANSFORM_SCALE",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "id": "2fc91300-3c28-44f5-3b9f-ef2c907ee62f"
                        },
                        "xValue": 0,
                        "yValue": 0,
                        "locked": true
                    }
                }, {
                    "id": "a-36-n-9",
                    "actionTypeId": "TRANSFORM_SCALE",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "id": "2fc91300-3c28-44f5-3b9f-ef2c907ee631"
                        },
                        "xValue": 0,
                        "yValue": 0,
                        "locked": true
                    }
                }, {
                    "id": "a-36-n-10",
                    "actionTypeId": "TRANSFORM_SCALE",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "id": "2fc91300-3c28-44f5-3b9f-ef2c907ee633"
                        },
                        "xValue": 0,
                        "yValue": 0,
                        "locked": true
                    }
                }, {
                    "id": "a-36-n-11",
                    "actionTypeId": "TRANSFORM_SCALE",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "id": "2fc91300-3c28-44f5-3b9f-ef2c907ee635"
                        },
                        "xValue": 0,
                        "yValue": 0,
                        "locked": true
                    }
                }, {
                    "id": "a-36-n-12",
                    "actionTypeId": "TRANSFORM_SCALE",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "id": "2fc91300-3c28-44f5-3b9f-ef2c907ee637"
                        },
                        "xValue": 0,
                        "yValue": 0,
                        "locked": true
                    }
                }]
            }, {
                "actionItems": [{
                    "id": "a-36-n-13",
                    "actionTypeId": "TRANSFORM_SCALE",
                    "config": {
                        "delay": 100,
                        "easing": "outQuart",
                        "duration": 500,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "id": "2fc91300-3c28-44f5-3b9f-ef2c907ee621"
                        },
                        "xValue": 1,
                        "yValue": 1,
                        "locked": true
                    }
                }, {
                    "id": "a-36-n-14",
                    "actionTypeId": "TRANSFORM_SCALE",
                    "config": {
                        "delay": 200,
                        "easing": "outQuart",
                        "duration": 500,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "id": "2fc91300-3c28-44f5-3b9f-ef2c907ee623"
                        },
                        "xValue": 1,
                        "yValue": 1,
                        "locked": true
                    }
                }, {
                    "id": "a-36-n-15",
                    "actionTypeId": "TRANSFORM_SCALE",
                    "config": {
                        "delay": 300,
                        "easing": "outQuart",
                        "duration": 500,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "id": "2fc91300-3c28-44f5-3b9f-ef2c907ee625"
                        },
                        "xValue": 1,
                        "yValue": 1,
                        "locked": true
                    }
                }, {
                    "id": "a-36-n-16",
                    "actionTypeId": "TRANSFORM_SCALE",
                    "config": {
                        "delay": 400,
                        "easing": "outQuart",
                        "duration": 500,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "id": "2fc91300-3c28-44f5-3b9f-ef2c907ee627"
                        },
                        "xValue": 1,
                        "yValue": 1,
                        "locked": true
                    }
                }, {
                    "id": "a-36-n-17",
                    "actionTypeId": "TRANSFORM_SCALE",
                    "config": {
                        "delay": 500,
                        "easing": "outQuart",
                        "duration": 500,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "id": "2fc91300-3c28-44f5-3b9f-ef2c907ee629"
                        },
                        "xValue": 1,
                        "yValue": 1,
                        "locked": true
                    }
                }, {
                    "id": "a-36-n-18",
                    "actionTypeId": "TRANSFORM_SCALE",
                    "config": {
                        "delay": 600,
                        "easing": "outQuart",
                        "duration": 500,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "id": "2fc91300-3c28-44f5-3b9f-ef2c907ee62b"
                        },
                        "xValue": 1,
                        "yValue": 1,
                        "locked": true
                    }
                }, {
                    "id": "a-36-n-19",
                    "actionTypeId": "TRANSFORM_SCALE",
                    "config": {
                        "delay": 700,
                        "easing": "outQuart",
                        "duration": 500,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "id": "2fc91300-3c28-44f5-3b9f-ef2c907ee62d"
                        },
                        "xValue": 1,
                        "yValue": 1,
                        "locked": true
                    }
                }, {
                    "id": "a-36-n-20",
                    "actionTypeId": "TRANSFORM_SCALE",
                    "config": {
                        "delay": 800,
                        "easing": "outQuart",
                        "duration": 500,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "id": "2fc91300-3c28-44f5-3b9f-ef2c907ee62f"
                        },
                        "xValue": 1,
                        "yValue": 1,
                        "locked": true
                    }
                }, {
                    "id": "a-36-n-21",
                    "actionTypeId": "TRANSFORM_SCALE",
                    "config": {
                        "delay": 900,
                        "easing": "outQuart",
                        "duration": 500,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "id": "2fc91300-3c28-44f5-3b9f-ef2c907ee631"
                        },
                        "xValue": 1,
                        "yValue": 1,
                        "locked": true
                    }
                }, {
                    "id": "a-36-n-22",
                    "actionTypeId": "TRANSFORM_SCALE",
                    "config": {
                        "delay": 1000,
                        "easing": "outQuart",
                        "duration": 500,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "id": "2fc91300-3c28-44f5-3b9f-ef2c907ee633"
                        },
                        "xValue": 1,
                        "yValue": 1,
                        "locked": true
                    }
                }, {
                    "id": "a-36-n-23",
                    "actionTypeId": "TRANSFORM_SCALE",
                    "config": {
                        "delay": 1100,
                        "easing": "outQuart",
                        "duration": 500,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "id": "2fc91300-3c28-44f5-3b9f-ef2c907ee635"
                        },
                        "xValue": 1,
                        "yValue": 1,
                        "locked": true
                    }
                }, {
                    "id": "a-36-n-24",
                    "actionTypeId": "TRANSFORM_SCALE",
                    "config": {
                        "delay": 1200,
                        "easing": "outQuart",
                        "duration": 500,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "id": "2fc91300-3c28-44f5-3b9f-ef2c907ee637"
                        },
                        "xValue": 1,
                        "yValue": 1,
                        "locked": true
                    }
                }]
            }],
            "useFirstGroupAsInitialState": true,
            "createdOn": 1702987921459
        },
        "a-37": {
            "id": "a-37",
            "title": "Image Reveal on Scroll DOWN",
            "actionItemGroups": [{
                "actionItems": [{
                    "id": "a-37-n",
                    "actionTypeId": "GENERAL_DISPLAY",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 0,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".image-bg-overlay",
                            "selectorGuids": ["ef9e1e80-a078-ef59-415b-b16b0b68fcad"]
                        },
                        "value": "block"
                    }
                }, {
                    "id": "a-37-n-2",
                    "actionTypeId": "TRANSFORM_SCALE",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".image-cover",
                            "selectorGuids": ["b8384446-2abb-1af5-e406-e6042d9cd55b"]
                        },
                        "xValue": 1.1,
                        "yValue": 1.1,
                        "locked": true
                    }
                }]
            }, {
                "actionItems": [{
                    "id": "a-37-n-3",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 400,
                        "easing": "outCubic",
                        "duration": 800,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".image-bg-overlay",
                            "selectorGuids": ["ef9e1e80-a078-ef59-415b-b16b0b68fcad"]
                        },
                        "xValue": null,
                        "yValue": 100,
                        "xUnit": "%",
                        "yUnit": "%",
                        "zUnit": "PX"
                    }
                }, {
                    "id": "a-37-n-4",
                    "actionTypeId": "TRANSFORM_SCALE",
                    "config": {
                        "delay": 400,
                        "easing": "ease",
                        "duration": 1000,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".image-cover",
                            "selectorGuids": ["b8384446-2abb-1af5-e406-e6042d9cd55b"]
                        },
                        "xValue": 1,
                        "yValue": 1,
                        "locked": true
                    }
                }]
            }],
            "useFirstGroupAsInitialState": true,
            "createdOn": 1702983045732
        },
        "a-38": {
            "id": "a-38",
            "title": "Home Project Scroll View",
            "actionItemGroups": [],
            "useFirstGroupAsInitialState": false,
            "createdOn": 1702996664467
        },
        "a-39": {
            "id": "a-39",
            "title": "Pricing Button Hover IN",
            "actionItemGroups": [{
                "actionItems": [{
                    "id": "a-39-n",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".button-text",
                            "selectorGuids": ["c49851da-46c8-1cd1-d85e-64b4ab61ca64"]
                        },
                        "yValue": 0,
                        "xUnit": "PX",
                        "yUnit": "%",
                        "zUnit": "PX"
                    }
                }]
            }, {
                "actionItems": [{
                    "id": "a-39-n-2",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 0,
                        "easing": "outQuint",
                        "duration": 500,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".button-text",
                            "selectorGuids": ["c49851da-46c8-1cd1-d85e-64b4ab61ca64"]
                        },
                        "yValue": -100,
                        "xUnit": "PX",
                        "yUnit": "%",
                        "zUnit": "PX"
                    }
                }]
            }],
            "useFirstGroupAsInitialState": true,
            "createdOn": 1703042758785
        },
        "a-40": {
            "id": "a-40",
            "title": "Pricing Button Hover OUT",
            "actionItemGroups": [{
                "actionItems": [{
                    "id": "a-40-n",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 0,
                        "easing": "outQuart",
                        "duration": 500,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".button-text",
                            "selectorGuids": ["c49851da-46c8-1cd1-d85e-64b4ab61ca64"]
                        },
                        "yValue": 0,
                        "xUnit": "PX",
                        "yUnit": "%",
                        "zUnit": "PX"
                    }
                }]
            }],
            "useFirstGroupAsInitialState": false,
            "createdOn": 1703042758785
        },
        "a-41": {
            "id": "a-41",
            "title": "Project Hover IN",
            "actionItemGroups": [{
                "actionItems": [{
                    "id": "a-41-n",
                    "actionTypeId": "TRANSFORM_SCALE",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".image-cover",
                            "selectorGuids": ["b8384446-2abb-1af5-e406-e6042d9cd55b"]
                        },
                        "xValue": 1,
                        "yValue": 1,
                        "locked": true
                    }
                }]
            }, {
                "actionItems": [{
                    "id": "a-41-n-2",
                    "actionTypeId": "TRANSFORM_SCALE",
                    "config": {
                        "delay": 0,
                        "easing": "outSine",
                        "duration": 500,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".image-cover",
                            "selectorGuids": ["b8384446-2abb-1af5-e406-e6042d9cd55b"]
                        },
                        "xValue": 1.1,
                        "yValue": 1.1,
                        "locked": true
                    }
                }]
            }],
            "useFirstGroupAsInitialState": true,
            "createdOn": 1703051409113
        },
        "a-42": {
            "id": "a-42",
            "title": "Project Hover OUT",
            "actionItemGroups": [{
                "actionItems": [{
                    "id": "a-42-n-2",
                    "actionTypeId": "TRANSFORM_SCALE",
                    "config": {
                        "delay": 0,
                        "easing": "outSine",
                        "duration": 500,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".image-cover",
                            "selectorGuids": ["b8384446-2abb-1af5-e406-e6042d9cd55b"]
                        },
                        "xValue": 1,
                        "yValue": 1,
                        "locked": true
                    }
                }]
            }],
            "useFirstGroupAsInitialState": false,
            "createdOn": 1703051409113
        },
        "a-32": {
            "id": "a-32",
            "title": "Page Loader",
            "actionItemGroups": [{
                "actionItems": [{
                    "id": "a-32-n",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "id": "656c23e118a42479510d6622|33e5ef1a-6fd1-ac79-144f-2092b3ba5a7d"
                        },
                        "yValue": 0,
                        "xUnit": "PX",
                        "yUnit": "%",
                        "zUnit": "PX"
                    }
                }, {
                    "id": "a-32-n-9",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "id": "656c23e118a42479510d6622|b576df1a-78f6-47c4-9ec5-c75c050387c7"
                        },
                        "yValue": 120,
                        "xUnit": "PX",
                        "yUnit": "px",
                        "zUnit": "PX"
                    }
                }, {
                    "id": "a-32-n-7",
                    "actionTypeId": "TRANSFORM_ROTATE",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "id": "656c23e118a42479510d6622|b576df1a-78f6-47c4-9ec5-c75c050387c7"
                        },
                        "xValue": 0,
                        "xUnit": "deg",
                        "yUnit": "DEG",
                        "zUnit": "DEG"
                    }
                }, {
                    "id": "a-32-n-5",
                    "actionTypeId": "GENERAL_DISPLAY",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 0,
                        "target": {
                            "id": "656c23e118a42479510d6622|5d4321fe-d2a0-a35c-c110-9de71ed964e7"
                        },
                        "value": "block"
                    }
                }, {
                    "id": "a-32-n-2",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "id": "656c23e118a42479510d6622|9b3919ab-dc97-bf29-a381-2c28df2cf908"
                        },
                        "yValue": 0,
                        "xUnit": "PX",
                        "yUnit": "%",
                        "zUnit": "PX"
                    }
                }]
            }, {
                "actionItems": [{
                    "id": "a-32-n-10",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 0,
                        "easing": "outQuart",
                        "duration": 500,
                        "target": {
                            "id": "656c23e118a42479510d6622|b576df1a-78f6-47c4-9ec5-c75c050387c7"
                        },
                        "yValue": 0,
                        "xUnit": "PX",
                        "yUnit": "px",
                        "zUnit": "PX"
                    }
                }]
            }, {
                "actionItems": [{
                    "id": "a-32-n-8",
                    "actionTypeId": "TRANSFORM_ROTATE",
                    "config": {
                        "delay": 500,
                        "easing": "outQuart",
                        "duration": 500,
                        "target": {
                            "id": "656c23e118a42479510d6622|b576df1a-78f6-47c4-9ec5-c75c050387c7"
                        },
                        "xValue": -90,
                        "xUnit": "deg",
                        "yUnit": "DEG",
                        "zUnit": "DEG"
                    }
                }]
            }, {
                "actionItems": [{
                    "id": "a-32-n-4",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 200,
                        "easing": "outQuart",
                        "duration": 1200,
                        "target": {
                            "id": "656c23e118a42479510d6622|9b3919ab-dc97-bf29-a381-2c28df2cf908"
                        },
                        "yValue": 100,
                        "xUnit": "PX",
                        "yUnit": "%",
                        "zUnit": "PX"
                    }
                }, {
                    "id": "a-32-n-3",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 300,
                        "easing": "outQuart",
                        "duration": 1200,
                        "target": {
                            "id": "656c23e118a42479510d6622|33e5ef1a-6fd1-ac79-144f-2092b3ba5a7d"
                        },
                        "yValue": -100,
                        "xUnit": "PX",
                        "yUnit": "%",
                        "zUnit": "PX"
                    }
                }, {
                    "id": "a-32-n-6",
                    "actionTypeId": "GENERAL_DISPLAY",
                    "config": {
                        "delay": 2000,
                        "easing": "",
                        "duration": 0,
                        "target": {
                            "id": "656c23e118a42479510d6622|5d4321fe-d2a0-a35c-c110-9de71ed964e7"
                        },
                        "value": "none"
                    }
                }]
            }],
            "useFirstGroupAsInitialState": true,
            "createdOn": 1702677257198
        },
        "a-13": {
            "id": "a-13",
            "title": "Navlink Button Hover IN",
            "actionItemGroups": [{
                "actionItems": [{
                    "id": "a-13-n-2",
                    "actionTypeId": "STYLE_TEXT_COLOR",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".navbar-menu-text",
                            "selectorGuids": ["e5d2a599-458f-adf6-b187-84736b21eded"]
                        },
                        "globalSwatchId": "",
                        "rValue": 112,
                        "bValue": 121,
                        "gValue": 112,
                        "aValue": 1
                    }
                }, {
                    "id": "a-13-n-4",
                    "actionTypeId": "GENERAL_DISPLAY",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 0,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".navlink-icon-wrapper",
                            "selectorGuids": ["a6700146-da06-c194-0311-448e967f6ff8"]
                        },
                        "value": "none"
                    }
                }]
            }, {
                "actionItems": [{
                    "id": "a-13-n-3",
                    "actionTypeId": "STYLE_TEXT_COLOR",
                    "config": {
                        "delay": 0,
                        "easing": "outExpo",
                        "duration": 500,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".navbar-menu-text",
                            "selectorGuids": ["e5d2a599-458f-adf6-b187-84736b21eded"]
                        },
                        "globalSwatchId": "",
                        "rValue": 28,
                        "bValue": 28,
                        "gValue": 28,
                        "aValue": 1
                    }
                }, {
                    "id": "a-13-n",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 0,
                        "easing": "outExpo",
                        "duration": 500,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".icon-48x48",
                            "selectorGuids": ["5e9b5621-67d9-9eee-48be-cbde056d9342"]
                        },
                        "xValue": 48,
                        "yValue": -48,
                        "xUnit": "px",
                        "yUnit": "px",
                        "zUnit": "PX"
                    }
                }, {
                    "id": "a-13-n-5",
                    "actionTypeId": "GENERAL_DISPLAY",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 0,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".navlink-icon-wrapper",
                            "selectorGuids": ["a6700146-da06-c194-0311-448e967f6ff8"]
                        },
                        "value": "flex"
                    }
                }]
            }],
            "useFirstGroupAsInitialState": true,
            "createdOn": 1701686290515
        },
        "a-44": {
            "id": "a-44",
            "title": "Navlink Button Hover OUT",
            "actionItemGroups": [{
                "actionItems": [{
                    "id": "a-44-n-3",
                    "actionTypeId": "STYLE_TEXT_COLOR",
                    "config": {
                        "delay": 0,
                        "easing": "outExpo",
                        "duration": 500,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".navbar-menu-text",
                            "selectorGuids": ["e5d2a599-458f-adf6-b187-84736b21eded"]
                        },
                        "globalSwatchId": "",
                        "rValue": 112,
                        "bValue": 121,
                        "gValue": 112,
                        "aValue": 1
                    }
                }, {
                    "id": "a-44-n-4",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 0,
                        "easing": "outExpo",
                        "duration": 500,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".icon-48x48",
                            "selectorGuids": ["5e9b5621-67d9-9eee-48be-cbde056d9342"]
                        },
                        "xValue": -48,
                        "yValue": 48,
                        "xUnit": "px",
                        "yUnit": "px",
                        "zUnit": "PX"
                    }
                }, {
                    "id": "a-44-n-5",
                    "actionTypeId": "GENERAL_DISPLAY",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 0,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".navlink-icon-wrapper",
                            "selectorGuids": ["a6700146-da06-c194-0311-448e967f6ff8"]
                        },
                        "value": "none"
                    }
                }]
            }],
            "useFirstGroupAsInitialState": false,
            "createdOn": 1701686290515
        },
        "a-15": {
            "id": "a-15",
            "title": "Navbar OPEN",
            "actionItemGroups": [{
                "actionItems": [{
                    "id": "a-15-n-9",
                    "actionTypeId": "STYLE_BACKGROUND_COLOR",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 100,
                        "target": {
                            "useEventTarget": true,
                            "id": "1d18c955-1001-fd82-f798-46cac43eadc8"
                        },
                        "globalSwatchId": "",
                        "rValue": 255,
                        "bValue": 255,
                        "gValue": 255,
                        "aValue": 1
                    }
                }]
            }, {
                "actionItems": [{
                    "id": "a-15-n",
                    "actionTypeId": "STYLE_SIZE",
                    "config": {
                        "delay": 0,
                        "easing": "bounce",
                        "duration": 300,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".burger-line-top",
                            "selectorGuids": ["5debdc07-2392-7e86-e409-37e0f92b6c19"]
                        },
                        "widthValue": 15,
                        "widthUnit": "px",
                        "heightUnit": "PX",
                        "locked": false
                    }
                }, {
                    "id": "a-15-n-2",
                    "actionTypeId": "STYLE_SIZE",
                    "config": {
                        "delay": 0,
                        "easing": "bounce",
                        "duration": 300,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".burger-line-bottom",
                            "selectorGuids": ["8abef53f-6074-d6fc-1a4d-c3d3e9efcd72"]
                        },
                        "widthValue": 15,
                        "widthUnit": "px",
                        "heightUnit": "PX",
                        "locked": false
                    }
                }, {
                    "id": "a-15-n-8",
                    "actionTypeId": "STYLE_BACKGROUND_COLOR",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 100,
                        "target": {
                            "useEventTarget": true,
                            "id": "1d18c955-1001-fd82-f798-46cac43eadc8"
                        },
                        "globalSwatchId": "",
                        "rValue": 229,
                        "bValue": 232,
                        "gValue": 229,
                        "aValue": 1
                    }
                }, {
                    "id": "a-15-n-4",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 200,
                        "easing": "inOutQuint",
                        "duration": 400,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".burger-line-top",
                            "selectorGuids": ["5debdc07-2392-7e86-e409-37e0f92b6c19"]
                        },
                        "xValue": 2,
                        "yValue": 2,
                        "xUnit": "px",
                        "yUnit": "px",
                        "zUnit": "PX"
                    }
                }, {
                    "id": "a-15-n-3",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 200,
                        "easing": "inOutQuint",
                        "duration": 400,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".burger-line-bottom",
                            "selectorGuids": ["8abef53f-6074-d6fc-1a4d-c3d3e9efcd72"]
                        },
                        "xValue": -2,
                        "yValue": -2,
                        "xUnit": "px",
                        "yUnit": "px",
                        "zUnit": "PX"
                    }
                }, {
                    "id": "a-15-n-5",
                    "actionTypeId": "TRANSFORM_ROTATE",
                    "config": {
                        "delay": 200,
                        "easing": "inOutQuart",
                        "duration": 500,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".burger-line-middle",
                            "selectorGuids": ["946c0609-e5f1-fb6c-71c3-4b4ab9e3673d"]
                        },
                        "zValue": -45,
                        "xUnit": "DEG",
                        "yUnit": "DEG",
                        "zUnit": "deg"
                    }
                }, {
                    "id": "a-15-n-6",
                    "actionTypeId": "TRANSFORM_ROTATE",
                    "config": {
                        "delay": 200,
                        "easing": "inOutQuart",
                        "duration": 500,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".burger-line-top",
                            "selectorGuids": ["5debdc07-2392-7e86-e409-37e0f92b6c19"]
                        },
                        "zValue": 45,
                        "xUnit": "DEG",
                        "yUnit": "DEG",
                        "zUnit": "deg"
                    }
                }, {
                    "id": "a-15-n-7",
                    "actionTypeId": "TRANSFORM_ROTATE",
                    "config": {
                        "delay": 200,
                        "easing": "inOutQuart",
                        "duration": 500,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".burger-line-bottom",
                            "selectorGuids": ["8abef53f-6074-d6fc-1a4d-c3d3e9efcd72"]
                        },
                        "zValue": 45,
                        "xUnit": "DEG",
                        "yUnit": "DEG",
                        "zUnit": "deg"
                    }
                }]
            }],
            "useFirstGroupAsInitialState": true,
            "createdOn": 1701694498373
        },
        "a-16": {
            "id": "a-16",
            "title": "Navbar CLOSE",
            "actionItemGroups": [{
                "actionItems": [{
                    "id": "a-16-n-8",
                    "actionTypeId": "STYLE_BACKGROUND_COLOR",
                    "config": {
                        "delay": 0,
                        "easing": "inOutExpo",
                        "duration": 400,
                        "target": {
                            "useEventTarget": true,
                            "id": "1d18c955-1001-fd82-f798-46cac43eadc8"
                        },
                        "globalSwatchId": "",
                        "rValue": 255,
                        "bValue": 255,
                        "gValue": 255,
                        "aValue": 1
                    }
                }, {
                    "id": "a-16-n-6",
                    "actionTypeId": "TRANSFORM_ROTATE",
                    "config": {
                        "delay": 0,
                        "easing": "easeInOut",
                        "duration": 500,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".burger-line-top",
                            "selectorGuids": ["5debdc07-2392-7e86-e409-37e0f92b6c19"]
                        },
                        "zValue": 0,
                        "xUnit": "DEG",
                        "yUnit": "DEG",
                        "zUnit": "deg"
                    }
                }, {
                    "id": "a-16-n",
                    "actionTypeId": "STYLE_SIZE",
                    "config": {
                        "delay": 0,
                        "easing": "easeInOut",
                        "duration": 300,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".burger-line-top",
                            "selectorGuids": ["5debdc07-2392-7e86-e409-37e0f92b6c19"]
                        },
                        "widthValue": 30,
                        "widthUnit": "px",
                        "heightUnit": "PX",
                        "locked": false
                    }
                }, {
                    "id": "a-16-n-2",
                    "actionTypeId": "STYLE_SIZE",
                    "config": {
                        "delay": 0,
                        "easing": "easeInOut",
                        "duration": 300,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".burger-line-bottom",
                            "selectorGuids": ["8abef53f-6074-d6fc-1a4d-c3d3e9efcd72"]
                        },
                        "widthValue": 30,
                        "widthUnit": "px",
                        "heightUnit": "PX",
                        "locked": false
                    }
                }, {
                    "id": "a-16-n-5",
                    "actionTypeId": "TRANSFORM_ROTATE",
                    "config": {
                        "delay": 0,
                        "easing": "easeInOut",
                        "duration": 300,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".burger-line-middle",
                            "selectorGuids": ["946c0609-e5f1-fb6c-71c3-4b4ab9e3673d"]
                        },
                        "zValue": 0,
                        "xUnit": "DEG",
                        "yUnit": "DEG",
                        "zUnit": "deg"
                    }
                }, {
                    "id": "a-16-n-7",
                    "actionTypeId": "TRANSFORM_ROTATE",
                    "config": {
                        "delay": 0,
                        "easing": "easeInOut",
                        "duration": 300,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".burger-line-bottom",
                            "selectorGuids": ["8abef53f-6074-d6fc-1a4d-c3d3e9efcd72"]
                        },
                        "zValue": 0,
                        "xUnit": "DEG",
                        "yUnit": "DEG",
                        "zUnit": "deg"
                    }
                }, {
                    "id": "a-16-n-3",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 0,
                        "easing": "easeInOut",
                        "duration": 300,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".burger-line-top",
                            "selectorGuids": ["5debdc07-2392-7e86-e409-37e0f92b6c19"]
                        },
                        "xValue": 0,
                        "yValue": 0,
                        "xUnit": "px",
                        "yUnit": "px",
                        "zUnit": "PX"
                    }
                }, {
                    "id": "a-16-n-4",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 0,
                        "easing": "easeInOut",
                        "duration": 300,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".burger-line-bottom",
                            "selectorGuids": ["8abef53f-6074-d6fc-1a4d-c3d3e9efcd72"]
                        },
                        "xValue": 0,
                        "yValue": 0,
                        "xUnit": "px",
                        "yUnit": "px",
                        "zUnit": "PX"
                    }
                }]
            }],
            "useFirstGroupAsInitialState": false,
            "createdOn": 1701694498373
        },
        "a-45": {
            "id": "a-45",
            "title": "Parallax Image",
            "continuousParameterGroups": [{
                "id": "a-45-p",
                "type": "SCROLL_PROGRESS",
                "parameterLabel": "Scroll",
                "continuousActionGroups": [{
                    "keyframe": 0,
                    "actionItems": [{
                        "id": "a-45-n",
                        "actionTypeId": "TRANSFORM_SCALE",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "useEventTarget": "CHILDREN",
                                "selector": ".image-cover",
                                "selectorGuids": ["b8384446-2abb-1af5-e406-e6042d9cd55b"]
                            },
                            "xValue": 1.1,
                            "yValue": 1.1,
                            "locked": true
                        }
                    }, {
                        "id": "a-45-n-3",
                        "actionTypeId": "TRANSFORM_MOVE",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "useEventTarget": "CHILDREN",
                                "selector": ".image-cover",
                                "selectorGuids": ["b8384446-2abb-1af5-e406-e6042d9cd55b"]
                            },
                            "yValue": 3,
                            "xUnit": "PX",
                            "yUnit": "vh",
                            "zUnit": "PX"
                        }
                    }]
                }, {
                    "keyframe": 100,
                    "actionItems": [{
                        "id": "a-45-n-2",
                        "actionTypeId": "TRANSFORM_SCALE",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "useEventTarget": "CHILDREN",
                                "selector": ".image-cover",
                                "selectorGuids": ["b8384446-2abb-1af5-e406-e6042d9cd55b"]
                            },
                            "xValue": 1,
                            "yValue": 1,
                            "locked": true
                        }
                    }, {
                        "id": "a-45-n-4",
                        "actionTypeId": "TRANSFORM_MOVE",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "useEventTarget": "CHILDREN",
                                "selector": ".image-cover",
                                "selectorGuids": ["b8384446-2abb-1af5-e406-e6042d9cd55b"]
                            },
                            "yValue": 0,
                            "xUnit": "PX",
                            "yUnit": "vh",
                            "zUnit": "PX"
                        }
                    }]
                }]
            }],
            "createdOn": 1703196754895
        },
        "slideInBottom": {
            "id": "slideInBottom",
            "useFirstGroupAsInitialState": true,
            "actionItemGroups": [{
                "actionItems": [{
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "duration": 0,
                        "target": {
                            "id": "N/A",
                            "appliesTo": "TRIGGER_ELEMENT",
                            "useEventTarget": true
                        },
                        "value": 0
                    }
                }]
            }, {
                "actionItems": [{
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 0,
                        "duration": 0,
                        "target": {
                            "id": "N/A",
                            "appliesTo": "TRIGGER_ELEMENT",
                            "useEventTarget": true
                        },
                        "xValue": 0,
                        "yValue": 100,
                        "xUnit": "PX",
                        "yUnit": "PX",
                        "zUnit": "PX"
                    }
                }]
            }, {
                "actionItems": [{
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 0,
                        "easing": "outQuart",
                        "duration": 1000,
                        "target": {
                            "id": "N/A",
                            "appliesTo": "TRIGGER_ELEMENT",
                            "useEventTarget": true
                        },
                        "xValue": 0,
                        "yValue": 0,
                        "xUnit": "PX",
                        "yUnit": "PX",
                        "zUnit": "PX"
                    }
                }, {
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "easing": "outQuart",
                        "duration": 1000,
                        "target": {
                            "id": "N/A",
                            "appliesTo": "TRIGGER_ELEMENT",
                            "useEventTarget": true
                        },
                        "value": 1
                    }
                }]
            }]
        },
        "growIn": {
            "id": "growIn",
            "useFirstGroupAsInitialState": true,
            "actionItemGroups": [{
                "actionItems": [{
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "duration": 0,
                        "target": {
                            "id": "N/A",
                            "appliesTo": "TRIGGER_ELEMENT",
                            "useEventTarget": true
                        },
                        "value": 0
                    }
                }]
            }, {
                "actionItems": [{
                    "actionTypeId": "TRANSFORM_SCALE",
                    "config": {
                        "delay": 0,
                        "duration": 0,
                        "target": {
                            "id": "N/A",
                            "appliesTo": "TRIGGER_ELEMENT",
                            "useEventTarget": true
                        },
                        "xValue": 0.7500000000000001,
                        "yValue": 0.7500000000000001
                    }
                }]
            }, {
                "actionItems": [{
                    "actionTypeId": "TRANSFORM_SCALE",
                    "config": {
                        "delay": 0,
                        "easing": "outQuart",
                        "duration": 1000,
                        "target": {
                            "id": "N/A",
                            "appliesTo": "TRIGGER_ELEMENT",
                            "useEventTarget": true
                        },
                        "xValue": 1,
                        "yValue": 1
                    }
                }, {
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "easing": "outQuart",
                        "duration": 1000,
                        "target": {
                            "id": "N/A",
                            "appliesTo": "TRIGGER_ELEMENT",
                            "useEventTarget": true
                        },
                        "value": 1
                    }
                }]
            }]
        },
        "slideInLeft": {
            "id": "slideInLeft",
            "useFirstGroupAsInitialState": true,
            "actionItemGroups": [{
                "actionItems": [{
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "duration": 0,
                        "target": {
                            "id": "N/A",
                            "appliesTo": "TRIGGER_ELEMENT",
                            "useEventTarget": true
                        },
                        "value": 0
                    }
                }]
            }, {
                "actionItems": [{
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 0,
                        "duration": 0,
                        "target": {
                            "id": "N/A",
                            "appliesTo": "TRIGGER_ELEMENT",
                            "useEventTarget": true
                        },
                        "xValue": -100,
                        "yValue": 0,
                        "xUnit": "PX",
                        "yUnit": "PX",
                        "zUnit": "PX"
                    }
                }]
            }, {
                "actionItems": [{
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "easing": "outQuart",
                        "duration": 1000,
                        "target": {
                            "id": "N/A",
                            "appliesTo": "TRIGGER_ELEMENT",
                            "useEventTarget": true
                        },
                        "value": 1
                    }
                }, {
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 0,
                        "easing": "outQuart",
                        "duration": 1000,
                        "target": {
                            "id": "N/A",
                            "appliesTo": "TRIGGER_ELEMENT",
                            "useEventTarget": true
                        },
                        "xValue": 0,
                        "yValue": 0,
                        "xUnit": "PX",
                        "yUnit": "PX",
                        "zUnit": "PX"
                    }
                }]
            }]
        },
        "slideInRight": {
            "id": "slideInRight",
            "useFirstGroupAsInitialState": true,
            "actionItemGroups": [{
                "actionItems": [{
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "duration": 0,
                        "target": {
                            "id": "N/A",
                            "appliesTo": "TRIGGER_ELEMENT",
                            "useEventTarget": true
                        },
                        "value": 0
                    }
                }]
            }, {
                "actionItems": [{
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 0,
                        "duration": 0,
                        "target": {
                            "id": "N/A",
                            "appliesTo": "TRIGGER_ELEMENT",
                            "useEventTarget": true
                        },
                        "xValue": 100,
                        "yValue": 0,
                        "xUnit": "PX",
                        "yUnit": "PX",
                        "zUnit": "PX"
                    }
                }]
            }, {
                "actionItems": [{
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "easing": "outQuart",
                        "duration": 1000,
                        "target": {
                            "id": "N/A",
                            "appliesTo": "TRIGGER_ELEMENT",
                            "useEventTarget": true
                        },
                        "value": 1
                    }
                }, {
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 0,
                        "easing": "outQuart",
                        "duration": 1000,
                        "target": {
                            "id": "N/A",
                            "appliesTo": "TRIGGER_ELEMENT",
                            "useEventTarget": true
                        },
                        "xValue": 0,
                        "yValue": 0,
                        "xUnit": "PX",
                        "yUnit": "PX",
                        "zUnit": "PX"
                    }
                }]
            }]
        },
        "slideInTop": {
            "id": "slideInTop",
            "useFirstGroupAsInitialState": true,
            "actionItemGroups": [{
                "actionItems": [{
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "duration": 0,
                        "target": {
                            "id": "N/A",
                            "appliesTo": "TRIGGER_ELEMENT",
                            "useEventTarget": true
                        },
                        "value": 0
                    }
                }]
            }, {
                "actionItems": [{
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 0,
                        "duration": 0,
                        "target": {
                            "id": "N/A",
                            "appliesTo": "TRIGGER_ELEMENT",
                            "useEventTarget": true
                        },
                        "xValue": 0,
                        "yValue": -100,
                        "xUnit": "PX",
                        "yUnit": "PX",
                        "zUnit": "PX"
                    }
                }]
            }, {
                "actionItems": [{
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "easing": "outQuart",
                        "duration": 1000,
                        "target": {
                            "id": "N/A",
                            "appliesTo": "TRIGGER_ELEMENT",
                            "useEventTarget": true
                        },
                        "value": 1
                    }
                }, {
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 0,
                        "easing": "outQuart",
                        "duration": 1000,
                        "target": {
                            "id": "N/A",
                            "appliesTo": "TRIGGER_ELEMENT",
                            "useEventTarget": true
                        },
                        "xValue": 0,
                        "yValue": 0,
                        "xUnit": "PX",
                        "yUnit": "PX",
                        "zUnit": "PX"
                    }
                }]
            }]
        }
    },
    "site": {
        "mediaQueries": [{
            "key": "main",
            "min": 992,
            "max": 10000
        }, {
            "key": "medium",
            "min": 768,
            "max": 991
        }, {
            "key": "small",
            "min": 480,
            "max": 767
        }, {
            "key": "tiny",
            "min": 0,
            "max": 479
        }]
    }
});