let pokeStats = document.getElementById('stats')
let pokeName = document.getElementById('pokeName')
let pokeHP = document.getElementById('HP')
let pokeAtk = document.getElementById('Atk')
let pokeDef = document.getElementById('Def')
let pokesDef = document.getElementById('sDef')
let pokesAtk = document.getElementById('sAtk')
let pokeSpd = document.getElementById('Spd')
let pokeAbility = document.getElementById('Abilities')
let pokeSprite = document.getElementById('pokeSprite')

let pokemonAPI = async (id) => {

    event.preventDefault()
    
    let req = await fetch(`https://fizal.me/pokeapi/api/v2/id/${id}.json`)
    let data = await req.json()
    
    
    console.log(data)
    
    showPokemon = () => {

        
        
        
        
        resetStats = () => {
    
            pokeName.innerText = ''
            pokeHP.innerText = 'HP: '
            pokeAtk.innerText = 'Atk: '
            pokeDef.innerText = 'Def: '
            pokesDef.innerText = 'S.Defense: '
            pokesAtk.innerText = 'S.Attack: '
            pokeSpd.innerText = 'Speed: '
            pokeAbility.innerText = 'Abilities: '
            
            
            
            
        
        }
        
        resetStats()
        
        

        pokeName.appendChild(document.createTextNode(`${data.name}`))
        
        pokeHP.appendChild(document.createTextNode(`${data.stats[5].base_stat}`))
        
        pokeAtk.appendChild(document.createTextNode(`${data.stats[4].base_stat}`))
        
        pokeDef.appendChild(document.createTextNode(`${data.stats[3].base_stat}`))
        
        pokesDef.appendChild(document.createTextNode(`${data.stats[2].base_stat}`))
        
        pokesAtk.appendChild(document.createTextNode(`${data.stats[1].base_stat}`))
        
        pokeSpd.appendChild(document.createTextNode(`${data.stats[0].base_stat}`,))
        
        pokeAbility.appendChild(document.createTextNode(''))

        for (let i = 0; i < data.abilities.length; i++) {
            pokeAbility.appendChild(document.createTextNode([`${data.abilities[i].ability.name},`]))
        }
        


        

        
        pokeStats.appendChild(pokeName)
        pokeStats.appendChild(pokeHP)
        pokeStats.appendChild(pokeAtk)
        pokeStats.appendChild(pokeDef)
        pokeStats.appendChild(pokesDef)
        pokeStats.appendChild(pokesAtk)
        pokeStats.appendChild(pokeSpd)
        pokeStats.appendChild(pokeAbility)

    }
    showPokemon()

    
    
    }