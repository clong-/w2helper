var rwRecordMap = {
  fields: [
    {
      name: 'record-identifier',
      dataPath: 'constant',
      defaultValue: 'RW',
      format: {
        length: 2,
        justify: 'left',
        padChar: ' ',
        emptyChar: ' '
      }
    },
    {
      name: 'employee-ssn',
      dataPath: ['w2','ssn'],
      defaultValue: '',
      format: {
        length: 9,
        justify: 'left',
        padChar: ' ',
        emptyChar: '0'
      }
    },
    {
      name: 'employee-first-name',
      dataPath: ['w2','employee-first-name'],
      defaultValue: '',
      format: {
        length: 15,
        justify: 'left',
        padChar: ' ',
        emptyChar: ' '
      }
    },
    {
      name: 'employee-middle-initial',
      dataPath: ['w2','employee-initial'],
      defaultValue: '',
      format: {
        length: 15,
        justify: 'left',
        padChar: ' ',
        emptyChar: ' '
      }
    },
    {
      name: 'employee-last-name',
      dataPath: ['w2','employee-last-name'],
      defaultValue: '',
      format: {
        length: 20,
        justify: 'left',
        padChar: ' ',
        emptyChar: ' '
      }
    },
    {
      name: 'employee-name-suffix',
      dataPath: ['w2','employee-suffix'],
      defaultValue: '',
      format: {
        length: 4,
        justify: 'left',
        padChar: ' ',
        emptyChar: ' '
      }
    },
    {
      name: 'employee-location-address',
      dataPath: ['w2','employee-add2'],
      defaultValue: '',
      format: {
        length: 22,
        justify: 'left',
        padChar: ' ',
        emptyChar: ' '
      }
    },
    {
      name: 'employee-delivery-address',
      dataPath: ['w2','employee-add1'],
      defaultValue: '',
      format: {
        length: 22,
        justify: 'left',
        padChar: ' ',
        emptyChar: ' '
      }
    },
    {
      name: 'employee-city',
      dataPath: ['w2','employee-city'],
      defaultValue: '',
      format: {
        length: 22,
        justify: 'left',
        padChar: ' ',
        emptyChar: ' '
      }
    },
    {
      name: 'employee-state',
      dataPath: ['w2','employee-state'],
      defaultValue: '',
      format: {
        length: 2,
        justify: 'left',
        padChar: ' ',
        emptyChar: ' '
      }
    },
    {
      name: 'employee-zip',
      dataPath: ['w2','employee-zip'],
      defaultValue: '',
      format: {
        length: 5,
        justify: 'left',
        padChar: ' ',
        emptyChar: ' '
      }
    },
    {
      name: 'employee-zip-ext',
      dataPath: ['w2','employee-zip-ext'],
      defaultValue: '',
      format: {
        length: 4,
        justify: 'left',
        padChar: ' ',
        emptyChar: ' '
      }
    },
    {
      name: 'blank',
      dataPath: 'constant',
      defaultValue: '',
      format: {
        length: 5,
        justify: 'left',
        padChar: ' ',
        emptyChar: ' '
      }
    },
    {
      name: 'employee-foreign-state',
      dataPath: 'constant',
      defaultValue: '',
      format: {
        length: 23,
        justify: 'left',
        padChar: ' ',
        emptyChar: ' '
      }
    },
    {
      name: 'employee-foreign-postal',
      dataPath: 'constant',
      defaultValue: '',
      format: {
        length: 15,
        justify: 'left',
        padChar: ' ',
        emptyChar: ' '
      }
    },
    {
      name: 'employee-country-code',
      dataPath: 'constant',
      defaultValue: '',
      format: {
        length: 2,
        justify: 'left',
        padChar: ' ',
        emptyChar: ' '
      }
    },
    {
      name: 'wages-tips-other',
      dataPath: ['w2','wages-tips-other'],
      defaultValue: '',
      format: {
        length: 11,
        justify: 'right',
        padChar: '0',
        emptyChar: '0'
      }
    },
    {
      name: 'federal-income-tax',
      dataPath: ['w2','fed-income-tax'],
      defaultValue: '',
      format: {
        length: 11,
        justify: 'right',
        padChar: '0',
        emptyChar: '0'
      }
    },
    {
      name: 'ss-wages',
      dataPath: ['w2','ss-wages'],
      defaultValue: '',
      format: {
        length: 11,
        justify: 'right',
        padChar: '0',
        emptyChar: '0'
      }
    },
    {
      name: 'ss-tax',
      dataPath: ['w2','ss-tax'],
      defaultValue: '',
      format: {
        length: 11,
        justify: 'right',
        padChar: '0',
        emptyChar: '0'
      }
    },
    {
      name: 'medicare-wages-tips',
      dataPath: ['w2','medicare-wages'],
      defaultValue: '',
      format: {
        length: 11,
        justify: 'right',
        padChar: '0',
        emptyChar: '0'
      }
    },
    {
      name: 'medicare-tax',
      dataPath: ['w2','medicare-tax'],
      defaultValue: '',
      format: {
        length: 11,
        justify: 'right',
        padChar: '0',
        emptyChar: '0'
      }
    },
    {
      name: 'ss-tips',
      dataPath: ['w2','ss-tips'],
      defaultValue: '',
      format: {
        length: 11,
        justify: 'right',
        padChar: '0',
        emptyChar: '0'
      }
    },
    {
      name: 'blank',
      dataPath: 'constant',
      defaultValue: '',
      format: {
        length: 11,
        justify: 'left',
        padChar: ' ',
        emptyChar: ' '
      }
    },
    {
      name: 'dep-care-benefits',
      dataPath: ['w2','dep-care-benefits'],
      defaultValue: '',
      format: {
        length: 11,
        justify: 'right',
        padChar: '0',
        emptyChar: '0'
      }
    },
    {
      name: 'def-comp-401k',
      dataPath: ['computed','def-comp-401k'],
      defaultValue: '',
      format: {
        length: 11,
        justify: 'right',
        padChar: '0',
        emptyChar: '0'
      }
    },
    {
      name: 'def-comp-403b',
      dataPath: ['computed','def-comp-403b'],
      defaultValue: '',
      format: {
        length: 11,
        justify: 'right',
        padChar: '0',
        emptyChar: '0'
      }
    },
    {
      name: 'def-comp-408k6',
      dataPath: ['computed','def-comp-408k6'],
      defaultValue: '',
      format: {
        length: 11,
        justify: 'right',
        padChar: '0',
        emptyChar: '0'
      }
    },
    {
      name: 'def-comp-457b',
      dataPath: ['computed','def-comp-457b'],
      defaultValue: '',
      format: {
        length: 11,
        justify: 'right',
        padChar: '0',
        emptyChar: '0'
      }
    },
    {
      name: 'def-comp-501c18d',
      dataPath: ['computed','def-comp-501c18d'],
      defaultValue: '',
      format: {
        length: 11,
        justify: 'right',
        padChar: '0',
        emptyChar: '0'
      }
    },
    {
      name: 'blank',
      dataPath: 'constant',
      defaultValue: '',
      format: {
        length: 11,
        justify: 'left',
        padChar: ' ',
        emptyChar: ' '
      }
    },
    {
      name: 'non-qual-plan-457',
      dataPath: ['computed','non-qual-plan-457'],
      defaultValue: '',
      format: {
        length: 11,
        justify: 'right',
        padChar: '0',
        emptyChar: '0'
      }
    },
    {
      name: 'health-savings',
      dataPath: ['computed','health-savings'],
      defaultValue: '',
      format: {
        length: 11,
        justify: 'right',
        padChar: '0',
        emptyChar: '0'
      }
    },
    {
      name: 'non-qual-non-457',
      dataPath: ['computed','non-qual-non-457'],
      defaultValue: '',
      format: {
        length: 11,
        justify: 'right',
        padChar: '0',
        emptyChar: '0'
      }
    },
    {
      name: 'combat-pay',
      dataPath: ['computed','combat-pay'],
      defaultValue: '',
      format: {
        length: 11,
        justify: 'right',
        padChar: '0',
        emptyChar: '0'
      }
    },
    {
      name: 'blank',
      dataPath: 'constant',
      defaultValue: '',
      format: {
        length: 11,
        justify: 'left',
        padChar: ' ',
        emptyChar: ' '
      }
    },
    {
      name: 'group-term-life-premiums',
      dataPath: ['computed','group-term-life-premiums'],
      defaultValue: '',
      format: {
        length: 11,
        justify: 'right',
        padChar: '0',
        emptyChar: '0'
      }
    },
    {
      name: 'nonstatutory-stock',
      dataPath: ['computed','nonstatutory-stock'],
      defaultValue: '',
      format: {
        length: 11,
        justify: 'right',
        padChar: '0',
        emptyChar: '0'
      }
    },
    {
      name: 'def-comp-409a',
      dataPath: ['computed','def-comp-409a'],
      defaultValue: '',
      format: {
        length: 11,
        justify: 'right',
        padChar: '0',
        emptyChar: '0'
      }
    },
    {
      name: 'roth-401k',
      dataPath: ['computed','roth-401k'],
      defaultValue: '',
      format: {
        length: 11,
        justify: 'right',
        padChar: '0',
        emptyChar: '0'
      }
    },
    {
      name: 'roth-403b',
      dataPath: ['computed','roth-403b'],
      defaultValue: '',
      format: {
        length: 11,
        justify: 'right',
        padChar: '0',
        emptyChar: '0'
      }
    },
    {
      name: 'sponsored-health-coverage',
      dataPath: ['computed','sponsored-health-coverage'],
      defaultValue: '',
      format: {
        length: 11,
        justify: 'right',
        padChar: '0',
        emptyChar: '0'
      }
    },
    {
      name: 'health-reimbursement',
      dataPath: ['computed','health-reimbursement'],
      defaultValue: '',
      format: {
        length: 11,
        justify: 'right',
        padChar: '0',
        emptyChar: '0'
      }
    },
    {
      name: 'blank',
      dataPath: 'constant',
      defaultValue: '',
      format: {
        length: 1,
        justify: 'left',
        padChar: ' ',
        emptyChar: ' '
      }
    },
    {
      name: 'statutory-employee',
      dataPath: ['w2','statutory-employee'],
      defaultValue: '',
      format: {
        length: 1,
        justify: 'left',
        padChar: '0',
        emptyChar: '0'
      }
    },
    {
      name: 'blank',
      dataPath: 'constant',
      defaultValue: '',
      format: {
        length: 1,
        justify: 'left',
        padChar: ' ',
        emptyChar: ' '
      }
    },
    {
      name: 'retirement-plan',
      dataPath: ['w2','retirement-plan'],
      defaultValue: '',
      format: {
        length: 1,
        justify: 'left',
        padChar: '0',
        emptyChar: '0'
      }
    },
    {
      name: 'third-party-sick-pay',
      dataPath: ['w2','third-party-sick-pay'],
      defaultValue: '',
      format: {
        length: 1,
        justify: 'left',
        padChar: '0',
        emptyChar: '0'
      }
    },
    {
      name: 'blank',
      dataPath: 'constant',
      defaultValue: '',
      format: {
        length: 23,
        justify: 'left',
        padChar: ' ',
        emptyChar: ' '
      }
    }
  ],
  computedFields: [
    {
      name: 'def-comp-401k',
      op: 'def-comp-code-select',
      value: 'D'
    },
    {
      name: 'def-comp-403b',
      op: 'def-comp-code-select',
      value: 'E'
    },
    {
      name: 'def-comp-408k6',
      op: 'def-comp-code-select',
      value: 'F'
    },
    {
      name: 'def-comp-457b',
      op: 'def-comp-code-select',
      value: 'G'
    },
    {
      name: 'def-comp-501c18d',
      op: 'def-comp-code-select',
      value: 'H'
    },
    {
      name: 'non-qual-plan-457',
      op: 'non-qual-457-select',
      value: '1'
    },
    {
      name: 'health-savings',
      op: 'def-comp-code-select',
      value: 'W'
    },
    {
      name: 'non-qual-non-457',
      op: 'non-qual-457-select',
      value: '0'
    },
    {
      name: 'combat-pay',
      op: 'def-comp-code-select',
      value: 'Q'
    },
    {
      name: 'group-term-life-premiums',
      op: 'def-comp-code-select',
      value: 'C'
    },
    {
      name: 'nonstatutory-stock',
      op: 'def-comp-code-select',
      value: 'V'
    },
    {
      name: 'def-comp-409a',
      op: 'def-comp-code-select',
      value: 'Y'
    },
    {
      name: 'roth-401k',
      op: 'def-comp-code-select',
      value: 'AA'
    },
    {
      name: 'roth-403b',
      op: 'def-comp-code-select',
      value: 'BB'
    },
    {
      name: 'sponsored-health-coverage',
      op: 'def-comp-code-select',
      value: 'DD'
    },
    {
      name: 'health-reimbursement',
      op: 'def-comp-code-select',
      value: 'FF'
    }
  ]
}

module.exports = rwRecordMap;
