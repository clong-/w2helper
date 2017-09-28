var Business = require('./business');

function Report(contextName, id) {
  //set rendering-related variables
  var contextName = contextName;
  var template = require('../templates/report');
  var domID = id;

  //set logic-related variables
  var businesses = [];
  var nextBusinessID = 0;

  var updateView = function() {
    var context = $(contextName);
    context.find('#'+domID).replaceWith(template.render({
      domID: domID,
      businesses: businesses
    }));
    businesses.forEach(function(b) { b.render() });
  }

  var addBusiness = function() {
    businesses.push(
      Business(
        [contextName, '#'+domID, ".businesses-pane"].join(" "),
        [domID, 'business', nextBusinessID].join("-")
      )
    );
    nextBusinessID += 1;
    updateView();
  }

  var renderView = function() {
    var context = $(contextName);
    context.append(template.render({
      domID: domID,
      businesses: businesses
    }));
    businesses.forEach(function(b) { b.render() });
  }

  $(contextName).on('click', '#add-business-to-'+domID, addBusiness);

  return {
    render: renderView,
    addBusiness: addBusiness
  }
}

module.exports = Report;
