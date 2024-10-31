function f1() {
    try {
        console.log("hello")
        console.log(hello)

    }
    catch (error) {
        console.log("error detected")
        // console.log(p)
        return

    }
    finally {
        console.log("hello finally")
    }
}


f1()


