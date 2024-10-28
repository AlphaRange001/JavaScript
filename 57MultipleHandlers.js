let p1 = new Promise((resolve, reject) => {
    console.log("1")
    resolve(1)
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("2 second delay")
        }, 2000)

    })
})
p1.then(
    console.log("3sec")
)
p1.then(
    console.log("4sec")
)