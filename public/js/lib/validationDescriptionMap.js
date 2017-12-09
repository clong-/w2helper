module.exports = {
  'alphanumeric': {
    name: 'alphanumeric',
    value: 'Must contain only <a href="https://www.asciitable.com" target="_blank">ASCII</a> letters, numbers, spaces, and symbols (characters 32-126).'
  },
  'alpha': {
    name: 'alpha',
    value: 'Must contain only <a href="https://www.asciitable.com" target="_blank">ASCII</a> letters and spaces.'
  },
  'numeric': {
    name: 'numeric',
    value: 'Must contain only <a href="https://www.asciitable.com" target="_blank">ASCII</a> numbers.'
  },
  'address': {
    name: 'address',
    value: 'Must contain only <a href="https://www.asciitable.com" target="_blank">ASCII</a> letters, numbers, spaces, and symbols (characters 32-126).'
  },
  'ein': {
    name: 'ein',
    value: 'EINs cannot begin with 00, 07, 08, 09, 17, 18, 19, 28, 29, 49, 69, 70, 78, 79, or 89.'
  },
  'email': {
    name: 'email',
    value: 'Must be an email address in typical form.'
  },
  'ssn': {
    name: 'ssn',
    value: 'SSNs cannot begin with 666 or 9.'
  },
  'length': {
    name: 'length',
    value: 'Length must be {{:op}} {{:value}} characters.'
  },
  'required': {
    name: 'required',
    value: 'This field is required.'
  },
  'dependencies': {
    name: 'dependencies',
    value: 'If filled, these fields must also be filled (and vice versa): <b>{{:dependencies}}</b>'
  },
  'lteq': {
    name: 'lteq',
    value: 'no greater than'
  },
  'exactly': {
    name: 'exactly',
    value: 'exactly'
  }
}
