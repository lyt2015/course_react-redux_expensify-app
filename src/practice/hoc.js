// Higher Order Component (HOC) - A component that render another component
// Advantages: reuse code, render hijacking, prop manipulation, abstract state

import React from 'react'
import ReactDOM from 'react-dom'

const Info = props => (
  <div>
    <h1>Info</h1>
    <p>The info is: {props.info}</p>
  </div>
)

const withAdminWarning = WrappedComponent => props => (
  <div>
    {props.isAdmin && <p>This is private info. Please don&apos;t share.</p>}
    <WrappedComponent {...props} />
  </div>
)

const AdminInfo = withAdminWarning(Info)

const requireAuthentication = WrappedComponent => props => (
  <div>
    {props.isAuthenticated ? (
      <WrappedComponent {...props} />
    ) : (
      <p>Please login to view this info.</p>
    )}
  </div>
)

const AuthInfo = requireAuthentication(Info)

ReactDOM.render(
  <AuthInfo isAuthenticated={true} info="These are the details" />,
  document.getElementById('app')
)
// ReactDOM.render(
//   <AdminInfo isAdmin={true} info="These are the details" />,
//   document.getElementById('app')
// )
