const mongoose = require('mongoose')

mongoose.connect('mongodb://localhost/Books', (err) => {
    if(err) {
        console.log("Error has occured while connection!! : " + err);

    }else
    {
        console.log('Connection established sucessfully!!')
    }
})

require('./book.model');