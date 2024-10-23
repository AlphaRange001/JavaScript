// let but = document.getElementsByTagName("button")[0]
// let one = () => {
//     alert("hello1")
// }

// let two = () => {
//     alert("hello2")
// }

// but.addEventListener('click', one)


// but.addEventListener('click', two)
// let b = prompt("Enter no.-")
// if (b == "2") {
//     but.removeEventListener('click', two)
// }



// 2nd part


let but = document.getElementsByTagName("button")[0]
let one = (e) => {
    console.log(e)
    console.log(e.target)
    console.log(e.currentTarget)
    console.log(e.clientX)
    console.log(e.clientY)
    // alert("hello1")
}


but.addEventListener('click', one)
