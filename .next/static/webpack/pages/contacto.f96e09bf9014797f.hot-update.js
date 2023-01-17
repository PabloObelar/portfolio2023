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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var formik__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! formik */ \"./node_modules/formik/dist/formik.esm.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n\nvar _s = $RefreshSig$();\n\n\nconst Formulario = ()=>{\n    _s();\n    const [formulario, setFormulario] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(formik__WEBPACK_IMPORTED_MODULE_1__.Formik, {\n            initialValues: {\n                mensaje: \"\",\n                nombre: \"\",\n                correo: \"\",\n                corre2: \"pabloobelar@gmail.com\"\n            },\n            validate: (valores)=>{\n                let errores = {};\n                if (!valores.nombre) {\n                    errores.nombre = \"Por favor poner un nombre\";\n                } else if (!/^[a-zA-ZÁ-ÿ\\s]{1,40}$/.test(valores.nombre)) {\n                    errores.nombre = \"El nombre solo puede contener letras y espacios\";\n                }\n                if (!valores.correo) {\n                    errores.correo = \"Por favor ingresar un correo electronico\";\n                } else if (!/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-.]+$/.test(valores.correo)) {\n                    errores.correo = \"El correo solo puede contener letras, numeros, puntos, guiones y guion bajo\";\n                }\n                if (!valores.mensaje) {\n                    errores.mensaje = \"Por favor poner un comentario\";\n                } else if (!/^[a-zA-ZÁ-ÿ\\s]{1,40}$/.test(valores.nombre)) {\n                    errores.mensaje = \"El mensaje solo puede contener letras y espacios\";\n                }\n                return errores;\n            },\n            onSubmit: (valores, param)=>{\n                let { resetForm  } = param;\n                resetForm();\n                console.log(\"Formulario enviado!\");\n                setFormulario(true);\n                setTimeout(()=>setFormulario(false), 5000);\n            },\n            children: (param)=>/*#__PURE__*/ {\n                let { values , handleSubmit , handleChange , handleBlur , errors , touched  } = param;\n                return (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n                    className: \"formulario\",\n                    onSubmit: handleSubmit,\n                    children: [\n                        console.log(errors),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                    htmlFor: \"nombre\",\n                                    children: \"Nombre\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\pablo\\\\OneDrive\\\\Escritorio\\\\Practicas\\\\portfolio\\\\pages\\\\formulario.js\",\n                                    lineNumber: 109,\n                                    columnNumber: 15\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                    type: \"text\",\n                                    name: \"nombre\",\n                                    id: \"nombre\",\n                                    placeholder: \"Nombre...\",\n                                    value: values.nombre,\n                                    onChange: handleChange,\n                                    onBlur: handleBlur\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\pablo\\\\OneDrive\\\\Escritorio\\\\Practicas\\\\portfolio\\\\pages\\\\formulario.js\",\n                                    lineNumber: 110,\n                                    columnNumber: 15\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(formik__WEBPACK_IMPORTED_MODULE_1__.ErrorMessage, {\n                                    name: \"nombre\",\n                                    component: ()=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                            className: \"error\",\n                                            children: errors.nombre\n                                        }, void 0, false, void 0, void 0)\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\pablo\\\\OneDrive\\\\Escritorio\\\\Practicas\\\\portfolio\\\\pages\\\\formulario.js\",\n                                    lineNumber: 120,\n                                    columnNumber: 15\n                                }, undefined)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"C:\\\\Users\\\\pablo\\\\OneDrive\\\\Escritorio\\\\Practicas\\\\portfolio\\\\pages\\\\formulario.js\",\n                            lineNumber: 108,\n                            columnNumber: 13\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(formik__WEBPACK_IMPORTED_MODULE_1__.Field, {\n                                    name: \"mensaje\",\n                                    as: \"textarea\",\n                                    placeholder: \"Mensaje...\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\pablo\\\\OneDrive\\\\Escritorio\\\\Practicas\\\\portfolio\\\\pages\\\\formulario.js\",\n                                    lineNumber: 126,\n                                    columnNumber: 15\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(formik__WEBPACK_IMPORTED_MODULE_1__.ErrorMessage, {\n                                    name: \"mensaje\",\n                                    component: ()=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                            className: \"error\",\n                                            children: errors.mensaje\n                                        }, void 0, false, void 0, void 0)\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\pablo\\\\OneDrive\\\\Escritorio\\\\Practicas\\\\portfolio\\\\pages\\\\formulario.js\",\n                                    lineNumber: 131,\n                                    columnNumber: 15\n                                }, undefined)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"C:\\\\Users\\\\pablo\\\\OneDrive\\\\Escritorio\\\\Practicas\\\\portfolio\\\\pages\\\\formulario.js\",\n                            lineNumber: 125,\n                            columnNumber: 13\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                    htmlFor: \"correo\",\n                                    children: \"Tu Email\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\pablo\\\\OneDrive\\\\Escritorio\\\\Practicas\\\\portfolio\\\\pages\\\\formulario.js\",\n                                    lineNumber: 138,\n                                    columnNumber: 15\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                    type: \"text\",\n                                    name: \"correo\",\n                                    id: \"correo\",\n                                    placeholder: \"\",\n                                    value: values.correo,\n                                    onChange: handleChange,\n                                    onBlur: handleBlur\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\pablo\\\\OneDrive\\\\Escritorio\\\\Practicas\\\\portfolio\\\\pages\\\\formulario.js\",\n                                    lineNumber: 139,\n                                    columnNumber: 15\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(formik__WEBPACK_IMPORTED_MODULE_1__.ErrorMessage, {\n                                    name: \"correo\",\n                                    component: ()=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                            className: \"error\",\n                                            children: errors.correo\n                                        }, void 0, false, void 0, void 0)\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\pablo\\\\OneDrive\\\\Escritorio\\\\Practicas\\\\portfolio\\\\pages\\\\formulario.js\",\n                                    lineNumber: 148,\n                                    columnNumber: 15\n                                }, undefined)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"C:\\\\Users\\\\pablo\\\\OneDrive\\\\Escritorio\\\\Practicas\\\\portfolio\\\\pages\\\\formulario.js\",\n                            lineNumber: 137,\n                            columnNumber: 13\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                    htmlFor: \"corre\",\n                                    children: \"Email\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\pablo\\\\OneDrive\\\\Escritorio\\\\Practicas\\\\portfolio\\\\pages\\\\formulario.js\",\n                                    lineNumber: 154,\n                                    columnNumber: 15\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                    type: \"text\",\n                                    name: \"correo\",\n                                    id: \"correo\",\n                                    placeholder: \"\",\n                                    value: values.corre2,\n                                    onBlur: handleBlur\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\pablo\\\\OneDrive\\\\Escritorio\\\\Practicas\\\\portfolio\\\\pages\\\\formulario.js\",\n                                    lineNumber: 155,\n                                    columnNumber: 15\n                                }, undefined)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"C:\\\\Users\\\\pablo\\\\OneDrive\\\\Escritorio\\\\Practicas\\\\portfolio\\\\pages\\\\formulario.js\",\n                            lineNumber: 153,\n                            columnNumber: 13\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                            type: \"submit\",\n                            children: \"Enviar\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\pablo\\\\OneDrive\\\\Escritorio\\\\Practicas\\\\portfolio\\\\pages\\\\formulario.js\",\n                            lineNumber: 165,\n                            columnNumber: 13\n                        }, undefined),\n                        formulario && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                            className: \"exito\",\n                            children: \"Formulario enviado con exito\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\pablo\\\\OneDrive\\\\Escritorio\\\\Practicas\\\\portfolio\\\\pages\\\\formulario.js\",\n                            lineNumber: 167,\n                            columnNumber: 15\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\pablo\\\\OneDrive\\\\Escritorio\\\\Practicas\\\\portfolio\\\\pages\\\\formulario.js\",\n                    lineNumber: 106,\n                    columnNumber: 11\n                }, undefined);\n            }\n        }, void 0, false, {\n            fileName: \"C:\\\\Users\\\\pablo\\\\OneDrive\\\\Escritorio\\\\Practicas\\\\portfolio\\\\pages\\\\formulario.js\",\n            lineNumber: 8,\n            columnNumber: 7\n        }, undefined)\n    }, void 0, false);\n};\n_s(Formulario, \"DKmFO14N9ulMNyjnjzcqGcTXCTQ=\");\n_c = Formulario;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Formulario);\nvar _c;\n$RefreshReg$(_c, \"Formulario\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Qyw4REFBQ0M7b0NBQU1DLFNBQVE7OENBQVE7Ozs7Ozs4Q0FDdkIsOERBQUNDO29DQUNDQyxNQUFLO29DQUNMQyxNQUFLO29DQUNMQyxJQUFHO29DQUNIQyxhQUFZO29DQUNaQyxPQUFPaEIsT0FBT1YsTUFBTTtvQ0FDcEI0QixRQUFRZjs7Ozs7Ozs7Ozs7O3NDQUlaLDhEQUFDa0I7NEJBQU9ULE1BQUs7c0NBQVM7Ozs7Ozt3QkFDckI1Qiw0QkFDQyw4REFBQ3NDOzRCQUFFZixXQUFVO3NDQUFROzs7Ozs7Ozs7Ozs7WUFFbkI7Ozs7Ozs7QUFLaEI7R0ExS014QjtLQUFBQTtBQTJLTiwrREFBZUEsVUFBVUEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9mb3JtdWxhcmlvLmpzPzhlZWEiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRm9ybWlrLCBGaWVsZCwgRXJyb3JNZXNzYWdlIH0gZnJvbSBcImZvcm1pa1wiO1xyXG5pbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5cclxuY29uc3QgRm9ybXVsYXJpbyA9ICgpID0+IHtcclxuICBjb25zdCBbZm9ybXVsYXJpbywgc2V0Rm9ybXVsYXJpb10gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgcmV0dXJuIChcclxuICAgIDw+XHJcbiAgICAgIDxGb3JtaWtcclxuICAgICAgICBpbml0aWFsVmFsdWVzPXt7XHJcbiAgICAgICAgICBtZW5zYWplOiBcIlwiLFxyXG4gICAgICAgICAgbm9tYnJlOiBcIlwiLFxyXG4gICAgICAgICAgY29ycmVvOiBcIlwiLFxyXG4gICAgICAgICAgY29ycmUyOiBcInBhYmxvb2JlbGFyQGdtYWlsLmNvbVwiLFxyXG4gICAgICAgIH19XHJcbiAgICAgICAgdmFsaWRhdGU9eyh2YWxvcmVzKSA9PiB7XHJcbiAgICAgICAgICBsZXQgZXJyb3JlcyA9IHt9O1xyXG5cclxuICAgICAgICAgIGlmICghdmFsb3Jlcy5ub21icmUpIHtcclxuICAgICAgICAgICAgZXJyb3Jlcy5ub21icmUgPSBcIlBvciBmYXZvciBwb25lciB1biBub21icmVcIjtcclxuICAgICAgICAgIH0gZWxzZSBpZiAoIS9eW2EtekEtWsOBLcO/XFxzXXsxLDQwfSQvLnRlc3QodmFsb3Jlcy5ub21icmUpKSB7XHJcbiAgICAgICAgICAgIGVycm9yZXMubm9tYnJlID0gXCJFbCBub21icmUgc29sbyBwdWVkZSBjb250ZW5lciBsZXRyYXMgeSBlc3BhY2lvc1wiO1xyXG4gICAgICAgICAgfVxyXG5cclxuICAgICAgICAgIGlmICghdmFsb3Jlcy5jb3JyZW8pIHtcclxuICAgICAgICAgICAgZXJyb3Jlcy5jb3JyZW8gPSBcIlBvciBmYXZvciBpbmdyZXNhciB1biBjb3JyZW8gZWxlY3Ryb25pY29cIjtcclxuICAgICAgICAgIH0gZWxzZSBpZiAoXHJcbiAgICAgICAgICAgICEvXlthLXpBLVowLTlfListXStAW2EtekEtWjAtOS0uXSskLy50ZXN0KHZhbG9yZXMuY29ycmVvKVxyXG4gICAgICAgICAgKSB7XHJcbiAgICAgICAgICAgIGVycm9yZXMuY29ycmVvID1cclxuICAgICAgICAgICAgICBcIkVsIGNvcnJlbyBzb2xvIHB1ZWRlIGNvbnRlbmVyIGxldHJhcywgbnVtZXJvcywgcHVudG9zLCBndWlvbmVzIHkgZ3Vpb24gYmFqb1wiO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgaWYgKCF2YWxvcmVzLm1lbnNhamUpIHtcclxuICAgICAgICAgICAgZXJyb3Jlcy5tZW5zYWplID0gXCJQb3IgZmF2b3IgcG9uZXIgdW4gY29tZW50YXJpb1wiO1xyXG4gICAgICAgICAgfSBlbHNlIGlmICghL15bYS16QS1aw4Etw79cXHNdezEsNDB9JC8udGVzdCh2YWxvcmVzLm5vbWJyZSkpIHtcclxuICAgICAgICAgICAgZXJyb3Jlcy5tZW5zYWplID1cclxuICAgICAgICAgICAgICBcIkVsIG1lbnNhamUgc29sbyBwdWVkZSBjb250ZW5lciBsZXRyYXMgeSBlc3BhY2lvc1wiO1xyXG4gICAgICAgICAgfVxyXG5cclxuICAgICAgICAgIHJldHVybiBlcnJvcmVzO1xyXG4gICAgICAgIH19XHJcbiAgICAgICAgb25TdWJtaXQ9eyh2YWxvcmVzLCB7IHJlc2V0Rm9ybSB9KSA9PiB7XHJcbiAgICAgICAgICByZXNldEZvcm0oKTtcclxuXHJcbiAgICAgICAgICBjb25zb2xlLmxvZyhcIkZvcm11bGFyaW8gZW52aWFkbyFcIik7XHJcbiAgICAgICAgICBzZXRGb3JtdWxhcmlvKHRydWUpO1xyXG4gICAgICAgICAgc2V0VGltZW91dCgoKSA9PiBzZXRGb3JtdWxhcmlvKGZhbHNlKSwgNTAwMCk7XHJcbiAgICAgICAgfX1cclxuICAgICAgPlxyXG4gICAgICAgIHsvKlxyXG4gICAgICAgIHsoeyB2YWx1ZXMsIGVycm9ycywgaGFuZGxlQmx1ciB9KSA9PiAoXHJcbiAgICAgICAgICA8Rm9ybSBjbGFzc05hbWU9XCJmb3JtdWxhcmlvXCI+XHJcbiAgICAgICAgICAgIHtjb25zb2xlLmxvZyhlcnJvcnMpfVxyXG4gICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwibm9tYnJlXCI+Tm9tYnJlPC9sYWJlbD5cclxuICAgICAgICAgICAgICA8RmllbGRcclxuICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcclxuICAgICAgICAgICAgICAgIG5hbWU9XCJub21icmVcIlxyXG4gICAgICAgICAgICAgICAgaWQ9XCJub21icmVcIlxyXG4gICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJOb21icmUuLi5cIlxyXG4gICAgICAgICAgICAgIC8+XHJcblxyXG4gICAgICAgICAgICAgIDxFcnJvck1lc3NhZ2VcclxuICAgICAgICAgICAgICAgIG5hbWU9XCJub21icmVcIlxyXG4gICAgICAgICAgICAgICAgY29tcG9uZW50PXsoKSA9PiA8ZGl2IGNsYXNzTmFtZT1cImVycm9yXCI+e2Vycm9ycy5ub21icmV9PC9kaXY+fVxyXG4gICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtbWQtNFwiPlxyXG4gICAgICAgICAgICAgICAgPGxhYmVsPk1lbnNhamU8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgPEZpZWxkXHJcbiAgICAgICAgICAgICAgICAgIG5hbWU9XCJ0ZXh0YXJlYVwiXHJcbiAgICAgICAgICAgICAgICAgIGNvbHM9XCI0MFwiXHJcbiAgICAgICAgICAgICAgICAgIHJvdz1cIjEwXCJcclxuICAgICAgICAgICAgICAgICAgc3R5bGU9e3sgd2lkdGg6IFwiNDAwcHhcIiwgaGVpZ2h0OiBcIjQwMHB4XCIgfX1cclxuICAgICAgICAgICAgICAgID48L0ZpZWxkPlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cImNvcnJlb1wiPlR1IEVtYWlsPC9sYWJlbD5cclxuICAgICAgICAgICAgICA8RmllbGQgdHlwZT1cInRleHRcIiBuYW1lPVwiY29ycmVvXCIgaWQ9XCJjb3JyZW9cIiBwbGFjZWhvbGRlcj1cIlwiIC8+XHJcbiAgICAgICAgICAgICAgPEVycm9yTWVzc2FnZVxyXG4gICAgICAgICAgICAgICAgbmFtZT1cImNvcnJlb1wiXHJcbiAgICAgICAgICAgICAgICBjb21wb25lbnQ9eygpID0+IDxkaXYgY2xhc3NOYW1lPVwiZXJyb3JcIj57ZXJyb3JzLmNvcnJlb308L2Rpdj59XHJcbiAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJjb3JyZVwiPkVtYWlsPC9sYWJlbD5cclxuICAgICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcclxuICAgICAgICAgICAgICAgIG5hbWU9XCJjb3JyZW9cIlxyXG4gICAgICAgICAgICAgICAgaWQ9XCJjb3JyZW9cIlxyXG4gICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJcIlxyXG4gICAgICAgICAgICAgICAgdmFsdWU9e3ZhbHVlcy5jb3JyZTJ9XHJcbiAgICAgICAgICAgICAgICBvbkJsdXI9e2hhbmRsZUJsdXJ9XHJcbiAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgKi99XHJcblxyXG4gICAgICAgIHsoe1xyXG4gICAgICAgICAgdmFsdWVzLFxyXG4gICAgICAgICAgaGFuZGxlU3VibWl0LFxyXG4gICAgICAgICAgaGFuZGxlQ2hhbmdlLFxyXG4gICAgICAgICAgaGFuZGxlQmx1cixcclxuXHJcbiAgICAgICAgICBlcnJvcnMsXHJcbiAgICAgICAgICB0b3VjaGVkLFxyXG4gICAgICAgIH0pID0+IChcclxuICAgICAgICAgIDxmb3JtIGNsYXNzTmFtZT1cImZvcm11bGFyaW9cIiBvblN1Ym1pdD17aGFuZGxlU3VibWl0fT5cclxuICAgICAgICAgICAge2NvbnNvbGUubG9nKGVycm9ycyl9XHJcbiAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJub21icmVcIj5Ob21icmU8L2xhYmVsPlxyXG4gICAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxyXG4gICAgICAgICAgICAgICAgbmFtZT1cIm5vbWJyZVwiXHJcbiAgICAgICAgICAgICAgICBpZD1cIm5vbWJyZVwiXHJcbiAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIk5vbWJyZS4uLlwiXHJcbiAgICAgICAgICAgICAgICB2YWx1ZT17dmFsdWVzLm5vbWJyZX1cclxuICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2V9XHJcbiAgICAgICAgICAgICAgICBvbkJsdXI9e2hhbmRsZUJsdXJ9XHJcbiAgICAgICAgICAgICAgLz5cclxuXHJcbiAgICAgICAgICAgICAgPEVycm9yTWVzc2FnZVxyXG4gICAgICAgICAgICAgICAgbmFtZT1cIm5vbWJyZVwiXHJcbiAgICAgICAgICAgICAgICBjb21wb25lbnQ9eygpID0+IDxkaXYgY2xhc3NOYW1lPVwiZXJyb3JcIj57ZXJyb3JzLm5vbWJyZX08L2Rpdj59XHJcbiAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgPEZpZWxkXHJcbiAgICAgICAgICAgICAgICBuYW1lPVwibWVuc2FqZVwiXHJcbiAgICAgICAgICAgICAgICBhcz1cInRleHRhcmVhXCJcclxuICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiTWVuc2FqZS4uLlwiXHJcbiAgICAgICAgICAgICAgPjwvRmllbGQ+XHJcbiAgICAgICAgICAgICAgPEVycm9yTWVzc2FnZVxyXG4gICAgICAgICAgICAgICAgbmFtZT1cIm1lbnNhamVcIlxyXG4gICAgICAgICAgICAgICAgY29tcG9uZW50PXsoKSA9PiA8ZGl2IGNsYXNzTmFtZT1cImVycm9yXCI+e2Vycm9ycy5tZW5zYWplfTwvZGl2Pn1cclxuICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJjb3JyZW9cIj5UdSBFbWFpbDwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXHJcbiAgICAgICAgICAgICAgICBuYW1lPVwiY29ycmVvXCJcclxuICAgICAgICAgICAgICAgIGlkPVwiY29ycmVvXCJcclxuICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiXCJcclxuICAgICAgICAgICAgICAgIHZhbHVlPXt2YWx1ZXMuY29ycmVvfVxyXG4gICAgICAgICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZUNoYW5nZX1cclxuICAgICAgICAgICAgICAgIG9uQmx1cj17aGFuZGxlQmx1cn1cclxuICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgIDxFcnJvck1lc3NhZ2VcclxuICAgICAgICAgICAgICAgIG5hbWU9XCJjb3JyZW9cIlxyXG4gICAgICAgICAgICAgICAgY29tcG9uZW50PXsoKSA9PiA8ZGl2IGNsYXNzTmFtZT1cImVycm9yXCI+e2Vycm9ycy5jb3JyZW99PC9kaXY+fVxyXG4gICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwiY29ycmVcIj5FbWFpbDwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXHJcbiAgICAgICAgICAgICAgICBuYW1lPVwiY29ycmVvXCJcclxuICAgICAgICAgICAgICAgIGlkPVwiY29ycmVvXCJcclxuICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiXCJcclxuICAgICAgICAgICAgICAgIHZhbHVlPXt2YWx1ZXMuY29ycmUyfVxyXG4gICAgICAgICAgICAgICAgb25CbHVyPXtoYW5kbGVCbHVyfVxyXG4gICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwic3VibWl0XCI+RW52aWFyPC9idXR0b24+XHJcbiAgICAgICAgICAgIHtmb3JtdWxhcmlvICYmIChcclxuICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJleGl0b1wiPkZvcm11bGFyaW8gZW52aWFkbyBjb24gZXhpdG88L3A+XHJcbiAgICAgICAgICAgICl9XHJcbiAgICAgICAgICA8L2Zvcm0+XHJcbiAgICAgICAgKX1cclxuICAgICAgPC9Gb3JtaWs+XHJcbiAgICA8Lz5cclxuICApO1xyXG59O1xyXG5leHBvcnQgZGVmYXVsdCBGb3JtdWxhcmlvO1xyXG4iXSwibmFtZXMiOlsiRm9ybWlrIiwiRmllbGQiLCJFcnJvck1lc3NhZ2UiLCJ1c2VTdGF0ZSIsIkZvcm11bGFyaW8iLCJmb3JtdWxhcmlvIiwic2V0Rm9ybXVsYXJpbyIsImluaXRpYWxWYWx1ZXMiLCJtZW5zYWplIiwibm9tYnJlIiwiY29ycmVvIiwiY29ycmUyIiwidmFsaWRhdGUiLCJ2YWxvcmVzIiwiZXJyb3JlcyIsInRlc3QiLCJvblN1Ym1pdCIsInJlc2V0Rm9ybSIsImNvbnNvbGUiLCJsb2ciLCJzZXRUaW1lb3V0IiwidmFsdWVzIiwiaGFuZGxlU3VibWl0IiwiaGFuZGxlQ2hhbmdlIiwiaGFuZGxlQmx1ciIsImVycm9ycyIsInRvdWNoZWQiLCJmb3JtIiwiY2xhc3NOYW1lIiwiZGl2IiwibGFiZWwiLCJodG1sRm9yIiwiaW5wdXQiLCJ0eXBlIiwibmFtZSIsImlkIiwicGxhY2Vob2xkZXIiLCJ2YWx1ZSIsIm9uQ2hhbmdlIiwib25CbHVyIiwiY29tcG9uZW50IiwiYXMiLCJidXR0b24iLCJwIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/formulario.js\n"));

/***/ })

});