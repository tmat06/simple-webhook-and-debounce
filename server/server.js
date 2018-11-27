const express = require("express");
const bodyParser = require("body-parser");
const axios = require("axios");
const app = express();

app.use(bodyParser.json());

app.post("/zap", (req, res) => {
  axios
    .post("https://hooks.zapier.com/hooks/catch/4110352/ctvx8r/", {
      message: req.body.message
    })
    .then(response => {
      res.status(200).send(response.data);
    });
});

app.listen(3333, () => console.log("hello on 3333"));
