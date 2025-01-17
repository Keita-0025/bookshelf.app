import express, { Router } from 'express';
import env from 'dotenv';

env.config();


const app = express();
const router = Router(); 
const PORT = process.env.PORT;



app.listen(PORT, () => {
    console.log(`Server start: http//localhost:${PORT}`)
})
