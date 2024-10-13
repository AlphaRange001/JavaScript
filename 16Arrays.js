let data=[23,44,55,66,77,88,99,90]

// Directly add data in Array
data[8]=54
for (let a of data){
    console.log(a)
}

// array to string 

let b=data.toString()
console.log(b,typeof b)

// replace , with other syntaax

let c=data.join("+")
console.log(c)

// push data into array

let d=data.push(56)
console.log(data)

// pop data from Array

let e=data.pop()
console.log(data)

// it will remove the first element of array
let f=data.shift()
console.log(f)

// it will add data at the beginning of the array

let g=data.unshift(33,44)
console.log(data)

// it will delete data from any location of an array


let h=delete data[1]  //its a operator that delete elements
console.log(data)


// it will add arrays 

let arr1=[1,2,3,4,5,6,7]
let arr2=[121,122,123,124,125,126,127]
let i=data.concat(arr1,arr2)
console.log(i)


// It will sort  the array BUT on the basis of first element so we nee dto create a compare function function and it will arrange according to it

function compare(x,y){ 
    return x-y
}
let j=i.sort(compare)
console.log(j)

// reverse  an array in real

function compare(x,y){ 
    return y-x
}
let k=i.reverse(compare)
console.log(k)

//This is very powerful function:- Using this we can remove object s from any location and mannualy remove &add no. of elements we want

console.log(data)
let deletev=data.splice(2,4,100,101,102,103)
//              .splice(location,no. of elements,***contents**)
console.log(deletev)
console.log(data)

// choppp of elements from given locations

let l=data.slice(3,5)
console.log(l ,"sliced data")
console.log(data)
// -------------------XXXXXXX----------------------------

// string to object
let name="vivek"
let arr=Array.from(name)
console.log(arr)
console.log(typeof arr,typeof name)

// for in
for (let a in name){
    console.log(arr[a])
}

// for of 
for(let a of name){
    console.log(a)
}