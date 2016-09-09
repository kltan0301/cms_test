var env = process.env.NODE_ENV || 'DEVELOPMENT';

module.exports = require('./env/' + env + '.js');
