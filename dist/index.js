!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t(require("prop-types"),require("react"),require("antd"),require("classnames"),require("@feizheng/noop"),require("react-dom"),require("object-assign")):"function"==typeof define&&define.amd?define(["prop-types","react","antd","classnames","@feizheng/noop","react-dom","object-assign"],t):"object"==typeof exports?exports.ReactAntRadioGroup=t(require("prop-types"),require("react"),require("antd"),require("classnames"),require("@feizheng/noop"),require("react-dom"),require("object-assign")):e.ReactAntRadioGroup=t(e["prop-types"],e.react,e.antd,e.classnames,e["@feizheng/noop"],e["react-dom"],e["object-assign"])}(window,(function(e,t,r,n,o,u,i){return function(e){var t={};function r(n){if(t[n])return t[n].exports;var o=t[n]={i:n,l:!1,exports:{}};return e[n].call(o.exports,o,o.exports,r),o.l=!0,o.exports}return r.m=e,r.c=t,r.d=function(e,t,n){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)r.d(n,o,function(t){return e[t]}.bind(null,o));return n},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="",r(r.s=7)}([function(t,r){t.exports=e},function(e,r){e.exports=t},function(e,t){e.exports=r},function(e,t){e.exports=n},function(e,t){e.exports=o},function(e,t){e.exports=u},function(e,t){e.exports=i},function(e,t,r){"use strict";r.r(t);var n=r(1),o=r.n(n),u=(r(5),r(0)),i=r.n(u),a=r(3),c=r.n(a),f=r(4),p=r.n(f),s=(r(6),r(2));function l(e){return(l="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function y(){return(y=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}function b(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},u=Object.keys(e);for(n=0;n<u.length;n++)r=u[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var u=Object.getOwnPropertySymbols(e);for(n=0;n<u.length;n++)r=u[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}function m(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function d(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function v(e,t){return!t||"object"!==l(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function h(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}function g(e){return(g=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function O(e,t){return(O=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var j="react-ant-radio-group",x=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&O(e,t)}(a,e);var t,r,n,u,i=(t=a,function(){var e,r=g(t);if(h()){var n=g(this).constructor;e=Reflect.construct(r,arguments,n)}else e=r.apply(this,arguments);return v(this,e)});function a(){return m(this,a),i.apply(this,arguments)}return r=a,(n=[{key:"render",value:function(){var e=this.props,t=e.className,r=(e.items,e.template,b(e,["className","items","template"]));return o.a.createElement(s.Radio.Group,y({"data-component":j,className:c()(j,t)},r),this.childView)}},{key:"childView",get:function(){var e=this.props,t=e.items,r=e.template;return t.map((function(e,t){return r({item:e,index:t})}))}}])&&d(r.prototype,n),u&&d(r,u),a}(n.Component);x.displayName=j,x.version="2.0.0",x.propTypes={className:i.a.string,value:i.a.any,onChange:i.a.func,items:i.a.array,template:i.a.func},x.defaultProps={items:[],template:function(e){var t=e.item;return o.a.createElement(s.Radio,{key:t.value,value:t.value},t.label)},onChange:p.a};t.default=x}])}));