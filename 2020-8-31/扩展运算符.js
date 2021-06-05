const person = {
  name: 'llm',
  age: 19,
  sex: 'nv',
  friends: {
    name: 'zh',
    age: 20,
    sex: 'nan'
  }
}

function change(x = { ...person }) {
  x.age += 1;
  x.friends.age = 4;
  console.log("x", x)
}


// change(person)

change()
console.log(person)