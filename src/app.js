import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter, Route } from 'react-router-dom'

import 'normalize.css/normalize.css'

import './styles/styles.scss'

const ExpenseDashboardPage = () => (
  <div>
    <p>This is from my dashboard component</p>
    <a href="/create">create</a>
    <br />
    <a href="/edit">edit</a>
    <br />
    <a href="/help">help</a>
  </div>
)

const AddExpensePage = () => <div>This is from my add expense component</div>
const EditExpensePage = () => <div>This is from my edit expense component</div>
const HelpPage = () => <div>This is from my help component</div>

const routes = (
  <BrowserRouter>
    <div>
      <Route path="/" component={ExpenseDashboardPage} exact={true} />
      <Route path="/create" component={AddExpensePage} />
      <Route path="/edit" component={EditExpensePage} />
      <Route path="/help" component={HelpPage} />
    </div>
  </BrowserRouter>
)

ReactDOM.render(routes, document.getElementById('app'))
