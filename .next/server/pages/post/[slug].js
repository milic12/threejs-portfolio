"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/post/[slug]";
exports.ids = ["pages/post/[slug]"];
exports.modules = {

/***/ "./pages/post/[slug].js":
/*!******************************!*\
  !*** ./pages/post/[slug].js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ PostPage),\n/* harmony export */   \"getStaticPaths\": () => (/* binding */ getStaticPaths),\n/* harmony export */   \"getStaticProps\": () => (/* binding */ getStaticProps)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @chakra-ui/react */ \"@chakra-ui/react\");\n/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! fs */ \"fs\");\n/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(fs__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var gray_matter__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! gray-matter */ \"gray-matter\");\n/* harmony import */ var gray_matter__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(gray_matter__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var markdown_it__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! markdown-it */ \"markdown-it\");\n/* harmony import */ var markdown_it__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(markdown_it__WEBPACK_IMPORTED_MODULE_4__);\n\n\n\n\n\nasync function getStaticPaths() {\n    const files = fs__WEBPACK_IMPORTED_MODULE_2___default().readdirSync(\"./pages/posts\");\n    const paths = files.map((fileName)=>({\n            params: {\n                slug: fileName.replace(\".md\", \"\")\n            }\n        }));\n    return {\n        paths,\n        fallback: false\n    };\n}\nasync function getStaticProps({ params: { slug  }  }) {\n    const fileName = fs__WEBPACK_IMPORTED_MODULE_2___default().readFileSync(`./pages/posts/${slug}.md`, \"utf-8\");\n    const { data: frontmatter , content  } = gray_matter__WEBPACK_IMPORTED_MODULE_3___default()(fileName);\n    return {\n        props: {\n            frontmatter,\n            content\n        }\n    };\n}\nfunction PostPage({ frontmatter , content  }) {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Box, {\n        className: \"prose mx-auto\",\n        style: {\n            fontSize: \"revert\",\n            position: \"relative\",\n            marginBottom: \"25px\"\n        },\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                style: {\n                    fontSize: \"revert\",\n                    marginBottom: \"25px\"\n                },\n                children: frontmatter.title\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\JS\\\\Desktop\\\\craftdog\\\\portfolio-threejs\\\\pages\\\\post\\\\[slug].js\",\n                lineNumber: 41,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Box, {\n                bg: \"gray.800\",\n                dangerouslySetInnerHTML: {\n                    __html: markdown_it__WEBPACK_IMPORTED_MODULE_4___default()().render(content)\n                },\n                sx: {\n                    \"& h1\": {\n                        fontSize: \"revert\"\n                    },\n                    \"& p:first-of-type\": {\n                        padding: \"0px 0px 0px 0px\"\n                    },\n                    \"& p\": {\n                        padding: \"0px 40px 10px 40px\"\n                    },\n                    \"& p:last-child\": {\n                        padding: \"0px 40px 40px 40px\"\n                    },\n                    \"& ul\": {\n                        padding: \"0px 40px 10px 60px\"\n                    },\n                    \"& pre\": {\n                        padding: \"0px 60px 10px 60px\"\n                    },\n                    \"& code\": {\n                        backgroundColor: \"grey\"\n                    },\n                    \"& p:has(img)\": {\n                        display: \"flex\",\n                        justifyContent: \"center\"\n                    }\n                }\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\JS\\\\Desktop\\\\craftdog\\\\portfolio-threejs\\\\pages\\\\post\\\\[slug].js\",\n                lineNumber: 45,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\JS\\\\Desktop\\\\craftdog\\\\portfolio-threejs\\\\pages\\\\post\\\\[slug].js\",\n        lineNumber: 33,\n        columnNumber: 5\n    }, this);\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9wb3N0L1tzbHVnXS5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFBc0M7QUFDbkI7QUFDYTtBQUNKO0FBRXJCLGVBQWVJLGNBQWMsR0FBRztJQUNyQyxNQUFNQyxLQUFLLEdBQUdKLHFEQUFjLENBQUMsZUFBZSxDQUFDO0lBQzdDLE1BQU1NLEtBQUssR0FBR0YsS0FBSyxDQUFDRyxHQUFHLENBQUNDLENBQUFBLFFBQVEsR0FBSSxDQUFDO1lBQ25DQyxNQUFNLEVBQUU7Z0JBQ05DLElBQUksRUFBRUYsUUFBUSxDQUFDRyxPQUFPLENBQUMsS0FBSyxFQUFFLEVBQUUsQ0FBQzthQUNsQztTQUNGLENBQUMsQ0FBQztJQUNILE9BQU87UUFDTEwsS0FBSztRQUNMTSxRQUFRLEVBQUUsS0FBSztLQUNoQjtDQUNGO0FBRU0sZUFBZUMsY0FBYyxDQUFDLEVBQUVKLE1BQU0sRUFBRSxFQUFFQyxJQUFJLEdBQUUsR0FBRSxFQUFFO0lBQ3pELE1BQU1GLFFBQVEsR0FBR1Isc0RBQWUsQ0FBQyxDQUFDLGNBQWMsRUFBRVUsSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLE9BQU8sQ0FBQztJQUNyRSxNQUFNLEVBQUVLLElBQUksRUFBRUMsV0FBVyxHQUFFQyxPQUFPLEdBQUUsR0FBR2hCLGtEQUFNLENBQUNPLFFBQVEsQ0FBQztJQUV2RCxPQUFPO1FBQ0xVLEtBQUssRUFBRTtZQUNMRixXQUFXO1lBQ1hDLE9BQU87U0FDUjtLQUNGO0NBQ0Y7QUFFYyxTQUFTRSxRQUFRLENBQUMsRUFBRUgsV0FBVyxHQUFFQyxPQUFPLEdBQUUsRUFBRTtJQUN6RCxxQkFDRSw4REFBQ2xCLGlEQUFHO1FBQ0ZxQixTQUFTLEVBQUMsZUFBZTtRQUN6QkMsS0FBSyxFQUFFO1lBQ0xDLFFBQVEsRUFBRSxRQUFRO1lBQ2xCQyxRQUFRLEVBQUUsVUFBVTtZQUNwQkMsWUFBWSxFQUFFLE1BQU07U0FDckI7OzBCQUVELDhEQUFDQyxJQUFFO2dCQUFDSixLQUFLLEVBQUU7b0JBQUVDLFFBQVEsRUFBRSxRQUFRO29CQUFFRSxZQUFZLEVBQUUsTUFBTTtpQkFBRTswQkFDcERSLFdBQVcsQ0FBQ1UsS0FBSzs7Ozs7b0JBQ2Y7MEJBRUwsOERBQUMzQixpREFBRztnQkFDRjRCLEVBQUUsRUFBRSxVQUFVO2dCQUNkQyx1QkFBdUIsRUFBRTtvQkFDdkJDLE1BQU0sRUFBRTNCLGtEQUFFLEVBQUUsQ0FBQzRCLE1BQU0sQ0FBQ2IsT0FBTyxDQUFDO2lCQUM3QjtnQkFDRGMsRUFBRSxFQUFFO29CQUNGLE1BQU0sRUFBRTt3QkFDTlQsUUFBUSxFQUFFLFFBQVE7cUJBQ25CO29CQUNELG1CQUFtQixFQUFFO3dCQUNuQlUsT0FBTyxFQUFFLGlCQUFpQjtxQkFDM0I7b0JBQ0QsS0FBSyxFQUFFO3dCQUNMQSxPQUFPLEVBQUUsb0JBQW9CO3FCQUM5QjtvQkFDRCxnQkFBZ0IsRUFBRTt3QkFDaEJBLE9BQU8sRUFBRSxvQkFBb0I7cUJBQzlCO29CQUNELE1BQU0sRUFBRTt3QkFDTkEsT0FBTyxFQUFFLG9CQUFvQjtxQkFDOUI7b0JBQ0QsT0FBTyxFQUFFO3dCQUNQQSxPQUFPLEVBQUUsb0JBQW9CO3FCQUM5QjtvQkFDRCxRQUFRLEVBQUU7d0JBQ1JDLGVBQWUsRUFBRSxNQUFNO3FCQUN4QjtvQkFDRCxjQUFjLEVBQUU7d0JBQ2RDLE9BQU8sRUFBRSxNQUFNO3dCQUNmQyxjQUFjLEVBQUUsUUFBUTtxQkFDekI7aUJBQ0Y7Ozs7O29CQUNJOzs7Ozs7WUFDSCxDQUNQO0NBQ0YiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9tYW5vamxvLWlsaWMtcG9ydGZvbGlvLy4vcGFnZXMvcG9zdC9bc2x1Z10uanM/MzQ1ZSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBCb3ggfSBmcm9tICdAY2hha3JhLXVpL3JlYWN0J1xyXG5pbXBvcnQgZnMgZnJvbSAnZnMnXHJcbmltcG9ydCBtYXR0ZXIgZnJvbSAnZ3JheS1tYXR0ZXInXHJcbmltcG9ydCBtZCBmcm9tICdtYXJrZG93bi1pdCdcclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRTdGF0aWNQYXRocygpIHtcclxuICBjb25zdCBmaWxlcyA9IGZzLnJlYWRkaXJTeW5jKCcuL3BhZ2VzL3Bvc3RzJylcclxuICBjb25zdCBwYXRocyA9IGZpbGVzLm1hcChmaWxlTmFtZSA9PiAoe1xyXG4gICAgcGFyYW1zOiB7XHJcbiAgICAgIHNsdWc6IGZpbGVOYW1lLnJlcGxhY2UoJy5tZCcsICcnKVxyXG4gICAgfVxyXG4gIH0pKVxyXG4gIHJldHVybiB7XHJcbiAgICBwYXRocyxcclxuICAgIGZhbGxiYWNrOiBmYWxzZVxyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFN0YXRpY1Byb3BzKHsgcGFyYW1zOiB7IHNsdWcgfSB9KSB7XHJcbiAgY29uc3QgZmlsZU5hbWUgPSBmcy5yZWFkRmlsZVN5bmMoYC4vcGFnZXMvcG9zdHMvJHtzbHVnfS5tZGAsICd1dGYtOCcpXHJcbiAgY29uc3QgeyBkYXRhOiBmcm9udG1hdHRlciwgY29udGVudCB9ID0gbWF0dGVyKGZpbGVOYW1lKVxyXG5cclxuICByZXR1cm4ge1xyXG4gICAgcHJvcHM6IHtcclxuICAgICAgZnJvbnRtYXR0ZXIsXHJcbiAgICAgIGNvbnRlbnRcclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFBvc3RQYWdlKHsgZnJvbnRtYXR0ZXIsIGNvbnRlbnQgfSkge1xyXG4gIHJldHVybiAoXHJcbiAgICA8Qm94XHJcbiAgICAgIGNsYXNzTmFtZT1cInByb3NlIG14LWF1dG9cIlxyXG4gICAgICBzdHlsZT17e1xyXG4gICAgICAgIGZvbnRTaXplOiAncmV2ZXJ0JyxcclxuICAgICAgICBwb3NpdGlvbjogJ3JlbGF0aXZlJyxcclxuICAgICAgICBtYXJnaW5Cb3R0b206ICcyNXB4J1xyXG4gICAgICB9fVxyXG4gICAgPlxyXG4gICAgICA8aDEgc3R5bGU9e3sgZm9udFNpemU6ICdyZXZlcnQnLCBtYXJnaW5Cb3R0b206ICcyNXB4JyB9fT5cclxuICAgICAgICB7ZnJvbnRtYXR0ZXIudGl0bGV9XHJcbiAgICAgIDwvaDE+XHJcblxyXG4gICAgICA8Qm94XHJcbiAgICAgICAgYmc9eydncmF5LjgwMCd9XHJcbiAgICAgICAgZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUw9e3tcclxuICAgICAgICAgIF9faHRtbDogbWQoKS5yZW5kZXIoY29udGVudClcclxuICAgICAgICB9fVxyXG4gICAgICAgIHN4PXt7XHJcbiAgICAgICAgICAnJiBoMSc6IHtcclxuICAgICAgICAgICAgZm9udFNpemU6ICdyZXZlcnQnXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgICAgJyYgcDpmaXJzdC1vZi10eXBlJzoge1xyXG4gICAgICAgICAgICBwYWRkaW5nOiAnMHB4IDBweCAwcHggMHB4J1xyXG4gICAgICAgICAgfSxcclxuICAgICAgICAgICcmIHAnOiB7XHJcbiAgICAgICAgICAgIHBhZGRpbmc6ICcwcHggNDBweCAxMHB4IDQwcHgnXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgICAgJyYgcDpsYXN0LWNoaWxkJzoge1xyXG4gICAgICAgICAgICBwYWRkaW5nOiAnMHB4IDQwcHggNDBweCA0MHB4J1xyXG4gICAgICAgICAgfSxcclxuICAgICAgICAgICcmIHVsJzoge1xyXG4gICAgICAgICAgICBwYWRkaW5nOiAnMHB4IDQwcHggMTBweCA2MHB4J1xyXG4gICAgICAgICAgfSxcclxuICAgICAgICAgICcmIHByZSc6IHtcclxuICAgICAgICAgICAgcGFkZGluZzogJzBweCA2MHB4IDEwcHggNjBweCdcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgICAnJiBjb2RlJzoge1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6ICdncmV5J1xyXG4gICAgICAgICAgfSxcclxuICAgICAgICAgICcmIHA6aGFzKGltZyknOiB7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6ICdmbGV4JyxcclxuICAgICAgICAgICAganVzdGlmeUNvbnRlbnQ6ICdjZW50ZXInXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfX1cclxuICAgICAgPjwvQm94PlxyXG4gICAgPC9Cb3g+XHJcbiAgKVxyXG59XHJcbiJdLCJuYW1lcyI6WyJCb3giLCJmcyIsIm1hdHRlciIsIm1kIiwiZ2V0U3RhdGljUGF0aHMiLCJmaWxlcyIsInJlYWRkaXJTeW5jIiwicGF0aHMiLCJtYXAiLCJmaWxlTmFtZSIsInBhcmFtcyIsInNsdWciLCJyZXBsYWNlIiwiZmFsbGJhY2siLCJnZXRTdGF0aWNQcm9wcyIsInJlYWRGaWxlU3luYyIsImRhdGEiLCJmcm9udG1hdHRlciIsImNvbnRlbnQiLCJwcm9wcyIsIlBvc3RQYWdlIiwiY2xhc3NOYW1lIiwic3R5bGUiLCJmb250U2l6ZSIsInBvc2l0aW9uIiwibWFyZ2luQm90dG9tIiwiaDEiLCJ0aXRsZSIsImJnIiwiZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUwiLCJfX2h0bWwiLCJyZW5kZXIiLCJzeCIsInBhZGRpbmciLCJiYWNrZ3JvdW5kQ29sb3IiLCJkaXNwbGF5IiwianVzdGlmeUNvbnRlbnQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/post/[slug].js\n");

/***/ }),

/***/ "@chakra-ui/react":
/*!***********************************!*\
  !*** external "@chakra-ui/react" ***!
  \***********************************/
/***/ ((module) => {

module.exports = require("@chakra-ui/react");

/***/ }),

/***/ "gray-matter":
/*!******************************!*\
  !*** external "gray-matter" ***!
  \******************************/
/***/ ((module) => {

module.exports = require("gray-matter");

/***/ }),

/***/ "markdown-it":
/*!******************************!*\
  !*** external "markdown-it" ***!
  \******************************/
/***/ ((module) => {

module.exports = require("markdown-it");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

module.exports = require("react/jsx-dev-runtime");

/***/ }),

/***/ "fs":
/*!*********************!*\
  !*** external "fs" ***!
  \*********************/
/***/ ((module) => {

module.exports = require("fs");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/post/[slug].js"));
module.exports = __webpack_exports__;

})();