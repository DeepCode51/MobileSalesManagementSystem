<template>
<view class="content">
	<view :style='{"minHeight":"100vh","padding":"0px","borderColor":"#21d5ae","background":"url(http://codegen.caihongy.cn/20221227/38bdf285653f4e2580978aa4e42be204.gif) no-repeat center top / 100% auto,url(http://codegen.caihongy.cn/20221227/981928ff5e8b4de0bd3f18588ef6cb0f.png) fixed repeat center top,#959bd9","borderWidth":"0px 0 0","width":"100%","position":"relative","borderStyle":"dashed","height":"auto"}'>
		<form :style='{"width":"100%","padding":"60rpx 40rpx","background":"none","height":"auto"}' class="app-update-pv">
			<view :style='{"padding":"0 20rpx 40rpx","boxShadow":"inset 0px 0px 0px 0px #f9edd9","margin":"0 0 32rpx","borderColor":"#c8c8ef","borderRadius":"0px","borderWidth":"0px 0px 8rpx 0px","background":"linear-gradient(180deg, rgba(255,255,255,1) 31%, rgba(232,232,255,1) 100%)","display":"flex","width":"100%","lineHeight":"100rpx","borderStyle":"dotted dashed solid","height":"auto"}' class="">
				<view :style='{"width":"160rpx","padding":"0 20rpx 0 0","fontSize":"28rpx","color":"#333","textAlign":"right"}' class="title">标题</view>
				<input :style='{"border":"0","padding":"0px 20rpx","margin":"0px","color":"#333","borderRadius":"8rpx","flex":"1","background":"rgba(255, 255, 255, 0)","fontSize":"28rpx"}' :disabled="ro.title" v-model="ruleForm.title" placeholder="标题"></input>
			</view>
			<view :style='{"padding":"0 20rpx 40rpx","boxShadow":"inset 0px 0px 0px 0px #f9edd9","margin":"0 0 32rpx","borderColor":"#c8c8ef","borderRadius":"0px","borderWidth":"0px 0px 8rpx 0px","background":"linear-gradient(180deg, rgba(255,255,255,1) 31%, rgba(232,232,255,1) 100%)","display":"flex","width":"100%","lineHeight":"100rpx","borderStyle":"dotted dashed solid","height":"auto"}' class="">
				<view :style='{"width":"160rpx","padding":"0 20rpx 0 0","fontSize":"28rpx","color":"#333","textAlign":"right"}' class="title">副标题</view>
				<input :style='{"border":"0","padding":"0px 20rpx","margin":"0px","color":"#333","borderRadius":"8rpx","flex":"1","background":"rgba(255, 255, 255, 0)","fontSize":"28rpx"}' :disabled="ro.subtitle" v-model="ruleForm.subtitle" placeholder="副标题"></input>
			</view>
			<view :style='{"padding":"0 20rpx 40rpx","boxShadow":"inset 0px 0px 0px 0px #f9edd9","margin":"0 0 32rpx","borderColor":"#c8c8ef","borderRadius":"0px","borderWidth":"0px 0px 8rpx 0px","background":"linear-gradient(180deg, rgba(255,255,255,1) 31%, rgba(232,232,255,1) 100%)","display":"flex","width":"100%","lineHeight":"100rpx","borderStyle":"dotted dashed solid","height":"auto"}' class="" @tap="picture1Tap">
				<view :style='{"width":"160rpx","padding":"0 20rpx 0 0","fontSize":"28rpx","color":"#333","textAlign":"right"}' class="title">图片1</view>
				<image :style='{"width":"72rpx","margin":"12rpx 0","borderRadius":"100%","objectFit":"cover","display":"block","height":"72rpx"}' class="avator" v-if="ruleForm.picture1" :src="baseUrl+ruleForm.picture1.split(',')[0]" mode="aspectFill"></image>
				<image :style='{"width":"72rpx","margin":"12rpx 0","borderRadius":"100%","objectFit":"cover","display":"block","height":"72rpx"}' class="avator" v-else src="../../static/gen/upload.png" mode="aspectFill"></image>
			</view>
			<view :style='{"padding":"0 20rpx 40rpx","boxShadow":"inset 0px 0px 0px 0px #f9edd9","margin":"0 0 32rpx","borderColor":"#c8c8ef","borderRadius":"0px","borderWidth":"0px 0px 8rpx 0px","background":"linear-gradient(180deg, rgba(255,255,255,1) 31%, rgba(232,232,255,1) 100%)","display":"flex","width":"100%","lineHeight":"100rpx","borderStyle":"dotted dashed solid","height":"auto"}' class="" @tap="picture2Tap">
				<view :style='{"width":"160rpx","padding":"0 20rpx 0 0","fontSize":"28rpx","color":"#333","textAlign":"right"}' class="title">图片2</view>
				<image :style='{"width":"72rpx","margin":"12rpx 0","borderRadius":"100%","objectFit":"cover","display":"block","height":"72rpx"}' class="avator" v-if="ruleForm.picture2" :src="baseUrl+ruleForm.picture2.split(',')[0]" mode="aspectFill"></image>
				<image :style='{"width":"72rpx","margin":"12rpx 0","borderRadius":"100%","objectFit":"cover","display":"block","height":"72rpx"}' class="avator" v-else src="../../static/gen/upload.png" mode="aspectFill"></image>
			</view>
			<view :style='{"padding":"0 20rpx 40rpx","boxShadow":"inset 0px 0px 0px 0px #f9edd9","margin":"0 0 32rpx","borderColor":"#c8c8ef","borderRadius":"0px","borderWidth":"0px 0px 8rpx 0px","background":"linear-gradient(180deg, rgba(255,255,255,1) 31%, rgba(232,232,255,1) 100%)","display":"flex","width":"100%","lineHeight":"100rpx","borderStyle":"dotted dashed solid","height":"auto"}' class="" @tap="picture3Tap">
				<view :style='{"width":"160rpx","padding":"0 20rpx 0 0","fontSize":"28rpx","color":"#333","textAlign":"right"}' class="title">图片3</view>
				<image :style='{"width":"72rpx","margin":"12rpx 0","borderRadius":"100%","objectFit":"cover","display":"block","height":"72rpx"}' class="avator" v-if="ruleForm.picture3" :src="baseUrl+ruleForm.picture3.split(',')[0]" mode="aspectFill"></image>
				<image :style='{"width":"72rpx","margin":"12rpx 0","borderRadius":"100%","objectFit":"cover","display":"block","height":"72rpx"}' class="avator" v-else src="../../static/gen/upload.png" mode="aspectFill"></image>
			</view>
			
			<!-- ${location} -->
 

			
			<view :style='{"padding":"12rpx 0","margin":"0 0 24rpx 0","borderColor":"#c8c8ef","borderWidth":"0 0 8rpx 0","background":"linear-gradient(180deg, rgba(255,255,255,1) 31%, rgba(232,232,255,1) 100%)","width":"100%","borderStyle":"solid","height":"auto"}' class="">
				<view :style='{"width":"100%","padding":"0 24rpx","lineHeight":"48rpx","fontSize":"28rpx","color":"#333","fontWeight":"500"}' class="title">内容</view>
                <xia-editor ref="editor" :style='{"minHeight":"240rpx","padding":"24rpx 24rpx 64rpx","boxShadow":"inset 0px 0px 0px 0px #f9edd9","borderColor":"#c8c8ef","borderRadius":"0px","color":"#555","background":"none","borderWidth":"0px 0px 0px 0px","width":"100%","borderStyle":"dotted dashed solid","height":"auto"}' v-model="ruleForm.content" placeholder="内容" @editorChange="contentChange"></xia-editor>
			</view>
			
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
				title: '',
				subtitle: '',
				content: '',
				picture1: '',
				picture2: '',
				picture3: '',
				},
				// 登陆用户信息
				user: {},
                ro:{
                   title : false,
                   subtitle : false,
                   content : false,
                   picture1 : false,
                   picture2 : false,
                   picture3 : false,
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
				res = await this.$api.info(`systemintro`, this.ruleForm.id);
				this.ruleForm = res.data;
			}
			// 跨表
			this.cross = options.cross;
			if(options.cross){
				var obj = uni.getStorageSync('crossObj');
				for (var o in obj){
					if(o=='title'){
					this.ruleForm.title = obj[o];
					this.ro.title = true;
					continue;
					}
					if(o=='subtitle'){
					this.ruleForm.subtitle = obj[o];
					this.ro.subtitle = true;
					continue;
					}
					if(o=='content'){
					this.ruleForm.content = obj[o];
					this.ro.content = true;
					continue;
					}
					if(o=='picture1'){
					this.ruleForm.picture1 = obj[o].split(",")[0];
					this.ro.picture1 = true;
					continue;
					}
					if(o=='picture2'){
					this.ruleForm.picture2 = obj[o].split(",")[0];
					this.ro.picture2 = true;
					continue;
					}
					if(o=='picture3'){
					this.ruleForm.picture3 = obj[o].split(",")[0];
					this.ro.picture3 = true;
					continue;
					}
				}
			}
			this.styleChange()
		},
		methods: {
            contentChange(e) {
                this.ruleForm.content = e
            },
			styleChange() {
				this.$nextTick(()=>{
					// document.querySelectorAll('.app-update-pv . .uni-input-input').forEach(el=>{
					//   el.style.backgroundColor = this.addUpdateForm.input.content.backgroundColor
					// })
				})
			},

			// 多级联动参数




			picture1Tap() {
				let _this = this;
				this.$api.upload(function(res) {
					_this.ruleForm.picture1 = 'upload/' + res.file;
					_this.$forceUpdate();
					_this.$nextTick(()=>{
						_this.styleChange()
					})
				});
			},
			picture2Tap() {
				let _this = this;
				this.$api.upload(function(res) {
					_this.ruleForm.picture2 = 'upload/' + res.file;
					_this.$forceUpdate();
					_this.$nextTick(()=>{
						_this.styleChange()
					})
				});
			},
			picture3Tap() {
				let _this = this;
				this.$api.upload(function(res) {
					_this.ruleForm.picture3 = 'upload/' + res.file;
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
				if((!this.ruleForm.title)){
					this.$utils.msg(`标题不能为空`);
					return
				}
				if((!this.ruleForm.content)){
					this.$utils.msg(`内容不能为空`);
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
					let res = await this.$api.list(`systemintro`, params);
					if (res.data.total >= crossoptnum) {
						this.$utils.msg(uni.getStorageSync('tips'));
						return false;
					} else {
                //跨表计算
						if(this.ruleForm.id){
							await this.$api.update(`systemintro`, this.ruleForm);
						}else{
							await this.$api.add(`systemintro`, this.ruleForm);
						}
						this.$utils.msgBack('提交成功');
					}
				} else {
                //跨表计算
					if(this.ruleForm.id){
						await this.$api.update(`systemintro`, this.ruleForm);
					}else{
						await this.$api.add(`systemintro`, this.ruleForm);
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
