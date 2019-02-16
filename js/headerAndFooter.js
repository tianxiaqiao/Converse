
// 点击首行搜索图标事件
$(".magnifier").on("click",function(){
    // $(".arrow").css({
    //     right : 167
    // })
    // $(".arrow").toggle();
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

// 搜索事件
var timer = null;
var showNum = 3;
$(".import").on("input",function(){
    var $url = `https://sp0.baidu.com/5a1Fazu8AA54nxGko9WTAnF6hhy/su?wd=${$(".import").val()}&json=1&p=3&sid=1422_21089_28131_26350_28266&req=2&csor=2`;
    var dat = {
        wd: $(".import").val()
    }
    // console.log($(".import").val());
    timer = setTimeout(function(){
        clearTimeout(timer);
        $.ajax({
            type: "get",
            url: $url,
            async: true,
            data: dat,
            dataType: 'jsonp',       //已经跨域了
            jsonp: 'cb',               //百度的回调函数
            success: function (res) {
                // console.log(res);
                var html = "";
                res.s.every((item, index) => {
                    html += `<p>${item}</p>`;
                    return showNum > index;
                })
                $(".search-result").html(html);
            }
        })
        timer = null;
    },500);
})

// // 点击搜索事件
// $(".import").on("input",function(){
//     console.log($(".import").val());
//     $(".search-button").on("click",function(){ 
//         console.log($(".import").val())
//         if($(".import").val() != ""){
//             $(location).attr("href", "./html/commodity.html");
//         }else{
//             return false;
//         }
//     })
// })


// 点击登录头像事件
$("#login").on("click",function(){
    // $(".arrow").css({
    //     right : 443
    // })
    // $(".arrow").toggle();
    $(".search").slideUp("show");
    $(".header-expanded").slideToggle("show");
    $(".loginbox"). fadeOut("show");
    $(".registerbox"). fadeIn("show");
})
// 点击登录发生的事件
$(".login").on("click",function(){
    $(".registerbox"). fadeOut("show");
    $(".header-expanded").show("show");
    $(".loginbox"). fadeIn("show");
    $(".search").slideUp("show");
})
// 登录页面最左
$("#loginAccount").on("click",function(){
    $(".loginbox"). fadeOut("show");
    $(".header-expanded").show("show");
    $(".registerbox"). fadeIn("show");
    $(".search").slideUp("show");
})

// 登录账号验证
$("#loginID").on("blur",function(){
    var email_reg = /^\w{6,20}@[a-z0-9]{2,7}\.[a-z]{2,8}$/;
    var phone_reg = /^1[34578]\d{9}$/;
    var loginID_str = loginID.value;
    // console.log(loginID_str);

    if(email_reg.test(loginID_str) || phone_reg.test(loginID_str)){
        $(".accountError").css("display","none");
        $("#loginID").css("border","1px solid #b5b5b5");
    }else   if(loginID_str === ""){
                $(".accountError").css("display","none");
                $("#loginID").css("border","1px solid red");
            }else{
                $(".accountError").css("display","block");
                $("#loginID").css("border","1px solid #b5b5b5");
            }
})
// 登录密码验证
$("#loginPas").on("blur",function(){
    var password_reg = /^.{6,12}$/;
    var loginPas_str = loginPas.value;
    // console.log(loginPas_str);

    if(password_reg.test(loginPas_str)){
        $(".pasError").css("display","none");
        $("#loginPas").css("border","1px solid #b5b5b5");
    }else   if(loginPas_str === ""){
                $(".pasError").css("display","none");
                $("#loginPas").css("border","1px solid red");
            }else{
                $(".pasError").css("display","block");
                $("#loginPas").css("border","1px solid #b5b5b5");
            }
})

// 点击注册汉字发生的事件
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
    var password_reg = /^.{6,12}$/;
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


// 8获取性别
// var sex=null;
// // console.log($(".sex div"));
// $(".sex div").on("click",function sex(e){
//     var target = e.currentTarget;
//     // console.log($(target).index());
//     var index = $(target).index();
//     // console.log($(".sex div")[index].childNodes[2].innerHTML);
//    sex = $(".sex div")[index].childNodes[2].innerHTML;
    
// })
 
// // 7.注册提交事件
// $(".registeredAccount").on("click",function(){
//     var phone = $("#phone").val();
//     var password = $("#password").val();
//     var email = $("#email").val();   
//     var sex = $(".sex div input").val();
//     var years = $("#years").val();
//     var months = $("#months").val();
//     var days = $("#days").val();
//     var inCode = $("#inCode").val();
//     var phone_inputError = $(".phone_inputError").css("display");
//     var phone_blankError = $(".phone_blankError").css("display");
//     var mail_inputError = $(".mail_inputError").css("display");
//     var mail_blankError = $(".mail_blankError").css("display");
//     var pas_inputError = $(".pas_inputError").css("display");
//     var pas_blankError = $(".pas_blankError").css("display");
//     var confirmPas_inputError = $(".confirmPas_inputError").css("display");
//     var confirmPas_blankError = $(".confirmPas_blankError").css("display");
//     var shortMes_inputError = $(".shortMes_inputError").css("display");

//     // console.log(shortMes_inputError);
//     // console.log(phone_blankError);
//     // console.log(phone_inputError);
//     // console.log(mail_inputError);
//     // console.log(mail_blankError);
//     // console.log(pas_inputError );
//     // console.log(pas_blankError );
//     // console.log(confirmPas_inputError);
//     // console.log(confirmPas_blankError);
//     // console.log(sex);
//     // console.log(phone);
//     // console.log(years);

//     if(phone != "" && password != "" && email != "" &&inCode != "" && phone_inputError === "none" && phone_blankError === "none" && mail_inputError === "none" && mail_blankError === "none" && pas_inputError === "none" && pas_blankError === "none" && confirmPas_inputError === "none" && confirmPas_blankError === "none" && shortMes_inputError === "none"){
//         // console.log(1);
//         $.ajax({
//             url:"mysql.php",
//             data:{
//                 phone : phone,
//                 password : password,
//                 email : email,
//                 sex : sex ,
//                 years : years,
//                 months : months,
//                 days : days
//             },
//             type:"POST",
//             success: function(data){
//                 // if(data.trim()=="OK")//data.trim 去空格,防止出错
//                 $.cookie("zhanghu", phone ,{ expires: 7 } );

//                 }
//             });
//             $(".registerbox").fadeOut();
//             $(".loginbox"). fadeIn("show");
//             $("#loginID").attr("value",phone);
//     }else{
//         return false;
//     }
// })



// // 点击登录
// $(".loginAccount").on("click",function(){
//     // console.log($.cookie("zhanghu"));
//     var loginID = $("#loginID").val();
//     var loginPas = $("#loginPas").val();
//     // var email = $("#email").val();   
 
//     // console.log(loginID);
//     var accountError = $(".accountError").css("display");
//     var pasError = $(".pasError").css("display");
  


//     // console.log(accountError);
//     // console.log(pasError);
  

//     if(loginID != "" && loginPas != "" && accountError === "none" && pasError === "none" ){
//         // console.log(1);
//         $.ajax({
//             url:"login.php",
//             data:{
//                 loginID : loginID,
//                 loginPas : loginPas,
//                 // email : email,
//             },
//             type:"POST",
//             success: function(data){
//                 // console.log(data);
//                 var obj = eval("("+data+")");
//                 // console.log(obj);
//                 if(obj.state == "success"){
//                     alert("登陆成功");
//                 }else if(obj.state == "error"){
//                         $(".error").css("display","block");
//                     }
//                 }
//             });

//     }else{
//         return false;
//     }
    
// })

// $(document).on("click",function(){
//     $(".error").css("display","none");
// })



// 二级菜单
secondNav("#woman_nav",".woman_nav");
secondNav("#man_nav",".man_nav");
secondNav("#child_nav",".child_nav");
// console.log($("#man_nav a"));
function secondNav(idName,className){
    $(idName).on("mouseenter",function(){
        $(className).show(1000);
    });
    $(idName).on("mouseleave",function(){
        $(className).hide();
    });
}

// 吸顶菜单
var _top = 600
$(window).on("scroll",function(){
    var e = document.body.scrollTop || document.documentElement.scrollTop;
    // console.log(document.body.scrollTop);
    if(e >= _top){
        $(".header-content").css("height","50px");
        $(".left-headerbox").css("line-height","50px");
        $(".login-headerbox").css("line-height","50px");
        $(".navigation").css("height","30px");
        $(".list").css("font-size","14px");
        $(".list li").css("display","flex");
        $(".list span").css("margin","7px 0 0 5px");
        $(".man_nav,.woman_nav,.child_nav").css("top","30px");


    }else{
        $(".header-content").css("height","80px");
        $(".left-headerbox").css("line-height","80px");
        $(".login-headerbox").css("line-height","80px");
        $(".navigation").css("height","50px");
        $(".list").css("font-size","18px");
        $(".list li").css("display","block");
        $(".list span").css("margin","5px auto 0");
        $(".man_nav,.woman_nav,.child_nav").css("top","50px");
    }
})

// 聊天悬浮窗
var floating = document.getElementById("floating");
var timer = null;
var target = 0;
window.addEventListener("scroll",boxMove);
function boxMove(){
    var e = document.body.scrollTop || document.documentElement.scrollTop;
    target = Math.round(e);
    if(timer !== null) return false;
    timer = setInterval(() => {
        var distance = target - floating.offsetTop;
        // console.log(distance);
        var speed = distance > 0 ? Math.ceil(distance / 10) : Math.floor(distance / 10);
        floating.style.top = floating.offsetTop + speed + 20 + "px";
        if(distance === 0){
            clearInterval(timer);
            timer = null;
        }
    },50)
}