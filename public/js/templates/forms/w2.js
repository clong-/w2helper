var w2Template = $.templates('w2',

"<div id='{{:domID}}' class='box'>" +
"  <h3>Employee W2</h3>" +
"  <form class='employee form-horizontal' id='employee-{{:id}}'>" +
"    <div class='field form-group'>" +
"      <label class='col-sm-1 control-label'>Employee Name:</label>" +
"      <div class='col-sm-3'>" +
"        <input class='form-control' name='employee-name'></input>" +
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

module.exports = w2Template;
