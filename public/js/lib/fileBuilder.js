var fileSerializers = {
  efw2: require('../serializers/efw2Serializer')
};

var FileBuilder = function(fileType, data) {
  var fileType = fileType;
  var data = data;
  var fileSerializer = fileSerializers[fileType](data);

  var buildFile = function() {
    return new Blob(
      [fileSerializer.serialize()],
      { type: 'text/plain;charset=ascii'}
    );
  }

  return {
    build: buildFile
  }
}

module.exports = FileBuilder;
