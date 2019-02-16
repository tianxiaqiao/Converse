// 点击搜索事件
$(".import").on("input",function(){
    console.log($(".import").val());
    $(".search-button").on("click",function(){ 
        console.log($(".import").val())
        if($(".import").val() != ""){
            $(location).attr("href", "../html/commodity.html");
        }else{
            return false;
        }
    })
})

 
// 7.注册提交事件
$(".registeredAccount").on("click",function(){
    var phone = $("#phone").val();
    var password = $("#password").val();
    var email = $("#email").val();   
    var sex = $(".sex div input").val();
    var years = $("#years").val();
    var months = $("#months").val();
    var days = $("#days").val();
    var inCode = $("#inCode").val();
    var phone_inputError = $(".phone_inputError").css("display");
    var phone_blankError = $(".phone_blankError").css("display");
    var mail_inputError = $(".mail_inputError").css("display");
    var mail_blankError = $(".mail_blankError").css("display");
    var pas_inputError = $(".pas_inputError").css("display");
    var pas_blankError = $(".pas_blankError").css("display");
    var confirmPas_inputError = $(".confirmPas_inputError").css("display");
    var confirmPas_blankError = $(".confirmPas_blankError").css("display");
    var shortMes_inputError = $(".shortMes_inputError").css("display");

    // console.log(shortMes_inputError);
    // console.log(phone_blankError);
    // console.log(phone_inputError);
    // console.log(mail_inputError);
    // console.log(mail_blankError);
    // console.log(pas_inputError );
    // console.log(pas_blankError );
    // console.log(confirmPas_inputError);
    // console.log(confirmPas_blankError);
    // console.log(sex);
    // console.log(phone);
    // console.log(years);

    if(phone != "" && password != "" && email != "" &&inCode != "" && phone_inputError === "none" && phone_blankError === "none" && mail_inputError === "none" && mail_blankError === "none" && pas_inputError === "none" && pas_blankError === "none" && confirmPas_inputError === "none" && confirmPas_blankError === "none" && shortMes_inputError === "none"){
        // console.log(1);
        $.ajax({
            url:"../mysql.php",
            data:{
                phone : phone,
                password : password,
                email : email,
                sex : sex ,
                years : years,
                months : months,
                days : days
            },
            type:"POST",
            success: function(data){
                // if(data.trim()=="OK")//data.trim 去空格,防止出错
                $.cookie("zhanghu", phone ,{ expires: 2 } );

                }
            });
            $(".registerbox").fadeOut();
            $(".loginbox"). fadeIn("show");
            $("#loginID").attr("value",phone);
    }else{
        return false;
    }
})



// 点击登录
$(".loginAccount").on("click",function(){
    // console.log($.cookie("zhanghu"));
    var loginID = $("#loginID").val();
    var loginPas = $("#loginPas").val();
    // var email = $("#email").val();   
 
    // console.log(loginID);
    var accountError = $(".accountError").css("display");
    var pasError = $(".pasError").css("display");
  


    // console.log(accountError);
    // console.log(pasError);
  

    if(loginID != "" && loginPas != "" && accountError === "none" && pasError === "none" ){
        // console.log(1);
        $.ajax({
            url:"../login.php",
            data:{
                loginID : loginID,
                loginPas : loginPas,
                // email : email,
            },
            type:"POST",
            success: function(data){
                // console.log(data);
                var obj = eval("("+data+")");
                // console.log(obj);
                if(obj.state == "success"){
                    alert("登陆成功");
                }else{
                        $(".error").css("display","block");
                    }
                }
            });

    }else{
        return false;
    }
    
})

$(document).on("click",function(){
    $(".error").css("display","none");
})



