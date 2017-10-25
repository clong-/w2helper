var formTemplates = {
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
    context.on('keyup', 'input', saveFormValue);
  }

  var destroyView = function() {
    var context = $(contextName);
    formValues = {};
    context.find('#'+domID).remove();
  }

  var saveFormValue = function(event) {
    var fieldName = event.target.name;
    var fieldValue = event.target.value;
    formValues[fieldName] = fieldValue;
    console.log('[saved] ' + fieldName + ': ' + fieldValue);
  }

  var loadFormValues = function() {
    var context = $('#'+domID);
    Object.keys(formValues).forEach(function(fieldName) {
      context.find('input[name="'+fieldName+'"]').attr('value', formValues[fieldName]);
    });
  }

  return {
    render: renderView,
    destroy: destroyView
  }
}

module.exports = Form;
