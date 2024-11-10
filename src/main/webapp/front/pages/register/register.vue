<template>
<view class="content">
	<view class="box" :style='{"minHeight":"100vh","width":"100%","padding":"100rpx 80rpx 120rpx","background":"url(http://codegen.caihongy.cn/20221227/38bdf285653f4e2580978aa4e42be204.gif) no-repeat center top / 100% auto,url(http://codegen.caihongy.cn/20221227/589d8c6e0832418f9d0f7a67ce7103ca.jpg) no-repeat center top / 100% 100%","height":"100%"}'>
		<view :style='{"padding":"60rpx 60rpx","boxShadow":"0px 16rpx 0px #9595cf","borderColor":"#bbbbe1","borderRadius":"48rpx","background":"#ffffff","borderWidth":"0 0 16rpx","display":"block","width":"100%","borderStyle":"solid","height":"auto"}'>
			<image :style='{"width":"160rpx","margin":"0 auto 40rpx auto","borderRadius":"8rpx","display":"none","height":"160rpx"}' src="http://codegen.caihongy.cn/20201114/7856ba26477849ea828f481fa2773a95.jpg" mode="aspectFill"></image>
			<view :style='{"width":"100%","margin":"0 0 40rpx 0","height":"auto"}' v-if="tableName=='yonghu'" class="uni-form-item uni-column">
				<input :style='{"padding":"0px 40rpx","boxShadow":"0px 0px 0px #2c77cb","margin":"0px","borderColor":"#eee","color":"#555","borderRadius":"16rpx","background":"#ececee","borderWidth":"0 0 2rpx","width":"100%","fontSize":"28rpx","borderStyle":"solid","height":"80rpx"}'  v-model="ruleForm.yonghuming"  type="text"  class="uni-input" name="" placeholder="用户名" />
			</view>
			<view :style='{"width":"100%","margin":"0 0 40rpx 0","height":"auto"}' v-if="tableName=='yonghu'" class="uni-form-item uni-column">
				<input :style='{"padding":"0px 40rpx","boxShadow":"0px 0px 0px #2c77cb","margin":"0px","borderColor":"#eee","color":"#555","borderRadius":"16rpx","background":"#ececee","borderWidth":"0 0 2rpx","width":"100%","fontSize":"28rpx","borderStyle":"solid","height":"80rpx"}'  v-model="ruleForm.mima" type="password"  class="uni-input" name="" placeholder="密码" />
			</view>
			<view :style='{"width":"100%","margin":"0 0 40rpx 0","height":"auto"}' v-if="tableName=='yonghu'" class="uni-form-item uni-column">
				<input :style='{"padding":"0px 40rpx","boxShadow":"0px 0px 0px #2c77cb","margin":"0px","borderColor":"#eee","color":"#555","borderRadius":"16rpx","background":"#ececee","borderWidth":"0 0 2rpx","width":"100%","fontSize":"28rpx","borderStyle":"solid","height":"80rpx"}' v-model="ruleForm.mima2" type="password" class="uni-input" name="" placeholder="确认密码" />
			</view>
			<view :style='{"width":"100%","margin":"0 0 40rpx 0","height":"auto"}' v-if="tableName=='yonghu'" class="uni-form-item uni-column">
				<input :style='{"padding":"0px 40rpx","boxShadow":"0px 0px 0px #2c77cb","margin":"0px","borderColor":"#eee","color":"#555","borderRadius":"16rpx","background":"#ececee","borderWidth":"0 0 2rpx","width":"100%","fontSize":"28rpx","borderStyle":"solid","height":"80rpx"}'  v-model="ruleForm.xingming"  type="text"  class="uni-input" name="" placeholder="姓名" />
			</view>
			<picker :style='{"boxShadow":"0px 0px 0px #2c77cb","margin":"24rpx 0 24rpx 0","borderColor":"#eee","borderRadius":"16rpx","background":"#ececee","borderWidth":"0 0 2rpx","width":"100%","borderStyle":"solid","height":"auto"}' v-if="tableName=='yonghu'"  @change="yonghuxingbieChange" :value="yonghuxingbieIndex" :range="yonghuxingbieOptions">
				<view :style='{"width":"100%","padding":"0 40rpx","lineHeight":"80rpx","fontSize":"28rpx","color":"#555"}' class="uni-input">{{ruleForm.xingbie?ruleForm.xingbie:"请选择性别"}}</view>
			</picker>
            <view :style='{"width":"100%","margin":"0 0 40rpx 0","height":"auto"}' v-if="tableName=='yonghu'" @tap="yonghutouxiangTap" class="">
                <view>请上传头像</view>
                <image :style='{"border":"2rpx solid #eee","padding":"0","margin":"0 0 0 0px","borderRadius":"16rpx","objectFit":"cover","display":"block","width":"200rpx","height":"120rpx"}' v-if="ruleForm.touxiang" class="avator" :src="baseUrl+ruleForm.touxiang" mode=""></image>
                <image :style='{"border":"2rpx solid #eee","padding":"0","margin":"0 0 0 0px","borderRadius":"16rpx","objectFit":"cover","display":"block","width":"200rpx","height":"120rpx"}' v-else class="avator" src="../../static/gen/upload.png" mode=""></image>
            </view>
			<view :style='{"width":"100%","margin":"0 0 40rpx 0","height":"auto"}' v-if="tableName=='yonghu'" class="uni-form-item uni-column">
				<input :style='{"padding":"0px 40rpx","boxShadow":"0px 0px 0px #2c77cb","margin":"0px","borderColor":"#eee","color":"#555","borderRadius":"16rpx","background":"#ececee","borderWidth":"0 0 2rpx","width":"100%","fontSize":"28rpx","borderStyle":"solid","height":"80rpx"}'  v-model="ruleForm.nianling"  type="text"  class="uni-input" name="" placeholder="年龄" />
			</view>
			<view :style='{"width":"100%","margin":"0 0 40rpx 0","height":"auto"}' v-if="tableName=='yonghu'" class="uni-form-item uni-column">
				<input :style='{"padding":"0px 40rpx","boxShadow":"0px 0px 0px #2c77cb","margin":"0px","borderColor":"#eee","color":"#555","borderRadius":"16rpx","background":"#ececee","borderWidth":"0 0 2rpx","width":"100%","fontSize":"28rpx","borderStyle":"solid","height":"80rpx"}'  v-model="ruleForm.shouji"  type="text"  class="uni-input" name="" placeholder="手机" />
			</view>
			<view :style='{"width":"100%","margin":"0 0 40rpx 0","height":"auto"}' v-if="tableName=='yonghu'" class="uni-form-item uni-column">
				<input :style='{"padding":"0px 40rpx","boxShadow":"0px 0px 0px #2c77cb","margin":"0px","borderColor":"#eee","color":"#555","borderRadius":"16rpx","background":"#ececee","borderWidth":"0 0 2rpx","width":"100%","fontSize":"28rpx","borderStyle":"solid","height":"80rpx"}'  v-model="ruleForm.youxiang"  type="text"  class="uni-input" name="" placeholder="邮箱" />
			</view>
			<button :style='{"padding":"0px","boxShadow":"0px 0px 0px #82d1e8","margin":"60rpx auto 24rpx","borderColor":"#ef6d0d","color":"#fff","display":"block","borderRadius":"16rpx","background":"#5959d9","borderWidth":"0 0 0px","width":"100%","lineHeight":"80rpx","fontSize":"32rpx","borderStyle":"solid","height":"80rpx"}' class="btn-submit" @tap="register" type="primary">注册</button>
		</view>
	</view>
