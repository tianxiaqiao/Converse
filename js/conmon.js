// 16:41:24
/** 
 * 倒计时
 *  countDown  返回的是当前时间和目标时间的距离 用时分秒表示 
 * 
 *  参数 : 时间字符串 "yyyy/mm/dd[ hh:mm:ss]"
 * 
 *  返回值 : 
 *  {
 *    hour : string,
 *    minute : string,
 *    second : string
 *  }
 * */ 
bannerAnimate


function countDown(dateString){
      var target = new Date(dateString);
      var now = Date.now();
      //差值时间(单位为ms);
      var Dtime = target.getTime() - now;

      var hour = parseInt(Dtime / 1000 / 3600) ;
      var minute = parseInt((Dtime - hour * 1000 * 3600) / 1000 / 60);
      var second = parseInt((Dtime - hour * 1000 * 3600 - minute * 1000 * 60) / 1000);
      var ms = Dtime % 1000;
      return {
            hour : buling(hour),
            minute : minute,
            second : second,
            ms : ms
      }
}
function buling(num){
      return num < 10 ? "0" + num : num;
}

function _(select){
      // 如果选择的数组只有一项,直接返回这个项而不是数组;
      var doms = document.querySelectorAll(select);
      if(doms.length === 0){
            return null;
      }
      return doms.length === 1 ? doms[0] : doms;
}

// 伪数组转换成真数组的方法;
function _toArray(list){
      return Array.prototype.slice.call(list);
}

function _on(dom,event_type,fn){
      dom.addEventListener(event_type,fn);
}

function _off(dom,event_type,fn){
      dom.removeEventListener(event_type,fn);
}

function _once(dom,event_type,fn){
      dom.addEventListener(event_type,fn);

      // 当个事件执行的时候,移除掉当前监听的事件;
      dom.addEventListener(event_type,removeEvent)

      // 是清空参数函数及当前清空函数的功能;
      function removeEvent(){
            _off(dom,event_type,fn);
            _off(dom,event_type,removeEvent);
      }
}
// 事件委托封装;
function _delegation(parent_node,event_type,target_selector,fn){
      // 1. 绑定不同的事件;
     parent_node.addEventListener(event_type,handlerClick)
     // 2. 事件处理函数;
     function handlerClick(evt){
           // 2.1 判断部分;
           var e = evt || window.event;
           var target = e.target || e.srcElement;
           // 2.1.1 选择范围会改变
           var targets = document.querySelectorAll(target_selector);
           targets = Array.from(targets);
           if(targets.indexOf(target) === -1) return false;
           // 2.2 事件处理函数;
           fn(e);
     }
}

// cookie封装
function _cookie(key,value,path,expires){
      var str = "";
      str += key + "=" + value + ";";
      if(path){
            str += "path=" + path + ";";
      }
      if(expires){
            var d = new Date();
            d.setDate(d.getDate() + expires);
            str += "expires=" + d + ";";
      }
      document.cookie = str;
      return str;
}
// cookie删除封装
function _removeCookie(key,path){
_cookie(key,"",path,-1)
}

//根据 key 值 获取cookie之中对应的value值
function _getCookie(key){
      // 1. 目标  根据 key 值 获取cookie之中对应的value值;
      // 2. 有啥 ? 1. cookie字符串 2. key;  3. some ;

      // 1. 获取cookie字符串;
      var cookieString = document.cookie;
      // 2. 把字符串转换成数组;
      var cookieArray = cookieString.split("; ");
      // console.log(cookieArray);
      // 3. 利用some 只要有一个ture就终止的特性; 判定是否存在这个key;
      
      var res = "";
      var hasKey = cookieArray.some(function(item){
            // 4. 判定当前字符串之中是否存在这个key值;
            // console.log(item.split("=")[0]);
            res = item.split("=")[1];
            return item.split("=")[0] === key
      })

      if(hasKey){
            return res;
      }else{
            return "";
      }
}

// 物体过度特效;
function animate(dom, attr, target) {
      // if(timer !== null) return false;
      clearInterval(dom.timer);
      dom.timer = setInterval(() => {
            let distance = target - getStyle(dom, attr, "number");
            let speed = distance > 0 ? Math.ceil(distance / 10) : Math.floor(distance / 10);
            dom.style[attr] = getStyle(dom, attr, "number") + speed + "px";
            if (distance === 0) {
                  clearInterval(dom.timer);
                  timer = null;
            }
      }, 50)
}

function getStyle(dom, attr, type) {
      // 用 新方法取值;
      var res_attr = getComputedStyle(dom)[attr];
      // 如果要求转换成数字,那么就转换;
      if (type === "number") {
            return parseInt(res_attr);
      }
      // 如果不要求就原样返回;
      return res_attr;
}
