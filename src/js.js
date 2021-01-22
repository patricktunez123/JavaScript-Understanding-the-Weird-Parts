// Here the way JS engine knows that the whatToSay variable is still there to be used in the sayHi func is whats called closures

function greet (whatToSay) {
    return function (name) {
        console.log(whatToSay + ' ' + name)
    }
}

greet('Hi')('Patrick')

// or
var sayHi = greet('Hi there')
sayHi('Jhon')