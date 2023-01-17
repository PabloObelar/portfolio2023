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

/***/ "./pages/formulario.js":
/*!*****************************!*\
  !*** ./pages/formulario.js ***!
  \*****************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var formik__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! formik */ \"./node_modules/formik/dist/formik.esm.js\");\n\n\nconst Formulario = ()=>{\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(formik__WEBPACK_IMPORTED_MODULE_1__.Formik, {\n            initialValues: {\n                nombre: \"\",\n                correo: \"pabloobelar@gmail.com\"\n            },\n            validate: (valores)=>{\n                let errores = {};\n                if (!valores.nombre) {\n                    errores.nombre = \"Por favor poner un nombre\";\n                }\n                return errores;\n            },\n            onSubmit: (valores)=>{\n                console.log(\"Formulario enviado!\");\n                console.log(valores);\n            },\n            children: (param)=>/*#__PURE__*/ {\n                let { values , handleSubmit , handleChange , handleBlur , errors  } = param;\n                return (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n                    className: \"formulario\",\n                    onSubmit: handleSubmit,\n                    children: [\n                        console.log(errors),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                    htmlFor: \"nombre\",\n                                    children: \"Nombre\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\pablo\\\\OneDrive\\\\Escritorio\\\\Practicas\\\\portfolio\\\\pages\\\\formulario.js\",\n                                    lineNumber: 29,\n                                    columnNumber: 15\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                    type: \"text\",\n                                    name: \"nombre\",\n                                    id: \"nombre\",\n                                    placeholder: \"Nombre...\",\n                                    value: values.nombre,\n                                    onChange: handleChange,\n                                    onBlur: handleBlur\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\pablo\\\\OneDrive\\\\Escritorio\\\\Practicas\\\\portfolio\\\\pages\\\\formulario.js\",\n                                    lineNumber: 30,\n                                    columnNumber: 15\n                                }, undefined),\n                                errors.nombre && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"error\",\n                                    children: errors.nombre\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\pablo\\\\OneDrive\\\\Escritorio\\\\Practicas\\\\portfolio\\\\pages\\\\formulario.js\",\n                                    lineNumber: 39,\n                                    columnNumber: 33\n                                }, undefined)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"C:\\\\Users\\\\pablo\\\\OneDrive\\\\Escritorio\\\\Practicas\\\\portfolio\\\\pages\\\\formulario.js\",\n                            lineNumber: 28,\n                            columnNumber: 13\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                    htmlFor: \"correo\",\n                                    children: \"Email\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\pablo\\\\OneDrive\\\\Escritorio\\\\Practicas\\\\portfolio\\\\pages\\\\formulario.js\",\n                                    lineNumber: 42,\n                                    columnNumber: 15\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                    type: \"text\",\n                                    name: \"correo\",\n                                    id: \"correo\",\n                                    placeholder: \"pabloobelar@gmail.com\",\n                                    value: values.correo,\n                                    onBlur: handleBlur\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\pablo\\\\OneDrive\\\\Escritorio\\\\Practicas\\\\portfolio\\\\pages\\\\formulario.js\",\n                                    lineNumber: 43,\n                                    columnNumber: 15\n                                }, undefined)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"C:\\\\Users\\\\pablo\\\\OneDrive\\\\Escritorio\\\\Practicas\\\\portfolio\\\\pages\\\\formulario.js\",\n                            lineNumber: 41,\n                            columnNumber: 13\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                            type: \"submit\",\n                            children: \"Enviar\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\pablo\\\\OneDrive\\\\Escritorio\\\\Practicas\\\\portfolio\\\\pages\\\\formulario.js\",\n                            lineNumber: 52,\n                            columnNumber: 13\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\pablo\\\\OneDrive\\\\Escritorio\\\\Practicas\\\\portfolio\\\\pages\\\\formulario.js\",\n                    lineNumber: 26,\n                    columnNumber: 11\n                }, undefined);\n            }\n        }, void 0, false, {\n            fileName: \"C:\\\\Users\\\\pablo\\\\OneDrive\\\\Escritorio\\\\Practicas\\\\portfolio\\\\pages\\\\formulario.js\",\n            lineNumber: 6,\n            columnNumber: 7\n        }, undefined)\n    }, void 0, false);\n};\n_c = Formulario;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Formulario);\nvar _c;\n$RefreshReg$(_c, \"Formulario\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9mb3JtdWxhcmlvLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7QUFBQTtBQUFnQztBQUVoQyxNQUFNQyxhQUFhLElBQU07SUFDdkIscUJBQ0U7a0JBQ0UsNEVBQUNELDBDQUFNQTtZQUNMRSxlQUFlO2dCQUNiQyxRQUFRO2dCQUNSQyxRQUFRO1lBQ1Y7WUFDQUMsVUFBVSxDQUFDQyxVQUFZO2dCQUNyQixJQUFJQyxVQUFVLENBQUM7Z0JBRWYsSUFBSSxDQUFDRCxRQUFRSCxNQUFNLEVBQUU7b0JBQ25CSSxRQUFRSixNQUFNLEdBQUc7Z0JBQ25CLENBQUM7Z0JBRUQsT0FBT0k7WUFDVDtZQUNBQyxVQUFVLENBQUNGLFVBQVk7Z0JBQ3JCRyxRQUFRQyxHQUFHLENBQUM7Z0JBQ1pELFFBQVFDLEdBQUcsQ0FBQ0o7WUFDZDtzQkFFQyx1QkFDQztvQkFEQSxFQUFFSyxPQUFNLEVBQUVDLGFBQVksRUFBRUMsYUFBWSxFQUFFQyxXQUFVLEVBQUVDLE9BQU0sRUFBRTt1QkFDMUQsOERBQUNDO29CQUFLQyxXQUFVO29CQUFhVCxVQUFVSTs7d0JBQ3BDSCxRQUFRQyxHQUFHLENBQUNLO3NDQUNiLDhEQUFDRzs7OENBQ0MsOERBQUNDO29DQUFNQyxTQUFROzhDQUFTOzs7Ozs7OENBQ3hCLDhEQUFDQztvQ0FDQ0MsTUFBSztvQ0FDTEMsTUFBSztvQ0FDTEMsSUFBRztvQ0FDSEMsYUFBWTtvQ0FDWkMsT0FBT2YsT0FBT1IsTUFBTTtvQ0FDcEJ3QixVQUFVZDtvQ0FDVmUsUUFBUWQ7Ozs7OztnQ0FFVEMsT0FBT1osTUFBTSxrQkFBSSw4REFBQ2U7b0NBQUlELFdBQVU7OENBQVNGLE9BQU9aLE1BQU07Ozs7Ozs7Ozs7OztzQ0FFekQsOERBQUNlOzs4Q0FDQyw4REFBQ0M7b0NBQU1DLFNBQVE7OENBQVM7Ozs7Ozs4Q0FDeEIsOERBQUNDO29DQUNDQyxNQUFLO29DQUNMQyxNQUFLO29DQUNMQyxJQUFHO29DQUNIQyxhQUFZO29DQUNaQyxPQUFPZixPQUFPUCxNQUFNO29DQUNwQndCLFFBQVFkOzs7Ozs7Ozs7Ozs7c0NBR1osOERBQUNlOzRCQUFPUCxNQUFLO3NDQUFTOzs7Ozs7Ozs7Ozs7WUFDbEI7Ozs7Ozs7QUFLaEI7S0F2RE1yQjtBQXdETiwrREFBZUEsVUFBVUEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9mb3JtdWxhcmlvLmpzPzhlZWEiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRm9ybWlrIH0gZnJvbSBcImZvcm1pa1wiO1xyXG5cclxuY29uc3QgRm9ybXVsYXJpbyA9ICgpID0+IHtcclxuICByZXR1cm4gKFxyXG4gICAgPD5cclxuICAgICAgPEZvcm1pa1xyXG4gICAgICAgIGluaXRpYWxWYWx1ZXM9e3tcclxuICAgICAgICAgIG5vbWJyZTogXCJcIixcclxuICAgICAgICAgIGNvcnJlbzogXCJwYWJsb29iZWxhckBnbWFpbC5jb21cIixcclxuICAgICAgICB9fVxyXG4gICAgICAgIHZhbGlkYXRlPXsodmFsb3JlcykgPT4ge1xyXG4gICAgICAgICAgbGV0IGVycm9yZXMgPSB7fTtcclxuXHJcbiAgICAgICAgICBpZiAoIXZhbG9yZXMubm9tYnJlKSB7XHJcbiAgICAgICAgICAgIGVycm9yZXMubm9tYnJlID0gXCJQb3IgZmF2b3IgcG9uZXIgdW4gbm9tYnJlXCI7XHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgcmV0dXJuIGVycm9yZXM7XHJcbiAgICAgICAgfX1cclxuICAgICAgICBvblN1Ym1pdD17KHZhbG9yZXMpID0+IHtcclxuICAgICAgICAgIGNvbnNvbGUubG9nKFwiRm9ybXVsYXJpbyBlbnZpYWRvIVwiKTtcclxuICAgICAgICAgIGNvbnNvbGUubG9nKHZhbG9yZXMpO1xyXG4gICAgICAgIH19XHJcbiAgICAgID5cclxuICAgICAgICB7KHsgdmFsdWVzLCBoYW5kbGVTdWJtaXQsIGhhbmRsZUNoYW5nZSwgaGFuZGxlQmx1ciwgZXJyb3JzIH0pID0+IChcclxuICAgICAgICAgIDxmb3JtIGNsYXNzTmFtZT1cImZvcm11bGFyaW9cIiBvblN1Ym1pdD17aGFuZGxlU3VibWl0fT5cclxuICAgICAgICAgICAge2NvbnNvbGUubG9nKGVycm9ycyl9XHJcbiAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJub21icmVcIj5Ob21icmU8L2xhYmVsPlxyXG4gICAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxyXG4gICAgICAgICAgICAgICAgbmFtZT1cIm5vbWJyZVwiXHJcbiAgICAgICAgICAgICAgICBpZD1cIm5vbWJyZVwiXHJcbiAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIk5vbWJyZS4uLlwiXHJcbiAgICAgICAgICAgICAgICB2YWx1ZT17dmFsdWVzLm5vbWJyZX1cclxuICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2V9XHJcbiAgICAgICAgICAgICAgICBvbkJsdXI9e2hhbmRsZUJsdXJ9XHJcbiAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICB7ZXJyb3JzLm5vbWJyZSAmJiA8ZGl2IGNsYXNzTmFtZT1cImVycm9yXCI+e2Vycm9ycy5ub21icmV9PC9kaXY+fVxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cImNvcnJlb1wiPkVtYWlsPC9sYWJlbD5cclxuICAgICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcclxuICAgICAgICAgICAgICAgIG5hbWU9XCJjb3JyZW9cIlxyXG4gICAgICAgICAgICAgICAgaWQ9XCJjb3JyZW9cIlxyXG4gICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJwYWJsb29iZWxhckBnbWFpbC5jb21cIlxyXG4gICAgICAgICAgICAgICAgdmFsdWU9e3ZhbHVlcy5jb3JyZW99XHJcbiAgICAgICAgICAgICAgICBvbkJsdXI9e2hhbmRsZUJsdXJ9XHJcbiAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxidXR0b24gdHlwZT1cInN1Ym1pdFwiPkVudmlhcjwvYnV0dG9uPlxyXG4gICAgICAgICAgPC9mb3JtPlxyXG4gICAgICAgICl9XHJcbiAgICAgIDwvRm9ybWlrPlxyXG4gICAgPC8+XHJcbiAgKTtcclxufTtcclxuZXhwb3J0IGRlZmF1bHQgRm9ybXVsYXJpbztcclxuIl0sIm5hbWVzIjpbIkZvcm1payIsIkZvcm11bGFyaW8iLCJpbml0aWFsVmFsdWVzIiwibm9tYnJlIiwiY29ycmVvIiwidmFsaWRhdGUiLCJ2YWxvcmVzIiwiZXJyb3JlcyIsIm9uU3VibWl0IiwiY29uc29sZSIsImxvZyIsInZhbHVlcyIsImhhbmRsZVN1Ym1pdCIsImhhbmRsZUNoYW5nZSIsImhhbmRsZUJsdXIiLCJlcnJvcnMiLCJmb3JtIiwiY2xhc3NOYW1lIiwiZGl2IiwibGFiZWwiLCJodG1sRm9yIiwiaW5wdXQiLCJ0eXBlIiwibmFtZSIsImlkIiwicGxhY2Vob2xkZXIiLCJ2YWx1ZSIsIm9uQ2hhbmdlIiwib25CbHVyIiwiYnV0dG9uIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/formulario.js\n"));

/***/ })

});