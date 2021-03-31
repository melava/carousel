/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ (() => {

eval("const previous = document.getElementById('prev');\nconst next = document.getElementById('next');\nconst first = document.getElementById('first');\nconst last = document.getElementById('last');\nconst images = Array.from(document.getElementsByClassName('image'));\nconst maxIndex = images.length-1;\n\nlet i = 0;\nlet nextIndex = 1;\nlet previousIndex = maxIndex;\n\nconst previousImg = () => {\n    images.forEach(image => {\n        image.classList.remove('current-view');\n        image.classList.remove('next-view');\n        image.classList.remove('previous-view');\n    });\n    if (i < 1) {\n        i = maxIndex;\n        nextIndex = 0;\n        previousIndex = i - 1;\n    } else {\n        i--\n        nextIndex = i + 1;\n        i === 0 ? previousIndex = maxIndex : previousIndex = i - 1;\n    }\n    images[nextIndex].classList.add('next-view');\n    images[previousIndex].classList.add('previous-view');\n    images[i].classList.add('current-view');\n    \n}\n\nconst nextImg = () => {\n    images.forEach(image => {\n        image.classList.remove('current-view');\n        image.classList.remove('next-view');\n        image.classList.remove('previous-view');\n    });\n    if (i < maxIndex) {\n        i++;\n        i === maxIndex ? nextIndex = 0: nextIndex = i + 1;\n        previousIndex = i - 1;\n    } else {\n        i = 0;\n        nextIndex = i + 1;\n        previousIndex = maxIndex;\n    }\n    images[previousIndex].classList.add('previous-view');\n    images[nextIndex].classList.add('next-view');\n    images[i].classList.add('current-view');\n}\n\n\nprevious.addEventListener('click', previousImg)\nnext.addEventListener('click', nextImg)\n\n//# sourceURL=webpack://carousel/./src/index.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/index.js"]();
/******/ 	
/******/ })()
;