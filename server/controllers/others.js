var about = function(req, res) {
  res.render('generic-text', {
    title: 'About Loc8r-Ray',
    content: "| Loc8r was created to help people find places to sit down and get a bit of work done. \n\n\ Created for your convenience."
  });
};

module.exports = {
  about
};