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
    this.closeButton = window.document.getElementById('close');
    this.popup = window.document.querySelector('#popup');
  }

  async populateHtml() {
    await this.fetchPokemon().then(() => {
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
    await this.updateComments().then(() => {
      this.comments.forEach((comment) => {
        const userName = comment.username;
        const commentary = comment.comment;
        const pokemon = comment.pokemonName;
        if (pokemon === this.pokemonName) {
          const text = `${userName}: ${commentary}`;
          const li = document.createElement('li');
          li.innerText = text;
          this.commentsDiv.appendChild(li);
        }
      });
    });
  }

  closePopup() {
    const btn = this.closeButton;
    const pop = this.popup;
    btn.addEventListener('click', () => {
      pop.style.display = 'none';
    });
  }

  showPopup() {
    const btn = this.closeButton;
    const pop = this.popup;
    btn.addEventListener('click', () => {
      pop.style.display = 'block';
    });
  }

  countComments() {
    const count = this.updateComments().length;
    return count;
  }
}