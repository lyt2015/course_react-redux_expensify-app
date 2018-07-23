import React from 'react'
import { connect } from 'react-redux'

import ExpenseForm from './ExpenseForm'
import RemoveExpenseModal from './RemoveExpenseModal'
import { startEditExpense, startRemoveExpense } from '../actions/expenses'

export class EditExpensePage extends React.Component {
  state = {
    isModalOpen: false,
  }

  onSubmit = expense => {
    this.props.startEditExpense(this.props.expense.id, expense)
    this.props.history.push('/')
  }

  confirmRemove = () => {
    this.props.startRemoveExpense({ id: this.props.expense.id })
    this.handleCloseModal()
    this.props.history.push('/')
  }

  onRemove = () => {
    this.setState(() => ({ isModalOpen: true }))
  }

  handleCloseModal = () => {
    this.setState(() => ({ isModalOpen: false }))
  }

  render() {
    return (
      <div>
        <div className="page-header">
          <div className="content-container">
            <h1 className="page-header__title">Edit Expense</h1>
          </div>
        </div>
        <div className="content-container">
          <ExpenseForm expense={this.props.expense} onSubmit={this.onSubmit} />
          <button className="button--secondary" onClick={this.onRemove}>
            Remove Expense
          </button>
        </div>
        <RemoveExpenseModal
          isOpen={this.state.isModalOpen}
          handleCloseModal={this.handleCloseModal}
          selectedExpense={this.props.expense.description}
          confirmRemove={this.confirmRemove}
        />
      </div>
    )
  }
}

const mapStateToProps = (state, props) => ({
  expense: state.expenses.find(({ id }) => id === props.match.params.id),
})

const mapDispatchToProps = dispatch => ({
  startEditExpense: (id, expense) => {
    dispatch(startEditExpense(id, expense))
  },
  startRemoveExpense: data => {
    dispatch(startRemoveExpense(data))
  },
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(EditExpensePage)
