var express = require('express')
var cors = require('cors')
var app = express()

app.use(cors({
  origin: 'http://localhost:5173',
}))
app.use(express.static('public', {
  // We want manual control over the caching headers.
  cacheControl: false,
  etag: false,
  lastModified: false,
}));

const sleep = (ms) => new Promise(resolve => setTimeout(resolve, ms));

app.get('/hello', function (req, res, next) {
  console.log('hello ' + req.query.id);
  res.set('Cache-Control', 'max-age=5, stale-while-revalidate=10');
  const second = (new Date()).getSeconds();
  const min = (new Date()).getMinutes();
  const hour = (new Date()).getHours();
  sleep(1000).then(() => {
    res.json({
      time: `${hour}:${min}:${second}`,
      id: req.query.id
    });
  });
})

app.listen(80, function () {
  console.log('web server listening on port 80')
})
