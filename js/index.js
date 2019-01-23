// 点击搜索图标事件
$("#search").on("click",function(){
    $(".arrow").css({
        right : 167
    })
    $(".header-expanded").hide("slow");
    $(".search").toggle("slow");   
})


// 点击登录头像事件
$("#login").on("click",function(){
    $(".arrow").css({
        right : 443
    })
    $(".search").hide("slow");
    $(".header-expanded").toggle("slow");
})