// let a = document.getElementById("hello")
// console.log(a)
// a.append("bello")
// let b = document.getElementById("hello")
// b.append("<h1>hello</h1>")


//HTML insertion methods
let bodi = document.body
// bodi.style.border=  " 2px solid red"
let divi = document.createElement("h1")
divi.innerHTML = "hello"
bodi.append(divi)
//  bodi.prepend(divi)
// bodi.after(divi)
// bodi.before(divi)
// bodi.replaceWith(divi)