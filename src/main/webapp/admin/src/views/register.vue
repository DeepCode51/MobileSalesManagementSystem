<template>
	<div>
		<div class="container" :style='{"minHeight":"100vh","alignItems":"center","background":"url(http://codegen.caihongy.cn/20220722/848f05e8b1b447b1bd0ab1fdefa77e44.png)","display":"flex","width":"100%","backgroundSize":"cover","backgroundPosition":"center center","backgroundRepeat":"no-repeat","justifyContent":"center"}'>
			<el-form v-if="pageFlag=='register'" :style='{"border":"4px solid #B7DAFF","padding":"20px 0","boxShadow":"0px 40px 10px 1px rgba(175,213,255,0.4500)","margin":"0","borderRadius":"10px","alignItems":"center","background":"#fff","flexDirection":"column","display":"flex","width":"800px","height":"auto"}' ref="rgsForm" class="rgs-form" :model="rgsForm">
				<div v-if="true" :style='{"padding":"30px 0","margin":"0 auto 40px","color":"#262C60","borderRadius":"63px","textAlign":"center","background":"linear-gradient(135deg, #ADD4FF 0%, #F5DCE2 100%)","width":"65%","lineHeight":"44px","fontSize":"20px","textShadow":"0px 0px 0px rgba(64, 158, 255, .5)","fontWeight":"bold"}' class="title">移动销售管理系统注册</div>
				<el-form-item :style='{"width":"70%","padding":"0","margin":"0 auto 20px","height":"auto"}' class="list-item" v-if="tableName=='yonghu'">
					<div v-if="false" :style='{"width":"64px","lineHeight":"44px","fontSize":"14px","color":"rgba(64, 158, 255, 1)"}' class="lable">用户名</div>
					<el-input  v-model="ruleForm.yonghuming"  autocomplete="off" placeholder="用户名"  type="text"  />
				</el-form-item>
				<el-form-item :style='{"width":"70%","padding":"0","margin":"0 auto 20px","height":"auto"}' class="list-item" v-if="tableName=='yonghu'">
					<div v-if="false" :style='{"width":"64px","lineHeight":"44px","fontSize":"14px","color":"rgba(64, 158, 255, 1)"}' class="lable">密码</div>
					<el-input  v-model="ruleForm.mima"  autocomplete="off" placeholder="密码"  type="password"  />
				</el-form-item>
				<el-form-item :style='{"width":"70%","padding":"0","margin":"0 auto 20px","height":"auto"}' class="list-item" v-if="tableName=='yonghu'">
					<div v-if="false" :style='{"width":"64px","lineHeight":"44px","fontSize":"14px","color":"rgba(64, 158, 255, 1)"}' class="lable">确认密码</div>
					<el-input  v-model="ruleForm.mima2" autocomplete="off" placeholder="确认密码" type="password" />
				</el-form-item>
				<el-form-item :style='{"width":"70%","padding":"0","margin":"0 auto 20px","height":"auto"}' class="list-item" v-if="tableName=='yonghu'">
					<div v-if="false" :style='{"width":"64px","lineHeight":"44px","fontSize":"14px","color":"rgba(64, 158, 255, 1)"}' class="lable">姓名</div>
					<el-input  v-model="ruleForm.xingming"  autocomplete="off" placeholder="姓名"  type="text"  />
				</el-form-item>
				<el-form-item :style='{"width":"70%","padding":"0","margin":"0 auto 20px","height":"auto"}' class="list-item" v-if="tableName=='yonghu'">
					<div v-if="false" :style='{"width":"64px","lineHeight":"44px","fontSize":"14px","color":"rgba(64, 158, 255, 1)"}' class="lable">性别</div>
                    <el-select v-model="ruleForm.xingbie" placeholder="请选择性别" >
                        <el-option
                            v-for="(item,index) in yonghuxingbieOptions"
                            v-bind:key="index"
                            :label="item"
                            :value="item">
                        </el-option>
                    </el-select>
				</el-form-item>
				<el-form-item :style='{"width":"70%","padding":"0","margin":"0 auto 20px","height":"auto"}' class="list-item" v-if="tableName=='yonghu'">
					<div v-if="false" :style='{"width":"64px","lineHeight":"44px","fontSize":"14px","color":"rgba(64, 158, 255, 1)"}' class="lable">头像</div>
                    <file-upload
                        tip="点击上传头像"
                        action="file/upload"
                        :limit="3"
                        :multiple="true"
                        :fileUrls="ruleForm.touxiang?ruleForm.touxiang:''"
                        @change="yonghutouxiangUploadChange"
                    ></file-upload>
				</el-form-item>
				<el-form-item :style='{"width":"70%","padding":"0","margin":"0 auto 20px","height":"auto"}' class="list-item" v-if="tableName=='yonghu'">
					<div v-if="false" :style='{"width":"64px","lineHeight":"44px","fontSize":"14px","color":"rgba(64, 158, 255, 1)"}' class="lable">年龄</div>
					<el-input  v-model="ruleForm.nianling"  autocomplete="off" placeholder="年龄"  type="text"  />
				</el-form-item>
				<el-form-item :style='{"width":"70%","padding":"0","margin":"0 auto 20px","height":"auto"}' class="list-item" v-if="tableName=='yonghu'">
					<div v-if="false" :style='{"width":"64px","lineHeight":"44px","fontSize":"14px","color":"rgba(64, 158, 255, 1)"}' class="lable">手机</div>
					<el-input  v-model="ruleForm.shouji"  autocomplete="off" placeholder="手机"  type="text"  />
				</el-form-item>
				<el-form-item :style='{"width":"70%","padding":"0","margin":"0 auto 20px","height":"auto"}' class="list-item" v-if="tableName=='yonghu'">
					<div v-if="false" :style='{"width":"64px","lineHeight":"44px","fontSize":"14px","color":"rgba(64, 158, 255, 1)"}' class="lable">邮箱</div>
					<el-input  v-model="ruleForm.youxiang"  autocomplete="off" placeholder="邮箱"  type="text"  />
				</el-form-item>
				<button :style='{"border":"0","cursor":"pointer","padding":"0 10px","boxShadow":"0 0 0px rgba(64, 158, 255, .5)","margin":"20px auto 15px","color":"#000","display":"block","outline":"none","borderRadius":"28px","background":"linear-gradient(135deg, #B6D5FB 0%, #EDDBE5 100%)","width":"25%","fontSize":"16px","height":"44px"}' type="button" class="r-btn" @click="login()">注册</button>
				<div :style='{"cursor":"pointer","padding":"0 10%","color":"rgba(159, 159, 159, 1)","display":"inline-block","lineHeight":"1","fontSize":"12px","textDecoration":"underline"}' class="r-login" @click="close()">已有账号，直接登录</div>
			</el-form>
			
		</div>
	</div>
