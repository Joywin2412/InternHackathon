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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_Sidebar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/Sidebar */ \"./src/components/Sidebar.tsx\");\n/* harmony import */ var _components_PromptArea__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/PromptArea */ \"./src/components/PromptArea.tsx\");\n/* harmony import */ var _components_ToggleButton__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/ToggleButton */ \"./src/components/ToggleButton.tsx\");\n/* harmony import */ var _components_ui_vortex__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/ui/vortex */ \"./src/components/ui/vortex.tsx\");\n/* harmony import */ var _barrel_optimize_names_FaRegCircleUser_react_icons_fa6__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! __barrel_optimize__?names=FaRegCircleUser!=!react-icons/fa6 */ \"__barrel_optimize__?names=FaRegCircleUser!=!./node_modules/react-icons/fa6/index.mjs\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\nconst App = ()=>{\n    _s();\n    const [isSidebarOpen, setIsSidebarOpen] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(true);\n    const [messages, setMessages] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    const [hasStartedChat, setHasStartedChat] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const chatContainerRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);\n    const [firstAPIResponse, setFirstAPIResponse] = use;\n    const handleToggleSidebar = ()=>{\n        setIsSidebarOpen(!isSidebarOpen);\n    };\n    const addMessage = (message, attachments, isUserMessage)=>{\n        setMessages((prevMessages)=>[\n                ...prevMessages,\n                {\n                    message,\n                    attachments,\n                    isUserMessage\n                }\n            ]);\n        if (!hasStartedChat) setHasStartedChat(true);\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        if (chatContainerRef.current) {\n            chatContainerRef.current.scrollTop = chatContainerRef.current.scrollHeight;\n        }\n    }, [\n        messages\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"flex h-screen w-screen text-white\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Sidebar__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                isOpen: isSidebarOpen\n            }, void 0, false, {\n                fileName: \"/Users/abgoenka/Documents/InternHackathon/frontend/src/pages/index.tsx\",\n                lineNumber: 33,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex-1 flex flex-col transition-all duration-300 \".concat(isSidebarOpen ? \"ml-0\" : \"ml-0\"),\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"flex-1 flex w-full items-center justify-center text-center\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ToggleButton__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                            isOpen: isSidebarOpen,\n                            onClick: handleToggleSidebar\n                        }, void 0, false, {\n                            fileName: \"/Users/abgoenka/Documents/InternHackathon/frontend/src/pages/index.tsx\",\n                            lineNumber: 40,\n                            columnNumber: 11\n                        }, undefined),\n                        hasStartedChat ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            ref: chatContainerRef,\n                            className: \"flex-1 p-4 h-[80vh] overflow-y-scroll\",\n                            children: messages.map((msg, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"flex mb-4 \".concat(msg.isUserMessage ? \"justify-end\" : \"justify-start\"),\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        className: \"flex items-start\",\n                                        children: [\n                                            msg.isUserMessage ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_FaRegCircleUser_react_icons_fa6__WEBPACK_IMPORTED_MODULE_6__.FaRegCircleUser, {\n                                                className: \"mr-2 h-10 w-10\"\n                                            }, void 0, false, {\n                                                fileName: \"/Users/abgoenka/Documents/InternHackathon/frontend/src/pages/index.tsx\",\n                                                lineNumber: 51,\n                                                columnNumber: 23\n                                            }, undefined) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                                                src: \"./logo.png\",\n                                                alt: \"AbilitySync Logo\",\n                                                className: \"w-12 h-12 mr-2\"\n                                            }, void 0, false, {\n                                                fileName: \"/Users/abgoenka/Documents/InternHackathon/frontend/src/pages/index.tsx\",\n                                                lineNumber: 53,\n                                                columnNumber: 23\n                                            }, undefined),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                                className: \"bg-gray-700 p-4 rounded-lg max-w-md text-left\",\n                                                children: [\n                                                    msg.message && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                                        children: msg.message\n                                                    }, void 0, false, {\n                                                        fileName: \"/Users/abgoenka/Documents/InternHackathon/frontend/src/pages/index.tsx\",\n                                                        lineNumber: 56,\n                                                        columnNumber: 39\n                                                    }, undefined),\n                                                    msg.attachments.length > 0 && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                                        className: \"mt-2\",\n                                                        children: msg.attachments.map((file, fileIndex)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                                                className: \"flex items-center space-x-2\",\n                                                                children: [\n                                                                    file.type.startsWith(\"image/\") && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                                                                        src: URL.createObjectURL(file),\n                                                                        alt: file.name,\n                                                                        className: \"w-16 h-16 object-cover\"\n                                                                    }, void 0, false, {\n                                                                        fileName: \"/Users/abgoenka/Documents/InternHackathon/frontend/src/pages/index.tsx\",\n                                                                        lineNumber: 62,\n                                                                        columnNumber: 33\n                                                                    }, undefined),\n                                                                    file.type.startsWith(\"audio/\") && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                                                        children: file.name\n                                                                    }, void 0, false, {\n                                                                        fileName: \"/Users/abgoenka/Documents/InternHackathon/frontend/src/pages/index.tsx\",\n                                                                        lineNumber: 64,\n                                                                        columnNumber: 66\n                                                                    }, undefined),\n                                                                    file.type.startsWith(\"video/\") && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"video\", {\n                                                                        src: URL.createObjectURL(file),\n                                                                        controls: true,\n                                                                        className: \"w-16 h-16 object-cover\"\n                                                                    }, void 0, false, {\n                                                                        fileName: \"/Users/abgoenka/Documents/InternHackathon/frontend/src/pages/index.tsx\",\n                                                                        lineNumber: 66,\n                                                                        columnNumber: 33\n                                                                    }, undefined)\n                                                                ]\n                                                            }, fileIndex, true, {\n                                                                fileName: \"/Users/abgoenka/Documents/InternHackathon/frontend/src/pages/index.tsx\",\n                                                                lineNumber: 60,\n                                                                columnNumber: 29\n                                                            }, undefined))\n                                                    }, void 0, false, {\n                                                        fileName: \"/Users/abgoenka/Documents/InternHackathon/frontend/src/pages/index.tsx\",\n                                                        lineNumber: 58,\n                                                        columnNumber: 25\n                                                    }, undefined)\n                                                ]\n                                            }, void 0, true, {\n                                                fileName: \"/Users/abgoenka/Documents/InternHackathon/frontend/src/pages/index.tsx\",\n                                                lineNumber: 55,\n                                                columnNumber: 21\n                                            }, undefined)\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"/Users/abgoenka/Documents/InternHackathon/frontend/src/pages/index.tsx\",\n                                        lineNumber: 49,\n                                        columnNumber: 19\n                                    }, undefined)\n                                }, index, false, {\n                                    fileName: \"/Users/abgoenka/Documents/InternHackathon/frontend/src/pages/index.tsx\",\n                                    lineNumber: 45,\n                                    columnNumber: 17\n                                }, undefined))\n                        }, void 0, false, {\n                            fileName: \"/Users/abgoenka/Documents/InternHackathon/frontend/src/pages/index.tsx\",\n                            lineNumber: 43,\n                            columnNumber: 13\n                        }, undefined) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"w-[calc(100%-4rem)] mx-auto rounded-md h-[30rem] overflow-hidden\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_vortex__WEBPACK_IMPORTED_MODULE_5__.Vortex, {\n                                backgroundColor: \"black\",\n                                className: \"flex items-center flex-col justify-center px-2 md:px-10 py-4 w-full h-full\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                                        className: \"text-white text-2xl md:text-6xl font-bold text-center\",\n                                        children: \"AbilitySync\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/abgoenka/Documents/InternHackathon/frontend/src/pages/index.tsx\",\n                                        lineNumber: 83,\n                                        columnNumber: 17\n                                    }, undefined),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                        className: \"text-white text-sm md:text-2xl max-w-xl mt-6 text-center\",\n                                        children: \"Aiming towards #SocialMediaforEveryone. I will do my best to assist you!\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/abgoenka/Documents/InternHackathon/frontend/src/pages/index.tsx\",\n                                        lineNumber: 86,\n                                        columnNumber: 17\n                                    }, undefined)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/abgoenka/Documents/InternHackathon/frontend/src/pages/index.tsx\",\n                                lineNumber: 79,\n                                columnNumber: 15\n                            }, undefined)\n                        }, void 0, false, {\n                            fileName: \"/Users/abgoenka/Documents/InternHackathon/frontend/src/pages/index.tsx\",\n                            lineNumber: 78,\n                            columnNumber: 13\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_PromptArea__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                            isSidebarOpen: isSidebarOpen,\n                            addMessage: addMessage\n                        }, void 0, false, {\n                            fileName: \"/Users/abgoenka/Documents/InternHackathon/frontend/src/pages/index.tsx\",\n                            lineNumber: 92,\n                            columnNumber: 11\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/abgoenka/Documents/InternHackathon/frontend/src/pages/index.tsx\",\n                    lineNumber: 39,\n                    columnNumber: 9\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"/Users/abgoenka/Documents/InternHackathon/frontend/src/pages/index.tsx\",\n                lineNumber: 34,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/abgoenka/Documents/InternHackathon/frontend/src/pages/index.tsx\",\n        lineNumber: 32,\n        columnNumber: 5\n    }, undefined);\n};\n_s(App, \"yZcSZ1So/lQyX6AEYzDI7GIneSk=\");\n_c = App;\n/* harmony default export */ __webpack_exports__[\"default\"] = (App);\nvar _c;\n$RefreshReg$(_c, \"App\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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REFFViw4REFBQ3NCO3dDQUFHdEIsV0FBVTtrREFBd0Q7Ozs7OztrREFHdEUsOERBQUNVO3dDQUFFVixXQUFVO2tEQUEyRDs7Ozs7Ozs7Ozs7Ozs7Ozs7c0NBTTlFLDhEQUFDekIsOERBQVVBOzRCQUFDSyxlQUFlQTs0QkFBZVcsWUFBWUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBS2hFO0dBeEZNWjtLQUFBQTtBQTBGTiwrREFBZUEsR0FBR0EsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvcGFnZXMvaW5kZXgudHN4PzE5YTAiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QsIHVzZVJlZiB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IFNpZGViYXIgZnJvbSBcIi4uL2NvbXBvbmVudHMvU2lkZWJhclwiO1xuaW1wb3J0IFByb21wdEFyZWEgZnJvbSBcIi4uL2NvbXBvbmVudHMvUHJvbXB0QXJlYVwiO1xuaW1wb3J0IFRvZ2dsZUJ1dHRvbiBmcm9tIFwiLi4vY29tcG9uZW50cy9Ub2dnbGVCdXR0b25cIjtcbmltcG9ydCB7IFZvcnRleCB9IGZyb20gXCIuLi9jb21wb25lbnRzL3VpL3ZvcnRleFwiO1xuaW1wb3J0IHsgRmFSZWdDaXJjbGVVc2VyIH0gZnJvbSBcInJlYWN0LWljb25zL2ZhNlwiO1xuaW1wb3J0IGxvZ28gZnJvbSBcIi4uL2Fzc2V0cy9sb2dvLnBuZ1wiOyAvLyBFbnN1cmUgbG9nby5wbmcgaXMgcGxhY2VkIGNvcnJlY3RseSBpbiB0aGUgYXNzZXRzIGZvbGRlclxuXG5jb25zdCBBcHA6IFJlYWN0LkZDID0gKCkgPT4ge1xuICBjb25zdCBbaXNTaWRlYmFyT3Blbiwgc2V0SXNTaWRlYmFyT3Blbl0gPSB1c2VTdGF0ZSh0cnVlKTtcbiAgY29uc3QgW21lc3NhZ2VzLCBzZXRNZXNzYWdlc10gPSB1c2VTdGF0ZTx7IG1lc3NhZ2U6IHN0cmluZzsgYXR0YWNobWVudHM6IEZpbGVbXTsgaXNVc2VyTWVzc2FnZTogYm9vbGVhbiB9W10+KFtdKTtcbiAgY29uc3QgW2hhc1N0YXJ0ZWRDaGF0LCBzZXRIYXNTdGFydGVkQ2hhdF0gPSB1c2VTdGF0ZShmYWxzZSk7XG4gIGNvbnN0IGNoYXRDb250YWluZXJSZWYgPSB1c2VSZWY8SFRNTERpdkVsZW1lbnQ+KG51bGwpO1xuICBjb25zdCBbZmlyc3RBUElSZXNwb25zZSwgc2V0Rmlyc3RBUElSZXNwb25zZV0gPSB1c2VcblxuICBjb25zdCBoYW5kbGVUb2dnbGVTaWRlYmFyID0gKCkgPT4ge1xuICAgIHNldElzU2lkZWJhck9wZW4oIWlzU2lkZWJhck9wZW4pO1xuICB9O1xuXG4gIGNvbnN0IGFkZE1lc3NhZ2UgPSAobWVzc2FnZTogc3RyaW5nLCBhdHRhY2htZW50czogRmlsZVtdLCBpc1VzZXJNZXNzYWdlOiBib29sZWFuKSA9PiB7XG4gICAgc2V0TWVzc2FnZXMoKHByZXZNZXNzYWdlcykgPT4gWy4uLnByZXZNZXNzYWdlcywgeyBtZXNzYWdlLCBhdHRhY2htZW50cywgaXNVc2VyTWVzc2FnZSB9XSk7XG4gICAgaWYgKCFoYXNTdGFydGVkQ2hhdCkgc2V0SGFzU3RhcnRlZENoYXQodHJ1ZSk7XG4gIH07XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBpZiAoY2hhdENvbnRhaW5lclJlZi5jdXJyZW50KSB7XG4gICAgICBjaGF0Q29udGFpbmVyUmVmLmN1cnJlbnQuc2Nyb2xsVG9wID0gY2hhdENvbnRhaW5lclJlZi5jdXJyZW50LnNjcm9sbEhlaWdodDtcbiAgICB9XG4gIH0sIFttZXNzYWdlc10pO1xuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGgtc2NyZWVuIHctc2NyZWVuIHRleHQtd2hpdGVcIj5cbiAgICAgIDxTaWRlYmFyIGlzT3Blbj17aXNTaWRlYmFyT3Blbn0gLz5cbiAgICAgIDxkaXZcbiAgICAgICAgY2xhc3NOYW1lPXtgZmxleC0xIGZsZXggZmxleC1jb2wgdHJhbnNpdGlvbi1hbGwgZHVyYXRpb24tMzAwICR7XG4gICAgICAgICAgaXNTaWRlYmFyT3BlbiA/IFwibWwtMFwiIDogXCJtbC0wXCJcbiAgICAgICAgfWB9XG4gICAgICA+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleC0xIGZsZXggdy1mdWxsIGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlciB0ZXh0LWNlbnRlclwiPlxuICAgICAgICAgIDxUb2dnbGVCdXR0b24gaXNPcGVuPXtpc1NpZGViYXJPcGVufSBvbkNsaWNrPXtoYW5kbGVUb2dnbGVTaWRlYmFyfSAvPlxuXG4gICAgICAgICAge2hhc1N0YXJ0ZWRDaGF0ID8gKFxuICAgICAgICAgICAgPGRpdiByZWY9e2NoYXRDb250YWluZXJSZWZ9IGNsYXNzTmFtZT1cImZsZXgtMSBwLTQgaC1bODB2aF0gb3ZlcmZsb3cteS1zY3JvbGxcIj5cbiAgICAgICAgICAgICAge21lc3NhZ2VzLm1hcCgobXNnLCBpbmRleCkgPT4gKFxuICAgICAgICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgICAgICAgIGtleT17aW5kZXh9XG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2BmbGV4IG1iLTQgJHttc2cuaXNVc2VyTWVzc2FnZSA/IFwianVzdGlmeS1lbmRcIiA6IFwianVzdGlmeS1zdGFydFwifWB9XG4gICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLXN0YXJ0XCI+XG4gICAgICAgICAgICAgICAgICAgIHttc2cuaXNVc2VyTWVzc2FnZSA/IChcbiAgICAgICAgICAgICAgICAgICAgICA8RmFSZWdDaXJjbGVVc2VyIGNsYXNzTmFtZT1cIm1yLTIgaC0xMCB3LTEwXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgKSA6IChcbiAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz0nLi9sb2dvLnBuZycgYWx0PVwiQWJpbGl0eVN5bmMgTG9nb1wiIGNsYXNzTmFtZT1cInctMTIgaC0xMiBtci0yXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJiZy1ncmF5LTcwMCBwLTQgcm91bmRlZC1sZyBtYXgtdy1tZCB0ZXh0LWxlZnRcIj5cbiAgICAgICAgICAgICAgICAgICAgICB7bXNnLm1lc3NhZ2UgJiYgPHA+e21zZy5tZXNzYWdlfTwvcD59XG4gICAgICAgICAgICAgICAgICAgICAge21zZy5hdHRhY2htZW50cy5sZW5ndGggPiAwICYmIChcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibXQtMlwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICB7bXNnLmF0dGFjaG1lbnRzLm1hcCgoZmlsZSwgZmlsZUluZGV4KSA9PiAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBrZXk9e2ZpbGVJbmRleH0gY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1jZW50ZXIgc3BhY2UteC0yXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7ZmlsZS50eXBlLnN0YXJ0c1dpdGgoXCJpbWFnZS9cIikgJiYgKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz17VVJMLmNyZWF0ZU9iamVjdFVSTChmaWxlKX0gYWx0PXtmaWxlLm5hbWV9IGNsYXNzTmFtZT1cInctMTYgaC0xNiBvYmplY3QtY292ZXJcIiAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtmaWxlLnR5cGUuc3RhcnRzV2l0aChcImF1ZGlvL1wiKSAmJiA8cD57ZmlsZS5uYW1lfTwvcD59XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7ZmlsZS50eXBlLnN0YXJ0c1dpdGgoXCJ2aWRlby9cIikgJiYgKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dmlkZW8gc3JjPXtVUkwuY3JlYXRlT2JqZWN0VVJMKGZpbGUpfSBjb250cm9scyBjbGFzc05hbWU9XCJ3LTE2IGgtMTYgb2JqZWN0LWNvdmVyXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICkpfVxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgKSl9XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICApIDogKFxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3LVtjYWxjKDEwMCUtNHJlbSldIG14LWF1dG8gcm91bmRlZC1tZCBoLVszMHJlbV0gb3ZlcmZsb3ctaGlkZGVuXCI+XG4gICAgICAgICAgICAgIDxWb3J0ZXhcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I9XCJibGFja1wiXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1jZW50ZXIgZmxleC1jb2wganVzdGlmeS1jZW50ZXIgcHgtMiBtZDpweC0xMCBweS00IHctZnVsbCBoLWZ1bGxcIlxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgPGgyIGNsYXNzTmFtZT1cInRleHQtd2hpdGUgdGV4dC0yeGwgbWQ6dGV4dC02eGwgZm9udC1ib2xkIHRleHQtY2VudGVyXCI+XG4gICAgICAgICAgICAgICAgICBBYmlsaXR5U3luY1xuICAgICAgICAgICAgICAgIDwvaDI+XG4gICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC13aGl0ZSB0ZXh0LXNtIG1kOnRleHQtMnhsIG1heC13LXhsIG10LTYgdGV4dC1jZW50ZXJcIj5cbiAgICAgICAgICAgICAgICAgIEFpbWluZyB0b3dhcmRzICNTb2NpYWxNZWRpYWZvckV2ZXJ5b25lLiBJIHdpbGwgZG8gbXkgYmVzdCB0byBhc3Npc3QgeW91IVxuICAgICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgICAgPC9Wb3J0ZXg+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICApfVxuICAgICAgICAgIDxQcm9tcHRBcmVhIGlzU2lkZWJhck9wZW49e2lzU2lkZWJhck9wZW59IGFkZE1lc3NhZ2U9e2FkZE1lc3NhZ2V9IC8+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBBcHA7XG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsInVzZVJlZiIsIlNpZGViYXIiLCJQcm9tcHRBcmVhIiwiVG9nZ2xlQnV0dG9uIiwiVm9ydGV4IiwiRmFSZWdDaXJjbGVVc2VyIiwiQXBwIiwiaXNTaWRlYmFyT3BlbiIsInNldElzU2lkZWJhck9wZW4iLCJtZXNzYWdlcyIsInNldE1lc3NhZ2VzIiwiaGFzU3RhcnRlZENoYXQiLCJzZXRIYXNTdGFydGVkQ2hhdCIsImNoYXRDb250YWluZXJSZWYiLCJmaXJzdEFQSVJlc3BvbnNlIiwic2V0Rmlyc3RBUElSZXNwb25zZSIsInVzZSIsImhhbmRsZVRvZ2dsZVNpZGViYXIiLCJhZGRNZXNzYWdlIiwibWVzc2FnZSIsImF0dGFjaG1lbnRzIiwiaXNVc2VyTWVzc2FnZSIsInByZXZNZXNzYWdlcyIsImN1cnJlbnQiLCJzY3JvbGxUb3AiLCJzY3JvbGxIZWlnaHQiLCJkaXYiLCJjbGFzc05hbWUiLCJpc09wZW4iLCJvbkNsaWNrIiwicmVmIiwibWFwIiwibXNnIiwiaW5kZXgiLCJpbWciLCJzcmMiLCJhbHQiLCJwIiwibGVuZ3RoIiwiZmlsZSIsImZpbGVJbmRleCIsInR5cGUiLCJzdGFydHNXaXRoIiwiVVJMIiwiY3JlYXRlT2JqZWN0VVJMIiwibmFtZSIsInZpZGVvIiwiY29udHJvbHMiLCJiYWNrZ3JvdW5kQ29sb3IiLCJoMiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/pages/index.tsx\n"));

/***/ })

});