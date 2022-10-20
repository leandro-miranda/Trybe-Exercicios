const bookService = require('../services/bookService');

const getAll = async (_req, res) => {
  const books = await bookService.getAll();

  res.status(200).json(books);
};

const getById = async (req, res) => {
  const book = await bookService.getById(req.params.id);

  if (!book) return res.status(404).json({ message: 'Book not found' });

  res.status(200).json(book);
};

const create = async (req, res) => {
  const { title, author, pageQuantity } = req.body;
  const book = await bookService.create({ title, author, pageQuantity });

  res.status(201).json(book);
};

const update = async (req, res) => {
  const { id } = req.params;
  const { title, author, pageQuantity } = req.body;

  const updatedUser = await bookService.update(id, { title, author, pageQuantity });

  if (!updatedUser) return res.status(404).json({ message: 'Book not found' });

  res.status(201).json({ message: 'Book updated' });
};

const remove = async (req, res) => {
  const { id } = req.params;

  const removed = await bookService.remove(id);

  if (!removed) return res.status(500).json({ message: 'Book not found' });

  res.status(200).json({ message: 'Book removed' });
};

module.exports = {
  getAll,
  getById,
  create,
  update,
  remove,
};