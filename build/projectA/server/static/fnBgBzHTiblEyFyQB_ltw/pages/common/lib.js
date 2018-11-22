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
/******/ 	return __webpack_require__(__webpack_require__.s = 67);
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

/***/ 44:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _request__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(46);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "request", function() { return _request__WEBPACK_IMPORTED_MODULE_0__["default"]; });

/* harmony import */ var _cookie__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(34);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "cookie", function() { return _cookie__WEBPACK_IMPORTED_MODULE_1__["default"]; });

/* harmony import */ var _object__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(53);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "obj", function() { return _object__WEBPACK_IMPORTED_MODULE_2__["default"]; });

/* harmony import */ var _date__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(51);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "date", function() { return _date__WEBPACK_IMPORTED_MODULE_3__["default"]; });

/* harmony import */ var _string__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(54);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "string", function() { return _string__WEBPACK_IMPORTED_MODULE_4__["default"]; });

/* harmony import */ var _array__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(50);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "array", function() { return _array__WEBPACK_IMPORTED_MODULE_5__["default"]; });

/* harmony import */ var _file__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(52);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "file", function() { return _file__WEBPACK_IMPORTED_MODULE_6__["default"]; });

/* harmony import */ var _number__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(55);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "number", function() { return _number__WEBPACK_IMPORTED_MODULE_7__["default"]; });

/**
 * 公共库入口页面
 */









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

/***/ 50:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/**
 * Created by BIYY on 2017-11-17.
 */
// import toast from '../toast'
var array = {};
/**
 * 数组的去重复
 * @param arr{Array}
 * @returns {*}
 */

array.unique = function (arr) {
  for (var i = 0; i < arr.length; i++) {
    for (var j = i + 1; j < arr.length;) {
      if (arr[j] === arr[i]) {
        arr.splice(j, 1);
      } else {
        j++;
      }
    }
  }

  return arr;
};
/**
 * 数组的去重复
 * @param arr{Object}
 * @returns {*}
 */
// array.uniqueOfObj = (arr) => {
//   let result = []
//   let hash = {}
//   for (let i = 0, elem; (elem = arr[i]) != null; i++) {
//     if (!hash[elem]) {
//       result.push(elem)
//       hash[elem] = true
//     }
//   }
//   return result
// }

/**
 * 获取数组的下标
 * @param arr
 * @param val
 * @returns {number}
 */


array.getIndex = function (arr, val) {
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] === val) {
      return i;
    }
  }

  return -1;
};

/* harmony default export */ __webpack_exports__["default"] = (array);

/***/ }),

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

/***/ 52:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/**
 * Created by BIYY on 2017-11-17.
 */
// import toast from '../toast'
var file = {};
/**
 * 获取文件大小
 * @param size
 * @returns {*}
 */

file.fileSize = function (size) {
  var fsize = parseFloat(size, 2);
  var fileSizeString;

  if (fsize < 1024) {
    fileSizeString = fsize.toFixed(2) + 'B';
  } else if (fsize < 1048576) {
    fileSizeString = (fsize / 1024).toFixed(2) + 'KB';
  } else if (fsize < 1073741824) {
    fileSizeString = (fsize / 1024 / 1024).toFixed(2) + 'MB';
  } else if (fsize < 1024 * 1024 * 1024 * 1024) {
    fileSizeString = (fsize / 1024 / 1024 / 1024).toFixed(2) + 'GB';
  } else if (fsize < 1024 * 1024 * 1024 * 1024 * 1024) {
    fileSizeString = (fsize / 1024 / 1024 / 1024 / 1024).toFixed(2) + 'TB';
  } else {
    fileSizeString = '0B';
  }

  return fileSizeString;
};
/**
 *  获取文件的后缀名
 * @param {Object} fileName
 * @returns {*}
 */


file.getExt = function (fileName) {
  if (fileName.lastIndexOf('.') === -1) {
    return fileName;
  }

  var pos = fileName.lastIndexOf('.') + 1;
  return fileName.substring(pos, fileName.length).toLowerCase();
};
/**
 * 验证是否为图片
 * @param fileName
 * @returns {Boolen}
 */


