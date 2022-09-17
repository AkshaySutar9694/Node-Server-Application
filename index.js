const express = require("express");
const app = express();
const adminrouter = require("./routes/adminRoutes");
const userrouter = require("./routes/userRoutes");
const bodyParser = require("body-parser");

app.set("view engine", "ejs");
app.set("views", "views");
app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: false }));

app.use("/", userrouter);
app.use("/admin", adminrouter);

app.use((req, res, next) => {
  res.status(404).render("404", { pageTitle: "Page Not Found" });
});

app.listen(3000);
console.log("Server started on port 3000 !");
