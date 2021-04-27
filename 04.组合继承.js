
// 声明属性
function Animal (name) {
  this.name = name
  this.colors = ['white', 'black']
}

// 在原型上添加方法
Animal.prototype.getName = function () {
  return this.name
}

// 借用构造函数  此时 Dog.prototype 为 {}
function Dog (name, age) {
  Animal.call(this,name)
  this.age = age
}

// 在原型链上添加 Animal 属性 方法（组合继承写法）
Dog.prototype = new Animal()

// 寄生式组合继承 写法
// Dog.prototype = Object.create(Animal.prototype)

Dog.prototype.constructor = Dog

let dog1 = new Dog('金毛', 2)
dog1.colors.push('pink')
let dog2 = new Dog('二哈',2)

console.log(Dog.prototype);
console.log(dog1);
console.log(dog2);