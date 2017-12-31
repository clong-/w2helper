var Validation = require('../lib/validation')();

var formTemplates = {
  report: require('../templates/forms/report'),
  business: require('../templates/forms/business'),
  w2: require('../templates/forms/w2')
};

var inheritedFields = {
  w2: [
    'business-name',
    'business-add1',
    'business-add2',
    'business-add-city',
    'business-add-state',
    'business-add-zip',
    'business-add-zip-ext',
    'business-ein',
    'business-control-no',
    'business-state',
    'business-state-id'
  ],
  business: [],
  report: []
};

function Form(contextName, id, formType) {
  var contextName = contextName;
  var formType = formType;
  var template = formTemplates[formType];
  var domID = id;

  var formValues = {};
  var inheritedFormValues = {};

  var renderView = function() {
    var context = $(contextName);
    context.append(template.render({
      domID: domID,
      formValues: formValues
    }));
    populateFieldList();
    loadFormValues();
    context.on('change', 'select', saveFormValue);
    context.on('keyup', 'input, textarea', saveFormValue);
    context.on('focus', 'input, textarea, select', function(event) {
      $(event.target).trigger('updateHelpInfo', formValues[event.target.name]);
    });
    context.on('click', 'input[type=checkbox]', saveFormValue);
  }

  var updateView = function() {
    var context = $(contextName);
    context.empty().append(template.render({
      domID: domID,
      formValues: formValues
    }));
    loadFormValues();
    context.on('change', 'input, textarea, select', saveFormValue);
  }

  var destroyView = function() {
    var context = $(contextName);
    formValues = {};
    context.find('#'+domID).remove();
  }

  var saveFormValue = function(event) {
    var fieldName = event.target.name;
    var fieldValue = '';
    var propagateTo = event.target.dataset.propagateTo;
    if(event.target.type === 'checkbox') {
      fieldValue = event.target.checked ? '1' : '0';
    } else {
      fieldValue = event.target.value;
    }
    runValidations(fieldName, fieldValue);
    $(event.target).trigger('updateHelpInfo', formValues[event.target.name]);
    if(typeof propagateTo !== 'undefined') {
      triggerPropagation(propagateTo, fieldName, fieldValue);
    }
  }

  var loadFormValues = function() {
    var context = $('#'+domID);
    Object.keys(inheritedFormValues).forEach(function(fieldName) {
      var target = context.find(
        'input[name="'+fieldName+'"], textarea[name="'+fieldName+'"], select[name="'+fieldName+'"]'
      );
      if(target.attr('type') === 'checkbox') {
        target.prop('checked', inheritedFormValues[fieldName].value === '1');
      } else {
        target.val(inheritedFormValues[fieldName].value);
      }
    });
    Object.keys(formValues).forEach(function(fieldName) {
      var target = context.find(
        'input[name="'+fieldName+'"], textarea[name="'+fieldName+'"], select[name="'+fieldName+'"]'
      );
      if(target.attr('type') === 'checkbox') {
        target.prop('checked', formValues[fieldName].value === '1');
      } else {
        target.val(formValues[fieldName].value);
      }
      setInputValidState(fieldName, formValues[fieldName].valid.passed);
    });
  }

  var serialize = function() {
    return formValues;
  }

  var triggerPropagation = function(formName, fieldName, fieldValue) {
    var data = {};
    data[formName] = {};
    data[formName][fieldName] = fieldValue;
    $(contextName).trigger('propagate-field', data);
  }

  var setField = function(fieldName, fieldValue) {
    var basicField = {value: fieldValue, valid: {passed: true, errors: []}};
    if(inheritedFields[formType].indexOf(fieldName) >= 0) {
      if(inheritedFormValues[fieldName]) {
        inheritedFormValues[fieldName].value = fieldValue;
      } else {
        inheritedFormValues[fieldName] = basicField;
      }
    } else {
      if(formValues[fieldName]) {
        formValues[fieldName].value = fieldValue;
      } else {
        formValues[fieldName] = basicField;
      }
    }
    updateView();
  }

  var dataToPropagate = function() {
    var fields = $(contextName).find('#'+domID).find('input[data-propagate-to]');
    return fields.toArray().reduce(function(map, field) {
      var propagateTo = field.dataset.propagateTo;
      if(!map[propagateTo]) map[propagateTo] = {};
      map[propagateTo][field.name] = field.value;
      return map;
    }, {});
  }

  var populateFieldList = function () {
    var fields = $(contextName).find('#'+domID).find('input, textarea, select');
    fields.toArray().forEach(function(field) {
      var emptyField = {value: '', valid: { passed: true, errors: [] }};
      if(inheritedFields[formType].indexOf(field.name) >= 0) {
        if(inheritedFormValues[field.name]) return;
        inheritedFormValues[field.name] = emptyField;
      } else {
        if(formValues[field.name]) return;
        emptyField.valid = Validation.validateField(field.name, '', false);
        formValues[field.name] = emptyField;
      }
    });
  }

  var runValidations = function(fieldName, fieldValue) {
    var dependencyNames = Validation.getDependencies(fieldName);
    var dependencies = dependencyNames.reduce(function(map, name) {
      map[name] = formValues[name];
      return map;
    }, {});
    var validState = Validation.validateField(fieldName, fieldValue, dependencies);
    if(dependencyNames.length) {
      dependencyNames.forEach(function(name) {
        if(validState.errors.indexOf('dependencies') >= 0) {
          formValues[name].valid.errors.push('dependencies');
        } else {
          formValues[name].valid.errors.splice(formValues[name].valid.errors.indexOf('dependencies'), 1);
        }
        formValues[name].valid.passed = !formValues[name].valid.errors.length;
        setInputValidState(name, formValues[name].valid.passed);
      });
    }
    formValues[fieldName] = {
      value: fieldValue,
      valid: validState
    };
    setInputValidState(fieldName, formValues[fieldName].valid.passed);
  }

  var setInputValidState = function(name, valid) {
    var target = $('#'+domID).find('[name="'+name+'"]');
    if(valid) {
      target.removeClass('invalid');
    } else {
      target.addClass('invalid');
    }
  }

  return {
    render: renderView,
    destroy: destroyView,
    serialize: serialize,
    setField: setField,
    dataToPropagate: dataToPropagate
  }
}

module.exports = Form;
