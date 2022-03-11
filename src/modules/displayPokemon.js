import renderPokemon from './renderingPokemon.js';

export const fetchPokemonData = async (pokemon) => {
  const { url } = pokemon;
  const response = await fetch(url);
  const data = await response.json();
  renderPokemon(data);
};

export const fetchPokemon = async () => {
  const response = await fetch('https://pokeapi.co/api/v2/pokemon?limit=9');
  const jsonData = await response.json();
  const allpokemon = await jsonData.results;
  allpokemon.forEach((pokemon) => {
    fetchPokemonData(pokemon);
  });
};
