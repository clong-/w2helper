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
    console.log(contextName);
    console.log(template.render({domID: domID, formValues: formValues}));
    context.append(template.render({
      domID: domID,
      formValues: formValues
    }));
    loadFormValues();
    context.on('keyup', 'input', saveFormValue);
  }

  var saveFormValue = function(event) {
    var fieldName = event.target.name;
    var fieldValue = event.target.value;
    formValues[fieldName] = fieldValue;
    console.log('[saved] ' + fieldName + ': ' + fieldValue);
  }

  var loadFormValues = function() {
    var context = $('#'+domID);
    console.log(context);
    Object.keys(formValues).forEach(function(fieldName) {
      context.find('input[name="'+fieldName+'"]').attr('value', formValues[fieldName]);
    });
  }

  return {
    render: renderView
  }
}

module.exports = Form;