</template>

<script>

export default {
	data() {
		return {
			ruleForm: {
                xingbie: '',
			},

            pageFlag : '',
			tableName:"",
			rules: {},
            yonghuxingbieOptions: [],
		};
	},
	mounted(){
        this.pageFlag = this.$storage.get("pageFlag");
		let table = this.$storage.get("loginTable");
		this.tableName = table;
        this.yonghuxingbieOptions = "男,女".split(',')
	},
	created() {
    
	},
	destroyed() {
		  	},
	methods: {
		// 获取uuid
		getUUID () {
			return new Date().getTime();
		},
		close(){
			this.$router.push({ path: "/login" });
		},
        yonghutouxiangUploadChange(fileUrls) {
            this.ruleForm.touxiang = fileUrls;
        },

        // 多级联动参数


		// 注册
		login() {
			var url=this.tableName+"/register";
					if((!this.ruleForm.yonghuming) && `yonghu` == this.tableName){
						this.$message.error(`用户名不能为空`);
						return
					}
					
					
					
					
					
					
					
					
					
					
					if((!this.ruleForm.mima) && `yonghu` == this.tableName){
						this.$message.error(`密码不能为空`);
						return
					}
					
					
					
					
					
					
					
					
					
					
					if((this.ruleForm.mima!=this.ruleForm.mima2) && `yonghu` == this.tableName){
						this.$message.error(`两次密码输入不一致`);
						return
					}
					
					
					
					
					
					
					
					
					
					
					
					
					
					
					
					
					
					
					
					
            if(this.ruleForm.touxiang!=null) {
                this.ruleForm.touxiang = this.ruleForm.touxiang.replace(new RegExp(this.$base.url,"g"),"");
            }
					
					
					
					
					
					
					
					
					
					
					
					
					
					
					
					
					
					
					
					
					
					
					
					
					
					
					if(`yonghu` == this.tableName && this.ruleForm.shouji&&(!this.$validate.isMobile(this.ruleForm.shouji))){
						this.$message.error(`手机应输入手机格式`);
						return
					}
					
					
					
					
					
					
					
					
					
					
					
					if(`yonghu` == this.tableName && this.ruleForm.youxiang&&(!this.$validate.isEmail(this.ruleForm.youxiang))){
						this.$message.error(`邮箱应输入邮件格式`);
						return
					}
					
					
					
				
			
			this.$http({
				url: url,
				method: "post",
				data:this.ruleForm
			}).then(({ data }) => {
				if (data && data.code === 0) {
					this.$message({
						message: "注册成功",
						type: "success",
						duration: 1500,
						onClose: () => {
							this.$router.replace({ path: "/login" });
						}
					});
				} else {
					this.$message.error(data.msg);
				}
			});
		}
	}
};
</script>

