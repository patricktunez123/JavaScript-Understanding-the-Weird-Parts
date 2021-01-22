// Using Immediately invoked functions expressions (IIFS)
var greet = function (name) {
    return 'Hello ' + name
}('Patrick')

console.log(greet);

// Second example on Using Immediately invoked functions expressions (IIFS)
// In this example we are creating a function on the fly and to make annonimous function
// we have to trick the syntax parser to access our function creation with ()

clientName = 'Patrick';
(function(name){
    var greeting = 'Hi';
    console.log(greeting + ' ' + name)
}(clientName))

// console.log(this.clientName)