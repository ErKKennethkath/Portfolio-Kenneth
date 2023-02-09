const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.set('view engine', 'ejs');

const logRequest = (req, res, next) => {
  console.log(`Received ${req.method} request to ${req.originalUrl}`);
  next();
};
app.use(logRequest);

const logLeaveOrders = (req, res, next) => {
  if (req.originalUrl !== '/orders') {
    console.log(`Left the /orders page`);
  }
  next();
};
app.use(logLeaveOrders);


app.get('/', (req, res) => {//app root page
  res.render('home', { title: 'The Shake Stand' });
});
app.get('/about', function(req, res) {//routing to orders page
    res.render('about');
  });
  app.get('/social', function(req, res) {//routing to consult page
    res.render('social');
  });
  app.get('/education', function(req, res) {//routing to consult page
    res.render('education');
  });
  app.get('/reachout', function(req, res) {//routing to reachout page
    res.render('reachout');
  });
  app.get('/projects', function(req, res) {//routing to reachout page
    res.render('projects');
  });
  

  app.listen(port, () => {
    console.log(`Serving in port ${port}`);
  });
app.use(express.static(__dirname + '/public'));