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

/***/ "./node_modules/css-loader/dist/cjs.js!./src/styles/main.css":
/*!*******************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/styles/main.css ***!
  \*******************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/getUrl.js */ \"./node_modules/css-loader/dist/runtime/getUrl.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);\n// Imports\n\n\n\nvar ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ../images/background.jpeg */ \"./src/images/background.jpeg\"), __webpack_require__.b);\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\nvar ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, `* {\r\n    padding: 0;\r\n    margin: 0;\r\n    font-family: sans-serif;\r\n}\r\nhtml, body {\r\n    margin: 0;\r\n    padding: 0;\r\n    overflow-x: hidden; /* Hide horizontal overflow */\r\n    width: 100vw;\r\n    box-sizing: border-box;\r\n}\r\n\r\n:root {\r\n    --dark-seeThrough: rgba(0, 0, 0, 0.5);\r\n    --dark-seeThroughHalf: rgba(0, 0, 0, 0.8);\r\n    --buttob-blue: rgb(18, 18, 187);\r\n    \r\n}\r\n\r\nbody {\r\n    background: url(${___CSS_LOADER_URL_REPLACEMENT_0___});\r\n    background-repeat: no-repeat;\r\n    background-size: cover;\r\n    height: 100vh;\r\n}\r\n\r\n#content {\r\n    color: rgb(255, 255, 255);\r\n    height: calc(90vh - 20px );\r\n    max-width: 100vw;\r\n    \r\n    display: flex;\r\n    flex-direction: column;\r\n    align-items: center;\r\n    justify-content: center;\r\n}\r\n\r\nheader {\r\n    display: flex;\r\n    justify-content: space-between;\r\n    background-color: var(--dark-seeThrough);\r\n    /* padding: 10px 25px; */\r\n    height: 10vh;\r\n}\r\n\r\n.logo {\r\n    width: 250px;\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n    color: white;\r\n}\r\n\r\nnav {\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n    gap: 15px;\r\n    height: 50px;\r\n    \r\n}\r\n\r\nheader button {\r\n    height: fit-content;\r\n    background-color: rgba(18, 18, 187, 0);\r\n    color: white;\r\n    border: 0;\r\n    border-radius: 5px;\r\n    padding: 5px 10px;  \r\n    align-self: flex-end;\r\n}\r\n\r\nheader button:hover, .clickedBTN {\r\n    background-color: rgb(0, 0, 0);\r\n    border-bottom: solid 3px white;\r\n    padding-bottom: 20px;    \r\n}\r\n\r\nheader button:hover {\r\n    background-color: rgb(0, 0, 0);\r\n}\r\n\r\n.homeDiv {\r\n    display: flex;\r\n    justify-content: space-around;\r\n    align-items: flex-start; /* Align items to the top */\r\n    height: 90%;\r\n}\r\n\r\n.homeText {\r\n    color: white;\r\n    background-color: var(--dark-seeThrough);\r\n    padding: 20px 25px;\r\n    width: 50%;\r\n    height: 90%;\r\n    overflow-y: auto; /* Use auto for scroll only when necessary */\r\n}\r\n.homeText::-webkit-scrollbar {\r\n    display: none;\r\n  }\r\n\r\n.reviews {\r\n    width: 30%;\r\n    background-color: var(--dark-seeThrough);\r\n    height: 70vh;\r\n    overflow-y: auto; /* Use auto for scroll only when necessary */\r\n    padding: 10px 30px;\r\n    margin-left: 10px; /* Add margin for spacing between homeText and reviews */\r\n}\r\n.reviews::-webkit-scrollbar {\r\n    display: none;\r\n  }\r\n\r\n@media (max-width: 768px) {\r\n    .logo {\r\n        font-size: 15px;\r\n    }\r\n    \r\n    .homeDiv {\r\n        flex-direction: column; /* Stack items vertically on smaller screens */\r\n        align-items: center; /* Center items horizontally */\r\n    }\r\n\r\n    .homeText {\r\n        width: 75%; /* Full width on smaller screens */\r\n        margin: 10px 0; /* Adjust margin for spacing */\r\n        height: 50vh; /* Adjust height as needed */\r\n    }\r\n\r\n    .reviews {\r\n        width: 75%; /* Full width on smaller screens */\r\n        margin: 10px 0; /* Adjust margin for spacing */\r\n        height: 50vh; /* Adjust height as needed */\r\n    }\r\n}\r\n\r\n.menuDiv {\r\n    display: flex;\r\n    flex-direction: column;\r\n    height: 90%;\r\n    font-size: 14px;\r\n    width: 95%;\r\n}\r\n\r\n.menuNav {\r\n    display: grid;\r\n    grid-template-columns: repeat(5, 1fr); /* 5 equal columns */\r\n    height: 30px;\r\n\r\n    button {\r\n        background-color: var(--dark-seeThrough);\r\n        flex: 1;\r\n        color: white;\r\n        border: 0;\r\n        border-bottom: solid 3px black;\r\n    }\r\n\r\n    .menuBTNClicked {\r\n    background-color: black;\r\n    border-bottom: 3px solid white;\r\n\r\n    }\r\n    \r\n}\r\n\r\n.menuNav button:hover {\r\n    /* background-color: gray; */\r\n    border-bottom: 3px solid white;\r\n}\r\n\r\n\r\n.menuContent {\r\n    color: white;\r\n    background-color: var(--dark-seeThrough);\r\n    /* border-left: 3px solid black;\r\n    border-right: 3px solid black;\r\n    border-bottom: 3px solid black; */\r\n    padding: 10px;\r\n    text-align: center;\r\n}\r\n\r\n.aboutDiv {\r\n    display: flex;\r\n    flex-direction: column;\r\n    height: 90%;\r\n    width: 80%;\r\n    padding: 20px;\r\n    background-color: var(--dark-seeThrough);\r\n    overflow-y: scroll;\r\n}\r\n.aboutDiv::-webkit-scrollbar {\r\n    display: none;\r\n  }\r\n\r\n\r\nul {\r\n    margin-left: 0;\r\n    padding-left: 0;\r\n    list-style-position: inside;\r\n}\r\n\r\nfooter {\r\n    height: 20px;\r\n    width: 100vw;\r\n    align-self: center;\r\n    justify-content: end;\r\n    background-color: var(--dark-seeThrough);\r\n    color: white;\r\n    display: flex;\r\n    justify-content: center;\r\n    margin-top: auto;\r\n    \r\n}\r\n`, \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://odin_restaurant/./src/styles/main.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = [];\n\n  // return the list of modules as css string\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n      content += cssWithMappingToString(item);\n      if (needLayer) {\n        content += \"}\";\n      }\n      if (item[2]) {\n        content += \"}\";\n      }\n      if (item[4]) {\n        content += \"}\";\n      }\n      return content;\n    }).join(\"\");\n  };\n\n  // import a list of modules into the list\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n    var alreadyImportedModules = {};\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n      list.push(item);\n    }\n  };\n  return list;\n};\n\n//# sourceURL=webpack://odin_restaurant/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (url, options) {\n  if (!options) {\n    options = {};\n  }\n  if (!url) {\n    return url;\n  }\n  url = String(url.__esModule ? url.default : url);\n\n  // If url is already wrapped in quotes, remove them\n  if (/^['\"].*['\"]$/.test(url)) {\n    url = url.slice(1, -1);\n  }\n  if (options.hash) {\n    url += options.hash;\n  }\n\n  // Should url be wrapped?\n  // See https://drafts.csswg.org/css-values-3/#urls\n  if (/[\"'() \\t\\n]|(%20)/.test(url) || options.needQuotes) {\n    return \"\\\"\".concat(url.replace(/\"/g, '\\\\\"').replace(/\\n/g, \"\\\\n\"), \"\\\"\");\n  }\n  return url;\n};\n\n//# sourceURL=webpack://odin_restaurant/./node_modules/css-loader/dist/runtime/getUrl.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://odin_restaurant/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/styles/main.css":
