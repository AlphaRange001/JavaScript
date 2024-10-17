function randomchar() {
    let char = "GSW"
    let length = char.length
    let random = char.charAt(Math.floor(Math.random() * (length)))
    return random
}
let botwin = 0,userwin = 0,tie=0

for (let i = 0; i < 10; i++) {
    let user = prompt("Enter:-")
    let bot = randomchar()
    console.log(bot)
    if (user == "G") {
        switch (bot) {
            case "G":
                console.log(bot)
                console.log("TIE")
                tie+=1
                break;
            case "W":
                console.log(bot)
                console.log("BOt Won")
                botwin += 1
                break;

            case "S":
                console.log(bot)
                console.log("You Won")
                userwin += 1
                break;
        }
    }

    else if (user == "W") {
        switch (bot) {
            case "G":
                console.log(bot)
                console.log("UserWon")
                userwin += 1
                break;
            case "W":
                console.log(bot)
                console.log("TIE")
                tie+=1
                break;

            case "S":
                console.log(bot)
                console.log("Bot Won")
                botwin += 1
                break;
        }
    }
    else if (user == "S") {
        switch (bot) {
            case "G":
                console.log(bot)
                console.log("Bot Won")
                botwin += 1
                break;
            case "W":
                console.log(bot)
                console.log("User Won")
                userwin += 1
                break;

            case "S":
                console.log(bot)
                console.log("TIE")
                tie+=1
                break;
        }
    }
    else {
        console.log("INVALID")
        break;
    }
}

console.log(`user wins ${userwin} and bot wins ${botwin} and tie happens ${tie} times`)
