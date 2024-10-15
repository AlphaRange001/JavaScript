let arr = [1, 23, 3, 7, 3, 4, 5]
let max = arr[0]
for (let i = 0; i < arr.length; i++) {
    if (arr[i] > max) {
        max = arr[i]
    }
}
console.log(max)


console.log(arr.reduce((x,y)=>{
    return x+y
}))
let sum = 0
for (let i = 0; i < arr.length; i++) {
    sum = sum + arr[i]
}
console.log(sum)
let arr1 = []
for (let i = 0; i < arr.length; i++) {

    if (!arr1.includes(arr[i])) {
        arr1.push(arr[i])
    }

} console.log(arr1)