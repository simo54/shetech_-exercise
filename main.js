var listItems = ["Buy coffee", "Buy milk", "Disco dance"];

// Defining our `updateList()` function...
var updateList = function (items) {
  var listElement = document.querySelector("#task-list");
  listElement.innerHTML = "";

  items.forEach(function (item) {
    listElement.innerHTML += "<li>" + item + "</li>";
  });
};

updateList(listItems);

var createNew = function (event) {
  event.preventDefault();

  var newItemElement = document.querySelector("#new-item");
  var newItemValue = newItemElement.value.trim();

  if (!newItemValue) return;

  listItems.push(newItemValue);
  newItemElement.value = "";

  updateList(listItems);
};
