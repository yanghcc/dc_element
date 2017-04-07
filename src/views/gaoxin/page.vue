
<template>
    <div>
        <h2>
        这个是page页面
        </h2>
        <div class="index" id="chart" style="width: 600px;height:400px;">
            <!-- <router-link to="/page/profile">111111111111</router-link>
            <router-link to="/page/posts">222222222222</router-link>
            <router-view></router-view> -->
        </div>
    </div>
</template>
<script>
// var echarts = require('echarts');
import echarts from 'echarts'

export default {
        mounted: function () {
            // 基于准备好的dom，初始化echarts实例
            var myChart = echarts.init(document.getElementById('chart'));
            // 绘制图表
            myChart.setOption({
                title: { text: 'ECharts 入门示例' },
                tooltip: {},
                xAxis: {
                    data: ["衬衫","羊毛衫","雪纺衫","裤子","高跟鞋","袜子"]
                },
                yAxis: {},
                series: [{
                    name: '销量',
                    type: 'bar',
                    data: [5, 20, 36, 10, 10, 20]
                }]
            });
        },
        methods: {

        }
    }
</script>