/*!*****************************!*\
  !*** ./src/styles/main.css ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_main_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./main.css */ \"./node_modules/css-loader/dist/cjs.js!./src/styles/main.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\noptions.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_main_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_main_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_main_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_main_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://odin_restaurant/./src/styles/main.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n  return result;\n}\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n    identifiers.push(identifier);\n  }\n  return identifiers;\n}\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n  return updater;\n}\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n    var newLastIdentifiers = modulesToDom(newList, options);\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n      var _index = getIndexByIdentifier(_identifier);\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://odin_restaurant/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n\n/* istanbul ignore next  */\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target);\n\n    // Special case to return head of iframe instead of iframe itself\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n    memo[target] = styleTarget;\n  }\n  return memo[target];\n}\n\n/* istanbul ignore next  */\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n  target.appendChild(style);\n}\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://odin_restaurant/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://odin_restaurant/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://odin_restaurant/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n  var needLayer = typeof obj.layer !== \"undefined\";\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n  css += obj.css;\n  if (needLayer) {\n    css += \"}\";\n  }\n  if (obj.media) {\n    css += \"}\";\n  }\n  if (obj.supports) {\n    css += \"}\";\n  }\n  var sourceMap = obj.sourceMap;\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  }\n\n  // For old IE\n  /* istanbul ignore if  */\n  options.styleTagTransform(css, styleElement, options.options);\n}\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n  styleElement.parentNode.removeChild(styleElement);\n}\n\n/* istanbul ignore next  */\nfunction domAPI(options) {\n  if (typeof document === \"undefined\") {\n    return {\n      update: function update() {},\n      remove: function remove() {}\n    };\n  }\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://odin_restaurant/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://odin_restaurant/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/about.js":
