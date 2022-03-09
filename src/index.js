import './style.css';
import Pokemon from './modules/pokemonClass.js';
import Popup from './modules/popup.js';

const Pokemons = ['pikachu', 'bulbasaur'];

Pokemons.forEach((pokemon) => {
  const pokemonObj = new Pokemon(pokemon);
  pokemonObj.fetchPokemon();
});

const pop = new Popup(Pokemons[0]);
pop.populateHtml();
pop.closePopup();
