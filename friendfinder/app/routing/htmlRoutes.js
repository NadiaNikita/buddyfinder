var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");




var router = express.Router();

var PORT = 8080;


// module.exports = function (app) {
    
    // router.get("/", function (req, res) {

    //     res.sendFile(path.join(__dirname, "../public/home.html"));
    // });

    router.get("/survey", function (req, res) {

        res.sendFile(path.join(__dirname, "../public/survey.html"));
    });

    module.exports = router
// };