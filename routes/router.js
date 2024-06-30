const url = require('url');

const userRoutes = require('./userRoutes/userRoutes');

const routeHandler = (req, res) => {
  const parsedUrl = url.parse(req.url, true);
  const path = parsedUrl.pathname;

  if (path === '/users' || path.startsWith('/users/')) {
    userRoutes(req, res);
  } else {
  res.setHeader('Content-Type', 'application/json');
  res.writeHead[404];
  res.end(JSON.stringify({ message: 'Route not found' }));
  }
};

module.exports = routeHandler;
