function Report(context, id) {
  //set rendering-related variables
  var context = $(context);
  var template = require('../templates/report');
  var domID = 'report-'+id;

  //set logic-related variables
  var businesses = [];
  var nextBusinessID = 0;

  var renderView = function() {
    context.find('#'+domID).remove();
    context.append(template.render({
      domID: domID,
      businesses: businesses
    }));
  }

  var addBusiness = function() {
    //construct new business, passing context and ID
    //push it onto the businesses array
    //re-render? single update? hmm...
    businesses.push("hi");
    renderView();
  }

  $(context.on('click', '#add-business', addBusiness));

  return {
    render: renderView,
    addBusiness: addBusiness
  }
}

module.exports = Report;
