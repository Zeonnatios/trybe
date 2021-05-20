const { test, expect, describe } = require('@jest/globals');

const obj1 = {
  title: 'My Title',
  description: 'My Description',
};

const obj2 = {
  description: 'My Description',
  title: 'My Title',
};

const obj3 = {
  title: 'My Different Title',
  description: 'My Description',
};

const obj4 = {
  title: 'My Title',
  description: 'My Description',
};

test('Comparando objetos', () => {
  expect(obj1).toEqual(obj2);
  expect(obj2).not.toEqual(obj3);
})
