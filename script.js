let myLibrary = [];

function Book(title, author, page_count, genre, been_read, index) {
  this.title = title;
  this.author = author;
  this.page_count = page_count;
  this.genre = genre;
  this.been_read = been_read;
  this.index = index;
}

myLibrary[0] = new Book("A Story", "Myself", 1, "Biography", true, 0);

function addBookToLibrary() {}

// Create table for DOM
const table = document.createElement("thead");

const thead = document.createElement("thead");
const headerRow = document.createElement("tr");
const headers = ["Title", "Author", "Page Count", "Genre", "Has Been Read"];

headers.forEach((header) => {
  const th = document.createElement("th");
  th.textContent = header;
  headerRow.appendChild(th);
});

thead.appendChild(headerRow);

const tbody = document.createElement("tbody");

function createTD(detail) {
  const td = document.createElement("td");
  td.textContent = detail;
  return td;
}

myLibrary.forEach((book) => {
  const tr = document.createElement("tr");
  tr.appendChild(createTD(book.title));
  tr.appendChild(createTD(book.author));
  tr.appendChild(createTD(book.page_count));
  tr.appendChild(createTD(book.genre));

  const been_read_td = document.createElement("td");
  const been_read_check = document.createElement("input");
  been_read_check.setAttribute("type", "checkbox");
  been_read_check.setAttribute("checked", book.been_read);
  been_read_td.appendChild(been_read_check);
  tr.appendChild(been_read_td);

  const remove_td = document.createElement("td");
  const remove_btn = document.createElement("button");
  remove_btn.textContent = "Remove Book";
  remove_td.appendChild(remove_btn);
  tr.appendChild(remove_td);

  tbody.appendChild(tr);
});

table.appendChild(thead);
table.appendChild(tbody);
const main = document.querySelector(".table-container");
main.appendChild(table);
