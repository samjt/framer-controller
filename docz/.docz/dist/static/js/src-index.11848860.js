(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{"./src/index.mdx":function(e,n,t){"use strict";t.r(n),t.d(n,"default",function(){return f});var o=t("./node_modules/react/index.js"),r=t.n(o),a=t("./node_modules/@mdx-js/tag/dist/index.js"),c=t("./node_modules/docz/dist/index.m.js");function l(e){return(l="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function m(e,n){if(null==e)return{};var t,o,r=function(e,n){if(null==e)return{};var t,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)t=a[o],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)t=a[o],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}function s(e,n){for(var t=0;t<n.length;t++){var o=n[t];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function p(e,n){return!n||"object"!==l(n)&&"function"!==typeof n?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):n}function i(e){return(i=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function u(e,n){return(u=Object.setPrototypeOf||function(e,n){return e.__proto__=n,e})(e,n)}var f=function(e){function n(e){var t;return function(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}(this,n),(t=p(this,i(n).call(this,e))).layout=null,t}var t,o,l;return function(e,n){if("function"!==typeof n&&null!==n)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(n&&n.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),n&&u(e,n)}(n,r.a.Component),t=n,(o=[{key:"render",value:function(){var e=this.props,n=e.components;m(e,["components"]);return r.a.createElement(a.MDXTag,{name:"wrapper",components:n},r.a.createElement(a.MDXTag,{name:"ul",components:n},r.a.createElement(a.MDXTag,{name:"li",components:n,parentName:"ul"},r.a.createElement(c.c,{to:"/createPageControls"},"createPageControls")," - a set of controls for the Page component.")),r.a.createElement(a.MDXTag,{name:"h2",components:n,props:{id:"installation"}},"Installation"),r.a.createElement(a.MDXTag,{name:"ol",components:n},r.a.createElement(a.MDXTag,{name:"li",components:n,parentName:"ol"},"In your Framer X project's Project Folder, run\n",r.a.createElement(a.MDXTag,{name:"inlineCode",components:n,parentName:"li"},"npm install framer-controller"),".")),r.a.createElement(a.MDXTag,{name:"h2",components:n,props:{id:"usage"}},"Usage"),r.a.createElement(a.MDXTag,{name:"ol",components:n},r.a.createElement(a.MDXTag,{name:"li",components:n,parentName:"ol"},"In an Overrides file, import the desired controllers from\n",r.a.createElement(a.MDXTag,{name:"inlineCode",components:n,parentName:"li"},"framer-controller"),"."),r.a.createElement(a.MDXTag,{name:"li",components:n,parentName:"ol"},"Create an instance of your controller."),r.a.createElement(a.MDXTag,{name:"li",components:n,parentName:"ol"},"Assign its properties and methods to components using Overrides.")),r.a.createElement(a.MDXTag,{name:"pre",components:n},r.a.createElement(a.MDXTag,{name:"code",components:n,parentName:"pre",props:{className:"language-jsx"}},"import { Override } from 'framer'\nimport Controller, { FetchController } from 'framer-controller'\n\nconst controller = new FetchController({\n    url: 'https://randomuser.me/api/',\n    parse: (data) => data.results[0],\n})\n\nexport const ImageContainer: Override = () => ({\n    background: controller.data && `url(${controller.data.picture.large})`,\n})\n\nexport const FetchButton: Override = () => ({\n    onClick: controller.refresh,\n})\n")),r.a.createElement(a.MDXTag,{name:"p",components:n},"See each controller's documentation for information on how to use the controller\nand examples."),r.a.createElement(a.MDXTag,{name:"h2",components:n,props:{id:"extension"}},"Extension"),r.a.createElement(a.MDXTag,{name:"p",components:n},"For help creating your own controllers, see the ",r.a.createElement(a.MDXTag,{name:"a",components:n,parentName:"p",props:{href:"/BuildYOurOwn"}},"Build Your Own"),"\nsection."),r.a.createElement(a.MDXTag,{name:"hr",components:n}),r.a.createElement(a.MDXTag,{name:"p",components:n},"Made with \u2728by ",r.a.createElement(a.MDXTag,{name:"a",components:n,parentName:"p",props:{href:"http://twitter.com/steveruizok"}},"@steveruizok")))}}])&&s(t.prototype,o),l&&s(t,l),n}();f.__docgenInfo={description:"",methods:[],displayName:"MDXContent"}}}]);
//# sourceMappingURL=src-index.8f773aea439a3d27acc8.js.map