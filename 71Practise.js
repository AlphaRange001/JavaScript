
async function again(){
let a = await fetch("https://api.adviceslip.com/advice")
let ab=await a.json()
console.log(ab)

    ihtml = ""
    ihtml += `  
        <div class="card" style="width: 18rem;">
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR132TBAD0-GhGhN8_2Xr-3obkFd4NzFbk6Hg&s" class="card-img-top" alt="...">
        <div class="card-body">
            <h5 class="card-title">Today's Thought</h5>
            <p class="card-text">${ab.slip.advice}</p>
            <a href="#" class="btn btn-primary">Go somewhere</a>
        </div>
    </div>`

    cardcontainer.innerHTML = ihtml

}
again()


