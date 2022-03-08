import Pokemon from './pokemonClass.js';

export default class Popup extends Pokemon {
  constructor(pokemon) {
    super(pokemon);
    this.img = window.document.getElementById('pokemonImg');
    this.title = window.document.getElementById('pokemonName');
    this.weightElement = window.document.getElementById('Weight');
    this.typesElement = window.document.getElementById('types');
    this.commentsDiv = window.document.getElementById('comments');
    this.commentInput = window.document.getElementById('comment');
    this.userName = window.document.getElementById('userName');
  }

  async populateHtml() {
    await this.fetchPokemon().then(() => {
      console.log(this);
      console.log(this.weight);
      this.title.innerText = this.pokemonName;
      this.img.src = this.picture;
      this.weightElement.innerText = `Weight: ${this.weight}`;
      this.types.forEach((type) => {
        const typeName = type.type.name;
        const typeElement = window.document.createElement('li');
        typeElement.innerText = typeName;
        this.typesElement.appendChild(typeElement);
      });
    });
  }
}