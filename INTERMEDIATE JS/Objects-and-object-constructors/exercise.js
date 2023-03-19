// Book

function Book(title, author, pages, read) {
    this.title = title
    this.author = author
    this.pages = pages
    this.read = 'already read.' 
    this.info = function() {
        return (`${title} by ${author}, ${pages} pages, ${this.read}`);
    };
};

const book = new Book('Python Crash Course', 'Eh Mathes', 900, 'read')

console.log(book.info());