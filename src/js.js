var person = {
    firstName: 'default',
    lastName: 'default',
    getFullName: function() { 
        return this.firstName + ' ' + this.lastName
    }
}

var john = {
    firstName: 'John',
    lastName: 'Doe'
}

var jane = {
    firstName: 'Jane'
}

var patrick = {
    firstName: 'Patrick'
}
// Never ever ever ever do this is real applications!!!! this is for demo purpose only. It can cause performance issues

john.__proto__ = person;
console.log(john.getFullName());

jane.__proto__ = person;
console.log(jane.getFullName());

patrick.__proto__ = person;
console.log(patrick.getFullName())