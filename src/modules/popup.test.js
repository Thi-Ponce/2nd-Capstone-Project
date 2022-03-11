import Popup from './popup.js';

const pop = new Popup('pikachu');
pop.updateComments();
test('Count of comments', () => {
  expect(pop.countComments()).toBe(0);
});
