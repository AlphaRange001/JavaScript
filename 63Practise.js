// Q-1

// let script = document.createElement("script")
// function sloader(src) {
//     let p2 = new Promise((resolve, reject) => {
//         script.src = src
//         document.body.appendChild(script)
//          resolve(1)
//     }).then((v) => {
//         alert(v)
//     })

// }
// sloader("https://code.jquery.com/jquery-3.6.0.min.js")


// Q-2

// let script = document.createElement("script")
// async function f1(src) {
//     setTimeout(() => {
//         script.src = src
//         document.body.appendChild(script)
//         alert("Loaded Successfully1")
//     }, 4000)


// }
// let script1 = document.createElement("script")
// async function f2(src) {
//     setTimeout(() => {
//         script1.src = src
//         document.body.appendChild(script1)
//         alert("Loaded Successfully2")
//     }, 2000)

// }


// async function main() {
//     let a = await f1("https://code.jquery.com/jquery-3.6.0.min.js")
//     let b = await f2("https://code.jquery.com/jquery-3.6.0.min.js")
//     return [a, b]
// }
// main()


// async function f1() {

//     setTimeout(() => {
//         // try {
//             let p1 = new Promise((resolve, reject) => {
//               return  reject("This have an error")
//             })
//         // }
//         // catch (error) {
//         //     alert(error)
//         // }
//     }, 3000)
// }
// f1()


async function a1() {
    let p1 = new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("I am first waitng 2 sec")
            resolve(1)
        }, 2000)
    })
    let p2 = new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("I am second waitng 4 sec")
            resolve(2)
        }, 4000)
    })
    let p3 = new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("I am third waitng 6 sec")
            resolve(3)
        }, 6000)
    })
    let a = await p1
    let b = await p2
    let c = await p3
return[a,b,c]
}
a1()