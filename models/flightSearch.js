const mongoose = require('mongoose');

const flightSearchSchema = new mongoose.Schema({
  departure: String,
  destination: String,
});

const FlightSearch = mongoose.model('FlightSearch', flightSearchSchema);

module.exports = FlightSearch;
