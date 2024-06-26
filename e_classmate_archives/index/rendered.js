//渲染-加载列表
//var tmp_card;
var Maindiv;
var last;
//var Card_in_road;
Maindiv = document.getElementById("zj-main-table");
function renCard(time,list){
    /*
    var runed = 0;
    var i = 0;
    var limitcard = time;
    var oruned;
    console.log("运行"+time+"次");
    console.log("传入数据:");
    console.log(list);*/
    /*
    while(runed<time){
        runed = ++runed
        oruned = runed;
        Card_in_road = 0;
        Maindiv.innerHTML=Maindiv.innerHTML+"<tr id='"+runed+"tr'>";
        var limitcardinroad = 5;
        console.log("第"+runed+"次循环");
        console.warn(limitcard);
        while(Card_in_road!=6){//开始一列
            i=i+1;
            if(typeof list["Number"+i] == "undefined"){
            }else{
                --limitcardinroad;
                ++Card_in_road;
                if(Card_in_road == 1){
                    document.getElementById(runed+"tr").innerHTML="<td id='"+i+"td'>";
                }else{
                    document.getElementById(runed+"tr").innerHTML=document.getElementById(runed+"tr").innerHTML+"<td id='"+i+"td'>";
            }
                console.log(i);
                //document.getElementById(i).innnerHTML="&#60;div class='zj-256' id="+list["Number"+i]+"&#60;&#60;br&#60;&#60;br&#60;&#60;p style='text-align: center;width: 100%;'&#60;&#60;h1&#60;"+list["Name"+i]+"&#60;/h2&#60;&#60;/p&#60;&#60;br&#60;&#60;br&#60;&#60;h1&#60;&#60;span style='color:green;'&#60;"+list["Number"+i]+"号"+"&#62;/span&#60;&#62;/h1&#60;&#62;br&#60;&#62;p&#60; style='width: 100%;text-align: center;color: grey;'&#60;点击查看详情&#62;/p&#60;&#62;/div&#60;";
                document.getElementById(i+"td").innerHTML="<div class='zj-256' id='"+list["Number"+i]+"' onclick='location.href = \"archives.html?flag="+i+"\"'>"
                document.getElementById(list["Number"+i]).innerHTML="<br><br><h1 style='color: black;text-align: center;width: 100%;'>"+list["Name"+i]+"<br><h2 style='color: green;text-align: center;width: 100%;'>"+list["Number"+i]+"号"+"</h2><p style='color: gray;text-align: center;width: 100%;'>点击查看详情</p>";
            }
        }
        /*i=i+1;
        Maindiv.innerHTML=Maindiv.innerHTML+"<tr id='"+runed+"tr'>";
        document.getElementById(runed+"tr").innerHTML="<td id='"+i+"td'>";
        console.log(i);
        //document.getElementById(i).innnerHTML="&#60;div class='zj-256' id="+list["Number"+i]+"&#60;&#60;br&#60;&#60;br&#60;&#60;p style='text-align: center;width: 100%;'&#60;&#60;h1&#60;"+list["Name"+i]+"&#60;/h2&#60;&#60;/p&#60;&#60;br&#60;&#60;br&#60;&#60;h1&#60;&#60;span style='color:green;'&#60;"+list["Number"+i]+"号"+"&#62;/span&#60;&#62;/h1&#60;&#62;br&#60;&#62;p&#60; style='width: 100%;text-align: center;color: grey;'&#60;点击查看详情&#62;/p&#60;&#62;/div&#60;";
        document.getElementById(i+"td").innerHTML="<div class='zj-256' id='"+list["Number"+i]+"'>"
        document.getElementById(list["Number"+i]).innerHTML="<br><br><h1 style='color: black;text-align: center;width: 100%;'>"+list["Name"+i]+"<br><h2 style='color: green;text-align: center;width: 100%;'>"+list["Number"+i]+"号"+"</h2><p style='color: gray;text-align: center;width: 100%;'>点击查看详情</p>";
        //console.log(document.getElementById(i).innnerHTML);
        //document.getElementById(i).innerHTML=document.getElementById(i).innerHTML+"&#62;/td&#60;";
        i=i+1;
        //Maindiv.innerHTML=Maindiv.innerHTML+"&#62;div class='zj-256' id="+list["Number"]+i+"]&#60;&#62;br&#60;&#62;br&#60;&#62;p style='text-align: center;width: 100%;'&#60;&#62;h1&#60;"+list["Name"+i]+"&#62;/h2&#60;&#62;/p&#60;&#62;br&#60;&#62;br&#60;&#62;h1&#60;&#62;span&#60; style='color:green;'"+list["Number"+i]+"号"+"&#62;/span&#60;&#62;/h1&#60;&#62;br&#60;&#62;p&#60; style='width: 100%;text-align: center;color: grey;'&#60;点击查看详情&#62;/p&#60;&#62;/div&#60;";
        document.getElementById(runed+"tr").innerHTML=document.getElementById(runed+"tr").innerHTML+"<td id='"+i+"td'>";
        document.getElementById(i+"td").innerHTML="<div class='zj-256' id='"+list["Number"+i]+"'>"
        document.getElementById(list["Number"+i]).innerHTML="<br><br><h1 style='color: black;text-align: center;width: 100%;'>"+list["Name"+i]+"<br><h2 style='color: green;text-align: center;width: 100%;'>"+list["Number"+i]+"号"+"</h2><p style='color: gray;text-align: center;width: 100%;'>点击查看详情</p>";
        //Maindiv.innerHTML=Maindiv.innerHTML+"&#62;/td&#60;";
        //Maindiv.innerHTML=Maindiv.innerHTML+"&#62;/tr&#60;";
        *-/
    } 妈的傻逼重写*/
    /*参数:
    time:总项目数
    list:同学录表
    */
    var runed = 0;//已运行几次(列)
    var all_runed = 0;//总运行次数
    var card_in_a_road = 0;//该列存在多少个表格
    var finish = false;//true跳出while
    var NowList;//现工作行
    //Maindiv是渲染目标
    console.log('list',list);
    while(finish == false){//运行次数
        runed = runed+1
        console.log('runed',runed)
        Maindiv.innerHTML=Maindiv.innerHTML + "<tr id='"+runed+"tr'>";//原有基础上再建一列
        NowList = document.getElementById(runed+"tr");//获取当前行
        while(card_in_a_road<5){//循环到5张卡片填满
            all_runed = all_runed+1//有没有都得加
            console.log('all_runed',all_runed)
            if(time < all_runed){//是不是搞完了
                card_in_a_road = 5;
                finish = true;//结束循环
            }
            if(typeof list["Name"+all_runed] == "undefined"){//是不是没有
                //不管他
            }else{
                card_in_a_road = card_in_a_road + 1;//加卡片数量
                if(card_in_a_road == 1){
                    document.getElementById(runed+"tr").innerHTML="<td id='"+all_runed+"td'>";//开始创建卡片容器
                    document.getElementById(all_runed+"td").innerHTML = "<div class='zj-256' id='"+all_runed+"' onclick='setTimeout(\"location.href= &quot;archives.html?flag="+all_runed+" &quot;\", 3000 );'><br><p style='text-align: center;width: 100%;'><h1>"+list["Name"+all_runed]+"</h1></p><br><br><h1><span style='color:green;'>"+list["Number"+all_runed]+"号"+"</span></h1><p style='width: 100%;text-align: center;color: grey;'>点击查看详情</p></div>";//创建卡片
                }else{
                    document.getElementById(runed+"tr").innerHTML=document.getElementById(runed+"tr").innerHTML+"<td id='"+all_runed+"td'>";//开始增加卡片容器
                    document.getElementById(all_runed+"td").innerHTML = document.getElementById(all_runed+"td").innerHTML+"<div class='zj-256' id='"+all_runed+"' onclick='setTimeout(\"location.href=&quot;archives.html?flag="+all_runed+"&quot;\", 3000 );'><br><p style='text-align: center;width: 100%;'><h1>"+list["Name"+all_runed]+"</h1></p><br><br><h1><span style='color:green;'>"+list["Number"+all_runed]+"号"+"</span></h1><p style='width: 100%;text-align: center;color: grey;'>点击查看详情</p></div>";//增加卡片
                }
                console.log('card_in_a_road',card_in_a_road);
            }
        }//五张以后
        card_in_a_road = 0;
    }
    document.getElementById("loadText").innerHTML="<span style='color:green;'>加载完成</span>";
}
function hightligthSetBackThread(){
    var temp;
    temp = location.href.split("#")[1]//获取#以后
    if(typeof temp == "undefined" == false){
        temp = temp.split("t");
        if(temp[0] != last){
            if(temp[1] == "d"){//看看是不是td
                $("td[id!='"+temp[0]+"td']").children("div").removeClass("zj-256-hightlight");
                $("#"+temp[0]+"td").children("div").addClass("zj-256-hightlight");
                //console.log('temp',temp)
                console.log('temp',temp,"last",last)
                last = temp[0]
            }
        }
    }
}
function searchService(Value){
    var target = $("h1,span").filter(":Contains("+Value+")").parent("*").parent("*").attr('id');//获取td的id
    location.href="#"+target;
}