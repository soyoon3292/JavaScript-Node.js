// let currentTempC = 22;
// currentTempC = 22.5;

// let targetTempC; // let targetTempC = undefined;
// let targetTempC, room1 = 'conference_room_a', room2 = 'lobby';
// const ROOM_TEMP_C = 21.5, MAX_TEMP_C = 30;


// let currentRoom = room1; // currentRoom = 'conference_room_a'
// currentRoom = conference_room_a; // Error


// let count = 10;         // 숫자 리터럴. count는 더블입니다.
// const blue = 0x0000ff;  // 16진수. 16진수 ff는 10진수 255와 같습니다.
// const umask = 0o0022;   // 8진수. 8진수 22는 십진수 18과 같습니다.
// const roomTemp = 21.5;  // 십진수
// const c = 3.0e6;        // 지수 (3.0 x 10^6 = 3,000,000)
// const e = 1.6e-19;      // 지수 (-1.6 x 10^-19 = 0.0000000000000000000016)
// const inf = Infinity;   
// const ninf = -Infinity; 
// const nan = NaN;        // "숫자가 아님"


// const small = Number.EPSILON;               // 1에 더했을 때 1과 구분되는 결과를 만들 수 있는
//                                             // 가장 작은 값입니다. 근사치는 2.2e-16입니다.
// const bigInt = Number.MAX_SAFE_INTEGER;     // 표현할 수 있는 가장 큰 정수
// const max = Number.MAX_VALUE;               // 표현할 수 있는 가장 큰 숫자
// const minInt = Number.MIN_SAFE_INTEGER;     // 표현할 수 있는 가장 작은 정수
// const min = Number.MIN_VALUE;               // 표현할 수 있는 가장 작은 숫자
// const inf = Number.POSITIVE_INFINITY;       // Infinity
// const nInf = Number.NEGATIVE_INFINITY;      // -Infinity
// const nan = Number.NaN;                     // NaN


// const dialog = 'Sam looked up, and said "hello, old friend!", as Max walked in.';
// const imperative = "Don't do that!";

// const dialog = "Sam lookd up and said \"don't do that!\" to Max.";
// const s = 'In JavaScript, use \\ as an escape character in strings.';


// ES5
// let currentTemp = 19.5;
// const message = "The current temperature is " + currentTemp + "\u00b0C";

// ES6
// let currentTemp = 19.5;
// const message = `The current temperature is ${currentTemp}\u00b0C`;


// const multiline = "line1\
// line2";
// const multiline = "line1\n\
// line2";
// const multiline = `line1
// line2`;
// const multiline = `line1
//     line2
//     line3`;
// const multiline = "line1\n" +
//     "line2\n" +
//     "line3";
// const multiline = 'Current temperature:\n' +
//     `\t${currentTemp}\u00b0C\n` +
//     "Don't worry...the heat is on!";


// const result1 = 3 + '30'; // 3이 문자열로 바뀌고 330이 된다.
// const result2 = 3 * '30'; // 문자열 '30'이 숫자로 바뀌고 90이 된다.


// let heating = true;
// let cooling = false;


// const RED = Symbol("The color of a sunset!");
// const ORANGE = Symbol("The color of a sunset!");
// console.log(RED === ORANGE); // false


// let currentTemp;
// const targetTemp = null;
// currentTemp = 19.5;
// currentTemp = undefined;


// const obj = {};
// obj.color = "yellow";
// obj["not and identifier"] = 3;

// const SIZE = Symbol();
// obj[SIZE] = 8;
// obj[SIZE];

// console.log(obj);
// obj.SIZE = 0;
// console.log(obj[SIZE]);
// console.log(obj["SIZE"]);
// console.log(obj);


// const sam1 = {
//     name: 'Sam',
//     age: 4,
// };

// const sam2 = { name: 'Sam', age:4 };

// const sam3 = {
//     name: 'Sam',
//     classification: {
//         kingdom: 'Anamalia',
//         phylum: 'Chordata',
//         class: 'Mamalia',
//         order: 'Carnivoria',
//         family: 'Felidae',
//         subfamily: 'Felinae',
//         genus: 'Felis',
//         species: 'catus',
//     },
// };

// console.log(sam3);
// console.log(sam3.classification.family);
// console.log(sam3["classification"].family);
// console.log(sam3.classification["family"]);
// console.log(sam3["classification"]["family"]);

// sam3.speak = () => {
//     return "Meow!";
// };
// console.log(sam3);
// console.log(sam3.speak());

// delete sam3.classification;
// delete sam3.speak;
// console.log(sam3);


// const s = "hello";
// console.log(s.toUpperCase());

// const s = "hello";
// s.rating = 3;
// s.rating; // undefined


// const a1 = [1, 2, 3, 4];
// const a2 = [1, 'two', 3, null];
// const a3 = [
//     "What the hammer? What the chain?",
//     "In what furnace was thy brain?",
//     "What the anvil? What dread grasp",
//     "Dare its deadly terrors clasp?",
// ];
// const a4 = [
//     { name: "Ruby", hardness: 9 },
//     { name: "Diamond", hardness: 10 },
//     { name: "Topaz", hardness: 8 },
// ];
// const a5 = [
//     [1, 3, 5],
//     [2, 4, 6],
// ];
// const arr = ['a', 'b', 'c'];
// console.log(arr.length);
// console.log(arr[0]);
// console.log(arr[arr.length -1]);
// const arr2 = [1, 2, 'c', 4, 5];
// arr[2] = 3;
// console.log(arr2);


// const now = new Date();
// console.log(now);

// const halloween = new Date(2016, 9, 31);
// const halloweenParty = new Date(2016, 9, 31, 19, 0);
// console.log(halloweenParty.getFullYear());
// console.log(halloweenParty.getMonth());
// console.log(halloweenParty.getDate());
// console.log(halloweenParty.getDay());
// console.log(halloweenParty.getHours());
// console.log(halloweenParty.getMinutes());
// console.log(halloweenParty.getSeconds());
// console.log(halloweenParty.getMilliseconds());


// const email = /\b[a-z0-9._-]+@[a-z_-]+(?:\.[a-z]+)+\b/;
// const phone = /(:?\+1)?(:?\(\d{3}\)\s?|\d{3}[\s-]?)\d{3}[\s-]?\d{4}/;


// const numStr = "33.3";
// const num = Number(numStr);

// const a = parseInt("16 volts", 10);
// const b = parseInt("3a", 16); // hex 3a -> decimal 58
// const c = parseFloat("15.5 kph");
// const d = new Date();
// const ts = d.valueOf(); // Milliseconds passed since UTC 1970/01/01 00:00

// const b = true;
// const n = b ? 1 : 0;

// const n = 33.5; // Number 33.5
// const s = n.toString(); // String "33.5"

// const arr = [1, true, "hello"];
// console.log(arr.toString());


const n = 0;
const b1 = !!n;
const b2 = Boolean(n);
console.log(n, b1, b2);