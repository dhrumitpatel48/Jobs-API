const mongoose = require('mongoose')

const connectDB = (url) => {
  mongoose.set("strictQuery", false);
  return mongoose.connect(url, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }).then(() => {
    console.log(`MongoDB connection established successfully.`);
  })
  .catch((error) => {
    console.log(`Error while connecting mongodb : ${error}`);
  });
}

module.exports = connectDB