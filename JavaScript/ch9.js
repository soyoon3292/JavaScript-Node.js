// const SYM = Symbol();
// const o = { a: 1, b: 2, c: 3, [SYM]:4 };

// for(let prop in o) { // 배열에는 for ...in 대신 for 루프나 forEach를 사용하는게 좋다
//     if(!o.hasOwnProperty(prop)) continue;
//     console.log(`${prop}: ${o[prop]}`);
// }

// const SYM = Symbol();
// const o = { a: 1, b: 2, c: 3, [SYM]: 4 };

// Object.keys(o).forEach(prop => console.log(`${prop}: ${o[prop]}`));


// const o = { apple: 1, xochitl: 2, balloon: 3, guitar: 4, xylophone: 5 };

// Object.keys(o)
//     .filter(prop => prop.match(/^x/))
//     .forEach(prop => console.log(`${prop}: ${o[prop]}`));


// class Car {
//     constructor(make, model) {
//         this.make = make;
//         this.model = model;
//         this._userGears = ['P', 'N', 'R', 'D'];
//         this._userGear = this._userGears[0];
//     }

//     get userGear() { return this._userGear; }
//     set userGear(value) {
//         if(this._userGears.indexOf(value) < 0)
//             throw new Error(`Invalid gear: ${value}`);
//         this._userGear = value;
//     }

//     shift(gear) { this.userGear = gear; }
// }

// const car1 = new Car('Tesla', 'Model S');
// const car2 = new Car('Mazda', '3i');

// // console.log(car1 instanceof Car);
// // console.log(car1 instanceof Array);

// car1.shift('D');
// car2.shift('R');
// // car1.shift('X');
// // car1._userGear = 'X';
// // console.log(car1._userGear);


// const Car = (function() {

//     const carProps = new WeakMap();

//     class Car {
//         constructor(make, model) {
//             this.make = make;
//             this.model = model;
//             this._userGears = ['P', 'N', 'R', 'D'];
//             carProps.set(this, { userGear: this._userGears[0]});
//         }
        
//         get userGear() { return carProps.get(this).userGear; }
//         set userGear(value) {
//             if(this._userGears.indexOf(value) < 0)
//                 throw new Error(`Invalid gear: ${value}`);
//             carProps.get(this).userGear = value;
//         }

//         shift(gear) { this.userGear = gear; }
//     }

//     return Car;
// })();


// function Es5Car(make, model) { // ES5 에서의 Car 클래스
//     this.make = make;
//     this.model = model;
//     this._userGears = ['P', 'N', 'R', 'D'];
//     this._userGear = this.userGears[0];
// }

// class Es6Car {}

// console.log(typeof Es5Car);
// console.log(typeof Es6Car);


// class Car {
//     constructor(make, model) {
//         this.make = make;
//         this.model = model;
//         this._userGears = ['P', 'N', 'R', 'D'];
//         this._userGear = this._userGears[0];
//     }

//     get userGear() { return this._userGear; }
//     set userGear(value) {
//         if(this._userGears.indexOf(value) < 0)
//             throw new Error(`Invalid gear: ${value}`);
//         this._userGear = value;
//     }

//     shift(gear) { this.userGear = gear; }
// }

// const car1 = new Car();
// const car2 = new Car();
// console.log(car1.shift === Car.prototype.shift);
// console.log(car1.shift('D'));
// // console.log(car1.shift('d')); // Error
// console.log(car1.userGear);
// console.log(car1.shift === car2.shift);

// console.log(car1.shift = function(gear) { this.userGear = gear.toUpperCase(); })
// console.log(car1.shift === Car.prototype.shift);
// console.log(car1.shift === car2.shift);
// console.log(car1.shift('d'));
// console.log(car1.userGear);


// class Car {
//     static getNextVin() {
//         return Car.nextVin++; // this.nextVin++ 이라고 써도 되지만 정적 메서드라는 점을 잊어버릴 수 있다
//     }

//     constructor(make, model) {
//         this.make = make;
//         this.model = model;
//         this.vin = Car.getNextVin();
//     }
//     static areSimilar(car1, car2) {
//         return car1.make===car2.make && car1.model===car2.model;
//     }
//     static areSame(car1, car2) {
//         return car1.vin===car2.vin;
//     }
// }
// Car.nextVin = 0;

