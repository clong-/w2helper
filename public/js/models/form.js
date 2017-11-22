var formTemplates = {
  report: require('../templates/forms/report'),
  business: require('../templates/forms/business'),
  w2: require('../templates/forms/w2')
};

function Form(contextName, id, formType) {
  var contextName = contextName;
  var formType = formType;
  var template = formTemplates[formType];
  var domID = id;

  var formValues = {};

  var renderView = function() {
    var context = $(contextName);
    context.append(template.render({
      domID: domID,
      formValues: formValues
    }));
    loadFormValues();
    context.on('change', 'input', saveFormValue);
  }

  var updateView = function() {
    var context = $(contextName);
    context.empty().append(template.render({
      domID: domID,
      formValues: formValues
    }));
    loadFormValues();
    context.on('change', 'input', saveFormValue);
  }

  var destroyView = function() {
    var context = $(contextName);
    formValues = {};
    context.find('#'+domID).remove();
  }

  var saveFormValue = function(event) {
    var fieldName = event.target.name;
    var fieldValue = event.target.value;
    var propagateTo = event.target.dataset.propagateTo;
    formValues[fieldName] = fieldValue;
    if(typeof propagateTo !== 'undefined') {
      triggerPropagation(propagateTo, fieldName, fieldValue);
    }
  }

  var loadFormValues = function() {
    var context = $('#'+domID);
    Object.keys(formValues).forEach(function(fieldName) {
      context.find('input[name="'+fieldName+'"]').attr('value', formValues[fieldName]);
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
    formValues[fieldName] = fieldValue;
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

  return {
    render: renderView,
    destroy: destroyView,
    serialize: serialize,
    setField: setField,
    dataToPropagate: dataToPropagate
  }
}

module.exports = Form;