file.checkImage = function (fileName) {
  return /(gif|jpg|jpeg|png|GIF|JPG|PNG)$/ig.test(fileName);
};
/**
 * 验证是否为视频
 * @param fileName
 * @returns {Boolen}
 */


file.checkVideo = function (fileName) {
  return /(mp4|mp3|flv|wav)$/ig.test(fileName);
};
/**
 * 验证是否为文档
 * @param fileName
 * @returns {Boolen}
 */


file.checkDocument = function (fileName) {
  return /(doc|docx|xls|xlsx|pdf|txt|ppt|pptx)$/ig.test(fileName);
};
/**
 * 获取图片base64
 * @param {*} img 
 */


file.getBase64Image = function (img) {
  var canvas = document.createElement("canvas");
  canvas.width = img.width;
  canvas.height = img.height;
  var ctx = canvas.getContext("2d");
  ctx.drawImage(img, 0, 0, img.width, img.height);
  var ext = img.src.substring(img.src.lastIndexOf(".") + 1).toLowerCase();
  var dataURL = canvas.toDataURL("image/" + ext);
  return dataURL;
};
/**
 * base64   转blob
 * @param {*} img 
 */


file.convertBase64UrlToBlob = function (urlData) {
  var bytes = window.atob(urlData.split(',')[1]); //去掉url的头，并转换为byte        //处理异常,将ascii码小于0的转换为大于0

  var ab = new ArrayBuffer(bytes.length);
  var ia = new Uint8Array(ab);

  for (var i = 0; i < bytes.length; i++) {
    ia[i] = bytes.charCodeAt(i);
  }

  return new Blob([ab], {
    type: 'image/png'
  });
};

/* harmony default export */ __webpack_exports__["default"] = (file);

/***/ }),

/***/ 53:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

/**
 * Created by BIYY on 2017-11-17.
 */
var obj = {};
/**
 * 对象合并 深拷贝
 * @param des
 * @param src
 * @param override
 * @returns {*}
 */

obj.deepExtend = function (des, src) {
  if (Array.isArray(src)) {
    if (Array.isArray(des)) {
      for (var i = 0; i < src.length; i++) {
        if (src[i] instanceof Object) {
          des[i] = obj.deepExtend(des[i], src[i]);
        } else {
          des[i] = src[i];
        }
      }
    } else {
      des = [].concat(src);
    }
  } else if (src instanceof Object && !Array.isArray(src)) {
    if (des instanceof Object && !Array.isArray(des)) {
      var _arr = Object.keys(src);

      for (var _i = 0; _i < _arr.length; _i++) {
        var key = _arr[_i];

        if (src[key] instanceof Object) {
          des[key] = obj.deepExtend(des[key], src[key]);
        } else {
          des[key] = src[key];
        }
      }
    } else {
      des = Object.assign({}, src);
    }
  } else {
    des = src;
  }

  return des;
};
/**
 * 对象合并
 * @param des
 * @param src
 * @param override
 * @returns {*}
 */


obj.extend = function (des, src, override) {
  if (src instanceof Array) {
    for (var i = 0, len = src.length; i < len; i++) {
      obj.extend(des, src[i], override);
    }
  }

  for (var _i2 in src) {
    if (override || !(_i2 in des)) {
      des[_i2] = src[_i2];
    }
  }

  return des;
};
/**
 *    对象覆盖
 * @param {} des 
 * @param {*} src 
 */


obj.deepCopy = function ($obj) {
  var newObj = {};

  for (var vl in $obj) {
    if (_typeof($obj[vl]) === 'object' && $obj[vl] !== null) {
      newObj[vl] = obj.deepCopy($obj[vl]);
    } else {
      newObj[vl] = $obj[vl];
    }
  }

  return newObj;
};
/**
 *    对象覆盖
 * @param {} des 
 * @param {*} src 
 */


obj.overwrite = function (source, target) {
  var targetObj = JSON.parse(JSON.stringify(target));
  var newObject = JSON.parse(JSON.stringify(source));
  Object.keys(targetObj).forEach(function (key) {
    newObject[key] = targetObj[key];
  });
  return newObject;
};
/**
 * 判断字符串是否为json格式
 * @param str
 * @returns {boolean}
 */


