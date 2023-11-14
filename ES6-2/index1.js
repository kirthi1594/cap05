// Import and Export
// Inporting any JS expression/function/classes/Variable
// global scope

// export user
// ''
// ``

// module  ~ components

// Way to export
// 1. Default export (one time)
let user = {
    name: 'kirthi',
    favSub: 'JS'
}
// export default user

// declared and exporting
export default function fun(name) {
    console.log(name)
}
// console.log(user)

// 2. Named export ( multiple)
let account = {
    type: 'Saving',
    balance: 100000
}

function fun2(name) {
    console.log(`my name is ${name}`)
}

// syntax for Named exports
export { account, fun2 }


// ==== Class =====
// constructor function
function MyConstructor(val1, val2, name) {
    this.prop1 = val1;
    this.prop2 = val2;
    this.name = name;
}

// prototype method
MyConstructor.prototype.sayName = function() {
    console.log(`My name is ${this.name}`)
}
MyConstructor.prototype.sayVal1 = function() {
    console.log(`My name is ${this.val1}`)
}
MyConstructor.prototype.sayVal2 = function() {
    console.log(`My name is ${this.val2}`)
}


let obj1 = new MyConstructor('val1', 'val2', 'kirthi')
console.log(obj1)
obj1.sayName()


// this class will work as a wrapper 
class MyClass {
    // cunstructor function
    constructor(name, age)  {
        // 'this' = obj
        this.name = name;
        this.age = age;
    }
    // prototype method
    sayName() {
        console.log(`My name is ${this.name}`)
    }
    sayAge() {
        console.log(`My name is ${this.age}`)
    }
}

let obj2 = new MyClass('kirthi', 28);
console.log(obj2)