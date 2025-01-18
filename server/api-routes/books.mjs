import express from 'express';
import { body } from "express-validator";
import Book from '../models/book.mjs';
import { registBook, updateBook } from '../controllers/books.mjs';

const router = express.Router();

// /api/books/
router.get('/', async (req, res) => {
    const books = await Book.find().sort({ updatedAt: -1 });
    res.json(books)
});

router.get('/:id', async (req, res) => {
    const _id = req.params.id;
    const book = await Book.findById(_id);
    res.json(book);
});

router.post(
    '/',
    body('title').notEmpty(),
    body('description').notEmpty(),
    body('rating').notEmpty().isInt( { min:1, max:5}),
    body('comment').notEmpty(),
    registBook
);

router.patch(
    '/:id',
    body('title').optional().notEmpty(),
    body('description').optional().notEmpty(),
    body('rating').optional().notEmpty().isInt( { min:1, max:5}),
    body('comment').optional().notEmpty(),
    updateBook
 );


router.delete('/:id', async (req, res) => {
    const _id = req.params.id;
    await Book.findByIdAndDelete({ _id });
    res.json({ msg: "Delete succeeded." });
});




export default router;