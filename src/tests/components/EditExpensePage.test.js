import React from 'react'
import { shallow } from 'enzyme'

import { EditExpensePage } from '../../components/EditExpensePage'
import expenses from '../fixtures/expenses'

let history, wrapper, editExpense, removeExpense, expense

beforeEach(() => {
  expense = expenses[0]
  history = { push: jest.fn() }
  editExpense = jest.fn()
  removeExpense = jest.fn()
  wrapper = shallow(
    <EditExpensePage
      expense={expense}
      history={history}
      editExpense={editExpense}
      removeExpense={removeExpense}
    />
  )
})

test('should render EditExpensePage correctly', () => {
  expect(wrapper).toMatchSnapshot()
})

test('should handle editExpense', () => {
  const newExpense = {
    description: 'test description',
    amount: '99.99',
    createdAt: 9999,
    note: 'test note',
  }
  wrapper.find('ExpenseForm').prop('onSubmit')(newExpense)

  expect(editExpense).toHaveBeenLastCalledWith(expense.id, newExpense)
  expect(history.push).toHaveBeenLastCalledWith('/')
})

test('should handle removeExpense', () => {
  wrapper.find('button').simulate('click')

  expect(removeExpense).toHaveBeenLastCalledWith({ id: expense.id })
  expect(history.push).toHaveBeenLastCalledWith('/')
})
