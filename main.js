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

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _todos__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./todos */ \"./src/todos.js\");\n/* harmony import */ var _projects__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./projects */ \"./src/projects.js\");\n\r\n\r\n\r\nconst toDoList = []\r\nconst projects = []\r\n\r\nconst firstProject = (0,_projects__WEBPACK_IMPORTED_MODULE_1__.default)(\"First Project\", \"Firts Project Description\", toDoList)\r\nconst secondProject = (0,_projects__WEBPACK_IMPORTED_MODULE_1__.default)(\"Second Project\", \"Second Project Description\", toDoList)\r\nprojects.push(firstProject)\r\nprojects.push(secondProject)\r\nconsole.log(projects)\r\n\r\nconst firstTask = (0,_todos__WEBPACK_IMPORTED_MODULE_0__.default)(\"New Task\", \"New Task Description\", new Date(), true)\r\nconst secondTask = (0,_todos__WEBPACK_IMPORTED_MODULE_0__.default)(\"New Task 2\", \"New Task Description 2\", new Date(), true)\r\nconst thirdTask = (0,_todos__WEBPACK_IMPORTED_MODULE_0__.default)(\"New Task 3\", \"New Task Description 3\", new Date(), true)\r\ntoDoList.push(firstTask)\r\ntoDoList.push(secondTask)\r\ntoDoList.push(thirdTask)\r\nfirstTask.description = \"Updated description\"\r\n\r\nconst projectsDraw = (projects) => {\r\n    for (let i = 0; i < projects.length; i++) {\r\n        const link = document.createElement('a')\r\n        link.setAttribute('class', \"nav-link\")\r\n        link.innerText = projects[i].title\r\n        document.querySelector('.nav').appendChild(link)\r\n        // link.onclick = () => {\r\n\r\n        // }\r\n    }\r\n}\r\n\r\nconst start = (projects) => {\r\n    projectsDraw(projects)\r\n}\r\n\r\nstart(projects)\r\n\r\n\n\n//# sourceURL=webpack://todo-list/./src/index.js?");

/***/ }),

/***/ "./src/projects.js":
/*!*************************!*\
  !*** ./src/projects.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nclass Project {\r\n    constructor(title, description, todoes) {\r\n        this.title = title\r\n        this.description = description\r\n        this.date = new Date();\r\n        this.todoes = todoes\r\n    }\r\n}\r\n\r\nconst createProject = (title, description, todoes) => {\r\n    return new Project(title, description, todoes)\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (createProject); \n\n//# sourceURL=webpack://todo-list/./src/projects.js?");

/***/ }),

/***/ "./src/todos.js":
/*!**********************!*\
  !*** ./src/todos.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nclass Todo {\r\n    \r\n    constructor(title, description, dueDate, priority) {\r\n        this.title = title\r\n        this.description = description\r\n        this.dueDate = dueDate\r\n        this.priority = priority\r\n    }\r\n\r\n}\r\n\r\nconst createToDo = (title, description, dueDate, priority) => {\r\n    const task = new Todo(title, description, dueDate, priority)\r\n    return task\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (createToDo); \r\n\n\n//# sourceURL=webpack://todo-list/./src/todos.js?");

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