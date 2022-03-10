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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"html,\\r\\nbody {\\r\\n  height: 100%;\\r\\n  width: 100%;\\r\\n}\\r\\n\\r\\n.header {\\r\\n  border-bottom: solid 1px rgb(0, 0, 0);\\r\\n  display: flex;\\r\\n  justify-content: space-evenly;\\r\\n  align-items: baseline;\\r\\n}\\r\\n\\r\\na {\\r\\n  text-decoration: none;\\r\\n  color: #000;\\r\\n}\\r\\n\\r\\n.container {\\r\\n  margin: auto;\\r\\n  display: flex;\\r\\n  justify-content: center;\\r\\n  align-items: center;\\r\\n}\\r\\n\\r\\n#cards-container {\\r\\n  display: grid;\\r\\n  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));\\r\\n  grid-template-rows: 1fr;\\r\\n  width: 80%;\\r\\n  gap: 25px;\\r\\n  padding: 25px 0;\\r\\n}\\r\\n\\r\\n.card {\\r\\n  border-radius: 8px;\\r\\n  display: flex;\\r\\n  flex-direction: column;\\r\\n  justify-content: center;\\r\\n  align-items: center;\\r\\n  background-color: rgb(211, 203, 203);\\r\\n  padding-bottom: 5px;\\r\\n  transition: 1s;\\r\\n  transform: scale(1);\\r\\n}\\r\\n\\r\\n.card:hover {\\r\\n  transform: scale(1.1);\\r\\n}\\r\\n\\r\\n.sprite-container {\\r\\n  background-color: #fff;\\r\\n  border: 3px solid #000;\\r\\n  border-radius: 8px;\\r\\n  margin-top: 5px;\\r\\n}\\r\\n\\r\\n.likes-container {\\r\\n  display: flex;\\r\\n  align-items: baseline;\\r\\n  gap: 10px;\\r\\n}\\r\\n\\r\\n.fa-heart {\\r\\n  transition: 0.3s;\\r\\n  transform: scale(1);\\r\\n  perspective: 1000px;\\r\\n}\\r\\n\\r\\n.fa-heart:hover {\\r\\n  color: rgb(255, 0, 0);\\r\\n  transform: scale(1.2);\\r\\n}\\r\\n\\r\\n.fa-heart:active {\\r\\n  transform: rotateY(180deg);\\r\\n}\\r\\n\\r\\n.footer {\\r\\n  border-top: solid 1px #000;\\r\\n}\\r\\n\\r\\n#popup {\\r\\n  position: fixed;\\r\\n  left: 10px;\\r\\n  top: 10px;\\r\\n  right: 10px;\\r\\n  bottom: 10px;\\r\\n  overflow: auto;\\r\\n  background-color: white;\\r\\n  display: none;\\r\\n}\\r\\n\\r\\n#close {\\r\\n  position: absolute;\\r\\n  right: 2px;\\r\\n}\\r\\n\\r\\n#close:hover {\\r\\n  cursor: pointer;\\r\\n}\\r\\n\\r\\n#container,\\r\\n#commentContainer {\\r\\n  display: flex;\\r\\n  flex-direction: column;\\r\\n  align-items: center;\\r\\n}\\r\\n\\r\\n#pokemonImg {\\r\\n  max-height: 150px;\\r\\n}\\r\\n\\r\\n#pokemonName,\\r\\n#types > * {\\r\\n  text-transform: capitalize;\\r\\n}\\r\\n\\r\\n#pokeData {\\r\\n  width: 50%;\\r\\n  display: flex;\\r\\n  flex-wrap: wrap;\\r\\n  justify-content: space-between;\\r\\n}\\r\\n\\r\\n#commentsAndCount {\\r\\n  display: flex;\\r\\n  align-items: baseline;\\r\\n}\\r\\n\\r\\n#commentContainer > * {\\r\\n  margin: 5px;\\r\\n}\\r\\n\\r\\n#commentsTitle {\\r\\n  margin: 0;\\r\\n}\\r\\n\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://2nd-capstone-project/./src/style.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = []; // return the list of modules as css string\n\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n\n      content += cssWithMappingToString(item);\n\n      if (needLayer) {\n        content += \"}\";\n      }\n\n      if (item[2]) {\n        content += \"}\";\n      }\n\n      if (item[4]) {\n        content += \"}\";\n      }\n\n      return content;\n    }).join(\"\");\n  }; // import a list of modules into the list\n\n\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n\n    var alreadyImportedModules = {};\n\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n\n      list.push(item);\n    }\n  };\n\n  return list;\n};\n\n//# sourceURL=webpack://2nd-capstone-project/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://2nd-capstone-project/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ \"./node_modules/css-loader/dist/cjs.js!./src/style.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://2nd-capstone-project/./src/style.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n\n  return updater;\n}\n\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://2nd-capstone-project/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n/* istanbul ignore next  */\n\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n\n    memo[target] = styleTarget;\n  }\n\n  return memo[target];\n}\n/* istanbul ignore next  */\n\n\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n\n  target.appendChild(style);\n}\n\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://2nd-capstone-project/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\n\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://2nd-capstone-project/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\n\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://2nd-capstone-project/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n\n  var needLayer = typeof obj.layer !== \"undefined\";\n\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n\n  css += obj.css;\n\n  if (needLayer) {\n    css += \"}\";\n  }\n\n  if (obj.media) {\n    css += \"}\";\n  }\n\n  if (obj.supports) {\n    css += \"}\";\n  }\n\n  var sourceMap = obj.sourceMap;\n\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  options.styleTagTransform(css, styleElement, options.options);\n}\n\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n\n  styleElement.parentNode.removeChild(styleElement);\n}\n/* istanbul ignore next  */\n\n\nfunction domAPI(options) {\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\n\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://2nd-capstone-project/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\n\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://2nd-capstone-project/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ \"./src/style.css\");\n/* harmony import */ var _modules_displayPokemon__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/displayPokemon */ \"./src/modules/displayPokemon.js\");\n/* harmony import */ var _modules_pokeCounter__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/pokeCounter */ \"./src/modules/pokeCounter.js\");\n\r\n\r\n\r\n\r\nwindow.onload = () => {\r\n  (0,_modules_displayPokemon__WEBPACK_IMPORTED_MODULE_1__.fetchPokemon)();\r\n  (0,_modules_pokeCounter__WEBPACK_IMPORTED_MODULE_2__[\"default\"])();\r\n};\r\n\n\n//# sourceURL=webpack://2nd-capstone-project/./src/index.js?");

