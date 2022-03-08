export default class Pokemon {
  constructor(pokemonName) {
    this.pokemonName = pokemonName;
    this.url = `https://pokeapi.co/api/v2/pokemon/${this.pokemonName}`;
    this.likesUrl = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/8d5UQy3q00JntMkUFlri/likes/';
    this.commentsUrl = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/8d5UQy3q00JntMkUFlri/comments/';
    this.picture = '';
    this.weight = 0;
    this.types = [];
    this.likes = 0;
    this.comments = {};
  }

  async fetchPokemon() {
    await fetch(this.url)
      .then((response) => {
        response.json().then((data) => {
          console.log(data);
          this.picture = data.sprites.front_default;
          this.weight = data.weight;
          this.types = data.types;
          console.log(this);
        });
      });
  }

  async fetchLikes() {
    const response = await fetch(this.likesUrl)
      .then((response) => response.json());
    return response;
  }

  async updateLikes() {
    const name = this.pokemonName;
    this.likes = this.fetchLikes().name;
    return name;
  }

  async postLike() {
    const body = { likes: this.likes, pokemonName: this.pokemonName };
    fetch(this.likesUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(body),
    });
  }

  async fetchComments() {
    const response = await fetch(this.commentsUrl)
      .then((response) => response.json());
    return response;
  }

  async updateComments() {
    this.comments = this.fetchComments();
  }

  async postComment(username, comment) {
    const body = { pokemonName: this.pokemonName, username, comment };
    fetch(this.commentsUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(body),
    })
      .then((response) => response.json())
      .then((json) => console.log(json));
  }
}