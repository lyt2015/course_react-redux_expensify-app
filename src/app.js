import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'

import AppRouter from './routers/AppRouter'
import configureStore from './store/configureStore'
import getVisibleExpenses from './selectors/expenses'
import { addExpense } from './actions/expenses'
import { setTextFilter } from './actions/filters'

import 'normalize.css/normalize.css'

import './styles/styles.scss'

const store = configureStore()

const unsubscribe = store.subscribe(() => {
  const state = store.getState()
  console.log(state)

  const visibleExpenses = getVisibleExpenses(state.expenses, state.filters)
  console.log(visibleExpenses)
})

store.dispatch(addExpense({ description: 'Course bill', amount: 300 }))
store.dispatch(addExpense({ description: 'Utilities bill', amount: 100 }))
store.dispatch(setTextFilter('bill'))

setTimeout(() => {
  store.dispatch(setTextFilter('course'))
}, 1000)

unsubscribe()

const jsx = (
  <Provider store={store}>
    <AppRouter />
  </Provider>
)

ReactDOM.render(jsx, document.getElementById('app'))
