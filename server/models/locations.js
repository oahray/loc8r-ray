var mongoose = require('mongoose');

var openingTimesSchema = new mongoose.Schema({
  days: {type: String, required: true},
  opening: String,
  closing: String,
  closed: {type: Boolean, required: true}
});

var reviewSchema = new mongoose.Schema({
  author: String,
  rating: {type: Number, required: true, min: 0, max: 5},
  reviewText: String,
  createdOn: {type: Date, "default": Date.now}
});

var locationSchema = new mongoose.Schema({
  name: {type: String},
  addres: String,
  rating: {type: Number, "default": 0, min: 0, max: 5},
  facilities: [String],
  coords: {type: [Number], index: '2dsphere'},
  openingTimes: [openingTimesSchema],
  reviews: [reviewSchema]
});

var Location = mongoose.model('Location', locationSchema);

// var starcups = new Location({
//   name: 'Starcups',
//   address: '125 High Street, Reading, RG6 1PS',
//   rating: 3,
//   facilities: ['Hot drinks', 'Food', 'Premium wifi'],
//   coords: [-0.9690884, 51.455041],
//   openingTimes: [{
//     days: 'Monday - Friday',
//     opening: '7:00am',
//     closing: '7:00pm',
//     closed: false
//   }, {
//     days: 'Saturday',
//     opening: '8:00am',
//     closing: '5:00pm',
//     closed: false
//   }, {
//     days: 'Sunday',
//     closed: true
//   }],
//   reviews: [{
//     author: 'Oare Arene',
//     rating: 5,
//     timestamp: new Date("Jul 16, 2017"),
//     reviewText: "What a great place. I can't say enough good things about it."
//   }]
// });

// starcups.save().then((location) => {
//   console.log(location);
// }, (e) => console.log('Error saving location: ', e))

Location.find().then((locations) => {
    console.log(locations);
  }, (e) => {
    console.log(e);
  });;