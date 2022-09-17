const express = require("express");
const router = express.Router();
const path = require("../utils/path");
const employeeController = require("../controller/EmployeeController");

router.get("/", employeeController.getAllEmployees);

module.exports = router;
