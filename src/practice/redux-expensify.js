import { createStore, combineReducers } from 'redux'
import uuid from 'uuid'

// ADD_EXPENSE
const addExpense = ({ description = '', note = '', amount = 0, createdAt = 0 } = {}) => ({
  type: 'ADD_EXPENSE',
  expense: {
    id: uuid(),
    description,
    note,
    amount,
    createdAt,
  },
})

// REMOVE_EXPENSE
const removeExpense = ({ id }) => ({
  type: 'REMOVE_EXPENSE',
  id,
})

// EDIT_EXPENSE
const editExpense = (id, updates) => ({
  type: 'EDIT_EXPENSE',
  id,
  updates,
})

// SET_TEXT_FILTER
const setTextFilter = (text = '') => ({
  type: 'SET_TEXT_FILTER',
  text,
})

// SORT_BY_DATE
const sortByDate = () => ({
  type: 'SORT_BY_DATE',
})

// SORT_BY_AMOUNT
const sortByAmount = () => ({
  type: 'SORT_BY_AMOUNT',
})

// SET_START_DATE
const setStartDate = startDate => ({
  type: 'SET_START_DATE',
  startDate,
})

// SET_END_DATE
const setEndDate = endDate => ({
  type: 'SET_END_DATE',
  endDate,
})

// Expenses Reducer
const expensesReducerDefaultState = []
const expenseReducer = (state = expensesReducerDefaultState, action) => {
  switch (action.type) {
    case 'ADD_EXPENSE':
      return [...state, action.expense]
    case 'REMOVE_EXPENSE':
      return state.filter(({ id }) => id !== action.id)
    case 'EDIT_EXPENSE':
      return state.map(expense => {
        if (expense.id === action.id) {
          return {
            ...expense,
            ...action.updates,
          }
        }
        return expense
      })
    default:
      return state
  }
}

// Filters Reducer
const filtersReducerDefaultState = {
  text: '',
  sortBy: 'date',
  startDate: undefined,
  endDate: undefined,
}
const filtersReducer = (state = filtersReducerDefaultState, action) => {
  switch (action.type) {
    case 'SET_TEXT_FILTER':
      return {
        ...state,
        text: action.text,
      }
    case 'SORT_BY_DATE':
      return {
        ...state,
        sortBy: 'date',
      }
    case 'SORT_BY_AMOUNT':
      return {
        ...state,
        sortBy: 'amount',
      }
    case 'SET_START_DATE':
      return {
        ...state,
        startDate: action.startDate,
      }
    case 'SET_END_DATE':
      return {
        ...state,
        endDate: action.endDate,
      }
    default:
      return state
  }
}

// Get visible expenses
const getVisibleExpenses = (expenses, { text, sortBy, startDate, endDate }) => {
  expenses
    .filter(expense => {
      const textMatch = expense.description.toLowerCase().includes(text.toLowerCase())
      const startDateMatch = typeof startDate !== 'number' || expense.createdAt >= startDate
      const endDateMatch = typeof endDate !== 'number' || expense.createdAt <= endDate

      return textMatch && startDateMatch && endDateMatch
    })
    .sort((a, b) => {
      if (sortBy === 'date') {
        return b.createdAt - a.createdAt
      }

      if (sortBy === 'amount') {
        return b.amount - a.amount
      }

      return 0
    })
}

// Store Creation
const store = createStore(
  combineReducers({
    expenses: expenseReducer,
    filters: filtersReducer,
  })
)

const unsubcribe = store.subscribe(() => {
  const state = store.getState()
  // console.log(state.expenses)
  const visibleExpenses = getVisibleExpenses(state.expenses, state.filters)
  console.log(visibleExpenses)

  // console.log(store.getState())
})

// const expense1 = store.dispatch(addExpense())
const expense2 = store.dispatch(
  addExpense({ amount: 100, description: 'Learning', createdAt: -10000 })
)
const expense3 = store.dispatch(addExpense({ description: 'Downloading', createdAt: -1000 }))

// const removedExpense1 = store.dispatch(removeExpense({ id: expense1.expense.id }))

// const editedExpense2 = store.dispatch(editExpense(expense2.expense.id, { amount: 200 }))

// const filters1 = store.dispatch(setTextFilter('ing'))
// const filters2 = store.dispatch(setTextFilter())

// const filters5 = store.dispatch(setStartDate(100))
// const filters6 = store.dispatch(setStartDate())
// const filters7 = store.dispatch(setEndDate(0))

const filters3 = store.dispatch(sortByAmount())
const filters4 = store.dispatch(sortByDate())

const demoState = {
  expenses: [
    {
      id: 'temp-id',
      description: 'Music Player',
      note: 'AK70 II',
      amount: 70000,
      createdAt: 0,
    },
  ],
  filters: {
    text: 'music',
    sortBy: 'amount', // amount or date
    startDate: undefined,
    endDate: undefined,
  },
}

// console.log('redux-expensify.js')
