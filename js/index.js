
// 点击首行搜索图标事件
$(".magnifier").on("click",function(){
    $(".arrow").css({
        right : 167
    })
    $(".header-expanded").slideUp("show");  
    $(".search").slideToggle("show");
        
})

// 搜索栏关闭按钮
$(".search-close").on("click",function(){
    $(".search").slideUp("show");
})
// 搜索框里内容
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
    $(".search").slideUp("show");
    $(".header-expanded").slideToggle("show");
})
// 点击登录发生的事件
$(".login").on("click",function(){
    $(".registerbox"). fadeOut("show");
    $(".header-expanded").show("show");
    $(".loginbox"). fadeIn("show");
    $(".search").slideUp("show");
    
})
// 点击注册发生的事件
$(".registration").on("click",function(){
    $(".loginbox"). fadeOut("show");
    $(".header-expanded").show("show");
    $(".registerbox"). fadeIn("show");
    $(".search").slideUp("show");
})

// 注册页面表单验证
