/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (function() { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/assets/js/app.js":
/*!******************************!*\
  !*** ./src/assets/js/app.js ***!
  \******************************/
/***/ (function() {

eval("// Smooth Scroll\r\n$(function () {\r\n\t$(\"[data-scroll\").on(\"click\", function (event) {\r\n\t\tevent.preventDefault();\r\n\t\tlet elementID = $(this).data('scroll');\r\n\t\tlet elementOffset = $(elementID).offset().top;\r\n\r\n\t\tconsole.log(elementOffset);\r\n\r\n\t\t$(\"html, body\").animate({\r\n\t\t\tscrollTop: elementOffset - 110\r\n\t\t}, 100);\r\n\t});\r\n});\r\n\r\n\r\n\r\n// Mobile menu\r\nconst hamburger = document.querySelector(\".hamburger\");\r\nconst navMenu = document.querySelector(\".nav-menu\");\r\n\r\nhamburger.addEventListener(\"click\", () => {\r\n\thamburger.classList.toggle(\"active\");\r\n\tnavMenu.classList.toggle(\"active\");\r\n})\r\n\r\ndocument.querySelectorAll(\".nav-link\").forEach(n => n.addEventListener(\"click\", () => {\r\n\thamburger.classList.remove(\"active\");\r\n\tnavMenu.classList.remove(\"active\");\r\n}))\r\n\r\n// Carousel\r\n$('.popular__cards').slick({\r\n\tinfinite: true,\r\n\tslidesToShow: 3,\r\n\tslidesToScroll: 3,\r\n\tprevArrow: '<button type=\"button\" class=\"slick-prev\"><img src=\"assets/images/carousel/arrow-left.svg\"></button>',\r\n\tnextArrow: '<button type=\"button\" class=\"slick-next\"><img src=\"assets/images/carousel/arrow-right.svg\"></button>',\r\n\tresponsive: [\r\n\t\t{\r\n\t\t  breakpoint: 1024,\r\n\t\t  settings: {\r\n\t\t\tslidesToShow: 3,\r\n\t\t\tslidesToScroll: 3,\r\n\t\t  }\r\n\t\t},\r\n\t\t{\r\n\t\t  breakpoint: 600,\r\n\t\t  settings: {\r\n\t\t\tslidesToShow: 2,\r\n\t\t\tslidesToScroll: 2\r\n\t\t  }\r\n\t\t},\r\n\t\t{\r\n\t\t  breakpoint: 375,\r\n\t\t  settings: {\r\n\t\t\tslidesToShow: 1,\r\n\t\t\tslidesToScroll: 1,\r\n\t\t\tarrows: false,\r\n\t\t  }\r\n\t\t}\r\n\t\t// You can unslick at a given breakpoint now by adding:\r\n\t\t// settings: \"unslick\"\r\n\t\t// instead of a settings object\r\n\t  ]\r\n});\r\n\r\n\r\n// Gallery LightBox\r\n\r\n// Open the Modal\r\nfunction openModal() {\r\n  document.getElementById('myModal').style.display = \"block\";\r\n}\r\n\r\n// Close the Modal\r\nfunction closeModal() {\r\n  document.getElementById('myModal').style.display = \"none\";\r\n}\r\n\r\nvar slideIndex = 1;\r\nshowSlides(slideIndex);\r\n\r\n// Next/previous controls\r\nfunction plusSlides(n) {\r\n  showSlides(slideIndex += n);\r\n}\r\n\r\n// Thumbnail image controls\r\nfunction currentSlide(n) {\r\n  showSlides(slideIndex = n);\r\n}\r\n\r\nfunction showSlides(n) {\r\n  var i;\r\n  var slides = document.getElementsByClassName(\"mySlides\");\r\n  var dots = document.getElementsByClassName(\"demo\");\r\n  var captionText = document.getElementById(\"caption\");\r\n  if (n > slides.length) {slideIndex = 1}\r\n  if (n < 1) {slideIndex = slides.length}\r\n  for (i = 0; i < slides.length; i++) {\r\n    slides[i].style.display = \"none\";\r\n  }\r\n  for (i = 0; i < dots.length; i++) {\r\n    dots[i].className = dots[i].className.replace(\" active\", \"\");\r\n  }\r\n  slides[slideIndex-1].style.display = \"block\";\r\n  dots[slideIndex-1].className += \" active\";\r\n  captionText.innerHTML = dots[slideIndex-1].alt;\r\n}\r\n\r\n\n\n//# sourceURL=webpack://brainscloud/./src/assets/js/app.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/assets/js/app.js"]();
/******/ 	
/******/ })()
;