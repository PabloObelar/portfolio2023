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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var formik__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! formik */ \"./node_modules/formik/dist/formik.esm.js\");\n\n\nconst Formulario = ()=>{\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(formik__WEBPACK_IMPORTED_MODULE_1__.Formik, {\n            initialValues: {\n                nombre: \"\",\n                correo: \"\",\n                corre2: \"pabloobelar@gmail.com\"\n            },\n            validate: (valores)=>{\n                let errores = {};\n                if (!valores.nombre) {\n                    errores.nombre = \"Por favor poner un nombre\";\n                } else if (!/^[a-zA-ZÁ-ÿ\\s]{1,40}$/.test(valores.nombre)) {\n                    errores.nombre = \"El nombre solo puede contener letras y espacios\";\n                }\n                if (!valores.correo) {\n                    errores.correo = \"Por favor ingresar un correo electronico\";\n                } else if (!/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-.]+$/.test(valores.correo)) {\n                    errores.correo = \"El correo solo puede contener letras, numeros, puntos, guiones y guion bajo\";\n                }\n                return errores;\n            },\n            onSubmit: (valores)=>{\n                console.log(\"Formulario enviado!\");\n            },\n            children: (param)=>/*#__PURE__*/ {\n                let { values , handleSubmit , handleChange , handleBlur , errors  } = param;\n                return (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n                    className: \"formulario\",\n                    onSubmit: handleSubmit,\n                    children: [\n                        console.log(errors),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                    htmlFor: \"nombre\",\n                                    children: \"Nombre\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\pablo\\\\OneDrive\\\\Escritorio\\\\Practicas\\\\portfolio\\\\pages\\\\formulario.js\",\n                                    lineNumber: 40,\n                                    columnNumber: 15\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                    type: \"text\",\n                                    name: \"nombre\",\n                                    id: \"nombre\",\n                                    placeholder: \"Nombre...\",\n                                    value: values.nombre,\n                                    onChange: handleChange,\n                                    onBlur: handleBlur\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\pablo\\\\OneDrive\\\\Escritorio\\\\Practicas\\\\portfolio\\\\pages\\\\formulario.js\",\n                                    lineNumber: 41,\n                                    columnNumber: 15\n                                }, undefined),\n                                errors.nombre && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"error\",\n                                    children: errors.nombre\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\pablo\\\\OneDrive\\\\Escritorio\\\\Practicas\\\\portfolio\\\\pages\\\\formulario.js\",\n                                    lineNumber: 50,\n                                    columnNumber: 33\n                                }, undefined)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"C:\\\\Users\\\\pablo\\\\OneDrive\\\\Escritorio\\\\Practicas\\\\portfolio\\\\pages\\\\formulario.js\",\n                            lineNumber: 39,\n                            columnNumber: 13\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                    htmlFor: \"correo\",\n                                    children: \"Tu Email\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\pablo\\\\OneDrive\\\\Escritorio\\\\Practicas\\\\portfolio\\\\pages\\\\formulario.js\",\n                                    lineNumber: 53,\n                                    columnNumber: 15\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                    type: \"text\",\n                                    name: \"correo\",\n                                    id: \"correo\",\n                                    placeholder: \"\",\n                                    value: values.correo,\n                                    onChange: handleChange,\n                                    onBlur: handleBlur\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\pablo\\\\OneDrive\\\\Escritorio\\\\Practicas\\\\portfolio\\\\pages\\\\formulario.js\",\n                                    lineNumber: 54,\n                                    columnNumber: 15\n                                }, undefined),\n                                errors.correo && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"error\",\n                                    children: errors.correo\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\pablo\\\\OneDrive\\\\Escritorio\\\\Practicas\\\\portfolio\\\\pages\\\\formulario.js\",\n                                    lineNumber: 63,\n                                    columnNumber: 33\n                                }, undefined)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"C:\\\\Users\\\\pablo\\\\OneDrive\\\\Escritorio\\\\Practicas\\\\portfolio\\\\pages\\\\formulario.js\",\n                            lineNumber: 52,\n                            columnNumber: 13\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                    htmlFor: \"corre\",\n                                    children: \"Email\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\pablo\\\\OneDrive\\\\Escritorio\\\\Practicas\\\\portfolio\\\\pages\\\\formulario.js\",\n                                    lineNumber: 66,\n                                    columnNumber: 15\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                    type: \"text\",\n                                    name: \"correo\",\n                                    id: \"correo\",\n                                    placeholder: \"\",\n                                    value: values.corre2,\n                                    onBlur: handleBlur\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\pablo\\\\OneDrive\\\\Escritorio\\\\Practicas\\\\portfolio\\\\pages\\\\formulario.js\",\n                                    lineNumber: 67,\n                                    columnNumber: 15\n                                }, undefined)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"C:\\\\Users\\\\pablo\\\\OneDrive\\\\Escritorio\\\\Practicas\\\\portfolio\\\\pages\\\\formulario.js\",\n                            lineNumber: 65,\n                            columnNumber: 13\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                            type: \"submit\",\n                            children: \"Enviar\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\pablo\\\\OneDrive\\\\Escritorio\\\\Practicas\\\\portfolio\\\\pages\\\\formulario.js\",\n                            lineNumber: 76,\n                            columnNumber: 13\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\pablo\\\\OneDrive\\\\Escritorio\\\\Practicas\\\\portfolio\\\\pages\\\\formulario.js\",\n                    lineNumber: 37,\n                    columnNumber: 11\n                }, undefined);\n            }\n        }, void 0, false, {\n            fileName: \"C:\\\\Users\\\\pablo\\\\OneDrive\\\\Escritorio\\\\Practicas\\\\portfolio\\\\pages\\\\formulario.js\",\n            lineNumber: 6,\n            columnNumber: 7\n        }, undefined)\n    }, void 0, false);\n};\n_c = Formulario;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Formulario);\nvar _c;\n$RefreshReg$(_c, \"Formulario\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9mb3JtdWxhcmlvLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7QUFBQTtBQUFnQztBQUVoQyxNQUFNQyxhQUFhLElBQU07SUFDdkIscUJBQ0U7a0JBQ0UsNEVBQUNELDBDQUFNQTtZQUNMRSxlQUFlO2dCQUNiQyxRQUFRO2dCQUNSQyxRQUFRO2dCQUNSQyxRQUFRO1lBQ1Y7WUFDQUMsVUFBVSxDQUFDQyxVQUFZO2dCQUNyQixJQUFJQyxVQUFVLENBQUM7Z0JBRWYsSUFBSSxDQUFDRCxRQUFRSixNQUFNLEVBQUU7b0JBQ25CSyxRQUFRTCxNQUFNLEdBQUc7Z0JBQ25CLE9BQU8sSUFBSSxDQUFDLHdCQUF3Qk0sSUFBSSxDQUFDRixRQUFRSixNQUFNLEdBQUc7b0JBQ3hESyxRQUFRTCxNQUFNLEdBQUc7Z0JBQ25CLENBQUM7Z0JBRUQsSUFBSSxDQUFDSSxRQUFRSCxNQUFNLEVBQUU7b0JBQ25CSSxRQUFRSixNQUFNLEdBQUc7Z0JBQ25CLE9BQU8sSUFDTCxDQUFDLG9DQUFvQ0ssSUFBSSxDQUFDRixRQUFRSCxNQUFNLEdBQ3hEO29CQUNBSSxRQUFRSixNQUFNLEdBQ1o7Z0JBQ0osQ0FBQztnQkFFRCxPQUFPSTtZQUNUO1lBQ0FFLFVBQVUsQ0FBQ0gsVUFBWTtnQkFDckJJLFFBQVFDLEdBQUcsQ0FBQztZQUNkO3NCQUVDLHVCQUNDO29CQURBLEVBQUVDLE9BQU0sRUFBRUMsYUFBWSxFQUFFQyxhQUFZLEVBQUVDLFdBQVUsRUFBRUMsT0FBTSxFQUFFO3VCQUMxRCw4REFBQ0M7b0JBQUtDLFdBQVU7b0JBQWFULFVBQVVJOzt3QkFDcENILFFBQVFDLEdBQUcsQ0FBQ0s7c0NBQ2IsOERBQUNHOzs4Q0FDQyw4REFBQ0M7b0NBQU1DLFNBQVE7OENBQVM7Ozs7Ozs4Q0FDeEIsOERBQUNDO29DQUNDQyxNQUFLO29DQUNMQyxNQUFLO29DQUNMQyxJQUFHO29DQUNIQyxhQUFZO29DQUNaQyxPQUFPZixPQUFPVixNQUFNO29DQUNwQjBCLFVBQVVkO29DQUNWZSxRQUFRZDs7Ozs7O2dDQUVUQyxPQUFPZCxNQUFNLGtCQUFJLDhEQUFDaUI7b0NBQUlELFdBQVU7OENBQVNGLE9BQU9kLE1BQU07Ozs7Ozs7Ozs7OztzQ0FFekQsOERBQUNpQjs7OENBQ0MsOERBQUNDO29DQUFNQyxTQUFROzhDQUFTOzs7Ozs7OENBQ3hCLDhEQUFDQztvQ0FDQ0MsTUFBSztvQ0FDTEMsTUFBSztvQ0FDTEMsSUFBRztvQ0FDSEMsYUFBWTtvQ0FDWkMsT0FBT2YsT0FBT1QsTUFBTTtvQ0FDcEJ5QixVQUFVZDtvQ0FDVmUsUUFBUWQ7Ozs7OztnQ0FFVEMsT0FBT2IsTUFBTSxrQkFBSSw4REFBQ2dCO29DQUFJRCxXQUFVOzhDQUFTRixPQUFPYixNQUFNOzs7Ozs7Ozs7Ozs7c0NBRXpELDhEQUFDZ0I7OzhDQUNDLDhEQUFDQztvQ0FBTUMsU0FBUTs4Q0FBUTs7Ozs7OzhDQUN2Qiw4REFBQ0M7b0NBQ0NDLE1BQUs7b0NBQ0xDLE1BQUs7b0NBQ0xDLElBQUc7b0NBQ0hDLGFBQVk7b0NBQ1pDLE9BQU9mLE9BQU9SLE1BQU07b0NBQ3BCeUIsUUFBUWQ7Ozs7Ozs7Ozs7OztzQ0FHWiw4REFBQ2U7NEJBQU9QLE1BQUs7c0NBQVM7Ozs7Ozs7Ozs7OztZQUNsQjs7Ozs7OztBQUtoQjtLQS9FTXZCO0FBZ0ZOLCtEQUFlQSxVQUFVQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL2Zvcm11bGFyaW8uanM/OGVlYSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBGb3JtaWsgfSBmcm9tIFwiZm9ybWlrXCI7XHJcblxyXG5jb25zdCBGb3JtdWxhcmlvID0gKCkgPT4ge1xyXG4gIHJldHVybiAoXHJcbiAgICA8PlxyXG4gICAgICA8Rm9ybWlrXHJcbiAgICAgICAgaW5pdGlhbFZhbHVlcz17e1xyXG4gICAgICAgICAgbm9tYnJlOiBcIlwiLFxyXG4gICAgICAgICAgY29ycmVvOiBcIlwiLFxyXG4gICAgICAgICAgY29ycmUyOiBcInBhYmxvb2JlbGFyQGdtYWlsLmNvbVwiLFxyXG4gICAgICAgIH19XHJcbiAgICAgICAgdmFsaWRhdGU9eyh2YWxvcmVzKSA9PiB7XHJcbiAgICAgICAgICBsZXQgZXJyb3JlcyA9IHt9O1xyXG5cclxuICAgICAgICAgIGlmICghdmFsb3Jlcy5ub21icmUpIHtcclxuICAgICAgICAgICAgZXJyb3Jlcy5ub21icmUgPSBcIlBvciBmYXZvciBwb25lciB1biBub21icmVcIjtcclxuICAgICAgICAgIH0gZWxzZSBpZiAoIS9eW2EtekEtWsOBLcO/XFxzXXsxLDQwfSQvLnRlc3QodmFsb3Jlcy5ub21icmUpKSB7XHJcbiAgICAgICAgICAgIGVycm9yZXMubm9tYnJlID0gXCJFbCBub21icmUgc29sbyBwdWVkZSBjb250ZW5lciBsZXRyYXMgeSBlc3BhY2lvc1wiO1xyXG4gICAgICAgICAgfVxyXG5cclxuICAgICAgICAgIGlmICghdmFsb3Jlcy5jb3JyZW8pIHtcclxuICAgICAgICAgICAgZXJyb3Jlcy5jb3JyZW8gPSBcIlBvciBmYXZvciBpbmdyZXNhciB1biBjb3JyZW8gZWxlY3Ryb25pY29cIjtcclxuICAgICAgICAgIH0gZWxzZSBpZiAoXHJcbiAgICAgICAgICAgICEvXlthLXpBLVowLTlfListXStAW2EtekEtWjAtOS0uXSskLy50ZXN0KHZhbG9yZXMuY29ycmVvKVxyXG4gICAgICAgICAgKSB7XHJcbiAgICAgICAgICAgIGVycm9yZXMuY29ycmVvID1cclxuICAgICAgICAgICAgICBcIkVsIGNvcnJlbyBzb2xvIHB1ZWRlIGNvbnRlbmVyIGxldHJhcywgbnVtZXJvcywgcHVudG9zLCBndWlvbmVzIHkgZ3Vpb24gYmFqb1wiO1xyXG4gICAgICAgICAgfVxyXG5cclxuICAgICAgICAgIHJldHVybiBlcnJvcmVzO1xyXG4gICAgICAgIH19XHJcbiAgICAgICAgb25TdWJtaXQ9eyh2YWxvcmVzKSA9PiB7XHJcbiAgICAgICAgICBjb25zb2xlLmxvZyhcIkZvcm11bGFyaW8gZW52aWFkbyFcIik7XHJcbiAgICAgICAgfX1cclxuICAgICAgPlxyXG4gICAgICAgIHsoeyB2YWx1ZXMsIGhhbmRsZVN1Ym1pdCwgaGFuZGxlQ2hhbmdlLCBoYW5kbGVCbHVyLCBlcnJvcnMgfSkgPT4gKFxyXG4gICAgICAgICAgPGZvcm0gY2xhc3NOYW1lPVwiZm9ybXVsYXJpb1wiIG9uU3VibWl0PXtoYW5kbGVTdWJtaXR9PlxyXG4gICAgICAgICAgICB7Y29uc29sZS5sb2coZXJyb3JzKX1cclxuICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cIm5vbWJyZVwiPk5vbWJyZTwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXHJcbiAgICAgICAgICAgICAgICBuYW1lPVwibm9tYnJlXCJcclxuICAgICAgICAgICAgICAgIGlkPVwibm9tYnJlXCJcclxuICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiTm9tYnJlLi4uXCJcclxuICAgICAgICAgICAgICAgIHZhbHVlPXt2YWx1ZXMubm9tYnJlfVxyXG4gICAgICAgICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZUNoYW5nZX1cclxuICAgICAgICAgICAgICAgIG9uQmx1cj17aGFuZGxlQmx1cn1cclxuICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgIHtlcnJvcnMubm9tYnJlICYmIDxkaXYgY2xhc3NOYW1lPVwiZXJyb3JcIj57ZXJyb3JzLm5vbWJyZX08L2Rpdj59XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwiY29ycmVvXCI+VHUgRW1haWw8L2xhYmVsPlxyXG4gICAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxyXG4gICAgICAgICAgICAgICAgbmFtZT1cImNvcnJlb1wiXHJcbiAgICAgICAgICAgICAgICBpZD1cImNvcnJlb1wiXHJcbiAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIlwiXHJcbiAgICAgICAgICAgICAgICB2YWx1ZT17dmFsdWVzLmNvcnJlb31cclxuICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2V9XHJcbiAgICAgICAgICAgICAgICBvbkJsdXI9e2hhbmRsZUJsdXJ9XHJcbiAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICB7ZXJyb3JzLmNvcnJlbyAmJiA8ZGl2IGNsYXNzTmFtZT1cImVycm9yXCI+e2Vycm9ycy5jb3JyZW99PC9kaXY+fVxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cImNvcnJlXCI+RW1haWw8L2xhYmVsPlxyXG4gICAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxyXG4gICAgICAgICAgICAgICAgbmFtZT1cImNvcnJlb1wiXHJcbiAgICAgICAgICAgICAgICBpZD1cImNvcnJlb1wiXHJcbiAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIlwiXHJcbiAgICAgICAgICAgICAgICB2YWx1ZT17dmFsdWVzLmNvcnJlMn1cclxuICAgICAgICAgICAgICAgIG9uQmx1cj17aGFuZGxlQmx1cn1cclxuICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwic3VibWl0XCI+RW52aWFyPC9idXR0b24+XHJcbiAgICAgICAgICA8L2Zvcm0+XHJcbiAgICAgICAgKX1cclxuICAgICAgPC9Gb3JtaWs+XHJcbiAgICA8Lz5cclxuICApO1xyXG59O1xyXG5leHBvcnQgZGVmYXVsdCBGb3JtdWxhcmlvO1xyXG4iXSwibmFtZXMiOlsiRm9ybWlrIiwiRm9ybXVsYXJpbyIsImluaXRpYWxWYWx1ZXMiLCJub21icmUiLCJjb3JyZW8iLCJjb3JyZTIiLCJ2YWxpZGF0ZSIsInZhbG9yZXMiLCJlcnJvcmVzIiwidGVzdCIsIm9uU3VibWl0IiwiY29uc29sZSIsImxvZyIsInZhbHVlcyIsImhhbmRsZVN1Ym1pdCIsImhhbmRsZUNoYW5nZSIsImhhbmRsZUJsdXIiLCJlcnJvcnMiLCJmb3JtIiwiY2xhc3NOYW1lIiwiZGl2IiwibGFiZWwiLCJodG1sRm9yIiwiaW5wdXQiLCJ0eXBlIiwibmFtZSIsImlkIiwicGxhY2Vob2xkZXIiLCJ2YWx1ZSIsIm9uQ2hhbmdlIiwib25CbHVyIiwiYnV0dG9uIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/formulario.js\n"));

/***/ })

});