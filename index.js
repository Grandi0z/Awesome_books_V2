import {Book, books, setBooksValue} from './modules/book.js';
import {loadBooksLocalStorage} from './modules/functions_for_book.js';
export {loadBooksLocalStorage} from './modules/functions_for_book.js';
import {laodPages, previousId} from './modules/function_load_pages.js';
import { DateTime} from "./modules/luxon.js";

//ADD AND REMOVE BOOKS 
const bookList = document.getElementById('books_list');
let bookObj
const test = document.getElementById('test')

//LOAD PAGES
document.getElementById('nav_list').addEventListener('click', (e) => {
    laodPages(previousId, e.target.id);
});

//DATE AND TIME
const now = DateTime.now().toLocaleString(DateTime.DATETIME_MED);
document.getElementById('date').innerText=now

//ON START
window.onload = () => {
        document.getElementById('form').addEventListener('submit',(e) => {
            e.preventDefault()
            const title = document.getElementById('title').value
            const author = document.getElementById('author').value
            bookObj = new Book(title,author)
            bookObj.validateForm()
    })
    setBooksValue(JSON.parse(localStorage.getItem('books')))
    loadBooksLocalStorage()
}

export {bookList, books, bookObj}