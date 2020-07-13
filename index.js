const express = require("express");
const bodyParser = require("body-parser");

const app = express();

const appRoutes = require("./routes/appRoutes");

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(appRoutes);

if(process.env.NODE_ENV === "production") {
  // express will serve up production assets like main.js
  // and main.css
  app.use(express.static("client/build"));

  // express will serve up index.html if
  // it doesnt recognize the route
  const path = require("path");
  app.use("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"))
  })
}

const PORT = process.env.PORT || 8000;
app.listen(PORT);
