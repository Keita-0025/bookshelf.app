import path from 'path';
import express from 'express';
import env from 'dotenv';
import apiRoutes from './api-routes/index.mjs'
import './helpers/db.mjs';

env.config();

const app = express();
const port = process.env.PORT || 8080;

app.use(express.static('build'))
app.use(express.json());

//API
app.use('/api', apiRoutes);

app.get('*', function(req, res){
    const indexHtml = path.resolve('build','index.html')
    res.sendFile(indexHtml);
})

app.use((req, res) => {
    res.status(404).json({ msg: 'Page Not Found' })
})

app.use((err, req, res, next) => {
    if(res.headersSent){
        return next(err);
    }
    res.status(500).json({ msg: '不正なエラーが発生しました' })
})

app.listen(port, () => {
    console.log(`Server start: http://localhost:${port}`)
})
