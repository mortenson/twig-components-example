module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(1);


/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


// These templates are used by server side renderers to show an initial version
// of the components provided by this library.

module.exports = {
  'tce-hero': __webpack_require__(2)
  /* generator-placeholder */
};

/***/ }),
/* 2 */
/***/ (function(module, exports) {

module.exports = "<style>.wrapper {\n  position: relative; }\n  .wrapper .media img {\n    max-width: 100%; }\n  .wrapper .inner {\n    position: absolute;\n    top: 0;\n    bottom: 0;\n    left: 0;\n    right: 0;\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    white-space: nowrap;\n    padding: 2rem;\n    font-family: var(--font, Helvetica, Arial, sans-serif);\n    align-items: center; }\n    .wrapper .inner.left {\n      align-items: flex-start; }\n    .wrapper .inner.right {\n      align-items: flex-end; }\n    .wrapper .inner * {\n      margin: .5rem 0 .5rem 0; }\n    .wrapper .inner h1 {\n      color: var(--text-color, white); }\n    .wrapper .inner p {\n      color: var(--subtext-color, white); }\n    .wrapper .inner a {\n      color: var(--callout-color, white);\n      border: 1px solid var(--callout-color, white);\n      text-decoration: none;\n      padding: 1em;\n      transition: all .2s; }\n      .wrapper .inner a:hover {\n        background-color: var(--callout-color, white);\n        color: var(--callout-hover-color, black); }\n</style>\n<div class=\"wrapper\">\n  <div class=\"media\">\n  {% if src %}\n    <img src=\"{{ src | escape }}\" />\n  {% else %}\n    <slot name=\"media\"></slot>\n  {% endif %}\n  </div>\n  <div class=\"inner {{ align | escape }}\">\n    {% if text %}\n      <h1>{{ text | escape }}</h1>\n    {% endif %}\n    {% if subtext %}\n      <p>{{ subtext | escape }}</p>\n    {% endif %}\n    {% if callout_href and callout_text %}\n      <a href=\"{{ callout_href | escape }}\">{{ callout_text | escape }}</a>\n    {% endif %}\n  </div>\n</div>\n"

/***/ })
/******/ ]);