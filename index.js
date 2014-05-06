var connect = require('connect')

module.exports = function(){
  var app = connect();
  app.use(function(req, res, next){
    var url = req.url;
    if(url=="/current-time"){
      res.end(new Date().toISOString());
    }else{
      next();
    }
  })
  return app;
}