<style lang="scss" scoped>
	.container {
	  position: relative;
	  background: url(http://codegen.caihongy.cn/20220722/848f05e8b1b447b1bd0ab1fdefa77e44.png);

		.el-date-editor.el-input {
		  width: 100%;
		}
		
		.rgs-form .el-input /deep/ .el-input__inner {
						border: 0;
						border-radius: 0;
						padding: 0 10px;
						box-shadow: 0px 4px 10px 1px rgba(0,0,0,0.2);
						color: #000;
						width: 100%;
						font-size: 14px;
						height: 44px;
					}
		
		.rgs-form .el-select /deep/ .el-input__inner {
						border: 0;
						border-radius: 0;
						padding: 0 10px;
						box-shadow: 0px 4px 10px 1px rgba(0,0,0,0.2);
						outline: none;
						color: #000;
						width: 554px;
						font-size: 14px;
						height: 44px;
					}
		
		.rgs-form .el-date-editor /deep/ .el-input__inner {
						border: 0;
						border-radius: 0;
						padding: 0 10px 0 30px;
						box-shadow: 0px 4px 10px 1px rgba(0,0,0,0.2);
						outline: none;
						color: #000;
						width: 100%;
						font-size: 14px;
						height: 44px;
					}
		
		.rgs-form .el-date-editor /deep/ .el-input__inner {
						border: 0;
						border-radius: 0;
						padding: 0 10px 0 30px;
						box-shadow: 0px 4px 10px 1px rgba(0,0,0,0.2);
						outline: none;
						color: #000;
						width: 100%;
						font-size: 14px;
						height: 44px;
					}
		
		.rgs-form /deep/ .el-upload--picture-card {
			background: transparent;
			border: 0;
			border-radius: 0;
			width: auto;
			height: auto;
			line-height: initial;
			vertical-align: middle;
		}
		
		.rgs-form /deep/ .upload .upload-img {
		  		  border: 1px dashed #000;
		  		  cursor: pointer;
		  		  border-radius: 8px;
		  		  color: #000;
		  		  width: 160px;
		  		  font-size: 32px;
		  		  line-height: 160px;
		  		  text-align: center;
		  		  height: 160px;
		  		}
		
		.rgs-form /deep/ .el-upload-list .el-upload-list__item {
		  		  border: 1px dashed #000;
		  		  cursor: pointer;
		  		  border-radius: 8px;
		  		  color: #000;
		  		  width: 160px;
		  		  font-size: 32px;
		  		  line-height: 160px;
		  		  text-align: center;
		  		  height: 160px;
		  		}
		
		.rgs-form /deep/ .el-upload .el-icon-plus {
		  		  border: 1px dashed #000;
		  		  cursor: pointer;
		  		  border-radius: 8px;
		  		  color: #000;
		  		  width: 160px;
		  		  font-size: 32px;
		  		  line-height: 160px;
		  		  text-align: center;
		  		  height: 160px;
		  		}
	}
</style>
