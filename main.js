/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"/* || Custom properties */\\n\\n:root {\\n    --main-text-color: #E3E3E3;\\n    --highlight-color: #DE4C4A;\\n    --hover-color: #363636;\\n    --outline-color: #808080;\\n    --main-bg-color: #1F1F1F;\\n}\\n\\n\\n/* || General styles */\\n\\n* {\\n    box-sizing: border-box;\\n    margin: 0;\\n    padding: 0;\\n    border: none;\\n}\\n\\nbody {\\n    height: 100vh;\\n    display: grid;\\n    grid-template-columns: 1fr 3fr;\\n    font-family: Arial, Helvetica, sans-serif;\\n    color: var(--main-text-color);\\n}\\n\\n.flex {\\n    display: flex;\\n}\\n\\n.flexColumn {\\n    flex-direction: column;\\n}\\n\\n.hidden {\\n    display: none;\\n}\\n\\n/* || Sidebar */\\n\\n.sidebar {\\n    background-color: #282828;\\n    padding: 2rem 2rem 0;\\n}\\n\\n.heading {\\n    justify-content: space-between;\\n    align-items: center;\\n    padding-left: 0.5rem;\\n    font-size: 1.1rem;\\n    font-weight: 700;\\n    margin-bottom: 0.5rem;\\n}\\n\\n.newProjectBtn {\\n    border: 0;\\n    background-color: transparent;\\n    font-size: 1rem;\\n    color: var(--main-text-color);\\n    margin-right: 0.5rem;\\n}\\n\\n.projectsEntry, #addProject {\\n    padding: 0.5rem;\\n    height: 2rem;\\n}\\n\\n.newProject, .projectsEntry, #addProject {\\n    border-radius: 5px;\\n}\\n\\n#addProject:hover, .projectsEntry:hover, .todoRight>button:hover {\\n    background-color: var(--hover-color);\\n}\\n\\n.projectMoreOptionsBtn, .newProjectBtn {\\n    display: none;\\n}\\n\\n.projectsEntry:hover .projectMoreOptionsBtn, #addProject:hover .newProjectBtn {\\n    display: initial;\\n}\\n\\n/* || Add Project Menu */\\n\\n#formProjectName {\\n    background-color: #282828;\\n    height: 1rem;\\n}\\n\\n/* || Main */\\n\\nmain {\\n    background-color: var(--main-bg-color);\\n    justify-content: center;\\n}\\n\\n.projectDisplay {\\n    width: 90%;\\n    padding: 2rem;\\n}\\n\\n.projectTitle {\\n    font-size: 1.5rem;\\n    font-weight: 700;\\n    margin-bottom: 1rem;\\n}\\n\\n#projectsList, .todosList {\\n    list-style-type: none;\\n}\\n\\n.todosList>li {\\n    border-top: 1px solid var(--hover-color);\\n}\\n\\n.todosList>li:first-child {\\n    border: none;\\n}\\n\\n.projectTodo, .addTask {\\n    padding: 0.5rem 0.5rem 0.5rem 0;\\n}\\n\\n.projectTodo, .projectsEntry, #addProject {\\n    justify-content: space-between;\\n}\\n\\n.projectTodo>div, .projectsEntry {\\n    align-items: center;\\n}\\n\\n.taskCheckbox {\\n    border: 1px solid var(--outline-color);\\n    transition: 0.3s;\\n}\\n\\n.taskCheckbox:hover {\\n    background-color: var(--outline-color);\\n    transition: 0.3s;\\n}\\n \\n.todoRight {\\n    column-gap: 1rem;\\n    color: var(--outline-color);\\n}\\n\\n.todoRight>button, .projectMoreOptionsBtn {\\n    border: 0;\\n    border-radius: 5px;\\n    background-color: transparent;\\n    color: var(--main-text-color);\\n    height: 24px;\\n} \\n\\n.taskCheckbox, .addTaskBtn {\\n    height: 16px;\\n    width: 16px;\\n    border-radius: 50%;\\n    margin-right: 0.5rem;\\n    background-color: transparent;\\n}\\n\\n .newProjectBtn, .addTaskBtn { \\n    line-height: 1rem;\\n}\\n\\n#addProject span, .newProjectBtn, .addTask span {\\n    color: var(--outline-color);\\n}\\n\\n#addProject:hover span, #addProject:hover .newProjectBtn, .addTask:hover span, .addTaskBtn {\\n    color: var(--highlight-color);\\n}\\n\\n.addTask:hover .addTaskBtn {\\n    color: var(--main-text-color);\\n    background-color: var(--highlight-color);\\n}\\n\\n/* Add Task Menu */\\n.addProjectMenuWrapper, .addTaskMenuWrapper {\\n    padding-top: 0.5rem;\\n}\\n\\n.addForm, #formTodoDueDate, #formTodoPriority {\\n    border: 1px solid var(--hover-color);\\n}\\n\\n.addForm, #formTodoDueDate, #formTodoPriority {\\n    border-radius: 10px;\\n    padding: 0.5rem;\\n}\\n\\n#formProjectName, #formTodoName, #formTodoDueDate, #formTodoDesc, #formTodoPriority {\\n    font-size: 1em;\\n    font-family: Arial, Helvetica, sans-serif;\\n    color: var(--main-text-color);\\n    outline: none;\\n}\\n\\n#formTodoName, #formTodoDueDate, #formTodoDesc, #formTodoPriority {\\n    background-color: var(--main-bg-color);\\n}\\n\\n#formTodoDueDate, #formTodoPriority {\\n    border-radius: 5px;\\n    padding: 0.25rem;\\n}\\n\\n::-webkit-calendar-picker-indicator {\\n    color-scheme: dark;\\n}\\n\\n#formProjectName, #formTodoName, #formTodoDesc {\\n    width: 100%;\\n}\\n\\n#formTodoName {\\n    height: 1rem;\\n    margin-bottom: 0.5rem;\\n}\\n\\n#formTodoDesc {\\n    resize: none;\\n    overflow-y: scroll;\\n    padding-right: 1rem;\\n}\\n\\n.addFormBtns {\\n    margin-top: 0.5rem;\\n    column-gap: 0.75rem;\\n}\\n\\n.addFormMainBtn {\\n    background-color: var(--highlight-color);\\n}\\n\\n.addFormMainBtn:hover:enabled{\\n    background-color: #C53727;\\n}\\n\\n.addFormMainBtn:disabled {\\n    filter: brightness(0.8);\\n}\\n\\n.addFormCancelBtn {\\n    background-color: #292929;\\n}\\n\\n.addFormCancelBtn:hover {\\n    background-color: #3D3D3D;\\n}\\n\\n.addFormMainBtn, .addFormCancelBtn {\\n    border: none;\\n    border-radius: 5px;\\n    outline: none;\\n    color: var(--main-text-color);\\n    font-size: 0.9rem;\\n    padding: 0.5rem 0.75rem;\\n}\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://odin-todo-list/./src/style.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = []; // return the list of modules as css string\n\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n\n      content += cssWithMappingToString(item);\n\n      if (needLayer) {\n        content += \"}\";\n      }\n\n      if (item[2]) {\n        content += \"}\";\n      }\n\n      if (item[4]) {\n        content += \"}\";\n      }\n\n      return content;\n    }).join(\"\");\n  }; // import a list of modules into the list\n\n\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n\n    var alreadyImportedModules = {};\n\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n\n      list.push(item);\n    }\n  };\n\n  return list;\n};\n\n//# sourceURL=webpack://odin-todo-list/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://odin-todo-list/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ \"./node_modules/css-loader/dist/cjs.js!./src/style.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://odin-todo-list/./src/style.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n\n  return updater;\n}\n\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://odin-todo-list/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n/* istanbul ignore next  */\n\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n\n    memo[target] = styleTarget;\n  }\n\n  return memo[target];\n}\n/* istanbul ignore next  */\n\n\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n\n  target.appendChild(style);\n}\n\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://odin-todo-list/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\n\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://odin-todo-list/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\n\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://odin-todo-list/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n\n  var needLayer = typeof obj.layer !== \"undefined\";\n\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n\n  css += obj.css;\n\n  if (needLayer) {\n    css += \"}\";\n  }\n\n  if (obj.media) {\n    css += \"}\";\n  }\n\n  if (obj.supports) {\n    css += \"}\";\n  }\n\n  var sourceMap = obj.sourceMap;\n\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  options.styleTagTransform(css, styleElement, options.options);\n}\n\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n\n  styleElement.parentNode.removeChild(styleElement);\n}\n/* istanbul ignore next  */\n\n\nfunction domAPI(options) {\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\n\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://odin-todo-list/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\n\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://odin-todo-list/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./node_modules/uuid/dist/esm-browser/regex.js":
/*!*****************************************************!*\
  !*** ./node_modules/uuid/dist/esm-browser/regex.js ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (/^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i);\n\n//# sourceURL=webpack://odin-todo-list/./node_modules/uuid/dist/esm-browser/regex.js?");

/***/ }),

