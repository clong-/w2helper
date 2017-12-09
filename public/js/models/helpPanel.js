var ValidationsFor = require('../lib/validationFieldMap');
//var NameToWords = require('../lib/nameToWordsMap');

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
    //set header with field name
    helpInfo.header = "Help for "+event.target.name+":"

    //set body with field description
    helpInfo.body = "This field is called "+event.target.name+". You should enter the "+event.target.name+" here.";

    //set validations
    // if required, list it
    // list each content requirement
    // list length requirements
    var validations = ValidationsFor[event.target.name];
    var validationList = [];
    if(validations.required) validationList.push('required');
    validations.content.forEach(function(name) {
      validationList.push(name);
    });
    validationList.push('length');
    if(validations.dependencies) validationList.push('dependencies');

    helpInfo.validations = validationList.map(function(name) {
      return {
        text: name,
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
