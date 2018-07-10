// Get visible expenses
export default (expenses, { text, sortBy, startDate, endDate }) => {
  return expenses
    .filter(expense => {
      const textMatch = expense.description.toLowerCase().includes(text.toLowerCase())
      const startDateMatch = typeof startDate !== 'number' || expense.createdAt >= startDate
      const endDateMatch = typeof endDate !== 'number' || expense.createdAt <= endDate

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
