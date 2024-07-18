// var is Function scoped
        
// function abcd() {
//     for(var i=1;i<12;i++) {
//         console.log(i);  // prints till 11th value
//     }
//     console.log(i); //prints 12th values.. Because
//                         // we have used Var in for.. it means 
//                         // it is used anywhere in function
// }
// abcd();



// let and const are Braces scoped
// function abcd() {
//     for(let i=1;i<12;i++) {
//         console.log(i);  // prints till 11th value
//     }
//     console.log(i); // Doesn't prints 12th values.. Because
//                         // we have used Let in for.. it means 
//                         // it is related to the braces of For only 
//                         // and throws error that 'i is not defined'
// }
// abcd();


// Var adds itself to the Window object
// alert , prompt, console are the part of Browser
// var, if,else ,functions, array are the part sof JS
var a = 12; // you will get 'a' value in window in console
// type 'window' in Console

// Let and const Does not adds itself to the Window object
let b = 13;  // you won't get 'b' value in window in console
// type 'window' in Console



// Browser context API 
    //has
//window object
    // has
// 3 things.... Window, Stack, Heap Memory

// Heap Memory:- The intermediate data is stored in Heap memory.
        // 1+2+3+4+5+6  Steps that Computer uses:
        //  3
        //  3 + 3
        //    6  + 4
        //    10   + 5 .......