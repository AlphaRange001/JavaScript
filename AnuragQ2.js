// ...................accordion.....................
let second = document.querySelectorAll("div")[1]
let first = document.querySelectorAll("div")[0]
let but = document.querySelectorAll("button")[0]

let view = true
function aa() {
    if (view == true) {
        second.style.display = "none"
    }
    else {
        second.style.display = ""
    }
    // view?second.style.display = "none":second.style.display = ""
    view = !view
}
let colorr=true
function colorchanger() {
    colorr ? second.style.backgroundColor = " rgb(67, 58, 58)" : second.style.backgroundColor = ""
    colorr ? first.style.backgroundColor = " rgb(67, 58, 58)" : first.style.backgroundColor = ""
    colorr = !colorr

}





























//......................theme Changer.................


// let frist = document.querySelectorAll("div")[0]
// let but=document.querySelectorAll("button")[0]
// let colorr = true

// function colorchanger() {
//     colorr ? frist.style.backgroundColor = " rgb(67, 58, 58)" : frist.style.backgroundColor = ""
//     colorr ? frist.style.color = "white" : frist.style.color = ""
//     // colorr ? but.style.innerHTML = "" : but.style.innerHTML = "black"
//     colorr = !colorr
// }