import express from 'express';
import bodyParser from 'body-parser';
import path from 'path';
import React from 'react';
import ReactDOMServer from 'react-dom/server';
import fs from 'fs';
import App from './src/app';
import { StaticRouter } from 'react-router-dom';
let app= express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
 
app.get('/*', (req, res) => {
    const context = {};
    const app = ReactDOMServer.renderToString(
      <StaticRouter location={req.url} context={context}>
        <App />
      </StaticRouter>
    );
  
    const indexFile = path.resolve('./build/index.html');
    fs.readFile(indexFile, 'utf8', (err, data) => {
      if (err) {
        console.error('Something went wrong:', err);
        return res.status(500).send('Oops, better luck next time!');
      }
  
      return res.send(
        data.replace('<main class="main" id="main_content"></main> ', `<main class="main" id="main_content">${app}</main>`)
      );
    });
});


app.get(['/main.css','/services/main.css'],function(req,res){
  res.sendFile(path.resolve(__dirname+'/src/main.css'));
});
app.get('/services/app.js',function(req,res){
    res.sendFile(path.resolve(__dirname+'/build/app.js'));
});
app.listen(49652, function () {
    console.log('App listening on port http://localhost:49652 !')
});