/***/ "./node_modules/uuid/dist/esm-browser/rng.js":
/*!***************************************************!*\
  !*** ./node_modules/uuid/dist/esm-browser/rng.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ rng)\n/* harmony export */ });\n// Unique ID creation requires a high quality random # generator. In the browser we therefore\n// require the crypto API and do not support built-in fallback to lower quality random number\n// generators (like Math.random()).\nvar getRandomValues;\nvar rnds8 = new Uint8Array(16);\nfunction rng() {\n  // lazy load so that environments that need to polyfill have a chance to do so\n  if (!getRandomValues) {\n    // getRandomValues needs to be invoked in a context where \"this\" is a Crypto implementation. Also,\n    // find the complete implementation of crypto (msCrypto) on IE11.\n    getRandomValues = typeof crypto !== 'undefined' && crypto.getRandomValues && crypto.getRandomValues.bind(crypto) || typeof msCrypto !== 'undefined' && typeof msCrypto.getRandomValues === 'function' && msCrypto.getRandomValues.bind(msCrypto);\n\n    if (!getRandomValues) {\n      throw new Error('crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported');\n    }\n  }\n\n  return getRandomValues(rnds8);\n}\n\n//# sourceURL=webpack://odin-todo-list/./node_modules/uuid/dist/esm-browser/rng.js?");

