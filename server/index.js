import express from 'express';
import path from 'path';
import bodyParser from 'body-parser'

// setup webpack
import webpack from 'webpack';
import webpackMiddleware from 'webpack-dev-middleware';
import webpackConfig from '../webpack.config.dev';
import webpackHotMiddleware from 'webpack-hot-middleware'

import users from './routes/users';

let app = express();

app.use(bodyParser.json());

app.use('/api/users',users)

const compiler=webpack(webpackConfig)

// setting hot reload so that you dont have to reload page everytime code is changed
app.use(webpackMiddleware(compiler,{
    hot:true,
    publicPath:webpackConfig.output.publicPath,
    noInfo:true
}))
app.use(webpackHotMiddleware(compiler))


app.get('/*',(req,res) => {
    // send file as response
    // __dirname -- > points to current director
    res.sendFile(path.join(__dirname,'./index.html'));
})

app.listen(3000,() => console.log('Running on Localhost:3000'))