// switch case
const key = 4;

switch (key) {
  case 1:
    console.log("Sunday");
    break;

  case 2:
    console.log("Monday");
    break;

  case 3:
    console.log("Tuesday");
    break;

  default:
    console.log("Invalid day");
    break;
}

// ternary operator

const a = 4;

a === 5 ? "YES" : "NO";

console.log(a === 5 ? "YES" : "NO");

// loop

// for
// do while
// while
// for in
// for of
// forEach

for (let i = 0; i < 10; i++) {
  console.log(i);
}

for (let i = 10; i > 0; i--) {
  console.log(i);
}

// array

const arrayValue = ["Arjun", 1, true, "Sita", "Rahul"];
console.log(arrayValue[0]);
console.log(arrayValue[1]);
console.log(arrayValue[2]);
console.log(arrayValue[3]);
console.log(arrayValue[4]);

console.log(arrayValue);

const array2 = [];
console.log(arrayValue.length, array2.length);

for (let i = 0; i < arrayValue.length; i++) {
  console.log(arrayValue[i]);
}

// foreach
arrayValue.forEach((element, i) => {
  console.log(element, i);
});

// while loop
let i = 0;
while (i < 10) {
  console.log(i);
  i++;
}

// do while

do {
  console.log(i);
  i++;
} while (i < 10);

// object

const person = {
  name: "Arjun",
  address: "KTM",
  getAddress: function () {
    return "KTM";
  },
};

person.age = 22;
person.name = "Bishal";

const persons = ["Arjun", "Shyam"];

persons[0] = "Ram";

console.log(persons);

function fullName() {
  const hello = "arjun";
  function name() {
    console.log(hello);
  }
}