obj.isJSON = function (str) {
  if (typeof str === 'string') {
    try {
      JSON.parse(str);

      if (str.indexOf('{') > -1) {
        return true;
      } else {
        return false;
      }
    } catch (e) {
      return false;
    }
  } else {
    str = JSON.stringify(str);
    obj.isJSON(str);
  }

  return false;
};
/**
 * 判断非空,
 * @param val
 * @returns {Boolean}
 */


obj.isEmpty = function (val) {
  if (val == null) {
    return true;
  }

  if (val == undefined || val == 'undefined') {
    return true;
  }

  if (val === '') {
    return true;
  }

  if (val.length === 0) {
    return true;
  }

  if (_typeof(val) == 'object' && JSON.stringify(val) == '{}') {
    return true;
  }

  if (!/[^(^\s*)|(\s*$)]/.test(val)) {
    return true;
  }

  return false;
};

/* harmony default export */ __webpack_exports__["default"] = (obj);

/***/ }),

/***/ 54:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/**
 * Created by BIYY on 2018-1-15.
 */
var string = {};
/**
 * 去除字符串空格
 * @param str
 */

string.trim = function (str) {
  return str.replace(/(^\s*)|(\s*$)/g, '');
};
/**
 * 将时间格式的字符串格式化为对应的时间对象
 * 支持   2018-12-1 或者  2018-12-1 12:23:34
 * @param str
 */


string.string2date = function (str) {
  if (typeof str === 'string') {
    return new Date(str.replace(/-/ig, '/'));
  } else {
    return str;
  }
};
/**
 * 过滤html代码(把<>转换)
 * @param {String} str
 */


string.filterTag = function (str) {
  str = str.replace(/&/ig, '&amp;');
  str = str.replace(/</ig, '&lt;');
  str = str.replace(/>/ig, '&gt;');
  str = str.replace(' ', '&nbsp;');
  return str;
};

/* harmony default export */ __webpack_exports__["default"] = (string);

/***/ }),

/***/ 55:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/**
 * Created by BIYY on 2017-11-17.
 */
// import toast from '../toast'
var number = {};
/**
 * 数字千分位分开
 * @param num{number}
 * @returns {*}
 */

number.formatNum = function (num) {
  var str = num + '';
  var newStr = '';
  var count = 0;

  if (str.indexOf('.') == -1) {
    for (var i = str.length - 1; i >= 0; i--) {
      if (count % 3 == 0 && count != 0) {
        newStr = str.charAt(i) + ',' + newStr;
      } else {
        newStr = str.charAt(i) + newStr;
      }

      count++;
    }

    str = newStr + '.00'; // 自动补小数点后两位

    return str;
  } else {
    for (var _i = str.indexOf('.') - 1; _i >= 0; _i--) {
      if (count % 3 == 0 && count != 0) {
        newStr = str.charAt(_i) + ',' + newStr; // 碰到3的倍数则加上“,”号
      } else {
        newStr = str.charAt(_i) + newStr; // 逐个字符相接起来
      }

      count++;
    }

    str = newStr + (str + '00').substr((str + '00').indexOf('.'), 3);
    return str;
  }
};
/**
 * 验证身份证
 * @param arr{Object}
 * @returns {*}
 */


