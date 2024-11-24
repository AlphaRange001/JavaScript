// let num = prompt("enr time");
// num = parseInt(num);
// function alarm() {
//     setTimeout(() => {
//         let audio = new Audio('alert_tone.mp3')
//         audio.play();
//     }, 1000)
// }
// alarm() 


// let date = new Date()
// let datee = date.toDateString()
// let time = date.toTimeString()
// setTimeout(()=>{
//     let audio=new Audio('alert_tone.mp3')
//     audio.play()
// },1000)


let date = new Date()
let datee = date.toDateString()
console.log(datee)
let hourr=date.getHours()
console.log(typeof hourr)
let time = date.toTimeString() 
console.log(time);
console.log(time)
let GotHour=time.substring(0,2)
GotHour=parseInt(GotHour)
let GotMinute=time.substring(3,5)
GotMinute=parseInt(GotMinute)
let GotSecond=time.substring(6,8)
GotSecond=parseInt(GotSecond)
let GiveHour=prompt("Enter hour")
GiveHour=parseInt(GiveHour)
let GiveMinute=prompt("Enter Minute")
GiveMinute=parseInt(GiveMinute)
let GiveSecond=prompt("Enter Second")
GiveSecond=parseInt(GiveSecond)
let timeRemains=(GiveHour-GotHour)*60*60+(GiveMinute-GotMinute)*60+(GiveSecond-GotSecond)
console.log(timeRemains)

setTimeout(()=>{
    let audio=new Audio('alert_tone.mp3')
    audio.play()
},timeRemains*1000)
