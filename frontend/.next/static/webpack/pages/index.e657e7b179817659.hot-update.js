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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _barrel_optimize_names_GrAttachment_react_icons_gr__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! __barrel_optimize__?names=GrAttachment!=!react-icons/gr */ \"__barrel_optimize__?names=GrAttachment!=!./node_modules/react-icons/gr/index.mjs\");\n/* harmony import */ var _barrel_optimize_names_IoMdSend_react_icons_io__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! __barrel_optimize__?names=IoMdSend!=!react-icons/io */ \"__barrel_optimize__?names=IoMdSend!=!./node_modules/react-icons/io/index.mjs\");\n/* harmony import */ var _barrel_optimize_names_IoCheckmarkCircleOutline_react_icons_io5__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! __barrel_optimize__?names=IoCheckmarkCircleOutline!=!react-icons/io5 */ \"__barrel_optimize__?names=IoCheckmarkCircleOutline!=!./node_modules/react-icons/io5/index.mjs\");\n/* harmony import */ var _AttachMenu__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./AttachMenu */ \"./src/components/AttachMenu.tsx\");\n/* harmony import */ var _AttachmentPreview__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./AttachmentPreview */ \"./src/components/AttachmentPreview.tsx\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\nconst axios = __webpack_require__(/*! axios */ \"../node_modules/axios/dist/browser/axios.cjs\");\nconst FormData = __webpack_require__(/*! form-data */ \"../node_modules/form-data/lib/browser.js\");\nconst PromptArea = (param)=>{\n    let { isSidebarOpen } = param;\n    _s();\n    const [isAttachMenuOpen, setIsAttachMenuOpen] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const [selectedFiles, setSelectedFiles] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    const handleFiles = (e)=>{\n        let data = new FormData();\n        data.append(\"session_id\", \"u1\");\n        data.append(\"image_url\", selectedFiles[0]);\n        let config = {\n            method: \"post\",\n            maxBodyLength: Infinity,\n            url: \"http://127.0.0.1:8000/app/image-desc\",\n            data: data\n        };\n        axios.request(config).then((response)=>{\n            console.log(JSON.stringify(\"data is\", response.data));\n        }).catch((error)=>{\n            console.log(\"error is\", error);\n        });\n        setResponseData(resonse.data.data);\n    };\n    const handleFileSelect = (file)=>{\n        setSelectedFiles((prevFiles)=>[\n                ...prevFiles,\n                file\n            ]);\n        closeAttachMenu();\n    };\n    const handleVoiceSelect = (file)=>{\n        setSelectedFiles((prevFiles)=>[\n                ...prevFiles,\n                file\n            ]);\n        closeAttachMenu();\n    };\n    const handleVideoSelect = (file)=>{\n        setSelectedFiles((prevFiles)=>[\n                ...prevFiles,\n                file\n            ]);\n        closeAttachMenu();\n    };\n    const handleRemoveFile = (index)=>{\n        setSelectedFiles((prevFiles)=>prevFiles.filter((_, i)=>i !== index));\n    };\n    const toggleAttachMenu = ()=>{\n        setIsAttachMenuOpen(!isAttachMenuOpen);\n    };\n    const closeAttachMenu = ()=>{\n        setIsAttachMenuOpen(false);\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        const handleClickOutside = (event)=>{\n            const target = event.target;\n            if (target.closest(\".prompt-area\") === null) {\n                closeAttachMenu();\n            }\n        };\n        document.addEventListener(\"click\", handleClickOutside);\n        return ()=>{\n            document.removeEventListener(\"click\", handleClickOutside);\n        };\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"fixed bottom-4 w-screen flex justify-center transition-all duration-300 \".concat(isSidebarOpen ? \"ml-0\" : \"ml-0\"),\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"flex flex-col items-center bg-gray-800 rounded-lg px-4 py-2 shadow-lg relative w-full max-w-4xl prompt-area\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"flex flex-col w-full\",\n                    children: selectedFiles.map((file, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_AttachmentPreview__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                            file: file,\n                            onRemove: ()=>handleRemoveFile(index)\n                        }, index, false, {\n                            fileName: \"/Users/abgoenka/Documents/InternHackathon/frontend/src/components/PromptArea.tsx\",\n                            lineNumber: 98,\n                            columnNumber: 13\n                        }, undefined))\n                }, void 0, false, {\n                    fileName: \"/Users/abgoenka/Documents/InternHackathon/frontend/src/components/PromptArea.tsx\",\n                    lineNumber: 96,\n                    columnNumber: 9\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"flex items-center w-full\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                            className: \"mr-4\",\n                            onClick: toggleAttachMenu,\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_GrAttachment_react_icons_gr__WEBPACK_IMPORTED_MODULE_4__.GrAttachment, {}, void 0, false, {\n                                fileName: \"/Users/abgoenka/Documents/InternHackathon/frontend/src/components/PromptArea.tsx\",\n                                lineNumber: 107,\n                                columnNumber: 13\n                            }, undefined)\n                        }, void 0, false, {\n                            fileName: \"/Users/abgoenka/Documents/InternHackathon/frontend/src/components/PromptArea.tsx\",\n                            lineNumber: 106,\n                            columnNumber: 11\n                        }, undefined),\n                        isAttachMenuOpen && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_AttachMenu__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                            onFileSelect: handleFileSelect,\n                            onVoiceSelect: handleVoiceSelect,\n                            onVideoSelect: handleVideoSelect\n                        }, void 0, false, {\n                            fileName: \"/Users/abgoenka/Documents/InternHackathon/frontend/src/components/PromptArea.tsx\",\n                            lineNumber: 110,\n                            columnNumber: 13\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                            type: \"text\",\n                            placeholder: \"How can AbilitySync help you today?\",\n                            className: \"bg-gray-800 text-white placeholder-gray-500 focus:outline-none flex-grow px-2\"\n                        }, void 0, false, {\n                            fileName: \"/Users/abgoenka/Documents/InternHackathon/frontend/src/components/PromptArea.tsx\",\n                            lineNumber: 116,\n                            columnNumber: 11\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                            onClick: (e)=>handleFiles(e),\n                            className: \"ml-4\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_IoMdSend_react_icons_io__WEBPACK_IMPORTED_MODULE_5__.IoMdSend, {}, void 0, false, {\n                                fileName: \"/Users/abgoenka/Documents/InternHackathon/frontend/src/components/PromptArea.tsx\",\n                                lineNumber: 122,\n                                columnNumber: 13\n                            }, undefined)\n                        }, void 0, false, {\n                            fileName: \"/Users/abgoenka/Documents/InternHackathon/frontend/src/components/PromptArea.tsx\",\n                            lineNumber: 121,\n                            columnNumber: 11\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                            className: \"ml-2\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_IoCheckmarkCircleOutline_react_icons_io5__WEBPACK_IMPORTED_MODULE_6__.IoCheckmarkCircleOutline, {}, void 0, false, {\n                                fileName: \"/Users/abgoenka/Documents/InternHackathon/frontend/src/components/PromptArea.tsx\",\n                                lineNumber: 125,\n                                columnNumber: 13\n                            }, undefined)\n                        }, void 0, false, {\n                            fileName: \"/Users/abgoenka/Documents/InternHackathon/frontend/src/components/PromptArea.tsx\",\n                            lineNumber: 124,\n                            columnNumber: 11\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/abgoenka/Documents/InternHackathon/frontend/src/components/PromptArea.tsx\",\n                    lineNumber: 105,\n                    columnNumber: 9\n                }, undefined)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/abgoenka/Documents/InternHackathon/frontend/src/components/PromptArea.tsx\",\n            lineNumber: 95,\n            columnNumber: 7\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"/Users/abgoenka/Documents/InternHackathon/frontend/src/components/PromptArea.tsx\",\n        lineNumber: 90,\n        columnNumber: 5\n    }, undefined);\n};\n_s(PromptArea, \"KroBqV4Ffse0CDIyQKhJEwy8KQk=\");\n_c = PromptArea;\n/* harmony default export */ __webpack_exports__[\"default\"] = (PromptArea);\nvar _c;\n$RefreshReg$(_c, \"PromptArea\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Q0xDLGFBQVk7NEJBQ1pWLFdBQVU7Ozs7OztzQ0FFWiw4REFBQ0c7NEJBQU9DLFNBQVMsQ0FBQzNDLElBQU1ELFlBQVlDOzRCQUFJdUMsV0FBVTtzQ0FDaEQsNEVBQUNyRCxvRkFBUUE7Ozs7Ozs7Ozs7c0NBRVgsOERBQUN3RDs0QkFBT0gsV0FBVTtzQ0FDaEIsNEVBQUNwRCxxSEFBd0JBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFNckM7R0FwSE1NO0tBQUFBO0FBc0hOLCtEQUFlQSxVQUFVQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9jb21wb25lbnRzL1Byb21wdEFyZWEudHN4P2Y1ZjQiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IEdyQXR0YWNobWVudCB9IGZyb20gXCJyZWFjdC1pY29ucy9nclwiO1xuaW1wb3J0IHsgSW9NZFNlbmQgfSBmcm9tIFwicmVhY3QtaWNvbnMvaW9cIjtcbmltcG9ydCB7IElvQ2hlY2ttYXJrQ2lyY2xlT3V0bGluZSB9IGZyb20gXCJyZWFjdC1pY29ucy9pbzVcIjtcbmltcG9ydCBBdHRhY2hNZW51IGZyb20gXCIuL0F0dGFjaE1lbnVcIjtcbmltcG9ydCBBdHRhY2htZW50UHJldmlldyBmcm9tIFwiLi9BdHRhY2htZW50UHJldmlld1wiO1xuY29uc3QgYXhpb3MgPSByZXF1aXJlKFwiYXhpb3NcIik7XG5jb25zdCBGb3JtRGF0YSA9IHJlcXVpcmUoXCJmb3JtLWRhdGFcIik7XG4vLyBjb25zdCBmcyA9IHJlcXVpcmUoXCJmc1wiKTtcblxuaW50ZXJmYWNlIFByb21wdEFyZWFQcm9wcyB7XG4gIGlzU2lkZWJhck9wZW46IGJvb2xlYW47XG59XG5cbmNvbnN0IFByb21wdEFyZWE6IFJlYWN0LkZDPFByb21wdEFyZWFQcm9wcz4gPSAoeyBpc1NpZGViYXJPcGVuIH0pID0+IHtcbiAgY29uc3QgW2lzQXR0YWNoTWVudU9wZW4sIHNldElzQXR0YWNoTWVudU9wZW5dID0gdXNlU3RhdGUoZmFsc2UpO1xuICBjb25zdCBbc2VsZWN0ZWRGaWxlcywgc2V0U2VsZWN0ZWRGaWxlc10gPSB1c2VTdGF0ZTxGaWxlW10+KFtdKTtcblxuICBjb25zdCBoYW5kbGVGaWxlcyA9IChlOiBhbnkpID0+IHtcbiAgICBsZXQgZGF0YSA9IG5ldyBGb3JtRGF0YSgpO1xuICAgIGRhdGEuYXBwZW5kKFwic2Vzc2lvbl9pZFwiLCBcInUxXCIpO1xuICAgIGRhdGEuYXBwZW5kKFxuICAgICAgXCJpbWFnZV91cmxcIixcbiAgICAgIHNlbGVjdGVkRmlsZXNbMF1cbiAgICAgIC8vIGZzLmNyZWF0ZVJlYWRTdHJlYW0oXCIvVXNlcnMvYWJnb2Vua2EvRG93bmxvYWRzL015IHBob3RvLmpwZWdcIilcbiAgICApO1xuXG4gICAgbGV0IGNvbmZpZyA9IHtcbiAgICAgIG1ldGhvZDogXCJwb3N0XCIsXG4gICAgICBtYXhCb2R5TGVuZ3RoOiBJbmZpbml0eSxcbiAgICAgIHVybDogXCJodHRwOi8vMTI3LjAuMC4xOjgwMDAvYXBwL2ltYWdlLWRlc2NcIixcblxuICAgICAgZGF0YTogZGF0YSxcbiAgICB9O1xuXG4gICAgYXhpb3NcbiAgICAgIC5yZXF1ZXN0KGNvbmZpZylcbiAgICAgIC50aGVuKChyZXNwb25zZSkgPT4ge1xuICAgICAgICBjb25zb2xlLmxvZyhKU09OLnN0cmluZ2lmeShcImRhdGEgaXNcIiwgcmVzcG9uc2UuZGF0YSkpO1xuXG4gICAgICB9KVxuICAgICAgLmNhdGNoKChlcnJvcikgPT4ge1xuICAgICAgICBjb25zb2xlLmxvZyhcImVycm9yIGlzXCIsIGVycm9yKTtcbiAgICAgIH0pO1xuXG4gICAgc2V0UmVzcG9uc2VEYXRhKHJlc29uc2UuZGF0YS5kYXRhKVxuICB9O1xuICBjb25zdCBoYW5kbGVGaWxlU2VsZWN0ID0gKGZpbGU6IEZpbGUpID0+IHtcbiAgICBzZXRTZWxlY3RlZEZpbGVzKChwcmV2RmlsZXMpID0+IFsuLi5wcmV2RmlsZXMsIGZpbGVdKTtcbiAgICBjbG9zZUF0dGFjaE1lbnUoKTtcbiAgfTtcblxuICBjb25zdCBoYW5kbGVWb2ljZVNlbGVjdCA9IChmaWxlOiBGaWxlKSA9PiB7XG4gICAgc2V0U2VsZWN0ZWRGaWxlcygocHJldkZpbGVzKSA9PiBbLi4ucHJldkZpbGVzLCBmaWxlXSk7XG4gICAgY2xvc2VBdHRhY2hNZW51KCk7XG4gIH07XG5cbiAgY29uc3QgaGFuZGxlVmlkZW9TZWxlY3QgPSAoZmlsZTogRmlsZSkgPT4ge1xuICAgIHNldFNlbGVjdGVkRmlsZXMoKHByZXZGaWxlcykgPT4gWy4uLnByZXZGaWxlcywgZmlsZV0pO1xuICAgIGNsb3NlQXR0YWNoTWVudSgpO1xuICB9O1xuXG4gIGNvbnN0IGhhbmRsZVJlbW92ZUZpbGUgPSAoaW5kZXg6IG51bWJlcikgPT4ge1xuICAgIHNldFNlbGVjdGVkRmlsZXMoKHByZXZGaWxlcykgPT4gcHJldkZpbGVzLmZpbHRlcigoXywgaSkgPT4gaSAhPT0gaW5kZXgpKTtcbiAgfTtcblxuICBjb25zdCB0b2dnbGVBdHRhY2hNZW51ID0gKCkgPT4ge1xuICAgIHNldElzQXR0YWNoTWVudU9wZW4oIWlzQXR0YWNoTWVudU9wZW4pO1xuICB9O1xuXG4gIGNvbnN0IGNsb3NlQXR0YWNoTWVudSA9ICgpID0+IHtcbiAgICBzZXRJc0F0dGFjaE1lbnVPcGVuKGZhbHNlKTtcbiAgfTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGNvbnN0IGhhbmRsZUNsaWNrT3V0c2lkZSA9IChldmVudDogTW91c2VFdmVudCkgPT4ge1xuICAgICAgY29uc3QgdGFyZ2V0ID0gZXZlbnQudGFyZ2V0IGFzIEhUTUxFbGVtZW50O1xuICAgICAgaWYgKHRhcmdldC5jbG9zZXN0KFwiLnByb21wdC1hcmVhXCIpID09PSBudWxsKSB7XG4gICAgICAgIGNsb3NlQXR0YWNoTWVudSgpO1xuICAgICAgfVxuICAgIH07XG5cbiAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgaGFuZGxlQ2xpY2tPdXRzaWRlKTtcbiAgICByZXR1cm4gKCkgPT4ge1xuICAgICAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGhhbmRsZUNsaWNrT3V0c2lkZSk7XG4gICAgfTtcbiAgfSwgW10pO1xuXG4gIHJldHVybiAoXG4gICAgPGRpdlxuICAgICAgY2xhc3NOYW1lPXtgZml4ZWQgYm90dG9tLTQgdy1zY3JlZW4gZmxleCBqdXN0aWZ5LWNlbnRlciB0cmFuc2l0aW9uLWFsbCBkdXJhdGlvbi0zMDAgJHtcbiAgICAgICAgaXNTaWRlYmFyT3BlbiA/IFwibWwtMFwiIDogXCJtbC0wXCJcbiAgICAgIH1gfVxuICAgID5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LWNvbCBpdGVtcy1jZW50ZXIgYmctZ3JheS04MDAgcm91bmRlZC1sZyBweC00IHB5LTIgc2hhZG93LWxnIHJlbGF0aXZlIHctZnVsbCBtYXgtdy00eGwgcHJvbXB0LWFyZWFcIj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtY29sIHctZnVsbFwiPlxuICAgICAgICAgIHtzZWxlY3RlZEZpbGVzLm1hcCgoZmlsZSwgaW5kZXgpID0+IChcbiAgICAgICAgICAgIDxBdHRhY2htZW50UHJldmlld1xuICAgICAgICAgICAgICBrZXk9e2luZGV4fVxuICAgICAgICAgICAgICBmaWxlPXtmaWxlfVxuICAgICAgICAgICAgICBvblJlbW92ZT17KCkgPT4gaGFuZGxlUmVtb3ZlRmlsZShpbmRleCl9XG4gICAgICAgICAgICAvPlxuICAgICAgICAgICkpfVxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLWNlbnRlciB3LWZ1bGxcIj5cbiAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cIm1yLTRcIiBvbkNsaWNrPXt0b2dnbGVBdHRhY2hNZW51fT5cbiAgICAgICAgICAgIDxHckF0dGFjaG1lbnQgLz5cbiAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICB7aXNBdHRhY2hNZW51T3BlbiAmJiAoXG4gICAgICAgICAgICA8QXR0YWNoTWVudVxuICAgICAgICAgICAgICBvbkZpbGVTZWxlY3Q9e2hhbmRsZUZpbGVTZWxlY3R9XG4gICAgICAgICAgICAgIG9uVm9pY2VTZWxlY3Q9e2hhbmRsZVZvaWNlU2VsZWN0fVxuICAgICAgICAgICAgICBvblZpZGVvU2VsZWN0PXtoYW5kbGVWaWRlb1NlbGVjdH1cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgKX1cbiAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiSG93IGNhbiBBYmlsaXR5U3luYyBoZWxwIHlvdSB0b2RheT9cIlxuICAgICAgICAgICAgY2xhc3NOYW1lPVwiYmctZ3JheS04MDAgdGV4dC13aGl0ZSBwbGFjZWhvbGRlci1ncmF5LTUwMCBmb2N1czpvdXRsaW5lLW5vbmUgZmxleC1ncm93IHB4LTJcIlxuICAgICAgICAgIC8+XG4gICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXsoZSkgPT4gaGFuZGxlRmlsZXMoZSl9IGNsYXNzTmFtZT1cIm1sLTRcIj5cbiAgICAgICAgICAgIDxJb01kU2VuZCAvPlxuICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwibWwtMlwiPlxuICAgICAgICAgICAgPElvQ2hlY2ttYXJrQ2lyY2xlT3V0bGluZSAvPlxuICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgUHJvbXB0QXJlYTtcbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZVN0YXRlIiwidXNlRWZmZWN0IiwiR3JBdHRhY2htZW50IiwiSW9NZFNlbmQiLCJJb0NoZWNrbWFya0NpcmNsZU91dGxpbmUiLCJBdHRhY2hNZW51IiwiQXR0YWNobWVudFByZXZpZXciLCJheGlvcyIsInJlcXVpcmUiLCJGb3JtRGF0YSIsIlByb21wdEFyZWEiLCJpc1NpZGViYXJPcGVuIiwiaXNBdHRhY2hNZW51T3BlbiIsInNldElzQXR0YWNoTWVudU9wZW4iLCJzZWxlY3RlZEZpbGVzIiwic2V0U2VsZWN0ZWRGaWxlcyIsImhhbmRsZUZpbGVzIiwiZSIsImRhdGEiLCJhcHBlbmQiLCJjb25maWciLCJtZXRob2QiLCJtYXhCb2R5TGVuZ3RoIiwiSW5maW5pdHkiLCJ1cmwiLCJyZXF1ZXN0IiwidGhlbiIsInJlc3BvbnNlIiwiY29uc29sZSIsImxvZyIsIkpTT04iLCJzdHJpbmdpZnkiLCJjYXRjaCIsImVycm9yIiwic2V0UmVzcG9uc2VEYXRhIiwicmVzb25zZSIsImhhbmRsZUZpbGVTZWxlY3QiLCJmaWxlIiwicHJldkZpbGVzIiwiY2xvc2VBdHRhY2hNZW51IiwiaGFuZGxlVm9pY2VTZWxlY3QiLCJoYW5kbGVWaWRlb1NlbGVjdCIsImhhbmRsZVJlbW92ZUZpbGUiLCJpbmRleCIsImZpbHRlciIsIl8iLCJpIiwidG9nZ2xlQXR0YWNoTWVudSIsImhhbmRsZUNsaWNrT3V0c2lkZSIsImV2ZW50IiwidGFyZ2V0IiwiY2xvc2VzdCIsImRvY3VtZW50IiwiYWRkRXZlbnRMaXN0ZW5lciIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJkaXYiLCJjbGFzc05hbWUiLCJtYXAiLCJvblJlbW92ZSIsImJ1dHRvbiIsIm9uQ2xpY2siLCJvbkZpbGVTZWxlY3QiLCJvblZvaWNlU2VsZWN0Iiwib25WaWRlb1NlbGVjdCIsImlucHV0IiwidHlwZSIsInBsYWNlaG9sZGVyIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/components/PromptArea.tsx\n"));

/***/ })

});