<template>
	<div class="menu-preview">

		<!-- 横向 -->
		<el-menu
		  :unique-opened="true"
		  :style='{"border":0,"padding":"0 20px","listStyle":"none","margin":"0","flexWrap":"wrap","background":"#FFF","display":"flex","position":"relative"}'
		  default-active="0"
		  class="el-menu-horizontal-demo"
		  mode="horizontal"
		>
		  <el-image v-if="false" :style='{"width":"44px","margin":"8px","objectFit":"cover","borderRadius":"100%","float":"left","height":"44px"}' src="http://codegen.caihongy.cn/20201114/7856ba26477849ea828f481fa2773a95.jpg" fit="cover"></el-image>
		  <!-- <el-menu-item index="0" @click="menuHandler('')">
			<i v-if='true' :style='{"width":"34px","verticalAlign":"middle","margin":"0 3px","fontSize":"18px","color":"inherit","textAlign":"center"}' class="el-icon-menu el-icon-s-home" />
			<span :style='{"color":"inherit","verticalAlign":"middle","fontSize":"14px"}'>系统首页</span>
		  </el-menu-item> -->
		  
		  <el-submenu :popper-append-to-body="false" index="0" @click.native="menuHandler('')">
				<template slot="title">
					<i v-if='true' :style='{"width":"34px","verticalAlign":"middle","margin":"0 3px","fontSize":"18px","color":"inherit","textAlign":"center"}' class="el-icon-menu el-icon-s-home" />
					<span :style='{"color":"inherit","verticalAlign":"middle","fontSize":"14px"}'>系统首页</span>
				</template>
		  </el-submenu>
		  <el-submenu :popper-append-to-body="false" index="1">
			<template slot="title">
				<i v-if='true' :style='{"width":"34px","verticalAlign":"middle","margin":"0 3px","fontSize":"18px","color":"inherit","textAlign":"center"}' class="el-icon-menu el-icon-user-solid" />
				<span :style='{"color":"inherit","verticalAlign":"middle","fontSize":"14px"}'>个人中心</span>
			</template>
			<el-menu-item index="1-1" @click="menuHandler('updatePassword')">修改密码</el-menu-item>
			<el-menu-item index="1-2" @click="menuHandler('center')">个人信息</el-menu-item>
		  </el-submenu>
		  <el-submenu :popper-append-to-body="false" v-for=" (menu,index) in menuList.backMenu" :key="menu.menu" :index="index+2+''">
			<template slot="title">
				<i v-if='true' :style='{"width":"34px","verticalAlign":"middle","margin":"0 3px","fontSize":"18px","color":"inherit","textAlign":"center"}' class="el-icon-menu" :class="icons[index]" />
				<span :style='{"color":"inherit","verticalAlign":"middle","fontSize":"14px"}'>{{ menu.menu }}</span>
			</template>
			<el-menu-item v-for=" (child,sort) in menu.child" :key="sort" :index="(index+2)+'-'+sort" @click="menuHandler(child.tableName)">{{ child.menu }}</el-menu-item>
		  </el-submenu>
		</el-menu>
	</div>
</template>

