<template>
<view class="content">
	<view :style='{"minHeight":"100vh","width":"100%","padding":"0px 0 0px","background":"url(http://codegen.caihongy.cn/20221227/38bdf285653f4e2580978aa4e42be204.gif) no-repeat center top / 100% auto,url(http://codegen.caihongy.cn/20221227/981928ff5e8b4de0bd3f18588ef6cb0f.png) fixed repeat center top,#959bd9","height":"auto"}'>
		<swiper :style='{"padding":"0px 0 0px ","boxShadow":"inset 0px 0px 0px 0px #f4ead8","borderColor":"#8989eb","outline":"0px solid #bbb","margin":"0px auto 40rpx","borderRadius":"0","background":"rgba(255,255,255,1)","borderWidth":"0px 0px 0px 0px","width":"calc(100% - 0px)","borderStyle":"ridge","height":"360rpx"}' class="swiper" :indicator-dots='false' :autoplay='true' :circular='false' indicator-active-color='#000000' indicator-color='rgba(0, 0, 0, .3)' :duration='500' :interval='5000' :vertical='false'>
			<swiper-item :style='{"width":"calc(100% - 0px)","margin":"0 auto","position":"relative","borderRadius":"0","background":"none","height":"360rpx"}' v-for="(swiper,index) in swiperList" :key="index" @tap="onSwiperTap(swiper)">
				<image :style='{"width":"calc(100% - 0px)","margin":"0px auto","objectFit":"cover","borderRadius":"0","display":"block","height":"360rpx"}' mode="aspectFill" :src="baseUrl+swiper.img"></image>
				<view v-if="false" :style='{"padding":"0 20rpx 32rpx","color":"#333","left":"20rpx","textAlign":"center","background":"rgba(255,255,255,.6)","bottom":"0px","width":"calc(100% - 40rpx)","lineHeight":"60rpx","fontSize":"28rpx","position":"absolute"}'>{{ swiper.title }}</view>
			</swiper-item>
		</swiper>


		<!-- menu -->
		<view v-if="true" class="menu" :style='{"padding":"20rpx 0 20rpx 1%","boxShadow":"inset 0px 0px 0px 0px #87acf1","margin":"40rpx auto 40rpx","borderColor":"#8989eb","display":"flex","outline":"0px solid #ccc","borderRadius":"0","flexWrap":"wrap","background":"rgba(255,255,255,0)","borderWidth":"0px 0px 0px 0px","width":"calc(100% - 40rpx)","borderStyle":"groove","height":"auto"}'>
            <block v-for="item in menuList" v-bind:key="item.roleName">
                <block v-if="role==item.roleName" v-bind:key="index" v-for=" (menu,index) in item.frontMenu">
                    <block v-bind:key="sort" v-for=" (child,sort) in menu.child">
                        <block v-bind:key="sort2" v-for=" (button,sort2) in child.buttons">
                            <view :style='{"padding":"12rpx 0","boxShadow":"0px 8rpx 0px #afb0ee","margin":"10rpx 2% 10rpx 0","borderRadius":"16rpx","background":"radial-gradient(circle, rgba(190,190,255,.1) 0%, rgba(137,137,235,.3) 100%),rgba(255,255,255,1)","width":"23%","height":"auto"}' class="menu-list" v-if="button=='查看' && child.tableName!='yifahuodingdan' && child.tableName!='yituikuandingdan' &&child.tableName!='yiquxiaodingdan' && child.tableName!='weizhifudingdan' && child.tableName!='yizhifudingdan' && child.tableName!='yiwanchengdingdan' " @tap="onPageTap2('../'+child.tableName+'/list')">
                                <view class="iconarr" :class="child.appFrontIcon" :style='{"padding":"0","margin":"0px auto","color":"#333","borderRadius":"100%","background":"none","display":"block","width":"64rpx","lineHeight":"64rpx","fontSize":"64rpx","height":"64rpx"}'></view>
                                <view :style='{"padding":"0","margin":"12rpx auto 0","color":"#555","textAlign":"center","width":"100%","lineHeight":"28rpx","fontSize":"28rpx"}'>{{child.menu.split("列表")[0]}}</view>
                            </view>
                        </block>
                    </block>
                </block>
            </block>
		</view>
		<!-- menu -->
		
		

		<!-- 商品推荐 -->
		<!-- 商品推荐 -->
		

		<!-- 新闻资讯 -->
																																		<view class="listBox news">
			<view v-if="false && 1 == 1" class="idea newsIdea" :style='{"padding":"40rpx","flexWrap":"wrap","background":"#efefef","justifyContent":"space-between","display":"flex"}'>
				<view :style='{"width":"20%","background":"#fff","height":"160rpx"}' class="box box1"></view>
				<view :style='{"width":"20%","background":"#fff","height":"160rpx"}' class="box box2"></view>
				<view :style='{"width":"20%","background":"#fff","height":"160rpx"}' class="box box3"></view>
				<view :style='{"width":"20%","background":"#fff","height":"160rpx"}' class="box box4"></view>
			</view>
			
			<view class="title" :style='{"border":"4rpx solid #5959d9","padding":"0px 0 0px","boxShadow":"2rpx 8rpx 0px #c1c1f2","margin":"0px auto 0px","display":"flex","justifyContent":"space-between","minHeight":"80rpx","overflow":"hidden","borderRadius":"20rpx","background":"url(http://codegen.caihongy.cn/20221227/46f4ec158fb44ae8ac27b28b988282eb.png) no-repeat 5% center,#fff","width":"calc(90% - 0px)","lineHeight":"80rpx","position":"relative"}'>
				<view :style='{"padding":"0 0 0 160rpx","boxShadow":"0px 0px 0px rgba(0,0,0,.2)","margin":"0px 0 0","color":"#333","borderRadius":"0px","textAlign":"center","background":"none","display":"inline-block","width":"calc(100% - 160rpx)","fontSize":"32rpx"}'>活动公告</view>
				<text :style='{"padding":"0 40rpx 0 0","margin":"0px 0px 0 0","color":"#999","textAlign":"right","background":"none","fontSize":"28rpx","minWidth":"160rpx","position":"absolute","right":"0"}' @tap="onPageTap('news')">查看更多</text>
			</view>
			
			<view v-if="false && 1 == 2" class="idea newsIdea" :style='{"padding":"40rpx","flexWrap":"wrap","background":"#efefef","justifyContent":"space-between","display":"flex"}'>
				<view :style='{"width":"20%","background":"#fff","height":"160rpx"}' class="box box1"></view>
				<view :style='{"width":"20%","background":"#fff","height":"160rpx"}' class="box box2"></view>
				<view :style='{"width":"20%","background":"#fff","height":"160rpx"}' class="box box3"></view>
				<view :style='{"width":"20%","background":"#fff","height":"160rpx"}' class="box box4"></view>
			</view>
			
					  
						
						
		  <!-- 样式4 -->
		  		  
		  <!-- 样式5 -->
		  		  
		  <!-- 样式6 -->
		  		  
		  <!-- 样式7 -->
		  		  
		  <!-- 样式8 -->
		  		  
		  <!-- 样式9 -->
		  		  <view class="news-box6" :style='{"width":"100%","padding":"24rpx 40rpx","margin":"24rpx 0 0","background":"url(http://codegen.caihongy.cn/20221227/38bdf285653f4e2580978aa4e42be204.gif) no-repeat center bottom / 100% auto","height":"auto"}'>
			<view @tap="onNewsDetailTap(item.id)" v-for="(item,index) in news" :key="index" class="list-item" :style='{"padding":"8rpx 24rpx 8rpx 100rpx","margin":"0 0 20rpx","borderColor":"#c8c8ef","background":"linear-gradient(180deg, rgba(255,255,255,1) 31%, rgba(232,232,255,1) 100%)","borderWidth":"0px 0px 8rpx","width":"100%","position":"relative","borderStyle":"dotted dashed solid double","height":"auto"}'>
			  <view :style='{"padding":"0","margin":"-28rpx 0 0 20rpx","borderColor":"#b6b6e9","color":"#6d6ebf","textAlign":"center","borderRadius":"10%","top":"50%","left":"0","borderWidth":"2rpx","background":"linear-gradient(120deg, rgba(255,255,255,1) 31%, rgba(232,232,255,1) 100%)","width":"60rpx","lineHeight":"60rpx","fontSize":"28rpx","position":"absolute","borderStyle":"solid","height":"60rpx"}' class="num">
			    <view style="width: 100%;height: 100%;position: absolute;left: 0;top: 0;" :style="{transform: 'rotate('+(-index*60)+'deg)'}" class="dian">
			      <view :style='{"transform":"translateX(-50%)","borderRadius":"100%","top":"-8rpx","left":"50%","background":"#0bd9ed","display":"none","width":"16rpx","position":"absolute","height":"16rpx"}'></view>
			    </view>{{ index + 1 < 10 ? '0'+(index+1) : index+1 }}
			  </view>
			  <view class="item-list-body" :style='{"width":"100%","margin":"0","height":"auto"}'>
				<view :style='{"padding":"8rpx 20rpx","whiteSpace":"nowrap","overflow":"hidden","color":"#333","width":"100%","lineHeight":"48rpx","fontSize":"28rpx","textOverflow":"ellipsis"}' class="title ">{{item.title}}</view>
				<view :style='{"padding":"4rpx 20rpx","overflow":"hidden","color":"#555","width":"100%","lineHeight":"48rpx","fontSize":"28rpx","textIndent":"2em","height":"96rpx"}' class="desc ">{{item.introduction}}</view>
			  </view>
			</view>
		  </view>
		  			
			<view v-if="false && 1 == 3" class="idea newsIdea" :style='{"padding":"40rpx","flexWrap":"wrap","background":"#efefef","justifyContent":"space-between","display":"flex"}'>
				<view :style='{"width":"20%","background":"#fff","height":"160rpx"}' class="box box1"></view>
				<view :style='{"width":"20%","background":"#fff","height":"160rpx"}' class="box box2"></view>
				<view :style='{"width":"20%","background":"#fff","height":"160rpx"}' class="box box3"></view>
				<view :style='{"width":"20%","background":"#fff","height":"160rpx"}' class="box box4"></view>
			</view>
		</view>
														<!-- 新闻资讯 -->
				
		<!-- 系统简介 -->
		<view :style='{"padding":"0 0 40rpx","boxShadow":"0 0px 0px rgba(0,0,0,.2)","margin":"40rpx auto 0px","borderRadius":"0px","flexWrap":"wrap","background":"url() no-repeat center top / 100% auto","display":"flex","width":"calc(100% - 0px)","position":"relative","justifyContent":"center","height":"auto"}'>
		  <view :style='{"border":"4rpx solid #5959d9","padding":"0px 0px 0px","boxShadow":"2rpx 8rpx 0px #c1c1f2","margin":"0","color":"#333","textAlign":"center","minHeight":"80rpx","overflow":"hidden","borderRadius":"20rpx","background":"url(http://codegen.caihongy.cn/20221227/46f4ec158fb44ae8ac27b28b988282eb.png) no-repeat 5% center,url(http://codegen.caihongy.cn/20221227/46f4ec158fb44ae8ac27b28b988282eb.png) no-repeat 95% center,#fff","width":"90%","lineHeight":"80rpx","fontSize":"32rpx"}'>{{systemIntroductionDetail.title}}</view>
		  <view :style='{"padding":"0px 80rpx 0 16rpx","margin":"0","overflow":"hidden","color":"#fff","borderRadius":"0","textAlign":"center","background":"url() no-repeat right top / auto 100%,#5489ed","display":"none","width":"auto","fontSize":"28rpx","lineHeight":"80rpx","height":"80rpx"}'>{{systemIntroductionDetail.subtitle}}</view>
		  <view :style='{"padding":"0px","margin":"60rpx 0 0px 0","borderColor":"#dfdffc","borderRadius":"0","background":"rgba(255,255,255,.1)","borderWidth":"40rpx 40rpx 0","display":"flex","width":"80%","position":"relative","borderStyle":"double","justifyContent":"space-between","height":"auto"}'>
		    <img :style='{"padding":"0px","boxShadow":"inset 0px 0px 0px 0px #edf3fe","margin":"0","borderColor":"#60dfc4","objectFit":"cover","borderRadius":"0","borderWidth":"0px","background":"rgba(255,255,255,1)","display":"block","width":"100%","borderStyle":"solid","height":"240rpx"}' v-if="systemIntroductionDetail.picture1" :src="baseUrl+systemIntroductionDetail.picture1">
		    <img :style='{"padding":"20rpx","boxShadow":"inset 0px 0px 0px 0px #edf3fe","margin":"0","borderColor":"#60dfc4","objectFit":"cover","borderRadius":"0 0px 0px 0","borderWidth":"0px","display":"none","width":"48%","borderStyle":"solid","height":"240rpx"}' v-if="systemIntroductionDetail.picture2" :src="baseUrl+systemIntroductionDetail.picture2">
		    <img :style='{"padding":"24rpx","boxShadow":"inset 0px 0px 112rpx 0px #fff","margin":"0","borderColor":"#e9be70","objectFit":"cover","display":"none","right":"12rpx","borderRadius":"10%","borderWidth":"8rpx 4rpx 4rpx 4rpx","width":"30%","position":"absolute","borderStyle":"solid","height":"400rpx"}' v-if="systemIntroductionDetail.picture3" :src="baseUrl+systemIntroductionDetail.picture3">
		  </view>
		  <view :style='{"padding":"20rpx 20rpx 40rpx","boxShadow":"inset 0px 0px 0px 0px #87acf1","margin":"0px 0 0px 0","borderColor":"#dfdffc","color":"#555","textIndent":"2em","minHeight":"288rpx","outlineStyle":"solid","borderRadius":"0px","outlineWidth":"0px","background":"url() no-repeat right top,rgba(255,255,255,1)","borderWidth":"12rpx 8rpx 12rpx","width":"calc(90% - 0px)","outlineColor":"#a9a9e8","lineHeight":"48rpx","fontSize":"28rpx","borderStyle":"solid","height":"auto"}' v-html="systemIntroductionDetail.content"></view>
		  <view :style='{"width":"82%","position":"absolute","top":"208rpx","background":"url() no-repeat","display":"block","height":"36rpx"}' />
		  <view :style='{"width":"50%","background":"url(http://codegen.caihongy.cn/20201114/7856ba26477849ea828f481fa2773a95.jpg) 0% 0% / cover no-repeat","display":"none","height":"160rpx"}' />
		</view>

		<!-- 商品列表 -->
																		<view class="listBox list">
			<view v-if="false && 1 == 1" class="idea listIdea" :style='{"padding":"40rpx","flexWrap":"wrap","background":"#efefef","justifyContent":"space-between","display":"flex"}'>
				<view :style='{"width":"20%","background":"#fff","height":"160rpx"}' class="box box1"></view>
				<view :style='{"width":"20%","background":"#fff","height":"160rpx"}' class="box box2"></view>
				<view :style='{"width":"20%","background":"#fff","height":"160rpx"}' class="box box3"></view>
				<view :style='{"width":"20%","background":"#fff","height":"160rpx"}' class="box box4"></view>
			</view>
		  
			<view class="title" :style='{"border":"4rpx solid #5959d9","padding":"0px 10%","boxShadow":"2rpx 8rpx 0px #c1c1f2","margin":"0 auto 0px","display":"flex","justifyContent":"space-between","minHeight":"80rpx","overflow":"hidden","borderRadius":"20rpx","background":"url(http://codegen.caihongy.cn/20221227/46f4ec158fb44ae8ac27b28b988282eb.png) no-repeat 5% center,#fff","width":"calc(90% - 0px)","lineHeight":"80rpx","position":"relative"}'>
				<view :style='{"padding":"0 0 0 160rpx","boxShadow":"0px 0px 0px rgba(0,0,0,.2)","margin":"0px 0 0","color":"#333","borderRadius":"0px","textAlign":"center","background":"url() no-repeat right top / auto 100%","display":"inline-block","width":"calc(100% - 160rpx)","fontSize":"32rpx","minWidth":"240rpx"}'>产品信息</view>
				<text :style='{"padding":"0 40rpx","margin":"0px 0px 0 0","color":"#999","textAlign":"right","background":"none","fontSize":"28rpx","minWidth":"160rpx","position":"absolute","right":"0"}' @tap="onPageTap('chanpinxinxi')">查看更多</text>
			</view>
			
			<view v-if="false && 1 == 2" class="idea listIdea" :style='{"padding":"40rpx","flexWrap":"wrap","background":"#efefef","justifyContent":"space-between","display":"flex"}'>
				<view :style='{"width":"20%","background":"#fff","height":"160rpx"}' class="box box1"></view>
				<view :style='{"width":"20%","background":"#fff","height":"160rpx"}' class="box box2"></view>
				<view :style='{"width":"20%","background":"#fff","height":"160rpx"}' class="box box3"></view>
				<view :style='{"width":"20%","background":"#fff","height":"160rpx"}' class="box box4"></view>
			</view>
			
		  		  <!-- 样式1 -->
		  <view class="list-box style1" :style='{"padding":"0","boxShadow":"0 0px 0px rgba(0,0,0,.1)","margin":"40rpx auto 0","borderRadius":"24rpx","flexWrap":"wrap","background":"url(http://codegen.caihongy.cn/20221227/38bdf285653f4e2580978aa4e42be204.gif) no-repeat center top / 100% auto","display":"flex","width":"calc(100% - 80rpx)","justifyContent":"space-between","height":"auto"}'>
			<view @tap="onDetailTap('chanpinxinxi',product.id)" v-for="(product,index) in homechanpinxinxilist" :key="index" class="list-item" :style='{"padding":"20rpx 20rpx 0px 20rpx","margin":"0 0 40rpx","borderColor":"#c8c8ef","background":"linear-gradient(180deg, rgba(255,255,255,1) 31%, rgba(232,232,255,1) 100%)","borderWidth":"0 0 8rpx","width":"48%","borderStyle":"solid","height":"auto"}'>
			                			  <view :style='{"padding":"4rpx 20rpx","whiteSpace":"nowrap","overflow":"hidden","color":"#333","textAlign":"center","width":"100%","lineHeight":"48rpx","fontSize":"28rpx","textOverflow":"ellipsis"}' class="list-item-title ">{{product.chanpinbianhao}}</view>
			  			  			  			                			  <view :style='{"padding":"4rpx 20rpx","whiteSpace":"nowrap","overflow":"hidden","color":"#333","textAlign":"center","width":"100%","lineHeight":"48rpx","fontSize":"28rpx","textOverflow":"ellipsis"}' class="list-item-title ">{{product.chanpinmingcheng}}</view>
			  			  			  			                			  <view :style='{"padding":"4rpx 20rpx","whiteSpace":"nowrap","overflow":"hidden","color":"#333","textAlign":"center","width":"100%","lineHeight":"48rpx","fontSize":"28rpx","textOverflow":"ellipsis"}' class="list-item-title ">{{product.chanpinleixing}}</view>
			  			  			  			                			  			  <image :style='{"padding":"0","margin":"0","objectFit":"cover","borderRadius":"24rpx","display":"block","width":"100%","height":"240rpx"}' class="list-item-image" mode="aspectFill" v-if="product.tupian.substring(0,4)=='http'" :src="product.tupian"></image>
			  <image :style='{"padding":"0","margin":"0","objectFit":"cover","borderRadius":"24rpx","display":"block","width":"100%","height":"240rpx"}' class="list-item-image" mode="aspectFill" v-else :src="product.tupian?baseUrl+product.tupian.split(',')[0]:''"></image>
			  			  			                			  			  			                			  			  			                			  			  			  			</view>
		  </view>
		  		  
		  		  
		  		  
		  		  
		  		  
		  		  
		  		  
		  		  
		  		  
			<view v-if="false && 1 == 3" class="idea listIdea" :style='{"padding":"40rpx","flexWrap":"wrap","background":"#efefef","justifyContent":"space-between","display":"flex"}'>
				<view :style='{"width":"20%","background":"#fff","height":"160rpx"}' class="box box1"></view>
				<view :style='{"width":"20%","background":"#fff","height":"160rpx"}' class="box box2"></view>
				<view :style='{"width":"20%","background":"#fff","height":"160rpx"}' class="box box3"></view>
				<view :style='{"width":"20%","background":"#fff","height":"160rpx"}' class="box box4"></view>
			</view>
		</view>
																														<!-- 商品列表 -->
		
		

	</view>
