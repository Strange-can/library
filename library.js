const myLibrary = [ {
    title: "Strange_Can is da legend",
    author: "The World",
    pages: 100,
    status: "completed"
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

//form validation
const form = document.querySelector("form")

const msg = document.getElementById("kind-msg")
 
const formTitle = document.getElementById("title")

const formAuthor = document.getElementById("author")

const formPages = document.getElementById("pages")

const confirmButton = document.getElementById("confirm") 
//function to "submit" the form
function formSubmit (event) {
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
    }
    else if ( formTitle.value && formAuthor.value && !(Number(formPages.value) > 0) ) {
        msg.textContent = `Did you pull that book outta your ass? Ain\'t no book that has ${Number(formPages.value)} pages`
    }
    else {
        msg.textContent = 'Please fill in all fields'
    }
}
confirmButton.addEventListener( "click", formSubmit )

//Prevent "Enter" keypress to exit the form, users can press "Enter" to "submit" the form
form.addEventListener( "keypress", (event) => {
    if (event.key === "Enter") {
    formSubmit(event)
    }
})

function displayCards() {
    const cardContainer = document.querySelector(".card-container")
    cardContainer.textContent = ''
for ( let i=0; i < myLibrary.length; i++ ) {
    // make the cards 
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
        if (bookStatus.textContent === 'Status: reading') {
             bookStatus.style.color = "blue"
        }
        else {
             bookStatus.style.color = "green"
        }

    const statusButton = card.appendChild(document.createElement("button"))
    statusButton.classList.add("status-button")
    statusButton.classList.add(`status-button${i}`)
        if ( myLibrary[i].status === 'completed' ) {
            statusButton.textContent = 'Mark as reading'
        }
        else {
            statusButton.textContent = 'Mark as completed'
        }
    statusButton.addEventListener("click", () => {
        const classStr = statusButton.classList.toString()
        const cardNumber = Number(classStr.charAt(classStr.length - 1))
        if (statusButton.textContent === 'Mark as completed') { 
            myLibrary[cardNumber].status = 'completed'
            displayCards() 
        }
        else {
            myLibrary[cardNumber].status = 'reading'
            displayCards()
        }
    })

    const deleteButton = card.appendChild(document.createElement("button"))
    deleteButton.textContent = 'Delete'
    deleteButton.classList.add("delete-button")
    deleteButton.addEventListener("click", () => {
        const classStr = statusButton.classList.toString()
        const cardNumber = Number(classStr.charAt(classStr.length - 1))
        myLibrary.splice(cardNumber, 1)
        displayCards()
})}
}

displayCards()