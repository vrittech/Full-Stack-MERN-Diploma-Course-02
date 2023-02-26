function sum(value1, value2) {
  return value1 + value2;
}

// console.log(sum(1, 2));

// camelcase
// firstName, lastName,fullName
// snake case
// firstname, first_name

function getFullName(firstName, lastName) {
  return firstName + " " + lastName;
}

console.log(getFullName("Arjun", "Ghimire"));

const address = "Kathmandu";

function getUserAddress(value) {
  const country = "Nepal";
  return value + "," + country;
}

console.log(getUserAddress(address));
console.log(country);
