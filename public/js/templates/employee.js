$.templates('employee',

"<div class='form'>" +
"  <div class='employee-header'>" +
"    <div>" +
"      <h3>Employee Information</h3>" +
"    </div>" +
"    <div class='controls'>" +
"      <button class='remove-employee'>X</button>" +
"    </div>" +
"  </div>" +
"  <form class='employee' id='employee-{{:id}}'>" +
"    <div class='field'>" +
"      <label>Employee Name:</label>" +
"      <input name='employee-name'></input>" +
"    </div>" +
"    <div class='field'>" +
"      <label>Employee ID:</label>" +
"      <input name='employee-id'></input>" +
"    </div>" +
"    <div class='field'>" +
"      <label>Employee Wages:</label>" +
"      <input name='employee-wages'></input>" +
"    </div>" +
"  </form>" +
"</div>"

);
