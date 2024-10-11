//  1st question

// let obj={
//     harry:50,
//     rohan:40,
//     sohan:30
// }
// for(a in obj){
//     console.log(a+" got "+obj[a]+" marks")
// }


// 3 question


// let a = 5

// for (let i = 0; i <= 100; i++) {
//     let input = prompt("Enter your chosen number");
//     input = Number.parseInt(input)
//     if (a == input) {
//         console.log("matched")
//         break;
//     } else {
//         console.log("Try again")

//     }
// }


// 5th questioon

let sum = 0;
for (let i = 0; i <= 4; i++) {
    let a = prompt("Enter no.:")
    a = Number.parseInt(a)
    sum = sum + a
}
console.log("Sum is :"+sum)