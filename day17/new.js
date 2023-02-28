const information = {
  name: "Arjun",
  address: "KTM",
};

Object.keys(information).map((element, i) => {
  console.log(element, information[element]);
});

Object.entries(information).map((element, i) => {
  console.log(element, element[0], element[1], i);
});

for (const key in information) {
  console.log(key, information[key]);
}
