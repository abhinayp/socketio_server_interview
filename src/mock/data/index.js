const users = require('./user.json')
const events = require('./events.json')

const getUserById = (id) => users.find(u => u['id'] == id)

const eventInfo = events.map(e => {
  return {
    type: e.type,
    data: {
      body: e.message,
      user: getUserById(e.user)
    }
  }
})


module.exports = { eventInfo }
