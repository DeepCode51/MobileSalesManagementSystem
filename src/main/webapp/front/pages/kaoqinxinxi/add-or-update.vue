<template>
<view class="content">
	<view :style='{"minHeight":"100vh","padding":"0px","borderColor":"#21d5ae","background":"url(http://codegen.caihongy.cn/20221227/38bdf285653f4e2580978aa4e42be204.gif) no-repeat center top / 100% auto,url(http://codegen.caihongy.cn/20221227/981928ff5e8b4de0bd3f18588ef6cb0f.png) fixed repeat center top,#959bd9","borderWidth":"0px 0 0","width":"100%","position":"relative","borderStyle":"dashed","height":"auto"}'>
		<form :style='{"width":"100%","padding":"60rpx 40rpx","background":"none","height":"auto"}' class="app-update-pv">
			<view :style='{"padding":"0 20rpx 40rpx","boxShadow":"inset 0px 0px 0px 0px #f9edd9","margin":"0 0 32rpx","borderColor":"#c8c8ef","borderRadius":"0px","borderWidth":"0px 0px 8rpx 0px","background":"linear-gradient(180deg, rgba(255,255,255,1) 31%, rgba(232,232,255,1) 100%)","display":"flex","width":"100%","lineHeight":"100rpx","borderStyle":"dotted dashed solid","height":"auto"}' class=" select">
				<view :style='{"width":"160rpx","padding":"0 20rpx 0 0","fontSize":"28rpx","color":"#333","textAlign":"right"}' class="title">用户名</view>
				<picker :style='{"width":"100%","flex":"1","height":"auto"}' @change="yonghumingChange" :value="yonghumingIndex"  :range="yonghumingOptions">
					<view :style='{"color":"#333","width":"100%","fontSize":"28rpx"}' class="uni-input">{{yonghumingOptions[yonghumingIndex]}}</view>
				</picker>
			</view>
			<view :style='{"padding":"0 20rpx 40rpx","boxShadow":"inset 0px 0px 0px 0px #f9edd9","margin":"0 0 32rpx","borderColor":"#c8c8ef","borderRadius":"0px","borderWidth":"0px 0px 8rpx 0px","background":"linear-gradient(180deg, rgba(255,255,255,1) 31%, rgba(232,232,255,1) 100%)","display":"flex","width":"100%","lineHeight":"100rpx","borderStyle":"dotted dashed solid","height":"auto"}' class="">
				<view :style='{"width":"160rpx","padding":"0 20rpx 0 0","fontSize":"28rpx","color":"#333","textAlign":"right"}' class="title">姓名</view>
				<input :style='{"border":"0","padding":"0px 20rpx","margin":"0px","color":"#333","borderRadius":"8rpx","flex":"1","background":"rgba(255, 255, 255, 0)","fontSize":"28rpx"}' :disabled="ro.xingming" v-model="ruleForm.xingming" placeholder="姓名"></input>
			</view>
			<view :style='{"padding":"0 20rpx 40rpx","boxShadow":"inset 0px 0px 0px 0px #f9edd9","margin":"0 0 32rpx","borderColor":"#c8c8ef","borderRadius":"0px","borderWidth":"0px 0px 8rpx 0px","background":"linear-gradient(180deg, rgba(255,255,255,1) 31%, rgba(232,232,255,1) 100%)","display":"flex","width":"100%","lineHeight":"100rpx","borderStyle":"dotted dashed solid","height":"auto"}' class=" select">
				<view :style='{"width":"160rpx","padding":"0 20rpx 0 0","fontSize":"28rpx","color":"#333","textAlign":"right"}' class="title">考勤状况</view>
				<picker :style='{"width":"100%","flex":"1","height":"auto"}' @change="kaoqinzhuangkuangChange" :value="kaoqinzhuangkuangIndex"  :range="kaoqinzhuangkuangOptions">
					<view :style='{"color":"#333","width":"100%","fontSize":"28rpx"}' class="uni-input">{{ruleForm.kaoqinzhuangkuang?ruleForm.kaoqinzhuangkuang:"请选择考勤状况"}}</view>
				</picker>
			</view>
			<view :style='{"padding":"0 20rpx 40rpx","boxShadow":"inset 0px 0px 0px 0px #f9edd9","margin":"0 0 32rpx","borderColor":"#c8c8ef","borderRadius":"0px","borderWidth":"0px 0px 8rpx 0px","background":"linear-gradient(180deg, rgba(255,255,255,1) 31%, rgba(232,232,255,1) 100%)","display":"flex","width":"100%","lineHeight":"100rpx","borderStyle":"dotted dashed solid","height":"auto"}' class=" select">
				<view :style='{"width":"160rpx","padding":"0 20rpx 0 0","fontSize":"28rpx","color":"#333","textAlign":"right"}' class="title">考勤日期</view>
				<picker :style='{"width":"100%","flex":"1","height":"auto"}' mode="date" :value="ruleForm.kaoqinriqi" @change="kaoqinriqiChange">
					<view :style='{"color":"#333","width":"100%","fontSize":"28rpx"}' class="uni-input">{{ruleForm.kaoqinriqi?ruleForm.kaoqinriqi:"请选择考勤日期"}}</view>
				</picker>
			</view>
			
			<!-- 否 -->
 

			<view :style='{"padding":"0 20rpx 40rpx","boxShadow":"inset 0px 0px 0px 0px #f9edd9","margin":"0 0 32rpx","borderColor":"#c8c8ef","borderRadius":"0px","borderWidth":"0px 0px 8rpx 0px","background":"linear-gradient(180deg, rgba(255,255,255,1) 31%, rgba(232,232,255,1) 100%)","display":"flex","width":"100%","lineHeight":"100rpx","borderStyle":"dotted dashed solid","height":"auto"}' class="">
				<view :style='{"width":"160rpx","padding":"0 20rpx 0 0","fontSize":"28rpx","color":"#333","textAlign":"right"}' class="title">考勤说明</view>
				<textarea :style='{"border":"0","minHeight":"240rpx","padding":"40rpx 40rpx 64rpx","margin":"0px","color":"#333","borderRadius":"8rpx","flex":"1","background":"none","fontSize":"28rpx"}' v-model="ruleForm.kaoqinshuoming" placeholder="考勤说明"></textarea>
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
				yonghuming: '',
				xingming: '',
				kaoqinzhuangkuang: '',
				kaoqinriqi: '',
				kaoqinshuoming: '',
				},
				yonghumingOptions: [],
				yonghumingIndex: 0,
				kaoqinzhuangkuangOptions: [],
				kaoqinzhuangkuangIndex: 0,
				// 登陆用户信息
				user: {},
                ro:{
                   yonghuming : false,
                   xingming : false,
                   kaoqinzhuangkuang : false,
                   kaoqinriqi : false,
                   kaoqinshuoming : false,
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
            this.ruleForm.kaoqinriqi = this.$utils.getCurDate();
			let table = uni.getStorageSync("nowTable");
			// 获取用户信息
			let res = await this.$api.session(table);
			this.user = res.data;
			
			// ss读取


			// 下2
			res = await this.$api.option(`yonghu`,`yonghuming`,{});
			this.yonghumingOptions = res.data;
			// 自定义下拉框值
			this.kaoqinzhuangkuangOptions = "正常,迟到,早退,旷工,请假,休假".split(',')

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
				res = await this.$api.info(`kaoqinxinxi`, this.ruleForm.id);
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
					if(o=='xingming'){
					this.ruleForm.xingming = obj[o];
					this.ro.xingming = true;
					continue;
					}
					if(o=='kaoqinzhuangkuang'){
					this.ruleForm.kaoqinzhuangkuang = obj[o];
					this.ro.kaoqinzhuangkuang = true;
					continue;
					}
					if(o=='kaoqinriqi'){
					this.ruleForm.kaoqinriqi = obj[o];
					this.ro.kaoqinriqi = true;
					continue;
					}
					if(o=='kaoqinshuoming'){
					this.ruleForm.kaoqinshuoming = obj[o];
					this.ro.kaoqinshuoming = true;
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
			// 下二随
			async yonghumingChange (e) {
				this.yonghumingIndex = e.target.value
				this.ruleForm.yonghuming = this.yonghumingOptions[this.yonghumingIndex]
				let res = await this.$api.follow(`yonghu`, `yonghuming`,{
					columnValue: this.ruleForm.yonghuming
				});
				if(res.data.xingming){
					this.ruleForm.xingming = res.data.xingming
				}
			},

			// 多级联动参数

			kaoqinriqiChange(e) {
				this.ruleForm.kaoqinriqi = e.target.value;
				this.$forceUpdate();
			},


			// 下拉变化
			kaoqinzhuangkuangChange(e) {
				this.kaoqinzhuangkuangIndex = e.target.value
				this.ruleForm.kaoqinzhuangkuang = this.kaoqinzhuangkuangOptions[this.kaoqinzhuangkuangIndex]
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
				if((!this.ruleForm.kaoqinzhuangkuang)){
					this.$utils.msg(`考勤状况不能为空`);
					return
				}
				if((!this.ruleForm.kaoqinriqi)){
					this.$utils.msg(`考勤日期不能为空`);
					return
				}
				if((!this.ruleForm.kaoqinshuoming)){
					this.$utils.msg(`考勤说明不能为空`);
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
					let res = await this.$api.list(`kaoqinxinxi`, params);
					if (res.data.total >= crossoptnum) {
						this.$utils.msg(uni.getStorageSync('tips'));
						return false;
					} else {
                //跨表计算
						if(this.ruleForm.id){
							await this.$api.update(`kaoqinxinxi`, this.ruleForm);
						}else{
							await this.$api.add(`kaoqinxinxi`, this.ruleForm);
						}
						this.$utils.msgBack('提交成功');
					}
				} else {
                //跨表计算
					if(this.ruleForm.id){
						await this.$api.update(`kaoqinxinxi`, this.ruleForm);
					}else{
						await this.$api.add(`kaoqinxinxi`, this.ruleForm);
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
