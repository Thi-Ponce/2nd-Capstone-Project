import postLikes from './postLikes.js';
import { countLikes } from './likeCounter.js';
import createPokeImage from './createImg.js';
import Popup from './popup.js';

export default function renderPokemon(pokeData) {
  const allPokemonContainer = document.getElementById('cards-container');
  // create card
  const pokeContainer = document.createElement('div');
  pokeContainer.classList.add('card');
  pokeContainer.setAttribute('id', 'pokeCard');
  // insert info
  const imageContainer = document.createElement('div');
  imageContainer.classList.add('sprite-container');
  const pokeName = document.createElement('h4');
  pokeName.innerText = pokeData.name;
  const pokeNumber = document.createElement('p');
  pokeNumber.innerText = `#${pokeData.id}`;
  createPokeImage(pokeData.id, imageContainer);

  // likes
  const likesContainer = document.createElement('div');
  likesContainer.classList.add('likes-container');
  const likesHeart = document.createElement('i');
  likesHeart.className = 'far fa-heart';
  likesHeart.setAttribute('id', `${pokeData.id}`);
  const likesCounter = document.createElement('p');
  likesHeart.addEventListener('click', () => {
    pokeData.likes += 1;
    likesCounter.innerHTML = pokeData.likes;
    postLikes(pokeData.id);
  });
  countLikes(pokeData.id, likesCounter);
  likesContainer.append(likesHeart, likesCounter);

  // comment button
  const commentButton = document.createElement('button');
  commentButton.classList.add('comment');
  commentButton.innerText = 'Comment';
  commentButton.setAttribute('id', `${pokeData.id}`);
  commentButton.addEventListener('click', async () => {
    const pop = new Popup(pokeData.name);
    pop.showPopup();
    pop.closePopup();
    pop.sendComment();
  });
  pokeContainer.append(imageContainer, pokeName, pokeNumber, likesContainer, commentButton);

  allPokemonContainer.appendChild(pokeContainer);
}
