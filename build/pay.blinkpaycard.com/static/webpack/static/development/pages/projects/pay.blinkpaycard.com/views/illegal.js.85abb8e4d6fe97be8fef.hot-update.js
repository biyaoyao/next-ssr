webpackHotUpdate("static/development/pages/projects/pay.blinkpaycard.com/views/illegal.js",{

/***/ "./pages/projects/pay.blinkpaycard.com/views/illegal/index.jsx":
/*!*********************************************************************!*\
  !*** ./pages/projects/pay.blinkpaycard.com/views/illegal/index.jsx ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! antd */ "./node_modules/antd/es/index.js");
/* harmony import */ var react_css_modules__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-css-modules */ "./node_modules/react-css-modules/dist/index.js");
/* harmony import */ var react_css_modules__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_css_modules__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _less_index_less__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./less/index.less */ "./pages/projects/pay.blinkpaycard.com/views/illegal/less/index.less");
/* harmony import */ var _less_index_less__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_less_index_less__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _common_mixins_index__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../common/mixins/index */ "./pages/common/mixins/index.jsx");
/* harmony import */ var _common_mixins_index__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../common/mixins/index */ "./pages/projects/pay.blinkpaycard.com/common/mixins/index.jsx");


function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }








var Login =
/*#__PURE__*/
function (_Component) {
  _inherits(Login, _Component);

  /**
      * 构造器
      * @param props
      */
  function Login(props) {
    var _this;

    _classCallCheck(this, Login);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Login).call(this, props));
    _this.state = {
      seconds: 10
    };
    return _this;
  }

  _createClass(Login, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.preOrder();
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        onKeyPress: function onKeyPress(e) {
          if (e.which === 13) {
            _this2.loginAtion();
          }
        },
        styleName: "loginApp",
        className: "flex flex-column flex-center"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        styleName: "logoBox"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        styleName: "logo ",
        className: "flex  flex-center"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("img", {
        src: __webpack_require__(/*! ./images/logo.png */ "./pages/projects/pay.blinkpaycard.com/views/illegal/images/logo.png")
      }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("img", {
        styleName: "logo-text",
        src: __webpack_require__(/*! ./images/logo-text.png */ "./pages/projects/pay.blinkpaycard.com/views/illegal/images/logo-text.png")
      }))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        styleName: "intruduction"
      }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "flex flex-column flex-center",
        styleName: "loginBox"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        styleName: "item"
      }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        styleName: "center",
        className: "flex flex-column"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "flex-1 flex flex-center"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_2__["Icon"], {
        type: "exclamation-circle",
        theme: "outlined"
      }), "illegal parameter")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        styleName: "item"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
        styleName: "link",
        onClick: this.goBack.bind(this)
      }, "Back >>"))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "flex-1"
      }));
    }
    /**
     * 预下单
     */

  }, {
    key: "preOrder",
    value: function preOrder() {
      this.props.ajax({
        api: this.props.api.preOrder,
        data: {
          mch_id: 'blZwqA4CMb1',
          app_id: 'app03LBH96y1',
          osu_number: '15393309430831477',
          sign_type: 'md5',
          sign: '21ABAA9EFF85E5F92ED032A9A32B9419'
        }
      });
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
    key: "goBack",
    value: function goBack() {
      console.log('goBack');
      this.props.router.goBack();
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
    /**
        * 登录操作
        */

  }, {
    key: "loginAtion",
    value: function () {
      var _loginAtion = _asyncToGenerator(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2() {
        var _this3 = this;

        var _this$props$Cookie, setCookie, getCookie, delCookie, _self;

        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _this$props$Cookie = this.props.Cookie, setCookie = _this$props$Cookie.setCookie, getCookie = _this$props$Cookie.getCookie, delCookie = _this$props$Cookie.delCookie;
                _self = this;
                this.props.form.validateFields(
                /*#__PURE__*/
                function () {
                  var _ref = _asyncToGenerator(
                  /*#__PURE__*/
                  _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(err, values) {
                    var res;
                    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
                      while (1) {
                        switch (_context.prev = _context.next) {
                          case 0:
                            if (err) {
                              _context.next = 6;
                              break;
                            }

                            _context.next = 3;
                            return _self.props.ajax({
                              api: _self.props.api.Login,
                              data: values
                            });

                          case 3:
                            res = _context.sent;
                            console.log(res);

                            if (parseInt(res.code) !== 200) {
                              _this3.setState({
                                tips: res.msg
                              });
                            } else {
                              antd__WEBPACK_IMPORTED_MODULE_2__["message"].success(_this3.props.$t('login').success); //localStorage.setItem('token', res.result.token);

                              setCookie('pay_admin_token', res.result.token, 60 * 60 * 7);

                              _this3.props.router.push("/consum");
                            }

                          case 6:
                          case "end":
                            return _context.stop();
                        }
                      }
                    }, _callee, this);
                  }));

                  return function (_x, _x2) {
                    return _ref.apply(this, arguments);
                  };
                }());

              case 3:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      return function loginAtion() {
        return _loginAtion.apply(this, arguments);
      };
    }()
  }]);

  return Login;
}(react__WEBPACK_IMPORTED_MODULE_1__["Component"]);

var App = Object(_common_mixins_index__WEBPACK_IMPORTED_MODULE_5__["default"])(Object(_common_mixins_index__WEBPACK_IMPORTED_MODULE_6__["default"])(react_css_modules__WEBPACK_IMPORTED_MODULE_3___default()(Login, _less_index_less__WEBPACK_IMPORTED_MODULE_4___default.a, {
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
    })(typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__.default : (module.exports.default || module.exports), "/projects/pay.blinkpaycard.com/views/illegal")
  
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=illegal.js.85abb8e4d6fe97be8fef.hot-update.js.map