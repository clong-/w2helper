function Employee(contextName, id) {
  //set rendering-related variables
  var contextName = contextName;
  var template = require('../templates/employee');
  var domID = id;

  //set logic-related variables
  var forms = [];
  var nextFormID = 0;

  var renderView = function() {
    var context = $(contextName);
    context.append(template.render({
      domID: domID,
      forms: forms
    }));
  }

  var updateView = function() {
    var context = $(contextName);
    context.find('#'+domID).replaceWith(template.render({
      domID: domID,
      forms: forms
    }));
  }

  var destroyView = function() {
    var context = $(contextName);
    context.find('#'+domID).remove();
  }

  return {
    render: renderView,
    destroy: destroyView,
    identifier: domID
  }
}

module.exports = Employee;
