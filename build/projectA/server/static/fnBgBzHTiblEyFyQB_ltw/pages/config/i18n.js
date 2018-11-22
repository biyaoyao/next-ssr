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
/******/ 	return __webpack_require__(__webpack_require__.s = 81);
/******/ })
/************************************************************************/
/******/ ({

/***/ 40:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
  en_US: {
    logoff: 'Logout',
    rechargeExamine: 'recharge examine',
    presentExamine: 'present examine'
  },
  zh_CN: {
    logoff: '退出',
    rechargeExamine: '充值审核',
    presentExamine: '提现审核'
  }
});

/***/ }),

/***/ 41:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
  en_US: {
    title: 'Please Login and Pay',
    submit: 'Recharge',
    placeholderUserName: 'Cards Number',
    emptyUserName: 'Please fill in the Cards Number',
    placeholderPassword: 'Password',
    placeholderCvv: 'Cvv',
    forget: 'retrieve the password',
    sessionExpired: 'Session expired, please re login!',
    emptyPassword: 'Please input  password',
    emptyCvv: 'Please input Cvv',
    success: 'Pay success'
  },
  zh_CN: {
    title: '请登录并支付',
    submit: '支付',
    placeholderUserName: '卡号',
    emptyUserName: '请输入卡号',
    placeholderCvv: '卡验证值',
    placeholderPassword: '密码',
    sessionExpired: '会话过期, 请重新登陆!',
    emptyPassword: '请输入密码！',
    emptyCvv: '请输入卡验证值',
    success: '支付成功!'
  }
});

/***/ }),

/***/ 42:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
  en_US: {
    distributor: 'Distributor',
    distributorInfo: 'Distributor info',
    administrator: 'Administrator',
    recharge: 'Recharge Record',
    order: 'Order',
    card: 'Card',
    platform: 'Cooperation Platform',
    platformInfo: 'Cooperation info',
    cash: 'Application For Cash',
    consumption: 'Consumption'
  },
  zh_CN: {
    distributor: '经销商管理',
    distributorInfo: '经销商信息',
    administrator: '管理员管理',
    recharge: '充值记录',
    order: '订单管理',
    card: '卡管理',
    platform: '合作平台管理',
    platformInfo: '合作平台详情',
    cash: '提现申请管理',
    consumption: '消费记录管理'
  }
});

/***/ }),

/***/ 43:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
  en_US: {
    logoff: 'Logout',
    rechargeExamine: 'recharge examine',
    presentExamine: 'present examine',
    total: 'Total $total items'
  },
  zh_CN: {
    logoff: '退出',
    rechargeExamine: '充值审核',
    presentExamine: '提现审核',
    total: '共$total条'
  }
});

/***/ }),

/***/ 56:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _header_index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(40);
/* harmony import */ var _login_index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(41);
/* harmony import */ var _siderBar_index__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(42);
/* harmony import */ var _common_index__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(43);




/* harmony default export */ __webpack_exports__["default"] = ({
  en_US: {
    header: _header_index__WEBPACK_IMPORTED_MODULE_0__["default"]['en_US'],
    login: _login_index__WEBPACK_IMPORTED_MODULE_1__["default"]['en_US'],
    siderBar: _siderBar_index__WEBPACK_IMPORTED_MODULE_2__["default"]['en_US'],
    common: _common_index__WEBPACK_IMPORTED_MODULE_3__["default"]['en_US']
  },
  zh_CN: {
    header: _header_index__WEBPACK_IMPORTED_MODULE_0__["default"]['zh_CN'],
    login: _login_index__WEBPACK_IMPORTED_MODULE_1__["default"]['zh_CN'],
    siderBar: _siderBar_index__WEBPACK_IMPORTED_MODULE_2__["default"]['zh_CN'],
    common: _common_index__WEBPACK_IMPORTED_MODULE_3__["default"]['zh_CN']
  }
});

/***/ }),

/***/ 81:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(56);


/***/ })

/******/ });