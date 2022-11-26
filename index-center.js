

// 柱状图

(function () {


    var myChart = echarts.init(document.getElementsByClassName('pillar')[0])

    var item = {
        name: '',
        value: 1200,

        itemStyle: {
            color: '#254065'
        },

        pass: {
            itemStyle: {
                color: '#254065'
            }
        },
        tooltip: {
            extraCssText: 'opacity:0'
        }
    }

    var option = {

        tooltip: {
            trigger: 'item',
            axisPointer: {
                type: 'none'
            }
        },
        color: {
            type: 'linear',
            x: 0,
            y: 0,
            x2: 0,
            y2: 1,
            colorStops: [{
                offset: 0, color: '#00fffb' // 0% 处的颜色
            }, {
                offset: 1, color: '#0061ce' // 100% 处的颜色
            }],
            global: false // 缺省为 false
        },
        grid: {
            left: '3%',
            right: '1%',
            bottom: '0%',
            top: '4%',
            containLabel: true,
            show: true,
            borderColor: 'rgba(0, 240, 255, 0.3)'
        },
        xAxis: [
            {
                type: 'category',
                data: ['郑州', '广州', '北京', '深圳', '合肥', '', '......', '', '杭州', '厦门', '济南', '成都', '重庆'],
                axisTick: {
                    alignWithLabel: false,
                    show: false,
                },
                axisLabel: {
                    color: '#71f2fb'
                },
                axisLine: {
                    lineStyle: {
                        color: 'rgba(0, 240, 255, 0.3)'
                    }
                }
            }
        ],
        yAxis: [
            {
                type: 'value',
                axisLabel: {
                    color: '#71f2fb'
                },
                splitLine: {
                    lineStyle: {
                        color: 'rgba(0, 240, 255, 0.3)'
                    }
                }
            },
        ],
        series: [
            {
                name: 'Direct',
                type: 'bar',
                barWidth: '60%',
                data: [2100, 1900, 1700, 1560, 1400, item, item, item, 900, 750, 600, 480, 240]
            }
        ]
    };

    myChart.setOption(option)
    window.addEventListener('load', function () {
        myChart.resize()
    })
    window.addEventListener('resize', function () {
        myChart.resize()
    })

}())