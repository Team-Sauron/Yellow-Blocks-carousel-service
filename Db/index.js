const mongoose = require('mongoose');

const url = 'mongodb://localhost/imageUrls';

mongoose.connect(url, (err) => {
  if (err) {
    return console.log(`FAILED TO CONNECT: ${err}`);
  }
});

const { Schema } = mongoose;

const imageSchema = new Schema({
  product: { type: Number, unique: true },
  pictures: {
    pic1: String,
    pic2: String,
    pic3: String,
    pic4: String,
    pic5: String,
    pic6: String,
    pic7: String,
    pic8: String,
    pic9: String,
    pic10: String,
    pic11: String,
  },
});

const Images = mongoose.model('Images', imageSchema);

const saveImage = (input) => {
  input.save((err, result) => {
    if (err) {
      return (err, null);
    }
    return (null, result);
  });
};

const getImages = (number, callback) => {
  Images.findOne({ product: number }).exec(callback);
};

module.exports = {
  Images,
  saveImage,
  getImages,
};