/***/ }),

/***/ "./node_modules/uuid/dist/esm-browser/stringify.js":
/*!*********************************************************!*\
  !*** ./node_modules/uuid/dist/esm-browser/stringify.js ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _validate_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./validate.js */ \"./node_modules/uuid/dist/esm-browser/validate.js\");\n\n/**\n * Convert array of 16 byte values to UUID string format of the form:\n * XXXXXXXX-XXXX-XXXX-XXXX-XXXXXXXXXXXX\n */\n\nvar byteToHex = [];\n\nfor (var i = 0; i < 256; ++i) {\n  byteToHex.push((i + 0x100).toString(16).substr(1));\n}\n\nfunction stringify(arr) {\n  var offset = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;\n  // Note: Be careful editing this code!  It's been tuned for performance\n  // and works in ways you may not expect. See https://github.com/uuidjs/uuid/pull/434\n  var uuid = (byteToHex[arr[offset + 0]] + byteToHex[arr[offset + 1]] + byteToHex[arr[offset + 2]] + byteToHex[arr[offset + 3]] + '-' + byteToHex[arr[offset + 4]] + byteToHex[arr[offset + 5]] + '-' + byteToHex[arr[offset + 6]] + byteToHex[arr[offset + 7]] + '-' + byteToHex[arr[offset + 8]] + byteToHex[arr[offset + 9]] + '-' + byteToHex[arr[offset + 10]] + byteToHex[arr[offset + 11]] + byteToHex[arr[offset + 12]] + byteToHex[arr[offset + 13]] + byteToHex[arr[offset + 14]] + byteToHex[arr[offset + 15]]).toLowerCase(); // Consistency check for valid UUID.  If this throws, it's likely due to one\n  // of the following:\n  // - One or more input array values don't map to a hex octet (leading to\n  // \"undefined\" in the uuid)\n  // - Invalid input values for the RFC `version` or `variant` fields\n\n  if (!(0,_validate_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(uuid)) {\n    throw TypeError('Stringified UUID is invalid');\n  }\n\n  return uuid;\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (stringify);\n\n//# sourceURL=webpack://odin-todo-list/./node_modules/uuid/dist/esm-browser/stringify.js?");

