let p1 = new Promise((resolve, reject) => {
    alert("On time")
    resolve("I am 1 sec delay")
})
p1.then((value) => {
    setTimeout(() => {
        alert(value)
    }, 1000)
   return new Promise((resolve, reject) => {
        resolve("2 sec delay")
    })
    return p2
}).then((value) => {
    setTimeout(() => {
        alert(value)
    }, 3000)
    return 24
}).then(() => {
    setTimeout(() => {
        alert(" 4 sec delay")
    }, 8000)
})



// let p1 = new Promise((resolve, reject) => {
//     console.log("1")
//     // reject()
// }).then((value) => {
//     setTimeout(() => {
//         console.log(value)
//     }, 2000)
// }, (error) => {
//     console.log("errior in 1")
// }).then(() => {
//     console.log("3")
// }).then(() => {
//     console.log("4")
// })


// loadeed script using promise 


// const f1=(src) =>{
//     return new Promise((resolve, reject) => {
//         let script = document.createElement("script")
//         script.src = src
//         document.body.appendChild(script)
//         script.onload = function () {
//             resolve("It's loaded succesfully")
//         }
//         script.onerror = function () {
//             reject()
//         }

//     })
// }
// let p1 = f1("https://code.jquery.com/jquery-3.6.0.min.js")
// p1.then((value) => {
//     console.log(value)
//     return f1("https://code.jquery.com/jquery-3.6.0.min.js")
// },(error)=>{
//     console.log("Error")
// }).then(console.log("2nd is ready"))




