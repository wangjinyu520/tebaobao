(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-personalSon-ExpressLogistics"],{"063f":function(t,n,e){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var i={onLoad:function(t){this.getwuliuinfo(t)},data:function(){return{doodsinfo:"",th_number:"",name:"",thNumber:"",phone:""}},methods:{getwuliuinfo:function(t){var n=this;this.$http.getwuliuinfo(t).then(function(t){200==t.status&&(n.doodsinfo=t.data.orgoods,n.th_number=t.data.th_number)})},confirm:function(){var t=this;return""==this.name?(this.$toast("请填写物流公司名称"),!1):""==this.thNumber?(this.$toast("填写物流单号"),!1):11!=this.phone.length?(this.$toast("填写联系电话"),!1):void this.$http.getthfahuo({th_number:this.th_number,ps_name:this.name,ps_num:this.thNumber,telephone:this.phone}).then(function(n){200==n.status&&(t.$toast(n.mess),setTimeout(function(){t.getback()},1e3))})}}};n.default=i},"1f15":function(t,n,e){"use strict";e.r(n);var i=e("2790"),s=e("81c1");for(var a in s)"default"!==a&&function(t){e.d(n,t,function(){return s[t]})}(a);var o,u=e("f0c5"),r=Object(u["a"])(s["default"],i["b"],i["c"],!1,null,"feaf1680",null,!1,i["a"],o);n["default"]=r.exports},2790:function(t,n,e){"use strict";var i,s=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("v-uni-view",{staticClass:"index_class"},[e("v-uni-view",{staticClass:"refun-type"},[e("v-uni-image",{attrs:{src:t.doodsinfo.thumb_url}}),e("v-uni-view",{staticClass:"refun-text"},[e("v-uni-view",{staticStyle:{color:"#333"}},[t._v(t._s(t.doodsinfo.goods_name))]),e("v-uni-text",[t._v(t._s(t.doodsinfo.goods_attr_str))])],1)],1),e("v-uni-view",{staticClass:"lication-list"},[e("v-uni-view",[t._v("物流公司:")]),e("v-uni-input",{staticStyle:{flex:"1","padding-left":"20upx"},attrs:{type:"text",placeholder:"请填写物流公司名称"},model:{value:t.name,callback:function(n){t.name=n},expression:"name"}})],1),e("v-uni-view",{staticClass:"lication-list",staticStyle:{"margin-bottom":"20upx"}},[e("v-uni-view",[t._v("物流单号:")]),e("v-uni-input",{staticStyle:{flex:"1","padding-left":"20upx"},attrs:{type:"text",placeholder:"填写物流单号"},model:{value:t.thNumber,callback:function(n){t.thNumber=n},expression:"thNumber"}})],1),e("v-uni-view",{staticClass:"lication-list"},[e("v-uni-view",[t._v("联系电话:")]),e("v-uni-input",{staticStyle:{flex:"1","padding-left":"20upx"},attrs:{type:"number",placeholder:"填写联系电话"},model:{value:t.phone,callback:function(n){t.phone=n},expression:"phone"}})],1),e("v-uni-view",{staticClass:"person-button",staticStyle:{margin:"0","background-color":"#fff","padding-top":"40upx"}},[e("v-uni-button",{staticClass:"btn",attrs:{type:"warn"},on:{click:function(n){arguments[0]=n=t.$handleEvent(n),t.confirm.apply(void 0,arguments)}}},[t._v("提交")])],1)],1)},a=[];e.d(n,"b",function(){return s}),e.d(n,"c",function(){return a}),e.d(n,"a",function(){return i})},"81c1":function(t,n,e){"use strict";e.r(n);var i=e("063f"),s=e.n(i);for(var a in i)"default"!==a&&function(t){e.d(n,t,function(){return i[t]})}(a);n["default"]=s.a}}]);