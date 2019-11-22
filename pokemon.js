class Pokemon {
    constructor(data) {
        this.name = data.name
        this.hp = data.stats[5].base_stat
        this.atk = data.stats[4].base_stat
        this.def = data.stats[3].base_stat
        this.sDef = data.stats[2].base_stat
        this.sAtk = data.stats[1].base_stat
        this.Spd = data.stats[0].base_stat
        this.abilities = []
    }
}

let pokeForm = document.getElementById('poke-form')

let PokemonAPI = async (id) => {

    let req = await fetch(`https://fizal.me/pokeapi/api/v2/id/${id}.json`)
    let data = await req.json()

    console.log(data)
    console.log(data.stats[5].base_stat)
    

}

