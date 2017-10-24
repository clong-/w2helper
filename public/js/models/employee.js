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
      domID: domID,
      forms: forms
    }));
    addForm('w2');
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
    //destroy forms!
    context.find('#'+domID).remove();
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
    /*
    forms[formType] = undefined;
    updateView();
    */
  }

  return {
    render: renderView,
    destroy: destroyView,
    identifier: domID
  }
}

module.exports = Employee;
