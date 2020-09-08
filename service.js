const express = require("express");
const logger = require("morgan");
const mongoose = require("mongoose");
const compression = require("compression");
const PORT = process.env.PORT || 3009;
const app = express();

app.use(logger("dev"));
app.use(compression());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));
mongoose.connect(process.env.MONGODB_URI || "mongodb+srv://Dhanya:Ahalyamol14*@offline.2to7l.mongodb.net/budget?retryWrites=true&w=majority", { useNewUrlParser: true, useFindAndModify: false });




app.use(require("./routes/api.js"));

app.listen(PORT, () => {
  console.log(`App running on port ${PORT}!`);
});
