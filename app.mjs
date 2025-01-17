import express from 'express';
import env from 'dotenv';
import fs from 'fs'

env.config();

const rawData = fs.readFileSync('./seeds/books.json');
const booksJson = JSON.parse(rawData);
console.log(booksJson);


const app = express();
const router = express.Router();
const PORT = process.env.PORT;

router.get('/', (req, res, next) => {
    
})



app.listen(PORT, () => {
    console.log(`Server start: http//localhost:${PORT}`)
})
