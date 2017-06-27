var about = function(req, res) {
  res.render('generic-text', { title: 'About Ray' });
};

module.exports = {
  about
};