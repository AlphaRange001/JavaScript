let data = document.querySelectorAll(".input")[0]
function add() {
    let pdata = data.value
    let middle=document.createElement('p')
    middle.textContent=pdata
    let final=document.querySelectorAll(".container")[0]
    final.appendChild(middle)
    console.log(pdata)
}