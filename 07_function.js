// function addTwoNumbers(num1, num2) {
//     console.log(num1 + num2);
    
// }
// addTwoNumbers(8, 9);


// function loginUserMessage(username) {
//     if(username == undefined) {
//         console.log("please enter a username");
//         return
//     }
//     return `${username} just logged in`
// }
// console.log(loginUserMessage());


function calculateCartPrice(...num1) {
    return num1
}
console.log(calculateCartPrice(100, 200, 300, 500));


const user = {
    username: "Rana",
    price: 500
}
function anyObject(any){
    console.log(`Username is ${any.username} and price is ${any.price}`);
}

anyObject(user)
// anyObject({
//     username: "sam",
//     price: 300
// })


const newArray = [200, 400, 600, 800]
function secondValue(getArray) {
    return getArray[2]
}
console.log(secondValue(newArray));
// console.log(secondValue([2,5,7,9]));

