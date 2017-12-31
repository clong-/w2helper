var recordMaps = {
  ra: require('../lib/dataMaps/recordMaps/raRecordMap'),
  re: require('../lib/dataMaps/recordMaps/reRecordMap'),
  rw: require('../lib/dataMaps/recordMaps/rwRecordMap'),
  rs: require('../lib/dataMaps/recordMaps/rsRecordMap'),
  rt: require('../lib/dataMaps/recordMaps/rtRecordMap'),
  rf: require('../lib/dataMaps/recordMaps/rfRecordMap')
}
var formatString = require('../lib/stringFormatter')().formatString;

var RecordSerializer = function(recordType, data) {
  var fields = recordMaps[recordType].fields;
  var computedFields = recordMaps[recordType].computedFields;
  var data = data;

  var serialize = function() {
    return fields.map(function(field) {
      var value;
      if(field.dataPath === 'constant') {
        value = field.defaultValue;
      } else {
        value = dataAtPath(field.dataPath);
      }
      return formatString(value, field.format);
    }).join('');
  }

  var dataAtPath = function(path) {
    //path should be [formType, fieldName] for now
    return data[path[0]][path[1]].value;
  }

  var getData = function(path) {
    return dataAtPath(path);
  }

  var insertComputedFields = function() {
    data['computed'] = {};
    computedFields.forEach(function(field) {
      var computedValue;
      switch(field.op) {
        case 'count':
          computedValue = data[field.path[0]].length.toString();
          break;
        case 'record-sum':
          var sum = 0;
          data[field.path[0]].forEach(function(record) {
            sum += parseInt(record.getData(field.path.slice(1))) || 0;
          });
          computedValue = sum.toString();
          break;
        case 'def-comp-code-select':
          computedValue = '0';
          if(dataAtPath(['w2','def-comp-a-code']) === field.value) {
            computedValue = dataAtPath(['w2','def-comp-a-amount']);
          } else if(dataAtPath(['w2','def-comp-b-code']) === field.value) {
            computedValue = dataAtPath(['w2','def-comp-b-amount']);
          } else if(dataAtPath(['w2','def-comp-c-code']) === field.value) {
            computedValue = dataAtPath(['w2','def-comp-c-amount']);
          } else if(dataAtPath(['w2','def-comp-d-code']) === field.value) {
            computedValue = dataAtPath(['w2','def-comp-d-amount']);
          }
          break;
        case 'non-qual-457-select':
          computedValue = '0';
          if(dataAtPath(['w2','section-457']) === field.value) {
            computedValue = dataAtPath(['w2','nonqualified-plans']);
          }
          break;
        case 'record-bool':
          var records = data[field.path[0]];
          computedValue = '0';
          for(var i = 0; i < records.length; i++) {
            if(records[i].getData(field.path.slice(1)) === '1') {
              computedValue = '1';
              break;
            }
          }
          break;
        default:
          console.log('curious: '+field.op);
      }
      data['computed'][field.name] = { value: computedValue };
    });
  }

  if(computedFields) insertComputedFields();

  return {
    serialize: serialize,
    getData: getData
  }
}

module.exports = RecordSerializer;
