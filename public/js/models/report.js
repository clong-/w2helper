var Business = require('./business');
var Viewport = require('./viewport');

function Report(contextName, id) {
  //set rendering-related variables
  var contextName = contextName;
  var template = require('../templates/report');
  var domID = id;

  //set logic-related variables
  var businesses = [];
  var nextBusinessID = 0;
  var viewport = Viewport(
    [contextName, '#'+domID, ".businesses-pane"].join(" "),
    [domID, 'viewport'].join("-"),
    'business'
  )

  var renderView = function() {
    var context = $(contextName);
    context.append(template.render({
      domID: domID,
      businesses: businesses
    }));
    viewport.render();
    context.on('click', '#add-business-to-'+domID, addBusiness);
    context.on('click', '.remove-business', removeBusiness);
  }

  var updateView = function() {
    var context = $(contextName);
    context.find('#'+domID).replaceWith(template.render({
      domID: domID,
      businesses: businesses
    }));
    viewport.render();
  }

  var addBusiness = function() {
    businesses.push(
      Business(
        [contextName, '#'+domID, ".businesses-pane"].join(" "),
        [domID, 'business', nextBusinessID].join("-")
      )
    );
    nextBusinessID += 1;
    viewport.setChildren(businesses);
    viewport.shiftView('last');
    updateView();
  }

  var removeBusiness = function(event) {
    var businessID = event.target.id.split('-');
    businessID.splice(0,1);
    businessID = businessID.join('-');
    for(var i=0; i < businesses.length; i++) {
      if(businesses[i].identifier == businessID) {
        businesses[i].destroy();
        businesses.splice(i,1);
        break;
      }
    }
    viewport.setChildren(businesses);
    viewport.shiftView('prev');
    updateView();
  }

  return {
    render: renderView,
    addBusiness: addBusiness,
    identifier: domID
  }
}

module.exports = Report;
