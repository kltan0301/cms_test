module.exports = function(app){
  var staticPageController = require('../controllers/staticpage.server.controller');
  //routing

  app.get('/admin', staticPageController.new);

  app.route('/page/:id')
      .get(staticPageController.show);

  app.route('/admin/pages')
     .get(staticPageController.index)
     .post(staticPageController.create);

  app.get('/:slug', staticPageController.showBySlug); 
};
