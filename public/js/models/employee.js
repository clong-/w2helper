

function Employee(contextName, id) {
  //set rendering-related variables
  var contextName = contextName;
  var template = require('../templates/employee');
  var domID = 'employee-'+id;

  //set logic-related variables
  var forms = [];
  var nextFormID = 0;

  var renderView = function() {
    var context = $(contextName);
    context.find('#'+domID).remove();
    context.append(template.render({
      domID: domID,
      forms: forms
    }));
  }

  return {
    render: renderView
  }
}

module.exports = Employee;
