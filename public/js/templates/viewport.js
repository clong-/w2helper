var viewportTemplate = $.templates('viewport',

"<div class='viewport-controls controls'>" +
"</div>" +
"{{if !children.length}}" +
"  <div class='box'>" +
"    <h2>No {{:childType}} added...</h2>" +
"  </div>" +
"{{/if}}"

);

module.exports = viewportTemplate;
