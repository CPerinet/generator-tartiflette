var express = require('express');
var router = express.Router();
var HelloSchema = require('./schemas/hello');

router.use(function(req, res, next) {
    req.headers['if-none-match'] = 'no-match-for-this';
    next();
});

router.route('/test')

  //
  // GET
  
  .get((req, res) => {
    res.json({
      message : "Hello world"
    })
  })


router.route('*')
  .all((req, res) => {
    res.status(404).json({error: 'Ooops, wrong path !'});
  })

module.exports = router;