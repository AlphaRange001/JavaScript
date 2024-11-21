
function a(num) {
    return {
        decrement() {
            // console.log(num)
            return num=num-1
        },

     increment() {
            // console.log(num)
            return num=num+1
        }
    }
}
let func = a(9)

console.log(func.decrement());
console.log(func.increment());
