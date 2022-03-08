import './style.css';

const Pokemons = ['pikachu', 'bulbasaur'];

class Pokemon {
  constructor (pokemon_name) {
    this.pokemon_name = pokemon_name;
    this.url = `https://pokeapi.co/api/v2/pokemon/${this.pokemon_name}`;
  }

  async fetchPokemon() {
    const response = await fetch(this.url)
      .then((response) => response.json)
      .then((response) => console.log(response.json));
    return response;
  }
}

Pokemons.forEach((pokemon) => {
  const pokemonObj = new Pokemon(pokemon);
  pokemonObj.fetchPokemon();
});