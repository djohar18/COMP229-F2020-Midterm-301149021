/*   File name: books.js
     Created By: Divyanshu Johar
     Student ID: 301149021
*/

let mongoose = require('mongoose');

// create a model class

let bookModel = mongoose.Schema(
    {
    name: String,
    author: String,
    published: String,
    description: String,
    price: Number
    },
    {
    collection:"books"
    });

module.exports = mongoose.model('Book', bookModel);