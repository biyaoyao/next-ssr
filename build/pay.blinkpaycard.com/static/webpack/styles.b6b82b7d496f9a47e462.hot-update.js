webpackHotUpdate("styles",{

/***/ "./pages/components/index-loading/less/index.less":
/*!********************************************************!*\
  !*** ./pages/components/index-loading/less/index.less ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
module.exports = {"index-loading":"_3Q06_7kdg-L69qCZ2uNaaC","loading-text":"_3Kmyz2mo7PnCVTz9GHtx_m","loading-main":"coHCMVArAP6hw1TGShm6L","loading-icon":"_2vEMiiis17GyQYVpHWS406"};;
    if (true) {
      var injectCss = function injectCss(prev, href) {
        var link = prev.cloneNode();
        link.href = href;
        link.onload = function() {
          prev.parentNode.removeChild(prev);
        };
        prev.stale = true;
        prev.parentNode.insertBefore(link, prev);
      };
      module.hot.dispose(function() {
        window.__webpack_reload_css__ = true;
      });
      if (window.__webpack_reload_css__) {
        module.hot.__webpack_reload_css__ = false;
        console.log("[HMR] Reloading stylesheets...");
        var prefix = document.location.protocol + '//' + document.location.host;
        document
          .querySelectorAll("link[href][rel=stylesheet]")
          .forEach(function(link) {
            if (!link.href.match(prefix) || link.stale) return;
            injectCss(link, link.href.split("?")[0] + "?unix=1540956482227");
          });
      }
    }
  

/***/ })

})
//# sourceMappingURL=styles.b6b82b7d496f9a47e462.hot-update.js.map