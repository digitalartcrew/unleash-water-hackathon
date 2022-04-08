var mongoose = require("mongoose");
mongoose.connect(
  process.env.MONGOLAB_URI || "mongodb://localhost/water-alarm-app"
);

mongoose.set("debug", true);

module.exports.Alarm = require("./alarm");
