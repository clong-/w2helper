var Employee = require('./employee');
var Form = require('./form');
var Viewport = require('./viewport');

function Business(contextName, id) {
  //set rendering-related variables
  var contextName = contextName;
  var template = require('../templates/business');
  var domID = id;

  //set logic-related variables
  var employees = [];
  var nextEmployeeID = 0;
  var forms = {};
  var viewport = Viewport(
    [contextName, '#'+domID, ".employees-pane"].join(" "),
    [domID, 'viewport'].join("-"),
    {
      childType: 'employee',
      showCounter: true
    }
  )

  var renderView = function() {
    var context = $(contextName);
    context.append(template.render({
      domID: domID,
      employees: employees
    }));
    Object.keys(forms).forEach(function(formName) {
      forms[formName].render();
    });
    viewport.render();
    context.find('#'+domID).on('click', '#add-employee-to-'+domID, addEmployee);
    context.find('#'+domID).on('click', '.remove-employee', removeEmployee);
    context.find('#'+domID).on('propagate-field', '.business-forms', propagateField);
    context.find('#'+domID).on('click', '.next-child', function() { changeEmployee('next') });
    context.find('#'+domID).on('click', '.prev-child', function() { changeEmployee('prev') });
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
    viewport.render();
    context.find('#'+domID).on('click', '#add-employee-to-'+domID, addEmployee);
    context.find('#'+domID).on('click', '.remove-employee', removeEmployee);
    context.find('#'+domID).on('propagate-field', '.business-forms', propagateField);
    context.find('#'+domID).on('click', '.next-child', function() { changeEmployee('next') });
    context.find('#'+domID).on('click', '.prev-child', function() { changeEmployee('prev') });
  }

  var destroyView = function() {
    var context = $(contextName);
    employees.forEach(function(e, i) {
      e.destroy();
    });
    employees = [];
    viewport.destroy();
    viewport = {};
    Object.keys(forms).forEach(function(formName) {
      forms[formName].destroy();
    });
    forms = {};
    context.find('#'+domID).remove();
  }

  var addEmployee = function() {
    var newEmployee = Employee(
      [contextName, '#'+domID, ".employees-pane"].join(" "),
      [domID, 'employee', nextEmployeeID].join("-")
    );
    employees.push(newEmployee);
    newEmployee.propagateFormData(dataToPropagate());
    nextEmployeeID += 1;
    viewport.setChildren(employees);
    viewport.shiftView('last');
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
    viewport.setChildren(employees);
    viewport.shiftView('prev');
    updateView();
  }

  var changeEmployee = function(direction) {
    viewport.shiftView(direction);
    updateView();
  }

  var initForms = function(formTypes) {
    forms['business'] = Form(
      [contextName, '#'+domID, '.business-forms'].join(' '),
      [domID, 'business', 'form'].join('-'),
      'business'
    );
  }

  var addForm = function(formType) {
    if(!forms[formType]) {
      forms[formType] = Form(
        [contextName, '#'+domID, '.business-forms'].join(' '),
        [domID, formType, 'form'].join('-'),
        formType
      );
    }
    updateView();
  }

  var removeForm = function(formType) {
    //implement me eventually!
  }

  var serialize = function() {
    return {
      forms: serializeForms(),
      employees: employees.map(function(e) { return e.serialize() })
    }
  }

  var serializeForms = function() {
    return Object.keys(forms).reduce(function(map, formName) {
      map[formName] = forms[formName].serialize();
      return map;
    }, {});
  }

  var propagateField = function(event, data) {
    employees.forEach(function(e) {
      e.propagateFormData(data);
    });
  }

  var dataToPropagate = function() {
    return Object.keys(forms).map(function(formName) {
      return forms[formName].dataToPropagate();
    }).reduce(function(map, data) {
      var key = Object.keys(data)[0];
      map[key] = data[key];
      return map;
    }, {});
  }

  initForms();

  return {
    render: renderView,
    destroy: destroyView,
    addEmployee: addEmployee,
    identifier: domID,
    serialize: serialize
  }
}

module.exports = Business;
