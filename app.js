const btnAdd = document.getElementById('btn-add');
const blur = document.getElementById('blur');
const formContainer = document.getElementById('form-container');
const close = document.getElementById('close');
const form = document.getElementById('form');

let myLibrary = [];

function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
}

function display() {
  const booksContainer = document.getElementById('book-container');
  booksContainer.innerHTML = '';
  for(let i = 0; i < myLibrary.length; i++) {
    let book = myLibrary[i];
    let books = document.createElement('div');
    books.classList.add('book');
    books.innerHTML =  `
            <p>Title: <span id="title">${book.title}</span></p>
            <p>Author: <span id="author">${book.author}</span></p>
            <p>Pages: <span id="pages">${book.pages}</span></p>
            <div class="btn-container">
              <button class="btn btn-read">${book.read ? 'Read' : 'Not Read'}</button>
              <button class="btn btn-remove">Remove Book</button>
            </div>
    `;
    booksContainer.appendChild(books);
  }
}

function addBookToLibrary() {
  let title = document.getElementById('title').value;
  let author = document.getElementById('author').value;
  let pages = document.getElementById('pages').value;
  let read = document.getElementById('read').checked;
  const book = new Book(title, author, pages, read);
  myLibrary.push(book);
  display();
  // Get Form Values
}

form.addEventListener('submit', function(event) {
  closeForm();
  event.preventDefault();
  addBookToLibrary();
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
  let title = document.getElementById('title');
  let author = document.getElementById('author');
  let pages = document.getElementById('pages');
  title.value = '';
  author .value = '';
  pages.value = '';
}

// Open form
btnAdd.addEventListener('click', showForm);
// Close Button 
close.addEventListener('click', closeForm)