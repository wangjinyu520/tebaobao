(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/tabBar/Live"],{"0a4e":function(t,e,n){"use strict";var a,i=function(){var t=this,e=t.$createElement;t._self._c},r=[];n.d(e,"b",function(){return i}),n.d(e,"c",function(){return r}),n.d(e,"a",function(){return a})},"61d4":function(t,e,n){"use strict";n.r(e);var a=n("84cf"),i=n.n(a);for(var r in a)"default"!==r&&function(t){n.d(e,t,function(){return a[t]})}(r);e["default"]=i.a},"6bf3":function(t,e,n){"use strict";var a=n("768d"),i=n.n(a);i.a},"768d":function(t,e,n){},8169:function(t,e,n){"use strict";n.r(e);var a=n("0a4e"),i=n("61d4");for(var r in i)"default"!==r&&function(t){n.d(e,t,function(){return i[t]})}(r);n("6bf3");var o,u=n("f0c5"),s=Object(u["a"])(i["default"],a["b"],a["c"],!1,null,null,null,!1,a["a"],o);e["default"]=s.exports},"84cf":function(t,e,n){"use strict";(function(t,n){function a(t){return o(t)||r(t)||i()}function i(){throw new TypeError("Invalid attempt to spread non-iterable instance")}function r(t){if(Symbol.iterator in Object(t)||"[object Arguments]"===Object.prototype.toString.call(t))return Array.from(t)}function o(t){if(Array.isArray(t)){for(var e=0,n=new Array(t.length);e<t.length;e++)n[e]=t[e];return n}}Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var u=1,s={data:function(){return{adList:[],newcomerList:[],navList:[],list:[],currIndex:0,currType:1,loadingType:0,headerPosition:"fixed"}},onLoad:function(){this.getData()},onPullDownRefresh:function(){this.getData()},methods:{linkTo:function(e){if(!t.getStorageSync("token"))return this.getnav("/pages/loginSon/login"),!1;t.setStorageSync("pullurl",e.addressitem),t.setStorageSync("shopid",e.shop_id),this.getnav("/pages/live/Audience")},getData:function(){var t=this;this.$http.getLiveAd().then(function(e){n("log",e," at pages\\tabBar\\Live.vue:110"),200===e.status&&(t.adList=e.data.data)}),this.$http.getaliveindex({isnewperson:1}).then(function(e){200===e.status&&(t.newcomerList=e.data.data)}),this.$http.getNavList().then(function(e){200===e.status&&(t.navList=e.data)}),this.$http.getaliveindex({typeid:-1,page:1}).then(function(e){n("log",e," at pages\\tabBar\\Live.vue:134"),200===e.status&&(t.list=e.data.data)})},changeTab:function(t,e){var n=this;if(this.currIndex===t)return!1;this.currIndex=t,this.currType=e,this.isMore=!1,u=1,this.$http.getaliveindex({typeid:e,page:1}).then(function(t){200===t.status&&(t.data.data.length<10&&(n.loadingType=2),n.list=t.data.data)})}},onReachBottom:function(){var t=this;if(2===this.loadingType)return!1;this.loadingType=1,this.$http.getaliveindex({typeid:this.currType,page:u+1}).then(function(e){200===e.status?(t.loadingType=0,e.data.data.length||(t.loadingType=2),e.data.data.length<10&&(t.loadingType=2,u+=1),e.data.data.length&&(t.list=[].concat(a(t.list),[e.data.data]),u+=1)):t.loadingType=0}).catch(function(){t.loadingType=0})},onNavigationBarButtonTap:function(t){this.getnav("/pages/live/BroadcastLive")}};e.default=s}).call(this,n("6e42")["default"],n("0de9")["default"])},d0e5:function(t,e,n){"use strict";(function(t){n("fdb5"),n("921b");a(n("66fd"));var e=a(n("8169"));function a(t){return t&&t.__esModule?t:{default:t}}t(e.default)}).call(this,n("6e42")["createPage"])}},[["d0e5","common/runtime","common/vendor"]]]);