    class Pokemon {
        constructor(name) {
            this.name = ''
            this.hp = ''
            this.atk = ''
            this.def = ''
            this.sDef = ''
            this.sAtk = ''
            this.spd = ''
            this.abilities = []
    }

    
}

class Pokemon1 extends Pokemon {
    constructor(name) {
        super(name)
    }
}
class Pokemon2 extends Pokemon {
    constructor(name) {
        super(name)
    }
}
class Pokemon3 extends Pokemon {
    constructor(name) {
        super(name)
    }
}


let pokemon1 = new Pokemon('')
let pokemon2 = new Pokemon2('')
let pokemon3 = new Pokemon3('')

class Trainer {
    constructor(name) {
        this.name = name
        this.pokemon = [pokemon1, pokemon2, pokemon3]
    }

    get(name) {
        console.log(data)
    }
}

let trainer = new Trainer('Test')
