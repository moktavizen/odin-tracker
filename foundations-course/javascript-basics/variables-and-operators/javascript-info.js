// https://javascript.info/variables#variable-naming

// The name must contain only letters, digits, or the symbols $ and _.
// The first character must not be a digit.

let $ = 1;
let _ = 2;

// alert($ + _);

// Non-Latin letters are allowed, but not recommended

//There is a list of reserved words, which cannot be used as variable names because they are used by the language itself.
// let let = 5; // Uncaught SyntaxError: a lexical declaration can't define a 'let' binding
// let return = 5; // Uncaught SyntaxError: unexpected token: keyword 'return'

// capital-named constants are only used as aliases for “hard-coded” values.

// Working with variables
let admin;
let name;

name = "John";

admin = name;

alert(admin);

// Giving the right name
// let planetEarth;
// let currentVisitor;

let ourPlanetName = "Earth";
let currentUserName = "John";

// Modern editors and autocomplete make long variable names easy to write.
// Don’t save on them. A name with 3 words in it is fine.
// const birthday = '18.04.1982';
// const age = someCode(birthday);

// const BIRTHDAY = "18.04.1982";
//
// const age = someCode(birthday);

// age is evaluated in run-time. Today we have one age, a year after we’ll have
// another one. It is constant in a sense that it does not change through the
// code execution. But it is a bit “less of a constant” than birthday: it is
// calculated, so we should keep the lower case for it

// The postfix and prefix forms
// let a = 1,
//   b = 1;
//
// let c = ++a;
// let d = b++;
//
// alert(c);
// alert(d);
//
// alert(a);
// alert(b);

// Assignment result
// let a = 2;
//
// let x = 1 + (a *= 2);
//
// alert(a);
// alert(x);

// Fix the addition
// let a = prompt("First number?", 1);
// let b = prompt("Second number?", 2);
//
// alert(a + b); // 12

let a = prompt("First number?", 1);
let b = prompt("Second number?", 2);

alert(+a + +b); // 12
