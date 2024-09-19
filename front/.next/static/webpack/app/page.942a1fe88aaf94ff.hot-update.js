"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/page",{

/***/ "(app-pages-browser)/./app/components/new-entry.js":
/*!*************************************!*\
  !*** ./app/components/new-entry.js ***!
  \*************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ NewEntry; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _styles_new_entry_module_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../styles/new-entry.module.css */ \"(app-pages-browser)/./app/styles/new-entry.module.css\");\n/* harmony import */ var _styles_new_entry_module_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_styles_new_entry_module_css__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _fortawesome_fontawesome_free_css_all_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @fortawesome/fontawesome-free/css/all.css */ \"(app-pages-browser)/./node_modules/@fortawesome/fontawesome-free/css/all.css\");\n/* harmony import */ var _api_queries__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../api-queries */ \"(app-pages-browser)/./app/api-queries.js\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\nfunction NewEntry() {\n    _s();\n    const [showForm, setShowForm] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const handleClick = ()=>{\n        setShowForm(true);\n    };\n    function NewEntryForm() {\n        const handleSubmit = async (e)=>{\n            e.preventDefault();\n            const form = e.target;\n            await (0,_api_queries__WEBPACK_IMPORTED_MODULE_4__.postEntry)(form.elements.name.value, form.elements.author.value, form.elements.type.value);\n            window.location.reload();\n        };\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: (_styles_new_entry_module_css__WEBPACK_IMPORTED_MODULE_2___default().form),\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                    children: \"Add New Entry\"\n                }, void 0, false, {\n                    fileName: \"/Users/camilo/Desktop/fsab_bootcamp/final/front/app/components/new-entry.js\",\n                    lineNumber: 27,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n                    onSubmit: handleSubmit,\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                            className: (_styles_new_entry_module_css__WEBPACK_IMPORTED_MODULE_2___default().input),\n                            autocomplete: \"off\",\n                            type: \"text\",\n                            name: \"name\",\n                            placeholder: \"Name\"\n                        }, void 0, false, {\n                            fileName: \"/Users/camilo/Desktop/fsab_bootcamp/final/front/app/components/new-entry.js\",\n                            lineNumber: 29,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                            fileName: \"/Users/camilo/Desktop/fsab_bootcamp/final/front/app/components/new-entry.js\",\n                            lineNumber: 36,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                            className: (_styles_new_entry_module_css__WEBPACK_IMPORTED_MODULE_2___default().input),\n                            autocomplete: \"off\",\n                            type: \"text\",\n                            name: \"author\",\n                            placeholder: \"Author\"\n                        }, void 0, false, {\n                            fileName: \"/Users/camilo/Desktop/fsab_bootcamp/final/front/app/components/new-entry.js\",\n                            lineNumber: 37,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                            fileName: \"/Users/camilo/Desktop/fsab_bootcamp/final/front/app/components/new-entry.js\",\n                            lineNumber: 44,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                            className: (_styles_new_entry_module_css__WEBPACK_IMPORTED_MODULE_2___default().input),\n                            autocomplete: \"off\",\n                            type: \"text\",\n                            name: \"type\",\n                            placeholder: \"Type\"\n                        }, void 0, false, {\n                            fileName: \"/Users/camilo/Desktop/fsab_bootcamp/final/front/app/components/new-entry.js\",\n                            lineNumber: 45,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                            fileName: \"/Users/camilo/Desktop/fsab_bootcamp/final/front/app/components/new-entry.js\",\n                            lineNumber: 52,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                id: (_styles_new_entry_module_css__WEBPACK_IMPORTED_MODULE_2___default().submit),\n                                type: \"submit\",\n                                children: \"Submit\"\n                            }, void 0, false, {\n                                fileName: \"/Users/camilo/Desktop/fsab_bootcamp/final/front/app/components/new-entry.js\",\n                                lineNumber: 54,\n                                columnNumber: 13\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"/Users/camilo/Desktop/fsab_bootcamp/final/front/app/components/new-entry.js\",\n                            lineNumber: 53,\n                            columnNumber: 11\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/camilo/Desktop/fsab_bootcamp/final/front/app/components/new-entry.js\",\n                    lineNumber: 28,\n                    columnNumber: 9\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/camilo/Desktop/fsab_bootcamp/final/front/app/components/new-entry.js\",\n            lineNumber: 26,\n            columnNumber: 7\n        }, this);\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            !showForm && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                class: (_styles_new_entry_module_css__WEBPACK_IMPORTED_MODULE_2___default().interact),\n                onClick: handleClick,\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"i\", {\n                    id: (_styles_new_entry_module_css__WEBPACK_IMPORTED_MODULE_2___default().plus),\n                    className: \"fas fa-plus\"\n                }, void 0, false, {\n                    fileName: \"/Users/camilo/Desktop/fsab_bootcamp/final/front/app/components/new-entry.js\",\n                    lineNumber: 67,\n                    columnNumber: 11\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/camilo/Desktop/fsab_bootcamp/final/front/app/components/new-entry.js\",\n                lineNumber: 66,\n                columnNumber: 9\n            }, this),\n            showForm && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(NewEntryForm, {}, void 0, false, {\n                fileName: \"/Users/camilo/Desktop/fsab_bootcamp/final/front/app/components/new-entry.js\",\n                lineNumber: 70,\n                columnNumber: 20\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/camilo/Desktop/fsab_bootcamp/final/front/app/components/new-entry.js\",\n        lineNumber: 64,\n        columnNumber: 5\n    }, this);\n}\n_s(NewEntry, \"kaMG6XwWu8g4QBLwMinxod9pp4Q=\");\n_c = NewEntry;\nvar _c;\n$RefreshReg$(_c, \"NewEntry\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC9jb21wb25lbnRzL25ldy1lbnRyeS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBQ2lDO0FBQ21CO0FBQ0Q7QUFDUjtBQUU1QixTQUFTRzs7SUFDdEIsTUFBTSxDQUFDQyxVQUFVQyxZQUFZLEdBQUdMLCtDQUFRQSxDQUFDO0lBQ3pDLE1BQU1NLGNBQWM7UUFDbEJELFlBQVk7SUFDZDtJQUVBLFNBQVNFO1FBQ1AsTUFBTUMsZUFBZSxPQUFPQztZQUMxQkEsRUFBRUMsY0FBYztZQUNoQixNQUFNQyxPQUFPRixFQUFFRyxNQUFNO1lBQ3JCLE1BQU1WLHVEQUFTQSxDQUNiUyxLQUFLRSxRQUFRLENBQUNDLElBQUksQ0FBQ0MsS0FBSyxFQUN4QkosS0FBS0UsUUFBUSxDQUFDRyxNQUFNLENBQUNELEtBQUssRUFDMUJKLEtBQUtFLFFBQVEsQ0FBQ0ksSUFBSSxDQUFDRixLQUFLO1lBRTFCRyxPQUFPQyxRQUFRLENBQUNDLE1BQU07UUFDeEI7UUFFQSxxQkFDRSw4REFBQ0M7WUFBSUMsV0FBV3JCLDBFQUFXOzs4QkFDekIsOERBQUNzQjs4QkFBRzs7Ozs7OzhCQUNKLDhEQUFDWjtvQkFBS2EsVUFBVWhCOztzQ0FDZCw4REFBQ2lCOzRCQUNDSCxXQUFXckIsMkVBQVk7NEJBQ3ZCeUIsY0FBYTs0QkFDYlQsTUFBSzs0QkFDTEgsTUFBSzs0QkFDTGEsYUFBWTs7Ozs7O3NDQUVkLDhEQUFDQzs7Ozs7c0NBQ0QsOERBQUNIOzRCQUNDSCxXQUFXckIsMkVBQVk7NEJBQ3ZCeUIsY0FBYTs0QkFDYlQsTUFBSzs0QkFDTEgsTUFBSzs0QkFDTGEsYUFBWTs7Ozs7O3NDQUVkLDhEQUFDQzs7Ozs7c0NBQ0QsOERBQUNIOzRCQUNDSCxXQUFXckIsMkVBQVk7NEJBQ3ZCeUIsY0FBYTs0QkFDYlQsTUFBSzs0QkFDTEgsTUFBSzs0QkFDTGEsYUFBWTs7Ozs7O3NDQUVkLDhEQUFDQzs7Ozs7c0NBQ0QsOERBQUNQO3NDQUNDLDRFQUFDUTtnQ0FBT0MsSUFBSTdCLDRFQUFhO2dDQUFFZ0IsTUFBSzswQ0FBUzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7SUFPbkQ7SUFFQSxxQkFDRSw4REFBQ0k7O1lBQ0UsQ0FBQ2pCLDBCQUNBLDhEQUFDaUI7Z0JBQUlXLE9BQU8vQiw4RUFBZTtnQkFBRWlDLFNBQVM1QjswQkFDcEMsNEVBQUM2QjtvQkFBRUwsSUFBSTdCLDBFQUFXO29CQUFFcUIsV0FBVTs7Ozs7Ozs7Ozs7WUFHakNsQiwwQkFBWSw4REFBQ0c7Ozs7Ozs7Ozs7O0FBR3BCO0dBbEV3Qko7S0FBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vYXBwL2NvbXBvbmVudHMvbmV3LWVudHJ5LmpzP2FlOGIiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2UgY2xpZW50XCI7XG5pbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHN0eWxlcyBmcm9tIFwiLi4vc3R5bGVzL25ldy1lbnRyeS5tb2R1bGUuY3NzXCI7XG5pbXBvcnQgXCJAZm9ydGF3ZXNvbWUvZm9udGF3ZXNvbWUtZnJlZS9jc3MvYWxsLmNzc1wiO1xuaW1wb3J0IHsgcG9zdEVudHJ5IH0gZnJvbSBcIi4uL2FwaS1xdWVyaWVzXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIE5ld0VudHJ5KCkge1xuICBjb25zdCBbc2hvd0Zvcm0sIHNldFNob3dGb3JtXSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgY29uc3QgaGFuZGxlQ2xpY2sgPSAoKSA9PiB7XG4gICAgc2V0U2hvd0Zvcm0odHJ1ZSk7XG4gIH07XG5cbiAgZnVuY3Rpb24gTmV3RW50cnlGb3JtKCkge1xuICAgIGNvbnN0IGhhbmRsZVN1Ym1pdCA9IGFzeW5jIChlKSA9PiB7XG4gICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICBjb25zdCBmb3JtID0gZS50YXJnZXQ7XG4gICAgICBhd2FpdCBwb3N0RW50cnkoXG4gICAgICAgIGZvcm0uZWxlbWVudHMubmFtZS52YWx1ZSxcbiAgICAgICAgZm9ybS5lbGVtZW50cy5hdXRob3IudmFsdWUsXG4gICAgICAgIGZvcm0uZWxlbWVudHMudHlwZS52YWx1ZSxcbiAgICAgICk7XG4gICAgICB3aW5kb3cubG9jYXRpb24ucmVsb2FkKCk7XG4gICAgfTtcblxuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmZvcm19PlxuICAgICAgICA8aDI+QWRkIE5ldyBFbnRyeTwvaDI+XG4gICAgICAgIDxmb3JtIG9uU3VibWl0PXtoYW5kbGVTdWJtaXR9PlxuICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgY2xhc3NOYW1lPXtzdHlsZXMuaW5wdXR9XG4gICAgICAgICAgICBhdXRvY29tcGxldGU9XCJvZmZcIlxuICAgICAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICAgICAgbmFtZT1cIm5hbWVcIlxuICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJOYW1lXCJcbiAgICAgICAgICAvPlxuICAgICAgICAgIDxiciAvPlxuICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgY2xhc3NOYW1lPXtzdHlsZXMuaW5wdXR9XG4gICAgICAgICAgICBhdXRvY29tcGxldGU9XCJvZmZcIlxuICAgICAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICAgICAgbmFtZT1cImF1dGhvclwiXG4gICAgICAgICAgICBwbGFjZWhvbGRlcj1cIkF1dGhvclwiXG4gICAgICAgICAgLz5cbiAgICAgICAgICA8YnIgLz5cbiAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgIGNsYXNzTmFtZT17c3R5bGVzLmlucHV0fVxuICAgICAgICAgICAgYXV0b2NvbXBsZXRlPVwib2ZmXCJcbiAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgICAgIG5hbWU9XCJ0eXBlXCJcbiAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiVHlwZVwiXG4gICAgICAgICAgLz5cbiAgICAgICAgICA8YnIgLz5cbiAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgPGJ1dHRvbiBpZD17c3R5bGVzLnN1Ym1pdH0gdHlwZT1cInN1Ym1pdFwiPlxuICAgICAgICAgICAgICBTdWJtaXRcbiAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Zvcm0+XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2PlxuICAgICAgeyFzaG93Rm9ybSAmJiAoXG4gICAgICAgIDxkaXYgY2xhc3M9e3N0eWxlcy5pbnRlcmFjdH0gb25DbGljaz17aGFuZGxlQ2xpY2t9PlxuICAgICAgICAgIDxpIGlkPXtzdHlsZXMucGx1c30gY2xhc3NOYW1lPVwiZmFzIGZhLXBsdXNcIj48L2k+XG4gICAgICAgIDwvZGl2PlxuICAgICAgKX1cbiAgICAgIHtzaG93Rm9ybSAmJiA8TmV3RW50cnlGb3JtIC8+fVxuICAgIDwvZGl2PlxuICApO1xufVxuIl0sIm5hbWVzIjpbInVzZVN0YXRlIiwic3R5bGVzIiwicG9zdEVudHJ5IiwiTmV3RW50cnkiLCJzaG93Rm9ybSIsInNldFNob3dGb3JtIiwiaGFuZGxlQ2xpY2siLCJOZXdFbnRyeUZvcm0iLCJoYW5kbGVTdWJtaXQiLCJlIiwicHJldmVudERlZmF1bHQiLCJmb3JtIiwidGFyZ2V0IiwiZWxlbWVudHMiLCJuYW1lIiwidmFsdWUiLCJhdXRob3IiLCJ0eXBlIiwid2luZG93IiwibG9jYXRpb24iLCJyZWxvYWQiLCJkaXYiLCJjbGFzc05hbWUiLCJoMiIsIm9uU3VibWl0IiwiaW5wdXQiLCJhdXRvY29tcGxldGUiLCJwbGFjZWhvbGRlciIsImJyIiwiYnV0dG9uIiwiaWQiLCJzdWJtaXQiLCJjbGFzcyIsImludGVyYWN0Iiwib25DbGljayIsImkiLCJwbHVzIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/components/new-entry.js\n"));

/***/ })

});