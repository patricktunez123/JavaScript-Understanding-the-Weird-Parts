function buildFuntions (){
    var arr = [];
    for(i = 0 ; i < 3 ; i++){
        arr.push(
            function (){
                console.log(i)
            }
        )
    }

    return arr; // by this time we hit the return statement the value of i is 3
    // so calling for ex: fs[0]() and fs[1]()  and fs[2]() all will be 3
}

var fs = buildFuntions();

fs[0](); //3
fs[1](); //3
fs[2](); //3


// If we want to get the actual value for each function we should 
// involke (call) the function on the creation (IIFE)

// ========uncommnet this code below to see the changes========


// function buildFuntions (){
//     var arr = [];
//     for(i = 0 ; i < 3 ; i++){
//         arr.push(
//             function (){
//                 console.log(i)
//             }()
//         )
//     }

//     return arr; 
// }

// var fs = buildFuntions();

// fs[0]; //0
// fs[1]; //1
// fs[2]; //2


// ======Or uncomment this====

// function buildFuntions (){
//     var arr = [];
//     for(i = 0 ; i < 3 ; i++){
//         let j = i; // used let instead of var!!!!!!!!!!!!!!!!! (intresting right?)
//         arr.push(
//             function (){
//                 console.log(j)
//             }
//         )
//     }

//     return arr; 
// }

// var fs = buildFuntions();

// fs[0](); //0
// fs[1](); //1
// fs[2](); //2



// =========Or this way============



// function buildFuntions (){
//     var arr = [];
//     for(i = 0 ; i < 3 ; i++){
//         arr.push(
//             (function(j){
//                 return function(){
//                     console.log(j)
//                 }
//             }(i))
//         )
//     }

//     return arr; 
// }

// var fs = buildFuntions();

// fs[0](); //0
// fs[1](); //1
// fs[2](); //2