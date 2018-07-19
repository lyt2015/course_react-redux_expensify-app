import authReducer from '../../reducers/auth'

test('should set uid for login', () => {
  const uid = '777'
  const state = authReducer({}, { type: 'LOGIN', uid })

  expect(state).toEqual({ uid })
})

test('should clear uid for logout', () => {
  let state = { uid: '777' }
  state = authReducer(state, { type: 'LOGOUT' })

  expect(state).toEqual({})
})
