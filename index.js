const express = require("express");
const app = express();
const port = 8080;
const path = require("path");
const methodOverride=require("method-override");



app.set("view engine", "ejs");
app.use(express.static(path.join(__dirname, "public")));
app.use(express.urlencoded({ extended: true }));
app.use(methodOverride("_method"));
app.set("views", path.join(__dirname, "/views"));

app.listen(port, () => {
    console.log("Port is listening");
  });

