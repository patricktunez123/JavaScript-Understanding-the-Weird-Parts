// Since this code, var and func are global then we can access them by this or window(for browsers)
// ex: this.a will give us hello world
var a = 'Hello world'

function b () {

}

// Hoisting // check that i have used variables and functions before declare them (thats what we call hoisting)


//=====UNCOMMENT THIS CODE BELOW TO SEE THE CHANGES=====

// b() // this is the hoisting
// console.log(a) // this is the hoisting

// var a = 'Hello world'

// function b () {
// console.log('called the function b')
// }


//=====UNCOMMENT THISE LINES OF CODE TO SEE CHANGES======
// function b () {
//     var myVar
//     console.log('from b:', myVar)
// }

// function a() {
//     var myVar = 2;
//     console.log('from a:', myVar)
//     b()
// }

// var myVar = 1;

// console.log('Outside:', myVar)
// a();