/*!**********************!*\
  !*** ./src/about.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   loadAbout: () => (/* binding */ loadAbout)\n/* harmony export */ });\n/* harmony import */ var _utils_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils/utils */ \"./src/utils/utils.js\");\n\r\n\r\n\r\nfunction loadAbout(){\r\n    const content = document.getElementById('content');\r\n    content.innerHTML = ''; // Clear previous content\r\n\r\n    const aboutDiv = createAboutDiv();\r\n    content.appendChild(aboutDiv);\r\n\r\n    const aboutBTN = document.getElementById('aboutBTN');\r\n    (0,_utils_utils__WEBPACK_IMPORTED_MODULE_0__.setActiveButton)(aboutBTN, 'clickedBTN', 'nav');\r\n\r\n    // const footer =  createElementWithText('footer', 'Copyright © 2024 bradlloy95');\r\n    // content.appendChild(footer)\r\n}\r\n\r\nfunction createAboutDiv() {\r\n    const aboutDiv = document.createElement('div');\r\n    aboutDiv.classList.add('aboutDiv');\r\n    \r\n    aboutDiv.innerHTML = `\r\n        <h2>Welcome to The Olde Hearth</h2>\r\n        <br>\r\n        <h5>Location:</h5>\r\n        <br>\r\n        <p>Nestled in the heart of Woodland Heights, The Olde Hearth is conveniently located at:</p>\r\n        <br>\r\n        <ul>\r\n            <li><strong>Address:</strong> 123 Oak Street, Woodland Heights, London, UK</li>\r\n        <br>\r\n            <li><strong>Phone:</strong> +44 1234 567890</li>\r\n        <br>\r\n            <li><strong>Email:</strong> info@oldehearth.co.uk</li>\r\n        <br>\r\n            <li><strong>Website:</strong> www.oldehearth.co.uk</li>\r\n        </ul>\r\n        <br>\r\n        \r\n        <h2>Our Cuisine</h2>\r\n        <br>\r\n        <p>At The Olde Hearth, we take pride in our authentic British dishes, prepared using time-honored \r\n        recipes passed down through generations. From succulent roast beef with Yorkshire pudding to rich \r\n        shepherd's pie and crispy fish and chips, each dish is crafted with care and showcases the comforting \r\n        flavors of classic British fare. We source the finest local ingredients to ensure freshness and quality\r\n         in every bite.</p>\r\n         <br>\r\n        <h2>The Experience</h2>\r\n        <br>\r\n        <p>At The Olde Hearth, we take pride in our authentic British dishes, prepared using time-honored \r\n        recipes passed down through generations. From succulent roast beef with Yorkshire pudding to rich \r\n        shepherd's pie and crispy fish and chips, each dish is crafted with care and showcases the comforting \r\n        flavors of classic British fare. We source the finest local ingredients to ensure freshness and quality\r\n         in every bite.</p>\r\n         <br>\r\n        <h2>Events and Catering:</h2>\r\n        <br>\r\n        <p>We also cater to private events and special occasions, ensuring that every gathering is memorable and \r\n        filled with delicious food and impeccable service. Contact us to discuss your event needs and how we can \r\n        make it extraordinary.\r\n        </p>\r\n         <br>\r\n    `\r\n\r\n    return aboutDiv;\r\n}\n\n//# sourceURL=webpack://odin_restaurant/./src/about.js?");

