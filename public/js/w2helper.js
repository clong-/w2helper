$(document).ready(() => {
  initialize();
});

HEADERS = 'BusinessName, BusinessFEIN, BusinessAddress, BusinessCity, BusinessState, BusinessZipCode, BusinessWithholdingAcct, EmployeeFirstName, EmployeeLastName, EmployeeSSN, EmployeeAddress, EmployeeCity, EmployeeState, EmployeeZipCode, EmployeeWages';
BUSINESSFIELDS = ['legal-name', 'business-FEIN', 'business-address', 'business-city', 'business-state', 'business-zip', 'business-withholdingAcct'];
EMPLOYEEFIELDS = ['employee-firstname', 'employee-lastname', 'employee-SSN', 'employee-address', 'employee-city', 'employee-state', 'employee-zip', 'employee-wages'];

var employeeCount = 0;

function initialize() {
  $('#print-report').on('click', printReport);
  $('#add-employee').on('click', addEmployee);
  $('#employees').on('click', '.remove-employee', removeEmployee);
  $('.business').html($.render.business());
}

function printReport() {
  var lines = [];
  var businessObject = serializeFormToObject('business');
  var businessLineData = '';
  var employeeObjects = $('form.employee').map((i,d) => {
    return serializeFormToObject(d.id);
  });

  lines.push(HEADERS);

  BUSINESSFIELDS.forEach((fieldName) => {
    businessLineData += businessObject[fieldName] + ', ';
  });

  employeeObjects.each((index, employee) => {
    var employeeLineData = '';
    console.log(employee);
    EMPLOYEEFIELDS.forEach((fieldName) => {
      employeeLineData += employee[fieldName] + ', ';
    });
    lines.push(businessLineData + employeeLineData.substring(0, employeeLineData.lastIndexOf(',')));
  });

  displayData(lines);
}

function serializeFormToObject(id) {
  var data = $('#'+id).serializeArray();
  var mapped = {};
  data.forEach((d) => {
    mapped[d.name] = d.value;
  });
  return mapped;
}

function generateLine(business, employee) {
  BUSINESSFIELDS.forEach()
}

function displayData(lines) {
  var html = "<table>"
  lines.forEach((row) => {
    html += "<tr>";
    row.split(', ').forEach((cell) => {
      html += "<td>";
      html += cell;
      html += "</td>";
    });
    html += "</tr>";
  });
  html += "</table>";

  $('#printout').html(html);
}

function addEmployee() {
  $('#employees').append($.render.employee({ id: employeeCount }));
  employeeCount++;
}

function removeEmployee(e) {
  $(e.target).closest('.form').remove();
}
