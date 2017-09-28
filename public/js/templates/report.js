var reportTemplate = $.templates('report',

"<div id='{{:domID}}' class='box'>" +
"  <h1>Report Name Here!</h1>" +
"  <div class='report-controls controls'>" +
"    <button id='add-business-to-{{:domID}}' class='btn btn-default'>Add Business</button>" +
"  </div>" +
"  <div class='businesses-pane viewport box'>" +
"    {{if !businesses.length}}" +
"      <h2>No businesses added...</h2>" +
"    {{/if}}" +
"  </div>" +
"</div>"

);

module.exports = reportTemplate;
