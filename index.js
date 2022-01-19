// var obj = {};
// var obj1 = {};

// console.log(obj)
// console.log(obj1)

// var book = {
//     name:'Functional Javascript',
//     author:'Lwis Handshake',
//     publisher :'O\'Really',
//     page:259,
//     print:function(){
//         console.log(this.name,this.author)
//     }
// }

// console.log(book)
// book.print()

// console.log('Book Name: '+ book.name);
// console.log('Auhtor Name: ' + book['author'])// To access object property with bracket notation & property name must be in single or double quotes

// // In Objects,properties could be created with dots
// book.publishedYear = 2010;// Adding properties into book object

// console.log('Published Year : ' + book.publishedYear)

// // In Objects,properties could be created with bracket notation
// book['price'] = 30;
// console.log('Price: ' + book.price)

// // Now book Object have 7 properties
// //Print object with values method 1
// console.log(book)

// //Print object with values using for in loop
// for (var props in book){
//     console.log(props)
//     console.log(props + ' = ' + book.props)//This will return undefined
//     console.log(props + ' = ' + book[props])//With brakcet notations the problem is solved,so this is Method
// }

// 

function Book(name,author,price){
    this.name = name;
    this.author = author;
    this.price = price;
}

var book = new Book('Data Strucuture and Algorithm','Sakif Dewan','40$');
console.log(book.constructor)// Output of COnstructor
console.log(book)


