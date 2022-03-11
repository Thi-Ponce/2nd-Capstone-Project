export default class Popup {
  constructor(pokemon) {
    this.name = pokemon;
    this.comments = [];
  }

  countComments() {
    return this.comments.length;
  }
}
