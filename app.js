const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");

const PORT = process.env.PORT || 5000;
const app = express();

app.use(cors());
app.use(bodyParser.json());

const middleware = function (req, res, next) {
    console.log("Istek gonderildi");
    next();
};

app.get("/hello",middleware, function (req, res) {
  res.json("Get requesti calisti...");
});

app.post("/hello",middleware,middleware, function (req, res) {
    res.json("Post requesti calisti...");
});

app.put("/hello",middleware, function (req, res) {
    res.json("Put requesti calisti...");
});

app.delete("/hello",middleware, function (req, res) {
    res.json("Delete requesti calisti...");
});

app.listen(PORT, () => {
  console.log("Ready on http://localhost:" + PORT);
});