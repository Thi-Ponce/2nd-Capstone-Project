const createPokeImage = (pokeID, containerDiv) => {
  const pokeImage = document.createElement('img');
  pokeImage.src = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokeID}.png`;
  containerDiv.append(pokeImage);
};

export default createPokeImage;