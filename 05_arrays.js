// const myArr = [12, 14, 18, 16, 20]

// console.log(myArr);
// myArr.push(22, 24)
// console.log(myArr);

// myArr.pop()
// myArr.unshift(10)
// myArr.shift()
// console.log(myArr);

// console.log(myArr.includes(16));

// console.log(myArr.includes(5));



// const myArr2 = myArr.join()
// console.log(myArr2);


const cricket = ["Sachin", "Dhoni", "Virat", "Rohit"]
const football = ["Sunil", "Messi", "Ronaldo"]

// cricket.push(football)
// console.log(cricket);

const all = cricket.concat(football)
console.log(all);


const myArr3 = [12, 14, [86, 36,[46, 48,[93, 21, 90, 54]]], 18, 16, 20]
const myArr4 = myArr3.flat(3)
console.log(myArr4);

console.log(Array.isArray(cricket));
console.log(Array.from("Ankit"));
m1 = 80, m2 = 90, m3 = 85
console.log(Array.of(m1, m2, m3));

