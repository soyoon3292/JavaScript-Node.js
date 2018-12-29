// const book = [
//     "Twinkle, twinkle, little bat!",
//     "How I wonder what you're at!",
//     "Up above the world you fly,",
//     "Like a tea tray in the sky.",
//     "Twinkle, twinkle, little bat!",
//     "How I wonder what you're at!"
// ];

// const it = book.values();

// console.log(it.next());
// console.log(it.next());
// console.log(it.next());
// console.log(it.next());
// console.log(it.next());
// console.log(it.next());
// console.log(it.next());
// console.log(it.next());
// console.log(it.next());
// console.log(it.next());

// const it = book.values();
// let current = it.next();
// while(!current.done) {
//     console.log(current.value);
//     current = it.next();
// }

// const it1 = book.values();
// const it2 = book.values();
// // 어느 이터레이터도 아직 시작하지 않았습니다.

// // it1으로 두 페이지를 읽습니다.
// console.log(it1.next());
// console.log(it1.next());

// // it2로 한 페이지를 읽습니다.
// console.log(it2.next());

// // it1으로 한 페이지를 더 읽습니다.
// console.log(it1.next());


// class Log1 {
//     constructor() {
//         this.messages = [];
//     }
//     add(message) {
//         this.messages.push({ message, timestamp: Date.now() });
//     }
//     [Symbol.iterator]() {
//         return this.messages.values();
//     }
// }

// const log1 = new Log1();
// log1.add("first day at sea");
// log1.add("spotted whale");
// log1.add("spotted another vessel");
// // ...

// 로그를 배열처럼 순회합니다!
// for(let entry of log1) {
//     console.log(`${entry.message} @ ${entry.timestamp}`);
// }
// console.log(log1);

// class Log2 {
//     constructor() {
//         this.messages = [];
//     }
//     add(message) {
//         this.messages.push({ message, timestamp: Date.now() });
//     }
//     [Symbol.iterator]() {
//         let i = 0;
//         const messages = this.messages;
//         return {
//             next() {
//                 if(i >= messages.length)
//                     return { value: undefined, done: true };
//                 return { value: messages[i++], done: false };
//             }
//         }
//     }
// }

// const log2 = new Log2();

// log2.add("first day at sea");
// log2.add("spotted whale");
// log2.add("spotted another vessel");
// for(let entry of log2) {
//     console.log(`${entry.message} @ ${entry.timestamp}`);
// }
// console.log(log2);


// class FibonacciSequence {
//     [Symbol.iterator]() {
//         let a = 1, b = 1;
//         return {
//             next() {
//                 let rval = { value: b, done: false };
//                 b += a;
//                 a = rval.value;
//                 return rval;
//             }
//         };
//     }
// }

// const fib = new FibonacciSequence();
// let i = 0;
// for(let n of fib) {
//     console.log(n);
//     if(++i > 9) break;
// }


// function* rainbow() {
//     yield 'red';
//     yield 'orange';
//     yield 'yellow';
//     yield 'green';
//     yield 'blue';
//     yield 'indigo';
//     yield 'violet';
// }

// const it = rainbow();
// console.log(it.next());
// console.log(it.next());
// console.log(it.next());
// console.log(it.next());
// console.log(it.next());
// console.log(it.next());
// console.log(it.next());
// console.log(it.next());

// for(let color of rainbow()) {
//     console.log(color);
// }


// function* interrogate() {
//     const name = yield "What is your name?";
//     const color = yield "What is your favorite color?";
//     return `${name}'s favorite color is ${color}.`;
// }

// const it = interrogate();
// console.log(it.next());
// console.log(it.next('Ethan'));
// console.log(it.next('orange'));


function* abc() {
    yield 'a';
    yield 'b';
    return 'c';
}

const it = abc();
console.log(it.next());
console.log(it.next());
console.log(it.next());

for(let l of abc()) { // c는 반환되지 않는다.
    console.log(l);
}