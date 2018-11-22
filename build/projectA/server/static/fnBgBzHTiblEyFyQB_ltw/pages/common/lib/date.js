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
/******/ 	return __webpack_require__(__webpack_require__.s = 65);
/******/ })
/************************************************************************/
/******/ ({

/***/ 51:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

/**
 * Created by BIYY on 2017-11-17.
 */
var _date = {}; // const padLeftZero = (str) => {
//   return ('00' + str).substr(str.length)
// }

/**
 *
 * @param timestampOrDate {Date} 日期对象 或 时间戳
 * @param fmt {String}  日期格式 ，常见：'yyyy-MM-dd hh:mm:ss.S'、'yyyy-M-d h:m:s.S'
 * @returns {String} 格式化后的日期
 */

_date.formatDate = function (timestampOrDate, fmt) {
  if (!timestampOrDate) {
    return '';
  }

  var date = null; // Step 1: 如果是非时间戳，转化为时间戳

  if (_typeof(timestampOrDate) === 'object') {
    // 传进来的是一个时间 new Date() 对象
    date = timestampOrDate;
  } else if (!/^\d+$/.test(timestampOrDate)) {
    // 把-转化成 / 避免IOS时间问题
    date = new Date(timestampOrDate.replace(/-/gi, '/'));
  } else {
    // 时间戳
    date = new Date(timestampOrDate);
  }

  if (/(y+)/.test(fmt)) {
    fmt = fmt.replace(RegExp.$1, (date.getFullYear() + '').substr(4 - RegExp.$1.length));
  }

  var o = {
    'M+': date.getMonth() + 1,
    // 月份
    'd+': date.getDate(),
    // 日
    'h+': date.getHours() % 12 === 0 ? 12 : date.getHours() % 12,
    // 小时
    'H+': date.getHours(),
    // 小时
    'm+': date.getMinutes(),
    // 分
    's+': date.getSeconds(),
    // 秒
    'q+': Math.floor((date.getMonth() + 3) / 3),
    // 季度
    S: date.getMilliseconds() // 毫秒

  };

  for (var k in o) {
    if (new RegExp("(".concat(k, ")")).test(fmt)) {
      fmt = fmt.replace(RegExp.$1, RegExp.$1.length === 1 ? o[k] : ('00' + o[k]).substr(o[k].toString().length));
    }
  }

  return fmt;
};
/**
 *
 * @param num {int} 上几个月的时间
 *  * @param fmt {String} 格式化返回结果  不传返回时间对象，传入返回格式化字符串
 * @returns {String} 返回上一月的年月，日为统一1号
 */


_date.getPerMonth = function (num, fmt) {
  var nowMonth = new Date();
  var year = nowMonth.getFullYear();
  var month = nowMonth.getMonth();
  var date = '';

  if (Number.isFinite(num)) {
    date = new Date(year, month - Number.parseInt(num), 1);
  } else {
    date = new Date(year, month - 1, 1);
  }

  if (fmt) {
    return _date.formatDate(date, fmt);
  } else {
    return date;
  }
};
/**
 *
 * @param num {int} 上几天的时间
 * @param fmt {String} 格式化返回结果   不传返回时间对象，传入返回格式化字符串
 * @returns {String} 返回前几天的日期
 */


_date.getPerDay = function (num, fmt) {
  var nowMonth = new Date();
  var year = nowMonth.getFullYear();
  var month = nowMonth.getMonth();
  var day = nowMonth.getdate();
  var date = '';

  if (Number.isFinite(num)) {
    date = new Date(year, month, day - Number.parseInt(num), 1);
  } else {
    date = new Date(year, month, day - 1);
  }

  if (fmt) {
    return _date.formatDate(date, fmt);
  } else {
    return date;
  }
};

/* harmony default export */ __webpack_exports__["default"] = (_date);

/***/ }),

/***/ 65:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(51);


/***/ })

/******/ });