/***/ }),

/***/ "./src/home.js":
/*!*********************!*\
  !*** ./src/home.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   loadHome: () => (/* binding */ loadHome)\n/* harmony export */ });\n/* harmony import */ var _utils_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils/utils */ \"./src/utils/utils.js\");\n\r\n\r\nfunction loadHome() {\r\n    const content = document.getElementById('content');\r\n    content.innerHTML = ''; // Clear previous content\r\n\r\n    const homeDiv = createHomeDiv();\r\n    content.appendChild(homeDiv);\r\n\r\n    const homeBTN = document.getElementById('homeBTN', );\r\n    (0,_utils_utils__WEBPACK_IMPORTED_MODULE_0__.setActiveButton)(homeBTN, 'clickedBTN', 'nav');\r\n\r\n    // const footer =  createElementWithText('footer', 'Copyright © 2024 bradlloy95');\r\n    // content.appendChild(footer)\r\n\r\n\r\n}\r\n\r\nfunction createHomeDiv() {\r\n    const homeDiv = document.createElement('div');\r\n    homeDiv.classList.add('homeDiv')\r\n    \r\n\r\n    const homeText = document.createElement('p');\r\n    homeText.innerHTML = `\r\n        <h3>Welcome to \"The Olde Hearth\"</h3>\r\n        <br>\r\n        <br>\r\n        <p>Nestled in the heart of our charming town, The Olde Hearth is a beloved family-run restaurant that has been serving traditional British family meals for over three generations. Our story began in the early 1950s, when the Smith family opened their doors to share their passion for hearty, home-cooked meals with the community. Today, we continue to uphold that legacy, offering a warm and welcoming atmosphere where everyone feels at home.</p>\r\n        <br>\r\n        <p>At The Olde Hearth, we pride ourselves on using time-honored recipes passed down through the generations. Each dish is crafted with love and care, bringing the comforting flavors of classic British cuisine to your table. Our menu features a delightful array of traditional favorites, including succulent roast beef with Yorkshire pudding, rich and savory shepherd's pie, and our famous fish and chips, fried to golden perfection.</p>\r\n        <br>\r\n        <p>Every meal is prepared with the finest locally-sourced ingredients, ensuring that each bite is fresh, flavorful, and true to our British roots. Our cozy, rustic dining room, with its wooden beams and roaring fireplace, creates the perfect setting for a family gathering, a special celebration, or a casual meal with friends.</p>\r\n        <br>\r\n        <p>The Olde Hearth is not just a restaurant; it’s a place where memories are made. Whether you’re enjoying a Sunday roast, indulging in a hearty breakfast, or savoring a sweet dessert, you'll be treated like family from the moment you walk through our doors. We believe in the power of good food to bring people together, and we look forward to welcoming you to our table.</p>\r\n        <br>\r\n        <p>Come and experience the taste of tradition at The Olde Hearth, where every meal is a cherished part of our family heritage.</p>\r\n    `\r\n\r\n    homeText.classList.add('homeText')\r\n    \r\n\r\n    homeDiv.appendChild(homeText);\r\n\r\n    const reviewDiv = document.createElement('div');\r\n    reviewDiv.classList.add('reviews')\r\n\r\n    reviewDiv.innerHTML = `\r\n        <h2>Customer reviews</h2>\r\n        <br> \r\n        <h3>Emma Thompson:</h3>\r\n        <br>\r\n        <br>\r\n        <p>\r\n        \"The Olde Hearth is a gem! From the moment we walked in, we felt like part of the family. T\r\n        he atmosphere is cozy and welcoming, and the food is simply outstanding. \r\n        I had the roast beef with Yorkshire pudding, and it was cooked to perfection. \r\n        My kids loved the fish and chips. We'll definitely be coming back soon!\"\r\n        </p>\r\n        <br>\r\n        <br>\r\n        <br>\r\n        <h3>David Clark:</h3>\r\n        <br>\r\n        <br>\r\n        <p>\r\n        \"I can't say enough good things about The Olde Hearth. The shepherd's pie was delicious, \r\n        with a rich and savory filling that reminded me of my grandma's cooking. The staff is incredibly friendly and attentive, \r\n        making sure we had everything we needed. It's the perfect spot for a family meal or a special occasion.\"\r\n        </p>\r\n    `\r\n\r\n    homeDiv.appendChild(reviewDiv);\r\n\r\n\r\n    return homeDiv;\r\n}\r\n\r\n\r\n\r\n\n\n//# sourceURL=webpack://odin_restaurant/./src/home.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _home__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home */ \"./src/home.js\");\n/* harmony import */ var _menu__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./menu */ \"./src/menu.js\");\n/* harmony import */ var _about__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./about */ \"./src/about.js\");\n/* harmony import */ var _utils_utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./utils/utils */ \"./src/utils/utils.js\");\n/* harmony import */ var _styles_main_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./styles/main.css */ \"./src/styles/main.css\");\n\r\n\r\n\r\n\r\n\r\n\r\n//import './images/restaurant.jpeg'\r\nconst content = document.getElementById('content');\r\nconst header = document.getElementById('header');\r\nconst body = document.getElementById('body');\r\n\r\nfunction init() {\r\n    clearContent();\r\n    (0,_home__WEBPACK_IMPORTED_MODULE_0__.loadHome)();\r\n    createFooter();\r\n}\r\n\r\nfunction clearContent() {\r\n    header.innerHTML = '';\r\n    createNav();    \r\n    content.innerHTML = '';   \r\n    removeFooter(); // Add this line to remove footer\r\n}\r\n\r\nfunction createNav() {\r\n    const nav = document.createElement('nav');\r\n\r\n    const title = document.createElement('h1');\r\n    title.textContent = 'The Olde Hearth';\r\n    title.classList.add('logo');\r\n    header.appendChild(title);\r\n\r\n    const buttons = [\r\n        { text: 'Home', id: 'homeBTN', loadFunction: _home__WEBPACK_IMPORTED_MODULE_0__.loadHome },\r\n        { text: 'Menu', id: 'menuBTN', loadFunction: _menu__WEBPACK_IMPORTED_MODULE_1__.loadMenu },\r\n        { text: 'About', id: 'aboutBTN', loadFunction: _about__WEBPACK_IMPORTED_MODULE_2__.loadAbout }\r\n    ];\r\n\r\n    buttons.forEach(({ text, id, loadFunction }) => {\r\n        const button = document.createElement('button');\r\n        button.textContent = text;\r\n        button.setAttribute('id', id);\r\n        button.addEventListener('click', () => {\r\n            clearContent();\r\n            loadFunction();\r\n            createFooter();\r\n        });\r\n        nav.appendChild(button);\r\n    });\r\n\r\n    header.appendChild(nav);\r\n\r\n    const spacer = document.createElement('div');\r\n    spacer.classList.add('logo');\r\n    header.appendChild(spacer);\r\n}\r\n\r\ndocument.addEventListener('DOMContentLoaded', () => {\r\n    console.log('loaded');\r\n    init();\r\n});\r\n\r\nfunction createFooter() {\r\n    const footer = document.createElement('footer');\r\n    footer.textContent = 'Copyright © 2024 bradlloy95';\r\n    document.body.appendChild(footer);\r\n}\r\n\r\nfunction removeFooter() {\r\n    const footer = document.querySelector('footer');\r\n    if (footer) {\r\n        footer.remove();\r\n    }\r\n}\r\n\n\n//# sourceURL=webpack://odin_restaurant/./src/index.js?");

