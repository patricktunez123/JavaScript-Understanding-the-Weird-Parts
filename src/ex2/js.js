// prototype

function Person (firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;

    // do not do this, It is a good practice to put methods on the prototype for performance 

    // this.getFullName = function(){
    //     return this.firstName + ' ' + this.lastName
    // }
}

var john = new Person('john', 'Henry');
var jane = new Person('Jane', 'Mrs K.');

// prototype
// Every function created in javascript gets access to the prototype
// It is a good practice to put methods on the prototype like so
Person.prototype.getFullName = function(){
    return this.firstName + ' ' + this.lastName
}

console.log(john)
console.log(jane)

// So i can access the getFullName method

console.log(john.getFullName())
console.log(jane.getFullName())

