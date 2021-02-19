var listItems = ["Buy coffee", "Buy milk", "Disco dance"];
var listElement = document.querySelector("#task-list");

listItems.forEach(function (task) {
  listElement.innerHTML += "<li>" + task + "</li>";
});
