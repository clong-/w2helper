function Viewport(contextName, id, options) {
  //set rendering-related variables
  var contextName = contextName;
  var childType = options['childType'] || 'record';
  var showCounter = options['showCounter'] || false;
  var template = require('../templates/viewport');
  var domID = id;

  //set logic-related variables
  var childType = childType;
  var children = [];
  var currentChildIndex;

  var renderView = function() {
    var context = $(contextName);
    context.append(template.render({
      domID: domID,
      children: children,
      childType: childType,
      showCounter: showCounter,
      index: currentChildIndex
    }));
    if(children.length) {
      children[currentChildIndex].render();
    }
  }

  var updateView = function() {
    var context = $(contextName);
    context.html(template.render({
      domID: domID,
      children: children,
      childType: childType,
      showCounter: showCounter,
      index: currentChildIndex
    }));
    if(children.length) {
      children[currentChildIndex].render();
    }
  }

  var destroyView = function() {
    var context = $(contextName);
    children.forEach(function(c,i) {
      c.destroy();
    });
    children = [];
    context.empty();
  }

  var shiftView = function(operator) {
    if(!children.length) return;

    switch (operator) {
      case 'next':
        if(currentChildIndex < children.length - 1) {
          currentChildIndex += 1;
        }
        break;
      case 'prev':
        if(currentChildIndex > 0) {
          currentChildIndex -= 1;
        }
        break;
      case 'first':
        currentChildIndex = 0;
        break;
      case 'last':
        currentChildIndex = children.length - 1;
        break;
      default:
        console.log('curious');
    }
  }

  var setChildren = function(newChildren) {
    children = newChildren;
  }

  return {
    render: renderView,
    destroy: destroyView,
    shiftView: shiftView,
    setChildren: setChildren
  }
}

module.exports = Viewport;
