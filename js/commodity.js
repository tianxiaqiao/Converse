// 商品详情页左边点击事件
$(".filter-category li").children("p").on("click",function(){
    // 隐藏是所有的二级菜单;
    // console.log(1);
    $(this).parent("li").siblings("li").children("ul").hide();
    $(this).parent("li").siblings("li").children("p").children("span").css("background-position-x","0");
    $(this).next("ul").toggle();
    if($(this).next("ul").css("display") == "block"){
        $(this).children("span").css("background-position-x","-13px");
    }else{
        $(this).children("span").css("background-position-x","0");
    }
});    



$(document).ready(function() {
    $("#sizebox").css("display","none");
})

// 尺码点击事件
$("#sizebox").prev("p").on("click",function(){
    // 隐藏是所有的二级菜单;
    // console.log(1);
    if($(this).next("ul").css("display") == "flex"){
        $(this).children("span").css("background-position-x","-13px");
    }else{
        $(this).children("span").css("background-position-x","0");
    }
});  