number.IdentityCodeValid = function (code) {
  var alert_tip = ''; // 用于提示

  var city = {
    11: '北京',
    12: '天津',
    13: '河北',
    14: '山西',
    15: '内蒙古',
    21: '辽宁',
    22: '吉林',
    23: '黑龙江 ',
    31: '上海',
    32: '江苏',
    33: '浙江',
    34: '安徽',
    35: '福建',
    36: '江西',
    37: '山东',
    41: '河南',
    42: '湖北 ',
    43: '湖南',
    44: '广东',
    45: '广西',
    46: '海南',
    50: '重庆',
    51: '四川',
    52: '贵州',
    53: '云南',
    54: '西藏 ',
    61: '陕西',
    62: '甘肃',
    63: '青海',
    64: '宁夏',
    65: '新疆',
    71: '台湾',
    81: '香港',
    82: '澳门',
    91: '国外 '
  };
  var pass = true;

  if (!code || !/^\d{6}(18|19|20)?\d{2}(0[1-9]|1[12])(0[1-9]|[12]\d|3[01])\d{3}(\d|X)$/i.test(code)) {
    alert_tip = '身份证号格式错误';
    pass = false;
  } else if (!city[code.substr(0, 2)]) {
    alert_tip = '地址编码错误';
    pass = false;
  } else {
    // 18位身份证需要验证最后一位校验位
    if (code.length === 18) {
      code = code.split(''); // ∑(ai×Wi)(mod 11)
      // 加权因子

      var factor = [7, 9, 10, 5, 8, 4, 2, 1, 6, 3, 7, 9, 10, 5, 8, 4, 2]; // 校验位

      var parity = [1, 0, 'X', 9, 8, 7, 6, 5, 4, 3, 2];
      var sum = 0;
      var ai = 0;
      var wi = 0;

      for (var i = 0; i < 17; i++) {
        ai = code[i];
        wi = factor[i];
        sum += ai * wi;
      } // let last = parity[sum % 11]


      if (parity[sum % 11] != code[17]) {
        alert_tip = '校验位错误(X需大写)';
        pass = false;
      }
    }
  }

  if (!pass) {
    console.log(alert_tip);
  }

  return pass;
};
/**
 * 将数字转换成对应的中文 将阿拉伯数字翻译成中文的大写数字
 *
 * @param {Object}
 *            num 比如:1对应一 11：十一 101:一百零一
 * @return {TypeName}
 */


number.numberToChinese = function (num) {
  var AA = ['零', '一', '二', '三', '四', '五', '六', '七', '八', '九', '十'];
  var BB = ['', '十', '百', '仟', '萬', '億', '点', ''];
  var a = ('' + num).replace(/(^0*)/g, '').split('.');
  var k = 0;
  var re = '';

  for (var i = a[0].length - 1; i >= 0; i--) {
    switch (k) {
      case 0:
        re = BB[7] + re;
        break;

      case 4:
        if (!new RegExp('0{4}//d{' + (a[0].length - i - 1) + '}$').test(a[0])) {
          re = BB[4] + re;
        }

        break;

      case 8:
        re = BB[5] + re;
        BB[7] = BB[5];
        k = 0;
        break;
    }

    if (k % 4 === 2 && a[0].charAt(i + 2) !== 0 && a[0].charAt(i + 1) === 0) {
      re = AA[0] + re;
    }

    if (a[0].charAt(i) !== 0) {
      re = AA[a[0].charAt(i)] + BB[k % 4] + re;
    }

    k++;
  }

  if (a.length > 1) {
    // 加上小数部分(如果有小数部分)
    re += BB[6];

    for (var _i2 = 0; _i2 < a[1].length; _i2++) {
      re += AA[a[1].charAt(_i2)];
    }
  }

  if (re === '一十') {
    re = '十';
  }

  if (re.match(/^一/) && re.length === 3) {
    re = re.replace('一', '');
  }

  return re;
};
/**
 * 将数字转换为大写金额
 * @param {Object} Num
 */


