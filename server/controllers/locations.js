var homelist = function(req, res) {
  res.render('locations-list', { title: 'Home' });
};

var locationInfo = function (req, res) {
  res.render('location-info', { title: 'Location info' });
};

var addReview = function (req, res) {
  res.render('location-review-form', { title: 'Add review' });
};

module.exports = {
  homelist,
  locationInfo,
  addReview
};