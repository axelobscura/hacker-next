webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/StoryList.js":
/*!*********************************!*\
  !*** ./components/StoryList.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
var _this = undefined,
    _jsxFileName = "/Users/axelobscura/Desktop/hacker-next/components/StoryList.js";



var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;


var StoryList = function StoryList(_ref) {
  var stories = _ref.stories;
  return __jsx("div", {
    className: "jsx-3042506596" + " " + "story-list",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 4,
      columnNumber: 5
    }
  }, stories.map(function (story) {
    return __jsx("div", {
      key: story.id,
      className: "jsx-3042506596" + " " + "story",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 6,
        columnNumber: 13
      }
    }, __jsx("h2", {
      className: "jsx-3042506596" + " " + "story-title",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 7,
        columnNumber: 17
      }
    }, __jsx("a", {
      href: story.url,
      className: "jsx-3042506596",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 7,
        columnNumber: 45
      }
    }, story.title)), __jsx("div", {
      className: "jsx-3042506596" + " " + "story-details",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 8,
        columnNumber: 17
      }
    }, __jsx("span", {
      className: "jsx-3042506596",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 9,
        columnNumber: 21
      }
    }, story.points || 0, " points"), __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
      href: "/story?id=".concat(story.id),
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 10,
        columnNumber: 21
      }
    }, __jsx("a", {
      className: "jsx-3042506596",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 11,
        columnNumber: 21
      }
    }, story.comments_count || 0, " comments"))));
  }), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "3042506596",
    __self: _this
  }, ".story-list.jsx-3042506596{padding:0 1em;}.story.jsx-3042506596{padding:1em 0;}.story-title.jsx-3042506596{font-size:1rem;font-weight:400;margin:0;margin-bottom:0.5em;}.story-title.jsx-3042506596 a.jsx-3042506596{color:#333;-webkit-text-decoration:none;text-decoration:none;}.story-title.jsx-3042506596 a.jsx-3042506596:hover,.story-details.jsx-3042506596 a.jsx-3042506596:hover{-webkit-text-decoration:underline;text-decoration:underline;}.story-details.jsx-3042506596{font-size:0.8rem;font-weight:bold;}.story-details.jsx-3042506596 span.jsx-3042506596{margin-right:1em;}.story-details.jsx-3042506596 a.jsx-3042506596{color:#6600ff;-webkit-text-decoration:none;text-decoration:none;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9heGVsb2JzY3VyYS9EZXNrdG9wL2hhY2tlci1uZXh0L2NvbXBvbmVudHMvU3RvcnlMaXN0LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQWdCb0IsQUFHK0IsQUFHQSxBQUdDLEFBTUosQUFJZSxBQUdULEFBSUEsQUFHSCxXQWJPLEdBWnpCLEFBR0EsQUF1QnlCLENBcEJMLEVBYUMsQUFJckIsY0FoQmEsR0FhYixNQVp3QixvQkFDeEIsQUFPQSxDQUhBLEdBY0EiLCJmaWxlIjoiL1VzZXJzL2F4ZWxvYnNjdXJhL0Rlc2t0b3AvaGFja2VyLW5leHQvY29tcG9uZW50cy9TdG9yeUxpc3QuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnO1xuXG5jb25zdCBTdG9yeUxpc3QgPSAoe3N0b3JpZXN9KSA9PiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJzdG9yeS1saXN0XCI+XG4gICAgICAgIHtzdG9yaWVzLm1hcChzdG9yeSA9PiAoXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInN0b3J5XCIga2V5PXtzdG9yeS5pZH0+XG4gICAgICAgICAgICAgICAgPGgyIGNsYXNzTmFtZT1cInN0b3J5LXRpdGxlXCI+PGEgaHJlZj17c3RvcnkudXJsfT57c3RvcnkudGl0bGV9PC9hPjwvaDI+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzdG9yeS1kZXRhaWxzXCI+XG4gICAgICAgICAgICAgICAgICAgIDxzcGFuPntzdG9yeS5wb2ludHMgfHwgMH0gcG9pbnRzPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPXtgL3N0b3J5P2lkPSR7c3RvcnkuaWR9YH0+XG4gICAgICAgICAgICAgICAgICAgIDxhPntzdG9yeS5jb21tZW50c19jb3VudCB8fCAwfSBjb21tZW50czwvYT5cbiAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICkpfVxuXG4gICAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICAgICAgIC5zdG9yeS1saXN0IHtcbiAgICAgICAgICAgICAgICBwYWRkaW5nOiAwIDFlbTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC5zdG9yeSB7XG4gICAgICAgICAgICAgICAgcGFkZGluZzogMWVtIDA7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAuc3RvcnktdGl0bGUge1xuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMXJlbTtcbiAgICAgICAgICAgICAgICBmb250LXdlaWdodDogNDAwO1xuICAgICAgICAgICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAwLjVlbTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC5zdG9yeS10aXRsZSBhIHtcbiAgICAgICAgICAgICAgICBjb2xvcjogIzMzMztcbiAgICAgICAgICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAuc3RvcnktdGl0bGUgYTpob3ZlciwgLnN0b3J5LWRldGFpbHMgYTpob3ZlciB7XG4gICAgICAgICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAuc3RvcnktZGV0YWlscyB7XG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAwLjhyZW07XG4gICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAuc3RvcnktZGV0YWlscyBzcGFuIHtcbiAgICAgICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDFlbTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC5zdG9yeS1kZXRhaWxzIGEge1xuICAgICAgICAgICAgICAgIGNvbG9yOiAjNjYwMGZmO1xuICAgICAgICAgICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgYH08L3N0eWxlPlxuICAgIDwvZGl2PlxuKVxuXG5leHBvcnQgZGVmYXVsdCBTdG9yeUxpc3Q7Il19 */\n/*@ sourceURL=/Users/axelobscura/Desktop/hacker-next/components/StoryList.js */"));
};

/* harmony default export */ __webpack_exports__["default"] = (StoryList);

/***/ })

})
//# sourceMappingURL=index.js.ea7072bbec1d4d4188da.hot-update.js.map