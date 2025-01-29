const mongoose = require("mongoose");
const { Schema } = mongoose;

const donateSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  rewardPoints: {
    type: Number,
    default: 0,
  },
  Status: {
    type: String,
    default: "none",
  },
});

module.exports = mongoose.model("donate", donateSchema);