/***/ }),

/***/ "./src/modules/createImg.js":
/*!**********************************!*\
  !*** ./src/modules/createImg.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ createPokeImage)\n/* harmony export */ });\nfunction createPokeImage(pokeID, containerDiv) {\r\n  const pokeImage = document.createElement('img');\r\n  pokeImage.src = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokeID}.png`;\r\n  containerDiv.append(pokeImage);\r\n}\n\n//# sourceURL=webpack://2nd-capstone-project/./src/modules/createImg.js?");

/***/ }),

/***/ "./src/modules/displayPokemon.js":
/*!***************************************!*\
  !*** ./src/modules/displayPokemon.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"fetchPokemon\": () => (/* binding */ fetchPokemon),\n/* harmony export */   \"fetchPokemonData\": () => (/* binding */ fetchPokemonData)\n/* harmony export */ });\n/* harmony import */ var _renderingPokemon_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./renderingPokemon.js */ \"./src/modules/renderingPokemon.js\");\n\r\n\r\nfunction fetchPokemonData(pokemon) {\r\n  const { url } = pokemon;\r\n  fetch(url)\r\n    .then((response) => response.json())\r\n    .then((pokeData) => {\r\n      pokeData.likes = 11;\r\n      (0,_renderingPokemon_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(pokeData);\r\n    });\r\n}\r\n\r\nfunction fetchPokemon() {\r\n  fetch('https://pokeapi.co/api/v2/pokemon?limit=9')\r\n    .then((response) => response.json())\r\n    .then((allpokemon) => {\r\n      allpokemon.results.forEach((pokemon) => {\r\n        fetchPokemonData(pokemon);\r\n      });\r\n    });\r\n}\n\n//# sourceURL=webpack://2nd-capstone-project/./src/modules/displayPokemon.js?");

/***/ }),

/***/ "./src/modules/likeCounter.js":
/*!************************************!*\
  !*** ./src/modules/likeCounter.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"countLikes\": () => (/* binding */ countLikes),\n/* harmony export */   \"getLikes\": () => (/* binding */ getLikes)\n/* harmony export */ });\nconst getLikes = async () => {\r\n  const likesData = await fetch('https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/8d5UQy3q00JntMkUFlri/likes');\r\n  const allLikes = await likesData.json();\r\n  return allLikes;\r\n};\r\n\r\nconst updateLikes = async (id) => {\r\n  const store = await getLikes();\r\n  let results = 0;\r\n  store.forEach((e) => {\r\n    if (e.item_id.toString() === id.toString()) {\r\n      results = e.likes;\r\n    }\r\n  });\r\n  return results;\r\n};\r\n\r\nconst countLikes = async (id, containerDiv) => {\r\n  const likes = await updateLikes(id);\r\n  console.log(likes);\r\n  containerDiv.innerHTML = `${likes}`;\r\n};\r\n\n\n//# sourceURL=webpack://2nd-capstone-project/./src/modules/likeCounter.js?");

/***/ }),

/***/ "./src/modules/pokeCounter.js":
/*!************************************!*\
  !*** ./src/modules/pokeCounter.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ pokeCounter)\n/* harmony export */ });\nasync function pokeCounter() {\r\n  fetch('https://pokeapi.co/api/v2/pokemon?limit=9')\r\n    .then((response) => response.json())\r\n    .then((allpokemon) => {\r\n      const counter = allpokemon.results.length;\r\n      const pokeCounter = document.querySelector('.pokeCounter');\r\n      pokeCounter.innerHTML = `${counter} pokemon displayed`;\r\n    });\r\n}\r\n\n\n//# sourceURL=webpack://2nd-capstone-project/./src/modules/pokeCounter.js?");

/***/ }),

/***/ "./src/modules/pokemonClass.js":
/*!*************************************!*\
  !*** ./src/modules/pokemonClass.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Pokemon)\n/* harmony export */ });\nclass Pokemon {\n  constructor(pokemonName) {\n    this.pokemonName = pokemonName;\n    this.url = `https://pokeapi.co/api/v2/pokemon/${this.pokemonName}`;\n    this.likesUrl = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/8d5UQy3q00JntMkUFlri/likes/';\n    this.commentsUrl = `https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/8d5UQy3q00JntMkUFlri/comments?item_id=${this.pokemonName}`;\n    this.picture = '';\n    this.weight = 0;\n    this.height = 0;\n    this.species = '';\n    this.types = [];\n    this.likes = 0;\n    this.comments = [];\n  }\n\n  async fetchPokemon() {\n    await fetch(this.url)\n      .then(async (response) => {\n        await response.json().then((data) => {\n          this.picture = data.sprites.other['official-artwork'].front_default;\n          this.weight = data.weight;\n          this.types = data.types;\n          this.height = data.height;\n          this.species = data.species.name;\n        });\n      });\n  }\n\n  async getWeight() {\n    await this.fetchPokemon();\n    return this.weight;\n  }\n\n  async fetchLikes() {\n    const response = await fetch(this.likesUrl)\n      .then((response) => response.json());\n    return response;\n  }\n\n  async updateLikes() {\n    const name = this.pokemonName;\n    this.likes = this.fetchLikes().name;\n    return name;\n  }\n\n  async postLike() {\n    const body = { likes: this.likes, pokemonName: this.pokemonName };\n    fetch(this.likesUrl, {\n      method: 'POST',\n      headers: {\n        'Content-Type': 'application/json',\n      },\n      body: JSON.stringify(body),\n    });\n  }\n\n  async fetchComments() {\n    const response = await fetch(this.commentsUrl)\n      .then((response) => response.json());\n    return response;\n  }\n\n  async updateComments() {\n    this.comments = await this.fetchComments();\n    return this.comments;\n  }\n\n  async postComment(username, comment) {\n    const body = {\n      item_id: this.pokemonName, username, comment,\n    };\n\n    return fetch(this.commentsUrl, {\n      method: 'POST',\n      headers: {\n        'Content-Type': 'application/json',\n      },\n      body: JSON.stringify(body),\n    });\n  }\n}\n\n//# sourceURL=webpack://2nd-capstone-project/./src/modules/pokemonClass.js?");

