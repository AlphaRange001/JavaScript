//  1st

 function two() {
    console.log("hello")
        setTimeout(() => {
            console.log("world")
        }, 2000)
}
two()

// 2nd 

function arr(a,b,c){
return (a+b+c)/3
}
let z=[1,2,3]
console.log(arr(...z))


// 3rd 
let a = prompt("enter no.")
a = parseInt(a);
    (function js() {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                console.log(`I am ${a} sec late`);
                resolve(a)
            }, a * 1000);
        })
    })()

// 4th

function intrest(a,b,c){
    return (a*b*c)/100
}
let a=prompt("enter amount")
a=parseInt(a);
let r=prompt("enter rate")
r=parseInt(r);
let t=prompt("enter time")
t=parseInt(t);
intrest(a,r,t)