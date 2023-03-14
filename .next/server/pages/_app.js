(() => {
var exports = {};
exports.id = 888;
exports.ids = [888];
exports.modules = {

/***/ 8467:
/***/ ((module) => {

// Exports
module.exports = {
	"container": "App_container__1Lj7Q",
	"center": "App_center__s4Nh1",
	"btn": "App_btn__3l5_P",
	"btnActive": "App_btnActive___QD8J",
	"svg": "App_svg__ivllY",
	"link": "App_link__JOy4l"
};


/***/ }),

/***/ 6596:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "N": () => (/* binding */ getServerSideProps),
/* harmony export */   "Z": () => (/* binding */ Chakra)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8930);
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _lib_theme__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(7985);



function Chakra({ cookies , children  }) {
    const colorModeManager = typeof cookies === "string" ? (0,_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.cookieStorageManagerSSR)(cookies) : _chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.localStorageManager;
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.ChakraProvider, {
        theme: _lib_theme__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z,
        colorModeManager: colorModeManager,
        children: children
    });
};
async function getServerSideProps({ req  }) {
    return {
        props: {
            cookies: req.headers.cookie ?? ""
        }
    };
}


/***/ }),

/***/ 5854:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(536);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__);


const Fonts = ()=>react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default()), {
        id: "cf144baff3718881",
        children: '@import url("https://fonts.googleapis.com/css2?family=M+PLUS+Rounded+1c:wght@300;700&display=swap");'
    });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Fonts);


/***/ }),

/***/ 5841:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ main)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "next/head"
var head_ = __webpack_require__(968);
var head_default = /*#__PURE__*/__webpack_require__.n(head_);
// EXTERNAL MODULE: ./node_modules/next/dynamic.js
var dynamic = __webpack_require__(5152);
var dynamic_default = /*#__PURE__*/__webpack_require__.n(dynamic);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(5675);
var image_default = /*#__PURE__*/__webpack_require__.n(next_image);
// EXTERNAL MODULE: external "@emotion/styled"
var styled_ = __webpack_require__(1480);
var styled_default = /*#__PURE__*/__webpack_require__.n(styled_);
;// CONCATENATED MODULE: ./components/logo.js




const LogoBox = (styled_default()).span`
  font-weight: bold;
  font-size: 18px;
  display: inline-flex;
  align-items: center;
  height: 30px;
  line-height: 20px;
  padding-top: 20px;

  img {
    transition: 400ms ease;
  }

  &:hover img {
    transform: rotate(360deg);
  }
`;
const Logo = ()=>{
    const logo = `/images/logo.png`;
    return /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
        href: "/",
        scroll: false,
        children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
            children: /*#__PURE__*/ jsx_runtime_.jsx(LogoBox, {
                children: /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                    src: logo,
                    width: 50,
                    height: 50,
                    alt: "logo"
                })
            })
        })
    });
};
/* harmony default export */ const logo = (Logo);

// EXTERNAL MODULE: external "@chakra-ui/react"
var react_ = __webpack_require__(8930);
;// CONCATENATED MODULE: external "@chakra-ui/icons"
const icons_namespaceObject = require("@chakra-ui/icons");
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: ./components/config/App.module.css
var App_module = __webpack_require__(8467);
var App_module_default = /*#__PURE__*/__webpack_require__.n(App_module);
;// CONCATENATED MODULE: ./components/buttons/NavBarButtons.js





