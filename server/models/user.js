var mongoose = require("mongoose");

var User = mongoose.model("user", {
  text: {
    type: String,
    trim: true,
    required: true,
    minlength: 1
  }
});

module.exports = { User };
