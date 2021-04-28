/**
 * 浅拷贝
 *  只考虑对象类型
 *  浅拷贝只拷贝了引用数据类型(Object,Array)的在内存中的地址，并没有拷贝原始数据。
 *  修改引用数据类型会同时改变。
 *  修改原始数据不会同时改变。 
 * 
 * @author Yuzhou
 * @date 2021-04-28
 * @param {*} obj
 * @returns
 */
function shallowCopy (obj) {
  // 判断是不是对象类型
  if (typeof obj !== 'object') return

  // 创建新值,判断值是数组还是对象并赋值
  let newObj = obj instanceof Array ? [] : {}
  // Object.hasOwnProperty(key) 判断对象上是否有指定的key
  for (const key in obj) {
    if (obj.hasOwnProperty(key)) {
      newObj[key] = obj[key]
    }
    
  }
  return newObj
}

// 其他实现方式
// obj2 = obj1
// Object.assign(target, ...sources)  将所有可枚举属性的值从一个或多个源对象分配到目标对象(合并对象)。返回 target
// Array.prototype.concat() 合并数组  newArr = arr1.concat(arr2)  返回新数组
// Array.prototype.slice(begin, end)  截取数组，不包含结束。 传一个参数代表从开始到结束  返回新数组