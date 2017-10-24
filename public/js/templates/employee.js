var employeeTemplate = $.templates('employee',

"<div id='{{:domID}}' class='employee box'>" +
"  <h1>Employee Name Here!</h1>" +
"  <div class='employee-forms'>" +
"  </div>" +
"  <div class='employee-controls controls'>" +
"    <button id='remove-{{:domID}}' class='btn btn-default remove-employee'>Remove Employee</button>" +
"  </div>" +
"</div>"

);

module.exports = employeeTemplate;