/***/ }),

/***/ "./node_modules/uuid/dist/esm-browser/v4.js":
/*!**************************************************!*\
  !*** ./node_modules/uuid/dist/esm-browser/v4.js ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _rng_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./rng.js */ \"./node_modules/uuid/dist/esm-browser/rng.js\");\n/* harmony import */ var _stringify_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./stringify.js */ \"./node_modules/uuid/dist/esm-browser/stringify.js\");\n\n\n\nfunction v4(options, buf, offset) {\n  options = options || {};\n  var rnds = options.random || (options.rng || _rng_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(); // Per 4.4, set bits for version and `clock_seq_hi_and_reserved`\n\n  rnds[6] = rnds[6] & 0x0f | 0x40;\n  rnds[8] = rnds[8] & 0x3f | 0x80; // Copy bytes to buffer, if provided\n\n  if (buf) {\n    offset = offset || 0;\n\n    for (var i = 0; i < 16; ++i) {\n      buf[offset + i] = rnds[i];\n    }\n\n    return buf;\n  }\n\n  return (0,_stringify_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(rnds);\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (v4);\n\n//# sourceURL=webpack://odin-todo-list/./node_modules/uuid/dist/esm-browser/v4.js?");

/***/ }),

/***/ "./node_modules/uuid/dist/esm-browser/validate.js":
/*!********************************************************!*\
  !*** ./node_modules/uuid/dist/esm-browser/validate.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _regex_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./regex.js */ \"./node_modules/uuid/dist/esm-browser/regex.js\");\n\n\nfunction validate(uuid) {\n  return typeof uuid === 'string' && _regex_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].test(uuid);\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (validate);\n\n//# sourceURL=webpack://odin-todo-list/./node_modules/uuid/dist/esm-browser/validate.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ \"./src/style.css\");\n/* harmony import */ var _modules_app__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/app */ \"./src/modules/app.js\");\n/* harmony import */ var _modules_project__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/project */ \"./src/modules/project.js\");\n/* harmony import */ var _modules_todo__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/todo */ \"./src/modules/todo.js\");\n/* harmony import */ var _modules_display__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/display */ \"./src/modules/display.js\");\n\n\n\n\n\n\nlet app = new _modules_app__WEBPACK_IMPORTED_MODULE_1__[\"default\"]();\nlet activeProject = app.allProjects.find((project) => project.id === app.activeProjectID);\n\nclass events {\n    static pageLoad() {\n        this.todoListeners();\n    }\n\n    // Project Listeners\n        // Listener for switching active project -- sidear\n        // Listener for add project button\n        // Listener for editing project\n        // Listener for deleting project\n\n    // Todo Listeners\n    static todoListeners() {\n        this.addTaskMenu();\n        this.addTaskSubmitChecker();\n        this.addTaskSubmit();\n        this.addTaskCancelBtn();\n    }\n\n    static addTaskMenu() {\n        const addTask = document.getElementById(\"addTodo\");\n        addTask.addEventListener(\"click\", () => {\n            _modules_display__WEBPACK_IMPORTED_MODULE_4__[\"default\"].addTaskMenu();\n        })\n    }\n\n    static addTaskSubmitChecker() {\n        const inputName = document.getElementById(\"formTodoName\");\n        const submit = document.getElementById(\"addTodoBtn\");\n        inputName.addEventListener(\"input\", () => {\n            if (inputName.value.length === 0) {\n                submit.disabled = true;\n            } else {\n                submit.disabled = false;\n            }\n        })\n    }\n\n    static addTaskSubmit() {\n        const submit = document.getElementById(\"addTodoBtn\");\n        submit.addEventListener(\"click\", () => {\n            if (submit.disabled === false) {\n                activeProject.addTodo(_modules_display__WEBPACK_IMPORTED_MODULE_4__[\"default\"].addTaskSubmit());\n                _modules_display__WEBPACK_IMPORTED_MODULE_4__[\"default\"].renderTodo(activeProject.projectTodos[activeProject.projectTodos.length - 1]);\n                console.log(activeProject);\n                this.delBtn();\n            }\n        })\n    }\n\n    static addTaskCancelBtn() {\n        const addTodoCancel = document.getElementById(\"addTodoCancel\");\n        addTodoCancel.addEventListener(\"click\", () => {\n            _modules_display__WEBPACK_IMPORTED_MODULE_4__[\"default\"].addTaskClear();\n        })\n    }\n\n    // Listener for view button\n\n    // Listener for edit button\n\n    static delBtn() {\n        const todoRow = document.querySelector(\".addTask\").previousElementSibling;\n        const btn = todoRow.querySelector(\".taskDelBtn\");\n        btn.addEventListener(\"click\", () => {\n            let id = btn.parentNode.parentNode.id;\n            activeProject.deleteTodo(id);\n            _modules_display__WEBPACK_IMPORTED_MODULE_4__[\"default\"].deleteTodo(id);\n            console.log(activeProject);\n        });\n    }\n\n    // Listener for toggling complete status\n}\n\n// Temporary testing\nwindow.onload = () => {\n    activeProject.addTodo(new _modules_todo__WEBPACK_IMPORTED_MODULE_3__[\"default\"](\"Test Todo 1\", \"Test description 1\", \"2022-04-30\", \"Low\"));\n    activeProject.addTodo(new _modules_todo__WEBPACK_IMPORTED_MODULE_3__[\"default\"](\"Test Todo 2\", \"Test description 2\", \"2022-04-30\", \"Low\"));\n    activeProject.addTodo(new _modules_todo__WEBPACK_IMPORTED_MODULE_3__[\"default\"](\"Test Todo 3\", \"Test description 3\", \"2022-04-30\", \"Low\"));\n    console.log(activeProject);\n    app.addProject(new _modules_project__WEBPACK_IMPORTED_MODULE_2__[\"default\"](\"Test Project 1\"));\n    app.allProjects.forEach((project) => {\n        _modules_display__WEBPACK_IMPORTED_MODULE_4__[\"default\"].renderProject(project);\n    });\n    activeProject.projectTodos.forEach(todo => {\n        _modules_display__WEBPACK_IMPORTED_MODULE_4__[\"default\"].renderTodo(todo);\n        events.delBtn();\n    });\n    _modules_display__WEBPACK_IMPORTED_MODULE_4__[\"default\"].renderActiveProject(activeProject.title);\n    events.pageLoad();\n}\n\n\n// Create project function\n    // Pushes a new project to the allProjects array\n\n// Project function to toggle active status\n\n// Delete project\n\n// Todo function to toggle complete status\n\n// Function to view todo details\n\n// Function to edit todo details\n\n//# sourceURL=webpack://odin-todo-list/./src/index.js?");

