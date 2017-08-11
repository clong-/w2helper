$(document).ready(() => {
  initialize();
});

HEADERS = 'CompanyName, CompanyID, CompanyWhatever, EmployeeName, EmployeeID, EmployeeWages';
COMPANYFIELDS = ['company-name', 'company-id', 'company-whatever'];
EMPLOYEEFIELDS = ['employee-name', 'employee-id', 'employee-wages'];

var employeeCount = 0;

function initialize() {
  $('#print-report').on('click', printReport);
  $('#add-employee').on('click', addEmployee);
  $('#employees').on('click', '.remove-employee', removeEmployee);
}

function printReport() {
  var lines = [];
  var companyObject = serializeFormToObject('company');
  var companyLineData = '';
  var employeeObjects = $('form.employee').map((i,d) => {
    return serializeFormToObject(d.id);
  });

  lines.push(HEADERS);

  COMPANYFIELDS.forEach((fieldName) => {
    companyLineData += companyObject[fieldName] + ', ';
  });

  employeeObjects.each((index, employee) => {
    var employeeLineData = '';
    console.log(employee);
    EMPLOYEEFIELDS.forEach((fieldName) => {
      employeeLineData += employee[fieldName] + ', ';
    });
    lines.push(companyLineData + employeeLineData.substring(0, employeeLineData.lastIndexOf(',')));
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

function generateLine(company, employee) {
  COMPANYFIELDS.forEach()
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
