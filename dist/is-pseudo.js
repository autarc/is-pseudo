!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports.isPseudo=t():e.isPseudo=t()}(this,function(){return function(e){function t(i){if(r[i])return r[i].exports;var o=r[i]={exports:{},id:i,loaded:!1};return e[i].call(o.exports,o,o.exports,t),o.loaded=!0,o.exports}var r={};return t.m=e,t.c=r,t.p="",t(0)}([function(e,t,r){"use strict";function i(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(t,"__esModule",{value:!0}),t.default=t.isPseudo=t.vendors=t.elements=t.classes=void 0;var o=r(1),n=i(o),l=r(2),a=i(l),s=r(3),u=i(s),c=r(4),d=i(c);t.classes=n.default,t.elements=a.default,t.vendors=u.default,t.isPseudo=d.default,t.default=d.default},function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=["active","any","checked","default","dir","disabled","empty","enabled","first","first-child","first-of-type","fullscreen","focus","hover","indeterminate","in-range","invalid","lang","last-child","last-of-type","left","link","not","nth-child","nth-last-child","nth-last-of-type","nth-of-type","only-child","only-of-type","optional","out-of-range","read-only","read-write","required","right","root","scope","target","valid","visited"],e.exports=t.default},function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=["after","before","first-letter","first-line","selection","backdrop"],e.exports=t.default},function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=["webkit-media-controls-timeline","-webkit-appearance","-webkit-search-cancel-button","-webkit-search-decoration","-webkit-search-results-decoration","-webkit-search-results-button","-webkit-textfield-decoration-container","-ms-browse","-webkit-file-upload-button","-moz-focus-inner","-webkit-slider-container","-webkit-media-slider-container","-webkit-slider-runnable-track","-webkit-slider-thumb","-webkit-media-slider-thumb","-webkit-color-swatch-wrapper","-webkit-color-swatch","-moz-range-track","-moz-range-progress","-moz-range-thumb","-moz-focus-outer","-ms-fill-lower","-ms-fill-upper","-ms-ticks-before","-ms-ticks-after","-ms-thumb","-ms-track","ms-tooltip","-ms-clear","-webkit-clear-button","-ms-reveal","-ms-value","-moz-placeholder","-ms-input-placeholder","-webkit-input-placeholder","-webkit-keygen-select","-webkit-input-list-button","-webkit-input-speech-button","-webkit-textfield-decoration-container","-webkit-calendar-picker-indicator","-ms-expand","-webkit-details-marker","-webkit-meter","-webkit-meter-horizontal-bar","-webkit-meter-vertical-bar","-webkit-meter-horizontal-optimum-value","-webkit-meter-horizontal-suboptimal-value","-webkit-meter-horizontal-even-less-good-value","-webkit-meter-vertical-optimum-value","-webkit-meter-vertical-suboptimal-value","-webkit-meter-vertical-even-less-good-value","-moz-meter-bar","-moz-meter-optimum","-moz-meter-sub-optimum","-webkit-progress-bar","-webkit-progress-value","-webkit-progress-bar-value","-moz-progress-bar","-ms-fill","-webkit-resizer","window-inactive","-webkit-input-placeholder","-moz-placeholder","-webkit-image-inner-element","-webkit-media-controls-panel","-webkit-media-controls-play-button","-webkit-media-controls-volume-slider-container","-webkit-media-controls-volume-slider","-webkit-media-controls-mute-button","-webkit-media-controls-timeline","-webkit-media-controls-current-time-display","-webkit-full-page-media","-webkit-media-controls-timeline-container","-webkit-media-controls-time-remaining-display","-webkit-media-controls-seek-back-button","-webkit-media-controls-seek-forward-button","-webkit-media-controls-fullscreen-button","-webkit-media-controls-overlay-play-button","-webkit-media-controls-rewind-button","-webkit-media-controls-return-to-realtime-button","-webkit-media-controls-toggle-closed-captions-button","-webkit-scrollbar","-webkit-scrollbar-button","double-button","horizontal","end","decrement","increment","corner-present","start","vertical","window-inactive","-webkit-scrollbar-thumb","-webkit-scrollbar-track","-webkit-scrollbar-track-piece","no-button","single-button","-webkit-textfield-decoration-container"],e.exports=t.default},function(e,t,r){"use strict";function i(e){return e&&e.__esModule?e:{"default":e}}function o(e){if(Array.isArray(e)){for(var t=0,r=Array(e.length);t<e.length;t++)r[t]=e[t];return r}return Array.from(e)}function n(e){if("string"!=typeof e)throw Error("Invalid input type - the selector has to be a string!");return m.some(function(t){return l(e,t)})}function l(e,t){return-1!==e.indexOf(t,e.length-t.length)}Object.defineProperty(t,"__esModule",{value:!0}),t.default=n;var a=r(1),s=i(a),u=r(2),c=i(u),d=r(3),b=i(d),m=[].concat(o(s.default),o(c.default),o(b.default));e.exports=t.default}])});
//# sourceMappingURL=is-pseudo.js.map