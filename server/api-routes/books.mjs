import express from 'express';
import { body } from "express-validator";
import { getAllBooks, getBookById, registBook, updateBook, deleteBooks } from '../controllers/books.mjs';
import requestErrorHandler from '../helpers/helpers.mjs';

const router = express.Router();



// /api/books/
router.get('/', requestErrorHandler(getAllBooks));

router.get('/:id', requestErrorHandler(getBookById));

router.post(
    '/',
    body('title').notEmpty(),
    body('description').notEmpty(),
    body('rating').notEmpty().isInt({ min: 1, max: 5 }),
    body('comment').notEmpty(),
    requestErrorHandler(registBook)
);

router.patch(
    '/:id',
    body('title').optional().notEmpty(),
    body('description').optional().notEmpty(),
    body('rating').optional().notEmpty().isInt({ min: 1, max: 5 }),
    body('comment').optional().notEmpty(),
    requestErrorHandler(updateBook)
);

router.delete('/:id', requestErrorHandler(deleteBooks));




export default router;