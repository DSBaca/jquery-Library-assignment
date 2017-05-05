function newBook(title, author, numberOfPages, publishDate){ //Constructor function - main prototype to inherit
  this.title= title;
  this.author= author;
  this.numberOfPages= numberOfPages;
  this.publishDates= publishDate;

};



var myLibrary = function(){

};
  // Instance of myLibrary object, using the myLibrary prototype.
  //var testLibrary = new myLibrary();
  //Commented out books 5-17 because the alert woould require clicking 17 times to add books.  Tried getting addBook and addBooks to work and was unscuccessful  //

  var book1 = new newBook("1984", "George Orwell", 313, new Date(1949,5,[08]));
  var book2 = new newBook("Duck Farm", "George Orwell", 153, new Date(1946,10,[28]));
  var book3 = new newBook("The Crucible", "Arther Miller", 86, new Date(1952,3,[17]));
  var book4 = new newBook("The Catcher in the Rye", "JD Salinger", 214, new Date(1952,6,[14]));
  // var book5 = new newBook ("Animal Farm", "George Orwell", 112, new Date(1952,11,[25]));
  // var book6 = new newBook ("Brave New World", "Aldous Huxley", 311, new Date(1942,9,[01]));
  // var book7 = new newBook ("The Raven", "Edgar Allen Poe", 8, new Date(1876,4,[30]));
  // var book8 = new newBook ("Guns, Germs & Steel", "Jared Diamond", 471, new Date(1999,2,[27]));
  // var book9 = new newBook ("The Art of War", "Sun Tzu", 160, new Date(-500,8,[22]));
  // var book10 = new newBook ("The Hobbit", "JRR Tolkien", 488, new Date(2005,6,[27]));
  // var book11 = new newBook ("The Fellowship of the Ring", "JRR Tolkien", 489, new Date(2005,6,[27]));
  // var book12 = new newBook ("The Twin Towers", "JRR Tolkien", 490, new Date(2005,6,[27]));
  // var book13 = new newBook ("The King Returns", "JRR Tolkien", 491, new Date(2005,6,[27]));
  // var book14 = new newBook ("The Long Walk", " Slavomir Rawicz", 325, new Date(1941,5,[2]));
  // var book15 = new newBook ("The Seven Summits", "Mike Hammill", 352, new Date(2012,4,[5]));
  // var book16 = new newBook ("Service", "Marcus Lattrell", 384, new Date(2012,4,[8]));
  // var book17 = new newBook("1984", "George Orwell", 289, new Date(1958,2,[18]));



myLibrary.prototype.myArray = new Array();
myLibrary.prototype.init = function (){

  this.testLibrary.addEachBooks();
  this._bindEvents();
};
myLibrary.prototype._bindEvents = function (){
  $("#remTitle").on("click", $.proxy(this._removeBookByTitle, this));
  $("#remAuth").on("click", $.proxy(this._removeBookByAuthor, this));
  $("#getRanBook").on("click", $.proxy(this._getRandomBook, this));
  $("#getBookTitle").on("click", $.proxy(this._getBookByTitle, this));
  $("#getBooksAuth").on("click", $.proxy(this._getBooksByAuthor, this));
  $("#getRanAuth").on("click", $.proxy(this._getRandomAuthorName, this));
  //$("#addBooks").on("click", $.proxy(this._addBooks, this));
  $("#getAuthors").on("click", $.proxy(this._getAuthors, this));
  $("button.Enter").on("click", $.proxy(this._addBooks, this));
  $("button.add").on("click", $.proxy(this._addBook, this));

};
myLibrary.prototype._getAuthors = function(){
  alert ("button is working");
};
myLibrary.prototype._addBooks = function() {



  var book = [];
  // $.each($("li.forms"), function(index, value) {
  //     var title = $(this).children(".title").val();
  //     var author = $(this).children(".author").val();
  //     var pages = $(this).children(".pages").val();
  //     var publishDate = $(this).children(".publishDate").val();
  //     books.push(new newBook(title, author, numberOfPages, publishDate));
  //   });console.log(title);
    //alert ("button is working");
//    var aAdd = new Array();
//     for(var i = 0; i < this.myArray.length;i++){
//        if(this.addBook(books[i])) {
//          aAdd.push(books[i]);
//
//         }
// }
//        return aAdd;
};


  myLibrary.prototype._addBook= function(book){
    alert('hello');
      for (var i=0; i < this.myArray.length; i++){
        if (book.title == this.myArray[i].title){
        }
      }
      this.myArray.push(book);
      $("div.jumbotron").append("li" +" "+ book.title +" "+ book.author +" "+ book.pages +" "+ book.publishDate +" "+ "</li>");
      return true;
    };


    // if(first && last) {




// Purpose; Add book object to your books array.
// Return:  boolean true if it is not already added, false if it is already added.



//myLibrary.prototype.myArray = removed Array();

//Purpose; Remove a book object from your books array.
//Return:  boolean true if the book(s) were removed, false if no books match

myLibrary.prototype.removeBookByTitle = function(title){
  for (var i=0; i < this.myArray.length; i++){
    if (title== this.myArray[i].title){
      this.myArray.splice(i,1)
        return true;
    }
  }
  return false;
};


myLibrary.prototype.removeBookByAuthor = function(author){
  for (var i=0; i < this.myArray.length; i++){
    if (author== this.myArray[i].author){
      this.myArray.splice(i,1)
        return true;
    }
  }
    return false;
};

myLibrary.prototype.getRandomBook = function(){
        if(this.myArray.length > 0){
           var index = this.myArray[Math.floor(Math.random() * this.myArray.length)];
      	     return index;
        }
          else{
    return null;
          }

      	//console.log("Your random book is...")this.myArray;
  //    	return index;
};


myLibrary.prototype.getBookByTitle = function (bookTitle){
  var getTitle = new Array();

  for (var i=0; i < this.myArray.length; i++){
    if (bookTitle== this.myArray[i].title){

        getTitle.push(this.myArray[i]);
    }
  }
  return getTitle;
}


myLibrary.prototype.getBooksByAuthor = function(authorName){
    var getAuthor = new Array();

   for(var i = 0; i < this.myArray.length; i++) {
      if(authorName == this.myArray[i].author) {

     getAuthor.push(this.myArray[i]);
    }

}
    return getAuthor;
};


// for (var i=0; i < this.myArray.length; i++){
//   if (myNewBook== this.myArray[i]){
//     return false;
//   }
// }

// this.myArray.push(myNewBook);
// $("div.jumbotron").append("li" +" "+ book.title +" "+ book.author + " " + book.pages + " " + book.publishDate + " " +"</li>");
// return true;
//
// }






myLibrary.prototype.getAuthors = function (){};


myLibrary.prototype.getRandomAuthorName = function (){
        if(this.myArray.length > 0){
           var author = this.myArray[Math.floor(Math.random() * this.myArray.length)];
             return author;
      }
    {
        return null;
          }

        //console.log("Your random book is...")this.myArray;
  //    	return index;
}

myLibrary.prototype.addEachBooks = function(){
    this._addBook(book1);
    this._addBook(book2);
    this._addBook(book3);
    this._addBook(book4);
    this._addBook(book5);
    this._addBook(book6);
    this._addBook(book7);
    this._addBook(book8);
    this._addBook(book9);
    this._addBook(book10);
    this._addBook(book11);
    this._addBook(book12);
    this._addBook(book13);
    this._addBook(book14);
    this._addBook(book15);
    this._addBook(book16);
    this._addBook(book17);

}

  var testLibrary = new myLibrary();

// testLibrary.init();

testLibrary.addEachBooks();
