
// es5 写法

function unique (arr) {
  var res = arr.filter(function (item, index, array) {
    return array.indexOf(item) === index
  })
  return res
}


// es6写法
var unique = arr => [...new Set(arr)]