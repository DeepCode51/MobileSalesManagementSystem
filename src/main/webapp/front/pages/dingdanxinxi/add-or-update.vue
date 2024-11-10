<template>
<view class="content">
	<view :style='{"minHeight":"100vh","padding":"0px","borderColor":"#21d5ae","background":"url(http://codegen.caihongy.cn/20221227/38bdf285653f4e2580978aa4e42be204.gif) no-repeat center top / 100% auto,url(http://codegen.caihongy.cn/20221227/981928ff5e8b4de0bd3f18588ef6cb0f.png) fixed repeat center top,#959bd9","borderWidth":"0px 0 0","width":"100%","position":"relative","borderStyle":"dashed","height":"auto"}'>
		<form :style='{"width":"100%","padding":"60rpx 40rpx","background":"none","height":"auto"}' class="app-update-pv">
			<view :style='{"padding":"0 20rpx 40rpx","boxShadow":"inset 0px 0px 0px 0px #f9edd9","margin":"0 0 32rpx","borderColor":"#c8c8ef","borderRadius":"0px","borderWidth":"0px 0px 8rpx 0px","background":"linear-gradient(180deg, rgba(255,255,255,1) 31%, rgba(232,232,255,1) 100%)","display":"flex","width":"100%","lineHeight":"100rpx","borderStyle":"dotted dashed solid","height":"auto"}' class="">
				<view :style='{"width":"160rpx","padding":"0 20rpx 0 0","fontSize":"28rpx","color":"#333","textAlign":"right"}' class="title">订单编号</view>
				<view :style='{"padding":"0px 24rpx","margin":"0px","fontSize":"28rpx","color":"#333","flex":"1"}' class="right-input">
					{{ruleForm.dingdanbianhao}}
				</view>
			</view>
			<view :style='{"padding":"0 20rpx 40rpx","boxShadow":"inset 0px 0px 0px 0px #f9edd9","margin":"0 0 32rpx","borderColor":"#c8c8ef","borderRadius":"0px","borderWidth":"0px 0px 8rpx 0px","background":"linear-gradient(180deg, rgba(255,255,255,1) 31%, rgba(232,232,255,1) 100%)","display":"flex","width":"100%","lineHeight":"100rpx","borderStyle":"dotted dashed solid","height":"auto"}' class="">
				<view :style='{"width":"160rpx","padding":"0 20rpx 0 0","fontSize":"28rpx","color":"#333","textAlign":"right"}' class="title">产品名称</view>
				<input :style='{"border":"0","padding":"0px 20rpx","margin":"0px","color":"#333","borderRadius":"8rpx","flex":"1","background":"rgba(255, 255, 255, 0)","fontSize":"28rpx"}' :disabled="ro.chanpinmingcheng" v-model="ruleForm.chanpinmingcheng" placeholder="产品名称"></input>
			</view>
			<view :style='{"padding":"0 20rpx 40rpx","boxShadow":"inset 0px 0px 0px 0px #f9edd9","margin":"0 0 32rpx","borderColor":"#c8c8ef","borderRadius":"0px","borderWidth":"0px 0px 8rpx 0px","background":"linear-gradient(180deg, rgba(255,255,255,1) 31%, rgba(232,232,255,1) 100%)","display":"flex","width":"100%","lineHeight":"100rpx","borderStyle":"dotted dashed solid","height":"auto"}' class="">
				<view :style='{"width":"160rpx","padding":"0 20rpx 0 0","fontSize":"28rpx","color":"#333","textAlign":"right"}' class="title">产品类型</view>
				<input :style='{"border":"0","padding":"0px 20rpx","margin":"0px","color":"#333","borderRadius":"8rpx","flex":"1","background":"rgba(255, 255, 255, 0)","fontSize":"28rpx"}' :disabled="ro.chanpinleixing" v-model="ruleForm.chanpinleixing" placeholder="产品类型"></input>
			</view>
			<view :style='{"padding":"0 20rpx 40rpx","boxShadow":"inset 0px 0px 0px 0px #f9edd9","margin":"0 0 32rpx","borderColor":"#c8c8ef","borderRadius":"0px","borderWidth":"0px 0px 8rpx 0px","background":"linear-gradient(180deg, rgba(255,255,255,1) 31%, rgba(232,232,255,1) 100%)","display":"flex","width":"100%","lineHeight":"100rpx","borderStyle":"dotted dashed solid","height":"auto"}' class="" @tap="tupianTap">
				<view :style='{"width":"160rpx","padding":"0 20rpx 0 0","fontSize":"28rpx","color":"#333","textAlign":"right"}' class="title">图片</view>
				<image :style='{"width":"72rpx","margin":"12rpx 0","borderRadius":"100%","objectFit":"cover","display":"block","height":"72rpx"}' class="avator" v-if="ruleForm.tupian" :src="baseUrl+ruleForm.tupian.split(',')[0]" mode="aspectFill"></image>
				<image :style='{"width":"72rpx","margin":"12rpx 0","borderRadius":"100%","objectFit":"cover","display":"block","height":"72rpx"}' class="avator" v-else src="../../static/gen/upload.png" mode="aspectFill"></image>
			</view>
			<view :style='{"padding":"0 20rpx 40rpx","boxShadow":"inset 0px 0px 0px 0px #f9edd9","margin":"0 0 32rpx","borderColor":"#c8c8ef","borderRadius":"0px","borderWidth":"0px 0px 8rpx 0px","background":"linear-gradient(180deg, rgba(255,255,255,1) 31%, rgba(232,232,255,1) 100%)","display":"flex","width":"100%","lineHeight":"100rpx","borderStyle":"dotted dashed solid","height":"auto"}' class=" select">
				<view :style='{"width":"160rpx","padding":"0 20rpx 0 0","fontSize":"28rpx","color":"#333","textAlign":"right"}' class="title">客户名称</view>
				<picker :style='{"width":"100%","flex":"1","height":"auto"}' @change="kehumingchengChange" :value="kehumingchengIndex"  :range="kehumingchengOptions">
					<view :style='{"color":"#333","width":"100%","fontSize":"28rpx"}' class="uni-input">{{kehumingchengOptions[kehumingchengIndex]}}</view>
				</picker>
			</view>
			<view :style='{"padding":"0 20rpx 40rpx","boxShadow":"inset 0px 0px 0px 0px #f9edd9","margin":"0 0 32rpx","borderColor":"#c8c8ef","borderRadius":"0px","borderWidth":"0px 0px 8rpx 0px","background":"linear-gradient(180deg, rgba(255,255,255,1) 31%, rgba(232,232,255,1) 100%)","display":"flex","width":"100%","lineHeight":"100rpx","borderStyle":"dotted dashed solid","height":"auto"}' class="">
				<view :style='{"width":"160rpx","padding":"0 20rpx 0 0","fontSize":"28rpx","color":"#333","textAlign":"right"}' class="title">客户类型</view>
				<input :style='{"border":"0","padding":"0px 20rpx","margin":"0px","color":"#333","borderRadius":"8rpx","flex":"1","background":"rgba(255, 255, 255, 0)","fontSize":"28rpx"}' :disabled="ro.kehuleixing" v-model="ruleForm.kehuleixing" placeholder="客户类型"></input>
			</view>
			<view :style='{"padding":"0 20rpx 40rpx","boxShadow":"inset 0px 0px 0px 0px #f9edd9","margin":"0 0 32rpx","borderColor":"#c8c8ef","borderRadius":"0px","borderWidth":"0px 0px 8rpx 0px","background":"linear-gradient(180deg, rgba(255,255,255,1) 31%, rgba(232,232,255,1) 100%)","display":"flex","width":"100%","lineHeight":"100rpx","borderStyle":"dotted dashed solid","height":"auto"}' class="">
				<view :style='{"width":"160rpx","padding":"0 20rpx 0 0","fontSize":"28rpx","color":"#333","textAlign":"right"}' class="title">联系电话</view>
				<input :style='{"border":"0","padding":"0px 20rpx","margin":"0px","color":"#333","borderRadius":"8rpx","flex":"1","background":"rgba(255, 255, 255, 0)","fontSize":"28rpx"}' :disabled="ro.lianxidianhua" v-model="ruleForm.lianxidianhua" placeholder="联系电话"></input>
			</view>
			<view :style='{"padding":"0 20rpx 40rpx","boxShadow":"inset 0px 0px 0px 0px #f9edd9","margin":"0 0 32rpx","borderColor":"#c8c8ef","borderRadius":"0px","borderWidth":"0px 0px 8rpx 0px","background":"linear-gradient(180deg, rgba(255,255,255,1) 31%, rgba(232,232,255,1) 100%)","display":"flex","width":"100%","lineHeight":"100rpx","borderStyle":"dotted dashed solid","height":"auto"}' class="">
				<view :style='{"width":"160rpx","padding":"0 20rpx 0 0","fontSize":"28rpx","color":"#333","textAlign":"right"}' class="title">价格</view>
				<input :style='{"border":"0","padding":"0px 20rpx","margin":"0px","color":"#333","borderRadius":"8rpx","flex":"1","background":"rgba(255, 255, 255, 0)","fontSize":"28rpx"}' :disabled="ro.jiage" v-model="ruleForm.jiage" placeholder="价格"></input>
			</view>
			<view :style='{"padding":"0 20rpx 40rpx","boxShadow":"inset 0px 0px 0px 0px #f9edd9","margin":"0 0 32rpx","borderColor":"#c8c8ef","borderRadius":"0px","borderWidth":"0px 0px 8rpx 0px","background":"linear-gradient(180deg, rgba(255,255,255,1) 31%, rgba(232,232,255,1) 100%)","display":"flex","width":"100%","lineHeight":"100rpx","borderStyle":"dotted dashed solid","height":"auto"}' class="">
				<view :style='{"width":"160rpx","padding":"0 20rpx 0 0","fontSize":"28rpx","color":"#333","textAlign":"right"}' class="title">数量</view>
				<input :style='{"border":"0","padding":"0px 20rpx","margin":"0px","color":"#333","borderRadius":"8rpx","flex":"1","background":"rgba(255, 255, 255, 0)","fontSize":"28rpx"}' :disabled="ro.shuliang" v-model="ruleForm.shuliang" placeholder="数量"></input>
			</view>
			<view :style='{"padding":"0 20rpx 40rpx","boxShadow":"inset 0px 0px 0px 0px #f9edd9","margin":"0 0 32rpx","borderColor":"#c8c8ef","borderRadius":"0px","borderWidth":"0px 0px 8rpx 0px","background":"linear-gradient(180deg, rgba(255,255,255,1) 31%, rgba(232,232,255,1) 100%)","display":"flex","width":"100%","lineHeight":"100rpx","borderStyle":"dotted dashed solid","height":"auto"}' class="">
				<view :style='{"width":"160rpx","padding":"0 20rpx 0 0","fontSize":"28rpx","color":"#333","textAlign":"right"}' class="title">总价格</view>
				<view :style='{"padding":"0px 24rpx","margin":"0px","fontSize":"28rpx","color":"#333","flex":"1"}' class="right-input">
					{{zongjiage}}
				</view>
			</view>
			<view :style='{"padding":"0 20rpx 40rpx","boxShadow":"inset 0px 0px 0px 0px #f9edd9","margin":"0 0 32rpx","borderColor":"#c8c8ef","borderRadius":"0px","borderWidth":"0px 0px 8rpx 0px","background":"linear-gradient(180deg, rgba(255,255,255,1) 31%, rgba(232,232,255,1) 100%)","display":"flex","width":"100%","lineHeight":"100rpx","borderStyle":"dotted dashed solid","height":"auto"}' class=" select">
				<view :style='{"width":"160rpx","padding":"0 20rpx 0 0","fontSize":"28rpx","color":"#333","textAlign":"right"}' class="title">下单时间</view>
				<picker :style='{"width":"100%","flex":"1","height":"auto"}' mode="date" :value="ruleForm.xiadanshijian" @change="xiadanshijianChange">
					<view :style='{"color":"#333","width":"100%","fontSize":"28rpx"}' class="uni-input">{{ruleForm.xiadanshijian?ruleForm.xiadanshijian:"请选择下单时间"}}</view>
				</picker>
			</view>
			<view :style='{"padding":"0 20rpx 40rpx","boxShadow":"inset 0px 0px 0px 0px #f9edd9","margin":"0 0 32rpx","borderColor":"#c8c8ef","borderRadius":"0px","borderWidth":"0px 0px 8rpx 0px","background":"linear-gradient(180deg, rgba(255,255,255,1) 31%, rgba(232,232,255,1) 100%)","display":"flex","width":"100%","lineHeight":"100rpx","borderStyle":"dotted dashed solid","height":"auto"}' class="">
				<view :style='{"width":"160rpx","padding":"0 20rpx 0 0","fontSize":"28rpx","color":"#333","textAlign":"right"}' class="title">用户名</view>
				<input :style='{"border":"0","padding":"0px 20rpx","margin":"0px","color":"#333","borderRadius":"8rpx","flex":"1","background":"rgba(255, 255, 255, 0)","fontSize":"28rpx"}' :disabled="ro.yonghuming" v-model="ruleForm.yonghuming" placeholder="用户名"></input>
			</view>
			<view :style='{"padding":"0 20rpx 40rpx","boxShadow":"inset 0px 0px 0px 0px #f9edd9","margin":"0 0 32rpx","borderColor":"#c8c8ef","borderRadius":"0px","borderWidth":"0px 0px 8rpx 0px","background":"linear-gradient(180deg, rgba(255,255,255,1) 31%, rgba(232,232,255,1) 100%)","display":"flex","width":"100%","lineHeight":"100rpx","borderStyle":"dotted dashed solid","height":"auto"}' class="">
				<view :style='{"width":"160rpx","padding":"0 20rpx 0 0","fontSize":"28rpx","color":"#333","textAlign":"right"}' class="title">姓名</view>
				<input :style='{"border":"0","padding":"0px 20rpx","margin":"0px","color":"#333","borderRadius":"8rpx","flex":"1","background":"rgba(255, 255, 255, 0)","fontSize":"28rpx"}' :disabled="ro.xingming" v-model="ruleForm.xingming" placeholder="姓名"></input>
			</view>
			<view :style='{"padding":"0 20rpx 40rpx","boxShadow":"inset 0px 0px 0px 0px #f9edd9","margin":"0 0 32rpx","borderColor":"#c8c8ef","borderRadius":"0px","borderWidth":"0px 0px 8rpx 0px","background":"linear-gradient(180deg, rgba(255,255,255,1) 31%, rgba(232,232,255,1) 100%)","display":"flex","width":"100%","lineHeight":"100rpx","borderStyle":"dotted dashed solid","height":"auto"}' class="">
				<view :style='{"width":"160rpx","padding":"0 20rpx 0 0","fontSize":"28rpx","color":"#333","textAlign":"right"}' class="title">手机</view>
				<input :style='{"border":"0","padding":"0px 20rpx","margin":"0px","color":"#333","borderRadius":"8rpx","flex":"1","background":"rgba(255, 255, 255, 0)","fontSize":"28rpx"}' :disabled="ro.shouji" v-model="ruleForm.shouji" placeholder="手机"></input>
			</view>
			
			<!-- 否 -->
 

			
			
			<view :style='{"width":"100%","margin":"40rpx 0 0 0","justifyContent":"center","display":"flex","height":"auto"}' class="btn" >
				<button :style='{"padding":"0 40rpx","boxShadow":"4rpx 8rpx 0px #cfcfe3","margin":"0 40rpx 0 0","borderColor":"#9F9FEC","color":"#333","display":"inline","minWidth":"212rpx","borderRadius":"40rpx","background":"#eaeafa","borderWidth":"2rpx 8rpx 2rpx","width":"auto","lineHeight":"72rpx","fontSize":"28rpx","borderStyle":"dashed","height":"80rpx"}' @tap="onSubmitTap" class="bg-red">提交</button>
			</view>
		</form>

	</view>
