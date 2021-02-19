var listItems = ["Buy coffee", "Buy milk", "Disco dance"];

// Defining our `updateList()` function...
var updateList = function (items) {
  var listElement = document.querySelector("#task-list");
  listElement.innerHTML = "";

  items.forEach(function (item) {
    listElement.innerHTML += renderItem(item);
  });
};

var createNew = function (event) {
  event.preventDefault();

  var newItemElement = document.querySelector("#new-item");
  var newItemValue = newItemElement.value.trim();

  if (!newItemValue) return;

  listItems.push(newItemValue);
  newItemElement.value = "";

  updateList(listItems);
};

var renderItem = function (itemText) {
  var template = document.querySelector("#item-template").innerHTML;
  return template.replace("_TEXT_", itemText);
};

var removeItem = function (event) {
  var clickedItemText = event.target.previousElementSibling.innerHTML;

  listItems = listItems.filter(function (itemText) {
    return clickedItemText != itemText;
  });

  updateList(listItems);
};

updateList(listItems);
