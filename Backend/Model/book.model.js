import mongoose from 'mongoose';

const bookSchema = mongoose.Schema({
  name: {
    type: String,
  },
  author: {
    type: String,
  },
  title: {
    type: String,
  },
  category: {
    type: String,
  },
  price: {
    type: Number,
  },
  description: {
    type: String,
  },
  image: {
    type: String,
  },
});

const Book = mongoose.model('Book', bookSchema);
export default Book;
