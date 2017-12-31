var rsRecordMap = {
  fields: [
    {
      name: 'record-identifier',
      dataPath: 'constant',
      defaultValue: 'RS',
      format: {
        length: 2,
        justify: 'left',
        padChar: ' ',
        emptyChar: ' '
      }
    },
    {
      name: 'state-code',
      dataPath: 'constant',
      defaultValue: '55',
      format: {
        length: 2,
        justify: 'left',
        padChar: ' ',
        emptyChar: ' '
      }
    },
    {
      name: 'taxing-entity-code',
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
      name: 'employee-ssn',
      dataPath: ['w2','ssn'],
      defaultValue: '',
      format: {
        length: 9,
        justify: 'left',
        padChar: '0',
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
      name: 'optional-code',
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
      name: 'reporting-period',
      dataPath: 'constant',
      defaultValue: '',
      format: {
        length: 6,
        justify: 'left',
        padChar: ' ',
        emptyChar: ' '
      }
    },
    {
      name: 'unemployment-insurance-wages',
      dataPath: 'constant',
      defaultValue: '',
      format: {
        length: 11,
        justify: 'right',
        padChar: '0',
        emptyChar: '0'
      }
    },
    {
      name: 'unemployment-insurance-taxable',
      dataPath: 'constant',
      defaultValue: '',
      format: {
        length: 11,
        justify: 'right',
        padChar: '0',
        emptyChar: '0'
      }
    },
    {
      name: 'weeks-worked',
      dataPath: 'constant',
      defaultValue: '',
      format: {
        length: 2,
        justify: 'right',
        padChar: ' ',
        emptyChar: ' '
      }
    },
    {
      name: 'employed-date',
      dataPath: 'constant',
      defaultValue: '',
      format: {
        length: 8,
        justify: 'left',
        padChar: ' ',
        emptyChar: ' '
      }
    },
    {
      name: 'separation-date',
      dataPath: 'constant',
      defaultValue: '',
      format: {
        length: 8,
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
      name: 'employer-account-number',
      dataPath: ['business','business-state-id'],
      defaultValue: '',
      format: {
        length: 20,
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
        length: 6,
        justify: 'left',
        padChar: ' ',
        emptyChar: ' '
      }
    },
    {
      name: 'state-code',
      dataPath: 'constant',
      defaultValue: '55',
      format: {
        length: 2,
        justify: 'left',
        padChar: ' ',
        emptyChar: ' '
      }
    },
    {
      name: 'state-wages',
      dataPath: ['w2','state-wages-tips'],
      defaultValue: '',
      format: {
        length: 11,
        justify: 'right',
        padChar: '0',
        emptyChar: '0'
      }
    },
    {
      name: 'state-income-tax',
      dataPath: ['w2','state-inc-tax'],
      defaultValue: '',
      format: {
        length: 11,
        justify: 'right',
        padChar: '0',
        emptyChar: '0'
      }
    },
    {
      name: 'other-state-data',
      dataPath: 'constant',
      defaultValue: '',
      format: {
        length: 10,
        justify: 'left',
        padChar: ' ',
        emptyChar: ' '
      }
    },
    {
      name: 'tax-type',
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
      name: 'local-wages',
      dataPath: ['w2','local-wages-tips'],
      defaultValue: '',
      format: {
        length: 11,
        justify: 'right',
        padChar: '0',
        emptyChar: '0'
      }
    },
    {
      name: 'local-income-tax',
      dataPath: ['w2','local-inc-tax'],
      defaultValue: '',
      format: {
        length: 11,
        justify: 'right',
        padChar: '0',
        emptyChar: '0'
      }
    },
    {
      name: 'state-control-number',
      dataPath: 'constant',
      defaultValue: '',
      format: {
        length: 7,
        justify: 'left',
        padChar: ' ',
        emptyChar: ' '
      }
    },
    {
      name: 'supp-data-1',
      dataPath: 'constant',
      defaultValue: '',
      format: {
        length: 75,
        justify: 'left',
        padChar: ' ',
        emptyChar: ' '
      }
    },
    {
      name: 'supp-data-2',
      dataPath: 'constant',
      defaultValue: '',
      format: {
        length: 75,
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
        length: 25,
        justify: 'left',
        padChar: ' ',
        emptyChar: ' '
      }
    }
  ]
}

module.exports = rsRecordMap;
