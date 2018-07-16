import React from 'react'
import { shallow } from 'enzyme'

import { ExpensesSummary } from '../../components/ExpensesSummary'

test('should render ExpensesSummary correctly with one expense', () => {
  const wrapper = shallow(<ExpensesSummary expenseCount={1} expensesTotal={10000} />)

  expect(wrapper).toMatchSnapshot()
})

test('should render ExpensesSummary correctly with multiple expenses', () => {
  const wrapper = shallow(<ExpensesSummary expenseCount={7} expensesTotal={77777} />)

  expect(wrapper).toMatchSnapshot()
})
