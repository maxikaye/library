const newBookBtn = document.querySelector('#btn-new-book');
const newBookModal = document.querySelector('.new-book-modal')

let myLibrary = [];

/**
 * Book Constructor
 * @param {string}} title 
 * @param {string} author 
 * @param {number (integer)} pages 
 * @param {boolean} read 
 */
function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
}

Book.prototype.displayBook = function() {

}

function addBookToLibrary(e) {
  e.preventDefault();
}

function displayLibrary() {
    // loop thru myLibrary
}

// new book button
newBookBtn.addEventListener('click', () => { newBookModal.style.display = "block"; }, false);


// Sample Library
const bhagavadGita = new Book('Bhagavad Gita', 'Krishna Dvaipayana', 101, true);
const newTestament = new Book('The New Testament from Peshitta Aramaic', 'Georgae M Lamsa', 412, true);
const holyQuran = new Book('The Holy Quaran', 'Mohammed', 292, false);
myLibrary.push(bhagavadGita, newTestament, holyQuran);