<template>
	<view class="page" v-if="list.length" :style="{'bottom':bottomHeight + 'px'}">
		<view class="listBG" v-if="listShow" @click="listShow=false"></view>
		<view class="list" v-if="listShow">
			<scroll-view :scroll-y="true" style="max-height: 60vh;">
				<view class="music" v-for="(item,index) in list" :key="index" :class="musicIndex==index?'musicActive':''"
					@click="playListClick(index)">
					<view class="left" v-if="musicIndex!=index">
						{{ index + 1}}
					</view>
					<view class="left" v-if="musicIndex==index">
						<image :src="item.tupian?baseUrl + item.tupian.split(',')[0]:'/static/player/plays.jpg'" mode="aspectFill"></image>
					</view>
					<view class="center">
						<view class="name">{{item.songname}}</view>
						<view class="singer">{{item.singer}}</view>
					</view>
					<view class="right">
						<image src="/static/player/shanchu.png" mode="widthFix" @click.stop="delListClick(index)"></image>
					</view>
				</view>
			</scroll-view>
		</view>
		<view class="playView">
			<view class="playLeft">
				<image
					:src="musicIndex!= -1&&list.length&&list[musicIndex].tupian? baseUrl + list[musicIndex].tupian.split(',')[0]:'/static/player/plays.jpg'"
					mode="aspectFill"></image>
			</view>
			<view class="playRight">
				<view class="top">
					<view class="info">{{musicIndex!= -1&&list.length ?list[musicIndex].songname:''}} -
						{{musicIndex != -1&&list.length?list[musicIndex].singer:''}}
					</view>
					<view class="play">
						<image class="bofang" @click="playsClick" v-if="!playType" src="/static/player/bofang.png"
							mode="widthFix"></image>
						<image class="bofang" @click="pauseClick" v-if="playType" src="/static/player/zanting.png"
							mode="widthFix"></image>
						<image class="bofang1" @click="playIndexClick(2)" v-if="playIndex==1"
							src="/static/player/danqu.png" mode="widthFix"></image>
						<image class="bofang1" @click="playIndexClick(3)" v-if="playIndex==2"
							src="/static/player/xunhuan.png" mode="widthFix"></image>
						<image class="bofang1" @click="playIndexClick(1)" v-if="playIndex==3"
							src="/static/player/suiji.png" mode="widthFix"></image>
						<image class="bofang2" @click="listClick" src="/static/player/list.png" mode="widthFix"></image>
					</view>
				</view>

				<view style="display: flex;align-items: center;">
					<slider :value="baifenbi" @change="sliderChange" :min="0" :max="100" style="width: 100%;"
						block-color="#ff0000" :block-size="12" />
					<view class="time">{{getTimeStr(nowTime*1000)}}/{{getTimeStr(allTime*1000)}}</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	var innerAudioContext = uni.createInnerAudioContext();
	innerAudioContext.autoplay = false; //不自动播放
	innerAudioContext.src = '';
	export default {
		data() {
			return {
				baifenbi: 0,
				allTime: 0,
				nowTime: 0,
				playTime: 0,
				musicIndex: -1,
				list: [],
				playType: false,
				playIndex: 1, //1单曲 //2列表 //3随机
				listShow: false,
                bottomHeight:0
			}
		},
		computed: {
			baseUrl() {
				return this.$base.url;
			},
		},
        mounted() {
            let that = this;
            wx.getSystemInfo({
                success(res) {
                    that.bottomHeight = res.windowBottom
                }
            })
        },
		methods: {
			stopClick() {
				innerAudioContext.stop()
			},
			getTimeStr(game_over_timestamp) {
				if (game_over_timestamp == 0)
					return "00:00";
				var date = new Date(parseInt(game_over_timestamp));
				var minutes = date.getMinutes() >= 10 ? date.getMinutes().toString() : "0" + date.getMinutes();
				var seconds = date.getSeconds() >= 10 ? date.getSeconds().toString() : "0" + date.getSeconds();

				return minutes + ":" + seconds
			},
			sliderChange(e) {

				let i = e.detail.value * this.allTime / 100
				innerAudioContext.seek(i)
			},
			changeMusic(item) {
				for (let x in this.list) {
					if (this.list[x].id == item.id) {
						this.musicIndex = Number(x)
						return false
					}
				}
				return true
			},
			playAllClick(item,list){
				this.list = list
				this.playClick(item)
			},
			playClick(item) {
				if (this.changeMusic(item)) {

					this.list.push(item)
					this.musicIndex = this.list.length - 1
				}
				innerAudioContext.src = this.baseUrl + this.list[this.musicIndex].songfile;
				this.$nextTick(function(){
					innerAudioContext.play()
				})
				innerAudioContext.onPlay(() => {
					this.playType = true
				})
				innerAudioContext.onPause(() => {
					this.playType = false
				})
				innerAudioContext.onTimeUpdate(() => {
					const {
						currentTime,
						duration
					} = innerAudioContext;
					this.nowTime = currentTime
					this.allTime = duration ? duration : 0
					this.baifenbi = duration ? Number((currentTime / duration * 100).toFixed(2)) : 0
					this.$forceUpdate()
				})
				innerAudioContext.onEnded(() => {
					if (this.playIndex == 1) {
						innerAudioContext.src = this.baseUrl + this.list[this.musicIndex].songfile;
						innerAudioContext.play()
					} else if (this.playIndex == 2) {
						let i = this.musicIndex
						if (i == this.list.length - 1) {
							i = 0
						} else {
							i++
						}
						this.musicIndex = i
						innerAudioContext.src = this.baseUrl + this.list[this.musicIndex].songfile;
						innerAudioContext.play()
					} else if (this.playIndex == 3) {
						let i = Number(this.list.length - 1)
						let a = this.random(0, i)
						this.musicIndex = a
						innerAudioContext.src = this.baseUrl + this.list[this.musicIndex].songfile;
						innerAudioContext.play()
					}
				})
			},
			random(min, max) {

				return Math.floor(Math.random() * (max - min)) + min;

			},
			playsClick() {
				innerAudioContext.play()
			},
			pauseClick() {
				innerAudioContext.pause()
			},
			playIndexClick(e) {
				this.playIndex = e
			},
			listClick() {
				this.listShow = true
			},
			delListClick(index) {
				if(this.musicIndex == index){
					if (this.list.length == 1) {
						innerAudioContext.stop()
						this.list.splice(index, 1)
						return false
					}
					if(this.musicIndex!=0){
						this.musicIndex--
					}
					
					innerAudioContext.play()
				}
				
				this.list.splice(index, 1)

			},
			playListClick(index) {
				this.musicIndex = index
				innerAudioContext.src = this.baseUrl + this.list[this.musicIndex].songfile;
				innerAudioContext.play()
			},
		}
	}
