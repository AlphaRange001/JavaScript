// async function global() {
//     let p1 = new Promise((resolve, reject) => {

//         setTimeout(() => {
//             console.log("5 second late")
//         }, 2000)
//         setTimeout(() => {
//             console.log("i am 10 sec delay")
//             resolve("10 second late")
//         }, 10000)
//     })

//     let p2 = new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve("2 second late")
//         }, 1000)
//     })
//     let o1 = await p1
//     console.log(o1)
//     let o2 = await p2
//     console.log(o2)
//     return [o2, p1]
// }

// async function global2() {
//     console.log("I am on time")

// }

// async function main1() {
//     let a = await global()
//     let b = await global2()
//     return [a, b]
// }
// main1()


async function a1() {

    let p1 = new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("hello i am a1 p1")
        }, 2000)
        resolve(1)
    })
    let p2 = new Promise((resolve, reject) => {
        console.log("hello i am a1 p2")
        resolve(1)
    })

    // resolve(1)
    return [p1, p2]

}

async function a2() {
    console.log("I am a2 p2")
}

async function awaiting() {
    let a = await a1()
    let b = await a2()
    return [a1, a2]
}
awaiting()