var FieldDescriptions = require('./dataMaps/fieldDescriptionMap');
var ValidationDescriptions = require('./dataMaps/validationDescriptionMap');

var Description = function() {
  var forField = function(name) {
    var fd = FieldDescriptions[name];
    return {
      name: fd.name,
      description: fd.value
    }
  }

  var forValidation = function(name, data) {
    var data = data || {};
    var description = ValidationDescriptions[name];
    var describedData = {}
    if(name === 'dependencies') {
      describedData = {
        dependencies: data.map(function(fieldName) {
          return FieldDescriptions[fieldName].name
        }).join(', ')
      }
    } else {
      describedData = Object.keys(data).reduce(function(map, key) {
        var vd = ValidationDescriptions[data[key]];
        map[key] = vd ? vd.value : data[key];
        return map;
      }, {});
    }
    return {
      name: description.name,
      description: $.templates(description.value).render(describedData)
    }
  }

  return {
    forField: forField,
    forValidation: forValidation
  }
}

module.exports = Description;
