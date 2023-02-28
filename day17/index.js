// const person = {
//   firstName: "Arjun",
//   lastName: "Ghimire",
//   getFullName: function () {
//     return "Arjun" + "Ghimire";
//   },
// };

// const information = {
//   address: "KTM",
//   // __proto__: person,
// };

// console.log(person);
// console.log(information);
// console.log(information.firstName);

// const calculate = [];

// const math = {};

// math.__proto__ = calculate;
// console.log(math);

// OOP

class Parent {
  constructor(name) {
    this.name = name;
  }

  fullname() {
    return this.name;
  }
}

class Child extends Parent {
  constructor(param) {
    super(param);
    this.name = "Sujan";
  }

  address() {
    return this.fullname();
  }
}

const obj = new Child("hello");

console.log(obj.address());
