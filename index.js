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

function Person(name,email) {
    this.name = name;
    this.email = email;
    //Declare a function with "this" keyword
    this.print = function(){
        console.log('Name : '+ this.name)
    }
}

var p1 = new Person('Sakif Hridoy','sakifhridoy@mail.com');// Constructor created with object

console.log(p1.name);
console.log(p1.email);
console.log(p1);

var p1 = new Person('Sakif Hridoy','sakifhridoy@mail.com');
var p2 = new Person('Asif Ahmed','sakif@mail.com');
var p3 = new Person('Shakil Hasan','sakifhr@mail.com');

var people = [p1,p2,p3];
console.log(people);

people.forEach(person=>{
    console.log(person.email)
    //Access Method of function from an object
    person.print();

})


