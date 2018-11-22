webpackHotUpdate("static/development/pages/projects/pay.blinkpaycard.com/views/error.js",{

/***/ "./pages/projects/pay.blinkpaycard.com/views/error/index.jsx":
/*!*******************************************************************!*\
  !*** ./pages/projects/pay.blinkpaycard.com/views/error/index.jsx ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_css_modules__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-css-modules */ "./node_modules/react-css-modules/dist/index.js");
/* harmony import */ var react_css_modules__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_css_modules__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _less_index_less__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./less/index.less */ "./pages/projects/pay.blinkpaycard.com/views/error/less/index.less");
/* harmony import */ var _less_index_less__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_less_index_less__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! antd */ "./node_modules/antd/es/index.js");
/* harmony import */ var _common_mixins_index__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../common/mixins/index */ "./pages/common/mixins/index.jsx");
/* harmony import */ var _common_mixins_index__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../common/mixins/index */ "./pages/projects/pay.blinkpaycard.com/common/mixins/index.jsx");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }








var Error =
/*#__PURE__*/
function (_Component) {
  _inherits(Error, _Component);

  function Error(props) {
    var _this;

    _classCallCheck(this, Error);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Error).call(this, props));
    _this.state = {};
    return _this;
  }

  _createClass(Error, [{
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "App"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_3__["Row"], {
        styleName: "errorApp"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_3__["Col"], {
        span: 5
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        styleName: "logo-box"
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        styleName: "logo-text"
      }, "BlinkPaycard")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_3__["Col"], {
        span: 14,
        styleName: "center",
        className: "flex flex-column flex-center"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        styleName: "not-found-images"
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        styleName: "title"
      }, "Whate on earth are you doing here?"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        styleName: "tips"
      }, "The page you are trying to view does not exist."), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        styleName: "button"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
        href: "javascript:"
      }, "Go back"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
        href: "javascript:"
      }, "Back to home"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_3__["Col"], {
        span: 5
      })));
    }
  }, {
    key: "goHome",
    value: function goHome() {
      this.props.router.push("/distribute");
    }
  }, {
    key: "goBack",
    value: function goBack() {
      this.props.router.goBack();
    }
  }]);

  return Error;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);

var App = Object(_common_mixins_index__WEBPACK_IMPORTED_MODULE_4__["default"])(Object(_common_mixins_index__WEBPACK_IMPORTED_MODULE_5__["default"])(react_css_modules__WEBPACK_IMPORTED_MODULE_1___default()(Error, _less_index_less__WEBPACK_IMPORTED_MODULE_2___default.a, {
  allowMultiple: true
})));
/* harmony default export */ __webpack_exports__["default"] = (App);
    (function (Component, route) {
      if(!Component) return
      if (false) {}
      module.hot.accept()
      Component.__route = route

      if (module.hot.status() === 'idle') return

      var components = next.router.components
      for (var r in components) {
        if (!components.hasOwnProperty(r)) continue

        if (components[r].Component.__route === route) {
          next.router.update(r, Component)
        }
      }
    })(typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__.default : (module.exports.default || module.exports), "/projects/pay.blinkpaycard.com/views/error")
  
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=error.js.8472925a7ab8ec56330c.hot-update.js.map