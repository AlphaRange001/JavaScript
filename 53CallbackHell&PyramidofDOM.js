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

// function chain1(chain2){
//     alert("I'm chain 1")
// chain2()
// }
// function chain2(){
//     alert("I,m chain2")
//     chain3()
// }
// chain1(chain2)
// function chain3(){
//     alert("I am chain3")
//     chain4()
// }
// chain2(chain3)
// function chain4(){
//     alert("i ma chain4")
// }

























