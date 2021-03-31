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

eval("const previous = document.getElementById('prev');\nconst next = document.getElementById('next');\nconst first = document.getElementById('first');\nconst last = document.getElementById('last');\nconst images = Array.from(document.getElementsByClassName('image'));\nlet i = 0;\nlet nextIndex = 1;\nlet previousIndex = 7;\nlet position = 0;\n\nconst previousImg = () => {\n    position < 0 ? position += 500 : position = -3500;\n    images.forEach(image => {\n        image.classList.remove('current');\n        image.classList.remove('following');\n        image.classList.remove('preceding');\n        image.style.left = position+'px';\n    });\n    if (i < 1) {\n        i = 7;\n        nextIndex = 0;\n        previousIndex = i - 1;\n    } else {\n        i--\n        nextIndex = i + 1;\n        i === 0 ? previousIndex = 7 : previousIndex = i - 1;\n    }\n    images[i].classList.add('current');\n    images[nextIndex].classList.add('following');\n    images[previousIndex].classList.add('preceding');\n    \n}\n\nconst nextImg = () => {\n    position > -3500 ? position -= 500 : position = 0;\n    images.forEach(image => {\n        image.classList.remove('current');\n        image.classList.remove('following');\n        image.classList.remove('preceding');\n        image.style.left = position+'px';\n    });\n    if (i < 7) {\n        i++;\n        console.log(i)\n        i === 7 ? nextIndex = 0: nextIndex = i + 1;\n        previousIndex = i - 1;\n    } else {\n        i = 0;\n        nextIndex = i + 1;\n        previousIndex = 7;\n    }\n    images[i].classList.add('current');\n    images[nextIndex].classList.add('following');\n    images[previousIndex].classList.add('preceding');\n}\n\n\nprevious.addEventListener('click', previousImg)\nnext.addEventListener('click', nextImg)\n\n//# sourceURL=webpack://carousel/./src/index.js?");

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