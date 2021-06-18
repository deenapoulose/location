const express = require('express');
const mongoose =require('mongoose');
const  dotenv = require('dotenv');
const path = require('path');
const userRouter = require('./routers/userRouter.js');
const productRouter =require('./routers/productRouter.js');
const uploadRouter = require('./routers/uploadRouter');
 dotenv.config();
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
/* mongodb connection */
mongoose.connect(process.env.MONGODB_URL || 'mongodb://localhost/locmap', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
});

app.use('/api/uploads', uploadRouter);
app.use('/api/products', productRouter);
app.use('/api/users', userRouter);

app.use('/uploads', express.static(path.join(path.resolve(), '/uploads')));


/* depoly heroku no need of below code commented code */
app.get('/', (req, res) => {
  res.send('Server is ready');
});

app.use((err, req, res, next) => {
  res.status(500).send({ message: err.message });
});
/* to check the server is connected or not */
const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`Serve at http://localhost:${port}`);
});
