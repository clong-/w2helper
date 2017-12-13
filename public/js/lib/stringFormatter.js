var StringFormatter = function() {

  var formatString = function(string, format) {
    var result = Formattable(string.trim());

    result.lengthen(format.length);

    if(string.length) {
      result.justify(format.justify);
      result.padWith(format.padChar);
    } else {
      result.padWith(format.emptyChar);
    }

    return result.toString().toUpperCase();
  }

  var Formattable = function(string) {
    var base = string.split('');

    var lengthen = function(length) {
      while(base.length < length) {
        base.push('');
      }
    }

    var justify = function(direction) {
      if(direction == 'left') {
        while(base[0] == '') {
          base.push(base.shift());
        }
      } else {
        while(base[base.length-1] == '') {
          base.unshift(base.pop());
        }
      }
    }

    var padWith = function(character) {
      base = base.map(function(ch) {
        return ch == '' ? character : ch;
      });
    }

    var toString = function() {
      return base.join('');
    }

    return {
      lengthen: lengthen,
      justify: justify,
      padWith: padWith,
      toString: toString
    }
  }

  return {
    formatString: formatString
  }
}
