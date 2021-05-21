const { expect, test, beforeEach, describe } = require('@jest/globals');

let starterPokemons;

const filterBySpeed = (minimumSpeed) => new Promise((resolve, reject) => {
  setTimeout(() => {
    const bySpeed = starterPokemons
      .filter((pokemons) => pokemons.speed >= minimumSpeed)
      .map((pokemon) => pokemon.name);

    if (bySpeed.length > 0) {
      resolve(bySpeed);
    } else {
      reject('Nenhum Pokemon encontrado.');
    }
  }, 1500);
});

describe('The filterBySpeed function (promise with then/catch)', () => {
  beforeEach(() => {
    starterPokemons = [
      { name: 'Bulbasaur', type: 'Grass/Poison', speed: 45 },
      { name: 'Charmander', type: 'Fire', speed: 65 },
      { name: 'Squirtle', type: 'Water', speed: 43 },
      { name: 'Pikachu', type: 'Electric', speed: 90 },
    ];
  });

  it('Pokémons acima de 50 de velocidade existem 2', () => {
    expect.assertions(1);
    starterPokemons.push({ name: 'Mewtwo', type: 'Psychic', speed: 100 });
    return filterBySpeed(50).then((data) => {
      expect(data).toEqual(['Charmander', 'Pikachu', 'Mewtwo']);
    });
  });

  it('Pokemons acima de 99 não existem', () => {
    expect.hasAssertions();

    return filterBySpeed(99).catch(data => {
      expect(data).toEqual('Nenhum Pokemon encontrado.');
    });
  });
});

describe('The filterBySpeed function (promise with async/await)', () => {
  beforeEach(() => {
    starterPokemons = [
      { name: 'Bulbasaur', type: 'Grass/Poison', speed: 45 },
      { name: 'Charmander', type: 'Fire', speed: 65 },
      { name: 'Squirtle', type: 'Water', speed: 43 },
      { name: 'Pikachu', type: 'Electric', speed: 90 },
    ];
  });

  it('must have 2 pokemons with 50 speed ', async () => {
    expect.assertions(1);
    starterPokemons.push({ name: 'Mewtwo', type: 'Psychic', speed: 100 });

    const data = await filterBySpeed(50);
    expect(data).toEqual(['Charmander', 'Pikachu', 'Mewtwo']);
  });

  it('Pokemons acima de 99 não existem', async () => {
    expect.hasAssertions();

    try {
      await filterBySpeed(99);
    } catch (error) {
      expect(error).toBe('Nenhum Pokemon encontrado.');
    }
  });
});
