var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var PageSchema = new Schema({
  header: String,
  slug: String,
  body: String
});

mongoose.model('Page', PageSchema);
