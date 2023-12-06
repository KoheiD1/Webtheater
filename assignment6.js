
const express = require("express");
const app = express();
app.use(express.json());
const fs = require("fs");

app.use("/js", express.static("./public/js"));
app.use("/css", express.static("./public/css"));
app.use("/img", express.static("./public/img"));
app.use("/fonts", express.static("./public/fonts"));
app.use("/text", express.static("./public/text"));
app.use("/videos", express.static("./public/videos"));

app.get("/", function (req, res) {
    let doc = fs.readFileSync("./app/html/index.html", "utf8");
    res.send(doc);
});

app.get("/movies", function (req, res) {

    let formatOfResponse = req.query["format"];
    //let formatOfResponse = req.query.format;
    //console.log(req.query);

    // e.g.,: http://localhost:8000/weekdays?format=html
    // e.g.,: http://localhost:8000/weekdays?format=json
    if (formatOfResponse == "html") {
        // MIME type
        res.setHeader("Content-Type", "text/html");
        res.send(fs.readFileSync("./app/data/movie1.html", "utf8"));

    } else if (formatOfResponse == "json") {
        // MIME type
        res.setHeader("Content-Type", "application/json");
        res.send(fs.readFileSync("./app/data/movies.js", "utf8"));


    }else if (formatOfResponse == "html1") {
      
        res.setHeader("Content-Type", "text/html");
        res.send(fs.readFileSync("./app/data/movies2.html", "utf8"));
    }else if (formatOfResponse == "html2") {
        // MIME type
        res.setHeader("Content-Type", "text/html");
        res.send(fs.readFileSync("./app/data/movies3.html", "utf8"));
    }else if (formatOfResponse == "html3") {
        // MIME type
        res.setHeader("Content-Type", "text/html");
        res.send(fs.readFileSync("./app/data/movies4.html", "utf8"));
    }else if (formatOfResponse == "html4") {
        // MIME type
        res.setHeader("Content-Type", "text/html");
        res.send(fs.readFileSync("./app/data/movies5.html", "utf8"));
    }else if (formatOfResponse == "html5") {
        // MIME type
        res.setHeader("Content-Type", "text/html");
        res.send(fs.readFileSync("./app/data/movies6.html", "utf8"));
    }else if (formatOfResponse == "html6") {
        // MIME type
        res.setHeader("Content-Type", "text/html");
        res.send(fs.readFileSync("./app/data/movies7.html", "utf8"));
    }else if (formatOfResponse == "html7") {
        // MIME type
        res.setHeader("Content-Type", "text/html");
        res.send(fs.readFileSync("./app/data/movies8.html", "utf8"));
    }else if (formatOfResponse == "html8") {
        // MIME type
        res.setHeader("Content-Type", "text/html");
        res.send(fs.readFileSync("./app/data/movies9.html", "utf8"));
    }else if (formatOfResponse == "html9") {
        // MIME type
        res.setHeader("Content-Type", "text/html");
        res.send(fs.readFileSync("./app/data/movies10.html", "utf8"));
    }
    
    else {
        // just send JSON message
        res.send({ status: "fail", msg: "Wrong format!" });
    }
});


app.use(function (req, res, next) {
    res.status(404).send("<html><head><title>Page not found!</title></head><body><p>Nothing here.</p></body></html>");
});


let port = 8000;
app.listen(port, function () {
    console.log("Example app listening on port " + port + "!");
});
