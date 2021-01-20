console.log(3 < 2 < 1) // this consoles true, chech a table on this link to see why  https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Operator_Precedence

// BECAUSE
// from left to right for the < sign

// 3 < 2 ==> false which gets coercion to 0
//then false < 1 ==> true because the false is 0 