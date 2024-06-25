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

/***/ "./src/components/PromptArea.tsx":
/*!***************************************!*\
  !*** ./src/components/PromptArea.tsx ***!
  \***************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _barrel_optimize_names_GrAttachment_react_icons_gr__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! __barrel_optimize__?names=GrAttachment!=!react-icons/gr */ \"__barrel_optimize__?names=GrAttachment!=!./node_modules/react-icons/gr/index.mjs\");\n/* harmony import */ var _barrel_optimize_names_IoMdSend_react_icons_io__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! __barrel_optimize__?names=IoMdSend!=!react-icons/io */ \"__barrel_optimize__?names=IoMdSend!=!./node_modules/react-icons/io/index.mjs\");\n/* harmony import */ var _barrel_optimize_names_IoCheckmarkCircleOutline_react_icons_io5__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! __barrel_optimize__?names=IoCheckmarkCircleOutline!=!react-icons/io5 */ \"__barrel_optimize__?names=IoCheckmarkCircleOutline!=!./node_modules/react-icons/io5/index.mjs\");\n/* harmony import */ var _AttachMenu__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./AttachMenu */ \"./src/components/AttachMenu.tsx\");\n/* harmony import */ var _AttachmentPreview__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./AttachmentPreview */ \"./src/components/AttachmentPreview.tsx\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\nconst PromptArea = (param)=>{\n    let { isSidebarOpen } = param;\n    _s();\n    const [isAttachMenuOpen, setIsAttachMenuOpen] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const [selectedFiles, setSelectedFiles] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    const handleFiles = e;\n    const handleFileSelect = (file)=>{\n        setSelectedFiles((prevFiles)=>[\n                ...prevFiles,\n                file\n            ]);\n        closeAttachMenu();\n    };\n    const handleVoiceSelect = (file)=>{\n        setSelectedFiles((prevFiles)=>[\n                ...prevFiles,\n                file\n            ]);\n        closeAttachMenu();\n    };\n    const handleVideoSelect = (file)=>{\n        setSelectedFiles((prevFiles)=>[\n                ...prevFiles,\n                file\n            ]);\n        closeAttachMenu();\n    };\n    const handleRemoveFile = (index)=>{\n        setSelectedFiles((prevFiles)=>prevFiles.filter((_, i)=>i !== index));\n    };\n    const toggleAttachMenu = ()=>{\n        setIsAttachMenuOpen(!isAttachMenuOpen);\n    };\n    const closeAttachMenu = ()=>{\n        setIsAttachMenuOpen(false);\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        const handleClickOutside = (event)=>{\n            const target = event.target;\n            if (target.closest(\".prompt-area\") === null) {\n                closeAttachMenu();\n            }\n        };\n        document.addEventListener(\"click\", handleClickOutside);\n        return ()=>{\n            document.removeEventListener(\"click\", handleClickOutside);\n        };\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"fixed bottom-4 w-screen flex justify-center transition-all duration-300 \".concat(isSidebarOpen ? \"ml-0\" : \"ml-0\"),\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"flex flex-col items-center bg-gray-800 rounded-lg px-4 py-2 shadow-lg relative w-full max-w-4xl prompt-area\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"flex flex-col w-full\",\n                    children: selectedFiles.map((file, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_AttachmentPreview__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                            file: file,\n                            onRemove: ()=>handleRemoveFile(index)\n                        }, index, false, {\n                            fileName: \"/Users/abgoenka/Documents/InternHackathon/frontend/src/components/PromptArea.tsx\",\n                            lineNumber: 67,\n                            columnNumber: 13\n                        }, undefined))\n                }, void 0, false, {\n                    fileName: \"/Users/abgoenka/Documents/InternHackathon/frontend/src/components/PromptArea.tsx\",\n                    lineNumber: 65,\n                    columnNumber: 9\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"flex items-center w-full\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                            className: \"mr-4\",\n                            onClick: toggleAttachMenu,\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_GrAttachment_react_icons_gr__WEBPACK_IMPORTED_MODULE_4__.GrAttachment, {}, void 0, false, {\n                                fileName: \"/Users/abgoenka/Documents/InternHackathon/frontend/src/components/PromptArea.tsx\",\n                                lineNumber: 76,\n                                columnNumber: 13\n                            }, undefined)\n                        }, void 0, false, {\n                            fileName: \"/Users/abgoenka/Documents/InternHackathon/frontend/src/components/PromptArea.tsx\",\n                            lineNumber: 75,\n                            columnNumber: 11\n                        }, undefined),\n                        isAttachMenuOpen && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_AttachMenu__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                            onFileSelect: handleFileSelect,\n                            onVoiceSelect: handleVoiceSelect,\n                            onVideoSelect: handleVideoSelect\n                        }, void 0, false, {\n                            fileName: \"/Users/abgoenka/Documents/InternHackathon/frontend/src/components/PromptArea.tsx\",\n                            lineNumber: 79,\n                            columnNumber: 13\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                            type: \"text\",\n                            placeholder: \"How can AbilitySync help you today?\",\n                            className: \"bg-gray-800 text-white placeholder-gray-500 focus:outline-none flex-grow px-2\"\n                        }, void 0, false, {\n                            fileName: \"/Users/abgoenka/Documents/InternHackathon/frontend/src/components/PromptArea.tsx\",\n                            lineNumber: 85,\n                            columnNumber: 11\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                            onClick: (e1)=>handleFiles(),\n                            className: \"ml-4\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_IoMdSend_react_icons_io__WEBPACK_IMPORTED_MODULE_5__.IoMdSend, {}, void 0, false, {\n                                fileName: \"/Users/abgoenka/Documents/InternHackathon/frontend/src/components/PromptArea.tsx\",\n                                lineNumber: 91,\n                                columnNumber: 13\n                            }, undefined)\n                        }, void 0, false, {\n                            fileName: \"/Users/abgoenka/Documents/InternHackathon/frontend/src/components/PromptArea.tsx\",\n                            lineNumber: 90,\n                            columnNumber: 11\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                            className: \"ml-2\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_IoCheckmarkCircleOutline_react_icons_io5__WEBPACK_IMPORTED_MODULE_6__.IoCheckmarkCircleOutline, {}, void 0, false, {\n                                fileName: \"/Users/abgoenka/Documents/InternHackathon/frontend/src/components/PromptArea.tsx\",\n                                lineNumber: 94,\n                                columnNumber: 13\n                            }, undefined)\n                        }, void 0, false, {\n                            fileName: \"/Users/abgoenka/Documents/InternHackathon/frontend/src/components/PromptArea.tsx\",\n                            lineNumber: 93,\n                            columnNumber: 11\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/abgoenka/Documents/InternHackathon/frontend/src/components/PromptArea.tsx\",\n                    lineNumber: 74,\n                    columnNumber: 9\n                }, undefined)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/abgoenka/Documents/InternHackathon/frontend/src/components/PromptArea.tsx\",\n            lineNumber: 64,\n            columnNumber: 7\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"/Users/abgoenka/Documents/InternHackathon/frontend/src/components/PromptArea.tsx\",\n        lineNumber: 59,\n        columnNumber: 5\n    }, undefined);\n};\n_s(PromptArea, \"KroBqV4Ffse0CDIyQKhJEwy8KQk=\");\n_c = PromptArea;\n/* harmony default export */ __webpack_exports__[\"default\"] = (PromptArea);\nvar _c;\n$RefreshReg$(_c, \"PromptArea\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9Qcm9tcHRBcmVhLnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFBbUQ7QUFDTDtBQUNKO0FBQ2lCO0FBQ3JCO0FBQ2M7QUFNcEQsTUFBTVEsYUFBd0M7UUFBQyxFQUFFQyxhQUFhLEVBQUU7O0lBQzlELE1BQU0sQ0FBQ0Msa0JBQWtCQyxvQkFBb0IsR0FBR1YsK0NBQVFBLENBQUM7SUFDekQsTUFBTSxDQUFDVyxlQUFlQyxpQkFBaUIsR0FBR1osK0NBQVFBLENBQVMsRUFBRTtJQUU3RCxNQUFNYSxjQUFlQztJQUNyQixNQUFNQyxtQkFBbUIsQ0FBQ0M7UUFDeEJKLGlCQUFpQixDQUFDSyxZQUFjO21CQUFJQTtnQkFBV0Q7YUFBSztRQUNwREU7SUFDRjtJQUVBLE1BQU1DLG9CQUFvQixDQUFDSDtRQUN6QkosaUJBQWlCLENBQUNLLFlBQWM7bUJBQUlBO2dCQUFXRDthQUFLO1FBQ3BERTtJQUNGO0lBRUEsTUFBTUUsb0JBQW9CLENBQUNKO1FBQ3pCSixpQkFBaUIsQ0FBQ0ssWUFBYzttQkFBSUE7Z0JBQVdEO2FBQUs7UUFDcERFO0lBQ0Y7SUFFQSxNQUFNRyxtQkFBbUIsQ0FBQ0M7UUFDeEJWLGlCQUFpQixDQUFDSyxZQUFjQSxVQUFVTSxNQUFNLENBQUMsQ0FBQ0MsR0FBR0MsSUFBTUEsTUFBTUg7SUFDbkU7SUFFQSxNQUFNSSxtQkFBbUI7UUFDdkJoQixvQkFBb0IsQ0FBQ0Q7SUFDdkI7SUFFQSxNQUFNUyxrQkFBa0I7UUFDdEJSLG9CQUFvQjtJQUN0QjtJQUVBVCxnREFBU0EsQ0FBQztRQUNSLE1BQU0wQixxQkFBcUIsQ0FBQ0M7WUFDMUIsTUFBTUMsU0FBU0QsTUFBTUMsTUFBTTtZQUMzQixJQUFJQSxPQUFPQyxPQUFPLENBQUMsb0JBQW9CLE1BQU07Z0JBQzNDWjtZQUNGO1FBQ0Y7UUFFQWEsU0FBU0MsZ0JBQWdCLENBQUMsU0FBU0w7UUFDbkMsT0FBTztZQUNMSSxTQUFTRSxtQkFBbUIsQ0FBQyxTQUFTTjtRQUN4QztJQUNGLEdBQUcsRUFBRTtJQUVMLHFCQUNFLDhEQUFDTztRQUNDQyxXQUFXLDJFQUVWLE9BREMzQixnQkFBZ0IsU0FBUztrQkFHM0IsNEVBQUMwQjtZQUFJQyxXQUFVOzs4QkFDYiw4REFBQ0Q7b0JBQUlDLFdBQVU7OEJBQ1p4QixjQUFjeUIsR0FBRyxDQUFDLENBQUNwQixNQUFNTSxzQkFDeEIsOERBQUNoQiwwREFBaUJBOzRCQUVoQlUsTUFBTUE7NEJBQ05xQixVQUFVLElBQU1oQixpQkFBaUJDOzJCQUY1QkE7Ozs7Ozs7Ozs7OEJBTVgsOERBQUNZO29CQUFJQyxXQUFVOztzQ0FDYiw4REFBQ0c7NEJBQU9ILFdBQVU7NEJBQU9JLFNBQVNiO3NDQUNoQyw0RUFBQ3hCLDRGQUFZQTs7Ozs7Ozs7Ozt3QkFFZE8sa0NBQ0MsOERBQUNKLG1EQUFVQTs0QkFDVG1DLGNBQWN6Qjs0QkFDZDBCLGVBQWV0Qjs0QkFDZnVCLGVBQWV0Qjs7Ozs7O3NDQUduQiw4REFBQ3VCOzRCQUNDQyxNQUFLOzRCQUNMQyxhQUFZOzRCQUNaVixXQUFVOzs7Ozs7c0NBRVosOERBQUNHOzRCQUFPQyxTQUFTLENBQUN6QixLQUFNRDs0QkFBZXNCLFdBQVU7c0NBQy9DLDRFQUFDaEMsb0ZBQVFBOzs7Ozs7Ozs7O3NDQUVYLDhEQUFDbUM7NEJBQU9ILFdBQVU7c0NBQ2hCLDRFQUFDL0IscUhBQXdCQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBTXJDO0dBeEZNRztLQUFBQTtBQTBGTiwrREFBZUEsVUFBVUEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvY29tcG9uZW50cy9Qcm9tcHRBcmVhLnRzeD9mNWY0Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBHckF0dGFjaG1lbnQgfSBmcm9tIFwicmVhY3QtaWNvbnMvZ3JcIjtcbmltcG9ydCB7IElvTWRTZW5kIH0gZnJvbSBcInJlYWN0LWljb25zL2lvXCI7XG5pbXBvcnQgeyBJb0NoZWNrbWFya0NpcmNsZU91dGxpbmUgfSBmcm9tIFwicmVhY3QtaWNvbnMvaW81XCI7XG5pbXBvcnQgQXR0YWNoTWVudSBmcm9tIFwiLi9BdHRhY2hNZW51XCI7XG5pbXBvcnQgQXR0YWNobWVudFByZXZpZXcgZnJvbSBcIi4vQXR0YWNobWVudFByZXZpZXdcIjtcblxuaW50ZXJmYWNlIFByb21wdEFyZWFQcm9wcyB7XG4gIGlzU2lkZWJhck9wZW46IGJvb2xlYW47XG59XG5cbmNvbnN0IFByb21wdEFyZWE6IFJlYWN0LkZDPFByb21wdEFyZWFQcm9wcz4gPSAoeyBpc1NpZGViYXJPcGVuIH0pID0+IHtcbiAgY29uc3QgW2lzQXR0YWNoTWVudU9wZW4sIHNldElzQXR0YWNoTWVudU9wZW5dID0gdXNlU3RhdGUoZmFsc2UpO1xuICBjb25zdCBbc2VsZWN0ZWRGaWxlcywgc2V0U2VsZWN0ZWRGaWxlc10gPSB1c2VTdGF0ZTxGaWxlW10+KFtdKTtcblxuICBjb25zdCBoYW5kbGVGaWxlcyA9IChlKVxuICBjb25zdCBoYW5kbGVGaWxlU2VsZWN0ID0gKGZpbGU6IEZpbGUpID0+IHtcbiAgICBzZXRTZWxlY3RlZEZpbGVzKChwcmV2RmlsZXMpID0+IFsuLi5wcmV2RmlsZXMsIGZpbGVdKTtcbiAgICBjbG9zZUF0dGFjaE1lbnUoKTtcbiAgfTtcblxuICBjb25zdCBoYW5kbGVWb2ljZVNlbGVjdCA9IChmaWxlOiBGaWxlKSA9PiB7XG4gICAgc2V0U2VsZWN0ZWRGaWxlcygocHJldkZpbGVzKSA9PiBbLi4ucHJldkZpbGVzLCBmaWxlXSk7XG4gICAgY2xvc2VBdHRhY2hNZW51KCk7XG4gIH07XG5cbiAgY29uc3QgaGFuZGxlVmlkZW9TZWxlY3QgPSAoZmlsZTogRmlsZSkgPT4ge1xuICAgIHNldFNlbGVjdGVkRmlsZXMoKHByZXZGaWxlcykgPT4gWy4uLnByZXZGaWxlcywgZmlsZV0pO1xuICAgIGNsb3NlQXR0YWNoTWVudSgpO1xuICB9O1xuXG4gIGNvbnN0IGhhbmRsZVJlbW92ZUZpbGUgPSAoaW5kZXg6IG51bWJlcikgPT4ge1xuICAgIHNldFNlbGVjdGVkRmlsZXMoKHByZXZGaWxlcykgPT4gcHJldkZpbGVzLmZpbHRlcigoXywgaSkgPT4gaSAhPT0gaW5kZXgpKTtcbiAgfTtcblxuICBjb25zdCB0b2dnbGVBdHRhY2hNZW51ID0gKCkgPT4ge1xuICAgIHNldElzQXR0YWNoTWVudU9wZW4oIWlzQXR0YWNoTWVudU9wZW4pO1xuICB9O1xuXG4gIGNvbnN0IGNsb3NlQXR0YWNoTWVudSA9ICgpID0+IHtcbiAgICBzZXRJc0F0dGFjaE1lbnVPcGVuKGZhbHNlKTtcbiAgfTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGNvbnN0IGhhbmRsZUNsaWNrT3V0c2lkZSA9IChldmVudDogTW91c2VFdmVudCkgPT4ge1xuICAgICAgY29uc3QgdGFyZ2V0ID0gZXZlbnQudGFyZ2V0IGFzIEhUTUxFbGVtZW50O1xuICAgICAgaWYgKHRhcmdldC5jbG9zZXN0KFwiLnByb21wdC1hcmVhXCIpID09PSBudWxsKSB7XG4gICAgICAgIGNsb3NlQXR0YWNoTWVudSgpO1xuICAgICAgfVxuICAgIH07XG5cbiAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgaGFuZGxlQ2xpY2tPdXRzaWRlKTtcbiAgICByZXR1cm4gKCkgPT4ge1xuICAgICAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGhhbmRsZUNsaWNrT3V0c2lkZSk7XG4gICAgfTtcbiAgfSwgW10pO1xuXG4gIHJldHVybiAoXG4gICAgPGRpdlxuICAgICAgY2xhc3NOYW1lPXtgZml4ZWQgYm90dG9tLTQgdy1zY3JlZW4gZmxleCBqdXN0aWZ5LWNlbnRlciB0cmFuc2l0aW9uLWFsbCBkdXJhdGlvbi0zMDAgJHtcbiAgICAgICAgaXNTaWRlYmFyT3BlbiA/IFwibWwtMFwiIDogXCJtbC0wXCJcbiAgICAgIH1gfVxuICAgID5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LWNvbCBpdGVtcy1jZW50ZXIgYmctZ3JheS04MDAgcm91bmRlZC1sZyBweC00IHB5LTIgc2hhZG93LWxnIHJlbGF0aXZlIHctZnVsbCBtYXgtdy00eGwgcHJvbXB0LWFyZWFcIj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtY29sIHctZnVsbFwiPlxuICAgICAgICAgIHtzZWxlY3RlZEZpbGVzLm1hcCgoZmlsZSwgaW5kZXgpID0+IChcbiAgICAgICAgICAgIDxBdHRhY2htZW50UHJldmlld1xuICAgICAgICAgICAgICBrZXk9e2luZGV4fVxuICAgICAgICAgICAgICBmaWxlPXtmaWxlfVxuICAgICAgICAgICAgICBvblJlbW92ZT17KCkgPT4gaGFuZGxlUmVtb3ZlRmlsZShpbmRleCl9XG4gICAgICAgICAgICAvPlxuICAgICAgICAgICkpfVxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLWNlbnRlciB3LWZ1bGxcIj5cbiAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cIm1yLTRcIiBvbkNsaWNrPXt0b2dnbGVBdHRhY2hNZW51fT5cbiAgICAgICAgICAgIDxHckF0dGFjaG1lbnQgLz5cbiAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICB7aXNBdHRhY2hNZW51T3BlbiAmJiAoXG4gICAgICAgICAgICA8QXR0YWNoTWVudVxuICAgICAgICAgICAgICBvbkZpbGVTZWxlY3Q9e2hhbmRsZUZpbGVTZWxlY3R9XG4gICAgICAgICAgICAgIG9uVm9pY2VTZWxlY3Q9e2hhbmRsZVZvaWNlU2VsZWN0fVxuICAgICAgICAgICAgICBvblZpZGVvU2VsZWN0PXtoYW5kbGVWaWRlb1NlbGVjdH1cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgKX1cbiAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiSG93IGNhbiBBYmlsaXR5U3luYyBoZWxwIHlvdSB0b2RheT9cIlxuICAgICAgICAgICAgY2xhc3NOYW1lPVwiYmctZ3JheS04MDAgdGV4dC13aGl0ZSBwbGFjZWhvbGRlci1ncmF5LTUwMCBmb2N1czpvdXRsaW5lLW5vbmUgZmxleC1ncm93IHB4LTJcIlxuICAgICAgICAgIC8+XG4gICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXsoZSkgPT4gaGFuZGxlRmlsZXMoKX0gY2xhc3NOYW1lPVwibWwtNFwiPlxuICAgICAgICAgICAgPElvTWRTZW5kIC8+XG4gICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJtbC0yXCI+XG4gICAgICAgICAgICA8SW9DaGVja21hcmtDaXJjbGVPdXRsaW5lIC8+XG4gICAgICAgICAgPC9idXR0b24+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBQcm9tcHRBcmVhO1xuIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlU3RhdGUiLCJ1c2VFZmZlY3QiLCJHckF0dGFjaG1lbnQiLCJJb01kU2VuZCIsIklvQ2hlY2ttYXJrQ2lyY2xlT3V0bGluZSIsIkF0dGFjaE1lbnUiLCJBdHRhY2htZW50UHJldmlldyIsIlByb21wdEFyZWEiLCJpc1NpZGViYXJPcGVuIiwiaXNBdHRhY2hNZW51T3BlbiIsInNldElzQXR0YWNoTWVudU9wZW4iLCJzZWxlY3RlZEZpbGVzIiwic2V0U2VsZWN0ZWRGaWxlcyIsImhhbmRsZUZpbGVzIiwiZSIsImhhbmRsZUZpbGVTZWxlY3QiLCJmaWxlIiwicHJldkZpbGVzIiwiY2xvc2VBdHRhY2hNZW51IiwiaGFuZGxlVm9pY2VTZWxlY3QiLCJoYW5kbGVWaWRlb1NlbGVjdCIsImhhbmRsZVJlbW92ZUZpbGUiLCJpbmRleCIsImZpbHRlciIsIl8iLCJpIiwidG9nZ2xlQXR0YWNoTWVudSIsImhhbmRsZUNsaWNrT3V0c2lkZSIsImV2ZW50IiwidGFyZ2V0IiwiY2xvc2VzdCIsImRvY3VtZW50IiwiYWRkRXZlbnRMaXN0ZW5lciIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJkaXYiLCJjbGFzc05hbWUiLCJtYXAiLCJvblJlbW92ZSIsImJ1dHRvbiIsIm9uQ2xpY2siLCJvbkZpbGVTZWxlY3QiLCJvblZvaWNlU2VsZWN0Iiwib25WaWRlb1NlbGVjdCIsImlucHV0IiwidHlwZSIsInBsYWNlaG9sZGVyIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/components/PromptArea.tsx\n"));

/***/ })

});