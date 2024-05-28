//渲染-加载列表
var tmp_card;
var Maindiv;
var Card_in_road;
Maindiv = document.getElementById("zj-main-table");
function renCard(time,list){
    var runed;
    var i;
    while(runed < time){
        runed = runed+2;
        i=i+1;
        document.write("<tr>");
        document.write("<td>");
        document.write("<div class='zj-256' id="+db["Number"]+i+"]><br><br><p style='text-align: center;width: 100%;'><h1>"+db["Name"+i]+"</h2></p><br><br><h1><span style='color:green;'"+db["Number"+i]+"号"+"</span></h1><br><p style='width: 100%;text-align: center;color: grey;'>点击查看详情</p></div>");
        document.write("</td>");
        i=i+1;
        document.write("<div class='zj-256' id="+db["Number"]+i+"]><br><br><p style='text-align: center;width: 100%;'><h1>"+db["Name"+i]+"</h2></p><br><br><h1><span style='color:green;'"+db["Number"+i]+"号"+"</span></h1><br><p style='width: 100%;text-align: center;color: grey;'>点击查看详情</p></div>");
        document.write("</td>");
        document.write("</tr>");
    }
}