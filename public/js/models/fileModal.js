var FileModal = function(contextName, id) {
  //ser rendering-related variables
  var contextName = contextName;
  var template = require('../templates/fileModal');
  var domID = id;

  //set logic-related variables
  var visible = false;
  var state = 'start';
  var data = {};
  var file;

  var renderView = function() {
    var context = $(contextName);
    context.append(template.render({
      domID: domID,
      visible: visible,
      state: state
    }));
    context.on('doFileModal', doModal);
    context.on('click', 'button.file-button', advanceState);
    context.on('generationDone', advanceState);
    context.on('click', '.modal-background', closeModal);
    context.on('click', '.modal-content', function(e) { e.stopPropagation(); })
  }

  var updateView = function() {
    var context = $(contextName);
    context.find('#'+domID).replaceWith(template.render({
      domID: domID,
      visible: visible,
      state: state
    }));
  }

  var destroyView = function() {
    //not used yet
  }

  var doModal = function(event, data) {
    visible = true;
    state = 'start';
    data = data;
    updateView();
  }

  var closeModal = function(event) {
    visible = false;
    state = 'start';
    data = {};
    updateView();
  }

  var advanceState = function(event, success) {
    switch(state) {
      case 'start':
        state = 'working';
        updateView();
        generateFile();
        break;
      case 'working':
        state = success ? 'ready' : 'failed';
        updateView();
        break;
      case 'ready':
        downloadFile();
        break;
      default:
        console.log('curious');
    }
  }

  var generateFile = function() {
    //do file generation here
    setTimeout(function() {
      $(contextName).trigger('generationDone', true);
    }, 3000);
    console.log('[mock generation]')
    //set the file variable to the generated blob
  }

  var downloadFile = function() {
    //download the damn thing
    console.log('[mock download]');
  }

  return {
    render: renderView
  }
}

module.exports = FileModal;
