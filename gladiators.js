class Gladiator {
    constructor(name, hp, weapon){
        this.name = name
        this.hp = hp
        this.weapon = weapon
        this.strength = Math.ceil(Math.random() * 20)
        this.defense = Math.ceil( Math.random() * 20 )
        this.wins = 0
    }

    warCry(){
        return `⚔️ I am ${this.name}!`
    }

    isAlive(){
        return this.hp > 0
    }

    attackOpponent(opponent){
        console.log(`${this.name} attacks ${opponent.name}`)
        opponent.hp -= Math.floor(Math.random() * 25) + this.strength - opponent.defense
        if(opponent.hp <= 0) {
            opponent.hp = 0
            console.log(`${opponent.name}'s HP is now ${opponent.hp}`)
        }
    }
}

const spartacus = new Gladiator("Spartacus", 100, "double swords")
// console.log(spartacus.warCry())
const crixus = new Gladiator("Crixus", 150, "war hammer")
// console.log(crixus.warCry())
// console.log(`Crixus HP: ${crixus.hp}`)
// spartacus.attackOpponent(crixus)
// console.log(`Crixus HP: ${crixus.hp}`)


// Arena class where Gladiators fight!
class Arena {
    constructor(name){
        this.name = name
        this.gladiators = []
    }

    enterGladiator(gladiator){
        this.gladiators.push(gladiator)
        console.log(gladiator.warCry())

        if(this.gladiators.length === 2){
            this.fight()
        }
    }

    fight(){
        const [g1, g2] = this.gladiators
        while(g1.isAlive() && g2.isAlive()){
            g1.attackOpponent(g2)
            if(g2.isAlive()){
                g2.attackOpponent(g1)
            }
        }
        const deadGladiator = g1.isAlive() ? g2 : g1
        const champion = g1.isAlive() ? g1 : g2
        champion.wins++
        console.log(`${champion.name} has won! He has defeated ${deadGladiator.name}`)
        console.log(`${champion.name} now has ${champion.wins} victorie(s)!`)
    }
}

const coliseum = new Arena('Coliseum')
coliseum.enterGladiator(spartacus)
coliseum.enterGladiator(crixus)

// console.log(coliseum)