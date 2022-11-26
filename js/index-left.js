

//  获取  故障\异常 界面
var fault = document.getElementsByClassName('fault')

// 获取  故障\异常 标题
var facility_s = document.getElementsByClassName('facility-s')

for (var i = 0; i < facility_s.length; i++) {
    facility_s[i].setAttribute('index', i)

    facility_s[i].onclick = function () {
        var index = this.getAttribute('index')

        for (var j = 0; j < fault.length; j++) {
            facility_s[j].classList.remove('facility')
            facility_s[index].classList.add('facility')
        }
        for (var k = 0; k < fault.length; k++) {
            fault[k].style.display = 'none'
            fault[index].style.display = 'block'
        }
    }
}

//   滚动切换 ==================================================



(function () {

    var myChart = echarts.init(document.getElementsByClassName('pei')[0])

    var option = {
        color: ['#006cff', '#60cda0', '#ed8884', '#ff9f7f', '#0096ff', '#9fe6b8', '#32c5e9', '#1d9dff'],
        tooltip: {
            trigger: 'item',
            formatter: '{a} <br/>{b} : {c} ({d}%)'
        },
        series: [
            {
                name: '小顾同学分布',
                type: 'pie',
                radius: [8, 65],
                center: ['50%', '50%'],
                roseType: 'area',
                itemStyle: {
                    borderRadius: 5
                },
                label: {
                    fontSize: 10
                },
                labelLine: {
                    length: 5,
                    length2: 10
                },
                data: [
                    { value: 20, name: '云南' },
                    { value: 26, name: '北京' },
                    { value: 24, name: '山东' },
                    { value: 25, name: '河北' },
                    { value: 20, name: '江苏' },
                    { value: 25, name: '浙江' },
                    { value: 30, name: '四川' },
                    { value: 40, name: '河南' }
                ]
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

//  点位分布统计  （饼形图）===============================


