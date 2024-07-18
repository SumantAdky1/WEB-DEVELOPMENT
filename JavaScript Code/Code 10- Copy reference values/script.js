//How to copy reference values

var a = [1,2,3,4,5];
//var b = a;

//b.pop();    // deletes last value in array 'a' and 'b'
// If you want to copy then use "Spread Operator"

var b = [...a]; // copies array
                    // var a = {name: "Sumant"}
                    // var b = {...a}  // copies object.

b.pop();     // deletes last element of 'b' array.
                // But, 'a' array has complete array


