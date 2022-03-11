import pokemonCounter from '../tests/pokemonCount';

const pokeCounter = async () => {
  const response = await fetch('https://pokeapi.co/api/v2/pokemon?limit=9');
  const allpokemon = await response.json();
  const display = async () => {
    const counter = await pokemonCounter(allpokemon.results);
    const pokeCounter = document.querySelector('.pokeCounter');
    pokeCounter.innerHTML = `${counter} pokemon displayed`;
  };
  display();
};

export default pokeCounter;