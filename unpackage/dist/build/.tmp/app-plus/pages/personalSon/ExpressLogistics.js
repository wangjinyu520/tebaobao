(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/personalSon/ExpressLogistics"],{"1f15":function(t,n,e){"use strict";e.r(n);var u=e("8497"),o=e("81c1");for(var i in o)"default"!==i&&function(t){e.d(n,t,function(){return o[t]})}(i);var s,r=e("f0c5"),a=Object(r["a"])(o["default"],u["b"],u["c"],!1,null,null,null,!1,u["a"],s);n["default"]=a.exports},"81c1":function(t,n,e){"use strict";e.r(n);var u=e("c050"),o=e.n(u);for(var i in u)"default"!==i&&function(t){e.d(n,t,function(){return u[t]})}(i);n["default"]=o.a},8497:function(t,n,e){"use strict";var u,o=function(){var t=this,n=t.$createElement;t._self._c},i=[];e.d(n,"b",function(){return o}),e.d(n,"c",function(){return i}),e.d(n,"a",function(){return u})},c050:function(t,n,e){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var u={onLoad:function(t){this.getwuliuinfo(t)},data:function(){return{doodsinfo:"",th_number:"",name:"",thNumber:"",phone:""}},methods:{getwuliuinfo:function(t){var n=this;this.$http.getwuliuinfo(t).then(function(t){200==t.status&&(n.doodsinfo=t.data.orgoods,n.th_number=t.data.th_number)})},confirm:function(){var t=this;return""==this.name?(this.$toast("请填写物流公司名称"),!1):""==this.thNumber?(this.$toast("填写物流单号"),!1):11!=this.phone.length?(this.$toast("填写联系电话"),!1):void this.$http.getthfahuo({th_number:this.th_number,ps_name:this.name,ps_num:this.thNumber,telephone:this.phone}).then(function(n){200==n.status&&(t.$toast(n.mess),setTimeout(function(){t.getback()},1e3))})}}};n.default=u},f8eb:function(t,n,e){"use strict";(function(t){e("fdb5"),e("921b");u(e("66fd"));var n=u(e("1f15"));function u(t){return t&&t.__esModule?t:{default:t}}t(n.default)}).call(this,e("6e42")["createPage"])}},[["f8eb","common/runtime","common/vendor"]]]);