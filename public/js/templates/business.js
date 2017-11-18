var businessTemplate = $.templates('business',

"<div id='{{:domID}}' class='business box'>" +
"  <h1>Business Name Here!</h1>" +
"  <div class='business-forms'>" +
"  </div>" +
"  <div class='business-controls controls'>" +
"    <button id='add-employee-to-{{:domID}}' class='btn btn-default'>Add Employee</button>" +
"    <button id='remove-{{:domID}}' class='btn btn-default remove-business'>Remove Business</button>" +
"  </div>" +
"  <div class='employees-pane viewport'>" +
"  </div>" +
"</div>"

);

module.exports = businessTemplate;
