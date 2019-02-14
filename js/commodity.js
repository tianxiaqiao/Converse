// 商品详情页左边点击事件
$(".filter-category li").children("p").on("click",function(){
    // 隐藏是所有的二级菜单;
    // console.log(1);
    $(this).parent("li").siblings("li").children("ul").hide(500);
    $(this).parent("li").siblings("li").children("p").children("span").css("background-position-x","0");
    $(this).next("ul").toggle(500);
    if($(this).next("ul").css("display") == "block"){
        $(this).children("span").css("background-position-x","-13px");
    }else{
        $(this).children("span").css("background-position-x","0");
    }
});    


// 加载隐藏
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



// 点击过滤事件
$(".filter").on("click",function(){
    $(this).siblings("li").removeClass("active");
    $(this).addClass("active");
})


var container = document.querySelector(".commodity-list")
var page = 0;
var heightArray = [];
function loadMsg(){
    return jsonp("http://www.wookmark.com/api/json/popular?page=" + page ,"callback");
}

loadMsg()
.then(function(res){
    render(res);
})


//页面渲染
function render(res){
    var html = "";
    res.forEach((item)=>{
        if(Math.round(item.width,item.height) === 0){
            return false;
        }
        // html += `<div class="box" style="height:${Math.round(224 / item.width * item.height)}px">
        //             <img src="${item.image}" alt="">
        //         </div>`;
        html += `<dl class="commodity-box">
                    <dt><a href="###"><img src="${item.image}"></a></dt>
                    <dd><a href="###">【男女同款】Chuck Taylor All Star</a></dd>
                    <dd>¥599.00</dd>
                </dl>`;



    })
    container.innerHTML += html;
}

//无限滚动
window.addEventListener("scroll",handerScroll);

//可视区高度
var ch = document.documentElement.clientHeight;
// console.log(ch);
var loading = false;
function handerScroll(){
    //滚上去的高度
    var st = document.body.scrollTop || document.documentElement.scrollTop;

    //文档高度
    var dh = container.offsetHeight;
    if((dh-ch)-st <1000 && loading == false){
        page ++;
        loading = true;
        loadMsg()
        .then(function(res){
            render(res);
            // sort()
            loading = false;
            // console.log(1);
        })
    }
    // console.log(dh,ch,st)
}

//jsonp封装
function jsonp(url,jsonp_key){
    return new Promise(function(resolve,reject){
        var randomName = "_" + Date.now();
        // console.log(randomName);
        window[randomName] = function(res){
            // console.log(res);
            resolve(res);
        }
        var script = document.createElement("script");

        url = url + (/\?/.test(url) ? "&" : "?") + jsonp_key + "=" + randomName;

        script.src = url;

        document.body.appendChild(script);

        script.onload = function(){
            this.remove();
            window[randomName] = null;
            delete window[randomName];
        }  
    })
}