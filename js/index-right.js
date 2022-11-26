
(function () {
    //  365天 90天 30天 24小时 ===================

    // 获取天数
    var li_date = document.getElementsByClassName('li-date')
    // 获取 订单量\销售额
    var data_p = document.getElementsByClassName('data-p')
    // 获取 天数 的大盒子
    var date_box = document.getElementsByClassName('date-box')[0]
    var timer_1 = null  // 操作定时器
    var index = 0

    for (var i = 0; i < li_date.length; i++) {
        li_date[i].setAttribute('index', i)

        li_date[i].onclick = function () {
            index = this.getAttribute('index')

            for (var k = 0; k < li_date.length; k++) {
                // 控制 字体样式
                li_date[k].classList.remove('li-color')
                li_date[index].classList.add('li-color')

                // 控制 数据变化
                data_p[k].classList.add('data-p1')
                data_p[index].classList.remove('data-p1')

            }
        }
    }
    //  自动切换 =======================

    function auto() {
        timer_1 = setInterval(function () {
            index++
            if (index >= li_date.length) {
                index = 0
            }
            li_date[index].click()
        }, 2000)
    }
    auto()

    date_box.onmouseenter = function () {
        clearInterval(timer_1)
    }
    date_box.onmouseleave = function () {
        auto()
    };

}());


(function () {
    var data = {
        year: [
            [24, 40, 101, 134, 90, 230, 210, 230, 120, 230, 210, 120],
            [40, 64, 191, 324, 290, 330, 310, 213, 180, 200, 180, 79]
        ],
        quarter: [
            [23, 75, 12, 97, 21, 67, 98, 21, 43, 64, 76, 38],
            [43, 31, 65, 23, 78, 21, 82, 64, 43, 60, 19, 34]
        ],
        month: [
            [34, 87, 32, 76, 98, 12, 32, 87, 39, 36, 29, 36],
            [56, 43, 98, 21, 56, 87, 43, 12, 43, 54, 12, 98]
        ],
        week: [
            [43, 73, 62, 54, 91, 54, 84, 43, 86, 43, 54, 53],
            [32, 54, 34, 87, 32, 45, 62, 68, 93, 54, 54, 24]
        ]
    }

    var myChart = echarts.init(document.getElementsByClassName('sell')[0])

    var option = {
        title: {
            text: '单位:万',
            textStyle: {
                color: 'rgb(76,155,253)',
                fontSize: '12'
            },
            padding: [10, 45]

        },
        tooltip: {
            trigger: 'axis',
        },
        legend: {
            data: ['预计销售额', '实际销售额'],
            textStyle: {
                color: '#4c9bfd'
            },
            right: '5%'
        },
        grid: {
            left: '4%',
            right: '4%',
            bottom: '5%',
            top: '20%',
            containLabel: true,
            show: true,
            borderColor: '#012f4a'
        },
        xAxis: {
            type: 'category',
            boundaryGap: false,
            axisTick: {
                show: false
            },
            axisLabel: {
                color: '#4c9bfd'
            },
            axisLine: {
                show: 'false'
            },
            data: ['一月', '二月', '三月', '四月', '五月', '六月', '七月', '八月', '九月', '十月', '十一月', '十二月']
        },
        yAxis: {
            axisTick: {
                show: false
            },
            axisLabel: {
                color: '#4c9bfd'
            },
            splitLine: {
                lineStyle: {
                    color: '#012f4a'
                }
            },
            type: 'value'
        },
        color: ['#00f2f1', '#ed3f35'],
        series: [
            {
                name: '预计销售额',
                type: 'line',
                stack: 'Total',
                smooth: true,
                data: data.year[0],
            },
            {
                name: '实际销售额',
                type: 'line',
                stack: 'Total',
                smooth: true,
                data: data.year[1],
            },
        ]
    };

    myChart.setOption(option);

    // 找到 年 季 月 日 
    var data_ = document.getElementsByClassName('time-span')
    var data_span = document.getElementsByClassName('time-span')
    //  大盒子
    var sell_box = document.getElementsByClassName('sell-box')[0]
    var index = 0
    var timer = null

    for (var i = 0; i < data_.length; i++) {
        data_[i].setAttribute('index', i)
        data_[i].onclick = function () {
            index = this.getAttribute('index')

            for (var k = 0; k < data_.length; k++) {
                data_[k].classList.remove('time-color')
                data_[index].classList.add('time-color')
            }

            var dataTab = this.getAttribute('data-timeTab')

            option.series[0].data = data[dataTab][0]
            option.series[1].data = data[dataTab][1]

            myChart.setOption(option);

        }
    }

    function auto_sell() {
        timer = setInterval(function () {
            index++
            if (index >= data_span.length) {
                index = 0
            }
            data_span[index].click()
        }, 2000)
    }
    auto_sell()
    sell_box.onmouseenter = function () {
        clearInterval(timer)
    }
    sell_box.onmouseleave = function () {
        auto_sell()
    };

    window.addEventListener('load', function () {
        myChart.resize()
    })
    window.addEventListener('resize', function () {
        myChart.resize()
    })

}());



//  雷达图 ============================

(function () {


    var myChart = echarts.init(document.getElementsByClassName('radar')[0])

    const dataBJ = [
        [55, 9, 56, 0.46, 18, 6, 1],

    ];
    const lineStyle = {
        width: 2,
        opacity: 0.7
    };
    option = {
        radar: {
            indicator: [
                { name: '机场', max: 100 },
                { name: '商场', max: 20 },
                { name: '火车站', max: 100 },
                { name: '汽车站', max: .6 },
                { name: '地铁', max: 25 },
            ],
            center: ['50%', '50%'],
            radius: '60%',
            shape: 'circle',
            splitNumber: 4,
            axisName: {
                color: 'rgb(62,146,230)'
            },
            splitLine: {
                lineStyle: {
                    color: 'rgba(255, 255, 255, 0.5)'
                }
            },
            splitArea: {
                show: false
            },
            axisLine: {
                lineStyle: {
                    color: 'white'
                }
            }
        },
        tooltip: {
            show: true,
            backgroundColor: 'rgba(255,255,255,.3)',
            borderColor: 'white',
            borderWidth: 2,
            // position: ["70%", '40%']
        },
        series: [
            {
                name: 'Beijing',
                type: 'radar',
                lineStyle: lineStyle,
                symbol: 'circle',
                symbolSize: 5,
                label: {
                    show: true,
                    color: '#fff',
                    fontSize: 10
                },
                data: dataBJ,
                itemStyle: {
                    color: 'white',
                },
                areaStyle: {
                    opacity: 0.2,
                    color: 'yellow',
                }
            },
        ]
    };

    myChart.setOption(option)
    window.addEventListener('load', function () {
        myChart.resize()
    })
    window.addEventListener('resize', function () {
        myChart.resize()
    })
}());

