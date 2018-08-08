const express = require('express');
const path = require('path');
const mongoose = require('mongoose');

const app = express();
const port = process.env.PORT ||5000;

// app.get('/api/hello', (req, res)=>{
//     res.send({express: 'Hello from express'});
// });

if(process.env.NODE_ENV === 'production'){
    //serve any static file
    app.use(express.static(path.join(__dirname, 'client/build')));

    //Handle react routing, return all requests to React app
    app.get('*', function(req, res){
        res.sendFile(path.join(__dirname, 'client/build', 'index.html'));
    });
}

//connect to database
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/mern-todo', {useMongoClient: true,})

app.listen(port);