var raRecordMap = {
  fields: [
    {
      name: 'record-identifier',
      dataPath: 'constant',
      defaultValue: 'RA',
      format: {
        length: 2,
        justify: 'left',
        padChar: ' ',
        emptyChar: ' '
      }
    },
    {
      name: 'submitter-ein',
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
      name: 'user-id',
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
      name: 'software-vendor-code',
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
      name: 'blanks',
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
      name: 'resub-indicator',
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
      name: 'resub-wfid',
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
      name: 'software-code',
      dataPath: 'constant',
      defaultValue: '98',
      format: {
        length: 2,
        justify: 'left',
        padChar: ' ',
        emptyChar: ' '
      }
    },
    {
      name: 'company-name',
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
      name: 'company-location-address',
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
      name: 'company-delivery-address',
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
      name: 'company-city',
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
      name: 'company-state',
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
      name: 'company-zip',
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
      name: 'company-zip-ext',
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
      name: 'blanks',
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
      name: 'company-foreign-state',
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
      name: 'company-foreign-postal',
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
      name: 'company-country-code',
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
      name: 'submitter-name',
      dataPath: ['report','submitter-name'],
      defaultValue: '',
      format: {
        length: 57,
        justify: 'left',
        padChar: ' ',
        emptyChar: ' '
      }
    },
    {
      name: 'submitter-location-address',
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
      name: 'submitter-delivery-address',
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
      name: 'submitter-city',
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
      name: 'submitter-state',
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
      name: 'submitter-zip',
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
      name: 'submitter-zip-ext',
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
      name: 'blanks',
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
      name: 'submitter-foreign-state',
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
      name: 'submitter-foreign-postal',
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
      name: 'submitter-country-code',
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
      name: 'contact-name',
      dataPath: ['report','submitter-name'],
      defaultValue: '',
      format: {
        length: 27,
        justify: 'left',
        padChar: ' ',
        emptyChar: ' '
      }
    },
    {
      name: 'contact-phone',
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
      name: 'contact-phone-ext',
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
      name: 'blanks',
      dataPath: 'constant',
      defaultValue: '',
      format: {
        length: 3,
        justify: 'left',
        padChar: ' ',
        emptyChar: ' '
      }
    },
    {
      name: 'contact-email',
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
      name: 'blanks',
      dataPath: 'constant',
      defaultValue: '',
      format: {
        length: 3,
        justify: 'left',
        padChar: ' ',
        emptyChar: ' '
      }
    },
    {
      name: 'contact-fax',
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
      name: 'blanks',
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
      name: 'preparer-code',
      dataPath: 'constant',
      defaultValue: 'L',
      format: {
        length: 1,
        justify: 'left',
        padChar: ' ',
        emptyChar: ' '
      }
    },
    {
      name: 'blanks',
      dataPath: 'constant',
      defaultValue: '',
      format: {
        length: 12,
        justify: 'left',
        padChar: ' ',
        emptyChar: ' '
      }
    }
  ]
}

module.exports = raRecordMap;
