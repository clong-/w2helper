var helpPanelTemplate = $.templates('helpPanel',

"<div id='{{:domID}}' class='box help-panel'>" +
"  <div class='help-header'>" +
"    <h4>{{:helpInfo.header}}</h4>" +
"  </div>" +
"  <div class='help-body'>" +
"    <p>{{:helpInfo.body}}</p>" +
"  </div>" +
"  {{if helpInfo.validations.length}}" +
"    <div class='help-validations'>" +
"      <ul>" +
"        {{for helpInfo.validations}}" +
"          <li class='{{:state}}'>{{:text}}</li>" +
"        {{/for}}" +
"      </ul>" +
"    </div>" +
"  {{/if}}" +
"</div>"

);

module.exports = helpPanelTemplate;
