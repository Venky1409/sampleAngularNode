const express = require('express');
const router = express.Router();
const http = require('http');

/* GET api listing. */
router.get('/', (req, res) => {
  res.send('api works');
});

router.get('/sampleData', (req, res) => {
  // Get posts from the mock api
  // This should ideally be replaced with a service that connects to MongoDB
  let data = [{"name": "venky", "age": 25, "email": "venky@gmail.com"},
			  {"name": "abhi", "age": 26, "email": "abhi@gmail.com"},
			  {"name": "sri", "age": 27, "email": "sri@gmail.com"},
			  {"name": "pavan", "age": 28, "email": "pavan@gmail.com"},
			  {"name": "shiva", "age": 29, "email": "shiva@gmail.com"}]
      res.send(data);
});

module.exports = router;