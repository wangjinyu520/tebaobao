(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-homeSon-orderDetails"],{"0dd2":function(t,e,n){"use strict";var o=n("288e");Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,n("a481");var i=o(n("e814"));n("6b54");var r=function(){return[1,2,3,4,5,6,7,8,9,"",0]},a={data:function(){return{items:[0,1,2,3,4,5],keys:r(),password:[]}},props:{valShow:{type:Boolean,default:!1}},watch:{valShow:function(t){console.log(t)}},methods:{backHandle:function(){this.clearPasswordHandle(),this.$emit("backHied")},keyUpHandle:function(t){var e=t.currentTarget.dataset.number.toString();console.log(t);var n=this.password.length;!e||n>=6||(this.password.push(e),this.ajaxData())},delHandle:function(){if(this.password.length<=0)return!1;this.password.shift()},ajaxData:function(){if(this.password.length>=6){var t={cord:(0,i.default)(this.password.join(" ").replace(/\s/g,"")),backHied:!1};this.clearPasswordHandle(),this.$emit("cord_info",t)}return!1},clearPasswordHandle:function(){this.password=[]}}};e.default=a},"148c":function(t,e,n){"use strict";n.r(e);var o=n("489f"),i=n("bc1e");for(var r in i)"default"!==r&&function(t){n.d(e,t,function(){return i[t]})}(r);n("5c5c");var a,s=n("f0c5"),c=Object(s["a"])(i["default"],o["b"],o["c"],!1,null,"6f5ffae0",null,!1,o["a"],a);e["default"]=c.exports},2719:function(t,e,n){"use strict";n.r(e);var o=n("c7f9"),i=n.n(o);for(var r in o)"default"!==r&&function(t){n.d(e,t,function(){return o[t]})}(r);e["default"]=i.a},3970:function(t,e,n){"use strict";var o,i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-uni-view",{staticClass:"index_class"},[n("v-uni-view",{staticClass:"order-deta"},[n("v-uni-view",{staticClass:"order-info-time"},[n("v-uni-view",[n("v-uni-view",[t._v(t._s(t.orderInfo.order_zt))]),1==t.orderInfo.filter?n("v-uni-view",[t._v("剩余"+t._s(t.orderInfo.sytime)+"关闭")]):t._e(),3==t.orderInfo.filter?n("v-uni-view",[t._v("剩余"+t._s(t.orderInfo.sysh_time)+"自动收货")]):t._e()],1),n("v-uni-image",{attrs:{src:"../../static/images/img/addr-bao.png"}})],1),3==t.orderInfo.filter?n("v-uni-view",{staticClass:"phone ",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.getnav("/pages/personalSon/logistics")}}},[n("v-uni-view",{staticStyle:{width:"20%",display:"flex","justify-content":"center"}},[n("i",{staticClass:"iconfont icon_e65e icon-bgc"})]),n("v-uni-view",{staticClass:"tap_address "},[n("v-uni-view",{staticClass:"addrin"},[t._v("订单已发货"+t._s(t.orderInfo.wulius.log_name)+"，订单编号"+t._s(t.orderInfo.wulius.psnum)+"，联系电话"+t._s(t.orderInfo.wulius.telephone))]),n("v-uni-text",{staticStyle:{color:"#ccc"}},[t._v(t._s(t.orderInfo.fh_time))])],1),n("i",{staticClass:"iconfont icon_e60c",staticStyle:{width:"7%","font-size":"40upx",color:"#ccc"}})],1):t._e(),n("v-uni-view",{staticClass:"phone"},[n("v-uni-view",{staticStyle:{width:"20%",display:"flex","justify-content":"center"}},[n("i",{staticClass:"iconfont icon_e712 icon-bgc"})]),n("v-uni-view",{staticClass:"tap_address"},[n("v-uni-view",[t._v(t._s(t.orderInfo.contacts)),n("v-uni-text",{staticStyle:{"padding-left":"30upx"}},[t._v(t._s(t.orderInfo.telephone))])],1),n("v-uni-text",[t._v(t._s(t.orderInfo.province+t.orderInfo.city+t.orderInfo.area+t.orderInfo.address))])],1)],1),n("v-uni-view",{staticClass:"fresh_list"},[n("v-uni-view",{staticClass:"order_bottom"},[n("v-uni-view",{staticClass:"bottom_top",on:{click:function(e){e.stopPropagation(),arguments[0]=e=t.$handleEvent(e),t.getnav("/pages/homeSon/storeDetails?shop_id="+t.orderInfo.shop_id)}}},[n("v-uni-view",[n("i",{staticClass:"iconfont cart_e61d"}),t._v(t._s(t.orderInfo.shop_name))]),n("i",{staticClass:"iconfont order_all_right"})],1),t._l(t.orderInfo.goodsinfo,function(e,o){return n("v-uni-view",{key:o,staticClass:"bottom_img",on:{click:function(n){n.stopPropagation(),arguments[0]=n=t.$handleEvent(n),t.getnav("/pages/homeSon/shop_details?id="+e.goods_id)}}},[n("v-uni-image",{attrs:{src:e.thumb_url}}),n("v-uni-view",{staticStyle:{padding:"0 40upx 0 20upx",flex:"1"}},[n("v-uni-view",{staticClass:"introduce"},[t._v(t._s(e.goods_name))]),n("v-uni-view",{staticClass:"arrt-str"},[t._v(t._s(e.goods_attr_str))])],1),n("v-uni-view",{staticStyle:{"font-size":"24upx","text-align":"right"}},[t._v("¥"+t._s(e.real_price)),n("v-uni-view",{staticStyle:{"text-align":"right",color:"#999"}},[t._v("x"+t._s(e.goods_num))]),2==t.orderInfo.filter||3==t.orderInfo.filter?n("v-uni-view",{staticClass:"shou_sure"},[1===t.orderInfo.pinzhuangtai?n("v-uni-view",[n("span",{on:{click:function(e){e.stopPropagation(),arguments[0]=e=t.$handleEvent(e),t.exchange(t.orderInfo.ordernumber)}}},[t._v("退款")])]):t._e(),1!==t.orderInfo.pinzhuangtai?n("v-uni-view",[0==e.th_status||8==e.th_status?n("v-uni-view",[1==t.orderInfo.fh_status?n("v-uni-view",[n("span",{on:{click:function(n){n.stopPropagation(),arguments[0]=n=t.$handleEvent(n),t.getnav("/pages/personalSon/Refundtype?order_num="+t.orderInfo.ordernumber+"&orgoods_id="+e.id)}}},[t._v("退换")])]):t._e()],1):0!=e.th_status?n("v-uni-view",[n("span",{on:{click:function(n){n.stopPropagation(),arguments[0]=n=t.$handleEvent(n),t.getnav("/pages/personalSon/RefundDatecopy?order_num="+t.orderInfo.ordernumber+"&orgoods_id="+e.id)}}},[1==e.th_status||2==e.th_status?n("v-uni-text",[t._v("退款中")]):3==e.th_status?n("v-uni-text",[t._v("商家拒绝申请")]):4==e.th_status?n("v-uni-text",[t._v("退款完成")]):5==e.th_status||6==e.th_status?n("v-uni-text",[t._v("换货中")]):7==e.th_status?n("v-uni-text",[t._v("商家拒绝申请")]):t._e()],1)]):t._e()],1):t._e()],1):t._e()],1)],1)})],2),n("v-uni-view",{staticClass:"or_number"},[1==t.orderInfo.filter?n("v-uni-view",{staticClass:"number_sure"},[n("span",{on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.cancellation.apply(void 0,arguments)}}},[t._v("取消订单")]),n("span",{staticClass:"payment_order",on:{click:function(e){e.stopPropagation(),arguments[0]=e=t.$handleEvent(e),t.hidePopup.apply(void 0,arguments)}}},[t._v("付款")])]):t._e()],1)],1),n("v-uni-view",{staticClass:"order_list"},[n("v-uni-view",[n("v-uni-text",[t._v("商品总价")]),n("v-uni-text",{staticClass:"color"},[t._v("¥ "+t._s(t.orderInfo.goods_price))])],1),n("v-uni-view",[n("v-uni-text",[t._v("运费（快递）")]),n("v-uni-text",{staticClass:"color"},[t._v("¥ "+t._s(t.orderInfo.freight))])],1),n("v-uni-view",[n("v-uni-text",[t._v("店铺优惠")]),n("v-uni-text",{staticClass:"color"},[t._v("-¥ "+t._s(t.orderInfo.youhui_price))])],1),n("v-uni-view",{staticClass:"order-name"},[n("v-uni-text",[t._v("订单总价")]),n("v-uni-text",{staticClass:"color"},[t._v("¥ "+t._s(t.orderInfo.total_price))])],1)],1),n("v-uni-view",{staticClass:"order_list order-list-info",staticStyle:{margin:"20upx 0 60upx 0"}},[n("v-uni-view",[n("v-uni-text",[t._v("订单编号:")]),n("v-uni-text",{staticClass:"color"},[t._v(t._s(t.orderInfo.ordernumber))])],1),n("v-uni-view",[n("v-uni-text",[t._v("交易编号:")]),n("v-uni-text",{staticClass:"color"},[t._v(t._s(t.orderInfo.order_number))])],1),n("v-uni-view",[n("v-uni-text",[t._v("创建时间")]),n("v-uni-text",{staticClass:"color"},[t._v(t._s(t.orderInfo.addtime))])],1),2==t.orderInfo.filter||3==t.orderInfo.filter||4==t.orderInfo.filter?n("v-uni-view",[n("v-uni-text",[t._v("付款时间")]),n("v-uni-text",{staticClass:"color"},[t._v(t._s(t.orderInfo.pay_time))])],1):t._e(),3==t.orderInfo.filter||4==t.orderInfo.filter?n("v-uni-view",[n("v-uni-text",[t._v("发货时间")]),n("v-uni-text",{staticClass:"color"},[t._v(t._s(t.orderInfo.fh_time))])],1):t._e(),4==t.orderInfo.filter?n("v-uni-view",[n("v-uni-text",[t._v("收货时间")]),n("v-uni-text",{staticClass:"color"},[t._v(t._s(t.orderInfo.coll_time))])],1):t._e()],1),n("popup-layer",{ref:"popupRef",attrs:{direction:"top"}},[n("v-uni-view",{staticClass:"pay-list",attrs:{"hover-class":"click-active-bgc"},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.getpay(2)}}},[n("v-uni-image",{attrs:{src:"../../static/images/img/wx.png"}}),n("v-uni-text",[t._v("微信支付")])],1),n("v-uni-view",{staticClass:"pay-list",attrs:{"hover-class":"click-active-bgc"},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.getpay(1)}}},[n("v-uni-image",{attrs:{src:"../../static/images/img/zifubao.jpg"}}),n("v-uni-text",[t._v("支付宝支付")])],1),n("v-uni-view",{staticClass:"pay-list",attrs:{"hover-class":"click-active-bgc"},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.getpay(3)}}},[n("v-uni-image",{attrs:{src:"../../static/images/img/yue.png"}}),n("v-uni-text",[t._v("余额支付")])],1)],1),n("txpwd",{attrs:{valShow:t.valShow},on:{cord_info:function(e){arguments[0]=e=t.$handleEvent(e),t.codeShow.apply(void 0,arguments)},backHied:function(e){arguments[0]=e=t.$handleEvent(e),t.hideAl.apply(void 0,arguments)}}})],1)],1)},r=[];n.d(e,"b",function(){return i}),n.d(e,"c",function(){return r}),n.d(e,"a",function(){return o})},"3b8d":function(t,e,n){"use strict";n.r(e),n.d(e,"default",function(){return a});var o=n("795b"),i=n.n(o);function r(t,e,n,o,r,a,s){try{var c=t[a](s),l=c.value}catch(u){return void n(u)}c.done?e(l):i.a.resolve(l).then(o,r)}function a(t){return function(){var e=this,n=arguments;return new i.a(function(o,i){var a=t.apply(e,n);function s(t){r(a,o,i,s,c,"next",t)}function c(t){r(a,o,i,s,c,"throw",t)}s(void 0)})}}},"489f":function(t,e,n){"use strict";var o,i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{directives:[{name:"show",rawName:"v-show",value:t.valShow,expression:"valShow"}],staticClass:"pay-tool"},[n("div",{staticClass:"mask"}),n("div",{staticClass:"pay_banner"},[n("div",{staticClass:"pay-tool-title border-bottom"},[n("span",{staticClass:"iconfont icon_e617",on:{click:function(e){e.stopPropagation(),arguments[0]=e=t.$handleEvent(e),t.backHandle.apply(void 0,arguments)}}}),n("strong",[t._v("请输入交易密码")])]),n("div",{staticClass:"pay-tool-content"},[n("div",{staticClass:"pay-tool-inputs"},t._l(t.items,function(e,o){return n("div",{key:o,staticClass:"item"},[t.password[e]?n("span",{staticClass:"icon_dot iconfont icon_e7a5"}):t._e()])}),0),n("div",{staticClass:"pay-tool-link",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.getnav("/pages/personalSon/resetpaypwd")}}},[t._v("忘记密码？")])]),n("div",{staticClass:"pay-tool-keyboard"},[n("ul",{staticStyle:{padding:"0"}},[t._l(t.keys,function(e,o){return n("li",{key:o,attrs:{"data-number":e},on:{click:function(e){e.stopPropagation(),arguments[0]=e=t.$handleEvent(e),t.keyUpHandle(e)}}},[t._v(t._s(e))])}),n("li",{staticClass:"del",staticStyle:{"border-radius":"0"},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.delHandle.apply(void 0,arguments)}}},[n("span",{staticClass:"icon-del iconfont icon_e675"})])],2)])])])},r=[];n.d(e,"b",function(){return i}),n.d(e,"c",function(){return r}),n.d(e,"a",function(){return o})},"4b7e":function(t,e,n){"use strict";n.r(e);var o=n("9ddb"),i=n.n(o);for(var r in o)"default"!==r&&function(t){n.d(e,t,function(){return o[t]})}(r);e["default"]=i.a},"59ce":function(t,e,n){e=t.exports=n("2350")(!1),e.push([t.i,"ul li[data-v-6f5ffae0]{list-style-type:none;margin:0;padding:0;box-sizing:border-box}.pay_banner[data-v-6f5ffae0]{position:fixed;height:17rem;bottom:0;width:100%;background-color:#fff;z-index:99999}.mask[data-v-6f5ffae0]{height:100vh;width:100%;position:fixed;top:0;left:0;background-color:rgba(0,0,0,.5);z-index:999}.pay-tool[data-v-6f5ffae0]{position:relative}.pay-tool-title[data-v-6f5ffae0]{width:100%;height:2.08888888rem;padding:0 .8rem;line-height:2.08888888rem;text-align:center;overflow:hidden}.pay-tool-title .icon[data-v-6f5ffae0]{float:left;margin-top:.72222222rem}.pay-tool-title strong[data-v-6f5ffae0]{font-size:.8rem}.pay-tool-content .pay-tool-inputs[data-v-6f5ffae0]{width:14.46666666rem;height:2.31111111rem;margin:1.28888888rem auto 0;border:1px solid #b9b9b9;border-radius:.26666666rem;box-shadow:0 0 1px #e6e6e6;display:-webkit-box;display:-webkit-flex;display:flex;overflow:hidden}.pay-tool-content .pay-tool-inputs .item[data-v-6f5ffae0]{width:16.66666666%;height:2.31111111rem;border-right:1px solid #b9b9b9;line-height:2.31111111rem;text-align:center}.pay-tool-content .pay-tool-inputs .item[data-v-6f5ffae0]:last-child{border-right:none}.pay-tool-content .pay-tool-inputs .item .icon_dot[data-v-6f5ffae0]{display:inline-block;width:.51111111rem;height:.51111111rem}.pay-tool-content .pay-tool-link[data-v-6f5ffae0]{padding:.53333333rem .8rem 0;text-align:right}.pay-tool-content .pay-tool-link .link[data-v-6f5ffae0]{font-size:.66666666rem;color:#3c8cfb}.pay-tool .pay-tool-keyboard[data-v-6f5ffae0]{position:absolute;left:0;bottom:0;width:100%}.pay-tool .pay-tool-keyboard ul[data-v-6f5ffae0]{width:100%;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-flex-wrap:wrap;flex-wrap:wrap}.pay-tool .pay-tool-keyboard ul li[data-v-6f5ffae0]{width:33.3333%;height:2.25442834rem;line-height:2.25442834rem;text-align:center;border-right:1px solid #aeaeae;border-bottom:1px solid #aeaeae;font-size:.8rem;font-weight:700}.pay-tool .pay-tool-keyboard ul li[data-v-6f5ffae0]:first-child,.pay-tool .pay-tool-keyboard ul li[data-v-6f5ffae0]:nth-child(2),.pay-tool .pay-tool-keyboard ul li[data-v-6f5ffae0]:nth-child(3){border-top:1px solid #eee}.pay-tool .pay-tool-keyboard ul li[data-v-6f5ffae0]:nth-child(3),.pay-tool .pay-tool-keyboard ul li[data-v-6f5ffae0]:nth-child(6),.pay-tool .pay-tool-keyboard ul li[data-v-6f5ffae0]:nth-child(9),.pay-tool .pay-tool-keyboard ul li[data-v-6f5ffae0]:nth-child(12){border-right:none}.pay-tool .pay-tool-keyboard ul li[data-v-6f5ffae0]:nth-child(10),.pay-tool .pay-tool-keyboard ul li[data-v-6f5ffae0]:nth-child(11),.pay-tool .pay-tool-keyboard ul li[data-v-6f5ffae0]:nth-child(12){border-bottom:none}.pay-tool .pay-tool-keyboard ul li[data-v-6f5ffae0]:active,.pay-tool .pay-tool-keyboard ul li[data-v-6f5ffae0]:nth-child(10),.pay-tool .pay-tool-keyboard ul li[data-v-6f5ffae0]:nth-child(12){background-color:#d1d4dd}.pay-tool .pay-tool-keyboard ul li[data-v-6f5ffae0]:nth-child(12):active{background-color:#fff}.icon_e617[data-v-6f5ffae0]{font-size:18px;position:absolute;left:10px;top:10px}",""])},"5c5c":function(t,e,n){"use strict";var o=n("7778"),i=n.n(o);i.a},"6fd9":function(t,e,n){e=t.exports=n("2350")(!1),e.push([t.i,".uni-mask[data-v-e98189f4]{height:100vh;position:fixed;z-index:9998;top:0;right:0;bottom:0;left:0;background-color:rgba(0,0,0,.3)}.uni-popup[data-v-e98189f4]{position:absolute;z-index:9999;background-color:initial;box-shadow:0 0 %?30?% rgba(0,0,0,.1)}.uni-popup-bottom[data-v-e98189f4]{background-color:#fff;position:fixed;left:0;bottom:0;width:100%;text-align:center}",""])},7778:function(t,e,n){var o=n("59ce");"string"===typeof o&&(o=[[t.i,o,""]]),o.locals&&(t.exports=o.locals);var i=n("4f06").default;i("00f2511e",o,!0,{sourceMap:!1,shadowMode:!1})},"83d4":function(t,e,n){var o=n("fd37");"string"===typeof o&&(o=[[t.i,o,""]]),o.locals&&(t.exports=o.locals);var i=n("4f06").default;i("69724b30",o,!0,{sourceMap:!1,shadowMode:!1})},"96cf":function(t,e){!function(e){"use strict";var n,o=Object.prototype,i=o.hasOwnProperty,r="function"===typeof Symbol?Symbol:{},a=r.iterator||"@@iterator",s=r.asyncIterator||"@@asyncIterator",c=r.toStringTag||"@@toStringTag",l="object"===typeof t,u=e.regeneratorRuntime;if(u)l&&(t.exports=u);else{u=e.regeneratorRuntime=l?t.exports:{},u.wrap=m;var f="suspendedStart",d="suspendedYield",v="executing",p="completed",h={},y={};y[a]=function(){return this};var g=Object.getPrototypeOf,w=g&&g(g(z([])));w&&w!==o&&i.call(w,a)&&(y=w);var _=C.prototype=x.prototype=Object.create(y);k.prototype=_.constructor=C,C.constructor=k,C[c]=k.displayName="GeneratorFunction",u.isGeneratorFunction=function(t){var e="function"===typeof t&&t.constructor;return!!e&&(e===k||"GeneratorFunction"===(e.displayName||e.name))},u.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,C):(t.__proto__=C,c in t||(t[c]="GeneratorFunction")),t.prototype=Object.create(_),t},u.awrap=function(t){return{__await:t}},I(S.prototype),S.prototype[s]=function(){return this},u.AsyncIterator=S,u.async=function(t,e,n,o){var i=new S(m(t,e,n,o));return u.isGeneratorFunction(e)?i:i.next().then(function(t){return t.done?t.value:i.next()})},I(_),_[c]="Generator",_[a]=function(){return this},_.toString=function(){return"[object Generator]"},u.keys=function(t){var e=[];for(var n in t)e.push(n);return e.reverse(),function n(){while(e.length){var o=e.pop();if(o in t)return n.value=o,n.done=!1,n}return n.done=!0,n}},u.values=z,j.prototype={constructor:j,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=n,this.done=!1,this.delegate=null,this.method="next",this.arg=n,this.tryEntries.forEach(P),!t)for(var e in this)"t"===e.charAt(0)&&i.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=n)},stop:function(){this.done=!0;var t=this.tryEntries[0],e=t.completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function o(o,i){return s.type="throw",s.arg=t,e.next=o,i&&(e.method="next",e.arg=n),!!i}for(var r=this.tryEntries.length-1;r>=0;--r){var a=this.tryEntries[r],s=a.completion;if("root"===a.tryLoc)return o("end");if(a.tryLoc<=this.prev){var c=i.call(a,"catchLoc"),l=i.call(a,"finallyLoc");if(c&&l){if(this.prev<a.catchLoc)return o(a.catchLoc,!0);if(this.prev<a.finallyLoc)return o(a.finallyLoc)}else if(c){if(this.prev<a.catchLoc)return o(a.catchLoc,!0)}else{if(!l)throw new Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return o(a.finallyLoc)}}}},abrupt:function(t,e){for(var n=this.tryEntries.length-1;n>=0;--n){var o=this.tryEntries[n];if(o.tryLoc<=this.prev&&i.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var r=o;break}}r&&("break"===t||"continue"===t)&&r.tryLoc<=e&&e<=r.finallyLoc&&(r=null);var a=r?r.completion:{};return a.type=t,a.arg=e,r?(this.method="next",this.next=r.finallyLoc,h):this.complete(a)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),h},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.finallyLoc===t)return this.complete(n.completion,n.afterLoc),P(n),h}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.tryLoc===t){var o=n.completion;if("throw"===o.type){var i=o.arg;P(n)}return i}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,o){return this.delegate={iterator:z(t),resultName:e,nextLoc:o},"next"===this.method&&(this.arg=n),h}}}function m(t,e,n,o){var i=e&&e.prototype instanceof x?e:x,r=Object.create(i.prototype),a=new j(o||[]);return r._invoke=$(t,n,a),r}function b(t,e,n){try{return{type:"normal",arg:t.call(e,n)}}catch(o){return{type:"throw",arg:o}}}function x(){}function k(){}function C(){}function I(t){["next","throw","return"].forEach(function(e){t[e]=function(t){return this._invoke(e,t)}})}function S(t){function e(n,o,r,a){var s=b(t[n],t,o);if("throw"!==s.type){var c=s.arg,l=c.value;return l&&"object"===typeof l&&i.call(l,"__await")?Promise.resolve(l.__await).then(function(t){e("next",t,r,a)},function(t){e("throw",t,r,a)}):Promise.resolve(l).then(function(t){c.value=t,r(c)},function(t){return e("throw",t,r,a)})}a(s.arg)}var n;function o(t,o){function i(){return new Promise(function(n,i){e(t,o,n,i)})}return n=n?n.then(i,i):i()}this._invoke=o}function $(t,e,n){var o=f;return function(i,r){if(o===v)throw new Error("Generator is already running");if(o===p){if("throw"===i)throw r;return O()}n.method=i,n.arg=r;while(1){var a=n.delegate;if(a){var s=E(a,n);if(s){if(s===h)continue;return s}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if(o===f)throw o=p,n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);o=v;var c=b(t,e,n);if("normal"===c.type){if(o=n.done?p:d,c.arg===h)continue;return{value:c.arg,done:n.done}}"throw"===c.type&&(o=p,n.method="throw",n.arg=c.arg)}}}function E(t,e){var o=t.iterator[e.method];if(o===n){if(e.delegate=null,"throw"===e.method){if(t.iterator.return&&(e.method="return",e.arg=n,E(t,e),"throw"===e.method))return h;e.method="throw",e.arg=new TypeError("The iterator does not provide a 'throw' method")}return h}var i=b(o,t.iterator,e.arg);if("throw"===i.type)return e.method="throw",e.arg=i.arg,e.delegate=null,h;var r=i.arg;return r?r.done?(e[t.resultName]=r.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=n),e.delegate=null,h):r:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,h)}function L(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function P(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function j(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(L,this),this.reset(!0)}function z(t){if(t){var e=t[a];if(e)return e.call(t);if("function"===typeof t.next)return t;if(!isNaN(t.length)){var o=-1,r=function e(){while(++o<t.length)if(i.call(t,o))return e.value=t[o],e.done=!1,e;return e.value=n,e.done=!0,e};return r.next=r}}return{next:O}}function O(){return{value:n,done:!0}}}(function(){return this||"object"===typeof self&&self}()||Function("return this")())},"9b34":function(t,e,n){"use strict";var o=n("83d4"),i=n.n(o);i.a},"9cab":function(t,e,n){"use strict";n.r(e);var o=n("f023"),i=n("2719");for(var r in i)"default"!==r&&function(t){n.d(e,t,function(){return i[t]})}(r);n("d2b4");var a,s=n("f0c5"),c=Object(s["a"])(i["default"],o["b"],o["c"],!1,null,"e98189f4",null,!1,o["a"],a);e["default"]=c.exports},"9ddb":function(t,e,n){"use strict";var o=n("288e");Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,n("96cf");var i=o(n("3b8d")),r=o(n("f499")),a=o(n("795b")),s=o(n("148c")),c=o(n("9cab")),l="",u=[],f="",d={components:{uniPopup:c.default,txpwd:s.default},onShow:function(){this.getMyorderinfo()},onLoad:function(t){l=t.order_num,f=t.backindex},onBackPress:function(){if(console.log(f),2==f)return uni.switchTab({url:"/pages/tabBar/Cart"}),!0},data:function(){return{orderInfo:{},valShow:!1,valueStatus:0}},watch:{valShow:function(){this.statusMath(this)}},methods:{exchange:function(t){var e=this;console.log(t),this.$Dialog.confirm({message:"确认退款吗？"}).then(function(){e.$loading(),e.$http.exchange({order_num:t}).then(function(t){200===t.status&&e.$toast(t.mess)})})},getbacktel:function(){console.log(f),2==f?uni.switchTab({url:"/pages/tabBar/Cart"}):this.getback()},getMyorderinfo:function(){var t=this;this.$loading(),this.$http.getMyorderinfo({order_num:l}).then(function(e){200==e.status&&(t.orderInfo=e.data)})},cancellation:function(){var t=this;this.$showModal({content:"确认取消订单吗？"}).then(function(e){e.confirm&&(t.$loading(),t.$http.getMyOrderquxiao({order_num:l}).then(function(e){200==e.status&&(t.$toast(e.mess),t.getback())}))})},orderInfoStr:function(t,e){var n=this,o={order_nums:[l],zf_type:t};return new a.default(function(t){n.$http.getzhifuorder(o).then(function(o){200==o.status?n.$http.getzhifu({order_number:o.data.order_number,zf_type:o.data.zf_type,pay_password:e}).then(function(e){console.log((0,r.default)(e),"888888888888"),t(e)}):n.$toast(o.mess)})})},getpay:function(){var t=(0,i.default)(regeneratorRuntime.mark(function t(e){var n,o,i=this;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:if(n="",""!=this.address){t.next=4;break}return this.$toast("请选择收货地址"),t.abrupt("return",!1);case 4:if(o="",1!=e){t.next=12;break}return o=u[0].id,t.next=9,this.orderInfoStr(1);case 9:n=t.sent,t.next=21;break;case 12:if(2!=e){t.next=19;break}return o=u[1].id,t.next=16,this.orderInfoStr(2);case 16:n=t.sent,t.next=21;break;case 19:return this.$http.getpdpaypwd().then(function(t){200==t.status&&(0==t.data.zhifupwd?(i.$toast("请先设置支付密码"),setTimeout(function(){i.getnav("/pages/personalSon/setupZfpwd")},1e3)):(i.$refs.popupRef.close(),i.valShow=!0))}),t.abrupt("return",!1);case 21:uni.requestPayment({provider:o,orderInfo:n.data.wxpayinfos,success:function(t){uni.showToast({title:"感谢您的赞助!"})},fail:function(t){console.log("fail",t),uni.showModal({content:"支付失败,原因为: "+t.errMsg,showCancel:!1})},complete:function(){i.$refs.popupRef.close()}});case 22:case"end":return t.stop()}},t,this)}));function e(e){return t.apply(this,arguments)}return e}(),hidePopup:function(){this.$refs.popupRef.show()},codeShow:function(){var t=(0,i.default)(regeneratorRuntime.mark(function t(e){var n,o=this;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return this.$loading(),t.next=3,this.orderInfoStr(3,e.cord);case 3:n=t.sent,200==n.status?(this.$toast(n.mess),setTimeout(function(){o.getback()},1e3)):this.$toast(n.mess),console.log(n);case 6:case"end":return t.stop()}},t,this)}));function e(e){return t.apply(this,arguments)}return e}(),hideAl:function(t){this.valShow=!1}}};e.default=d},bc1e:function(t,e,n){"use strict";n.r(e);var o=n("0dd2"),i=n.n(o);for(var r in o)"default"!==r&&function(t){n.d(e,t,function(){return o[t]})}(r);e["default"]=i.a},c38b:function(t,e,n){var o=n("6fd9");"string"===typeof o&&(o=[[t.i,o,""]]),o.locals&&(t.exports=o.locals);var i=n("4f06").default;i("51dda45a",o,!0,{sourceMap:!1,shadowMode:!1})},c7f9:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var o={props:{show:{type:Boolean,default:!1},type:{type:String,default:"middle"},msg:{type:String,default:""}},data:function(){var t=0;return t=44,{offsetTop:t}},methods:{hide:function(){this.$emit("hidePopup")}}};e.default=o},d2b4:function(t,e,n){"use strict";var o=n("c38b"),i=n.n(o);i.a},f023:function(t,e,n){"use strict";var o,i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-uni-view",[n("v-uni-view",{directives:[{name:"show",rawName:"v-show",value:t.show,expression:"show"}],staticClass:"uni-mask",style:{top:t.offsetTop+"px"},attrs:{catchtouchmove:"return"},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.hide.apply(void 0,arguments)}}}),n("v-uni-view",{directives:[{name:"show",rawName:"v-show",value:t.show,expression:"show"}],class:["uni-popup","uni-popup-bottom"]},[t._v(t._s(t.msg)),t._t("default")],2)],1)},r=[];n.d(e,"b",function(){return i}),n.d(e,"c",function(){return r}),n.d(e,"a",function(){return o})},f30e:function(t,e,n){"use strict";n.r(e);var o=n("3970"),i=n("4b7e");for(var r in i)"default"!==r&&function(t){n.d(e,t,function(){return i[t]})}(r);n("9b34");var a,s=n("f0c5"),c=Object(s["a"])(i["default"],o["b"],o["c"],!1,null,"3cfe3eda",null,!1,o["a"],a);e["default"]=c.exports},fd37:function(t,e,n){e=t.exports=n("2350")(!1),e.push([t.i,".shou_sure span[data-v-3cfe3eda]{display:block;height:%?40?%;padding:0 %?20?%;line-height:%?40?%;border-radius:%?20?%;border:%?1?% solid #999;color:#999;text-align:center;font-size:%?24?%}.order-list-info>uni-view uni-text[data-v-3cfe3eda]:nth-child(2){display:block;-webkit-box-flex:1;-webkit-flex:1;flex:1;text-align:left}.order-list-info>uni-view uni-text[data-v-3cfe3eda]:first-child{display:block;width:30%;text-align:left}",""])}}]);