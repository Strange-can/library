const myLibrary = [ {
    title: "Lincoln is da legend",
    author: "Lincoln",
    pages: 100,
    status: "has been read"
    },

    {
        title: "Lincoln is da legend",
        author: "Lincoln",
        pages: 100,
        status: "has been read"
    },

    {
        title: "Lincoln is da legend",
        author: "Lincoln",
        pages: 100,
        status: "has been read"
    },

    {
        title: "Lincoln is da legend",
        author: "Lincoln",
        pages: 100,
        status: "has been read"
    },

    {
        title: "Lincoln is da legend",
        author: "Lincoln",
        pages: 100,
        status: "has been read"
    },

    {
        title: "Lincoln is da legend",
        author: "Lincoln",
        pages: 100,
        status: "has been read"
    },

    {
        title: "Lincoln is da legend",
        author: "Lincoln",
        pages: 100,
        status: "has been read"
    },

    {
        title: "Lincoln is da legend",
        author: "Lincoln",
        pages: 100,
        status: "has been read"
    },

    {
        title: "Lincoln is da legend",
        author: "Lincoln",
        pages: 100,
        status: "has been read"
    },

    {
        title: "Lincoln is da legend",
        author: "Lincoln",
        pages: 100,
        status: "has been read"
    },
]

function Book(title, author, pages, readStatus) {
    this.title = title
    this.author = author
    this.pages = pages 
    this.status = readStatus
}

Book.prototype.description = function () {
    console.log(`${this.title} is by ${this.author} that is ${this.pages} pages long, it ${this.status}.`)
}

let title = ""
let author = ""
let pages = ""
let readStatus = ""


function addBookToLibrary() {
    let getBook = new Book( title, author, pages, readStatus )
    getBook.description()
   myLibrary.push(getBook)
   getBook = ""
}

/*const bookTitle = document.querySelector(".title")
bookTitle.textContent = `Book title: ${myLibrary[0].title}`
const bookAuthor = document.querySelector(".author")
bookAuthor.textContent = `Author: ${myLibrary[0].author}`
const bookPages = document.querySelector(".pages")
bookPages.textContent = `Pages: ${myLibrary[0].pages}`
const bookStatus = document.querySelector(".status")
bookStatus.textContent = `Status: ${myLibrary[0].status}`*/

for ( let i=0; i < myLibrary.length; i++ ) {
    // make the cards 
    const cardContainer = document.querySelector(".card-container")
    const card = cardContainer.appendChild(document.createElement("div"))
    card.classList.add("card")

    //put info onto the cards
    const bookTitle = card.appendChild(document.createElement("p"))
    bookTitle.textContent = `Book title: ${myLibrary[i].title}`
    bookTitle.style.color = "#b45309"

    const bookAuthor = card.appendChild(document.createElement("p"))
    bookAuthor.textContent = `Author: ${myLibrary[i].author}`

    const bookPages = card.appendChild(document.createElement("p"))
    bookPages.textContent = `Pages: ${myLibrary[i].pages}`

    const bookStatus = card.appendChild(document.createElement("p"))
    bookStatus.textContent = `Status: ${myLibrary[i].status}`
    bookStatus.style.color = "green"
}

