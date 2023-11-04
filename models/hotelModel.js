const mongoose = require('mongoose');

const hotelSchema = new mongoose.Schema({
userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
 },
  checkIn: {
    type: Date,
    required: true,
  },
  checkOut: {
    type: Date,
    required: true,
  },
  city: {
    type: String,
    required: true,
  },
  adults: {
    type: Number,
    required: true,
  },
  children: {
    type: Number,
    required: true,
  },
  roomType: {
    type: String,
    required: true,
  },
});

const Hotel = mongoose.model('Hotel', hotelSchema);

module.exports = Hotel;
