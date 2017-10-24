var Employee = require('./employee');
var Form = require('./form');

function Business(contextName, id) {
  //set rendering-related variables
  var contextName = contextName;
  var template = require('../templates/business');
  var domID = id;

  //set logic-related variables
  var employees = [];
  var nextEmployeeID = 0;
  var forms = {};

  var renderView = function() {
    var context = $(contextName)
    context.append(template.render({
      domID: domID,
      employees: employees
    }));
    employees.forEach(function(e) { e.render() });
    context.on('click', '#add-employee-to-'+domID, addEmployee);
    context.on('click', '.remove-employee', removeEmployee);
  }

  var updateView = function() {
    var context = $(contextName);
    context.find('#'+domID).replaceWith(template.render({
      domID: domID,
      employees: employees
    }));
    Object.keys(forms).forEach(function(formName) {
      forms[formName].render();
    });
    employees.forEach(function(e) { e.render() });
  }

  var destroyView = function() {
    var context = $(contextName);
    employees.forEach(function(e, i) {
      e.destroy();
    });
    employees = [];
    //also detroy forms!
    context.find('#'+domID).remove();
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

  var removeEmployee = function(event) {
    var employeeID = event.target.id.split('-');
    employeeID.splice(0,1);
    employeeID = employeeID.join('-');
    for(var i=0; i < employees.length; i++) {
      if(employees[i].identifier == employeeID) {
        employees[i].destroy();
        employees.splice(i,1);
        break;
      }
    }
    updateView();
  }

  var addForm = function(formType) {
    if(!forms[formType]) {
      forms[formType] = Form(
        [contextName, '#'+domID, '.business-forms'].join(' '),
        [domID, formType, 'form'].join('-')
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
    addEmployee: addEmployee,
    identifier: domID
  }
}

module.exports = Business;
