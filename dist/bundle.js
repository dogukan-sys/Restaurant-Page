/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/header.js":
/*!***********************!*\
  !*** ./src/header.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ buildHeader)
/* harmony export */ });
function buildHeader() {
  // Build HEADER
  const HEADER = document.createElement('div')
  const NAV = document.createElement('div')
  const HOME = document.createElement('button')
  const MENU = document.createElement('button')
  const ABOUT = document.createElement('button')
  const TITLE = document.createElement('p') 
 
  TITLE.id = 'title'
  TITLE.textContent = 'Turkish Temptations'

  HEADER.id = 'header'
  NAV.id = 'nav'
 
  HOME.id = 'home'
  HOME.textContent = 'Home'
  
  MENU.id = 'menu'
  MENU.textContent = 'Menu'
  
  ABOUT.id = 'about'
  ABOUT.textContent = 'About Us'

  NAV.appendChild(HOME)
  NAV.appendChild(MENU)
  NAV.appendChild(ABOUT)
  HEADER.appendChild(TITLE)
  HEADER.appendChild(NAV)
  
  return HEADER
}

/***/ }),

/***/ "./src/home.js":
/*!*********************!*\
  !*** ./src/home.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ buildHome)
/* harmony export */ });
function buildHome() {
  // Create Elements
  const heroImg = document.createElement('div')
    heroImg.id = 'hero-img'
  const heroText = document.createElement('div')
    heroText.id = 'hero-text'
  const title = document.createElement('h1')
    title.id = 'hero-title'
    title.textContent = 'Turkish Temptations'
  const  tagline = document.createElement('p')
    tagline.id = 'hero-tagline'
    tagline.textContent = 'Sip, Savor, Delight: Where Turkish Tradition Meets Culinary Innovation'
  const menuBtn = document.createElement('button')
    menuBtn.id = 'menu-button'
    menuBtn.textContent = 'Explore Our Flavorful Menu'

  // Append in right Order.
  heroText.appendChild(title)
  heroText.appendChild(tagline)
  heroText.appendChild(menuBtn)
  heroImg.appendChild(heroText)

  return heroImg
}


/***/ }),

/***/ "./src/loadPage.js":
/*!*************************!*\
  !*** ./src/loadPage.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   firstLoad: () => (/* binding */ firstLoad)
/* harmony export */ });
/* harmony import */ var _header__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./header */ "./src/header.js");
/* harmony import */ var _home__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./home */ "./src/home.js");



const content = document.querySelector('#content')

function firstLoad() {
  content.appendChild((0,_header__WEBPACK_IMPORTED_MODULE_0__["default"])())
  content.appendChild((0,_home__WEBPACK_IMPORTED_MODULE_1__["default"])())
}

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
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _loadPage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./loadPage */ "./src/loadPage.js");


