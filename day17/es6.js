// 1  destructor

const name = "Shyam";

const information = {
  name: "Arjun",
  address: "KTM",
  getFullname: function () {
    return "Arjun Ghimire";
  },
};

console.log(information.address, information["address"]);
const { name: firstname, address, getFullname } = information;

console.log(firstname, address, getFullname());

// //  2

const persons = ["Arjun", "Ram", "Shyam"];

const [first, second, third] = persons;

const [, , data3] = persons;
console.log(data3);

// 3

const firstName = "Arjun";
const lastName = "Ghimire";

const fullname = firstName + " " + lastName;
const greeting = "Welcome " + fullname + ", Have a great day";
const greeting1 = `Welcome  ${fullname} , Have a great day`;

console.log(greeting1);

//  4

const person = {
  name: "Arjun",
  age: 20,
};

const info = {
  ...person,
  address: "KTM",
  age: 30,
};

console.log(info);

const person1 = {
  name: "Arjun",
  age: 20,
};

const info1 = {
  address: "KTM",
};

const data = {
  ...person1,
  info1,
};

const array1 = [1, 2, 3, 4, 5];
const array2 = [6, 7, 8, 9, 10];

const array3 = [...array1, ...array2];
// console.log(array3);

//

// function shippingCharge(location = "KTM") {
//   if (location == "KTM") {
//     return 150;
//   }
//   return 250;
// }

const shippingCharge = (location = "KTM") => {
  if (location == "KTM") {
    return 150;
  }
  return 250;
};

console.log(shippingCharge());
console.log(shippingCharge("BTL"));
