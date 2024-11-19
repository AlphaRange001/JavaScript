let a = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
           console.log('hrl');
        resolve(33)
        }, 3000);
    }
   
    )}

  ( async function () {
        let b = await a()
        console.log(b)
        let c = await a()
        console.log(c)
    })()

