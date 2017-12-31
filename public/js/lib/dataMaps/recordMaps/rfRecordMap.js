var rfRecordMap = {
  fields: [
    {
      name: 'record-identifier',
      dataPath: 'constant',
      defaultValue: 'RF',
      format: {
        length: 2,
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
      name: 'rw-record-count',
      dataPath: ['computed','rw-record-count'],
      defaultValue: '',
      format: {
        length: 9,
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
        length: 496,
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
    }
  ]
}

module.exports = rfRecordMap;
