var viewportTemplate = $.templates('viewport',

"<div class='viewport-controls controls'>" +
"  <button class='btn btn-default prev-child' {{if !children.length}}disabled{{/if}}>&lt;&lt; Prev {{:childType}}</button>" +
"  <button class='btn btn-default next-child' {{if !children.length}}disabled{{/if}}>Next {{:childType}} &gt;&gt;</button>" +
"</div>" +
"{{if !children.length}}" +
"  <div class='box'>" +
"    <h2>No {{:childType}} added...</h2>" +
"  </div>" +
"{{/if}}"

);

module.exports = viewportTemplate;
