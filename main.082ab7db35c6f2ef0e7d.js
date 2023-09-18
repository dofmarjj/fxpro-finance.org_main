(window.webpackJsonp = window.webpackJsonp || []).push([
  [17],
  {
    0: function (e, t, a) {
      e.exports = a("zUnb");
    },
    "00Dm": function (e, t, a) {
      "use strict";
      a.d(t, "a", function () {
        return u;
      });
      var o = a("vj7Q"),
        r = a("iJl/"),
        n = a("z2AY"),
        i = a("0NL4"),
        l = a("pirP");
      const s = {
        tradingConditions: [
          {
            label: "tradingConditions_minimum_contract_size",
            order: 4,
            platforms: [n.a.mt4_fix, n.a.mt4, n.a.mt5],
            valueFunc: (e) => `${e.minimumVolume || 0} lots`,
          },
          {
            label: "tradingConditions_minimum_contract_size",
            order: 4,
            platforms: [n.a.ctrader],
            valueFunc: (e) =>
              `${e.minimumVolume || 0} ${e.name.slice(0, 3)} (0.01 lots)`,
          },
          {
            label: "tradingConditions_minimum_step_to_increasing_contract_size",
            order: 7,
            valueFunc: (e) => `${e.volumeStep || 0} ${e.name.slice(0, 3)}`,
          },
          {
            label: "tradingConditions_minimum_margin_requirements",
            order: 8,
            value: "0",
          },
          {
            label: "tradingConditions_used_margin_in_us_dollar",
            order: 3,
            valueFunc: (e) => {
              const t = e.name.slice(0, 3),
                a = e.name.slice(3, e.name.length),
                o = "USD" === t || ("USD" !== t && "USD" !== a) ? a : t;
              return `${e.lotSize / 100} ${o} X USD${o} Rate`;
            },
          },
          {
            label: "tradingConditions_one_tick_value_in_usd",
            order: 6,
            valueFunc: (e) => {
              const t = e.name.slice(0, 3),
                a = e.name.slice(3, e.name.length),
                o = "USD" === t || ("USD" !== t && "USD" !== a) ? a : t;
              return `${e.lotSize * e.tickValue} ${o} / USD${o} Rate`;
            },
            platforms: [n.a.mt4, n.a.mt5, n.a.mt4_fix],
          },
          {
            order: 1,
            label: "tradingConditions_limit_and_stop_level",
            valueFunc: (e) => `${e.stopslevel} points`,
          },
          {
            order: 5,
            valueFunc: (e) => `${e.lotSize} units`,
            label: "tradingConditions_one_lot_size",
            platforms: [n.a.mt4, n.a.mt5, n.a.mt4_fix],
          },
          {
            order: 10,
            label: "tradingConditions_mt4_fixed_spreads_8am_9pm",
            value: "2.5",
            platforms: [n.a.mt4_fix],
            instruments: ["AUDUSD"],
          },
          {
            order: 9,
            label: "tradingConditions_mt4_fixed_spreads_11pm_8am",
            value: "4.0",
            platforms: [n.a.mt4_fix],
            instruments: ["EURCHF"],
          },
          {
            order: 10,
            label: "tradingConditions_mt4_fixed_spreads_8am_9pm",
            value: "2.8",
            platforms: [n.a.mt4_fix],
            instruments: ["EURCHF"],
          },
          {
            order: 9,
            label: "tradingConditions_mt4_fixed_spreads_11pm_8am",
            value: "2.8",
            platforms: [n.a.mt4_fix],
            instruments: ["USDCHF"],
          },
          {
            order: 10,
            label: "tradingConditions_mt4_fixed_spreads_8am_9pm",
            value: "2.1",
            platforms: [n.a.mt4_fix],
            instruments: ["USDCHF"],
          },
          {
            order: 9,
            label: "tradingConditions_mt4_fixed_spreads_11pm_8am",
            value: "3.3",
            platforms: [n.a.mt4_fix],
            instruments: ["GBPJPY"],
          },
          {
            order: 10,
            label: "tradingConditions_mt4_fixed_spreads_8am_9pm",
            value: "2.7",
            platforms: [n.a.mt4_fix],
            instruments: ["GBPJPY"],
          },
          {
            order: 9,
            label: "tradingConditions_mt4_fixed_spreads_11pm_8am",
            value: "2.1",
            platforms: [n.a.mt4_fix],
            instruments: ["GBPUSD"],
          },
          {
            order: 10,
            label: "tradingConditions_mt4_fixed_spreads_8am_9pm",
            value: "1.9",
            platforms: [n.a.mt4_fix],
            instruments: ["GBPUSD"],
          },
          {
            order: 9,
            label: "tradingConditions_mt4_fixed_spreads_11pm_8am",
            value: "2.2",
            platforms: [n.a.mt4_fix],
            instruments: ["USDCAD"],
          },
          {
            order: 10,
            label: "tradingConditions_mt4_fixed_spreads_8am_9pm",
            value: "1.8",
            platforms: [n.a.mt4_fix],
            instruments: ["USDCAD"],
          },
          {
            order: 9,
            label: "tradingConditions_mt4_fixed_spreads_11pm_8am",
            value: "1.9",
            platforms: [n.a.mt4_fix],
            instruments: ["USDJPY"],
          },
          {
            order: 10,
            label: "tradingConditions_mt4_fixed_spreads_8am_9pm",
            value: "1.6",
            platforms: [n.a.mt4_fix],
            instruments: ["USDJPY"],
          },
          {
            order: 9,
            label: "tradingConditions_mt4_fixed_spreads_11pm_8am",
            value: "2.0",
            platforms: [n.a.mt4_fix],
          },
          {
            order: 10,
            label: "tradingConditions_mt4_fixed_spreads_8am_9pm",
            value: "1.8",
            platforms: [n.a.mt4_fix],
          },
          {
            order: 11,
            label: "tradingConditions_mt4_fixed_spreads_abnormal",
            value: "page_SpreadBettingDifferenceCfd_floatingSpreads",
            platforms: [n.a.mt4_fix],
          },
          {
            order: 12,
            label: "tradingConditions_fixed_spreads_limit_and_stop_level",
            value: "0.00050",
            platforms: [n.a.mt4_fix],
          },
        ],
      };
      var c = a("fe7P");
      const m = {
          tradingConditions: [
            {
              label: "tradingConditions_ticker",
              order: 1,
              valueFunc: (e) => `${e.name}`,
            },
            {
              label: "tradingConditions_limit_and_stop_level",
              order: 3,
              valueFunc: (e) => `${e.stopslevel}`,
            },
            {
              label: "tradingConditions_shares_one_tick_value_per_share",
              order: 4,
              valueFunc: (e) => `${e.tickValue} ${e.marginCurrency}`,
            },
            {
              label: "tradingConditions_minimum_contract_size",
              order: 5,
              valueFunc: (e) => `${e.minimumVolume || 0} share`,
            },
            { label: "commission", order: 9, value: "No" },
            {
              label: "tradingConditions_min_pricefluctuation",
              order: 10,
              valueFunc: (e) => `${e.tickSize} ${e.marginCurrency}`,
            },
            {
              label:
                "tradingConditions_minimum_step_to_increasing_contract_size",
              order: 11,
              valueFunc: (e) => `${e.volumeStep || 0} share`,
            },
            {
              label: "tradingConditions_minimum_margin_requirements",
              order: 12,
              value: "0",
            },
            {
              label: "tradingConditions_shares_maximum_trade_size",
              order: 13,
              value: "1000",
            },
            {
              label: "tradingConditions_shares_maximum_numbers_of_shares",
              order: 14,
              valueFunc: (e) => (d.includes(e.name) ? "500 000" : "100 000"),
            },
          ],
        },
        d = [
          "MSFT.O",
          "DIS.N",
          "JNJ.N",
          "AAPL.O",
          "XOM.N",
          "T.N",
          "JPM.N",
          "CRM.N",
          "INTC.O",
          "GOOGL.O",
          "SBUX.O",
          "ADBE.O",
          "AMZN.O",
          "MRK.N",
          "C.N",
          "BAC.N",
          "BA.N",
          "V.N",
          "QCOM.O",
          "PFE.N",
          "NFLX.O",
          "WFC.N",
          "META.O",
          "GM.N",
          "MA.N",
          "ABNB.O",
          "PYPL.O",
          "UBER.N",
          "SQ.N",
          "NVDA.O",
          "AMD.O",
          "TSLA.O",
          "ROKU.O",
          "SHOP.N",
          "TWLO.N",
          "SNAP.N",
          "COIN.O",
          "MRNA.O",
          "UPST.O",
          "AFRM.O",
        ],
        p = {
          [r.a.Cryptocurrencies]: {
            tradingConditions: [
              {
                order: 2,
                label: "tradingConditions_limit_and_stop_level",
                valueFunc: (e) => `${e.stopslevel}`,
              },
              {
                order: 3,
                label: "tradingConditions_one_tick_value",
                valueFunc: (e) => `${e.tickValue}`,
              },
              {
                order: 5,
                label: "tradingConditions_minimum_contract_size",
                valueFunc: (e) => `${e.minimumVolume || 0} lot`,
              },
              {
                order: 6,
                label: "tradingConditions_one_lot_size",
                valueFunc: (e) => `${e.lotSize || 0} ${e.measure}`,
              },
              {
                order: 7,
                label: "tradingConditions_1pip",
                valueFunc: (e) => e.lotSize * e.tickSize + " USD",
              },
              {
                label:
                  "tradingConditions_minimum_step_to_increasing_contract_size",
                order: 9,
                valueFunc: (e) => `${e.volumeStep} lot`,
              },
              {
                label: "tradingConditions_minimum_margin_requirements",
                order: 10,
                value: "0",
              },
              {
                label: "tradingConditions_executionMode",
                order: 12,
                value: "Market (irrelevant of platform or Account type)",
              },
            ],
          },
          [r.a.Forex]: s,
          [r.a.Futures]: c.a,
          [r.a.SpotMetals]: {
            tradingConditions: [
              {
                order: 50,
                label: "tradingConditions_limit_and_stop_level",
                valueFunc: (e) => `${e.stopslevel}`,
              },
              {
                label: "tradingConditions_min_pricefluctuation",
                order: 100,
                valueFunc: (e) => `${e.tickSize}`,
              },
              {
                label: "tradingConditions_one_lot_size",
                order: 200,
                valueFunc: (e) => `${e.lotSize} ${e.measure}`,
              },
              {
                label: "tradingConditions_one_tick_value",
                order: 150,
                valueFunc: (e) => `${e.tickValue} ${e.marginCurrency}`,
              },
              {
                label: "tradingConditions_minimum_contract_size",
                order: 500,
                valueFunc: (e) => `${e.minimumVolume || 0} ${e.measure}`,
              },
              {
                label:
                  "tradingConditions_minimum_step_to_increasing_contract_size",
                order: 600,
                valueFunc: (e) => `${e.volumeStep || 0} lot`,
              },
              {
                label: "tradingConditions_minimum_margin_requirements",
                order: 700,
                value: "0",
              },
            ],
          },
          [r.a.Shares]: m,
          [r.a.SpotEnergies]: {
            tradingConditions: [
              {
                label: "tradingConditions_min_pricefluctuation",
                order: 1,
                valueFunc: (e) => `${e.tickSize}`,
              },
              {
                label: "tradingConditions_one_lot_size",
                order: 2,
                valueFunc: (e) => `${e.lotSize} ${e.measure}`,
              },
              {
                label: "tradingConditions_one_tick_value",
                order: 3,
                valueFunc: (e) => `${e.tickValue} ${e.marginCurrency}`,
              },
              {
                label: "tradingConditions_minimum_contract_size",
                order: 4,
                valueFunc: (e) => `${e.minimumVolume} ${e.measure}`,
              },
              {
                label:
                  "tradingConditions_minimum_step_to_increasing_contract_size",
                order: 5,
                valueFunc: (e) => `${e.volumeStep} ${e.measure}`,
              },
              {
                label: "tradingConditions_used_margin_per_one_lot",
                order: 8,
                value: "1.00%",
              },
              {
                label: "tradingConditions_minimum_margin_requirements",
                order: 9,
                value: "0",
              },
              {
                label: "tradingConditions_limit_and_stop_level",
                order: 10,
                valueFunc: (e) => `${e.stopslevel || 0}`,
              },
            ],
          },
          [r.a.Indices]: {
            tradingConditions: [
              {
                label: "tradingConditions_minimum_contract_size",
                order: 3,
                valueFunc: (e) => `${e.minimumVolume} Index`,
              },
              {
                label:
                  "tradingConditions_minimum_step_to_increasing_contract_size",
                order: 4,
                valueFunc: (e) => `${e.volumeStep} Index`,
              },
              {
                label: "tradingConditions_minimum_margin_requirements",
                order: 6,
                value: "0",
              },
              {
                label: "tradingConditions_limit_and_stop_level",
                order: 9,
                valueFunc: (e) => `${e.stopslevel || 0}`,
              },
              {
                label: "tradingConditions_one_tick_value",
                order: 5,
                valueFunc: (e) => `${e.lotSize} ${e.marginCurrency}`,
              },
            ],
          },
        };
      class u {
        constructor(e) {
          (this.type = e), (this.config = this.getInstrumentConfig(e));
        }
        createInstrument(e) {
          const t = this.getPlatforms(e);
          return {
            type: this.type,
            name: e[0].name,
            platforms: t,
            description: e[0].description,
            commonConditions: [],
            calendar: this.getCalendar(e[0].name),
            group: e[0].group,
          };
        }
        getCalendar(e) {
          return (this.config.calendars || []).find(
            ({ name: t }) =>
              Object(l.b)(t) === Object(l.b)(Object(l.a)(e).toLowerCase())
          );
        }
        getInstrumentConfig(e) {
          const t = p[e];
          return t || console.error(`No config for type: ${e}`), t;
        }
        getPlatforms(e) {
          const t = new Map();
          return (
            e.forEach((e) => {
              const a = this.getPlatformType(e),
                o = t.get(a) || this.defaultPlatform(a),
                r = this.getExecution(e);
              o.executions.push(r);
              const n = this.getPlatformRestrictions(o.name);
              t.set(
                a,
                Object.assign(Object.assign({}, o), { restrictions: n })
              );
            }),
            Array.from(t.values())
          );
        }
        defaultPlatform(e) {
          return { name: e, executions: [], tradingConditions: [] };
        }
        getExecution(e) {
          const t = e.execution.toLowerCase();
          return {
            name: `tradingConditions_${t}_execution`,
            thresholds: [
              {
                id: "tradingConditions_minimum",
                value: e.minimumSpread ? e.minimumSpread.toString() : "",
              },
              {
                id: "tradingConditions_average",
                value: e.averageSpread ? e.averageSpread.toString() : "",
              },
            ],
            restrictions:
              "instant" === t ? { disabledLanguages: ["zh"] } : void 0,
            tradingConditions: this.getTradingConditions(e),
            marketHours: e.marketHours || [],
          };
        }
        getTradingConditions(e) {
          return [
            ...this.config.tradingConditions
              .reduce((t, a) => {
                const o = a.label || a.labelFunc(e);
                if (!t.has(o)) {
                  const r = this.getPlatformType(e),
                    n = !a.platforms || a.platforms.includes(r),
                    i =
                      !a.executions ||
                      a.executions.includes(e.execution.toLowerCase()),
                    l = !a.instruments || a.instruments.includes(e.name);
                  if (n && i && l) {
                    const r = {
                      id: o,
                      value: a.value || a.valueFunc(e),
                      order: a.order,
                      restrictions: a.restrictions,
                    };
                    t.set(o, r);
                  }
                }
                return t;
              }, new Map())
              .values(),
          ];
        }
        getPlatformType(e) {
          switch (e.serverId) {
            case i.a.RawPlus:
              return n.a.mt4_raw_plus;
            default:
              return e.platformType.toLowerCase();
          }
        }
        getPlatformRestrictions(e) {
          switch (e) {
            case n.a.mt4_fix:
              return { disabledLanguages: ["zh"] };
            case n.a.mt4_raw_plus:
              return o.d;
            default:
              return;
          }
        }
      }
    },
    "0NL4": function (e, t, a) {
      "use strict";
      var o;
      a.d(t, "a", function () {
        return o;
      }),
        (function (e) {
          (e[(e.MT4 = 47)] = "MT4"), (e[(e.RawPlus = 48)] = "RawPlus");
        })(o || (o = {}));
    },
    "0gde": function (e, t, a) {
      "use strict";
      var o;
      a.d(t, "a", function () {
        return o;
      }),
        (function (e) {
          (e.Ios = "Ios"),
            (e.Android = "Android"),
            (e.Mac = "Mac"),
            (e.Windows = "Windows");
        })(o || (o = {}));
    },
    "3C1k": function (e, t, a) {
      "use strict";
      a.d(t, "b", function () {
        return i;
      }),
        a.d(t, "a", function () {
          return s;
        }),
        a.d(t, "c", function () {
          return m;
        }),
        a.d(t, "d", function () {
          return d.b;
        }),
        a.d(t, "e", function () {
          return p;
        }),
        a.d(t, "f", function () {
          return f;
        }),
        a.d(t, "g", function () {
          return b;
        });
      a("F2wG");
      var o,
        r,
        n = a("dzcp");
      !(function (e) {
        (e[(e.Essential = 0)] = "Essential"),
          (e[(e.Functional = 1)] = "Functional"),
          (e[(e.Marketing = 2)] = "Marketing");
      })(o || (o = {})),
        (function (e) {
          (e.HTTPCookie = "HTTP Cookie"),
            (e.HTMLLocalStorage = "HTML Local Storage"),
            (e.PixelTracker = "Pixel Tracker");
        })(r || (r = {}));
      const i = [
        {
          category: o.Essential,
          title: "cookies_popup_settingsTab_essentials_title",
          blockTitle:
            "page_cookiePreferences_essentials_sectionHero_blockTitle",
          blockDescription: "cookies_essentials_description",
          isVisible: !1,
          cookies: [
            {
              name: "clientId",
              provider:
                "<a href='https://www.fxpro.com/' target='_blank'>fxpro.com</a>",
              expirationTime: "1 year",
              trackerType: r.HTTPCookie,
              description: "cookie_descr_clientId",
            },
            {
              name: "cookie_consent",
              provider:
                "<a href='https://www.fxpro.com/' target='_blank'>fxpro.com</a>",
              expirationTime: "1 year",
              trackerType: r.HTTPCookie,
              description: "cookie_descr_CookieConsent",
            },
            {
              name: "cookies.js",
              provider:
                "<a href='https://www.fxpro.com/' target='_blank'>fxpro.com</a>",
              expirationTime: "Session",
              trackerType: r.HTTPCookie,
              description: "cookie_descr_cookiesJs",
            },
            {
              name: "incap_ses_#",
              provider:
                "<a href='https://www.fxpro.com/' target='_blank'>fxpro.com</a>",
              expirationTime: "Session",
              trackerType: r.HTTPCookie,
              description: "cookie_descr_preservesUsersStates",
            },
            {
              name: "visid_incap_#",
              provider:
                "<a href='https://www.fxpro.com/' target='_blank'>fxpro.com</a>",
              expirationTime: "1 year",
              trackerType: r.HTTPCookie,
              description: "cookie_descr_preservesUsersStates",
            },
            {
              name: "rc::a",
              provider:
                "<a href='https://www.google.com/' target='_blank'>google.com</a>",
              expirationTime: "Persistent",
              trackerType: r.HTMLLocalStorage,
              description: "cookie_descr_rca",
            },
            {
              name: "rc::b",
              provider:
                "<a href='https://www.google.com/' target='_blank'>google.com</a>",
              expirationTime: "Session",
              trackerType: r.HTMLLocalStorage,
              description: "cookie_descr_distinguishHumansBots",
            },
            {
              name: "rc::c",
              provider:
                "<a href='https://www.google.com/' target='_blank'>google.com</a>",
              expirationTime: "Session",
              trackerType: r.HTMLLocalStorage,
              description: "cookie_descr_distinguishHumansBots",
            },
            {
              name: "rc::d-#",
              provider:
                "<a href='https://www.google.com/' target='_blank'>google.com</a>",
              expirationTime: "Persistent",
              trackerType: r.HTMLLocalStorage,
              description: "cookie_descr_distinguishHumansBots",
            },
            {
              name: "ARRAffinity",
              provider:
                "<a href='https://www.fxstreet.com/' target='_blank'>https://www.fxstreet.com/</a>",
              expirationTime: "1 day",
              trackerType: r.HTTPCookie,
              description: "cookie_descr_ARRAffinity",
            },
            {
              name: "ARRAffinitySameSite",
              provider:
                "<a href='https://www.fxstreet.com/' target='_blank'>https://www.fxstreet.com/</a>",
              expirationTime: "Session",
              trackerType: r.HTTPCookie,
              description: "cookie_descr_ARRAffinity",
            },
            {
              name: "authByDomain",
              provider:
                "<a href='http://widgets-m.techsubservices.com/site/login' target='_blank'>widgets-m.techsubservices.com</a>",
              expirationTime: "Persistent",
              trackerType: r.HTMLLocalStorage,
            },
            {
              name: "ec_time_zone_dst",
              provider:
                "<a href='http://widgets-m.techsubservices.com/site/login' target='_blank'>widgets-m.techsubservices.com</a>",
              expirationTime: "1 year",
              trackerType: r.HTTPCookie,
              description: "cookie_descr_economicCalendar",
            },
            {
              name: "ec_time_zone_offset",
              provider:
                "<a href='http://widgets-m.techsubservices.com/site/login' target='_blank'>widgets-m.techsubservices.com</a>",
              expirationTime: "1 year",
              trackerType: r.HTTPCookie,
              description: "cookie_descr_economicCalendar",
            },
            {
              name: "nlbi_1387458",
              provider: "<a href='https://www.fxpro.com/'>fxpro.com</a>",
              expirationTime: "Session",
              trackerType: r.HTTPCookie,
              description: "cookie_descr_IncapsulaDDoS",
            },
            {
              name: "nlbi_1608034",
              provider: "<a href='https://www.fxpro.com/'>fxpro.com</a>",
              expirationTime: "Session",
              trackerType: r.HTTPCookie,
              description: "cookie_descr_IncapsulaDDoS",
            },
            {
              name: "nlbi_2300647",
              provider: "<a href='https://www.fxpro.com/'>fxpro.com</a>",
              expirationTime: "Session",
              trackerType: r.HTTPCookie,
              description: "cookie_descr_IncapsulaDDoS",
            },
            {
              name: "Session_id",
              provider: "<a href='https://www.yandex.ru/'>yandex.ru</a>",
              expirationTime: "20 years",
              trackerType: r.HTTPCookie,
              description: "cookie_descr_yandexMetrics",
            },
            {
              name: "visid_incap_1387458",
              provider: "<a href='https://www.fxpro.com/'>fxpro.com</a>",
              expirationTime: "6 months",
              trackerType: r.HTTPCookie,
              description: "cookie_descr_visid_incap",
            },
            {
              name: "visid_incap_1608034",
              provider: "<a href='https://www.fxpro.com/'>fxpro.com</a>",
              expirationTime: "1 year",
              trackerType: r.HTTPCookie,
              description: "cookie_descr_visid_incap",
            },
          ],
        },
        {
          category: o.Functional,
          title: "cookies_popup_settingsTab_functional_title",
          blockTitle:
            "page_cookiePreferences_functional_sectionHero_blockTitle",
          blockDescription: "cookies_functional_description",
          isVisible: !1,
          cookies: [
            {
              name: "education-chapters-stats",
              provider: "<a href='https://www.fxpro.com/'>fxpro.com</a>",
              expirationTime: "Persistent",
              trackerType: r.HTMLLocalStorage,
              description: "cookie_descr_educationChaptersStats",
            },
            {
              name: n.a.campaign,
              provider: "<a href='https://www.fxpro.com/'>fxpro.com</a>",
              expirationTime: "3 months",
              trackerType: r.HTTPCookie,
              description: "cookie_descr_fx_campaign",
            },
            {
              name: n.a.warningAccepted,
              provider: "<a href='https://www.fxpro.com/'>fxpro.com</a>",
              expirationTime: "1 year",
              trackerType: r.HTTPCookie,
              description: "cookie_descr_fx_cookie_warning_accepted",
            },
            {
              name: n.a.getStartedPopupWasClosed,
              provider: "<a href='https://www.fxpro.com/'>fxpro.com</a>",
              expirationTime: "1 day",
              trackerType: r.HTTPCookie,
              description: "cookie_descr_fx_get_started_shown",
            },
            {
              name: n.a.notificationPopupClosedNews,
              provider: "<a href='https://www.fxpro.com/'>fxpro.com</a>",
              expirationTime: "30 days",
              trackerType: r.HTTPCookie,
              description: "cookie_descr_fx_notification_closed",
            },
            {
              name: n.a.signInReminder,
              provider: "<a href='https://www.fxpro.com/'>fxpro.com</a>",
              expirationTime: "1 day",
              trackerType: r.HTTPCookie,
              description: "cookie_descr_fx_sign_in_reminder",
            },
            {
              name: n.a.userRegulator,
              provider: "<a href='https://www.fxpro.com/'>fxpro.com</a>",
              expirationTime: "3 months",
              trackerType: r.HTTPCookie,
              description: "cookie_descr_fx_user_regulator",
            },
            {
              name: "fx_section_energy_items_content",
              provider: "<a href='https://www.fxpro.com/'>fxpro.com</a>",
              expirationTime: "Session",
              trackerType: r.HTTPCookie,
              description: "cookie_descr_fx_section_energy_items_content",
            },
            {
              name: "fx_section_fscm_banners_content",
              provider: "<a href='https://www.fxpro.com/'>fxpro.com</a>",
              expirationTime: "Session",
              trackerType: r.HTTPCookie,
              description: "cookie_descr_fx_section_fscm_banners_content",
            },
            {
              name: n.a.noSolicitationAcceptanceChangeToGM,
              provider: "<a href='https://www.fxpro.com/'>fxpro.com</a>",
              expirationTime: "30 days",
              trackerType: r.HTTPCookie,
              description:
                "cookie_descr_no_solicitation_acceptance _change_to_gm",
            },
          ],
        },
        {
          category: o.Marketing,
          title: "cookies_popup_settingsTab_marketing_title",
          blockTitle: "page_cookiePreferences_marketing_sectionHero_blockTitle",
          blockDescription: "cookies_marketing_description",
          isVisible: !1,
          cookies: [
            {
              name: "__vw_tab_guid",
              provider: "<a href='https://www.fxpro.com/'>fxpro.com</a>",
              expirationTime: "Session",
              trackerType: r.HTMLLocalStorage,
              description: "cookie_descr_websiteBehaviour",
            },
            {
              name: "_dc_gtm_UA-#",
              provider: "<a href='https://www.fxpro.com/'>fxpro.com</a>",
              expirationTime: "1 day",
              trackerType: r.HTTPCookie,
              description: "cookie_descr_dc_gtm_UA",
            },
            {
              name: "_ga",
              provider: "<a href='https://www.fxpro.com/'>fxpro.com</a>",
              expirationTime: "2 years",
              trackerType: r.HTTPCookie,
              description: "cookie_descr_uniqueID",
            },
            {
              name: "_gid",
              provider: "<a href='https://www.fxpro.com/'>fxpro.com</a>",
              expirationTime: "1 day",
              trackerType: r.HTTPCookie,
              description: "cookie_descr_uniqueID",
            },
            {
              name: "_omappvp",
              provider: "<a href='https://www.fxpro.com/'>fxpro.com</a>",
              expirationTime: "11 years",
              trackerType: r.HTTPCookie,
              description: "cookie_descr_omappvp",
            },
            {
              name: "_ym_d",
              provider: "<a href='https://www.fxpro.com/'>fxpro.com</a>",
              expirationTime: "1 year",
              trackerType: r.HTTPCookie,
              description: "cookie_descr_ym_d",
            },
            {
              name: "_ym_isad",
              provider: "<a href='https://www.fxpro.com/'>fxpro.com</a>",
              expirationTime: "1 day",
              trackerType: r.HTTPCookie,
              description: "cookie_descr_ym_isad",
            },
            {
              name: "_ym_retryReqs",
              provider: "<a href='https://www.fxpro.com/'>fxpro.com</a>",
              expirationTime: "Persistent",
              trackerType: r.HTMLLocalStorage,
              description: "cookie_descr_ym_retryReqs",
            },
            {
              name: "_ym_uid",
              provider: "<a href='https://www.fxpro.com/'>fxpro.com</a>",
              expirationTime: "Persistent",
              trackerType: r.HTTPCookie,
              description: "cookie_descr_ym_uid",
            },
            {
              name: "_ym_uid",
              provider: "<a href='https://www.fxpro.com/'>fxpro.com</a>",
              expirationTime: "1 year",
              trackerType: r.HTMLLocalStorage,
              description: "cookie_descr2_ym_uid",
            },
            {
              name: "omVisits",
              provider: "<a href='https://www.fxpro.com/'>fxpro.com</a>",
              expirationTime: "Persistent",
              trackerType: r.HTMLLocalStorage,
              description: "cookie_descr_omVisits",
            },
            {
              name: "omVisitsFirst",
              provider: "<a href='https://www.fxpro.com/'>fxpro.com</a>",
              expirationTime: "Persistent",
              trackerType: r.HTMLLocalStorage,
              description: "cookie_descr_omVisitsFirst",
            },
            {
              name: "collect",
              provider:
                "<a href='https://marketingplatform.google.com/about/analytics/' target='_blank'>google-analytics.com</a>",
              expirationTime: "Session",
              trackerType: r.PixelTracker,
              description: "cookie_descr_collect",
            },
            {
              name: "yandexuid",
              provider:
                "<a href='https://yandex.ru/' target='_blank'>yandex.ru</a>",
              expirationTime: "1 year",
              trackerType: r.HTTPCookie,
              description: "cookie_descr_websiteBehaviour",
            },
            {
              name: "ymex",
              provider:
                "<a href='https://yandex.ru/' target='_blank'>yandex.ru</a>",
              expirationTime: "1 year",
              trackerType: r.HTTPCookie,
              description: "cookie_descr_websiteBehaviour",
            },
            {
              name: "MUID",
              provider:
                "<a href='https://bing.com' target='_blank'>bing.com</a>",
              expirationTime: "1 year",
              trackerType: r.HTTPCookie,
              description: "cookie_descr_MUID",
            },
            {
              name: "uid",
              provider:
                "<a href='https://criteo.com' target='_blank'>criteo.com</a>",
              expirationTime: "1 year",
              trackerType: r.HTTPCookie,
              description: "cookie_descr_uid",
            },
            {
              name: "IDE",
              provider:
                "<a href='https://doubleclick.net' target='_blank'>doubleclick.net</a>",
              expirationTime: "1 year",
              trackerType: r.HTTPCookie,
              description: "cookie_descr_IDE",
            },
            {
              name: "test_cookie",
              provider:
                "<a href='https://doubleclick.net' target='_blank'>doubleclick.net</a>",
              expirationTime: "1 day",
              trackerType: r.HTTPCookie,
              description: "cookie_descr_test_cookie",
            },
            {
              name: "fr",
              provider:
                "<a href='https://facebook.com' target='_blank'>facebook.com</a>",
              expirationTime: "3 months",
              trackerType: r.HTTPCookie,
              description: "cookie_descr_Facebook",
            },
            {
              name: "tr",
              provider:
                "<a href='https://facebook.com' target='_blank'>facebook.com</a>",
              expirationTime: "Session",
              trackerType: r.PixelTracker,
              description: "cookie_descr_Facebook",
            },
            {
              name: "___utmvc",
              provider: "<a href='https://www.fxpro.com/'>fxpro.com</a>",
              expirationTime: "1 day",
              trackerType: r.HTTPCookie,
              description: "cookie_descr_userBehaviour",
            },
            {
              name: "_fbp",
              provider: "<a href='https://www.fxpro.com/'>fxpro.com</a>",
              expirationTime: "3 months",
              trackerType: r.HTTPCookie,
              description: "cookie_descr_Facebook",
            },
            {
              name: "_ga_JT1ZR36N0N",
              provider: "<a href='https://www.fxpro.com/'>fxpro.com</a>",
              expirationTime: "2 years",
              trackerType: r.HTTPCookie,
              description: "cookie_descr_uniqueID",
            },
            {
              name: "_gcl_au",
              provider: "<a href='https://www.fxpro.com/'>fxpro.com</a>",
              expirationTime: "3 months",
              trackerType: r.HTTPCookie,
              description: "cookie_descr_gcl_au",
            },
            {
              name: "_omappvs",
              provider: "<a href='https://www.fxpro.com/'>fxpro.com</a>",
              expirationTime: "1 day",
              trackerType: r.HTTPCookie,
              description: "cookie_descr_omappvs",
            },
            {
              name: "_uetsid",
              provider: "<a href='https://www.fxpro.com/'>fxpro.com</a>",
              expirationTime: "1 day",
              trackerType: r.HTTPCookie,
              description: "cookie_descr_uetsid",
            },
            {
              name: "_uetsid",
              provider: "<a href='https://www.fxpro.com/'>fxpro.com</a>",
              expirationTime: "Persistent",
              trackerType: r.HTMLLocalStorage,
              description: "cookie_descr_trackVisitors",
            },
            {
              name: "_uetsid_exp",
              provider: "<a href='https://www.fxpro.com/'>fxpro.com</a>",
              expirationTime: "Persistent",
              trackerType: r.HTMLLocalStorage,
              description: "cookie_descr_expiry-date",
            },
            {
              name: "_uetvid",
              provider: "<a href='https://www.fxpro.com/'>fxpro.com</a>",
              expirationTime: "Persistent",
              trackerType: r.HTMLLocalStorage,
              description: "cookie_descr_trackVisitors",
            },
            {
              name: "_uetvid",
              provider: "<a href='https://www.fxpro.com/'>fxpro.com</a>",
              expirationTime: "16 days",
              trackerType: r.HTTPCookie,
              description: "cookie_descr_trackVisitors",
            },
            {
              name: "_uetvid_exp",
              provider: "<a href='https://www.fxpro.com/'>fxpro.com</a>",
              expirationTime: "Persistent",
              trackerType: r.HTMLLocalStorage,
              description: "cookie_descr_expiry-date",
            },
            {
              name: "_ym#_lastHit",
              provider:
                "<a href='https://yandex.ru/' target='_blank'>yandex.ru</a>",
              expirationTime: "Persistent",
              trackerType: r.HTMLLocalStorage,
              description: "cookie_descr_YandexMetricsRate",
            },
            {
              name: "_ym#_lsid",
              provider:
                "<a href='https://yandex.ru/' target='_blank'>yandex.ru</a>",
              expirationTime: "Persistent",
              trackerType: r.HTMLLocalStorage,
              description: "cookie_descr_YandexMetricsUsers",
            },
            {
              name: "_ym#_reqNum",
              provider:
                "<a href='https://yandex.ru/' target='_blank'>yandex.ru</a>",
              expirationTime: "Persistent",
              trackerType: r.HTMLLocalStorage,
              description: "cookie_descr_YandexMetricsTag",
            },
            {
              name: "_ym_metrika_enabled",
              provider:
                "<a href='https://yandex.ru/' target='_blank'>yandex.ru</a>",
              expirationTime: "1 day",
              trackerType: r.HTTPCookie,
              description: "cookie_descr_ym_metrika_enabled",
            },
            {
              name: "_ym_metrika_enabled _20687113",
              provider:
                "<a href='https://yandex.ru/' target='_blank'>yandex.ru</a>",
              expirationTime: "1 day",
              trackerType: r.HTTPCookie,
              description: "cookie_descr_YandexMetricsInstalled",
            },
            {
              name: "_ym_metrika_enabled _3923710",
              provider:
                "<a href='https://yandex.ru/' target='_blank'>yandex.ru</a>",
              expirationTime: "1 day",
              trackerType: r.HTTPCookie,
              description: "cookie_descr_YandexMetricsInstalled",
            },
            {
              name: "_ym_visorc_20687113",
              provider:
                "<a href='https://yandex.ru/' target='_blank'>yandex.ru</a>",
              expirationTime: "1 day",
              trackerType: r.HTTPCookie,
              description: "cookie_descr_YandexMetricsReplay",
            },
            {
              name: "_ym_visorc_3923710",
              provider:
                "<a href='https://yandex.ru/' target='_blank'>yandex.ru</a>",
              expirationTime: "1 day",
              trackerType: r.HTTPCookie,
              description: "cookie_descr_YandexMetricsReplay",
            },
            {
              name: "AF_BANNERS_SESSION_ID",
              provider: "<a href='https://www.fxpro.com/'>fxpro.com</a>",
              expirationTime: "1 day",
              trackerType: r.HTTPCookie,
            },
            {
              name: "criteo_write_test",
              provider: "<a href='https://www.fxpro.com/'>fxpro.com</a>",
              expirationTime: "1 day",
              trackerType: r.HTTPCookie,
              description: "cookie_descr_criteo_write_test",
            },
            {
              name: "cto_tld_test",
              provider: "<a href='https://www.fxpro.com/'>fxpro.com</a>",
              expirationTime: "1 day",
              trackerType: r.HTTPCookie,
              description: "cookie_descr_cto_tld_test",
            },
            {
              name: "metrika_enabled",
              provider: "<a href='https://www.fxpro.com/'>fxpro.com</a>",
              expirationTime: "1 day",
              trackerType: r.HTTPCookie,
              description: "cookie_descr_trackVisitors",
            },
            {
              name: "nlbi_#",
              provider: "<a href='https://www.fxpro.com/'>fxpro.com</a>",
              expirationTime: "Session",
              trackerType: r.HTTPCookie,
              description: "cookie_descr_nlbi",
            },
            {
              name: "ads/ga-audiences",
              provider:
                "<a href='http://google.com' target='_blank'>google.com</a>",
              expirationTime: "Session",
              trackerType: r.PixelTracker,
              description: "cookie_descr_googleAdWords",
            },
            {
              name: "NID",
              provider:
                "<a href='http://google.com' target='_blank'>google.com</a>",
              expirationTime: "6 months",
              trackerType: r.HTTPCookie,
              description: "cookie_descr_NID",
            },
            {
              name: "pagead/1p-user-list/#",
              provider:
                "<a href='http://google.com' target='_blank'>google.com</a>",
              expirationTime: "Session",
              trackerType: r.PixelTracker,
              description: "cookie_descr_1pUserList",
            },
            {
              name: "ouid",
              provider:
                "<a href='http://google-analytics.bi.owox.com/' target='_blank'>google-analytics.bi.owox.com</a>",
              expirationTime: "2 years",
              trackerType: r.HTTPCookie,
              description: "cookie_descr_ouid",
            },
            {
              name: "UA-18178736-1",
              provider:
                "<a href='http://google-analytics.bi.owox.com/' target='_blank'>google-analytics.bi.owox.com</a>",
              expirationTime: "Session",
              trackerType: r.PixelTracker,
            },
            {
              name: "i",
              provider:
                "<a href='https://yandex.ru/' target='_blank'>yandex.ru</a>",
              expirationTime: "10 years",
              trackerType: r.HTTPCookie,
            },
            {
              name: "webvisor/3923710",
              provider:
                "<a href='https://yandex.ru/' target='_blank'>yandex.ru</a>",
              expirationTime: "Session",
              trackerType: r.PixelTracker,
              description: "cookie_descr_YandexMetricsReplay",
            },
            {
              name: "yabs-sid",
              provider:
                "<a href='https://yandex.ru/' target='_blank'>yandex.ru</a>",
              expirationTime: "Session",
              trackerType: r.HTTPCookie,
              description: "cookie_descr_websiteBehaviour",
            },
            {
              name: "yuidss",
              provider:
                "<a href='https://yandex.ru/' target='_blank'>yandex.ru</a>",
              expirationTime: "1 year",
              trackerType: r.HTTPCookie,
              description: "cookie_descr_userBehaviour",
            },
            {
              name: "__adroll",
              provider:
                "<a href='https://www.adroll.com/' target='_blank'>adroll.com</a>",
              expirationTime: "1 year",
              trackerType: r.HTTPCookie,
              description: "cookie_descr_visitsDevices",
            },
            {
              name: "__adroll_fpc",
              provider: "<a href='https://www.fxpro.com/'>www.fxpro.com</a>",
              expirationTime: "1 year",
              trackerType: r.HTTPCookie,
              description: "cookie_descr_visitsDevices",
            },
            {
              name: "__adroll_mini_consent_banner",
              provider: "<a href='https://www.fxpro.com/'>www.fxpro.com</a>",
              expirationTime: "4 year",
              trackerType: r.HTTPCookie,
              description: "cookie_descr_visitsDevices",
            },
            {
              name: "__adroll_shared",
              provider:
                "<a href='https://www.adroll.com/' target='_blank'>adroll.com</a>",
              expirationTime: "1 year",
              trackerType: r.HTTPCookie,
              description: "cookie_descr_adroll_shared",
            },
            {
              name: "cto_bundle",
              provider: "<a href='https://www.fxpro.com/'>www.fxpro.com</a>",
              expirationTime: "3 months",
              trackerType: r.HTTPCookie,
              description: "cookie_descr_cto_bundle",
            },
            {
              name: "gaconnectorId",
              provider: "<a href='https://www.fxpro.com/'>www.fxpro.com</a>",
              expirationTime: "6 months",
              trackerType: r.HTTPCookie,
              description: "cookie_descr_gaconnectorId",
            },
            {
              name: "gdpr",
              provider:
                "<a href='https://yandex.ru/' target='_blank'>yandex.ru</a>",
              expirationTime: "1 year",
              trackerType: r.HTTPCookie,
              description: "cookie_descr_metricaTracking",
            },
            {
              name: "mda",
              provider: "<a href='https://www.fxpro.com/'>www.fxpro.com</a>",
              expirationTime: "2 year",
              trackerType: r.HTTPCookie,
              description: "cookie_descr_mda",
            },
            {
              name: "om-gp2ndcaetjdha3iirxub",
              provider: "<a href='https://www.fxpro.com/'>www.fxpro.com</a>",
              expirationTime: "1 month",
              trackerType: r.HTTPCookie,
              description: "cookie_descr_PopUp",
            },
            {
              name: "omSeen-gp2ndcaetjdha3iirxub",
              provider: "<a href='https://www.fxpro.com/'>www.fxpro.com</a>",
              expirationTime: "1 month",
              trackerType: r.HTTPCookie,
              description: "cookie_descr_PopUp",
            },
            {
              name: "sessionid2",
              provider:
                "<a href='https://yandex.ru/' target='_blank'>yandex.ru</a>",
              expirationTime: "20 years",
              trackerType: r.HTTPCookie,
              description: "cookie_descr_yandexMetrics",
            },
            {
              name: "visid_incap_2300647",
              provider: "<a href='https://www.fxpro.com/'>www.fxpro.com</a>",
              expirationTime: "1 year",
              trackerType: r.HTTPCookie,
              description: "cookie_descr_IncapsulaDDoS",
            },
            {
              name: "visid_incap_709426",
              provider: "<a href='https://www.fxpro.com/'>www.fxpro.com</a>",
              expirationTime: "1 year",
              trackerType: r.HTTPCookie,
              description: "cookie_descr_IncapsulaDDoS",
            },
            {
              name: "yandex_login",
              provider:
                "<a href='https://yandex.ru/' target='_blank'>yandex.ru</a>",
              expirationTime: "20 year",
              trackerType: r.HTTPCookie,
              description: "cookie_descr_yandex_login",
            },
            {
              name: "ymex",
              provider:
                "<a href='https://yandex.ru/' target='_blank'>yandex.ru</a>",
              expirationTime: "1 year",
              trackerType: r.HTTPCookie,
              description: "cookie_descr_websiteBehaviour",
            },
            {
              name: "yp",
              provider:
                "<a href='https://yandex.ru/' target='_blank'>yandex.ru</a>",
              expirationTime: "20 year",
              trackerType: r.HTTPCookie,
              description: "cookie_descr_yandex_login",
            },
            {
              name: "ys",
              provider:
                "<a href='https://yandex.ru/' target='_blank'>yandex.ru</a>",
              expirationTime: "Session",
              trackerType: r.HTTPCookie,
              description: "cookie_descr_yandexMetrics",
            },
            {
              name: "CONSENT",
              provider:
                "<a href='http://google.com' target='_blank'>google.com</a>",
              expirationTime: "16 years",
              trackerType: r.HTTPCookie,
            },
            {
              name: "1P_JAR",
              provider:
                "<a href='http://google.com' target='_blank'>google.com</a>",
              expirationTime: "30 days",
              trackerType: r.HTTPCookie,
            },
            {
              name: "__Secure-3PSIDCC",
              provider:
                "<a href='http://google.com' target='_blank'>google.com</a>",
              expirationTime: "8.5 months",
              trackerType: r.HTTPCookie,
            },
            {
              name: "__Secure-3PSID",
              provider:
                "<a href='http://google.com' target='_blank'>google.com</a>",
              expirationTime: "1.6 years",
              trackerType: r.HTTPCookie,
            },
            {
              name: "__Secure-3PAPISID",
              provider:
                "<a href='http://google.com' target='_blank'>google.com</a>",
              expirationTime: "1.6 years",
              trackerType: r.HTTPCookie,
            },
            {
              name: "_GRECAPTCHA",
              provider:
                "<a href='http://google.com' target='_blank'>google.com</a>",
              expirationTime: "6 months",
              trackerType: r.HTTPCookie,
            },
            {
              name: "SSID",
              provider:
                "<a href='http://google.com' target='_blank'>google.com</a>",
              expirationTime: "1.6 years",
              trackerType: r.HTTPCookie,
            },
            {
              name: "SIDCC",
              provider:
                "<a href='http://google.com' target='_blank'>google.com</a>",
              expirationTime: "8.5 months",
              trackerType: r.HTTPCookie,
            },
            {
              name: "SID",
              provider:
                "<a href='http://google.com' target='_blank'>google.com</a>",
              expirationTime: "1.6 years",
              trackerType: r.HTTPCookie,
            },
            {
              name: "SEARCH_SAMESITE",
              provider:
                "<a href='http://google.com' target='_blank'>google.com</a>",
              expirationTime: "1.5 months",
              trackerType: r.HTTPCookie,
            },
            {
              name: "SAPISID",
              provider:
                "<a href='http://google.com' target='_blank'>google.com</a>",
              expirationTime: "1.6 years",
              trackerType: r.HTTPCookie,
            },
            {
              name: "HSID",
              provider:
                "<a href='http://google.com' target='_blank'>google.com</a>",
              expirationTime: "1.6 years",
              trackerType: r.HTTPCookie,
            },
            {
              name: "DV",
              provider:
                "<a href='http://www.google.com' target='_blank'>www.google.com</a>",
              expirationTime: "1 day",
              trackerType: r.HTTPCookie,
            },
            {
              name: "APISID",
              provider:
                "<a href='http://google.com' target='_blank'>google.com</a>",
              expirationTime: "1.6 years",
              trackerType: r.HTTPCookie,
            },
            {
              name: "ANID",
              provider:
                "<a href='http://google.com' target='_blank'>google.com</a>",
              expirationTime: "8.5 months",
              trackerType: r.HTTPCookie,
            },
          ],
        },
      ];
      a("c5vA");
      var l = a("fXoL");
      const s = new l.InjectionToken("userCountry");
      var c = a("O6tY");
      a("P5aQ");
      const m = new l.InjectionToken("directLinks");
      a("ll7P"), a("iAqX");
      var d = a("vj7Q");
      a("Lbvf"), a("HdJQ"), a("KO3W"), a("A+jk");
      const p = new l.InjectionToken("userJurisdiction");
      a("3ixp");
      var u;
      a("RdTv");
      !(function (e) {
        (e.Popular = "LandingPage"),
          (e.Forex = "ForexAll"),
          (e.Futures = "FuturesAll"),
          (e.SpotIndices = "SpotIndices"),
          (e.Shares = "SharesAll"),
          (e.SpotMetals = "Metals"),
          (e.SpotEnergies = "EnergySpot"),
          (e.Cryptocurrencies = "CryptocurrenciesAll");
      })(u || (u = {}));
      u.Popular,
        c.a,
        c.a,
        u.Forex,
        u.Cryptocurrencies,
        c.a,
        u.SpotMetals,
        u.SpotIndices,
        u.Futures,
        u.SpotEnergies,
        d.d,
        u.SpotEnergies,
        u.Shares;
      a("4A1e"), a("Vp7h"), a("X8WZ"), a("Xa/i");
      a("CUJp");
      const f = new l.InjectionToken("userExperiments"),
        b = new l.InjectionToken("webComponentsScriptsPaths");
    },
    "3ixp": function (e, t, a) {
      "use strict";
      a.d(t, "a", function () {
        return o;
      }),
        a.d(t, "b", function () {
          return n;
        });
      var o,
        r = a("ll7P");
      !(function (e) {
        (e.European = "European"), (e.Global = "Global");
      })(o || (o = {}));
      const n = [
        {
          countryFlagCode: "gb",
          shortName: "en",
          fullName: "English",
          secondaryName: "Global",
          sortOrder: 10,
          domains: [
            "www.fxpro.com",
            "www.fxpro-trading.eu",
            "www.fxpro-start.eu",
            "www.fxpro.promo",
            "www.fxpro.uk",
          ],
          culture: "en",
          type: o.European,
        },
        {
          countryFlagCode: "gb",
          shortName: "en",
          fullName: "English",
          secondaryName: "Global",
          sortOrder: 10,
          domains: ["www.fxpro.com"],
          culture: "en",
          type: o.Global,
        },
        {
          countryFlagCode: "pl",
          shortName: "pl",
          fullName: "Polski",
          secondaryName: "Polish",
          sortOrder: 80,
          domains: [
            "www.fxpro.pl",
            "www.fxpro-trading.pl",
            "www.fxpro-start.pl",
          ],
          culture: "pl",
          type: o.European,
        },
        {
          countryFlagCode: "my",
          shortName: "ms",
          fullName: "Bahasa Melayu",
          secondaryName: "Malaysian",
          sortOrder: 70,
          domains: ["www.fxpro.my", "www.fxpro-malaysia.com"],
          culture: "ms",
          type: o.Global,
          indexedDomain: "www.fxpro-malaysia.com",
        },
        {
          countryFlagCode: "kr",
          shortName: "ko",
          fullName: "\ud55c\uad6d\uc5b4",
          secondaryName: "Korean",
          sortOrder: 80,
          domains: ["www.korea-fxpro.com"],
          culture: "ko",
          type: o.Global,
        },
        {
          countryFlagCode: "fr",
          shortName: "fr",
          fullName: "Fran\xe7ais",
          secondaryName: "French",
          sortOrder: 30,
          domains: [
            "www.fxpro.fr",
            "www.fxpro-trading.fr",
            "www.fxpro-start.fr",
          ],
          culture: "fr",
          type: o.European,
        },
        {
          countryFlagCode: "br",
          shortName: "pt",
          fullName: "Portugu\xeas",
          secondaryName: "Portuguese",
          sortOrder: 30,
          domains: ["pt.fxpro.com", "www.pt.fxpro.com"],
          culture: "pt",
          type: o.Global,
        },
        {
          countryFlagCode: "id",
          shortName: "id",
          fullName: "Bahasa Indonesia",
          secondaryName: "Indonesian",
          sortOrder: 60,
          domains: [
            "www.indonesia-fxpro.group",
            "www.indonesiafxpro.group",
            "www.indonesiafxpro.org",
            "www.indonesiafxpro.com",
            "www.fxpro-indo.com",
            "www.indonesia-fxpro.com",
          ],
          culture: "id",
          type: o.Global,
          indexedDomain: "www.indonesiafxpro.org",
        },
        {
          countryFlagCode: "de",
          shortName: "de",
          fullName: "Deutsch",
          secondaryName: "German",
          sortOrder: 40,
          domains: [
            "www.fxpro.de",
            "www.fxpro-trading.de",
            "www.fxpro-start.de",
          ],
          culture: "de",
          type: o.European,
        },
        {
          countryFlagCode: "ru",
          shortName: "ru",
          fullName: "\u0420\u0443\u0441\u0441\u043a\u0438\u0439",
          secondaryName: "Russian",
          sortOrder: 200,
          domains: r.a.Ru,
          culture: "ru",
          type: o.European,
          indexedDomain: "www.fxpro-ru.org",
        },
        {
          countryFlagCode: "cn",
          shortName: "zh",
          fullName: "\u4e2d\u6587\u7b80\u4f53",
          secondaryName: "Chinese",
          sortOrder: 90,
          domains: r.a.Cn,
          culture: "cn",
          type: o.Global,
          indexedDomain: "www.fxprocn.cn",
        },
        {
          countryFlagCode: "tw",
          shortName: "tw",
          fullName: "\u4e2d\u6587\u7e41\u9ad4",
          secondaryName: "Chinese",
          sortOrder: 100,
          domains: ["www.fxpro.com.tw"],
          culture: "cn",
          type: o.Global,
          hrefLang: "zh-Hant",
        },
        {
          countryFlagCode: "th",
          shortName: "th",
          fullName: "\u0e44\u0e17\u0e22",
          secondaryName: "Thai",
          sortOrder: 120,
          domains: ["www.fxpro.co.th"],
          culture: "th",
          type: o.Global,
        },
        {
          countryFlagCode: "it",
          shortName: "it",
          fullName: "Italiano",
          secondaryName: "Italian",
          sortOrder: 60,
          domains: [
            "www.fxpro.it",
            "www.fxpro-trading.it",
            "www.fxpro-start.it",
          ],
          culture: "it",
          type: o.European,
        },
        {
          countryFlagCode: "es",
          shortName: "es",
          fullName: "Espa\xf1ol",
          secondaryName: "Spanish",
          sortOrder: 20,
          domains: [
            "www.fxpro.es",
            "www.fxpro-trading.es",
            "www.fxpro-start.es",
          ],
          culture: "es",
          type: o.European,
        },
        {
          countryFlagCode: "mx",
          shortName: "es",
          fullName: "Espa\xf1ol",
          secondaryName: "Spanish",
          sortOrder: 20,
          domains: ["www.fxpro.es"],
          culture: "es",
          type: o.Global,
        },
        {
          countryFlagCode: "cz",
          shortName: "cs",
          fullName: "\u010cesk\xfd",
          secondaryName: "Czech",
          sortOrder: 90,
          domains: [
            "www.fxpro.cz",
            "www.fxpro-trading.cz",
            "www.fxpro-start.cz",
          ],
          culture: "cs",
          type: o.European,
        },
        {
          countryFlagCode: "vn",
          shortName: "vi",
          fullName: "Ti\xea\u0301ng Vi\u1ec7t",
          secondaryName: "Vietnamese",
          sortOrder: 110,
          domains: ["www.fxpro.vn", "www.fxpro-vietnam.com"],
          culture: "vn",
          type: o.Global,
        },
        {
          countryFlagCode: "hu",
          shortName: "hu",
          fullName: "Magyar",
          secondaryName: "Hungarian",
          sortOrder: 100,
          domains: [
            "www.fxpro.hu",
            "www.fxpro-trading.hu",
            "www.fxpro-start.hu",
          ],
          culture: "hu",
          type: o.European,
        },
        {
          countryFlagCode: "ae",
          shortName: "ar",
          fullName: "\u0627\u0644\u0639\u0631\u0628\u064a\u0629",
          secondaryName: "Arabic",
          sortOrder: 50,
          domains: ["www.fxpro.ae", "www.fxpro-mena.com"],
          culture: "ar",
          type: o.Global,
          indexedDomain: "www.fxpro.ae",
        },
        {
          countryFlagCode: "jp",
          shortName: "ja",
          fullName: "\u65e5\u672c\u8a9e",
          secondaryName: "Japanese",
          sortOrder: 130,
          domains: ["www.fxpro.jpn.com"],
          culture: "ja",
          type: o.Global,
        },
        {
          countryFlagCode: "ro",
          shortName: "ro",
          fullName: "Rom\xe2n\u0103",
          secondaryName: "Romanian",
          sortOrder: 130,
          domains: [
            "www.fxpro.ro",
            "www.fxpro-trading.ro",
            "www.fxpro-start.ro",
          ],
          culture: "en",
          type: o.European,
        },
        {
          countryFlagCode: "no",
          shortName: "no",
          fullName: "Norsk",
          secondaryName: "Norwegian",
          sortOrder: 130,
          domains: [
            "www.fxpro.no",
            "www.fxpro-trading.no",
            "www.fxpro-start.no",
          ],
          culture: "en",
          type: o.European,
        },
        {
          countryFlagCode: "ee",
          shortName: "et",
          fullName: "Eesti",
          secondaryName: "Estonian",
          sortOrder: 130,
          domains: [
            "www.fxpro.ee",
            "www.fxpro-trading.ee",
            "www.fxpro-start.ee",
          ],
          culture: "en",
          type: o.European,
        },
        {
          countryFlagCode: "hr",
          shortName: "hr",
          fullName: "Hrvatski",
          secondaryName: "Croatian",
          sortOrder: 130,
          domains: [
            "www.fxpro.hr",
            "www.fxpro-trading.hr",
            "www.fxpro-start.hr",
          ],
          culture: "en",
          type: o.European,
        },
        {
          countryFlagCode: "dk",
          shortName: "da",
          fullName: "Dansk",
          secondaryName: "Danish",
          sortOrder: 130,
          domains: [
            "www.fxpro.dk",
            "www.fxpro-trading.dk",
            "www.fxpro-start.dk",
          ],
          culture: "en",
          type: o.European,
        },
        {
          countryFlagCode: "lt",
          shortName: "lt",
          fullName: "Lietuvi\u0173",
          secondaryName: "Lithuanian",
          sortOrder: 130,
          domains: [
            "www.fxpro-lithuania.com",
            "www.fxpro-trading.lt",
            "www.fxpro-start.lt",
          ],
          culture: "en",
          type: o.European,
        },
        {
          countryFlagCode: "fi",
          shortName: "fi",
          fullName: "Suomi",
          secondaryName: "Finnish",
          sortOrder: 130,
          domains: [
            "www.fxpro-finland.com",
            "www.fxpro-trading.fi",
            "www.fxpro-start.fi",
          ],
          culture: "en",
          type: o.European,
        },
        {
          countryFlagCode: "bg",
          shortName: "bg",
          fullName: "\u0411\u044a\u043b\u0433\u0430\u0440\u0441\u043a\u0438",
          secondaryName: "Bulgarian",
          sortOrder: 130,
          domains: [
            "www.fxpro-bulgaria.com",
            "www.fxpro-trading.bg",
            "www.fxpro-start.bg",
          ],
          culture: "en",
          type: o.European,
        },
        {
          countryFlagCode: "se",
          shortName: "sv",
          fullName: "Svenska",
          secondaryName: "Swedish",
          sortOrder: 130,
          domains: [
            "www.fxpro.se",
            "www.fxpro-trading.se",
            "www.fxpro-start.se",
          ],
          culture: "en",
          type: o.European,
        },
        {
          countryFlagCode: "nl",
          shortName: "nl",
          fullName: "Dutch",
          secondaryName: "Dutch",
          sortOrder: 130,
          domains: [
            "www.fxpro.nl",
            "www.fxpro-trading.nl",
            "www.fxpro-start.nl",
          ],
          culture: "en",
          type: o.European,
        },
        {
          countryFlagCode: "mn",
          shortName: "mn",
          fullName: "\u041c\u043e\u043d\u0433\u043e\u043b",
          secondaryName: "Mongolian",
          sortOrder: 130,
          domains: ["www.fxpro.mn"],
          culture: "mn",
          type: o.Global,
        },
      ];
    },
    "43M5": function (e, t, a) {
      "use strict";
      a.d(t, "a", function () {
        return s;
      });
      var o = a("ofXK"),
        r = a("fXoL"),
        n = a("AytR"),
        i = a("LRne"),
        l = a("tk/3");
      class s {
        constructor(e, t) {
          (this.platformId = e), (this.http = t);
        }
        get(e, t, a = !1) {
          if (a && Object(o.A)(this.platformId)) return Object(i.a)(null);
          const r = e.startsWith("http") ? e : `${n.a.apiUrl}${e}`;
          return this.http.get(r, t);
        }
        post(e, t = {}, a, r = !1) {
          return r && Object(o.A)(this.platformId)
            ? Object(i.a)(null)
            : this.http.post(`${n.a.apiUrl}${e}`, JSON.stringify(t), a);
        }
      }
      (s.ɵfac = function (e) {
        return new (e || s)(
          r["\u0275\u0275inject"](r.PLATFORM_ID),
          r["\u0275\u0275inject"](l.a)
        );
      }),
        (s.ɵprov = r["\u0275\u0275defineInjectable"]({
          token: s,
          factory: s.ɵfac,
          providedIn: "root",
        }));
    },
    "4A1e": function (e, t, a) {
      "use strict";
      a.d(t, "a", function () {
        return n;
      });
      var o = a("iJl/"),
        r = a("ng9D");
      const n = [
        {
          regulator: r.a.CySec,
          label: "page_leverageInfo_tableTitle4",
          table: [
            { key: "page_leverageInformation_table_title6", value: "1:30" },
            { key: "page_leverageInformation_table_title7", value: "1:20" },
            { key: "GOLD, GOLDEURO, GOLDoz, GOLDgr", value: "1:20" },
            { key: "SILVER, SILVEREURO", value: "1:10" },
            { key: "page_leverageInfo_tableValuePlatinum", value: "1:10" },
            { key: "page_leverageInfo_tableValuePalladium", value: "1:10" },
            {
              key: "page_leverageInformation_table_title14",
              value: "1:10",
              groups: ["Metals/Base"],
            },
            { key: "page_leverageInformation_table_title", value: "1:20" },
            { key: "page_leverageInformation_table_title2", value: "1:10" },
            { key: "page_leverageInformation_table_title3", value: "1:20" },
            { key: "page_leverageInformation_table_title4", value: "1:10" },
            { key: "page_leverageInformation_table_title8", value: "1:10" },
            { key: "page_leverageInformation_table_title18", value: "1:10" },
            { key: "page_leverageInformation_table_title19", value: "1:10" },
            { key: "page_leverageInformation_table_title20", value: "1:5" },
            { key: "page_leverageInformation_table_title21", value: "1:2" },
          ],
        },
        {
          regulator: r.a.FCA,
          label: "page_leverageInfo_fxprouk",
          table: [
            { key: "page_leverageInformation_table_title6", value: "1:30" },
            { key: "page_leverageInformation_table_title7", value: "1:20" },
            { key: "GOLD, GOLDEURO, GOLDoz, GOLDgr", value: "1:20" },
            { key: "SILVER, SILVEREURO", value: "1:10" },
            { key: "page_leverageInfo_tableValuePlatinum", value: "1:10" },
            { key: "page_leverageInfo_tableValuePalladium", value: "1:10" },
            {
              key: "page_leverageInformation_table_title14",
              value: "1:10",
              groups: ["Metals/Base"],
            },
            { key: "page_leverageInformation_table_title", value: "1:20" },
            { key: "page_leverageInformation_table_title2", value: "1:10" },
            { key: "page_leverageInformation_table_title3", value: "1:20" },
            { key: "page_leverageInformation_table_title4", value: "1:10" },
            { key: "page_leverageInformation_table_title8", value: "1:10" },
            { key: "page_leverageInformation_table_title18", value: "1:10" },
            { key: "page_leverageInformation_table_title19", value: "1:10" },
            { key: "page_leverageInformation_table_title20", value: "1:5" },
          ],
        },
        {
          regulator: r.a.Global,
          label: "page_leverage_global_text14",
          table: [
            { key: "page_leverageInformation_table_title6", value: "1:200" },
            { key: "page_leverageInformation_table_title7", value: "1:200" },
            { key: "page_leverageInformation_table_new_text1", value: "1:200" },
            { key: "page_leverageInformation_table_new_text2", value: "1:40" },
            { key: "page_leverageInformation_table_title", value: "1:200" },
            { key: "page_leverageInformation_table_title2", value: "1:100" },
            { key: "page_leverageInformation_table_title3", value: "1:50" },
            { key: "page_leverageInformation_table_title8", value: "1:200" },
            { key: "page_leverageInformation_table_title18", value: "1:200" },
            { key: "page_leverageInformation_table_title19", value: "1:50" },
            { key: "page_leverageInformation_table_title20", value: "1:25" },
            { key: "page_leverageInformation_table_title21", value: "1:20" },
          ],
        },
        {
          regulator: r.a.KNN,
          label: "page_leverageInfo_tableTitle2",
          table: [
            { key: "page_leverageInformation_table_title6", value: "1:10000" },
            { key: "page_leverageInformation_table_title7", value: "1:500" },
            {
              key: "page_leverageInformation_table_new_text6",
              value: "1:10000",
            },
            { key: "page_leverageInformation_table_new_text1", value: "1:200" },
            { key: "page_leverageInformation_table_new_text5", value: "1:200" },
            { key: "page_leverageInformation_table_new_text2", value: "1:40" },
            { key: "page_leverageInformation_table_title", value: "1:500" },
            { key: "page_leverageInformation_table_title2", value: "1:100" },
            { key: "page_leverageInformation_table_title3", value: "1:50" },
            { key: "page_leverageInformation_table_title8", value: "1:200" },
            { key: "page_leverageInformation_table_title18", value: "1:200" },
            { key: "page_leverageInformation_table_title19", value: "1:50" },
            { key: "page_leverageInformation_table_title20", value: "1:25" },
            { key: "page_leverageInformation_table_title21", value: "1:20" },
          ],
        },
        {
          regulator: r.a.FSCM,
          label: "page_leverageInfo_tableTitle6",
          table: [
            {
              key: "page_leverageInformation_table_title6",
              value: "1:500",
              disabledCountries: ["MY", "ID", "BR", "JP"],
              groups: ["Forex/Major"],
            },
            {
              key: "page_leverageInformation_table_title6",
              value: "1:2000",
              enabledCountries: ["MY", "ID"],
              groups: ["Forex/Major"],
            },
            {
              key: "page_leverageInformation_table_title6",
              value: "1:1000",
              enabledCountries: ["BR", "JP"],
              groups: ["Forex/Major"],
            },
            {
              key: "page_leverageInformation_table_title7",
              value: "1:500",
              groups: ["Forex/Minor"],
            },
            {
              key: "page_leverageInformation_table_title13",
              value: "1:200",
              nameStartsWith: "#GOLD",
            },
            {
              key: "page_leverageInformation_table_title12",
              value: "1:500",
              disabledCountries: ["MY", "ID", "BR", "JP"],
              groups: [
                "Metals/Gold",
                "Metals/Silver",
                "Metals/Platinum",
                "Metals/Palladium",
              ],
            },
            {
              key: "page_leverageInformation_table_title12",
              value: "1:888",
              enabledCountries: ["MY", "ID", "BR", "JP"],
              groups: [
                "Metals/Gold",
                "Metals/Silver",
                "Metals/Platinum",
                "Metals/Palladium",
              ],
            },
            {
              key: "page_leverageInformation_table_title14",
              value: "1:40",
              groups: ["Metals/Base"],
            },
            {
              key: "page_leverageInformation_table_title",
              value: "1:500",
              type: o.a.Indices,
            },
            {
              key: "page_leverageInformation_table_title2",
              value: "1:100",
              type: o.a.Indices,
            },
            {
              key: "page_leverageInformation_table_title16",
              value: "1:50",
              groups: ["Futures/Indices/Major"],
            },
            {
              key: "page_leverageInformation_table_title17",
              value: "1:200",
              groups: ["Spot/Energy"],
            },
            {
              key: "page_leverageInformation_table_title18",
              value: "1:200",
              groups: ["Futures/Energy"],
            },
            {
              key: "page_leverageInformation_table_title19",
              value: "1:50",
              groups: ["Futures/Agricultural Commodities"],
            },
            {
              key: "page_leverageInformation_table_title20",
              value: "1:25",
              type: o.a.Shares,
            },
            {
              key: "page_leverageInformation_table_title21",
              value: "1:200",
              groups: ["Cryptos"],
            },
          ],
        },
        {
          regulator: r.a.FSAS,
          label: "page_leverageInfo_tableTitle6",
          table: [
            {
              key: "page_leverageInformation_table_title6",
              value: "1:500",
              disabledCountries: ["MY", "ID", "BR", "JP"],
              groups: ["Forex/Major"],
            },
            {
              key: "page_leverageInformation_table_title6",
              value: "1:2000",
              enabledCountries: ["MY", "ID"],
              groups: ["Forex/Major"],
            },
            {
              key: "page_leverageInformation_table_title6",
              value: "1:1000",
              enabledCountries: ["BR", "JP"],
              groups: ["Forex/Major"],
            },
            {
              key: "page_leverageInformation_table_title7",
              value: "1:500",
              groups: ["Forex/Minor"],
            },
            {
              key: "page_leverageInformation_table_title13",
              value: "1:200",
              nameStartsWith: "#GOLD",
            },
            {
              key: "page_leverageInformation_table_title12",
              value: "1:500",
              disabledCountries: ["MY", "ID", "BR", "JP"],
              groups: [
                "Metals/Gold",
                "Metals/Silver",
                "Metals/Platinum",
                "Metals/Palladium",
              ],
            },
            {
              key: "page_leverageInformation_table_title12",
              value: "1:888",
              enabledCountries: ["MY", "ID", "BR", "JP"],
              groups: [
                "Metals/Gold",
                "Metals/Silver",
                "Metals/Platinum",
                "Metals/Palladium",
              ],
            },
            {
              key: "page_leverageInformation_table_title14",
              value: "1:40",
              groups: ["Metals/Base"],
            },
            {
              key: "page_leverageInformation_table_title",
              value: "1:500",
              type: o.a.Indices,
            },
            {
              key: "page_leverageInformation_table_title2",
              value: "1:100",
              type: o.a.Indices,
            },
            {
              key: "page_leverageInformation_table_title16",
              value: "1:50",
              groups: ["Futures/Indices/Major"],
            },
            {
              key: "page_leverageInformation_table_title17",
              value: "1:200",
              groups: ["Spot/Energy"],
            },
            {
              key: "page_leverageInformation_table_title18",
              value: "1:200",
              groups: ["Futures/Energy"],
            },
            {
              key: "page_leverageInformation_table_title19",
              value: "1:50",
              groups: ["Futures/Agricultural Commodities"],
            },
            {
              key: "page_leverageInformation_table_title20",
              value: "1:25",
              type: o.a.Shares,
            },
            {
              key: "page_leverageInformation_table_title21",
              value: "1:200",
              groups: ["Cryptos"],
            },
          ],
        },
      ];
    },
    "4OM5": function (e, t, a) {
      "use strict";
      a.d(t, "a", function () {
        return d;
      });
      var o = a("jtHE"),
        r = a("XNiG"),
        n = a("lJxs"),
        i = a("1G5W"),
        l = a("Vp7h"),
        s = a("xiuU");
      var c = a("Nbnn"),
        m = a("fXoL");
      class d extends class {
        constructor() {
          this.restrictionService = new s.a();
        }
        filterMenus(e, t) {
          return JSON.parse(JSON.stringify(e)).filter((e) => {
            const a = this.isAvailable(e, t);
            return (
              a &&
                (e.subMenu = e.subMenu.filter((e) => this.isAvailable(e, t))),
              a
            );
          });
        }
        isAvailable(e, t) {
          return (
            !e.restrictionConfig ||
            !this.restrictionService.isRestricted(e.restrictionConfig, t)
          );
        }
        getHeaderMenus(e) {
          return this.filterMenus(l.a, e)
            .filter((e) => e.visible && !e.hideInHeader)
            .map((e) => {
              const t = e.subMenu.filter((e) => e.visible);
              let a = t.map((e) => e.group);
              return (
                (a = [...new Set(a)]),
                Object.assign(Object.assign({}, e), {
                  subMenuGroups: a.map((e) => ({
                    group: e,
                    subMenu: t.filter((t) => t.group === e),
                  })),
                })
              );
            });
        }
        getFooterMenus(e) {
          return this.filterMenus(l.a, e)
            .filter((e) => e.visible)
            .map((e) =>
              Object.assign(Object.assign({}, e), {
                subMenu: e.subMenu.filter((e) => e.visible),
              })
            );
        }
      } {
        constructor(e) {
          super(),
            (this.fxRestrictionService = e),
            (this.allMenusSubject = new o.a(1)),
            (this.destroyObservable = new r.a()),
            (this.allMenusObservable = this.fxRestrictionService
              .getMenuRestrictionState$()
              .pipe(Object(n.a)((e) => this.filterMenus(l.a, e)))),
            this.allMenusObservable
              .pipe(Object(i.a)(this.destroyObservable))
              .subscribe(this.allMenusSubject);
        }
        ngOnDestroy() {
          this.destroyObservable.next(), this.destroyObservable.complete();
        }
        getListOfAvailableMenu() {
          return this.allMenusSubject;
        }
      }
      (d.ɵfac = function (e) {
        return new (e || d)(m["\u0275\u0275inject"](c.a));
      }),
        (d.ɵprov = m["\u0275\u0275defineInjectable"]({
          token: d,
          factory: d.ɵfac,
          providedIn: "root",
        }));
    },
    "60iL": function (e, t, a) {
      "use strict";
      a.d(t, "a", function () {
        return o;
      });
      const o = { cookiesConsentKey: "cookies_consent" };
    },
    "6pIP": function (e, t, a) {
      "use strict";
      a.d(t, "a", function () {
        return l;
      });
      var o = a("ofXK"),
        r = a("fXoL"),
        n = a("ll7P"),
        i = a("p3XQ");
      class l {
        constructor(e, t) {
          (this.platformId = e), (this.basUrl = t);
        }
        getDomain() {
          if (Object(o.z)(this.platformId))
            return {
              host: window.location.host,
              baseUrl: window.location.origin,
              relativeUrl: window.location.href.replace(
                window.location.origin,
                ""
              ),
            };
          return {
            host: this.basUrl.replace(/https?:\/\//g, ""),
            baseUrl: this.basUrl,
          };
        }
        isChineseDomain() {
          return n.a.Cn.includes(this.getDomain().host);
        }
        isRussianDomain() {
          return n.a.Ru.includes(this.getDomain().host);
        }
      }
      (l.ɵfac = function (e) {
        return new (e || l)(
          r["\u0275\u0275inject"](r.PLATFORM_ID),
          r["\u0275\u0275inject"](i.a)
        );
      }),
        (l.ɵprov = r["\u0275\u0275defineInjectable"]({
          token: l,
          factory: l.ɵfac,
          providedIn: "root",
        }));
    },
    "7+hn": function (e, t, a) {
      "use strict";
      a.d(t, "a", function () {
        return i;
      });
      var o = a("ofXK"),
        r = a("Uiwt"),
        n = a("fXoL");
      class i {
        constructor(e, t) {
          (this.deviceDetectService = e),
            (this.document = t),
            (this.scripts = []);
        }
        loadScript(e, t) {
          const a = new Date().getTime();
          return new Promise((o, r) => {
            if (this.deviceDetectService.isBrowser) {
              const r = document.createElement("script");
              (r.type = "text/javascript"),
                (r.src = e),
                (r.id = a),
                r.readyState
                  ? (r.onreadystatechange = () => {
                      ("loaded" !== r.readyState &&
                        "complete" !== r.readyState) ||
                        ((r.onreadystatechange = null),
                        o({ loaded: !0, status: "Loaded" }));
                    })
                  : (r.onload = () => {
                      o({ loaded: !0, status: "Loaded" }),
                        t && this.clearLoadedScripts();
                    }),
                (r.onerror = (e) => o({ loaded: !1, status: "Loaded" })),
                document.getElementsByTagName("head")[0].appendChild(r),
                this.scripts.push(r);
            }
          });
        }
        createScript(e, t = {}, a = "text/javascript") {
          if (t.id) {
            const e = this.document.getElementById(t.id);
            e && this.removeElement(e);
          }
          const o = this.document.getElementsByTagName("script")[0],
            r = this.document.createElement("script");
          return (
            t.id && (r.id = t.id),
            (r.type = a),
            (r.innerHTML = e),
            o.parentNode.insertBefore(r, o),
            r
          );
        }
        removeElement(e) {
          e.parentElement.removeChild(e);
        }
        clearLoadedScripts() {
          this.scripts.forEach((e) => {
            this.removeElement(e);
          }),
            (this.scripts = []);
        }
      }
      (i.ɵfac = function (e) {
        return new (e || i)(
          n["\u0275\u0275inject"](r.a),
          n["\u0275\u0275inject"](o.d)
        );
      }),
        (i.ɵprov = n["\u0275\u0275defineInjectable"]({
          token: i,
          factory: i.ɵfac,
          providedIn: "root",
        }));
    },
    "7kPy": function (e, t, a) {
      "use strict";
      a.d(t, "a", function () {
        return o.a;
      }),
        a.d(t, "b", function () {
          return r.a;
        }),
        a.d(t, "c", function () {
          return n.a;
        });
      var o = a("Xcc+"),
        r = a("iJl/"),
        n = (a("0gde"), a("0NL4"), a("ng9D"));
    },
    "A+jk": function (e, t, a) {
      "use strict";
      a.d(t, "a", function () {
        return r;
      });
      var o = a("iJl/");
      const r = {
        [o.a.Shares]: "Stocks",
        [o.a.Forex]: "Forex",
        [o.a.Cryptocurrencies]: "Cryptos",
        [o.a.Indices]: "Spot/Spot Indices",
        [o.a.SpotEnergies]: "Spot/Energy",
        [o.a.SpotMetals]: "Metals",
        [o.a.Futures]: "Futures",
      };
    },
    AytR: function (e, t, a) {
      "use strict";
      a.d(t, "a", function () {
        return o;
      });
      const o = {
        production: !0,
        quotesUpdateFrequency: 1e4,
        reCaptcha: "6Ldo-n0UAAAAAJoGo5Kx3QBPHaj3TCxW5ETcU024",
        name: "prod",
        apiUrl: "",
        showSendSms: !1,
        hmr: !1,
      };
    },
    B2EK: function (e, t, a) {
      "use strict";
      a.d(t, "a", function () {
        return o;
      });
      const o = {
        Home: {
          title: "meta_Home.title",
          description: "meta_Home.description",
        },
        GuideLines: {
          title: "meta_GuideLines.title",
          description: "meta_GuideLines.description",
        },
        LegalDocumentation: {
          title: "meta_LegalDocumentation.title",
          description: "meta_LegalDocumentation.description",
        },
        About: {
          title: "meta_About.title",
          description: "meta_About.description",
        },
        SiteTCs: {
          title: "meta_SiteTCs.title",
          description: "meta_SiteTCs.description",
        },
        RiskDisclosure: {
          title: "meta_RiskDisclosure.title",
          description: "meta_RiskDisclosure.description",
        },
        Contact: {
          title: "meta_Contact.title",
          description: "meta_Contact.description",
        },
        Market: {
          title: "meta_Market.title",
          description: "meta_Market.description",
        },
        MarketForex: {
          title: "meta_MarketForex.title",
          description: "meta_MarketForex.description",
        },
        MarketShares: {
          title: "meta_MarketShares.title",
          description: "meta_MarketShares.description",
        },
        MarketFutures: {
          title: "meta_MarketFutures.title",
          description: "meta_MarketFutures.description",
        },
        MarketIndices: {
          title: "meta_MarketIndices.title",
          description: "meta_MarketIndices.description",
        },
        MarketMetals: {
          title: "meta_MarketMetals.title",
          description: "meta_MarketMetals.description",
        },
        MarketEnergies: {
          title: "meta_MarketEnergies.title",
          description: "meta_MarketEnergies.description",
        },
        MarketCryptocurrencies: {
          title: "meta_MarketCryptocurrencies.title",
          description: "meta_MarketCryptocurrencies.description",
        },
        Tools: {
          title: "meta_Tools.title",
          description: "meta_Tools.description",
        },
        Execution: {
          title: "meta_Execution.title",
          description: "meta_Execution.description",
        },
        Deposit: {
          title: "meta_Deposit.title",
          description: "meta_Deposit.description",
        },
        WhatIsSpreadBetting: {
          title: "meta_WhatIsSpreadBetting.title",
          description: "meta_WhatIsSpreadBetting.description",
        },
        SpreadBettingCfd: {
          title: "meta_SpreadBettingCfd.title",
          description: "meta_SpreadBettingCfd.description",
        },
        SpreadBettingWithFxpro: {
          title: "meta_SpreadBettingWithFxpro.title",
          description: "meta_SpreadBettingWithFxpro.description",
        },
        SpreadBettingLeverageAndMargin: {
          title: "meta_SpreadBettingLeverageAndMargin.title",
          description: "meta_SpreadBettingLeverageAndMargin.description",
        },
        ComparisonPlatforms: {
          title: "meta_ComparisonPlatforms.title",
          description: "meta_ComparisonPlatforms.description",
        },
        CommissionAndSwapCharges: {
          title: "meta_CommissionAndSwapCharges.title",
          description: "meta_CommissionAndSwapCharges.description",
        },
        NoDealingDeskExecution: {
          title: "meta_NoDealingDeskExecution.title",
          description: "meta_NoDealingDeskExecution.description",
        },
        Calculators: {
          title: "meta_Calculators.title",
          description: "meta_Calculators.description",
        },
        CalculatorsAllInOne: {
          title: "meta_CalculatorsAllInOne.title",
          description: "meta_CalculatorsAllInOne.description",
        },
        CalculatorsStopLossTakeProfit: {
          title: "meta_CalculatorsStopLossTakeProfit.title",
          description: "meta_CalculatorsStopLossTakeProfit.description",
        },
        CalculatorsMargin: {
          title: "meta_CalculatorsMargin.title",
          description: "meta_CalculatorsMargin.description",
        },
        CalculatorsProfit: {
          title: "meta_CalculatorsProfit.title",
          description: "meta_CalculatorsProfit.description",
        },
        CalculatorsSwap: {
          title: "meta_CalculatorsSwap.title",
          description: "meta_CalculatorsSwap.description",
        },
        CalculatorsPip: {
          title: "meta_CalculatorsPip.title",
          description: "meta_CalculatorsPip.description",
        },
        CalculatorsCurrencyConverter: {
          title: "meta_CalculatorsCurrencyConverter.title",
          description: "meta_CalculatorsCurrencyConverter.description",
        },
        CalculatorsCtraderCommission: {
          title: "meta_CalculatorsCtraderCommission.title",
          description: "meta_CalculatorsCtraderCommission.description",
        },
        CalculatorsCost: {
          title: "meta_CalculatorsCost.title",
          description: "meta_CalculatorsCost.description",
        },
        NotFound404: {
          title: "meta_NotFound404.title",
          description: "meta_NotFound404.description",
        },
        Vip: { title: "meta_Vip.title", description: "meta_Vip.description" },
        Feedback: {
          title: "meta_Feedback.title",
          description: "meta_Feedback.description",
        },
        TradeResponsibly: {
          title: "meta_TradeResponsibly.title",
          description: "meta_TradeResponsibly.description",
        },
        FxproNewsRoom: {
          title: "meta_FxproNewsRoom.title",
          description: "meta_FxproNewsRoom.description",
        },
        EconomicCalendar: {
          title: "meta_EconomicCalendar.title",
          description: "meta_EconomicCalendar.description",
        },
        PressReleasesArchive: {
          title: "meta_PressReleasesArchive.title",
          description: "meta_PressReleasesArchive.description",
        },
        InTheNews: {
          title: "menu_in_the_news",
          description: "meta_InTheNews.description",
        },
        MultiAccountManager: {
          title: "meta_MultiAccountManager.title",
          description: "meta_MultiAccountManager.description",
        },
        MarketHolidays: {
          title: "meta_MarketHolidays.title",
          description: "meta_MarketHolidays.description",
        },
        AlgoTrading: {
          title: "meta_AlgoTrading.title",
          description: "meta_AlgoTrading.description",
        },
        EarningsCalendar: {
          title: "meta_EarningsCalendar.title",
          description: "meta_EarningsCalendar.description",
        },
        HelpSection: {
          title: "meta_HelpSection.title",
          description: "meta_HelpSection.description",
        },
        Education: {
          title: "meta_Education.title",
          description: "meta_Education.description",
        },
        EducationChapter: {
          title: "meta_EducationChapter.title",
          description: "meta_EducationChapter.title",
        },
        ThankYou: {
          title: "meta_ThankYou.title",
          description: "meta_ThankYou.description",
        },
        MetaTrader4: {
          title: "meta_MetaTrader4.title",
          description: "meta_MetaTrader4.description",
        },
        MetaTrader5: {
          title: "meta_MetaTrader5.title",
          description: "meta_MetaTrader5.description",
        },
        Edge: {
          title: "meta_Edge.title",
          description: "meta_Edge.description",
        },
        cTrader: {
          title: "meta_cTrader.title",
          description: "meta_cTrader.description",
        },
        CorporateActions: {
          title: "meta_CorporateActions.title",
          description: "meta_CorporateActions.description",
        },
        Licences: {
          title: "meta_Licences.title",
          description: "meta_Licences.description",
        },
        Sponsorship: {
          title: "meta_Sponsorship.title",
          description: "meta_Sponsorship.description",
        },
        Csr: { title: "meta_Csr.title", description: "meta_Csr.description" },
        Partners: {
          title: "meta_Partners.title",
          description: "meta_Partners.description",
        },
        Awards: {
          title: "meta_Awards.title",
          description: "meta_Awards.description",
        },
        mt4OrderExecution: {
          title: "meta_mt4OrderExecution.title",
          description: "meta_mt4OrderExecution.description",
        },
        mt5OrderExecution: {
          title: "meta_mt5OrderExecution.title",
          description: "meta_mt5OrderExecution.description",
        },
        ctraderOrderExecution: {
          title: "meta_ctraderOrderExecution.title",
          description: "meta_ctraderOrderExecution.description",
        },
        leverageInformation: {
          title: "meta_leverageInformation.title",
          description: "meta_leverageInformation.description",
        },
        SiteTcs: {
          title: "meta_SiteTcs.title",
          description: "meta_SiteTcs.description",
        },
        Kid: { title: "meta_Kid.title", description: "meta_Kid.description" },
        Complaints: {
          title: "meta_Complaints.title",
          description: "meta_Complaints.description",
        },
        PrivacyPolicy: {
          title: "meta_PrivacyPolicy.title",
          description: "meta_PrivacyPolicy.description",
        },
        TiedAgents: {
          title: "meta_TiedAgents.title",
          description: "meta_TiedAgents.description",
        },
        Cookies: {
          title: "meta_Cookies.title",
          description: "meta_Cookies.description",
        },
        Platforms: {
          title: "meta_Platforms.title",
          description: "meta_Platforms.description",
        },
        TradingTools: {
          title: "meta_TradingTools.title",
          description: "meta_TradingTools.description",
        },
        TradersDashboard: {
          title: "meta_TradersDashboard.title",
          description: "meta_TradersDashboard.description",
        },
        TradingCentral: {
          title: "meta_TradingCentral.title",
          description: "meta_TradingCentral.description",
        },
        DownloadCentre: {
          title: "meta_DownloadCentre.title",
          description: "meta_DownloadCentre.description",
        },
        GetStarted: {
          title: "meta_GetStarted.title",
          description: "meta_GetStarted.description",
        },
        Careers: {
          title: "meta_Careers.title",
          description: "meta_Careers.description",
        },
        CreditRating: {
          title: "meta_CreditRating.title",
          description: "meta_CreditRating.description",
        },
        howTo: {
          title: "meta_howTo.title",
          description: "meta_howTo.description",
        },
        FAQ: { title: "meta_FAQ.title", description: "meta_FAQ.description" },
        VirtualPrivateServer: {
          title: "meta_VirtualPrivateServer.title",
          description: "meta_VirtualPrivateServer.description",
        },
        DownloadCentreThankYou: {
          title: "meta_DownloadCentreThankYou.title",
          description: "meta_DownloadCentreThankYou.description",
        },
        Webinars: {
          title: "meta_Webinars.title",
          description: "meta_Webinars.description",
        },
        EmailDisclaimer: {
          title: "meta_EmailDisclaimer.title",
          description: "meta_EmailDisclaimer.description",
        },
        TermsAndConditionsDisclaimer: {
          title: "meta_TermsAndConditions.title",
          description: "meta_Home.description",
        },
        Sitemap: {
          title: "meta_Sitemap.title",
          description: "meta_Sitemap.description",
        },
        DirectApp: {
          title: "menu_direct_app",
          description: "meta_DirectApp.description",
        },
        Glossary: {
          title: "meta_Glossary.title",
          description: "meta_Glossary.description",
        },
        GlossaryDefault: {
          title: "page_glossary.metaTitle",
          description: "page_glossary.metaDescription",
        },
        SingleInstrumentForex: {
          title: "meta_SingleInstrumentForex.title",
          description: "meta_SingleInstrumentForex.description",
        },
        SingleInstrumentIndices: {
          title: "meta_SingleInstrumentIndices.title",
          description: "meta_SingleInstrumentIndices.description",
        },
        SingleInstrumentShares: {
          title: "meta_SingleInstrumentShares.title",
          description: "meta_SingleInstrumentShares.description",
        },
        SingleInstrumentMetals: {
          title: "meta_SingleInstrumentMetals.title",
          description: "meta_SingleInstrumentMetals.description",
        },
        SingleInstrumentEnergies: {
          title: "meta_SingleInstrumentEnergies.title",
          description: "meta_SingleInstrumentEnergies.description",
        },
        SingleInstrumentCryptocurrencies: {
          title: "meta_SingleInstrumentCryptocurrencies.title",
          description: "meta_SingleInstrumentForex.description",
        },
        Design: {
          title: "menu_design",
          description: "meta_Design.description",
        },
        SwapFree: {
          title: "meta_SwapFree.title",
          description: "meta_SwapFree.description",
        },
        WatchWebinar: {
          title: "meta_WatchWebinar.title",
          description: "meta_WatchWebinar.description",
        },
        EducationTest: {
          title: "meta_articles.title",
          description: "meta_articles.description",
        },
        EducationSection: {
          title: "meta_articles.title",
          description: "meta_articles.description",
        },
        OurProjects: {
          title: "meta_OurProjects.title",
          description: "meta_OurProjects.description",
        },
        CardDepositIssue: {
          title: "meta_CardDepositIssue.title",
          description: "meta_CardDepositIssue.description",
        },
        FaqMain: {
          title: "meta_FaqMain.title",
          description: "meta_FaqMain.description",
        },
        FaqCategory: {
          title: "meta_FaqCategory.title",
          description: "meta_FaqCategory.description",
        },
        WatchAndLearn: {
          title: "meta_WatchAndLearn.title",
          description: "meta_WatchAndLearn.description",
        },
        Articles: {
          title: "meta_articles.title",
          description: "meta_articles.description",
        },
        FxproPlatformOrderExecution: {
          title: "menu_fxpro_platform_order_execution",
          description: "menu_fxpro_platform_order_execution",
        },
        CompanyBenefits: {
          title:
            "\u041f\u043e\u0447\u0435\u043c\u0443 FxPro - \u043b\u0443\u0447\u0448\u0438\u0439 \u0431\u0440\u043e\u043a\u0435\u0440 \u043c\u0438\u0440\u0430",
          description:
            "\u0423\u0437\u043d\u0430\u0439\u0442\u0435 \u0432\u0441\u0435 \u0433\u043b\u0430\u0432\u043d\u044b\u0435 \u043f\u0440\u0435\u0438\u043c\u0443\u0449\u0435\u0441\u0442\u0432\u0430 \u043c\u0435\u0436\u0434\u0443\u043d\u0430\u0440\u043e\u0434\u043d\u043e\u0433\u043e \u0431\u0440\u043e\u043a\u0435\u0440\u0430 FxPro",
        },
        Safety: {
          title: "meta_Safety.title",
          description: "meta_Safety.description",
        },
        AccountsComparison: {
          title:
            "\u0421\u0440\u0430\u0432\u043d\u0435\u043d\u0438\u0435 \u0442\u043e\u0440\u0433\u043e\u0432\u044b\u0445 \u0441\u0447\u0435\u0442\u043e\u0432",
          description:
            "\u041d\u0430 \u044d\u0442\u043e\u0439 \u0441\u0442\u0440\u0430\u043d\u0438\u0446\u0435 \u0432\u044b \u043d\u0430\u0439\u0434\u0435\u0442\u0435 \u0442\u0438\u043f\u044b \u0442\u043e\u0440\u0433\u043e\u0432\u044b\u0445 \u0441\u0447\u0435\u0442\u043e\u0432, \u043f\u0440\u0435\u0434\u043b\u0430\u0433\u0430\u0435\u043c\u044b\u0445 \u0432 FxPro. \u0412\u044b \u043c\u043e\u0436\u0435\u0442\u0435 \u0432\u044b\u0431\u0440\u0430\u0442\u044c \u043e\u0442 \u043e\u0434\u043d\u043e\u0433\u043e \u0434\u043e \u0442\u0440\u0435\u0445 \u0432\u0430\u0440\u0438\u0430\u043d\u0442\u043e\u0432 \u0434\u043b\u044f \u043f\u0440\u043e\u0441\u043c\u043e\u0442\u0440\u0430 \u043f\u0430\u0440\u0430\u043c\u0435\u0442\u0440\u043e\u0432.",
        },
        FxproTradingPlatform: {
          title: "meta_FxproTradingPlatform.title",
          description: "meta_FxproTradingPlatform.description",
        },
        DemoAccount: {
          title: "meta_DemoAccount.title",
          description: "meta_DemoAccount.description",
        },
        ForexOpenAccount: {
          title: "meta_ForexOpenAccount.title",
          description: "meta_ForexOpenAccount.description",
        },
        ScbChanges: {
          title: "meta_ScbChanges.title",
          description: "meta_ScbChanges.description",
        },
        CookiePreference: {
          title: "meta_CookiePreference.title",
          description: "meta_CookiePreference.description",
        },
        Gallery: {
          title: "meta_Gallery.title",
          description: "meta_Gallery.description",
        },
        Investments: {
          title: "meta_Investments.title",
          description: "meta_Investments.description",
        },
        Nfp: { title: "meta_Nfp.title", description: "meta_Nfp.description" },
        Fomc: {
          title: "meta_Fomc.title",
          description: "meta_Fomc.description",
        },
        InterestRates: {
          title: "meta_InterestRates.title",
          description: "meta_InterestRates.description",
        },
        EarningSeason: {
          title: "meta_EarningSeason.title",
          description: "meta_EarningSeason.description",
        },
        CmeMain: {
          title: "meta_CmeMain.title",
          description: "meta_CmeMain.description",
        },
      };
    },
    CUJp: function (e, t, a) {
      "use strict";
      a.d(t, "a", function () {
        return o;
      });
      const o = [
        { enabledCountries: ["GB"], enabledLanguages: ["en"] },
        { enabledSelectedCountries: ["GB"], enabledLanguages: ["en"] },
      ];
    },
    Cicq: function (e, t, a) {
      "use strict";
      a.d(t, "a", function () {
        return S;
      });
      var o = a("tk/3"),
        r = a("LRne"),
        n = a("lJxs"),
        i = a("eIep"),
        l = a("un/a"),
        s = a("JIr8"),
        c = a("vkgz"),
        m = a("pLZG"),
        d = a("P5aQ"),
        p = a("A+jk"),
        u = a("4A1e"),
        f = a("00Dm"),
        b = a("fe7P"),
        g = a("Xcc+"),
        h = a("iJl/"),
        w = a("pirP"),
        x = a("Uiwt"),
        y = a("AytR"),
        k = a("qBOQ"),
        _ = a("43M5"),
        v = a("g2vv"),
        T = a("fXoL"),
        M = a("sYmb");
      class S {
        constructor(e, t, a, o) {
          (this.http = e),
            (this.translateService = t),
            (this.deviceDetectService = a),
            (this.fxTranslateService = o),
            (this.quotesMap = new Map());
        }
        getTradingConditions(e, t) {
          const a = this.processInstrumentName(e, t);
          return this.getInstrumentInfoByName(a).pipe(
            Object(n.a)((e) => {
              if (!e.length) return null;
              return new f.a(t).createInstrument(e);
            })
          );
        }
        getDescription(e) {
          const t = { awards: k.a.ROUND_AWARD_NUMBER };
          return this.deviceDetectService.isBrowser
            ? this.fxTranslateService.onLangChange().pipe(
                Object(i.a)((a) =>
                  this.http
                    .get(`/api/Localization/GetInstrumentDescription/${a}/${e}`)
                    .pipe(
                      Object(l.a)(2),
                      Object(n.a)((e) => {
                        if (e)
                          for (const a in t) e = e.replace(`{{${a}}}`, t[a]);
                        return e;
                      })
                    )
                )
              )
            : this.translateService.get(e, t);
        }
        getMetaOverride(e) {
          return this.deviceDetectService.isBrowser
            ? this.fxTranslateService
                .onLangChange()
                .pipe(
                  Object(i.a)((t) =>
                    this.http
                      .get(
                        `/api/Localization/GetInstrumentMetaOverrides/${t}/${e}`
                      )
                      .pipe(Object(l.a)(2))
                  )
                )
            : this.translateService.get(e);
        }
        getVolatilityHistory(e) {
          return this.http
            .get("/api/instrument/volatility", {
              params: new o.d().set("name", e),
            })
            .pipe(Object(l.a)(2))
            .toPromise();
        }
        getHistory(e, t) {
          const a = new Date();
          a.setDate(a.getDate() + 2);
          const i = new o.d()
            .set("symbol", e)
            .set("interval", t)
            .set("from", "1990-09-08")
            .set("to", S.getFormattedDateString(a));
          return this.http
            .get(S.tradingInstrumentsApi + "/symbols/candles", { params: i })
            .pipe(
              Object(l.a)(2),
              Object(s.a)(() => Object(r.a)([])),
              Object(n.a)((e) =>
                e
                  ? e.map((e) => ({
                      x: e.time,
                      y: e.open,
                      lowPosition: e.low,
                      highPosition: e.high,
                      closePosition: e.close,
                    }))
                  : []
              )
            )
            .toPromise();
        }
        getInstrument(e, t) {
          const a = this.processInstrumentName(e, t);
          return this.http
            .get(S.tradingInstrumentsApi + "/symbols/prices", {
              params: new o.d().set("symbols", a),
            })
            .pipe(
              Object(s.a)((e) => Object(r.a)(null)),
              Object(n.a)((e) => (e ? new g.a(e[0]) : null))
            );
        }
        getInstruments(e) {
          return this.http
            .get(S.tradingInstrumentsApi + "/symbols/prices", {
              params: new o.d().set("symbols", e.join(",")),
            })
            .pipe(
              Object(s.a)((e) => Object(r.a)(null)),
              Object(n.a)((e) => e || null)
            );
        }
        getInstrumentsByType(e) {
          const t = p.a[e] || e;
          return this.http
            .get(S.tradingInstrumentsApi + "/symbols/prices", {
              params: new o.d().set("category", t),
            })
            .pipe(
              Object(s.a)(() => []),
              Object(n.a)((e) => e.map((e) => new g.a(e))),
              Object(c.a)((t) => this.quotesMap.set(e, [...t]))
            );
        }
        getForexFixedSpread() {
          return this.http
            .get(
              S.tradingInstrumentsApi + "/symbols/info",
              { params: new o.d().set("category", "Forex Major Fix") },
              !0
            )
            .pipe(
              Object(m.a)(Boolean),
              Object(s.a)(() => []),
              Object(n.a)((e) => e.map((e) => e.name))
            );
        }
        getMaxLeverage(e, t, a) {
          const o = u.a
            .find((e) => e.regulator == a)
            .table.filter(
              (e) =>
                (!e.enabledCountries && !e.disabledCountries) ||
                (e.enabledCountries && e.enabledCountries.includes(t)) ||
                (e.disabledCountries && !e.disabledCountries.includes(t))
            )
            .find(
              (t) =>
                (t.nameStartsWith && e.name.startsWith(t.nameStartsWith)) ||
                (t.groups && t.groups.includes(e.group)) ||
                (t.type && t.type == e.type)
            );
          return o ? o.value : "";
        }
        getInstrumentInfoByName(e) {
          return this.http
            .get(S.tradingInstrumentsApi + "/symbols/info", {
              params: new o.d().set("symbols", e),
            })
            .pipe(Object(s.a)(() => []));
        }
        processInstrumentName(e, t) {
          let a = e;
          if (t === h.a.Futures) {
            const e = b.a.calendars.find(
              (e) => Object(w.b)(e.name).toLowerCase() === a
            );
            if (e) {
              const t = new Date(),
                o = e.months.find((e) => e.start <= t && t <= e.close);
              a = o ? Object(w.b)(o.ticker).toLowerCase() : a;
            }
          }
          if (t === h.a.Cryptocurrencies) {
            const t = Object.entries(d.a).find((t) =>
              t.includes(e.toUpperCase())
            );
            t && (a = t[0].toLowerCase());
          }
          return a;
        }
        static getFormattedDateString(e) {
          return (
            e.getUTCFullYear() +
            "-" +
            (e.getUTCMonth() >= 9
              ? e.getUTCMonth() + 1
              : "0" + (e.getUTCMonth() + 1)) +
            "-" +
            (e.getUTCDate() > 9 ? e.getUTCDate() : "0" + e.getUTCDate())
          );
        }
      }
      (S.tradingInstrumentsApi = y.a.production
        ? "https://instruments.fxpro.technology"
        : "http://instruments.live.prod.sb.fxpro.local"),
        (S.ɵfac = function (e) {
          return new (e || S)(
            T["\u0275\u0275inject"](_.a),
            T["\u0275\u0275inject"](M.d),
            T["\u0275\u0275inject"](x.a),
            T["\u0275\u0275inject"](v.a)
          );
        }),
        (S.ɵprov = T["\u0275\u0275defineInjectable"]({
          token: S,
          factory: S.ɵfac,
        }));
    },
    EXlq: function (e, t, a) {
      "use strict";
      a.d(t, "a", function () {
        return l;
      });
      var o = a("2Vo4"),
        r = a("Uiwt"),
        n = a("7+hn"),
        i = a("fXoL");
      class l {
        constructor(e, t) {
          (this.scriptLoaderService = e),
            (this.deviceDetectService = t),
            (this.scriptIsLoaded$ = new o.a(!1)),
            (this.scriptIsLoadedObservable$ =
              this.scriptIsLoaded$.asObservable());
        }
        createChat() {
          if (this.deviceDetectService.isBrowser && !this.scriptIsLoaded$.value)
            return (
              this.scriptLoaderService.createScript(
                "window.__lc = window.__lc || {};\n                window.__lc.license = '8811641';"
              ),
              this.scriptLoaderService.loadScript(
                "https://cdn.livechatinc.com/tracking.js"
              )
            );
        }
        toggleChat() {
          window.LC_API.is_loaded && window.LC_API.is_loaded()
            ? window.LC_API.open_chat_window()
            : (window.LC_API.on_after_load = () => {
                this.scriptIsLoaded$.next(!0), window.LC_API.open_chat_window();
              });
        }
        closeChat() {
          window.LC_API.is_loaded()
            ? window.LC_API.hide_chat_window()
            : (window.LC_API.on_after_load = () => {
                window.LC_API.hide_chat_window();
              });
        }
        minimizeChat() {
          window.LC_API.is_loaded()
            ? window.LC_API.minimize_chat_window()
            : (window.LC_API.on_after_load = () => {
                window.LC_API.minimize_chat_window();
              });
        }
      }
      (l.ɵfac = function (e) {
        return new (e || l)(
          i["\u0275\u0275inject"](n.a),
          i["\u0275\u0275inject"](r.a)
        );
      }),
        (l.ɵprov = i["\u0275\u0275defineInjectable"]({
          token: l,
          factory: l.ɵfac,
        }));
    },
    Ei0P: function (e, t, a) {
      "use strict";
      var o;
      a.d(t, "a", function () {
        return o;
      }),
        (function (e) {
          (e.home = ""),
            (e.guidelines = "guidelines"),
            (e.documents = "documents"),
            (e.legalDocumentation = "legal-documents"),
            (e.siteTcs = "legal-information"),
            (e.kid = "key-information-documents"),
            (e.complaints = "complaints-handling-procedure"),
            (e.privacyPolicy = "privacy-policy"),
            (e.riskDisclosure = "risk-disclosure"),
            (e.cookies = "cookie-preference"),
            (e.tiedAgents = "tied-agents"),
            (e.instrument = "trading/:type/:id"),
            (e.instruments = "trading/:type"),
            (e.fxproMt4 = "trading-platforms/metatrader4"),
            (e.fxproMt5 = "trading-platforms/metatrader5"),
            (e.fxproCtrader = "trading-platforms/ctrader"),
            (e.platforms = "tools/platforms"),
            (e.fxproEdge = "trading-platforms/edge"),
            (e.about = "about"),
            (e.contact = "contact-us"),
            (e.regulationPage = "about/licences"),
            (e.sponsorship = "about/sponsorships"),
            (e.awards = "awards"),
            (e.careers = "careers"),
            (e.partners = "partners"),
            (e.creditRating = "about/credit-score"),
            (e.mt4OrderExecution = "mt4-order-execution"),
            (e.mt5OrderExecution = "mt5-order-execution"),
            (e.ctraderOrderExecution = "ctrader-order-execution"),
            (e.leverageInformation = "leverage-information"),
            (e.corporateActions = "corporate-actions"),
            (e.deposit = "pricing/deposit-methods"),
            (e.whatIsSpreadBetting = "spread-betting"),
            (e.spreadBettingCfd = "spread-betting/compare-to-cfd"),
            (e.SpreadBettingWithFxpro = "spread-betting/fxpro"),
            (e.SpreadBettingLeverageAndMargin =
              "spread-betting/trading-conditions"),
            (e.commissionAndSwapCharges = "commissions-swap-charges"),
            (e.NoDealingDeskExecution = "pricing/model"),
            (e.NotFound404 = "404"),
            (e.ThankYou = "thank-you"),
            (e.Vip = "vip"),
            (e.Feedback = "feedback"),
            (e.Csr = "corporate-social-responsibility"),
            (e.TradeResponsibly = "invest-responsibly"),
            (e.FxproNewsRoom = "news-room"),
            (e.SinglePressRelease = "press-releases/:id"),
            (e.PressReleasesArchive = "press-releases"),
            (e.PressReleasesArchiveWithPage = "press-releases"),
            (e.InTheNews = "fxpro-in-the-news"),
            (e.MultiAccountManager = "partners/mam"),
            (e.gallery = "gallery"),
            (e.helpSectionGlossary = "help-section/traders-glossary/:term"),
            (e.helpSectionGlossaryDefault = "help-section/traders-glossary"),
            (e.helpSectionGlossaryOld = "help-section/glossary/:letter/:term"),
            (e.helpSectionEducationDefault = "help-section/education"),
            (e.helpSectionEducation = "help-section/education/:level"),
            (e.helpSectionEducationSection =
              "help-section/education/:level/:sectionUrl"),
            (e.helpSectionEducationChapter =
              "help-section/education/:level/:sectionUrl/:chapterUrl"),
            (e.helpSectionGlossaryDefaultOld = "help-section/glossary/:letter"),
            (e.howTo = "help-section/how-to-guides"),
            (e.FAQMain = "help-section/faq"),
            (e.FAQArticle = "help-section/faq/:subsection/:question"),
            (e.FAQCategory = "help-section/faq/:subsection"),
            (e.DownloadCentreThankYou = "download-centre-thank-you"),
            (e.EmailDisclaimer = "email-disclaimer"),
            (e.TermsAndConditions = "terms-and-conditions"),
            (e.Sitemap = "sitemap"),
            (e.Design = "design"),
            (e.SwapFree = "swap-free-accounts"),
            (e.WatchWebinar = "watch-webinar"),
            (e.OurProjects = "our-projects"),
            (e.CardDepositIssue = "help-section/card-deposit-issue"),
            (e.WatchAndLearn = "help-section/watch-and-learn"),
            (e.helpSectionEducationArticles =
              "help-section/education/beginners/articles"),
            (e.helpSectionEducationArticle =
              "help-section/education/beginners/articles/:id"),
            (e.FxproPlatformOrderExecution = "fxpro-platform-order-execution"),
            (e.CompanyBenefits = "company-benefits"),
            (e.Safety = "safety"),
            (e.AccountsComparison = "trading-platforms/comparison"),
            (e.FxproTradingPlatform =
              "trading-platforms/fxpro-trading-platform"),
            (e.TradingTools = "trading-tools"),
            (e.TradingToolsMarketHolidays = "trading-tools/market-holidays"),
            (e.TradingToolsEarningCalendar = "trading-tools/earnings-calendar"),
            (e.TradingPlatforms = "trading-platforms"),
            (e.HelpSection = "help-section"),
            (e.Trading = "trading"),
            (e.DemoAccountComponent = "forex-demo-account"),
            (e.ForexOpenAccount = "open-forex-account"),
            (e.ScbChanges = "scb-changes"),
            (e.Investments = "investments"),
            (e.Nfp = "nfp"),
            (e.Fomc = "fomc"),
            (e.InterestRates = "interest-rates"),
            (e.EarningSeason = "earning-seasons"),
            (e.CmeMain = "help-section/cme-education"),
            (e.CmeCategory = "help-section/cme-education/:category"),
            (e.CmeLesson = "help-section/cme-education/:category/:lesson"),
            (e.TradingPlatformComparison = "trading-platforms/comparison");
        })(o || (o = {}));
    },
    F2wG: function (e, t, a) {
      "use strict";
      a.d(t, "a", function () {
        return o;
      });
      const o = new (a("fXoL").InjectionToken)("abTest");
    },
    G9dS: function (e, t, a) {
      "use strict";
      a.d(t, "a", function () {
        return r;
      });
      var o = a("fXoL");
      class r {}
      (r.ɵfac = function (e) {
        return new (e || r)();
      }),
        (r.ɵmod = o["\u0275\u0275defineNgModule"]({ type: r })),
        (r.ɵinj = o["\u0275\u0275defineInjector"]({}));
    },
    GwgX: function (e, t, a) {
      "use strict";
      a.d(t, "a", function () {
        return s;
      });
      var o = a("lJxs"),
        r = a("Ei0P"),
        n = a("4OM5"),
        i = a("fXoL"),
        l = a("tyNb");
      class s {
        constructor(e, t) {
          (this.router = e), (this.menuRestrictionService = t);
        }
        canActivate(e, t) {
          return this.menuRestrictionService.getListOfAvailableMenu().pipe(
            Object(o.a)((e) => {
              const a = t.url.includes("/page")
                  ? t.url.split("/page")[0]
                  : t.url.split(/[?#]/)[0],
                o = e.some(
                  (e) =>
                    a === e.url ||
                    e.subMenu.some((e) =>
                      e.isSubRoute
                        ? t.url.toLowerCase().startsWith(e.url.toLowerCase())
                        : e.url.toLowerCase() == a.toLowerCase()
                    )
                );
              return !o && this.router.navigate([r.a.NotFound404]), o;
            })
          );
        }
      }
      (s.ɵfac = function (e) {
        return new (e || s)(
          i["\u0275\u0275inject"](l.d),
          i["\u0275\u0275inject"](n.a)
        );
      }),
        (s.ɵprov = i["\u0275\u0275defineInjectable"]({
          token: s,
          factory: s.ɵfac,
        }));
    },
    HdJQ: function (e, t, a) {
      "use strict";
      a.d(t, "a", function () {
        return o;
      });
      const o = [
        { label: "UTC+0", offset: 0, fxstreetId: "UTC" },
        { label: "UTC+1", offset: -60, fxstreetId: "W.+Europe+Standard+Time" },
        { label: "UTC+2", offset: -120, fxstreetId: "E.+Europe+Standard+Time" },
        { label: "UTC+3", offset: -180, fxstreetId: "E.+Africa+Standard+Time" },
        { label: "UTC+3.5", offset: -210, fxstreetId: "Iran+Standard+Time" },
        { label: "UTC+4", offset: -240, fxstreetId: "Arabian+Standard+Time" },
        {
          label: "UTC+4.5",
          offset: -270,
          fxstreetId: "Afghanistan+Standard+Time",
        },
        { label: "UTC+5", offset: -300, fxstreetId: "West+Asia+Standard+Time" },
        { label: "UTC+5.5", offset: -330, fxstreetId: "India+Standard+Time" },
        { label: "UTC+5.75", offset: -345, fxstreetId: "Nepal+Standard+Time" },
        {
          label: "UTC+6",
          offset: -360,
          fxstreetId: "Central+Asia+Standard+Time",
        },
        { label: "UTC+6.5", offset: -390, fxstreetId: "Myanmar+Standard+Time" },
        { label: "UTC+7", offset: -420, fxstreetId: "SE+Asia+Standard+Time" },
        { label: "UTC+8", offset: -480, fxstreetId: "China+Standard+Time" },
        {
          label: "UTC+8.75",
          offset: -525,
          fxstreetId: "Aus+Central+W.+Standard+Time",
        },
        { label: "UTC+9", offset: -540, fxstreetId: "Tokyo+Standard+Time" },
        {
          label: "UTC+9.5",
          offset: -570,
          fxstreetId: "Cen.+Australia+Standard+Time",
        },
        {
          label: "UTC+10",
          offset: -600,
          fxstreetId: "E.+Australia+Standard+Time",
        },
        {
          label: "UTC+10.5",
          offset: -630,
          fxstreetId: "Lord+Howe+Standard+Time",
        },
        {
          label: "UTC+11",
          offset: -660,
          fxstreetId: "Bougainville+Standard+Time",
        },
        { label: "UTC+12", offset: -720, fxstreetId: "UTC+12" },
        {
          label: "UTC+12.75",
          offset: -765,
          fxstreetId: "Chatham+Islands+Standard+Time",
        },
        { label: "UTC+13", offset: -780, fxstreetId: "UTC+13" },
        {
          label: "UTC+14",
          offset: -840,
          fxstreetId: "Line+Islands+Standard+Time",
        },
        { label: "UTC-12", offset: 720, fxstreetId: "Dateline+Standard+Time" },
        { label: "UTC-11", offset: 660, fxstreetId: "UTC-11" },
        { label: "UTC-10", offset: 600, fxstreetId: "Aleutian+Standard+Time" },
        {
          label: "UTC-8.5",
          offset: 510,
          fxstreetId: "Marquesas+Standard+Time",
        },
        { label: "UTC-9", offset: 540, fxstreetId: "UTC-09" },
        { label: "UTC-8", offset: 480, fxstreetId: "UTC-08" },
        {
          label: "UTC-7",
          offset: 420,
          fxstreetId: "US+Mountain+Standard+Time",
        },
        {
          label: "UTC-6",
          offset: 360,
          fxstreetId: "Central+America+Standard+Time",
        },
        { label: "UTC-5", offset: 300, fxstreetId: "SA+Pacific+Standard+Time" },
        { label: "UTC-4", offset: 240, fxstreetId: "Paraguay+Standard+Time" },
        {
          label: "UTC-2.5",
          offset: 150,
          fxstreetId: "Newfoundland+Standard+Time",
        },
        {
          label: "UTC-3",
          offset: 180,
          fxstreetId: "E.+South+America+Standard+Time",
        },
        { label: "UTC-2", offset: 120, fxstreetId: "UTC-02" },
        { label: "UTC-1", offset: 60, fxstreetId: "Azores+Standard+Time" },
      ];
    },
    I1XN: function (e, t, a) {
      "use strict";
      a.d(t, "a", function () {
        return c;
      });
      var o = a("LRne"),
        r = a("lJxs"),
        n = a("d37h"),
        i = a("Uiwt"),
        l = a("43M5"),
        s = a("fXoL");
      class c {
        constructor(e, t) {
          (this.http = e),
            (this.deviceDetectService = t),
            (this.iconCache = new Map()),
            (this.createSVGElement = (e) => {
              const t = document.createElement("div");
              t.innerHTML = e;
              const a = t.querySelector("svg");
              return (
                a || console.warn(`No SVG tag in provided string: ${e}`),
                a.setAttribute("fill", "currentColor"),
                a.setAttribute("width", "100%"),
                a.setAttribute("height", "100%"),
                a
              );
            });
        }
        getIcon(e) {
          const t = n.a[e];
          if (!t)
            return (
              console.warn(`Could not find icon '${e}' from config`),
              Object(o.a)(new SVGElement())
            );
          const a = this.iconCache.get(e) || this.loadIcon(t);
          return this.iconCache.set(e, a), a;
        }
        loadIcon(e) {
          return this.deviceDetectService.isBrowser
            ? this.http
                .get(e, { responseType: "text" })
                .pipe(Object(r.a)(this.createSVGElement))
            : Object(o.a)(new SVGElement());
        }
      }
      (c.ɵfac = function (e) {
        return new (e || c)(
          s["\u0275\u0275inject"](l.a),
          s["\u0275\u0275inject"](i.a)
        );
      }),
        (c.ɵprov = s["\u0275\u0275defineInjectable"]({
          token: c,
          factory: c.ɵfac,
        }));
    },
    KO3W: function (e, t, a) {
      "use strict";
      a.d(t, "a", function () {
        return o;
      });
      const o = [{ disabledLanguages: ["hu"] }];
    },
    Lbvf: function (e, t, a) {
      "use strict";
      a.d(t, "a", function () {
        return o;
      });
      const o = new (a("fXoL").InjectionToken)("fxProConstantsResponse");
    },
    Nbnn: function (e, t, a) {
      "use strict";
      a.d(t, "a", function () {
        return _;
      });
      var o = a("tyNb"),
        r = a("jtHE"),
        n = a("XNiG"),
        i = a("itXk"),
        l = a("LRne"),
        s = a("lJxs"),
        c = a("JX91"),
        m = a("/uUt"),
        d = a("1G5W"),
        p = a("3C1k"),
        u = a("3ixp"),
        f = a("ng9D"),
        b = a("xiuU"),
        g = a("Uiwt"),
        h = a("6pIP"),
        w = a("ng6S"),
        x = a("h0X1"),
        y = a("fXoL"),
        k = a("sYmb");
      class _ extends b.a {
        constructor(e, t, a, p, u, b, g, h) {
          super(),
            (this.userCountry = e),
            (this.userJurisdiction = t),
            (this.translateService = a),
            (this.geoIpService = p),
            (this.regulatorService = u),
            (this.router = b),
            (this.deviceDetectService = h),
            (this.restrictionStateSubject = new r.a(1)),
            (this.menuRestrictionStateSubject = new r.a(1)),
            (this.destroyObservable = new n.a());
          const w = this.getDomainLanguage(g.getDomain().host);
          (this.menuRestrictionStateObservable = Object(i.a)(
            this.translateService.onLangChange.pipe(
              Object(s.a)((e) => e.lang.toLowerCase()),
              Object(c.a)(this.translateService.currentLang || w || "en"),
              Object(m.a)()
            ),
            this.regulatorService.regulatorChanged$.pipe(Object(m.a)()),
            Object(l.a)(this.userCountry),
            (e, t, a) => {
              const o = this.deviceDetectService.isBrowser;
              return {
                currentLanguage: e,
                regulator: (o && t.regulator) || f.a.Global,
                country: a,
                selectedCountry: o ? t.country : null,
                domain: g.getDomain().host,
              };
            }
          )),
            this.menuRestrictionStateObservable
              .pipe(Object(d.a)(this.destroyObservable))
              .subscribe(this.menuRestrictionStateSubject),
            (this.restrictionStateObservable = Object(i.a)(
              this.menuRestrictionStateObservable,
              this.router.events.pipe(
                Object(s.a)((e) => {
                  if (e instanceof o.c) return e;
                }),
                Object(m.a)()
              ),
              (e) =>
                Object.assign(Object.assign({}, e), {
                  route: this.router.url.split("?")[0],
                })
            )),
            this.restrictionStateObservable
              .pipe(Object(d.a)(this.destroyObservable))
              .subscribe(this.restrictionStateSubject);
        }
        ngOnDestroy() {
          this.destroyObservable.next(), this.destroyObservable.complete();
        }
        getRestrictionState$() {
          return this.restrictionStateSubject.asObservable();
        }
        getMenuRestrictionState$() {
          return this.menuRestrictionStateSubject;
        }
        getDomainLanguage(e) {
          const t = u.b.find((t) => t.domains.includes(e));
          return t ? t.shortName : null;
        }
      }
      (_.ɵfac = function (e) {
        return new (e || _)(
          y["\u0275\u0275inject"](p.a),
          y["\u0275\u0275inject"](p.e),
          y["\u0275\u0275inject"](k.d),
          y["\u0275\u0275inject"](w.a),
          y["\u0275\u0275inject"](x.a),
          y["\u0275\u0275inject"](o.d),
          y["\u0275\u0275inject"](h.a),
          y["\u0275\u0275inject"](g.a)
        );
      }),
        (_.ɵprov = y["\u0275\u0275defineInjectable"]({
          token: _,
          factory: _.ɵfac,
          providedIn: "root",
        }));
    },
    O6tY: function (e, t, a) {
      "use strict";
      a.d(t, "a", function () {
        return o;
      });
      const o = [
        {
          disabledRegulators: [a("ng9D").a.FCA],
          disabledCountries: ["ZA", "MX"],
          disabledSelectedCountries: ["ZA", "MX"],
          disabledDomains: ["www.fxpro.promo", "www.fxpro.uk"],
        },
      ];
    },
    Or3D: function (e, t, a) {
      "use strict";
      a.d(t, "a", function () {
        return l;
      });
      var o = a("jtHE"),
        r = a("3ixp"),
        n = a("6pIP"),
        i = a("fXoL");
      class l {
        constructor(e) {
          (this.domainService = e),
            (this.languageChangedSubject = new o.a(1)),
            (this.languageChangedObservable =
              this.languageChangedSubject.asObservable());
        }
        changeLanguage(e) {
          const t = e.toLowerCase();
          (document.documentElement.lang = t),
            this.languageChangedSubject.next(t);
        }
        getDefaultLanguage() {
          const e = this.domainService.getDomain(),
            t = r.b.find((t) => t.domains.includes(e.host));
          if (t) return t.shortName;
          if (e.host.endsWith(".fxpro.local")) {
            return e.host.match(/cw-([\w]+)/)[1];
          }
          if (e.host.includes(".uat.")) {
            const t = e.host.replace(".uat.", "."),
              a = r.b.find((e) => e.domains.includes(t));
            return a ? a.shortName : "en";
          }
          return "en";
        }
        setDefaultLanguage(e, t) {
          t.setDefaultLang(e), t.use(e);
        }
        initDefaultLanguage(e) {
          const t = this.getDefaultLanguage();
          this.setDefaultLanguage(t, e);
        }
        setDefaultLanguageCallback(e) {
          return (t) => {
            this.setDefaultLanguage(t, e);
          };
        }
      }
      (l.ɵfac = function (e) {
        return new (e || l)(i["\u0275\u0275inject"](n.a));
      }),
        (l.ɵprov = i["\u0275\u0275defineInjectable"]({
          token: l,
          factory: l.ɵfac,
          providedIn: "root",
        }));
    },
    P5aQ: function (e, t, a) {
      "use strict";
      a.d(t, "a", function () {
        return o;
      });
      const o = {
        CHAINLINK: "LNKUSD",
        POLKADOT: "DOTUSD",
        BITCOIN: "BTCUSD",
        IOTA: "IOTUSD",
        DASH: "DSHUSD",
        ZCASH: "ZECUSD",
        BAT: "BATUSD",
        MONERO: "XMRUSD",
        ETHCLASSIC: "ETCUSD",
        NEO: "NEOUSD",
        BITCOINGOLD: "BTGUSD",
        DOGECOIN: "DOGUSD",
        STELLAR: "XLMUSD",
        EOS: "EOSUSD",
        XRP: "XRPUSD",
        ETHEREUM: "ETHUSD",
        LITECOIN: "LTCUSD",
        BITCOINCASH: "BCHUSD",
        AAVE: "AAVEUSD",
        CARDANO: "ADAUSD",
        FILECOIN: "FILUSD",
        LUNA: "LUNAUSD",
        POLYGON: "MATICUSD",
        SOLANA: "SOLUSD",
        SUSHISWAP: "SUSHIUSD",
        TEZOS: "XTZUSD",
        THETA: "THETAUSD",
        TRON: "TRXUSD",
        UNISWAP: "UNIUSD",
        VECHAIN: "VETUSD",
      };
    },
    RdTv: function (e, t, a) {
      "use strict";
      a.d(t, "a", function () {
        return o;
      });
      const o = [
        {
          id: "lots",
          title: "page_leverageInfo_key68",
          table: [
            { lots: "0-150", margin: "0.20%", leverage: "1:500" },
            { lots: "150.01-200", margin: "0.50%", leverage: "1:200" },
            { lots: "200.01-300", margin: "1.00%", leverage: "1:100" },
            { lots: "300.01-500", margin: "2.00%", leverage: "1:50" },
            { lots: "500+", margin: "3.33%", leverage: "1:33" },
          ],
          disabledCountries: ["MY", "ID", "BR", "JP"],
          crossNote: "page_leverage_information_forex_cross",
        },
        {
          id: "lots",
          title: "page_leverageInfo_key64",
          table: [
            { lots: "0-25", margin: "0.20%", leverage: "1:500" },
            { lots: "25.01-50", margin: "0.50%", leverage: "1:200" },
            { lots: "50.01-100", margin: "1.00%", leverage: "1:100" },
            { lots: "100.01-150", margin: "2.00%", leverage: "1:50" },
            { lots: "150+", margin: "4.00%", leverage: "1:25" },
          ],
          disabledCountries: ["MY", "ID", "BR", "JP"],
        },
        {
          id: "lots",
          title: "page_leverageInfo_key71",
          table: [
            { lots: "0-20", margin: "0.05%", leverage: "1:2000" },
            { lots: "20.01-40", margin: "0.07%", leverage: "1:1500" },
            { lots: "40.01-60", margin: "0.10%", leverage: "1:1000" },
            { lots: "60.01-80", margin: "0.11%", leverage: "1:888" },
            { lots: "80.01-100", margin: "0.14%", leverage: "1:700" },
            { lots: "100.01-120", margin: "0.17%", leverage: "1:600" },
            { lots: "120.01-150", margin: "0.20%", leverage: "1:500" },
            { lots: "150.01-200", margin: "0.50%", leverage: "1:200" },
            { lots: "200.01-300", margin: "1.00%", leverage: "1:100" },
            { lots: "300.01-500", margin: "2.00%", leverage: "1:50" },
            { lots: "500+", margin: "3.33%", leverage: "1:33" },
          ],
          enabledCountries: ["MY", "ID"],
        },
        {
          id: "lots",
          title: "page_leverageInfo_key71",
          table: [
            { lots: "0-60", margin: "0.10%", leverage: "1:1000" },
            { lots: "60.01-80", margin: "0.11%", leverage: "1:888" },
            { lots: "80.01-100", margin: "0.14%", leverage: "1:700" },
            { lots: "100.01-120", margin: "0.17%", leverage: "1:600" },
            { lots: "120.01-150", margin: "0.20%", leverage: "1:500" },
            { lots: "150.01-200", margin: "0.50%", leverage: "1:200" },
            { lots: "200.01-300", margin: "1.00%", leverage: "1:100" },
            { lots: "300.01-500", margin: "2.00%", leverage: "1:50" },
            { lots: "500+", margin: "3.33%", leverage: "1:33" },
          ],
          enabledCountries: ["BR", "JP"],
        },
        {
          id: "lots",
          title: "page_leverageInfo_key72",
          table: [
            { lots: "0-150", margin: "0.20%", leverage: "1:500" },
            { lots: "150.01-200", margin: "0.50%", leverage: "1:200" },
            { lots: "200.01-300", margin: "1.00%", leverage: "1:100" },
            { lots: "300.01-500", margin: "2.00%", leverage: "1:50" },
            { lots: "500+", margin: "3.33%", leverage: "1:33" },
          ],
          enabledCountries: ["MY", "ID", "BR", "JP"],
        },
        {
          id: "lots",
          title: "page_leverageInfo_key64",
          table: [
            { lots: "0-8", margin: "0.11%", leverage: "1:888" },
            { lots: "8.01-25", margin: "0.20%", leverage: "1:500" },
            { lots: "25.01-50", margin: "0.50%", leverage: "1:200" },
            { lots: "50.01-100", margin: "1.00%", leverage: "1:100" },
            { lots: "100.01-150", margin: "2.00%", leverage: "1:50" },
            { lots: "150+", margin: "4.00%", leverage: "1:25" },
          ],
          enabledCountries: ["MY", "ID", "BR", "JP"],
        },
        {
          id: "lots",
          title: "page_leverageInfo_key65",
          table: [
            { lots: "0.01-50", margin: "0.50%", leverage: "1:200" },
            { lots: "50.01-100", margin: "1.00%", leverage: "1:100" },
            { lots: "100.01-150", margin: "2.00%", leverage: "1:50" },
            { lots: "150+", margin: "4.00%", leverage: "1:25" },
          ],
        },
        {
          id: "lots",
          title: "page_leverageInfo_key66",
          table: [
            { lots: "0.01-15", margin: "2.50%", leverage: "1:40" },
            { lots: "15.01-30", margin: "5.00%", leverage: "1:20" },
            { lots: "30.01-50", margin: "10.00%", leverage: "1:10" },
            { lots: "50+", margin: "25.00%", leverage: "1:4" },
          ],
        },
        {
          id: "lots",
          title: "page_leverageInfo_key75",
          table: [
            { lots: "0-25", margin: "0.20%", leverage: "1:500" },
            { lots: "25.01-50", margin: "0.50%", leverage: "1:200" },
            { lots: "50.01-100", margin: "1.00%", leverage: "1:100" },
            { lots: "100.01-150", margin: "1.50%", leverage: "1:66.67" },
            { lots: "150.01-300", margin: "2.00%", leverage: "1:50" },
            { lots: "300.01-500", margin: "4.00%", leverage: "1:25" },
            { lots: "500.01-1000", margin: "8.00%", leverage: "1.12.5" },
            { lots: "1000.01-1500", margin: "10.00%", leverage: "1:10" },
            { lots: "1500.01-2000", margin: "15.00%", leverage: "1:6.67" },
            { lots: "2000.01-2500", margin: "20.00%", leverage: "1:5" },
            { lots: "2500+", margin: "30.00%", leverage: "1:3.33" },
          ],
        },
        {
          id: "lots",
          title: "page_leverageInfo_key74",
          table: [
            { lots: "0-100", margin: "1%", leverage: "1:100" },
            { lots: "100-200", margin: "1.5%", leverage: "1:66.67" },
            { lots: "200-500", margin: "2%", leverage: "1:50" },
            { lots: "500-1250", margin: "4%", leverage: "1:25" },
            { lots: "1250-2250", margin: "10%", leverage: "1:10" },
            { lots: "2250-3500", margin: "16%", leverage: "1:6.25" },
            { lots: "3500+", margin: "20%", leverage: "1:5" },
          ],
        },
        {
          id: "lots",
          title: "page_leverageInfo_key67",
          table: [
            { lots: "0-50", margin: "2.00%", leverage: "1:50" },
            { lots: "50-100", margin: "4.00%", leverage: "1:25" },
            { lots: "100-150", margin: "10.00%", leverage: "1:10" },
            { lots: "150-300", margin: "16.00%", leverage: "1:6.25" },
            { lots: "300+", margin: "20.00%", leverage: "1:5" },
          ],
        },
        {
          id: "lots",
          title: "page_leverageInfo_key69",
          table: [
            { lots: "0-20", margin: "0.50%", leverage: "1:200" },
            { lots: "20-100", margin: "2.50%", leverage: "1:40" },
            { lots: "100+", margin: "5.00%", leverage: "1:20" },
          ],
        },
        {
          id: "maxExposure",
          title: "page_leverageInfo_key73",
          subtitle: "page_leverageInfo_tableValueInnerTitle1",
          table: [
            {
              maxExposureVal: "500k",
              maxExposureValCn: "0-50\u4e07",
              margin: "0.50%",
              leverage: "200",
            },
            {
              maxExposureVal: "250k",
              maxExposureValCn: "50-75\u4e07",
              margin: "1.00%",
              leverage: "100",
            },
            {
              maxExposureVal: "250k",
              maxExposureValCn: "75\u4e07-100\u4e07",
              margin: "2.00%",
              leverage: "50",
            },
          ],
        },
        {
          id: "maxExposure",
          subtitle: "page_leverageInfo_tableValueInnerTitle2",
          table: [
            {
              maxExposureVal: "500k",
              maxExposureValCn: "0-50\u4e07",
              margin: "1.00%",
              leverage: "100",
            },
            {
              maxExposureVal: "250k",
              maxExposureValCn: "50-75\u4e07",
              margin: "2.00%",
              leverage: "50",
            },
            {
              maxExposureVal: "250k",
              maxExposureValCn: "75\u4e07-100\u4e07",
              margin: "3.3333%",
              leverage: "30",
            },
          ],
        },
        {
          id: "altcoin",
          subtitle: "page_leverageInfo_tableValueInnerTitle3",
          table: [
            {
              altcoinVal: "Chainlink, Solana",
              margin: "2.00%",
              leverage: "1:50",
            },
            {
              altcoinVal:
                "Dash, EthereumClassic, Iota, Neo, Monero, Zcash, AAVE, BAT, Filecoin, Uniswap, Tezos, Dogecoin, Eos, Stellar, Sushiswap, Theta, Tron, Vechain",
              margin: "3.3333%",
              leverage: "1:30",
            },
          ],
        },
      ];
    },
    Uiwt: function (e, t, a) {
      "use strict";
      a.d(t, "a", function () {
        return b;
      });
      var o = a("ofXK"),
        r = a("fXoL"),
        n = a("jtHE"),
        i = a("XNiG"),
        l = a("xgIS"),
        s = a("Kj3r"),
        c = a("JX91"),
        m = a("lJxs"),
        d = a("1G5W"),
        p = a("/uUt"),
        u = a("0gde"),
        f = a("khT+");
      class b {
        constructor(e, t) {
          (this.platformId = e),
            (this.userAgent = t),
            (this.isDesktop$ = new n.a(1)),
            (this.windowSize$ = new n.a(1)),
            (this.windowWidth$ = new n.a(1)),
            (this.destroyObservable = new i.a()),
            (this.isBrowser = Object(o.z)(e)),
            (this.isIE11 =
              this.isBrowser &&
              !!window.MSInputMethodContext &&
              !!document.documentMode),
            this.isBrowser &&
              Object(l.a)(window, "resize")
                .pipe(
                  Object(s.a)(100),
                  Object(c.a)({
                    width: window.innerWidth,
                    height: window.innerHeight,
                  }),
                  Object(m.a)((e) => ({
                    width: window.innerWidth,
                    height: window.innerHeight,
                  })),
                  Object(d.a)(this.destroyObservable)
                )
                .subscribe(this.windowSize$),
            this.windowSize$
              .pipe(
                Object(m.a)((e) => e.width >= 1024),
                Object(p.a)(),
                Object(d.a)(this.destroyObservable)
              )
              .subscribe(this.isDesktop$),
            this.windowSize$
              .pipe(
                Object(m.a)((e) => e.width),
                Object(p.a)(),
                Object(d.a)(this.destroyObservable)
              )
              .subscribe(this.windowWidth$);
        }
        ngOnDestroy() {
          this.destroyObservable.next(), this.destroyObservable.complete();
        }
        isDesktopObservable() {
          return this.isDesktop$.asObservable();
        }
        getOs() {
          if (this.isBrowser) {
            const e = window.navigator.userAgent,
              t = window.navigator.platform;
            return -1 !==
              ["Macintosh", "MacIntel", "MacPPC", "Mac68K"].indexOf(t)
              ? u.a.Mac
              : /iPad|iPhone|iPod/.test(e)
              ? u.a.Ios
              : /Android/.test(e)
              ? u.a.Android
              : u.a.Windows;
          }
          {
            const e = this.userAgent;
            return /iPad|iPhone|iPod/.test(e)
              ? u.a.Ios
              : /Android/.test(e)
              ? u.a.Android
              : u.a.Windows;
          }
        }
        isDesktop() {
          return this.isBrowser
            ? window.innerWidth >= 1024
            : this.getOs() == u.a.Windows;
        }
        isRetina() {
          return this.isBrowser && window.devicePixelRatio > 1;
        }
        getScreenSize() {
          return this.isBrowser && window.innerWidth;
        }
      }
      (b.ɵfac = function (e) {
        return new (e || b)(
          r["\u0275\u0275inject"](r.PLATFORM_ID),
          r["\u0275\u0275inject"](f.a)
        );
      }),
        (b.ɵprov = r["\u0275\u0275defineInjectable"]({
          token: b,
          factory: b.ɵfac,
          providedIn: "root",
        }));
    },
    Vp7h: function (e, t, a) {
      "use strict";
      a.d(t, "a", function () {
        return m;
      });
      var o,
        r = a("O6tY"),
        n = a("iAqX"),
        i = a("ng9D"),
        l = a("KO3W"),
        s = a("Xa/i"),
        c = a("CUJp");
      !(function (e) {
        (e.Beta = "beta"), (e.New = "new");
      })(o || (o = {}));
      const m = [
        {
          id: "menu_market",
          visible: !0,
          subMenu: [
            {
              id: "menu_forex",
              url: "/trading/forex",
              visible: !0,
              isSubRoute: !0,
              description: "header_menu_forex_description",
            },
            {
              id: "menu_futures",
              url: "/trading/futures",
              visible: !0,
              isSubRoute: !0,
              description: "header_menu_futures_description",
            },
            {
              id: "menu_spot_indices",
              url: "/trading/indices",
              visible: !0,
              isSubRoute: !0,
              description: "header_menu_spot_indices_description",
            },
            {
              id: "menu_shares",
              url: "/trading/shares",
              visible: !0,
              isSubRoute: !0,
              description: "header_menu_shares_description",
            },
            {
              id: "menu_spot_metals",
              url: "/trading/metals",
              visible: !0,
              isSubRoute: !0,
              description: "header_menu_spot_metals_description",
            },
            {
              id: "menu_spot_energies",
              url: "/trading/energies",
              visible: !0,
              isSubRoute: !0,
              description: "header_menu_spot_energies_description",
            },
            {
              id: "menu_spread_betting",
              url: "/spread-betting",
              visible: !0,
              restrictionConfig: c.a,
              description: "header_menu_spread_betting_description",
            },
            {
              id: "menu_cryptocurrencies",
              url: "/trading/cryptocurrencies",
              visible: !0,
              isSubRoute: !0,
              breadcrumbsLabel: "breadcrumb_cryptocurrencies",
              restrictionConfig: r.a,
              description: "header_menu_cryptocurrencies_description",
            },
            {
              id: "menu_commission_and_swap_charges",
              url: "/commissions-swap-charges",
              visible: !1,
              description:
                "header_menu_commission_and_swap_charges_description",
            },
          ],
        },
        {
          id: "menu_investments",
          url: "/investments",
          visible: !0,
          hideInFooter: !0,
          showNewBadge: !0,
          restrictionConfig: [
            { enabledSelectedCountries: ["GB"], enabledCountries: ["GB"] },
          ],
          subMenu: [],
        },
        {
          id: "menu_tools",
          visible: !0,
          subMenu: [
            {
              id: "menu_fxpro_trading_platform",
              url: "/trading-platforms/fxpro-trading-platform",
              visible: !0,
              group: "menu_platforms",
              description: "header_menu_fxpro_trading_platform_description",
            },
            {
              id: "menu_fxpro_mt4",
              url: "/trading-platforms/metatrader4",
              visible: !0,
              group: "menu_platforms",
              description: "header_menu_fxpro_mt4_description",
            },
            {
              id: "menu_fxpro_mt5",
              url: "/trading-platforms/metatrader5",
              visible: !0,
              group: "menu_platforms",
              description: "header_menu_fxpro_mt5_description",
            },
            {
              id: "menu_fxpro_ctrader",
              url: "/trading-platforms/ctrader",
              visible: !0,
              group: "menu_platforms",
              description: "header_menu_fxpro_ctrader_description",
            },
            {
              id: "menu_comparison_platforms",
              url: "/trading-platforms/comparison",
              visible: !0,
              group: "menu_platforms",
              description: "header_menu_comparison_platforms_description",
            },
            {
              id: "menu_fxpro_trading_app",
              url: "/trading-tools/app",
              visible: !0,
              group: "menu_platforms",
              description: "header_menu_fxpro_trading_app_description",
            },
            {
              id: "menu_education",
              url: "/help-section/education/beginners",
              visible: !0,
              restrictionConfig: n.c,
              group: "menu_tradingTools",
              hideInSitemap: !0,
              description: "header_menu_education_description",
            },
            {
              id: "menu_economic_calendar",
              url: "/trading-tools/forex-economic-calendar",
              visible: !0,
              group: "menu_tradingTools",
              description: "header_menu_economic_calendar_description",
            },
            {
              id: "menu_forex_news",
              url: "https://fxpro.news",
              visible: !0,
              group: "menu_tradingTools",
              hideInSitemap: !0,
              description: "header_menu_forex_news_description",
            },
            {
              id: "menu_earnings_calendar",
              url: "/trading-tools/earnings-calendar",
              visible: !1,
            },
            {
              id: "menu_calculators",
              url: "/trading-tools/calculators/all-in-one",
              visible: !0,
              group: "menu_tradingTools",
              description: "header_menu_calculators_description",
            },
            {
              id: "menu_fxpro_tools",
              url: "/trading-tools",
              visible: !0,
              group: "menu_tradingTools",
              description: "header_menu_fxpro_tools_description",
            },
            {
              id: "menu_fxpro_tools_traders_dashboard",
              url: "/trading-tools/traders-dashboard",
              visible: !1,
            },
            {
              id: "menu_market_holidays",
              url: "/trading-tools/market-holidays",
              visible: !1,
            },
            {
              id: "menu_fxpro_tools_algo_trading",
              url: "/trading-tools/algo-trading",
              visible: !1,
            },
            {
              id: "menu_trading_central",
              url: "/trading-tools/trading-signals",
              visible: !1,
            },
            {
              id: "menu_download_centre",
              url: "/trading-platforms/download-centre",
              visible: !1,
            },
            {
              id: "menu_forex_webinars",
              url: "/trading-tools/forex-webinars",
              visible: !1,
            },
            {
              id: "menu_watch_webinar",
              url: "/watch-webinar",
              visible: !1,
              restrictionConfig: [{ enabledLanguages: ["zh", "tw"] }],
            },
            {
              id: "menu_virtual_private_server",
              url: "/trading-tools/fxpro-virtual-private-server",
              visible: !1,
            },
          ],
        },
        {
          id: "menu_pricing",
          visible: !0,
          subMenu: [
            {
              id: "menu_no_dealing_desk_execution",
              url: "/pricing/model",
              visible: !0,
              description: "header_menu_no_dealing_desk_execution_description",
            },
            {
              id: "menu_deposit",
              url: "/pricing/deposit-methods",
              visible: !0,
              description: "header_menu_deposit_description",
            },
            {
              id: "menu_swap_free",
              url: "/swap-free-accounts",
              visible: !0,
              restrictionConfig: [
                {
                  enabledCountries: [
                    "AF",
                    "AL",
                    "DZ",
                    "AZ",
                    "BH",
                    "BD",
                    "BA",
                    "BN",
                    "EG",
                    "GM",
                    "ID",
                    "JO",
                    "KZ",
                    "KW",
                    "KG",
                    "LB",
                    "MY",
                    "MV",
                    "MA",
                    "NG",
                    "OM",
                    "PK",
                    "PS",
                    "QA",
                    "SA",
                    "TJ",
                    "TR",
                    "TM",
                    "AE",
                    "UZ",
                  ],
                },
              ],
              description: "header_menu_swap_free_description",
            },
            {
              id: "menu_getting_started_with_us",
              url: "/open-forex-account",
              visible: !0,
              description: "header_menu_cryptocurrencies_description",
            },
          ],
        },
        {
          id: "menu_about",
          visible: !0,
          subMenu: [
            {
              id: "menu_about_sub",
              url: "/about",
              visible: !0,
              showStickyMenu: !0,
              stickyGroup: 1,
              description: "header_menu_about_sub_description",
            },
            {
              id: "menu_regulation",
              url: "/about/licences",
              visible: !1,
              showStickyMenu: !0,
              stickyGroup: 1,
              description: "header_menu_regulation_description",
            },
            {
              id: "menu_awards",
              url: "/awards",
              visible: !1,
              showStickyMenu: !0,
              stickyGroup: 1,
            },
            {
              id: "menu_csr",
              url: "/corporate-social-responsibility",
              visible: !1,
              showStickyMenu: !0,
              stickyGroup: 1,
            },
            {
              id: "menu_our_projects",
              url: "/our-projects",
              visible: !1,
              showStickyMenu: !0,
              stickyGroup: 1,
            },
            {
              id: "menu_credit_rating",
              url: "/about/credit-score",
              visible: !0,
              description: "header_menu_credit_rating_description",
            },
            {
              id: "menu_sponsorship",
              url: "/about/sponsorships",
              visible: !0,
              type: o.New,
              description: "header_menu_sponsorship_description",
            },
            {
              id: "menu_partners",
              url: "/partners",
              visible: !0,
              description: "header_menu_partners_description",
            },
            {
              id: "menu_multi_account_manager",
              url: "/partners/mam",
              visible: !1,
              showStickyMenu: !0,
              stickyGroup: 3,
              isSubRoute: !1,
              restrictionConfig: [
                {
                  disabledCountries: [
                    "GB",
                    "CY",
                    "IE",
                    "AT",
                    "BE",
                    "BG",
                    "HR",
                    "CZ",
                    "DK",
                    "EE",
                    "FI",
                    "FR",
                    "DE",
                    "GR",
                    "HU",
                    "IT",
                    "LV",
                    "LT",
                    "LU",
                    "MT",
                    "NL",
                    "PL",
                    "PT",
                    "RO",
                    "SK",
                    "SI",
                    "ES",
                    "SE",
                  ],
                },
              ],
            },
            {
              id: "menu_news_room",
              url: "/news-room",
              visible: !0,
              restrictionConfig: l.a,
              description: "header_menu_news_room_description",
            },
            {
              id: "menu_careers",
              url: "/careers",
              visible: !0,
              stickyGroup: 2,
              description: "header_menu_careers_description",
            },
            {
              id: "menu_safety",
              url: "/safety",
              visible: !0,
              description: "header_menu_safety_description",
            },
            {
              id: "menu_contact",
              url: "/contact-us",
              visible: !0,
              description: "header_menu_contact_description",
            },
            {
              id: "menu_get_help",
              url: "/help-section/faq",
              visible: !0,
              description: "header_menu_get_help_description",
            },
            {
              id: "menu_trade_responsibly",
              url: "/invest-responsibly",
              visible: !1,
            },
            {
              id: "\u041f\u0440\u0435\u0438\u043c\u0443\u0449\u0435\u0441\u0442\u0432\u0430 FxPro",
              url: "/company-benefits",
              visible: !1,
              showStickyMenu: !0,
              stickyGroup: 1,
              restrictionConfig: { enabledLanguages: ["ru"] },
            },
          ],
        },
        {
          id: "menu_partners",
          url: "/partners",
          visible: !0,
          hideInFooter: !0,
          restrictionConfig: {
            disabledSelectedCountries: ["GB"],
            disabledCountries: ["GB"],
          },
          subMenu: [],
        },
        {
          id: "menu_documentation",
          visible: !0,
          hideInHeader: !0,
          subMenu: [
            {
              id: "menu_site_tcs",
              url: "/documents/legal-information",
              visible: !0,
              showStickyMenu: !0,
              description: "header_menu_site_tcs_description",
            },
            {
              id: "menu_legal_docs",
              url: "/documents/legal-documents",
              visible: !0,
              showStickyMenu: !0,
              description: "header_menu_legal_docs_description",
            },
            {
              id: "menu_corporate_actions",
              url: "/corporate-actions",
              visible: !0,
              showStickyMenu: !0,
              description: "header_menu_corporate_actions_description",
            },
            {
              id: "menu_kid",
              url: "/documents/key-information-documents",
              visible: !0,
              showStickyMenu: !0,
              restrictionConfig: [{ disabledRegulators: [i.a.FSCM, i.a.FSAS] }],
              description: "header_menu_kid_description",
            },
            {
              id: "menu_complaints",
              url: "/documents/complaints-handling-procedure",
              visible: !0,
              showStickyMenu: !0,
              description: "header_menu_complaints_description",
            },
            {
              id: "menu_privacy_policy",
              url: "/documents/privacy-policy",
              visible: !0,
              showStickyMenu: !0,
              description: "header_menu_cryptocurrencies_description",
            },
            {
              id: "menu_risk_disclosure",
              url: "/documents/risk-disclosure",
              visible: !0,
              showStickyMenu: !0,
              description: "header_menu_risk_disclosure_description",
            },
            {
              id: "menu_email_disclaimer",
              url: "/documents/email-disclaimer",
              visible: !0,
              showStickyMenu: !0,
              hideInSitemap: !0,
              description: "header_menu_email_disclaimer_description",
            },
            {
              id: "menu_cookies",
              url: "/documents/cookie-preference",
              visible: !0,
              showStickyMenu: !0,
              description: "header_menu_cookies_description",
            },
            {
              id: "menu_tied_agents",
              url: "/documents/tied-agents",
              visible: !0,
              showStickyMenu: !0,
              restrictionConfig: [{ disabledRegulators: [i.a.FSCM, i.a.FSAS] }],
              description: "header_menu_tied_agents_description",
            },
            {
              id: "menu_terms_and_conditions",
              url: "/documents/terms-and-conditions",
              visible: !0,
              showStickyMenu: !0,
              description: "header_menu_terms_and_conditions_description",
            },
          ],
        },
        {
          id: "menu_execution",
          visible: !0,
          hideInHeader: !0,
          subMenu: [
            {
              id: "menu_fxpro_platform_order_execution",
              url: "/fxpro-platform-order-execution",
              visible: !0,
              showStickyMenu: !0,
              restrictionConfig: {
                disabledLanguages: ["zh"],
                disabledCountries: ["CN"],
              },
              description: "header_menu_execution_description",
            },
            {
              id: "menu_mt4_oe",
              url: "/mt4-order-execution",
              visible: !0,
              showStickyMenu: !0,
              description: "header_menu_mt4_oe_description",
            },
            {
              id: "menu_mt5_oe",
              url: "/mt5-order-execution",
              visible: !0,
              showStickyMenu: !0,
              description: "header_menu_mt5_oe_description",
            },
            {
              id: "menu_ctrader_oe",
              url: "/ctrader-order-execution",
              visible: !0,
              showStickyMenu: !0,
              description: "header_menu_ctrader_oe_description",
            },
            {
              id: "menu_leverage_information",
              url: "/leverage-information",
              visible: !0,
              showStickyMenu: !0,
              description: "header_menu_leverage_information_description",
            },
          ],
        },
        {
          id: "menu_spread_betting",
          visible: !1,
          restrictionConfig: c.a,
          subMenu: [
            {
              id: "menu_what_is_spread_betting",
              url: "/spread-betting",
              visible: !1,
              showStickyMenu: !0,
              description: "header_menu_what_is_spread_betting_description",
            },
            {
              id: "menu_spread_betting_vs_cfd",
              url: "/spread-betting/compare-to-cfd",
              visible: !1,
              showStickyMenu: !0,
              description: "header_menu_spread_betting_vs_cfd_description",
            },
            {
              id: "menu_spread_betting_with_fxpro",
              url: "/spread-betting/fxpro",
              visible: !1,
              showStickyMenu: !0,
              description: "header_menu_spread_betting_with_fxpro_description",
            },
            {
              id: "menu_spread_betting_leverage_margin",
              url: "/spread-betting/trading-conditions",
              visible: !1,
              showStickyMenu: !0,
              description:
                "header_menu_spread_betting_leverage_margin_description",
            },
          ],
        },
        {
          id: "menu_news_room",
          visible: !1,
          subMenu: [
            {
              id: "menu_news_room",
              url: "/news-room",
              hideInSitemap: !0,
              visible: !1,
              showStickyMenu: !0,
              stickyGroup: 1,
              restrictionConfig: l.a,
            },
            {
              id: "menu_press_releases",
              url: "/press-releases",
              visible: !1,
              showStickyMenu: !1,
              isSubRoute: !0,
              hideFromSearch: !0,
              restrictionConfig: s.b,
              hideInSitemap: !0,
              description: "header_menu_press_releases_description",
            },
            {
              id: "menu_press_releases",
              url: "/press-releases",
              visible: !1,
              showStickyMenu: !0,
              isSubRoute: !0,
              stickyGroup: 1,
              restrictionConfig: s.b,
              description: "header_menu_press_releases_description",
            },
            {
              id: "menu_in_the_news",
              url: "/fxpro-in-the-news",
              visible: !1,
              showStickyMenu: !0,
              stickyGroup: 1,
            },
            {
              id: "menu_gallery",
              url: "/gallery",
              visible: !1,
              showStickyMenu: !0,
              stickyGroup: 1,
            },
          ],
        },
        {
          id: "menu_get_started",
          visible: !1,
          subMenu: [
            {
              id: "menu_forex_open_account",
              url: "/open-forex-account",
              visible: !1,
              showStickyMenu: !0,
              stickyGroup: 1,
            },
            {
              id: "menu_demo_account",
              url: "/forex-demo-account",
              visible: !1,
              showStickyMenu: !0,
              stickyGroup: 1,
            },
          ],
        },
        {
          id: "menu_calculators",
          visible: !1,
          subMenu: [
            {
              id: "menu_calculators_allInOne",
              url: "/trading-tools/calculators/all-in-one",
              visible: !1,
              showStickyMenu: !0,
            },
            {
              id: "menu_calculators_stopLoss",
              url: "/trading-tools/calculators/stop-loss-take-profit",
              visible: !1,
              showStickyMenu: !0,
            },
            {
              id: "menu_calculators_margin",
              url: "/trading-tools/calculators/margin",
              visible: !1,
              showStickyMenu: !0,
            },
            {
              id: "menu_calculators_profit",
              url: "/trading-tools/calculators/profit",
              visible: !1,
              showStickyMenu: !0,
            },
            {
              id: "menu_calculators_swap",
              url: "/trading-tools/calculators/swap",
              visible: !1,
              showStickyMenu: !0,
            },
            {
              id: "menu_calculators_pip",
              url: "/trading-tools/calculators/pip",
              visible: !1,
              showStickyMenu: !0,
            },
            {
              id: "menu_calculators_currencyConverter",
              url: "/trading-tools/calculators/currency-converter",
              visible: !1,
              showStickyMenu: !0,
            },
            {
              id: "menu_calculators_ctraderCommission",
              url: "/trading-tools/calculators/ctrader-commission",
              visible: !1,
              showStickyMenu: !0,
            },
            {
              id: "menu_calculators_costCalculationTool",
              url: "/trading-tools/calculators/cost-calculation-tool",
              visible: !1,
              showStickyMenu: !0,
            },
          ],
        },
        {
          id: "menu_ThankYou",
          visible: !1,
          hideFromSearch: !0,
          url: "/thank-you",
          subMenu: [],
        },
        { id: "menu_vip", visible: !1, url: "/vip", subMenu: [] },
        { id: "menu_feedback", visible: !1, url: "/feedback", subMenu: [] },
        {
          id: "menu_ScbChanges",
          visible: !1,
          url: "/scb-changes",
          subMenu: [],
        },
        { id: "menu_Nfp", visible: !1, url: "/nfp", subMenu: [] },
        {
          id: "menu_help_section",
          visible: !1,
          subMenu: [
            {
              id: "menu_education_basic",
              url: "/help-section/education/beginners",
              hideInSitemap: !0,
              visible: !1,
              isSubRoute: !0,
              showStickyMenu: !0,
              restrictionConfig: n.c,
            },
            {
              id: "menu_education_advanced",
              url: "/help-section/education/advanced",
              visible: !1,
              isSubRoute: !0,
              showStickyMenu: !0,
              restrictionConfig: n.c,
            },
            {
              id: "menu_education_basics",
              url: "/help-section/education/beginners/basics",
              hideInSitemap: !0,
              visible: !1,
              isSubRoute: !0,
              showStickyMenu: !0,
              restrictionConfig: n.c,
            },
            {
              id: "menu_education_fundamentalAnalysis",
              url: "/help-section/education/beginners/fundamental-analysis-session",
              visible: !1,
              isSubRoute: !0,
              showStickyMenu: !0,
              restrictionConfig: n.c,
            },
            {
              id: "menu_education_technicalAnalysis",
              url: "/help-section/education/beginners/technical-analysis-session",
              visible: !1,
              isSubRoute: !0,
              showStickyMenu: !0,
              restrictionConfig: n.c,
            },
            {
              id: "menu_education_psychology",
              url: "/help-section/education/beginners/psychology",
              visible: !1,
              isSubRoute: !0,
              showStickyMenu: !0,
              restrictionConfig: n.c,
            },
            {
              id: "menu_education_advanced_fundamental",
              url: "/help-section/education/advanced/fundamental-analysis-advanced",
              visible: !1,
              isSubRoute: !0,
              showStickyMenu: !0,
              restrictionConfig: n.c,
            },
            {
              id: "menu_cme_educational",
              url: "/help-section/cme-education",
              visible: !1,
              isSubRoute: !0,
              showStickyMenu: !0,
              restrictionConfig: n.a,
            },
            {
              id: "menu_how_to",
              url: "/help-section/how-to-guides",
              visible: !1,
              isSubRoute: !0,
              showStickyMenu: !0,
              restrictionConfig: l.a,
            },
            {
              id: "menu_faq",
              url: "/help-section/faq",
              visible: !1,
              isSubRoute: !0,
              showStickyMenu: !0,
            },
            {
              id: "menu_glossary",
              url: "/help-section/traders-glossary",
              visible: !1,
              isSubRoute: !0,
              showStickyMenu: !0,
            },
            {
              id: "menu_card_deposit_issue",
              url: "/help-section/card-deposit-issue",
              visible: !1,
              showStickyMenu: !0,
            },
            {
              id: "menu_education_articles",
              url: "/help-section/education/beginners/articles",
              visible: !1,
              isSubRoute: !0,
              showStickyMenu: !0,
              restrictionConfig: n.b,
            },
            {
              id: "menu_watch_and_learn",
              url: "/help-section/watch-and-learn",
              visible: !1,
              isSubRoute: !0,
              showStickyMenu: !0,
              restrictionConfig: l.a,
            },
          ],
        },
        { id: "menu_sitemap", visible: !1, url: "/sitemap", subMenu: [] },
        { id: "menu_design", visible: !1, url: "/design", subMenu: [] },
        { id: "menu_fomc", visible: !1, url: "/fomc", subMenu: [] },
        {
          id: "menu_thank_you",
          url: "/download-centre-thank-you",
          visible: !1,
          subMenu: [],
        },
        {
          id: "menu_interest_rates",
          visible: !1,
          url: "/interest-rates",
          subMenu: [],
        },
        {
          id: "menu_earning_seasons",
          visible: !1,
          url: "/earning-seasons",
          subMenu: [],
        },
      ];
    },
    X8WZ: function (e, t, a) {
      "use strict";
      a.d(t, "a", function () {
        return o;
      });
      const o = {
        MT4: {
          Windows:
            "https://download.mql5.com/cdn/web/fxpro.financial.services/mt4/fxprocom4setup.exe",
          Mac: "https://fxprorepo.blob.core.windows.net/repo/datarepo/apps/MetaTrader4_mac.dmg?utm_source=support.metaquotes.net&utm_campaign=download.mt4.macos",
          Terminal:
            "https://download.mql5.com/cdn/web/fxpro.financial.services/mt4/fxprocom4multisetup.exe",
          Web: "https://mt4webtrader.fxpro.com",
          Ios: "https://apps.apple.com/us/app/metatrader-4/id496212596",
          IosNonEU: "https://fxpro.onelink.me/NHVX",
          Android:
            "https://download.mql5.com/cdn/mobile/mt4/android?server=FxPro.com-Demo01,FxPro.com-Demo02,FxPro.com-Demo03,FxPro.com-Demo04,FxPro.com-Demo05,FxPro.com-Real01,FxPro.com-Real02,FxPro.com-Real03,FxPro.com-Real04,FxPro.com-Real05",
          AndroidCn:
            "https://download.mql5.com/cdn/web/metaquotes.software.corp/mt4/metatrader4.apk",
          MacCn:
            "https://fxprorepo.blob.core.windows.net/repo/datarepo/apps/mt4_mac.dmg",
        },
        MT5: {
          Windows:
            "https://download.mql5.com/cdn/web/fxpro.financial.services/mt5/fxpro5setup.exe",
          Mac: "https://fxprorepo.blob.core.windows.net/repo/datarepo/apps/MetaTrader5_mac.dmg?utm_source=support.metaquotes.net&utm_campaign=download.mt5.macos",
          Web: "https://mt5webtrader.fxpro.com",
          Ios: "https://apps.apple.com/us/app/metatrader-5/id413251709",
          IosNonEU: "https://fxpro.onelink.me/NHVX",
          Android:
            "https://download.mql5.com/cdn/mobile/mt5/android?server=FxPro-MT5",
          AndroidCn:
            "https://download.mql5.com/cdn/web/metaquotes.software.corp/mt5/metatrader5.apk",
          MacCn:
            "https://fxprorepo.blob.core.windows.net/repo/datarepo/apps/mt5_mac.dmg",
        },
        cTrader: {
          Windows: "https://fxpro.ctrader.com/ctrader-FxPro-fxpro-setup.exe",
          cAlgo: "http://fxpro.ctrader.com/calgo-FxPro-fxpro-setup.exe",
          Web: "http://ct.fxpro.com",
          Ios: "https://apps.apple.com/cy/app/ctrader-for-fxpro-clients/id838925664",
          Android:
            "https://play.google.com/store/apps/details?id=com.fxproctrader.ct",
          AndroidCn:
            "https://fxprorepo.blob.core.windows.net/repo/datarepo/apps/ctrader-cn.fxpro.apk",
          IosCn:
            "https://apps.apple.com/us/app/fxpro-ctrader-\u4e2d\u56fd/id1095695729?ls=1",
        },
        Edge: {
          Web: "https://edge.fxpro.co.uk",
          Ios: "https://itunes.apple.com/app/fxpro-edge-spread-betting-app/id1347909005?ls=1&mt=8",
          Android:
            "https://play.google.com/store/apps/details?id=com.fxpro.edge&hl=en",
        },
        DirectApp: {
          NonEU: "https://fxpro.app/App_nonEU",
          EU: "https://fxpro.app/App_EU",
          Ru: "https://fxpro.app/App_RU",
          IosRu:
            "https://apps.apple.com/ru/app/fxpro-\u043d\u043e\u0432\u043e\u0441\u0442\u0438-\u0438-\u0430\u043d\u0430\u043b\u0438\u0442\u0438\u043a\u0430/id1560667652",
        },
        DirectAppStores: {
          AndroidNonEu:
            "https://play.google.com/store/apps/details?id=com.fxpro.direct.application",
          AndroidEu:
            "https://play.google.com/store/apps/details?id=com.fxpro.direct.app",
          IosNonEu:
            "https://apps.apple.com/us/app/fxpro-online-trading/id1388838533",
          IosEu:
            "https://apps.apple.com/us/app/fxpro-cfd-forex-trading/id1436961771",
          IosRu:
            "https://apps.apple.com/us/app/fxpro-news-and-analytics/id1560667652",
        },
      };
    },
    "Xa/i": function (e, t, a) {
      "use strict";
      a.d(t, "a", function () {
        return o;
      }),
        a.d(t, "b", function () {
          return r;
        });
      const o = [
          { url: "no-fees-on-deposits", publishedTime: "08/11/2018, 09:42" },
          {
            url: "launch-iphone-app-trading-platform",
            publishedTime: "10/03/2010, 14:01",
          },
          {
            url: "fxpro-teams-bloomberg-tv",
            publishedTime: "11/05/2010, 14:27",
          },
          {
            url: "new-appointments-bring-unique-global-insight",
            publishedTime: "25/05/2010, 14:28",
          },
          {
            url: "fxpro-pledges-financial-support",
            publishedTime: "28/05/2010, 14:29",
          },
          {
            url: "aston-villa-shirt-sponsorship",
            publishedTime: "11/06/2010, 14:30",
          },
          {
            url: "fxpro-announces-second-shirt-sponsorship-fulham-fc",
            publishedTime: "25/06/2010, 14:33",
          },
          {
            url: "jim-sutcliffe-appointed-chairman",
            publishedTime: "29/07/2010, 07:45",
          },
          {
            url: "michael-sarris-non-executive-director",
            publishedTime: "01/09/2010, 08:20",
          },
          {
            url: "fxpro-announces-the-launch-of-4-new-instruments",
            publishedTime: "28/10/2010, 07:31",
          },
          {
            url: "fxpro-announces-opening-its-new-uk-subsidiary---fxpro-uk-limited",
            publishedTime: "15/11/2010, 08:37",
          },
          {
            url: "fxpro-wins-financial-times-investors-chronicle-investment-awards-2010---f",
            publishedTime: "01/12/2010, 08:41",
          },
          {
            url: "fxpro-announces-plans-to-expand-its-geographic-reach-and-core-product-offering-in-2011",
            publishedTime: "19/01/2011, 05:52",
          },
          {
            url: "fxpro-recognised-for-its-global-expansion-by-the-cyprus-government-at-the-cyprus-export-awards",
            publishedTime: "14/02/2011, 07:48",
          },
          {
            url: "fxpro-announces-sponsorship-of-as-monaco-fc",
            publishedTime: "22/03/2011, 05:33",
          },
          {
            url: "fxpro-announces-sponsorship-of-afc-champions-league",
            publishedTime: "13/04/2011, 06:50",
          },
          {
            url: "fxpro-encourages-greater-transparency",
            publishedTime: "07/09/2011, 04:24",
          },
          {
            url: "fxpro-announces-launch-australian-business",
            publishedTime: "11/11/2011, 13:11",
          },
          {
            url: "fxpro-announces-11-increase-in-2011-trading-volumes",
            publishedTime: "17/01/2012, 07:00",
          },
          {
            url: "fxpro-announces-tighter-spreads-and-deeper-liquidity",
            publishedTime: "14/02/2012, 07:00",
          },
          {
            url: "fxpro-wins-2012-world-finance-foreign-exchange-awards-best-global-ecn-broker",
            publishedTime: "21/05/2012, 06:00",
          },
          {
            url: "fxpro-announces-a-major-development-in-its-global-operations",
            publishedTime: "25/06/2012, 06:00",
          },
          {
            url: "fxpro-group-announces-move-to-agency-model---a-no-conflict-model",
            publishedTime: "01/07/2012, 06:00",
          },
          {
            url: "fxpro-announces-latest-awards-and-recognition-2012-2013",
            publishedTime: "11/03/2013, 12:34",
          },
          {
            url: "fxpro-underlines-security-client-funds",
            publishedTime: "24/05/2013, 08:59",
          },
          {
            url: "fxpro-launches-a-revolutionary-ea-trading-solution",
            publishedTime: "25/06/2013, 06:00",
          },
          {
            url: "fxpro-introduces-a-world-class-vps-service",
            publishedTime: "01/07/2013, 06:00",
          },
          {
            url: "fxpro-wins-best-forex-product-of-the-year",
            publishedTime: "18/09/2013, 06:00",
          },
          {
            url: "fxpro-supertrader---breakthrough-investment-platform",
            publishedTime: "21/10/2013, 09:13",
          },
          {
            url: "fxpro-to-be-principal-partner-of-12th-mena-forex-show-in-dubai",
            publishedTime: "12/11/2013, 11:14",
          },
          {
            url: "fxpro-wins-best-fx-broker-2013-shares-magazine-awards",
            publishedTime: "18/11/2013, 13:16",
          },
          {
            url: "fxpro-wins-best-forex-trading-platform-prestigious-investors-chronicle-and",
            publishedTime: "05/12/2013, 09:39",
          },
          {
            url: "fxpro-named-national-public-champion-cyprus-european-business-awards",
            publishedTime: "22/01/2014, 14:42",
          },
          {
            url: "fxpro-recognised-best-fx-service-provider-city-london-wealth-management-aw",
            publishedTime: "19/03/2014, 07:00",
          },
          {
            url: "prepaid-fxpro-mastercard-now-available",
            publishedTime: "10/04/2014, 04:14",
          },
          {
            url: "online-personal-wealth-awards-recognises-fxpro-best-fx-provider",
            publishedTime: "15/07/2014, 06:00",
          },
          {
            url: "new-mt4-webtrader-platform-available-fxpro",
            publishedTime: "29/08/2014, 06:00",
          },
          {
            url: "fxpro-unveils-ground-breaking-strategy-building-tool",
            publishedTime: "24/05/2013, 08:59",
          },
          {
            url: "fxpro-acquires-spot-fx-aggregator",
            publishedTime: "11/09/2014, 06:09",
          },
          {
            url: "forex-product-year-awarded-fxpro-supertrader-uk-forex-awards",
            publishedTime: "19/09/2014, 06:08",
          },
          {
            url: "fxpro-new-naming-rights-partner-super-rugby",
            publishedTime: "16/11/2011, 05:49",
          },
          {
            url: "best-fx-broker-2014-goes-fxpro-shares-magazine-awards",
            publishedTime: "18/11/2014, 07:15",
          },
          {
            url: "capital-finance-international-magazine-recognises-fxpro-award-best-fx-exec",
            publishedTime: "21/11/2014, 10:34",
          },
          {
            url: "fxpro-wins-best-forex-provider-2014-at-investors-chronicle-financial-times-awards",
            publishedTime: "03/12/2014, 09:55",
          },
          {
            url: "new-institutional-prime-of-prime-service-launched-by-fxpro",
            publishedTime: "09/12/2014, 08:28",
          },
          {
            url: "fxpro-announcement-regarding-chf-movement",
            publishedTime: "16/01/2015, 09:02",
          },
          {
            url: "fxpro-client-commitments-remain-unchanged",
            publishedTime: "17/01/2015, 14:05",
          },
          { url: "fxpro-to-launch-mt5", publishedTime: "26/01/2015, 06:50" },
          {
            url: "fxpro-announces-record-high-number-of-trades-executed-daily",
            publishedTime: "04/02/2015, 07:20",
          },
          {
            url: "fxpro-continues-to-go-from-strength-to-strength",
            publishedTime: "04/02/2015, 07:23",
          },
          {
            url: "fxpro-quant---revolutionising-automated-trading",
            publishedTime: "19/02/2015, 08:52",
          },
          { url: "fxpro-mt5-now-live", publishedTime: "16/03/2015, 12:08" },
          {
            url: "city-of-london-wealth-management-awards-recognises-fxpro-as-best-fx-service-provider",
            publishedTime: "18/03/2015, 14:33",
          },
          {
            url: "fxpro-committed-to-fairness-and-transparency",
            publishedTime: "07/04/2015, 08:57",
          },
          {
            url: "fxpro-increases-its-product-offering",
            publishedTime: "01/06/2015, 14:27",
          },
          {
            url: "fxpro-encourages-greater-transparency-in-the-fx-industry-as-a-result-increasing-average-daily-trades-by-104-yoy",
            publishedTime: "02/03/2015, 06:43",
          },
          {
            url: "fxpro-maintains-transparency-initiative",
            publishedTime: "09/07/2015, 10:05",
          },
          {
            url: "fxpro-wins-forex-provider-of-the-year-and-best-mt5-broker-at-the-uk-forex-awards",
            publishedTime: "22/09/2015, 08:01",
          },
          {
            url: "fxpro-announces-q3-execution-statistics",
            publishedTime: "29/10/2015, 07:47",
          },
          {
            url: "fxpro-celebrates-double-award-triumph",
            publishedTime: "01/12/2015, 13:05",
          },
          {
            url: "fxpro-announces-trade-execution-statistics-for-q4-2015",
            publishedTime: "13/01/2016, 07:23",
          },
          {
            url: "fxpro-enhances-its-infrastructure-with-solace-messaging-and-web-streaming-technology",
            publishedTime: "16/02/2016, 15:57",
          },
          {
            url: "fxpro-announces-execution-statistics-for-q1-2016",
            publishedTime: "20/04/2016, 09:57",
          },
          {
            url: "luchshiy-forex-provider-2016-colwma",
            publishedTime: "20/04/2016, 12:27",
          },
          {
            url: "fxpro-introduces-mt4-account-with-market-execution-and-lower-spreads",
            publishedTime: "218/05/2016, 07:20",
          },
          {
            url: "fxpro-reveals-execution-data-for-q2-2016",
            publishedTime: "22/08/2016, 08:43",
          },
          {
            url: "fxpro-announces-q3-2016-execution-statistics",
            publishedTime: "20/10/2016, 06:27",
          },
          {
            url: "fxpro-announces-q4-and-year-end-execution-statistics-for-2016",
            publishedTime: "17/01/2017, 13:23",
          },
          {
            url: "fxpro-receives-most-prestigious-awards-for-its-services",
            publishedTime: "18/11/2016, 13:28",
          },
          {
            url: "fxpro-and-watford-fc-announce-sponsorship-agreement",
            publishedTime: "14/06/2017, 05:00",
          },
          {
            url: "fxpro-announces-launch-of-new-spread-betting-platform-fxpro-edge",
            publishedTime: "11/08/2017, 06:06",
          },
          {
            url: "fxpro-opens-new-dubai-office",
            publishedTime: "04/12/2017, 10:41",
          },
          {
            url: "fxpro-maintains-commitment-to-trader-education",
            publishedTime: "21/03/2018, 09:29",
          },
          {
            url: "fxpro-at-the-traders-fair",
            publishedTime: "30/06/2018, 09:09",
          },
          {
            url: "introducing-the-new-fxpro-blog",
            publishedTime: "15/08/2018, 10:09",
          },
          {
            url: "uk-forex-awards-fxpro-goes-from-strength-to-strength",
            publishedTime: "26/09/2018, 09:51",
          },
          {
            url: "fxpro-attained-two-titles-at-the-global-brand-awards-2018",
            publishedTime: "20/10/2018, 11:25",
          },
          {
            url: "fxpro-awarded-as-the-best-fx-broker-for-one-more-consecutive-year",
            publishedTime: "13/11/2018, 09:07",
          },
          {
            url: "fxpro-is-launching-a-new-website",
            publishedTime: "21/11/2018, 09:15",
          },
          {
            url: "fxpro-was-awarded-as-the-most-reliable-broker-of-the-year",
            publishedTime: "19/12/2018, 10:23",
          },
          {
            url: "fxpro-launches-markets-2020-webinar-series-direct-live",
            publishedTime: "09/07/2020, 10:23",
            restrictionConfig: { enabledLanguages: ["ru"] },
          },
          {
            url: "fxpro-at-the-dubai-investment-conference-2019",
            publishedTime: "05/02/2019, 13:33",
            downloadPhotos: {
              downloadUrl:
                "https://direct-website.azureedge.net/assets/img/pages/single-press-release-page/fxpro-at-the-dubai-investment-conference-2019/images.zip",
              previewImg: [
                "https://direct-website.azureedge.net/assets/img/pages/single-press-release-page/fxpro-at-the-dubai-investment-conference-2019/screenshot-2.webp",
                "https://direct-website.azureedge.net/assets/img/pages/single-press-release-page/fxpro-at-the-dubai-investment-conference-2019/screenshot-1.webp",
              ],
              formatParams: { format: "PNG" },
            },
          },
          { url: "fxpro-2018-in-review", publishedTime: "06/01/2019, 10:47" },
          {
            url: "fxpro-best-metatrader-broker-2019",
            publishedTime: "20/02/2019, 09:29",
            restrictionConfig: { enabledLanguages: ["ru"] },
          },
          {
            url: "fxpro-starts-new-webinar-series-19",
            publishedTime: "11/03/2019, 14:15",
            restrictionConfig: { enabledLanguages: ["ru"] },
          },
          {
            url: "fxpro-introduce-new-website",
            publishedTime: "15/03/2019, 15:23",
            restrictionConfig: { enabledLanguages: ["ru"] },
          },
          {
            url: "fxpro-introduces-the-brand-new-fxpro-direct-app",
            publishedTime: "30/03/2019, 14:53",
            downloadPhotos: {
              downloadUrl:
                "https://direct-website.azureedge.net/assets/img/pages/single-press-release-page/fxpro-introduces-the-brand-new-fxpro-direct-app/images.zip",
              previewImg: [
                "https://direct-website.azureedge.net/assets/img/pages/single-press-release-page/fxpro-introduces-the-brand-new-fxpro-direct-app/screenshot-2.webp",
                "https://direct-website.azureedge.net/assets/img/pages/single-press-release-page/fxpro-introduces-the-brand-new-fxpro-direct-app/screenshot-1.webp",
              ],
              formatParams: { format: "PNG" },
            },
          },
          {
            url: "fxpro-launches-weekly-webinars",
            publishedTime: "24/04/2019, 14:43",
            restrictionConfig: { enabledLanguages: ["ru"] },
          },
          {
            url: "fxpro-became-a-winner-of-the-online-personal-wealth-awards",
            publishedTime: "20/04/2019, 12:35",
          },
          {
            url: "fxpro-was-awarded-as-the-most-reliable-broker-of-the-year-2019",
            publishedTime: "15/05/2019, 10:45",
          },
          {
            url: "fxpro-presented-brand-new-educational-section",
            publishedTime: "23/06/2019, 09:35",
            downloadPhotos: {
              downloadUrl:
                "https://direct-website.azureedge.net/assets/img/pages/single-press-release-page/fxpro-presented-brand-new-educational-section/images.zip",
              previewImg: [
                "https://direct-website.azureedge.net/assets/img/pages/single-press-release-page/fxpro-presented-brand-new-educational-section/screenshot-2.webp",
                "https://direct-website.azureedge.net/assets/img/pages/single-press-release-page/fxpro-presented-brand-new-educational-section/screenshot-1.webp",
              ],
              formatParams: { format: "PNG" },
            },
          },
          {
            url: "fxpro-launch-summer-online-intensive",
            publishedTime: "25/06/2019, 10:45",
            restrictionConfig: { enabledLanguages: ["ru"] },
          },
          {
            url: "fxpro-sailing-team-wins-silver",
            publishedTime: "14/07/2019, 09:42",
            downloadPhotos: {
              downloadUrl:
                "https://direct-website.azureedge.net/assets/img/pages/single-press-release-page/fxpro-sailing-team-wins-silver/images.zip",
              previewImg: [
                "https://direct-website.azureedge.net/assets/img/pages/single-press-release-page/fxpro-sailing-team-wins-silver/screenshot-2.webp",
                "https://direct-website.azureedge.net/assets/img/pages/single-press-release-page/fxpro-sailing-team-wins-silver/screenshot-1.webp",
              ],
              formatParams: { format: "PNG" },
            },
          },
          {
            url: "fxpro-sponsor-butterfly-ball-monaco-2019",
            publishedTime: "25/09/2019, 10:45",
          },
          {
            url: "fxpro-launch-new-online-course",
            publishedTime: "18/10/2019, 12:42",
            restrictionConfig: { enabledLanguages: ["ru"] },
          },
          {
            url: "fxpro-and-mclaren-f1-team-announce-partnership-agreement",
            publishedTime: "28/11/2019, 10:00",
            downloadPhotos: {
              downloadUrl:
                "https://direct-website.azureedge.net/assets/img/pages/single-press-release-page/fxpro-and-mclaren-f1-team-announce-partnership-agreement/images.zip",
              previewImg: [
                "https://direct-website.azureedge.net/assets/img/pages/single-press-release-page/fxpro-and-mclaren-f1-team-announce-partnership-agreement/screenshot-2.webp",
                "https://direct-website.azureedge.net/assets/img/pages/single-press-release-page/fxpro-and-mclaren-f1-team-announce-partnership-agreement/screenshot-1.webp",
              ],
              formatParams: { format: "PNG" },
            },
          },
          {
            url: "fxpro-our-2019-in-review",
            publishedTime: "17/12/2019, 10:00",
          },
          {
            url: "fxpro-addresses-false-allegations",
            publishedTime: "12/02/2020, 11:00",
            restrictionConfig: { enabledLanguages: ["vi", "th", "zh"] },
          },
          {
            url: "fxpro-launches-live-markets-webinar-series",
            publishedTime: "06/03/2020, 10:45",
            restrictionConfig: { enabledLanguages: ["ru"] },
          },
          {
            url: "fxpro-ru-webinar-series",
            publishedTime: "30/10/2020, 11:45",
            restrictionConfig: { enabledLanguages: ["ru"] },
          },
          {
            url: "fxpro-our-2020-in-review",
            publishedTime: "05/01/2021, 10:00",
          },
          {
            url: "fxpro-best-fx-provider-for-the-7th-time",
            publishedTime: "15/03/2021, 10:00",
          },
          {
            url: "fxpro-new-live-webinar-series",
            publishedTime: "14/05/2021, 14:00",
            restrictionConfig: { enabledLanguages: ["ru"] },
          },
          {
            url: "fxpro-new-stocks-and-cryptocurrencies",
            publishedTime: "09/06/2021, 14:00",
          },
          {
            url: "fxpro-ultimate-fintech-awards",
            publishedTime: "10/06/2021, 14:00",
          },
          {
            url: "fxpro-more-assets-to-trade",
            publishedTime: "13/07/2021, 14:00",
          },
          {
            url: "fxpro-launches-24-7-trading",
            publishedTime: "28/07/2021, 15:00",
          },
          { url: "victory-of-mclaren", publishedTime: "13/09/2021, 15:00" },
          { url: "cfds-on-palladium", publishedTime: "19/09/2021, 15:00" },
          { url: "more-crypto-cfds", publishedTime: "21/09/2021, 15:00" },
          {
            url: "fxpro-strengthens-business-commitment-to-the-bahamas",
            publishedTime: "22/09/2021, 15:00",
          },
          {
            url: "fxpro-awarded-best-forex-service-provider-2020",
            publishedTime: "24/09/2021, 15:00",
          },
          {
            url: "fxpro-has-added-over-2000-new-shares-on-mt5-platforms",
            publishedTime: "15/10/2021, 15:00",
          },
          {
            url: "fxpro-and-the_mclaren-f1-team-announce-the-continuation-of-their-winning-partnership",
            publishedTime: "02/11/2021, 15:00",
          },
          {
            url: "fxpro-clients-support-team-a-new-award-and-24-7-availability",
            publishedTime: "16/11/2021, 15:00",
          },
          {
            url: "fxpro-live-webinar-new-shares-and-crypto",
            publishedTime: "30/11/2021, 15:00",
            restrictionConfig: { enabledLanguages: ["ru"] },
          },
          {
            url: "fxpro-wins-best-corporate-social-responsibility-award-2021",
            publishedTime: "09/12/2021, 15:00",
          },
          {
            url: "fxpro-in-2021-milestones-of-the-year",
            publishedTime: "21/12/2021, 11:00",
          },
          {
            url: "fxpro-introduces-reduced-spreads-across-a-huge-range-of-assets",
            publishedTime: "24/02/2022, 11:00",
          },
          {
            url: "fxpro-awarded-best-trading-platform-2021",
            publishedTime: "20/02/2022, 11:00",
          },
          {
            url: "fxpro-supports-the-un-refugee-agency-in-2022",
            publishedTime: "09/03/2022, 16:00",
          },
          {
            url: "fxpro-mclaren-partnership-advances-as-the-new-season-kicks-off",
            publishedTime: "18/03/2022, 16:00",
          },
          {
            url: "fxpro-expands-opportunities-for-partners-and-opens-rep-office-in-Dubai",
            publishedTime: "14/04/2022, 16:00",
          },
          {
            url: "reduced-commissions-on-ctrader",
            publishedTime: "27/08/2022, 11:00",
          },
          {
            url: "fxpro-introduces-new-base-metals-gold-futures",
            publishedTime: "04/11/2022, 13:00",
          },
          {
            url: "fxpro-wins-best-fx-service-provider",
            publishedTime: "28/03/2023, 13:00",
          },
          {
            url: "fxpro-announces-sponsorship-of-professional-fighter-aleksandr-chizov",
            publishedTime: "28/07/2023, 13:00",
          },
          {
            url: "fxpro-moves-to-new-dubai-office",
            publishedTime: "24/08/2023, 13:00",
          },
        ],
        r = {
          enabledLanguages: [
            "en",
            "es",
            "pt",
            "de",
            "it",
            "ru",
            "hu",
            "ar",
            "id",
            "zh",
            "tw",
            "vi",
            "th",
            "ja",
          ],
        };
    },
    "Xcc+": function (e, t, a) {
      "use strict";
      a.d(t, "a", function () {
        return l;
      });
      var o = a("P5aQ"),
        r = a("A+jk"),
        n = a("iJl/"),
        i = a("pirP");
      class l {
        constructor(e = {}) {
          (this.digits = e.digits),
            (this.ask = (e.ask || 0).toFixed(this.digits)),
            (this.bid = (e.bid || 0).toFixed(this.digits)),
            (this.group = e.group || ""),
            (this.name = e.name || ""),
            (this.dailyMax = e.dailyMax || 0),
            (this.dailyMin = e.dailyMin || 0),
            (this.spread = e.spread || 0),
            (this.changePercentage = (e.dailyChangePercentage || 0).toFixed(3)),
            (this.swapLong = e.swapLong || 0),
            (this.swapShort = e.swapShort || 0),
            (this.description = e.description || ""),
            (this.swapType = e.swapType),
            (this.platformType = e.platformType),
            (this.country = l.findInGroup(this.group, l.countryRegexp)),
            (this.sector = l.findInGroup(this.group, l.sectorRegexp)),
            (this.industry = l.findInGroup(this.group, l.industryRegexp)),
            (this.currency = e.name),
            (this.type = Object.values(n.a).find((e) =>
              this.group.startsWith(r.a[e]) ? r.a[e] : void 0
            )),
            (this.displayName = l.getDisplayName(this.name, this.type)),
            (this.urlName = Object(i.b)(this.displayName));
        }
        static findInGroup(e = "", t) {
          if (!e) return "";
          const a = new RegExp(`Stocks\\${t}`, "i"),
            o = e.match(a);
          return o && o[1] ? o[1] : "";
        }
        static getDisplayName(e, t) {
          switch (t) {
            case n.a.Futures:
              return Object(i.a)(e);
            case n.a.Cryptocurrencies:
              return o.a[e] || e;
            default:
              return e;
          }
        }
      }
      (l.countryRegexp = "/(.+?(?=/|$))"),
        (l.sectorRegexp = "/.+?/(.+?(?=/|$))"),
        (l.industryRegexp = "/.+?/.+?/(.+?(?=/|$))");
    },
    Y9ny: function (e, t, a) {
      "use strict";
      var o;
      a.d(t, "a", function () {
        return o;
      }),
        (function (e) {
          (e.code = "Unidentified"), (e.name = "Unidentified");
        })(o || (o = {}));
    },
    Zw2m: function (e, t, a) {
      "use strict";
      var o;
      a.d(t, "a", function () {
        return o;
      }),
        a.d(t, "b", function () {
          return r;
        }),
        (function (e) {
          (e[(e.Provider = 0)] = "Provider"),
            (e[(e.Broker = 1)] = "Broker"),
            (e[(e.Tools = 2)] = "Tools"),
            (e[(e.Platform = 3)] = "Platform");
        })(o || (o = {}));
      const r = [
        {
          logoURL: "online-money-awards2023.webp",
          title: "page_aboutAwards_sectionAwards_awardTabContentTitle29",
          years: [2023],
          caption: "page_aboutAwards_sectionAwards_awardTabContentCaption25",
          type: o.Platform,
        },
        {
          logoURL: "Best_Trading_Conditions_APAC.webp",
          title: "page_aboutAwards_sectionAwards_awardTabContentTitle38",
          years: [2023],
          caption: "page_aboutAwards_sectionAwards_awardTabContentCaption18",
          type: o.Broker,
        },
        {
          logoURL: "innovative-asia.webp",
          title: "page_aboutAwards_sectionAwards_awardTabContentTitle36",
          years: [2023],
          caption: "aboutUs_trustedBrokerSubTitle2",
          type: o.Broker,
        },
        {
          logoURL: "broker-mena.webp",
          title: "page_aboutAwards_sectionAwards_awardTabContentTitle37",
          years: [2023],
          caption: "aboutUs_trustedBrokerSubTitle2",
          type: o.Platform,
        },
        {
          logoURL: "best-fx-service-provider-2023.webp",
          title: "page_aboutAwards_sectionAwards_awardTabContentTitle1",
          years: [2023],
          caption: "page_aboutAwards_sectionAwards_awardTabContentCaption1",
          type: o.Provider,
        },
        {
          logoURL: "best-in-class-algotrading.webp",
          title: "page_aboutAwards_sectionAwards_awardTabContentTitle79",
          years: [2023],
          caption: "aboutUs_trustedBrokerSubTitle33",
          type: o.Tools,
        },
        {
          logoURL: "best-corporate-resp.webp",
          title: "page_aboutAwards_sectionAwards_awardTabContentTitle78",
          years: [2022],
          caption: "page_aboutAwards_sectionAwards_awardTabContentCaption23",
          type: o.Broker,
        },
        {
          logoURL: "best-rading-platform-shares.webp",
          title: "page_aboutAwards_sectionAwards_awardTabContentTitle29",
          years: [2022],
          caption: "page_aboutAwards_sectionAwards_awardTabContentCaption6",
          type: o.Platform,
        },
        {
          logoURL: "fazzaco.webp",
          title: "page_aboutAwards_sectionAwards_awardTabContentTitle76",
          years: [2022],
          caption: "page_aboutAwards_sectionAwards_awardTabContentTitle77",
          type: o.Broker,
        },
        {
          logoURL: "online-money-awards2022.webp",
          title: "page_aboutAwards_sectionAwards_awardTabContentTitle3",
          years: [2022],
          caption: "page_aboutAwards_sectionAwards_awardTabContentCaption25",
          type: o.Provider,
        },
        {
          logoURL: "BestMarketAnalystUK.webp",
          title: "page_aboutAwards_sectionAwards_awardTabContentTitle48",
          years: [2022],
          caption: "aboutUs_trustedBrokerSubTitle2",
          type: o.Tools,
        },
        {
          logoURL: "BestPlatformUK.webp",
          title: "page_aboutAwards_sectionAwards_awardTabContentTitle47",
          years: [2022],
          caption: "aboutUs_trustedBrokerSubTitle2",
          type: o.Platform,
        },
        {
          logoURL: "best-broker-UK.webp",
          title: "page_aboutAwards_sectionAwards_awardTabContentTitle44",
          years: [2021],
          caption: "page_aboutAwards_sectionAwards_awardTabContentCaption18",
          type: o.Broker,
        },
        {
          logoURL: "most-transparent-broker.webp",
          title: "page_aboutAwards_sectionAwards_awardTabContentTitle45",
          years: [2021],
          caption: "page_aboutAwards_sectionAwards_awardTabContentCaption18",
          type: o.Broker,
        },
        {
          logoURL: "most-trusted-broker.webp",
          title: "page_aboutAwards_sectionAwards_awardTabContentTitle46",
          years: [2021],
          caption: "page_aboutAwards_sectionAwards_awardTabContentCaption18",
          type: o.Broker,
        },
        {
          logoURL: "best-corporate-social-responsibility-2021.webp",
          title: "page_aboutAwards_sectionAwards_awardTabContentTitle75",
          years: [2021],
          caption: "page_aboutAwards_sectionAwards_awardTabContentCaption23",
          type: o.Broker,
        },
        {
          logoURL: "cn-best-brand-brokers.webp",
          title: "page_aboutAwards_awardTabContentTitle_cnBestBrandBrokers",
          years: [2020, 2021],
          caption: "page_aboutAwards_awardTabContentCaption_cnBestBrandBrokers",
          type: o.Broker,
        },
        {
          logoURL: "FX168-award.webp",
          title: "page_aboutAwards_sectionAwards_awardTabContentTitle73",
          years: [2020],
          caption: "page_aboutAwards_sectionAwards_awardTabContentCaption17",
          type: o.Provider,
        },
        {
          logoURL: "personal-wealth2021.webp",
          title: "page_aboutAwards_sectionAwards_awardTabContentTitle2",
          years: [2014, 2016, 2017, 2018, 2019, 2020, 2021],
          caption: "page_aboutAwards_sectionAwards_awardTabContentCaption2",
          type: o.Provider,
        },
        {
          logoURL: "personal-wealth-CFD-2021.webp",
          title: "page_aboutAwards_sectionAwards_awardTabContentTitle74",
          years: [2021],
          caption: "page_aboutAwards_sectionAwards_awardTabContentCaption2",
          type: o.Provider,
        },
        {
          logoURL: "colwma.webp",
          title: "page_aboutAwards_sectionAwards_awardTabContentTitle1",
          years: [2014, 2015, 2016, 2018],
          caption: "page_aboutAwards_sectionAwards_awardTabContentCaption1",
          type: o.Provider,
        },
        {
          logoURL: "shares-award.webp",
          title: "page_awards_sectionAwards_awardTitle42",
          years: [2020],
          caption: "page_aboutAwards_sectionAwards_awardTabContentCaption6",
          type: o.Provider,
        },
        {
          logoURL: "ift.webp",
          title: "page_aboutAwards_sectionAwards_awardTabContentTitle3",
          years: [2010, 2011, 2012, 2013, 2014, 2015, 2016, 2017, 2018, 2019],
          caption: "page_aboutAwards_sectionAwards_awardTabContentCaption3",
          type: o.Provider,
        },
        {
          logoURL: "UKForexAwards.webp",
          title: "page_aboutAwards_sectionAwards_awardTabContentTitle4",
          years: [2015],
          caption: "page_aboutAwards_sectionAwards_awardTabContentCaption5",
          type: o.Provider,
        },
        {
          logoURL: "layer-80312.webp",
          title: "page_aboutAwards_sectionAwards_awardTabContentTitle4",
          years: [2010],
          caption: "page_aboutAwards_sectionAwards_awardTabContentCaption4",
          type: o.Provider,
        },
        {
          logoURL: "award-winner-2020.webp",
          title: "page_awards_sectionAwards_awardTitle40",
          years: [2020],
          caption: "page_awards_awardCaption_internationalBusinessMagazine",
          type: o.Broker,
        },
        {
          logoURL: "BestEuropeanValueBroker_2019.webp",
          title: "page_awards_sectionAwards_awardTitle32",
          years: [2019],
          caption: "page_awards_awardCaption_globalForexAwards",
          type: o.Broker,
        },
        {
          logoURL: "award-logo-FxPro-2.webp",
          title: "page_aboutAwards_sectionAwards_awardTabContentTitle32",
          years: [2019],
          caption: "aboutUs_GlobalMarkets",
          type: o.Broker,
        },
        {
          logoURL: "GlobalBrandsMagazine.webp",
          title: "page_aboutAwards_sectionAwards_awardTabContentTitle31",
          years: [2018],
          caption: "aboutUs_trustedBrokerSubTitle2",
          type: o.Broker,
        },
        {
          logoURL: "GlobalBrandsMagazine.webp",
          title: "page_aboutAwards_sectionAwards_awardTabContentTitle30",
          years: [2018],
          caption: "aboutUs_trustedBrokerSubTitle2",
          type: o.Broker,
        },
        {
          logoURL: "UKForexAwards.webp",
          title:
            "page_aboutAwards_sectionAwards_awardTabContentBestForexTrading.title",
          years: [2018],
          caption: "page_aboutAwards_sectionAwards_awardTabContentCaption5",
          type: o.Broker,
        },
        {
          logoURL: "SharesAwards.webp",
          title: "page_aboutAwards_sectionAwards_awardTabContentTitle7",
          years: [2013, 2014, 2015, 2016, 2017, 2018],
          caption: "page_aboutAwards_sectionAwards_awardTabContentCaption6",
          type: o.Broker,
        },
        {
          logoURL: "GlobalBrandsMagazine.webp",
          title: "page_aboutAwards_sectionAwards_awardTabContentTitle5",
          years: [2013, 2014, 2017],
          caption: "aboutUs_trustedBrokerSubTitle2",
          type: o.Broker,
        },
        {
          logoURL: "GlobalBrandsMagazine.webp",
          title: "page_aboutAwards_sectionAwards_awardTabContentTitle6",
          years: [2017],
          caption: "aboutUs_trustedBrokerSubTitle2",
          type: o.Broker,
        },
        {
          logoURL: "UKForexAwards.webp",
          title: "page_aboutAwards_sectionAwards_awardTabContentTitle8",
          years: [2015, 2016, 2017],
          caption: "page_aboutAwards_sectionAwards_awardTabContentCaption5",
          type: o.Broker,
        },
        {
          logoURL: "ForexAwards.webp",
          title: "page_aboutAwards_sectionAwards_awardTabContentTitle9",
          years: [2014, 2016],
          caption: "page_noDealingDeskExecution_sectionHero_awardSubTitle2",
          type: o.Broker,
        },
        {
          logoURL: "ForexAwards.webp",
          title: "page_aboutAwards_sectionAwards_awardTabContentTitle17",
          years: [2014, 2015, 2016],
          caption: "page_noDealingDeskExecution_sectionHero_awardSubTitle2",
          type: o.Broker,
        },
        {
          logoURL: "MENAForexShowAwards.webp",
          title: "page_aboutAwards_sectionAwards_awardTabContentTitle10",
          years: [2013],
          caption: "page_aboutAwards_sectionAwards_awardTabContentCaption7",
          type: o.Broker,
        },
        {
          logoURL: "InternationalFinanceMagazineAward.webp",
          title: "page_aboutAwards_sectionAwards_awardTabContentTitle11",
          years: [2013],
          caption: "page_aboutAwards_sectionAwards_awardTabContentCaption8",
          type: o.Broker,
        },
        {
          logoURL: "QFX.webp",
          title: "page_aboutAwards_sectionAwards_awardTabContentTitle12",
          years: [2013],
          caption: "page_aboutAwards_sectionAwards_awardTabContentCaption12",
          type: o.Broker,
        },
        {
          logoURL: "WorldFinanceMagazine.webp",
          title: "page_aboutAwards_sectionAwards_awardTabContentTitle13",
          years: [2012],
          caption: "page_aboutAwards_sectionAwards_awardTabContentCaption9",
          type: o.Broker,
        },
        {
          logoURL: "ForexExpoAwards.webp",
          title: "page_aboutAwards_sectionAwards_awardTabContentTitle14",
          years: [2010, 2011],
          caption: "page_aboutAwards_sectionAwards_awardTabContentCaption10",
          type: o.Broker,
        },
        {
          logoURL: "WorldFinanceMagazine.webp",
          title: "page_aboutAwards_sectionAwards_awardTabContentTitle15",
          years: [2010],
          caption: "page_aboutAwards_sectionAwards_awardTabContentCaption11",
          type: o.Broker,
        },
        {
          logoURL: "WorldFinanceMagazine.webp",
          title: "page_aboutAwards_sectionAwards_awardTabContentTitle16",
          years: [2009],
          caption: "page_aboutAwards_sectionAwards_awardTabContentCaption11",
          type: o.Broker,
        },
        {
          logoURL: "CEOMagazine.webp",
          title: "page_aboutAwards_sectionAwards_awardTabContentTitle16",
          years: [2008],
          caption: "page_aboutAwards_sectionAwards_awardTabContentCaption13",
          type: o.Broker,
        },
        {
          logoURL: "Customer-Service-2021.webp",
          title: "page_aboutAwards_sectionAwards_awardTabContentTitle51",
          years: [2021],
          caption: "page_aboutAwards_sectionAwards_awardTabContentCaption22",
          type: o.Tools,
        },
        {
          logoURL: "award-winner-2020.webp",
          title: "page_awards_sectionAwards_awardTitle41",
          years: [2020],
          caption: "page_awards_awardCaption_internationalBusinessMagazine",
          type: o.Tools,
        },
        {
          logoURL: "BestGlobalForexIntroducingBrokerProgramme_2019.webp",
          title: "page_awards_sectionAwards_awardTitle33",
          years: [2019],
          caption: "page_awards_awardCaption_globalForexAwards",
          type: o.Tools,
        },
        {
          logoURL: "personal-wealth-tablet.webp",
          title: "page_aboutAwards_sectionAwards_awardTabContentTitle40New",
          years: [2019, 2020],
          caption: "page_noDealingDeskExecution_sectionHero_awardSubTitle2",
          type: o.Tools,
        },
        {
          logoURL: "forexbrokers.com-2019-bic-commissionsfees.webp",
          title: "page_aboutAwards_sectionAwards_awardTabContentTitle33",
          years: [2019],
          caption: "aboutUs_trustedBrokerSubTitle33",
          type: o.Tools,
        },
        {
          logoURL: "UKForexAwards.webp",
          title:
            "page_aboutAwards_sectionAwards_awardTabContentBestForexTechnical.title",
          years: [2018],
          caption: "page_aboutAwards_sectionAwards_awardTabContentCaption5",
          type: o.Tools,
        },
        {
          logoURL: "CFI.coAwards.webp",
          title: "page_aboutAwards_sectionAwards_awardTabContentTitle18",
          years: [2014, 2016, 2017],
          caption: "page_aboutAwards_sectionAwards_awardTabContentCaption14",
          type: o.Tools,
        },
        {
          logoURL: "GlobalBrandsMagazine.webp",
          title: "page_aboutAwards_sectionAwards_awardTabContentTitle19",
          years: [2014],
          caption: "aboutUs_trustedBrokerSubTitle2",
          type: o.Tools,
        },
        {
          logoURL: "UKForexAwards.webp",
          title: "page_aboutAwards_sectionAwards_awardTabContentTitle20",
          years: [2014],
          caption: "page_aboutAwards_sectionAwards_awardTabContentCaption5",
          type: o.Tools,
        },
        {
          logoURL: "UKForexAwards.webp",
          title: "page_aboutAwards_sectionAwards_awardTabContentTitle21",
          years: [2013],
          caption: "page_aboutAwards_sectionAwards_awardTabContentCaption5",
          type: o.Tools,
        },
        {
          logoURL: "IAIRAward.webp",
          title: "page_aboutAwards_sectionAwards_awardTabContentTitle22",
          years: [2013],
          caption: "page_aboutAwards_sectionAwards_awardTabContentCaption15",
          type: o.Tools,
        },
        {
          logoURL: "SharesAwards.webp",
          title: "page_aboutAwards_sectionAwards_awardTabContentTitle23",
          years: [2013],
          caption: "page_aboutAwards_sectionAwards_awardTabContentCaption6",
          type: o.Tools,
        },
        {
          logoURL: "QFX.webp",
          title: "page_aboutAwards_sectionAwards_awardTabContentTitle24",
          years: [2013],
          caption: "page_aboutAwards_sectionAwards_awardTabContentCaption12",
          type: o.Tools,
        },
        {
          logoURL: "Shares-Awards-2021.webp",
          title: "page_aboutAwards_sectionAwards_awardTabContentTitle29",
          years: [2021],
          caption: "page_aboutAwards_sectionAwards_awardTabContentCaption6",
          type: o.Platform,
        },
        {
          logoURL: "top_rated_2020.webp",
          title: "page_aboutAwards_sectionAwards_awardTabContentTitle29",
          years: [2020],
          caption: "page_aboutAwards_sectionAwards_awardTabContentCaption3",
          type: o.Platform,
        },
        {
          logoURL: "Global_Forex_Awards.webp",
          title: "page_aboutAwards_sectionAwards_awardTabContentTitle70",
          years: [2020],
          caption: "page_awards_awardCaption_globalForexAwards",
          type: o.Platform,
        },
        {
          logoURL: "Global_Forex_Awards.webp",
          title: "page_aboutAwards_sectionAwards_awardTabContentTitle71",
          years: [2020],
          caption: "page_awards_awardCaption_globalForexAwards",
          type: o.Platform,
        },
        {
          logoURL: "forexbrokers.com-2020-bic-metatrader.webp",
          title: "page_aboutAwards_sectionAwards_awardTabContentTitle50",
          years: [2020],
          caption: "aboutUs_trustedBrokerSubTitle33",
          type: o.Platform,
        },
        {
          logoURL: "BestForexTradingPlatform2019.webp",
          title: "page_aboutAwards_sectionAwards_awardTabContentTitle28",
          years: [2019],
          caption: "page_aboutAwards_sectionAwards_awardTabContentCaption6",
          type: o.Platform,
        },
        {
          logoURL: "BestEuropeanForexTradingPlatform_2019.webp",
          title: "page_awards_sectionAwards_awardTitle34",
          years: [2019],
          caption: "page_awards_awardCaption_globalForexAwards",
          type: o.Platform,
        },
        {
          logoURL: "forexbrokers.com-2019-5stars-metatraderbrokers.webp",
          title: "page_aboutAwards_sectionAwards_awardTabContentTitle34",
          years: [2019],
          caption: "aboutUs_trustedBrokerSubTitle33",
          type: o.Platform,
        },
        {
          logoURL: "forexbrokers.com-2019-1bic-metatraderbrokers.webp",
          title: "page_aboutAwards_sectionAwards_awardTabContentTitle35",
          years: [2019],
          caption: "aboutUs_trustedBrokerSubTitle33",
          type: o.Platform,
        },
        {
          logoURL: "ForexAwards.webp",
          title: "page_aboutAwards_sectionAwards_awardTabContentTitle25",
          years: [2015],
          caption: "page_noDealingDeskExecution_sectionHero_awardSubTitle2",
          type: o.Platform,
        },
        {
          logoURL: "InternationalFinanceMagazineAward.webp",
          title: "page_aboutAwards_sectionAwards_awardTabContentTitle26",
          years: [2013],
          caption: "page_aboutAwards_sectionAwards_awardTabContentCaption8",
          type: o.Platform,
        },
        {
          logoURL: "ift.webp",
          title: "page_aboutAwards_sectionAwards_awardTabContentTitle27",
          years: [2013],
          caption: "page_aboutAwards_sectionAwards_awardTabContentCaption16",
          type: o.Platform,
        },
        {
          logoURL: "WorldFinanceMagazine.webp",
          title: "page_aboutAwards_sectionAwards_awardTabContentTitle28",
          years: [2010],
          caption: "page_aboutAwards_sectionAwards_awardTabContentCaption11",
          type: o.Platform,
        },
        {
          logoURL: "WorldFinanceMagazine.webp",
          title: "page_aboutAwards_sectionAwards_awardTabContentTitle28",
          years: [2010],
          caption: "page_aboutAwards_sectionAwards_awardTabContentCaption11",
          type: o.Platform,
        },
      ];
    },
    c5vA: function (e, t, a) {
      "use strict";
      a.d(t, "a", function () {
        return r;
      }),
        a.d(t, "b", function () {
          return n;
        });
      var o = a("Y9ny");
      const r = [
        { name: "Afghanistan", code: "AF", showInSalesForce: !0 },
        { name: "Aland Islands", code: "AX", showInSalesForce: !0 },
        { name: "Albania", code: "AL", showInSalesForce: !0 },
        { name: "Algeria", code: "DZ", showInSalesForce: !0 },
        { name: "Andorra", code: "AD", showInSalesForce: !0 },
        { name: "Angola", code: "AO", showInSalesForce: !0 },
        { name: "Anguilla", code: "AI", showInSalesForce: !0 },
        { name: "Antarctica", code: "AQ", showInSalesForce: !0 },
        { name: "Antigua And Barbuda", code: "AG", showInSalesForce: !0 },
        { name: "Armenia", code: "AM", showInSalesForce: !0 },
        { name: "Aruba", code: "AW", showInSalesForce: !0 },
        { name: "Australia", code: "AU", showInSalesForce: !0 },
        { name: "Azerbaijan", code: "AZ", showInSalesForce: !0 },
        { name: "Bahamas", code: "BS", showInSalesForce: !0 },
        { name: "Bahrain", code: "BH", showInSalesForce: !0 },
        { name: "Bangladesh", code: "BD", showInSalesForce: !0 },
        { name: "Barbados", code: "BB", showInSalesForce: !0 },
        { name: "Belarus", code: "BY", showInSalesForce: !0 },
        { name: "Belize", code: "BZ", showInSalesForce: !0 },
        { name: "Benin", code: "BJ", showInSalesForce: !0 },
        { name: "Bermuda", code: "BM", showInSalesForce: !0 },
        { name: "Bhutan", code: "BT", showInSalesForce: !0 },
        {
          name: "Bolivia, Plurinational State of",
          code: "BO",
          showInSalesForce: !0,
        },
        {
          name: "Bonaire, Sint Eustatius and Saba",
          code: "BQ",
          showInSalesForce: !0,
        },
        { name: "Bosnia And Herzegovina", code: "BA", showInSalesForce: !0 },
        { name: "Botswana", code: "BW", showInSalesForce: !0 },
        { name: "Bouvet Island", code: "BV", showInSalesForce: !0 },
        {
          name: "British Indian Ocean Territory",
          code: "IO",
          showInSalesForce: !0,
        },
        { name: "Brunei Darussalam", code: "BN", showInSalesForce: !0 },
        { name: "Burkina Faso", code: "BF", showInSalesForce: !0 },
        { name: "Burundi", code: "BI", showInSalesForce: !0 },
        { name: "Canada", code: "CA", showInSalesForce: !0 },
        { name: "Cambodia", code: "KH", showInSalesForce: !0 },
        { name: "Cameroon", code: "CM", showInSalesForce: !0 },
        { name: "Cape Verde", code: "CV", showInSalesForce: !0 },
        { name: "Cayman Islands", code: "KY", showInSalesForce: !0 },
        { name: "Central African Republic", code: "CF", showInSalesForce: !0 },
        { name: "Chad", code: "TD", showInSalesForce: !0 },
        { name: "Chile", code: "CL", showInSalesForce: !0 },
        { name: "China", code: "CN", showInSalesForce: !0 },
        { name: "Christmas Island", code: "CX", showInSalesForce: !0 },
        { name: "Cocos (Keeling) Islands", code: "CC", showInSalesForce: !0 },
        { name: "Congo", code: "CG", showInSalesForce: !0 },
        { name: "Comoros", code: "KM", showInSalesForce: !0 },
        { name: "Cook Islands", code: "CK", showInSalesForce: !0 },
        { name: "Costa Rica", code: "CR", showInSalesForce: !0 },
        { name: "Cote D Ivoire", code: "CI", showInSalesForce: !0 },
        { name: "Cuba", code: "CU", showInSalesForce: !0 },
        { name: "Curacao", code: "CW", showInSalesForce: !0 },
        {
          name: "Democratic Republic of the Congo",
          code: "CD",
          showInSalesForce: !0,
        },
        { name: "Djibouti", code: "DJ", showInSalesForce: !0 },
        { name: "Dominica", code: "DM", showInSalesForce: !0 },
        { name: "Dominican Republic", code: "DO", showInSalesForce: !0 },
        { name: "Ecuador", code: "EC", showInSalesForce: !0 },
        { name: "Egypt", code: "EG", showInSalesForce: !0 },
        { name: "El Salvador", code: "SV", showInSalesForce: !0 },
        { name: "Equatorial Guinea", code: "GQ", showInSalesForce: !0 },
        { name: "Eritrea", code: "ER", showInSalesForce: !0 },
        { name: "Ethiopia", code: "ET", showInSalesForce: !0 },
        {
          name: "Falkland Islands (Malvinas)",
          code: "FK",
          showInSalesForce: !0,
        },
        { name: "Faroe Islands", code: "FO", showInSalesForce: !0 },
        { name: "Fiji", code: "FJ", showInSalesForce: !0 },
        { name: "French Guiana", code: "GF", showInSalesForce: !0 },
        { name: "French Polynesia", code: "PF", showInSalesForce: !0 },
        {
          name: "French Southern Territories",
          code: "TF",
          showInSalesForce: !0,
        },
        { name: "Gabon", code: "GA", showInSalesForce: !0 },
        { name: "Gambia", code: "GM", showInSalesForce: !0 },
        { name: "Georgia", code: "GE", showInSalesForce: !0 },
        { name: "Ghana", code: "GH", showInSalesForce: !0 },
        { name: "Gibraltar", code: "GI", showInSalesForce: !0 },
        { name: "Greenland", code: "GL", showInSalesForce: !0 },
        { name: "Grenada", code: "GD", showInSalesForce: !0 },
        { name: "Guadeloupe", code: "GP", showInSalesForce: !0 },
        { name: "Guam", code: "GU" },
        { name: "Guatemala", code: "GT", showInSalesForce: !0 },
        { name: "Guernsey", code: "GG", showInSalesForce: !0 },
        { name: "Guinea", code: "GN", showInSalesForce: !0 },
        { name: "Guinea-Bissau", code: "GW", showInSalesForce: !0 },
        { name: "Guyana", code: "GY", showInSalesForce: !0 },
        { name: "Haiti", code: "HT", showInSalesForce: !0 },
        {
          name: "Heard Island and McDonald Islands",
          code: "HM",
          showInSalesForce: !0,
        },
        { name: "Honduras", code: "HN", showInSalesForce: !0 },
        { name: "Hong Kong", code: "HK" },
        { name: "India", code: "IN", showInSalesForce: !0 },
        { name: "Iran", code: "IR", showInSalesForce: !0 },
        { name: "Iraq", code: "IQ", showInSalesForce: !0 },
        { name: "Isle of Man", code: "IM", showInSalesForce: !0 },
        { name: "Israel", code: "IL", showInSalesForce: !0 },
        { name: "Jamaica", code: "JM", showInSalesForce: !0 },
        { name: "Jersey", code: "JE", showInSalesForce: !0 },
        { name: "Jordan", code: "JO", showInSalesForce: !0 },
        { name: "Kazakhstan", code: "KZ", showInSalesForce: !0 },
        { name: "Kenya", code: "KE", showInSalesForce: !0 },
        { name: "Kiribati", code: "KI", showInSalesForce: !0 },
        {
          name: "Korea Democratic Peoples Republic Of",
          code: "KP",
          showInSalesForce: !0,
        },
        { name: "Korea, Republic of", code: "KR", showInSalesForce: !0 },
        { name: "Kuwait", code: "KW", showInSalesForce: !0 },
        { name: "Kyrgyzstan", code: "KG", showInSalesForce: !0 },
        {
          name: "Lao Peoples Democratic Republic",
          code: "LA",
          showInSalesForce: !0,
        },
        { name: "Lebanon", code: "LB", showInSalesForce: !0 },
        { name: "Lesotho", code: "LS", showInSalesForce: !0 },
        { name: "Liberia", code: "LR", showInSalesForce: !0 },
        { name: "Libyan Arab Jamahiriya", code: "LY", showInSalesForce: !0 },
        { name: "Macao", code: "MO", showInSalesForce: !0 },
        { name: "Macedonia, The Former Yugoslav Republic of", code: "MK" },
        { name: "Madagascar", code: "MG", showInSalesForce: !0 },
        { name: "Malawi", code: "MW", showInSalesForce: !0 },
        { name: "Malaysia", code: "MY", showInSalesForce: !0 },
        { name: "Maldives", code: "MV", showInSalesForce: !0 },
        { name: "Mali", code: "ML", showInSalesForce: !0 },
        { name: "Marshall Islands", code: "MH" },
        { name: "Martinique", code: "MQ", showInSalesForce: !0 },
        { name: "Mauritania", code: "MR", showInSalesForce: !0 },
        { name: "Mauritius", code: "MU", showInSalesForce: !0 },
        { name: "Mayotte", code: "YT", showInSalesForce: !0 },
        { name: "Mexico", code: "MX", showInSalesForce: !0 },
        { name: "Micronesia, Federated States of", code: "FM" },
        { name: "Mongolia", code: "MN", showInSalesForce: !0 },
        { name: "Montenegro", code: "ME", showInSalesForce: !0 },
        { name: "Montserrat", code: "MS", showInSalesForce: !0 },
        { name: "Morocco", code: "MA", showInSalesForce: !0 },
        { name: "Mozambique", code: "MZ", showInSalesForce: !0 },
        { name: "Myanmar", code: "MM", showInSalesForce: !0 },
        { name: "Namibia", code: "NA", showInSalesForce: !0 },
        { name: "Nauru", code: "NR", showInSalesForce: !0 },
        { name: "Netherlands Antilles", code: "AN" },
        { name: "Nepal", code: "NP", showInSalesForce: !0 },
        { name: "New Caledonia", code: "NC", showInSalesForce: !0 },
        { name: "New Zealand", code: "NZ", showInSalesForce: !0 },
        { name: "Nicaragua", code: "NI", showInSalesForce: !0 },
        { name: "Niger", code: "NE", showInSalesForce: !0 },
        { name: "Nigeria", code: "NG", showInSalesForce: !0 },
        { name: "Niue", code: "NU", showInSalesForce: !0 },
        { name: "Norfolk Island", code: "NF", showInSalesForce: !0 },
        { name: "Northern Mariana Islands", code: "MP" },
        { name: "Oman", code: "OM", showInSalesForce: !0 },
        { name: "Pakistan", code: "PK", showInSalesForce: !0 },
        { name: "Palau", code: "PW" },
        {
          name: "Palestinian Territory, Occupied",
          code: "PS",
          showInSalesForce: !0,
        },
        { name: "Panama", code: "PA", showInSalesForce: !0 },
        { name: "Papua New Guinea", code: "PG", showInSalesForce: !0 },
        { name: "Paraguay", code: "PY", showInSalesForce: !0 },
        { name: "Peru", code: "PE", showInSalesForce: !0 },
        { name: "Philippines", code: "PH", showInSalesForce: !0 },
        { name: "Pitcairn", code: "PN", showInSalesForce: !0 },
        { name: "Puerto Rico", code: "PR" },
        { name: "Qatar", code: "QA", showInSalesForce: !0 },
        { name: "Reunion", code: "RE", showInSalesForce: !0 },
        { name: "Russian Federation", code: "RU", showInSalesForce: !0 },
        { name: "Rwanda", code: "RW", showInSalesForce: !0 },
        { name: "Saint Barthelemy\r\n", code: "BL", showInSalesForce: !0 },
        {
          name: "Saint Helena, Ascension and Tristan da Cunha",
          code: "SH",
          showInSalesForce: !0,
        },
        { name: "Saint Kitts and Nevis", code: "KN", showInSalesForce: !0 },
        { name: "Saint Lucia", code: "LC", showInSalesForce: !0 },
        {
          name: "Saint Martin (French part)",
          code: "MF",
          showInSalesForce: !0,
        },
        { name: "Sint Maarten (Dutch part)", code: "SX", showInSalesForce: !0 },
        { name: "Saint Pierre and Miquelon", code: "PM", showInSalesForce: !0 },
        {
          name: "Saint Vincent and the Grenadines",
          code: "VC",
          showInSalesForce: !0,
        },
        { name: "Samoa", code: "WS", showInSalesForce: !0 },
        { name: "San Marino", code: "SM", showInSalesForce: !0 },
        { name: "Sao Tome and Principe", code: "ST", showInSalesForce: !0 },
        { name: "Senegal", code: "SN", showInSalesForce: !0 },
        { name: "Seychelles", code: "SC", showInSalesForce: !0 },
        { name: "Sierra Leone", code: "SL", showInSalesForce: !0 },
        { name: "Singapore", code: "SG", showInSalesForce: !0 },
        { name: "Solomon Islands", code: "SB", showInSalesForce: !0 },
        { name: "Somalia", code: "SO", showInSalesForce: !0 },
        {
          name: "South Georgia and the South Sandwich Islands",
          code: "GS",
          showInSalesForce: !0,
        },
        { name: "Sri Lanka", code: "LK", showInSalesForce: !0 },
        { name: "Sudan", code: "SD", showInSalesForce: !0 },
        { name: "Suriname", code: "SR", showInSalesForce: !0 },
        { name: "South Sudan", code: "SS", showInSalesForce: !0 },
        { name: "Svalbard and Jan Mayen", code: "SJ", showInSalesForce: !0 },
        { name: "Swaziland", code: "SZ", showInSalesForce: !0 },
        { name: "Syrian Arab Republic", code: "SY", showInSalesForce: !0 },
        { name: "Taiwan area", code: "TW" },
        { name: "Tajikistan", code: "TJ", showInSalesForce: !0 },
        {
          name: "Tanzania, United Republic of",
          code: "TZ",
          showInSalesForce: !0,
        },
        { name: "Thailand", code: "TH", showInSalesForce: !0 },
        { name: "Timor-Leste", code: "TL", showInSalesForce: !0 },
        { name: "Togo", code: "TG", showInSalesForce: !0 },
        { name: "Tokelau", code: "TK", showInSalesForce: !0 },
        { name: "Tonga", code: "TO", showInSalesForce: !0 },
        { name: "Trinidad and Tobago", code: "TT", showInSalesForce: !0 },
        { name: "Tunisia", code: "TN", showInSalesForce: !0 },
        { name: "Turkey", code: "TR", showInSalesForce: !0 },
        { name: "Turkmenistan", code: "TM", showInSalesForce: !0 },
        { name: "Turks and Caicos Islands", code: "TC", showInSalesForce: !0 },
        { name: "Tuvalu", code: "TV", showInSalesForce: !0 },
        { name: "Uganda", code: "UG", showInSalesForce: !0 },
        { name: "Ukraine", code: "UA", showInSalesForce: !0 },
        { name: "United States Minor Outlying Islands", code: "UM" },
        { name: "Uruguay", code: "UY", showInSalesForce: !0 },
        { name: "Uzbekistan", code: "UZ", showInSalesForce: !0 },
        { name: "Vanuatu", code: "VU", showInSalesForce: !0 },
        { name: "Vatican City State", code: "VA", showInSalesForce: !0 },
        {
          name: "Venezuela, Bolivarian Republic of",
          code: "VE",
          showInSalesForce: !0,
        },
        { name: "Viet Nam", code: "VN", showInSalesForce: !0 },
        { name: "Virgin Islands, British", code: "VG", showInSalesForce: !0 },
        { name: "Wallis and Futuna", code: "WF", showInSalesForce: !0 },
        { name: "Western Sahara", code: "EH", showInSalesForce: !0 },
        { name: "Yemen", code: "YE", showInSalesForce: !0 },
        { name: "Zambia", code: "ZM", showInSalesForce: !0 },
        { name: "Zimbabwe", code: "ZW", showInSalesForce: !0 },
        { name: "United Kingdom", code: "GB", showInSalesForce: !0, isEu: !0 },
        { name: "Ireland", code: "IE", showInSalesForce: !0, isEu: !0 },
        { name: "Saudi Arabia", code: "SA", showInSalesForce: !0 },
        { name: "United Arab Emirates", code: "AE", showInSalesForce: !0 },
        { name: "Argentina", code: "AR", showInSalesForce: !0 },
        { name: "Austria", code: "AT", showInSalesForce: !0, isEu: !0 },
        { name: "Belgium", code: "BE", showInSalesForce: !0, isEu: !0 },
        { name: "Brazil", code: "BR", showInSalesForce: !0 },
        { name: "Bulgaria", code: "BG", showInSalesForce: !0, isEu: !0 },
        { name: "Colombia", code: "CO", showInSalesForce: !0 },
        { name: "Croatia", code: "HR", showInSalesForce: !0, isEu: !0 },
        { name: "Cyprus", code: "CY", showInSalesForce: !0, isEu: !0 },
        { name: "Czech Republic", code: "CZ", showInSalesForce: !0, isEu: !0 },
        { name: "Denmark", code: "DK", showInSalesForce: !0, isEu: !0 },
        { name: "Estonia", code: "EE", showInSalesForce: !0, isEu: !0 },
        { name: "Finland", code: "FI", showInSalesForce: !0, isEu: !0 },
        { name: "France", code: "FR", showInSalesForce: !0, isEu: !0 },
        { name: "Germany", code: "DE", showInSalesForce: !0, isEu: !0 },
        { name: "Greece", code: "GR", showInSalesForce: !0, isEu: !0 },
        { name: "Hungary", code: "HU", showInSalesForce: !0, isEu: !0 },
        { name: "Iceland", code: "IS", showInSalesForce: !0, isEu: !0 },
        { name: "Indonesia", code: "ID", showInSalesForce: !0 },
        { name: "Italy", code: "IT", showInSalesForce: !0, isEu: !0 },
        { name: "Japan", code: "JP", showInSalesForce: !0 },
        { name: "Latvia", code: "LV", showInSalesForce: !0, isEu: !0 },
        { name: "Liechtenstein", code: "LI", showInSalesForce: !0, isEu: !0 },
        { name: "Lithuania", code: "LT", showInSalesForce: !0, isEu: !0 },
        { name: "Luxembourg", code: "LU", showInSalesForce: !0, isEu: !0 },
        { name: "Malta", code: "MT", showInSalesForce: !0, isEu: !0 },
        { name: "Moldova, Republic of", code: "MD", showInSalesForce: !0 },
        { name: "Monaco", code: "MC", showInSalesForce: !0 },
        { name: "Netherlands", code: "NL", showInSalesForce: !0, isEu: !0 },
        { name: "Norway", code: "NO", showInSalesForce: !0, isEu: !0 },
        { name: "Poland", code: "PL", showInSalesForce: !0, isEu: !0 },
        { name: "Portugal", code: "PT", showInSalesForce: !0, isEu: !0 },
        { name: "Romania", code: "RO", showInSalesForce: !0, isEu: !0 },
        { name: "Serbia", code: "RS", showInSalesForce: !0 },
        { name: "Slovakia", code: "SK", showInSalesForce: !0, isEu: !0 },
        { name: "Slovenia", code: "SI", showInSalesForce: !0, isEu: !0 },
        { name: "South Africa", code: "ZA", showInSalesForce: !0 },
        { name: "Spain", code: "ES", showInSalesForce: !0, isEu: !0 },
        { name: "Sweden", code: "SE", showInSalesForce: !0, isEu: !0 },
        { name: "Switzerland", code: "CH", showInSalesForce: !0, isEu: !0 },
        { name: "United States", code: "US", showInSalesForce: !0 },
        { name: o.a.name, code: o.a.code },
      ];
      var n;
      !(function (e) {
        (e.Manual = "manual"), (e.Auto = "auto"), (e.Restricted = "restricted");
      })(n || (n = {}));
    },
    cjop: function (e, t, a) {
      "use strict";
      a.d(t, "a", function () {
        return d;
      });
      var o = a("2Vo4"),
        r = a("UXun"),
        n = a("3C1k"),
        i = a("60iL"),
        l = a("hqYv"),
        s = a("nbXG"),
        c = a("fXoL"),
        m = a("4pnn");
      class d {
        constructor(e, t, a, n) {
          (this.userCountry = e),
            (this.cookieService = t),
            (this.localStorageService = a),
            (this.dataLayerService = n),
            (this.isCookieConsentAcceptedSubject = new o.a(
              !!this.getCookiesConsent()
            )),
            (this.isCookieConsentAcceptedObservable =
              this.isCookieConsentAcceptedSubject
                .asObservable()
                .pipe(Object(r.a)()));
        }
        setExpiringFunctionalCookie(e, t, a) {
          const o = new Date(Date.now() + 24 * t * 3600 * 1e3);
          this.setFunctionalCookie(e, a || "true", { expires: o });
        }
        setFunctionalCookie(e, t, a) {
          const o = this.getCookiesConsent();
          o && o.functional && this.cookieService.put(e, t, a);
        }
        setCookiesConsent(e) {
          const t = Math.floor(new Date().getTime()),
            a = {
              essentials: e.essentials,
              functional: e.functional,
              marketing: e.marketing,
              utc: t,
              region: this.userCountry.toLowerCase(),
            };
          this.localStorageService.setItem(i.a.cookiesConsentKey, a, !0),
            e.marketing &&
              this.dataLayerService.pushCookieConsentAcceptedEvent(),
            this.isCookieConsentAcceptedSubject.next(!0);
        }
        getCookiesConsent() {
          return this.localStorageService.getItem(i.a.cookiesConsentKey, !0);
        }
        isCookieConsentAccepted() {
          return this.isCookieConsentAcceptedObservable;
        }
      }
      (d.ɵfac = function (e) {
        return new (e || d)(
          c["\u0275\u0275inject"](n.a),
          c["\u0275\u0275inject"](m.b),
          c["\u0275\u0275inject"](s.a),
          c["\u0275\u0275inject"](l.a)
        );
      }),
        (d.ɵprov = c["\u0275\u0275defineInjectable"]({
          token: d,
          factory: d.ɵfac,
          providedIn: "root",
        }));
    },
    d37h: function (e, t, a) {
      "use strict";
      a.d(t, "a", function () {
        return o;
      });
      const o = {
        "xls-document":
          "https://direct-website.azureedge.net/assets/img/icons/xls-document.svg",
        "pdf-document":
          "https://direct-website.azureedge.net/assets/img/icons/pdf-document.svg",
        "cookies-icon":
          "https://direct-website.azureedge.net/assets/img/icons/cookies.icon.svg",
        "painted-arrow":
          "https://direct-website.azureedge.net/assets/img/icons/arrow-painted.icon.svg",
        youtube:
          "https://direct-website.azureedge.net/assets/img/icons/youtube.icon.svg",
        "check-mark":
          "https://direct-website.azureedge.net/assets/img/icons/check-mark.icon.svg",
        "check-mark-thin":
          "https://direct-website.azureedge.net/assets/img/icons/check-mark-thin.icon.svg",
        "arrow-common":
          "https://direct-website.azureedge.net/assets/img/icons/arrow-common.icon.svg",
        "settings-icon":
          "https://direct-website.azureedge.net/assets/img/icons/settings-icon.svg",
        cross:
          "https://direct-website.azureedge.net/assets/img/icons/cross.icon.svg",
        "rates-ticker-mobile":
          "https://direct-website.azureedge.net/assets/img/icons/rates-ticker-mobile.icon.svg",
        "credit-score-pointer":
          "https://direct-website.azureedge.net/assets/img/icons/credit-score-pointer.icon.svg",
        "line-chart":
          "https://direct-website.azureedge.net/assets/img/icons/line-chart.icon.svg",
        "candlestick-chart":
          "https://direct-website.azureedge.net/assets/img/icons/candlestick-chart.icon.svg",
        download:
          "https://direct-website.azureedge.net/assets/img/icons/download.svg",
        globe:
          "https://direct-website.azureedge.net/assets/img/icons/globe.svg",
        mauritius:
          "https://direct-website.azureedge.net/assets/img/icons/mauritius.svg",
        bahamas:
          "https://direct-website.azureedge.net/assets/img/icons/bahamas.svg",
        "european-union":
          "https://direct-website.azureedge.net/assets/img/icons/european-union.svg",
        "united-kingdom":
          "https://direct-website.azureedge.net/assets/img/icons/united-kingdom.svg",
        seychelles:
          "https://direct-website.azureedge.net/assets/img/icons/seychelles.svg",
      };
    },
    dzcp: function (e, t, a) {
      "use strict";
      a.d(t, "a", function () {
        return o;
      });
      const o = {
        warningAccepted: "fx_cookie_warning_accepted",
        getStartedPopupWasClosed: "fx_get_started_shown",
        notificationPopupClosedNews: "fx_notification_closed",
        userCountry: "fx_user_country",
        userRegulator: "fx_user_regulator",
        signInReminder: "fx_sign_in_reminder",
        campaign: "fx_campaign",
        clientId: "clientId",
        noSolicitationAcceptanceChangeToGM:
          "no_solicitation_acceptance_change_to_gm",
        partnerId: "fx_partner_id",
        abTestUuid: "ab-test-uuid",
      };
    },
    eaUc: function (e, t, a) {
      "use strict";
      a.d(t, "a", function () {
        return i;
      });
      var o = a("ofXK"),
        r = a("I1XN"),
        n = a("fXoL");
      class i {}
      (i.ɵfac = function (e) {
        return new (e || i)();
      }),
        (i.ɵmod = n["\u0275\u0275defineNgModule"]({ type: i })),
        (i.ɵinj = n["\u0275\u0275defineInjector"]({
          providers: [r.a],
          imports: [[o.c]],
        }));
    },
    fe7P: function (e, t, a) {
      "use strict";
      a.d(t, "a", function () {
        return o;
      });
      const o = {
        tradingConditions: [
          {
            label: "tradingConditions_min_pricefluctuation",
            order: 1,
            valueFunc: (e) => `${e.tickSize}`,
          },
          {
            label: "tradingConditions_one_lot_size",
            order: 2,
            valueFunc: (e) => `${e.lotSize} ${e.measure}`,
          },
          {
            label: "tradingConditions_one_tick_value",
            order: 3,
            valueFunc: (e) => `${e.tickValue} ${e.marginCurrency}`,
          },
          {
            label: "tradingConditions_minimum_contract_size",
            order: 4,
            valueFunc: (e) => `${e.minimumVolume} lot`,
          },
          {
            label: "tradingConditions_minimum_step_to_increasing_contract_size",
            order: 5,
            valueFunc: (e) => `${e.volumeStep} lot`,
          },
          {
            label: "tradingConditions_used_margin_per_one_lot",
            order: 5,
            valueFunc: (e) => (/energy/i.test(e.group) ? "1.00%" : "2.00%"),
          },
          {
            label: "tradingConditions_minimum_margin_requirements",
            order: 9,
            value: "0",
          },
          {
            label: "tradingConditions_limit_and_stop_level",
            order: 10,
            valueFunc: (e) => `${e.stopslevel}`,
          },
        ],
        calendars: [
          {
            name: "#EUR50",
            months: [
              {
                month: "December 2022",
                ticker: "#EUR50_Z22",
                start: new Date("Sep 14, 2022"),
                close: new Date("Dec 14, 2022"),
                expiration: new Date("Dec 16, 2022"),
              },
              {
                month: "March 2023",
                ticker: "#EUR50_H23",
                start: new Date("Dec 14, 2022"),
                close: new Date("Mar 15, 2023"),
                expiration: new Date("Mar 17, 2023"),
              },
              {
                month: "June 2023",
                ticker: "#EUR50_M23",
                start: new Date("Mar 15, 2023"),
                close: new Date("Jun 14, 2023"),
                expiration: new Date("Jun 16, 2023"),
              },
              {
                month: "September 2023",
                ticker: "#EUR50_U23",
                start: new Date("Jun 14, 2023"),
                close: new Date("Sep 13, 2023"),
                expiration: new Date("Sep 15, 2023"),
              },
              {
                month: "December 2023",
                ticker: "#EUR50_Z23",
                start: new Date("Sep 13, 2023"),
                close: new Date("Dec 13, 2023"),
                expiration: new Date("Dec 15, 2023"),
              },
              {
                month: "March 2023",
                ticker: "#EUR50_H24",
                start: new Date("Dec 13, 2023"),
                close: new Date("Mar 13, 2024"),
                expiration: new Date("Mar 15, 2024"),
              },
            ],
          },
          {
            name: "#US500",
            months: [
              {
                month: "December 2022",
                ticker: "#US500_Z22",
                start: new Date("Sep 14, 2022"),
                close: new Date("Dec 14, 2022"),
                expiration: new Date("Dec 16, 2022"),
              },
              {
                month: "March 2023",
                ticker: "#US500_H23",
                start: new Date("Dec 14, 2022"),
                close: new Date("Mar 15, 2023"),
                expiration: new Date("Mar 17, 2023"),
              },
              {
                month: "June 2023",
                ticker: "#US500_M23",
                start: new Date("Mar 15, 2023"),
                close: new Date("Jun 14, 2023"),
                expiration: new Date("Jun 16, 2023"),
              },
              {
                month: "September 2023",
                ticker: "#US500_U23",
                start: new Date("Jun 14, 2023"),
                close: new Date("Sep 13, 2023"),
                expiration: new Date("Sep 15, 2023"),
              },
              {
                month: "December 2023",
                ticker: "#US500_Z23",
                start: new Date("Sep 13, 2023"),
                close: new Date("Dec 13, 2023"),
                expiration: new Date("Dec 15, 2023"),
              },
            ],
          },
          {
            name: "#US100",
            months: [
              {
                month: "December 2022",
                ticker: "#US100_Z22",
                start: new Date("Sep 14, 2022"),
                close: new Date("Dec 14, 2022"),
                expiration: new Date("Dec 16, 2022"),
              },
              {
                month: "March 2023",
                ticker: "#US100_H23",
                start: new Date("Dec 14, 2022"),
                close: new Date("Mar 15, 2023"),
                expiration: new Date("Mar 17, 2023"),
              },
              {
                month: "June 2023",
                ticker: "#US100_M23",
                start: new Date("Mar 15, 2023"),
                close: new Date("Jun 14, 2023"),
                expiration: new Date("Jun 16, 2023"),
              },
              {
                month: "September 2023",
                ticker: "#US100_U23",
                start: new Date("Jun 14, 2023"),
                close: new Date("Sep 13, 2023"),
                expiration: new Date("Sep 15, 2023"),
              },
              {
                month: "December 2023",
                ticker: "#US100_Z23",
                start: new Date("Sep 13, 2023"),
                close: new Date("Dec 13, 2023"),
                expiration: new Date("Dec 15, 2023"),
              },
            ],
          },
          {
            name: "#DJ30",
            months: [
              {
                month: "December 2022",
                ticker: "#DJ30_Z22",
                start: new Date("Sep 14, 2022"),
                close: new Date("Dec 14, 2022"),
                expiration: new Date("Dec 16, 2022"),
              },
              {
                month: "March 2023",
                ticker: "#DJ30_H23",
                start: new Date("Dec 14, 2022"),
                close: new Date("Mar 15, 2023"),
                expiration: new Date("Mar 17, 2023"),
              },
              {
                month: "June 2023",
                ticker: "#DJ30_M23",
                start: new Date("Mar 15, 2023"),
                close: new Date("Jun 14, 2023"),
                expiration: new Date("Jun 16, 2023"),
              },
              {
                month: "September 2023",
                ticker: "#DJ30_U23",
                start: new Date("Jun 14, 2023"),
                close: new Date("Sep 13, 2023"),
                expiration: new Date("Sep 15, 2023"),
              },
              {
                month: "December 2023",
                ticker: "#DJ30_Z23",
                start: new Date("Sep 13, 2023"),
                close: new Date("Dec 13, 2023"),
                expiration: new Date("Dec 15, 2023"),
              },
            ],
          },
          {
            name: "#USOil",
            months: [
              {
                month: "November 2022",
                ticker: "#USOil_X22",
                start: new Date("Sep 16, 2022"),
                close: new Date("Oct 18, 2022"),
                expiration: new Date("Oct 20, 2022"),
              },
              {
                month: "December 2022",
                ticker: "#USOil_Z22",
                start: new Date("Oct 18, 2022"),
                close: new Date("Nov 17, 2022"),
                expiration: new Date("Nov 21, 2022"),
              },
              {
                month: "January 2023",
                ticker: "#USOil_F23",
                start: new Date("Nov 17, 2022"),
                close: new Date("Dec 16, 2022"),
                expiration: new Date("Dec 20, 2022"),
              },
              {
                month: "February 2023",
                ticker: "#USOil_G23",
                start: new Date("Dec 16, 2022"),
                close: new Date("Jan 18, 2023"),
                expiration: new Date("Jan 20, 2023"),
              },
              {
                month: "March 2023",
                ticker: "#USOil_H23",
                start: new Date("Jan 18, 2023"),
                close: new Date("Feb 17, 2023"),
                expiration: new Date("Feb 21, 2023"),
              },
              {
                month: "April 2023",
                ticker: "#USOil_J23",
                start: new Date("Feb 17, 2023"),
                close: new Date("Mar 20, 2023"),
                expiration: new Date("Mar 21, 2023"),
              },
              {
                month: "May 2023",
                ticker: "#USOil_K23",
                start: new Date("Mar 20, 2023"),
                close: new Date("Apr 18, 2023"),
                expiration: new Date("Apr 20, 2023"),
              },
              {
                month: "June 2023",
                ticker: "#USOil_M23",
                start: new Date("Apr 18, 2023"),
                close: new Date("May 19, 2023"),
                expiration: new Date("May 22, 2023"),
              },
              {
                month: "July 2023",
                ticker: "#USOil_N23",
                start: new Date("May 19, 2023"),
                close: new Date("Jun 16, 2023"),
                expiration: new Date("Jun 20, 2023"),
              },
              {
                month: "August 2023",
                ticker: "#USOil_Q23",
                start: new Date("Jun 16, 2023"),
                close: new Date("Jul 18, 2023"),
                expiration: new Date("Jul 20, 2023"),
              },
              {
                month: "September 2023",
                ticker: "#USOil_U23",
                start: new Date("Jul 18, 2023"),
                close: new Date("Aug 18, 2023"),
                expiration: new Date("Aug 22, 2023"),
              },
              {
                month: "October 2023",
                ticker: "#USOil_V23",
                start: new Date("Aug 18, 2023"),
                close: new Date("Sep 18, 2023"),
                expiration: new Date("Sep 20, 2023"),
              },
              {
                month: "November 2023",
                ticker: "#USOil_X23",
                start: new Date("Sep 18, 2023"),
                close: new Date("Oct 18, 2023"),
                expiration: new Date("Oct 20, 2023"),
              },
              {
                month: "December 2023",
                ticker: "#USOil_Z23",
                start: new Date("Oct 18, 2023"),
                close: new Date("Nov 16, 2023"),
                expiration: new Date("Nov 20, 2023"),
              },
              {
                month: "January 2024",
                ticker: "#USOil_F24",
                start: new Date("Nov 16, 2023"),
                close: new Date("Dec 15, 2023"),
                expiration: new Date("Dec 19, 2023"),
              },
              {
                month: "February 2024",
                ticker: "#USOil_G24",
                start: new Date("Dec 15, 2023"),
                close: new Date("Jan 18, 2024"),
                expiration: new Date("Jan 22, 2024"),
              },
            ],
          },
          {
            name: "#NGas",
            months: [
              {
                month: "November 2022",
                ticker: "#NGas_X22",
                start: new Date("Sep 26, 2022"),
                close: new Date("Oct 25, 2022"),
                expiration: new Date("Oct 27, 2022"),
              },
              {
                month: "December 2022",
                ticker: "#NGas_Z22",
                start: new Date("Oct 25, 2022"),
                close: new Date("Nov 24, 2022"),
                expiration: new Date("Nov 28, 2022"),
              },
              {
                month: "January 2023",
                ticker: "#NGas_F23",
                start: new Date("Nov 24, 2022"),
                close: new Date("Dec 26, 2022"),
                expiration: new Date("Dec 28, 2022"),
              },
              {
                month: "February 2023",
                ticker: "#NGas_G23",
                start: new Date("Dec 26, 2022"),
                close: new Date("Jan 25, 2023"),
                expiration: new Date("Jan 27, 2023"),
              },
              {
                month: "March 2023",
                ticker: "#NGas_H23",
                start: new Date("Jan 25, 2023"),
                close: new Date("Feb 22, 2023"),
                expiration: new Date("Feb 24, 2023"),
              },
              {
                month: "April 2023",
                ticker: "#NGas_J23",
                start: new Date("Feb 22, 2023"),
                close: new Date("Mar 27, 2023"),
                expiration: new Date("Mar 29, 2023"),
              },
              {
                month: "May 2023",
                ticker: "#NGas_K23",
                start: new Date("Mar 27, 2023"),
                close: new Date("Apr 24, 2023"),
                expiration: new Date("Apr 26, 2023"),
              },
              {
                month: "June 2023",
                ticker: "#NGas_M23",
                start: new Date("Apr 24, 2023"),
                close: new Date("May 24, 2023"),
                expiration: new Date("May 26, 2023"),
              },
              {
                month: "July 2023",
                ticker: "#NGas_N23",
                start: new Date("May 24, 2023"),
                close: new Date("Jun 26, 2023"),
                expiration: new Date("Jun 28, 2023"),
              },
              {
                month: "August 2023",
                ticker: "#NGas_Q23",
                start: new Date("Jun 26, 2023"),
                close: new Date("Jul 25, 2023"),
                expiration: new Date("Jul 27, 2023"),
              },
              {
                month: "September 2023",
                ticker: "#NGas_U23",
                start: new Date("Jul 25, 2023"),
                close: new Date("Aug 25, 2023"),
                expiration: new Date("Aug 29, 2023"),
              },
              {
                month: "October 2023",
                ticker: "#NGas_V23",
                start: new Date("Aug 25, 2023"),
                close: new Date("Sep 25, 2023"),
                expiration: new Date("Sep 27, 2023"),
              },
              {
                month: "November 2023",
                ticker: "#NGas_X23",
                start: new Date("Sep 25, 2023"),
                close: new Date("Oct 25, 2023"),
                expiration: new Date("Oct 27, 2023"),
              },
              {
                month: "December 2023",
                ticker: "#NGas_Z23",
                start: new Date("Oct 25, 2023"),
                close: new Date("Nov 24, 2023"),
                expiration: new Date("Nov 28, 2023"),
              },
              {
                month: "January 2024",
                ticker: "#NGas_F24",
                start: new Date("Nov 24, 2023"),
                close: new Date("Dec 22, 2023"),
                expiration: new Date("Dec 27, 2023"),
              },
            ],
          },
          {
            name: "#Wheat",
            months: [
              {
                month: "December 2022",
                ticker: "#Wheat_Z22",
                start: new Date("Aug 28, 2022"),
                close: new Date("Nov 27, 2022"),
                expiration: new Date("Nov 29, 2022"),
              },
              {
                month: "March 2023",
                ticker: "#Wheat_H23",
                start: new Date("Nov 28, 2022"),
                close: new Date("Feb 24, 2023"),
                expiration: new Date("Feb 28, 2023"),
              },
              {
                month: "May 2023",
                ticker: "#Wheat_K23",
                start: new Date("Feb 24, 2023"),
                close: new Date("Apr 26, 2023"),
                expiration: new Date("Apr 28, 2023"),
              },
              {
                month: "July 2023",
                ticker: "#Wheat_N23",
                start: new Date("Apr 26, 2023"),
                close: new Date("Jun 28, 2023"),
                expiration: new Date("Jun 30, 2023"),
              },
              {
                month: "September 2023",
                ticker: "#Wheat_U23",
                start: new Date("Jun 28, 2023"),
                close: new Date("Aug 29, 2023"),
                expiration: new Date("Aug 31, 2023"),
              },
              {
                month: "December 2023",
                ticker: "#Wheat_Z23",
                start: new Date("Aug 29, 2023"),
                close: new Date("Nov 28, 2023"),
                expiration: new Date("Nov 30, 2023"),
              },
            ],
          },
          {
            name: "#Corn",
            months: [
              {
                month: "December 2022",
                ticker: "#Corn_Z22",
                start: new Date("Aug 28, 2022"),
                close: new Date("Nov 27, 2022"),
                expiration: new Date("Nov 29, 2022"),
              },
              {
                month: "March 2023",
                ticker: "#Corn_H23",
                start: new Date("Nov 28, 2022"),
                close: new Date("Feb 24, 2023"),
                expiration: new Date("Feb 28, 2023"),
              },
              {
                month: "May 2023",
                ticker: "#Corn_K23",
                start: new Date("Feb 24, 2023"),
                close: new Date("Apr 26, 2023"),
                expiration: new Date("Apr 28, 2023"),
              },
              {
                month: "July 2023",
                ticker: "#Corn_N23",
                start: new Date("Apr 26, 2023"),
                close: new Date("Jun 28, 2023"),
                expiration: new Date("Jun 30, 2023"),
              },
              {
                month: "September 2023",
                ticker: "#Corn_U23",
                start: new Date("Jun 28, 2023"),
                close: new Date("Aug 29, 2023"),
                expiration: new Date("Aug 31, 2023"),
              },
              {
                month: "December 2023",
                ticker: "#Corn_Z23",
                start: new Date("Aug 29, 2023"),
                close: new Date("Nov 28, 2023"),
                expiration: new Date("Nov 30, 2023"),
              },
            ],
          },
          {
            name: "#SBean",
            months: [
              {
                month: "November 2022",
                ticker: "#SBean_X22",
                start: new Date("2022-08-28T21:00:00.000Z"),
                close: new Date("2022-10-26T21:00:00.000Z"),
                expiration: new Date("2022-10-30T22:00:00.000Z"),
              },
              {
                month: "January 2023",
                ticker: "#SBean_F23",
                start: new Date("2022-10-26T21:00:00.000Z"),
                close: new Date("2022-12-27T21:00:00.000Z"),
                expiration: new Date("2022-12-29T22:00:00.000Z"),
              },
              {
                month: "March 2023",
                ticker: "#SBean_H23",
                start: new Date("2022-12-28T21:00:00.000Z"),
                close: new Date("2023-02-24T21:00:00.000Z"),
                expiration: new Date("2023-02-27T22:00:00.000Z"),
              },
              {
                month: "May 2023",
                ticker: "#SBean_K23",
                start: new Date("2023-02-24T21:00:00.000Z"),
                close: new Date("2023-04-25T21:00:00.000Z"),
                expiration: new Date("2023-04-27T22:00:00.000Z"),
              },
              {
                month: "July 2023",
                ticker: "#SBean_N23",
                start: new Date("2023-04-25T21:00:00.000Z"),
                close: new Date("2023-06-27T21:00:00.000Z"),
                expiration: new Date("2023-06-29T22:00:00.000Z"),
              },
              {
                month: "August 2023",
                ticker: "#SBean_Q23",
                start: new Date("2023-06-27T21:00:00.000Z"),
                close: new Date("2023-07-26T21:00:00.000Z"),
                expiration: new Date("2023-07-30T22:00:00.000Z"),
              },
              {
                month: "September 2023",
                ticker: "#SBean_U23",
                start: new Date("2023-07-26T21:00:00.000Z"),
                close: new Date("2023-08-28T21:00:00.000Z"),
                expiration: new Date("2023-08-30T22:00:00.000Z"),
              },
              {
                month: "November 2023",
                ticker: "#SBean_X23",
                start: new Date("2023-07-26T21:00:00.000Z"),
                close: new Date("2023-10-26T21:00:00.000Z"),
                expiration: new Date("2023-10-30T22:00:00.000Z"),
              },
            ],
          },
          {
            name: "#FRA40",
            months: [
              {
                month: "December 2022",
                ticker: "#FRA40_Z22",
                start: new Date("Sep 14, 2022"),
                close: new Date("Dec 14, 2022"),
                expiration: new Date("Dec 16, 2022"),
              },
              {
                month: "March 2023",
                ticker: "#FRA40_H23",
                start: new Date("Dec 14, 2022"),
                close: new Date("Mar 15, 2023"),
                expiration: new Date("Mar 17, 2023"),
              },
              {
                month: "June 2023",
                ticker: "#FRA40_M23",
                start: new Date("Mar 15, 2023"),
                close: new Date("Jun 14, 2023"),
                expiration: new Date("Jun 16, 2023"),
              },
              {
                month: "September 2023",
                ticker: "#FRA40_U23",
                start: new Date("Jun 14, 2023"),
                close: new Date("Sep 13, 2023"),
                expiration: new Date("Sep 15, 2023"),
              },
              {
                month: "December 2023",
                ticker: "#FRA40_Z23",
                start: new Date("Sep 13, 2023"),
                close: new Date("Dec 13, 2023"),
                expiration: new Date("Dec 15, 2023"),
              },
            ],
          },
          {
            name: "#GER40",
            months: [
              {
                month: "December 2022",
                ticker: "#GER40_Z22",
                start: new Date("Sep 14, 2022"),
                close: new Date("Dec 14, 2022"),
                expiration: new Date("Dec 16, 2022"),
              },
              {
                month: "March 2023",
                ticker: "#GER40_H23",
                start: new Date("Dec 14, 2022"),
                close: new Date("Mar 15, 2023"),
                expiration: new Date("Mar 17, 2023"),
              },
              {
                month: "June 2023",
                ticker: "#GER40_M23",
                start: new Date("Mar 15, 2023"),
                close: new Date("Jun 14, 2023"),
                expiration: new Date("Jun 16, 2023"),
              },
              {
                month: "September 2023",
                ticker: "#GER40_U23",
                start: new Date("Jun 14, 2023"),
                close: new Date("Sep 13, 2023"),
                expiration: new Date("Sep 15, 2023"),
              },
              {
                month: "December 2023",
                ticker: "#GER40_Z23",
                start: new Date("Sep 13, 2023"),
                close: new Date("Dec 13, 2023"),
                expiration: new Date("Dec 15, 2023"),
              },
            ],
          },
          {
            name: "#UK100",
            months: [
              {
                month: "December 2022",
                ticker: "#UK100_Z22",
                start: new Date("Sep 14, 2022"),
                close: new Date("Dec 14, 2022"),
                expiration: new Date("Dec 16, 2022"),
              },
              {
                month: "March 2023",
                ticker: "#UK100_H23",
                start: new Date("Dec 14, 2022"),
                close: new Date("Mar 15, 2023"),
                expiration: new Date("Mar 17, 2023"),
              },
              {
                month: "June 2023",
                ticker: "#UK100_M23",
                start: new Date("Mar 15, 2023"),
                close: new Date("Jun 14, 2023"),
                expiration: new Date("Jun 16, 2023"),
              },
              {
                month: "September 2023",
                ticker: "#UK100_U23",
                start: new Date("Jun 14, 2023"),
                close: new Date("Sep 13, 2023"),
                expiration: new Date("Sep 15, 2023"),
              },
              {
                month: "December 2023",
                ticker: "#UK100_Z23",
                start: new Date("Sep 13, 2023"),
                close: new Date("Dec 13, 2023"),
                expiration: new Date("Dec 15, 2023"),
              },
            ],
          },
          {
            name: "#JP225",
            months: [
              {
                month: "December 2022",
                ticker: "#JP225_Z22",
                start: new Date("Sep 06, 2022"),
                close: new Date("Dec 06, 2022"),
                expiration: new Date("Dec 08, 2022"),
              },
              {
                month: "March 2023",
                ticker: "#JP225_H23",
                start: new Date("Dec 06, 2022"),
                close: new Date("Mar 03, 2023"),
                expiration: new Date("Mar 09, 2023"),
              },
              {
                month: "June 2023",
                ticker: "#JP225_M23",
                start: new Date("Mar 07, 2023"),
                close: new Date("Jun 06, 2023"),
                expiration: new Date("Jun 08, 2023"),
              },
              {
                month: "September 2023",
                ticker: "#JP225_U23",
                start: new Date("Jun 06, 2023"),
                close: new Date("Sep 05, 2023"),
                expiration: new Date("Sep 07, 2023"),
              },
              {
                month: "December 2023",
                ticker: "#JP225_Z23",
                start: new Date("Sep 05, 2023"),
                close: new Date("Dec 05, 2023"),
                expiration: new Date("Dec 07, 2023"),
              },
            ],
          },
          {
            name: "#SWI20",
            months: [
              {
                month: "December 2022",
                ticker: "#SWI20_Z22",
                start: new Date("Sep 14, 2022"),
                close: new Date("Dec 14, 2022"),
                expiration: new Date("Dec 16, 2022"),
              },
              {
                month: "March 2023",
                ticker: "#SWI20_H23",
                start: new Date("Dec 14, 2022"),
                close: new Date("Mar 15, 2023"),
                expiration: new Date("Mar 17, 2023"),
              },
              {
                month: "June 2023",
                ticker: "#SWI20_M23",
                start: new Date("Mar 15, 2023"),
                close: new Date("Jun 14, 2023"),
                expiration: new Date("Jun 16, 2023"),
              },
              {
                month: "September 2023",
                ticker: "#SWI20_U23",
                start: new Date("Jun 14, 2023"),
                close: new Date("Sep 13, 2023"),
                expiration: new Date("Sep 15, 2023"),
              },
              {
                month: "December 2023",
                ticker: "#SWI20_Z23",
                start: new Date("Sep 13, 2023"),
                close: new Date("Dec 13, 2023"),
                expiration: new Date("Dec 15, 2023"),
              },
            ],
          },
          {
            name: "#UKOil",
            months: [
              {
                month: "November 2022",
                ticker: "#UKOil_X22",
                start: new Date("Aug 29, 2022"),
                close: new Date("Sep 28, 2022"),
                expiration: new Date("Sep 30, 2022"),
              },
              {
                month: "December 2022",
                ticker: "#UKOil_Z22",
                start: new Date("Sep 28, 2022"),
                close: new Date("Oct 27, 2022"),
                expiration: new Date("Oct 31, 2022"),
              },
              {
                month: "January 2023",
                ticker: "#UKOil_F23",
                start: new Date("Oct 27, 2022"),
                close: new Date("Nov 28, 2022"),
                expiration: new Date("Nov 30, 2022"),
              },
              {
                month: "February 2023",
                ticker: "#UKOil_G23",
                start: new Date("Nov 28, 2022"),
                close: new Date("Dec 28, 2022"),
                expiration: new Date("Dec 29, 2022"),
              },
              {
                month: "March 2023",
                ticker: "#UKOil_H23",
                start: new Date("Dec 28, 2022"),
                close: new Date("Jan 27, 2023"),
                expiration: new Date("Jan 31, 2023"),
              },
              {
                month: "April 2023",
                ticker: "#UKOil_J23",
                start: new Date("Jan 27, 2023"),
                close: new Date("Feb 24, 2023"),
                expiration: new Date("Feb 28, 2023"),
              },
              {
                month: "May 2023",
                ticker: "#UKOil_K23",
                start: new Date("Feb 24, 2023"),
                close: new Date("Mar 29, 2023"),
                expiration: new Date("Mar 31, 2023"),
              },
              {
                month: "June 2023",
                ticker: "#UKOil_M23",
                start: new Date("Mar 29, 2023"),
                close: new Date("Apr 26, 2023"),
                expiration: new Date("Apr 28, 2023"),
              },
              {
                month: "July 2023",
                ticker: "#UKOil_N23",
                start: new Date("Apr 26, 2023"),
                close: new Date("May 26, 2023"),
                expiration: new Date("May 31, 2023"),
              },
              {
                month: "August 2023",
                ticker: "#UKOil_Q23",
                start: new Date("May 26, 2023"),
                close: new Date("Jun 28, 2023"),
                expiration: new Date("Jun 30, 2023"),
              },
              {
                month: "September 2023",
                ticker: "#UKOil_U23",
                start: new Date("Jun 28, 2023"),
                close: new Date("Jul 27, 2023"),
                expiration: new Date("Jul 31, 2023"),
              },
              {
                month: "October 2023",
                ticker: "#UKOil_V23",
                start: new Date("Jul 27, 2023"),
                close: new Date("Aug 29, 2023"),
                expiration: new Date("Aug 31, 2023"),
              },
              {
                month: "November 2023",
                ticker: "#UKOil_X23",
                start: new Date("Aug 29, 2023"),
                close: new Date("Sep 27, 2023"),
                expiration: new Date("Sep 29, 2023"),
              },
              {
                month: "December 2023",
                ticker: "#UKOil_Z23",
                start: new Date("Sep 29, 2023"),
                close: new Date("Oct 27, 2023"),
                expiration: new Date("Oct 31, 2023"),
              },
              {
                month: "January 2024",
                ticker: "#UKOil_F24",
                start: new Date("Oct 27, 2023"),
                close: new Date("Nov 28, 2023"),
                expiration: new Date("Nov 30, 2023"),
              },
              {
                month: "February 2024",
                ticker: "#UKOil_G24",
                start: new Date("Nov 28, 2023"),
                close: new Date("Dec 27, 2023"),
                expiration: new Date("Dec 28, 2023"),
              },
              {
                month: "March 2024",
                ticker: "#UKOil_H24",
                start: new Date("Dec 27, 2023"),
                close: new Date("Jan 29, 2024"),
                expiration: new Date("Jan 31, 2024"),
              },
            ],
          },
          {
            name: "#Sugar",
            months: [
              {
                month: "March 2023",
                ticker: "#Sugar_H23",
                start: new Date("Sep 27, 2022"),
                close: new Date("Feb 24, 2023"),
                expiration: new Date("Feb 28, 2023"),
              },
              {
                month: "May 2023",
                ticker: "#Sugar_K23",
                start: new Date("Feb 24, 2023"),
                close: new Date("Apr 26, 2023"),
                expiration: new Date("Apr 28, 2023"),
              },
              {
                month: "July 2023",
                ticker: "#Sugar_N23",
                start: new Date("Apr 26, 2023"),
                close: new Date("Jun 28, 2023"),
                expiration: new Date("Jun 30, 2023"),
              },
              {
                month: "October 2023",
                ticker: "#Sugar_V23",
                start: new Date("Jun 28, 2023"),
                close: new Date("Sep 27, 2023"),
                expiration: new Date("Sep 29, 2023"),
              },
            ],
          },
          {
            name: "#Coffee",
            months: [
              {
                month: "December 2022",
                ticker: "#Coffee_Z22",
                start: new Date("Aug 18, 2022"),
                close: new Date("Nov 16, 2022"),
                expiration: new Date("Nov 20, 2022"),
              },
              {
                month: "March 2023",
                ticker: "#Coffee_H23",
                start: new Date("Nov 17, 2022"),
                close: new Date("Feb 15, 2023"),
                expiration: new Date("Feb 17, 2023"),
              },
              {
                month: "May 2023",
                ticker: "#Coffee_K23",
                start: new Date("Feb 15, 2023"),
                close: new Date("Apr 18, 2023"),
                expiration: new Date("Apr 20, 2023"),
              },
              {
                month: "July 2023",
                ticker: "#Coffee_N23",
                start: new Date("Apr 18, 2023"),
                close: new Date("Jun 20, 2023"),
                expiration: new Date("Jun 22, 2023"),
              },
              {
                month: "September 2023",
                ticker: "#Coffee_U23",
                start: new Date("Jun 20, 2023"),
                close: new Date("Aug 21, 2023"),
                expiration: new Date("Aug 23, 2023"),
              },
              {
                month: "December 2023",
                ticker: "#Coffee_Z23",
                start: new Date("Aug 21, 2023"),
                close: new Date("Nov 17, 2023"),
                expiration: new Date("Nov 21, 2023"),
              },
            ],
          },
          {
            name: "#Cocoa",
            months: [
              {
                month: "December 2022",
                ticker: "#Cocoa_Z22",
                start: new Date("Aug 22, 2022"),
                close: new Date("Nov 20, 2022"),
                expiration: new Date("Nov 22, 2022"),
              },
              {
                month: "March 2023",
                ticker: "#Cocoa_H23",
                start: new Date("Nov 21, 2022"),
                close: new Date("Feb 21, 2023"),
                expiration: new Date("Feb 22, 2023"),
              },
              {
                month: "May 2023",
                ticker: "#Cocoa_K23",
                start: new Date("Feb 21, 2023"),
                close: new Date("Apr 20, 2023"),
                expiration: new Date("Apr 24, 2023"),
              },
              {
                month: "July 2023",
                ticker: "#Cocoa_N23",
                start: new Date("Apr 20, 2023"),
                close: new Date("Jun 22, 2023"),
                expiration: new Date("Jun 26, 2023"),
              },
              {
                month: "September 2023",
                ticker: "#Cocoa_U23",
                start: new Date("Jun 22, 2023"),
                close: new Date("Aug 23, 2023"),
                expiration: new Date("Aug 25, 2023"),
              },
              {
                month: "December 2023",
                ticker: "#Cocoa_Z23",
                start: new Date("Aug 23, 2023"),
                close: new Date("Nov 22, 2023"),
                expiration: new Date("Nov 24, 2023"),
              },
            ],
          },
          {
            name: "#Cotton",
            months: [
              {
                month: "December 2022",
                ticker: "#Cotton_Z22",
                start: new Date("Sep 21, 2022"),
                close: new Date("Nov 20, 2022"),
                expiration: new Date("Nov 22, 2022"),
              },
              {
                month: "March 2023",
                ticker: "#Cotton_H23",
                start: new Date("Nov 21, 2022"),
                close: new Date("Feb 21, 2023"),
                expiration: new Date("Feb 22, 2023"),
              },
              {
                month: "May 2023",
                ticker: "#Cotton_K23",
                start: new Date("Feb 21, 2023"),
                close: new Date("Apr 20, 2023"),
                expiration: new Date("Apr 24, 2023"),
              },
              {
                month: "July 2023",
                ticker: "#Cotton_N23",
                start: new Date("Apr 20, 2023"),
                close: new Date("Jun 22, 2023"),
                expiration: new Date("Jun 26, 2023"),
              },
              {
                month: "October 2023",
                ticker: "#Cotton_V23",
                start: new Date("Jun 22, 2023"),
                close: new Date("Sep 21, 2023"),
                expiration: new Date("Sep 25, 2023"),
              },
              {
                month: "December 2023",
                ticker: "#Cotton_Z23",
                start: new Date("Sep 21, 2023"),
                close: new Date("Nov 22, 2023"),
                expiration: new Date("Nov 24, 2023"),
              },
            ],
          },
          {
            name: "#US$idx",
            months: [
              {
                month: "December 2022",
                ticker: "#US$idx_Z22",
                start: new Date("Sep 15, 2022"),
                close: new Date("Dec 15, 2022"),
                expiration: new Date("Dec 19, 2022"),
              },
              {
                month: "March 2023",
                ticker: "#US$idx_H23",
                start: new Date("Dec 15, 2022"),
                close: new Date("Mar 09, 2023"),
                expiration: new Date("Mar 13, 2023"),
              },
              {
                month: "June 2023",
                ticker: "#US$idx_M23",
                start: new Date("Mar 09, 2023"),
                close: new Date("Jun 13, 2023"),
                expiration: new Date("Jun 16, 2023"),
              },
              {
                month: "September 2023",
                ticker: "#US$idx_U23",
                start: new Date("Jun 13, 2023"),
                close: new Date("Sep 14, 2023"),
                expiration: new Date("Sep 18, 2023"),
              },
              {
                month: "December 2023",
                ticker: "#US$idx_Z23",
                start: new Date("Sep 14, 2023"),
                close: new Date("Dec 14, 2023"),
                expiration: new Date("Dec 18, 2023"),
              },
            ],
          },
          {
            name: "#US2000",
            months: [
              {
                month: "December 2022",
                ticker: "#US2000_Z22",
                start: new Date("Sep 14, 2022"),
                close: new Date("Dec 14, 2022"),
                expiration: new Date("Dec 16, 2022"),
              },
              {
                month: "March 2023",
                ticker: "#US2000_H23",
                start: new Date("Dec 14, 2022"),
                close: new Date("Mar 15, 2023"),
                expiration: new Date("Mar 17, 2023"),
              },
              {
                month: "June 2023",
                ticker: "#US2000_M23",
                start: new Date("Mar 15, 2023"),
                close: new Date("Jun 14, 2023"),
                expiration: new Date("Jun 16, 2023"),
              },
              {
                month: "September 2023",
                ticker: "#US2000_U23",
                start: new Date("Jun 14, 2023"),
                close: new Date("Sep 13, 2023"),
                expiration: new Date("Sep 15, 2023"),
              },
              {
                month: "December 2023",
                ticker: "#US2000_Z23",
                start: new Date("Sep 13, 2023"),
                close: new Date("Dec 13, 2023"),
                expiration: new Date("Dec 15, 2023"),
              },
            ],
          },
          {
            name: "#GOLD",
            months: [
              {
                month: "December 2022",
                ticker: "#GOLD_Z22",
                start: new Date("2022-10-29T20:30:00.000Z"),
                close: new Date("2022-12-26T20:30:00.000Z"),
                expiration: new Date("2022-12-28T20:30:00.000Z"),
              },
              {
                month: "January 2023",
                ticker: "#GOLD_F23",
                start: new Date("2022-12-26T20:30:00.000Z"),
                close: new Date("2023-01-25T20:30:00.000Z"),
                expiration: new Date("2023-01-27T20:30:00.000Z"),
              },
              {
                month: "February 2023",
                ticker: "#GOLD_G23",
                start: new Date("2023-01-25T20:30:00.000Z"),
                close: new Date("2023-02-22T20:30:00.000Z"),
                expiration: new Date("2023-02-24T20:30:00.000Z"),
              },
              {
                month: "April 2023",
                ticker: "#GOLD_J23",
                start: new Date("2023-02-22T20:30:00.000Z"),
                close: new Date("2023-04-24T20:30:00.000Z"),
                expiration: new Date("2023-04-26T20:30:00.000Z"),
              },
              {
                month: "June 2023",
                ticker: "#GOLD_M23",
                start: new Date("2023-04-24T20:30:00.000Z"),
                close: new Date("2023-06-26T20:30:00.000Z"),
                expiration: new Date("2023-06-28T20:30:00.000Z"),
              },
              {
                month: "August 2023",
                ticker: "#GOLD_Q23",
                start: new Date("2023-06-26T20:30:00.000Z"),
                close: new Date("2023-08-25T20:30:00.000Z"),
                expiration: new Date("2023-08-29T20:30:00.000Z"),
              },
              {
                month: "September 2023",
                ticker: "#GOLD_U23",
                start: new Date("2023-08-25T20:30:00.000Z"),
                close: new Date("2023-09-25T20:30:00.000Z"),
                expiration: new Date("2023-09-27T20:30:00.000Z"),
              },
              {
                month: "October 2023",
                ticker: "#GOLD_V23",
                start: new Date("2023-09-25T20:30:00.000Z"),
                close: new Date("2023-10-25T20:30:00.000Z"),
                expiration: new Date("2023-10-27T20:30:00.000Z"),
              },
              {
                month: "Novebmer 2023",
                ticker: "#GOLD_X23",
                start: new Date("2023-10-25T20:30:00.000Z"),
                close: new Date("2023-11-24T20:30:00.000Z"),
                expiration: new Date("2023-11-28T20:30:00.000Z"),
              },
              {
                month: "December 2023",
                ticker: "#GOLD_Z23",
                start: new Date("2023-11-24T20:30:00.000Z"),
                close: new Date("2023-12-25T20:30:00.000Z"),
                expiration: new Date("2023-12-27T20:30:00.000Z"),
              },
            ],
          },
        ],
      };
    },
    fxb0: function (e, t) {
      !(function (e, t, a) {
        function o(e, t) {
          return typeof e === t;
        }
        function r(e) {
          var t = d.className,
            a = c._config.classPrefix || "";
          if ((p && (t = t.baseVal), c._config.enableJSClass)) {
            var o = new RegExp("(^|\\s)" + a + "no-js(\\s|$)");
            t = t.replace(o, "$1" + a + "js$2");
          }
          c._config.enableClasses &&
            ((t += " " + a + e.join(" " + a)),
            p ? (d.className.baseVal = t) : (d.className = t));
        }
        function n(e, t) {
          if ("object" == typeof e) for (var a in e) m(e, a) && n(a, e[a]);
          else {
            var o = (e = e.toLowerCase()).split("."),
              i = c[o[0]];
            if ((2 == o.length && (i = i[o[1]]), void 0 !== i)) return c;
            (t = "function" == typeof t ? t() : t),
              1 == o.length
                ? (c[o[0]] = t)
                : (!c[o[0]] ||
                    c[o[0]] instanceof Boolean ||
                    (c[o[0]] = new Boolean(c[o[0]])),
                  (c[o[0]][o[1]] = t)),
              r([(t && 0 != t ? "" : "no-") + o.join("-")]),
              c._trigger(e, t);
          }
          return c;
        }
        var i = [],
          l = [],
          s = {
            _version: "3.6.0",
            _config: {
              classPrefix: "",
              enableClasses: !0,
              enableJSClass: !0,
              usePrefixes: !0,
            },
            _q: [],
            on: function (e, t) {
              var a = this;
              setTimeout(function () {
                t(a[e]);
              }, 0);
            },
            addTest: function (e, t, a) {
              l.push({ name: e, fn: t, options: a });
            },
            addAsyncTest: function (e) {
              l.push({ name: null, fn: e });
            },
          },
          c = function () {};
        (c.prototype = s), (c = new c());
        var m,
          d = t.documentElement,
          p = "svg" === d.nodeName.toLowerCase();
        !(function () {
          var e = {}.hasOwnProperty;
          m =
            o(e, "undefined") || o(e.call, "undefined")
              ? function (e, t) {
                  return t in e && o(e.constructor.prototype[t], "undefined");
                }
              : function (t, a) {
                  return e.call(t, a);
                };
        })(),
          (s._l = {}),
          (s.on = function (e, t) {
            this._l[e] || (this._l[e] = []),
              this._l[e].push(t),
              c.hasOwnProperty(e) &&
                setTimeout(function () {
                  c._trigger(e, c[e]);
                }, 0);
          }),
          (s._trigger = function (e, t) {
            if (this._l[e]) {
              var a = this._l[e];
              setTimeout(function () {
                var e;
                for (e = 0; e < a.length; e++) (0, a[e])(t);
              }, 0),
                delete this._l[e];
            }
          }),
          c._q.push(function () {
            s.addTest = n;
          }),
          c.addAsyncTest(function () {
            function e(e, t, a) {
              function o(t) {
                var o = !(!t || "load" !== t.type) && 1 == r.width;
                n(e, "webp" === e && o ? new Boolean(o) : o), a && a(t);
              }
              var r = new Image();
              (r.onerror = o), (r.onload = o), (r.src = t);
            }
            var t = [
                {
                  uri: "data:image/webp;base64,UklGRiQAAABXRUJQVlA4IBgAAAAwAQCdASoBAAEAAwA0JaQAA3AA/vuUAAA=",
                  name: "webp",
                },
                {
                  uri: "data:image/webp;base64,UklGRkoAAABXRUJQVlA4WAoAAAAQAAAAAAAAAAAAQUxQSAwAAAABBxAR/Q9ERP8DAABWUDggGAAAADABAJ0BKgEAAQADADQlpAADcAD++/1QAA==",
                  name: "webp.alpha",
                },
                {
                  uri: "data:image/webp;base64,UklGRlIAAABXRUJQVlA4WAoAAAASAAAAAAAAAAAAQU5JTQYAAAD/////AABBTk1GJgAAAAAAAAAAAAAAAAAAAGQAAABWUDhMDQAAAC8AAAAQBxAREYiI/gcA",
                  name: "webp.animation",
                },
                {
                  uri: "data:image/webp;base64,UklGRh4AAABXRUJQVlA4TBEAAAAvAAAAAAfQ//73v/+BiOh/AAA=",
                  name: "webp.lossless",
                },
              ],
              a = t.shift();
            e(a.name, a.uri, function (a) {
              if (a && "load" === a.type)
                for (var o = 0; o < t.length; o++) e(t[o].name, t[o].uri);
            });
          }),
          (function () {
            var e, t, a, r, n, s;
            for (var m in l)
              if (l.hasOwnProperty(m)) {
                if (
                  ((e = []),
                  (t = l[m]).name &&
                    (e.push(t.name.toLowerCase()),
                    t.options && t.options.aliases && t.options.aliases.length))
                )
                  for (a = 0; a < t.options.aliases.length; a++)
                    e.push(t.options.aliases[a].toLowerCase());
                for (
                  r = o(t.fn, "function") ? t.fn() : t.fn, n = 0;
                  n < e.length;
                  n++
                )
                  1 === (s = e[n].split(".")).length
                    ? (c[s[0]] = r)
                    : (!c[s[0]] ||
                        c[s[0]] instanceof Boolean ||
                        (c[s[0]] = new Boolean(c[s[0]])),
                      (c[s[0]][s[1]] = r)),
                    i.push((r ? "" : "no-") + s.join("-"));
              }
          })(),
          r(i),
          delete s.addTest,
          delete s.addAsyncTest;
        for (var u = 0; u < c._q.length; u++) c._q[u]();
        e.Modernizr = c;
      })(window, document);
    },
    g2vv: function (e, t, a) {
      "use strict";
      a.d(t, "a", function () {
        return s;
      });
      var o = a("lJxs"),
        r = a("JX91"),
        n = a("/uUt"),
        i = a("fXoL"),
        l = a("sYmb");
      class s {
        constructor(e) {
          this.translateService = e;
        }
        onLangChange() {
          return this.translateService.onLangChange.pipe(
            Object(o.a)((e) => e.lang.toLowerCase()),
            Object(r.a)(this.translateService.currentLang),
            Object(n.a)()
          );
        }
      }
      (s.ɵfac = function (e) {
        return new (e || s)(i["\u0275\u0275inject"](l.d));
      }),
        (s.ɵprov = i["\u0275\u0275defineInjectable"]({
          token: s,
          factory: s.ɵfac,
          providedIn: "root",
        }));
    },
    h0X1: function (e, t, a) {
      "use strict";
      a.d(t, "a", function () {
        return l;
      });
      var o = a("jtHE"),
        r = a("/uUt"),
        n = a("3C1k"),
        i = (a("c5vA"), a("fXoL"));
      class l {
        constructor(e, t) {
          (this.userCountry = e),
            (this.userJurisdiction = t),
            (this.regulatorChangedSubject$ = new o.a(1)),
            (this.regulatorChanged$ = this.regulatorChangedSubject$
              .asObservable()
              .pipe(
                Object(r.a)(
                  (e, t) =>
                    e.regulator === t.regulator && e.country === t.country
                )
              )),
            this.changeRegulator({
              country: this.userCountry,
              regulator: this.userJurisdiction.defaultRegulator,
            });
        }
        changeRegulator(e) {
          this.regulatorChangedSubject$.next(e);
        }
        ngOnDestroy() {
          this.regulatorChangedSubject$.unsubscribe();
        }
      }
      (l.ɵfac = function (e) {
        return new (e || l)(
          i["\u0275\u0275inject"](n.a),
          i["\u0275\u0275inject"](n.e)
        );
      }),
        (l.ɵprov = i["\u0275\u0275defineInjectable"]({
          token: l,
          factory: l.ɵfac,
          providedIn: "root",
        }));
    },
    hqYv: function (e, t, a) {
      "use strict";
      a.d(t, "a", function () {
        return m;
      });
      var o = a("XNiG"),
        r = a("1G5W"),
        n = a("3C1k"),
        i = a("Uiwt"),
        l = a("4OM5"),
        s = a("fXoL"),
        c = a("sYmb");
      class m {
        constructor(e, t, a, r, n) {
          (this.translateService = e),
            (this.menuRestriction = t),
            (this.deviceDetectService = a),
            (this.userCountry = r),
            (this.userExperiments = n),
            (this.destroyObservable = new o.a());
        }
        ngOnDestroy() {
          this.destroyObservable.next(), this.destroyObservable.complete();
        }
        pushUrl(e) {
          if (!this.deviceDetectService.isBrowser) return;
          const t = this.translateService.currentLang;
          this.menuRestriction
            .getListOfAvailableMenu()
            .pipe(Object(r.a)(this.destroyObservable))
            .subscribe((a) => {
              let o, r;
              for (const t of a)
                for (const a of t.subMenu) {
                  (a.isSubRoute
                    ? e.startsWith(a.url)
                    : e.split("?")[0] === a.url) && (o = a.id);
                }
              switch (o) {
                case void 0:
                  r = "main";
                  break;
                case "menu_forex":
                  r = "forex";
                  break;
                case "menu_futures":
                  r = "futures";
                  break;
                case "menu_spot_indices":
                  r = "indices";
                  break;
                case "menu_shares":
                  r = "shares";
                  break;
                case "menu_spot_metals":
                  r = "metals";
                  break;
                case "menu_spot_energies":
                  r = "energies";
                  break;
                case "menu_fxpro_mt4":
                case "menu_fxpro_mt5":
                case "menu_fxpro_ctrader":
                case "menu_fxpro_edge":
                case "menu_comparison_platforms":
                  r = "platforms";
                  break;
                case "menu_fxpro_tools":
                case "menu_education":
                case "menu_economic_calendar":
                case "menu_earnings_calendar":
                case "menu_market_holidays":
                case "menu_trading_central":
                  r = "tools";
                  break;
                case "menu_deposit":
                case "menu_no_dealing_desk_execution":
                case "menu_forex_open_account":
                  r = "pricing";
                  break;
                case "menu_about_sub":
                case "menu_safety":
                case "menu_credit_rating":
                case "menu_sponsorship":
                case "menu_partners":
                case "menu_news_room":
                case "menu_careers":
                case "menu_contact":
                case "menu_faq":
                case "menu_cme_educational":
                  r = "company";
                  break;
                case "menu_site_tcs":
                case "menu_legal_docs":
                case "menu_corporate_actions":
                case "menu_kid":
                case "menu_complaints":
                case "menu_privacy_policy":
                case "menu_risk_disclosure":
                case "menu_email_disclaimer":
                case "menu_cookies":
                case "menu_tied_agents":
                  r = "documentation";
                  break;
                case "menu_mt4_oe":
                case "menu_mt5_oe":
                case "menu_ctrader_oe":
                case "menu_leverage_information":
                  r = "executionAndLeverage";
                  break;
                default:
                  r = "other";
              }
              window.dataLayer.push({
                pageType: r,
                language: t,
                countryByIp: this.userCountry,
                userExperiments: this.userExperiments,
              });
            });
        }
        pushCookieConsentAcceptedEvent() {
          this.deviceDetectService.isBrowser &&
            window.dataLayer.push(
              { cookie_consent: "accepted" },
              {
                event: "cookieConsentSubmitted",
                value: !0,
                countryByIp: this.userCountry,
                userExperiments: this.userExperiments,
              }
            );
        }
        pushFscmLoadedEvent() {
          window.dataLayer.push({
            event: "FSCMPageLoaded",
            value: !0,
            countryByIp: this.userCountry,
            userExperiments: this.userExperiments,
          });
        }
      }
      (m.ɵfac = function (e) {
        return new (e || m)(
          s["\u0275\u0275inject"](c.d),
          s["\u0275\u0275inject"](l.a),
          s["\u0275\u0275inject"](i.a),
          s["\u0275\u0275inject"](n.a),
          s["\u0275\u0275inject"](n.f)
        );
      }),
        (m.ɵprov = s["\u0275\u0275defineInjectable"]({
          token: m,
          factory: m.ɵfac,
          providedIn: "root",
        }));
    },
    iAqX: function (e, t, a) {
      "use strict";
      a.d(t, "c", function () {
        return o;
      }),
        a.d(t, "b", function () {
          return r;
        }),
        a.d(t, "a", function () {
          return n;
        });
      const o = [
          {
            enabledLanguages: [
              "ar",
              "zh",
              "tw",
              "en",
              "fr",
              "ko",
              "ru",
              "es",
              "hu",
              "id",
            ],
          },
        ],
        r = [{ enabledLanguages: ["pt", "de", "es", "en", "ru", "id", "zh"] }],
        n = [{ enabledLanguages: ["en"] }];
    },
    "iJl/": function (e, t, a) {
      "use strict";
      var o;
      a.d(t, "a", function () {
        return o;
      }),
        (function (e) {
          (e.Forex = "forex"),
            (e.SpotMetals = "metals"),
            (e.SpotEnergies = "energies"),
            (e.Shares = "shares"),
            (e.Indices = "indices"),
            (e.Futures = "futures"),
            (e.Cryptocurrencies = "cryptocurrencies");
        })(o || (o = {}));
    },
    "khT+": function (e, t, a) {
      "use strict";
      a.d(t, "a", function () {
        return o;
      });
      const o = new (a("fXoL").InjectionToken)("USER_AGENT");
    },
    ll7P: function (e, t, a) {
      "use strict";
      a.d(t, "a", function () {
        return o;
      });
      const o = {
        Cn: [
          "www.fx-pro.website",
          "www.cn-fxpro.com.cn",
          "www.cn-fxpro.cn",
          "www.fxprocn.cn",
          "www.cn-fxpro.com",
          "www.fxpro.cn",
          "www.fxpro-cn.com",
          "www.fxpro.cn",
          "www.fxpro-zh.com",
          "www.fxprochina.cn",
          "www.cnfxpro.cn",
          "fxpro-china-region-app.fxpro-china-region-env.p.azurewebsites.net",
          "fxpro-china-region-app-slot.fxpro-china-region-env.p.azurewebsites.net",
          "www.china-fxpro.com.cn",
          "www.fx-pro.site",
          "www.fx-pro.website",
          "www.fxpro888.com",
          "www.fxpro88.com",
          "www.china-fxpro.com",
          "www.fx-pro.com.cn",
          "www.zh-fxpro.com",
          "www.fxpro-china.com.cn",
          "www.zh-fxpro.com.cn",
          "www.fxprozh.com.cn",
          "www.fxpro-cn.com.cn",
        ],
        Ru: [
          "www.cis-fxpro.com",
          "www.fxpro-ru.org",
          "www.fxproru.group",
          "www.fxpro-global.org",
          "www.fxpro-ru.com",
          "www.fxpro-russia.com",
          "www.fxpro-finance.com",
          "www.fxpro-finance.org",
          "www.fxprogroup.ru",
          "www.fxpro.ru",
          "www.fxpro-start.com",
          "www.fxpro-trading.com",
          "www.fxpro.market",
          "www.promo.investments",
          "www.fxpro.ru.com",
          "www.cis-fxpro.com",
          "www.fxprocis.com",
        ],
      };
    },
    mZ0c: function (e, t, a) {
      "use strict";
      var o;
      a.d(t, "a", function () {
        return o;
      }),
        (function (e) {
          e.PARTNER_ID = "partnership";
        })(o || (o = {}));
    },
    nbXG: function (e, t, a) {
      "use strict";
      a.d(t, "a", function () {
        return n;
      });
      var o = a("Uiwt"),
        r = a("fXoL");
      class n {
        constructor(e) {
          this.deviceDetectService = e;
        }
        setItem(e, t, a) {
          this.deviceDetectService.isBrowser &&
            (a
              ? window.localStorage.setItem(e, JSON.stringify(t))
              : window.localStorage.setItem(e, t));
        }
        getItem(e, t) {
          if (this.deviceDetectService.isBrowser)
            return t
              ? JSON.parse(window.localStorage.getItem(e))
              : window.localStorage.getItem(e);
        }
      }
      (n.ɵfac = function (e) {
        return new (e || n)(r["\u0275\u0275inject"](o.a));
      }),
        (n.ɵprov = r["\u0275\u0275defineInjectable"]({
          token: n,
          factory: n.ɵfac,
          providedIn: "root",
        }));
    },
    ng6S: function (e, t, a) {
      "use strict";
      a.d(t, "a", function () {
        return s;
      });
      var o = a("3C1k"),
        r = a("c5vA"),
        n = a("Uiwt"),
        i = a("43M5"),
        l = a("fXoL");
      class s {
        constructor(e, t, a, o) {
          (this.userCountry = e),
            (this.userExperiments = t),
            (this.http = a),
            (this.deviceDetectService = o),
            (this.countries = r.a),
            this.onServiceInit();
        }
        onServiceInit() {
          this.deviceDetectService.isBrowser &&
            window.dataLayer.push({
              countryByIp: this.userCountry,
              userExperiments: this.userExperiments,
            });
        }
        isEu() {
          const e = this.countries.find((e) => e.code === this.userCountry);
          return e && e.isEu;
        }
      }
      (s.ɵfac = function (e) {
        return new (e || s)(
          l["\u0275\u0275inject"](o.a),
          l["\u0275\u0275inject"](o.f),
          l["\u0275\u0275inject"](i.a),
          l["\u0275\u0275inject"](n.a)
        );
      }),
        (s.ɵprov = l["\u0275\u0275defineInjectable"]({
          token: s,
          factory: s.ɵfac,
          providedIn: "root",
        }));
    },
    ng9D: function (e, t, a) {
      "use strict";
      var o, r;
      a.d(t, "b", function () {
        return o;
      }),
        a.d(t, "a", function () {
          return r;
        }),
        (function (e) {
          (e.FCA = "FxPro UK Limited"),
            (e.Global = "FxPro Global Markets Ltd"),
            (e.CySec = "FxPro Financial Services Ltd"),
            (e.FSCM = "Prime Ash Capital Limited"),
            (e.FSAS = "Invemonde Trading Ltd"),
            (e.KNN = "Pro Global Ltd");
        })(o || (o = {})),
        (function (e) {
          (e.FCA = "fca"),
            (e.Global = "gm"),
            (e.CySec = "cysec"),
            (e.FSCM = "fscm"),
            (e.FSAS = "fsas"),
            (e.KNN = "knn");
        })(r || (r = {}));
    },
    oXjn: function (e, t, a) {
      "use strict";
      a.d(t, "a", function () {
        return l;
      });
      var o = a("mZ0c"),
        r = a("nbXG"),
        n = a("7+hn"),
        i = a("fXoL");
      class l {
        constructor(e, t) {
          (this.scriptLoaderService = e),
            (this.localStorageService = t),
            (this.partnerStorageKey = o.a.PARTNER_ID);
        }
        setPartner(e) {
          return (
            this.scriptLoaderService.loadScript(
              "https://cookies.technowdb.info/cookie.php?c2s=" + e,
              !0
            ),
            this.localStorageService.setItem(this.partnerStorageKey, e),
            !0
          );
        }
        getPartner() {
          const e = this.localStorageService.getItem(this.partnerStorageKey);
          return e
            ? new Promise((t, a) => {
                t(e);
              })
            : this.scriptLoaderService
                .loadScript("https://cookies.technowdb.info/cookie.php/?gc")
                .then(() => {
                  try {
                    return window.__FXPROCookie &&
                      this.isPartnerValid(window.__FXPROCookie)
                      ? window.__FXPROCookie
                      : "";
                  } catch (e) {
                    return "";
                  }
                });
        }
        isPartnerValid(e) {
          return /^[a-zA-Z0-9_]{1,30}$/g.test(e);
        }
      }
      (l.ɵfac = function (e) {
        return new (e || l)(
          i["\u0275\u0275inject"](n.a),
          i["\u0275\u0275inject"](r.a)
        );
      }),
        (l.ɵprov = i["\u0275\u0275defineInjectable"]({
          token: l,
          factory: l.ɵfac,
          providedIn: "root",
        }));
    },
    p3XQ: function (e, t, a) {
      "use strict";
      a.d(t, "a", function () {
        return o;
      });
      const o = new (a("fXoL").InjectionToken)("ORIGIN_URL");
    },
    pirP: function (e, t, a) {
      "use strict";
      function o(e) {
        return e
          .replace("#", "")
          .replace("%23", "")
          .replace("&", "")
          .replace("%26", "")
          .replace("$", "")
          .replace("_", "")
          .replace(/\./g, "")
          .toLowerCase();
      }
      function r(e) {
        return e.split("_")[0];
      }
      a.d(t, "b", function () {
        return o;
      }),
        a.d(t, "a", function () {
          return r;
        });
    },
    qBOQ: function (e, t, a) {
      "use strict";
      a.d(t, "a", function () {
        return i;
      });
      var o = a("Zw2m");
      class r {
        constructor() {}
        static getRoundAwardsNumber() {
          const e = o.b.reduce((e, t) => e + t.years.length, 0);
          let t;
          return (
            (t =
              e % 10 == 5
                ? 5 * Math.floor((e - 1) / 5)
                : 5 * Math.floor(e / 5)),
            t
          );
        }
      }
      r.ROUND_AWARD_NUMBER = r.getRoundAwardsNumber();
      var n = a("fXoL");
      class i extends r {
        static getAwards(e) {
          return o.b.filter((t) => t.type == e);
        }
        static getAwardsNumber(e) {
          return i.getAwards(e).reduce((e, t) => e + t.years.length, 0);
        }
      }
      (i.ɵfac = function (e) {
        return l(e || i);
      }),
        (i.ɵprov = n["\u0275\u0275defineInjectable"]({
          token: i,
          factory: i.ɵfac,
          providedIn: "root",
        }));
      const l = n["\u0275\u0275getInheritedFactory"](i);
    },
    vj7Q: function (e, t, a) {
      "use strict";
      a.d(t, "d", function () {
        return r;
      }),
        a.d(t, "c", function () {
          return n;
        }),
        a.d(t, "a", function () {
          return i;
        }),
        a.d(t, "b", function () {
          return l;
        });
      var o = a("7kPy");
      const r = { enabledRegulators: [o.c.FSCM, o.c.FSAS] },
        n = { disabledRegulators: [o.c.FSCM, o.c.FSAS] },
        i = [
          "AZ",
          "AM",
          "BY",
          "KZ",
          "KG",
          "MD",
          "TJ",
          "UZ",
          "GE",
          "TM",
          "UA",
          "RU",
        ],
        l = [
          "AT",
          "BE",
          "BG",
          "HR",
          "CY",
          "CZ",
          "DK",
          "EE",
          "FI",
          "FR",
          "DE",
          "GR",
          "GR",
          "HU",
          "IE",
          "IT",
          "LV",
          "LT",
          "LU",
          "MT",
          "NL",
          "PL",
          "PT",
          "RO",
          "SK",
          "SI",
          "ES",
          "SE",
        ];
    },
    w1ml: function (e, t, a) {
      "use strict";
      a.d(t, "a", function () {
        return p;
      });
      var o = a("ofXK"),
        r = a("3Pt+"),
        n = a("ZOsW"),
        i = a("sYmb"),
        l = a("bggu"),
        s = a("Cicq"),
        c = a("G9dS"),
        m = a("eaUc"),
        d = a("fXoL");
      class p {}
      (p.ɵfac = function (e) {
        return new (e || p)();
      }),
        (p.ɵmod = d["\u0275\u0275defineNgModule"]({ type: p })),
        (p.ɵinj = d["\u0275\u0275defineInjector"]({
          providers: [s.a],
          imports: [
            [
              o.c,
              c.a,
              l.b,
              r.FormsModule,
              r.ReactiveFormsModule,
              n.b,
              i.b,
              m.a,
            ],
            l.b,
            c.a,
            r.FormsModule,
            r.ReactiveFormsModule,
            n.b,
            i.b,
            m.a,
          ],
        }));
    },
    xiuU: function (e, t, a) {
      "use strict";
      a.d(t, "a", function () {
        return o;
      });
      class o {
        isRestrictedBySingle(e, t) {
          return (
            !!e &&
            (!!this.isRestrictedByAny(e, t) ||
              !(
                !e.complexRestriction ||
                !this.isRestrictedByAll(e.complexRestriction, t)
              ))
          );
        }
        isRestrictedByMultiple(e, t) {
          return !!e && !e.map((e) => this.isRestricted(e, t)).includes(!1);
        }
        isRestricted(e, t) {
          return (
            !!e &&
            (e instanceof Array
              ? this.isRestrictedByMultiple(e, t)
              : this.isRestrictedBySingle(e, t))
          );
        }
        isRestrictedByAny(e, t) {
          return (
            !(
              !t.currentLanguage ||
              !e.enabledLanguages ||
              e.enabledLanguages.includes(t.currentLanguage)
            ) ||
            !!(
              t.currentLanguage &&
              e.disabledLanguages &&
              e.disabledLanguages.includes(t.currentLanguage)
            ) ||
            !(
              !t.country ||
              !e.enabledCountries ||
              e.enabledCountries.includes(t.country)
            ) ||
            !!(
              t.country &&
              e.disabledCountries &&
              e.disabledCountries.includes(t.country)
            ) ||
            !(
              !t.selectedCountry ||
              !e.enabledSelectedCountries ||
              e.enabledSelectedCountries.includes(t.selectedCountry)
            ) ||
            !!(
              t.selectedCountry &&
              e.disabledSelectedCountries &&
              e.disabledSelectedCountries.includes(t.selectedCountry)
            ) ||
            !(
              !t.regulator ||
              !e.enabledRegulators ||
              e.enabledRegulators.includes(t.regulator)
            ) ||
            !!(
              t.regulator &&
              e.disabledRegulators &&
              e.disabledRegulators.includes(t.regulator)
            ) ||
            !!(
              t.route &&
              e.disabledForRoutes &&
              e.disabledForRoutes.includes(t.route)
            ) ||
            !(
              !t.route ||
              !e.enabledForRoutes ||
              e.enabledForRoutes.includes(t.route)
            ) ||
            !!(
              t.domain &&
              e.disabledDomains &&
              e.disabledDomains.includes(t.domain)
            ) ||
            !(
              !t.domain ||
              !e.enabledDomains ||
              e.enabledDomains.includes(t.domain)
            ) ||
            !!(
              t.route &&
              e.disabledForSubRoutes &&
              this.isSubRoute(e.disabledForSubRoutes, t.route)
            ) ||
            !(
              !t.route ||
              !e.enabledForSubRoutes ||
              this.isSubRoute(e.enabledForSubRoutes, t.route)
            )
          );
        }
        isRestrictedByAll(e, t) {
          return Object.entries(e)
            .map((e) => {
              const a = e[0],
                o = e[1];
              return this.isRestricted({ [a]: o }, t);
            })
            .includes(!0);
        }
        isSubRoute(e, t) {
          return e.some((e) => t.startsWith(e));
        }
      }
    },
    z2AY: function (e, t, a) {
      "use strict";
      var o;
      a.d(t, "a", function () {
        return o;
      }),
        (function (e) {
          (e.mt4 = "mt4"),
            (e.mt5 = "mt5"),
            (e.mt4_fix = "mt4_fix"),
            (e.ctrader = "ctrader"),
            (e.mt4_raw_plus = "mt4_raw_plus"),
            (e.edge = "edge");
        })(o || (o = {}));
    },
    zUnb: function (e, t, a) {
      "use strict";
      a.r(t),
        a.d(t, "getBaseUrl", function () {
          return Y;
        }),
        a.d(t, "getOriginUrl", function () {
          return q;
        }),
        a.d(t, "getUserAgent", function () {
          return J;
        });
      var o = a("jhN1"),
        r = (a("1uSB"), a("fxb0"), a("fXoL")),
        n = a("3C1k"),
        i = a("F2wG"),
        l = a("tk/3"),
        s = a("3Pt+"),
        c = a("R1ws"),
        m = a("tyNb"),
        d = a("ZOsW"),
        p = a("sYmb"),
        u = a("mqiu"),
        f = a("jCJ1"),
        b = a("4pnn"),
        g = a("bggu"),
        h = a("Or3D"),
        w = a("AytR"),
        x = a("itXk"),
        y = a("7kPy"),
        k = a("dzcp"),
        _ = a("cjop"),
        v = a("hqYv"),
        T = a("Uiwt"),
        M = a("EXlq"),
        S = a("7+hn"),
        D = a("6pIP"),
        C = a("oXjn"),
        I = a("h0X1");
      class L {
        constructor(e, t, a, o, r, n, i, l, s, c, d, p, u) {
          if (
            ((this.viewRef = e),
            (this.router = t),
            (this.domainService = a),
            (this.regulatorService = o),
            (this.renderer = r),
            (this.deviceDetectService = n),
            (this.route = i),
            (this.scriptLoaderService = l),
            (this.partnerService = s),
            (this.dataLayerService = c),
            (this.liveChatService = d),
            (this.cookiesConsentService = p),
            (this.webComponentsPaths = u),
            n.isBrowser &&
              !this.domainService.isChineseDomain() &&
              this.addAppsFlyerScript(),
            this.router.events.subscribe((e) => {
              e instanceof m.c &&
                (n.isBrowser &&
                  !this.preventScroll(e.url) &&
                  (n.isDesktop()
                    ? window.scrollTo(0, 0)
                    : setTimeout(() => window.scrollTo(0, 0))),
                this.dataLayerService.pushUrl(e.url));
            }),
            n.isBrowser)
          ) {
            this.route.queryParams.subscribe((e) => {
              if ((e.ib && this.partnerService.setPartner(e.ib), e.camp)) {
                const t = new Date(),
                  a = new Date(t.getFullYear(), t.getMonth(), t.getDate() + 90);
                this.cookiesConsentService.setFunctionalCookie(
                  k.a.campaign,
                  e.camp,
                  { expires: a }
                );
              }
            });
            const e = this.cookiesConsentService.getCookiesConsent();
            e &&
              e.marketing &&
              this.dataLayerService.pushCookieConsentAcceptedEvent(),
              this.regulatorService.regulatorChanged$.subscribe((e) => {
                e.regulator == y.c.FSCM &&
                  this.dataLayerService.pushFscmLoadedEvent();
              });
          }
        }
        ngOnInit() {
          this.deviceDetectService.isBrowser &&
            (this.renderer.setAttribute(
              document.body,
              "data-platform",
              this.deviceDetectService.getOs().toLowerCase()
            ),
            this.liveChatService.createChat(),
            this.checkForAppsFlyer()),
            this.deviceDetectService.isBrowser &&
              Promise.all(
                this.webComponentsPaths.map((e) =>
                  this.scriptLoaderService.loadScript(e)
                )
              ).catch(() =>
                console.error("Error loading web components scripts")
              );
        }
        checkForAppsFlyer() {
          if (
            ((this.closeFlyerButtonEl = document.querySelector("[data-qa-id]")),
            (this.ratesEl = document.querySelector(
              ".fx-section--rates.top-position"
            )),
            (this.appsFlyerDismissed = localStorage.getItem(
              "AF_BANNERS_DISMISSAL"
            )),
            this.closeFlyerButtonEl)
          )
            this.renderer.addClass(this.ratesEl, "apps-opened"),
              this.closeFlyerButtonEl.addEventListener("click", () => {
                this.renderer.removeClass(this.ratesEl, "apps-opened");
              });
          else {
            if (this.appsFlyerDismissed) return;
            setTimeout(() => this.checkForAppsFlyer(), 1e3);
          }
        }
        addAppsFlyerScript() {
          Object(x.a)([
            this.regulatorService.regulatorChanged$,
            this.cookiesConsentService.isCookieConsentAccepted(),
          ]).subscribe(([e]) => {
            this.partnerService.getPartner().then((t) => {
              const a = !!this.cookiesConsentService.getCookiesConsent(),
                o = "RU" === e.country;
              if (a)
                if (o) {
                  const e = "f92846be-0d87-4d3e-aea6-5d76cee7dade";
                  window.AF &&
                    "object" == typeof window.AF &&
                    (window.AF.Banner.hideBanner(), (window.AF = null));
                  const a = `!function(t,e,n,s,a,c,i,o,p){t.AppsFlyerSdkObject=a,t.AF=t.AF||function(){(t.AF.q=t.AF.q||[]).push([Date.now()].concat(Array.prototype.slice.call(arguments)))},t.AF.id=t.AF.id||i,t.AF.plugins={},o=e.createElement(n),p=e.getElementsByTagName(n)[0],o.async=1,o.src="https://websdk.appsflyer.com?"+(c.length>0?"st="+c.split(",").sort().join(",")+"&":"")+(i.length>0?"af_id="+i:""),p.parentNode.insertBefore(o,p)}(window,document,"script",0,"AF","banners",{banners: {key: "${e}"}})\n                    AF('banners', 'showBanner'${this.getAdditionalParams(
                    t
                  )})`;
                  this.scriptLoaderService.createScript(a);
                } else {
                  const a = [y.c.FCA, y.c.CySec].includes(e.regulator)
                    ? "9dc4fcdb-34e7-4139-90b7-fe103001358f"
                    : "739dbc5f-c4a3-49b0-aaa2-12042565d80e";
                  window.AF &&
                    "function" == typeof window.AF &&
                    (window.AF("banners", "hideBanner"), (window.AF = null));
                  const o = `!function(t,e,n,s,a,c,i,o,p){t.AppsFlyerSdkObject=a,t.AF=t.AF||function(){\n                        (t.AF.q=t.AF.q||[]).push([Date.now()].concat(Array.prototype.slice.call(arguments)))},\n                        t.AF.id=t.AF.id||i,t.AF.plugins={},o=e.createElement(n),p=e.getElementsByTagName(n)[0],o.async=1,\n                        o.src="https://websdk.appsflyer.com?"+(c.length>0?"st="+c.split(",").sort().join(",")+"&":"")+(i.length>0?"af_id="+i:""),\n                        p.parentNode.insertBefore(o,p)}(window,document,"script",0,"AF", "pba,banners",{pba: {webAppId: "${a}"}, banners: {key: "${a}"}});\n                        AF('banners', 'showBanner'${this.getAdditionalParams(
                    t
                  )});`;
                  this.scriptLoaderService.createScript(o);
                }
            });
          });
        }
        getAdditionalParams(e) {
          return e
            ? `, { additionalParams: { deep_link_value: "${e}", af_sub1: "${e}",  deep_link_sub1: "${e}" } }`
            : "";
        }
        preventScroll(e) {
          return !![
            "/help-section/traders-glossary",
            "/help-section/faq",
            "/help-section/education/",
            "/trading/shares",
          ].find((t) => e.startsWith(t));
        }
      }
      (L.ɵfac = function (e) {
        return new (e || L)(
          r["\u0275\u0275directiveInject"](r.ViewContainerRef),
          r["\u0275\u0275directiveInject"](m.d),
          r["\u0275\u0275directiveInject"](D.a),
          r["\u0275\u0275directiveInject"](I.a),
          r["\u0275\u0275directiveInject"](r.Renderer2),
          r["\u0275\u0275directiveInject"](T.a),
          r["\u0275\u0275directiveInject"](m.a),
          r["\u0275\u0275directiveInject"](S.a),
          r["\u0275\u0275directiveInject"](C.a),
          r["\u0275\u0275directiveInject"](v.a),
          r["\u0275\u0275directiveInject"](M.a),
          r["\u0275\u0275directiveInject"](_.a),
          r["\u0275\u0275directiveInject"](n.g)
        );
      }),
        (L.ɵcmp = r["\u0275\u0275defineComponent"]({
          type: L,
          selectors: [["app"]],
          decls: 2,
          vars: 0,
          template: function (e, t) {
            1 & e &&
              (r["\u0275\u0275element"](0, "router-outlet"),
              r["\u0275\u0275element"](1, "light-onboarding"));
          },
          directives: [m.f],
          styles: [
            "",
            '.mat-option,.mat-option.mat-active{color:#000000de}.mat-option.mat-option-disabled{color:#00000061}.mat-primary .mat-option.mat-selected:not(.mat-option-disabled){color:#3f51b5}.mat-accent .mat-option.mat-selected:not(.mat-option-disabled){color:#ff4081}.mat-warn .mat-option.mat-selected:not(.mat-option-disabled){color:#f44336}.mat-optgroup-label{color:#0000008a}.mat-optgroup-disabled .mat-optgroup-label{color:#00000061}.mat-pseudo-checkbox{color:#0000008a}.mat-pseudo-checkbox:after{color:#fafafa}.mat-primary .mat-pseudo-checkbox-checked,.mat-primary .mat-pseudo-checkbox-indeterminate{background:#3f51b5}.mat-accent .mat-pseudo-checkbox-checked,.mat-accent .mat-pseudo-checkbox-indeterminate,.mat-pseudo-checkbox-checked,.mat-pseudo-checkbox-indeterminate{background:#ff4081}.mat-warn .mat-pseudo-checkbox-checked,.mat-warn .mat-pseudo-checkbox-indeterminate{background:#f44336}.mat-app-background{background-color:#fafafa;color:#000000de}.mat-autocomplete-panel,.mat-autocomplete-panel .mat-option.mat-selected:not(.mat-active):not(:hover):not(.mat-option-disabled){color:#000000de}.mat-badge-content{background:#3f51b5}.mat-badge-accent .mat-badge-content{background:#ff4081}.mat-badge-warn .mat-badge-content{color:#fff;background:#f44336}.mat-badge-disabled .mat-badge-content{background:#b9b9b9;color:#00000061}.mat-bottom-sheet-container{color:#000000de}.mat-button.mat-primary,.mat-icon-button.mat-primary,.mat-stroked-button.mat-primary{color:#3f51b5}.mat-button.mat-accent,.mat-icon-button.mat-accent,.mat-stroked-button.mat-accent{color:#ff4081}.mat-button.mat-warn,.mat-icon-button.mat-warn,.mat-stroked-button.mat-warn{color:#f44336}.mat-button.mat-accent.mat-button-disabled,.mat-button.mat-button-disabled.mat-button-disabled,.mat-button.mat-primary.mat-button-disabled,.mat-button.mat-warn.mat-button-disabled,.mat-icon-button.mat-accent.mat-button-disabled,.mat-icon-button.mat-button-disabled.mat-button-disabled,.mat-icon-button.mat-primary.mat-button-disabled,.mat-icon-button.mat-warn.mat-button-disabled,.mat-stroked-button.mat-accent.mat-button-disabled,.mat-stroked-button.mat-button-disabled.mat-button-disabled,.mat-stroked-button.mat-primary.mat-button-disabled,.mat-stroked-button.mat-warn.mat-button-disabled{color:#00000042}.mat-button.mat-primary .mat-button-focus-overlay,.mat-icon-button.mat-primary .mat-button-focus-overlay,.mat-stroked-button.mat-primary .mat-button-focus-overlay{background-color:#3f51b5}.mat-button.mat-accent .mat-button-focus-overlay,.mat-icon-button.mat-accent .mat-button-focus-overlay,.mat-stroked-button.mat-accent .mat-button-focus-overlay{background-color:#ff4081}.mat-button.mat-warn .mat-button-focus-overlay,.mat-icon-button.mat-warn .mat-button-focus-overlay,.mat-stroked-button.mat-warn .mat-button-focus-overlay{background-color:#f44336}.mat-stroked-button:not(.mat-button-disabled){border-color:#0000001f}.mat-fab,.mat-flat-button,.mat-mini-fab,.mat-raised-button{color:#000000de}.mat-fab.mat-warn,.mat-flat-button.mat-warn,.mat-mini-fab.mat-warn,.mat-raised-button.mat-warn{color:#fff}.mat-fab.mat-accent.mat-button-disabled,.mat-fab.mat-button-disabled.mat-button-disabled,.mat-fab.mat-primary.mat-button-disabled,.mat-fab.mat-warn.mat-button-disabled,.mat-flat-button.mat-accent.mat-button-disabled,.mat-flat-button.mat-button-disabled.mat-button-disabled,.mat-flat-button.mat-primary.mat-button-disabled,.mat-flat-button.mat-warn.mat-button-disabled,.mat-mini-fab.mat-accent.mat-button-disabled,.mat-mini-fab.mat-button-disabled.mat-button-disabled,.mat-mini-fab.mat-primary.mat-button-disabled,.mat-mini-fab.mat-warn.mat-button-disabled,.mat-raised-button.mat-accent.mat-button-disabled,.mat-raised-button.mat-button-disabled.mat-button-disabled,.mat-raised-button.mat-primary.mat-button-disabled,.mat-raised-button.mat-warn.mat-button-disabled{color:#00000042}.mat-fab.mat-primary,.mat-flat-button.mat-primary,.mat-mini-fab.mat-primary,.mat-raised-button.mat-primary{background-color:#3f51b5}.mat-fab.mat-accent,.mat-flat-button.mat-accent,.mat-mini-fab.mat-accent,.mat-raised-button.mat-accent{background-color:#ff4081}.mat-fab.mat-warn,.mat-flat-button.mat-warn,.mat-mini-fab.mat-warn,.mat-raised-button.mat-warn{background-color:#f44336}.mat-fab.mat-accent.mat-button-disabled,.mat-fab.mat-button-disabled.mat-button-disabled,.mat-fab.mat-primary.mat-button-disabled,.mat-fab.mat-warn.mat-button-disabled,.mat-flat-button.mat-accent.mat-button-disabled,.mat-flat-button.mat-button-disabled.mat-button-disabled,.mat-flat-button.mat-primary.mat-button-disabled,.mat-flat-button.mat-warn.mat-button-disabled,.mat-mini-fab.mat-accent.mat-button-disabled,.mat-mini-fab.mat-button-disabled.mat-button-disabled,.mat-mini-fab.mat-primary.mat-button-disabled,.mat-mini-fab.mat-warn.mat-button-disabled,.mat-raised-button.mat-accent.mat-button-disabled,.mat-raised-button.mat-button-disabled.mat-button-disabled,.mat-raised-button.mat-primary.mat-button-disabled,.mat-raised-button.mat-warn.mat-button-disabled{background-color:#0000001f}.mat-fab.mat-warn .mat-ripple-element,.mat-flat-button.mat-warn .mat-ripple-element,.mat-mini-fab.mat-warn .mat-ripple-element,.mat-raised-button.mat-warn .mat-ripple-element{background-color:#ffffff1a}.mat-button-toggle{color:#00000061}.mat-button-toggle-appearance-standard{color:#000000de}.mat-button-toggle-group-appearance-standard .mat-button-toggle+.mat-button-toggle{border-left:1px solid #0000001f}[dir=rtl] .mat-button-toggle-group-appearance-standard .mat-button-toggle+.mat-button-toggle{border-right:1px solid #0000001f}.mat-button-toggle-group-appearance-standard.mat-button-toggle-vertical .mat-button-toggle+.mat-button-toggle{border-top:1px solid #0000001f}.mat-button-toggle-checked{background-color:#e0e0e0;color:#0000008a}.mat-button-toggle-checked.mat-button-toggle-appearance-standard{color:#000000de}.mat-button-toggle-disabled{color:#00000042;background-color:#eee}.mat-button-toggle-disabled.mat-button-toggle-checked{background-color:#bdbdbd}.mat-button-toggle-group-appearance-standard,.mat-button-toggle-standalone.mat-button-toggle-appearance-standard{border:1px solid #0000001f}.mat-card{color:#000000de}.mat-card-subtitle{color:#0000008a}.mat-checkbox-frame{border-color:#0000008a}.mat-checkbox-checkmark{fill:#fafafa}.mat-checkbox-checkmark-path{stroke:#fafafa!important}.mat-checkbox-mixedmark{background-color:#fafafa}.mat-checkbox-checked.mat-primary .mat-checkbox-background,.mat-checkbox-indeterminate.mat-primary .mat-checkbox-background{background-color:#3f51b5}.mat-checkbox-checked.mat-accent .mat-checkbox-background,.mat-checkbox-indeterminate.mat-accent .mat-checkbox-background{background-color:#ff4081}.mat-checkbox-checked.mat-warn .mat-checkbox-background,.mat-checkbox-indeterminate.mat-warn .mat-checkbox-background{background-color:#f44336}.mat-checkbox-disabled .mat-checkbox-label{color:#0000008a}.mat-checkbox-checked:not(.mat-checkbox-disabled).mat-primary .mat-ripple-element,.mat-checkbox:active:not(.mat-checkbox-disabled).mat-primary .mat-ripple-element{background:#3f51b5}.mat-checkbox-checked:not(.mat-checkbox-disabled).mat-accent .mat-ripple-element,.mat-checkbox:active:not(.mat-checkbox-disabled).mat-accent .mat-ripple-element{background:#ff4081}.mat-checkbox-checked:not(.mat-checkbox-disabled).mat-warn .mat-ripple-element,.mat-checkbox:active:not(.mat-checkbox-disabled).mat-warn .mat-ripple-element{background:#f44336}.mat-chip.mat-standard-chip{background-color:#e0e0e0;color:#000000de}.mat-chip.mat-standard-chip .mat-chip-remove{color:#000000de}.mat-chip.mat-standard-chip.mat-chip-selected.mat-primary{background-color:#3f51b5}.mat-chip.mat-standard-chip.mat-chip-selected.mat-warn{background-color:#f44336;color:#fff}.mat-chip.mat-standard-chip.mat-chip-selected.mat-warn .mat-chip-remove{color:#fff}.mat-chip.mat-standard-chip.mat-chip-selected.mat-warn .mat-ripple-element{background-color:#ffffff1a}.mat-chip.mat-standard-chip.mat-chip-selected.mat-accent{background-color:#ff4081}mat-footer-row,mat-header-row,mat-row,td.mat-cell,td.mat-footer-cell,th.mat-header-cell{border-bottom-color:#0000001f}.mat-header-cell{color:#0000008a}.mat-cell,.mat-footer-cell{color:#000000de}.mat-calendar-table-header{color:#00000061}.mat-calendar-table-header-divider:after{background:#0000001f}.mat-calendar-body-label{color:#0000008a}.mat-calendar-body-cell-content,.mat-date-range-input-separator{color:#000000de}.mat-calendar-body-disabled>.mat-calendar-body-cell-content:not(.mat-calendar-body-selected):not(.mat-calendar-body-comparison-identical),.mat-form-field-disabled .mat-date-range-input-separator{color:#00000061}.mat-calendar-body-in-preview{color:#0000003d}.mat-calendar-body-today:not(.mat-calendar-body-selected):not(.mat-calendar-body-comparison-identical){border-color:#00000061}.mat-calendar-body-disabled>.mat-calendar-body-today:not(.mat-calendar-body-selected):not(.mat-calendar-body-comparison-identical){border-color:#0000002e}.mat-calendar-body-in-range:before{background:#3f51b533}.mat-calendar-body-comparison-bridge-start:before,[dir=rtl] .mat-calendar-body-comparison-bridge-end:before{background:linear-gradient(90deg,#3f51b533 50%,#f9ab0033 0)}.mat-calendar-body-comparison-bridge-end:before,[dir=rtl] .mat-calendar-body-comparison-bridge-start:before{background:linear-gradient(270deg,#3f51b533 50%,#f9ab0033 0)}.mat-calendar-body-selected{background-color:#3f51b5}.mat-calendar-body-disabled>.mat-calendar-body-selected{background-color:#3f51b566}.cdk-keyboard-focused .mat-calendar-body-active>.mat-calendar-body-cell-content:not(.mat-calendar-body-selected):not(.mat-calendar-body-comparison-identical),.cdk-program-focused .mat-calendar-body-active>.mat-calendar-body-cell-content:not(.mat-calendar-body-selected):not(.mat-calendar-body-comparison-identical),.mat-calendar-body-cell:not(.mat-calendar-body-disabled):hover>.mat-calendar-body-cell-content:not(.mat-calendar-body-selected):not(.mat-calendar-body-comparison-identical){background-color:#3f51b54d}.mat-datepicker-content{color:#000000de}.mat-datepicker-content.mat-accent .mat-calendar-body-in-range:before{background:#ff408133}.mat-datepicker-content.mat-accent .mat-calendar-body-comparison-bridge-start:before,.mat-datepicker-content.mat-accent [dir=rtl] .mat-calendar-body-comparison-bridge-end:before{background:linear-gradient(90deg,#ff408133 50%,#f9ab0033 0)}.mat-datepicker-content.mat-accent .mat-calendar-body-comparison-bridge-end:before,.mat-datepicker-content.mat-accent [dir=rtl] .mat-calendar-body-comparison-bridge-start:before{background:linear-gradient(270deg,#ff408133 50%,#f9ab0033 0)}.mat-datepicker-content.mat-accent .mat-calendar-body-selected{background-color:#ff4081}.mat-datepicker-content.mat-accent .mat-calendar-body-disabled>.mat-calendar-body-selected{background-color:#ff408166}.mat-datepicker-content.mat-accent .cdk-keyboard-focused .mat-calendar-body-active>.mat-calendar-body-cell-content:not(.mat-calendar-body-selected):not(.mat-calendar-body-comparison-identical),.mat-datepicker-content.mat-accent .cdk-program-focused .mat-calendar-body-active>.mat-calendar-body-cell-content:not(.mat-calendar-body-selected):not(.mat-calendar-body-comparison-identical),.mat-datepicker-content.mat-accent .mat-calendar-body-cell:not(.mat-calendar-body-disabled):hover>.mat-calendar-body-cell-content:not(.mat-calendar-body-selected):not(.mat-calendar-body-comparison-identical){background-color:#ff40814d}.mat-datepicker-content.mat-warn .mat-calendar-body-in-range:before{background:#f4433633}.mat-datepicker-content.mat-warn .mat-calendar-body-comparison-bridge-start:before,.mat-datepicker-content.mat-warn [dir=rtl] .mat-calendar-body-comparison-bridge-end:before{background:linear-gradient(90deg,#f4433633 50%,#f9ab0033 0)}.mat-datepicker-content.mat-warn .mat-calendar-body-comparison-bridge-end:before,.mat-datepicker-content.mat-warn [dir=rtl] .mat-calendar-body-comparison-bridge-start:before{background:linear-gradient(270deg,#f4433633 50%,#f9ab0033 0)}.mat-datepicker-content.mat-warn .mat-calendar-body-selected{background-color:#f44336;color:#fff}.mat-datepicker-content.mat-warn .mat-calendar-body-disabled>.mat-calendar-body-selected{background-color:#f4433666}.mat-datepicker-content.mat-warn .mat-calendar-body-today.mat-calendar-body-selected{box-shadow:inset 0 0 0 1px #fff}.mat-datepicker-content.mat-warn .cdk-keyboard-focused .mat-calendar-body-active>.mat-calendar-body-cell-content:not(.mat-calendar-body-selected):not(.mat-calendar-body-comparison-identical),.mat-datepicker-content.mat-warn .cdk-program-focused .mat-calendar-body-active>.mat-calendar-body-cell-content:not(.mat-calendar-body-selected):not(.mat-calendar-body-comparison-identical),.mat-datepicker-content.mat-warn .mat-calendar-body-cell:not(.mat-calendar-body-disabled):hover>.mat-calendar-body-cell-content:not(.mat-calendar-body-selected):not(.mat-calendar-body-comparison-identical){background-color:#f443364d}.mat-datepicker-toggle-active{color:#3f51b5}.mat-datepicker-toggle-active.mat-accent{color:#ff4081}.mat-datepicker-toggle-active.mat-warn{color:#f44336}.mat-date-range-input-inner[disabled]{color:#00000061}.mat-dialog-container{color:#000000de}.mat-divider{border-top-color:#0000001f}.mat-divider-vertical{border-right-color:#0000001f}.mat-expansion-panel{color:#000000de}.mat-action-row{border-top-color:#0000001f}.mat-expansion-panel-header-title{color:#000000de}.mat-expansion-indicator:after,.mat-expansion-panel-header-description{color:#0000008a}.mat-expansion-panel-header[aria-disabled=true]{color:#00000042}.mat-form-field-label,.mat-hint{color:#0009}.mat-form-field.mat-focused .mat-form-field-label{color:#3f51b5}.mat-form-field.mat-focused .mat-form-field-label.mat-accent{color:#ff4081}.mat-form-field.mat-focused .mat-form-field-label.mat-warn{color:#f44336}.mat-focused .mat-form-field-required-marker{color:#ff4081}.mat-form-field-ripple{background-color:#000000de}.mat-form-field.mat-focused .mat-form-field-ripple{background-color:#3f51b5}.mat-form-field.mat-focused .mat-form-field-ripple.mat-accent{background-color:#ff4081}.mat-form-field.mat-focused .mat-form-field-ripple.mat-warn{background-color:#f44336}.mat-form-field-type-mat-native-select.mat-focused:not(.mat-form-field-invalid) .mat-form-field-infix:after{color:#3f51b5}.mat-form-field-type-mat-native-select.mat-focused:not(.mat-form-field-invalid).mat-accent .mat-form-field-infix:after{color:#ff4081}.mat-form-field-type-mat-native-select.mat-focused:not(.mat-form-field-invalid).mat-warn .mat-form-field-infix:after,.mat-form-field.mat-form-field-invalid .mat-form-field-label,.mat-form-field.mat-form-field-invalid .mat-form-field-label .mat-form-field-required-marker,.mat-form-field.mat-form-field-invalid .mat-form-field-label.mat-accent{color:#f44336}.mat-form-field.mat-form-field-invalid .mat-form-field-ripple,.mat-form-field.mat-form-field-invalid .mat-form-field-ripple.mat-accent{background-color:#f44336}.mat-error{color:#f44336}.mat-form-field-appearance-legacy .mat-form-field-label,.mat-form-field-appearance-legacy .mat-hint{color:#0000008a}.mat-form-field-appearance-legacy .mat-form-field-underline{background-color:#0000006b}.mat-form-field-appearance-legacy.mat-form-field-disabled .mat-form-field-underline{background-image:linear-gradient(90deg,#0000006b 0,#0000006b 33%,#0000 0)}.mat-form-field-appearance-standard .mat-form-field-underline{background-color:#0000006b}.mat-form-field-appearance-standard.mat-form-field-disabled .mat-form-field-underline{background-image:linear-gradient(90deg,#0000006b 0,#0000006b 33%,#0000 0)}.mat-form-field-appearance-fill .mat-form-field-underline:before{background-color:#0000006b}.mat-form-field-appearance-fill.mat-form-field-disabled .mat-form-field-label{color:#00000061}.mat-form-field-appearance-outline .mat-form-field-outline{color:#0000001f}.mat-form-field-appearance-outline .mat-form-field-outline-thick{color:#000000de}.mat-form-field-appearance-outline.mat-focused .mat-form-field-outline-thick{color:#3f51b5}.mat-form-field-appearance-outline.mat-focused.mat-accent .mat-form-field-outline-thick{color:#ff4081}.mat-form-field-appearance-outline.mat-focused.mat-warn .mat-form-field-outline-thick,.mat-form-field-appearance-outline.mat-form-field-invalid.mat-form-field-invalid .mat-form-field-outline-thick{color:#f44336}.mat-form-field-appearance-outline.mat-form-field-disabled .mat-form-field-label{color:#00000061}.mat-form-field-appearance-outline.mat-form-field-disabled .mat-form-field-outline{color:#0000000f}.mat-icon.mat-primary{color:#3f51b5}.mat-icon.mat-accent{color:#ff4081}.mat-icon.mat-warn{color:#f44336}.mat-form-field-type-mat-native-select .mat-form-field-infix:after{color:#0000008a}.mat-form-field-type-mat-native-select.mat-form-field-disabled .mat-form-field-infix:after,.mat-input-element:disabled{color:#00000061}.mat-input-element{caret-color:#3f51b5}.mat-input-element::placeholder{color:#0000006b}.mat-input-element::-moz-placeholder{color:#0000006b}.mat-input-element::-webkit-input-placeholder{color:#0000006b}.mat-input-element:-ms-input-placeholder{color:#0000006b}.mat-form-field.mat-accent .mat-input-element{caret-color:#ff4081}.mat-form-field-invalid .mat-input-element,.mat-form-field.mat-warn .mat-input-element{caret-color:#f44336}.mat-form-field-type-mat-native-select.mat-form-field-invalid .mat-form-field-infix:after{color:#f44336}.mat-list-base .mat-list-item,.mat-list-base .mat-list-option{color:#000000de}.mat-list-base .mat-subheader{color:#0000008a}.mat-list-item-disabled{background-color:#eee}.mat-menu-item{color:#000000de}.mat-menu-item[disabled],.mat-menu-item[disabled] .mat-icon-no-color,.mat-menu-item[disabled]:after{color:#00000061}.mat-paginator,.mat-paginator-page-size .mat-select-trigger{color:#0000008a}.mat-icon-button[disabled] .mat-paginator-decrement,.mat-icon-button[disabled] .mat-paginator-first,.mat-icon-button[disabled] .mat-paginator-increment,.mat-icon-button[disabled] .mat-paginator-last{border-color:#00000061}.mat-progress-bar-background{fill:#c5cae9}.mat-progress-bar-buffer{background-color:#c5cae9}.mat-progress-bar-fill:after{background-color:#3f51b5}.mat-progress-bar.mat-accent .mat-progress-bar-background{fill:#ff80ab}.mat-progress-bar.mat-accent .mat-progress-bar-buffer{background-color:#ff80ab}.mat-progress-bar.mat-accent .mat-progress-bar-fill:after{background-color:#ff4081}.mat-progress-bar.mat-warn .mat-progress-bar-background{fill:#ffcdd2}.mat-progress-bar.mat-warn .mat-progress-bar-buffer{background-color:#ffcdd2}.mat-progress-bar.mat-warn .mat-progress-bar-fill:after{background-color:#f44336}.mat-progress-spinner circle,.mat-spinner circle{stroke:#3f51b5}.mat-progress-spinner.mat-accent circle,.mat-spinner.mat-accent circle{stroke:#ff4081}.mat-progress-spinner.mat-warn circle,.mat-spinner.mat-warn circle{stroke:#f44336}.mat-radio-outer-circle{border-color:#0000008a}.mat-radio-button.mat-primary.mat-radio-checked .mat-radio-outer-circle{border-color:#3f51b5}.mat-radio-button.mat-primary .mat-radio-inner-circle,.mat-radio-button.mat-primary .mat-radio-ripple .mat-ripple-element:not(.mat-radio-persistent-ripple),.mat-radio-button.mat-primary.mat-radio-checked .mat-radio-persistent-ripple,.mat-radio-button.mat-primary:active .mat-radio-persistent-ripple{background-color:#3f51b5}.mat-radio-button.mat-accent.mat-radio-checked .mat-radio-outer-circle{border-color:#ff4081}.mat-radio-button.mat-accent .mat-radio-inner-circle,.mat-radio-button.mat-accent .mat-radio-ripple .mat-ripple-element:not(.mat-radio-persistent-ripple),.mat-radio-button.mat-accent.mat-radio-checked .mat-radio-persistent-ripple,.mat-radio-button.mat-accent:active .mat-radio-persistent-ripple{background-color:#ff4081}.mat-radio-button.mat-warn.mat-radio-checked .mat-radio-outer-circle{border-color:#f44336}.mat-radio-button.mat-warn .mat-radio-inner-circle,.mat-radio-button.mat-warn .mat-radio-ripple .mat-ripple-element:not(.mat-radio-persistent-ripple),.mat-radio-button.mat-warn.mat-radio-checked .mat-radio-persistent-ripple,.mat-radio-button.mat-warn:active .mat-radio-persistent-ripple{background-color:#f44336}.mat-radio-button.mat-radio-disabled .mat-radio-outer-circle,.mat-radio-button.mat-radio-disabled.mat-radio-checked .mat-radio-outer-circle{border-color:#00000061}.mat-radio-button.mat-radio-disabled .mat-radio-inner-circle,.mat-radio-button.mat-radio-disabled .mat-radio-ripple .mat-ripple-element{background-color:#00000061}.mat-radio-button.mat-radio-disabled .mat-radio-label-content{color:#00000061}.mat-select-value{color:#000000de}.mat-select-placeholder{color:#0000006b}.mat-select-disabled .mat-select-value{color:#00000061}.mat-select-arrow{color:#0000008a}.mat-form-field.mat-focused.mat-primary .mat-select-arrow{color:#3f51b5}.mat-form-field.mat-focused.mat-accent .mat-select-arrow{color:#ff4081}.mat-form-field .mat-select.mat-select-invalid .mat-select-arrow,.mat-form-field.mat-focused.mat-warn .mat-select-arrow{color:#f44336}.mat-form-field .mat-select.mat-select-disabled .mat-select-arrow{color:#00000061}.mat-drawer-container{background-color:#fafafa;color:#000000de}.mat-drawer{color:#000000de}.mat-drawer-side{border-right:1px solid #0000001f}.mat-drawer-side.mat-drawer-end,[dir=rtl] .mat-drawer-side{border-left:1px solid #0000001f}[dir=rtl] .mat-drawer-side.mat-drawer-end{border-right:1px solid #0000001f}.mat-slide-toggle.mat-checked .mat-slide-toggle-thumb{background-color:#ff4081}.mat-slide-toggle.mat-checked .mat-slide-toggle-bar{background-color:#ff40818a}.mat-slide-toggle.mat-checked .mat-ripple-element{background-color:#ff4081}.mat-slide-toggle.mat-primary.mat-checked .mat-slide-toggle-thumb{background-color:#3f51b5}.mat-slide-toggle.mat-primary.mat-checked .mat-slide-toggle-bar{background-color:#3f51b58a}.mat-slide-toggle.mat-primary.mat-checked .mat-ripple-element{background-color:#3f51b5}.mat-slide-toggle.mat-warn.mat-checked .mat-slide-toggle-thumb{background-color:#f44336}.mat-slide-toggle.mat-warn.mat-checked .mat-slide-toggle-bar{background-color:#f443368a}.mat-slide-toggle.mat-warn.mat-checked .mat-ripple-element{background-color:#f44336}.mat-slide-toggle-bar{background-color:#00000061}.mat-primary .mat-slider-thumb,.mat-primary .mat-slider-thumb-label,.mat-primary .mat-slider-track-fill{background-color:#3f51b5}.mat-primary .mat-slider-focus-ring{background-color:#3f51b533}.mat-accent .mat-slider-thumb,.mat-accent .mat-slider-thumb-label,.mat-accent .mat-slider-track-fill{background-color:#ff4081}.mat-accent .mat-slider-focus-ring{background-color:#ff408133}.mat-warn .mat-slider-thumb,.mat-warn .mat-slider-thumb-label,.mat-warn .mat-slider-track-fill{background-color:#f44336}.mat-warn .mat-slider-thumb-label-text{color:#fff}.mat-warn .mat-slider-focus-ring{background-color:#f4433633}.mat-step-header .mat-step-label,.mat-step-header .mat-step-optional{color:#0000008a}.mat-step-header .mat-step-icon{background-color:#0000008a}.mat-step-header .mat-step-icon-selected,.mat-step-header .mat-step-icon-state-done,.mat-step-header .mat-step-icon-state-edit{background-color:#3f51b5}.mat-step-header.mat-accent .mat-step-icon-selected,.mat-step-header.mat-accent .mat-step-icon-state-done,.mat-step-header.mat-accent .mat-step-icon-state-edit{background-color:#ff4081}.mat-step-header.mat-warn .mat-step-icon{color:#fff}.mat-step-header.mat-warn .mat-step-icon-selected,.mat-step-header.mat-warn .mat-step-icon-state-done,.mat-step-header.mat-warn .mat-step-icon-state-edit{background-color:#f44336;color:#fff}.mat-step-header .mat-step-icon-state-error{color:#f44336}.mat-step-header .mat-step-label.mat-step-label-active{color:#000000de}.mat-step-header .mat-step-label.mat-step-label-error{color:#f44336}.mat-stepper-vertical-line:before{border-left-color:#0000001f}.mat-horizontal-stepper-header:after,.mat-horizontal-stepper-header:before,.mat-stepper-horizontal-line{border-top-color:#0000001f}.mat-sort-header-arrow{color:#757575}.mat-tab-header,.mat-tab-nav-bar{border-bottom:1px solid #0000001f}.mat-tab-group-inverted-header .mat-tab-header,.mat-tab-group-inverted-header .mat-tab-nav-bar{border-top:1px solid #0000001f}.mat-tab-label,.mat-tab-link{color:#000000de}.mat-tab-label.mat-tab-disabled,.mat-tab-link.mat-tab-disabled{color:#00000061}.mat-tab-header-pagination-chevron{border-color:#000000de}.mat-tab-header-pagination-disabled .mat-tab-header-pagination-chevron{border-color:#00000061}.mat-tab-group.mat-primary .mat-tab-label.cdk-keyboard-focused:not(.mat-tab-disabled),.mat-tab-group.mat-primary .mat-tab-label.cdk-program-focused:not(.mat-tab-disabled),.mat-tab-group.mat-primary .mat-tab-link.cdk-keyboard-focused:not(.mat-tab-disabled),.mat-tab-group.mat-primary .mat-tab-link.cdk-program-focused:not(.mat-tab-disabled),.mat-tab-nav-bar.mat-primary .mat-tab-label.cdk-keyboard-focused:not(.mat-tab-disabled),.mat-tab-nav-bar.mat-primary .mat-tab-label.cdk-program-focused:not(.mat-tab-disabled),.mat-tab-nav-bar.mat-primary .mat-tab-link.cdk-keyboard-focused:not(.mat-tab-disabled),.mat-tab-nav-bar.mat-primary .mat-tab-link.cdk-program-focused:not(.mat-tab-disabled){background-color:#c5cae94d}.mat-tab-group.mat-primary .mat-ink-bar,.mat-tab-nav-bar.mat-primary .mat-ink-bar{background-color:#3f51b5}.mat-tab-group.mat-accent .mat-tab-label.cdk-keyboard-focused:not(.mat-tab-disabled),.mat-tab-group.mat-accent .mat-tab-label.cdk-program-focused:not(.mat-tab-disabled),.mat-tab-group.mat-accent .mat-tab-link.cdk-keyboard-focused:not(.mat-tab-disabled),.mat-tab-group.mat-accent .mat-tab-link.cdk-program-focused:not(.mat-tab-disabled),.mat-tab-nav-bar.mat-accent .mat-tab-label.cdk-keyboard-focused:not(.mat-tab-disabled),.mat-tab-nav-bar.mat-accent .mat-tab-label.cdk-program-focused:not(.mat-tab-disabled),.mat-tab-nav-bar.mat-accent .mat-tab-link.cdk-keyboard-focused:not(.mat-tab-disabled),.mat-tab-nav-bar.mat-accent .mat-tab-link.cdk-program-focused:not(.mat-tab-disabled){background-color:#ff80ab4d}.mat-tab-group.mat-accent .mat-ink-bar,.mat-tab-nav-bar.mat-accent .mat-ink-bar{background-color:#ff4081}.mat-tab-group.mat-warn .mat-tab-label.cdk-keyboard-focused:not(.mat-tab-disabled),.mat-tab-group.mat-warn .mat-tab-label.cdk-program-focused:not(.mat-tab-disabled),.mat-tab-group.mat-warn .mat-tab-link.cdk-keyboard-focused:not(.mat-tab-disabled),.mat-tab-group.mat-warn .mat-tab-link.cdk-program-focused:not(.mat-tab-disabled),.mat-tab-nav-bar.mat-warn .mat-tab-label.cdk-keyboard-focused:not(.mat-tab-disabled),.mat-tab-nav-bar.mat-warn .mat-tab-label.cdk-program-focused:not(.mat-tab-disabled),.mat-tab-nav-bar.mat-warn .mat-tab-link.cdk-keyboard-focused:not(.mat-tab-disabled),.mat-tab-nav-bar.mat-warn .mat-tab-link.cdk-program-focused:not(.mat-tab-disabled){background-color:#ffcdd24d}.mat-tab-group.mat-warn .mat-ink-bar,.mat-tab-nav-bar.mat-warn .mat-ink-bar{background-color:#f44336}.mat-tab-group.mat-warn.mat-background-warn>.mat-tab-header .mat-ink-bar,.mat-tab-group.mat-warn.mat-background-warn>.mat-tab-link-container .mat-ink-bar,.mat-tab-nav-bar.mat-warn.mat-background-warn>.mat-tab-header .mat-ink-bar,.mat-tab-nav-bar.mat-warn.mat-background-warn>.mat-tab-link-container .mat-ink-bar{background-color:#fff}.mat-tab-group.mat-background-primary .mat-tab-label.cdk-keyboard-focused:not(.mat-tab-disabled),.mat-tab-group.mat-background-primary .mat-tab-label.cdk-program-focused:not(.mat-tab-disabled),.mat-tab-group.mat-background-primary .mat-tab-link.cdk-keyboard-focused:not(.mat-tab-disabled),.mat-tab-group.mat-background-primary .mat-tab-link.cdk-program-focused:not(.mat-tab-disabled),.mat-tab-nav-bar.mat-background-primary .mat-tab-label.cdk-keyboard-focused:not(.mat-tab-disabled),.mat-tab-nav-bar.mat-background-primary .mat-tab-label.cdk-program-focused:not(.mat-tab-disabled),.mat-tab-nav-bar.mat-background-primary .mat-tab-link.cdk-keyboard-focused:not(.mat-tab-disabled),.mat-tab-nav-bar.mat-background-primary .mat-tab-link.cdk-program-focused:not(.mat-tab-disabled){background-color:#c5cae94d}.mat-tab-group.mat-background-primary>.mat-tab-header,.mat-tab-group.mat-background-primary>.mat-tab-header-pagination,.mat-tab-group.mat-background-primary>.mat-tab-link-container,.mat-tab-nav-bar.mat-background-primary>.mat-tab-header,.mat-tab-nav-bar.mat-background-primary>.mat-tab-header-pagination,.mat-tab-nav-bar.mat-background-primary>.mat-tab-link-container{background-color:#3f51b5}.mat-tab-group.mat-background-accent .mat-tab-label.cdk-keyboard-focused:not(.mat-tab-disabled),.mat-tab-group.mat-background-accent .mat-tab-label.cdk-program-focused:not(.mat-tab-disabled),.mat-tab-group.mat-background-accent .mat-tab-link.cdk-keyboard-focused:not(.mat-tab-disabled),.mat-tab-group.mat-background-accent .mat-tab-link.cdk-program-focused:not(.mat-tab-disabled),.mat-tab-nav-bar.mat-background-accent .mat-tab-label.cdk-keyboard-focused:not(.mat-tab-disabled),.mat-tab-nav-bar.mat-background-accent .mat-tab-label.cdk-program-focused:not(.mat-tab-disabled),.mat-tab-nav-bar.mat-background-accent .mat-tab-link.cdk-keyboard-focused:not(.mat-tab-disabled),.mat-tab-nav-bar.mat-background-accent .mat-tab-link.cdk-program-focused:not(.mat-tab-disabled){background-color:#ff80ab4d}.mat-tab-group.mat-background-accent>.mat-tab-header,.mat-tab-group.mat-background-accent>.mat-tab-header-pagination,.mat-tab-group.mat-background-accent>.mat-tab-link-container,.mat-tab-nav-bar.mat-background-accent>.mat-tab-header,.mat-tab-nav-bar.mat-background-accent>.mat-tab-header-pagination,.mat-tab-nav-bar.mat-background-accent>.mat-tab-link-container{background-color:#ff4081}.mat-tab-group.mat-background-warn .mat-tab-label.cdk-keyboard-focused:not(.mat-tab-disabled),.mat-tab-group.mat-background-warn .mat-tab-label.cdk-program-focused:not(.mat-tab-disabled),.mat-tab-group.mat-background-warn .mat-tab-link.cdk-keyboard-focused:not(.mat-tab-disabled),.mat-tab-group.mat-background-warn .mat-tab-link.cdk-program-focused:not(.mat-tab-disabled),.mat-tab-nav-bar.mat-background-warn .mat-tab-label.cdk-keyboard-focused:not(.mat-tab-disabled),.mat-tab-nav-bar.mat-background-warn .mat-tab-label.cdk-program-focused:not(.mat-tab-disabled),.mat-tab-nav-bar.mat-background-warn .mat-tab-link.cdk-keyboard-focused:not(.mat-tab-disabled),.mat-tab-nav-bar.mat-background-warn .mat-tab-link.cdk-program-focused:not(.mat-tab-disabled){background-color:#ffcdd24d}.mat-tab-group.mat-background-warn>.mat-tab-header,.mat-tab-group.mat-background-warn>.mat-tab-header-pagination,.mat-tab-group.mat-background-warn>.mat-tab-link-container,.mat-tab-nav-bar.mat-background-warn>.mat-tab-header,.mat-tab-nav-bar.mat-background-warn>.mat-tab-header-pagination,.mat-tab-nav-bar.mat-background-warn>.mat-tab-link-container{background-color:#f44336}.mat-tab-group.mat-background-warn>.mat-tab-header .mat-tab-label,.mat-tab-group.mat-background-warn>.mat-tab-link-container .mat-tab-link,.mat-tab-nav-bar.mat-background-warn>.mat-tab-header .mat-tab-label,.mat-tab-nav-bar.mat-background-warn>.mat-tab-link-container .mat-tab-link{color:#fff}.mat-tab-group.mat-background-warn>.mat-tab-header .mat-tab-label.mat-tab-disabled,.mat-tab-group.mat-background-warn>.mat-tab-link-container .mat-tab-link.mat-tab-disabled,.mat-tab-nav-bar.mat-background-warn>.mat-tab-header .mat-tab-label.mat-tab-disabled,.mat-tab-nav-bar.mat-background-warn>.mat-tab-link-container .mat-tab-link.mat-tab-disabled{color:#fff6}.mat-tab-group.mat-background-warn>.mat-tab-header .mat-focus-indicator:before,.mat-tab-group.mat-background-warn>.mat-tab-header-pagination .mat-tab-header-pagination-chevron,.mat-tab-group.mat-background-warn>.mat-tab-links .mat-focus-indicator:before,.mat-tab-nav-bar.mat-background-warn>.mat-tab-header .mat-focus-indicator:before,.mat-tab-nav-bar.mat-background-warn>.mat-tab-header-pagination .mat-tab-header-pagination-chevron,.mat-tab-nav-bar.mat-background-warn>.mat-tab-links .mat-focus-indicator:before{border-color:#fff}.mat-tab-group.mat-background-warn>.mat-tab-header-pagination-disabled .mat-tab-header-pagination-chevron,.mat-tab-nav-bar.mat-background-warn>.mat-tab-header-pagination-disabled .mat-tab-header-pagination-chevron{border-color:#fff6}.mat-tab-group.mat-background-warn>.mat-tab-header .mat-ripple-element,.mat-tab-group.mat-background-warn>.mat-tab-link-container .mat-ripple-element,.mat-tab-nav-bar.mat-background-warn>.mat-tab-header .mat-ripple-element,.mat-tab-nav-bar.mat-background-warn>.mat-tab-link-container .mat-ripple-element{background-color:#ffffff1f}.mat-toolbar{background:#f5f5f5;color:#000000de}.mat-toolbar.mat-primary{background:#3f51b5}.mat-toolbar.mat-accent{background:#ff4081}.mat-toolbar.mat-warn{background:#f44336;color:#fff}.mat-tooltip{background:#616161e6}.mat-nested-tree-node,.mat-tree-node{color:#000000de}.mat-simple-snackbar-action{color:#ff4081}\n/*!\n * Bootstrap Grid v4.0.0 (https://getbootstrap.com)\n * Copyright 2011-2018 The Bootstrap Authors\n * Copyright 2011-2018 Twitter, Inc.\n * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)\n */html{box-sizing:border-box}*,:after,:before{box-sizing:inherit}.container{width:100%;padding-right:20px;padding-left:20px;margin-right:auto;margin-left:auto}@media (min-width:1200px){.container{max-width:1200px}}.container-fluid{width:100%;padding-right:20px;padding-left:20px;margin-right:auto;margin-left:auto}.row{display:flex;flex-wrap:wrap;margin-right:-20px;margin-left:-20px}.no-gutters{margin-right:0;margin-left:0}.no-gutters>.col,.no-gutters>[class*=col-]{padding-right:0;padding-left:0}.col,.col-1,.col-10,.col-11,.col-12,.col-2,.col-3,.col-4,.col-5,.col-6,.col-7,.col-8,.col-9,.col-auto,.col-lg,.col-lg-1,.col-lg-10,.col-lg-11,.col-lg-12,.col-lg-2,.col-lg-3,.col-lg-4,.col-lg-5,.col-lg-6,.col-lg-7,.col-lg-8,.col-lg-9,.col-lg-auto,.col-md,.col-md-1,.col-md-10,.col-md-11,.col-md-12,.col-md-2,.col-md-3,.col-md-4,.col-md-5,.col-md-6,.col-md-7,.col-md-8,.col-md-9,.col-md-auto,.col-sm,.col-sm-1,.col-sm-10,.col-sm-11,.col-sm-12,.col-sm-2,.col-sm-3,.col-sm-4,.col-sm-5,.col-sm-6,.col-sm-7,.col-sm-8,.col-sm-9,.col-sm-auto,.col-xl,.col-xl-1,.col-xl-10,.col-xl-11,.col-xl-12,.col-xl-2,.col-xl-3,.col-xl-4,.col-xl-5,.col-xl-6,.col-xl-7,.col-xl-8,.col-xl-9,.col-xl-auto{position:relative;width:100%;min-height:1px;padding-right:20px;padding-left:20px}.col{flex-basis:0;flex-grow:1;max-width:100%}.col-auto{flex:0 0 auto;width:auto;max-width:none}.col-1{flex:0 0 8.3333333333%;max-width:8.3333333333%}.col-2{flex:0 0 16.6666666667%;max-width:16.6666666667%}.col-3{flex:0 0 25%;max-width:25%}.col-4{flex:0 0 33.3333333333%;max-width:33.3333333333%}.col-5{flex:0 0 41.6666666667%;max-width:41.6666666667%}.col-6{flex:0 0 50%;max-width:50%}.col-7{flex:0 0 58.3333333333%;max-width:58.3333333333%}.col-8{flex:0 0 66.6666666667%;max-width:66.6666666667%}.col-9{flex:0 0 75%;max-width:75%}.col-10{flex:0 0 83.3333333333%;max-width:83.3333333333%}.col-11{flex:0 0 91.6666666667%;max-width:91.6666666667%}.col-12{flex:0 0 100%;max-width:100%}.order-first{order:-1}.order-last{order:13}.order-0{order:0}.order-1{order:1}.order-2{order:2}.order-3{order:3}.order-4{order:4}.order-5{order:5}.order-6{order:6}.order-7{order:7}.order-8{order:8}.order-9{order:9}.order-10{order:10}.order-11{order:11}.order-12{order:12}.offset-1{margin-left:8.3333333333%}.offset-2{margin-left:16.6666666667%}.offset-3{margin-left:25%}.offset-4{margin-left:33.3333333333%}.offset-5{margin-left:41.6666666667%}.offset-6{margin-left:50%}.offset-7{margin-left:58.3333333333%}.offset-8{margin-left:66.6666666667%}.offset-9{margin-left:75%}.offset-10{margin-left:83.3333333333%}.offset-11{margin-left:91.6666666667%}@media (min-width:480px){.col-sm{flex-basis:0;flex-grow:1;max-width:100%}.col-sm-auto{flex:0 0 auto;width:auto;max-width:none}.col-sm-1{flex:0 0 8.3333333333%;max-width:8.3333333333%}.col-sm-2{flex:0 0 16.6666666667%;max-width:16.6666666667%}.col-sm-3{flex:0 0 25%;max-width:25%}.col-sm-4{flex:0 0 33.3333333333%;max-width:33.3333333333%}.col-sm-5{flex:0 0 41.6666666667%;max-width:41.6666666667%}.col-sm-6{flex:0 0 50%;max-width:50%}.col-sm-7{flex:0 0 58.3333333333%;max-width:58.3333333333%}.col-sm-8{flex:0 0 66.6666666667%;max-width:66.6666666667%}.col-sm-9{flex:0 0 75%;max-width:75%}.col-sm-10{flex:0 0 83.3333333333%;max-width:83.3333333333%}.col-sm-11{flex:0 0 91.6666666667%;max-width:91.6666666667%}.col-sm-12{flex:0 0 100%;max-width:100%}.order-sm-first{order:-1}.order-sm-last{order:13}.order-sm-0{order:0}.order-sm-1{order:1}.order-sm-2{order:2}.order-sm-3{order:3}.order-sm-4{order:4}.order-sm-5{order:5}.order-sm-6{order:6}.order-sm-7{order:7}.order-sm-8{order:8}.order-sm-9{order:9}.order-sm-10{order:10}.order-sm-11{order:11}.order-sm-12{order:12}.offset-sm-0{margin-left:0}.offset-sm-1{margin-left:8.3333333333%}.offset-sm-2{margin-left:16.6666666667%}.offset-sm-3{margin-left:25%}.offset-sm-4{margin-left:33.3333333333%}.offset-sm-5{margin-left:41.6666666667%}.offset-sm-6{margin-left:50%}.offset-sm-7{margin-left:58.3333333333%}.offset-sm-8{margin-left:66.6666666667%}.offset-sm-9{margin-left:75%}.offset-sm-10{margin-left:83.3333333333%}.offset-sm-11{margin-left:91.6666666667%}}@media (min-width:1024px){.col-md{flex-basis:0;flex-grow:1;max-width:100%}.col-md-auto{flex:0 0 auto;width:auto;max-width:none}.col-md-1{flex:0 0 8.3333333333%;max-width:8.3333333333%}.col-md-2{flex:0 0 16.6666666667%;max-width:16.6666666667%}.col-md-3{flex:0 0 25%;max-width:25%}.col-md-4{flex:0 0 33.3333333333%;max-width:33.3333333333%}.col-md-5{flex:0 0 41.6666666667%;max-width:41.6666666667%}.col-md-6{flex:0 0 50%;max-width:50%}.col-md-7{flex:0 0 58.3333333333%;max-width:58.3333333333%}.col-md-8{flex:0 0 66.6666666667%;max-width:66.6666666667%}.col-md-9{flex:0 0 75%;max-width:75%}.col-md-10{flex:0 0 83.3333333333%;max-width:83.3333333333%}.col-md-11{flex:0 0 91.6666666667%;max-width:91.6666666667%}.col-md-12{flex:0 0 100%;max-width:100%}.order-md-first{order:-1}.order-md-last{order:13}.order-md-0{order:0}.order-md-1{order:1}.order-md-2{order:2}.order-md-3{order:3}.order-md-4{order:4}.order-md-5{order:5}.order-md-6{order:6}.order-md-7{order:7}.order-md-8{order:8}.order-md-9{order:9}.order-md-10{order:10}.order-md-11{order:11}.order-md-12{order:12}.offset-md-0{margin-left:0}.offset-md-1{margin-left:8.3333333333%}.offset-md-2{margin-left:16.6666666667%}.offset-md-3{margin-left:25%}.offset-md-4{margin-left:33.3333333333%}.offset-md-5{margin-left:41.6666666667%}.offset-md-6{margin-left:50%}.offset-md-7{margin-left:58.3333333333%}.offset-md-8{margin-left:66.6666666667%}.offset-md-9{margin-left:75%}.offset-md-10{margin-left:83.3333333333%}.offset-md-11{margin-left:91.6666666667%}}@media (min-width:1200px){.col-lg{flex-basis:0;flex-grow:1;max-width:100%}.col-lg-auto{flex:0 0 auto;width:auto;max-width:none}.col-lg-1{flex:0 0 8.3333333333%;max-width:8.3333333333%}.col-lg-2{flex:0 0 16.6666666667%;max-width:16.6666666667%}.col-lg-3{flex:0 0 25%;max-width:25%}.col-lg-4{flex:0 0 33.3333333333%;max-width:33.3333333333%}.col-lg-5{flex:0 0 41.6666666667%;max-width:41.6666666667%}.col-lg-6{flex:0 0 50%;max-width:50%}.col-lg-7{flex:0 0 58.3333333333%;max-width:58.3333333333%}.col-lg-8{flex:0 0 66.6666666667%;max-width:66.6666666667%}.col-lg-9{flex:0 0 75%;max-width:75%}.col-lg-10{flex:0 0 83.3333333333%;max-width:83.3333333333%}.col-lg-11{flex:0 0 91.6666666667%;max-width:91.6666666667%}.col-lg-12{flex:0 0 100%;max-width:100%}.order-lg-first{order:-1}.order-lg-last{order:13}.order-lg-0{order:0}.order-lg-1{order:1}.order-lg-2{order:2}.order-lg-3{order:3}.order-lg-4{order:4}.order-lg-5{order:5}.order-lg-6{order:6}.order-lg-7{order:7}.order-lg-8{order:8}.order-lg-9{order:9}.order-lg-10{order:10}.order-lg-11{order:11}.order-lg-12{order:12}.offset-lg-0{margin-left:0}.offset-lg-1{margin-left:8.3333333333%}.offset-lg-2{margin-left:16.6666666667%}.offset-lg-3{margin-left:25%}.offset-lg-4{margin-left:33.3333333333%}.offset-lg-5{margin-left:41.6666666667%}.offset-lg-6{margin-left:50%}.offset-lg-7{margin-left:58.3333333333%}.offset-lg-8{margin-left:66.6666666667%}.offset-lg-9{margin-left:75%}.offset-lg-10{margin-left:83.3333333333%}.offset-lg-11{margin-left:91.6666666667%}}@media (min-width:1900px){.col-xl{flex-basis:0;flex-grow:1;max-width:100%}.col-xl-auto{flex:0 0 auto;width:auto;max-width:none}.col-xl-1{flex:0 0 8.3333333333%;max-width:8.3333333333%}.col-xl-2{flex:0 0 16.6666666667%;max-width:16.6666666667%}.col-xl-3{flex:0 0 25%;max-width:25%}.col-xl-4{flex:0 0 33.3333333333%;max-width:33.3333333333%}.col-xl-5{flex:0 0 41.6666666667%;max-width:41.6666666667%}.col-xl-6{flex:0 0 50%;max-width:50%}.col-xl-7{flex:0 0 58.3333333333%;max-width:58.3333333333%}.col-xl-8{flex:0 0 66.6666666667%;max-width:66.6666666667%}.col-xl-9{flex:0 0 75%;max-width:75%}.col-xl-10{flex:0 0 83.3333333333%;max-width:83.3333333333%}.col-xl-11{flex:0 0 91.6666666667%;max-width:91.6666666667%}.col-xl-12{flex:0 0 100%;max-width:100%}.order-xl-first{order:-1}.order-xl-last{order:13}.order-xl-0{order:0}.order-xl-1{order:1}.order-xl-2{order:2}.order-xl-3{order:3}.order-xl-4{order:4}.order-xl-5{order:5}.order-xl-6{order:6}.order-xl-7{order:7}.order-xl-8{order:8}.order-xl-9{order:9}.order-xl-10{order:10}.order-xl-11{order:11}.order-xl-12{order:12}.offset-xl-0{margin-left:0}.offset-xl-1{margin-left:8.3333333333%}.offset-xl-2{margin-left:16.6666666667%}.offset-xl-3{margin-left:25%}.offset-xl-4{margin-left:33.3333333333%}.offset-xl-5{margin-left:41.6666666667%}.offset-xl-6{margin-left:50%}.offset-xl-7{margin-left:58.3333333333%}.offset-xl-8{margin-left:66.6666666667%}.offset-xl-9{margin-left:75%}.offset-xl-10{margin-left:83.3333333333%}.offset-xl-11{margin-left:91.6666666667%}}.d-none{display:none!important}.d-inline{display:inline!important}.d-inline-block{display:inline-block!important}.d-block{display:block!important}.d-table{display:table!important}.d-table-row{display:table-row!important}.d-table-cell{display:table-cell!important}.d-flex{display:flex!important}.d-inline-flex{display:inline-flex!important}@media (min-width:480px){.d-sm-none{display:none!important}.d-sm-inline{display:inline!important}.d-sm-inline-block{display:inline-block!important}.d-sm-block{display:block!important}.d-sm-table{display:table!important}.d-sm-table-row{display:table-row!important}.d-sm-table-cell{display:table-cell!important}.d-sm-flex{display:flex!important}.d-sm-inline-flex{display:inline-flex!important}}@media (min-width:1024px){.d-md-none{display:none!important}.d-md-inline{display:inline!important}.d-md-inline-block{display:inline-block!important}.d-md-block{display:block!important}.d-md-table{display:table!important}.d-md-table-row{display:table-row!important}.d-md-table-cell{display:table-cell!important}.d-md-flex{display:flex!important}.d-md-inline-flex{display:inline-flex!important}}@media (min-width:1200px){.d-lg-none{display:none!important}.d-lg-inline{display:inline!important}.d-lg-inline-block{display:inline-block!important}.d-lg-block{display:block!important}.d-lg-table{display:table!important}.d-lg-table-row{display:table-row!important}.d-lg-table-cell{display:table-cell!important}.d-lg-flex{display:flex!important}.d-lg-inline-flex{display:inline-flex!important}}@media (min-width:1900px){.d-xl-none{display:none!important}.d-xl-inline{display:inline!important}.d-xl-inline-block{display:inline-block!important}.d-xl-block{display:block!important}.d-xl-table{display:table!important}.d-xl-table-row{display:table-row!important}.d-xl-table-cell{display:table-cell!important}.d-xl-flex{display:flex!important}.d-xl-inline-flex{display:inline-flex!important}}@media print{.d-print-none{display:none!important}.d-print-inline{display:inline!important}.d-print-inline-block{display:inline-block!important}.d-print-block{display:block!important}.d-print-table{display:table!important}.d-print-table-row{display:table-row!important}.d-print-table-cell{display:table-cell!important}.d-print-flex{display:flex!important}.d-print-inline-flex{display:inline-flex!important}}.flex-row{flex-direction:row!important}.flex-column{flex-direction:column!important}.flex-row-reverse{flex-direction:row-reverse!important}.flex-column-reverse{flex-direction:column-reverse!important}.flex-wrap{flex-wrap:wrap!important}.flex-nowrap{flex-wrap:nowrap!important}.flex-wrap-reverse{flex-wrap:wrap-reverse!important}.justify-content-start{justify-content:flex-start!important}.justify-content-end{justify-content:flex-end!important}.justify-content-center{justify-content:center!important}.justify-content-between{justify-content:space-between!important}.justify-content-around{justify-content:space-around!important}.align-items-start{align-items:flex-start!important}.align-items-end{align-items:flex-end!important}.align-items-center{align-items:center!important}.align-items-baseline{align-items:baseline!important}.align-items-stretch{align-items:stretch!important}.align-content-start{align-content:flex-start!important}.align-content-end{align-content:flex-end!important}.align-content-center{align-content:center!important}.align-content-between{align-content:space-between!important}.align-content-around{align-content:space-around!important}.align-content-stretch{align-content:stretch!important}.align-self-auto{align-self:auto!important}.align-self-start{align-self:flex-start!important}.align-self-end{align-self:flex-end!important}.align-self-center{align-self:center!important}.align-self-baseline{align-self:baseline!important}.align-self-stretch{align-self:stretch!important}@media (min-width:480px){.flex-sm-row{flex-direction:row!important}.flex-sm-column{flex-direction:column!important}.flex-sm-row-reverse{flex-direction:row-reverse!important}.flex-sm-column-reverse{flex-direction:column-reverse!important}.flex-sm-wrap{flex-wrap:wrap!important}.flex-sm-nowrap{flex-wrap:nowrap!important}.flex-sm-wrap-reverse{flex-wrap:wrap-reverse!important}.justify-content-sm-start{justify-content:flex-start!important}.justify-content-sm-end{justify-content:flex-end!important}.justify-content-sm-center{justify-content:center!important}.justify-content-sm-between{justify-content:space-between!important}.justify-content-sm-around{justify-content:space-around!important}.align-items-sm-start{align-items:flex-start!important}.align-items-sm-end{align-items:flex-end!important}.align-items-sm-center{align-items:center!important}.align-items-sm-baseline{align-items:baseline!important}.align-items-sm-stretch{align-items:stretch!important}.align-content-sm-start{align-content:flex-start!important}.align-content-sm-end{align-content:flex-end!important}.align-content-sm-center{align-content:center!important}.align-content-sm-between{align-content:space-between!important}.align-content-sm-around{align-content:space-around!important}.align-content-sm-stretch{align-content:stretch!important}.align-self-sm-auto{align-self:auto!important}.align-self-sm-start{align-self:flex-start!important}.align-self-sm-end{align-self:flex-end!important}.align-self-sm-center{align-self:center!important}.align-self-sm-baseline{align-self:baseline!important}.align-self-sm-stretch{align-self:stretch!important}}@media (min-width:1024px){.flex-md-row{flex-direction:row!important}.flex-md-column{flex-direction:column!important}.flex-md-row-reverse{flex-direction:row-reverse!important}.flex-md-column-reverse{flex-direction:column-reverse!important}.flex-md-wrap{flex-wrap:wrap!important}.flex-md-nowrap{flex-wrap:nowrap!important}.flex-md-wrap-reverse{flex-wrap:wrap-reverse!important}.justify-content-md-start{justify-content:flex-start!important}.justify-content-md-end{justify-content:flex-end!important}.justify-content-md-center{justify-content:center!important}.justify-content-md-between{justify-content:space-between!important}.justify-content-md-around{justify-content:space-around!important}.align-items-md-start{align-items:flex-start!important}.align-items-md-end{align-items:flex-end!important}.align-items-md-center{align-items:center!important}.align-items-md-baseline{align-items:baseline!important}.align-items-md-stretch{align-items:stretch!important}.align-content-md-start{align-content:flex-start!important}.align-content-md-end{align-content:flex-end!important}.align-content-md-center{align-content:center!important}.align-content-md-between{align-content:space-between!important}.align-content-md-around{align-content:space-around!important}.align-content-md-stretch{align-content:stretch!important}.align-self-md-auto{align-self:auto!important}.align-self-md-start{align-self:flex-start!important}.align-self-md-end{align-self:flex-end!important}.align-self-md-center{align-self:center!important}.align-self-md-baseline{align-self:baseline!important}.align-self-md-stretch{align-self:stretch!important}}@media (min-width:1200px){.flex-lg-row{flex-direction:row!important}.flex-lg-column{flex-direction:column!important}.flex-lg-row-reverse{flex-direction:row-reverse!important}.flex-lg-column-reverse{flex-direction:column-reverse!important}.flex-lg-wrap{flex-wrap:wrap!important}.flex-lg-nowrap{flex-wrap:nowrap!important}.flex-lg-wrap-reverse{flex-wrap:wrap-reverse!important}.justify-content-lg-start{justify-content:flex-start!important}.justify-content-lg-end{justify-content:flex-end!important}.justify-content-lg-center{justify-content:center!important}.justify-content-lg-between{justify-content:space-between!important}.justify-content-lg-around{justify-content:space-around!important}.align-items-lg-start{align-items:flex-start!important}.align-items-lg-end{align-items:flex-end!important}.align-items-lg-center{align-items:center!important}.align-items-lg-baseline{align-items:baseline!important}.align-items-lg-stretch{align-items:stretch!important}.align-content-lg-start{align-content:flex-start!important}.align-content-lg-end{align-content:flex-end!important}.align-content-lg-center{align-content:center!important}.align-content-lg-between{align-content:space-between!important}.align-content-lg-around{align-content:space-around!important}.align-content-lg-stretch{align-content:stretch!important}.align-self-lg-auto{align-self:auto!important}.align-self-lg-start{align-self:flex-start!important}.align-self-lg-end{align-self:flex-end!important}.align-self-lg-center{align-self:center!important}.align-self-lg-baseline{align-self:baseline!important}.align-self-lg-stretch{align-self:stretch!important}}@media (min-width:1900px){.flex-xl-row{flex-direction:row!important}.flex-xl-column{flex-direction:column!important}.flex-xl-row-reverse{flex-direction:row-reverse!important}.flex-xl-column-reverse{flex-direction:column-reverse!important}.flex-xl-wrap{flex-wrap:wrap!important}.flex-xl-nowrap{flex-wrap:nowrap!important}.flex-xl-wrap-reverse{flex-wrap:wrap-reverse!important}.justify-content-xl-start{justify-content:flex-start!important}.justify-content-xl-end{justify-content:flex-end!important}.justify-content-xl-center{justify-content:center!important}.justify-content-xl-between{justify-content:space-between!important}.justify-content-xl-around{justify-content:space-around!important}.align-items-xl-start{align-items:flex-start!important}.align-items-xl-end{align-items:flex-end!important}.align-items-xl-center{align-items:center!important}.align-items-xl-baseline{align-items:baseline!important}.align-items-xl-stretch{align-items:stretch!important}.align-content-xl-start{align-content:flex-start!important}.align-content-xl-end{align-content:flex-end!important}.align-content-xl-center{align-content:center!important}.align-content-xl-between{align-content:space-between!important}.align-content-xl-around{align-content:space-around!important}.align-content-xl-stretch{align-content:stretch!important}.align-self-xl-auto{align-self:auto!important}.align-self-xl-start{align-self:flex-start!important}.align-self-xl-end{align-self:flex-end!important}.align-self-xl-center{align-self:center!important}.align-self-xl-baseline{align-self:baseline!important}.align-self-xl-stretch{align-self:stretch!important}}*,:after,:before{box-sizing:border-box}html{font-family:sans-serif;line-height:1.15;-ms-overflow-style:scrollbar;-webkit-tap-highlight-color:rgba(0,0,0,0)}article,aside,dialog,figcaption,figure,footer,header,hgroup,main,nav,section{display:block}body{margin:0;font-size:1rem;font-weight:400;line-height:1.5;color:#212529;text-align:left;background-color:#fff}[tabindex="-1"]:focus{outline:0!important}hr{box-sizing:initial;height:0;overflow:visible}h1,h2,h3,h4,h5,h6{margin-top:0;margin-bottom:.5rem}p{margin-top:0;margin-bottom:1rem}abbr[data-original-title],abbr[title]{text-decoration:underline;-webkit-text-decoration:underline dotted;text-decoration:underline dotted;cursor:help;border-bottom:0}address{font-style:normal;line-height:inherit}address,dl,ol,ul{margin-bottom:1rem}dl,ol,ul{margin-top:0}ol ol,ol ul,ul ol,ul ul{margin-bottom:0}dt{font-weight:700}dd{margin-bottom:.5rem;margin-left:0}blockquote{margin:0 0 1rem}dfn{font-style:italic}b,strong{font-weight:bolder}small{font-size:80%}sub,sup{position:relative;font-size:75%;line-height:0;vertical-align:initial}sub{bottom:-.25em}sup{top:-.5em}a{color:#007bff;text-decoration:none;background-color:initial;-webkit-text-decoration-skip:objects}a:hover{color:#0056b3;text-decoration:underline}a:not([href]):not([tabindex]),a:not([href]):not([tabindex]):focus,a:not([href]):not([tabindex]):hover{color:inherit;text-decoration:none}a:not([href]):not([tabindex]):focus{outline:0}code,kbd,pre,samp{font-family:monospace,monospace;font-size:1em}pre{margin-top:0;margin-bottom:1rem;overflow:auto;-ms-overflow-style:scrollbar}figure{margin:0 0 1rem}img{vertical-align:middle;border-style:none}svg:not(:root){overflow:hidden}table{border-collapse:collapse}caption{padding-top:.75rem;padding-bottom:.75rem;color:#6c757d;text-align:left;caption-side:bottom}th{text-align:inherit}label{display:inline-block;margin-bottom:.5rem}button{border-radius:0}button:focus{outline:1px dotted;outline:5px auto -webkit-focus-ring-color}button,input,optgroup,select,textarea{margin:0;font-family:inherit;font-size:inherit;line-height:inherit}button,input{overflow:visible}button,select{text-transform:none}[type=reset],[type=submit],button,html [type=button]{-webkit-appearance:button}[type=button]::-moz-focus-inner,[type=reset]::-moz-focus-inner,[type=submit]::-moz-focus-inner,button::-moz-focus-inner{padding:0;border-style:none}input[type=checkbox],input[type=radio]{box-sizing:border-box;padding:0}input[type=date],input[type=datetime-local],input[type=month],input[type=time]{-webkit-appearance:listbox}textarea{overflow:auto;resize:vertical}fieldset{min-width:0;padding:0;margin:0;border:0}legend{display:block;width:100%;max-width:100%;padding:0;margin-bottom:.5rem;font-size:1.5rem;line-height:inherit;color:inherit;white-space:normal}progress{vertical-align:initial}[type=number]::-webkit-inner-spin-button,[type=number]::-webkit-outer-spin-button{height:auto}[type=search]{outline-offset:-2px;-webkit-appearance:none}[type=search]::-webkit-search-cancel-button,[type=search]::-webkit-search-decoration{-webkit-appearance:none}::-webkit-file-upload-button{font:inherit;-webkit-appearance:button}output{display:inline-block}summary{display:list-item;cursor:pointer}template{display:none}[hidden]{display:none!important}.fade{opacity:0;transition:opacity .15s linear}.fade.show{opacity:1}.collapse{display:none}.collapse.show{display:block}tr.collapse.show{display:table-row}tbody.collapse.show{display:table-row-group}.collapsing{position:relative;height:0;overflow:hidden;transition:height .35s ease}.text-justify{text-align:justify!important}.text-nowrap{white-space:nowrap!important}.text-truncate{overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.text-left{text-align:left!important}.text-right{text-align:right!important}.text-center{text-align:center!important}@media (min-width:480px){.text-sm-left{text-align:left!important}.text-sm-right{text-align:right!important}.text-sm-center{text-align:center!important}}@media (min-width:1024px){.text-md-left{text-align:left!important}.text-md-right{text-align:right!important}.text-md-center{text-align:center!important}}@media (min-width:1200px){.text-lg-left{text-align:left!important}.text-lg-right{text-align:right!important}.text-lg-center{text-align:center!important}}@media (min-width:1900px){.text-xl-left{text-align:left!important}.text-xl-right{text-align:right!important}.text-xl-center{text-align:center!important}}.text-lowercase{text-transform:lowercase!important}.text-uppercase{text-transform:uppercase!important}.text-capitalize{text-transform:capitalize!important}.font-weight-light{font-weight:300!important}.font-weight-normal{font-weight:400!important}.font-weight-bold{font-weight:700!important}.font-italic{font-style:italic!important}.text-white{color:#fff!important}.text-primary{color:#007bff!important}a.text-primary:focus,a.text-primary:hover{color:#0062cc!important}.text-secondary{color:#6c757d!important}a.text-secondary:focus,a.text-secondary:hover{color:#545b62!important}.text-success{color:#28a745!important}a.text-success:focus,a.text-success:hover{color:#1e7e34!important}.text-info{color:#17a2b8!important}a.text-info:focus,a.text-info:hover{color:#117a8b!important}.text-warning{color:#ffc107!important}a.text-warning:focus,a.text-warning:hover{color:#d39e00!important}.text-danger{color:#dc3545!important}a.text-danger:focus,a.text-danger:hover{color:#bd2130!important}.text-light{color:#f8f9fa!important}a.text-light:focus,a.text-light:hover{color:#dae0e5!important}.text-dark{color:#343a40!important}a.text-dark:focus,a.text-dark:hover{color:#1d2124!important}.text-muted{color:#6c757d!important}.text-hide{font:0/0 a;color:#0000;text-shadow:none;background-color:initial;border:0}.footer,section{padding:3.3333333333rem 0}@media (min-width:1024px){.footer,section{padding:5rem 0}}.fx-section{padding:3.3333333333rem 0}@media (min-width:1024px){.fx-section{padding:5rem 0}}.fx-section--full-viewport-height{min-height:calc(100vh - 50px);display:flex;flex-direction:column;justify-content:center}.fx-margin-bottom-section{margin-bottom:2.2727272727rem!important}@media (min-width:1024px){.fx-margin-bottom-section{margin-bottom:5rem!important}}.fx-margin-top-section{margin-top:2.2727272727rem!important}@media (min-width:1024px){.fx-margin-top-section{margin-top:5rem!important}}h2{margin-bottom:20px}@media (min-width:1024px){h2{margin-bottom:40px}}.clearfix:after{display:table;content:"";clear:both}.section-space-after-header{padding-top:80px}@media (min-width:1024px){.section-space-after-header{padding-top:224px}}.fx-section--small-padding{padding:3.3333333333rem 0}@media (min-width:1024px){.fx-section--small-padding{padding:5rem 0}}@keyframes fx-animation-tada{0%{transform:scaleX(1)}10%,20%{transform:scale3d(.95,.95,.95) rotate(-3deg)}30%,50%,70%,90%{transform:scale3d(1.05,1.05,1.05) rotate(3deg)}40%,60%,80%{transform:scale3d(1.05,1.05,1.05) rotate(-3deg)}to{transform:scaleX(1)}}.fx-animation-tada{animation-name:fx-animation-tada}.animated,.fx-animation-tada{animation-duration:1s;animation-fill-mode:both}.animated{opacity:0}.animated.initially-visible{opacity:1}.fx-animation-fadeIn{animation-name:fx-animation-fadeIn}.fx-animation-fadeInUp{animation-name:fx-animation-fadeInUp}.fx-animation-fadeInDown{animation-name:fx-animation-fadeInDown}.fx-animation-fadeInDown20px{animation-name:fx-animation-fadeInDown20px}.fx-animation-fadeInDown5px{animation-name:fx-animation-fadeInDown5px}.fx-animation-fadeOutUp20px{animation-name:fx-animation-fadeOutUp20px}.fx-animation-fadeInUp20px{animation-name:fx-animation-fadeInUp20px}@keyframes fx-animation-fadeInUp20px{0%{opacity:0;transform:translate3d(0,20px,0)}to{opacity:1;transform:none}}.fx-animation-fadeInUp50px{animation-name:fx-animation-fadeInUp50px}@keyframes fx-animation-fadeInUp50px{0%{opacity:0;transform:translate3d(0,50px,0)}to{opacity:1;transform:none}}.fx-animation-fadeInUp100px{animation-name:fx-animation-fadeInUp100px}@keyframes fx-animation-fadeInUp100px{0%{opacity:0;transform:translate3d(0,100px,0)}to{opacity:1;transform:none}}.fx-animation-fadeInUp150px{animation-name:fx-animation-fadeInUp150px}@keyframes fx-animation-fadeInUp150px{0%{opacity:0;transform:translate3d(0,150px,0)}to{opacity:1;transform:none}}.fx-animation-fadeInUp200px{animation-name:fx-animation-fadeInUp200px}@keyframes fx-animation-fadeInUp200px{0%{opacity:0;transform:translate3d(0,200px,0)}to{opacity:1;transform:none}}.fx-animation-fadeInRightUp{animation-name:fx-animation-fadeInRightUp}@keyframes fx-animation-fadeIn{0%{opacity:0}to{opacity:1}}@keyframes fx-animation-fadeInRightUp{0%{opacity:0;transform:translate3d(500px,300px,0)}to{opacity:1;transform:none}}.fx-animation-fadeInRightUpPhone{animation-name:fx-animation-fadeInRightUpPhone}@keyframes fx-animation-fadeInRightUpPhone{0%{opacity:0;transform:translate3d(240px,610px,0)}to{opacity:1;transform:none}}.fx-animation-fadeLeftUp{animation-name:fx-animation-fadeLeftUp}@keyframes fx-animation-fadeLeftUp{0%{opacity:0;transform:translate3d(-200px,300px,0)}to{opacity:1;transform:none}}.fx-animation-fadeInRight200px{animation-name:fx-animation-fadeInRight200px}.animated.infinite{animation-iteration-count:infinite}.animated.hinge{animation-duration:2s}.fx-animation-boxShadowPulse{animation:fx-animation-boxShadowPulse .5s}.fx-animation-showUpOpacity{animation-name:fx-animation-showUpOpacity}.fx-animation-slideInRight{animation-name:fx-animation-slideInRight}.fx-animation-slideInLeft{animation-name:fx-animation-slideInLeft}.fx-animation-step1{animation-name:fx-animation-step1;animation-delay:.8s;animation-duration:.5s;animation-timing-function:ease-out}.fx-animation-step{animation-name:fx-animation-step;animation-duration:.3s;animation-timing-function:ease-out}@keyframes fx-animation-step1{0%{opacity:1;transform:translateX(170%)}to{transform:translateX(0);opacity:1}}@keyframes fx-animation-step{0%{transform:translateX(-116%);opacity:0}1%{transform:translateX(-116%);opacity:1}to{transform:translateX(0);opacity:1}}@keyframes fx-animation-showUpOpacity{0%{opacity:0}to{opacity:1}}@keyframes fx-animation-slideInBottom50px{0%{transform:translateY(50px)}to{transform:translateY(0)}}@keyframes fx-animation-fadeInUp{0%{opacity:0;transform:translate3d(0,50%,0)}to{opacity:1;transform:none}}@keyframes fx-animation-fadeInDown{0%{opacity:0;transform:translate3d(0,-50%,0)}to{opacity:1;transform:none}}@keyframes fx-animation-fadeInDown20px{0%{opacity:0;transform:translate3d(0,-20px,0)}to{opacity:1;transform:none}}@keyframes fx-animation-fadeInDown5px{0%{opacity:0;transform:translate3d(0,-5px,0)}to{opacity:1;transform:none}}@keyframes fx-animation-fadeOutUp20px{0%{opacity:1;transform:none}to{opacity:0;visibility:hidden;transform:translate3d(0,-20px,0)}}@keyframes fx-animation-fadeInRight200px{0%{opacity:0;transform:translateX(200px)}to{opacity:1;transform:none}}@keyframes fx-animation-slideInRight{0%{opacity:0;transform:translateX(-100%)}to{opacity:1;transform:none}}@keyframes fx-animation-slideInLeft{0%{opacity:0;transform:translateX(100%)}to{opacity:1;transform:none}}.expandToFullScreen{animation:fx-animation-expandToFullScreen 1s}@keyframes fx-animation-expandToFullScreen{0%{box-shadow:0 0 0 20px #ffffff4d}to{box-shadow:0 0 0 3500px #00000080}}.fx-animation-sequence-all :first-child,.fx-animation-sequence-all :first-child *,.fx-animation-sequence-all-0-300 :first-child,.fx-animation-sequence-all-0-300 :first-child *{animation-delay:0ms}.fx-animation-sequence-all :nth-child(2),.fx-animation-sequence-all :nth-child(2) *,.fx-animation-sequence-all-0-300 :nth-child(2),.fx-animation-sequence-all-0-300 :nth-child(2) *{animation-delay:.3s}.fx-animation-sequence-all :nth-child(3),.fx-animation-sequence-all :nth-child(3) *,.fx-animation-sequence-all-0-300 :nth-child(3),.fx-animation-sequence-all-0-300 :nth-child(3) *{animation-delay:.6s}.fx-animation-sequence-all :nth-child(4),.fx-animation-sequence-all :nth-child(4) *,.fx-animation-sequence-all-0-300 :nth-child(4),.fx-animation-sequence-all-0-300 :nth-child(4) *{animation-delay:.9s}.fx-animation-sequence-all :nth-child(5),.fx-animation-sequence-all :nth-child(5) *,.fx-animation-sequence-all-0-300 :nth-child(5),.fx-animation-sequence-all-0-300 :nth-child(5) *{animation-delay:1.2s}.fx-animation-sequence-all :nth-child(6),.fx-animation-sequence-all :nth-child(6) *,.fx-animation-sequence-all-0-300 :nth-child(6),.fx-animation-sequence-all-0-300 :nth-child(6) *{animation-delay:1.5s}.fx-animation-sequence-all :nth-child(7),.fx-animation-sequence-all :nth-child(7) *,.fx-animation-sequence-all-0-300 :nth-child(7),.fx-animation-sequence-all-0-300 :nth-child(7) *{animation-delay:1.8s}.fx-animation-sequence-all :nth-child(8),.fx-animation-sequence-all :nth-child(8) *,.fx-animation-sequence-all-0-300 :nth-child(8),.fx-animation-sequence-all-0-300 :nth-child(8) *{animation-delay:2.1s}.fx-animation-sequence-all :nth-child(9),.fx-animation-sequence-all :nth-child(9) *,.fx-animation-sequence-all-0-300 :nth-child(9),.fx-animation-sequence-all-0-300 :nth-child(9) *{animation-delay:2.4s}.fx-animation-sequence-all :nth-child(10),.fx-animation-sequence-all :nth-child(10) *,.fx-animation-sequence-all-0-300 :nth-child(10),.fx-animation-sequence-all-0-300 :nth-child(10) *{animation-delay:2.7s}.fx-animation-sequence-all :nth-child(11),.fx-animation-sequence-all :nth-child(11) *,.fx-animation-sequence-all-0-300 :nth-child(11),.fx-animation-sequence-all-0-300 :nth-child(11) *{animation-delay:3s}.fx-animation-sequence-all :nth-child(12),.fx-animation-sequence-all :nth-child(12) *,.fx-animation-sequence-all-0-300 :nth-child(12),.fx-animation-sequence-all-0-300 :nth-child(12) *{animation-delay:3.3s}.fx-animation-sequence-all :nth-child(13),.fx-animation-sequence-all :nth-child(13) *,.fx-animation-sequence-all-0-300 :nth-child(13),.fx-animation-sequence-all-0-300 :nth-child(13) *{animation-delay:3.6s}.fx-animation-sequence-all :nth-child(14),.fx-animation-sequence-all :nth-child(14) *,.fx-animation-sequence-all-0-300 :nth-child(14),.fx-animation-sequence-all-0-300 :nth-child(14) *{animation-delay:3.9s}.fx-animation-sequence :first-of-type,.fx-animation-sequence :first-of-type *,.fx-animation-sequence-0-300 :first-of-type,.fx-animation-sequence-0-300 :first-of-type *{animation-delay:0ms}.fx-animation-sequence :nth-of-type(2),.fx-animation-sequence :nth-of-type(2) *,.fx-animation-sequence-0-300 :nth-of-type(2),.fx-animation-sequence-0-300 :nth-of-type(2) *{animation-delay:.3s}.fx-animation-sequence :nth-of-type(3),.fx-animation-sequence :nth-of-type(3) *,.fx-animation-sequence-0-300 :nth-of-type(3),.fx-animation-sequence-0-300 :nth-of-type(3) *{animation-delay:.6s}.fx-animation-sequence :nth-of-type(4),.fx-animation-sequence :nth-of-type(4) *,.fx-animation-sequence-0-300 :nth-of-type(4),.fx-animation-sequence-0-300 :nth-of-type(4) *{animation-delay:.9s}.fx-animation-sequence :nth-of-type(5),.fx-animation-sequence :nth-of-type(5) *,.fx-animation-sequence-0-300 :nth-of-type(5),.fx-animation-sequence-0-300 :nth-of-type(5) *{animation-delay:1.2s}.fx-animation-sequence :nth-of-type(6),.fx-animation-sequence :nth-of-type(6) *,.fx-animation-sequence-0-300 :nth-of-type(6),.fx-animation-sequence-0-300 :nth-of-type(6) *{animation-delay:1.5s}.fx-animation-sequence :nth-of-type(7),.fx-animation-sequence :nth-of-type(7) *,.fx-animation-sequence-0-300 :nth-of-type(7),.fx-animation-sequence-0-300 :nth-of-type(7) *{animation-delay:1.8s}.fx-animation-sequence :nth-of-type(8),.fx-animation-sequence :nth-of-type(8) *,.fx-animation-sequence-0-300 :nth-of-type(8),.fx-animation-sequence-0-300 :nth-of-type(8) *{animation-delay:2.1s}.fx-animation-sequence :nth-of-type(9),.fx-animation-sequence :nth-of-type(9) *,.fx-animation-sequence-0-300 :nth-of-type(9),.fx-animation-sequence-0-300 :nth-of-type(9) *{animation-delay:2.4s}.fx-animation-sequence :nth-of-type(10),.fx-animation-sequence :nth-of-type(10) *,.fx-animation-sequence-0-300 :nth-of-type(10),.fx-animation-sequence-0-300 :nth-of-type(10) *{animation-delay:2.7s}.fx-animation-sequence :nth-of-type(11),.fx-animation-sequence :nth-of-type(11) *,.fx-animation-sequence-0-300 :nth-of-type(11),.fx-animation-sequence-0-300 :nth-of-type(11) *{animation-delay:3s}.fx-animation-sequence :nth-of-type(12),.fx-animation-sequence :nth-of-type(12) *,.fx-animation-sequence-0-300 :nth-of-type(12),.fx-animation-sequence-0-300 :nth-of-type(12) *{animation-delay:3.3s}.fx-animation-sequence :nth-of-type(13),.fx-animation-sequence :nth-of-type(13) *,.fx-animation-sequence-0-300 :nth-of-type(13),.fx-animation-sequence-0-300 :nth-of-type(13) *{animation-delay:3.6s}.fx-animation-sequence :nth-of-type(14),.fx-animation-sequence :nth-of-type(14) *,.fx-animation-sequence-0-300 :nth-of-type(14),.fx-animation-sequence-0-300 :nth-of-type(14) *{animation-delay:3.9s}.fx-animation-sequence-all-0-150 :first-child,.fx-animation-sequence-all-0-150 :first-child *{animation-delay:0ms}.fx-animation-sequence-all-0-150 :nth-child(2),.fx-animation-sequence-all-0-150 :nth-child(2) *{animation-delay:.15s}.fx-animation-sequence-all-0-150 :nth-child(3),.fx-animation-sequence-all-0-150 :nth-child(3) *{animation-delay:.3s}.fx-animation-sequence-all-0-150 :nth-child(4),.fx-animation-sequence-all-0-150 :nth-child(4) *{animation-delay:.45s}.fx-animation-sequence-all-0-150 :nth-child(5),.fx-animation-sequence-all-0-150 :nth-child(5) *{animation-delay:.6s}.fx-animation-sequence-all-0-150 :nth-child(6),.fx-animation-sequence-all-0-150 :nth-child(6) *{animation-delay:.75s}.fx-animation-sequence-all-0-150 :nth-child(7),.fx-animation-sequence-all-0-150 :nth-child(7) *{animation-delay:.9s}.fx-animation-sequence-all-0-150 :nth-child(8),.fx-animation-sequence-all-0-150 :nth-child(8) *{animation-delay:1.05s}.fx-animation-sequence-all-0-150 :nth-child(9),.fx-animation-sequence-all-0-150 :nth-child(9) *{animation-delay:1.2s}.fx-animation-sequence-all-0-150 :nth-child(10),.fx-animation-sequence-all-0-150 :nth-child(10) *{animation-delay:1.35s}.fx-animation-sequence-all-0-150 :nth-child(11),.fx-animation-sequence-all-0-150 :nth-child(11) *{animation-delay:1.5s}.fx-animation-sequence-all-0-150 :nth-child(12),.fx-animation-sequence-all-0-150 :nth-child(12) *{animation-delay:1.65s}.fx-animation-sequence-all-0-150 :nth-child(13),.fx-animation-sequence-all-0-150 :nth-child(13) *{animation-delay:1.8s}.fx-animation-sequence-all-0-150 :nth-child(14),.fx-animation-sequence-all-0-150 :nth-child(14) *{animation-delay:1.95s}.fx-animation-sequence-0-150 :first-of-type,.fx-animation-sequence-0-150 :first-of-type *{animation-delay:0ms}.fx-animation-sequence-0-150 :nth-of-type(2),.fx-animation-sequence-0-150 :nth-of-type(2) *{animation-delay:.15s}.fx-animation-sequence-0-150 :nth-of-type(3),.fx-animation-sequence-0-150 :nth-of-type(3) *{animation-delay:.3s}.fx-animation-sequence-0-150 :nth-of-type(4),.fx-animation-sequence-0-150 :nth-of-type(4) *{animation-delay:.45s}.fx-animation-sequence-0-150 :nth-of-type(5),.fx-animation-sequence-0-150 :nth-of-type(5) *{animation-delay:.6s}.fx-animation-sequence-0-150 :nth-of-type(6),.fx-animation-sequence-0-150 :nth-of-type(6) *{animation-delay:.75s}.fx-animation-sequence-0-150 :nth-of-type(7),.fx-animation-sequence-0-150 :nth-of-type(7) *{animation-delay:.9s}.fx-animation-sequence-0-150 :nth-of-type(8),.fx-animation-sequence-0-150 :nth-of-type(8) *{animation-delay:1.05s}.fx-animation-sequence-0-150 :nth-of-type(9),.fx-animation-sequence-0-150 :nth-of-type(9) *{animation-delay:1.2s}.fx-animation-sequence-0-150 :nth-of-type(10),.fx-animation-sequence-0-150 :nth-of-type(10) *{animation-delay:1.35s}.fx-animation-sequence-0-150 :nth-of-type(11),.fx-animation-sequence-0-150 :nth-of-type(11) *{animation-delay:1.5s}.fx-animation-sequence-0-150 :nth-of-type(12),.fx-animation-sequence-0-150 :nth-of-type(12) *{animation-delay:1.65s}.fx-animation-sequence-0-150 :nth-of-type(13),.fx-animation-sequence-0-150 :nth-of-type(13) *{animation-delay:1.8s}.fx-animation-sequence-0-150 :nth-of-type(14),.fx-animation-sequence-0-150 :nth-of-type(14) *{animation-delay:1.95s}.fx-animation-sequence-all-0-80 :first-child,.fx-animation-sequence-all-0-80 :first-child *{animation-delay:0ms}.fx-animation-sequence-all-0-80 :nth-child(2),.fx-animation-sequence-all-0-80 :nth-child(2) *{animation-delay:80ms}.fx-animation-sequence-all-0-80 :nth-child(3),.fx-animation-sequence-all-0-80 :nth-child(3) *{animation-delay:.16s}.fx-animation-sequence-all-0-80 :nth-child(4),.fx-animation-sequence-all-0-80 :nth-child(4) *{animation-delay:.24s}.fx-animation-sequence-all-0-80 :nth-child(5),.fx-animation-sequence-all-0-80 :nth-child(5) *{animation-delay:.32s}.fx-animation-sequence-all-0-80 :nth-child(6),.fx-animation-sequence-all-0-80 :nth-child(6) *{animation-delay:.4s}.fx-animation-sequence-all-0-80 :nth-child(7),.fx-animation-sequence-all-0-80 :nth-child(7) *{animation-delay:.48s}.fx-animation-sequence-all-0-80 :nth-child(8),.fx-animation-sequence-all-0-80 :nth-child(8) *{animation-delay:.56s}.fx-animation-sequence-all-0-80 :nth-child(9),.fx-animation-sequence-all-0-80 :nth-child(9) *{animation-delay:.64s}.fx-animation-sequence-all-0-80 :nth-child(10),.fx-animation-sequence-all-0-80 :nth-child(10) *{animation-delay:.72s}.fx-animation-sequence-all-0-80 :nth-child(11),.fx-animation-sequence-all-0-80 :nth-child(11) *{animation-delay:.8s}.fx-animation-sequence-all-0-80 :nth-child(12),.fx-animation-sequence-all-0-80 :nth-child(12) *{animation-delay:.88s}.fx-animation-sequence-all-0-80 :nth-child(13),.fx-animation-sequence-all-0-80 :nth-child(13) *{animation-delay:.96s}.fx-animation-sequence-all-0-80 :nth-child(14),.fx-animation-sequence-all-0-80 :nth-child(14) *{animation-delay:1.04s}.swiper-lazy{opacity:0}.swiper-lazy.swiper-lazy-loaded{animation:fx-animation-showUpOpacity .4s forwards}body{font-family:Inter,Segoe UI,Arial,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol;color:#636e72;-webkit-font-smoothing:antialiased}html{font-size:14px;-ms-text-size-adjust:100%;-webkit-text-size-adjust:100%;scroll-behavior:smooth}@media (min-width:480px){html{font-size:14px}}@media (min-width:1024px){html{font-size:16px}}@media (min-width:1200px){html{font-size:16px}}@media (min-width:1900px){html{font-size:16px}}html[lang=ar]{direction:rtl;text-align:right}html[lang=ar] .offset-1{margin-right:8.3333333333%;margin-left:0}html[lang=ar] .offset-2{margin-right:16.6666666667%;margin-left:0}html[lang=ar] .offset-3{margin-right:25%;margin-left:0}html[lang=ar] .offset-4{margin-right:33.3333333333%;margin-left:0}html[lang=ar] .offset-5{margin-right:41.6666666667%;margin-left:0}html[lang=ar] .offset-6{margin-right:50%;margin-left:0}html[lang=ar] .offset-7{margin-right:58.3333333333%;margin-left:0}html[lang=ar] .offset-8{margin-right:66.6666666667%;margin-left:0}html[lang=ar] .offset-9{margin-right:75%;margin-left:0}html[lang=ar] .offset-10{margin-right:83.3333333333%;margin-left:0}html[lang=ar] .offset-11{margin-right:91.6666666667%;margin-left:0}@media (min-width:480px){html[lang=ar] .offset-sm-0{margin-right:0;margin-left:0}html[lang=ar] .offset-sm-1{margin-right:8.3333333333%;margin-left:0}html[lang=ar] .offset-sm-2{margin-right:16.6666666667%;margin-left:0}html[lang=ar] .offset-sm-3{margin-right:25%;margin-left:0}html[lang=ar] .offset-sm-4{margin-right:33.3333333333%;margin-left:0}html[lang=ar] .offset-sm-5{margin-right:41.6666666667%;margin-left:0}html[lang=ar] .offset-sm-6{margin-right:50%;margin-left:0}html[lang=ar] .offset-sm-7{margin-right:58.3333333333%;margin-left:0}html[lang=ar] .offset-sm-8{margin-right:66.6666666667%;margin-left:0}html[lang=ar] .offset-sm-9{margin-right:75%;margin-left:0}html[lang=ar] .offset-sm-10{margin-right:83.3333333333%;margin-left:0}html[lang=ar] .offset-sm-11{margin-right:91.6666666667%;margin-left:0}}@media (min-width:1024px){html[lang=ar] .offset-md-0{margin-right:0;margin-left:0}html[lang=ar] .offset-md-1{margin-right:8.3333333333%;margin-left:0}html[lang=ar] .offset-md-2{margin-right:16.6666666667%;margin-left:0}html[lang=ar] .offset-md-3{margin-right:25%;margin-left:0}html[lang=ar] .offset-md-4{margin-right:33.3333333333%;margin-left:0}html[lang=ar] .offset-md-5{margin-right:41.6666666667%;margin-left:0}html[lang=ar] .offset-md-6{margin-right:50%;margin-left:0}html[lang=ar] .offset-md-7{margin-right:58.3333333333%;margin-left:0}html[lang=ar] .offset-md-8{margin-right:66.6666666667%;margin-left:0}html[lang=ar] .offset-md-9{margin-right:75%;margin-left:0}html[lang=ar] .offset-md-10{margin-right:83.3333333333%;margin-left:0}html[lang=ar] .offset-md-11{margin-right:91.6666666667%;margin-left:0}}@media (min-width:1200px){html[lang=ar] .offset-lg-0{margin-right:0;margin-left:0}html[lang=ar] .offset-lg-1{margin-right:8.3333333333%;margin-left:0}html[lang=ar] .offset-lg-2{margin-right:16.6666666667%;margin-left:0}html[lang=ar] .offset-lg-3{margin-right:25%;margin-left:0}html[lang=ar] .offset-lg-4{margin-right:33.3333333333%;margin-left:0}html[lang=ar] .offset-lg-5{margin-right:41.6666666667%;margin-left:0}html[lang=ar] .offset-lg-6{margin-right:50%;margin-left:0}html[lang=ar] .offset-lg-7{margin-right:58.3333333333%;margin-left:0}html[lang=ar] .offset-lg-8{margin-right:66.6666666667%;margin-left:0}html[lang=ar] .offset-lg-9{margin-right:75%;margin-left:0}html[lang=ar] .offset-lg-10{margin-right:83.3333333333%;margin-left:0}html[lang=ar] .offset-lg-11{margin-right:91.6666666667%;margin-left:0}}@media (min-width:1900px){html[lang=ar] .offset-xl-0{margin-right:0;margin-left:0}html[lang=ar] .offset-xl-1{margin-right:8.3333333333%;margin-left:0}html[lang=ar] .offset-xl-2{margin-right:16.6666666667%;margin-left:0}html[lang=ar] .offset-xl-3{margin-right:25%;margin-left:0}html[lang=ar] .offset-xl-4{margin-right:33.3333333333%;margin-left:0}html[lang=ar] .offset-xl-5{margin-right:41.6666666667%;margin-left:0}html[lang=ar] .offset-xl-6{margin-right:50%;margin-left:0}html[lang=ar] .offset-xl-7{margin-right:58.3333333333%;margin-left:0}html[lang=ar] .offset-xl-8{margin-right:66.6666666667%;margin-left:0}html[lang=ar] .offset-xl-9{margin-right:75%;margin-left:0}html[lang=ar] .offset-xl-10{margin-right:83.3333333333%;margin-left:0}html[lang=ar] .offset-xl-11{margin-right:91.6666666667%;margin-left:0}}html[lang=ar] body{text-align:right}@media (min-width:1024px){html[lang=ar] .text-md-left{text-align:right!important}}html[lang=vi] *{font-family:Inter,Segoe UI,Arial,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol!important}html[lang=vi] [class*=" fx-symbol-"],html[lang=vi] [class^=fx-symbol-]{font-family:fx-symbols-web-2-0!important}.text-size-h1,.text-size-h2,.text-size-h3,.text-size-h4,.text-size-h5,.text-size-h6,h1,h2,h3,h4,h5,h6{font-weight:500;font-family:Futura,Inter,Segoe UI,Arial,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol;margin-bottom:.6em;color:#2d3436}@media (min-width:1024px){.text-size-h1,.text-size-h2,.text-size-h3,.text-size-h4,.text-size-h5,.text-size-h6,h1,h2,h3,h4,h5,h6{margin-bottom:.6em}}.text-size-h1 small,.text-size-h2 small,.text-size-h3 small,.text-size-h4 small,.text-size-h5 small,.text-size-h6 small,h1 small,h2 small,h3 small,h4 small,h5 small,h6 small{display:block;color:#2d3436;font-size:70%}.fx-theme--dark .text-size-h1 small,.fx-theme--dark .text-size-h2 small,.fx-theme--dark .text-size-h3 small,.fx-theme--dark .text-size-h4 small,.fx-theme--dark .text-size-h5 small,.fx-theme--dark .text-size-h6 small,.fx-theme--dark h1 small,.fx-theme--dark h2 small,.fx-theme--dark h3 small,.fx-theme--dark h4 small,.fx-theme--dark h5 small,.fx-theme--dark h6 small{color:#fff}.text-size-h1,h1{font-size:36px;line-height:1.3}@media (min-width:1024px){.text-size-h1,h1{font-size:46px}}.text-size-h2,h2{font-size:1.75rem;line-height:1.2142857143}@media (min-width:480px){.text-size-h2,h2{font-size:2.2857142857rem;line-height:1.0625}}@media (min-width:1024px){.text-size-h2,h2{font-size:2.25rem;line-height:1.2777777778}}.text-size-h3,h3{font-size:1.625rem;line-height:1.0769230769}@media (min-width:480px){.text-size-h3,h3{font-size:2rem;line-height:1.1071428571}}@media (min-width:1024px){.text-size-h3,h3{font-size:2rem;line-height:1.125}}.text-size-h4,h4{font-size:1.375rem;line-height:1.0909090909}@media (min-width:480px){.text-size-h4,h4{font-size:1.7142857143rem;line-height:1.1666666667}}@media (min-width:1024px){.text-size-h4,h4{font-size:1.625rem;line-height:1.3076923077}}.text-size-h5,h5{font-size:1.25rem;line-height:1.2}@media (min-width:480px){.text-size-h5,h5{font-size:1.5714285714rem;line-height:1.1818181818}}@media (min-width:1024px){.text-size-h5,h5{font-size:1.5rem;line-height:1.1666666667}}.text-size-h6,h6{font-size:1.125rem;line-height:1.3333333333}@media (min-width:480px){.text-size-h6,h6{font-size:1.2857142857rem;line-height:1.3333333333}}@media (min-width:1024px){.text-size-h6,h6{font-size:1.125rem;line-height:1.4444444444}}.text-decoration{text-decoration:underline}::selection{background:#009cfc;color:#fff}.display-1{font-weight:400;line-height:1.2;margin-bottom:1.75rem;color:#2d3436;font-size:1.2857rem}@media (min-width:1024px){.display-1{font-size:1.25rem}}.display-6{font-size:1rem;font-weight:400;line-height:20px}@media (min-width:1024px){.display-6{font-size:.875rem}}.fx-font-size-base-xs{font-size:14px}.list-bullet li:before,.list-checkmark li:before{content:"";position:absolute;top:-3px;left:0;width:11px;height:17px;border-color:#b68756;border-style:solid;border-width:0 2px 2px 0;margin:.1rem 1.5rem .1rem .2rem;transform:rotate(46deg)}.list-bullet{margin:0 0 3rem;max-width:25.5rem;flex:1 1 auto}@media (min-width:1200px){.list-bullet{padding-top:3rem}}.list-bullet li{padding:0 0 1rem 2rem}.list-bullet li,.list-checkmark li{position:relative}.list-checkmark li:not(:last-child){padding:0 0 1rem 3rem}.list-checkmark li:last-child{padding:0 0 0 3rem}.list-checkmark li.not-accepted:before{height:2px;top:7px;left:-3px;width:14px;border-color:#ed1c24;transform:rotate(0)}strong{font-weight:500}.list-bullet [lang=ar] li:before,.list-checkmark [lang=ar] li:before,[lang=ar] .list-bullet li:before,[lang=ar] .list-checkmark li:before{left:auto!important;right:0!important;margin:.1rem .5rem .1rem 1.5rem!important}[lang=ar] .list-bullet li{padding:0 2rem 1rem 0!important}@media (min-width:1024px){[lang=ar] .list-bullet li{padding-right:3rem!important;padding-left:0!important}}[lang=ar] .list-checkmark li:not(:last-child){padding:0 2rem 1rem 0!important}[lang=ar] .list-checkmark li:last-child{padding:0 2rem 0 0!important}[lang=ar] .list-checkmark li.not-accepted:before{right:-3px!important;left:auto!important}@media (min-width:1024px){body[lang=uk] .direct-register-button-block{margin-bottom:-20px}}@media (max-width:479.98px){body[lang=de] .fx-section--video h1,body[lang=es] .fx-section--video h1,body[lang=id] .fx-section--video h1,body[lang=ms] .fx-section--video h1{font-size:30px}body[lang=ms] h2{font-size:23px}body[lang=pt] .fx-section--video h1{font-size:28px}}body[lang=ar]{direction:rtl;text-align:right}body[lang=ar] .offset-1{margin-right:8.3333333333%;margin-left:0}body[lang=ar] .offset-2{margin-right:16.6666666667%;margin-left:0}body[lang=ar] .offset-3{margin-right:25%;margin-left:0}body[lang=ar] .offset-4{margin-right:33.3333333333%;margin-left:0}body[lang=ar] .offset-5{margin-right:41.6666666667%;margin-left:0}body[lang=ar] .offset-6{margin-right:50%;margin-left:0}body[lang=ar] .offset-7{margin-right:58.3333333333%;margin-left:0}body[lang=ar] .offset-8{margin-right:66.6666666667%;margin-left:0}body[lang=ar] .offset-9{margin-right:75%;margin-left:0}body[lang=ar] .offset-10{margin-right:83.3333333333%;margin-left:0}body[lang=ar] .offset-11{margin-right:91.6666666667%;margin-left:0}@media (min-width:480px){body[lang=ar] .offset-sm-0{margin-right:0;margin-left:0}body[lang=ar] .offset-sm-1{margin-right:8.3333333333%;margin-left:0}body[lang=ar] .offset-sm-2{margin-right:16.6666666667%;margin-left:0}body[lang=ar] .offset-sm-3{margin-right:25%;margin-left:0}body[lang=ar] .offset-sm-4{margin-right:33.3333333333%;margin-left:0}body[lang=ar] .offset-sm-5{margin-right:41.6666666667%;margin-left:0}body[lang=ar] .offset-sm-6{margin-right:50%;margin-left:0}body[lang=ar] .offset-sm-7{margin-right:58.3333333333%;margin-left:0}body[lang=ar] .offset-sm-8{margin-right:66.6666666667%;margin-left:0}body[lang=ar] .offset-sm-9{margin-right:75%;margin-left:0}body[lang=ar] .offset-sm-10{margin-right:83.3333333333%;margin-left:0}body[lang=ar] .offset-sm-11{margin-right:91.6666666667%;margin-left:0}}@media (min-width:1024px){body[lang=ar] .offset-md-0{margin-right:0;margin-left:0}body[lang=ar] .offset-md-1{margin-right:8.3333333333%;margin-left:0}body[lang=ar] .offset-md-2{margin-right:16.6666666667%;margin-left:0}body[lang=ar] .offset-md-3{margin-right:25%;margin-left:0}body[lang=ar] .offset-md-4{margin-right:33.3333333333%;margin-left:0}body[lang=ar] .offset-md-5{margin-right:41.6666666667%;margin-left:0}body[lang=ar] .offset-md-6{margin-right:50%;margin-left:0}body[lang=ar] .offset-md-7{margin-right:58.3333333333%;margin-left:0}body[lang=ar] .offset-md-8{margin-right:66.6666666667%;margin-left:0}body[lang=ar] .offset-md-9{margin-right:75%;margin-left:0}body[lang=ar] .offset-md-10{margin-right:83.3333333333%;margin-left:0}body[lang=ar] .offset-md-11{margin-right:91.6666666667%;margin-left:0}}@media (min-width:1200px){body[lang=ar] .offset-lg-0{margin-right:0;margin-left:0}body[lang=ar] .offset-lg-1{margin-right:8.3333333333%;margin-left:0}body[lang=ar] .offset-lg-2{margin-right:16.6666666667%;margin-left:0}body[lang=ar] .offset-lg-3{margin-right:25%;margin-left:0}body[lang=ar] .offset-lg-4{margin-right:33.3333333333%;margin-left:0}body[lang=ar] .offset-lg-5{margin-right:41.6666666667%;margin-left:0}body[lang=ar] .offset-lg-6{margin-right:50%;margin-left:0}body[lang=ar] .offset-lg-7{margin-right:58.3333333333%;margin-left:0}body[lang=ar] .offset-lg-8{margin-right:66.6666666667%;margin-left:0}body[lang=ar] .offset-lg-9{margin-right:75%;margin-left:0}body[lang=ar] .offset-lg-10{margin-right:83.3333333333%;margin-left:0}body[lang=ar] .offset-lg-11{margin-right:91.6666666667%;margin-left:0}}@media (min-width:1900px){body[lang=ar] .offset-xl-0{margin-right:0;margin-left:0}body[lang=ar] .offset-xl-1{margin-right:8.3333333333%;margin-left:0}body[lang=ar] .offset-xl-2{margin-right:16.6666666667%;margin-left:0}body[lang=ar] .offset-xl-3{margin-right:25%;margin-left:0}body[lang=ar] .offset-xl-4{margin-right:33.3333333333%;margin-left:0}body[lang=ar] .offset-xl-5{margin-right:41.6666666667%;margin-left:0}body[lang=ar] .offset-xl-6{margin-right:50%;margin-left:0}body[lang=ar] .offset-xl-7{margin-right:58.3333333333%;margin-left:0}body[lang=ar] .offset-xl-8{margin-right:66.6666666667%;margin-left:0}body[lang=ar] .offset-xl-9{margin-right:75%;margin-left:0}body[lang=ar] .offset-xl-10{margin-right:83.3333333333%;margin-left:0}body[lang=ar] .offset-xl-11{margin-right:91.6666666667%;margin-left:0}}@media (min-width:480px){body[lang=ar] .header .logo-wrapper{margin-right:auto;margin-left:40px}}@media (min-width:1024px){body[lang=ar] .header .header__watford-caption{margin-right:20px;margin-left:auto}}body[lang=ar] .fx-section--testimonials .swiper-controls-wrapper{direction:ltr}body[lang=ar] .fx-section--features-tabs .tabset__nav-item>i{margin-right:0;margin-left:5px}body[lang=ar] .fx-section--features-tabs .tabset__img-holder{margin-left:auto;margin-right:-20px}body[lang=ar] .fx-section--features-tabs .tabset__img-holder>img{transform:rotateY(180deg)}@media (min-width:480px){body[lang=ar] .fx-section--promotion-details .promo__panel{text-align:right!important}}body[lang=ar] .fx-section--promotion-details .promo__description:after,body[lang=ar] .fx-section--trading-platforms-panels .platform__controls{left:0;right:auto!important}body[lang=ar] .fx-section--trading-platforms-panels .platform__controls>a:first-child{order:1}body[lang=ar] .fx-section--focus-on-clients .focus-block__value:after{right:auto!important;left:0;transform:translateY(-50%) translateX(calc(50% - 20px))!important}body[lang=ar] .award__caption{direction:ltr}@media screen and (min-width:700px){body[lang=ar] footer .pre-footer__item--social-icons>a:first-child{margin-left:24px!important}}body[lang=ar] footer .pre-footer__item--social-icons>a:last-child{margin-left:0!important}body[lang=ar] footer .footer__regulator-item>img{margin-right:0;margin-left:15px}.custom-control{position:relative;display:block;min-height:1.5rem;padding-left:40px}.custom-control-inline{display:inline-flex;margin-right:10px}.custom-control-input{position:absolute;z-index:-1;opacity:0}.custom-control-input:checked~.custom-control-label:before{color:#b68756;background-color:#fff}.custom-control-input:focus~.custom-control-label:before{box-shadow:0 0 0 1px #b2bec3}.custom-control-input:active~.custom-control-label:before{color:#fff;background-color:#fff}.custom-control-input:disabled~.custom-control-label{color:#6c757d}.custom-control-input:disabled~.custom-control-label:before{background-color:#e9ecef}.custom-control-label{margin-bottom:0}.custom-control-label:before{pointer-events:none;-webkit-user-select:none;user-select:none;background-color:#fff}.custom-control-label:after,.custom-control-label:before{position:absolute;top:-11.25px;left:0;display:block;width:24px;height:24px;content:""}.custom-control-label:after{background-repeat:no-repeat;background-position:50%;background-size:50% 50%}.custom-checkbox .custom-control-label:before{border-radius:.25rem}.custom-checkbox .custom-control-input:checked~.custom-control-label:before{background-color:#fff}.custom-checkbox .custom-control-input:checked~.custom-control-label:after{background-image:url("data:image/svg+xml;charset=utf8,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' viewBox=\'0 0 8 8\'%3E%3Cpath fill=\'%23B68756\' d=\'M6.564.75l-3.59 3.612-1.538-1.55L0 4.26 2.974 7.25 8 2.193z\'/%3E%3C/svg%3E")}.custom-checkbox .custom-control-input:indeterminate~.custom-control-label:before{background-color:#007bff}.custom-checkbox .custom-control-input:indeterminate~.custom-control-label:after{background-image:url("data:image/svg+xml;charset=utf8,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' viewBox=\'0 0 4 4\'%3E%3Cpath stroke=\'%23B68756\' d=\'M0 2h4\'/%3E%3C/svg%3E")}.custom-checkbox .custom-control-input:disabled:checked~.custom-control-label:before,.custom-checkbox .custom-control-input:disabled:indeterminate~.custom-control-label:before{background-color:#007bff80}.custom-radio .custom-control-label:before{border-radius:50%}.custom-radio .custom-control-input:checked~.custom-control-label:before{background-color:#fff}.custom-radio .custom-control-input:checked~.custom-control-label:after{background-image:url("data:image/svg+xml;charset=utf8,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' viewBox=\'-4 -4 8 8\'%3E%3Ccircle r=\'3\' fill=\'%23B68756\'/%3E%3C/svg%3E")}.custom-radio .custom-control-input:disabled:checked~.custom-control-label:before{background-color:#007bff80}.custom-select{display:inline-block;width:100%;height:calc(2.25rem + 2px);padding:.375rem 1.75rem .375rem .75rem;line-height:1.5;color:#495057;vertical-align:middle;background:#fff url("data:image/svg+xml;charset=utf8,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' viewBox=\'0 0 4 5\'%3E%3Cpath fill=\'%23343a40\' d=\'M2 0L0 2h4zm0 5L0 3h4z\'/%3E%3C/svg%3E") no-repeat right .75rem center;background-size:8px 10px;border:1px solid #ced4da;border-radius:.25rem;-webkit-appearance:none;appearance:none}.custom-select:focus{border-color:#80bdff;outline:0;box-shadow:inset 0 1px 2px rgba(0,0,0,.075),0 0 5px #80bdff80}.custom-select:focus::-ms-value{color:#495057;background-color:#fff}.custom-select[multiple],.custom-select[size]:not([size="1"]){height:auto;padding-right:.75rem;background-image:none}.custom-select:disabled{color:#6c757d;background-color:#e9ecef}.custom-select::-ms-expand{opacity:0}.custom-select-sm{height:calc(1.8125rem + 2px);font-size:75%}.custom-select-lg,.custom-select-sm{padding-top:.375rem;padding-bottom:.375rem}.custom-select-lg{height:calc(2.875rem + 2px);font-size:125%}.custom-file{display:inline-block;margin-bottom:0}.custom-file,.custom-file-input{position:relative;width:100%;height:calc(2.25rem + 2px)}.custom-file-input{z-index:2;margin:0;opacity:0}.custom-file-input:focus~.custom-file-control{border-color:#80bdff;box-shadow:0 0 0 .2rem #007bff40}.custom-file-input:focus~.custom-file-control:before{border-color:#80bdff}.custom-file-input:lang(en)~.custom-file-label:after{content:"Browse"}.custom-file-label{left:0;z-index:1;height:calc(2.25rem + 2px);background-color:#fff;border:1px solid #ced4da;border-radius:.25rem}.custom-file-label,.custom-file-label:after{position:absolute;top:0;right:0;padding:.375rem .75rem;line-height:1.5;color:#495057}.custom-file-label:after{bottom:0;z-index:3;display:block;height:calc(calc(2.25rem + 2px) - 1px * 2);content:"Browse";background-color:#e9ecef;border-left:1px solid #ced4da;border-radius:0 .25rem .25rem 0}.grecaptcha-badge{display:none}form{position:relative}form .form-group{text-align:left}form .form-group:last-child .form-control{margin-bottom:0}form .form-group.underline-only{position:relative;padding-top:20px;padding-bottom:30px}form .form-group.underline-only.fx-dropdown__wrapper{z-index:3}form .form-group.underline-only .fx-dropdown__container{bottom:-3px;z-index:1}form .form-group.underline-only .fx-dropdown__toggle{height:50px;padding-bottom:0}form .form-group.underline-only .fx-dropdown__title{color:#2d3436;font-weight:400;font-size:16px}form .form-group.underline-only .fx-dropdown__toggle,form .form-group.underline-only input,form .form-group.underline-only textarea{border:none;width:100%;background:none;box-shadow:none;margin:0;color:#2d3436;font-size:16px;font-weight:400;padding-left:0;padding-right:0}form .form-group.underline-only .fx-dropdown__toggle.ng-touched+label,form .form-group.underline-only input.ng-touched+label,form .form-group.underline-only textarea.ng-touched+label{transform:none}form .form-group.underline-only .fx-dropdown__toggle+label,form .form-group.underline-only input+label,form .form-group.underline-only textarea+label{position:absolute;left:0;top:0;font-weight:400;color:#c8c8c8;transition:color .4s,top .4s,transform .4s;pointer-events:none}form .form-group.underline-only .fx-dropdown__toggle+label.translatable,form .form-group.underline-only input+label.translatable,form .form-group.underline-only textarea+label.translatable{transform:translateY(35px)}form .form-group.underline-only .fx-dropdown__toggle+label+.bar,form .form-group.underline-only input+label+.bar,form .form-group.underline-only textarea+label+.bar{width:100%;bottom:0;display:block;height:1px;background-color:#c8c8c8;transition:height .4s;display:flex;justify-content:center}form .form-group.underline-only .fx-dropdown__toggle+label+.bar:after,form .form-group.underline-only input+label+.bar:after,form .form-group.underline-only textarea+label+.bar:after{width:0;bottom:0;display:block;content:"";height:3px;border-radius:1.5px;background-color:#303135;transition:width .4s}form .form-group.underline-only .fx-dropdown__toggle.dropdown-visible,form .form-group.underline-only .fx-dropdown__toggle:focus,form .form-group.underline-only input.dropdown-visible,form .form-group.underline-only input:focus,form .form-group.underline-only textarea.dropdown-visible,form .form-group.underline-only textarea:focus{border:none;box-shadow:none}form .form-group.underline-only .fx-dropdown__toggle.dropdown-visible+label,form .form-group.underline-only .fx-dropdown__toggle:focus+label,form .form-group.underline-only input.dropdown-visible+label,form .form-group.underline-only input:focus+label,form .form-group.underline-only textarea.dropdown-visible+label,form .form-group.underline-only textarea:focus+label{top:0;transform:none;color:#303135}form .form-group.underline-only .fx-dropdown__toggle.dropdown-visible+label+.bar:after,form .form-group.underline-only .fx-dropdown__toggle:focus+label+.bar:after,form .form-group.underline-only input.dropdown-visible+label+.bar:after,form .form-group.underline-only input:focus+label+.bar:after,form .form-group.underline-only textarea.dropdown-visible+label+.bar:after,form .form-group.underline-only textarea:focus+label+.bar:after{width:100%}form .form-group.underline-only .fx-dropdown__toggle.success+label,form .form-group.underline-only .fx-dropdown__toggle.success.dropdown-visible+label,form .form-group.underline-only .fx-dropdown__toggle.success:focus+label,form .form-group.underline-only input.success+label,form .form-group.underline-only input.success.dropdown-visible+label,form .form-group.underline-only input.success:focus+label,form .form-group.underline-only textarea.success+label,form .form-group.underline-only textarea.success.dropdown-visible+label,form .form-group.underline-only textarea.success:focus+label{color:#b68756}form .form-group.underline-only .fx-dropdown__toggle.success+label+.bar,form .form-group.underline-only .fx-dropdown__toggle.success+label+.bar:after,form .form-group.underline-only .fx-dropdown__toggle.success.dropdown-visible+label+.bar,form .form-group.underline-only .fx-dropdown__toggle.success.dropdown-visible+label+.bar:after,form .form-group.underline-only .fx-dropdown__toggle.success:focus+label+.bar,form .form-group.underline-only .fx-dropdown__toggle.success:focus+label+.bar:after,form .form-group.underline-only input.success+label+.bar,form .form-group.underline-only input.success+label+.bar:after,form .form-group.underline-only input.success.dropdown-visible+label+.bar,form .form-group.underline-only input.success.dropdown-visible+label+.bar:after,form .form-group.underline-only input.success:focus+label+.bar,form .form-group.underline-only input.success:focus+label+.bar:after,form .form-group.underline-only textarea.success+label+.bar,form .form-group.underline-only textarea.success+label+.bar:after,form .form-group.underline-only textarea.success.dropdown-visible+label+.bar,form .form-group.underline-only textarea.success.dropdown-visible+label+.bar:after,form .form-group.underline-only textarea.success:focus+label+.bar,form .form-group.underline-only textarea.success:focus+label+.bar:after{background-color:#b68756}form .form-group.underline-only .fx-dropdown__toggle.danger+label,form .form-group.underline-only .fx-dropdown__toggle.danger.dropdown-visible+label,form .form-group.underline-only .fx-dropdown__toggle.danger:focus+label,form .form-group.underline-only input.danger+label,form .form-group.underline-only input.danger.dropdown-visible+label,form .form-group.underline-only input.danger:focus+label,form .form-group.underline-only textarea.danger+label,form .form-group.underline-only textarea.danger.dropdown-visible+label,form .form-group.underline-only textarea.danger:focus+label{color:#ed1c24}form .form-group.underline-only .fx-dropdown__toggle.danger+label+.bar,form .form-group.underline-only .fx-dropdown__toggle.danger+label+.bar:after,form .form-group.underline-only .fx-dropdown__toggle.danger.dropdown-visible+label+.bar,form .form-group.underline-only .fx-dropdown__toggle.danger.dropdown-visible+label+.bar:after,form .form-group.underline-only .fx-dropdown__toggle.danger:focus+label+.bar,form .form-group.underline-only .fx-dropdown__toggle.danger:focus+label+.bar:after,form .form-group.underline-only input.danger+label+.bar,form .form-group.underline-only input.danger+label+.bar:after,form .form-group.underline-only input.danger.dropdown-visible+label+.bar,form .form-group.underline-only input.danger.dropdown-visible+label+.bar:after,form .form-group.underline-only input.danger:focus+label+.bar,form .form-group.underline-only input.danger:focus+label+.bar:after,form .form-group.underline-only textarea.danger+label+.bar,form .form-group.underline-only textarea.danger+label+.bar:after,form .form-group.underline-only textarea.danger.dropdown-visible+label+.bar,form .form-group.underline-only textarea.danger.dropdown-visible+label+.bar:after,form .form-group.underline-only textarea.danger:focus+label+.bar,form .form-group.underline-only textarea.danger:focus+label+.bar:after{background-color:#ed1c24}form .form-group.underline-only .fx-dropdown__toggle_disabled,form .form-group.underline-only input_disabled,form .form-group.underline-only textarea_disabled{cursor:default;color:#6c757d}form .form-group.underline-only .fx-dropdown__toggle_disabled:after,form .form-group.underline-only input_disabled:after,form .form-group.underline-only textarea_disabled:after{display:none}form .error-message{color:#007bff;margin-top:10px}form label{display:inline-block;vertical-align:top;font-size:16px;font-weight:500;line-height:1.25;text-align:left;color:#2d3436}@media (min-width:480px){form label{font-size:.75rem}}@media (min-width:1024px){form label{font-size:1rem}}form input[type=email],form input[type=tel],form input[type=text],form textarea{height:50px;border-radius:3px;background-color:#fff;border:1px solid #b2bec3;color:#2d3436;display:block;width:100%;margin-bottom:20px;box-sizing:border-box;font-size:15px;font-weight:500;padding:10px 12px;transition:box-shadow .4s,border-color .4s}@media (min-width:1024px){form input[type=email],form input[type=tel],form input[type=text],form textarea{padding:10px 20px}}form input[type=email]::-webkit-input-placeholder,form input[type=tel]::-webkit-input-placeholder,form input[type=text]::-webkit-input-placeholder,form textarea::-webkit-input-placeholder{color:#b2bec3;font-size:14px;font-weight:400}form input[type=email]:-moz-placeholder,form input[type=email]::-moz-placeholder,form input[type=tel]:-moz-placeholder,form input[type=tel]::-moz-placeholder,form input[type=text]:-moz-placeholder,form input[type=text]::-moz-placeholder,form textarea:-moz-placeholder,form textarea::-moz-placeholder{color:#b2bec3;font-size:14px;font-weight:400}form input[type=email]:-ms-input-placeholder,form input[type=tel]:-ms-input-placeholder,form input[type=text]:-ms-input-placeholder,form textarea:-ms-input-placeholder{color:#b2bec3;font-size:14px;font-weight:400}form input[type=email].error,form input[type=email].ng-touched.ng-invalid,form input[type=tel].error,form input[type=tel].ng-touched.ng-invalid,form input[type=text].error,form input[type=text].ng-touched.ng-invalid,form textarea.error,form textarea.ng-touched.ng-invalid{box-shadow:0 0 0 1px #ed1c24;border-color:#ed1c24}form input[type=email]:focus,form input[type=tel]:focus,form input[type=text]:focus,form textarea:focus{box-shadow:0 0 0 1px #303135;border-color:#303135;outline:none}form input[type=email]:disabled,form input[type=tel]:disabled,form input[type=text]:disabled,form textarea:disabled{background-color:#ebebe4;cursor:not-allowed}form textarea{resize:none;height:100px!important}.checkbox{margin-bottom:20px}.custom-checkbox{padding:0}.custom-checkbox .custom-control-label{height:24px;display:flex;align-items:flex-start;padding-top:2px;padding-left:40px;font-weight:400}.custom-checkbox .custom-control-label:hover{cursor:pointer}.custom-checkbox .custom-control-label:after,.custom-checkbox .custom-control-label:before{top:0}.custom-checkbox .custom-control-input~.custom-control-label:before{box-shadow:0 0 0 1px #b2bec3}.custom-checkbox .custom-control-input~.custom-control-label:hover:before{box-shadow:0 0 0 1px #929daa}.custom-checkbox .custom-control-input:checked~.custom-control-label:before{background:#b68756}.custom-checkbox .custom-control-input:checked~.custom-control-label:after{content:"";position:absolute;background:none;top:0;left:0;width:9px;height:17px;border-color:#fff;border-style:solid;border-width:0 3px 3px 0;margin:.1rem 1.5rem .1rem .5rem;transform:rotate(45deg)}.custom-checkbox-secondary{margin:0}@media (min-width:480px){.custom-checkbox-secondary{margin:0 0 0 40px}}.custom-checkbox-secondary .custom-control-label{position:relative;font-size:14px;line-height:20px;height:20px;padding-top:0;padding-left:28px;color:#636e72;white-space:nowrap}.custom-checkbox-secondary .custom-control-input~.custom-control-label:before{width:18px;height:18px;background:#fff;border-radius:2px;box-shadow:0 0 0 1px #3031351a}.custom-checkbox-secondary .custom-control-input~.custom-control-label:after{width:18px;height:18px}.custom-checkbox-secondary .custom-control-input~.custom-control-label:hover:before{box-shadow:0 0 0 1px #2d3436}.custom-checkbox-secondary .custom-control-input:checked~.custom-control-label:before{background:#fff}.custom-checkbox-secondary .custom-control-input:checked~.custom-control-label:after{content:"";position:absolute;background:none;top:-2px;left:-2px;width:8px;height:14px;border-color:#2d3436;border-style:solid;border-width:0 1px 1px 0;margin:.1rem 1.5rem .1rem .5rem;transform:rotate(45deg)}.fx-dropdown__toggle{min-width:180px;min-height:42px;border-radius:3px;display:inline-flex;justify-content:space-between;align-items:center;color:#2d3436;background-color:#f8f8f8;font-size:16px;padding:10px;margin-left:20px;cursor:pointer;-webkit-user-select:none;user-select:none;position:relative}.fx-dropdown__toggle.dropdown-visible:after{transform:rotate(180deg)}.fx-dropdown__toggle:after{display:block;content:"";width:0;height:0;transition:transform .4s;margin-left:10px;border-color:#636e72 #0000 #0000;border-style:solid;border-width:4px 3px 0}.fx-dropdown__container{position:absolute;pointer-events:none;opacity:0;transform:translateY(calc(100% - 10px));border-radius:3px;transition:transform .2s ease-out,opacity .2s ease-out;background:#fff;color:#2d3436;font-size:16px;cursor:pointer;-webkit-user-select:none;user-select:none;z-index:1;bottom:0;left:0;width:100%;box-shadow:0 8px 32px 0 #4c536b1c}.fx-dropdown__container.show{transform:translateY(100%);opacity:1;pointer-events:auto}.fx-dropdown--scrollable .fx-dropdown__options{max-height:270px;overflow-y:scroll}.fx-dropdown__options>div{padding:10px;transition:background-color .2s}.fx-dropdown__options>div:hover{background-color:#dfe6e94d}.fx-dropdown__title{font-size:14px;text-align:left;color:#b2bec3}.fx-dropdown__title span{color:#2d3436}.fx-dropdown__search{position:relative;padding:10px}.fx-dropdown__search-icon{font-size:15px;color:#636e72;position:absolute;left:16px;top:50%;transform:translateY(-50%)}.fx-dropdown__search input{width:100%;border-radius:2px;height:30px;padding-left:25px!important;background-color:#fff;border:1px solid #dfe6e9}[lang=ar] form .form-group{text-align:right!important}[lang=ar] form .form-group.underline-only .fx-dropdown__toggle+label,[lang=ar] form .form-group.underline-only input+label,[lang=ar] form .form-group.underline-only textarea+label{left:auto!important;right:0!important}[lang=ar] form .form-group.underline-only .fx-dropdown__toggle{margin:0!important}[lang=ar] form label{text-align:right!important}[lang=ar] .custom-checkbox{padding:0}[lang=ar] .custom-checkbox .custom-control-label{padding-right:40px!important;padding-left:0!important}[lang=ar] .custom-checkbox .custom-control-label:before{right:0!important;left:auto!important}[lang=ar] .custom-checkbox .custom-control-input:checked~.custom-control-label:after{left:auto!important;right:0!important;margin:.1rem .5rem .1rem 1.5rem!important}@media (min-width:480px){[lang=ar] .custom-checkbox-secondary{margin:0 40px 0 0!important}}[lang=ar] .custom-checkbox-secondary .custom-control-label{padding-right:28px!important;padding-left:0!important}[lang=ar] .custom-checkbox-secondary .custom-control-input:checked~.custom-control-label:after{left:auto!important;right:-2px!important;margin:.1rem .5rem .1rem 1.5rem!important}[lang=ar] .fx-dropdown__toggle{margin-right:20px!important;margin-left:0!important}[lang=ar] .fx-dropdown__toggle:after{margin-left:0!important;margin-right:10px!important}[lang=ar] .fx-dropdown__container{left:auto!important;right:0!important}[lang=ar] .fx-dropdown__title{text-align:right!important}[lang=ar] .fx-dropdown__search-icon{left:auto!important;right:16px!important}[lang=ar] .fx-dropdown__search input{padding-left:0!important;padding-right:25px!important}@media (min-width:1024px){.filter-form{padding:0 24px}.filter-form [class*=col-]{padding:0 10px}}.filter-form .form-field-md{line-height:1}.filter-form .dr-custom.mat-form-field .mat-form-field-wrapper{margin-bottom:0}.filter-form .dr-custom.mat-form-field.gray .mat-form-field-outline{background-color:#f9fafb}.filter-form ::ng-deep .form-field-md{line-height:1}.filter-form .btn-outline{height:45.7px}.filter-form .mat-date-range-input input[type=text]{height:auto;margin-top:0;margin-bottom:0;background-color:initial;border:0 #0000;padding:0}.filter-form .mat-date-range-input input[type=text].ng-touched.ng-invalid{box-shadow:none;border-color:#0000}.filter-form .mat-date-range-input input[type=text].ng-touched.ng-invalid::placeholder{color:#ed1c24;opacity:1}.filter-form .mat-date-range-input input[type=text].ng-touched.ng-invalid:-ms-input-placeholder{color:#ed1c24}.filter-form .mat-date-range-input input[type=text].ng-touched.ng-invalid::-ms-input-placeholder{color:#ed1c24}.filter-form .mat-date-range-input input[type=text]:focus{box-shadow:none}.filter-form .mat-date-range-input-mirror{position:absolute;top:0;left:0}.filter-form .mat-date-range-input-start-wrapper{max-width:80px}.filter-form .mat-date-range-input-start-wrapper input[type=text].mat-date-range-input-inner{position:relative}body.backdrop,body.no-scroll{overflow:hidden}body.backdrop:after{content:"";position:absolute;top:0;left:0;right:0;z-index:99999;bottom:0;background:#2d343633}.responsive-wrapper{border-top:1px solid #dfe6e999;border-bottom:1px solid #dfe6e999;padding-bottom:5px!important;min-height:6em!important}.responsive-wrapper [style*="margin:3.2em"]{margin-top:2.2em!important}.responsive-wrapper [style*="margin:2em"]{margin-top:1em!important}.responsive-wrapper [style*="margin:2.6em"]{margin-top:1.6em!important}.fx-modal-window{background:#fff;border-radius:6px;box-shadow:0 9px 31px 1px #76868f78;z-index:2;padding:30px;margin:30px auto;position:relative;overflow:auto;width:90%;max-height:500px;animation-duration:.3s}@media (min-width:480px){.fx-modal-window{padding:40px;margin:1.5rem;bottom:0}}@media (min-width:1024px){.fx-modal-window{padding:60px;width:940px;max-height:100%}}.fx-modal-window__wrapper{position:fixed;top:0;left:0;bottom:0;right:0;overflow:hidden;display:flex;align-items:center;justify-content:center;padding:30px 0;z-index:9999}.fx-modal-window *{z-index:2}.fx-modal-window a{color:#f41112}.fx-modal-window .close-icon{position:absolute;right:15px;top:15px;width:20px;height:20px}@media (min-width:480px){.fx-modal-window .close-icon{right:20px;top:20px}}.fx-modal-window__close{position:absolute;right:15px;top:15px;width:20px;height:20px;border-radius:50%;transform:rotate(-45deg);transition:opacity .4s,transform .4s;text-decoration:none}@media (min-width:480px){.fx-modal-window__close{right:20px;top:20px}}.fx-modal-window__close:hover{cursor:pointer;opacity:1;transform:rotate(45deg)}.fx-modal-window__close:after,.fx-modal-window__close:before{position:absolute;content:" ";height:100%;width:1px;left:50%;background-color:#3b3b3b}.fx-modal-window__close:before{transform:rotate(90deg)}.fx-modal-window+.fx-modal-backdrop{display:block;content:"";position:fixed;background:#fff;opacity:.8;width:100vw;height:100vh;left:0;top:0;bottom:0;right:0;z-index:1;transition:opacity .4s,transform .4s;transform:none}.fx-modal-window+.fx-modal-backdrop.dark{background:#282828}.fx-modal-window+.fx-modal-backdrop.hide{opacity:0}.fx-modal-window+.fx-modal-backdrop.hide.rotated-slideIn{transform:translateY(-9999px) rotate(-45deg) scale(6)}.fx-modal-window+.fx-modal-backdrop.rotated-slideIn{transform:translateY(0) rotate(-45deg) scale(6)}.fx-modal-window.fx-modal-window--no-padding{padding:0;border-radius:0;font-size:0;overflow:visible}.fx-modal-window.fx-modal-window--no-padding .fx-modal-window__close{height:20px;width:20px;top:-25px;right:0}@media (min-width:1024px){.fx-modal-window.fx-modal-window--no-padding .fx-modal-window__close{right:-25px}}.fx-modal-window.fx-modal-window--dark{box-shadow:none;box-shadow:0 9px 31px 1px #00000080;background-color:#000}.fx-modal-window.fx-modal-window--dark .fx-modal-window__close:after,.fx-modal-window.fx-modal-window--dark .fx-modal-window__close:before{background-color:#fff}.fx-modal-window.fx-modal-window--dark+.fx-modal-backdrop{background-color:#000;opacity:.5}.fx-modal-window.fx-modal-window--with-loader:before{width:80px;height:80px;background:#f41112;content:"";display:block;position:absolute;left:calc(50% - 40px);top:calc(50% - 40px);animation:rotate 5s infinite;transform:rotate(45deg)}.fx-modal-window.fx-modal-window--with-loader:after{display:block;width:80px;height:80px;content:"FxPro";display:flex;color:#fff;align-items:center;font-size:24px;font-family:Times New Roman;justify-content:center;position:absolute;left:calc(50% - 40px);top:calc(50% - 40px);animation:blink 1.65s infinite;animation-delay:.825s}@keyframes rotate{0%{transform:rotate(45deg)}33%{transform:rotate(135deg)}66%{transform:rotate(225deg)}to{transform:rotate(315deg)}}@keyframes blink{0%{opacity:0}50%{opacity:1}to{opacity:1}}.fx-modal-window.fx-modal-window--full-screen{position:fixed;padding:0;border-radius:0;bottom:0;overflow:hidden;box-shadow:none;width:100%;margin:0;max-height:100%}.fx-modal-window.fx-modal-sm{width:300px}@media (min-width:1024px){.fx-modal-window.fx-modal-sm{width:560px}}#adroll_consent_banner,.adroll_consent_persistent_icon,.adroll_mini_consent_banner{display:none!important}#cbh .cbh-button.cbh-fixed,#cbh .cbh-slider.cbh-fixed{bottom:18px!important;right:18px!important}#virtual-agent{position:relative;z-index:99999}#virtual-agent:first-child{max-height:calc(80% - 82px)!important}#virtual-agent .webchat-close:hover,#virtual-agent .webchat-minimize:hover{background-color:initial!important}#virtual-agent .webchat-header-name{float:left!important}#virtual-agent .webchat-header-name span{font-size:21px}#virtual-agent section{padding:0}[class^=webchat--css-]{position:relative;z-index:9999!important}form input.webchat__send-box-text-box__input[type=text]:focus{box-shadow:0 0 0!important;outline:none!important;outline:0!important;outline-offset:0!important}.webchat__send-box-text-box__input{margin:0!important}[class^=react-scroll-to-bottom--css]{height:auto;max-height:90%}[class^=webchat--css-] .webchat__basic-transcript{display:flex;flex-direction:column;justify-content:space-between;max-height:57vh}.chatBoxMainArea{position:relative;z-index:99999}div[role^=complementary]{max-height:72vh}.webchat__basic-transcript__scrollable{height:auto;max-height:100%;height:57vh!important}.btn{border-radius:3px;min-width:230px;position:relative;border:none;font-size:16px;font-weight:400;line-height:1.1;cursor:pointer;transition:box-shadow .4s,color .4s,background-color .4s,transform .4s;text-align:center;display:inline-block;padding:1rem;transform:translateY(0)}.btn:focus,.btn:hover:focus{outline:none;box-shadow:none}.btn:hover{box-shadow:0 6px 10px 0 #00000040;text-decoration:none;transform:translateY(-2px)}.btn.not-animated:hover{transform:translateY(0)}.btn.disabled{cursor:none;background:#dfe6e9!important;color:#c8c8c8!important;pointer-events:none}.btn.btn-default{border:1px solid #b2bec3;background:#0000;color:#2d3436}.btn.btn-default.active,.btn.btn-default:focus,.btn.btn-default:hover{background:#00b894;color:#fff}.btn.btn-default.active{border-color:#00b894}.btn.btn-default.active:focus,.btn.btn-default.active:hover{background:#00b894;color:#fff}.btn.btn-default:focus,.btn.btn-default:hover,.btn.btn-default:hover:focus{border-color:#00b894}.btn.btn-default.btn-error{background:#0000;color:#2d3436}.btn.btn-default.btn-error:focus,.btn.btn-default.btn-error:hover{background:#d63031;color:#fff}.btn.btn-default.btn-error.active{background:#d63031;color:#fff;border-color:#d63031}.btn.btn-default.btn-error.active:focus,.btn.btn-default.btn-error.active:hover{background:#d63031;color:#fff}.btn.btn-default.btn-error:focus,.btn.btn-default.btn-error:hover,.btn.btn-default.btn-error:hover:focus{border-color:#d63031}.btn.btn-outline{padding:10px 1rem;min-width:190px}.btn.btn-outline-primary{background:#0000;color:#303135;border:1px solid #303135}.btn.btn-outline-primary:hover{color:#fff}.btn.btn-outline-primary:focus{background:#303135;color:#fff}.btn.btn-outline-primary:hover{border:1px solid #303135;background:#303135}.btn.btn-outline-primary:hover .btn-arrow{border-color:#fff}.btn.btn-outline-primary:focus,.btn.btn-outline-primary:hover:focus{border-color:#303135}.btn.btn-outline-primary:focus .btn-arrow,.btn.btn-outline-primary:hover:focus .btn-arrow{border-color:#fff}.btn.btn-outline-primary .btn-arrow{border-color:#303135}.btn.btn-outline-primary.fx-color-base{background:#0000;color:#636e72}.btn.btn-outline-primary.fx-color-base:hover{background:#0984e3;color:#fff}.btn.btn-outline-primary.fx-color-base:focus{background:#065b9c;color:#fff}.btn.btn-outline-success{border:1px solid #00b894;background:#0000;color:#00b894}.btn.btn-outline-success:hover{background:#00b894;color:#fff}.btn.btn-outline-success:focus{background:#009678;color:#fff}.btn.btn-outline-success:hover{border-color:#00b894}.btn.btn-outline-success:hover .btn-arrow{border-color:#fff}.btn.btn-outline-success:focus,.btn.btn-outline-success:hover:focus{border-color:#009678}.btn.btn-outline-success:focus .btn-arrow,.btn.btn-outline-success:hover:focus .btn-arrow{border-color:#fff}.btn.btn-outline-success .btn-arrow{border-color:#00b894}.btn.btn-outline-gold{border:1px solid #a58c66;background:#0000;color:#a58c66;padding:10px 26px;font-size:16px}.btn.btn-outline-gold:focus,.btn.btn-outline-gold:hover{background:#a58c66;color:#fff}@media (min-width:1024px){.btn.btn-outline-gold{font-size:18px;padding:18px 26px}}.btn.btn-outline-gold:hover{border-color:#a58c66}.btn.btn-outline-gold:hover .btn-arrow{border-color:#fff}.btn.btn-outline-gold:focus,.btn.btn-outline-gold:hover:focus{border-color:#a58c66}.btn.btn-outline-gold i{font-size:37px;margin-left:10px;display:inline-block;vertical-align:middle}.btn.btn-outline--icon{background:#fff;z-index:3;font-size:14px;border-color:#dfe6e9}.btn.btn-outline--icon:focus,.btn.btn-outline--icon:hover{border-color:#303135;background:#303135;outline:none}.btn.btn-outline--icon:focus i,.btn.btn-outline--icon:hover i{color:#fff}.btn.btn-outline--icon i{margin-right:10px;font-size:16px}[lang=ar] .btn.btn-outline--icon i{margin-right:0;margin-left:10px}.btn.btn-single-line{font-size:1.125rem;font-weight:500;line-height:1.1;padding:1.5rem 1rem}.btn.btn-link{display:inline-flex;align-items:center;padding:5px 0;min-width:10px;color:#303135;font-weight:500;text-align:left;font-size:1rem}.btn.btn-link.no-underline span:after{display:none}.btn.btn-link span{position:relative}@media (min-width:1024px){.btn.btn-link span:after{content:"";position:absolute;bottom:-6px;left:0;width:0;height:2px;background:#b68756;transition:width .4s ease-in-out}}.btn.btn-link.hover,.btn.btn-link:hover{box-shadow:none;transform:none}@media (min-width:1024px){.btn.btn-link.hover span:after,.btn.btn-link:hover span:after{width:100%}}.btn.btn-link.hover .btn-arrow,.btn.btn-link:hover .btn-arrow{margin-left:11px}.btn.btn-link:focus,.btn.btn-link:hover:focus{color:#303135}@media (min-width:1024px){.btn.btn-link:focus span:after,.btn.btn-link:hover:focus span:after{width:100%;background:#b68756}}.btn.btn-link:focus .btn-arrow,.btn.btn-link:hover:focus .btn-arrow{margin-left:11px;border-color:#303135}.btn.btn-link:focus i,.btn.btn-link:hover:focus i{color:#303135}.btn.btn-link.not-animated.hover .btn-arrow,.btn.btn-link.not-animated:focus .btn-arrow,.btn.btn-link.not-animated:hover .btn-arrow,.btn.btn-link.not-animated:hover:focus .btn-arrow{margin-left:7px}.btn.btn-link .btn-arrow{margin-left:7px;border-color:#2d3436}.btn.btn-link--static{padding:5px 15px 5px 0;position:relative}.btn.btn-link--static.not-animated.hover .btn-arrow,.btn.btn-link--static.not-animated:focus .btn-arrow,.btn.btn-link--static.not-animated:hover .btn-arrow,.btn.btn-link--static.not-animated:hover:focus .btn-arrow{right:0}.btn.btn-link--static .btn-arrow{-webkit-font-smoothing:antialiased;-webkit-backface-visibility:hidden;position:absolute;right:0;transition:color .4s,transform .4s;border-color:#303135}.btn.btn-link .icon{color:#303135;font-size:14px;margin-left:10px;margin-bottom:0}.btn.btn-link--back i{transform:rotateY(180deg)}.btn.btn-go{font-size:18px;min-width:79px;height:79px;padding:1rem;display:inline-flex;align-items:center;justify-content:center}.btn.btn-go:hover{font-size:0;line-height:0}.btn.btn-go:hover i{font-size:27px}.btn.btn-go i{font-size:12px;display:inline-block;margin-left:5px}.btn.btn-primary{border-radius:9px}.btn.btn-primary,.btn.btn-primary:focus,.btn.btn-primary:hover{background:#303135;color:#fff}.btn.btn-primary small{color:#fffc}.btn.btn-primary.has-dark-bg{background-color:#32a071}.btn.btn-primary.btn-gray{background-color:#ededef;color:#303135}.btn.btn-secondary{background:#ff4aa1;color:#fff}.btn.btn-secondary:hover{background:#e84393;color:#fff}.btn.btn-secondary:focus{background:#cf3c83;color:#fff}.btn.btn-danger{background:#ed1c24;color:#fff}.btn.btn-danger:hover{background:#d63031;color:#fff}.btn.btn-danger:focus{background:#b32727;color:#fff}.btn.btn-success{background:#b68756;color:#fff}.btn.btn-success:hover{background:#00b894;color:#fff}.btn.btn-success:focus{background:#009678;color:#fff}.btn.btn-blue-light{background:#b0dbf580;color:#009cfc}.btn.btn-blue-light:hover{background:#0984e3;color:#fff}.btn.btn-blue-light:focus{background:#065b9c;color:#fff}.btn.btn-sm{min-width:10px;font-size:14px;padding:10px 1rem;display:inline-flex;align-items:center}.btn.btn-md{padding:12px 1rem;min-width:190px}.btn.btn-width-md{min-width:210px}@media (min-width:1024px){.btn.btn-width-md{min-width:260px}}.btn.btn-radius-lg{border-radius:30px}.btn.btn-large{font-size:16px;justify-content:center;display:inline-flex;align-items:center;height:60px;padding:0 25px}@media (min-width:1024px){.btn.btn-large{padding:0 30px;font-size:18px;height:76px}}.btn.btn-lg{font-size:18px;padding:1.25rem 3.5rem}.btn i{font-size:80%}.btn>img{margin-right:5px}.btn small{display:block;font-size:14px;line-height:1.5}.btn .icon{margin-right:10px;display:inline-flex;align-items:center;color:#fff;font-size:1.25rem}.btn-block{width:100%}@media (min-width:480px){.btn-sm-inline-block{width:auto}}.default-text{color:#2d3436;display:inline-block;font-weight:400}.default-text small{color:#b2bec3}.btn:focus .default-text,.btn:hover .default-text{opacity:0}.hover-text{display:none;color:#fff;font-weight:400}.hover-text i{font-size:80%;margin-left:10px}.btn:focus .hover-text,.btn:hover .hover-text{position:absolute;top:0;left:0;right:0;bottom:0;display:inline-flex;align-items:center;justify-content:center}.direct-register-button-block{display:inline-flex;text-align:center;flex-direction:column}.direct-register-button-block .btn{align-self:center}.btn-arrow{position:relative;display:inline-flex;border:1px solid #fff;border-width:1px 0 0 1px;width:8px;height:8px;opacity:1;transform:rotate(135deg);margin-left:5px;transition:all .4s}.btn-arrow.arrow-left{transform:rotate(-45deg);margin:0 10px 0 0}.btn-arrow.arrow-up{transform:rotate(45deg)}.btn-arrow.arrow-down{transform:rotate(225deg)}.btn-arrow.arrow-primary{border-color:#303135}.btn-arrow.arrow-default{border-color:#636e72}@media (min-width:1024px){.btn-arrow.position{position:absolute;top:50%;right:-14px;transform:rotate(135deg) translateY(6px)}}.btn-go .btn-arrow{margin-left:0}.btn-text-xs{font-size:13px}.btn-text{position:relative}.border-width-2{border-width:2px!important}.arrow-item{display:inline-block;width:18px;position:relative;margin-left:7px;height:18px;border-radius:50%;border:2px solid #2d3436;border-right-color:#0000;transition:transform .4s}.btn:hover .arrow-item{transform:rotate(1turn)}.btn:focus .arrow-item,.btn:hover .arrow-item,.btn:hover:focus .arrow-item{border-color:#303135 #0000 #303135 #303135}.arrow-item .curve{position:absolute;width:0;height:0;left:12px;top:-1px;transform:rotate(220deg);border-color:#0000 #303135 #0000 #0000;border-style:solid;border-width:4px 5px 4px 0}.btn:focus .arrow-item .curve,.btn:hover .arrow-item .curve,.btn:hover:focus .arrow-item .curve{border-color:#0000 #303135 #0000 #0000}a{transition:color .4s}a:hover{text-decoration:none}a:focus,a:hover,a:hover:focus{color:#b68756}button,input[type=submit]{background:none;padding:0;border:none;outline:none;cursor:pointer}.close-icon{font-size:0;line-height:0;position:relative;display:inline-block;width:15px;height:15px;overflow:hidden;padding:4px}@media (min-width:1024px){.close-icon:hover:after,.close-icon:hover:before{background:#2d3436}}.close-icon:after,.close-icon:before{content:"";position:absolute;height:1px;width:100%;top:50%;left:0;margin-top:-.5px;background:#929daa;transition:all .4s}.close-icon:before{transform:rotate(45deg)}.close-icon:after{transform:rotate(-45deg)}.arrow-opener .btn-arrow{margin:auto}.icon-decline{margin:0 auto;font-size:0;line-height:0;position:relative;display:inline-block;width:16px;height:16px;overflow:hidden}.icon-decline:after,.icon-decline:before{content:"";position:absolute;height:2px;width:100%;top:50%;left:0;margin-top:-.5px;background:#ed1c24;transition:all .4s;border-radius:2px}.icon-decline:before{transform:rotate(45deg)}.icon-decline:after{transform:rotate(-45deg)}.icon-accept{display:inline-block;width:12px;height:18px;border-color:#303135;border-style:solid;border-width:0 2px 2px 0;margin:0 auto;transform:rotate(45deg);border-radius:2px}.live-chat-link:hover{color:#303135}.live-chat-link i{margin-right:15px;font-size:28px;font-weight:600;color:#2d3436;margin-top:4px;margin-bottom:-4px}[lang=ar] .live-chat-link i{margin-left:15px;margin-right:0}[lang=ar] .btn>img{margin-right:0;margin-left:5px}[lang=ar] .btn .icon{margin-right:0;margin-left:10px}[lang=ar] .btn-gold i{margin-left:0;margin-right:10px}[lang=ar] .btn.btn-link{text-align:right}@media (min-width:1024px){[lang=ar] .btn.btn-link span:after{left:auto;right:0}}[lang=ar] .btn.btn-link .icon{transform:rotate(180deg);margin-left:0;margin-right:10px}[lang=ar] .btn.btn-link.hover .btn-arrow,[lang=ar] .btn.btn-link:focus .btn-arrow,[lang=ar] .btn.btn-link:hover .btn-arrow,[lang=ar] .btn.btn-link:hover:focus .btn-arrow{margin-right:11px;margin-left:0}[lang=ar] .btn.btn-link .btn-arrow,[lang=ar] .btn.btn-link.not-animated.hover .btn-arrow,[lang=ar] .btn.btn-link.not-animated:focus .btn-arrow,[lang=ar] .btn.btn-link.not-animated:hover .btn-arrow,[lang=ar] .btn.btn-link.not-animated:hover:focus .btn-arrow{margin-right:7px;margin-left:0}[lang=ar] .btn.btn-link--static{padding:5px 0 5px 15px}[lang=ar] .btn.btn-link--static .btn-arrow,[lang=ar] .btn.btn-link--static.not-animated.hover .btn-arrow,[lang=ar] .btn.btn-link--static.not-animated:focus .btn-arrow,[lang=ar] .btn.btn-link--static.not-animated:hover .btn-arrow,[lang=ar] .btn.btn-link--static.not-animated:hover:focus .btn-arrow{left:0;right:auto}[lang=ar] .btn.btn-go i{margin-left:0;margin-right:5px}[lang=ar] .hover-text i{margin-left:0;margin-right:10px}[lang=ar] .btn-arrow{margin-left:0;margin-right:5px;transform:rotate(-45deg)}[lang=ar] .btn-arrow.arrow-left{margin:0 0 0 10px;transform:rotate(135deg)}@media (min-width:1024px){[lang=ar] .btn-arrow.position{left:-17px;right:auto}}.btn-go [lang=ar] .btn-arrow{margin-right:0}[lang=ar] .fx-symbol-chevron{transform:rotate(180deg);display:inline-block}.fx-symbol-chevron.rotated{display:inline-block;transform:rotateY(180deg);margin-left:unset;margin-right:5px}.btn-group .btn{font-size:18px;font-weight:500;margin-bottom:13px;padding-top:24px;padding-bottom:24px}.btn-group small{font-size:14px;color:#636e72}.btn-group small a{margin-left:3px;color:#b68756}.btn-group small a:hover,a,a:active,a:focus,a:hover{color:#b68756}a:active i,a:active span i,a:focus i,a:focus span i,a:hover i,a:hover span i{color:#303135}p{margin-bottom:1.5rem}p a{font-weight:500}.gold-bg{background-color:#b68756}.text-black{color:#2d3436}.text-primary{color:#b68756!important}.font-size-big{font-size:1.3em}.list-two-columns{padding:0;margin:0;list-style-position:inside;-moz-column-count:2;column-count:2;list-style-type:none}.list-two-columns li{padding:0 0 1.5rem}.risk{color:#c8c8c8;font-size:14px}@media (min-width:480px){.risk{font-size:14px}}.decoration{border-bottom:2px solid #303135;transition:border .4s;display:inline-block;vertical-align:middle;line-height:1}.decoration:hover{border-bottom-color:#0000}.hover-decoration{border-bottom:2px solid #0000;transition:border .4s;line-height:1}.hover-decoration:hover{border-bottom-color:#0984e3}p .hover-decoration{border-width:1px}.no-decoration{border:none}.text-center{text-align:center}@media (max-width:1023.98px){.text-center--sm{text-align:center}}.h-100{height:100%}.fx-warning{box-shadow:0 0 16px 0 #dfe6e9;background-color:#fff;border:1px solid #dfe6e9;padding:3px 0;margin:0 3px 3px;color:#636e72;font-size:12px}@media (min-width:1024px){.fx-warning{font-size:14px;margin:0 0 3px;padding:5px 0}}.fx-warning__icon{position:absolute;top:50%;transform:translateY(-50%);left:0}.fx-warning__content-wrapper{display:flex;align-items:center;padding:0 5px}@media (min-width:1024px){.fx-warning__content-wrapper{padding:0 5px}}.fx-warning__text{padding-left:25px;position:relative;line-height:1}.fx-warning__text strong{color:#2d3436}.fx-warning__accept-button{display:inline-flex;align-items:center;position:relative;border-radius:3px;border:1px solid #00b894;font-size:11px;line-height:1;color:#00b894;text-transform:uppercase;transition:background-color .4s;justify-content:center;margin-left:10px;padding:5px}@media (min-width:1024px){.fx-warning__accept-button{padding:8px 8px 7px}}.fx-warning__accept-button:hover{color:#00b894;background:#636e720d}.fx-warning__accept-button .icon-close{position:relative;display:inline-flex;width:12px;height:12px;line-height:12px}.fx-warning__accept-button .icon-close:after,.fx-warning__accept-button .icon-close:before{content:" ";left:0;top:50%;position:absolute;height:1px;width:12px;background-color:#00b894;transform:translateY(-50%) rotate(45deg)}.fx-warning__accept-button .icon-close:after{transform:translateY(-50%) rotate(-45deg)}.fx-warning__cross:after,.fx-warning__cross:before{left:8px;top:50%;position:absolute;content:" ";height:1px;width:14px;background-color:#303135;transform:translateY(-50%) rotate(45deg)}.fx-warning__cross:after{transform:translateY(-50%) rotate(-45deg)}.fx-lazy--transparent{opacity:0}.fx-lazy.fx-loaded,.fx-lazy.loaded{animation:fx-animation-showUpOpacity .25s forwards}.fx-lazy.lqip{width:100%;filter:blur(20px)}.panel__heading{max-width:770px;width:100%;margin:0 auto 3rem}.panel__heading--title-color{color:#a79582!important}.panel__heading--title-color small{font-weight:400}.panel__heading sup{font-size:47%;top:-1em;font-weight:600}.panel__heading .notes{color:#b2bec3;font-size:14px}.panel__heading .icon{color:#2d3436;display:block;font-size:2.5rem;margin-bottom:1.5rem}.fx-theme--light{color:#636e72;background-color:#fff}.fx-theme--light .fx-color--heading,.fx-theme--light .text-size-h3,.fx-theme--light .text-size-h4,.fx-theme--light .text-size-h5,.fx-theme--light .text-size-h6,.fx-theme--light h1,.fx-theme--light h2,.fx-theme--light h3,.fx-theme--light h4,.fx-theme--light h5,.fx-theme--light h6{color:#2d3436}.fx-theme--light .fx-color--secondary{color:#979797}.fx-theme--light .fx-color--main{color:#636e72}.fx-theme--light .fx-color--highlight{color:#009cfc}.fx-theme--light .fx-color--highlight-bg{background-color:#009cfc}.fx-theme--light .fx-color-border--secondary{border-color:#979797}.fx-theme--light .fx-color--risk,.fx-theme--light .risk{color:#575757}.fx-theme--light .fx-color--header{color:#555555bf}.fx-theme--dark{color:#fff;background-color:#131416}.fx-theme--dark .fx-color--heading,.fx-theme--dark .text-size-h3,.fx-theme--dark .text-size-h4,.fx-theme--dark .text-size-h5,.fx-theme--dark .text-size-h6,.fx-theme--dark h1,.fx-theme--dark h2,.fx-theme--dark h3,.fx-theme--dark h4,.fx-theme--dark h5,.fx-theme--dark h6{color:#fff}.fx-theme--dark .fx-color--secondary{color:#979797}.fx-theme--dark .fx-color--main{color:#fff}.fx-theme--dark .fx-color--highlight{color:#009cfc}.fx-theme--dark .fx-color--highlight-bg{background-color:#009cfc}.fx-theme--dark .fx-color-border--secondary{border-color:#979797}.fx-theme--dark .fx-color--risk,.fx-theme--dark .risk{color:#a9abb0}.fx-theme--dark .fx-color--header{color:#c8c8c8}.fx-theme--gray{color:#636e72;background-color:#f8f8f8}.fx-theme--gray .fx-color--heading,.fx-theme--gray .text-size-h3,.fx-theme--gray .text-size-h4,.fx-theme--gray .text-size-h5,.fx-theme--gray .text-size-h6,.fx-theme--gray h1,.fx-theme--gray h2,.fx-theme--gray h3,.fx-theme--gray h4,.fx-theme--gray h5,.fx-theme--gray h6{color:#333}.fx-theme--gray .fx-color--secondary{color:#575757}.fx-theme--gray .fx-color--main{color:#636e72}.fx-theme--gray .fx-color--highlight{color:#009cfc}.fx-theme--gray .fx-color--highlight-bg{background-color:#009cfc}.fx-theme--gray .fx-color-border--secondary{border-color:#575757}.fx-theme--gray .fx-color--risk,.fx-theme--gray .risk{color:#575757}.fx-theme--gray .fx-color--header{color:#00000080}.fx-theme--highlight{color:#fff;background-color:#009cfc}.fx-theme--highlight .fx-color--heading,.fx-theme--highlight .text-size-h3,.fx-theme--highlight .text-size-h4,.fx-theme--highlight .text-size-h5,.fx-theme--highlight .text-size-h6,.fx-theme--highlight h1,.fx-theme--highlight h2,.fx-theme--highlight h3,.fx-theme--highlight h4,.fx-theme--highlight h5,.fx-theme--highlight h6{color:#fff}.fx-theme--highlight .fx-color--secondary{color:#fefefe}.fx-theme--highlight .fx-color--main{color:#fff}.fx-theme--highlight .fx-color--highlight{color:#575757}.fx-theme--highlight .fx-color--highlight-bg{background-color:#575757}.fx-theme--highlight .fx-color-border--secondary{border-color:#fefefe}.fx-theme--highlight .fx-color--risk,.fx-theme--highlight .risk{color:#fefefe}.fx-theme--highlight .fx-color--header{color:#fff}.fx-color--danger{color:#ed1c24}.fx-color--primary{color:#009cfc}.fx-color--success{color:#00b894}.fx-color-gray-100{color:#b2bec3}.fx-color--yellow{color:#ffc600}.fx-color--black{color:#2d3436}.rating{background-image:url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyODAiIGhlaWdodD0iMzkiPgogICAgPGRlZnM+CiAgICAgICAgPGxpbmVhckdyYWRpZW50IGlkPSJhIiB4MT0iMCUiIHgyPSIwJSIgeTE9IjEwMCUiIHkyPSIwJSI+CiAgICAgICAgICAgIDxzdG9wIG9mZnNldD0iMCUiIHN0b3AtY29sb3I9IiNCQkE5NzMiLz4KICAgICAgICAgICAgPHN0b3Agb2Zmc2V0PSIxMDAlIiBzdG9wLWNvbG9yPSIjQTc5NjdDIi8+CiAgICAgICAgPC9saW5lYXJHcmFkaWVudD4KICAgIDwvZGVmcz4KICAgIDxwYXRoIGZpbGw9InVybCgjYSkiIGZpbGwtcnVsZT0iZXZlbm9kZCIgZD0iTTI2Ny41OTUgMjQuMDgxbDQuNzM5IDE0LjkwOC0xMi4zNDktOS4yNTMtMTIuMzY5IDkuMjI1IDQuNzcxLTE0Ljg5Ni0xMi4zODQtOS4yMDYgMTUuMjk4LjA0NyA0LjcxNi0xNC45MTUgNC42ODMgMTQuOTI2IDE1LjI5OS0uMDE0LTEyLjQwNCA5LjE3OHptLTU1LjI2MSAxNC45MDhsLTEyLjM0OS05LjI1My0xMi4zNjkgOS4yMjUgNC43NzEtMTQuODk2LTEyLjM4NC05LjIwNiAxNS4yOTguMDQ3IDQuNzE2LTE0LjkxNSA0LjY4MyAxNC45MjYgMTUuMjk4LS4wMTQtMTIuNDAzIDkuMTc4IDQuNzM5IDE0LjkwOHptLTYwIDBsLTEyLjM0OS05LjI1My0xMi4zNjkgOS4yMjUgNC43NzEtMTQuODk2LTEyLjM4NC05LjIwNiAxNS4yOTguMDQ3IDQuNzE2LTE0LjkxNSA0LjY4MyAxNC45MjYgMTUuMjk5LS4wMTQtMTIuNDA0IDkuMTc4IDQuNzM5IDE0LjkwOHptLTYwIDBsLTEyLjM0OS05LjI1My0xMi4zNjkgOS4yMjUgNC43NzEtMTQuODk2LTEyLjM4NC05LjIwNiAxNS4yOTguMDQ3TDgwLjAxNy0uMDA5IDg0LjcgMTQuOTE3bDE1LjI5OC0uMDE0LTEyLjQwMyA5LjE3OCA0LjczOSAxNC45MDh6bS02MCAwbC0xMi4zNDktOS4yNTMtMTIuMzY5IDkuMjI1IDQuNzcxLTE0Ljg5NkwuMDAzIDE0Ljg1OWwxNS4yOTguMDQ3TDIwLjAxNy0uMDA5IDI0LjcgMTQuOTE3bDE1LjI5OC0uMDE0LTEyLjQwMyA5LjE3OCA0LjczOSAxNC45MDh6Ii8+Cjwvc3ZnPgo=)}body[dir=rtl] .mat-calendar-table .mat-calendar-body-label{text-align:left}.mat-calendar-table .mat-calendar-cell-over>.mat-calendar-body-cell-content{border-color:#b0dbf580}.mat-calendar-table .mat-calendar-body-begin-range:not(.mat-calendar-body-end-range),.mat-calendar-table .mat-calendar-body-end-range:not(.mat-calendar-body-begin-range),.mat-calendar-table .mat-calendar-cell-semi-selected{background:#b0dbf580}.mat-calendar-table .mat-calendar-body-begin-range:not(.mat-calendar-body-end-range) .mat-calendar-body-semi-selected,.mat-calendar-table .mat-calendar-body-end-range:not(.mat-calendar-body-begin-range) .mat-calendar-body-semi-selected,.mat-calendar-table .mat-calendar-cell-semi-selected .mat-calendar-body-semi-selected{color:#fff!important}body[dir=rtl] .mat-calendar-table .mat-calendar-body-begin-range:not(.mat-calendar-body-end-range){border-radius:0 50% 50% 0}body[dir=rtl] .mat-calendar-table .mat-calendar-body-end-range:not(.mat-calendar-body-begin-range){border-radius:50% 0 0 50%}.mat-calendar-table .mat-calendar-body-today.mat-calendar-body-selected{box-shadow:none}.mat-datepicker-content .mat-calendar-spacer{display:none}.mat-datepicker-content .mat-calendar-previous-button{order:-1}body[dir=rtl] .mat-datepicker-content .mat-calendar-previous-button{transform:rotate(0)}.mat-datepicker-content .mat-calendar-next-button{order:3}body[dir=rtl] .mat-datepicker-content .mat-calendar-next-button{transform:rotate(0)}.mat-datepicker-content .mat-calendar-period-button{order:2;font-size:14px;font-weight:500}.mat-datepicker-content .mat-calendar-table-header{text-transform:uppercase}.mat-datepicker-content .mat-calendar-controls{justify-content:space-between;margin:3% calc(33% / 7 - 16px)}.mat-datepicker-content .mat-calendar-arrow,.mat-datepicker-content .mat-calendar-table-header-divider{display:none}.mat-datepicker-content .mat-calendar-next-button,.mat-datepicker-content .mat-calendar-previous-button{color:#929daa}.mat-datepicker-content .mat-calendar-header{padding-top:0}.mat-datepicker-content .mat-calendar{width:300px!important;height:305px!important}body[dir=rtl] .mat-datepicker-content .mat-calendar{direction:ltr}@media (min-width:1024px){.mat-datepicker-content .mat-calendar{width:340px!important;height:372px!important}}.mat-datepicker-content .mat-calendar .mat-calendar-body .mat-calendar-body-disabled .mat-calendar-body-cell-content{border:none}.mat-calendar-table .mat-calendar-body-disabled.mat-calendar-body-begin-range:not(.mat-calendar-body-end-range),.mat-calendar-table .mat-calendar-body-disabled.mat-calendar-body-end-range:not(.mat-calendar-body-begin-range),.mat-calendar-table .mat-calendar-body-disabled.mat-calendar-cell-semi-selected{background:none}.mat-button,.mat-calendar-body-label,.mat-calendar-period-button,.mat-fab,.mat-flat-button,.mat-icon-button,.mat-mini-fab,.mat-raised-button,.mat-stroked-button{font-size:14px}.mat-form-field-can-float .mat-input-server:focus+.mat-form-field-label-wrapper .mat-form-field-label,.mat-form-field-can-float.mat-form-field-should-float .mat-form-field-label{transform:translateY(-1.34375em) scale(.75);width:133.3333333333%}.mat-form-field-can-float .mat-input-server[label]:not(:label-shown)+.mat-form-field-label-wrapper .mat-form-field-label{transform:translateY(-1.34374em) scale(.75);width:133.3333433333%}.mat-form-field-appearance-legacy.mat-form-field-can-float .mat-input-server:focus+.mat-form-field-label-wrapper .mat-form-field-label,.mat-form-field-appearance-legacy.mat-form-field-can-float.mat-form-field-should-float .mat-form-field-label{transform:translateY(-1.28125em) scale(.75) perspective(100px) translateZ(.001px);-ms-transform:translateY(-1.28125em) scale(.75);width:133.3333333333%}.mat-form-field-appearance-legacy.mat-form-field-can-float .mat-form-field-autofill-control:-webkit-autofill+.mat-form-field-label-wrapper .mat-form-field-label{transform:translateY(-1.28125em) scale(.75) perspective(100px) translateZ(.00101px);-ms-transform:translateY(-1.28124em) scale(.75);width:133.3333433333%}.mat-form-field-appearance-legacy.mat-form-field-can-float .mat-input-server[label]:not(:label-shown)+.mat-form-field-label-wrapper .mat-form-field-label{transform:translateY(-1.28125em) scale(.75) perspective(100px) translateZ(.00102px);-ms-transform:translateY(-1.28123em) scale(.75);width:133.3333533333%}@media print{.mat-form-field-appearance-legacy.mat-form-field-can-float .mat-input-server:focus+.mat-form-field-label-wrapper .mat-form-field-label,.mat-form-field-appearance-legacy.mat-form-field-can-float.mat-form-field-should-float .mat-form-field-label{transform:translateY(-1.28122em) scale(.75)}.mat-form-field-appearance-legacy.mat-form-field-can-float .mat-form-field-autofill-control:-webkit-autofill+.mat-form-field-label-wrapper .mat-form-field-label{transform:translateY(-1.28121em) scale(.75)}.mat-form-field-appearance-legacy.mat-form-field-can-float .mat-input-server[label]:not(:label-shown)+.mat-form-field-label-wrapper .mat-form-field-label{transform:translateY(-1.2812em) scale(.75)}}.mat-form-field-appearance-fill.mat-form-field-can-float .mat-input-server:focus+.mat-form-field-label-wrapper .mat-form-field-label,.mat-form-field-appearance-fill.mat-form-field-can-float.mat-form-field-should-float .mat-form-field-label{transform:translateY(-.59375em) scale(.75);width:133.3333333333%}.mat-form-field-appearance-fill.mat-form-field-can-float .mat-input-server[label]:not(:label-shown)+.mat-form-field-label-wrapper .mat-form-field-label{transform:translateY(-.59374em) scale(.75);width:133.3333433333%}.mat-form-field-appearance-outline.mat-form-field-can-float .mat-input-server:focus+.mat-form-field-label-wrapper .mat-form-field-label,.mat-form-field-appearance-outline.mat-form-field-can-float.mat-form-field-should-float .mat-form-field-label{transform:translateY(-1.59375em) scale(.75);width:133.3333333333%}.mat-form-field-appearance-outline.mat-form-field-can-float .mat-input-server[label]:not(:label-shown)+.mat-form-field-label-wrapper .mat-form-field-label{transform:translateY(-1.59374em) scale(.75);width:133.3333433333%}.mat-tab-label,.mat-tab-link{font-size:14px}.mat-ripple{overflow:hidden;position:relative}.mat-ripple:not(:empty){transform:translateZ(0)}.mat-ripple.mat-ripple-unbounded{overflow:visible}.mat-ripple-element{position:absolute;border-radius:50%;pointer-events:none;transition:opacity,transform 0ms cubic-bezier(0,0,.2,1);transform:scale(0)}.cdk-high-contrast-active .mat-ripple-element{display:none}.cdk-visually-hidden{border:0;clip:rect(0 0 0 0);height:1px;margin:-1px;overflow:hidden;padding:0;position:absolute;width:1px;white-space:nowrap;outline:0;-webkit-appearance:none;-moz-appearance:none}.cdk-global-overlay-wrapper,.cdk-overlay-container{pointer-events:none;top:0;left:0;height:100%;width:100%}.cdk-overlay-container{position:fixed;z-index:1000}.cdk-overlay-container:empty{display:none}.cdk-global-overlay-wrapper,.cdk-overlay-pane{display:flex;position:absolute;z-index:1000}.cdk-overlay-pane{pointer-events:auto;box-sizing:border-box;max-width:100%;max-height:100%}.cdk-overlay-backdrop{position:absolute;top:0;bottom:0;left:0;right:0;z-index:1000;pointer-events:auto;-webkit-tap-highlight-color:transparent;transition:opacity .4s cubic-bezier(.25,.8,.25,1);opacity:0}.cdk-overlay-backdrop.cdk-overlay-backdrop-showing{opacity:1}.cdk-high-contrast-active .cdk-overlay-backdrop.cdk-overlay-backdrop-showing{opacity:.6}.cdk-overlay-dark-backdrop{background:#00000052}.cdk-overlay-transparent-backdrop,.cdk-overlay-transparent-backdrop.cdk-overlay-backdrop-showing{opacity:0}.cdk-overlay-connected-position-bounding-box{position:absolute;z-index:1000;display:flex;flex-direction:column;min-width:1px;min-height:1px}.cdk-global-scrollblock{position:fixed;width:100%;overflow-y:scroll}@keyframes cdk-text-field-autofill-start{\n  /*!*/}@keyframes cdk-text-field-autofill-end{\n  /*!*/}.cdk-text-field-autofill-monitored:-webkit-autofill{animation:cdk-text-field-autofill-start 0s 1ms}.cdk-text-field-autofill-monitored:not(:-webkit-autofill){animation:cdk-text-field-autofill-end 0s 1ms}textarea.cdk-textarea-autosize{resize:none}textarea.cdk-textarea-autosize-measuring{padding:2px 0!important;box-sizing:initial!important;height:auto!important;overflow:hidden!important}textarea.cdk-textarea-autosize-measuring-firefox{padding:2px 0!important;box-sizing:initial!important;height:0!important}.mat-focus-indicator,.mat-mdc-focus-indicator{position:relative}.list,.list-bullet,.list-checkmark{margin:0;padding:0;list-style:none}.filter-form{font-size:.875rem;padding:10px 24px}.filter-form .dr-custom.mat-form-field .mat-form-field-wrapper{padding-bottom:20px}.mat-form-field{width:100%}.mat-form-field-outline-thick .mat-form-field-outline-gap{width:0!important;background-color:initial}input.mat-input-element{font-size:14px}.mat-flat-button:not([class*=mat-elevation-z]),.mat-stroked-button:not([class*=mat-elevation-z]){box-shadow:none!important;outline:none}.dr-custom.mat-form-field .mat-form-field-infix{color:#2d3436}.mat-form-field-appearance-outline .mat-form-field-infix{padding:1.2em 0 .4em;min-height:54px}.filter-form .dr-custom.mat-form-field.gray .mat-form-field-outline{outline:none!important;box-shadow:none;max-height:51px;border:1px solid #dadbdc;border-radius:4px}.mat-form-field.mat-focused .mat-form-field-outline.mat-form-field-outline-thick .mat-form-field-outline-gap{outline:none;box-shadow:none;width:0!important}.mat-form-field-appearance-outline .mat-form-field-outline-thick .mat-form-field-outline-end,.mat-form-field-appearance-outline .mat-form-field-outline-thick .mat-form-field-outline-gap,.mat-form-field-appearance-outline .mat-form-field-outline-thick .mat-form-field-outline-start{border-width:0!important}.dr-custom.mat-form-field.gray .mat-form-field-label,.dr-custom.mat-form-field.gray .mat-select-arrow{color:#84949a;font-size:14px}.dr-custom-datepicker .mat-icon-button{align-items:center;justify-content:center;display:flex!important;width:35px!important;height:35px!important;margin-right:-5px}.dr-custom.mat-form-field.gray .mat-select-value{color:#2d3436}.dr-custom-datepicker .mat-icon-button i{font-size:18px;font-weight:500}.priority{display:inline-flex;justify-content:space-between;width:20px;margin:0 auto}.mat-form-field-appearance-outline .mat-form-field-prefix,.mat-form-field-appearance-outline .mat-form-field-suffix{top:0!important}.mat-form-field-appearance-outline .mat-select-arrow-wrapper{transform:translateY(-24%)!important}.mat-icon-button:hover .mat-button-focus-overlay{opacity:.1}.mat-form-field:not(.mat-form-field-appearance-legacy) .mat-form-field-prefix .mat-icon-button,.mat-form-field:not(.mat-form-field-appearance-legacy) .mat-form-field-suffix .mat-icon-button{outline:none!important}.mat-form-field-appearance-outline.mat-form-field-can-float .mat-input-server:focus+.mat-form-field-label-wrapper .mat-form-field-label,.mat-form-field-appearance-outline.mat-form-field-can-float.mat-form-field-should-float .mat-form-field-label{transform:translateY(-.7em) scale(.75)!important}.mat-button.mat-primary,.mat-icon-button.mat-primary,.mat-stroked-button.mat-primary{min-height:51px;margin-top:4px}.dr-custom.btn-outline.cdk-keyboard-focused,.dr-custom.btn-outline:hover:not([disabled]){color:#fff;background-color:#0984e3}.dr-custom.mat-raised-button.mat-primary:not(:hover):not([disabled]) .mat-button-wrapper,.dr-custom.mat-stroked-button.mat-primary:not(:hover):not([disabled]) .mat-button-wrapper{color:#2d3436}.mat-stroked-button:not([disabled]){border-color:#0051ff!important;transition:all .3s ease}.dr-custom.btn-outline-primary:hover:not([disabled]){border-color:#0051ff}.mat-button.mat-primary .mat-button-focus-overlay,.mat-icon-button.mat-primary .mat-button-focus-overlay,.mat-stroked-button.mat-primary .mat-button-focus-overlay{background-color:#0051ffb3}.dr-custom.btn-outline-primary:hover:not([disabled]) .mat-button-focus-overlay{background-color:#0984e3}.mat-ripple-element{background-color:#0000001a}.mat-option{color:#8a9295}.mat-option.mat-selected:not(.mat-option-multiple):not(.mat-option-disabled),.mat-option:focus:not(.mat-option-disabled),.mat-option:hover:not(.mat-option-disabled){background:#0000000a}.mat-option.mat-active{background:#0000000a;color:#8a9295}.mat-option.mat-option-disabled{color:#eaeef1}.mat-primary .mat-option.mat-selected:not(.mat-option-disabled){color:#0051ff}.mat-accent .mat-option.mat-selected:not(.mat-option-disabled){color:#00b894}.mat-warn .mat-option.mat-selected:not(.mat-option-disabled){color:#e17055}.mat-optgroup-label{color:#84949a}.mat-optgroup-disabled .mat-optgroup-label{color:#eaeef1}.mat-pseudo-checkbox{color:#84949a}.mat-pseudo-checkbox:after{color:#fff}.mat-pseudo-checkbox-disabled{color:#b0b0b0}.mat-primary .mat-pseudo-checkbox-checked,.mat-primary .mat-pseudo-checkbox-indeterminate{background:#0051ff}.mat-accent .mat-pseudo-checkbox-checked,.mat-accent .mat-pseudo-checkbox-indeterminate,.mat-pseudo-checkbox-checked,.mat-pseudo-checkbox-indeterminate{background:#00b894}.mat-warn .mat-pseudo-checkbox-checked,.mat-warn .mat-pseudo-checkbox-indeterminate{background:#e17055}.mat-pseudo-checkbox-checked.mat-pseudo-checkbox-disabled,.mat-pseudo-checkbox-indeterminate.mat-pseudo-checkbox-disabled{background:#b0b0b0}.mat-app-background{background-color:#fff;color:#8a9295}.mat-elevation-z0{box-shadow:0 0 0 0 #0003,0 0 0 0 #00000024,0 0 0 0 #0000001f}.mat-elevation-z1{box-shadow:0 2px 1px -1px #0003,0 1px 1px 0 #00000024,0 1px 3px 0 #0000001f}.mat-elevation-z2{box-shadow:0 3px 1px -2px #0003,0 2px 2px 0 #00000024,0 1px 5px 0 #0000001f}.mat-elevation-z3{box-shadow:0 3px 3px -2px #0003,0 3px 4px 0 #00000024,0 1px 8px 0 #0000001f}.mat-elevation-z4{box-shadow:0 2px 4px -1px #0003,0 4px 5px 0 #00000024,0 1px 10px 0 #0000001f}.mat-elevation-z5{box-shadow:0 3px 5px -1px #0003,0 5px 8px 0 #00000024,0 1px 14px 0 #0000001f}.mat-elevation-z6{box-shadow:0 3px 5px -1px #0003,0 6px 10px 0 #00000024,0 1px 18px 0 #0000001f}.mat-elevation-z7{box-shadow:0 4px 5px -2px #0003,0 7px 10px 1px #00000024,0 2px 16px 1px #0000001f}.mat-elevation-z8{box-shadow:0 5px 5px -3px #0003,0 8px 10px 1px #00000024,0 3px 14px 2px #0000001f}.mat-elevation-z9{box-shadow:0 5px 6px -3px #0003,0 9px 12px 1px #00000024,0 3px 16px 2px #0000001f}.mat-elevation-z10{box-shadow:0 6px 6px -3px #0003,0 10px 14px 1px #00000024,0 4px 18px 3px #0000001f}.mat-elevation-z11{box-shadow:0 6px 7px -4px #0003,0 11px 15px 1px #00000024,0 4px 20px 3px #0000001f}.mat-elevation-z12{box-shadow:0 7px 8px -4px #0003,0 12px 17px 2px #00000024,0 5px 22px 4px #0000001f}.mat-elevation-z13{box-shadow:0 7px 8px -4px #0003,0 13px 19px 2px #00000024,0 5px 24px 4px #0000001f}.mat-elevation-z14{box-shadow:0 7px 9px -4px #0003,0 14px 21px 2px #00000024,0 5px 26px 4px #0000001f}.mat-elevation-z15{box-shadow:0 8px 9px -5px #0003,0 15px 22px 2px #00000024,0 6px 28px 5px #0000001f}.mat-elevation-z16{box-shadow:0 8px 10px -5px #0003,0 16px 24px 2px #00000024,0 6px 30px 5px #0000001f}.mat-elevation-z17{box-shadow:0 8px 11px -5px #0003,0 17px 26px 2px #00000024,0 6px 32px 5px #0000001f}.mat-elevation-z18{box-shadow:0 9px 11px -5px #0003,0 18px 28px 2px #00000024,0 7px 34px 6px #0000001f}.mat-elevation-z19{box-shadow:0 9px 12px -6px #0003,0 19px 29px 2px #00000024,0 7px 36px 6px #0000001f}.mat-elevation-z20{box-shadow:0 10px 13px -6px #0003,0 20px 31px 3px #00000024,0 8px 38px 7px #0000001f}.mat-elevation-z21{box-shadow:0 10px 13px -6px #0003,0 21px 33px 3px #00000024,0 8px 40px 7px #0000001f}.mat-elevation-z22{box-shadow:0 10px 14px -6px #0003,0 22px 35px 3px #00000024,0 8px 42px 7px #0000001f}.mat-elevation-z23{box-shadow:0 11px 14px -7px #0003,0 23px 36px 3px #00000024,0 9px 44px 8px #0000001f}.mat-elevation-z24{box-shadow:0 11px 15px -7px #0003,0 24px 38px 3px #00000024,0 9px 46px 8px #0000001f}.mat-theme-loaded-marker{display:none}.mat-autocomplete-panel{background:#fff;color:#8a9295}.mat-autocomplete-panel:not([class*=mat-elevation-z]){box-shadow:0 2px 4px -1px #0003,0 4px 5px 0 #00000024,0 1px 10px 0 #0000001f}.mat-autocomplete-panel .mat-option.mat-selected:not(.mat-active):not(:hover){background:#fff}.mat-autocomplete-panel .mat-option.mat-selected:not(.mat-active):not(:hover):not(.mat-option-disabled){color:#8a9295}.mat-badge-content{color:#fff;background:#0051ff}.cdk-high-contrast-active .mat-badge-content{outline:1px solid;border-radius:0}.mat-badge-accent .mat-badge-content{background:#00b894;color:#fff}.mat-badge-warn .mat-badge-content{color:#000000de;background:#e17055}.mat-badge{position:relative}.mat-badge-hidden .mat-badge-content{display:none}.mat-badge-disabled .mat-badge-content{background:#e0e0e0;color:#b2bec3}.mat-badge-content{position:absolute;text-align:center;display:inline-block;border-radius:50%;transition:transform .2s ease-in-out;transform:scale(.6);overflow:hidden;white-space:nowrap;text-overflow:ellipsis;pointer-events:none}.mat-badge-content._mat-animation-noopable,.ng-animate-disabled .mat-badge-content{transition:none}.mat-badge-content.mat-badge-active{transform:none}.mat-badge-small .mat-badge-content{width:16px;height:16px;line-height:16px}.mat-badge-small.mat-badge-above .mat-badge-content{top:-8px}.mat-badge-small.mat-badge-below .mat-badge-content{bottom:-8px}.mat-badge-small.mat-badge-before .mat-badge-content{left:-16px}[dir=rtl] .mat-badge-small.mat-badge-before .mat-badge-content{left:auto;right:-16px}.mat-badge-small.mat-badge-after .mat-badge-content{right:-16px}[dir=rtl] .mat-badge-small.mat-badge-after .mat-badge-content{right:auto;left:-16px}.mat-badge-small.mat-badge-overlap.mat-badge-before .mat-badge-content{left:-8px}[dir=rtl] .mat-badge-small.mat-badge-overlap.mat-badge-before .mat-badge-content{left:auto;right:-8px}.mat-badge-small.mat-badge-overlap.mat-badge-after .mat-badge-content{right:-8px}[dir=rtl] .mat-badge-small.mat-badge-overlap.mat-badge-after .mat-badge-content{right:auto;left:-8px}.mat-badge-medium .mat-badge-content{width:22px;height:22px;line-height:22px}.mat-badge-medium.mat-badge-above .mat-badge-content{top:-11px}.mat-badge-medium.mat-badge-below .mat-badge-content{bottom:-11px}.mat-badge-medium.mat-badge-before .mat-badge-content{left:-22px}[dir=rtl] .mat-badge-medium.mat-badge-before .mat-badge-content{left:auto;right:-22px}.mat-badge-medium.mat-badge-after .mat-badge-content{right:-22px}[dir=rtl] .mat-badge-medium.mat-badge-after .mat-badge-content{right:auto;left:-22px}.mat-badge-medium.mat-badge-overlap.mat-badge-before .mat-badge-content{left:-11px}[dir=rtl] .mat-badge-medium.mat-badge-overlap.mat-badge-before .mat-badge-content{left:auto;right:-11px}.mat-badge-medium.mat-badge-overlap.mat-badge-after .mat-badge-content{right:-11px}[dir=rtl] .mat-badge-medium.mat-badge-overlap.mat-badge-after .mat-badge-content{right:auto;left:-11px}.mat-badge-large .mat-badge-content{width:28px;height:28px;line-height:28px}.mat-badge-large.mat-badge-above .mat-badge-content{top:-14px}.mat-badge-large.mat-badge-below .mat-badge-content{bottom:-14px}.mat-badge-large.mat-badge-before .mat-badge-content{left:-28px}[dir=rtl] .mat-badge-large.mat-badge-before .mat-badge-content{left:auto;right:-28px}.mat-badge-large.mat-badge-after .mat-badge-content{right:-28px}[dir=rtl] .mat-badge-large.mat-badge-after .mat-badge-content{right:auto;left:-28px}.mat-badge-large.mat-badge-overlap.mat-badge-before .mat-badge-content{left:-14px}[dir=rtl] .mat-badge-large.mat-badge-overlap.mat-badge-before .mat-badge-content{left:auto;right:-14px}.mat-badge-large.mat-badge-overlap.mat-badge-after .mat-badge-content{right:-14px}[dir=rtl] .mat-badge-large.mat-badge-overlap.mat-badge-after .mat-badge-content{right:auto;left:-14px}.mat-bottom-sheet-container{box-shadow:0 8px 10px -5px #0003,0 16px 24px 2px #00000024,0 6px 30px 5px #0000001f;background:#fff;color:#8a9295}.mat-button,.mat-icon-button,.mat-stroked-button{color:inherit;background:#0000}.mat-button.mat-primary,.mat-icon-button.mat-primary,.mat-stroked-button.mat-primary{color:#0051ff}.mat-button.mat-accent,.mat-icon-button.mat-accent,.mat-stroked-button.mat-accent{color:#00b894}.mat-button.mat-warn,.mat-icon-button.mat-warn,.mat-stroked-button.mat-warn{color:#e17055}.mat-button.mat-accent.mat-button-disabled,.mat-button.mat-button-disabled.mat-button-disabled,.mat-button.mat-primary.mat-button-disabled,.mat-button.mat-warn.mat-button-disabled,.mat-icon-button.mat-accent.mat-button-disabled,.mat-icon-button.mat-button-disabled.mat-button-disabled,.mat-icon-button.mat-primary.mat-button-disabled,.mat-icon-button.mat-warn.mat-button-disabled,.mat-stroked-button.mat-accent.mat-button-disabled,.mat-stroked-button.mat-button-disabled.mat-button-disabled,.mat-stroked-button.mat-primary.mat-button-disabled,.mat-stroked-button.mat-warn.mat-button-disabled{color:#0000001f}.mat-button.mat-primary .mat-button-focus-overlay,.mat-icon-button.mat-primary .mat-button-focus-overlay,.mat-stroked-button.mat-primary .mat-button-focus-overlay{background-color:#0051ff}.mat-button.mat-accent .mat-button-focus-overlay,.mat-icon-button.mat-accent .mat-button-focus-overlay,.mat-stroked-button.mat-accent .mat-button-focus-overlay{background-color:#00b894}.mat-button.mat-warn .mat-button-focus-overlay,.mat-icon-button.mat-warn .mat-button-focus-overlay,.mat-stroked-button.mat-warn .mat-button-focus-overlay{background-color:#e17055}.mat-button.mat-button-disabled .mat-button-focus-overlay,.mat-icon-button.mat-button-disabled .mat-button-focus-overlay,.mat-stroked-button.mat-button-disabled .mat-button-focus-overlay{background-color:initial}.mat-button .mat-ripple-element,.mat-icon-button .mat-ripple-element,.mat-stroked-button .mat-ripple-element{opacity:.1;background-color:currentColor}.mat-button-focus-overlay{background:#000}.mat-stroked-button:not(.mat-button-disabled){border-color:#dfe6e9}.mat-fab,.mat-flat-button,.mat-mini-fab,.mat-raised-button{color:#8a9295;background-color:#fff}.mat-fab.mat-accent,.mat-fab.mat-primary,.mat-flat-button.mat-accent,.mat-flat-button.mat-primary,.mat-mini-fab.mat-accent,.mat-mini-fab.mat-primary,.mat-raised-button.mat-accent,.mat-raised-button.mat-primary{color:#fff}.mat-fab.mat-warn,.mat-flat-button.mat-warn,.mat-mini-fab.mat-warn,.mat-raised-button.mat-warn{color:#000000de}.mat-fab.mat-accent.mat-button-disabled,.mat-fab.mat-button-disabled.mat-button-disabled,.mat-fab.mat-primary.mat-button-disabled,.mat-fab.mat-warn.mat-button-disabled,.mat-flat-button.mat-accent.mat-button-disabled,.mat-flat-button.mat-button-disabled.mat-button-disabled,.mat-flat-button.mat-primary.mat-button-disabled,.mat-flat-button.mat-warn.mat-button-disabled,.mat-mini-fab.mat-accent.mat-button-disabled,.mat-mini-fab.mat-button-disabled.mat-button-disabled,.mat-mini-fab.mat-primary.mat-button-disabled,.mat-mini-fab.mat-warn.mat-button-disabled,.mat-raised-button.mat-accent.mat-button-disabled,.mat-raised-button.mat-button-disabled.mat-button-disabled,.mat-raised-button.mat-primary.mat-button-disabled,.mat-raised-button.mat-warn.mat-button-disabled{color:#0000001f}.mat-fab.mat-primary,.mat-flat-button.mat-primary,.mat-mini-fab.mat-primary,.mat-raised-button.mat-primary{background-color:#0051ff}.mat-fab.mat-accent,.mat-flat-button.mat-accent,.mat-mini-fab.mat-accent,.mat-raised-button.mat-accent{background-color:#00b894}.mat-fab.mat-warn,.mat-flat-button.mat-warn,.mat-mini-fab.mat-warn,.mat-raised-button.mat-warn{background-color:#e17055}.mat-fab.mat-accent.mat-button-disabled,.mat-fab.mat-button-disabled.mat-button-disabled,.mat-fab.mat-primary.mat-button-disabled,.mat-fab.mat-warn.mat-button-disabled,.mat-flat-button.mat-accent.mat-button-disabled,.mat-flat-button.mat-button-disabled.mat-button-disabled,.mat-flat-button.mat-primary.mat-button-disabled,.mat-flat-button.mat-warn.mat-button-disabled,.mat-mini-fab.mat-accent.mat-button-disabled,.mat-mini-fab.mat-button-disabled.mat-button-disabled,.mat-mini-fab.mat-primary.mat-button-disabled,.mat-mini-fab.mat-warn.mat-button-disabled,.mat-raised-button.mat-accent.mat-button-disabled,.mat-raised-button.mat-button-disabled.mat-button-disabled,.mat-raised-button.mat-primary.mat-button-disabled,.mat-raised-button.mat-warn.mat-button-disabled{background-color:#00000012}.mat-fab.mat-accent .mat-ripple-element,.mat-fab.mat-primary .mat-ripple-element,.mat-flat-button.mat-accent .mat-ripple-element,.mat-flat-button.mat-primary .mat-ripple-element,.mat-mini-fab.mat-accent .mat-ripple-element,.mat-mini-fab.mat-primary .mat-ripple-element,.mat-raised-button.mat-accent .mat-ripple-element,.mat-raised-button.mat-primary .mat-ripple-element{background-color:#ffffff1a}.mat-fab.mat-warn .mat-ripple-element,.mat-flat-button.mat-warn .mat-ripple-element,.mat-mini-fab.mat-warn .mat-ripple-element,.mat-raised-button.mat-warn .mat-ripple-element{background-color:#0000001a}.mat-flat-button:not([class*=mat-elevation-z]),.mat-stroked-button:not([class*=mat-elevation-z]){box-shadow:0 0 0 0 #0003,0 0 0 0 #00000024,0 0 0 0 #0000001f}.mat-raised-button:not([class*=mat-elevation-z]){box-shadow:0 3px 1px -2px #0003,0 2px 2px 0 #00000024,0 1px 5px 0 #0000001f}.mat-raised-button:not(.mat-button-disabled):active:not([class*=mat-elevation-z]){box-shadow:0 5px 5px -3px #0003,0 8px 10px 1px #00000024,0 3px 14px 2px #0000001f}.mat-raised-button.mat-button-disabled:not([class*=mat-elevation-z]){box-shadow:0 0 0 0 #0003,0 0 0 0 #00000024,0 0 0 0 #0000001f}.mat-fab:not([class*=mat-elevation-z]),.mat-mini-fab:not([class*=mat-elevation-z]){box-shadow:0 3px 5px -1px #0003,0 6px 10px 0 #00000024,0 1px 18px 0 #0000001f}.mat-fab:not(.mat-button-disabled):active:not([class*=mat-elevation-z]),.mat-mini-fab:not(.mat-button-disabled):active:not([class*=mat-elevation-z]){box-shadow:0 7px 8px -4px #0003,0 12px 17px 2px #00000024,0 5px 22px 4px #0000001f}.mat-fab.mat-button-disabled:not([class*=mat-elevation-z]),.mat-mini-fab.mat-button-disabled:not([class*=mat-elevation-z]){box-shadow:0 0 0 0 #0003,0 0 0 0 #00000024,0 0 0 0 #0000001f}.mat-button-toggle-group,.mat-button-toggle-standalone{box-shadow:0 3px 1px -2px #0003,0 2px 2px 0 #00000024,0 1px 5px 0 #0000001f}.mat-button-toggle-group-appearance-standard,.mat-button-toggle-standalone.mat-button-toggle-appearance-standard{box-shadow:none}.mat-button-toggle{color:#eaeef1}.mat-button-toggle .mat-button-toggle-focus-overlay{background-color:#0000001f}.mat-button-toggle-appearance-standard{color:#8a9295;background:#fff}.mat-button-toggle-appearance-standard .mat-button-toggle-focus-overlay{background-color:#000}.mat-button-toggle-group-appearance-standard .mat-button-toggle+.mat-button-toggle{border-left:1px solid #dfe6e9}[dir=rtl] .mat-button-toggle-group-appearance-standard .mat-button-toggle+.mat-button-toggle{border-left:none;border-right:1px solid #dfe6e9}.mat-button-toggle-group-appearance-standard.mat-button-toggle-vertical .mat-button-toggle+.mat-button-toggle{border-left:none;border-right:none;border-top:1px solid #dfe6e9}.mat-button-toggle-checked{background-color:#dfe6e9;color:#84949a}.mat-button-toggle-checked.mat-button-toggle-appearance-standard{color:#8a9295}.mat-button-toggle-disabled{color:#0000001f;background-color:#eaeef1}.mat-button-toggle-disabled.mat-button-toggle-appearance-standard{background:#fff}.mat-button-toggle-disabled.mat-button-toggle-checked{background-color:#2d3436}.mat-button-toggle-group-appearance-standard,.mat-button-toggle-standalone.mat-button-toggle-appearance-standard{border:1px solid #dfe6e9}.mat-button-toggle-appearance-standard .mat-button-toggle-label-content{line-height:48px}.mat-card{background:#fff;color:#8a9295}.mat-card:not([class*=mat-elevation-z]){box-shadow:0 2px 1px -1px #0003,0 1px 1px 0 #00000024,0 1px 3px 0 #0000001f}.mat-card.mat-card-flat:not([class*=mat-elevation-z]){box-shadow:0 0 0 0 #0003,0 0 0 0 #00000024,0 0 0 0 #0000001f}.mat-card-subtitle{color:#84949a}.mat-checkbox-frame{border-color:#84949a}.mat-checkbox-checkmark{fill:#fff}.mat-checkbox-checkmark-path{stroke:#fff!important}.mat-checkbox-mixedmark{background-color:#fff}.mat-checkbox-checked.mat-primary .mat-checkbox-background,.mat-checkbox-indeterminate.mat-primary .mat-checkbox-background{background-color:#0051ff}.mat-checkbox-checked.mat-accent .mat-checkbox-background,.mat-checkbox-indeterminate.mat-accent .mat-checkbox-background{background-color:#00b894}.mat-checkbox-checked.mat-warn .mat-checkbox-background,.mat-checkbox-indeterminate.mat-warn .mat-checkbox-background{background-color:#e17055}.mat-checkbox-disabled.mat-checkbox-checked .mat-checkbox-background,.mat-checkbox-disabled.mat-checkbox-indeterminate .mat-checkbox-background{background-color:#b0b0b0}.mat-checkbox-disabled:not(.mat-checkbox-checked) .mat-checkbox-frame{border-color:#b0b0b0}.mat-checkbox-disabled .mat-checkbox-label{color:#84949a}.mat-checkbox .mat-ripple-element{background-color:#000}.mat-checkbox-checked:not(.mat-checkbox-disabled).mat-primary .mat-ripple-element,.mat-checkbox:active:not(.mat-checkbox-disabled).mat-primary .mat-ripple-element{background:#0051ff}.mat-checkbox-checked:not(.mat-checkbox-disabled).mat-accent .mat-ripple-element,.mat-checkbox:active:not(.mat-checkbox-disabled).mat-accent .mat-ripple-element{background:#00b894}.mat-checkbox-checked:not(.mat-checkbox-disabled).mat-warn .mat-ripple-element,.mat-checkbox:active:not(.mat-checkbox-disabled).mat-warn .mat-ripple-element{background:#e17055}.mat-chip.mat-standard-chip{background-color:#dfe6e9;color:#8a9295}.mat-chip.mat-standard-chip .mat-chip-remove{color:#8a9295;opacity:.4}.mat-chip.mat-standard-chip:not(.mat-chip-disabled):active{box-shadow:0 3px 3px -2px #0003,0 3px 4px 0 #00000024,0 1px 8px 0 #0000001f}.mat-chip.mat-standard-chip:not(.mat-chip-disabled) .mat-chip-remove:hover{opacity:.54}.mat-chip.mat-standard-chip.mat-chip-disabled{opacity:.4}.mat-chip.mat-standard-chip:after{background:#000}.mat-chip.mat-standard-chip.mat-chip-selected.mat-primary{background-color:#0051ff;color:#fff}.mat-chip.mat-standard-chip.mat-chip-selected.mat-primary .mat-chip-remove{color:#fff;opacity:.4}.mat-chip.mat-standard-chip.mat-chip-selected.mat-primary .mat-ripple-element{background-color:#ffffff1a}.mat-chip.mat-standard-chip.mat-chip-selected.mat-warn{background-color:#e17055;color:#000000de}.mat-chip.mat-standard-chip.mat-chip-selected.mat-warn .mat-chip-remove{color:#000000de;opacity:.4}.mat-chip.mat-standard-chip.mat-chip-selected.mat-warn .mat-ripple-element{background-color:#0000001a}.mat-chip.mat-standard-chip.mat-chip-selected.mat-accent{background-color:#00b894;color:#fff}.mat-chip.mat-standard-chip.mat-chip-selected.mat-accent .mat-chip-remove{color:#fff;opacity:.4}.mat-chip.mat-standard-chip.mat-chip-selected.mat-accent .mat-ripple-element{background-color:#ffffff1a}.mat-table{background:#fff}.mat-table tbody,.mat-table tfoot,.mat-table thead,.mat-table-sticky,[mat-footer-row],[mat-header-row],[mat-row],mat-footer-row,mat-header-row,mat-row{background:inherit}mat-footer-row,mat-header-row,mat-row,td.mat-cell,td.mat-footer-cell,th.mat-header-cell{border-bottom-color:#dfe6e9}.mat-header-cell{color:#84949a}.mat-cell,.mat-footer-cell{color:#8a9295}.mat-calendar-arrow{border-top-color:#0000008a}.mat-datepicker-content .mat-calendar-next-button,.mat-datepicker-content .mat-calendar-previous-button,.mat-datepicker-toggle{color:#0000008a}.mat-calendar-table-header{color:#eaeef1}.mat-calendar-table-header-divider:after{background:#dfe6e9}.mat-calendar-body-label{color:#84949a}.mat-calendar-body-cell-content,.mat-date-range-input-separator{color:#8a9295;border-color:#0000}.mat-calendar-body-disabled>.mat-calendar-body-cell-content:not(.mat-calendar-body-selected):not(.mat-calendar-body-comparison-identical),.mat-form-field-disabled .mat-date-range-input-separator{color:#b2bec3}.mat-calendar-body-in-preview{color:#dfe6e9}.mat-calendar-body-today:not(.mat-calendar-body-selected):not(.mat-calendar-body-comparison-identical){border-color:#eaeef1}.mat-calendar-body-disabled>.mat-calendar-body-today:not(.mat-calendar-body-selected):not(.mat-calendar-body-comparison-identical){border-color:#eaeef1cc}.mat-calendar-body-in-range:before{background:#0051ff33}.mat-calendar-body-comparison-identical,.mat-calendar-body-in-comparison-range:before{background:#f9ab0033}.mat-calendar-body-comparison-bridge-start:before,[dir=rtl] .mat-calendar-body-comparison-bridge-end:before{background:linear-gradient(90deg,#0051ff33 50%,#f9ab0033 0)}.mat-calendar-body-comparison-bridge-end:before,[dir=rtl] .mat-calendar-body-comparison-bridge-start:before{background:linear-gradient(270deg,#0051ff33 50%,#f9ab0033 0)}.mat-calendar-body-in-comparison-range.mat-calendar-body-in-range:after,.mat-calendar-body-in-range>.mat-calendar-body-comparison-identical{background:#a8dab5}.mat-calendar-body-comparison-identical.mat-calendar-body-selected,.mat-calendar-body-in-comparison-range>.mat-calendar-body-selected{background:#46a35e}.mat-calendar-body-selected{background-color:#0051ff;color:#fff}.mat-calendar-body-disabled>.mat-calendar-body-selected{background-color:#0051ff66}.mat-calendar-body-today.mat-calendar-body-selected{box-shadow:inset 0 0 0 1px #fff}.cdk-keyboard-focused .mat-calendar-body-active>.mat-calendar-body-cell-content:not(.mat-calendar-body-selected):not(.mat-calendar-body-comparison-identical),.cdk-program-focused .mat-calendar-body-active>.mat-calendar-body-cell-content:not(.mat-calendar-body-selected):not(.mat-calendar-body-comparison-identical),.mat-calendar-body-cell:not(.mat-calendar-body-disabled):hover>.mat-calendar-body-cell-content:not(.mat-calendar-body-selected):not(.mat-calendar-body-comparison-identical){background-color:#0051ff4d}.mat-datepicker-content{box-shadow:0 2px 4px -1px #0003,0 4px 5px 0 #00000024,0 1px 10px 0 #0000001f;background-color:#fff;color:#8a9295}.mat-datepicker-content.mat-accent .mat-calendar-body-in-range:before{background:#00b89433}.mat-datepicker-content.mat-accent .mat-calendar-body-comparison-identical,.mat-datepicker-content.mat-accent .mat-calendar-body-in-comparison-range:before{background:#f9ab0033}.mat-datepicker-content.mat-accent .mat-calendar-body-comparison-bridge-start:before,.mat-datepicker-content.mat-accent [dir=rtl] .mat-calendar-body-comparison-bridge-end:before{background:linear-gradient(90deg,#00b89433 50%,#f9ab0033 0)}.mat-datepicker-content.mat-accent .mat-calendar-body-comparison-bridge-end:before,.mat-datepicker-content.mat-accent [dir=rtl] .mat-calendar-body-comparison-bridge-start:before{background:linear-gradient(270deg,#00b89433 50%,#f9ab0033 0)}.mat-datepicker-content.mat-accent .mat-calendar-body-in-comparison-range.mat-calendar-body-in-range:after,.mat-datepicker-content.mat-accent .mat-calendar-body-in-range>.mat-calendar-body-comparison-identical{background:#a8dab5}.mat-datepicker-content.mat-accent .mat-calendar-body-comparison-identical.mat-calendar-body-selected,.mat-datepicker-content.mat-accent .mat-calendar-body-in-comparison-range>.mat-calendar-body-selected{background:#46a35e}.mat-datepicker-content.mat-accent .mat-calendar-body-selected{background-color:#00b894;color:#fff}.mat-datepicker-content.mat-accent .mat-calendar-body-disabled>.mat-calendar-body-selected{background-color:#00b89466}.mat-datepicker-content.mat-accent .mat-calendar-body-today.mat-calendar-body-selected{box-shadow:inset 0 0 0 1px #fff}.mat-datepicker-content.mat-accent .cdk-keyboard-focused .mat-calendar-body-active>.mat-calendar-body-cell-content:not(.mat-calendar-body-selected):not(.mat-calendar-body-comparison-identical),.mat-datepicker-content.mat-accent .cdk-program-focused .mat-calendar-body-active>.mat-calendar-body-cell-content:not(.mat-calendar-body-selected):not(.mat-calendar-body-comparison-identical),.mat-datepicker-content.mat-accent .mat-calendar-body-cell:not(.mat-calendar-body-disabled):hover>.mat-calendar-body-cell-content:not(.mat-calendar-body-selected):not(.mat-calendar-body-comparison-identical){background-color:#00b8944d}.mat-datepicker-content.mat-warn .mat-calendar-body-in-range:before{background:#e1705533}.mat-datepicker-content.mat-warn .mat-calendar-body-comparison-identical,.mat-datepicker-content.mat-warn .mat-calendar-body-in-comparison-range:before{background:#f9ab0033}.mat-datepicker-content.mat-warn .mat-calendar-body-comparison-bridge-start:before,.mat-datepicker-content.mat-warn [dir=rtl] .mat-calendar-body-comparison-bridge-end:before{background:linear-gradient(90deg,#e1705533 50%,#f9ab0033 0)}.mat-datepicker-content.mat-warn .mat-calendar-body-comparison-bridge-end:before,.mat-datepicker-content.mat-warn [dir=rtl] .mat-calendar-body-comparison-bridge-start:before{background:linear-gradient(270deg,#e1705533 50%,#f9ab0033 0)}.mat-datepicker-content.mat-warn .mat-calendar-body-in-comparison-range.mat-calendar-body-in-range:after,.mat-datepicker-content.mat-warn .mat-calendar-body-in-range>.mat-calendar-body-comparison-identical{background:#a8dab5}.mat-datepicker-content.mat-warn .mat-calendar-body-comparison-identical.mat-calendar-body-selected,.mat-datepicker-content.mat-warn .mat-calendar-body-in-comparison-range>.mat-calendar-body-selected{background:#46a35e}.mat-datepicker-content.mat-warn .mat-calendar-body-selected{background-color:#e17055;color:#000000de}.mat-datepicker-content.mat-warn .mat-calendar-body-disabled>.mat-calendar-body-selected{background-color:#e1705566}.mat-datepicker-content.mat-warn .mat-calendar-body-today.mat-calendar-body-selected{box-shadow:inset 0 0 0 1px #000000de}.mat-datepicker-content.mat-warn .cdk-keyboard-focused .mat-calendar-body-active>.mat-calendar-body-cell-content:not(.mat-calendar-body-selected):not(.mat-calendar-body-comparison-identical),.mat-datepicker-content.mat-warn .cdk-program-focused .mat-calendar-body-active>.mat-calendar-body-cell-content:not(.mat-calendar-body-selected):not(.mat-calendar-body-comparison-identical),.mat-datepicker-content.mat-warn .mat-calendar-body-cell:not(.mat-calendar-body-disabled):hover>.mat-calendar-body-cell-content:not(.mat-calendar-body-selected):not(.mat-calendar-body-comparison-identical){background-color:#e170554d}.mat-datepicker-content-touch{box-shadow:0 0 0 0 #0003,0 0 0 0 #00000024,0 0 0 0 #0000001f}.mat-datepicker-toggle-active{color:#0051ff}.mat-datepicker-toggle-active.mat-accent{color:#00b894}.mat-datepicker-toggle-active.mat-warn{color:#e17055}.mat-date-range-input-inner[disabled]{color:#b2bec3}.mat-dialog-container{box-shadow:0 11px 15px -7px #0003,0 24px 38px 3px #00000024,0 9px 46px 8px #0000001f;background:#fff;color:#8a9295}.mat-divider{border-top-color:#dfe6e9}.mat-divider-vertical{border-right-color:#dfe6e9}.mat-expansion-panel{background:#fff;color:#8a9295}.mat-expansion-panel:not([class*=mat-elevation-z]){box-shadow:0 3px 1px -2px #0003,0 2px 2px 0 #00000024,0 1px 5px 0 #0000001f}.mat-action-row{border-top-color:#dfe6e9}.mat-expansion-panel .mat-expansion-panel-header.cdk-keyboard-focused:not([aria-disabled=true]),.mat-expansion-panel .mat-expansion-panel-header.cdk-program-focused:not([aria-disabled=true]),.mat-expansion-panel:not(.mat-expanded) .mat-expansion-panel-header:hover:not([aria-disabled=true]){background:#0000000a}@media (hover:none){.mat-expansion-panel:not(.mat-expanded):not([aria-disabled=true]) .mat-expansion-panel-header:hover{background:#fff}}.mat-expansion-panel-header-title{color:#8a9295}.mat-expansion-indicator:after,.mat-expansion-panel-header-description{color:#84949a}.mat-expansion-panel-header[aria-disabled=true]{color:#0000001f}.mat-expansion-panel-header[aria-disabled=true] .mat-expansion-panel-header-description,.mat-expansion-panel-header[aria-disabled=true] .mat-expansion-panel-header-title{color:inherit}.mat-expansion-panel-header{height:48px}.mat-expansion-panel-header.mat-expanded{height:64px}.mat-form-field-label,.mat-hint{color:#84949a99}.mat-form-field.mat-focused .mat-form-field-label{color:#0051ff}.mat-form-field.mat-focused .mat-form-field-label.mat-accent{color:#00b894}.mat-form-field.mat-focused .mat-form-field-label.mat-warn{color:#e17055}.mat-focused .mat-form-field-required-marker{color:#00b894}.mat-form-field-ripple{background-color:#dfe6e9de}.mat-form-field.mat-focused .mat-form-field-ripple{background-color:#0051ff}.mat-form-field.mat-focused .mat-form-field-ripple.mat-accent{background-color:#00b894}.mat-form-field.mat-focused .mat-form-field-ripple.mat-warn{background-color:#e17055}.mat-form-field-type-mat-native-select.mat-focused:not(.mat-form-field-invalid) .mat-form-field-infix:after{color:#0051ff}.mat-form-field-type-mat-native-select.mat-focused:not(.mat-form-field-invalid).mat-accent .mat-form-field-infix:after{color:#00b894}.mat-form-field-type-mat-native-select.mat-focused:not(.mat-form-field-invalid).mat-warn .mat-form-field-infix:after,.mat-form-field.mat-form-field-invalid .mat-form-field-label,.mat-form-field.mat-form-field-invalid .mat-form-field-label .mat-form-field-required-marker,.mat-form-field.mat-form-field-invalid .mat-form-field-label.mat-accent{color:#e17055}.mat-form-field.mat-form-field-invalid .mat-form-field-ripple,.mat-form-field.mat-form-field-invalid .mat-form-field-ripple.mat-accent{background-color:#e17055}.mat-error{color:#e17055}.mat-form-field-appearance-legacy .mat-form-field-label,.mat-form-field-appearance-legacy .mat-hint{color:#84949a}.mat-form-field-appearance-legacy .mat-form-field-underline{background-color:#dfe6e96b}.mat-form-field-appearance-legacy.mat-form-field-disabled .mat-form-field-underline{background-image:linear-gradient(90deg,#dfe6e96b 0,#dfe6e96b 33%,#0000 0);background-size:4px 100%;background-repeat:repeat-x}.mat-form-field-appearance-standard .mat-form-field-underline{background-color:#dfe6e96b}.mat-form-field-appearance-standard.mat-form-field-disabled .mat-form-field-underline{background-image:linear-gradient(90deg,#dfe6e96b 0,#dfe6e96b 33%,#0000 0);background-size:4px 100%;background-repeat:repeat-x}.mat-form-field-appearance-fill .mat-form-field-flex{background-color:#0000000a}.mat-form-field-appearance-fill.mat-form-field-disabled .mat-form-field-flex{background-color:#00000005}.mat-form-field-appearance-fill .mat-form-field-underline:before{background-color:#dfe6e96b}.mat-form-field-appearance-fill.mat-form-field-disabled .mat-form-field-label{color:#b2bec3}.mat-form-field-appearance-fill.mat-form-field-disabled .mat-form-field-underline:before{background-color:initial}.mat-form-field-appearance-outline .mat-form-field-outline{color:#dfe6e91f}.mat-form-field-appearance-outline .mat-form-field-outline-thick{color:#dfe6e9de}.mat-form-field-appearance-outline.mat-focused .mat-form-field-outline-thick{color:#0051ff}.mat-form-field-appearance-outline.mat-focused.mat-accent .mat-form-field-outline-thick{color:#00b894}.mat-form-field-appearance-outline.mat-focused.mat-warn .mat-form-field-outline-thick,.mat-form-field-appearance-outline.mat-form-field-invalid.mat-form-field-invalid .mat-form-field-outline-thick{color:#e17055}.mat-form-field-appearance-outline.mat-form-field-disabled .mat-form-field-label{color:#b2bec3}.mat-form-field-appearance-outline.mat-form-field-disabled .mat-form-field-outline{color:#dfe6e90f}.mat-icon.mat-primary{color:#0051ff}.mat-icon.mat-accent{color:#00b894}.mat-icon.mat-warn{color:#e17055}.mat-form-field-type-mat-native-select .mat-form-field-infix:after{color:#84949a}.mat-form-field-type-mat-native-select.mat-form-field-disabled .mat-form-field-infix:after,.mat-input-element:disabled{color:#b2bec3}.mat-input-element{caret-color:#0051ff}.mat-input-element::placeholder{color:#84949a6b}.mat-input-element::-moz-placeholder{color:#84949a6b}.mat-input-element::-webkit-input-placeholder{color:#84949a6b}.mat-input-element:-ms-input-placeholder{color:#84949a6b}.mat-form-field.mat-accent .mat-input-element{caret-color:#00b894}.mat-form-field-invalid .mat-input-element,.mat-form-field.mat-warn .mat-input-element{caret-color:#e17055}.mat-form-field-type-mat-native-select.mat-form-field-invalid .mat-form-field-infix:after{color:#e17055}.mat-list-base .mat-list-item,.mat-list-base .mat-list-option{color:#8a9295}.mat-list-base .mat-subheader{color:#84949a}.mat-list-item-disabled{background-color:#eaeef1}.mat-action-list .mat-list-item:focus,.mat-action-list .mat-list-item:hover,.mat-list-option:focus,.mat-list-option:hover,.mat-nav-list .mat-list-item:focus,.mat-nav-list .mat-list-item:hover{background:#0000000a}.mat-list-single-selected-option,.mat-list-single-selected-option:focus,.mat-list-single-selected-option:hover{background:#0000001f}.mat-menu-panel{background:#fff}.mat-menu-panel:not([class*=mat-elevation-z]){box-shadow:0 2px 4px -1px #0003,0 4px 5px 0 #00000024,0 1px 10px 0 #0000001f}.mat-menu-item{background:#0000;color:#8a9295}.mat-menu-item[disabled],.mat-menu-item[disabled] .mat-icon-no-color,.mat-menu-item[disabled]:after{color:#eaeef1}.mat-menu-item .mat-icon-no-color,.mat-menu-item-submenu-trigger:after{color:#0000008a}.mat-menu-item-highlighted:not([disabled]),.mat-menu-item.cdk-keyboard-focused:not([disabled]),.mat-menu-item.cdk-program-focused:not([disabled]),.mat-menu-item:hover:not([disabled]){background:#0000000a}.mat-paginator{background:#fff}.mat-paginator,.mat-paginator-page-size .mat-select-trigger{color:#84949a}.mat-paginator-decrement,.mat-paginator-increment{border-top:2px solid #0000008a;border-right:2px solid #0000008a}.mat-paginator-first,.mat-paginator-last{border-top:2px solid #0000008a}.mat-icon-button[disabled] .mat-paginator-decrement,.mat-icon-button[disabled] .mat-paginator-first,.mat-icon-button[disabled] .mat-paginator-increment,.mat-icon-button[disabled] .mat-paginator-last{border-color:#eaeef1}.mat-paginator-container{min-height:56px}.mat-progress-bar-background{fill:#c1e0f8}.mat-progress-bar-buffer{background-color:#c1e0f8}.mat-progress-bar-fill:after{background-color:#0051ff}.mat-progress-bar.mat-accent .mat-progress-bar-background{fill:#bfede4}.mat-progress-bar.mat-accent .mat-progress-bar-buffer{background-color:#bfede4}.mat-progress-bar.mat-accent .mat-progress-bar-fill:after{background-color:#00b894}.mat-progress-bar.mat-warn .mat-progress-bar-background{fill:#f0b8aa}.mat-progress-bar.mat-warn .mat-progress-bar-buffer{background-color:#f0b8aa}.mat-progress-bar.mat-warn .mat-progress-bar-fill:after{background-color:#e17055}.mat-progress-spinner circle,.mat-spinner circle{stroke:#0051ff}.mat-progress-spinner.mat-accent circle,.mat-spinner.mat-accent circle{stroke:#00b894}.mat-progress-spinner.mat-warn circle,.mat-spinner.mat-warn circle{stroke:#e17055}.mat-radio-outer-circle{border-color:#84949a}.mat-radio-button.mat-primary.mat-radio-checked .mat-radio-outer-circle{border-color:#0051ff}.mat-radio-button.mat-primary .mat-radio-inner-circle,.mat-radio-button.mat-primary .mat-radio-ripple .mat-ripple-element:not(.mat-radio-persistent-ripple),.mat-radio-button.mat-primary.mat-radio-checked .mat-radio-persistent-ripple,.mat-radio-button.mat-primary:active .mat-radio-persistent-ripple{background-color:#0051ff}.mat-radio-button.mat-accent.mat-radio-checked .mat-radio-outer-circle{border-color:#00b894}.mat-radio-button.mat-accent .mat-radio-inner-circle,.mat-radio-button.mat-accent .mat-radio-ripple .mat-ripple-element:not(.mat-radio-persistent-ripple),.mat-radio-button.mat-accent.mat-radio-checked .mat-radio-persistent-ripple,.mat-radio-button.mat-accent:active .mat-radio-persistent-ripple{background-color:#00b894}.mat-radio-button.mat-warn.mat-radio-checked .mat-radio-outer-circle{border-color:#e17055}.mat-radio-button.mat-warn .mat-radio-inner-circle,.mat-radio-button.mat-warn .mat-radio-ripple .mat-ripple-element:not(.mat-radio-persistent-ripple),.mat-radio-button.mat-warn.mat-radio-checked .mat-radio-persistent-ripple,.mat-radio-button.mat-warn:active .mat-radio-persistent-ripple{background-color:#e17055}.mat-radio-button.mat-radio-disabled .mat-radio-outer-circle,.mat-radio-button.mat-radio-disabled.mat-radio-checked .mat-radio-outer-circle{border-color:#eaeef1}.mat-radio-button.mat-radio-disabled .mat-radio-inner-circle,.mat-radio-button.mat-radio-disabled .mat-radio-ripple .mat-ripple-element{background-color:#eaeef1}.mat-radio-button.mat-radio-disabled .mat-radio-label-content{color:#eaeef1}.mat-radio-button .mat-ripple-element{background-color:#000}.mat-select-value{color:#8a9295}.mat-select-placeholder{color:#84949a6b}.mat-select-disabled .mat-select-value{color:#b2bec3}.mat-select-arrow{color:#84949a}.mat-select-panel{background:#fff}.mat-select-panel:not([class*=mat-elevation-z]){box-shadow:0 2px 4px -1px #0003,0 4px 5px 0 #00000024,0 1px 10px 0 #0000001f}.mat-select-panel .mat-option.mat-selected:not(.mat-option-multiple){background:#0000001f}.mat-form-field.mat-focused.mat-primary .mat-select-arrow{color:#0051ff}.mat-form-field.mat-focused.mat-accent .mat-select-arrow{color:#00b894}.mat-form-field .mat-select.mat-select-invalid .mat-select-arrow,.mat-form-field.mat-focused.mat-warn .mat-select-arrow{color:#e17055}.mat-form-field .mat-select.mat-select-disabled .mat-select-arrow{color:#b2bec3}.mat-drawer,.mat-drawer-container{background-color:#fff;color:#8a9295}.mat-drawer.mat-drawer-push{background-color:#fff}.mat-drawer:not(.mat-drawer-side){box-shadow:0 8px 10px -5px #0003,0 16px 24px 2px #00000024,0 6px 30px 5px #0000001f}.mat-drawer-side{border-right:1px solid #dfe6e9}.mat-drawer-side.mat-drawer-end,[dir=rtl] .mat-drawer-side{border-left:1px solid #dfe6e9;border-right:none}[dir=rtl] .mat-drawer-side.mat-drawer-end{border-left:none;border-right:1px solid #dfe6e9}.mat-drawer-backdrop.mat-drawer-shown{background-color:#0009}.mat-slide-toggle.mat-checked .mat-slide-toggle-thumb{background-color:#00b894}.mat-slide-toggle.mat-checked .mat-slide-toggle-bar{background-color:#00b8948a}.mat-slide-toggle.mat-checked .mat-ripple-element{background-color:#00b894}.mat-slide-toggle.mat-primary.mat-checked .mat-slide-toggle-thumb{background-color:#0051ff}.mat-slide-toggle.mat-primary.mat-checked .mat-slide-toggle-bar{background-color:#0051ff8a}.mat-slide-toggle.mat-primary.mat-checked .mat-ripple-element{background-color:#0051ff}.mat-slide-toggle.mat-warn.mat-checked .mat-slide-toggle-thumb{background-color:#e17055}.mat-slide-toggle.mat-warn.mat-checked .mat-slide-toggle-bar{background-color:#e170558a}.mat-slide-toggle.mat-warn.mat-checked .mat-ripple-element{background-color:#e17055}.mat-slide-toggle:not(.mat-checked) .mat-ripple-element{background-color:#000}.mat-slide-toggle-thumb{box-shadow:0 2px 1px -1px #0003,0 1px 1px 0 #00000024,0 1px 3px 0 #0000001f;background-color:#fafafa}.mat-slide-toggle-bar{background-color:#eaeef1}.mat-slider-track-background{background-color:#00000042}.mat-primary .mat-slider-thumb,.mat-primary .mat-slider-thumb-label,.mat-primary .mat-slider-track-fill{background-color:#0051ff}.mat-primary .mat-slider-thumb-label-text{color:#fff}.mat-primary .mat-slider-focus-ring{background-color:#0051ff33}.mat-accent .mat-slider-thumb,.mat-accent .mat-slider-thumb-label,.mat-accent .mat-slider-track-fill{background-color:#00b894}.mat-accent .mat-slider-thumb-label-text{color:#fff}.mat-accent .mat-slider-focus-ring{background-color:#00b89433}.mat-warn .mat-slider-thumb,.mat-warn .mat-slider-thumb-label,.mat-warn .mat-slider-track-fill{background-color:#e17055}.mat-warn .mat-slider-thumb-label-text{color:#000000de}.mat-warn .mat-slider-focus-ring{background-color:#e1705533}.cdk-focused .mat-slider-track-background,.mat-slider:hover .mat-slider-track-background{background-color:#00000061}.mat-slider-disabled .mat-slider-thumb,.mat-slider-disabled .mat-slider-track-background,.mat-slider-disabled .mat-slider-track-fill,.mat-slider-disabled:hover .mat-slider-track-background{background-color:#00000042}.mat-slider-min-value .mat-slider-focus-ring{background-color:#0000001f}.mat-slider-min-value.mat-slider-thumb-label-showing .mat-slider-thumb,.mat-slider-min-value.mat-slider-thumb-label-showing .mat-slider-thumb-label{background-color:#000000de}.mat-slider-min-value.mat-slider-thumb-label-showing.cdk-focused .mat-slider-thumb,.mat-slider-min-value.mat-slider-thumb-label-showing.cdk-focused .mat-slider-thumb-label{background-color:#00000042}.mat-slider-min-value:not(.mat-slider-thumb-label-showing) .mat-slider-thumb{border-color:#00000042;background-color:initial}.mat-slider-min-value:not(.mat-slider-thumb-label-showing).cdk-focused .mat-slider-thumb,.mat-slider-min-value:not(.mat-slider-thumb-label-showing):hover .mat-slider-thumb{border-color:#00000061}.mat-slider-min-value:not(.mat-slider-thumb-label-showing).cdk-focused.mat-slider-disabled .mat-slider-thumb,.mat-slider-min-value:not(.mat-slider-thumb-label-showing):hover.mat-slider-disabled .mat-slider-thumb{border-color:#00000042}.mat-slider-has-ticks .mat-slider-wrapper:after{border-color:#000000b3}.mat-slider-horizontal .mat-slider-ticks{background-image:repeating-linear-gradient(90deg,#000000b3,#000000b3 2px,#0000 0,#0000);background-image:-moz-repeating-linear-gradient(.0001deg,#000000b3,#000000b3 2px,#0000 0,#0000)}.mat-slider-vertical .mat-slider-ticks{background-image:repeating-linear-gradient(180deg,#000000b3,#000000b3 2px,#0000 0,#0000)}.mat-step-header.cdk-keyboard-focused,.mat-step-header.cdk-program-focused,.mat-step-header:hover{background-color:#0000000a}@media (hover:none){.mat-step-header:hover{background:none}}.mat-step-header .mat-step-label,.mat-step-header .mat-step-optional{color:#84949a}.mat-step-header .mat-step-icon{background-color:#84949a;color:#fff}.mat-step-header .mat-step-icon-selected,.mat-step-header .mat-step-icon-state-done,.mat-step-header .mat-step-icon-state-edit{background-color:#0051ff;color:#fff}.mat-step-header.mat-accent .mat-step-icon{color:#fff}.mat-step-header.mat-accent .mat-step-icon-selected,.mat-step-header.mat-accent .mat-step-icon-state-done,.mat-step-header.mat-accent .mat-step-icon-state-edit{background-color:#00b894;color:#fff}.mat-step-header.mat-warn .mat-step-icon{color:#000000de}.mat-step-header.mat-warn .mat-step-icon-selected,.mat-step-header.mat-warn .mat-step-icon-state-done,.mat-step-header.mat-warn .mat-step-icon-state-edit{background-color:#e17055;color:#000000de}.mat-step-header .mat-step-icon-state-error{background-color:initial;color:#e17055}.mat-step-header .mat-step-label.mat-step-label-active{color:#8a9295}.mat-step-header .mat-step-label.mat-step-label-error{color:#e17055}.mat-stepper-horizontal,.mat-stepper-vertical{background-color:#fff}.mat-stepper-vertical-line:before{border-left-color:#dfe6e9}.mat-horizontal-stepper-header:after,.mat-horizontal-stepper-header:before,.mat-stepper-horizontal-line{border-top-color:#dfe6e9}.mat-horizontal-stepper-header{height:72px}.mat-stepper-label-position-bottom .mat-horizontal-stepper-header,.mat-vertical-stepper-header{padding:24px}.mat-stepper-vertical-line:before{top:-16px;bottom:-16px}.mat-stepper-label-position-bottom .mat-horizontal-stepper-header:after,.mat-stepper-label-position-bottom .mat-horizontal-stepper-header:before,.mat-stepper-label-position-bottom .mat-stepper-horizontal-line{top:36px}.mat-sort-header-arrow{color:#84949a}.mat-tab-header,.mat-tab-nav-bar{border-bottom:1px solid #dfe6e9}.mat-tab-group-inverted-header .mat-tab-header,.mat-tab-group-inverted-header .mat-tab-nav-bar{border-top:1px solid #dfe6e9;border-bottom:none}.mat-tab-label,.mat-tab-link{color:#8a9295}.mat-tab-label.mat-tab-disabled,.mat-tab-link.mat-tab-disabled{color:#b2bec3}.mat-tab-header-pagination-chevron{border-color:#8a9295}.mat-tab-header-pagination-disabled .mat-tab-header-pagination-chevron{border-color:#b2bec3}.mat-tab-group[class*=mat-background-] .mat-tab-header,.mat-tab-nav-bar[class*=mat-background-]{border-bottom:none;border-top:none}.mat-tab-group.mat-primary .mat-tab-label.cdk-keyboard-focused:not(.mat-tab-disabled),.mat-tab-group.mat-primary .mat-tab-label.cdk-program-focused:not(.mat-tab-disabled),.mat-tab-group.mat-primary .mat-tab-link.cdk-keyboard-focused:not(.mat-tab-disabled),.mat-tab-group.mat-primary .mat-tab-link.cdk-program-focused:not(.mat-tab-disabled),.mat-tab-nav-bar.mat-primary .mat-tab-label.cdk-keyboard-focused:not(.mat-tab-disabled),.mat-tab-nav-bar.mat-primary .mat-tab-label.cdk-program-focused:not(.mat-tab-disabled),.mat-tab-nav-bar.mat-primary .mat-tab-link.cdk-keyboard-focused:not(.mat-tab-disabled),.mat-tab-nav-bar.mat-primary .mat-tab-link.cdk-program-focused:not(.mat-tab-disabled){background-color:#c1e0f84d}.mat-tab-group.mat-primary .mat-ink-bar,.mat-tab-nav-bar.mat-primary .mat-ink-bar{background-color:#0051ff}.mat-tab-group.mat-primary.mat-background-primary>.mat-tab-header .mat-ink-bar,.mat-tab-group.mat-primary.mat-background-primary>.mat-tab-link-container .mat-ink-bar,.mat-tab-nav-bar.mat-primary.mat-background-primary>.mat-tab-header .mat-ink-bar,.mat-tab-nav-bar.mat-primary.mat-background-primary>.mat-tab-link-container .mat-ink-bar{background-color:#fff}.mat-tab-group.mat-accent .mat-tab-label.cdk-keyboard-focused:not(.mat-tab-disabled),.mat-tab-group.mat-accent .mat-tab-label.cdk-program-focused:not(.mat-tab-disabled),.mat-tab-group.mat-accent .mat-tab-link.cdk-keyboard-focused:not(.mat-tab-disabled),.mat-tab-group.mat-accent .mat-tab-link.cdk-program-focused:not(.mat-tab-disabled),.mat-tab-nav-bar.mat-accent .mat-tab-label.cdk-keyboard-focused:not(.mat-tab-disabled),.mat-tab-nav-bar.mat-accent .mat-tab-label.cdk-program-focused:not(.mat-tab-disabled),.mat-tab-nav-bar.mat-accent .mat-tab-link.cdk-keyboard-focused:not(.mat-tab-disabled),.mat-tab-nav-bar.mat-accent .mat-tab-link.cdk-program-focused:not(.mat-tab-disabled){background-color:#bfede44d}.mat-tab-group.mat-accent .mat-ink-bar,.mat-tab-nav-bar.mat-accent .mat-ink-bar{background-color:#00b894}.mat-tab-group.mat-accent.mat-background-accent>.mat-tab-header .mat-ink-bar,.mat-tab-group.mat-accent.mat-background-accent>.mat-tab-link-container .mat-ink-bar,.mat-tab-nav-bar.mat-accent.mat-background-accent>.mat-tab-header .mat-ink-bar,.mat-tab-nav-bar.mat-accent.mat-background-accent>.mat-tab-link-container .mat-ink-bar{background-color:#fff}.mat-tab-group.mat-warn .mat-tab-label.cdk-keyboard-focused:not(.mat-tab-disabled),.mat-tab-group.mat-warn .mat-tab-label.cdk-program-focused:not(.mat-tab-disabled),.mat-tab-group.mat-warn .mat-tab-link.cdk-keyboard-focused:not(.mat-tab-disabled),.mat-tab-group.mat-warn .mat-tab-link.cdk-program-focused:not(.mat-tab-disabled),.mat-tab-nav-bar.mat-warn .mat-tab-label.cdk-keyboard-focused:not(.mat-tab-disabled),.mat-tab-nav-bar.mat-warn .mat-tab-label.cdk-program-focused:not(.mat-tab-disabled),.mat-tab-nav-bar.mat-warn .mat-tab-link.cdk-keyboard-focused:not(.mat-tab-disabled),.mat-tab-nav-bar.mat-warn .mat-tab-link.cdk-program-focused:not(.mat-tab-disabled){background-color:#f0b8aa4d}.mat-tab-group.mat-warn .mat-ink-bar,.mat-tab-nav-bar.mat-warn .mat-ink-bar{background-color:#e17055}.mat-tab-group.mat-warn.mat-background-warn>.mat-tab-header .mat-ink-bar,.mat-tab-group.mat-warn.mat-background-warn>.mat-tab-link-container .mat-ink-bar,.mat-tab-nav-bar.mat-warn.mat-background-warn>.mat-tab-header .mat-ink-bar,.mat-tab-nav-bar.mat-warn.mat-background-warn>.mat-tab-link-container .mat-ink-bar{background-color:#000000de}.mat-tab-group.mat-background-primary .mat-tab-label.cdk-keyboard-focused:not(.mat-tab-disabled),.mat-tab-group.mat-background-primary .mat-tab-label.cdk-program-focused:not(.mat-tab-disabled),.mat-tab-group.mat-background-primary .mat-tab-link.cdk-keyboard-focused:not(.mat-tab-disabled),.mat-tab-group.mat-background-primary .mat-tab-link.cdk-program-focused:not(.mat-tab-disabled),.mat-tab-nav-bar.mat-background-primary .mat-tab-label.cdk-keyboard-focused:not(.mat-tab-disabled),.mat-tab-nav-bar.mat-background-primary .mat-tab-label.cdk-program-focused:not(.mat-tab-disabled),.mat-tab-nav-bar.mat-background-primary .mat-tab-link.cdk-keyboard-focused:not(.mat-tab-disabled),.mat-tab-nav-bar.mat-background-primary .mat-tab-link.cdk-program-focused:not(.mat-tab-disabled){background-color:#c1e0f84d}.mat-tab-group.mat-background-primary>.mat-tab-header,.mat-tab-group.mat-background-primary>.mat-tab-header-pagination,.mat-tab-group.mat-background-primary>.mat-tab-link-container,.mat-tab-nav-bar.mat-background-primary>.mat-tab-header,.mat-tab-nav-bar.mat-background-primary>.mat-tab-header-pagination,.mat-tab-nav-bar.mat-background-primary>.mat-tab-link-container{background-color:#0051ff}.mat-tab-group.mat-background-primary>.mat-tab-header .mat-tab-label,.mat-tab-group.mat-background-primary>.mat-tab-link-container .mat-tab-link,.mat-tab-nav-bar.mat-background-primary>.mat-tab-header .mat-tab-label,.mat-tab-nav-bar.mat-background-primary>.mat-tab-link-container .mat-tab-link{color:#fff}.mat-tab-group.mat-background-primary>.mat-tab-header .mat-tab-label.mat-tab-disabled,.mat-tab-group.mat-background-primary>.mat-tab-link-container .mat-tab-link.mat-tab-disabled,.mat-tab-nav-bar.mat-background-primary>.mat-tab-header .mat-tab-label.mat-tab-disabled,.mat-tab-nav-bar.mat-background-primary>.mat-tab-link-container .mat-tab-link.mat-tab-disabled{color:#fff6}.mat-tab-group.mat-background-primary>.mat-tab-header .mat-focus-indicator:before,.mat-tab-group.mat-background-primary>.mat-tab-header-pagination .mat-tab-header-pagination-chevron,.mat-tab-group.mat-background-primary>.mat-tab-links .mat-focus-indicator:before,.mat-tab-nav-bar.mat-background-primary>.mat-tab-header .mat-focus-indicator:before,.mat-tab-nav-bar.mat-background-primary>.mat-tab-header-pagination .mat-tab-header-pagination-chevron,.mat-tab-nav-bar.mat-background-primary>.mat-tab-links .mat-focus-indicator:before{border-color:#fff}.mat-tab-group.mat-background-primary>.mat-tab-header-pagination-disabled .mat-tab-header-pagination-chevron,.mat-tab-nav-bar.mat-background-primary>.mat-tab-header-pagination-disabled .mat-tab-header-pagination-chevron{border-color:#fff6}.mat-tab-group.mat-background-primary>.mat-tab-header .mat-ripple-element,.mat-tab-group.mat-background-primary>.mat-tab-link-container .mat-ripple-element,.mat-tab-nav-bar.mat-background-primary>.mat-tab-header .mat-ripple-element,.mat-tab-nav-bar.mat-background-primary>.mat-tab-link-container .mat-ripple-element{background-color:#ffffff1f}.mat-tab-group.mat-background-accent .mat-tab-label.cdk-keyboard-focused:not(.mat-tab-disabled),.mat-tab-group.mat-background-accent .mat-tab-label.cdk-program-focused:not(.mat-tab-disabled),.mat-tab-group.mat-background-accent .mat-tab-link.cdk-keyboard-focused:not(.mat-tab-disabled),.mat-tab-group.mat-background-accent .mat-tab-link.cdk-program-focused:not(.mat-tab-disabled),.mat-tab-nav-bar.mat-background-accent .mat-tab-label.cdk-keyboard-focused:not(.mat-tab-disabled),.mat-tab-nav-bar.mat-background-accent .mat-tab-label.cdk-program-focused:not(.mat-tab-disabled),.mat-tab-nav-bar.mat-background-accent .mat-tab-link.cdk-keyboard-focused:not(.mat-tab-disabled),.mat-tab-nav-bar.mat-background-accent .mat-tab-link.cdk-program-focused:not(.mat-tab-disabled){background-color:#bfede44d}.mat-tab-group.mat-background-accent>.mat-tab-header,.mat-tab-group.mat-background-accent>.mat-tab-header-pagination,.mat-tab-group.mat-background-accent>.mat-tab-link-container,.mat-tab-nav-bar.mat-background-accent>.mat-tab-header,.mat-tab-nav-bar.mat-background-accent>.mat-tab-header-pagination,.mat-tab-nav-bar.mat-background-accent>.mat-tab-link-container{background-color:#00b894}.mat-tab-group.mat-background-accent>.mat-tab-header .mat-tab-label,.mat-tab-group.mat-background-accent>.mat-tab-link-container .mat-tab-link,.mat-tab-nav-bar.mat-background-accent>.mat-tab-header .mat-tab-label,.mat-tab-nav-bar.mat-background-accent>.mat-tab-link-container .mat-tab-link{color:#fff}.mat-tab-group.mat-background-accent>.mat-tab-header .mat-tab-label.mat-tab-disabled,.mat-tab-group.mat-background-accent>.mat-tab-link-container .mat-tab-link.mat-tab-disabled,.mat-tab-nav-bar.mat-background-accent>.mat-tab-header .mat-tab-label.mat-tab-disabled,.mat-tab-nav-bar.mat-background-accent>.mat-tab-link-container .mat-tab-link.mat-tab-disabled{color:#fff6}.mat-tab-group.mat-background-accent>.mat-tab-header .mat-focus-indicator:before,.mat-tab-group.mat-background-accent>.mat-tab-header-pagination .mat-tab-header-pagination-chevron,.mat-tab-group.mat-background-accent>.mat-tab-links .mat-focus-indicator:before,.mat-tab-nav-bar.mat-background-accent>.mat-tab-header .mat-focus-indicator:before,.mat-tab-nav-bar.mat-background-accent>.mat-tab-header-pagination .mat-tab-header-pagination-chevron,.mat-tab-nav-bar.mat-background-accent>.mat-tab-links .mat-focus-indicator:before{border-color:#fff}.mat-tab-group.mat-background-accent>.mat-tab-header-pagination-disabled .mat-tab-header-pagination-chevron,.mat-tab-nav-bar.mat-background-accent>.mat-tab-header-pagination-disabled .mat-tab-header-pagination-chevron{border-color:#fff6}.mat-tab-group.mat-background-accent>.mat-tab-header .mat-ripple-element,.mat-tab-group.mat-background-accent>.mat-tab-link-container .mat-ripple-element,.mat-tab-nav-bar.mat-background-accent>.mat-tab-header .mat-ripple-element,.mat-tab-nav-bar.mat-background-accent>.mat-tab-link-container .mat-ripple-element{background-color:#ffffff1f}.mat-tab-group.mat-background-warn .mat-tab-label.cdk-keyboard-focused:not(.mat-tab-disabled),.mat-tab-group.mat-background-warn .mat-tab-label.cdk-program-focused:not(.mat-tab-disabled),.mat-tab-group.mat-background-warn .mat-tab-link.cdk-keyboard-focused:not(.mat-tab-disabled),.mat-tab-group.mat-background-warn .mat-tab-link.cdk-program-focused:not(.mat-tab-disabled),.mat-tab-nav-bar.mat-background-warn .mat-tab-label.cdk-keyboard-focused:not(.mat-tab-disabled),.mat-tab-nav-bar.mat-background-warn .mat-tab-label.cdk-program-focused:not(.mat-tab-disabled),.mat-tab-nav-bar.mat-background-warn .mat-tab-link.cdk-keyboard-focused:not(.mat-tab-disabled),.mat-tab-nav-bar.mat-background-warn .mat-tab-link.cdk-program-focused:not(.mat-tab-disabled){background-color:#f0b8aa4d}.mat-tab-group.mat-background-warn>.mat-tab-header,.mat-tab-group.mat-background-warn>.mat-tab-header-pagination,.mat-tab-group.mat-background-warn>.mat-tab-link-container,.mat-tab-nav-bar.mat-background-warn>.mat-tab-header,.mat-tab-nav-bar.mat-background-warn>.mat-tab-header-pagination,.mat-tab-nav-bar.mat-background-warn>.mat-tab-link-container{background-color:#e17055}.mat-tab-group.mat-background-warn>.mat-tab-header .mat-tab-label,.mat-tab-group.mat-background-warn>.mat-tab-link-container .mat-tab-link,.mat-tab-nav-bar.mat-background-warn>.mat-tab-header .mat-tab-label,.mat-tab-nav-bar.mat-background-warn>.mat-tab-link-container .mat-tab-link{color:#000000de}.mat-tab-group.mat-background-warn>.mat-tab-header .mat-tab-label.mat-tab-disabled,.mat-tab-group.mat-background-warn>.mat-tab-link-container .mat-tab-link.mat-tab-disabled,.mat-tab-nav-bar.mat-background-warn>.mat-tab-header .mat-tab-label.mat-tab-disabled,.mat-tab-nav-bar.mat-background-warn>.mat-tab-link-container .mat-tab-link.mat-tab-disabled{color:#0006}.mat-tab-group.mat-background-warn>.mat-tab-header .mat-focus-indicator:before,.mat-tab-group.mat-background-warn>.mat-tab-header-pagination .mat-tab-header-pagination-chevron,.mat-tab-group.mat-background-warn>.mat-tab-links .mat-focus-indicator:before,.mat-tab-nav-bar.mat-background-warn>.mat-tab-header .mat-focus-indicator:before,.mat-tab-nav-bar.mat-background-warn>.mat-tab-header-pagination .mat-tab-header-pagination-chevron,.mat-tab-nav-bar.mat-background-warn>.mat-tab-links .mat-focus-indicator:before{border-color:#000000de}.mat-tab-group.mat-background-warn>.mat-tab-header-pagination-disabled .mat-tab-header-pagination-chevron,.mat-tab-nav-bar.mat-background-warn>.mat-tab-header-pagination-disabled .mat-tab-header-pagination-chevron{border-color:#0006}.mat-tab-group.mat-background-warn>.mat-tab-header .mat-ripple-element,.mat-tab-group.mat-background-warn>.mat-tab-link-container .mat-ripple-element,.mat-tab-nav-bar.mat-background-warn>.mat-tab-header .mat-ripple-element,.mat-tab-nav-bar.mat-background-warn>.mat-tab-link-container .mat-ripple-element{background-color:#0000001f}.mat-toolbar{background:#f1f4f6;color:#8a9295}.mat-toolbar.mat-primary{background:#0051ff;color:#fff}.mat-toolbar.mat-accent{background:#00b894;color:#fff}.mat-toolbar.mat-warn{background:#e17055;color:#000000de}.mat-toolbar .mat-focused .mat-form-field-ripple,.mat-toolbar .mat-form-field-ripple,.mat-toolbar .mat-form-field-underline{background-color:currentColor}.mat-toolbar .mat-focused .mat-form-field-label,.mat-toolbar .mat-form-field-label,.mat-toolbar .mat-form-field.mat-focused .mat-select-arrow,.mat-toolbar .mat-select-arrow,.mat-toolbar .mat-select-value{color:inherit}.mat-toolbar .mat-input-element{caret-color:currentColor}.mat-toolbar-multiple-rows{min-height:64px}.mat-toolbar-row,.mat-toolbar-single-row{height:64px}@media (max-width:599px){.mat-toolbar-multiple-rows{min-height:56px}.mat-toolbar-row,.mat-toolbar-single-row{height:56px}}.mat-tree{background:#fff}.mat-nested-tree-node,.mat-tree-node{color:#8a9295}.mat-tree-node{min-height:48px}.mat-snack-bar-container{color:#ffffffb3;background:#323232;box-shadow:0 3px 5px -1px #0003,0 6px 10px 0 #00000024,0 1px 18px 0 #0000001f}.mat-simple-snackbar-action{color:#00b894}.mat-badge-content{font-weight:600;font-size:12px;font-family:Roboto,Helvetica Neue,sans-serif}.mat-badge-small .mat-badge-content{font-size:9px}.mat-badge-large .mat-badge-content{font-size:24px}.mat-h1,.mat-headline,.mat-typography h1{font:400 24px/32px Roboto,Helvetica Neue,sans-serif;letter-spacing:normal;margin:0 0 16px}.mat-h2,.mat-title,.mat-typography h2{font:500 20px/32px Roboto,Helvetica Neue,sans-serif;letter-spacing:normal;margin:0 0 16px}.mat-h3,.mat-subheading-2,.mat-typography h3{font:400 16px/28px Roboto,Helvetica Neue,sans-serif;letter-spacing:normal;margin:0 0 16px}.mat-h4,.mat-subheading-1,.mat-typography h4{font:400 15px/24px Roboto,Helvetica Neue,sans-serif;letter-spacing:normal;margin:0 0 16px}.mat-h5,.mat-typography h5{font:400 calc(14px * .83)/20px Roboto,Helvetica Neue,sans-serif;margin:0 0 12px}.mat-h6,.mat-typography h6{font:400 calc(14px * .67)/20px Roboto,Helvetica Neue,sans-serif;margin:0 0 12px}.mat-body-2,.mat-body-strong{font:500 14px/24px Roboto,Helvetica Neue,sans-serif;letter-spacing:normal}.mat-body,.mat-body-1,.mat-typography{font:400 14px/20px Roboto,Helvetica Neue,sans-serif;letter-spacing:normal}.mat-body p,.mat-body-1 p,.mat-typography p{margin:0 0 12px}.mat-caption,.mat-small{font:400 12px/20px Roboto,Helvetica Neue,sans-serif;letter-spacing:normal}.mat-display-4,.mat-typography .mat-display-4{font:300 112px/112px Roboto,Helvetica Neue,sans-serif;letter-spacing:-.05em;margin:0 0 56px}.mat-display-3,.mat-typography .mat-display-3{font:400 56px/56px Roboto,Helvetica Neue,sans-serif;letter-spacing:-.02em;margin:0 0 64px}.mat-display-2,.mat-typography .mat-display-2{font:400 45px/48px Roboto,Helvetica Neue,sans-serif;letter-spacing:-.005em;margin:0 0 64px}.mat-display-1,.mat-typography .mat-display-1{font:400 34px/40px Roboto,Helvetica Neue,sans-serif;letter-spacing:normal;margin:0 0 64px}.mat-bottom-sheet-container{font:400 14px/20px Roboto,Helvetica Neue,sans-serif;letter-spacing:normal}.mat-button,.mat-fab,.mat-flat-button,.mat-icon-button,.mat-mini-fab,.mat-raised-button,.mat-stroked-button{font-family:Roboto,Helvetica Neue,sans-serif;font-size:16px;font-weight:500}.mat-button-toggle,.mat-card{font-family:Roboto,Helvetica Neue,sans-serif}.mat-card-title{font-size:24px;font-weight:500}.mat-card-header .mat-card-title{font-size:20px}.mat-card-content,.mat-card-subtitle{font-size:14px}.mat-checkbox{font-family:Roboto,Helvetica Neue,sans-serif}.mat-checkbox-layout .mat-checkbox-label{line-height:24px}.mat-chip{font-size:14px;font-weight:500}.mat-chip .mat-chip-remove.mat-icon,.mat-chip .mat-chip-trailing-icon.mat-icon{font-size:18px}.mat-table{font-family:Roboto,Helvetica Neue,sans-serif}.mat-header-cell{font-size:12px;font-weight:500}.mat-cell,.mat-footer-cell{font-size:14px}.mat-calendar{font-family:Roboto,Helvetica Neue,sans-serif}.mat-calendar-body{font-size:13px}.mat-calendar-body-label,.mat-calendar-period-button{font-size:16px;font-weight:500}.mat-calendar-table-header th{font-size:11px;font-weight:400}.mat-dialog-title{font:500 20px/32px Roboto,Helvetica Neue,sans-serif;letter-spacing:normal}.mat-expansion-panel-header{font-family:Roboto,Helvetica Neue,sans-serif;font-size:15px;font-weight:400}.mat-expansion-panel-content{font:400 14px/20px Roboto,Helvetica Neue,sans-serif;letter-spacing:normal}.mat-form-field{font-size:inherit;font-weight:400;line-height:1.125;font-family:Roboto,Helvetica Neue,sans-serif;letter-spacing:normal}.mat-form-field-wrapper{padding-bottom:1.34375em}.mat-form-field-prefix .mat-icon,.mat-form-field-suffix .mat-icon{font-size:150%;line-height:1.125}.mat-form-field-prefix .mat-icon-button,.mat-form-field-suffix .mat-icon-button{height:1.5em;width:1.5em}.mat-form-field-prefix .mat-icon-button .mat-icon,.mat-form-field-suffix .mat-icon-button .mat-icon{height:1.125em;line-height:1.125}.mat-form-field-infix{padding:.5em 0;border-top:.84375em solid #0000}.mat-form-field-can-float .mat-input-server:focus+.mat-form-field-label-wrapper .mat-form-field-label,.mat-form-field-can-float.mat-form-field-should-float .mat-form-field-label{transform:translateY(-1.34373em) scale(.75);width:133.3333533333%}.mat-form-field-can-float .mat-input-server[label]:not(:label-shown)+.mat-form-field-label-wrapper .mat-form-field-label{transform:translateY(-1.34372em) scale(.75);width:133.3333633333%}.mat-form-field-label-wrapper{top:-.84375em;padding-top:.84375em}.mat-form-field-label{top:1.34375em}.mat-form-field-underline{bottom:1.34375em}.mat-form-field-subscript-wrapper{font-size:75%;margin-top:.6666666667em;top:calc(100% - 1.7916666667em)}.mat-form-field-appearance-legacy .mat-form-field-wrapper{padding-bottom:1.25em}.mat-form-field-appearance-legacy .mat-form-field-infix{padding:.4375em 0}.mat-form-field-appearance-legacy.mat-form-field-can-float .mat-input-server:focus+.mat-form-field-label-wrapper .mat-form-field-label,.mat-form-field-appearance-legacy.mat-form-field-can-float.mat-form-field-should-float .mat-form-field-label{transform:translateY(-1.28125em) scale(.75) perspective(100px) translateZ(.00106px);-ms-transform:translateY(-1.28119em) scale(.75);width:133.3333933333%}.mat-form-field-appearance-legacy.mat-form-field-can-float .mat-form-field-autofill-control:-webkit-autofill+.mat-form-field-label-wrapper .mat-form-field-label{transform:translateY(-1.28125em) scale(.75) perspective(100px) translateZ(.00107px);-ms-transform:translateY(-1.28118em) scale(.75);width:133.3334033333%}.mat-form-field-appearance-legacy.mat-form-field-can-float .mat-input-server[label]:not(:label-shown)+.mat-form-field-label-wrapper .mat-form-field-label{transform:translateY(-1.28125em) scale(.75) perspective(100px) translateZ(.00108px);-ms-transform:translateY(-1.28117em) scale(.75);width:133.3334133333%}.mat-form-field-appearance-legacy .mat-form-field-label{top:1.28125em}.mat-form-field-appearance-legacy .mat-form-field-underline{bottom:1.25em}.mat-form-field-appearance-legacy .mat-form-field-subscript-wrapper{margin-top:.5416666667em;top:calc(100% - 1.6666666667em)}@media print{.mat-form-field-appearance-legacy.mat-form-field-can-float .mat-input-server:focus+.mat-form-field-label-wrapper .mat-form-field-label,.mat-form-field-appearance-legacy.mat-form-field-can-float.mat-form-field-should-float .mat-form-field-label{transform:translateY(-1.28116em) scale(.75)}.mat-form-field-appearance-legacy.mat-form-field-can-float .mat-form-field-autofill-control:-webkit-autofill+.mat-form-field-label-wrapper .mat-form-field-label{transform:translateY(-1.28115em) scale(.75)}.mat-form-field-appearance-legacy.mat-form-field-can-float .mat-input-server[label]:not(:label-shown)+.mat-form-field-label-wrapper .mat-form-field-label{transform:translateY(-1.28114em) scale(.75)}}.mat-form-field-appearance-fill .mat-form-field-infix{padding:.25em 0 .75em}.mat-form-field-appearance-fill .mat-form-field-label{top:1.09375em;margin-top:-.5em}.mat-form-field-appearance-fill.mat-form-field-can-float .mat-input-server:focus+.mat-form-field-label-wrapper .mat-form-field-label,.mat-form-field-appearance-fill.mat-form-field-can-float.mat-form-field-should-float .mat-form-field-label{transform:translateY(-.59373em) scale(.75);width:133.3333533333%}.mat-form-field-appearance-fill.mat-form-field-can-float .mat-input-server[label]:not(:label-shown)+.mat-form-field-label-wrapper .mat-form-field-label{transform:translateY(-.59372em) scale(.75);width:133.3333633333%}.mat-form-field-appearance-outline .mat-form-field-infix{padding:1em 0}.mat-form-field-appearance-outline .mat-form-field-label{top:1.84375em;margin-top:-.25em}.mat-form-field-appearance-outline.mat-form-field-can-float .mat-input-server:focus+.mat-form-field-label-wrapper .mat-form-field-label,.mat-form-field-appearance-outline.mat-form-field-can-float.mat-form-field-should-float .mat-form-field-label{transform:translateY(-1.59373em) scale(.75);width:133.3333533333%}.mat-form-field-appearance-outline.mat-form-field-can-float .mat-input-server[label]:not(:label-shown)+.mat-form-field-label-wrapper .mat-form-field-label{transform:translateY(-1.59372em) scale(.75);width:133.3333633333%}.mat-grid-tile-footer,.mat-grid-tile-header{font-size:14px}.mat-grid-tile-footer .mat-line,.mat-grid-tile-header .mat-line{white-space:nowrap;overflow:hidden;text-overflow:ellipsis;display:block;box-sizing:border-box}.mat-grid-tile-footer .mat-line:nth-child(n+2),.mat-grid-tile-header .mat-line:nth-child(n+2){font-size:12px}input.mat-input-element{margin-top:-.0625em}.mat-menu-item{font-family:Roboto,Helvetica Neue,sans-serif;font-size:14px;font-weight:400}.mat-paginator,.mat-paginator-page-size .mat-select-trigger{font-family:Roboto,Helvetica Neue,sans-serif;font-size:12px}.mat-radio-button,.mat-select{font-family:Roboto,Helvetica Neue,sans-serif}.mat-select-trigger{height:1.125em}.mat-slide-toggle-content,.mat-slider-thumb-label-text{font-family:Roboto,Helvetica Neue,sans-serif}.mat-slider-thumb-label-text{font-size:12px;font-weight:500}.mat-stepper-horizontal,.mat-stepper-vertical{font-family:Roboto,Helvetica Neue,sans-serif}.mat-step-label{font-size:14px;font-weight:400}.mat-step-sub-label-error{font-weight:400}.mat-step-label-error{font-size:14px}.mat-step-label-selected{font-size:14px;font-weight:500}.mat-tab-group,.mat-tab-label,.mat-tab-link{font-family:Roboto,Helvetica Neue,sans-serif}.mat-tab-label,.mat-tab-link{font-size:16px;font-weight:500}.mat-toolbar,.mat-toolbar h1,.mat-toolbar h2,.mat-toolbar h3,.mat-toolbar h4,.mat-toolbar h5,.mat-toolbar h6{font:500 20px/32px Roboto,Helvetica Neue,sans-serif;letter-spacing:normal;margin:0}.mat-tooltip{font-family:Roboto,Helvetica Neue,sans-serif;font-size:10px;padding-top:6px;padding-bottom:6px}.mat-tooltip-handset{font-size:14px;padding-top:8px;padding-bottom:8px}.mat-list-item,.mat-list-option{font-family:Roboto,Helvetica Neue,sans-serif}.mat-list-base .mat-list-item{font-size:16px}.mat-list-base .mat-list-item .mat-line{white-space:nowrap;overflow:hidden;text-overflow:ellipsis;display:block;box-sizing:border-box}.mat-list-base .mat-list-item .mat-line:nth-child(n+2){font-size:14px}.mat-list-base .mat-list-option{font-size:16px}.mat-list-base .mat-list-option .mat-line{white-space:nowrap;overflow:hidden;text-overflow:ellipsis;display:block;box-sizing:border-box}.mat-list-base .mat-list-option .mat-line:nth-child(n+2){font-size:14px}.mat-list-base .mat-subheader{font-family:Roboto,Helvetica Neue,sans-serif;font-size:14px;font-weight:500}.mat-list-base[dense] .mat-list-item{font-size:12px}.mat-list-base[dense] .mat-list-item .mat-line{white-space:nowrap;overflow:hidden;text-overflow:ellipsis;display:block;box-sizing:border-box}.mat-list-base[dense] .mat-list-item .mat-line:nth-child(n+2),.mat-list-base[dense] .mat-list-option{font-size:12px}.mat-list-base[dense] .mat-list-option .mat-line{white-space:nowrap;overflow:hidden;text-overflow:ellipsis;display:block;box-sizing:border-box}.mat-list-base[dense] .mat-list-option .mat-line:nth-child(n+2){font-size:12px}.mat-list-base[dense] .mat-subheader{font-family:Roboto,Helvetica Neue,sans-serif;font-size:12px;font-weight:500}.mat-option{font-family:Roboto,Helvetica Neue,sans-serif;font-size:16px}.mat-optgroup-label{font:500 14px/24px Roboto,Helvetica Neue,sans-serif;letter-spacing:normal}.mat-simple-snackbar{font-family:Roboto,Helvetica Neue,sans-serif;font-size:14px}.mat-simple-snackbar-action{line-height:1;font-family:inherit;font-size:inherit;font-weight:500}.mat-tree{font-family:Roboto,Helvetica Neue,sans-serif}.mat-nested-tree-node,.mat-tree-node{font-weight:400;font-size:14px}:root{--space-3xs:2px;--space-2xs:4px;--space-xs:8px;--space-s:12px;--space-m:16px;--space-l:20px;--space-xl:24px;--space-2xl:32px;--space-3xl:40px;--space-4xl:48px;--space-5xl:72px;--space-6xl:96px}:root .pt-m{padding-top:var(--space-m)}:root .pt-2xl{padding-top:var(--space-2xl)}',
          ],
          encapsulation: 2,
        }));
      var A = a("GwgX");
      class N {
        constructor(e, t) {
          (this.router = e), (this.deviceDetectService = t);
        }
        canActivate(e, t) {
          return (
            "no.ssr" == w.a.name
              ? this.router.navigateByUrl("/trading/forex")
              : this.deviceDetectService.isBrowser &&
                (window.location.href = "/"),
            !1
          );
        }
      }
      (N.ɵfac = function (e) {
        return new (e || N)(
          r["\u0275\u0275inject"](m.d),
          r["\u0275\u0275inject"](T.a)
        );
      }),
        (N.ɵprov = r["\u0275\u0275defineInjectable"]({
          token: N,
          factory: N.ɵfac,
        }));
      var z = a("G9dS"),
        j = a("a4Kx"),
        F = a("B2EK");
      class E {
        constructor(e, t, a) {
          (this.response = e),
            (this.deviceDetectService = t),
            (this.translateService = a);
        }
        canActivate() {
          return (
            this.deviceDetectService.isBrowser
              ? (window.location.href = "/404")
              : (this.response.status(404),
                this.response.send(
                  `<!DOCTYPE html>\n<html lang="${this.translateService.currentLang.toLowerCase()}">\n<head>\n  <meta charset="UTF-8">\n  <meta http-equiv="X-UA-Compatible"\n      content="IE=edge">\n  <meta name="viewport"\n      content="width=device-width, initial-scale=1.0">\n  <title>${this.translateService.instant(
                    F.a.NotFound404.title
                  )}</title>\n  <meta name="description"\n      content="${this.translateService.instant(
                    F.a.NotFound404.description
                  )}">\n  <meta name="robots" content="noindex, nofollow">\n  <meta name="googlebot" content="noindex">\n  <link rel="preload"\n      href="https://direct-website.azureedge.net/fonts/futura-font/FuturaPT-Medium.woff2"\n      crossorigin=""\n      as="font"\n      type="font/woff2">\n  <style>\n    @font-face {\n      font-family: "Futura";\n      src: url("https://direct-website.azureedge.net/fonts/futura-font/FuturaPT-Medium.woff2");\n    }\n\n    body {\n      position: relative;\n      margin: 0;\n      padding: 0;\n    }\n\n    main {\n      background-color: #fff;\n      max-width: 1200px;\n      margin: auto;\n      padding-top: 20px;\n      height: 80vh;\n      background-image: url(https://direct-website.azureedge.net/assets/img/sections/section-404-hero/bg-404.webp);\n      background-repeat: no-repeat;\n      background-position: center;\n    }\n\n    .logo-404 {\n      text-align: left;\n      padding-left: 20px;\n    }\n\n    .logo-404 img {\n      width: 110px;\n    }\n\n    .main-wrapper-404 {\n      display: flex;\n      justify-content: center;\n      align-items: center;\n      margin-top: 30px;\n    }\n\n    .content-404 {\n      display: flex;\n      justify-content: space-evenly;\n      align-items: center;\n      flex-direction: column;\n      height: 550px;\n    }\n\n    .content-404 h1 {\n      font-size: 110px;\n      font-family: "Futura", "Inter", "Segoe UI", Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";\n      margin: 0;\n      font-weight: 400;\n    }\n\n    .content-404 h3 {\n      font-size: 34px;\n      font-family: "Futura", "Inter", "Segoe UI", Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";\n      margin: 50px 0;\n      margin: 0;\n      font-weight: 400;\n      padding-bottom: 30px;\n    }\n\n    .content-404 a {\n      background: #303135;\n      color: #fff;\n      padding: 24px 20px;\n      border-radius: 9px;\n      font-size: 18px;\n      font-weight: 500;\n      text-decoration: none;\n      font-family: "Inter", "Segoe UI", Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";\n    }\n\n    .support-container-404 {\n      position: fixed;\n      right: 0;\n      top: 45%;\n      background: #303135;\n      border-radius: 4px 0 0 4px;\n    }\n\n    .support-container-404 a {\n      text-decoration: none;\n      color: #fff;\n      display: flex;\n      justify-content: center;\n      align-items: center;\n      flex-direction: column;\n      font-family: "Inter", "Segoe UI", Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";\n      padding: 7px 10px;\n    }\n\n    .support-container-404 a img {\n      margin-bottom: 3px;\n    }\n\n    .support-container-404 a span {\n      font-size: 11px;\n      line-height: 1.1;\n    }\n\n    .support-button,\n    .support-button br {\n      display: none;\n    }\n\n    .support-button img {\n      margin-right: 10px;\n    }\n\n    .support-button mark {\n      background: #fff;\n      width: 38px;\n      height: 38px;\n      border-radius: 3px;\n      display: inline-flex;\n      align-items: center;\n      justify-content: center;\n      margin-left: 0.5rem;\n    }\n\n    @media (max-width: 1024px) {\n\n      .logo-404 {\n        text-align: center;\n        padding-left: 0px;\n      }\n\n      .logo-404 img {\n        width: 80px;\n      }\n\n      .content-404 {\n        height: 350px;\n      }\n\n      .content-404 h1 {\n        font-size: 50px;\n      }\n\n      .content-404 h3 {\n        font-size: 26px;\n      }\n\n      .content-404 a {\n        padding: 20px 16px;\n        font-size: 16px;\n        font-weight: 400;\n      }\n\n      .support-container-404 {\n        display: none;\n      }\n\n      .support-button {\n        display: flex;\n        align-items: center;\n      }\n    }\n  </style>\n</head>\n<body>\n  <main>\n    <header class="logo-404">\n      <a href="/"\n        ng-reflect-link="/">\n        <img alt="FxPro Logo"\n            class="logo-desktop"\n            src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48ZGVmcz48c3R5bGU+LmNscy0xe2ZpbGw6I2Y0MTExMjt9LmNscy0ye2ZpbGw6I2ZmZjt9PC9zdHlsZT48L2RlZnM+PHRpdGxlPmxvZ288L3RpdGxlPjxnIGlkPSJMYXllcl8yIiBkYXRhLW5hbWU9IkxheWVyIDIiPjxnIGlkPSJMYXllcl8xLTIiIGRhdGEtbmFtZT0iTGF5ZXIgMSI+PHJlY3QgY2xhc3M9ImNscy0xIiB3aWR0aD0iNTEyIiBoZWlnaHQ9IjUxMiIvPjxwYXRoIGNsYXNzPSJjbHMtMiIgZD0iTTE1OC4yOSwxNzMuMjNINzYuOHYzLjg0YzkuMzkuNDMsMTIuMzcsMS43MSwxMi4zNywxMS41MnY2Ni4xM2MwLDEwLjI0LTMsMTEuMDktMTIuMzcsMTEuNTJ2My40MWg0NS42NXYtMy40MWMtMTEuNTItLjQzLTE0LjA4LTEuNzEtMTQuMDgtMTEuNTJWMjIzLjE1SDEyNWMxMi4zNywwLDE4LjM1LDMsMjAuNDgsMTQuMDhoMy44NFYyMDMuMDloLTMuODRjLTEuNzEsMTAuMjQtNS4xMiwxMi44LTIwLjQ4LDEyLjhIMTA4LjM3VjE4NS4xN2MwLTMuODQuODUtNC42OSw1LjU1LTQuNjloMTQuNTFjMTkuMiwwLDIyLjYxLDMuNDEsMjYsMTQuMDhoMy44NFoiLz48cGF0aCBjbGFzcz0iY2xzLTIiIGQ9Ik0yMjAuMTYsMjU5Ljg0bC0xOC43Ny0yNy43MywxMC4yNC0xMi44YzYuODMtOC4xMSwxMC42Ny0xMi4zNywxNi42NC0xMi44di0zLjg0SDIwMS44MXYzLjg0YzQuNjksMCw2LjgzLDEuMjgsNi44Myw0LjI3LDAsMi41Ni0zLDYtNS41NSw4LjUzbC02LDYuODMtNi44My0xMC4yNGMtMS43MS0yLjEzLTMtMy44NC0zLTZzMi41Ni0zLjQxLDYuODMtMy40MXYtMy44NEgxNTguNzJ2My44NGM1LjEyLDEuMjgsNy4yNSw0LjI3LDkuODEsOC4xMUwxODYsMjQwLjIxbC0xNC41MSwxNy4wN2MtNS4xMiw2LTcuNjgsOC4xMS0xMy42NSw5djMuNDFoMjZ2LTMuNDFjLTMuNDEsMC03LjI1LS44NS03LjI1LTNzMi41Ni01LjEyLDYuODMtMTAuMjRsNi03LjI1LDcuMjUsMTAuNjdjMi41NiwzLjg0LDMuODQsNS41NSwzLjg0LDYuODMsMCwxLjcxLTIuNTYsMi41Ni03LjI1LDIuNTZ2My40MWgzNi4yN3YtMy40MUMyMjYuNTYsMjY2LjY3LDIyNCwyNjUuODEsMjIwLjE2LDI1OS44NFoiLz48cGF0aCBjbGFzcz0iY2xzLTIiIGQ9Ik0yODEuMTcsMTczLjIzSDIzNS41MnYzLjg0YzkuODEuNDMsMTIuMzcsMS43MSwxMi4zNywxMS41MnY2Ni4xM2MwLDEwLjI0LTIuNTYsMTEuMDktMTIuMzcsMTEuNTJ2My40MWg0NC44di0zLjQxYy0xMC4yNC0uNDMtMTIuOC0xLjcxLTEyLjgtMTEuNTJWMjI5LjU1aDEyLjhjMjQuNzUsMCwzOC05LjgxLDM4LTI4LjE2QzMxNy44NywxODUuNiwzMDcuNjMsMTczLjIzLDI4MS4xNywxNzMuMjNaTTI2Ny4wOSwyMjRWMTg0LjMyYzAtMy40MSwxLjI4LTUuNTUsOC4xMS01LjU1LDEyLjgsMCwyMi42MSw3LjI1LDIyLjYxLDIwLjQ4QzI5Ny44MSwyMTQuNjEsMjg5LjcxLDIyNCwyNjcuMDksMjI0WiIvPjxwYXRoIGNsYXNzPSJjbHMtMiIgZD0iTTM2My41MiwyMDEuMzljLTguMTEsMC0xMy4yMyw2LjQtMTUuNzksMTIuMzdoLS40M1YyMDMuNTJjMC0xLjI4LDAtMi4xMy0uODUtMi4xMy0xLjI4LDAtMTcuMDcsNC4yNy0yNC4zMiw1LjU1djMuODRjNi40LDAsOC4xMSwxLjI4LDguMTEsOC41M3YzOC44M2MwLDYtMi41Niw3LjI1LTguMTEsOC4xMXYzLjQxaDM1LjQxdi0zLjQxYy02LjQsMC0xMC4yNC0xLjcxLTEwLjI0LTlWMjE5LjczYzIuMTMtMy40MSw0LjY5LTUuNTUsNy4yNS01LjU1YTguMSw4LjEsMCwwLDEsMy44NCwxLjI4YzEuMjguODUsMywzLDYuODMsM2E3LjY1LDcuNjUsMCwwLDAsNy42OC03LjY4QzM3My4zMywyMDYuNTEsMzcwLjM1LDIwMS4zOSwzNjMuNTIsMjAxLjM5WiIvPjxwYXRoIGNsYXNzPSJjbHMtMiIgZD0iTTQwNC40OCwyMDEuMzljLTE5LjIsMC0zMi40MywxNC45My0zMi40MywzNS40MXMxMy4yMywzNS40MSwzMi40MywzNS40MSwzMi40My0xNC45MywzMi40My0zNS40MVM0MjMuNjgsMjAxLjM5LDQwNC40OCwyMDEuMzlabTAsNjQuODVjLTEwLjI0LDAtMTQuMDgtOS0xNC4wOC0yOS40NHM0LjI3LTI5LjQ0LDE0LjA4LTI5LjQ0YzEwLjI0LDAsMTQuMDgsOSwxNC4wOCwyOS40NEM0MTksMjU3LjI4LDQxNC43MiwyNjYuMjQsNDA0LjQ4LDI2Ni4yNFoiLz48cGF0aCBjbGFzcz0iY2xzLTIiIGQ9Ik03Ny4wOSwzMDNoMjUuNDZ2NC4xSDkyVjMzNS42SDg3LjU2VjMwNy4xMkg3Ny4wOVoiLz48cGF0aCBjbGFzcz0iY2xzLTIiIGQ9Ik0xMTIuOTMsMzEyLjI2YTEwLjI1LDEwLjI1LDAsMCwxLDUuMzEtMS40MlYzMTVhNy45Miw3LjkyLDAsMCwwLTguNzUsNy41OXYxM2gtNC4zM1YzMTFoNC4zM3Y1LjMxQTguOTEsOC45MSwwLDAsMSwxMTIuOTMsMzEyLjI2WiIvPjxwYXRoIGNsYXNzPSJjbHMtMiIgZD0iTTEzNi45LDMzNS42di0zLjQ1cS0yLjc1LDMuNjMtOC42MSwzLjYzYTkuODUsOS44NSwwLDAsMS00LjQ5LTEsNy4xNyw3LjE3LDAsMCwxLTMtMi43LDcuMjYsNy4yNiwwLDAsMS0xLTMuODYsNi4zMiw2LjMyLDAsMCwxLDIuNDQtNS4yNCwxMSwxMSwwLDAsMSw2LjgyLTJoNy44MnYtMS4xNmE1LjA5LDUuMDksMCwwLDAtMS42MS00LDYuODYsNi44NiwwLDAsMC00LjY4LTEuNDIsMTMuMzksMTMuMzksMCwwLDAtNy41OSwyLjY1bC0xLjgxLTNhMjIuNDksMjIuNDksMCwwLDEsNC45MS0yLjQ5LDE2Ljc1LDE2Ljc1LDAsMCwxLDUuMzgtLjc3cTQuNjEsMCw3LjEyLDIuMjZhOC4xNiw4LjE2LDAsMCwxLDIuNTYsNi4zbDAsMTYuMlptLTIuNTgtNC44NmE1Ljc5LDUuNzksMCwwLDAsMi41NC0zLjg5di0yLjQ3aC03LjIxYTguNDQsOC40NCwwLDAsMC00LjM1Ljg4LDMsMywwLDAsMC0xLjQyLDIuNzksMy42MSwzLjYxLDAsMCwwLDEuNDQsMyw2LjEzLDYuMTMsMCwwLDAsMy44NiwxLjEyQTguODMsOC44MywwLDAsMCwxMzQuMzIsMzMwLjc0WiIvPjxwYXRoIGNsYXNzPSJjbHMtMiIgZD0iTTE3MS44NiwzMDEuMDdWMzM1LjZoLTQuMzN2LTQuODlhOS43Nyw5Ljc3LDAsMCwxLTMuNzUsMy43OSwxMC45MSwxMC45MSwwLDAsMS01LjQ3LDEuMzMsMTEuNzUsMTEuNzUsMCwwLDEtNi4xNy0xLjYxLDExLDExLDAsMCwxLTQuMTctNC40NywxNCwxNCwwLDAsMS0xLjQ5LTYuNTQsMTMuNTcsMTMuNTcsMCwwLDEsMS40OS02LjQ1LDExLDExLDAsMCwxLDQuMTctNC40LDExLjgsMTEuOCwwLDAsMSw2LjEyLTEuNTgsMTEuMzYsMTEuMzYsMCwwLDEsNS41NCwxLjMsOS4zMiw5LjMyLDAsMCwxLDMuNzIsMy43N3YtMTQuOFpNMTYzLjUsMzMxYTcuODYsNy44NiwwLDAsMCwzLTMuMTIsMTAuMTYsMTAuMTYsMCwwLDAsMC05LjA4LDcuODQsNy44NCwwLDAsMC0zLTMuMTIsOC4yOCw4LjI4LDAsMCwwLTQuMzEtMS4xMiw4LjE4LDguMTgsMCwwLDAtNC4zMSwxLjE0LDgsOCwwLDAsMC0zLDMuMTQsMTAuMDYsMTAuMDYsMCwwLDAsMCw5LDcuODQsNy44NCwwLDAsMCwzLDMuMTIsOC44Niw4Ljg2LDAsMCwwLDguNjEsMFoiLz48cGF0aCBjbGFzcz0iY2xzLTIiIGQ9Ik0xOTkuMDksMzE0LjIycTIuOTMsMy4zOCwyLjkzLDkuMzhjMCwuNjIsMCwxLjA5LDAsMS40SDE4Mi41MmE4LjM3LDguMzcsMCwwLDAsMi43Nyw1LjI2LDguMTksOC4xOSwwLDAsMCw1LjU2LDIsMTAuNDYsMTAuNDYsMCwwLDAsNC4wNy0uNzksOS44Miw5LjgyLDAsMCwwLDMuMjgtMi4yNGwyLjM4LDIuNDdhMTIuNDgsMTIuNDgsMCwwLDEtNC4zNywzLDE0LjYyLDE0LjYyLDAsMCwxLTUuNjgsMS4wNywxMy4wNywxMy4wNywwLDAsMS02LjQ1LTEuNTYsMTAuOTQsMTAuOTQsMCwwLDEtNC4zNy00LjQsMTQuMTUsMTQuMTUsMCwwLDEsMC0xMi45MiwxMS4zNiwxMS4zNiwwLDAsMSw0LjM1LTQuNDIsMTIuNTYsMTIuNTYsMCwwLDEsNi4zOC0xLjZRMTk2LjE1LDMxMC44NCwxOTkuMDksMzE0LjIyWm0tMSw3LjQyYTcuMTQsNy4xNCwwLDAsMC03LjY0LTcuMjIsNy43OSw3Ljc5LDAsMCwwLTUuNDIsMiw4LjIxLDguMjEsMCwwLDAtMi41OCw1LjI2WiIvPjxwYXRoIGNsYXNzPSJjbHMtMiIgZD0iTTIyMC41NSwzMDNIMjI1djI4LjUzaDE0LjI0djQuMDVIMjIwLjU1WiIvPjxwYXRoIGNsYXNzPSJjbHMtMiIgZD0iTTI0OC41OSwzMDEuOTVhMywzLDAsMCwxLDAsNCwyLjc1LDIuNzUsMCwwLDEtMy44NiwwLDMsMywwLDAsMSwwLTQsMi43NSwyLjc1LDAsMCwxLDMuODYsMFptLTQuMDcsOWg0LjMzVjMzNS42aC00LjMzWiIvPjxwYXRoIGNsYXNzPSJjbHMtMiIgZD0iTTI3NC40OSwzMzUuNmwtNy44Ny0xMi00Ljc5LDV2N0gyNTcuNVYzMDEuMDdoNC4zM3YyMkwyNzMuNzUsMzExaDUuMDdsLTkuMTgsOS41NCwxMC4wNiwxNS4wOFoiLz48cGF0aCBjbGFzcz0iY2xzLTIiIGQ9Ik0zMDEuNzcsMzE0LjIycTIuOTMsMy4zOCwyLjkzLDkuMzhjMCwuNjIsMCwxLjA5LDAsMS40SDI4NS4yYTguMzgsOC4zOCwwLDAsMCwyLjc3LDUuMjYsOC4xOSw4LjE5LDAsMCwwLDUuNTYsMiwxMC40NiwxMC40NiwwLDAsMCw0LjA3LS43OSw5LjgzLDkuODMsMCwwLDAsMy4yOC0yLjI0bDIuMzcsMi40N2ExMi40NCwxMi40NCwwLDAsMS00LjM3LDMsMTQuNiwxNC42LDAsMCwxLTUuNjgsMS4wNywxMy4wNiwxMy4wNiwwLDAsMS02LjQ1LTEuNTYsMTAuOTIsMTAuOTIsMCwwLDEtNC4zNy00LjQsMTQuMTcsMTQuMTcsMCwwLDEsMC0xMi45MiwxMS4zNywxMS4zNywwLDAsMSw0LjM1LTQuNDIsMTIuNTYsMTIuNTYsMCwwLDEsNi4zOC0xLjZRMjk4Ljg0LDMxMC44NCwzMDEuNzcsMzE0LjIyWm0tMSw3LjQyYTcuMTQsNy4xNCwwLDAsMC03LjYzLTcuMjIsNy43OCw3Ljc4LDAsMCwwLTUuNDIsMiw4LjE5LDguMTksMCwwLDAtMi41OCw1LjI2WiIvPjxwYXRoIGNsYXNzPSJjbHMtMiIgZD0iTTMzNy44NSwzMzUuNnYtMy40NXEtMi43NCwzLjYzLTguNjEsMy42M2E5Ljg1LDkuODUsMCwwLDEtNC40OS0xLDcuMTgsNy4xOCwwLDAsMS0zLTIuNyw3LjMsNy4zLDAsMCwxLTEtMy44Niw2LjMyLDYuMzIsMCwwLDEsMi40NC01LjI0LDExLDExLDAsMCwxLDYuODItMmg3Ljgydi0xLjE2YTUuMDksNS4wOSwwLDAsMC0xLjYxLTQsNi44NSw2Ljg1LDAsMCwwLTQuNjgtMS40MiwxMy4zOCwxMy4zOCwwLDAsMC03LjU5LDIuNjVsLTEuODItM2EyMi40NiwyMi40NiwwLDAsMSw0LjkxLTIuNDksMTYuNzMsMTYuNzMsMCwwLDEsNS4zOC0uNzdxNC42MSwwLDcuMTIsMi4yNmE4LjE4LDguMTgsMCwwLDEsMi41Niw2LjNsMCwxNi4yWm0tMi41OC00Ljg2YTUuNzksNS43OSwwLDAsMCwyLjU0LTMuODl2LTIuNDdoLTcuMjJhOC40Myw4LjQzLDAsMCwwLTQuMzUuODgsMywzLDAsMCwwLTEuNDIsMi43OSwzLjYxLDMuNjEsMCwwLDAsMS40NCwzLDYuMTUsNi4xNSwwLDAsMCwzLjg3LDEuMTJBOC44Myw4LjgzLDAsMCwwLDMzNS4yNiwzMzAuNzRaIi8+PHBhdGggY2xhc3M9ImNscy0yIiBkPSJNMzg0LjQ3LDMwNS45MWExMC4xNCwxMC4xNCwwLDAsMSwzLjMzLDguMXEwLDUuNDUtMy4zNSw4LjQ1dC05LjQsM2gtOC4xVjMzNS42aC00LjQ3VjMwM0gzNzVRMzgxLjE0LDMwMywzODQuNDcsMzA1LjkxWm0tMy4xOSwxMy42NmE2LjYxLDYuNjEsMCwwLDAsMi4yNC01LjQyLDYuMzYsNi4zNiwwLDAsMC0yLjI0LTUuMjhxLTIuMjMtMS43OS02LjQyLTEuNzlsLTcuOTEsMHYxNC4yOWg3LjkxUTM3OSwzMjEuNDEsMzgxLjI4LDMxOS41N1oiLz48cGF0aCBjbGFzcz0iY2xzLTIiIGQ9Ik00MDEuMDYsMzEyLjI2YTEwLjI2LDEwLjI2LDAsMCwxLDUuMzEtMS40MlYzMTVhNy45MSw3LjkxLDAsMCwwLTguNzUsNy41OXYxM2gtNC4zM1YzMTFoNC4zM3Y1LjMxQTguOTEsOC45MSwwLDAsMSw0MDEuMDYsMzEyLjI2WiIvPjxwYXRoIGNsYXNzPSJjbHMtMiIgZD0iTTQyNy44NSwzMTIuNDJhMTEuMzksMTEuMzksMCwwLDEsNC40Nyw0LjQsMTMuNzcsMTMuNzcsMCwwLDEsMCwxMi45MiwxMS4zMiwxMS4zMiwwLDAsMS00LjQ3LDQuNDMsMTQuMzksMTQuMzksMCwwLDEtMTMuMTIsMCwxMS4zOCwxMS4zOCwwLDAsMS00LjQ3LTQuNCwxMy44NSwxMy44NSwwLDAsMSwwLTEyLjk0LDExLjQsMTEuNCwwLDAsMSw0LjQ3LTQuNCwxNC4zOSwxNC4zOSwwLDAsMSwxMy4xMywwWk00MTcsMzE1LjczYTcuNjksNy42OSwwLDAsMC0yLjkzLDMuMSw5LjQ3LDkuNDcsMCwwLDAtMSw0LjQ5LDkuNzQsOS43NCwwLDAsMCwxLDQuNTZBNy41LDcuNSwwLDAsMCw0MTcsMzMxYTguOTIsOC45MiwwLDAsMCw4LjU3LDAsNy40OSw3LjQ5LDAsMCwwLDIuOTMtMy4wOSw5LjY5LDkuNjksMCwwLDAsMS4wNS00LjU2LDkuNDMsOS40MywwLDAsMC0xLjA1LTQuNDksNy42OCw3LjY4LDAsMCwwLTIuOTMtMy4xLDguNzcsOC43NywwLDAsMC04LjU3LDBaIi8+PC9nPjwvZz48L3N2Zz4=">\n      </a>\n    </header>\n    <section class="main-wrapper-404">\n      <div class="content-404">\n        <h1>404</h1>\n        <h3>${this.translateService.instant(
                    "page_404_sectionHero_Title"
                  )}</h3>\n        <a href="/"\n          class="button-404">\n          ${this.translateService.instant(
                    "back_to_main_page"
                  )}\n        </a>\n        <a href="/help-section/faq"\n          class="support-button">\n          <img src="https://direct-website.azureedge.net/assets/img/icons/headset.icon.svg"\n              alt="Support"><span class="text">${this.translateService.instant(
                    "helpSectionButton"
                  )}</span>\n          <mark>\n            <svg width="6"\n                height="11"\n                viewBox="0 0 6 11"\n                fill="none"\n                xmlns="http://www.w3.org/2000/svg">\n              <path d="M5.79922 6.09961L1.29922 10.7996C0.999219 11.0996 0.499219 11.0996 0.299219 10.7996C-0.000781253 10.4996 -0.000781253 9.99961 0.299219 9.69961L4.29922 5.49961L0.299219 1.29961C-0.000781253 0.999609 -0.000781253 0.499609 0.299219 0.199609C0.599219 -0.100391 1.09922 -0.100391 1.29922 0.199609L5.79922 4.99961C5.89922 5.09961 5.99922 5.29961 5.99922 5.49961C5.99922 5.69961 5.89922 5.89961 5.79922 6.09961Z"\n                fill="#303135" />\n            </svg>\n          </mark>\n        </a>\n      </div>\n      <div class="support-container-404">\n        <a href="/help-section/faq">\n          <img src="https://direct-website.azureedge.net/assets/img/icons/headset.icon.svg"\n              alt="Support">\n          <span>\n          ${this.translateService.instant(
                    "global_support"
                  )}\n          </span>\n        </a>\n      </div>\n    </section>\n  </main>\n</body>\n</html>`
                )),
            !1
          );
        }
      }
      (E.ɵfac = function (e) {
        return new (e || E)(
          r["\u0275\u0275inject"](j.a, 8),
          r["\u0275\u0275inject"](T.a),
          r["\u0275\u0275inject"](p.d)
        );
      }),
        (E.ɵprov = r["\u0275\u0275defineInjectable"]({
          token: E,
          factory: E.ɵfac,
        }));
      const O = [
        {
          path: "",
          canActivate: [N],
          pathMatch: "full",
          loadChildren: () =>
            a
              .e(15)
              .then(a.bind(null, "ogBq"))
              .then((e) => e.EmptyModule),
        },
        {
          path: "",
          loadChildren: () =>
            a
              .e(20)
              .then(a.bind(null, "Lihs"))
              .then((e) => e.LayoutModule),
        },
        {
          path: "**",
          canActivate: [E],
          loadChildren: () =>
            a
              .e(15)
              .then(a.bind(null, "ogBq"))
              .then((e) => e.EmptyModule),
        },
      ];
      class U {
        constructor(e) {
          e.errorHandler = (e) => {
            console.error(e);
          };
        }
      }
      (U.ɵfac = function (e) {
        return new (e || U)(r["\u0275\u0275inject"](m.d));
      }),
        (U.ɵmod = r["\u0275\u0275defineNgModule"]({ type: U })),
        (U.ɵinj = r["\u0275\u0275defineInjector"]({
          providers: [A.a, N, E],
          imports: [
            [
              z.a,
              s.FormsModule,
              m.e.forRoot(O, {
                enableTracing: !1,
                anchorScrolling: "enabled",
                onSameUrlNavigation: "reload",
                initialNavigation: "enabled",
                relativeLinkResolution: "legacy",
              }),
            ],
            m.e,
          ],
        }));
      var P = a("p3XQ");
      class R {
        constructor() {
          this._defaultUrlSerializer = new m.b();
        }
        parse(e) {
          return (
            (e = e.replace(/\(/g, "%28").replace(/\)/g, "%29")),
            this._defaultUrlSerializer.parse(e)
          );
        }
        serialize(e) {
          return this._defaultUrlSerializer
            .serialize(e)
            .replace(/%28/g, "(")
            .replace(/%29/g, ")");
        }
      }
      (R.ɵfac = function (e) {
        return new (e || R)();
      }),
        (R.ɵprov = r["\u0275\u0275defineInjectable"]({
          token: R,
          factory: R.ɵfac,
        }));
      var B = a("w1ml");
      class G {
        constructor(e, t) {
          t.initDefaultLanguage(e);
        }
      }
      (G.ɵfac = function (e) {
        return new (e || G)(
          r["\u0275\u0275inject"](p.d),
          r["\u0275\u0275inject"](h.a)
        );
      }),
        (G.ɵmod = r["\u0275\u0275defineNgModule"]({ type: G, bootstrap: [L] })),
        (G.ɵinj = r["\u0275\u0275defineInjector"]({
          providers: [
            { provide: f.a, useValue: { siteKey: w.a.reCaptcha } },
            p.d,
            { provide: m.g, useClass: R },
            M.a,
          ],
          imports: [
            [
              B.a,
              o.BrowserModule.withServerTransition({
                appId: "ng-cli-universal",
              }),
              c.b,
              l.b,
              s.FormsModule,
              g.b,
              s.ReactiveFormsModule,
              p.b.forRoot({
                loader: {
                  provide: p.a,
                  useFactory: function (e, t) {
                    return (
                      null === t &&
                        "undefined" != typeof window &&
                        (t = window.location.origin),
                      "no.ssr" == w.a.name
                        ? new u.a(e, "/assets/i18nCommon/", ".json")
                        : new u.a(
                            e,
                            `${t}/api/Localization/GetCommonTranslations/`,
                            ""
                          )
                    );
                  },
                  deps: [l.a, P.a],
                },
                useDefaultLang: !0,
                isolate: !0,
              }),
              m.e,
              d.b,
              f.c,
              b.a.forRoot(),
              U,
            ],
          ],
        }));
      var H = a("khT+");
      function Y() {
        return document.getElementsByTagName("base")[0].href;
      }
      function q() {
        return w.a.apiUrl ? w.a.apiUrl : window.location.origin;
      }
      function J() {
        return window.navigator.userAgent;
      }
      const Q = [
        { provide: P.a, useFactory: q, deps: [] },
        { provide: "BASE_URL", useFactory: Y, deps: [] },
        { provide: H.a, useFactory: J, deps: [] },
        { provide: n.a, useValue: userCountry, deps: [] },
        { provide: n.e, useValue: userJurisdiction, deps: [] },
        { provide: n.c, useValue: directLinks, deps: [] },
        { provide: i.a, useValue: abTest, deps: [] },
        { provide: n.g, useValue: webComponentsScriptsPaths, deps: [] },
        { provide: n.f, useValue: userExperiments, deps: [] },
      ];
      w.a.production && Object(r.enableProdMode)();
      const Z = () => o.platformBrowser(Q).bootstrapModule(G);
      "complete" === document.readyState
        ? ((window.onload = () => {
            Z().catch((e) => console.log(e));
          }),
          location.reload())
        : document.addEventListener("DOMContentLoaded", Z);
    },
    zn8P: function (e, t) {
      function a(e) {
        return Promise.resolve().then(function () {
          var t = new Error("Cannot find module '" + e + "'");
          throw ((t.code = "MODULE_NOT_FOUND"), t);
        });
      }
      (a.keys = function () {
        return [];
      }),
        (a.resolve = a),
        (e.exports = a),
        (a.id = "zn8P");
    },
  },
  [[0, 7, 19]],
]);
