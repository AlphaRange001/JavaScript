let p1 = new Promise((resolve, reject) => {
    setTimeout(() => {
        console.log("Done 1")

    }, 10003)
    resolve(1)
})
let p2 = new Promise((resolve, reject) => {
    setTimeout(() => {
        console.log("Done 2")
    }, 2000)
    reject(new Error("Error in 2nd"))
})
let p3 = new Promise((resolve, reject) => {
    setTimeout(() => {
        console.log("Done 3")
    }, 3000)
    resolve(3)
})
// let P_All=Promise.all([p1,p2,p3])
let P_All=Promise.allSettled([p1,p2,p3])
// let P_All=Promise.race([p1,p2,p3])
// let P_All=Promise.resolve(4)
// let P_All = Promise.reject(4)

P_All.then((value) => {
    console.log(value)
})