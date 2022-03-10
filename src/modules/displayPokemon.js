export function fetchPokemon() {
	fetch('https://pokeapi.co/api/v2/pokemon?limit=9')
	.then(response => response.json())
	.then(function(allpokemon) {
		allpokemon.results.forEach(function(pokemon) {
			fetchPokemonData(pokemon);
		});
	});
}

function fetchPokemonData(pokemon){
	let url = pokemon.url 
	fetch(url)
	.then(response => response.json())
	.then(function(pokeData){
	pokeData.likes = 0;
	renderPokemon(pokeData);
	});
}


function renderPokemon(pokeData) {
	let allPokemonContainer = document.getElementById('cards-container');
	//create card
	const pokeContainer = document.createElement('div');
	pokeContainer.classList.add('card');
	//insert info
	const imageContainer = document.createElement('div');
	imageContainer.classList.add('sprite-container');
	const pokeName = document.createElement('h4');
	pokeName.innerText = pokeData.name;
	const pokeNumber = document.createElement('p');
	pokeNumber.innerText = `#${pokeData.id}`;
	createPokeImage(pokeData.id, imageContainer);

	//likes 
	const likesContainer = document.createElement('div');
	likesContainer.classList.add('likes-container');
	const likesHeart = document.createElement('i');
	likesHeart.className = 'far fa-heart';
	likesHeart.setAttribute('id', `${pokeData.id}`);
	likesHeart.addEventListener('click', () => {
		pokeData.likes+=1;
		console.log(pokeData.likes);
		likesCounter.innerHTML = pokeData.likes;
		postLike(pokeData.likes, pokeData.name, window.Date);
	});
	const likesCounter = document.createElement('p');
	likesCounter.innerHTML = pokeData.likes;
	likesContainer.append(likesHeart, likesCounter);

	//comment button
	const commentButton = document.createElement('button');
	commentButton.classList.add('comment');
	commentButton.innerText = 'Comment';
	commentButton.setAttribute('id', `${pokeData.id}`);
	commentButton.addEventListener('click', () => {
		//open the popup
	});
	pokeContainer.append( imageContainer, pokeName, pokeNumber, likesContainer, commentButton);   

	allPokemonContainer.appendChild(pokeContainer);
};

	function createPokeImage(pokeID, containerDiv){
		let pokeImage = document.createElement('img');
		pokeImage.src =    `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokeID}.png`;
		containerDiv.append(pokeImage);

	};
