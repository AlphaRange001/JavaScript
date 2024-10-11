// 1

// let a = prompt("Enter your age ")
// a = Number.parseInt(a)
// if (a > 10 && a < 20) {
//     alert("you are fit to  work")
// }
// else {
//     alert("you are not fit")
// } 

// 2


// Instead of using conditional statement we canuse switch statements we can use switch statemnt it is most efficient way


// 3

let a = prompt("Ente9r number")
a = Number.parseInt(a)
if (a % 2 == 0 && a % 3 == 0) {
    alert("It's divisible by 2 & 3 both")
}
else if (a % 2 == 0) {
    alert("This is divisible by 2")
}
else if (a % 3 == 0) {
    alert("This is divisible by 3")
}
else {
    alert("This is not divisible by both of them")
}