</view>
</template>

<script>
	import wPicker from "@/components/w-picker/w-picker.vue";
    import xiaEditor from '@/components/xia-editor/xia-editor';
	export default {
		data() {
			return {
				cross:'',
				ruleForm: {
				dingdanbianhao: this.getUUID(),
				chanpinmingcheng: '',
				chanpinleixing: '',
				tupian: '',
				kehumingcheng: '',
				kehuleixing: '',
				lianxidianhua: '',
				jiage: '',
				shuliang: '',
				zongjiage: '',
				xiadanshijian: '',
				yonghuming: '',
				xingming: '',
				shouji: '',
				},
				kehumingchengOptions: [],
				kehumingchengIndex: 0,
				// 登陆用户信息
				user: {},
                ro:{
                   dingdanbianhao : false,
                   chanpinmingcheng : false,
                   chanpinleixing : false,
                   tupian : false,
                   kehumingcheng : false,
                   kehuleixing : false,
                   lianxidianhua : false,
                   jiage : false,
                   shuliang : false,
                   zongjiage : false,
                   xiadanshijian : false,
                   yonghuming : false,
                   xingming : false,
                   shouji : false,
                },
			}
		},
		components: {
			wPicker,
            xiaEditor
		},
		computed: {
			baseUrl() {
				return this.$base.url;
			},


			zongjiage:{
			get: function () {
				return 1*this.ruleForm.jiage*this.ruleForm.shuliang
			}
			},

		},
		async onLoad(options) {
            this.ruleForm.xiadanshijian = this.$utils.getCurDate();
			let table = uni.getStorageSync("nowTable");
			// 获取用户信息
			let res = await this.$api.session(table);
			this.user = res.data;
			
			// ss读取
			this.ruleForm.yonghuming = this.user.yonghuming
			this.ro.yonghuming = true;
			this.ruleForm.xingming = this.user.xingming
			this.ro.xingming = true;
			this.ruleForm.shouji = this.user.shouji
			this.ro.shouji = true;

            this.ro.kehuleixing = true;
            this.ro.lianxidianhua = true;
            this.ro.xiadanshijian = true;

			// 下2
			res = await this.$api.option(`kehuxinxi`,`kehumingcheng`,{});
			this.kehumingchengOptions = res.data;

			// 如果有登陆，获取登陆后保存的userid
			this.ruleForm.userid = uni.getStorageSync("userid")
			if (options.refid) {
				// 如果上一级页面传递了refid，获取改refid数据信息
				this.ruleForm.refid = options.refid;
				this.ruleForm.nickname = uni.getStorageSync("nickname");
			}
			// 如果是更新操作
			if (options.id) {
				this.ruleForm.id = options.id;
				// 获取信息
				res = await this.$api.info(`dingdanxinxi`, this.ruleForm.id);
				this.ruleForm = res.data;
			}
			// 跨表
			this.cross = options.cross;
			if(options.cross){
				var obj = uni.getStorageSync('crossObj');
				for (var o in obj){
					if(o=='dingdanbianhao'){
					this.ruleForm.dingdanbianhao = obj[o];
					this.ro.dingdanbianhao = true;
					continue;
					}
					if(o=='chanpinmingcheng'){
					this.ruleForm.chanpinmingcheng = obj[o];
					this.ro.chanpinmingcheng = true;
					continue;
					}
					if(o=='chanpinleixing'){
					this.ruleForm.chanpinleixing = obj[o];
					this.ro.chanpinleixing = true;
					continue;
					}
					if(o=='tupian'){
					this.ruleForm.tupian = obj[o].split(",")[0];
					this.ro.tupian = true;
					continue;
					}
					if(o=='kehumingcheng'){
					this.ruleForm.kehumingcheng = obj[o];
					this.ro.kehumingcheng = true;
					continue;
					}
					if(o=='kehuleixing'){
					this.ruleForm.kehuleixing = obj[o];
					this.ro.kehuleixing = true;
					continue;
					}
					if(o=='lianxidianhua'){
					this.ruleForm.lianxidianhua = obj[o];
					this.ro.lianxidianhua = true;
					continue;
					}
					if(o=='jiage'){
					this.ruleForm.jiage = obj[o];
					this.ro.jiage = true;
					continue;
					}
					if(o=='shuliang'){
					this.ruleForm.shuliang = obj[o];
					this.ro.shuliang = true;
					continue;
					}
					if(o=='zongjiage'){
					this.ruleForm.zongjiage = obj[o];
					this.ro.zongjiage = true;
					continue;
					}
					if(o=='xiadanshijian'){
					this.ruleForm.xiadanshijian = obj[o];
					this.ro.xiadanshijian = true;
					continue;
					}
					if(o=='yonghuming'){
					this.ruleForm.yonghuming = obj[o];
					this.ro.yonghuming = true;
					continue;
					}
					if(o=='xingming'){
					this.ruleForm.xingming = obj[o];
					this.ro.xingming = true;
					continue;
					}
					if(o=='shouji'){
					this.ruleForm.shouji = obj[o];
					this.ro.shouji = true;
					continue;
					}
				}
            this.ruleForm.shuliang = 0;
            this.ro.shuliang = false;
			}
			this.styleChange()
		},
		methods: {
			styleChange() {
				this.$nextTick(()=>{
					// document.querySelectorAll('.app-update-pv . .uni-input-input').forEach(el=>{
					//   el.style.backgroundColor = this.addUpdateForm.input.content.backgroundColor
					// })
				})
			},
			// 下二随
			async kehumingchengChange (e) {
				this.kehumingchengIndex = e.target.value
				this.ruleForm.kehumingcheng = this.kehumingchengOptions[this.kehumingchengIndex]
				let res = await this.$api.follow(`kehuxinxi`, `kehumingcheng`,{
					columnValue: this.ruleForm.kehumingcheng
				});
				if(res.data.kehuleixing){
					this.ruleForm.kehuleixing = res.data.kehuleixing
				}
				if(res.data.lianxidianhua){
					this.ruleForm.lianxidianhua = res.data.lianxidianhua
				}
			},

			// 多级联动参数

			xiadanshijianChange(e) {
				this.ruleForm.xiadanshijian = e.target.value;
				this.$forceUpdate();
			},



			tupianTap() {
				let _this = this;
				this.$api.upload(function(res) {
					_this.ruleForm.tupian = 'upload/' + res.file;
					_this.$forceUpdate();
					_this.$nextTick(()=>{
						_this.styleChange()
					})
				});
			},

			getUUID () {
				return new Date().getTime();
			},
			async onSubmitTap() {

				this.ruleForm.zongjiage = this.zongjiage




























//跨表计算判断
				var obj;
				obj = uni.getStorageSync('crossObj');
				var table = uni.getStorageSync('crossTable');
				//obj.shuliang = obj.shuliang - this.ruleForm.shuliang
                if((parseFloat(obj.shuliang) - parseFloat(this.ruleForm.shuliang))<0){
					this.$utils.msg("数量不足");
					return
				}
				if((!this.ruleForm.chanpinmingcheng)){
					this.$utils.msg(`产品名称不能为空`);
					return
				}
				if((!this.ruleForm.chanpinleixing)){
					this.$utils.msg(`产品类型不能为空`);
					return
				}
				if((!this.ruleForm.kehumingcheng)){
					this.$utils.msg(`客户名称不能为空`);
					return
				}
				if(this.ruleForm.lianxidianhua&&(!this.$validate.isMobile(this.ruleForm.lianxidianhua))){
					this.$utils.msg(`联系电话应输入手机格式`);
					return
				}
				if((!this.ruleForm.jiage)){
					this.$utils.msg(`价格不能为空`);
					return
				}
				if(this.ruleForm.jiage&&(!this.$validate.isNumber(this.ruleForm.jiage))){
					this.$utils.msg(`价格应输入数字`);
					return
				}
				if((!this.ruleForm.shuliang)){
					this.$utils.msg(`数量不能为空`);
					return
				}
				if(this.ruleForm.shuliang&&(!this.$validate.isIntNumer(this.ruleForm.shuliang))){
					this.$utils.msg(`数量应输入整数`);
					return
				}
				if(this.ruleForm.zongjiage&&(!this.$validate.isNumber(this.ruleForm.zongjiage))){
					this.$utils.msg(`总价格应输入数字`);
					return
				}
				if(this.ruleForm.shouji&&(!this.$validate.isMobile(this.ruleForm.shouji))){
					this.$utils.msg(`手机应输入手机格式`);
					return
				}
				//更新跨表属性
			       var crossuserid;
			       var crossrefid;
			       var crossoptnum;
				if(this.cross){
					var statusColumnName = uni.getStorageSync('statusColumnName');
					var statusColumnValue = uni.getStorageSync('statusColumnValue');
					if(statusColumnName!='') {
                        if(!obj) {
						    obj = uni.getStorageSync('crossObj');
                        }
						if(!statusColumnName.startsWith("[")) {
							for (var o in obj){
								if(o==statusColumnName){
									obj[o] = statusColumnValue;
								}

							}
							var table = uni.getStorageSync('crossTable');
							await this.$api.update(`${table}`, obj);
						} else {
						       crossuserid=Number(uni.getStorageSync('userid'));
						       crossrefid=obj['id'];
						       crossoptnum=uni.getStorageSync('statusColumnName');
						       crossoptnum=crossoptnum.replace(/\[/,"").replace(/\]/,"");
						}
					}
				}
				if(crossrefid && crossuserid) {
					this.ruleForm.crossuserid=crossuserid;
					this.ruleForm.crossrefid=crossrefid;
					let params = {
						page: 1,
						limit:10,
						crossuserid:crossuserid,
						crossrefid:crossrefid,
					}
					let res = await this.$api.list(`dingdanxinxi`, params);
					if (res.data.total >= crossoptnum) {
						this.$utils.msg(uni.getStorageSync('tips'));
						return false;
					} else {
                //跨表计算
                        if(!obj) {
                            obj = uni.getStorageSync('crossObj');
                        }
                        var table = uni.getStorageSync('crossTable');
                        obj.shuliang = parseFloat(obj.shuliang) - parseFloat(this.ruleForm.shuliang)
                        await this.$api.update(`${table}`, obj);
						if(this.ruleForm.id){
							await this.$api.update(`dingdanxinxi`, this.ruleForm);
						}else{
							await this.$api.add(`dingdanxinxi`, this.ruleForm);
						}
						this.$utils.msgBack('提交成功');
					}
				} 
				else {
                //跨表计算
                    if(!obj) {
                        obj = uni.getStorageSync('crossObj');
                    }
                    var table = uni.getStorageSync('crossTable');
                    obj.shuliang = obj.shuliang - this.ruleForm.shuliang
                    await this.$api.update(`${table}`, obj);
					if(this.ruleForm.id){
						await this.$api.update(`dingdanxinxi`, this.ruleForm);
					}else{
						await this.$api.add(`dingdanxinxi`, this.ruleForm);
					}
					this.$utils.msgBack('提交成功');
				}
			},
			optionsChange(e) {
				this.index = e.target.value
			},
			bindDateChange(e) {
				this.date = e.target.value
			},
			getDate(type) {
				const date = new Date();
				let year = date.getFullYear();
				let month = date.getMonth() + 1;
				let day = date.getDate();
				if (type === 'start') {
					year = year - 60;
				} else if (type === 'end') {
					year = year + 2;
				}
				month = month > 9 ? month : '0' + month;;
				day = day > 9 ? day : '0' + day;
				return `${year}-${month}-${day}`;
			},
			toggleTab(str) {
				this.$refs[str].show();
			}
		}
	}
</script>

<style lang="scss" scoped>
	.content {
		min-height: calc(100vh - 44px);
		box-sizing: border-box;
	}
</style>
