var reportTemplate = $.templates('report',

"<div id='{{:domID}}' class='box'>" +
"  <h1>Report Name Here!</h1>" +
"  <div class='report-forms'>" +
"  </div>" +
"  <div class='report-controls controls'>" +
"    <button id='serialize-report' class='btn btn-default'>Log Report Data</button>" +
"    <button id='show-file-modal' class='btn btn-default'>Show File Modal</button>" +
//"    <button id='add-business-to-{{:domID}}' class='btn btn-default'>Add Business</button>" + //multiple businesses
"  </div>" +
"  <div class='businesses-pane viewport'>" +
"  </div>" +
"</div>"

);

module.exports = reportTemplate;
