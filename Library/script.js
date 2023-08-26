let books = [];

function addBook(title, author, genre, year, quantity) {
  let book = {
    title: title,
    author: author,
    genre: genre,
    year: year,
    quantity: quantity,
  };
  books.push(book);
}

function deleteBook(index) {
  books.splice(index, 1);
  displayBooks();
}

function displayBooks() {
  let tableBody = document
    .getElementById("bookTable")
    .getElementsByTagName("tbody")[0];
  tableBody.innerHTML = "";
  for (let i = 0; i < books.length; i++) {
    let book = books[i];
    let row = tableBody.insertRow();
    let titleCell = row.insertCell(0);
    let authorCell = row.insertCell(1);
    let genreCell = row.insertCell(2);
    let yearCell = row.insertCell(3);
    let quantityCell = row.insertCell(4);
    let actionsCell = row.insertCell(5);
    titleCell.innerHTML = book.title;
    authorCell.innerHTML = book.author;
    genreCell.innerHTML = book.genre;
    yearCell.innerHTML = book.year;
    quantityCell.innerHTML = book.quantity;

    let deleteButton = document.createElement("button");
    deleteButton.classList.add("btn", "btn-danger");
    deleteButton.innerText = "Delete";
    deleteButton.addEventListener("click", function () {
      deleteBook(i);
      $("#deleteModal").modal("show");
    });

    actionsCell.appendChild(deleteButton);
  }
}

document
  .getElementById("bookForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();
    let title = document.getElementById("bookTitle").value;
    let author = document.getElementById("author").value;
    let genre = document.getElementById("genre").value;
    let year = document.getElementById("year").value;
    let quantity = document.getElementById("quantity").value;
    addBook(title, author, genre, year, quantity);
    displayBooks();
  });

document.getElementById("clearBtn").addEventListener("click", function () {
  books.length = 0;
  displayBooks();
});
