module.exports = {
  'submitter-name': {
    content: ['alpha'],
    length: {
      op: 'lteq',
      value: 57
    },
    required: true
  },
  'tax-year': {
    content: ['numeric'],
    length: {
      op: 'exactly',
      value: 4
    },
    required: true
  },
  'submitter-phone': {
    content: ['numeric'],
    length: {
      op: 'exactly',
      value: 10
    },
    required: true
  },
  'submitter-phone-ext': {
    content: ['numeric'],
    length: {
      op: 'lteq',
      value: 5
    },
    required: false
  },
  'submitter-email': {
    content: ['email'],
    length: {
      op: 'lteq',
      value: 40
    },
    required: true
  },
  'business-name': {
    content: ['alphanumeric'],
    length: {
      op: 'lteq',
      value: 57
    },
    required: true
  },
  'business-add1': {
    content: ['address'],
    length: {
      op: 'lteq',
      value: 22
    },
    required: true
  },
  'business-add2': {
    content: ['address'],
    length: {
      op: 'lteq',
      value: 22
    },
    required: true
  },
  'business-add-city': {
    content: ['alpha'],
    length: {
      op: 'lteq',
      value: 22
    },
    required: true
  },
  'business-add-state': {
    content: ['alpha'],
    length: {
      op: 'exactly',
      value: 2
    },
    required: true
  },
  'business-add-zip': {
    content: ['numeric'],
    length: {
      op: 'exactly',
      value: 5
    },
    required: true
  },
  'business-add-zip-ext': {
    content: ['numeric'],
    length: {
      op: 'exactly',
      value: 4
    },
    required: false
  },
  'business-ein': {
    content: ['ein'],
    length: {
      op: 'exactly',
      value: 9
    },
    required: true
  },
  'business-control-no': {
    content: ['numeric'],
    length: {
      op: 'lteq',
      value: 20
    },
    required: false
  },
  'business-state': {
    content: ['alpha'],
    length: {
      op: 'exactly',
      value: 2
    },
    required: true
  },
  'business-state-id': {
    content: ['numeric'],
    length: {
      op: 'exactly',
      value: 15
    },
    required: true
  },
  'kind-of-employer': {
    content: ['alpha'],
    length: {
      op: 'exactly',
      value: 1
    },
    required: true
  },
  'type-of-employees': {
    content: ['alpha'],
    length: {
      op: 'exactly',
      value: 1
    },
    required: true
  },
  'ssn': {
    content: ['ssn'],
    length: {
      op: 'exactly',
      value: 9
    },
    required: true
  },
  'wages-tips-other': {
    content: ['numeric'],
    length: {
      op: 'lteq',
      value: 11
    },
    required: false
  },
  'fed-income-tax': {
    content: ['numeric'],
    length: {
      op: 'lteq',
      value: 11
    },
    required: false
  },
  'ss-wages': {
    content: ['numeric'],
    length: {
      op: 'lteq',
      value: 11
    },
    required: true
  },
  'ss-tax': {
    content: ['numeric'],
    length: {
      op: 'lteq',
      value: 11
    },
    required: false
  },
  'medicare-wages': {
    content: ['numeric'],
    length: {
      op: 'lteq',
      value: 11
    },
    required: false
  },
  'medicare-tax': {
    content: ['numeric'],
    length: {
      op: 'lteq',
      value: 11
    },
    required: false
  },
  'ss-tips': {
    content: ['numeric'],
    length: {
      op: 'lteq',
      value: 11
    },
    required: false
  },
  'allocated-tips': {
    content: ['numeric'],
    length: {
      op: 'lteq',
      value: 11
    },
    required: false
  },
  'verification-code': {
    content: ['numeric'],
    length: {
      op: 'lteq',
      value: 20
    },
    required: false
  },
  'dep-care-benefits': {
    content: ['numeric'],
    length: {
      op: 'lteq',
      value: 11
    },
    required: false
  },
  'employee-first-name': {
    content: ['alpha'],
    length: {
      op: 'lteq',
      value: 15
    },
    required: true
  },
  'employee-initial': {
    content: ['alpha'],
    length: {
      op: 'lteq',
      value: 15
    },
    required: true
  },
  'employee-last-name': {
    content: ['alpha'],
    length: {
      op: 'lteq',
      value: 20
    },
    required: true
  },
  'employee-suffix': {
    content: ['alpha'],
    length: {
      op: 'lteq',
      value: 4
    },
    required: true
  },
  'nonqualified-plans': {
    content: ['numeric'],
    length: {
      op: 'lteq',
      value: 11
    },
    required: false
  },
  'def-comp-a-code': {
    content: ['alpha'],
    length: {
      op: 'lteq',
      value: 2
    },
    required: false,
    dependencies: ['def-comp-a-amount']
  },
  'def-comp-a-amount': {
    content: ['numeric'],
    length: {
      op: 'lteq',
      value: 11
    },
    required: false,
    dependencies: ['def-comp-a-code']
  },
  'employee-add1': {
    content: ['address'],
    length: {
      op: 'lteq',
      value: 22
    },
    required: true
  },
  'employee-add2': {
    content: ['address'],
    length: {
      op: 'lteq',
      value: 22
    },
    required: true
  },
  'employee-city': {
    content: ['alpha'],
    length: {
      op: 'lteq',
      value: 22
    },
    required: true
  },
  'employee-state': {
    content: ['alpha'],
    length: {
      op: 'exactly',
      value: 2
    },
    required: true
  },
  'employee-zip': {
    content: ['numeric'],
    length: {
      op: 'exactly',
      value: 5
    },
    required: true
  },
  'employee-zip-ext': {
    content: ['numeric'],
    length: {
      op: 'exactly',
      value: 4
    },
    required: false
  },
  'statutory-employee': {
    content: ['boolean'],
    length: {
      op: 'exactly',
      value: 1
    },
    required: false
  },
  'retirement-plan': {
    content: ['boolean'],
    length: {
      op: 'exactly',
      value: 1
    },
    required: false
  },
  'third-party-sick-pay': {
    content: ['boolean'],
    length: {
      op: 'exactly',
      value: 1
    },
    required: false
  },
  'def-comp-b-code': {
    content: ['alpha'],
    length: {
      op: 'lteq',
      value: 2
    },
    required: false,
    dependencies: ['def-comp-b-amount']
  },
  'def-comp-b-amount': {
    content: ['numeric'],
    length: {
      op: 'lteq',
      value: 11
    },
    required: false,
    dependencies: ['def-comp-b-code']
  },
  'other': {
    content: ['alphanumeric'],
    length: {
      op: 'lteq',
      value: 200
    },
    required: false
  },
  'def-comp-c-code': {
    content: ['alpha'],
    length: {
      op: 'lteq',
      value: 2
    },
    required: false,
    dependencies: ['def-comp-c-amount']
  },
  'def-comp-c-amount': {
    content: ['numeric'],
    length: {
      op: 'lteq',
      value: 11
    },
    required: false,
    dependencies: ['def-comp-c-code']
  },
  'def-comp-d-code': {
    content: ['alpha'],
    length: {
      op: 'lteq',
      value: 2
    },
    required: false,
    dependencies: ['def-comp-d-amount']
  },
  'def-comp-d-amount': {
    content: ['numeric'],
    length: {
      op: 'lteq',
      value: 11
    },
    required: false,
    dependencies: ['def-comp-d-code']
  },
  'state-wages-tips': {
    content: ['numeric'],
    length: {
      op: 'lteq',
      value: 11
    },
    required: false
  },
  'state-inc-tax': {
    content: ['numeric'],
    length: {
      op: 'lteq',
      value: 11
    },
    required: false
  },
  'local-wages-tips': {
    content: ['numeric'],
    length: {
      op: 'lteq',
      value: 11
    },
    required: false
  },
  'local-inc-tax': {
    content: ['numeric'],
    length: {
      op: 'lteq',
      value: 11
    },
    required: false
  },
  'locality-name': {
    content: ['alpha'],
    length: {
      op: 'lteq',
      value: 22
    },
    required: false
  },
};
