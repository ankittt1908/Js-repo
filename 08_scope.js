let a = 100
if (true) {
    let a = 20
    // console.log("Inner: ", a);
}
// console.log(a);

function one(){
    const username = "hitesh"
    function two(){
        const website = "youtube"
        console.log(username);
    }
    // console.log(website);
//     two() 
}
// one()

if (true) {
    const username = "hitesh"
    if(username == "hitesh") {
        const website = "youtube"
        console.log(username + website);

    }
    // console.log(website);
}
// console.log(username);


console.log(addOne(5));       // this function call is before its initialisation and will not show error

function addOne(num) {
    return num + 1
}



const addTwo = function(num) {
    return num + 2
}

console.log(addTwo(7));          // this function call is after its initialisation and will show error if called before because it is stored as an variable called addTwo()

