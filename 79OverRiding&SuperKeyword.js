class student {
    name(name1) {
        console.log(name1)
    }
}
class update extends student {
    name(name2) {
        super.name("vikkud")
        console.log(name2 + "is this")
    }
}
let s = new student()
s.name("vikku")
let a = new update()
a.name("vivek")