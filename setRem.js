
//   加节流 

var flg = true
function setRem() {

    if (flg) {
        flg = false
        // 获取屏幕的宽度
        var clientWidth = document.documentElement.clientWidth || document.body.clientWidth;
        console.log(clientWidth);

        // 设置最大最小值
        clientWidth = clientWidth > 1920 ? 1920 : clientWidth
        clientWidth = clientWidth < 1080 ? 1080 : clientWidth

        // 通过js动态改变html根节点字体大小
        var html_ = document.getElementsByTagName('html')[0];
        html_.style.fontSize = (clientWidth / 143.6) + 'px';


        setTimeout(function () {
            flg = true
        }, 100)
    }
}
// window.onresize 浏览器被重置大小执行事件
// window.onload = setRem;
setRem()
window.onresize = setRem;

