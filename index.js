// Book class
class Book {
  constructor(title, author, ISBN) {
    this.title = title;
    this.author = author;
    this.ISBN = ISBN;
    this.borrowed = false;
  }

  isBorrowed() {
    return this.borrowed;
  }

  borrow() {
    this.borrowed = true;
  }

  return() {
    this.borrowed = false;
  }
}

// User class
class User {
  constructor(name, id) {
    this.name = name;
    this.id = id;
    this.borrowedBooks = [];
  }

  peakBook(ISBN) {
    return this.borrowedBooks.find((book) => book.ISBN === ISBN);
  }

  returnBook(ISBN) {
    const bookIndex = this.borrowedBooks.findIndex(
      (book) => book.ISBN === ISBN
    );
    if (bookIndex !== -1) {
      this.borrowedBooks[bookIndex].return();
      this.borrowedBooks.splice(bookIndex, 1);
    }
  }

  borrowBook(book) {
    if (this.borrowedBooks.length < 3) {
      this.borrowedBooks.push(book);
      book.borrow();
      return true;
    }
    return false;
  }
}

// Library class
class Library {
  constructor() {
    this.books = [];
    this.members = [];
  }

  registerMember(user) {
    this.members.push(user);
    console.log(`${user.name} has been registered`);
  }

  addNewBook(book) {
    this.books.push(book);
    console.log(`Book with ISBN "${book.ISBN}" has been added to the library`);
  }

  borrowBook(user, ISBN) {
    const book = this.books.find((b) => b.ISBN === ISBN && !b.isBorrowed());
    if (book && user.borrowBook(book)) {
      console.log(
        `Book with ISBN ${ISBN} has been successfully borrowed by ${user.name}.`
      );
      return true;
    }
    console.log(
      `Book with ISBN ${ISBN} could not be borrowed by ${user.name}.`
    );
    return false;
  }
}