const LinkItem = ({ href , path , children , ...props })=>{
    const active = path === href;
    return /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
        href: href,
        passHref: true,
        scroll: false,
        children: /*#__PURE__*/ jsx_runtime_.jsx(react_.Link, {
            p: 2,
            className: active ? (App_module_default()).btnActive : undefined,
            textDecoration: "underline",
            ...props,
            children: children
        })
    });
};
const NavBarButtons = (props)=>{
    const { path  } = props;
    return /*#__PURE__*/ jsx_runtime_.jsx(react_.Box, {
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(react_.Stack, {
            direction: {
                base: "column",
                md: "row"
            },
            display: {
                base: "none",
                md: "flex"
            },
            width: {
                base: "full",
                md: "auto"
            },
            alignItems: "center",
            flexGrow: 1,
            mt: {
                base: 4,
                md: 0
            },
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx(LinkItem, {
                    href: "/about",
                    path: path,
                    children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: (App_module_default()).container,
                        children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: (App_module_default()).center,
                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("button", {
                                className: (App_module_default()).btn,
                                children: [
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("svg", {
                                        className: (App_module_default()).svg,
                                        width: "80px",
                                        height: "46px",
                                        viewBox: "0 0 180 65",
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx("polyline", {
                                                points: "179,1 179,59 1,59 1,1 179,1"
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("polyline", {
                                                points: "179,1 179,59 1,59 1,1 179,1"
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                        children: "About"
                                    })
                                ]
                            })
                        })
                    })
                }),
                /*#__PURE__*/ jsx_runtime_.jsx(LinkItem, {
                    href: "/portfolio",
                    path: path,
                    children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: (App_module_default()).container,
                        children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: (App_module_default()).center,
                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("button", {
                                className: (App_module_default()).btn,
                                children: [
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("svg", {
                                        className: (App_module_default()).svg,
                                        width: "80px",
                                        height: "45px",
                                        viewBox: "0 0 180 60",
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx("polyline", {
                                                points: "179,1 179,59 1,59 1,1 179,1"
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("polyline", {
                                                points: "179,1 179,59 1,59 1,1 179,1"
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                        children: "Portfolio"
                                    })
                                ]
                            })
                        })
                    })
                }),
                /*#__PURE__*/ jsx_runtime_.jsx(LinkItem, {
                    href: "/blog",
                    path: path,
                    children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: (App_module_default()).container,
                        children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: (App_module_default()).center,
                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("button", {
                                className: (App_module_default()).btn,
                                children: [
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("svg", {
                                        className: (App_module_default()).svg,
                                        width: "80px",
                                        height: "45px",
                                        viewBox: "0 0 180 60",
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx("polyline", {
                                                points: "179,1 179,59 1,59 1,1 179,1"
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("polyline", {
                                                points: "179,1 179,59 1,59 1,1 179,1"
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                        children: "Blog"
                                    })
                                ]
                            })
                        })
                    })
                })
            ]
        })
    });
};
/* harmony default export */ const buttons_NavBarButtons = (NavBarButtons);

// EXTERNAL MODULE: external "react-icons/io5"
var io5_ = __webpack_require__(9989);
;// CONCATENATED MODULE: ./components/navbar.js







const Navbar = (props)=>{
    const { path  } = props;
    return /*#__PURE__*/ jsx_runtime_.jsx(react_.Box, {
        position: "fixed",
        as: "nav",
        w: "100%",
        bg: (0,react_.useColorModeValue)("#ffffff40", "#20202380"),
        css: {
            backdropFilter: "blur(10px)"
        },
        zIndex: 2,
        ...props,
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(react_.Container, {
            display: "flex",
            p: 2,
            maxW: "container.md",
            wrap: "wrap",
            align: "center",
            justify: "space-between",
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx(react_.Flex, {
                    align: "center",
                    mr: 5,
                    children: /*#__PURE__*/ jsx_runtime_.jsx(react_.Heading, {
                        as: "h1",
                        size: "lg",
                        letterSpacing: "tighter",
                        children: /*#__PURE__*/ jsx_runtime_.jsx(logo, {})
                    })
                }),
                /*#__PURE__*/ jsx_runtime_.jsx(react_.Stack, {
                    direction: {
                        base: "column",
                        md: "row"
                    },
                    display: {
                        base: "none",
                        md: "flex"
                    },
                    width: {
                        base: "full",
                        md: "auto"
                    },
                    alignItems: "center",
                    flexGrow: 1,
                    mt: {
                        base: 4,
                        md: 0
                    },
                    children: /*#__PURE__*/ jsx_runtime_.jsx(buttons_NavBarButtons, {
                        path: path
                    })
                }),
                /*#__PURE__*/ jsx_runtime_.jsx(react_.Box, {
                    flex: 1,
                    align: "right",
                    children: /*#__PURE__*/ jsx_runtime_.jsx(react_.Box, {
                        ml: 2,
                        display: {
                            base: "inline-block",
                            md: "none"
                        },
                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(react_.Menu, {
                            isLazy: true,
                            id: "navbar-menu",
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx(react_.MenuButton, {
                                    as: react_.IconButton,
                                    icon: /*#__PURE__*/ jsx_runtime_.jsx(icons_namespaceObject.HamburgerIcon, {}),
                                    variant: "outline",
                                    "aria-label": "Options"
                                }),
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)(react_.MenuList, {
                                    color: "tomato",
                                    backgroundColor: "grey.700",
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                            href: "/",
                                            passHref: true,
                                            children: /*#__PURE__*/ jsx_runtime_.jsx(react_.MenuItem, {
                                                as: react_.Link,
                                                children: /*#__PURE__*/ jsx_runtime_.jsx(io5_.IoHome, {})
                                            })
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                            href: "/about",
                                            passHref: true,
                                            children: /*#__PURE__*/ jsx_runtime_.jsx(react_.MenuItem, {
                                                as: react_.Link,
                                                children: "About"
                                            })
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                            href: "/portfolio",
                                            passHref: true,
                                            children: /*#__PURE__*/ jsx_runtime_.jsx(react_.MenuItem, {
                                                as: react_.Link,
                                                children: "Portfolio"
                                            })
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                            href: "/blog",
                                            passHref: true,
                                            children: /*#__PURE__*/ jsx_runtime_.jsx(react_.MenuItem, {
                                                as: react_.Link,
                                                children: "Blog"
                                            })
                                        })
                                    ]
                                })
                            ]
                        })
                    })
                })
            ]
        })
    });
};
/* harmony default export */ const navbar = (Navbar);

