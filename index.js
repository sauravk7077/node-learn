const express = require('express');
var morgan = require('morgan');
const mongoose = require('mongoose');
const process = require('process');
const { static } = require('express');
const Blog = require('./modules/blog');
const { title } = require('process');

// express app
app = express();

//Loading the environment variables
require('dotenv').config()
const uri = process.env.URI;

//connect to mongoose
mongoose.connect(uri,{useNewUrlParser: true, useUnifiedTopology: true})
.then((result) => {
    console.log('You have been connected');
}).catch((err)=>{
    console.log(err);
});

//Mongoose sandbox

app.get('/add-blog', (req,res)=> {
    const blog1 = new Blog({
        title: "Generic Title",
        snippet: "About nothing",
        body: "A sample document with something really stupid."
    });
    blog1.save()
    .then((result)=>{
        res.send(result);
    })
    .catch(err=>{
        console.log(err);
    });
    
});




app.set('view engine','ejs');

app.listen(3000);

app.use(morgan('dev'));
app.use(static('public'));

app.get('/', (req, res)=>{
    res.render('index', {title:"Home"});
});