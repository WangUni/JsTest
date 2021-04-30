
/**
 *  
 *  节流
 *    利用时间戳
 *    解决高频事件，N秒内只执行一次
 * @author Yuzhou
 * @date 2021-04-30
 * @param {*} func
 * @param {*} wait
 */
 function throttle(func, wait) {
  var context, args;
  var previous = 0;

  return function() {
      var now = +new Date();
      context = this;
      args = arguments;
      if (now - previous > wait) {
          func.apply(context, args);
          previous = now;
      }
  }
}


// 暴躁的小白