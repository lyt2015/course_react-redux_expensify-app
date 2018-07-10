import moment from 'moment'

// Get visible expenses
export default (expenses, { text, sortBy, startDate, endDate }) => {
  return expenses
    .filter(expense => {
      const momentCreatedAt = moment(expense.createdAt)
      const textMatch = expense.description.toLowerCase().includes(text.toLowerCase())
      const startDateMatch = !startDate || momentCreatedAt.isSameOrAfter(moment(startDate), 'day')
      const endDateMatch = !endDate || momentCreatedAt.isSameOrBefore(moment(endDate), 'day')

      return textMatch && startDateMatch && endDateMatch
    })
    .sort((a, b) => {
      if (sortBy === 'date') {
        // Newer one comes first
        return b.createdAt - a.createdAt
      }

      if (sortBy === 'amount') {
        // Pricier one comes first
        return b.amount - a.amount
      }

      return 0
    })
}
