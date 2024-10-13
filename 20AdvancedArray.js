// Why we are using map ??

//Because it create other arrays to store the data & meanwhile in for each loop it changes the value of array  


//  Mapping concepts :-Manipulate the whole array

let arr=[1,2,3,4,5]
let a=arr.map((x)=>{
    return x+1
})
console.log(a)

// filter  :-It will show that how many satisfies the given condition  on whole of the array
let f=arr.filter((x)=>{
  return x<3
})
console.log(f)

// reduce   :-It shows thge sum of whole array
let sum=arr.reduce((x,y)=>{
    return x+y
})
console.log("sum :-",sum)