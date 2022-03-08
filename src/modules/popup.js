import Pokemon from './pokemonClass.js';

export default class Popup {
  constructor(pokemon) {
    this.pokemon = new Pokemon(pokemon);
    this.pokemonName = `${pokemon}`;
    this.img = window.document.getElementById('pokemonImg');
    this.title = window.document.getElementById('pokemonName');
    this.weight = window.document.getElementById('Weight');
    this.types = window.document.getElementById('types');
    this.comments = window.document.getElementById('comments');
    this.comment = window.document.getElementById('comment');
    this.userName = window.document.getElementById('userName');
  }

  async updatePopup() {
    await this.pokemon.fetchPokemon();
    this.title.innertext = this.pokemonName;
    this.img.src = this.pokemon.picture;
    this.weight.innerHTML = `Weight: ${this.pokemon.weight}`;
    this.pokemon.types.forEach((type) => {
      const typeName = type.type.name;
      const typeElemet = window.document.createElement('li');
      typeElemet.innerText = typeName;
      this.types.appendChild(typeElemet);
    });
    console.log(this);
  }
}