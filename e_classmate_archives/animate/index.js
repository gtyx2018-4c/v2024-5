var NowTime = new Date;
var i = 0;
var LastTime;
var lookatFollow = "";
var hreftarget="";
if(typeof LastTime == "undefined"){
    LastTime = new Date;
    console.warn('LastTime',LastTime)
}
function aniMain(){
    NowTime = new Date;
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
//console.log($("span").filter(":Contains('号')").parent("*").parent("*"))
$("span").filter(":Contains('号')").parent("*").parent("*").click(
    function(){
        if(NowTime.getSeconds() > LastTime.getSeconds()+0.2||NowTime.getMinutes() > LastTime.getMinutes()+1){
            LastTime = NowTime;
            $(this).css("position","absolute");
            $(this).css("z-index","100");
            lookatFollow = $(this).attr("id");
            setInterval(lookatfollow,50);
            hreftarget = $(this).attr("id");
            $(this).animate({
                /*transfrom:"translate(-50%,-50%)",*/
                top:"0%",
                left:"0%",
                transfrom:"translate(-25%,-25%)",   
                height:"100%",
                width:"100%"
            });
        }
    }   
);
if(hreftarget != ""){//本来是视角跟随的
    //location.href=lookatFollow;
    i=++i
    if(i == 200){
        location.href="archives.html?flag="+hreftarget;
    }
}
function lookatfollow(){
    if(lookatFollow != ""){
        location.href="#"+lookatFollow;
    }
}
}
