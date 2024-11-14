class mai {
    // const(name) {
    //     this.naam = name
    // }
    constructor(name) {
        this.naam = name
    }
    get naame() {
        return this.naam
    }
    set naame(newname) {
        this.naam = newname
    }
}
// class b extends mai{

// }
let a = new mai("vivek")
// let become=new b()
let c = 9
console.log(a.naam)
a.naam = "vikki"
console.log(a.naam)
console.log(a instanceof mai)
console.log(become instanceof mai)

// a.const("vivek")
// console.log(a.naam)
// a.naame="viveke"
// console.log(a.naam)