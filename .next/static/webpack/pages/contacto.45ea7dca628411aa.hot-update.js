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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _emailjs_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @emailjs/browser */ \"./node_modules/@emailjs/browser/es/index.js\");\n/* harmony import */ var formik__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! formik */ \"./node_modules/formik/dist/formik.esm.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n\nvar _s = $RefreshSig$();\n\n\n\nconst FormularioTwo = ()=>{\n    _s();\n    const handleSubmit = (events)=>{\n        events.preventDefault();\n        _emailjs_browser__WEBPACK_IMPORTED_MODULE_1__[\"default\"].sendForm(\"service_uh6kp5d\", \"template_qevz07j\", events.target, \"muy5CcfUmuGumCpmY\").then((response)=>console.log(response)).catch((error)=>console.log(error));\n    };\n    const [formulario, setFormulario] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(false);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(formik__WEBPACK_IMPORTED_MODULE_2__.Formik, {\n            initialValues: {\n                nombre: \"\",\n                correo: \"\",\n                corre2: \"pabloobelar@gmail.com\"\n            },\n            validate: (valores)=>{\n                let errores = {};\n                if (!valores.nombre) {\n                    errores.nombre = \"Por favor poner un nombre\";\n                } else if (!/^[a-zA-ZÁ-ÿ\\s]{1,40}$/.test(valores.nombre)) {\n                    errores.nombre = \"El nombre solo puede contener letras y espacios\";\n                }\n                if (!valores.correo) {\n                    errores.correo = \"Por favor ingresar un correo electronico\";\n                } else if (!/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-.]+$/.test(valores.correo)) {\n                    errores.correo = \"El correo solo puede contener letras, numeros, puntos, guiones y guion bajo\";\n                }\n                return errores;\n            },\n            onSubmit: (valores, param)=>{\n                let { resetForm  } = param;\n                resetForm();\n                setFormulario(true);\n                setTimeout(()=>setFormulario(false), 5000);\n            },\n            children: (param)=>/*#__PURE__*/ {\n                let { values , handleSubmit , handleChange , handleBlur , errors , touched  } = param;\n                return (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n                    className: \"formulario\",\n                    onSubmit: handleSubmit,\n                    children: [\n                        console.log(errors),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                    htmlFor: \"nombre\",\n                                    children: \"Nombre\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\pablo\\\\OneDrive\\\\Escritorio\\\\Practicas\\\\portfolio\\\\pages\\\\formulario2.js\",\n                                    lineNumber: 67,\n                                    columnNumber: 15\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                    type: \"text\",\n                                    name: \"nombre\",\n                                    id: \"nombre\",\n                                    placeholder: \"Nombre...\",\n                                    value: values.nombre,\n                                    onChange: handleChange,\n                                    onBlur: handleBlur\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\pablo\\\\OneDrive\\\\Escritorio\\\\Practicas\\\\portfolio\\\\pages\\\\formulario2.js\",\n                                    lineNumber: 68,\n                                    columnNumber: 15\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(formik__WEBPACK_IMPORTED_MODULE_2__.ErrorMessage, {\n                                    name: \"nombre\",\n                                    component: ()=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                            className: \"error\",\n                                            children: errors.nombre\n                                        }, void 0, false, void 0, void 0)\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\pablo\\\\OneDrive\\\\Escritorio\\\\Practicas\\\\portfolio\\\\pages\\\\formulario2.js\",\n                                    lineNumber: 78,\n                                    columnNumber: 15\n                                }, undefined)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"C:\\\\Users\\\\pablo\\\\OneDrive\\\\Escritorio\\\\Practicas\\\\portfolio\\\\pages\\\\formulario2.js\",\n                            lineNumber: 66,\n                            columnNumber: 13\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(formik__WEBPACK_IMPORTED_MODULE_2__.Field, {\n                                name: \"mensaje\",\n                                as: \"textarea\",\n                                placeholder: \"Mensaje...\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\pablo\\\\OneDrive\\\\Escritorio\\\\Practicas\\\\portfolio\\\\pages\\\\formulario2.js\",\n                                lineNumber: 84,\n                                columnNumber: 15\n                            }, undefined)\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\pablo\\\\OneDrive\\\\Escritorio\\\\Practicas\\\\portfolio\\\\pages\\\\formulario2.js\",\n                            lineNumber: 83,\n                            columnNumber: 13\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                    htmlFor: \"correo\",\n                                    children: \"Tu Email\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\pablo\\\\OneDrive\\\\Escritorio\\\\Practicas\\\\portfolio\\\\pages\\\\formulario2.js\",\n                                    lineNumber: 92,\n                                    columnNumber: 15\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                    type: \"text\",\n                                    name: \"correo\",\n                                    id: \"correo\",\n                                    placeholder: \"\",\n                                    value: values.correo,\n                                    onChange: handleChange,\n                                    onBlur: handleBlur\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\pablo\\\\OneDrive\\\\Escritorio\\\\Practicas\\\\portfolio\\\\pages\\\\formulario2.js\",\n                                    lineNumber: 93,\n                                    columnNumber: 15\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(formik__WEBPACK_IMPORTED_MODULE_2__.ErrorMessage, {\n                                    name: \"correo\",\n                                    component: ()=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                            className: \"error\",\n                                            children: errors.correo\n                                        }, void 0, false, void 0, void 0)\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\pablo\\\\OneDrive\\\\Escritorio\\\\Practicas\\\\portfolio\\\\pages\\\\formulario2.js\",\n                                    lineNumber: 102,\n                                    columnNumber: 15\n                                }, undefined)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"C:\\\\Users\\\\pablo\\\\OneDrive\\\\Escritorio\\\\Practicas\\\\portfolio\\\\pages\\\\formulario2.js\",\n                            lineNumber: 91,\n                            columnNumber: 13\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                    htmlFor: \"corre\",\n                                    children: \"Email\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\pablo\\\\OneDrive\\\\Escritorio\\\\Practicas\\\\portfolio\\\\pages\\\\formulario2.js\",\n                                    lineNumber: 108,\n                                    columnNumber: 15\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                    type: \"text\",\n                                    name: \"correo\",\n                                    id: \"correo\",\n                                    placeholder: \"\",\n                                    value: values.corre2,\n                                    onBlur: handleBlur\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\pablo\\\\OneDrive\\\\Escritorio\\\\Practicas\\\\portfolio\\\\pages\\\\formulario2.js\",\n                                    lineNumber: 109,\n                                    columnNumber: 15\n                                }, undefined)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"C:\\\\Users\\\\pablo\\\\OneDrive\\\\Escritorio\\\\Practicas\\\\portfolio\\\\pages\\\\formulario2.js\",\n                            lineNumber: 107,\n                            columnNumber: 13\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                            type: \"submit\",\n                            children: \"Enviar\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\pablo\\\\OneDrive\\\\Escritorio\\\\Practicas\\\\portfolio\\\\pages\\\\formulario2.js\",\n                            lineNumber: 119,\n                            columnNumber: 13\n                        }, undefined),\n                        formulario && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                            className: \"exito\",\n                            children: \"Formulario enviado con exito\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\pablo\\\\OneDrive\\\\Escritorio\\\\Practicas\\\\portfolio\\\\pages\\\\formulario2.js\",\n                            lineNumber: 121,\n                            columnNumber: 15\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\pablo\\\\OneDrive\\\\Escritorio\\\\Practicas\\\\portfolio\\\\pages\\\\formulario2.js\",\n                    lineNumber: 64,\n                    columnNumber: 11\n                }, undefined);\n            }\n        }, void 0, false, {\n            fileName: \"C:\\\\Users\\\\pablo\\\\OneDrive\\\\Escritorio\\\\Practicas\\\\portfolio\\\\pages\\\\formulario2.js\",\n            lineNumber: 22,\n            columnNumber: 7\n        }, undefined)\n    }, void 0, false);\n};\n_s(FormularioTwo, \"DKmFO14N9ulMNyjnjzcqGcTXCTQ=\");\n_c = FormularioTwo;\n/* harmony default export */ __webpack_exports__[\"default\"] = (FormularioTwo);\nvar _c;\n$RefreshReg$(_c, \"FormularioTwo\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Q0FDSEMsYUFBWTtvQ0FDWkMsT0FBT2YsT0FBT1IsTUFBTTtvQ0FDcEJ5QixRQUFRZjs7Ozs7Ozs7Ozs7O3NDQUlaLDhEQUFDa0I7NEJBQU9ULE1BQUs7c0NBQVM7Ozs7Ozt3QkFDckJ4Qiw0QkFDQyw4REFBQ2tDOzRCQUFFZixXQUFVO3NDQUFROzs7Ozs7Ozs7Ozs7WUFFbkI7Ozs7Ozs7QUFLaEI7R0E1SE0vQjtLQUFBQTtBQThITiwrREFBZUEsYUFBYUEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9mb3JtdWxhcmlvMi5qcz85YjRmIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBlbWFpbGpzIGZyb20gXCJAZW1haWxqcy9icm93c2VyXCI7XHJcbmltcG9ydCB7IEZvcm1paywgRmllbGQsIEVycm9yTWVzc2FnZSB9IGZyb20gXCJmb3JtaWtcIjtcclxuaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuY29uc3QgRm9ybXVsYXJpb1R3byA9ICgpID0+IHtcclxuICBjb25zdCBoYW5kbGVTdWJtaXQgPSAoZXZlbnRzKSA9PiB7XHJcbiAgICBldmVudHMucHJldmVudERlZmF1bHQoKTtcclxuXHJcbiAgICBlbWFpbGpzXHJcbiAgICAgIC5zZW5kRm9ybShcclxuICAgICAgICBcInNlcnZpY2VfdWg2a3A1ZFwiLFxyXG4gICAgICAgIFwidGVtcGxhdGVfcWV2ejA3alwiLFxyXG4gICAgICAgIGV2ZW50cy50YXJnZXQsXHJcbiAgICAgICAgXCJtdXk1Q2NmVW11R3VtQ3BtWVwiXHJcbiAgICAgIClcclxuICAgICAgLnRoZW4oKHJlc3BvbnNlKSA9PiBjb25zb2xlLmxvZyhyZXNwb25zZSkpXHJcbiAgICAgIC5jYXRjaCgoZXJyb3IpID0+IGNvbnNvbGUubG9nKGVycm9yKSk7XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgW2Zvcm11bGFyaW8sIHNldEZvcm11bGFyaW9dID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gIHJldHVybiAoXHJcbiAgICA8PlxyXG4gICAgICA8Rm9ybWlrXHJcbiAgICAgICAgaW5pdGlhbFZhbHVlcz17e1xyXG4gICAgICAgICAgbm9tYnJlOiBcIlwiLFxyXG4gICAgICAgICAgY29ycmVvOiBcIlwiLFxyXG4gICAgICAgICAgY29ycmUyOiBcInBhYmxvb2JlbGFyQGdtYWlsLmNvbVwiLFxyXG4gICAgICAgIH19XHJcbiAgICAgICAgdmFsaWRhdGU9eyh2YWxvcmVzKSA9PiB7XHJcbiAgICAgICAgICBsZXQgZXJyb3JlcyA9IHt9O1xyXG5cclxuICAgICAgICAgIGlmICghdmFsb3Jlcy5ub21icmUpIHtcclxuICAgICAgICAgICAgZXJyb3Jlcy5ub21icmUgPSBcIlBvciBmYXZvciBwb25lciB1biBub21icmVcIjtcclxuICAgICAgICAgIH0gZWxzZSBpZiAoIS9eW2EtekEtWsOBLcO/XFxzXXsxLDQwfSQvLnRlc3QodmFsb3Jlcy5ub21icmUpKSB7XHJcbiAgICAgICAgICAgIGVycm9yZXMubm9tYnJlID0gXCJFbCBub21icmUgc29sbyBwdWVkZSBjb250ZW5lciBsZXRyYXMgeSBlc3BhY2lvc1wiO1xyXG4gICAgICAgICAgfVxyXG5cclxuICAgICAgICAgIGlmICghdmFsb3Jlcy5jb3JyZW8pIHtcclxuICAgICAgICAgICAgZXJyb3Jlcy5jb3JyZW8gPSBcIlBvciBmYXZvciBpbmdyZXNhciB1biBjb3JyZW8gZWxlY3Ryb25pY29cIjtcclxuICAgICAgICAgIH0gZWxzZSBpZiAoXHJcbiAgICAgICAgICAgICEvXlthLXpBLVowLTlfListXStAW2EtekEtWjAtOS0uXSskLy50ZXN0KHZhbG9yZXMuY29ycmVvKVxyXG4gICAgICAgICAgKSB7XHJcbiAgICAgICAgICAgIGVycm9yZXMuY29ycmVvID1cclxuICAgICAgICAgICAgICBcIkVsIGNvcnJlbyBzb2xvIHB1ZWRlIGNvbnRlbmVyIGxldHJhcywgbnVtZXJvcywgcHVudG9zLCBndWlvbmVzIHkgZ3Vpb24gYmFqb1wiO1xyXG4gICAgICAgICAgfVxyXG5cclxuICAgICAgICAgIHJldHVybiBlcnJvcmVzO1xyXG4gICAgICAgIH19XHJcbiAgICAgICAgb25TdWJtaXQ9eyh2YWxvcmVzLCB7IHJlc2V0Rm9ybSB9KSA9PiB7XHJcbiAgICAgICAgICByZXNldEZvcm0oKTtcclxuXHJcbiAgICAgICAgICBzZXRGb3JtdWxhcmlvKHRydWUpO1xyXG4gICAgICAgICAgc2V0VGltZW91dCgoKSA9PiBzZXRGb3JtdWxhcmlvKGZhbHNlKSwgNTAwMCk7XHJcbiAgICAgICAgfX1cclxuICAgICAgPlxyXG4gICAgICAgIHsoe1xyXG4gICAgICAgICAgdmFsdWVzLFxyXG4gICAgICAgICAgaGFuZGxlU3VibWl0LFxyXG4gICAgICAgICAgaGFuZGxlQ2hhbmdlLFxyXG4gICAgICAgICAgaGFuZGxlQmx1cixcclxuXHJcbiAgICAgICAgICBlcnJvcnMsXHJcbiAgICAgICAgICB0b3VjaGVkLFxyXG4gICAgICAgIH0pID0+IChcclxuICAgICAgICAgIDxmb3JtIGNsYXNzTmFtZT1cImZvcm11bGFyaW9cIiBvblN1Ym1pdD17aGFuZGxlU3VibWl0fT5cclxuICAgICAgICAgICAge2NvbnNvbGUubG9nKGVycm9ycyl9XHJcbiAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJub21icmVcIj5Ob21icmU8L2xhYmVsPlxyXG4gICAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxyXG4gICAgICAgICAgICAgICAgbmFtZT1cIm5vbWJyZVwiXHJcbiAgICAgICAgICAgICAgICBpZD1cIm5vbWJyZVwiXHJcbiAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIk5vbWJyZS4uLlwiXHJcbiAgICAgICAgICAgICAgICB2YWx1ZT17dmFsdWVzLm5vbWJyZX1cclxuICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2V9XHJcbiAgICAgICAgICAgICAgICBvbkJsdXI9e2hhbmRsZUJsdXJ9XHJcbiAgICAgICAgICAgICAgLz5cclxuXHJcbiAgICAgICAgICAgICAgPEVycm9yTWVzc2FnZVxyXG4gICAgICAgICAgICAgICAgbmFtZT1cIm5vbWJyZVwiXHJcbiAgICAgICAgICAgICAgICBjb21wb25lbnQ9eygpID0+IDxkaXYgY2xhc3NOYW1lPVwiZXJyb3JcIj57ZXJyb3JzLm5vbWJyZX08L2Rpdj59XHJcbiAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgPEZpZWxkXHJcbiAgICAgICAgICAgICAgICBuYW1lPVwibWVuc2FqZVwiXHJcbiAgICAgICAgICAgICAgICBhcz1cInRleHRhcmVhXCJcclxuICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiTWVuc2FqZS4uLlwiXHJcbiAgICAgICAgICAgICAgPjwvRmllbGQ+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cImNvcnJlb1wiPlR1IEVtYWlsPC9sYWJlbD5cclxuICAgICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcclxuICAgICAgICAgICAgICAgIG5hbWU9XCJjb3JyZW9cIlxyXG4gICAgICAgICAgICAgICAgaWQ9XCJjb3JyZW9cIlxyXG4gICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJcIlxyXG4gICAgICAgICAgICAgICAgdmFsdWU9e3ZhbHVlcy5jb3JyZW99XHJcbiAgICAgICAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlQ2hhbmdlfVxyXG4gICAgICAgICAgICAgICAgb25CbHVyPXtoYW5kbGVCbHVyfVxyXG4gICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgPEVycm9yTWVzc2FnZVxyXG4gICAgICAgICAgICAgICAgbmFtZT1cImNvcnJlb1wiXHJcbiAgICAgICAgICAgICAgICBjb21wb25lbnQ9eygpID0+IDxkaXYgY2xhc3NOYW1lPVwiZXJyb3JcIj57ZXJyb3JzLmNvcnJlb308L2Rpdj59XHJcbiAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJjb3JyZVwiPkVtYWlsPC9sYWJlbD5cclxuICAgICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcclxuICAgICAgICAgICAgICAgIG5hbWU9XCJjb3JyZW9cIlxyXG4gICAgICAgICAgICAgICAgaWQ9XCJjb3JyZW9cIlxyXG4gICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJcIlxyXG4gICAgICAgICAgICAgICAgdmFsdWU9e3ZhbHVlcy5jb3JyZTJ9XHJcbiAgICAgICAgICAgICAgICBvbkJsdXI9e2hhbmRsZUJsdXJ9XHJcbiAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJzdWJtaXRcIj5FbnZpYXI8L2J1dHRvbj5cclxuICAgICAgICAgICAge2Zvcm11bGFyaW8gJiYgKFxyXG4gICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImV4aXRvXCI+Rm9ybXVsYXJpbyBlbnZpYWRvIGNvbiBleGl0bzwvcD5cclxuICAgICAgICAgICAgKX1cclxuICAgICAgICAgIDwvZm9ybT5cclxuICAgICAgICApfVxyXG4gICAgICA8L0Zvcm1paz5cclxuICAgIDwvPlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBGb3JtdWxhcmlvVHdvO1xyXG4iXSwibmFtZXMiOlsiZW1haWxqcyIsIkZvcm1payIsIkZpZWxkIiwiRXJyb3JNZXNzYWdlIiwidXNlU3RhdGUiLCJGb3JtdWxhcmlvVHdvIiwiaGFuZGxlU3VibWl0IiwiZXZlbnRzIiwicHJldmVudERlZmF1bHQiLCJzZW5kRm9ybSIsInRhcmdldCIsInRoZW4iLCJyZXNwb25zZSIsImNvbnNvbGUiLCJsb2ciLCJjYXRjaCIsImVycm9yIiwiZm9ybXVsYXJpbyIsInNldEZvcm11bGFyaW8iLCJpbml0aWFsVmFsdWVzIiwibm9tYnJlIiwiY29ycmVvIiwiY29ycmUyIiwidmFsaWRhdGUiLCJ2YWxvcmVzIiwiZXJyb3JlcyIsInRlc3QiLCJvblN1Ym1pdCIsInJlc2V0Rm9ybSIsInNldFRpbWVvdXQiLCJ2YWx1ZXMiLCJoYW5kbGVDaGFuZ2UiLCJoYW5kbGVCbHVyIiwiZXJyb3JzIiwidG91Y2hlZCIsImZvcm0iLCJjbGFzc05hbWUiLCJkaXYiLCJsYWJlbCIsImh0bWxGb3IiLCJpbnB1dCIsInR5cGUiLCJuYW1lIiwiaWQiLCJwbGFjZWhvbGRlciIsInZhbHVlIiwib25DaGFuZ2UiLCJvbkJsdXIiLCJjb21wb25lbnQiLCJhcyIsImJ1dHRvbiIsInAiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/formulario2.js\n"));

/***/ })

});