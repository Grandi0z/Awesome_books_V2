const books = { tab: [] };
const bookList = document.getElementById('books_list');
const setBooksValue = (value) => {
  if (value) {
    books.tab = value;
  } else {
    books.tab = [];
  }
};
class Book {
  constructor(title, author) {
    this.title = title;
    this.author = author;
  }

    removeBook = (title) => {
      const Tempbook = books.tab.filter((book) => book.title !== title);
      setBooksValue(Tempbook);
      localStorage.setItem('books.tab', JSON.stringify(books.tab));
    }

    validateForm = () => {
      const bookObj = {
        title: this.title,
        author: this.author,
      };
      books.tab.push(bookObj);
      localStorage.setItem('books.tab', JSON.stringify(books.tab));
      document.getElementById('form').reset();
    }
}

export {
  Book, books, setBooksValue, bookList,
};