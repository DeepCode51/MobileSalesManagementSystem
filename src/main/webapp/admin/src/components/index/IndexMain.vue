<template>
	<div style="height: 100%;">
		<index-aside v-if="'horizontal' == 'vertical'" :style='{"boxShadow":"1px 0 6px  rgba(64, 158, 255, .3)","overflow":"hidden","top":"0","left":"0","background":"#304156","bottom":"0","width":"210px","fontSize":"0px","position":"fixed","height":"100%","zIndex":"1001"}'></index-aside>
		<el-main :style='"horizontal" == "vertical" ? {"minHeight":"100%","padding":"0","margin":"0 0 0 210px","position":"relative","display":"block"} : {"minHeight":"100%","margin":"0","position":"relative"}'>
			<index-header :style='{"boxShadow":"0 0px 0px rgba(64, 158, 255, .2)","padding":"8px 20px","alignItems":"center","background":"#B1D7FF","display":"flex","width":"100%","position":"relative","justifyContent":"center","zIndex":"1"}'></index-header>
			<index-aside v-if="'horizontal' == 'horizontal'" :style='{"width":"100%","borderColor":"#efefef","borderStyle":"solid","background":"#304156","borderWidth":"0 0 1px 0","height":"auto"}'></index-aside>
			<bread-crumbs :title="title" :style='{"padding":"15px 10px","margin":"15px auto 0 auto","borderColor":"#eee","borderWidth":"0","background":"#fff","width":"calc(100% - 60px)","borderStyle":"solid"}' class="bread-crumbs"></bread-crumbs>
			<router-view :style='{"padding":"30px","backgroundAttachment":"fixed","flexWrap":"wrap","background":"url(http://codegen.caihongy.cn/20220722/80372eb23618496bbe34600367648e16.png)","flexDirection":"row-reverse","display":"flex","backgroundSize":"cover","backgroundPosition":"center center","backgroundRepeat":"repeat","height":"calc(100vh - 192px)"}' class="router-view" style="height:auto;background: transparent;"></router-view>
		</el-main>
	</div>
</template>

<script>
	import IndexAside from '@/components/index/IndexAsideStatic'
	import IndexHeader from '@/components/index/IndexHeader'
	import menu from "@/utils/menu";
	export default {
		components: {
			IndexAside,
			IndexHeader
		},
		data() {
			return {
				menuList: [],
				role: "",
				currentIndex: -2,
				itemMenu: [],
				title: '',
			};
		},
		mounted() {
			let menus = menu.list();
			this.menuList = menus;
			this.role = this.$storage.get("role");
		},
		created() {
			this.init();
		},
		methods: {
			init(){
				this.$nextTick(()=>{
					
				})
			},
			menuHandler(menu) {
				this.$router.push({
					name: menu.tableName
				});
				this.title = menu.menu;
			},
			titleChange(index, menus) {
				this.currentIndex = index
				this.itemMenu = menus;
				console.log(menus);
			},
			homeChange(index) {
				this.itemMenu = [];
				this.title = ""
				this.currentIndex = index
				this.$router.push({
					name: 'home'
				});
			},
			centerChange(index) {
				this.itemMenu = [{
					"buttons": ["新增", "查看", "修改", "删除"],
					"menu": "修改密码",
					"tableName": "updatePassword"
				}, {
					"buttons": ["新增", "查看", "修改", "删除"],
					"menu": "个人信息",
					"tableName": "center"
				}];
				this.title = ""
				this.currentIndex = index
				this.$router.push({
					name: 'home'
				});
				
			}
		}
	};
</script>
<style lang="scss" scoped>
	a {
		text-decoration: none;
		color: #555;
	}

	a:hover {
		background: #00c292;
	}
	
	.el-main {
		padding: 0;
		display: block;
	}

	.nav-list {
		width: 100%;
		margin: 0 auto;
		text-align: left;
		margin-top: 20px;

		.nav-title {
			display: inline-block;
			font-size: 15px;
			color: #333;
			padding: 15px 25px;
			border: none;
		}

		.nav-title.active {
			color: #555;
			cursor: default;
			background-color: #fff;
		}
	}

	.nav-item {
		margin-top: 20px;
		background: #FFFFFF;
		padding: 15px 0;

		.menu {
			padding: 15px 25px;
		}
	}
	
	.detail-form-content {
	    background: transparent;
	}
</style>
