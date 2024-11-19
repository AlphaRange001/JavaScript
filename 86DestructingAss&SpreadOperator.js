// ................Destructuring .........................

let a=[2,3,4,5,6,7]
// let[b,c]=a
// console.log(b)
let[v,c,...rst]=a
console.log(v,rst)

let{f,b}={a:1,b:3}
console.log(f);

// .................Spread Operator............................

let arr=[1,3,5]
let obj={...arr}
function add(a,b,c){
    return a+b+c
}
console.log(add(...arr))

let obj1={
    name:"vivek",
    classs:"msc"
}
console.log({...obj1,name:"patel"})
// console.log({name:"patel",...obj1})  --------This will not work