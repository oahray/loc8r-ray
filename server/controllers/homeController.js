var homeController = function(req, res, next) {
  res.render('index', { title: 'Express Ray' });
};

module.exports = homeController;