/***/ }),

/***/ "./src/modules/popup.js":
/*!******************************!*\
  !*** ./src/modules/popup.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Popup)\n/* harmony export */ });\n/* harmony import */ var _pokemonClass_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pokemonClass.js */ \"./src/modules/pokemonClass.js\");\n\n\nclass Popup extends _pokemonClass_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"] {\n  constructor(pokemon) {\n    super(pokemon);\n    this.img = window.document.getElementById('pokemonImg');\n    this.title = window.document.getElementById('pokemonName');\n    this.weightElement = window.document.getElementById('Weight');\n    this.typesElement = window.document.getElementById('types');\n    this.commentsCount = window.document.getElementById('commentsCount');\n    this.commentsDiv = window.document.getElementById('comments');\n    this.commentInput = window.document.getElementById('comment');\n    this.userName = window.document.getElementById('userName');\n    this.commentBtn = window.document.querySelector('#commentBtn');\n    this.closeButton = window.document.getElementById('close');\n    this.popup = window.document.querySelector('#popup');\n    this.heightP = window.document.getElementById('Height');\n    this.speciesP = window.document.getElementById('Species');\n  }\n\n  async populateHtml() {\n    this.populatePokedata();\n    this.populateComments();\n  }\n\n  async populatePokedata() {\n    this.typesElement.innerHTML = '';\n    await this.fetchPokemon().then(() => {\n      this.title.innerText = this.pokemonName;\n      this.heightP.innerHTML = `Height: ${this.height}`;\n      this.speciesP.innerHTML = `Species: ${this.species}`;\n      this.typesElement.innerHTML = '';\n      this.img.src = this.picture;\n      this.weightElement.innerText = `Weight: ${this.weight}`;\n      this.types.forEach((type) => {\n        const typeName = type.type.name;\n        const typeElement = window.document.createElement('li');\n        typeElement.innerText = typeName;\n        this.typesElement.appendChild(typeElement);\n      });\n    });\n  }\n\n  async populateComments() {\n    this.commentsDiv.innerHTML = '';\n    await this.updateComments().then(() => {\n      this.comments.forEach((comment) => {\n        const userName = comment.username;\n        const commentary = comment.comment;\n        const text = `${comment.creation_date} ${userName}: ${commentary}`;\n        const li = document.createElement('li');\n        li.innerText = text;\n        this.commentsDiv.appendChild(li);\n      });\n    });\n    this.commentsCount.innerText = `(${this.countComments()})`;\n  }\n\n  closePopup() {\n    const btn = this.closeButton;\n    const pop = this.popup;\n    btn.addEventListener('click', () => {\n      pop.style.display = 'none';\n    });\n  }\n\n  showPopup() {\n    this.popup.style.display = 'block';\n  }\n\n  countComments() {\n    return this.comments.length;\n  }\n\n  sendComment() {\n    this.commentInput = window.document.getElementById('comment');\n    this.userName = window.document.getElementById('userName');\n    const { userName, commentInput } = this;\n    const post = async () => { await this.postComment(userName.value, commentInput.value); };\n    const updateHtml = async () => { await this.populateComments(); };\n    this.commentBtn.addEventListener('click', () => {\n      if (userName.value !== '' && commentInput.value !== '') {\n        post();\n        this.comments.push({ userName: userName.value, comment: commentInput.value });\n        updateHtml();\n        userName.value = '';\n        commentInput.value = '';\n      }\n    });\n  }\n}\n\n//# sourceURL=webpack://2nd-capstone-project/./src/modules/popup.js?");

