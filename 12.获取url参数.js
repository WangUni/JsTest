function getParams (url) {
  const paramsStr = /.+\?(.+)$/.exec(url)[1]; // 将 ? 后面的字符串取出来
  const paramsArr = paramsStr.split('&')  // 分割成数组
  let paramsObj = {}
  // 将params存到对象中
  paramsArr.forEach(param => {
    if (/=/.test(param)) {
      let [key, val] = param.split('=')
      val = decodeURIComponent(val) // 解码
      val = /^\d+$/.test(val) ? parseFloat(val) : val // 判断是否是数字

      if (paramsObj.hasOwnProperty(key)) {
        // 如果对象中有key 就添加值
        paramsObj[key] = [].concat(paramsObj[key],val)
      } else {
        // 如果没有key 就创建key
        paramsObj[key] = val
      }
    } else {
      // 处理没有value的参数
      paramsObj[param] = true
    }
  })

  return paramsObj
}

let param = getParams('http://172.29.105.77/web/#/1?page_id=2705&name=jack&age=16')
console.log(param); // {page_id: 2705, name: "jack", age: 16}