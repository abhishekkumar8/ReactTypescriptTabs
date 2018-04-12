!function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{configurable:!1,enumerable:!0,get:r})},n.r=function(e){Object.defineProperty(e,"__esModule",{value:!0})},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=7)}([function(e,t){e.exports=React},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(0);t.default=function(e){var t=e.onClick,n=void 0===t?function(){}:t,o=e.tabIndex,a=void 0===o?"":o,c=e.isActive,i=void 0===c?"":c,l=e.iconClassName,s=void 0===l?"":l,u=e.linkClassName,p=void 0===u?"":u;return r.createElement("li",{className:"tab"},r.createElement("a",{className:"tab-link "+p+" "+(i?"active":""),onClick:function(e){e.preventDefault(),n(a)}},p,r.createElement("i",{className:"tab-icon "+s})))}},function(e,t,n){"use strict";var r,o=this&&this.__extends||(r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])},function(e,t){function n(){this.constructor=e}r(e,t),e.prototype=null===t?Object.create(t):(n.prototype=t.prototype,new n)});Object.defineProperty(t,"__esModule",{value:!0});var a=n(0),c=function(e){function t(t,n){var r=e.call(this,t,n)||this;return r.state={activeTabIndex:0},r.handleTabClick=r.handleTabClick.bind(r),r}return o(t,e),t.prototype.handleTabClick=function(e){this.setState({activeTabIndex:e===this.state.activeTabIndex?this.state.activeTabIndex:e})},t.prototype.renderChildrenWithTabsApiAsProps=function(){var e=this;return a.Children.map(this.props.children,function(t,n){return a.cloneElement(t,{onClick:e.handleTabClick,tabIndex:n,isActive:n===e.state.activeTabIndex})})},t.prototype.renderActiveTabContent=function(){if(void 0!==this.state.activeTabIndex){var e=this.props.children,t=this.state.activeTabIndex;if(null!=e){if(e[t])return e[t].props.children}else console.dir("Error! This tab has no children!")}},t.prototype.render=function(){return a.createElement("div",{className:"tabs"},a.createElement("ul",{className:"tabs-nav nav navbar-nav navbar-offices"},this.renderChildrenWithTabsApiAsProps()),a.createElement("div",{className:"tabs-active-content"},this.renderActiveTabContent()))},t}(a.Component);t.default=c},function(e,t,n){"use strict";var r,o=this&&this.__extends||(r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])},function(e,t){function n(){this.constructor=e}r(e,t),e.prototype=null===t?Object.create(t):(n.prototype=t.prototype,new n)});Object.defineProperty(t,"__esModule",{value:!0});var a=n(0),c=n(2),i=n(1),l=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return o(t,e),t.prototype.render=function(){return a.createElement(c.default,null,a.createElement(i.default,{iconClassName:"",linkClassName:"Tab1"},a.createElement("div",{className:"tab-content"},a.createElement("h3",null,"Elastacloud is great"))),a.createElement(i.default,{iconClassName:"",linkClassName:"Tab2"},a.createElement("div",{className:"tab-content"},a.createElement("p",null,a.createElement("a",{href:"https://www.elastacloud.com",target:"_blank"},"Check out Elastacloud the website")))),a.createElement(i.default,{iconClassName:"",linkClassName:"Tab3"},a.createElement("div",{className:"tab-content"},a.createElement("p",null,"Seriously, Elastacloud also have some amazing blog posts"),a.createElement("p",null,a.createElement("a",{href:"http://channels.elastacloud.com",target:"_blank"},"You should check those out too")))))},t}(a.Component);t.default=l},function(e,t,n){"use strict";var r,o=this&&this.__extends||(r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])},function(e,t){function n(){this.constructor=e}r(e,t),e.prototype=null===t?Object.create(t):(n.prototype=t.prototype,new n)});Object.defineProperty(t,"__esModule",{value:!0});var a=n(0),c=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return o(t,e),t.prototype.render=function(){return a.createElement("div",{className:"intro"},a.createElement("h2",null,"Info"),a.createElement("p",null,"Example of tab components using React and TypeScript"),a.createElement("p",null,"Based on JS code from ",a.createElement("a",{href:"https://gist.github.com/diegocasmo/5cd978e9c5695aefca0c6a8a19fa4c69",target:"_blank"},"Diego Castillo"),"  and amended by me to work for TypeScript."))},t}(a.Component);t.default=c},function(e,t,n){"use strict";var r,o=this&&this.__extends||(r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])},function(e,t){function n(){this.constructor=e}r(e,t),e.prototype=null===t?Object.create(t):(n.prototype=t.prototype,new n)});Object.defineProperty(t,"__esModule",{value:!0});var a=n(0),c=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return o(t,e),t.prototype.render=function(){return a.createElement("h1",null,"Simple React TypeScript Tabs")},t}(a.Component);t.default=c},function(e,t){e.exports=ReactDOM},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(0),o=n(6),a=n(5),c=n(4),i=n(3);o.render(r.createElement("div",null,r.createElement(a.default,null),r.createElement(c.default,null)),document.getElementById("greeting")),o.render(r.createElement(i.default,null),document.getElementById("tabGoesHere"))}]);
//# sourceMappingURL=bundle.js.map