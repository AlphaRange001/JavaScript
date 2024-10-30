// try {
//     console.log(vikku)
//     throw new ReferenceError(harry)
// }
// catch (error) {
//     // console.log("error")
//     console.log(error.name)
//     console.log(error.message)
//     console.log(error.stack)
// }



try {
    let a = prompt("Enter an age")
    a = Number.parseInt(a)
    if (a < 18) {
        throw new ReferenceError("Who gave you car")
    }
}
catch (error) {
    alert("error")
    alert(error.name)
    alert(error.message)
    alert(error.stack)
}