// Question no.-1
let arr = []
let size = prompt("Enter size:-")
size = Number.parseInt()
for (i = size; i > 0; i--) {
    arr[i] = prompt("Enter elements at " + i + "th position")
    arr.push(arr[i])
}
// console.log(arr)

// Q-2
let a = prompt("Enter no.:-")
a = Number.parseInt(a)
while (a = 0) {
    arr.push(a)
    continue;
}
console.log(arr)

// Q-3

let q3 = [1, 2, 3, 4, 5, 6, 67]
let div = q3.filter((x) => {
    return X % 10 == 0
})
console.log(div)

//Q-4

let sq = q.map((x) => {
    return x * x
})
console.log(sq)

// Q-5
let factarray = []
let sizea = prompt("Enter size")
sizea = Number.parseInt(sizea)
for (let i = 1; i <= sizea; i++) {
    factarray[i - 1] = i
}
console.log(factarray)
let fact = factarray.reduce((x, y) => { return x * y })
console.log(fact)