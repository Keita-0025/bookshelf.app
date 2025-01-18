import express from 'express';
import { body } from "express-validator";
import { getAllBooks, getBookById, registBook, updateBook, deleteBooks } from '../controllers/books.mjs';

const router = express.Router();

// /api/books/
router.get('/', getAllBooks );

router.get('/:id', getBookById );

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

router.delete('/:id', deleteBooks );




export default router;