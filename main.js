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

Book.prototype.removeBook = function() {
  libraryDisplay.removeChild(this.parentElement);
  let indexToRemove = myLibrary.findIndex(element => element.title === this.parentElement.dataset.name);
  myLibrary.splice(indexToRemove, 1);
}

Book.prototype.markCompleted = function() {
  this.completed = true;
  const bookCompleted = this.parentElement.querySelector('.book-incomplete');
  bookCompleted.classList.remove('book-incomplete');
  bookCompleted.classList.add('book-completed');
  bookCompleted.innerHTML = "Completed";
}

Book.prototype.displayBook = function() {
  const bookCard = document.createElement('div');
  bookCard.dataset.name = `${this.title}`;
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
 
  if (!this.completed) {
    bookCompleted.innerHTML = 'To be read';
    bookCompleted.classList.add('book-incomplete');
    bookCompleted.addEventListener('click', this.markCompleted);
  } else {
    bookCompleted.innerHTML ='Completed';
    bookCompleted.classList.add('book-completed');
  }
  bookCard.appendChild(bookCompleted);

  const removeBookBtn = document.createElement('button');
  removeBookBtn.classList.add('btn-remove-book');
  bookCard.appendChild(removeBookBtn);
  removeBookBtn.addEventListener('click', this.removeBook);
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

newBookBtn.addEventListener('click', () => { newBookModal.style.display = 'block'; });
libraryDisplay.addEventListener('click', () => {
  if (newBookModal.style.display === 'block') clearFormAndClose();
})
addBookBtn.addEventListener('click', addBookToLibrary, false);

// Sample Library ============================================================
const bhagavadGita = new Book('Bhagavad Gita', 'Krishna Dvaipayana', 101, true);
const newTestament = new Book('The New Testament from Peshitta Aramaic', 'Georgae M Lamsa', 412, true);
const holyQuran = new Book('The Holy Quaran', 'Mohammed', 292, false);
myLibrary.push(bhagavadGita, newTestament, holyQuran);

// Initialize
displayLibrary();
