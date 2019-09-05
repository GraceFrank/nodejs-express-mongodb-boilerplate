const users = require('./user');

const routes = app =>{
  app.use('/api/users', users);
};


module.exports = routes;