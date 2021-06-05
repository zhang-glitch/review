class superClass {
  constructor() {

  }

  static say() {
    console.log("say")
  }
}


class sonClass extends superClass {
  constructor() {
    super()
  }
}



sonClass.say()

// let su = new superClass()
// // su.say()
// let son = new sonClass()

// son.say()