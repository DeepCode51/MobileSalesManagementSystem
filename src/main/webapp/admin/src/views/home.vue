<template>
<div class="content">
	<div class="text" :style='{"margin":"50px auto","fontSize":"24px","color":"rgb(51, 51, 51)","textAlign":"center","fontWeight":"bold"}'>欢迎使用 {{this.$project.projectName}}</div>
    <div class="cardView">
        <div class="cards" :style='{"margin":"0 0 20px 0","alignItems":"center","justifyContent":"center","display":"flex"}'>
			<div :style='{"width":"24%","boxShadow":"0 1px 6px rgba(0,0,0,.3)","margin":"0 10px","borderRadius":"4px","display":"flex"}' v-if="isAuth('dingdanxinxi','首页总数')">
				<div :style='{"width":"120px","background":"#B1D7FF","height":"120px"}'></div>
				<div :style='{"width":"calc(100% - 120px)","alignItems":"center","flexDirection":"column","justifyContent":"center","display":"flex"}'>
					<div :style='{"margin":"5px 0","lineHeight":"24px","fontSize":"20px","color":"#333","fontWeight":"bold","height":"24px"}'>{{dingdanxinxiCount}}</div>
					<div :style='{"margin":"5px 0","lineHeight":"24px","fontSize":"16px","color":"#666","height":"24px"}'>订单信息总数</div>
				</div>
			</div>
			<div :style='{"width":"24%","boxShadow":"0 1px 6px rgba(0,0,0,.3)","margin":"0 10px","borderRadius":"4px","display":"flex"}' v-if="isAuth('kaoqinxinxi','首页总数')">
				<div :style='{"width":"120px","background":"#B1D7FF","height":"120px"}'></div>
				<div :style='{"width":"calc(100% - 120px)","alignItems":"center","flexDirection":"column","justifyContent":"center","display":"flex"}'>
					<div :style='{"margin":"5px 0","lineHeight":"24px","fontSize":"20px","color":"#333","fontWeight":"bold","height":"24px"}'>{{kaoqinxinxiCount}}</div>
					<div :style='{"margin":"5px 0","lineHeight":"24px","fontSize":"16px","color":"#666","height":"24px"}'>考勤信息总数</div>
				</div>
			</div>
        </div>
        <div style="display: flex;align-items: center;width: 100%;margin-bottom: 10px;">
            <el-card style="width: 25%;margin: 0 10px;" v-if="isAuth('dingdanxinxi','首页统计')">
                <div id="dingdanxinxiChart1" style="width:100%;height:400px;"></div>
            </el-card>
            <el-card style="width: 25%;margin: 0 10px;" v-if="isAuth('dingdanxinxi','首页统计')">
                <div id="dingdanxinxiChart2" style="width:100%;height:400px;"></div>
            </el-card>
            <el-card style="width: 25%;margin: 0 10px;" v-if="isAuth('dingdanxinxi','首页统计')">
                <div id="dingdanxinxiChart3" style="width:100%;height:400px;"></div>
            </el-card>
            <el-card style="width: 25%;margin: 0 10px;" v-if="isAuth('kaoqinxinxi','首页统计')">
                <div id="kaoqinxinxiChart1" style="width:100%;height:400px;"></div>
            </el-card>
        </div>
    </div>
