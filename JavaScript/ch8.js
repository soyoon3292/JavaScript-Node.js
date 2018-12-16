// const arr1 = [1, 2, 3];
// const arr2 = ['one', 2, 'three'];
// const arr3 = [[1, 2, ,3], ['one', 2, 'three']];
// const arr4 = [
//     { name: 'Fred', type: 'object', luckyNumbers: [5, 7, 13] },
//     [
//         { name: 'Susan', type: 'object' },
//         { name: 'Anthony', type: 'object' }
//     ],
//     1,
//     () => "arrays can contain functions too",
//     'three'
// ];

// console.log(arr1[0]);
// console.log(arr1[2]);
// console.log(arr3[1]);
// console.log(arr4[1][1]);

// console.log(arr1.length);
// console.log(arr4.length);
// console.log(arr4[1].length);

// arr1[4] = 5;
// console.log(arr1);
// console.log(arr1.length);

// console.log(arr2[10]);
// console.log(arr2.length);

// const arr5 = new Array();
// const arr6 = new Array(1, 2, 3);
// const arr7 = new Array(2);
// const arr8 = new Array('2');
// console.log(arr5, arr6, arr7, arr8);


// const arr = ['b', 'c', 'd'];
// console.log(arr.push('e'));
// console.log(arr.pop());
// console.log(arr.unshift('a'));
// console.log(arr.shift());


// const arr = [1, 2, 3];
// console.log(arr.concat(4, 5, 6));
// console.log(arr.concat([4, 5, 6]));
// console.log(arr.concat([4, 5], 6));
// console.log(arr.concat([4, [5, 6]]));
// console.log(arr);


// const arr = [1, 2, 3, 4, 5];
// console.log(arr.slice(3));
// console.log(arr.slice(2, 4));
// console.log(arr.slice(-2));
// console.log(arr.slice(1, -2));
// console.log(arr.slice(-2, -1));
// console.log(arr);


// const arr = [1, 5, 7, 0];
// console.log(arr.splice(1, 0, 2, 3, 4));
// console.log(arr);
// console.log(arr.splice(5, 0, 6));
// console.log(arr);
// console.log(arr.splice(1, 2));
// console.log(arr);
// console.log(arr.splice(2, 1, 'a', 'b'));
// console.log(arr);
// console.log(arr.filter( num => num !== 0)); // 0을 제거하는 방법


// const arr = [1, 2, 3, 4];
// console.log(arr.copyWithin(1, 2));
// console.log(arr.copyWithin(2, 0, 2));
// console.log(arr.copyWithin(0, -3, -1));


// const arr = new Array(5).fill(1);
// console.log(arr);
// console.log(arr.fill('a'));
// console.log(arr.fill('b', 1));
// console.log(arr.fill('c', 2, 4));
// console.log(arr.fill(5.5, -4));
// console.log(arr.fill(0, -3, -1));


// const arr = [1, 2, 3, 4, 5];
// console.log(arr.reverse());


// const arr = [5, 4, 3, 2, 1];
// console.log(arr.sort());


// const arr = [{ name: 'Suzanne' }, { name: 'Jim' },
//     { name: 'Trevor'}, { name: 'Amanda' }];
// console.log(arr.sort());
// console.log(arr.sort((a, b) => a.name > b.name));
// console.log(arr.sort((a, b) => a.name[1] < b.name[1]));


// const o = { name: 'Jerry' };
// const arr = [1, 5, 'a', o, true, 5, [1, 2], '9'];
// console.log(arr.indexOf(5));
// console.log(arr.lastIndexOf(5));
// console.log(arr.indexOf('a'));
// console.log(arr.lastIndexOf('a'));
// console.log(arr.indexOf({ name: 'Jerry' }));
// console.log(arr.indexOf(o));
// console.log(arr.indexOf([1, 2]));
// console.log(arr.indexOf('9'));
// console.log(arr.indexOf(9));

// console.log(arr.indexOf('a', 5));
// console.log(arr.indexOf(5, 5));
// console.log(arr.lastIndexOf(5, 4));
// console.log(arr.lastIndexOf(true, 3));


// const arr = [{ id: 5, name: 'Judith' }, { id: 7, name: 'Francis' }];
// console.log(arr.findIndex(o => o.id === 5));
// console.log(arr.findIndex(o => o.name === 'Francis'));
// console.log(arr.findIndex(o => o === 3));
// console.log(arr.findIndex(o => o.id === 17));


// const arr = [{ id: 5, name: 'Judith' }, { id: 7, name: 'Francis' }];
// console.log(arr.find(o => o.id === 5));
// console.log(arr.find(o => o.id === 2));


// const arr = [1, 17, 16, 5, 4, 16, 10, 3, 49];
// console.log(arr.find((x, i) => i > 2 && Number.isInteger(Math.sqrt(x))));


class Person {
    constructor(name) {
        this.name = name;
        this.id = Person.nextId++;
    }
}
Person.nextId = 0;
const jamie = new Person('Jamie'),
    juliet = new Person('Juliet'),
    peter = new Person('Peter'),
    jay = new Person('Jay');
const arr = [jamie, juliet, peter, jay];

// 옵션 1: ID를 직접 비교하는 방법
console.log(arr.find(p => p.id === juliet.id));

// 옵션 2: "this" 매개변수를 이용하는 방법
// console.log(arr.find(p => p.id === this.id, juliet)); // 화살표 함수의 "this"는 고정된다
console.log(arr.find(function (p) { return p.id === this.id }, juliet));