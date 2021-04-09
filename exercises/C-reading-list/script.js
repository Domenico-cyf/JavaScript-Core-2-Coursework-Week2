function readingList(books) {
  // Write your code here...
  let content = document.querySelector("#content");
  let unorderedList = document.createElement("ul");
  content.appendChild(unorderedList);
  for (let book of books) {
    let liEl = document.createElement("li");
    unorderedList.appendChild(liEl);
    let paragraph = document.createElement("p");
    paragraph.innerText = `Title: ${book.title}. Author: ${book.author}.`;
    let imgEl = document.createElement("img");
    imgEl.src = book.image;
    imgEl.setAttribute("width", "250");
    imgEl.setAttribute("height", "auto");
    liEl.append(paragraph, imgEl);
    if (book.alreadyRead) {
      liEl.style.backgroundColor = "green";
    } else {
      liEl.style.backgroundColor = "red";
    }
  }
}

const books = [
  {
    title: "The Design of Everyday Things",
    author: "Don Norman",
    alreadyRead: false,
    image:
      "https://images-na.ssl-images-amazon.com/images/I/410RTQezHYL._SX326_BO1,204,203,200_.jpg",
  },
  {
    title: "The Most Human Human",
    author: "Brian Christian",
    alreadyRead: true,
    image: "https://images-na.ssl-images-amazon.com/images/I/71HMyqG6MRL.jpg",
  },
  {
    title: "The Pragmatic Programmer",
    author: "Andrew Hunt",
    alreadyRead: true,
    image:
      "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1401432508i/4099._UY630_SR1200,630_.jpg",
  },
];

readingList(books);