;// CONCATENATED MODULE: ./components/footer.js


const Footer = ()=>{
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(react_.Box, {
        align: "center",
        opacity: 0.4,
        fontSize: "sm",
        children: [
            "\xa9 ",
            new Date().getFullYear(),
            " Manojlo Ilic. All Rights Reserved."
        ]
    });
};
/* harmony default export */ const footer = (Footer);

;// CONCATENATED MODULE: ./components/loader.js



const LoadingSpinner = ()=>/*#__PURE__*/ jsx_runtime_.jsx(react_.Spinner, {
        size: "xl",
        position: "absolute",
        left: "50%",
        top: "50%",
        ml: "calc(0px - var(--spinner-size) / 2)",
        mt: "calc(0px - var(--spinner-size))"
    });
const SpinnerContainer = /*#__PURE__*/ (0,external_react_.forwardRef)(({ children  }, ref)=>/*#__PURE__*/ jsx_runtime_.jsx(react_.Box, {
        ref: ref,
        className: "my-office",
        m: "auto",
        mt: [
            "-20px",
            "-60px",
            "-120px"
        ],
        mb: [
            "-40px",
            "-140px",
            "-150px"
        ],
        w: [
            280,
            480,
            640
        ],
        h: [
            280,
            480,
            640
        ],
        position: "relative",
        children: children
    }));
const Loader = ()=>{
    return /*#__PURE__*/ jsx_runtime_.jsx(SpinnerContainer, {
        children: /*#__PURE__*/ jsx_runtime_.jsx(LoadingSpinner, {})
    });
};
/* harmony default export */ const loader = (Loader);

;// CONCATENATED MODULE: ./components/layouts/main.js







const MyOffice = dynamic_default()(null, {
    loadableGenerated: {
        modules: [
            "..\\components\\layouts\\main.js -> " + "../myOffice"
        ]
    },
    ssr: false,
    loading: ()=>/*#__PURE__*/ jsx_runtime_.jsx(loader, {})
});
const ParticlesBackground = dynamic_default()(null, {
    loadableGenerated: {
        modules: [
            "..\\components\\layouts\\main.js -> " + "../ParticleBackground"
        ]
    },
    ssr: false,
    loading: ()=>/*#__PURE__*/ jsx_runtime_.jsx(loader, {})
});
const Main = ({ children , router  })=>{
    console.log("%cHi here \uD83D\uDC4B %cThis website is made with Next.js and Three.js", "font-size: 18px; color: blue", "font-size: 15px; color: red");
    return /*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(react_.Box, {
            as: "main",
            pb: 8,
            children: [
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)((head_default()), {
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                            name: "viewport",
                            content: "width=device-width, initial-scale=1"
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                            name: "description",
                            content: "Software engineer| Web Developer | JavaScript | NodeJS"
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                            name: "author",
                            content: "Manojlo Ilic"
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("link", {
                            rel: "shortcut icon",
                            href: "/favicon2.ico",
                            type: "image/x-icon"
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                            property: "og:site_name",
                            content: "Manojlo Ilic"
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                            name: "og:title",
                            content: "Manojlo Ilic"
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                            property: "og:type",
                            content: "Portfolio website"
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                            property: "og:image",
                            content: "/images/logo.png"
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("title", {
                            children: "Manojlo Ilic"
                        })
                    ]
                }),
                /*#__PURE__*/ jsx_runtime_.jsx(navbar, {
                    path: router.asPath
                }),
                /*#__PURE__*/ jsx_runtime_.jsx(ParticlesBackground, {}),
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)(react_.Container, {
                    maxW: "container.md",
                    pt: 14,
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx(MyOffice, {}),
                        children,
                        /*#__PURE__*/ jsx_runtime_.jsx(footer, {})
                    ]
                })
            ]
        })
    });
};
/* harmony default export */ const main = (Main);


/***/ }),

/***/ 9485:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "L": () => (/* binding */ pageview)
/* harmony export */ });
/* unused harmony export event */
const pageview = (url)=>{
    if (typeof window.gtag !== "undefined") {
        window.gtag("config", "G-YB0GMFYV5Y", {
            page_path: url
        });
    }
};
const event = ({ action , category , label , value  })=>{
    window.gtag("event", action, {
        event_category: category,
        event_label: label,
        value: value
    });
};


/***/ }),

