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
exports.id = "pages/_app";
exports.ids = ["pages/_app"];
exports.modules = {

/***/ "./src/layouts/AuthLayout.jsx":
/*!************************************!*\
  !*** ./src/layouts/AuthLayout.jsx ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ AuthLayout)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next-auth/react */ \"next-auth/react\");\n/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_auth_react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ \"next/router\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-bootstrap */ \"react-bootstrap\");\n/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__);\n\n\n\n\nfunction AuthLayout({ children  }) {\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();\n    const { status  } = (0,next_auth_react__WEBPACK_IMPORTED_MODULE_1__.useSession)({\n        required: true,\n        onUnauthenticated () {\n            router.push(\"/sign-in\");\n        }\n    });\n    if (status === \"loading\") {\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"py-5 d-flex justify-content-center\",\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__.Spinner, {\n                animation: \"border\",\n                role: \"status\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                    className: \"visually-hidden\",\n                    children: \"Loading...\"\n                }, void 0, false, {\n                    fileName: \"/Users/maxim/www/portfolio/src/layouts/AuthLayout.jsx\",\n                    lineNumber: 17,\n                    columnNumber: 13\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/maxim/www/portfolio/src/layouts/AuthLayout.jsx\",\n                lineNumber: 16,\n                columnNumber: 10\n            }, this)\n        }, void 0, false, {\n            fileName: \"/Users/maxim/www/portfolio/src/layouts/AuthLayout.jsx\",\n            lineNumber: 15,\n            columnNumber: 14\n        }, this);\n    } else if (status === \"authenticated\") {\n        return children;\n    }\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvbGF5b3V0cy9BdXRoTGF5b3V0LmpzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFBQTtBQUEyQztBQUNMO0FBQ0U7QUFFeEIsU0FBU0csVUFBVSxDQUFDLEVBQUVDLFFBQVEsR0FBRSxFQUFFO0lBQy9DLE1BQU1DLE1BQU0sR0FBR0osc0RBQVMsRUFBRTtJQUMxQixNQUFNLEVBQUVLLE1BQU0sR0FBRSxHQUFHTiwyREFBVSxDQUFDO1FBQzNCTyxRQUFRLEVBQUUsSUFBSTtRQUNkQyxpQkFBaUIsSUFBRztZQUNqQkgsTUFBTSxDQUFDSSxJQUFJLENBQUMsVUFBVSxDQUFDO1NBQ3pCO0tBQ0gsQ0FBQztJQUVGLElBQUlILE1BQU0sS0FBSyxTQUFTLEVBQUU7UUFDdkIscUJBQU8sOERBQUNJLEtBQUc7WUFBQ0MsU0FBUyxFQUFDLG9DQUFvQztzQkFDdkQsNEVBQUNULG9EQUFPO2dCQUFDVSxTQUFTLEVBQUMsUUFBUTtnQkFBQ0MsSUFBSSxFQUFDLFFBQVE7MEJBQ3RDLDRFQUFDQyxNQUFJO29CQUFDSCxTQUFTLEVBQUMsaUJBQWlCOzhCQUFDLFlBQVU7Ozs7O3dCQUFPOzs7OztvQkFDNUM7Ozs7O2dCQUNQO0tBQ1IsTUFBTSxJQUFJTCxNQUFNLEtBQUssZUFBZSxFQUFFO1FBQ3BDLE9BQU9GLFFBQVE7S0FDakI7Q0FDSCIsInNvdXJjZXMiOlsid2VicGFjazovL3BvcnRmb2xpby1mcm9udGVuZC8uL3NyYy9sYXlvdXRzL0F1dGhMYXlvdXQuanN4P2I4NTQiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHt1c2VTZXNzaW9ufSBmcm9tICduZXh0LWF1dGgvcmVhY3QnO1xuaW1wb3J0IHt1c2VSb3V0ZXJ9IGZyb20gJ25leHQvcm91dGVyJztcbmltcG9ydCB7U3Bpbm5lcn0gZnJvbSAncmVhY3QtYm9vdHN0cmFwJztcblxuZXhwb3J0IGRlZmF1bHQgIGZ1bmN0aW9uIEF1dGhMYXlvdXQoeyBjaGlsZHJlbiB9KSB7XG4gICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcbiAgIGNvbnN0IHsgc3RhdHVzIH0gPSB1c2VTZXNzaW9uKHtcbiAgICAgIHJlcXVpcmVkOiB0cnVlLFxuICAgICAgb25VbmF1dGhlbnRpY2F0ZWQoKSB7XG4gICAgICAgICByb3V0ZXIucHVzaCgnL3NpZ24taW4nKVxuICAgICAgfSxcbiAgIH0pO1xuXG4gICBpZiAoc3RhdHVzID09PSBcImxvYWRpbmdcIikge1xuICAgICAgcmV0dXJuIDxkaXYgY2xhc3NOYW1lPVwicHktNSBkLWZsZXgganVzdGlmeS1jb250ZW50LWNlbnRlclwiPlxuICAgICAgICAgPFNwaW5uZXIgYW5pbWF0aW9uPVwiYm9yZGVyXCIgcm9sZT1cInN0YXR1c1wiPlxuICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwidmlzdWFsbHktaGlkZGVuXCI+TG9hZGluZy4uLjwvc3Bhbj5cbiAgICAgICAgIDwvU3Bpbm5lcj5cbiAgICAgIDwvZGl2PlxuICAgfSBlbHNlIGlmIChzdGF0dXMgPT09ICdhdXRoZW50aWNhdGVkJykge1xuICAgICAgcmV0dXJuIGNoaWxkcmVuXG4gICB9XG59XG4iXSwibmFtZXMiOlsidXNlU2Vzc2lvbiIsInVzZVJvdXRlciIsIlNwaW5uZXIiLCJBdXRoTGF5b3V0IiwiY2hpbGRyZW4iLCJyb3V0ZXIiLCJzdGF0dXMiLCJyZXF1aXJlZCIsIm9uVW5hdXRoZW50aWNhdGVkIiwicHVzaCIsImRpdiIsImNsYXNzTmFtZSIsImFuaW1hdGlvbiIsInJvbGUiLCJzcGFuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/layouts/AuthLayout.jsx\n");

