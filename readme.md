# Library Management System

This Library Management System allows users to borrow and return books. It includes the following main components:

- `Book` class
- `User` class
- `Library` class

## Table of Contents

- [Built-with](#Build-with)
- [Usage](#usage)
  - [Book Class](#book-class)
  - [User Class](#user-class)
  - [Library Class](#library-class)
- [Example](#example)

## Built with

To use this Library Management System, simply include the JavaScript code in your project.

## Usage

### Book Class

The `Book` class represents a book with a title, author, and ISBN. It also keeps track of whether the book is borrowed.

#### Methods

- **constructor(title, author, ISBN)**: Creates a new book with the given title, author, and ISBN.
- **isBorrowed()**: Returns `true` if the book is borrowed, otherwise `false`.
- **borrow()**: Marks the book as borrowed.
- **return()**: Marks the book as returned.

### User Class

The `User` class represents a user with a name and ID. It keeps track of the books borrowed by the user.

#### Methods

- **constructor(name, id)**: Creates a new user with the given name and ID.
- **peakBook(ISBN)**: Returns the book with the given ISBN if it is borrowed by the user.
- **returnBook(ISBN)**: Returns the book with the given ISBN and removes it from the user's borrowed books.
- **borrowBook(book)**: Borrows the given book if the user has borrowed less than 3 books. Returns `true` if successful, otherwise `false`.

### Library Class

The `Library` class represents a library with a collection of books and members.

#### Methods

- **constructor()**: Creates a new library.
- **registerMember(user)**: Registers the given user as a member of the library.
- **addNewBook(book)**: Adds the given book to the library's collection.
- **borrowBook(user, ISBN)**: Allows the given user to borrow the book with the given ISBN if it is available. Returns `true` if successful, otherwise `false`.

## Example

```javascript
// Creating books
const book1 = new Book('1984', 'George Orwell', '1234567890');
const book2 = new Book('To Kill a Mockingbird', 'Harper Lee', '0987654321');
const book3 = new Book('The Great Gatsby', 'F. Scott Fitzgerald', '1122334455');
const book4 = new Book('The King', 'F. Rukzy', '1234567809');

// Creating a user
const user1 = new User('John Doe', 'u001');

// Creating a library
const library = new Library();

// Registering a user
library.registerMember(user1);

// Adding books to the library
library.addNewBook(book1);
library.addNewBook(book2);
library.addNewBook(book3);
library.addNewBook(book4);

// Borrowing books
console.log(library.borrowBook(user1, '1234567890')); // true
console.log(library.borrowBook(user1, '0987654321')); // true
console.log(library.borrowBook(user1, '1234567809')); // true
console.log(library.borrowBook(user1, '1234567890')); // false (already borrowed)

// User's borrowed books
console.log(user1.borrowedBooks); // [book1, book2, book3]

// Returning a book
user1.returnBook('1234567890');
console.log(user1.borrowedBooks); // [book2, book3]
console.log(book1.isBorrowed()); // false
```
