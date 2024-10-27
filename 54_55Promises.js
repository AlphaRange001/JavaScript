// ...................BASIC.......................


let promise=new Promise(function(resolve,reject){
    console.log("promise completed")
    reject(56)
})
alert(promise)
console.log("hello 1")
setTimeout(function(){
    console.log("hello2 delayed by 2 sec")
},2000)
console.log("hello3")
console.log(promise)


//....................resolve and reject.....................

let p1 = new Promise((resolve, reject) => {
    alert("I am 1st")
    setTimeout(() => {
        alert("i am 3 second late")
    }, 3000)
    reject(1)
})

let p2 = new Promise((resolve, reject) => {
    alert("I am 2nd")
    setTimeout(() => {
        alert("I am 2 second late")
    }, 2000)
    reject(new Error("I am 2nd error"))
})

// // .........................for both at combo pack try and catch we use this...................
p1.then((value)=>{
    alert(value)
},(error)=>{
    alert("error in 1")
})

// // .........................for single try and catch we use this...................

p1.then((value)=>{
    alert(value)
})

p2.catch((error)=>{ 
    alert("error found in 2")
})


let a=prompt("enter number :")
a=Number.parseInt(a)


