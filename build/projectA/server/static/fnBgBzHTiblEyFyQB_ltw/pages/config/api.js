module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 75);
/******/ })
/************************************************************************/
/******/ ({

/***/ 10:
/***/ (function(module, exports) {

module.exports = require("redux");

/***/ }),

/***/ 12:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/**
 * Created by BIYY on 2017-10-12.
 */
var config = {};
config.locateList = [{
  label: 'English(US)',
  value: 'en_US',
  require: __webpack_require__(47)
}, {
  label: '中文',
  value: 'zh_CN',
  require: __webpack_require__(48)
}];
config.locate = 'en_US'; // 状态栏颜色 'CN,EN'

/* harmony default export */ __webpack_exports__["default"] = (config);

/***/ }),

/***/ 32:
/***/ (function(module, exports) {

module.exports = require("antd");

/***/ }),

/***/ 34:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/*  设置cookie  */
var cookie = {};

cookie.setCookie = function (c_name, value, seconds) {
  var exdate = new Date();
  exdate.setSeconds(exdate.getSeconds() + seconds);
  document.cookie = c_name + '=' + escape(value) + (seconds == null ? '' : ';expires=' + exdate.toGMTString());
}; // 获取cookie


cookie.getCookie = function (c_name) {
  if (document.cookie.length > 0) {
    var c_start = document.cookie.indexOf(c_name + '=');

    if (c_start !== -1) {
      c_start = c_start + c_name.length + 1;
      var c_end = document.cookie.indexOf(';', c_start);

      if (c_end === -1) {
        c_end = document.cookie.length;
      }

      return unescape(document.cookie.substring(c_start, c_end));
    }
  }

  return null;
}; // 清除cookie


cookie.clearCookie = function () {
  // console.log('clearCookie')
  var keys = document.cookie.match(/[^ =;]+(?=\=)/g);

  if (keys) {
    for (var i = keys.length; i--;) {
      document.cookie = keys[i] + '=0;expires=' + new Date(0).toUTCString();
    }
  }
}; //  删除对应cookie


cookie.delCookie = function (name) {
  cookie.setCookie(name, undefined, 0);
};

/* harmony default export */ __webpack_exports__["default"] = (cookie);

/***/ }),

/***/ 35:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _actions_index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9);
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(10);
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(redux__WEBPACK_IMPORTED_MODULE_1__);
/**
 * Created by BIYY on 2018-6-26.
 */



var reducer = function reducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var action = arguments.length > 1 ? arguments[1] : undefined;
  state = getState(state, action);

  if (state.callback) {
    state.callback();
  }

  return state;
};

var getState = function getState(state, action) {
  state = _actions_index__WEBPACK_IMPORTED_MODULE_0__["default"].user(state, action);
  return state;
};

/* harmony default export */ __webpack_exports__["default"] = (Object(redux__WEBPACK_IMPORTED_MODULE_1__["createStore"])(reducer));

/***/ }),

/***/ 36:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _actions_index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9);
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(10);
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(redux__WEBPACK_IMPORTED_MODULE_1__);
/**
 * Created by BIYY on 2018-6-26.
 */



var reducer = function reducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var action = arguments.length > 1 ? arguments[1] : undefined;
  state = getState(state, action);

  if (state.callback) {
    state.callback();
  }

  return state;
};

var getState = function getState(state, action) {
  state = _actions_index__WEBPACK_IMPORTED_MODULE_0__["default"].theme(state, action);
  return state;
};

/* harmony default export */ __webpack_exports__["default"] = (Object(redux__WEBPACK_IMPORTED_MODULE_1__["createStore"])(reducer));

/***/ }),

/***/ 37:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _actions_index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9);
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(10);
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(redux__WEBPACK_IMPORTED_MODULE_1__);
/**
 * Created by BIYY on 2018-6-26.
 */



var reducer = function reducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var action = arguments.length > 1 ? arguments[1] : undefined;
  state = getState(state, action);

  if (state.callback) {
    state.callback();
  }

  return state;
};

var getState = function getState(state, action) {
  state = _actions_index__WEBPACK_IMPORTED_MODULE_0__["default"].locate(state, action);
  return state;
};

/* harmony default export */ __webpack_exports__["default"] = (Object(redux__WEBPACK_IMPORTED_MODULE_1__["createStore"])(reducer));

/***/ }),

/***/ 38:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _actions_index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9);
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(10);
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(redux__WEBPACK_IMPORTED_MODULE_1__);
/**
 * Created by BIYY on 2018-6-26.
 */



