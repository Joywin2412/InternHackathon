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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _barrel_optimize_names_GrAttachment_react_icons_gr__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! __barrel_optimize__?names=GrAttachment!=!react-icons/gr */ \"__barrel_optimize__?names=GrAttachment!=!./node_modules/react-icons/gr/index.mjs\");\n/* harmony import */ var _barrel_optimize_names_IoMdSend_react_icons_io__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! __barrel_optimize__?names=IoMdSend!=!react-icons/io */ \"__barrel_optimize__?names=IoMdSend!=!./node_modules/react-icons/io/index.mjs\");\n/* harmony import */ var _barrel_optimize_names_IoCheckmarkCircleOutline_react_icons_io5__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! __barrel_optimize__?names=IoCheckmarkCircleOutline!=!react-icons/io5 */ \"__barrel_optimize__?names=IoCheckmarkCircleOutline!=!./node_modules/react-icons/io5/index.mjs\");\n/* harmony import */ var _AttachMenu__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./AttachMenu */ \"./src/components/AttachMenu.tsx\");\n/* harmony import */ var _AttachmentPreview__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./AttachmentPreview */ \"./src/components/AttachmentPreview.tsx\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\nconst axios = __webpack_require__(/*! axios */ \"../node_modules/axios/dist/browser/axios.cjs\");\nconst FormData = __webpack_require__(/*! form-data */ \"../node_modules/form-data/lib/browser.js\");\nconst PromptArea = (param)=>{\n    let { isSidebarOpen } = param;\n    _s();\n    const [isAttachMenuOpen, setIsAttachMenuOpen] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const [selectedFiles, setSelectedFiles] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    const [responseData, setResponseData] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const handleFiles = async (e)=>{\n        let data = new FormData();\n        data.append(\"session_id\", \"u1\");\n        data.append(\"image_url\", selectedFiles[0]);\n        let config = {\n            method: \"post\",\n            maxBodyLength: Infinity,\n            url: \"http://127.0.0.1:8000/app/image-desc\",\n            data: data\n        };\n        await axios.request(config).then((response)=>{\n            console.log(JSON.stringify(\"data is\", response.data));\n            setResponseData(response.data.data);\n        }).catch((error)=>{\n            console.log(\"error is\", error);\n        });\n    };\n    const handleFileSelect = (file)=>{\n        setSelectedFiles((prevFiles)=>[\n                ...prevFiles,\n                file\n            ]);\n        closeAttachMenu();\n    };\n    const handleVoiceSelect = (file)=>{\n        setSelectedFiles((prevFiles)=>[\n                ...prevFiles,\n                file\n            ]);\n        closeAttachMenu();\n    };\n    const handleVideoSelect = (file)=>{\n        setSelectedFiles((prevFiles)=>[\n                ...prevFiles,\n                file\n            ]);\n        closeAttachMenu();\n    };\n    const handleRemoveFile = (index)=>{\n        setSelectedFiles((prevFiles)=>prevFiles.filter((_, i)=>i !== index));\n    };\n    const toggleAttachMenu = ()=>{\n        setIsAttachMenuOpen(!isAttachMenuOpen);\n    };\n    const closeAttachMenu = ()=>{\n        setIsAttachMenuOpen(false);\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        const handleClickOutside = (event)=>{\n            const target = event.target;\n            if (target.closest(\".prompt-area\") === null) {\n                closeAttachMenu();\n            }\n        };\n        document.addEventListener(\"click\", handleClickOutside);\n        return ()=>{\n            document.removeEventListener(\"click\", handleClickOutside);\n        };\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"fixed bottom-4 w-screen flex justify-center transition-all duration-300 \".concat(isSidebarOpen ? \"ml-0\" : \"ml-0\"),\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"flex flex-col items-center bg-gray-800 rounded-lg px-4 py-2 shadow-lg relative w-full max-w-4xl prompt-area\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"flex flex-col w-full\",\n                    children: selectedFiles.map((file, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_AttachmentPreview__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                            file: file,\n                            onRemove: ()=>handleRemoveFile(index)\n                        }, index, false, {\n                            fileName: \"/Users/abgoenka/Documents/InternHackathon/frontend/src/components/PromptArea.tsx\",\n                            lineNumber: 99,\n                            columnNumber: 13\n                        }, undefined))\n                }, void 0, false, {\n                    fileName: \"/Users/abgoenka/Documents/InternHackathon/frontend/src/components/PromptArea.tsx\",\n                    lineNumber: 97,\n                    columnNumber: 9\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"flex items-center w-full\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                            className: \"mr-4\",\n                            onClick: toggleAttachMenu,\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_GrAttachment_react_icons_gr__WEBPACK_IMPORTED_MODULE_4__.GrAttachment, {}, void 0, false, {\n                                fileName: \"/Users/abgoenka/Documents/InternHackathon/frontend/src/components/PromptArea.tsx\",\n                                lineNumber: 108,\n                                columnNumber: 13\n                            }, undefined)\n                        }, void 0, false, {\n                            fileName: \"/Users/abgoenka/Documents/InternHackathon/frontend/src/components/PromptArea.tsx\",\n                            lineNumber: 107,\n                            columnNumber: 11\n                        }, undefined),\n                        isAttachMenuOpen && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_AttachMenu__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                            onFileSelect: handleFileSelect,\n                            onVoiceSelect: handleVoiceSelect,\n                            onVideoSelect: handleVideoSelect\n                        }, void 0, false, {\n                            fileName: \"/Users/abgoenka/Documents/InternHackathon/frontend/src/components/PromptArea.tsx\",\n                            lineNumber: 111,\n                            columnNumber: 13\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                            type: \"text\",\n                            placeholder: \"How can AbilitySync help you today?\",\n                            className: \"bg-gray-800 text-white placeholder-gray-500 focus:outline-none flex-grow px-2\"\n                        }, void 0, false, {\n                            fileName: \"/Users/abgoenka/Documents/InternHackathon/frontend/src/components/PromptArea.tsx\",\n                            lineNumber: 117,\n                            columnNumber: 11\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                            onClick: (e)=>handleFiles(e),\n                            className: \"ml-4\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_IoMdSend_react_icons_io__WEBPACK_IMPORTED_MODULE_5__.IoMdSend, {}, void 0, false, {\n                                fileName: \"/Users/abgoenka/Documents/InternHackathon/frontend/src/components/PromptArea.tsx\",\n                                lineNumber: 123,\n                                columnNumber: 13\n                            }, undefined)\n                        }, void 0, false, {\n                            fileName: \"/Users/abgoenka/Documents/InternHackathon/frontend/src/components/PromptArea.tsx\",\n                            lineNumber: 122,\n                            columnNumber: 11\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                            className: \"ml-2\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_IoCheckmarkCircleOutline_react_icons_io5__WEBPACK_IMPORTED_MODULE_6__.IoCheckmarkCircleOutline, {}, void 0, false, {\n                                fileName: \"/Users/abgoenka/Documents/InternHackathon/frontend/src/components/PromptArea.tsx\",\n                                lineNumber: 126,\n                                columnNumber: 13\n                            }, undefined)\n                        }, void 0, false, {\n                            fileName: \"/Users/abgoenka/Documents/InternHackathon/frontend/src/components/PromptArea.tsx\",\n                            lineNumber: 125,\n                            columnNumber: 11\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/abgoenka/Documents/InternHackathon/frontend/src/components/PromptArea.tsx\",\n                    lineNumber: 106,\n                    columnNumber: 9\n                }, undefined)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/abgoenka/Documents/InternHackathon/frontend/src/components/PromptArea.tsx\",\n            lineNumber: 95,\n            columnNumber: 7\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"/Users/abgoenka/Documents/InternHackathon/frontend/src/components/PromptArea.tsx\",\n        lineNumber: 90,\n        columnNumber: 5\n    }, undefined);\n};\n_s(PromptArea, \"HBPa6rBgaf86nHLtuxJVXxHnvpA=\");\n_c = PromptArea;\n/* harmony default export */ __webpack_exports__[\"default\"] = (PromptArea);\nvar _c;\n$RefreshReg$(_c, \"PromptArea\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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dEI7NEJBQ2Z1QixlQUFldEI7Ozs7OztzQ0FHbkIsOERBQUN1Qjs0QkFDQ0MsTUFBSzs0QkFDTEMsYUFBWTs0QkFDWlYsV0FBVTs7Ozs7O3NDQUVaLDhEQUFDRzs0QkFBT0MsU0FBUyxDQUFDekMsSUFBTUQsWUFBWUM7NEJBQUlxQyxXQUFVO3NDQUNoRCw0RUFBQ3JELG9GQUFRQTs7Ozs7Ozs7OztzQ0FFWCw4REFBQ3dEOzRCQUFPSCxXQUFVO3NDQUNoQiw0RUFBQ3BELHFIQUF3QkE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQU1yQztHQXJITU07S0FBQUE7QUF1SE4sK0RBQWVBLFVBQVVBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvUHJvbXB0QXJlYS50c3g/ZjVmNCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgR3JBdHRhY2htZW50IH0gZnJvbSBcInJlYWN0LWljb25zL2dyXCI7XG5pbXBvcnQgeyBJb01kU2VuZCB9IGZyb20gXCJyZWFjdC1pY29ucy9pb1wiO1xuaW1wb3J0IHsgSW9DaGVja21hcmtDaXJjbGVPdXRsaW5lIH0gZnJvbSBcInJlYWN0LWljb25zL2lvNVwiO1xuaW1wb3J0IEF0dGFjaE1lbnUgZnJvbSBcIi4vQXR0YWNoTWVudVwiO1xuaW1wb3J0IEF0dGFjaG1lbnRQcmV2aWV3IGZyb20gXCIuL0F0dGFjaG1lbnRQcmV2aWV3XCI7XG5jb25zdCBheGlvcyA9IHJlcXVpcmUoXCJheGlvc1wiKTtcbmNvbnN0IEZvcm1EYXRhID0gcmVxdWlyZShcImZvcm0tZGF0YVwiKTtcbi8vIGNvbnN0IGZzID0gcmVxdWlyZShcImZzXCIpO1xuXG5pbnRlcmZhY2UgUHJvbXB0QXJlYVByb3BzIHtcbiAgaXNTaWRlYmFyT3BlbjogYm9vbGVhbjtcbn1cblxuY29uc3QgUHJvbXB0QXJlYTogUmVhY3QuRkM8UHJvbXB0QXJlYVByb3BzPiA9ICh7IGlzU2lkZWJhck9wZW4gfSkgPT4ge1xuICBjb25zdCBbaXNBdHRhY2hNZW51T3Blbiwgc2V0SXNBdHRhY2hNZW51T3Blbl0gPSB1c2VTdGF0ZShmYWxzZSk7XG4gIGNvbnN0IFtzZWxlY3RlZEZpbGVzLCBzZXRTZWxlY3RlZEZpbGVzXSA9IHVzZVN0YXRlPEZpbGVbXT4oW10pO1xuICBjb25zdCBbcmVzcG9uc2VEYXRhLCBzZXRSZXNwb25zZURhdGFdID0gdXNlU3RhdGUoXCJcIik7XG4gIGNvbnN0IGhhbmRsZUZpbGVzID0gYXN5bmMgKGU6IGFueSkgPT4ge1xuICAgIGxldCBkYXRhID0gbmV3IEZvcm1EYXRhKCk7XG4gICAgZGF0YS5hcHBlbmQoXCJzZXNzaW9uX2lkXCIsIFwidTFcIik7XG4gICAgZGF0YS5hcHBlbmQoXG4gICAgICBcImltYWdlX3VybFwiLFxuICAgICAgc2VsZWN0ZWRGaWxlc1swXVxuICAgICAgLy8gZnMuY3JlYXRlUmVhZFN0cmVhbShcIi9Vc2Vycy9hYmdvZW5rYS9Eb3dubG9hZHMvTXkgcGhvdG8uanBlZ1wiKVxuICAgICk7XG5cbiAgICBsZXQgY29uZmlnID0ge1xuICAgICAgbWV0aG9kOiBcInBvc3RcIixcbiAgICAgIG1heEJvZHlMZW5ndGg6IEluZmluaXR5LFxuICAgICAgdXJsOiBcImh0dHA6Ly8xMjcuMC4wLjE6ODAwMC9hcHAvaW1hZ2UtZGVzY1wiLFxuXG4gICAgICBkYXRhOiBkYXRhLFxuICAgIH07XG5cbiAgICBhd2FpdCBheGlvc1xuICAgICAgLnJlcXVlc3QoY29uZmlnKVxuICAgICAgLnRoZW4oKHJlc3BvbnNlKSA9PiB7XG4gICAgICAgIGNvbnNvbGUubG9nKEpTT04uc3RyaW5naWZ5KFwiZGF0YSBpc1wiLCByZXNwb25zZS5kYXRhKSk7XG4gICAgICAgIHNldFJlc3BvbnNlRGF0YShyZXNwb25zZS5kYXRhLmRhdGEpO1xuXG5cbiAgICAgIH0pXG4gICAgICAuY2F0Y2goKGVycm9yKSA9PiB7XG4gICAgICAgIGNvbnNvbGUubG9nKFwiZXJyb3IgaXNcIiwgZXJyb3IpO1xuICAgICAgfSk7XG4gIH07XG4gIGNvbnN0IGhhbmRsZUZpbGVTZWxlY3QgPSAoZmlsZTogRmlsZSkgPT4ge1xuICAgIHNldFNlbGVjdGVkRmlsZXMoKHByZXZGaWxlcykgPT4gWy4uLnByZXZGaWxlcywgZmlsZV0pO1xuICAgIGNsb3NlQXR0YWNoTWVudSgpO1xuICB9O1xuXG4gIGNvbnN0IGhhbmRsZVZvaWNlU2VsZWN0ID0gKGZpbGU6IEZpbGUpID0+IHtcbiAgICBzZXRTZWxlY3RlZEZpbGVzKChwcmV2RmlsZXMpID0+IFsuLi5wcmV2RmlsZXMsIGZpbGVdKTtcbiAgICBjbG9zZUF0dGFjaE1lbnUoKTtcbiAgfTtcblxuICBjb25zdCBoYW5kbGVWaWRlb1NlbGVjdCA9IChmaWxlOiBGaWxlKSA9PiB7XG4gICAgc2V0U2VsZWN0ZWRGaWxlcygocHJldkZpbGVzKSA9PiBbLi4ucHJldkZpbGVzLCBmaWxlXSk7XG4gICAgY2xvc2VBdHRhY2hNZW51KCk7XG4gIH07XG5cbiAgY29uc3QgaGFuZGxlUmVtb3ZlRmlsZSA9IChpbmRleDogbnVtYmVyKSA9PiB7XG4gICAgc2V0U2VsZWN0ZWRGaWxlcygocHJldkZpbGVzKSA9PiBwcmV2RmlsZXMuZmlsdGVyKChfLCBpKSA9PiBpICE9PSBpbmRleCkpO1xuICB9O1xuXG4gIGNvbnN0IHRvZ2dsZUF0dGFjaE1lbnUgPSAoKSA9PiB7XG4gICAgc2V0SXNBdHRhY2hNZW51T3BlbighaXNBdHRhY2hNZW51T3Blbik7XG4gIH07XG5cbiAgY29uc3QgY2xvc2VBdHRhY2hNZW51ID0gKCkgPT4ge1xuICAgIHNldElzQXR0YWNoTWVudU9wZW4oZmFsc2UpO1xuICB9O1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgY29uc3QgaGFuZGxlQ2xpY2tPdXRzaWRlID0gKGV2ZW50OiBNb3VzZUV2ZW50KSA9PiB7XG4gICAgICBjb25zdCB0YXJnZXQgPSBldmVudC50YXJnZXQgYXMgSFRNTEVsZW1lbnQ7XG4gICAgICBpZiAodGFyZ2V0LmNsb3Nlc3QoXCIucHJvbXB0LWFyZWFcIikgPT09IG51bGwpIHtcbiAgICAgICAgY2xvc2VBdHRhY2hNZW51KCk7XG4gICAgICB9XG4gICAgfTtcblxuICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBoYW5kbGVDbGlja091dHNpZGUpO1xuICAgIHJldHVybiAoKSA9PiB7XG4gICAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgaGFuZGxlQ2xpY2tPdXRzaWRlKTtcbiAgICB9O1xuICB9LCBbXSk7XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2XG4gICAgICBjbGFzc05hbWU9e2BmaXhlZCBib3R0b20tNCB3LXNjcmVlbiBmbGV4IGp1c3RpZnktY2VudGVyIHRyYW5zaXRpb24tYWxsIGR1cmF0aW9uLTMwMCAke1xuICAgICAgICBpc1NpZGViYXJPcGVuID8gXCJtbC0wXCIgOiBcIm1sLTBcIlxuICAgICAgfWB9XG4gICAgPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtY29sIGl0ZW1zLWNlbnRlciBiZy1ncmF5LTgwMCByb3VuZGVkLWxnIHB4LTQgcHktMiBzaGFkb3ctbGcgcmVsYXRpdmUgdy1mdWxsIG1heC13LTR4bCBwcm9tcHQtYXJlYVwiPlxuICAgICAgICBcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtY29sIHctZnVsbFwiPlxuICAgICAgICAgIHtzZWxlY3RlZEZpbGVzLm1hcCgoZmlsZSwgaW5kZXgpID0+IChcbiAgICAgICAgICAgIDxBdHRhY2htZW50UHJldmlld1xuICAgICAgICAgICAgICBrZXk9e2luZGV4fVxuICAgICAgICAgICAgICBmaWxlPXtmaWxlfVxuICAgICAgICAgICAgICBvblJlbW92ZT17KCkgPT4gaGFuZGxlUmVtb3ZlRmlsZShpbmRleCl9XG4gICAgICAgICAgICAvPlxuICAgICAgICAgICkpfVxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLWNlbnRlciB3LWZ1bGxcIj5cbiAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cIm1yLTRcIiBvbkNsaWNrPXt0b2dnbGVBdHRhY2hNZW51fT5cbiAgICAgICAgICAgIDxHckF0dGFjaG1lbnQgLz5cbiAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICB7aXNBdHRhY2hNZW51T3BlbiAmJiAoXG4gICAgICAgICAgICA8QXR0YWNoTWVudVxuICAgICAgICAgICAgICBvbkZpbGVTZWxlY3Q9e2hhbmRsZUZpbGVTZWxlY3R9XG4gICAgICAgICAgICAgIG9uVm9pY2VTZWxlY3Q9e2hhbmRsZVZvaWNlU2VsZWN0fVxuICAgICAgICAgICAgICBvblZpZGVvU2VsZWN0PXtoYW5kbGVWaWRlb1NlbGVjdH1cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgKX1cbiAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiSG93IGNhbiBBYmlsaXR5U3luYyBoZWxwIHlvdSB0b2RheT9cIlxuICAgICAgICAgICAgY2xhc3NOYW1lPVwiYmctZ3JheS04MDAgdGV4dC13aGl0ZSBwbGFjZWhvbGRlci1ncmF5LTUwMCBmb2N1czpvdXRsaW5lLW5vbmUgZmxleC1ncm93IHB4LTJcIlxuICAgICAgICAgIC8+XG4gICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXsoZSkgPT4gaGFuZGxlRmlsZXMoZSl9IGNsYXNzTmFtZT1cIm1sLTRcIj5cbiAgICAgICAgICAgIDxJb01kU2VuZCAvPlxuICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwibWwtMlwiPlxuICAgICAgICAgICAgPElvQ2hlY2ttYXJrQ2lyY2xlT3V0bGluZSAvPlxuICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgUHJvbXB0QXJlYTtcbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZVN0YXRlIiwidXNlRWZmZWN0IiwiR3JBdHRhY2htZW50IiwiSW9NZFNlbmQiLCJJb0NoZWNrbWFya0NpcmNsZU91dGxpbmUiLCJBdHRhY2hNZW51IiwiQXR0YWNobWVudFByZXZpZXciLCJheGlvcyIsInJlcXVpcmUiLCJGb3JtRGF0YSIsIlByb21wdEFyZWEiLCJpc1NpZGViYXJPcGVuIiwiaXNBdHRhY2hNZW51T3BlbiIsInNldElzQXR0YWNoTWVudU9wZW4iLCJzZWxlY3RlZEZpbGVzIiwic2V0U2VsZWN0ZWRGaWxlcyIsInJlc3BvbnNlRGF0YSIsInNldFJlc3BvbnNlRGF0YSIsImhhbmRsZUZpbGVzIiwiZSIsImRhdGEiLCJhcHBlbmQiLCJjb25maWciLCJtZXRob2QiLCJtYXhCb2R5TGVuZ3RoIiwiSW5maW5pdHkiLCJ1cmwiLCJyZXF1ZXN0IiwidGhlbiIsInJlc3BvbnNlIiwiY29uc29sZSIsImxvZyIsIkpTT04iLCJzdHJpbmdpZnkiLCJjYXRjaCIsImVycm9yIiwiaGFuZGxlRmlsZVNlbGVjdCIsImZpbGUiLCJwcmV2RmlsZXMiLCJjbG9zZUF0dGFjaE1lbnUiLCJoYW5kbGVWb2ljZVNlbGVjdCIsImhhbmRsZVZpZGVvU2VsZWN0IiwiaGFuZGxlUmVtb3ZlRmlsZSIsImluZGV4IiwiZmlsdGVyIiwiXyIsImkiLCJ0b2dnbGVBdHRhY2hNZW51IiwiaGFuZGxlQ2xpY2tPdXRzaWRlIiwiZXZlbnQiLCJ0YXJnZXQiLCJjbG9zZXN0IiwiZG9jdW1lbnQiLCJhZGRFdmVudExpc3RlbmVyIiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsImRpdiIsImNsYXNzTmFtZSIsIm1hcCIsIm9uUmVtb3ZlIiwiYnV0dG9uIiwib25DbGljayIsIm9uRmlsZVNlbGVjdCIsIm9uVm9pY2VTZWxlY3QiLCJvblZpZGVvU2VsZWN0IiwiaW5wdXQiLCJ0eXBlIiwicGxhY2Vob2xkZXIiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/components/PromptArea.tsx\n"));

/***/ })

});