const express = require("express");
const router = express.Router();
const path = require("../utils/path");
const employeeController = require("../controller/EmployeeController");

router.get("/", (request, response, next) => {
  response.render("addemployee", { pageTitle: "Add an Employee" });
});

router.post("/addEmployee", employeeController.saveEmployee);

module.exports = router;
