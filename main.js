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

eval("const images = Array.from(document.getElementsByClassName('image'));\nconst dots = Array.from(document.getElementsByClassName('dot'));\nconst maxIndex = images.length-1;\n\nlet i = 0;\nlet nextIndex = 1;\nlet previousIndex = maxIndex;\nlet doResizeTimeout;\n\nconst previousImg = () => {\n    images.forEach(image => {\n        image.classList.remove('current-view');\n        image.classList.remove('next-view');\n        image.classList.remove('previous-view');\n    });\n    if (i < 1) {\n        i = maxIndex;\n        nextIndex = 0;\n        previousIndex = i - 1;\n    } else {\n        i--\n        nextIndex = i + 1;\n        i === 0 ? previousIndex = maxIndex : previousIndex = i - 1;\n    }\n    images[nextIndex].classList.add('next-view');\n    images[previousIndex].classList.add('previous-view');\n    images[i].classList.add('current-view');\n    dots.forEach(dot => dot.classList.remove('current'));\n    dots[i].classList.add('current');\n}\n\nconst nextImg = () => {\n    images.forEach(image => {\n        image.classList.remove('current-view');\n        image.classList.remove('next-view');\n        image.classList.remove('previous-view');\n    });\n    if (i < maxIndex) {\n        i++;\n        i === maxIndex ? nextIndex = 0: nextIndex = i + 1;\n        previousIndex = i - 1;\n    } else {\n        i = 0;\n        nextIndex = i + 1;\n        previousIndex = maxIndex;\n    }\n    images[previousIndex].classList.add('previous-view');\n    images[nextIndex].classList.add('next-view');\n    images[i].classList.add('current-view');\n    dots.forEach(dot => dot.classList.remove('current'));\n    dots[i].classList.add('current');\n}\n\nconst changeImg = (tg) => {\n    let multiplier;\n    let previousCurrentPosition;\n    let newCurrentPosition = tg.dataset.position - 1;\n    \n    document.getElementById('carousel').classList.add('accelerated');\n    dots.forEach(dot => {\n        if (dot.className.includes('current')) {\n            previousCurrentPosition = dot.dataset.position - 1;\n        }\n    });\n\n    let difference = newCurrentPosition - previousCurrentPosition;\n    if (difference > 0 && difference < 5) {\n        multiplier = difference;\n        nextImg();\n        runFunctionXTimes(nextImg, 180, multiplier-1);\n    } else if (difference <= -5) {\n        multiplier = maxIndex + 1 + difference;\n        nextImg();\n        runFunctionXTimes(nextImg, 180, multiplier-1);\n    } else if (difference >= 5) {\n        multiplier = maxIndex + 1 - difference;   \n        previousImg();\n        runFunctionXTimes(previousImg, 180, multiplier-1);\n    } else if (difference < 0 && difference > -5) {\n        multiplier = Math.abs(difference);   \n        previousImg();\n        runFunctionXTimes(previousImg, 180, multiplier-1);\n    }\n}\n\nconst runFunctionXTimes = (callback, interval, repeatTimes) => {\n    let repeated = 0;\n    const intervalTask = setInterval(doTask, interval)\n\n    function doTask() {\n        if ( repeated < repeatTimes ) {\n            callback()\n            repeated += 1\n        } else {\n            clearInterval(intervalTask);\n            document.getElementById('carousel').classList.remove('accelerated');\n        }\n    }\n}\n\nconst listen = (e) => {\n    if (e.target.closest('#prev')) { previousImg() }\n    else if (e.target.closest('#next')) { nextImg() }\n    else if (e.target.closest('.dot')) { changeImg(e.target) }\n}\n\nconst adaptSize = () => {\n    const backgroundSize = document.getElementsByClassName('image-background')[0].scrollWidth;\n    const widthRule = `.image img {width: ${backgroundSize}px}`;\n    const previousLeftRule = `.image.previous-view {left: -${backgroundSize}px !important}`;\n    const nextLeftRule = `.image.next-view {left: ${backgroundSize}px !important}`;\n    if (document.styleSheets[0].cssRules[0].selectorText !== 'h1') {\n        document.styleSheets[0].deleteRule(0);\n        document.styleSheets[0].deleteRule(0);\n        document.styleSheets[0].deleteRule(0);\n    }\n    document.styleSheets[0].insertRule(widthRule, 0);\n    document.styleSheets[0].insertRule(previousLeftRule, 1);\n    document.styleSheets[0].insertRule(nextLeftRule, 2);\n}\n\n\nwindow.addEventListener('click', listen)\nwindow.onload = () => { \n    if (document.documentElement.clientWidth < 840) {\n        adaptSize()\n    }\n}\nwindow.onresize = () => {\n    clearTimeout(doResizeTimeout);\n    doResizeTimeout = setTimeout(adaptSize, 100);\n}\n\n//# sourceURL=webpack://carousel/./src/index.js?");

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