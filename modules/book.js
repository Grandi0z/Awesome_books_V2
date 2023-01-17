import {loadBooksLocalStorage} from '../index.js'
let books = []
const setBooksValue = (value) =>{
    if(value){
        books=value
    }else{
       books = [] 
    }
}
class Book {
    constructor(title,author) {
        this.title=title
        this.author=author
    }
    // setTitle(title){
    //     this.title=title
    // }
    // setAuthor(author){
    //     this.author=author
    // }
    // getTitle(){
    //     return this.title
    // }
    // getAuthor(){
    //     return this.author
    // }
    removeBook = (title) => {
        const Tempbook = books.filter((book)=>book.title !==  title)
        setBooksValue(Tempbook)
        localStorage.setItem('books',JSON.stringify(books))
        loadBooksLocalStorage()
    }
    validateForm = () => {
        const bookObj = {
           title: this. title,
            author: this.author,
        }
        books.push(bookObj)
        localStorage.setItem('books', JSON.stringify(books))
        loadBooksLocalStorage()
        document.getElementById('form').reset()
    } 
}

export {Book,books,setBooksValue};