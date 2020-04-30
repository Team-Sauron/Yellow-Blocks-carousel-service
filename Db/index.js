const mongoose = require('mongoose');
const url = 'mongodb://localhost/imageUrls';

mongoose.connect(url, (err) => {
  if (err) {
    return console.log('FAILED TO CONNECT: ', err);
  } else {
    console.log('CONNECTED!');
  }
});

var Schema = mongoose.Schema;

var imageSchema = new Schema ({
  url: {type: String, unique: true}
});

var Images = mongoose.model('Images', imageSchema);

module.exports.save = (input, callback) => {
  var newImage = new Images ({
    url: input
  });

  newImage.save()
}