</script>

<style lang="scss">
	.page {
		position: fixed;
		bottom: 0;
		left: 0;
		width: 100%;
		padding: 20upx 20upx 0;
		box-sizing: border-box;
		background: #fff;
		box-shadow: 0 -4upx 10upx rgba(0, 0, 0, .3);
		height: 150upx;
	}

	.listBG {
		position: fixed;
		left: 0;
		top: 0;
		width: 100vw;
		height: 100vh;
		background-color: rgba(0, 0, 0, .3);
		z-index: 998;
	}

	.list {
		position: fixed;
		bottom: 0;
		left: 0;
		width: 100%;
		background: rgba(40, 41, 45, 1);
		z-index: 999;
		padding: 20upx 0 0;
		overflow: hidden;white-space: initial;
		max-height: 60vh;
		.music {
			width: 100%;
			padding: 0 24upx;
			box-sizing: border-box;
			border-bottom: 1upx solid #ddd;
			display: flex;
			align-items: center;
			justify-content: space-between;
			color: #ddd;

			.left {
				width: 15%;
				font-size: 28upx;
				text-align: center;
				padding-right: 20upx;
			}

			.center {
				width: 75%;
				display: flex;
				flex-direction: column;
				align-items: flex-start;
				line-height: 1.8;
				padding: 10upx 0;
			}

			.name {
				font-size: 32upx;
				display: inline-block;
				  white-space: nowrap; 
				  width: 90%; 
				  overflow: hidden;
				  text-overflow:ellipsis;
			}

			.singer {
				font-size: 26upx;
				color: #ccc;
				display: inline-block;
				  white-space: nowrap; 
				  width: 90%; 
				  overflow: hidden;
				  text-overflow:ellipsis;
			}

			.right {
				width: 10%;

				image {
					width: 36upx;
				}
			}
		}

		.music:last-of-type {
			border: none;
			margin-bottom: 100upx;
		}

		.musicActive {
			.left {
				image {
					width: 60upx;
					height: 60upx;
				}
			}

			.center {
				color: #03b4ff;

				.singer {
					color: #03b4ff;
				}
			}
		}
	}

	.playView {
		display: flex;
		width: 100%;
		align-items: center;

		.playLeft {
			font-size: 0;
			padding-right: 10upx;

			image {
				width: 90upx;
				height: 90upx;
				border-radius: 10upx;
			}
		}

		.playRight {
			width: calc(100% - 100upx);
		}
	}

	.top {
		display: flex;
		align-items: center;
		justify-content: space-between;
		width: 100%;

		.info {
			display: inline-block;
			white-space: nowrap;
			width: 70%;
			overflow: hidden;
			text-overflow: ellipsis;
		}

		.play {
			display: flex;
			align-items: center;
		}

		.bofang {
			width: 46upx;
			margin-right: 16upx;
		}

		.bofang1 {
			width: 50upx;
			margin-right: 16upx;
		}

		.bofang2 {
			width: 40upx;
		}
	}
</style>
