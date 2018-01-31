var express  = require('express');
var app      = express();
const server = 3000;





//Start the server

app.listen(server, function(){
  console.log("Server has been started on " + server);
});
