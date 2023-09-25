const mongoose = require("mongoose");
const config = require("./config/confidentila")

const mongoURL = config.uri ;

const connectmongp = () => {

  try {
    mongoose.connect(mongoURL);
    ("Connected succes");
  } catch (error) {
    console.log("Not Connected ")
  }
  
};
module.exports = connectmongp;
