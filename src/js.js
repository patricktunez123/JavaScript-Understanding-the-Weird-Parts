function Person (firstName, lastName){
    console.log(this)
    this.firstName = firstName; // this point to the obj created by the new keyword instead of the global object
    this.lastName = lastName; // this point to the obj created by the new keyword instead of the global object

    // If we return something then that's what we be set to the new keyword's object

    //example::::::::
    // Uncomment to see df#

    // return {street: 'KN 3455 Kigali'}
}

var person = new Person('Patrick', 'TUNEZERWANE') // this creates an empty obj  and then in the Person func the 'this' points at this created obj instead of the global object
console.log(person)

var person2 = new Person('Aime', 'Tunez')
console.log(person2)