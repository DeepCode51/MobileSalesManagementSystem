<template>
<view class="content">
	<view :style='{"minHeight":"100vh","padding":"0px","borderColor":"#21d5ae","background":"url(http://codegen.caihongy.cn/20221227/38bdf285653f4e2580978aa4e42be204.gif) no-repeat center top / 100% auto,url(http://codegen.caihongy.cn/20221227/981928ff5e8b4de0bd3f18588ef6cb0f.png) fixed repeat center top,#959bd9","borderWidth":"0px 0 0","width":"100%","position":"relative","borderStyle":"dashed","height":"auto"}'>
		<form :style='{"width":"100%","padding":"60rpx 40rpx","background":"none","height":"auto"}' class="app-update-pv">
			<view :style='{"padding":"0 20rpx 40rpx","boxShadow":"inset 0px 0px 0px 0px #f9edd9","margin":"0 0 32rpx","borderColor":"#c8c8ef","borderRadius":"0px","borderWidth":"0px 0px 8rpx 0px","background":"linear-gradient(180deg, rgba(255,255,255,1) 31%, rgba(232,232,255,1) 100%)","display":"flex","width":"100%","lineHeight":"100rpx","borderStyle":"dotted dashed solid","height":"auto"}' class="">
				<view :style='{"width":"160rpx","padding":"0 20rpx 0 0","fontSize":"28rpx","color":"#333","textAlign":"right"}' class="title">用户名</view>
				<input :style='{"border":"0","padding":"0px 20rpx","margin":"0px","color":"#333","borderRadius":"8rpx","flex":"1","background":"rgba(255, 255, 255, 0)","fontSize":"28rpx"}' :disabled="ro.yonghuming" v-model="ruleForm.yonghuming" placeholder="用户名"></input>
			</view>
			<view :style='{"padding":"0 20rpx 40rpx","boxShadow":"inset 0px 0px 0px 0px #f9edd9","margin":"0 0 32rpx","borderColor":"#c8c8ef","borderRadius":"0px","borderWidth":"0px 0px 8rpx 0px","background":"linear-gradient(180deg, rgba(255,255,255,1) 31%, rgba(232,232,255,1) 100%)","display":"flex","width":"100%","lineHeight":"100rpx","borderStyle":"dotted dashed solid","height":"auto"}' class="">
				<view :style='{"width":"160rpx","padding":"0 20rpx 0 0","fontSize":"28rpx","color":"#333","textAlign":"right"}' class="title">密码</view>
				<input :style='{"border":"0","padding":"0px 20rpx","margin":"0px","color":"#333","borderRadius":"8rpx","flex":"1","background":"rgba(255, 255, 255, 0)","fontSize":"28rpx"}' :disabled="ro.mima" v-model="ruleForm.mima" placeholder="密码"></input>
			</view>
			<view :style='{"padding":"0 20rpx 40rpx","boxShadow":"inset 0px 0px 0px 0px #f9edd9","margin":"0 0 32rpx","borderColor":"#c8c8ef","borderRadius":"0px","borderWidth":"0px 0px 8rpx 0px","background":"linear-gradient(180deg, rgba(255,255,255,1) 31%, rgba(232,232,255,1) 100%)","display":"flex","width":"100%","lineHeight":"100rpx","borderStyle":"dotted dashed solid","height":"auto"}' class="">
				<view :style='{"width":"160rpx","padding":"0 20rpx 0 0","fontSize":"28rpx","color":"#333","textAlign":"right"}' class="title">姓名</view>
				<input :style='{"border":"0","padding":"0px 20rpx","margin":"0px","color":"#333","borderRadius":"8rpx","flex":"1","background":"rgba(255, 255, 255, 0)","fontSize":"28rpx"}' :disabled="ro.xingming" v-model="ruleForm.xingming" placeholder="姓名"></input>
			</view>
			<view :style='{"padding":"0 20rpx 40rpx","boxShadow":"inset 0px 0px 0px 0px #f9edd9","margin":"0 0 32rpx","borderColor":"#c8c8ef","borderRadius":"0px","borderWidth":"0px 0px 8rpx 0px","background":"linear-gradient(180deg, rgba(255,255,255,1) 31%, rgba(232,232,255,1) 100%)","display":"flex","width":"100%","lineHeight":"100rpx","borderStyle":"dotted dashed solid","height":"auto"}' class=" select">
				<view :style='{"width":"160rpx","padding":"0 20rpx 0 0","fontSize":"28rpx","color":"#333","textAlign":"right"}' class="title">性别</view>
				<picker :style='{"width":"100%","flex":"1","height":"auto"}' @change="xingbieChange" :value="xingbieIndex"  :range="xingbieOptions">
					<view :style='{"color":"#333","width":"100%","fontSize":"28rpx"}' class="uni-input">{{ruleForm.xingbie?ruleForm.xingbie:"请选择性别"}}</view>
				</picker>
			</view>
			<view :style='{"padding":"0 20rpx 40rpx","boxShadow":"inset 0px 0px 0px 0px #f9edd9","margin":"0 0 32rpx","borderColor":"#c8c8ef","borderRadius":"0px","borderWidth":"0px 0px 8rpx 0px","background":"linear-gradient(180deg, rgba(255,255,255,1) 31%, rgba(232,232,255,1) 100%)","display":"flex","width":"100%","lineHeight":"100rpx","borderStyle":"dotted dashed solid","height":"auto"}' class="" @tap="touxiangTap">
				<view :style='{"width":"160rpx","padding":"0 20rpx 0 0","fontSize":"28rpx","color":"#333","textAlign":"right"}' class="title">头像</view>
				<image :style='{"width":"72rpx","margin":"12rpx 0","borderRadius":"100%","objectFit":"cover","display":"block","height":"72rpx"}' class="avator" v-if="ruleForm.touxiang" :src="baseUrl+ruleForm.touxiang.split(',')[0]" mode="aspectFill"></image>
				<image :style='{"width":"72rpx","margin":"12rpx 0","borderRadius":"100%","objectFit":"cover","display":"block","height":"72rpx"}' class="avator" v-else src="../../static/gen/upload.png" mode="aspectFill"></image>
			</view>
			<view :style='{"padding":"0 20rpx 40rpx","boxShadow":"inset 0px 0px 0px 0px #f9edd9","margin":"0 0 32rpx","borderColor":"#c8c8ef","borderRadius":"0px","borderWidth":"0px 0px 8rpx 0px","background":"linear-gradient(180deg, rgba(255,255,255,1) 31%, rgba(232,232,255,1) 100%)","display":"flex","width":"100%","lineHeight":"100rpx","borderStyle":"dotted dashed solid","height":"auto"}' class="">
				<view :style='{"width":"160rpx","padding":"0 20rpx 0 0","fontSize":"28rpx","color":"#333","textAlign":"right"}' class="title">年龄</view>
				<input :style='{"border":"0","padding":"0px 20rpx","margin":"0px","color":"#333","borderRadius":"8rpx","flex":"1","background":"rgba(255, 255, 255, 0)","fontSize":"28rpx"}' :disabled="ro.nianling" v-model="ruleForm.nianling" placeholder="年龄"></input>
			</view>
			<view :style='{"padding":"0 20rpx 40rpx","boxShadow":"inset 0px 0px 0px 0px #f9edd9","margin":"0 0 32rpx","borderColor":"#c8c8ef","borderRadius":"0px","borderWidth":"0px 0px 8rpx 0px","background":"linear-gradient(180deg, rgba(255,255,255,1) 31%, rgba(232,232,255,1) 100%)","display":"flex","width":"100%","lineHeight":"100rpx","borderStyle":"dotted dashed solid","height":"auto"}' class="">
				<view :style='{"width":"160rpx","padding":"0 20rpx 0 0","fontSize":"28rpx","color":"#333","textAlign":"right"}' class="title">手机</view>
				<input :style='{"border":"0","padding":"0px 20rpx","margin":"0px","color":"#333","borderRadius":"8rpx","flex":"1","background":"rgba(255, 255, 255, 0)","fontSize":"28rpx"}' :disabled="ro.shouji" v-model="ruleForm.shouji" placeholder="手机"></input>
			</view>
			<view :style='{"padding":"0 20rpx 40rpx","boxShadow":"inset 0px 0px 0px 0px #f9edd9","margin":"0 0 32rpx","borderColor":"#c8c8ef","borderRadius":"0px","borderWidth":"0px 0px 8rpx 0px","background":"linear-gradient(180deg, rgba(255,255,255,1) 31%, rgba(232,232,255,1) 100%)","display":"flex","width":"100%","lineHeight":"100rpx","borderStyle":"dotted dashed solid","height":"auto"}' class="">
				<view :style='{"width":"160rpx","padding":"0 20rpx 0 0","fontSize":"28rpx","color":"#333","textAlign":"right"}' class="title">邮箱</view>
				<input :style='{"border":"0","padding":"0px 20rpx","margin":"0px","color":"#333","borderRadius":"8rpx","flex":"1","background":"rgba(255, 255, 255, 0)","fontSize":"28rpx"}' :disabled="ro.youxiang" v-model="ruleForm.youxiang" placeholder="邮箱"></input>
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
				yonghuming: '',
				mima: '',
				xingming: '',
				xingbie: '',
				touxiang: '',
				nianling: '',
				shouji: '',
				youxiang: '',
				},
				xingbieOptions: [],
				xingbieIndex: 0,
				// 登陆用户信息
				user: {},
                ro:{
                   yonghuming : false,
                   mima : false,
                   xingming : false,
                   xingbie : false,
                   touxiang : false,
                   nianling : false,
                   shouji : false,
                   youxiang : false,
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



		},
		async onLoad(options) {
			let table = uni.getStorageSync("nowTable");
			// 获取用户信息
			let res = await this.$api.session(table);
			this.user = res.data;
			
			// ss读取


			// 自定义下拉框值
			this.xingbieOptions = "男,女".split(',')

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
				res = await this.$api.info(`yonghu`, this.ruleForm.id);
				this.ruleForm = res.data;
			}
			// 跨表
			this.cross = options.cross;
			if(options.cross){
				var obj = uni.getStorageSync('crossObj');
				for (var o in obj){
					if(o=='yonghuming'){
					this.ruleForm.yonghuming = obj[o];
					this.ro.yonghuming = true;
					continue;
					}
					if(o=='mima'){
					this.ruleForm.mima = obj[o];
					this.ro.mima = true;
					continue;
					}
					if(o=='xingming'){
					this.ruleForm.xingming = obj[o];
					this.ro.xingming = true;
					continue;
					}
					if(o=='xingbie'){
					this.ruleForm.xingbie = obj[o];
					this.ro.xingbie = true;
					continue;
					}
					if(o=='touxiang'){
					this.ruleForm.touxiang = obj[o].split(",")[0];
					this.ro.touxiang = true;
					continue;
					}
					if(o=='nianling'){
					this.ruleForm.nianling = obj[o];
					this.ro.nianling = true;
					continue;
					}
					if(o=='shouji'){
					this.ruleForm.shouji = obj[o];
					this.ro.shouji = true;
					continue;
					}
					if(o=='youxiang'){
					this.ruleForm.youxiang = obj[o];
					this.ro.youxiang = true;
					continue;
					}
				}
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

			// 多级联动参数



			// 下拉变化
			xingbieChange(e) {
				this.xingbieIndex = e.target.value
				this.ruleForm.xingbie = this.xingbieOptions[this.xingbieIndex]
			},

			touxiangTap() {
				let _this = this;
				this.$api.upload(function(res) {
					_this.ruleForm.touxiang = 'upload/' + res.file;
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

















//跨表计算判断
				var obj;
				if((!this.ruleForm.yonghuming)){
					this.$utils.msg(`用户名不能为空`);
					return
				}
				if((!this.ruleForm.mima)){
					this.$utils.msg(`密码不能为空`);
					return
				}
				if(this.ruleForm.shouji&&(!this.$validate.isMobile(this.ruleForm.shouji))){
					this.$utils.msg(`手机应输入手机格式`);
					return
				}
				if(this.ruleForm.youxiang&&(!this.$validate.isEmail(this.ruleForm.youxiang))){
					this.$utils.msg(`邮箱应输入邮件格式`);
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
					let res = await this.$api.list(`yonghu`, params);
					if (res.data.total >= crossoptnum) {
						this.$utils.msg(uni.getStorageSync('tips'));
						return false;
					} else {
                //跨表计算
						if(this.ruleForm.id){
							await this.$api.update(`yonghu`, this.ruleForm);
						}else{
							await this.$api.add(`yonghu`, this.ruleForm);
						}
						this.$utils.msgBack('提交成功');
					}
				} else {
                //跨表计算
					if(this.ruleForm.id){
						await this.$api.update(`yonghu`, this.ruleForm);
					}else{
						await this.$api.add(`yonghu`, this.ruleForm);
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
