import './style.css';
import Pokemon from './modules/pokemonClass.js';
import Popup from './modules/popup.js';

const Pokemons = ['pikachu', 'bulbasaur'];

Pokemons.forEach((pokemon) => {
  const pokemonObj = new Pokemon(pokemon);
  pokemonObj.fetchPokemon();
});

const popup = new Popup(Pokemons[0]);
popup.updatePopup();