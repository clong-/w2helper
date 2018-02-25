var FileBuilder = require('../lib/fileBuilder');
var FileSaver = require('../vendor/FileSaver');
var W2DataValidator = require('../lib/w2DataValidator');

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
  var validState = {
    passed: true,
    errors: []
  };

  var renderView = function() {
    var context = $(contextName);
    context.append(template.render({
      domID: domID,
      visible: visible,
      state: state,
      errors: validState.errors
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
      state: state,
      errors: validState.errors
    }));
  }

  var destroyView = function() {
    //not used yet
  }

  var doModal = function(event, fileData) {
    visible = true;
    state = 'start';
    data = fileData;
    updateView();
  }

  var closeModal = function(event) {
    visible = false;
    state = 'start';
    data = {};
    updateView();
  }

  var advanceState = function(event) {
    switch(state) {
      case 'start':
        state = 'working';
        updateView();
        generateFile();
        break;
      case 'working':
        state = validState.passed ? 'ready' : 'failed';
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
    validState = W2DataValidator(data).getState();
    file = FileBuilder('efw2', data).build();
    setTimeout(function() {
      $(contextName).trigger('generationDone');
    }, 3000);
  }

  var downloadFile = function() {
    FileSaver.saveAs(file, 'efw2.txt');
  }

  return {
    render: renderView
  }
}

module.exports = FileModal;
