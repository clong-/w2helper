var businessTemplate = $.templates('business',

"<div id='{{:domID}}' class='business box'>" +
"  <h2>Business Information</h2>" +
"  <div class='business-forms'>" +
"  </div>" +
"  <div class='business-controls controls'>" +
"  <button class='btn btn-default prev-child' {{if !employees.length}}disabled{{/if}}>&lt;&lt; Prev Employee</button>" +
"    <button id='add-employee-to-{{:domID}}' class='btn btn-default'>Add Employee</button>" +
"  <button class='btn btn-default next-child' {{if !employees.length}}disabled{{/if}}>Next Employee &gt;&gt;</button>" +
//multiple businesses
// "    <button id='remove-{{:domID}}' class='btn btn-default remove-business'>Remove Business</button>" +
"  </div>" +
"  <div class='employees-pane viewport'>" +
"  </div>" +
"</div>"

);

module.exports = businessTemplate;
