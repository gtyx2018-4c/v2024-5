function FinalTestlimit(){
    var day = document.getElementById("zj2-day");
    var hour = document.getElementById("zj2-hour");
    var minute = document.getElementById("zj2-min");
    var second = document.getElementById("zj2-sec");
    //获取截止时间的时间戳（单位毫秒）
    var inputTime = +new Date("2024-6-21 8:20:00");
        //获取当前时间的时间戳（单位毫秒）
        var nowTime = +new Date();
        //把剩余时间毫秒数转化为秒
        var times = (inputTime - nowTime) / 1000;
        //计算天数 转化为整数
        var d = parseInt(times / 60 / 60 / 24 % 365.25);
        //如果天数小于 10，要变成 0 + 数字的形式 赋值给盒子
        day.innerHTML = h < 10 ? "0" + d : d;
        //计算小时数 转化为整数
        var h = parseInt(times / 60 / 60 % 24);
        //如果小时数小于 10，要变成 0 + 数字的形式 赋值给盒子
        hour.innerHTML = h < 10 ? "0" + h : h;
        //计算分钟数 转化为整数
        var m = parseInt(times / 60 % 60);
            //如果分钟数小于 10，要变成 0 + 数字的形式 赋值给盒子
        minute.innerHTML = m < 10 ? "0" + m : m;
        //计算描述 转化为整数
        var s = parseInt(times % 60);
         //如果秒钟数小于 10，要变成 0 + 数字的形式 赋值给盒子
        second.innerHTML = s < 10 ? "0" + s : s;
}
function FinalTestAfter(){
    var day = document.getElementById("zj2-day");
    var hour = document.getElementById("zj2-hour");
    var minute = document.getElementById("zj2-min");
    var second = document.getElementById("zj2-sec");
    var X = new Date("6/21/2024 11:50:00");
    Y=new Date();
    T=(Y.getTime()-X.getTime());
    M=24*60*60*1000;
    a=T/M;A=Math.floor(a);
    b=(a-A)*24;
    B=Math.floor(b);
    c=(b-B)*60;
    C=Math.floor((b-B)*60);
    D=Math.floor((c-C)*60);
    day.innerHTML = A;
    hour.innerHTML = B;
    minute.innerHTML = C;
    second.innerHTML = D;
}