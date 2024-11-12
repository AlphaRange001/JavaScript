class college{
    name(naam){
        this.naam=naam
    }
}
class student extends college{
    age(saal){
        this.saal=saal
    }
   print(){
    console.log(`${this.naam}`)
   }
}

let st=new student()
st.name("vivek")
st.print()
