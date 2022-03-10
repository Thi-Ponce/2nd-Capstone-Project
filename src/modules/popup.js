import Pokemon from './pokemonClass.js';

export default class Popup extends Pokemon {
  constructor(pokemon) {
    super(pokemon);
    this.img = window.document.getElementById('pokemonImg');
    this.title = window.document.getElementById('pokemonName');
    this.weightElement = window.document.getElementById('Weight');
    this.typesElement = window.document.getElementById('types');
    this.commentsCount = window.document.getElementById('commentsCount');
    this.commentsDiv = window.document.getElementById('comments');
    this.commentInput = window.document.getElementById('comment');
    this.userName = window.document.getElementById('userName');
    this.commentBtn = window.document.querySelector('#commentBtn');
    this.closeButton = window.document.getElementById('close');
    this.popup = window.document.querySelector('#popup');
    this.heightP = window.document.getElementById('Height');
    this.speciesP = window.document.getElementById('Species');
  }

  async populateHtml() {
    this.populatePokedata();
    this.populateComments();
  }

  async populatePokedata() {
    this.typesElement.innerHTML = '';
    await this.fetchPokemon().then(() => {
      this.title.innerText = this.pokemonName;
      this.heightP.innerHTML = `Height: ${this.height}`;
      this.speciesP.innerHTML = `Species: ${this.species}`;
      this.typesElement.innerHTML = '';
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

  async populateComments() {
    this.commentsDiv.innerHTML = '';
    await this.updateComments().then(() => {
      this.comments.forEach((comment) => {
        const userName = comment.username;
        const commentary = comment.comment;
        const text = `${comment.creation_date} ${userName}: ${commentary}`;
        const li = document.createElement('li');
        li.innerText = text;
        this.commentsDiv.appendChild(li);
      });
    });
    this.commentsCount.innerText = `(${this.countComments()})`;
  }

  closePopup() {
    const btn = this.closeButton;
    const pop = this.popup;
    btn.addEventListener('click', () => {
      pop.style.display = 'none';
    });
  }

  showPopup() {
    this.popup.style.display = 'block';
  }

  countComments() {
    return this.comments.length;
  }

  sendComment() {
    this.commentInput = window.document.getElementById('comment');
    this.userName = window.document.getElementById('userName');
    const { userName, commentInput } = this;
    const post = async () => { await this.postComment(userName.value, commentInput.value); };
    const updateHtml = async () => { await this.populateComments(); };
    this.commentBtn.addEventListener('click', () => {
      if (userName.value !== '' && commentInput.value !== '') {
        post();
        this.comments.push({ userName: userName.value, comment: commentInput.value });
        updateHtml();
        userName.value = '';
        commentInput.value = '';
      }
    });
  }
}