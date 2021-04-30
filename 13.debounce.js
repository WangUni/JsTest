
/**
 *  防抖
 *    立即执行
 *    取消防抖
 * @author Yuzhou
 * @date 2021-04-29
 * @param {*} func
 * @param {*} wait
 * @param {*} immediate
 */
function debounce(func, wait, immediate) {
  var timeout, result

  var debounced = function () {
    var context = this
    var args = arguments

    if (timeout) clearTimeout(timeout)
    if (immediate) {
      // 如果执行过，不在执行
      var callNow = !timeout
      timeout = setTimeout(function () {
        timeout = null
      }, wait)
      if (callNow) result = func.apply(context, args)
    } else {
      timeout = setTimeout(function () {
        func.apply(context, args)
      }, wait)
    }
    return result
  }
  debounced.cancel = function () {
    clearTimeout(timeout)
    timeout = null
  }
  return debounced
}



var count = 0
window.addEventListener('mousemove', debounce(function () {
  count++
  console.log(count);
}, 1000, true))

// 取消防抖
// debounce(fn,wait,immediate).cancel()