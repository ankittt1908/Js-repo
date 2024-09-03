const mySym = Symbol("key")
const JsUser = {
    name : "Ankit",
    age : 21,
    email : "ankit@gmail.com",
    location : "Kolkata",
    [mySym] : "key1"
}

// console.log(JsUser);
// console.log(JsUser.email);
// console.log(JsUser["location"]);
// console.log(typeof JsUser[mySym]);

// JsUser.age = 20
// Object.freeze(JsUser)
// JsUser.age = 18
// JsUser.name = 'xyz'
// console.log(JsUser);
 
JsUser.greeting = function() {
    console.log("Hello js user");
}

JsUser.greetingTwo = function() {
    console.log(`Hello ${this.name}, How r u`);
}
// console.log(JsUser.greeting());
// console.log(JsUser.greetingTwo());

// part-2
const regularUser = {
    email : "xyz@gmail.com",
    fullname : {
        username : {
            name : "Akki"
        }
    },
    location : "london"

}

// console.log(regularUser);
// console.log(regularUser.fullname);
// console.log(regularUser.fullname.username);
// console.log(regularUser.fullname.username.name);

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "c", 4: "d"}
// const obj3 = {obj1, obj2}
// const obj3 = Object.assign({}, obj1, obj2)
const obj3 = {...obj1, ...obj2}
// console.log(obj3);
// console.log(obj1);
// console.log(obj2);

const users = [
    {
        id: 1,
        email: "abc@gmail.com"
    },
    {
        id: 2,
        email: "xyz@gmail.com"
    },
    {
        id: 3,
        email: "none@gmail.com"
    }

]
// console.log(users[0]);
// console.log(users[1]);
// console.log(users[2]);

const tinderUser = {
    id: 123,
    name: "Sammy",
    isLoggedIn: false
}
console.log(Object.keys(tinderUser));
console.log(Object.values(tinderUser));
console.log(Object.entries(tinderUser));

console.log(tinderUser.hasOwnProperty('isLoggedIn'));
console.log(tinderUser.hasOwnProperty('isLogged'));



