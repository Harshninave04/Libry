import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import bookRoute from './Route/book.route.js';
import cors from 'cors';

const app = express();
app.use(express.json());
app.use(cors());
app.use('/book', bookRoute);

dotenv.config();

const PORT = process.env.PORT || 3010;
const MONGODB_URI = process.env.MONGODB_URI;

// MongoDB connection
mongoose
  .connect(MONGODB_URI)
  .then(() => {
    console.log('Connected to MongoDB');
    app.listen(PORT, () => {
      console.log(`listening on port ${PORT}`);
    });
  })
  .catch((err) => console.log(err));

app.get('/product', (req, res) => {
  res.send('<h1>Products page</h1>');
});

app.all('*', (req, res) => {
  res.status(404).send('<h1>404! Page not found</h1>');
});
