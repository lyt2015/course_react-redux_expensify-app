const moment = require.requireActual('moment')

// This method will fail
// import moment from 'moment'

export default (timestamp = 0) => {
  return moment(timestamp)
}