var reducer = function reducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var action = arguments.length > 1 ? arguments[1] : undefined;
  state = getState(state, action);

  if (state.callback) {
    state.callback();
  }

  return state;
};

var getState = function getState(state, action) {
  state = _actions_index__WEBPACK_IMPORTED_MODULE_0__["default"].login(state, action);
  return state;
};

/* harmony default export */ __webpack_exports__["default"] = (Object(redux__WEBPACK_IMPORTED_MODULE_1__["createStore"])(reducer));

/***/ }),

/***/ 39:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _reducers_userReducer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(35);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "$user", function() { return _reducers_userReducer__WEBPACK_IMPORTED_MODULE_0__["default"]; });

/* harmony import */ var _reducers_themeReducer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(36);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "$theme", function() { return _reducers_themeReducer__WEBPACK_IMPORTED_MODULE_1__["default"]; });

/* harmony import */ var _reducers_locateReducer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(37);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "$locate", function() { return _reducers_locateReducer__WEBPACK_IMPORTED_MODULE_2__["default"]; });

/* harmony import */ var _reducers_loginReducer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(38);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "$login", function() { return _reducers_loginReducer__WEBPACK_IMPORTED_MODULE_3__["default"]; });






/***/ }),

/***/ 47:
/***/ (function(module, exports) {

module.exports = require("antd/lib/locale-provider/en_US");

/***/ }),

/***/ 48:
/***/ (function(module, exports) {

module.exports = require("antd/lib/locale-provider/zh_CN");

/***/ }),

/***/ 59:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _common_lib_cookie_index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(34);

/* harmony default export */ __webpack_exports__["default"] = (function (option) {
  var getCookie = _common_lib_cookie_index__WEBPACK_IMPORTED_MODULE_0__["default"].getCookie;
  option.headers = option.headers || {};
  option.headers.reseller_admin_token = getCookie('reseller_admin_token');
  return option;
});

/***/ }),

/***/ 60:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(32);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(antd__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(39);

var warning = antd__WEBPACK_IMPORTED_MODULE_0__["Modal"].warning;

var warn = null;
/* harmony default export */ __webpack_exports__["default"] = (function (response, resolve, errorCallBack) {
  if (parseInt(response.code) === 200) {
    resolve(response);
  } else if (parseInt(response.code) === 403) {
    // 登陆认证失败
    var loginMsg = _store__WEBPACK_IMPORTED_MODULE_1__["$locate"].getState().locate.localMesaage['login'];

    if (!warn) {
      warn = warning({
        title: loginMsg.sessionExpired,
        content: '',
        onOk: function onOk() {
          location.href = '/#login';
          warn = null;
        }
      });
    }
  } else {
    errorCallBack(response.msg);
  }
});

/***/ }),

/***/ 75:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(76);


/***/ }),

/***/ 76:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _config_index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(12);
/* harmony import */ var _inject_index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(59);
/* harmony import */ var _intercept_index__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(60);
/**
 * Created by BIYY on 2018-6-25.
 */



console.log('config', _config_index__WEBPACK_IMPORTED_MODULE_0__["default"]);
var api = {};
api.requestType = {
  get: 'get',
  post: 'post',
  put: 'put',
  delete: 'delete',
  jsonp: 'jsonp'
};
var baseUrl = 'http://pay.blinkpaycard.com'; // 预下单

api.preOrder = {
  url: "".concat(baseUrl.development, "/pay/preOrder"),
  method: api.requestType.post
}; // 校验订单|

api.validPreOrder = {
  url: "".concat(baseUrl, "/pay/validPreOrder"),
  method: api.requestType.post
}; // 登陆

api.Login = {
  url: "".concat(baseUrl, "/pay/pay"),
  method: api.requestType.post
};
/* harmony default export */ __webpack_exports__["default"] = (api);

/***/ }),

/***/ 9:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/**
 * Created by BIYY on 2018-6-8.
 */
var callback = function callback() {
  console.log('callback');
};

/* harmony default export */ __webpack_exports__["default"] = ({
  login: function login(state, action) {
    state.login = action.payload;
    state.callback = action.callback || callback;
    return state;
  },
  user: function user(state, action) {
    state.user = action.payload;
    state.callback = action.callback || callback;
    return state;
  },
  theme: function theme(state, action) {
    state.theme = action.payload;
    state.callback = action.callback || callback;
    return state;
  },
  locate: function locate(state, action) {
    state.locate = action.payload;
    state.callback = action.callback || callback;
    return state;
  }
});

/***/ })

/******/ });