/***/ }),

/***/ "./src/modules/app.js":
/*!****************************!*\
  !*** ./src/modules/app.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ App)\n/* harmony export */ });\n/* harmony import */ var _project__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./project */ \"./src/modules/project.js\");\n\n\nclass App {\n    constructor() {\n        this._allProjects = [new _project__WEBPACK_IMPORTED_MODULE_0__[\"default\"](\"Inbox\")];\n        this._activeProjectID = this.allProjects[0].id;\n    }\n\n    get allProjects() {\n        return this._allProjects;\n    }\n\n    set allProjects(arg) {\n        if (arg) {\n            this._allProjects = arg;\n        }\n    }\n\n    get activeProjectID() {\n        return this._activeProjectID;\n    }\n\n    set activeProjectID(arg) {\n        if (arg) {\n            this._activeProjectID = arg;\n        }\n    }\n\n    addProject(newProject) {\n        if (this.allProjects.find((project) => project.id === newProject.id)) {\n            return;\n        } else {\n            this.allProjects.push(newProject);\n        }\n    }\n\n    deleteProject(delProject) {\n        this.allProjects = this.allProjects.filter((project) => project.id !==delProject.id);\n    }\n}\n\n//# sourceURL=webpack://odin-todo-list/./src/modules/app.js?");

/***/ }),

