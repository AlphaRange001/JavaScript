// class studentForm {
//     constructor(name,rollno,classs) {
//         this.data = name
//         this.rollno = rollno
//         this.classs = classs
//         console.log( `${this.data} your rollno. is ${this.rollno} & your class is${this.classs}`)
   
//     }
//     reset() {
//         console.log(this.data+"  Your form is reset")
//     }

// }
// let vivek = new studentForm("vivekk","msc06","msc 1st year")
// vivek.reset()




//.....................quiz.........................
class user{
    constructor(name,rollno,age){
        this.name=name
        this.rollno=rollno
        this.age=age

    }
    preview(){
        console.log(`your name is:${this.name} ,roll no. is:${this.rollno}& age is: ${this.age}`)
    }
}
let v=new user("viveek","21bscem17",20)
v.preview()