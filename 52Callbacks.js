// Asynchronus

setTimeout(function (){
    console.log("process delay by 3 second")
},3000)
console.log(a)
console.log("hello")



// function loader(srcc, callback) {
//     let script = document.createElement("script")
//     script.src = srcc
//     script.onload = function () {
//         console.log("hello")
//         alert("hello");
//         callback()
//     }
//     document.body.appendChild(script)
// }
// let gm = () => {
//     alert("gm");
// }
// loader("https://code.jquery.com/jquery-3.6.0.min.js", gm)



function add(a,b){
    if(a==0){
        alert(`you are ${a}`)
    }
    b()
}
function hello(){
    alert("yes i have already executed this function")
}
add(11,hello)


// isse samjho acche se call back

function input(callback) {

    let a = prompt("Enter 1st no.")
    let b = prompt("Enter 2nd no.")
    a = Number.parseInt(a)
    b = Number.parseInt(b)
    callback(a, b)

}
function sum(a, b) {
let c = a + b
alert(c)
return c
}
input(sum)