/***/ "./src/modules/display.js":
/*!********************************!*\
  !*** ./src/modules/display.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ display)\n/* harmony export */ });\n/* harmony import */ var _todo__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./todo */ \"./src/modules/todo.js\");\n\n\nclass display {\n    // Project Functions\n    static renderProject(project) {\n        const projectsList = document.getElementById(\"projectsList\");\n        const addProject = document.getElementById(\"addProject\");\n        let newNode = document.createElement(\"li\");\n        newNode.classList.add(\"projectsEntry\", \"flex\");\n        newNode.id = project.id;\n        newNode.innerHTML = `\n        <span>${project.title}</span>\n        <button class=\"projectMoreOptionsBtn\">\n            <svg xmlns=\"http://www.w3.org/2000/svg\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"#808080\" stroke-width=\"1\" stroke-linecap=\"round\" stroke-linejoin=\"round\" class=\"feather feather-more-horizontal\"><circle cx=\"12\" cy=\"12\" r=\"1\"></circle><circle cx=\"19\" cy=\"12\" r=\"1\"></circle><circle cx=\"5\" cy=\"12\" r=\"1\"></circle></svg>\n        </button>`\n        projectsList.insertBefore(newNode, addProject);\n    }\n\n    static renderActiveProject(title) {\n        const projectTitle = document.querySelector(\".projectTitle\");\n        projectTitle.innerText = title;\n    }\n\n    // Function to switch active project\n        // Add active styling to active project\n\n    // Function for add project button\n        // Toggle project add form visibility\n        // Adds a form at bottom of project list prompting for name\n        // Cancel and add buttons below\n\n    // Function to toggle edit project\n        // Brings up similar interface as add but with name prefilled\n\n    // Function to delete project\n\n    // Todo Functions\n    static renderTodo(todo) {\n        const todosList = document.querySelector(\".todosList\");\n        const addTask = document.getElementById(\"addTodo\");\n        let newNode = document.createElement(\"li\");\n        newNode.classList.add(\"projectTodo\", \"flex\");\n        newNode.id = todo.id;\n        newNode.innerHTML = `\n        <div class=\"todoLeft flex\">\n            <button class=\"taskCheckbox\"> </button>\n            <span>${todo.title}</span>\n        </div>\n        <div class=\"todoRight flex\">\n            <span class=\"taskDueDate\">${todo.dueDate}</span>\n            <button class=\"taskViewBtn\">\n                <svg xmlns=\"http://www.w3.org/2000/svg\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"#808080\" stroke-width=\"1\" stroke-linecap=\"round\" stroke-linejoin=\"round\" class=\"feather feather-eye\"><path d=\"M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z\"></path><circle cx=\"12\" cy=\"12\" r=\"3\"></circle></svg>\n            </button>\n            <button class=\"taskEditBtn\">\n                <svg xmlns=\"http://www.w3.org/2000/svg\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"#808080\" stroke-width=\"1\" stroke-linecap=\"round\" stroke-linejoin=\"round\" class=\"feather feather-edit-3\"><path d=\"M12 20h9\"></path><path d=\"M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z\"></path></svg>\n            </button>\n            <button class=\"taskDelBtn\">\n                <svg xmlns=\"http://www.w3.org/2000/svg\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"#808080\" stroke-width=\"1\" stroke-linecap=\"round\" stroke-linejoin=\"round\" class=\"feather feather-trash-2\"><polyline points=\"3 6 5 6 21 6\"></polyline><path d=\"M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2\"></path><line x1=\"10\" y1=\"11\" x2=\"10\" y2=\"17\"></line><line x1=\"14\" y1=\"11\" x2=\"14\" y2=\"17\"></line></svg>\n            </button>\n        </div>`;\n        todosList.insertBefore(newNode, addTask);\n    }\n\n    static addTaskMenu() {\n        const addTaskBar = document.querySelector(\".addTask\");\n        const addTaskMenu = document.querySelector(\".addTaskMenuWrapper\");\n        addTaskBar.classList.add(\"hidden\");\n        addTaskMenu.classList.remove(\"hidden\");\n    }\n\n    static addTaskSubmit() {\n        const todoName = document.getElementById(\"formTodoName\").value;\n        const todoDesc = document.getElementById(\"formTodoDesc\").value;\n        const todoDueDate = document.getElementById(\"formTodoDueDate\").value;\n        const todoPriority = document.getElementById(\"formTodoPriority\").value;\n        this.addTaskClear();\n        return new _todo__WEBPACK_IMPORTED_MODULE_0__[\"default\"](todoName, todoDesc, todoDueDate, todoPriority);\n    }\n\n    static addTaskClear() {\n        const addTaskBar = document.getElementById(\"addTodo\");\n        const addTaskMenu = document.querySelector(\".addTaskMenuWrapper\");\n        const addTaskForm = document.getElementById(\"addTodoForm\");\n        addTaskBar.classList.remove(\"hidden\");\n        addTaskMenu.classList.add(\"hidden\");\n        addTaskForm.reset();\n        const submit = document.getElementById(\"addTodoBtn\");\n        submit.disabled = true;\n    }\n\n    // Function to bring up todo details view\n\n    // Function to toggle edit todo\n        // Brings up similar interface as add but with details prefilled\n\n    static deleteTodo(id) {\n        document.getElementById(id).remove();\n    }\n\n}\n\n//# sourceURL=webpack://odin-todo-list/./src/modules/display.js?");

