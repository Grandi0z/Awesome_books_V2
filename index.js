import { Book, setBooksValue } from './modules/book.js';
import { loadBooksLocalStorage } from './modules/functions_for_book.js';
import { laodPages, previousId } from './modules/function_load_pages.js';
import { DateTime } from './modules/luxon.js';

export { books } from './modules/book.js';
export { loadBooksLocalStorage } from './modules/functions_for_book.js';

// LOAD PAGES
document.getElementById('nav_list').addEventListener('click', (e) => {
  laodPages(previousId, e.target.id);
});

// DATE AND TIMEOUT_ERR
const now = DateTime.now().toLocaleString(DateTime.DATETIME_MED);
document.getElementById('date').innerText = now;

// ON START
window.onload = () => {
  document.getElementById('form').addEventListener('submit', (e) => {
    e.preventDefault();
    const title = document.getElementById('titleB').value;
    const author = document.getElementById('authorB').value;
    const bookObj = new Book(title, author);
    bookObj.validateForm();
  });
  setBooksValue(JSON.parse(localStorage.getItem('books')));
  loadBooksLocalStorage();
};

// export { bookList, bookObj };