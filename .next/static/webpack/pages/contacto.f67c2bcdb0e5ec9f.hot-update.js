"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/contacto",{

/***/ "./pages/formulario2.js":
/*!******************************!*\
  !*** ./pages/formulario2.js ***!
  \******************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _emailjs_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @emailjs/browser */ \"./node_modules/@emailjs/browser/es/index.js\");\n/* harmony import */ var formik__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! formik */ \"./node_modules/formik/dist/formik.esm.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n\n\n\n\nconst FormularioTwo = ()=>{\n    const sendEmail = (events)=>{\n        events.preventDefault();\n        _emailjs_browser__WEBPACK_IMPORTED_MODULE_1__[\"default\"].sendForm(\"service_uh6kp5d\", \"template_qevz07j\", events.target, \"muy5CcfUmuGumCpmY\").then((response)=>console.log(response)).catch((error)=>console.log(error));\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n        name: \"formulario\",\n        className: \"row g-3 needs-validation\",\n        novalidate: true,\n        onSubmit: sendEmail,\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"col-md-4\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                        for: \"validationCustom01\",\n                        className: \"form-label\",\n                        children: \"Nombre\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\pablo\\\\OneDrive\\\\Escritorio\\\\Practicas\\\\portfolio\\\\pages\\\\formulario2.js\",\n                        lineNumber: 27,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                        type: \"text\",\n                        name: \"user_name\",\n                        className: \"form-control\",\n                        id: \"validationCustom01\",\n                        required: true\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\pablo\\\\OneDrive\\\\Escritorio\\\\Practicas\\\\portfolio\\\\pages\\\\formulario2.js\",\n                        lineNumber: 30,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\pablo\\\\OneDrive\\\\Escritorio\\\\Practicas\\\\portfolio\\\\pages\\\\formulario2.js\",\n                lineNumber: 26,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"col-md-4\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                        for: \"validationCustom02\",\n                        className: \"form-label\",\n                        children: \"Apellido\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\pablo\\\\OneDrive\\\\Escritorio\\\\Practicas\\\\portfolio\\\\pages\\\\formulario2.js\",\n                        lineNumber: 39,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                        type: \"text\",\n                        className: \"form-control\",\n                        id: \"validationCustom02\",\n                        name: \"user_name\",\n                        required: true\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\pablo\\\\OneDrive\\\\Escritorio\\\\Practicas\\\\portfolio\\\\pages\\\\formulario2.js\",\n                        lineNumber: 42,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\pablo\\\\OneDrive\\\\Escritorio\\\\Practicas\\\\portfolio\\\\pages\\\\formulario2.js\",\n                lineNumber: 38,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                class: \"col-md-4\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                        for: \"validationCustomUsername\",\n                        className: \"form-label\",\n                        children: \"Email\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\pablo\\\\OneDrive\\\\Escritorio\\\\Practicas\\\\portfolio\\\\pages\\\\formulario2.js\",\n                        lineNumber: 51,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"input-group has-validation\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                type: \"text\",\n                                className: \"form-control\",\n                                id: \"validationCustomUsername\",\n                                \"aria-describedby\": \"inputGroupPrepend\",\n                                name: \"user_email\",\n                                required: true\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\pablo\\\\OneDrive\\\\Escritorio\\\\Practicas\\\\portfolio\\\\pages\\\\formulario2.js\",\n                                lineNumber: 55,\n                                columnNumber: 11\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"invalid-feedback\",\n                                children: \"Please choose a username.\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\pablo\\\\OneDrive\\\\Escritorio\\\\Practicas\\\\portfolio\\\\pages\\\\formulario2.js\",\n                                lineNumber: 63,\n                                columnNumber: 11\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\pablo\\\\OneDrive\\\\Escritorio\\\\Practicas\\\\portfolio\\\\pages\\\\formulario2.js\",\n                        lineNumber: 54,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\pablo\\\\OneDrive\\\\Escritorio\\\\Practicas\\\\portfolio\\\\pages\\\\formulario2.js\",\n                lineNumber: 50,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"col-md-4\",\n                children: [\n                    \" \",\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                        children: \"Mensaje\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\pablo\\\\OneDrive\\\\Escritorio\\\\Practicas\\\\portfolio\\\\pages\\\\formulario2.js\",\n                        lineNumber: 68,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"textarea\", {\n                        name: \"user_message\",\n                        id: \"\",\n                        cols: \"40\",\n                        row: \"10\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\pablo\\\\OneDrive\\\\Escritorio\\\\Practicas\\\\portfolio\\\\pages\\\\formulario2.js\",\n                        lineNumber: 69,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        children: \"Enviar\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\pablo\\\\OneDrive\\\\Escritorio\\\\Practicas\\\\portfolio\\\\pages\\\\formulario2.js\",\n                        lineNumber: 70,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\pablo\\\\OneDrive\\\\Escritorio\\\\Practicas\\\\portfolio\\\\pages\\\\formulario2.js\",\n                lineNumber: 66,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\pablo\\\\OneDrive\\\\Escritorio\\\\Practicas\\\\portfolio\\\\pages\\\\formulario2.js\",\n        lineNumber: 20,\n        columnNumber: 5\n    }, undefined);\n};\n_c = FormularioTwo;\n/* harmony default export */ __webpack_exports__[\"default\"] = (FormularioTwo);\nvar _c;\n$RefreshReg$(_c, \"FormularioTwo\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9mb3JtdWxhcmlvMi5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7QUFBdUM7QUFDYztBQUNwQjtBQUVqQyxNQUFNSyxnQkFBZ0IsSUFBTTtJQUMxQixNQUFNQyxZQUFZLENBQUNDLFNBQVc7UUFDNUJBLE9BQU9DLGNBQWM7UUFFckJSLGlFQUNXLENBQ1AsbUJBQ0Esb0JBQ0FPLE9BQU9HLE1BQU0sRUFDYixxQkFFREMsSUFBSSxDQUFDLENBQUNDLFdBQWFDLFFBQVFDLEdBQUcsQ0FBQ0YsV0FDL0JHLEtBQUssQ0FBQyxDQUFDQyxRQUFVSCxRQUFRQyxHQUFHLENBQUNFO0lBQ2xDO0lBQ0EscUJBQ0UsOERBQUNDO1FBQ0NDLE1BQUs7UUFDTEMsV0FBVTtRQUNWQyxVQUFVO1FBQ1ZDLFVBQVVmOzswQkFFViw4REFBQ2dCO2dCQUFJSCxXQUFVOztrQ0FDYiw4REFBQ0k7d0JBQU1DLEtBQUk7d0JBQXFCTCxXQUFVO2tDQUFhOzs7Ozs7a0NBR3ZELDhEQUFDTTt3QkFDQ0MsTUFBSzt3QkFDTFIsTUFBSzt3QkFDTEMsV0FBVTt3QkFDVlEsSUFBRzt3QkFDSEMsUUFBUTs7Ozs7Ozs7Ozs7OzBCQUdaLDhEQUFDTjtnQkFBSUgsV0FBVTs7a0NBQ2IsOERBQUNJO3dCQUFNQyxLQUFJO3dCQUFxQkwsV0FBVTtrQ0FBYTs7Ozs7O2tDQUd2RCw4REFBQ007d0JBQ0NDLE1BQUs7d0JBQ0xQLFdBQVU7d0JBQ1ZRLElBQUc7d0JBQ0hULE1BQUs7d0JBQ0xVLFFBQVE7Ozs7Ozs7Ozs7OzswQkFHWiw4REFBQ047Z0JBQUlPLE9BQU07O2tDQUNULDhEQUFDTjt3QkFBTUMsS0FBSTt3QkFBMkJMLFdBQVU7a0NBQWE7Ozs7OztrQ0FHN0QsOERBQUNHO3dCQUFJSCxXQUFVOzswQ0FDYiw4REFBQ007Z0NBQ0NDLE1BQUs7Z0NBQ0xQLFdBQVU7Z0NBQ1ZRLElBQUc7Z0NBQ0hHLG9CQUFpQjtnQ0FDakJaLE1BQUs7Z0NBQ0xVLFFBQVE7Ozs7OzswQ0FFViw4REFBQ047Z0NBQUlILFdBQVU7MENBQW1COzs7Ozs7Ozs7Ozs7Ozs7Ozs7MEJBR3RDLDhEQUFDRztnQkFBSUgsV0FBVTs7b0JBQ1o7a0NBQ0QsOERBQUNJO2tDQUFNOzs7Ozs7a0NBQ1AsOERBQUNRO3dCQUFTYixNQUFLO3dCQUFlUyxJQUFHO3dCQUFHSyxNQUFLO3dCQUFLQyxLQUFJOzs7Ozs7a0NBQ2xELDhEQUFDQztrQ0FBTzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBSWhCO0tBckVNN0I7QUF1RU4sK0RBQWVBLGFBQWFBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvZm9ybXVsYXJpbzIuanM/OWI0ZiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgZW1haWxqcyBmcm9tIFwiQGVtYWlsanMvYnJvd3NlclwiO1xyXG5pbXBvcnQgeyBGb3JtaWssIEZpZWxkLCBFcnJvck1lc3NhZ2UgfSBmcm9tIFwiZm9ybWlrXCI7XHJcbmltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcblxyXG5jb25zdCBGb3JtdWxhcmlvVHdvID0gKCkgPT4ge1xyXG4gIGNvbnN0IHNlbmRFbWFpbCA9IChldmVudHMpID0+IHtcclxuICAgIGV2ZW50cy5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cclxuICAgIGVtYWlsanNcclxuICAgICAgLnNlbmRGb3JtKFxyXG4gICAgICAgIFwic2VydmljZV91aDZrcDVkXCIsXHJcbiAgICAgICAgXCJ0ZW1wbGF0ZV9xZXZ6MDdqXCIsXHJcbiAgICAgICAgZXZlbnRzLnRhcmdldCxcclxuICAgICAgICBcIm11eTVDY2ZVbXVHdW1DcG1ZXCJcclxuICAgICAgKVxyXG4gICAgICAudGhlbigocmVzcG9uc2UpID0+IGNvbnNvbGUubG9nKHJlc3BvbnNlKSlcclxuICAgICAgLmNhdGNoKChlcnJvcikgPT4gY29uc29sZS5sb2coZXJyb3IpKTtcclxuICB9O1xyXG4gIHJldHVybiAoXHJcbiAgICA8Zm9ybVxyXG4gICAgICBuYW1lPVwiZm9ybXVsYXJpb1wiXHJcbiAgICAgIGNsYXNzTmFtZT1cInJvdyBnLTMgbmVlZHMtdmFsaWRhdGlvblwiXHJcbiAgICAgIG5vdmFsaWRhdGVcclxuICAgICAgb25TdWJtaXQ9e3NlbmRFbWFpbH1cclxuICAgID5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtbWQtNFwiPlxyXG4gICAgICAgIDxsYWJlbCBmb3I9XCJ2YWxpZGF0aW9uQ3VzdG9tMDFcIiBjbGFzc05hbWU9XCJmb3JtLWxhYmVsXCI+XHJcbiAgICAgICAgICBOb21icmVcclxuICAgICAgICA8L2xhYmVsPlxyXG4gICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgdHlwZT1cInRleHRcIlxyXG4gICAgICAgICAgbmFtZT1cInVzZXJfbmFtZVwiXHJcbiAgICAgICAgICBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2xcIlxyXG4gICAgICAgICAgaWQ9XCJ2YWxpZGF0aW9uQ3VzdG9tMDFcIlxyXG4gICAgICAgICAgcmVxdWlyZWRcclxuICAgICAgICAvPlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtbWQtNFwiPlxyXG4gICAgICAgIDxsYWJlbCBmb3I9XCJ2YWxpZGF0aW9uQ3VzdG9tMDJcIiBjbGFzc05hbWU9XCJmb3JtLWxhYmVsXCI+XHJcbiAgICAgICAgICBBcGVsbGlkb1xyXG4gICAgICAgIDwvbGFiZWw+XHJcbiAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICB0eXBlPVwidGV4dFwiXHJcbiAgICAgICAgICBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2xcIlxyXG4gICAgICAgICAgaWQ9XCJ2YWxpZGF0aW9uQ3VzdG9tMDJcIlxyXG4gICAgICAgICAgbmFtZT1cInVzZXJfbmFtZVwiXHJcbiAgICAgICAgICByZXF1aXJlZFxyXG4gICAgICAgIC8+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8ZGl2IGNsYXNzPVwiY29sLW1kLTRcIj5cclxuICAgICAgICA8bGFiZWwgZm9yPVwidmFsaWRhdGlvbkN1c3RvbVVzZXJuYW1lXCIgY2xhc3NOYW1lPVwiZm9ybS1sYWJlbFwiPlxyXG4gICAgICAgICAgRW1haWxcclxuICAgICAgICA8L2xhYmVsPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaW5wdXQtZ3JvdXAgaGFzLXZhbGlkYXRpb25cIj5cclxuICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICB0eXBlPVwidGV4dFwiXHJcbiAgICAgICAgICAgIGNsYXNzTmFtZT1cImZvcm0tY29udHJvbFwiXHJcbiAgICAgICAgICAgIGlkPVwidmFsaWRhdGlvbkN1c3RvbVVzZXJuYW1lXCJcclxuICAgICAgICAgICAgYXJpYS1kZXNjcmliZWRieT1cImlucHV0R3JvdXBQcmVwZW5kXCJcclxuICAgICAgICAgICAgbmFtZT1cInVzZXJfZW1haWxcIlxyXG4gICAgICAgICAgICByZXF1aXJlZFxyXG4gICAgICAgICAgLz5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaW52YWxpZC1mZWVkYmFja1wiPlBsZWFzZSBjaG9vc2UgYSB1c2VybmFtZS48L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLW1kLTRcIj5cclxuICAgICAgICB7XCIgXCJ9XHJcbiAgICAgICAgPGxhYmVsPk1lbnNhamU8L2xhYmVsPlxyXG4gICAgICAgIDx0ZXh0YXJlYSBuYW1lPVwidXNlcl9tZXNzYWdlXCIgaWQ9XCJcIiBjb2xzPVwiNDBcIiByb3c9XCIxMFwiPjwvdGV4dGFyZWE+XHJcbiAgICAgICAgPGJ1dHRvbj5FbnZpYXI8L2J1dHRvbj5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L2Zvcm0+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IEZvcm11bGFyaW9Ud287XHJcbiJdLCJuYW1lcyI6WyJlbWFpbGpzIiwiRm9ybWlrIiwiRmllbGQiLCJFcnJvck1lc3NhZ2UiLCJ1c2VTdGF0ZSIsIkZvcm11bGFyaW9Ud28iLCJzZW5kRW1haWwiLCJldmVudHMiLCJwcmV2ZW50RGVmYXVsdCIsInNlbmRGb3JtIiwidGFyZ2V0IiwidGhlbiIsInJlc3BvbnNlIiwiY29uc29sZSIsImxvZyIsImNhdGNoIiwiZXJyb3IiLCJmb3JtIiwibmFtZSIsImNsYXNzTmFtZSIsIm5vdmFsaWRhdGUiLCJvblN1Ym1pdCIsImRpdiIsImxhYmVsIiwiZm9yIiwiaW5wdXQiLCJ0eXBlIiwiaWQiLCJyZXF1aXJlZCIsImNsYXNzIiwiYXJpYS1kZXNjcmliZWRieSIsInRleHRhcmVhIiwiY29scyIsInJvdyIsImJ1dHRvbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/formulario2.js\n"));

/***/ })

});