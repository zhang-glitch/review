function inherit(subType, superType) {
  subType.prototype = Object.create(superType.prototype, {
    constructor: {
      value: subType,
      enumerable: false,
      configurable: true,
      writable: true
    }
  })
  // 让类的静态方法也可以被继承。
  Object.setPrototypeOf(subType, superType)
}