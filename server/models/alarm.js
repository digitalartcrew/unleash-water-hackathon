const mongoose = require("mongoose");

const Comments = {};

const alarmSchema = mongoose.Schema({
  imgSrc: String,
  author: String,
  title: String,
  media: {
    video: String,
    imageUrls: [String],
  },
  preparationTime: Number,
  cookTime: Number,
  totalServings: Number,
  ingredients: [String],
  directions: [String],
  description: String,
  reviews: [Comments],
});

module.exports = mongoose.model("Alarm", alarmSchema);
