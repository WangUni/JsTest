class Animals{
  constructor (name) {
    this.name = name
  }
  getName () {
    return this.name
  }
}

class Dog extends Animals {
  constructor (name, age) {
    // 继承属性
    super(name)
    this.age =age
  }
}

let dog1 = new Dog('金毛', 2)
console.log(dog1);
console.log(dog1.getName());