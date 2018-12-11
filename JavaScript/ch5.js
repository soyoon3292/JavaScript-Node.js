// const x = 5;
// const y1 = 3 - -x;
// console.log(y1);

// const s = "5";
// const y2 = 3 + +s;
// console.log(y2);

// const x1 = 0, x2 = 3, x3 = -1.5, x4 = -6.33;
// const p1 = -x1*1;
// const p2 = +x2*2;
// const p3 = +x3*3;
// const p4 = -x4*4;
// console.log(p1, p2, p3, p4);


// let x = 2;
// const r1 = x++ + x++;
// console.log(`r1: ${r1}, x: ${x}`);
// const r2 = ++x + ++x;
// console.log(`r2: ${r2}, x: ${x}`);
// const r3 = x++ + ++x;
// console.log(`r3: ${r3}, x: ${x}`);
// const r4 = ++x + x++;
// console.log(`r4: ${r4}, x: ${x}`);

// let y = 10;
// const r5 = y-- + y--;
// console.log(`r5: ${r5}, y: ${y}`);
// const r6 = --y + --y;
// console.log(`r6: ${r6}, y: ${y}`);
// const r7 = y-- + --y;
// console.log(`r7: ${r7}, y: ${y}`);
// const r8 = --y + y--;
// console.log(`r8: ${r8}, y: ${y}`);


// let x = 3, y;
// x += y = 6*5/2;
// console.log(`x: ${x}, y: ${y}`);


// const n = 5;
// const s = "5";
// console.log(n === s);
// console.log(n !== s);
// console.log(n === Number(s));
// console.log(n !== Number(s));
// console.log(n == s);
// console.log(n != s);

// const a = { name: "an object" };
// const b = { name: "an object" };
// console.log(a === b);
// console.log(a !== b);
// console.log(a == b);
// console.log(a != b);


// let n = 0;
// while(true) {
//     n += 0.1;
//     if(Math.abs(n - 0.3) < Number.EPSILON) break;
// }
// console.log(`Stopped at ${n}`);


// console.log(3 + 5 + "8");
// console.log("3" + 5 + 8);


// const skipIt = true;
// let x = 0;
// const result = skipIt || x++;
// console.log(result, x);

// // const doIt = false;
// const doIt = true;
// let x = 0;
// const result = doIt && x++;
// console.log(result, x);

// const doIt = true;
// // const doIt = false;
// const result = doIt ? "Did it!" : "Didn't do it.";
// console.log(result);


// let x = 0, y = 10, z;
// z = (x++, y++);
// console.log(z, x, y);

// console.log(0b1010 & 0b1100);
// console.log(0b1010 | 0b1100);
// console.log(0b1010 ^ 0b1100);
// console.log(~0b1010);
// console.log(0b1010 << 1);
// console.log(0b1010 << 2);

// let n = 22;
// n >> 1;
// n >>> 1;
// n = ~n;
// n++;
// n >> 1;
// n >>> 1;
// console.log(n);


// const FLAG_EXECUTE = 1;
// const FLAG_WRITE = 2;
// const FLAG_READ = 4;
// let p = FLAG_READ | FLAG_WRITE;
// let hasWrite = p & FLAG_WRITE;
// let hasExecute = p & FLAG_EXECUTE;
// p = p ^ FLAG_WRITE;
// console.log(`p: ${p}`);
// p = p ^ FLAG_WRITE;
// console.log(`p: ${p}`);

// const hasReadOrExecute = p & (FLAG_READ | FLAG_EXECUTE);
// console.log(hasReadOrExecute);
// const hasReadAndExecute = p & (FLAG_READ | FLAG_EXECUTE) === FLAG_READ | FLAG_EXECUTE;
// console.log(hasReadAndExecute);


// let v, v0;
// v = v0 = 9.8;


// const nums = [ 3, 5, 15, 7, 5 ];
// let n, i=0;
// while((n = nums[i]) < 10 && i++ < nums.length) {
//     console.log(`Number less than 10: ${n}.`);
// }
// console.log(`Number greater than 10 found: ${n}.`);
// console.log(`${nums.length - i - 1} numbers remain.`);


// const obj = { b: 2, c: 3, d: 4 };

// const {a, b, c} = obj;
// // console.log(a, b, c, d); // error
// console.log(a, b, c);


// const obj = { b: 2, c: 3, d: 4 };
// let a, b, c;

// // {a, b, c} = obj;
// ({a, b, c} = obj);
// console.log(a, b, c,);


// const arr = [1, 2, 3];

// let [x, y] = arr;
// // console.log(x, y, z);
// console.log(x, y);

// const arr = [1, 2, 3, 4, 5];

// let [x, y, ...rest] = arr;
// console.log(x, y, rest);

// let a = 5, b = 10;
// [a, b] = [b, a];
// console.log(a, b);


// const roomTempC = 21.5;
// let currentTempC = 19.5;
// const message = `The current temperature is ` +
//     `${currentTempC-roomTempC}\u00b0C different than room temperature.`;
// console.log(message);
// const fahrenheit =
//     `The current temperature is ${currentTempC * 9/5 + 32}\u00b0F`;
// console.log(fahrenheit);

// if(isPrime(n)) {
//     label = 'prime';
// } else {
//     label = 'non-prime';
// }
// console.log(label);

// label = isPrime(n) ? 'prime' : 'non-prime';


if(!options) options = {};

options = options || {};