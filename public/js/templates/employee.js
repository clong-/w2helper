var employeeTemplate = $.templates('employee',

"<div id='{{:domID}}' class='employee box'>" +
"  <div class='employee-title title'>" +
"    <h1>Employee Name Here!</h1>" +
"  </div>" +
"  <div class='employee-controls controls'>" +
"    <button id='remove-{{:domID}}' class='btn btn-default remove-employee'>Remove Employee</button>" +
"  </div>" +
"  <div class='employee-forms'>" +
"  </div>" +
"</div>"

);

module.exports = employeeTemplate;
