<template>
<mescroll-uni @init="mescrollInit" :up="upOption" :down="downOption" @down="downCallback" @up="upCallback">
	<view class="content">
		<view :style='{"padding":"0","borderColor":"#21d5ae","margin":"0","alignItems":"flex-start","display":"block","justifyContent":"space-between","minHeight":"100vh","flexWrap":"wrap","background":"url(http://codegen.caihongy.cn/20221227/981928ff5e8b4de0bd3f18588ef6cb0f.png) fixed repeat center top,#959bd9","borderWidth":"0px 0","width":"100%","position":"relative","borderStyle":"dashed","height":"auto"}'>
			<view class="cu-bar bg-white search" style="width:100%" :style="[{top:CustomBar + 'px'}]">
				<picker v-if="queryList.length>1" mode="selector" :range="queryList" range-key="queryName" :value="queryIndex" @change="queryChange" style="padding-left: 20upx;">
					<view><image style="width: 20upx;height: 33upx;" src="../../static/center/to.png"></image></view>
				</picker>
					<view v-if="queryIndex==0" class="search-form round">
						<text class="cuIcon-search"></text>
						<input v-model="searchForm.title" type="text" placeholder="标题" ></input>
					</view>
				<view class="action">
					<button @tap="search" class="cu-btn shadow-blur round">搜索</button>
				</view>
			</view>
			<view :style='{"padding":"0","margin":"0","alignItems":"flex-start","flexWrap":"wrap","background":"url(http://codegen.caihongy.cn/20221227/981928ff5e8b4de0bd3f18588ef6cb0f.png) fixed repeat center top,#959bd9","display":"flex","width":"100%","height":"auto"}'>

			
			
			
			
			
				<!-- 样式6 -->
				<view class="news-box6" :style='{"width":"100%","padding":"24rpx","margin":"0","background":"url(http://codegen.caihongy.cn/20221227/38bdf285653f4e2580978aa4e42be204.gif) no-repeat center top / 100% auto","height":"auto"}'>
					<view @tap="onDetailTap(product)" v-for="(product,index) in list" :key="index" class="list-item" :style='{"padding":"8rpx 24rpx 8rpx 100rpx","margin":"0 0 20rpx","borderColor":"#c8c8ef","background":"linear-gradient(180deg, rgba(255,255,255,1) 31%, rgba(232,232,255,1) 100%)","borderWidth":"0px 0px 8rpx","width":"100%","position":"relative","borderStyle":"dotted dashed solid","height":"auto"}'>
					  <view :style='{"padding":"0","margin":"-28rpx 0 0 20rpx","borderColor":"#b6b6e9","color":"#6d6ebf","textAlign":"center","borderRadius":"10%","top":"50%","left":"0","borderWidth":"2rpx","background":"linear-gradient(120deg, rgba(255,255,255,1) 31%, rgba(232,232,255,1) 100%)","width":"60rpx","lineHeight":"60rpx","fontSize":"28rpx","position":"absolute","borderStyle":"solid","height":"60rpx"}' class="num">
						<view style="width: 100%;height: 100%;position: absolute;left: 0;top: 0;" :style="{transform: 'rotate('+(-index*60)+'deg)'}" class="dian">
						  <view :style='{"transform":"translateX(-50%)","borderRadius":"100%","top":"-8rpx","left":"50%","background":"red","display":"none","width":"16rpx","position":"absolute","height":"16rpx"}' />
						</view>{{ index + 1 < 10 ? '0'+(index+1) : index+1 }}
					  </view>
					  <view class="item-list-body" :style='{"width":"100%","margin":"0","height":"auto"}'>
						<view :style='{"padding":"8rpx 20rpx","whiteSpace":"nowrap","overflow":"hidden","color":"#333","width":"100%","lineHeight":"48rpx","fontSize":"28rpx","textOverflow":"ellipsis"}' class="title ">{{product.title}}</view>
						<view :style='{"padding":"4rpx 20rpx","overflow":"hidden","color":"#555","width":"100%","lineHeight":"48rpx","fontSize":"28rpx","textIndent":"2em","height":"96rpx"}' class="desc ">{{product.introduction}}</view>
					  </view>
					</view>
				</view>


			</view>
			
			
			
		</view>

		<button :style='{"border":"2rpx solid #fff","boxShadow":"0 4rpx 8rpx rgba(0,0,0,.3)","color":"#fff","bottom":"120rpx","right":"128rpx","outline":"none","borderRadius":"100%","background":"#8989eb","width":"88rpx","lineHeight":"88rpx","fontSize":"28rpx","position":"fixed","height":"88rpx","zIndex":"9999"}' v-if="userid && isAuth('news','新增')" class="add-btn" @click="onAddTap()">新增</button>
		<button :style='{"border":"2rpx solid #fff","boxShadow":"0 4rpx 8rpx rgba(0,0,0,.3)","color":"#fff","bottom":"120rpx","right":"128rpx","outline":"none","borderRadius":"100%","background":"#8989eb","width":"88rpx","lineHeight":"88rpx","fontSize":"28rpx","position":"fixed","height":"88rpx","zIndex":"9999"}' v-if="!userid && isAuthFront('news','新增')" class="add-btn" @click="onAddTap()">新增</button>
	</view>
