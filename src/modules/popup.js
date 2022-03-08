import Pokemon from './pokemonClass.js';

export class Popup extends Pokemon {
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
}

const popup = new Popup('pikachu');

export async function populateHtml() {
  await popup.fetchPokemon().then(async () => {
    console.log(popup);
    console.log(await popup.getWeight());
    popup.title.innerText = popup.pokemonName;
    popup.img.src = popup.picture;
    popup.weightElement.innerText = `Weight: ${popup.weight}`;
    popup.types.forEach((type) => {
      const typeName = type.type.name;
      const typeElemet = window.document.createElement('li');
      typeElemet.innerText = typeName;
      popup.typesElement.appendChild(typeElemet);
    });
  });
}