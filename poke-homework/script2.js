let pokemon = fetch('https://pokeapi.co/api/v2/pokemon?limit=10')

let myfavpoke = [pokemon.data]

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
