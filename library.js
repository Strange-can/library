const myLibrary = [ {
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

let title = ""
let author = ""
let pages = ""
let readStatus = "reading"


function addBookToLibrary() {
   let getBook = new Book( title, author, pages, readStatus )
   myLibrary.push(getBook)
   getBook = ""
}

const dialog = document.querySelector("dialog")

const showButton = document.getElementById("new-book")
showButton.addEventListener( "click",  () => {
    dialog.showModal()
})

const cancelButton = document.getElementById("cancel")
cancelButton.addEventListener( "click", () => {
    form.reset()
    msg.textContent = ''
    dialog.close()
})

const form = document.querySelector("form")

const msg = document.getElementById("kind-msg")
 
const formTitle = document.getElementById("title")

const formAuthor = document.getElementById("author")

const formPages = document.getElementById("pages")

const confirmButton = document.getElementById("confirm") 
confirmButton.addEventListener( "click", (event) => {
    event.preventDefault()
    if ( formTitle.value && formAuthor.value && Number(formPages.value) > 0) {
    title = formTitle.value
    author = formAuthor.value
    pages = formPages.value
    msg.textContent = ''
    form.reset()
    dialog.close()
    addBookToLibrary()
    displayCards()
    title = ''
    author = ''
    pages = ''
    }
    else if ( formTitle.value && formAuthor.value && !(Number(formPages.value) > 0) ) {
        msg.textContent = `Did you pull that book outta your ass? Ain\'t no book having ${Number(formPages.value)} pages`
    }
    else {
        msg.textContent = 'Please fill in all fields'
    }
})

function displayCards() {
    //cardContainer.textContent = ''
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
}
