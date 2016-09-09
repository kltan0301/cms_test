var Page = require('mongoose').model('Page');

module.exports = {
  index: function(req, res, next){
    Page.find({}, function(err, pages){
      if(err) return next(err);

      if(pages.length === 0){
        res.status(404).json({
          error: 'pages not found'
        });
      }
      res.json(pages);
    });
  },
  new: function(req, res){
    res.render('static_pages/index', {
      title: 'Home Page'
    });
  },
  create: function(req, res){
    var newPage = new Page(req.body);
    console.log(req.body);

    app.locals.urls = [newPage];

    newPage.save(function(err){
      if(err) return next(err);

      res.json(newPage);
    });
  },
  show: function(req, res) {
    Page.findOne({"_id":req.params.id}, function(err, page){
      console.log(page);
      res.render('static_pages/about', page);
    });
  },
  showBySlug: function(req, res){
    Page.findOne({"slug":req.params.slug}, function(err, page){
      res.render('static_pages/about', page);
    });
  }
};
