var Employee = require('./employee');

function Business(contextName, id) {
  //set rendering-related variables
  var contextName = contextName;
  var template = require('../templates/business');
  var domID = id;

  //set logic-related variables
  var employees = [];
  var nextEmployeeID = 0;

  var updateView = function() {
    var context = $(contextName);
    context.find('#'+domID).replaceWith(template.render({
      domID: domID,
      employees: employees
    }));
    employees.forEach(function(e) { e.render() });
  }

  var addEmployee = function() {
    employees.push(
      Employee(
        [contextName, '#'+domID, ".employees-pane"].join(" "),
        [domID, 'employee', nextEmployeeID].join("-")
      )
    );
    nextEmployeeID += 1;
    updateView();
  }

  var renderView = function() {
    var context = $(contextName)
    context.append(template.render({
      domID: domID,
      employees: employees
    }));
    employees.forEach(function(e) { e.render() });
    context.on('click', '#add-employee-to-'+domID, addEmployee);
  }

  return {
    render: renderView,
    addEmployee: addEmployee
  }
}

module.exports = Business;
