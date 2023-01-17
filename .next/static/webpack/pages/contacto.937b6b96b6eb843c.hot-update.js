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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _emailjs_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @emailjs/browser */ \"./node_modules/@emailjs/browser/es/index.js\");\n\nvar _s = $RefreshSig$();\n\nconst FormularioTwo = ()=>{\n    _s();\n    const [formulario, setFormulario] = useState(false);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Formik, {\n            initialValues: {\n                nombre: \"\",\n                correo: \"\",\n                corre2: \"pabloobelar@gmail.com\"\n            },\n            validate: (valores)=>{\n                let errores = {};\n                if (!valores.nombre) {\n                    errores.nombre = \"Por favor poner un nombre\";\n                } else if (!/^[a-zA-ZÁ-ÿ\\s]{1,40}$/.test(valores.nombre)) {\n                    errores.nombre = \"El nombre solo puede contener letras y espacios\";\n                }\n                if (!valores.correo) {\n                    errores.correo = \"Por favor ingresar un correo electronico\";\n                } else if (!/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-.]+$/.test(valores.correo)) {\n                    errores.correo = \"El correo solo puede contener letras, numeros, puntos, guiones y guion bajo\";\n                }\n                return errores;\n            },\n            onSubmit: (valores, param)=>{\n                let { resetForm  } = param;\n                resetForm();\n                console.log(\"Formulario enviado!\");\n                setFormulario(true);\n                setTimeout(()=>setFormulario(false), 5000);\n            },\n            children: (param)=>/*#__PURE__*/ {\n                let { values , handleSubmit , handleChange , handleBlur , errors , touched  } = param;\n                return (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n                    className: \"formulario\",\n                    onSubmit: handleSubmit,\n                    children: [\n                        console.log(errors),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                    htmlFor: \"nombre\",\n                                    children: \"Nombre\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\pablo\\\\OneDrive\\\\Escritorio\\\\Practicas\\\\portfolio\\\\pages\\\\formulario2.js\",\n                                    lineNumber: 53,\n                                    columnNumber: 15\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                    type: \"text\",\n                                    name: \"nombre\",\n                                    id: \"nombre\",\n                                    placeholder: \"Nombre...\",\n                                    value: values.nombre,\n                                    onChange: handleChange,\n                                    onBlur: handleBlur\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\pablo\\\\OneDrive\\\\Escritorio\\\\Practicas\\\\portfolio\\\\pages\\\\formulario2.js\",\n                                    lineNumber: 54,\n                                    columnNumber: 15\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(ErrorMessage, {\n                                    name: \"nombre\",\n                                    component: ()=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                            className: \"error\",\n                                            children: errors.nombre\n                                        }, void 0, false, void 0, void 0)\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\pablo\\\\OneDrive\\\\Escritorio\\\\Practicas\\\\portfolio\\\\pages\\\\formulario2.js\",\n                                    lineNumber: 64,\n                                    columnNumber: 15\n                                }, undefined)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"C:\\\\Users\\\\pablo\\\\OneDrive\\\\Escritorio\\\\Practicas\\\\portfolio\\\\pages\\\\formulario2.js\",\n                            lineNumber: 52,\n                            columnNumber: 13\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Field, {\n                                name: \"mensaje\",\n                                as: \"textarea\",\n                                placeholder: \"Mensaje...\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\pablo\\\\OneDrive\\\\Escritorio\\\\Practicas\\\\portfolio\\\\pages\\\\formulario2.js\",\n                                lineNumber: 70,\n                                columnNumber: 15\n                            }, undefined)\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\pablo\\\\OneDrive\\\\Escritorio\\\\Practicas\\\\portfolio\\\\pages\\\\formulario2.js\",\n                            lineNumber: 69,\n                            columnNumber: 13\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                    htmlFor: \"correo\",\n                                    children: \"Tu Email\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\pablo\\\\OneDrive\\\\Escritorio\\\\Practicas\\\\portfolio\\\\pages\\\\formulario2.js\",\n                                    lineNumber: 78,\n                                    columnNumber: 15\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                    type: \"text\",\n                                    name: \"correo\",\n                                    id: \"correo\",\n                                    placeholder: \"\",\n                                    value: values.correo,\n                                    onChange: handleChange,\n                                    onBlur: handleBlur\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\pablo\\\\OneDrive\\\\Escritorio\\\\Practicas\\\\portfolio\\\\pages\\\\formulario2.js\",\n                                    lineNumber: 79,\n                                    columnNumber: 15\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(ErrorMessage, {\n                                    name: \"correo\",\n                                    component: ()=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                            className: \"error\",\n                                            children: errors.correo\n                                        }, void 0, false, void 0, void 0)\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\pablo\\\\OneDrive\\\\Escritorio\\\\Practicas\\\\portfolio\\\\pages\\\\formulario2.js\",\n                                    lineNumber: 88,\n                                    columnNumber: 15\n                                }, undefined)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"C:\\\\Users\\\\pablo\\\\OneDrive\\\\Escritorio\\\\Practicas\\\\portfolio\\\\pages\\\\formulario2.js\",\n                            lineNumber: 77,\n                            columnNumber: 13\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                    htmlFor: \"corre\",\n                                    children: \"Email\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\pablo\\\\OneDrive\\\\Escritorio\\\\Practicas\\\\portfolio\\\\pages\\\\formulario2.js\",\n                                    lineNumber: 94,\n                                    columnNumber: 15\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                    type: \"text\",\n                                    name: \"correo\",\n                                    id: \"correo\",\n                                    placeholder: \"\",\n                                    value: values.corre2,\n                                    onBlur: handleBlur\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\pablo\\\\OneDrive\\\\Escritorio\\\\Practicas\\\\portfolio\\\\pages\\\\formulario2.js\",\n                                    lineNumber: 95,\n                                    columnNumber: 15\n                                }, undefined)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"C:\\\\Users\\\\pablo\\\\OneDrive\\\\Escritorio\\\\Practicas\\\\portfolio\\\\pages\\\\formulario2.js\",\n                            lineNumber: 93,\n                            columnNumber: 13\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                            type: \"submit\",\n                            children: \"Enviar\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\pablo\\\\OneDrive\\\\Escritorio\\\\Practicas\\\\portfolio\\\\pages\\\\formulario2.js\",\n                            lineNumber: 105,\n                            columnNumber: 13\n                        }, undefined),\n                        formulario && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                            className: \"exito\",\n                            children: \"Formulario enviado con exito\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\pablo\\\\OneDrive\\\\Escritorio\\\\Practicas\\\\portfolio\\\\pages\\\\formulario2.js\",\n                            lineNumber: 107,\n                            columnNumber: 15\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\pablo\\\\OneDrive\\\\Escritorio\\\\Practicas\\\\portfolio\\\\pages\\\\formulario2.js\",\n                    lineNumber: 50,\n                    columnNumber: 11\n                }, undefined);\n            }\n        }, void 0, false, {\n            fileName: \"C:\\\\Users\\\\pablo\\\\OneDrive\\\\Escritorio\\\\Practicas\\\\portfolio\\\\pages\\\\formulario2.js\",\n            lineNumber: 7,\n            columnNumber: 7\n        }, undefined)\n    }, void 0, false);\n};\n_s(FormularioTwo, \"DKmFO14N9ulMNyjnjzcqGcTXCTQ=\");\n_c = FormularioTwo;\n/* harmony default export */ __webpack_exports__[\"default\"] = (FormularioTwo);\nvar _c;\n$RefreshReg$(_c, \"FormularioTwo\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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d2VicGFjazovL19OX0UvLi9wYWdlcy9mb3JtdWxhcmlvMi5qcz85YjRmIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBlbWFpbGpzIGZyb20gXCJAZW1haWxqcy9icm93c2VyXCI7XHJcblxyXG5jb25zdCBGb3JtdWxhcmlvVHdvID0gKCkgPT4ge1xyXG4gIGNvbnN0IFtmb3JtdWxhcmlvLCBzZXRGb3JtdWxhcmlvXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICByZXR1cm4gKFxyXG4gICAgPD5cclxuICAgICAgPEZvcm1pa1xyXG4gICAgICAgIGluaXRpYWxWYWx1ZXM9e3tcclxuICAgICAgICAgIG5vbWJyZTogXCJcIixcclxuICAgICAgICAgIGNvcnJlbzogXCJcIixcclxuICAgICAgICAgIGNvcnJlMjogXCJwYWJsb29iZWxhckBnbWFpbC5jb21cIixcclxuICAgICAgICB9fVxyXG4gICAgICAgIHZhbGlkYXRlPXsodmFsb3JlcykgPT4ge1xyXG4gICAgICAgICAgbGV0IGVycm9yZXMgPSB7fTtcclxuXHJcbiAgICAgICAgICBpZiAoIXZhbG9yZXMubm9tYnJlKSB7XHJcbiAgICAgICAgICAgIGVycm9yZXMubm9tYnJlID0gXCJQb3IgZmF2b3IgcG9uZXIgdW4gbm9tYnJlXCI7XHJcbiAgICAgICAgICB9IGVsc2UgaWYgKCEvXlthLXpBLVrDgS3Dv1xcc117MSw0MH0kLy50ZXN0KHZhbG9yZXMubm9tYnJlKSkge1xyXG4gICAgICAgICAgICBlcnJvcmVzLm5vbWJyZSA9IFwiRWwgbm9tYnJlIHNvbG8gcHVlZGUgY29udGVuZXIgbGV0cmFzIHkgZXNwYWNpb3NcIjtcclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICBpZiAoIXZhbG9yZXMuY29ycmVvKSB7XHJcbiAgICAgICAgICAgIGVycm9yZXMuY29ycmVvID0gXCJQb3IgZmF2b3IgaW5ncmVzYXIgdW4gY29ycmVvIGVsZWN0cm9uaWNvXCI7XHJcbiAgICAgICAgICB9IGVsc2UgaWYgKFxyXG4gICAgICAgICAgICAhL15bYS16QS1aMC05Xy4rLV0rQFthLXpBLVowLTktLl0rJC8udGVzdCh2YWxvcmVzLmNvcnJlbylcclxuICAgICAgICAgICkge1xyXG4gICAgICAgICAgICBlcnJvcmVzLmNvcnJlbyA9XHJcbiAgICAgICAgICAgICAgXCJFbCBjb3JyZW8gc29sbyBwdWVkZSBjb250ZW5lciBsZXRyYXMsIG51bWVyb3MsIHB1bnRvcywgZ3Vpb25lcyB5IGd1aW9uIGJham9cIjtcclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICByZXR1cm4gZXJyb3JlcztcclxuICAgICAgICB9fVxyXG4gICAgICAgIG9uU3VibWl0PXsodmFsb3JlcywgeyByZXNldEZvcm0gfSkgPT4ge1xyXG4gICAgICAgICAgcmVzZXRGb3JtKCk7XHJcblxyXG4gICAgICAgICAgY29uc29sZS5sb2coXCJGb3JtdWxhcmlvIGVudmlhZG8hXCIpO1xyXG4gICAgICAgICAgc2V0Rm9ybXVsYXJpbyh0cnVlKTtcclxuICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4gc2V0Rm9ybXVsYXJpbyhmYWxzZSksIDUwMDApO1xyXG4gICAgICAgIH19XHJcbiAgICAgID5cclxuICAgICAgICB7KHtcclxuICAgICAgICAgIHZhbHVlcyxcclxuICAgICAgICAgIGhhbmRsZVN1Ym1pdCxcclxuICAgICAgICAgIGhhbmRsZUNoYW5nZSxcclxuICAgICAgICAgIGhhbmRsZUJsdXIsXHJcblxyXG4gICAgICAgICAgZXJyb3JzLFxyXG4gICAgICAgICAgdG91Y2hlZCxcclxuICAgICAgICB9KSA9PiAoXHJcbiAgICAgICAgICA8Zm9ybSBjbGFzc05hbWU9XCJmb3JtdWxhcmlvXCIgb25TdWJtaXQ9e2hhbmRsZVN1Ym1pdH0+XHJcbiAgICAgICAgICAgIHtjb25zb2xlLmxvZyhlcnJvcnMpfVxyXG4gICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwibm9tYnJlXCI+Tm9tYnJlPC9sYWJlbD5cclxuICAgICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcclxuICAgICAgICAgICAgICAgIG5hbWU9XCJub21icmVcIlxyXG4gICAgICAgICAgICAgICAgaWQ9XCJub21icmVcIlxyXG4gICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJOb21icmUuLi5cIlxyXG4gICAgICAgICAgICAgICAgdmFsdWU9e3ZhbHVlcy5ub21icmV9XHJcbiAgICAgICAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlQ2hhbmdlfVxyXG4gICAgICAgICAgICAgICAgb25CbHVyPXtoYW5kbGVCbHVyfVxyXG4gICAgICAgICAgICAgIC8+XHJcblxyXG4gICAgICAgICAgICAgIDxFcnJvck1lc3NhZ2VcclxuICAgICAgICAgICAgICAgIG5hbWU9XCJub21icmVcIlxyXG4gICAgICAgICAgICAgICAgY29tcG9uZW50PXsoKSA9PiA8ZGl2IGNsYXNzTmFtZT1cImVycm9yXCI+e2Vycm9ycy5ub21icmV9PC9kaXY+fVxyXG4gICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgIDxGaWVsZFxyXG4gICAgICAgICAgICAgICAgbmFtZT1cIm1lbnNhamVcIlxyXG4gICAgICAgICAgICAgICAgYXM9XCJ0ZXh0YXJlYVwiXHJcbiAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIk1lbnNhamUuLi5cIlxyXG4gICAgICAgICAgICAgID48L0ZpZWxkPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJjb3JyZW9cIj5UdSBFbWFpbDwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXHJcbiAgICAgICAgICAgICAgICBuYW1lPVwiY29ycmVvXCJcclxuICAgICAgICAgICAgICAgIGlkPVwiY29ycmVvXCJcclxuICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiXCJcclxuICAgICAgICAgICAgICAgIHZhbHVlPXt2YWx1ZXMuY29ycmVvfVxyXG4gICAgICAgICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZUNoYW5nZX1cclxuICAgICAgICAgICAgICAgIG9uQmx1cj17aGFuZGxlQmx1cn1cclxuICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgIDxFcnJvck1lc3NhZ2VcclxuICAgICAgICAgICAgICAgIG5hbWU9XCJjb3JyZW9cIlxyXG4gICAgICAgICAgICAgICAgY29tcG9uZW50PXsoKSA9PiA8ZGl2IGNsYXNzTmFtZT1cImVycm9yXCI+e2Vycm9ycy5jb3JyZW99PC9kaXY+fVxyXG4gICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwiY29ycmVcIj5FbWFpbDwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXHJcbiAgICAgICAgICAgICAgICBuYW1lPVwiY29ycmVvXCJcclxuICAgICAgICAgICAgICAgIGlkPVwiY29ycmVvXCJcclxuICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiXCJcclxuICAgICAgICAgICAgICAgIHZhbHVlPXt2YWx1ZXMuY29ycmUyfVxyXG4gICAgICAgICAgICAgICAgb25CbHVyPXtoYW5kbGVCbHVyfVxyXG4gICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwic3VibWl0XCI+RW52aWFyPC9idXR0b24+XHJcbiAgICAgICAgICAgIHtmb3JtdWxhcmlvICYmIChcclxuICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJleGl0b1wiPkZvcm11bGFyaW8gZW52aWFkbyBjb24gZXhpdG88L3A+XHJcbiAgICAgICAgICAgICl9XHJcbiAgICAgICAgICA8L2Zvcm0+XHJcbiAgICAgICAgKX1cclxuICAgICAgPC9Gb3JtaWs+XHJcbiAgICA8Lz5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgRm9ybXVsYXJpb1R3bztcclxuIl0sIm5hbWVzIjpbImVtYWlsanMiLCJGb3JtdWxhcmlvVHdvIiwiZm9ybXVsYXJpbyIsInNldEZvcm11bGFyaW8iLCJ1c2VTdGF0ZSIsIkZvcm1payIsImluaXRpYWxWYWx1ZXMiLCJub21icmUiLCJjb3JyZW8iLCJjb3JyZTIiLCJ2YWxpZGF0ZSIsInZhbG9yZXMiLCJlcnJvcmVzIiwidGVzdCIsIm9uU3VibWl0IiwicmVzZXRGb3JtIiwiY29uc29sZSIsImxvZyIsInNldFRpbWVvdXQiLCJ2YWx1ZXMiLCJoYW5kbGVTdWJtaXQiLCJoYW5kbGVDaGFuZ2UiLCJoYW5kbGVCbHVyIiwiZXJyb3JzIiwidG91Y2hlZCIsImZvcm0iLCJjbGFzc05hbWUiLCJkaXYiLCJsYWJlbCIsImh0bWxGb3IiLCJpbnB1dCIsInR5cGUiLCJuYW1lIiwiaWQiLCJwbGFjZWhvbGRlciIsInZhbHVlIiwib25DaGFuZ2UiLCJvbkJsdXIiLCJFcnJvck1lc3NhZ2UiLCJjb21wb25lbnQiLCJGaWVsZCIsImFzIiwiYnV0dG9uIiwicCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/formulario2.js\n"));

/***/ })

});