number.toChinese = function (Num) {
  // 判断如果传递进来的不是字符的话转换为字符
  if (typeof Num === 'number') {
    Num = Num.toString();
  }

  Num = Num.replace(/,/g, ''); // 替换tomoney()中的“,”

  Num = Num.replace(/ /g, ''); // 替换tomoney()中的空格

  Num = Num.replace(/￥/g, ''); // 替换掉可能出现的￥字符

  if (isNaN(Num)) {
    // 验证输入的字符是否为数字
    // alert('请检查小写金额是否正确')
    return '';
  } // 字符处理完毕后开始转换，采用前后两部分分别转换


  var part = String(Num).split('.');
  var newchar = ''; // 小数点前进行转化

  for (var i = part[0].length - 1; i >= 0; i--) {
    if (part[0].length > 10) {
      return ''; // 若数量超过拾亿单位，提示
    }

    var tmpnewchar = '';
    var perchar = part[0].charAt(i);

    switch (perchar) {
      case '0':
        tmpnewchar = '零' + tmpnewchar;
        break;

      case '1':
        tmpnewchar = '壹' + tmpnewchar;
        break;

      case '2':
        tmpnewchar = '贰' + tmpnewchar;
        break;

      case '3':
        tmpnewchar = '叁' + tmpnewchar;
        break;

      case '4':
        tmpnewchar = '肆' + tmpnewchar;
        break;

      case '5':
        tmpnewchar = '伍' + tmpnewchar;
        break;

      case '6':
        tmpnewchar = '陆' + tmpnewchar;
        break;

      case '7':
        tmpnewchar = '柒' + tmpnewchar;
        break;

      case '8':
        tmpnewchar = '捌' + tmpnewchar;
        break;

      case '9':
        tmpnewchar = '玖' + tmpnewchar;
        break;
    }

    switch (part[0].length - i - 1) {
      case 0:
        tmpnewchar = tmpnewchar + '元';
        break;

      case 1:
        if (perchar != 0) tmpnewchar = tmpnewchar + '拾';
        break;

      case 2:
        if (perchar != 0) tmpnewchar = tmpnewchar + '佰';
        break;

      case 3:
        if (perchar != 0) tmpnewchar = tmpnewchar + '仟';
        break;

      case 4:
        tmpnewchar = tmpnewchar + '万';
        break;

      case 5:
        if (perchar != 0) tmpnewchar = tmpnewchar + '拾';
        break;

      case 6:
        if (perchar != 0) tmpnewchar = tmpnewchar + '佰';
        break;

      case 7:
        if (perchar != 0) tmpnewchar = tmpnewchar + '仟';
        break;

      case 8:
        tmpnewchar = tmpnewchar + '亿';
        break;

      case 9:
        tmpnewchar = tmpnewchar + '拾';
        break;
    }

    newchar = tmpnewchar + newchar;
  } // 小数点之后进行转化


  if (Num.indexOf('.') != -1) {
    if (part[1].length > 2) {
      // alert('小数点之后只能保留两位,系统将自动截断')
      part[1] = part[1].substr(0, 2);
    }

    for (var _i3 = 0; _i3 < part[1].length; _i3++) {
      var _tmpnewchar = '';

      var _perchar = part[1].charAt(_i3);

      switch (_perchar) {
        case '0':
          _tmpnewchar = '零' + _tmpnewchar;
          break;

        case '1':
          _tmpnewchar = '壹' + _tmpnewchar;
          break;

        case '2':
          _tmpnewchar = '贰' + _tmpnewchar;
          break;

        case '3':
          _tmpnewchar = '叁' + _tmpnewchar;
          break;

        case '4':
          _tmpnewchar = '肆' + _tmpnewchar;
          break;

        case '5':
          _tmpnewchar = '伍' + _tmpnewchar;
          break;

        case '6':
          _tmpnewchar = '陆' + _tmpnewchar;
          break;

        case '7':
          _tmpnewchar = '柒' + _tmpnewchar;
          break;

        case '8':
          _tmpnewchar = '捌' + _tmpnewchar;
          break;

        case '9':
          _tmpnewchar = '玖' + _tmpnewchar;
          break;
      }

      if (_i3 === 0) _tmpnewchar = _tmpnewchar + '角';
      if (_i3 === 1) _tmpnewchar = _tmpnewchar + '分';
      newchar = newchar + _tmpnewchar;
    }
  } // 替换所有无用汉字


  while (newchar.search('零零') !== -1) {
    newchar = newchar.replace('零零', '零');
  }

  newchar = newchar.replace('零亿', '亿');
  newchar = newchar.replace('亿万', '亿');
  newchar = newchar.replace('零万', '万');
  newchar = newchar.replace('零元', '元');
  newchar = newchar.replace('零角', '');
  newchar = newchar.replace('零分', '');

  if (newchar.charAt(newchar.length - 1) === '元') {
    newchar = newchar + '整';
  }

  return newchar;
};

/* harmony default export */ __webpack_exports__["default"] = (number);

/***/ }),

/***/ 67:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(44);


/***/ })

/******/ });