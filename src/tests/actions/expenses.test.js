import configureStore from 'redux-mock-store'
import thunk from 'redux-thunk'

import {
  addExpense,
  removeExpense,
  startRemoveExpense,
  editExpense,
  startEditExpense,
  startAddExpense,
  setExpenses,
  startSetExpenses,
} from '../../actions/expenses'
import expenses from '../fixtures/expenses'
import database from '../../firebase/firebase'

const uid = 'uidForTest'
const defaultAuthState = { auth: { uid } }
const createMockStore = configureStore([thunk])

beforeEach(done => {
  const expenseData = {}
  expenses.forEach(({ id, description, note, amount, createdAt }) => {
    expenseData[id] = { description, note, amount, createdAt }
  })

  database
    .ref(`users/${uid}/expenses`)
    .set(expenseData)
    .then(() => done())
})

test('should setup remove expense action object', () => {
  const action = removeExpense({ id: '123456' })

  expect(action).toEqual({
    type: 'REMOVE_EXPENSE',
    id: '123456',
  })
})

test('should remove expense from firebase', done => {
  const id = expenses[0].id
  const store = createMockStore(defaultAuthState)
  store
    .dispatch(startRemoveExpense({ id }))
    .then(() => {
      const actions = store.getActions()

      expect(actions[0]).toEqual({
        type: 'REMOVE_EXPENSE',
        id,
      })

      return database.ref(`users/${uid}/expenses/${actions[0].id}`).once('value')
    })
    .then(snapshot => {
      expect(snapshot.val()).toBe(null)

      done()
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

test('should edit expense from firebase', done => {
  const id = expenses[0].id
  const updates = {
    description: 'AK70II',
    amount: 700,
    note: 'Great Music Player',
    createdAt: 2018,
  }
  const store = createMockStore(defaultAuthState)
  store
    .dispatch(startEditExpense(id, updates))
    .then(() => {
      const actions = store.getActions()

      expect(actions[0]).toEqual({
        type: 'EDIT_EXPENSE',
        id,
        updates,
      })

      return database.ref(`users/${uid}/expenses/${id}`).once('value')
    })
    .then(snapshot => {
      expect(snapshot.val()).toEqual(updates)

      done()
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
  const store = createMockStore(defaultAuthState)
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

      return database.ref(`users/${uid}/expenses/${actions[0].expense.id}`).once('value')
    })
    .then(snapshot => {
      expect(snapshot.val()).toEqual(expenseData)
      done()
    })
})

test('should add expense with defaults to database and store', done => {
  const store = createMockStore(defaultAuthState)
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

      return database.ref(`users/${uid}/expenses/${actions[0].expense.id}`).once('value')
    })
    .then(snapshot => {
      expect(snapshot.val()).toEqual(defaultExpense)
      done()
    })
})

test('should setup setExpenses action object with data', () => {
  const action = setExpenses(expenses)

  expect(action).toEqual({
    type: 'SET_EXPENSES',
    expenses,
  })
})

test('should fetch the expenses from firebase', done => {
  const store = createMockStore(defaultAuthState)
  store.dispatch(startSetExpenses()).then(() => {
    const actions = store.getActions()

    expect(actions[0]).toEqual({
      type: 'SET_EXPENSES',
      expenses,
    })

    done()
  })
})
