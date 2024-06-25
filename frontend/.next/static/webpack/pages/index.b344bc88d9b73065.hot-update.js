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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _barrel_optimize_names_GrAttachment_react_icons_gr__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! __barrel_optimize__?names=GrAttachment!=!react-icons/gr */ \"__barrel_optimize__?names=GrAttachment!=!./node_modules/react-icons/gr/index.mjs\");\n/* harmony import */ var _barrel_optimize_names_IoMdSend_react_icons_io__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! __barrel_optimize__?names=IoMdSend!=!react-icons/io */ \"__barrel_optimize__?names=IoMdSend!=!./node_modules/react-icons/io/index.mjs\");\n/* harmony import */ var _barrel_optimize_names_IoCheckmarkCircleOutline_react_icons_io5__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! __barrel_optimize__?names=IoCheckmarkCircleOutline!=!react-icons/io5 */ \"__barrel_optimize__?names=IoCheckmarkCircleOutline!=!./node_modules/react-icons/io5/index.mjs\");\n/* harmony import */ var _AttachMenu__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./AttachMenu */ \"./src/components/AttachMenu.tsx\");\n/* harmony import */ var _AttachmentPreview__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./AttachmentPreview */ \"./src/components/AttachmentPreview.tsx\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\nconst PromptArea = (param)=>{\n    let { isSidebarOpen } = param;\n    _s();\n    const [isAttachMenuOpen, setIsAttachMenuOpen] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const [selectedFiles, setSelectedFiles] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    const handleFiles = (e)=>{\n        let data = new FormData();\n        data.append(\"session_id\", \"u1\");\n        data.append(\"image_url\", fs.createReadStream(\"/Users/abgoenka/Downloads/My photo.jpeg\"));\n        let config = {\n            method: \"post\",\n            maxBodyLength: Infinity,\n            url: \"http://127.0.0.1:8000/app/image-desc\",\n            headers: {\n                ...data.getHeaders()\n            },\n            data: data\n        };\n        axios.request(config).then((response)=>{\n            console.log(JSON.stringify(response.data));\n        }).catch((error)=>{\n            console.log(error);\n        });\n    };\n    const handleFileSelect = (file)=>{\n        setSelectedFiles((prevFiles)=>[\n                ...prevFiles,\n                file\n            ]);\n        closeAttachMenu();\n    };\n    const handleVoiceSelect = (file)=>{\n        setSelectedFiles((prevFiles)=>[\n                ...prevFiles,\n                file\n            ]);\n        closeAttachMenu();\n    };\n    const handleVideoSelect = (file)=>{\n        setSelectedFiles((prevFiles)=>[\n                ...prevFiles,\n                file\n            ]);\n        closeAttachMenu();\n    };\n    const handleRemoveFile = (index)=>{\n        setSelectedFiles((prevFiles)=>prevFiles.filter((_, i)=>i !== index));\n    };\n    const toggleAttachMenu = ()=>{\n        setIsAttachMenuOpen(!isAttachMenuOpen);\n    };\n    const closeAttachMenu = ()=>{\n        setIsAttachMenuOpen(false);\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        const handleClickOutside = (event)=>{\n            const target = event.target;\n            if (target.closest(\".prompt-area\") === null) {\n                closeAttachMenu();\n            }\n        };\n        document.addEventListener(\"click\", handleClickOutside);\n        return ()=>{\n            document.removeEventListener(\"click\", handleClickOutside);\n        };\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"fixed bottom-4 w-screen flex justify-center transition-all duration-300 \".concat(isSidebarOpen ? \"ml-0\" : \"ml-0\"),\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"flex flex-col items-center bg-gray-800 rounded-lg px-4 py-2 shadow-lg relative w-full max-w-4xl prompt-area\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"flex flex-col w-full\",\n                    children: selectedFiles.map((file, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_AttachmentPreview__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                            file: file,\n                            onRemove: ()=>handleRemoveFile(index)\n                        }, index, false, {\n                            fileName: \"/Users/abgoenka/Documents/InternHackathon/frontend/src/components/PromptArea.tsx\",\n                            lineNumber: 90,\n                            columnNumber: 13\n                        }, undefined))\n                }, void 0, false, {\n                    fileName: \"/Users/abgoenka/Documents/InternHackathon/frontend/src/components/PromptArea.tsx\",\n                    lineNumber: 88,\n                    columnNumber: 9\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"flex items-center w-full\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                            className: \"mr-4\",\n                            onClick: toggleAttachMenu,\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_GrAttachment_react_icons_gr__WEBPACK_IMPORTED_MODULE_4__.GrAttachment, {}, void 0, false, {\n                                fileName: \"/Users/abgoenka/Documents/InternHackathon/frontend/src/components/PromptArea.tsx\",\n                                lineNumber: 99,\n                                columnNumber: 13\n                            }, undefined)\n                        }, void 0, false, {\n                            fileName: \"/Users/abgoenka/Documents/InternHackathon/frontend/src/components/PromptArea.tsx\",\n                            lineNumber: 98,\n                            columnNumber: 11\n                        }, undefined),\n                        isAttachMenuOpen && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_AttachMenu__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                            onFileSelect: handleFileSelect,\n                            onVoiceSelect: handleVoiceSelect,\n                            onVideoSelect: handleVideoSelect\n                        }, void 0, false, {\n                            fileName: \"/Users/abgoenka/Documents/InternHackathon/frontend/src/components/PromptArea.tsx\",\n                            lineNumber: 102,\n                            columnNumber: 13\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                            type: \"text\",\n                            placeholder: \"How can AbilitySync help you today?\",\n                            className: \"bg-gray-800 text-white placeholder-gray-500 focus:outline-none flex-grow px-2\"\n                        }, void 0, false, {\n                            fileName: \"/Users/abgoenka/Documents/InternHackathon/frontend/src/components/PromptArea.tsx\",\n                            lineNumber: 108,\n                            columnNumber: 11\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                            onClick: (e)=>handleFiles(),\n                            className: \"ml-4\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_IoMdSend_react_icons_io__WEBPACK_IMPORTED_MODULE_5__.IoMdSend, {}, void 0, false, {\n                                fileName: \"/Users/abgoenka/Documents/InternHackathon/frontend/src/components/PromptArea.tsx\",\n                                lineNumber: 114,\n                                columnNumber: 13\n                            }, undefined)\n                        }, void 0, false, {\n                            fileName: \"/Users/abgoenka/Documents/InternHackathon/frontend/src/components/PromptArea.tsx\",\n                            lineNumber: 113,\n                            columnNumber: 11\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                            className: \"ml-2\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_IoCheckmarkCircleOutline_react_icons_io5__WEBPACK_IMPORTED_MODULE_6__.IoCheckmarkCircleOutline, {}, void 0, false, {\n                                fileName: \"/Users/abgoenka/Documents/InternHackathon/frontend/src/components/PromptArea.tsx\",\n                                lineNumber: 117,\n                                columnNumber: 13\n                            }, undefined)\n                        }, void 0, false, {\n                            fileName: \"/Users/abgoenka/Documents/InternHackathon/frontend/src/components/PromptArea.tsx\",\n                            lineNumber: 116,\n                            columnNumber: 11\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/abgoenka/Documents/InternHackathon/frontend/src/components/PromptArea.tsx\",\n                    lineNumber: 97,\n                    columnNumber: 9\n                }, undefined)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/abgoenka/Documents/InternHackathon/frontend/src/components/PromptArea.tsx\",\n            lineNumber: 87,\n            columnNumber: 7\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"/Users/abgoenka/Documents/InternHackathon/frontend/src/components/PromptArea.tsx\",\n        lineNumber: 82,\n        columnNumber: 5\n    }, undefined);\n};\n_s(PromptArea, \"KroBqV4Ffse0CDIyQKhJEwy8KQk=\");\n_c = PromptArea;\n/* harmony default export */ __webpack_exports__[\"default\"] = (PromptArea);\nvar _c;\n$RefreshReg$(_c, \"PromptArea\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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VTtzQ0FDL0MsNEVBQUN0RCxvRkFBUUE7Ozs7Ozs7Ozs7c0NBRVgsOERBQUN5RDs0QkFBT0gsV0FBVTtzQ0FDaEIsNEVBQUNyRCxxSEFBd0JBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFNckM7R0EvR01HO0tBQUFBO0FBaUhOLCtEQUFlQSxVQUFVQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9jb21wb25lbnRzL1Byb21wdEFyZWEudHN4P2Y1ZjQiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IEdyQXR0YWNobWVudCB9IGZyb20gXCJyZWFjdC1pY29ucy9nclwiO1xuaW1wb3J0IHsgSW9NZFNlbmQgfSBmcm9tIFwicmVhY3QtaWNvbnMvaW9cIjtcbmltcG9ydCB7IElvQ2hlY2ttYXJrQ2lyY2xlT3V0bGluZSB9IGZyb20gXCJyZWFjdC1pY29ucy9pbzVcIjtcbmltcG9ydCBBdHRhY2hNZW51IGZyb20gXCIuL0F0dGFjaE1lbnVcIjtcbmltcG9ydCBBdHRhY2htZW50UHJldmlldyBmcm9tIFwiLi9BdHRhY2htZW50UHJldmlld1wiO1xuXG5pbnRlcmZhY2UgUHJvbXB0QXJlYVByb3BzIHtcbiAgaXNTaWRlYmFyT3BlbjogYm9vbGVhbjtcbn1cblxuY29uc3QgUHJvbXB0QXJlYTogUmVhY3QuRkM8UHJvbXB0QXJlYVByb3BzPiA9ICh7IGlzU2lkZWJhck9wZW4gfSkgPT4ge1xuICBjb25zdCBbaXNBdHRhY2hNZW51T3Blbiwgc2V0SXNBdHRhY2hNZW51T3Blbl0gPSB1c2VTdGF0ZShmYWxzZSk7XG4gIGNvbnN0IFtzZWxlY3RlZEZpbGVzLCBzZXRTZWxlY3RlZEZpbGVzXSA9IHVzZVN0YXRlPEZpbGVbXT4oW10pO1xuXG4gIGNvbnN0IGhhbmRsZUZpbGVzID0gKGUgOiBhbnkpID0+XG4gICAge1xuICAgICAgbGV0IGRhdGEgPSBuZXcgRm9ybURhdGEoKTtcbiAgICAgIGRhdGEuYXBwZW5kKCdzZXNzaW9uX2lkJywgJ3UxJyk7XG4gICAgICBkYXRhLmFwcGVuZCgnaW1hZ2VfdXJsJywgZnMuY3JlYXRlUmVhZFN0cmVhbSgnL1VzZXJzL2FiZ29lbmthL0Rvd25sb2Fkcy9NeSBwaG90by5qcGVnJykpO1xuXG4gICAgICBsZXQgY29uZmlnID0ge1xuICAgICAgICBtZXRob2Q6ICdwb3N0JyxcbiAgICAgICAgbWF4Qm9keUxlbmd0aDogSW5maW5pdHksXG4gICAgICAgIHVybDogJ2h0dHA6Ly8xMjcuMC4wLjE6ODAwMC9hcHAvaW1hZ2UtZGVzYycsXG4gICAgICAgIGhlYWRlcnM6IHsgXG4gICAgICAgICAgLi4uZGF0YS5nZXRIZWFkZXJzKClcbiAgICAgICAgfSxcbiAgICAgICAgZGF0YSA6IGRhdGFcbiAgICAgIH07XG5cbiAgICAgIGF4aW9zLnJlcXVlc3QoY29uZmlnKVxuICAgICAgLnRoZW4oKHJlc3BvbnNlKSA9PiB7XG4gICAgICAgIGNvbnNvbGUubG9nKEpTT04uc3RyaW5naWZ5KHJlc3BvbnNlLmRhdGEpKTtcbiAgICAgIH0pXG4gICAgICAuY2F0Y2goKGVycm9yKSA9PiB7XG4gICAgICAgIGNvbnNvbGUubG9nKGVycm9yKTtcbiAgICAgIH0pO1xuICAgIH1cbiAgY29uc3QgaGFuZGxlRmlsZVNlbGVjdCA9IChmaWxlOiBGaWxlKSA9PiB7XG4gICAgc2V0U2VsZWN0ZWRGaWxlcygocHJldkZpbGVzKSA9PiBbLi4ucHJldkZpbGVzLCBmaWxlXSk7XG4gICAgY2xvc2VBdHRhY2hNZW51KCk7XG4gIH07XG5cbiAgY29uc3QgaGFuZGxlVm9pY2VTZWxlY3QgPSAoZmlsZTogRmlsZSkgPT4ge1xuICAgIHNldFNlbGVjdGVkRmlsZXMoKHByZXZGaWxlcykgPT4gWy4uLnByZXZGaWxlcywgZmlsZV0pO1xuICAgIGNsb3NlQXR0YWNoTWVudSgpO1xuICB9O1xuXG4gIGNvbnN0IGhhbmRsZVZpZGVvU2VsZWN0ID0gKGZpbGU6IEZpbGUpID0+IHtcbiAgICBzZXRTZWxlY3RlZEZpbGVzKChwcmV2RmlsZXMpID0+IFsuLi5wcmV2RmlsZXMsIGZpbGVdKTtcbiAgICBjbG9zZUF0dGFjaE1lbnUoKTtcbiAgfTtcblxuICBjb25zdCBoYW5kbGVSZW1vdmVGaWxlID0gKGluZGV4OiBudW1iZXIpID0+IHtcbiAgICBzZXRTZWxlY3RlZEZpbGVzKChwcmV2RmlsZXMpID0+IHByZXZGaWxlcy5maWx0ZXIoKF8sIGkpID0+IGkgIT09IGluZGV4KSk7XG4gIH07XG5cbiAgY29uc3QgdG9nZ2xlQXR0YWNoTWVudSA9ICgpID0+IHtcbiAgICBzZXRJc0F0dGFjaE1lbnVPcGVuKCFpc0F0dGFjaE1lbnVPcGVuKTtcbiAgfTtcblxuICBjb25zdCBjbG9zZUF0dGFjaE1lbnUgPSAoKSA9PiB7XG4gICAgc2V0SXNBdHRhY2hNZW51T3BlbihmYWxzZSk7XG4gIH07XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBjb25zdCBoYW5kbGVDbGlja091dHNpZGUgPSAoZXZlbnQ6IE1vdXNlRXZlbnQpID0+IHtcbiAgICAgIGNvbnN0IHRhcmdldCA9IGV2ZW50LnRhcmdldCBhcyBIVE1MRWxlbWVudDtcbiAgICAgIGlmICh0YXJnZXQuY2xvc2VzdChcIi5wcm9tcHQtYXJlYVwiKSA9PT0gbnVsbCkge1xuICAgICAgICBjbG9zZUF0dGFjaE1lbnUoKTtcbiAgICAgIH1cbiAgICB9O1xuXG4gICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGhhbmRsZUNsaWNrT3V0c2lkZSk7XG4gICAgcmV0dXJuICgpID0+IHtcbiAgICAgIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBoYW5kbGVDbGlja091dHNpZGUpO1xuICAgIH07XG4gIH0sIFtdKTtcblxuICByZXR1cm4gKFxuICAgIDxkaXZcbiAgICAgIGNsYXNzTmFtZT17YGZpeGVkIGJvdHRvbS00IHctc2NyZWVuIGZsZXgganVzdGlmeS1jZW50ZXIgdHJhbnNpdGlvbi1hbGwgZHVyYXRpb24tMzAwICR7XG4gICAgICAgIGlzU2lkZWJhck9wZW4gPyBcIm1sLTBcIiA6IFwibWwtMFwiXG4gICAgICB9YH1cbiAgICA+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC1jb2wgaXRlbXMtY2VudGVyIGJnLWdyYXktODAwIHJvdW5kZWQtbGcgcHgtNCBweS0yIHNoYWRvdy1sZyByZWxhdGl2ZSB3LWZ1bGwgbWF4LXctNHhsIHByb21wdC1hcmVhXCI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LWNvbCB3LWZ1bGxcIj5cbiAgICAgICAgICB7c2VsZWN0ZWRGaWxlcy5tYXAoKGZpbGUsIGluZGV4KSA9PiAoXG4gICAgICAgICAgICA8QXR0YWNobWVudFByZXZpZXdcbiAgICAgICAgICAgICAga2V5PXtpbmRleH1cbiAgICAgICAgICAgICAgZmlsZT17ZmlsZX1cbiAgICAgICAgICAgICAgb25SZW1vdmU9eygpID0+IGhhbmRsZVJlbW92ZUZpbGUoaW5kZXgpfVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICApKX1cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1jZW50ZXIgdy1mdWxsXCI+XG4gICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJtci00XCIgb25DbGljaz17dG9nZ2xlQXR0YWNoTWVudX0+XG4gICAgICAgICAgICA8R3JBdHRhY2htZW50IC8+XG4gICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAge2lzQXR0YWNoTWVudU9wZW4gJiYgKFxuICAgICAgICAgICAgPEF0dGFjaE1lbnVcbiAgICAgICAgICAgICAgb25GaWxlU2VsZWN0PXtoYW5kbGVGaWxlU2VsZWN0fVxuICAgICAgICAgICAgICBvblZvaWNlU2VsZWN0PXtoYW5kbGVWb2ljZVNlbGVjdH1cbiAgICAgICAgICAgICAgb25WaWRlb1NlbGVjdD17aGFuZGxlVmlkZW9TZWxlY3R9XG4gICAgICAgICAgICAvPlxuICAgICAgICAgICl9XG4gICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICB0eXBlPVwidGV4dFwiXG4gICAgICAgICAgICBwbGFjZWhvbGRlcj1cIkhvdyBjYW4gQWJpbGl0eVN5bmMgaGVscCB5b3UgdG9kYXk/XCJcbiAgICAgICAgICAgIGNsYXNzTmFtZT1cImJnLWdyYXktODAwIHRleHQtd2hpdGUgcGxhY2Vob2xkZXItZ3JheS01MDAgZm9jdXM6b3V0bGluZS1ub25lIGZsZXgtZ3JvdyBweC0yXCJcbiAgICAgICAgICAvPlxuICAgICAgICAgIDxidXR0b24gb25DbGljaz17KGUpID0+IGhhbmRsZUZpbGVzKCl9IGNsYXNzTmFtZT1cIm1sLTRcIj5cbiAgICAgICAgICAgIDxJb01kU2VuZCAvPlxuICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwibWwtMlwiPlxuICAgICAgICAgICAgPElvQ2hlY2ttYXJrQ2lyY2xlT3V0bGluZSAvPlxuICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgUHJvbXB0QXJlYTtcbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZVN0YXRlIiwidXNlRWZmZWN0IiwiR3JBdHRhY2htZW50IiwiSW9NZFNlbmQiLCJJb0NoZWNrbWFya0NpcmNsZU91dGxpbmUiLCJBdHRhY2hNZW51IiwiQXR0YWNobWVudFByZXZpZXciLCJQcm9tcHRBcmVhIiwiaXNTaWRlYmFyT3BlbiIsImlzQXR0YWNoTWVudU9wZW4iLCJzZXRJc0F0dGFjaE1lbnVPcGVuIiwic2VsZWN0ZWRGaWxlcyIsInNldFNlbGVjdGVkRmlsZXMiLCJoYW5kbGVGaWxlcyIsImUiLCJkYXRhIiwiRm9ybURhdGEiLCJhcHBlbmQiLCJmcyIsImNyZWF0ZVJlYWRTdHJlYW0iLCJjb25maWciLCJtZXRob2QiLCJtYXhCb2R5TGVuZ3RoIiwiSW5maW5pdHkiLCJ1cmwiLCJoZWFkZXJzIiwiZ2V0SGVhZGVycyIsImF4aW9zIiwicmVxdWVzdCIsInRoZW4iLCJyZXNwb25zZSIsImNvbnNvbGUiLCJsb2ciLCJKU09OIiwic3RyaW5naWZ5IiwiY2F0Y2giLCJlcnJvciIsImhhbmRsZUZpbGVTZWxlY3QiLCJmaWxlIiwicHJldkZpbGVzIiwiY2xvc2VBdHRhY2hNZW51IiwiaGFuZGxlVm9pY2VTZWxlY3QiLCJoYW5kbGVWaWRlb1NlbGVjdCIsImhhbmRsZVJlbW92ZUZpbGUiLCJpbmRleCIsImZpbHRlciIsIl8iLCJpIiwidG9nZ2xlQXR0YWNoTWVudSIsImhhbmRsZUNsaWNrT3V0c2lkZSIsImV2ZW50IiwidGFyZ2V0IiwiY2xvc2VzdCIsImRvY3VtZW50IiwiYWRkRXZlbnRMaXN0ZW5lciIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJkaXYiLCJjbGFzc05hbWUiLCJtYXAiLCJvblJlbW92ZSIsImJ1dHRvbiIsIm9uQ2xpY2siLCJvbkZpbGVTZWxlY3QiLCJvblZvaWNlU2VsZWN0Iiwib25WaWRlb1NlbGVjdCIsImlucHV0IiwidHlwZSIsInBsYWNlaG9sZGVyIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/components/PromptArea.tsx\n"));

/***/ })

});