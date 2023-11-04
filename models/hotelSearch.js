const mongoose = require('mongoose');

const hotelSearchSchema = new mongoose.Schema({
  city: String,
  roomType: String,
});

const HotelSearch = mongoose.model('HotelSearch', hotelSearchSchema);

module.exports = HotelSearch;
