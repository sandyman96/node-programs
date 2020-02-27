// let x = function(){
//     console.log("i am calles");
// };

// let y = function(callback){
//     console.log('do');
//     callback();
// }

// // let calc = function() 
// y(x);

let add = function(a,b){
    return a + b;
};

let mul = function(a,b){
    return a * b;
}

let calc = function (a,b, callback){
    return callback(a,b);
}

debugger;

console.log(calc(2,3, add) );
