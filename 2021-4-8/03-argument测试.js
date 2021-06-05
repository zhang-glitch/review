function poo(fn) {
  return function boo() {
    fn(arguments)
  }
}


poo(function () { console.log(arguments) })("zh", "llm")