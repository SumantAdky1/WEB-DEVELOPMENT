// Types in Js
    // 1. Primitive
    // 2. Reference


// 1. primitive = numbers, string, null, undefined, boolean


var a = 12;
var b = a;

b = b + 2; // b=14


// 2. reference = [] () {}

var a = [12,13];
var b = a;

b.pop(); // poping(deleting) a last element of 'a' in b
        // b=12. Because of reference 'a' will also have 12 i.e; a=12.