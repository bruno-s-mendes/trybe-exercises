
const assert = require('assert');

const names = [
  'Aanemarie', 'Adervandes', 'Akifusa',
  'Abegildo', 'Adicellia', 'Aladonata',
  'Abeladerco', 'Adieidy', 'Alarucha',
];

function containsA() {
  return names.reduce((acc, name) => {
      name.split('').forEach(element => {
          if (element === 'A' || element === 'a') {
              acc += 1;
          };
      });
      return acc;
  },0);
}

assert.deepStrictEqual(containsA(), 20);