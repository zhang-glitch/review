// class Person {
//   constructor() {
//     this.name = 'zh'
//     console.log(this)
//   }
// }

// class Son extends Person {
//   constructor() {
//     super()//这里调用super，自动执行父类的构造函数，然后内部的this指向的是子类的实例。
//   }
// }

// let son = new Son()//Son { name: 'zh' }



//普通的函数中是不可以使用new.target.name的，会报错。
// function say() {
//   console.log(new.target.name)
// }

// say()

// class A {
//   constructor() {
//     console.log(new.target.name);
//   }
// }
// class B extends A {
//   constructor() {
//     super();
//   }
// }
// new A() // A
// new B() // B



// class Person {
//   constructor() {
//     this.name = 'zh'
//     this.sex = "male"
//     this.sayName = () => {
//       console.log(this.name)
//     }
//   }
//   say() {
//     console.log('say')
//   }

//   static saySex() {
//     console.log(this.sex)
//   }
// }

// class Son extends Person {
//   constructor() {
//     super()
//     // this.name = 'llm'

//     // this.sayPerson = function () {
//     // 这里的super代表的是Person.prototype,他只代表的是原型对象，不能使用父类的实例方法，只能使用的是原型方法。
//     super.say()
//     // super.sayName()//这里会报错。(intermediate value).sayName is not a function
//     // }
//     Son.saySex()
//   }

//   static saySex() {
//     super.saySex()//female，并非male
//   }
// }
// Son.sex = "female"

// let son = new Son()


// class A {}
// A.prototype.x = 2;

// class B extends A {
//   constructor() {
//     super();
//     console.log(super.x) // 2
//   }
// }

// let b = new B();


class A { }

class B extends A {
  constructor() {
    super();
    console.log(super.valueOf()); // true
  }
}

let b = new B();