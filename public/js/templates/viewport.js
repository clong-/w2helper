var viewportTemplate = $.templates('viewport',

"<div class='viewport-controls controls'>" +
"</div>" +
"{{if !children.length}}" +
"  <div class='empty box'>" +
"    <h3>No {{:childType}} added...</h3>" +
"  </div>" +
"{{/if}}"

);

module.exports = viewportTemplate;
