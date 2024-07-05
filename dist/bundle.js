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

/***/ "./src/about.js":
/*!**********************!*\
  !*** ./src/about.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   loadAbout: () => (/* binding */ loadAbout)\n/* harmony export */ });\n/* harmony import */ var _utils_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils/utils */ \"./src/utils/utils.js\");\n\r\n\r\n\r\nfunction loadAbout(){\r\n    const content = document.getElementById('content');\r\n    content.innerHTML = ''; // Clear previous content\r\n\r\n    const aboutDiv = createAboutDiv();\r\n    content.appendChild(aboutDiv);\r\n\r\n    const aboutBTN = document.getElementById('aboutBTN');\r\n    (0,_utils_utils__WEBPACK_IMPORTED_MODULE_0__.setActiveButton)(aboutBTN, 'clickedBTN', 'nav');\r\n\r\n    const footer =  (0,_utils_utils__WEBPACK_IMPORTED_MODULE_0__.createElementWithText)('footer', 'Copyright © 2024 bradlloy95');\r\n    content.appendChild(footer)\r\n}\r\n\r\nfunction createAboutDiv() {\r\n    const homeDiv = document.createElement('div');\r\n    homeDiv.classList.add('contentDiv');\r\n\r\n    const homeTitle = (0,_utils_utils__WEBPACK_IMPORTED_MODULE_0__.createElementWithText)('h1', 'About');\r\n    const homeText = (0,_utils_utils__WEBPACK_IMPORTED_MODULE_0__.createElementWithText)('p', 'About my restaurant');\r\n\r\n    homeDiv.appendChild(homeTitle);\r\n    homeDiv.appendChild(homeText);\r\n\r\n    return homeDiv;\r\n}\n\n//# sourceURL=webpack://odin_restaurant/./src/about.js?");

/***/ }),