</div>
</template>
<script>
//4
import router from '@/router/router-static'
import * as echarts from 'echarts'
export default {
	data() {
		return {
            dingdanxinxiCount: 0,
            kaoqinxinxiCount: 0,
		};
	},
  mounted(){
    this.init();
    this.getdingdanxinxiCount();
    this.dingdanxinxiChat1();
    this.dingdanxinxiChat2();
    this.dingdanxinxiChat3();
    this.getkaoqinxinxiCount();
    this.kaoqinxinxiChat1();
  },
  methods:{
    init(){
        if(this.$storage.get('Token')){
        this.$http({
            url: `${this.$storage.get('sessionTable')}/session`,
            method: "get"
        }).then(({ data }) => {
            if (data && data.code != 0) {
            router.push({ name: 'login' })
            }
        });
        }else{
            router.push({ name: 'login' })
        }
    },
    getdingdanxinxiCount() {
        this.$http({
            url: `dingdanxinxi/count`,
            method: "get"
        }).then(({
            data
        }) => {
            if (data && data.code == 0) {
                this.dingdanxinxiCount = data.data
            }
        })
    },

    dingdanxinxiChat1() {
      this.$nextTick(()=>{
        //  zongjiage
        // xingming xingming

        var dingdanxinxiChart1 = echarts.init(document.getElementById("dingdanxinxiChart1"),'roma');
        this.$http({
            url: `dingdanxinxi/value/xingming/zongjiage`,
            method: "get",
        }).then(({ data }) => {
            if (data && data.code === 0) {
                let res = data.data;
                let xAxis = [];
                let yAxis = [];
                let pArray = []
                for(let i=0;i<res.length;i++){
                    xAxis.push(res[i].xingming);
                    yAxis.push(parseFloat((res[i].total)));
                    pArray.push({
                        value: parseFloat((res[i].total)),
                        name: res[i].xingming
                    })
                }
                var option = {};
                option = {
                    title: {
                        text: '个人销售额统计',
                        left: 'center'
                    },
                    tooltip: {
                      trigger: 'item',
                      formatter: '{b} : {c}'
                    },
                    xAxis: {
                        type: 'category',
                        boundaryGap: false,
                        data: xAxis
                    },
                    yAxis: {
                        type: 'value'
                    },
                    series: [{
                        data: yAxis,
                        type: 'line',
                        areaStyle: {}
                    }]
                };
                // 使用刚指定的配置项和数据显示图表。
                dingdanxinxiChart1.setOption(option);
                  //根据窗口的大小变动图表
                window.onresize = function() {
                    dingdanxinxiChart1.resize();
                };
            }
        });
      })
    },

    dingdanxinxiChat2() {
      this.$nextTick(()=>{
        // chanpinmingcheng chanpinmingcheng
        //  shuliang

        var dingdanxinxiChart2 = echarts.init(document.getElementById("dingdanxinxiChart2"),'roma');
        this.$http({
            url: `dingdanxinxi/value/chanpinmingcheng/shuliang`,
            method: "get",
        }).then(({ data }) => {
            if (data && data.code === 0) {
                let res = data.data;
                let xAxis = [];
                let yAxis = [];
                let pArray = []
                for(let i=0;i<res.length;i++){
                    xAxis.push(res[i].chanpinmingcheng);
                    yAxis.push(parseFloat((res[i].total)));
                    pArray.push({
                        value: parseFloat((res[i].total)),
                        name: res[i].chanpinmingcheng
                    })
                }
                var option = {};
                option = {
                    title: {
                        text: '产品销量统计',
                        left: 'center'
                    },
                    tooltip: {
                      trigger: 'item',
                      formatter: '{b} : {c}'
                    },
                    xAxis: {
                        type: 'value'
                    },
                    yAxis: {
                        type: 'category',
                        data: xAxis
                    },
                    series: [{
                        data: yAxis,
                        type: 'bar'
                    }]
                };
                // 使用刚指定的配置项和数据显示图表。
                dingdanxinxiChart2.setOption(option);
                  //根据窗口的大小变动图表
                window.onresize = function() {
                    dingdanxinxiChart2.resize();
                };
            }
        });
      })
    },

    dingdanxinxiChat3() {
      this.$nextTick(()=>{

        var dingdanxinxiChart3 = echarts.init(document.getElementById("dingdanxinxiChart3"),'roma');
        this.$http({
            url: "dingdanxinxi/group/chanpinleixing",
            method: "get",
        }).then(({ data }) => {
            if (data && data.code === 0) {
                let res = data.data;
                let xAxis = [];
                let yAxis = [];
                let pArray = []
                for(let i=0;i<res.length;i++){
                    xAxis.push(res[i].chanpinleixing);
                    yAxis.push(parseFloat((res[i].total)));
                    pArray.push({
                        value: parseFloat((res[i].total)),
                        name: res[i].chanpinleixing
                    })
                }
                var option = {};
                option = {
                        title: {
                            text: '类型销量统计',
                            left: 'center'
                        },
                        tooltip: {
                          trigger: 'item',
                          formatter: '{b} : {c} ({d}%)'
                        },
                        series: [
                            {
                                type: 'pie',
                                radius: ['25%', '55%'],
                                center: ['50%', '60%'],
                                data: pArray,
                                emphasis: {
                                    itemStyle: {
                                        shadowBlur: 10,
                                        shadowOffsetX: 0,
                                        shadowColor: 'rgba(0, 0, 0, 0.5)'
                                    }
                                }
                            }
                        ]
                };
                // 使用刚指定的配置项和数据显示图表。
                dingdanxinxiChart3.setOption(option);
                  //根据窗口的大小变动图表
                window.onresize = function() {
                    dingdanxinxiChart3.resize();
                };
            }
        });
      })
    },




    getkaoqinxinxiCount() {
        this.$http({
            url: `kaoqinxinxi/count`,
            method: "get"
        }).then(({
            data
        }) => {
            if (data && data.code == 0) {
                this.kaoqinxinxiCount = data.data
            }
        })
    },

    kaoqinxinxiChat1() {
      this.$nextTick(()=>{

        var kaoqinxinxiChart1 = echarts.init(document.getElementById("kaoqinxinxiChart1"),'vintage');
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
                      bottom: 10,     
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
                kaoqinxinxiChart1.setOption(option);
                  //根据窗口的大小变动图表
                window.onresize = function() {
                    kaoqinxinxiChart1.resize();
                };
            }
        });
      })
    },






  }
};
</script>
<style lang="scss" scoped>
    .cardView {
        display: flex;
        flex-wrap: wrap;
        width: 100%;

        .cards {
            display: flex;
            align-items: center;
            width: 100%;
            margin-bottom: 10px;
            justify-content: center;
            .card {
                width: calc(25% - 20px);
                margin: 0 10px;
                /deep/.el-card__body{
                    padding: 0;
                }
            }
        }
    }
</style>
