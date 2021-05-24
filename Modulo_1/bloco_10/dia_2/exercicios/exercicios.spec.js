const { describe, expect, test } = require('@jest/globals');

const uppercase = (str, callback) => {
  callback(str.toUpperCase());
  console.log(callback(str.toUpperCase()));
};

test('test uppercase', (done) => {
  uppercase('matheus', (callback) => {
    expect(callback).toBe('MATHEUS');
    done();
  });
});

const users = {
  4: { name: 'Mark' },
  5: { name: 'Paul' },
};

const findUserById = (id) => {
  return new Promise((resolve, reject) => {
    if (users[id]) {
      return resolve(users[id]);
    }

    return reject({ error: 'User with ' + id + ' not found.' });
  });
};

const getUserName = (userID) => {
  return findUserById(userID).then((user) => user.name);
};

describe('Teste promises getUserName', () => {
  describe('Testa getUserName quando id existe', () => {
    test('getUserName return Mark', () => {
      expect.assertions(1);
      return expect(getUserName(4)).resolves.toBe('Mark');
    });
    test('getUserName return Paul', () => {
      expect.assertions(1);
      return expect(getUserName(5)).resolves.toBe('Paul');
    });
  });

  describe('Testa getUserName quando id não existe', () => {
    test('getUserName return error', () => {
      expect.assertions(1);
      return expect(getUserName(1)).rejects.toEqual({
        error: 'User with 1 not found.',
      });
    });
  });
});

describe('Teste com Async e Await getUserName', () => {
  describe('Testa getUserName quando id existe', () => {
    test('getUserName return Mark', async () => {
      await expect(getUserName(4)).resolves.toBe('Mark');
    });
    test('getUserName return Paul', async () => {
      await expect(getUserName(5)).resolves.toBe('Paul');
    });
  });

  describe('Testa getUserName quando id não existe', () => {
    test('getUserName return error', async () => {
      await expect(getUserName(1)).rejects.toEqual({
        error: 'User with 1 not found.',
      });
    });
    test('getUserName return error', async () => {
      try {
        await getUserName(1);
      } catch (error) {
        expect(error).toEqual({ error: 'User with 1 not found.' });
      }
    });
  });
});

const fetch = require('node-fetch');

const getRepos = (url) => {
  return fetch(url)
    .then((response) => response.json())
    .then((data) => {
      return data.map((repo) => repo.name);
    });
};

describe('Teste repositorio github', () => {
  test('Encontra os repositorios', () => {
    const url = 'https://api.github.com/orgs/tryber/repos';
    expect.assertions(2);
    return getRepos(url).then((repository) => {
      expect(repository).toContain('sd-01-week4-5-project-todo-list');
      expect(repository).toContain('sd-01-week4-5-project-meme-generator');
    });
  });
});

beforeEach(() => console.log('1 - beforeEach'));
afterEach(() => console.log('1 - afterEach'));

test('', () => console.log('1 - test'));

describe('Scoped / Nested block', () => {
  beforeEach(() => console.log('2 - beforeEach'));
  afterEach(() => console.log('2 - afterEach'));

  test('', () => console.log('2 - test'));
});
// 1 - beforeEach
// 1 - test
// 1 - afterEach
// 1 - beforeEach
// 2 - beforeEach
// 2 - test
// 2 - afterEach
// 1 - afterEach