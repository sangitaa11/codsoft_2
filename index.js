const express = require('express');
const mongoose = require('mongoose');
const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const session = require('express-session');
const bcrypt = require('bcrypt');
const app = express();
const port = 3000;
mongoose.connect('mongodb://127.0.0.1:27017/tripbliss', { useNewUrlParser: true, useUnifiedTopology: true });

app.set('view engine', 'ejs');
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));

// Configure Passport
app.use(session({ secret: 'your-secret-key', resave: false, saveUninitialized: false }));
app.use(passport.initialize());
app.use(passport.session());

// Required models from the models folder
const User = require('./models/user');
const Flight = require('./models/flightModel');
const Hotel = require('./models/hotelModel');
const CarHire = require('./models/carHireModel');
const FlightSearch = require('./models/flightSearch');
const CarSearch = require('./models/carSearch');
const HotelSearch = require('./models/hotelSearch');

// Passport local strategy for user authentication
passport.use(
  new LocalStrategy(async (username, password, done) => {
    try {
      const user = await User.findOne({ username });
      if (!user) {
        return done(null, false, { message: 'User not found' });
      }
      if (await bcrypt.compare(password, user.password)) {
        return done(null, user);
      } else {
        return done(null, false, { message: 'Incorrect password' });
      }
    } catch (error) {
      return done(error);
    }
  })
);

passport.serializeUser((user, done) => {
  done(null, user._id);
});

passport.deserializeUser(async (id, done) => {
  const user = await User.findById(id);
  done(null, user);
});

// Routes
app.get('/', (req, res) => {
  if (req.isAuthenticated()) {
    res.render('welcome.ejs', { user: req.user });
  } else {
    res.render('home.ejs', { user: null });
  }
});

app.get('/about', (req, res) => res.render("about.ejs", { user: req.user }));
app.get('/contact', (req, res) => res.render("contact.ejs", { user: req.user }));

app.get('/login', (req, res) => {
  res.render('login.ejs', { user: null });
});

app.post(
  '/login',
  passport.authenticate('local', {
    successRedirect: '/welcome',
    failureRedirect: '/login',
  })
);

app.get('/register', (req, res) => res.render("register.ejs", { user: null }));
app.post('/register', async (req, res) => {
  const { username, password, gender, phone, age, email } = req.body;
  console.log('Registering user:', username);

  try {
    const hashedPassword = await bcrypt.hash(password, 10);
    await User.create({ username, password: hashedPassword ,gender,phone,age,email});
    console.log('User registered successfully:', username);
    res.redirect('/login');
  } catch (error) {
    console.error('Error registering user:', error);
    res.status(500).send('Registration failed');
  }
});

app.get('/welcome', (req, res) => {
  if (req.isAuthenticated()) {
    res.render('welcome.ejs', { user: req.user });
  } else {
    res.redirect('/login');
  }
});

app.get('/booking/flight', (req, res) => {
  res.render("flight.ejs", { user: req.user });
});
app.post('/book-flight', async (req, res) => {
  try {
    // Extract user ID from the current user (you may get it from the authenticated user)
    const userId = req.user._id;
    const { departure, arrive, from, to, adults, children, 'cabin-class': cabinClass } = req.body;

    // Create a new Flight document using the model and set the required fields
    const flight = new Flight({
      userId,
      departure,
      arrive,
      from,
      to,
      adults,
      children,
      cabinClass,
    });

    // Save the flight booking details to the database
    await flight.save();
    // Perform other booking-related actions as needed
    res.redirect('/welcome');
  } catch (error) {
    console.error('Error booking flight:', error);
    res.status(500).send('Flight booking failed');
  }
});

app.get('/search/flightsearch', (req, res) => {
  res.render("flight-search.ejs", { user: req.user });
});
app.post('/search/flight', async (req, res) => {
  try {
    const { departure, destination } = req.body;
    const flightResults = await FlightSearch.find({ departure, destination });
    // Perform other booking-related actions as needed
    res.redirect('/welcome');
  } catch (error) {
    console.error('Error searching flight:', error);
    res.status(500).send('Flight not found');
  }
});

app.get('/booking/hotel', (req, res) => {
  res.render("hotel.ejs", { user: req.user });
});

app.post('/book-hotel', async (req, res) => {
  try {
    const { 'check-in': checkIn, 'check-out': checkOut, city, adults, children, 'room-type': roomType } = req.body;
    const userId = req.user._id;
    // Create a new Hotel document using the model
    const hotel = new Hotel({
      userId,
      checkIn,
      checkOut,
      city,
      adults,
      children,
      roomType,
    });

    // Save the hotel booking details to the database
    await hotel.save();
    // Perform other booking-related actions as needed
    res.redirect('/welcome');
  } catch (error) {
    console.error('Error booking hotel:', error);
    res.status(500).send('Hotel booking failed');
  }
});

app.get('/search/hotelsearch', (req, res) => {
  res.render("hotel-search.ejs", { user: req.user });
});
app.post('/search/hotel', async (req, res) => {
  try {
    const { city, 'room-type': roomType } = req.body;
    const hotelResults = await HotelSearch.find({ city, roomType });
    // Perform other booking-related actions as needed
    res.redirect('/welcome');
  } catch (error) {
    console.error('Error searching hotel:', error);
    res.status(500).send('Hotel not available');
  }
});

app.get('/booking/car', (req, res) => {
  res.render("car.ejs", { user: req.user });
});

app.post('/book/car', async (req, res) => {
  try {
    const userId = req.user._id;
    const { 'pickup-date': pickupDate, 'return-date': returnDate, 'pickup-location': pickupLocation, 'car-type': carType } = req.body;
    // Create a new CarHire document using the model
    const carHire = new CarHire({
      userId,
      pickupDate,
      returnDate,
      pickupLocation,
      carType,
    });
    // Save the car hire details to the database
    await carHire.save();
    // Perform other booking-related actions as needed
    res.redirect('/welcome');
  } catch (error) {
    console.error('Error booking car hire:', error);
    res.status(500).send('Car hire booking failed');
  }
});

app.get('/search/carsearch', (req, res) => {
  res.render("car-search.ejs", { user: req.user });
});

app.post('/search/car', async (req, res) => {
  try {
    const { 'pickup-location': pickupLocation, 'car-type': carType } = req.body;
    const carResults = await CarSearch.find({ pickupLocation, carType });
    // Perform other booking-related actions as needed
    res.redirect('/welcome');
  } catch (error) {
    console.error('Error searching car:', error);
    res.status(500).send('Car not available');
  }
});

app.get('/dashboard', async (req, res) => {
  if (req.isAuthenticated()) {
    // Retrieve booking details for the authenticated user
    const userId = req.user._id;
    const flights = await Flight.find({ userId });
    const hotels = await Hotel.find({ userId });
    const carHires = await CarHire.find({ userId });
    // Render the dashboard EJS template and pass the data
    res.render('dashboard.ejs', { flights, hotels, carHires, user: req.user });
  } else {
    res.redirect('/login');
  }
});

app.get('/logout', (req, res) => {
  req.logout(function (err) {
    if (err) {
      // Handle the error, if any
      console.error('Error during logout:', err);
    }
    res.redirect('/');
  });
});
app.get('/profile', (req, res) => {
  if (req.isAuthenticated()) {
    res.render('profile.ejs', { user: req.user });
  } else {
    res.redirect('/login');
  }
});

app.listen(port, () => console.log(`Server is running on http://localhost:${port}`));
