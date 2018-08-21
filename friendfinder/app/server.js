// dependencies 

var express = require('express');
var bodyParser = require('body-parser');

// express app 
// var app= requireexpress();
var app = express();
var PORT = process.env.PORT || 8080;

// ===============================================================

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// var p = path.join(__dirname, '/routing/apiRoutes.js')
// var o = path.join(__dirname, '/routing/htmlRoutes.js')

// require(p)(app);
// require(o)(app);

// =======================================================================

let apiRoutes = require('./app/routing/apiroutes')
let htmlRoutes = require('./app/routing/htmlroutes')

// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({ extended: true }));
// app.use(bodyParser.text());

app.use("/api", apiRoutes)   
// ("./routing/htmlRoutes")(app);
app.use("/", htmlRoutes)


app.listen(PORT, function () {
            console.log('App listening on PORT: ' + PORT);
        });
