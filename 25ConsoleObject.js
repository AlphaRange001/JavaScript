console.error("this is error")
console.assert(3<4)
// console.clear()
obj={a:1,b:2,c:3}
console.table(obj)
console.warn("this is so warn now")

// how to find the time for execution of loops
console.time("forloop")
for(let i=0;i<=5;i++){
    console.log(i)
}
console.timeEnd("forloop")
console.time("whileloop")
let j=5
while(j>0){
    console.log(j)
    j--
}
console.timeEnd("whileloop")