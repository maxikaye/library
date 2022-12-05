const newBookBtn = document.querySelector('#btn-new-book');
const newBookModal = document.querySelector('.new-book-modal');
const newBookForm = document.querySelector('#new-book-form');
const addBookBtn = document.querySelector('#btn-add-book');
const libraryDisplay = document.querySelector('.library-display');
const inputBookTitle = document.getElementById('book-title');
const inputBookAuthor = document.getElementById('book-author');
const inputBookPages = document.getElementById('book-page-count');
const inputBookCompleted = document.getElementById('book-completed');

let myLibrary = [];

/**
 * Book Constructor
 * @param {string} title 
 * @param {string} author 
 * @param {number (integer)} pages 
 * @param {boolean} completed 
 */
function Book(title, author, pages, completed) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.completed = completed;
}

Book.prototype.displayBook = function() {
  const bookCard = document.createElement('div');
  libraryDisplay.appendChild(bookCard);

  const bookTitle = document.createElement('h2');
  bookTitle.innerHTML = `${this.title}`;
  bookCard.appendChild(bookTitle);

  const bookAuthor = document.createElement('p');
  bookAuthor.innerHTML = `${this.author}`;
  bookCard.appendChild(bookAuthor);

  const bookPages = document.createElement('p');
  bookPages.innerHTML = `${this.pages} pages`;
  bookCard.appendChild(bookPages);

  const bookCompleted = document.createElement('p');
  if (this.completed) bookCompleted.innerHTML ='Completed';
  else bookCompleted.innerHTML = 'To be read';
  bookCard.appendChild(bookCompleted);
}

function addBookToLibrary(e) {
  e.preventDefault();
  let newBook = new Book(
    inputBookTitle.value,
    inputBookAuthor.value,
    inputBookPages.value,
    inputBookCompleted.checked
  );
  myLibrary.push(newBook);
  newBook.displayBook();
  clearFormAndClose();
}

function clearFormAndClose() {
  inputBookTitle.value = "";
  inputBookAuthor.value = "";
  inputBookPages.value = 0;
  inputBookCompleted.checked = false;
  newBookModal.style.display = "none";
}

function displayLibrary() {
    for (let item in myLibrary) {
        myLibrary[item].displayBook();
    }
}

newBookBtn.addEventListener('click', () => { newBookModal.style.display = "block"; });
addBookBtn.addEventListener('click', addBookToLibrary, false);

// Sample Library ============================================================
const bhagavadGita = new Book('Bhagavad Gita', 'Krishna Dvaipayana', 101, true);
const newTestament = new Book('The New Testament from Peshitta Aramaic', 'Georgae M Lamsa', 412, true);
const holyQuran = new Book('The Holy Quaran', 'Mohammed', 292, false);
myLibrary.push(bhagavadGita, newTestament, holyQuran);

// Initialize
displayLibrary();