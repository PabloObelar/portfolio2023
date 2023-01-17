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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var formik__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! formik */ \"./node_modules/formik/dist/formik.esm.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n\nvar _s = $RefreshSig$();\n\n\nconst Formulario = ()=>{\n    _s();\n    const [formulario, setFormulario] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(formik__WEBPACK_IMPORTED_MODULE_1__.Formik, {\n            initialValues: {\n                nombre: \"\",\n                correo: \"\",\n                corre2: \"pabloobelar@gmail.com\"\n            },\n            validate: (valores)=>{\n                let errores = {};\n                if (!valores.nombre) {\n                    errores.nombre = \"Por favor poner un nombre\";\n                } else if (!/^[a-zA-ZÁ-ÿ\\s]{1,40}$/.test(valores.nombre)) {\n                    errores.nombre = \"El nombre solo puede contener letras y espacios\";\n                }\n                if (!valores.correo) {\n                    errores.correo = \"Por favor ingresar un correo electronico\";\n                } else if (!/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-.]+$/.test(valores.correo)) {\n                    errores.correo = \"El correo solo puede contener letras, numeros, puntos, guiones y guion bajo\";\n                }\n                return errores;\n            },\n            onSubmit: (valores, param)=>{\n                let { resetForm  } = param;\n                resetForm();\n                console.log(\"Formulario enviado!\");\n                setFormulario(true);\n                setTimeout(()=>setFormulario(false), 5000);\n            },\n            children: (param)=>/*#__PURE__*/ {\n                let { values , handleSubmit , handleChange , handleBlur , errors , touched  } = param;\n                return (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n                    className: \"formulario\",\n                    onSubmit: handleSubmit,\n                    children: [\n                        console.log(errors),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                    htmlFor: \"nombre\",\n                                    children: \"Nombre\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\pablo\\\\OneDrive\\\\Escritorio\\\\Practicas\\\\portfolio\\\\pages\\\\formulario.js\",\n                                    lineNumber: 53,\n                                    columnNumber: 15\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                    type: \"text\",\n                                    name: \"nombre\",\n                                    id: \"nombre\",\n                                    placeholder: \"Nombre...\",\n                                    value: values.nombre,\n                                    onChange: handleChange,\n                                    onBlur: handleBlur\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\pablo\\\\OneDrive\\\\Escritorio\\\\Practicas\\\\portfolio\\\\pages\\\\formulario.js\",\n                                    lineNumber: 54,\n                                    columnNumber: 15\n                                }, undefined),\n                                touched.nombre && errors.nombre && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"error\",\n                                    children: errors.nombre\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\pablo\\\\OneDrive\\\\Escritorio\\\\Practicas\\\\portfolio\\\\pages\\\\formulario.js\",\n                                    lineNumber: 65,\n                                    columnNumber: 17\n                                }, undefined)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"C:\\\\Users\\\\pablo\\\\OneDrive\\\\Escritorio\\\\Practicas\\\\portfolio\\\\pages\\\\formulario.js\",\n                            lineNumber: 52,\n                            columnNumber: 13\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                    htmlFor: \"correo\",\n                                    children: \"Tu Email\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\pablo\\\\OneDrive\\\\Escritorio\\\\Practicas\\\\portfolio\\\\pages\\\\formulario.js\",\n                                    lineNumber: 69,\n                                    columnNumber: 15\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                    type: \"text\",\n                                    name: \"correo\",\n                                    id: \"correo\",\n                                    placeholder: \"\",\n                                    value: values.correo,\n                                    onChange: handleChange,\n                                    onBlur: handleBlur\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\pablo\\\\OneDrive\\\\Escritorio\\\\Practicas\\\\portfolio\\\\pages\\\\formulario.js\",\n                                    lineNumber: 70,\n                                    columnNumber: 15\n                                }, undefined),\n                                errors.correo && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"error\",\n                                    children: touched.correo && errors.correo\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\pablo\\\\OneDrive\\\\Escritorio\\\\Practicas\\\\portfolio\\\\pages\\\\formulario.js\",\n                                    lineNumber: 80,\n                                    columnNumber: 17\n                                }, undefined)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"C:\\\\Users\\\\pablo\\\\OneDrive\\\\Escritorio\\\\Practicas\\\\portfolio\\\\pages\\\\formulario.js\",\n                            lineNumber: 68,\n                            columnNumber: 13\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                    htmlFor: \"corre\",\n                                    children: \"Email\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\pablo\\\\OneDrive\\\\Escritorio\\\\Practicas\\\\portfolio\\\\pages\\\\formulario.js\",\n                                    lineNumber: 84,\n                                    columnNumber: 15\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                    type: \"text\",\n                                    name: \"correo\",\n                                    id: \"correo\",\n                                    placeholder: \"\",\n                                    value: values.corre2,\n                                    onBlur: handleBlur\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\pablo\\\\OneDrive\\\\Escritorio\\\\Practicas\\\\portfolio\\\\pages\\\\formulario.js\",\n                                    lineNumber: 85,\n                                    columnNumber: 15\n                                }, undefined)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"C:\\\\Users\\\\pablo\\\\OneDrive\\\\Escritorio\\\\Practicas\\\\portfolio\\\\pages\\\\formulario.js\",\n                            lineNumber: 83,\n                            columnNumber: 13\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                            type: \"submit\",\n                            children: \"Enviar\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\pablo\\\\OneDrive\\\\Escritorio\\\\Practicas\\\\portfolio\\\\pages\\\\formulario.js\",\n                            lineNumber: 94,\n                            columnNumber: 13\n                        }, undefined),\n                        formulario && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                            className: \"exito\",\n                            children: \"Formulario enviado con exito\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\pablo\\\\OneDrive\\\\Escritorio\\\\Practicas\\\\portfolio\\\\pages\\\\formulario.js\",\n                            lineNumber: 96,\n                            columnNumber: 15\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\pablo\\\\OneDrive\\\\Escritorio\\\\Practicas\\\\portfolio\\\\pages\\\\formulario.js\",\n                    lineNumber: 50,\n                    columnNumber: 11\n                }, undefined);\n            }\n        }, void 0, false, {\n            fileName: \"C:\\\\Users\\\\pablo\\\\OneDrive\\\\Escritorio\\\\Practicas\\\\portfolio\\\\pages\\\\formulario.js\",\n            lineNumber: 8,\n            columnNumber: 7\n        }, undefined)\n    }, void 0, false);\n};\n_s(Formulario, \"DKmFO14N9ulMNyjnjzcqGcTXCTQ=\");\n_c = Formulario;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Formulario);\nvar _c;\n$RefreshReg$(_c, \"Formulario\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9mb3JtdWxhcmlvLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7OztBQUFBOztBQUFnQztBQUNDO0FBRWpDLE1BQU1FLGFBQWEsSUFBTTs7SUFDdkIsTUFBTSxDQUFDQyxZQUFZQyxjQUFjLEdBQUdILCtDQUFRQSxDQUFDLEtBQUs7SUFDbEQscUJBQ0U7a0JBQ0UsNEVBQUNELDBDQUFNQTtZQUNMSyxlQUFlO2dCQUNiQyxRQUFRO2dCQUNSQyxRQUFRO2dCQUNSQyxRQUFRO1lBQ1Y7WUFDQUMsVUFBVSxDQUFDQyxVQUFZO2dCQUNyQixJQUFJQyxVQUFVLENBQUM7Z0JBRWYsSUFBSSxDQUFDRCxRQUFRSixNQUFNLEVBQUU7b0JBQ25CSyxRQUFRTCxNQUFNLEdBQUc7Z0JBQ25CLE9BQU8sSUFBSSxDQUFDLHdCQUF3Qk0sSUFBSSxDQUFDRixRQUFRSixNQUFNLEdBQUc7b0JBQ3hESyxRQUFRTCxNQUFNLEdBQUc7Z0JBQ25CLENBQUM7Z0JBRUQsSUFBSSxDQUFDSSxRQUFRSCxNQUFNLEVBQUU7b0JBQ25CSSxRQUFRSixNQUFNLEdBQUc7Z0JBQ25CLE9BQU8sSUFDTCxDQUFDLG9DQUFvQ0ssSUFBSSxDQUFDRixRQUFRSCxNQUFNLEdBQ3hEO29CQUNBSSxRQUFRSixNQUFNLEdBQ1o7Z0JBQ0osQ0FBQztnQkFFRCxPQUFPSTtZQUNUO1lBQ0FFLFVBQVUsQ0FBQ0gsaUJBQTJCO29CQUFsQixFQUFFSSxVQUFTLEVBQUU7Z0JBQy9CQTtnQkFFQUMsUUFBUUMsR0FBRyxDQUFDO2dCQUNaWixjQUFjLElBQUk7Z0JBQ2xCYSxXQUFXLElBQU1iLGNBQWMsS0FBSyxHQUFHO1lBQ3pDO3NCQUVDLHVCQVFDO29CQVJBLEVBQ0FjLE9BQU0sRUFDTkMsYUFBWSxFQUNaQyxhQUFZLEVBQ1pDLFdBQVUsRUFDVkMsT0FBTSxFQUNOQyxRQUFPLEVBQ1I7dUJBQ0MsOERBQUNDO29CQUFLQyxXQUFVO29CQUFhWixVQUFVTTs7d0JBQ3BDSixRQUFRQyxHQUFHLENBQUNNO3NDQUNiLDhEQUFDSTs7OENBQ0MsOERBQUNDO29DQUFNQyxTQUFROzhDQUFTOzs7Ozs7OENBQ3hCLDhEQUFDQztvQ0FDQ0MsTUFBSztvQ0FDTEMsTUFBSztvQ0FDTEMsSUFBRztvQ0FDSEMsYUFBWTtvQ0FDWkMsT0FBT2hCLE9BQU9aLE1BQU07b0NBQ3BCNkIsVUFBVWY7b0NBQ1ZnQixRQUFRZjs7Ozs7O2dDQUdURSxRQUFRakIsTUFBTSxJQUFJZ0IsT0FBT2hCLE1BQU0sa0JBQzlCLDhEQUFDb0I7b0NBQUlELFdBQVU7OENBQVNILE9BQU9oQixNQUFNOzs7Ozs7Ozs7Ozs7c0NBR3pDLDhEQUFDb0I7OzhDQUNDLDhEQUFDQztvQ0FBTUMsU0FBUTs4Q0FBUzs7Ozs7OzhDQUN4Qiw4REFBQ0M7b0NBQ0NDLE1BQUs7b0NBQ0xDLE1BQUs7b0NBQ0xDLElBQUc7b0NBQ0hDLGFBQVk7b0NBQ1pDLE9BQU9oQixPQUFPWCxNQUFNO29DQUNwQjRCLFVBQVVmO29DQUNWZ0IsUUFBUWY7Ozs7OztnQ0FFVEMsT0FBT2YsTUFBTSxrQkFDWiw4REFBQ21CO29DQUFJRCxXQUFVOzhDQUFTRixRQUFRaEIsTUFBTSxJQUFJZSxPQUFPZixNQUFNOzs7Ozs7Ozs7Ozs7c0NBRzNELDhEQUFDbUI7OzhDQUNDLDhEQUFDQztvQ0FBTUMsU0FBUTs4Q0FBUTs7Ozs7OzhDQUN2Qiw4REFBQ0M7b0NBQ0NDLE1BQUs7b0NBQ0xDLE1BQUs7b0NBQ0xDLElBQUc7b0NBQ0hDLGFBQVk7b0NBQ1pDLE9BQU9oQixPQUFPVixNQUFNO29DQUNwQjRCLFFBQVFmOzs7Ozs7Ozs7Ozs7c0NBR1osOERBQUNnQjs0QkFBT1AsTUFBSztzQ0FBUzs7Ozs7O3dCQUNyQjNCLDRCQUNDLDhEQUFDbUM7NEJBQUViLFdBQVU7c0NBQVE7Ozs7Ozs7Ozs7OztZQUVuQjs7Ozs7OztBQUtoQjtHQW5HTXZCO0tBQUFBO0FBb0dOLCtEQUFlQSxVQUFVQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL2Zvcm11bGFyaW8uanM/OGVlYSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBGb3JtaWsgfSBmcm9tIFwiZm9ybWlrXCI7XHJcbmltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcblxyXG5jb25zdCBGb3JtdWxhcmlvID0gKCkgPT4ge1xyXG4gIGNvbnN0IFtmb3JtdWxhcmlvLCBzZXRGb3JtdWxhcmlvXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICByZXR1cm4gKFxyXG4gICAgPD5cclxuICAgICAgPEZvcm1pa1xyXG4gICAgICAgIGluaXRpYWxWYWx1ZXM9e3tcclxuICAgICAgICAgIG5vbWJyZTogXCJcIixcclxuICAgICAgICAgIGNvcnJlbzogXCJcIixcclxuICAgICAgICAgIGNvcnJlMjogXCJwYWJsb29iZWxhckBnbWFpbC5jb21cIixcclxuICAgICAgICB9fVxyXG4gICAgICAgIHZhbGlkYXRlPXsodmFsb3JlcykgPT4ge1xyXG4gICAgICAgICAgbGV0IGVycm9yZXMgPSB7fTtcclxuXHJcbiAgICAgICAgICBpZiAoIXZhbG9yZXMubm9tYnJlKSB7XHJcbiAgICAgICAgICAgIGVycm9yZXMubm9tYnJlID0gXCJQb3IgZmF2b3IgcG9uZXIgdW4gbm9tYnJlXCI7XHJcbiAgICAgICAgICB9IGVsc2UgaWYgKCEvXlthLXpBLVrDgS3Dv1xcc117MSw0MH0kLy50ZXN0KHZhbG9yZXMubm9tYnJlKSkge1xyXG4gICAgICAgICAgICBlcnJvcmVzLm5vbWJyZSA9IFwiRWwgbm9tYnJlIHNvbG8gcHVlZGUgY29udGVuZXIgbGV0cmFzIHkgZXNwYWNpb3NcIjtcclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICBpZiAoIXZhbG9yZXMuY29ycmVvKSB7XHJcbiAgICAgICAgICAgIGVycm9yZXMuY29ycmVvID0gXCJQb3IgZmF2b3IgaW5ncmVzYXIgdW4gY29ycmVvIGVsZWN0cm9uaWNvXCI7XHJcbiAgICAgICAgICB9IGVsc2UgaWYgKFxyXG4gICAgICAgICAgICAhL15bYS16QS1aMC05Xy4rLV0rQFthLXpBLVowLTktLl0rJC8udGVzdCh2YWxvcmVzLmNvcnJlbylcclxuICAgICAgICAgICkge1xyXG4gICAgICAgICAgICBlcnJvcmVzLmNvcnJlbyA9XHJcbiAgICAgICAgICAgICAgXCJFbCBjb3JyZW8gc29sbyBwdWVkZSBjb250ZW5lciBsZXRyYXMsIG51bWVyb3MsIHB1bnRvcywgZ3Vpb25lcyB5IGd1aW9uIGJham9cIjtcclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICByZXR1cm4gZXJyb3JlcztcclxuICAgICAgICB9fVxyXG4gICAgICAgIG9uU3VibWl0PXsodmFsb3JlcywgeyByZXNldEZvcm0gfSkgPT4ge1xyXG4gICAgICAgICAgcmVzZXRGb3JtKCk7XHJcblxyXG4gICAgICAgICAgY29uc29sZS5sb2coXCJGb3JtdWxhcmlvIGVudmlhZG8hXCIpO1xyXG4gICAgICAgICAgc2V0Rm9ybXVsYXJpbyh0cnVlKTtcclxuICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4gc2V0Rm9ybXVsYXJpbyhmYWxzZSksIDUwMDApO1xyXG4gICAgICAgIH19XHJcbiAgICAgID5cclxuICAgICAgICB7KHtcclxuICAgICAgICAgIHZhbHVlcyxcclxuICAgICAgICAgIGhhbmRsZVN1Ym1pdCxcclxuICAgICAgICAgIGhhbmRsZUNoYW5nZSxcclxuICAgICAgICAgIGhhbmRsZUJsdXIsXHJcbiAgICAgICAgICBlcnJvcnMsXHJcbiAgICAgICAgICB0b3VjaGVkLFxyXG4gICAgICAgIH0pID0+IChcclxuICAgICAgICAgIDxmb3JtIGNsYXNzTmFtZT1cImZvcm11bGFyaW9cIiBvblN1Ym1pdD17aGFuZGxlU3VibWl0fT5cclxuICAgICAgICAgICAge2NvbnNvbGUubG9nKGVycm9ycyl9XHJcbiAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJub21icmVcIj5Ob21icmU8L2xhYmVsPlxyXG4gICAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxyXG4gICAgICAgICAgICAgICAgbmFtZT1cIm5vbWJyZVwiXHJcbiAgICAgICAgICAgICAgICBpZD1cIm5vbWJyZVwiXHJcbiAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIk5vbWJyZS4uLlwiXHJcbiAgICAgICAgICAgICAgICB2YWx1ZT17dmFsdWVzLm5vbWJyZX1cclxuICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2V9XHJcbiAgICAgICAgICAgICAgICBvbkJsdXI9e2hhbmRsZUJsdXJ9XHJcbiAgICAgICAgICAgICAgLz5cclxuXHJcbiAgICAgICAgICAgICAge3RvdWNoZWQubm9tYnJlICYmIGVycm9ycy5ub21icmUgJiYgKFxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJlcnJvclwiPntlcnJvcnMubm9tYnJlfTwvZGl2PlxyXG4gICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwiY29ycmVvXCI+VHUgRW1haWw8L2xhYmVsPlxyXG4gICAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxyXG4gICAgICAgICAgICAgICAgbmFtZT1cImNvcnJlb1wiXHJcbiAgICAgICAgICAgICAgICBpZD1cImNvcnJlb1wiXHJcbiAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIlwiXHJcbiAgICAgICAgICAgICAgICB2YWx1ZT17dmFsdWVzLmNvcnJlb31cclxuICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2V9XHJcbiAgICAgICAgICAgICAgICBvbkJsdXI9e2hhbmRsZUJsdXJ9XHJcbiAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICB7ZXJyb3JzLmNvcnJlbyAmJiAoXHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImVycm9yXCI+e3RvdWNoZWQuY29ycmVvICYmIGVycm9ycy5jb3JyZW99PC9kaXY+XHJcbiAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJjb3JyZVwiPkVtYWlsPC9sYWJlbD5cclxuICAgICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcclxuICAgICAgICAgICAgICAgIG5hbWU9XCJjb3JyZW9cIlxyXG4gICAgICAgICAgICAgICAgaWQ9XCJjb3JyZW9cIlxyXG4gICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJcIlxyXG4gICAgICAgICAgICAgICAgdmFsdWU9e3ZhbHVlcy5jb3JyZTJ9XHJcbiAgICAgICAgICAgICAgICBvbkJsdXI9e2hhbmRsZUJsdXJ9XHJcbiAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxidXR0b24gdHlwZT1cInN1Ym1pdFwiPkVudmlhcjwvYnV0dG9uPlxyXG4gICAgICAgICAgICB7Zm9ybXVsYXJpbyAmJiAoXHJcbiAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiZXhpdG9cIj5Gb3JtdWxhcmlvIGVudmlhZG8gY29uIGV4aXRvPC9wPlxyXG4gICAgICAgICAgICApfVxyXG4gICAgICAgICAgPC9mb3JtPlxyXG4gICAgICAgICl9XHJcbiAgICAgIDwvRm9ybWlrPlxyXG4gICAgPC8+XHJcbiAgKTtcclxufTtcclxuZXhwb3J0IGRlZmF1bHQgRm9ybXVsYXJpbztcclxuIl0sIm5hbWVzIjpbIkZvcm1payIsInVzZVN0YXRlIiwiRm9ybXVsYXJpbyIsImZvcm11bGFyaW8iLCJzZXRGb3JtdWxhcmlvIiwiaW5pdGlhbFZhbHVlcyIsIm5vbWJyZSIsImNvcnJlbyIsImNvcnJlMiIsInZhbGlkYXRlIiwidmFsb3JlcyIsImVycm9yZXMiLCJ0ZXN0Iiwib25TdWJtaXQiLCJyZXNldEZvcm0iLCJjb25zb2xlIiwibG9nIiwic2V0VGltZW91dCIsInZhbHVlcyIsImhhbmRsZVN1Ym1pdCIsImhhbmRsZUNoYW5nZSIsImhhbmRsZUJsdXIiLCJlcnJvcnMiLCJ0b3VjaGVkIiwiZm9ybSIsImNsYXNzTmFtZSIsImRpdiIsImxhYmVsIiwiaHRtbEZvciIsImlucHV0IiwidHlwZSIsIm5hbWUiLCJpZCIsInBsYWNlaG9sZGVyIiwidmFsdWUiLCJvbkNoYW5nZSIsIm9uQmx1ciIsImJ1dHRvbiIsInAiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/formulario.js\n"));

/***/ })

});