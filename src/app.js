import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'

import AppRouter from './routers/AppRouter'
import configureStore from './store/configureStore'
import getVisibleExpenses from './selectors/expenses'
import { addExpense } from './actions/expenses'

import 'normalize.css/normalize.css'

import './styles/styles.scss'
import 'react-dates/lib/css/_datepicker.css'


const store = configureStore()

const unsubscribe = store.subscribe(() => {
  const state = store.getState()
  console.log(state)

  const visibleExpenses = getVisibleExpenses(state.expenses, state.filters)
  console.log(visibleExpenses)
})
unsubscribe()

store.dispatch(addExpense({ description: 'Course fee', amount: 3000, createdAt: 2000 }))
store.dispatch(addExpense({ description: 'Utilities fee', amount: 1000, createdAt: 1000 }))
store.dispatch(addExpense({ description: 'Rent', amount: 10000, createdAt: 100 }))

const jsx = (
  <Provider store={store}>
    <AppRouter />
  </Provider>
)

ReactDOM.render(jsx, document.getElementById('app'))
