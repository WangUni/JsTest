// 浅拷贝
// 值考虑对象类型

function shallowCopy (obj) {
  // 判断是不是对象类型
  if (typeof obj !== 'object') return

  // 创建新值,判断是不是数组
  let newObj = obj instanceof Array ? [] : {}
  // Object.hasOwnProperty(key) 判断对象上是否有指定的key
  for (const key in obj) {
    if (obj.hasOwnProperty(key)) {
      newObj[key] = obj[key]
    }
  }
  return newObj
}