/***/ }),

/***/ "./src/modules/postLikes.js":
/*!**********************************!*\
  !*** ./src/modules/postLikes.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ postLikes)\n/* harmony export */ });\nasync function postLikes(id) {\r\n  await fetch('https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/8d5UQy3q00JntMkUFlri/likes', {\r\n    method: 'POST',\r\n    headers: {\r\n      accept: 'application/json',\r\n      'content-type': 'application/json',\r\n    },\r\n    body: JSON.stringify({\r\n      item_id: id,\r\n    }),\r\n  });\r\n}\n\n//# sourceURL=webpack://2nd-capstone-project/./src/modules/postLikes.js?");

/***/ }),

/***/ "./src/modules/renderingPokemon.js":
/*!*****************************************!*\
  !*** ./src/modules/renderingPokemon.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ renderPokemon)\n/* harmony export */ });\n/* harmony import */ var _postLikes_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./postLikes.js */ \"./src/modules/postLikes.js\");\n/* harmony import */ var _likeCounter_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./likeCounter.js */ \"./src/modules/likeCounter.js\");\n/* harmony import */ var _createImg_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./createImg.js */ \"./src/modules/createImg.js\");\n/* harmony import */ var _popup_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./popup.js */ \"./src/modules/popup.js\");\n\n\n\n\n\nfunction renderPokemon(pokeData) {\n  const allPokemonContainer = document.getElementById('cards-container');\n  // create card\n  const pokeContainer = document.createElement('div');\n  pokeContainer.classList.add('card');\n  pokeContainer.setAttribute('id', 'pokeCard');\n  // insert info\n  const imageContainer = document.createElement('div');\n  imageContainer.classList.add('sprite-container');\n  const pokeName = document.createElement('h4');\n  pokeName.innerText = pokeData.name;\n  const pokeNumber = document.createElement('p');\n  pokeNumber.innerText = `#${pokeData.id}`;\n  (0,_createImg_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(pokeData.id, imageContainer);\n\n  // likes\n  const likesContainer = document.createElement('div');\n  likesContainer.classList.add('likes-container');\n  const likesHeart = document.createElement('i');\n  likesHeart.className = 'far fa-heart';\n  likesHeart.setAttribute('id', `${pokeData.id}`);\n  const likesCounter = document.createElement('p');\n  likesHeart.addEventListener('click', () => {\n    pokeData.likes += 1;\n    likesCounter.innerHTML = pokeData.likes;\n    (0,_postLikes_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(pokeData.id);\n  });\n  (0,_likeCounter_js__WEBPACK_IMPORTED_MODULE_1__.countLikes)(pokeData.id, likesCounter);\n  likesContainer.append(likesHeart, likesCounter);\n\n  // comment button\n  const commentButton = document.createElement('button');\n  commentButton.classList.add('comment');\n  commentButton.innerText = 'Comment';\n  commentButton.setAttribute('id', `${pokeData.id}`);\n  commentButton.addEventListener('click', () => {\n    const pop = new _popup_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"](pokeData.name);\n    pop.populateHtml();\n    pop.showPopup();\n    pop.closePopup();\n  });\n  pokeContainer.append(imageContainer, pokeName, pokeNumber, likesContainer, commentButton);\n\n  allPokemonContainer.appendChild(pokeContainer);\n}\n\n\n//# sourceURL=webpack://2nd-capstone-project/./src/modules/renderingPokemon.js?");

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