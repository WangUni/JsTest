
/**
 * 原型链继承缺点：
 *  原型链继承的所有引用属性都被实例共享
 *  子类在实例化的时候不能给父类构造函数传参
 *  
 * @author Yuzhou
 * @date 2021-04-27
 */

// 声明完函数，原型上没有方法
function Animal() {
  this.colors = ['white' ,'black']
}

// 在原型上添加方法
Animal.prototype.getColor = function () {
  return this.colors
}

function Dog () { }
// Dog 原型 继承 Animal 的原型链
Dog.prototype = new Animal()

let dog1 = new Dog()
dog1.colors.push('yellow')

let dog2 = new Dog()

let cat = new Animal()

console.log(dog1.colors); // [ 'white', 'black', 'yellow' ]
console.log(dog2.colors); // [ 'white', 'black', 'yellow' ]
console.log(cat.colors);  // [ 'white', 'black' ]