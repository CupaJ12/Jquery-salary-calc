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
  employees.push(newEmployee);
  render()
}


function render() {
  console.log(employees);
  $('#employeeList').empty();

  for (const employee of employees) {
    console.log(employee)
    $('#employeeList').append(
      `<tr> <td>
      ${employee.Name} ${employee.Salary}
      </td></tr>`
      )
    }   
    $('#fname').val('') 
    $('#lname').val('') 
    $('#employeeNumber').val('') 
    $('#title').val('') 
    $('#salary').val('') 
  }


  // adding employees to list, comment out once finished with table structure

  function pseudoRender() {
    $('#garageList').empty();
  
    for (const employee of employees) {
      console.log(employee)
          $('#garageList').append(
            `<li>
            ${car.year} ${car.make} ${car.model}
            </li>`
            )
          }   
          $('#yearInput').val('') 
          $('#modelInput').val('') 
          $('#makeInput').val('') 
        }
