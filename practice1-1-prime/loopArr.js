//sort an array
let fruits = ["banana", "apple", "orange", "mango"]

// fruits = fruits.sort()
fruits = fruits.sort().reverse()

for (let fruit of fruits) {
    console.log(fruit)
}

//spread operator
// let numbers = [1, 2 ,3 ,4, 5, 6, 7, 8, 9]
// console.log(...numbers)

//rest parameters
let a = 1
let b = 2
let c = 3
let d = 4
let e = 5

function sum(...numbers) {
    let total = 0
    for (let num of numbers) {
        total += num
    }
    return total
}

console.log(sum(a,b,c,d,e))