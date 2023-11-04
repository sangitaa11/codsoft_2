const mongoose = require('mongoose');

const carHireSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
  pickupDate: {
    type: Date,
    required: true,
  },
  returnDate: {
    type: Date,
    required: true,
  },
  pickupLocation: {
    type: String,
    required: true,
  },
  carType: {
    type: String,
    required: true,
  },
});

const CarHire = mongoose.model('CarHire', carHireSchema);

module.exports = CarHire;
