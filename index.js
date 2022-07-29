const express = require("express");
const app = express();
const adminrouter = require("./routes/adminRoutes");
const userrouter = require("./routes/userRoutes");
app.set("views", "views");
app.use("/user", userrouter);
app.use("/admin", adminrouter);
app.use(express.static("public"));

app.listen(3000);
console.log("Server started on port 3000 !");
