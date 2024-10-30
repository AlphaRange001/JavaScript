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


