function hackerman() {
    let arr = ["Getting your id","Getting your user name","Your password is detecting ","Password has been detected"]
   arr.forEach((a,interval)=>{
        setTimeout(()=>{
        console.log(a)
    },interval*2000)
    })
}
hackerman()




