import Bookstore from './modules/Bookstore.js';
import Book from './modules/Book.js';
import Comic from './modules/Comic.js';

const bookstore1 = new Bookstore('International Library', 'Calle 1');

const sidebar = document.getElementById('sidebar');
const menu = ['Show Books', 'Show Comics', 'Add book', 'Add Comic'];

// Put the title

const printBookstoreName = () => {
  sidebar.insertAdjacentHTML(
    'afterbegin',
    `<img class="library-icon" src="img/book-title-icon.svg" alt="">
    <h1 class="title">
      ${bookstore1.getName}
    </h1>`,
  )
}


const initialize = () => {
  printBookstoreName();
  displayMenu();
  menuFunctionality();
}

const createMenu = () => {
  let menuHtml = '';
  menu.forEach((elem, index) => {
    menuHtml += `<li class="menu-item" id="${index}"><img class="icon" src="img/book-icon.svg" alt="">${elem}</li>`
  });
  
  return menuHtml;
}
 
const displayMenu = () => {
  sidebar.insertAdjacentHTML(
    'beforeend',
    `<ul class="menu">${createMenu()}</ul>`
  );
}

  const menuFunctionality = () => {
    const items = document.querySelectorAll('.menu-item');
    items.forEach((item) => {
      item.addEventListener('click', (event) => {
        event.preventDefault(); // esto es para evitar que se recargue la página cuando se hace click en el elemento, en este al elemeto li del menu
  
        const { id } = event.target
  
        switch (id) {
          case '0':
            showBooks();
            break;
          case '1':
            showComics();
            break;
          case '2':
            addBooks();
            break;
          case '3':
            addComics();
            break;
          default:
            console.log('That option does not exist');
            break;
        }
      });
    });
  }

initialize()

const showBooks = () => {
  console.log('Books');
  console.log(bookstore1.getBooks);
}

const showComics = () => {
  console.log('Comics');
  console.log(bookstore1.getComics);
}

  const addBooks = () => {
    const title = prompt('Title');
    const author = prompt('Author');
    const price = prompt('Price');
    const stock = prompt('Stock');
    const year = prompt('Year');
  
    const book = new Book(title, author, price, stock, year);
    bookstore1.setBooks = book.getInfo();
  }

  const addComics = () => {
    const title = prompt('Title');
    const author = prompt('Author');
    const price = prompt('Price');
    const stock = prompt('Stock');
    const year = prompt('Year');
    const illustrator = prompt('Illustrator');
    const volume = prompt('Volume');
    const publisher = prompt('Publisher');

  
    const comic = new Comic(title, author, price, stock, year, illustrator, volume, publisher);
    bookstore1.setBooks = comic.getInfo();
  }