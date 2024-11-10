<template>
	<view class="content">
		<view class="box" :style='{"minHeight":"100vh","width":"100%","padding":"300rpx 80rpx 80rpx","background":"url(http://codegen.caihongy.cn/20221227/38bdf285653f4e2580978aa4e42be204.gif) no-repeat center top / 100% auto,url(http://codegen.caihongy.cn/20221227/1b3cabc828754c6b9bbce1e79586ad11.gif) no-repeat center top / 100% auto,url(http://codegen.caihongy.cn/20221227/589d8c6e0832418f9d0f7a67ce7103ca.jpg) no-repeat center top / 100% 100%","height":"100%"}'>
			<view :style='{"padding":"60rpx 60rpx","boxShadow":"0px 16rpx 0px #9595cf","borderColor":"#bbbbe1","borderRadius":"48rpx","background":"#ffffff","borderWidth":"0 0 16rpx","display":"block","width":"100%","borderStyle":"solid","height":"auto"}'>
				<image :style='{"width":"160rpx","margin":"0 auto","borderRadius":"8rpx","objectFit":"cover","display":"none","height":"auto"}' src="http://codegen.caihongy.cn/20221227/731dc465845840d5899045d67b35f57a.png" mode="aspectFill"></image>
				<view v-if="loginType==1" :style='{"width":"100%","margin":"0 0 40rpx","borderRadius":"12rpx","background":"none","height":"auto"}' class="uni-form-item uni-column">
					<input v-model="username" :style='{"padding":"0px 40rpx","boxShadow":"0px 0px 0px #2c77cb","margin":"0px","borderColor":"#eee","color":"#555","borderRadius":"16rpx","background":"#ececee","borderWidth":"0 0 0px","width":"100%","fontSize":"28rpx","borderStyle":"solid","height":"80rpx"}' type="text" class="uni-input" name="" placeholder="请输入账号" />
				</view>
				<view v-if="loginType==1" :style='{"width":"100%","margin":"0 0 40rpx","borderRadius":"12rpx","background":"none","height":"auto"}' class="uni-form-item uni-column">
					<input v-model="password" :style='{"padding":"0px 40rpx","boxShadow":"0px 0px 0px #2c77cb","margin":"0px","borderColor":"#eee","color":"#555","borderRadius":"16rpx","background":"#ececee","borderWidth":"0 0 0px","width":"100%","fontSize":"28rpx","borderStyle":"solid","height":"80rpx"}' type="password" class="uni-input" name="" placeholder="请输入密码" />
				</view>
				<picker v-if="roleNum>1" :style='{"boxShadow":"0px 0px 0px #2c77cb","margin":"0 0 48rpx 0","borderColor":"#eee","borderRadius":"16rpx","background":"#ececee","borderWidth":"0 0 2rpx","width":"100%","borderStyle":"solid","height":"auto"}' @change="optionsChange" :value="index" :range="options">
					<view class="uni-picker-type" :style='{"width":"100%","padding":"0 40rpx","lineHeight":"80rpx","fontSize":"28rpx","color":"#666"}'>{{options[index]}}</view>
				</picker>
				<button v-if="loginType==1" class="btn-submit" @tap="onLoginTap" type="primary" :style='{"padding":"0px","boxShadow":"0px 0px 0px #82d1e8","margin":"80rpx auto 24rpx","borderColor":"#ef6d0d","color":"#fff","display":"block","borderRadius":"16rpx","background":"#5959d9","borderWidth":"0 0 0px","width":"100%","lineHeight":"80rpx","fontSize":"32rpx","borderStyle":"solid","height":"80rpx"}'>登录</button>
				<button v-if="loginType==2" class="btn-submit" @tap="onFaceLoginTap" type="primary" :style='{"padding":"0px","boxShadow":"0px 0px 0px #82d1e8","margin":"80rpx auto 24rpx","borderColor":"#ef6d0d","color":"#fff","display":"block","borderRadius":"16rpx","background":"#5959d9","borderWidth":"0 0 0px","width":"100%","lineHeight":"80rpx","fontSize":"32rpx","borderStyle":"solid","height":"80rpx"}'>人脸识别登录</button>
				<view class="links" :style='{"boxShadow":"0px 0px 0px #eee","padding":"0","margin":"0","borderRadius":"0px","alignItems":"flex-start","flexWrap":"wrap","background":"none","display":"block","width":"100%","justifyContent":"center","height":"auto"}'>
					<view class="link-highlight" @tap="onRegisterTap('yonghu')" :style='{"border":"0px solid #fc7cad","padding":"16rpx 8rpx 0px","margin":"0px 8rpx 16rpx 0","color":"#333","borderRadius":"16rpx","textAlign":"left","background":"none","display":"inline-block","width":"auto","fontSize":"28rpx","order":"2"}'>注册用户</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	import menu from '@/utils/menu'
	export default {
		data() {
			return {
				username: '',
				password: '',
                loginType:1,
				codes: [{
				  num: 1,
				  color: '#000',
				  rotate: '10deg',
				  size: '16px'
				}, {
				  num: 2,
				  color: '#000',
				  rotate: '10deg',
				  size: '16px'
				}, {
				  num: 3,
				  color: '#000',
				  rotate: '10deg',
				  size: '16px'
				}, {
				  num: 4,
				  color: '#000',
				  rotate: '10deg',
				  size: '16px'
				}],
				options: [
					'请选择登录用户类型'
				],
                optionsValues: [
					'',
                    'yonghu',
				],
				index: 0,
				roleNum:0
			}
		},
		onLoad() {
			let options = ['请选择登录用户类型'];
			let menus = menu.list();
			this.menuList = menus;
			for(let i=0;i<this.menuList.length;i++){
				if(this.menuList[i].hasFrontLogin=='是'){
					options.push(this.menuList[i].roleName);
					this.roleNum++;
				}
			}
			if(this.roleNum==1) {
				this.index = 1;
			}	
			this.options = options;
			this.styleChange()
		},
		methods: {
			styleChange() {
				this.$nextTick(()=>{
					// document.querySelectorAll('.uni-input .uni-input-input').forEach(el=>{
					//   el.style.backgroundColor = this.loginFrom.content.input.backgroundColor
					// })
				})
			},
			onRegisterTap(tableName) {
                uni.setStorageSync("loginTable", tableName);
				this.$utils.jump('../register/register')
			},
			async onLoginTap() {
                if (!this.username) {
					this.$utils.msg('请输入用户名')
					return
				}
                if (!this.password) {
					this.$utils.msg('请输入用户密码')
					return
				}
                if (!this.optionsValues[this.index]) {
					this.$utils.msg('请选择登陆用户类型')
					return
				}
				let res = await this.$api.login(`${this.optionsValues[this.index]}`, {
					username: this.username,
					password: this.password
				});
                uni.removeStorageSync("useridTag");
				uni.setStorageSync("token", res.token);
				uni.setStorageSync("nickname",this.username);
				uni.setStorageSync("nowTable", `${this.optionsValues[this.index]}`);
				res = await this.$api.session(`${this.optionsValues[this.index]}`);
                if(res.data.touxiang) {
                    uni.setStorageSync('headportrait', res.data.touxiang);
                } else if(res.data.headportrait) {
                    uni.setStorageSync('headportrait', res.data.headportrait);
                }
				// 保存用户id
				uni.setStorageSync("userid", res.data.id);
				if(res.data.vip) {
					uni.setStorageSync("vip", res.data.vip);
				}
				uni.setStorageSync("role", `${this.options[this.index]}`);
				this.$utils.tab('../index/index');
			},
			optionsChange(e) {
				this.index = e.target.value
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
