const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const {Ad, connectMongoose} = require('./models/Ad');
// const router = express.Router();

const app = express();
connectMongoose();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());

// mongoose.connect('mongodb://127.0.0.1:27017/myDatabase', {
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
// });

// const db = mongoose.connection;

// db.on('error', console.error.bind(console, 'MongoDB connection error:'));

// db.once('open', function() {
//   console.log('Connected to MongoDB');
// });

app.get("/search", async (req, res) => {
  try {
    const keyword = req.query.keyword;
    const ads = await Ad.aggregate([
      {
        $match: {
          $or: [
            { companyId: { $regex: keyword, $options: 'i' } },
            { companyName: { $regex: keyword, $options: 'i'  } },
            { primaryText: { $regex: keyword, $options: 'i' } },
            { headline: { $regex: keyword, $options: 'i' } },
            { description: { $regex: keyword, $options: 'i' } },
            { CTA: { $regex: keyword, $options: 'i' } },
            { imageUrl: { $regex: keyword, $options: 'i' } },
            { url: { $regex: keyword, $options: 'i' } },
          ],
        },
      },
      // { $project: { _id: 1, companyId: 1, companyName: 1, primaryText: 1, headline: 1, description: 1, CTA: 1, imageUrl: 1, url: 1 } },
      // { $unwind: '$companyName' },
      // { $unwind: '$primaryText' },
      // { $unwind: '$headline' },
      // { $unwind: '$description' },
    ]);
    console.log(res.status(200).json(ads));

    
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
});

app.listen(4000, () => {
  console.log("Connected to 4000")
})

module.exports = app;