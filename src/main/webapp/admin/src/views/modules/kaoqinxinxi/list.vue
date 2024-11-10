<template>
	<div class="main-content">
		<!-- 列表页 -->
		<template v-if="showFlag">
			<el-form class="center-form-pv" :style='{"width":"10%","padding":"0 10px","margin":"0 0 20px","background":"#fff"}' :inline="true" :model="searchForm">
				<el-row :style='{"display":"block"}' >
					<div :style='{"margin":"0","flexDirection":"column","display":"flex"}' class="select" label="用户名" prop="yonghuming">
						<label :style='{"margin":"0 10px 0 0","color":"#000","display":"inline-block","lineHeight":"40px","fontSize":"14px","fontWeight":"500","height":"40px"}' class="item-label">用户名</label>
						<el-select  @change="yonghumingChange" clearable v-model="searchForm.yonghuming" placeholder="请选择用户名">
							<el-option v-for="(item,index) in yonghumingOptions" v-bind:key="index" :label="item" :value="item"></el-option>
						</el-select>
					</div>
					<div :style='{"margin":"0","flexDirection":"column","display":"flex"}'>
						<label :style='{"margin":"0 10px 0 0","color":"#000","display":"inline-block","lineHeight":"40px","fontSize":"14px","fontWeight":"500","height":"40px"}' class="item-label">姓名</label>
						<el-input v-model="searchForm.xingming" placeholder="姓名" clearable></el-input>
					</div>
					<el-button :style='{"border":"2px solid ","cursor":"pointer","padding":"0 24px","outline":"none","margin":"10px 0 0","color":"#000","borderRadius":"0","background":"#fff","borderImage":"linear-gradient(90deg, rgba(80, 165, 255, 0.5), rgba(255, 80, 80, 0.5))1 1","width":"100%","fontSize":"14px","height":"40px"}' type="success" @click="search()">查询</el-button>
				</el-row>

				<el-row :style='{"margin":"20px 0","flexDirection":"column","display":"flex"}'>
					<el-button :style='{"border":"2px solid #fff","cursor":"pointer","padding":"0","margin":"0 0 6px","outline":"none","color":"#000","borderRadius":"0","background":"#fff","borderImage":"linear-gradient(90deg, rgba(80, 165, 255, 0.5), rgba(255, 80, 80, 0.5))1 1","width":"100%","fontSize":"14px","height":"40px"}' v-if="isAuth('kaoqinxinxi','新增')" type="success" @click="addOrUpdateHandler()">新增</el-button>
					<el-button :style='{"border":"2px solid ","cursor":"pointer","padding":"0","margin":"0 0 6px","outline":"none","color":"#000","borderRadius":"0","background":"#fff","borderImage":"linear-gradient(90deg, rgba(80, 165, 255, 0.5), rgba(255, 80, 80, 0.5))1 1","width":"100%","fontSize":"14px","height":"40px"}' v-if="isAuth('kaoqinxinxi','删除')" :disabled="dataListSelections.length <= 0" type="danger" @click="deleteHandler()">删除</el-button>




					<el-button :style='{"border":"2px solid","cursor":"pointer","padding":"0","margin":"0 0 6px","outline":"none","color":"#000","borderRadius":"0","background":"#fff","borderImage":"linear-gradient(90deg, rgba(80, 165, 255, 0.5), rgba(255, 80, 80, 0.5))1 1","width":"100%","fontSize":"14px","height":"40px"}' v-if="isAuth('kaoqinxinxi','考勤统计')" type="warning" @click="chartDialog1()">考勤统计</el-button>
				</el-row>
			</el-form>
			
			<!-- <div> -->
				<el-table class="tables"
					:stripe='false'
					:style='{"padding":"0","borderColor":"#eee","borderWidth":"1px 0 0 1px","background":"#fff","width":"100%","borderStyle":"solid","height":"fit-content"}' 
					v-if="isAuth('kaoqinxinxi','查看')"
					:data="dataList"
					v-loading="dataListLoading"
				@selection-change="selectionChangeHandler">
					<el-table-column :resizable='true' type="selection" align="center" width="50"></el-table-column>
					<el-table-column :resizable='true' :sortable='false' label="索引" type="index" width="50" />
					<el-table-column :resizable='true' :sortable='false'  
						prop="yonghuming"
					label="用户名">
						<template slot-scope="scope">
							{{scope.row.yonghuming}}
						</template>
					</el-table-column>
					<el-table-column :resizable='true' :sortable='false'  
						prop="xingming"
					label="姓名">
						<template slot-scope="scope">
							{{scope.row.xingming}}
						</template>
					</el-table-column>
					<el-table-column :resizable='true' :sortable='false'  
						prop="kaoqinzhuangkuang"
					label="考勤状况">
						<template slot-scope="scope">
							{{scope.row.kaoqinzhuangkuang}}
						</template>
					</el-table-column>
					<el-table-column :resizable='true' :sortable='false'  
						prop="kaoqinriqi"
					label="考勤日期">
						<template slot-scope="scope">
							{{scope.row.kaoqinriqi}}
						</template>
					</el-table-column>
					<el-table-column width="300" label="操作">
						<template slot-scope="scope">
							<el-button :style='{"border":"0","cursor":"pointer","padding":"0 24px","margin":"0 10px 4px 0","outline":"none","color":"#fff","borderRadius":"30px","background":"#000","width":"auto","fontSize":"14px","height":"32px"}' v-if=" isAuth('kaoqinxinxi','查看')" type="success" size="mini" @click="addOrUpdateHandler(scope.row.id,'info')">详情</el-button>
							<el-button :style='{"border":"0","cursor":"pointer","padding":"0 24px","margin":"0 10px 4px 0","outline":"none","color":"#fff","borderRadius":"30px","background":"#000","width":"auto","fontSize":"14px","height":"32px"}' v-if=" isAuth('kaoqinxinxi','修改')" type="primary" size="mini" @click="addOrUpdateHandler(scope.row.id)">修改</el-button>





							<el-button :style='{"border":"0","cursor":"pointer","padding":"0 24px","margin":"0 10px 4px 0","outline":"none","color":"#fff","borderRadius":"30px","background":"#000","width":"auto","fontSize":"14px","height":"32px"}' v-if="isAuth('kaoqinxinxi','删除') " type="danger" size="mini" @click="deleteHandler(scope.row.id)">删除</el-button>
						</template>
					</el-table-column>
				</el-table>
				<el-pagination
					@size-change="sizeChangeHandle"
					@current-change="currentChangeHandle"
					:current-page="pageIndex"
					background
					:page-sizes="[10, 20, 30, 50]"
					:page-size="pageSize"
					:layout="layouts.join()"
					:total="totalPage"
					prev-text="<"
					next-text=">"
					:hide-on-single-page="true"
					:style='{"width":"100%","padding":"0","margin":"20px 0 0","whiteSpace":"nowrap","color":"#333","fontWeight":"500"}'
				></el-pagination>
			<!-- </div> -->
		</template>
		
		<!-- 添加/修改页面  将父组件的search方法传递给子组件-->
		<add-or-update v-if="addOrUpdateFlag" :parent="this" ref="addOrUpdate"></add-or-update>





		<el-dialog
		  title="考勤统计"
		  :visible.sync="chartVisiable1"
		  width="800">
			<div id="kaoqinzhuangkuangChart1" style="width:100%;height:600px;"></div>
		  <span slot="footer" class="dialog-footer">
			<el-button @click="chartDialog1">返回</el-button>
		  </span>
		</el-dialog>
	</div>
