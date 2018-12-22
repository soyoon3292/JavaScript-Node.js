// const u1 = { name: 'Cynthia' };
// const u2 = { name: 'Jackson' };
// const u3 = { name: 'Olive' };
// const u4 = { name: 'James' };

// // const userRoles = new Map();

// // userRoles.set(u1, 'User');
// // userRoles.set(u2, 'User');
// // userRoles.set(u3, 'Admin');

// // userRoles
// //     .set(u1, 'User')
// //     .set(u2, 'User')
// //     .set(u3, 'Admin');

// const userRoles = new Map([
//     [u1, 'User'],
//     [u2, 'User'],
//     [u3, 'Admin']
// ]);

// console.log(userRoles.get(u2));
// console.log(userRoles.has(u1));
// console.log(userRoles.get(u1));
// console.log(userRoles.has(u4));
// console.log(userRoles.get(u4));

// console.log(userRoles.get(u1));
// console.log(userRoles.set(u1, 'Admin'));
// console.log(userRoles.get(u1));

// console.log(userRoles.size);

// for(let u of userRoles.keys())
//     console.log(u.name);

// for(let r of userRoles.values())
//     console.log(r);

// for(let ur of userRoles.entries())
//     console.log(`${ur[0].name}: ${ur[1]}`);

// for(let [u, r] of userRoles.entries())
//     console.log(`${u.name}: ${r}`);

// for(let [u, r] of userRoles) // entries() 메서드는 맵의 기본 이터레이터, 생략 가능하다
//     console.log(`${u.name}: ${r}`);

// console.log([...userRoles.values()]);

// userRoles.delete(u2);
// console.log(userRoles.size);

// userRoles.clear();
// console.log(userRoles.size);


// const SecretHolder = (() => {
//     const secrets = new WeakMap();
//     return class {
//         setSecret(secret) {
//             secrets.set(this, secret);
//         }
//         getSecret() {
//             return secrets.get(this);
//         }
//     }
// })();

// const a = new SecretHolder();
// const b = new SecretHolder();

// a.setSecret('secret A');
// b.setSecret('secret B');

// console.log(a.getSecret());
// console.log(b.getSecret());


// const roles = new Set();

// roles.add('User');
// roles.add('Admin');
// console.log(roles.size);

// roles.add('User');
// console.log(roles.size);

// console.log(roles.delete('Admin'));
// console.log(roles);
// console.log(roles.delete('Admin'));


const naughty = new WeakSet();

const children = [
    { name: 'Suzy' },
    { name: 'Derek' }
];

naughty.add(children[1]);

for(let child of children) {
    if(naughty.has(child))
        console.log(`Coal for ${child.name}!`);
    else
        console.log(`Presents for ${child.name}!`);
}