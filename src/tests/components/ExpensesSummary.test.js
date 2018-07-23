import React from 'react'
import { shallow } from 'enzyme'

import { ExpensesSummary } from '../../components/ExpensesSummary'

test('should render ExpensesSummary correctly with one expense', () => {
  const wrapper = shallow(
    <ExpensesSummary expenseCount={1} expensesTotal={10000} hiddenExpenseCount={0} />
  )

  expect(wrapper).toMatchSnapshot()
})

test('should render ExpensesSummary correctly with multiple expenses', () => {
  const wrapper = shallow(
    <ExpensesSummary expenseCount={7} expensesTotal={77777} hiddenExpenseCount={0} />
  )

  expect(wrapper).toMatchSnapshot()
})

test('should render ExpenseSummary correctly with no hidden expenses', () => {
  const wrapper = shallow(
    <ExpensesSummary expenseCount={7} expensesTotal={77777} hiddenExpenseCount={0} />
  )

  expect(wrapper).toMatchSnapshot()
})

test('should render ExpenseSummary correctly with one hidden expense', () => {
  const wrapper = shallow(
    <ExpensesSummary expenseCount={7} expensesTotal={77777} hiddenExpenseCount={1} />
  )

  expect(wrapper).toMatchSnapshot()
})

test('should render ExpenseSummary correctly with multiple hidden expensea', () => {
  const wrapper = shallow(
    <ExpensesSummary expenseCount={7} expensesTotal={77777} hiddenExpenseCount={3} />
  )

  expect(wrapper).toMatchSnapshot()
})
