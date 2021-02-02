// Let say in some case I'd like to add a custom function on the string's object

String.prototype.customFuncForCheckingSize = function(limiter) {
    console.log("this length", this.length)
    return this.length > limiter
}
console.log("John Smith".customFuncForCheckingSize(3))