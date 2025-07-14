function Character (name, speed, maneuverability, power) {
    this.name = name
    this.speed = speed;
    this.maneuverability = maneuverability;
    this.power = power
    this
}

const mario = new Character("Mário", 4, 3, 3)
const luigi = new Character("Luigi", 3, 4, 4)
const peach = new Character("Peach", 3, 4, 2)
const yoshi = new Character("Yoshi", 2, 4, 3) 
const bowser = new Character("Bowser", 5, 2, 5)
const donkeyKong = new Character("Donkey Kong", 2, 2, 5)

async function rollDice (){
    return Math.floor(Math.random() * 6) + 1
}

console.log(rollDice())