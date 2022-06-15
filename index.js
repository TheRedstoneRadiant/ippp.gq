const express = require("express");
const axios = require("axios");

const app = express();
app.set("view engine", "ejs");

app.get("/", (req, res) => {
  res.redirect(req.header('x-forwarded-for'));
});

app.get("/:ipAddress", async (req, res) => {
  const response = await axios.get(`http://ip-api.com/json/${req.params.ipAddress}`);
  res.render("index", { lookup: response.data });
});

app.listen(8080);