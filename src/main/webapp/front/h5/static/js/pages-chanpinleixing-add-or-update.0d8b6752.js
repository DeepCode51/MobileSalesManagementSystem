(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-chanpinleixing-add-or-update"],{"0d33":function(e,t,n){"use strict";n.r(t);var r=n("c61e"),i=n.n(r);for(var a in r)"default"!==a&&function(e){n.d(t,e,(function(){return r[e]}))}(a);t["default"]=i.a},"2a6b":function(e,t,n){var r=n("7318");"string"===typeof r&&(r=[[e.i,r,""]]),r.locals&&(e.exports=r.locals);var i=n("4f06").default;i("2b26c504",r,!0,{sourceMap:!1,shadowMode:!1})},7318:function(e,t,n){var r=n("24fb");t=r(!1),t.push([e.i,'@charset "UTF-8";\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\n/* 颜色变量 */\n/* 行为相关颜色 */\n/* 文字基本颜色 */\n/* 背景颜色 */\n/* 边框颜色 */\n/* 尺寸变量 */\n/* 文字尺寸 */\n/* 图片尺寸 */\n/* Border Radius */\n/* 水平间距 */\n/* 垂直间距 */\n/* 透明度 */\n/* 文章场景相关 */.content[data-v-09c6cfc0]{min-height:calc(100vh - 44px);box-sizing:border-box}',""]),e.exports=t},c61e:function(e,t,n){"use strict";var r=n("4ea4");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,n("a481"),n("c5f6"),n("f559"),n("ac6a"),n("96cf");var i=r(n("3b8d")),a=r(n("e2b1")),s=r(n("064f")),o={data:function(){return{cross:"",ruleForm:{chanpinleixing:""},user:{},ro:{chanpinleixing:!1}}},components:{wPicker:a.default,xiaEditor:s.default},computed:{baseUrl:function(){return this.$base.url}},onLoad:function(){var e=(0,i.default)(regeneratorRuntime.mark((function e(t){var n,r,i,a;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return n=uni.getStorageSync("nowTable"),e.next=3,this.$api.session(n);case 3:if(r=e.sent,this.user=r.data,this.ruleForm.userid=uni.getStorageSync("userid"),t.refid&&(this.ruleForm.refid=t.refid,this.ruleForm.nickname=uni.getStorageSync("nickname")),!t.id){e.next=13;break}return this.ruleForm.id=t.id,e.next=11,this.$api.info("chanpinleixing",this.ruleForm.id);case 11:r=e.sent,this.ruleForm=r.data;case 13:if(this.cross=t.cross,!t.cross){e.next=25;break}i=uni.getStorageSync("crossObj"),e.t0=regeneratorRuntime.keys(i);case 17:if((e.t1=e.t0()).done){e.next=25;break}if(a=e.t1.value,"chanpinleixing"!=a){e.next=23;break}return this.ruleForm.chanpinleixing=i[a],this.ro.chanpinleixing=!0,e.abrupt("continue",17);case 23:e.next=17;break;case 25:this.styleChange();case 26:case"end":return e.stop()}}),e,this)})));function t(t){return e.apply(this,arguments)}return t}(),methods:{styleChange:function(){this.$nextTick((function(){}))},getUUID:function(){return(new Date).getTime()},onSubmitTap:function(){var e=(0,i.default)(regeneratorRuntime.mark((function e(){var t,n,r,i,a,s,o,c,u,d;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(this.ruleForm.chanpinleixing){e.next=3;break}return this.$utils.msg("产品类型不能为空"),e.abrupt("return");case 3:if(!this.cross){e.next=19;break}if(a=uni.getStorageSync("statusColumnName"),s=uni.getStorageSync("statusColumnValue"),""==a){e.next=19;break}if(t||(t=uni.getStorageSync("crossObj")),a.startsWith("[")){e.next=15;break}for(o in t)o==a&&(t[o]=s);return c=uni.getStorageSync("crossTable"),e.next=13,this.$api.update("".concat(c),t);case 13:e.next=19;break;case 15:n=Number(uni.getStorageSync("userid")),r=t["id"],i=uni.getStorageSync("statusColumnName"),i=i.replace(/\[/,"").replace(/\]/,"");case 19:if(!r||!n){e.next=41;break}return this.ruleForm.crossuserid=n,this.ruleForm.crossrefid=r,u={page:1,limit:10,crossuserid:n,crossrefid:r},e.next=25,this.$api.list("chanpinleixing",u);case 25:if(d=e.sent,!(d.data.total>=i)){e.next=31;break}return this.$utils.msg(uni.getStorageSync("tips")),e.abrupt("return",!1);case 31:if(!this.ruleForm.id){e.next=36;break}return e.next=34,this.$api.update("chanpinleixing",this.ruleForm);case 34:e.next=38;break;case 36:return e.next=38,this.$api.add("chanpinleixing",this.ruleForm);case 38:this.$utils.msgBack("提交成功");case 39:e.next=49;break;case 41:if(!this.ruleForm.id){e.next=46;break}return e.next=44,this.$api.update("chanpinleixing",this.ruleForm);case 44:e.next=48;break;case 46:return e.next=48,this.$api.add("chanpinleixing",this.ruleForm);case 48:this.$utils.msgBack("提交成功");case 49:case"end":return e.stop()}}),e,this)})));function t(){return e.apply(this,arguments)}return t}(),optionsChange:function(e){this.index=e.target.value},bindDateChange:function(e){this.date=e.target.value},getDate:function(e){var t=new Date,n=t.getFullYear(),r=t.getMonth()+1,i=t.getDate();return"start"===e?n-=60:"end"===e&&(n+=2),r=r>9?r:"0"+r,i=i>9?i:"0"+i,"".concat(n,"-").concat(r,"-").concat(i)},toggleTab:function(e){this.$refs[e].show()}}};t.default=o},cd7f:function(e,t,n){"use strict";n.r(t);var r=n("d049"),i=n("0d33");for(var a in i)"default"!==a&&function(e){n.d(t,e,(function(){return i[e]}))}(a);n("f716");var s,o=n("f0c5"),c=Object(o["a"])(i["default"],r["b"],r["c"],!1,null,"09c6cfc0",null,!1,r["a"],s);t["default"]=c.exports},d049:function(e,t,n){"use strict";var r,i=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-uni-view",{staticClass:"content"},[n("v-uni-view",{style:{minHeight:"100vh",padding:"0px",borderColor:"#21d5ae",background:"url(http://codegen.caihongy.cn/20221227/38bdf285653f4e2580978aa4e42be204.gif) no-repeat center top / 100% auto,url(http://codegen.caihongy.cn/20221227/981928ff5e8b4de0bd3f18588ef6cb0f.png) fixed repeat center top,#959bd9",borderWidth:"0px 0 0",width:"100%",position:"relative",borderStyle:"dashed",height:"auto"}},[n("v-uni-form",{staticClass:"app-update-pv",style:{width:"100%",padding:"60rpx 40rpx",background:"none",height:"auto"}},[n("v-uni-view",{style:{padding:"0 20rpx 40rpx",boxShadow:"inset 0px 0px 0px 0px #f9edd9",margin:"0 0 32rpx",borderColor:"#c8c8ef",borderRadius:"0px",borderWidth:"0px 0px 8rpx 0px",background:"linear-gradient(180deg, rgba(255,255,255,1) 31%, rgba(232,232,255,1) 100%)",display:"flex",width:"100%",lineHeight:"100rpx",borderStyle:"dotted dashed solid",height:"auto"}},[n("v-uni-view",{staticClass:"title",style:{width:"160rpx",padding:"0 20rpx 0 0",fontSize:"28rpx",color:"#333",textAlign:"right"}},[e._v("产品类型")]),n("v-uni-input",{style:{border:"0",padding:"0px 20rpx",margin:"0px",color:"#333",borderRadius:"8rpx",flex:"1",background:"rgba(255, 255, 255, 0)",fontSize:"28rpx"},attrs:{disabled:e.ro.chanpinleixing,placeholder:"产品类型"},model:{value:e.ruleForm.chanpinleixing,callback:function(t){e.$set(e.ruleForm,"chanpinleixing",t)},expression:"ruleForm.chanpinleixing"}})],1),n("v-uni-view",{staticClass:"btn",style:{width:"100%",margin:"40rpx 0 0 0",justifyContent:"center",display:"flex",height:"auto"}},[n("v-uni-button",{staticClass:"bg-red",style:{padding:"0 40rpx",boxShadow:"4rpx 8rpx 0px #cfcfe3",margin:"0 40rpx 0 0",borderColor:"#9F9FEC",color:"#333",display:"inline",minWidth:"212rpx",borderRadius:"40rpx",background:"#eaeafa",borderWidth:"2rpx 8rpx 2rpx",width:"auto",lineHeight:"72rpx",fontSize:"28rpx",borderStyle:"dashed",height:"80rpx"},on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.onSubmitTap.apply(void 0,arguments)}}},[e._v("提交")])],1)],1)],1)],1)},a=[];n.d(t,"b",(function(){return i})),n.d(t,"c",(function(){return a})),n.d(t,"a",(function(){return r}))},f716:function(e,t,n){"use strict";var r=n("2a6b"),i=n.n(r);i.a}}]);