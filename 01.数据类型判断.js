/**
 * @author Yuzhou
 * @date 2021-04-27
 * @param {*} obj
 * @returns
 */
function typeOf (obj) {
  let type = Object.prototype.toString.call(obj).split(' ')[1]
  type = type.substring(0,type.length -1).toLowerCase()
  return type
}

typeOf([])    // array
typeOf({})    // object
typeOf(123)   // number
