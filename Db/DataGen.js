const db = require('./index.js');
console.log(db);

var generateUrls = () => {
  var urls = [];
  for (var i = 0; i <= 31; i++) {
    urls.push(`https://fec-carousel.s3.us-east-2.amazonaws.com/${i}.jpg`)
  }

  urls.forEach((image) => {
    db.save(image)
}
generateUrls();