/***/ }),

/***/ "./src/menu.js":
/*!*********************!*\
  !*** ./src/menu.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   loadMenu: () => (/* binding */ loadMenu)\n/* harmony export */ });\n/* harmony import */ var _utils_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils/utils */ \"./src/utils/utils.js\");\n\r\n\r\n\r\nconst menu = [\r\n    [\r\n        { name: 'Soup of the Day', description: 'Freshly made soup served with crusty bread.', price: '£4.95' },\r\n        { name: 'Prawn Cocktail', description: 'Juicy prawns in a tangy Marie Rose sauce, served with crisp lettuce and brown bread.', price: '£6.50' },\r\n        { name: 'Welsh Rarebit', description: 'Cheesy toast with a hint of mustard, served with a side salad.', price: '£5.50' },\r\n        { name: 'Black Pudding and Apple Stack', description: 'Slices of black pudding layered with caramelized apple, drizzled with balsamic glaze.', price: '£5.95' }\r\n    ],\r\n    [\r\n        { name: 'Roast Beef and Yorkshire Pudding', description: 'Tender roast beef served with homemade Yorkshire pudding, roast potatoes, seasonal vegetables, and rich gravy.', price: '£13.95' },\r\n        { name: 'Fish and Chips', description: 'Freshly battered fish served with chunky chips, mushy peas, and tartar sauce.', price: '£11.95' },\r\n        { name: \"Shepherd's Pie\", description: 'Hearty minced lamb topped with creamy mashed potatoes, served with seasonal vegetables.', price: '£12.50' },\r\n        { name: 'Chicken and Leek Pie', description: 'Succulent chicken and leek in a creamy sauce, encased in golden pastry, served with mashed potatoes and gravy.', price: '£12.95' }\r\n    ],\r\n    [\r\n        { name: 'Seasonal Vegetables', description: '', price: '£3.00' },\r\n        { name: 'Chunky Chips', description: '', price: '£3.00' },\r\n        { name: 'Mashed Potatoes', description: '', price: '£3.00' },\r\n        { name: 'Side Salad', description: '', price: '£3.00' }\r\n    ],\r\n[\r\n        { name: 'Sticky Toffee Pudding', description: 'Rich toffee sponge served with toffee sauce and vanilla ice cream.', price: '£5.50' },\r\n        { name: 'Apple Crumble', description: 'Warm apple crumble served with custard or vanilla ice cream.', price: '£5.50' },\r\n        { name: 'Eton Mess', description: 'A classic British dessert of strawberries, meringue, and cream.', price: '£5.50' },\r\n        { name: 'Treacle Tart', description: 'Sweet treacle tart served with clotted cream.', price: '£5.50' }\r\n    ],\r\n    [\r\n        { name: 'Tea and Coffee', description: 'A selection of teas and freshly brewed coffee.', price: '£2.50' },\r\n        { name: 'Soft Drinks', description: 'A variety of soft drinks available.', price: '£2.00' },\r\n        { name: 'Beers and Ales', description: 'A selection of local beers and ales.', price: '£3.50' },\r\n        { name: 'House Wine', description: 'Red, white, or rosé, available by the glass or bottle.', price: '£4.50 per glass | £18.00 per bottle' }\r\n    ]\r\n];\r\n\r\nconst buttons = [\r\n    { text: 'Starters', id: 'menuBTNClicked', arrayIndex: 0 },\r\n    { text: 'Mains', id: 'mainsBTN', arrayIndex: 1},\r\n    { text: 'Sides', id: 'sidesBTN', arrayIndex: 2},\r\n    { text: 'Desserts', id: 'dessertsBTN', arrayIndex: 3},\r\n    { text: 'Drinks', id: 'drinksBTN', arrayIndex: 4},\r\n];\r\n\r\n\r\nfunction createMenuItem(section){\r\n    const itemDiv = document.createElement('div');\r\n    \r\n    section.forEach(item => {\r\n        const items = document.createElement('div');\r\n        items.innerHTML = `\r\n        <br>\r\n            <h3>${item.name}: ${item.description} ${item.price}</h3>\r\n        <br>            \r\n        `\r\n\r\n        itemDiv.appendChild(items);\r\n    })\r\n    return itemDiv\r\n}\r\n\r\n\r\n\r\n\r\nfunction loadMenu(){\r\n    const content = document.getElementById('content');\r\n    content.innerHTML = ''; // Clear previous content\r\n\r\n    const menuDiv = createMenuDiv();\r\n    content.appendChild(menuDiv);\r\n\r\n    const menuBTN = document.getElementById('menuBTN');\r\n    (0,_utils_utils__WEBPACK_IMPORTED_MODULE_0__.setActiveButton)(menuBTN, 'clickedBTN', 'nav');\r\n\r\n    // const footer =  createElementWithText('footer', 'Copyright © 2024 bradlloy95');\r\n    // content.appendChild(footer)\r\n}\r\n\r\n\r\nfunction createMenuDiv() {\r\n    \r\n\r\n    //create div\r\n    const menuDiv = (0,_utils_utils__WEBPACK_IMPORTED_MODULE_0__.createElementWithClass)('div', 'menuDiv');\r\n  \r\n\r\n    //create nav \r\n    const menuNav = (0,_utils_utils__WEBPACK_IMPORTED_MODULE_0__.createElementWithClass)('div', 'menuNav')\r\n\r\n    const menuContent = (0,_utils_utils__WEBPACK_IMPORTED_MODULE_0__.createElementWithClass)('div', 'menuContent')\r\n    \r\n    buttons.forEach(({ text, id, arrayIndex}) => {\r\n        const button = (0,_utils_utils__WEBPACK_IMPORTED_MODULE_0__.createElementWithClass)('button', id);\r\n        button.textContent = text;\r\n        button.addEventListener('click', () => {\r\n            menuContent.innerHTML = ''\r\n           const itemDiv = createMenuItem(menu[arrayIndex])\r\n           menuContent.appendChild(itemDiv);\r\n\r\n            \r\n           \r\n            (0,_utils_utils__WEBPACK_IMPORTED_MODULE_0__.setActiveButton)(button, 'menuBTNClicked', '.menuNav')                        \r\n        });\r\n        menuNav.appendChild(button)\r\n\r\n    });\r\n    \r\n    //set default\r\n    \r\n    const itemDiv = createMenuItem(menu[0]);\r\n    menuContent.appendChild(itemDiv);    \r\n    \r\n    const BTNS = document.querySelectorAll('button')\r\n    console.log(BTNS)\r\n\r\n    menuDiv.appendChild(menuNav);\r\n    menuDiv.appendChild(menuContent)\r\n\r\n    return menuDiv;\r\n}\r\n\r\n\n\n//# sourceURL=webpack://odin_restaurant/./src/menu.js?");

