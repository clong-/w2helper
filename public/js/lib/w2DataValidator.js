var validationTypes = {
  report: {
    forms: ['report'],
    children: 'businesses'
  },
  business: {
    forms: ['business'],
    children: 'employees'
  },
  employee: {
    forms: ['w2']
  }
}

function W2DataValidator(data) {
  var data = data;
  var state = {
    passed: true,
    errors: []
  };

  var validate = function() {
    validateDataForTypeAtIndex(data, 'report', 0);
    data.businesses.forEach(function(business, bindex) {
      validateDataForTypeAtIndex(business, 'business', bindex);
      business.employees.forEach(function(employee, eindex) {
        validateDataForTypeAtIndex(employee, 'employee', eindex);
      });
    });
  }

  var validateDataForTypeAtIndex = function(data, type, index) {
    validationTypes[type].forms.forEach(function(form) {
      if(data.forms && data.forms[form]) {
        for(field in data.forms[form]) {
          if(!data.forms[form][field].valid.passed) {
            state.passed = false;
            state.errors.push({
              type: type,
              index: index,
              object: form + ' form',
              error: 'invalid'
            });
            break;
          }
        }
      } else {
        state.passed = false;
        state.errors.push({
          type: type,
          index: index,
          object: form,
          error: 'missing'
        });
      }
    });
    if(validationTypes[type].children) {
      if(!data[validationTypes[type].children] ||
         !data[validationTypes[type].children].length) {
        state.errors.push({
          type: type,
          index: index,
          object: validationTypes[type].children,
          error: 'missing'
        })
      }
    }
  }

  var getState = function() {
    return state;
  }

  validate();

  return {
    getState: getState
  }
}

module.exports = W2DataValidator;
