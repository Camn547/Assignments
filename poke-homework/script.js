const listElement = document.getElementById('pokemon-list');

fetch('https://pokeapi.co/api/v2/pokemon?limit=151')
  .then(response => response.json())
  .then(data => {
    let pokeResults = data.results;

    //gets the freaking details
    const detailPromises = pokeResults.map(poke =>
      fetch(poke.url).then(response => response.json())
    );

    //promises used as requested
    Promise.all(detailPromises)
      .then(pokeDetails => {
        // this FINASLLY sorts the pokemon by their pokedexorder, sucked
        pokeDetails.sort((a, b) => a.id - b.id);

        pokeDetails.forEach(pokeData => {
          let name = pokeData.name;
          let baseExp = pokeData.base_experience;
          let sprite = pokeData.sprites.front_default;
          let Type = pokeData.types[0]?.type.name;
          let Ability = pokeData.abilities[0]?.ability.name;

          //adds all the poke-info to the list
          let listItem = document.createElement('li');
          listItem.id= (`${Type}`)
          listItem.innerHTML = `
            <h2>#${pokeData.id} ${name}</h2>
            <p>Base Experience: ${baseExp}</p>
            <img src="${sprite}" alt="${name}" />
            ${Type ? `<p>Type: ${Type}</p>` : ''}
            ${Ability ? `<p>Ability: ${Ability}</p>` : ''}
          `;
          listElement.appendChild(listItem);
        });
      });
  })
  //au cas où il y aurait des erreurs (in case of errors)
  .catch(error => {
    console.error('Error fetching info:', error);
  });