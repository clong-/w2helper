var reRecordMap = {
  fields: [
    {
      name: 'record-identifier',
      dataPath: 'constant',
      defaultValue: 'RE',
      format: {
        length: 2,
        justify: 'left',
        padChar: ' ',
        emptyChar: ' '
      }
    },
    {
      name: 'tax-year',
      dataPath: ['report','tax-year'],
      defaultValue: '',
      format: {
        length: 4,
        justify: 'left',
        padChar: ' ',
        emptyChar: ' '
      }
    },
    {
      name: 'agent-indicator',
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
      name: 'employer-ein',
      dataPath: ['business','business-ein'],
      defaultValue: '',
      format: {
        length: 9,
        justify: 'left',
        padChar: ' ',
        emptyChar: ' '
      }
    },
    {
      name: 'agent-for-ein',
      dataPath: 'constant',
      defaultValue: '',
      format: {
        length: 9,
        justify: 'left',
        padChar: ' ',
        emptyChar: ' '
      }
    },
    {
      name: 'terminating-business',
      dataPath: 'constant',
      defaultValue: '0',
      format: {
        length: 1,
        justify: 'left',
        padChar: ' ',
        emptyChar: ' '
      }
    },
    {
      name: 'establishment-number',
      dataPath: 'constant',
      defaultValue: '',
      format: {
        length: 4,
        justify: 'left',
        padChar: ' ',
        emptyChar: ' '
      }
    },
    {
      name: 'other-ein',
      dataPath: 'constant',
      defaultValue: '',
      format: {
        length: 9,
        justify: 'left',
        padChar: ' ',
        emptyChar: ' '
      }
    },
    {
      name: 'employer-name',
      dataPath: ['business','business-name'],
      defaultValue: '',
      format: {
        length: 57,
        justify: 'left',
        padChar: ' ',
        emptyChar: ' '
      }
    },
    {
      name: 'employer-location-address',
      dataPath: ['business','business-add2'],
      defaultValue: '',
      format: {
        length: 22,
        justify: 'left',
        padChar: ' ',
        emptyChar: ' '
      }
    },
    {
      name: 'employer-delivery-address',
      dataPath: ['business','business-add1'],
      defaultValue: '',
      format: {
        length: 22,
        justify: 'left',
        padChar: ' ',
        emptyChar: ' '
      }
    },
    {
      name: 'employer-city',
      dataPath: ['business','business-add-city'],
      defaultValue: '',
      format: {
        length: 22,
        justify: 'left',
        padChar: ' ',
        emptyChar: ' '
      }
    },
    {
      name: 'employer-state',
      dataPath: ['business','business-add-state'],
      defaultValue: '',
      format: {
        length: 2,
        justify: 'left',
        padChar: ' ',
        emptyChar: ' '
      }
    },
    {
      name: 'employer-zip',
      dataPath: ['business','business-add-zip'],
      defaultValue: '',
      format: {
        length: 5,
        justify: 'left',
        padChar: ' ',
        emptyChar: ' '
      }
    },
    {
      name: 'employer-zip-ext',
      dataPath: ['business','business-add-zip-ext'],
      defaultValue: '',
      format: {
        length: 4,
        justify: 'left',
        padChar: ' ',
        emptyChar: ' '
      }
    },
    {
      name: 'kind-of-employer',
      dataPath: ['business','kind-of-employer'],
      defaultValue: '',
      format: {
        length: 1,
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
        length: 4,
        justify: 'left',
        padChar: ' ',
        emptyChar: ' '
      }
    },
    {
      name: 'employer-foreign-state',
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
      name: 'employer-foreign-postal',
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
      name: 'employer-country-code',
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
      name: 'employment-code',
      dataPath: ['business','type-of-employees'],
      defaultValue: '',
      format: {
        length: 1,
        justify: 'left',
        padChar: ' ',
        emptyChar: ' '
      }
    },
    {
      name: 'tax-jurisdiction',
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
      name: 'third-party-sick-pay',
      dataPath: ['computed','third-party-sick-pay'],
      defaultValue: '',
      format: {
        length: 1,
        justify: 'left',
        padChar: '0',
        emptyChar: '0'
      }
    },
    {
      name: 'employer-contact-name',
      dataPath: ['business','business-name'],
      defaultValue: '',
      format: {
        length: 27,
        justify: 'left',
        padChar: ' ',
        emptyChar: ' '
      }
    },
    {
      name: 'employer-contact-phone',
      dataPath: ['report','submitter-phone'],
      defaultValue: '',
      format: {
        length: 15,
        justify: 'left',
        padChar: ' ',
        emptyChar: ' '
      }
    },
    {
      name: 'employer-contact-phone-ext',
      dataPath: ['report','submitter-phone-ext'],
      defaultValue: '',
      format: {
        length: 5,
        justify: 'left',
        padChar: ' ',
        emptyChar: ' '
      }
    },
    {
      name: 'employer-contact-fax',
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
      name: 'employer-contact-email',
      dataPath: ['report','submitter-email'],
      defaultValue: '',
      format: {
        length: 40,
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
        length: 194,
        justify: 'left',
        padChar: ' ',
        emptyChar: ' '
      },
    }
  ],
  computedFields: [
    {
      name: 'third-party-sick-pay',
      op: 'record-bool',
      path: ['rw-records','w2','third-party-sick-pay']
    }
  ]
}

module.exports = reRecordMap;
