function foo () {
  return function bar() {
    console.log("------")
  }
}


const f1 = foo();
const f2 = foo();


console.log(f1 === f2)