"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./src/pages/index.tsx":
/*!*****************************!*\
  !*** ./src/pages/index.tsx ***!
  \*****************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_Sidebar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/Sidebar */ \"./src/components/Sidebar.tsx\");\n/* harmony import */ var _components_PromptArea__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/PromptArea */ \"./src/components/PromptArea.tsx\");\n/* harmony import */ var _components_ToggleButton__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/ToggleButton */ \"./src/components/ToggleButton.tsx\");\n/* harmony import */ var _components_ui_vortex__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/ui/vortex */ \"./src/components/ui/vortex.tsx\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\nconst App = ()=>{\n    _s();\n    const [isSidebarOpen, setIsSidebarOpen] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(true);\n    const [responseData, setResponseData] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const handleToggleSidebar = ()=>{\n        setIsSidebarOpen(!isSidebarOpen);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"flex h-screen w-screen text-white\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Sidebar__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                isOpen: isSidebarOpen\n            }, void 0, false, {\n                fileName: \"/Users/abgoenka/Documents/InternHackathon/frontend/src/pages/index.tsx\",\n                lineNumber: 17,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex-1 flex flex-col transition-all duration-300 \".concat(isSidebarOpen ? \"ml-0\" : \"ml-0\"),\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"flex-1 flex w-full items-center justify-center text-center\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ToggleButton__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                            isOpen: isSidebarOpen,\n                            onClick: handleToggleSidebar\n                        }, void 0, false, {\n                            fileName: \"/Users/abgoenka/Documents/InternHackathon/frontend/src/pages/index.tsx\",\n                            lineNumber: 24,\n                            columnNumber: 11\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"w-full max-w-4xl mx-auto\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                className: \"mt-2 text-lg\",\n                                children: responseData\n                            }, void 0, false, {\n                                fileName: \"/Users/abgoenka/Documents/InternHackathon/frontend/src/pages/index.tsx\",\n                                lineNumber: 27,\n                                columnNumber: 13\n                            }, undefined)\n                        }, void 0, false, {\n                            fileName: \"/Users/abgoenka/Documents/InternHackathon/frontend/src/pages/index.tsx\",\n                            lineNumber: 26,\n                            columnNumber: 11\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"w-[calc(100%-4rem)] mx-auto rounded-md  h-[30rem] overflow-hidden\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_vortex__WEBPACK_IMPORTED_MODULE_5__.Vortex, {\n                                backgroundColor: \"black\",\n                                className: \"flex items-center flex-col justify-center px-2 md:px-10 py-4 w-full h-full\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                                        className: \"text-white text-2xl md:text-6xl font-bold text-center\",\n                                        children: \"AbilitySync\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/abgoenka/Documents/InternHackathon/frontend/src/pages/index.tsx\",\n                                        lineNumber: 34,\n                                        columnNumber: 15\n                                    }, undefined),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                        className: \"text-white text-sm md:text-2xl max-w-xl mt-6 text-center\",\n                                        children: \"Aiming towards #SocialMediaforEveryone. I will do my best to assist you!\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/abgoenka/Documents/InternHackathon/frontend/src/pages/index.tsx\",\n                                        lineNumber: 37,\n                                        columnNumber: 15\n                                    }, undefined)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/abgoenka/Documents/InternHackathon/frontend/src/pages/index.tsx\",\n                                lineNumber: 30,\n                                columnNumber: 13\n                            }, undefined)\n                        }, void 0, false, {\n                            fileName: \"/Users/abgoenka/Documents/InternHackathon/frontend/src/pages/index.tsx\",\n                            lineNumber: 29,\n                            columnNumber: 11\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_PromptArea__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                            isSidebarOpen: isSidebarOpen,\n                            setResponseData: setResponseData\n                        }, void 0, false, {\n                            fileName: \"/Users/abgoenka/Documents/InternHackathon/frontend/src/pages/index.tsx\",\n                            lineNumber: 43,\n                            columnNumber: 11\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/abgoenka/Documents/InternHackathon/frontend/src/pages/index.tsx\",\n                    lineNumber: 23,\n                    columnNumber: 9\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"/Users/abgoenka/Documents/InternHackathon/frontend/src/pages/index.tsx\",\n                lineNumber: 18,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/abgoenka/Documents/InternHackathon/frontend/src/pages/index.tsx\",\n        lineNumber: 16,\n        columnNumber: 5\n    }, undefined);\n};\n_s(App, \"b1O294PKVXUZ2xdhehbO45Qh43k=\");\n_c = App;\n/* harmony default export */ __webpack_exports__[\"default\"] = (App);\nvar _c;\n$RefreshReg$(_c, \"App\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvaW5kZXgudHN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQXdDO0FBQ0k7QUFDTTtBQUNJO0FBQ0w7QUFFakQsTUFBTU0sTUFBZ0I7O0lBQ3BCLE1BQU0sQ0FBQ0MsZUFBZUMsaUJBQWlCLEdBQUdQLCtDQUFRQSxDQUFDO0lBQ25ELE1BQU0sQ0FBQ1EsY0FBY0MsZ0JBQWdCLEdBQUdULCtDQUFRQSxDQUFDO0lBRWpELE1BQU1VLHNCQUFzQjtRQUMxQkgsaUJBQWlCLENBQUNEO0lBQ3BCO0lBRUEscUJBQ0UsOERBQUNLO1FBQUlDLFdBQVU7OzBCQUNiLDhEQUFDWCwyREFBT0E7Z0JBQUNZLFFBQVFQOzs7Ozs7MEJBQ2pCLDhEQUFDSztnQkFDQ0MsV0FBVyxvREFFVixPQURDTixnQkFBZ0IsU0FBUzswQkFHM0IsNEVBQUNLO29CQUFJQyxXQUFVOztzQ0FDYiw4REFBQ1QsZ0VBQVlBOzRCQUFDVSxRQUFRUDs0QkFBZVEsU0FBU0o7Ozs7OztzQ0FFOUMsOERBQUNDOzRCQUFJQyxXQUFVO3NDQUNiLDRFQUFDRztnQ0FBRUgsV0FBVTswQ0FBZ0JKOzs7Ozs7Ozs7OztzQ0FFL0IsOERBQUNHOzRCQUFJQyxXQUFVO3NDQUNiLDRFQUFDUix5REFBTUE7Z0NBQ0xZLGlCQUFnQjtnQ0FDaEJKLFdBQVU7O2tEQUVWLDhEQUFDSzt3Q0FBR0wsV0FBVTtrREFBd0Q7Ozs7OztrREFHdEUsOERBQUNHO3dDQUFFSCxXQUFVO2tEQUEyRDs7Ozs7Ozs7Ozs7Ozs7Ozs7c0NBTTVFLDhEQUFDViw4REFBVUE7NEJBQ1RJLGVBQWVBOzRCQUNmRyxpQkFBaUJBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQU03QjtHQTVDTUo7S0FBQUE7QUE4Q04sK0RBQWVBLEdBQUdBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3BhZ2VzL2luZGV4LnRzeD8xOWEwIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IFNpZGViYXIgZnJvbSBcIi4uL2NvbXBvbmVudHMvU2lkZWJhclwiO1xuaW1wb3J0IFByb21wdEFyZWEgZnJvbSBcIi4uL2NvbXBvbmVudHMvUHJvbXB0QXJlYVwiO1xuaW1wb3J0IFRvZ2dsZUJ1dHRvbiBmcm9tIFwiLi4vY29tcG9uZW50cy9Ub2dnbGVCdXR0b25cIjtcbmltcG9ydCB7IFZvcnRleCB9IGZyb20gXCIuLi9jb21wb25lbnRzL3VpL3ZvcnRleFwiO1xuXG5jb25zdCBBcHA6IFJlYWN0LkZDID0gKCkgPT4ge1xuICBjb25zdCBbaXNTaWRlYmFyT3Blbiwgc2V0SXNTaWRlYmFyT3Blbl0gPSB1c2VTdGF0ZSh0cnVlKTtcbiAgY29uc3QgW3Jlc3BvbnNlRGF0YSwgc2V0UmVzcG9uc2VEYXRhXSA9IHVzZVN0YXRlKFwiXCIpO1xuXG4gIGNvbnN0IGhhbmRsZVRvZ2dsZVNpZGViYXIgPSAoKSA9PiB7XG4gICAgc2V0SXNTaWRlYmFyT3BlbighaXNTaWRlYmFyT3Blbik7XG4gIH07XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggaC1zY3JlZW4gdy1zY3JlZW4gdGV4dC13aGl0ZVwiPlxuICAgICAgPFNpZGViYXIgaXNPcGVuPXtpc1NpZGViYXJPcGVufSAvPlxuICAgICAgPGRpdlxuICAgICAgICBjbGFzc05hbWU9e2BmbGV4LTEgZmxleCBmbGV4LWNvbCB0cmFuc2l0aW9uLWFsbCBkdXJhdGlvbi0zMDAgJHtcbiAgICAgICAgICBpc1NpZGViYXJPcGVuID8gXCJtbC0wXCIgOiBcIm1sLTBcIlxuICAgICAgICB9YH1cbiAgICAgID5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4LTEgZmxleCB3LWZ1bGwgaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyIHRleHQtY2VudGVyXCI+XG4gICAgICAgICAgPFRvZ2dsZUJ1dHRvbiBpc09wZW49e2lzU2lkZWJhck9wZW59IG9uQ2xpY2s9e2hhbmRsZVRvZ2dsZVNpZGViYXJ9IC8+XG5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInctZnVsbCBtYXgtdy00eGwgbXgtYXV0b1wiPlxuICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwibXQtMiB0ZXh0LWxnXCI+e3Jlc3BvbnNlRGF0YX08L3A+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3LVtjYWxjKDEwMCUtNHJlbSldIG14LWF1dG8gcm91bmRlZC1tZCAgaC1bMzByZW1dIG92ZXJmbG93LWhpZGRlblwiPlxuICAgICAgICAgICAgPFZvcnRleFxuICAgICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I9XCJibGFja1wiXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cImZsZXggaXRlbXMtY2VudGVyIGZsZXgtY29sIGp1c3RpZnktY2VudGVyIHB4LTIgbWQ6cHgtMTAgcHktNCB3LWZ1bGwgaC1mdWxsXCJcbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgPGgyIGNsYXNzTmFtZT1cInRleHQtd2hpdGUgdGV4dC0yeGwgbWQ6dGV4dC02eGwgZm9udC1ib2xkIHRleHQtY2VudGVyXCI+XG4gICAgICAgICAgICAgICAgQWJpbGl0eVN5bmNcbiAgICAgICAgICAgICAgPC9oMj5cbiAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC13aGl0ZSB0ZXh0LXNtIG1kOnRleHQtMnhsIG1heC13LXhsIG10LTYgdGV4dC1jZW50ZXJcIj5cbiAgICAgICAgICAgICAgICBBaW1pbmcgdG93YXJkcyAjU29jaWFsTWVkaWFmb3JFdmVyeW9uZS4gSSB3aWxsIGRvIG15IGJlc3QgdG9cbiAgICAgICAgICAgICAgICBhc3Npc3QgeW91IVxuICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICA8L1ZvcnRleD5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8UHJvbXB0QXJlYVxuICAgICAgICAgICAgaXNTaWRlYmFyT3Blbj17aXNTaWRlYmFyT3Blbn1cbiAgICAgICAgICAgIHNldFJlc3BvbnNlRGF0YT17c2V0UmVzcG9uc2VEYXRhfVxuICAgICAgICAgIC8+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBBcHA7XG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VTdGF0ZSIsIlNpZGViYXIiLCJQcm9tcHRBcmVhIiwiVG9nZ2xlQnV0dG9uIiwiVm9ydGV4IiwiQXBwIiwiaXNTaWRlYmFyT3BlbiIsInNldElzU2lkZWJhck9wZW4iLCJyZXNwb25zZURhdGEiLCJzZXRSZXNwb25zZURhdGEiLCJoYW5kbGVUb2dnbGVTaWRlYmFyIiwiZGl2IiwiY2xhc3NOYW1lIiwiaXNPcGVuIiwib25DbGljayIsInAiLCJiYWNrZ3JvdW5kQ29sb3IiLCJoMiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/pages/index.tsx\n"));

/***/ })

});