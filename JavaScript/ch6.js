sayHello = () => {
    console.log("Hello world!");
    console.log("Hallo wereld!");
}
// sayHello();

getGreeting = () => {
    return sayHello();
}

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


avg = (a, b) => {
    return (a + b)/2;
}
avg(5, 10);
const a = 5, b = 10;
avg(a, b);

// f = (x) => {
//     console.log(`f 내부: x=${x}`);
//     x = 5;
//     console.log(`f 내부: x=${x} (할당 후)`);
// }

// let x = 3;
// console.log(`f를 호출하기 전: x=${x}`);
// f(x);
// console.log(`f를 호출한 다음: x=${x}`);

f = (o) => {
    o.message = `f 안에서 수정함 (이전 값: '${o.message}')`;
}
let o = {
    message: "초기 값"
};
console.log(`f를 호출하기 전: o.message="${o.message}"`);
f(o);
console.log(`f를 호출한 다음: o.message="${o.message}"`);