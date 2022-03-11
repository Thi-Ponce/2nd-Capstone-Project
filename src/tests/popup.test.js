import Popup from './popup.js';

const pop = new Popup('pikachu');
test('Count of comments', () => {
  expect(pop.countComments()).toBe(0);
});
