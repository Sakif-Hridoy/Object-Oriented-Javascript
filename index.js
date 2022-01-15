// var obj = {};
// var obj1 = {};

// console.log(obj)
// console.log(obj1)

var book = {
    name:'Functional Javascript',
    author:'Lwis Handshake',
    publisher :'O\'Really',
    page:259,
    print:function(){
        console.log(this.name,this.author)
    }
}

console.log(book)
book.print()

// console.log('Book Name: '+ book.name);
// console.log('Auhtor Name: ' + book['author'])// To access object property with bracket notation & property name must be in single or double quotes