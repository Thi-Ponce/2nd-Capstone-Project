import Pokemon from './pokemonClass.js';

export class Popup extends Pokemon {
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
    this.populateCommentsAPI();
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

  async populateCommentsAPI() {
    await this.updateComments().then(() => {
      this.populateComments();
      if (Array.isArray(this.comments)) this.commentsCount.innerText = `(${this.countComments()})`;
    });
    console.log(this.comments);
  }

  populateComments() {
    this.commentsDiv.innerHTML = '';
    this.commentsCount.innerText = '0';
    if (Array.isArray(this.comments)) {
      this.comments.forEach((comment) => {
        const userName = comment.username;
        const commentary = comment.comment;
        const text = `${comment.creation_date} ${userName}: ${commentary}`;
        const li = document.createElement('li');
        li.innerText = text;
        this.commentsDiv.appendChild(li);
      });
    }
  }

  closePopup() {
    const btn = this.closeButton;
    const pop = this.popup;
    btn.addEventListener('click', () => {
      pop.style.display = 'none';
      document.body.style.overflow = 'auto';
    });
  }

  async showPopup() {
    await this.populateHtml();
    this.popup.style.display = 'block';
    document.body.style.overflow = 'hidden';
  }

  countComments() {
    return this.comments.length;
  }
}

export function addPopup() {
  const text = `
      <span id="close">X</span>
      <div id="container">
        <img src="#" alt="pokemon" id="pokemonImg">
        <h2 id="pokemonName"></h2>
        <div id="pokeData">
          <div class="column">
            <p id="Weight">Weight:</p>
            <p>Types:</p>
            <ol id="types"></ol>
          </div>
          <div class="column">
             <p id="Height">Height:</p>
             <p id="Species">Species:</p>
          </div>
        </div>
        <div id="commentsAndCount">
          <h3 id="commentsTitle">Comments:</h3><span id="commentsCount"></span>
        </div>
        <div><ul id="comments"></ul></div>
        <div id="commentContainer">
          <h4>Add a comment</h4>
          <input type="text" placeholder="Your name" id="userName">
          <textarea name="comment" id="comment" placeholder="Your insights"></textarea>
          <input type="button" value="Comment" id="commentBtn">     
        </div>
      </div>
    `;
  document.getElementById('popup').innerHTML = text;
}
