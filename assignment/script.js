console.log("js works");

employees = [];

$(document).ready(readyNow);

function readyNow() {
  console.log("DOM is loaded!");
  $('#submit').on('click', addNewEmployee);
};

// add new employee object by grabbing data from the input fields
function addNewEmployee() {
  let newEmployee = {
    Name: $('#fname').val() + ' ' + $('#lname').val(),
    ID: $('#employeeNumber').val(),
    Title: $('#title').val(),
    Salary: $('#salary').val(),
  }
  render()
  employees.push(newEmployee);
}


function render() {
  console.log(employees);
  $('#employeeList').empty();

  for (const employee of employees) {
    console.log(employee)
    $('#employeeList').append(
      `<li>
      ${employee.Name} ${employee.Salary}
      </li>`
      )
    }   
    $('#fname').val('') 
    $('#lname').val('') 
    $('#employeeNumber').val('') 
    $('#title').val('') 
    $('#salary').val('') 
  }