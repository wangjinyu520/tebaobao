(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-personalSon-signin"],{"1bba":function(t,e,a){"use strict";var n=a("5361"),i=a.n(n);i.a},"355b":function(t,e,a){"use strict";a.r(e);var n=a("fc7f"),i=a("9f54");for(var s in i)"default"!==s&&function(t){a.d(e,t,function(){return i[t]})}(s);a("5da0");var r,c=a("f0c5"),o=Object(c["a"])(i["default"],n["b"],n["c"],!1,null,"2347ee84",null,!1,n["a"],r);e["default"]=o.exports},5361:function(t,e,a){var n=a("fdae");"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var i=a("4f06").default;i("5d4640f6",n,!0,{sourceMap:!1,shadowMode:!1})},"54eb":function(t,e,a){var n=a("5aa8");"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var i=a("4f06").default;i("a836fba6",n,!0,{sourceMap:!1,shadowMode:!1})},"5aa8":function(t,e,a){e=t.exports=a("2350")(!1),e.push([t.i,".grace-date[data-v-2347ee84]{position:fixed;z-index:10;vertical-align:top;left:0;top:0;width:%?730?%;padding:%?10?%;height:100%;background:#fff}.grace-date-header[data-v-2347ee84]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center}.grace-date-header-btn[data-v-2347ee84]{font-size:%?38?%;line-height:%?88?%;padding:0 20px}.grace-date-header-date[data-v-2347ee84]{line-height:%?88?%;font-size:%?32?%;font-weight:700}.grace-date-week[data-v-2347ee84]{height:auto;width:%?702?%;overflow:hidden;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-flex-wrap:nowrap;flex-wrap:nowrap;margin:0 auto}.grace-date-week uni-view[data-v-2347ee84]{width:%?96?%;height:%?80?%;font-size:%?32?%;line-height:%?80?%;text-align:center;margin:%?2?%}.grace-date-days[data-v-2347ee84]{padding:%?10?% 0;width:%?702?%;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-flex-wrap:wrap;flex-wrap:wrap;margin:0 auto}.grace-date-days .items[data-v-2347ee84]{width:%?96?%;text-align:center;height:%?96?%;line-height:%?96?%;margin:%?2?%;background:#f1f2f3;font-size:%?30?%}.grace-date-days .current[data-v-2347ee84]{background:#00b26a}.grace-date-days .current uni-view[data-v-2347ee84]{color:#fff}.grace-date-day[data-v-2347ee84]{height:%?30?%;line-height:%?30?%;margin-top:%?30?%;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center}.grace-date-nl[data-v-2347ee84]{height:%?22?%;line-height:%?22?%;color:#888;font-size:%?18?%;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center}.grace-date-time-title[data-v-2347ee84]{margin-top:15px;line-height:2em;text-align:center}.grace-date-time[data-v-2347ee84]{width:80%;margin:8px 10%;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-flex-wrap:nowrap;flex-wrap:nowrap}.grace-date-time .timer[data-v-2347ee84]{width:50%;height:40px;border-top:1px solid #f0f0f0;border-bottom:1px solid #f0f0f0}.grace-date-time .timer uni-picker[data-v-2347ee84]{width:100%;height:40px;line-height:40px;text-align:center}.grace-date-time .timer-spliter[data-v-2347ee84]{width:30px;-webkit-flex-shrink:0;flex-shrink:0;text-align:center;line-height:40px;font-size:20px}.grace-date-btn[data-v-2347ee84]{width:80%;margin:0 10%;margin-top:20px;text-align:center;line-height:46px}",""])},"5da0":function(t,e,a){"use strict";var n=a("54eb"),i=a.n(n);i.a},"9f54":function(t,e,a){"use strict";a.r(e);var n=a("f6a5"),i=a.n(n);for(var s in n)"default"!==s&&function(t){a.d(e,t,function(){return n[t]})}(s);e["default"]=i.a},ac95:function(t,e,a){"use strict";a.r(e);var n=a("c5f3"),i=a.n(n);for(var s in n)"default"!==s&&function(t){a.d(e,t,function(){return n[t]})}(s);e["default"]=i.a},bb23:function(t,e,a){"use strict";a.r(e);var n=a("c6b4"),i=a("ac95");for(var s in i)"default"!==s&&function(t){a.d(e,t,function(){return i[t]})}(s);a("1bba");var r,c=a("f0c5"),o=Object(c["a"])(i["default"],n["b"],n["c"],!1,null,"66d97e44",null,!1,n["a"],r);e["default"]=o.exports},c5f3:function(t,e,a){"use strict";var n=a("288e");Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,a("28a5");var i=n(a("355b")),s={data:function(){return{height:"",show1:!0,data:"",signInfo:{},valueStatus:0}},components:{graceDate:i.default},methods:{changeDate1:function(t,e,a){var n=this;if(console.log(e,9999),void 0==e)return!1;this.data=e;t.split("-"),e.split("-");t==e&&this.$showModal({content:"签到成功+5积分"}).then(function(t){if(t.confirm){var e=n.data.split("-"),a={type:0,date:e[e.length-1]};n.dosign(a)}})},typesignin:function(){var t={type:1};this.dosign(t)},getSignInfo:function(){var t=this;this.$http.getSignInfo().then(function(e){200===e.status&&(console.log(e.data,99),t.signInfo=e.data,t.statusMath(t))})},dosign:function(t){var e=this;this.$http.getdosign(t).then(function(t){200==t.status&&(e.$toast(t.mess),e.getSignInfo())})}},onShow:function(){this.getSignInfo()},created:function(){}};e.default=s},c6b4:function(t,e,a){"use strict";var n,i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-uni-view",{staticClass:"index_class"},[a("v-uni-view",{staticClass:"signin"},[a("div",{staticClass:"signin_top"},[a("v-uni-view",{staticClass:"top_btn"},[a("i",{}),t._v(t._s(t.signInfo.today?"今日已签到":"今日未签到"))]),a("span",[t._v("已连续签到"+t._s(t.signInfo.continuous)+"天，总签到"+t._s(t.signInfo.total)+"天")])],1),a("div",{staticClass:"sing_date",style:"height:"+t.height},[a("div",{staticClass:"sing_mask"},[a("graceDate",{attrs:{show:t.show1,isTime:!1,sing_arr:t.signInfo.sign_list},on:{changeDate:function(e){arguments[0]=e=t.$handleEvent(e),t.changeDate1.apply(void 0,arguments)}}}),a("v-uni-view",{staticClass:"tsp"},[a("span"),a("v-uni-text",{attrs:{href:"javascript:;"},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.getnav("/pages/personalSon/record")}}},[t._v("签到记录")])],1)],1)]),a("div",{staticClass:"steps"},[a("div",{staticClass:"ad_til"},[t._v("连续签到有礼")]),a("div",{staticClass:"ad_pil"},[t._v("每日签到领金币")]),a("div",{staticClass:"date_step al"},t._l(t.signInfo.guize,function(e,n){return a("div",{key:n,on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.typesignin.apply(void 0,arguments)}}},[a("span",[a("i",{staticClass:"iconfont icon_e7c3"})]),a("span",[t._v(t._s(e.today)+"天")]),a("div",{staticClass:"date_title"},[t._v("领取"),a("br"),t._v(t._s(e.num)+"积分")])])}),0)])])],1)},s=[];a.d(e,"b",function(){return i}),a.d(e,"c",function(){return s}),a.d(e,"a",function(){return n})},f6a5:function(t,e,a){"use strict";var n=a("288e");Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,a("28a5"),a("c5f6");var i,s,r,c=n(a("e814")),o=new Array(100),u=new Array(12),d="一二三四五六七八九十";function l(t,e){return t>>e&1}function h(){var t,e,a,n;r=3!=arguments.length?new Date:new Date(arguments[0],arguments[1],arguments[2]);var c=!1,d=r.getYear();for(d<1900&&(d+=1900),t=365*(d-1921)+Math.floor((d-1921)/4)+u[r.getMonth()]+r.getDate()-38,r.getYear()%4==0&&r.getMonth()>1&&t++,e=0;;e++){for(n=o[e]<4095?11:12,a=n;a>=0;a--){if(t<=29+l(o[e],a)){c=!0;break}t=t-29-l(o[e],a)}if(c)break}1921+e,i=n-a+1,s=t,12==n&&(i==Math.floor(o[e]/65536)+1&&(i=1-i),i>Math.floor(o[e]/65536)+1&&i--)}function f(){var t="";return t+=s<11?"初":s<20?"十":s<30?"廿":"三十",s%10==0&&10!=s||(t+=d.charAt((s-1)%10)),t}function v(t,e,a){return t<1921||t>2020?"":(e=(0,c.default)(e)>0?e-1:11,h(t,e,a),f())}o=new Array(2635,333387,1701,1748,267701,694,2391,133423,1175,396438,3402,3749,331177,1453,694,201326,2350,465197,3221,3402,400202,2901,1386,267611,605,2349,137515,2709,464533,1738,2901,330421,1242,2651,199255,1323,529706,3733,1706,398762,2741,1206,267438,2647,1318,204070,3477,461653,1386,2413,330077,1197,2637,268877,3365,531109,2900,2922,398042,2395,1179,267415,2635,661067,1701,1748,398772,2742,2391,330031,1175,1611,200010,3749,527717,1452,2742,332397,2350,3222,268949,3402,3493,133973,1386,464219,605,2349,334123,2709,2890,267946,2773,592565,1210,2651,395863,1323,2707,265877),u[0]=0,u[1]=31,u[2]=59,u[3]=90,u[4]=120,u[5]=151,u[6]=181,u[7]=212,u[8]=243,u[9]=273,u[10]=304,u[11]=334;var g={name:"graceCountd",props:{show:{type:Boolean,default:!1},currentHour:{type:Number,default:0},currenMinute:{type:Number,default:0},isTime:{type:Boolean,default:!0},sing_arr:{type:Array,default:function(){return[]}}},data:function(){return{weeks:["一","二","三","四","五","六","日"],cYear:2016,cMonth:6,days:[],currentDay:"2016",hours:[],minutes:[],currentHourD:0,currenMinuteD:0,valueStatus:0}},computed:{},methods:{gracClick:function(t,e){t&&!e&&(console.log(t),this.chooseDate(t))},isSing:function(){for(var t=0;t<this.sing_arr.length;t++)for(var e=0;e<this.days.length;e++)this.sing_arr[t]==this.cYear+"-"+this.cMonth+"-"+this.days[e].date&&(this.days[e].isselect=!0);this.statusMath(this)},hourChange:function(t){var e=t.detail.value;this.currentHourD=e},minuteChange:function(t){var e=t.detail.value;this.currenMinuteD=e},getDaysInOneMonth:function(t,e){var a=new Date;return a.setFullYear(t),a.setMonth(e),a.setDate(0),a.getDate()},getDay:function(t,e,a){var n=new Date;return n.setFullYear(t),n.setMonth(e),n.setDate(a),n.getDay()},prevMonth:function(){var t=this.cMonth-1,e=this.cYear;t<1&&(t=12,e-=1),this.changeMonth(e,t),this.isSing()},nextMonth:function(){var t=this.cMonth+1,e=this.cYear;t>12&&(t=1,e+=1),this.changeMonth(e,t),this.isSing()},changeMonth:function(t,e){for(var a=[],n=this.getDaysInOneMonth(t,e),i=this.getDay(t,e-1,0),s=0,r=0-i;r<n;r++)r>=0?(a[s]={date:r+1,nl:""},a[s].nl=v(t,e,r+1)):a[s]="",s++;this.days=a,this.cYear=t,this.cMonth=e},chooseDate:function(t){console.log(this.currentDay);var e=this.currentDay.split("-"),a=e[0]+"-"+this.cMonth+"-"+t;this.$emit("changeDate",this.currentDay,a,this.days)},submit:function(){var t=this.currentDay.split("-");t[1]<10&&(t[1]="0"+t[1]),t[2]<10&&(t[2]="0"+t[2]),this.$emit("changeDate",t[0]+"-"+t[1]+"-"+t[2]+" "+this.hours[this.currentHourD]+":"+this.minutes[this.currenMinuteD])}},created:function(){var t=new Date,e=t.getFullYear(),a=t.getMonth()+1,n=e+"-"+a+"-"+t.getDate();this.cYear=e,this.cMonth=a,this.currentDay=n,this.changeMonth(e,a);for(var i=0;i<=23;i++){var s=i<10?"0"+i:i+"";this.hours.push(s)}for(i=0;i<=59;i++){var r=i<10?"0"+i:i+"";this.minutes.push(r)}this.currentHourD=this.currentHour,this.currenMinuteD=this.currenMinute,this.isSing()},watch:{sing_arr:function(t){this.sing_arr=t,this.isSing(),console.log(this.sing_arr,456)}}};e.default=g},fc7f:function(t,e,a){"use strict";var n,i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return t.show?a("v-uni-view",{staticClass:"grace-date"},[a("v-uni-view",{staticClass:"grace-date-header"},[a("v-uni-view",{staticClass:"grace-date-header-btn",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.prevMonth.apply(void 0,arguments)}}},[a("v-uni-text",{staticClass:"grace-iconfont icon-arrow-left"})],1),a("v-uni-view",{staticClass:"grace-date-header-date"},[t._v(t._s(t.cYear)+"年"+t._s(t.cMonth)+"月")]),a("v-uni-view",{staticClass:"grace-date-header-btn",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.nextMonth.apply(void 0,arguments)}}},[a("v-uni-text",{staticClass:"grace-iconfont icon-arrow-right"})],1)],1),a("v-uni-view",{staticClass:"grace-date-week"},t._l(t.weeks,function(e,n){return a("v-uni-view",{key:n},[t._v(t._s(e))])}),1),a("v-uni-view",{staticClass:"grace-date-days"},t._l(t.days,function(e,n){return a("v-uni-view",{key:n,class:["items",t.currentDay==t.cYear+"-"+t.cMonth+"-"+e.date?"current":"",e.isselect?"current":""],style:{background:""==e?"none":""},attrs:{"data-date":t.cYear+"-"+t.cMonth+"-"+e.date},on:{click:function(a){arguments[0]=a=t.$handleEvent(a),t.gracClick(e.date,e.isselect)}}},[a("v-uni-view",{staticClass:"grace-date-day"},[t._v(t._s(e.date?e.date:""))]),a("v-uni-view",{staticClass:"grace-date-nl"},[t._v(t._s(e.nl?e.nl:""))])],1)}),1),t.isTime?a("v-uni-view",[a("v-uni-view",{staticClass:"grace-date-time-title"},[t._v("时间")]),a("v-uni-view",{staticClass:"grace-date-time"},[a("v-uni-view",{staticClass:"timer"},[a("v-uni-picker",{attrs:{mode:"selector",range:t.hours},on:{change:function(e){arguments[0]=e=t.$handleEvent(e),t.hourChange.apply(void 0,arguments)}}},[a("v-uni-view",[t._v(t._s(t.hours[t.currentHourD]))])],1)],1),a("v-uni-view",{staticClass:"timer-spliter"},[t._v(":")]),a("v-uni-view",{staticClass:"timer"},[a("v-uni-picker",{attrs:{mode:"selector",range:t.minutes},on:{change:function(e){arguments[0]=e=t.$handleEvent(e),t.minuteChange.apply(void 0,arguments)}}},[a("v-uni-view",[t._v(t._s(t.minutes[t.currenMinuteD]))])],1)],1)],1),a("v-uni-view",{staticClass:"grace-date-btn"},[a("v-uni-button",{attrs:{type:"primary"},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.submit.apply(void 0,arguments)}}},[t._v("确定")])],1)],1):t._e()],1):t._e()},s=[];a.d(e,"b",function(){return i}),a.d(e,"c",function(){return s}),a.d(e,"a",function(){return n})},fdae:function(t,e,a){e=t.exports=a("2350")(!1),e.push([t.i,".al[data-v-66d97e44]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;justify-content:space-between}",""])}}]);