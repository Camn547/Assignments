const listElement = document.getElementById('pokemon-list');

fetch('https://pokeapi.co/api/v2/pokemon?limit=151')
  .then(response => response.json())
  .then(data => {
    let pokeResults = data.results;

    // Fetch all Pokémon details and collect promises
    const detailPromises = pokeResults.map(poke =>
      fetch(poke.url).then(response => response.json())
    );

    Promise.all(detailPromises)
      .then(pokeDetails => {
        // this should sort the pokemon by their pokedexorder
        pokeDetails.sort((a, b) => a.id - b.id);

        pokeDetails.forEach(pokeData => {
          let name = pokeData.name;
          let baseExp = pokeData.base_experience;
          let sprite = pokeData.sprites.front_default;
          let Type = pokeData.types[0]?.type.name;
          let Ability = pokeData.abilities[0]?.ability.name;

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
  .catch(error => {
    console.error('Error fetching info:', error);
  });