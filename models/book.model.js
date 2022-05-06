const mongoose = require('mongoose')

var booksSchema = new mongoose.Schema({
    book_id : {
        type:Number
    
    },
    name : {
        type:String
    },
    author : {
        type:String
    },
    price : {
        type:Number
    }
})

mongoose.model('Books', booksSchema);