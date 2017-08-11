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
"      <label class='col-sm-1 control-label'>Name:</label>" +
"      <div class='col-sm-3'>" +
"        <input class='form-control' name='employee-name'></input>" +
"      </div>" +
"    </div>" +
"    <div class='field form-group'>" +
"      <label class='col-sm-1 control-label'>ID:</label>" +
"      <div class='col-sm-3'>" +
"        <input class='form-control' name='employee-id'></input>" +
"      </div>" +
"    </div>" +
"    <div class='field form-group'>" +
"      <label class='col-sm-1 control-label'>Wages:</label>" +
"      <div class='col-sm-3'>" +
"        <input class='form-control' name='employee-wages'></input>" +
"      </div>" +
"    </div>" +
"  </form>" +
"</div>"

);
