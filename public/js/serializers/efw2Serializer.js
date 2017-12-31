var RecordSerializer = require('./recordSerializer');

var EFW2Serializer = function(data) {
  var data = data;
  var compiled = {};

  var serialize = function() {
    //from compiled:
    //  serialize RA
    //  for each business
    //    serialize RE
    //    for each employee:
    //      serialize RW
    //      serialize RS
    //    serialize RT
    //  serialize RF
    //return whole string
    var result = '';
    result += compiled.ra.serialize() + '\n';
    compiled.businesses.forEach(function(business) {
      result += business.re.serialize() + '\n';
      business.employees.forEach(function(employee) {
        result += employee.rw.serialize() + '\n';
        result += employee.rs.serialize() + '\n';
      });
      result += business.rt.serialize() + '\n';
    });
    result += compiled.rf.serialize();
    return result;
  }

  var compileRecords = function() {
    //make an RA (data={business,report})
    //for each business:
    //  for each employee:
    //    make an RW (data={w2})
    //    make an RS (data={w2})
    //  make an RE (data={business,report,rw-records})
    //  make an RT (data={rw-records})
    //make an RF (data={rw-records})
    //save the whole thing as structure in `compiled`
    var ra = RecordSerializer('ra', {
      business: data.businesses[0].forms.business,
      report: data.forms.report
    });
    var businesses = data.businesses.map(function(business) {
      var employees = business.employees.map(function(employee) {
        var rw = RecordSerializer('rw', { w2: employee.forms.w2 });
        var rs = RecordSerializer('rs', { w2: employee.forms.w2 });
        return { rw: rw, rs: rs };
      });
      var rwRecords = employees.map(function(employee) { return employee.rw; });
      var re = RecordSerializer('re', {
        business: business.forms.business,
        report: data.forms.report,
        'rw-records': rwRecords
      });
      var rt = RecordSerializer('rt', { 'rw-records': rwRecords });
      return { re: re, employees: employees, rt: rt }
    });
    var allRWRecords = businesses.map(function(business) {
      return business.employees.map(function(employee) {
        return employee.rw;
      });
    }).reduce(function(result, record) {
      return result.concat(record);
    }, []);
    var rf = RecordSerializer('rf', { 'rw-records': allRWRecords });
    compiled = {
      ra: ra,
      businesses: businesses,
      rf: rf
    }
  }

  compileRecords();

  return {
    serialize: serialize
  }
}

module.exports = EFW2Serializer;
