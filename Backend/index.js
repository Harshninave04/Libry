const express = require('express');
const app = express();
const port = 3009;

app.get('/', (req, res) => {
  res.send('Hello World!!');
});

app.get('/product', (req, res) => {
  res.send('<h1>Products page</h1>');
});

// This route will handle all the requests that are
// not handled by any other route handler. In
// this handler we will redirect the user to
// an error page with NOT FOUND message and status
// code as 404 (HTTP status code for NOT found)
app.all('*', (req, res) => {
  res.status(404).send('<h1>404! Page not found</h1>');
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
