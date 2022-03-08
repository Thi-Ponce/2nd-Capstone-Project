import './style.css';
import Pokemon from './modules/pokemonClass.js';

const Pokemons = ['pikachu', 'bulbasaur'];

Pokemons.forEach((pokemon) => {
  const pokemonObj = new Pokemon(pokemon);
  pokemonObj.fetchPokemon();
});