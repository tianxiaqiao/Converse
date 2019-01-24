
// 点击首行搜索图标事件
$(".magnifier").on("click",function(){
    $(".arrow").css({
        right : 167
    })
    $(".header-expanded").hide(1000);  
    $(".search").toggle(2000);
     
})
$(".import").on("focus",function(){
    $(this).val("");
})
$(".import").on("blur",function(){
    $(this).val()!="" || $(this).val("想找什么随便搜"); 
})




// 点击登录头像事件
$("#login").on("click",function(){
    $(".arrow").css({
        right : 443
    })
    $(".search").hide("1000");
    $(".header-expanded").toggle(2000);
})