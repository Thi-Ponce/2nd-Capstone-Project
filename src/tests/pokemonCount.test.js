import pokemonCounter from './pokemonCount.js';

describe('Testing if the number of items in an array is correct', () => {
  test('5 items', () => {
    expect(pokemonCounter(['pikachu', 'squirtle', 'bulbasaur', 'charizard', 'ivysaur'])).toBe(5);
  });

  test('10 items', () => {
    expect(pokemonCounter(['pikachu', 'squirtle', 'bulbasaur', 'charizard', 'ivysaur', 'blastoise', 'clefairy', 'psyduck', 'raichu', 'lugia'])).toBe(10);
  });

  test('20 items', () => {
    expect(pokemonCounter(['bulbasaur', 'ivysaur', 'venusaur', 'charmander', 'charmeleon', 'charizard', 'squirtle', 'wartortle', 'blastoise', 'caterpie', 'metapod', 'butterfree', 'weedle', 'kakuna', 'beedrill', 'pidgey', 'pidgeotto', 'pidgeot', 'rattata', 'raticate'])).toBe(20);
  });
});