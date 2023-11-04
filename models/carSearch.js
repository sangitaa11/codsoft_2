const mongoose = require('mongoose');

const carSearchSchema = new mongoose.Schema({
  pickupLocation: String,
  carType: String,
});

const CarSearch = mongoose.model('CarSearch', carSearchSchema);

module.exports = CarSearch;
