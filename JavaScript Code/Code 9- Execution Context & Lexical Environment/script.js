//  Execution context and Lexical Environment.

//Execution context:- Function creates it own Imaginary container
    // In this it has 3 things:- Variables, Functions, Lexical Environment
    
// Lexical Environment:- tells what all a function can access and what all not.


function abcd() {   // function abcd cannot access variable b. Because, 
    var a = 12;         // it is there in another function. and Vise-versa
    function def() {
        var b = 13;
    }
}
abcd();