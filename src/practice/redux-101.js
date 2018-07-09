import { createStore } from 'redux'

// ACtion generators - functions that return action objects

const incrementCount = ({ by } = { by: 1 }) => ({
  type: 'INCREMENT',
  by,
})

const decrementCount = ({ by } = { by: 1 }) => ({
  type: 'DECREMENT',
  by,
})

const setCount = ({ by }) => ({
  type: 'SET',
  by,
})

const resetCount = () => ({ type: 'RESET' })

// Reducers
// 1. Reducers are pure functions(output only depends on input, doesn't change outside variables)
// 2. Never change state or action
const countReducer = (state = { count: 0 }, action) => {
  console.log('createStore')

  switch (action.type) {
    case 'INCREMENT': {
      return {
        count: state.count + action.by,
      }
    }
    case 'DECREMENT': {
      return {
        count: state.count - action.by,
      }
    }
    case 'SET':
      return {
        count: action.by,
      }
    case 'RESET':
      return {
        count: 0,
      }
    default:
      return state
  }
}

const store = createStore(countReducer)

const unsubscribe = store.subscribe(() => {
  console.log(store.getState())
})

// Actions - an object that gets sent to the store

// I'd like to increment and decrement the count
// I'd like to reset the count to zero

store.dispatch(incrementCount({ by: 10 }))
store.dispatch(incrementCount({ by: 100 }))
store.dispatch(incrementCount())

store.dispatch(resetCount())

store.dispatch(decrementCount({ by: 10 }))
store.dispatch(decrementCount({ by: 100 }))
store.dispatch(decrementCount())

store.dispatch(setCount({ by: 3000 }))

// Stop running callback function when store updates
unsubscribe()
