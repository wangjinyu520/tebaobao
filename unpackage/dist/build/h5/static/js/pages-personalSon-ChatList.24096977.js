(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-personalSon-ChatList"],{1118:function(t,e,i){"use strict";var a=i("25e1"),n=i.n(a);n.a},2197:function(t,e,i){"use strict";i.r(e);var a=i("7090"),n=i("66bd2");for(var o in n)"default"!==o&&function(t){i.d(e,t,function(){return n[t]})}(o);i("1118");var s,r=i("f0c5"),d=Object(r["a"])(n["default"],a["b"],a["c"],!1,null,"e5f5f586",null,!1,a["a"],s);e["default"]=d.exports},2333:function(t,e,i){e=t.exports=i("2350")(!1),e.push([t.i,".item[data-v-e5f5f586]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;width:100%;height:%?136?%;padding:0 %?24?%;color:#999;font-size:%?24?%;border-bottom:%?1?% solid #eee}.item .avatar[data-v-e5f5f586]{position:relative;width:%?100?%;height:%?100?%;margin-right:%?24?%;border-radius:%?10?%}.item .avatar span[data-v-e5f5f586]{display:block;position:absolute;top:0;right:0;z-index:1;background:red;color:#fff;font-size:%?20?%;border-radius:50%;padding:.1rem .2rem;-webkit-transform:translate(50%,-50%);transform:translate(50%,-50%)}.item uni-image[data-v-e5f5f586]{width:%?100?%;height:%?100?%;border-radius:%?10?%}.item .item-middle[data-v-e5f5f586]{-webkit-box-flex:1;-webkit-flex:1;flex:1;margin-right:%?20?%;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.item .item-middle uni-view[data-v-e5f5f586]{margin-bottom:%?13?%;font-size:%?30?%;color:#333}.item .item-middle uni-text[data-v-e5f5f586]{white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.no-more[data-v-e5f5f586]{height:%?100?%;line-height:%?100?%;text-align:center;color:#999}",""])},"25e1":function(t,e,i){var a=i("2333");"string"===typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var n=i("4f06").default;n("099d38f7",a,!0,{sourceMap:!1,shadowMode:!1})},"66bd2":function(t,e,i){"use strict";i.r(e);var a=i("91b6"),n=i.n(a);for(var o in a)"default"!==o&&function(t){i.d(e,t,function(){return a[t]})}(o);e["default"]=n.a},7090:function(t,e,i){"use strict";var a,n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-uni-view",{staticClass:"message"},[t._l(t.chatList,function(e,a){return i("v-uni-view",{key:a,staticClass:"item",attrs:{"hover-class":"click-active-bgc"},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.toChat(a)}}},[i("div",{staticClass:"avatar"},[i("v-uni-image",{attrs:{src:e.userAvatar}}),"1"!==e.is_read&&0!=e.msgcount?i("span",[t._v(t._s(e.msgcount))]):t._e()],1),i("v-uni-view",{staticClass:"item-middle"},[i("v-uni-view",[t._v(t._s(e.username))]),i("v-uni-text",[t._v(t._s("img"===e.msgtype?"[图片]":e.msg))])],1),i("v-uni-view",{staticClass:"item-right"},[i("v-uni-text",[t._v(t._s(e.msgtime))])],1)],1)}),t.chatList.length?t._e():i("div",{staticClass:"no-more"},[t._v("没有更多")])],2)},o=[];i.d(e,"b",function(){return n}),i.d(e,"c",function(){return o}),i.d(e,"a",function(){return a})},"91b6":function(t,e,i){"use strict";var a=i("288e");Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n=a(i("f499")),o=i("ae2f"),s={data:function(){return{options:[{text:"删除",style:{backgroundColor:"#fe3c30"}}],pageShow:!1,chatList:[]}},onShow:function(){var t=this;o.sendSocketMessage({data:(0,n.default)({type:"chatlist",data:{fromid:uni.getStorageSync("token")}})}),o.onSocketMessageCallback=function(e){var i=JSON.parse(e.data);"chatlist"===i.type&&(t.chatList=i.data.map(function(e){return e.fromid===uni.getStorageSync("token")?(e.userid=e.toid,e.username=e.to_username,e.userAvatar=e.to_headimgurl):(e.userid=e.fromid,e.username=e.from_username,e.userAvatar=e.from_headimgurl),e.msgtime=t.$utils.fomartTime(e.msgtime),e})),"say"===i.type&&o.sendSocketMessage({data:(0,n.default)({type:"chatlist",data:{fromid:uni.getStorageSync("token")}})})}},onLoad:function(){},methods:{onRemove:function(t){this.$toast("您点击了第".concat(t,"个按钮"))},toChat:function(t){this.getnav("/pages/businessSon/chat?toId=".concat(this.chatList[t].userid))}}};e.default=s}}]);