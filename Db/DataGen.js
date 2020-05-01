const faker = require('faker');
const db = require('./index.js');

const generateUrls = () => {
  const urls = [];
  for (let i = 0; i <= 31; i += 1) {
    urls.push(`https://fec-carousel.s3.us-east-2.amazonaws.com/${i}.jpg`);
  }
  return urls;
};

const getUrls = () => {
  const limit = faker.random.number({ min: 4, max: 7 });
  const imageLinks = generateUrls();
  const product = {};
  for (let i = 0; i < limit; i += 1) {
    const randomIndex = Math.floor(Math.random() * imageLinks.length - 1) + 1;
    product[`pic${i}`] = imageLinks[randomIndex];
  }
  return product;
};

const seed = () => {
  for (let i = 1; i <= 100; i += 1) {
    const newImage = new db.Images({
      product: i,
      pictures: getUrls(),
    });
    db.saveImage(newImage);
  }
};

seed();
