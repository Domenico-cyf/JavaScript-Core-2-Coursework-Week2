function shoppingList(arrayOfPeople) {
  // Write your code here...
  let content = document.getElementById("content");
  let unorderList = document.createElement("ul");
  content.appendChild(unorderList);

for (food of shopping) {
  let liEl = document.createElement("li");
  liEl.innerText = food;
  unorderList.appendChild(liEl);
}
}

let shopping = ["Milk", "Bread", "Eggs", "A Dinosaur", "Cake", "Sugar", "Tea"];

shoppingList(shopping);
