import { bookList, books, Book } from './book.js';

const loadBooksLocalStorage = () => {
  const container = bookList;
  container.replaceChildren();
  const bookObj = new Book();
  for (let i = 0; i < books.tab.length; i += 1) {
    // creating the tab
    const tableRow = document.createElement('tr');
    const title = document.createElement('td');
    const buttonTd = document.createElement('td');
    const button = document.createElement('button');
    // Create text nodes
    const rowText = document.createTextNode(`"${books.tab[i].title}" by ${books.tab[i].author}`);
    const buttonText = document.createTextNode('Remove');
    // Append text to nodes
    title.appendChild(rowText);
    button.appendChild(buttonText);
    buttonTd.appendChild(button);
    tableRow.appendChild(title);
    tableRow.appendChild(buttonTd);

    buttonTd.setAttribute('class', 'button-row');
    const bookTitle = books.tab[i].title;
    button.addEventListener('click', () => {
      bookObj.removeBook(bookTitle);
    });
    container.appendChild(tableRow);
  }
};

export { loadBooksLocalStorage as default };