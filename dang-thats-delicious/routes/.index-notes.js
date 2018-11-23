const express = require('express');
const router = express.Router();

// Do work here
// How the router works
// Get the URL - router.get('/' ...
// A callback function is executed
// That takes 1) a request param - an object of incoming info
// 2) a response param - an object with methods for sending data back to the user
// 3) a next param for where you might want to process the data
router.get('/', (req, res) => {
  // You can only send one response
  // const james = { name: 'james', age: 34, cool: true };
  // res.json(james);
  // res.send('Hey! It works!');
  // res.send(req.query); will send a response with the URL query string like http://localhost:7777/?name=james&age=100
  // - as an object
  // res.send(req.query.name); would send back the value for the name URL query parameter
  res.send(req.query.name);


});

router.get('/reverse/:name', (req, res) => {
  // All of the data in the request is stored in the req variable
  // res.send(req.params);
  // Access router variables via req.params, which returns a object of params
  // Access a specific param property with re.params.name etc.

  // Reverse the param
  // const reverse = res.send(req.params.name);
  const reverse = req.params.name.split('').reverse().join('');
  res.send(reverse);

});



module.exports = router;