// const car1 = new Car('Tesla', 'S');
// const car2 = new Car('Mazda', '3');
// const car3 = new Car('Mazda', '3');

// console.log(car1.vin);
// console.log(car2.vin);
// console.log(car3.vin);

// console.log(Car.areSimilar(car1, car2));
// console.log(Car.areSimilar(car2, car3));
// console.log(Car.areSame(car2, car3));
// console.log(Car.areSame(car2, car2));


// class Vehicle {
//     constructor() {
//         this.passengers = [];
//         console.log("Vehicle created");
//     }
//     addPassenger(p) {
//         this.passengers.push(p);
//     }
// }

// class Car extends Vehicle {
//     constructor() {
//         super();
//         console.log("Car created");
//     }
//     deployAirbags() {
//         console.log("BWOOSH!");
//     }
// }

// // const v = new Vehicle();
// // v.addPassenger('Frank');
// // v.addPassenger('Judy');
// // console.log(v.passengers);
// // const c = new Car();
// // c.addPassenger('Alice');
// // c.addPassenger('Cameron');
// // console.log(c.passengers);
// // // v.deployAirbags(); // Error
// // c.deployAirbags();

// class Motorcycle extends Vehicle {}
// const c = new Car();
// const m = new Motorcycle();
// console.log(c instanceof Car);
// console.log(c instanceof Vehicle);
// console.log(m instanceof Car);
// console.log(m instanceof Motorcycle);
// console.log(m instanceof Vehicle);


// class Super {
//     constructor() {
//         this.name = 'Super';
//         this.isSuper = true;
//     }
// }

// Super.prototype.sneaky = "not recommended!"; // 유효하지만 권장하지 않음

// class Sub extends Super {
//     constructor() {
//         super();
//         this.name = 'Sub';
//         this.isSub = true;
//     }
// }

// const obj = new Sub();

// for(let p in obj) {
//     console.log(`${p}: ${obj[p]}` +
//         (obj.hasOwnProperty(p) ? '' : ' (inherited)'));
// }


// class Car {
//     toString() {
//         return `${this.make} ${this.model}: ${this.vin}`;
//     }
//     static getNextVin() {
//         return Car.nextVin++; // this.nextVin++ 이라고 써도 되지만 정적 메서드라는 점을 잊어버릴 수 있다
//     }

//     constructor(make, model) {
//         this.make = make;
//         this.model = model;
//         this.vin = Car.getNextVin();
//     }
//     static areSimilar(car1, car2) {
//         return car1.make===car2.make && car1.model===car2.model;
//     }
//     static areSame(car1, car2) {
//         return car1.vin===car2.vin;
//     }
// }
// Car.nextVin = 0;

// // const car1 = new Car('Audi', 'A6');
// // console.log(car1.toString());


// class InsurancePolicy {}
// function makeInsurable(o) {
//     // o.addInsurancePolicy = function(p) { this.insurancePolicy = p; }
//     // o.getInsurancePolicy = function() { return this.insurancePolicy; }
//     // o.isInsured = function() { return !!this.insurancePolicy; }
//     o.addInsurancePolicy = (p) => { this.insurancePolicy = p; }
//     o.getInsurancePolicy = () => this.insurancePolicy;
//     o.isInsured = () => !!this.insurancePolicy;
// }

// // makeInsurable(Car); // 오답

// // const car1 = new Car();
// // car1.addInsurancePolicy(new InsurancePolicy()); // Error
// // makeInsurable(car1); // 해결은 가능하지만 매번 반복해야 한다
// // car1.addInsurancePolicy(new InsurancePolicy());
// // console.log(car1.isInsured());

// makeInsurable(Car.prototype);
// const car1 = new Car();
// car1.addInsurancePolicy(new InsurancePolicy());
// console.log(car1.isInsured());

class InsurancePolicy {}
const ADD_POLICY = Symbol();
const GET_POLICY = Symbol();
const IS_INSURED = Symbol();
const _POLICY = Symbol();
function makeInsurable(o) {
    o[ADD_POLICY] = function(p) { this[_POLICY] = p; }
    o[GET_POLICY] = function() { return this[_POLICY]; }
    o[IS_INSURED] = function() { return !!this[_POLICY]; }
}