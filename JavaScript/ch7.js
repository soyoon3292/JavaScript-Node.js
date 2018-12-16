// function f(x) {
//     return x + 3;
// }
// f(5);
// x; // ReferenceError


// f1 = () => {
//     console.log('one');
// }
// f2 = () => {
//     console.log('two');
// }

// f2();
// f1();
// f2();


// const x = 3;

// f = () => {
//     console.log(x);
//     console.log(y); // ReferenceError
// }
// // {
// //     const y = 5;
// //     f();
// // }
// // const y = 5;
// // f();
// {
//     var y = 5;
//     f();
// }


// let name = 'Irena';
// let age = 25;

// greet = () => {
//     console.log(`Hello, ${name}!`);
// }
// getBirthYear = () => {
//     return new Date().getFullYear() - age;
// }


// let user = {
//     name = 'Irena',
//     age = 25
// };
// // greet = () => {
// //     console.log(`Hello, ${user.name}!`);
// // }
// // getBirthYear = () => {
// //     return new Date().getFullYear() - user.age;
// // }
// greet = (user) => {
//     console.log(`Hello, ${user.name}!`);
// }
// getBirthYear = (user) => {
//     return new Date().getFullYear() - user.age;
// }


// console.log("before block");
// {
//     console.log("inside block");
//     const x = 3;
//     console.log(x);
// }
// console.log(`outside block; x=${x}`); // ReferenceError


// {
//     // block 1
//     const x = 'blue';
//     console.log(x);
// }
// console.log(typeof x);
// {
//     // block 2
//     const x = 3;
//     console.log(x);
// }
// console.log(typeof x);


// {
//     // 외부 블록
//     let x = 'blue';
//     console.log(x);
//     {
//         // 내부 블록
//         let x = 3;
//         console.log(x);
//     }
//     console.log(x);
// }
// console.log(typeof x);


// {
//     // 외부 블록
//     let x = { color: 'blue' };
//     let y = x;
//     let z = 3;
//     {
//         // 내부 블록
//         let x = 5;
//         console.log(x);
//         console.log(y.color);

//         y.color = 'red';
//         console.log(z);
//     }
//     console.log(x.color);
//     console.log(y.color);
//     console.log(z);
// }


// let globalFunc;
// {
//     let blockVar = 'a';
//     globalFunc = () => {
//         console.log(blockVar);
//     }
// }
// globalFunc();


// let f;
// {
//     let o = { note: 'Safe' };
//     f = () => o;
// }
// let oRef = f();
// oRef.note = "Not so safe after all!";
// console.log(oRef.note);


// (function() {
//     // IIFE body
// })();


// const message = (function() {
//     const secret = "I'm a secret!";
//     return `The secret is ${secret.length} characters long.`;
// })();
// console.log(message);

// const message = (() => {
//     const secret = "I'm a secret!";
//     return `The secret is ${secret.length} characters long.`;
// })();
// console.log(message);


// const f = (() => {
//     let count = 0;
//     return () => {
//         return `I have been called ${++count} time(s).`;
//     }
// })();
// console.log(f());
// console.log(f());
// console.log(f());
// //...


// let var1;
// let var2 = undefined;
// var1;
// var2;
// undefinedVar; // ReferenceError

// x;
// let x = 3;

// x;
// var x = 3;
// x;

// var x;
// x;
// x = 3;
// x;


// if(x !== 3) {
//     console.log(y);
//     var y = 5;
//     if(y === 5) {
//         var x = 3;
//     }
//     console.log(y);
// }
// if(x === 3) {
//     console.log(y);
// }


// var x = 3;
// if(x === 3) {
//     var x = 2;
//     console.log(x);
// }
// console.log(x);

// f();
// function f() {
//     console.log('f');
// }

// f();
// let f = function() { // ReferenceError
//     console.log('f');
// }
// f();
// var f = function() { // ReferenceError
//     console.log('f');
// }
// f();
// f = () => {
//     console.log('f');
// }


// if(typeof x === 'undefined') {
//     console.log("x doesn't exist or is undefined");
// } else {
//     // x를 사용해도 안전한 코드
//     console.log(x);
// } // OK

// if(typeof x === 'undefined') {
//     console.log("x doesn't exist or is undefined");
// } else {
//     // x를 사용해도 안전한 코드
//     console.log(x);
// }
// let x = 5; // ReferenceError


(function() {
    "use strict";
    // 코드를 전부 이 안에 작성합니다.
    // 이 코드는 스트릭트 모드로 동작하지만,
    // 이 코드와 함께 동작하는 다른 스크립트는
    // 스트릭트 모드에 영향받지 않습니다.
})();
