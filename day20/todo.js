const todo = document.getElementById("todo");

const addTask = document.getElementById("addTask");

const lists = document.querySelector(".lists");

const todos = [];

let items = [];
function create(newData) {
  const addItem = document.createElement("div");
  newData.forEach((element) => {
    console.log(element);
    addItem.innerHTML = `
      <div id="item" class="${element}">
        <p>${element}</p>
        <button class="${element}">Delete</button>
      </div>
    `;
    lists.append(addItem);
    items = document.querySelectorAll("#item");
  });
}

function formSubmit() {
  todos.push(todo.value);
  create(todos);
}

lists.addEventListener("click", function (e) {
  items.forEach((element) => {
    if (element.className === e.target.className) {
      element.remove();
    }
  });
});
