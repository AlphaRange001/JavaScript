let size=prompt("enter size:")
size=Number.parseInt(size)
function add(x){
    let br = document.createElement(br)
    let header=document.body.getElementsByTagName("div")[0]
        header.append(br)
    header.append(x)

    
    // let a=prompt("Enter name")

}
for(let i=0;i<=size;i++){
let a=prompt("Enter your name:")
add(a)
}