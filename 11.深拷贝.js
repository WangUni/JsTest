/**
 *
 *
 * @author Yuzhou
 * @date 2021-04-28
 * @param {*} target
 * @returns
 */

// 判断数据类型
function checkType(target) {
  return Object.prototype.toString.call(target).slice(8,-1)
}

// 实现深度克隆
function deepClone(target) {
  // 初始化结果   判断类型
  let result,
    type = checkType(target)
  if (type === 'Object') {
    result = {}
  } else if (type === 'Array') {
    result = []
  } else {
    return target
  }

  for (let key in target) {
    // 获取变量没一项的值
    let val = target[key]
    // 判断每项值中是否存在对象或数组
    if (checkType(val) === 'Object' || checkType(val) === 'Array') {
      // 有对象或数组 继续遍历
      result[key] = deepClone(val)
    } else {
      // val 是基本类型 或函数
      result[key] = val
    }
  }
  return result
}

let obj = {
  name: 'Jack',
  age: 15,
  like: {
    book: 'Haha',
  },
  firends:['Tom','Lucy','Dive']
}
let obj1 = deepClone(obj)
obj1.name = 'Jim'
obj1.firends = ['NO','Yes']
console.log('obj1----', obj1);
console.log('obj----', obj);