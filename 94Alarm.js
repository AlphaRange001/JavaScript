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
let GotHour = date.getHours()
let GotMinute = date.getMinutes()
let GotSecond = date.getSeconds()
let GiveHour, GiveMinute, GiveSecond;
let GetMinute, GetHour, GetSecond;

function add() {
    GiveHour = document.querySelector(".first")
    GetHour = GiveHour.value
    GetHour = parseInt(GetHour)
    console.log(GetHour);

    GiveMinute = document.querySelector(".second")
    GetMinute = GiveMinute.value
    GetMinute = parseInt(GetMinute)
    console.log(GetMinute)
    console.log(GetMinute)

    GiveSecond = document.querySelector(".third")
    GetSecond = GiveSecond.value
    GetSecond = parseInt(GetSecond)
    console.log(GetSecond);
    let timeRemains = (GetHour - GotHour) * 60 * 60 + (GetMinute - GotMinute) * 60 + (GetSecond - GotMinute)
    alert(`${timeRemains - 15} second remains`)
    if (timeRemains < 0) {
        alert("Kyu Samay ke piche jama chahte ho")
    }
    else {
        setTimeout(() => {
            let audio = new Audio('alert_tone.mp3')
            audio.play()
            setInterval(function hovereffect() {
                let image = document.querySelector("img");
                image.style.transform = "scale(1.2)"
            }, 100)
            setInterval(function hovereffect() {
                let image = document.querySelector("img");
                image.style.transform = "scale(1)"
            }, 100)
        }, (timeRemains) * 1000)
    }
    let alarmadd = document.createElement("p")
    alarmadd.textContent = `Your alarm is registered for ${GetHour}:${GetMinute}:${GetSecond} & Remaining time is:   ${timeRemains}seconds`
    let divi = document.querySelector(".button1")
    divi.appendChild(alarmadd)
}
document.querySelector(".button").addEventListener('click', add)
