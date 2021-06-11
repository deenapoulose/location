const express = require('express');
const mongoose =require('mongoose');
const  dotenv = require('dotenv');

const userRouter = require('./routers/userRouter.js');
const productRouter =require('./routers/productRouter.js');

dotenv.config();
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
mongoose.connect(process.env.MONGODB_URL || 'mongodb://localhost/locmap', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
});


app.use('/api/products', productRouter);
app.use('/api/users', userRouter);

app.post("/get", async(req, res) => {
  const lang= req.body.lang;
  const long =  req.body.long;
  console.log(lang)
  
  await coll.find({
      location:
     { $near:
        {
          $geometry: { type: "Point",  coordinates: [ lang, long ] },
          $minDistance: 1000,
          $maxDistance: 5000
        }
     }
  }, (err, result) => {
    if (err) console.log(err);
    else {
      res.send(result);
    }
  });
});
app.get('/', (req, res) => {
  res.send('Server is ready');
});

app.use((err, req, res, next) => {
  res.status(500).send({ message: err.message });
});

const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`Serve at http://localhost:${port}`);
});
