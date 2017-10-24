var businessTemplate = $.templates('business',

"<div id='{{:domID}}' class='box'>" +
"  <h1>Business Name Here!</h1>" +
"  <div class='business-forms'>" +
"  </div>" +
"  <div class='business-controls controls'>" +
"    <button id='add-employee-to-{{:domID}}' class='btn btn-default'>Add Employee</button>" +
"    <button id='remove-{{:domID}}' class='btn btn-default remove-business'>Remove Business</button>" +
"  </div>" +
"  <div class='employees-pane viewport box'>" +
"    {{if !employees.length}}" +
"      <h2>No employees added...</h2>" +
"    {{/if}}" +
"  </div>" +
"</div>"

);

module.exports = businessTemplate;
