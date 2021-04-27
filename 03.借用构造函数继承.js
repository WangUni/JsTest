
/**
 * 解决了原型链继承的2个问题，
 * 但是由于方法必须定义在构造函数中，所以会导致每次创建子类实例都会创建一遍方法。
 *
 * @author Yuzhou
 * @date 2021-04-27
 * @param {*} name
 */

function Animal (name) {
  this.name = name
  this.getName = function () {
    return this.name
  }
}

function Dog (name) {
  Animal.call(this, name)
}

// 在Dog的原型链上添加 Animal 
Dog.prototype = new Animal()

let dog1 = new Dog('Jack')
let dog2 = new Dog('Tom')

console.log(dog1);  // Animal { name: 'Jack', getName: [Function (anonymous)] }
console.log(dog2);  // Animal { name: 'Tom', getName: [Function (anonymous)] }

console.log(Dog.prototype); // Animal { name: undefined, getName: [Function (anonymous)] }
console.log(Animal.prototype);  // {}