/***/ }),

/***/ "./src/pages/_app.jsx":
/*!****************************!*\
  !*** ./src/pages/_app.jsx ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ MyApp)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var bootstrap_dist_css_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! bootstrap/dist/css/bootstrap.min.css */ \"./node_modules/bootstrap/dist/css/bootstrap.min.css\");\n/* harmony import */ var bootstrap_dist_css_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(bootstrap_dist_css_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next-auth/react */ \"next-auth/react\");\n/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_auth_react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _layouts_AuthLayout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../layouts/AuthLayout */ \"./src/layouts/AuthLayout.jsx\");\n/* harmony import */ var _app_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../app.scss */ \"./src/app.scss\");\n/* harmony import */ var _app_scss__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_app_scss__WEBPACK_IMPORTED_MODULE_4__);\n\n\n\n\n\nfunction MyApp({ Component , pageProps: { session , ...pageProps }  }) {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_auth_react__WEBPACK_IMPORTED_MODULE_2__.SessionProvider, {\n        session: session,\n        children: Component.auth ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_layouts_AuthLayout__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, {\n                ...pageProps\n            }, void 0, false, {\n                fileName: \"/Users/maxim/www/portfolio/src/pages/_app.jsx\",\n                lineNumber: 10,\n                columnNumber: 15\n            }, this)\n        }, void 0, false, {\n            fileName: \"/Users/maxim/www/portfolio/src/pages/_app.jsx\",\n            lineNumber: 9,\n            columnNumber: 11\n        }, this) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, {\n            ...pageProps\n        }, void 0, false, {\n            fileName: \"/Users/maxim/www/portfolio/src/pages/_app.jsx\",\n            lineNumber: 13,\n            columnNumber: 11\n        }, this)\n    }, void 0, false, {\n        fileName: \"/Users/maxim/www/portfolio/src/pages/_app.jsx\",\n        lineNumber: 7,\n        columnNumber: 14\n    }, this);\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvX2FwcC5qc3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUFBO0FBQThDO0FBQ0c7QUFDRjtBQUMxQjtBQUVOLFNBQVNFLEtBQUssQ0FBQyxFQUFFQyxTQUFTLEdBQUVDLFNBQVMsRUFBRSxFQUFFQyxPQUFPLEdBQUUsR0FBR0QsU0FBUyxFQUFFLEdBQUUsRUFBRTtJQUMvRSxxQkFBUyw4REFBQ0osNERBQWU7UUFBQ0ssT0FBTyxFQUFFQSxPQUFPO2tCQUNyQ0YsU0FBUyxDQUFDRyxJQUFJLGlCQUNiLDhEQUFDTCwyREFBVTtzQkFDUCw0RUFBQ0UsU0FBUztnQkFBRSxHQUFHQyxTQUFTOzs7OztvQkFBSTs7Ozs7Z0JBQ25CLGlCQUViLDhEQUFDRCxTQUFTO1lBQUUsR0FBR0MsU0FBUzs7Ozs7Z0JBQUk7Ozs7O1lBRWhCO0NBQ3JCIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcG9ydGZvbGlvLWZyb250ZW5kLy4vc3JjL3BhZ2VzL19hcHAuanN4PzRjNzciXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICdib290c3RyYXAvZGlzdC9jc3MvYm9vdHN0cmFwLm1pbi5jc3MnO1xuaW1wb3J0IHsgU2Vzc2lvblByb3ZpZGVyIH0gZnJvbSBcIm5leHQtYXV0aC9yZWFjdFwiXG5pbXBvcnQgQXV0aExheW91dCBmcm9tICcuLi9sYXlvdXRzL0F1dGhMYXlvdXQnO1xuaW1wb3J0ICcuLi9hcHAuc2Nzcyc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIE15QXBwKHsgQ29tcG9uZW50LCBwYWdlUHJvcHM6IHsgc2Vzc2lvbiwgLi4ucGFnZVByb3BzIH0gfSkge1xuICAgIHJldHVybiAgIDxTZXNzaW9uUHJvdmlkZXIgc2Vzc2lvbj17c2Vzc2lvbn0+XG4gICAgICAgIHtDb21wb25lbnQuYXV0aCA/IChcbiAgICAgICAgICA8QXV0aExheW91dD5cbiAgICAgICAgICAgICAgPENvbXBvbmVudCB7Li4ucGFnZVByb3BzfSAvPlxuICAgICAgICAgIDwvQXV0aExheW91dD5cbiAgICAgICAgKSA6IChcbiAgICAgICAgICA8Q29tcG9uZW50IHsuLi5wYWdlUHJvcHN9IC8+XG4gICAgICAgICl9XG4gICAgPC9TZXNzaW9uUHJvdmlkZXI+XG59XG4iXSwibmFtZXMiOlsiU2Vzc2lvblByb3ZpZGVyIiwiQXV0aExheW91dCIsIk15QXBwIiwiQ29tcG9uZW50IiwicGFnZVByb3BzIiwic2Vzc2lvbiIsImF1dGgiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/pages/_app.jsx\n");

/***/ }),

/***/ "./node_modules/bootstrap/dist/css/bootstrap.min.css":
/*!***********************************************************!*\
  !*** ./node_modules/bootstrap/dist/css/bootstrap.min.css ***!
  \***********************************************************/
/***/ (() => {



/***/ }),

/***/ "./src/app.scss":
/*!**********************!*\
  !*** ./src/app.scss ***!
  \**********************/
/***/ (() => {



/***/ }),

/***/ "next-auth/react":
/*!**********************************!*\
  !*** external "next-auth/react" ***!
  \**********************************/
/***/ ((module) => {

"use strict";
module.exports = require("next-auth/react");

/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/router");

/***/ }),

/***/ "react-bootstrap":
/*!**********************************!*\
  !*** external "react-bootstrap" ***!
  \**********************************/
/***/ ((module) => {

"use strict";
module.exports = require("react-bootstrap");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-dev-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./src/pages/_app.jsx"));
module.exports = __webpack_exports__;

})();