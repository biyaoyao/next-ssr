(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{210:function(t,e,n){__NEXT_REGISTER_PAGE("/_error",function(){return t.exports=n(211),{page:t.exports.default}})},211:function(t,e,n){"use strict";n.r(e),n.d(e,"default",function(){return s});var r=n(0),o=n.n(r);function u(t){return(u="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function c(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function i(t,e){return!e||"object"!==u(e)&&"function"!=typeof e?function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t):e}function f(t){return(f=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function a(t,e){return(a=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}var s=function(t){function e(){return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,e),i(this,f(e).apply(this,arguments))}var n,r,u;return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&a(t,e)}(e,o.a.Component),n=e,u=[{key:"getInitialProps",value:function(t){var e=t.res,n=t.err;return{statusCode:e?e.statusCode:n?n.statusCode:null}}}],(r=[{key:"render",value:function(){return o.a.createElement("p",null,this.props.statusCode?"An error ".concat(this.props.statusCode," occurred on server--"):"An error occurred on client")}}])&&c(n.prototype,r),u&&c(n,u),e}()}},[[210,1,0]]]);