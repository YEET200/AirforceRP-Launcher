fs = require("fs")
const express = require("express");
const app = express();
var bodyParser = require('body-parser');
var news = { 'title': 'Launcher Complete', 'content': 'Launcher Complete', 'redirect':'https://airforcerp.com'} // EDIT THIS TO EDIT THE IN-LAUNCHER NEWS, DO NOT FORGOT TO RESTART THE SERVER AFTER THAT

// end modules

var urlencodedParser = bodyParser.urlencoded({ extended: false })
app.use(bodyParser.json())
app.listen(5566, () => {
    console.log("AirForceRP Backend 1.0.0")
    console.log("== Listening on port 5566");
});

// When a GET request is executed on {server}:5566/api/getnews/, send the JSON news
app.get("/api/getnews/", (req, res) => {
    res.writeHead(200, {'Content-Type': 'text/plain'})
    const jsonContent = JSON.stringify(news);
    res.end(jsonContent);
});
