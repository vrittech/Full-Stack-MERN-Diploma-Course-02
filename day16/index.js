// array and object

const persons = ["Arjun"];
console.log(persons);

persons.push("Ram");
console.log(persons);

persons.pop();
console.log(persons);

const newarray = persons.concat(["Sita"]);
console.log(newarray);

const array1 = ["one", "two", "three", "four"];

console.log(array1.slice(2, 3));

const array2 = [1, 2, 3, 4, 5, 6];

const maparray2 = array2.map((element, index) => {
  console.log(element, index);
  return element * 2;
});

console.log(maparray2);

const array3 = [
  {
    id: 1,
    name: "Ram",
    age: 70,
  },
  {
    id: 1,
    name: "Shyam",
    age: 20,
  },
];

const array4 = array3.map((element, index) => {
  return {
    id: element.id,
    name: element.name,
    status: element.age > 50 ? "Old" : "Young",
  };
});
console.log(array4);

const array5 = [];
array3.forEach((element, index) => {
  array5.push({
    id: element.id,
    name: element.name,
    status: element.age > 50 ? "Old" : "Young",
  });
});
console.log(array5);

const array6 = [];
for (let index = 0; index < array3.length; index++) {
  const element = array3[index];
  array6.push({
    id: element.id,
    name: element.name,
    status: element.age > 50 ? "Old" : "Young",
  });
}
console.log(array6);

const array7 = [
  {
    id: 1,
    name: "Arjun",
    age: 20,
  },
];

array7.push({
  status: "Old",
});

console.log(array7);

const array8 = [
  {
    id: 1,
    name: "Ram",
    age: 70,
  },
  {
    id: 1,
    name: "Shyam",
    age: 20,
  },
];

const filterArray = array8.filter((element, index) => {
  return element.age > 30;
});
console.log(filterArray);

const array9 = [1, 2, 3, 4, 5, 6, 7, 9];
const total1 = array9.reduce((acc, value) => {
  console.log(acc, value.price);
  return (acc = acc + value.price);
}, 0);
console.log(total);

const array10 = [
  {
    price: 1,
  },
  {
    price: 2,
  },
  {
    price: 3,
  },
  {
    price: 4,
  },
  {
    price: 5,
  },
];

const total2 = array10.reduce((acc, value) => {
  console.log(acc, value.price);
  return (acc = acc + value.price);
}, 0);

console.log(total2);

const carts = [
  {
    name: "book",
    price: 264,
    quantity: 2,
  },
  {
    name: "shoe",
    price: 502,
    quantity: 1,
  },
];

const total3 = carts.reduce((acc, element) => {
  return (acc = acc + element.price * element.quantity);
}, 0);

console.log(total3);

const findData = carts.find((element, index) => {
  return element.name === "book";
});

console.log(findData.name);
