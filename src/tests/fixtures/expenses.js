import moment from 'moment'

export default [
  {
    id: '111',
    description: 'Udemy javascript courses',
    note: '',
    amount: 300,
    createdAt: 0,
  },
  {
    id: '222',
    description: 'Udemy drawing courses',
    note: '',
    amount: 100,
    createdAt: moment(0)
      .add(4, 'days')
      .valueOf(),
  },
  {
    id: '333',
    description: 'Games',
    note: '',
    amount: 1000,
    createdAt: moment(0)
      .subtract(10, 'days')
      .valueOf(),
  },
]