<script>
import menu from '@/utils/menu'
export default {
	data() {
		return {
			menuList: [],
			dynamicMenuRoutes: [],
			role: '',
			icons: [
				'el-icon-s-cooperation',
				'el-icon-s-order',
				'el-icon-s-platform',
				'el-icon-s-fold',
				'el-icon-s-unfold',
				'el-icon-s-operation',
				'el-icon-s-promotion',
				'el-icon-s-release',
				'el-icon-s-ticket',
				'el-icon-s-management',
				'el-icon-s-open',
				'el-icon-s-shop',
				'el-icon-s-marketing',
				'el-icon-s-flag',
				'el-icon-s-comment',
				'el-icon-s-finance',
				'el-icon-s-claim',
				'el-icon-s-custom',
				'el-icon-s-opportunity',
				'el-icon-s-data',
				'el-icon-s-check',
				'el-icon-s-grid',
				'el-icon-menu',
				'el-icon-chat-dot-square',
				'el-icon-message',
				'el-icon-postcard',
				'el-icon-position',
				'el-icon-microphone',
				'el-icon-close-notification',
				'el-icon-bangzhu',
				'el-icon-time',
				'el-icon-odometer',
				'el-icon-crop',
				'el-icon-aim',
				'el-icon-switch-button',
				'el-icon-full-screen',
				'el-icon-copy-document',
				'el-icon-mic',
				'el-icon-stopwatch',
			],
			menulistBorderBottom: {},
		}
	},
	mounted() {
		const menus = menu.list()
		if(menus) {
			this.menuList = menus
		} else {
			let params = {
				page: 1,
				limit: 1,
				sort: 'id',
			}
			
			this.$http({
				url: "menu/list",
				method: "get",
				params: params
			}).then(({
				data
			}) => {
				if (data && data.code === 0) {
					this.menuList = JSON.parse(data.data.list[0].menujson);
					this.$storage.set("menus", this.menuList);
				}
			})
		}
		this.role = this.$storage.get('role')
		
		for(let i=0;i<this.menuList.length;i++) {
			if(this.menuList[i].roleName == this.role) {
				this.menuList = this.menuList[i];
				break;
			}
		}
		this.styleChange()
	},
	created(){
		this.icons.sort(()=>{
			return (0.5-Math.random())
		})
	},
	methods: {
		
		styleChange() {
			this.$nextTick(() => {
												document.querySelectorAll('.el-menu-horizontal-demo .el-submenu .el-menu').forEach(el => {
				  el.removeAttribute('style')
				  const icon = {"border":"none","minWidth":"150px"}
				  Object.keys(icon).forEach((key) => {
				    el.style[key] = icon[key]
				  })
				})
							})
		},
		menuHandler(name) {
			let router = this.$router
			name = '/'+name
			router.push(name)
		},
	}
}
</script>
<style lang="scss" scoped>
	.menu-preview {
	  .el-scrollbar {
	    height: 100%;
	
	    & /deep/ .scrollbar-wrapper {
	      overflow-x: hidden;
	    }
		
			  }
	  	  // --- 横向 ---
	  .el-menu-horizontal-demo {
	    .el-submenu:first-of-type /deep/ .el-submenu__title .el-submenu__icon-arrow {
	      display: none;
	    }
	  }
	  
	  .el-menu-horizontal-demo>.el-menu-item {
		  		  border: 0;
		  		  cursor: pointer;
		  		  padding: 0 20px;
		  		  color: #909399;
		  		  white-space: nowrap;
		  		  display: flex;
		  		  font-size: 14px;
		  		  line-height: 1;
		  		  justify-content: center;
		  		  align-items: center;
		  		  list-style: none;
		  		  height: 40px;
		  	  }
	  
	  .el-menu-horizontal-demo>.el-menu-item:hover {
	  		  	border-radius: 10px 10px 0 0;
	  		  	color: #000;
	  		  	background: linear-gradient(270deg, #BCDCFF 0%, #FCB5B7 100%);
	  		  }
	  
	  .el-menu-horizontal-demo .el-submenu {
		  		  border-radius: 10px 10px 0 0;
		  		  padding: 0;
		  		  box-shadow: 0px 3px 6px 1px rgba(0,0,0,0.1608);
		  		  margin: 15px 0 0;
		  		  background: #F1EEEE;
		  		  width: 150px;
		  		  float: left;
		  		  list-style: none;
		  	  }
	  
	  .el-menu-horizontal-demo .el-submenu /deep/ .el-submenu__title {
	  		  	border: 0;
	  		  	cursor: pointer;
	  		  	padding: 0 20px;
	  		  	color: #909399;
	  		  	white-space: nowrap;
	  		  	display: flex;
	  		  	font-size: 14px;
	  		  	line-height: 1;
	  		  	justify-content: center;
	  		  	align-items: center;
	  		  	list-style: none;
	  		  	height: 40px;
	  		  }
	  
	  .el-menu-horizontal-demo .el-submenu /deep/ .el-submenu__title:hover {
	  		  	border-radius: 10px 10px 0 0;
	  		  	color: #000;
	  		  	background: linear-gradient(270deg, #BCDCFF 0%, #FCB5B7 100%);
	  		  }
	  
	  .el-menu-horizontal-demo .el-submenu /deep/ .el-submenu__title .el-submenu__icon-arrow {
	  		  	margin: -3px 0 0 8px;
	  		  	color: inherit;
	  		  	vertical-align: middle;
	  		  	font-size: 0;
	  		  	position: static;
	  		  }
	  
	  // .el-menu-horizontal-demo .el-submenu /deep/ .el-menu {
	  // 		  // 	border: none;
	  // 		  // 	min-width: 150px;
	  // 		  // }
	  
	  .el-menu-horizontal-demo .el-submenu /deep/ .el-menu .el-menu-item {
	  		  	border-radius: 10px 10px 0 0;
	  		  	padding: 0 40px;
	  		  	color: #666;
	  		  	background: #fff;
	  		  	line-height: 50px;
	  		  	text-align: center;
	  		  	min-width: 150px;
	  		  	height: 50px;
	  		  }
	  
	  .el-menu-horizontal-demo .el-submenu /deep/ .el-menu .el-menu-item:hover {
	  		  	padding: 0 40px;
	  		  	color: #000;
	  		  	background: linear-gradient(270deg, #BCDCFF 0%, #FCB5B7 100%);
	  		  	line-height: 50px;
	  		  	height: 50px;
	  		  }
	  
	  .el-menu-horizontal-demo .el-submenu /deep/ .el-menu .el-menu-item.is-active {
	  		  	padding: 0 40px;
	  		  	color: #000;
	  		  	background: linear-gradient(270deg, #BCDCFF 0%, #FCB5B7 100%);
	  		  	line-height: 50px;
	  		  	height: 50px;
	  		  }
	  // --- 横向 ---
	  	}
</style>
