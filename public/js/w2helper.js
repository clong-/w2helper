var Report = require('./models/report');
var HelpPanel = require('./models/helpPanel');
var FileModal = require('./models/fileModal');

$(document).ready(function() {
  initialize();
});

HEADERS = 'BusinessName, BusinessFEIN, BusinessAddress, BusinessCity, BusinessState, BusinessZipCode, BusinessWithholdingAcct, EmployeeFirstName, EmployeeLastName, EmployeeSSN, EmployeeAddress, EmployeeCity, EmployeeState, EmployeeZipCode, EmployeeWages';
BUSINESSFIELDS = ['legal-name', 'business-FEIN', 'business-address', 'business-city', 'business-state', 'business-zip', 'business-withholdingAcct'];
EMPLOYEEFIELDS = ['employee-firstname', 'employee-lastname', 'employee-SSN', 'employee-address', 'employee-city', 'employee-state', 'employee-zip', 'employee-wages'];

var nextReportID = 0;

function initialize() {
  var appContext = 'main';
  var currentReport = Report(appContext, 'report-'+nextReportID);
  var helpPanel = HelpPanel(appContext, 'help-panel');
  var fileModal = FileModal(appContext, 'file-modal');
  $.views.settings.allowCode(true);
  currentReport.render();
  helpPanel.render();
  fileModal.render(); //hidden by default
  nextReportID += 1;
}
