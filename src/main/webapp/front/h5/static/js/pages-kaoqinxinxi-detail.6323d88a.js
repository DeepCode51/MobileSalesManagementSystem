(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-kaoqinxinxi-detail"],{"37f3":function(t,e,i){var n=i("24fb");e=n(!1),e.push([t.i,'@charset "UTF-8";\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\n/* 颜色变量 */\n/* 行为相关颜色 */\n/* 文字基本颜色 */\n/* 背景颜色 */\n/* 边框颜色 */\n/* 尺寸变量 */\n/* 文字尺寸 */\n/* 图片尺寸 */\n/* Border Radius */\n/* 水平间距 */\n/* 垂直间距 */\n/* 透明度 */\n/* 文章场景相关 */.content[data-v-a920c16a]{min-height:calc(100vh - 44px);box-sizing:border-box}.seat-list[data-v-a920c16a]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;-webkit-flex-wrap:wrap;flex-wrap:wrap;background:#fff;margin:%?20?%;border-radius:%?20?%;padding:%?20?%;font-size:%?30?%}.seat-list .seat-item[data-v-a920c16a]{width:33.33%;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;flex-direction:column;margin-bottom:%?20?%}.seat-list .seat-item .seat-icon[data-v-a920c16a]{width:%?50?%;height:%?50?%;margin-bottom:%?10?%}uni-audio[data-v-a920c16a]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;flex-direction:column}.audio[data-v-a920c16a] .uni-audio-default{width:inherit}',""]),t.exports=e},"5fd2":function(t,e,i){"use strict";i.r(e);var n=i("c110"),r=i.n(n);for(var a in n)"default"!==a&&function(t){i.d(e,t,(function(){return n[t]}))}(a);e["default"]=r.a},6198:function(t,e,i){"use strict";var n={"mescroll-uni":i("f05e").default},r=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-uni-view",[i("mescroll-uni",{attrs:{up:t.upOption,down:t.downOption},on:{init:function(e){arguments[0]=e=t.$handleEvent(e),t.mescrollInit.apply(void 0,arguments)},down:function(e){arguments[0]=e=t.$handleEvent(e),t.downCallback.apply(void 0,arguments)},up:function(e){arguments[0]=e=t.$handleEvent(e),t.upCallback.apply(void 0,arguments)}}},[i("v-uni-view",{staticClass:"content"},[i("v-uni-view",{staticClass:"container",style:{minHeight:"100vh",width:"100%",padding:"0px 0 132rpx",position:"relative",background:"url(http://codegen.caihongy.cn/20221227/38bdf285653f4e2580978aa4e42be204.gif) no-repeat center top / 100% auto,url(http://codegen.caihongy.cn/20221227/981928ff5e8b4de0bd3f18588ef6cb0f.png) fixed repeat center top,#959bd9",height:"auto"}},[i("v-uni-view",{staticClass:"detail-content",style:{padding:"0px 24rpx 24rpx",flexWrap:"wrap",background:"none",display:"flex",width:"100%",justifyContent:"space-between",height:"auto"}},[i("v-uni-view",{staticClass:"detail-list-item title",style:{boxShadow:"inset 0px 0px 0px 0px #f9edd9",padding:"16rpx 40rpx 64rpx",margin:"20rpx 0 20rpx 0",borderColor:"#c8c8ef",borderRadius:"0px",flexWrap:"wrap",borderWidth:"0px 0px 8rpx 0px",background:"linear-gradient(180deg, rgba(255,255,255,1) 31%, rgba(232,232,255,1) 100%)",display:"flex",width:"100%",borderStyle:"dotted dashed solid",height:"auto"}},[i("v-uni-view",{staticClass:"lable",style:{width:"100%",padding:"0 20rpx 0 0",lineHeight:"48rpx",fontSize:"28rpx",color:"#333",textAlign:"left"}},[t._v("考勤状况：")]),i("v-uni-view",{staticClass:"text",style:{width:"100%",padding:"0px 20rpx 20rpx 0",margin:"0px 0 0",lineHeight:"48rpx",fontSize:"28rpx",color:"#555"}},[t._v(t._s(t.detail.kaoqinzhuangkuang))])],1),i("v-uni-view",{staticClass:"detail-list-item title",style:{boxShadow:"inset 0px 0px 0px 0px #f9edd9",padding:"16rpx 40rpx 64rpx",margin:"20rpx 0 20rpx 0",borderColor:"#c8c8ef",borderRadius:"0px",flexWrap:"wrap",borderWidth:"0px 0px 8rpx 0px",background:"linear-gradient(180deg, rgba(255,255,255,1) 31%, rgba(232,232,255,1) 100%)",display:"flex",width:"100%",borderStyle:"dotted dashed solid",height:"auto"}},[i("v-uni-view",{staticClass:"lable",style:{width:"100%",padding:"0 20rpx 0 0",lineHeight:"48rpx",fontSize:"28rpx",color:"#333",textAlign:"left"}},[t._v("考勤日期：")]),i("v-uni-view",{staticClass:"text",style:{width:"100%",padding:"0px 20rpx 20rpx 0",margin:"0px 0 0",lineHeight:"48rpx",fontSize:"28rpx",color:"#555"}},[t._v(t._s(t.detail.kaoqinriqi))])],1),i("v-uni-view",{staticClass:"detail-list-item",style:{boxShadow:"inset 0px 0px 0px 0px #f9edd9",padding:"16rpx 40rpx 64rpx",margin:"20rpx 0 20rpx 0",borderColor:"#c8c8ef",borderRadius:"0px",flexWrap:"wrap",borderWidth:"0px 0px 8rpx 0px",background:"linear-gradient(180deg, rgba(255,255,255,1) 31%, rgba(232,232,255,1) 100%)",display:"flex",width:"100%",borderStyle:"dotted dashed solid",height:"auto"}},[i("v-uni-view",{staticClass:"lable",style:{width:"100%",padding:"0 20rpx 0 0",lineHeight:"48rpx",fontSize:"28rpx",color:"#333",textAlign:"left"}},[t._v("用户名：")]),i("v-uni-view",{staticClass:"text",style:{width:"100%",padding:"0px 20rpx 20rpx 0",margin:"0px 0 0",lineHeight:"48rpx",fontSize:"28rpx",color:"#555"}},[t._v(t._s(t.detail.yonghuming))])],1),i("v-uni-view",{staticClass:"detail-list-item",style:{boxShadow:"inset 0px 0px 0px 0px #f9edd9",padding:"16rpx 40rpx 64rpx",margin:"20rpx 0 20rpx 0",borderColor:"#c8c8ef",borderRadius:"0px",flexWrap:"wrap",borderWidth:"0px 0px 8rpx 0px",background:"linear-gradient(180deg, rgba(255,255,255,1) 31%, rgba(232,232,255,1) 100%)",display:"flex",width:"100%",borderStyle:"dotted dashed solid",height:"auto"}},[i("v-uni-view",{staticClass:"lable",style:{width:"100%",padding:"0 20rpx 0 0",lineHeight:"48rpx",fontSize:"28rpx",color:"#333",textAlign:"left"}},[t._v("考勤说明")]),i("v-uni-view",{staticClass:"text",style:{width:"100%",padding:"0px 20rpx 20rpx 0",margin:"0px 0 0",lineHeight:"48rpx",fontSize:"28rpx",color:"#555"}},[t._v(t._s(t.detail.kaoqinshuoming))])],1),i("v-uni-view",{staticClass:"bottom-content bg-white tabbar border shop",style:{width:"100%",padding:"20rpx 0px",flexWrap:"wrap",background:"none",display:"flex",height:"auto"}})],1)],1)],1)],1)],1)},a=[];i.d(e,"b",(function(){return r})),i.d(e,"c",(function(){return a})),i.d(e,"a",(function(){return n}))},8284:function(t,e,i){"use strict";var n=i("e5d2"),r=i.n(n);r.a},c110:function(t,e,i){"use strict";var n=i("4ea4");Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,i("f559"),i("55dd"),i("96cf");var r=n(i("3b8d")),a={data:function(){return{btnColor:["#409eff","#67c23a","#909399","#e6a23c","#f56c6c","#356c6c","#351c6c","#f093a9","#a7c23a","#104eff","#10441f","#a21233","#503319"],id:"",userid:"",detail:{},swiperList:[],commentList:[],mescroll:null,downOption:{auto:!1},upOption:{noMoreSize:3,textNoMore:"~ 没有更多了 ~"},hasNext:!0,user:{},count:0,timer:null}},computed:{baseUrl:function(){return this.$base.url}},onLoad:function(){var t=(0,r.default)(regeneratorRuntime.mark((function t(e){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:this.id=e.id,e.userid&&(this.userid=e.userid);case 2:case"end":return t.stop()}}),t,this)})));function e(e){return t.apply(this,arguments)}return e}(),onShow:function(){var t=(0,r.default)(regeneratorRuntime.mark((function t(e){var i,n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return this.init(),i=uni.getStorageSync("nowTable"),t.next=4,this.$api.session(i);case 4:n=t.sent,this.user=n.data,this.btnColor=this.btnColor.sort((function(){return.5-Math.random()}));case 7:case"end":return t.stop()}}),t,this)})));function e(e){return t.apply(this,arguments)}return e}(),destroyed:function(){},methods:{onPayTap:function(){uni.setStorageSync("paytable","kaoqinxinxi"),uni.setStorageSync("payObject",this.detail),this.$utils.jump("../pay-confirm/pay-confirm?type=1")},onDetailTap:function(t){uni.setStorageSync("useridTag",this.userid),this.$utils.jump("./detail?id=".concat(t.id,"&userid=")+this.userid)},onAcrossTap:function(t,e,i,n,r){if(uni.setStorageSync("crossTable","kaoqinxinxi"),uni.setStorageSync("crossObj",this.detail),uni.setStorageSync("statusColumnName",i),uni.setStorageSync("statusColumnValue",r),uni.setStorageSync("tips",n),""!=i&&!i.startsWith("[")){var a=uni.getStorageSync("crossObj");for(var o in a)if(o==i&&a[o]==r)return void this.$utils.msg(n)}this.$utils.jump("../".concat(t,"/add-or-update?cross=true"))},init:function(){var t=(0,r.default)(regeneratorRuntime.mark((function t(){var e;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,this.$api.info("kaoqinxinxi",this.id);case 2:e=t.sent,this.detail=e.data;case 4:case"end":return t.stop()}}),t,this)})));function e(){return t.apply(this,arguments)}return e}(),mescrollInit:function(t){this.mescroll=t},downCallback:function(t){this.hasNext=!0,t.resetUpScroll()},upCallback:function(){var t=(0,r.default)(regeneratorRuntime.mark((function t(e){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:e.endSuccess(e.size,this.hasNext);case 1:case"end":return t.stop()}}),t,this)})));function e(e){return t.apply(this,arguments)}return e}(),onChatTap:function(){this.$utils.jump("../chat/chat")},download:function(t){var e=this;t=e.$base.url+t,uni.downloadFile({url:t,success:function(i){200===i.statusCode&&(e.$utils.msg("下载成功"),window.open(t))}})},onCartTabTap:function(){this.$utils.tab("../shop-cart/shop-cart")},onCommentTap:function(){var t=(0,r.default)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:this.$utils.jump("../discusskaoqinxinxi/add-or-update?refid=".concat(this.id));case 1:case"end":return t.stop()}}),t,this)})));function e(){return t.apply(this,arguments)}return e}(),onSHTap:function(){this.$refs.popup.open()}}};e.default=a},d141:function(t,e,i){"use strict";i.r(e);var n=i("6198"),r=i("5fd2");for(var a in r)"default"!==a&&function(t){i.d(e,t,(function(){return r[t]}))}(a);i("8284");var o,s=i("f0c5"),d=Object(s["a"])(r["default"],n["b"],n["c"],!1,null,"a920c16a",null,!1,n["a"],o);e["default"]=d.exports},e5d2:function(t,e,i){var n=i("37f3");"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var r=i("4f06").default;r("1d9e1646",n,!0,{sourceMap:!1,shadowMode:!1})}}]);