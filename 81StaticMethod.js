class namee {
    enter(name) {
        this.name = namee.capital(name)
        console.log(this.name)
    }
    static capital(name) {
        return name.charAt(0).toUpperCase() + name.substr(1, name.length)
    }
}
class b extends namee{
    slect(name6){
        this.name=namee.capital(name6)
        console.log(this.name)
    }
}

let a = new namee()
let select=new b()
select.slect("vikkj")
a.enter("vikke ")