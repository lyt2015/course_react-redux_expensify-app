// console.log('destructuring.js')

/* Obejct Destructuring */
console.log('/* Obejct Destructuring */')
const person = {
  name: 'Lisa',
  age: 3000,
  loc: {
    continent: 'Asia',
    planet: 'Earth',
  },
}

const {
  name: firstName = 'Anonymous',
  age,
  loc: location,
  loc: { planet, continent },
} = person

console.log(`${firstName} is ${age}.`)
console.log(location)
console.log(`${firstName} lives in ${continent} of ${planet}.`)

const book = {
  title: 'Ego is the Enemy',
  author: 'Ryan Holiday',
  publisher: {
    name: 'Penguin',
  },
}

const {
  publisher: { name: publisherName = 'Self-Published' },
} = book

console.log(publisherName)

/* Array Destructuring */
console.log('/* Array Destructuring */')

const address = ['1000 Fantasy Street', 'Kaohsiung', 'Taiwan', '807']
const [, city, country = 'Earth'] = address
console.log(`You are in ${city} ${country}.`)

const item = ['Coffee (hot)', '$2.00', '$2.50', '$2.75']
const [itemName, , mediumPrice] = item
console.log(`A medium ${itemName} costs ${mediumPrice}.`)