</view>
</template>

<script>
	export default {
		data() {
			return {
                yonghuxingbieOptions: [],
                yonghuxingbieIndex: 0,
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
				tableName:""
			}
		},
        computed: {
            baseUrl() {
                return this.$base.url;
            }
        },
		async onLoad() {
			let res = [];
			let table = uni.getStorageSync("loginTable");
            this.tableName = table;

                        // 自定义下拉框值
			if(this.tableName=='yonghu'){
                this.yonghuxingbieOptions = "男,女".split(',');
				this.ruleForm.xingbie=this.yonghuxingbieOptions[0]
			}
			
			this.styleChange()
		},
		methods: {

            // 下拉变化
            yonghuxingbieChange(e) {
                    this.yonghuxingbieIndex = e.target.value
                    this.ruleForm.xingbie = this.yonghuxingbieOptions[this.yonghuxingbieIndex]
            },
            yonghutouxiangTap() {
                let _this = this;
                this.$api.upload(function(res) {
                    _this.ruleForm.touxiang = 'upload/' + res.file;
                    _this.$forceUpdate();
                });
            },
            toggleTab(str) {
                this.$refs[str].show();
            },

			styleChange() {
				this.$nextTick(()=>{
					// document.querySelectorAll('.uni-input .uni-input-input').forEach(el=>{
					//   el.style.backgroundColor = this.registerFrom.content.input.backgroundColor
					// })
				})
			},
			// 获取uuid
			getUUID () {
				return new Date().getTime();
			},
			// 注册
			async register() {
				if((!this.ruleForm.yonghuming) && `yonghu` == this.tableName){
					this.$utils.msg(`用户名不能为空`);
					return
				}
				if((!this.ruleForm.mima) && `yonghu` == this.tableName){
					this.$utils.msg(`密码不能为空`);
					return
				}
                if(`yonghu` == this.tableName && (this.ruleForm.mima!=this.ruleForm.mima2)){
                    this.$utils.msg(`两次密码输入不一致`);
                    return
                }
				if(`yonghu` == this.tableName && this.ruleForm.shouji&&(!this.$validate.isMobile(this.ruleForm.shouji))){
					this.$utils.msg(`手机应输入手机格式`);
					return
				}
				if(`yonghu` == this.tableName && this.ruleForm.youxiang&&(!this.$validate.isEmail(this.ruleForm.youxiang))){
					this.$utils.msg(`邮箱应输入邮件格式`);
					return
				}
				await this.$api.register(`${this.tableName}`, this.ruleForm);
				this.$utils.msgBack('注册成功');;
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
