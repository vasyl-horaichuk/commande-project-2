function e(e){return e&&e.__esModule?e.default:e}var n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},o={},r=n.parcelRequired7c6;null==r&&((r=function(e){if(e in t)return t[e].exports;if(e in o){var n=o[e];delete o[e];var r={id:e,exports:{}};return t[e]=r,n.call(r.exports,r,r.exports),r.exports}var d=new Error("Cannot find module '"+e+"'");throw d.code="MODULE_NOT_FOUND",d}).register=function(e,n){o[e]=n},n.parcelRequired7c6=r);var d=r("krGWQ"),i=r("lNjrx");function l(e,n){e.classList.add("btn__current"),n.classList.remove("btn__current")}var a=r("e7DYx"),s=r("ifiVw"),c=r("kKZR4"),u=r("kUstA"),f=r("9WgtF");(0,i.renderMoviesWatchedAndQueue)(1,"queueMovies","queue"),d.refs.openWatchedBtnEl.addEventListener("click",(()=>(0,i.renderMoviesWatchedAndQueue)(1,"watchedMovies","watched"))),d.refs.openQueueBtnEl.addEventListener("click",(()=>(0,i.renderMoviesWatchedAndQueue)(1,"queueMovies","queue"))),d.refs.openWatchedBtnEl.addEventListener("click",(()=>l(d.refs.openWatchedBtnEl,d.refs.openQueueBtnEl))),d.refs.openQueueBtnEl.addEventListener("click",(()=>l(d.refs.openQueueBtnEl,d.refs.openWatchedBtnEl))),d.refs.moviesCollectionLibrary.addEventListener("click",a.openModal),d.refs.paginationEl.addEventListener("click",(e=>{(0,c.onPaginationBtnClick)(e)})),window.addEventListener("resize",e(s)(250,(e=>{(0,c.markupPagination)()}))),d.refs.openModalFooter.addEventListener("click",u.onOpenModalFooterClick),d.refs.closeModalFooter.addEventListener("click",u.onCloseModalFooterClick),d.refs.modalFooter.addEventListener("click",u.onBackdropClickToClose),f.btnUp.addEventListener();
//# sourceMappingURL=mylibrary.17366713.js.map
