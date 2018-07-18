import expensesReducer from '../../reducers/expenses'
import expenses from '../fixtures/expenses'

test('should set default state', () => {
  const state = expensesReducer(undefined, { type: '@@INIT' })

  expect(state).toEqual([])
})

test('should remove expense by id', () => {
  const action = {
    type: 'REMOVE_EXPENSE',
    id: expenses[1].id,
  }
  const state = expensesReducer(expenses, action)

  expect(state).toEqual([expenses[0], expenses[2]])
})

test('should not remove a expense with invalid id', () => {
  const action = {
    type: 'REMOVE_EXPENSE',
    id: '000',
  }
  const state = expensesReducer(expenses, action)

  expect(state).toEqual(expenses)
})

test('should add an expense', () => {
  const expense = {
    id: '444',
    description: 'Fishing equipments',
    note: '',
    amount: 500,
    createdAt: 0,
  }
  const action = { type: 'ADD_EXPENSE', expense }
  const state = expensesReducer(expenses, action)

  expect(state).toEqual([...expenses, expense])
})

test('should edit an expense', () => {
  const { id } = expenses[0]
  const updates = {
    description: 'Fishing equipments',
    amount: 500,
  }
  const action = { type: 'EDIT_EXPENSE', id, updates }
  const state = expensesReducer(expenses, action)

  expect(state[0]).toEqual(expect.objectContaining({ id, ...updates }))
})

test('should not edit an expense with invalid id', () => {
  const id = '000'
  const updates = {
    description: 'Fishing equipments',
    amount: 500,
  }
  const action = { type: 'EDIT_EXPENSE', id, updates }
  const state = expensesReducer(expenses, action)

  expect(state).toEqual(expenses)
})

test('should set expenses', () => {
  const expensesToSet = [
    {
      id: '99',
      description: 'Great Mouse',
      note: '',
      amount: 40,
      createdAt: 9000,
    },
    {
      id: '999',
      description: 'Gread Music Player',
      note: '',
      amount: 700,
      createdAt: 777,
    },
  ]
  const action = { type: 'SET_EXPENSES', expenses: expensesToSet }
  const state = expensesReducer(expenses, action)

  expect(state).toEqual(expensesToSet)
})
