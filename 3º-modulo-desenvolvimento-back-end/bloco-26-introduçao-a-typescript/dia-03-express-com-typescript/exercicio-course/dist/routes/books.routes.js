"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const book_controller_1 = __importDefault(require("../controllers/book.controller"));
const books_middleware_1 = __importDefault(require("../middlewares/books.middleware"));
const router = (0, express_1.Router)();
const booksController = new book_controller_1.default();
const booksSlashId = '/books/:id';
router.get('/books', booksController.getAll);
router.get(booksSlashId, booksController.getById);
router.post('/books/', books_middleware_1.default, booksController.create);
router.put(booksSlashId, books_middleware_1.default, booksController.update);
router.delete(booksSlashId, booksController.remove);
exports.default = router;
