webpackHotUpdate("static/development/pages/projects/pay.blinkpaycard.com/views/success.js",{

/***/ "./pages/projects/pay.blinkpaycard.com/views/success/index.jsx":
/*!*********************************************************************!*\
  !*** ./pages/projects/pay.blinkpaycard.com/views/success/index.jsx ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd */ "./node_modules/antd/es/index.js");
/* harmony import */ var react_css_modules__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-css-modules */ "./node_modules/react-css-modules/dist/index.js");
/* harmony import */ var react_css_modules__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_css_modules__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _less_index_less__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./less/index.less */ "./pages/projects/pay.blinkpaycard.com/views/success/less/index.less");
/* harmony import */ var _less_index_less__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_less_index_less__WEBPACK_IMPORTED_MODULE_3__);
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








var Success =
/*#__PURE__*/
function (_Component) {
  _inherits(Success, _Component);

  /**
      * 构造器
      * @param props
      */
  function Success(props) {
    var _this;

    _classCallCheck(this, Success);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Success).call(this, props));
    _this.state = {
      seconds: 10,
      query: {}
    };
    return _this;
  }

  _createClass(Success, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this2 = this;

      console.log('router', this.props.router.location.query);
      this.setState({
        query: this.props.router.location.query
      });
      var seconds = this.state.seconds;
      var interval = setInterval(function () {
        seconds--;

        _this2.setState({
          seconds: seconds
        });

        if (seconds <= 0) {
          //跳转
          _this2.gotoPaymentSuccess();

          clearInterval(interval);
        }
      }, 1000);
    }
  }, {
    key: "render",
    value: function render() {
      var _this3 = this;

      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        onKeyPress: function onKeyPress(e) {
          if (e.which === 13) {
            _this3.loginAtion();
          }
        },
        styleName: "loginApp",
        className: "flex flex-column flex-center"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        styleName: "logoBox"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        styleName: "logo ",
        className: "flex  flex-center"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
        src: __webpack_require__(/*! ./images/logo.png */ "./pages/projects/pay.blinkpaycard.com/views/success/images/logo.png")
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
        styleName: "logo-text",
        src: __webpack_require__(/*! ./images/logo-text.png */ "./pages/projects/pay.blinkpaycard.com/views/success/images/logo-text.png")
      }))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        styleName: "intruduction"
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "flex flex-column flex-center",
        styleName: "loginBox"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        styleName: "item"
      }, "Congratulations\uFF0C", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", null, "$", this.state.query.value / 100), " has been recharged successfully\uFF01"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        styleName: "center",
        className: "flex flex-column"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        styleName: "center-top"
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "flex-1 flex flex-center"
      }, this.state.query.currency, " ", this.state.query.value / 100), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        styleName: "center-bottom"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_1__["Icon"], {
        type: "check-circle",
        theme: "outlined"
      }))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        styleName: "item"
      }, this.state.query.redirect_url ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
        styleName: "link",
        onClick: this.gotoPaymentSuccess.bind(this)
      }, "Jump to Payment Success >>") : null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        styleName: "item"
      }, this.state.query.redirect_url ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
        styleName: "link",
        onClick: this.gotoPaymentSuccess.bind(this)
      }, "Jump to Payment Success >>") : null)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "flex-1"
      }));
    }
    /**
        * 用户名输入
        * @param e
        */

  }, {
    key: "onChangeUserName",
    value: function onChangeUserName(e) {
      this.setState({
        login: {
          userName: e.target.value,
          password: this.state.login.password
        }
      });
    }
  }, {
    key: "gotoPaymentSuccess",
    value: function gotoPaymentSuccess() {
      console.log('gotoPaymentSuccess');

      if (this.state.query.redirect_url) {
        location.href = this.state.query.redirect_url;
      }
    }
    /**
        * 密码输入
        * @param e
        */

  }, {
    key: "onChangePassword",
    value: function onChangePassword(e) {
      this.setState({
        login: {
          userName: this.state.login.userName,
          password: e.target.value
        }
      });
    }
    /**
        * 删除输入框
        * @param item
        */

  }, {
    key: "clear",
    value: function clear(item) {
      console.log('clear', item);
      this.setState({
        login: {
          userName: item === 'userName' ? '' : this.state.login.userName,
          password: item === 'password' ? '' : this.state.login.password
        }
      });
    }
  }]);

  return Success;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);

var App = Object(_common_mixins_index__WEBPACK_IMPORTED_MODULE_4__["default"])(Object(_common_mixins_index__WEBPACK_IMPORTED_MODULE_5__["default"])(react_css_modules__WEBPACK_IMPORTED_MODULE_2___default()(Success, _less_index_less__WEBPACK_IMPORTED_MODULE_3___default.a, {
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
    })(typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__.default : (module.exports.default || module.exports), "/projects/pay.blinkpaycard.com/views/success")
  
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=success.js.df1d6702aed861214972.hot-update.js.map