"use strict";
(() => {
var exports = {};
exports.id = 515;
exports.ids = [515];
exports.modules = {

/***/ 8192:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ PostPage),
  "getStaticPaths": () => (/* binding */ getStaticPaths),
  "getStaticProps": () => (/* binding */ getStaticProps)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "@chakra-ui/react"
var react_ = __webpack_require__(8930);
// EXTERNAL MODULE: external "fs"
var external_fs_ = __webpack_require__(7147);
var external_fs_default = /*#__PURE__*/__webpack_require__.n(external_fs_);
// EXTERNAL MODULE: external "gray-matter"
var external_gray_matter_ = __webpack_require__(8076);
var external_gray_matter_default = /*#__PURE__*/__webpack_require__.n(external_gray_matter_);
;// CONCATENATED MODULE: external "markdown-it"
const external_markdown_it_namespaceObject = require("markdown-it");
var external_markdown_it_default = /*#__PURE__*/__webpack_require__.n(external_markdown_it_namespaceObject);
;// CONCATENATED MODULE: ./pages/post/[slug].js





async function getStaticPaths() {
    const files = external_fs_default().readdirSync("./pages/posts");
    const paths = files.map((fileName)=>({
            params: {
                slug: fileName.replace(".md", "")
            }
        }));
    return {
        paths,
        fallback: false
    };
}
async function getStaticProps({ params: { slug  }  }) {
    const fileName = external_fs_default().readFileSync(`./pages/posts/${slug}.md`, "utf-8");
    const { data: frontmatter , content  } = external_gray_matter_default()(fileName);
    return {
        props: {
            frontmatter,
            content
        }
    };
}
function PostPage({ frontmatter , content  }) {
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(react_.Box, {
        className: "prose mx-auto",
        style: {
            fontSize: "revert",
            position: "relative",
            marginBottom: "25px"
        },
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("h1", {
                style: {
                    fontSize: "revert",
                    marginBottom: "25px"
                },
                children: frontmatter.title
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(react_.Box, {
                bg: "gray.800",
                dangerouslySetInnerHTML: {
                    __html: external_markdown_it_default()().render(content)
                },
                sx: {
                    "& h1": {
                        fontSize: "revert"
                    },
                    "& p:first-of-type": {
                        padding: "0px 0px 0px 0px"
                    },
                    "& p": {
                        padding: "0px 40px 10px 40px"
                    },
                    "& p:last-child": {
                        padding: "0px 40px 40px 40px"
                    },
                    "& ul": {
                        padding: "0px 40px 10px 60px"
                    },
                    "& pre": {
                        padding: "0px 60px 10px 60px"
                    },
                    "& code": {
                        backgroundColor: "grey"
                    },
                    "& p:has(img)": {
                        display: "flex",
                        justifyContent: "center"
                    }
                }
            })
        ]
    });
};


/***/ }),

/***/ 8930:
/***/ ((module) => {

module.exports = require("@chakra-ui/react");

/***/ }),

/***/ 8076:
/***/ ((module) => {

module.exports = require("gray-matter");

/***/ }),

/***/ 997:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ }),

/***/ 7147:
/***/ ((module) => {

module.exports = require("fs");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(8192));
module.exports = __webpack_exports__;

})();