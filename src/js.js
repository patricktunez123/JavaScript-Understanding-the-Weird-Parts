// by value (primitives)

var a = 3;
var b;

b = a; // here b do the copy of a in defrent memory location, so to change the value of a will not affect b
a = 2;

console.log('this is a:', a); // 2
console.log('this the b:', b); // 3

// by reference (all objects including functions)
// unlike primitives, objects do not do the copy, they reference to the same location

var c = {
    name: 'Patrick'
}

var d;

d = c;
c.name = 'TUNEZERWANE'; // mutate the name property, mutate means change


console.log('this is d', d) // TUNEZERWANE instead of Patrick
console.log('this is c', c) // TUNEZERWANE


// by reference (even as parameters)
// unlike primitives, also parameters do not do the copy, they reference to the same location in memory


function changeGreetings(obj) {
    obj.name = 'The name has been changed'
}

changeGreetings(d)

console.log('c after muteting the param', c) //The name has been changed
console.log('d after muteting the param', d) //The name has been changed

// equals operator sets up new memory space (new address)
// in this case because the c in a brand new obje then it will create a new location with name == Aime in it

var c = {
    name: 'Aime'
}

console.log('c after setting new object', c) //Aime
console.log('d after setting new object', d) //The name has been changed