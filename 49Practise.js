// Q-1

let but1=document.getElementsByClassName("first")[0]

but1.addEventListener('click',function(){
    alert("I'm button 1")
    but1.style.color="red"
})

let but2=document.getElementsByClassName("second")[0]

but2.addEventListener('click',function(){
    alert("I'm button 2")
    but3.style.color="red"
})

let but3=document.getElementsByClassName("third")[0]

// Q-2
let googlelink=document.querySelectorAll("a")[0]
let box=document.querySelectorAll("div")[0]

let google=document.getElementsByClassName("google")[0]
google.addEventListener('click',function(){
box.append(googlelink)
})
let goglelink=document.querySelectorAll("a")[0]

let googlelink2=document.querySelectorAll("a")[1]
let gogle=document.getElementsByClassName("gogle")[0]
gogle.addEventListener('click',function(){
box.prepend(googlelink2)
})

// Q-4
let b=document.getElementById("box1")
let a=setInterval(function(){
   box1.classList.toggle("ybox")
},10)
// let b=setInterval