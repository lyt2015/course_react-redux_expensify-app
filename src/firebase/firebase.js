// import * as firebase from 'firebase'

import firebase from 'firebase/app'
import 'firebase/database'
import 'firebase/auth'

const config = {
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: process.env.FIREBASE_AUTH_DOMAIN,
  databaseURL: process.env.FIREBASE_DATABASE_URL,
  projectId: process.env.FIREBASE_PROJECT_ID,
  storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
}
firebase.initializeApp(config)
const database = firebase.database()

const googleAuthProvider = new firebase.auth.GoogleAuthProvider()

export { firebase, googleAuthProvider, database as default }

/*
const snapshotToArray = snapshot => {
  const array = []

  snapshot.forEach(childSnapshot => {
    array.push({
      id: childSnapshot.key,
      ...childSnapshot.val(),
    })
  })

  return array
}

// child_removed event
database.ref('expenses').on('child_removed', snapshot => {
  console.log(snapshot.key, snapshot.val())
})

// child_changed event
database.ref('expenses').on('child_changed', snapshot => {
  console.log(snapshot.key, snapshot.val())
})

// child_added event
database.ref('expenses').on('child_added', snapshot => {
  console.log(snapshot.key, snapshot.val())
})
 */

/*
database.ref('expenses').on('value', snapshot => {
  const expenses = snapshotToArray(snapshot)

  console.log(expenses)
})
 */

/*
database
  .ref('expenses')
  .once('value')
  .then(snapshot => {
    const expenses = []

    snapshot.forEach(childSnapshot => {
      expenses.push({
        id: childSnapshot.key,
        ...childSnapshot.val(),
      })
    })

    console.log(expenses)
  })
 */

/*
database.ref('expenses').push({
  description: 'React courses',
  note: '',
  amount: 100,
  createdAt: 0,
})
 */

/*
database.ref('notes').push({
  title: 'udemy course',
  body: 'Javascript',
})
 */

/*
const firebaseNotes = {
  notes: {
    sdfsaf: {
      title: 'First note',
      body: 'This is the first note',
    },
    ieruwoir: {
      title: 'Second note',
      body: 'This is the second note',
    },
  },
}

const notes = [
  {
    id: '001',
    title: 'First note',
    body: 'This is the first note',
  },
  {
    id: '002',
    title: 'Second note',
    body: 'This is the second note',
  },
]

database.ref('notes').set(firebaseNotes)
 */

/*
database.ref().on(
  'value',
  snapshot => {
    const val = snapshot.val()
    const {
      name,
      duty: { title },
      location: { planet },
    } = val

    console.log(`${name} is a ${title} of ${planet}.`)
  },
  err => {
    console.log('Error with data fetching', err)
  }
)
 */

/*
const onValueChange = database.ref().on(
  'value',
  snapshot => {
    console.log(snapshot.val())
  },
  err => {
    console.log('Error with data fetching', err)
  }
)

setTimeout(() => {
  database.ref().update({
    age: 300,
  })
}, 3000)

setTimeout(() => {
  database.ref().off('value', onValueChange)
}, 5000)

setTimeout(() => {
  database.ref().update({
    age: 30000,
  })
}, 7000)
 */

/*
database
  .ref('duty/title')
  .once('value')
  .then(snapshot => {
    const val = snapshot.val()
    console.log(val)
  })
  .catch(err => {
    console.log('Failed to fetch data', err)
  })
 */

/*
database
  .ref()
  .set({
    name: 'Zin Ark',
    age: 30000,
    stressLevel: 7,
    duty: {
      title: 'Protector',
      target: 'Bugs',
    },
    isHuman: false,
    location: {
      continent: 'Pacific',
      planet: 'Earth',
      galaxy: 'Leon',
    },
  })
  .then(() => {
    console.log('Data is saved')

    return database.ref('attributes').set({
      height: 17,
      weight: 90000,
    })
  })
  .then(() => {
    console.log('Data is updated')

    return database.ref('isHuman').set(null)
  })
  .then(() => {
    console.log('Some data is removed')
  })
  .catch(err => {
    console.log('Failed to save data', err)
  })

database
  .ref()
  .update({
    stressLevel: 9,
    'duty/target': 'Bugs and Animals',
    'location/planet': 'Saturn',
  })
  .then(() => {
    console.log('Date is updated')
  })
  .catch(err => {
    console.log('Failed to update data', err)
  })
 */

// database.ref().set('Sent from javascript.')

// database.ref().set({
//   age: 3000,
// })

// database.ref('age').set(3000)
// database.ref('location/continent').set('Pacific Sea')

// database.ref('school/elementary').set('Yes')

// database
//   .ref('isHuman')
//   .remove()
//   .then(() => {
//     console.log('Some data is removed')
//   })
//   .catch(err => {
//     console.log('Failed to remove some data', err)
//   })

// console.log('I made a request to change the data.')
