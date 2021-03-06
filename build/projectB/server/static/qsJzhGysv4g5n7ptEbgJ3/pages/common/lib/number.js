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
/******/ 	return __webpack_require__(__webpack_require__.s = 69);
/******/ })
/************************************************************************/
/******/ ({

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

/***/ 69:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(55);


/***/ })

/******/ });