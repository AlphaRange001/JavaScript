function generate(x) {
    return Math.ceil(Math.random()*x)
}
let givenno=generate(100)
console.log(givenno)
let input
while(input!=givenno){
   input=prompt("Enter a number")
    input=Number.parseInt(input)
    if(givenno>input){
        console.log("It's smaller")
    }
    else if(givenno<input){
        console.log("It's greater")
    }
    else if(givenno==input){
        console.log("Correct")
        break;
    }
}