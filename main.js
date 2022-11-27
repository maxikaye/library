const newBook = document.querySelector('#btn-new-book');

let myLibrary = [
    
];

function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
}

function addBookToLibrary(e) {
  e.preventDefault();
}

function displayLibrary() {
    // loop thru myLibrary
}

// new book button
newBook.addEventListener('click', addBookToLibrary, false);
//