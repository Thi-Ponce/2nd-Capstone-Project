export default async function pokeCounter() {

     fetch('https://pokeapi.co/api/v2/pokemon?limit=9')
     .then(response => response.json())
     .then(function(allpokemon) {
        const counter = allpokemon.results.length;
        const pokeCounter = document.querySelector('.pokeCounter');
        pokeCounter.innerHTML = `${counter} pokemon displayed`;
         });    
     }
