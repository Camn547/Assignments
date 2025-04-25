// my top 10 pokemon (non-specific order except first 3)
let mudkip = fetch('https://pokeapi.co/api/v2/pokemon/mudkip')
let braixen = fetch('https://pokeapi.co/api/v2/pokemon/braixen')
let absol = fetch('https://pokeapi.co/api/v2/pokemon/absol')
let flareon = fetch('https://pokeapi.co/api/v2/pokemon/flareon')
let zoroark = fetch('https://pokeapi.co/api/v2/pokemon/zoroark')
let cinderace = fetch('https://pokeapi.co/api/v2/pokemon/cinderace')
let meowscarada = fetch('https://pokeapi.co/api/v2/pokemon/meowscarada')
let mewtwo = fetch('https://pokeapi.co/api/v2/pokemon/mewtwo')
let typhlosion = fetch('https://pokeapi.co/api/v2/pokemon/typhlosion')
let groudon = fetch('https://pokeapi.co/api/v2/pokemon/groudon')

let myfavpoke = [mudkip, braixen, absol, flareon, zoroark, cinderace, meowscarada, mewtwo, typhlosion, groudon]

for(i in myfavpoke){
    myfavpoke[i]
   .then(response =>{
        if(!response.ok){throw new error('network response was bad: '+response.statusText)}
        return response.json()
    }).then(data =>{
        let name = data.name
        console.log(name)
        
        let BEXP = data.base_experience
        console.log(BEXP)
        
        let weight = data.weight
        console.log(weight)
        
        let abilities = data.abilities[0].ability.name
        console.log(abilities)
        
        let sprite = data.sprites.front_default
        console.log(sprite)
        
        let type = data.types[0].type.name
        console.log(type)
        
        return data
    })
    .catch(error=>{
        console.error("there's a problem: ", error)
    }) 
}