/***/ }),

/***/ "./src/modules/project.js":
/*!********************************!*\
  !*** ./src/modules/project.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Project)\n/* harmony export */ });\n/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! uuid */ \"./node_modules/uuid/dist/esm-browser/v4.js\");\n\n\nclass Project {\n    constructor(title) {\n        this._id = (0,uuid__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\n        this._title = title;\n        this._projectTodos = [];\n    }\n\n    get id() {\n        return this._id;\n    }\n\n    set id(arg) {\n        if (arg) {\n            this._id = arg;\n        }\n    }\n\n    get title() {\n        return this._title;\n    }\n\n    set title(arg) {\n        if (arg) {\n            this._title = arg;\n        }\n    }\n\n    get projectTodos() {\n        return this._projectTodos;\n    }\n\n    set projectTodos(arg) {\n        if (arg) {\n            this._projectTodos = arg;\n        }\n    }\n\n    addTodo(newTodo) {\n        if (this.projectTodos.find((todo) => todo.id === newTodo.id)) {\n            return;\n        } else {\n            this.projectTodos.push(newTodo);\n        }\n    }\n\n    deleteTodo(delTodoID) {\n        this.projectTodos = this.projectTodos.filter((todo) => todo.id !== delTodoID);\n    }\n}\n\n//# sourceURL=webpack://odin-todo-list/./src/modules/project.js?");

/***/ }),

/***/ "./src/modules/todo.js":
/*!*****************************!*\
  !*** ./src/modules/todo.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Todo)\n/* harmony export */ });\n/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! uuid */ \"./node_modules/uuid/dist/esm-browser/v4.js\");\n\n\nclass Todo {\n    constructor(title, description, dueDate, priority) {\n        this._id = (0,uuid__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\n        this._title = title;\n        this._description = description;\n        this._dueDate = dueDate;\n        this._priority = priority;\n        this._complete = false;\n    }\n\n    get id() {\n        return this._id;\n    }\n\n    set id(arg) {\n        if (arg) {\n            this._id = arg;\n        }\n    }\n\n    get title() {\n        return this._title;\n    }\n\n    set title(arg) {\n        if (arg) {\n            this._title = arg;\n        }\n    }\n\n    get description() {\n        return this._description;\n    }\n\n    set description(arg) {\n        if (arg) {\n            this._description = arg;\n        }\n    }\n\n    get dueDate() {\n        return this._dueDate;\n    }\n\n    set dueDate(arg) {\n        if (arg) {\n            this._dueDate = arg;\n        }\n    }\n\n    get priority() {\n        return this._priority;\n    }\n\n    set priority(arg) {\n        if (arg) {\n            this._priority = arg;\n        }\n    }\n\n    get complete() {\n        return this._complete;\n    }\n\n    set complete(arg) {\n        if (arg) {\n            this._complete = arg;\n        }\n    }\n}\n\n//# sourceURL=webpack://odin-todo-list/./src/modules/todo.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;