import React from 'react'
import { shallow } from 'enzyme'

import { EditExpensePage } from '../../components/EditExpensePage'
import expenses from '../fixtures/expenses'

let history, wrapper, startEditExpense, startRemoveExpense, expense

beforeEach(() => {
  expense = expenses[0]
  history = { push: jest.fn() }
  startEditExpense = jest.fn()
  startRemoveExpense = jest.fn()
  wrapper = shallow(
    <EditExpensePage
      expense={expense}
      history={history}
      startEditExpense={startEditExpense}
      startRemoveExpense={startRemoveExpense}
    />
  )
})

test('should render EditExpensePage correctly', () => {
  expect(wrapper).toMatchSnapshot()
})

test('should handle edit expense', () => {
  const newExpense = {
    description: 'test description',
    amount: '99.99',
    createdAt: 9999,
    note: 'test note',
  }
  wrapper.find('ExpenseForm').prop('onSubmit')(newExpense)

  expect(startEditExpense).toHaveBeenLastCalledWith(expense.id, newExpense)
  expect(history.push).toHaveBeenLastCalledWith('/')
})

test('should handle remove expense', () => {
  wrapper.find('button').simulate('click')

  expect(startRemoveExpense).toHaveBeenLastCalledWith({ id: expense.id })
  expect(history.push).toHaveBeenLastCalledWith('/')
})
