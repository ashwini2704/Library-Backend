const mongoose = require('mongoose');

const bookSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  author: {
    type: String,
    required: true,
  },
  price : {
    type : Number,
    required:true
  },
  edition: {
    type: String,
    required: true,
  },
  language: {
    type: String,
    required: true,
  },
  condition: {
    type: String,
    required: true,
  },
  photo : {
    type: String,
    default :"data:image/png;base64,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",
    required: true,
  },
  isbn: {
    type: String,
    required: true,
    unique: true,
  },
  editor: {
    type: String,
    required: true,
  },
  description : {
      type: String,
      required: true,
  },
  genre: {
    type: String,
    required: true,
  },
  publicationYear: {
    type: Number,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const BookModel = mongoose.model('Book', bookSchema);

module.exports = {
      BookModel
};
