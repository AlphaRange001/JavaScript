class student {
    constructor(name) {
        console.log(name)
    }
    name(name1) {
        this.namee = name1
        console.log(this.namee)
    }
}
class update extends student {
    name(name2) {
        super.name("vikkud")
        console.log(name2 + "is this")
    }
    constructor(name) {
        super(name)
        console.log(name)
    }
}
let s = new update("vixvek")