/***/ 8510:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_layouts_main__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5841);
/* harmony import */ var _components_fonts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5854);
/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(6197);
/* harmony import */ var _components_chakra__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(6596);
/* harmony import */ var _lib_googleAnalytics__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(9485);
/* harmony import */ var next_script__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(4298);
/* harmony import */ var next_script__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_script__WEBPACK_IMPORTED_MODULE_6__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([framer_motion__WEBPACK_IMPORTED_MODULE_4__]);
framer_motion__WEBPACK_IMPORTED_MODULE_4__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];









if (false) {}
function Website({ Component , pageProps , router  }) {
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        const handleRouteChange = (url)=>{
            _lib_googleAnalytics__WEBPACK_IMPORTED_MODULE_7__/* .pageview */ .L(url);
        };
        router.events.on("routeChangeComplete", handleRouteChange);
        return ()=>{
            router.events.off("routeChangeComplete", handleRouteChange);
        };
    }, [
        router.events
    ]);
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_script__WEBPACK_IMPORTED_MODULE_6___default()), {
                id: "ga",
                strategy: "afterInteractive",
                src: `https://www.googletagmanager.com/gtag/js?id=${"G-YB0GMFYV5Y"}`
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_script__WEBPACK_IMPORTED_MODULE_6___default()), {
                id: "ga-script",
                strategy: "afterInteractive",
                dangerouslySetInnerHTML: {
                    __html: `
            window.dataLayer = window.dataLayer || [];
            window.gtag = function () {
              dataLayer.push(arguments);
            };
            window.gtag('js', new Date());
            window.gtag('config','${"G-YB0GMFYV5Y"}', {
              page_path: window.location.pathname,
            });
          `
                }
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components_chakra__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
                cookies: pageProps.cookies,
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_fonts__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {}),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_layouts_main__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
                        router: router,
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(framer_motion__WEBPACK_IMPORTED_MODULE_4__.AnimatePresence, {
                            mode: "wait",
                            initial: true,
                            onExitComplete: ()=>{
                                if (false) {}
                            },
                            children: /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.createElement)(Component, {
                                ...pageProps,
                                key: router.route
                            })
                        })
                    })
                ]
            })
        ]
    });
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Website);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 8930:
/***/ ((module) => {

"use strict";
module.exports = require("@chakra-ui/react");

/***/ }),

/***/ 429:
/***/ ((module) => {

"use strict";
module.exports = require("@chakra-ui/theme-tools");

/***/ }),

/***/ 1480:
/***/ ((module) => {

"use strict";
module.exports = require("@emotion/styled");

/***/ }),

/***/ 3280:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/app-router-context.js");

/***/ }),

/***/ 2796:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/head-manager-context.js");

/***/ }),

/***/ 4957:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/head.js");

/***/ }),

/***/ 4014:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/i18n/normalize-locale-path.js");

/***/ }),

/***/ 744:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/image-config-context.js");

/***/ }),

/***/ 5843:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/image-config.js");

/***/ }),

/***/ 8524:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/is-plain-object.js");

/***/ }),

/***/ 5832:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/loadable.js");

/***/ }),

/***/ 8020:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/mitt.js");

/***/ }),

/***/ 4406:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/page-path/denormalize-page-path.js");

/***/ }),

/***/ 4964:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router-context.js");

/***/ }),

/***/ 1751:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/add-path-prefix.js");

/***/ }),

/***/ 6220:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/compare-states.js");

/***/ }),

/***/ 299:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/format-next-pathname-info.js");

/***/ }),

/***/ 3938:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/format-url.js");

/***/ }),

/***/ 9565:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/get-asset-path-from-route.js");

/***/ }),

/***/ 5789:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/get-next-pathname-info.js");

/***/ }),

/***/ 1428:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/is-dynamic.js");

/***/ }),

/***/ 8854:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/parse-path.js");

/***/ }),

/***/ 1292:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/parse-relative-url.js");

/***/ }),

/***/ 4567:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/path-has-prefix.js");

/***/ }),

/***/ 979:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/querystring.js");

/***/ }),

/***/ 3297:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/remove-trailing-slash.js");

/***/ }),

/***/ 6052:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/resolve-rewrites.js");

/***/ }),

/***/ 4226:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/route-matcher.js");

/***/ }),

/***/ 5052:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/route-regex.js");

/***/ }),

/***/ 9232:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ 1892:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/styled-jsx/dist/index/index.js");

/***/ }),

/***/ 968:
/***/ ((module) => {

"use strict";
module.exports = require("next/head");

/***/ }),

/***/ 6689:
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ 9989:
/***/ ((module) => {

"use strict";
module.exports = require("react-icons/io5");

/***/ }),

/***/ 997:
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-runtime");

/***/ }),

/***/ 6197:
/***/ ((module) => {

"use strict";
module.exports = import("framer-motion");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [952,664,675,498,985], () => (__webpack_exec__(8510)));
module.exports = __webpack_exports__;

})();