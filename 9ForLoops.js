// for in & of 


let fruits = {
    vivek: "patel",
    vikas: "kumar"
}
for (let a in fruits) {
    console.log("my name is " + a + " and surname is" + fruits[a])
}
for (let b of "fruits") {
    console.log("my name is " + b + " and surname is" + fruits[b])
}

// for loops


for (let i=0 ;i<=5;i++){
    console.log(i)
}


// while loops
let a=prompt("Enter number:")
a=Number.parseInt(a)
while(a>0){
    alert(a)
    a--
}