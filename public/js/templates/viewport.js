var viewportTemplate = $.templates('viewport',

"<div class='viewport-controls controls'>" +
"  {{if showCounter && children.length}}" +
"    <div class='viewport-counter'>{{:index+1}} / {{:children.length}}</div>" +
"  {{/if}}" +
"</div>" +
"{{if !children.length}}" +
"  <div class='{{:childType}} box empty'>" +
"    <h3>No {{:childType}} added...</h3>" +
"  </div>" +
"{{/if}}"

);

module.exports = viewportTemplate;
