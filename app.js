document.addEventListener('DOMContentLoaded', function() {
const btnAdd = document.getElementById('btn-add');
const blur = document.getElementById('blur');
const formContainer = document.getElementById('form-container');
const close = document.getElementById('close');
const form = document.getElementById('form');
let booksContainer = document.getElementById('book-container');

let myLibrary = [];

function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
}

Book.prototype.status = function() {
  this.read = !this.read;
}

function display() {
  let books = '';
  myLibrary.map((book, index) => {
    books += `
    <div class="book">
      <p>Title: <span id="title">${book.title}</span></p>
      <p>Author: <span id="author">${book.author}</span></p>
      <p>Pages: <span id="pages">${book.pages}</span></p>
      <div class="btn-container">
      <button class="btn btn-read" id="btn-read" data-read=${index}>${book.read ? 'Read' : 'Not Read'}</button>
      <button class="btn btn-remove" id="${index}">Remove Book</button>
      </div>
    </div>
`;
  });
  booksContainer.innerHTML = books;
}

function addBookToLibrary() {
  let title = document.getElementById('book-title').value;
  let author = document.getElementById('book-author').value;
  let pages = document.getElementById('book-pages').value;
  let read = document.getElementById('book-read').checked;
  const book = new Book(title, author, pages, read);
  myLibrary.push(book);
  closeForm();
  display();
  // Get Form Values
}

form.addEventListener('submit', function(event) {
  event.preventDefault();
  addBookToLibrary();
  clearInput();
});

// Show form 
function showForm() {
  formContainer.classList.add('active');
  blur.classList.add('active');
}

// Close modal 
function closeForm() {
  formContainer.classList.remove('active');
  blur.classList.remove('active');
}

// Clear Input 
function clearInput() {
  let title = document.getElementById('book-title').value = '';
  let author = document.getElementById('book-author').value = ''
  let pages = document.getElementById('book-pages').value = ''
  let read = document.getElementById('book-read').checked = false;
}

// Remove Book
function removeBook(event) {
  const index = event.target.id;
  if(event.target.classList.contains('btn-remove')){
    myLibrary.splice(index, 1);
  }
  display();
}

// Toggle read
function read(event) {
  if(event.target.classList.contains('btn-read')){
    const changeStatus = event.target.getAttribute('data-read');
      myLibrary[changeStatus].status();
  }
  display();
}

booksContainer.addEventListener('click', removeBook);

booksContainer.addEventListener('click', read);

// Open form
btnAdd.addEventListener('click', showForm);

// Close Button 
close.addEventListener('click', closeForm)
})