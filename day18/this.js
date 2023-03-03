const data = {
  name: "Arjun",
  numbers: [1, 2, 3, 4, 5, 6],
  getName: function () {
    this.numbers.forEach((element) => {
      console.log(this.name, element);
    });
    let self = this;
    this.numbers.forEach(function (element) {
      console.log(self.name, element);
    });
    for (let index = 0; index < this.numbers.length; index++) {
      console.log(this);
    }
    this.numbers.map(function (element) {
      console.log(this);
    }, this);
    function start(params) {
      console.log(params.name);
    }
    start(this);
  },
  getFullname: () => {
    return this.name;
  },
};

console.log(data.getName());

function hello1() {
  return this;
}

function Hello1(name, address) {
  this.name = name;
  this.address = address;

  return `${this.name} ${this.address}`;
}

const obj = new Hello1("Arjun", "KTM");

console.log(obj.name);
