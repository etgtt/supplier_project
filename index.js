const express = require('express');
const app = express();
const port = 3000
const bodyParser = require('body-parser');
const connection = require('./database/connection')


//Local server
app.listen(port,() => {
    console.log(`Working local server, port ${port}`)
})

// middleware bodyParser
app.use(bodyParser.urlencoded({ extended:false }));

//using ejs
app.set('view engine','ejs');
app.use(express.static('public')) //static files

//rendering to html page
app.get('/',(req,res) => {
    res.render('index')
})

//Database
connection
.authenticate()
.then(() => {
    console.log("Connection has been established successfully with the bd")
})
.catch((error) => {
    console.log('Unable to connect to the database:', error)
})

//Routes
app.use('/',require('./routes/route'))
