let calpha = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
let alpha = "abcdefghijklmnopqrstuvwqyz"
let numb = "0123456789"
let special = "@#$%^&"
class password {
    SuperStrongPassword(length) {
        let pass = '';
        let len = length / 2
        for (let i = 0; i < 1; i++) {
            let generatedcalpha = Math.floor(Math.random() * calpha.length)
            pass += calpha[generatedcalpha]
        }
        for (let i = 0; i < len; i++) {
            let generatedalpha = Math.floor(Math.random() * alpha.length)
            pass += alpha[generatedalpha]
        }
        for (let i = 0; i < len; i++) {
            let generatednumb = Math.floor(Math.random() * numb.length)
            pass += numb[generatednumb]
        }
        for (let i = 0; i < len / 2; i++) {
            let generatedspecial = Math.floor(Math.random() * special.length)
            pass += special[generatedspecial]
        }
        return pass
    }
    StrongPassword(length) {
        let pass=''
        let len = length / 2
        for (let i = 0; i < len; i++) {
            let generatedalpha = Math.floor(Math.random() * alpha.length)
            pass += alpha[generatedalpha]
        }
        for (let i = 0; i < len; i++) {
            let generatednumb = Math.floor(Math.random() * numb.length)
            pass += numb[generatednumb]
        }
        for (let i = 0; i < 1; i++) {
            let generatedspecial = Math.floor(Math.random() * special.length)
            pass += special[generatedspecial]
        }
        return pass
    }
    FunnyPass() {
        let arr = ["password", "agent", "admin", "laugh"]
        let passt = Math.floor(Math.random() * arr.length)
        return arr[passt]
    }
}
let p1 = new password()
    
    document.querySelector(".SuperStrong").addEventListener('click', function () {

        let ssp=document.querySelector("div")
        ssp.textContent =  p1.SuperStrongPassword(8);
    })
    
    document.querySelector(".Strong").addEventListener('click', function () {
        document.querySelector("div").textContent = p1.StrongPassword(8)
    })
    
    document.querySelector(".Funny").addEventListener('click', function () {
        document.querySelector("div").textContent = p1.FunnyPass()
    })




