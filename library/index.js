let library = [];

function Book(title, author, pages, read) {
    this.title = title
    this.author = author
    this.pages = pages
    this.read = read
}

Book.prototype.info = () => {
    return `${this.title} by ${this.author}, ${this.pages} pages, 
        have ${this.read ? 'not' : ''} read`;
}

function addBookToLibrary() {
    // do stuff
}
