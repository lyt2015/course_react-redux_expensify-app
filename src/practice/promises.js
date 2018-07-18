const promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve('This is my resolve data')
    // reject(Error('Something went wrong!'))
  }, 2000)
})

console.log('before')

promise
  .then(data => {
    console.log('1', data)

    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve('a new promise')
      }, 2000)
    })
  })
  .then(res => {
    console.log(`I got ${res}`)
  })
  .catch(err => {
    console.log(err)
  })

console.log('after')