/***/ "./src/home.js":
/*!*********************!*\
  !*** ./src/home.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   loadHome: () => (/* binding */ loadHome)\n/* harmony export */ });\n/* harmony import */ var _utils_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils/utils */ \"./src/utils/utils.js\");\n\r\n\r\nfunction loadHome() {\r\n    const content = document.getElementById('content');\r\n    content.innerHTML = ''; // Clear previous content\r\n\r\n    const homeDiv = createHomeDiv();\r\n    content.appendChild(homeDiv);\r\n\r\n    const homeBTN = document.getElementById('homeBTN', );\r\n    (0,_utils_utils__WEBPACK_IMPORTED_MODULE_0__.setActiveButton)(homeBTN, 'clickedBTN', 'nav');\r\n\r\n    const footer =  (0,_utils_utils__WEBPACK_IMPORTED_MODULE_0__.createElementWithText)('footer', 'Copyright © 2024 bradlloy95');\r\n    content.appendChild(footer)\r\n\r\n\r\n}\r\n\r\nfunction createHomeDiv() {\r\n    const homeDiv = document.createElement('div');\r\n    homeDiv.classList.add('homeDiv')\r\n    \r\n\r\n    const homeText = document.createElement('p');\r\n    homeText.innerHTML = `\r\n        <h3>Welcome to \"The Olde Hearth\"</h3>\r\n        <br>\r\n        <br>\r\n        <p>Nestled in the heart of our charming town, The Olde Hearth is a beloved family-run restaurant that has been serving traditional British family meals for over three generations. Our story began in the early 1950s, when the Smith family opened their doors to share their passion for hearty, home-cooked meals with the community. Today, we continue to uphold that legacy, offering a warm and welcoming atmosphere where everyone feels at home.</p>\r\n        <br>\r\n        <p>At The Olde Hearth, we pride ourselves on using time-honored recipes passed down through the generations. Each dish is crafted with love and care, bringing the comforting flavors of classic British cuisine to your table. Our menu features a delightful array of traditional favorites, including succulent roast beef with Yorkshire pudding, rich and savory shepherd's pie, and our famous fish and chips, fried to golden perfection.</p>\r\n        <br>\r\n        <p>Every meal is prepared with the finest locally-sourced ingredients, ensuring that each bite is fresh, flavorful, and true to our British roots. Our cozy, rustic dining room, with its wooden beams and roaring fireplace, creates the perfect setting for a family gathering, a special celebration, or a casual meal with friends.</p>\r\n        <br>\r\n        <p>The Olde Hearth is not just a restaurant; it’s a place where memories are made. Whether you’re enjoying a Sunday roast, indulging in a hearty breakfast, or savoring a sweet dessert, you'll be treated like family from the moment you walk through our doors. We believe in the power of good food to bring people together, and we look forward to welcoming you to our table.</p>\r\n        <br>\r\n        <p>Come and experience the taste of tradition at The Olde Hearth, where every meal is a cherished part of our family heritage.</p>\r\n    `\r\n\r\n    homeText.classList.add('homeText')\r\n    \r\n\r\n    homeDiv.appendChild(homeText);\r\n\r\n    const reviewDiv = document.createElement('div');\r\n    reviewDiv.classList.add('reviews')\r\n\r\n    reviewDiv.innerHTML = `\r\n        <h2>Customer reviews</h2>\r\n        <br> \r\n        <h3>Emma Thompson:</h3>\r\n        <br>\r\n        <br>\r\n        <p>\r\n        \"The Olde Hearth is a gem! From the moment we walked in, we felt like part of the family. T\r\n        he atmosphere is cozy and welcoming, and the food is simply outstanding. \r\n        I had the roast beef with Yorkshire pudding, and it was cooked to perfection. \r\n        My kids loved the fish and chips. We'll definitely be coming back soon!\"\r\n        </p>\r\n        <br>\r\n        <br>\r\n        <br>\r\n        <h3>David Clark:</h3>\r\n        <br>\r\n        <br>\r\n        <p>\r\n        \"I can't say enough good things about The Olde Hearth. The shepherd's pie was delicious, \r\n        with a rich and savory filling that reminded me of my grandma's cooking. The staff is incredibly friendly and attentive, \r\n        making sure we had everything we needed. It's the perfect spot for a family meal or a special occasion.\"\r\n        </p>\r\n    `\r\n\r\n    homeDiv.appendChild(reviewDiv);\r\n\r\n\r\n    return homeDiv;\r\n}\r\n\r\n\r\n\r\n\n\n//# sourceURL=webpack://odin_restaurant/./src/home.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _home__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home */ \"./src/home.js\");\n/* harmony import */ var _menu__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./menu */ \"./src/menu.js\");\n/* harmony import */ var _about__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./about */ \"./src/about.js\");\n/* harmony import */ var _utils_utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./utils/utils */ \"./src/utils/utils.js\");\nObject(function webpackMissingModule() { var e = new Error(\"Cannot find module './styles/main.css'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }());\n\r\n\r\n\r\n\r\n\r\n\r\n//import './images/restaurant.jpeg'\r\nconst content = document.getElementById('content');\r\nconst header = document.getElementById('header');\r\n\r\nfunction init() {\r\n    clearContent();\r\n    (0,_home__WEBPACK_IMPORTED_MODULE_0__.loadHome)();\r\n}\r\n\r\nfunction clearContent() {\r\n    header.innerHTML = '';\r\n    createNav();    \r\n    content.innerHTML = '';    \r\n}\r\n\r\nfunction createNav() {\r\n    const nav = document.createElement('nav');\r\n\r\n    const title = document.createElement('h1')\r\n    title.textContent = 'The Olde Hearth'\r\n    title.classList.add('logo')\r\n    header.appendChild(title)\r\n\r\n    const buttons = [\r\n        { text: 'Home', id: 'homeBTN', loadFunction: _home__WEBPACK_IMPORTED_MODULE_0__.loadHome },\r\n        { text: 'Menu', id: 'menuBTN', loadFunction: _menu__WEBPACK_IMPORTED_MODULE_1__.loadMenu },\r\n        { text: 'About', id: 'aboutBTN', loadFunction: _about__WEBPACK_IMPORTED_MODULE_2__.loadAbout }\r\n    ];\r\n\r\n    buttons.forEach(({ text, id, loadFunction }) => {\r\n        const button = document.createElement('button');\r\n        button.textContent = text;\r\n        button.setAttribute('id', id);\r\n        button.addEventListener('click', () => {\r\n            clearContent();\r\n            loadFunction();\r\n        });\r\n        nav.appendChild(button);\r\n    });\r\n\r\n    \r\n    header.appendChild(nav);\r\n\r\n    const spacer = document.createElement('div');\r\n    spacer.classList.add('logo');\r\n    header.appendChild(spacer)\r\n}\r\n\r\ndocument.addEventListener('DOMContentLoaded', () => {\r\n    console.log('loaded');\r\n    init();\r\n});\r\n\r\nfunction createFooter() {\r\n    const footer = document.createElement('footer');\r\n    footer.textContent = 'Copyright © 2024 bradlloy95'\r\n    content.appendChild(footer)\r\n}\n\n//# sourceURL=webpack://odin_restaurant/./src/index.js?");

