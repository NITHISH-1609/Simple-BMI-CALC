const bodyParser = require("body-parser");
const express = require("express");

const app = express();


app.use(bodyParser.urlencoded({
    extended: true
}));


app.listen(3000, function () {
    console.log("Started Sucessfully!");

})
app.get("/", function (req, res) {
    res.sendFile(__dirname + "/bmi.html");

})

app.post("/", function (req, res) {
    var w = Number(req.body.weight);
    var h = Number(req.body.height);
    var result = w / (h * h);
    res.send("<h1><em>Your BMI is:</em></h1>" + result);
})