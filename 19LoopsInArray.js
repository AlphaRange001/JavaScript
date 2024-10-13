// string to object
let name = "vivek"
let arr = Array.from(name)
console.log(arr)
console.log(typeof arr, typeof name)

// for in
for (let a in name) {
    console.log(arr[a])
}

// for of 
for (let a of name) {
    console.log(a)
}
// function a(x,y){
//     return x+y

// }
// console.log(a(3,4))

let a = (x, y) => {
    return x + y
}
console.log(a(3, 4))
let arrf=[1,2,3]
console.log(arr())