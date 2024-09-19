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

/***/ "(app-pages-browser)/./app/api-queries.js":
/*!****************************!*\
  !*** ./app/api-queries.js ***!
  \****************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   deleteEntry: function() { return /* binding */ deleteEntry; },\n/* harmony export */   editEntry: function() { return /* binding */ editEntry; },\n/* harmony export */   getEntries: function() { return /* binding */ getEntries; },\n/* harmony export */   postEntry: function() { return /* binding */ postEntry; }\n/* harmony export */ });\nconst getEntries = async ()=>{\n    try {\n        const res = await fetch(\"http://localhost:8080/media\", {\n            method: \"GET\"\n        });\n        const data = await res.json();\n        return data;\n    } catch (e) {\n        console.error(\"Update operation failed:\", e);\n    }\n};\nconst postEntry = async (name, author, type)=>{\n    const data = {\n        name: name,\n        author: author,\n        type: type\n    };\n    const res = await fetch(\"http://localhost:8080/media\", {\n        method: \"POST\",\n        headers: {\n            \"Content-Type\": \"application/json\"\n        },\n        body: JSON.stringify(data)\n    });\n};\nconst deleteEntry = async (id)=>{\n    try {\n        const res = await fetch(\"http://localhost:8080/media/\".concat(id), {\n            method: \"DELETE\"\n        });\n    } catch (e) {\n        console.error(\"Delete operation failed:\", e);\n    }\n};\nconst editEntry = async (name, author, type, id)=>{\n    try {\n        const data = {\n            name: name,\n            author: author,\n            type: type\n        };\n        const res = await fetch(\"http://localhost:8080/media/\".concat(id), {\n            method: \"PUT\",\n            headers: {\n                \"Content-Type\": \"application/json\"\n            },\n            body: JSON.stringify(data)\n        });\n    } catch (e) {\n        console.error(\"Update operation failed:\", e);\n    }\n};\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC9hcGktcXVlcmllcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQU8sTUFBTUEsYUFBYTtJQUN4QixJQUFJO1FBQ0YsTUFBTUMsTUFBTSxNQUFNQyxNQUFNLCtCQUErQjtZQUFFQyxRQUFRO1FBQU07UUFDdkUsTUFBTUMsT0FBTyxNQUFNSCxJQUFJSSxJQUFJO1FBQzNCLE9BQU9EO0lBQ1QsRUFBRSxPQUFPRSxHQUFHO1FBQ1ZDLFFBQVFDLEtBQUssQ0FBQyw0QkFBNEJGO0lBQzVDO0FBQ0YsRUFBRTtBQUVLLE1BQU1HLFlBQVksT0FBT0MsTUFBTUMsUUFBUUM7SUFDNUMsTUFBTVIsT0FBTztRQUFFTSxNQUFNQTtRQUFNQyxRQUFRQTtRQUFRQyxNQUFNQTtJQUFLO0lBRXRELE1BQU1YLE1BQU0sTUFBTUMsTUFBTSwrQkFBK0I7UUFDckRDLFFBQVE7UUFDUlUsU0FBUztZQUNQLGdCQUFnQjtRQUNsQjtRQUNBQyxNQUFNQyxLQUFLQyxTQUFTLENBQUNaO0lBQ3ZCO0FBQ0YsRUFBRTtBQUVLLE1BQU1hLGNBQWMsT0FBT0M7SUFDaEMsSUFBSTtRQUNGLE1BQU1qQixNQUFNLE1BQU1DLE1BQU0sK0JBQWtDLE9BQUhnQixLQUFNO1lBQzNEZixRQUFRO1FBQ1Y7SUFDRixFQUFFLE9BQU9HLEdBQUc7UUFDVkMsUUFBUUMsS0FBSyxDQUFDLDRCQUE0QkY7SUFDNUM7QUFDRixFQUFFO0FBRUssTUFBTWEsWUFBWSxPQUFPVCxNQUFNQyxRQUFRQyxNQUFNTTtJQUNsRCxJQUFJO1FBQ0YsTUFBTWQsT0FBTztZQUFFTSxNQUFNQTtZQUFNQyxRQUFRQTtZQUFRQyxNQUFNQTtRQUFLO1FBQ3RELE1BQU1YLE1BQU0sTUFBTUMsTUFBTSwrQkFBa0MsT0FBSGdCLEtBQU07WUFDM0RmLFFBQVE7WUFDUlUsU0FBUztnQkFDUCxnQkFBZ0I7WUFDbEI7WUFDQUMsTUFBTUMsS0FBS0MsU0FBUyxDQUFDWjtRQUN2QjtJQUNGLEVBQUUsT0FBT0UsR0FBRztRQUNWQyxRQUFRQyxLQUFLLENBQUMsNEJBQTRCRjtJQUM1QztBQUNGLEVBQUUiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vYXBwL2FwaS1xdWVyaWVzLmpzP2QzOWIiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGNvbnN0IGdldEVudHJpZXMgPSBhc3luYyAoKSA9PiB7XG4gIHRyeSB7XG4gICAgY29uc3QgcmVzID0gYXdhaXQgZmV0Y2goXCJodHRwOi8vbG9jYWxob3N0OjgwODAvbWVkaWFcIiwgeyBtZXRob2Q6IFwiR0VUXCIgfSk7XG4gICAgY29uc3QgZGF0YSA9IGF3YWl0IHJlcy5qc29uKCk7XG4gICAgcmV0dXJuIGRhdGE7XG4gIH0gY2F0Y2ggKGUpIHtcbiAgICBjb25zb2xlLmVycm9yKFwiVXBkYXRlIG9wZXJhdGlvbiBmYWlsZWQ6XCIsIGUpO1xuICB9XG59O1xuXG5leHBvcnQgY29uc3QgcG9zdEVudHJ5ID0gYXN5bmMgKG5hbWUsIGF1dGhvciwgdHlwZSkgPT4ge1xuICBjb25zdCBkYXRhID0geyBuYW1lOiBuYW1lLCBhdXRob3I6IGF1dGhvciwgdHlwZTogdHlwZSB9O1xuXG4gIGNvbnN0IHJlcyA9IGF3YWl0IGZldGNoKFwiaHR0cDovL2xvY2FsaG9zdDo4MDgwL21lZGlhXCIsIHtcbiAgICBtZXRob2Q6IFwiUE9TVFwiLFxuICAgIGhlYWRlcnM6IHtcbiAgICAgIFwiQ29udGVudC1UeXBlXCI6IFwiYXBwbGljYXRpb24vanNvblwiLFxuICAgIH0sXG4gICAgYm9keTogSlNPTi5zdHJpbmdpZnkoZGF0YSksXG4gIH0pO1xufTtcblxuZXhwb3J0IGNvbnN0IGRlbGV0ZUVudHJ5ID0gYXN5bmMgKGlkKSA9PiB7XG4gIHRyeSB7XG4gICAgY29uc3QgcmVzID0gYXdhaXQgZmV0Y2goYGh0dHA6Ly9sb2NhbGhvc3Q6ODA4MC9tZWRpYS8ke2lkfWAsIHtcbiAgICAgIG1ldGhvZDogXCJERUxFVEVcIixcbiAgICB9KTtcbiAgfSBjYXRjaCAoZSkge1xuICAgIGNvbnNvbGUuZXJyb3IoXCJEZWxldGUgb3BlcmF0aW9uIGZhaWxlZDpcIiwgZSk7XG4gIH1cbn07XG5cbmV4cG9ydCBjb25zdCBlZGl0RW50cnkgPSBhc3luYyAobmFtZSwgYXV0aG9yLCB0eXBlLCBpZCkgPT4ge1xuICB0cnkge1xuICAgIGNvbnN0IGRhdGEgPSB7IG5hbWU6IG5hbWUsIGF1dGhvcjogYXV0aG9yLCB0eXBlOiB0eXBlIH07XG4gICAgY29uc3QgcmVzID0gYXdhaXQgZmV0Y2goYGh0dHA6Ly9sb2NhbGhvc3Q6ODA4MC9tZWRpYS8ke2lkfWAsIHtcbiAgICAgIG1ldGhvZDogXCJQVVRcIixcbiAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgXCJDb250ZW50LVR5cGVcIjogXCJhcHBsaWNhdGlvbi9qc29uXCIsXG4gICAgICB9LFxuICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoZGF0YSksXG4gICAgfSk7XG4gIH0gY2F0Y2ggKGUpIHtcbiAgICBjb25zb2xlLmVycm9yKFwiVXBkYXRlIG9wZXJhdGlvbiBmYWlsZWQ6XCIsIGUpO1xuICB9XG59O1xuIl0sIm5hbWVzIjpbImdldEVudHJpZXMiLCJyZXMiLCJmZXRjaCIsIm1ldGhvZCIsImRhdGEiLCJqc29uIiwiZSIsImNvbnNvbGUiLCJlcnJvciIsInBvc3RFbnRyeSIsIm5hbWUiLCJhdXRob3IiLCJ0eXBlIiwiaGVhZGVycyIsImJvZHkiLCJKU09OIiwic3RyaW5naWZ5IiwiZGVsZXRlRW50cnkiLCJpZCIsImVkaXRFbnRyeSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/api-queries.js\n"));

/***/ })

});