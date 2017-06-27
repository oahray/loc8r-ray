var homelist = function(req, res) {
  res.render('locations-list', { 
    title: 'Loc8r-Ray - find a place to work with wifi',
    pageHeader: {
      title: 'Loc8r-Ray',
      strapline: 'Find places to work with wifi near you'
    },
    sidebar: "Looking for wifi and a seat? Loc8r-Ray helps you find places to work when out and about. Perhaps with coffee, cake or a pint? Let Loc8r help you find the place you're looking for.",
    locations: [{
      name: 'Starcups',
      address: '125 High Street, Reading RG6 1PS',
      rating: 3,
      facilities: ['Hot drinks', 'Food', 'Premium wifi'],
      distance: '100m'
    }, {
      name: 'Cafe Hero',
      address: '15 Downing Street, Reading RG6 1PS',
      rating: 4,
      facilities: ['Hot drinks', 'Food', 'Premium wifi'],
      distance: '200m'
    }, {
      name: 'Burger Queen',
      address: '12 Maple Street, Reading RG6 1PS',
      rating: 2,
      facilities: ['Drinks', 'Food', 'Premium wifi'],
      distance: '250m'
    }, {
      name: 'Cheesy Royalty',
      address: '25 Chestnut Boulevard, Reading RG6 1PS',
      rating: 5,
      facilities: ['Drinks', 'Food', 'Premium wifi', 'Customized space'],
      distance: '150m'
    }]
  });
};

var locationInfo = function (req, res) {
  res.render('location-info', {
    title: 'Starcups',
    pageHeader: {title: 'Starcups'},
    sidebar: {
      context: 'is on Loc8r-Ray because it has accessible wifi and space to sit down with your laptop and get some work done.',
      callToAction: 'If you\'ve been here and you like it - or if you don\'t, please leave a review to help other people just like you.'
    },
    location: {
      name: 'Starcups',
      address: '125 High Street, Reading, RG6 1PS',
      rating: 3,
      facilities: ['Hot drinks', 'Food', 'Premium wifi'],
      coords: {lat: 51.455041, lng: -0.9690884},
      openingTimes: [{
        days: 'Monday - Friday',
        opening: '7:00am',
        closing: '7:00pm',
        closed: false
      }, {
        days: 'Saturday',
        opening: '8:00am',
        closing: '5:00pm',
        closed: false
      }, {
        days: 'Sunday',
        closed: true
      }],
      reviews: [{
        author: 'Oare Arene',
        rating: '5',
        timestamp: '17 June, 2017',
        reviewText: 'What a great place. I can\'t say enough good things about it'
      }, {
        author: 'Aite Momoh',
        rating: '3',
        timestamp: '28 June, 2017',
        reviewText: 'It was okay. Coffee wasn\'t great, but the wifi was fast.'
      }]
    }
  });
};

var addReview = function (req, res) {
  res.render('location-review-form', {
    title: 'Review Starcups on Loc8r-Ray',
    pageHeader: {title: 'Review Starcups'}
  });
};

module.exports = {
  homelist,
  locationInfo,
  addReview
};