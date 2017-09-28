var employeeTemplate = $.templates('employee',

"<div id='{{:domID}}' class='box'>" +
"  <h1>Employee Name Here!</h1>" +
"  <div class='employee-controls controls'>" +
"    <button id='remove-{{:domID}}' class='btn btn-default remove-employee'>Remove Employee</button>" +
"  </div>" +
"  <form class='employee form-horizontal' id='employee-{{:id}}'>" +
"    <div class='field form-group'>" +
"      <label class='col-sm-1 control-label'>Employee First Name:</label>" +
"      <div class='col-sm-3'>" +
"        <input class='form-control' name='employee-firstname'></input>" +
"      </div>" +
"    </div>" +
"    <div class='field form-group'>" +
"      <label class='col-sm-1 control-label'>Employee Last Name:</label>" +
"      <div class='col-sm-3'>" +
"        <input class='form-control' name='employee-lastname'></input>" +
"      </div>" +
"    </div>" +
"    <div class='field form-group'>" +
"      <label class='col-sm-1 control-label'>Employee SSN:</label>" +
"      <div class='col-sm-3'>" +
"        <input class='form-control' name='employee-SSN'></input>" +
"      </div>" +
"    </div>" +
"    <div class='field form-group'>" +
"      <label class='col-sm-1 control-label'>Employee Address:</label>" +
"      <div class='col-sm-3'>" +
"        <input class='form-control' name='employee-address'></input>" +
"      </div>" +
"    </div>" +
"    <div class='field form-group'>" +
"      <label class='col-sm-1 control-label'>City:</label>" +
"      <div class='col-sm-3'>" +
"        <input class='form-control' name='employee-city'></input>" +
"      </div>" +
"    </div>" +
"    <div class='field form-group'>" +
"      <label class='col-sm-1 control-label'>State:</label>" +
"      <div class='col-sm-3'>" +
"        <input class='form-control' name='employee-state'>This will be a dropdown for the state.  Should store just the abbrev.</input>" +
"      </div>" +
"    </div>" +
"    <div class='field form-group'>" +
"      <label class='col-sm-1 control-label'>Zip Code:</label>" +
"      <div class='col-sm-3'>" +
"        <input class='form-control' name='employee-zip'>Should accept 5 or nine digits.  Dash?</input>" +
"      </div>" +
"    </div>" +
"    <div class='field form-group'>" +
"      <label class='col-sm-1 control-label'>Employee Wages:</label>" +
"      <div class='col-sm-3'>" +
"        <input class='form-control' name='employee-wages'></input>" +
"      </div>" +
"    </div>" +
"  </form>" +
"</div>"

);

module.exports = employeeTemplate;
