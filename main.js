var updateList = function (items, save) {
  var listElement = document.querySelector("#task-list");

  listElement.innerHTML = "";

  items.forEach(function (item) {
    listElement.innerHTML += renderItem(item);
  });

  if (save) localStorage.listItems = JSON.stringify(items);
};

var createNew = function (event) {
  console.log("createNew()");

  event.preventDefault();

  var newItemElement = document.querySelector("#new-item");
  var newItemValue = newItemElement.value.trim();

  if (!newItemValue) return;

  listItems.push({ text: newItemValue, completed: false });
  newItemElement.value = "";
  console.log(listItems);

  updateList(listItems);
};

var renderItem = function (item) {
  console.log("renderItem()");

  var template = document.querySelector("#item-template").innerHTML;
  return template.replace("_TEXT_", item.text);
};

var removeItem = function (event) {
  console.log("removeItem()");

  var clickedItemText = event.target.previousElementSibling.innerHTML;

  listItems = listItems.filter(function (item) {
    return clickedItemText != item.text;
  });
  console.log(listItems);

  updateList(listItems);
};

var toggleStatus = function (event) {
  console.log("toggleStatus()");

  var clickedItemText = event.target.innerHTML;
  console.log(clickedItemText);
  listItems.forEach(function (item) {
    console.log(item);
    if (clickedItemText == item.text) {
      item.completed = !item.completed;
    }
  });
  console.log(listItems);

  updateList(listItems);
};

var loadList = function () {
  if (localStorage.listItems) return JSON.parse(localStorage.listItems);
  console.log("called");
  return [
    { text: "Buy coffee", completed: true },
    { text: "Buy milk", completed: false },
    { text: "Disco dance", completed: false },
  ];
};

var filterItems = function (status) {
  var itemsToShow = [];

  if (status == "completed") {
    itemsToShow = listItems.filter(function (item) {
      return item.completed;
    });
  } else if (status == "active") {
    itemsToShow = listItems.filter(function (item) {
      return !item.completed;
    });
  } else {
    itemsToShow = listItems;
  }

  updateList(itemsToShow);
};

var clearCompleted = function () {
  listItems = listItems.filter(function (item) {
    return !item.completed;
  });

  updateList(listItems, true);
};

var listItems = loadList();

updateList(listItems);
