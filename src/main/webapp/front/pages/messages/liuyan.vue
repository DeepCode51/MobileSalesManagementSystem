<template>
<view class="content">
	<view :style='{"minHeight":"100vh","padding":"0px","borderColor":"#21d5ae","background":"url(http://codegen.caihongy.cn/20221227/38bdf285653f4e2580978aa4e42be204.gif) no-repeat center top / 100% auto,url(http://codegen.caihongy.cn/20221227/981928ff5e8b4de0bd3f18588ef6cb0f.png) fixed repeat center top,#959bd9","borderWidth":"0px 0 0","width":"100%","position":"relative","borderStyle":"dashed","height":"auto"}'>
		<form :style='{"width":"100%","padding":"60rpx 40rpx","background":"none","display":"block","height":"auto"}'>
			<view :style='{"padding":"0 0px 0px","boxShadow":"inset 0px 0px 0px 0px #f9edd9","margin":"0 0 40rpx","borderColor":"#c8c8ef","alignItems":"center","display":"flex","minHeight":"100rpx","borderRadius":"0px","borderWidth":"0px 0px 8rpx 0px","background":"linear-gradient(180deg, rgba(255,255,255,1) 31%, rgba(232,232,255,1) 100%)","width":"100%","borderStyle":"dotted dashed solid","height":"auto"}'>
				<input :style='{"border":"0","padding":"0px 100rpx","margin":"0px","color":"#333","borderRadius":"8rpx","flex":"1","background":"rgba(255, 255, 255, 0)","fontSize":"28rpx","height":"80rpx"}' disabled="true" v-model="ruleForm.username" placeholder="留言人用户名"></input>
			</view>
			<view :style='{"padding":"0 0px 0px","boxShadow":"inset 0px 0px 0px 0px #f9edd9","margin":"0 0 40rpx","borderColor":"#c8c8ef","alignItems":"center","display":"flex","minHeight":"100rpx","borderRadius":"0px","borderWidth":"0px 0px 8rpx 0px","background":"linear-gradient(180deg, rgba(255,255,255,1) 31%, rgba(232,232,255,1) 100%)","width":"100%","borderStyle":"dotted dashed solid","height":"auto"}'>
				<textarea :style='{"border":"0","minHeight":"240rpx","padding":"40rpx 40rpx 64rpx","margin":"0px","color":"#333","borderRadius":"8rpx","flex":"1","background":"none","fontSize":"28rpx"}' v-model="ruleForm.content" placeholder="留言内容"></textarea>
			</view>
			<view @tap="uploadTap" :style='{"padding":"0 0px 0px","boxShadow":"inset 0px 0px 0px 0px #f9edd9","margin":"0 0 40rpx","borderColor":"#c8c8ef","alignItems":"center","display":"flex","minHeight":"100rpx","borderRadius":"0px","borderWidth":"0px 0px 8rpx 0px","background":"linear-gradient(180deg, rgba(255,255,255,1) 31%, rgba(232,232,255,1) 100%)","width":"100%","borderStyle":"dotted dashed solid","height":"auto"}'>
				<image :style='{"width":"80rpx","margin":"0 0 0 100rpx","borderRadius":"100%","objectFit":"cover","display":"block","height":"80rpx"}' class="avator" v-if="ruleForm.cpicture" :src="baseUrl+ruleForm.cpicture" mode="aspectFill"></image>
				<image :style='{"width":"80rpx","margin":"0 0 0 100rpx","borderRadius":"100%","objectFit":"cover","display":"block","height":"80rpx"}' class="avator" v-else src="../../static/gen/upload.png" mode="aspectFill"></image>
			</view>
			<view :style='{"width":"100%","justifyContent":"center","display":"flex","height":"auto"}'>
				<button :style='{"padding":"0 40rpx","boxShadow":"2rpx 8rpx 0px #cfcfe3","margin":"32rpx 20rpx","borderColor":"#9F9FEC","color":"#333","minWidth":"240rpx","borderRadius":"40rpx","background":"#eaeafa","borderWidth":"2rpx 8rpx 2rpx","width":"auto","lineHeight":"80rpx","fontSize":"28rpx","borderStyle":"dashed","height":"80rpx"}' @tap="onSubmitTap" class="bg-red margin-tb-sm">提交</button>
			</view>
		</form>
	</view>
</view>
</template>

<script>
	export default {
		data() {
			return {
				ruleForm: {
					userid: '',
					username: '',
					content: '',
					reply: '',
					cpicture: '',
				},
				user: {}
			}
		},
		computed: {
			baseUrl() {
				return this.$base.url;
			}
		},
		async onLoad(options) {
			let table = uni.getStorageSync("nowTable");
			// 获取用户信息
			let res = await this.$api.session(table);
			this.user = res.data;
			// 如果有登陆，获取登陆后保存的userid
			this.ruleForm.userid = uni.getStorageSync("userid")
            if(table == `yonghu`){
                this.ruleForm.username = this.user.yonghuming
            }
			this.styleChange()
		},
		methods: {
			uploadTap() {
				let _this = this;
				this.$api.upload(function(res) {
					_this.ruleForm.cpicture = 'upload/' + res.file;
					_this.$forceUpdate();
					_this.$nextTick(()=>{
						_this.styleChange()
					})
				});
			},
			styleChange() {
				this.$nextTick(()=>{
					// document.querySelectorAll('.my-publish-pv .uni-input-input').forEach(el=>{
					//   el.style.backgroundColor = this.myPublishForm.content.input.backgroundColor
					// })
				})
			},
			async onSubmitTap() {
				if(this.ruleForm.content){
                    this.ruleForm.avatarurl = uni.getStorageSync('headportrait')?uni.getStorageSync('headportrait'):'';
					await this.$api.add(`messages`, this.ruleForm);
					this.$utils.msgBack('提交成功');
				}else{
					this.$utils.msg("请填写留言内容")
				}
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
