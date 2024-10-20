let first = document.body.firstElementChild.firstElementChild.firstElementChild.firstElementChild
first.style.color = "red"

// Q-2

let tablet = document.getElementsByTagName("table")
console.log(tablet.tBodies)

// Q-3

let first = document.body.firstElementChild.firstElementChild.firstElementChild
first.firstElementChild.style.color = "red"
first.lastElementChild.style.color = "red"

// Q-4

let listl = document.querySelectorAll("li")
listl.forEach((elementr) => elementr.style.color = "red")