// Asynchronus

setTimeout(function (){
    console.log("process delay by 3 second")
},3000)
console.log(a)
console.log("hello")



function loader(srcc, callback) {
    let script = document.createElement("script")
    script.src = srcc
    script.onload = function () {
        console.log("hello")
        alert("hello");
        callback()
    }
    document.body.appendChild(script)
}
let gm = () => {
    alert("gm");
}
loader("https://code.jquery.com/jquery-3.6.0.min.js", gm)



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