var rtRecordMap = {
  fields: [
    {
      name: 'record-identifier',
      dataPath: 'constant',
      defaultValue: 'RT',
      format: {
        length: 2,
        justify: 'left',
        padChar: ' ',
        emptyChar: ' '
      }
    },
    {
      name: 'rw-record-count',
      dataPath: ['computed','rw-record-count'],
      defaultValue: '',
      format: {
        length: 7,
        justify: 'right',
        padChar: '0',
        emptyChar: '0'
      }
    },
    {
      name: 'wages-tips-other',
      dataPath: ['computed','wages-tips-other'],
      defaultValue: '',
      format: {
        length: 15,
        justify: 'right',
        padChar: '0',
        emptyChar: '0'
      }
    },
    {
      name: 'federal-tax',
      dataPath: ['computed','federal-tax'],
      defaultValue: '',
      format: {
        length: 15,
        justify: 'right',
        padChar: '0',
        emptyChar: '0'
      }
    },
    {
      name: 'ss-wages',
      dataPath: ['computed','ss-wages'],
      defaultValue: '',
      format: {
        length: 15,
        justify: 'right',
        padChar: '0',
        emptyChar: '0'
      }
    },
    {
      name: 'ss-tax',
      dataPath: ['computed','ss-tax'],
      defaultValue: '',
      format: {
        length: 15,
        justify: 'right',
        padChar: '0',
        emptyChar: '0'
      }
    },
    {
      name: 'medicare-wages',
      dataPath: ['computed','medicare-wages'],
      defaultValue: '',
      format: {
        length: 15,
        justify: 'right',
        padChar: '0',
        emptyChar: '0'
      }
    },
    {
      name: 'medicare-tax',
      dataPath: ['computed','medicare-tax'],
      defaultValue: '',
      format: {
        length: 15,
        justify: 'right',
        padChar: '0',
        emptyChar: '0'
      }
    },
    {
      name: 'ss-tips',
      dataPath: ['computed','ss-tips'],
      defaultValue: '',
      format: {
        length: 15,
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
        length: 15,
        justify: 'left',
        padChar: ' ',
        emptyChar: ' '
      }
    },
    {
      name: 'dep-care-benefits',
      dataPath: ['computed','dep-care-benefits'],
      defaultValue: '',
      format: {
        length: 15,
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
        length: 15,
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
        length: 15,
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
        length: 15,
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
        length: 15,
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
        length: 15,
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
        length: 15,
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
        length: 15,
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
        length: 15,
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
        length: 15,
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
        length: 15,
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
        length: 15,
        justify: 'right',
        padChar: '0',
        emptyChar: '0'
      }
    },
    {
      name: 'group-term-life-premiums',
      dataPath: ['computed','group-term-life-premiums'],
      defaultValue: '',
      format: {
        length: 15,
        justify: 'right',
        padChar: '0',
        emptyChar: '0'
      }
    },
    {
      name: 'third-party-sick-pay-tax',
      dataPath: 'constant',
      defaultValue: '',
      format: {
        length: 15,
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
        length: 15,
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
        length: 15,
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
        length: 15,
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
        length: 15,
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
        length: 15,
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
        length: 98,
        justify: 'left',
        padChar: ' ',
        emptyChar: ' '
      }
    }
  ],
  computedFields: [
    {
      name: 'rw-record-count',
      op: 'count',
      path: ['rw-records']
    },
    {
      name: 'wages-tips-other',
      op: 'record-sum',
      path: ['rw-records','w2','wages-tips-other']
    },
    {
      name: 'federal-tax',
      op: 'record-sum',
      path: ['rw-records','w2','fed-income-tax']
    },
    {
      name: 'ss-wages',
      op: 'record-sum',
      path: ['rw-records','w2','ss-wages']
    },
    {
      name: 'ss-tax',
      op: 'record-sum',
      path: ['rw-records','w2','ss-tax']
    },
    {
      name: 'medicare-wages',
      op: 'record-sum',
      path: ['rw-records','w2','medicare-wages']
    },
    {
      name: 'medicare-tax',
      op: 'record-sum',
      path: ['rw-records','w2','medicare-tax']
    },
    {
      name: 'ss-tips',
      op: 'record-sum',
      path: ['rw-records','w2','ss-tips']
    },
    {
      name: 'dep-care-benefits',
      op: 'record-sum',
      path: ['rw-records','w2','dep-care-benefits']
    },
    {
      name: 'def-comp-401k',
      op: 'record-sum',
      path: ['rw-records','computed','def-comp-401k']
    },
    {
      name: 'def-comp-403b',
      op: 'record-sum',
      path: ['rw-records','computed','def-comp-403b']
    },
    {
      name: 'def-comp-408k6',
      op: 'record-sum',
      path: ['rw-records','computed','def-comp-408k6']
    },
    {
      name: 'def-comp-457b',
      op: 'record-sum',
      path: ['rw-records','computed','def-comp-457b']
    },
    {
      name: 'def-comp-501c18d',
      op: 'record-sum',
      path: ['rw-records','computed','def-comp-501c18d']
    },
    {
      name: 'non-qual-plan-457',
      op: 'record-sum',
      path: ['rw-records','computed','non-qual-plan-457']
    },
    {
      name: 'health-savings',
      op: 'record-sum',
      path: ['rw-records','computed','health-savings']
    },
    {
      name: 'non-qual-non-457',
      op: 'record-sum',
      path: ['rw-records','computed','non-qual-non-457']
    },
    {
      name: 'combat-pay',
      op: 'record-sum',
      path: ['rw-records','computed','combat-pay']
    },
    {
      name: 'sponsored-health-coverage',
      op: 'record-sum',
      path: ['rw-records','computed','sponsored-health-coverage']
    },
    {
      name: 'group-term-life-premiums',
      op: 'record-sum',
      path: ['rw-records','computed','group-term-life-premiums']
    },
    {
      name: 'nonstatutory-stock',
      op: 'record-sum',
      path: ['rw-records','computed','nonstatutory-stock']
    },
    {
      name: 'def-comp-409a',
      op: 'record-sum',
      path: ['rw-records','computed','def-comp-409a']
    },
    {
      name: 'roth-401k',
      op: 'record-sum',
      path: ['rw-records','computed','roth-401k']
    },
    {
      name: 'roth-403b',
      op: 'record-sum',
      path: ['rw-records','computed','roth-403b']
    },
    {
      name: 'health-reimbursement',
      op: 'record-sum',
      path: ['rw-records','computed','health-reimbursement']
    }
  ],
}

module.exports = rtRecordMap;
