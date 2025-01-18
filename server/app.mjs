import express from 'express';
import env from 'dotenv';
import apiRoutes from './api-routes/index.mjs'
import './helpers/db.mjs';

env.config();

const app = express();
const port = process.env.PORT || 8080;

app.use(express.json());
//API
app.use('/api',apiRoutes);

app.use((req, res)=>{
    res.status(404).json({msg:'Page Not Found'})
})

app.listen(port, () => {
    console.log(`Server start: http//localhost:${port}`)
})
