let weather = fetch("https://goweather.herokuapp.com/weather/korba",{
    headers:{
        Authentication:'secrert'
    }
})
weather.then((value)=>{
    console.log(value);
    return value.json()
}).then((v)=>{
    console.log(v)
})