const mongoose = require('mongoose');

const flightSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
  departure: {
    type: String,
    required: true,
  },
  arrive: {
    type: String,
    required: true,
  },
  from: {
    type: String,
    required: true,
  },
  to: {
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
  cabinClass: {
    type: String,
    required: true,
  },
});

const Flight = mongoose.model('Flight', flightSchema);

module.exports = Flight;
