import express from 'express';
import Book from '../models/book.mjs';

const router = express.Router();

// /api/books/
router.get('/', async (req, res) => {
    const books = await Book.find();
    res.json(books)
});




export default router;