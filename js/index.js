
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
// 1.手机号验证
$("#phone").on("blur",function(){
    var phone_reg = /^1[34578]\d{9}$/;
    var phone_str = phone.value;
    // console.log(phone_str);

    if(phone_reg.test(phone_str)){
        $(".phone_inputError").css("display","none");
        $(".phone_blankError").css("display","none");
    }else   if(phone_str === ""){
                $(".phone_blankError").css("display","block");
                $(".phone_inputError").css("display","none");
                // console.log(1);
            }else{
                // console.log(1);
                $(".phone_blankError").css("display","none");
                $(".phone_inputError").css("display","block");
            }
})
// 2.邮箱验证
$("#email").on("blur",function(){
    var email_reg = /^\w{6,20}@[a-z0-9]{2,7}\.[a-z]{2,8}$/;
    var email_str = email.value;
    // console.log(phone_str);

    if(email_reg.test(email_str)){
        $(".mail_inputError").css("display","none");
        $(".mail_blankError").css("display","none");
    }else   if(email_str === ""){
                $(".mail_blankError").css("display","block");
                $(".mail_inputError").css("display","none");
                // console.log(1);
            }else{
                // console.log(1);
                $(".mail_blankError").css("display","none");
                $(".mail_inputError").css("display","block");
            }
})
// 3.密码验证
$("#password").on("blur",function(){
    var password_reg = /^.{6,20}$/;
    var password_str = password.value;
    // console.log(phone_str);

    if(password_reg.test(password_str)){
        $(".pas_inputError").css("display","none");
        $(".pas_blankError").css("display","none");
    }else   if(password_str === ""){
                $(".pas_blankError").css("display","block");
                $(".pas_inputError").css("display","none");
                // console.log(1);
            }else{
                // console.log(1);
                $(".pas_blankError").css("display","none");
                $(".pas_inputError").css("display","block");
            }
})
// 4.密码确认
$("#confirmPassword").on("blur",function(){
    // var confirmPassword_reg = /^.{6,20}$/;
    var confirmPassword_str = confirmPassword.value;
    var password_str = password.value;

    if(confirmPassword_str === ""){
        $(".confirmPas_blankError").css("display","block");
        $(".confirmPas_inputError").css("display","none");
    }else  if(confirmPassword_str === password_str){
                $(".confirmPas_inputError").css("display","none");
                $(".confirmPas_blankError").css("display","none");
            }else{
                $(".confirmPas_blankError").css("display","none");
                $(".confirmPas_inputError").css("display","block");
            }
})
// 5.生日
$("document").ready(function(){
    var date = new Date();
    year = date.getFullYear();
    // console.log(year);
    var yearList = "";
    var monthList = "";
    var dayList = "";
    var allDay = "";
    for(var i = year ; i >= 1919; i --){
        yearList += "<option value=" + i + ">" + i + "</option>";
        // console.log(yearList);
    }
    $("#years").html(yearList);

    for(var i = 1 ; i < 13; i ++){
        monthList += "<option value=" + i + ">" + i + "</option>";
        // console.log(yearList);
    }
    $("#months").html(monthList);

    for(var i = 1 ; i <= 31 ; i ++){
        dayList += "<option value=" + i + ">" + i + "</option>";
        // console.log(yearList);
    }
    $("#days").html(dayList);

    $("#months").change(function(){
        $(dayList).empty();
        var leapYear = $("#years").val();
        var leapMonth = $("#months").val();
        switch(leapMonth){
            case "1" :
            case "3" :
            case "5" :
            case "7" :
            case "8" :
            case "10" :
            case "12" :allDay = 31;break;
            case "4" :
            case "6" :
            case "9" :
            case "11" :allDay = 30;break;
            case "2" :
                if((leapYear % 4 == 0 && leapYear % 100 != 0) || leapYear % 400 == 0){
                    allDay = 29;
                }else{
                    allDay = 28;
                }
            default:break;
        }
        for(var i = 1 ; i <= allDay ; i ++){
            dayList += "<option value=" + i + ">" + i + "</option>";
            // console.log(yearList);
        }
        $("#days").html(dayList);
    })
})
// 6.短信验证
$("#inCode").on("blur",function(){
    var code_reg = /^\d{4}$/;
    var code_str = inCode.value;
    // console.log(code_str);
    if(code_reg.test(code_str)){
        $(".shortMes_inputError").css("display","none");
    }else{
        $(".shortMes_inputError").css("display","block");
    }
})
$(".sendText").on("click",function(){
    $(".shortMes_inputError").css("display","none");
    var code = Math.floor(Math.random()*9000)+1000;
    // console.log(code);
    $("#inCode").val(code);
})
// 7.注册提交事件
var spans = $(".registerbox span");
$(".registeredAccount").on("click",function(evt){
    var e= evt || window.event;
    // spans = Array.from(spans);
    var inputs = $(".registerbox input").val();
    // console.log(inputs);
    var display =$(spans).css('display');
    if(display == "none" && inputs != ""){
        // $(".loginbox"). fadeIn("show");
    }else{
        return false;
    }

})