import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import numeral from 'numeral'

import selectExpenses from '../selectors/expenses'
import selectExpensesTotal from '../selectors/expenses-total'

export const ExpensesSummary = ({ expenseCount, expensesTotal, hiddenExpenseCount }) => (
  <div className="page-header">
    <div className="content-container">
      <h1 className="page-header__title">
        Viewing <span>{expenseCount}</span> expense{expenseCount === 1 ? '' : 's'} totalling{' '}
        <span>{numeral(expensesTotal / 100.0).format('$0,0.00')}</span>
      </h1>
      <h3 className="page-header__title">
        {hiddenExpenseCount !== 0
          ? `${hiddenExpenseCount} expense${hiddenExpenseCount === 1 ? '' : 's'}
          hidden by filters`
          : 'Showing all expenses'}
      </h3>
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
    hiddenExpenseCount: state.expenses.length - expenses.length,
  }
}

export default connect(mapStateToProps)(ExpensesSummary)
