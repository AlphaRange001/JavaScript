 let a={
   a:"heek"
}
console.log(a)
let p={
name:()=>{
    console.log("vivek")
}}
let q={
    class:"msc it"
}
p.__proto__=q
a.__proto__=p
console.log(a.class)
a.name()