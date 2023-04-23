const mongoose = require('mongoose');


exports.connectMongoose = () => {
    mongoose.connect("mongodb://127.0.0.1:27017/myDatabase")
    .then((e) => console.log("connected to mongodb"))
    .catch((e) => console.log(e))
}
const adSchema = new mongoose.Schema({
    companyId: String,
    companyName: String,
    primaryText: String,
    headline: String,
    description: String,
    CTA: String,
    imageUrl: String,
    url:String,
});

exports.Ad = mongoose.model('Mycollections', adSchema);

