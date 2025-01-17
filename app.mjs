import express from 'express';
import env from 'dotenv';
import apiRoutes from './server/api-routes/index.mjs'
env.config();

const app = express();
const port = process.env.PORT || 8080;

app.use(express.json());
//API
app.use('/api',apiRoutes);

app.listen(port, () => {
    console.log(`Server start: http//localhost:${port}`)
})