(0,_loadPage__WEBPACK_IMPORTED_MODULE_0__.firstLoad)()
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQWU7QUFDZjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7QUMvQmU7QUFDZjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7OztBQ3ZCbUM7QUFDSjtBQUMvQjtBQUNBO0FBQ0E7QUFDTztBQUNQLHNCQUFzQixtREFBVztBQUNqQyxzQkFBc0IsaURBQVM7QUFDL0I7Ozs7OztVQ1JBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7Ozs7Ozs7Ozs7QUNOdUM7QUFDdkM7QUFDQSxvREFBUyxFIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL2hlYWRlci5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvaG9tZS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvbG9hZFBhZ2UuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGJ1aWxkSGVhZGVyKCkge1xyXG4gIC8vIEJ1aWxkIEhFQURFUlxyXG4gIGNvbnN0IEhFQURFUiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXHJcbiAgY29uc3QgTkFWID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcclxuICBjb25zdCBIT01FID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJylcclxuICBjb25zdCBNRU5VID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJylcclxuICBjb25zdCBBQk9VVCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpXHJcbiAgY29uc3QgVElUTEUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJykgXHJcbiBcclxuICBUSVRMRS5pZCA9ICd0aXRsZSdcclxuICBUSVRMRS50ZXh0Q29udGVudCA9ICdUdXJraXNoIFRlbXB0YXRpb25zJ1xyXG5cclxuICBIRUFERVIuaWQgPSAnaGVhZGVyJ1xyXG4gIE5BVi5pZCA9ICduYXYnXHJcbiBcclxuICBIT01FLmlkID0gJ2hvbWUnXHJcbiAgSE9NRS50ZXh0Q29udGVudCA9ICdIb21lJ1xyXG4gIFxyXG4gIE1FTlUuaWQgPSAnbWVudSdcclxuICBNRU5VLnRleHRDb250ZW50ID0gJ01lbnUnXHJcbiAgXHJcbiAgQUJPVVQuaWQgPSAnYWJvdXQnXHJcbiAgQUJPVVQudGV4dENvbnRlbnQgPSAnQWJvdXQgVXMnXHJcblxyXG4gIE5BVi5hcHBlbmRDaGlsZChIT01FKVxyXG4gIE5BVi5hcHBlbmRDaGlsZChNRU5VKVxyXG4gIE5BVi5hcHBlbmRDaGlsZChBQk9VVClcclxuICBIRUFERVIuYXBwZW5kQ2hpbGQoVElUTEUpXHJcbiAgSEVBREVSLmFwcGVuZENoaWxkKE5BVilcclxuICBcclxuICByZXR1cm4gSEVBREVSXHJcbn0iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBidWlsZEhvbWUoKSB7XHJcbiAgLy8gQ3JlYXRlIEVsZW1lbnRzXHJcbiAgY29uc3QgaGVyb0ltZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXHJcbiAgICBoZXJvSW1nLmlkID0gJ2hlcm8taW1nJ1xyXG4gIGNvbnN0IGhlcm9UZXh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcclxuICAgIGhlcm9UZXh0LmlkID0gJ2hlcm8tdGV4dCdcclxuICBjb25zdCB0aXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gxJylcclxuICAgIHRpdGxlLmlkID0gJ2hlcm8tdGl0bGUnXHJcbiAgICB0aXRsZS50ZXh0Q29udGVudCA9ICdUdXJraXNoIFRlbXB0YXRpb25zJ1xyXG4gIGNvbnN0ICB0YWdsaW5lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpXHJcbiAgICB0YWdsaW5lLmlkID0gJ2hlcm8tdGFnbGluZSdcclxuICAgIHRhZ2xpbmUudGV4dENvbnRlbnQgPSAnU2lwLCBTYXZvciwgRGVsaWdodDogV2hlcmUgVHVya2lzaCBUcmFkaXRpb24gTWVldHMgQ3VsaW5hcnkgSW5ub3ZhdGlvbidcclxuICBjb25zdCBtZW51QnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJylcclxuICAgIG1lbnVCdG4uaWQgPSAnbWVudS1idXR0b24nXHJcbiAgICBtZW51QnRuLnRleHRDb250ZW50ID0gJ0V4cGxvcmUgT3VyIEZsYXZvcmZ1bCBNZW51J1xyXG5cclxuICAvLyBBcHBlbmQgaW4gcmlnaHQgT3JkZXIuXHJcbiAgaGVyb1RleHQuYXBwZW5kQ2hpbGQodGl0bGUpXHJcbiAgaGVyb1RleHQuYXBwZW5kQ2hpbGQodGFnbGluZSlcclxuICBoZXJvVGV4dC5hcHBlbmRDaGlsZChtZW51QnRuKVxyXG4gIGhlcm9JbWcuYXBwZW5kQ2hpbGQoaGVyb1RleHQpXHJcblxyXG4gIHJldHVybiBoZXJvSW1nXHJcbn1cclxuIiwiaW1wb3J0IGJ1aWxkSGVhZGVyIGZyb20gXCIuL2hlYWRlclwiO1xyXG5pbXBvcnQgYnVpbGRIb21lIGZyb20gXCIuL2hvbWVcIjtcclxuXHJcbmNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjY29udGVudCcpXHJcblxyXG5leHBvcnQgZnVuY3Rpb24gZmlyc3RMb2FkKCkge1xyXG4gIGNvbnRlbnQuYXBwZW5kQ2hpbGQoYnVpbGRIZWFkZXIoKSlcclxuICBjb250ZW50LmFwcGVuZENoaWxkKGJ1aWxkSG9tZSgpKVxyXG59IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQgeyBmaXJzdExvYWQgfSBmcm9tIFwiLi9sb2FkUGFnZVwiO1xyXG5cclxuZmlyc3RMb2FkKCkiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=