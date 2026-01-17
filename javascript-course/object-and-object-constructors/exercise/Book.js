// theHobbit.info(); // "The Hobbit by J.R.R. Tolkien, 295 pages, not read yet"
// console.log(theHobbit.info());

function Book(title, author, pageCount, readStatus) {
  if (!new.target) {
    throw Error("You must use the 'new' operator to call the constructor");
  }
  this.title = title;
  this.author = author;
  this.pageCount = pageCount;
  this.readStatus = readStatus;
  this.info = function () {
    const info = `${this.title} by ${this.author}, ${this.pageCount} pages, ${this.readStatus}`;
    return info;
  };
}

const theHobbit = new Book("The Hobbit", "J.R.R Tolkien", 295, "not read yet");

console.log(theHobbit.info());
