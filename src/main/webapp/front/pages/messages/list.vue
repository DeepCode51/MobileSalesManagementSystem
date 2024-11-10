<template>
	<mescroll-uni @init="mescrollInit" :up="upOption" :down="downOption" @down="downCallback" @up="upCallback">
		
		<view class="cu-list menu-avatar comment solids-top">
				<view class="cu-item" v-for="(product,index) in list" :key="index" style="padding-left: 20rpx;">
					<view class="content">
						<view class="text-grey">
                            <view class="article-header-image">
                                <image class="image" v-if="product.avatarurl" :src="baseUrl+product.avatarurl" mode="widthFix"></image>
                            </view>
                            {{product.username}}
                        </view>
						<view class="text-gray text-content text-df">
							{{product.content}}
						</view>
						<view v-if="product.cpicture" class="image-view">
						    <image :style='{"borderRadius":"8rpx","width":"100%","height":"100%"}' mode="aspectFill" class="uni-product-image" :src="product.cpicture?baseUrl+product.cpicture:''"></image>
						</view>
						<view v-if="product.reply" class="bg-grey padding-sm radius margin-top-sm  text-sm">
							<view class="flex">
								<view class="flex-sub">{{product.reply}}</view>
							</view>
						</view>
						<view v-if="product.rpicture" class="image-view">
						    <image :style='{"borderRadius":"8rpx","width":"100%","height":"100%"}' mode="aspectFill" class="uni-product-image" :src="product.rpicture?baseUrl+product.rpicture:''"></image>
						</view>
						<view class="margin-top-sm flex justify-between">
							<view class="text-gray text-df">{{product.addtime}}</view>
						</view>
					</view>
				</view>
			</view>
		</view>
		
		<button  class="add-btn" @click="onAddTap()">添加留言</button>

	</mescroll-uni>
</template>

<script>
	export default {
		data() {
			return {
				list: [],
				mescroll: null, //mescroll实例对象
				downOption: {
					auto: false //是否在初始化后,自动执行下拉回调callback; 默认true
				},
				upOption: {
					noMoreSize: 5, //如果列表已无数据,可设置列表的总数量要大于半页才显示无更多数据;避免列表数据过少(比如只有一条数据),显示无更多数据会不好看; 默认5
					textNoMore: '~ 没有更多了 ~',
				},
				hasNext: true,
				searchForm: {},
				CustomBar: '0'
			};
		},
		computed: {
			baseUrl() {
				return this.$base.url;
			}
		},
		onShow() {
			this.hasNext = true
			// 重新加载数据
			if (this.mescroll) this.mescroll.resetUpScroll()
		},
		onLoad() {
			this.hasNext = true
			// 重新加载数据
			if (this.mescroll) this.mescroll.resetUpScroll()
		},
		methods: {
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
				let res = await this.$api.list(`messages`, {
					page: mescroll.num,
					limit: mescroll.size,
                    sort:"addtime",
                    order:"desc"
				});
				// 如果是第一页数据置空
				if (mescroll.num == 1) this.list = [];
				this.list = this.list.concat(res.data.list);
				if (res.data.list.length == 0) this.hasNext = false;
				mescroll.endSuccess(mescroll.size, this.hasNext);
			},
			// 详情
			onDetailTap(item) {
				this.$utils.jump(`./detail?id=${item.id}`)
			},
			// 修改
			onUpdateTap(id) {
				this.$utils.jump(`./add-or-update?id=${id}`)
			},
			// 添加
			onAddTap() {
				this.$utils.jump(`./liuyan`)
			},
			onDeleteTap(id) {
				var _this = this;
				uni.showModal({
					title: '提示',
					content: '是否确认删除',
					success: async function(res) {
						if (res.confirm) {
							await _this.$api.del('messages', JSON.stringify([id]));
							_this.hasNext = true
							// 重置分页参数页数为1
							_this.mescroll.resetUpScroll()
						}
					}
				});
			},
			// 搜索
			async search() {
				this.mescroll.num = 1
				let searchForm = {
					page: this.mescroll.num,
					limit: this.mescroll.size,
                    sort:"addtime",
                    order:"desc"
				}
				let res = await this.$api.list(`messages`, searchForm);
				// 如果是第一页数据置空
				if (this.mescroll.num == 1) this.list = [];
				this.list = this.list.concat(res.data.list);
				if (res.data.list.length == 0) this.hasNext = false;
				this.mescroll.endSuccess(this.mescroll.size, this.hasNext);
			}
		}
	};
</script>

<style>
	/* product */
	page {
		background: #EEEEEE;
	}

	view {
		font-size: 28upx;
	}

    .article-header-image {
        width: 60rpx;
        height: 60rpx;
        flex-shrink: 0;
        /* border-radius: 50%; */
        overflow: hidden;
        margin-right: 20rpx;
    }
    
    .article-header-image .image {
        width: 100%;
        height: 100%;
    }

	.uni-product-list {
		display: flex;
		width: 100%;
		flex-wrap: wrap;
		flex-direction: row;
		margin-top: 0upx;
	}

	.uni-product {
		padding: 10upx;
		margin: 10upx;
		display: flex;
		flex-direction: column;
		background: #FFFFFF;
	}

	.image-view {
		height: 330upx;
		width: 330upx;
		margin: 12upx 0;
	}

	.uni-product-image {
		height: 330upx;
		width: 330upx;
	}

	.uni-product-title {
		width: 300upx;
		word-break: break-all;
		display: -webkit-box;
		overflow: hidden;
		line-height: 1.5;
		text-overflow: ellipsis;
		-webkit-box-orient: vertical;
		-webkit-line-clamp: 2;
	}

	.uni-product-price {
		margin-top: 10upx;
		font-size: 28upx;
		line-height: 1.5;
		position: relative;
	}

	.uni-product-price-original {
		color: #e80080;
	}

	.uni-product-price-favour {
		color: #888888;
		text-decoration: line-through;
		margin-left: 10upx;
	}

	.uni-product-tip {
		position: absolute;
		right: 10upx;
		background-color: #ff3333;
		color: #ffffff;
		padding: 0 10upx;
		border-radius: 5upx;
	}

	uni-image>div,
	uni-image>img {
		width: 100%;
		height: 140px;
		object-fit: cover;
	}

	.add-btn {
		position: absolute;
		left: 30upx;
		right: 30upx;
		bottom: 16upx;
		z-index: 95;
		display: flex;
		align-items: center;
		justify-content: center;
		width: 690upx;
		height: 80upx;
		font-size: 32upx;
		color: #fff;
		background-color: red;
		border-radius: 10upx;
		box-shadow: 1px 2px 5px rgba(219, 63, 96, 0.4);
	}
</style>
