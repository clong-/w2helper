var ValidationsFor = require('../lib/dataMaps/fieldValidationMap');
var Description = require('../lib/description')();

var HelpPanel = function(contextName, id) {
  //set rendering-related variables
  var contextName = contextName;
  var template = require('../templates/helpPanel');
  var domID = id;

  //set logic-related variables
  var header = '';
  var helpInfo = {
    header: "This is the help panel!",
    body: "Please select a field for more details.",
    validations: []
  };

  var renderView = function() {
    var context = $(contextName);
    context.append(template.render({
      domID: domID,
      helpInfo: helpInfo
    }));
    $(context).on('updateHelpInfo', 'input, select, textarea', updateHelpInfo);
  }

  var updateView = function() {
    var context = $(contextName);
    context.find('#'+domID).replaceWith(template.render({
      domID: domID,
      helpInfo: helpInfo
    }));
  }

  var detroyView = function() {
    //not needed yet?
  }

  var updateHelpInfo = function(event, fieldData) {
    var validations = ValidationsFor[event.target.name];
    var fieldDescription = Description.forField(event.target.name);

    helpInfo.header = fieldDescription.name
    helpInfo.body = fieldDescription.description

    //set validations
    // if required, list it
    // list each content requirement
    // list length requirements
    var validationList = [];
    if(validations.required) validationList.push('required');
    validations.content.forEach(function(name) {
      if(name !== 'boolean') validationList.push(name);
    });
    if(validations.content.indexOf('boolean') < 0) validationList.push('length');
    if(validations.dependencies) validationList.push('dependencies');

    helpInfo.validations = validationList.map(function(name) {
      return {
        text: Description.forValidation(name, validations[name]).description,
        state: fieldData.valid.errors.indexOf(name) >= 0 ? 'invalid' : 'valid'
      }
    });
    updateView();
  }

  return {
    render: renderView
  }
}

module.exports = HelpPanel;
