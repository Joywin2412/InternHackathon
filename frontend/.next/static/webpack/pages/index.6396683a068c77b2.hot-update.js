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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _barrel_optimize_names_GrAttachment_react_icons_gr__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! __barrel_optimize__?names=GrAttachment!=!react-icons/gr */ \"__barrel_optimize__?names=GrAttachment!=!./node_modules/react-icons/gr/index.mjs\");\n/* harmony import */ var _barrel_optimize_names_IoMdSend_react_icons_io__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! __barrel_optimize__?names=IoMdSend!=!react-icons/io */ \"__barrel_optimize__?names=IoMdSend!=!./node_modules/react-icons/io/index.mjs\");\n/* harmony import */ var _barrel_optimize_names_IoCheckmarkCircleOutline_react_icons_io5__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! __barrel_optimize__?names=IoCheckmarkCircleOutline!=!react-icons/io5 */ \"__barrel_optimize__?names=IoCheckmarkCircleOutline!=!./node_modules/react-icons/io5/index.mjs\");\n/* harmony import */ var _AttachMenu__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./AttachMenu */ \"./src/components/AttachMenu.tsx\");\n/* harmony import */ var _AttachmentPreview__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./AttachmentPreview */ \"./src/components/AttachmentPreview.tsx\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\nconst PromptArea = (param)=>{\n    let { isSidebarOpen } = param;\n    _s();\n    const [isAttachMenuOpen, setIsAttachMenuOpen] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const [selectedFiles, setSelectedFiles] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    const handleFileSelect = (file)=>{\n        setSelectedFiles((prevFiles)=>[\n                ...prevFiles,\n                file\n            ]);\n        closeAttachMenu();\n    };\n    const handleVoiceSelect = (file)=>{\n        setSelectedFiles((prevFiles)=>[\n                ...prevFiles,\n                file\n            ]);\n        closeAttachMenu();\n    };\n    const handleVideoSelect = (file)=>{\n        setSelectedFiles((prevFiles)=>[\n                ...prevFiles,\n                file\n            ]);\n        closeAttachMenu();\n    };\n    const handleRemoveFile = (index)=>{\n        setSelectedFiles((prevFiles)=>prevFiles.filter((_, i)=>i !== index));\n    };\n    const toggleAttachMenu = ()=>{\n        setIsAttachMenuOpen(!isAttachMenuOpen);\n    };\n    const closeAttachMenu = ()=>{\n        setIsAttachMenuOpen(false);\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        const handleClickOutside = (event)=>{\n            const target = event.target;\n            if (target.closest(\".prompt-area\") === null) {\n                closeAttachMenu();\n            }\n        };\n        document.addEventListener(\"click\", handleClickOutside);\n        return ()=>{\n            document.removeEventListener(\"click\", handleClickOutside);\n        };\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"fixed bottom-4 w-screen flex justify-center transition-all duration-300 \".concat(isSidebarOpen ? \"ml-0\" : \"ml-0\"),\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"flex flex-col items-center bg-gray-800 rounded-lg px-4 py-2 shadow-lg relative w-full max-w-4xl prompt-area\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"flex flex-col w-full\",\n                    children: selectedFiles.map((file, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_AttachmentPreview__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                            file: file,\n                            onRemove: ()=>handleRemoveFile(index)\n                        }, index, false, {\n                            fileName: \"/Users/abgoenka/Documents/InternHackathon/frontend/src/components/PromptArea.tsx\",\n                            lineNumber: 66,\n                            columnNumber: 13\n                        }, undefined))\n                }, void 0, false, {\n                    fileName: \"/Users/abgoenka/Documents/InternHackathon/frontend/src/components/PromptArea.tsx\",\n                    lineNumber: 64,\n                    columnNumber: 9\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"flex items-center w-full\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                            className: \"mr-4\",\n                            onClick: toggleAttachMenu,\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_GrAttachment_react_icons_gr__WEBPACK_IMPORTED_MODULE_4__.GrAttachment, {}, void 0, false, {\n                                fileName: \"/Users/abgoenka/Documents/InternHackathon/frontend/src/components/PromptArea.tsx\",\n                                lineNumber: 75,\n                                columnNumber: 13\n                            }, undefined)\n                        }, void 0, false, {\n                            fileName: \"/Users/abgoenka/Documents/InternHackathon/frontend/src/components/PromptArea.tsx\",\n                            lineNumber: 74,\n                            columnNumber: 11\n                        }, undefined),\n                        isAttachMenuOpen && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_AttachMenu__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                            onFileSelect: handleFileSelect,\n                            onVoiceSelect: handleVoiceSelect,\n                            onVideoSelect: handleVideoSelect\n                        }, void 0, false, {\n                            fileName: \"/Users/abgoenka/Documents/InternHackathon/frontend/src/components/PromptArea.tsx\",\n                            lineNumber: 78,\n                            columnNumber: 13\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                            type: \"text\",\n                            placeholder: \"How can AbilitySync help you today?\",\n                            className: \"bg-gray-800 text-white placeholder-gray-500 focus:outline-none flex-grow px-2\"\n                        }, void 0, false, {\n                            fileName: \"/Users/abgoenka/Documents/InternHackathon/frontend/src/components/PromptArea.tsx\",\n                            lineNumber: 84,\n                            columnNumber: 11\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                            onClick: (e)=>get,\n                            className: \"ml-4\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_IoMdSend_react_icons_io__WEBPACK_IMPORTED_MODULE_5__.IoMdSend, {}, void 0, false, {\n                                fileName: \"/Users/abgoenka/Documents/InternHackathon/frontend/src/components/PromptArea.tsx\",\n                                lineNumber: 90,\n                                columnNumber: 13\n                            }, undefined)\n                        }, void 0, false, {\n                            fileName: \"/Users/abgoenka/Documents/InternHackathon/frontend/src/components/PromptArea.tsx\",\n                            lineNumber: 89,\n                            columnNumber: 11\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                            className: \"ml-2\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_IoCheckmarkCircleOutline_react_icons_io5__WEBPACK_IMPORTED_MODULE_6__.IoCheckmarkCircleOutline, {}, void 0, false, {\n                                fileName: \"/Users/abgoenka/Documents/InternHackathon/frontend/src/components/PromptArea.tsx\",\n                                lineNumber: 93,\n                                columnNumber: 13\n                            }, undefined)\n                        }, void 0, false, {\n                            fileName: \"/Users/abgoenka/Documents/InternHackathon/frontend/src/components/PromptArea.tsx\",\n                            lineNumber: 92,\n                            columnNumber: 11\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/abgoenka/Documents/InternHackathon/frontend/src/components/PromptArea.tsx\",\n                    lineNumber: 73,\n                    columnNumber: 9\n                }, undefined)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/abgoenka/Documents/InternHackathon/frontend/src/components/PromptArea.tsx\",\n            lineNumber: 63,\n            columnNumber: 7\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"/Users/abgoenka/Documents/InternHackathon/frontend/src/components/PromptArea.tsx\",\n        lineNumber: 58,\n        columnNumber: 5\n    }, undefined);\n};\n_s(PromptArea, \"KroBqV4Ffse0CDIyQKhJEwy8KQk=\");\n_c = PromptArea;\n/* harmony default export */ __webpack_exports__[\"default\"] = (PromptArea);\nvar _c;\n$RefreshReg$(_c, \"PromptArea\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9Qcm9tcHRBcmVhLnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFBbUQ7QUFDTDtBQUNKO0FBQ2lCO0FBQ3JCO0FBQ2M7QUFNcEQsTUFBTVEsYUFBd0M7UUFBQyxFQUFFQyxhQUFhLEVBQUU7O0lBQzlELE1BQU0sQ0FBQ0Msa0JBQWtCQyxvQkFBb0IsR0FBR1YsK0NBQVFBLENBQUM7SUFDekQsTUFBTSxDQUFDVyxlQUFlQyxpQkFBaUIsR0FBR1osK0NBQVFBLENBQVMsRUFBRTtJQUU3RCxNQUFNYSxtQkFBbUIsQ0FBQ0M7UUFDeEJGLGlCQUFpQixDQUFDRyxZQUFjO21CQUFJQTtnQkFBV0Q7YUFBSztRQUNwREU7SUFDRjtJQUVBLE1BQU1DLG9CQUFvQixDQUFDSDtRQUN6QkYsaUJBQWlCLENBQUNHLFlBQWM7bUJBQUlBO2dCQUFXRDthQUFLO1FBQ3BERTtJQUNGO0lBRUEsTUFBTUUsb0JBQW9CLENBQUNKO1FBQ3pCRixpQkFBaUIsQ0FBQ0csWUFBYzttQkFBSUE7Z0JBQVdEO2FBQUs7UUFDcERFO0lBQ0Y7SUFFQSxNQUFNRyxtQkFBbUIsQ0FBQ0M7UUFDeEJSLGlCQUFpQixDQUFDRyxZQUFjQSxVQUFVTSxNQUFNLENBQUMsQ0FBQ0MsR0FBR0MsSUFBTUEsTUFBTUg7SUFDbkU7SUFFQSxNQUFNSSxtQkFBbUI7UUFDdkJkLG9CQUFvQixDQUFDRDtJQUN2QjtJQUVBLE1BQU1PLGtCQUFrQjtRQUN0Qk4sb0JBQW9CO0lBQ3RCO0lBRUFULGdEQUFTQSxDQUFDO1FBQ1IsTUFBTXdCLHFCQUFxQixDQUFDQztZQUMxQixNQUFNQyxTQUFTRCxNQUFNQyxNQUFNO1lBQzNCLElBQUlBLE9BQU9DLE9BQU8sQ0FBQyxvQkFBb0IsTUFBTTtnQkFDM0NaO1lBQ0Y7UUFDRjtRQUVBYSxTQUFTQyxnQkFBZ0IsQ0FBQyxTQUFTTDtRQUNuQyxPQUFPO1lBQ0xJLFNBQVNFLG1CQUFtQixDQUFDLFNBQVNOO1FBQ3hDO0lBQ0YsR0FBRyxFQUFFO0lBRUwscUJBQ0UsOERBQUNPO1FBQ0NDLFdBQVcsMkVBRVYsT0FEQ3pCLGdCQUFnQixTQUFTO2tCQUczQiw0RUFBQ3dCO1lBQUlDLFdBQVU7OzhCQUNiLDhEQUFDRDtvQkFBSUMsV0FBVTs4QkFDWnRCLGNBQWN1QixHQUFHLENBQUMsQ0FBQ3BCLE1BQU1NLHNCQUN4Qiw4REFBQ2QsMERBQWlCQTs0QkFFaEJRLE1BQU1BOzRCQUNOcUIsVUFBVSxJQUFNaEIsaUJBQWlCQzsyQkFGNUJBOzs7Ozs7Ozs7OzhCQU1YLDhEQUFDWTtvQkFBSUMsV0FBVTs7c0NBQ2IsOERBQUNHOzRCQUFPSCxXQUFVOzRCQUFPSSxTQUFTYjtzQ0FDaEMsNEVBQUN0Qiw0RkFBWUE7Ozs7Ozs7Ozs7d0JBRWRPLGtDQUNDLDhEQUFDSixtREFBVUE7NEJBQ1RpQyxjQUFjekI7NEJBQ2QwQixlQUFldEI7NEJBQ2Z1QixlQUFldEI7Ozs7OztzQ0FHbkIsOERBQUN1Qjs0QkFDQ0MsTUFBSzs0QkFDTEMsYUFBWTs0QkFDWlYsV0FBVTs7Ozs7O3NDQUVaLDhEQUFDRzs0QkFBT0MsU0FBVyxDQUFDTyxJQUFNQzs0QkFBS1osV0FBVTtzQ0FDdkMsNEVBQUM5QixvRkFBUUE7Ozs7Ozs7Ozs7c0NBRVgsOERBQUNpQzs0QkFBT0gsV0FBVTtzQ0FDaEIsNEVBQUM3QixxSEFBd0JBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFNckM7R0F2Rk1HO0tBQUFBO0FBeUZOLCtEQUFlQSxVQUFVQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9jb21wb25lbnRzL1Byb21wdEFyZWEudHN4P2Y1ZjQiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IEdyQXR0YWNobWVudCB9IGZyb20gXCJyZWFjdC1pY29ucy9nclwiO1xuaW1wb3J0IHsgSW9NZFNlbmQgfSBmcm9tIFwicmVhY3QtaWNvbnMvaW9cIjtcbmltcG9ydCB7IElvQ2hlY2ttYXJrQ2lyY2xlT3V0bGluZSB9IGZyb20gXCJyZWFjdC1pY29ucy9pbzVcIjtcbmltcG9ydCBBdHRhY2hNZW51IGZyb20gXCIuL0F0dGFjaE1lbnVcIjtcbmltcG9ydCBBdHRhY2htZW50UHJldmlldyBmcm9tIFwiLi9BdHRhY2htZW50UHJldmlld1wiO1xuXG5pbnRlcmZhY2UgUHJvbXB0QXJlYVByb3BzIHtcbiAgaXNTaWRlYmFyT3BlbjogYm9vbGVhbjtcbn1cblxuY29uc3QgUHJvbXB0QXJlYTogUmVhY3QuRkM8UHJvbXB0QXJlYVByb3BzPiA9ICh7IGlzU2lkZWJhck9wZW4gfSkgPT4ge1xuICBjb25zdCBbaXNBdHRhY2hNZW51T3Blbiwgc2V0SXNBdHRhY2hNZW51T3Blbl0gPSB1c2VTdGF0ZShmYWxzZSk7XG4gIGNvbnN0IFtzZWxlY3RlZEZpbGVzLCBzZXRTZWxlY3RlZEZpbGVzXSA9IHVzZVN0YXRlPEZpbGVbXT4oW10pO1xuXG4gIGNvbnN0IGhhbmRsZUZpbGVTZWxlY3QgPSAoZmlsZTogRmlsZSkgPT4ge1xuICAgIHNldFNlbGVjdGVkRmlsZXMoKHByZXZGaWxlcykgPT4gWy4uLnByZXZGaWxlcywgZmlsZV0pO1xuICAgIGNsb3NlQXR0YWNoTWVudSgpO1xuICB9O1xuXG4gIGNvbnN0IGhhbmRsZVZvaWNlU2VsZWN0ID0gKGZpbGU6IEZpbGUpID0+IHtcbiAgICBzZXRTZWxlY3RlZEZpbGVzKChwcmV2RmlsZXMpID0+IFsuLi5wcmV2RmlsZXMsIGZpbGVdKTtcbiAgICBjbG9zZUF0dGFjaE1lbnUoKTtcbiAgfTtcblxuICBjb25zdCBoYW5kbGVWaWRlb1NlbGVjdCA9IChmaWxlOiBGaWxlKSA9PiB7XG4gICAgc2V0U2VsZWN0ZWRGaWxlcygocHJldkZpbGVzKSA9PiBbLi4ucHJldkZpbGVzLCBmaWxlXSk7XG4gICAgY2xvc2VBdHRhY2hNZW51KCk7XG4gIH07XG5cbiAgY29uc3QgaGFuZGxlUmVtb3ZlRmlsZSA9IChpbmRleDogbnVtYmVyKSA9PiB7XG4gICAgc2V0U2VsZWN0ZWRGaWxlcygocHJldkZpbGVzKSA9PiBwcmV2RmlsZXMuZmlsdGVyKChfLCBpKSA9PiBpICE9PSBpbmRleCkpO1xuICB9O1xuXG4gIGNvbnN0IHRvZ2dsZUF0dGFjaE1lbnUgPSAoKSA9PiB7XG4gICAgc2V0SXNBdHRhY2hNZW51T3BlbighaXNBdHRhY2hNZW51T3Blbik7XG4gIH07XG5cbiAgY29uc3QgY2xvc2VBdHRhY2hNZW51ID0gKCkgPT4ge1xuICAgIHNldElzQXR0YWNoTWVudU9wZW4oZmFsc2UpO1xuICB9O1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgY29uc3QgaGFuZGxlQ2xpY2tPdXRzaWRlID0gKGV2ZW50OiBNb3VzZUV2ZW50KSA9PiB7XG4gICAgICBjb25zdCB0YXJnZXQgPSBldmVudC50YXJnZXQgYXMgSFRNTEVsZW1lbnQ7XG4gICAgICBpZiAodGFyZ2V0LmNsb3Nlc3QoXCIucHJvbXB0LWFyZWFcIikgPT09IG51bGwpIHtcbiAgICAgICAgY2xvc2VBdHRhY2hNZW51KCk7XG4gICAgICB9XG4gICAgfTtcblxuICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBoYW5kbGVDbGlja091dHNpZGUpO1xuICAgIHJldHVybiAoKSA9PiB7XG4gICAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgaGFuZGxlQ2xpY2tPdXRzaWRlKTtcbiAgICB9O1xuICB9LCBbXSk7XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2XG4gICAgICBjbGFzc05hbWU9e2BmaXhlZCBib3R0b20tNCB3LXNjcmVlbiBmbGV4IGp1c3RpZnktY2VudGVyIHRyYW5zaXRpb24tYWxsIGR1cmF0aW9uLTMwMCAke1xuICAgICAgICBpc1NpZGViYXJPcGVuID8gXCJtbC0wXCIgOiBcIm1sLTBcIlxuICAgICAgfWB9XG4gICAgPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtY29sIGl0ZW1zLWNlbnRlciBiZy1ncmF5LTgwMCByb3VuZGVkLWxnIHB4LTQgcHktMiBzaGFkb3ctbGcgcmVsYXRpdmUgdy1mdWxsIG1heC13LTR4bCBwcm9tcHQtYXJlYVwiPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC1jb2wgdy1mdWxsXCI+XG4gICAgICAgICAge3NlbGVjdGVkRmlsZXMubWFwKChmaWxlLCBpbmRleCkgPT4gKFxuICAgICAgICAgICAgPEF0dGFjaG1lbnRQcmV2aWV3XG4gICAgICAgICAgICAgIGtleT17aW5kZXh9XG4gICAgICAgICAgICAgIGZpbGU9e2ZpbGV9XG4gICAgICAgICAgICAgIG9uUmVtb3ZlPXsoKSA9PiBoYW5kbGVSZW1vdmVGaWxlKGluZGV4KX1cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgKSl9XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggaXRlbXMtY2VudGVyIHctZnVsbFwiPlxuICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwibXItNFwiIG9uQ2xpY2s9e3RvZ2dsZUF0dGFjaE1lbnV9PlxuICAgICAgICAgICAgPEdyQXR0YWNobWVudCAvPlxuICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgIHtpc0F0dGFjaE1lbnVPcGVuICYmIChcbiAgICAgICAgICAgIDxBdHRhY2hNZW51XG4gICAgICAgICAgICAgIG9uRmlsZVNlbGVjdD17aGFuZGxlRmlsZVNlbGVjdH1cbiAgICAgICAgICAgICAgb25Wb2ljZVNlbGVjdD17aGFuZGxlVm9pY2VTZWxlY3R9XG4gICAgICAgICAgICAgIG9uVmlkZW9TZWxlY3Q9e2hhbmRsZVZpZGVvU2VsZWN0fVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICApfVxuICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJIb3cgY2FuIEFiaWxpdHlTeW5jIGhlbHAgeW91IHRvZGF5P1wiXG4gICAgICAgICAgICBjbGFzc05hbWU9XCJiZy1ncmF5LTgwMCB0ZXh0LXdoaXRlIHBsYWNlaG9sZGVyLWdyYXktNTAwIGZvY3VzOm91dGxpbmUtbm9uZSBmbGV4LWdyb3cgcHgtMlwiXG4gICAgICAgICAgLz5cbiAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2sgPSB7KGUpID0+IGdldH0gY2xhc3NOYW1lPVwibWwtNFwiPlxuICAgICAgICAgICAgPElvTWRTZW5kIC8+XG4gICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJtbC0yXCI+XG4gICAgICAgICAgICA8SW9DaGVja21hcmtDaXJjbGVPdXRsaW5lIC8+XG4gICAgICAgICAgPC9idXR0b24+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBQcm9tcHRBcmVhO1xuXG5cblxuIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlU3RhdGUiLCJ1c2VFZmZlY3QiLCJHckF0dGFjaG1lbnQiLCJJb01kU2VuZCIsIklvQ2hlY2ttYXJrQ2lyY2xlT3V0bGluZSIsIkF0dGFjaE1lbnUiLCJBdHRhY2htZW50UHJldmlldyIsIlByb21wdEFyZWEiLCJpc1NpZGViYXJPcGVuIiwiaXNBdHRhY2hNZW51T3BlbiIsInNldElzQXR0YWNoTWVudU9wZW4iLCJzZWxlY3RlZEZpbGVzIiwic2V0U2VsZWN0ZWRGaWxlcyIsImhhbmRsZUZpbGVTZWxlY3QiLCJmaWxlIiwicHJldkZpbGVzIiwiY2xvc2VBdHRhY2hNZW51IiwiaGFuZGxlVm9pY2VTZWxlY3QiLCJoYW5kbGVWaWRlb1NlbGVjdCIsImhhbmRsZVJlbW92ZUZpbGUiLCJpbmRleCIsImZpbHRlciIsIl8iLCJpIiwidG9nZ2xlQXR0YWNoTWVudSIsImhhbmRsZUNsaWNrT3V0c2lkZSIsImV2ZW50IiwidGFyZ2V0IiwiY2xvc2VzdCIsImRvY3VtZW50IiwiYWRkRXZlbnRMaXN0ZW5lciIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJkaXYiLCJjbGFzc05hbWUiLCJtYXAiLCJvblJlbW92ZSIsImJ1dHRvbiIsIm9uQ2xpY2siLCJvbkZpbGVTZWxlY3QiLCJvblZvaWNlU2VsZWN0Iiwib25WaWRlb1NlbGVjdCIsImlucHV0IiwidHlwZSIsInBsYWNlaG9sZGVyIiwiZSIsImdldCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/components/PromptArea.tsx\n"));

/***/ })

});