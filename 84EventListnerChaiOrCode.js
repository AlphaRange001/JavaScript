let first=document.querySelectorAll("button")[0]
let second=document.querySelectorAll("button")[1]
function firstt(){
    alert("hello 1")
}
function secondd(){
    alert("hello 2")
}
first.addEventListener('click',function(e){
    console.log(e)
})
second.addEventListener('click',secondd)


// // ...................Bubbling............

document.querySelector("ul").addEventListener('click', function (e) {
    console.log("I am parent")
}, true)
document.querySelectorAll("button")[0].addEventListener('click', function (e) {
    console.log("I am child")
}, true)


// ...................Capturing............

let button = document.querySelectorAll("button")

button.forEach((a) => {
    a.addEventListener('click', function (e) {
        console.log("I am parent")
    }, true)
})
document.querySelectorAll("ul")[0].addEventListener('click', function (e) {
    console.log("I am child")
}, true)


// .......................setpropagation ----it willl stop pointing its parent for that position

// document.querySelector(".first").addEventListener('click', function (e) {
//     console.log("first")
// })
// document.querySelector(".second").addEventListener('click', function (e) {
//     console.log("second")
//     e.stopPropagation()
// })
// document.querySelector(".third").addEventListener('click', function (e) {
//     console.log("third")

// })

//................... preventdefault.................
// document.querySelector("a").addEventListener('click',function(e){
//     console.log("going to google")
//     e.preventDefault()
// },false)



// .....................target and tagname.................

document.querySelectorAll("button").forEach((a) => {
    a.addEventListener('click', function (e) {
        a.remove()
        console.log(e.target.tagName);
        // console.log(e.target.innerHTML);
    })
})