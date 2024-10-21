// document.getElementsByClassName("hello")[0].innerHTML="what happen"

// way-2

 document.querySelectorAll(".hello").forEach((element)=>element.innerHTML="bello")
 let a=document.getElementsByClassName("hello")[0]
 a.innerHTML

a.outerHTML
a.outerHTML="<div>hello</div>"

console.log(document.body.textContent)

let hide=document.getElementsByClassName("elemrnt")
hide.hidden=false