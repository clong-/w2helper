$.templates('employee',

"<div class='form'>" +
"  <div class='employee-header'>" +
"    <div>" +
"      <h3>Employee Information</h3>" +
"    </div>" +
"    <div class='controls'>" +
"      <button class='remove-employee btn btn-default btn-sm'>&times;</button>" +
"    </div>" +
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
