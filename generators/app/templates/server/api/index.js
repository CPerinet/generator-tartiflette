var express = require('express')
const router = express.Router()

const ping = require('./ping');

router.use(function(req, res, next) {
	console.log('Middleware')
    req.headers['if-none-match'] = 'no-match-for-this'
    next();
});



router.route('/ping').get(ping.getPing)
router.route('/pong').get(ping.getPong)



router.route('*')
  .all((req, res) => {
    res.status(404).json({error: 'Ooops, wrong path !'})
  })

module.exports = router;
