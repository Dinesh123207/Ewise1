const mongoose = require('mongoose');
const { Schema } = mongoose;

const itemspriceschema = new Schema({
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

module.exports = mongoose.model('Itemsprice', itemspriceschema);

// const itemspriceschema = new Schema({
//  name: {
//    type: String,
//    required: true,
//  },
//  price: {
//    type: Number,
//    required: true,
//  },
//  email: {
//    type: String,
//    required: true,
//  },
//  rewardPoints: {
//    type: Number,
//    default: 0,
//  },
// });




// // const itemspriceschema = new Schema({
// //  name: {
// //   type: String,
// //   required: true
// //  },
// //  price: {
// //   type: Number,
// //   required: true
// //  },
// //  email: {
// //   type: String,
// //   required: true,
// //  }
// // });

// module.exports = mongoose.model('Itemsprice', itemspriceschema);
