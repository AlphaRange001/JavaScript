let p1 = new Promise((resolve, reject) => {
    alert("On time")
    resolve("I am 1 sec delay")
})
p1.then((value) => {
    setTimeout(() => {
        alert(value)
    }, 1000)
    let p2 = new Promise((resolve, reject) => {
        resolve("2 sec delay")
    })
    return p2
}).then((value) => {
    setTimeout(() => {
        alert(value)
    }, 3000)
    return 24
}).then(() => {
    setTimeout(() => {
        alert(" 4 sec delay")
    }, 4000)
})

