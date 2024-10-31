let arr = [1, 23, 3, 57, 3, 4, 5]
// let max = arr[0]
// for (let i = 0; i < arr.length; i++) {
//     if (arr[i] > max) {
//         max = arr[i]
//     }
// }
// console.log(max)


// console.log(arr.reduce((x,y)=>{
//     return x+y
// }))
// let sum = 0
// for (let i = 0; i < arr.length; i++) {
//     sum = sum + arr[i]
// }
// console.log(sum)
// let arr1 = []
// for (let i = 0; i < arr.length; i++) {

//     if (!arr1.includes(arr[i])) {
//         arr1.push(arr[i])
//     }

// } console.log(arr1)
let len=arr.length
let sum=arr.reduce((x,y)=>{
    return x+y
})
// console.log(sum)
let previousmax, max=arr[0]
for(let i=0;i<arr.length;i++){
    console.log(max)
     previousmax=max
    if(arr[i]>max){
        max=arr[i]
      
    }
    if(i<  (len-1)){}
}
// console.log(previousmax)
// console.log(max)