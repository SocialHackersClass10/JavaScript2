'use strict';

const books = [
  {
    title: 'The Design of Everyday Things',
    img: 'http://icons.iconarchive.com/icons/mattahan/ultrabuuf/32/Things-Grape-Soda-Safety-Pin-icon.png', //4a
    author: 'Don Norman',
    alreadyRead: false,
  },
  {
    title: 'The Most Human Human',
    img: 'http://icons.iconarchive.com/icons/firstline1/tv-show-mega-pack-1/32/Almost-Human-icon.png', //4a
    author: 'Brian Christian',
    alreadyRead: true,
  },
  {
    title: 'The Forgotten to Read Book',
    img: 'http://icons.iconarchive.com/icons/jen/sailor-moon/32/Read-This-Please-icon.png', //4a
    author: 'Alzheimer',
    alreadyRead: false,
  }
];


let bookList = document.createElement('ul'); //3
for (let i = 0; i < books.length; i++) { //1
  let book = document.createElement('li'); //3
  let bookImg = document.createElement('img'); //4b*
  bookImg.src = books[i].img;
  book.appendChild(bookImg); //*4b
  let bookInfo = document.createTextNode(books[i].title + ' by ' + books[i].author); //2*
  book.appendChild(bookInfo); //*2
  if (books[i].alreadyRead == false) { //5*
    book.style.backgroundColor = "red";
  } //*5
  bookList.appendChild(book);
}
document.body.appendChild(bookList);


/*
I'd like to display my three favorite books inside a nice webpage!
1. Iterate through the array of books.
2. For each book, create a `<p>` element with the book title and author and append it to the page.
3. Use a `<ul>` and `<li>` to display the books.
4. Add an `<img>` to each book that links to a URL of the book cover.
5. Change the style of the book depending on whether you have read it (green) or not (red).
*/