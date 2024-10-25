let a=new Date()
let h=a.getHours()
let m=a.getMinutes()
let s=a.getSeconds()
let d=a.getDate()
let mo=a.getMonth()+1
let y=a.getFullYear()
// console.log(h,d,mo,y)

let point=document.querySelectorAll("li")
let arrpoint=Array.from(point)
let count=0
let func=function(){
    while(count<3){
        if(count==0){
            arrpoint[count].innerHTML=h
        }
        else if(count==1){
            arrpoint[count].innerHTML=m
        }
        if(count==2){
            arrpoint[count].innerHTML=s
        }
    console.log(arrpoint[count])
    count++
}}
console.log(func())


// let count=0
// let array =[h,m,s,d,mo,y]
// for(a of array){
// console.log(array[count])
// count++
// }