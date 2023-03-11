class Bookstore {
  #bookstoreName;
  #address;
  #books;
  #comics;
  constructor(bookstoreName, address) {
    this.#bookstoreName = bookstoreName;
    this.#address = address;
    this.#books = [];
    this.#comics = [];
  }


  // getters
  get getBooks() {
    return this.#books;
  }

  get getComics() {
    return this.#comics;
  }

  get getName() {
    return this.#bookstoreName
  }

  // setters
  set setBookstoreName(name) {
    this.#bookstoreName = name;
  }

  set setAddress(address) {
    this.#address = address;
  }

  set setBooks(book) {
    this.#books.push(book);
  }

  set setComics(comic) {
    this.#comics.push(comic);
  }
}

class Book {
  #title;
  #author;
  #price;
  #stock;
  #year;
  
  constructor(title, author, price, stock, year) {
    this.#title = title;
    this.#author = author;
    this.#price = price;
    this.#stock = stock;
    this.#year = year;
  }

  getInfo() {
    return {
      title: this.#title,
      author: this.#author,
      price: this.#price,
      year: this.#year,
      stock: !this.#stock ? 'No hay ejemplares disponibles' : this.#stock
    }
  }

  // setters
  set setStock(stock) {
    this.#stock = stock;
  }

  set setYear(year) {
    this.#year = year;
  }
}

class Comic extends Book {
  #illustrator;
  #publisher;
  #volume;
  constructor(title, author, price, stock, year, illustrator, publisher, volume) {
    super(title, author, price, stock, year);
    this.#illustrator = illustrator;
    this.#publisher = publisher;
    this.#volume = volume;
  }

  getInfo () {
    const info = super.getInfo(); 
    return {
      ...info,
      illustrator: this.#illustrator,
      publisher: this.#publisher,
      volume: this.#volume
    }
  }
}

const bookstore1 = new Bookstore('International Library', 'Calle 1');

// const addBook = () => {
//   const book = new Book('El principito', 'Antoine de Saint', 100, 10, 1943);
//   bookstore1.setBooks = book.getInfo();
//   console.log('Add book')
// } 

// const addComic = () => {
//   const comic = new Comic('Batman', 'bob kane', 200, 5, '1939', 'Bob kane', 'DC Comics', 1);
//   bookstore1.setComics = comic.getInfo();
//   console.log('Add Comic')
// }

// const showProducts = () => {
//   console.log('Books')
//   console.log(bookstore1.getBooks);

//   console.log('Comics')
//   console.log(bookstore1.getComics);
// }

const sidebar = document.getElementById('sidebar');
const menu = ['Show Books', 'Show Comics', 'Add book', 'Add Comic'];
const list = document.querySelector('#list');

// Put the title

const printBookstoreName = () => {
  sidebar.insertAdjacentHTML(
    'afterbegin',
    `<h1 class="title">
      ${bookstore1.getName}
    </h1>`,
  )
}

printBookstoreName();

// Put the icons 

const showIcon = () => {
  list.insertAdjacentHTML(
    'afterbegin',
    `<img class="icon show-icon" src="img/show-icon.png" alt="">
    <img class="icon show-icon-comic" src="img/show-icon.png" alt="">`
  )
}

showIcon();

const addIcon = () => {
  list.insertAdjacentHTML(
    'afterbegin',
    `<img class="icon add-icon" src="img/add-icon.png" alt="">
    <img class="icon add-icon-comic" src="img/add-icon.png" alt="">`
  )
}

addIcon();

// Put the list

const generalList = () => {
  list.insertAdjacentHTML(
    'beforeend',
    `<li onclick="showBooks()" class="list">${menu[0]}</li>,
     <li onclick="showComics()" class="list">${menu[1]}</li>,
     <li onclick="addBook()" class="list">${menu[2]}</li>,
     <li onclick="addComic()" class="list">${menu[3]}</li>`
  )
}

generalList();


// Add the books or comics

const addBook = () => {
  const book = new Book(prompt("Book title"),prompt("Book author"),prompt("Book price"),prompt("Book stock"),prompt("Book year"));
  bookstore1.setBooks = book.getInfo();
  alert('Book added');
} 

const addComic = () => {
  const comic = new Comic(prompt("Comic title"),prompt("Comic author"),prompt("Comic price"),prompt("Comic stock"),prompt("Comic year"),prompt("Comic illustrator"),prompt("Comic publisher"),prompt("Comic volume"));
  bookstore1.setComics = comic.getInfo();
  alert('Comic added')
}

// Show the books or comics

const showBooks = () => {
  console.log('Books');
  console.log(bookstore1.getBooks);
}

const showComics = () => {
  console.log('Comics');
  console.log(bookstore1.getComics);
}