var fileModalTemplate = $.templates('fileModal',

"<div class='modal-background' id='{{:domID}}' {{if !visible}}hidden{{/if}}>" +
"  <div class='modal-content'>" +
"    <h3>This is the file modal!</h3>" +
"    <div class='body'>" +
"      {{if state == 'failed'}}" +
"        <p>" +
"          Uh oh." +
"          <br>" +
"          Looks like your report failed validation for some reason..." +
"          <br>" +
"          Give your forms a once-over and get rid of any red you find." +
"        </p>" +
"      {{else}}" +
"        <p>" +
"          Here's some text explaining what's up with this modal." +
"          <br>" +
"          Maybe some sort of disclaimer or donation suggestion or something?" +
"          <br>" +
"          Anyway, click the button below to get your file." +
"        </p>" +
"      {{/if}}" +
"    </div>" +
"    {{if state == 'ready'}}" +
"      <button class='btn btn-default file-button'>Click to Download!</button>" +
"    {{else state == 'working'}}" +
"      <button class='btn btn-default' disabled>Generating file...</button>" +
"    {{else state == 'failed'}}" +
"      <button class='btn btn-default' disabled>Validation failed.</button>" +
"    {{else}}" +
"      <button class='btn btn-default file-button'>Generate my file!</button>" +
"    {{/if}}" +
"  </div>" +
"</div>  "

);

module.exports = fileModalTemplate;
