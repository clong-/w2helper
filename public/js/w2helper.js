var Report = require('./models/report');

$(document).ready(function() {
  initialize();
});

HEADERS = 'BusinessName, BusinessFEIN, BusinessAddress, BusinessCity, BusinessState, BusinessZipCode, BusinessWithholdingAcct, EmployeeFirstName, EmployeeLastName, EmployeeSSN, EmployeeAddress, EmployeeCity, EmployeeState, EmployeeZipCode, EmployeeWages';
BUSINESSFIELDS = ['legal-name', 'business-FEIN', 'business-address', 'business-city', 'business-state', 'business-zip', 'business-withholdingAcct'];
EMPLOYEEFIELDS = ['employee-firstname', 'employee-lastname', 'employee-SSN', 'employee-address', 'employee-city', 'employee-state', 'employee-zip', 'employee-wages'];

var nextReportID = 0;

function initialize() {
  var reportContext = $("main");
  var currentReport = Report(reportContext, nextReportID);
  currentReport.render();
  nextReportID += 1;
}
