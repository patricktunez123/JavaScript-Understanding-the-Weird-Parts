var arr1 = [1, 2, 3]
var arr2 = []

console.log(arr1)

// for (var i = 0; i < arr1.length; i++){
//     arr2.push(arr1[i] * 2)
// }

// console.log(arr2)

// Implementation of the above code using functional programming


function mapForEach (arr, fn) {
    var newArr = []
    for(var i = 0; i < arr.length; i++){
        newArr.push(fn(arr[i]))
    }
    
    return newArr;
}

arr2 = mapForEach(arr1, function(item){
    return item * 2
})
console.log(arr2)

// I can even do deffrent stuff here, but

arr3 = mapForEach(arr1, function(item){
    return item > 2
})
console.log(arr3)

// We can use some defined value to check instead of hardcode em


var checkLimitation = function(limiter, item){
    return limiter < item
}

var arr4 = mapForEach(arr1, checkLimitation.bind(this, 1)) // we use bind here to preset the value 1 so the limiter is 1
console.log(arr4)