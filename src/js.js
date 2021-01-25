var person = {
    firstName: 'Patrick',
    lastName: 'Tunezerwane',
    getFullName: function() { 
        var fullName = this.firstName + ' ' + this.lastName; // Here the this is the person object
        return fullName
    }
};

// var logName = function() {
//     console.log('Logged the full name:', this.getFullName()) // Here the this points to the global object
// }

// var bindedGetFullName = logName.bind(person/* we pass whatever object we want the this to be */) // To get access to the getFullName method we have to bind it.
// bindedGetFullName()

// ====OR=====

// var logName = function() {
//     console.log('Logged the full name:', this.getFullName()) // Here the this points to the global object
// }.bind(person) // call the bind on the fly

// logName()

// =====Or using call======

var logName = function(arg1, arg2) {
    console.log('Logged the full name:', this.getFullName()) // Here the this points to the global object but we can decide where it should point at
    console.log('Arguments:', arg1, arg2)
    console.log('==========================')
};

logName.call(person, 'en', 'rw'); // The first argument is the object u want the 'this' to point at and then rest of the arguments are the arguments that should normally be passed to the function 

// ==============or using apply==============

logName.apply(person, ['en', 'rw']); // Apply works like call but the only difference is that we pass arguments in an array

// ==========we can even do it on the fly=================

(function(arg1, arg2){
    console.log('Logged the full name:', this.getFullName()) // Here the this points to the global object but we can decide where it should point at
    console.log('Arguments:', arg1, arg2)
    console.log('==========================')
}.apply(person, ['en', 'fr']));

// Or

(function(arg1, arg2){
    console.log('Logged the full name:', this.getFullName()) // Here the this points to the global object but we can decide where it should point at
    console.log('Arguments:', arg1, arg2)
    console.log('==========================')
}.call(person, 'rw', 'bu'))


// ==========FUNCTION BORROWING=============

// Let creat an other objec and use a function from person object to return the names

// This obj does not have the function to return the names and we gonna use one from person object
// to display the names

var person2 = {
    firstName: 'Patrick',
    lastName: 'Tunezerwane'
}

// ===========Or by using apply=======
var varOfGetFullName = person.getFullName.apply(person2) // Here we tell engine to make th 'this' points at person2 obj by using apply
console.log('Using the apply:', varOfGetFullName)

// ===========Or by using call=======

console.log('Using the call:', person.getFullName.call(person))


// ===============FUNCTION CURRYING================

function multply(a, b){
return a*b
}

var multplyByTwo = multply.bind(this, 2)// This is similler to this below.
// function multply(b){
//     var a = 2;
//     return a*b
//     }
console.log(multplyByTwo(5)) // And here the 5 will be the second param of the function.

var multplyByThree = multply.bind(this, 3)
// Then I can use the multply func to multiply whatever numbers i'd like
console.log(multplyByThree(5))
