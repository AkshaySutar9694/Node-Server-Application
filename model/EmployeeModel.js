const fs = require("fs");
const path = require("../utils/path");

class Employee {
  constructor(
    id,
    name,
    email,
    mobilenumber,
    age,
    place,
    skill,
    department,
    salary
  ) {
    this.id = id;
    this.name = name;
    this.email = email;
    this.mobilenumber = mobilenumber;
    this.age = age;
    this.place = place;
    this.skill = skill;
    this.department = department;
    this.salary = salary;
  }

  save() {
    const pathToFile = path + "/data/employee.json";
    fs.readFile(pathToFile, (err, fileData) => {
      let employees = [];
      if (!err) {
        employees = JSON.parse(fileData);
      }
      employees.push(this);
      fs.writeFile(pathToFile, JSON.stringify(employees), (err) => {
        console.error(err);
      });
    });
  }

  static fetchAllEmployees(callback) {
    const pathToFile = path + "/data/employee.json";
    fs.readFile(pathToFile, (err, fileData) => {
      if (err) {
        callback([]);
      }
      callback(JSON.parse(fileData));
    });
  }
}

module.exports = Employee;
