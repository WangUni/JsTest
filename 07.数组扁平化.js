// 简单粗暴
// 几维数组 flat 参数就传几
[1, [2, 3, [4]]].flat(3)

// 手写实现
// es5
function flatten(arr) {
  let result = []
  arr.forEach(item => {
    if (Array.isArray(item)) {
      result = result.concat(flatten(item))
    } else {
      result.push(item)
    }
  });
  return result
}

flatten([1, [2, 3, [4]]])

// es6
function flatten1 (arr) {
  while (arr.some(item => Array.isArray(item))) {
    arr = [].concat(...arr)
  }
  return arr
}

flatten1([1, [2, 3, [4]]])

/** 
 * 用到的方法：
 *    Array.isArray(item)  判断当前值是不是数组
 *    Array.some(fn)  遍历数组，符合 fn 函数的值 返回 true
 *    Array.concat()  拼接数组，返回一个新数组
*/