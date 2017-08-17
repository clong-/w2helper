$.templates('business',

"<div class='form'>" +
"  <h2>Business Information</h2>" +
"  <form class='form-horizontal' id='business'>" +
"    <div class='field form-group'>" +
"      <label class='col-sm-1 control-label'>Legal Name:</label>" +
"      <div class='col-sm-3'>" +
"        <input class='form-control' name='legal-name'></input>" +
"      </div>" +
"    </div>" +
"    <div class='field form-group'>" +
"      <label class='col-sm-1 control-label'>FEIN:</label>" +
"      <div class='col-sm-3'>" +
"        <input class='form-control' name='business-FEIN'>Should only allow 9 digits.  Dash automatically fills after first 2?</input>" +
"      </div>" +
"    </div>" +
"    <div class='field form-group'>" +
"      <label class='col-sm-1 control-label'>Mailing Address:</label>" +
"      <div class='col-sm-3'>" +
"        <input class='form-control' name='business-address'>Potentially Build in an address verifier?  USPS database?</input>" +
"      </div>" +
"    </div>" +
"    <div class='field form-group'>" +
"      <label class='col-sm-1 control-label'>City:</label>" +
"      <div class='col-sm-3'>" +
"        <input class='form-control' name='business-city'></input>" +
"      </div>" +
"    </div>" +
"    <div class='field form-group'>" +
"      <label class='col-sm-1 control-label'>State:</label>" +
"      <div class='col-sm-3'>" +
"        <input class='form-control' name='business-state'>This will be a dropdown for the state.  Should store just the abbrev.</input>" +
"      </div>" +
"    </div>" +
"    <div class='field form-group'>" +
"      <label class='col-sm-1 control-label'>Zip Code:</label>" +
"      <div class='col-sm-3'>" +
"        <input class='form-control' name='business-zip'>Should accept 5 or nine digits.  Dash?</input>" +
"      </div>" +
"    </div>" +
"    <div class='field form-group'>" +
"      <label class='col-sm-1 control-label'>Employer's Withholding acct. #:</label>" +
"      <div class='col-sm-3'>" +
"        <input class='form-control' name='business-withholdingAcct'>Must be 15 digits.  Starts with 036. Dashes auto. after first three and before last 2?</input>" +
"      </div>" +
"    </div>" +
"  </form>" +
"</div>"

);
