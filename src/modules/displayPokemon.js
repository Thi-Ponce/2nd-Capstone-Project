import renderPokemon from './renderingPokemon.js';
import { countLikes}  from './likeCounter.js'

export function fetchPokemonData(pokemon) {
  const { url } = pokemon;
  fetch(url)
    .then((response) => response.json())
    .then((pokeData) => {
      renderPokemon(pokeData);
    });
}

export function fetchPokemon() {
  fetch('https://pokeapi.co/api/v2/pokemon?limit=9')
    .then((response) => response.json())
    .then((allpokemon) => {
      allpokemon.results.forEach((pokemon) => {
        fetchPokemonData(pokemon);
      });
    });
}