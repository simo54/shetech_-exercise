var listItems = ["Buy coffee", "Buy milk", "Disco dance"];

// Defining our `updateList()` function...
var updateList = function (items) {
  var listElement = document.querySelector("#task-list");

  items.forEach(function (item) {
    listElement.innerHTML += "<li>" + item + "</li>";
  });
};

updateList(listItems);
