var businessFormTemplate = $.templates('businessForm',

"<div class='business-form' id='{{:domID}}'>" +
"  <div class='field full-left'>" +
"    <label>" +
"      Employer's name, address, and ZIP code" +
"    </label>" +
"    <div class='field-input'>" +
"      <input name='business-name' data-propagate-to='w2'></input>" +
"    </div>" +
"    <div class='field-input'>" +
"      <input name='business-add1' data-propagate-to='w2'></input>" +
"    </div>" +
"    <div class='field-input'>" +
"      <input name='business-add2' data-propagate-to='w2'></input>" +
"    </div>" +
"    <div class='field-input'>" +
"      <div class='field-subinput city'>" +
"        <input name='business-add-city' data-propagate-to='w2'></input>" +
"      </div>" +
"      <div class='field-subinput state'>" +
"        <input name='business-add-state' data-propagate-to='w2'></input>" +
"      </div>" +
"      <div class='field-subinput zip'>" +
"        <input name='business-add-zip' data-propagate-to='w2'></input>" +
"      </div>" +
"      <div class='field-subinput zip-ext'>" +
"        <input name='business-add-zip-ext' data-propagate-to='w2'></input>" +
"      </div>" +
"    </div>" +
"  </div>" +
"  <div class='field full-right'>" +
"    <label>" +
"      Employer identification number (EIN)" +
"    </label>" +
"    <div class='field-input'>" +
"      <input name='business-ein' data-propagate-to='w2'></input>" +
"    </div>" +
"  </div>" +
"  <div class='field full-right'>" +
"    <label>" +
"      Control number" +
"    </label>" +
"    <div class='field-input'>" +
"      <input name='business-control-no' data-propagate-to='w2'></input>" +
"    </div>" +
"  </div>" +
"  <div class='field full-right'>" +
"    <label>" +
"      Kind of employer" +
"    </label>" +
"    <div class='field-input'>" +
"      <select name='kind-of-employer'>" +
"        <option>-</option>" +
"        <option value='F'>F - Federal govt</option>" +
"        <option value='S'>S - State/local non-501c</option>" +
"        <option value='T'>T - 501c non-govt</option>" +
"        <option value='Y'>Y - State/local 501c</option>" +
"        <option value='N'>N - None apply</option>" +
"      </select>" +
"    </div>" +
"  </div>" +
"  <div class='field full-right'>" +
"    <label>" +
"      Type of employees" +
"    </label>" +
"    <div class='field-input'>" +
"      <select name='type-of-employees'>" +
"        <option>-</option>" +
"        <option value='A'>A - Agriculture</option>" +
"        <option value='H'>H - Household</option>" +
"        <option value='M'>M - Military</option>" +
"        <option value='Q'>Q - Medicare Qualified</option>" +
"        <option value='X'>X - Railroad</option>" +
"        <option value='F'>F - Regular (form 944)</option>" +
"        <option value='R'>R - Regular (all others)</option>" +
"      </select>" +
"    </div>" +
"  </div>" +
"  <div class='field full-right'>" +
"    <div class='subfield state'>" +
"      <label>" +
"        State" +
"      </label>" +
"      <div class='field-input'>" +
"        <input name='business-state' data-propagate-to='w2'></input>" +
"      </div>" +
"    </div>" +
"    <div class='subfield state-id'>" +
"      <label>" +
"        Employer's state ID number" +
"      </label>" +
"      <div class='field-input'>" +
"        <input name='business-state-id' data-propagate-to='w2'></input>" +
"      </div>" +
"    </div>" +
"  </div>" +
"  <div class='field full-right empty'>" +
"  </div>" +
"</div>"

);

module.exports = businessFormTemplate;
