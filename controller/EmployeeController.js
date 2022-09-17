const path = require("../utils/path");
const Employee = require("../model/EmployeeModel");

exports.getAllEmployees = (req, res, next) => {
  Employee.fetchAllEmployees((employees) => {
    res.render("home", { employees: employees, pageTitle: "Home" });
  });
};

exports.saveEmployee = (req, res, next) => {
  Employee.fetchAllEmployees((employees) => {
    let anEmployee = new Employee(
      employees.length + 1,
      req.body.name,
      req.body.email,
      req.body.mobilenumber,
      req.body.age,
      req.body.place,
      req.body.skill,
      req.body.department,
      req.body.salary
    );
    anEmployee.save();
    res.redirect("/");
  });
};
