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

// function Book(name,author,price){
//     this.name = name;
//     this.author = author;
//     this.price = price;
// }

// var book = new Book('Data Strucuture and Algorithm','Sakif Dewan','40$');
// console.log(book.constructor)// Output of COnstructor
// console.log(book)

// var obj = {
//     name:'Twinkle Cats',
//     email:'Twinkle@mail.com',
//     print:function(){
//         console.log(this)
//         //"this" will output the name and email in console
//     }
// }
// // console.log(obj)
// obj.print()

// function myFunc(){
//     console.log(this)
//     function inner(){
//         console.log(this)
//     }
//     inner()
//     new inner()//OOP Theory which converts inner() into an object
// }
// myFunc()


// console.log(myFunc())

// var obj = {
//     name:'Twinkle Cats',
//     email:'Twinkle@mail.com',
//     print:function(){
//         console.log(this)
        
//     }
// }
// // console.log(obj)
// // obj.print()

// // var myName = obj.name; // put object value onto a variable and access
// // console.log(myName)


// var myPrint = function(){
//     //These will output undefined because "this" is defined inside the function,but "this" only can exist in object not in function
//     console.log(this);//This will output window object,not the "this" feature output
//     console.log('Hello ' + this.name);//Printing undefined
// }

// //Bind Method For access "this" properties of an object from outside of a function
// var myPrint = obj.print.bind(obj)

// console.log(myPrint);
// myPrint()



// OOP JS
// inside the function,"this" is printing the full object
// SO,"this" is referencing the object,and "this" only works on js
// var obj = {
//     name:'Twinkle Cats',
//     email:'Twinkle@mail.com',
//     print:function(){
//         console.log(this)//This is point
        
//     }
// }
// obj.print()

// // "This" only in the function

// // When "This" is called inside a function only,the output will be the window,so that if "this" is declared where there is no object,it will not give the object output
// function myFunc(){
//     console.log(this)
// }
// myFunc();//This will print window object in browser console and will print terminal window? functions/methods in Terminal

// function book(name,author,price){
//     this.name = name;
//     this.author = author;
//     this.price = price;


// }

// var book = new book('Functional Js','Christen','48$')
// console.log(book)

/*Make a function and bind it with an object and see the result*/

function add(num){
    return this.value+num;
}

var obj = {
    value:50
}

var binded = add.bind(obj)
console.log(binded(40))// 40 means parameter of the add function // output pf return this.value+num;





