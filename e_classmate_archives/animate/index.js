var NowTime = new Date;
var LastTime;
if(typeof LastTime == "undefined"){
    LastTime = new Date;
    console.warn('LastTime',LastTime)
}
function aniMain(){
    NowTime = new Date;
    console.warn('NowTime.getSeconds()',NowTime.getSeconds(),LastTime.getSeconds()+1)
$("#searchMain").click(function(){
    console.log(NowTime.getSeconds() > LastTime.getSeconds()+0.2||NowTime.getMinutes() > LastTime.getMinutes()+1)
    if(NowTime.getSeconds() > LastTime.getSeconds()+1){
        LastTime = NowTime;
        console.log('up!')
    $("#searchMain").animate({
        width:'630px'
    });
}
});
$("#searchMain").blur(
    function(){
        if(NowTime.getSeconds() > LastTime.getSeconds()+0.2||NowTime.getMinutes() > LastTime.getMinutes()+1){
            LastTime = NowTime;
        if($("#searchMain").val() == ""){
            console.log('up!')
            $("#searchMain").animate({
                width:'286px'
            });

        }
    }
}
);
}