var Form = require('./form');

function Employee(contextName, id) {
  //set rendering-related variables
  var contextName = contextName;
  var template = require('../templates/employee');
  var domID = id;

  //set logic-related variables
  var forms = {};

  var renderView = function() {
    var context = $(contextName);
    context.append(template.render({
      domID: domID
    }));
    Object.keys(forms).forEach(function(formName) {
      forms[formName].render();
    });
  }

  var updateView = function() {
    var context = $(contextName);
    context.find('#'+domID).replaceWith(template.render({
      domID: domID,
      forms: forms
    }));
    Object.keys(forms).forEach(function(formName) {
      forms[formName].render();
    });
  }

  var destroyView = function() {
    var context = $(contextName);
    Object.keys(forms).forEach(function(formName) {
      forms[formName].destroy();
    });
    forms = {};
    context.find('#'+domID).remove();
  }

  var initForms = function() {
    forms['w2'] = Form(
      [contextName, '#'+domID, '.employee-forms'].join(' '),
      [domID, 'w2', 'form'].join('-'),
      'w2'
    );
  }

  var addForm = function(formType) {
    if(!forms[formType]) {
      forms[formType] = Form(
        [contextName, '#'+domID, '.employee-forms'].join(' '),
        [domID, formType, 'form'].join('-'),
        formType
      );
    }
    updateView();
  }

  var removeForm = function(formType) {
    //implement me eventually?
  }

  var serialize = function() {
    return {
      forms: serializeForms()
    }
  }

  var serializeForms = function() {
    return Object.keys(forms).reduce(function(map, formName) {
      map[formName] = forms[formName].serialize();
      return map;
    }, {});
  }

  var propagateFormData = function(data) {
    Object.keys(data).forEach(function(formName) {
      Object.keys(data[formName]).forEach(function(fieldName) {
        forms[formName].setField(fieldName, data[formName][fieldName]);
      });
    });
  }

  initForms();

  return {
    render: renderView,
    destroy: destroyView,
    identifier: domID,
    serialize: serialize,
    propagateFormData: propagateFormData
  }
}

module.exports = Employee;
