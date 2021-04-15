//when GEC is created global object window is created and this refers to window in global

// When new instance is created by invoking a constructor function--> this refers to the new instance created

//"this" refers to a invoke object

function foo() {
  console.log(this);
  console.log("Simple function call");
  console.log(this === window);
}

let user = {
  count: 10,
  foo: foo,
  foo1: function () {
    console.log(this === window);
  },
  arro: () => {
    console.log(this === window);
  },
};

let fun1 = user.foo1;

console.log("Invoking as simple function");
fun1(); //returns true
console.log("Invoking as a object method");
user.foo1(); //returns false
console.log("this inside an arrow method in user object");
user.arro(); // returns true

//"this" with the call and Apply methods

function Person(n, a) {
  this.name = n;
  this.age = a;
  this.display = function () {
    console.log(`${this.name} is ${this.age} years old`);
  };
}

let person1 = new Person("zack", 21);
person1.display();

let person2 = new Person("John", 23);
person2.display();

let person21 = person2.display.bind(person1);

person21();

console.log("Type of Person " + typeof Person);
console.log("Type of person1 " + typeof person1);
console.log("Type of fun1 " + typeof fun1);
console.log("Type of count " + typeof user.count);
console.log("Type of user.foo " + typeof user.foo);
console.log("Type of this " + typeof this);
console.log("Type of null " + typeof null);
console.log("Type of undefined " + typeof undefined);
console.log("Type of string " + typeof "123");
console.log("Type of false " + typeof false);
