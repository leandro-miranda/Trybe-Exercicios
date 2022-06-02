const books = [
  {
    id: 1,
    name: 'As Crônicas de Gelo e Fogo',
    genre: 'Fantasia',
    author: {
      name: 'George R. R. Martin',
      birthYear: 1948,
    },
    releaseYear: 1991,
  },
  {
    id: 2,
    name: 'O Senhor dos Anéis',
    genre: 'Fantasia',
    author: {
      name: 'J. R. R. Tolkien',
      birthYear: 1892,
    },
    releaseYear: 1954,
  },
  {
    id: 3,
    name: 'Fundação',
    genre: 'Ficção Científica',
    author: {
      name: 'Isaac Asimov',
      birthYear: 1920,
    },
    releaseYear: 1951,
  },
  {
    id: 4,
    name: 'Duna',
    genre: 'Ficção Científica',
    author: {
      name: 'Frank Herbert',
      birthYear: 1920,
    },
    releaseYear: 1965,
  },
  {
    id: 5,
    name: 'A Coisa',
    genre: 'Terror',
    author: {
      name: 'Stephen King',
      birthYear: 1947,
    },
    releaseYear: 1986,
  },
  {
    id: 6,
    name: 'O Chamado de Cthulhu',
    genre: 'Terror',
    author: {
      name: 'H. P. Lovecraft',
      birthYear: 1890,
    },
    releaseYear: 1928,
  },
];

// 2 - Crie uma string com os nomes de todas as pessoas autoras.
function reduceNames() {
  const names = books.reduce((acc, book, index, array) => {
    if (index === array.length - 1) return `${acc} ${book.author.name}.`;
    return `${acc} ${book.author.name},`;
  }, '');
  return names.trim(); // trim() remove os espaços em branco do início e/ou fim de um texto
};
console.log(reduceNames());

// 🚀 3- Calcule a média de idade que as pessoas autoras tinham quando seus respectivos livros foram lançados.
function averageAge() {
  return books.reduce((idade, i) => idade + (i.releaseYear - i.author.birthYear) / books.length, 0).toFixed(0);
  // const numbersOfBooks = books.length;
  // const sumOfAges = books.reduce((sum, book) => (
  //   sum + (book.releaseYear - book.author.birthYear)
  // ), 0);
  // return sumOfAges / numbersOfBooks;
};
// console.log(averageAge());

// 4 - Encontre o livro com o maior nome.
const longestNamedBook = () => books.reduce((biggestBook, currentBook) => {
  if (currentBook.name.length > biggestBook.name.length) {
    return currentBook;
  }
  return biggestBook;
}).name;
// console.log(longestNamedBook());