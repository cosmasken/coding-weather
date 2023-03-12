/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(function() {
var exports = {};
exports.id = "pages/api/data";
exports.ids = ["pages/api/data"];
exports.modules = {

/***/ "./pages/api/data.js":
/*!***************************!*\
  !*** ./pages/api/data.js ***!
  \***************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ handler; }\n/* harmony export */ });\nasync function handler(req, res) {\n  const {\n    cityInput\n  } = req.body;\n  const getWeatherData = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityInput}&units=metric&appid=${process.env.OPENWEATHER_API_KEY}`);\n  const data = await getWeatherData.json();\n  res.status(200).json(data);\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9jb2Rpbmctd2VhdGhlci8uL3BhZ2VzL2FwaS9kYXRhLmpzP2YwNTUiXSwibmFtZXMiOlsiaGFuZGxlciIsInJlcSIsInJlcyIsImNpdHlJbnB1dCIsImJvZHkiLCJnZXRXZWF0aGVyRGF0YSIsImZldGNoIiwicHJvY2VzcyIsImVudiIsIk9QRU5XRUFUSEVSX0FQSV9LRVkiLCJkYXRhIiwianNvbiIsInN0YXR1cyJdLCJtYXBwaW5ncyI6Ijs7OztBQUFlLGVBQWVBLE9BQWYsQ0FBdUJDLEdBQXZCLEVBQTRCQyxHQUE1QixFQUFpQztBQUM5QyxRQUFNO0FBQUVDO0FBQUYsTUFBZ0JGLEdBQUcsQ0FBQ0csSUFBMUI7QUFDQSxRQUFNQyxjQUFjLEdBQUcsTUFBTUMsS0FBSyxDQUMvQixxREFBb0RILFNBQVUsdUJBQXNCSSxPQUFPLENBQUNDLEdBQVIsQ0FBWUMsbUJBQW9CLEVBRHJGLENBQWxDO0FBR0EsUUFBTUMsSUFBSSxHQUFHLE1BQU1MLGNBQWMsQ0FBQ00sSUFBZixFQUFuQjtBQUNBVCxLQUFHLENBQUNVLE1BQUosQ0FBVyxHQUFYLEVBQWdCRCxJQUFoQixDQUFxQkQsSUFBckI7QUFDRCIsImZpbGUiOiIuL3BhZ2VzL2FwaS9kYXRhLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGRlZmF1bHQgYXN5bmMgZnVuY3Rpb24gaGFuZGxlcihyZXEsIHJlcykge1xuICBjb25zdCB7IGNpdHlJbnB1dCB9ID0gcmVxLmJvZHk7XG4gIGNvbnN0IGdldFdlYXRoZXJEYXRhID0gYXdhaXQgZmV0Y2goXG4gICAgYGh0dHBzOi8vYXBpLm9wZW53ZWF0aGVybWFwLm9yZy9kYXRhLzIuNS93ZWF0aGVyP3E9JHtjaXR5SW5wdXR9JnVuaXRzPW1ldHJpYyZhcHBpZD0ke3Byb2Nlc3MuZW52Lk9QRU5XRUFUSEVSX0FQSV9LRVl9YFxuICApO1xuICBjb25zdCBkYXRhID0gYXdhaXQgZ2V0V2VhdGhlckRhdGEuanNvbigpO1xuICByZXMuc3RhdHVzKDIwMCkuanNvbihkYXRhKTtcbn1cbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/api/data.js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
var __webpack_exports__ = (__webpack_exec__("./pages/api/data.js"));
module.exports = __webpack_exports__;

})();