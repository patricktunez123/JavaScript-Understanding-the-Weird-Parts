// with function statement
function a () {
    console.log(this)

    // you can even do some strange things
    this.newVar = 'Hello world'
    console.log('this is the new variable', newVar)

    const obj = {
        age: 890
    }
    console.log('obj', obj)

    // add year property to the obj, this is how we do it
    obj.year = 'This is the year: 2021'
    console.log('obj after adding the year pro', obj)
}

// with function expression
var b = function(){
    console.log(this)
}
a()
b()

console.log(this)

// You can even access the attached variable to the global object ==> newVar
console.log('access it in the global area:', newVar)


// In a case where a function is actually a method that attached to an object 
// the this keyword becomes the object that that method is seating inside of

// Learn these line of code to see what I mean

var c = {
    name: 'This is the name',
    log: function(){
        this.name = 'THIS IS THE UPDATED NAME with the this keyword'
        console.log(this)

        // here is something a lot devs think its a bug:
        // when I create a function inside of this function its this keyword will not
        // point to the very object in this case the c but instead it will poing to
        // the global obect

        var setName = function(newName) {
            this.name = newName;
        }

        setName('This is the updated name again!!!!')
        console.log(this)
    }
}

c.log()


 // To solve the problems about setting variable in the global variables above uncomment a peace of code blow 


// var c = {
//     name: 'This is the name',
//     log: function(){
//         var self = this; // this must be at the very top, right here indeed. And this is possible because of the fact that object are set by reference

//         self.name = 'THIS IS THE UPDATED NAME with the this keyword'
//         console.log(self)

//         var setName = function(newName) {
//             self.name = newName;
//         }

//         setName('This is the updated name again!!!!')
//         console.log(self)
//     }
// }

// c.log()
