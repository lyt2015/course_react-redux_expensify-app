import React from 'react'
import { connect } from 'react-redux'
import { NavLink } from 'react-router-dom'

import { startLogout } from '../actions/auth'

// eslint-disable-next-line no-shadow
export const Header = ({ startLogout }) => (
  <header>
    <h1>Expensify</h1>
    <NavLink to="/dashboard" activeClassName="is-active">
      Dashboard
    </NavLink>
    <br />
    <NavLink to="/create" activeClassName="is-active">
      Create Expense
    </NavLink>
    <br />
    <NavLink to="/help" activeClassName="is-active">
    Help
    </NavLink>
    <br />
    <button onClick={startLogout}>Logout</button>
  </header>
)

const mapDispatchToProps = dispatch => ({
  startLogout: () => dispatch(startLogout()),
})

export default connect(
  undefined,
  mapDispatchToProps
)(Header)