</view>
</template>

<script>
    import menu from '@/utils/menu'
	import '@/assets/css/global-restaurant.css'
	import uniIcons from "@/components/uni-ui/lib/uni-icons/uni-icons.vue"
	export default {
		components: {
			uniIcons
		},
		data() {
			return {
				options2: {
					effect: 'flip',
					loop : true
				},
				options3: {
					effect: 'cube',
					loop : true,
					cubeEffect: {
						shadow: true,
						slideShadows: true,
						shadowOffset: 20,
						shadowScale: 0.94,
					}
				},
				rows: 2,
				column: 4,
				iconArr: [
				  'cuIcon-same',
				  'cuIcon-deliver',
				  'cuIcon-evaluate',
				  'cuIcon-shop',
				  'cuIcon-ticket',
				  'cuIcon-cascades',
				  'cuIcon-discover',
				  'cuIcon-question',
				  'cuIcon-pic',
				  'cuIcon-filter',
				  'cuIcon-footprint',
				  'cuIcon-pulldown',
				  'cuIcon-pullup',
				  'cuIcon-moreandroid',
				  'cuIcon-refund',
				  'cuIcon-qrcode',
				  'cuIcon-remind',
				  'cuIcon-profile',
				  'cuIcon-home',
				  'cuIcon-message',
				  'cuIcon-link',
				  'cuIcon-lock',
				  'cuIcon-unlock',
				  'cuIcon-vip',
				  'cuIcon-weibo',
				  'cuIcon-activity',
				  'cuIcon-friendadd',
				  'cuIcon-friendfamous',
				  'cuIcon-friend',
				  'cuIcon-goods',
				  'cuIcon-selection'
				],
                role : '',
                systemIntroductionDetail: {},
                menuList: [],
                swiperMenuList:[],
                user: {},
                tableName:'',

				//轮播
				swiperList: [],
				homechanpinxinxilist: [],
				news: [],
			}
		},
		computed: {
			baseUrl() {
				return this.$base.url;
			}
		},
        async onLoad(){
            this.role = uni.getStorageSync("role");
            let table = uni.getStorageSync("nowTable");
            let res = await this.$api.session(table);
            this.user = res.data;
            this.tableName = table;
            let menus = menu.list();
            this.menuList = menus;
            this.menuList.forEach((item,key) => {
                if(this.role==item.roleName) {
                    item.frontMenu.forEach((item2,key2) => {
                        if(item2.child[0].buttons.indexOf("查看")>-1) {
                            this.swiperMenuList.push(item2);
                        }
                    })
                }
            })
        },
		async onShow() {
            let res;
			// 轮播图
			let swiperList = []
			res = await this.$api.page('config', {
				page: 1,
				limit: 5
			});
			for (let item of res.data.list) {
				if (item.name.indexOf('picture') >= 0 && item.value && item.value!="" && item.value!=null ) {
					swiperList.push({
						img: item.value,
                        title: item.name
					});
				}
			}
			if (swiperList) {
				this.swiperList = swiperList;
			}
            this.getSystemIntroduction();
			// 活动公告
			res = await this.$api.list('news', {
				page: 1,
				limit: 6
			});
			this.news = res.data.list


			res = await this.$api.list('chanpinxinxi', {
				page: 1,

				limit: 4
			});
			this.homechanpinxinxilist = res.data.list
		},

		methods: {

			//轮播图跳转
			onSwiperTap(e) {

			},
            async getSystemIntroduction() {
                let res = await this.$api.info('systemintro', 1)
                this.systemIntroductionDetail = res.data;
            },
			// 新闻详情
			onNewsDetailTap(id) {
				this.$utils.jump(`../news-detail/news-detail?id=${id}`)
			},
			// 推荐列表点击详情
			onDetailTap(tableName, id) {
				this.$utils.jump(`../${tableName}/detail?id=${id}`)
			},
			onPageTap(tableName){

				uni.navigateTo({
					url: `../${tableName}/list`,
					fail: function(){
						uni.switchTab({
							url: `../${tableName}/list`
						});
					}
				});
				// this.$utils.jump(`../${tableName}/list`)
			},
            onPageTap2(url) {
                uni.setStorageSync("useridTag",0);
                uni.navigateTo({
                    url: url,
                    fail: function() {
                        uni.switchTab({
                            url: url
                        });
                    }
                });
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
