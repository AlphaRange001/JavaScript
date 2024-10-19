//    36 iska html file hai

let mat = document.getElementsByClassName("card")[0]
let firstbot=document.getElementsByClassName("firstbotx")[0]
console.log(mat.matches(".card"))
console.log(firstbot.closest(".card"))
console.log(mat.contains(firstbot))