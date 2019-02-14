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



// 渲染页面
function load(){
    $.ajax({
        url : "../json/list.json",
        type : "GET",
        dataType : "json"
    })
    .then(render)
    function render(res){
        // console.log(res);
        var html = "";
        $.each(res,function(index,item){
            html += `<dl class="commodity-box">
                        <dt><a href="###"><img src="${item.image}"></a></dt>
                        <dd><a href="###">${item.title}</a></dd>
                        <dd>${item.price}</dd>
                    </dl>`;
        })
        $(".commodity-list").append(html);
    }
}
load()



// 瀑布流
//无限滚动瀑布流
var container = document.querySelector(".commodity-list")
window.addEventListener("scroll",handerScroll);

//可视区高度
var ch = document.documentElement.clientHeight;
// console.log(ch);
function handerScroll(){
    //滚上去的高度
    var st = document.body.scrollTop || document.documentElement.scrollTop;
// console.log(st)
    //文档高度
    var dh = container.offsetHeight;
    // console.log(dh)
    if((dh-ch)-st <1000){
        // loading = true;
        load()
    }
    // console.log(dh,ch,st)
}