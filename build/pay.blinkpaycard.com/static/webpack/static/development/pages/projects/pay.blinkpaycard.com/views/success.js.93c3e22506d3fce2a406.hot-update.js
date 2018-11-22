webpackHotUpdate("static/development/pages/projects/pay.blinkpaycard.com/views/success.js",{

/***/ "./pages/common/mixins/index.jsx":
/*!***************************************!*\
  !*** ./pages/common/mixins/index.jsx ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../store */ "./pages/store/index.js");
/* harmony import */ var _common_lib_url_index__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../common/lib/url/index */ "./pages/common/lib/url/index.js");
/* harmony import */ var _config_i18n_index__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../config/i18n/index */ "./pages/config/i18n/index.js");
/* harmony import */ var _lib_request_index__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../lib/request/index */ "./pages/common/lib/request/index.js");
/* harmony import */ var _lib_index__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../lib/index */ "./pages/common/lib/index.js");
/* harmony import */ var _lib_cookie_index__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../lib/cookie/index */ "./pages/common/lib/cookie/index.js");
/* harmony import */ var _config_index__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../config/index */ "./pages/config/index.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! next/router */ "./node_modules/next/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_8__);
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }









 //router.location = router.router;

/* harmony default export */ __webpack_exports__["default"] = (function (ComposedComponent) {
  return (
    /*#__PURE__*/
    function (_React$Component) {
      _inherits(_class, _React$Component);

      function _class(props) {
        var _this;

        _classCallCheck(this, _class);

        _this = _possibleConstructorReturn(this, _getPrototypeOf(_class).call(this, props));
        _this.state = {
          data: null
        };
        return _this;
      }

      _createClass(_class, [{
        key: "componentDidMount",
        value: function componentDidMount() {
          next_router__WEBPACK_IMPORTED_MODULE_8___default.a.location = next_router__WEBPACK_IMPORTED_MODULE_8___default.a.router;
          this.initLocate();
        }
      }, {
        key: "render",
        value: function render() {
          next_router__WEBPACK_IMPORTED_MODULE_8___default.a.location = next_router__WEBPACK_IMPORTED_MODULE_8___default.a.router;
          return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(ComposedComponent, _extends({}, this.props, {
            Cookie: _lib_cookie_index__WEBPACK_IMPORTED_MODULE_6__["default"],
            plain: this.plain,
            router: next_router__WEBPACK_IMPORTED_MODULE_8___default.a,
            objUtil: _lib_index__WEBPACK_IMPORTED_MODULE_5__["obj"],
            data: this.state.data,
            formateNumber: this.formateNumber,
            dateFormat: _lib_index__WEBPACK_IMPORTED_MODULE_5__["date"].formatDate,
            date: _lib_index__WEBPACK_IMPORTED_MODULE_5__["date"],
            file: _lib_index__WEBPACK_IMPORTED_MODULE_5__["file"],
            stringUtil: _lib_index__WEBPACK_IMPORTED_MODULE_5__["string"],
            ajax: _lib_request_index__WEBPACK_IMPORTED_MODULE_4__["default"].ajax
          }));
        }
        /**
            * 语言初始化
            */

      }, {
        key: "initLocate",
        value: function initLocate() {
          var _this2 = this;

          console.log('initLocate', _config_index__WEBPACK_IMPORTED_MODULE_7__["default"]);
          var locate = null;
          _config_index__WEBPACK_IMPORTED_MODULE_7__["default"].locateList.forEach(function (item) {
            if (_config_index__WEBPACK_IMPORTED_MODULE_7__["default"].locate === item.value) {
              locate = item;
            }
          });
          _config_index__WEBPACK_IMPORTED_MODULE_7__["default"].locateList.forEach(function (item) {
            if (localStorage.getItem('locate') === item.value) {
              locate = item;
            }
          });
          _config_index__WEBPACK_IMPORTED_MODULE_7__["default"].locateList.forEach(function (item) {
            if (_common_lib_url_index__WEBPACK_IMPORTED_MODULE_2__["default"].getParam('locate') === item.value) {
              locate = item;
            }
          });
          _store__WEBPACK_IMPORTED_MODULE_1__["$locate"].subscribe(function () {
            console.error('subscribe', _store__WEBPACK_IMPORTED_MODULE_1__["$locate"].getState().locate);
            locate = _store__WEBPACK_IMPORTED_MODULE_1__["$locate"].getState().locate;
            locate.localMesaage = _config_i18n_index__WEBPACK_IMPORTED_MODULE_3__["default"][locate.value];

            if (locate && (!_this2.locate || _this2.locate !== locate)) {
              _this2.locate = locate;
              localStorage.setItem('locate', locate.value);

              _this2.setState({
                locate: locate
              });
            }
          });
          _store__WEBPACK_IMPORTED_MODULE_1__["$locate"].dispatch({
            type: 'locate',
            payload: locate,
            callback: function callback() {}
          });
        }
      }, {
        key: "$t",
        value: function $t(key) {
          if (_store__WEBPACK_IMPORTED_MODULE_1__["$locate"].getState().locate && _store__WEBPACK_IMPORTED_MODULE_1__["$locate"].getState().locate.localMesaage) {
            return _store__WEBPACK_IMPORTED_MODULE_1__["$locate"].getState().locate.localMesaage[key];
          } else {
            return _config_i18n_index__WEBPACK_IMPORTED_MODULE_3__["default"][_config_index__WEBPACK_IMPORTED_MODULE_7__["default"].locate][key];
          }
        }
      }, {
        key: "plain",
        value: function plain(data) {
          return JSON.parse(JSON.stringify(data));
        }
      }, {
        key: "formateNumber",
        value: function formateNumber(number) {
          return (number + '').replace(/\B(?=(\d{3})+(?!\d))/g, ',');
        }
      }]);

      return _class;
    }(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component)
  );
});
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
    })(typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__.default : (module.exports.default || module.exports), "/common/mixins")
  
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=success.js.93c3e22506d3fce2a406.hot-update.js.map