</template>

<script>
import * as echarts from 'echarts'
import axios from 'axios'
import AddOrUpdate from "./add-or-update";
export default {
  data() {
    return {
      yonghumingOptions: [],
      searchForm: {
        key: ""
      },
      form:{},
      dataList: [],
      pageIndex: 1,
      pageSize: 10,
      totalPage: 0,
      dataListLoading: false,
      dataListSelections: [],
      showFlag: true,
      sfshVisiable: false,
      shForm: {},
      chartVisiable: false,
      chartVisiable1: false,
      chartVisiable2: false,
      chartVisiable3: false,
      chartVisiable4: false,
      chartVisiable5: false,
      addOrUpdateFlag:false,
      layouts: ["total","prev","pager","next","sizes","jumper"],

    };
  },
  created() {
    this.init();
    this.getDataList();
    this.contentStyleChange()
  },
  mounted() {
  },
  filters: {
    htmlfilter: function (val) {
      return val.replace(/<[^>]*>/g).replace(/undefined/g,'');
    }
  },
  components: {
    AddOrUpdate,
  },
  methods: {

    contentStyleChange() {
      this.contentPageStyleChange()
    },
    // 分页
    contentPageStyleChange(){
      let arr = []

      // if(this.contents.pageTotal) arr.push('total')
      // if(this.contents.pageSizes) arr.push('sizes')
      // if(this.contents.pagePrevNext){
      //   arr.push('prev')
      //   if(this.contents.pagePager) arr.push('pager')
      //   arr.push('next')
      // }
      // if(this.contents.pageJumper) arr.push('jumper')
      // this.layouts = arr.join()
      // this.contents.pageEachNum = 10
    },



//统计接口
    chartDialog1() {
      this.chartVisiable1 = !this.chartVisiable1;
      this.$nextTick(()=>{

        var kaoqinzhuangkuangChart1 = echarts.init(document.getElementById("kaoqinzhuangkuangChart1"),'vintage');
        this.$http({
            url: "kaoqinxinxi/typeStat/kaoqinzhuangkuang/xingming",
            method: "get",
        }).then(({ data }) => {
            if (data && data.code === 0) {
                let res = data.data;
                let xAxis = [];
                let yAxis1 = [];
                let yAxis2 = [];
                let yAxis3 = [];
                let yAxis4 = [];
                let yAxis5 = [];
                let yAxis6 = [];
                let pArray = []
                for(let i=0;i<res.length;i++){
                    xAxis.push(res[i].xingming);
                    yAxis1.push(parseFloat((res[i].正常)));
                    yAxis2.push(parseFloat((res[i].迟到)));
                    yAxis3.push(parseFloat((res[i].早退)));
                    yAxis4.push(parseFloat((res[i].旷工)));
                    yAxis5.push(parseFloat((res[i].请假)));
                    yAxis6.push(parseFloat((res[i].休假)));
                    pArray.push({
                        name: res[i].kaoqinzhuangkuang
                    })
                }
                var option = {};
                option = {
                    title: {
                        text: '考勤统计',
                        left: 'center'
                    },
                    legend: {
                      data: [
                        '正常',
                        '迟到',
                        '早退',
                        '旷工',
                        '请假',
                        '休假',
                        ],
                      left: 'center',
                      bottom: 4,
                    },
                    tooltip: {
                      trigger: 'axis'
                    },
                    xAxis: {
                        type: 'category',
                        data: xAxis
                    },
                    yAxis: {
                        type: 'value'
                    },
                    series: [
                    {
                        name: '正常',
                        data: yAxis1,
                        type: 'bar'
                    },
                    {
                        name: '迟到',
                        data: yAxis2,
                        type: 'bar'
                    },
                    {
                        name: '早退',
                        data: yAxis3,
                        type: 'bar'
                    },
                    {
                        name: '旷工',
                        data: yAxis4,
                        type: 'bar'
                    },
                    {
                        name: '请假',
                        data: yAxis5,
                        type: 'bar'
                    },
                    {
                        name: '休假',
                        data: yAxis6,
                        type: 'bar'
                    },
                    ],
                };
                // 使用刚指定的配置项和数据显示图表。
                kaoqinzhuangkuangChart1.setOption(option);
                  //根据窗口的大小变动图表
                window.onresize = function() {
                    kaoqinzhuangkuangChart1.resize();
                };
            }
        });
      })
    },





    init () {
          this.$http({
            url: `option/yonghu/yonghuming`,
            method: "get"
          }).then(({ data }) => {
            if (data && data.code === 0) {
              this.yonghumingOptions = data.data;
            } else {
              this.$message.error(data.msg);
            }
          });
    },
    search() {
      this.pageIndex = 1;
      this.getDataList();
    },

    // 获取数据列表
    getDataList() {
      this.dataListLoading = true;
      let params = {
        page: this.pageIndex,
        limit: this.pageSize,
        sort: 'id',
        order: 'desc',
      }
           if(this.searchForm.yonghuming!='' && this.searchForm.yonghuming!=undefined){
            params['yonghuming'] = this.searchForm.yonghuming
          }
           if(this.searchForm.xingming!='' && this.searchForm.xingming!=undefined){
            params['xingming'] = '%' + this.searchForm.xingming + '%'
          }
      this.$http({
        url: "kaoqinxinxi/page",
        method: "get",
        params: params
      }).then(({ data }) => {
        if (data && data.code === 0) {
          this.dataList = data.data.list;
          this.totalPage = data.data.total;
        } else {
          this.dataList = [];
          this.totalPage = 0;
        }
        this.dataListLoading = false;
      });
    },
    // 每页数
    sizeChangeHandle(val) {
      this.pageSize = val;
      this.pageIndex = 1;
      this.getDataList();
    },
    // 当前页
    currentChangeHandle(val) {
      this.pageIndex = val;
      this.getDataList();
    },
    // 多选
    selectionChangeHandler(val) {
      this.dataListSelections = val;
    },
    // 添加/修改
    addOrUpdateHandler(id,type) {
      this.showFlag = false;
      this.addOrUpdateFlag = true;
      this.crossAddOrUpdateFlag = false;
      if(type!='info'){
        type = 'else';
      }
      this.$nextTick(() => {
        this.$refs.addOrUpdate.init(id,type);
      });
    },
    // 下载
    download(file){
      window.open(`${file}`)
    },
    // 删除
    deleteHandler(id) {
      var ids = id
        ? [Number(id)]
        : this.dataListSelections.map(item => {
            return Number(item.id);
          });
      this.$confirm(`确定进行[${id ? "删除" : "批量删除"}]操作?`, "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning"
      }).then(() => {
        this.$http({
          url: "kaoqinxinxi/delete",
          method: "post",
          data: ids
        }).then(({ data }) => {
          if (data && data.code === 0) {
            this.$message({
              message: "操作成功",
              type: "success",
              duration: 1500,
              onClose: () => {
                this.search();
              }
            });
          } else {
            this.$message.error(data.msg);
          }
        });
      });
    },


  }

};
</script>
<style lang="scss" scoped>
	
	.center-form-pv {
	  .el-date-editor.el-input {
	    width: auto;
	  }
	}
	
	.el-input {
	  width: auto;
	}
	
	// form
	.center-form-pv .el-input /deep/ .el-input__inner {
				border: 0;
				border-radius: 0;
				padding: 0 12px;
				box-shadow: 0 0 6px #50A5FF;
				outline: none;
				color: #000;
				width: 100%;
				font-size: 14px;
				height: 40px;
			}
	
	.center-form-pv .el-select /deep/ .el-input__inner {
				border: 0;
				border-radius: 0;
				padding: 0 10px;
				box-shadow: 0 0 6px #50A5FF;
				outline: none;
				color: #000;
				width: 100%;
				font-size: 14px;
				height: 40px;
			}
	
	.center-form-pv .el-date-editor /deep/ .el-input__inner {
				border: 0;
				border-radius: 0;
				padding: 0 10px 0 30px;
				box-shadow: 0 0 6px #50A5FF;
				outline: none;
				color: #000;
				width: 100%;
				font-size: 14px;
				height: 40px;
			}
	
	// table
	.el-table /deep/ .el-table__header-wrapper thead {
				color: #999;
				font-weight: 500;
				width: 100%;
			}
	
	.el-table /deep/ .el-table__header-wrapper thead tr {
				background: #fff;
			}
	
	.el-table /deep/ .el-table__header-wrapper thead tr th {
				padding: 12px 0;
				border-color: #6F6F97;
				border-width: 0 1px 1px 0;
				border-style: solid;
				text-align: center;
			}

	.el-table /deep/ .el-table__header-wrapper thead tr th .cell {
				padding: 0 10px;
				word-wrap: normal;
				word-break: break-all;
				white-space: normal;
				font-weight: bold;
				display: inline-block;
				vertical-align: middle;
				width: 100%;
				line-height: 24px;
				position: relative;
				text-overflow: ellipsis;
			}

	
	.el-table /deep/ .el-table__body-wrapper tbody {
				width: 100%;
			}

	.el-table /deep/ .el-table__body-wrapper tbody tr {
				background: #fff;
			}
	
	.el-table /deep/ .el-table__body-wrapper tbody tr td {
				padding: 12px 0;
				color: #000;
				background: #fff;
				border-color: #6F6F97;
				border-width: 0 1px 1px 0;
				border-style: solid;
				text-align: center;
			}
	
		
	.el-table /deep/ .el-table__body-wrapper tbody tr:hover td {
				padding: 12px 0;
				color: #000;
				background: #E8E8E8;
				border-color: #6F6F97;
				border-width: 0 1px 1px 0;
				border-style: solid;
			}
	
	.el-table /deep/ .el-table__body-wrapper tbody tr td {
				padding: 12px 0;
				color: #000;
				background: #fff;
				border-color: #6F6F97;
				border-width: 0 1px 1px 0;
				border-style: solid;
				text-align: center;
			}

	.el-table /deep/ .el-table__body-wrapper tbody tr td .cell {
				padding: 0 10px;
				overflow: hidden;
				word-break: break-all;
				white-space: normal;
				line-height: 24px;
				text-overflow: ellipsis;
			}
	
	// pagination
	.main-content .el-pagination /deep/ .el-pagination__total {
				margin: 0 10px 0 0;
				color: #666;
				font-weight: 400;
				display: inline-block;
				vertical-align: top;
				font-size: 13px;
				line-height: 28px;
				height: 28px;
			}
	
	.main-content .el-pagination /deep/ .btn-prev {
				border: none;
				border-radius: 2px;
				padding: 0;
				margin: 0 5px;
				color: #666;
				background: #f4f4f5;
				display: inline-block;
				vertical-align: top;
				font-size: 13px;
				line-height: 28px;
				min-width: 35px;
				height: 28px;
			}
	
	.main-content .el-pagination /deep/ .btn-next {
				border: none;
				border-radius: 2px;
				padding: 0;
				margin: 0 5px;
				color: #666;
				background: #f4f4f5;
				display: inline-block;
				vertical-align: top;
				font-size: 13px;
				line-height: 28px;
				min-width: 35px;
				height: 28px;
			}
	
	.main-content .el-pagination /deep/ .btn-prev:disabled {
				border: none;
				cursor: not-allowed;
				border-radius: 2px;
				padding: 0;
				margin: 0 5px;
				color: #C0C4CC;
				background: #f4f4f5;
				display: inline-block;
				vertical-align: top;
				font-size: 13px;
				line-height: 28px;
				height: 28px;
			}
	
	.main-content .el-pagination /deep/ .btn-next:disabled {
				border: none;
				cursor: not-allowed;
				border-radius: 2px;
				padding: 0;
				margin: 0 5px;
				color: #C0C4CC;
				background: #f4f4f5;
				display: inline-block;
				vertical-align: top;
				font-size: 13px;
				line-height: 28px;
				height: 28px;
			}

	.main-content .el-pagination /deep/ .el-pager {
				padding: 0;
				margin: 0;
				display: inline-block;
				vertical-align: top;
			}

	.main-content .el-pagination /deep/ .el-pager .number {
				cursor: pointer;
				padding: 0 4px;
				margin: 0 5px;
				color: #666;
				display: inline-block;
				vertical-align: top;
				font-size: 13px;
				line-height: 28px;
				border-radius: 2px;
				background: #f4f4f5;
				text-align: center;
				min-width: 30px;
				height: 28px;
			}
	
	.main-content .el-pagination /deep/ .el-pager .number:hover {
				cursor: pointer;
				padding: 0 4px;
				margin: 0 5px;
				color: #fff;
				display: inline-block;
				vertical-align: top;
				font-size: 13px;
				line-height: 28px;
				border-radius: 2px;
				background: #000;
				text-align: center;
				min-width: 30px;
				height: 28px;
			}
	
	.main-content .el-pagination /deep/ .el-pager .number.active {
				cursor: default;
				padding: 0 4px;
				margin: 0 5px;
				color: #FFF;
				display: inline-block;
				vertical-align: top;
				font-size: 13px;
				line-height: 28px;
				border-radius: 2px;
				background: #000;
				text-align: center;
				min-width: 30px;
				height: 28px;
			}
	
	.main-content .el-pagination /deep/ .el-pagination__sizes {
				display: inline-block;
				vertical-align: top;
				font-size: 13px;
				line-height: 28px;
				height: 28px;
			}
	
	.main-content .el-pagination /deep/ .el-pagination__sizes .el-input {
				margin: 0 5px;
				width: 100px;
				position: relative;
			}
	
	.main-content .el-pagination /deep/ .el-pagination__sizes .el-input .el-input__inner {
				border: 1px solid #DCDFE6;
				cursor: pointer;
				padding: 0 25px 0 8px;
				color: #606266;
				display: inline-block;
				font-size: 13px;
				line-height: 28px;
				border-radius: 3px;
				outline: 0;
				background: #FFF;
				width: 100%;
				text-align: center;
				height: 28px;
			}
	
	.main-content .el-pagination /deep/ .el-pagination__sizes .el-input span.el-input__suffix {
				top: 0;
				position: absolute;
				right: 0;
				height: 100%;
			}
	
	.main-content .el-pagination /deep/ .el-pagination__sizes .el-input .el-input__suffix .el-select__caret {
				cursor: pointer;
				color: #C0C4CC;
				width: 25px;
				font-size: 14px;
				line-height: 28px;
				text-align: center;
			}
	
	.main-content .el-pagination /deep/ .el-pagination__jump {
				margin: 0 0 0 24px;
				color: #606266;
				display: inline-block;
				vertical-align: top;
				font-size: 13px;
				line-height: 28px;
				height: 28px;
			}
	
	.main-content .el-pagination /deep/ .el-pagination__jump .el-input {
				border-radius: 3px;
				padding: 0 2px;
				margin: 0 2px;
				display: inline-block;
				width: 50px;
				font-size: 14px;
				line-height: 18px;
				position: relative;
				text-align: center;
				height: 28px;
			}
	
	.main-content .el-pagination /deep/ .el-pagination__jump .el-input .el-input__inner {
				border: 1px solid #DCDFE6;
				cursor: pointer;
				padding: 0 3px;
				color: #606266;
				display: inline-block;
				font-size: 14px;
				line-height: 28px;
				border-radius: 3px;
				outline: 0;
				background: #FFF;
				width: 100%;
				text-align: center;
				height: 28px;
			}
</style>
