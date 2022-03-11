import pokemonCounter from '../tests/pokemonCount';

export default async function pokeCounter() {
  fetch('https://pokeapi.co/api/v2/pokemon?limit=9')
    .then((response) => response.json())
    .then((allpokemon) => {
      const counter = pokemonCounter(allpokemon.results);
      const pokeCounter = document.querySelector('.pokeCounter');
      pokeCounter.innerHTML = `${counter} pokemon displayed`;
    });
}
