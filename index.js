const express = require("express");
const app = express();
const adminrouter = require("./routes/adminRoutes");
const userrouter = require("./routes/userRoutes");

app.use("/user", userrouter);
app.use("/admin", adminrouter);

app.listen(3000);
console.log("Server started on port 3000 !");
