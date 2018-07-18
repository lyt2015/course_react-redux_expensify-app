import configureStore from 'redux-mock-store'
import thunk from 'redux-thunk'

import { addExpense, removeExpense, editExpense, startAddExpense } from '../../actions/expenses'
import database from '../../firebase/firebase'
import expenses from '../fixtures/expenses'

const createMockStore = configureStore([thunk])

test('should setup remove expense action object', () => {
  const action = removeExpense({ id: '123456' })

  expect(action).toEqual({
    type: 'REMOVE_EXPENSE',
    id: '123456',
  })
})

test('should setup edit expense action object', () => {
  const action = editExpense('123', { note: 'new note value' })

  expect(action).toEqual({
    type: 'EDIT_EXPENSE',
    id: '123',
    updates: {
      note: 'new note value',
    },
  })
})

test('should setup add expense action object with provided values', () => {
  const action = addExpense(expenses[0])

  expect(action).toEqual({
    type: 'ADD_EXPENSE',
    expense: expenses[0],
  })
})

test('should add expense to database and store', done => {
  const store = createMockStore({})
  const expenseData = {
    description: 'G304',
    amount: 4000,
    note: 'Logitech Wireless Mouse',
    createdAt: 1000,
  }

  store
    .dispatch(startAddExpense(expenseData))
    .then(() => {
      const actions = store.getActions()

      expect(actions[0]).toEqual({
        type: 'ADD_EXPENSE',
        expense: {
          id: expect.any(String),
          ...expenseData,
        },
      })

      return database.ref(`expenses/${actions[0].expense.id}`).once('value')
    })
    .then(snapshot => {
      expect(snapshot.val()).toEqual(expenseData)
      done()
    })
})

test('should add expense with defaults to database and store', done => {
  const store = createMockStore({})
  const defaultExpense = {
    description: '',
    note: '',
    amount: 0,
    createdAt: 0,
  }

  store
    .dispatch(startAddExpense())
    .then(() => {
      const actions = store.getActions()

      expect(actions[0]).toEqual({
        type: 'ADD_EXPENSE',
        expense: {
          id: expect.any(String),
          ...defaultExpense,
        },
      })

      return database.ref(`expenses/${actions[0].expense.id}`).once('value')
    })
    .then(snapshot => {
      expect(snapshot.val()).toEqual(defaultExpense)
      done()
    })
})
/*
test('should setup add expense action object with default values', () => {
  const action = addExpense()

  expect(action).toEqual({
    type: 'ADD_EXPENSE',
    expense: {
      description: '',
      note: '',
      amount: 0,
      createdAt: 0,
      id: expect.any(String),
    },
  })
})
 */
