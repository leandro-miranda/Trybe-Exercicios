// Para as funções encode e decode crie os seguintes testes usando Jest
function mapString(objectMap, string) {
  const splitString = string.split('');
  const mappedArray = [];

  for (let i = 0; i < splitString.length; i += 1) {
    const character = splitString[i];
    const mappedValue = objectMap[character];

    if (mappedValue) {
      mappedArray.push(mappedValue);
    } else {
      mappedArray.push(character);
    }
  }
  return mappedArray.join('');
}

function encode(string) {
  const map = {
    a: 1,
    e: 2,
    i: 3,
    o: 4,
    u: 5,
  };
  return mapString(map, string);
}

function decode(string) {
  const map = {
    1: 'a',
    2: 'e',
    3: 'i',
    4: 'o',
    5: 'u',
  };
  return mapString(map, string);
}

const functions = { encode, decode };
module.exports = functions;
