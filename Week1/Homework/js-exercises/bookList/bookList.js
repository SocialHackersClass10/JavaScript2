"use strict"
//Variable that holds the list of books
const books = [{
        title: 'How to Win Friends and Influence People',
        author: 'Dale Carnegie',
        alreadyRead: true,
        cover: "https://images-na.ssl-images-amazon.com/images/I/51NVtjOrnqL.jpg",
    },
    {
        title: 'The 7 Habits of Highly Effective People',
        author: 'Stephen Covey',
        alreadyRead: true,
        cover: "https://images-na.ssl-images-amazon.com/images/I/51hV5vGr4AL.jpg",
    },
    {
        title: 'How to stop worrying and start living',
        author: 'Dale Carnegie',
        alreadyRead: false,
        cover: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRmQ0AywM8bzvN1c0Ag7UG8WGwgn5lO8FUrp8lO896OpgH2ZqfO"
    }
];

//Array iteration that creates a paragraph for each book
books.forEach(function(element) {
        let paragraph = document.createElement("p")
        paragraph.innerHTML = `${element.title} by ${element.author}`;
        document.body.appendChild(paragraph);
    })
    //Creating an unordered list of the books
let list = document.createElement("ul");
document.body.appendChild(list)
books.forEach(function(element) {
    let listItem = document.createElement("li");
    listItem.innerHTML = element.title;
    list.appendChild(listItem);
    //Green style for the books I have read, red style for those I haven't read
    if (element.alreadyRead === true) {
        listItem.style.backgroundColor = "green"
    } else {
        listItem.style.backgroundColor = "red"
    }
})


books.forEach(function(element) {
        //Creating an anchor tag for each book with its cover image
        let anchor = document.createElement("a");
        anchor.href = element.cover
        let image = document.createElement("img")
        image.setAttribute("src", element.cover);
        anchor.appendChild(image);
        document.body.appendChild(anchor);
    })
    //END