// sayHello = () => {
//     console.log("Hello world!");
//     console.log("Hallo wereld!");
// }
// // sayHello();

// getGreeting = () => {
//     return sayHello();
// }

// getGreeting();

// const f = getGreeting;
// f();

// const o = {};
// o.f = getGreeting;
// o.f();

// const arr = [1, 2, 3];
// arr[1] = getGreeting;
// arr[1]();
// console.log(arr);


// avg = (a, b) => {
//     return (a + b)/2;
// }
// avg(5, 10);
// const a = 5, b = 10;
// avg(a, b);

// f = (x) => {
//     console.log(`f 내부: x=${x}`);
//     x = 5;
//     console.log(`f 내부: x=${x} (할당 후)`);
// }

// let x = 3;
// console.log(`f를 호출하기 전: x=${x}`);
// f(x);
// console.log(`f를 호출한 다음: x=${x}`);

// f = (o) => {
//     o.message = `f 안에서 수정함 (이전 값: '${o.message}')`;
// }
// let o = {
//     message: "초기 값"
// };
// console.log(`f를 호출하기 전: o.message="${o.message}"`);
// f(o);
// console.log(`f를 호출한 다음: o.message="${o.message}"`);


// f = (o) => {
//     o.message = `f에서 수정함`;
//     o = {
//         message: `새로운 객체!`
//     };
//     console.log(`f 내부: o.message="${o.message}" (할당 후)`);
// }

// let o = {
//     message: `초기 값`
// };

// console.log(`f를 호출하기 전: o.message="${o.message}"`);
// f(o);
// console.log(`f를 호출한 다음: o.message="${o.message}"`);


// f = (x) => {
//     return `in f: x=${x}`;
// }
// f();


// getSentence = ({ subject, verb, object }) => {
//     return `${subject} ${verb} ${object}`;
// }

// const o = {
//     subject: "I",
//     verb: "love",
//     object: "JavaScript"
// };

// getSentence(o);


// getSentence = ([ subject, verb, object ]) => {
//     return `${subject} ${verb} ${object}`;
// }

// const arr = [ "I", "love", "JavaScript" ];
// getSentence(arr);


// addPrefix = (prefix, ...words) => {
//     const prefixedWords = [];
//     for(let i=0; i<words.length; i++) {
//         prefixedWords[i] = prefix + words[i];
//     }
//     return prefixedWords;
// }

// addPrefix("con", "verse", "vex");


// f = (a, b = "default", c = 3) => {
//     return `${a} - ${b} - ${c}`;
// }

// console.log(f(5, 6, 7));
// console.log(f(5, 6));
// console.log(f(5));
// console.log(f());


// const o = {
//     name: "Wallace",
//     // bark: () => {
//     //     return "Woof!";
//     // }
//     bark() {
//         return "Woof!";
//     }
// }
// console.log(o.bark);


// const o = {
//     name: "Wallace",
//     speak() { return `My name is ${this.name}!`; }
// }
// // o.speak();
// const speak = o.speak;
// speak === o.speak;
// speak();


// const o = {
//     name: "Julie",
//     greetBackwards() {
//         getReverseName = function() {
//             let nameBackwards = '';
//             for(let i=this.name.length-1; i>=0; i--) {
//                 nameBackwards += this.name[i];
//             }
//             return nameBackwards;
//         }
//         return `${getReverseName()} si eman ym ,olleH`;
//     },
// };
// console.log(o.greetBackwards());

// const o = {
//     name: "Julie",
//     greetBackwards() {
//         getReverseName = () => {
//             let nameBackwards = '';
//             for(let i=this.name.length-1; i>=0; i--) {
//                 nameBackwards += this.name[i];
//             }
//             return nameBackwards;
//         }
//         return `${getReverseName()} si eman ym ,olleH`;
//     },
// };
// console.log(o.greetBackwards());

// const o = {
//     name: "Julie",
//     greetBackwards() {
//         const self = this;
//         getReverseName = () => {
//             let nameBackwards = '';
//             for(let i=self.name.length-1; i>=0; i--) {
//                 nameBackwards += self.name[i];
//             }
//             return nameBackwards;
//         }
//         return `${getReverseName()} si eman ym ,olleH`;
//     },
// };
// console.log(o.greetBackwards());


// const f = function() {
//     // ...
// };

// const g = function f() {
//     // ...
// }
// f();


// const g = function f(stop) {
//     if(stop) console.log("f stopped");
//     f(true);
// };
// g(false);


// const f1 = function() { return "hello!"; }
// const f1 = () => "hello!";

// const f2 = function(name) { return `Hello, ${name}!`; }
// const f2 = name => `Hello, ${name}!`;

// const f3 = function(a, b) { return a + b; }
// const f3 = (a, b) => a + b;


// const bruce = { name: "Bruce" };
// const madeline = { name: "Madeline" };

// // function greet() {
// //     return `Hello, I'm ${this.name}!`;
// // }

// greet = () => {
//     return `Hello, I'm ${this.name}!`;
// } // 화살표 함수는 this가 고정된다
// console.log(greet());
// console.log(greet.call(bruce));
// console.log(greet.call(madeline));


const bruce = { name: "Bruce" };
const madeline = { name: "Madeline" };

function update(birthYear, occupation) {
    this.birthYear = birthYear;
    this.occupation = occupation;
}
update.call(bruce, 1949, 'singer');
console.log(bruce);
update.call(madeline, 1942, 'actress');
console.log(madeline);
update.apply(bruce, [1955, 'actor']);
console.log(bruce);
update.apply(madeline, [1918, 'writer']);
console.log(madeline);

const newBruce = [1940, "martial artist"];
update.call(bruce, ...newBruce);
console.log(bruce);

const updateBruce = update.bind(bruce);

updateBruce(1904, 'actor');
console.log(bruce);
console.log(madeline);
updateBruce.call(madeline, 1274, 'king');
console.log(bruce);
console.log(madeline);

const updateBruce1949 = update.bind(bruce, 1949);
updateBruce1949("singer, songwriter");
console.log(bruce);


// const arr = [2, 3, -5, 15, 7];
// Math.min.apply(null, arr);
// console.log(Math.min(...arr));
// console.log(Math.min(arr));
// console.log(...arr);
// console.log(arr);
// Math.max.apply(null, arr);
// Math.max(...arr);