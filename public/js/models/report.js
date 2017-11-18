var Business = require('./business');
var Form = require('./form');
//var Viewport = require('./viewport'); //multiple businesses

function Report(contextName, id) {
  //set rendering-related variables
  var contextName = contextName;
  var template = require('../templates/report');
  var domID = id;

  //set logic-related variables
  var businesses = [
    Business(
      [contextName, '#'+domID, ".businesses-pane"].join(" "),
      [domID, 'business', 0].join("-")
    )
  ];
  var nextBusinessID = 1;
  var forms = {};

  //multiple businesses
  // var viewport = Viewport(
  //   [contextName, '#'+domID, ".businesses-pane"].join(" "),
  //   [domID, 'viewport'].join("-"),
  //   'business'
  // )

  var renderView = function() {
    var context = $(contextName);
    context.append(template.render({
      domID: domID,
      businesses: businesses
    }));
    Object.keys(forms).forEach(function(formName) {
      forms[formName].render();
    });
    businesses[0].render();
    //multiple businesses
    //viewport.render();
    //context.on('click', '#add-business-to-'+domID, addBusiness);
    //context.on('click', '.remove-business', removeBusiness);
  }

  var updateView = function() {
    var context = $(contextName);
    context.find('#'+domID).replaceWith(template.render({
      domID: domID,
      businesses: businesses
    }));
    Object.keys(forms).forEach(function(formName) {
      forms[formName].render();
    });
    businesses[0].render();
    //viewport.render(); //multiple businesses
  }

  //multiple businesses
  // var addBusiness = function() {
  //   businesses.push(
  //     Business(
  //       [contextName, '#'+domID, ".businesses-pane"].join(" "),
  //       [domID, 'business', nextBusinessID].join("-")
  //     )
  //   );
  //   nextBusinessID += 1;
  //   viewport.setChildren(businesses);
  //   viewport.shiftView('last');
  //   updateView();
  // }
  //
  // var removeBusiness = function(event) {
  //   var businessID = event.target.id.split('-');
  //   businessID.splice(0,1);
  //   businessID = businessID.join('-');
  //   for(var i=0; i < businesses.length; i++) {
  //     if(businesses[i].identifier == businessID) {
  //       businesses[i].destroy();
  //       businesses.splice(i,1);
  //       break;
  //     }
  //   }
  //   viewport.setChildren(businesses);
  //   viewport.shiftView('prev');
  //   updateView();
  // }

  var initForms = function(formTypes) {
    forms['report'] = Form(
      [contextName, '#'+domID, '.report-forms'].join(' '),
      [domID, 'report', 'form'].join('-'),
      'report'
    );
  }

  var addForm = function(formType) {
    if(!forms[formType]) {
      forms[formType] = Form(
        [contextName, '#'+domID, '.report-forms'].join(' '),
        [domID, formType, 'form'].join('-'),
        formType
      );
    }
    updateView();
  }

  var removeForm = function(formType) {
    //implement me eventually!
  }

  initForms();

  return {
    render: renderView,
    //addBusiness: addBusiness, //multiple businesses
    identifier: domID
  }
}

module.exports = Report;
