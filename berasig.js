(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([[1320], {
    79391: function() {},
    66442: function(e, t, a) {
        "use strict";
        a.d(t, {
            QV: function() {
                return l
            }
        });
        var n = a(60397)
          , r = a(92517);
        let s = ()=>{
            let e = localStorage.getItem("AUTH:USER_ID");
            return {
                userId: e,
                serverId: localStorage.getItem("AUTH:SERVER_ID"),
                bccToken: localStorage.getItem("AUTH:TOKEN"),
                lifeTime: localStorage.getItem("AUTH:LIFE_TIME")
            }
        }
          , l = e=>{
            localStorage.setItem("AUTH:USER_ID", e.userId),
            localStorage.setItem("AUTH:SERVER_ID", e.serverId),
            localStorage.setItem("AUTH:TOKEN", e.bccToken),
            localStorage.setItem("AUTH:LIFE_TIME", e.lifeTime)
        }
          , i = n.Z.create({
            baseURL: r.default.cluster.miningAppApi
        });
        i.interceptors.request.use(e=>{
            let t = s();
            return e.headers.userId = null == t ? void 0 : t.userId,
            e.headers.serverId = null == t ? void 0 : t.serverId,
            e.headers.bccToken = null == t ? void 0 : t.bccToken,
            e.headers.bccLifetime = null == t ? void 0 : t.lifeTime,
            e
        }
        , e=>Promise.reject(e)),
        t.ZP = i
    },
    1049: function(e, t, a) {
        "use strict";
        a.d(t, {
            Ah: function() {
                return o
            },
            ED: function() {
                return l
            },
            L3: function() {
                return p
            },
            Ol: function() {
                return c
            },
            QN: function() {
                return i
            },
            Sk: function() {
                return m
            },
            WX: function() {
                return s
            },
            Zl: function() {
                return x
            },
            dO: function() {
                return u
            },
            eF: function() {
                return h
            },
            n6: function() {
                return d
            },
            tH: function() {
                return r
            },
            yL: function() {
                return f
            },
            yr: function() {
                return g
            }
        });
        var n = a(66442);
        let r = async e=>{
            let {data: t} = await n.ZP.post("/guilds/create-guild", e);
            return t
        }
          , s = async e=>{
            let {data: t} = await n.ZP.post("/guilds/create-guild-request", {
                guildId: e
            });
            return t
        }
          , l = async e=>{
            let {data: t} = await n.ZP.patch("/guilds/accept-guild-request", {
                userId: e
            });
            return t
        }
          , i = async e=>{
            let {data: t} = await n.ZP.patch("/guilds/reject-guild-request", {
                userId: e
            });
            return t
        }
          , c = async e=>{
            let {data: t} = await n.ZP.patch("/guilds/leave-guild", {
                guildId: e
            });
            return t
        }
          , o = async e=>{
            let {data: t} = await n.ZP.patch("/guilds/remove-member", {
                userId: e
            });
            return t
        }
          , u = async e=>{
            let {data: t} = await n.ZP.patch("/guilds/transfer-owner", {
                userId: e
            });
            return t
        }
          , d = async e=>{
            let {data: t} = await n.ZP.get("/guilds", {
                params: e
            });
            return t
        }
          , f = async e=>{
            let {data: t} = await n.ZP.get("/guilds/group-info?link=".concat(e));
            return t
        }
          , m = async e=>{
            let {data: t} = await n.ZP.get("/guilds/".concat(e));
            return t
        }
          , g = async e=>{
            let {data: t} = await n.ZP.get("/guilds/skill-cheques", {
                params: {
                    guild: e
                }
            });
            return t
        }
          , h = async e=>{
            let {data: t} = await n.ZP.get("/guilds/skill-cheque/".concat(e));
            return t
        }
          , x = async(e,t)=>{
            let {data: a} = await n.ZP.patch("/guilds/upgrade-skill", {
                skillChequeId: e,
                amount: t
            });
            return a
        }
          , p = async e=>{
            let {data: t} = await n.ZP.patch("/guilds/update-guild", e);
            return t
        }
    },
    27904: function(e, t, a) {
        "use strict";
        var n, r, s, l;
        a.d(t, {
            G: function() {
                return r
            },
            t: function() {
                return n
            }
        }),
        (s = n || (n = {}))[s.DefaultFrame = 0] = "DefaultFrame",
        s[s.OneST = 1] = "OneST",
        s[s.TwoND = 2] = "TwoND",
        s[s.ThreeRD = 3] = "ThreeRD",
        s[s.OtherTH = 4] = "OtherTH",
        (l = r || (r = {}))[l.One = 1] = "One",
        l[l.Two = 2] = "Two",
        l[l.Three = 3] = "Three",
        l[l.Four = 4] = "Four",
        l[l.Five = 5] = "Five",
        l[l.Six = 6] = "Six",
        l[l.Seven = 7] = "Seven",
        l[l.Eight = 8] = "Eight",
        l[l.Nine = 9] = "Nine"
    },
    90047: function(e, t, a) {
        "use strict";
        a.d(t, {
            m: function() {
                return s
            },
            t: function() {
                return r
            }
        });
        var n = a(66442);
        let r = async e=>{
            let {data: t} = await n.ZP.get("/servers/".concat(e));
            return t
        }
          , s = async e=>{
            let {data: t} = await n.ZP.get("/servers/".concat(e, "/stat"));
            return t
        }
    },
    50087: function(e, t, a) {
        "use strict";
        var n, r;
        a.d(t, {
            D: function() {
                return n
            }
        }),
        (r = n || (n = {})).Member = "SKILL::MEMBER",
        r.Lucky = "SKILL::LUCKY",
        r.Size = "SKILL::SIZE",
        r.Speed = "SKILL::SPEED"
    },
    32530: function(e, t, a) {
        "use strict";
        a.d(t, {
            PR: function() {
                return s
            },
            Rf: function() {
                return i
            },
            Tj: function() {
                return f
            },
            Wt: function() {
                return g
            },
            d0: function() {
                return l
            },
            iX: function() {
                return d
            },
            jd: function() {
                return c
            },
            nX: function() {
                return u
            },
            pe: function() {
                return m
            },
            r4: function() {
                return r
            },
            y8: function() {
                return o
            }
        });
        var n = a(66442);
        let r = async e=>{
            let {data: t} = await n.ZP.post("/users", {
                ...e
            });
            return t
        }
          , s = async e=>{
            let {data: t} = await n.ZP.get("/users/".concat(e));
            return t
        }
          , l = async(e,t)=>{
            let {data: a} = await n.ZP.get("/users/by-telegram?server=".concat(e, "&username=").concat(t));
            return a
        }
          , i = async e=>{
            let {data: t} = await n.ZP.get("/users", {
                params: e
            });
            return t
        }
          , c = async e=>{
            let {data: t} = await n.ZP.patch("/users/claim-token", {
                txHash: e
            });
            return t
        }
          , o = async e=>{
            let t = (e.page - 1) * e.perPage
              , {data: a} = await n.ZP.get("/users/leaderboard", {
                params: {
                    offset: t,
                    limit: e.perPage,
                    ...e
                }
            });
            return a
        }
          , u = async e=>{
            let {userId: t} = e
              , {data: a} = await n.ZP.patch("/users/steal-token", {
                userId: t
            });
            return a
        }
          , d = async e=>{
            let {data: t} = await n.ZP.patch("/users/upgrade-item", e);
            return t
        }
          , f = async e=>{
            let {data: t} = await n.ZP.patch("/users/quest/claim", e);
            return {
                user: t.user,
                cert: t.cert
            }
        }
          , m = async e=>{
            let {data: t} = await n.ZP.patch("/users/take-token", e);
            return t
        }
          , g = async e=>{
            let {data: t} = await n.ZP.patch("/users/change-wallet", e);
            return t
        }
    },
    60346: function(e, t, a) {
        "use strict";
        a.r(t),
        a.d(t, {
            default: function() {
                return S
            }
        });
        var n = a(45615)
          , r = a(13352)
          , s = a(1385)
          , l = a(48278)
          , i = a(72278)
          , c = a(13317)
          , o = a(32530)
          , u = a(50529)
          , d = a(632);
        let f = ()=>{
            let {createPrivateKey: e} = (0,
            i.$$)()
              , t = (0,
            d.L)(e=>e.setUser)
              , {name: a, username: n, referrer: s, id: l, thumbnail: f, isPremium: m} = (0,
            c.wA)()
              , g = (0,
            u.qD)();
            return {
                onCreateUser: (0,
                r.useCallback)(async()=>{
                    let {publicKey: r} = await e()
                      , i = await (0,
                    o.r4)({
                        telegramId: l,
                        pubkey: r,
                        username: n,
                        name: a,
                        referrerId: s,
                        serverId: g.serverId,
                        isPremium: m,
                        thumbnail: f
                    });
                    return t(i),
                    i
                }
                , [g.serverId, e, l, m, a, s, t, f, n])
            }
        }
        ;
        var m = a(92725)
          , g = a(53045)
          , h = a(67338)
          , x = a(56471)
          , p = a(91225);
        function v(e) {
            let {data: t, loading: a} = (0,
            d.a)(e.referrer)
              , r = (0,
            p._)(e.referrer);
            return a ? (0,
            n.jsx)(h.Z, {
                msg: "Loading user"
            }) : (0,
            n.jsxs)("div", {
                className: "flex flex-col gap-2",
                children: [(0,
                n.jsx)(l.default, {
                    src: x.Z,
                    alt: "banner"
                }), (0,
                n.jsx)("div", {
                    className: "card !border-danger",
                    children: (0,
                    n.jsx)("span", {
                        className: "text-danger",
                        children: "This referral link is full! Try using a different one to join"
                    })
                }), (0,
                n.jsxs)("div", {
                    className: "card flex-col gap-1 items-center mb-2",
                    children: [(0,
                    n.jsxs)("p", {
                        className: "font-bold text-[18px] mb-4",
                        children: ["Henlo henlo ", (0,
                        n.jsx)("span", {
                            className: "text-danger text-[18px]",
                            children: "Beras"
                        })]
                    }), (0,
                    n.jsxs)("div", {
                        className: "w-full flex flex-row gap-4 justify-between items-center",
                        children: [(0,
                        n.jsx)("span", {
                            className: "text-secondary",
                            children: "Invited by:"
                        }), t && (0,
                        n.jsxs)("div", {
                            className: "flex flex-row gap-1 items-center",
                            children: [(0,
                            n.jsx)(m.Z, {
                                userId: t._id
                            }), (0,
                            n.jsx)("p", {
                                className: "font-bold",
                                children: t.username
                            }), (0,
                            n.jsxs)("span", {
                                className: "text-secondary",
                                children: ["(Lv ", 1, ")"]
                            })]
                        })]
                    }), (0,
                    n.jsxs)("div", {
                        className: "w-full flex flex-row gap-4 justify-between items-center",
                        children: [(0,
                        n.jsx)("span", {
                            className: "text-secondary",
                            children: "Referral limit reached:"
                        }), (0,
                        n.jsxs)("div", {
                            className: "flex flex-row gap-1 items-center",
                            children: [(0,
                            n.jsx)(g.Z, {
                                width: 18
                            }), (0,
                            n.jsxs)("p", {
                                className: "font-bold text-danger",
                                children: [r.data.ref, "/", t.totalReferral]
                            })]
                        })]
                    })]
                })]
            })
        }
        var w = a(15019)
          , y = {
            src: "/_next/static/media/bear-tele.8774c449.png",
            height: 1029,
            width: 1030,
            blurDataURL: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAYAAADED76LAAABCUlEQVR42gVAz0rCYAD/fZ/bMmY0ZDUaDvtDRYdAOikEnbp26QXqVK8RHXqLrkHH6AkKIiNszFLCCQW6T90fs2G2yfYJVg/ATs8OecO8T6dhncfBCzfvLtPjI/D9k9KAvD7fcl1VIPz1kBIJ/kcdU+caiVyG1cmBlnY2k9hrISI6RNgYB4/w7C2oCzEqGuVC4PUJTSOwrxoU0YSsVfBLDQTjd6yXdULnxHkwZ4KNZQdSAoT9NlaWRsimDdhvTdDvbpNbnQeEvofWUxVKPkVb3oNq6DAWBzyT3+5d7BY4pGCEeFiAolIUpU8wNkS1+0MyNJs5dyPkhKLBI22N/LsexAnjNzWfXFnMnQGElnd86fdCHgAAAABJRU5ErkJggg==",
            blurWidth: 8,
            blurHeight: 8
        };
        a(91170),
        a(72363);
        let b = [{
            bg: y,
            title: "Your Gateway to Infinite",
            subTitle: "Bera Adventures",
            description: "Only those who follow the bee's path can enter. \n    <strong>Find a member with an invitation link</strong> to join the swarm."
        }];
        var A = ()=>(0,
        n.jsxs)("div", {
            className: "flex flex-col gap-4 text-center",
            children: [(0,
            n.jsx)("div", {
                className: "flex flex-col gap-4 text-center p-0",
                children: b.map(e=>(0,
                n.jsxs)("div", {
                    className: "flex flex-col gap-4 text-center",
                    children: [(0,
                    n.jsx)(l.default, {
                        src: e.bg,
                        alt: "welcome"
                    }), (0,
                    n.jsx)("h4", {
                        children: e.title
                    }), (0,
                    n.jsx)("h3", {
                        className: "text-[#F47226] font-bold",
                        children: e.subTitle
                    }), (0,
                    n.jsx)("p", {
                        dangerouslySetInnerHTML: {
                            __html: e.description
                        }
                    })]
                }, e.title))
            }), (0,
            n.jsx)("button", {
                className: "btn p-5 mt-4",
                onClick: ()=>window.open("https://t.me/BeraBeeCatcher", "_blank"),
                children: (0,
                n.jsx)("h5", {
                    className: "font-bold",
                    children: "Go to community"
                })
            })]
        })
          , j = a(59116);
        let N = [{
            bg: x.Z,
            title: "Your Gateway to Infinite",
            subTitle: "Bera Bee Catcher",
            description: "For more info on your wallet and to retrieve your private key, go\n      to Settings.\n      </br>We guarantee the safety of user funds on BeraSig Wallet,\n      <strong>\n        but if you expose your private key, your funds will not be safe.\n      </strong>"
        }, {
            bg: y,
            title: "YOU SHALL NOT PASS!",
            subTitle: "(Unless you have your seed phrase, that's it.)",
            description: "Don't let your crypto dreams turn into a meme because you forgot the key! Write it down, memorize it, tattoo it on your forehead (not recommended) - just keep it safe!"
        }];
        var S = ()=>{
            var e;
            let[t,a] = (0,
            r.useState)(!1)
              , {onCreateUser: i} = f()
              , {setUser: o} = (0,
            d.a)()
              , {referrer: u} = (0,
            c.wA)()
              , m = (0,
            d.a)(u)
              , g = (0,
            p._)(u)
              , {message: x} = (0,
            j.p)()
              , y = (0,
            r.useCallback)(async()=>{
                try {
                    a(!0);
                    let e = await i();
                    x({
                        msg: "Create wallet successfully",
                        type: "success"
                    }),
                    o(e)
                } catch (e) {
                    x({
                        msg: e.response.data.message,
                        type: "error"
                    })
                } finally {
                    a(!1)
                }
            }
            , [x, i, o]);
            return m.loading || g.loading ? (0,
            n.jsx)(h.Z, {
                msg: "Loading user onboarding"
            }) : u ? m.loading || (null === (e = m.data) || void 0 === e ? void 0 : e._id) ? m.data.totalReferral >= g.data.ref ? (0,
            n.jsx)(v, {
                referrer: u
            }) : (0,
            n.jsxs)("div", {
                className: "flex flex-col gap-4 text-center",
                children: [(0,
                n.jsx)("div", {
                    className: "flex flex-col gap-4 text-center p-0",
                    children: (0,
                    n.jsx)(s.lr, {
                        className: "swiper",
                        showThumbs: !1,
                        showArrows: !1,
                        showStatus: !1,
                        stopOnHover: !0,
                        children: N.map(e=>(0,
                        n.jsxs)("div", {
                            className: "flex flex-col gap-4 text-center",
                            children: [(0,
                            n.jsx)(l.default, {
                                src: e.bg,
                                alt: "welcome"
                            }), (0,
                            n.jsx)("h4", {
                                children: e.title
                            }), (0,
                            n.jsx)("h3", {
                                className: "text-[#F47226] font-bold",
                                children: e.subTitle
                            }), (0,
                            n.jsx)("p", {
                                dangerouslySetInnerHTML: {
                                    __html: e.description
                                }
                            }), (0,
                            n.jsxs)("span", {
                                className: "text-sm",
                                children: ["Invited by: ", (0,
                                n.jsx)("b", {
                                    children: m.data.name
                                })]
                            }), (0,
                            n.jsx)("div", {
                                className: "h-6"
                            })]
                        }, e.title))
                    })
                }), (0,
                n.jsxs)("button", {
                    className: "btn p-5",
                    onClick: y,
                    children: [(0,
                    n.jsx)("h5", {
                        className: "font-bold",
                        children: "Create new wallet"
                    }), t && (0,
                    n.jsx)("div", {
                        className: "loading"
                    })]
                })]
            }) : (0,
            n.jsx)(w.Z, {
                msg: "Referrer not found"
            }) : (0,
            n.jsx)(A, {})
        }
    },
    95471: function(e, t, a) {
        "use strict";
        a.r(t),
        a.d(t, {
            default: function() {
                return w
            }
        });
        var n = a(45615)
          , r = a(48296)
          , s = a(17229)
          , l = a(72278)
          , i = a(632)
          , c = a(13352)
          , o = a(48278)
          , u = a(92725)
          , d = a(67338)
          , f = a(56471)
          , m = a(80526);
        function g(e) {
            let {data: t, loading: a} = (0,
            i.a)(e.userId);
            return a ? (0,
            n.jsx)(d.Z, {
                msg: "Loading user"
            }) : (0,
            n.jsxs)("div", {
                className: "flex flex-col gap-2",
                children: [(0,
                n.jsx)(o.default, {
                    src: f.Z,
                    alt: "banner"
                }), (0,
                n.jsx)("div", {
                    className: "card !border-danger",
                    children: (0,
                    n.jsx)("span", {
                        className: "text-danger",
                        children: "This account has been logged into from another device. Please enter your passphrase to use this account."
                    })
                }), (0,
                n.jsxs)("div", {
                    className: "card flex-col gap-1 items-center mb-2",
                    children: [(0,
                    n.jsxs)("p", {
                        className: "font-bold text-[18px] mb-4",
                        children: ["Henlo Henlo", " ", (0,
                        n.jsx)("span", {
                            className: "text-danger text-[18px]",
                            children: t.name
                        })]
                    }), (0,
                    n.jsxs)("div", {
                        className: "w-full flex flex-row gap-4 justify-between items-center",
                        children: [(0,
                        n.jsx)("span", {
                            className: "text-secondary",
                            children: "Username:"
                        }), t && (0,
                        n.jsxs)("div", {
                            className: "flex flex-row gap-1 items-center",
                            children: [(0,
                            n.jsx)(u.Z, {
                                userId: t._id
                            }), (0,
                            n.jsx)("p", {
                                className: "font-bold",
                                children: t.username
                            })]
                        })]
                    }), (0,
                    n.jsxs)("div", {
                        className: "w-full flex flex-row gap-4 justify-between items-center",
                        children: [(0,
                        n.jsx)("span", {
                            className: "text-secondary",
                            children: "Address:"
                        }), (0,
                        n.jsx)("div", {
                            className: "flex flex-row gap-1 items-center",
                            children: (0,
                            n.jsx)("p", {
                                className: "text-secondary",
                                children: (0,
                                m.Sy)(t.address, {
                                    maxLength: 4
                                })
                            })
                        })]
                    })]
                })]
            })
        }
        var h = a(13206)
          , x = a(2209)
          , p = a(32530);
        function v() {
            let {setCurrentKey: e} = (0,
            l.$$)()
              , {data: t} = (0,
            i.a)()
              , [a,o] = (0,
            c.useState)((0,
            x.OF)())
              , [d,f] = (0,
            c.useState)("")
              , [g,v] = (0,
            c.useState)(0)
              , [w,y] = (0,
            c.useState)(!1)
              , [b,A] = (0,
            c.useState)(!1)
              , j = (0,
            s.i)({
                phrase: a
            });
            (0,
            c.useEffect)(()=>{
                g > 0 && setTimeout(()=>{
                    v(g - 1)
                }
                , 1e3)
            }
            , [g]);
            let N = async()=>{
                if (!g)
                    try {
                        A(!0),
                        (0,
                        p.Wt)({
                            username: t.username
                        }),
                        y(!0),
                        v(60)
                    } catch (e) {} finally {
                        A(!1)
                    }
            }
              , S = async()=>{
                try {
                    await (0,
                    p.Wt)({
                        username: t.username,
                        pubkey: j.publicKey,
                        code: d
                    }),
                    e({
                        ...(0,
                        s.i)({
                            phrase: a
                        }),
                        phrase: a
                    }),
                    window.location.reload()
                } catch (e) {} finally {
                    A(!1)
                }
            }
            ;
            return (0,
            n.jsxs)("div", {
                className: "flex flex-col gap-4",
                children: [(0,
                n.jsx)("div", {
                    className: "card !border-danger",
                    children: (0,
                    n.jsxs)("span", {
                        className: "text-danger",
                        children: ["Generating a new passphrase will completely unbind your previous wallet with this Telegram account. ", (0,
                        n.jsx)("br", {}), " All processes associated with this Telegram ID will remain the same, but the wallet will be updated.", (0,
                        n.jsx)("br", {}), " Remember to save your passphrase to experience the BeraSig Wallet and Berachain Ecosystem in general."]
                    })
                }), (0,
                n.jsxs)("div", {
                    className: "card flex-col gap-1 items-center mb-2",
                    children: [(0,
                    n.jsxs)("p", {
                        className: "font-bold text-[18px] mb-4",
                        children: ["Henlo Henlo", " ", (0,
                        n.jsx)("span", {
                            className: "text-danger text-[18px]",
                            children: t.name
                        })]
                    }), (0,
                    n.jsxs)("div", {
                        className: "w-full flex flex-row gap-4 justify-between items-center",
                        children: [(0,
                        n.jsx)("span", {
                            className: "text-secondary",
                            children: "Username:"
                        }), t && (0,
                        n.jsxs)("div", {
                            className: "flex flex-row gap-1 items-center",
                            children: [(0,
                            n.jsx)(u.Z, {
                                userId: t._id
                            }), (0,
                            n.jsx)("p", {
                                className: "font-bold",
                                children: t.username
                            })]
                        })]
                    }), (0,
                    n.jsxs)("div", {
                        className: "w-full flex flex-row gap-4 justify-between items-center",
                        children: [(0,
                        n.jsx)("span", {
                            className: "text-secondary",
                            children: "Current Address:"
                        }), (0,
                        n.jsx)("div", {
                            className: "flex flex-row gap-1 items-center",
                            children: (0,
                            n.jsx)("p", {
                                className: "text-secondary",
                                children: (0,
                                m.Sy)(t.address, {
                                    maxLength: 4
                                })
                            })
                        })]
                    }), (0,
                    n.jsxs)("div", {
                        className: "w-full flex flex-row gap-4 justify-between items-center",
                        children: [(0,
                        n.jsx)("span", {
                            className: "text-secondary",
                            children: "New address:"
                        }), (0,
                        n.jsx)("div", {
                            className: "flex flex-row gap-1 items-center",
                            children: (0,
                            n.jsx)("p", {
                                className: "text-secondary",
                                children: (0,
                                m.Sy)(j.address, {
                                    maxLength: 4
                                })
                            })
                        })]
                    })]
                }), (0,
                n.jsxs)(c.Fragment, {
                    children: [(0,
                    n.jsx)("div", {
                        className: "flex flex-col gap-6",
                        children: w && (0,
                        n.jsx)("div", {
                            className: "group-input !rounded-2xl",
                            children: (0,
                            n.jsx)("textarea", {
                                className: "bg-body min-h-20 text-secondary font-medium",
                                value: d,
                                rows: 3,
                                onChange: e=>f(e.target.value),
                                placeholder: "Enter your telegram code"
                            })
                        })
                    }), (0,
                    n.jsxs)("div", {
                        className: "flex flex-col gap-4",
                        children: [!w && (0,
                        n.jsxs)("button", {
                            className: "btn flex-row gap-[10px] p-4 w-full",
                            onClick: N,
                            disabled: b,
                            children: [(0,
                            n.jsx)(r.Z, {
                                className: "w-6 text-white"
                            }), (0,
                            n.jsx)("h6", {
                                className: "font-bold text-white",
                                children: "Get Code"
                            }), b && (0,
                            n.jsx)("span", {
                                className: "loading"
                            })]
                        }), w && (0,
                        n.jsxs)("p", {
                            className: "text-secondary text-end font-bold underline cursor-pointer",
                            onClick: N,
                            children: ["Get new code ", g && "after ".concat(g, "s")]
                        }), w && (0,
                        n.jsxs)("button", {
                            className: "btn flex-row gap-[10px] p-4 w-full",
                            disabled: !d || b,
                            onClick: S,
                            children: [(0,
                            n.jsx)(h.Z, {
                                className: "w-6 text-white"
                            }), (0,
                            n.jsx)("h6", {
                                className: "font-bold text-white",
                                children: "Change Wallet"
                            }), b && (0,
                            n.jsx)("span", {
                                className: "loading"
                            })]
                        })]
                    })]
                })]
            })
        }
        function w() {
            let {setCurrentKey: e} = (0,
            l.$$)()
              , {data: t} = (0,
            i.a)()
              , [a,o] = (0,
            c.useState)("")
              , [u,d] = (0,
            c.useState)("")
              , [f,m] = (0,
            c.useState)(!1);
            return ((0,
            c.useEffect)(()=>{
                try {
                    if (!a)
                        throw Error("Enter passphrase");
                    let e = (0,
                    s.i)({
                        phrase: a
                    });
                    if (!e)
                        throw Error("Invalid passphrase");
                    if (t.address.toLowerCase() !== e.address.toLowerCase())
                        throw Error("Address does not match");
                    d("")
                } catch (e) {
                    d(e.message)
                }
            }
            , [a, e, t.address]),
            f) ? (0,
            n.jsx)(v, {}) : (0,
            n.jsxs)("div", {
                className: "flex flex-col gap-4",
                children: [(0,
                n.jsx)(g, {
                    userId: t._id
                }), (0,
                n.jsxs)(c.Fragment, {
                    children: [(0,
                    n.jsx)("div", {
                        className: "flex flex-col gap-6",
                        children: (0,
                        n.jsx)("div", {
                            className: "group-input !rounded-2xl",
                            children: (0,
                            n.jsx)("textarea", {
                                className: "bg-body min-h-20 text-secondary font-medium",
                                value: a,
                                rows: 3,
                                onChange: e=>o(e.target.value)
                            })
                        })
                    }), (0,
                    n.jsxs)("div", {
                        className: "flex flex-col gap-4",
                        children: [(0,
                        n.jsx)("p", {
                            className: "text-secondary text-end font-bold underline cursor-pointer",
                            onClick: ()=>m(!0),
                            children: "Forgot your passphrase?"
                        }), (0,
                        n.jsxs)("button", {
                            className: "btn flex-row gap-[10px] p-4 w-full",
                            disabled: !!u,
                            onClick: ()=>e({
                                ...(0,
                                s.i)({
                                    phrase: a
                                }),
                                phrase: a
                            }),
                            children: [(0,
                            n.jsx)(r.Z, {
                                className: "w-6 text-white"
                            }), (0,
                            n.jsx)("h6", {
                                className: "font-bold text-white",
                                children: u || "Import Wallet"
                            })]
                        })]
                    })]
                })]
            })
        }
    },
    92725: function(e, t, a) {
        "use strict";
        a.d(t, {
            Z: function() {
                return l
            }
        });
        var n = a(45615)
          , r = a(632)
          , s = a(42784);
        function l(e) {
            let {userId: t, size: a=24} = e
              , {data: l} = (0,
            r.a)(t);
            return (0,
            n.jsx)(s.Z, {
                className: "rounded-full",
                src: l.thumbnail,
                size: a,
                fallbackSalt: l.name
            })
        }
    },
    52225: function(e, t, a) {
        "use strict";
        var n = a(45615)
          , r = a(94224);
        let s = {
            right: "translate-x-0",
            left: "translate-x-0",
            top: "translate-y-0",
            bottom: "translate-y-0"
        }
          , l = {
            right: "translate-x-full",
            left: "-translate-x-full",
            top: "-translate-y-full",
            bottom: "translate-y-full"
        }
          , i = {
            right: "inset-y-0 right-0",
            left: "inset-y-0 left-0",
            top: "inset-x-0 top-0",
            bottom: "inset-x-0 bottom-0"
        }
          , c = {
            right: "rounded-l-[20px]",
            left: "rounded-r-[20px]",
            top: "rounded-b-[20px]",
            bottom: "rounded-t-[20px]"
        };
        t.Z = e=>{
            let {open: t, onClose: a, placement: o="bottom", children: u} = e;
            return (0,
            n.jsxs)("div", {
                id: "dialog-".concat(o),
                className: "relative z-[1000]",
                "aria-labelledby": "slide-over",
                role: "dialog",
                "aria-modal": "true",
                onClick: a,
                children: [(0,
                n.jsx)("div", {
                    className: (0,
                    r.W)("fixed inset-0 bg-[#0006] bg-opacity-75 transition-all", {
                        "opacity-100 duration-500 ease-in-out visible": t
                    }, {
                        "opacity-0 duration-500 ease-in-out invisible": !t
                    })
                }), (0,
                n.jsx)("div", {
                    className: (0,
                    r.W)({
                        "fixed inset-0 overflow-hidden": t
                    }),
                    children: (0,
                    n.jsx)("div", {
                        className: "absolute inset-0 overflow-hidden",
                        children: (0,
                        n.jsx)("div", {
                            className: (0,
                            r.W)("pointer-events-none fixed max-w-full", i[o]),
                            children: (0,
                            n.jsx)("div", {
                                className: (0,
                                r.W)("pointer-events-auto relative w-full h-full transform transition ease-in-out duration-500", {
                                    [l[o]]: !t
                                }, {
                                    [s[o]]: t
                                }),
                                onClick: e=>{
                                    e.preventDefault(),
                                    e.stopPropagation()
                                }
                                ,
                                children: (0,
                                n.jsx)("div", {
                                    className: (0,
                                    r.W)("h-full bg-body p-4 overflow-y-scroll", c[o], {
                                        "shadow-[0_-15px_39px_0px_#C16240]": t
                                    }),
                                    children: t ? u : null
                                })
                            })
                        })
                    })
                })]
            })
        }
    },
    15019: function(e, t, a) {
        "use strict";
        var n = a(45615)
          , r = a(48278)
          , s = a(73743);
        t.Z = e=>(0,
        n.jsxs)("div", {
            className: "flex flex-col gap-4 ",
            children: [(0,
            n.jsx)(r.default, {
                src: s.Z,
                alt: "welcome"
            }), (0,
            n.jsxs)("div", {
                className: "flex flex-col gap-4 text-center p-4",
                children: [(0,
                n.jsx)("h5", {
                    className: "",
                    children: "Whoops! Something went wrong"
                }), (0,
                n.jsx)("div", {}), (0,
                n.jsx)("div", {
                    className: "text-[13px] leading-8",
                    children: e.msg
                }), (0,
                n.jsx)("button", {
                    className: "btn p-5",
                    children: (0,
                    n.jsx)("h5", {
                        className: "font-bold",
                        onClick: ()=>{
                            window.location.reload()
                        }
                        ,
                        children: "Reload App"
                    })
                })]
            })]
        })
    },
    42784: function(e, t, a) {
        "use strict";
        a.d(t, {
            Z: function() {
                return i
            }
        });
        var n = a(45615)
          , r = a(48278)
          , s = a(13352)
          , l = a(80526);
        function i(e) {
            let {src: t, fallbackSrc: a, fallbackSalt: i="", size: c, ...o} = e
              , [u,d] = (0,
            s.useState)(0)
              , f = [t, a].filter(e=>!!e)[u];
            return f ? (0,
            n.jsx)(r.default, {
                alt: "avatar",
                width: c,
                height: c,
                src: f,
                className: "rounded-full",
                onLoadingComplete: e=>{
                    0 === e.naturalWidth && d(u + 1)
                }
                ,
                onError: ()=>{
                    d(u + 1)
                }
                ,
                ...o
            }) : (0,
            n.jsx)("div", {
                style: {
                    width: c,
                    height: c,
                    backgroundColor: (0,
                    l.p)(i)
                },
                className: "rounded-full flex flex-col items-center justify-center",
                children: (0,
                n.jsx)("p", {
                    className: "capitalize",
                    style: {
                        fontSize: c / 2,
                        color: "white"
                    },
                    children: i.slice(0, 1)
                })
            })
        }
    },
    67338: function(e, t, a) {
        "use strict";
        var n = a(45615);
        a(88563),
        t.Z = e=>(0,
        n.jsxs)("div", {
            className: "loading-page",
            style: {
                height: (null == e ? void 0 : e.height) ? e.height : e.page ? "calc(100vh - 140px);" : void 0
            },
            children: [(0,
            n.jsx)("div", {
                className: "loader"
            }), (0,
            n.jsx)("div", {
                className: "text-loader"
            }), (0,
            n.jsx)("span", {
                className: "text-secondary",
                style: {
                    fontSize: 10
                },
                children: e.msg
            })]
        })
    },
    51733: function(e, t, a) {
        "use strict";
        a.d(t, {
            Z: function() {
                return o
            }
        });
        var n = a(45615)
          , r = a(48278)
          , s = a(13352)
          , l = a(10779)
          , i = a(45638)
          , c = a(72745);
        function o(e) {
            let {type: t="success"} = e
              , a = (0,
            s.useMemo)(()=>{
                switch (t) {
                case "success":
                    return l.default;
                case "error":
                    return i.default;
                case "warning":
                    return c.default
                }
            }
            , [t]);
            return (0,
            n.jsx)(r.default, {
                src: a,
                alt: t
            })
        }
    },
    92517: function(e, t, a) {
        "use strict";
        a.d(t, {
            default: function() {
                return r
            }
        });
        let n = "production";
        var r = {
            env: n,
            cluster: {
                development: {
                    miningAppApi: "http://localhost:9998/mining-app",
                    questApi: "http://localhost:9998/quests",
                    apiMetadata: "https://desig-metadata-staging.onrender.com",
                    serverId: "66637903fae41dd02dfaec36"
                },
                staging: {
                    miningAppApi: "https://desig-metadata-staging.onrender.com/mining-app",
                    questApi: "https://desig-metadata-staging.onrender.com/quests",
                    apiMetadata: "https://desig-metadata-staging.onrender.com",
                    serverId: "66637903fae41dd02dfaec36"
                },
                production: {
                    miningAppApi: "https://berasig-server-production.onrender.com/mining-app",
                    questApi: "https://berasig-server-production.onrender.com/quests",
                    apiMetadata: "https://desig-metadata-pro.onrender.com",
                    serverId: "6666d1d03f6375581720e70e"
                }
            }[n]
        }
    },
    42796: function(e, t, a) {
        "use strict";
        a.d(t, {
            Dd: function() {
                return i
            },
            Vb: function() {
                return r
            },
            bl: function() {
                return s
            },
            hn: function() {
                return c
            },
            mI: function() {
                return n
            },
            we: function() {
                return l
            }
        });
        let n = ()=>{
            "false" !== localStorage.getItem("soundEffects") && new Audio("https://cdn.pixabay.com/audio/2022/12/17/audio_43e9af63f3.mp3").play()
        }
          , r = ()=>{
            "false" !== localStorage.getItem("soundEffects") && new Audio("https://cdn.pixabay.com/audio/2024/01/17/audio_009e568069.mp3").play()
        }
          , s = ()=>{
            "false" !== localStorage.getItem("soundEffects") && new Audio("https://cdn.pixabay.com/audio/2021/08/04/audio_0625c1539c.mp3").play()
        }
          , l = ()=>{
            "false" !== localStorage.getItem("soundEffects") && new Audio("https://cdn.pixabay.com/audio/2021/08/04/audio_12b0c7443c.mp3").play()
        }
          , i = ()=>{
            "false" !== localStorage.getItem("soundEffects") && new Audio("https://cdn.pixabay.com/audio/2021/08/04/audio_c003cb2711.mp3").play()
        }
          , c = ()=>{
            "false" !== localStorage.getItem("soundEffects") && new Audio("https://cdn.pixabay.com/audio/2024/01/02/audio_0c574f2e01.mp3").play()
        }
    },
    60070: function(e, t, a) {
        "use strict";
        a.d(t, {
            CE: function() {
                return s
            },
            DX: function() {
                return l
            },
            V6: function() {
                return i
            },
            _J: function() {
                return c
            },
            xn: function() {
                return r
            }
        });
        var n = a(78623);
        let r = (e,t)=>{
            let a = new Map;
            return e.forEach(e=>{
                (null == e ? void 0 : e[t]) && a.set(e[t], e)
            }
            ),
            a
        }
          , s = e=>e && Number(e) ? .001 > Number(e) ? "<0.001" : Number(e) > 100 ? (0,
        n.uR)(e).format("0,0.[0]") : Number(e) > 10 ? (0,
        n.uR)(e).format("0,0.[00]") : (0,
        n.uR)(e).format("0,0.[000]") : "0"
          , l = e=>parseFloat(e.toFixed(9))
          , i = (e,t)=>Math.floor(Math.random() * (t - e + 1) + e);
        function c(e) {
            let t = new Date
              , a = new Date(e)
              , n = Math.floor((t.getTime() - a.getTime()) / 1e3);
            return n < 60 ? "1m" : n < 3600 ? Math.floor(n / 60) + "m" : n < 86400 ? Math.floor(n / 3600) + "h" : n < 604800 ? Math.floor(n / 86400) + "d" : n < 2592e3 ? Math.floor(n / 604800) + "w" : n < 31536e3 ? Math.floor(n / 2592e3) + "mo" : Math.floor(n / 31536e3) + "y"
        }
    },
    17229: function(e, t, a) {
        "use strict";
        a.d(t, {
            i: function() {
                return c
            }
        });
        var n = a(4159)
          , r = a(61496)
          , s = a(90959)
          , l = a(2209)
          , i = a(7851);
        let c = e=>{
            let {phrase: t, privateKey: a} = e
              , c = a;
            if (t && (0,
            l._I)(t)) {
                let e = r.gk.fromPhrase(t);
                if (!e)
                    throw Error("Passphrase is invalid!");
                c = e.privateKey
            }
            if (!c)
                throw Error("Private key is invalid!");
            c = c.startsWith("0x") ? c.slice(2) : c;
            let o = (0,
            n.$3)(c, !0)
              , u = (0,
            i.encode)(o)
              , d = (0,
            s.d)("0x".concat(c));
            return {
                publicKey: u,
                privateKey: c,
                address: d
            }
        }
    },
    52272: function(e, t, a) {
        "use strict";
        a.d(t, {
            U: function() {
                return i
            }
        });
        var n = a(13352)
          , r = a(50529)
          , s = a(70978)
          , l = a(60070);
        let i = e=>{
            let {data: t} = (0,
            s.Af)(e)
              , a = (0,
            r.qr)(e=>e.skills)
              , i = (0,
            n.useMemo)(()=>{
                if (!e)
                    return {
                        luckyRate: 0,
                        speedRate: 0,
                        sizeRate: 0,
                        memberSize: 0
                    };
                let n = (0,
                l.xn)(a, "_id")
                  , r = {
                    luckyRate: 0,
                    speedRate: 0,
                    sizeRate: 0,
                    memberSize: 0
                };
                for (let e of (null == t ? void 0 : t.skills) || []) {
                    let t = n.get(e);
                    r.luckyRate += t.attribute.luckyBonusRate || 0,
                    r.speedRate += t.attribute.miningSpeedBonusRate || 0,
                    r.sizeRate += t.attribute.miningSizeBonusRate || 0,
                    r.memberSize += t.attribute.memberSize || 0
                }
                return r
            }
            , [null == t ? void 0 : t.skills, e, a]);
            return (0,
            n.useMemo)(()=>({
                data: i,
                loading: !1
            }), [i])
        }
    },
    34992: function(e, t, a) {
        "use strict";
        a.d(t, {
            $O: function() {
                return u
            },
            UC: function() {
                return o
            },
            ZM: function() {
                return c
            },
            mr: function() {
                return d
            }
        });
        var n = a(13352);
        a(60070);
        var r = a(50529);
        a(70978),
        a(632);
        var s = a(61590)
          , l = a(86069)
          , i = a(1049);
        let c = e=>(0,
        r.qr)(t=>t.skills.find(t=>t._id === e))
          , o = e=>{
            let t = c(e);
            return c(null == t ? void 0 : t.nextSkillId)
        }
          , u = e=>{
            let {queryClient: t} = (0,
            l.o)()
              , {data: a, isLoading: n} = (0,
            s.a)({
                queryKey: ["".concat(l.q.guildChequeSkills, ":").concat(e)],
                queryFn: async()=>{
                    let a = await (0,
                    i.yr)(e);
                    for (let e of a)
                        await t.setQueryData(["".concat(l.q.guildChequeSkill, ":").concat(e._id)], e);
                    return a
                }
                ,
                enabled: !!e
            });
            return {
                data: a,
                loading: n
            }
        }
          , d = e=>{
            let {queryClient: t} = (0,
            l.o)()
              , {data: a, isLoading: r} = (0,
            s.a)({
                queryKey: ["".concat(l.q.guildChequeSkill, ":").concat(e)],
                queryFn: async()=>await (0,
                i.eF)(e),
                enabled: !!e
            });
            return {
                data: a,
                isLoading: r,
                setCheque: (0,
                n.useCallback)(async e=>{
                    await t.setQueryData(["".concat(l.q.guildChequeSkill, ":").concat(e._id)], e)
                }
                , [t])
            }
        }
    },
    86069: function(e, t, a) {
        "use strict";
        a.d(t, {
            o: function() {
                return i
            },
            q: function() {
                return r
            }
        });
        var n, r, s = a(31858), l = a(13352);
        (n = r || (r = {})).items = "items",
        n.users = "users",
        n.guilds = "guilds",
        n.guildChequeSkills = "guildChequeSkills",
        n.guildChequeSkill = "guildChequeSkill";
        let i = ()=>{
            let e = (0,
            s.NL)();
            return {
                invalidateQueries: (0,
                l.useCallback)(t=>{
                    for (let a of t)
                        e.invalidateQueries({
                            predicate: e=>{
                                let {queryKey: t} = e;
                                return String(t[0]).startsWith(a)
                            }
                            ,
                            type: "all"
                        })
                }
                , [e]),
                queryClient: e
            }
        }
    },
    91225: function(e, t, a) {
        "use strict";
        a.d(t, {
            _: function() {
                return c
            }
        });
        var n = a(13352)
          , r = a(50529)
          , s = a(632)
          , l = a(52272)
          , i = a(60070);
        let c = e=>{
            let t = (0,
            s.a)(e)
              , a = (0,
            r.qr)(e=>e.items)
              , c = (0,
            l.U)(t.data.guild)
              , o = (0,
            n.useMemo)(()=>{
                let e = {
                    speed: 0,
                    size: 0,
                    ref: 0
                };
                if (t.loading)
                    return e;
                let n = (0,
                i.xn)(a, "_id");
                for (let a of t.data.items) {
                    let t = n.get(a);
                    e.size += t.attribute.tokenSize || 0,
                    e.ref += t.attribute.refSize || 0,
                    e.speed += t.attribute.speed || 0
                }
                return e.size += e.size * c.data.sizeRate,
                e.speed += e.speed * c.data.speedRate,
                e
            }
            , [c.data.sizeRate, c.data.speedRate, a, t.data.items, t.loading]);
            return (0,
            n.useMemo)(()=>({
                data: o,
                loading: t.loading
            }), [o, t.loading])
        }
    },
    50529: function(e, t, a) {
        "use strict";
        a.d(t, {
            default: function() {
                return j
            },
            qD: function() {
                return b
            },
            qr: function() {
                return y
            }
        });
        var n = a(45615)
          , r = a(13352)
          , s = a(82216)
          , l = a(25652)
          , i = a(9680)
          , c = a(31858)
          , o = a(29117)
          , u = a.n(o)
          , d = a(67338)
          , f = a(15019)
          , m = a(90047)
          , g = a(80526)
          , h = a(92517)
          , x = a(98053)
          , p = a(9351);
        function v() {
            return window.self !== window.top ? document.referrer : ""
        }
        let w = ()=>p.env.NEXT_PUBLIC_TELEGRAM_USERNAME
          , y = (0,
        l.Ue)()((0,
        s.tJ)(e=>({
            serverName: "",
            chainId: "",
            serverId: "",
            owner: "",
            fee: "0",
            news: "",
            readNews: "",
            items: [],
            skills: [],
            setApp: t=>e({
                ...t
            })
        }), {
            name: "app-store",
            storage: (0,
            s.FL)(()=>u())
        }))
          , b = ()=>y()
          , A = new i.S({
            defaultOptions: {
                queries: {
                    refetchOnWindowFocus: !1,
                    refetchOnMount: !1,
                    staleTime: 3e5
                }
            }
        });
        function j(e) {
            let {children: t} = e
              , {setApp: a} = y()
              , [s,l] = (0,
            r.useState)("")
              , [i,o] = (0,
            r.useState)(!0)
              , u = w()
              , p = function() {
                let[e,t] = (0,
                r.useState)(x.Z.isOpen);
                return (0,
                r.useEffect)(()=>{
                    let e = e=>{
                        t(e.detail.isOpen)
                    }
                    ;
                    return window.addEventListener("devtoolschange", e),
                    ()=>{
                        window.removeEventListener("devtoolschange", e)
                    }
                }
                , []),
                e
            }()
              , b = (0,
            r.useCallback)(async()=>{
                if (!(p || v()) || u)
                    try {
                        let {server: e, items: t, skills: n} = await (0,
                        m.t)(h.default.cluster.serverId);
                        a({
                            serverName: e.name,
                            serverId: h.default.cluster.serverId,
                            chainId: e.chainId,
                            owner: e.owner,
                            fee: e.fee,
                            news: e.news,
                            items: t,
                            skills: n
                        })
                    } catch (e) {
                        l(e.message)
                    } finally {
                        o(!1)
                    }
            }
            , [u, p, a]);
            return ((0,
            g.Nr)(b, 300, [b]),
            (0,
            r.useEffect)(()=>{
                "false" !== localStorage.getItem("soundTrack") && (document.addEventListener("click", ()=>{
                    var e = new Audio("https://www.bensound.com/bensound-music/bensound-longnight.mp3");
                    e.volume = .05,
                    e.addEventListener("ended", function() {
                        this.currentTime = 0,
                        this.play()
                    }, !1),
                    e.play(),
                    document.addEventListener("visibilitychange", function() {
                        document.hidden ? e.pause() : e.play()
                    })
                }
                , {
                    once: !0
                }),
                document.addEventListener("click", function(e) {
                    let t = document.createElement("div");
                    t.className = "ripple",
                    t.style.transform = "translate(".concat(e.x, "px, ").concat(e.y, "px)"),
                    document.body.appendChild(t),
                    t.addEventListener("animationend", function() {
                        t.remove()
                    })
                }))
            }
            , []),
            (0,
            r.useEffect)(()=>{
                if (!u) {
                    let e = e=>{
                        ("F12" === e.key || e.ctrlKey && e.shiftKey && "I" === e.key || e.ctrlKey && e.shiftKey && "C" === e.key || e.ctrlKey && e.shiftKey && "J" === e.key || e.ctrlKey && "U" === e.key) && e.preventDefault()
                    }
                      , t = e=>{
                        e.preventDefault()
                    }
                    ;
                    return window.addEventListener("keydown", e),
                    window.addEventListener("contextmenu", t),
                    ()=>{
                        window.removeEventListener("keydown", e),
                        window.removeEventListener("contextmenu", t)
                    }
                }
            }
            , [u]),
            (0,
            r.useEffect)(()=>{}
            , []),
            s) ? (0,
            n.jsx)(f.Z, {
                msg: s
            }) : (!p || v()) && !u ? (0,
            n.jsxs)("div", {
                children: ["Please contact to admin. ", JSON.stringify(p), " |", " ", JSON.stringify(!!v())]
            }) : i ? (0,
            n.jsx)(d.Z, {
                msg: "Loading server data (3/6)"
            }) : (0,
            n.jsx)(c.aH, {
                client: A,
                children: t
            })
        }
    },
    70978: function(e, t, a) {
        "use strict";
        a.d(t, {
            Af: function() {
                return j
            },
            default: function() {
                return E
            },
            fE: function() {
                return N
            },
            lJ: function() {
                return S
            },
            pU: function() {
                return b
            }
        });
        var n = a(45615)
          , r = a(13352)
          , s = a(25652)
          , l = a(4049)
          , i = a(61590)
          , c = a(32530)
          , o = a(27904)
          , u = a(1049)
          , d = a(82216)
          , f = a(86069)
          , m = a(632)
          , g = a(50087)
          , h = a(34992)
          , x = a(50529)
          , p = a(60070)
          , v = a(67338);
        let w = {
            _id: "",
            description: "",
            level: o.G.One,
            name: "",
            owner: "",
            server: "",
            totalMember: 0,
            totalToken: 0,
            userRequests: [],
            skills: [],
            chatLink: ""
        }
          , y = (0,
        s.Ue)()((0,
        d.tJ)(e=>({
            guild: w,
            setGuild: t=>e({
                guild: t
            }),
            updateGuild: t=>e((0,
            l.Uy)(e=>{
                let {guild: a} = e;
                Object.assign(a, t)
            }
            ))
        }), {
            name: "guild",
            storage: (0,
            d.FL)(()=>localStorage)
        }))
          , b = e=>{
            let {data: t} = (0,
            m.a)(e);
            return {
                speed: A({
                    guildId: t.guild,
                    category: g.D.Speed
                }),
                size: A({
                    guildId: t.guild,
                    category: g.D.Size
                })
            }
        }
          , A = e=>{
            let {guildId: t, category: a} = e
              , n = (0,
            h.$O)(t)
              , {skills: s} = (0,
            x.qD)();
            return (0,
            r.useMemo)(()=>{
                if (!n.data)
                    return null;
                let e = (0,
                p.xn)(s, "_id");
                for (let t of n.data) {
                    let n = e.get(t.skill);
                    if ((null == n ? void 0 : n.category) === a)
                        return n
                }
                return null
            }
            , [a, n.data, s])
        }
          , j = e=>{
            let {setGuild: t} = y()
              , {queryClient: a} = (0,
            f.o)()
              , n = (0,
            m.a)()
              , s = (0,
            i.a)({
                queryKey: ["".concat(f.q.guilds, ":").concat(e)],
                queryFn: async()=>{
                    if (!e)
                        return w;
                    let a = await (0,
                    u.Sk)(e);
                    return a._id === n.data.guild && t(a),
                    a
                }
                ,
                enabled: !!e
            })
              , l = (0,
            r.useCallback)(async e=>{
                await a.setQueryData(["".concat(f.q.guilds, ":").concat(e._id)], e),
                e._id === n.data.guild && t(e)
            }
            , [a, t, n.data.guild]);
            return {
                data: s.data || w,
                loading: s.isLoading,
                setGuild: l
            }
        }
          , N = e=>{
            let {search: t, page: a, perPage: n} = e
              , {queryClient: s} = (0,
            f.o)()
              , l = (0,
            i.a)({
                queryKey: ["".concat(f.q.guilds)],
                queryFn: async()=>{
                    let e = (a || 0) * (n || 10)
                      , r = await (0,
                    u.n6)({
                        limit: n,
                        offset: e,
                        search: t
                    });
                    for (let e of r.items)
                        await s.setQueryData(["".concat(f.q.guilds, ":").concat(e._id)], e);
                    return r
                }
            })
              , c = (0,
            r.useCallback)(async()=>{
                try {
                    await s.invalidateQueries({
                        queryKey: ["".concat(f.q.guilds)]
                    })
                } catch (e) {
                    console.log("get guilds errors: ", e.message)
                }
            }
            , [s])
              , o = (0,
            r.useCallback)(async e=>{
                try {
                    let t = (a || 0) * (n || 10)
                      , r = await (0,
                    u.n6)({
                        limit: n,
                        offset: t,
                        search: e
                    });
                    for (let e of r.items)
                        await s.setQueryData(["".concat(f.q.guilds, ":").concat(e._id)], e);
                    return r
                } catch (e) {
                    console.log("find guilds errors: ", e.message)
                }
            }
            , [a, n, s]);
            return {
                data: l.data,
                loading: l.isLoading,
                getGuilds: c,
                refetch: l.refetch,
                findGuilds: o
            }
        }
          , S = e=>{
            let {guildId: t, page: a, perPage: n} = e
              , {queryClient: r} = (0,
            f.o)();
            return (0,
            i.a)({
                queryKey: ["guild-members", n, t],
                queryFn: async()=>{
                    let e = (a || 0) * (n || 10)
                      , s = await (0,
                    c.Rf)({
                        guild: t,
                        offset: e,
                        limit: n
                    });
                    for (let e of s.items)
                        await r.setQueryData(["".concat(f.q.users, ":").concat(e._id)], e);
                    return s
                }
                ,
                enabled: !!t
            })
        }
        ;
        function E(e) {
            let {children: t} = e
              , {setGuild: a} = y()
              , {data: s} = (0,
            m.a)()
              , [l,i] = (0,
            r.useState)(!0)
              , c = (0,
            r.useCallback)(async()=>{
                if (!(null == s ? void 0 : s._id))
                    return a(w);
                try {
                    if (!s.guild)
                        return a(w);
                    let e = await (0,
                    u.Sk)(s.guild);
                    a(e)
                } catch (e) {
                    console.log(e)
                } finally {
                    i(!1)
                }
            }
            , [a, null == s ? void 0 : s._id, s.guild]);
            return ((0,
            r.useEffect)(()=>{
                c()
            }
            , [c]),
            l) ? (0,
            n.jsx)(v.Z, {
                msg: "Loading guilds (5/6)"
            }) : s.guild ? (0,
            n.jsx)(k, {
                children: t
            }) : (0,
            n.jsx)(r.Fragment, {
                children: t
            })
        }
        function k(e) {
            let {children: t} = e
              , {data: a} = (0,
            m.a)();
            return (0,
            h.$O)(a.guild).loading ? (0,
            n.jsx)(v.Z, {
                msg: "Loading skills (6/6)"
            }) : (0,
            n.jsx)(r.Fragment, {
                children: t
            })
        }
    },
    72278: function(e, t, a) {
        "use strict";
        a.d(t, {
            $$: function() {
                return m
            },
            default: function() {
                return g
            },
            kS: function() {
                return f
            }
        });
        var n = a(45615)
          , r = a(13352)
          , s = a(25652)
          , l = a(2209)
          , i = a(29117)
          , c = a(17229)
          , o = a(82216);
        let u = {
            address: "",
            phrase: "",
            privateKey: "",
            publicKey: ""
        }
          , d = (0,
        s.Ue)()((0,
        o.tJ)(e=>({
            privateKey: void 0,
            setPrivateKey: t=>e({
                privateKey: t,
                initialized: !0
            }),
            initialized: !1
        }), {
            name: "ZUSTAND_KEYS",
            storage: (0,
            o.FL)(()=>i)
        }))
          , f = ()=>{
            let {privateKey: e} = d();
            return {
                currentKey: (0,
                r.useMemo)(()=>e || u, [e])
            }
        }
          , m = ()=>{
            let {setPrivateKey: e, privateKey: t} = d();
            return {
                createPrivateKey: (0,
                r.useCallback)(()=>{
                    if (null == t ? void 0 : t.privateKey)
                        return (0,
                        c.i)({
                            privateKey: t.privateKey
                        });
                    let a = (0,
                    l.OF)()
                      , n = (0,
                    c.i)({
                        phrase: a
                    });
                    return e({
                        ...n,
                        phrase: a
                    }),
                    n
                }
                , [null == t ? void 0 : t.privateKey, e]),
                privateKey: t,
                setCurrentKey: e
            }
        }
        ;
        function g(e) {
            let {children: t} = e;
            return (0,
            n.jsx)(r.Fragment, {
                children: t
            })
        }
    },
    13317: function(e, t, a) {
        "use strict";
        a.d(t, {
            TelegramProvider: function() {
                return g
            },
            wA: function() {
                return h
            }
        });
        var n = a(45615)
          , r = a(13352)
          , s = a(67338)
          , l = a(74880)
          , i = a(25652)
          , c = a(82216)
          , o = a(29117)
          , u = a.n(o)
          , d = a(80526)
          , f = a(9351);
        let m = (0,
        i.Ue)()((0,
        c.tJ)(e=>({
            setStore: t=>{
                let {webApp: a, webAppUser: n} = t;
                return e({
                    webApp: a,
                    webAppUser: n
                })
            }
        }), {
            name: "ZUSTAND_TELEGRAM",
            storage: (0,
            c.FL)(()=>u())
        }));
        function g(e) {
            let {children: t} = e
              , a = m()
              , i = h()
              , c = (0,
            l.useRouter)()
              , o = (0,
            r.useCallback)(()=>{
                try {
                    let e = window.Telegram
                      , t = null == e ? void 0 : e.WebApp;
                    t && (t.ready(),
                    t.expand(),
                    t.BackButton.show(),
                    t.onEvent("backButtonClicked", ()=>{
                        c.back()
                    }
                    ),
                    t.isClosingConfirmationEnabled = !0,
                    a.setStore({
                        webApp: t,
                        webAppUser: t.initDataUnsafe.user
                    }))
                } catch (e) {
                    console.log("error", e)
                } finally {}
            }
            , [c, a]);
            return ((0,
            d.Nr)(o, 300, [o]),
            i.username) ? (0,
            n.jsx)(n.Fragment, {
                children: t
            }) : (0,
            n.jsx)(s.Z, {
                msg: "Loading Telegram (2/6)"
            })
        }
        let h = ()=>{
            let {webAppUser: e, webApp: t} = m()
              , a = (0,
            l.useSearchParams)();
            return (0,
            r.useMemo)(()=>{
                var n, r;
                let s = a.get("tgWebAppStartParam") || (null == t ? void 0 : null === (n = t.initDataUnsafe) || void 0 === n ? void 0 : n.start_param) || ""
                  , l = "";
                e && (l = "".concat(e.first_name, " ").concat(e.last_name).trim()),
                "berachain_ecosystem" === s && (s = "66670f70ea503f89b906aa8c");
                let i = {
                    id: (null == e ? void 0 : e.id) || 0,
                    name: l,
                    username: (null == e ? void 0 : e.username) || (null == e ? void 0 : null === (r = e.id) || void 0 === r ? void 0 : r.toString()) || "",
                    referrer: s,
                    isPremium: !!(null == e ? void 0 : e.is_premium),
                    thumbnail: (null == e ? void 0 : e.photo_url) || ""
                };
                return f.env.NEXT_PUBLIC_TELEGRAM_USERNAME && (i.username = f.env.NEXT_PUBLIC_TELEGRAM_USERNAME,
                i.name = f.env.NEXT_PUBLIC_TELEGRAM_USERNAME),
                i
            }
            , [a, null == t ? void 0 : t.initDataUnsafe.start_param, e])
        }
    },
    59116: function(e, t, a) {
        "use strict";
        a.d(t, {
            p: function() {
                return l
            }
        });
        var n = a(45615);
        a(13352);
        var r = a(53435)
          , s = a(51733);
        let l = ()=>({
            message: e=>{
                let {msg: t, type: a} = e;
                return (0,
                r.default)(t, {
                    icon: (0,
                    n.jsx)(s.Z, {
                        type: a
                    }),
                    className: "hot-toast hot-toast-".concat(a)
                })
            }
        })
    },
    632: function(e, t, a) {
        "use strict";
        a.d(t, {
            default: function() {
                return M
            },
            a: function() {
                return P
            },
            L: function() {
                return B
            }
        });
        var n = a(45615)
          , r = a(13352)
          , s = a(25652)
          , l = a(82216)
          , i = a(4049)
          , c = a(61590)
          , o = a(1464)
          , u = a(15019)
          , d = a(67338)
          , f = a(60346)
          , m = a(95471)
          , g = a(48278)
          , h = a(99880)
          , x = a(42796)
          , p = e=>{
            let[t,a] = (0,
            r.useState)(5)
              , s = (0,
            r.useMemo)(()=>Math.floor(Math.random() * window.innerWidth), [])
              , l = (0,
            r.useMemo)(()=>Math.floor(Math.random() * window.innerWidth), [])
              , [i,c] = (0,
            r.useState)({
                x: s < 60 ? 20 : s > window.innerWidth - 60 ? window.innerWidth - 60 : s,
                y: l < 100 ? 100 : s > window.innerHeight - 100 ? window.innerHeight - 100 : s
            })
              , o = ()=>{
                let e = Math.floor(Math.random() * window.innerWidth)
                  , t = e < 60 ? 10 : e > window.innerWidth - 60 ? window.innerWidth - 60 : e
                  , a = Math.floor(Math.random() * window.innerHeight);
                return {
                    x: t,
                    y: a < 100 ? 100 : a > window.innerHeight - 100 ? window.innerHeight - 100 : a
                }
            }
              , u = (0,
            r.useCallback)(()=>{
                let {x: e, y: t} = o();
                c({
                    x: e,
                    y: t
                })
            }
            , []);
            return (0,
            r.useEffect)(()=>{
                let e = setInterval(u, 1500);
                return ()=>clearInterval(e)
            }
            , [u]),
            (0,
            n.jsxs)("div", {
                onClick: ()=>{
                    t > 1 ? (u(),
                    a(t - 1),
                    (0,
                    x.Vb)()) : (e.onClick(),
                    a(5))
                }
                ,
                className: "take-bee-fly",
                style: {
                    transform: "translate(".concat(i.x, "px, ").concat(i.y, "px)"),
                    transformOrigin: "center"
                },
                children: [(0,
                n.jsx)(g.default, {
                    className: "take-bee-fly-img",
                    src: h.Z,
                    alt: "welcome"
                }), (0,
                n.jsx)("progress", {
                    className: "progress rounded-full w-full bg-white",
                    value: t,
                    max: 5
                })]
            })
        }
          , v = a(52225)
          , w = a(79620)
          , y = a(94027)
          , b = a(45790)
          , A = a(32530)
          , j = a(60070)
          , N = {
            src: "/_next/static/media/catch.580da03d.svg",
            height: 343,
            width: 343,
            blurWidth: 0,
            blurHeight: 0
        };
        function S(e) {
            let {onClose: t, open: a} = e
              , [s,l] = (0,
            r.useState)({
                type: "waiting",
                amount: 0,
                msg: ""
            })
              , i = (0,
            r.useCallback)(()=>{
                t(),
                l({
                    type: "waiting",
                    amount: 0,
                    msg: ""
                })
            }
            , [t])
              , c = (0,
            r.useCallback)(async()=>{
                a && "waiting" === s.type && setTimeout(async()=>{
                    try {
                        let e = await (0,
                        A.pe)({
                            type: 0
                        });
                        l({
                            type: "success",
                            amount: e.amount,
                            msg: ""
                        })
                    } catch (a) {
                        var e, t;
                        l({
                            type: "error",
                            amount: 0,
                            msg: (null == a ? void 0 : null === (t = a.response) || void 0 === t ? void 0 : null === (e = t.data) || void 0 === e ? void 0 : e.message) || a.message
                        })
                    }
                }
                , 3e3)
            }
            , [a, s.type]);
            return (0,
            r.useEffect)(()=>{
                c()
            }
            , [c]),
            (0,
            n.jsxs)(v.Z, {
                onClose: ()=>{}
                ,
                open: a,
                children: [a && "waiting" === s.type && (0,
                n.jsx)(C, {}), a && "success" === s.type && (0,
                n.jsx)(k, {
                    amount: s.amount,
                    onClose: i
                }), a && "error" === s.type && (0,
                n.jsx)(E, {
                    onClose: i,
                    msg: s.msg
                })]
            })
        }
        function E(e) {
            return (0,
            n.jsxs)(r.Fragment, {
                children: [(0,
                n.jsx)(g.default, {
                    className: "absolute -top-8 left-1/3 w-1/3",
                    src: w.Z,
                    alt: "Confetti upgraded"
                }), (0,
                n.jsxs)("div", {
                    className: "flex flex-col gap-4 mt-6",
                    children: [(0,
                    n.jsxs)("div", {
                        className: "flex flex-col gap-2 items-center",
                        children: [(0,
                        n.jsx)("h6", {
                            className: "font-bold",
                            children: "Oh no!"
                        }), (0,
                        n.jsx)("span", {
                            children: e.msg
                        })]
                    }), (0,
                    n.jsx)("button", {
                        className: "btn p-5 w-full",
                        onClick: e.onClose,
                        children: "Close"
                    })]
                })]
            })
        }
        function k(e) {
            let {data: t, setUser: a} = P();
            return (0,
            r.useEffect)(()=>{
                (0,
                x.bl)()
            }
            , []),
            (0,
            n.jsxs)(r.Fragment, {
                children: [(0,
                n.jsx)(g.default, {
                    className: "absolute -top-8 left-1/3 w-1/3",
                    src: w.Z,
                    alt: "Confetti upgraded"
                }), (0,
                n.jsxs)("div", {
                    className: "flex flex-col gap-4 mt-6",
                    children: [(0,
                    n.jsxs)("div", {
                        className: "flex flex-col gap-2 items-center",
                        children: [(0,
                        n.jsx)("h6", {
                            className: "font-bold",
                            children: "Congratulation"
                        }), (0,
                        n.jsx)("span", {
                            children: "Catch bee successfully"
                        })]
                    }), (0,
                    n.jsxs)("div", {
                        className: "flex flex-col gap-1 max-level-card p-4 items-center w-full text-white",
                        children: [(0,
                        n.jsxs)("div", {
                            className: "relative flex w-32 h-32 justify-center items-center",
                            children: [(0,
                            n.jsx)(g.default, {
                                className: "absolute top-0 left-0 animate-spin ",
                                src: b.Z,
                                alt: "light"
                            }), (0,
                            n.jsx)("div", {
                                className: "relative h-14 w-14",
                                children: (0,
                                n.jsx)(g.default, {
                                    fill: !0,
                                    src: y.Z,
                                    alt: "Items"
                                })
                            })]
                        }), (0,
                        n.jsx)("h4", {
                            className: "font-bold",
                            children: "".concat((0,
                            j.CE)(e.amount), " BEE")
                        })]
                    }), (0,
                    n.jsx)("button", {
                        className: "btn p-5 w-full",
                        onClick: ()=>{
                            a({
                                ...t,
                                tokenBalance: t.tokenBalance + e.amount
                            }),
                            (0,
                            x.mI)(),
                            e.onClose()
                        }
                        ,
                        children: "Claim"
                    })]
                })]
            })
        }
        function C(e) {
            let {} = e;
            return (0,
            n.jsxs)(r.Fragment, {
                children: [(0,
                n.jsx)(g.default, {
                    className: "absolute -top-8 left-1/3 w-1/3",
                    src: w.Z,
                    alt: "Confetti upgraded"
                }), (0,
                n.jsxs)("div", {
                    className: "flex flex-col gap-4 mt-6",
                    children: [(0,
                    n.jsxs)("div", {
                        className: "flex flex-col gap-2 items-center",
                        children: [(0,
                        n.jsx)("h6", {
                            className: "font-bold",
                            children: "Catching Bee"
                        }), (0,
                        n.jsx)("h4", {
                            className: "flex justify-center items-center",
                            children: (0,
                            n.jsx)("div", {
                                className: "text-loader"
                            })
                        })]
                    }), (0,
                    n.jsx)("div", {
                        className: "flex flex-col gap-1 max-level-card p-4 items-center w-full text-white",
                        children: (0,
                        n.jsx)("div", {
                            className: "relative w-44 h-44",
                            children: (0,
                            n.jsx)(g.default, {
                                src: N,
                                alt: "Bee",
                                className: "object-contain"
                            })
                        })
                    }), (0,
                    n.jsx)("button", {
                        className: "btn p-5 w-full",
                        disabled: !0,
                        children: "Catching"
                    })]
                })]
            })
        }
        function I(e) {
            let {children: t} = e
              , [a,s] = (0,
            r.useState)(!1)
              , [l,i] = (0,
            r.useState)(!1)
              , c = (0,
            r.useCallback)(()=>{
                s(!1),
                i(!1)
            }
            , []);
            return (0,
            r.useEffect)(()=>{
                if (a || l)
                    return;
                let e = setTimeout(()=>{
                    s(!0),
                    setTimeout(()=>s(!1), 1e4)
                }
                , (0,
                j.V6)(15e3, 25e3));
                return ()=>clearTimeout(e)
            }
            , [a, l]),
            (0,
            n.jsxs)(r.Fragment, {
                children: [a && (0,
                n.jsx)(p, {
                    onClick: ()=>{
                        s(!1),
                        i(!0)
                    }
                }), (0,
                n.jsx)(S, {
                    open: l,
                    onClose: c
                }), t]
            })
        }
        a(46385);
        var T = a(86069)
          , Z = a(50529)
          , L = a(13317)
          , _ = a(72278)
          , R = a(74880)
          , D = a(66442)
          , U = a(80526);
        let q = {
            _id: "",
            address: "",
            createdAt: "",
            guild: "",
            items: [],
            lastClaimAt: new Date,
            name: "",
            pubkey: "",
            referrer: "",
            server: "",
            tokenBalance: 0,
            totalTokenBonus: 0,
            totalTokenClaimed: 0,
            totalTokenEarned: 0,
            totalQuestClaimed: 0,
            totalTokenStolen: 0,
            username: "",
            isPremium: !1,
            thumbnail: "",
            totalReferral: 0,
            guildRequests: [],
            totalGuildDonate: 0,
            stolenBy: [],
            ip: "",
            userAgent: "",
            guildJoinedAt: "",
            updatedAt: "",
            takeTokenUpdateAt: new Date,
            takeTokenNonce: 0,
            takeTokenTotal: 0
        }
          , B = (0,
        s.Ue)()((0,
        l.tJ)(e=>({
            user: q,
            setUser: t=>e({
                user: t
            }),
            updateUser: t=>e((0,
            i.Uy)(e=>{
                let {user: a} = e;
                Object.assign(a, t)
            }
            ))
        }), {
            name: "user",
            storage: (0,
            l.FL)(()=>localStorage)
        }))
          , P = e=>{
            let {user: t, setUser: a} = B()
              , n = e || (null == t ? void 0 : t._id)
              , {queryClient: s} = (0,
            T.o)()
              , l = (0,
            c.a)({
                queryKey: ["".concat(T.q.users, ":").concat(n)],
                queryFn: async()=>{
                    let e = await (0,
                    A.PR)(n);
                    return n === (null == t ? void 0 : t._id) && a(e),
                    e
                }
                ,
                enabled: !!n
            })
              , i = (0,
            r.useCallback)(e=>{
                s.setQueryData(["".concat(T.q.users, ":").concat(e._id)], e),
                e._id === (null == t ? void 0 : t._id) && a(e)
            }
            , [s, a, null == t ? void 0 : t._id]);
            return {
                data: l.data || q,
                loading: l.isLoading,
                setUser: i
            }
        }
        ;
        function M(e) {
            var t, a;
            let {children: s} = e
              , {user: l, setUser: i} = B()
              , c = (0,
            _.$$)()
              , {serverId: g} = (0,
            Z.qr)()
              , h = (0,
            L.wA)()
              , x = (0,
            R.useRouter)()
              , [p,v] = (0,
            r.useState)(!0)
              , w = h.username
              , y = (0,
            r.useCallback)(async function() {
                var e, t;
                let a = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : new Date().toISOString();
                if (null === (e = c.privateKey) || void 0 === e ? void 0 : e.privateKey) {
                    let e = new o.w(null === (t = c.privateKey) || void 0 === t ? void 0 : t.privateKey)
                      , n = "".concat(l._id, ":").concat(g, ":").concat(a)
                      , r = await e.signMessage(n);
                    (0,
                    D.QV)({
                        serverId: g,
                        userId: l._id,
                        bccToken: r,
                        lifeTime: a
                    })
                }
            }, [null === (t = c.privateKey) || void 0 === t ? void 0 : t.privateKey, g, l._id]);
            (0,
            U.Nr)(y, 1e3, [y]),
            (0,
            r.useEffect)(()=>{
                let e = setInterval(()=>{
                    y(new Date().toISOString())
                }
                , 3e5);
                return ()=>{
                    clearInterval(e)
                }
            }
            , [y]);
            let b = (0,
            r.useCallback)(async()=>{
                try {
                    if (!w)
                        throw Error("Invalid telegram account");
                    let e = await (0,
                    A.d0)(g, w);
                    if (i(e || q),
                    e)
                        return x.push("/home/earn")
                } catch (e) {
                    console.log("error", e)
                } finally {
                    v(!1)
                }
            }
            , [x, g, i, w]);
            return ((0,
            U.Nr)(b, 500, [b]),
            p) ? (0,
            n.jsx)(d.Z, {
                msg: "Loading user (4/6)"
            }) : w ? l._id ? l.address.toLowerCase() !== (null === (a = c.privateKey) || void 0 === a ? void 0 : a.address.toLowerCase()) ? (0,
            n.jsx)(m.default, {}) : l.username && l.username !== w ? (0,
            n.jsx)(u.Z, {
                msg: "Invalid telegram account with user"
            }) : (0,
            n.jsx)(I, {
                children: s
            }) : (0,
            n.jsx)(f.default, {}) : (0,
            n.jsx)(u.Z, {
                msg: "Invalid telegram account"
            })
        }
    },
    80526: function(e, t, a) {
        "use strict";
        a.d(t, {
            Nr: function() {
                return c
            },
            Sy: function() {
                return r
            },
            p: function() {
                return s
            },
            sA: function() {
                return l
            }
        });
        var n = a(13352);
        let r = (e,t)=>{
            let a = (null == t ? void 0 : t.maxLength) || 3
              , n = (null == t ? void 0 : t.symbol) || "..."
              , r = (null == t ? void 0 : t.suffix) === void 0 || t.suffix;
            if (!e || e.length <= 2 * a)
                return e;
            let s = "".concat(n).concat(e.substring(e.length - a));
            return "".concat(e.substring(0, a)).concat(r ? s : "")
        }
          , s = (e,t)=>{
            let a = Math.floor(16777215 * Math.random());
            if (e) {
                a = 0;
                for (let t = 0; t < e.length; t++)
                    a = e.charCodeAt(t) + ((a << 5) - a)
            }
            var n = [0, 0, 0];
            for (let e = 0; e < 3; e++) {
                var r = a >> 8 * e & 255;
                n[e] = r
            }
            return "rgba(".concat(n[0], ", 100, ").concat(n[1], ",").concat(t || 1, ")")
        }
          , l = e=>new Promise(t=>setTimeout(t, e))
          , i = (e,t)=>{
            let a = (0,
            n.useRef)(!1)
              , r = (0,
            n.useRef)()
              , s = (0,
            n.useRef)(e)
              , l = (0,
            n.useCallback)(()=>a.current, [])
              , i = (0,
            n.useCallback)(()=>{
                a.current = !1,
                r.current && clearTimeout(r.current),
                r.current = setTimeout(()=>{
                    a.current = !0,
                    s.current()
                }
                , t)
            }
            , [t])
              , c = (0,
            n.useCallback)(()=>{
                a.current = null,
                r.current && clearTimeout(r.current)
            }
            , []);
            return (0,
            n.useEffect)(()=>{
                s.current = e
            }
            , [e]),
            (0,
            n.useEffect)(()=>(i(),
            c), [t]),
            [l, c, i]
        }
          , c = (e,t,a)=>{
            let[r,s,l] = i(e, t);
            return (0,
            n.useEffect)(l, a),
            [r, s]
        }
    },
    78623: function(e, t, a) {
        "use strict";
        a.d(t, {
            $q: function() {
                return l
            },
            T8: function() {
                return o
            },
            uR: function() {
                return c
            }
        });
        var n = a(70946)
          , r = a.n(n)
          , s = a(6882);
        let l = (e,t)=>{
            let[a,n] = i(e)
              , s = new (r())(10);
            return a.mul(s.pow(new (r())(t))).div(s.pow(new (r())(n)))
        }
          , i = e=>{
            let t = new (r())(10)
              , [a,n] = e.toString().split(".")
              , s = (n || "").length;
            return [new (r())(a).mul(t.pow(new (r())(s))).add(new (r())(n || "0")), s]
        }
          , c = e=>e ? (0,
        s.Z)(e) : (0,
        s.Z)("0")
          , o = (e,t)=>{
            let a = new (r())(10)
              , n = e.div(a.pow(new (r())(t)))
              , s = e.sub(n.mul(a.pow(new (r())(t))))
              , l = n.toString()
              , i = s.toString();
            for (; i.length < t; )
                i = "0" + i;
            return "" === (i = i.replace(/0+$/, "")) && (i = "0"),
            l + "." + i
        }
    },
    88563: function() {},
    46385: function() {},
    72363: function() {},
    56471: function(e, t) {
        "use strict";
        t.Z = {
            src: "/_next/static/media/bear-group.0a1e7126.png",
            height: 1029,
            width: 1029,
            blurDataURL: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAYAAADED76LAAABE0lEQVR4nAEIAff+AfT5+wDZ3uIGDxQODCHote4DLWAA/f/0C/XKdBaJvSPkAez2+nMNBwWCBgIA8frNnXgBES5h/RMlxfHGEch+SgDJAfH//zYO+PlX4d28ctTm9wAB/v4AI/rQzSdFgpzfCASlAQAAAAq0dQCJ2CWJbEIgE/oODh8B1Ma/BTgvMfMEQlQrAc3At2DOvrSf5xH3/Vgu+gP87Qn/7r/HARAxWuMrZHA9AeHKyV2/qpeit9zX/X1IFAAF9QL/9+j0BO0ZNvIlXX4tAYGxF7385A9C6vgEAEoWHwACAAwA0OvIAPgRCQABE/2tAY2/Io79AQFIAgD0Bff+N64CAvsF/gDKEwb+Cg0FAQCz60F3vxdIZEwAAAAASUVORK5CYII=",
            blurWidth: 8,
            blurHeight: 8
        }
    },
    99880: function(e, t) {
        "use strict";
        t.Z = {
            src: "/_next/static/media/bee.f27a67a3.svg",
            height: 69,
            width: 50,
            blurWidth: 0,
            blurHeight: 0
        }
    },
    79620: function(e, t) {
        "use strict";
        t.Z = {
            src: "/_next/static/media/star-confetti.c76d87cc.png",
            height: 148,
            width: 345,
            blurDataURL: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAADCAYAAACuyE5IAAAAbklEQVR4nAFjAJz/Af//rgUAAP8M7ZVTAhNKcnoABwcA77GHhxFdn/8ADBXzAfzOW5oCBf9i89DQZQkgE5j//gQG+OPlYg0uMZv+AAmhAfevG2P17+9i790WaAoD4CHr4AAGHTYI1v4JBZYEBhKrV+wqo4NibaEAAAAASUVORK5CYII=",
            blurWidth: 8,
            blurHeight: 3
        }
    },
    45790: function(e, t) {
        "use strict";
        t.Z = {
            src: "/_next/static/media/light-circle.672559a2.svg",
            height: 124,
            width: 125,
            blurWidth: 0,
            blurHeight: 0
        }
    },
    73743: function(e, t) {
        "use strict";
        t.Z = {
            src: "/_next/static/media/warning_bear.47070f2e.png",
            height: 385,
            width: 385,
            blurDataURL: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAYAAADED76LAAABC0lEQVR4nAVAO0vDQBz//a/JNcHEQSE6iI+AOEhBiyBtUamdDHRzEBzUxV0ddRVdnPwiTtJZxFn7ACn1QZG2QQptktocMb1C81MLz80RMpeWKvaNBBkq4UNG8gZJPusrFbKXV6WhEOxeFXYbMAA08isgEeO1xUA7u4XhdPdNyxaPpVB1UhlQebhHbC7hKzYlOfltYbWfeO70FutbBQReH8QSqNfKuLo4B23ksmJT9/jAraIjTJTqPs5ODhF2Gnj8GYKO0mthXwuSasTw/fsHrnGQ10TGOYCIEpJqqcX4DgprTRKUQYTAD/E+Y+HampN7fo/ITdtl/1+mSqTIF51RV0gUR7F0ApcmuPY5BkhzadCB+rXkAAAAAElFTkSuQmCC",
            blurWidth: 8,
            blurHeight: 8
        }
    },
    45638: function(e, t) {
        "use strict";
        t.default = {
            src: "/_next/static/media/error.74bd8204.svg",
            height: 24,
            width: 24,
            blurWidth: 0,
            blurHeight: 0
        }
    },
    10779: function(e, t) {
        "use strict";
        t.default = {
            src: "/_next/static/media/success.f629c4ea.svg",
            height: 24,
            width: 24,
            blurWidth: 0,
            blurHeight: 0
        }
    },
    72745: function(e, t) {
        "use strict";
        t.default = {
            src: "/_next/static/media/warning.d82fe2f3.svg",
            height: 24,
            width: 24,
            blurWidth: 0,
            blurHeight: 0
        }
    },
    94027: function(e, t) {
        "use strict";
        t.Z = {
            src: "/_next/static/media/bee-coin.71d7f0e5.png",
            height: 71,
            width: 70,
            blurDataURL: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAYAAADED76LAAABBElEQVR42jXLPUsCAQAG4Lcgiv5Crc1BY7S2NeVgDa6BQdHiUJvIYbklRJhlUVhLHC0VFBdXeMfVSeVQFx4JUmSdcpBEfpx3r7f47A9I9sEXWxmZuZfip/mbqJiOjS8A6EePuDe7Zn9e0msY9Fom/yoilaNpGcAwQgOYrL5nSdqkpTisPXTYNNr/z6vMhpGEvIOkW9fpVTXHVjf4q2+y/ZPzXCNDLYIi1NToftNSWD+f7zwKoBQFTfXAP9u8CuIFu3MIlZUtWh95p/R05pqvt27tS2+9pQOMAOuAT0qMnZS1DCulHL+L1ywcLzE+hTtAGERPKojwhTAhHy6iEAASwPIQAHQBrSeTvNfWQUMAAAAASUVORK5CYII=",
            blurWidth: 8,
            blurHeight: 8
        }
    }
}]);
