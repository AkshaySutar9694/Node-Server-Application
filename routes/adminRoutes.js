const express = require("express");
const router = express.Router();

router.get("/", (request, response, next) => {
  response.send("Hello from admin router!!");
});

module.exports = router;
