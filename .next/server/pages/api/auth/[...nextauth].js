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
exports.id = "pages/api/auth/[...nextauth]";
exports.ids = ["pages/api/auth/[...nextauth]"];
exports.modules = {

/***/ "next-auth":
/*!****************************!*\
  !*** external "next-auth" ***!
  \****************************/
/***/ ((module) => {

module.exports = require("next-auth");

/***/ }),

/***/ "next-auth/providers/credentials":
/*!**************************************************!*\
  !*** external "next-auth/providers/credentials" ***!
  \**************************************************/
/***/ ((module) => {

module.exports = require("next-auth/providers/credentials");

/***/ }),

/***/ "(api)/./src/pages/api/auth/[...nextauth].js":
/*!*********************************************!*\
  !*** ./src/pages/api/auth/[...nextauth].js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"authOptions\": () => (/* binding */ authOptions),\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var next_auth__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next-auth */ \"next-auth\");\n/* harmony import */ var next_auth__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_auth__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_auth_providers_credentials__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next-auth/providers/credentials */ \"next-auth/providers/credentials\");\n/* harmony import */ var next_auth_providers_credentials__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_auth_providers_credentials__WEBPACK_IMPORTED_MODULE_1__);\n\n\nconst authOptions = {\n    providers: [\n        next_auth_providers_credentials__WEBPACK_IMPORTED_MODULE_1___default()({\n            // The name to display on the sign in form (e.g. 'Sign in with...')\n            name: \"Credentials\",\n            // The credentials is used to generate a suitable form on the sign in page.\n            // You can specify whatever fields you are expecting to be submitted.\n            // e.g. domain, username, password, 2FA token, etc.\n            // You can pass any HTML attribute to the <input> tag through the object.\n            credentials: {\n                username: {\n                    label: \"Username\",\n                    type: \"text\",\n                    placeholder: \"jsmith\"\n                },\n                password: {\n                    label: \"Password\",\n                    type: \"password\"\n                }\n            },\n            async authorize (credentials, req) {\n                // You need to provide your own logic here that takes the credentials\n                // submitted and returns either a object representing a user or value\n                // that is false/null if the credentials are invalid.\n                // e.g. return { id: 1, name: 'J Smith', email: 'jsmith@example.com' }\n                // You can also use the `req` object to obtain additional parameters\n                // (i.e., the request IP address)\n                /*\n            const res = await fetch(\"/your/endpoint\", {\n               method: 'POST',\n               body: JSON.stringify(credentials),\n               headers: { \"Content-Type\": \"application/json\" }\n            })\n\n           */ return credentials;\n            }\n        })\n    ]\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (next_auth__WEBPACK_IMPORTED_MODULE_0___default()(authOptions));\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9zcmMvcGFnZXMvYXBpL2F1dGgvWy4uLm5leHRhdXRoXS5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBZ0M7QUFDa0M7QUFFM0QsTUFBTUUsV0FBVyxHQUFHO0lBQ3hCQyxTQUFTLEVBQUU7UUFDUkYsc0VBQW1CLENBQUM7WUFDakIsbUVBQW1FO1lBQ25FRyxJQUFJLEVBQUUsYUFBYTtZQUNuQiwyRUFBMkU7WUFDM0UscUVBQXFFO1lBQ3JFLG1EQUFtRDtZQUNuRCx5RUFBeUU7WUFDekVDLFdBQVcsRUFBRTtnQkFDVkMsUUFBUSxFQUFFO29CQUFFQyxLQUFLLEVBQUUsVUFBVTtvQkFBRUMsSUFBSSxFQUFFLE1BQU07b0JBQUVDLFdBQVcsRUFBRSxRQUFRO2lCQUFFO2dCQUNwRUMsUUFBUSxFQUFFO29CQUFHSCxLQUFLLEVBQUUsVUFBVTtvQkFBRUMsSUFBSSxFQUFFLFVBQVU7aUJBQUU7YUFDcEQ7WUFDRCxNQUFNRyxTQUFTLEVBQUNOLFdBQVcsRUFBRU8sR0FBRyxFQUFFO2dCQUMvQixxRUFBcUU7Z0JBQ3JFLHFFQUFxRTtnQkFDckUscURBQXFEO2dCQUNyRCxzRUFBc0U7Z0JBQ3RFLG9FQUFvRTtnQkFDcEUsaUNBQWlDO2dCQUNqQzs7Ozs7OztXQU9ELEdBQ0MsT0FBT1AsV0FBVzthQUNwQjtTQUNILENBQUM7S0FDSjtDQUNIO0FBRUQsaUVBQWVMLGdEQUFRLENBQUNFLFdBQVcsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL3BvcnRmb2xpby1mcm9udGVuZC8uL3NyYy9wYWdlcy9hcGkvYXV0aC9bLi4ubmV4dGF1dGhdLmpzPzc4YWIiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IE5leHRBdXRoIGZyb20gXCJuZXh0LWF1dGhcIlxuaW1wb3J0IENyZWRlbnRpYWxzUHJvdmlkZXIgZnJvbSBcIm5leHQtYXV0aC9wcm92aWRlcnMvY3JlZGVudGlhbHNcIjtcblxuZXhwb3J0IGNvbnN0IGF1dGhPcHRpb25zID0ge1xuICAgcHJvdmlkZXJzOiBbXG4gICAgICBDcmVkZW50aWFsc1Byb3ZpZGVyKHtcbiAgICAgICAgIC8vIFRoZSBuYW1lIHRvIGRpc3BsYXkgb24gdGhlIHNpZ24gaW4gZm9ybSAoZS5nLiAnU2lnbiBpbiB3aXRoLi4uJylcbiAgICAgICAgIG5hbWU6ICdDcmVkZW50aWFscycsXG4gICAgICAgICAvLyBUaGUgY3JlZGVudGlhbHMgaXMgdXNlZCB0byBnZW5lcmF0ZSBhIHN1aXRhYmxlIGZvcm0gb24gdGhlIHNpZ24gaW4gcGFnZS5cbiAgICAgICAgIC8vIFlvdSBjYW4gc3BlY2lmeSB3aGF0ZXZlciBmaWVsZHMgeW91IGFyZSBleHBlY3RpbmcgdG8gYmUgc3VibWl0dGVkLlxuICAgICAgICAgLy8gZS5nLiBkb21haW4sIHVzZXJuYW1lLCBwYXNzd29yZCwgMkZBIHRva2VuLCBldGMuXG4gICAgICAgICAvLyBZb3UgY2FuIHBhc3MgYW55IEhUTUwgYXR0cmlidXRlIHRvIHRoZSA8aW5wdXQ+IHRhZyB0aHJvdWdoIHRoZSBvYmplY3QuXG4gICAgICAgICBjcmVkZW50aWFsczoge1xuICAgICAgICAgICAgdXNlcm5hbWU6IHsgbGFiZWw6IFwiVXNlcm5hbWVcIiwgdHlwZTogXCJ0ZXh0XCIsIHBsYWNlaG9sZGVyOiBcImpzbWl0aFwiIH0sXG4gICAgICAgICAgICBwYXNzd29yZDogeyAgbGFiZWw6IFwiUGFzc3dvcmRcIiwgdHlwZTogXCJwYXNzd29yZFwiIH1cbiAgICAgICAgIH0sXG4gICAgICAgICBhc3luYyBhdXRob3JpemUoY3JlZGVudGlhbHMsIHJlcSkge1xuICAgICAgICAgICAgLy8gWW91IG5lZWQgdG8gcHJvdmlkZSB5b3VyIG93biBsb2dpYyBoZXJlIHRoYXQgdGFrZXMgdGhlIGNyZWRlbnRpYWxzXG4gICAgICAgICAgICAvLyBzdWJtaXR0ZWQgYW5kIHJldHVybnMgZWl0aGVyIGEgb2JqZWN0IHJlcHJlc2VudGluZyBhIHVzZXIgb3IgdmFsdWVcbiAgICAgICAgICAgIC8vIHRoYXQgaXMgZmFsc2UvbnVsbCBpZiB0aGUgY3JlZGVudGlhbHMgYXJlIGludmFsaWQuXG4gICAgICAgICAgICAvLyBlLmcuIHJldHVybiB7IGlkOiAxLCBuYW1lOiAnSiBTbWl0aCcsIGVtYWlsOiAnanNtaXRoQGV4YW1wbGUuY29tJyB9XG4gICAgICAgICAgICAvLyBZb3UgY2FuIGFsc28gdXNlIHRoZSBgcmVxYCBvYmplY3QgdG8gb2J0YWluIGFkZGl0aW9uYWwgcGFyYW1ldGVyc1xuICAgICAgICAgICAgLy8gKGkuZS4sIHRoZSByZXF1ZXN0IElQIGFkZHJlc3MpXG4gICAgICAgICAgICAvKlxuICAgICAgICAgICAgY29uc3QgcmVzID0gYXdhaXQgZmV0Y2goXCIveW91ci9lbmRwb2ludFwiLCB7XG4gICAgICAgICAgICAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICAgICAgICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KGNyZWRlbnRpYWxzKSxcbiAgICAgICAgICAgICAgIGhlYWRlcnM6IHsgXCJDb250ZW50LVR5cGVcIjogXCJhcHBsaWNhdGlvbi9qc29uXCIgfVxuICAgICAgICAgICAgfSlcblxuICAgICAgICAgICAqL1xuICAgICAgICAgICAgcmV0dXJuIGNyZWRlbnRpYWxzXG4gICAgICAgICB9XG4gICAgICB9KVxuICAgXVxufVxuXG5leHBvcnQgZGVmYXVsdCBOZXh0QXV0aChhdXRoT3B0aW9ucylcbiJdLCJuYW1lcyI6WyJOZXh0QXV0aCIsIkNyZWRlbnRpYWxzUHJvdmlkZXIiLCJhdXRoT3B0aW9ucyIsInByb3ZpZGVycyIsIm5hbWUiLCJjcmVkZW50aWFscyIsInVzZXJuYW1lIiwibGFiZWwiLCJ0eXBlIiwicGxhY2Vob2xkZXIiLCJwYXNzd29yZCIsImF1dGhvcml6ZSIsInJlcSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(api)/./src/pages/api/auth/[...nextauth].js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./src/pages/api/auth/[...nextauth].js"));
module.exports = __webpack_exports__;

})();