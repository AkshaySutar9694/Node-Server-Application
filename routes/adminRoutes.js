const express = require("express");
const router = express.Router();
const path = require("../utils/path");

router.get("/", (request, response, next) => {
  response.sendFile(path + "/views/addemployee.html");
});

module.exports = router;
