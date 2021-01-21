// arrary is a collection of anything in js
var arr = [
1,
'this is a string',
{
    name: 'Patrick',
    street: 'KN 344 Kigali'
},
function (client) {
    var message = 'Hello'
    console.log(message + ' ' + client) 
}
];

arr[3](arr[2].name)