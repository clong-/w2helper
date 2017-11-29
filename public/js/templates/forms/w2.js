var w2FormTemplate = $.templates('w2Form',

"<div class='w2-form' id='{{:domID}}'>" +
"  <!--first row-->" +
"  <div class='field empty' style='width: 12%'>" +
"  </div>" +
"  <div class='field empty' style='width: 9.3%'>" +
"  </div>" +
"  <div class='field' style='width: 24%'>" +
"    <label>" +
"      a&nbsp;&nbsp;Employee's social security number" +
"    </label>" +
"    <div class='field-input'>" +
"      <input name='ssn'></input>" +
"    </div>" +
"  </div>" +
"  <div class='field empty' style='width: 54.7%'>" +
"  </div>" +
"  <!--middle section-->" +
"  <div class='field mid-left inherited'>" +
"    <label>" +
"      b&nbsp;&nbsp;Employer identification number (EIN)" +
"    </label>" +
"    <div class='field-input'>" +
"      <input name='business-ein' disabled></input>" +
"    </div>" +
"  </div>" +
"  <div class='field mid-right'>" +
"    <label>" +
"      1&nbsp;&nbsp;Wages, tips, other compensation" +
"    </label>" +
"    <div class='field-input'>" +
"      <input name='wages-tips-other'></input>" +
"    </div>" +
"  </div>" +
"  <div class='field mid-right'>" +
"    <label>" +
"      2&nbsp;&nbsp;Federal income tax withheld" +
"    </label>" +
"    <div class='field-input'>" +
"      <input name='fed-income-tax'></input>" +
"    </div>" +
"  </div>" +
"  <div class='field mid-left three-high inherited'>" +
"    <label>" +
"      c&nbsp;&nbsp;Employer's name, address, and ZIP code" +
"    </label>" +
"    <div class='field-input'>" +
"      <div class='field-subinput business-first-name'>" +
"        <input name='business-first-name' disabled></input>" +
"      </div>" +
"      <div class='field-subinput business-initial'>" +
"        <input name='business-initial' disabled></input>" +
"      </div>" +
"      <div class='field-subinput business-last-name'>" +
"        <input name='business-last-name' disabled></input>" +
"      </div>" +
"      <div class='field-subinput business-suffix'>" +
"        <input name='business-suffix' disabled></input>" +
"      </div>" +
"    </div>" +
"    <div class='field-input'>" +
"      <input name='business-add1' disabled></input>" +
"    </div>" +
"    <div class='field-input'>" +
"      <input name='business-add2' disabled></input>" +
"    </div>" +
"    <div class='field-input'>" +
"      <div class='field-subinput city'>" +
"        <input name='business-add-city' disabled></input>" +
"      </div>" +
"      <div class='field-subinput state'>" +
"        <input name='business-add-state' disabled></input>" +
"      </div>" +
"      <div class='field-subinput zip'>" +
"        <input name='business-add-zip' disabled></input>" +
"      </div>" +
"      <div class='field-subinput zip-ext'>" +
"        <input name='business-add-zip-ext' disabled></input>" +
"      </div>" +
"    </div>" +
"  </div>" +
"  <div class='field mid-right'>" +
"    <label>" +
"      3&nbsp;&nbsp;Social security wages" +
"    </label>" +
"    <div class='field-input'>" +
"      <input name='ss-wages'></input>" +
"    </div>" +
"  </div>" +
"  <div class='field mid-right'>" +
"    <label>" +
"      4&nbsp;&nbsp;Social security tax withheld" +
"    </label>" +
"    <div class='field-input'>" +
"      <input name='ss-tax'></input>" +
"    </div>" +
"  </div>" +
"  <div class='field mid-right'>" +
"    <label>" +
"      5&nbsp;&nbsp;Medicare wages" +
"    </label>" +
"    <div class='field-input'>" +
"      <input name='medicare-wages'></input>" +
"    </div>" +
"  </div>" +
"  <div class='field mid-right'>" +
"    <label>" +
"      6&nbsp;&nbsp;Medicare tax withheld" +
"    </label>" +
"    <div class='field-input'>" +
"      <input name='medicare-tax'></input>" +
"    </div>" +
"  </div>" +
"  <div class='field mid-right'>" +
"    <label>" +
"      7&nbsp;&nbsp;Social security tips" +
"    </label>" +
"    <div class='field-input'>" +
"      <input name='ss-tips'></input>" +
"    </div>" +
"  </div>" +
"  <div class='field mid-right'>" +
"    <label>" +
"      8&nbsp;&nbsp;Allocated tips" +
"    </label>" +
"    <div class='field-input'>" +
"      <input name='allocated-tips'></input>" +
"    </div>" +
"  </div>" +
"  <div class='field mid-left inherited'>" +
"    <label>" +
"      d&nbsp;&nbsp;Control number" +
"    </label>" +
"    <div class='field-input'>" +
"      <input name='business-control-no' disabled></input>" +
"    </div>" +
"  </div>" +
"  <div class='field mid-right'>" +
"    <label>" +
"      9&nbsp;&nbsp;Verification code" +
"    </label>" +
"    <div class='field-input'>" +
"      <input name='verification-code'></input>" +
"    </div>" +
"  </div>" +
"  <div class='field mid-right'>" +
"    <label>" +
"      10&nbsp;&nbsp;Dependent care benefits" +
"    </label>" +
"    <div class='field-input'>" +
"      <input name='dep-care-benefits'></input>" +
"    </div>" +
"  </div>" +
"  <div class='field mid-left dashed-bottom'>" +
"    <div class='subfield first-name'>" +
"      <label>" +
"        e&nbsp;&nbsp;Employee's first name and initial" +
"      </label>" +
"      <div class='field-input'>" +
"        <div class='field-subinput first-name'>" +
"          <input name='employee-first-name'></input>" +
"        </div>" +
"        <div class='field-subinput initial'>" +
"          <input name='employee-initial'></input>" +
"        </div>" +
"      </div>" +
"    </div>" +
"    <div class='subfield last-name'>" +
"      <label>" +
"        Last name" +
"      </label>" +
"      <div class='field-input'>" +
"        <input name='employee-last-name'></input>" +
"      </div>" +
"    </div>" +
"    <div class='subfield suffix'>" +
"      <label>" +
"        Suffix." +
"      </label>" +
"      <div class='field-input'>" +
"        <input name='employee-suffix'></input>" +
"      </div>" +
"    </div>" +
"  </div>" +
"  <div class='field mid-right'>" +
"    <label>" +
"      11&nbsp;&nbsp;Non-qualified plans" +
"    </label>" +
"    <div class='field-input'>" +
"      <input name='nonqualified-plans'></input>" +
"    </div>" +
"  </div>" +
"  <div class='field mid-right'>" +
"    <div class='subfield code'>" +
"      <label>" +
"        12a&nbsp;&nbsp;Code" +
"      </label>" +
"      <div class='field-input'>" +
"        <input name='def-comp-a-code'></input>" +
"      </div>" +
"    </div>" +
"    <div class='subfield amount'>" +
"      <label>" +
"        Amount" +
"      </label>" +
"      <div class='field-input'>" +
"        <input name='def-comp-a-amount'></input>" +
"      </div>" +
"    </div>" +
"  </div>" +
"  <div class='field mid-left three-half-high dashed-top'>" +
"    <div class='bottom-label'>" +
"      <label>" +
"        f&nbsp;&nbsp;Employee's address and ZIP code" +
"      </label>" +
"    </div>" +
"    <div class='field-input'>" +
"      <input name='employee-add1'></input>" +
"    </div>" +
"    <div class='field-input'>" +
"      <input name='employee-add2'></input>" +
"    </div>" +
"    <div class='field-input'>" +
"      <div class='field-subinput city'>" +
"        <input name='employee-city'></input>" +
"      </div>" +
"      <div class='field-subinput state'>" +
"        <input name='employee-state'></input>" +
"      </div>" +
"      <div class='field-subinput zip'>" +
"        <input name='employee-zip'></input>" +
"      </div>" +
"      <div class='field-subinput zip-ext'>" +
"        <input name='employee-zip-ext'></input>" +
"      </div>" +
"    </div>" +
"  </div>" +
"  <div class='field mid-right'>" +
"    <div class='subfield check-label'>" +
"      <label>" +
"        13" +
"      </label>" +
"    </div>" +
"    <div class='subfield small-label statutory-employee'>" +
"      <label>" +
"        Statutory<br>" +
"        &nbsp;employee" +
"      </label>" +
"      <div class='field-input checkbox'>" +
"        <input type='checkbox' name='statutory-employee'></input>" +
"      </div>" +
"    </div>" +
"    <div class='subfield small-label retirement-plan'>" +
"      <label>" +
"        Retirement<br>" +
"        &nbsp;plan" +
"      </label>" +
"      <div class='field-input checkbox'>" +
"        <input type='checkbox' name='retirement-plan'></input>" +
"      </div>" +
"    </div>" +
"    <div class='subfield small-label third-party-sick-pay'>" +
"      <label>" +
"        Third-party<br>" +
"        &nbsp;sick pay" +
"      </label>" +
"      <div class='field-input checkbox'>" +
"        <input type='checkbox' name='third-party-sick-pay'></input>" +
"      </div>" +
"    </div>" +
"  </div>" +
"  <div class='field mid-right'>" +
"    <div class='subfield code'>" +
"      <label>" +
"        12b&nbsp;&nbsp;Code" +
"      </label>" +
"      <div class='field-input'>" +
"        <input name='def-comp-b-code'></input>" +
"      </div>" +
"    </div>" +
"    <div class='subfield amount'>" +
"      <label>" +
"        Amount" +
"      </label>" +
"      <div class='field-input'>" +
"        <input name='def-comp-b-amount'></input>" +
"      </div>" +
"    </div>" +
"  </div>" +
"  <div class='field mid-right two-half-high'>" +
"    <label>" +
"      14&nbsp;&nbsp;Other" +
"    </label>" +
"    <div class='field-input'>" +
"      <textarea rows='4' name='other'></textarea>" +
"    </div>" +
"  </div>" +
"  <div class='field mid-right'>" +
"    <div class='subfield code'>" +
"      <label>" +
"        12c&nbsp;&nbsp;Code" +
"      </label>" +
"      <div class='field-input'>" +
"        <input name='def-comp-c-code'></input>" +
"      </div>" +
"    </div>" +
"    <div class='subfield amount'>" +
"      <label>" +
"        Amount" +
"      </label>" +
"      <div class='field-input'>" +
"        <input name='def-comp-c-amount'></input>" +
"      </div>" +
"    </div>" +
"  </div>" +
"  <div class='field mid-right'>" +
"    <div class='subfield code'>" +
"      <label>" +
"        12d&nbsp;&nbsp;Code" +
"      </label>" +
"      <div class='field-input'>" +
"        <input name='def-comp-d-code'></input>" +
"      </div>" +
"    </div>" +
"    <div class='subfield amount'>" +
"      <label>" +
"        Amount" +
"      </label>" +
"      <div class='field-input'>" +
"        <input name='def-comp-d-amount'></input>" +
"      </div>" +
"    </div>" +
"  </div>" +
"  <div class='field mid-right half-high empty'>" +
"  </div>" +
"  <!--bottom row-->" +
"  <div class='field dashed-bottom inherited' style='width: 29.3%'>" +
"    <div class='subfield state'>" +
"      <label>" +
"        15&nbsp;&nbsp;State" +
"      </label>" +
"      <div class='field-input'>" +
"        <input name='business-state' disabled></input>" +
"      </div>" +
"    </div>" +
"    <div class='subfield state-id'>" +
"      <label>" +
"        Employer's state ID number" +
"      </label>" +
"      <div class='field-input'>" +
"      <input name='business-state-id' disabled></input>" +
"      </div>" +
"    </div>" +
"  </div>" +
"  <div class='field dashed-bottom' style='width: 16%'>" +
"    <label>" +
"      16&nbsp;&nbsp;State wages, tips, etc." +
"    </label>" +
"    <div class='field-input'>" +
"      <input name='state-wages-tips'></input>" +
"    </div>" +
"  </div>" +
"  <div class='field dashed-bottom' style='width: 14.7%'>" +
"    <label>" +
"      17&nbsp;&nbsp;State income tax" +
"    </label>" +
"    <div class='field-input'>" +
"      <input name='state-inc-tax'></input>" +
"    </div>" +
"  </div>" +
"  <div class='field dashed-bottom' style='width: 16%'>" +
"    <label>" +
"      18&nbsp;&nbsp;Local wages, tips, etc." +
"    </label>" +
"    <div class='field-input'>" +
"      <input name='local-wages-tips'></input>" +
"    </div>" +
"  </div>" +
"  <div class='field dashed-bottom' style='width: 14.7%'>" +
"    <label>" +
"      19&nbsp;&nbsp;Local income tax" +
"    </label>" +
"    <div class='field-input'>" +
"      <input name='local-inc-tax'></input>" +
"    </div>" +
"  </div>" +
"  <div class='field dashed-bottom' style='width: 9.3%'>" +
"    <label>" +
"      20&nbsp;&nbsp;Locality" +
"    </label>" +
"    <div class='field-input'>" +
"      <input name='locality-name'></input>" +
"    </div>" +
"  </div>" +
"  <div class='field dashed-top' style='width: 29.3%'>" +
"  </div>" +
"  <div class='field dashed-top' style='width: 16%'>" +
"  </div>" +
"  <div class='field dashed-top' style='width: 14.7%'>" +
"  </div>" +
"  <div class='field dashed-top' style='width: 16%'>" +
"  </div>" +
"  <div class='field dashed-top' style='width: 14.7%'>" +
"  </div>" +
"  <div class='field dashed-top' style='width: 9.3%'>" +
"  </div>" +
"</div>"

);

module.exports = w2FormTemplate;
