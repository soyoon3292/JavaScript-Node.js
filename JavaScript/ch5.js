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


let x = 2;
const r1 = x++ + x++;
console.log(`r1: ${r1}, x: ${x}`);
const r2 = ++x + ++x;
console.log(`r2: ${r2}, x: ${x}`);
const r3 = x++ + ++x;
console.log(`r3: ${r3}, x: ${x}`);
const r4 = ++x + x++;
console.log(`r4: ${r4}, x: ${x}`);

let y = 10;
const r5 = y-- + y--;
console.log(`r5: ${r5}, y: ${y}`);
const r6 = --y + --y;
console.log(`r6: ${r6}, y: ${y}`);
const r7 = y-- + --y;
console.log(`r7: ${r7}, y: ${y}`);
const r8 = --y + y--;
console.log(`r8: ${r8}, y: ${y}`);