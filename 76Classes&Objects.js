class studentForm {
    submit() {
        console.log( `${this.data} your rollno. is ${this.rollno} & your class is${this.classs}`)
    }
    reset() {
        console.log("Your form is reset")
    }
    name(name,rollno,classs) {
        this.data = name
        this.rollno = rollno
        this.classs = classs
        // console.log(this.data)
    }
}
let vivek = new studentForm()
vivek.name("vivekk","msc06","msc 1st year")
vivek.submit()