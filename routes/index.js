var express = require('express')
var router = express.Router()

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', { title: 'Cloud Foundry' })
})

/* GET Test Page. */
router.get('/test', function (req, res, next) {
  res.render('test', { title: 'This is a Test Page' })
})

module.exports = router
