!function n(i,r,s){function l(t,e){if(!r[t]){if(!i[t]){var o="function"==typeof require&&require;if(!e&&o)return o(t,!0);if(a)return a(t,!0);throw(o=new Error("Cannot find module '"+t+"'")).code="MODULE_NOT_FOUND",o}o=r[t]={exports:{}},i[t][0].call(o.exports,function(e){return l(i[t][1][e]||e)},o,o.exports,n,i,r,s)}return r[t].exports}for(var a="function"==typeof require&&require,e=0;e<s.length;e++)l(s[e]);return l}({1:[function(e,t,o){"use strict";Object.defineProperty(o,"__esModule",{value:!0}),o.css=o.removeCls=o.addCls=o.attr=o.$=o.getDom=o.throttle=void 0;o.throttle=function(i,r){var s;void 0===r&&(r=160);var l=+new Date;return function(){for(var e=this,t=[],o=0;o<arguments.length;o++)t[o]=arguments[o];var n=+new Date;window.clearTimeout(s),r<=n-l?(i.apply(this,t),l=n):s=window.setTimeout(function(){i.apply(e,t)},r)}};function n(e){return e?e instanceof Element?e:document.querySelector(e):null}o.getDom=n;o.attr=function(e,t,o){void 0===o&&(o=null);e=n(e);return e?o?(e.setAttribute(t,o),o):e.getAttribute(t):null};o.addCls=function(e,t){var e=n(e);e&&("string"==typeof t?e.classList.add(t):(e=e.classList).add.apply(e,t))};o.removeCls=function(e,t){var e=n(e);e&&("string"==typeof t?e.classList.remove(t):(e=e.classList).remove.apply(e,t))};o.css=function(e,t,o){if(void 0===o&&(o=null),"string"==typeof t)if(null!==o)e.style.setProperty(t,o);else for(var n=t.split(";"),i=0;i<n.length;i++){var r=n[i];r&&(r=r.split(":"),e.style.setProperty(r[0],r[1]))}else for(var s in t)t.hasOwnProperty(s)&&e.style.setProperty(s,t[s])};var i=n;o.$=i,o.default=i},{}],2:[function(e,t,o){"use strict";Object.defineProperty(o,"__esModule",{value:!0}),o.resetDraggableElePosition=o.disableDraggable=o.enableDraggable=void 0;var r=e("./global"),s=e("./core/base"),i=new Map,n={inViewport:!0},l=(a.prototype.getContainerPos=function(){var e=this._container.getBoundingClientRect();return{left:e.left,top:e.top}},a.prototype.bindDrag=function(){var e=this._trigger,t=this._options;e.addEventListener("mousedown",this.onMousedown,!1),window.addEventListener("mouseup",this.onMouseup,!1),document.addEventListener("mousemove",this.onMousemove),t.inViewport&&window.addEventListener("resize",this.onResize,!1)},a.prototype.unbindDrag=function(){this._trigger.removeEventListener("mousedown",this.onMousedown,!1),window.removeEventListener("mouseup",this.onMouseup,!1),document.removeEventListener("mousemove",this.onMousemove),this._options.inViewport&&window.removeEventListener("resize",this.onResize,!1)},a.prototype.resetContainerStyle=function(){null!==this._style&&(this._isFirst=!0,this._container.setAttribute("style",this._style))},a);function a(e,t,o){var i=this;this._options=null,this._state=null,this._isFirst=!0,this._style=null,this.onMousedown=function(e){e.stopPropagation=!0,r.autoDebug(function(){console.log("onMousedown")});var t=i._state;t.isInDrag=!0,t.mX=e.clientX,t.mY=e.clientY;var e=i.getContainerPos(),o=e.left,n=e.top;i._container.style.position="absolute",r.autoDebug(function(){console.log("this._isFirst",i._isFirst,o,n)}),t.domMaxY=document.documentElement.clientHeight-i._container.offsetHeight-1,t.domMaxX=document.documentElement.clientWidth-i._container.offsetWidth-1,t.domMaxY=t.domMaxY<0?0:t.domMaxY,t.domMaxX=t.domMaxX<0?0:t.domMaxX,i._isFirst&&(i._container.style.left=o+"px",i._container.style.top=n+"px",i._style||(i._style=i._container.getAttribute("style")),i._isFirst=!1),t.domStartX=o,t.domStartY=n},this.onMouseup=function(e){e.stopPropagation=!0;var t=i._state;t.isInDrag=!1;var o=i.getContainerPos(),e=o.left,o=o.top;t.domStartX=e,t.domStartY=o},this.onMousemove=s.throttle(function(e){var t,o=i._state;o.isInDrag&&(t=e.clientX,e=e.clientY,t=t-o.mX,e=e-o.mY,t=o.domStartX+t,e=o.domStartY+e,i._options.inViewport&&(t<0?t=0:t>o.domMaxX&&(t=o.domMaxX),e<0?e=0:e>o.domMaxY&&(e=o.domMaxY)),i._container.style.margin="0",i._container.style.paddingBottom="0",i._container.style.left=t+"px",i._container.style.top=e+"px")},10).bind(this),this.onResize=s.throttle(function(e){var t=i._state;t.domMaxY=document.documentElement.clientHeight-i._container.offsetHeight-1,t.domMaxX=document.documentElement.clientWidth-i._container.offsetWidth-1,t.domMaxY=t.domMaxY<0?0:t.domMaxY,t.domMaxX=t.domMaxX<0?0:t.domMaxX,t.domStartY=parseInt(i._container.style.top),t.domStartX=parseInt(i._container.style.left),t.domStartY>t.domMaxY&&0<t.domMaxY&&(i._container.style.top=t.domMaxY+"px"),t.domStartX>t.domMaxX&&(i._container.style.left=t.domMaxX+"px")},10).bind(this),this._trigger=e,this._container=t,this._options=Object.assign({},n,{inViewport:o}),this._state={isInDrag:!1,mX:0,mY:0,domStartX:0,domStartY:0}}o.enableDraggable=function(e,t,o){void 0===o&&(o=!0);var n=s.getDom(e);null!=n&&((e=i.get(n))||(e=new l(n,s.getDom(t),o),i.set(n,e)),e.bindDrag())},o.disableDraggable=function(e){null==(e=s.getDom(e))||(e=i.get(e))&&e.unbindDrag()},o.resetDraggableElePosition=function(e){null==(e=s.getDom(e))||(e=i.get(e))&&e.resetContainerStyle()}},{"./core/base":1,"./global":3}],3:[function(e,t,o){"use strict";Object.defineProperty(o,"__esModule",{value:!0}),o.autoDebug=void 0;o.autoDebug=function(e){"true"===sessionStorage.getItem("isDebug")&&e()}},{}],4:[function(e,t,o){"use strict";var n=Object.create?function(e,t,o,n){void 0===n&&(n=o),Object.defineProperty(e,n,{enumerable:!0,get:function(){return t[o]}})}:function(e,t,o,n){void 0===n&&(n=o),e[n]=t[o]},i=Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}:function(e,t){e.default=t},r=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var o in e)"default"!==o&&Object.prototype.hasOwnProperty.call(e,o)&&n(t,e,o);return i(t,e),t};Object.defineProperty(o,"__esModule",{value:!0});o=e("./global"),e=r(e("./interop"));window.bcd={interop:e,version:"0.0.1",autoDebug:o.autoDebug}},{"./global":3,"./interop":5}],5:[function(e,t,o){"use strict";Object.defineProperty(o,"__esModule",{value:!0}),o.enableBodyScroll=o.disableBodyScroll=o.maxResetStyle=o.minResetStyle=o.resetDraggableElePosition=o.disableDraggable=o.enableDraggable=void 0;var n=e("./dragHelper");Object.defineProperty(o,"enableDraggable",{enumerable:!0,get:function(){return n.enableDraggable}}),Object.defineProperty(o,"disableDraggable",{enumerable:!0,get:function(){return n.disableDraggable}}),Object.defineProperty(o,"resetDraggableElePosition",{enumerable:!0,get:function(){return n.resetDraggableElePosition}});var i=e("./global"),r=e("./core/base");o.minResetStyle=function(e,t){var e=r.getDom(e),o="";return e&&(e=e.querySelector(".bcd-form"),t&&(o=r.attr(e,"style"),i.autoDebug(function(){console.log("get lastNormalStyle",o)})),i.autoDebug(function(){console.log("minResetStyle")}),e.style.left="",e.style.top="",e.style.right=""),o},o.maxResetStyle=function(e,t){var e=r.getDom(e),o="";return e&&(e=e.querySelector(".bcd-form"),t&&(o=r.attr(e,"style"),i.autoDebug(function(){console.log("get lastNormalStyle",o)})),i.autoDebug(function(){console.log("maxResetStyle")}),e.style.left="",e.style.top=""),o};var s=[];o.disableBodyScroll=function(){var e,t=document.body,o={};["position","width","overflow"].forEach(function(e){o[e]=t.style[e]}),s.push(o),r.css(t,{position:"relative",width:(!(e=document.body.style.overflow)||"hidden"!==e)&&document.body.scrollHeight>(window.innerHeight||document.documentElement.clientHeight)?"calc(100% - 17px)":null,overflow:"hidden"}),r.addCls(document.body,"ant-scrolling-effect")},o.enableBodyScroll=function(){var e,t=0<s.length?s.pop():{};r.css(document.body,{position:null!==(e=t.position)&&void 0!==e?e:null,width:null!==(e=t.width)&&void 0!==e?e:null,overflow:null!==(t=t.overflow)&&void 0!==t?t:null}),r.removeCls(document.body,"ant-scrolling-effect")}},{"./core/base":1,"./dragHelper":2,"./global":3}]},{},[4]);
//# sourceMappingURL=index.js.map
