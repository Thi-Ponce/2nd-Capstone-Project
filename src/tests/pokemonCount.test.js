import pokeCounter from './pokemonCount.js';

describe('Testing if the number of items in an array is correct', () => {
  test('9 items', () => {
    expect(pokeCounter()).toBe(9);
  });
});