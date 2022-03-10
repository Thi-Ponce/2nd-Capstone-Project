import './style.css';
import { fetchPokemon} from './modules/displayPokemon';
import pokeCounter from './modules/pokeCounter';

window.onload = () => {
    fetchPokemon();
    pokeCounter();
  };