</mescroll-uni>
</template>

<script>
	export default {
		data() {
			return {
				btnColor: ['#409eff','#67c23a','#909399','#e6a23c','#f56c6c','#356c6c','#351c6c','#f093a9','#a7c23a','#104eff','#10441f','#a21233','#503319'],
				queryList:[
					{
						queryName:"标题",
					},
				],
				queryIndex: 0,
				list: [],
				lists: [],
                userid: '',
				mescroll: null, //mescroll实例对象
				downOption: {
					auto: false //是否在初始化后,自动执行下拉回调callback; 默认true
				},
				upOption: {
					noMoreSize: 5, //如果列表已无数据,可设置列表的总数量要大于半页才显示无更多数据;避免列表数据过少(比如只有一条数据),显示无更多数据会不好看; 默认5
					textNoMore: '~ 没有更多了 ~',
				},
				hasNext: true,
				searchForm:{},
				CustomBar: '0'
			};
		},
		computed: {
			baseUrl() {
				return this.$base.url;
			}
		},
		async onShow() {
			this.btnColor = this.btnColor.sort(()=> {
                                return (0.5-Math.random());
                        });
			this.hasNext = true
			// 重新加载数据
			if (this.mescroll) this.mescroll.resetUpScroll()
		},
		onLoad(options) {
            if(options.userid) {
                this.userid=options.userid;
            } else {
                this.userid = "";
            }
			this.hasNext = true
			// 重新加载数据
			if (this.mescroll) this.mescroll.resetUpScroll()
		},
		methods: {
            priceChange(price) {
                return Number(price).toFixed(2);
            },
            preHttp(str) {
                return str && str.substr(0,4)=='http';
            },
			//查询条件切换
			queryChange(e) {
				this.queryIndex=e.detail.value;
				this.searchForm.title="";
			},
			//类别搜索
			// mescroll组件初始化的回调,可获取到mescroll对象
			mescrollInit(mescroll) {
				this.mescroll = mescroll;
			},
			/*下拉刷新的回调 */
			downCallback(mescroll) {
				this.hasNext = true
				// 重置分页参数页数为1
				mescroll.resetUpScroll()
			},
			/*上拉加载的回调: mescroll携带page的参数, 其中num:当前页 从1开始, size:每页数据条数,默认10 */
			async upCallback(mescroll) {
				let params = {
					page: mescroll.num,
					limit: mescroll.size
				}


				if(this.searchForm.title){
					params['title'] = '%' + this.searchForm.title + '%'
				}



                let res = {}
                if(this.userid) {
                    res = await this.$api.page(`news`, params);
                } else {
                    res = await this.$api.list(`news`, params);
                }
				// 如果是第一页数据置空
				if (mescroll.num == 1) this.list = [];
				this.list = this.list.concat(res.data.list);
				let length = Math.ceil(this.list.length/6)
				let arr = [];
				for (let i = 0; i<length; i++){
					arr[i] = this.list.slice(i*6, (i+1)*6)
				}
				this.lists = arr
				if (res.data.list.length == 0) this.hasNext = false;
				mescroll.endSuccess(mescroll.size, this.hasNext);
			},
			// 详情
			onDetailTap(item) {
                uni.setStorageSync("useridTag",this.userid);
				this.$utils.jump(`./detail?id=${item.id}&userid=`+this.userid)
			},
			// 修改
			onUpdateTap(id){
                uni.setStorageSync("useridTag",this.userid);
				this.$utils.jump(`./add-or-update?id=${id}`)
			},
			// 添加
			onAddTap(){
                uni.setStorageSync("useridTag",this.userid);
				this.$utils.jump(`./add-or-update`)
			},
			onDeleteTap(id){
				var _this = this;
				uni.showModal({
					title: '提示',
					content: '是否确认删除',
					success: async function(res) {
						if (res.confirm) {
							await _this.$api.del('news', JSON.stringify([id]));
							_this.hasNext = true
							// 重置分页参数页数为1
							_this.mescroll.resetUpScroll()
						}
					}
				});
			},
			// 搜索
			async search(){
				this.mescroll.num = 1
				let searchForm = {
					page: this.mescroll.num,
					limit: this.mescroll.size
				}
				if(this.searchForm.title){
					searchForm['title'] = '%' + this.searchForm.title + '%'
				}
                let res = {};
                if(this.userid) {
                    res = await this.$api.page(`news`, searchForm);
                } else {
                    res = await this.$api.list(`news`, searchForm);
                }
				// 如果是第一页数据置空
				if (this.mescroll.num == 1) this.list = [];
				this.list = this.list.concat(res.data.list);
				let length = Math.ceil(this.list.length/6)
				let arr = [];
				for (let i = 0; i<length; i++){
					arr[i] = this.list.slice(i*6, (i+1)*6)
				}
				this.lists = arr
				if (res.data.list.length == 0) this.hasNext = false;
				this.mescroll.endSuccess(this.mescroll.size, this.hasNext);
			}
		}
	};
