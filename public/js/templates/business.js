var businessTemplate = $.templates('business',

"<div id='{{:domID}}' class='box'>" +
"  <h1>Business Name Here!</h1>" +
"  <div id='report-controls' class='controls'>" +
"    <button id='add-employee-to-{{:domID}}' class='btn btn-default'>Add Employee</button>" +
"  </div>" +
"  <div class='employees-pane viewport box'>" +
"    {{if !employees.length}}" +
"      <h2>No employees added...</h2>" +
"    {{/if}}" +
"  </div>" +
"</div>"

);

module.exports = businessTemplate;
