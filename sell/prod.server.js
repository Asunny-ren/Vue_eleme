var express = require('express');
var config = require('./config/index');

var port = process.env.PORT || config.build.port;

var app = express();

var router = express.Router();

router.get('/', function (req, res, next) {
  req.url = '/index.html';
  next();
})

app.use(router);

var appData = require('./data.json')
var seller = appData.seller
var goods = appData.goods
var ratings = appData.ratings

var apiRoutes = express.Router()

// 获取商家数据
apiRoutes.get('/seller', function(req, res) {
  res.json({
    errno: 0,
    data: seller
  })
})

// 获取商品数据
apiRoutes.get('/goods', function(req, res) {
  res.json({
    errno: 0,
    data: goods
  })
})

// 获取评论数据
apiRoutes.get('/ratings', function(req, res) {
  res.json({
    errno: 0,
    data: ratings
  })
})

app.use('/api', apiRoutes)

app.use(express.static('./dist'));

module.exports = app.listen(port, function (err) {
  if(err) {
    console.log(err);
    return;
  }
  console.log('Listening at http://192.168.99.144:' + port + '\n')
});