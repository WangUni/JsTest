/**
 * 深拷贝
 *   只考虑普通对象属性，不考虑内置对象和函数。(Data、RegExp等)
 *
 * @author Yuzhou
 * @date 2021-04-28
 * @param {*} obj
 */
function deepClone(obj) {
  if (typeof obj !== 'object') return
  var newObj = obj instanceof Array ? [] : {}
  for (var key in obj) {
    if (obj.hasOwnProperty(key)) {
      newObj[key] = typeof obj[key] === 'object' ? deepClone(obj[key]) : obj[key]
    }
  }
  return newObj
}

// JSON.parse(JSON.stringify())  // 不能处理内置函数和正则