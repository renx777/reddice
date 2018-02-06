import express from 'express';
import path from 'path';

let app = express();

app.get('/',(req,res) => {
    // send file as response
    // __dirname -- > points to current director
    res.sendFile(path.join(__dirname,'./index.html'));
})

app.listen(3000,() => console.log('Running on Localhost:3000'))