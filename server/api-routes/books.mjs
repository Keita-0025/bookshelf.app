import express from 'express';
import fs from 'fs'


const router = express.Router();

const rawData = fs.readFileSync('./seeds/books.json');
const books = JSON.parse(rawData);

// /api/books/
router.get('/', (req, res) => {
    res.json(books);
});




export default router;