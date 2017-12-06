var ValidationsFor = require('./validationMap');

function Validation() {
  var contentTests = {};

  var validateField = function(name, value) {
    var validations = ValidationsFor[name];
    var errors = [];
    if(validations.required && value.length === 0) {
      errors.push('required');
    } else {
      if(!properLength(value, validations.length)) {
        errors.push('length');
      }
      validations.content.forEach(function(operation) {
        if(!contentTests[operation](value)) {
          errors.push(operation);
        }
      });
    }
    return {
      passed: !errors.length,
      errors: errors
    }
  }

  var alphanumeric = function(value) {
    //includes letters, numbers, punctuation
    //range: 32-126
    return inASCIIRange(value, 32, 126);
  }
  contentTests['alphanumeric'] = alphanumeric;

  var alpha = function(value) {
    //includes letters
    //range: toUpperCase in 65-90
    return inASCIIRange(value.toUpperCase(), 65, 90);
  }
  contentTests['alpha'] = alpha;

  var numeric = function(value) {
    //includes numbers
    //in 48-57
    return inASCIIRange(value, 48, 57);
  }
  contentTests['numeric'] = numeric;

  var address = function(value) {
    //stuff from that doc linked in the doc...
    //user alphanumeric for now, tighten it up later
    return alphanumeric(value);
  }
  contentTests['address'] = address;

  var ein = function(value) {
    //numeric
    //not begin with 00, 07, 08, 09, 17, 18, 19, 28, 29, 49, 69, 70, 78, 79 or 89
    var badStarts = ['00', '07', '08', '09', '17',
                     '18', '19', '28', '29', '49',
                     '69', '70', '78', '79', '89'];
    return numeric(value) && (badStarts.indexOf(value.substring(0,2)) < 0);
  }
  contentTests['ein'] = ein;

  var email = function(value) {
    //email validation regex
    //this regex is pretty simplistic, but i think we're only supposed
    //  to have ascii in the file anyway, so this is probably fine for now
    var validRegex = /^\w+([\.\+-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,15})+$/;
    return validRegex.test(value);
  }
  contentTests['email'] = email;

  var ssn = function(value) {
    //numeric
    //not begin with 666 or 9
    return numeric(value) && (!value.startsWith('666') && !value.startsWith('9'));
  }
  contentTests['ssn'] = ssn;

  var inASCIIRange = function(string, min, max) {
    for(var i = 0; i < string.length; i++) {
      var charCode = string.charCodeAt(i);
      if(charCode < min || charCode > max) return false;
    }
    return true;
  }

  var properLength = function(string, lengthObj) {
    switch (lengthObj.op) {
      case 'lteq':
        return string.length <= lengthObj.value;
      case 'exactly':
        return string.length === lengthObj.value;
      default:
        return false;
    }
  }


  return {
    validateField: validateField
  }
}

module.exports = Validation;
