let a=fetch("https://api.spacexdata.com/v5/launches/latest")
a.then((a)=>{
    return a.json()
}).then((ab)=>{
    console.log(ab)
})