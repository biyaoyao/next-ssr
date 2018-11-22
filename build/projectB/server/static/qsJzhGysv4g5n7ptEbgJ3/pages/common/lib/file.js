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
/******/ 	return __webpack_require__(__webpack_require__.s = 66);
/******/ })
/************************************************************************/
/******/ ({

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

/***/ 66:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(52);


/***/ })

/******/ });