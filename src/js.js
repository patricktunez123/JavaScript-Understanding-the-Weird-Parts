// Accessing global variable which is declared inside greeting.js file
// console.log('greeting from global:', greeting);

// //or
// console.log('greeting from global:', this.greeting);

// //or
// console.log('greeting from global:', window.greeting);

(function(global, name){
    var greeting = 'Hello'
    console.log(greeting + ' ' + name) // greeting within the function
    console.log(global.greeting + ' ' + name) // greeting in the global object// this is useful when u want to create a variable that needs to be acceble everywhere but whithin this function
    // can change the global object's greeting property
    // global.greeting = 'hol hollaa'
}(window, 'Patrick'))

console.log('greeting from global:', greeting)