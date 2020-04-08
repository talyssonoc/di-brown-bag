const User = require('./User')

const userRepository = () => ({
  _users:  [],
  _lastId: 0,
  
  async save(newUser) {
    console.log(`Saving user ${newUser.name}`)

    const user = User.build({
      ...newUser,
      id: ++this._lastId
    })

    return user
  }
})


module.exports = userRepository
