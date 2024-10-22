let bodi=document.body
let addd=document.createElement("h2")
addd.innerHTML= "hello"
let a=setInterval(func=(()=>{
    alert("hello")
    if(confirm){
        addd.insertAdjacentText("afterend","hello")
    }
    bodi.append(addd)
}) ,1000)

// let b=setTimeout(func=(()=>{
//     alert("hello")
// }) ,10000)

// yaha se concept banaya or uupra dala hu

// let ab=document.querySelectorAll("div")[0]
// ab.insertAdjacentText("afterend","hello")