/***/ }),

/***/ "./src/menu.js":
/*!*********************!*\
  !*** ./src/menu.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   loadMenu: () => (/* binding */ loadMenu)\n/* harmony export */ });\n/* harmony import */ var _utils_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils/utils */ \"./src/utils/utils.js\");\n\r\n\r\n\r\nconst menu = [\r\n    [\r\n        { name: 'Soup of the Day', description: 'Freshly made soup served with crusty bread.', price: '£4.95' },\r\n        { name: 'Prawn Cocktail', description: 'Juicy prawns in a tangy Marie Rose sauce, served with crisp lettuce and brown bread.', price: '£6.50' },\r\n        { name: 'Welsh Rarebit', description: 'Cheesy toast with a hint of mustard, served with a side salad.', price: '£5.50' },\r\n        { name: 'Black Pudding and Apple Stack', description: 'Slices of black pudding layered with caramelized apple, drizzled with balsamic glaze.', price: '£5.95' }\r\n    ],\r\n    [\r\n        { name: 'Roast Beef and Yorkshire Pudding', description: 'Tender roast beef served with homemade Yorkshire pudding, roast potatoes, seasonal vegetables, and rich gravy.', price: '£13.95' },\r\n        { name: 'Fish and Chips', description: 'Freshly battered fish served with chunky chips, mushy peas, and tartar sauce.', price: '£11.95' },\r\n        { name: \"Shepherd's Pie\", description: 'Hearty minced lamb topped with creamy mashed potatoes, served with seasonal vegetables.', price: '£12.50' },\r\n        { name: 'Chicken and Leek Pie', description: 'Succulent chicken and leek in a creamy sauce, encased in golden pastry, served with mashed potatoes and gravy.', price: '£12.95' }\r\n    ],\r\n    [\r\n        { name: 'Seasonal Vegetables', description: '', price: '£3.00' },\r\n        { name: 'Chunky Chips', description: '', price: '£3.00' },\r\n        { name: 'Mashed Potatoes', description: '', price: '£3.00' },\r\n        { name: 'Side Salad', description: '', price: '£3.00' }\r\n    ],\r\n[\r\n        { name: 'Sticky Toffee Pudding', description: 'Rich toffee sponge served with toffee sauce and vanilla ice cream.', price: '£5.50' },\r\n        { name: 'Apple Crumble', description: 'Warm apple crumble served with custard or vanilla ice cream.', price: '£5.50' },\r\n        { name: 'Eton Mess', description: 'A classic British dessert of strawberries, meringue, and cream.', price: '£5.50' },\r\n        { name: 'Treacle Tart', description: 'Sweet treacle tart served with clotted cream.', price: '£5.50' }\r\n    ],\r\n    [\r\n        { name: 'Tea and Coffee', description: 'A selection of teas and freshly brewed coffee.', price: '£2.50' },\r\n        { name: 'Soft Drinks', description: 'A variety of soft drinks available.', price: '£2.00' },\r\n        { name: 'Beers and Ales', description: 'A selection of local beers and ales.', price: '£3.50' },\r\n        { name: 'House Wine', description: 'Red, white, or rosé, available by the glass or bottle.', price: '£4.50 per glass | £18.00 per bottle' }\r\n    ]\r\n];\r\n\r\nconst buttons = [\r\n    { text: 'Starters', id: 'StartersBTN', arrayIndex: 0 },\r\n    { text: 'Mains', id: 'mainsBTN', arrayIndex: 1},\r\n    { text: 'Sides', id: 'sidesBTN', arrayIndex: 2},\r\n    { text: 'Desserts', id: 'dessertsBTN', arrayIndex: 3},\r\n    { text: 'Drinks', id: 'drinksBTN', arrayIndex: 4},\r\n];\r\n\r\n\r\nfunction createMenuItem(section){\r\n    const itemDiv = document.createElement('div');\r\n    \r\n    section.forEach(item => {\r\n        const items = document.createElement('div');\r\n        items.innerHTML = `\r\n        <br>\r\n            <h3>${item.name}: ${item.description} ${item.price}</h3>\r\n        <br>            \r\n        `\r\n\r\n        itemDiv.appendChild(items);\r\n    })\r\n    return itemDiv\r\n}\r\n\r\n\r\n\r\n\r\nfunction loadMenu(){\r\n    const content = document.getElementById('content');\r\n    content.innerHTML = ''; // Clear previous content\r\n\r\n    const menuDiv = createMenuDiv();\r\n    content.appendChild(menuDiv);\r\n\r\n    const menuBTN = document.getElementById('menuBTN');\r\n    (0,_utils_utils__WEBPACK_IMPORTED_MODULE_0__.setActiveButton)(menuBTN, 'clickedBTN', 'nav');\r\n\r\n    const footer =  (0,_utils_utils__WEBPACK_IMPORTED_MODULE_0__.createElementWithText)('footer', 'Copyright © 2024 bradlloy95');\r\n    content.appendChild(footer)\r\n}\r\n\r\n\r\nfunction createMenuDiv() {\r\n    \r\n\r\n    //create div\r\n    const menuDiv = (0,_utils_utils__WEBPACK_IMPORTED_MODULE_0__.createElementWithClass)('div', 'menuDiv');\r\n  \r\n\r\n    //create nav \r\n    const menuNav = (0,_utils_utils__WEBPACK_IMPORTED_MODULE_0__.createElementWithClass)('div', 'menuNav')\r\n\r\n    const menuContent = (0,_utils_utils__WEBPACK_IMPORTED_MODULE_0__.createElementWithClass)('div', 'menuContent')\r\n    \r\n    buttons.forEach(({ text, id, arrayIndex}) => {\r\n        const button = (0,_utils_utils__WEBPACK_IMPORTED_MODULE_0__.createElementWithClass)('button', id);\r\n        button.textContent = text;\r\n        button.addEventListener('click', () => {\r\n            menuContent.innerHTML = ''\r\n           const itemDiv = createMenuItem(menu[arrayIndex])\r\n           menuContent.appendChild(itemDiv);\r\n            \r\n           \r\n            (0,_utils_utils__WEBPACK_IMPORTED_MODULE_0__.setActiveButton)(button, 'menuBTNClicked', '.menuNav')                        \r\n        });\r\n        menuNav.appendChild(button)\r\n\r\n    });\r\n    \r\n    //set default\r\n    const itemDiv = createMenuItem(menu[0])\r\n    menuContent.appendChild(itemDiv);\r\n\r\n    menuDiv.appendChild(menuNav);\r\n    menuDiv.appendChild(menuContent)\r\n\r\n    return menuDiv;\r\n}\n\n//# sourceURL=webpack://odin_restaurant/./src/menu.js?");

/***/ }),

/***/ "./src/utils/utils.js":
/*!****************************!*\
  !*** ./src/utils/utils.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   createElementWithClass: () => (/* binding */ createElementWithClass),\n/* harmony export */   createElementWithText: () => (/* binding */ createElementWithText),\n/* harmony export */   setActiveButton: () => (/* binding */ setActiveButton)\n/* harmony export */ });\nfunction createElementWithText(tag, text) {\r\n    const element = document.createElement(tag);\r\n    element.textContent = text;\r\n    return element;\r\n}\r\n\r\nfunction setActiveButton(button, Class, currentTag) {\r\n    const buttons = document.querySelectorAll(`${currentTag} button`);\r\n    console.log(buttons)\r\n    buttons.forEach(btn => btn.classList.remove(Class));\r\n    \r\n    button.classList.add(Class);\r\n}\r\n\r\nfunction createElementWithClass(tag, Class) {\r\n    const element = document.createElement(tag);\r\n    element.classList.add(Class);\r\n    return element\r\n}\n\n//# sourceURL=webpack://odin_restaurant/./src/utils/utils.js?");

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
/******/ 			// no module.id needed
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