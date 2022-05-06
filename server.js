require('./models/book.model')
require('./models/db')

const express = require('express');
const path = require('path');
const exphbs = require('express-handlebars')
const Handlebars = require('handlebars')
const bodyparser = require('body-parser');
const { allowInsecurePrototypeAccess } = require('@handlebars/allow-prototype-access');

const app = express()


// Taking the data submitted by the form into req object of employeeController.js
app.use(bodyparser.urlencoded({
    extended:true
}))
app.use(bodyparser.json())

// app.get('/', (req, res) => {
//     res.send("Hello Bro! Who got you smiling like that!!")
// } )


//Defining the path for our HTML files to render
app.set('views', path.join(__dirname, '/views/'));
app.engine('hbs', exphbs({extname:'hbs', defaultLayout : 'mainlayout', layoutsDir : __dirname + '/views/layouts/', handlebars: allowInsecurePrototypeAccess(Handlebars)}))
app.set('view engine', 'hbs')


var bookscontroller = require('./controller/booksController');
const { extname } = require('path');
app.use('/book', bookscontroller);

app.listen(3000, () => {
console.log("Server started on port 3000")
})

//running html file through nodejs try 1

app.use(express.static(__dirname + '/book4you'));

app.get('/back', (req, res) => {
    res.redirect("http://localhost:3000/admin.html")
})




