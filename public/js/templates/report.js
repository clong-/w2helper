var reportTemplate = $.templates('report',

"<div id='{{:domID}}' class='box'>" +
"  <h1>Report Name Here!</h1>" +
"  <div id='report-controls' class='controls'>" +
"    <button id='add-business' class='btn btn-defaul'>Add Business</button>" +
"  </div>" +
"  <div id='businesses-pane' class='viewport box'>" +
"    {{if businesses.length}}" +
"      <h2>Businesses added!</h2>" +
"    {{else}}" +
"      <h2>No businesses added...</h2>" +
"    {{/if}}" +
"  </div>" +
"</div>"

);

module.exports = reportTemplate;
