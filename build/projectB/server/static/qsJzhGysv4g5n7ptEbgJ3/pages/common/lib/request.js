module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../../../ssr-module-cache.js');
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
/******/ 	return __webpack_require__(__webpack_require__.s = 71);
/******/ })
/************************************************************************/
/******/ ({

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

/***/ 33:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
  show: function show() {
    document.querySelector('#asyncLoading').style.display = 'block';
  },
  hide: function hide() {
    document.querySelector('#asyncLoading').style.display = 'none';
  }
});

/***/ }),

/***/ 46:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(32);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(antd__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(49);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _config_index__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(12);
/* harmony import */ var _common_lib_loading__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(33);
/**
 * Created by BIYY on 2017-11-17.
 */




var request = {};
/**
 * ajax请求失败
 * @param msg
 */

request.ajaxError = function (msg, timeOut) {
  console.log('ajaxError', msg);

  if (msg) {
    setTimeout(function () {
      antd__WEBPACK_IMPORTED_MODULE_0__["message"].error(JSON.stringify(msg));
    }, 20);
  } else {
    antd__WEBPACK_IMPORTED_MODULE_0__["message"].error('网络出错!');
  }

  _common_lib_loading__WEBPACK_IMPORTED_MODULE_3__["default"].hide();
  clearTimeout(timeOut);
};
/**
 * ajax
 * @param opt
 */


request.ajax = function (opt) {
  var option = {};
  var setTime = {};
  var time = new Date() * 1;
  var showLoading = true; //是否出現loading

  var loadingTime = _config_index__WEBPACK_IMPORTED_MODULE_2__["default"].loadingTime || 500; //出现loading时间

  var method = opt.api.method || _config_index__WEBPACK_IMPORTED_MODULE_2__["default"].requestType.get;
  var url = opt.api.url;
  var headers = opt.headers || opt.api.headers || {};

  if (!url) {
    request.ajaxError('请填写接口地址', setTime[time]);
    return false;
  }

  if (opt.api && opt.api.loadingTime) {
    loadingTime = opt.api.loadingTime;
  }

  if (opt.api && !opt.api.showLoading) {
    showLoading = false;
  }

  setTime[time] = setTimeout(function () {
    // 超过一定時間后出现加载条
    if (showLoading) {
      _common_lib_loading__WEBPACK_IMPORTED_MODULE_3__["default"].show();
    }
  }, loadingTime);
  option.headers = headers;
  option.method = method;
  option.url = url;

  if (opt.api && opt.api.inject) {
    //自定义注入器
    option = opt.api.inject(option);
  }

  if (method === _config_index__WEBPACK_IMPORTED_MODULE_2__["default"].requestType.get) {
    //get请求
    if (opt.data) {
      option.params = opt.data;
    }
  } else {
    //post请求
    if (opt.data) {
      option.data = opt.data;
    }

    option.params = opt.params || {};
  }

  return new Promise(function (resolve, reject) {
    axios__WEBPACK_IMPORTED_MODULE_1___default()(option).then(function (response) {
      request.render(response, opt, setTime, time, resolve);
      _common_lib_loading__WEBPACK_IMPORTED_MODULE_3__["default"].hide();
    }).catch(function (error) {
      console.log(error.response);
      var response = error.response;
      request.render(response, opt, setTime, time, resolve);
      _common_lib_loading__WEBPACK_IMPORTED_MODULE_3__["default"].hide();
    });
  });
};

request.render = function (response, opt, setTime, time, resolve) {
  if (response) {
    if (opt.api && opt.api.intercept) {
      //自定义状态码拦截器
      opt.api.intercept(response.data, resolve, function (msg) {
        request.ajaxError(msg, setTime[time]);
      });
    } else if (response.status === 503) {
      request.ajaxError(response.statusText, setTime[time]);
    } else {
      resolve(response.data);
    }
  } else {
    request.ajaxError('网络出错', setTime[time]);
  }
};

/* harmony default export */ __webpack_exports__["default"] = (request);

/***/ }),

/***/ 47:
/***/ (function(module, exports) {

module.exports = require("antd/lib/locale-provider/en_US");

/***/ }),

/***/ 48:
/***/ (function(module, exports) {

module.exports = require("antd/lib/locale-provider/zh_CN");

/***/ }),

/***/ 49:
/***/ (function(module, exports) {

module.exports = require("axios");

/***/ }),

/***/ 71:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(46);


/***/ })

/******/ });