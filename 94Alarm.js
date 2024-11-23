// let num = prompt("enr time");
// num = parseInt(num);
function alarm() {
    setTimeout(() => {
        let audio = new Audio('alert_tone.mp3')
        audio.play();
    }, 1000)
}
alarm()