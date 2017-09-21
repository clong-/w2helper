function printReport() {
  var lines = [];
  var businessObject = serializeFormToObject('business');
  var businessLineData = '';
  var employeeObjects = $('form.employee').map(function(i,d) {
    return serializeFormToObject(d.id);
  });

  lines.push(HEADERS);

  BUSINESSFIELDS.forEach(function(fieldName) {
    businessLineData += businessObject[fieldName] + ', ';
  });

  employeeObjects.each(function(index, employee) {
    var employeeLineData = '';
    console.log(employee);
    EMPLOYEEFIELDS.forEach(function(fieldName) {
      employeeLineData += employee[fieldName] + ', ';
    });
    lines.push(businessLineData + employeeLineData.substring(0, employeeLineData.lastIndexOf(',')));
  });

  displayData(lines);
}

function serializeFormToObject(id) {
  var data = $('#'+id).serializeArray();
  var mapped = {};
  data.forEach(function(d) {
    mapped[d.name] = d.value;
  });
  return mapped;
}

function generateLine(business, employee) {
  BUSINESSFIELDS.forEach()
}

function displayData(lines) {
  var html = "<table>"
  lines.forEach(function(row) {
    html += "<tr>";
    row.split(', ').forEach(function(cell) {
      html += "<td>";
      html += cell;
      html += "</td>";
    });
    html += "</tr>";
  });
  html += "</table>";

  $('#printout').html(html);
}
