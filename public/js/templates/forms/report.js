var reportFormTemplate = $.templates('reportForm',

"<div class='report-form' id='{{:domID}}'>" +
"  <div class='field halfsies'>" +
"    <label>" +
"      Contact name" +
"    </label>" +
"    <div class='field-input'>" +
"      <input name='submitter-name'></input>" +
"    </div>" +
"  </div>" +
"  <div class='field halfsies'>" +
"    <label>" +
"      Tax year" +
"    </label>" +
"    <div class='field-input'>" +
"      <select name='tax-year'>" +
"        <option value=''></option>" +
"        <option value='2016'>2016</option>" +
"        <option value='2017'>2017</option>" +
"      </select>" +
"    </div>" +
"  </div>" +
"  <div class='field halfsies'>" +
"    <label>" +
"      Contact phone number and extension" +
"    </label>" +
"    <div class='field-input'>" +
"      <div class='field-subinput phone'>" +
"        <input name='submitter-phone'></input>" +
"      </div>" +
"      <div class='field-subinput phone-ext'>" +
"        <input name='submitter-phone-ext'></input>" +
"      </div>" +
"    </div>" +
"  </div>" +
"  <div class='field halfsies'>" +
"    <label>" +
"      Contact email" +
"    </label>" +
"    <div class='field-input'>" +
"      <input name='submitter-email'></input>" +
"    </div>" +
"  </div>" +
"</div>"

);

module.exports = reportFormTemplate;
