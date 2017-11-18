var businessFormTemplate = $.templates('businessForm',

"<div class='business-form' id='{{:domID}}'>" +
"  <div class='field full-left'>" +
"    <label>" +
"      Employer's name, address, and ZIP code" +
"    </label>" +
"    <div class='field-input'>" +
"      <input name='business-name'></input>" +
"    </div>" +
"    <div class='field-input'>" +
"      <input name='business-add1'></input>" +
"    </div>" +
"    <div class='field-input'>" +
"      <input name='business-add2'></input>" +
"    </div>" +
"    <div class='field-input'>" +
"      <div class='field-subinput city'>" +
"        <input name='business-add-city'>" +
"      </div>" +
"      <div class='field-subinput state'>" +
"        <input name='business-add-state'>" +
"      </div>" +
"      <div class='field-subinput zip'>" +
"        <input name='business-add-zip'>" +
"      </div>" +
"      <div class='field-subinput zip-ext'>" +
"        <input name='business-add-zip-ext'>" +
"      </div>" +
"    </div>" +
"  </div>" +
"  <div class='field full-right'>" +
"    <label>" +
"      Employer identification number (EIN)" +
"    </label>" +
"    <div class='field-input'>" +
"      <input name='business-ein'></input>" +
"    </div>" +
"  </div>" +
"  <div class='field full-right'>" +
"    <label>" +
"      Control number" +
"    </label>" +
"    <div class='field-input'>" +
"      <input name='business-control-no'></input>" +
"    </div>" +
"  </div>" +
"  <div class='field full-right'>" +
"    <label>" +
"      Kind of employer" +
"    </label>" +
"    <div class='field-input'>" +
"      <input name='kind-of-employer'></input>" +
"    </div>" +
"  </div>" +
"  <div class='field full-right'>" +
"    <label>" +
"      Type of employees" +
"    </label>" +
"    <div class='field-input'>" +
"      <input name='type-of-employees'></input>" +
"    </div>" +
"  </div>" +
"  <div class='field full-right'>" +
"    <div class='subfield state'>" +
"      <label>" +
"        State" +
"      </label>" +
"      <div class='field-input'>" +
"        <input name='business-state'></input>" +
"      </div>" +
"    </div>" +
"    <div class='subfield state-id'>" +
"      <label>" +
"        Employer's state ID number" +
"      </label>" +
"      <div class='field-input'>" +
"        <input name='business-state-id'></input>" +
"      </div>" +
"    </div>" +
"  </div>" +
"  <div class='field full-right empty'>" +
"  </div>" +
"</div>"

);

module.exports = businessFormTemplate;
