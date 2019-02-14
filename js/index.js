// 轮播图
var left = document.getElementById("left");
var right = document.getElementById("right");
var wrap = document.querySelector(".banner-wrap");
var banner_timer = null;
var spans = document.querySelector(".banner-pagination").children;
var container = document.querySelector(".banner-container");
var sliders = wrap.children;
// console.log(sliders);
var nowIndex = 0;
var oldIndex = 0;

left.addEventListener("click",reduceIndex);
left.addEventListener("click",bannerAnimate);
function reduceIndex(){
oldIndex = nowIndex;
if(nowIndex === 0){
nowIndex = sliders.length-1;
}else{
nowIndex --;
}
}
right.addEventListener("click",addIndex);
right.addEventListener("click",bannerAnimate);
function addIndex(){
oldIndex = nowIndex;
if(nowIndex === sliders.length-1){
nowIndex = 0;
}else{
nowIndex ++;
}
}
function bannerAnimate(){
if(oldIndex === nowIndex)return false;
// console.log(nowIndex);
// console.log(oldIndex);
sliders = Array.from(sliders);

sliders.forEach(function(item,index){
item.className = item.className.replace(/(\s)?active-show|(\s)?active-hide/g,"");
spans[index].className = "";
})
sliders[nowIndex].className = sliders[nowIndex].className + " active-show";
sliders[oldIndex].className = sliders[oldIndex].className + " active-hide";
spans[nowIndex].className = "active";
}

spans = Array.from(spans);
spans.forEach(function(item,index){
item.addEventListener("mouseenter",toIndex.bind(false,index));
item.addEventListener("mouseenter",bannerAnimate);
})
function toIndex(index){
// console.log(index);
oldIndex = nowIndex;
nowIndex = index;

}


container.addEventListener("mouseenter",sS.bind(false,"stop"));
container.addEventListener("mouseleave",sS.bind(false,"start"));
function sS(type,evt){
var e = evt || event;
if(type === "stop"){
clearInterval(banner_timer);
banner_timer = null;
}else if(type === "start"){
if(banner_timer !== null ) return false;

// 自动点击
// banner_timer = setInterval(function(){
//     var evt = new Event("click");
//     right.dispatchEvent(evt);
// },3000)
}
}
sS("start");


// 热卖单品滑动效果
$(".zinif").on("mouseenter",function(){
    // $(".arrow-slider").css("left","11%");
    $(".arrow-slider").css({
        left : "11%",
        transition: "800ms"
    });
    // console.log($(".classify").children("div").eq(7))
    $(".classify").children("div").eq(3).fadeIn(800);
    $(".classify").children("div").eq(4).hide();
    $(".classify").children("div").eq(5).hide();
    $(".classify").children("div").eq(6).hide();
})
$(".dress").on("mouseenter",function(){
    // $(".arrow-slider").css("left","36%");
    $(".arrow-slider").css({
        left : "36%",
        transition: "800ms"
    });
    $(".classify").children("div").eq(4).fadeIn(800);
    $(".classify").children("div").eq(3).hide();
    $(".classify").children("div").eq(5).hide();
    $(".classify").children("div").eq(6).hide();
})
$(".cloths").on("mouseenter",function(){
    // $(".arrow-slider").css("left","61%");
    $(".arrow-slider").css({
        left : "61%",
        transition: "800ms"
    });
    $(".classify").children("div").eq(5).fadeIn(800);
    $(".classify").children("div").eq(3).hide();
    $(".classify").children("div").eq(4).hide();
    $(".classify").children("div").eq(6).hide();
    
})
$(".ornaments").on("mouseenter",function(){
    // $(".arrow-slider").css("left","86%");
    $(".arrow-slider").css({
        left : "86%",
        transition: "800ms"
    });
    $(".classify").children("div").eq(6).fadeIn(800);
    $(".classify").children("div").eq(3).hide();
    $(".classify").children("div").eq(4).hide();
    $(".classify").children("div").eq(5).hide();
})

// 首页商品列表加载

$.ajax({
    url : "./index.json",
    type : "GET",
    dataType : "json",
})
.then(render)
function render(res){
    // console.log(res)
    var html = "";
    $.each(res,function(index,item){
                console.log(item);
                // console.log(index);
                html += 
                `<div class="new-list">
                    <dl class="list-head">
                        <dt><a href="###"><img src="${item.image}" alt=""></a></dt>
                        <dd><a href="###">${item.title}</a></dd>
                        <dd>${item.price}</dd>
                    </dl>
                    <dl class="list-head">
                        <dt><a href="###"><img src="${item.image}" alt=""></a></dt>
                        <dd><a href="###">${item.title}</a></dd>
                        <dd>${item.price}</dd>
                    </dl>
                    <dl class="list-head">
                        <dt><a href="###"><img src="${item.image}" alt=""></a></dt>
                        <dd><a href="###">${item.title}</a></dd>
                        <dd>${item.price}</dd>
                    </dl>
                    <dl class="list-head">
                        <dt><a href="###"><img src="${item.image}" alt=""></a></dt>
                        <dd><a href="###">${item.title}</a></dd>
                        <dd>${item.price}</dd>
                    </dl>
                </div>`
                $(".new-show").html(html);
            })
}
