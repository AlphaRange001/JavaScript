const a={
    name:"vivek",
    func:function (){
        let thiss=this
        setTimeout(() => {
            console.log(thiss.name)
        }, 1000);
    }
}
a.func()