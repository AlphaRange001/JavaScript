let age = prompt("enter youur age :-")
age = Number.parseInt(age)
if (age >= 18) {
    alert("you can drive")
}
else if (age < 18) {
    alert("you can't drive")
}
else {
    console.error("Erroe happend")
}
let re = confirm("Do you want to see result again")
if (re) {
    if (age > 18) {
        alert("you can drive")
    }
    else if (age < 18) {
        alert("you can't drive")
    }
    else {
        console.error("Erroe happend")
    }
}
let color = prompt("Enter your color")
a=Number.parseInt(a)

document.body.style.color=color
