
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

function _throttle(callback,dealy){
    // 利用闭包，让 timer 私有化;
    var timer = null;
    return function(){
          clearTimeout(timer);
          // 如果已经过了规定的时间可以再次执行代码了;
          timer = setTimeout(function(){
               callback(); 
          },dealy)
    }
}

function jsonp(url,jsonp_key){
    return new Promise(function(resolve,reject){

          // 函数名随机处理避免占用命名空间，避免冲突;

          var randomName = "_" + Date.now()
          // console.log(randomName);

          window[randomName] = function(res){
                // console.log(res);
                resolve(res);
          }
          // 2. 创建并插入script标签;
          var script = document.createElement("script");

          // 当前url之中是否存在 ? （存在问好表示已经有数据了），我应该用& 去拼接数据，反之则用 ?;
          url = url + (/\?/.test(url) ? "&" : "?") + jsonp_key + "=" + randomName;

          script.src = url;
          // 3. 标签放入页面之中;
          document.body.appendChild(script);
          // 4. 清理垃圾;
          script.onload = function(){
                this.remove();

                window[randomName] = null;
                delete window[randomName];
          }
    })   
}     


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
// 点击登录
var spans = $(".loginbox_right span");
$(".loginAccount").on("click",function(evt){
    var e= evt || window.event;
    // spans = Array.from(spans);
    var inputs = $(".loginbox_right input").val();
    // console.log(inputs);
    var display =$(spans).css('display');
    if(display == "none" && inputs != ""){
        alert("登陆成功")
    }else{
        return false;
    }
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