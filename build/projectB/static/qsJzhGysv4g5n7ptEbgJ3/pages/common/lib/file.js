(window.webpackJsonp=window.webpackJsonp||[]).push([[21],{313:function(t,e,n){"use strict";n.r(e);var r={fileSize:function(t){var e=parseFloat(t,2);return e<1024?e.toFixed(2)+"B":e<1048576?(e/1024).toFixed(2)+"KB":e<1073741824?(e/1024/1024).toFixed(2)+"MB":e<1099511627776?(e/1024/1024/1024).toFixed(2)+"GB":e<0x4000000000000?(e/1024/1024/1024/1024).toFixed(2)+"TB":"0B"},getExt:function(t){if(-1===t.lastIndexOf("."))return t;var e=t.lastIndexOf(".")+1;return t.substring(e,t.length).toLowerCase()},checkImage:function(t){return/(gif|jpg|jpeg|png|GIF|JPG|PNG)$/gi.test(t)},checkVideo:function(t){return/(mp4|mp3|flv|wav)$/gi.test(t)},checkDocument:function(t){return/(doc|docx|xls|xlsx|pdf|txt|ppt|pptx)$/gi.test(t)},getBase64Image:function(t){var e=document.createElement("canvas");e.width=t.width,e.height=t.height,e.getContext("2d").drawImage(t,0,0,t.width,t.height);var n=t.src.substring(t.src.lastIndexOf(".")+1).toLowerCase();return e.toDataURL("image/"+n)},convertBase64UrlToBlob:function(t){for(var e=window.atob(t.split(",")[1]),n=new ArrayBuffer(e.length),r=new Uint8Array(n),o=0;o<e.length;o++)r[o]=e.charCodeAt(o);return new Blob([n],{type:"image/png"})}};e.default=r},385:function(t,e,n){__NEXT_REGISTER_PAGE("/common/lib/file",function(){return t.exports=n(313),{page:t.exports.default}})}},[[385,1]]]);