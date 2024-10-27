// let script = document.createElement("script")
// function callbackhell(a, callback) {
//     script.src = a
//     document.body.appendChild(script)
//     script.onload = function () {
//         alert("loaded script Successfully" + a)
//         callback(null,a)
//     }
//     script.onerror = function () {
//         alert("loaded error")
//         callback(true,a)
//     }
// }
// callbackhell("https://code.jquery.com/jquery-3.6.0.min.js", function b(error, a) {
//     if (error) {
//         alert("#Error found in a" + a)
//         return
//     }
//     // gm(()=>{
//     //     alert("Executed Succesfully")
//     // })


//     alert("Executed Succesfully")

// })



//........................****copiolet questions****...............

//add two numbers


// function input(callback) {

//     let a = prompt("Enter 1st no.")
//     let b = prompt("Enter 2nd no.")
//     a = Number.parseInt(a)
//     b = Number.parseInt(b)
//     callback(a, b)
// }
// function sum(a, b) {
//     let c = a + b
//     alert(c)
//     return c
// }
// input(sum)

//2nd question

// function delay(detail){
//     console.log("Hey I,m on time")
//     setTimeout(detail,3000)
// }
// function data(){
//     alert("hello i am 3 sec late")
// }
// delay(data)

// 3rd question



// function arr(callback){
//     let array=[2,3,4,5,6]
// callback(array)
// }
// function call(input){
//     for (element of input){
//         alert(element)
//     }
// }
// arr(call)


// map


// let array=[2,3,4,5,6,7]
// let arr=array.map((a)=>
//   {  return a*3}
// )
// console.log(arr)

// filter


// let array=[2,5,0]
// let arr=array.map((a)=>
//   {  return a%3==0}
// )
// console.log(arr)

// reduce 

// let arr=array.reduce((a,b)=>{
//     return a+b
// })
// console.log(arr)
// console.log(typeof arr)


// Q-4

// let script = document.createElement("script")
// function iferror(src, callback) {
//     script.src = src
//     document.body.appendChild(script)
//     script.onload = function () {
//         alert("uploaded")

//         callback()
//     }
//     script.onerror = function () {
//         alert("you have an error in script")
//         callback(error)
//     }
// }
// function call() {
//     alert("executed succesfully")
// }
// iferror("https://code.jquery.com/jquery-3.6.0.min.js", call)


// Q-5
// function chain1(chain2) {
//     alert("I'm chain 1");
//     chain2();
// }

// function chain2(chain3) {
//     alert("I'm chain 2");
//     chain3();
// }

// function chain3(chain4) {
//     alert("I am chain 3");
//     chain4();
// }

// function chain4() {
//     alert("I am chain 4");
// }

// // Start the chain
// chain1(() => chain2(() => chain3(chain4)));




// let a=document.createElement("button")
// a.innerHTML="bello"
// document.body.append(a)
// let b=document.getElementsByTagName("button")[0]
// function hello(){
// alert("how are you hello")
// }
// function bello(){
// alert("how are you bello")
// }
// a.addEventListener('click',bello)
// b.addEventListener('click',hello)


//Q-6

// function inner(callback) {
// let a = document.getElementsByTagName("button")[0]
//     a.innerHTML = "button1"
//     callback(a)
// }

// function callbackk(z) {
//     function alertt() {
//         alert("Hello button1")
//     }
//     z.addEventListener('click', alertt)
// }

// inner(callbackk)


function arr(callback) {
    let a = [1, 2, 3, 5, 6, 7]
    callback(a)
}

function callbackk(a) {
    let b = a.map((element) => {
        return element * 8
    }
    )
    alert(b)
}
arr(callbackk)




// let arr=[4,5,6,7]
// arr.map((a)=>{
//     return a*3
// })

// console.log(arr)