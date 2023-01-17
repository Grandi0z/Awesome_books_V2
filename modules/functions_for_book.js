import {bookList, books, bookObj} from '../index.js'

const loadBooksLocalStorage = () => {
    const container = bookList
    container.replaceChildren()
    for (let i = 0; i < books.length; i +=1) {
        //creating the tab
        const tableRow = document.createElement('tr')
        const title = document.createElement('td')
        const buttonTd = document.createElement('td')
        const button = document.createElement('button')
        //Create text nodes
        const rowText = document.createTextNode(`"${books[i].title}" by ${books[i].author}`)
        const buttonText = document.createTextNode('Remove')
        //Append text to nodes
        title.appendChild(rowText)
        button.appendChild(buttonText);
        buttonTd.appendChild(button);
        tableRow.appendChild(title);
        tableRow.appendChild(buttonTd);

        buttonTd.setAttribute('class', 'button-row')
        const bookTitle = books[i].title
        button.addEventListener('click',() => {
            bookObj.removeBook(bookTitle)
        })
        container.appendChild(tableRow)
    }
}

export {loadBooksLocalStorage};