</script>

<style lang="scss" scoped>
	.content {
		min-height: calc(100vh - 44px);
		box-sizing: border-box;
	}
	
	.category-one .tab {
		cursor: pointer;
		padding: 0  40rpx;
		margin: 0 8rpx;
		color: #333;
		display: inline-block;
		font-size: 28rpx;
		border-color: #5959d9;
		line-height: 80rpx;
		border-radius: 0 0 24rpx 24rpx;
		box-shadow: -2rpx 4rpx 0px #c1c1f2;
		background: url(http://codegen.caihongy.cn/20221227/46f4ec158fb44ae8ac27b28b988282eb.png) no-repeat 5% center  / 8rpx,url(http://codegen.caihongy.cn/20221227/46f4ec158fb44ae8ac27b28b988282eb.png) no-repeat 95% center / 8rpx,#fff;
		width: auto;
		border-width: 0px 4rpx 4rpx 4rpx;
		border-style: solid;
		text-align: center;
		min-width: 160rpx;
		height: 80rpx;
	}
	
	.category-one .tab.active {
		cursor: pointer;
		padding: 0  40rpx;
		margin: 0 8rpx;
		color: #333;
		font-weight: 600;
		display: inline-block;
		font-size: 28rpx;
		border-color: #5959d9;
		line-height: 80rpx;
		border-radius: 0 0 24rpx 24rpx;
		box-shadow: -2rpx 4rpx 0px #c1c1f2;
		background: url(http://codegen.caihongy.cn/20221227/46f4ec158fb44ae8ac27b28b988282eb.png) no-repeat 5% center  / 8rpx,url(http://codegen.caihongy.cn/20221227/46f4ec158fb44ae8ac27b28b988282eb.png) no-repeat 95% center / 8rpx,#fff;
		width: auto;
		border-width: 0px 4rpx 4rpx 4rpx;
		border-style: solid;
		text-align: center;
		min-width: 160rpx;
		height: 80rpx;
	}
	
	.category-two .tab {
		cursor: pointer;
		padding: 0;
		margin: 0 0 20rpx;
		color: #333;
		display: inline-block;
		font-size: 28rpx;
		border-color: #1bd0a9;
		line-height: 80rpx;
		border-radius: 0;
		background: url(http://codegen.caihongy.cn/20221226/152fb5f1043c42448791a3d8f22cf8d8.gif) no-repeat left bottom / auto 50%,rgba(255,255,255,.8);
		width: 100%;
		border-width: 0px;
		border-style: solid;
		text-align: center;
		height: 100rpx;
	}
	
	.category-two .tab.active {
		cursor: pointer;
		padding: 0;
		margin: 0 0 20rpx;
		color: #A42858;
		font-weight: 600;
		display: inline-block;
		font-size: 28rpx;
		border-color: #1bd0a9;
		line-height: 80rpx;
		border-radius: 0;
		background: url(http://codegen.caihongy.cn/20221226/152fb5f1043c42448791a3d8f22cf8d8.gif) no-repeat left bottom / auto 60%,rgba(255,255,255,.8);
		width: 100%;
		border-width: 0px;
		border-style: solid;
		text-align: center;
		height: 100rpx;
	}
	
	.category-three .tab {
		cursor: pointer;
		padding: 0;
		color: #fff;
		background: burlywood;
		display: inline-block;
		width: 100%;
		font-size: 28rpx;
		line-height: 80rpx;
		text-align: center;
	}
	
	.category-three .tab.active {
		cursor: pointer;
		padding: 0;
		color: #fff;
		background: #000;
		display: inline-block;
		width: 100%;
		font-size: 28rpx;
		line-height: 80rpx;
		text-align: center;
	}
</style>
