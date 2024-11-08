const createtodo = async (todo) => {
    let add = {
        method: 'POST',
        headers: {
            "Content-type": "application/json"
        },
        body: JSON.stringify(todo)
    }
    let fetchh = await fetch('https://jsonplaceholder.typicode.com/posts', add)
    let response = await fetchh.json()
    return response

}
const mainfunc = async () => {
    let todo = {
        title: "vikku",
        body: "hello"
    }
    let todor = await createtodo(todo)
    console.log(todor)
}
mainfunc()