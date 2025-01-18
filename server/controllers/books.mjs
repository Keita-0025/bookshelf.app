import { validationResult } from 'express-validator';
import Book from '../models/book.mjs';

const getAllBooks = async (req, res) => {
    const books = await Book.find().sort({ updatedAt: -1 });
    res.json(books)
}

const getBookById = async (req, res) => {
    const _id = req.params.id;
    const book = await Book.findById(_id);
    res.json(book);
}

const registBook = async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        const errs = errors.array();
        return res.status(400).json(errs);
    }
    const book = new Book(req.body);
    const newBook = await book.save();
    res.status(201).json(newBook);
}

const updateBook = async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        const errs = errors.array();
        return res.status(400).json(errs);
    }

    const { title, description, rating, comment } = req.body
    const _id = req.params.id;
    const book = await Book.findById(_id);
    if (title !== undefined) book.title = title;
    if (description !== undefined) book.description = description;
    if (rating !== undefined) book.rating = rating;
    if (comment !== undefined) book.comment = comment;
    await book.save();
    res.json(book);
}

const deleteBooks = async (req, res) => {
    const _id = req.params.id;
    await Book.findByIdAndDelete({ _id });
    res.json({ msg: "Delete succeeded." });
}


export { getAllBooks, getBookById, registBook, updateBook, deleteBooks };