/***/ }),

/***/ "./src/utils/utils.js":
/*!****************************!*\
  !*** ./src/utils/utils.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   createElementWithClass: () => (/* binding */ createElementWithClass),\n/* harmony export */   createElementWithText: () => (/* binding */ createElementWithText),\n/* harmony export */   setActiveButton: () => (/* binding */ setActiveButton)\n/* harmony export */ });\nfunction createElementWithText(tag, text) {\r\n    const element = document.createElement(tag);\r\n    element.textContent = text;\r\n    return element;\r\n}\r\n\r\nfunction setActiveButton(button, Class, currentTag) {\r\n    const buttons = document.querySelectorAll(`${currentTag} button`);\r\n    buttons.forEach(btn => btn.classList.remove(Class));\r\n    \r\n    button.classList.add(Class);\r\n}\r\n\r\nfunction createElementWithClass(tag, Class) {\r\n    const element = document.createElement(tag);\r\n    element.classList.add(Class);\r\n    return element\r\n}\n\n//# sourceURL=webpack://odin_restaurant/./src/utils/utils.js?");

/***/ }),

/***/ "./src/images/background.jpeg":
/*!************************************!*\
  !*** ./src/images/background.jpeg ***!
  \************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"images/background.25fe71dd75d68b0e8385.jpeg\";\n\n//# sourceURL=webpack://odin_restaurant/./src/images/background.jpeg?");

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
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
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
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
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
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && (!scriptUrl || !/^http(s?):/.test(scriptUrl))) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
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