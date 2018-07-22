import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import numeral from 'numeral'

import selectExpenses from '../selectors/expenses'
import selectExpensesTotal from '../selectors/expenses-total'

export const ExpensesSummary = ({ expenseCount, expensesTotal }) => (
  <div className="page-header">
    <div className="content-container">
      <h1 className="page-header__title">
        Viewing <span>{expenseCount}</span> expense{expenseCount === 1 ? '' : 's'} totalling{' '}
        <span>{numeral(expensesTotal / 100.0).format('$0,0.00')}</span>
      </h1>
      <div className="page-header__actions">
        <Link className="button" to="create">
          Add Expense
        </Link>
      </div>
    </div>
  </div>
)

const mapStateToProps = state => {
  const expenses = selectExpenses(state.expenses, state.filters)

  return {
    expenseCount: expenses.length,
    expensesTotal: selectExpensesTotal(expenses),
  }
}

export default connect(mapStateToProps)(ExpensesSummary)
