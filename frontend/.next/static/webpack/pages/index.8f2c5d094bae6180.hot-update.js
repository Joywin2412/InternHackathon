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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_Sidebar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/Sidebar */ \"./src/components/Sidebar.tsx\");\n/* harmony import */ var _components_PromptArea__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/PromptArea */ \"./src/components/PromptArea.tsx\");\n/* harmony import */ var _components_ToggleButton__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/ToggleButton */ \"./src/components/ToggleButton.tsx\");\n/* harmony import */ var _components_ui_vortex__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/ui/vortex */ \"./src/components/ui/vortex.tsx\");\n/* harmony import */ var _barrel_optimize_names_FaRegCircleUser_react_icons_fa6__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! __barrel_optimize__?names=FaRegCircleUser!=!react-icons/fa6 */ \"__barrel_optimize__?names=FaRegCircleUser!=!./node_modules/react-icons/fa6/index.mjs\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\nconst App = ()=>{\n    _s();\n    const [isSidebarOpen, setIsSidebarOpen] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(true);\n    const [messages, setMessages] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    const [hasStartedChat, setHasStartedChat] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const chatContainerRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);\n    const handleToggleSidebar = ()=>{\n        setIsSidebarOpen(!isSidebarOpen);\n    };\n    const addMessage = (message, attachments, isUserMessage)=>{\n        setMessages((prevMessages)=>[\n                ...prevMessages,\n                {\n                    message,\n                    attachments,\n                    isUserMessage\n                }\n            ]);\n        if (!hasStartedChat) setHasStartedChat(true);\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        if (chatContainerRef.current) {\n            chatContainerRef.current.scrollTop = chatContainerRef.current.scrollHeight;\n        }\n    }, [\n        messages\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"flex h-screen w-screen text-white\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Sidebar__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                isOpen: isSidebarOpen\n            }, void 0, false, {\n                fileName: \"/Users/abgoenka/Documents/InternHackathon/frontend/src/pages/index.tsx\",\n                lineNumber: 32,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex-1 flex flex-col transition-all duration-300 \".concat(isSidebarOpen ? \"ml-0\" : \"ml-0\"),\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"flex-1 flex w-full items-center justify-center text-center\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ToggleButton__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                            isOpen: isSidebarOpen,\n                            onClick: handleToggleSidebar\n                        }, void 0, false, {\n                            fileName: \"/Users/abgoenka/Documents/InternHackathon/frontend/src/pages/index.tsx\",\n                            lineNumber: 39,\n                            columnNumber: 11\n                        }, undefined),\n                        hasStartedChat ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            ref: chatContainerRef,\n                            className: \"flex-1 p-4 bg-gray-900 h-[60vh overflow-y-scroll\",\n                            children: messages.map((msg, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"flex mb-4 \".concat(msg.isUserMessage ? \"justify-end\" : \"justify-start\"),\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        className: \"flex items-start\",\n                                        children: [\n                                            msg.isUserMessage ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_FaRegCircleUser_react_icons_fa6__WEBPACK_IMPORTED_MODULE_6__.FaRegCircleUser, {\n                                                className: \"mr-2\"\n                                            }, void 0, false, {\n                                                fileName: \"/Users/abgoenka/Documents/InternHackathon/frontend/src/pages/index.tsx\",\n                                                lineNumber: 50,\n                                                columnNumber: 23\n                                            }, undefined) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                                                src: \"./logo.png\",\n                                                alt: \"AbilitySync Logo\",\n                                                className: \"w-6 h-6 mr-2\"\n                                            }, void 0, false, {\n                                                fileName: \"/Users/abgoenka/Documents/InternHackathon/frontend/src/pages/index.tsx\",\n                                                lineNumber: 52,\n                                                columnNumber: 23\n                                            }, undefined),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                                className: \"bg-gray-700 p-4 rounded-lg max-w-md text-left\",\n                                                children: [\n                                                    msg.message && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                                        children: msg.message\n                                                    }, void 0, false, {\n                                                        fileName: \"/Users/abgoenka/Documents/InternHackathon/frontend/src/pages/index.tsx\",\n                                                        lineNumber: 55,\n                                                        columnNumber: 39\n                                                    }, undefined),\n                                                    msg.attachments.length > 0 && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                                        className: \"mt-2\",\n                                                        children: msg.attachments.map((file, fileIndex)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                                                className: \"flex items-center space-x-2\",\n                                                                children: [\n                                                                    file.type.startsWith(\"image/\") && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                                                                        src: URL.createObjectURL(file),\n                                                                        alt: file.name,\n                                                                        className: \"w-16 h-16 object-cover\"\n                                                                    }, void 0, false, {\n                                                                        fileName: \"/Users/abgoenka/Documents/InternHackathon/frontend/src/pages/index.tsx\",\n                                                                        lineNumber: 61,\n                                                                        columnNumber: 33\n                                                                    }, undefined),\n                                                                    file.type.startsWith(\"audio/\") && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                                                        children: file.name\n                                                                    }, void 0, false, {\n                                                                        fileName: \"/Users/abgoenka/Documents/InternHackathon/frontend/src/pages/index.tsx\",\n                                                                        lineNumber: 63,\n                                                                        columnNumber: 66\n                                                                    }, undefined),\n                                                                    file.type.startsWith(\"video/\") && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"video\", {\n                                                                        src: URL.createObjectURL(file),\n                                                                        controls: true,\n                                                                        className: \"w-16 h-16 object-cover\"\n                                                                    }, void 0, false, {\n                                                                        fileName: \"/Users/abgoenka/Documents/InternHackathon/frontend/src/pages/index.tsx\",\n                                                                        lineNumber: 65,\n                                                                        columnNumber: 33\n                                                                    }, undefined)\n                                                                ]\n                                                            }, fileIndex, true, {\n                                                                fileName: \"/Users/abgoenka/Documents/InternHackathon/frontend/src/pages/index.tsx\",\n                                                                lineNumber: 59,\n                                                                columnNumber: 29\n                                                            }, undefined))\n                                                    }, void 0, false, {\n                                                        fileName: \"/Users/abgoenka/Documents/InternHackathon/frontend/src/pages/index.tsx\",\n                                                        lineNumber: 57,\n                                                        columnNumber: 25\n                                                    }, undefined)\n                                                ]\n                                            }, void 0, true, {\n                                                fileName: \"/Users/abgoenka/Documents/InternHackathon/frontend/src/pages/index.tsx\",\n                                                lineNumber: 54,\n                                                columnNumber: 21\n                                            }, undefined)\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"/Users/abgoenka/Documents/InternHackathon/frontend/src/pages/index.tsx\",\n                                        lineNumber: 48,\n                                        columnNumber: 19\n                                    }, undefined)\n                                }, index, false, {\n                                    fileName: \"/Users/abgoenka/Documents/InternHackathon/frontend/src/pages/index.tsx\",\n                                    lineNumber: 44,\n                                    columnNumber: 17\n                                }, undefined))\n                        }, void 0, false, {\n                            fileName: \"/Users/abgoenka/Documents/InternHackathon/frontend/src/pages/index.tsx\",\n                            lineNumber: 42,\n                            columnNumber: 13\n                        }, undefined) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"w-[calc(100%-4rem)] mx-auto rounded-md h-[30rem] overflow-hidden\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_vortex__WEBPACK_IMPORTED_MODULE_5__.Vortex, {\n                                backgroundColor: \"black\",\n                                className: \"flex items-center flex-col justify-center px-2 md:px-10 py-4 w-full h-full\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                                        className: \"text-white text-2xl md:text-6xl font-bold text-center\",\n                                        children: \"AbilitySync\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/abgoenka/Documents/InternHackathon/frontend/src/pages/index.tsx\",\n                                        lineNumber: 82,\n                                        columnNumber: 17\n                                    }, undefined),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                        className: \"text-white text-sm md:text-2xl max-w-xl mt-6 text-center\",\n                                        children: \"Aiming towards #SocialMediaforEveryone. I will do my best to assist you!\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/abgoenka/Documents/InternHackathon/frontend/src/pages/index.tsx\",\n                                        lineNumber: 85,\n                                        columnNumber: 17\n                                    }, undefined)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/abgoenka/Documents/InternHackathon/frontend/src/pages/index.tsx\",\n                                lineNumber: 78,\n                                columnNumber: 15\n                            }, undefined)\n                        }, void 0, false, {\n                            fileName: \"/Users/abgoenka/Documents/InternHackathon/frontend/src/pages/index.tsx\",\n                            lineNumber: 77,\n                            columnNumber: 13\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_PromptArea__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                            isSidebarOpen: isSidebarOpen,\n                            addMessage: addMessage\n                        }, void 0, false, {\n                            fileName: \"/Users/abgoenka/Documents/InternHackathon/frontend/src/pages/index.tsx\",\n                            lineNumber: 91,\n                            columnNumber: 11\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/abgoenka/Documents/InternHackathon/frontend/src/pages/index.tsx\",\n                    lineNumber: 38,\n                    columnNumber: 9\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"/Users/abgoenka/Documents/InternHackathon/frontend/src/pages/index.tsx\",\n                lineNumber: 33,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/abgoenka/Documents/InternHackathon/frontend/src/pages/index.tsx\",\n        lineNumber: 31,\n        columnNumber: 5\n    }, undefined);\n};\n_s(App, \"yZcSZ1So/lQyX6AEYzDI7GIneSk=\");\n_c = App;\n/* harmony default export */ __webpack_exports__[\"default\"] = (App);\nvar _c;\n$RefreshReg$(_c, \"App\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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RSw4REFBQ1U7d0NBQUVWLFdBQVU7a0RBQTJEOzs7Ozs7Ozs7Ozs7Ozs7OztzQ0FNOUUsOERBQUN0Qiw4REFBVUE7NEJBQUNLLGVBQWVBOzRCQUFlUSxZQUFZQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFLaEU7R0F2Rk1UO0tBQUFBO0FBeUZOLCtEQUFlQSxHQUFHQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9wYWdlcy9pbmRleC50c3g/MTlhMCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCwgdXNlUmVmIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgU2lkZWJhciBmcm9tIFwiLi4vY29tcG9uZW50cy9TaWRlYmFyXCI7XG5pbXBvcnQgUHJvbXB0QXJlYSBmcm9tIFwiLi4vY29tcG9uZW50cy9Qcm9tcHRBcmVhXCI7XG5pbXBvcnQgVG9nZ2xlQnV0dG9uIGZyb20gXCIuLi9jb21wb25lbnRzL1RvZ2dsZUJ1dHRvblwiO1xuaW1wb3J0IHsgVm9ydGV4IH0gZnJvbSBcIi4uL2NvbXBvbmVudHMvdWkvdm9ydGV4XCI7XG5pbXBvcnQgeyBGYVJlZ0NpcmNsZVVzZXIgfSBmcm9tIFwicmVhY3QtaWNvbnMvZmE2XCI7XG5pbXBvcnQgbG9nbyBmcm9tIFwiLi4vYXNzZXRzL2xvZ28ucG5nXCI7IC8vIEVuc3VyZSBsb2dvLnBuZyBpcyBwbGFjZWQgY29ycmVjdGx5IGluIHRoZSBhc3NldHMgZm9sZGVyXG5cbmNvbnN0IEFwcDogUmVhY3QuRkMgPSAoKSA9PiB7XG4gIGNvbnN0IFtpc1NpZGViYXJPcGVuLCBzZXRJc1NpZGViYXJPcGVuXSA9IHVzZVN0YXRlKHRydWUpO1xuICBjb25zdCBbbWVzc2FnZXMsIHNldE1lc3NhZ2VzXSA9IHVzZVN0YXRlPHsgbWVzc2FnZTogc3RyaW5nOyBhdHRhY2htZW50czogRmlsZVtdOyBpc1VzZXJNZXNzYWdlOiBib29sZWFuIH1bXT4oW10pO1xuICBjb25zdCBbaGFzU3RhcnRlZENoYXQsIHNldEhhc1N0YXJ0ZWRDaGF0XSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgY29uc3QgY2hhdENvbnRhaW5lclJlZiA9IHVzZVJlZjxIVE1MRGl2RWxlbWVudD4obnVsbCk7XG5cbiAgY29uc3QgaGFuZGxlVG9nZ2xlU2lkZWJhciA9ICgpID0+IHtcbiAgICBzZXRJc1NpZGViYXJPcGVuKCFpc1NpZGViYXJPcGVuKTtcbiAgfTtcblxuICBjb25zdCBhZGRNZXNzYWdlID0gKG1lc3NhZ2U6IHN0cmluZywgYXR0YWNobWVudHM6IEZpbGVbXSwgaXNVc2VyTWVzc2FnZTogYm9vbGVhbikgPT4ge1xuICAgIHNldE1lc3NhZ2VzKChwcmV2TWVzc2FnZXMpID0+IFsuLi5wcmV2TWVzc2FnZXMsIHsgbWVzc2FnZSwgYXR0YWNobWVudHMsIGlzVXNlck1lc3NhZ2UgfV0pO1xuICAgIGlmICghaGFzU3RhcnRlZENoYXQpIHNldEhhc1N0YXJ0ZWRDaGF0KHRydWUpO1xuICB9O1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgaWYgKGNoYXRDb250YWluZXJSZWYuY3VycmVudCkge1xuICAgICAgY2hhdENvbnRhaW5lclJlZi5jdXJyZW50LnNjcm9sbFRvcCA9IGNoYXRDb250YWluZXJSZWYuY3VycmVudC5zY3JvbGxIZWlnaHQ7XG4gICAgfVxuICB9LCBbbWVzc2FnZXNdKTtcblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBoLXNjcmVlbiB3LXNjcmVlbiB0ZXh0LXdoaXRlXCI+XG4gICAgICA8U2lkZWJhciBpc09wZW49e2lzU2lkZWJhck9wZW59IC8+XG4gICAgICA8ZGl2XG4gICAgICAgIGNsYXNzTmFtZT17YGZsZXgtMSBmbGV4IGZsZXgtY29sIHRyYW5zaXRpb24tYWxsIGR1cmF0aW9uLTMwMCAke1xuICAgICAgICAgIGlzU2lkZWJhck9wZW4gPyBcIm1sLTBcIiA6IFwibWwtMFwiXG4gICAgICAgIH1gfVxuICAgICAgPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXgtMSBmbGV4IHctZnVsbCBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXIgdGV4dC1jZW50ZXJcIj5cbiAgICAgICAgICA8VG9nZ2xlQnV0dG9uIGlzT3Blbj17aXNTaWRlYmFyT3Blbn0gb25DbGljaz17aGFuZGxlVG9nZ2xlU2lkZWJhcn0gLz5cblxuICAgICAgICAgIHtoYXNTdGFydGVkQ2hhdCA/IChcbiAgICAgICAgICAgIDxkaXYgcmVmPXtjaGF0Q29udGFpbmVyUmVmfSBjbGFzc05hbWU9XCJmbGV4LTEgcC00IGJnLWdyYXktOTAwIGgtWzYwdmggb3ZlcmZsb3cteS1zY3JvbGxcIj5cbiAgICAgICAgICAgICAge21lc3NhZ2VzLm1hcCgobXNnLCBpbmRleCkgPT4gKFxuICAgICAgICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgICAgICAgIGtleT17aW5kZXh9XG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2BmbGV4IG1iLTQgJHttc2cuaXNVc2VyTWVzc2FnZSA/IFwianVzdGlmeS1lbmRcIiA6IFwianVzdGlmeS1zdGFydFwifWB9XG4gICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLXN0YXJ0XCI+XG4gICAgICAgICAgICAgICAgICAgIHttc2cuaXNVc2VyTWVzc2FnZSA/IChcbiAgICAgICAgICAgICAgICAgICAgICA8RmFSZWdDaXJjbGVVc2VyIGNsYXNzTmFtZT1cIm1yLTJcIiAvPlxuICAgICAgICAgICAgICAgICAgICApIDogKFxuICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPScuL2xvZ28ucG5nJyBhbHQ9XCJBYmlsaXR5U3luYyBMb2dvXCIgY2xhc3NOYW1lPVwidy02IGgtNiBtci0yXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJiZy1ncmF5LTcwMCBwLTQgcm91bmRlZC1sZyBtYXgtdy1tZCB0ZXh0LWxlZnRcIj5cbiAgICAgICAgICAgICAgICAgICAgICB7bXNnLm1lc3NhZ2UgJiYgPHA+e21zZy5tZXNzYWdlfTwvcD59XG4gICAgICAgICAgICAgICAgICAgICAge21zZy5hdHRhY2htZW50cy5sZW5ndGggPiAwICYmIChcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibXQtMlwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICB7bXNnLmF0dGFjaG1lbnRzLm1hcCgoZmlsZSwgZmlsZUluZGV4KSA9PiAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBrZXk9e2ZpbGVJbmRleH0gY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1jZW50ZXIgc3BhY2UteC0yXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7ZmlsZS50eXBlLnN0YXJ0c1dpdGgoXCJpbWFnZS9cIikgJiYgKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz17VVJMLmNyZWF0ZU9iamVjdFVSTChmaWxlKX0gYWx0PXtmaWxlLm5hbWV9IGNsYXNzTmFtZT1cInctMTYgaC0xNiBvYmplY3QtY292ZXJcIiAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtmaWxlLnR5cGUuc3RhcnRzV2l0aChcImF1ZGlvL1wiKSAmJiA8cD57ZmlsZS5uYW1lfTwvcD59XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7ZmlsZS50eXBlLnN0YXJ0c1dpdGgoXCJ2aWRlby9cIikgJiYgKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dmlkZW8gc3JjPXtVUkwuY3JlYXRlT2JqZWN0VVJMKGZpbGUpfSBjb250cm9scyBjbGFzc05hbWU9XCJ3LTE2IGgtMTYgb2JqZWN0LWNvdmVyXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICkpfVxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgKSl9XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICApIDogKFxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3LVtjYWxjKDEwMCUtNHJlbSldIG14LWF1dG8gcm91bmRlZC1tZCBoLVszMHJlbV0gb3ZlcmZsb3ctaGlkZGVuXCI+XG4gICAgICAgICAgICAgIDxWb3J0ZXhcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I9XCJibGFja1wiXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1jZW50ZXIgZmxleC1jb2wganVzdGlmeS1jZW50ZXIgcHgtMiBtZDpweC0xMCBweS00IHctZnVsbCBoLWZ1bGxcIlxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgPGgyIGNsYXNzTmFtZT1cInRleHQtd2hpdGUgdGV4dC0yeGwgbWQ6dGV4dC02eGwgZm9udC1ib2xkIHRleHQtY2VudGVyXCI+XG4gICAgICAgICAgICAgICAgICBBYmlsaXR5U3luY1xuICAgICAgICAgICAgICAgIDwvaDI+XG4gICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC13aGl0ZSB0ZXh0LXNtIG1kOnRleHQtMnhsIG1heC13LXhsIG10LTYgdGV4dC1jZW50ZXJcIj5cbiAgICAgICAgICAgICAgICAgIEFpbWluZyB0b3dhcmRzICNTb2NpYWxNZWRpYWZvckV2ZXJ5b25lLiBJIHdpbGwgZG8gbXkgYmVzdCB0byBhc3Npc3QgeW91IVxuICAgICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgICAgPC9Wb3J0ZXg+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICApfVxuICAgICAgICAgIDxQcm9tcHRBcmVhIGlzU2lkZWJhck9wZW49e2lzU2lkZWJhck9wZW59IGFkZE1lc3NhZ2U9e2FkZE1lc3NhZ2V9IC8+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBBcHA7XG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsInVzZVJlZiIsIlNpZGViYXIiLCJQcm9tcHRBcmVhIiwiVG9nZ2xlQnV0dG9uIiwiVm9ydGV4IiwiRmFSZWdDaXJjbGVVc2VyIiwiQXBwIiwiaXNTaWRlYmFyT3BlbiIsInNldElzU2lkZWJhck9wZW4iLCJtZXNzYWdlcyIsInNldE1lc3NhZ2VzIiwiaGFzU3RhcnRlZENoYXQiLCJzZXRIYXNTdGFydGVkQ2hhdCIsImNoYXRDb250YWluZXJSZWYiLCJoYW5kbGVUb2dnbGVTaWRlYmFyIiwiYWRkTWVzc2FnZSIsIm1lc3NhZ2UiLCJhdHRhY2htZW50cyIsImlzVXNlck1lc3NhZ2UiLCJwcmV2TWVzc2FnZXMiLCJjdXJyZW50Iiwic2Nyb2xsVG9wIiwic2Nyb2xsSGVpZ2h0IiwiZGl2IiwiY2xhc3NOYW1lIiwiaXNPcGVuIiwib25DbGljayIsInJlZiIsIm1hcCIsIm1zZyIsImluZGV4IiwiaW1nIiwic3JjIiwiYWx0IiwicCIsImxlbmd0aCIsImZpbGUiLCJmaWxlSW5kZXgiLCJ0eXBlIiwic3RhcnRzV2l0aCIsIlVSTCIsImNyZWF0ZU9iamVjdFVSTCIsIm5hbWUiLCJ2aWRlbyIsImNvbnRyb2xzIiwiYmFja2dyb3VuZENvbG9yIiwiaDIiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/pages/index.tsx\n"));

/***/ })

});