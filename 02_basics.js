const id = Symbol('123')
const id2 = Symbol('123')

console.log(id == id2);

const bigNumber = 1234567890356n
console.log(typeof bigNumber);

let a = "abcd"
b = a
b = "xyz"

console.log(a);
console.log(b);

let userOne = {
    email : "imnone@gmail.com",
    upi : "none@ybl"
}

let userTwo = {
    email : "hello@gmail.com",
    upi : "hello@ybl"
}

userOne = userTwo  

console.log(userOne);
console.log(userTwo);

name = "Ankit"
job = "Unemployed"
console.log(`Hello my name is ${name} and i am an ${job}`);

